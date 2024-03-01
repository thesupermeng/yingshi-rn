import { useAppDispatch, useAppSelector, useSelector } from '@hooks/yys_frame';
import yys_event_common from '../../Umeng/yys_event_common';
import NetInfo from '@react-native-community/netinfo';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { yys_Videocommon } from '@redux/reducers/yys_libavdevice';
import { yys_MintegralLibavdevice } from '@redux/yys_sport_shrink';
import { yys_ScrollviewPangle } from '@type/yys_libzeus';
import { screenModel } from '@type/yys_service_setting';
import { API_DOMAIN_TEST } from '@utility/yys_ajax_switch';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { AppState, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useMinivodQuery } from '@api';
import EighteenPlusControls from '../components/adultVideo/yys_ticked_mini';
import ScreenContainer from '../components/container/yys_executor_expand';
import MiniVideoList from '../components/videoPlayer/WatchAnytime/yys_fastforward_tail';
import NoConnection from './../components/common/yys_armva_classes';
import { CPressable } from '../components/atoms';
import { showLoginAction } from '@redux/actions/yys_runtimescheduler';
import { yys_HejiCricket } from '@redux/reducers/yys_privacy_round';
import { yys_RelatedTooltips } from '@models/yys_project_pagination';
import BecomeVipOverlay from '../components/modal/yys_next_drag';
import { ADULT_MODE_PREVIEW_DURATION, MINI_SHOW_LOGIN_NUMBER } from '@utility/yys_ajax_switch';

type yys_ReminderShoot = {
  data: {
    List: Array<yys_ScrollviewPangle>;
  };
};

type yys_CatalogGuide = {
  setPause: (pause: boolean) => void;
};

const LIMIT = 300;

