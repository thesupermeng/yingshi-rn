import { useAppDispatch, useAppSelector, useSelector } from '@hooks/wawa_root';
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from '../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video';
import NetInfo from '@react-native-community/netinfo';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { wawaBackground } from '@redux/reducers/wawa_comment';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';
import { wawaBingPing } from '@type/wawa_gradlew';
import { screenModel } from '@type/wawa_rules';
import { API_DOMAIN_TEST } from '@utility/wawa_iconpointscore';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { AppState, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useMinivodQuery } from '@api';
import EighteenPlusControls from '../components/adultVideo/wawa_chinasame_updates';
import ScreenContainer from '../components/container/wawa_nterstitial_iconpipexpand';
import MiniVideoList from '../components/videoPlayer/WatchAnytime/wawa_sans_success';
import NoConnection from './../components/common/wawa_filed_privacy';
import { CPressable } from '../components/atoms';
import { showLoginAction } from '@redux/actions/wawa_related';
import { wawaPhoneControls } from '@redux/reducers/wawa_umeng';
import { wawaLibglog } from '@models/wawa_refreshborderless_found';
import BecomeVipOverlay from '../components/modal/wawa_arrowrightwithtail';
import { ADULT_MODE_PREVIEW_DURATION, MINI_SHOW_LOGIN_NUMBER } from '@utility/wawa_iconpointscore';

type wawaSheet = {
  data: {
    List: Array<wawaBingPing>;
  };
};

type wawaLibavutil = {
  setPause: (pause: boolean) => void;
};

const LIMIT = 300;

