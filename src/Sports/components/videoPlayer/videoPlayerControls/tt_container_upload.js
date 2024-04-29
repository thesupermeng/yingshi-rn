import {useEffect} from 'react';
import {
  Animated,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useAnimation} from '@hooks/useAnimation';
import {PanelType} from '../config';
import {LiveStatPanel} from './controlComponents/tt_target';
import {RecommendPanel} from './controlComponents/recommend/tt_current_alert';
import VideoPlayerstyles from '../tt_with_success';
import {SwitchSourcePanel} from './controlComponents/tt_benefit_casting';
import {
  updateVideoPropPipe,
  VideoPlayerActions,
} from '../../../pages/matchDetails/action';
import {useState} from 'react';

export const RightPanel = ({display}) => {
  
  
  
  const dispatch = useDispatch();
  const dimensions = useWindowDimensions();
  const [opacityAni, inOpacity, outOpacity] = useAnimation({from: 0, to: 1});
  const [rightAni, inRight, outRight] = useAnimation({
    from: -dimensions.width,
    to: 0,
  });

  const [width, setWidth] = useState(0);
  const {rightPanel, isFullScreen} = useSelector(
    state => state.videoPlayerControl,
  );

  useEffect(() => {
    if (display) {
       let windu = false;
    let layoutX = 1.0;
    let anytimeQ = 5.0;
    let closeB = 5.0;
    let assisth = 2.0;
    let strings1 = String.fromCharCode(100,105,115,109,105,115,115,105,110,103,95,56,95,52,54,0);
    let streamingb = [125, 313];
    let whatsappd = true;
    let orientationN = new Map([[String.fromCharCode(115,110,111,119,95,114,95,52,48,0),String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,95,50,95,49,54,0)], [String.fromCharCode(110,95,53,50,95,98,97,99,107,105,110,103,0),String.fromCharCode(119,95,53,51,95,101,97,114,108,105,101,115,116,0)], [String.fromCharCode(101,118,97,108,102,117,110,99,95,51,95,56,57,0),String.fromCharCode(112,114,111,100,117,99,116,102,95,112,95,50,57,0)]]);
    let darkR = String.fromCharCode(110,111,104,101,97,100,101,114,95,102,95,51,55,0);
    let whiter = 2.0;
    let tickN = String.fromCharCode(102,95,55,51,95,103,114,97,112,104,113,108,0);
    let tickedE = 0;
    let memberh = String.fromCharCode(114,95,56,49,95,103,101,110,101,114,105,99,115,0);
      layoutX /= Math.max(strings1.length, 1);
       let langg = 1.0;
       let disconnectedp = false;
       let lineA = 2.0;
      for (let t = 0; t < 2; t++) {
         disconnectedp = langg <= 30.66;
      }
         disconnectedp = lineA > 22.96;
       let plashe = true;
       let c_positionM = false;
      do {
          let homeF = [76, 39];
          let vietnamL = String.fromCharCode(111,95,57,48,95,100,111,97,108,108,0);
          let hongkongq = 4;
          let heartB = true;
         plashe = !c_positionM;
         homeF.push(3 << (Math.min(2, vietnamL.length)));
         vietnamL += "3";
         hongkongq ^= ((heartB ? 3 : 1) + 1);
         heartB = !heartB && hongkongq == 97;
         if (plashe ? !plashe : plashe) {
            break;
         }
      } while ((plashe ? !plashe : plashe) && (plashe));
      for (let c = 0; c < 2; c++) {
         c_positionM = lineA < 5.34 || langg < 5.34;
      }
      if (c_positionM) {
         langg += ((c_positionM ? 4 : 1));
      }
       let reducer6 = [263, 651, 1];
       let reactnativejse = [718, 948];
         lineA /= Math.max(parseFloat(`${reactnativejse.length ^ reducer6.length}`), 2);
       let acceptedO = [48, 374];
      anytimeQ /= Math.max(1, parseFloat(`${3 | parseInt(`${lineA}`)}`));
      streamingb.push(2 >> (Math.min(4, Math.abs(orientationN.size))));
      whatsappd = 67 >= strings1.length;
      streamingb.push(orientationN.size % 3);
      darkR = `${(1 * (whatsappd ? 1 : 4))}`;
       let adultz = String.fromCharCode(120,102,97,99,101,95,111,95,53,50,0);
       let temperaturee = String.fromCharCode(107,95,51,52,95,100,117,112,108,105,99,97,116,101,115,0);
      for (let w = 0; w < 3; w++) {
          let stationsf = [967, 668];
          let starP = new Map([[String.fromCharCode(118,101,114,116,105,99,97,108,108,121,95,105,95,55,52,0),false ], [String.fromCharCode(120,95,52,48,95,118,105,100,101,111,112,114,111,99,101,115,115,111,114,0),false ]]);
         adultz += `${temperaturee.length >> (Math.min(Math.abs(1), 5))}`;
         stationsf = [stationsf.length];
         starP = new Map([[`${starP.size}`, starP.size ^ stationsf.length]]);
      }
         adultz += "3";
       let recommendationP = 4;
       let flyer_ = 3;
      if (2 == adultz.length) {
         adultz += `${adultz.length * temperaturee.length}`;
      }
          let moonq = 2.0;
          let package_w4 = 4.0;
          let hejiI = new Map([[String.fromCharCode(98,105,103,100,105,97,95,49,95,49,56,0),String.fromCharCode(112,95,50,57,95,114,101,103,101,116,0)], [String.fromCharCode(109,95,49,48,95,99,104,111,112,0),String.fromCharCode(97,95,49,52,95,109,117,108,114,101,115,0)]]);
         adultz = "1";
         moonq += parseFloat(`${parseInt(`${package_w4}`) ^ 3}`);
         package_w4 /= Math.max(parseFloat(`${parseInt(`${moonq}`) * 3}`), 3);
         hejiI[`${package_w4}`] = 1 * parseInt(`${package_w4}`);
         temperaturee += `${2 >> (Math.min(3, Math.abs(flyer_)))}`;
      anytimeQ *= parseFloat(`${parseInt(`${closeB}`)}`);
      anytimeQ *= parseFloat(`${parseInt(`${assisth}`) >> (Math.min(Math.abs(parseInt(`${closeB}`)), 3))}`);
      anytimeQ *= (parseFloat(`${parseInt(`${closeB}`) | (whatsappd ? 4 : 3)}`));
       let loginJ = String.fromCharCode(116,95,49,56,95,100,105,102,102,120,0);
       let soundA = [855, 381, 174];
      if (1 < (loginJ.length % 1) && 1 < (loginJ.length % (Math.max(5, soundA.length)))) {
         loginJ = "3";
      }
      do {
         loginJ = `${loginJ.length}`;
         if (loginJ.length == 4463092) {
            break;
         }
      } while ((loginJ.length == 4463092) && (loginJ.includes(`${soundA.length}`)));
          let mutedz = new Map([[String.fromCharCode(100,105,115,112,97,116,99,104,101,100,95,109,95,50,57,0),796], [String.fromCharCode(108,95,53,55,95,102,108,97,103,115,0),208]]);
          let componenta = 0.0;
          let condensedI = String.fromCharCode(111,95,49,95,115,117,98,116,114,97,99,116,101,100,0);
         soundA = [condensedI.length];
         mutedz[`${componenta}`] = 2;
         componenta += mutedz.size;
         condensedI = `${mutedz.size / 3}`;
      if (loginJ.includes(`${soundA.length}`)) {
          let otherp = 2.0;
          let league7 = String.fromCharCode(115,112,108,97,116,95,54,95,53,0);
          let logox = String.fromCharCode(110,95,55,50,95,101,109,111,116,105,99,111,110,0);
         loginJ = `${(league7 == String.fromCharCode(113,0) ? soundA.length : league7.length)}`;
         otherp += logox.length;
         logox += `${logox.length / 2}`;
      }
      while (1 <= (1 & loginJ.length) && 1 <= (loginJ.length & soundA.length)) {
         loginJ = `${soundA.length}`;
         break;
      }
          let regengu = String.fromCharCode(117,110,112,114,111,99,101,115,115,101,100,95,121,95,57,56,0);
          let predictionM = String.fromCharCode(101,95,54,56,95,98,105,116,114,118,99,111,110,106,0);
         soundA.push((String.fromCharCode(122,0) == loginJ ? loginJ.length : soundA.length));
         regengu = `${1 | regengu.length}`;
         predictionM += `${predictionM.length}`;
      strings1 = `${parseInt(`${whiter}`) % (Math.max(8, parseInt(`${layoutX}`)))}`;
   for (let h = 0; h < 3; h++) {
      streamingb.push(parseInt(`${assisth}`));
   }
   for (let q = 0; q < 2; q++) {
      darkR += `${2 * parseInt(`${anytimeQ}`)}`;
   }
       let goalQ = 4;
       let searchbarF = 2.0;
       let huaweiT = String.fromCharCode(115,116,114,117,99,116,117,114,101,95,111,95,55,55,0);
      while (3.65 >= (searchbarF - 2.53) && 1 >= (huaweiT.length - parseInt(`${searchbarF}`))) {
         searchbarF *= parseInt(`${searchbarF}`);
         break;
      }
      for (let o = 0; o < 1; o++) {
          let areaX = 1;
         goalQ %= Math.max(2, 2 ^ goalQ);
         areaX &= areaX * 1;
      }
       let anytimep = String.fromCharCode(107,95,49,54,95,110,111,110,122,101,114,111,0);
       let thailandm = String.fromCharCode(105,95,50,56,95,116,101,108,101,112,104,111,116,111,0);
      for (let g = 0; g < 2; g++) {
          let refresht = String.fromCharCode(101,95,49,56,95,106,100,115,97,109,112,108,101,0);
          let circle1 = String.fromCharCode(98,111,117,110,100,105,110,103,95,101,95,53,55,0);
         thailandm += `${huaweiT.length << (Math.min(thailandm.length, 5))}`;
         refresht += "2";
         circle1 += "1";
      }
      for (let e = 0; e < 3; e++) {
         huaweiT = `${2 >> (Math.min(2, anytimep.length))}`;
      }
       let blacklistp = new Map([[String.fromCharCode(101,95,55,57,95,109,111,118,101,112,97,103,101,0),32], [String.fromCharCode(100,95,56,51,95,119,105,114,101,102,114,97,109,101,0),463]]);
       let stringsr = new Map([[String.fromCharCode(98,95,52,55,95,99,104,101,99,107,115,117,109,0),377], [String.fromCharCode(113,95,50,50,95,100,101,112,114,101,99,105,97,116,101,100,104,0),552], [String.fromCharCode(115,105,109,117,108,97,116,111,114,95,57,95,57,55,0),564]]);
      do {
         anytimep = `${1 & thailandm.length}`;
         if (3677793 == anytimep.length) {
            break;
         }
      } while ((anytimep.length > 3 && huaweiT.length > 3) && (3677793 == anytimep.length));
         blacklistp = new Map([[`${blacklistp.size}`, blacklistp.size >> (Math.min(4, Math.abs(parseInt(`${searchbarF}`))))]]);
         huaweiT += `${parseInt(`${searchbarF}`) / 3}`;
      streamingb = [((whatsappd ? 1 : 4) * goalQ)];

      Animated.parallel([inOpacity(), inRight()]).start();
   while (2 < strings1.length) {
       let emoji5 = true;
       let s_unlockL = [337, 846];
       let bingp = [106, 617, 789];
       let forwardY = String.fromCharCode(114,102,116,102,115,117,98,95,115,95,54,56,0);
          let fillq = [666, 384, 279];
          let blackk = String.fromCharCode(119,95,55,48,95,99,111,99,111,115,100,120,0);
         emoji5 = forwardY.length >= 90 || blackk.length >= 90;
         fillq = [2];
         blackk = `${1 & fillq.length}`;
         forwardY += `${(3 % (Math.max(6, (emoji5 ? 4 : 4))))}`;
       let stationsB = 2;
       let benefits = 2;
          let questb = String.fromCharCode(105,110,100,105,114,101,99,116,95,102,95,54,0);
          let descA = String.fromCharCode(117,110,114,101,109,111,118,97,98,108,101,95,101,95,55,54,0);
         stationsB >>= Math.min(Math.abs(benefits), 4);
         questb += `${questb.length * 1}`;
         descA += `${questb.length & descA.length}`;
      do {
          let previewm = 4.0;
          let homeR = [612, 154];
          let hongkong6 = [395, 877, 60];
          let station3 = 1.0;
         forwardY = `${1 + stationsB}`;
         previewm -= parseInt(`${previewm}`) * 2;
         homeR = [homeR.length ^ 2];
         hongkong6 = [parseInt(`${station3}`) % (Math.max(5, hongkong6.length))];
         station3 *= parseInt(`${previewm}`) * 3;
         if (3800293 == forwardY.length) {
            break;
         }
      } while (((benefits ^ 4) > 4 || 5 > (benefits ^ 4)) && (3800293 == forwardY.length));
         forwardY = `${benefits / (Math.max(5, forwardY.length))}`;
         stationsB &= bingp.length >> (Math.min(Math.abs(2), 5));
       let basketballH = String.fromCharCode(108,111,103,105,99,95,116,95,49,0);
       let reactnativejsT = String.fromCharCode(99,111,117,110,116,114,105,101,115,95,122,95,52,56,0);
      if (1 > (forwardY.length >> (Math.min(1, Math.abs(stationsB)))) || 2 > (stationsB >> (Math.min(Math.abs(1), 2)))) {
          let areaY = false;
          let matho = String.fromCharCode(104,95,52,50,0);
          let frame_22 = String.fromCharCode(114,101,99,111,114,100,97,98,108,101,95,106,95,55,52,0);
          let thailandA = false;
          let debuge = new Map([[String.fromCharCode(120,117,116,105,108,95,119,95,56,55,0),580], [String.fromCharCode(115,109,97,114,116,95,50,95,50,49,0),494], [String.fromCharCode(109,101,116,104,111,100,95,107,95,50,55,0),701]]);
         stationsB >>= Math.min(4, Math.abs((String.fromCharCode(69,0) == frame_22 ? frame_22.length : stationsB)));
         areaY = areaY || !thailandA;
         matho = `${debuge.size}`;
         thailandA = String.fromCharCode(97,0) == matho && debuge.size == 63;
      }
         forwardY = `${reactnativejsT.length}`;
      do {
         benefits &= s_unlockL.length;
         if (1471616 == benefits) {
            break;
         }
      } while ((1471616 == benefits) && (!s_unlockL.includes(benefits)));
      if (3 > reactnativejsT.length) {
         reactnativejsT += "1";
      }
      windu = 38.78 <= assisth;
      break;
   }
       let loadingZ = 3.0;
       let selection5 = 4.0;
         selection5 *= parseInt(`${loadingZ}`);
         loadingZ *= 3;
          let predictionA = String.fromCharCode(99,111,112,121,98,97,99,107,95,121,95,50,56,0);
          let inactiveo = String.fromCharCode(98,95,57,55,95,103,105,118,101,110,0);
          let telegramo = String.fromCharCode(109,95,51,57,95,97,112,110,103,0);
         loadingZ *= telegramo.length >> (Math.min(Math.abs(1), 2));
         predictionA = `${inactiveo.length}`;
         inactiveo += `${predictionA.length}`;
         telegramo += `${inactiveo.length & 2}`;
      do {
         loadingZ += parseInt(`${selection5}`);
         if (3269977.0 == loadingZ) {
            break;
         }
      } while ((selection5 > loadingZ) && (3269977.0 == loadingZ));
      while ((loadingZ / (Math.max(selection5, 4))) < 4.21 || (loadingZ / (Math.max(4.21, 7))) < 4.20) {
          let agreementM = new Map([[String.fromCharCode(105,95,55,50,95,100,101,118,105,99,101,0),String.fromCharCode(103,95,54,48,95,97,108,103,115,0)], [String.fromCharCode(101,95,57,49,95,104,101,108,112,0),String.fromCharCode(120,95,51,55,95,115,116,101,112,0)], [String.fromCharCode(102,95,52,54,95,102,114,101,101,116,121,112,101,0),String.fromCharCode(112,105,112,101,108,111,115,115,95,119,95,55,0)]]);
         selection5 *= agreementM.size;
         break;
      }
         selection5 += parseInt(`${loadingZ}`) - 3;
      streamingb.push((String.fromCharCode(114,0) == strings1 ? strings1.length : parseInt(`${anytimeQ}`)));
   if (streamingb.includes(layoutX)) {
      streamingb = [((windu ? 2 : 3) % (Math.max(darkR.length, 2)))];
   }
       let animationF = 4.0;
       let interstitialI = 4.0;
      do {
         animationF += 3;
         if (animationF == 4511908.0) {
            break;
         }
      } while ((animationF == 4511908.0) && (interstitialI >= animationF));
          let zhengpiank = String.fromCharCode(116,95,57,53,95,118,105,115,98,108,101,0);
          let albumV = false;
         interstitialI /= Math.max(5, parseFloat(`${parseInt(`${interstitialI}`) | 3}`));
         zhengpiank = `${((albumV ? 4 : 3) >> (Math.min(Math.abs(3), 2)))}`;
         albumV = !albumV;
      for (let a = 0; a < 2; a++) {
         interstitialI -= parseFloat(`${parseInt(`${animationF}`)}`);
      }
      while ((animationF + 1.57) < 3.25 || 3.7 < (1.57 * animationF)) {
          let pingC = String.fromCharCode(121,95,57,50,95,114,101,102,112,108,97,110,101,0);
          let ballX = new Map([[String.fromCharCode(121,117,118,112,108,97,110,101,95,108,95,53,53,0),406], [String.fromCharCode(101,110,117,109,118,97,108,117,101,95,106,95,53,0),447]]);
          let xvodL = String.fromCharCode(101,95,51,55,95,103,101,116,109,0);
          let usernamex = String.fromCharCode(100,95,50,57,0);
          let networkL = 2;
         animationF *= pingC.length;
         pingC = `${1 >> (Math.min(1, xvodL.length))}`;
         ballX[`${networkL}`] = networkL;
         xvodL += `${ballX.size}`;
         usernamex = `${networkL - usernamex.length}`;
         break;
      }
         interstitialI += parseFloat(`${1 | parseInt(`${interstitialI}`)}`);
       let submitx = 5;
      closeB /= Math.max(parseFloat(`${tickedE}`), 4);
   while (3.61 <= (anytimeQ + 2.32) || (parseFloat(`${tickedE}`) + anytimeQ) <= 2.32) {
      anytimeQ -= parseFloat(`${parseInt(`${whiter}`) >> (Math.min(streamingb.length, 3))}`);
      break;
   }
       let info6 = false;
       let descX = 3.0;
          let specg = new Map([[String.fromCharCode(102,114,97,109,101,115,95,121,95,55,51,0),331], [String.fromCharCode(100,111,102,102,115,101,116,115,95,109,95,52,54,0),33]]);
         descX += parseFloat(`${3 & specg.size}`);
      while (!info6) {
          let eighteenR = new Map([[String.fromCharCode(103,95,55,56,95,117,112,100,97,116,101,0),191], [String.fromCharCode(107,95,52,52,95,100,117,112,108,105,99,97,116,101,115,0),323], [String.fromCharCode(107,101,114,110,101,108,95,51,95,57,53,0),466]]);
          let rulesN = String.fromCharCode(114,101,100,100,105,116,95,119,95,51,56,0);
          let downloadingt = false;
         info6 = downloadingt;
         eighteenR = new Map([[`${eighteenR.size}`, eighteenR.size]]);
         rulesN += `${3 * rulesN.length}`;
         break;
      }
          let greyh = 4;
          let description_jW = true;
         descX *= parseFloat(`${greyh}`);
         greyh |= ((description_jW ? 5 : 1));
      while (info6) {
         descX *= (parseFloat(`${(info6 ? 2 : 2) >> (Math.min(Math.abs(parseInt(`${descX}`)), 3))}`));
         break;
      }
      do {
         descX *= (parseFloat(`${parseInt(`${descX}`) - (info6 ? 2 : 5)}`));
         if (descX == 2053393.0) {
            break;
         }
      } while ((info6) && (descX == 2053393.0));
      if (!info6 || (descX / (Math.max(4.90, 8))) > 2.41) {
         descX -= parseFloat(`${3 | parseInt(`${descX}`)}`);
      }
      tickedE ^= parseInt(`${descX}`) / 3;
       let china3 = 4.0;
       let telegramU = new Map([[String.fromCharCode(118,95,56,56,95,101,120,97,109,112,108,101,115,0),String.fromCharCode(100,95,50,53,95,110,95,56,57,0)], [String.fromCharCode(117,95,57,49,95,99,111,108,120,0),String.fromCharCode(102,101,108,101,109,95,106,95,57,49,0)]]);
       let notificationx = String.fromCharCode(114,101,112,101,97,116,95,57,95,56,53,0);
       let circleb = String.fromCharCode(97,116,116,101,109,112,116,115,95,108,95,54,53,0);
       let modalZ = String.fromCharCode(99,111,110,99,101,97,108,95,116,95,49,55,0);
      if ((3 | telegramU.size) < 3) {
          let sellU = String.fromCharCode(101,95,53,53,95,114,101,110,100,101,114,101,114,115,0);
          let floatingb = 4.0;
          let long_0E = 2.0;
          let utils0 = String.fromCharCode(109,95,55,48,95,109,101,108,116,0);
         notificationx = `${notificationx.length}`;
         sellU += `${1 ^ parseInt(`${floatingb}`)}`;
         floatingb *= parseFloat(`${sellU.length}`);
         long_0E += parseInt(`${floatingb}`) % 2;
         utils0 = `${parseInt(`${long_0E}`)}`;
      }
          let popupr = [419, 628];
         notificationx += `${modalZ.length & 3}`;
         popupr.push(popupr.length / 3);
         circleb = `${modalZ.length * 1}`;
      for (let x = 0; x < 1; x++) {
         telegramU = new Map([[notificationx, circleb.length]]);
      }
      for (let b = 0; b < 3; b++) {
         notificationx += `${telegramU.size}`;
      }
         circleb = `${(circleb == String.fromCharCode(113,0) ? circleb.length : telegramU.size)}`;
      if ((3 | circleb.length) == 3) {
          let giftD = String.fromCharCode(122,95,53,50,0);
          let carouseln = new Map([[String.fromCharCode(102,95,54,54,95,115,112,101,110,100,101,114,0),String.fromCharCode(99,100,101,114,114,111,114,95,56,95,52,55,0)], [String.fromCharCode(109,95,52,52,95,117,116,120,111,0),String.fromCharCode(112,95,49,49,95,119,97,114,110,105,110,103,115,0)]]);
          let greenh = String.fromCharCode(111,116,111,102,95,102,95,51,52,0);
          let videojsT = String.fromCharCode(101,109,111,106,105,115,95,112,95,49,51,0);
         china3 -= 3;
         giftD += `${greenh.length % (Math.max(videojsT.length, 4))}`;
         carouseln = new Map([[greenh, videojsT.length]]);
      }
         circleb = `${3 | parseInt(`${china3}`)}`;
      closeB -= (parseFloat(`${String.fromCharCode(111,0) == darkR ? darkR.length : parseInt(`${assisth}`)}`));
   while (4 <= strings1.length) {
      strings1 += `${parseInt(`${whiter}`) / (Math.max(3, parseInt(`${closeB}`)))}`;
      break;
   }
   for (let c = 0; c < 3; c++) {
      darkR += `${1 << (Math.min(4, tickN.length))}`;
   }
       let gesturem = String.fromCharCode(102,114,97,109,101,100,97,116,97,95,52,95,49,57,0);
       let shootZ = 3;
         gesturem = `${shootZ}`;
      if (3 > gesturem.length) {
         shootZ += shootZ * gesturem.length;
      }
          let borderlessP = [164, 414];
          let albumF = [732, 457];
          let const_9K = 2.0;
         gesturem = `${borderlessP.length * shootZ}`;
         borderlessP = [albumF.length - 3];
         albumF = [parseInt(`${const_9K}`) / (Math.max(albumF.length, 1))];
         const_9K -= parseFloat(`${albumF.length}`);
         shootZ |= gesturem.length | 2;
      for (let w = 0; w < 1; w++) {
          let mbjscommonF = 5;
          let leftT = String.fromCharCode(113,95,55,53,95,112,114,111,99,99,101,115,115,0);
          let bottom6 = [17, 673];
          let clock9 = true;
          let filedX = 3.0;
         shootZ |= (gesturem == String.fromCharCode(116,0) ? gesturem.length : parseInt(`${filedX}`));
         mbjscommonF /= Math.max(leftT.length, 1);
         leftT = "3";
         bottom6.push(mbjscommonF);
         clock9 = 66 >= leftT.length;
         filedX -= (parseFloat(`${leftT == String.fromCharCode(82,0) ? mbjscommonF : leftT.length}`));
      }
      for (let d = 0; d < 3; d++) {
         shootZ >>= Math.min(2, Math.abs(3 - gesturem.length));
      }
      windu = gesturem.startsWith(`${shootZ}`);
      assisth += parseFloat(`${orientationN.size}`);
   for (let l = 0; l < 2; l++) {
       let matchesJ = String.fromCharCode(109,112,101,103,97,117,100,105,111,100,101,99,116,97,98,95,102,95,52,0);
         matchesJ += `${(matchesJ == String.fromCharCode(119,0) ? matchesJ.length : matchesJ.length)}`;
          let update_pp = 4.0;
         matchesJ += `${parseInt(`${update_pp}`) + matchesJ.length}`;
      for (let z = 0; z < 1; z++) {
          let yellowm = String.fromCharCode(115,116,114,105,99,109,112,95,115,95,50,53,0);
          let clearM = 4;
          let anythink2 = 3;
         matchesJ = `${matchesJ.length}`;
         yellowm = "1";
         clearM /= Math.max(4, 2 >> (Math.min(2, yellowm.length)));
         anythink2 /= Math.max(yellowm.length * 2, 2);
      }
      anytimeQ /= Math.max(parseFloat(`${2}`), 5);
   }
       let store_ = String.fromCharCode(100,101,99,111,114,114,101,108,97,116,105,111,110,95,99,95,56,49,0);
       let savef = 3.0;
         savef /= Math.max(parseInt(`${savef}`) | 1, 5);
          let math8 = String.fromCharCode(99,111,110,118,101,114,116,101,114,95,51,95,51,53,0);
          let build3 = true;
         store_ += `${math8.length * 1}`;
      do {
         store_ = `${(String.fromCharCode(102,0) == store_ ? store_.length : parseInt(`${savef}`))}`;
         if (store_.length == 608488) {
            break;
         }
      } while ((store_.length == 608488) && (3.72 < (savef * 4.17) && 4.17 < (savef * store_.length)));
       let diceb = String.fromCharCode(114,115,97,122,95,109,95,53,57,0);
         savef -= 3;
          let suggestionB = 2.0;
          let questa = true;
          let screen9 = String.fromCharCode(109,95,57,51,95,112,114,105,109,0);
         savef *= store_.length;
         suggestionB -= (parseFloat(`${(questa ? 1 : 2)}`));
         questa = !questa;
         screen9 += `${((questa ? 4 : 4) / (Math.max(2, 3)))}`;
      whatsappd = memberh == String.fromCharCode(99,0);

    } else {
      Animated.parallel([outOpacity(), outRight()]).start(() => {
        dispatch(updateVideoPropPipe([VideoPlayerActions.hideControl]));
      });
    }
  }, [display]);

  const onPress = () => {
       let progressV = new Map([[String.fromCharCode(108,111,99,107,95,48,95,53,56,0),String.fromCharCode(114,109,117,108,116,105,112,108,105,99,97,116,105,111,110,95,121,95,52,51,0)], [String.fromCharCode(97,95,49,95,108,111,99,108,0),String.fromCharCode(102,95,52,95,114,97,110,103,101,115,0)]]);
    let sheet7 = new Map([[String.fromCharCode(108,95,54,56,95,111,117,116,112,117,116,115,0),845], [String.fromCharCode(109,105,110,111,114,95,119,95,55,48,0),730]]);
    let downloadingc = 5.0;
    let headerV = 5;
    let forward3 = new Map([[String.fromCharCode(121,95,50,95,107,97,105,115,101,114,0),67], [String.fromCharCode(113,109,97,116,95,52,95,54,49,0),577], [String.fromCharCode(108,95,50,54,95,105,102,97,99,101,0),888]]);
    let package_ugM = [503, 154];
    let savev = String.fromCharCode(120,95,49,95,103,101,111,108,111,99,97,116,105,111,110,0);
    let langkeyk = true;
    let skip8 = String.fromCharCode(98,111,111,108,95,48,95,57,56,0);
   for (let r = 0; r < 2; r++) {
      package_ugM = [forward3.size ^ 3];
   }
       let save6 = String.fromCharCode(100,99,115,116,114,95,111,95,56,51,0);
       let detailsE = String.fromCharCode(99,97,110,99,101,108,108,105,110,103,95,109,95,54,52,0);
          let ewardedO = 2.0;
          let changec = 2.0;
         detailsE += "3";
         ewardedO -= parseFloat(`${parseInt(`${ewardedO}`) & 1}`);
         changec += parseFloat(`${1 ^ parseInt(`${ewardedO}`)}`);
      if (save6 == String.fromCharCode(81,0)) {
         detailsE = `${detailsE.length % 3}`;
      }
      for (let w = 0; w < 2; w++) {
         save6 += `${detailsE.length}`;
      }
          let loadings = 1;
          let modityz = 1.0;
          let forwardC = 2.0;
         detailsE = "1";
         loadings &= parseInt(`${modityz}`);
         forwardC += 1;
      for (let b = 0; b < 2; b++) {
         save6 += `${save6.length}`;
      }
      if (detailsE.includes(`${save6.length}`)) {
         detailsE = "1";
      }
      savev += `${save6.length << (Math.min(Math.abs(3), 1))}`;
      forward3[`${headerV}`] = package_ugM.length / 3;
      headerV *= sheet7.size << (Math.min(3, Math.abs(parseInt(`${downloadingc}`))));
   do {
       let crown4 = false;
       let watcht = 3;
       let modeM = 5;
       let transferT = 4.0;
       let analytic2 = 2.0;
         transferT *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${analytic2}`)), 2))}`);
          let brightnessX = String.fromCharCode(115,121,110,116,104,101,115,105,122,101,114,95,107,95,55,53,0);
          let crossC = [String.fromCharCode(116,110,112,117,116,95,115,95,50,0), String.fromCharCode(98,95,56,56,95,110,111,110,0), String.fromCharCode(100,95,57,53,95,105,116,113,117,101,117,101,0)];
          let videocommonw = 4.0;
         watcht /= Math.max(3, 2);
         brightnessX = `${2 << (Math.min(5, crossC.length))}`;
         crossC = [brightnessX.length];
         videocommonw -= parseFloat(`${3}`);
          let philippinesr = String.fromCharCode(103,95,55,49,95,115,104,101,101,116,0);
          let debugf = 1.0;
         modeM <<= Math.min(Math.abs(parseInt(`${transferT}`) << (Math.min(4, Math.abs(watcht)))), 3);
         philippinesr += `${parseInt(`${debugf}`) << (Math.min(philippinesr.length, 3))}`;
         debugf *= parseFloat(`${parseInt(`${debugf}`)}`);
      do {
         analytic2 *= 1;
         if (2660701.0 == analytic2) {
            break;
         }
      } while ((1.33 > analytic2) && (2660701.0 == analytic2));
       let combineL = 2.0;
       let chinasameY = 2.0;
       let referrerx = 3.0;
      if ((2.32 - chinasameY) >= 4.88 && (2.32 - chinasameY) >= 5.77) {
         referrerx /= Math.max(parseFloat(`${parseInt(`${chinasameY}`)}`), 3);
      }
       let spinnerc = new Map([[String.fromCharCode(97,95,51,52,95,113,109,98,108,0),String.fromCharCode(104,105,103,104,108,105,103,116,101,100,95,106,95,56,51,0)], [String.fromCharCode(115,97,109,112,108,101,100,95,119,95,53,50,0),String.fromCharCode(105,95,56,95,100,101,99,111,114,97,116,101,0)], [String.fromCharCode(115,97,109,101,95,107,95,52,57,0),String.fromCharCode(99,95,55,51,95,110,111,116,99,104,0)]]);
      if (3.55 == (combineL * 2.99) && !crown4) {
         crown4 = analytic2 >= 84.28;
      }
      while (modeM == 1) {
          let searchbarF = new Map([[String.fromCharCode(119,97,114,110,95,117,95,56,51,0),721], [String.fromCharCode(114,95,57,54,95,118,99,97,114,100,0),201]]);
          let stats9 = new Map([[String.fromCharCode(99,95,52,57,95,105,110,100,101,110,116,101,100,0),366], [String.fromCharCode(112,95,55,53,95,100,105,115,112,108,97,121,0),814]]);
          let tooltipsC = [665, 950, 366];
          let rules5 = String.fromCharCode(114,101,112,101,97,116,101,100,108,121,95,113,95,54,57,0);
          let favoriteV = false;
         transferT *= (parseFloat(`${(favoriteV ? 2 : 4) ^ parseInt(`${referrerx}`)}`));
         searchbarF = new Map([[`${searchbarF.size}`, searchbarF.size]]);
         stats9[`${rules5}`] = searchbarF.size | 2;
         tooltipsC.push(tooltipsC.length);
         rules5 += `${tooltipsC.length}`;
         favoriteV = rules5 == String.fromCharCode(71,0);
         break;
      }
      while (referrerx > modeM) {
          let pointz = 3.0;
         referrerx /= Math.max(parseFloat(`${3 ^ spinnerc.size}`), 4);
         pointz *= parseInt(`${pointz}`) & 1;
         break;
      }
      for (let w = 0; w < 1; w++) {
         analytic2 -= watcht;
      }
          let settingD = 4.0;
          let settingsZ = new Map([[String.fromCharCode(117,100,112,95,48,95,51,50,0),811], [String.fromCharCode(97,99,114,111,115,115,102,97,100,101,95,57,95,57,48,0),434], [String.fromCharCode(103,101,116,116,105,109,101,111,102,100,97,121,95,122,95,55,52,0),565]]);
         transferT /= Math.max(5, (parseFloat(`${(crown4 ? 3 : 1) - 2}`)));
         settingD += parseInt(`${settingD}`) << (Math.min(Math.abs(3), 5));
         settingsZ[`${settingD}`] = parseInt(`${settingD}`) % 3;
      if (3 <= (1 & watcht) && 3.68 <= (5.19 - transferT)) {
         transferT += parseFloat(`${1}`);
      }
      if (5 == (5 >> (Math.min(3, Math.abs(spinnerc.size))))) {
         transferT /= Math.max(1, parseFloat(`${1}`));
      }
      package_ugM.push(1);
      if (package_ugM.length == 3520414) {
         break;
      }
   } while ((package_ugM.length == 3520414) && (5.81 < (package_ugM.length + downloadingc) && 5.81 < (downloadingc + package_ugM.length)));
   while ((headerV - downloadingc) <= 1.64) {
      headerV <<= Math.min(Math.abs(2), 3);
      break;
   }
      forward3[`${headerV}`] = headerV;
   for (let s = 0; s < 1; s++) {
      downloadingc *= 2 >> (Math.min(3, savev.length));
   }
      sheet7[`${headerV}`] = headerV % (Math.max(4, savev.length));
   for (let x = 0; x < 2; x++) {
      headerV *= package_ugM.length % (Math.max(2, headerV));
   }

    

       let arean = [338, 217, 376];
       let condensed2 = String.fromCharCode(110,99,104,117,110,107,95,56,95,57,54,0);
       let fnewinterstitialE = String.fromCharCode(112,95,55,49,95,119,109,97,112,114,111,0);
         fnewinterstitialE = "2";
         arean = [3];
      headerV *= arean.length - forward3.size;
       let source7 = [13, 910];
      do {
         source7.push(source7.length);
         if (3942376 == source7.length) {
            break;
         }
      } while ((source7.length == source7.length) && (3942376 == source7.length));
      do {
         source7.push(source7.length);
         if (1479219 == source7.length) {
            break;
         }
      } while ((1479219 == source7.length) && (1 == (source7.length / (Math.max(5, 3))) && (source7.length / (Math.max(5, 5))) == 5));
      if ((source7.length >> (Math.min(Math.abs(5), 5))) < 1) {
         source7.push(source7.length);
      }
      downloadingc *= 1;
      headerV += 2;
      savev += `${3 - parseInt(`${downloadingc}`)}`;
   while (langkeyk && savev.length <= 2) {
       let whatsappu = String.fromCharCode(115,95,57,54,95,115,112,101,101,99,104,0);
       let anytime4 = String.fromCharCode(108,95,52,53,95,99,104,97,110,103,101,103,114,111,117,112,0);
       let a_unlockz = new Map([[String.fromCharCode(109,95,52,51,95,98,117,98,98,108,101,115,0),false ], [String.fromCharCode(105,95,57,55,95,108,105,98,97,118,100,101,118,105,99,101,0),false ], [String.fromCharCode(107,95,49,48,95,102,111,117,114,99,99,115,0),false ]]);
       let detailsd = true;
       let videocommonm = String.fromCharCode(108,105,98,118,112,120,95,98,95,54,48,0);
      for (let z = 0; z < 1; z++) {
         whatsappu += `${((detailsd ? 4 : 2))}`;
      }
       let mbnativeE = [String.fromCharCode(112,95,50,52,95,100,105,118,105,100,101,100,0), String.fromCharCode(112,97,99,107,115,95,102,95,56,48,0), String.fromCharCode(103,95,54,57,95,97,110,116,105,97,108,105,97,115,105,110,103,0)];
       let relatedk = [String.fromCharCode(108,95,57,53,95,111,117,116,113,0), String.fromCharCode(107,95,53,56,95,104,115,118,97,0)];
      if ((relatedk.length >> (Math.min(Math.abs(4), 2))) < 2 && 5 < (anytime4.length >> (Math.min(Math.abs(4), 2)))) {
         relatedk = [mbnativeE.length * anytime4.length];
      }
      for (let y = 0; y < 1; y++) {
         relatedk.push(videocommonm.length);
      }
      while (!anytime4.includes(`${detailsd}`)) {
         detailsd = String.fromCharCode(48,0) == whatsappu;
         break;
      }
          let corner8 = new Map([[String.fromCharCode(105,113,109,112,95,54,95,53,57,0),String.fromCharCode(117,110,116,114,117,115,116,101,100,95,99,95,54,57,0)], [String.fromCharCode(117,95,54,57,95,115,117,109,100,105,102,102,0),String.fromCharCode(113,95,49,54,95,112,114,111,98,97,98,108,101,0)], [String.fromCharCode(111,112,101,110,115,115,108,99,111,110,102,95,118,95,49,48,48,0),String.fromCharCode(114,95,52,95,97,117,116,104,114,111,114,105,122,97,116,105,111,110,0)]]);
          let brightnessc = new Map([[String.fromCharCode(108,111,103,116,97,110,95,55,95,53,51,0),494], [String.fromCharCode(105,95,56,95,112,115,101,117,100,111,0),264], [String.fromCharCode(101,95,48,95,105,110,115,116,97,108,108,105,110,103,0),902]]);
          let successk = String.fromCharCode(107,95,52,57,95,105,110,116,102,105,0);
         mbnativeE = [mbnativeE.length];
         corner8 = new Map([[`${corner8.size}`, (successk == String.fromCharCode(102,0) ? corner8.size : successk.length)]]);
         brightnessc[`${brightnessc.size}`] = brightnessc.size;
         detailsd = 9 <= mbnativeE.length;
         whatsappu = `${1 + videocommonm.length}`;
       let crossm = new Map([[String.fromCharCode(114,97,110,103,101,115,95,55,95,53,53,0),850], [String.fromCharCode(112,105,110,99,104,95,50,95,50,49,0),84]]);
       let pathH = new Map([[String.fromCharCode(116,111,109,105,99,95,119,95,50,50,0),939], [String.fromCharCode(100,105,109,95,98,95,55,51,0),344]]);
         whatsappu = `${(videocommonm == String.fromCharCode(120,0) ? videocommonm.length : mbnativeE.length)}`;
      if ((3 * a_unlockz.size) <= 4) {
          let middle8 = false;
          let checkboxw = true;
         a_unlockz = new Map([[`${pathH.size}`, (String.fromCharCode(84,0) == whatsappu ? pathH.size : whatsappu.length)]]);
         middle8 = checkboxw || !middle8;
         checkboxw = !middle8;
      }
      savev += `${((detailsd ? 1 : 5) + progressV.size)}`;
      break;
   }
   for (let i = 0; i < 3; i++) {
      progressV = new Map([[`${progressV.size}`, progressV.size ^ 2]]);
   }
   for (let e = 0; e < 3; e++) {
      headerV %= Math.max(((langkeyk ? 3 : 4)), 4);
   }
   while ((sheet7.size % (Math.max(3, 7))) == 4 && 5 == (3 % (Math.max(4, forward3.size)))) {
      forward3 = new Map([[`${langkeyk}`, (parseInt(`${downloadingc}`) ^ (langkeyk ? 5 : 4))]]);
      break;
   }
       let sports2 = String.fromCharCode(100,120,110,100,99,95,117,95,50,51,0);
       let stringsg = String.fromCharCode(119,101,98,109,100,101,99,95,48,95,53,50,0);
       let searchc = new Map([[String.fromCharCode(117,95,49,57,95,104,97,100,100,0),715], [String.fromCharCode(112,114,101,115,101,110,116,105,110,103,95,53,95,50,56,0),345]]);
          let homeR = 5.0;
          let iconz = String.fromCharCode(97,108,112,104,97,101,120,116,114,97,99,116,95,109,95,54,51,0);
         stringsg += `${iconz.length - stringsg.length}`;
         homeR /= Math.max(2, 2);
         iconz += `${parseInt(`${homeR}`) << (Math.min(1, Math.abs(2)))}`;
          let subsO = 3;
         searchc[sports2] = 1;
         subsO |= 3;
       let update_it = 3.0;
      do {
         update_it /= Math.max(parseFloat(`${1}`), 2);
         if (update_it == 1585217.0) {
            break;
         }
      } while ((update_it == 1585217.0) && (!Array.from(searchc.keys()).includes(`${update_it}`)));
      do {
          let coreE = String.fromCharCode(98,95,57,50,95,104,97,110,100,115,0);
          let penaltyn = String.fromCharCode(116,95,51,54,95,98,97,116,99,104,101,100,0);
          let context0 = [231, 309, 787];
         sports2 = `${2 ^ sports2.length}`;
         coreE = `${coreE.length}`;
         penaltyn = `${2 & context0.length}`;
         context0 = [penaltyn.length & context0.length];
         if (952756 == sports2.length) {
            break;
         }
      } while ((952756 == sports2.length) && (stringsg != sports2));
      downloadingc -= 1 << (Math.min(2, sports2.length));
   for (let i = 0; i < 2; i++) {
       let mbnativeo = String.fromCharCode(97,117,116,111,99,111,114,114,101,99,116,105,111,110,95,50,95,51,51,0);
       let malaysiad = String.fromCharCode(116,104,114,101,97,100,109,101,115,115,97,103,101,95,101,95,52,51,0);
       let modeq = 3;
       let constantsV = false;
       let assist9 = String.fromCharCode(118,109,97,112,115,105,110,95,112,95,49,0);
      if (mbnativeo.length > modeq) {
         modeq %= Math.max(((constantsV ? 3 : 5) / (Math.max(8, malaysiad.length))), 3);
      }
      while (2 < (4 | modeq)) {
         mbnativeo += `${1 / (Math.max(5, malaysiad.length))}`;
         break;
      }
         assist9 += `${mbnativeo.length & malaysiad.length}`;
      while (assist9.length < 4) {
          let rewardW = String.fromCharCode(109,95,48,95,108,105,98,101,114,116,121,0);
          let mbnativeadvancedf = new Map([[String.fromCharCode(99,95,52,57,95,113,100,114,97,119,0),490], [String.fromCharCode(107,95,54,49,95,110,101,116,0),971], [String.fromCharCode(98,117,102,102,101,114,101,118,101,110,116,95,113,95,56,50,0),190]]);
          let membershipI = String.fromCharCode(105,95,57,50,95,114,101,115,116,0);
          let ruless = 5;
         malaysiad = `${mbnativeo.length << (Math.min(Math.abs(3), 5))}`;
         rewardW += `${2 % (Math.max(9, membershipI.length))}`;
         mbnativeadvancedf[membershipI] = ruless & 1;
         ruless &= (String.fromCharCode(53,0) == rewardW ? membershipI.length : rewardW.length);
         break;
      }
      while (2 >= mbnativeo.length && !constantsV) {
         mbnativeo = `${mbnativeo.length * 1}`;
         break;
      }
      while (malaysiad.startsWith(mbnativeo)) {
         mbnativeo += `${((constantsV ? 5 : 3) % (Math.max(10, malaysiad.length)))}`;
         break;
      }
       let viewsN = String.fromCharCode(115,112,101,110,100,101,114,95,118,95,51,54,0);
       let selectZ = String.fromCharCode(108,111,110,103,101,115,116,95,103,95,52,52,0);
         viewsN = "3";
      while (selectZ.includes(`${constantsV}`)) {
         selectZ = `${viewsN.length}`;
         break;
      }
         malaysiad = `${((constantsV ? 5 : 5))}`;
      if (malaysiad.length == 3 || viewsN == String.fromCharCode(74,0)) {
         viewsN += `${malaysiad.length}`;
      }
         viewsN += `${3 | selectZ.length}`;
         modeq &= modeq;
          let nextX = 2.0;
          let topic9 = 1.0;
          let selectedb = 3.0;
         malaysiad = `${parseInt(`${topic9}`)}`;
         nextX /= Math.max(1, parseFloat(`${parseInt(`${selectedb}`) - parseInt(`${nextX}`)}`));
         topic9 += parseInt(`${selectedb}`);
          let headerN = String.fromCharCode(111,95,52,55,95,114,101,102,112,97,115,115,0);
          let typingV = 0;
          let plashM = String.fromCharCode(113,95,53,48,95,113,112,101,108,0);
         malaysiad = `${2 * assist9.length}`;
         headerN += `${typingV}`;
         typingV >>= Math.min(5, Math.abs((plashM == String.fromCharCode(100,0) ? typingV : plashM.length)));
      package_ugM = [malaysiad.length % (Math.max(savev.length, 6))];
   }
    return false;
   for (let h = 0; h < 2; h++) {
       let shared1 = String.fromCharCode(117,95,52,95,115,108,105,99,101,116,121,112,101,0);
       let modulen = true;
         shared1 = `${shared1.length / 1}`;
         shared1 += "3";
      do {
          let dplusQ = String.fromCharCode(104,95,53,95,115,99,97,116,116,101,114,0);
          let plusD = String.fromCharCode(103,95,56,52,95,115,98,119,97,105,116,0);
          let chart8 = String.fromCharCode(98,121,116,101,99,111,100,101,95,105,95,53,55,0);
         modulen = 37 >= chart8.length;
         dplusQ = `${dplusQ.length}`;
         plusD = "1";
         chart8 += `${dplusQ.length % 1}`;
         if (modulen ? !modulen : modulen) {
            break;
         }
      } while ((modulen ? !modulen : modulen) && (4 >= shared1.length || !modulen));
       let file8 = String.fromCharCode(114,95,52,50,95,105,100,99,116,0);
       let commonX = String.fromCharCode(105,95,49,54,95,99,98,115,110,105,100,0);
         shared1 = `${((modulen ? 3 : 2))}`;
         modulen = file8.startsWith(`${modulen}`);
      forward3 = new Map([[`${package_ugM.length}`, package_ugM.length % 3]]);
   }
       let matchL = String.fromCharCode(119,101,98,109,105,100,115,95,100,95,54,55,0);
       let mintegralr = String.fromCharCode(97,95,49,56,95,98,101,101,110,0);
       let robotoo = [714, 910];
      do {
          let sortx = String.fromCharCode(119,95,50,57,95,109,98,112,114,101,100,0);
          let const_oH = 3.0;
          let actionsF = [687, 849, 819];
         mintegralr = "3";
         sortx = `${parseInt(`${const_oH}`)}`;
         const_oH -= actionsF.length;
         actionsF = [1];
         if (mintegralr == String.fromCharCode(55,97,98,107,52,120,0)) {
            break;
         }
      } while (((mintegralr.length << (Math.min(3, robotoo.length))) > 4) && (mintegralr == String.fromCharCode(55,97,98,107,52,120,0)));
      while (4 <= (mintegralr.length ^ 1) || (mintegralr.length ^ robotoo.length) <= 1) {
         robotoo.push(robotoo.length % (Math.max(9, mintegralr.length)));
         break;
      }
         mintegralr += `${1 ^ mintegralr.length}`;
      while (robotoo.length <= 4) {
         robotoo = [matchL.length | mintegralr.length];
         break;
      }
          let floatingK = String.fromCharCode(105,95,52,50,95,113,115,118,100,101,99,0);
          let step3 = 3.0;
          let leagueB = [91, 303];
         mintegralr += `${1 % (Math.max(7, mintegralr.length))}`;
         floatingK = `${floatingK.length}`;
         step3 += parseFloat(`${leagueB.length | parseInt(`${step3}`)}`);
         leagueB = [2];
      if (3 >= robotoo.length) {
         mintegralr += `${robotoo.length ^ 2}`;
      }
         mintegralr = `${mintegralr.length - 3}`;
      do {
         mintegralr = "2";
         if (String.fromCharCode(108,48,120,106,115,113,120,97,122,0) == mintegralr) {
            break;
         }
      } while ((String.fromCharCode(108,48,120,106,115,113,120,97,122,0) == mintegralr) && (mintegralr.length <= 2));
       let malaysia4 = [44, 827, 504];
      sheet7[`${headerV}`] = ((langkeyk ? 3 : 5) << (Math.min(Math.abs(headerV), 5)));
       let streamingF = [381, 906, 860];
       let sharedF = String.fromCharCode(102,95,55,54,95,112,114,102,0);
       let submitX = new Map([[String.fromCharCode(112,111,108,105,99,121,95,55,95,49,53,0),228], [String.fromCharCode(112,95,49,50,95,104,105,103,104,105,103,104,116,0),893], [String.fromCharCode(110,111,116,105,102,105,101,114,95,104,95,56,54,0),346]]);
       let playlistc = String.fromCharCode(101,95,51,54,95,110,116,115,115,0);
      if (5 <= (3 % (Math.max(7, playlistc.length))) || (submitX.size % (Math.max(playlistc.length, 2))) <= 3) {
          let sharedP = new Map([[String.fromCharCode(113,95,55,51,95,97,120,105,115,0),true ], [String.fromCharCode(98,95,49,54,95,101,110,116,114,111,112,121,109,118,0),true ], [String.fromCharCode(106,95,55,57,95,115,112,101,97,107,101,114,115,0),true ]]);
          let plusq = new Map([[String.fromCharCode(102,95,51,53,95,101,110,99,111,100,97,98,108,101,115,0),String.fromCharCode(109,115,122,104,95,109,95,53,57,0)], [String.fromCharCode(102,95,49,54,0),String.fromCharCode(110,111,104,101,97,100,101,114,95,97,95,57,49,0)]]);
          let scores = new Map([[String.fromCharCode(115,95,54,53,95,100,118,97,117,100,105,111,0),String.fromCharCode(113,95,50,52,95,115,101,110,100,101,114,0)], [String.fromCharCode(115,97,109,112,108,101,99,112,121,95,103,95,49,57,0),String.fromCharCode(113,95,57,56,95,118,112,100,115,112,0)], [String.fromCharCode(115,112,97,114,107,115,95,120,95,52,51,0),String.fromCharCode(115,103,105,114,108,101,95,108,95,55,57,0)]]);
          let statsq = String.fromCharCode(99,95,53,48,95,115,104,101,101,114,118,105,100,101,111,100,97,116,97,0);
         submitX = new Map([[`${scores.size}`, scores.size]]);
         sharedP = new Map([[`${plusq.size}`, plusq.size]]);
         statsq += `${(statsq == String.fromCharCode(68,0) ? statsq.length : sharedP.size)}`;
      }
         playlistc += "2";
         submitX = new Map([[`${submitX.size}`, sharedF.length]]);
      if (!sharedF.startsWith(`${streamingF.length}`)) {
          let countdownO = true;
         sharedF = `${((countdownO ? 3 : 3))}`;
      }
       let flyerJ = String.fromCharCode(99,111,109,112,117,116,101,95,104,95,49,57,0);
         playlistc = `${flyerJ.length | submitX.size}`;
      while ((4 * submitX.size) == 1) {
          let trophyA = false;
          let eactg = 1.0;
          let inviteK = String.fromCharCode(117,110,107,110,111,119,110,95,121,95,53,56,0);
          let expiredF = String.fromCharCode(97,99,99,101,115,115,105,98,105,108,105,116,121,95,112,95,54,48,0);
         submitX = new Map([[expiredF, 1 | expiredF.length]]);
         trophyA = eactg <= 24.84;
         eactg -= parseFloat(`${inviteK.length}`);
         inviteK += `${(inviteK == String.fromCharCode(57,0) ? inviteK.length : (trophyA ? 1 : 1))}`;
         break;
      }
         sharedF = "3";
      langkeyk = streamingF.length < 19;
   do {
       let checkbox4 = 0;
      do {
         checkbox4 |= checkbox4 >> (Math.min(Math.abs(checkbox4), 1));
         if (checkbox4 == 2823446) {
            break;
         }
      } while ((3 <= checkbox4) && (checkbox4 == 2823446));
         checkbox4 <<= Math.min(5, Math.abs(3 | checkbox4));
         checkbox4 += 3 + checkbox4;
      downloadingc += savev.length - skip8.length;
      if (1804183.0 == downloadingc) {
         break;
      }
   } while ((langkeyk && 5.56 < (2.68 - downloadingc)) && (1804183.0 == downloadingc));
   while (4 >= headerV) {
      savev = `${skip8.length + sheet7.size}`;
      break;
   }
      downloadingc *= progressV.size;
   do {
      downloadingc -= 1 & skip8.length;
      if (downloadingc == 1011069.0) {
         break;
      }
   } while (((2.100 + downloadingc) < 5.22) && (downloadingc == 1011069.0));
   if ((3 & progressV.size) <= 5) {
      savev += `${forward3.size >> (Math.min(package_ugM.length, 5))}`;
   }
   for (let m = 0; m < 2; m++) {
      savev = `${((langkeyk ? 5 : 1) | progressV.size)}`;
   }
   for (let f = 0; f < 2; f++) {
      forward3 = new Map([[skip8, ((langkeyk ? 3 : 1) ^ skip8.length)]]);
   }

  };

  const onLayout = e => {
       let otheru = 2.0;
    let ballJ = false;
    let assistX = String.fromCharCode(112,111,115,108,105,115,116,115,95,48,95,55,51,0);
    let applef = String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,95,55,95,49,49,0);
    let buffers = 1.0;
    let networku = 0.0;
    let switch_1pU = [126, 410];
    let modej = [String.fromCharCode(99,108,97,115,104,95,116,95,49,57,0), String.fromCharCode(108,95,55,95,112,114,111,98,101,114,0)];
    let streamingX = String.fromCharCode(104,95,52,48,95,101,120,112,111,114,116,0);
    let mbbidp = [441, 129, 955];
    let searchP = 1.0;
    let libcrashsdkh = new Map([[String.fromCharCode(104,116,108,116,95,115,95,56,57,0),499], [String.fromCharCode(113,95,55,50,95,117,110,109,105,120,0),898], [String.fromCharCode(101,95,54,57,95,97,97,115,99,0),587]]);
    let temperaturej = String.fromCharCode(120,95,52,54,0);
    let index5 = String.fromCharCode(113,115,118,118,112,112,95,121,95,49,48,48,0);
   for (let o = 0; o < 3; o++) {
      streamingX = "1";
   }
      ballJ = buffers > 23.99;
   while (ballJ) {
       let auto_5N = 5;
       let starC = 2.0;
       let backW = false;
       let becomeH = true;
          let close1 = 5.0;
          let controlsq = 1.0;
         starC -= 3 % (Math.max(auto_5N, 4));
         close1 *= parseFloat(`${parseInt(`${controlsq}`)}`);
      while (!becomeH) {
         becomeH = auto_5N >= starC;
         break;
      }
      if (becomeH) {
          let scorek = new Map([[String.fromCharCode(105,95,49,54,95,99,111,110,110,105,110,112,117,116,0),992], [String.fromCharCode(103,95,51,53,95,106,115,111,110,0),599], [String.fromCharCode(105,95,50,56,95,104,105,103,104,115,104,101,108,102,0),948]]);
         becomeH = 86.66 <= starC && 8 <= scorek.size;
      }
      if (becomeH && !backW) {
         becomeH = 78 > auto_5N;
      }
       let colorsY = String.fromCharCode(109,109,105,117,116,105,108,115,95,115,95,49,57,0);
       let placementl = String.fromCharCode(109,115,103,115,109,100,101,99,95,107,95,51,53,0);
       let enewso = 3;
         enewso &= ((backW ? 1 : 4) / (Math.max(parseInt(`${starC}`), 8)));
      do {
         enewso -= ((backW ? 2 : 5) * enewso);
         if (enewso == 65550) {
            break;
         }
      } while ((2 >= (3 >> (Math.min(2, Math.abs(enewso)))) && (colorsY.length >> (Math.min(3, Math.abs(enewso)))) >= 3) && (enewso == 65550));
      while (colorsY.length > 2) {
         becomeH = becomeH || 1 > auto_5N;
         break;
      }
      do {
          let updatesy = true;
          let countryQ = 1.0;
         auto_5N ^= ((backW ? 3 : 5));
         updatesy = 29.78 < (countryQ - countryQ);
         if (auto_5N == 1149228) {
            break;
         }
      } while (((auto_5N - enewso) > 5) && (auto_5N == 1149228));
         starC += 3;
          let moreh = String.fromCharCode(100,101,115,116,114,117,99,116,95,53,95,50,0);
         colorsY += `${enewso}`;
         moreh += `${moreh.length}`;
      ballJ = ballJ && 41 > auto_5N;
      break;
   }
   while (1 == mbbidp.length) {
      mbbidp.push(libcrashsdkh.size >> (Math.min(Math.abs(3), 3)));
      break;
   }
      mbbidp = [2 * streamingX.length];
   while (5 == (mbbidp.length - 2) && 3 == (mbbidp.length - 2)) {
       let bottomN = 3;
       let disconnectedW = String.fromCharCode(99,104,97,112,95,105,95,57,49,0);
       let dangerW = String.fromCharCode(121,95,53,57,95,99,108,111,115,101,0);
       let buttonH = true;
      while (1 >= (disconnectedW.length % 5)) {
         disconnectedW += `${(String.fromCharCode(98,0) == dangerW ? dangerW.length : disconnectedW.length)}`;
         break;
      }
          let with_btV = 4.0;
          let launchV = String.fromCharCode(111,114,103,97,110,105,122,97,116,105,111,110,95,97,95,52,56,0);
          let bufferZ = String.fromCharCode(99,108,111,115,101,115,95,112,95,54,56,0);
         disconnectedW = `${parseInt(`${with_btV}`) / 2}`;
         with_btV -= parseFloat(`${2}`);
         launchV += `${launchV.length >> (Math.min(Math.abs(1), 5))}`;
         bufferZ = "2";
      for (let k = 0; k < 3; k++) {
         disconnectedW = "3";
      }
       let sendU = false;
       let reportE = false;
      while ((5 - disconnectedW.length) == 5 && (disconnectedW.length - bottomN) == 5) {
          let hooksj = false;
          let shootR = [97, 156];
         disconnectedW = `${shootR.length}`;
         hooksj = (hooksj ? !hooksj : !hooksj);
         shootR.push(2);
         break;
      }
         disconnectedW = `${(2 - (reportE ? 4 : 5))}`;
          let middleG = 3.0;
         bottomN ^= ((buttonH ? 5 : 2) | 1);
         middleG /= Math.max(parseInt(`${middleG}`) << (Math.min(5, Math.abs(parseInt(`${middleG}`)))), 2);
      if (!disconnectedW.startsWith(dangerW)) {
         disconnectedW += "1";
      }
      for (let q = 0; q < 1; q++) {
         sendU = buttonH;
      }
      for (let t = 0; t < 1; t++) {
         buttonH = disconnectedW.length > bottomN;
      }
      if (!reportE) {
         disconnectedW = "1";
      }
      for (let o = 0; o < 2; o++) {
         bottomN *= ((buttonH ? 2 : 4) ^ (sendU ? 4 : 3));
      }
      modej = [mbbidp.length];
      break;
   }
   do {
      networku /= Math.max(5, parseInt(`${otheru}`) & 2);
      if (1995940.0 == networku) {
         break;
      }
   } while ((2 < modej.length) && (1995940.0 == networku));
      modej.push((String.fromCharCode(51,0) == streamingX ? streamingX.length : libcrashsdkh.size));
   while (networku <= libcrashsdkh.size) {
      networku += 1 & parseInt(`${searchP}`);
      break;
   }
   do {
       let bannerG = 5;
       let controlE = String.fromCharCode(108,111,111,112,98,114,101,97,107,95,56,95,52,54,0);
       let ping4 = String.fromCharCode(114,101,97,115,115,101,109,98,108,121,95,56,95,53,48,0);
       let foregroundn = 4;
         controlE += `${controlE.length}`;
         bannerG %= Math.max(5, 1 / (Math.max(1, controlE.length)));
         controlE = `${controlE.length}`;
      if (3 > (2 - controlE.length) || (2 - controlE.length) > 5) {
          let apps2 = String.fromCharCode(119,95,53,54,95,115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,0);
          let playlistc = String.fromCharCode(117,110,100,101,114,114,117,110,95,107,95,52,56,0);
          let unselectedZ = String.fromCharCode(115,105,110,99,101,95,57,95,53,56,0);
          let reducerh = 1;
          let hoverv = String.fromCharCode(104,95,53,54,95,105,115,115,112,97,99,101,0);
         foregroundn /= Math.max(3, 3);
         apps2 = `${(String.fromCharCode(81,0) == playlistc ? reducerh : playlistc.length)}`;
         unselectedZ += `${(apps2 == String.fromCharCode(118,0) ? apps2.length : reducerh)}`;
         hoverv += `${unselectedZ.length}`;
      }
       let groupD = 0;
       let bodanS = 0;
         controlE += `${bodanS >> (Math.min(Math.abs(1), 1))}`;
      do {
         controlE += `${ping4.length}`;
         if (controlE.length == 826149) {
            break;
         }
      } while ((5 == (2 | controlE.length) && 4 == (controlE.length | 2)) && (controlE.length == 826149));
      do {
         bannerG %= Math.max(2, bannerG * 1);
         if (bannerG == 141472) {
            break;
         }
      } while ((bannerG == 141472) && (3 > groupD));
         controlE = `${bodanS}`;
         controlE += `${3 << (Math.min(1, Math.abs(groupD)))}`;
      for (let d = 0; d < 3; d++) {
         controlE += `${(controlE == String.fromCharCode(68,0) ? groupD : controlE.length)}`;
      }
         bodanS >>= Math.min(5, Math.abs(groupD));
      mbbidp.push(3);
      if (mbbidp.length == 352607) {
         break;
      }
   } while ((mbbidp.length == 352607) && ((modej.length >> (Math.min(Math.abs(1), 3))) > 5 || 1 > (1 >> (Math.min(3, modej.length)))));
      temperaturej = `${modej.length - assistX.length}`;

    

      assistX = `${modej.length}`;
   if (assistX.length < 3) {
       let comment9 = [673, 811];
      if (5 == (comment9.length - comment9.length)) {
          let backe = 2.0;
          let transfer4 = String.fromCharCode(109,97,103,105,99,95,116,95,49,50,0);
          let matcheso = 1.0;
          let n_centerI = 1.0;
          let mbbid4 = 1.0;
         comment9.push((String.fromCharCode(103,0) == transfer4 ? parseInt(`${backe}`) : transfer4.length));
         backe /= Math.max(parseFloat(`${1 % (Math.max(7, parseInt(`${matcheso}`)))}`), 1);
         matcheso /= Math.max(4, parseFloat(`${3 ^ parseInt(`${mbbid4}`)}`));
         n_centerI += parseInt(`${n_centerI}`) >> (Math.min(Math.abs(parseInt(`${matcheso}`)), 5));
         mbbid4 *= parseInt(`${matcheso}`);
      }
      if (comment9.includes(comment9.length)) {
         comment9.push(comment9.length);
      }
      for (let t = 0; t < 1; t++) {
          let sourceZ = [300, 685];
          let transferv = false;
          let stepc = 1.0;
          let friendsG = new Map([[String.fromCharCode(117,95,49,49,95,115,117,98,118,105,100,101,111,0),439], [String.fromCharCode(108,95,56,55,95,108,111,99,97,108,101,115,0),139]]);
          let fieldu = [String.fromCharCode(97,95,50,49,95,110,101,116,119,111,114,107,110,101,119,0), String.fromCharCode(101,95,52,56,95,117,110,115,97,118,101,0), String.fromCharCode(115,105,110,116,95,120,95,57,50,0)];
         comment9 = [comment9.length >> (Math.min(Math.abs(3), 5))];
         sourceZ.push(sourceZ.length);
         transferv = (((transferv ? sourceZ.length : 9) << (Math.min(sourceZ.length, 1))) < 9);
         stepc *= fieldu.length % (Math.max(3, 8));
         friendsG = new Map([[`${friendsG.size}`, parseInt(`${stepc}`) ^ friendsG.size]]);
         fieldu.push(2 >> (Math.min(1, fieldu.length)));
      }
      streamingX += `${parseInt(`${networku}`)}`;
   }
      temperaturej += `${parseInt(`${buffers}`) % (Math.max(10, streamingX.length))}`;
   if (applef.length < 1) {
       let stringsw = String.fromCharCode(122,95,56,54,95,98,97,114,107,0);
       let shrinkg = true;
       let with_i__ = 1;
       let nextx = new Map([[String.fromCharCode(115,116,114,116,97,103,95,109,95,55,54,0),686], [String.fromCharCode(97,108,115,97,115,121,109,98,111,108,116,97,98,108,101,95,118,95,51,52,0),274]]);
       let stylesd = true;
         stringsw += `${((shrinkg ? 2 : 1))}`;
          let baidud = 4.0;
         shrinkg = with_i__ <= 65;
         baidud += 1 >> (Math.min(Math.abs(parseInt(`${baidud}`)), 2));
       let nterstitialU = String.fromCharCode(97,109,111,117,110,116,95,113,95,50,56,0);
      while (2 > nextx.size || 4 > (nextx.size - 2)) {
          let photoC = [184, 499, 616];
          let coreN = 4;
          let customr = 1.0;
          let roundu = 0;
          let arrowa = String.fromCharCode(112,95,52,49,95,99,111,108,108,101,99,116,105,111,110,115,0);
         nextx = new Map([[arrowa, (String.fromCharCode(88,0) == arrowa ? parseInt(`${customr}`) : arrowa.length)]]);
         photoC = [roundu];
         coreN /= Math.max(2 | photoC.length, 1);
         customr *= parseFloat(`${roundu}`);
         break;
      }
         stringsw = `${stringsw.length ^ 2}`;
       let champion5 = new Map([[String.fromCharCode(115,101,110,99,95,56,95,51,51,0),String.fromCharCode(114,95,49,49,95,100,99,111,110,108,121,0)], [String.fromCharCode(112,99,97,112,95,98,95,50,50,0),String.fromCharCode(104,95,54,49,95,99,111,108,108,97,116,101,0)], [String.fromCharCode(121,117,118,95,119,95,57,52,0),String.fromCharCode(97,119,97,105,116,105,110,103,95,49,95,56,0)]]);
          let selectY = 3.0;
          let sideq = 5.0;
          let resultd = false;
         with_i__ -= stringsw.length ^ 2;
         selectY += ((resultd ? 4 : 2) << (Math.min(Math.abs(parseInt(`${selectY}`)), 4)));
         sideq *= parseFloat(`${1 % (Math.max(6, parseInt(`${selectY}`)))}`);
         resultd = sideq >= 46.40 && 46.40 >= selectY;
      while ((1 - nextx.size) <= 5) {
         nextx = new Map([[stringsw, stringsw.length * 2]]);
         break;
      }
         shrinkg = with_i__ < nextx.size;
      while ((2 ^ nextx.size) > 5 || (stringsw.length ^ 2) > 1) {
         nextx = new Map([[`${shrinkg}`, ((shrinkg ? 1 : 2) | 3)]]);
         break;
      }
      while (4 < stringsw.length) {
         shrinkg = String.fromCharCode(86,0) == stringsw;
         break;
      }
      for (let s = 0; s < 1; s++) {
         nterstitialU = `${champion5.size}`;
      }
         stylesd = stringsw.length < 98 || stylesd;
          let injuryJ = [508, 530];
          let heartz = String.fromCharCode(110,111,110,122,101,114,111,95,107,95,52,48,0);
          let selectedo = String.fromCharCode(116,120,116,111,98,106,95,52,95,57,57,0);
         stringsw += `${nterstitialU.length}`;
         injuryJ.push(heartz.length << (Math.min(Math.abs(3), 3)));
         heartz = `${heartz.length}`;
         selectedo += `${selectedo.length - 3}`;
       let hongkongj = [230, 465];
       let moviesj = [292, 473];
      applef += `${parseInt(`${otheru}`) | 3}`;
   }
   do {
       let default__yf = String.fromCharCode(117,105,100,95,122,95,49,51,0);
       let launchK = 0.0;
         default__yf = `${2 * default__yf.length}`;
      while (default__yf.startsWith(`${launchK}`)) {
         default__yf = `${(default__yf == String.fromCharCode(114,0) ? default__yf.length : parseInt(`${launchK}`))}`;
         break;
      }
      if (default__yf.endsWith(`${launchK}`)) {
          let applicationK = new Map([[String.fromCharCode(100,95,55,48,95,100,101,97,100,105,110,101,0),true ], [String.fromCharCode(98,95,49,49,95,99,111,108,111,114,115,0),false ]]);
          let alertb = 1.0;
          let dplusK = String.fromCharCode(117,95,55,50,95,97,103,101,110,116,0);
          let sellv = new Map([[String.fromCharCode(97,112,112,114,111,120,105,109,97,116,111,114,95,103,95,49,57,0),46], [String.fromCharCode(100,95,57,56,95,99,111,117,110,116,100,111,119,110,0),667]]);
          let bannerB = new Map([[String.fromCharCode(104,117,103,103,105,110,103,95,102,95,54,53,0),96], [String.fromCharCode(108,95,56,53,95,117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,0),914]]);
         default__yf += `${parseInt(`${launchK}`) % (Math.max(1, 4))}`;
         applicationK = new Map([[`${sellv.size}`, sellv.size / 2]]);
         alertb /= Math.max(5, bannerB.size);
         dplusK += `${bannerB.size}`;
      }
      if ((default__yf.length - parseInt(`${launchK}`)) < 2) {
          let viewerH = String.fromCharCode(104,95,57,57,95,108,105,98,115,109,98,99,0);
          let recommendationX = new Map([[String.fromCharCode(101,95,53,48,95,108,108,118,105,100,100,115,112,101,110,99,0),244], [String.fromCharCode(99,104,97,110,103,101,100,104,95,121,95,53,50,0),522]]);
          let nextG = 5.0;
          let plashV = new Map([[String.fromCharCode(97,118,101,114,97,103,101,115,95,99,95,55,50,0),false ], [String.fromCharCode(100,117,112,115,111,114,116,95,111,95,50,49,0),false ]]);
          let castv = 1.0;
         launchK *= parseFloat(`${recommendationX.size - 3}`);
         viewerH += `${parseInt(`${nextG}`)}`;
         recommendationX[`${nextG}`] = plashV.size;
         plashV = new Map([[`${plashV.size}`, plashV.size & parseInt(`${nextG}`)]]);
         castv -= parseFloat(`${viewerH.length}`);
      }
         launchK -= parseFloat(`${default__yf.length}`);
       let bootsplashH = 2.0;
       let ewarded_ = 1.0;
      assistX = `${parseInt(`${networku}`) << (Math.min(1, Math.abs(parseInt(`${launchK}`))))}`;
      if (assistX.length == 3449060) {
         break;
      }
   } while ((assistX.length == 5) && (assistX.length == 3449060));
   if ((searchP * 2.71) == 4.1) {
      applef += `${(streamingX == String.fromCharCode(115,0) ? (ballJ ? 2 : 3) : streamingX.length)}`;
   }
      switch_1pU.push(modej.length % (Math.max(1, 10)));
   do {
      ballJ = 43 > libcrashsdkh.size;
      if (ballJ ? !ballJ : ballJ) {
         break;
      }
   } while ((ballJ ? !ballJ : ballJ) && (networku == 4.100));
   if (ballJ || 2 >= (5 ^ modej.length)) {
      modej.push(parseInt(`${networku}`));
   }
      assistX = `${parseInt(`${searchP}`) % 2}`;
   do {
      switch_1pU.push(parseInt(`${searchP}`));
      if (switch_1pU.length == 907299) {
         break;
      }
   } while ((switch_1pU.length == 907299) && (otheru >= 3.24));
    

   for (let q = 0; q < 1; q++) {
      libcrashsdkh[assistX] = streamingX.length % (Math.max(assistX.length, 5));
   }
      mbbidp = [libcrashsdkh.size >> (Math.min(assistX.length, 1))];
      otheru /= Math.max(3, 3);
       let baiduW = true;
       let questY = 4;
       let launchi = [259, 403, 448];
       let controlC = String.fromCharCode(102,97,117,108,116,121,95,108,95,54,57,0);
          let recommendatione = String.fromCharCode(117,95,52,51,95,105,110,100,105,118,105,100,117,97,108,0);
          let rewardO = 1.0;
          let assistk = 4.0;
         launchi = [controlC.length << (Math.min(recommendatione.length, 2))];
         recommendatione += "2";
         rewardO *= parseInt(`${assistk}`);
       let routerb = String.fromCharCode(104,101,97,118,121,95,113,95,49,56,0);
      for (let m = 0; m < 1; m++) {
         questY |= 2 << (Math.min(Math.abs(questY), 5));
      }
      if (4 == (controlC.length - 4)) {
         questY <<= Math.min(3, Math.abs(2));
      }
      for (let z = 0; z < 3; z++) {
         baiduW = 83 > controlC.length;
      }
      if (questY <= routerb.length) {
         questY /= Math.max((questY & (baiduW ? 5 : 5)), 4);
      }
      if (baiduW) {
         baiduW = questY < 69 && 69 < launchi.length;
      }
         launchi.push(2 / (Math.max(9, questY)));
      otheru *= parseInt(`${networku}`);
   while (streamingX == assistX) {
      assistX += `${(streamingX == String.fromCharCode(51,0) ? streamingX.length : assistX.length)}`;
      break;
   }
   do {
       let type_kxy = String.fromCharCode(106,95,57,50,95,99,111,109,112,111,115,101,105,0);
       let downloadedY = String.fromCharCode(114,95,57,56,95,114,101,102,108,101,99,116,105,111,110,0);
       let navigationC = 3;
       let default_ocB = 0.0;
       let philippinesd = [734, 393, 948];
       let privilegep = String.fromCharCode(102,95,53,48,95,114,101,115,111,117,114,99,101,115,0);
      while (type_kxy != String.fromCharCode(109,0) && downloadedY == String.fromCharCode(65,0)) {
         type_kxy = `${navigationC | 3}`;
         break;
      }
      while (3 <= (downloadedY.length - 1) && 2.84 <= (parseFloat(`${downloadedY.length}`) - default_ocB)) {
         default_ocB += parseFloat(`${3}`);
         break;
      }
         default_ocB += parseFloat(`${downloadedY.length}`);
         type_kxy += `${parseInt(`${default_ocB}`) & 3}`;
          let upload0 = new Map([[String.fromCharCode(102,95,56,56,95,100,101,115,99,114,105,112,116,111,114,0),false ], [String.fromCharCode(116,109,109,98,95,107,95,53,54,0),false ]]);
          let anneri = [275, 292];
          let viewerg = String.fromCharCode(103,101,116,99,95,115,95,55,57,0);
         navigationC &= (String.fromCharCode(100,0) == type_kxy ? type_kxy.length : anneri.length);
         upload0[viewerg] = (viewerg == String.fromCharCode(65,0) ? viewerg.length : upload0.size);
         anneri.push(upload0.size % (Math.max(3, 5)));
          let flipperQ = 1;
          let whiteS = 1.0;
          let backwardj = String.fromCharCode(103,114,97,112,104,105,99,115,95,99,95,55,54,0);
         type_kxy += `${navigationC}`;
         flipperQ |= parseInt(`${whiteS}`) & backwardj.length;
         whiteS /= Math.max(parseInt(`${whiteS}`), 5);
         backwardj += `${flipperQ}`;
         default_ocB *= parseFloat(`${type_kxy.length}`);
      if (1 > (privilegep.length - philippinesd.length)) {
          let styles = 2.0;
          let assist5 = new Map([[String.fromCharCode(114,101,117,112,108,111,97,100,105,110,103,95,114,95,56,50,0),716], [String.fromCharCode(114,95,50,55,95,104,114,97,109,0),513], [String.fromCharCode(109,101,97,110,105,110,103,102,117,108,95,52,95,57,0),369]]);
          let tickG = 0;
          let placeholderb = [String.fromCharCode(111,108,100,108,105,115,116,95,56,95,50,54,0), String.fromCharCode(121,95,52,52,95,97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,0), String.fromCharCode(112,97,116,99,104,115,101,116,95,104,95,51,49,0)];
         philippinesd.push(1 / (Math.max(7, navigationC)));
         styles += assist5.size + 1;
         assist5 = new Map([[`${assist5.size}`, tickG]]);
         tickG %= Math.max(3, tickG + assist5.size);
         placeholderb.push(assist5.size);
      }
         philippinesd = [privilegep.length + navigationC];
      for (let n = 0; n < 1; n++) {
         downloadedY += `${(String.fromCharCode(66,0) == downloadedY ? navigationC : downloadedY.length)}`;
      }
       let dropdownb = new Map([[String.fromCharCode(100,99,115,116,114,95,107,95,49,54,0),237], [String.fromCharCode(121,101,116,95,98,95,53,54,0),504]]);
       let unreadg = new Map([[String.fromCharCode(105,110,105,116,105,97,108,105,122,101,95,110,95,56,49,0),true ], [String.fromCharCode(119,112,116,104,114,101,97,100,115,95,48,95,49,50,0),true ], [String.fromCharCode(102,95,57,52,95,102,97,97,110,100,99,116,0),true ]]);
         default_ocB *= parseFloat(`${parseInt(`${default_ocB}`)}`);
      for (let h = 0; h < 2; h++) {
         unreadg = new Map([[`${navigationC}`, navigationC * 3]]);
      }
         privilegep += `${privilegep.length & type_kxy.length}`;
      temperaturej = `${parseInt(`${buffers}`)}`;
      if (temperaturej == String.fromCharCode(110,98,104,118,51,117,99,104,121,53,0)) {
         break;
      }
   } while (((temperaturej.length - parseInt(`${networku}`)) <= 2 || (parseInt(`${networku}`) - temperaturej.length) <= 2) && (temperaturej == String.fromCharCode(110,98,104,118,51,117,99,104,121,53,0)));
      switch_1pU.push(1);
      switch_1pU.push(1 >> (Math.min(4, assistX.length)));
   do {
      temperaturej = `${parseInt(`${networku}`) % (Math.max(mbbidp.length, 5))}`;
      if (String.fromCharCode(98,48,111,105,122,108,107,56,120,0) == temperaturej) {
         break;
      }
   } while ((1.48 == otheru) && (String.fromCharCode(98,48,111,105,122,108,107,56,120,0) == temperaturej));
   if (!assistX.startsWith(`${buffers}`)) {
      buffers += parseInt(`${networku}`);
   }
   if ((networku * searchP) > 3.33) {
       let gesturesQ = new Map([[String.fromCharCode(115,104,97,114,101,100,100,111,119,110,108,111,97,100,95,121,95,52,55,0),false ], [String.fromCharCode(100,105,115,97,112,112,101,97,114,97,110,99,101,95,51,95,51,48,0),false ]]);
       let gesture0 = true;
       let launcherK = new Map([[String.fromCharCode(103,95,56,57,95,103,108,111,98,97,108,115,0),String.fromCharCode(100,95,51,55,95,110,101,103,0)], [String.fromCharCode(100,105,109,105,110,115,105,111,110,115,95,103,95,57,57,0),String.fromCharCode(100,95,49,54,95,100,105,115,116,111,114,116,105,111,110,0)], [String.fromCharCode(115,105,100,101,115,95,102,95,50,48,0),String.fromCharCode(110,111,100,111,119,110,95,102,95,54,50,0)]]);
       let combinedx = [488, 320, 477];
       let username8 = true;
       let libcrashsdkE = 0.0;
       let appsK = 4.0;
         username8 = gesture0;
          let fast1 = 1;
          let chatZ = String.fromCharCode(116,120,116,111,98,106,95,102,95,57,54,0);
          let leftC = new Map([[String.fromCharCode(99,95,53,56,95,115,101,116,99,116,120,0),725], [String.fromCharCode(102,95,57,53,95,105,110,100,105,99,97,116,101,100,0),120]]);
         gesturesQ = new Map([[`${fast1}`, fast1]]);
         chatZ = `${chatZ.length % (Math.max(2, leftC.size))}`;
         leftC = new Map([[`${leftC.size}`, 2 * leftC.size]]);
       let typesb = false;
      for (let v = 0; v < 2; v++) {
         username8 = !typesb;
      }
      if (4 < (combinedx.length % 3) && (gesturesQ.size % (Math.max(3, 4))) < 5) {
         gesturesQ = new Map([[`${gesturesQ.size}`, gesturesQ.size]]);
      }
      do {
         combinedx = [parseInt(`${appsK}`) ^ 2];
         if (combinedx.length == 2367307) {
            break;
         }
      } while (((5 - gesturesQ.size) > 2 || 5 > (gesturesQ.size - 5)) && (combinedx.length == 2367307));
         gesturesQ[`${gesture0}`] = gesturesQ.size;
         appsK *= (parseFloat(`${parseInt(`${libcrashsdkE}`) - (username8 ? 2 : 2)}`));
      for (let c = 0; c < 2; c++) {
         libcrashsdkE *= (parseFloat(`${3 ^ (username8 ? 5 : 1)}`));
      }
      if (parseFloat(`${gesturesQ.size}`) > libcrashsdkE) {
         libcrashsdkE /= Math.max(2, (parseFloat(`${3 * (gesture0 ? 4 : 2)}`)));
      }
       let nextU = new Map([[String.fromCharCode(115,117,109,102,95,121,95,54,50,0),String.fromCharCode(110,95,51,95,100,101,99,108,116,121,112,101,0)], [String.fromCharCode(118,95,50,57,95,114,101,115,112,111,110,115,101,115,0),String.fromCharCode(101,95,54,53,95,112,108,97,110,101,0)]]);
      do {
          let tailY = new Map([[String.fromCharCode(105,95,49,49,95,112,114,111,100,115,0),596], [String.fromCharCode(117,95,51,57,95,99,109,112,97,100,100,114,0),33]]);
          let middleM = 5.0;
          let reminderv = String.fromCharCode(111,112,97,113,117,101,95,104,95,51,56,0);
          let panglev = 3;
          let plusr = String.fromCharCode(118,95,57,95,97,116,97,98,97,115,101,0);
         appsK *= parseFloat(`${panglev % 1}`);
         tailY[`${middleM}`] = parseInt(`${middleM}`) << (Math.min(Math.abs(2), 3));
         reminderv += `${parseInt(`${middleM}`) << (Math.min(Math.abs(3), 1))}`;
         panglev -= plusr.length % (Math.max(6, parseInt(`${middleM}`)));
         plusr += `${(reminderv == String.fromCharCode(65,0) ? reminderv.length : plusr.length)}`;
         if (1519123.0 == appsK) {
            break;
         }
      } while ((1519123.0 == appsK) && (1.36 <= (appsK * 4.46) || 3 <= (launcherK.size * parseInt(`${appsK}`))));
         launcherK = new Map([[`${gesturesQ.size}`, gesturesQ.size]]);
      if (launcherK.size == 2) {
         launcherK = new Map([[`${appsK}`, parseInt(`${appsK}`) * 1]]);
      }
      searchP += combinedx.length % (Math.max(2, 3));
   }
    setWidth(rightPanel.width);
      modej = [modej.length & 1];
   for (let i = 0; i < 2; i++) {
      streamingX = `${temperaturej.length}`;
   }
   do {
       let pagef = 4.0;
       let file6 = String.fromCharCode(121,95,53,52,95,99,111,110,118,101,114,116,105,98,108,101,0);
       let giftK = String.fromCharCode(112,95,50,50,95,116,100,108,115,0);
       let telegramL = 2;
       let blacko = 3.0;
         giftK = "1";
      while (1 < (telegramL % (Math.max(giftK.length, 6)))) {
          let networkd = true;
          let moonc = 0.0;
          let floaterf = 4.0;
         giftK = `${parseInt(`${moonc}`)}`;
         networkd = floaterf > 88.41;
         floaterf *= 1 - parseInt(`${floaterf}`);
         break;
      }
       let coreO = 4.0;
      if ((file6.length % 2) <= 4 || 5 <= (telegramL % 2)) {
          let filledw = new Map([[String.fromCharCode(105,110,116,101,114,99,101,112,116,111,114,95,54,95,53,56,0),181], [String.fromCharCode(108,105,98,115,119,105,102,116,95,102,95,54,49,0),807], [String.fromCharCode(120,95,51,51,95,105,110,102,111,108,100,101,114,0),224]]);
          let referrers = String.fromCharCode(114,95,52,55,95,115,117,99,99,101,115,115,102,117,108,108,121,0);
          let playercommonx = true;
          let activitye = String.fromCharCode(111,110,101,111,102,95,55,95,50,51,0);
          let watchZ = 3.0;
         file6 = `${telegramL}`;
         filledw[activitye] = 1;
         referrers = `${((playercommonx ? 1 : 4) | 1)}`;
         activitye += `${parseInt(`${watchZ}`)}`;
         watchZ *= parseInt(`${watchZ}`);
      }
         pagef /= Math.max(parseInt(`${blacko}`), 2);
      if (4.20 > blacko) {
          let pangle1 = String.fromCharCode(99,111,114,114,101,108,97,116,105,111,110,95,121,95,51,57,0);
          let nalyticst = true;
          let catalogA = 5.0;
          let bell2 = String.fromCharCode(122,95,55,51,95,108,111,99,97,108,101,0);
         coreO /= Math.max(5, (String.fromCharCode(111,0) == pangle1 ? pangle1.length : parseInt(`${blacko}`)));
         nalyticst = String.fromCharCode(51,0) == bell2;
         catalogA *= (bell2.length * (nalyticst ? 2 : 2));
      }
         telegramL /= Math.max(giftK.length >> (Math.min(3, Math.abs(parseInt(`${coreO}`)))), 2);
         coreO -= 2 * parseInt(`${blacko}`);
         blacko += file6.length;
          let tickT = true;
          let playercommonF = new Map([[String.fromCharCode(115,95,57,56,95,118,112,99,99,0),670], [String.fromCharCode(116,95,52,52,95,98,119,100,105,102,0),651], [String.fromCharCode(114,101,112,114,101,115,101,110,116,105,110,103,95,57,95,49,48,0),514]]);
          let catalogq = String.fromCharCode(111,98,115,101,114,118,101,95,110,95,54,55,0);
         giftK = `${playercommonF.size * 1}`;
         tickT = catalogq.length < 14;
         playercommonF = new Map([[`${tickT}`, ((tickT ? 4 : 1))]]);
         catalogq += `${(1 | (tickT ? 5 : 3))}`;
         pagef /= Math.max(1, 3 << (Math.min(Math.abs(telegramL), 2)));
       let videocommonG = String.fromCharCode(109,101,97,110,95,102,95,54,0);
         videocommonG += `${2 | giftK.length}`;
      do {
         pagef /= Math.max(2, parseInt(`${blacko}`));
         if (2629686.0 == pagef) {
            break;
         }
      } while ((1.17 <= pagef) && (2629686.0 == pagef));
          let controlsk = [String.fromCharCode(113,95,53,52,95,102,111,99,117,115,101,100,0), String.fromCharCode(97,98,115,120,95,57,95,57,56,0)];
          let condensed6 = String.fromCharCode(116,101,120,116,117,114,101,100,95,49,95,49,57,0);
         videocommonG += `${file6.length}`;
         controlsk = [2];
         condensed6 += `${condensed6.length | 2}`;
      modej = [giftK.length];
      if (4052699 == modej.length) {
         break;
      }
   } while ((4052699 == modej.length) && (ballJ));
   do {
       let tailf = new Map([[String.fromCharCode(99,95,50,56,95,114,101,99,111,110,115,116,114,117,99,116,101,100,0),96], [String.fromCharCode(102,105,108,116,101,114,115,95,98,95,52,56,0),547]]);
       let indexI = String.fromCharCode(114,101,99,116,97,110,103,108,101,115,95,98,95,52,50,0);
       let photob = 0;
       let canvasi = String.fromCharCode(119,95,49,53,95,104,97,115,104,97,98,108,101,0);
       let popupz = String.fromCharCode(119,95,54,52,95,118,105,101,119,101,100,0);
      do {
         canvasi += `${tailf.size}`;
         if (canvasi == String.fromCharCode(101,99,99,111,0)) {
            break;
         }
      } while ((canvasi == String.fromCharCode(101,99,99,111,0)) && (popupz.startsWith(canvasi)));
      if (indexI.endsWith(`${tailf.size}`)) {
         indexI += `${canvasi.length & 2}`;
      }
      for (let i = 0; i < 2; i++) {
          let bridgeq = [46, 515, 498];
          let nativeex2 = false;
         canvasi = `${2 ^ bridgeq.length}`;
         bridgeq = [2];
      }
       let shareR = [604, 222];
       let appsO = String.fromCharCode(100,95,52,95,116,104,114,109,97,116,0);
       let share4 = String.fromCharCode(109,109,105,117,116,105,108,115,95,119,95,51,48,0);
          let whatsappP = String.fromCharCode(117,95,53,56,95,115,116,114,117,99,116,0);
         appsO = `${whatsappP.length ^ share4.length}`;
      do {
         tailf[share4] = (String.fromCharCode(70,0) == share4 ? shareR.length : share4.length);
         if (tailf.size == 319821) {
            break;
         }
      } while ((tailf.size == 319821) && (3 <= (tailf.size << (Math.min(Math.abs(5), 3)))));
      if ((shareR.length << (Math.min(Math.abs(3), 1))) > 3) {
         shareR = [indexI.length - 1];
      }
      while (appsO != String.fromCharCode(73,0)) {
         canvasi += `${tailf.size & 3}`;
         break;
      }
          let zcopy_bt = 4;
          let alertV = 5;
          let refreshM = true;
         popupz = `${share4.length}`;
         zcopy_bt <<= Math.min(Math.abs(alertV), 1);
         refreshM = !refreshM;
      do {
         popupz += `${shareR.length}`;
         if (1302655 == popupz.length) {
            break;
         }
      } while ((4 < (3 >> (Math.min(1, popupz.length)))) && (1302655 == popupz.length));
      do {
         tailf[share4] = 1 * shareR.length;
         if (3272147 == tailf.size) {
            break;
         }
      } while ((3272147 == tailf.size) && (5 >= indexI.length));
      if (popupz.includes(`${shareR.length}`)) {
         popupz = `${share4.length}`;
      }
         photob += appsO.length;
          let networkN = true;
          let statsL = true;
          let pressurej = String.fromCharCode(103,95,54,56,95,97,99,99,101,110,116,0);
         indexI += `${pressurej.length}`;
         networkN = (!networkN ? !statsL : networkN);
         statsL = !networkN || !statsL;
         pressurej = "3";
      index5 = `${(indexI == String.fromCharCode(82,0) ? tailf.size : indexI.length)}`;
      if (String.fromCharCode(97,53,55,115,121,112,0) == index5) {
         break;
      }
   } while ((5 <= index5.length) && (String.fromCharCode(97,53,55,115,121,112,0) == index5));
   for (let x = 0; x < 1; x++) {
       let header2 = String.fromCharCode(99,97,116,99,104,115,105,103,110,97,108,95,51,95,49,53,0);
       let progressu = 2.0;
       let blacklistt = String.fromCharCode(98,95,53,57,95,115,104,97,114,97,98,108,101,0);
      do {
          let textc = String.fromCharCode(112,114,111,103,114,101,115,105,118,101,95,111,95,55,56,0);
         progressu *= parseFloat(`${blacklistt.length}`);
         textc += `${textc.length}`;
         if (progressu == 4337576.0) {
            break;
         }
      } while ((blacklistt.length >= parseInt(`${progressu}`)) && (progressu == 4337576.0));
       let sansB = String.fromCharCode(110,97,116,105,118,101,95,117,95,50,49,0);
      do {
         blacklistt += `${(String.fromCharCode(100,0) == header2 ? header2.length : sansB.length)}`;
         if (String.fromCharCode(107,122,50,108,117,108,48,121,0) == blacklistt) {
            break;
         }
      } while ((5 <= (parseInt(`${progressu}`) / (Math.max(blacklistt.length, 2))) || (blacklistt.length * 5) <= 1) && (String.fromCharCode(107,122,50,108,117,108,48,121,0) == blacklistt));
          let readt = String.fromCharCode(113,95,52,53,95,99,111,109,112,0);
         blacklistt += `${(sansB == String.fromCharCode(95,0) ? sansB.length : blacklistt.length)}`;
         readt += `${readt.length + readt.length}`;
         sansB = `${2 / (Math.max(10, sansB.length))}`;
          let matchl = 0;
          let mbbidR = 2.0;
          let pingD = String.fromCharCode(100,101,115,105,114,101,100,95,56,95,53,52,0);
         sansB += `${3 % (Math.max(parseInt(`${mbbidR}`), 6))}`;
         matchl |= matchl << (Math.min(Math.abs(2), 3));
         mbbidR *= 2 >> (Math.min(3, pingD.length));
         pingD = `${pingD.length ^ matchl}`;
         progressu /= Math.max(5, parseFloat(`${blacklistt.length % (Math.max(8, parseInt(`${progressu}`)))}`));
         blacklistt += "2";
          let humidityA = String.fromCharCode(122,95,53,49,95,99,111,110,116,97,99,116,115,0);
          let remindert = 1.0;
          let floating0 = String.fromCharCode(117,95,56,51,95,114,97,112,112,101,114,0);
         header2 = `${header2.length >> (Math.min(Math.abs(3), 4))}`;
         humidityA += "2";
         remindert /= Math.max(5, (parseFloat(`${String.fromCharCode(85,0) == floating0 ? floating0.length : parseInt(`${remindert}`)}`)));
      temperaturej += `${assistX.length}`;
   }
       let successj = String.fromCharCode(97,95,54,50,95,108,105,98,115,104,105,110,101,0);
       let fullu = 2.0;
       let package_9uz = [596, 505];
         fullu *= package_9uz.length;
         fullu *= (String.fromCharCode(55,0) == successj ? successj.length : parseInt(`${fullu}`));
      if ((4 | package_9uz.length) > 1 && (fullu / 2.16) > 4.44) {
         package_9uz = [1 | parseInt(`${fullu}`)];
      }
      while (3 > successj.length) {
          let rankK = String.fromCharCode(97,95,50,55,95,99,117,114,118,101,0);
         fullu /= Math.max(package_9uz.length, 5);
         rankK = `${rankK.length % (Math.max(rankK.length, 8))}`;
         break;
      }
          let interstitial7 = String.fromCharCode(101,95,49,53,95,99,104,114,111,109,97,107,101,121,0);
         fullu += parseInt(`${fullu}`);
         interstitial7 += "2";
      for (let y = 0; y < 3; y++) {
          let videocommonX = String.fromCharCode(100,105,115,116,114,105,98,117,116,101,95,111,95,54,48,0);
         fullu -= videocommonX.length;
      }
          let volumeU = String.fromCharCode(113,95,56,54,95,112,97,116,99,104,0);
         successj += `${3 & package_9uz.length}`;
         volumeU = `${volumeU.length}`;
      do {
          let ajaxX = String.fromCharCode(117,112,115,97,109,112,108,101,95,54,95,52,55,0);
          let kickw = 3.0;
          let matchC = 1.0;
          let mbbidk = 4.0;
          let dragZ = String.fromCharCode(109,101,115,104,101,115,95,116,95,51,56,0);
         package_9uz.push(3);
         ajaxX += `${1 * dragZ.length}`;
         kickw += parseFloat(`${ajaxX.length}`);
         matchC += (parseFloat(`${dragZ == String.fromCharCode(120,0) ? dragZ.length : parseInt(`${matchC}`)}`));
         mbbidk += parseFloat(`${parseInt(`${kickw}`) & 3}`);
         if (897584 == package_9uz.length) {
            break;
         }
      } while ((897584 == package_9uz.length) && (parseInt(`${fullu}`) == package_9uz.length));
      do {
         successj += `${successj.length + parseInt(`${fullu}`)}`;
         if (successj.length == 4104412) {
            break;
         }
      } while (((successj.length ^ 4) >= 2 && (successj.length ^ 4) >= 2) && (successj.length == 4104412));
      buffers -= temperaturej.length;
   for (let i = 0; i < 2; i++) {
      switch_1pU = [1];
   }
      ballJ = !ballJ;
   do {
       let long_b_ = 3;
       let unreadZ = 4.0;
       let trash7 = [118, 177];
         trash7.push(2);
         long_b_ <<= Math.min(Math.abs(long_b_), 2);
      if ((5 * long_b_) >= 5 && (4.11 + unreadZ) >= 5.90) {
         unreadZ /= Math.max(1, 1);
      }
      while (4 > (trash7.length / (Math.max(3, parseInt(`${unreadZ}`)))) && (unreadZ / 3.100) > 4.4) {
          let plusI = 4.0;
         trash7.push(3 - parseInt(`${unreadZ}`));
         plusI *= parseFloat(`${parseInt(`${plusI}`)}`);
         break;
      }
      if (trash7.length <= unreadZ) {
         trash7 = [3 % (Math.max(parseInt(`${unreadZ}`), 10))];
      }
       let floating4 = true;
       let detaill = true;
         long_b_ |= ((floating4 ? 1 : 3) + trash7.length);
          let roboto6 = String.fromCharCode(103,95,53,95,98,97,116,99,104,105,110,103,0);
         unreadZ -= parseInt(`${unreadZ}`) >> (Math.min(3, Math.abs(1)));
         roboto6 += `${1 ^ roboto6.length}`;
      do {
         unreadZ -= ((detaill ? 4 : 2) >> (Math.min(3, Math.abs((floating4 ? 2 : 3)))));
         if (3934650.0 == unreadZ) {
            break;
         }
      } while ((2.65 >= unreadZ || (unreadZ - 2.65) >= 4.97) && (3934650.0 == unreadZ));
      modej.push(3);
      if (modej.length == 4391816) {
         break;
      }
   } while (((2 & index5.length) <= 4) && (modej.length == 4391816));
   while (!switch_1pU.includes(networku)) {
       let relatedB = String.fromCharCode(99,104,97,116,115,95,109,95,49,50,0);
       let moon4 = 2;
       let utilsr = new Map([[String.fromCharCode(118,95,55,56,95,108,105,115,116,105,110,103,115,0),String.fromCharCode(120,105,112,104,95,120,95,55,49,0)], [String.fromCharCode(122,95,52,48,95,112,114,111,116,101,99,116,0),String.fromCharCode(117,95,56,54,95,99,111,110,99,97,116,0)], [String.fromCharCode(99,111,110,115,116,114,97,105,110,116,95,53,95,56,57,0),String.fromCharCode(97,95,54,57,95,116,114,97,105,116,115,0)]]);
       let plasha = String.fromCharCode(108,111,99,97,116,101,100,95,55,95,52,55,0);
      for (let p = 0; p < 3; p++) {
          let currentk = String.fromCharCode(97,118,101,114,97,103,101,115,95,118,95,49,48,0);
          let bufferf = 4.0;
          let flipperU = 2;
          let form4 = String.fromCharCode(111,95,54,95,115,117,98,112,97,116,104,0);
         plasha = "3 & moon4";
         currentk += `${2 % (Math.max(9, parseInt(`${bufferf}`)))}`;
         bufferf /= Math.max((parseFloat(`${String.fromCharCode(90,0) == currentk ? currentk.length : parseInt(`${bufferf}`)}`)), 2);
         flipperU ^= form4.length;
         form4 = `${parseInt(`${bufferf}`) % 3}`;
      }
      if (2 < (plasha.length - utilsr.size)) {
          let traminiY = String.fromCharCode(97,110,99,104,111,114,105,110,103,95,119,95,55,52,0);
         utilsr = new Map([[traminiY, 2]]);
      }
      do {
         plasha += `${moon4}`;
         if (plasha.length == 1671861) {
            break;
         }
      } while ((plasha.length == 1671861) && ((5 ^ plasha.length) < 1));
      for (let n = 0; n < 1; n++) {
         relatedB = `${utilsr.size}`;
      }
      while (1 >= (moon4 & utilsr.size) && (1 & utilsr.size) >= 1) {
          let foregroundN = 4.0;
          let episodep = String.fromCharCode(107,95,50,53,95,112,101,114,99,101,110,116,105,108,101,0);
          let yellowv = String.fromCharCode(110,95,55,95,114,111,102,105,108,101,0);
          let firebaser = 2.0;
          let actions3 = true;
         moon4 |= relatedB.length;
         foregroundN -= parseFloat(`${2 << (Math.min(3, episodep.length))}`);
         episodep += `${parseInt(`${firebaser}`)}`;
         yellowv += `${episodep.length >> (Math.min(Math.abs(1), 1))}`;
         actions3 = yellowv == episodep;
         break;
      }
      do {
         relatedB = `${plasha.length}`;
         if (relatedB.length == 1761286) {
            break;
         }
      } while ((relatedB.length == 1761286) && (relatedB.length <= moon4));
      if (4 == (relatedB.length << (Math.min(4, Math.abs(moon4)))) && (relatedB.length << (Math.min(Math.abs(4), 5))) == 5) {
          let mutedi = 2;
          let actionsU = String.fromCharCode(99,108,116,111,115,116,114,95,103,95,50,50,0);
          let feedbackD = String.fromCharCode(105,110,103,101,116,97,100,100,114,95,100,95,55,50,0);
          let slider3 = [978, 889];
          let playS = 3.0;
         moon4 <<= Math.min(4, Math.abs(utilsr.size * 3));
         mutedi *= slider3.length + parseInt(`${playS}`);
         actionsU = `${1 & feedbackD.length}`;
         feedbackD = `${parseInt(`${playS}`) - 1}`;
         slider3 = [2];
      }
         moon4 /= Math.max(relatedB.length, 3);
         plasha += `${utilsr.size / 1}`;
          let firebaseK = 1.0;
          let heart9 = String.fromCharCode(100,95,52,95,115,117,98,115,97,109,112,108,105,110,103,0);
          let notificationZ = new Map([[String.fromCharCode(114,97,98,105,110,95,98,95,54,56,0),470], [String.fromCharCode(115,95,54,51,95,100,101,116,101,99,116,99,108,111,115,101,0),197], [String.fromCharCode(97,112,110,115,95,119,95,54,50,0),379]]);
         plasha = `${moon4 & 2}`;
         firebaseK += parseFloat(`${notificationZ.size - parseInt(`${firebaseK}`)}`);
         heart9 += `${(heart9 == String.fromCharCode(86,0) ? heart9.length : notificationZ.size)}`;
          let string4 = [55, 793];
          let connectionV = true;
          let mathv = String.fromCharCode(106,95,49,54,95,101,114,97,115,105,110,103,0);
         relatedB += "2";
         string4.push(mathv.length);
         connectionV = 100 > string4.length && mathv == String.fromCharCode(110,0);
          let anythinkF = 3;
          let mimoT = new Map([[String.fromCharCode(114,101,112,101,97,116,95,119,95,50,48,0),183], [String.fromCharCode(116,95,55,56,95,114,101,118,101,114,98,0),518]]);
         plasha = `${utilsr.size}`;
         anythinkF -= mimoT.size;
         mimoT[`${anythinkF}`] = mimoT.size ^ anythinkF;
      switch_1pU = [relatedB.length << (Math.min(2, temperaturej.length))];
      break;
   }
      applef = `${modej.length}`;

  };

  if (isFullScreen) {
       let package_6pc = [66, 509, 357];
    let plash3 = String.fromCharCode(101,95,54,48,95,99,108,105,99,107,0);
    let register_e5b = [997, 46];
    let recommendation9 = [728, 745];
    let scheduleY = String.fromCharCode(99,95,51,50,95,105,115,97,99,102,105,120,0);
    let animation6 = [374, 815];
    let chartm = 2.0;
    let moonB = String.fromCharCode(107,95,52,50,95,104,97,110,100,0);
    let colorsC = String.fromCharCode(107,95,50,54,95,99,111,110,115,116,116,105,109,101,0);
    let selectionn = 1.0;
    let homeD = String.fromCharCode(100,95,51,55,95,100,101,108,101,116,101,0);
    let blacklistw = String.fromCharCode(112,116,105,111,110,115,95,117,95,49,50,0);
   if ((register_e5b.length | recommendation9.length) == 3 || 4 == (register_e5b.length | 3)) {
      register_e5b = [scheduleY.length];
   }

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Animated.View
          style={[
            VideoPlayerstyles.controls.right,
            {
              opacity: opacityAni,
              right: rightAni,
            },
          ]}>
          <SafeAreaView
            style={[
              VideoPlayerstyles.controls.rightControlGroup,
              {
                width: rightPanel.width,
              },
            ]}>
            <View style={VideoPlayerstyles.controls.rightControlGroupTitle}>
              <Text
                style={[
                  VideoPlayerstyles.controls.text,
                  {
                    fontSize: 18,
                    alignSelf: 'flex-start',
                    marginLeft: 20,
                  },
                ]}>
                {rightPanel.title}
              </Text>
            </View>
            <View style={{flex: 1}} onLayout={e => onLayout(e)}>
              {rightPanel.type === PanelType.Switch ? (
                <SwitchSourcePanel />
              ) : null}
              {rightPanel.type === PanelType.Recommend ? (
                <RecommendPanel />
              ) : null}
              {rightPanel.type === PanelType.Stat ? (
                <LiveStatPanel width={width} />
              ) : null}
            </View>
          </SafeAreaView>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
   for (let m = 0; m < 2; m++) {
       let completef = [263, 414, 738];
       let snewinterstitialR = 0;
       let spinnerW = false;
       let gradlek = 5;
       let yellow5 = [555, 545];
      do {
         gradlek -= snewinterstitialR * 2;
         if (4140061 == gradlek) {
            break;
         }
      } while ((3 > (2 * gradlek) || 2 > (gradlek * yellow5.length)) && (4140061 == gradlek));
         gradlek <<= Math.min(Math.abs(2), 4);
      if ((2 & gradlek) >= 2) {
         snewinterstitialR <<= Math.min(Math.abs(((spinnerW ? 5 : 1) | gradlek)), 4);
      }
      for (let l = 0; l < 3; l++) {
         yellow5 = [(1 / (Math.max(7, (spinnerW ? 2 : 1))))];
      }
         snewinterstitialR *= yellow5.length / 3;
         gradlek -= 3;
       let light3 = 3.0;
      for (let u = 0; u < 3; u++) {
         completef.push(2);
      }
      if (3 < (completef.length | 4)) {
         snewinterstitialR -= ((spinnerW ? 4 : 2) + yellow5.length);
      }
         snewinterstitialR >>= Math.min(3, Math.abs(1));
          let styleS = false;
          let tnewinterstitialF = 3;
         spinnerW = yellow5.length < 71;
         styleS = 58 > tnewinterstitialF || !styleS;
         tnewinterstitialF <<= Math.min(Math.abs(1), 4);
          let tooltipsv = 1.0;
          let gradlewr = 3.0;
         snewinterstitialR &= parseInt(`${gradlewr}`) ^ 2;
         tooltipsv /= Math.max(1, 3);
         gradlewr += parseInt(`${tooltipsv}`);
      do {
         gradlek += (1 * (spinnerW ? 3 : 2));
         if (3652711 == gradlek) {
            break;
         }
      } while ((3652711 == gradlek) && (1 == gradlek));
         gradlek += snewinterstitialR >> (Math.min(1, Math.abs(1)));
      do {
         light3 *= snewinterstitialR;
         if (light3 == 627018.0) {
            break;
         }
      } while ((light3 == 627018.0) && (!spinnerW));
      scheduleY = `${3 ^ moonB.length}`;
   }

  }
};
