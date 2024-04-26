import React, {memo, useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import FastImage from '../../../components/common/ww_result';
import {useTheme} from '@react-navigation/native';
import styles from './ww_utils_orangeclock';
import {IconViewerGif} from '../../assets';
import {TouchableOpacity} from 'react-native';
import {HomeIcon, AwayIcon, AnimationLive, VideoLive} from '../../assets';
import {
  calculateScore,
  getMatchStatus,
  liveRoomName,
} from '../../utility/utils';
import store, {wwEighteenShirt} from '@redux/ww_small';
import {useNavigation} from '@react-navigation/native';
import {wwInfo} from '../../types/ww_dice';
import BecomeVipOverlay from '../../../components/modal/ww_animation';
import {useAppSelector, useSelector} from '@hooks/ww_catagory_neon';
import {showBecomeVip} from '@redux/actions/ww_hash';
import {useDispatch} from 'react-redux';
import {screenModel} from '@type/ww_jingdong_libavfilter';
import ww_runtime from '../../../../Umeng/ww_runtime';

interface wwIndexDice {
  matchSche: wwInfo;
  onPress?: () => any;
  followMatchIds?: Array<number>;
  isMatchPage?: boolean;
  setShowBecomeVIPOverlay: any;
  bgDark?: boolean;
}

const MatchSchedule = ({
  matchSche,
  onPress = () => {
       let fastn = true;
    let specN = String.fromCharCode(114,101,100,95,116,95,51,53,0);
    let club5 = String.fromCharCode(121,95,50,49,95,106,115,101,112,0);
    let targetj = String.fromCharCode(99,104,101,99,107,115,117,109,115,95,115,95,49,56,0);
    let arrowupQ = 1.0;
    let runtimeschedulerv = false;
    let type_6un = String.fromCharCode(112,95,50,56,95,97,114,102,113,0);
    let layoutM = String.fromCharCode(103,95,56,49,95,100,111,117,98,108,101,115,0);
    let applicationJ = String.fromCharCode(117,110,113,117,97,110,116,105,122,101,95,52,95,52,56,0);
   for (let x = 0; x < 3; x++) {
      specN = `${type_6un.length}`;
   }
      layoutM = `${(String.fromCharCode(78,0) == layoutM ? layoutM.length : applicationJ.length)}`;
   let telemetrye = club5.length >= 5303843;
   do {
       let libsentryc = 0.0;
       let reactnativejsr = false;
       let encryptZ = String.fromCharCode(100,101,115,116,114,111,121,95,122,95,55,51,0);
       let catagoryC = 3;
       let singaporet = 1;
      if (5 >= (catagoryC + 3)) {
         libsentryc += parseFloat(`${singaporet}`);
      }
      if (catagoryC >= 5) {
          let stylesV = String.fromCharCode(116,95,54,50,95,112,114,101,102,101,114,0);
          let iconmoreE = 2;
         catagoryC += ((reactnativejsr ? 5 : 2) << (Math.min(stylesV.length, 5)));
         stylesV = `${iconmoreE >> (Math.min(2, Math.abs(iconmoreE)))}`;
      }
         libsentryc -= (parseFloat(`${(reactnativejsr ? 1 : 1) & singaporet}`));
      if (reactnativejsr) {
          let tickedR = String.fromCharCode(99,111,100,101,119,111,114,100,95,121,95,50,52,0);
          let action7: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,101,116,115,95,54,95,57,49,0),String.fromCharCode(102,95,49,50,95,97,117,116,104,111,114,0)], [String.fromCharCode(112,97,114,97,109,101,116,114,105,122,101,100,95,113,95,53,54,0),String.fromCharCode(115,95,51,57,95,97,100,97,112,116,101,114,0)]]);
          let weather4 = String.fromCharCode(98,95,52,52,95,115,108,105,100,101,114,0);
         reactnativejsr = 49 <= action7.size && weather4 == String.fromCharCode(109,0);
         tickedR += `${(tickedR == String.fromCharCode(100,0) ? tickedR.length : tickedR.length)}`;
         action7.set(tickedR, tickedR.length + tickedR.length);
      }
         encryptZ = `${(parseInt(`${libsentryc}`) >> (Math.min(2, Math.abs((reactnativejsr ? 1 : 2)))))}`;
       let topon9 = String.fromCharCode(115,97,116,95,48,95,57,48,0);
       let reactnativejs1 = String.fromCharCode(102,109,97,99,95,122,95,55,0);
      let favoritej = topon9 == String.fromCharCode(113,97,118,111,118,112,115,98,54,52,0);
      do {
          let mappingA = String.fromCharCode(121,95,56,53,95,115,119,105,116,99,104,98,97,115,101,0);
         topon9 = "1";
         mappingA = "3";
         if (favoritej) {
            break;
         }
      } while (favoritej && (reactnativejs1 != topon9));
      let readp = topon9.length >= 7127959;
      do {
          let eighteen1 = 3;
          let libreanimatedL = 3.0;
         topon9 = `${2 << (Math.min(Math.abs(parseInt(`${libreanimatedL}`)), 2))}`;
         eighteen1 += eighteen1 / 3;
         libreanimatedL *= parseFloat(`${2}`);
         if (readp) {
            break;
         }
      } while (readp && (topon9.length >= reactnativejs1.length));
      club5 += `${((runtimeschedulerv ? 4 : 2) >> (Math.min(4, Math.abs((fastn ? 2 : 1)))))}`;
      if (telemetrye) {
         break;
      }
   } while (telemetrye && (layoutM.length >= club5.length));
      type_6un += "2";
       let kinit_p26 = String.fromCharCode(118,95,51,52,95,100,101,116,101,114,109,105,110,105,115,116,105,99,0);
       let googleY = 0.0;
       let turnX = 4.0;
      for (let c = 0; c < 3; c++) {
         turnX += parseInt(`${googleY}`);
      }
         googleY /= Math.max(2 & parseInt(`${turnX}`), 4);
       let downloadedX = String.fromCharCode(110,95,49,52,95,117,110,104,105,100,101,0);
       let faviconp = String.fromCharCode(114,101,115,101,110,100,95,55,95,51,57,0);
         faviconp += `${parseInt(`${googleY}`) % 2}`;
       let styleu = String.fromCharCode(116,95,50,53,95,105,115,116,115,0);
       let configc = String.fromCharCode(102,95,57,57,95,98,105,116,109,97,112,0);
         faviconp = `${3 >> (Math.min(5, downloadedX.length))}`;
      for (let s = 0; s < 2; s++) {
         googleY *= faviconp.length;
      }
      for (let i = 0; i < 3; i++) {
          let mbridgea = 0;
          let libglogO: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,95,118,95,50,50,0),828], [String.fromCharCode(97,117,110,105,110,105,116,95,112,95,53,54,0),143], [String.fromCharCode(116,114,97,99,107,101,114,95,99,95,50,49,0),737]]);
          let previewR = true;
         styleu = `${styleu.length - 2}`;
         mbridgea >>= Math.min(Math.abs(1), 4);
         libglogO.set(`${previewR}`, 2);
      }
       let libreactnativeblobh = 3.0;
      type_6un = `${3 & type_6un.length}`;
      kinit_p26 = `${2 & kinit_p26.length}`;
      specN += `${(applicationJ == String.fromCharCode(108,0) ? applicationJ.length : parseInt(`${arrowupQ}`))}`;
   while (5.20 <= (arrowupQ / 5.58)) {
       let traminiM = 1.0;
       let defaultlogoW: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,100,97,116,97,95,114,95,52,54,0),804], [String.fromCharCode(104,111,114,105,122,111,110,116,97,108,108,121,95,119,95,48,0),798]]);
       let register_co = String.fromCharCode(114,101,99,117,114,115,105,111,110,95,100,95,57,57,0);
       let analyticf = String.fromCharCode(120,95,54,50,95,97,118,112,105,99,116,117,114,101,0);
       let streaming4 = 5.0;
      if (!analyticf.startsWith(`${defaultlogoW.size}`)) {
         defaultlogoW.set(register_co, (String.fromCharCode(77,0) == register_co ? analyticf.length : register_co.length));
      }
          let listY = 5;
          let cancel2 = String.fromCharCode(99,111,110,100,101,110,115,101,100,95,56,95,53,50,0);
         analyticf += `${analyticf.length & defaultlogoW.size}`;
         listY += 3;
         cancel2 += `${cancel2.length << (Math.min(Math.abs(2), 3))}`;
      while (4 >= (defaultlogoW.size / (Math.max(analyticf.length, 9)))) {
          let overlayG = false;
         defaultlogoW = new Map([[register_co, analyticf.length % 2]]);
         overlayG = (overlayG ? !overlayG : !overlayG);
         break;
      }
         analyticf += `${parseInt(`${streaming4}`)}`;
      if (2.18 <= (1.58 + streaming4)) {
         analyticf = `${parseInt(`${traminiM}`) ^ 1}`;
      }
       let readn = 3.0;
          let expandD: Array<any> = [String.fromCharCode(109,97,116,105,99,95,49,95,49,48,48,0), String.fromCharCode(112,95,52,49,95,115,105,109,112,108,105,102,121,0)];
         streaming4 += (register_co == String.fromCharCode(116,0) ? register_co.length : parseInt(`${readn}`));
         expandD = [1 - expandD.length];
      let custom8 = 6532226.0 >= traminiM;
      do {
         traminiM *= parseInt(`${traminiM}`) ^ analyticf.length;
         if (custom8) {
            break;
         }
      } while (custom8 && (2.17 < (traminiM - 3.19) || (analyticf.length + 5) < 3));
         analyticf += `${(analyticf == String.fromCharCode(109,0) ? parseInt(`${readn}`) : analyticf.length)}`;
      for (let s = 0; s < 3; s++) {
          let default_lm2 = String.fromCharCode(109,95,50,54,95,103,100,105,103,114,97,98,0);
          let selectO = String.fromCharCode(110,95,57,48,95,115,105,109,112,108,101,116,97,103,0);
         readn /= Math.max(defaultlogoW.size % (Math.max(3, 2)), 5);
         default_lm2 += `${default_lm2.length ^ 2}`;
         selectO += `${selectO.length}`;
      }
         defaultlogoW = new Map([[`${defaultlogoW.size}`, 3]]);
      for (let z = 0; z < 1; z++) {
         defaultlogoW = new Map([[register_co, 1]]);
      }
      if (defaultlogoW.get(`${traminiM}`) != null) {
         defaultlogoW.set(analyticf, analyticf.length);
      }
         defaultlogoW = new Map([[register_co, parseInt(`${streaming4}`) ^ register_co.length]]);
      let privacy4 = 6254657.0 >= streaming4;
      do {
          let libjsijniprofilerh = String.fromCharCode(115,115,114,99,95,98,95,52,55,0);
         streaming4 += (String.fromCharCode(82,0) == register_co ? parseInt(`${streaming4}`) : register_co.length);
         libjsijniprofilerh += `${libjsijniprofilerh.length}`;
         if (privacy4) {
            break;
         }
      } while (privacy4 && (2.22 > (4.30 / (Math.max(10, streaming4)))));
      fastn = register_co.endsWith(`${fastn}`);
      break;
   }
      layoutM = `${3 % (Math.max(6, specN.length))}`;
       let googleb = 3.0;
       let countryh = String.fromCharCode(108,105,110,117,120,95,104,95,49,55,0);
      while ((parseInt(`${googleb}`) / (Math.max(countryh.length, 5))) < 4) {
         countryh += `${parseInt(`${googleb}`)}`;
         break;
      }
      if (2.5 == (googleb / 1.17) || (4 ^ countryh.length) == 1) {
         countryh += `${parseInt(`${googleb}`) & countryh.length}`;
      }
         googleb += 3 << (Math.min(2, countryh.length));
         countryh += `${parseInt(`${googleb}`) & 3}`;
       let promotion6 = 2.0;
      if ((4.80 + googleb) <= 5.44 || 5.23 <= (googleb / 4.80)) {
         googleb -= parseInt(`${promotion6}`) + countryh.length;
      }
      arrowupQ *= targetj.length;
   let defaultlogov = layoutM.length >= 7527604;
   do {
       let largebrightnessx = 5.0;
       let resultq = String.fromCharCode(116,101,109,112,111,114,97,114,121,95,52,95,52,48,0);
       let next8 = 1;
       let productI = 5.0;
      for (let g = 0; g < 1; g++) {
         productI += next8 ^ parseInt(`${largebrightnessx}`);
      }
          let dycreatorA = String.fromCharCode(103,95,56,52,95,103,108,121,112,104,0);
          let plash4 = 3.0;
          let libaneY = String.fromCharCode(109,100,105,97,95,98,95,51,57,0);
         next8 /= Math.max(next8, 4);
         dycreatorA += `${libaneY.length - dycreatorA.length}`;
         plash4 -= parseFloat(`${libaneY.length | 1}`);
      let downloadingi = String.fromCharCode(119,103,53,111,104,57,51,0) == resultq;
      do {
         resultq = `${resultq.length}`;
         if (downloadingi) {
            break;
         }
      } while ((resultq.includes(`${largebrightnessx}`)) && downloadingi);
      let yellowredcardf = 9261817.0 >= productI;
      do {
         productI -= parseInt(`${productI}`);
         if (yellowredcardf) {
            break;
         }
      } while (((resultq.length ^ 1) == 1) && yellowredcardf);
          let code6 = 2.0;
          let minivodz: Array<any> = [322, 931];
          let libreactnativejnip = 3.0;
         next8 &= 1;
         code6 -= parseFloat(`${parseInt(`${libreactnativejnip}`) >> (Math.min(minivodz.length, 4))}`);
         minivodz = [2 << (Math.min(4, minivodz.length))];
         libreactnativejnip *= parseFloat(`${2}`);
         resultq = "3";
         next8 -= 3;
       let borderlessj = String.fromCharCode(115,111,99,114,101,97,116,101,95,48,95,52,50,0);
       let goalc = 0.0;
          let libimagepipeline6: Array<any> = [42, 584, 602];
          let indicatorT: Map<any, any> = new Map([[String.fromCharCode(97,100,100,114,95,120,95,54,53,0),643], [String.fromCharCode(120,95,50,53,95,105,110,116,101,114,109,101,100,105,97,116,101,0),557]]);
          let disconnectedlogo7 = String.fromCharCode(109,99,111,114,101,95,111,95,54,48,0);
         goalc *= (String.fromCharCode(105,0) == disconnectedlogo7 ? parseInt(`${largebrightnessx}`) : disconnectedlogo7.length);
         libimagepipeline6 = [3 | indicatorT.size];
         indicatorT = new Map([[`${indicatorT.size}`, indicatorT.size]]);
      for (let e = 0; e < 3; e++) {
         borderlessj += `${borderlessj.length}`;
      }
          let iconshareT = false;
          let penaltygoalj = 1.0;
         borderlessj += "2";
         iconshareT = penaltygoalj >= 65.30;
         penaltygoalj *= parseInt(`${penaltygoalj}`) - 3;
      layoutM += `${specN.length ^ 3}`;
      if (defaultlogov) {
         break;
      }
   } while (defaultlogov && (5 >= applicationJ.length));
      runtimeschedulerv = specN == String.fromCharCode(88,0);
   if (!runtimeschedulerv || !fastn) {
       let loading9 = 1;
       let configure6 = String.fromCharCode(108,111,116,116,105,101,95,97,95,57,57,0);
       let matchesf = 5.0;
       let moonp: Array<any> = [360, 73];
       let nativemodulej = 3;
      if (2 > configure6.length) {
          let castr = String.fromCharCode(101,108,115,95,119,95,52,51,0);
          let pingp = String.fromCharCode(111,109,112,114,101,115,115,111,114,95,103,95,57,49,0);
          let libfabricjniB: Array<any> = [454, 333];
         configure6 = "1";
         castr += `${castr.length}`;
         pingp = `${2 + castr.length}`;
         libfabricjniB = [libfabricjniB.length / (Math.max(2, 5))];
      }
      let static_zQ = 6466142.0 >= matchesf;
      do {
         matchesf += parseFloat(`${2}`);
         if (static_zQ) {
            break;
         }
      } while ((4.49 == (matchesf * nativemodulej)) && static_zQ);
         moonp.push(2);
      let filedR = 8465020 >= nativemodulej;
      do {
          let videojsZ = String.fromCharCode(99,111,100,97,98,108,101,95,50,95,51,49,0);
          let predictionwinb = String.fromCharCode(107,95,49,49,95,115,117,98,106,101,99,116,105,118,101,115,0);
          let servicev = 0.0;
         nativemodulej += moonp.length >> (Math.min(1, Math.abs(loading9)));
         videojsZ += `${parseInt(`${servicev}`)}`;
         predictionwinb = `${predictionwinb.length >> (Math.min(Math.abs(2), 3))}`;
         servicev -= parseFloat(`${predictionwinb.length ^ 2}`);
         if (filedR) {
            break;
         }
      } while (filedR && (5 <= (nativemodulej ^ 1)));
      for (let q = 0; q < 1; q++) {
         matchesf -= parseFloat(`${moonp.length / (Math.max(3, 7))}`);
      }
         loading9 /= Math.max((configure6 == String.fromCharCode(103,0) ? parseInt(`${matchesf}`) : configure6.length), 4);
       let pagination6 = 3;
       let iconsettingW = 1;
          let inactiveZ = true;
          let containerf = true;
         pagination6 >>= Math.min(parseInt(`${Math.abs((loading9 >> (Math.min(5, Math.abs((containerf ? 2 : 3))))))}`), 2);
         inactiveZ = !inactiveZ;
         containerf = !inactiveZ && inactiveZ;
          let videoD: Array<any> = [String.fromCharCode(107,95,57,50,95,118,101,114,105,102,105,101,114,0), String.fromCharCode(101,114,97,115,101,100,95,48,95,50,56,0), String.fromCharCode(113,95,57,51,95,118,112,100,97,116,97,0)];
         moonp.push(1 % (Math.max(10, loading9)));
         videoD.push(videoD.length);
      while (parseInt(`${matchesf}`) >= configure6.length) {
         matchesf -= (parseFloat(`${configure6 == String.fromCharCode(100,0) ? configure6.length : pagination6}`));
         break;
      }
         loading9 %= Math.max(1, 3);
         configure6 = `${iconsettingW}`;
         pagination6 *= 1 * moonp.length;
      for (let w = 0; w < 3; w++) {
          let fastforwardl = false;
         loading9 -= configure6.length >> (Math.min(2, Math.abs(iconsettingW)));
         fastforwardl = !fastforwardl || fastforwardl;
      }
          let disconnectedg = String.fromCharCode(119,105,116,104,100,114,97,119,95,55,95,50,48,0);
          let statistics4 = String.fromCharCode(116,95,50,57,95,98,108,105,110,100,105,110,103,0);
          let sidej = String.fromCharCode(121,95,54,56,95,100,99,98,122,0);
         matchesf *= parseFloat(`${loading9 * 1}`);
         disconnectedg = `${(String.fromCharCode(120,0) == disconnectedg ? disconnectedg.length : statistics4.length)}`;
         statistics4 += `${sidej.length ^ 2}`;
         sidej = "3";
      fastn = (loading9 - matchesf) > 27;
   }
       let pointd = String.fromCharCode(105,108,111,103,95,56,95,56,52,0);
       let paginationZ = 4.0;
      let cleary = pointd == String.fromCharCode(107,122,119,103,112,107,57,55,0);
      do {
          let arrowT = 0.0;
          let projectN = String.fromCharCode(101,109,105,116,116,101,100,95,116,95,55,48,0);
         pointd += `${parseInt(`${paginationZ}`)}`;
         arrowT -= parseFloat(`${parseInt(`${arrowT}`) * projectN.length}`);
         projectN += `${projectN.length & 2}`;
         if (cleary) {
            break;
         }
      } while ((!pointd.startsWith(`${paginationZ}`)) && cleary);
         paginationZ += parseFloat(`${parseInt(`${paginationZ}`) & 1}`);
      while (4 >= pointd.length) {
         pointd = `${2 >> (Math.min(1, pointd.length))}`;
         break;
      }
         pointd = `${1 | pointd.length}`;
      let iconbellactive2 = 5023372.0 <= paginationZ;
      do {
          let minivodj = 3.0;
          let graphf = String.fromCharCode(103,95,52,48,95,99,114,111,108,108,0);
          let backwardH = 4;
          let kickC = String.fromCharCode(103,95,54,50,95,110,118,111,105,99,101,0);
         paginationZ /= Math.max(parseFloat(`${parseInt(`${paginationZ}`) - backwardH}`), 2);
         minivodj += parseFloat(`${graphf.length}`);
         graphf += "1";
         backwardH += kickC.length;
         kickC += `${graphf.length}`;
         if (iconbellactive2) {
            break;
         }
      } while (((2 << (Math.min(5, pointd.length))) >= 5 && (2 >> (Math.min(4, pointd.length))) >= 2) && iconbellactive2);
          let internetw = 3;
          let sourcej = 3.0;
          let unselectedA: Map<any, any> = new Map([[String.fromCharCode(108,95,55,56,95,102,115,112,112,0),String.fromCharCode(99,95,53,53,95,116,114,105,109,109,101,100,0)], [String.fromCharCode(119,95,54,57,95,108,111,110,103,116,101,114,109,0),String.fromCharCode(112,95,49,57,95,103,108,121,112,104,115,0)], [String.fromCharCode(103,101,116,111,112,116,95,118,95,52,55,0),String.fromCharCode(115,95,57,95,109,98,109,111,100,101,0)]]);
         paginationZ *= parseFloat(`${pointd.length - 1}`);
         internetw <<= Math.min(Math.abs(parseInt(`${sourcej}`)), 4);
         sourcej += parseInt(`${sourcej}`);
         unselectedA = new Map([[`${internetw}`, parseInt(`${sourcej}`)]]);
      fastn = ((layoutM.length | (!fastn ? layoutM.length : 89)) == 89);
   for (let m = 0; m < 2; m++) {
      type_6un += `${applicationJ.length}`;
   }
      runtimeschedulerv = (parseInt(`${arrowupQ}`) + specN.length) >= 43;
   while (!runtimeschedulerv) {
      type_6un += "2";
      break;
   }
   if (4 > (4 << (Math.min(1, targetj.length))) || (targetj.length + 4) > 3) {
      targetj += `${type_6un.length}`;
   }
       let xadsdk3: Map<any, any> = new Map([[String.fromCharCode(107,95,54,51,95,99,111,111,107,105,101,0),257], [String.fromCharCode(119,97,107,101,117,112,95,105,95,52,0),87], [String.fromCharCode(118,105,101,119,115,95,100,95,51,51,0),286]]);
      let eactL = 5361996 >= xadsdk3.size;
      do {
         xadsdk3 = new Map([[`${xadsdk3.size}`, 2]]);
         if (eactL) {
            break;
         }
      } while (eactL && (Array.from(xadsdk3.keys()).includes(`${xadsdk3.size}`)));
      if (!Array.from(xadsdk3.keys()).includes(`${xadsdk3.size}`)) {
          let controlsi = false;
          let libfbjnin: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,100,101,115,99,114,105,112,116,111,114,95,103,95,57,57,0),204], [String.fromCharCode(116,104,117,109,98,110,97,105,108,95,55,95,50,52,0),557]]);
          let gesture7 = 0.0;
         xadsdk3.set(`${controlsi}`, xadsdk3.size + 1);
         libfbjnin.set(`${gesture7}`, libfbjnin.size / (Math.max(3, 5)));
         gesture7 -= parseInt(`${gesture7}`);
      }
      for (let g = 0; g < 2; g++) {
         xadsdk3.set(`${xadsdk3.size}`, xadsdk3.size);
      }
      fastn = !runtimeschedulerv || arrowupQ == 71.8;
      specN += `${(parseInt(`${arrowupQ}`) ^ (fastn ? 1 : 5))}`;
      type_6un = `${1 - applicationJ.length}`;
   let rulesA = type_6un == String.fromCharCode(111,102,48,0);
   do {
      type_6un = `${targetj.length}`;
      if (rulesA) {
         break;
      }
   } while (rulesA && (!runtimeschedulerv));
   let projectA = runtimeschedulerv ? !runtimeschedulerv : runtimeschedulerv;
   do {
      runtimeschedulerv = !club5.startsWith(`${fastn}`);
      if (projectA) {
         break;
      }
   } while ((!runtimeschedulerv) && projectA);
   while (!runtimeschedulerv) {
       let awayteamfieldp = String.fromCharCode(107,95,54,56,95,101,120,112,105,114,101,0);
      while (awayteamfieldp != String.fromCharCode(98,0)) {
         awayteamfieldp += "3";
         break;
      }
         awayteamfieldp += `${(awayteamfieldp == String.fromCharCode(55,0) ? awayteamfieldp.length : awayteamfieldp.length)}`;
         awayteamfieldp = `${3 >> (Math.min(3, awayteamfieldp.length))}`;
      arrowupQ += 1 / (Math.max(2, parseInt(`${arrowupQ}`)));
      break;
   }
      runtimeschedulerv = (type_6un.length & club5.length) > 67;
   if (applicationJ.length <= 2 || fastn) {
      fastn = 1 == targetj.length;
   }
      layoutM = `${(3 * (runtimeschedulerv ? 4 : 1))}`;
       let anythinko = String.fromCharCode(108,95,50,52,95,111,112,99,111,100,101,115,0);
       let commentY = 0;
       let huaweiW = 3;
       let inactives = String.fromCharCode(119,104,105,108,101,95,105,95,57,57,0);
       let windK = String.fromCharCode(117,95,53,48,95,99,111,112,121,99,111,111,107,101,114,0);
         huaweiW >>= Math.min(Math.abs(1 | huaweiW), 4);
      if (1 == (commentY | 5)) {
         commentY >>= Math.min(1, Math.abs(1 + inactives.length));
      }
      let cornerU = 7814723 <= huaweiW;
      do {
          let mimog = String.fromCharCode(104,97,115,104,107,101,121,95,57,95,51,48,0);
          let subtextT = true;
         huaweiW %= Math.max(((subtextT ? 3 : 2) ^ 2), 5);
         mimog += `${mimog.length}`;
         subtextT = (mimog.length % (Math.max(10, mimog.length))) >= 45;
         if (cornerU) {
            break;
         }
      } while (cornerU && ((1 * windK.length) >= 5));
      for (let w = 0; w < 3; w++) {
         inactives = `${inactives.length}`;
      }
      while (commentY >= 2) {
         huaweiW ^= anythinko.length % (Math.max(1, 9));
         break;
      }
          let arrowc = String.fromCharCode(112,114,101,102,101,116,99,104,101,114,95,120,95,54,55,0);
          let libavformato = 2.0;
         windK = `${windK.length}`;
         arrowc = `${parseInt(`${libavformato}`) >> (Math.min(arrowc.length, 5))}`;
         libavformato *= (String.fromCharCode(99,0) == arrowc ? arrowc.length : parseInt(`${libavformato}`));
      while (1 > (1 + commentY)) {
          let settingsU = String.fromCharCode(99,111,109,112,117,116,101,100,95,99,95,57,52,0);
          let bufferr = String.fromCharCode(100,117,97,108,95,99,95,51,53,0);
          let circler = 5.0;
          let disconnectedi = String.fromCharCode(105,114,100,102,116,95,117,95,53,49,0);
         anythinko = `${(String.fromCharCode(57,0) == inactives ? huaweiW : inactives.length)}`;
         settingsU = `${parseInt(`${circler}`)}`;
         bufferr += `${settingsU.length}`;
         circler /= Math.max(3, parseFloat(`${parseInt(`${circler}`)}`));
         disconnectedi += `${(String.fromCharCode(51,0) == bufferr ? bufferr.length : settingsU.length)}`;
         break;
      }
      if (2 > (inactives.length / (Math.max(9, huaweiW)))) {
          let orangeclocki = String.fromCharCode(97,120,112,95,105,95,57,51,0);
          let areaD = 0.0;
          let left3 = 5.0;
         huaweiW -= (String.fromCharCode(87,0) == windK ? windK.length : commentY);
         orangeclocki += `${orangeclocki.length}`;
         areaD += parseFloat(`${3}`);
         left3 *= (orangeclocki == String.fromCharCode(68,0) ? parseInt(`${areaD}`) : orangeclocki.length);
      }
      runtimeschedulerv = anythinko.length >= 52 || runtimeschedulerv;
      runtimeschedulerv = String.fromCharCode(83,0) == targetj;
       let footballfieldG = String.fromCharCode(113,117,111,116,101,95,51,95,56,54,0);
         footballfieldG = `${(String.fromCharCode(101,0) == footballfieldG ? footballfieldG.length : footballfieldG.length)}`;
      let window_7H = footballfieldG == String.fromCharCode(120,103,99,48,121,57,115,0);
      do {
         footballfieldG = `${footballfieldG.length & footballfieldG.length}`;
         if (window_7H) {
            break;
         }
      } while ((footballfieldG == String.fromCharCode(74,0)) && window_7H);
      if (3 == footballfieldG.length) {
         footballfieldG += `${1 << (Math.min(4, footballfieldG.length))}`;
      }
      targetj += `${3 % (Math.max(5, specN.length))}`;
   for (let h = 0; h < 3; h++) {
      runtimeschedulerv = 40 == specN.length;
   }
      runtimeschedulerv = fastn && type_6un.length < 99;
      fastn = specN == applicationJ;
   let nterstitialu = runtimeschedulerv ? !runtimeschedulerv : runtimeschedulerv;
   do {
      runtimeschedulerv = targetj.includes(`${runtimeschedulerv}`);
      if (nterstitialu) {
         break;
      }
   } while (nterstitialu && (runtimeschedulerv && applicationJ.length >= 1));
   let exampleimage1 = fastn ? !fastn : fastn;
   do {
      fastn = club5.length < parseInt(`${arrowupQ}`);
      if (exampleimage1) {
         break;
      }
   } while (exampleimage1 && (!fastn));
      fastn = !fastn;
      club5 += `${targetj.length}`;
       let description_cuW = 4;
       let xadsdks = 5.0;
          let greym = 0.0;
          let cast3: Array<any> = [639, 849];
          let whiteticke = 4;
         xadsdks -= parseInt(`${greym}`);
         greym -= parseFloat(`${cast3.length << (Math.min(2, Math.abs(whiteticke)))}`);
         cast3 = [2 ^ cast3.length];
         whiteticke %= Math.max(3, 4);
      if (xadsdks <= description_cuW) {
         xadsdks /= Math.max(description_cuW / (Math.max(parseInt(`${xadsdks}`), 4)), 1);
      }
      for (let l = 0; l < 2; l++) {
          let imagemanagere: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,118,97,108,115,95,48,95,51,56,0),386], [String.fromCharCode(108,95,53,48,95,108,111,119,101,114,99,97,115,101,100,0),167], [String.fromCharCode(100,95,56,57,95,99,97,114,114,121,111,117,116,0),627]]);
         description_cuW &= parseInt(`${xadsdks}`);
         imagemanagere = new Map([[`${imagemanagere.size}`, imagemanagere.size]]);
      }
       let mintegralt = true;
       let greyW = false;
      if (2 < description_cuW) {
         greyW = !mintegralt;
      }
      let darkJ = 8493445 >= description_cuW;
      do {
          let iconstarG: Array<any> = [String.fromCharCode(97,117,103,109,101,110,116,95,122,95,51,52,0), String.fromCharCode(117,95,57,57,95,108,105,115,116,110,101,114,115,0), String.fromCharCode(108,111,103,103,101,114,95,48,95,49,56,0)];
          let lightN = String.fromCharCode(99,104,97,114,116,95,121,95,54,49,0);
          let penaltyS: Array<any> = [41, 662, 804];
         description_cuW -= parseInt(`${xadsdks}`) << (Math.min(2, Math.abs(description_cuW)));
         iconstarG = [(String.fromCharCode(70,0) == lightN ? penaltyS.length : lightN.length)];
         penaltyS = [lightN.length - 2];
         if (darkJ) {
            break;
         }
      } while ((2 < (3 - description_cuW)) && darkJ);
      type_6un = `${2 + specN.length}`;
   let acceptedD = 6270341 <= specN.length;
   do {
      specN += `${((fastn ? 2 : 1))}`;
      if (acceptedD) {
         break;
      }
   } while ((specN.length < 5) && acceptedD);
      fastn = applicationJ.length >= 47;
   let debugl = club5.length <= 6239908;
   do {
       let mbjscommonQ = 4.0;
       let whatsappC: Array<any> = [String.fromCharCode(97,95,55,53,95,99,108,111,115,101,100,0), String.fromCharCode(108,122,109,97,95,98,95,53,48,0)];
       let lightW: Array<any> = [469, 276, 882];
       let chatx: Array<any> = [881, 299];
       let private_hm: Map<any, any> = new Map([[String.fromCharCode(108,105,98,97,111,109,95,109,95,50,57,0),189], [String.fromCharCode(104,95,49,51,95,116,102,117,101,108,0),681]]);
      while (lightW.length > 1) {
         whatsappC.push(3 - lightW.length);
         break;
      }
         whatsappC = [lightW.length];
       let bang9 = 4.0;
       let colors9 = 5.0;
          let kuaishou1: Array<any> = [111, 996, 37];
          let reacty = String.fromCharCode(118,95,55,56,95,100,98,108,105,110,116,0);
         lightW = [chatx.length];
         kuaishou1.push(kuaishou1.length << (Math.min(reacty.length, 3)));
         reacty = `${kuaishou1.length}`;
          let sharemodalX = String.fromCharCode(101,109,117,101,100,103,101,95,110,95,56,52,0);
         whatsappC.push(whatsappC.length << (Math.min(Math.abs(3), 1)));
         sharemodalX = "2";
         colors9 /= Math.max(3, 2 + chatx.length);
      for (let r = 0; r < 2; r++) {
         colors9 -= parseInt(`${bang9}`) ^ whatsappC.length;
      }
          let muted6: Map<any, any> = new Map([[String.fromCharCode(107,95,49,54,95,99,111,110,118,0),546], [String.fromCharCode(98,95,51,55,95,112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,0),466]]);
          let ksadX = 3.0;
          let liblogger4 = 5.0;
         chatx.push(parseInt(`${mbjscommonQ}`) % (Math.max(6, parseInt(`${liblogger4}`))));
         muted6 = new Map([[`${muted6.size}`, parseInt(`${ksadX}`)]]);
         ksadX /= Math.max(1, parseInt(`${ksadX}`));
         liblogger4 *= parseFloat(`${parseInt(`${ksadX}`) / 1}`);
      if ((whatsappC.length * 3) >= 4 && 3 >= (private_hm.size * 3)) {
          let componentsK: Array<any> = [186, 215, 750];
          let collectionP = 3.0;
         whatsappC = [1 + chatx.length];
         componentsK.push(3);
         collectionP += parseInt(`${collectionP}`);
      }
      while ((4 << (Math.min(2, lightW.length))) >= 4 || (lightW.length + parseInt(`${colors9}`)) >= 4) {
          let mbnativeadvanced0 = 5;
          let history2: Map<any, any> = new Map([[String.fromCharCode(118,95,56,53,95,97,108,112,104,97,0),519], [String.fromCharCode(114,95,56,95,102,105,108,116,101,114,117,118,0),1000], [String.fromCharCode(97,95,53,51,95,115,116,105,99,107,101,114,101,100,0),415]]);
         lightW.push(history2.size & parseInt(`${mbjscommonQ}`));
         mbnativeadvanced0 *= mbnativeadvanced0;
         history2 = new Map([[`${mbnativeadvanced0}`, mbnativeadvanced0]]);
         break;
      }
      for (let g = 0; g < 3; g++) {
         bang9 /= Math.max(5, parseInt(`${mbjscommonQ}`) % (Math.max(parseInt(`${bang9}`), 10)));
      }
      let controlm = 9458035 >= lightW.length;
      do {
         lightW.push(whatsappC.length / (Math.max(2, 8)));
         if (controlm) {
            break;
         }
      } while (controlm && ((lightW.length - parseInt(`${bang9}`)) <= 3 || (4.37 - bang9) <= 1.1));
          let themer = 3.0;
          let anytimeO = String.fromCharCode(104,95,53,52,95,115,111,114,116,101,114,0);
         bang9 *= 3 / (Math.max(3, parseInt(`${themer}`)));
         themer *= anytimeO.length;
         anytimeO = `${(anytimeO == String.fromCharCode(79,0) ? anytimeO.length : anytimeO.length)}`;
      if ((private_hm.size + parseInt(`${colors9}`)) == 2 || (colors9 + 5.52) == 1.89) {
         private_hm = new Map([[`${chatx.length}`, 1]]);
      }
       let layoutk = String.fromCharCode(118,95,55,54,95,105,110,100,105,99,97,116,105,111,110,0);
       let qaagA = String.fromCharCode(102,95,49,51,95,105,110,102,111,115,0);
      club5 = `${parseInt(`${arrowupQ}`)}`;
      if (debugl) {
         break;
      }
   } while (((parseInt(`${arrowupQ}`) / 3) < 1 && (parseInt(`${arrowupQ}`) / (Math.max(10, club5.length))) < 3) && debugl);
       let actionsJ = String.fromCharCode(116,104,101,95,109,95,53,51,0);
       let upgradeP: Array<any> = [830, 433];
      if (4 < (upgradeP.length >> (Math.min(Math.abs(5), 2))) || 4 < (upgradeP.length >> (Math.min(Math.abs(5), 4)))) {
         actionsJ += `${(String.fromCharCode(51,0) == actionsJ ? actionsJ.length : upgradeP.length)}`;
      }
      while (5 < (4 % (Math.max(3, upgradeP.length)))) {
         actionsJ += `${upgradeP.length << (Math.min(Math.abs(2), 2))}`;
         break;
      }
      let photoi = 6256866 <= actionsJ.length;
      do {
         actionsJ = `${1 % (Math.max(3, upgradeP.length))}`;
         if (photoi) {
            break;
         }
      } while ((2 <= (4 << (Math.min(2, upgradeP.length))) && 4 <= (upgradeP.length << (Math.min(actionsJ.length, 3)))) && photoi);
      while (3 < (actionsJ.length ^ upgradeP.length) || (upgradeP.length ^ actionsJ.length) < 3) {
         upgradeP = [upgradeP.length * actionsJ.length];
         break;
      }
         upgradeP.push(actionsJ.length / 3);
      for (let c = 0; c < 3; c++) {
         upgradeP.push(1 ^ actionsJ.length);
      }
      runtimeschedulerv = ((type_6un.length >> (Math.min(4, Math.abs((runtimeschedulerv ? type_6un.length : 97))))) > 97);
   let signinup9 = String.fromCharCode(113,110,105,99,107,106,55,112,105,0) == specN;
   do {
      specN = `${specN.length}`;
      if (signinup9) {
         break;
      }
   } while (signinup9 && (type_6un == String.fromCharCode(67,0)));
},
  isMatchPage = true,
  bgDark = false,
  setShowBecomeVIPOverlay,
}: wwIndexDice) => {
  const navigation = useNavigation();
  const {colors, textVariants, spacing} = useTheme();
  const dispatch = useDispatch();
  let totalViews = 0;
  console.log('sports');

  const calTotalViews = () => {
       let photo7 = 4.0;
    let analyticU = 1.0;
    let libfbS = 4.0;
    let sourced = 1;
    let mutedz = 0;
    let morew = true;
    let libjsijniprofilera = 5.0;
    let libtanK = String.fromCharCode(105,116,101,114,97,116,111,114,95,55,95,56,52,0);
   if (4.69 < (photo7 / 2.30) && morew) {
      photo7 -= 3 % (Math.max(parseInt(`${libjsijniprofilera}`), 4));
   }
      photo7 /= Math.max(parseInt(`${photo7}`) % 2, 5);
      libfbS -= parseFloat(`${3 | parseInt(`${libfbS}`)}`);

    if (matchSche?.streams != undefined && matchSche?.streams.length > 0) {

   let floating8 = 5752692.0 >= libfbS;
   do {
       let playercommono: Array<any> = [373, 248, 110];
      let hookV = 6938417 <= playercommono.length;
      do {
          let chaty: Map<any, any> = new Map([[String.fromCharCode(115,119,97,112,112,101,100,95,100,95,49,51,0),String.fromCharCode(99,104,101,99,107,101,100,95,120,95,56,52,0)], [String.fromCharCode(100,111,119,110,108,111,97,100,101,114,95,114,95,52,57,0),String.fromCharCode(117,95,52,51,95,101,108,108,105,111,116,116,0)], [String.fromCharCode(112,95,50,54,95,101,113,117,105,108,105,98,114,105,117,109,0),String.fromCharCode(104,99,104,97,99,104,97,95,98,95,53,57,0)]]);
          let topicY = 4;
         playercommono = [chaty.size << (Math.min(3, Math.abs(topicY)))];
         if (hookV) {
            break;
         }
      } while (hookV && (3 >= (playercommono.length * playercommono.length) && 3 >= (playercommono.length * 3)));
      for (let x = 0; x < 1; x++) {
         playercommono = [playercommono.length];
      }
       let orangeclockU = 5;
      libfbS -= parseFloat(`${mutedz >> (Math.min(Math.abs(parseInt(`${photo7}`)), 5))}`);
      if (floating8) {
         break;
      }
   } while (floating8 && (3.77 <= (photo7 / (Math.max(libfbS, 8)))));
   let weatherV = 5293903.0 <= libfbS;
   do {
      libfbS /= Math.max(parseFloat(`${parseInt(`${analyticU}`) | 2}`), 3);
      if (weatherV) {
         break;
      }
   } while (weatherV && (3 >= (3 - mutedz) && (2.35 - libfbS) >= 2.11));
      photo7 += mutedz % 2;
      matchSche?.streams.map(e => (totalViews += e.view_num));

      analyticU *= parseFloat(`${3}`);
      photo7 *= 2;
   for (let w = 0; w < 3; w++) {
      analyticU /= Math.max(parseFloat(`${parseInt(`${analyticU}`) + 2}`), 3);
   }
    }

    let dividedTotalViews = 0;

   let libzeus4 = photo7 <= 5193071.0;
   do {
      photo7 *= parseInt(`${libfbS}`);
      if (libzeus4) {
         break;
      }
   } while (libzeus4 && (2.2 <= photo7));
   while (1.68 < (analyticU * 4.56)) {
      analyticU -= parseFloat(`${sourced}`);
      break;
   }
      sourced += 2;
    if (totalViews / 10000 >= 1) {

      analyticU /= Math.max(parseFloat(`${parseInt(`${photo7}`) * mutedz}`), 2);
      analyticU /= Math.max(parseFloat(`${sourced ^ mutedz}`), 4);
   let attributedstringh = sourced >= 9872752;
   do {
      sourced /= Math.max(1, parseInt(`${photo7}`) & 1);
      if (attributedstringh) {
         break;
      }
   } while (attributedstringh && ((sourced ^ mutedz) <= 1 && (sourced ^ 1) <= 1));
      dividedTotalViews = totalViews / 10000;

   if (libjsijniprofilera <= 1.33) {
      libjsijniprofilera *= parseFloat(`${parseInt(`${photo7}`)}`);
   }
   let flipperm = 8886962.0 <= libjsijniprofilera;
   do {
      libjsijniprofilera /= Math.max(parseFloat(`${2}`), 1);
      if (flipperm) {
         break;
      }
   } while (flipperm && ((libjsijniprofilera * 3.97) >= 4.100 && (analyticU / 3.97) >= 4.96));
   if ((5.43 * libfbS) >= 1.45) {
      libfbS += parseFloat(`${parseInt(`${libjsijniprofilera}`) % 3}`);
   }
      return dividedTotalViews.toFixed(1) + '万';
    }

    return totalViews;
  };

  const matchClicked = () => {
       let countdownS = 5.0;
    let auto_3f = String.fromCharCode(116,112,99,95,97,95,50,0);
    let imagesC: Map<any, any> = new Map([[String.fromCharCode(100,95,49,53,95,102,105,108,101,115,0),String.fromCharCode(101,120,105,115,116,105,110,103,95,122,95,53,51,0)], [String.fromCharCode(117,110,99,114,111,112,112,101,100,95,114,95,53,54,0),String.fromCharCode(109,97,116,99,104,105,110,103,95,104,95,50,49,0)]]);
    let philippinesK: Map<any, any> = new Map([[String.fromCharCode(115,109,97,108,108,101,115,116,95,55,95,52,49,0),String.fromCharCode(99,118,105,100,95,111,95,54,57,0)], [String.fromCharCode(98,105,116,118,101,99,116,111,114,95,56,95,52,53,0),String.fromCharCode(106,95,53,95,100,101,99,114,121,112,116,101,100,0)], [String.fromCharCode(114,101,113,117,101,115,116,115,95,117,95,54,48,0),String.fromCharCode(100,95,55,56,95,117,110,108,111,99,107,101,100,0)]]);
    let defaultprofilepicm = 1.0;
    let backgroundY = String.fromCharCode(107,95,50,50,95,97,117,116,111,0);
    let animationsf: Map<any, any> = new Map([[String.fromCharCode(103,95,50,57,95,114,101,113,117,105,114,101,109,101,110,116,0),82], [String.fromCharCode(97,110,116,105,97,108,105,97,115,95,97,95,57,48,0),651], [String.fromCharCode(105,95,55,52,95,100,101,115,99,101,110,116,0),879]]);
    let transferG: Array<any> = [152, 878, 680];
    let search0 = String.fromCharCode(106,95,51,95,115,113,114,116,0);
   for (let g = 0; g < 2; g++) {
      backgroundY = "3";
   }
   for (let k = 0; k < 1; k++) {
      backgroundY += `${animationsf.size | 1}`;
   }
   let smallo = 6939463 <= auto_3f.length;
   do {
       let weibo8 = String.fromCharCode(102,97,107,101,95,110,95,56,48,0);
       let indicatorY = 5.0;
       let libloggerq = 4.0;
       let playercommonz: Map<any, any> = new Map([[String.fromCharCode(111,95,54,54,95,114,101,115,117,108,116,0),873], [String.fromCharCode(116,104,114,111,119,105,110,103,95,56,95,54,52,0),682]]);
         weibo8 = `${weibo8.length % 2}`;
          let pause6 = String.fromCharCode(109,95,57,95,104,99,115,99,97,108,101,0);
          let listY = 0.0;
         libloggerq += parseFloat(`${pause6.length}`);
         pause6 = `${3 | parseInt(`${listY}`)}`;
         listY /= Math.max(parseInt(`${listY}`), 2);
      while ((3 ^ playercommonz.size) > 3 && (playercommonz.size * parseInt(`${libloggerq}`)) > 3) {
          let runtimeh = String.fromCharCode(97,115,99,101,110,116,95,115,95,55,51,0);
          let eactu = String.fromCharCode(103,95,52,54,95,115,117,112,101,114,115,101,116,0);
          let zhuboM: Map<any, any> = new Map([[String.fromCharCode(109,95,53,57,95,116,117,114,110,0),566], [String.fromCharCode(117,95,55,48,95,117,110,100,101,114,102,108,111,119,0),654], [String.fromCharCode(99,105,110,118,105,100,101,111,95,110,95,57,51,0),629]]);
          let episodesn = String.fromCharCode(105,95,50,51,95,115,117,98,118,105,101,119,0);
          let libsgcoreW: Array<any> = [310, 101];
         libloggerq *= parseFloat(`${2}`);
         runtimeh = `${eactu.length >> (Math.min(Math.abs(2), 1))}`;
         eactu = "3";
         zhuboM.set(runtimeh, runtimeh.length);
         episodesn = `${(String.fromCharCode(100,0) == eactu ? eactu.length : runtimeh.length)}`;
         libsgcoreW = [2];
         break;
      }
         indicatorY /= Math.max(4, 3);
      if ((parseInt(`${indicatorY}`) * weibo8.length) >= 2 && 4 >= (2 * weibo8.length)) {
          let backwardg = String.fromCharCode(97,95,51,53,95,116,119,111,112,111,105,110,116,0);
          let sportsb = 2.0;
         weibo8 += `${3 & parseInt(`${libloggerq}`)}`;
         backwardg += `${backwardg.length}`;
         sportsb *= 1 ^ backwardg.length;
      }
      if (3 == (weibo8.length | 4) && (playercommonz.size | weibo8.length) == 4) {
         playercommonz.set(`${libloggerq}`, playercommonz.size);
      }
      for (let b = 0; b < 2; b++) {
         indicatorY += 1 * weibo8.length;
      }
         weibo8 += `${2 * weibo8.length}`;
      while ((weibo8.length ^ 4) <= 2) {
         weibo8 += `${playercommonz.size / (Math.max(5, weibo8.length))}`;
         break;
      }
          let score3: Map<any, any> = new Map([[String.fromCharCode(101,110,116,101,114,95,48,95,56,0),796], [String.fromCharCode(116,95,57,49,95,99,111,110,116,114,97,115,116,0),224]]);
         libloggerq *= parseFloat(`${weibo8.length}`);
         score3 = new Map([[`${score3.size}`, 3 / (Math.max(1, score3.size))]]);
         weibo8 = `${parseInt(`${libloggerq}`) & 1}`;
         playercommonz.set(`${libloggerq}`, weibo8.length - parseInt(`${libloggerq}`));
      auto_3f = "3";
      if (smallo) {
         break;
      }
   } while (smallo && (5 <= (auto_3f.length - philippinesK.size) || (philippinesK.size - auto_3f.length) <= 5));
      backgroundY += `${parseInt(`${defaultprofilepicm}`)}`;

    navigation.navigate('体育详情', {
      matchId: matchSche?.id === null ? undefined : matchSche.id,
    });

   for (let v = 0; v < 1; v++) {
      auto_3f = `${(String.fromCharCode(66,0) == auto_3f ? philippinesK.size : auto_3f.length)}`;
   }
   if (4.67 == countdownS) {
       let unreadg = 1.0;
       let nterstitial9: Map<any, any> = new Map([[String.fromCharCode(99,95,52,50,95,97,114,107,101,114,0),992], [String.fromCharCode(98,101,105,103,110,101,116,95,115,95,50,54,0),632]]);
      for (let t = 0; t < 1; t++) {
         unreadg -= parseInt(`${unreadg}`);
      }
      for (let g = 0; g < 3; g++) {
         nterstitial9 = new Map([[`${nterstitial9.size}`, nterstitial9.size % (Math.max(1, 10))]]);
      }
      let vipsportg = unreadg <= 7378499.0;
      do {
         unreadg -= nterstitial9.size * parseInt(`${unreadg}`);
         if (vipsportg) {
            break;
         }
      } while (vipsportg && (4.97 > (unreadg + nterstitial9.size)));
      for (let v = 0; v < 3; v++) {
          let iconarrowrightn: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,105,110,103,95,101,95,52,0),138], [String.fromCharCode(115,115,101,114,116,95,108,95,53,54,0),562], [String.fromCharCode(111,108,108,101,99,116,105,111,110,115,95,50,95,51,56,0),760]]);
          let macau8 = String.fromCharCode(113,99,101,108,112,95,101,95,51,54,0);
          let iconeditX = String.fromCharCode(112,114,101,115,101,100,95,118,95,56,53,0);
         unreadg -= iconarrowrightn.size * parseInt(`${unreadg}`);
         iconarrowrightn.set(iconeditX, (iconeditX == String.fromCharCode(99,0) ? iconeditX.length : macau8.length));
         macau8 += "1";
      }
      while (2 > (nterstitial9.size - parseInt(`${unreadg}`)) && 5 > (2 + nterstitial9.size)) {
         nterstitial9 = new Map([[`${nterstitial9.size}`, nterstitial9.size]]);
         break;
      }
      let flippern = 6361447 >= nterstitial9.size;
      do {
         nterstitial9 = new Map([[`${nterstitial9.size}`, parseInt(`${unreadg}`) ^ 2]]);
         if (flippern) {
            break;
         }
      } while (((nterstitial9.size + 2) > 4) && flippern);
      auto_3f += `${3 << (Math.min(3, transferG.length))}`;
   }
      imagesC.set(backgroundY, auto_3f.length);
      imagesC.set(`${defaultprofilepicm}`, parseInt(`${defaultprofilepicm}`));

    

   if (backgroundY != search0) {
      search0 += "3";
   }
   if (4 <= animationsf.size) {
      animationsf = new Map([[`${transferG.length}`, 1 << (Math.min(4, transferG.length))]]);
   }
   for (let y = 0; y < 3; y++) {
      imagesC.set(`${auto_3f}`, 3);
   }
   if (3 < (transferG.length * auto_3f.length)) {
       let footballfiledlayoutw = 2.0;
      for (let f = 0; f < 1; f++) {
         footballfiledlayoutw += parseInt(`${footballfiledlayoutw}`);
      }
      while (2.54 < footballfiledlayoutw) {
         footballfiledlayoutw *= parseInt(`${footballfiledlayoutw}`);
         break;
      }
         footballfiledlayoutw += 2 % (Math.max(parseInt(`${footballfiledlayoutw}`), 2));
      transferG.push(philippinesK.size / (Math.max(3, 3)));
   }
    ww_runtime.sportClicksAnalytics();
    
  };

  
  
  
  
  
  
  
  
  
  //         matchSche?.streams?.length > 0
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  //     const onlineStreamer = match?.streams?.findIndex(e => e.status == 3);
  
  
  
  
  
  
  
  
  
  
  

  
  //   const onlineStreamer = matchSche?.streams?.findIndex(e => e.status == 3);
  
  
  
  
  
  
  return (
    <>
      <TouchableOpacity onPress={matchClicked}>
        <View
          style={{
            ...styles.border,
            backgroundColor: bgDark ? '#0c0c0c' : 'inherit',
            borderColor: 'rgba(156, 156, 156 , 0.2)',
          }}>
          <View style={styles.matchScheduleHeader}>
            <View style={styles.matchInfo}>
              <Text style={{...styles.spaceBetween, color: colors.muted}}>
                {matchSche?.competition?.name_short}
              </Text>
              <Text
                style={{
                  ...textVariants.small,
                  color: colors.muted,
                  paddingTop: 2,
                }}>
                { }
                {new Date(matchSche?.match_time_ts * 1000).toLocaleTimeString(
                  'en-GB',
                  {
                    hour: '2-digit',
                    minute: '2-digit',
                  },
                )}
              </Text>
            </View>
            <View style={styles.matchStatus}>
              {matchSche?.streams != undefined &&
              matchSche?.streams?.length > 0 &&
              matchSche?.streams?.some(streamer => streamer.status == 3) ? (
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.liveIcon} />
                  <Text style={{...styles.liveStatus}}>直播中</Text>
                </View>
              ) : (
                <Text style={textVariants.small}>
                  {getMatchStatus(
                    matchSche?.state,
                    matchSche?.status,
                    matchSche?.sports_type,
                  )}
                </Text>
              )}
            </View>
            <View style={styles.liveType}>
              {isMatchPage === true &&
                matchSche?.streams != undefined &&
                matchSche?.streams.length > 0 &&
                matchSche?.streams?.some(streamer => streamer.status == 3) && (
                  <FastImage
                    resizeMode="contain"
                    style={styles.liveTypeImage}
                    source={VideoLive}
                  />
                )}
              {isMatchPage === true && matchSche?.mlive == 1 && (
                <FastImage
                  resizeMode="contain"
                  style={styles.liveTypeImage}
                  source={AnimationLive}
                />
              )}
            </View>
            {/* {matchSche?.streams != undefined && matchSche?.streams.length > 0 && (
            <View style={styles.onlineViews}>
              <FastImage style={styles.viewImage} source={Views} />
              <Text style={textVariants.small}>{calTotalViews()}</Text>
            </View>
          )} */}
          </View>
          <View style={styles.matchScheduleContent}>
            <View style={styles.teamContentA}>
              <Text
                style={{...textVariants.small, flexShrink: 1}}
                numberOfLines={1}
                ellipsizeMode={'tail'}>
                {matchSche.home?.name}
              </Text>
              {matchSche?.home?.icon != undefined &&
              matchSche?.home?.icon.length > 0 ? (
                <FastImage
                  style={styles.teamImage}
                  source={{uri: matchSche?.home?.icon}}
                />
              ) : (
                <ImageBackground style={styles.teamImage} source={HomeIcon}>
                  <Text style={styles.teamLogoText}>
                    {matchSche?.home?.name.charAt(0)}
                  </Text>
                </ImageBackground>
              )}
            </View>
            {matchSche?.status == -2 ? (
              <View style={styles.liveScore}>
                <Text style={styles.scoreFont} />
                <Text style={styles.scoreFont}>-</Text>
                <Text style={styles.scoreFont} />
              </View>
            ) : matchSche?.status == 1 || matchSche?.status == -1 ? (
              <View style={styles.liveScore}>
                <View>
                  <View
                    style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text
                      style={
                        calculateScore(
                          matchSche?.home_score,
                          matchSche?.sports_type,
                        ) >
                        calculateScore(
                          matchSche?.away_score,
                          matchSche?.sports_type,
                        )
                          ? {...styles.highScoreFont, color: colors.primary}
                          : styles.scoreFont
                      }>
                      {calculateScore(
                        matchSche?.home_score,
                        matchSche?.sports_type,
                      )}
                    </Text>
                    <Text style={styles.scoreFont}>-</Text>
                    <Text
                      style={
                        calculateScore(
                          matchSche?.away_score,
                          matchSche?.sports_type,
                        ) >
                        calculateScore(
                          matchSche?.home_score,
                          matchSche?.sports_type,
                        )
                          ? {...styles.highScoreFont, color: colors.primary}
                          : styles.scoreFont
                      }>
                      {calculateScore(
                        matchSche?.away_score,
                        matchSche?.sports_type,
                      )}
                    </Text>
                  </View>
                  {matchSche?.sports_type == 1 &&
                    (matchSche?.away_score[6] > 0 ||
                      matchSche?.home_score[6] > 0) && (
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                        }}>
                        <Text style={styles.penaltyScore}>点球 </Text>
                        <Text
                          style={
                            matchSche?.home_score[6] > matchSche?.away_score[6]
                              ? styles.penaltyWinScore
                              : styles.penaltyScore
                          }>
                          {matchSche?.home_score[6]}
                        </Text>
                        <Text style={styles.penaltyScore}> - </Text>
                        <Text
                          style={
                            matchSche?.away_score[6] > matchSche?.home_score[6]
                              ? styles.penaltyWinScore
                              : styles.penaltyScore
                          }>
                          {matchSche?.away_score[6]}
                        </Text>
                      </View>
                    )}
                </View>
              </View>
            ) : (
              <View style={styles.subscribeBtn}>
                <Text style={{...textVariants.header, color: colors.primary}}>
                  VS
                </Text>
              </View>
            )}
            <View style={styles.teamContentB}>
              {matchSche?.away?.icon != undefined &&
              matchSche?.away?.icon.length > 0 ? (
                <FastImage
                  style={styles.teamImage}
                  source={{uri: matchSche?.away?.icon}}
                />
              ) : (
                <ImageBackground style={styles.teamImage} source={AwayIcon}>
                  <Text style={styles.teamLogoText}>
                    {matchSche?.away?.name.charAt(0)}
                  </Text>
                </ImageBackground>
              )}
              <Text
                style={{...textVariants.small, flexShrink: 1}}
                numberOfLines={1}>
                {matchSche?.away?.name}
              </Text>
            </View>
          </View>
          {isMatchPage === true &&
            matchSche?.streams != undefined &&
            matchSche?.streams.length > 0 &&
            matchSche?.streams?.some(streamer => streamer.status == 3) && (
              <View style={styles.matchScheduleFooter}>
                <View style={styles.viewFooter}>
                  <FastImage style={styles.viewImage} source={IconViewerGif} />
                  <Text style={styles.footerFont}>{calTotalViews()}</Text>
                </View>
              </View>
            )}
          {/* <View style={styles.streamerList}>
          {matchSche?.streams != undefined &&
            matchSche?.streams.length > 0 &&
            matchSche?.streams.map(e => (
              <TouchableWithoutFeedback
                onPress={streamerClicked(e.streamer.id, e.status)}>
                <Text
                  style={e.status == 3 ? styles.liveStreamer : styles.streamer}>
                  {e.streamer.nickname}
                </Text>
              </TouchableWithoutFeedback>
            ))}
        </View> */}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default memo(MatchSchedule);
