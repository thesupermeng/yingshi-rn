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
import {LiveStatPanel} from './controlComponents/xgs_mail';
import {RecommendPanel} from './controlComponents/recommend/dy_yellow_internet';
import VideoPlayerstyles from '../fgl_less_position';
import {SwitchSourcePanel} from './controlComponents/l_photo';
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
       let regengs = true;
    let transfern = [747, 310, 57];
    let splashm = 0.0;
    let emojiw = [577, 353, 937];
    let streaming3 = [821, 664, 413];
    let acceptedY = new Map([[String.fromCharCode(115,104,117,102,102,108,101,112,108,97,110,101,115,95,109,95,54,56,0),true ], [String.fromCharCode(104,95,52,49,95,103,101,116,102,114,97,109,101,0),true ], [String.fromCharCode(112,97,110,105,99,95,114,95,57,54,0),false ]]);
    let gifty = true;
    let heartL = 3.0;
    let emojiq = String.fromCharCode(118,95,49,57,95,115,116,117,98,98,101,100,0);
    let navigation1 = false;
       let episodesu = 3.0;
         episodesu *= parseInt(`${episodesu}`) * 3;
          let floatingG = 1.0;
         episodesu += 1;
         floatingG *= parseFloat(`${parseInt(`${floatingG}`)}`);
       let belld = new Map([[String.fromCharCode(112,114,105,109,101,114,95,108,95,49,51,0),477], [String.fromCharCode(122,95,56,49,95,115,110,112,114,105,110,116,102,0),945]]);
       let eventc = new Map([[String.fromCharCode(99,114,101,100,105,98,105,108,105,116,121,95,55,95,52,54,0),false ], [String.fromCharCode(115,99,104,105,95,105,95,52,52,0),true ], [String.fromCharCode(122,111,110,101,115,95,107,95,55,51,0),true ]]);
      transfern.push(parseInt(`${episodesu}`));
      emojiq += `${1 / (Math.max(8, acceptedY.size))}`;
   do {
      splashm *= parseFloat(`${1 % (Math.max(3, acceptedY.size))}`);
      if (splashm == 2725297.0) {
         break;
      }
   } while ((splashm == 2725297.0) && (2.42 == (splashm + 5.97) || (splashm + 5.97) == 3.35));
   if (parseFloat(`${emojiq.length}`) > splashm) {
      splashm += parseFloat(`${acceptedY.size}`);
   }
       let upgradeQ = 4.0;
       let selectr = String.fromCharCode(120,95,55,55,95,118,97,108,105,100,97,116,101,0);
       let filedk = String.fromCharCode(106,95,55,51,95,115,101,99,116,105,111,110,0);
      while (selectr.includes(`${upgradeQ}`)) {
         selectr += `${parseInt(`${upgradeQ}`) >> (Math.min(selectr.length, 3))}`;
         break;
      }
      if (filedk.length <= 4) {
         selectr += `${selectr.length}`;
      }
      heartL *= parseFloat(`${parseInt(`${heartL}`)}`);
   while (acceptedY[`${splashm}`] != null) {
      splashm /= Math.max(parseFloat(`${transfern.length}`), 4);
      break;
   }
       let photoI = String.fromCharCode(119,95,56,53,95,112,111,119,101,114,102,117,108,0);
         photoI = `${2 - photoI.length}`;
         photoI += "3";
         photoI = `${photoI.length}`;
      acceptedY[`${transfern.length}`] = 1 * transfern.length;
   if (!regengs) {
      regengs = (51 >= ((!regengs ? emojiq.length : 51) / (Math.max(8, emojiq.length))));
   }
      heartL += parseFloat(`${2 >> (Math.min(5, transfern.length))}`);
      heartL *= (parseFloat(`${parseInt(`${heartL}`) % (Math.max(8, (regengs ? 2 : 5)))}`));
   do {
       let clearb = 4;
          let bootsplashW = 0;
          let league4 = String.fromCharCode(97,118,115,115,95,114,95,51,50,0);
         clearb %= Math.max(4, 2 >> (Math.min(2, Math.abs(clearb))));
         bootsplashW *= 3 + bootsplashW;
         league4 = `${3 & league4.length}`;
          let subs1 = String.fromCharCode(117,95,55,49,95,100,121,108,105,98,115,0);
         clearb += subs1.length;
          let gray9 = 3.0;
         clearb ^= clearb >> (Math.min(Math.abs(parseInt(`${gray9}`)), 4));
      regengs = splashm < 93.33;
      if (regengs ? !regengs : regengs) {
         break;
      }
   } while ((regengs ? !regengs : regengs) && (!regengs));
   do {
      regengs = navigation1 || acceptedY.size <= 58;
      if (regengs ? !regengs : regengs) {
         break;
      }
   } while ((regengs ? !regengs : regengs) && (!regengs));
   if (4 < (acceptedY.size + streaming3.length) || 3 < (streaming3.length + 4)) {
      streaming3.push(emojiq.length);
   }
   if (acceptedY.size <= emojiq.length) {
       let otheri = true;
       let acceptedE = 2.0;
      while (acceptedE < 2.79) {
         otheri = !otheri;
         break;
      }
       let moreC = false;
         otheri = acceptedE > 63.24;
          let controlsS = String.fromCharCode(115,112,108,105,116,115,95,50,95,50,48,0);
         otheri = !otheri;
         controlsS += `${2 ^ controlsS.length}`;
         moreC = !moreC;
         acceptedE += (parseFloat(`${2 - (moreC ? 3 : 4)}`));
      emojiq += "2";
   }
   if (3 < transfern.length) {
      gifty = transfern.length >= 30 && !gifty;
   }

      Animated.parallel([inOpacity(), inRight()]).start();
   if ((5.99 + heartL) <= 3.1 && 5.99 <= (parseFloat(`${acceptedY.size}`) + heartL)) {
      heartL -= (parseFloat(`${(gifty ? 4 : 3) - 1}`));
   }
   while (!navigation1) {
      navigation1 = parseInt(`${heartL}`) <= emojiw.length;
      break;
   }
       let xvodK = String.fromCharCode(101,95,52,57,95,101,110,116,105,114,101,108,121,0);
       let pausel = [199, 255];
       let step9 = [584, 370];
         step9 = [pausel.length * 3];
       let tick7 = 1;
      for (let d = 0; d < 3; d++) {
         tick7 ^= pausel.length;
      }
      if ((xvodK.length >> (Math.min(Math.abs(2), 1))) < 5) {
          let tumbnaill = [785, 427, 912];
          let d_center9 = String.fromCharCode(97,117,120,105,108,105,97,114,121,95,97,95,55,48,0);
          let weibon = new Map([[String.fromCharCode(109,97,112,112,97,98,108,101,95,57,95,55,56,0),404], [String.fromCharCode(118,97,99,117,117,109,95,121,95,52,53,0),125]]);
         xvodK = `${step9.length | pausel.length}`;
         tumbnaill.push((String.fromCharCode(53,0) == d_center9 ? d_center9.length : weibon.size));
         weibon = new Map([[`${tumbnaill.length}`, tumbnaill.length - d_center9.length]]);
      }
      do {
          let paget = new Map([[String.fromCharCode(103,95,54,55,95,115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,0),String.fromCharCode(107,95,55,48,95,109,97,100,101,98,121,0)], [String.fromCharCode(117,95,50,50,95,114,101,102,101,114,114,97,108,0),String.fromCharCode(120,112,114,118,95,122,95,55,49,0)]]);
          let t_count4 = String.fromCharCode(107,95,52,53,95,98,111,116,116,108,101,110,101,99,107,0);
          let unreadc = 1.0;
         pausel.push((String.fromCharCode(99,0) == xvodK ? pausel.length : xvodK.length));
         paget = new Map([[t_count4, t_count4.length]]);
         unreadc += 1 >> (Math.min(2, Math.abs(paget.size)));
         if (226602 == pausel.length) {
            break;
         }
      } while ((3 >= (pausel.length ^ xvodK.length)) && (226602 == pausel.length));
      if ((step9.length << (Math.min(Math.abs(1), 2))) < 5 || (step9.length << (Math.min(pausel.length, 1))) < 1) {
          let emojiU = 3.0;
          let floatingV = 1.0;
          let guidee = 1.0;
          let miniT = 2;
          let settingsV = 4;
         step9 = [pausel.length];
         emojiU /= Math.max(3, parseFloat(`${settingsV}`));
         floatingV -= 3 + parseInt(`${floatingV}`);
         guidee += parseFloat(`${miniT << (Math.min(Math.abs(parseInt(`${floatingV}`)), 1))}`);
         miniT /= Math.max(2, 2);
         settingsV >>= Math.min(Math.abs(parseInt(`${emojiU}`)), 3);
      }
      do {
         pausel.push(pausel.length);
         if (3258557 == pausel.length) {
            break;
         }
      } while ((1 < (step9.length & pausel.length)) && (3258557 == pausel.length));
      if ((pausel.length >> (Math.min(xvodK.length, 5))) >= 5 || 5 >= (pausel.length >> (Math.min(xvodK.length, 2)))) {
         pausel.push(xvodK.length);
      }
      do {
          let bingC = String.fromCharCode(104,95,53,95,116,104,114,101,97,100,115,108,105,99,101,0);
          let skipC = [580, 756];
          let temp3 = 3.0;
          let more8 = false;
          let policyj = new Map([[String.fromCharCode(114,117,108,101,98,111,111,107,95,106,95,56,54,0),String.fromCharCode(108,95,54,49,95,112,97,103,101,115,101,101,107,0)], [String.fromCharCode(120,95,52,54,95,114,119,103,116,0),String.fromCharCode(109,98,115,116,114,105,110,103,95,51,95,49,53,0)], [String.fromCharCode(99,95,50,48,95,101,110,117,109,101,114,97,116,105,111,110,0),String.fromCharCode(103,101,110,99,98,95,112,95,52,0)]]);
         tick7 -= 1;
         bingC = `${2 ^ bingC.length}`;
         skipC.push(policyj.size);
         temp3 *= 3;
         more8 = skipC.length >= 16;
         policyj = new Map([[`${more8}`, (bingC == String.fromCharCode(80,0) ? bingC.length : (more8 ? 5 : 3))]]);
         if (tick7 == 3243180) {
            break;
         }
      } while ((3 < (1 ^ tick7) || 1 < (pausel.length ^ tick7)) && (tick7 == 3243180));
      transfern.push(2);
   do {
      splashm /= Math.max(parseFloat(`${emojiw.length >> (Math.min(Math.abs(3), 3))}`), 4);
      if (32446.0 == splashm) {
         break;
      }
   } while ((32446.0 == splashm) && ((splashm + 4.36) >= 3.1 && (acceptedY.size + 1) >= 4));
   if (5 == (1 % (Math.max(10, emojiw.length))) && !gifty) {
      gifty = ((streaming3.length + (gifty ? streaming3.length : 32)) > 32);
   }
      transfern.push(3 - streaming3.length);
   while ((1 - emojiq.length) > 3) {
       let emojiu = [748, 148];
       let roboto1 = 1;
          let singleL = new Map([[String.fromCharCode(116,111,107,104,122,95,116,95,52,54,0),938], [String.fromCharCode(104,95,56,52,95,108,105,98,97,118,100,101,118,105,99,101,0),429], [String.fromCharCode(98,117,108,108,101,116,115,95,98,95,50,51,0),991]]);
          let buttonx = 1.0;
         emojiu = [roboto1 >> (Math.min(4, Math.abs(2)))];
         singleL[`${buttonx}`] = parseInt(`${buttonx}`) / 3;
      do {
          let progress6 = String.fromCharCode(109,95,55,53,95,106,100,115,97,109,112,108,101,0);
          let chinaq = String.fromCharCode(119,95,57,49,95,116,119,111,119,97,121,0);
          let forwardl = true;
         emojiu.push(((forwardl ? 1 : 2)));
         progress6 = `${1 & progress6.length}`;
         chinaq += `${(String.fromCharCode(109,0) == chinaq ? chinaq.length : progress6.length)}`;
         forwardl = chinaq.length >= 12;
         if (2344944 == emojiu.length) {
            break;
         }
      } while ((2344944 == emojiu.length) && ((roboto1 & emojiu.length) == 2 && (roboto1 & 2) == 5));
          let submity = String.fromCharCode(97,99,116,105,118,97,116,101,95,114,95,50,51,0);
          let crownm = [141, 555];
          let clockg = String.fromCharCode(114,105,112,101,109,100,95,53,95,55,50,0);
         emojiu = [1 ^ crownm.length];
         submity += `${(submity == String.fromCharCode(117,0) ? submity.length : clockg.length)}`;
         crownm.push(1 % (Math.max(8, clockg.length)));
          let page_ = String.fromCharCode(99,95,49,49,0);
          let condensedc = String.fromCharCode(121,95,56,50,95,117,110,109,105,120,0);
         emojiu = [2 ^ condensedc.length];
         page_ += `${(String.fromCharCode(49,0) == page_ ? page_.length : page_.length)}`;
         condensedc = `${page_.length / 1}`;
      do {
          let constantsL = 0;
          let refreshJ = String.fromCharCode(100,114,97,119,103,114,105,100,95,112,95,50,54,0);
          let usernameu = String.fromCharCode(103,95,53,54,95,118,115,117,98,113,0);
         emojiu = [3 << (Math.min(5, usernameu.length))];
         constantsL ^= refreshJ.length;
         refreshJ = `${constantsL / 2}`;
         usernameu = `${(String.fromCharCode(114,0) == refreshJ ? refreshJ.length : constantsL)}`;
         if (emojiu.length == 202084) {
            break;
         }
      } while ((emojiu.length == 202084) && (5 >= (roboto1 % (Math.max(emojiu.length, 4))) && (roboto1 % 5) >= 1));
      do {
          let morem = false;
          let logoZ = new Map([[String.fromCharCode(105,110,116,101,114,102,114,97,109,101,95,50,95,55,0),false ], [String.fromCharCode(108,97,98,101,108,95,48,95,55,52,0),true ]]);
          let teamB = String.fromCharCode(113,95,49,95,114,111,116,111,0);
         emojiu = [teamB.length];
         morem = !morem || logoZ.size == 66;
         logoZ[`${morem}`] = logoZ.size;
         teamB += `${(logoZ.size << (Math.min(3, Math.abs((morem ? 3 : 3)))))}`;
         if (emojiu.length == 3668098) {
            break;
         }
      } while ((emojiu.length == 3668098) && ((emojiu.length >> (Math.min(Math.abs(4), 5))) >= 3 || 4 >= (emojiu.length >> (Math.min(4, Math.abs(roboto1))))));
      emojiq = `${parseInt(`${heartL}`) / 3}`;
      break;
   }
   if (5 == (emojiw.length ^ streaming3.length) || (emojiw.length ^ 5) == 3) {
      emojiw = [((navigation1 ? 2 : 2) + (gifty ? 5 : 2))];
   }
   do {
       let home_ = String.fromCharCode(97,95,55,54,95,97,100,100,105,0);
      while (!home_.includes(home_)) {
          let backwardG = [681, 69];
          let injury1 = false;
          let apps5 = 3;
          let switch_fwu = 0.0;
          let arrowD = true;
         home_ = `${(String.fromCharCode(118,0) == home_ ? parseInt(`${switch_fwu}`) : home_.length)}`;
         backwardG.push(((injury1 ? 5 : 4) % (Math.max(2, 2))));
         injury1 = apps5 <= 30;
         apps5 |= apps5 * 2;
         switch_fwu += parseFloat(`${2}`);
         arrowD = !injury1;
         break;
      }
      do {
          let danger3 = [568, 747];
          let mutedL = String.fromCharCode(112,111,111,108,115,95,122,95,49,57,0);
         home_ = `${(mutedL == String.fromCharCode(119,0) ? mutedL.length : home_.length)}`;
         danger3 = [danger3.length | 2];
         if (home_.length == 600515) {
            break;
         }
      } while ((home_ != home_) && (home_.length == 600515));
          let selected7 = String.fromCharCode(118,95,50,51,95,109,105,114,114,111,114,105,110,103,0);
          let promotion7 = String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,115,95,49,95,52,0);
          let downloadedN = false;
         home_ = `${home_.length}`;
         selected7 += `${promotion7.length}`;
         promotion7 += `${selected7.length}`;
         downloadedN = (selected7.length * promotion7.length) == 53;
      transfern = [transfern.length / (Math.max(8, streaming3.length))];
      if (4426688 == transfern.length) {
         break;
      }
   } while (((4 / (Math.max(5, emojiq.length))) >= 5 || (4 / (Math.max(3, emojiq.length))) >= 5) && (4426688 == transfern.length));
   while (heartL >= parseFloat(`${emojiw.length}`)) {
      emojiw = [3 % (Math.max(parseInt(`${heartL}`), 4))];
      break;
   }
      acceptedY[`${gifty}`] = streaming3.length;
   do {
      gifty = !gifty;
      if (gifty ? !gifty : gifty) {
         break;
      }
   } while ((transfern.length < 1) && (gifty ? !gifty : gifty));
      transfern = [((regengs ? 5 : 2) / 1)];
       let kickR = String.fromCharCode(103,95,49,95,116,105,109,101,105,110,102,111,0);
      for (let m = 0; m < 1; m++) {
         kickR = `${kickR.length}`;
      }
         kickR = `${kickR.length & 3}`;
       let refreshf = false;
       let analyticse = false;
      emojiq = `${streaming3.length}`;
       let background8 = 5;
       let tooltipsZ = 5.0;
       let promotiona = [698, 989];
      while ((tooltipsZ / 4.68) < 5.82) {
         tooltipsZ *= parseInt(`${tooltipsZ}`);
         break;
      }
      if ((tooltipsZ * promotiona.length) < 1.37 && 5 < (1 ^ promotiona.length)) {
         tooltipsZ -= background8;
      }
      do {
         background8 /= Math.max(3, parseInt(`${tooltipsZ}`) % (Math.max(5, promotiona.length)));
         if (474679 == background8) {
            break;
         }
      } while ((474679 == background8) && (1.45 == (tooltipsZ + 2.78) || (background8 - 1) == 2));
         tooltipsZ /= Math.max(2, 2);
          let controlsb = 5;
          let flyero = 0.0;
         promotiona.push(promotiona.length);
         controlsb >>= Math.min(Math.abs(controlsb), 2);
         flyero += 3 - controlsb;
       let untick0 = String.fromCharCode(109,97,112,112,97,98,108,101,95,111,95,57,48,0);
      if (promotiona.length > background8) {
         background8 /= Math.max(4, background8);
      }
          let u_unlockw = 3.0;
          let commentI = 3;
          let viewerq = 3.0;
         tooltipsZ /= Math.max(3, 3);
         u_unlockw /= Math.max(1, 3);
         commentI *= 2;
         viewerq -= commentI;
          let miniV = String.fromCharCode(113,95,56,52,95,101,110,99,108,111,115,105,110,103,0);
          let smalld = true;
         tooltipsZ += promotiona.length;
         miniV += `${(miniV.length >> (Math.min(5, Math.abs((smalld ? 2 : 1)))))}`;
         smalld = !smalld || miniV.length > 28;
      acceptedY[`${regengs}`] = 2 + parseInt(`${heartL}`);

    } else {
      Animated.parallel([outOpacity(), outRight()]).start(() => {
        dispatch(updateVideoPropPipe([VideoPlayerActions.hideControl]));
      });
    }
  }, [display]);

  const onPress = () => {
       let skip_ = String.fromCharCode(112,101,114,109,95,107,95,54,57,0);
    let downloaderO = 2.0;
    let halfo = 4.0;
    let langl = false;
    let episodes3 = 3;
    let actionsP = String.fromCharCode(120,95,50,95,112,114,105,118,107,101,121,0);
    let shareh = String.fromCharCode(109,95,56,55,95,115,116,97,116,105,111,110,97,114,121,0);
    let checkboxI = String.fromCharCode(98,101,99,111,109,101,95,101,95,53,53,0);
    let r_centerx = String.fromCharCode(102,95,57,95,101,105,112,118,0);
    let upgradeB = String.fromCharCode(119,95,50,53,95,109,118,100,97,116,97,0);
    let profile0 = String.fromCharCode(113,95,56,51,95,102,114,97,103,109,101,110,116,0);
    let hejiB = true;
    let friendst = String.fromCharCode(105,95,54,56,95,103,101,110,115,0);
    let selectedo = String.fromCharCode(97,112,116,120,95,107,95,50,50,0);
    let downP = 1.0;
    let sliderQ = 0.0;
    let updatesh = String.fromCharCode(102,95,52,56,95,116,101,109,112,108,97,116,101,100,0);
      episodes3 >>= Math.min(2, Math.abs(((langl ? 5 : 3))));
      actionsP = `${((hejiB ? 1 : 2) & 2)}`;
   while (downloaderO <= episodes3) {
      episodes3 *= (String.fromCharCode(69,0) == checkboxI ? checkboxI.length : profile0.length);
      break;
   }
       let singleZ = String.fromCharCode(116,95,53,57,95,112,97,105,114,105,110,103,0);
       let gesture0 = String.fromCharCode(102,102,109,101,116,97,95,106,95,53,52,0);
      if (singleZ.endsWith(`${gesture0.length}`)) {
          let cornera = 4.0;
          let otherr = String.fromCharCode(122,95,55,57,95,117,114,118,101,0);
          let stationsm = String.fromCharCode(112,95,51,51,95,118,111,105,112,0);
         singleZ += `${(stationsm == String.fromCharCode(103,0) ? gesture0.length : stationsm.length)}`;
         cornera -= parseFloat(`${otherr.length}`);
         otherr += `${parseInt(`${cornera}`)}`;
      }
          let modules = new Map([[String.fromCharCode(116,101,97,114,100,111,119,110,95,99,95,54,51,0),true ], [String.fromCharCode(97,99,99,101,110,116,95,97,95,56,0),false ]]);
         singleZ += `${singleZ.length}`;
         modules[`${modules.size}`] = 1;
      for (let o = 0; o < 3; o++) {
         gesture0 = `${singleZ.length}`;
      }
       let downloaderb = 4.0;
       let linke = 4.0;
         downloaderb -= parseFloat(`${parseInt(`${downloaderb}`)}`);
      while (downloaderb > parseFloat(`${gesture0.length}`)) {
         gesture0 = `${(String.fromCharCode(99,0) == gesture0 ? parseInt(`${linke}`) : gesture0.length)}`;
         break;
      }
      shareh += `${parseInt(`${halfo}`) * 1}`;
   for (let q = 0; q < 3; q++) {
      downloaderO *= 2;
   }
      downloaderO *= (String.fromCharCode(55,0) == profile0 ? actionsP.length : profile0.length);
      actionsP += `${r_centerx.length % (Math.max(3, 7))}`;
   while (3.71 >= halfo) {
      actionsP = `${3 | shareh.length}`;
      break;
   }
   while (downloaderO < 4.33) {
      downloaderO /= Math.max(((langl ? 1 : 5) | 3), 4);
      break;
   }
   if ((episodes3 & upgradeB.length) >= 4) {
      episodes3 &= 3;
   }
   for (let s = 0; s < 2; s++) {
      skip_ += "3";
   }
   while (profile0.length < checkboxI.length) {
       let with_f3 = String.fromCharCode(121,95,50,55,95,99,97,112,105,116,97,108,115,0);
       let link2 = [171, 692, 730];
       let default_z5U = 3.0;
      do {
         default_z5U *= link2.length;
         if (3422725.0 == default_z5U) {
            break;
         }
      } while ((3422725.0 == default_z5U) && (2.87 >= (link2.length + default_z5U) && (5 + link2.length) >= 1));
          let sports2 = new Map([[String.fromCharCode(108,95,50,56,95,112,97,114,115,101,117,116,105,108,115,0),true ], [String.fromCharCode(122,95,50,53,95,118,105,101,119,115,0),true ]]);
          let alertH = String.fromCharCode(112,101,114,115,105,115,116,101,110,116,95,105,95,52,0);
         default_z5U += link2.length << (Math.min(with_f3.length, 2));
         sports2 = new Map([[`${sports2.size}`, alertH.length - 3]]);
         alertH = `${2 & sports2.size}`;
          let episodeX = false;
          let main_pI = true;
         default_z5U *= 1 * parseInt(`${default_z5U}`);
         episodeX = !main_pI;
         main_pI = !main_pI || episodeX;
       let targetB = String.fromCharCode(114,101,115,116,114,105,99,116,105,111,110,95,109,95,55,56,0);
       let linkP = String.fromCharCode(110,111,110,110,117,108,108,98,117,102,102,101,114,95,48,95,57,57,0);
      do {
          let weiboP = String.fromCharCode(115,117,101,108,111,95,51,95,51,48,0);
          let privilege4 = String.fromCharCode(112,95,49,52,95,115,116,114,114,101,115,101,116,0);
          let historyd = new Map([[String.fromCharCode(108,95,56,57,95,114,101,99,111,110,110,101,99,116,105,110,103,0),186], [String.fromCharCode(106,95,53,54,95,112,97,115,115,102,0),77], [String.fromCharCode(105,110,118,101,114,115,101,100,95,122,95,50,55,0),115]]);
         default_z5U /= Math.max((with_f3 == String.fromCharCode(114,0) ? historyd.size : with_f3.length), 1);
         weiboP += `${privilege4.length | 3}`;
         privilege4 = `${privilege4.length & 3}`;
         historyd[weiboP] = 3;
         if (default_z5U == 3667150.0) {
            break;
         }
      } while ((default_z5U == 3667150.0) && ((parseInt(`${default_z5U}`) / (Math.max(7, link2.length))) == 3));
      if (linkP.length <= with_f3.length) {
         linkP = `${linkP.length % (Math.max(8, targetB.length))}`;
      }
         link2.push(with_f3.length);
         targetB = `${targetB.length}`;
      for (let c = 0; c < 1; c++) {
         targetB = `${(String.fromCharCode(48,0) == targetB ? targetB.length : parseInt(`${default_z5U}`))}`;
      }
      profile0 = `${with_f3.length / 1}`;
      break;
   }
       let injury9 = 1.0;
       let moon3 = false;
       let g_playerk = new Map([[String.fromCharCode(122,95,53,55,95,105,110,116,114,97,120,109,98,121,0),902], [String.fromCharCode(111,110,116,97,99,116,115,95,50,95,50,48,0),992], [String.fromCharCode(100,105,118,95,122,95,51,48,0),942]]);
       let untickm = 0.0;
          let applei = String.fromCharCode(115,95,56,52,95,112,111,108,101,0);
          let bellI = String.fromCharCode(99,104,97,110,103,101,115,101,116,95,54,95,57,48,0);
          let faviconY = false;
         moon3 = applei.length > 4;
         applei += `${((faviconY ? 2 : 2) | bellI.length)}`;
         bellI = "1";
          let brightnessb = 3.0;
          let windc = String.fromCharCode(121,95,54,95,97,110,110,101,120,98,109,112,0);
         g_playerk[`${brightnessb}`] = 3 / (Math.max(parseInt(`${brightnessb}`), 8));
         windc = "2";
          let notificationW = false;
          let field3 = 5;
         g_playerk[`${field3}`] = g_playerk.size;
         notificationW = !notificationW;
         field3 >>= Math.min(5, Math.abs((3 & (notificationW ? 1 : 3))));
         g_playerk = new Map([[`${moon3}`, (parseInt(`${injury9}`) * (moon3 ? 3 : 2))]]);
      do {
         g_playerk = new Map([[`${g_playerk.size}`, 1 >> (Math.min(4, Math.abs(g_playerk.size)))]]);
         if (1184397 == g_playerk.size) {
            break;
         }
      } while ((1184397 == g_playerk.size) && ((2 & g_playerk.size) >= 3 || !moon3));
      do {
         g_playerk = new Map([[`${moon3}`, parseInt(`${injury9}`) | 3]]);
         if (g_playerk.size == 1816868) {
            break;
         }
      } while ((!moon3) && (g_playerk.size == 1816868));
          let readF = false;
          let short_2ti = new Map([[String.fromCharCode(105,95,53,48,95,118,115,110,112,114,105,110,116,102,0),778], [String.fromCharCode(110,95,54,49,95,112,108,97,121,101,100,0),656], [String.fromCharCode(116,111,115,115,95,114,95,57,55,0),886]]);
         g_playerk = new Map([[`${g_playerk.size}`, g_playerk.size]]);
         readF = !readF;
         short_2ti = new Map([[`${short_2ti.size}`, ((readF ? 3 : 4) >> (Math.min(Math.abs(3), 5)))]]);
       let borderlessc = [467, 809];
      downloaderO *= parseInt(`${injury9}`) >> (Math.min(Math.abs(2), 2));

    

   while (actionsP.startsWith(`${downloaderO}`)) {
      actionsP = `${parseInt(`${downloaderO}`) & 2}`;
      break;
   }
   while (1 <= friendst.length) {
      friendst = `${checkboxI.length + 2}`;
      break;
   }
      downloaderO *= 2;
      langl = 73 > profile0.length;
       let album6 = 5.0;
         album6 -= parseInt(`${album6}`) ^ 2;
      do {
          let awayj = 5.0;
          let short_0T = [146, 664, 568];
         album6 *= 3;
         awayj *= parseFloat(`${short_0T.length}`);
         short_0T.push(short_0T.length);
         if (album6 == 1100108.0) {
            break;
         }
      } while (((album6 + album6) > 5.15) && (album6 == 1100108.0));
      for (let f = 0; f < 3; f++) {
          let placeholderA = String.fromCharCode(99,95,52,52,95,115,112,108,105,110,101,0);
          let topicq = 3.0;
         album6 /= Math.max(2, parseInt(`${topicq}`) * placeholderA.length);
      }
      langl = hejiB;
      episodes3 &= checkboxI.length % (Math.max(1, 6));
      checkboxI += `${parseInt(`${downP}`) | parseInt(`${halfo}`)}`;
   do {
      episodes3 ^= 3;
      if (3861177 == episodes3) {
         break;
      }
   } while ((4.44 <= (downP + 4.84)) && (3861177 == episodes3));
   if (selectedo.includes(`${r_centerx.length}`)) {
       let upgradeg = String.fromCharCode(97,95,49,56,95,115,117,98,116,108,101,0);
       let actionsU = 5.0;
      for (let s = 0; s < 3; s++) {
          let paginationc = 2;
          let rights = new Map([[String.fromCharCode(106,95,51,51,95,117,116,99,116,105,109,101,0),364], [String.fromCharCode(117,110,122,105,112,95,104,95,49,55,0),783], [String.fromCharCode(105,110,100,101,102,105,110,105,116,101,108,121,95,102,95,56,49,0),781]]);
          let cornerr = String.fromCharCode(113,95,52,49,95,103,114,111,117,112,101,100,0);
          let entryI = false;
          let expiredk = new Map([[String.fromCharCode(101,95,52,52,95,115,117,112,101,114,120,115,97,105,0),326], [String.fromCharCode(116,114,117,101,109,111,116,105,111,110,95,101,95,52,50,0),721]]);
         upgradeg = "1";
         paginationc <<= Math.min(4, Math.abs(2));
         rights = new Map([[`${expiredk.size}`, expiredk.size]]);
         cornerr += `${cornerr.length}`;
         entryI = !entryI;
      }
      do {
         actionsU -= parseInt(`${actionsU}`) / 2;
         if (actionsU == 3671443.0) {
            break;
         }
      } while ((actionsU == 3671443.0) && (3.16 < (actionsU / 5.17)));
         actionsU += parseInt(`${actionsU}`) + 2;
      do {
         upgradeg += `${parseInt(`${actionsU}`)}`;
         if (String.fromCharCode(122,121,122,114,48,115,112,0) == upgradeg) {
            break;
         }
      } while ((String.fromCharCode(122,121,122,114,48,115,112,0) == upgradeg) && (!upgradeg.includes(`${actionsU}`)));
       let upgradee = [String.fromCharCode(97,95,51,55,95,119,105,108,100,99,97,114,100,0), String.fromCharCode(113,95,55,56,95,101,110,99,111,100,101,100,115,116,114,101,97,109,0)];
      if (!upgradee.includes(actionsU)) {
          let teamO = String.fromCharCode(121,100,97,121,95,113,95,53,0);
          let placeholderb = String.fromCharCode(101,95,55,56,95,99,97,117,115,101,0);
          let minivod8 = 1.0;
          let dataT = 1.0;
         actionsU /= Math.max(3, (upgradeg == String.fromCharCode(109,0) ? upgradeg.length : parseInt(`${minivod8}`)));
         teamO = `${(String.fromCharCode(82,0) == placeholderb ? placeholderb.length : parseInt(`${dataT}`))}`;
         minivod8 -= parseFloat(`${parseInt(`${dataT}`)}`);
      }
      r_centerx = `${((langl ? 4 : 2) | profile0.length)}`;
   }
   for (let p = 0; p < 3; p++) {
      skip_ = `${(2 & (langl ? 2 : 4))}`;
   }
       let borderlessi = [666, 736, 707];
       let mini9 = String.fromCharCode(115,116,114,117,99,116,117,114,97,108,95,115,95,54,51,0);
         mini9 += `${mini9.length}`;
         borderlessi.push(mini9.length / 1);
         borderlessi = [borderlessi.length * mini9.length];
      do {
         borderlessi = [borderlessi.length ^ mini9.length];
         if (2069107 == borderlessi.length) {
            break;
         }
      } while ((2069107 == borderlessi.length) && (1 == (5 & mini9.length) && (5 & mini9.length) == 4));
         mini9 = `${1 - borderlessi.length}`;
       let robotof = true;
       let indexf = false;
      selectedo = `${((langl ? 4 : 5))}`;
      downP /= Math.max((parseFloat(`${(langl ? 1 : 1) | parseInt(`${halfo}`)}`)), 1);
   if (profile0.length < actionsP.length) {
      actionsP = "3";
   }
    return false;
      hejiB = 74 <= checkboxI.length;
   do {
      shareh = `${parseInt(`${halfo}`) - 2}`;
      if (shareh == String.fromCharCode(117,109,111,0)) {
         break;
      }
   } while ((shareh == String.fromCharCode(117,109,111,0)) && (actionsP.length < 3));
   if (1 <= checkboxI.length) {
      checkboxI = "3";
   }
   if (3.24 > downloaderO) {
      checkboxI += `${selectedo.length}`;
   }
   while (downloaderO == 3.83) {
      downloaderO /= Math.max(parseInt(`${halfo}`) >> (Math.min(5, Math.abs(2))), 5);
      break;
   }
   if (selectedo.length < 2) {
      halfo += (friendst == String.fromCharCode(52,0) ? friendst.length : episodes3);
   }
   for (let n = 0; n < 3; n++) {
      actionsP = `${profile0.length}`;
   }
   for (let m = 0; m < 2; m++) {
      hejiB = selectedo == String.fromCharCode(82,0);
   }
   do {
       let anytimeq = 5.0;
       let countdown6 = String.fromCharCode(97,97,99,100,101,99,95,119,95,54,54,0);
       let success5 = String.fromCharCode(97,99,99,101,112,116,97,98,108,101,95,54,95,48,0);
       let pressurem = true;
       let statsD = [String.fromCharCode(111,100,100,97,118,103,95,119,95,49,48,48,0), String.fromCharCode(105,95,52,55,95,115,99,97,108,101,100,99,111,110,118,111,108,118,101,0)];
      if (4.29 < (4.60 - anytimeq) || 2 < (parseInt(`${anytimeq}`) - 5)) {
         countdown6 += "1";
      }
      do {
         pressurem = 36.77 < anytimeq;
         if (pressurem ? !pressurem : pressurem) {
            break;
         }
      } while ((!pressurem) && (pressurem ? !pressurem : pressurem));
      while (countdown6 != String.fromCharCode(89,0) || success5 != String.fromCharCode(73,0)) {
          let spec7 = String.fromCharCode(107,95,49,48,48,95,100,105,103,101,115,116,98,121,110,97,109,101,0);
          let ticked1 = false;
         countdown6 = `${parseInt(`${anytimeq}`) % (Math.max(spec7.length, 4))}`;
         spec7 += `${((ticked1 ? 4 : 5) << (Math.min(1, Math.abs(3))))}`;
         break;
      }
          let topicqo = [910, 454];
          let cross_ = false;
         countdown6 += `${(success5.length / (Math.max(7, (cross_ ? 4 : 5))))}`;
         topicqo.push(topicqo.length | 3);
         cross_ = (topicqo.length ^ topicqo.length) > 2;
         countdown6 = `${(success5.length | (pressurem ? 2 : 4))}`;
      do {
         countdown6 = `${success5.length}`;
         if (String.fromCharCode(112,102,110,95,111,120,101,99,0) == countdown6) {
            break;
         }
      } while ((countdown6.length >= 3) && (String.fromCharCode(112,102,110,95,111,120,101,99,0) == countdown6));
      if (success5.length <= 1) {
         success5 = `${2 % (Math.max(6, parseInt(`${anytimeq}`)))}`;
      }
       let crossF = [314, 792, 355];
       let paginationi = [90, 752];
         success5 = `${success5.length >> (Math.min(4, crossF.length))}`;
      while (parseInt(`${anytimeq}`) >= countdown6.length) {
         countdown6 = `${paginationi.length * 1}`;
         break;
      }
      if (!pressurem) {
         statsD = [3 + parseInt(`${anytimeq}`)];
      }
      while (statsD.length >= 1 || 3 >= (1 ^ statsD.length)) {
         statsD.push(2 - crossF.length);
         break;
      }
          let clockv = [3, 251];
          let notificationB = String.fromCharCode(100,101,115,99,114,95,121,95,54,48,0);
          let acceptedK = 0.0;
         anytimeq *= parseFloat(`${crossF.length}`);
         clockv.push(notificationB.length / 1);
         notificationB += `${(String.fromCharCode(120,0) == notificationB ? notificationB.length : clockv.length)}`;
         acceptedK += parseFloat(`${parseInt(`${acceptedK}`) | 3}`);
      while ((statsD.length + 4) < 1 || (statsD.length + crossF.length) < 4) {
          let minimizeJ = 3.0;
          let tumbnailP = [224, 999, 977];
          let backward4 = String.fromCharCode(116,104,114,111,117,103,104,95,106,95,48,0);
          let eighteenC = new Map([[String.fromCharCode(110,95,54,95,109,111,117,116,104,0),String.fromCharCode(97,112,105,115,95,111,95,56,0)], [String.fromCharCode(101,95,56,51,95,109,105,110,0),String.fromCharCode(110,95,51,55,95,113,117,101,114,121,0)]]);
          let rightP = new Map([[String.fromCharCode(120,95,56,55,95,115,111,108,117,116,105,111,110,0),String.fromCharCode(114,101,115,112,111,110,100,115,95,52,95,54,54,0)], [String.fromCharCode(110,95,56,49,95,117,110,119,114,105,116,97,98,108,101,0),String.fromCharCode(112,105,120,109,97,112,95,100,95,54,0)]]);
         crossF = [tumbnailP.length % (Math.max(2, parseInt(`${minimizeJ}`)))];
         minimizeJ -= 3;
         tumbnailP.push(eighteenC.size << (Math.min(2, Math.abs(rightP.size))));
         backward4 += `${3 / (Math.max(9, rightP.size))}`;
         eighteenC = new Map([[`${eighteenC.size}`, backward4.length]]);
         break;
      }
      while (4 > success5.length) {
          let textn = String.fromCharCode(120,95,53,52,95,103,110,111,115,105,115,0);
          let servicej = String.fromCharCode(100,114,97,119,116,101,120,116,95,104,95,55,55,0);
          let unreadt = true;
         success5 += "1";
         textn = `${servicej.length / 3}`;
         servicej += `${servicej.length & 3}`;
         unreadt = (((unreadt ? servicej.length : 53) % (Math.max(1, servicej.length))) < 53);
         break;
      }
      shareh += `${(String.fromCharCode(81,0) == r_centerx ? r_centerx.length : countdown6.length)}`;
      if (shareh.length == 1468154) {
         break;
      }
   } while ((shareh.length == 1468154) && (shareh.endsWith(`${langl}`)));
   for (let j = 0; j < 3; j++) {
      downP += parseFloat(`${3 * profile0.length}`);
   }
      downloaderO -= 2;
   while (langl) {
      langl = skip_.length <= 8;
      break;
   }
   for (let v = 0; v < 2; v++) {
      checkboxI = `${shareh.length}`;
   }

  };

  const onLayout = e => {
       let close2 = 5.0;
    let formQ = 3.0;
    let whatsappK = String.fromCharCode(103,95,52,95,100,111,119,110,103,114,97,100,101,0);
    let malaysiah = 5.0;
    let verticals = new Map([[String.fromCharCode(115,116,117,102,102,110,100,95,114,95,55,49,0),673], [String.fromCharCode(115,116,105,114,110,103,95,97,95,53,52,0),156]]);
    let r_viewq = [580, 742];
    let shootD = String.fromCharCode(98,97,110,100,119,105,100,116,104,95,101,95,48,0);
    let clubt = String.fromCharCode(109,97,105,110,110,101,116,115,95,50,95,49,50,0);
    let string8 = new Map([[String.fromCharCode(115,95,53,95,104,119,114,97,110,100,0),723], [String.fromCharCode(117,110,105,110,105,116,95,119,95,57,52,0),681]]);
    let profileL = 4.0;
   do {
      malaysiah *= parseInt(`${formQ}`) * 2;
      if (malaysiah == 1241634.0) {
         break;
      }
   } while ((malaysiah == 1241634.0) && (3 > (verticals.size - 4)));
      whatsappK = "2";
       let updatesO = new Map([[String.fromCharCode(103,95,57,53,95,117,110,107,101,121,101,100,0),595], [String.fromCharCode(99,97,112,105,116,97,108,115,95,56,95,54,55,0),320]]);
       let entryt = String.fromCharCode(112,97,114,116,105,97,108,95,54,95,49,56,0);
       let borderlessC = 1;
      do {
         entryt += `${entryt.length << (Math.min(5, Math.abs(updatesO.size)))}`;
         if (String.fromCharCode(117,115,53,106,99,110,120,57,51,0) == entryt) {
            break;
         }
      } while ((String.fromCharCode(117,115,53,106,99,110,120,57,51,0) == entryt) && (2 == (updatesO.size ^ entryt.length)));
      do {
          let renewu = true;
          let taiwan0 = [240, 966];
          let handlern = 1.0;
         updatesO = new Map([[`${renewu}`, 1]]);
         taiwan0.push(taiwan0.length);
         handlern += parseFloat(`${3}`);
         if (4546120 == updatesO.size) {
            break;
         }
      } while ((4546120 == updatesO.size) && (entryt.length >= 5));
       let upgradeV = String.fromCharCode(99,111,110,116,105,110,117,97,108,95,116,95,56,48,0);
      for (let e = 0; e < 2; e++) {
         upgradeV += `${1 * borderlessC}`;
      }
          let nextC = String.fromCharCode(117,95,55,95,116,102,100,116,0);
          let halfD = 2.0;
          let detailA = String.fromCharCode(100,95,50,56,95,110,101,115,116,101,100,0);
         updatesO = new Map([[detailA, parseInt(`${halfD}`)]]);
         nextC = `${nextC.length}`;
         halfD -= 1;
         upgradeV += `${upgradeV.length}`;
         borderlessC >>= Math.min(Math.abs(3), 3);
      for (let k = 0; k < 2; k++) {
         upgradeV += `${updatesO.size | 2}`;
      }
       let apps3 = false;
      verticals = new Map([[`${updatesO.size}`, r_viewq.length]]);
      close2 /= Math.max(1 | clubt.length, 1);
   do {
      verticals = new Map([[`${formQ}`, parseInt(`${formQ}`) << (Math.min(3, Math.abs(1)))]]);
      if (verticals.size == 1399052) {
         break;
      }
   } while ((whatsappK.includes(`${verticals.size}`)) && (verticals.size == 1399052));
      malaysiah += 3;
   if (2.50 <= (2.88 - formQ) || 2.88 <= (formQ - malaysiah)) {
      malaysiah -= verticals.size;
   }

    

   if (2 > verticals.size) {
       let rewindm = new Map([[String.fromCharCode(111,95,52,54,95,115,104,97,112,101,115,0),String.fromCharCode(105,110,112,117,116,95,105,95,53,56,0)], [String.fromCharCode(119,95,55,56,95,116,114,97,110,115,108,97,116,105,111,110,115,0),String.fromCharCode(122,95,55,95,99,111,110,102,105,103,0)]]);
       let type_wt = [187, 215, 455];
       let photob = 2.0;
       let modalD = 3.0;
       let countrym = String.fromCharCode(113,95,54,55,95,112,114,101,115,117,109,101,0);
          let floating5 = String.fromCharCode(115,117,101,108,111,95,104,95,56,54,0);
          let rankj = 3;
          let plusC = String.fromCharCode(114,95,55,53,95,100,115,112,117,116,105,108,0);
         type_wt = [parseInt(`${photob}`)];
         floating5 = `${rankj}`;
         rankj /= Math.max(3, rankj);
         plusC += `${1 ^ plusC.length}`;
      for (let q = 0; q < 1; q++) {
         type_wt.push(type_wt.length);
      }
      do {
         photob *= parseFloat(`${2}`);
         if (photob == 2868636.0) {
            break;
         }
      } while ((photob == 2868636.0) && (modalD == photob));
          let delegate_9T = String.fromCharCode(104,95,55,48,95,109,117,108,116,105,112,108,101,120,101,100,0);
          let filledC = 2.0;
         photob *= parseFloat(`${parseInt(`${filledC}`) - parseInt(`${photob}`)}`);
         delegate_9T += `${delegate_9T.length}`;
         filledC -= parseFloat(`${delegate_9T.length}`);
          let fastT = String.fromCharCode(120,95,55,53,95,112,111,105,110,116,99,98,98,0);
          let handlerG = 1.0;
         type_wt = [type_wt.length / 1];
         fastT = `${fastT.length}`;
         handlerG -= (parseFloat(`${fastT == String.fromCharCode(90,0) ? fastT.length : parseInt(`${handlerG}`)}`));
          let combinedQ = 4.0;
          let pageY = [883, 624];
          let mutedl = String.fromCharCode(106,115,101,112,95,112,95,54,55,0);
         countrym += `${3 << (Math.min(4, type_wt.length))}`;
         combinedQ *= parseFloat(`${1 << (Math.min(2, mutedl.length))}`);
         pageY = [2];
         mutedl = `${parseInt(`${combinedQ}`) + pageY.length}`;
      if ((rewindm.size % 1) <= 5) {
         countrym += `${3 * type_wt.length}`;
      }
         countrym += `${type_wt.length ^ 2}`;
       let modelsx = String.fromCharCode(115,116,114,105,100,101,95,52,95,55,56,0);
       let mathj = String.fromCharCode(107,95,55,50,95,115,101,103,102,101,97,116,117,114,101,0);
      if (mathj == countrym) {
         countrym = `${modelsx.length - 2}`;
      }
          let acceptedI = 1.0;
          let renewC = 4;
         countrym = `${modelsx.length ^ parseInt(`${modalD}`)}`;
         acceptedI /= Math.max(parseInt(`${acceptedI}`) / 3, 3);
         renewC -= parseInt(`${acceptedI}`);
      if (mathj.length >= countrym.length) {
         mathj = `${rewindm.size}`;
      }
         rewindm[`${type_wt.length}`] = type_wt.length;
      for (let x = 0; x < 2; x++) {
         modelsx = `${2 * parseInt(`${photob}`)}`;
      }
      for (let t = 0; t < 1; t++) {
          let whitee = String.fromCharCode(115,95,57,54,95,114,101,110,100,105,116,105,111,110,0);
          let memberz = false;
          let navigationT = 5.0;
          let action6 = 1;
         modelsx += `${mathj.length | parseInt(`${navigationT}`)}`;
         whitee = `${action6}`;
         memberz = 85 == action6;
         navigationT *= parseFloat(`${2}`);
      }
      verticals = new Map([[`${rewindm.size}`, 3]]);
   }
      malaysiah -= verticals.size;
   do {
       let loadingk = [212, 614];
       let condensedx = String.fromCharCode(115,105,109,117,108,97,116,101,100,95,117,95,53,52,0);
       let dataH = 2.0;
       let moviesH = String.fromCharCode(107,95,50,53,95,117,114,118,101,0);
      while ((loadingk.length * parseInt(`${dataH}`)) < 2 || (3.83 * dataH) < 2.100) {
         dataH /= Math.max(moviesH.length, 5);
         break;
      }
       let checkbox4 = [228, 310];
         checkbox4 = [loadingk.length];
      while ((moviesH.length - 4) > 1) {
         moviesH = `${parseInt(`${dataH}`) >> (Math.min(loadingk.length, 1))}`;
         break;
      }
      while (2 <= (checkbox4.length * 2) || 2 <= (moviesH.length * checkbox4.length)) {
         checkbox4.push(condensedx.length & checkbox4.length);
         break;
      }
       let hongkongS = 0;
         checkbox4.push(1 >> (Math.min(4, moviesH.length)));
          let recommendation3 = new Map([[String.fromCharCode(116,114,97,110,95,53,95,55,52,0),false ], [String.fromCharCode(107,95,53,56,95,112,114,101,102,101,116,99,104,0),false ]]);
          let selectA = 2.0;
          let stationsG = 0;
         checkbox4 = [checkbox4.length];
         recommendation3 = new Map([[`${recommendation3.size}`, 2]]);
         selectA -= parseFloat(`${stationsG}`);
         stationsG |= recommendation3.size * 3;
      do {
         hongkongS |= moviesH.length + 2;
         if (1523255 == hongkongS) {
            break;
         }
      } while ((4 == hongkongS) && (1523255 == hongkongS));
      if ((dataH * hongkongS) <= 5.67 && 3 <= (1 >> (Math.min(3, Math.abs(hongkongS))))) {
         dataH /= Math.max(1, moviesH.length);
      }
      do {
          let middlewaref = 4;
          let halfO = String.fromCharCode(104,95,54,55,95,111,98,118,105,111,117,115,108,121,0);
         hongkongS += checkbox4.length - moviesH.length;
         middlewaref /= Math.max(3, middlewaref / 2);
         halfO += `${middlewaref}`;
         if (4786749 == hongkongS) {
            break;
         }
      } while (((condensedx.length - hongkongS) <= 3) && (4786749 == hongkongS));
         condensedx = "3";
      close2 *= parseInt(`${formQ}`) * 1;
      if (close2 == 3528901.0) {
         break;
      }
   } while ((formQ == close2) && (close2 == 3528901.0));
   for (let b = 0; b < 3; b++) {
      formQ /= Math.max(1, shootD.length);
   }
   while (!shootD.endsWith(`${malaysiah}`)) {
      malaysiah *= whatsappK.length;
      break;
   }
      whatsappK = `${shootD.length | 1}`;
      shootD = `${shootD.length}`;
    

      formQ /= Math.max(3, parseInt(`${malaysiah}`));
       let indicatorD = String.fromCharCode(97,95,52,57,95,117,110,99,104,101,99,107,101,100,0);
         indicatorD = "1";
      while (indicatorD.length < 3) {
         indicatorD += `${indicatorD.length * indicatorD.length}`;
         break;
      }
      while (1 >= indicatorD.length && 1 >= indicatorD.length) {
         indicatorD = `${2 / (Math.max(8, indicatorD.length))}`;
         break;
      }
      whatsappK = `${parseInt(`${close2}`)}`;
      whatsappK = `${parseInt(`${malaysiah}`) ^ whatsappK.length}`;
      clubt = "2";
   do {
       let nterstitialX = [122, 52];
       let playA = 1;
      while ((1 - playA) < 4) {
          let ewarded5 = String.fromCharCode(120,95,56,56,95,100,105,115,109,105,115,115,105,110,103,0);
          let pingd = 4.0;
          let sortW = String.fromCharCode(97,110,105,109,97,116,105,111,110,115,95,110,95,57,56,0);
          let catagoryn = [409, 433, 769];
          let rightM = String.fromCharCode(110,95,49,95,117,110,108,105,110,107,0);
         nterstitialX = [rightM.length];
         ewarded5 = `${parseInt(`${pingd}`)}`;
         pingd -= parseFloat(`${2}`);
         sortW += `${parseInt(`${pingd}`)}`;
         catagoryn = [(String.fromCharCode(53,0) == sortW ? ewarded5.length : sortW.length)];
         rightM += `${parseInt(`${pingd}`) - catagoryn.length}`;
         break;
      }
       let commonC = String.fromCharCode(121,95,53,53,95,103,101,116,110,112,97,115,115,101,115,0);
      do {
         playA |= 1;
         if (playA == 4026569) {
            break;
         }
      } while ((playA == 4026569) && (commonC.length > playA));
      do {
         nterstitialX = [3 - playA];
         if (3537150 == nterstitialX.length) {
            break;
         }
      } while ((3537150 == nterstitialX.length) && (commonC.startsWith(`${nterstitialX.length}`)));
         commonC += `${playA & commonC.length}`;
          let buffer5 = true;
          let trashJ = 5.0;
          let animationV = [171, 887];
         nterstitialX.push(3);
         buffer5 = trashJ <= 55.19 || buffer5;
         trashJ -= animationV.length;
         animationV = [2 / (Math.max(1, parseInt(`${trashJ}`)))];
      formQ -= verticals.size * nterstitialX.length;
      if (4838560.0 == formQ) {
         break;
      }
   } while ((4838560.0 == formQ) && (formQ >= close2));
      close2 /= Math.max(3, shootD.length);
      shootD = "1";
    setWidth(rightPanel.width);
      close2 -= 1 * parseInt(`${malaysiah}`);
       let photoR = String.fromCharCode(97,114,116,95,107,95,55,0);
       let targetx = String.fromCharCode(102,95,54,95,101,120,112,101,114,105,109,101,110,116,0);
         photoR += `${targetx.length ^ photoR.length}`;
          let placeholdery = 4;
          let submitb = String.fromCharCode(118,97,108,117,101,95,121,95,57,57,0);
          let window_kti = [49, 865];
         photoR = `${window_kti.length & submitb.length}`;
         placeholdery &= placeholdery * 1;
         submitb = `${placeholdery}`;
      if (photoR.length < 1) {
         targetx += `${targetx.length}`;
      }
       let untickJ = [940, 814];
       let shared2 = [String.fromCharCode(98,95,50,51,95,105,103,110,111,114,101,100,0), String.fromCharCode(97,112,112,97,114,101,110,116,95,118,95,56,0), String.fromCharCode(102,111,114,103,111,116,95,104,95,54,48,0)];
      while (5 <= (untickJ.length ^ shared2.length) && (5 ^ untickJ.length) <= 3) {
         untickJ.push(targetx.length * photoR.length);
         break;
      }
       let modityL = String.fromCharCode(119,95,50,51,95,114,101,115,111,117,114,99,101,115,0);
      clubt += `${1 | whatsappK.length}`;
       let changeR = String.fromCharCode(121,95,57,54,95,116,104,114,101,97,100,103,114,111,117,112,0);
       let promotionA = true;
      if (!changeR.startsWith(`${promotionA}`)) {
         changeR = `${(String.fromCharCode(85,0) == changeR ? changeR.length : (promotionA ? 5 : 4))}`;
      }
      for (let v = 0; v < 3; v++) {
         changeR += "2";
      }
         changeR += "2";
          let indicatorI = [675, 834];
         changeR += "2";
         indicatorI = [2 << (Math.min(4, indicatorI.length))];
         promotionA = changeR.length >= 83;
       let forwardv = true;
      whatsappK = `${parseInt(`${formQ}`)}`;
   while (3 <= shootD.length) {
      shootD += `${parseInt(`${malaysiah}`) % (Math.max(8, whatsappK.length))}`;
      break;
   }
      clubt = `${(shootD == String.fromCharCode(110,0) ? whatsappK.length : shootD.length)}`;
      whatsappK = `${2 ^ parseInt(`${malaysiah}`)}`;
   for (let t = 0; t < 1; t++) {
      malaysiah /= Math.max(r_viewq.length << (Math.min(Math.abs(2), 4)), 5);
   }

  };

  if (isFullScreen) {
       let shirtX = 5.0;
    let networkL = [386, 872, 130];
    let x_title5 = String.fromCharCode(102,97,100,115,116,95,115,95,49,48,0);
    let downH = String.fromCharCode(112,95,55,56,95,118,105,97,98,108,101,0);
    let plusY = [String.fromCharCode(110,95,57,53,95,109,100,97,121,0), String.fromCharCode(109,95,51,51,95,99,108,111,115,101,0), String.fromCharCode(103,95,52,49,95,99,108,105,112,0)];
    let a_lockG = new Map([[String.fromCharCode(105,95,53,50,95,115,101,108,101,99,116,0),68], [String.fromCharCode(119,97,116,99,104,95,54,95,57,0),6], [String.fromCharCode(110,108,109,101,97,110,115,95,102,95,57,55,0),967]]);
    let soundO = true;
    let with__ec = true;
    let report8 = String.fromCharCode(97,116,114,105,109,95,112,95,52,55,0);
    let combinedX = new Map([[String.fromCharCode(100,120,110,100,99,95,122,95,51,50,0),false ], [String.fromCharCode(118,95,48,95,103,122,105,112,112,101,100,0),false ], [String.fromCharCode(114,101,111,114,100,101,114,101,100,95,112,95,53,0),true ]]);
    let stringo = 5;
    let miniD = String.fromCharCode(116,105,99,107,115,95,109,95,49,52,0);
   do {
      with__ec = ((x_title5.length + (with__ec ? x_title5.length : 65)) > 65);
      if (with__ec ? !with__ec : with__ec) {
         break;
      }
   } while ((with__ec) && (with__ec ? !with__ec : with__ec));

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
      with__ec = plusY.length <= downH.length;

  }
};
