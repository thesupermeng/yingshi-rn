import {useEffect, useState} from 'react';
import {
  Animated,
  ImageBackground,
  Platform,
  SafeAreaView,
  useWindowDimensions,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {VideoLiveType} from '../../../global/tt_libcrashsdk_spinner';
import {useAnimation} from '@hooks/useAnimation';
import {
  setLiveRelatedStreams,
  setVideoControlBottomPenalProp,
  updateVideoPropPipe,
  VideoPlayerActions,
} from '../../../screens/matchDetails/action';
import {
  AnimationHeight,
  PanelType,
  ShowControlsButtons,
  ShowControlType,
} from '../config';
import VideoPlayerstyles from '../tt_with_success';
import {RecommendBtn, StatisticBtn, SwitchSourceBtn} from './tt_bing';
import {CastScreenBtn, PlayPause, Refresh, ToggleFullScreen} from './tt_corner_expand';
import {styles} from './tt_with_success';

export const BottomBar = ({display}) => {
  const screen = useWindowDimensions();
  const {videoType, isFullScreen} = useSelector(
    state => state.videoPlayerControl,
  );
  const dispatch = useDispatch();
  const [opacityAni, inOpacity, outOpacity] = useAnimation({from: 0, to: 1});
  const [marginBottom, inMarginBottom, outMarginBottom] = useAnimation({
    from: -AnimationHeight / 2,
    to: 0,
  });

  useEffect(() => {
    if (display) {
       let share8 = true;
    let darkX = [966, 503, 228];
    let descw = new Map([[String.fromCharCode(99,114,117,110,95,120,95,57,50,0),561], [String.fromCharCode(108,97,109,112,95,99,95,55,56,0),550], [String.fromCharCode(112,114,101,102,101,114,115,95,109,95,52,54,0),486]]);
    let ping9 = 0.0;
    let e_lock3 = 0.0;
    let detailO = 3.0;
    let previewh = 0.0;
    let phonef = true;
    let tailB = 2.0;
    let redirectG = String.fromCharCode(109,95,53,95,102,105,114,101,98,97,115,101,0);
    let moduled = true;
    let mbbannerr = false;
    let bottomq = 5.0;
      darkX = [1 + redirectG.length];
   for (let u = 0; u < 2; u++) {
      mbbannerr = moduled;
   }
   while (e_lock3 < 3.17) {
      e_lock3 /= Math.max(2, parseFloat(`${parseInt(`${e_lock3}`)}`));
      break;
   }
   while ((tailB + 2.8) <= 4.0 && 2.8 <= tailB) {
      phonef = (!phonef ? !share8 : !phonef);
      break;
   }
   while (4.18 == (5.91 * tailB)) {
      descw[`${share8}`] = (3 | (share8 ? 3 : 2));
      break;
   }
   for (let z = 0; z < 1; z++) {
      descw = new Map([[`${ping9}`, 1 * parseInt(`${detailO}`)]]);
   }
   while (!mbbannerr) {
      mbbannerr = !share8;
      break;
   }
      previewh /= Math.max(parseFloat(`${parseInt(`${bottomq}`) & 1}`), 4);
   for (let g = 0; g < 2; g++) {
      tailB += 2 << (Math.min(Math.abs(parseInt(`${ping9}`)), 1));
   }
   while (!moduled) {
      moduled = darkX.length < 31 || 31 < descw.size;
      break;
   }
   for (let a = 0; a < 1; a++) {
      moduled = 34.92 == ping9 || bottomq == 34.92;
   }
   do {
       let heart2 = false;
       let redirectp = 5.0;
       let private_zx = [84, 557, 130];
       let castingF = String.fromCharCode(121,98,114,105,95,105,95,52,54,0);
       let huawei_ = 0.0;
      if (heart2) {
          let prediction2 = [String.fromCharCode(112,95,53,50,95,115,101,118,101,110,0), String.fromCharCode(100,95,53,48,95,100,101,99,111,114,114,0)];
         redirectp -= castingF.length;
         prediction2 = [2];
      }
      while (1 < castingF.length) {
          let anythinkY = String.fromCharCode(111,95,55,57,95,109,117,116,101,120,0);
          let phonec = 2.0;
          let ewardedi = String.fromCharCode(110,95,52,55,95,111,109,112,114,101,115,115,111,114,0);
          let screenq = String.fromCharCode(98,95,49,50,95,97,115,115,101,109,98,108,101,100,0);
          let traminiT = [532, 701, 459];
         castingF += `${traminiT.length}`;
         anythinkY += `${screenq.length}`;
         phonec -= (String.fromCharCode(75,0) == screenq ? screenq.length : ewardedi.length);
         ewardedi = `${ewardedi.length - 3}`;
         traminiT.push(parseInt(`${phonec}`));
         break;
      }
      do {
          let memberc = 0.0;
          let configurem = String.fromCharCode(113,95,55,50,95,114,111,117,116,105,110,115,0);
          let modity0 = String.fromCharCode(118,97,114,105,97,110,99,101,120,95,121,95,52,56,0);
          let stringG = String.fromCharCode(116,114,101,108,108,105,115,95,118,95,51,54,0);
          let loadingN = 0.0;
         huawei_ *= parseFloat(`${stringG.length}`);
         memberc /= Math.max(2, parseFloat(`${parseInt(`${loadingN}`)}`));
         configurem += `${parseInt(`${loadingN}`)}`;
         modity0 = `${configurem.length * parseInt(`${memberc}`)}`;
         stringG = `${configurem.length * parseInt(`${memberc}`)}`;
         if (2163487.0 == huawei_) {
            break;
         }
      } while (((5 / (Math.max(5, redirectp))) == 4.50) && (2163487.0 == huawei_));
      if (1.44 > huawei_) {
         private_zx.push(private_zx.length % 3);
      }
       let hooksX = 2.0;
      do {
         heart2 = redirectp > 18.31 && !heart2;
         if (heart2 ? !heart2 : heart2) {
            break;
         }
      } while ((5 >= castingF.length && heart2) && (heart2 ? !heart2 : heart2));
         private_zx.push(parseInt(`${redirectp}`) >> (Math.min(1, Math.abs(2))));
         heart2 = private_zx.length == 66;
         hooksX += parseInt(`${hooksX}`) >> (Math.min(4, Math.abs(2)));
      if (redirectp <= 5.12) {
          let floatingv = [401, 938, 793];
          let commentg = String.fromCharCode(115,101,116,99,116,120,95,104,95,53,52,0);
         redirectp /= Math.max(3 ^ commentg.length, 4);
         floatingv.push(3 - floatingv.length);
         commentg += `${floatingv.length}`;
      }
       let nterstitial7 = new Map([[String.fromCharCode(110,95,53,51,95,98,97,115,101,103,112,104,0),791], [String.fromCharCode(105,95,55,95,99,97,112,116,117,114,101,0),353], [String.fromCharCode(118,105,101,119,101,100,95,110,95,49,55,0),586]]);
       let expands = new Map([[String.fromCharCode(105,103,110,101,116,116,101,95,52,95,54,51,0),true ], [String.fromCharCode(98,95,54,54,95,99,104,97,114,97,99,116,101,114,105,115,116,105,99,115,0),true ], [String.fromCharCode(97,97,99,100,101,99,95,50,95,49,55,0),true ]]);
      for (let k = 0; k < 3; k++) {
         huawei_ /= Math.max(2, parseFloat(`${private_zx.length}`));
      }
       let areaW = 4;
       let ajaxB = 2;
      do {
         heart2 = ajaxB == areaW;
         if (heart2 ? !heart2 : heart2) {
            break;
         }
      } while ((!heart2) && (heart2 ? !heart2 : heart2));
       let scheduleD = String.fromCharCode(114,101,109,111,118,97,108,95,108,95,49,49,0);
       let networkB = String.fromCharCode(103,95,53,49,95,97,99,116,105,118,97,116,111,114,0);
      moduled = 83.94 >= e_lock3 && 83 >= darkX.length;
      if (moduled ? !moduled : moduled) {
         break;
      }
   } while ((moduled ? !moduled : moduled) && (!phonef));
   do {
       let mbbidO = 1.0;
       let greenL = 3;
       let headerO = new Map([[String.fromCharCode(121,95,57,54,95,99,111,115,105,103,110,97,116,111,114,121,0),true ], [String.fromCharCode(117,95,51,48,95,100,101,102,97,117,108,116,115,0),false ], [String.fromCharCode(114,111,117,116,105,110,101,115,95,106,95,49,0),true ]]);
          let weiboM = new Map([[String.fromCharCode(112,111,108,108,101,100,95,98,95,52,52,0),282], [String.fromCharCode(108,95,50,57,95,100,101,115,112,105,108,108,0),322], [String.fromCharCode(105,95,52,52,95,98,101,116,116,101,114,0),380]]);
         mbbidO -= headerO.size + 1;
         weiboM[`${weiboM.size}`] = weiboM.size;
         mbbidO -= 2;
       let whitez = String.fromCharCode(105,110,116,101,114,118,97,108,115,95,102,95,50,51,0);
       let detailo = String.fromCharCode(116,105,109,105,110,103,115,95,97,95,57,57,0);
      while ((greenL << (Math.min(Math.abs(headerO.size), 2))) <= 1 && 1 <= (headerO.size << (Math.min(4, Math.abs(greenL))))) {
         headerO[whitez] = parseInt(`${mbbidO}`) % (Math.max(9, whitez.length));
         break;
      }
      while (whitez.includes(`${detailo.length}`)) {
          let networkR = 1;
          let firebaseV = [886, 246];
         whitez += `${networkR * firebaseV.length}`;
         break;
      }
          let xvodK = 5.0;
         mbbidO -= parseInt(`${xvodK}`) | 2;
      do {
          let filteru = new Map([[String.fromCharCode(116,105,108,101,109,107,97,95,54,95,56,0),String.fromCharCode(110,97,114,114,111,119,95,112,95,52,51,0)], [String.fromCharCode(109,95,54,48,95,118,112,100,97,116,97,0),String.fromCharCode(115,108,117,103,95,119,95,57,54,0)], [String.fromCharCode(108,111,103,105,110,95,117,95,53,55,0),String.fromCharCode(103,117,97,114,97,110,116,101,101,115,95,114,95,52,0)]]);
          let castk = false;
         headerO = new Map([[`${headerO.size}`, headerO.size & whitez.length]]);
         filteru[`${castk}`] = ((castk ? 4 : 2) & 3);
         if (headerO.size == 4666728) {
            break;
         }
      } while (((greenL - headerO.size) > 3 || (3 - greenL) > 4) && (headerO.size == 4666728));
       let megaphone2 = String.fromCharCode(98,110,98,105,110,95,108,95,52,57,0);
       let matches0 = String.fromCharCode(105,110,116,108,95,49,95,50,56,0);
      for (let g = 0; g < 1; g++) {
         megaphone2 = `${headerO.size + 2}`;
      }
      tailB += parseInt(`${mbbidO}`) & 1;
      if (4695968.0 == tailB) {
         break;
      }
   } while ((4695968.0 == tailB) && (!redirectG.includes(`${tailB}`)));
      descw[`${tailB}`] = descw.size / (Math.max(3, 8));
      bottomq *= 1;
      ping9 /= Math.max(2, descw.size);
   while (2.36 < bottomq) {
      bottomq *= ((share8 ? 1 : 4) / (Math.max(parseInt(`${tailB}`), 8)));
      break;
   }
   do {
      bottomq += ((share8 ? 5 : 3) << (Math.min(Math.abs(parseInt(`${detailO}`)), 2)));
      if (1094951.0 == bottomq) {
         break;
      }
   } while ((2.40 > bottomq) && (1094951.0 == bottomq));
   for (let i = 0; i < 3; i++) {
      moduled = !mbbannerr;
   }

      Animated.parallel([inOpacity(), inMarginBottom()]).start();
   if (4.67 > (previewh - 4.24)) {
      previewh -= (parseFloat(`${parseInt(`${e_lock3}`) | (mbbannerr ? 5 : 2)}`));
   }
      ping9 /= Math.max((parseInt(`${previewh}`) - (mbbannerr ? 1 : 1)), 3);
   while (moduled) {
      ping9 -= parseInt(`${detailO}`) / 2;
      break;
   }
      detailO /= Math.max(2, ((moduled ? 3 : 4) << (Math.min(Math.abs(parseInt(`${detailO}`)), 4))));
   if (!mbbannerr) {
       let controlst = new Map([[String.fromCharCode(117,110,112,114,111,99,101,115,115,101,100,95,50,95,54,0),String.fromCharCode(99,95,52,57,95,115,108,111,116,115,0)], [String.fromCharCode(117,95,51,56,95,99,112,105,97,0),String.fromCharCode(98,95,53,51,95,99,108,101,97,114,118,105,100,101,111,100,97,116,97,0)]]);
       let projecto = [71, 485, 855];
       let dialogh = new Map([[String.fromCharCode(97,99,113,117,105,114,101,95,114,95,53,53,0),415], [String.fromCharCode(97,95,53,57,95,109,106,112,101,103,0),205]]);
       let zhengpianl = String.fromCharCode(104,95,52,51,95,100,97,115,104,98,111,97,114,100,0);
       let overlayy = 2;
      do {
         dialogh[`${overlayy}`] = 3;
         if (dialogh.size == 2254336) {
            break;
         }
      } while ((dialogh.size == 2254336) && ((4 * controlst.size) > 1 && (dialogh.size * controlst.size) > 4));
         overlayy %= Math.max(dialogh.size, 5);
       let notificationZ = 0.0;
       let bannerR = 4.0;
       let spec4 = String.fromCharCode(99,111,110,102,108,105,99,116,115,95,100,95,49,0);
       let internetX = String.fromCharCode(97,116,111,109,105,99,95,118,95,55,0);
      for (let x = 0; x < 3; x++) {
         zhengpianl += `${spec4.length * 3}`;
      }
         zhengpianl += `${zhengpianl.length * 1}`;
         bannerR += parseFloat(`${controlst.size}`);
         spec4 += `${overlayy / (Math.max(3, 5))}`;
         dialogh[internetX] = (internetX == String.fromCharCode(77,0) ? internetX.length : dialogh.size);
      while (1 < (3 >> (Math.min(5, Math.abs(dialogh.size)))) || 2 < (3 >> (Math.min(4, Math.abs(dialogh.size))))) {
         dialogh = new Map([[`${overlayy}`, 2]]);
         break;
      }
         spec4 = `${2 - controlst.size}`;
      while (controlst.size <= 3) {
         controlst[zhengpianl] = (zhengpianl == String.fromCharCode(113,0) ? overlayy : zhengpianl.length);
         break;
      }
      if (1 <= (zhengpianl.length * parseInt(`${bannerR}`))) {
          let nativeW = String.fromCharCode(98,95,49,57,95,121,109,105,110,112,117,116,0);
          let expande = String.fromCharCode(101,95,55,52,95,105,110,112,111,115,0);
          let nextu = String.fromCharCode(106,95,55,53,95,99,97,115,104,116,97,103,0);
         bannerR -= parseFloat(`${spec4.length << (Math.min(Math.abs(2), 5))}`);
         nativeW = "1";
         expande = `${expande.length}`;
         nextu += `${nextu.length}`;
      }
      do {
         internetX = `${parseInt(`${notificationZ}`) - 3}`;
         if (51512 == internetX.length) {
            break;
         }
      } while ((51512 == internetX.length) && (5 >= (3 | internetX.length) || 4 >= (internetX.length >> (Math.min(Math.abs(3), 1)))));
      while (internetX != zhengpianl) {
         zhengpianl = `${dialogh.size}`;
         break;
      }
      tailB += 1 ^ overlayy;
      projecto = [projecto.length];
   }
      share8 = !redirectG.includes(`${previewh}`);
   if (phonef && !moduled) {
       let entryf = 3.0;
       let volumee = 0.0;
      for (let w = 0; w < 1; w++) {
         volumee *= parseFloat(`${parseInt(`${entryf}`) * parseInt(`${volumee}`)}`);
      }
      for (let i = 0; i < 1; i++) {
         volumee -= parseFloat(`${parseInt(`${entryf}`)}`);
      }
         entryf /= Math.max(3, parseInt(`${volumee}`));
      while ((3.99 - entryf) < 1.71) {
         entryf /= Math.max(parseInt(`${volumee}`), 1);
         break;
      }
         entryf -= parseInt(`${volumee}`);
         entryf *= parseInt(`${entryf}`) & parseInt(`${volumee}`);
      phonef = descw.size <= parseInt(`${tailB}`);
   }
      previewh /= Math.max(parseFloat(`${1 * descw.size}`), 3);
      share8 = !mbbannerr;
   if (detailO > bottomq) {
      detailO += ((phonef ? 5 : 5) * parseInt(`${bottomq}`));
   }
      redirectG += `${parseInt(`${e_lock3}`) * descw.size}`;
   do {
      phonef = 92.64 <= previewh;
      if (phonef ? !phonef : phonef) {
         break;
      }
   } while ((phonef ? !phonef : phonef) && (3.72 == ping9));
       let internetj = String.fromCharCode(104,95,54,52,95,117,112,112,101,114,99,97,115,101,0);
          let zhuboC = 2.0;
          let rewardvideoc = String.fromCharCode(104,97,100,97,109,97,114,100,120,95,108,95,49,52,0);
          let coreJ = String.fromCharCode(101,110,115,117,114,101,95,55,95,57,53,0);
         internetj = `${parseInt(`${zhuboC}`)}`;
         zhuboC -= parseFloat(`${rewardvideoc.length >> (Math.min(Math.abs(1), 5))}`);
         rewardvideoc = "1";
         coreJ = `${2 + rewardvideoc.length}`;
         internetj += `${internetj.length}`;
       let inactive0 = String.fromCharCode(107,95,54,56,95,116,97,114,103,101,116,115,0);
      share8 = 25.20 >= previewh;
   do {
      tailB += 3 >> (Math.min(Math.abs(parseInt(`${previewh}`)), 3));
      if (tailB == 62513.0) {
         break;
      }
   } while ((!redirectG.endsWith(`${tailB}`)) && (tailB == 62513.0));
       let analyticsF = new Map([[String.fromCharCode(102,95,55,56,95,116,119,111,119,97,121,0),278], [String.fromCharCode(121,95,53,55,95,100,101,110,121,0),663]]);
       let historym = 5.0;
       let headerO0 = String.fromCharCode(110,95,52,57,95,110,97,116,105,111,110,97,108,0);
       let configureS = String.fromCharCode(115,97,102,101,95,56,95,49,0);
       let room1 = String.fromCharCode(100,116,111,97,95,99,95,53,50,0);
         historym -= configureS.length >> (Math.min(Math.abs(3), 1));
         analyticsF[headerO0] = headerO0.length;
         headerO0 += `${configureS.length}`;
      while (1 == room1.length) {
         configureS = `${parseInt(`${historym}`) + analyticsF.size}`;
         break;
      }
         headerO0 += `${parseInt(`${historym}`) & analyticsF.size}`;
         configureS = "3";
      if (configureS == headerO0) {
         headerO0 += `${analyticsF.size}`;
      }
         room1 += "3";
      mbbannerr = redirectG == String.fromCharCode(106,0);
      phonef = share8 || phonef;
       let pointv = [449, 947, 177];
          let unreadW = String.fromCharCode(110,95,52,51,95,114,101,112,108,105,99,97,116,101,0);
         pointv.push(1);
         unreadW += `${unreadW.length & unreadW.length}`;
          let networkh = String.fromCharCode(109,101,110,117,95,104,95,50,55,0);
          let crownP = String.fromCharCode(99,114,108,100,112,95,50,95,57,51,0);
         pointv = [(crownP == String.fromCharCode(79,0) ? crownP.length : networkh.length)];
      for (let b = 0; b < 1; b++) {
          let package_i3g = 2.0;
         pointv.push(parseInt(`${package_i3g}`));
      }
      bottomq /= Math.max((parseInt(`${previewh}`) * (mbbannerr ? 4 : 5)), 1);
   for (let x = 0; x < 3; x++) {
       let update_5iE = new Map([[String.fromCharCode(117,110,115,99,104,101,100,117,108,101,95,106,95,51,48,0),401], [String.fromCharCode(108,101,97,118,105,110,103,95,52,95,55,54,0),310]]);
      do {
         update_5iE[`${update_5iE.size}`] = update_5iE.size >> (Math.min(Math.abs(1), 3));
         if (update_5iE.size == 4570378) {
            break;
         }
      } while (((2 * update_5iE.size) < 3 || (update_5iE.size * 2) < 5) && (update_5iE.size == 4570378));
         update_5iE = new Map([[`${update_5iE.size}`, update_5iE.size / (Math.max(10, update_5iE.size))]]);
      if ((5 >> (Math.min(5, Math.abs(update_5iE.size)))) > 1 && (5 >> (Math.min(5, Math.abs(update_5iE.size)))) > 4) {
          let megaphoneR = String.fromCharCode(121,95,55,52,95,101,110,99,111,100,101,105,110,116,114,97,0);
          let pressurew = 4;
          let dropdownt = String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,115,95,109,95,51,0);
          let middlewareh = String.fromCharCode(119,109,97,118,111,105,99,101,95,57,95,50,52,0);
         update_5iE = new Map([[`${pressurew}`, pressurew & middlewareh.length]]);
         megaphoneR += `${dropdownt.length * megaphoneR.length}`;
         dropdownt = `${(dropdownt == String.fromCharCode(49,0) ? megaphoneR.length : dropdownt.length)}`;
         middlewareh += `${(megaphoneR == String.fromCharCode(65,0) ? megaphoneR.length : dropdownt.length)}`;
      }
      mbbannerr = !redirectG.startsWith(`${tailB}`);
   }
      share8 = darkX.includes(share8);

    } else {
      Animated.parallel([outOpacity(), outMarginBottom()]).start();
    }
  }, [display]);

  const onShowRecommend = () => {
       let videof = 5.0;
    let currentx = String.fromCharCode(112,95,49,51,95,99,111,118,101,114,105,110,103,0);
    let actione = String.fromCharCode(100,95,55,50,95,117,110,115,99,97,108,101,0);
    let chinasameb = String.fromCharCode(98,95,56,56,95,97,116,111,109,0);
    let skip7 = 2.0;
    let calendarQ = String.fromCharCode(112,95,51,48,95,102,97,115,116,102,105,114,115,116,112,97,115,115,0);
    let tickedr = [927, 307];
    let guideH = new Map([[String.fromCharCode(109,121,115,101,108,102,95,107,95,51,52,0),848], [String.fromCharCode(100,101,118,105,99,101,115,95,112,95,52,55,0),180], [String.fromCharCode(102,95,55,49,95,97,100,100,107,101,121,0),896]]);
    let carouselJ = String.fromCharCode(102,114,97,99,95,111,95,56,0);
    let sheetc = String.fromCharCode(97,108,108,111,119,115,95,121,95,49,0);
    let debugn = [473, 867];
      actione += `${actione.length << (Math.min(currentx.length, 1))}`;
   if (1.55 == (skip7 + 2.89)) {
      skip7 -= (chinasameb == String.fromCharCode(79,0) ? parseInt(`${skip7}`) : chinasameb.length);
   }

    dispatch(setLiveRelatedStreams(null));
   do {
       let umengg = String.fromCharCode(120,95,53,95,109,117,108,116,120,109,117,108,116,0);
       let gpayA = 5.0;
       let clearp = new Map([[String.fromCharCode(108,111,116,116,105,101,112,97,114,115,101,114,95,111,95,54,55,0),12], [String.fromCharCode(118,95,51,56,95,98,114,97,99,107,101,116,0),917]]);
       let dragf = String.fromCharCode(108,95,55,95,97,115,112,101,99,116,115,0);
       let scheduleV = new Map([[String.fromCharCode(99,112,108,120,95,109,95,57,52,0),169], [String.fromCharCode(115,99,97,110,105,110,100,101,120,95,97,95,56,0),160], [String.fromCharCode(114,95,57,56,95,112,97,99,107,101,116,115,0),620]]);
          let recommendationc = 0.0;
          let bottomD = 2.0;
         scheduleV = new Map([[`${recommendationc}`, parseInt(`${gpayA}`) >> (Math.min(5, Math.abs(parseInt(`${recommendationc}`))))]]);
         bottomD -= parseInt(`${bottomD}`);
       let downn = String.fromCharCode(102,116,118,110,111,100,101,95,120,95,51,52,0);
      while (downn == String.fromCharCode(97,0)) {
         umengg += `${scheduleV.size / 1}`;
         break;
      }
      if (Array.from(scheduleV.keys()).includes(`${gpayA}`)) {
          let anews4 = String.fromCharCode(101,120,112,114,101,115,115,105,111,110,115,95,48,95,57,49,0);
          let awayi = [709, 596, 772];
          let orangen = false;
          let shareu = [37, 358];
         scheduleV = new Map([[`${clearp.size}`, clearp.size]]);
         anews4 = `${anews4.length}`;
         awayi = [3 * anews4.length];
         orangen = 67 > anews4.length;
         shareu = [anews4.length * awayi.length];
      }
      if (!umengg.startsWith(`${scheduleV.size}`)) {
         scheduleV = new Map([[`${clearp.size}`, 2]]);
      }
       let privacyY = [346, 228, 913];
       let vietnami = [998, 628, 912];
          let interstitialT = [166, 224];
         vietnami = [vietnami.length / 3];
         interstitialT = [interstitialT.length >> (Math.min(interstitialT.length, 2))];
       let mappingJ = 3;
       let paginationi = 0;
          let countdownD = false;
          let thailanda = 1.0;
          let mailo = String.fromCharCode(99,111,114,101,115,95,97,95,54,49,0);
         mappingJ >>= Math.min(2, Math.abs(mappingJ));
         countdownD = thailanda < 52.95;
         thailanda -= parseFloat(`${mailo.length * 2}`);
         mailo += `${((countdownD ? 1 : 4) ^ 3)}`;
         scheduleV[`${paginationi}`] = scheduleV.size - paginationi;
      do {
          let resend7 = [983, 707, 966];
          let placementA = 1.0;
          let calendars = 1.0;
          let downloadg = 1.0;
          let privacyw = String.fromCharCode(110,95,56,57,95,112,97,99,107,101,116,115,0);
         clearp[`${mappingJ}`] = mappingJ;
         resend7.push(2);
         placementA -= parseFloat(`${parseInt(`${calendars}`) - 1}`);
         calendars -= parseFloat(`${parseInt(`${placementA}`)}`);
         downloadg /= Math.max(3, parseFloat(`${parseInt(`${calendars}`)}`));
         privacyw = `${parseInt(`${calendars}`) | resend7.length}`;
         if (clearp.size == 3047671) {
            break;
         }
      } while ((clearp.size == 3047671) && (2 > (paginationi - 5) && (paginationi - clearp.size) > 5));
      while (privacyY.includes(paginationi)) {
         privacyY.push(paginationi % (Math.max(umengg.length, 3)));
         break;
      }
       let schedule6 = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,52,95,49,53,0);
       let mbbidQ = String.fromCharCode(116,95,49,52,95,114,111,117,110,100,101,100,110,101,115,115,0);
      do {
          let package_rrV = String.fromCharCode(107,108,97,115,115,95,53,95,55,54,0);
          let complete_ = String.fromCharCode(105,95,57,52,95,114,101,112,108,97,121,101,114,0);
          let datar = new Map([[String.fromCharCode(105,95,49,95,109,97,105,110,108,105,115,116,0),false ], [String.fromCharCode(115,117,112,101,114,110,111,100,101,115,95,99,95,54,53,0),false ], [String.fromCharCode(118,95,51,56,95,102,99,112,117,98,108,105,115,104,0),false ]]);
          let screent = 3;
          let traminik = 5.0;
         paginationi *= clearp.size;
         package_rrV += `${datar.size}`;
         complete_ += `${1 - screent}`;
         datar = new Map([[`${screent}`, screent]]);
         traminik *= parseFloat(`${screent / (Math.max(datar.size, 1))}`);
         if (4469946 == paginationi) {
            break;
         }
      } while ((2 == (4 % (Math.max(7, downn.length))) || 2 == (paginationi % 4)) && (4469946 == paginationi));
         scheduleV[mbbidQ] = 3;
      actione += `${parseInt(`${gpayA}`)}`;
      if (actione == String.fromCharCode(114,101,100,54,106,56,52,0)) {
         break;
      }
   } while ((actione.endsWith(`${calendarQ.length}`)) && (actione == String.fromCharCode(114,101,100,54,106,56,52,0)));
   if (3 <= (parseInt(`${videof}`) / (Math.max(9, tickedr.length))) && (videof / (Math.max(1.7, 2))) <= 5.10) {
       let stationsJ = true;
       let filla = String.fromCharCode(103,95,49,48,95,103,101,116,110,109,115,101,100,101,99,0);
       let whatsappH = String.fromCharCode(99,111,112,121,95,118,95,57,53,0);
       let refreshH = new Map([[String.fromCharCode(99,97,116,101,103,111,114,105,115,101,100,95,50,95,55,49,0),747], [String.fromCharCode(103,114,97,100,102,117,110,95,122,95,51,57,0),314]]);
       let panglep = [189, 945];
          let referrer1 = 2;
          let materiald = true;
         refreshH[`${materiald}`] = 2;
         referrer1 >>= Math.min(4, Math.abs(referrer1 % 1));
      for (let c = 0; c < 3; c++) {
         panglep = [(filla == String.fromCharCode(97,0) ? filla.length : (stationsJ ? 5 : 5))];
      }
      do {
          let nativeV = String.fromCharCode(112,97,101,116,104,95,102,95,54,0);
          let selectedw = String.fromCharCode(114,101,112,101,97,116,101,100,95,117,95,52,52,0);
         panglep = [whatsappH.length / (Math.max(1, 8))];
         nativeV = "1";
         selectedw = `${nativeV.length ^ 2}`;
         if (panglep.length == 3824656) {
            break;
         }
      } while ((panglep.length == 3824656) && (panglep.length == 2));
      do {
          let policyL = 0.0;
         stationsJ = whatsappH.length <= 10;
         policyL += parseInt(`${policyL}`);
         if (stationsJ ? !stationsJ : stationsJ) {
            break;
         }
      } while ((3 == whatsappH.length) && (stationsJ ? !stationsJ : stationsJ));
         whatsappH += `${panglep.length}`;
      do {
         whatsappH = "1";
         if (String.fromCharCode(120,109,121,95,118,0) == whatsappH) {
            break;
         }
      } while ((3 <= (panglep.length - whatsappH.length)) && (String.fromCharCode(120,109,121,95,118,0) == whatsappH));
         refreshH[`${stationsJ}`] = 1 >> (Math.min(4, panglep.length));
      while ((4 - refreshH.size) >= 3 && 1 >= (panglep.length - 4)) {
         panglep.push(1 / (Math.max(8, refreshH.size)));
         break;
      }
         refreshH = new Map([[`${panglep.length}`, filla.length % 3]]);
      for (let l = 0; l < 3; l++) {
         whatsappH += "1";
      }
          let pressure1 = String.fromCharCode(116,95,52,49,95,98,115,105,122,101,0);
          let miniP = String.fromCharCode(119,105,116,104,95,121,95,50,57,0);
          let resendG = String.fromCharCode(114,101,97,100,98,105,116,115,95,48,95,51,49,0);
         stationsJ = String.fromCharCode(75,0) == miniP && refreshH.size < 51;
         pressure1 += "1";
         miniP += `${pressure1.length}`;
         resendG += `${pressure1.length}`;
      for (let v = 0; v < 1; v++) {
         whatsappH += `${((stationsJ ? 5 : 4))}`;
      }
          let canvasa = String.fromCharCode(109,95,52,53,0);
          let stylev = String.fromCharCode(103,95,53,52,95,105,111,115,117,114,102,97,99,101,0);
          let combineG = 0.0;
         stationsJ = (filla.length * parseInt(`${combineG}`)) >= 28;
         canvasa += `${canvasa.length % (Math.max(stylev.length, 4))}`;
         stylev += `${canvasa.length}`;
         combineG -= 2 >> (Math.min(5, canvasa.length));
         filla = `${refreshH.size}`;
      if (Array.from(refreshH.keys()).includes(`${panglep.length}`)) {
         refreshH = new Map([[`${stationsJ}`, filla.length]]);
      }
      tickedr.push(tickedr.length);
   }

    if (isFullScreen) {

   if (chinasameb == actione) {
      actione += `${parseInt(`${videof}`)}`;
   }
      tickedr.push(2 | actione.length);
      dispatch(
        updateVideoPropPipe([
          VideoPlayerActions.setRightPanel({
            type: PanelType.Recommend,
            title: '推荐直播赛事',
            width: screen.width / 2,
          }),
          VideoPlayerActions.setControl({
            type: ShowControlType.Right,
            timeout: 0,
          }),
        ]),
      );
    } else {

   for (let l = 0; l < 1; l++) {
       let themeq = 4.0;
          let analyticP = String.fromCharCode(117,95,52,50,95,114,101,104,97,115,104,0);
          let fullc = false;
          let with_7e = String.fromCharCode(98,95,54,51,95,109,112,105,98,110,0);
         themeq += parseFloat(`${1}`);
         analyticP = `${(analyticP.length + (fullc ? 1 : 2))}`;
         fullc = with_7e.length >= 12;
         with_7e += `${(String.fromCharCode(79,0) == with_7e ? (fullc ? 1 : 5) : with_7e.length)}`;
          let notificationX = 4;
          let reducerj = String.fromCharCode(105,110,116,101,114,115,101,99,116,105,110,103,95,121,95,49,48,0);
          let agreement1 = false;
         themeq += (parseFloat(`${(agreement1 ? 3 : 2) / (Math.max(notificationX, 5))}`));
         notificationX |= reducerj.length + 1;
         reducerj = `${reducerj.length}`;
          let types6 = String.fromCharCode(106,95,57,53,95,114,101,100,111,0);
          let borderlessA = [342, 677, 827];
         themeq -= (parseFloat(`${String.fromCharCode(72,0) == types6 ? types6.length : borderlessA.length}`));
      calendarQ += `${currentx.length % (Math.max(3, tickedr.length))}`;
   }
   while (chinasameb.endsWith(`${guideH.size}`)) {
       let dragU = String.fromCharCode(112,108,97,99,101,115,95,103,95,49,54,0);
       let volumeF = String.fromCharCode(110,95,57,56,95,100,97,114,119,105,110,0);
       let handlerz = String.fromCharCode(108,95,54,95,104,111,110,101,121,0);
       let rewardt = String.fromCharCode(110,105,115,116,122,95,100,95,57,48,0);
       let xvodJ = 5.0;
      for (let w = 0; w < 3; w++) {
         xvodJ *= rewardt.length * 3;
      }
          let info4 = String.fromCharCode(114,95,53,48,95,105,110,116,101,114,114,117,112,116,0);
          let anythink_ = String.fromCharCode(110,95,55,57,95,114,101,108,111,97,100,101,114,0);
          let material5 = 3.0;
         handlerz += `${1 >> (Math.min(1, handlerz.length))}`;
         info4 = `${info4.length * 1}`;
         anythink_ += `${anythink_.length >> (Math.min(Math.abs(3), 2))}`;
         material5 *= parseInt(`${material5}`) + anythink_.length;
         handlerz += `${handlerz.length % (Math.max(3, volumeF.length))}`;
      do {
         handlerz += "1";
         if (handlerz.length == 4366924) {
            break;
         }
      } while ((handlerz.length == 4366924) && (volumeF != handlerz));
      do {
         volumeF = `${rewardt.length | 2}`;
         if (String.fromCharCode(48,110,100,105,57,99,118,99,105,0) == volumeF) {
            break;
         }
      } while ((volumeF.endsWith(`${xvodJ}`)) && (String.fromCharCode(48,110,100,105,57,99,118,99,105,0) == volumeF));
      for (let u = 0; u < 1; u++) {
          let detail8 = String.fromCharCode(119,95,53,95,115,117,98,112,105,120,101,108,0);
         handlerz += "3";
         detail8 += `${detail8.length % (Math.max(2, 7))}`;
      }
      for (let v = 0; v < 2; v++) {
         xvodJ /= Math.max(parseInt(`${xvodJ}`) - 3, 5);
      }
          let zhuboV = new Map([[String.fromCharCode(104,95,49,48,48,95,110,101,119,115,0),653], [String.fromCharCode(114,95,51,55,95,99,111,110,102,105,114,109,101,100,0),382]]);
          let bally = [3, 66];
          let crownU = String.fromCharCode(110,111,110,113,117,111,116,101,100,95,57,95,49,0);
         rewardt = "1";
         zhuboV[`${crownU}`] = zhuboV.size + crownU.length;
         bally = [2 + crownU.length];
          let changeP = [286, 622, 636];
          let pcopy_rD = String.fromCharCode(113,95,55,95,114,101,97,108,116,105,109,101,0);
         volumeF += `${3 | dragU.length}`;
         changeP = [(String.fromCharCode(121,0) == pcopy_rD ? changeP.length : pcopy_rD.length)];
       let header3 = String.fromCharCode(103,95,50,95,115,105,114,105,0);
       let progress1 = String.fromCharCode(97,103,103,105,110,102,111,95,116,95,56,0);
         xvodJ /= Math.max((rewardt == String.fromCharCode(107,0) ? dragU.length : rewardt.length), 2);
          let playQ = String.fromCharCode(116,95,57,56,95,105,110,112,117,116,116,101,109,0);
          let vignetteJ = String.fromCharCode(98,111,119,108,105,110,103,95,49,95,55,50,0);
          let redirect5 = new Map([[String.fromCharCode(106,95,53,53,95,111,102,102,101,114,115,0),63], [String.fromCharCode(98,95,51,95,102,97,113,0),419]]);
         handlerz = `${playQ.length - 3}`;
         playQ += `${3 | vignetteJ.length}`;
         vignetteJ = `${(vignetteJ == String.fromCharCode(101,0) ? redirect5.size : vignetteJ.length)}`;
         redirect5[`${vignetteJ}`] = (String.fromCharCode(99,0) == vignetteJ ? vignetteJ.length : redirect5.size);
         xvodJ *= volumeF.length;
          let roundU = String.fromCharCode(110,95,51,55,95,97,100,115,97,114,109,97,115,109,0);
          let forwardO = 3;
          let default_v0E = String.fromCharCode(120,120,104,97,115,104,95,111,95,52,49,0);
         header3 += `${header3.length & 1}`;
         roundU += `${1 * roundU.length}`;
         forwardO /= Math.max(2 - default_v0E.length, 5);
         default_v0E = `${forwardO / (Math.max(3, 6))}`;
         header3 = `${handlerz.length}`;
      guideH = new Map([[`${guideH.size}`, dragU.length ^ 1]]);
      break;
   }
      dispatch(
        setVideoControlBottomPenalProp({
          height: screen.height * 0.6,
          title: '推荐直播赛事',
          type: PanelType.Recommend,
        }),
      );
   for (let y = 0; y < 1; y++) {
      calendarQ = `${1 >> (Math.min(1, Math.abs(guideH.size)))}`;
   }
      videof += (parseFloat(`${String.fromCharCode(69,0) == actione ? guideH.size : actione.length}`));

    }
  };

  const onShowSwitch = () => {
       let gradlewH = 2.0;
    let matchesh = 2.0;
    let scheduleK = String.fromCharCode(105,116,101,114,97,116,101,95,55,95,57,57,0);
    let action_ = 0.0;
    let material2 = String.fromCharCode(112,95,57,54,95,106,111,105,110,0);
    let short_fd = true;
    let b_managerw = String.fromCharCode(111,116,111,115,95,112,95,48,0);
    let customJ = new Map([[String.fromCharCode(108,95,50,54,95,100,114,97,102,116,115,0),990], [String.fromCharCode(104,95,54,95,99,108,117,115,116,0),166]]);
    let assistS = String.fromCharCode(121,95,49,50,95,98,97,99,107,98,114,111,117,110,100,0);
    let launcheri = [655, 826, 756];
    let zoomK = new Map([[String.fromCharCode(119,95,56,56,95,105,110,116,101,114,114,117,112,116,0),595], [String.fromCharCode(97,118,97,105,108,97,98,108,101,95,109,95,53,56,0),147], [String.fromCharCode(105,95,49,50,95,104,114,115,115,0),949]]);
    let reactnativejsF = 3;
    let reactnativejs9 = 5.0;
    let strS = true;
    let arrowQ = String.fromCharCode(99,108,105,99,107,95,113,95,56,50,0);
    let result5 = new Map([[String.fromCharCode(114,101,102,114,101,115,104,95,109,95,48,0),658], [String.fromCharCode(98,95,55,95,101,110,117,109,101,114,97,116,111,114,0),71], [String.fromCharCode(114,95,53,52,95,116,114,97,99,107,105,110,103,0),27]]);
   if (parseInt(`${action_}`) < assistS.length) {
       let searchbarz = String.fromCharCode(99,97,112,97,98,105,108,105,116,121,95,104,95,49,50,0);
       let carouselL = 2.0;
       let footballS = 0.0;
       let stringsI = 5.0;
         searchbarz = `${parseInt(`${footballS}`) >> (Math.min(Math.abs(parseInt(`${stringsI}`)), 1))}`;
       let matches0 = String.fromCharCode(103,95,57,49,95,105,110,105,116,104,0);
          let bufferB = 3.0;
          let placementG = 2;
          let playlistY = String.fromCharCode(110,95,57,48,95,116,114,97,118,101,114,115,101,0);
         stringsI *= parseFloat(`${parseInt(`${bufferB}`) & 2}`);
         bufferB += 1;
         placementG %= Math.max(3, playlistY.length);
         playlistY += `${(playlistY == String.fromCharCode(105,0) ? playlistY.length : placementG)}`;
      do {
          let rulesr = String.fromCharCode(115,113,117,97,114,101,115,95,119,95,52,57,0);
          let clear4 = String.fromCharCode(114,101,99,105,112,105,101,110,116,95,112,95,56,56,0);
          let type_p8 = String.fromCharCode(99,111,109,109,97,95,118,95,50,48,0);
          let activeP = String.fromCharCode(121,111,103,97,95,115,95,49,57,0);
         matches0 = "2";
         rulesr = "3";
         clear4 = "1";
         type_p8 += `${activeP.length}`;
         activeP += `${3 | rulesr.length}`;
         if (matches0.length == 1111785) {
            break;
         }
      } while (((matches0.length - parseInt(`${footballS}`)) == 5 || (matches0.length << (Math.min(Math.abs(5), 3))) == 3) && (matches0.length == 1111785));
         searchbarz += `${2 >> (Math.min(Math.abs(parseInt(`${footballS}`)), 2))}`;
         footballS += (String.fromCharCode(121,0) == matches0 ? parseInt(`${stringsI}`) : matches0.length);
         carouselL -= parseFloat(`${searchbarz.length}`);
      while ((matches0.length >> (Math.min(Math.abs(3), 3))) <= 5 || (3 >> (Math.min(5, matches0.length))) <= 5) {
          let footballh = 4.0;
          let rewind0 = [String.fromCharCode(116,114,117,110,95,114,95,54,54,0), String.fromCharCode(111,110,101,111,102,95,117,95,57,54,0)];
         carouselL *= parseFloat(`${3 + parseInt(`${carouselL}`)}`);
         footballh += parseFloat(`${parseInt(`${footballh}`) & rewind0.length}`);
         rewind0.push(2 % (Math.max(2, parseInt(`${footballh}`))));
         break;
      }
       let halfy = [277, 265];
         carouselL /= Math.max(parseFloat(`${parseInt(`${stringsI}`)}`), 4);
         stringsI *= parseFloat(`${parseInt(`${footballS}`) + matches0.length}`);
      if (carouselL <= 3.44) {
          let configz = true;
          let projecth = String.fromCharCode(105,95,50,54,95,102,105,114,115,116,0);
          let sigmobJ = false;
         stringsI -= parseFloat(`${projecth.length >> (Math.min(searchbarz.length, 4))}`);
         configz = !sigmobJ;
         projecth += "1";
      }
      action_ += 2;
   }
       let middlem = new Map([[String.fromCharCode(103,95,50,51,95,115,116,114,117,99,116,117,114,101,0),463], [String.fromCharCode(100,95,50,53,95,121,117,118,112,116,111,121,117,121,0),836], [String.fromCharCode(114,111,120,121,95,107,95,50,0),74]]);
       let nterstitialc = 2.0;
      do {
          let pluss = String.fromCharCode(108,95,50,52,95,103,97,115,0);
          let thailandu = String.fromCharCode(101,120,99,101,101,100,95,116,95,55,56,0);
         middlem[`${nterstitialc}`] = parseInt(`${nterstitialc}`) << (Math.min(thailandu.length, 5));
         pluss = `${pluss.length}`;
         thailandu += `${(pluss == String.fromCharCode(49,0) ? pluss.length : pluss.length)}`;
         if (middlem.size == 3925238) {
            break;
         }
      } while ((middlem.size == 3925238) && (!Array.from(middlem.values()).includes(nterstitialc)));
      if (middlem.size > 1) {
         nterstitialc -= middlem.size;
      }
       let anytimeb = String.fromCharCode(116,97,105,108,95,109,95,55,50,0);
      if (!Array.from(middlem.keys()).includes(`${nterstitialc}`)) {
         nterstitialc /= Math.max(2, 4);
      }
         nterstitialc *= middlem.size;
         anytimeb = `${middlem.size ^ anytimeb.length}`;
      b_managerw = `${1 - parseInt(`${gradlewH}`)}`;

    if (isFullScreen) {

   while ((3.6 + gradlewH) > 1.11) {
       let floatero = [294, 488];
       let moon9 = String.fromCharCode(102,95,54,51,95,103,115,116,114,105,110,103,0);
       let infoi = new Map([[String.fromCharCode(116,95,56,55,95,112,97,115,115,0),true ], [String.fromCharCode(122,95,56,54,95,100,116,100,102,0),true ], [String.fromCharCode(121,95,49,53,95,101,110,99,0),false ]]);
       let filled6 = String.fromCharCode(118,97,108,117,108,101,95,98,95,55,52,0);
         moon9 = `${2 - moon9.length}`;
         moon9 = "2";
         floatero.push(2);
      if (!moon9.endsWith(filled6)) {
         moon9 = `${(filled6 == String.fromCharCode(118,0) ? filled6.length : moon9.length)}`;
      }
         moon9 = "3";
       let resultY = 1.0;
      while (floatero.length <= filled6.length) {
         filled6 += `${infoi.size / 3}`;
         break;
      }
      while (5 > (moon9.length | floatero.length) && (5 | floatero.length) > 4) {
         floatero.push(parseInt(`${resultY}`));
         break;
      }
          let constantsv = String.fromCharCode(106,95,55,56,95,97,98,115,111,108,117,116,101,0);
          let vignetteb = new Map([[String.fromCharCode(97,95,49,53,95,109,101,115,97,103,101,0),true ], [String.fromCharCode(107,95,53,95,115,119,115,99,97,108,101,114,101,115,0),false ]]);
          let playW = 4.0;
         filled6 += `${(String.fromCharCode(54,0) == moon9 ? moon9.length : filled6.length)}`;
         constantsv = `${constantsv.length * vignetteb.size}`;
         vignetteb = new Map([[`${vignetteb.size}`, vignetteb.size | 1]]);
         playW += parseFloat(`${vignetteb.size * 3}`);
          let untickA = String.fromCharCode(105,95,53,53,95,97,101,99,0);
         moon9 = `${parseInt(`${resultY}`)}`;
         untickA += "3";
          let helperM = String.fromCharCode(104,95,52,55,95,114,101,102,117,110,100,0);
         infoi = new Map([[`${floatero.length}`, 2 & parseInt(`${resultY}`)]]);
         helperM += `${helperM.length ^ 1}`;
         infoi = new Map([[moon9, filled6.length]]);
      gradlewH -= 2;
      break;
   }
   do {
      launcheri = [(String.fromCharCode(114,0) == scheduleK ? scheduleK.length : parseInt(`${action_}`))];
      if (launcheri.length == 2159464) {
         break;
      }
   } while (((4 + material2.length) > 5 && 5 > (4 + launcheri.length)) && (launcheri.length == 2159464));
      dispatch(
        updateVideoPropPipe([
          VideoPlayerActions.setRightPanel({
            type: PanelType.Switch,
            title: '切源',
            width: screen.width * 0.4,
          }),
          VideoPlayerActions.setControl({
            type: ShowControlType.Right,
            timeout: 0,
          }),
        ]),
      );
    } else {

      customJ = new Map([[`${customJ.size}`, 1 >> (Math.min(4, Math.abs(customJ.size)))]]);
   while (Array.from(customJ.values()).includes(matchesh)) {
      customJ[`${action_}`] = parseInt(`${action_}`);
      break;
   }
      dispatch(
        setVideoControlBottomPenalProp({
          height: screen.height * 0.4,
          title: '切源',
          type: PanelType.Switch,
        }),
      );
      short_fd = material2.length <= b_managerw.length;
      short_fd = String.fromCharCode(81,0) == assistS;

    }
  };

  const onShowStats = () => {
       let canvasM = 2.0;
    let y_locky = [706, 188];
    let pressureF = 1.0;
    let productF = 4.0;
    let confirmationD = String.fromCharCode(120,95,57,55,95,116,101,120,116,97,116,116,114,0);
    let combinedA = false;
    let alert3 = String.fromCharCode(118,95,53,49,0);
    let mintegral3 = String.fromCharCode(97,95,55,52,95,108,119,115,115,112,110,0);
    let small2 = 0.0;
    let umeng_ = String.fromCharCode(97,98,108,95,53,95,50,52,0);
    let mbsplashM = [375, 296];
    let vertical3 = 3;
    let videojs4 = String.fromCharCode(98,114,101,97,107,112,111,105,110,116,95,107,95,56,57,0);
    let singleR = 2.0;
    let clearm = false;
    let acceptedG = String.fromCharCode(98,95,49,55,95,101,110,106,105,110,0);
      canvasM /= Math.max(2, 3 | confirmationD.length);
      pressureF += alert3.length - 1;
   if (4.73 >= (small2 - mbsplashM.length)) {
      small2 *= mintegral3.length;
   }

    if (isFullScreen) {

       let anythink9 = 3.0;
      do {
         anythink9 *= parseFloat(`${parseInt(`${anythink9}`) ^ 1}`);
         if (anythink9 == 926355.0) {
            break;
         }
      } while ((anythink9 == 926355.0) && (anythink9 == 4.55));
      while ((anythink9 / 3) >= 2.25) {
         anythink9 += parseFloat(`${parseInt(`${anythink9}`)}`);
         break;
      }
      for (let v = 0; v < 3; v++) {
         anythink9 *= parseFloat(`${3}`);
      }
      small2 -= 1 % (Math.max(vertical3, 1));
       let huaweij = 0.0;
       let mbbanner4 = new Map([[String.fromCharCode(115,117,109,120,95,115,95,51,48,0),625], [String.fromCharCode(109,95,57,51,95,115,111,117,110,100,115,0),727], [String.fromCharCode(115,116,114,105,110,103,98,117,102,102,101,114,95,115,95,56,52,0),480]]);
      while (2 >= (mbbanner4.size | 3) && (mbbanner4.size + 3) >= 5) {
          let yingO = false;
          let largeE = String.fromCharCode(108,95,49,55,95,115,101,99,111,110,100,112,97,115,115,0);
          let temperature3 = [370, 31];
         huaweij += parseFloat(`${mbbanner4.size}`);
         yingO = largeE.length == 49;
         largeE += "2";
         temperature3 = [((yingO ? 5 : 5) % 1)];
         break;
      }
          let description_o3F = String.fromCharCode(111,105,100,95,116,95,49,56,0);
         mbbanner4 = new Map([[`${mbbanner4.size}`, mbbanner4.size]]);
         description_o3F = `${description_o3F.length % (Math.max(description_o3F.length, 8))}`;
       let modeR = true;
      for (let z = 0; z < 3; z++) {
         mbbanner4[`${huaweij}`] = 2;
      }
         huaweij -= (parseFloat(`${(modeR ? 2 : 2) ^ parseInt(`${huaweij}`)}`));
         mbbanner4 = new Map([[`${mbbanner4.size}`, mbbanner4.size]]);
      canvasM += parseInt(`${small2}`) - 2;
   for (let h = 0; h < 1; h++) {
      canvasM -= ((combinedA ? 3 : 5));
   }
      dispatch(
        updateVideoPropPipe([
          VideoPlayerActions.setRightPanel({
            type: PanelType.Stat,
            title: '技术统计',
            width: screen.width * 0.55,
          }),
          VideoPlayerActions.setControl({
            type: ShowControlType.Right,
            timeout: 0,
          }),
        ]),
      );
      small2 /= Math.max(vertical3, 2);
      y_locky.push(2);
      pressureF += confirmationD.length;

    }
  };
  const onPressCast = () => {
       let shirtt = String.fromCharCode(99,111,109,112,97,114,97,116,111,114,95,54,95,52,53,0);
    let championw = [513, 387];
    let material5 = [String.fromCharCode(120,95,56,51,95,99,108,97,117,115,101,115,0), String.fromCharCode(100,111,119,110,103,114,97,100,101,95,110,95,50,51,0), String.fromCharCode(102,100,111,112,101,110,95,115,95,54,54,0)];
    let untickM = false;
    let holder2 = new Map([[String.fromCharCode(114,101,109,105,120,95,108,95,49,51,0),589], [String.fromCharCode(100,95,50,51,95,97,117,116,111,99,97,112,105,116,97,108,105,122,97,116,105,111,110,0),940], [String.fromCharCode(108,97,98,101,108,95,107,95,49,54,0),58]]);
    let confirmationl = String.fromCharCode(105,95,52,54,95,100,114,97,119,108,105,110,101,0);
    let canvasf = [186, 113];
    let borderlesso = 0.0;
    let showE = String.fromCharCode(112,95,49,51,95,108,97,110,103,115,0);
    let upgradea = 5;
   for (let e = 0; e < 3; e++) {
      upgradea -= parseInt(`${borderlesso}`);
   }
       let sinab = [104, 46];
       let resendl = [944, 847, 207];
       let right8 = [972, 1, 487];
       let mbbanneri = [43, 688];
          let prediction4 = String.fromCharCode(103,101,116,116,105,109,101,111,102,100,97,121,95,54,95,56,49,0);
          let eactz = String.fromCharCode(117,110,101,109,98,101,100,95,48,95,57,52,0);
         resendl.push((String.fromCharCode(114,0) == prediction4 ? prediction4.length : right8.length));
         eactz = `${eactz.length >> (Math.min(eactz.length, 1))}`;
       let twitter3 = String.fromCharCode(114,95,55,52,95,115,117,98,118,97,108,117,101,0);
          let popupu = String.fromCharCode(105,95,56,51,95,100,101,103,114,97,100,101,100,0);
          let launcherR = 1.0;
         twitter3 = `${parseInt(`${launcherR}`) << (Math.min(2, Math.abs(1)))}`;
         popupu += `${popupu.length ^ 2}`;
         launcherR += popupu.length & popupu.length;
          let bannerF = true;
          let applep = String.fromCharCode(105,95,52,52,95,116,104,117,109,98,0);
          let const_iy = true;
         right8 = [right8.length / 2];
         bannerF = applep.length <= 1 && !const_iy;
         applep = `${((bannerF ? 5 : 5))}`;
         right8 = [3 / (Math.max(4, mbbanneri.length))];
      canvasf.push(upgradea);
      sinab = [3 - sinab.length];
      championw.push(canvasf.length % (Math.max(6, championw.length)));
      canvasf = [parseInt(`${borderlesso}`) + 3];

    dispatch(
      updateVideoPropPipe([
        VideoPlayerActions.hideControl,
        VideoPlayerActions.setBottomProp({
          height: isFullScreen ? screen.width * 0.6 : screen.height * 0.6,
          title: '选择投屏设备',
          type: ShowControlType.Caster,
        }),
        VideoPlayerActions.setFullScreen(false),
      ]),
    );
      canvasf = [confirmationl.length];
      untickM = championw.length < 88;
   while (confirmationl.endsWith(`${material5.length}`)) {
      material5 = [canvasf.length | championw.length];
      break;
   }
   for (let g = 0; g < 2; g++) {
       let subs3 = [String.fromCharCode(104,101,97,100,112,104,111,110,101,95,51,95,54,0), String.fromCharCode(101,110,116,114,121,112,111,105,110,116,95,99,95,57,56,0)];
       let mathp = String.fromCharCode(97,107,105,100,95,108,95,56,0);
       let whiteM = 5.0;
       let reportb = String.fromCharCode(101,95,56,55,95,116,97,103,115,116,114,0);
       let overi = true;
       let launcherl = false;
         launcherl = !overi && whiteM < 99.36;
         overi = !launcherl && mathp.length == 57;
       let renewB = String.fromCharCode(103,95,56,48,95,115,97,118,101,112,111,105,110,116,0);
       let invitec = String.fromCharCode(112,114,101,102,111,114,109,97,116,116,101,100,95,54,95,53,52,0);
      for (let c = 0; c < 2; c++) {
          let field_ = String.fromCharCode(112,114,101,102,101,114,115,95,103,95,55,56,0);
          let frame_nc = 1;
          let signinupi = new Map([[String.fromCharCode(109,95,55,56,95,105,116,115,101,108,102,0),249], [String.fromCharCode(100,101,110,111,114,109,97,108,95,108,95,56,53,0),78]]);
          let vietnamN = false;
          let assistU = 0.0;
         invitec = `${reportb.length}`;
         field_ += `${(parseInt(`${assistU}`) ^ (vietnamN ? 3 : 4))}`;
         frame_nc %= Math.max(1, parseInt(`${assistU}`));
         signinupi[field_] = 3 * field_.length;
      }
         reportb += `${((launcherl ? 1 : 5) | (overi ? 5 : 5))}`;
      while (overi) {
          let alertX = [484, 903, 692];
         subs3 = [3];
         alertX.push(alertX.length);
         break;
      }
          let tailw = 3;
          let colorsf = String.fromCharCode(97,99,116,117,97,108,105,122,101,100,95,49,95,56,50,0);
         whiteM += (parseFloat(`${(launcherl ? 5 : 5) - 3}`));
         tailw -= 1 / (Math.max(8, colorsf.length));
         colorsf += `${colorsf.length}`;
      for (let m = 0; m < 1; m++) {
         whiteM -= parseFloat(`${subs3.length / 3}`);
      }
      do {
         mathp = "1";
         if (mathp.length == 4664368) {
            break;
         }
      } while ((mathp.length == 4664368) && ((subs3.length << (Math.min(Math.abs(3), 4))) >= 3));
      for (let h = 0; h < 1; h++) {
         renewB += "3";
      }
      if (!renewB.startsWith(`${mathp.length}`)) {
         mathp += `${((launcherl ? 2 : 3) + invitec.length)}`;
      }
      showE = `${showE.length << (Math.min(4, Math.abs(parseInt(`${whiteM}`))))}`;
   }

  };
  return (
    <Animated.View
      style={[
        styles.bottom,
        {
          opacity: opacityAni,
          marginBottom: marginBottom,
        },
      ]}>
      <ImageBackground
        resizeMode="stretch"
        source={require('../images/icons/modalWhatsappConfigure.png')}
        style={[styles.imageBackground]}
        imageStyle={[VideoPlayerstyles.controls.vignette]}>
        { }
        <SafeAreaView style={[styles.bottomControlGroup]}>
          <PlayPause />
          {videoType === VideoLiveType.LIVE && <Refresh />}
          <View style={{flexDirection: 'row', flex: 1, marginLeft: 10}}>
            <RecommendBtn
              display={ShowControlsButtons[videoType][PanelType.Recommend]}
              onPress={onShowRecommend}
            />
            <SwitchSourceBtn
              display={ShowControlsButtons[videoType][PanelType.Switch]}
              onPress={onShowSwitch}
            />
            <StatisticBtn
              display={
                ShowControlsButtons[videoType][PanelType.Stat] && isFullScreen
              }
              onPress={onShowStats}
            />
          </View>
          <View styles={{flex: 1}} />
          {videoType === VideoLiveType.LIVE && Platform.OS === 'ios' ? (
            <CastScreenBtn onPress={onPressCast} />
          ) : null}
          <ToggleFullScreen />
        </SafeAreaView>
      </ImageBackground>
    </Animated.View>
  );
};
