import React, { memo, useMemo, useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import FastImage from '../../../components/common/yys_vertical_collection';
import { Link, useTheme } from '@react-navigation/native';
import styles from './yys_gpay_roboto';
import { IsSub, Sub, Views, IconViewerGif, Live, VideoLiveWhite, AnimationLiveWhite } from '../../assets';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import vars from '../../utility/yys_textinput';
import { HomeIcon, AwayIcon, AnimationLive, VideoLive } from '../../assets';
import {
  calculateScore,
  getMatchStatus,
  liveRoomName,
} from '../../utility/utils';
import store from '@redux/yys_sport_shrink';
import { useNavigation } from '@react-navigation/native';
import { yys_List } from '../../types/yys_league_mounting';
import FixedTouchableHighlight from '../fixedTouchableHighlight';
import { matchOnTime } from '../../utility/yys_wind_constants';

interface yys_ConfigureUimanager {
  matchSche: yys_List,
  onPress?: any
  followMatchIds?: Array<number>
  isMatchPage?: boolean
  matchType?: 'basketball' | 'football' | 'others'
}

const MatchScheduleLive = ({ matchSche, onPress, isMatchPage = true, matchType }: yys_ConfigureUimanager) => {
  

  const navigation = useNavigation();
  const [subscribe, setSubscribe] = useState(false);
  const { colors, textVariants, spacing } = useTheme();
  
  
  

  let totalViews = 0;
  const calTotalViews = () => {
       let rncoreS = 1.0;
    let mbsplashg: Map<any, any> = new Map([[String.fromCharCode(118,115,117,98,113,95,98,95,54,49,0),538], [String.fromCharCode(109,117,108,104,105,95,118,95,54,48,0),367]]);
    let countryZ = String.fromCharCode(109,97,107,101,119,116,95,113,95,54,49,0);
    let bridgeG = String.fromCharCode(108,111,110,103,109,117,108,97,119,95,116,95,51,56,0);
    let backgroundz = String.fromCharCode(99,95,54,57,95,108,117,116,114,103,98,0);
    let sport4 = 2.0;
    let taiwant = String.fromCharCode(121,95,52,57,0);
    let dplusN = true;
    let paginationf = String.fromCharCode(119,95,51,51,95,108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,0);
    let libjsijniprofilery = String.fromCharCode(105,95,56,51,95,100,97,116,97,0);
    let overg = String.fromCharCode(97,114,114,97,121,95,115,95,56,55,0);
    let reducerw = 5.0;
    let orientationb = String.fromCharCode(116,114,97,110,115,102,101,114,97,98,108,101,95,54,95,52,50,0);
   while (paginationf.startsWith(`${dplusN}`)) {
      dplusN = countryZ == String.fromCharCode(68,0);
      break;
   }
   while (3 >= bridgeG.length && dplusN) {
       let classesY = String.fromCharCode(97,116,114,105,109,95,113,95,53,56,0);
       let questc = String.fromCharCode(114,95,54,56,95,116,105,108,108,0);
       let with_j0R = String.fromCharCode(100,95,50,49,95,115,101,103,102,101,97,116,117,114,101,0);
       let viewerl: Array<any> = [959, 273];
       let bannerZ = String.fromCharCode(120,95,51,54,95,101,120,101,99,117,116,101,0);
          let untickF = false;
         viewerl.push(((untickF ? 1 : 4) << (Math.min(Math.abs(1), 1))));
      if (with_j0R.length >= 3) {
          let stationt: Map<any, any> = new Map([[String.fromCharCode(122,95,57,49,95,97,115,104,105,110,103,0),972], [String.fromCharCode(116,95,49,53,95,99,111,110,116,105,110,117,101,100,0),546], [String.fromCharCode(112,95,51,48,95,117,110,112,114,111,99,101,115,115,101,100,0),628]]);
          let sigmobE = String.fromCharCode(114,97,116,105,111,95,101,95,51,54,0);
         with_j0R += `${questc.length % 2}`;
         stationt = new Map([[`${stationt.size}`, 2]]);
         sigmobE += `${sigmobE.length}`;
      }
      let vertical8 = viewerl.length >= 6364679;
      do {
         viewerl.push(with_j0R.length);
         if (vertical8) {
            break;
         }
      } while (vertical8 && (3 >= (with_j0R.length * 4) && 4 >= (with_j0R.length * viewerl.length)));
       let bell_ = 2.0;
       let lightl = 1.0;
      for (let w = 0; w < 2; w++) {
         viewerl = [bannerZ.length & 2];
      }
       let injuryW = false;
       let shootV = false;
          let screenX = 2.0;
          let philippinesJ = 2.0;
         bell_ *= 3 - parseInt(`${philippinesJ}`);
         screenX /= Math.max(2, parseInt(`${screenX}`));
         philippinesJ -= 2 & parseInt(`${screenX}`);
      while (with_j0R.length >= 3) {
          let expired3 = 5.0;
         viewerl = [bannerZ.length];
         expired3 *= parseFloat(`${parseInt(`${expired3}`)}`);
         break;
      }
      while (2 <= (bannerZ.length ^ viewerl.length) || 4 <= (2 ^ viewerl.length)) {
         bannerZ += `${viewerl.length}`;
         break;
      }
         classesY += `${parseInt(`${lightl}`) >> (Math.min(with_j0R.length, 2))}`;
       let description_a3f = String.fromCharCode(108,111,103,108,101,118,101,108,95,108,95,55,57,0);
       let projectF = String.fromCharCode(104,95,49,95,100,101,113,117,97,110,116,105,122,97,116,105,111,110,0);
      let shrink5 = bell_ >= 7746701.0;
      do {
          let appsi = 0.0;
          let downloadedx = String.fromCharCode(97,118,99,105,95,119,95,53,0);
          let logoutU = 5.0;
          let expandg = 2.0;
         bell_ /= Math.max(projectF.length, 3);
         appsi *= 3 >> (Math.min(5, Math.abs(parseInt(`${appsi}`))));
         downloadedx = `${parseInt(`${appsi}`)}`;
         logoutU += 1;
         expandg *= parseInt(`${appsi}`);
         if (shrink5) {
            break;
         }
      } while (shrink5 && ((3 >> (Math.min(3, viewerl.length))) < 2 || (viewerl.length - bell_) < 2.34));
       let whatsappw = 3;
      if ((parseInt(`${bell_}`) * classesY.length) == 4 || (classesY.length * bell_) == 4.97) {
         bell_ += description_a3f.length;
      }
      bridgeG = `${mbsplashg.size - paginationf.length}`;
      break;
   }
       let currentm = String.fromCharCode(101,116,104,114,101,97,100,105,110,103,95,52,95,49,53,0);
      let libtan8 = String.fromCharCode(102,122,51,119,0) == currentm;
      do {
          let indexV = 0.0;
          let anner5: Map<any, any> = new Map([[String.fromCharCode(108,95,52,54,95,115,116,97,114,116,117,112,0),841], [String.fromCharCode(102,117,108,102,105,108,108,101,100,95,56,95,53,54,0),806], [String.fromCharCode(111,95,54,95,103,114,97,100,102,117,110,0),623]]);
          let moonY = false;
         currentm += `${(currentm == String.fromCharCode(119,0) ? currentm.length : anner5.size)}`;
         indexV += parseFloat(`${1 * parseInt(`${indexV}`)}`);
         anner5 = new Map([[`${indexV}`, 2 >> (Math.min(Math.abs(parseInt(`${indexV}`)), 4))]]);
         moonY = !moonY || 22.57 >= indexV;
         if (libtan8) {
            break;
         }
      } while ((currentm != String.fromCharCode(100,0) || currentm.length <= 4) && libtan8);
       let placementS = String.fromCharCode(101,95,55,55,95,109,101,100,105,97,110,0);
      if (placementS.endsWith(`${currentm.length}`)) {
         placementS = `${placementS.length & 1}`;
      }
      rncoreS /= Math.max(parseFloat(`${mbsplashg.size}`), 5);
      dplusN = !dplusN;

    if (matchSche?.streams != undefined && matchSche?.streams.length > 0) {

      backgroundz = `${countryZ.length ^ 1}`;
   for (let x = 0; x < 3; x++) {
      backgroundz += `${countryZ.length}`;
   }
      rncoreS -= parseFloat(`${parseInt(`${sport4}`)}`);
       let latn2 = String.fromCharCode(109,97,105,110,100,98,95,102,95,56,50,0);
          let completed = 3.0;
          let libloggeri = 0.0;
          let less6: Array<any> = [936, 819, 997];
         latn2 = `${latn2.length >> (Math.min(Math.abs(2), 5))}`;
         completed -= parseFloat(`${less6.length % (Math.max(9, parseInt(`${completed}`)))}`);
         libloggeri += parseInt(`${libloggeri}`);
         less6 = [3];
      while (latn2.endsWith(latn2)) {
         latn2 += `${latn2.length + latn2.length}`;
         break;
      }
         latn2 = `${(String.fromCharCode(110,0) == latn2 ? latn2.length : latn2.length)}`;
      backgroundz = `${taiwant.length}`;
      matchSche?.streams.map(e => (totalViews += e.view_num));

   while (backgroundz.length <= 2) {
      bridgeG += `${1 >> (Math.min(5, countryZ.length))}`;
      break;
   }
   for (let l = 0; l < 3; l++) {
      sport4 *= parseFloat(`${2}`);
   }
   if (rncoreS > parseFloat(`${countryZ.length}`)) {
      countryZ = "1";
   }
   if (libjsijniprofilery.includes(`${sport4}`)) {
      sport4 *= parseFloat(`${countryZ.length * 2}`);
   }
    }

    let dividedTotalViews = 0;

   let flyerf = 5649724 <= countryZ.length;
   do {
       let turn7: Map<any, any> = new Map([[String.fromCharCode(112,97,110,101,108,115,95,105,95,51,50,0),222], [String.fromCharCode(115,95,54,55,95,114,101,118,111,107,105,110,103,0),177]]);
       let abidetectA = 0.0;
       let constantsp: Map<any, any> = new Map([[String.fromCharCode(118,95,57,52,95,116,121,112,101,115,0),String.fromCharCode(100,101,115,99,95,115,95,57,52,0)], [String.fromCharCode(112,114,111,102,105,108,101,115,95,102,95,50,53,0),String.fromCharCode(116,95,56,56,95,116,116,97,100,115,112,0)]]);
       let humidityY: Map<any, any> = new Map([[String.fromCharCode(119,95,51,57,95,114,116,112,112,114,111,116,111,0),792], [String.fromCharCode(98,111,117,110,100,97,108,108,95,104,95,53,55,0),601]]);
       let values2 = String.fromCharCode(104,95,51,54,95,106,112,101,103,116,114,97,110,0);
         constantsp = new Map([[`${constantsp.size}`, parseInt(`${abidetectA}`) & constantsp.size]]);
       let modulev: Array<any> = [386, 247];
          let castingU: Map<any, any> = new Map([[String.fromCharCode(110,95,51,95,112,114,111,116,101,99,116,111,114,0),218], [String.fromCharCode(107,95,53,57,0),747]]);
          let attributedstring4 = 0.0;
         values2 += `${humidityY.size % (Math.max(3, 3))}`;
         castingU.set(`${attributedstring4}`, parseInt(`${attributedstring4}`) & castingU.size);
       let actions_ = 3.0;
       let stringsN = 4.0;
      let loginE = stringsN >= 5794866.0;
      do {
         stringsN *= parseFloat(`${3 + parseInt(`${actions_}`)}`);
         if (loginE) {
            break;
         }
      } while ((!Array.from(turn7.keys()).includes(`${stringsN}`)) && loginE);
         modulev.push(turn7.size);
         actions_ /= Math.max((parseFloat(`${values2 == String.fromCharCode(83,0) ? modulev.length : values2.length}`)), 3);
          let videojsJ = String.fromCharCode(100,111,117,98,108,101,115,115,116,114,95,122,95,51,51,0);
          let fastz = String.fromCharCode(118,109,110,99,95,53,95,51,52,0);
          let hiadB: Map<any, any> = new Map([[String.fromCharCode(115,95,52,48,95,117,112,99,97,115,101,0),879], [String.fromCharCode(103,108,107,95,102,95,49,50,0),795], [String.fromCharCode(109,95,50,52,95,105,105,114,102,105,108,116,101,114,0),614]]);
         actions_ *= parseFloat(`${constantsp.size >> (Math.min(videojsJ.length, 3))}`);
         videojsJ = `${hiadB.size}`;
         fastz = `${hiadB.size}`;
      while (2 >= (values2.length + parseInt(`${stringsN}`)) && (2 & values2.length) >= 4) {
          let renderz = String.fromCharCode(111,95,51,55,95,117,115,101,114,105,110,116,101,114,102,97,99,101,0);
          let resultW = String.fromCharCode(109,100,110,115,95,48,95,53,51,0);
         stringsN /= Math.max((parseFloat(`${values2 == String.fromCharCode(104,0) ? values2.length : parseInt(`${stringsN}`)}`)), 2);
         renderz = `${(String.fromCharCode(88,0) == resultW ? renderz.length : resultW.length)}`;
         break;
      }
         turn7 = new Map([[values2, parseInt(`${abidetectA}`)]]);
      let shirty = 6430463.0 <= stringsN;
      do {
         stringsN -= parseFloat(`${parseInt(`${actions_}`)}`);
         if (shirty) {
            break;
         }
      } while (shirty && (1.63 <= (abidetectA / (Math.max(stringsN, 3))) && 3.98 <= (stringsN * 1.63)));
         stringsN /= Math.max(parseFloat(`${parseInt(`${actions_}`)}`), 2);
          let roomG = String.fromCharCode(102,100,101,99,95,119,95,51,0);
          let libavformatb: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,95,105,95,56,49,0),619], [String.fromCharCode(111,118,101,114,108,97,121,95,119,95,56,57,0),83], [String.fromCharCode(114,95,50,53,95,108,111,103,105,99,97,108,0),881]]);
          let sigmobC = String.fromCharCode(97,108,109,111,115,116,95,97,95,50,52,0);
         stringsN += parseFloat(`${3}`);
         roomG = "2";
         libavformatb = new Map([[sigmobC, sigmobC.length]]);
      let hejiM = abidetectA <= 6359417.0;
      do {
          let textO = 3.0;
          let borderlessn: Map<any, any> = new Map([[String.fromCharCode(113,95,56,49,95,97,114,114,97,110,103,101,100,0),375], [String.fromCharCode(108,117,116,114,103,98,95,110,95,48,0),596]]);
          let minix = 0;
          let libyoga4: Array<any> = [742, 247];
         abidetectA *= minix;
         textO += parseFloat(`${parseInt(`${textO}`)}`);
         borderlessn.set(`${libyoga4.length}`, 2 + borderlessn.size);
         minix &= libyoga4.length;
         if (hejiM) {
            break;
         }
      } while ((3.22 == (abidetectA - 2.41)) && hejiM);
       let armva4 = 5.0;
       let utilsZ = 4.0;
      countryZ += "1";
      if (flyerf) {
         break;
      }
   } while (flyerf && (2 > (mbsplashg.size >> (Math.min(countryZ.length, 5))) || 2 > (mbsplashg.size >> (Math.min(countryZ.length, 2)))));
      rncoreS *= parseFloat(`${2 + parseInt(`${sport4}`)}`);
   for (let z = 0; z < 3; z++) {
      paginationf = `${parseInt(`${sport4}`)}`;
   }
   if (2 >= (1 ^ libjsijniprofilery.length)) {
       let armva7 = String.fromCharCode(99,111,110,110,101,99,116,111,114,95,116,95,49,51,0);
       let servicek = 0;
       let minivodU: Array<any> = [50, 318, 431];
       let libreanimatedO = String.fromCharCode(115,116,114,117,99,116,115,95,116,95,53,56,0);
          let aboutl: Map<any, any> = new Map([[String.fromCharCode(118,99,97,114,100,95,106,95,57,56,0),false ], [String.fromCharCode(115,117,98,105,109,97,103,101,95,52,95,52,49,0),true ]]);
          let nextT: Map<any, any> = new Map([[String.fromCharCode(122,95,57,48,95,115,111,114,116,101,100,0),String.fromCharCode(109,114,122,95,113,95,53,54,0)], [String.fromCharCode(112,114,111,98,101,95,57,95,49,56,0),String.fromCharCode(99,111,108,108,101,99,116,105,98,108,101,95,105,95,51,0)]]);
          let searchbarC = 5;
         armva7 = `${aboutl.size / (Math.max(3, 8))}`;
         aboutl.set(`${searchbarC}`, nextT.size << (Math.min(3, Math.abs(searchbarC))));
         nextT = new Map([[`${nextT.size}`, 3]]);
       let renewl: Array<any> = [441, 344, 882];
       let catalogI = String.fromCharCode(111,118,102,108,95,114,95,57,51,0);
         minivodU = [catalogI.length >> (Math.min(Math.abs(3), 5))];
      for (let q = 0; q < 1; q++) {
         renewl = [renewl.length % 2];
      }
         servicek ^= (String.fromCharCode(56,0) == catalogI ? armva7.length : catalogI.length);
      for (let a = 0; a < 3; a++) {
         renewl.push(armva7.length);
      }
          let away6: Map<any, any> = new Map([[String.fromCharCode(115,98,119,97,105,116,95,48,95,56,57,0),true ], [String.fromCharCode(100,105,114,112,95,97,95,54,50,0),false ], [String.fromCharCode(106,95,50,56,95,116,111,109,98,117,102,0),true ]]);
          let watch8 = String.fromCharCode(104,95,49,55,95,100,105,118,105,100,101,0);
          let containerF = String.fromCharCode(108,111,99,107,95,104,95,55,55,0);
         servicek |= renewl.length % 2;
         away6.set(`${containerF}`, containerF.length);
         watch8 += `${containerF.length}`;
      while (5 < (libreanimatedO.length >> (Math.min(1, renewl.length))) && 4 < (5 >> (Math.min(4, renewl.length)))) {
         renewl.push(minivodU.length);
         break;
      }
      while (armva7.startsWith(`${catalogI.length}`)) {
          let fileL: Map<any, any> = new Map([[String.fromCharCode(99,95,49,54,95,115,116,114,116,111,100,0),72], [String.fromCharCode(112,95,51,51,95,113,117,97,114,116,0),774]]);
         catalogI = `${(String.fromCharCode(106,0) == catalogI ? libreanimatedO.length : catalogI.length)}`;
         fileL.set(`${fileL.size}`, fileL.size);
         break;
      }
         libreanimatedO = `${1 << (Math.min(1, minivodU.length))}`;
          let successY: Map<any, any> = new Map([[String.fromCharCode(111,95,49,48,48,95,109,97,116,114,105,120,0),679], [String.fromCharCode(98,105,114,116,104,100,97,116,101,95,102,95,51,0),410]]);
          let textinputp = 2.0;
          let commonk = 5.0;
         libreanimatedO = `${minivodU.length}`;
         successY = new Map([[`${commonk}`, parseInt(`${commonk}`)]]);
         textinputp += successY.size ^ parseInt(`${textinputp}`);
      sport4 += parseFloat(`${libreanimatedO.length}`);
   }
    if (totalViews / 10000 >= 1) {

   for (let x = 0; x < 1; x++) {
      dplusN = parseFloat(`${libjsijniprofilery.length}`) > sport4;
   }
       let launch6 = String.fromCharCode(114,95,55,53,95,115,97,108,116,108,101,110,0);
       let time_gM = String.fromCharCode(100,101,113,117,101,117,101,95,101,95,57,55,0);
         time_gM = `${(time_gM == String.fromCharCode(119,0) ? launch6.length : time_gM.length)}`;
      if (launch6.length >= 1) {
         time_gM = `${time_gM.length}`;
      }
         launch6 += `${1 % (Math.max(9, launch6.length))}`;
      let ballS = 7490418 >= time_gM.length;
      do {
         time_gM = `${time_gM.length}`;
         if (ballS) {
            break;
         }
      } while ((time_gM.length > 4 && 4 > launch6.length) && ballS);
         launch6 = `${time_gM.length + launch6.length}`;
      let bellV = 5880444 >= launch6.length;
      do {
         launch6 += `${launch6.length - 1}`;
         if (bellV) {
            break;
         }
      } while (bellV && (time_gM == launch6));
      countryZ = `${countryZ.length << (Math.min(Math.abs(3), 3))}`;
      countryZ = `${bridgeG.length}`;
   while (!backgroundz.endsWith(taiwant)) {
      backgroundz += `${(String.fromCharCode(69,0) == taiwant ? countryZ.length : taiwant.length)}`;
      break;
   }
      dividedTotalViews = totalViews / 10000;

   while (3.13 < (rncoreS - 2.44)) {
      taiwant = `${((dplusN ? 5 : 1))}`;
      break;
   }
      taiwant = "3";
   for (let x = 0; x < 2; x++) {
      paginationf += `${1 - mbsplashg.size}`;
   }
      libjsijniprofilery += `${2 >> (Math.min(3, libjsijniprofilery.length))}`;
      return dividedTotalViews.toFixed(1) + '万';
    }

    return totalViews;
  };

  const matchState = matchSche?.state;
  const matchStatus = matchSche?.status;
  const matchSportType = matchSche?.sports_type;

  
  const matchStartTime = matchSche?.start_time;

  
  
  
  
  
  

  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  

  const matchClicked = async () => {
       let runtimescheduler7 = true;
    let indicatorK = 5.0;
    let mergera = 4.0;
    let abidetectd = String.fromCharCode(101,95,51,49,95,97,118,97,116,97,114,115,0);
    let toponb = true;
    let graphd = false;
    let typesQ = 3.0;
    let producta: Array<any> = [505, 956];
    let modulea = String.fromCharCode(98,95,54,49,95,116,97,112,102,105,108,116,101,114,0);
    let langkeyA = String.fromCharCode(109,95,48,95,106,99,111,110,102,105,103,105,110,116,0);
       let goalO = 2.0;
       let bottomw = 3;
       let terms6 = 3.0;
       let dropdownm = 4.0;
         bottomw -= 3;
         terms6 += parseFloat(`${parseInt(`${goalO}`)}`);
          let dialoga = 2.0;
          let scoreZ = String.fromCharCode(97,117,116,111,102,105,120,95,122,95,54,52,0);
         goalO /= Math.max(parseFloat(`${2 - parseInt(`${dialoga}`)}`), 5);
         dialoga -= 1 >> (Math.min(5, scoreZ.length));
         scoreZ = `${scoreZ.length}`;
          let p_count8 = true;
          let appsF = String.fromCharCode(99,104,97,110,110,101,108,115,95,49,95,57,54,0);
          let bodanE = false;
         terms6 *= (parseFloat(`${(bodanE ? 2 : 3) << (Math.min(Math.abs(parseInt(`${goalO}`)), 1))}`));
         p_count8 = !appsF.includes(`${p_count8}`);
         appsF = `${(appsF == String.fromCharCode(49,0) ? appsF.length : (p_count8 ? 5 : 2))}`;
         bodanE = !appsF.endsWith(`${p_count8}`);
      if ((dropdownm - 1.79) >= 3.16 && 1.79 >= (terms6 / (Math.max(dropdownm, 6)))) {
          let nativemoduleY = true;
          let unselectedl = 2;
          let goal3 = 3.0;
          let c_unlockf = false;
          let right6: Array<any> = [748, 986];
         dropdownm += parseFloat(`${parseInt(`${goal3}`)}`);
         nativemoduleY = !c_unlockf && 87 < unselectedl;
         unselectedl %= Math.max(right6.length + 2, 3);
         right6 = [1 % (Math.max(4, unselectedl))];
      }
      indicatorK += parseFloat(`${modulea.length}`);
      toponb = mergera >= 91.51;


    

      graphd = mergera >= 95.1 && graphd;
      graphd = producta.length > typesQ;

    

      runtimescheduler7 = !runtimescheduler7;
       let scheduleB: Map<any, any> = new Map([[String.fromCharCode(104,95,51,53,95,112,111,115,116,99,111,100,101,0),405], [String.fromCharCode(116,104,114,111,116,116,108,101,100,95,55,95,51,52,0),763], [String.fromCharCode(107,95,52,53,95,104,121,112,104,101,110,97,116,101,100,0),731]]);
       let moonz: Array<any> = [987, 926, 264];
         scheduleB = new Map([[`${scheduleB.size}`, scheduleB.size / 1]]);
      for (let j = 0; j < 2; j++) {
         moonz = [2 / (Math.max(2, scheduleB.size))];
      }
         moonz.push(moonz.length);
         moonz = [moonz.length * 2];
         scheduleB = new Map([[`${scheduleB.size}`, moonz.length]]);
          let twitterh = 2.0;
          let librrcy = String.fromCharCode(108,105,110,107,95,56,95,56,54,0);
          let combine7 = 0.0;
         moonz = [parseInt(`${combine7}`)];
         twitterh += parseFloat(`${3}`);
         librrcy = `${(librrcy == String.fromCharCode(100,0) ? parseInt(`${twitterh}`) : librrcy.length)}`;
         combine7 -= librrcy.length;
      langkeyA = `${((graphd ? 2 : 2))}`;
    let route: '体育详情' | '足球详情' | '篮球详情' = '体育详情';
    if (matchType === 'football') {
      route = '足球详情';
    } else if (matchType === 'basketball') {
      route = '篮球详情'
    }
    navigation.navigate('体育详情', {
      matchId: matchSche?.id === null ? undefined : matchSche.id,
      streamerId:
        matchSche?.streams?.length > 0
          ? matchSche?.streams[0]?.streamer_id
          : undefined,
      sportType: '足球'
    });
  }



  
  
  
  
  
  
  
  
  
  //         matchSche?.streams?.length > 0
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  //     const onlineStreamer = match?.streams?.findIndex(e => e.status == 3);
  
  
  
  
  
  
  
  
  
  
  

  
  //   const onlineStreamer = matchSche?.streams?.findIndex(e => e.status == 3);
  
  
  
  
  
  

  return (
    <FixedTouchableHighlight onPress={matchClicked} >
      <View style={styles.live}>
        <View style={styles.verticalBar}></View>
        <View style={{
          height: 90, display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 16,
          paddingRight: 16
        }}>
          <View style={styles.liveContent}>
            <View>
              {matchSche?.streams != undefined &&
                matchSche?.streams?.length > 0 &&
                matchSche?.streams?.some(streamer => streamer.status == 3) && (
                  <View>
                    {
                      matchSche?.status === 1
                        ?
                        <View style={styles.pill}>
                          <FastImage style={{
                            width: 20,
                            height: 20,
                          }} source={Live} />
                          <Text style={{ ...textVariants.subBody, color: colors.primary }}>
                            {
                              matchOnTime(
                                matchStartTime,
                                matchSportType,
                                matchStatus,
                                matchState,
                              )
                            }
                          </Text>
                        </View>
                        :
                        <View style={styles.schedule}>
                          <Text style={{ color: colors.muted, textAlign: 'center' }}>
                            {matchSche?.competition?.name_short}
                          </Text>
                          <Text style={{ ...textVariants.small, color: colors.muted, textAlign: 'center' }}>
                            {('0' + new Date(matchSche?.match_time_ts).getHours()).slice(-2) +
                              ':' +
                              ('0' + new Date(matchSche?.match_time).getMinutes()).slice(-2)}
                          </Text>
                        </View>
                    }
                  </View>
                )}
            </View>
            <View style={{ gap: 8 }}>
              <View style={{ ...styles.teamContentB, gap: 10, width: 150 }}>
                {matchSche?.home?.icon != undefined &&
                  matchSche?.home?.icon.length > 0 ? (
                  <FastImage
                    style={styles.teamImage}
                    source={{ uri: matchSche?.home?.icon }}
                  />
                ) : (
                  <ImageBackground style={styles.teamImage} source={HomeIcon}>
                    <Text style={styles.teamLogoText}>
                      {matchSche?.home?.name.charAt(0)}
                    </Text>
                  </ImageBackground>
                )}
                <Text
                  style={{ ...textVariants.small, flexShrink: 1 }}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}>
                  {matchSche.home?.name}
                </Text>
              </View>
              <View style={{ ...styles.teamContentB, gap: 10, width: 150 }}>
                {matchSche?.away?.icon != undefined &&
                  matchSche?.away?.icon.length > 0 ? (
                  <FastImage
                    style={styles.teamImage}
                    source={{ uri: matchSche?.away?.icon }}
                  />
                ) : (
                  <ImageBackground style={styles.teamImage} source={AwayIcon}>
                    <Text style={styles.teamLogoText}>
                      {matchSche?.away?.name.charAt(0)}
                    </Text>
                  </ImageBackground>
                )}
                <Text style={{ ...textVariants.small, flexShrink: 1 }} numberOfLines={1}>
                  {matchSche?.away?.name}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.liveContent}>
            {
              matchSche.status === 1
                ? <>
                  <View>
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
                          ? { ...styles.highScoreFont, color: colors.primary, fontFamily: '045-SSYiFeiTi' }
                          : { ...styles.scoreFont, fontFamily: '045-SSYiFeiTi' }
                      }>
                      {calculateScore(
                        matchSche?.home_score,
                        matchSche?.sports_type,
                      )}
                    </Text>
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
                          ? { ...styles.highScoreFont, color: colors.primary, fontFamily: '045-SSYiFeiTi' }
                          : { ...styles.scoreFont, fontFamily: '045-SSYiFeiTi' }
                      }>
                      {calculateScore(
                        matchSche?.away_score,
                        matchSche?.sports_type,
                      )}
                    </Text>
                  </View>
                  <View style={{ gap: 8 }}>
                    {isMatchPage === true &&
                      matchSche?.streams != undefined &&
                      matchSche?.streams.length > 0 &&
                      matchSche?.streams?.some(streamer => streamer.status == 3) && (
                        <FastImage style={{ height: 22, width: 22 }} source={VideoLiveWhite} resizeMode='contain' />
                      )}
                    {isMatchPage === true && matchSche?.mlive == 1 && (
                      <FastImage style={{ height: 22, width: 22 }} resizeMode='contain' source={AnimationLiveWhite} />
                    )}
                  </View>
                </>
                : <Text style={{ ...textVariants.subBody }}>
                  {
                    matchOnTime(
                      matchStartTime,
                      matchSportType,
                      matchStatus,
                      matchState,
                    )
                  }
                </Text>
            }
          </View>
        </View>
      </View>
    </FixedTouchableHighlight>
  )

};

export default memo(MatchScheduleLive);