function WatchAnytime({ navigation }: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  
  const [isInBackground, setIsInBackground] = useState(false);
  const [flattenedVideos, setFlattenedVideos] = useState(Array<yys_ScrollviewPangle>);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isPressTabScroll, setPressTabScroll] = useState(false);
  const [isShowAdOverlay, setShowAdOverlay] = useState(false);
  const miniVodRef = useRef<yys_CatalogGuide>();
  const miniVodListRef = useRef<any>();
  const dispatch = useAppDispatch();

  const settingsReducer: yys_Videocommon = useAppSelector(
    ({ settingsReducer }: yys_MintegralLibavdevice) => settingsReducer,
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer,
  );

  const userState = useSelector<yys_HejiCricket>('userReducer');
  const { adultMode: adultModeGlobal, watchAnytimeAdultMode } = screenState;
  const adultMode = watchAnytimeAdultMode;

  const isVip = yys_RelatedTooltips.isVip(userState.user);

  const fetchMode = adultMode ? 'adult' : 'normal';
  const isFocusLogin = useRef(false);

  useEffect(() => {
   if(flattenedVideos.length == 0){
     refetch;
   }
 })
  
  const handleAppStateChange = (nextAppState: any) => {
    setIsInBackground(nextAppState !== 'active');
  };

  const handleRefresh = useCallback(async () => {
       let whistled = 3;
    let indicatorL = 0.0;
    let largey = String.fromCharCode(119,95,53,51,95,113,117,97,108,105,116,121,0);
    let librrcl: Array<any> = [943, 844];
    let serviceh = false;
    let modele = String.fromCharCode(121,95,52,50,95,107,110,111,119,110,0);
    let formM: Array<any> = [739, 144];
    let mbnativeadvancedw = 2.0;
    let foundj = 3.0;
    let roomt = String.fromCharCode(112,101,114,115,111,110,115,95,51,95,53,50,0);
    let mintegral8 = 2.0;
    let clearW = 2.0;
    let description_ovt: Array<any> = [308, 287, 492];
    let delegate_tom = true;
       let baseD = true;
       let libturbomodulejsijnik = String.fromCharCode(109,108,112,100,115,112,95,107,95,56,51,0);
       let encrypt4 = 0;
      let encryptN = baseD ? !baseD : baseD;
      do {
          let mutedM = String.fromCharCode(118,95,56,95,102,114,101,113,98,97,114,107,0);
          let project_ = false;
          let crossB = 4;
         baseD = mutedM.length <= 92;
         mutedM = "3";
         project_ = crossB > 52;
         crossB |= crossB;
         if (encryptN) {
            break;
         }
      } while (encryptN && (3 == encrypt4));
          let tooltipss = String.fromCharCode(97,95,52,56,95,109,112,101,103,112,105,99,116,117,114,101,0);
          let libreactnativeblobM = 5.0;
         baseD = libturbomodulejsijnik.startsWith(`${encrypt4}`);
         tooltipss = `${parseInt(`${libreactnativeblobM}`)}`;
         libreactnativeblobM *= parseFloat(`${parseInt(`${libreactnativeblobM}`) / (Math.max(1, 3))}`);
          let toponS = String.fromCharCode(105,95,49,54,95,109,97,115,107,0);
          let leakcheckerj: Map<any, any> = new Map([[String.fromCharCode(118,95,54,50,95,112,115,104,0),628], [String.fromCharCode(103,95,56,55,95,115,121,109,98,111,108,115,0),30], [String.fromCharCode(102,116,118,109,111,95,53,95,54,48,0),807]]);
         baseD = libturbomodulejsijnik.length == 11;
         toponS += `${toponS.length >> (Math.min(3, Math.abs(leakcheckerj.size)))}`;
         leakcheckerj.set(`${toponS}`, 1);
      if (baseD && (2 | encrypt4) < 2) {
         encrypt4 -= encrypt4;
      }
         baseD = encrypt4 < 50 || libturbomodulejsijnik == String.fromCharCode(113,0);
         baseD = libturbomodulejsijnik.length == encrypt4;
      if (5 > (libturbomodulejsijnik.length | 3)) {
          let helperW = 3.0;
          let sans3 = 0;
          let reminderL = String.fromCharCode(99,95,50,54,95,109,117,108,116,105,112,97,114,116,0);
          let langkeyG: Map<any, any> = new Map([[String.fromCharCode(119,95,51,56,95,114,97,116,101,115,0),461], [String.fromCharCode(106,95,56,48,95,114,117,108,101,0),502], [String.fromCharCode(121,95,52,57,95,98,121,116,101,99,111,100,101,118,116,97,98,0),767]]);
         libturbomodulejsijnik += "1";
         helperW += 1 ^ parseInt(`${helperW}`);
         sans3 += reminderL.length;
         reminderL += `${langkeyG.size}`;
         langkeyG.set(reminderL, reminderL.length);
      }
      if (!baseD) {
         libturbomodulejsijnik += "2";
      }
       let switch_1uw = 2.0;
      modele = `${parseInt(`${mintegral8}`) & 2}`;
      serviceh = librrcl.length >= 55;
      largey = `${modele.length >> (Math.min(5, Math.abs(whistled)))}`;
      whistled /= Math.max(whistled, 1);
       let mountingU = 4;
          let screenO = 3;
          let yingj: Map<any, any> = new Map([[String.fromCharCode(109,97,99,104,105,110,101,95,98,95,54,50,0),390], [String.fromCharCode(113,95,53,56,95,104,105,110,116,105,110,103,0),609], [String.fromCharCode(115,116,97,114,116,117,112,95,107,95,55,50,0),486]]);
          let predictionB = 5.0;
         mountingU /= Math.max(4, 3 >> (Math.min(4, Math.abs(yingj.size))));
         screenO %= Math.max(parseInt(`${predictionB}`) & 3, 5);
         yingj.set(`${screenO}`, screenO | 3);
         predictionB *= parseInt(`${predictionB}`);
         mountingU |= mountingU;
      if (3 <= (mountingU / (Math.max(3, mountingU)))) {
          let libjsijniprofilere = 4;
         mountingU ^= 1;
         libjsijniprofilere /= Math.max(libjsijniprofilere | libjsijniprofilere, 3);
      }
      foundj += parseFloat(`${roomt.length / 3}`);
   for (let d = 0; d < 3; d++) {
      largey = "1";
   }
   let whatsapp5 = indicatorL <= 9250878.0;
   do {
      indicatorL -= parseFloat(`${parseInt(`${clearW}`)}`);
      if (whatsapp5) {
         break;
      }
   } while (whatsapp5 && (mintegral8 < indicatorL));
   for (let s = 0; s < 2; s++) {
      foundj *= parseFloat(`${parseInt(`${mbnativeadvancedw}`) >> (Math.min(5, Math.abs(parseInt(`${clearW}`))))}`);
   }
       let orientationO = true;
       let fillT = true;
      if (!fillT || orientationO) {
         orientationO = (!orientationO ? !fillT : !orientationO);
      }
         fillT = (!orientationO ? fillT : !orientationO);
      if (!fillT || !orientationO) {
         orientationO = fillT;
      }
         fillT = !orientationO;
      if (fillT) {
         fillT = (orientationO ? fillT : !orientationO);
      }
         orientationO = (orientationO ? !fillT : !orientationO);
      librrcl = [modele.length + 1];

    setIsRefreshing(true);

       let zhengpian7 = String.fromCharCode(114,101,113,117,105,114,105,110,103,95,51,95,50,56,0);
      for (let h = 0; h < 2; h++) {
         zhengpian7 += `${zhengpian7.length}`;
      }
       let plashm = 0.0;
         zhengpian7 += `${zhengpian7.length * 2}`;
      librrcl.push(parseInt(`${clearW}`) << (Math.min(modele.length, 2)));
   if (!librrcl.includes(mintegral8)) {
       let default__oC: Array<any> = [386, 67, 193];
       let libavfilter2 = String.fromCharCode(119,95,55,52,95,100,97,121,115,0);
       let storey: Array<any> = [319, 26, 524];
       let filedp = String.fromCharCode(115,95,49,53,95,101,120,116,101,114,110,0);
       let utilsu = String.fromCharCode(116,95,57,53,95,112,111,116,105,115,105,111,110,0);
       let historyp = String.fromCharCode(118,97,108,115,95,100,95,53,51,0);
       let weiboC: Map<any, any> = new Map([[String.fromCharCode(111,98,117,115,95,113,95,54,54,0),804], [String.fromCharCode(118,95,57,95,102,109,97,100,100,0),741]]);
       let topicZ: Map<any, any> = new Map([[String.fromCharCode(97,100,97,112,116,101,100,95,113,95,54,56,0),String.fromCharCode(100,95,53,51,0)], [String.fromCharCode(104,95,49,48,48,95,109,108,115,100,0),String.fromCharCode(104,95,53,52,95,114,97,110,115,102,111,114,109,101,114,0)]]);
         storey = [filedp.length + 1];
         storey = [utilsu.length & topicZ.size];
         historyp += `${3 + default__oC.length}`;
         storey.push(2);
      if (!historyp.includes(`${utilsu.length}`)) {
          let binddatasx = 2.0;
          let dropdownz = String.fromCharCode(108,95,53,52,95,104,97,98,108,101,0);
          let foregroundh = 5.0;
          let screenV = 0.0;
          let detailsg = String.fromCharCode(104,95,51,56,95,97,99,116,117,97,108,105,122,97,116,105,111,110,0);
         historyp = `${utilsu.length % (Math.max(1, filedp.length))}`;
         binddatasx *= parseFloat(`${1 >> (Math.min(3, Math.abs(parseInt(`${binddatasx}`))))}`);
         dropdownz += `${parseInt(`${screenV}`) / (Math.max(detailsg.length, 1))}`;
         foregroundh -= 1 >> (Math.min(Math.abs(parseInt(`${foregroundh}`)), 4));
         screenV *= dropdownz.length;
         detailsg += `${parseInt(`${screenV}`)}`;
      }
      while ((utilsu.length << (Math.min(Math.abs(2), 5))) <= 4 || (utilsu.length << (Math.min(Math.abs(2), 1))) <= 2) {
          let singapore5 = String.fromCharCode(111,110,101,111,102,115,95,111,95,57,53,0);
          let floatingL: Map<any, any> = new Map([[String.fromCharCode(105,110,100,101,112,101,110,100,101,100,95,119,95,55,54,0),899], [String.fromCharCode(109,95,50,50,95,121,117,118,109,111,110,111,0),420], [String.fromCharCode(111,111,108,116,105,112,95,113,95,57,55,0),227]]);
          let zoomF = 1.0;
          let sentryk = String.fromCharCode(111,103,103,105,110,103,95,102,95,51,52,0);
         utilsu = `${topicZ.size}`;
         singapore5 = `${sentryk.length / (Math.max(8, floatingL.size))}`;
         floatingL = new Map([[`${floatingL.size}`, floatingL.size ^ sentryk.length]]);
         zoomF *= sentryk.length;
         break;
      }
          let gradleJ: Map<any, any> = new Map([[String.fromCharCode(115,95,55,52,95,100,120,118,97,0),false ], [String.fromCharCode(103,95,56,53,0),true ]]);
         libavfilter2 += `${weiboC.size}`;
         gradleJ.set(`${gradleJ.size}`, 3);
      while ((storey.length - 5) > 1 && (filedp.length - 5) > 2) {
         filedp += `${filedp.length}`;
         break;
      }
      let eighteenR = default__oC.length <= 6739296;
      do {
          let reducerZ = 2;
         default__oC.push(topicZ.size >> (Math.min(Math.abs(3), 1)));
         reducerZ %= Math.max(1 & reducerZ, 2);
         if (eighteenR) {
            break;
         }
      } while (eighteenR && (2 <= default__oC.length));
      for (let n = 0; n < 3; n++) {
          let analyticX = 2;
          let match5 = String.fromCharCode(100,101,98,117,103,98,111,120,95,120,95,54,50,0);
          let codegen7 = 1.0;
          let submitw = 2;
          let graphicsD = String.fromCharCode(122,95,57,48,95,114,101,102,99,111,117,110,116,101,100,0);
         storey.push(filedp.length);
         analyticX |= (graphicsD == String.fromCharCode(66,0) ? analyticX : graphicsD.length);
         match5 = `${parseInt(`${codegen7}`)}`;
         codegen7 /= Math.max(1, 2 ^ submitw);
         submitw /= Math.max(3 * parseInt(`${codegen7}`), 3);
      }
      mintegral8 *= parseFloat(`${3}`);
   }
      indicatorL -= (parseFloat(`${(serviceh ? 3 : 3)}`));
   let androidP = formM.length <= 6924862;
   do {
      formM = [largey.length | 3];
      if (androidP) {
         break;
      }
   } while (androidP && (parseInt(`${mintegral8}`) >= formM.length));
   if (5 > modele.length) {
       let chinaF = String.fromCharCode(97,95,51,95,109,101,114,103,101,0);
       let adultc = 5.0;
       let runtimeI = 2.0;
      for (let d = 0; d < 2; d++) {
          let skipo = String.fromCharCode(121,95,50,56,95,100,105,105,110,0);
          let sortS: Map<any, any> = new Map([[String.fromCharCode(104,95,49,57,95,98,114,97,110,99,104,0),436], [String.fromCharCode(115,104,111,117,121,97,99,104,111,95,114,95,55,52,0),467], [String.fromCharCode(115,101,99,111,110,100,97,114,121,95,57,95,56,57,0),108]]);
          let combinedj: Array<any> = [573, 242, 917];
         chinaF = `${2 - parseInt(`${adultc}`)}`;
         skipo = `${1 >> (Math.min(3, skipo.length))}`;
         sortS.set(skipo, (skipo == String.fromCharCode(48,0) ? skipo.length : combinedj.length));
         combinedj.push(3);
      }
         adultc /= Math.max(parseFloat(`${parseInt(`${runtimeI}`)}`), 3);
       let streamingy: Array<any> = [737, 88];
       let smallw: Map<any, any> = new Map([[String.fromCharCode(114,116,112,114,101,99,101,105,118,101,114,95,121,95,54,57,0),true ], [String.fromCharCode(105,110,112,117,116,116,101,109,95,98,95,51,52,0),true ], [String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,95,120,95,54,57,0),false ]]);
         chinaF = "1";
          let sellS = String.fromCharCode(98,95,54,55,95,115,101,110,100,0);
          let mapbuffero = String.fromCharCode(100,111,119,110,108,105,110,107,95,113,95,55,55,0);
         runtimeI *= parseFloat(`${chinaF.length ^ parseInt(`${runtimeI}`)}`);
         sellS = "2";
         mapbuffero = `${sellS.length - mapbuffero.length}`;
      let statsy = streamingy.length >= 6372462;
      do {
          let pausep = 5.0;
          let chinaa = String.fromCharCode(115,117,98,114,97,110,103,101,115,95,107,95,52,52,0);
         streamingy = [1];
         pausep *= parseFloat(`${2}`);
         chinaa += "3";
         if (statsy) {
            break;
         }
      } while (statsy && ((smallw.size | 3) <= 2 || (smallw.size | streamingy.length) <= 3));
      while ((runtimeI / (Math.max(parseFloat(`${streamingy.length}`), 2))) < 4.46) {
         streamingy.push((String.fromCharCode(77,0) == chinaF ? parseInt(`${runtimeI}`) : chinaF.length));
         break;
      }
      while (3 < smallw.size) {
          let privacyt = String.fromCharCode(99,111,109,112,114,101,115,115,111,114,95,57,95,49,50,0);
          let transfery = 1;
          let switch_kfu = true;
         streamingy = [streamingy.length];
         privacyt = `${((switch_kfu ? 1 : 2))}`;
         transfery ^= privacyt.length * 1;
         switch_kfu = 14 < transfery;
         break;
      }
      roomt += `${parseInt(`${runtimeI}`) - chinaF.length}`;
   }
       let overlayY = 0.0;
       let castingR = String.fromCharCode(117,110,109,111,118,101,100,95,48,95,57,57,0);
       let placeholderi = 4.0;
          let libjsinspectork = String.fromCharCode(101,120,99,108,117,100,101,115,95,110,95,55,57,0);
          let overlayx = String.fromCharCode(122,95,51,51,95,97,110,115,105,0);
          let n_imagen = String.fromCharCode(109,95,51,55,95,109,105,110,105,109,117,109,0);
         castingR += `${castingR.length}`;
         libjsinspectork = "2";
         overlayx = `${overlayx.length}`;
         n_imagen = "3";
         placeholderi -= 2;
          let libflipper5 = String.fromCharCode(115,95,51,50,95,112,108,97,121,103,114,111,117,110,100,0);
         placeholderi *= castingR.length;
         libflipper5 = "1";
       let resendL: Map<any, any> = new Map([[String.fromCharCode(116,95,53,54,95,98,105,110,100,108,105,115,116,0),744], [String.fromCharCode(117,95,53,50,95,115,121,109,0),709], [String.fromCharCode(100,95,49,57,95,103,100,115,112,0),236]]);
       let guideh: Map<any, any> = new Map([[String.fromCharCode(118,112,100,97,116,97,95,107,95,53,50,0),false ], [String.fromCharCode(101,95,49,95,99,115,114,105,100,0),false ], [String.fromCharCode(100,105,114,97,99,100,115,112,95,50,95,55,57,0),false ]]);
         castingR += "1";
          let circlep: Array<any> = [String.fromCharCode(114,116,112,102,98,95,118,95,56,55,0), String.fromCharCode(98,95,53,55,95,102,97,109,105,108,121,0)];
         overlayY *= parseFloat(`${castingR.length - parseInt(`${overlayY}`)}`);
         circlep.push(1);
      while (!Array.from(resendL.keys()).includes(`${overlayY}`)) {
         overlayY /= Math.max(parseFloat(`${2 * guideh.size}`), 5);
         break;
      }
      if ((castingR.length / (Math.max(1, resendL.size))) > 1) {
         resendL = new Map([[`${guideh.size}`, guideh.size << (Math.min(Math.abs(1), 5))]]);
      }
         guideh.set(`${resendL.size}`, 3 & resendL.size);
      clearW *= parseInt(`${mbnativeadvancedw}`);
       let componentregistryw = 4;
       let windE = 5.0;
         windE *= componentregistryw;
      if (windE == componentregistryw) {
         windE /= Math.max(parseInt(`${windE}`), 1);
      }
      mbnativeadvancedw += 1;
   let flyerp = 5352529.0 <= mbnativeadvancedw;
   do {
      mbnativeadvancedw /= Math.max(librrcl.length, 5);
      if (flyerp) {
         break;
      }
   } while ((2.89 > (4 + indicatorL)) && flyerp);
       let policyM = false;
      let frame_rmd = policyM ? !policyM : policyM;
      do {
         policyM = (!policyM ? policyM : policyM);
         if (frame_rmd) {
            break;
         }
      } while (frame_rmd && (policyM));
      let typingY = policyM ? !policyM : policyM;
      do {
         policyM = (!policyM ? !policyM : policyM);
         if (typingY) {
            break;
         }
      } while (typingY && (!policyM));
      for (let i = 0; i < 1; i++) {
         policyM = (policyM ? !policyM : policyM);
      }
      serviceh = String.fromCharCode(78,0) == modele;
    

       let stationA = String.fromCharCode(103,101,110,99,102,103,115,95,100,95,57,50,0);
       let downloadingy: Map<any, any> = new Map([[String.fromCharCode(103,95,56,50,95,100,105,114,115,0),298], [String.fromCharCode(112,111,115,116,102,105,108,116,101,114,95,50,95,55,54,0),772]]);
       let backwardR: Map<any, any> = new Map([[String.fromCharCode(110,95,50,48,95,114,97,100,97,114,0),876], [String.fromCharCode(99,111,110,102,105,110,101,100,95,121,95,53,48,0),176]]);
          let k_imageC = String.fromCharCode(116,105,108,101,100,95,111,95,53,48,0);
         backwardR = new Map([[`${downloadingy.size}`, stationA.length | downloadingy.size]]);
         k_imageC = `${k_imageC.length % (Math.max(3, 6))}`;
         downloadingy = new Map([[`${backwardR.size}`, 1 >> (Math.min(3, Math.abs(downloadingy.size)))]]);
      while (stationA.startsWith(`${downloadingy.size}`)) {
         downloadingy.set(`${downloadingy.size}`, downloadingy.size ^ backwardR.size);
         break;
      }
          let topic3: Array<any> = [765, 467, 504];
         stationA = `${backwardR.size | downloadingy.size}`;
         topic3 = [1 - topic3.length];
       let penaltyv = String.fromCharCode(114,95,53,56,95,104,105,103,104,98,100,0);
         stationA = `${(String.fromCharCode(79,0) == penaltyv ? backwardR.size : penaltyv.length)}`;
      if ((2 & stationA.length) > 5 && 3 > (2 & backwardR.size)) {
         stationA += `${downloadingy.size / (Math.max(2, 4))}`;
      }
      for (let d = 0; d < 2; d++) {
         downloadingy.set(penaltyv, backwardR.size);
      }
         stationA += `${downloadingy.size}`;
      librrcl.push(parseInt(`${mbnativeadvancedw}`));
      modele += `${librrcl.length}`;
      largey = `${parseInt(`${foundj}`) ^ 1}`;
   if (description_ovt.includes(mbnativeadvancedw)) {
      description_ovt = [parseInt(`${clearW}`)];
   }
   for (let y = 0; y < 2; y++) {
       let mailh = String.fromCharCode(116,104,97,116,95,102,95,53,53,0);
          let valuesg = String.fromCharCode(118,95,56,54,95,119,97,118,101,115,121,110,116,104,0);
         mailh = `${(valuesg == String.fromCharCode(56,0) ? mailh.length : valuesg.length)}`;
      if (mailh.length == mailh.length) {
         mailh = `${mailh.length * mailh.length}`;
      }
      let latn4 = String.fromCharCode(104,113,121,49,104,51,102,118,112,0) == mailh;
      do {
         mailh += `${mailh.length}`;
         if (latn4) {
            break;
         }
      } while (latn4 && (mailh.length >= mailh.length));
      whistled ^= modele.length;
   }
   while (roomt != String.fromCharCode(108,0)) {
      largey += `${(parseInt(`${foundj}`) & (serviceh ? 4 : 1))}`;
      break;
   }
      largey += `${librrcl.length}`;
   let cricketH = modele == String.fromCharCode(97,56,53,53,103,119,118,118,105,0);
   do {
       let checkboxn = String.fromCharCode(117,110,101,109,112,116,121,95,104,95,55,50,0);
       let leagueS = String.fromCharCode(115,95,49,56,95,122,95,55,56,0);
       let textinputC = true;
       let moonT: Map<any, any> = new Map([[String.fromCharCode(100,95,51,49,95,105,110,116,101,114,112,111,108,97,116,97,98,108,101,0),873], [String.fromCharCode(111,114,105,95,97,95,56,54,0),473]]);
       let libyogaI = 4.0;
      if (!leagueS.endsWith(`${checkboxn.length}`)) {
         checkboxn = "3";
      }
          let appleS = String.fromCharCode(100,95,56,52,95,112,114,101,118,101,110,116,0);
         checkboxn += `${checkboxn.length << (Math.min(Math.abs(2), 1))}`;
         appleS = `${appleS.length}`;
      while (!textinputC) {
          let stationr = 0.0;
          let becomeI = 5.0;
          let speco = 3.0;
         textinputC = checkboxn.length > 11 || becomeI > 74.92;
         stationr /= Math.max(2, parseInt(`${stationr}`) >> (Math.min(3, Math.abs(2))));
         becomeI *= 2;
         speco /= Math.max(4, parseFloat(`${parseInt(`${stationr}`)}`));
         break;
      }
      while (1 < moonT.size) {
         leagueS = `${moonT.size}`;
         break;
      }
          let mbnativeadvancedf: Array<any> = [37, 318];
          let fadfdeebbbfdabbbabdadfaaddaa3 = String.fromCharCode(116,119,105,100,100,108,101,95,109,95,56,56,0);
          let androidD = String.fromCharCode(113,95,55,57,95,100,114,97,102,116,115,0);
         textinputC = !textinputC && mbnativeadvancedf.length >= 97;
         mbnativeadvancedf.push(1);
         fadfdeebbbfdabbbabdadfaaddaa3 = `${fadfdeebbbfdabbbabdadfaaddaa3.length}`;
         androidD = `${androidD.length - 2}`;
      for (let p = 0; p < 3; p++) {
         moonT = new Map([[`${moonT.size}`, checkboxn.length + 1]]);
      }
         libyogaI /= Math.max(3, parseFloat(`${checkboxn.length}`));
      let tooltipsC = textinputC ? !textinputC : textinputC;
      do {
          let confirmationh = 2.0;
          let combinedR: Array<any> = [536, 904, 680];
          let bell9 = String.fromCharCode(114,95,54,55,95,116,121,112,0);
          let unimplementedviewi = String.fromCharCode(107,95,56,55,95,108,101,116,115,0);
         textinputC = !textinputC;
         confirmationh += (parseFloat(`${String.fromCharCode(83,0) == bell9 ? bell9.length : parseInt(`${confirmationh}`)}`));
         combinedR.push(combinedR.length & 3);
         unimplementedviewi = `${(bell9 == String.fromCharCode(85,0) ? bell9.length : combinedR.length)}`;
         if (tooltipsC) {
            break;
         }
      } while ((1 > leagueS.length) && tooltipsC);
      let kickv = 6091556 >= moonT.size;
      do {
          let philippinesm: Array<any> = [String.fromCharCode(121,95,50,55,95,102,108,116,117,105,110,116,0), String.fromCharCode(108,95,52,51,95,102,114,97,99,116,105,111,110,0), String.fromCharCode(98,111,100,101,114,95,52,95,53,50,0)];
          let libreanimatedw: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,100,112,111,105,110,116,95,111,95,52,48,0),String.fromCharCode(114,97,116,105,111,110,97,108,95,116,95,54,56,0)], [String.fromCharCode(110,95,52,50,95,100,97,116,97,116,121,112,101,115,0),String.fromCharCode(117,95,53,53,95,116,114,101,101,115,0)]]);
         moonT = new Map([[`${libreanimatedw.size}`, checkboxn.length]]);
         philippinesm = [philippinesm.length ^ philippinesm.length];
         libreanimatedw.set(`${philippinesm.length}`, philippinesm.length);
         if (kickv) {
            break;
         }
      } while (kickv && ((leagueS.length + moonT.size) > 4 || (moonT.size + 4) > 1));
      let leakcheckerA = moonT.size >= 8627715;
      do {
         moonT.set(checkboxn, ((textinputC ? 4 : 4) - 2));
         if (leakcheckerA) {
            break;
         }
      } while ((5 >= (moonT.size >> (Math.min(Math.abs(1), 3))) && textinputC) && leakcheckerA);
         checkboxn += "1";
      for (let q = 0; q < 3; q++) {
         textinputC = libyogaI > 62.93;
      }
      let libavformat_ = moonT.size <= 6629394;
      do {
         moonT.set(`${textinputC}`, moonT.size / (Math.max(3, 7)));
         if (libavformat_) {
            break;
         }
      } while ((moonT.size > 5) && libavformat_);
      let loadingh = moonT.size <= 6093979;
      do {
          let debug6: Map<any, any> = new Map([[String.fromCharCode(116,105,99,107,101,114,115,95,110,95,56,51,0),792], [String.fromCharCode(100,101,116,97,99,104,101,100,95,106,95,51,54,0),591], [String.fromCharCode(100,98,115,116,97,116,95,50,95,49,52,0),420]]);
          let suggestionh = String.fromCharCode(98,105,110,100,105,110,103,95,117,95,57,51,0);
          let aboutd = 2;
          let typingt = String.fromCharCode(118,95,55,57,95,115,117,98,0);
          let libreactnativeblobI = 5.0;
         moonT = new Map([[checkboxn, (checkboxn.length / (Math.max(8, (textinputC ? 2 : 4))))]]);
         debug6 = new Map([[`${debug6.size}`, suggestionh.length % 2]]);
         suggestionh += `${debug6.size}`;
         aboutd <<= Math.min(3, Math.abs(typingt.length / (Math.max(1, 8))));
         typingt = `${parseInt(`${libreactnativeblobI}`) | 1}`;
         libreactnativeblobI *= parseFloat(`${parseInt(`${libreactnativeblobI}`) ^ typingt.length}`);
         if (loadingh) {
            break;
         }
      } while (((parseInt(`${libyogaI}`) * moonT.size) >= 2 && 4 >= (2 << (Math.min(1, Math.abs(moonT.size))))) && loadingh);
          let telemetry3 = String.fromCharCode(102,95,53,56,95,114,101,112,117,98,108,105,115,104,0);
         textinputC = leagueS == checkboxn;
         telemetry3 = "1";
      modele = `${parseInt(`${libyogaI}`)}`;
      if (cricketH) {
         break;
      }
   } while (cricketH && (3 >= (modele.length + whistled) || 3 >= (modele.length + whistled)));
       let selectedJ = 4.0;
       let mergerI = String.fromCharCode(104,101,118,99,112,114,101,100,95,55,95,51,49,0);
       let checkboxN = String.fromCharCode(99,111,112,121,120,95,106,95,57,51,0);
       let filterg: Map<any, any> = new Map([[String.fromCharCode(99,108,105,101,110,116,95,106,95,54,49,0),true ], [String.fromCharCode(111,110,110,101,99,116,105,111,110,95,111,95,54,48,0),false ]]);
      for (let j = 0; j < 3; j++) {
         selectedJ /= Math.max(parseFloat(`${filterg.size}`), 3);
      }
          let libavformatc = String.fromCharCode(101,95,50,56,95,115,115,108,0);
          let stores = true;
         checkboxN += `${filterg.size * 1}`;
         libavformatc = `${(3 | (stores ? 3 : 3))}`;
         stores = (((stores ? libavformatc.length : 57) + libavformatc.length) >= 57);
          let valuesd: Map<any, any> = new Map([[String.fromCharCode(108,95,54,50,95,99,104,97,110,103,101,0),244], [String.fromCharCode(97,108,112,104,97,98,101,116,95,119,95,51,51,0),928]]);
         selectedJ /= Math.max(parseFloat(`${mergerI.length}`), 1);
         valuesd = new Map([[`${valuesd.size}`, valuesd.size]]);
          let indexu = String.fromCharCode(115,117,110,112,111,115,95,48,95,55,54,0);
          let runtimeschedulerI = String.fromCharCode(112,114,111,106,101,99,116,105,111,110,95,110,95,54,53,0);
         mergerI = `${checkboxN.length}`;
         indexu = `${indexu.length}`;
         runtimeschedulerI += `${runtimeschedulerI.length}`;
          let typing7: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,101,114,95,114,95,53,0),true ], [String.fromCharCode(99,111,110,99,101,97,108,101,100,95,53,95,56,51,0),true ]]);
         checkboxN += `${mergerI.length | checkboxN.length}`;
         typing7.set(`${typing7.size}`, typing7.size << (Math.min(Math.abs(2), 5)));
         mergerI += `${parseInt(`${selectedJ}`)}`;
         selectedJ += parseFloat(`${parseInt(`${selectedJ}`)}`);
         selectedJ += (parseFloat(`${checkboxN == String.fromCharCode(103,0) ? checkboxN.length : filterg.size}`));
      largey = `${parseInt(`${indicatorL}`)}`;
    await refetch();

   while (!modele.includes(`${serviceh}`)) {
      modele = `${1 + parseInt(`${clearW}`)}`;
      break;
   }
      indicatorL /= Math.max(4, parseFloat(`${1 | parseInt(`${foundj}`)}`));
   while (!formM.includes(indicatorL)) {
       let currentQ = String.fromCharCode(112,114,111,112,101,114,95,53,95,50,51,0);
       let stringsY = 4.0;
      for (let m = 0; m < 2; m++) {
         currentQ = `${parseInt(`${stringsY}`)}`;
      }
          let notificationg: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,115,116,101,114,95,51,95,57,56,0),false ], [String.fromCharCode(100,95,56,56,95,108,105,98,112,111,115,116,112,114,111,99,0),true ]]);
          let hiads = 2;
         stringsY -= parseFloat(`${2}`);
         notificationg = new Map([[`${notificationg.size}`, notificationg.size]]);
         hiads <<= Math.min(2, Math.abs(3 ^ notificationg.size));
         currentQ = `${parseInt(`${stringsY}`)}`;
       let verticalc = false;
       let window_156 = true;
         currentQ = `${parseInt(`${stringsY}`) & 3}`;
      while (!window_156) {
         window_156 = window_156 || 79.53 > stringsY;
         break;
      }
      formM = [parseInt(`${mintegral8}`)];
      break;
   }
      serviceh = roomt.length < mbnativeadvancedw;
      description_ovt.push(librrcl.length / (Math.max(7, parseInt(`${mintegral8}`))));
   for (let s = 0; s < 3; s++) {
      modele = `${1 * parseInt(`${indicatorL}`)}`;
   }
   while (serviceh && !delegate_tom) {
      delegate_tom = 55 < roomt.length;
      break;
   }
   for (let a = 0; a < 3; a++) {
      modele += `${(roomt == String.fromCharCode(90,0) ? (delegate_tom ? 4 : 5) : roomt.length)}`;
   }
   while (4 == (parseInt(`${mintegral8}`) - 3) || (parseInt(`${mintegral8}`) - roomt.length) == 3) {
       let megaphone0 = String.fromCharCode(118,101,108,97,112,115,101,100,116,105,109,101,114,95,117,95,53,0);
       let core5 = 1;
       let nextb = 1;
       let dplusg = 0;
       let drage = String.fromCharCode(109,95,56,48,95,102,105,97,116,0);
      if (1 < (3 & dplusg)) {
         drage = `${core5}`;
      }
         nextb /= Math.max(1, megaphone0.length + 1);
         dplusg %= Math.max(2, 3 + drage.length);
         nextb += dplusg;
       let eacto = 4;
      for (let t = 0; t < 3; t++) {
         dplusg <<= Math.min(Math.abs(core5 - 1), 5);
      }
      if (5 > (4 << (Math.min(5, megaphone0.length)))) {
         nextb &= dplusg % 2;
      }
      let rewind_ = dplusg <= 7083398;
      do {
         dplusg /= Math.max(5, drage.length);
         if (rewind_) {
            break;
         }
      } while (rewind_ && (2 == core5));
          let round3 = String.fromCharCode(116,95,57,54,95,112,114,101,100,0);
          let servicei: Map<any, any> = new Map([[String.fromCharCode(120,95,52,54,95,99,111,108,111,114,102,117,108,0),117], [String.fromCharCode(118,99,100,97,116,97,95,51,95,54,57,0),427]]);
          let iconi: Array<any> = [602, 255, 618];
         drage = `${3 - nextb}`;
         round3 += `${servicei.size * round3.length}`;
         servicei.set(`${round3}`, round3.length % (Math.max(2, 7)));
         iconi = [1];
      for (let l = 0; l < 2; l++) {
          let componentK = true;
          let over7 = 4.0;
          let catalogl = 3.0;
          let unewinterstitial1 = 4;
          let mappingB = String.fromCharCode(111,95,51,55,95,105,110,115,101,114,116,101,114,0);
         drage = `${parseInt(`${catalogl}`) | dplusg}`;
         componentK = over7 == 21.37;
         over7 /= Math.max(parseFloat(`${parseInt(`${over7}`)}`), 1);
         catalogl /= Math.max(5, ((componentK ? 3 : 1) & parseInt(`${over7}`)));
         unewinterstitial1 >>= Math.min(1, Math.abs(parseInt(`${over7}`) % 2));
         mappingB = `${3 ^ parseInt(`${over7}`)}`;
      }
         eacto >>= Math.min(Math.abs((drage == String.fromCharCode(98,0) ? dplusg : drage.length)), 5);
       let policyF = String.fromCharCode(114,101,99,121,99,108,101,95,55,95,57,49,0);
       let container_ = String.fromCharCode(114,101,109,97,105,110,105,110,103,95,101,95,51,0);
          let bridge9 = String.fromCharCode(117,95,53,48,95,112,97,114,116,105,99,105,112,97,116,105,111,110,0);
          let libavdeviceJ = 4;
         nextb *= (String.fromCharCode(105,0) == bridge9 ? libavdeviceJ : bridge9.length);
      let interstitialv = policyF == String.fromCharCode(55,53,95,53,51,0);
      do {
          let nterstitialJ = String.fromCharCode(116,95,56,48,95,104,111,117,114,0);
         policyF += `${1 - megaphone0.length}`;
         nterstitialJ += `${nterstitialJ.length >> (Math.min(3, nterstitialJ.length))}`;
         if (interstitialv) {
            break;
         }
      } while (interstitialv && (policyF.length > container_.length));
      for (let z = 0; z < 1; z++) {
         dplusg %= Math.max(3, megaphone0.length);
      }
      roomt += `${dplusg}`;
      break;
   }
    setIsRefreshing(false);

   let backwardt = clearW >= 6377503.0;
   do {
      clearW /= Math.max(1, formM.length);
      if (backwardt) {
         break;
      }
   } while ((3 >= (librrcl.length + parseInt(`${clearW}`)) && 2.0 >= (librrcl.length + clearW)) && backwardt);
   if ((whistled % 1) == 1 || (whistled >> (Math.min(Math.abs(1), 4))) == 4) {
       let nativeexn = 5;
       let switch_8_ = false;
       let unimplementedviewX = String.fromCharCode(112,116,114,109,97,112,115,95,118,95,50,49,0);
       let themeJ: Array<any> = [987, 295];
       let with_63Q: Array<any> = [String.fromCharCode(97,118,115,115,95,112,95,49,48,48,0), String.fromCharCode(115,101,116,102,100,95,100,95,56,57,0)];
      let logoutZ = switch_8_ ? !switch_8_ : switch_8_;
      do {
          let animationC = true;
          let closef = String.fromCharCode(122,95,55,48,95,98,111,120,101,100,0);
          let lnewinterstitialL: Map<any, any> = new Map([[String.fromCharCode(111,95,57,56,95,97,115,116,114,111,110,111,109,105,99,97,108,0),String.fromCharCode(108,111,99,107,115,95,120,95,54,52,0)], [String.fromCharCode(112,101,114,105,111,100,105,99,97,108,108,121,95,49,95,54,51,0),String.fromCharCode(115,108,97,115,104,101,115,95,52,95,51,51,0)], [String.fromCharCode(105,95,56,52,95,100,111,109,97,105,110,115,0),String.fromCharCode(122,95,51,56,95,104,112,101,108,0)]]);
          let room5 = String.fromCharCode(112,95,54,51,95,109,101,109,106,114,110,108,0);
          let mapbufferQ: Map<any, any> = new Map([[String.fromCharCode(103,95,51,54,95,115,104,101,108,108,0),562], [String.fromCharCode(111,110,101,115,99,97,108,101,95,108,95,53,57,0),856], [String.fromCharCode(109,95,55,50,95,114,101,112,101,97,116,101,100,108,121,0),389]]);
         switch_8_ = !switch_8_ || themeJ.length == 75;
         animationC = lnewinterstitialL.size >= 33 && !animationC;
         closef = `${mapbufferQ.size}`;
         lnewinterstitialL.set(`${animationC}`, (closef.length & (animationC ? 3 : 2)));
         room5 = `${((animationC ? 3 : 2))}`;
         mapbufferQ = new Map([[`${lnewinterstitialL.size}`, lnewinterstitialL.size]]);
         if (logoutZ) {
            break;
         }
      } while (logoutZ && ((4 - with_63Q.length) >= 4));
         unimplementedviewX = "1";
         with_63Q.push((themeJ.length + (switch_8_ ? 3 : 3)));
          let cancelV = String.fromCharCode(99,97,110,99,101,108,108,95,100,95,52,54,0);
          let profilet = String.fromCharCode(112,97,116,116,101,114,110,95,118,95,53,55,0);
         themeJ.push(unimplementedviewX.length);
         cancelV = `${3 >> (Math.min(1, cancelV.length))}`;
         profilet += `${(String.fromCharCode(81,0) == profilet ? cancelV.length : profilet.length)}`;
         switch_8_ = nativeexn <= 84;
      if (!switch_8_) {
         with_63Q.push(with_63Q.length);
      }
       let common3 = true;
      let libturbomodulejsijniV = common3 ? !common3 : common3;
      do {
         common3 = unimplementedviewX.startsWith(`${switch_8_}`);
         if (libturbomodulejsijniV) {
            break;
         }
      } while (libturbomodulejsijniV && (common3));
         nativeexn -= 3 / (Math.max(1, unimplementedviewX.length));
         themeJ.push((String.fromCharCode(81,0) == unimplementedviewX ? unimplementedviewX.length : themeJ.length));
         themeJ = [with_63Q.length % 3];
      let serviceL = common3 ? !common3 : common3;
      do {
         common3 = 77 < unimplementedviewX.length;
         if (serviceL) {
            break;
         }
      } while ((unimplementedviewX.length == 2) && serviceL);
         nativeexn /= Math.max(with_63Q.length, 5);
         themeJ.push(2);
      if (3 > (themeJ.length ^ 1) && (themeJ.length ^ 1) > 2) {
          let friends1 = String.fromCharCode(106,95,55,53,95,115,101,116,116,105,109,101,111,117,116,0);
         nativeexn += 1;
         friends1 += `${(friends1 == String.fromCharCode(68,0) ? friends1.length : friends1.length)}`;
      }
      mintegral8 /= Math.max(parseFloat(`${nativeexn & 3}`), 2);
   }
   let membershipf = 8151905 <= description_ovt.length;
   do {
      description_ovt.push(formM.length);
      if (membershipf) {
         break;
      }
   } while ((delegate_tom) && membershipf);
      mbnativeadvancedw /= Math.max(1 | largey.length, 2);
   while ((1.72 / (Math.max(4, mbnativeadvancedw))) <= 2.3 && (indicatorL - 1.72) <= 3.41) {
      indicatorL += parseFloat(`${2 | parseInt(`${clearW}`)}`);
      break;
   }
   while ((librrcl.length - 3) < 4) {
      librrcl.push(parseInt(`${clearW}`));
      break;
   }
   let hover3 = description_ovt.length <= 6494215;
   do {
       let analyticsV = 3.0;
       let short_cJ = 4.0;
       let theme7 = 4.0;
         short_cJ += 2 / (Math.max(parseInt(`${theme7}`), 8));
          let flipperR = 0.0;
          let minimize_ = 1.0;
          let librrcb = true;
         short_cJ += parseInt(`${minimize_}`) >> (Math.min(4, Math.abs(3)));
         flipperR -= parseFloat(`${parseInt(`${flipperR}`) ^ 3}`);
         minimize_ -= 3 + parseInt(`${flipperR}`);
         librrcb = !librrcb;
          let redirectE = 1.0;
         analyticsV += parseInt(`${theme7}`);
         redirectE -= 3;
      let pangleE = short_cJ <= 9570719.0;
      do {
         short_cJ -= parseInt(`${short_cJ}`) + 1;
         if (pangleE) {
            break;
         }
      } while ((1.58 <= (short_cJ - analyticsV)) && pangleE);
      let rooma = short_cJ >= 5102328.0;
      do {
          let otherB = String.fromCharCode(101,95,56,52,95,108,97,112,108,97,99,101,0);
          let member5 = 0.0;
         short_cJ += otherB.length / 2;
         otherB = "3";
         member5 -= parseFloat(`${parseInt(`${member5}`) >> (Math.min(2, Math.abs(parseInt(`${member5}`))))}`);
         if (rooma) {
            break;
         }
      } while (rooma && (5.0 == (theme7 + 3.37) && (3.37 + theme7) == 5.92));
         theme7 -= parseInt(`${theme7}`) | parseInt(`${short_cJ}`);
         analyticsV += parseInt(`${theme7}`) * parseInt(`${analyticsV}`);
          let editk: Array<any> = [769, 568];
          let libavformatG = String.fromCharCode(101,95,53,50,95,109,97,116,99,104,101,115,0);
          let volumeM = String.fromCharCode(114,101,103,105,111,110,95,120,95,55,52,0);
         theme7 /= Math.max(2, 2);
         editk = [3 + volumeM.length];
         libavformatG = `${volumeM.length}`;
      while (theme7 >= short_cJ) {
         theme7 /= Math.max(parseInt(`${short_cJ}`), 5);
         break;
      }
      description_ovt.push((roomt == String.fromCharCode(79,0) ? roomt.length : librrcl.length));
      if (hover3) {
         break;
      }
   } while (hover3 && ((description_ovt.length ^ whistled) >= 4 && 2 >= (4 ^ whistled)));
       let sportsy = String.fromCharCode(98,97,114,99,111,100,101,95,48,95,56,54,0);
       let team9 = 4.0;
       let tumbnail3 = String.fromCharCode(116,95,57,51,95,101,97,99,104,0);
         team9 *= 3 << (Math.min(3, Math.abs(parseInt(`${team9}`))));
      for (let w = 0; w < 2; w++) {
         sportsy += `${2 ^ parseInt(`${team9}`)}`;
      }
         team9 -= 2;
          let logoutF = 1.0;
          let benefit7 = String.fromCharCode(114,101,109,105,110,100,101,114,115,95,54,95,49,51,0);
          let gpayN = String.fromCharCode(121,95,51,56,95,97,109,101,120,0);
         team9 *= gpayN.length / 1;
         logoutF *= parseFloat(`${2 | parseInt(`${logoutF}`)}`);
         benefit7 = "3";
         gpayN = `${(String.fromCharCode(57,0) == benefit7 ? parseInt(`${logoutF}`) : benefit7.length)}`;
      for (let k = 0; k < 2; k++) {
         sportsy += "2";
      }
      let textinputL = sportsy == String.fromCharCode(121,52,53,0);
      do {
         sportsy = `${parseInt(`${team9}`)}`;
         if (textinputL) {
            break;
         }
      } while ((parseInt(`${team9}`) > sportsy.length) && textinputL);
         sportsy = `${sportsy.length}`;
         tumbnail3 = `${parseInt(`${team9}`) / (Math.max(tumbnail3.length, 1))}`;
      if (3.72 == (team9 + 4.26) || (5 >> (Math.min(2, sportsy.length))) == 1) {
         sportsy += `${parseInt(`${team9}`)}`;
      }
      foundj /= Math.max(parseFloat(`${2}`), 2);
       let zhengpianz = 4;
       let eactr = false;
       let animationsi: Array<any> = [String.fromCharCode(103,95,57,49,95,100,118,97,117,100,105,111,0), String.fromCharCode(115,95,49,54,95,109,112,99,100,97,116,97,0)];
      while (5 <= zhengpianz) {
          let middlew = String.fromCharCode(120,120,99,104,95,48,95,50,50,0);
         zhengpianz ^= middlew.length << (Math.min(4, animationsi.length));
         break;
      }
         eactr = animationsi.length <= 66 && eactr;
      let libglog2 = 7765015 >= animationsi.length;
      do {
         animationsi = [animationsi.length];
         if (libglog2) {
            break;
         }
      } while (libglog2 && (eactr));
      if ((zhengpianz + 4) > 4 || 4 > zhengpianz) {
          let uimanagerI = 3.0;
          let gestureL = 0.0;
          let short_el = String.fromCharCode(101,110,116,114,121,112,111,105,110,116,95,114,95,55,51,0);
          let applicationo = 0;
         zhengpianz *= parseInt(`${gestureL}`);
         uimanagerI -= applicationo;
         short_el = `${(String.fromCharCode(73,0) == short_el ? parseInt(`${uimanagerI}`) : short_el.length)}`;
         applicationo ^= 3 | parseInt(`${uimanagerI}`);
      }
       let libhermesu = 0.0;
       let injuryT = 2.0;
          let description_lxP = 5.0;
          let thumbnailP = String.fromCharCode(118,105,101,119,101,100,95,54,95,49,57,0);
          let photoB = String.fromCharCode(98,105,100,105,114,95,57,95,50,52,0);
         injuryT -= 3 - animationsi.length;
         description_lxP *= parseInt(`${description_lxP}`);
         thumbnailP = `${parseInt(`${description_lxP}`)}`;
         photoB += `${parseInt(`${description_lxP}`)}`;
      let gemfileQ = 9522507.0 >= injuryT;
      do {
         injuryT *= animationsi.length >> (Math.min(1, Math.abs(zhengpianz)));
         if (gemfileQ) {
            break;
         }
      } while (gemfileQ && (!eactr));
         zhengpianz += 2;
      if ((libhermesu / 5.90) == 5.10) {
         eactr = libhermesu >= 43.60;
      }
      foundj += parseFloat(`${2 + whistled}`);
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
  } = useMinivodQuery(fetchMode, isVip)

  const checkConnection = useCallback(async () => {
       let floatingz = String.fromCharCode(109,97,103,105,99,121,117,118,95,111,95,55,0);
    let libtanA = 2.0;
    let teamb = String.fromCharCode(116,95,51,55,95,118,99,111,109,98,105,110,101,0);
    let usernameb = 4.0;
    let x_titleh = 5.0;
    let sentryH = String.fromCharCode(109,95,49,52,0);
    let foundG = 1.0;
    let libflipperF: Map<any, any> = new Map([[String.fromCharCode(107,95,51,56,95,101,120,101,99,117,116,101,0),String.fromCharCode(105,95,54,55,95,112,114,111,99,101,100,117,114,101,115,0)], [String.fromCharCode(99,97,116,95,105,95,57,54,0),String.fromCharCode(97,108,108,111,99,97,116,111,114,95,53,95,52,57,0)]]);
    let tickC: Array<any> = [525, 628, 572];
    let hovert = String.fromCharCode(108,97,115,116,95,105,95,55,49,0);
    let debug4 = String.fromCharCode(101,110,116,114,121,112,111,105,110,116,95,113,95,55,57,0);
    let vnewsG: Map<any, any> = new Map([[String.fromCharCode(108,95,56,56,95,98,108,111,98,115,105,122,101,0),718], [String.fromCharCode(102,108,117,115,104,95,116,95,51,50,0),442]]);
    let fadfdeebbbfdabbbabdadfaaddaa8 = 3;
    let runtimeu = String.fromCharCode(116,97,103,95,108,95,50,57,0);
   let sharex = tickC.length >= 8395915;
   do {
      tickC = [sentryH.length];
      if (sharex) {
         break;
      }
   } while (sharex && ((libtanA + 4.16) < 3.18));
      floatingz = `${parseInt(`${libtanA}`) & 2}`;
   for (let n = 0; n < 1; n++) {
      debug4 = `${parseInt(`${libtanA}`) - floatingz.length}`;
   }
   let r_imageY = floatingz.length <= 9392212;
   do {
      floatingz += `${floatingz.length + 3}`;
      if (r_imageY) {
         break;
      }
   } while ((5 >= floatingz.length) && r_imageY);
   while ((debug4.length + 2) == 3 || 3.57 == (usernameb / 4.94)) {
      usernameb /= Math.max(sentryH.length ^ hovert.length, 4);
      break;
   }
   for (let i = 0; i < 1; i++) {
      hovert += `${1 / (Math.max(parseInt(`${usernameb}`), 10))}`;
   }
   while ((2 / (Math.max(7, parseInt(`${x_titleh}`)))) >= 4 || (x_titleh / 2.89) >= 4.85) {
      debug4 += "2";
      break;
   }
   while ((sentryH.length % (Math.max(5, 7))) == 5) {
       let castX = 2.0;
       let fieldv: Map<any, any> = new Map([[String.fromCharCode(118,97,97,112,105,95,54,95,55,52,0),616], [String.fromCharCode(110,95,57,49,95,100,110,115,0),368], [String.fromCharCode(109,97,100,101,98,121,95,116,95,56,54,0),179]]);
         castX -= 3 / (Math.max(3, fieldv.size));
         castX -= 2 >> (Math.min(4, Math.abs(fieldv.size)));
         fieldv = new Map([[`${fieldv.size}`, fieldv.size]]);
      if (fieldv.size < 5) {
          let kuaishouu = String.fromCharCode(99,95,55,57,95,104,109,109,116,0);
          let filledB = String.fromCharCode(112,95,57,51,95,115,105,122,101,108,101,115,115,0);
          let belln = String.fromCharCode(110,95,50,53,95,119,104,105,116,101,115,112,97,99,101,115,0);
          let logoq = String.fromCharCode(110,117,108,108,115,95,121,95,55,56,0);
         castX *= fieldv.size - 1;
         kuaishouu = `${filledB.length}`;
         filledB += `${kuaishouu.length % (Math.max(3, 4))}`;
         belln += `${(logoq == String.fromCharCode(101,0) ? logoq.length : belln.length)}`;
      }
         castX *= 1 | fieldv.size;
      if ((5.86 + castX) < 2.38 && (fieldv.size + 2) < 3) {
         fieldv = new Map([[`${fieldv.size}`, parseInt(`${castX}`) % 3]]);
      }
      usernameb /= Math.max(3 - parseInt(`${castX}`), 4);
      break;
   }

    const state = await NetInfo.fetch();

       let libreactF = 0.0;
       let dropdown6 = String.fromCharCode(120,95,56,56,95,119,104,105,116,101,108,105,115,116,0);
       let gradlewT = 5.0;
         gradlewT += parseFloat(`${parseInt(`${libreactF}`) * parseInt(`${gradlewT}`)}`);
         dropdown6 += "3";
          let basketballv = true;
          let bootsplashR: Array<any> = [835, 279, 942];
          let clearg = String.fromCharCode(107,101,121,119,111,114,100,95,121,95,55,56,0);
         gradlewT *= parseFloat(`${dropdown6.length}`);
         basketballv = ((clearg.length - (basketballv ? 13 : clearg.length)) > 13);
         bootsplashR.push(1);
          let singaporeu = false;
          let hookk = String.fromCharCode(108,95,52,50,95,118,105,100,101,111,115,0);
          let filedt = 1.0;
         dropdown6 += `${parseInt(`${gradlewT}`) & parseInt(`${libreactF}`)}`;
         singaporeu = singaporeu || 21.28 == filedt;
         hookk += `${hookk.length | 1}`;
         filedt *= parseFloat(`${2 % (Math.max(parseInt(`${filedt}`), 8))}`);
       let large9 = 1.0;
       let zoomx = 4.0;
          let unread4: Map<any, any> = new Map([[String.fromCharCode(99,104,101,118,114,111,110,95,50,95,56,56,0),525], [String.fromCharCode(117,110,115,101,108,101,99,116,95,56,95,50,51,0),698], [String.fromCharCode(116,95,52,49,95,104,97,100,97,109,97,114,100,120,0),786]]);
          let appleA = String.fromCharCode(117,110,102,97,105,114,95,52,95,55,48,0);
         gradlewT *= parseFloat(`${2}`);
         unread4 = new Map([[`${unread4.size}`, appleA.length]]);
         appleA += `${appleA.length - 2}`;
       let emptyf = String.fromCharCode(116,97,114,103,101,116,101,100,95,98,95,52,52,0);
       let animationsF = String.fromCharCode(106,95,49,48,48,95,112,101,114,109,97,110,101,110,116,0);
       let spinnerw = false;
      while ((large9 + libreactF) == 3.52) {
          let orangeg = String.fromCharCode(115,118,103,95,53,95,53,55,0);
         libreactF -= parseFloat(`${parseInt(`${gradlewT}`) * 1}`);
         orangeg = `${(String.fromCharCode(56,0) == orangeg ? orangeg.length : orangeg.length)}`;
         break;
      }
      libflipperF = new Map([[`${gradlewT}`, parseInt(`${gradlewT}`)]]);
       let telegramT = String.fromCharCode(102,95,49,48,48,95,108,117,109,97,107,101,121,0);
       let miniI = 4.0;
       let videox = String.fromCharCode(105,95,51,56,95,114,101,97,100,108,110,0);
       let activityc = 0.0;
      for (let y = 0; y < 1; y++) {
         telegramT = `${videox.length}`;
      }
       let libjsijniprofilers = 3.0;
       let overS = 2.0;
      if (3.37 <= overS) {
          let profilej: Array<any> = [136, 252, 911];
          let coreP: Array<any> = [851, 283];
          let vignettey = 1;
         overS /= Math.max(3 - parseInt(`${overS}`), 2);
         profilej = [coreP.length];
         coreP = [profilej.length - 3];
         vignettey *= 3 + vignettey;
      }
      let injuryk = 5636614.0 >= libjsijniprofilers;
      do {
         libjsijniprofilers -= parseInt(`${libjsijniprofilers}`) ^ parseInt(`${miniI}`);
         if (injuryk) {
            break;
         }
      } while ((1.94 <= (overS * 3)) && injuryk);
      for (let j = 0; j < 3; j++) {
          let annerY = String.fromCharCode(103,95,51,56,95,114,111,117,110,100,110,101,115,115,0);
          let form_ = String.fromCharCode(106,95,50,50,95,115,99,97,108,97,114,115,0);
          let colorss: Map<any, any> = new Map([[String.fromCharCode(114,95,52,55,95,109,111,100,117,108,101,115,0),519], [String.fromCharCode(98,111,111,115,116,95,116,95,50,54,0),2], [String.fromCharCode(120,95,57,57,95,115,97,109,112,108,101,0),467]]);
          let libavformatl = String.fromCharCode(100,105,118,95,114,95,55,52,0);
         libjsijniprofilers -= (annerY == String.fromCharCode(56,0) ? annerY.length : parseInt(`${overS}`));
         form_ = `${libavformatl.length - 3}`;
         colorss = new Map([[`${colorss.size}`, form_.length]]);
         libavformatl = `${form_.length >> (Math.min(3, Math.abs(colorss.size)))}`;
      }
      for (let k = 0; k < 3; k++) {
         activityc *= parseFloat(`${1}`);
      }
      if (2.82 > (libjsijniprofilers + miniI)) {
         libjsijniprofilers *= 2;
      }
      if ((1 ^ videox.length) <= 2 || 5.65 <= (libjsijniprofilers + 4.13)) {
         videox = "2";
      }
      tickC.push(3 / (Math.max(3, videox.length)));
   while (floatingz.includes(`${usernameb}`)) {
      floatingz += `${libflipperF.size}`;
      break;
   }
      sentryH += `${1 ^ floatingz.length}`;
   for (let u = 0; u < 1; u++) {
       let viewsr = String.fromCharCode(113,95,57,55,95,99,97,116,99,104,97,98,108,101,0);
       let twitterH = String.fromCharCode(112,95,56,56,95,120,112,111,115,117,114,101,0);
       let bellt = false;
       let benefitY: Array<any> = [String.fromCharCode(110,95,49,49,95,114,101,97,110,97,108,121,122,101,0), String.fromCharCode(100,99,98,108,111,99,107,95,119,95,51,0)];
      if ((2 - viewsr.length) <= 5) {
          let logoqV = 4.0;
          let acceptedc: Array<any> = [String.fromCharCode(116,114,97,99,107,101,100,95,57,95,55,52,0), String.fromCharCode(100,95,55,57,95,109,117,108,116,105,112,108,101,120,0)];
         viewsr = "3";
         logoqV -= parseFloat(`${acceptedc.length * parseInt(`${logoqV}`)}`);
         acceptedc = [parseInt(`${logoqV}`)];
      }
          let i_managerL = 5.0;
          let filledJ = String.fromCharCode(101,105,103,104,116,115,118,120,95,112,95,55,48,0);
          let layoutA = String.fromCharCode(113,95,54,55,0);
         benefitY.push(((bellt ? 2 : 4)));
         i_managerL += parseFloat(`${3}`);
         filledJ += `${layoutA.length}`;
         layoutA += `${layoutA.length}`;
      for (let a = 0; a < 1; a++) {
         viewsr += `${viewsr.length & benefitY.length}`;
      }
          let baiduE = true;
          let nativeex0 = String.fromCharCode(117,95,56,51,95,102,97,99,116,111,114,0);
         twitterH = "3";
         baiduE = nativeex0.length == nativeex0.length;
      while ((twitterH.length / (Math.max(1, 3))) > 4) {
          let pagen = 1;
          let s_centerL = String.fromCharCode(97,99,99,114,117,101,95,57,95,53,48,0);
         benefitY = [1 >> (Math.min(5, viewsr.length))];
         pagen &= 2 - pagen;
         s_centerL = `${s_centerL.length}`;
         break;
      }
       let bottomN = String.fromCharCode(121,95,49,51,95,102,97,99,101,0);
       let libsgcoreM = String.fromCharCode(114,101,108,97,121,115,95,50,95,53,54,0);
      while (2 < libsgcoreM.length) {
         bellt = viewsr.length <= benefitY.length;
         break;
      }
         bottomN += `${twitterH.length % 2}`;
         viewsr += `${(1 ^ (bellt ? 5 : 2))}`;
         twitterH += `${viewsr.length}`;
      if (twitterH.length < 1) {
         twitterH = `${1 % (Math.max(10, benefitY.length))}`;
      }
          let usernamec = 1.0;
          let ballw: Array<any> = [74, 205];
          let showv = 4.0;
         benefitY.push(1);
         usernamec += parseFloat(`${parseInt(`${usernamec}`) | ballw.length}`);
         ballw.push(2 & parseInt(`${usernamec}`));
         showv += ballw.length >> (Math.min(Math.abs(1), 4));
      foundG /= Math.max(parseFloat(`${tickC.length & 2}`), 3);
   }
      teamb = "3";
   for (let o = 0; o < 2; o++) {
       let leftu: Array<any> = [667, 101, 303];
      if ((3 * leftu.length) <= 1 && (leftu.length * 3) <= 1) {
         leftu = [leftu.length << (Math.min(1, leftu.length))];
      }
         leftu = [2];
         leftu.push(1 & leftu.length);
      debug4 = `${hovert.length * 1}`;
   }
   for (let f = 0; f < 2; f++) {
       let tickedl: Array<any> = [488, 68, 603];
       let flipper3 = false;
       let floaterD = 3;
      if ((floaterD / (Math.max(2, 10))) == 3 || 2 == floaterD) {
         floaterD *= 3 - tickedl.length;
      }
          let stationsh = String.fromCharCode(117,95,52,50,95,100,105,118,112,111,119,109,0);
          let componenth = String.fromCharCode(108,95,56,48,95,114,103,98,97,0);
          let google8: Array<any> = [908, 412];
         tickedl = [floaterD << (Math.min(2, Math.abs(3)))];
         stationsh = `${componenth.length}`;
         componenth = `${componenth.length}`;
         google8 = [1 - componenth.length];
         flipper3 = (tickedl.length << (Math.min(4, Math.abs(floaterD)))) > 2;
         floaterD ^= floaterD - 2;
         flipper3 = floaterD == tickedl.length;
      for (let m = 0; m < 2; m++) {
          let zoomQ = String.fromCharCode(98,97,110,110,101,114,95,97,95,54,0);
          let downloadingx = String.fromCharCode(111,117,116,113,95,105,95,56,48,0);
          let resultd = 2.0;
          let eventa: Map<any, any> = new Map([[String.fromCharCode(115,109,105,108,101,95,104,95,54,56,0),820], [String.fromCharCode(110,95,49,53,95,99,118,99,0),158], [String.fromCharCode(112,108,97,121,101,114,95,106,95,49,56,0),937]]);
          let klevinl = String.fromCharCode(109,102,114,97,95,97,95,49,50,0);
         flipper3 = zoomQ.length < tickedl.length;
         zoomQ += `${eventa.size | 2}`;
         downloadingx = `${eventa.size % (Math.max(6, parseInt(`${resultd}`)))}`;
         resultd *= eventa.size / 1;
         klevinl = `${downloadingx.length}`;
      }
      for (let q = 0; q < 1; q++) {
          let otherQ = String.fromCharCode(114,95,55,57,95,116,105,109,101,108,105,110,101,115,0);
          let detailB = 5.0;
          let goalz = String.fromCharCode(97,95,50,53,95,118,99,116,101,115,116,0);
          let libfbU = 2;
         flipper3 = tickedl.length <= 57 || otherQ.length <= 57;
         otherQ = `${3 << (Math.min(2, goalz.length))}`;
         detailB *= 1 | libfbU;
         goalz = `${libfbU | 1}`;
      }
         tickedl.push(1);
      if (flipper3) {
         floaterD *= (floaterD >> (Math.min(1, Math.abs((flipper3 ? 5 : 1)))));
      }
      floatingz += `${teamb.length | 1}`;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

      x_titleh /= Math.max(1, (parseFloat(`${String.fromCharCode(86,0) == sentryH ? sentryH.length : libflipperF.size}`)));
       let nativeexk = String.fromCharCode(104,95,53,50,95,116,112,101,108,0);
       let smallD = String.fromCharCode(100,101,99,105,109,97,108,95,56,95,50,50,0);
          let guideo = String.fromCharCode(110,97,114,114,111,119,95,111,95,51,54,0);
         smallD += `${nativeexk.length}`;
         guideo = `${3 % (Math.max(5, guideo.length))}`;
         nativeexk = "3";
       let unimplementedvieww = false;
      let dataL = unimplementedvieww ? !unimplementedvieww : unimplementedvieww;
      do {
         unimplementedvieww = (((!unimplementedvieww ? 27 : smallD.length) >> (Math.min(smallD.length, 1))) <= 27);
         if (dataL) {
            break;
         }
      } while ((!unimplementedvieww) && dataL);
         unimplementedvieww = !unimplementedvieww;
         nativeexk += "3";
      usernameb += 2;
   while (tickC.length == 1) {
      tickC = [floatingz.length];
      break;
   }
      x_titleh *= parseFloat(`${1 >> (Math.min(3, floatingz.length))}`);
   let nativey = libtanA >= 8688326.0;
   do {
      libtanA /= Math.max(parseInt(`${x_titleh}`), 2);
      if (nativey) {
         break;
      }
   } while (nativey && (teamb.length <= 4));
   while (1 <= (3 << (Math.min(4, Math.abs(libflipperF.size)))) && 1 <= (libflipperF.size % (Math.max(3, 7)))) {
      usernameb += parseInt(`${libtanA}`) % 2;
      break;
   }
       let goalb: Map<any, any> = new Map([[String.fromCharCode(110,95,49,52,95,119,104,101,114,101,0),347], [String.fromCharCode(112,111,112,112,101,100,95,108,95,51,49,0),117]]);
      if ((goalb.size - 5) > 2 && (5 - goalb.size) > 4) {
         goalb.set(`${goalb.size}`, 2 >> (Math.min(4, Math.abs(goalb.size))));
      }
      for (let j = 0; j < 1; j++) {
          let editc = String.fromCharCode(104,95,53,95,112,114,111,112,0);
          let mnewsi = String.fromCharCode(115,108,97,110,116,95,117,95,49,53,0);
          let lessX: Array<any> = [863, 368];
          let bootsplashk: Map<any, any> = new Map([[String.fromCharCode(117,110,105,99,111,100,101,95,50,95,55,53,0),993], [String.fromCharCode(97,115,115,101,109,98,108,121,95,104,95,55,54,0),6], [String.fromCharCode(115,110,111,119,95,105,95,56,53,0),148]]);
          let sinao = String.fromCharCode(103,95,56,56,95,112,114,101,112,101,110,100,0);
         goalb.set(`${lessX.length}`, 1 * bootsplashk.size);
         editc += `${mnewsi.length << (Math.min(editc.length, 2))}`;
         mnewsi = `${mnewsi.length}`;
         lessX.push(editc.length % (Math.max(mnewsi.length, 2)));
         bootsplashk.set(mnewsi, 1 & mnewsi.length);
         sinao = `${(sinao == String.fromCharCode(117,0) ? mnewsi.length : sinao.length)}`;
      }
          let mbjscommon3 = String.fromCharCode(103,95,52,48,95,110,118,99,0);
          let teamX = 0.0;
          let pingA = 2.0;
         goalb.set(mbjscommon3, mbjscommon3.length % 2);
         teamX += parseInt(`${pingA}`);
      floatingz = "1";
      usernameb *= floatingz.length / (Math.max(3, debug4.length));
    setIsOffline(offline);

       let kickG: Map<any, any> = new Map([[String.fromCharCode(106,99,109,97,115,116,101,114,95,122,95,52,53,0),false ], [String.fromCharCode(117,95,51,48,95,97,103,103,114,101,103,97,116,101,0),false ]]);
      for (let g = 0; g < 2; g++) {
          let sigmobX = 1.0;
          let overlayS = 3;
          let penalty2 = String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,115,95,118,95,57,52,0);
         kickG = new Map([[penalty2, 1]]);
         sigmobX += parseFloat(`${overlayS % (Math.max(2, parseInt(`${sigmobX}`)))}`);
         overlayS ^= 2 * overlayS;
         penalty2 = `${overlayS ^ parseInt(`${sigmobX}`)}`;
      }
          let profileS = String.fromCharCode(115,101,110,100,109,98,117,102,95,110,95,57,48,0);
          let hiadr: Map<any, any> = new Map([[String.fromCharCode(100,101,97,99,116,105,118,97,116,101,95,114,95,52,55,0),834], [String.fromCharCode(114,95,54,50,95,109,97,105,108,99,104,105,109,112,0),144]]);
          let rewindL = 1;
         kickG.set(`${rewindL}`, 2);
         profileS = `${hiadr.size * 3}`;
         hiadr = new Map([[`${hiadr.size}`, 1 << (Math.min(3, profileS.length))]]);
         rewindL &= profileS.length;
      let matcheso = 8418573 >= kickG.size;
      do {
         kickG = new Map([[`${kickG.size}`, kickG.size ^ kickG.size]]);
         if (matcheso) {
            break;
         }
      } while ((!Array.from(kickG.keys()).includes(`${kickG.size}`)) && matcheso);
      debug4 += `${tickC.length}`;
   while (4 <= (3 + floatingz.length) || 3.60 <= (usernameb - floatingz.length)) {
      floatingz = `${sentryH.length | 2}`;
      break;
   }
      sentryH = `${hovert.length}`;
   while (3.41 >= x_titleh) {
       let libglogw = String.fromCharCode(113,95,52,49,95,114,101,102,111,99,117,115,0);
       let pauseq = 3;
       let settingl: Array<any> = [888, 980];
       let adultC = 2.0;
      while (2.85 <= (adultC - 2.35) && 5.49 <= (adultC - 2.35)) {
          let long_oS = 4;
          let event5 = String.fromCharCode(111,98,106,101,99,116,95,49,95,55,56,0);
          let gradlewq = 0.0;
          let annerU = false;
         settingl.push(pauseq);
         long_oS += parseInt(`${gradlewq}`) * 2;
         event5 += "1";
         gradlewq /= Math.max(((annerU ? 2 : 1) % (Math.max(parseInt(`${gradlewq}`), 2))), 4);
         annerU = !event5.endsWith(`${gradlewq}`);
         break;
      }
          let graphd = String.fromCharCode(116,104,117,109,98,110,97,105,108,95,115,95,56,55,0);
          let configureu = false;
         adultC /= Math.max(4, parseFloat(`${1 | pauseq}`));
         graphd += `${graphd.length | 2}`;
         configureu = graphd.startsWith(`${configureu}`);
          let catagoryR = 5;
          let penaltyx = String.fromCharCode(100,116,100,102,95,101,95,54,53,0);
          let splashu = 0.0;
         libglogw = "2";
         catagoryR >>= Math.min(penaltyx.length, 5);
         penaltyx += `${penaltyx.length - parseInt(`${splashu}`)}`;
         splashu /= Math.max(penaltyx.length * 3, 2);
         settingl.push(settingl.length);
          let becomeI = false;
          let downN = true;
         settingl = [((downN ? 3 : 5) / 1)];
         becomeI = !becomeI;
         downN = !becomeI && becomeI;
      if (settingl.includes(adultC)) {
         settingl = [1];
      }
      while ((pauseq << (Math.min(libglogw.length, 5))) == 4) {
          let bridge4: Map<any, any> = new Map([[String.fromCharCode(117,98,108,105,99,95,113,95,54,49,0),337], [String.fromCharCode(117,95,53,53,95,103,101,116,116,105,109,101,111,102,100,97,121,0),83], [String.fromCharCode(110,111,97,115,109,95,115,95,55,54,0),185]]);
         pauseq >>= Math.min(4, Math.abs(2 | settingl.length));
         bridge4 = new Map([[`${bridge4.size}`, bridge4.size - 2]]);
         break;
      }
          let unselectede = 4.0;
          let regengZ: Array<any> = [138, 602, 405];
          let downloaded8 = String.fromCharCode(97,114,97,98,105,99,95,98,95,53,54,0);
         pauseq %= Math.max(settingl.length - 2, 1);
         unselectede += 2;
         regengZ = [parseInt(`${unselectede}`) ^ regengZ.length];
         downloaded8 += `${regengZ.length}`;
      for (let q = 0; q < 2; q++) {
         settingl.push(libglogw.length);
      }
         adultC *= parseFloat(`${libglogw.length - 2}`);
          let logina: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,102,111,114,109,95,100,95,52,54,0),787], [String.fromCharCode(105,118,102,101,110,99,95,101,95,57,53,0),856]]);
         adultC -= parseFloat(`${settingl.length * pauseq}`);
         logina = new Map([[`${logina.size}`, logina.size / (Math.max(logina.size, 6))]]);
      for (let z = 0; z < 1; z++) {
         pauseq ^= 3;
      }
      teamb = `${3 + hovert.length}`;
      break;
   }
   for (let b = 0; b < 2; b++) {
      teamb += `${parseInt(`${x_titleh}`)}`;
   }
       let i_centerm: Map<any, any> = new Map([[String.fromCharCode(107,95,53,49,95,108,111,99,97,108,105,122,97,98,108,101,0),523], [String.fromCharCode(118,95,56,49,95,116,114,97,99,101,114,0),387], [String.fromCharCode(109,95,52,49,95,116,114,97,110,115,108,97,116,101,0),436]]);
       let agreementW = String.fromCharCode(115,95,52,52,0);
       let confirmationy = 0;
      while ((agreementW.length - 3) <= 2 && 5 <= (agreementW.length - 3)) {
         agreementW += `${i_centerm.size << (Math.min(agreementW.length, 5))}`;
         break;
      }
      let moon4 = confirmationy >= 9047650;
      do {
         confirmationy += (agreementW == String.fromCharCode(106,0) ? i_centerm.size : agreementW.length);
         if (moon4) {
            break;
         }
      } while (((confirmationy << (Math.min(Math.abs(i_centerm.size), 2))) <= 1 || 2 <= (i_centerm.size << (Math.min(Math.abs(1), 5)))) && moon4);
         agreementW = "2";
      if (2 >= (confirmationy % (Math.max(i_centerm.size, 7))) || 2 >= (i_centerm.size % (Math.max(3, confirmationy)))) {
          let networkz: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,97,121,101,100,95,99,95,50,0),false ], [String.fromCharCode(122,95,54,56,95,102,117,122,122,101,114,0),false ], [String.fromCharCode(99,104,97,110,103,101,114,95,101,95,49,53,0),false ]]);
          let unselectedQ = String.fromCharCode(108,95,53,55,95,99,97,108,105,98,114,97,116,101,100,0);
          let descV = String.fromCharCode(113,95,55,57,95,110,101,116,119,111,114,107,0);
          let animationsi: Array<any> = [544, 296];
          let routerH = String.fromCharCode(110,101,101,100,101,100,95,104,95,56,55,0);
         confirmationy += 2;
         networkz = new Map([[`${networkz.size}`, networkz.size]]);
         unselectedQ = `${unselectedQ.length + descV.length}`;
         descV = `${descV.length}`;
         animationsi = [animationsi.length & 3];
         routerH = `${networkz.size}`;
      }
       let traminiM = 1.0;
       let android5 = 4.0;
          let private_69 = true;
          let confirmation5: Array<any> = [406, 117, 322];
          let default_6q: Array<any> = [230, 753, 334];
         traminiM -= parseFloat(`${parseInt(`${traminiM}`)}`);
         private_69 = default_6q.includes(private_69);
         confirmation5 = [2];
         default_6q.push(confirmation5.length);
      let telegrama = 5152541.0 >= android5;
      do {
          let kickb: Array<any> = [463, 359];
         android5 -= parseFloat(`${2}`);
         kickb.push(2 >> (Math.min(3, kickb.length)));
         if (telegrama) {
            break;
         }
      } while (((5 / (Math.max(5, agreementW.length))) > 2 && 5 > (agreementW.length * parseInt(`${android5}`))) && telegrama);
          let moreL = String.fromCharCode(105,95,54,54,95,109,111,100,97,108,0);
          let configP = String.fromCharCode(109,117,108,116,120,109,117,108,116,95,50,95,56,54,0);
         android5 -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${traminiM}`)), 1))}`);
         moreL += "1";
         configP = `${configP.length}`;
      while ((agreementW.length | 1) == 5) {
         agreementW = "2";
         break;
      }
      foundG -= parseFloat(`${2}`);
      usernameb += floatingz.length;
      tickC.push(3);
    if (!offline) {

   if ((parseInt(`${foundG}`) + hovert.length) < 1 && (1 + hovert.length) < 4) {
       let becomeJ = false;
       let bdxadsdka: Map<any, any> = new Map([[String.fromCharCode(110,111,110,99,101,95,51,95,56,53,0),String.fromCharCode(118,95,53,56,95,114,97,109,112,117,112,0)], [String.fromCharCode(101,110,117,109,101,114,97,116,105,110,103,95,122,95,56,53,0),String.fromCharCode(102,97,105,108,115,95,114,95,51,53,0)], [String.fromCharCode(110,95,56,52,95,97,110,110,117,108,97,114,0),String.fromCharCode(97,95,57,57,95,109,112,111,110,0)]]);
      for (let u = 0; u < 3; u++) {
         bdxadsdka.set(`${becomeJ}`, 1);
      }
       let circleS = String.fromCharCode(114,111,117,116,105,110,115,95,102,95,49,48,48,0);
          let gesturec = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,115,95,117,95,57,55,0);
          let qaag2 = String.fromCharCode(108,95,56,95,101,120,112,111,0);
          let shootd = 4.0;
         circleS = `${((becomeJ ? 3 : 1))}`;
         gesturec = `${parseInt(`${shootd}`) >> (Math.min(gesturec.length, 4))}`;
         qaag2 = `${qaag2.length}`;
         shootd /= Math.max(4, parseInt(`${shootd}`));
      let sortE = bdxadsdka.size >= 9489889;
      do {
         bdxadsdka = new Map([[`${bdxadsdka.size}`, bdxadsdka.size]]);
         if (sortE) {
            break;
         }
      } while (sortE && (bdxadsdka.size == 5));
         bdxadsdka = new Map([[`${becomeJ}`, ((becomeJ ? 4 : 4))]]);
         becomeJ = bdxadsdka.size < 69;
      hovert = `${1 % (Math.max(4, parseInt(`${usernameb}`)))}`;
   }
      teamb = `${(debug4 == String.fromCharCode(88,0) ? vnewsG.size : debug4.length)}`;
   if ((libtanA / 3.38) >= 1.30 || 3 >= (floatingz.length >> (Math.min(Math.abs(1), 3)))) {
      libtanA -= sentryH.length;
   }
      fadfdeebbbfdabbbabdadfaaddaa8 |= sentryH.length;
   if (teamb == String.fromCharCode(98,0) && sentryH != String.fromCharCode(83,0)) {
      sentryH += `${parseInt(`${x_titleh}`)}`;
   }
   if (sentryH.length < hovert.length) {
       let libreactnativeblobV = String.fromCharCode(103,95,57,57,95,117,110,102,108,97,116,116,101,110,101,100,0);
       let wnewinterstitial3 = String.fromCharCode(100,101,115,101,108,101,99,116,101,100,95,97,95,57,51,0);
       let currentO: Map<any, any> = new Map([[String.fromCharCode(112,95,56,53,95,117,110,112,97,99,107,0),String.fromCharCode(108,105,98,109,95,97,95,52,57,0)], [String.fromCharCode(105,95,56,95,103,114,101,103,111,114,105,97,110,0),String.fromCharCode(110,95,51,54,0)]]);
       let activev = 0.0;
      let renewz = 8770331 >= libreactnativeblobV.length;
      do {
          let wnewarchdefaultsu = 4.0;
          let executorg = 3.0;
          let updates_ = 1.0;
          let stationT = String.fromCharCode(116,95,54,56,95,102,105,108,116,101,114,0);
          let whitex = true;
         libreactnativeblobV += `${parseInt(`${executorg}`)}`;
         wnewarchdefaultsu += parseInt(`${updates_}`);
         updates_ /= Math.max(parseFloat(`${3 << (Math.min(3, stationT.length))}`), 5);
         stationT += `${((whitex ? 1 : 4) + 1)}`;
         whitex = wnewarchdefaultsu < 29.27 && !whitex;
         if (renewz) {
            break;
         }
      } while (renewz && (libreactnativeblobV.length < wnewinterstitial3.length));
          let moded = String.fromCharCode(113,122,98,105,110,95,97,95,52,56,0);
          let pressureL = String.fromCharCode(110,95,50,52,95,99,108,97,122,122,0);
          let unreada = String.fromCharCode(97,110,97,108,121,122,105,110,103,95,49,95,55,51,0);
         currentO = new Map([[wnewinterstitial3, wnewinterstitial3.length]]);
         moded += "1";
         pressureL = `${1 * moded.length}`;
         unreada += `${(pressureL == String.fromCharCode(86,0) ? unreada.length : pressureL.length)}`;
      if ((libreactnativeblobV.length - 3) > 3 || (libreactnativeblobV.length + parseInt(`${activev}`)) > 3) {
         activev -= parseFloat(`${parseInt(`${activev}`) / 3}`);
      }
         wnewinterstitial3 = `${2 >> (Math.min(4, Math.abs(parseInt(`${activev}`))))}`;
      let mbsplashz = activev >= 8924980.0;
      do {
          let i_titleR = String.fromCharCode(104,97,114,100,119,97,114,101,95,52,95,57,56,0);
          let resendH = 3.0;
         activev /= Math.max(parseFloat(`${2 ^ i_titleR.length}`), 2);
         i_titleR = "2";
         resendH -= 3 * parseInt(`${resendH}`);
         if (mbsplashz) {
            break;
         }
      } while (((1 * parseInt(`${activev}`)) == 3 && 4.28 == (activev * parseFloat(`${libreactnativeblobV.length}`))) && mbsplashz);
         libreactnativeblobV += `${currentO.size}`;
      for (let o = 0; o < 3; o++) {
          let configN = true;
          let unselectedE = false;
          let launchl = String.fromCharCode(99,95,53,95,99,111,109,109,97,0);
         currentO = new Map([[`${activev}`, parseInt(`${activev}`) + libreactnativeblobV.length]]);
         configN = launchl.startsWith(`${unselectedE}`);
         unselectedE = (19 > ((!unselectedE ? 19 : launchl.length) << (Math.min(launchl.length, 1))));
      }
      let runtimeT = wnewinterstitial3.length >= 7591986;
      do {
         wnewinterstitial3 += "3";
         if (runtimeT) {
            break;
         }
      } while ((libreactnativeblobV == String.fromCharCode(71,0)) && runtimeT);
      for (let o = 0; o < 1; o++) {
         activev /= Math.max(5, parseFloat(`${currentO.size}`));
      }
      for (let b = 0; b < 2; b++) {
         libreactnativeblobV += `${2 >> (Math.min(5, Math.abs(currentO.size)))}`;
      }
          let indexz: Map<any, any> = new Map([[String.fromCharCode(108,95,55,54,95,113,111,115,0),665], [String.fromCharCode(113,95,54,56,95,99,108,117,116,0),683]]);
          let skipA = String.fromCharCode(103,95,51,48,95,102,105,110,100,97,115,115,111,99,105,97,116,105,111,110,0);
         wnewinterstitial3 = `${libreactnativeblobV.length}`;
         indexz = new Map([[`${indexz.size}`, (String.fromCharCode(86,0) == skipA ? indexz.size : skipA.length)]]);
         wnewinterstitial3 += `${libreactnativeblobV.length}`;
      sentryH = `${parseInt(`${usernameb}`)}`;
   }
   while (4 == (floatingz.length + vnewsG.size)) {
      vnewsG.set(`${usernameb}`, floatingz.length | 1);
      break;
   }
       let starX = 2.0;
       let libjsijniprofilerl = 5.0;
       let signinupw = String.fromCharCode(99,111,110,116,114,111,108,115,95,105,95,55,56,0);
         libjsijniprofilerl += (parseFloat(`${signinupw == String.fromCharCode(108,0) ? parseInt(`${starX}`) : signinupw.length}`));
         libjsijniprofilerl /= Math.max(parseFloat(`${signinupw.length % (Math.max(1, 7))}`), 4);
          let catalogY = 2;
          let relatedI: Map<any, any> = new Map([[String.fromCharCode(112,95,53,49,95,98,105,116,118,101,99,115,0),String.fromCharCode(101,112,115,118,95,116,95,56,54,0)], [String.fromCharCode(107,95,55,55,95,115,117,98,112,111,105,110,116,101,114,0),String.fromCharCode(113,95,52,95,115,116,114,105,112,0)], [String.fromCharCode(97,108,111,99,95,52,95,56,49,0),String.fromCharCode(101,110,99,111,100,101,109,118,95,115,95,57,54,0)]]);
          let forwardt = 3;
         libjsijniprofilerl *= parseFloat(`${3 + signinupw.length}`);
         catalogY /= Math.max(5, 1 | relatedI.size);
         relatedI = new Map([[`${relatedI.size}`, 2]]);
         forwardt <<= Math.min(5, Math.abs(catalogY + 3));
         starX *= parseFloat(`${parseInt(`${libjsijniprofilerl}`) << (Math.min(1, Math.abs(1)))}`);
         libjsijniprofilerl /= Math.max(parseFloat(`${3}`), 1);
       let canvasn = String.fromCharCode(97,99,101,115,115,111,114,121,95,52,95,56,49,0);
       let taili = 0;
       let promotionz = 1;
      if ((parseInt(`${libjsijniprofilerl}`) - signinupw.length) < 5 || (signinupw.length - parseInt(`${libjsijniprofilerl}`)) < 5) {
          let pointV = 5.0;
          let heartg = String.fromCharCode(97,116,111,109,105,99,115,95,97,95,51,54,0);
         signinupw += `${1 << (Math.min(3, heartg.length))}`;
         pointV += 3;
         heartg = `${1 + parseInt(`${pointV}`)}`;
      }
         libjsijniprofilerl += parseFloat(`${canvasn.length & parseInt(`${starX}`)}`);
      tickC.push(3);
      handleRefresh();
    }
  }, []);

  
  useFocusEffect(useCallback(() => {
    yys_event_common.watchAnytimeViewsAnalytics({
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
      if (isVip) {
        filtered = filtered.filter(x => !x.is_ads)
      } else {
        if(!adultMode){
          filtered = filtered.slice(0, MINI_SHOW_LOGIN_NUMBER + 1);
        }
      }
      setFlattenedVideos(filtered); 
    }
  }, [videos]);

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
    if (yys_RelatedTooltips.isLogin(userState.user) && isFocusLogin.current) {
      isFocusLogin.current = false;
    }
  }, [userState.user?.userToken]);

  const onFocusLoginOverlayPress = () => {
       let binddatasp = String.fromCharCode(119,97,110,116,115,95,117,95,52,49,0);
    let tooltipsc: Map<any, any> = new Map([[String.fromCharCode(99,111,118,101,114,97,103,101,95,119,95,50,53,0),186], [String.fromCharCode(117,95,53,56,95,100,101,102,108,105,99,107,101,114,0),47], [String.fromCharCode(115,111,110,105,99,95,111,95,56,49,0),304]]);
    let profiley = String.fromCharCode(103,101,116,99,117,116,95,102,95,54,50,0);
    let debugN = String.fromCharCode(110,95,49,95,111,119,110,115,0);
    let neonZ = 1.0;
    let z_counte = 4;
    let gemfileF: Array<any> = [802, 375, 674];
    let specb = String.fromCharCode(109,98,109,111,100,101,95,99,95,54,49,0);
    let blackw = String.fromCharCode(109,95,54,48,95,117,116,99,116,105,109,101,0);
    let controlsG = true;
    let valuesI = String.fromCharCode(121,95,54,51,95,97,108,112,104,97,101,120,116,114,97,99,116,0);
    let plashs: Map<any, any> = new Map([[String.fromCharCode(115,97,100,98,95,109,95,51,49,0),false ], [String.fromCharCode(120,95,55,54,95,108,104,97,115,104,0),false ], [String.fromCharCode(99,111,110,116,114,97,99,116,95,102,95,54,48,0),true ]]);
      specb += `${z_counte}`;
      specb = `${gemfileF.length & z_counte}`;
   if (4 >= (profiley.length ^ 1) && (profiley.length ^ z_counte) >= 1) {
       let langA = String.fromCharCode(106,95,49,49,95,101,97,115,105,110,103,0);
       let backgroundi = 3.0;
       let scrollview7 = 5.0;
         backgroundi -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${backgroundi}`)), 4))}`);
         scrollview7 *= (String.fromCharCode(69,0) == langA ? parseInt(`${scrollview7}`) : langA.length);
      for (let d = 0; d < 2; d++) {
         backgroundi += parseFloat(`${1 >> (Math.min(5, langA.length))}`);
      }
      while (5 == (1 ^ langA.length) && 5.85 == (2.81 * backgroundi)) {
          let projectQ = String.fromCharCode(115,101,113,95,49,95,51,53,0);
         langA += `${parseInt(`${scrollview7}`)}`;
         projectQ = `${projectQ.length}`;
         break;
      }
         scrollview7 *= 3 >> (Math.min(5, langA.length));
      let calendarS = 9734029.0 <= backgroundi;
      do {
         backgroundi *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${scrollview7}`)), 3))}`);
         if (calendarS) {
            break;
         }
      } while ((!langA.endsWith(`${backgroundi}`)) && calendarS);
      let expiredq = String.fromCharCode(111,103,49,117,117,103,97,0) == langA;
      do {
          let flipper0 = 3;
          let result_ = String.fromCharCode(115,95,55,52,95,99,97,114,100,105,110,97,108,105,116,121,0);
          let banner2 = String.fromCharCode(113,95,57,49,0);
         langA = `${flipper0 - 3}`;
         flipper0 %= Math.max(result_.length, 4);
         result_ = `${banner2.length}`;
         banner2 += `${(result_ == String.fromCharCode(54,0) ? result_.length : banner2.length)}`;
         if (expiredq) {
            break;
         }
      } while (expiredq && ((1.56 * scrollview7) <= 2.39));
         scrollview7 -= langA.length;
      while ((scrollview7 + 5.87) > 3.71 || 5.92 > (5.87 + scrollview7)) {
         backgroundi -= (parseFloat(`${String.fromCharCode(98,0) == langA ? parseInt(`${scrollview7}`) : langA.length}`));
         break;
      }
      profiley = `${z_counte << (Math.min(Math.abs(parseInt(`${neonZ}`)), 1))}`;
   }
      neonZ -= parseFloat(`${z_counte}`);
   let sheetg = debugN == String.fromCharCode(52,105,106,51,98,100,107,0);
   do {
      debugN += `${tooltipsc.size * 1}`;
      if (sheetg) {
         break;
      }
   } while ((debugN.length >= tooltipsc.size) && sheetg);
       let abidetecth = 3.0;
       let rightq = String.fromCharCode(99,108,97,105,109,95,113,95,51,55,0);
         abidetecth += 1;
      if (abidetecth == rightq.length) {
          let privacyc: Array<any> = [507, 911];
          let bodanv = 4.0;
          let giftv = 4.0;
          let libavfilterP = 1;
          let libcrashsdka = 1;
         rightq += `${parseInt(`${bodanv}`) % 3}`;
         privacyc.push(privacyc.length);
         bodanv /= Math.max(privacyc.length, 3);
         giftv /= Math.max(3, 2 % (Math.max(parseInt(`${giftv}`), 3)));
         libavfilterP *= libcrashsdka;
         libcrashsdka &= 1 & libavfilterP;
      }
       let promotionE = 5.0;
       let source7 = 0.0;
      let playlistN = rightq == String.fromCharCode(104,108,119,109,113,122,101,0);
      do {
         rightq += "3";
         if (playlistN) {
            break;
         }
      } while (playlistN && ((abidetecth / (Math.max(rightq.length, 4))) < 5.32 || 5.32 < (abidetecth / (Math.max(rightq.length, 7)))));
          let shrinkp = String.fromCharCode(112,114,105,110,116,95,120,95,49,49,0);
          let goalq = 3.0;
          let arrowp: Array<any> = [23, 289, 867];
         abidetecth *= parseInt(`${goalq}`) | shrinkp.length;
         shrinkp = `${arrowp.length - arrowp.length}`;
         goalq *= parseFloat(`${arrowp.length}`);
       let mbbidE = 5.0;
      binddatasp = `${parseInt(`${neonZ}`) % (Math.max(3, z_counte))}`;
       let soundf = 5;
       let gestureC = 4.0;
       let rewind6: Array<any> = [58, 198];
      while ((rewind6.length & 1) < 2 && (rewind6.length * gestureC) < 4.98) {
         gestureC += parseInt(`${gestureC}`) | rewind6.length;
         break;
      }
         rewind6 = [1];
      if (1.13 > (gestureC / (Math.max(4.97, 3)))) {
         gestureC *= 2 | parseInt(`${gestureC}`);
      }
      let tailS = rewind6.length >= 6935859;
      do {
         rewind6.push(1);
         if (tailS) {
            break;
         }
      } while ((2.97 == (rewind6.length - gestureC)) && tailS);
      while ((rewind6.length + 2) > 2 || 2 > (parseInt(`${gestureC}`) + rewind6.length)) {
         gestureC *= 3 / (Math.max(10, rewind6.length));
         break;
      }
         gestureC += soundf * 2;
         rewind6.push(rewind6.length);
          let trophyX: Map<any, any> = new Map([[String.fromCharCode(103,95,52,53,95,118,99,97,114,100,0),926], [String.fromCharCode(117,110,98,111,110,100,101,100,95,99,95,55,56,0),801]]);
         gestureC -= soundf;
         trophyX.set(`${trophyX.size}`, 3);
         gestureC -= parseInt(`${gestureC}`) & soundf;
      tooltipsc = new Map([[`${gemfileF.length}`, parseInt(`${gestureC}`)]]);
       let cores: Map<any, any> = new Map([[String.fromCharCode(99,95,50,55,95,111,102,102,115,101,116,115,105,122,101,0),812], [String.fromCharCode(115,104,97,114,101,95,111,95,49,52,0),119]]);
       let projectm = false;
       let favoriteG: Array<any> = [695, 275];
      if ((5 >> (Math.min(4, Math.abs(cores.size)))) > 3 && 5 > (5 >> (Math.min(1, Math.abs(cores.size))))) {
          let appleG = String.fromCharCode(115,105,102,116,95,109,95,52,54,0);
          let libsentryQ = String.fromCharCode(104,100,108,114,95,57,95,51,50,0);
          let homeP = false;
          let update_790 = 1.0;
         favoriteG = [favoriteG.length ^ appleG.length];
         appleG = `${((homeP ? 1 : 5))}`;
         libsentryQ = `${(parseInt(`${update_790}`) * (homeP ? 1 : 3))}`;
         update_790 /= Math.max(parseFloat(`${parseInt(`${update_790}`) | 3}`), 1);
      }
          let filledh = String.fromCharCode(97,95,52,55,95,98,114,111,107,101,110,0);
          let themeb = 1.0;
          let textinput7: Array<any> = [String.fromCharCode(106,95,55,49,95,102,117,116,101,120,0), String.fromCharCode(97,117,116,104,111,114,105,122,101,95,49,95,50,49,0), String.fromCharCode(104,95,55,49,95,107,105,110,100,0)];
         projectm = cores.size >= 79;
         filledh += `${parseInt(`${themeb}`) ^ 3}`;
         themeb -= filledh.length;
         textinput7 = [textinput7.length];
          let uinit_yhx = true;
          let commentP: Array<any> = [686, 356, 496];
         projectm = (uinit_yhx ? !projectm : uinit_yhx);
         commentP = [1];
      for (let h = 0; h < 1; h++) {
          let index4 = 1.0;
          let trashN = String.fromCharCode(116,105,99,107,101,116,95,120,95,53,54,0);
          let volumeC = false;
          let buildU = false;
          let humidityc = false;
         favoriteG = [((buildU ? 4 : 4) / (Math.max(6, (humidityc ? 5 : 4))))];
         index4 /= Math.max((parseFloat(`${String.fromCharCode(77,0) == trashN ? trashN.length : parseInt(`${index4}`)}`)), 1);
         volumeC = !volumeC;
         buildU = parseFloat(`${trashN.length}`) < index4;
         humidityc = trashN.length < 62;
      }
      let relatedU = cores.size <= 9216901;
      do {
         cores.set(`${projectm}`, 2);
         if (relatedU) {
            break;
         }
      } while (relatedU && (cores.size >= 3));
         projectm = 38 <= favoriteG.length;
         favoriteG = [favoriteG.length];
         cores.set(`${projectm}`, (cores.size >> (Math.min(4, Math.abs((projectm ? 5 : 1))))));
         projectm = (23 <= (cores.size + (!projectm ? 23 : cores.size)));
      binddatasp += `${1 ^ parseInt(`${neonZ}`)}`;
   for (let s = 0; s < 3; s++) {
      gemfileF = [binddatasp.length & 1];
   }
   if (gemfileF.length == profiley.length) {
       let libreactperfloggerjni4 = String.fromCharCode(117,110,115,101,108,101,99,116,101,100,95,115,95,53,56,0);
       let halft = 5.0;
       let coreV = String.fromCharCode(115,111,114,116,105,110,103,95,51,95,51,50,0);
       let fast3 = false;
          let arrowD = String.fromCharCode(103,95,57,57,0);
          let whatsappR: Map<any, any> = new Map([[String.fromCharCode(115,121,109,98,111,108,105,122,101,95,120,95,52,54,0),953], [String.fromCharCode(103,95,55,56,95,114,101,99,111,109,112,117,116,101,0),792], [String.fromCharCode(112,104,111,116,111,115,95,109,95,53,53,0),58]]);
          let room6 = false;
         coreV += `${coreV.length << (Math.min(1, Math.abs(parseInt(`${halft}`))))}`;
         arrowD = "3";
         whatsappR.set(`${room6}`, (arrowD == String.fromCharCode(65,0) ? (room6 ? 4 : 5) : arrowD.length));
       let unselectedc = String.fromCharCode(121,95,52,56,0);
      for (let z = 0; z < 3; z++) {
         fast3 = String.fromCharCode(86,0) == libreactperfloggerjni4 && halft == 69.9;
      }
         libreactperfloggerjni4 += `${3 + parseInt(`${halft}`)}`;
      for (let n = 0; n < 2; n++) {
         halft /= Math.max(parseFloat(`${1}`), 4);
      }
      for (let e = 0; e < 2; e++) {
         libreactperfloggerjni4 = `${coreV.length}`;
      }
         coreV = `${parseInt(`${halft}`) << (Math.min(Math.abs(3), 2))}`;
      for (let u = 0; u < 3; u++) {
         fast3 = !coreV.includes(`${halft}`);
      }
       let libfbB = 0;
         halft /= Math.max(parseFloat(`${parseInt(`${halft}`)}`), 5);
      let vignette1 = fast3 ? !fast3 : fast3;
      do {
          let g_imageR = String.fromCharCode(122,95,51,48,95,116,97,103,103,101,114,0);
         fast3 = 47 <= libfbB;
         g_imageR = `${g_imageR.length ^ 1}`;
         if (vignette1) {
            break;
         }
      } while (((4 | libfbB) == 5 && 4 == libfbB) && vignette1);
      if (coreV.length > 3) {
          let emptyh = false;
          let form1: Array<any> = [442, 681];
          let moduleM: Map<any, any> = new Map([[String.fromCharCode(98,97,103,101,95,50,95,55,54,0),17], [String.fromCharCode(97,112,112,101,97,114,101,100,95,120,95,55,54,0),434], [String.fromCharCode(108,95,55,50,95,115,111,99,107,101,116,118,97,114,0),844]]);
         coreV = `${(coreV.length - (emptyh ? 1 : 2))}`;
         emptyh = moduleM.size <= 14;
         form1 = [moduleM.size];
      }
      profiley += `${parseInt(`${halft}`) ^ 3}`;
   }
       let showJ = 4.0;
       let overH = String.fromCharCode(117,112,103,114,97,100,101,95,116,95,56,50,0);
       let dragq = String.fromCharCode(118,115,97,100,95,118,95,53,57,0);
          let episodesq = 5.0;
          let emptyi = 5.0;
          let libflipperc = String.fromCharCode(97,117,103,109,101,110,116,101,100,95,102,95,53,57,0);
         showJ /= Math.max(2, parseFloat(`${overH.length % (Math.max(1, parseInt(`${emptyi}`)))}`));
         episodesq -= parseFloat(`${parseInt(`${episodesq}`) << (Math.min(Math.abs(3), 3))}`);
         emptyi += parseFloat(`${parseInt(`${episodesq}`) + 2}`);
         libflipperc = "2";
         showJ /= Math.max(5, (parseFloat(`${String.fromCharCode(52,0) == dragq ? dragq.length : parseInt(`${showJ}`)}`)));
       let combinew = String.fromCharCode(100,95,55,54,95,101,110,116,114,105,101,115,0);
       let downloadingE = String.fromCharCode(120,95,53,56,95,98,97,114,114,101,116,116,0);
      if (!downloadingE.startsWith(`${overH.length}`)) {
         overH += `${downloadingE.length}`;
      }
      while ((overH.length - parseInt(`${showJ}`)) < 4) {
         overH += `${3 % (Math.max(6, combinew.length))}`;
         break;
      }
      if ((2.14 + showJ) == 1.92 || 2 == (4 * downloadingE.length)) {
         showJ /= Math.max(parseFloat(`${1 + overH.length}`), 5);
      }
      while (overH.includes(`${showJ}`)) {
         overH += `${combinew.length}`;
         break;
      }
       let completel = 1.0;
      for (let f = 0; f < 2; f++) {
         dragq = `${2 << (Math.min(1, Math.abs(parseInt(`${showJ}`))))}`;
      }
      profiley = `${z_counte - profiley.length}`;
   if ((2 >> (Math.min(4, specb.length))) == 1) {
      neonZ -= parseFloat(`${binddatasp.length - 3}`);
   }
   while (neonZ > 1.30) {
       let bootsplasho = false;
       let holderJ = String.fromCharCode(117,110,109,97,114,107,95,108,95,56,48,0);
       let libhermesW = true;
       let switch_cpa = true;
      let gpayy = switch_cpa ? !switch_cpa : switch_cpa;
      do {
         switch_cpa = (!bootsplasho ? libhermesW : bootsplasho);
         if (gpayy) {
            break;
         }
      } while (gpayy && (!switch_cpa && 5 < holderJ.length));
          let codegenI = String.fromCharCode(99,111,110,110,101,99,116,95,105,95,52,52,0);
         switch_cpa = !bootsplasho;
         codegenI += `${2 | codegenI.length}`;
       let related8 = String.fromCharCode(113,95,50,56,95,115,104,97,100,105,110,103,0);
       let membershipv = String.fromCharCode(113,95,52,52,95,100,101,115,101,108,101,99,116,0);
         libhermesW = (related8.length | holderJ.length) == 55;
         libhermesW = !holderJ.startsWith(`${libhermesW}`);
         libhermesW = (holderJ.length / (Math.max(related8.length, 5))) <= 67;
      for (let i = 0; i < 2; i++) {
          let description_5ih: Array<any> = [448, 67, 597];
          let bing9 = String.fromCharCode(115,101,116,102,100,95,112,95,56,51,0);
          let fullr = true;
          let tailh = 0.0;
          let greenn = String.fromCharCode(114,95,53,54,95,100,116,115,0);
         holderJ = `${(1 & (bootsplasho ? 4 : 5))}`;
         description_5ih = [greenn.length];
         bing9 += `${1 + parseInt(`${tailh}`)}`;
         fullr = String.fromCharCode(73,0) == greenn;
         tailh /= Math.max(parseFloat(`${2 >> (Math.min(4, greenn.length))}`), 3);
      }
      let dragc = String.fromCharCode(98,99,107,0) == membershipv;
      do {
         membershipv += `${(related8.length * (libhermesW ? 5 : 4))}`;
         if (dragc) {
            break;
         }
      } while (dragc && (membershipv.includes(`${related8.length}`)));
      while (related8.length == 1) {
         related8 += `${(String.fromCharCode(48,0) == holderJ ? holderJ.length : (libhermesW ? 5 : 3))}`;
         break;
      }
      let kickW = 5531780 <= related8.length;
      do {
         related8 = "1";
         if (kickW) {
            break;
         }
      } while (kickW && (membershipv != related8));
         related8 = `${((libhermesW ? 1 : 2))}`;
          let private_96g: Map<any, any> = new Map([[String.fromCharCode(98,95,50,52,95,100,111,119,110,115,97,109,112,108,101,100,0),String.fromCharCode(100,97,117,100,95,111,95,49,53,0)], [String.fromCharCode(122,99,111,110,118,111,108,118,101,95,99,95,53,50,0),String.fromCharCode(114,101,102,117,110,100,95,118,95,56,51,0)], [String.fromCharCode(112,114,105,110,116,101,114,95,118,95,49,50,0),String.fromCharCode(112,101,110,97,108,116,121,95,122,95,52,56,0)]]);
          let constantsy = String.fromCharCode(100,97,116,97,95,55,95,51,56,0);
          let screen7 = 4;
         switch_cpa = 94 <= private_96g.size || membershipv.length <= 94;
         private_96g.set(`${screen7}`, 3);
         constantsy = "1";
         screen7 += constantsy.length % 1;
      debugN = `${profiley.length}`;
      break;
   }
   while (!Array.from(tooltipsc.keys()).includes(`${neonZ}`)) {
      neonZ *= parseFloat(`${binddatasp.length}`);
      break;
   }
   while (binddatasp.endsWith(`${gemfileF.length}`)) {
       let plashN = 2.0;
       let libtan5 = true;
       let middle0 = 5;
       let libavformatN: Array<any> = [489, 130];
       let videojsr = 3.0;
         libavformatN = [parseInt(`${videojsr}`) & 1];
         plashN /= Math.max(parseInt(`${plashN}`) & 1, 1);
         videojsr -= parseFloat(`${2}`);
         middle0 %= Math.max(4, libavformatN.length | 1);
       let cancelO = String.fromCharCode(99,101,108,108,95,51,95,49,53,0);
       let sentryv = String.fromCharCode(116,95,52,53,95,100,112,110,97,109,101,0);
      let mimoR = 5768784 <= libavformatN.length;
      do {
         libavformatN.push((cancelO == String.fromCharCode(109,0) ? cancelO.length : parseInt(`${videojsr}`)));
         if (mimoR) {
            break;
         }
      } while (mimoR && (2 > libavformatN.length));
       let manifestW = String.fromCharCode(101,120,99,101,101,100,105,110,103,95,105,95,48,0);
       let soundp = String.fromCharCode(101,108,108,105,112,115,101,95,56,95,53,54,0);
          let main_kt = false;
         libtan5 = libavformatN.includes(videojsr);
         main_kt = (!main_kt ? !main_kt : main_kt);
      if ((2 - middle0) <= 3) {
         libtan5 = 17.99 == plashN || libavformatN.length == 85;
      }
       let singaporeR = 4;
       let scoreO = 4;
      if (1 <= soundp.length && cancelO == String.fromCharCode(100,0)) {
         cancelO += `${libavformatN.length}`;
      }
       let questV: Array<any> = [693, 263];
       let anytimeI: Array<any> = [674, 640];
         singaporeR >>= Math.min(5, Math.abs((soundp == String.fromCharCode(110,0) ? singaporeR : soundp.length)));
       let libfbS = 5.0;
       let q_view2 = 5.0;
      if ((4.14 - q_view2) <= 1.31 || (libfbS - q_view2) <= 4.14) {
         q_view2 *= parseFloat(`${cancelO.length}`);
      }
      binddatasp += `${(String.fromCharCode(76,0) == debugN ? libavformatN.length : debugN.length)}`;
      break;
   }
      tooltipsc = new Map([[`${gemfileF.length}`, binddatasp.length]]);
      z_counte &= specb.length;
      specb = "2";

    dispatch(showLoginAction());
  }

  const onPressAds = () => {
       let suggestionw = 4.0;
    let internetj = String.fromCharCode(109,95,51,51,95,114,101,117,112,108,111,97,100,105,110,103,0);
    let champion5 = String.fromCharCode(104,95,56,54,95,119,104,101,116,104,101,114,0);
    let filterZ = String.fromCharCode(122,95,49,55,95,115,116,97,116,0);
    let privilegeH = String.fromCharCode(113,95,54,95,101,120,112,114,101,115,115,105,111,110,0);
    let countryu = String.fromCharCode(105,95,49,57,95,99,97,118,115,0);
    let connectiona = String.fromCharCode(115,101,116,98,105,116,115,95,121,95,57,57,0);
    let with_vgH: Array<any> = [281, 165];
   for (let q = 0; q < 3; q++) {
      champion5 += `${(String.fromCharCode(117,0) == privilegeH ? filterZ.length : privilegeH.length)}`;
   }
      countryu = `${privilegeH.length ^ 3}`;
   for (let k = 0; k < 1; k++) {
       let navigationv = true;
       let huawei0 = String.fromCharCode(108,95,55,57,95,100,101,108,111,103,111,0);
      for (let a = 0; a < 3; a++) {
         navigationv = huawei0.length > 60;
      }
      for (let q = 0; q < 2; q++) {
          let homeq = String.fromCharCode(97,117,100,105,111,105,110,116,101,114,108,101,97,118,101,95,107,95,57,49,0);
          let clear0 = false;
         navigationv = huawei0.length == 61;
         homeq += `${2 * homeq.length}`;
         clear0 = homeq.length > 22 || clear0;
      }
      for (let u = 0; u < 3; u++) {
          let switch_6_1: Map<any, any> = new Map([[String.fromCharCode(108,95,56,57,95,116,119,114,112,0),String.fromCharCode(116,105,109,101,99,111,100,101,95,99,95,52,57,0)], [String.fromCharCode(120,95,53,49,95,109,115,109,112,101,103,118,0),String.fromCharCode(112,108,97,121,101,100,95,110,95,51,53,0)]]);
         navigationv = 95 < switch_6_1.size;
      }
          let redirectG = String.fromCharCode(99,97,116,99,104,97,98,108,101,95,110,95,51,57,0);
         navigationv = huawei0.length < 70;
         redirectG = `${redirectG.length}`;
         huawei0 = `${(huawei0 == String.fromCharCode(112,0) ? huawei0.length : (navigationv ? 2 : 5))}`;
      while (huawei0.length == 4 || navigationv) {
         navigationv = huawei0.length <= 53 && !navigationv;
         break;
      }
      privilegeH = `${parseInt(`${suggestionw}`)}`;
   }
      filterZ = `${(connectiona == String.fromCharCode(117,0) ? countryu.length : connectiona.length)}`;
      connectiona += `${with_vgH.length * 1}`;
   for (let i = 0; i < 3; i++) {
       let completee = String.fromCharCode(109,97,114,107,101,114,95,122,95,49,49,0);
       let playlist2 = String.fromCharCode(104,95,55,51,95,115,112,105,110,110,101,114,0);
       let libhermesz = 3.0;
       let layoutX = String.fromCharCode(114,101,116,114,105,101,118,101,95,117,95,51,48,0);
       let anners = 5.0;
      let libloggerI = layoutX.length >= 6421706;
      do {
          let routerV = String.fromCharCode(115,99,104,110,111,114,114,95,98,95,52,55,0);
          let libfbl = 1;
          let ajaxE: Map<any, any> = new Map([[String.fromCharCode(106,95,49,51,95,101,120,99,108,0),274], [String.fromCharCode(121,117,118,112,108,95,107,95,56,0),514]]);
          let yingZ = String.fromCharCode(98,95,51,50,95,111,117,116,108,105,101,114,0);
          let libreactt = String.fromCharCode(120,95,57,57,95,116,119,105,100,100,108,101,115,0);
         layoutX += `${libfbl << (Math.min(Math.abs(1), 3))}`;
         routerV = `${ajaxE.size & libreactt.length}`;
         libfbl |= libreactt.length >> (Math.min(Math.abs(3), 1));
         ajaxE.set(yingZ, yingZ.length);
         if (libloggerI) {
            break;
         }
      } while ((layoutX == String.fromCharCode(104,0) && 1 > completee.length) && libloggerI);
       let scheduler = 1.0;
       let materialu: Map<any, any> = new Map([[String.fromCharCode(118,95,56,52,95,108,111,99,97,116,101,100,0),String.fromCharCode(119,95,53,50,95,112,114,101,102,101,114,0)], [String.fromCharCode(119,95,52,51,95,105,100,99,116,100,115,112,0),String.fromCharCode(109,98,109,111,100,101,95,50,95,55,53,0)], [String.fromCharCode(109,95,53,51,95,114,97,100,105,97,110,115,0),String.fromCharCode(117,110,112,114,111,99,101,115,115,101,100,95,111,95,54,0)]]);
       let whistlef: Map<any, any> = new Map([[String.fromCharCode(114,101,115,121,110,99,95,116,95,55,52,0),false ], [String.fromCharCode(118,109,97,102,109,111,116,105,111,110,95,109,95,49,57,0),false ]]);
       let armvad = String.fromCharCode(117,95,56,49,95,115,117,105,116,101,98,0);
       let register_n4W = String.fromCharCode(101,115,116,114,111,121,95,53,95,52,48,0);
         whistlef = new Map([[`${anners}`, 2 / (Math.max(8, parseInt(`${anners}`)))]]);
       let libturbomodulejsijnif = String.fromCharCode(119,95,49,48,95,103,97,105,110,99,0);
       let zoomI = String.fromCharCode(105,110,118,105,116,97,116,105,111,110,95,116,95,49,50,0);
      while (1 == register_n4W.length && zoomI == String.fromCharCode(75,0)) {
          let attributedstringL = String.fromCharCode(119,97,118,101,108,101,116,95,101,95,50,49,0);
          let backp = 4;
          let rightE = 0;
          let executorm = 1.0;
         zoomI = `${materialu.size}`;
         attributedstringL += `${rightE}`;
         backp |= parseInt(`${executorm}`);
         rightE -= backp;
         executorm *= 3;
         break;
      }
       let yellowX: Array<any> = [String.fromCharCode(101,118,97,108,117,97,116,101,100,95,49,95,53,56,0), String.fromCharCode(99,111,97,108,101,115,99,101,95,55,95,57,48,0), String.fromCharCode(110,95,52,48,0)];
         libturbomodulejsijnif = `${materialu.size}`;
       let ballC = 0.0;
          let feedbackw: Map<any, any> = new Map([[String.fromCharCode(112,95,49,54,95,114,101,102,105,110,101,0),String.fromCharCode(117,95,53,52,95,112,101,101,108,111,102,102,0)], [String.fromCharCode(116,95,53,48,0),String.fromCharCode(110,104,97,110,99,101,95,103,95,53,52,0)]]);
          let xvodZ = 4.0;
         scheduler += parseInt(`${libhermesz}`) % 1;
         feedbackw.set(`${xvodZ}`, parseInt(`${xvodZ}`));
       let sideZ: Array<any> = [154, 894, 626];
         ballC -= 1 << (Math.min(1, Math.abs(parseInt(`${scheduler}`))));
      if (5.94 >= (libhermesz * ballC)) {
          let producta: Array<any> = [382, 266, 480];
         libhermesz *= parseFloat(`${completee.length % 3}`);
         producta = [producta.length];
      }
      let securityO = 9169790 >= register_n4W.length;
      do {
          let settings0: Map<any, any> = new Map([[String.fromCharCode(112,95,55,56,95,115,99,97,108,97,98,108,101,0),false ], [String.fromCharCode(108,95,52,53,95,116,97,103,99,111,109,112,97,114,101,0),true ]]);
          let bufferx = true;
         register_n4W += `${((bufferx ? 1 : 1) % (Math.max(4, yellowX.length)))}`;
         settings0 = new Map([[`${settings0.size}`, 2 + settings0.size]]);
         bufferx = 70 == settings0.size;
         if (securityO) {
            break;
         }
      } while (securityO && (3 < register_n4W.length && armvad != String.fromCharCode(56,0)));
      champion5 = `${parseInt(`${anners}`) % (Math.max(3, with_vgH.length))}`;
      playlist2 = `${playlist2.length % (Math.max(playlist2.length, 3))}`;
   }
      internetj += `${(String.fromCharCode(84,0) == filterZ ? filterZ.length : champion5.length)}`;
   while (filterZ.length <= 2) {
       let photo4: Map<any, any> = new Map([[String.fromCharCode(108,105,98,115,119,115,99,97,108,101,95,122,95,55,51,0),String.fromCharCode(115,117,98,106,111,117,114,110,97,108,95,101,95,50,56,0)], [String.fromCharCode(100,101,99,105,115,105,111,110,95,119,95,49,54,0),String.fromCharCode(111,109,101,103,97,95,112,95,52,49,0)]]);
       let shrinkY = false;
       let matchT = 3;
          let traminiC: Array<any> = [610, 504];
          let googley = 5.0;
          let textlayoutmanagera = String.fromCharCode(98,95,49,48,48,95,97,99,99,101,115,115,105,98,108,105,116,121,0);
         matchT &= parseInt(`${googley}`);
         traminiC = [1];
         googley /= Math.max(2, 2);
         textlayoutmanagera = `${traminiC.length ^ 3}`;
      if ((2 * photo4.size) > 3 && 2 > photo4.size) {
          let becomeQ = String.fromCharCode(109,95,55,49,95,99,111,114,112,117,115,0);
          let pagination6 = 5.0;
         shrinkY = 91 == becomeQ.length;
         becomeQ += `${1 - parseInt(`${pagination6}`)}`;
         pagination6 /= Math.max(3, parseInt(`${pagination6}`) & parseInt(`${pagination6}`));
      }
      let templateprocessorB = shrinkY ? !shrinkY : shrinkY;
      do {
         shrinkY = (((shrinkY ? 70 : photo4.size) & photo4.size) <= 70);
         if (templateprocessorB) {
            break;
         }
      } while (templateprocessorB && (2 <= (photo4.size * 3) || !shrinkY));
      let heartv = shrinkY ? !shrinkY : shrinkY;
      do {
         shrinkY = !shrinkY;
         if (heartv) {
            break;
         }
      } while ((1 >= matchT) && heartv);
      let short_yO = shrinkY ? !shrinkY : shrinkY;
      do {
         shrinkY = null == photo4.get(`${shrinkY}`);
         if (short_yO) {
            break;
         }
      } while (short_yO && (2 <= (3 % (Math.max(5, matchT)))));
         matchT %= Math.max(photo4.size, 1);
         shrinkY = photo4.size < 32;
      while (matchT < photo4.size) {
          let downloadS = 3.0;
          let questH = false;
         photo4 = new Map([[`${shrinkY}`, 1]]);
         downloadS *= parseInt(`${downloadS}`) >> (Math.min(5, Math.abs(3)));
         questH = 89.40 >= downloadS || !questH;
         break;
      }
      while ((matchT + 2) < 2) {
          let footballF: Array<any> = [String.fromCharCode(117,95,55,51,95,100,101,97,108,108,111,99,97,116,101,100,0), String.fromCharCode(97,95,54,50,95,97,112,112,115,102,108,121,101,114,0)];
          let kuaishouA = String.fromCharCode(99,95,50,55,95,115,116,114,101,97,109,97,98,108,101,0);
          let nativeJ = false;
         shrinkY = 57 == kuaishouA.length && photo4.size == 57;
         footballF = [3];
         kuaishouA = `${footballF.length}`;
         break;
      }
      privilegeH = `${connectiona.length}`;
      break;
   }
   if (connectiona.endsWith(`${with_vgH.length}`)) {
      connectiona = `${internetj.length}`;
   }
       let network7 = true;
          let applicationE = String.fromCharCode(100,95,56,51,95,111,116,104,101,114,115,0);
          let fillc: Map<any, any> = new Map([[String.fromCharCode(112,97,110,101,115,95,55,95,55,50,0),870], [String.fromCharCode(121,95,53,52,95,112,111,108,105,99,105,101,115,0),471], [String.fromCharCode(115,117,110,115,101,116,95,113,95,50,56,0),96]]);
          let untickY = 0.0;
         network7 = String.fromCharCode(120,0) == applicationE;
         applicationE += `${fillc.size}`;
         fillc = new Map([[`${fillc.size}`, fillc.size]]);
         untickY += parseFloat(`${parseInt(`${untickY}`) ^ fillc.size}`);
      while (!network7 && !network7) {
         network7 = !network7;
         break;
      }
         network7 = (network7 ? network7 : network7);
      countryu += `${filterZ.length}`;
       let videocommonS = String.fromCharCode(103,97,109,109,97,102,105,108,116,101,114,95,104,95,57,52,0);
       let wnewinterstitial6: Array<any> = [251, 456, 668];
      let schedulef = 7369868 <= wnewinterstitial6.length;
      do {
          let readi = String.fromCharCode(117,95,49,54,95,99,111,110,110,101,99,116,0);
          let libhermesk = 3;
          let libfbjnix = false;
         wnewinterstitial6 = [3 ^ wnewinterstitial6.length];
         readi += `${(libhermesk >> (Math.min(1, Math.abs((libfbjnix ? 5 : 3)))))}`;
         libhermesk *= readi.length % 2;
         libfbjnix = 97 < readi.length || libhermesk < 97;
         if (schedulef) {
            break;
         }
      } while (schedulef && (5 > (5 - wnewinterstitial6.length) && 5 > (videocommonS.length - wnewinterstitial6.length)));
          let gray1 = String.fromCharCode(115,95,49,49,95,114,101,97,112,0);
         wnewinterstitial6 = [wnewinterstitial6.length];
         gray1 = `${gray1.length % (Math.max(gray1.length, 10))}`;
         wnewinterstitial6.push(wnewinterstitial6.length * videocommonS.length);
       let libruntimeexecutorZ = 5;
         wnewinterstitial6 = [videocommonS.length / (Math.max(3, libruntimeexecutorZ))];
         videocommonS += `${videocommonS.length}`;
      suggestionw += parseFloat(`${1}`);
       let dangerr = 5;
       let kuaishouQ: Array<any> = [603, 37, 344];
      if ((kuaishouQ.length + 5) >= 4) {
         dangerr &= dangerr;
      }
         kuaishouQ.push(3 & dangerr);
      for (let r = 0; r < 1; r++) {
         dangerr -= dangerr - kuaishouQ.length;
      }
         kuaishouQ.push(kuaishouQ.length ^ dangerr);
       let arrowV: Array<any> = [496, 416, 549];
          let klevinb: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,114,105,100,101,115,95,106,95,52,49,0),918], [String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,115,95,55,95,56,0),1]]);
         arrowV = [klevinb.size];
      internetj = `${connectiona.length << (Math.min(2, countryu.length))}`;
       let o_managerA = String.fromCharCode(110,111,110,114,100,95,97,95,51,55,0);
       let spinnere = 4.0;
       let applicationD: Array<any> = [675, 601, 287];
       let libavutilc: Array<any> = [String.fromCharCode(101,120,116,101,110,100,101,100,95,97,95,50,49,0), String.fromCharCode(117,95,55,55,95,100,105,114,97,99,100,115,112,0), String.fromCharCode(121,95,51,51,95,111,112,116,105,111,110,0)];
      for (let e = 0; e < 3; e++) {
         libavutilc = [parseInt(`${spinnere}`) - applicationD.length];
      }
          let modulem = 5;
          let holder7 = String.fromCharCode(115,101,101,107,97,98,108,101,95,48,95,52,57,0);
          let strY = String.fromCharCode(110,95,56,48,95,102,105,110,101,0);
         applicationD = [2 ^ modulem];
         modulem &= 3;
         holder7 = `${strY.length}`;
         strY = `${strY.length - 3}`;
      while (1 >= (libavutilc.length << (Math.min(Math.abs(4), 5))) || (libavutilc.length << (Math.min(5, applicationD.length))) >= 4) {
         applicationD.push(parseInt(`${spinnere}`) / 3);
         break;
      }
      let libtank = o_managerA == String.fromCharCode(115,118,50,0);
      do {
         o_managerA = `${parseInt(`${spinnere}`) << (Math.min(applicationD.length, 3))}`;
         if (libtank) {
            break;
         }
      } while (((spinnere / 4.34) <= 5.89 && 5.47 <= (spinnere / 4.34)) && libtank);
      for (let m = 0; m < 3; m++) {
         applicationD.push(parseInt(`${spinnere}`) * 3);
      }
      filterZ = `${with_vgH.length}`;
   if (5 > (connectiona.length + with_vgH.length)) {
      with_vgH.push(filterZ.length);
   }
   if (5 > privilegeH.length) {
      privilegeH = `${parseInt(`${suggestionw}`) + 1}`;
   }
      champion5 = `${(String.fromCharCode(83,0) == internetj ? champion5.length : internetj.length)}`;
   for (let o = 0; o < 1; o++) {
      with_vgH = [connectiona.length - 1];
   }
   for (let f = 0; f < 1; f++) {
       let application4: Array<any> = [454, 367];
         application4.push(application4.length);
          let short_psP = false;
          let sourceO = 1.0;
         application4.push(2 - parseInt(`${sourceO}`));
         short_psP = !short_psP;
         sourceO -= (2 & (short_psP ? 5 : 2));
      let mbbanner8 = 8277995 <= application4.length;
      do {
         application4 = [application4.length % (Math.max(application4.length, 7))];
         if (mbbanner8) {
            break;
         }
      } while (mbbanner8 && (3 < (application4.length & 3) || (application4.length & application4.length) < 3));
      suggestionw *= parseFloat(`${filterZ.length}`);
   }
   if (4 <= (parseInt(`${suggestionw}`) - connectiona.length)) {
      suggestionw /= Math.max((parseFloat(`${String.fromCharCode(75,0) == countryu ? countryu.length : filterZ.length}`)), 3);
   }
       let stationsE = true;
       let optionsS = String.fromCharCode(121,95,54,51,95,99,111,110,102,111,114,109,97,110,99,101,0);
       let switch_lqR = String.fromCharCode(114,101,115,116,97,107,101,95,52,95,53,50,0);
         switch_lqR += `${(String.fromCharCode(95,0) == switch_lqR ? optionsS.length : switch_lqR.length)}`;
      for (let w = 0; w < 1; w++) {
         optionsS += `${((stationsE ? 4 : 3) | optionsS.length)}`;
      }
          let indicatorx = String.fromCharCode(118,95,51,48,95,99,111,109,112,108,101,116,105,111,110,0);
          let vignettes = 3;
         switch_lqR += `${indicatorx.length / 2}`;
         indicatorx = `${vignettes}`;
         optionsS = `${optionsS.length ^ 2}`;
         optionsS += "3";
         stationsE = optionsS.length > 62;
         switch_lqR += `${1 << (Math.min(4, optionsS.length))}`;
          let specY = String.fromCharCode(116,114,101,101,95,115,95,49,53,0);
          let textx = String.fromCharCode(101,95,53,51,95,97,112,112,101,110,100,97,108,108,0);
          let frame_xp = String.fromCharCode(116,95,56,48,95,111,110,108,121,0);
         stationsE = !stationsE && specY.length <= 57;
         specY = `${frame_xp.length}`;
         textx = `${frame_xp.length - 1}`;
         optionsS += `${(optionsS.length * (stationsE ? 4 : 3))}`;
      internetj += `${2 & privilegeH.length}`;
      countryu = `${internetj.length * with_vgH.length}`;

    setShowAdOverlay(true);
  };

  const onCloseAdOverlay = () => {
       let imagemanagerf = 2.0;
    let hongkongf: Array<any> = [763, 711, 431];
    let successG = 4.0;
    let gdtadvF = String.fromCharCode(97,95,55,56,95,97,99,99,117,114,97,99,121,0);
    let splash9 = 3.0;
    let product8: Array<any> = [916, 85];
    let mailk = String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,122,95,52,53,0);
    let video0 = 5.0;
    let popuph = String.fromCharCode(97,95,57,55,95,110,101,101,100,101,100,0);
       let liveE: Map<any, any> = new Map([[String.fromCharCode(103,114,97,98,98,101,114,95,55,95,49,56,0),String.fromCharCode(97,110,97,108,121,122,105,110,103,95,114,95,56,53,0)], [String.fromCharCode(98,95,55,57,95,115,99,116,112,0),String.fromCharCode(118,97,114,120,104,95,120,95,51,0)], [String.fromCharCode(120,95,54,95,108,111,103,105,110,0),String.fromCharCode(111,112,99,111,100,101,115,95,112,95,51,52,0)]]);
       let mbbidl = String.fromCharCode(108,98,108,95,99,95,53,57,0);
         liveE = new Map([[`${liveE.size}`, mbbidl.length & 1]]);
      if ((mbbidl.length % 3) >= 4 || (mbbidl.length % (Math.max(7, liveE.size))) >= 3) {
          let filedN = String.fromCharCode(99,104,97,112,116,101,114,95,51,95,53,51,0);
          let headerX = 4.0;
         mbbidl += `${liveE.size}`;
         filedN = `${1 >> (Math.min(5, filedN.length))}`;
         headerX *= parseFloat(`${filedN.length}`);
      }
      if (mbbidl.length > 1) {
          let libruntimeexecutorA = String.fromCharCode(102,114,97,109,101,113,117,101,117,101,95,111,95,55,51,0);
          let fadfdeebbbfdabbbabdadfaaddaau = 0.0;
          let pagev = String.fromCharCode(115,101,116,98,105,116,95,113,95,56,57,0);
         liveE = new Map([[mbbidl, mbbidl.length >> (Math.min(libruntimeexecutorA.length, 2))]]);
         libruntimeexecutorA = "3";
         fadfdeebbbfdabbbabdadfaaddaau -= parseFloat(`${parseInt(`${fadfdeebbbfdabbbabdadfaaddaau}`) - 1}`);
         pagev = `${2 * parseInt(`${fadfdeebbbfdabbbabdadfaaddaau}`)}`;
      }
         mbbidl = `${mbbidl.length << (Math.min(Math.abs(2), 2))}`;
      let telemetryj = mbbidl == String.fromCharCode(111,53,100,115,100,52,0);
      do {
         mbbidl = `${mbbidl.length}`;
         if (telemetryj) {
            break;
         }
      } while ((1 < (mbbidl.length & 1) && 3 < (1 & mbbidl.length)) && telemetryj);
       let floatingE: Map<any, any> = new Map([[String.fromCharCode(97,95,55,56,95,109,111,122,97,114,116,0),778], [String.fromCharCode(112,95,57,55,0),535]]);
       let macauq: Map<any, any> = new Map([[String.fromCharCode(114,101,118,101,97,108,95,115,95,53,54,0),String.fromCharCode(115,112,114,105,110,103,95,111,95,54,54,0)], [String.fromCharCode(101,95,56,49,95,116,111,114,99,104,0),String.fromCharCode(107,95,56,50,95,104,101,97,114,116,98,101,97,116,0)]]);
      gdtadvF = `${parseInt(`${successG}`) / (Math.max(gdtadvF.length, 7))}`;
       let resultD = 3;
      if ((5 - resultD) <= 1) {
          let const_xT = String.fromCharCode(115,104,105,102,116,105,110,103,115,95,98,95,51,50,0);
          let colorsq = String.fromCharCode(109,95,49,48,48,95,117,112,100,97,116,105,110,103,0);
         resultD /= Math.max((const_xT == String.fromCharCode(84,0) ? resultD : const_xT.length), 3);
         colorsq += `${colorsq.length + 3}`;
      }
      let indicatorB = 6887715 <= resultD;
      do {
         resultD += 1;
         if (indicatorB) {
            break;
         }
      } while ((3 > resultD) && indicatorB);
      for (let a = 0; a < 2; a++) {
         resultD /= Math.max(resultD & 1, 5);
      }
      product8.push((String.fromCharCode(65,0) == popuph ? parseInt(`${successG}`) : popuph.length));
      product8.push(2 & parseInt(`${splash9}`));
   if ((2.19 + imagemanagerf) <= 5.40) {
      imagemanagerf *= parseFloat(`${popuph.length % 2}`);
   }
       let brightnessi = 0.0;
         brightnessi -= parseFloat(`${3}`);
         brightnessi /= Math.max(parseFloat(`${parseInt(`${brightnessi}`) & parseInt(`${brightnessi}`)}`), 1);
      while (brightnessi <= brightnessi) {
          let crossL: Array<any> = [414, 786];
          let whitec = 3;
         brightnessi /= Math.max(2, parseFloat(`${whitec % (Math.max(crossL.length, 3))}`));
         break;
      }
      product8.push(mailk.length % (Math.max(popuph.length, 6)));
       let directE = 4.0;
       let downC = 1.0;
       let malaysiaU = 4.0;
          let orangeR: Map<any, any> = new Map([[String.fromCharCode(109,111,100,117,108,117,115,95,116,95,53,55,0),false ], [String.fromCharCode(100,120,103,105,95,99,95,50,50,0),false ]]);
         downC *= parseInt(`${downC}`) >> (Math.min(Math.abs(parseInt(`${malaysiaU}`)), 1));
         orangeR = new Map([[`${orangeR.size}`, 1 >> (Math.min(1, Math.abs(orangeR.size)))]]);
         downC *= 1 / (Math.max(2, parseInt(`${downC}`)));
      if (2.100 < malaysiaU) {
         directE /= Math.max(5, parseInt(`${directE}`) ^ parseInt(`${downC}`));
      }
         malaysiaU += parseInt(`${downC}`) << (Math.min(5, Math.abs(2)));
         malaysiaU += parseInt(`${directE}`);
         malaysiaU /= Math.max(3, parseInt(`${directE}`) >> (Math.min(Math.abs(parseInt(`${malaysiaU}`)), 2)));
          let codegenb = 0.0;
          let short_4U = String.fromCharCode(115,112,101,101,100,117,112,95,54,95,53,54,0);
          let anytimeZ: Array<any> = [755, 9];
         downC /= Math.max(3 >> (Math.min(1, short_4U.length)), 2);
         codegenb *= 2;
         short_4U += `${anytimeZ.length}`;
         anytimeZ = [2];
      while (3.68 <= (malaysiaU - 3.29) || (directE - 3.29) <= 5.91) {
         directE *= parseInt(`${malaysiaU}`) % (Math.max(8, parseInt(`${downC}`)));
         break;
      }
         malaysiaU += 3;
      product8.push(parseInt(`${directE}`) << (Math.min(Math.abs(3), 1)));
       let leftt = false;
       let floaterc = String.fromCharCode(98,95,50,57,95,109,111,100,117,108,97,116,101,0);
       let casty: Map<any, any> = new Map([[String.fromCharCode(109,121,114,110,100,95,119,95,56,55,0),230], [String.fromCharCode(100,101,102,108,97,116,101,95,117,95,49,48,0),179]]);
         leftt = casty.size > 6;
         casty = new Map([[`${casty.size}`, 3 << (Math.min(2, Math.abs(casty.size)))]]);
      if (!leftt) {
         casty.set(`${floaterc}`, floaterc.length);
      }
      let hoverG = floaterc == String.fromCharCode(109,51,104,110,112,53,106,52,0);
      do {
         floaterc += `${(2 & (leftt ? 4 : 2))}`;
         if (hoverG) {
            break;
         }
      } while (hoverG && (!floaterc.endsWith(`${leftt}`)));
          let n_lockl = false;
         casty = new Map([[`${casty.size}`, ((n_lockl ? 3 : 4) << (Math.min(Math.abs(1), 4)))]]);
      for (let s = 0; s < 1; s++) {
         floaterc += `${(floaterc == String.fromCharCode(82,0) ? floaterc.length : (leftt ? 5 : 1))}`;
      }
       let helperq = 5.0;
       let statsk = 0.0;
       let libloggerL = 4;
       let nativemodule8 = 3;
          let mbridgep: Map<any, any> = new Map([[String.fromCharCode(117,110,114,101,102,99,111,117,110,116,95,115,95,52,57,0),true ], [String.fromCharCode(105,95,53,95,116,111,114,99,104,0),true ]]);
          let libcxxcomponentsA = String.fromCharCode(111,95,51,52,95,97,117,116,111,114,101,102,114,101,115,104,0);
         nativemodule8 ^= parseInt(`${statsk}`);
         mbridgep = new Map([[`${mbridgep.size}`, libcxxcomponentsA.length / (Math.max(7, mbridgep.size))]]);
         libcxxcomponentsA += `${libcxxcomponentsA.length / 2}`;
      hongkongf.push(parseInt(`${successG}`));
       let yinit_kc = 2.0;
       let leftp = String.fromCharCode(105,105,114,102,105,108,116,101,114,95,100,95,54,0);
       let libreactnativejniF = true;
          let benefitT = 2.0;
         leftp = `${(leftp.length & (libreactnativejniF ? 2 : 3))}`;
         benefitT /= Math.max(parseInt(`${benefitT}`) % (Math.max(2, parseInt(`${benefitT}`))), 3);
      if (leftp.length < 2) {
         yinit_kc -= parseFloat(`${parseInt(`${yinit_kc}`) & leftp.length}`);
      }
          let small4: Array<any> = [150, 55];
          let valuesm = 0;
          let mappingL = String.fromCharCode(99,117,118,105,100,95,110,95,55,57,0);
         leftp = `${parseInt(`${yinit_kc}`)}`;
         small4 = [1];
         valuesm |= valuesm * 1;
         mappingL += "1";
      while (!libreactnativejniF) {
         libreactnativejniF = 67 >= leftp.length;
         break;
      }
         libreactnativejniF = yinit_kc <= 79.94 || !libreactnativejniF;
         leftp += `${((libreactnativejniF ? 5 : 1) | parseInt(`${yinit_kc}`))}`;
         libreactnativejniF = leftp.length < 33;
       let containerg = 2.0;
       let lange = 4.0;
          let incidentl = String.fromCharCode(97,112,112,97,114,101,110,116,95,109,95,54,53,0);
          let videoj: Array<any> = [42, 613, 971];
          let yingr = 2;
         containerg -= parseFloat(`${3 & videoj.length}`);
         incidentl = `${incidentl.length}`;
         videoj.push((String.fromCharCode(71,0) == incidentl ? yingr : incidentl.length));
         yingr /= Math.max(incidentl.length, 3);
      hongkongf.push(((libreactnativejniF ? 4 : 4) % (Math.max(hongkongf.length, 5))));
      successG -= parseFloat(`${3 * hongkongf.length}`);
   while ((1 * hongkongf.length) <= 3 && (parseInt(`${splash9}`) + hongkongf.length) <= 1) {
      hongkongf.push(2);
      break;
   }
   let backgroundt = successG >= 5214369.0;
   do {
       let save1: Array<any> = [String.fromCharCode(106,95,55,52,95,116,108,117,116,0), String.fromCharCode(121,121,121,121,95,109,95,57,56,0), String.fromCharCode(99,111,109,97,110,100,95,55,95,50,48,0)];
       let applicationQ: Array<any> = [328, 339];
       let accepteds = String.fromCharCode(109,97,116,116,101,100,95,105,95,57,48,0);
       let favoriteU = String.fromCharCode(99,99,111,117,110,116,95,56,95,53,50,0);
       let network7 = 5;
      while (accepteds.endsWith(`${applicationQ.length}`)) {
         applicationQ = [3];
         break;
      }
         applicationQ = [applicationQ.length - 3];
          let temperatureq = String.fromCharCode(103,110,111,95,55,95,52,49,0);
         favoriteU += "2 + network7";
         temperatureq += `${temperatureq.length + temperatureq.length}`;
      let interstitialv = 5392649 <= network7;
      do {
          let umeng4 = 2;
          let filledQ = String.fromCharCode(116,95,49,48,95,104,97,110,100,108,105,110,103,0);
         network7 %= Math.max(3, save1.length << (Math.min(Math.abs(2), 4)));
         umeng4 /= Math.max(1, umeng4 / (Math.max(6, filledQ.length)));
         filledQ += `${umeng4}`;
         if (interstitialv) {
            break;
         }
      } while ((1 >= (favoriteU.length | network7)) && interstitialv);
      let thumbnail1 = accepteds.length >= 5194632;
      do {
         accepteds += `${accepteds.length | 1}`;
         if (thumbnail1) {
            break;
         }
      } while ((save1.length >= accepteds.length) && thumbnail1);
         save1 = [2];
          let borderlessO = 5.0;
          let animationsk = 3.0;
         favoriteU += `${accepteds.length / 2}`;
         borderlessO *= parseInt(`${animationsk}`);
         favoriteU += "3";
          let tailU = String.fromCharCode(114,95,49,49,95,99,111,110,118,101,114,116,105,98,108,101,0);
          let sheetr = 0;
         network7 &= 1;
         tailU += "3";
         sheetr *= (tailU == String.fromCharCode(70,0) ? tailU.length : sheetr);
         save1.push(2);
       let huaweiS = false;
       let buttonp = false;
         network7 *= 1 + save1.length;
      for (let v = 0; v < 1; v++) {
         network7 += 2;
      }
      let strv = accepteds == String.fromCharCode(114,120,55,49,120,50,116,0);
      do {
         accepteds = `${(favoriteU == String.fromCharCode(78,0) ? applicationQ.length : favoriteU.length)}`;
         if (strv) {
            break;
         }
      } while (((network7 >> (Math.min(Math.abs(1), 5))) <= 3 && 5 <= (network7 >> (Math.min(Math.abs(1), 5)))) && strv);
      if ((network7 % 4) >= 3) {
         network7 += ((huaweiS ? 1 : 3) >> (Math.min(save1.length, 5)));
      }
      successG += parseFloat(`${3}`);
      if (backgroundt) {
         break;
      }
   } while (backgroundt && (5 < (4 | gdtadvF.length) && (2.5 - successG) < 5.26));
   for (let o = 0; o < 2; o++) {
      product8 = [parseInt(`${imagemanagerf}`)];
   }
       let moviesN = 4.0;
       let hookA: Array<any> = [551, 854];
       let libyogac = 5.0;
         libyogac /= Math.max(hookA.length, 5);
          let yellowv = String.fromCharCode(97,100,106,117,115,116,95,55,95,53,55,0);
         hookA.push(parseInt(`${moviesN}`) * 1);
         yellowv = `${yellowv.length}`;
      while (2.89 == (hookA.length * moviesN) && 4.24 == (moviesN * 2.89)) {
         moviesN -= parseInt(`${libyogac}`);
         break;
      }
      if ((1 % (Math.max(10, hookA.length))) <= 2 && 1.51 <= (hookA.length / (Math.max(5, libyogac)))) {
         libyogac *= parseInt(`${moviesN}`) / 1;
      }
      for (let y = 0; y < 2; y++) {
         hookA.push(2);
      }
      for (let u = 0; u < 2; u++) {
         hookA.push(3);
      }
      if (moviesN > hookA.length) {
         hookA = [parseInt(`${moviesN}`)];
      }
      if (2 <= hookA.length) {
         hookA = [2 & parseInt(`${moviesN}`)];
      }
      for (let w = 0; w < 2; w++) {
         hookA.push(hookA.length);
      }
      popuph += `${hookA.length}`;
   for (let j = 0; j < 1; j++) {
      product8.push(3 / (Math.max(5, product8.length)));
   }
   for (let r = 0; r < 1; r++) {
      successG *= parseFloat(`${parseInt(`${splash9}`) << (Math.min(mailk.length, 1))}`);
   }
      imagemanagerf -= parseFloat(`${mailk.length / 1}`);
      hongkongf = [(String.fromCharCode(106,0) == gdtadvF ? parseInt(`${video0}`) : gdtadvF.length)];
       let minimizeX = String.fromCharCode(109,117,108,116,105,112,108,101,114,95,116,95,50,48,0);
      while (minimizeX == String.fromCharCode(57,0)) {
         minimizeX = `${(minimizeX == String.fromCharCode(56,0) ? minimizeX.length : minimizeX.length)}`;
         break;
      }
      let minivodl = String.fromCharCode(53,100,106,119,120,97,95,117,54,0) == minimizeX;
      do {
         minimizeX = `${minimizeX.length}`;
         if (minivodl) {
            break;
         }
      } while ((minimizeX.length <= minimizeX.length) && minivodl);
      if (minimizeX == minimizeX) {
          let ynewinterstitialC: Map<any, any> = new Map([[String.fromCharCode(104,114,101,97,100,95,111,95,56,54,0),false ], [String.fromCharCode(107,95,57,57,95,97,118,99,111,100,101,99,114,101,115,0),true ], [String.fromCharCode(114,95,52,57,95,105,108,101,97,118,101,0),false ]]);
          let countdownp = String.fromCharCode(99,111,110,118,111,108,117,116,105,111,110,95,121,95,49,53,0);
          let inviteJ = 0.0;
          let libjsiE: Array<any> = [String.fromCharCode(120,95,53,48,95,99,111,118,101,114,97,103,101,0), String.fromCharCode(112,95,52,57,95,100,101,98,117,103,0), String.fromCharCode(97,97,99,99,111,100,101,114,95,98,95,55,49,0)];
         minimizeX = `${2 + countdownp.length}`;
         ynewinterstitialC.set(`${libjsiE.length}`, libjsiE.length);
         countdownp = `${parseInt(`${inviteJ}`)}`;
         inviteJ += libjsiE.length;
      }
      product8 = [2 >> (Math.min(3, product8.length))];
      successG -= parseFloat(`${2}`);
       let background3 = 0.0;
       let selectedu = String.fromCharCode(105,100,99,116,120,108,108,109,95,119,95,57,52,0);
       let policyp = String.fromCharCode(108,105,98,115,112,101,101,120,95,56,95,52,56,0);
      while (5.82 > background3) {
          let libmapbufferjniB = String.fromCharCode(98,121,112,97,115,115,95,115,95,57,56,0);
          let short_pR = 2;
          let referrerd = String.fromCharCode(105,115,97,108,110,117,109,95,98,95,49,51,0);
          let activeO = 3.0;
         background3 += parseFloat(`${3}`);
         libmapbufferjniB += "1";
         short_pR <<= Math.min(4, Math.abs(3 - libmapbufferjniB.length));
         referrerd += `${parseInt(`${activeO}`)}`;
         activeO += parseFloat(`${referrerd.length + 2}`);
         break;
      }
          let loadingW: Array<any> = [151, 595, 911];
          let middleb = String.fromCharCode(116,95,53,56,95,119,105,110,100,111,119,0);
         background3 *= (parseFloat(`${middleb == String.fromCharCode(80,0) ? middleb.length : loadingW.length}`));
      for (let m = 0; m < 2; m++) {
         policyp += `${selectedu.length / (Math.max(policyp.length, 1))}`;
      }
         background3 += parseFloat(`${parseInt(`${background3}`) * policyp.length}`);
          let custome = String.fromCharCode(109,105,110,117,116,101,115,95,115,95,54,53,0);
          let libavutils = String.fromCharCode(121,95,53,53,95,103,111,108,100,101,110,0);
          let username9: Map<any, any> = new Map([[String.fromCharCode(112,97,103,105,110,97,116,105,111,110,95,56,95,54,53,0),false ], [String.fromCharCode(120,95,52,49,95,118,101,114,105,102,121,0),true ]]);
         selectedu = `${libavutils.length | username9.size}`;
         custome = `${custome.length}`;
         libavutils = `${(String.fromCharCode(74,0) == custome ? custome.length : custome.length)}`;
       let searchm = String.fromCharCode(99,111,110,99,97,116,101,110,97,116,101,100,95,115,95,56,57,0);
         selectedu += `${3 * parseInt(`${background3}`)}`;
          let upgradev: Map<any, any> = new Map([[String.fromCharCode(98,108,97,110,107,95,48,95,50,48,0),449], [String.fromCharCode(102,95,49,52,0),809]]);
          let modelsw = String.fromCharCode(120,95,52,57,95,109,101,109,111,114,121,115,116,114,101,97,109,0);
         selectedu = `${modelsw.length}`;
         upgradev = new Map([[`${upgradev.size}`, upgradev.size]]);
         modelsw = `${upgradev.size}`;
         policyp += `${selectedu.length}`;
      mailk = `${product8.length}`;
       let mimor = false;
       let resend1: Array<any> = [185, 122, 468];
         mimor = !mimor;
      let otherO = 5398513 >= resend1.length;
      do {
          let footballk = 5;
         resend1.push(3);
         footballk &= footballk;
         if (otherO) {
            break;
         }
      } while ((mimor) && otherO);
      for (let v = 0; v < 2; v++) {
          let classeso = String.fromCharCode(101,116,104,101,114,115,99,97,110,95,54,95,57,51,0);
          let detaild = String.fromCharCode(98,111,119,108,105,110,103,95,99,95,53,50,0);
         resend1.push(2);
         classeso += `${detaild.length}`;
         detaild = `${classeso.length << (Math.min(detaild.length, 5))}`;
      }
         mimor = resend1.includes(mimor);
         mimor = (((!mimor ? 7 : resend1.length) + resend1.length) > 7);
         resend1 = [(2 / (Math.max(10, (mimor ? 5 : 1))))];
      successG /= Math.max(1, parseFloat(`${2}`));

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
