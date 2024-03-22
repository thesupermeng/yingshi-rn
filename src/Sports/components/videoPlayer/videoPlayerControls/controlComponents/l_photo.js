import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, View, Text, TouchableHighlight, Image} from 'react-native';
import {
  setVideoSource,
  updateVideoPropPipe,
  VideoPlayerActions,
} from '../../../../pages/matchDetails/action';
import {Colors} from '../../../../global/bp_grey_vietnam';
import {useLiveVideoSources} from '@hooks/useLiveVideoSources';
import {useAnimationVideoSources} from '@hooks/useAnimationVideoSources';
import {VideoLiveType} from '../../../../global/wd_group_recommendation';
import {VideoLive, AnimationLive} from '../../../../assets';

export const SwitchSourcePanel = ({isBottom}) => {
  const styles = createStyles(isBottom);

  const dispatch = useDispatch();
  const liveVideoList = useLiveVideoSources();
  const animationVideoList = useAnimationVideoSources();
  const videoPlayerControl = useSelector(s => s.videoPlayerControl);

  
  
  
  
  
  
  
  

  const OptionGroup = ({title, titleImage, data, callback}) => {
    const isSelected = item => {
       let privilege7 = 3.0;
    let configure1 = String.fromCharCode(114,97,110,103,101,115,95,55,95,52,49,0);
    let philippinesw = String.fromCharCode(100,101,110,111,109,95,113,95,56,57,0);
    let reminder5 = new Map([[String.fromCharCode(105,95,54,54,95,103,105,116,104,117,98,0),797], [String.fromCharCode(115,95,53,54,95,108,105,115,116,101,100,0),206], [String.fromCharCode(117,95,56,49,95,106,112,101,103,108,115,100,101,99,0),959]]);
    let targetc = String.fromCharCode(116,105,116,110,116,95,50,95,51,0);
    let disconnectedh = new Map([[String.fromCharCode(118,95,54,48,95,109,101,109,98,101,114,115,104,105,112,0),String.fromCharCode(115,101,115,115,111,110,95,113,95,54,48,0)], [String.fromCharCode(116,95,52,50,95,99,111,109,98,105,0),String.fromCharCode(115,101,109,97,110,116,105,99,97,108,108,121,95,52,95,53,56,0)], [String.fromCharCode(120,95,56,56,95,100,101,99,111,100,101,100,0),String.fromCharCode(113,117,97,110,116,105,122,101,100,95,115,95,49,0)]]);
    let redirect2 = String.fromCharCode(115,111,109,101,95,57,95,49,55,0);
    let controlsp = String.fromCharCode(121,95,52,54,95,100,105,115,99,111,118,101,114,0);
    let buttonX = 2.0;
    let pressurel = String.fromCharCode(109,118,114,101,102,95,99,95,48,0);
    let floaterL = String.fromCharCode(105,118,115,101,116,117,112,95,103,95,54,49,0);
    let acceptedT = String.fromCharCode(104,95,57,56,95,114,101,99,111,114,100,105,110,103,99,111,110,110,0);
    let firebaseU = 3;
       let plashl = new Map([[String.fromCharCode(114,97,112,104,105,99,115,95,113,95,53,57,0),false ], [String.fromCharCode(111,95,49,95,112,97,99,107,105,110,103,0),false ], [String.fromCharCode(121,95,53,95,114,102,102,116,102,0),true ]]);
       let guidez = [108, 590, 337];
       let anythink4 = [550, 741];
         guidez.push(plashl.size / (Math.max(guidez.length, 10)));
      do {
         plashl = new Map([[`${guidez.length}`, anythink4.length]]);
         if (plashl.size == 2920171) {
            break;
         }
      } while ((Array.from(plashl.values()).includes(guidez.length)) && (plashl.size == 2920171));
         anythink4 = [anythink4.length - guidez.length];
         plashl = new Map([[`${plashl.size}`, plashl.size]]);
         anythink4.push(guidez.length);
       let hoverB = true;
          let privilegeg = String.fromCharCode(99,111,110,116,97,105,110,101,114,95,120,95,53,54,0);
         hoverB = !hoverB;
         privilegeg += "3";
         anythink4.push(2 << (Math.min(1, anythink4.length)));
         anythink4 = [plashl.size ^ guidez.length];
      buttonX /= Math.max(2, parseFloat(`${configure1.length}`));
      configure1 += `${targetc.length}`;
      pressurel = `${redirect2.length + 3}`;
   while (2 == (5 | floaterL.length) && (reminder5.size | floaterL.length) == 5) {
      reminder5 = new Map([[redirect2, 2 + philippinesw.length]]);
      break;
   }
      buttonX -= parseFloat(`${philippinesw.length}`);
       let matchesv = [626, 426, 191];
       let minivod0 = String.fromCharCode(112,95,52,50,95,100,101,108,105,109,0);
       let goalU = String.fromCharCode(105,95,55,56,95,97,100,100,101,114,0);
      for (let e = 0; e < 3; e++) {
         matchesv = [1];
      }
         minivod0 += `${(minivod0 == String.fromCharCode(72,0) ? minivod0.length : matchesv.length)}`;
         minivod0 += `${minivod0.length << (Math.min(goalU.length, 1))}`;
         goalU = `${goalU.length}`;
       let gift0 = String.fromCharCode(102,97,113,95,112,95,55,54,0);
      for (let u = 0; u < 1; u++) {
         minivod0 = `${goalU.length}`;
      }
         gift0 = `${matchesv.length >> (Math.min(minivod0.length, 5))}`;
         goalU = `${1 ^ matchesv.length}`;
      if (!gift0.endsWith(`${matchesv.length}`)) {
          let sheet9 = new Map([[String.fromCharCode(115,95,50,57,95,113,116,97,98,108,101,115,0),false ], [String.fromCharCode(111,95,57,57,95,109,105,115,99,0),false ], [String.fromCharCode(110,95,51,54,95,115,101,113,117,101,110,99,101,115,0),false ]]);
          let downloadingv = String.fromCharCode(116,111,111,116,105,112,95,48,95,53,0);
          let langkeyD = String.fromCharCode(115,105,122,101,114,95,53,95,56,55,0);
         gift0 += `${matchesv.length}`;
         sheet9[`${downloadingv}`] = downloadingv.length << (Math.min(Math.abs(3), 1));
         langkeyD += `${sheet9.size}`;
      }
      configure1 = `${(String.fromCharCode(77,0) == pressurel ? pressurel.length : parseInt(`${privilege7}`))}`;
       let connectionH = String.fromCharCode(98,95,57,52,95,113,115,99,97,108,101,0);
      do {
         connectionH = `${connectionH.length}`;
         if (connectionH == String.fromCharCode(110,102,105,107,98,101,0)) {
            break;
         }
      } while ((connectionH == String.fromCharCode(110,102,105,107,98,101,0)) && (!connectionH.includes(connectionH)));
          let largeX = 0.0;
          let delegate_pk3 = String.fromCharCode(99,95,54,50,95,116,104,111,117,103,104,0);
          let orangex = String.fromCharCode(99,95,52,52,95,99,111,109,112,105,108,101,111,112,116,105,111,110,0);
         connectionH += "1";
         largeX /= Math.max(5, parseFloat(`${1 + orangex.length}`));
         delegate_pk3 = `${delegate_pk3.length | orangex.length}`;
      while (1 <= connectionH.length) {
         connectionH += `${connectionH.length * connectionH.length}`;
         break;
      }
      configure1 += `${disconnectedh.size % (Math.max(reminder5.size, 1))}`;
      redirect2 += "3";
   while (philippinesw.startsWith(pressurel)) {
       let bufferm = [161, 933, 629];
       let productT = 2.0;
       let shrinkI = String.fromCharCode(102,95,53,52,95,115,99,114,111,108,108,101,114,0);
       let commonq = [733, 823];
       let anytimex = 4;
          let zhubod = [698, 7, 74];
          let orangeL = String.fromCharCode(100,105,115,116,114,105,98,117,116,101,95,51,95,52,51,0);
          let resultV = 2.0;
         bufferm = [parseInt(`${productT}`)];
         zhubod = [parseInt(`${resultV}`)];
         orangeL = `${orangeL.length}`;
         resultV /= Math.max(zhubod.length - 3, 4);
      if (2.89 == productT) {
         productT -= 2;
      }
         productT *= bufferm.length & 1;
      for (let c = 0; c < 3; c++) {
         bufferm.push(bufferm.length);
      }
          let policy8 = String.fromCharCode(101,112,115,118,95,111,95,54,53,0);
          let vietnamU = false;
         shrinkI = `${((vietnamU ? 5 : 2) << (Math.min(Math.abs(2), 1)))}`;
         policy8 += `${policy8.length << (Math.min(Math.abs(2), 3))}`;
         vietnamU = 97 <= policy8.length || policy8 == String.fromCharCode(68,0);
      if (5 > (3 ^ anytimex)) {
         productT -= commonq.length;
      }
         productT -= commonq.length;
       let sharedh = String.fromCharCode(104,111,114,105,122,111,110,116,97,108,95,122,95,57,51,0);
       let o_lockR = String.fromCharCode(116,95,52,50,95,104,97,108,102,100,0);
      while (o_lockR != sharedh) {
          let bodand = String.fromCharCode(97,110,99,104,111,114,105,110,103,95,120,95,56,51,0);
          let index1 = String.fromCharCode(99,95,52,57,95,117,110,104,97,110,100,108,101,100,0);
          let shirtI = String.fromCharCode(115,116,114,117,99,116,95,121,95,57,57,0);
         sharedh = `${bufferm.length}`;
         bodand += "2";
         index1 += `${(bodand == String.fromCharCode(76,0) ? bodand.length : shirtI.length)}`;
         shirtI = `${(String.fromCharCode(101,0) == bodand ? bodand.length : shirtI.length)}`;
         break;
      }
          let analyticF = 5.0;
          let buttona = String.fromCharCode(101,120,101,99,117,116,111,114,95,114,95,51,52,0);
          let awaym = 5.0;
         bufferm.push(1);
         analyticF *= parseFloat(`${parseInt(`${awaym}`) + parseInt(`${analyticF}`)}`);
         buttona += `${parseInt(`${awaym}`) - 1}`;
      for (let a = 0; a < 3; a++) {
         anytimex /= Math.max(5, parseInt(`${productT}`));
      }
      while (5 == shrinkI.length) {
         shrinkI += `${1 * bufferm.length}`;
         break;
      }
      if (shrinkI == String.fromCharCode(49,0)) {
         o_lockR = `${commonq.length % 1}`;
      }
         shrinkI += `${sharedh.length << (Math.min(Math.abs(3), 4))}`;
      while ((shrinkI.length - 2) <= 2 && 4 <= (2 * parseInt(`${productT}`))) {
         productT += shrinkI.length;
         break;
      }
      philippinesw = `${controlsp.length}`;
      break;
   }
   while (privilege7 == 2.68) {
      privilege7 += 3 | parseInt(`${buttonX}`);
      break;
   }
      targetc += `${targetc.length}`;
       let vietnamz = 2.0;
       let benefit1 = 3.0;
      if (vietnamz > benefit1) {
         vietnamz *= parseFloat(`${parseInt(`${vietnamz}`) + 2}`);
      }
         vietnamz /= Math.max(1, parseFloat(`${parseInt(`${vietnamz}`) ^ 1}`));
         benefit1 -= parseInt(`${vietnamz}`);
      do {
         benefit1 += 2 * parseInt(`${vietnamz}`);
         if (912048.0 == benefit1) {
            break;
         }
      } while ((vietnamz < benefit1) && (912048.0 == benefit1));
          let faviconI = true;
          let selected9 = 1.0;
          let weibof = String.fromCharCode(111,95,50,50,95,110,97,118,105,103,97,116,101,0);
         benefit1 -= weibof.length;
         faviconI = !faviconI || selected9 == 78.2;
         selected9 /= Math.max(3, (parseFloat(`${parseInt(`${selected9}`) & (faviconI ? 1 : 5)}`)));
         weibof += `${((faviconI ? 5 : 3) % (Math.max(parseInt(`${selected9}`), 5)))}`;
      if (1.51 < (2.19 + benefit1) || 2.19 < (benefit1 + vietnamz)) {
         vietnamz += parseFloat(`${parseInt(`${benefit1}`)}`);
      }
      pressurel += `${pressurel.length}`;
       let sheetx = String.fromCharCode(119,101,108,115,100,101,99,100,101,109,111,95,112,95,57,49,0);
       let regengA = String.fromCharCode(100,95,56,49,95,115,117,98,99,111,110,116,101,110,116,115,0);
       let stationsD = String.fromCharCode(99,111,110,110,95,103,95,49,57,0);
       let bootsplashP = String.fromCharCode(114,95,52,54,0);
         stationsD = `${stationsD.length << (Math.min(Math.abs(1), 5))}`;
         bootsplashP += `${2 - bootsplashP.length}`;
      while (stationsD != String.fromCharCode(114,0) && 1 <= bootsplashP.length) {
         stationsD = `${stationsD.length >> (Math.min(Math.abs(2), 4))}`;
         break;
      }
         bootsplashP = `${regengA.length | 1}`;
         stationsD = `${regengA.length - 2}`;
      disconnectedh[regengA] = 2 % (Math.max(10, sheetx.length));
   while (3 >= targetc.length) {
      targetc += `${2 >> (Math.min(4, Math.abs(disconnectedh.size)))}`;
      break;
   }
      controlsp += "1";
      privilege7 /= Math.max(1, 2 + acceptedT.length);
       let related4 = 5;
       let stepN = true;
       let private_oa = 2;
      for (let v = 0; v < 3; v++) {
         stepN = 95 <= private_oa || stepN;
      }
       let catagoryw = String.fromCharCode(113,95,51,50,95,109,111,100,101,0);
      while ((catagoryw.length | 5) >= 3 || 3 >= (private_oa | 5)) {
          let spinnery = 3.0;
          let pausew = String.fromCharCode(115,101,116,116,105,116,108,101,95,107,95,49,49,0);
          let usernamep = 2.0;
          let taiwani = String.fromCharCode(112,114,101,100,95,99,95,50,52,0);
          let tickedw = true;
         catagoryw = "1";
         spinnery += (parseFloat(`${(tickedw ? 5 : 2) + pausew.length}`));
         pausew = `${parseInt(`${usernamep}`) - 2}`;
         usernamep /= Math.max(3, 3);
         taiwani += "3";
         break;
      }
         catagoryw += "2";
      while (!stepN) {
         stepN = private_oa <= 80;
         break;
      }
         catagoryw = `${related4 | private_oa}`;
          let rules2 = new Map([[String.fromCharCode(112,114,111,114,101,115,100,97,116,97,95,101,95,53,53,0),false ], [String.fromCharCode(122,95,55,54,95,120,99,104,97,99,104,97,0),false ], [String.fromCharCode(98,95,56,51,95,115,101,101,110,0),true ]]);
          let whatsappV = 0;
         private_oa >>= Math.min(3, Math.abs(2 & private_oa));
         rules2 = new Map([[`${rules2.size}`, rules2.size | 1]]);
         whatsappV %= Math.max(1, rules2.size);
         catagoryw = `${private_oa | 2}`;
         stepN = catagoryw.includes(`${stepN}`);
      configure1 += `${(pressurel == String.fromCharCode(55,0) ? pressurel.length : parseInt(`${buttonX}`))}`;
      philippinesw = "1";

      return [item.code, item.src].includes(videoPlayerControl.source);
       let bottomr = 3.0;
      do {
         bottomr *= parseFloat(`${3}`);
         if (bottomr == 4656556.0) {
            break;
         }
      } while (((bottomr - bottomr) > 3.53 && 3.53 > (bottomr - bottomr)) && (bottomr == 4656556.0));
      while ((bottomr - 1.66) <= 2.36 && (1.66 - bottomr) <= 5.63) {
          let sourceC = new Map([[String.fromCharCode(102,95,52,55,95,103,114,97,98,98,101,114,0),624], [String.fromCharCode(105,95,56,53,95,118,105,101,119,0),918], [String.fromCharCode(116,95,50,48,95,114,103,98,116,111,0),414]]);
         bottomr *= parseFloat(`${sourceC.size % (Math.max(3, 8))}`);
         break;
      }
      while (5.37 > bottomr) {
          let overlayk = new Map([[String.fromCharCode(102,105,110,100,110,101,97,114,109,118,95,97,95,54,48,0),79], [String.fromCharCode(122,95,56,49,95,102,111,117,110,100,97,116,105,111,110,0),337]]);
         bottomr /= Math.max(parseFloat(`${overlayk.size | parseInt(`${bottomr}`)}`), 1);
         break;
      }
      acceptedT += `${configure1.length}`;
   for (let t = 0; t < 1; t++) {
      buttonX += parseFloat(`${acceptedT.length}`);
   }
      buttonX += (parseFloat(`${String.fromCharCode(108,0) == floaterL ? floaterL.length : parseInt(`${buttonX}`)}`));
      philippinesw += `${1 | acceptedT.length}`;
   for (let z = 0; z < 1; z++) {
      privilege7 += (philippinesw == String.fromCharCode(90,0) ? philippinesw.length : acceptedT.length);
   }
   do {
       let whitet = new Map([[String.fromCharCode(99,95,49,54,95,100,101,108,101,103,97,116,105,111,110,0),711], [String.fromCharCode(99,95,51,53,95,118,116,114,107,0),694]]);
         whitet[`${whitet.size}`] = whitet.size ^ 1;
         whitet = new Map([[`${whitet.size}`, whitet.size & 2]]);
         whitet = new Map([[`${whitet.size}`, whitet.size]]);
      philippinesw += `${disconnectedh.size & 2}`;
      if (4320484 == philippinesw.length) {
         break;
      }
   } while ((4320484 == philippinesw.length) && (3.5 >= buttonX));
   do {
       let clubl = 2;
       let filledG = new Map([[String.fromCharCode(100,101,110,111,105,115,105,110,103,95,103,95,48,0),true ], [String.fromCharCode(122,95,49,55,95,101,109,111,106,105,0),true ], [String.fromCharCode(119,95,51,95,116,114,105,101,115,0),false ]]);
          let ewardedO = String.fromCharCode(110,95,51,57,95,112,105,110,107,0);
          let cross2 = 1.0;
         clubl &= (ewardedO == String.fromCharCode(112,0) ? ewardedO.length : clubl);
         cross2 *= 1;
      do {
         filledG = new Map([[`${filledG.size}`, filledG.size]]);
         if (4097000 == filledG.size) {
            break;
         }
      } while (((filledG.size ^ clubl) == 3 || 4 == (3 ^ filledG.size)) && (4097000 == filledG.size));
       let thailandu = String.fromCharCode(109,105,109,101,95,48,95,55,0);
         thailandu = `${thailandu.length & filledG.size}`;
         clubl >>= Math.min(Math.abs((String.fromCharCode(81,0) == thailandu ? filledG.size : thailandu.length)), 2);
       let o_titleI = new Map([[String.fromCharCode(103,95,56,48,95,117,110,105,120,0),722], [String.fromCharCode(108,95,53,52,95,99,97,109,112,97,105,103,110,0),89], [String.fromCharCode(104,97,110,100,101,114,95,48,95,56,53,0),154]]);
      buttonX += parseFloat(`${1 >> (Math.min(5, controlsp.length))}`);
      if (1084012.0 == buttonX) {
         break;
      }
   } while ((1084012.0 == buttonX) && (2.68 == (5.11 * buttonX) || (parseInt(`${buttonX}`) * philippinesw.length) == 4));
   do {
      floaterL += `${philippinesw.length}`;
      if (floaterL == String.fromCharCode(98,97,53,102,111,101,0)) {
         break;
      }
   } while ((pressurel == String.fromCharCode(98,0) && floaterL.length == 3) && (floaterL == String.fromCharCode(98,97,53,102,111,101,0)));
   while ((philippinesw.length % (Math.max(4, 2))) >= 5) {
       let downloadf = 5;
         downloadf ^= downloadf;
         downloadf /= Math.max(downloadf / (Math.max(10, downloadf)), 4);
         downloadf -= downloadf;
      philippinesw += `${disconnectedh.size % 1}`;
      break;
   }
      configure1 = `${disconnectedh.size & 2}`;
   for (let l = 0; l < 1; l++) {
      redirect2 = "2";
   }
   if (configure1 == String.fromCharCode(68,0)) {
       let sinaw = String.fromCharCode(101,95,53,49,95,110,109,118,106,111,105,110,116,115,97,100,99,111,115,116,0);
       let sentryY = 5.0;
       let roomi = String.fromCharCode(119,95,49,50,95,115,117,114,102,0);
       let topicE = 3.0;
      if (roomi.includes(`${topicE}`)) {
         roomi += `${parseInt(`${sentryY}`) / (Math.max(roomi.length, 4))}`;
      }
      do {
          let footballX = String.fromCharCode(108,101,98,110,95,107,95,51,48,0);
         sentryY += parseFloat(`${sinaw.length}`);
         footballX += `${footballX.length >> (Math.min(Math.abs(1), 3))}`;
         if (sentryY == 804144.0) {
            break;
         }
      } while ((sentryY == 804144.0) && ((3.49 - sentryY) >= 5.68 || (parseFloat(`${sinaw.length}`) - sentryY) >= 3.49));
      if (!sinaw.includes(roomi)) {
          let topicu = [String.fromCharCode(105,115,109,101,109,115,101,116,95,121,95,53,50,0), String.fromCharCode(112,111,115,101,95,113,95,53,51,0), String.fromCharCode(97,114,114,97,110,103,101,109,101,110,116,95,49,95,52,56,0)];
          let condensedi = new Map([[String.fromCharCode(122,95,49,53,95,102,97,105,108,97,98,108,101,0),224], [String.fromCharCode(121,95,49,52,95,97,116,111,98,111,111,108,0),398], [String.fromCharCode(115,116,114,105,110,103,98,117,102,102,101,114,95,118,95,55,55,0),916]]);
          let editS = 0.0;
          let type_jj = 3;
          let k_centerB = new Map([[String.fromCharCode(118,101,114,105,102,105,97,116,105,111,110,95,97,95,53,57,0),667], [String.fromCharCode(104,95,49,48,95,120,114,101,115,0),296]]);
         roomi += `${2 - sinaw.length}`;
         topicu.push(topicu.length);
         condensedi[`${type_jj}`] = parseInt(`${editS}`) % (Math.max(7, type_jj));
         editS *= parseInt(`${editS}`);
         k_centerB[`${topicu.length}`] = 2 * topicu.length;
      }
         topicE += (parseFloat(`${String.fromCharCode(109,0) == sinaw ? sinaw.length : parseInt(`${topicE}`)}`));
      do {
          let detailsm = 2;
          let downE = String.fromCharCode(120,95,49,53,95,101,109,112,116,121,0);
         sentryY -= parseFloat(`${parseInt(`${sentryY}`) + downE.length}`);
         detailsm -= 2 | detailsm;
         downE += "3";
         if (924097.0 == sentryY) {
            break;
         }
      } while ((924097.0 == sentryY) && (4.82 > (sentryY * 4.63) || 5 > (4 << (Math.min(3, sinaw.length)))));
      while ((topicE + parseFloat(`${roomi.length}`)) < 1.62 || (1 + roomi.length) < 5) {
         roomi += `${2 * sinaw.length}`;
         break;
      }
         sinaw = `${parseInt(`${topicE}`)}`;
      if (topicE >= 3.36) {
          let trophyI = false;
          let benefitz = String.fromCharCode(100,95,55,54,95,112,114,105,110,116,102,0);
          let textb = new Map([[String.fromCharCode(97,117,116,111,97,114,99,104,105,118,101,95,113,95,49,53,0),false ], [String.fromCharCode(118,95,51,48,95,110,115,117,105,114,103,98,97,0),false ]]);
         topicE += parseFloat(`${2 << (Math.min(3, benefitz.length))}`);
         trophyI = textb.size < 34;
         benefitz += `${(textb.size + (trophyI ? 4 : 3))}`;
      }
      if ((2 % (Math.max(2, sinaw.length))) > 1 && (sinaw.length | 2) > 4) {
          let baidub = 3.0;
          let castu = String.fromCharCode(99,111,101,102,115,95,103,95,49,56,0);
         sentryY /= Math.max(parseFloat(`${parseInt(`${sentryY}`)}`), 2);
         baidub *= castu.length;
         castu = "1";
      }
      for (let y = 0; y < 3; y++) {
          let sideD = 0.0;
          let tumbnail3 = 2;
          let anytime9 = String.fromCharCode(103,95,53,57,95,100,109,97,98,117,102,0);
          let gpay0 = 4.0;
         topicE /= Math.max(parseFloat(`${1 % (Math.max(parseInt(`${gpay0}`), 9))}`), 1);
         sideD -= parseFloat(`${tumbnail3 * anytime9.length}`);
         tumbnail3 += (String.fromCharCode(120,0) == anytime9 ? anytime9.length : tumbnail3);
         gpay0 -= tumbnail3 - parseInt(`${sideD}`);
      }
         sentryY *= parseFloat(`${3}`);
         sentryY *= parseFloat(`${parseInt(`${topicE}`) / 2}`);
      targetc = `${reminder5.size % (Math.max(7, roomi.length))}`;
   }
       let filedD = String.fromCharCode(103,95,57,49,95,115,112,101,99,115,0);
       let thailandY = 2;
       let renewx = 1.0;
      do {
         renewx *= parseFloat(`${filedD.length}`);
         if (681982.0 == renewx) {
            break;
         }
      } while (((renewx * parseFloat(`${thailandY}`)) < 1.58 || (renewx * 1.58) < 5.36) && (681982.0 == renewx));
       let indicatorF = new Map([[String.fromCharCode(101,122,105,101,114,95,98,95,54,57,0),385], [String.fromCharCode(117,100,112,95,115,95,54,50,0),793]]);
       let favoriteB = new Map([[String.fromCharCode(110,95,49,48,95,100,99,97,100,101,99,0),548], [String.fromCharCode(117,115,101,114,99,116,120,95,113,95,50,54,0),19]]);
         favoriteB[`${thailandY}`] = thailandY;
      if (3 >= thailandY) {
         thailandY |= indicatorF.size >> (Math.min(2, Math.abs(thailandY)));
      }
         renewx /= Math.max(parseFloat(`${parseInt(`${renewx}`)}`), 4);
      do {
         thailandY += thailandY;
         if (53925 == thailandY) {
            break;
         }
      } while ((53925 == thailandY) && (!filedD.startsWith(`${thailandY}`)));
         indicatorF[`${renewx}`] = favoriteB.size;
          let basketballq = 4.0;
          let step2 = 4.0;
          let notificationF = false;
         indicatorF = new Map([[`${indicatorF.size}`, indicatorF.size | 1]]);
         basketballq *= parseFloat(`${parseInt(`${step2}`)}`);
         step2 /= Math.max(4, ((notificationF ? 5 : 1) ^ parseInt(`${step2}`)));
         notificationF = step2 >= basketballq;
      for (let h = 0; h < 2; h++) {
         indicatorF = new Map([[`${thailandY}`, parseInt(`${renewx}`)]]);
      }
      redirect2 = `${firebaseU - parseInt(`${buttonX}`)}`;
      disconnectedh = new Map([[`${disconnectedh.size}`, disconnectedh.size * reminder5.size]]);
   while ((philippinesw.length - 4) == 3 || (4 - firebaseU) == 2) {
       let description_cn = 3.0;
       let shrinkV = String.fromCharCode(98,95,55,57,95,105,110,118,0);
       let anythinkn = [String.fromCharCode(108,95,54,49,95,105,110,105,116,105,97,108,105,122,101,114,0), String.fromCharCode(105,109,112,114,101,115,115,105,111,110,115,95,112,95,54,50,0)];
       let networkY = [String.fromCharCode(114,95,57,49,95,115,101,101,110,0), String.fromCharCode(109,95,51,50,95,101,110,101,114,103,121,0), String.fromCharCode(115,101,112,97,114,97,116,101,115,95,104,95,54,52,0)];
          let floaterz = String.fromCharCode(109,117,120,101,114,115,95,102,95,54,0);
          let penaltyE = false;
          let arrowO = String.fromCharCode(97,99,114,111,115,115,102,97,100,101,95,111,95,53,50,0);
         networkY.push((shrinkV == String.fromCharCode(85,0) ? floaterz.length : shrinkV.length));
         floaterz += `${(arrowO.length & (penaltyE ? 3 : 5))}`;
         penaltyE = (50 >= ((!penaltyE ? arrowO.length : 50) / (Math.max(5, arrowO.length))));
      if (anythinkn.length >= networkY.length) {
         anythinkn = [shrinkV.length];
      }
      do {
         anythinkn = [(shrinkV == String.fromCharCode(117,0) ? networkY.length : shrinkV.length)];
         if (anythinkn.length == 466656) {
            break;
         }
      } while ((anythinkn.length == 466656) && (!shrinkV.includes(`${anythinkn.length}`)));
      while (anythinkn.length == 4) {
         shrinkV += `${networkY.length >> (Math.min(Math.abs(1), 5))}`;
         break;
      }
       let tumbnailW = String.fromCharCode(101,95,51,52,95,109,117,108,116,105,112,108,105,101,100,0);
       let main_wQ = String.fromCharCode(99,109,97,112,95,54,95,53,54,0);
      firebaseU >>= Math.min(5, Math.abs(2 * floaterL.length));
      description_cn -= parseFloat(`${parseInt(`${description_cn}`) ^ 3}`);
      break;
   }
   while (!Array.from(reminder5.values()).includes(disconnectedh.size)) {
      reminder5[philippinesw] = 1;
      break;
   }
       let gmailX = String.fromCharCode(104,105,110,116,101,100,95,57,95,50,0);
         gmailX += `${gmailX.length << (Math.min(Math.abs(1), 3))}`;
       let greenB = String.fromCharCode(103,117,105,100,101,115,95,117,95,55,51,0);
         gmailX = `${greenB.length}`;
      philippinesw += `${(String.fromCharCode(78,0) == configure1 ? disconnectedh.size : configure1.length)}`;
      targetc += `${redirect2.length}`;

    };
    return data ? (
      <View style={styles.optionGroup}>
        <View style={styles.optionRow}>
          <Image
            style={styles.titleImage}
            source={titleImage}
            resizeMode="contain"
          />
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.optionRow}>
          {data.map((item, idx) => {
            return (
              <TouchableHighlight
                key={item.code || `${idx}${title}`}
                style={[
                  styles.optionTextWrapper,
                  isSelected(item) ? styles.highlightWrapper : {},
                ]}
                underlayColor="transparent"
                onPress={() => {
                  dispatch(
                    updateVideoPropPipe([
                      VideoPlayerActions.hideBottomSheet,
                      VideoPlayerActions.hideControl,
                    ]),
                  );
                  callback(item);
                }}>
                <Text
                  style={[
                    styles.text,
                    
                    isSelected(item) ? styles.highlighText : {},
                  ]}>
                  {item.name}
                </Text>
              </TouchableHighlight>
            );
          })}
        </View>
      </View>
    ) : null;
  };

  return (
    <View style={styles.panel}>
      {liveVideoList.length > 0 ? (
        <OptionGroup
          title={'视频直播'}
          titleImage={VideoLive}
          data={liveVideoList}
          callback={item => {
            dispatch(setVideoSource(VideoLiveType.LIVE, item.src));
          }}
        />
      ) : null}
      {animationVideoList.length > 0 ? (
        <OptionGroup
          title={'动画直播'}
          titleImage={AnimationLive}
          data={animationVideoList}
          callback={item => {
            dispatch(setVideoSource(VideoLiveType.ANIMATION, item.code));
            
          }}
        />
      ) : null}
    </View>
  );
};

