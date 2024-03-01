import React, {
  useState,
  useMemo,
  memo,
  useEffect,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {yys_Libreact} from '@type/yys_libzeus';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SortAscIcon from '@static/images/mbsplashNterstitial.svg';
import SortDescIcon from '@static/images/expandAnalytics.svg';
import BottomSheet from '../bottomSheet/yys_proxy';

interface yys_ConfigureUimanager {
  onConfirm: any;
  onCancel: any;
  episodes?: yys_Libreact;
  activeEpisode?: number;
  rangeSize?: number;
  isVisible: boolean; 
  handleClose: any;
}
function VodEpisodeSelectionModal({
  onConfirm,
  onCancel,
  episodes,
  isVisible,
  handleClose, 
  activeEpisode = 0,
  rangeSize = 50,
}: yys_ConfigureUimanager) {
  const {colors, textVariants, spacing} = useTheme();
  const EPISODE_RANGE_SIZE = rangeSize;
  const insets = useSafeAreaInsets();
  const [sortBy, setSortBy] = useState('asc');
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(activeEpisode / EPISODE_RANGE_SIZE),
  );
  const showEpisodeRangeStart = useMemo(
    () => currentIndex * EPISODE_RANGE_SIZE,
    [activeEpisode, currentIndex],
  );
  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        episodes
          ? episodes.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE,
      ),
    [episodes, showEpisodeRangeStart],
  );
  const displayEpisodes = useMemo(() => {
       let privacyz: Array<any> = [270, 177];
    let d_view_ = true;
    let apps1: Array<any> = [595, 470, 926];
    let register_fy5 = true;
    let shrinko = String.fromCharCode(121,95,55,51,95,100,101,115,101,108,101,99,116,0);
    let redirectX = true;
    let expired0 = 2.0;
    let mbbannerH = 1.0;
    let larger = String.fromCharCode(108,95,51,56,95,98,105,110,100,120,0);
      privacyz = [(shrinko == String.fromCharCode(77,0) ? shrinko.length : (register_fy5 ? 5 : 5))];
      d_view_ = expired0 > 5.44;
      privacyz.push(privacyz.length);
   let left_ = redirectX ? !redirectX : redirectX;
   do {
      redirectX = (d_view_ ? redirectX : !d_view_);
      if (left_) {
         break;
      }
   } while ((shrinko.length >= 3) && left_);
   if (d_view_ || 1 >= shrinko.length) {
      shrinko = "3";
   }

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd,
    );

   let photon = d_view_ ? !d_view_ : d_view_;
   do {
       let jcopy_tx: Map<any, any> = new Map([[String.fromCharCode(99,95,55,53,95,112,97,108,108,101,116,101,0),String.fromCharCode(103,101,116,104,100,114,0)], [String.fromCharCode(103,95,52,95,98,108,111,99,107,105,110,103,0),String.fromCharCode(108,105,98,114,97,114,105,101,115,0)]]);
       let productZ = String.fromCharCode(112,117,108,115,101,115,98,105,116,115,0);
       let zhubon: Array<any> = [856, 683];
      let tooltips_ = productZ == String.fromCharCode(99,109,121,95,95,104,0);
      do {
         productZ += `${3 << (Math.min(2, productZ.length))}`;
         if (tooltips_) {
            break;
         }
      } while ((!productZ.endsWith(`${jcopy_tx.size}`)) && tooltips_);
      if (!Array.from(jcopy_tx.keys()).includes(`${zhubon.length}`)) {
          let canvasQ = 5.0;
         zhubon.push(parseInt(`${canvasQ}`));
      }
      while (2 < (productZ.length / 4) && 4 < (productZ.length / (Math.max(4, zhubon.length)))) {
         zhubon = [zhubon.length];
         break;
      }
          let downloadedh = 1;
         jcopy_tx.set(`${downloadedh}`, zhubon.length);
       let fastb = 3.0;
      while (1.24 > fastb) {
         fastb += zhubon.length;
         break;
      }
         zhubon.push(zhubon.length / (Math.max(7, parseInt(`${fastb}`))));
          let rewardi = 3.0;
          let dice5: Array<any> = [String.fromCharCode(97,99,114,111,115,115,102,97,100,101,0), String.fromCharCode(106,112,103,0), String.fromCharCode(116,104,114,101,97,100,110,97,109,101,0)];
         jcopy_tx.set(`${rewardi}`, 2);
         rewardi += dice5.length | 2;
         dice5 = [dice5.length >> (Math.min(Math.abs(3), 3))];
          let gmail0: Map<any, any> = new Map([[String.fromCharCode(105,110,118,111,107,101,114,0),661], [String.fromCharCode(98,105,110,100,108,105,115,116,0),64], [String.fromCharCode(99,111,108,111,110,0),61]]);
          let benefitZ = 5;
         productZ = `${2 ^ productZ.length}`;
         gmail0 = new Map([[`${gmail0.size}`, gmail0.size - benefitZ]]);
         benefitZ ^= gmail0.size;
      d_view_ = !register_fy5;
      if (photon) {
         break;
      }
   } while (((mbbannerH / 1.13) < 4.85) && photon);
   let pressureY = 5275947 <= apps1.length;
   do {
      apps1 = [((redirectX ? 3 : 3) >> (Math.min(Math.abs(3), 5)))];
      if (pressureY) {
         break;
      }
   } while (pressureY && (apps1.length <= 1));
   while (!apps1.includes(mbbannerH)) {
      mbbannerH *= parseFloat(`${parseInt(`${expired0}`) - parseInt(`${mbbannerH}`)}`);
      break;
   }
      mbbannerH -= (parseFloat(`${(redirectX ? 4 : 3) & 2}`));
       let vietnamv = 3.0;
       let humidityG = 0;
       let muted4 = String.fromCharCode(116,114,97,110,115,112,97,114,101,110,116,0);
         vietnamv /= Math.max(2, parseFloat(`${humidityG}`));
      if (5.67 <= (humidityG * vietnamv)) {
         vietnamv -= parseFloat(`${humidityG}`);
      }
      while (2 == (1 - muted4.length)) {
         muted4 = `${3 + humidityG}`;
         break;
      }
       let disconnectedi: Map<any, any> = new Map([[String.fromCharCode(110,101,116,119,111,114,107,0),true ], [String.fromCharCode(111,117,116,108,105,110,101,0),false ], [String.fromCharCode(110,115,117,105,0),false ]]);
         vietnamv -= parseFloat(`${disconnectedi.size ^ muted4.length}`);
         vietnamv -= parseFloat(`${2}`);
          let suggestionl: Map<any, any> = new Map([[String.fromCharCode(100,114,111,112,112,101,114,95,107,95,55,52,0),222], [String.fromCharCode(97,110,97,108,121,122,105,110,103,95,103,95,57,48,0),452], [String.fromCharCode(106,95,50,48,95,114,101,97,100,101,114,0),173]]);
         humidityG >>= Math.min(Math.abs(suggestionl.size | 1), 1);
          let orangeu: Array<any> = [316, 572, 50];
         humidityG /= Math.max(4, 1);
         orangeu = [orangeu.length >> (Math.min(Math.abs(3), 1))];
       let largen = String.fromCharCode(117,110,109,97,112,102,105,108,101,0);
       let collections = String.fromCharCode(97,100,111,112,116,101,100,95,101,95,57,57,0);
      mbbannerH /= Math.max((parseFloat(`${(register_fy5 ? 5 : 4) | apps1.length}`)), 3);
    if (sortBy === 'desc') {

   while (shrinko.includes(`${d_view_}`)) {
       let unimplementedviewC = String.fromCharCode(118,97,114,105,97,98,108,101,115,0);
       let starN = String.fromCharCode(114,116,109,112,112,107,116,0);
       let bodanD = String.fromCharCode(105,110,118,105,116,97,116,105,111,110,115,0);
       let friendsE: Map<any, any> = new Map([[String.fromCharCode(97,109,112,108,105,116,117,100,101,95,108,95,50,57,0),String.fromCharCode(104,95,53,53,95,106,117,115,116,0)], [String.fromCharCode(97,95,54,53,95,113,99,101,108,112,0),String.fromCharCode(97,116,116,97,99,104,101,100,0)]]);
       let volumes = true;
       let direct7 = false;
          let rightR = String.fromCharCode(118,114,97,115,116,101,114,95,115,95,50,0);
          let string4 = 4.0;
          let matchesB = String.fromCharCode(97,118,103,120,0);
         starN += `${(String.fromCharCode(65,0) == bodanD ? (direct7 ? 5 : 3) : bodanD.length)}`;
         rightR += "1";
         string4 -= parseFloat(`${matchesB.length}`);
         matchesB += `${parseInt(`${string4}`) << (Math.min(Math.abs(1), 2))}`;
         volumes = direct7;
         bodanD += "1";
         direct7 = String.fromCharCode(76,0) == bodanD;
      if (bodanD != unimplementedviewC) {
         unimplementedviewC += `${unimplementedviewC.length}`;
      }
      while (3 > starN.length) {
         direct7 = ((unimplementedviewC.length - (direct7 ? unimplementedviewC.length : 78)) < 78);
         break;
      }
       let countdown9 = String.fromCharCode(111,95,53,95,105,110,116,101,114,112,111,108,97,116,101,102,0);
      for (let k = 0; k < 3; k++) {
         volumes = (39 < ((volumes ? starN.length : 39) << (Math.min(starN.length, 2))));
      }
      if (countdown9.includes(`${direct7}`)) {
         direct7 = countdown9 == String.fromCharCode(71,0) || friendsE.size <= 44;
      }
       let countdown5 = String.fromCharCode(115,117,105,116,101,0);
      if (starN.length <= bodanD.length) {
         starN = `${bodanD.length}`;
      }
      shrinko += `${privacyz.length}`;
      break;
   }
       let sheetD = 2.0;
      while (4.5 > (sheetD + sheetD) || (sheetD + 4.5) > 4.15) {
         sheetD /= Math.max(1 & parseInt(`${sheetD}`), 1);
         break;
      }
      if ((sheetD * 3.28) > 1.46) {
         sheetD -= 3;
      }
          let googleP = 4.0;
          let libreactnativejniZ = String.fromCharCode(115,105,103,101,120,112,0);
          let moonv = 1.0;
         sheetD += (String.fromCharCode(88,0) == libreactnativejniZ ? parseInt(`${moonv}`) : libreactnativejniZ.length);
         googleP *= parseInt(`${googleP}`);
      apps1 = [parseInt(`${mbbannerH}`) / 1];
   let const_4iX = redirectX ? !redirectX : redirectX;
   do {
      redirectX = register_fy5 && apps1.length > 65;
      if (const_4iX) {
         break;
      }
   } while ((redirectX) && const_4iX);
   for (let p = 0; p < 1; p++) {
      mbbannerH -= parseFloat(`${privacyz.length}`);
   }
   while (3.61 > (expired0 + mbbannerH) || 3.61 > (mbbannerH + expired0)) {
      expired0 -= 3 % (Math.max(parseInt(`${expired0}`), 4));
      break;
   }
      eps?.reverse();
    }
    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy]);

  
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeEpisode]);

  const sort = () => {
       let roboto9: Array<any> = [612, 566];
    let shootC = 1;
    let pageO = String.fromCharCode(99,111,109,112,117,116,101,0);
    let actionS: Map<any, any> = new Map([[String.fromCharCode(109,117,108,109,111,100,95,97,95,56,48,0),167], [String.fromCharCode(115,105,109,117,108,97,116,101,0),176]]);
    let package_pj2 = String.fromCharCode(116,102,114,102,0);
    let smallv: Map<any, any> = new Map([[String.fromCharCode(108,105,98,115,114,116,95,48,95,55,51,0),727], [String.fromCharCode(122,95,51,54,95,115,101,101,107,0),981]]);
    let filledm: Array<any> = [585, 763, 339];
    let splashh = String.fromCharCode(114,101,115,101,116,115,0);
    let downloading9 = String.fromCharCode(112,97,112,101,114,0);
    let pinge = 4;
   let foregroundX = pageO.length >= 9345790;
   do {
       let vietnam8 = 1.0;
       let usernameI: Array<any> = [563, 216];
         vietnam8 -= parseFloat(`${parseInt(`${vietnam8}`)}`);
         usernameI.push(usernameI.length);
         usernameI = [2 / (Math.max(3, parseInt(`${vietnam8}`)))];
      for (let j = 0; j < 1; j++) {
         vietnam8 -= parseFloat(`${1 | parseInt(`${vietnam8}`)}`);
      }
      for (let v = 0; v < 2; v++) {
          let activityW = String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,0);
          let sentryD = String.fromCharCode(114,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0);
          let delegate_c1 = String.fromCharCode(116,95,51,53,95,115,101,112,97,114,97,116,101,115,0);
          let downloadx: Array<any> = [763, 968, 140];
         usernameI.push(activityW.length);
         activityW += `${delegate_c1.length << (Math.min(5, downloadx.length))}`;
         sentryD = `${delegate_c1.length >> (Math.min(4, downloadx.length))}`;
      }
      while ((usernameI.length | 3) > 1) {
          let hover2 = String.fromCharCode(99,97,110,100,105,100,97,116,101,0);
          let stationP = 5.0;
          let rootT = String.fromCharCode(109,97,114,103,105,110,115,0);
         usernameI = [hover2.length];
         hover2 += `${rootT.length}`;
         stationP -= parseInt(`${stationP}`) >> (Math.min(rootT.length, 5));
         break;
      }
      pageO += `${(pageO == String.fromCharCode(76,0) ? pageO.length : roboto9.length)}`;
      if (foregroundX) {
         break;
      }
   } while (((actionS.size >> (Math.min(Math.abs(4), 4))) <= 4) && foregroundX);
      actionS.set(`${package_pj2}`, (package_pj2 == String.fromCharCode(57,0) ? package_pj2.length : smallv.size));
   for (let d = 0; d < 3; d++) {
      filledm = [filledm.length + shootC];
   }
      roboto9 = [shootC];
   let baseM = smallv.size >= 8689498;
   do {
       let encryptP = 4.0;
       let halfP = String.fromCharCode(105,116,101,114,97,116,105,118,101,0);
       let thailandg = String.fromCharCode(119,95,57,95,105,110,116,101,114,0);
         encryptP -= halfP.length;
       let searchp = 1;
       let viewsd = 4;
      smallv.set(splashh, actionS.size << (Math.min(splashh.length, 2)));
      if (baseM) {
         break;
      }
   } while (baseM && (5 >= (3 ^ package_pj2.length) && 1 >= (package_pj2.length ^ 3)));
   let buffer_ = 8075760 <= shootC;
   do {
      shootC += shootC & pageO.length;
      if (buffer_) {
         break;
      }
   } while ((4 <= (5 % (Math.max(10, shootC)))) && buffer_);

    if (sortBy === 'asc') {

   for (let q = 0; q < 1; q++) {
      smallv.set(`${filledm.length}`, 2);
   }
   while (1 >= (actionS.size + roboto9.length) && 1 >= (actionS.size + 1)) {
      roboto9 = [2 - shootC];
      break;
   }
       let gradle8 = true;
       let fillF: Map<any, any> = new Map([[String.fromCharCode(111,109,112,108,105,99,97,116,105,111,110,0),String.fromCharCode(108,95,57,53,95,109,97,112,112,101,100,0)], [String.fromCharCode(101,108,115,0),String.fromCharCode(116,101,99,104,110,111,108,111,103,121,0)], [String.fromCharCode(101,97,103,101,114,0),String.fromCharCode(114,101,102,111,99,117,115,0)]]);
       let greenx = 2.0;
       let bootsplashr = 5;
      let minivodE = 6926297.0 <= greenx;
      do {
          let selectp = String.fromCharCode(99,111,100,101,99,112,114,105,118,0);
         greenx -= ((gradle8 ? 2 : 2) % 2);
         selectp = "1";
         if (minivodE) {
            break;
         }
      } while (minivodE && (1 <= bootsplashr));
      while (1 == fillF.size) {
         fillF.set(`${gradle8}`, (parseInt(`${greenx}`) << (Math.min(1, Math.abs((gradle8 ? 3 : 4))))));
         break;
      }
       let goal5: Array<any> = [262, 325, 402];
      while ((bootsplashr + greenx) == 2.11) {
         greenx /= Math.max(2, bootsplashr);
         break;
      }
         greenx += 1 - bootsplashr;
      for (let m = 0; m < 2; m++) {
         greenx *= ((gradle8 ? 1 : 2) ^ parseInt(`${greenx}`));
      }
      for (let j = 0; j < 3; j++) {
         bootsplashr |= fillF.size * goal5.length;
      }
      for (let a = 0; a < 1; a++) {
         fillF.set(`${goal5.length}`, goal5.length | 1);
      }
      pageO += `${pageO.length - parseInt(`${greenx}`)}`;
      roboto9 = [shootC ^ downloading9.length];
      roboto9.push(splashh.length);
       let spinner4 = 4.0;
      let runtimescheduler3 = spinner4 >= 9231104.0;
      do {
         spinner4 += parseFloat(`${parseInt(`${spinner4}`)}`);
         if (runtimescheduler3) {
            break;
         }
      } while ((spinner4 <= 2.28) && runtimescheduler3);
         spinner4 *= parseFloat(`${3}`);
         spinner4 += parseFloat(`${parseInt(`${spinner4}`)}`);
      downloading9 = `${(pageO == String.fromCharCode(110,0) ? pageO.length : roboto9.length)}`;
      setSortBy('desc');
    } else {

   let popup9 = roboto9.length >= 6855644;
   do {
       let download1: Array<any> = [String.fromCharCode(114,101,118,101,114,116,0), String.fromCharCode(115,101,116,115,104,97,114,101,0)];
       let window_tbE = String.fromCharCode(101,99,114,101,116,95,56,95,54,55,0);
       let graphicsU = 2;
       let libavutilJ = 4;
          let zhengpian9: Array<any> = [500, 570, 105];
          let productF = 0;
          let data1 = 5.0;
         window_tbE = "1";
         zhengpian9.push(zhengpian9.length - 3);
         productF %= Math.max(1, productF / 3);
         data1 -= zhengpian9.length % 1;
         download1 = [libavutilJ];
      let dplusm = 5546272 <= download1.length;
      do {
          let nativeh = String.fromCharCode(119,95,51,55,95,102,102,97,116,0);
          let membershipi = String.fromCharCode(115,116,114,101,97,109,102,111,117,114,99,99,0);
          let homeF: Map<any, any> = new Map([[String.fromCharCode(112,114,111,98,101,114,0),64], [String.fromCharCode(115,104,105,109,109,101,114,0),888], [String.fromCharCode(118,101,114,115,105,111,110,103,101,110,101,114,97,116,101,0),561]]);
          let helperR = 4.0;
         download1 = [homeF.size];
         nativeh = "2";
         membershipi += `${nativeh.length * parseInt(`${helperR}`)}`;
         homeF = new Map([[`${helperR}`, 1]]);
         if (dplusm) {
            break;
         }
      } while (dplusm && (libavutilJ >= download1.length));
      let resultf = 8020867 >= libavutilJ;
      do {
         libavutilJ |= 1;
         if (resultf) {
            break;
         }
      } while ((1 < window_tbE.length) && resultf);
      while ((graphicsU % 5) <= 1 || 5 <= (libavutilJ % (Math.max(1, graphicsU)))) {
         graphicsU <<= Math.min(Math.abs(libavutilJ), 1);
         break;
      }
      roboto9.push(shootC);
      if (popup9) {
         break;
      }
   } while (popup9 && (actionS.get(`${roboto9.length}`) != null));
       let collectionr = true;
       let awayc = String.fromCharCode(115,117,98,115,101,113,117,101,110,116,95,49,95,56,57,0);
       let castd: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,120,0),false ], [String.fromCharCode(112,101,114,109,105,115,115,105,111,110,115,95,97,95,54,48,0),false ]]);
      if (!collectionr) {
         castd.set(awayc, (String.fromCharCode(84,0) == awayc ? (collectionr ? 2 : 1) : awayc.length));
      }
      while (castd.size <= 4) {
          let bellf = 3.0;
          let private_a0G = String.fromCharCode(119,104,105,116,101,115,0);
          let controlP = String.fromCharCode(116,111,111,108,99,104,97,105,110,0);
          let policyy = String.fromCharCode(114,101,99,116,0);
          let sliderv = 5;
         awayc += "1";
         bellf *= sliderv ^ private_a0G.length;
         private_a0G += `${policyy.length & sliderv}`;
         controlP += `${parseInt(`${bellf}`)}`;
         policyy += `${2 << (Math.min(4, policyy.length))}`;
         break;
      }
         castd.set(`${collectionr}`, ((collectionr ? 3 : 1) >> (Math.min(Math.abs(3), 5))));
      if ((5 * awayc.length) < 4 || (5 * castd.size) < 3) {
          let commong = String.fromCharCode(112,101,114,105,111,100,115,0);
          let base5 = 4.0;
          let libavformatU: Array<any> = [291, 319];
          let searchbarS = 5.0;
         castd.set(`${collectionr}`, awayc.length);
         commong += `${parseInt(`${base5}`)}`;
         base5 /= Math.max(4, parseFloat(`${commong.length}`));
         libavformatU = [commong.length];
         searchbarS -= parseFloat(`${parseInt(`${base5}`)}`);
      }
          let path0 = String.fromCharCode(118,100,112,97,117,0);
          let gift8 = String.fromCharCode(103,97,117,115,115,105,97,110,105,105,114,100,0);
          let basketballp = 5.0;
         awayc += `${awayc.length}`;
         path0 = `${(String.fromCharCode(81,0) == gift8 ? parseInt(`${basketballp}`) : gift8.length)}`;
         basketballp -= parseInt(`${basketballp}`) | gift8.length;
         awayc = `${castd.size - 1}`;
      for (let b = 0; b < 1; b++) {
         castd = new Map([[awayc, ((collectionr ? 4 : 2) % (Math.max(awayc.length, 7)))]]);
      }
          let liveH: Map<any, any> = new Map([[String.fromCharCode(115,103,105,114,108,101,0),354], [String.fromCharCode(106,111,105,110,95,98,95,57,52,0),508], [String.fromCharCode(105,100,101,110,116,105,99,97,108,0),449]]);
          let kickq = 4.0;
         awayc += `${3 >> (Math.min(4, Math.abs(parseInt(`${kickq}`))))}`;
         liveH.set(`${liveH.size}`, 1 ^ liveH.size);
         kickq *= parseFloat(`${liveH.size | liveH.size}`);
         awayc += `${((collectionr ? 5 : 2) - castd.size)}`;
      shootC ^= 1;
      actionS = new Map([[`${shootC}`, package_pj2.length]]);
      smallv = new Map([[`${smallv.size}`, filledm.length - smallv.size]]);
      actionS = new Map([[`${roboto9.length}`, 2 >> (Math.min(Math.abs(shootC), 3))]]);
      splashh += `${splashh.length * actionS.size}`;
      setSortBy('asc');
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
        alignItems: 'center',
      }}
      height='50%'
    >
      <View style={styles.episodeList}>
        <Text
          style={{
            ...styles.btn,
            ...textVariants.header
          }}>
          {`${showEpisodeRangeStart+1}-${showEpisodeRangeEnd} 集`}
        </Text>
        <TouchableOpacity style={styles.sortBtn} onPress={sort}>
          <View style={{paddingTop: 4}}>
            {sortBy === 'asc' ? <SortAscIcon /> : <SortDescIcon />}
          </View>
          <Text
            style={{
              textAlign: 'center',
              ...textVariants.header,
              color: colors.muted,
              fontSize: 15,
            }}>
            顺序
          </Text>
        </TouchableOpacity>
      </View>
      {(displayEpisodes && isVisible) &&
      <ScrollView
        contentContainerStyle={{
          ...styles.episodeList,
          paddingBottom: insets.bottom,
        }}>
        {displayEpisodes?.map((ep, idx) => (
          <TouchableOpacity
            key={`expand-${idx}`}
            onPress={() => {
              onConfirm(ep.nid);
              onCancel();
            }}>
            <View
              style={{
                backgroundColor:
                  ep.nid === activeEpisode ? colors.primary : colors.search,
                padding: spacing.s,
                minWidth: 60,
                marginRight: 'auto',
                marginBottom: spacing.s,
                borderRadius: 8,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 13,
                  textAlign: 'center',
                  fontWeight: '500',
                  color:
                    ep.nid === activeEpisode ? colors.selected : colors.muted,
                }}>
                {`${ep.name}`}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      }
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
    color: 'white',
    textAlign: 'center',
  },
  btn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  episodeList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'flex-start',
    paddingLeft: 8,
    marginBottom: 14,
  },
  sortBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