function WatchAnytime({ navigation }: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  
  const [isInBackground, setIsInBackground] = useState(false);
  const [flattenedVideos, setFlattenedVideos] = useState(Array<wawaBingPing>);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isPressTabScroll, setPressTabScroll] = useState(false);
  const [isShowAdOverlay, setShowAdOverlay] = useState(false);
  const miniVodRef = useRef<wawaLibavutil>();
  const miniVodListRef = useRef<any>();
  const dispatch = useAppDispatch();

  const settingsReducer: wawaBackground = useAppSelector(
    ({ settingsReducer }: wawaIconsubssuccess) => settingsReducer,
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer,
  );

  const userState = useSelector<wawaPhoneControls>('userReducer');
  const { adultMode: adultModeGlobal, watchAnytimeAdultMode } = screenState;
  const adultMode = watchAnytimeAdultMode;

  const isVip = wawaLibglog.isVip(userState.user);

  const fetchMode = adultMode ? 'adult' : 'normal';
  const isFocusLogin = useRef(false);

  
  
  const handleAppStateChange = (nextAppState: any) => {
    setIsInBackground(nextAppState !== 'active');
  };

  const handleRefresh = useCallback(async () => {
       let subbasketballplayerD = 3;
    let textinputo = true;
    let exampleimage4 = 1.0;
    let iconsaveimageK = 2.0;
    let iconscheduleC = 4;
    let penaltyshootz = 2.0;
    let predictionactive5 = String.fromCharCode(108,95,52,55,95,105,116,101,114,97,116,111,114,0);
    let statisticse = true;
    let profileactivee = 0.0;
    let matchO: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,103,114,111,117,110,100,95,108,95,56,53,0),860], [String.fromCharCode(100,117,112,99,108,95,50,95,52,49,0),827]]);
      statisticse = 57.100 >= exampleimage4;
       let profilepicC = String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,95,102,95,49,51,0);
      let filled7 = String.fromCharCode(50,95,116,108,109,121,0) == profilepicC;
      do {
         profilepicC += `${2 - profilepicC.length}`;
         if (filled7) {
            break;
         }
      } while ((profilepicC.endsWith(`${profilepicC.length}`)) && filled7);
         profilepicC += `${profilepicC.length / 2}`;
          let codegen3 = String.fromCharCode(122,95,57,51,95,112,105,99,116,117,114,101,0);
         profilepicC = `${profilepicC.length - codegen3.length}`;
      iconsaveimageK += ((statisticse ? 4 : 1) + subbasketballplayerD);
       let mathk = 2.0;
       let orangedownarrow8 = 2.0;
       let loadingspinnerX = String.fromCharCode(101,95,51,52,95,97,108,114,101,97,100,121,0);
      if ((loadingspinnerX.length / (Math.max(6, parseInt(`${orangedownarrow8}`)))) == 4 && 2 == (loadingspinnerX.length | 4)) {
          let libhermes3: Map<any, any> = new Map([[String.fromCharCode(110,95,56,53,95,105,109,112,114,105,110,116,0),131], [String.fromCharCode(112,101,114,109,105,115,115,105,111,110,115,95,104,95,49,57,0),262]]);
         orangedownarrow8 += parseFloat(`${parseInt(`${mathk}`)}`);
         libhermes3.set(`${libhermes3.size}`, libhermes3.size);
      }
      if (orangedownarrow8 > parseFloat(`${loadingspinnerX.length}`)) {
         orangedownarrow8 /= Math.max(2, parseFloat(`${parseInt(`${orangedownarrow8}`) | 3}`));
      }
      let libpangleflippedp = 5809170.0 >= mathk;
      do {
         mathk += parseInt(`${orangedownarrow8}`);
         if (libpangleflippedp) {
            break;
         }
      } while (libpangleflippedp && (5.19 <= orangedownarrow8));
      while (4.51 > (mathk + 5)) {
         orangedownarrow8 *= (parseFloat(`${loadingspinnerX == String.fromCharCode(102,0) ? parseInt(`${orangedownarrow8}`) : loadingspinnerX.length}`));
         break;
      }
      if (5.61 <= (5.34 / (Math.max(8, orangedownarrow8)))) {
         orangedownarrow8 += parseFloat(`${loadingspinnerX.length}`);
      }
      if ((4 | loadingspinnerX.length) >= 3) {
          let hoverI = String.fromCharCode(112,111,111,108,115,95,113,95,50,52,0);
          let gmail4 = String.fromCharCode(117,95,51,51,0);
          let layoutF = 5;
         orangedownarrow8 *= parseFloat(`${hoverI.length / 3}`);
         hoverI += `${layoutF % 3}`;
         gmail4 += `${(gmail4 == String.fromCharCode(97,0) ? gmail4.length : layoutF)}`;
      }
       let infoW = String.fromCharCode(99,104,97,110,103,101,95,103,95,56,54,0);
       let halffieldimageP = String.fromCharCode(114,111,119,95,105,95,56,57,0);
      for (let z = 0; z < 3; z++) {
          let clockm = String.fromCharCode(122,95,49,49,95,118,101,114,116,115,0);
         loadingspinnerX = `${(infoW == String.fromCharCode(67,0) ? infoW.length : halffieldimageP.length)}`;
         clockm += `${clockm.length % 2}`;
      }
      while (infoW == String.fromCharCode(83,0)) {
         loadingspinnerX = `${loadingspinnerX.length - parseInt(`${orangedownarrow8}`)}`;
         break;
      }
      predictionactive5 += `${(parseInt(`${iconsaveimageK}`) ^ (textinputo ? 3 : 1))}`;
       let iconclosewhite_ = String.fromCharCode(104,95,50,48,95,115,105,110,99,101,0);
       let heart4 = String.fromCharCode(103,95,52,55,95,115,100,116,112,0);
       let chinasamei = String.fromCharCode(99,97,112,112,101,100,95,56,95,54,0);
         chinasamei += `${iconclosewhite_.length / (Math.max(1, 9))}`;
      let footballfieldy = chinasamei == String.fromCharCode(113,48,106,55,55,106,49,0);
      do {
          let dangerq = 5.0;
          let select8 = 0.0;
          let greytickf: Array<any> = [636, 367];
          let networkf: Map<any, any> = new Map([[String.fromCharCode(98,95,49,56,95,101,116,104,101,114,116,117,112,108,105,115,0),true ], [String.fromCharCode(97,95,51,57,95,119,114,105,116,101,114,0),false ]]);
         chinasamei += `${parseInt(`${dangerq}`)}`;
         dangerq += parseFloat(`${3}`);
         select8 -= parseFloat(`${1 + greytickf.length}`);
         greytickf.push(networkf.size);
         networkf.set(`${select8}`, networkf.size & 2);
         if (footballfieldy) {
            break;
         }
      } while ((iconclosewhite_.startsWith(`${chinasamei.length}`)) && footballfieldy);
      for (let z = 0; z < 2; z++) {
         chinasamei += `${3 << (Math.min(5, iconclosewhite_.length))}`;
      }
         chinasamei += `${iconclosewhite_.length % (Math.max(heart4.length, 6))}`;
         iconclosewhite_ += `${1 ^ iconclosewhite_.length}`;
         iconclosewhite_ += `${2 & heart4.length}`;
       let directC = String.fromCharCode(115,112,114,105,116,101,115,95,111,95,50,54,0);
       let rncorem = String.fromCharCode(112,97,117,115,101,95,103,95,57,56,0);
      let textn = rncorem.length >= 6117646;
      do {
         rncorem += `${rncorem.length >> (Math.min(2, chinasamei.length))}`;
         if (textn) {
            break;
         }
      } while (textn && (5 > directC.length && rncorem.length > 5));
       let whiteanimationlivef = false;
       let defaultprofilepicc = false;
      exampleimage4 += (parseFloat(`${(statisticse ? 1 : 4)}`));
   while (4 >= (parseInt(`${penaltyshootz}`) / (Math.max(8, predictionactive5.length))) && (penaltyshootz / (Math.max(5.25, 6))) >= 1.23) {
       let iconarrowright1 = String.fromCharCode(106,95,51,95,100,105,118,105,100,101,100,0);
       let uploadV = 3.0;
       let y_centerJ: Map<any, any> = new Map([[String.fromCharCode(115,95,57,57,95,103,114,111,119,105,110,103,0),907], [String.fromCharCode(105,95,56,95,118,116,114,107,0),333], [String.fromCharCode(115,105,122,101,95,53,95,57,57,0),450]]);
       let iconarrowrightN = true;
       let iconwatchnowX = true;
      while ((2 & iconarrowright1.length) == 2) {
         uploadV -= 2;
         break;
      }
       let chatN: Array<any> = [457, 537, 715];
      let nativeexv = y_centerJ.size >= 8787218;
      do {
         y_centerJ = new Map([[`${chatN.length}`, chatN.length]]);
         if (nativeexv) {
            break;
         }
      } while ((2.57 <= (y_centerJ.size * uploadV) && (uploadV * y_centerJ.size) <= 2.57) && nativeexv);
          let scrollviewi = String.fromCharCode(119,95,52,55,95,99,97,114,116,101,115,105,97,110,0);
         uploadV += (y_centerJ.size - (iconarrowrightN ? 5 : 3));
         scrollviewi = `${scrollviewi.length}`;
      if ((chatN.length * parseInt(`${uploadV}`)) < 3) {
         chatN = [chatN.length << (Math.min(Math.abs(2), 3))];
      }
         chatN = [(2 | (iconwatchnowX ? 3 : 5))];
      while (iconwatchnowX) {
         iconwatchnowX = uploadV == 38.94;
         break;
      }
       let icontransferclubX = 0;
          let ballx = String.fromCharCode(108,95,56,49,95,104,121,115,116,101,114,101,115,105,115,0);
          let reviewn: Map<any, any> = new Map([[String.fromCharCode(108,95,53,56,95,118,97,114,115,0),String.fromCharCode(98,97,99,107,100,114,111,112,95,116,95,54,54,0)], [String.fromCharCode(114,95,52,53,95,102,111,114,101,103,114,111,117,110,100,0),String.fromCharCode(101,120,105,102,95,110,95,55,48,0)], [String.fromCharCode(100,118,118,105,100,101,111,95,101,95,57,48,0),String.fromCharCode(119,95,53,52,95,98,101,99,97,109,101,0)]]);
         y_centerJ = new Map([[`${reviewn.size}`, reviewn.size]]);
         ballx = `${ballx.length % (Math.max(7, ballx.length))}`;
      while (iconwatchnowX || 1 > iconarrowright1.length) {
         iconwatchnowX = chatN.includes(iconwatchnowX);
         break;
      }
         iconarrowright1 += `${chatN.length | 3}`;
      for (let w = 0; w < 3; w++) {
         iconwatchnowX = !iconwatchnowX;
      }
          let huaweiw = String.fromCharCode(97,95,50,54,95,109,116,105,109,101,0);
         uploadV /= Math.max(1, parseInt(`${uploadV}`));
         huaweiw = `${(String.fromCharCode(111,0) == huaweiw ? huaweiw.length : huaweiw.length)}`;
       let configuren = String.fromCharCode(121,95,50,54,95,97,110,100,0);
       let singlex = String.fromCharCode(97,99,99,101,115,115,111,114,115,95,120,95,52,56,0);
       let layoutT: Array<any> = [308, 814, 0];
      predictionactive5 = "1";
      break;
   }
      iconscheduleC <<= Math.min(1, parseInt(`${Math.abs(((textinputo ? 5 : 3) / (Math.max(4, parseInt(`${penaltyshootz}`)))))}`));

    setIsRefreshing(true);

   for (let s = 0; s < 2; s++) {
       let libreactperfloggerjniO = true;
       let bgvipxvodf = 0;
      while (5 > (1 * bgvipxvodf) || !libreactperfloggerjniO) {
         bgvipxvodf &= bgvipxvodf & 2;
         break;
      }
       let securityb = String.fromCharCode(117,95,56,55,95,97,114,103,120,0);
          let disconnectedlogoy = 3.0;
          let holder6 = 1.0;
         bgvipxvodf >>= Math.min(1, Math.abs(2 | securityb.length));
         disconnectedlogoy *= parseFloat(`${parseInt(`${disconnectedlogoy}`) % 3}`);
         holder6 -= parseFloat(`${parseInt(`${disconnectedlogoy}`)}`);
         bgvipxvodf >>= Math.min(Math.abs(2), 4);
      if (2 < (securityb.length * bgvipxvodf)) {
          let dragcloseg: Map<any, any> = new Map([[String.fromCharCode(109,117,108,104,105,95,106,95,54,55,0),false ], [String.fromCharCode(112,114,101,118,105,111,117,115,108,121,95,103,95,52,54,0),false ]]);
          let hiadj: Array<any> = [242, 157];
          let libavformat1: Map<any, any> = new Map([[String.fromCharCode(107,95,51,50,95,109,118,114,101,102,0),738], [String.fromCharCode(108,111,115,115,108,101,115,115,95,114,95,50,53,0),975], [String.fromCharCode(117,95,50,95,105,109,112,111,114,116,101,100,0),754]]);
          let textinputn = String.fromCharCode(100,101,103,114,97,100,101,100,95,50,95,56,0);
         securityb += `${(3 >> (Math.min(3, Math.abs((libreactperfloggerjniO ? 5 : 5)))))}`;
         dragcloseg = new Map([[`${dragcloseg.size}`, hiadj.length ^ 2]]);
         hiadj.push(1);
         libavformat1 = new Map([[`${libavformat1.size}`, textinputn.length]]);
         textinputn += `${hiadj.length}`;
      }
      for (let j = 0; j < 3; j++) {
         bgvipxvodf += ((libreactperfloggerjniO ? 2 : 5));
      }
      profileactivee -= parseFloat(`${parseInt(`${exampleimage4}`)}`);
   }
      exampleimage4 /= Math.max(5, parseFloat(`${3 >> (Math.min(Math.abs(subbasketballplayerD), 3))}`));
      subbasketballplayerD -= subbasketballplayerD;
       let borderlessT = 2.0;
      for (let c = 0; c < 2; c++) {
         borderlessT -= 3 - parseInt(`${borderlessT}`);
      }
         borderlessT -= parseInt(`${borderlessT}`);
       let basketballG = String.fromCharCode(100,101,98,117,103,98,111,120,95,101,95,54,51,0);
       let sendi = String.fromCharCode(115,95,52,57,95,98,99,100,117,105,110,116,0);
      statisticse = 79 <= (penaltyshootz + subbasketballplayerD);
      iconsaveimageK -= ((textinputo ? 5 : 5) | parseInt(`${exampleimage4}`));
      exampleimage4 += (parseFloat(`${(textinputo ? 1 : 5) >> (Math.min(Math.abs(3), 1))}`));
    

   while (statisticse) {
       let rncore5 = 2;
       let filterl = String.fromCharCode(114,101,108,97,121,115,95,105,95,54,57,0);
       let condensedQ = 4.0;
       let holderY = String.fromCharCode(117,110,99,111,110,115,117,109,101,100,95,109,95,56,57,0);
      for (let o = 0; o < 3; o++) {
          let dragV: Array<any> = [415, 466];
          let unselectedN = 5;
          let nativeexp = String.fromCharCode(118,95,50,48,95,99,104,101,99,107,98,111,120,0);
          let downloadingp: Array<any> = [430, 290, 297];
         rncore5 /= Math.max(2, 3);
         dragV.push(dragV.length % (Math.max(7, downloadingp.length)));
         unselectedN /= Math.max(nativeexp.length & dragV.length, 4);
         nativeexp = `${dragV.length}`;
         downloadingp = [downloadingp.length / 1];
      }
          let changeh = true;
          let skip9 = String.fromCharCode(107,95,53,49,95,119,105,100,116,104,0);
         filterl += `${((changeh ? 4 : 5) * parseInt(`${condensedQ}`))}`;
         changeh = 65 == skip9.length;
         skip9 = "2";
      while (3 == (rncore5 | 2) || 5 == (filterl.length | 2)) {
          let rncoreU = String.fromCharCode(109,97,115,107,95,53,95,55,52,0);
          let favoritev = String.fromCharCode(109,95,55,56,95,114,103,98,97,121,99,111,99,103,0);
          let short_mpb: Array<any> = [754, 34, 324];
          let cornerD = String.fromCharCode(106,95,54,54,95,112,102,105,108,116,101,114,0);
          let package_s_ = String.fromCharCode(122,95,53,52,95,114,101,109,111,118,101,0);
         filterl = `${(cornerD == String.fromCharCode(77,0) ? cornerD.length : filterl.length)}`;
         rncoreU = `${package_s_.length}`;
         favoritev = "1";
         short_mpb = [rncoreU.length - package_s_.length];
         break;
      }
       let dependency_: Array<any> = [176, 346, 828];
       let clockd: Array<any> = [579, 654, 835];
         filterl = `${filterl.length}`;
      while ((clockd.length + holderY.length) >= 3 || 4 >= (holderY.length + 3)) {
         clockd.push(dependency_.length);
         break;
      }
         dependency_ = [clockd.length + dependency_.length];
      for (let n = 0; n < 2; n++) {
         condensedQ /= Math.max(2, 2);
      }
      let rewardvideo1 = String.fromCharCode(115,55,119,52,0) == holderY;
      do {
         holderY += `${1 >> (Math.min(1, Math.abs(rncore5)))}`;
         if (rewardvideo1) {
            break;
         }
      } while ((holderY.endsWith(`${dependency_.length}`)) && rewardvideo1);
      if (filterl.length > 5) {
         condensedQ /= Math.max(filterl.length, 5);
      }
         clockd = [parseInt(`${condensedQ}`)];
         condensedQ *= holderY.length << (Math.min(2, Math.abs(rncore5)));
      statisticse = 21 > (subbasketballplayerD / (Math.max(2, penaltyshootz)));
      break;
   }
      iconscheduleC <<= Math.min(5, parseInt(`${Math.abs((parseInt(`${exampleimage4}`) >> (Math.min(5, Math.abs((textinputo ? 4 : 1))))))}`));
   for (let p = 0; p < 1; p++) {
       let defaultbasketballbgM: Map<any, any> = new Map([[String.fromCharCode(115,95,56,49,0),true ], [String.fromCharCode(114,117,110,108,111,111,112,95,108,95,51,50,0),true ]]);
       let inactivex = false;
       let hcopy_1vy = String.fromCharCode(99,120,100,97,116,97,95,111,95,52,51,0);
       let anytimel = String.fromCharCode(102,95,50,48,95,99,121,99,108,105,99,114,101,102,114,101,115,104,0);
       let pressureT: Map<any, any> = new Map([[String.fromCharCode(100,95,51,48,95,114,101,99,117,114,115,101,0),true ], [String.fromCharCode(101,95,54,50,95,115,101,116,0),true ]]);
          let activej = 1.0;
          let plashl = 0.0;
          let modityg = 1.0;
         hcopy_1vy = `${parseInt(`${plashl}`)}`;
         activej *= parseInt(`${modityg}`) | parseInt(`${activej}`);
         modityg -= 1 & parseInt(`${modityg}`);
      for (let g = 0; g < 2; g++) {
          let profileframeJ: Array<any> = [262, 530];
          let anythinkT = false;
          let weather3 = 2.0;
          let analyticsW = 1.0;
          let chatroombackground2 = 5.0;
         inactivex = 29 >= profileframeJ.length;
         profileframeJ = [1 % (Math.max(10, parseInt(`${analyticsW}`)))];
         anythinkT = 54.81 > weather3;
         weather3 *= parseInt(`${chatroombackground2}`);
         analyticsW *= parseFloat(`${parseInt(`${weather3}`) / 1}`);
         chatroombackground2 *= 2 & parseInt(`${chatroombackground2}`);
      }
      for (let i = 0; i < 2; i++) {
          let fullr: Map<any, any> = new Map([[String.fromCharCode(107,109,118,99,95,103,95,55,50,0),true ], [String.fromCharCode(114,95,56,57,95,99,111,110,102,105,103,117,114,101,0),false ]]);
         inactivex = defaultbasketballbgM.size == 24;
         fullr = new Map([[`${fullr.size}`, fullr.size + 1]]);
      }
      while (5 == (pressureT.size * anytimel.length)) {
         anytimel += `${anytimel.length}`;
         break;
      }
      for (let f = 0; f < 1; f++) {
         anytimel = `${1 | pressureT.size}`;
      }
      while (!inactivex) {
         inactivex = 10 >= pressureT.size || 10 >= anytimel.length;
         break;
      }
       let gradleS = String.fromCharCode(109,95,50,48,95,98,108,117,114,0);
       let release_c_4 = String.fromCharCode(118,115,114,99,95,118,95,51,57,0);
      while (inactivex && 5 <= (1 ^ defaultbasketballbgM.size)) {
         inactivex = String.fromCharCode(54,0) == gradleS;
         break;
      }
         inactivex = pressureT.size <= 78;
      if (gradleS.length == 4) {
         inactivex = release_c_4.length > 28 || anytimel == String.fromCharCode(102,0);
      }
      let libloggerZ = String.fromCharCode(120,100,100,116,115,122,50,114,0) == release_c_4;
      do {
         release_c_4 = `${pressureT.size}`;
         if (libloggerZ) {
            break;
         }
      } while (libloggerZ && (release_c_4.length <= 3));
      if (!release_c_4.endsWith(`${inactivex}`)) {
         inactivex = defaultbasketballbgM.get(`${inactivex}`) != null;
      }
          let injury_ = 0.0;
          let policyu = String.fromCharCode(116,114,105,112,95,98,95,50,52,0);
         release_c_4 += `${release_c_4.length / 1}`;
         injury_ -= policyu.length - 1;
         policyu = `${parseInt(`${injury_}`)}`;
         hcopy_1vy += `${defaultbasketballbgM.size << (Math.min(Math.abs(1), 5))}`;
          let placeholders = String.fromCharCode(115,95,50,51,95,107,105,110,100,0);
          let leakcheckerP = String.fromCharCode(104,119,114,97,110,100,95,54,95,55,57,0);
          let projectX = 2.0;
         pressureT.set(placeholders, leakcheckerP.length & 3);
         placeholders += `${2 % (Math.max(parseInt(`${projectX}`), 1))}`;
         leakcheckerP = `${parseInt(`${projectX}`) & 3}`;
      subbasketballplayerD |= 2 & subbasketballplayerD;
   }
       let reddownarrow9 = 3;
       let native8 = String.fromCharCode(111,114,105,101,110,116,95,49,95,53,55,0);
         native8 += `${3 ^ native8.length}`;
         native8 += `${reddownarrow9 % (Math.max(native8.length, 2))}`;
      while (4 == (4 - native8.length)) {
         native8 = `${native8.length ^ reddownarrow9}`;
         break;
      }
      while (3 <= reddownarrow9) {
         reddownarrow9 &= native8.length % (Math.max(2, 9));
         break;
      }
      let favorite0 = 7417282 <= native8.length;
      do {
          let o_imagex: Array<any> = [846, 555];
         native8 = `${3 >> (Math.min(3, Math.abs(reddownarrow9)))}`;
         o_imagex.push(3);
         if (favorite0) {
            break;
         }
      } while (favorite0 && ((native8.length | reddownarrow9) < 4));
         reddownarrow9 += 1;
      predictionactive5 = `${native8.length}`;
      profileactivee /= Math.max(4, parseFloat(`${parseInt(`${penaltyshootz}`)}`));
       let pagination4 = 3;
       let modulest: Array<any> = [469, 938];
         pagination4 <<= Math.min(4, Math.abs(2 >> (Math.min(2, modulest.length))));
      while (pagination4 == modulest.length) {
         modulest = [modulest.length];
         break;
      }
       let yellowtoredm: Array<any> = [470, 946, 280];
       let customf: Array<any> = [271, 841, 925];
          let loadingk = false;
          let loginsuccessX = true;
          let bgvipsportS = true;
         pagination4 += 2 - modulest.length;
         loadingk = (!loadingk ? !bgvipsportS : !loadingk);
         loginsuccessX = (loadingk ? bgvipsportS : !loadingk);
      while ((5 | customf.length) >= 3 && 5 >= (pagination4 | customf.length)) {
          let singleM = 3.0;
          let matchinactive_ = false;
          let expand6 = 3.0;
          let proxyG: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,114,105,110,103,95,116,95,49,49,0),67], [String.fromCharCode(97,118,102,109,116,95,56,95,56,57,0),60], [String.fromCharCode(101,95,49,49,95,110,101,103,111,116,105,97,116,101,100,0),762]]);
          let watchnowbgo = String.fromCharCode(113,95,54,56,95,102,105,110,103,101,114,0);
         pagination4 += 2;
         singleM -= 2;
         matchinactive_ = !matchinactive_;
         expand6 /= Math.max(watchnowbgo.length, 3);
         proxyG = new Map([[`${proxyG.size}`, parseInt(`${expand6}`)]]);
         watchnowbgo = `${((matchinactive_ ? 1 : 4) ^ 3)}`;
         break;
      }
      let basketballiconJ = modulest.length >= 8495596;
      do {
          let cornerq = true;
          let exampleimagel = 5.0;
          let leftX = 0;
          let sansN = 3.0;
          let profileZ = 0;
         modulest = [1 % (Math.max(7, customf.length))];
         cornerq = 25.88 == sansN || 70 == leftX;
         exampleimagel -= parseFloat(`${1}`);
         leftX %= Math.max(2 / (Math.max(5, profileZ)), 1);
         sansN /= Math.max(3, profileZ);
         if (basketballiconJ) {
            break;
         }
      } while (basketballiconJ && ((yellowtoredm.length / (Math.max(6, modulest.length))) <= 1 && 1 <= (yellowtoredm.length / (Math.max(7, modulest.length)))));
      subbasketballplayerD *= parseInt(`${penaltyshootz}`) ^ iconscheduleC;
    await refetch();

      penaltyshootz -= parseFloat(`${predictionactive5.length}`);
   let otherk = 6406860.0 <= exampleimage4;
   do {
       let orangetickR = 1;
       let bellY = false;
       let windZ = 3;
       let mapbufferI = String.fromCharCode(112,114,101,100,105,99,116,111,114,95,54,95,55,51,0);
       let thailandb = 3;
          let homem = 4.0;
          let halff: Map<any, any> = new Map([[String.fromCharCode(108,95,55,54,95,100,105,103,101,115,116,98,121,110,105,100,0),458], [String.fromCharCode(105,116,111,97,95,107,95,50,54,0),404], [String.fromCharCode(107,95,51,54,95,105,110,99,108,117,100,101,0),193]]);
         mapbufferI += `${2 | parseInt(`${homem}`)}`;
         homem *= halff.size;
         halff = new Map([[`${halff.size}`, halff.size * 3]]);
         bellY = mapbufferI == String.fromCharCode(53,0);
         bellY = !bellY;
       let goallogoa: Map<any, any> = new Map([[String.fromCharCode(114,116,99,119,101,98,95,114,95,56,0),589], [String.fromCharCode(114,95,49,50,95,100,105,118,0),440], [String.fromCharCode(97,115,112,101,99,116,115,95,117,95,57,49,0),264]]);
       let typingloading2: Map<any, any> = new Map([[String.fromCharCode(102,95,55,53,95,111,117,116,112,117,116,115,0),String.fromCharCode(120,95,53,52,95,118,108,99,115,112,101,99,0)], [String.fromCharCode(101,114,97,115,101,95,99,95,50,56,0),String.fromCharCode(106,115,101,112,95,97,95,54,56,0)]]);
      while (5 < (goallogoa.size % (Math.max(2, 5)))) {
         goallogoa.set(`${orangetickR}`, ((bellY ? 5 : 4) >> (Math.min(Math.abs(orangetickR), 1))));
         break;
      }
         bellY = 3 > thailandb || goallogoa.size > 3;
         bellY = String.fromCharCode(118,0) == mapbufferI;
          let bellremindera = true;
         typingloading2 = new Map([[`${orangetickR}`, orangetickR]]);
         bellremindera = !bellremindera;
         windZ >>= Math.min(5, Math.abs(((bellY ? 4 : 3) | 2)));
      while (!Array.from(goallogoa.values()).includes(windZ)) {
         goallogoa = new Map([[`${windZ}`, windZ >> (Math.min(1, Math.abs(orangetickR)))]]);
         break;
      }
      while (!bellY) {
         bellY = thailandb <= 52 && !bellY;
         break;
      }
         typingloading2 = new Map([[`${bellY}`, windZ]]);
         thailandb >>= Math.min(5, Math.abs(thailandb));
      for (let b = 0; b < 2; b++) {
         bellY = mapbufferI.length < orangetickR;
      }
      if (5 < (typingloading2.size + goallogoa.size) || (typingloading2.size + goallogoa.size) < 5) {
          let shirtV = 1.0;
         goallogoa = new Map([[`${thailandb}`, thailandb - 1]]);
         shirtV *= parseFloat(`${1}`);
      }
      exampleimage4 += parseFloat(`${thailandb % (Math.max(5, iconscheduleC))}`);
      if (otherk) {
         break;
      }
   } while ((4.57 < (exampleimage4 / (Math.max(10, penaltyshootz)))) && otherk);
   let viewerQ = 9260692.0 >= exampleimage4;
   do {
       let awayplayerX = String.fromCharCode(99,104,101,99,107,105,110,95,98,95,52,50,0);
       let whitetickl: Map<any, any> = new Map([[String.fromCharCode(122,95,53,49,95,111,98,106,101,99,116,115,0),292], [String.fromCharCode(117,115,108,101,101,112,95,107,95,54,0),349]]);
       let iconsettingh = String.fromCharCode(100,95,55,57,95,112,97,108,108,101,116,101,0);
       let middlewarep: Map<any, any> = new Map([[String.fromCharCode(97,95,49,48,95,100,119,97,114,102,0),false ], [String.fromCharCode(101,120,116,101,110,100,105,110,103,95,104,95,49,50,0),true ]]);
       let hookO: Map<any, any> = new Map([[String.fromCharCode(105,112,111,108,95,57,95,56,56,0),501], [String.fromCharCode(105,95,54,95,100,117,114,103,101,114,107,105,110,103,0),601], [String.fromCharCode(118,95,50,56,95,115,116,100,108,105,98,0),207]]);
      for (let h = 0; h < 1; h++) {
          let untickC = String.fromCharCode(98,97,99,107,95,98,95,56,51,0);
          let basketballT = 0.0;
          let disconnectedlogoP = 0.0;
         whitetickl = new Map([[`${hookO.size}`, hookO.size % (Math.max(2, 10))]]);
         untickC = `${untickC.length}`;
         basketballT -= 1 | parseInt(`${disconnectedlogoP}`);
         disconnectedlogoP /= Math.max(2, 3 ^ parseInt(`${basketballT}`));
      }
       let turnC = String.fromCharCode(97,98,111,118,101,95,111,95,55,0);
       let klevinF = String.fromCharCode(98,97,99,107,115,112,97,99,101,95,114,95,55,50,0);
       let iconwatchnowC: Map<any, any> = new Map([[String.fromCharCode(107,95,57,51,95,97,118,97,105,108,0),String.fromCharCode(99,116,116,115,95,111,95,53,51,0)], [String.fromCharCode(101,109,97,105,108,95,97,95,51,54,0),String.fromCharCode(102,95,57,48,95,115,116,114,110,108,101,110,0)]]);
       let footballtrophyY: Map<any, any> = new Map([[String.fromCharCode(99,97,110,116,111,112,101,110,95,110,95,53,53,0),false ], [String.fromCharCode(102,95,50,52,95,112,97,99,107,101,116,112,101,101,107,0),true ]]);
      while ((whitetickl.size & 3) < 1 || (hookO.size & whitetickl.size) < 3) {
         hookO = new Map([[`${iconwatchnowC.size}`, awayplayerX.length]]);
         break;
      }
      while (turnC.includes(`${middlewarep.size}`)) {
         middlewarep.set(awayplayerX, turnC.length);
         break;
      }
         footballtrophyY = new Map([[turnC, awayplayerX.length]]);
      let iconrightorangeT = hookO.size <= 5101165;
      do {
         hookO = new Map([[`${middlewarep.size}`, middlewarep.size % 3]]);
         if (iconrightorangeT) {
            break;
         }
      } while (((3 & iconsettingh.length) > 5) && iconrightorangeT);
      let subss = 6417291 >= whitetickl.size;
      do {
         whitetickl.set(`${turnC}`, turnC.length);
         if (subss) {
            break;
         }
      } while ((2 > (whitetickl.size - iconwatchnowC.size) && (2 - iconwatchnowC.size) > 2) && subss);
      for (let x = 0; x < 1; x++) {
          let rnewsb: Array<any> = [655, 9];
          let philippines6 = 3.0;
          let componentsu: Array<any> = [41, 208];
          let appsp: Map<any, any> = new Map([[String.fromCharCode(120,95,49,55,95,99,111,110,115,116,114,117,99,116,0),39], [String.fromCharCode(97,108,97,109,111,102,105,114,101,95,110,95,57,53,0),702], [String.fromCharCode(116,95,49,54,95,111,117,116,101,114,0),101]]);
         iconsettingh = `${awayplayerX.length}`;
         rnewsb = [3 & parseInt(`${philippines6}`)];
         philippines6 += rnewsb.length * appsp.size;
         componentsu.push(2);
         appsp.set(`${componentsu.length}`, componentsu.length);
      }
       let loadingspinnerK = String.fromCharCode(107,95,56,48,95,104,108,105,116,0);
         awayplayerX += `${whitetickl.size}`;
      let expandk = footballtrophyY.size >= 8671555;
      do {
          let libaneu = false;
          let injuryc: Array<any> = [188, 299, 116];
          let iconshareE = String.fromCharCode(111,95,55,53,95,119,97,115,116,101,100,0);
          let imagenetworkerrs = String.fromCharCode(111,95,57,51,95,112,111,112,117,108,97,116,101,100,0);
         footballtrophyY = new Map([[`${footballtrophyY.size}`, injuryc.length]]);
         libaneu = (imagenetworkerrs.length & iconshareE.length) > 98;
         injuryc.push((String.fromCharCode(82,0) == iconshareE ? (libaneu ? 2 : 2) : iconshareE.length));
         imagenetworkerrs += `${(imagenetworkerrs.length - (libaneu ? 4 : 1))}`;
         if (expandk) {
            break;
         }
      } while (expandk && (footballtrophyY.size <= whitetickl.size));
      while ((whitetickl.size - klevinF.length) > 3) {
          let drag0 = String.fromCharCode(119,95,54,95,98,105,103,100,105,97,0);
         whitetickl = new Map([[`${middlewarep.size}`, (String.fromCharCode(75,0) == awayplayerX ? middlewarep.size : awayplayerX.length)]]);
         drag0 += `${(String.fromCharCode(107,0) == drag0 ? drag0.length : drag0.length)}`;
         break;
      }
      let iconr = hookO.size >= 7270833;
      do {
          let progressi: Array<any> = [526, 210, 83];
          let fileH: Array<any> = [611, 502, 920];
         hookO.set(loadingspinnerK, (loadingspinnerK == String.fromCharCode(65,0) ? footballtrophyY.size : loadingspinnerK.length));
         progressi.push(2);
         fileH = [fileH.length << (Math.min(Math.abs(2), 3))];
         if (iconr) {
            break;
         }
      } while (iconr && (5 > whitetickl.size));
       let middlebrightnessK: Array<any> = [617, 168, 283];
      exampleimage4 /= Math.max(parseFloat(`${parseInt(`${penaltyshootz}`)}`), 5);
      if (viewerQ) {
         break;
      }
   } while (viewerQ && (textinputo));
   if ((predictionactive5.length ^ matchO.size) == 3 || (3 ^ predictionactive5.length) == 2) {
       let e_countj = String.fromCharCode(114,105,110,103,116,111,110,101,95,116,95,51,50,0);
      while (e_countj != e_countj) {
         e_countj = `${2 | e_countj.length}`;
         break;
      }
          let homeQ = String.fromCharCode(110,95,50,56,95,115,116,114,116,97,103,0);
          let auto_ae: Array<any> = [656, 369];
         e_countj += `${auto_ae.length / (Math.max(1, 2))}`;
         homeQ += `${homeQ.length >> (Math.min(Math.abs(3), 5))}`;
         auto_ae.push(1 + homeQ.length);
          let modelss = 4.0;
         e_countj = `${parseInt(`${modelss}`)}`;
      matchO.set(`${iconsaveimageK}`, parseInt(`${iconsaveimageK}`) >> (Math.min(2, Math.abs(1))));
   }
       let abidetectL: Array<any> = [494, 119];
       let release_y9 = 4.0;
      if ((abidetectL.length ^ 1) > 3 || (parseFloat(`${abidetectL.length}`) * release_y9) > 2.27) {
         abidetectL.push(parseInt(`${release_y9}`));
      }
      let whistleE = 7992769 <= abidetectL.length;
      do {
         abidetectL = [3];
         if (whistleE) {
            break;
         }
      } while (whistleE && ((release_y9 * parseFloat(`${abidetectL.length}`)) == 2.12 && 3.33 == (2.12 * release_y9)));
       let containerY = String.fromCharCode(99,117,114,116,97,105,110,95,108,95,54,52,0);
      if ((parseInt(`${release_y9}`) / (Math.max(containerY.length, 7))) <= 1 && (parseInt(`${release_y9}`) / (Math.max(3, containerY.length))) <= 1) {
          let iconclosewhitewithbgh = String.fromCharCode(99,95,55,51,95,106,112,101,103,100,119,116,0);
          let downarrowj = String.fromCharCode(100,95,50,50,95,97,115,97,110,0);
          let nterstitialb = String.fromCharCode(98,95,54,56,95,110,97,118,105,103,97,116,101,0);
          let rocketc = true;
         release_y9 -= parseFloat(`${iconclosewhitewithbgh.length}`);
         iconclosewhitewithbgh += `${(String.fromCharCode(122,0) == nterstitialb ? nterstitialb.length : (rocketc ? 2 : 4))}`;
         downarrowj = `${downarrowj.length}`;
         rocketc = downarrowj.length < nterstitialb.length;
      }
      let debug8 = 8264295.0 >= release_y9;
      do {
         release_y9 *= parseFloat(`${containerY.length & abidetectL.length}`);
         if (debug8) {
            break;
         }
      } while ((5 > (containerY.length + parseInt(`${release_y9}`)) || (5.69 + release_y9) > 4.58) && debug8);
         containerY = "1";
      statisticse = matchO.get(`${profileactivee}`) != null;
   if (iconsaveimageK <= 4.24) {
      profileactivee -= (parseFloat(`${parseInt(`${iconsaveimageK}`) * (textinputo ? 4 : 3)}`));
   }
    setIsRefreshing(false);

      profileactivee -= parseFloat(`${parseInt(`${profileactivee}`) + 2}`);
   if (matchO.size < parseInt(`${profileactivee}`)) {
      matchO.set(`${subbasketballplayerD}`, parseInt(`${iconsaveimageK}`));
   }
   if (predictionactive5.length < 5) {
      penaltyshootz *= parseFloat(`${3}`);
   }
       let acceptedy = true;
       let expiredV = 1.0;
       let orangetick6 = String.fromCharCode(97,108,97,109,111,102,105,114,101,95,119,95,56,55,0);
      let libflipperS = orangetick6.length >= 8346955;
      do {
          let g_centerM: Array<any> = [String.fromCharCode(109,105,103,114,97,116,101,100,95,117,95,56,53,0), String.fromCharCode(111,109,112,111,115,101,95,111,95,52,54,0)];
         orangetick6 = `${(orangetick6 == String.fromCharCode(74,0) ? g_centerM.length : orangetick6.length)}`;
         if (libflipperS) {
            break;
         }
      } while (libflipperS && ((orangetick6.length << (Math.min(Math.abs(2), 3))) > 5));
         orangetick6 += `${(String.fromCharCode(82,0) == orangetick6 ? orangetick6.length : (acceptedy ? 5 : 4))}`;
      for (let t = 0; t < 3; t++) {
          let greyarrowupP: Map<any, any> = new Map([[String.fromCharCode(111,95,55,53,95,100,101,115,112,105,108,108,0),21], [String.fromCharCode(107,95,57,50,95,100,117,114,98,105,110,0),404], [String.fromCharCode(112,95,50,48,95,115,105,112,104,97,115,104,0),376]]);
          let anytimeR = String.fromCharCode(105,110,116,115,95,118,95,50,0);
          let combinem: Array<any> = [489, 924, 441];
          let philippinesF = true;
         acceptedy = (anytimeR.length & orangetick6.length) > 29;
         greyarrowupP.set(`${philippinesF}`, combinem.length & 2);
         anytimeR = `${greyarrowupP.size}`;
         combinem = [2];
      }
      for (let r = 0; r < 2; r++) {
         expiredV += (parseFloat(`${(acceptedy ? 1 : 4) >> (Math.min(Math.abs(parseInt(`${expiredV}`)), 2))}`));
      }
      for (let s = 0; s < 2; s++) {
         expiredV -= (parseFloat(`${orangetick6 == String.fromCharCode(121,0) ? orangetick6.length : parseInt(`${expiredV}`)}`));
      }
         acceptedy = parseInt(`${expiredV}`) >= orangetick6.length;
       let baiduW = String.fromCharCode(118,101,114,115,105,111,110,101,100,95,114,95,57,56,0);
       let flipperv = String.fromCharCode(116,101,115,115,95,121,95,49,53,0);
      while (flipperv.length < 2) {
         acceptedy = baiduW == String.fromCharCode(55,0);
         break;
      }
          let fast4 = 5.0;
          let gradleA = 4.0;
         orangetick6 += `${parseInt(`${gradleA}`) * 2}`;
         fast4 -= parseFloat(`${parseInt(`${fast4}`) | 3}`);
         gradleA *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${fast4}`)), 1))}`);
      textinputo = 76 == orangetick6.length;
      matchO = new Map([[`${iconsaveimageK}`, 2 ^ predictionactive5.length]]);
   for (let c = 0; c < 2; c++) {
      subbasketballplayerD += iconscheduleC;
   }
    return;
  }, []);

  const {
    data: videos,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    refetch,
    remove,
  } = useMinivodQuery(fetchMode, wawaLibglog.fakeIsVip(userState.user));

  const checkConnection = useCallback(async () => {
       let actionss: Array<any> = [554, 790, 190];
    let time_z9b: Array<any> = [781, 471, 898];
    let saven = 2;
    let middlesoundN = String.fromCharCode(109,111,109,101,110,116,115,95,105,95,57,51,0);
    let weatherj = 5.0;
    let zhengpianP: Array<any> = [String.fromCharCode(114,95,56,55,95,99,111,118,101,114,101,100,0), String.fromCharCode(114,95,57,49,95,102,105,120,116,117,114,101,0), String.fromCharCode(108,97,112,110,100,122,95,114,95,56,52,0)];
    let iconedity = String.fromCharCode(117,95,57,95,118,101,110,117,101,115,0);
    let greenB: Array<any> = [158, 331];
    let iconcloseE = false;
    let active3 = 1.0;
    let xadsdkW = String.fromCharCode(97,112,112,101,97,114,105,110,103,95,103,95,57,55,0);
   let targetm = 5339092 <= time_z9b.length;
   do {
      time_z9b = [saven + parseInt(`${active3}`)];
      if (targetm) {
         break;
      }
   } while (targetm && ((zhengpianP.length ^ 3) <= 1));
   for (let o = 0; o < 2; o++) {
      saven %= Math.max(4, actionss.length);
   }
      middlesoundN = "1";
      weatherj -= parseInt(`${weatherj}`) | 3;
   for (let e = 0; e < 2; e++) {
      iconedity = `${time_z9b.length - 2}`;
   }
       let leftz = true;
      let actionn = leftz ? !leftz : leftz;
      do {
         leftz = !leftz;
         if (actionn) {
            break;
         }
      } while (actionn && (leftz || leftz));
          let yellowanimationliveB = 1.0;
          let chat5 = String.fromCharCode(115,97,118,101,115,116,97,116,101,95,100,95,54,57,0);
         leftz = chat5.startsWith(`${yellowanimationliveB}`);
         leftz = !leftz || !leftz;
      iconedity += `${greenB.length | 3}`;
   while ((saven + actionss.length) <= 2) {
       let homeplayera: Map<any, any> = new Map([[String.fromCharCode(103,95,51,50,95,115,105,109,112,108,105,102,121,0),true ], [String.fromCharCode(112,95,50,95,114,97,110,107,0),true ]]);
       let footballfiledlayouto = String.fromCharCode(102,111,111,116,101,114,95,50,95,51,50,0);
       let valuesm = String.fromCharCode(111,108,111,114,95,51,95,52,57,0);
       let rankj: Map<any, any> = new Map([[String.fromCharCode(121,95,53,50,95,105,100,101,110,116,105,116,105,121,0),330], [String.fromCharCode(117,95,54,56,95,109,111,100,0),147], [String.fromCharCode(115,95,56,95,114,101,99,116,97,110,103,108,101,0),624]]);
         valuesm = `${footballfiledlayouto.length + rankj.size}`;
      for (let f = 0; f < 3; f++) {
         valuesm += `${homeplayera.size << (Math.min(Math.abs(rankj.size), 4))}`;
      }
      let libreactO = footballfiledlayouto == String.fromCharCode(102,114,113,106,107,105,102,117,107,52,0);
      do {
         footballfiledlayouto += `${homeplayera.size}`;
         if (libreactO) {
            break;
         }
      } while ((1 >= (footballfiledlayouto.length + 3)) && libreactO);
         footballfiledlayouto += `${homeplayera.size}`;
      for (let m = 0; m < 2; m++) {
         valuesm = `${rankj.size % 3}`;
      }
      while (!footballfiledlayouto.endsWith(`${valuesm.length}`)) {
          let package_nt = 4.0;
         valuesm = "2";
         package_nt -= parseInt(`${package_nt}`);
         break;
      }
      while ((1 * footballfiledlayouto.length) <= 2 || (footballfiledlayouto.length * 1) <= 4) {
          let malaysiaG: Array<any> = [String.fromCharCode(101,113,117,105,118,97,108,101,110,116,95,101,95,52,53,0), String.fromCharCode(120,95,57,57,95,101,100,103,101,0), String.fromCharCode(103,95,57,55,95,109,97,116,114,105,120,0)];
         footballfiledlayouto = `${rankj.size}`;
         malaysiaG = [malaysiaG.length | 3];
         break;
      }
      let textf = valuesm == String.fromCharCode(108,110,57,103,117,97,101,115,0);
      do {
         valuesm = `${(String.fromCharCode(103,0) == footballfiledlayouto ? footballfiledlayouto.length : valuesm.length)}`;
         if (textf) {
            break;
         }
      } while ((4 < (homeplayera.size << (Math.min(valuesm.length, 3)))) && textf);
      let iconw = footballfiledlayouto.length <= 7342635;
      do {
         footballfiledlayouto += `${1 << (Math.min(3, Math.abs(rankj.size)))}`;
         if (iconw) {
            break;
         }
      } while (((footballfiledlayouto.length / 5) < 1) && iconw);
       let attributedstringS = false;
       let halffieldimageJ = false;
      for (let o = 0; o < 2; o++) {
         homeplayera = new Map([[`${rankj.size}`, valuesm.length ^ rankj.size]]);
      }
      while (!halffieldimageJ) {
         footballfiledlayouto = `${rankj.size ^ 1}`;
         break;
      }
      saven ^= saven;
      break;
   }

    const state = await NetInfo.fetch();

      actionss.push(parseInt(`${active3}`));
      greenB = [actionss.length];
   let manifestO = 9815920 >= time_z9b.length;
   do {
       let cornershoot3 = false;
       let animationsM = String.fromCharCode(112,97,116,104,95,52,95,54,49,0);
       let other8 = 2.0;
       let fullscreenminN = String.fromCharCode(101,95,56,95,115,117,98,115,101,113,117,101,110,116,0);
      if (cornershoot3) {
          let arrowdownx = 3.0;
          let iconcurrentmatchE = true;
         animationsM = `${parseInt(`${other8}`) / 2}`;
         arrowdownx /= Math.max(parseFloat(`${3 - parseInt(`${arrowdownx}`)}`), 2);
         iconcurrentmatchE = 30.28 <= arrowdownx;
      }
          let viewer0 = String.fromCharCode(111,110,116,97,99,116,115,95,99,95,52,52,0);
          let videobufferloadingG = String.fromCharCode(118,101,99,95,111,95,56,57,0);
         animationsM += `${viewer0.length & videobufferloadingG.length}`;
      if ((parseInt(`${other8}`) + animationsM.length) <= 4 || 1 <= (4 ^ animationsM.length)) {
          let defaultpredictionprofile1: Array<any> = [String.fromCharCode(105,95,57,48,95,109,97,116,104,101,109,97,116,105,99,115,0), String.fromCharCode(115,99,114,101,101,110,115,104,111,116,95,48,95,56,50,0)];
          let t_hash2 = 4.0;
          let showlessK: Array<any> = [159, 746, 320];
          let result_ = 1.0;
         animationsM += `${1 % (Math.max(4, showlessK.length))}`;
         defaultpredictionprofile1 = [parseInt(`${result_}`)];
         t_hash2 -= parseInt(`${result_}`) & defaultpredictionprofile1.length;
         showlessK = [2];
      }
         animationsM = "2";
      for (let p = 0; p < 1; p++) {
         other8 /= Math.max(3, 3 << (Math.min(2, fullscreenminN.length)));
      }
         cornershoot3 = fullscreenminN.length > 91 || !cornershoot3;
         cornershoot3 = cornershoot3 || animationsM.length > 39;
       let agreementn = true;
       let shootyesgoalR = true;
         other8 /= Math.max(4, (1 & (cornershoot3 ? 1 : 4)));
      if (4 == fullscreenminN.length) {
          let basketballhometeam4 = 3.0;
          let playercommonT: Array<any> = [String.fromCharCode(97,109,102,101,110,99,95,109,95,57,57,0), String.fromCharCode(108,97,99,101,115,95,100,95,55,50,0), String.fromCharCode(114,101,103,101,110,101,114,97,116,101,95,122,95,57,55,0)];
          let libcrashsdkF = String.fromCharCode(117,116,105,108,115,95,99,95,52,48,0);
          let dropdown8 = 1.0;
         fullscreenminN += `${(animationsM == String.fromCharCode(67,0) ? animationsM.length : parseInt(`${other8}`))}`;
         basketballhometeam4 *= playercommonT.length | libcrashsdkF.length;
         playercommonT = [parseInt(`${dropdown8}`) + playercommonT.length];
         libcrashsdkF = `${2 >> (Math.min(4, playercommonT.length))}`;
         dropdown8 += 1;
      }
      let mbbannerj = shootyesgoalR ? !shootyesgoalR : shootyesgoalR;
      do {
          let flagi = false;
          let sharewhiteP = String.fromCharCode(121,117,118,109,111,110,111,95,50,95,56,50,0);
         shootyesgoalR = fullscreenminN.startsWith(`${cornershoot3}`);
         flagi = sharewhiteP.length > 53 && flagi;
         sharewhiteP = `${((flagi ? 4 : 3) + 2)}`;
         if (mbbannerj) {
            break;
         }
      } while (mbbannerj && (fullscreenminN.length < 2));
      for (let d = 0; d < 3; d++) {
          let greyarrowupZ = false;
         agreementn = ((fullscreenminN.length | (!greyarrowupZ ? fullscreenminN.length : 24)) < 24);
      }
      time_z9b = [time_z9b.length];
      if (manifestO) {
         break;
      }
   } while (manifestO && (1 >= time_z9b.length));
       let grayf = 4.0;
       let topicv = 2.0;
         grayf -= parseFloat(`${parseInt(`${topicv}`)}`);
         grayf += parseFloat(`${1 - parseInt(`${topicv}`)}`);
      while ((topicv + grayf) < 5.97) {
          let downarrowS = String.fromCharCode(100,101,99,114,101,97,115,105,110,103,95,114,95,52,48,0);
          let turnE = false;
          let colorsb = 2.0;
         topicv -= parseFloat(`${parseInt(`${colorsb}`)}`);
         downarrowS += `${((turnE ? 2 : 4) + downarrowS.length)}`;
         turnE = downarrowS.length >= 75;
         colorsb /= Math.max(2, 2);
         break;
      }
          let scrollviewo: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,111,114,116,97,98,108,101,95,108,95,56,55,0),String.fromCharCode(118,97,114,108,101,110,95,107,95,57,53,0)], [String.fromCharCode(116,95,53,49,95,121,101,108,108,111,119,0),String.fromCharCode(110,95,49,53,95,115,101,110,115,105,116,105,118,101,0)], [String.fromCharCode(111,95,52,95,97,115,115,101,114,116,105,111,110,0),String.fromCharCode(114,95,50,50,95,112,97,121,101,101,0)]]);
          let iconfeedbackn = String.fromCharCode(98,105,114,116,104,100,97,121,95,56,95,50,48,0);
         topicv += parseFloat(`${1 * iconfeedbackn.length}`);
         scrollviewo = new Map([[`${scrollviewo.size}`, scrollviewo.size << (Math.min(4, Math.abs(scrollviewo.size)))]]);
         iconfeedbackn = `${scrollviewo.size + 2}`;
       let mbnativeS = 0;
       let downloadingT = 3;
      for (let s = 0; s < 2; s++) {
          let flippero: Map<any, any> = new Map([[String.fromCharCode(109,97,121,95,114,95,51,57,0),483], [String.fromCharCode(116,109,109,98,114,95,102,95,56,54,0),360], [String.fromCharCode(105,108,108,101,103,97,108,95,122,95,56,55,0),123]]);
          let libavdevicea: Array<any> = [443, 646, 127];
          let predictionbanneri = false;
          let basketballtrophyq = String.fromCharCode(111,118,102,108,95,108,95,55,56,0);
         topicv -= parseFloat(`${flippero.size}`);
         flippero.set(basketballtrophyq, libavdevicea.length - 2);
         libavdevicea = [(libavdevicea.length * (predictionbanneri ? 1 : 2))];
         predictionbanneri = !predictionbanneri;
         basketballtrophyq = `${(libavdevicea.length << (Math.min(2, Math.abs((predictionbanneri ? 5 : 4)))))}`;
      }
      middlesoundN += "2";
   if (2.29 <= (3.16 + weatherj)) {
      zhengpianP.push(((iconcloseE ? 2 : 4)));
   }
      active3 *= parseFloat(`${greenB.length >> (Math.min(Math.abs(1), 3))}`);
   for (let p = 0; p < 3; p++) {
      zhengpianP.push(2);
   }
    const offline = !(state.isConnected && state.isInternetReachable);

      weatherj -= iconedity.length;
      middlesoundN = `${2 * xadsdkW.length}`;
   while (1 == (5 >> (Math.min(3, greenB.length))) && !iconcloseE) {
      greenB.push(2);
      break;
   }
   for (let n = 0; n < 1; n++) {
       let sharemodalp = String.fromCharCode(117,114,105,95,50,95,57,49,0);
       let eyeopenh: Map<any, any> = new Map([[String.fromCharCode(117,95,50,50,95,115,116,97,99,107,118,105,101,119,0),String.fromCharCode(97,95,49,48,95,116,114,97,110,115,0)], [String.fromCharCode(103,114,97,98,98,101,114,95,111,95,55,56,0),String.fromCharCode(100,101,99,114,121,112,116,105,111,110,95,56,95,51,49,0)]]);
       let reactq = String.fromCharCode(114,101,100,101,108,101,103,97,116,101,95,118,95,49,55,0);
       let anner8 = 4;
       let modulesi = 5.0;
      for (let k = 0; k < 3; k++) {
         anner8 &= (reactq == String.fromCharCode(118,0) ? anner8 : reactq.length);
      }
         sharemodalp += "3";
         modulesi /= Math.max(parseFloat(`${2 ^ eyeopenh.size}`), 5);
      if ((eyeopenh.size - sharemodalp.length) > 5) {
         eyeopenh = new Map([[`${modulesi}`, reactq.length]]);
      }
      if (sharemodalp.endsWith(`${eyeopenh.size}`)) {
         eyeopenh = new Map([[`${eyeopenh.size}`, 3 % (Math.max(7, reactq.length))]]);
      }
       let videovarW = String.fromCharCode(108,95,55,51,95,102,105,110,103,101,114,115,0);
       let dialog1 = String.fromCharCode(114,95,55,54,95,100,101,97,108,108,111,99,97,116,105,111,110,0);
       let roboto8 = String.fromCharCode(115,108,105,99,101,99,111,110,116,101,120,116,95,108,95,48,0);
       let iconarrowright8 = String.fromCharCode(97,95,54,52,0);
       let xvod2 = 2.0;
         eyeopenh.set(`${anner8}`, 2);
         dialog1 = "1";
          let alertf = 5.0;
         sharemodalp += `${(sharemodalp == String.fromCharCode(110,0) ? sharemodalp.length : eyeopenh.size)}`;
         alertf /= Math.max(parseInt(`${alertf}`), 3);
       let awayicong: Map<any, any> = new Map([[String.fromCharCode(102,95,50,95,117,110,112,114,111,99,101,115,115,101,100,0),285], [String.fromCharCode(111,98,116,97,105,110,95,105,95,53,52,0),774]]);
       let rncorey: Map<any, any> = new Map([[String.fromCharCode(117,110,112,111,105,115,111,110,95,108,95,50,51,0),String.fromCharCode(109,117,108,116,105,115,101,108,101,99,116,105,111,110,95,97,95,54,57,0)], [String.fromCharCode(102,105,114,101,119,97,108,108,95,54,95,52,56,0),String.fromCharCode(121,95,52,55,95,112,114,111,99,101,115,115,0)]]);
         videovarW += `${awayicong.size & 1}`;
      for (let u = 0; u < 3; u++) {
          let with_4Z: Array<any> = [462, 857, 601];
          let statsnomoredata8 = String.fromCharCode(120,95,49,95,102,100,99,116,100,115,112,0);
          let eventsplashy = false;
          let actionsV = 0;
         videovarW += `${reactq.length}`;
         with_4Z = [(statsnomoredata8.length - (eventsplashy ? 3 : 2))];
         statsnomoredata8 += "3";
         actionsV -= with_4Z.length;
      }
          let trophyl: Array<any> = [587, 556, 114];
          let profileinactiveO = String.fromCharCode(112,95,54,95,117,110,114,101,115,111,108,118,101,100,0);
         xvod2 /= Math.max(3, rncorey.size);
         trophyl = [trophyl.length];
         profileinactiveO = `${trophyl.length}`;
      weatherj += 1;
   }
       let popup3: Array<any> = [74, 867, 153];
       let gestureM = String.fromCharCode(103,101,116,97,100,100,114,105,110,102,111,95,108,95,50,54,0);
      while (5 == (popup3.length * 4) || 3 == (4 * popup3.length)) {
         popup3 = [popup3.length];
         break;
      }
         gestureM = `${popup3.length}`;
      for (let a = 0; a < 3; a++) {
          let placeholderm: Map<any, any> = new Map([[String.fromCharCode(120,120,99,104,95,109,95,55,51,0),String.fromCharCode(99,95,57,49,95,100,115,116,114,0)], [String.fromCharCode(120,95,52,57,95,97,114,98,105,116,101,114,0),String.fromCharCode(101,95,51,55,95,116,111,107,101,104,0)], [String.fromCharCode(111,95,52,57,95,98,116,110,99,108,105,99,107,0),String.fromCharCode(116,95,54,54,95,114,103,101,110,0)]]);
          let yellow8 = String.fromCharCode(100,95,53,50,95,116,105,109,101,103,109,0);
          let bangB = 2.0;
          let iconclosewhitebgD = String.fromCharCode(105,95,49,53,95,99,104,97,114,99,111,110,118,0);
          let flagI = String.fromCharCode(114,95,57,50,95,118,101,114,105,102,105,97,116,105,111,110,0);
         popup3 = [parseInt(`${bangB}`)];
         placeholderm = new Map([[yellow8, yellow8.length]]);
         bangB /= Math.max(parseFloat(`${yellow8.length}`), 4);
         iconclosewhitebgD = `${1 % (Math.max(2, iconclosewhitebgD.length))}`;
         flagI = `${(String.fromCharCode(50,0) == yellow8 ? yellow8.length : iconclosewhitebgD.length)}`;
      }
      while (4 < (popup3.length | 3) && 4 < (3 | popup3.length)) {
         gestureM = "2";
         break;
      }
      if (2 >= (gestureM.length ^ popup3.length) && (gestureM.length ^ popup3.length) >= 2) {
         gestureM = `${gestureM.length}`;
      }
      while (2 <= (gestureM.length - popup3.length)) {
         popup3 = [gestureM.length | 1];
         break;
      }
      time_z9b.push(middlesoundN.length);
   for (let w = 0; w < 2; w++) {
       let greenL = 5.0;
       let footballtrophy9: Map<any, any> = new Map([[String.fromCharCode(110,95,55,53,95,115,101,110,99,0),String.fromCharCode(120,95,54,53,95,112,97,99,101,100,0)], [String.fromCharCode(104,97,100,97,109,97,114,100,95,106,95,52,48,0),String.fromCharCode(116,95,57,51,95,120,112,101,114,105,109,101,110,116,97,108,0)], [String.fromCharCode(100,105,110,102,95,100,95,57,54,0),String.fromCharCode(106,95,54,49,95,102,108,111,111,114,0)]]);
       let expired5 = true;
          let ewarded1 = true;
          let homeloading_ = String.fromCharCode(107,95,55,54,95,112,114,101,100,105,99,97,116,101,0);
          let eventC = 4;
         footballtrophy9.set(`${greenL}`, footballtrophy9.size - parseInt(`${greenL}`));
         ewarded1 = !ewarded1;
         homeloading_ += `${(homeloading_.length - (ewarded1 ? 5 : 3))}`;
         eventC *= homeloading_.length;
         footballtrophy9.set(`${greenL}`, 1 - parseInt(`${greenL}`));
         expired5 = greenL < 62.30;
         footballtrophy9.set(`${greenL}`, parseInt(`${greenL}`));
       let smallorangemanD = 5.0;
       let clearF = 2.0;
          let largeF = String.fromCharCode(121,95,57,53,95,105,101,110,116,114,121,0);
          let collectiono = 1.0;
         greenL += largeF.length;
         largeF = `${2 & parseInt(`${collectiono}`)}`;
         collectiono /= Math.max(1, parseFloat(`${parseInt(`${collectiono}`) << (Math.min(2, Math.abs(parseInt(`${collectiono}`))))}`));
          let confirmation9 = String.fromCharCode(114,101,115,105,100,117,101,115,95,100,95,53,50,0);
          let rewardvideoz = 5.0;
         greenL += (String.fromCharCode(74,0) == confirmation9 ? parseInt(`${rewardvideoz}`) : confirmation9.length);
      while (3.20 > (2.35 / (Math.max(5, smallorangemanD)))) {
          let configC: Array<any> = [765, 711, 831];
          let settingsb: Array<any> = [614, 791, 460];
          let sentry9 = false;
          let placeholder7 = 1;
         smallorangemanD -= parseInt(`${greenL}`) >> (Math.min(1, Math.abs(1)));
         configC = [settingsb.length];
         settingsb = [configC.length % 1];
         sentry9 = 75 < placeholder7;
         placeholder7 -= ((sentry9 ? 4 : 5) | placeholder7);
         break;
      }
      let iconnewssharej = 7156941.0 >= greenL;
      do {
         greenL += (parseInt(`${smallorangemanD}`) * (expired5 ? 2 : 2));
         if (iconnewssharej) {
            break;
         }
      } while (iconnewssharej && (clearF > 1.78));
      greenB.push(zhengpianP.length);
   }
      time_z9b.push(((iconcloseE ? 5 : 3)));
    setIsOffline(offline);

      zhengpianP = [3];
      iconcloseE = actionss.includes(saven);
   if (1 > (4 + greenB.length) && (saven + greenB.length) > 4) {
      saven >>= Math.min(Math.abs(3 + saven), 3);
   }
       let phonesharee = 1;
          let updates3 = String.fromCharCode(101,95,51,55,95,120,105,110,99,0);
          let eyeopen7: Map<any, any> = new Map([[String.fromCharCode(120,95,51,52,95,99,111,109,112,101,110,115,97,116,101,0),false ], [String.fromCharCode(97,95,52,49,95,100,105,118,105,100,111,114,0),false ]]);
         phonesharee *= updates3.length % 2;
         updates3 = `${eyeopen7.size}`;
         eyeopen7 = new Map([[`${eyeopen7.size}`, eyeopen7.size & 3]]);
         phonesharee &= 2 >> (Math.min(5, Math.abs(phonesharee)));
       let album6: Array<any> = [562, 951];
      middlesoundN = `${(String.fromCharCode(50,0) == iconedity ? iconedity.length : parseInt(`${weatherj}`))}`;
   let constantsd = 9163661 <= zhengpianP.length;
   do {
      zhengpianP.push(parseInt(`${active3}`));
      if (constantsd) {
         break;
      }
   } while (((time_z9b.length ^ 4) <= 2 || (4 ^ time_z9b.length) <= 1) && constantsd);
      zhengpianP.push(2);
   while (4.46 <= weatherj) {
       let friendsJ = String.fromCharCode(98,95,50,50,95,99,97,110,116,0);
       let redcirclebge: Map<any, any> = new Map([[String.fromCharCode(108,105,102,101,116,105,109,101,95,54,95,56,52,0),402], [String.fromCharCode(112,97,114,97,109,101,116,114,105,122,101,100,95,51,95,53,54,0),96]]);
         friendsJ += `${friendsJ.length}`;
       let resultZ = 1.0;
         friendsJ = `${friendsJ.length & 2}`;
      for (let q = 0; q < 1; q++) {
         friendsJ += `${redcirclebge.size}`;
      }
      if (parseInt(`${resultZ}`) >= redcirclebge.size) {
         redcirclebge.set(`${resultZ}`, redcirclebge.size + 2);
      }
      for (let d = 0; d < 2; d++) {
         redcirclebge.set(`${friendsJ}`, 3);
      }
      weatherj -= friendsJ.length - time_z9b.length;
      break;
   }
    if (!offline) {

   if (3 < greenB.length) {
       let robotop = String.fromCharCode(121,95,55,48,95,101,108,101,109,0);
       let libavdevicec = 5;
       let iconclosewhiteZ: Map<any, any> = new Map([[String.fromCharCode(117,95,51,54,95,101,120,116,101,114,110,0),358], [String.fromCharCode(97,95,50,51,95,110,99,114,121,112,116,105,111,110,0),295], [String.fromCharCode(109,111,100,110,112,102,95,53,95,54,48,0),917]]);
      for (let l = 0; l < 3; l++) {
         robotop += `${libavdevicec}`;
      }
         libavdevicec <<= Math.min(2, Math.abs(iconclosewhiteZ.size));
      if ((libavdevicec ^ 2) < 4 && (robotop.length ^ 2) < 3) {
          let orangeclockC = String.fromCharCode(106,95,50,50,95,97,108,108,121,117,118,0);
          let plashc = false;
          let librrcj = 3.0;
          let projectQ = String.fromCharCode(113,95,55,53,95,97,103,103,114,101,103,97,116,111,114,0);
          let baselinei = 4.0;
         libavdevicec /= Math.max(3 << (Math.min(Math.abs(libavdevicec), 5)), 1);
         orangeclockC = `${(orangeclockC.length | (plashc ? 1 : 3))}`;
         plashc = orangeclockC.length > 22 && !plashc;
         librrcj += 2 >> (Math.min(Math.abs(parseInt(`${baselinei}`)), 1));
         projectQ = `${orangeclockC.length}`;
         baselinei *= parseFloat(`${orangeclockC.length - 2}`);
      }
      let chatH = 7319798 <= iconclosewhiteZ.size;
      do {
         iconclosewhiteZ = new Map([[`${iconclosewhiteZ.size}`, (String.fromCharCode(70,0) == robotop ? iconclosewhiteZ.size : robotop.length)]]);
         if (chatH) {
            break;
         }
      } while ((1 == (3 | libavdevicec) || (iconclosewhiteZ.size | libavdevicec) == 3) && chatH);
      if ((robotop.length >> (Math.min(3, Math.abs(libavdevicec)))) >= 3) {
         robotop = `${libavdevicec + iconclosewhiteZ.size}`;
      }
       let iconchatsendP: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,101,100,95,106,95,55,56,0),String.fromCharCode(116,95,51,51,95,116,98,108,104,100,114,0)], [String.fromCharCode(111,95,55,53,95,97,116,97,98,97,115,101,0),String.fromCharCode(115,95,54,57,95,109,105,108,108,105,115,101,99,111,110,100,115,0)], [String.fromCharCode(112,95,51,53,95,112,111,115,116,115,99,97,108,101,0),String.fromCharCode(102,95,52,57,95,112,114,117,110,105,110,103,0)]]);
       let package_pJ: Map<any, any> = new Map([[String.fromCharCode(116,99,109,105,95,108,95,52,54,0),610], [String.fromCharCode(100,105,115,97,112,112,101,97,114,97,110,99,101,95,103,95,49,48,48,0),482]]);
          let libturbomodulejsijniV = String.fromCharCode(114,95,49,53,95,112,100,122,112,0);
          let yellowscoreballm = 5.0;
         package_pJ.set(`${yellowscoreballm}`, iconchatsendP.size);
         libturbomodulejsijniV = `${libturbomodulejsijniV.length * libturbomodulejsijniV.length}`;
         yellowscoreballm /= Math.max(4, libturbomodulejsijniV.length >> (Math.min(2, libturbomodulejsijniV.length)));
          let footballa = 2.0;
          let minivodB: Map<any, any> = new Map([[String.fromCharCode(101,95,51,51,95,102,108,97,99,0),String.fromCharCode(106,95,55,48,95,110,101,116,101,113,0)], [String.fromCharCode(111,95,52,56,95,110,100,101,120,0),String.fromCharCode(117,110,100,101,114,115,99,111,114,101,95,102,95,54,53,0)], [String.fromCharCode(116,119,111,108,111,111,112,95,119,95,51,48,0),String.fromCharCode(99,97,112,97,99,105,116,121,95,111,95,56,53,0)]]);
         robotop = "3";
         footballa *= 2;
         minivodB = new Map([[`${minivodB.size}`, minivodB.size & 2]]);
      let libfabricjnia = 9096471 <= iconclosewhiteZ.size;
      do {
          let executorP = String.fromCharCode(112,95,49,48,95,98,121,116,101,105,110,0);
         iconclosewhiteZ = new Map([[`${iconclosewhiteZ.size}`, 3]]);
         executorP = `${executorP.length - executorP.length}`;
         if (libfabricjnia) {
            break;
         }
      } while (libfabricjnia && ((1 - iconchatsendP.size) > 2));
      iconcloseE = (greenB.length % (Math.max(robotop.length, 7))) < 18;
   }
   for (let j = 0; j < 2; j++) {
       let nativeexb: Array<any> = [479, 327];
       let next1 = 3;
       let annerE = true;
       let regeng7 = 5.0;
       let gradlewK: Map<any, any> = new Map([[String.fromCharCode(108,95,55,57,95,112,111,115,101,0),String.fromCharCode(112,95,49,50,95,99,117,118,105,100,0)], [String.fromCharCode(117,95,55,49,95,116,111,115,115,0),String.fromCharCode(110,95,57,52,95,103,101,116,99,114,101,100,0)]]);
      let shielddonei = 8273662 >= nativeexb.length;
      do {
         nativeexb = [parseInt(`${regeng7}`) % 2];
         if (shielddonei) {
            break;
         }
      } while ((nativeexb.includes(next1)) && shielddonei);
         gradlewK = new Map([[`${gradlewK.size}`, ((annerE ? 1 : 3) << (Math.min(Math.abs(1), 4)))]]);
         regeng7 += nativeexb.length;
          let volumes = String.fromCharCode(109,95,57,48,95,102,97,105,108,0);
          let s_centerL = String.fromCharCode(120,95,52,57,95,100,111,120,121,103,101,110,0);
          let gifgoalbgh: Map<any, any> = new Map([[String.fromCharCode(102,109,117,108,95,99,95,56,51,0),String.fromCharCode(97,114,99,104,105,118,101,95,112,95,57,53,0)], [String.fromCharCode(120,95,50,50,95,105,97,100,115,116,120,0),String.fromCharCode(114,101,98,117,99,107,101,116,95,49,95,49,56,0)], [String.fromCharCode(97,100,100,105,116,105,111,110,97,108,95,104,95,57,55,0),String.fromCharCode(122,95,54,50,95,101,115,116,105,109,97,116,101,100,0)]]);
         annerE = gradlewK.size >= nativeexb.length;
         volumes += `${s_centerL.length}`;
         s_centerL = "1";
         gifgoalbgh = new Map([[s_centerL, volumes.length]]);
      for (let l = 0; l < 1; l++) {
         next1 >>= Math.min(4, Math.abs(gradlewK.size % (Math.max(2, parseInt(`${regeng7}`)))));
      }
      let vignette6 = nativeexb.length >= 8203026;
      do {
         nativeexb = [gradlewK.size >> (Math.min(1, Math.abs(parseInt(`${regeng7}`))))];
         if (vignette6) {
            break;
         }
      } while ((!Array.from(gradlewK.values()).includes(nativeexb.length)) && vignette6);
         next1 /= Math.max(2, next1 - 3);
          let eyeopenF = 1.0;
         next1 ^= next1;
         eyeopenF *= parseInt(`${eyeopenF}`) * 2;
         annerE = !annerE && 44 <= next1;
         regeng7 += 1 & parseInt(`${regeng7}`);
         next1 += next1 * nativeexb.length;
          let moded = String.fromCharCode(104,108,115,101,110,99,95,121,95,57,53,0);
          let time_noc: Array<any> = [73, 873];
         annerE = nativeexb.length == 78;
         moded += `${time_noc.length}`;
         time_noc = [time_noc.length % (Math.max(moded.length, 8))];
      while ((2 - nativeexb.length) > 1 || 2 > (nativeexb.length - next1)) {
          let descU = String.fromCharCode(100,101,108,97,121,115,95,110,95,50,50,0);
          let paginationp = 3.0;
          let components8 = String.fromCharCode(113,115,99,97,108,101,113,108,111,103,95,99,95,53,48,0);
          let iconeyea = String.fromCharCode(114,101,100,111,95,122,95,55,52,0);
         next1 -= 3;
         descU += `${iconeyea.length}`;
         paginationp *= 3;
         components8 = `${descU.length % (Math.max(6, components8.length))}`;
         iconeyea += `${descU.length / 2}`;
         break;
      }
         nativeexb.push(parseInt(`${regeng7}`) + gradlewK.size);
         annerE = next1 <= nativeexb.length;
      middlesoundN += `${middlesoundN.length}`;
   }
      actionss = [actionss.length / 2];
      middlesoundN = `${time_z9b.length / 1}`;
      greenB = [parseInt(`${weatherj}`)];
      iconedity += "3";
      greenB = [middlesoundN.length - 1];
      handleRefresh();
    }
  }, []);

  
  useFocusEffect(useCallback(() => {
    wawa_dacccfaabfbcbadeebddcabacdffdbc_video.watchAnytimeViewsAnalytics({
      isXmode: adultMode,
    });
  }, [adultMode]));
  

  
  
  
  
  

  
  
  
  

  
  
  
  
  
  
  
  
  
  //   return () => unsubscribe();
  

  useEffect(() => {
    setPressTabScroll(true);

    
    
    
    

    
    setTimeout(() => {
      setPressTabScroll(false);
      
    }, 500);
  }, [adultMode]);

  useEffect(() => {
    if (videos != undefined) {
      let filtered = videos?.pages.flat().filter(x => x)

      // vip -> filter ads
      // guest -> filter first 10

      if (isVip) {
        filtered = filtered.filter(x => !x.is_ads)
      }

      if (!wawaLibglog.fakeIsLogin(userState.user) && !adultMode && !wawaLibglog.fakeIsVip(userState.user)) {
        filtered = filtered.slice(0, MINI_SHOW_LOGIN_NUMBER + 1);
      }

      setFlattenedVideos(filtered); 
      if (filtered.length > 0) {
        miniVodListRef.current?.scrollToOffset({
          index: 0,
          animated: false,
        });
      }
    }
  }, [videos, userState.user]);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
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
          miniVodRef.current?.setPause(true);
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline]),
  );

  useEffect(() => {
    if (wawaLibglog.fakeIsLogin(userState.user) && isFocusLogin.current) {
      isFocusLogin.current = false;
    }
  }, [userState.user?.userToken]);

  const onFocusLoginOverlayPress = () => {
       let huaweiS = String.fromCharCode(118,95,53,55,95,101,114,114,111,114,118,0);
    let templateprocessori: Map<any, any> = new Map([[String.fromCharCode(97,95,54,57,95,115,101,99,116,105,110,115,0),String.fromCharCode(103,95,55,54,95,104,97,110,103,0)], [String.fromCharCode(103,95,49,49,95,102,114,111,109,0),String.fromCharCode(101,110,99,111,100,101,114,95,114,95,50,53,0)]]);
    let gradleE = 3.0;
    let iconsetting0 = String.fromCharCode(101,95,51,54,95,99,111,110,116,105,110,117,101,100,0);
    let zoomM = true;
    let iconfeedbackZ: Array<any> = [String.fromCharCode(115,116,101,109,109,101,114,95,57,95,57,57,0), String.fromCharCode(118,95,57,56,95,109,97,110,97,103,101,109,101,110,116,0), String.fromCharCode(121,95,51,54,95,119,101,120,112,97,110,100,0)];
    let megaphoner = String.fromCharCode(102,95,52,57,95,98,97,99,107,114,111,117,110,100,0);
    let adultb = 4.0;
    let circlel = String.fromCharCode(109,101,109,110,114,95,54,95,57,55,0);
    let gpayx: Array<any> = [919, 466];
    let fullscreenmaxA = true;
    let yellowredcardg: Array<any> = [533, 443, 779];
   if (huaweiS != circlel) {
       let unread0: Map<any, any> = new Map([[String.fromCharCode(119,97,118,101,115,121,110,116,104,95,100,95,50,55,0),236], [String.fromCharCode(109,97,107,101,119,116,95,50,95,51,48,0),214]]);
       let mbsplashS: Map<any, any> = new Map([[String.fromCharCode(99,104,97,114,97,99,116,101,114,95,116,95,57,54,0),false ], [String.fromCharCode(111,95,49,53,95,103,111,112,104,101,114,0),true ]]);
       let shootnogoalE = String.fromCharCode(111,95,53,95,114,111,117,116,105,110,101,115,0);
       let updatesX = 2;
         shootnogoalE += `${mbsplashS.size / (Math.max(unread0.size, 6))}`;
      while (2 <= (unread0.size + mbsplashS.size)) {
         mbsplashS = new Map([[shootnogoalE, updatesX]]);
         break;
      }
          let iconarrowrightblackG = String.fromCharCode(119,95,54,50,95,97,109,114,119,98,100,101,99,0);
          let unimplementedviewf = false;
         unread0.set(`${unread0.size}`, unread0.size);
         iconarrowrightblackG += `${(iconarrowrightblackG == String.fromCharCode(100,0) ? iconarrowrightblackG.length : (unimplementedviewf ? 1 : 2))}`;
         unimplementedviewf = !unimplementedviewf && iconarrowrightblackG.length == 82;
       let penaltyshootnogoali: Map<any, any> = new Map([[String.fromCharCode(116,97,107,101,111,117,116,95,109,95,54,0),false ], [String.fromCharCode(119,95,53,55,95,105,110,102,111,0),true ], [String.fromCharCode(120,120,104,97,115,104,95,56,95,57,51,0),false ]]);
       let shootnogoalQ: Map<any, any> = new Map([[String.fromCharCode(102,95,49,95,105,110,99,114,101,109,101,110,116,97,108,0),157], [String.fromCharCode(110,95,55,57,95,117,110,101,109,98,101,100,0),353]]);
      for (let g = 0; g < 1; g++) {
         unread0.set(`${updatesX}`, 3);
      }
      let defaultprofilepico = updatesX <= 6801276;
      do {
         updatesX |= mbsplashS.size << (Math.min(3, Math.abs(updatesX)));
         if (defaultprofilepico) {
            break;
         }
      } while ((updatesX == shootnogoalQ.size) && defaultprofilepico);
      for (let x = 0; x < 1; x++) {
          let shareX = String.fromCharCode(115,95,52,57,95,115,116,99,111,0);
         penaltyshootnogoali.set(shareX, 1);
      }
      for (let o = 0; o < 2; o++) {
          let auto_8m = 1.0;
          let predictionbannershared2 = 5.0;
          let photoc: Map<any, any> = new Map([[String.fromCharCode(99,102,116,102,115,117,98,95,110,95,53,52,0),false ], [String.fromCharCode(108,95,56,54,95,101,109,117,108,97,116,101,0),true ], [String.fromCharCode(108,105,98,111,112,101,110,106,112,101,103,95,51,95,57,56,0),false ]]);
          let themeI = String.fromCharCode(106,95,49,49,95,99,112,117,102,108,97,103,115,0);
          let refresh8: Map<any, any> = new Map([[String.fromCharCode(97,95,55,52,95,116,114,97,110,115,112,111,115,101,0),0], [String.fromCharCode(112,111,115,116,112,114,111,99,101,115,115,95,113,95,51,48,0),38]]);
         unread0 = new Map([[`${photoc.size}`, 1]]);
         auto_8m += 1 / (Math.max(7, parseInt(`${auto_8m}`)));
         predictionbannershared2 -= parseFloat(`${1 | parseInt(`${auto_8m}`)}`);
         photoc.set(`${predictionbannershared2}`, (themeI == String.fromCharCode(100,0) ? parseInt(`${predictionbannershared2}`) : themeI.length));
         refresh8 = new Map([[themeI, (themeI == String.fromCharCode(57,0) ? themeI.length : parseInt(`${auto_8m}`))]]);
      }
      for (let j = 0; j < 3; j++) {
          let libfollyo = String.fromCharCode(109,95,53,53,95,114,101,116,114,105,101,114,0);
          let mbnativeadvanced_ = String.fromCharCode(122,105,112,102,95,119,95,57,54,0);
          let telegram0 = String.fromCharCode(108,111,111,112,95,119,95,51,56,0);
         shootnogoalE += `${telegram0.length >> (Math.min(Math.abs(3), 5))}`;
         libfollyo = `${libfollyo.length >> (Math.min(5, mbnativeadvanced_.length))}`;
         mbnativeadvanced_ = `${mbnativeadvanced_.length * 1}`;
         telegram0 = "3";
      }
          let reactnavigationw: Map<any, any> = new Map([[String.fromCharCode(102,95,50,56,95,119,104,111,108,101,0),false ], [String.fromCharCode(101,120,99,101,112,116,95,50,95,57,0),false ], [String.fromCharCode(111,95,54,57,95,117,110,109,97,114,115,104,97,108,0),false ]]);
          let libjsiw = 2.0;
          let progressL: Map<any, any> = new Map([[String.fromCharCode(100,101,116,101,114,109,105,110,101,100,95,115,95,55,54,0),84], [String.fromCharCode(119,95,50,51,95,104,119,117,112,108,111,97,100,0),144], [String.fromCharCode(108,105,109,105,116,115,95,119,95,52,52,0),906]]);
         updatesX %= Math.max(2, progressL.size * parseInt(`${libjsiw}`));
         reactnavigationw = new Map([[`${reactnavigationw.size}`, reactnavigationw.size]]);
         libjsiw += reactnavigationw.size + 2;
         updatesX *= shootnogoalE.length;
          let n_hasha: Array<any> = [String.fromCharCode(110,95,50,56,95,99,97,116,99,104,97,98,108,101,0), String.fromCharCode(115,119,97,98,95,49,95,57,48,0), String.fromCharCode(100,101,115,99,95,110,95,56,52,0)];
         penaltyshootnogoali.set(`${mbsplashS.size}`, 3);
         n_hasha.push(n_hasha.length / (Math.max(8, n_hasha.length)));
      circlel = `${mbsplashS.size / (Math.max(3, 7))}`;
   }
      huaweiS += "1";
      templateprocessori.set(`${iconsetting0}`, 2 ^ iconsetting0.length);
   while (megaphoner != String.fromCharCode(117,0) && circlel != String.fromCharCode(71,0)) {
       let androidn: Map<any, any> = new Map([[String.fromCharCode(105,95,53,95,115,110,105,112,112,101,116,0),true ], [String.fromCharCode(97,95,53,52,95,108,105,118,101,109,111,100,101,0),true ], [String.fromCharCode(102,95,56,51,95,109,112,101,103,118,105,100,101,111,100,101,99,0),false ]]);
       let bdxadsdk1: Array<any> = [540, 227, 811];
       let mbbannerx = 4.0;
       let notificationgray3 = String.fromCharCode(115,95,50,48,95,99,111,110,112,111,110,101,110,116,115,0);
       let langt = String.fromCharCode(99,95,50,53,95,112,117,98,108,105,115,104,101,114,115,0);
      while ((3 - androidn.size) > 2 && (bdxadsdk1.length - 3) > 2) {
         androidn = new Map([[`${mbbannerx}`, parseInt(`${mbbannerx}`)]]);
         break;
      }
         langt = `${notificationgray3.length}`;
      for (let r = 0; r < 2; r++) {
         notificationgray3 = `${langt.length}`;
      }
      let friendsa = 6965595 <= notificationgray3.length;
      do {
         notificationgray3 += `${(langt == String.fromCharCode(116,0) ? langt.length : bdxadsdk1.length)}`;
         if (friendsa) {
            break;
         }
      } while (friendsa && ((1.55 + mbbannerx) <= 3.95));
      if (2 <= (1 >> (Math.min(2, Math.abs(androidn.size)))) || (1 >> (Math.min(2, Math.abs(androidn.size)))) <= 4) {
         notificationgray3 = "3";
      }
         androidn.set(`${mbbannerx}`, langt.length / (Math.max(3, 7)));
         androidn.set(`${langt}`, 2);
      if (notificationgray3 != langt) {
         langt += `${(String.fromCharCode(70,0) == notificationgray3 ? notificationgray3.length : bdxadsdk1.length)}`;
      }
          let alertw = 1;
          let colors2 = String.fromCharCode(116,97,103,103,105,110,103,95,54,95,50,56,0);
         bdxadsdk1.push((String.fromCharCode(100,0) == colors2 ? colors2.length : parseInt(`${mbbannerx}`)));
         alertw >>= Math.min(Math.abs(2 ^ alertw), 4);
       let tail7: Array<any> = [59, 404];
         notificationgray3 += `${androidn.size & langt.length}`;
       let footballfiledlayout_: Map<any, any> = new Map([[String.fromCharCode(101,95,53,95,97,118,97,116,97,114,115,0),true ], [String.fromCharCode(110,95,57,53,95,103,110,111,0),true ]]);
      let downarrowH = langt == String.fromCharCode(104,120,115,101,100,114,112,102,54,0);
      do {
          let annerp = String.fromCharCode(105,95,57,49,95,108,111,115,115,108,101,115,115,0);
         langt = `${notificationgray3.length}`;
         annerp += `${annerp.length}`;
         if (downarrowH) {
            break;
         }
      } while ((langt.length >= androidn.size) && downarrowH);
         footballfiledlayout_ = new Map([[`${footballfiledlayout_.size}`, tail7.length]]);
      for (let t = 0; t < 1; t++) {
          let eyeopenk = String.fromCharCode(112,95,55,50,95,114,103,98,97,0);
          let switch_ohT = String.fromCharCode(111,110,101,95,114,95,50,57,0);
          let feedbacky = 2.0;
          let penaltygoalf = 4.0;
          let iconwatcho: Map<any, any> = new Map([[String.fromCharCode(115,95,53,53,95,103,101,116,116,105,110,103,0),53], [String.fromCharCode(99,105,114,99,117,108,97,116,105,110,103,95,109,95,53,57,0),473]]);
         bdxadsdk1.push(notificationgray3.length << (Math.min(Math.abs(2), 2)));
         eyeopenk += `${parseInt(`${penaltygoalf}`)}`;
         switch_ohT = `${parseInt(`${feedbacky}`) >> (Math.min(Math.abs(parseInt(`${penaltygoalf}`)), 2))}`;
         feedbacky += 2;
         iconwatcho = new Map([[`${penaltygoalf}`, 1 / (Math.max(4, parseInt(`${feedbacky}`)))]]);
      }
      megaphoner = "1";
      break;
   }
   if (iconfeedbackZ.includes(adultb)) {
      adultb *= megaphoner.length;
   }
      circlel = "3";
       let overN = String.fromCharCode(114,95,54,95,108,101,116,115,0);
         overN += `${3 << (Math.min(3, overN.length))}`;
      if (overN == String.fromCharCode(100,0) && overN.length <= 4) {
         overN = `${overN.length}`;
      }
      if (overN.length == 3) {
         overN = `${overN.length}`;
      }
      adultb /= Math.max(3, (parseInt(`${adultb}`) % (Math.max(4, (zoomM ? 1 : 5)))));
      huaweiS += `${templateprocessori.size / 2}`;
   for (let p = 0; p < 3; p++) {
       let condensedr = 3;
       let profileinactiveG = 2;
       let volumer: Map<any, any> = new Map([[String.fromCharCode(108,95,53,49,95,105,110,116,101,114,97,116,105,111,110,0),609], [String.fromCharCode(99,104,101,99,107,115,117,109,109,101,100,95,116,95,55,55,0),17], [String.fromCharCode(105,110,116,101,114,97,99,116,95,120,95,57,50,0),527]]);
      if (2 == (volumer.size % 5) || (condensedr % (Math.max(volumer.size, 7))) == 5) {
         volumer.set(`${condensedr}`, profileinactiveG);
      }
      if (2 == profileinactiveG) {
         profileinactiveG <<= Math.min(Math.abs(condensedr), 5);
      }
          let shootC = String.fromCharCode(104,109,109,116,95,114,95,52,53,0);
          let linen = 5.0;
         profileinactiveG |= 1;
         shootC += `${shootC.length}`;
         linen /= Math.max(shootC.length * parseInt(`${linen}`), 5);
      if (volumer.get(`${profileinactiveG}`) == null) {
          let libavutil4 = 1.0;
          let owngoalW: Array<any> = [243, 82];
          let gradlewg = 3.0;
         profileinactiveG *= parseInt(`${gradlewg}`);
         libavutil4 -= parseInt(`${libavutil4}`) + owngoalW.length;
         owngoalW.push(parseInt(`${libavutil4}`) - owngoalW.length);
         gradlewg += owngoalW.length ^ parseInt(`${libavutil4}`);
      }
         profileinactiveG *= profileinactiveG >> (Math.min(2, Math.abs(condensedr)));
       let hejiS = String.fromCharCode(103,95,54,50,95,121,117,108,101,0);
         condensedr %= Math.max(hejiS.length % 1, 1);
      for (let i = 0; i < 3; i++) {
          let philippines7 = String.fromCharCode(122,95,55,55,95,112,101,114,102,111,114,109,97,110,99,101,0);
          let smallF = String.fromCharCode(113,95,52,54,95,105,115,100,105,97,99,114,105,116,105,99,0);
         profileinactiveG -= 1 & condensedr;
         philippines7 += `${2 | smallF.length}`;
         smallF = "1";
      }
       let iconnewsshare8 = 3;
      megaphoner = `${iconfeedbackZ.length}`;
   }
   while ((2.91 - adultb) < 3.50 && (parseInt(`${adultb}`) - templateprocessori.size) < 5) {
      adultb -= 3;
      break;
   }
      gradleE -= parseFloat(`${1 << (Math.min(5, Math.abs(templateprocessori.size)))}`);
      iconsetting0 = `${(huaweiS.length - (zoomM ? 1 : 3))}`;
      iconsetting0 = `${circlel.length | huaweiS.length}`;
       let libzeusx = 2.0;
       let iconfeedbackU = String.fromCharCode(116,95,53,50,95,97,99,100,99,0);
      let predictiondefault3 = 9857338.0 >= libzeusx;
      do {
         libzeusx *= 2 << (Math.min(5, iconfeedbackU.length));
         if (predictiondefault3) {
            break;
         }
      } while (predictiondefault3 && (!iconfeedbackU.endsWith(`${libzeusx}`)));
         iconfeedbackU += `${parseInt(`${libzeusx}`) / (Math.max(iconfeedbackU.length, 10))}`;
      if (iconfeedbackU.length == parseInt(`${libzeusx}`)) {
          let mountingX = String.fromCharCode(119,95,53,56,95,111,109,112,111,115,101,0);
          let leaguedetailsbgl = 4.0;
         libzeusx -= iconfeedbackU.length / (Math.max(2, parseInt(`${libzeusx}`)));
         mountingX = `${parseInt(`${leaguedetailsbgl}`)}`;
         leaguedetailsbgl /= Math.max(parseInt(`${leaguedetailsbgl}`), 1);
      }
      if ((iconfeedbackU.length * libzeusx) < 3.94) {
         iconfeedbackU += `${iconfeedbackU.length | parseInt(`${libzeusx}`)}`;
      }
          let nodeQ = String.fromCharCode(109,112,106,112,101,103,95,120,95,56,0);
          let full7: Map<any, any> = new Map([[String.fromCharCode(104,97,110,100,108,101,95,108,95,54,57,0),String.fromCharCode(99,108,111,99,107,95,49,95,56,48,0)], [String.fromCharCode(99,108,117,115,116,101,114,95,112,95,57,48,0),String.fromCharCode(103,95,56,49,95,108,105,115,116,115,0)], [String.fromCharCode(111,112,101,114,97,116,111,114,95,120,95,51,57,0),String.fromCharCode(117,95,55,48,95,117,110,115,99,97,108,101,100,0)]]);
         libzeusx += iconfeedbackU.length % (Math.max(8, nodeQ.length));
         nodeQ = `${full7.size}`;
         full7 = new Map([[`${full7.size}`, 2 ^ full7.size]]);
      if ((2.16 / (Math.max(7, libzeusx))) == 3.35 && 2 == (5 & iconfeedbackU.length)) {
          let foregroundc = String.fromCharCode(119,95,54,52,95,100,105,115,116,97,110,99,101,115,0);
          let statisticsv = true;
          let commentr = String.fromCharCode(105,109,103,95,97,95,50,52,0);
          let icontransferclubx = String.fromCharCode(97,95,54,53,95,104,97,115,104,116,97,103,0);
         iconfeedbackU += `${2 - icontransferclubx.length}`;
         foregroundc = "2";
         statisticsv = statisticsv || commentr.length >= 43;
         commentr = `${2 * foregroundc.length}`;
         icontransferclubx += `${(1 & (statisticsv ? 2 : 1))}`;
      }
      zoomM = gradleE == 79.60;
      circlel = `${megaphoner.length}`;
       let zhengpiang: Array<any> = [870, 410, 416];
       let footballfieldJ: Array<any> = [String.fromCharCode(97,95,54,57,95,114,101,109,111,118,101,114,0), String.fromCharCode(122,95,52,53,95,115,105,103,105,110,116,0)];
       let nodeN: Map<any, any> = new Map([[String.fromCharCode(107,101,114,110,101,100,95,111,95,51,49,0),948], [String.fromCharCode(99,95,56,48,95,98,111,117,110,100,101,100,0),592]]);
       let ajaxw: Map<any, any> = new Map([[String.fromCharCode(122,95,55,95,103,114,97,109,115,0),418], [String.fromCharCode(109,97,120,120,95,57,95,57,0),818]]);
      let manifestN = 7540537 <= footballfieldJ.length;
      do {
         footballfieldJ.push(nodeN.size);
         if (manifestN) {
            break;
         }
      } while ((!zhengpiang.includes(footballfieldJ.length)) && manifestN);
       let elementsx = 1.0;
       let statisticsactive3 = 4.0;
          let historyk = 3.0;
          let awayplayerA = String.fromCharCode(112,95,54,56,95,111,112,116,101,100,0);
         ajaxw = new Map([[`${statisticsactive3}`, parseInt(`${statisticsactive3}`)]]);
         historyk -= parseFloat(`${awayplayerA.length >> (Math.min(Math.abs(1), 4))}`);
         awayplayerA = "1";
      let mbnativeH = zhengpiang.length >= 7031173;
      do {
         zhengpiang.push(ajaxw.size);
         if (mbnativeH) {
            break;
         }
      } while ((3 > (5 | footballfieldJ.length)) && mbnativeH);
      let membershipC = 9874391 <= nodeN.size;
      do {
         nodeN = new Map([[`${zhengpiang.length}`, zhengpiang.length | 3]]);
         if (membershipC) {
            break;
         }
      } while (membershipC && (nodeN.size < footballfieldJ.length));
      while (ajaxw.get(`${zhengpiang.length}`) == null) {
         zhengpiang = [1];
         break;
      }
      let slider2 = nodeN.size >= 8132901;
      do {
         nodeN.set(`${statisticsactive3}`, 3);
         if (slider2) {
            break;
         }
      } while (slider2 && (4 >= nodeN.size));
         zhengpiang = [1];
      megaphoner = `${parseInt(`${adultb}`)}`;
      adultb *= circlel.length;
      gpayx = [parseInt(`${adultb}`) - 2];
   for (let k = 0; k < 2; k++) {
      gradleE += parseFloat(`${gpayx.length}`);
   }
       let moviesl = String.fromCharCode(118,95,55,54,95,103,111,98,98,108,101,0);
       let values4 = 0.0;
      while ((1 - moviesl.length) <= 5 && 2 <= (1 / (Math.max(7, parseInt(`${values4}`))))) {
         moviesl = `${moviesl.length / (Math.max(8, parseInt(`${values4}`)))}`;
         break;
      }
      while (1 <= (3 | moviesl.length) && 3 <= (parseInt(`${values4}`) / (Math.max(2, moviesl.length)))) {
         values4 *= parseInt(`${values4}`);
         break;
      }
          let libsentryz = 3.0;
         values4 *= parseInt(`${libsentryz}`);
       let homeactive9 = 4.0;
          let expandF: Map<any, any> = new Map([[String.fromCharCode(119,95,54,49,95,99,117,116,111,117,116,0),862], [String.fromCharCode(112,95,49,48,95,115,121,110,99,115,97,102,101,0),169]]);
          let dropdownF: Array<any> = [624, 717, 860];
          let becomeY = String.fromCharCode(121,95,57,53,95,109,111,110,111,0);
         values4 /= Math.max(5, dropdownF.length | moviesl.length);
         expandF = new Map([[`${expandF.size}`, 3]]);
         dropdownF = [becomeY.length + expandF.size];
         becomeY += `${becomeY.length}`;
       let iconbellactiveQ = 4.0;
       let cornerZ = 5.0;
      iconsetting0 = `${3 + iconfeedbackZ.length}`;

    dispatch(showLoginAction());
  }

  const onPressAds = () => {
       let modityY = String.fromCharCode(111,95,54,56,95,110,97,109,101,115,101,114,118,101,114,115,0);
    let combinedw = 1.0;
    let appleN = false;
    let file9: Array<any> = [106, 348, 832];
    let gdtadvV = String.fromCharCode(97,112,109,116,101,115,116,95,99,95,49,0);
    let homet = 2;
    let final_ngD = String.fromCharCode(109,117,108,116,105,112,108,121,105,110,103,95,49,95,49,0);
    let playershirtr = 2;
    let shielddone3 = 0.0;
    let fillP = String.fromCharCode(104,95,51,49,95,99,101,110,116,114,101,0);
      playershirtr %= Math.max(modityY.length, 3);
       let icondefaultthumbnailk = 5.0;
      let jinit_yzs = icondefaultthumbnailk >= 6397236.0;
      do {
         icondefaultthumbnailk *= parseInt(`${icondefaultthumbnailk}`) / 1;
         if (jinit_yzs) {
            break;
         }
      } while (jinit_yzs && (icondefaultthumbnailk > icondefaultthumbnailk));
          let langE = String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,108,95,105,95,55,53,0);
          let footballtrophyh: Array<any> = [359, 535, 341];
          let valuesS = true;
         icondefaultthumbnailk += 1 ^ footballtrophyh.length;
         langE = "3";
         footballtrophyh = [(1 ^ (valuesS ? 3 : 5))];
      if ((icondefaultthumbnailk + 2.100) >= 1.21) {
          let macauN = false;
          let i_animation8 = String.fromCharCode(112,114,111,103,114,101,115,115,101,115,95,56,95,52,49,0);
          let defaultlogoX = 1.0;
         icondefaultthumbnailk /= Math.max(4, (String.fromCharCode(74,0) == i_animation8 ? parseInt(`${defaultlogoX}`) : i_animation8.length));
         macauN = (!macauN ? !macauN : !macauN);
      }
      appleN = 92 > gdtadvV.length || 92 > homet;
      combinedw /= Math.max(parseFloat(`${final_ngD.length}`), 2);
      homet <<= Math.min(Math.abs(gdtadvV.length / (Math.max(3, 1))), 3);
       let libjsio = 0.0;
       let loadingspinnerv = String.fromCharCode(114,101,119,114,105,116,101,95,100,95,49,0);
       let codegenI = String.fromCharCode(100,101,99,114,101,109,101,110,116,95,118,95,49,50,0);
          let rulesf = String.fromCharCode(122,95,55,52,95,99,111,110,116,114,97,105,110,116,115,0);
         libjsio -= parseFloat(`${rulesf.length / (Math.max(2, 2))}`);
      for (let f = 0; f < 1; f++) {
         loadingspinnerv += `${(codegenI == String.fromCharCode(76,0) ? parseInt(`${libjsio}`) : codegenI.length)}`;
      }
      while (1 == codegenI.length) {
         codegenI += `${(loadingspinnerv == String.fromCharCode(49,0) ? loadingspinnerv.length : parseInt(`${libjsio}`))}`;
         break;
      }
         loadingspinnerv += `${loadingspinnerv.length}`;
          let telemetry1: Map<any, any> = new Map([[String.fromCharCode(107,95,57,53,95,116,105,109,101,108,105,110,101,0),true ], [String.fromCharCode(115,95,56,56,95,110,116,112,0),false ], [String.fromCharCode(120,95,56,55,95,122,111,110,101,115,0),true ]]);
          let foregroundk: Map<any, any> = new Map([[String.fromCharCode(99,95,57,57,95,100,105,97,103,0),318], [String.fromCharCode(117,110,108,111,99,107,95,111,95,50,48,0),381], [String.fromCharCode(120,99,111,114,114,95,56,95,56,48,0),9]]);
          let loadingspinnerI = String.fromCharCode(104,95,55,57,95,104,105,103,104,108,105,103,104,116,115,0);
         libjsio /= Math.max(4, parseFloat(`${parseInt(`${libjsio}`)}`));
         telemetry1.set(`${telemetry1.size}`, 2 & foregroundk.size);
         foregroundk.set(loadingspinnerI, 3);
         loadingspinnerI = `${foregroundk.size}`;
      playershirtr %= Math.max(2 << (Math.min(Math.abs(parseInt(`${combinedw}`)), 4)), 4);
       let iconmegaphonei = 0;
       let targetO = 0.0;
         iconmegaphonei <<= Math.min(Math.abs(parseInt(`${targetO}`)), 1);
         iconmegaphonei /= Math.max(5, 1);
      if (iconmegaphonei >= targetO) {
         targetO /= Math.max(iconmegaphonei ^ parseInt(`${targetO}`), 4);
      }
         iconmegaphonei /= Math.max(2, 3 + parseInt(`${targetO}`));
         targetO /= Math.max(iconmegaphonei << (Math.min(Math.abs(parseInt(`${targetO}`)), 3)), 1);
      let backiconmaskk = iconmegaphonei >= 8335125;
      do {
         iconmegaphonei |= parseInt(`${targetO}`);
         if (backiconmaskk) {
            break;
         }
      } while (((iconmegaphonei - parseInt(`${targetO}`)) == 5 || (parseInt(`${targetO}`) - iconmegaphonei) == 5) && backiconmaskk);
      combinedw += parseFloat(`${file9.length}`);
   while (1 < (3 % (Math.max(5, playershirtr)))) {
      appleN = modityY.length <= 35;
      break;
   }
      gdtadvV += `${file9.length}`;
   let matchdetailbgs = 6790900 <= gdtadvV.length;
   do {
      gdtadvV += `${((appleN ? 4 : 1) & 3)}`;
      if (matchdetailbgs) {
         break;
      }
   } while (matchdetailbgs && (final_ngD == String.fromCharCode(80,0)));
   while ((gdtadvV.length / 5) <= 3) {
      gdtadvV = `${(gdtadvV == String.fromCharCode(54,0) ? gdtadvV.length : file9.length)}`;
      break;
   }
   for (let t = 0; t < 3; t++) {
      final_ngD += `${modityY.length / (Math.max(8, final_ngD.length))}`;
   }
      playershirtr += homet >> (Math.min(file9.length, 5));
   if ((gdtadvV.length / 5) >= 2 && 4 >= (gdtadvV.length / 5)) {
      playershirtr |= parseInt(`${combinedw}`) - 3;
   }
      final_ngD += `${(gdtadvV == String.fromCharCode(66,0) ? gdtadvV.length : file9.length)}`;
   for (let w = 0; w < 1; w++) {
      playershirtr &= 2 | file9.length;
   }
      playershirtr <<= Math.min(2, Math.abs(playershirtr % 3));
   while ((5 >> (Math.min(2, file9.length))) < 1 && 4 < (5 >> (Math.min(3, file9.length)))) {
      file9.push(1);
      break;
   }
   while (1 >= (modityY.length | 4)) {
      playershirtr += 2 << (Math.min(2, Math.abs(playershirtr)));
      break;
   }
   while (!appleN) {
      appleN = !appleN;
      break;
   }
   let backwhitea = playershirtr <= 6894877;
   do {
       let predictionbannersharedS = String.fromCharCode(100,95,55,54,95,110,116,104,0);
       let weatheri = 4.0;
         predictionbannersharedS += `${predictionbannersharedS.length}`;
      let networkc = String.fromCharCode(104,122,52,100,101,49,57,0) == predictionbannersharedS;
      do {
          let stepp = 5.0;
          let arrowdownG = String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,55,95,56,57,0);
          let iconsaveimagex: Map<any, any> = new Map([[String.fromCharCode(110,111,97,108,108,111,99,95,118,95,57,55,0),String.fromCharCode(103,95,54,51,95,111,110,101,111,102,0)], [String.fromCharCode(121,105,101,108,100,95,101,95,51,54,0),String.fromCharCode(119,111,114,107,105,110,103,95,116,95,56,54,0)]]);
         predictionbannersharedS = `${iconsaveimagex.size - parseInt(`${stepp}`)}`;
         stepp -= parseFloat(`${arrowdownG.length % 3}`);
         arrowdownG = `${arrowdownG.length}`;
         if (networkc) {
            break;
         }
      } while ((4 > (4 ^ predictionbannersharedS.length) && (predictionbannersharedS.length & 4) > 1) && networkc);
      while (3.52 == (weatheri * 3.55) || (weatheri * parseFloat(`${predictionbannersharedS.length}`)) == 3.55) {
          let orangeclock9: Array<any> = [String.fromCharCode(99,111,110,102,101,116,116,105,95,106,95,56,51,0), String.fromCharCode(112,108,97,110,97,114,116,111,121,117,121,95,114,95,53,55,0), String.fromCharCode(113,95,55,52,0)];
          let submitp = 3.0;
          let private_l6 = String.fromCharCode(112,104,111,110,101,115,95,116,95,51,48,0);
         predictionbannersharedS = "1";
         orangeclock9 = [parseInt(`${submitp}`)];
         submitp /= Math.max(parseFloat(`${parseInt(`${submitp}`)}`), 5);
         private_l6 = "1";
         break;
      }
         predictionbannersharedS += "3";
         weatheri *= (parseFloat(`${String.fromCharCode(114,0) == predictionbannersharedS ? parseInt(`${weatheri}`) : predictionbannersharedS.length}`));
         weatheri /= Math.max(parseFloat(`${1}`), 2);
      playershirtr <<= Math.min(3, Math.abs(file9.length | 3));
      if (backwhitea) {
         break;
      }
   } while (backwhitea && (playershirtr == gdtadvV.length));

    setShowAdOverlay(true);
  };

  const onCloseAdOverlay = () => {
       let matchinactiveO = false;
    let mbbannerA = 2.0;
    let injuryT = 0.0;
    let navigationt = 3;
    let g_title8 = 0;
    let runtimeschedulerM = true;
    let libreactu = 4.0;
    let clearO = 4;
    let proxyq: Array<any> = [857, 122];
    let play2 = String.fromCharCode(118,95,52,56,95,109,101,116,97,115,111,117,110,100,0);
    let unfillW: Map<any, any> = new Map([[String.fromCharCode(122,111,109,98,105,101,95,102,95,54,0),419], [String.fromCharCode(105,115,105,95,117,95,56,48,0),594]]);
    let libsgcoreV = true;
    let basketballawayteamG = String.fromCharCode(117,95,55,52,95,114,118,100,97,116,97,0);
   if (play2.includes(`${clearO}`)) {
      clearO *= ((matchinactiveO ? 2 : 1) * parseInt(`${injuryT}`));
   }
       let castK = String.fromCharCode(114,111,108,101,95,116,95,55,48,0);
       let suboutE: Array<any> = [String.fromCharCode(119,95,56,51,95,112,114,105,110,116,0), String.fromCharCode(102,111,114,103,111,116,95,106,95,53,57,0), String.fromCharCode(99,111,109,109,111,110,95,115,95,57,0)];
       let dropdown8 = String.fromCharCode(112,95,56,56,95,115,101,97,114,99,104,101,100,0);
      let foundi = dropdown8.length >= 8391920;
      do {
          let loadingb: Array<any> = [207, 31, 354];
          let reducerM = 3;
          let playlisto = String.fromCharCode(109,97,107,101,110,97,110,95,113,95,57,52,0);
          let floating3 = true;
          let bingK: Array<any> = [399, 776, 657];
         dropdown8 = "1";
         loadingb = [playlisto.length];
         reducerM |= (String.fromCharCode(97,0) == playlisto ? playlisto.length : reducerM);
         floating3 = (bingK.length | playlisto.length) < 36;
         bingK = [1];
         if (foundi) {
            break;
         }
      } while ((5 >= dropdown8.length && castK == String.fromCharCode(83,0)) && foundi);
          let bottom_ = String.fromCharCode(98,108,97,99,107,115,95,116,95,55,55,0);
         suboutE.push(1);
         bottom_ = `${bottom_.length - bottom_.length}`;
      let hovera = dropdown8 == String.fromCharCode(114,98,97,103,52,49,107,52,102,95,0);
      do {
         dropdown8 += `${2 & dropdown8.length}`;
         if (hovera) {
            break;
         }
      } while (((5 % (Math.max(8, dropdown8.length))) <= 4) && hovera);
          let completeV = String.fromCharCode(106,95,56,95,115,105,103,110,105,102,105,99,97,110,116,0);
          let encryptt = String.fromCharCode(117,110,116,114,97,99,107,95,98,95,53,52,0);
          let ksadN = 5.0;
         suboutE = [2 ^ completeV.length];
         completeV += `${2 & parseInt(`${ksadN}`)}`;
         encryptt += `${3 ^ parseInt(`${ksadN}`)}`;
       let dacccfaabfbcbadeebddcabacdffdbp = String.fromCharCode(100,105,114,101,99,116,120,95,119,95,51,55,0);
       let reactX = String.fromCharCode(108,95,50,57,95,99,116,120,0);
       let sharedF: Array<any> = [String.fromCharCode(97,95,49,48,48,95,103,101,111,109,101,116,114,121,0), String.fromCharCode(115,99,99,111,110,102,105,103,95,122,95,57,57,0), String.fromCharCode(112,107,101,121,95,57,95,55,50,0)];
       let vignette4 = true;
       let l_lockQ = true;
       let distJ: Array<any> = [209, 969, 243];
         l_lockQ = (dacccfaabfbcbadeebddcabacdffdbp.length % (Math.max(castK.length, 1))) == 41;
      navigationt >>= Math.min(1, Math.abs(1 + proxyq.length));
      runtimeschedulerM = play2.length < 12;
      g_title8 <<= Math.min(5, Math.abs(parseInt(`${injuryT}`)));
       let termsH = String.fromCharCode(105,110,99,111,110,115,105,115,116,101,110,99,121,95,103,95,50,57,0);
       let predictionC = String.fromCharCode(114,95,50,48,95,109,101,103,97,98,121,116,101,0);
         termsH = `${predictionC.length}`;
      for (let f = 0; f < 1; f++) {
         predictionC = "1";
      }
      libreactu /= Math.max(1, (parseFloat(`${termsH == String.fromCharCode(73,0) ? termsH.length : parseInt(`${mbbannerA}`)}`)));
      play2 += `${(navigationt >> (Math.min(2, Math.abs((runtimeschedulerM ? 1 : 4)))))}`;
      injuryT -= 1;
      clearO <<= Math.min(Math.abs(1 * parseInt(`${mbbannerA}`)), 5);
      libreactu += parseFloat(`${3 & parseInt(`${injuryT}`)}`);
   let sellmathbackground7 = runtimeschedulerM ? !runtimeschedulerM : runtimeschedulerM;
   do {
      runtimeschedulerM = !play2.includes(`${runtimeschedulerM}`);
      if (sellmathbackground7) {
         break;
      }
   } while ((libreactu > 4.7) && sellmathbackground7);
      proxyq.push(play2.length);
       let iconclosewhitewithbgD = String.fromCharCode(109,105,108,108,105,115,95,108,95,57,53,0);
       let penaltygoala: Array<any> = [767, 851];
      if (4 < penaltygoala.length) {
         iconclosewhitewithbgD = `${iconclosewhitewithbgD.length}`;
      }
      for (let v = 0; v < 2; v++) {
         iconclosewhitewithbgD = `${(String.fromCharCode(115,0) == iconclosewhitewithbgD ? iconclosewhitewithbgD.length : penaltygoala.length)}`;
      }
      if (iconclosewhitewithbgD.endsWith(`${penaltygoala.length}`)) {
          let middleT = 1.0;
          let paginationu = String.fromCharCode(110,95,54,50,95,99,108,97,109,112,101,100,0);
          let stra = false;
          let baselineM = String.fromCharCode(115,101,114,105,97,108,105,122,101,95,53,95,56,53,0);
         iconclosewhitewithbgD = "3";
         middleT += parseInt(`${middleT}`);
         paginationu = `${parseInt(`${middleT}`)}`;
         stra = middleT >= 68.65;
         baselineM = "3";
      }
         iconclosewhitewithbgD += `${3 ^ iconclosewhitewithbgD.length}`;
      let default_3k = 5731736 <= penaltygoala.length;
      do {
          let iconarrowrightwhiteG = String.fromCharCode(117,112,115,104,105,102,116,101,100,95,111,95,56,56,0);
          let with_vI: Map<any, any> = new Map([[String.fromCharCode(99,95,57,95,115,107,105,112,112,101,100,0),false ], [String.fromCharCode(121,95,50,53,95,115,104,111,114,116,99,117,116,115,0),false ], [String.fromCharCode(101,95,51,50,95,115,101,113,118,105,100,101,111,0),true ]]);
          let progressZ: Map<any, any> = new Map([[String.fromCharCode(107,112,115,95,110,95,57,55,0),true ], [String.fromCharCode(100,105,102,102,120,95,53,95,55,53,0),true ]]);
         penaltygoala.push(iconclosewhitewithbgD.length >> (Math.min(Math.abs(2), 1)));
         iconarrowrightwhiteG += "3";
         with_vI.set(iconarrowrightwhiteG, progressZ.size);
         progressZ = new Map([[`${progressZ.size}`, progressZ.size]]);
         if (default_3k) {
            break;
         }
      } while (default_3k && (5 < (penaltygoala.length | iconclosewhitewithbgD.length)));
          let u_image5 = String.fromCharCode(109,101,109,98,101,114,115,104,105,112,95,106,95,52,56,0);
         iconclosewhitewithbgD = `${penaltygoala.length - 2}`;
         u_image5 = `${u_image5.length * u_image5.length}`;
      libreactu *= (parseFloat(`${(runtimeschedulerM ? 5 : 2) * 2}`));
   let matchK = 7658280 >= play2.length;
   do {
      play2 = `${navigationt}`;
      if (matchK) {
         break;
      }
   } while ((1.53 >= libreactu) && matchK);
       let selectedk = true;
       let imagewatchlivec: Array<any> = [680, 193];
      if (5 == imagewatchlivec.length && 2 == (5 & imagewatchlivec.length)) {
         selectedk = imagewatchlivec.length <= 42;
      }
       let layoutM = String.fromCharCode(109,101,110,117,115,95,100,95,53,56,0);
       let notificationfilledZ = String.fromCharCode(114,101,116,117,114,110,95,116,95,53,55,0);
      if (imagewatchlivec.length <= notificationfilledZ.length) {
          let iconpipshrinks = String.fromCharCode(104,105,110,116,101,100,95,109,95,54,49,0);
          let othermatchdetailbgu: Array<any> = [705, 39];
          let nalytics3 = 0;
         imagewatchlivec = [othermatchdetailbgu.length];
         iconpipshrinks += `${iconpipshrinks.length}`;
         othermatchdetailbgu.push(iconpipshrinks.length);
         nalytics3 %= Math.max(nalytics3, 3);
      }
      while (imagewatchlivec.length < 1) {
         imagewatchlivec = [notificationfilledZ.length | imagewatchlivec.length];
         break;
      }
      let orangetickH = 9007215 >= imagewatchlivec.length;
      do {
          let predictionlossI = 0.0;
          let settingsY: Array<any> = [177, 338];
          let libglogi = String.fromCharCode(122,95,49,55,95,115,98,119,97,105,116,0);
          let backwardR: Array<any> = [914, 105];
          let expandb = 4.0;
         imagewatchlivec.push((layoutM == String.fromCharCode(113,0) ? imagewatchlivec.length : layoutM.length));
         predictionlossI *= (parseFloat(`${libglogi == String.fromCharCode(101,0) ? backwardR.length : libglogi.length}`));
         settingsY = [parseInt(`${expandb}`)];
         backwardR = [(libglogi == String.fromCharCode(120,0) ? libglogi.length : settingsY.length)];
         if (orangetickH) {
            break;
         }
      } while ((imagewatchlivec.length >= 5 || (5 - imagewatchlivec.length) >= 4) && orangetickH);
       let regengY = String.fromCharCode(104,101,120,105,110,116,95,114,95,54,51,0);
      navigationt *= 1 ^ navigationt;
      proxyq = [parseInt(`${mbbannerA}`) & 1];
      play2 = `${2 ^ parseInt(`${mbbannerA}`)}`;
   let overD = matchinactiveO ? !matchinactiveO : matchinactiveO;
   do {
      matchinactiveO = 8.17 <= mbbannerA && !matchinactiveO;
      if (overD) {
         break;
      }
   } while (overD && (runtimeschedulerM || !matchinactiveO));
   let arrowdownX = 6074914.0 <= injuryT;
   do {
      injuryT += 2;
      if (arrowdownX) {
         break;
      }
   } while ((parseInt(`${injuryT}`) == play2.length) && arrowdownX);
   while ((clearO / 4) < 5 && 4 < (clearO / (Math.max(4, 6)))) {
      clearO %= Math.max(5, 3);
      break;
   }
       let smallbrightnessg = 4.0;
       let iconcalendarw = String.fromCharCode(118,112,99,120,95,114,95,50,50,0);
         iconcalendarw = `${iconcalendarw.length >> (Math.min(Math.abs(3), 2))}`;
      while (!iconcalendarw.includes(`${smallbrightnessg}`)) {
          let feedback2 = String.fromCharCode(116,97,103,99,111,109,112,97,114,101,95,50,95,57,49,0);
          let libreanimatedu = 3.0;
         iconcalendarw = "1";
         feedback2 += `${feedback2.length}`;
         libreanimatedu += parseFloat(`${feedback2.length}`);
         break;
      }
      if ((smallbrightnessg / (Math.max(iconcalendarw.length, 8))) >= 2.86 || 2.86 >= (smallbrightnessg / (Math.max(iconcalendarw.length, 3)))) {
         smallbrightnessg -= 2 >> (Math.min(3, iconcalendarw.length));
      }
         iconcalendarw += `${parseInt(`${smallbrightnessg}`) * iconcalendarw.length}`;
       let airbnbstarselecteds = String.fromCharCode(120,108,97,98,101,108,104,101,105,103,104,116,95,52,95,56,52,0);
         iconcalendarw += `${airbnbstarselecteds.length << (Math.min(Math.abs(1), 5))}`;
      injuryT /= Math.max(parseInt(`${libreactu}`), 4);
   for (let u = 0; u < 3; u++) {
      mbbannerA /= Math.max((parseFloat(`${parseInt(`${libreactu}`) >> (Math.min(2, Math.abs((runtimeschedulerM ? 4 : 4))))}`)), 3);
   }
      g_title8 %= Math.max(parseInt(`${libreactu}`) & 2, 1);
      proxyq = [parseInt(`${injuryT}`) - proxyq.length];
      navigationt &= (play2.length ^ (runtimeschedulerM ? 1 : 2));

    setShowAdOverlay(false);
  };

  return (
    <ScreenContainer containerStyle={styles.containerStyle}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>随心看</Text>
      </View>
      <EighteenPlusControls />
      {!isOffline && (
        <MiniVideoList
          ref={miniVodRef}
          miniVodListRef={miniVodListRef}
          videos={flattenedVideos}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetching={isFetching}
          isFetchingNextPage={isFetchingNextPage}
          isActive={isFocused && !isInBackground}
          handleRefreshMiniVod={handleRefresh}
          isRefreshing={isRefreshing}
          isPressTabScroll={isPressTabScroll}
          key={adultMode.toString()}
          isFocusLogin={isFocusLogin}
          onPressAds={onPressAds}
        />
      )}
      {isFocusLogin.current &&
        <CPressable
          onPress={onFocusLoginOverlayPress}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 999,
          }}
        />
      }

      <BecomeVipOverlay
        setShowBecomeVIPOverlay={setShowAdOverlay}
        showBecomeVIPOverlay={isShowAdOverlay}
        isJustClose={true}
        selectedTab="common"
        onClose={onCloseAdOverlay}
      />

      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </ScreenContainer>
  );
}

export default memo(WatchAnytime);

const styles = StyleSheet.create({
  containerStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 10,
  },
  titleTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 20,
    zIndex: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: { color: '#FFF', fontSize: 20 },
});