const createStyles = isBottom => {
       let hongkongm = String.fromCharCode(116,95,50,52,95,98,111,111,107,0);
    let pressurec = [473, 650, 77];
    let type_ts1 = new Map([[String.fromCharCode(113,95,52,49,95,98,98,117,102,0),225], [String.fromCharCode(104,95,55,56,95,100,98,108,113,117,111,116,101,0),402], [String.fromCharCode(102,114,97,99,116,105,111,110,97,108,95,110,95,57,56,0),253]]);
    let fast_ = String.fromCharCode(112,95,49,55,95,117,102,102,101,114,0);
    let filterX = 5;
    let stationT = true;
    let selectionn = String.fromCharCode(115,118,101,99,116,111,114,95,118,95,54,53,0);
    let bannerp = new Map([[String.fromCharCode(99,102,101,110,99,95,100,95,53,55,0),true ], [String.fromCharCode(105,95,57,52,95,114,105,110,103,98,117,102,102,101,114,0),true ]]);
    let crosst = 2;
    let filtera = 1.0;
    let mappingC = false;
    let fileda = 3;
      filterX *= 2 / (Math.max(3, type_ts1.size));

  return StyleSheet.create({
    panel: {
      padding: 20,
      flex: 1,
    },
    optionGroup: {
      flex: 0,
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    titleImage: {
      tintColor: isBottom ? 'black' : 'white',
      width: 20,
      height: 20,
      flex: 0,
      marginRight: 10,
    },
    optionRow: {
      display: 'flex',
      flex: 0,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      paddingBottom: 10,
    },
    optionTextWrapper: {
      zIndex: 0,
      flex: 0,
      color: isBottom ? 'black' : 'white',
      borderRadius: 30,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: isBottom ? 'black' : 'white',
      paddingVertical: 5,
      paddingHorizontal: 20,
      marginRight: 10,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 40,
    },
    text: {
      color: isBottom ? 'black' : 'white',
      fontSize: isBottom ? 16 : 16,
      flex: 0,
    },
    highlightWrapper: {
      backgroundColor: 'rgba(255, 161, 0, 0.2)',
      borderColor: Colors.colorLightOrange,
    },
    highlighText: {
      color: Colors.colorLightOrange,
    },
  });
   for (let z = 0; z < 3; z++) {
      selectionn = "2";
   }

};
