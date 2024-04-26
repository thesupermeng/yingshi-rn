import React, { memo, useMemo, useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import FastImage from '../../../components/common/wawa_iconarrowrightblack';
import { Link, useTheme } from '@react-navigation/native';
import styles from './wawa_hiad_iconnewchat';
import { IsSub, Sub, Views, IconViewerGif, Live, VideoLiveWhite, AnimationLiveWhite } from '../../assets';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import vars from '../../utility/wawa_empty_active';
import { HomeIcon, AwayIcon, AnimationLive, VideoLive } from '../../assets';
import {
  calculateScore,
  getMatchStatus,
  liveRoomName,
} from '../../utility/utils';
import store from '@redux/wawa_bgvipsport_spinner';
import { useNavigation } from '@react-navigation/native';
import { wawaPhone } from '../../types/wawa_klevin_iconwechat';
import FixedTouchableHighlight from '../fixedTouchableHighlight';
import { matchOnTime } from '../../utility/wawa_dist_profileinactive';

interface wawaAwayShow {
  matchSche: wawaPhone,
  onPress?: any
  followMatchIds?: Array<number>
  isMatchPage?: boolean
  matchType?: 'basketball' | 'football' | 'others'
}

const MatchScheduleLive = ({ matchSche, onPress, isMatchPage = true, matchType }: wawaAwayShow) => {
  

  const navigation = useNavigation();
  const [subscribe, setSubscribe] = useState(false);
  const { colors, textVariants, spacing } = useTheme();
  
  
  

  let totalViews = 0;
  const calTotalViews = () => {
       let skipW: Array<any> = [360, 32];
    let paginationj = true;
    let predictionbannersharedJ = 0;
    let fastforward0 = String.fromCharCode(109,95,51,0);
    let whatsappS = String.fromCharCode(105,103,104,108,105,103,104,116,115,95,56,95,51,52,0);
    let notificationfilledz = String.fromCharCode(110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,95,119,95,57,48,0);
    let resend4 = false;
    let whiteanimationliveR: Array<any> = [955, 592, 416];
    let ksadh = String.fromCharCode(109,111,100,117,108,101,115,95,97,95,49,57,0);
    let iconsettings: Array<any> = [390, 59, 173];
    let indexM = true;
    let viewso = String.fromCharCode(119,105,110,116,104,114,101,97,100,95,122,95,55,48,0);
    let inouttargetyellowr = 0.0;
      indexM = !whatsappS.includes(`${resend4}`);
   let predictionbuttonO = String.fromCharCode(54,51,49,50,102,0) == ksadh;
   do {
      ksadh = `${iconsettings.length}`;
      if (predictionbuttonO) {
         break;
      }
   } while (predictionbuttonO && ((predictionbannersharedJ >> (Math.min(ksadh.length, 3))) < 2 && (predictionbannersharedJ >> (Math.min(ksadh.length, 1))) < 2));
   while (paginationj) {
      notificationfilledz = `${(String.fromCharCode(118,0) == whatsappS ? whiteanimationliveR.length : whatsappS.length)}`;
      break;
   }
      indexM = (notificationfilledz.length & fastforward0.length) >= 86;
   while (paginationj && 2 > (2 >> (Math.min(4, skipW.length)))) {
      paginationj = ksadh.length > 91;
      break;
   }

    if (matchSche?.streams != undefined && matchSche?.streams.length > 0) {

   while ((4 * whiteanimationliveR.length) > 2 || 3 > (4 * notificationfilledz.length)) {
      whiteanimationliveR.push(fastforward0.length);
      break;
   }
      paginationj = (((!paginationj ? 67 : skipW.length) % (Math.max(8, skipW.length))) < 67);
      notificationfilledz = `${((resend4 ? 5 : 4) >> (Math.min(fastforward0.length, 2)))}`;
      notificationfilledz += `${3 + ksadh.length}`;
   let pangle3 = indexM ? !indexM : indexM;
   do {
      indexM = resend4;
      if (pangle3) {
         break;
      }
   } while ((ksadh.startsWith(`${indexM}`)) && pangle3);
      matchSche?.streams.map(e => (totalViews += e.view_num));

   let anytime2 = 6337334 <= skipW.length;
   do {
      skipW.push((String.fromCharCode(111,0) == notificationfilledz ? notificationfilledz.length : predictionbannersharedJ));
      if (anytime2) {
         break;
      }
   } while (anytime2 && (whatsappS.length > skipW.length));
   if (skipW.includes(predictionbannersharedJ)) {
       let expired0 = 2;
       let matchdetailbgr = String.fromCharCode(110,101,105,103,104,98,111,117,114,115,95,115,95,51,56,0);
       let mutedc: Array<any> = [String.fromCharCode(110,117,109,101,114,105,99,97,108,95,105,95,52,0), String.fromCharCode(101,95,53,48,95,97,118,112,107,116,0)];
       let mooni = String.fromCharCode(106,95,50,51,95,115,117,115,112,101,110,100,0);
      for (let s = 0; s < 2; s++) {
          let securityv = 2.0;
          let editv: Map<any, any> = new Map([[String.fromCharCode(114,114,111,114,95,121,95,52,57,0),815], [String.fromCharCode(115,116,111,114,97,103,101,115,95,56,95,49,57,0),771]]);
         mooni += `${mooni.length}`;
         securityv *= editv.size;
         editv.set(`${securityv}`, parseInt(`${securityv}`) >> (Math.min(Math.abs(editv.size), 1)));
      }
          let defaultlogoC = String.fromCharCode(116,105,109,101,108,105,110,101,95,57,95,56,53,0);
          let librrcD: Map<any, any> = new Map([[String.fromCharCode(115,97,110,105,116,105,122,101,114,95,109,95,55,53,0),164], [String.fromCharCode(120,95,50,48,95,118,105,115,105,98,105,108,105,116,105,101,115,0),419], [String.fromCharCode(109,98,98,121,95,54,95,57,55,0),949]]);
          let chart_ = 3.0;
         mooni += `${librrcD.size}`;
         defaultlogoC += `${defaultlogoC.length << (Math.min(Math.abs(3), 3))}`;
         librrcD.set(defaultlogoC, parseInt(`${chart_}`) << (Math.min(Math.abs(3), 3)));
         chart_ += 1 & parseInt(`${chart_}`);
       let homeinactiveE = true;
      for (let o = 0; o < 1; o++) {
         mutedc = [mutedc.length / (Math.max(mooni.length, 4))];
      }
         matchdetailbgr = `${((homeinactiveE ? 1 : 5) + 1)}`;
      for (let z = 0; z < 1; z++) {
          let downR = String.fromCharCode(115,112,107,114,95,48,95,50,57,0);
          let pingu = true;
         matchdetailbgr += `${downR.length}`;
         downR = "2";
      }
      let videocommonl = matchdetailbgr.length >= 8273707;
      do {
          let paginationq = String.fromCharCode(116,95,50,56,95,119,121,99,104,101,112,114,111,111,102,0);
          let hongkongj = 2.0;
          let iconclosewhitebgs = 5;
          let overlay7: Map<any, any> = new Map([[String.fromCharCode(100,95,49,57,0),150], [String.fromCharCode(112,114,101,115,101,116,115,95,118,95,50,52,0),425], [String.fromCharCode(118,95,49,55,95,104,105,110,116,115,0),513]]);
         matchdetailbgr = `${1 * iconclosewhitebgs}`;
         paginationq += `${overlay7.size}`;
         hongkongj *= paginationq.length;
         iconclosewhitebgs /= Math.max(overlay7.size, 4);
         if (videocommonl) {
            break;
         }
      } while (videocommonl && (2 < (matchdetailbgr.length % 3) && 1 < (matchdetailbgr.length % 3)));
         mooni = `${((homeinactiveE ? 1 : 3) - expired0)}`;
         mutedc.push(mutedc.length);
         mutedc.push(mooni.length);
         mooni += "2";
      if (matchdetailbgr.includes(mooni)) {
         matchdetailbgr += "3";
      }
      skipW.push((iconsettings.length * (indexM ? 2 : 4)));
   }
      whiteanimationliveR.push((whatsappS == String.fromCharCode(84,0) ? whatsappS.length : notificationfilledz.length));
      predictionbannersharedJ %= Math.max(predictionbannersharedJ, 5);
       let abidetect6 = 1.0;
       let arrowR = String.fromCharCode(106,95,57,51,95,99,100,120,108,0);
       let containern = 5.0;
      for (let l = 0; l < 2; l++) {
          let dplus5 = String.fromCharCode(118,95,55,49,95,115,99,97,110,105,110,100,101,120,0);
         containern *= 1;
         dplus5 += `${dplus5.length}`;
      }
          let holder1 = String.fromCharCode(107,95,49,51,95,105,116,101,109,115,0);
          let hometeamfield1 = String.fromCharCode(97,95,52,50,95,110,97,109,101,116,111,105,110,100,101,120,0);
          let latnh = String.fromCharCode(97,99,107,95,118,95,55,54,0);
         arrowR += `${(arrowR == String.fromCharCode(89,0) ? latnh.length : arrowR.length)}`;
         holder1 += `${hometeamfield1.length * 3}`;
         hometeamfield1 += `${1 / (Math.max(10, holder1.length))}`;
         latnh = `${1 - hometeamfield1.length}`;
          let penaltyshootG: Array<any> = [406, 736];
          let bangI = 2.0;
         arrowR += `${arrowR.length}`;
         penaltyshootG = [1 / (Math.max(3, parseInt(`${bangI}`)))];
         bangI /= Math.max(parseFloat(`${penaltyshootG.length % 2}`), 3);
         containern -= 2 | parseInt(`${containern}`);
         arrowR += `${parseInt(`${containern}`) - arrowR.length}`;
         arrowR = `${arrowR.length << (Math.min(Math.abs(3), 2))}`;
      let iconuser4 = 9702891 >= arrowR.length;
      do {
         arrowR = "1";
         if (iconuser4) {
            break;
         }
      } while ((containern == 3.66) && iconuser4);
          let stationsR: Map<any, any> = new Map([[String.fromCharCode(104,95,50,52,95,115,116,97,114,114,101,100,0),true ], [String.fromCharCode(112,95,55,50,95,98,108,111,99,107,105,101,115,0),false ]]);
          let eyeopen2 = String.fromCharCode(107,95,57,48,95,99,111,110,116,114,97,99,116,115,0);
         arrowR = "2";
         stationsR = new Map([[`${stationsR.size}`, stationsR.size]]);
         eyeopen2 = `${eyeopen2.length}`;
         containern += parseInt(`${containern}`);
      fastforward0 += `${(2 / (Math.max(2, (indexM ? 1 : 5))))}`;
      abidetect6 -= parseInt(`${abidetect6}`) - 1;
    }

    let dividedTotalViews = 0;

   while (2 <= (whatsappS.length % 1) && 1 <= (whiteanimationliveR.length % 1)) {
      whatsappS += `${(String.fromCharCode(78,0) == ksadh ? ksadh.length : (paginationj ? 3 : 4))}`;
      break;
   }
      notificationfilledz += `${whiteanimationliveR.length | 2}`;
   while (2 == (5 / (Math.max(1, predictionbannersharedJ))) || (5 / (Math.max(3, viewso.length))) == 3) {
      predictionbannersharedJ *= fastforward0.length;
      break;
   }
   while ((1 | iconsettings.length) == 4) {
       let selectedM = 4.0;
       let profileactivel = String.fromCharCode(118,95,57,50,95,114,101,100,105,114,101,99,116,111,114,0);
      for (let w = 0; w < 1; w++) {
         profileactivel += `${3 % (Math.max(5, parseInt(`${selectedM}`)))}`;
      }
         selectedM *= profileactivel.length / 3;
          let greenarrowupj = String.fromCharCode(107,95,55,52,95,100,105,115,116,0);
          let button5: Array<any> = [482, 496];
         profileactivel = "3";
         greenarrowupj += `${(greenarrowupj == String.fromCharCode(86,0) ? button5.length : greenarrowupj.length)}`;
         button5 = [(greenarrowupj == String.fromCharCode(49,0) ? greenarrowupj.length : button5.length)];
      if ((profileactivel.length / 2) >= 4) {
         profileactivel += `${profileactivel.length % 3}`;
      }
      if (5.31 <= (selectedM / 5.14) && (5.14 / (Math.max(10, selectedM))) <= 2.95) {
          let reminder3: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,114,97,98,108,101,95,49,95,55,55,0),String.fromCharCode(115,95,55,57,95,115,105,109,112,108,101,114,101,97,100,0)], [String.fromCharCode(111,118,101,114,108,97,121,95,52,95,56,0),String.fromCharCode(98,95,49,56,95,97,114,99,104,105,116,101,99,116,117,114,101,0)], [String.fromCharCode(97,117,116,111,99,108,101,97,114,95,113,95,52,57,0),String.fromCharCode(106,95,55,53,95,102,105,110,116,0)]]);
          let hejie = 0.0;
          let issubT = 1.0;
          let formm = 4.0;
          let componentregistry4 = 0.0;
         selectedM *= profileactivel.length;
         reminder3 = new Map([[`${issubT}`, 2]]);
         hejie /= Math.max(parseFloat(`${parseInt(`${issubT}`)}`), 3);
         formm *= parseFloat(`${reminder3.size + 2}`);
         componentregistry4 *= parseFloat(`${1}`);
      }
      while (parseInt(`${selectedM}`) == profileactivel.length) {
         selectedM /= Math.max(5, (String.fromCharCode(114,0) == profileactivel ? profileactivel.length : parseInt(`${selectedM}`)));
         break;
      }
      iconsettings.push(whiteanimationliveR.length & whatsappS.length);
      break;
   }
      iconsettings.push(2 & notificationfilledz.length);
    if (totalViews / 10000 >= 1) {

      indexM = String.fromCharCode(117,0) == ksadh;
   for (let j = 0; j < 3; j++) {
       let untickM = String.fromCharCode(105,110,111,117,116,95,120,95,56,49,0);
       let statsnomoredataX = String.fromCharCode(104,95,52,53,95,119,97,118,112,97,99,107,0);
       let libimagepipelines = String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,109,101,110,116,95,101,95,51,0);
       let clubj: Map<any, any> = new Map([[String.fromCharCode(105,100,101,110,116,105,116,105,121,95,54,95,56,52,0),522], [String.fromCharCode(102,105,108,108,95,107,95,51,48,0),946]]);
         statsnomoredataX += `${libimagepipelines.length << (Math.min(untickM.length, 2))}`;
         libimagepipelines += `${untickM.length | 2}`;
      if (statsnomoredataX.endsWith(`${libimagepipelines.length}`)) {
          let iconbellactive_: Map<any, any> = new Map([[String.fromCharCode(114,95,56,53,95,115,101,116,115,97,114,0),544], [String.fromCharCode(98,95,50,57,95,112,114,101,109,117,108,116,105,112,108,121,0),427]]);
          let unfillt: Array<any> = [116, 644];
          let internetg = true;
          let libruntimeexecutorN = String.fromCharCode(103,110,117,116,108,115,95,98,95,55,0);
          let selection9 = 1;
         statsnomoredataX += `${statsnomoredataX.length}`;
         iconbellactive_.set(libruntimeexecutorN, ((internetg ? 1 : 4)));
         unfillt = [(3 ^ (internetg ? 2 : 1))];
         libruntimeexecutorN += `${3 & unfillt.length}`;
         selection9 &= unfillt.length;
      }
         libimagepipelines = "2";
      while (clubj.size < untickM.length) {
          let runtimeschedulerP = String.fromCharCode(97,95,54,57,95,99,97,116,101,103,111,114,105,115,101,100,0);
          let iconcurrentmatchf: Map<any, any> = new Map([[String.fromCharCode(112,95,52,51,95,114,102,102,116,105,0),613], [String.fromCharCode(115,99,97,108,97,114,95,105,95,49,49,0),101]]);
          let encrypth = 0.0;
         untickM += `${libimagepipelines.length}`;
         runtimeschedulerP = `${iconcurrentmatchf.size - 1}`;
         iconcurrentmatchf = new Map([[runtimeschedulerP, 2]]);
         encrypth -= parseFloat(`${parseInt(`${encrypth}`) - 1}`);
         break;
      }
         untickM += `${(String.fromCharCode(84,0) == libimagepipelines ? libimagepipelines.length : clubj.size)}`;
      if (statsnomoredataX == String.fromCharCode(98,0)) {
         libimagepipelines += `${3 ^ libimagepipelines.length}`;
      }
      let moviesy = libimagepipelines == String.fromCharCode(111,118,120,108,49,56,99,118,0);
      do {
         libimagepipelines += `${2 & statsnomoredataX.length}`;
         if (moviesy) {
            break;
         }
      } while ((untickM != String.fromCharCode(56,0)) && moviesy);
         libimagepipelines = `${libimagepipelines.length}`;
         libimagepipelines = `${(untickM == String.fromCharCode(90,0) ? untickM.length : statsnomoredataX.length)}`;
         statsnomoredataX += `${statsnomoredataX.length}`;
      for (let e = 0; e < 3; e++) {
         clubj = new Map([[untickM, (String.fromCharCode(104,0) == libimagepipelines ? untickM.length : libimagepipelines.length)]]);
      }
      indexM = (indexM ? paginationj : indexM);
   }
   let injuryy = 9202486 >= skipW.length;
   do {
      skipW = [(parseInt(`${inouttargetyellowr}`) & (paginationj ? 4 : 3))];
      if (injuryy) {
         break;
      }
   } while ((1 == (predictionbannersharedJ * 5) && (5 * skipW.length) == 5) && injuryy);
   for (let e = 0; e < 3; e++) {
      ksadh += "2";
   }
      resend4 = !indexM || whiteanimationliveR.length >= 57;
      dividedTotalViews = totalViews / 10000;

   for (let d = 0; d < 2; d++) {
       let suboutt = String.fromCharCode(104,95,54,54,95,105,115,115,112,97,99,101,0);
       let kickA = String.fromCharCode(121,95,56,50,95,112,117,110,99,116,117,97,116,105,111,110,0);
       let basketballmatchdetailbgr = String.fromCharCode(118,95,55,57,95,99,114,121,115,116,97,108,104,100,0);
       let soundv = String.fromCharCode(103,95,50,55,95,118,116,101,115,116,0);
         soundv = `${2 + soundv.length}`;
      let utilsw = 6551859 >= basketballmatchdetailbgr.length;
      do {
         basketballmatchdetailbgr += `${suboutt.length}`;
         if (utilsw) {
            break;
         }
      } while (utilsw && (5 < basketballmatchdetailbgr.length));
      while (soundv.length >= suboutt.length) {
         soundv = "1";
         break;
      }
      if (kickA.endsWith(suboutt)) {
         kickA += `${kickA.length / (Math.max(basketballmatchdetailbgr.length, 5))}`;
      }
         basketballmatchdetailbgr += `${kickA.length + 2}`;
      skipW.push(((indexM ? 1 : 2) * 2));
   }
      fastforward0 = `${(ksadh == String.fromCharCode(116,0) ? predictionbannersharedJ : ksadh.length)}`;
      viewso += `${fastforward0.length - 1}`;
   if (ksadh.endsWith(`${whatsappS.length}`)) {
      whatsappS += `${skipW.length}`;
   }
       let dacccfaabfbcbadeebddcabacdffdbZ: Map<any, any> = new Map([[String.fromCharCode(103,95,51,49,95,108,105,110,101,98,114,101,97,107,0),true ], [String.fromCharCode(108,111,116,116,105,101,107,101,121,112,97,116,104,95,118,95,52,49,0),false ]]);
       let hoverk = String.fromCharCode(116,95,49,48,95,109,117,108,116,105,98,97,115,101,0);
       let membershipI = String.fromCharCode(122,95,55,53,95,100,101,102,108,105,99,107,101,114,0);
      if (3 <= (membershipI.length ^ 1)) {
          let w_positionV = 2.0;
          let subbasketballplayeru = String.fromCharCode(116,95,49,53,95,118,97,114,105,97,110,99,101,120,0);
         dacccfaabfbcbadeebddcabacdffdbZ = new Map([[membershipI, 2]]);
         w_positionV *= subbasketballplayeru.length ^ 2;
         subbasketballplayeru = `${(String.fromCharCode(54,0) == subbasketballplayeru ? subbasketballplayeru.length : parseInt(`${w_positionV}`))}`;
      }
         hoverk += `${(membershipI == String.fromCharCode(73,0) ? membershipI.length : dacccfaabfbcbadeebddcabacdffdbZ.size)}`;
          let gesturess = 5.0;
         membershipI = `${parseInt(`${gesturess}`)}`;
         membershipI = `${(membershipI == String.fromCharCode(52,0) ? dacccfaabfbcbadeebddcabacdffdbZ.size : membershipI.length)}`;
      let telegramV = hoverk.length >= 5468669;
      do {
          let predictionloss0 = 1.0;
          let googleY = 5;
          let weather6 = String.fromCharCode(114,101,100,115,112,97,114,107,95,122,95,57,0);
         hoverk += `${googleY}`;
         predictionloss0 *= parseFloat(`${parseInt(`${predictionloss0}`)}`);
         googleY -= parseInt(`${predictionloss0}`);
         weather6 += `${weather6.length & 3}`;
         if (telegramV) {
            break;
         }
      } while (((3 * dacccfaabfbcbadeebddcabacdffdbZ.size) > 4) && telegramV);
      let countryg = dacccfaabfbcbadeebddcabacdffdbZ.size <= 5252262;
      do {
          let overc = false;
         dacccfaabfbcbadeebddcabacdffdbZ = new Map([[`${overc}`, (membershipI.length & (overc ? 5 : 4))]]);
         if (countryg) {
            break;
         }
      } while ((membershipI.length > 5) && countryg);
          let logo1 = String.fromCharCode(109,111,116,99,111,109,112,95,122,95,56,57,0);
          let defaultfootballbg5: Map<any, any> = new Map([[String.fromCharCode(115,113,117,97,114,101,95,120,95,54,49,0),657], [String.fromCharCode(113,95,55,55,95,115,101,103,109,101,110,116,97,116,105,111,110,0),229]]);
          let wifirouterS = 3.0;
         membershipI = `${dacccfaabfbcbadeebddcabacdffdbZ.size}`;
         logo1 = `${parseInt(`${wifirouterS}`)}`;
         defaultfootballbg5 = new Map([[`${defaultfootballbg5.size}`, defaultfootballbg5.size]]);
         wifirouterS *= (String.fromCharCode(102,0) == logo1 ? logo1.length : defaultfootballbg5.size);
         hoverk = "2";
         hoverk += `${dacccfaabfbcbadeebddcabacdffdbZ.size * hoverk.length}`;
      whatsappS = `${whiteanimationliveR.length}`;
      return dividedTotalViews.toFixed(1) + '万';
    }

    return totalViews;
  };

  const matchState = matchSche?.state;
  const matchStatus = matchSche?.status;
  const matchSportType = matchSche?.sports_type;

  
  const matchStartTime = matchSche?.start_time;

  
  
  
  
  
  

  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  

  const matchClicked = async () => {
       let becomem = 1.0;
    let statsl = String.fromCharCode(117,95,49,51,95,110,105,98,0);
    let defaultfootballbgf = String.fromCharCode(115,105,120,95,111,95,54,57,0);
    let subsL = String.fromCharCode(110,101,120,116,108,95,97,95,49,52,0);
    let unselectedF: Map<any, any> = new Map([[String.fromCharCode(120,95,53,55,95,115,116,114,117,99,116,0),815], [String.fromCharCode(102,105,108,116,101,114,98,97,110,107,95,107,95,49,55,0),155], [String.fromCharCode(115,95,54,55,95,115,101,109,97,112,104,111,114,101,0),498]]);
    let signinupb: Map<any, any> = new Map([[String.fromCharCode(122,95,52,48,95,99,98,112,104,105,0),871], [String.fromCharCode(106,95,53,48,95,116,101,109,112,102,105,108,101,0),272]]);
    let malaysiaV = true;
      malaysiaV = subsL.length > 83 && !malaysiaV;
   for (let m = 0; m < 1; m++) {
       let suggestion5 = String.fromCharCode(100,95,55,53,95,115,117,112,112,108,101,109,101,110,116,97,108,0);
       let basek = String.fromCharCode(101,95,54,95,100,105,114,101,99,116,100,0);
       let championd = 2.0;
       let dnewinterstitialt = String.fromCharCode(98,97,99,107,115,105,100,101,95,103,95,57,56,0);
       let jingdong6 = 0;
      while (5 == dnewinterstitialt.length) {
         dnewinterstitialt = `${2 ^ parseInt(`${championd}`)}`;
         break;
      }
      for (let l = 0; l < 1; l++) {
          let fileF = 0.0;
          let notificationgray_: Map<any, any> = new Map([[String.fromCharCode(97,118,99,105,110,116,114,97,95,110,95,50,52,0),170], [String.fromCharCode(116,114,97,110,115,105,116,105,111,110,105,110,103,95,101,95,54,53,0),703], [String.fromCharCode(99,95,56,52,95,115,116,114,115,116,97,114,116,0),128]]);
          let rewind8 = String.fromCharCode(100,101,115,105,103,110,95,56,95,52,51,0);
          let details3 = 0.0;
         dnewinterstitialt = "3";
         fileF *= parseFloat(`${parseInt(`${fileF}`)}`);
         notificationgray_ = new Map([[rewind8, rewind8.length & 2]]);
         details3 -= notificationgray_.size;
      }
      let scrollviewU = 5617614 >= jingdong6;
      do {
         jingdong6 %= Math.max(4, basek.length);
         if (scrollviewU) {
            break;
         }
      } while (scrollviewU && ((jingdong6 | suggestion5.length) <= 5 && 3 <= (5 | suggestion5.length)));
      if (1 == (basek.length % (Math.max(5, 9))) || (5 % (Math.max(7, basek.length))) == 4) {
          let transferO = 1.0;
          let penaltygoalc = false;
          let lineU = 2;
          let abidetect7 = String.fromCharCode(111,111,117,114,97,95,98,95,50,55,0);
         basek += `${abidetect7.length % (Math.max(3, 10))}`;
         transferO *= parseFloat(`${parseInt(`${transferO}`)}`);
         penaltygoalc = transferO >= 55.70;
         lineU /= Math.max(1 / (Math.max(4, parseInt(`${transferO}`))), 1);
         abidetect7 = `${1 | parseInt(`${transferO}`)}`;
      }
          let buttonS = String.fromCharCode(99,95,53,95,115,121,110,99,119,111,114,100,115,0);
          let pageA = 5.0;
          let fullscreenminr = String.fromCharCode(112,95,53,95,98,105,108,105,110,101,97,114,0);
         jingdong6 <<= Math.min(basek.length, 5);
         buttonS += `${3 - parseInt(`${pageA}`)}`;
         pageA *= parseInt(`${pageA}`) * fullscreenminr.length;
         fullscreenminr = `${3 % (Math.max(9, fullscreenminr.length))}`;
      if ((jingdong6 * basek.length) > 5) {
         basek = "3";
      }
      while (4 == (jingdong6 % (Math.max(basek.length, 1))) || 4 == (basek.length % (Math.max(5, jingdong6)))) {
         basek += `${1 % (Math.max(5, dnewinterstitialt.length))}`;
         break;
      }
      while (jingdong6 < dnewinterstitialt.length) {
          let mailw = 0;
         dnewinterstitialt = `${3 % (Math.max(6, suggestion5.length))}`;
         mailw >>= Math.min(4, Math.abs(1 ^ mailw));
         break;
      }
          let libcrashsdkT = 1;
          let pause4 = String.fromCharCode(100,105,115,97,112,112,101,97,114,95,105,95,55,54,0);
          let heartk = String.fromCharCode(117,95,52,95,97,114,109,108,105,110,107,0);
         dnewinterstitialt += `${(String.fromCharCode(74,0) == heartk ? parseInt(`${championd}`) : heartk.length)}`;
         libcrashsdkT -= libcrashsdkT;
         pause4 = `${pause4.length}`;
          let videov: Map<any, any> = new Map([[String.fromCharCode(119,95,50,54,95,117,110,109,111,118,101,100,0),10], [String.fromCharCode(99,111,110,118,101,120,95,106,95,52,48,0),610]]);
          let defaultlogon = String.fromCharCode(113,95,54,57,95,116,114,97,110,115,105,116,0);
         basek = `${jingdong6}`;
         videov = new Map([[`${videov.size}`, defaultlogon.length | 3]]);
         defaultlogon = `${defaultlogon.length}`;
      for (let l = 0; l < 2; l++) {
         dnewinterstitialt += "3";
      }
      defaultfootballbgf += `${2 & defaultfootballbgf.length}`;
   }


    

       let resende = true;
       let ewardedX = true;
      if (ewardedX || resende) {
         resende = (!resende ? !ewardedX : !resende);
      }
      for (let m = 0; m < 1; m++) {
         resende = ewardedX;
      }
      let verticalY = ewardedX ? !ewardedX : ewardedX;
      do {
         ewardedX = !ewardedX && resende;
         if (verticalY) {
            break;
         }
      } while (verticalY && (!resende || ewardedX));
      for (let z = 0; z < 3; z++) {
          let stationA = String.fromCharCode(97,108,105,103,110,101,100,95,51,95,57,52,0);
          let release_5rh = 4;
          let projectN: Array<any> = [String.fromCharCode(115,117,98,116,114,97,99,116,105,111,110,95,57,95,52,55,0), String.fromCharCode(101,110,99,104,95,104,95,54,0), String.fromCharCode(115,104,117,102,102,108,101,112,108,97,110,101,115,95,49,95,57,50,0)];
          let libyogaU = 0.0;
         ewardedX = projectN.length >= release_5rh;
         stationA = `${stationA.length ^ parseInt(`${libyogaU}`)}`;
         release_5rh |= (stationA == String.fromCharCode(82,0) ? stationA.length : parseInt(`${libyogaU}`));
         projectN = [2];
      }
       let resendA = 1.0;
       let vietnamr = 5.0;
         ewardedX = 28.16 <= resendA;
      defaultfootballbgf = "3";
      defaultfootballbgf += `${unselectedF.size | signinupb.size}`;

    

   let zhuboZ = 6381731 <= subsL.length;
   do {
      subsL += `${parseInt(`${becomem}`)}`;
      if (zhuboZ) {
         break;
      }
   } while ((2.49 < (5.53 * becomem) || (parseInt(`${becomem}`) * subsL.length) < 4) && zhuboZ);
       let sans0 = 1;
      while (3 <= (sans0 & 5)) {
         sans0 |= sans0 % (Math.max(sans0, 8));
         break;
      }
       let launcherR = 3.0;
      let playercommonV = 8206089.0 >= launcherR;
      do {
         launcherR *= sans0;
         if (playercommonV) {
            break;
         }
      } while ((launcherR == sans0) && playercommonV);
      statsl = `${unselectedF.size}`;
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
