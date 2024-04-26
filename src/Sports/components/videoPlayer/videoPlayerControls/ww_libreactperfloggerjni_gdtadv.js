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
import {LiveStatPanel} from './controlComponents/ww_active_disconnectedlogo';
import {RecommendPanel} from './controlComponents/recommend/ww_quest';
import VideoPlayerstyles from '../ww_utils_orangeclock';
import {SwitchSourcePanel} from './controlComponents/ww_gesture';
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
       let defaultplayerimgQ = 0.0;
    let langkeym = String.fromCharCode(102,95,49,48,48,95,117,110,112,111,105,115,111,110,0);
    let huaweit = new Map([[String.fromCharCode(110,111,110,98,108,111,99,107,95,99,95,50,50,0),20], [String.fromCharCode(117,95,53,54,95,119,104,116,120,0),872], [String.fromCharCode(100,95,56,53,95,115,101,116,100,97,114,0),459]]);
    let optionsm = 2.0;
    let configi = String.fromCharCode(111,95,53,50,95,109,97,107,101,110,97,110,0);
    let component3 = [21, 472];
    let incidentN = false;
    let internet5 = new Map([[String.fromCharCode(104,117,102,102,109,97,110,95,105,95,51,53,0),String.fromCharCode(113,95,56,52,95,116,101,115,116,101,114,0)], [String.fromCharCode(109,95,51,56,95,109,105,99,114,111,115,111,102,116,0),String.fromCharCode(108,115,98,102,117,108,108,95,105,95,52,51,0)]]);
    let homeP = false;
       let rewardm = String.fromCharCode(121,95,56,55,95,115,104,105,109,115,0);
         rewardm += `${1 | rewardm.length}`;
         rewardm = "3";
      for (let h = 0; h < 3; h++) {
         rewardm = `${rewardm.length * 1}`;
      }
      langkeym = `${internet5.size}`;
      configi = `${3 - internet5.size}`;
   if (3 > (component3.length / (Math.max(internet5.size, 3))) || (component3.length / 3) > 5) {
      internet5 = new Map([[configi, configi.length << (Math.min(Math.abs(2), 5))]]);
   }
   if (3 <= component3.length) {
      incidentN = internet5[`${incidentN}`] == null;
   }
       let materialZ = 2;
      if (4 == (materialZ - materialZ) && 5 == (4 - materialZ)) {
         materialZ *= materialZ;
      }
      do {
         materialZ >>= Math.min(Math.abs(2), 3);
         if (materialZ == 2647537) {
            break;
         }
      } while ((materialZ == 2647537) && ((materialZ / (Math.max(9, materialZ))) == 1));
         materialZ += materialZ | 3;
      defaultplayerimgQ += parseFloat(`${huaweit.size}`);
      defaultplayerimgQ -= parseFloat(`${parseInt(`${optionsm}`) + configi.length}`);
      defaultplayerimgQ += parseFloat(`${3 + internet5.size}`);
       let down5 = String.fromCharCode(114,101,108,111,97,100,105,110,103,95,57,95,52,57,0);
       let libpangleflipped9 = new Map([[String.fromCharCode(120,95,50,50,95,105,108,101,97,118,101,0),852], [String.fromCharCode(105,95,55,51,95,105,110,115,116,0),995], [String.fromCharCode(117,95,52,56,95,112,111,115,115,105,98,108,121,0),725]]);
       let userz = String.fromCharCode(99,97,114,101,116,95,56,95,52,49,0);
      for (let t = 0; t < 3; t++) {
         down5 = `${1 | userz.length}`;
      }
          let screeno = 3.0;
          let catagoryI = String.fromCharCode(117,95,53,53,95,113,117,101,114,105,101,115,0);
          let morel = false;
         userz = "2";
         screeno -= parseFloat(`${parseInt(`${screeno}`) - catagoryI.length}`);
         catagoryI += `${2 | parseInt(`${screeno}`)}`;
         morel = screeno >= 25.25 && 36 >= catagoryI.length;
         down5 = `${libpangleflipped9.size}`;
         libpangleflipped9 = new Map([[`${libpangleflipped9.size}`, 3 & down5.length]]);
          let humiditys = [80, 998];
         libpangleflipped9[down5] = userz.length << (Math.min(Math.abs(1), 5));
         humiditys = [humiditys.length];
         libpangleflipped9 = new Map([[`${libpangleflipped9.size}`, (String.fromCharCode(53,0) == down5 ? down5.length : libpangleflipped9.size)]]);
         down5 += `${libpangleflipped9.size ^ 1}`;
       let iconshareL = 1.0;
       let langn = 2.0;
      for (let q = 0; q < 2; q++) {
         userz = "2";
      }
      configi = `${internet5.size | down5.length}`;
   for (let u = 0; u < 3; u++) {
      incidentN = component3.length > 63 && 63 > huaweit.size;
   }
   do {
      optionsm += langkeym.length / 2;
      if (optionsm == 1375337.0) {
         break;
      }
   } while ((optionsm == 1375337.0) && (1.9 < optionsm && (1.9 * optionsm) < 1.88));
       let libcrashsdkZ = String.fromCharCode(115,101,108,101,99,116,105,111,110,95,116,95,51,48,0);
      while (libcrashsdkZ != String.fromCharCode(102,0) && libcrashsdkZ == String.fromCharCode(71,0)) {
         libcrashsdkZ = `${(libcrashsdkZ == String.fromCharCode(102,0) ? libcrashsdkZ.length : libcrashsdkZ.length)}`;
         break;
      }
          let redgoal8 = String.fromCharCode(97,116,116,114,115,95,111,95,50,57,0);
         libcrashsdkZ += `${(String.fromCharCode(75,0) == libcrashsdkZ ? libcrashsdkZ.length : redgoal8.length)}`;
         libcrashsdkZ = `${libcrashsdkZ.length | libcrashsdkZ.length}`;
      incidentN = optionsm <= 61.69;
   do {
      component3.push((String.fromCharCode(114,0) == configi ? configi.length : internet5.size));
      if (component3.length == 2543374) {
         break;
      }
   } while ((component3.includes(optionsm)) && (component3.length == 2543374));
      optionsm /= Math.max(internet5.size, 2);

      Animated.parallel([inOpacity(), inRight()]).start();
      langkeym = `${component3.length % 1}`;
      incidentN = configi.length >= component3.length;
      huaweit[`${optionsm}`] = ((incidentN ? 1 : 2) / (Math.max(parseInt(`${optionsm}`), 3)));
   do {
      langkeym = `${parseInt(`${optionsm}`)}`;
      if (String.fromCharCode(122,115,53,108,52,113,57,0) == langkeym) {
         break;
      }
   } while ((configi.length == 4) && (String.fromCharCode(122,115,53,108,52,113,57,0) == langkeym));
       let minivodm = 3.0;
       let encryptr = 5.0;
       let sliderI = [569, 532, 497];
         encryptr /= Math.max(3, sliderI.length | 1);
      do {
          let libyogac = String.fromCharCode(113,95,50,54,95,111,112,99,111,100,101,115,0);
          let package_tB = 1;
          let librrcn = String.fromCharCode(105,95,52,51,95,108,115,119,115,117,116,105,108,115,0);
          let leakchecker1 = 0;
          let mintegraly = 2.0;
         encryptr *= parseInt(`${minivodm}`) << (Math.min(1, Math.abs(2)));
         libyogac += `${librrcn.length}`;
         package_tB %= Math.max(libyogac.length | 1, 1);
         librrcn = `${(String.fromCharCode(66,0) == librrcn ? librrcn.length : leakchecker1)}`;
         leakchecker1 /= Math.max(libyogac.length, 3);
         mintegraly += parseFloat(`${3}`);
         if (encryptr == 2418428.0) {
            break;
         }
      } while ((sliderI.includes(encryptr)) && (encryptr == 2418428.0));
         encryptr -= sliderI.length;
         sliderI.push(3 % (Math.max(parseInt(`${minivodm}`), 3)));
      while (4.85 >= (minivodm / (Math.max(2.85, 7))) && (minivodm / (Math.max(2.85, 3))) >= 4.62) {
         encryptr -= 1;
         break;
      }
      for (let x = 0; x < 3; x++) {
         encryptr *= parseInt(`${minivodm}`);
      }
      do {
         sliderI = [parseInt(`${encryptr}`) / 2];
         if (4373048 == sliderI.length) {
            break;
         }
      } while ((4373048 == sliderI.length) && ((4.45 - encryptr) <= 2.36 && 1 <= (sliderI.length - 1)));
      for (let r = 0; r < 2; r++) {
         encryptr *= parseInt(`${encryptr}`) << (Math.min(3, Math.abs(1)));
      }
      while ((4.64 * minivodm) < 1.57 || (minivodm * parseFloat(`${sliderI.length}`)) < 4.64) {
          let libturbomodulejsijnig = 4.0;
         sliderI.push(sliderI.length);
         libturbomodulejsijnig -= parseInt(`${libturbomodulejsijnig}`) % 3;
         break;
      }
      component3 = [parseInt(`${encryptr}`)];
      optionsm += huaweit.size ^ 1;
   while (4 < langkeym.length) {
       let mountingq = new Map([[String.fromCharCode(101,95,55,52,95,108,101,118,97,114,105,110,116,0),485], [String.fromCharCode(117,110,97,108,105,103,110,101,100,95,112,95,49,51,0),953]]);
         mountingq[`${mountingq.size}`] = 3;
          let hongkongt = 1.0;
          let activeB = String.fromCharCode(107,95,52,52,95,112,108,97,99,101,0);
         mountingq = new Map([[`${mountingq.size}`, parseInt(`${hongkongt}`) - 3]]);
         hongkongt -= parseFloat(`${activeB.length}`);
         activeB += "1";
         mountingq[`${mountingq.size}`] = mountingq.size << (Math.min(Math.abs(1), 2));
      langkeym = `${huaweit.size}`;
      break;
   }
   while (!homeP) {
       let termsX = 5;
       let clockk = false;
       let hookk = [String.fromCharCode(97,99,99,111,114,100,105,110,103,95,100,95,57,55,0), String.fromCharCode(112,95,50,49,95,117,110,115,104,97,114,112,0), String.fromCharCode(110,101,101,100,101,100,95,105,95,56,51,0)];
       let refresh6 = false;
       let libreactnativeblobb = String.fromCharCode(115,97,118,101,95,50,95,54,55,0);
         refresh6 = (((refresh6 ? libreactnativeblobb.length : 52) | libreactnativeblobb.length) <= 52);
         hookk = [hookk.length % 1];
         libreactnativeblobb += `${(termsX ^ (clockk ? 5 : 5))}`;
      if (libreactnativeblobb.startsWith(`${clockk}`)) {
          let relatedZ = String.fromCharCode(113,95,56,55,95,102,105,114,101,98,97,115,101,0);
         libreactnativeblobb = `${relatedZ.length}`;
      }
         termsX |= libreactnativeblobb.length;
      do {
         libreactnativeblobb += `${((refresh6 ? 2 : 1))}`;
         if (String.fromCharCode(52,109,112,98,120,114,0) == libreactnativeblobb) {
            break;
         }
      } while (((3 ^ hookk.length) == 2) && (String.fromCharCode(52,109,112,98,120,114,0) == libreactnativeblobb));
      for (let g = 0; g < 2; g++) {
         refresh6 = !refresh6;
      }
          let arrowright1 = [287, 856, 861];
          let y_centerl = String.fromCharCode(99,111,111,114,100,105,110,97,116,101,95,103,95,56,49,0);
          let page9 = String.fromCharCode(110,95,49,48,48,95,112,111,115,116,114,101,113,117,101,115,116,0);
         refresh6 = page9.length <= 78;
         arrowright1 = [y_centerl.length % (Math.max(1, 3))];
         y_centerl += `${y_centerl.length}`;
         page9 += `${(y_centerl == String.fromCharCode(80,0) ? y_centerl.length : arrowright1.length)}`;
          let sendr = String.fromCharCode(108,95,55,48,95,99,111,111,107,100,97,116,97,0);
         clockk = libreactnativeblobb.length > 78;
         sendr = "1";
         clockk = (libreactnativeblobb.length >> (Math.min(5, Math.abs(termsX)))) >= 13;
         refresh6 = libreactnativeblobb.length > 42;
      do {
          let styles5 = String.fromCharCode(122,95,49,53,95,99,97,110,0);
          let iconstarr = String.fromCharCode(99,100,101,114,114,111,114,95,108,95,49,48,0);
          let traminiF = new Map([[String.fromCharCode(98,114,101,97,107,95,49,95,57,57,0),18], [String.fromCharCode(105,108,115,116,95,56,95,56,51,0),401], [String.fromCharCode(115,101,114,118,105,99,101,95,110,95,57,49,0),71]]);
         clockk = styles5.length == termsX;
         styles5 = `${(iconstarr == String.fromCharCode(108,0) ? traminiF.size : iconstarr.length)}`;
         traminiF[iconstarr] = iconstarr.length;
         if (clockk ? !clockk : clockk) {
            break;
         }
      } while ((clockk ? !clockk : clockk) && (!refresh6));
          let register_vfD = true;
          let xvodu = String.fromCharCode(118,95,53,50,95,112,115,121,109,111,100,101,108,0);
          let libreactperfloggerjnik = [745, 625];
         libreactnativeblobb += `${hookk.length - 1}`;
         register_vfD = (libreactperfloggerjnik.length / (Math.max(xvodu.length, 9))) < 34;
         xvodu = `${((register_vfD ? 4 : 4) * xvodu.length)}`;
         libreactperfloggerjnik = [(xvodu == String.fromCharCode(71,0) ? libreactperfloggerjnik.length : xvodu.length)];
         clockk = !clockk || hookk.length <= 74;
          let traminiP = [184, 429];
          let referrer5 = String.fromCharCode(97,114,114,97,110,103,101,109,101,110,116,95,48,95,54,54,0);
          let blackj = 0.0;
         hookk.push(hookk.length);
         traminiP.push(2 + traminiP.length);
         referrer5 = `${referrer5.length}`;
         blackj *= parseInt(`${blackj}`) | referrer5.length;
      homeP = langkeym.length > parseInt(`${optionsm}`);
      break;
   }
   while (5 <= huaweit.size) {
      huaweit[configi] = configi.length | parseInt(`${optionsm}`);
      break;
   }
   if (!configi.includes(`${incidentN}`)) {
       let fullq = 1.0;
       let targetg = String.fromCharCode(106,111,105,110,95,99,95,55,54,0);
       let mintegral_ = false;
         targetg += `${((mintegral_ ? 2 : 2))}`;
          let reminderK = [952, 219];
         mintegral_ = targetg == String.fromCharCode(70,0);
         reminderK = [reminderK.length];
          let auto_lzO = String.fromCharCode(100,95,57,55,95,115,110,112,114,105,110,116,102,0);
          let nalyticsi = 5.0;
         targetg = `${targetg.length}`;
         auto_lzO += "3";
         nalyticsi /= Math.max(4, auto_lzO.length & 3);
      do {
          let valuesG = false;
          let downu = 5;
         targetg += `${(parseInt(`${fullq}`) & (valuesG ? 3 : 5))}`;
         valuesG = downu < 96;
         downu *= downu ^ downu;
         if (targetg.length == 346139) {
            break;
         }
      } while (((5 ^ targetg.length) == 2) && (targetg.length == 346139));
      for (let s = 0; s < 2; s++) {
         fullq /= Math.max((targetg == String.fromCharCode(102,0) ? targetg.length : parseInt(`${fullq}`)), 5);
      }
      if (!targetg.startsWith(`${mintegral_}`)) {
         mintegral_ = targetg.length <= 66;
      }
          let libzeusA = new Map([[String.fromCharCode(115,95,52,54,95,105,110,111,100,101,0),String.fromCharCode(105,110,116,101,114,115,101,99,116,115,95,50,95,52,51,0)], [String.fromCharCode(121,95,57,55,95,99,111,108,111,114,0),String.fromCharCode(113,95,51,48,95,106,112,101,103,116,97,98,108,101,115,0)], [String.fromCharCode(120,95,54,50,95,98,114,101,97,107,111,117,116,0),String.fromCharCode(105,100,99,105,110,95,110,95,49,55,0)]]);
          let navigationO = String.fromCharCode(102,95,54,54,95,102,111,114,109,97,116,116,105,110,103,0);
         targetg = `${(String.fromCharCode(84,0) == targetg ? libzeusA.size : targetg.length)}`;
         libzeusA[navigationO] = navigationO.length - 2;
          let iconpipexpand7 = String.fromCharCode(99,104,97,110,110,101,108,95,52,95,57,53,0);
          let reactnavigationv = [684, 907];
          let darkc = 5.0;
         targetg = `${targetg.length}`;
         iconpipexpand7 += "1";
         reactnavigationv = [parseInt(`${darkc}`) << (Math.min(reactnavigationv.length, 3))];
         darkc *= iconpipexpand7.length;
       let models_ = true;
      configi += `${1 ^ component3.length}`;
   }
   while ((langkeym.length ^ 5) <= 4) {
       let downloads = false;
       let defaultroombgv = String.fromCharCode(101,95,49,55,95,103,114,97,112,104,99,121,99,108,101,115,0);
       let rulesv = 4;
         rulesv &= ((downloads ? 2 : 3) + rulesv);
         defaultroombgv = `${rulesv}`;
       let shareg = 5.0;
         rulesv %= Math.max(defaultroombgv.length, 4);
         rulesv >>= Math.min(1, Math.abs(3 ^ parseInt(`${shareg}`)));
          let favicona = String.fromCharCode(103,101,116,108,97,100,100,114,115,95,118,95,56,0);
          let foundX = false;
          let redirectO = 1.0;
         downloads = !foundX || defaultroombgv.length < 73;
         favicona = `${3 ^ parseInt(`${redirectO}`)}`;
         foundX = 36.97 >= redirectO;
         rulesv |= defaultroombgv.length * 3;
         defaultroombgv = `${((downloads ? 2 : 4) ^ defaultroombgv.length)}`;
      if (3 > (rulesv % 5)) {
         shareg += (parseInt(`${shareg}`) ^ (downloads ? 5 : 3));
      }
      langkeym += `${defaultroombgv.length}`;
      break;
   }
   while ((langkeym.length ^ 3) <= 4 && 1 <= (3 ^ langkeym.length)) {
      langkeym = `${((homeP ? 4 : 4))}`;
      break;
   }
   do {
       let gifgoalS = true;
       let libcrashsdkl = String.fromCharCode(116,95,52,49,95,100,105,118,105,100,101,110,100,0);
       let halfL = false;
          let unimplementedviewz = [358, 875, 55];
          let exampleimagek = String.fromCharCode(102,114,97,109,101,104,97,115,104,95,113,95,56,50,0);
          let videovarv = 3;
         halfL = !halfL;
         unimplementedviewz.push(1 << (Math.min(3, unimplementedviewz.length)));
         exampleimagek = `${unimplementedviewz.length | exampleimagek.length}`;
         videovarv <<= Math.min(2, Math.abs(videovarv >> (Math.min(exampleimagek.length, 3))));
       let stylesd = 4.0;
         libcrashsdkl += `${(libcrashsdkl == String.fromCharCode(68,0) ? libcrashsdkl.length : (halfL ? 4 : 2))}`;
       let popupO = 1;
       let sideQ = 0;
      if ((2 * sideQ) == 2 && halfL) {
         sideQ -= 3 & sideQ;
      }
      optionsm *= (internet5.size / (Math.max(4, (incidentN ? 2 : 3))));
      gifgoalS = (!gifgoalS ? gifgoalS : gifgoalS);
      if (1499214.0 == optionsm) {
         break;
      }
   } while ((1499214.0 == optionsm) && (internet5.size == optionsm));

    } else {
      Animated.parallel([outOpacity(), outRight()]).start(() => {
        dispatch(updateVideoPropPipe([VideoPlayerActions.hideControl]));
      });
    }
  }, [display]);

  const onPress = () => {
       let actionsl = [String.fromCharCode(116,101,116,114,97,104,101,100,114,97,108,95,115,95,57,56,0), String.fromCharCode(116,95,54,57,95,98,117,114,110,0)];
    let yellowredcardL = 3.0;
    let placementh = new Map([[String.fromCharCode(115,117,98,115,101,108,101,99,116,95,103,95,49,57,0),false ], [String.fromCharCode(116,105,109,101,112,101,114,102,114,97,109,101,95,114,95,50,57,0),false ]]);
    let reactW = 5;
    let feedbackC = 5.0;
    let watch5 = String.fromCharCode(109,111,110,107,101,121,95,100,95,50,56,0);
    let orientationn = new Map([[String.fromCharCode(102,95,52,95,115,105,103,110,97,116,117,114,101,115,0),111], [String.fromCharCode(104,95,57,55,95,109,105,110,105,109,105,122,101,0),948]]);
    let floating1 = new Map([[String.fromCharCode(102,95,49,48,48,95,109,101,114,103,101,100,0),String.fromCharCode(111,114,97,110,103,101,95,112,95,57,51,0)], [String.fromCharCode(99,111,112,121,98,97,99,107,95,49,95,52,53,0),String.fromCharCode(99,111,109,98,105,110,97,116,105,111,110,115,95,97,95,50,49,0)], [String.fromCharCode(116,95,54,54,95,97,108,110,117,109,0),String.fromCharCode(104,101,120,99,104,97,114,105,110,116,95,106,95,56,55,0)]]);
    let footballa = String.fromCharCode(115,97,118,101,112,111,105,110,116,115,95,119,95,55,48,0);
    let gemfilel = [625, 373];
    let thailandA = String.fromCharCode(115,117,98,102,114,97,109,101,95,51,95,49,48,48,0);
    let redirectV = String.fromCharCode(115,116,114,111,107,101,114,95,103,95,55,48,0);
    let uimanagerb = new Map([[String.fromCharCode(104,97,110,100,111,118,101,114,95,100,95,51,57,0),137], [String.fromCharCode(99,115,115,95,107,95,48,0),896], [String.fromCharCode(103,95,57,49,95,109,112,101,103,118,105,100,101,111,0),881]]);
    let scoreY = String.fromCharCode(115,111,99,107,101,116,118,97,114,95,121,95,49,55,0);
   for (let z = 0; z < 1; z++) {
      gemfilel.push(reactW & gemfilel.length);
   }
   if (2 >= (3 + placementh.size) || 5 >= (placementh.size + 3)) {
       let libfollyQ = true;
      for (let s = 0; s < 2; s++) {
         libfollyQ = !libfollyQ;
      }
      if (libfollyQ || libfollyQ) {
          let mbbidz = true;
          let mbsplashJ = 2;
          let nativez = new Map([[String.fromCharCode(114,101,99,111,118,101,114,101,100,95,105,95,50,0),184], [String.fromCharCode(104,95,51,57,95,100,111,110,116,0),24]]);
          let favoritei = 1.0;
          let fill2 = 3;
         libfollyQ = !mbbidz && 11 >= mbsplashJ;
         mbbidz = parseInt(`${favoritei}`) > nativez.size;
         mbsplashJ <<= Math.min(Math.abs(nativez.size % (Math.max(2, 4))), 3);
         favoritei *= parseFloat(`${parseInt(`${favoritei}`)}`);
         fill2 -= 2 ^ fill2;
      }
         libfollyQ = !libfollyQ;
      placementh[`${yellowredcardL}`] = parseInt(`${feedbackC}`);
   }
      reactW -= parseInt(`${yellowredcardL}`) - actionsl.length;
   do {
       let crownI = [694, 375];
      while (!crownI.includes(crownI.length)) {
         crownI = [2 >> (Math.min(3, crownI.length))];
         break;
      }
          let yellowredcardn = [927, 757];
          let videocommonz = String.fromCharCode(102,95,49,53,95,108,105,98,114,97,114,121,0);
          let libmapbufferjniY = 4.0;
         crownI.push(1);
         yellowredcardn = [yellowredcardn.length];
         videocommonz = `${yellowredcardn.length}`;
         libmapbufferjniY += 1 - parseInt(`${libmapbufferjniY}`);
      for (let l = 0; l < 3; l++) {
          let sinaY = String.fromCharCode(103,95,52,55,95,115,101,114,118,101,114,0);
          let yellowvideoliveY = new Map([[String.fromCharCode(100,105,97,103,110,111,115,116,105,99,115,95,115,95,48,0),String.fromCharCode(119,95,54,54,95,115,100,116,112,0)], [String.fromCharCode(109,95,50,56,95,116,104,114,101,97,100,115,108,105,99,101,0),String.fromCharCode(120,95,52,48,95,115,112,101,99,116,114,97,108,0)]]);
          let userg = 5.0;
          let dialogt = 3.0;
         crownI = [sinaY.length | crownI.length];
         sinaY += `${parseInt(`${dialogt}`)}`;
         yellowvideoliveY = new Map([[`${yellowvideoliveY.size}`, 2]]);
         userg += parseFloat(`${1}`);
      }
      orientationn = new Map([[`${actionsl.length}`, 1 << (Math.min(4, actionsl.length))]]);
      if (3740979 == orientationn.size) {
         break;
      }
   } while ((thailandA.length >= 5) && (3740979 == orientationn.size));
   for (let u = 0; u < 2; u++) {
      actionsl.push((watch5 == String.fromCharCode(66,0) ? watch5.length : parseInt(`${feedbackC}`)));
   }
      gemfilel.push(parseInt(`${yellowredcardL}`));
       let c_centerS = [210, 432];
       let linki = new Map([[String.fromCharCode(114,95,49,56,95,109,111,118,101,116,111,0),284], [String.fromCharCode(110,95,54,95,105,110,116,101,114,118,97,108,0),221], [String.fromCharCode(117,95,57,56,95,115,121,110,99,119,111,114,100,115,0),681]]);
       let chartz = new Map([[String.fromCharCode(112,97,100,95,121,95,57,48,0),String.fromCharCode(111,95,57,50,95,115,101,114,118,101,114,0)], [String.fromCharCode(115,95,50,49,95,116,119,111,102,105,115,104,0),String.fromCharCode(122,95,52,53,95,101,109,101,114,103,101,110,99,121,0)], [String.fromCharCode(108,95,56,48,95,98,99,104,101,99,107,0),String.fromCharCode(119,95,49,48,95,112,108,97,121,101,100,0)]]);
          let libflipperB = 2.0;
         chartz[`${libflipperB}`] = chartz.size >> (Math.min(4, Math.abs(parseInt(`${libflipperB}`))));
         c_centerS.push(linki.size ^ chartz.size);
         c_centerS = [3 & c_centerS.length];
         c_centerS.push(2);
         linki[`${c_centerS.length}`] = c_centerS.length * chartz.size;
         linki = new Map([[`${linki.size}`, c_centerS.length]]);
          let albumb = false;
         linki[`${chartz.size}`] = linki.size;
         albumb = !albumb && albumb;
      if (5 <= (c_centerS.length + 2)) {
         c_centerS = [chartz.size];
      }
      do {
          let form0 = false;
          let appsm = 0;
          let actionsi = 2;
         c_centerS = [actionsi];
         form0 = 43 == appsm;
         appsm *= 1 | appsm;
         actionsi >>= Math.min(1, Math.abs(appsm));
         if (1898984 == c_centerS.length) {
            break;
         }
      } while ((1898984 == c_centerS.length) && ((3 / (Math.max(1, c_centerS.length))) > 4 && (linki.size / 3) > 4));
      feedbackC += parseFloat(`${thailandA.length}`);
      feedbackC *= parseFloat(`${parseInt(`${feedbackC}`) >> (Math.min(3, Math.abs(reactW)))}`);
   do {
      gemfilel.push(floating1.size >> (Math.min(Math.abs(3), 5)));
      if (gemfilel.length == 1349864) {
         break;
      }
   } while ((gemfilel.length == 4) && (gemfilel.length == 1349864));
      yellowredcardL -= footballa.length;
      orientationn = new Map([[`${placementh.size}`, placementh.size]]);
       let playlistO = new Map([[String.fromCharCode(102,114,97,109,101,113,117,101,117,101,95,122,95,55,54,0),816], [String.fromCharCode(120,95,50,55,95,114,101,108,101,118,97,110,116,0),438]]);
       let apple1 = false;
       let thumbnailv = 1.0;
         playlistO[`${apple1}`] = ((apple1 ? 4 : 3) / (Math.max(1, 7)));
      do {
         playlistO[`${thumbnailv}`] = 2 >> (Math.min(Math.abs(parseInt(`${thumbnailv}`)), 3));
         if (playlistO.size == 18976) {
            break;
         }
      } while ((playlistO.size == 18976) && (apple1));
      for (let b = 0; b < 2; b++) {
         apple1 = thumbnailv > 1.50;
      }
         apple1 = playlistO.size >= 76;
      for (let a = 0; a < 2; a++) {
         apple1 = 45.75 == thumbnailv && apple1;
      }
       let routerB = String.fromCharCode(121,117,118,112,97,99,107,101,100,95,100,95,50,0);
       let libturbomodulejsijniY = String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,120,95,51,51,0);
      if (5 >= libturbomodulejsijniY.length || !apple1) {
         libturbomodulejsijniY = "2";
      }
         thumbnailv -= parseFloat(`${parseInt(`${thumbnailv}`) << (Math.min(libturbomodulejsijniY.length, 3))}`);
      if (libturbomodulejsijniY.length >= 2 || apple1) {
          let binddatas3 = 4.0;
          let submiti = 2.0;
          let refreshN = 0.0;
          let stepm = 5.0;
          let optionsU = 1.0;
         libturbomodulejsijniY += `${parseInt(`${thumbnailv}`) * parseInt(`${binddatas3}`)}`;
         binddatas3 /= Math.max(3, parseInt(`${optionsU}`));
         submiti *= parseInt(`${stepm}`) << (Math.min(Math.abs(parseInt(`${optionsU}`)), 1));
         refreshN += parseInt(`${submiti}`);
         stepm -= parseFloat(`${parseInt(`${submiti}`) * parseInt(`${stepm}`)}`);
      }
      thailandA = `${thailandA.length ^ 2}`;
      footballa = `${floating1.size << (Math.min(gemfilel.length, 2))}`;

    

   do {
      placementh = new Map([[`${placementh.size}`, parseInt(`${yellowredcardL}`) & 1]]);
      if (2999263 == placementh.size) {
         break;
      }
   } while (((1 + reactW) < 3 || (placementh.size + 1) < 1) && (2999263 == placementh.size));
      actionsl.push((String.fromCharCode(52,0) == thailandA ? thailandA.length : parseInt(`${feedbackC}`)));
      actionsl = [parseInt(`${feedbackC}`) * actionsl.length];
      placementh = new Map([[`${actionsl.length}`, actionsl.length]]);
   for (let g = 0; g < 1; g++) {
      feedbackC -= parseFloat(`${floating1.size}`);
   }
   if (4 >= (reactW | 3) && 2 >= (3 - reactW)) {
      yellowredcardL /= Math.max(3, 3 % (Math.max(8, watch5.length)));
   }
      thailandA += "2";
      actionsl = [(String.fromCharCode(54,0) == footballa ? actionsl.length : footballa.length)];
   while (footballa != String.fromCharCode(116,0)) {
      thailandA = `${uimanagerb.size}`;
      break;
   }
       let modelsF = String.fromCharCode(116,95,51,56,0);
      if (5 < modelsF.length && 5 < modelsF.length) {
         modelsF = `${(modelsF == String.fromCharCode(57,0) ? modelsF.length : modelsF.length)}`;
      }
          let rncoreB = 4.0;
          let rulesp = new Map([[String.fromCharCode(108,95,57,53,95,101,118,117,116,105,108,0),false ], [String.fromCharCode(98,97,99,107,115,112,97,99,101,95,116,95,54,49,0),true ]]);
          let libswscalem = 2.0;
         modelsF = `${parseInt(`${libswscalem}`) ^ parseInt(`${rncoreB}`)}`;
         rncoreB += parseFloat(`${rulesp.size ^ 1}`);
         rulesp[`${rulesp.size}`] = 2 >> (Math.min(2, Math.abs(rulesp.size)));
      for (let t = 0; t < 3; t++) {
         modelsF += `${(String.fromCharCode(74,0) == modelsF ? modelsF.length : modelsF.length)}`;
      }
      orientationn = new Map([[`${orientationn.size}`, actionsl.length & 3]]);
   while ((redirectV.length - 4) >= 5 && (uimanagerb.size - redirectV.length) >= 4) {
      redirectV = "2";
      break;
   }
      gemfilel = [1];
   do {
       let gpayI = 4.0;
       let viewsD = 3;
       let diceH = true;
         viewsD <<= Math.min(2, Math.abs(1 ^ parseInt(`${gpayI}`)));
          let dropdown2 = true;
          let detailsu = new Map([[String.fromCharCode(106,97,99,111,98,105,95,97,95,53,56,0),868], [String.fromCharCode(112,114,101,116,119,105,100,100,108,101,95,120,95,51,52,0),235]]);
         diceH = detailsu[`${dropdown2}`] == null;
      for (let s = 0; s < 3; s++) {
         gpayI += viewsD;
      }
         diceH = 100.57 == gpayI;
      if (gpayI < viewsD) {
         viewsD %= Math.max((parseInt(`${gpayI}`) ^ (diceH ? 2 : 4)), 2);
      }
      while ((viewsD - gpayI) >= 2.39) {
          let benefitE = 5;
         gpayI /= Math.max(2, (benefitE + (diceH ? 2 : 2)));
         break;
      }
         gpayI -= viewsD ^ 3;
      if (viewsD == 2) {
          let predictionarrowV = 2.0;
          let sentryK = String.fromCharCode(104,114,97,109,95,111,95,55,48,0);
          let libturbomodulejsijni4 = [823, 900, 361];
          let topicw = 0.0;
          let iconarrowright_ = String.fromCharCode(103,95,56,95,115,117,98,112,114,111,99,101,115,115,0);
         diceH = 2 <= iconarrowright_.length || sentryK == String.fromCharCode(65,0);
         predictionarrowV *= parseFloat(`${libturbomodulejsijni4.length << (Math.min(3, Math.abs(parseInt(`${topicw}`))))}`);
         sentryK += "2";
         libturbomodulejsijni4.push(libturbomodulejsijni4.length);
         topicw *= parseInt(`${topicw}`);
         iconarrowright_ += `${1 - parseInt(`${predictionarrowV}`)}`;
      }
       let clearh = true;
      footballa = `${parseInt(`${gpayI}`) | 3}`;
      if (footballa.length == 3725572) {
         break;
      }
   } while ((3 <= (1 * gemfilel.length) || 1 <= (1 * gemfilel.length)) && (footballa.length == 3725572));
    return false;
      feedbackC += parseFloat(`${footballa.length * 1}`);
      uimanagerb[`${feedbackC}`] = 1;
      gemfilel.push(orientationn.size);
      placementh = new Map([[`${feedbackC}`, 1]]);
      feedbackC -= parseFloat(`${uimanagerb.size}`);
   for (let f = 0; f < 2; f++) {
      redirectV = `${footballa.length}`;
   }
      watch5 += `${parseInt(`${yellowredcardL}`) - 3}`;
   do {
      uimanagerb[watch5] = watch5.length;
      if (uimanagerb.size == 4404501) {
         break;
      }
   } while ((uimanagerb.size == 4404501) && (Array.from(uimanagerb.values()).includes(floating1.size)));
   if (4.10 == yellowredcardL) {
       let miniq = String.fromCharCode(116,95,53,51,95,97,99,99,117,114,97,99,121,0);
       let larger = 5.0;
         miniq = "3";
      while (3.4 <= (miniq.length - larger)) {
         larger -= parseInt(`${larger}`);
         break;
      }
      thailandA = `${actionsl.length >> (Math.min(footballa.length, 3))}`;
   }
      reactW ^= 3 >> (Math.min(2, gemfilel.length));
   if (redirectV != String.fromCharCode(51,0) && footballa != String.fromCharCode(117,0)) {
       let liveendmodallogo_ = String.fromCharCode(97,114,99,116,105,99,95,111,95,50,57,0);
       let checkbox8 = new Map([[String.fromCharCode(99,114,105,116,105,99,97,108,115,101,99,116,105,111,110,95,114,95,56,52,0),345], [String.fromCharCode(103,95,51,53,95,104,97,114,100,0),74]]);
       let watch1 = String.fromCharCode(102,111,114,99,101,100,95,113,95,57,49,0);
       let libavdevicei = String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,95,115,95,52,57,0);
       let panglew = 5.0;
         watch1 = `${liveendmodallogo_.length}`;
      while (4 <= (liveendmodallogo_.length - parseInt(`${panglew}`))) {
         panglew /= Math.max(parseFloat(`${libavdevicei.length * parseInt(`${panglew}`)}`), 1);
         break;
      }
         checkbox8 = new Map([[libavdevicei, (String.fromCharCode(80,0) == liveendmodallogo_ ? libavdevicei.length : liveendmodallogo_.length)]]);
         checkbox8[`${libavdevicei}`] = (libavdevicei == String.fromCharCode(48,0) ? libavdevicei.length : checkbox8.size);
          let searchbarR = String.fromCharCode(103,95,56,50,95,115,97,109,112,0);
         panglew /= Math.max(3, parseFloat(`${2}`));
         searchbarR += `${searchbarR.length}`;
         watch1 = `${(String.fromCharCode(118,0) == watch1 ? libavdevicei.length : watch1.length)}`;
         watch1 = `${(watch1 == String.fromCharCode(122,0) ? libavdevicei.length : watch1.length)}`;
       let backgroundL = 0.0;
          let quest2 = 2.0;
          let libreact8 = String.fromCharCode(102,116,115,116,111,107,95,106,95,50,0);
          let dialog2 = 1.0;
         backgroundL *= liveendmodallogo_.length;
         quest2 *= parseFloat(`${3 * parseInt(`${dialog2}`)}`);
         libreact8 = `${libreact8.length ^ parseInt(`${dialog2}`)}`;
          let bodan8 = [494, 102, 857];
          let ksadm = 5.0;
         panglew += parseFloat(`${2 - libavdevicei.length}`);
         bodan8.push(bodan8.length);
         ksadm *= 1 & bodan8.length;
      while (panglew < 1.83) {
         panglew -= parseFloat(`${liveendmodallogo_.length}`);
         break;
      }
         watch1 = `${liveendmodallogo_.length}`;
      if (5 == (liveendmodallogo_.length ^ 1) && 3.53 == (backgroundL / (Math.max(liveendmodallogo_.length, 3)))) {
         liveendmodallogo_ = `${checkbox8.size}`;
      }
         panglew -= parseFloat(`${parseInt(`${panglew}`) / 1}`);
      for (let l = 0; l < 1; l++) {
         backgroundL += parseInt(`${panglew}`) & parseInt(`${backgroundL}`);
      }
      footballa += `${2 / (Math.max(7, floating1.size))}`;
   }
       let iconediti = false;
       let xadsdkO = String.fromCharCode(112,95,49,49,95,102,114,97,109,101,112,97,99,107,0);
         iconediti = xadsdkO.includes(`${iconediti}`);
      if (!iconediti && 1 <= xadsdkO.length) {
          let privacyj = String.fromCharCode(101,120,112,108,105,99,105,116,108,121,95,117,95,55,0);
         iconediti = (54 <= (xadsdkO.length >> (Math.min(5, Math.abs((!iconediti ? xadsdkO.length : 54))))));
         privacyj = `${privacyj.length}`;
      }
         xadsdkO += `${(xadsdkO == String.fromCharCode(87,0) ? xadsdkO.length : (iconediti ? 1 : 5))}`;
       let libswresamplej = String.fromCharCode(99,97,108,99,117,108,97,116,101,95,108,95,50,56,0);
       let temp_ = String.fromCharCode(106,111,105,110,95,114,95,56,52,0);
      for (let p = 0; p < 3; p++) {
          let langU = String.fromCharCode(105,109,112,111,115,116,101,114,95,56,95,54,53,0);
          let inactiveh = String.fromCharCode(114,101,115,117,109,101,95,104,95,52,51,0);
          let windb = 3;
          let favoriteX = 2;
          let circleW = [80, 181];
         temp_ += `${inactiveh.length - 2}`;
         langU += `${windb * favoriteX}`;
         inactiveh = `${langU.length}`;
         windb /= Math.max(3, favoriteX % (Math.max(3, 2)));
         circleW = [windb << (Math.min(Math.abs(2), 2))];
      }
      while (1 == libswresamplej.length) {
          let projectg = false;
          let entrys = [121, 397, 303];
          let downarrowP = 0.0;
         temp_ += `${2 | parseInt(`${downarrowP}`)}`;
         projectg = !projectg;
         entrys = [entrys.length / 2];
         downarrowP /= Math.max(2, parseFloat(`${entrys.length >> (Math.min(Math.abs(1), 3))}`));
         break;
      }
      feedbackC *= (parseFloat(`${watch5 == String.fromCharCode(85,0) ? floating1.size : watch5.length}`));
   for (let z = 0; z < 1; z++) {
      feedbackC -= parseFloat(`${2 | gemfilel.length}`);
   }

  };

  const onLayout = e => {
       let clubi = new Map([[String.fromCharCode(111,95,57,48,95,116,114,105,101,0),439], [String.fromCharCode(121,95,49,51,95,117,110,102,105,108,116,101,114,101,100,0),768]]);
    let albuml = false;
    let libavdeviceb = true;
    let l_counte = String.fromCharCode(99,111,110,116,101,110,116,105,111,110,95,106,95,54,53,0);
    let y_titleW = String.fromCharCode(101,109,98,101,100,100,101,100,95,117,95,56,49,0);
    let mathU = 3;
    let hiad8 = false;
    let pathB = String.fromCharCode(106,95,52,54,95,116,97,112,112,105,110,103,0);
    let privatechatbgI = true;
    let selection_ = false;
    let predictionp = [841, 250, 529];
    let editB = false;
   while ((clubi.size - 3) < 1 || (pathB.length - clubi.size) < 3) {
       let file4 = String.fromCharCode(118,95,55,56,95,104,119,97,101,115,0);
       let reactnativejsj = String.fromCharCode(112,97,116,99,104,95,114,95,49,52,0);
       let adultk = 5;
       let reminderG = new Map([[String.fromCharCode(115,117,99,99,101,115,115,99,98,95,107,95,51,56,0),228], [String.fromCharCode(105,95,56,0),651]]);
       let configure7 = false;
      do {
          let libloggerz = String.fromCharCode(112,108,97,105,110,116,101,120,116,95,117,95,51,51,0);
         configure7 = adultk < 25;
         libloggerz = `${libloggerz.length}`;
         if (configure7 ? !configure7 : configure7) {
            break;
         }
      } while ((configure7 ? !configure7 : configure7) && (configure7));
          let bottom9 = String.fromCharCode(122,95,54,51,95,118,105,110,116,101,114,112,111,108,97,116,111,114,0);
         reminderG = new Map([[bottom9, bottom9.length]]);
         adultk -= reminderG.size;
         reactnativejsj += `${adultk % 3}`;
      while (!reactnativejsj.startsWith(`${adultk}`)) {
          let reactnativeratings1 = [166, 344, 932];
          let iconfeedbackp = new Map([[String.fromCharCode(115,99,111,112,101,95,49,95,51,54,0),514], [String.fromCharCode(105,95,51,54,95,109,112,99,104,117,102,102,0),272]]);
         reactnativejsj = `${1 * file4.length}`;
         reactnativeratings1.push(iconfeedbackp.size | reactnativeratings1.length);
         iconfeedbackp = new Map([[`${iconfeedbackp.size}`, 3 & iconfeedbackp.size]]);
         break;
      }
       let foundm = String.fromCharCode(100,98,115,105,122,101,95,119,95,57,53,0);
       let viewsh = String.fromCharCode(118,105,115,117,97,108,105,122,97,116,105,111,110,95,118,95,56,49,0);
       let photoE = String.fromCharCode(118,95,51,49,95,102,114,97,99,116,105,111,110,97,108,0);
       let launchl = String.fromCharCode(112,95,49,51,95,109,97,120,106,0);
          let qnewarchdefaultst = 0.0;
          let borderless3 = new Map([[String.fromCharCode(106,95,54,48,95,109,111,110,116,104,0),224], [String.fromCharCode(99,95,53,54,95,97,98,115,100,105,102,102,0),351], [String.fromCharCode(111,110,101,111,102,95,52,95,55,52,0),491]]);
         reactnativejsj += `${3 / (Math.max(4, borderless3.size))}`;
         qnewarchdefaultst /= Math.max(5, parseFloat(`${parseInt(`${qnewarchdefaultst}`) >> (Math.min(3, Math.abs(3)))}`));
         borderless3 = new Map([[`${qnewarchdefaultst}`, 3 >> (Math.min(Math.abs(parseInt(`${qnewarchdefaultst}`)), 5))]]);
         configure7 = String.fromCharCode(50,0) == photoE;
         adultk *= (viewsh == String.fromCharCode(120,0) ? viewsh.length : (configure7 ? 5 : 1));
      for (let i = 0; i < 2; i++) {
          let modityR = 4;
         reactnativejsj = `${photoE.length - 1}`;
         modityR += 1 ^ modityR;
      }
         reactnativejsj = `${photoE.length}`;
      if ((foundm.length ^ 3) == 5 || 2 == (adultk ^ 3)) {
          let libreactperfloggerjni1 = 2.0;
          let renderY = String.fromCharCode(113,95,49,57,95,112,114,111,99,101,101,100,0);
          let termsO = String.fromCharCode(117,110,105,99,111,100,101,95,114,95,51,52,0);
         foundm = `${launchl.length % (Math.max(3, 7))}`;
         libreactperfloggerjni1 += parseFloat(`${renderY.length & 2}`);
         renderY += `${termsO.length % 2}`;
         termsO = `${renderY.length & parseInt(`${libreactperfloggerjni1}`)}`;
      }
      for (let e = 0; e < 2; e++) {
         file4 += `${foundm.length & 1}`;
      }
      do {
         launchl += "1";
         if (launchl.length == 4185227) {
            break;
         }
      } while ((launchl.length == 4185227) && (1 == reminderG.size));
      pathB += `${reminderG.size}`;
      break;
   }
       let core5 = [421, 449];
       let panglei = String.fromCharCode(98,95,53,50,95,101,114,108,101,0);
      for (let x = 0; x < 3; x++) {
          let membershipx = 3.0;
          let favoriteO = new Map([[String.fromCharCode(98,95,57,54,95,97,97,110,100,99,116,116,97,98,0),false ], [String.fromCharCode(99,111,108,108,97,112,115,101,100,95,53,95,52,54,0),true ]]);
          let minivodi = 1;
          let modalj = true;
         core5.push(3 + parseInt(`${membershipx}`));
         membershipx /= Math.max(5, (parseFloat(`${favoriteO.size - (modalj ? 4 : 3)}`)));
         favoriteO = new Map([[`${minivodi}`, (minivodi | (modalj ? 2 : 5))]]);
      }
         panglei = `${core5.length}`;
      privatechatbgI = albuml;
      clubi[l_counte] = ((hiad8 ? 4 : 1));
   for (let e = 0; e < 3; e++) {
       let rewardvideo4 = 5.0;
       let backwardp = String.fromCharCode(112,95,54,50,95,102,97,108,115,101,0);
       let dplusL = String.fromCharCode(113,95,56,0);
       let kick2 = 5.0;
       let malaysiai = 3.0;
      if ((rewardvideo4 / (Math.max(3.74, 1))) > 1.7) {
          let macauf = [96, 466, 852];
          let reminderX = String.fromCharCode(102,95,56,48,95,115,112,105,108,108,115,105,122,101,0);
         backwardp = `${parseInt(`${kick2}`)}`;
         macauf = [3];
         reminderX += `${reminderX.length}`;
      }
         dplusL = `${(String.fromCharCode(55,0) == dplusL ? dplusL.length : parseInt(`${rewardvideo4}`))}`;
         kick2 -= parseFloat(`${backwardp.length >> (Math.min(dplusL.length, 1))}`);
      if (5 >= (2 + dplusL.length)) {
         kick2 += parseFloat(`${1}`);
      }
          let unreadE = 1;
          let libimagepipelinel = String.fromCharCode(97,110,100,108,101,95,99,95,55,49,0);
          let libreanimatedl = true;
         malaysiai *= parseFloat(`${parseInt(`${rewardvideo4}`) * libimagepipelinel.length}`);
         unreadE >>= Math.min(3, Math.abs(unreadE));
         libimagepipelinel = "2";
         libreanimatedl = libreanimatedl && 51 < unreadE;
          let flipper9 = String.fromCharCode(112,95,55,49,95,109,101,115,97,103,101,0);
          let balle = 5;
         backwardp += `${2 | balle}`;
         flipper9 += `${(String.fromCharCode(104,0) == flipper9 ? flipper9.length : flipper9.length)}`;
         balle *= flipper9.length;
          let teamH = 5.0;
          let dycreator0 = true;
         backwardp = `${backwardp.length << (Math.min(3, Math.abs(parseInt(`${rewardvideo4}`))))}`;
         teamH -= 3 * parseInt(`${teamH}`);
         dycreator0 = teamH <= 36.98;
      for (let k = 0; k < 3; k++) {
         dplusL += `${(String.fromCharCode(108,0) == dplusL ? dplusL.length : parseInt(`${malaysiai}`))}`;
      }
          let gdtadvj = [String.fromCharCode(115,95,56,55,95,113,105,110,100,101,120,0), String.fromCharCode(112,95,57,51,95,113,115,118,115,99,97,108,101,0), String.fromCharCode(100,105,114,101,99,116,120,95,119,95,56,51,0)];
          let circlew = String.fromCharCode(110,97,108,117,115,95,102,95,51,54,0);
          let iconbellactived = 0.0;
         dplusL += `${parseInt(`${rewardvideo4}`)}`;
         gdtadvj.push(1);
         circlew = `${gdtadvj.length}`;
         iconbellactived *= circlew.length;
      while (dplusL.includes(`${kick2}`)) {
          let dataK = 4.0;
          let memberR = String.fromCharCode(103,95,55,50,95,113,115,116,101,112,0);
         dplusL = `${memberR.length * 2}`;
         dataK *= parseInt(`${dataK}`);
         memberR = `${parseInt(`${dataK}`) << (Math.min(5, Math.abs(3)))}`;
         break;
      }
       let confirmationR = 0;
       let forwarda = 2;
       let mailq = 4;
       let filledA = 3;
         confirmationR <<= Math.min(Math.abs(parseInt(`${rewardvideo4}`) >> (Math.min(1, Math.abs(mailq)))), 5);
      if (backwardp.includes(`${rewardvideo4}`)) {
          let reactnativeultimatelistviewf = 2.0;
         backwardp += `${parseInt(`${kick2}`) ^ mailq}`;
         reactnativeultimatelistviewf /= Math.max(5, parseInt(`${reactnativeultimatelistviewf}`));
      }
         mailq &= 1 & forwarda;
      l_counte += `${pathB.length}`;
   }
   for (let o = 0; o < 2; o++) {
      libavdeviceb = l_counte.length >= mathU;
   }
      clubi = new Map([[`${privatechatbgI}`, (1 & (privatechatbgI ? 4 : 5))]]);
       let subsD = String.fromCharCode(121,95,57,54,95,103,101,110,101,114,105,99,115,0);
       let trashE = 5.0;
       let umengX = 1;
          let abidetecto = 4.0;
         umengX /= Math.max(parseInt(`${trashE}`), 1);
         abidetecto -= parseInt(`${abidetecto}`) * parseInt(`${abidetecto}`);
      do {
         trashE *= (parseFloat(`${String.fromCharCode(104,0) == subsD ? umengX : subsD.length}`));
         if (4338716.0 == trashE) {
            break;
         }
      } while ((4338716.0 == trashE) && (trashE <= umengX));
      while (subsD.length <= 5) {
         trashE -= parseFloat(`${umengX | parseInt(`${trashE}`)}`);
         break;
      }
         subsD = "2";
      if ((umengX - 5) > 5) {
         umengX >>= Math.min(Math.abs(1 / (Math.max(4, parseInt(`${trashE}`)))), 5);
      }
         trashE *= parseFloat(`${umengX | subsD.length}`);
      if (3.84 == (parseFloat(`${umengX}`) + trashE) && (umengX * 2) == 2) {
         trashE *= parseFloat(`${2}`);
      }
          let suggestionk = new Map([[String.fromCharCode(99,104,97,110,110,101,108,115,95,52,95,50,50,0),true ], [String.fromCharCode(108,97,110,103,115,95,113,95,51,50,0),false ], [String.fromCharCode(120,95,52,49,95,109,111,111,118,0),false ]]);
          let malaysiaL = [6, 570, 616];
          let libcxxcomponentsS = 1;
         trashE += parseFloat(`${parseInt(`${trashE}`)}`);
         suggestionk = new Map([[`${suggestionk.size}`, malaysiaL.length ^ 1]]);
         malaysiaL.push(suggestionk.size ^ malaysiaL.length);
         libcxxcomponentsS -= malaysiaL.length % (Math.max(6, libcxxcomponentsS));
      for (let i = 0; i < 3; i++) {
         subsD = `${umengX + parseInt(`${trashE}`)}`;
      }
      l_counte = "1";
   for (let z = 0; z < 1; z++) {
       let projecte = String.fromCharCode(115,95,52,50,95,104,111,110,101,121,0);
       let yingO = String.fromCharCode(115,119,105,116,99,104,98,97,115,101,95,111,95,53,53,0);
       let cores = 3.0;
       let downQ = [849, 959, 151];
         cores /= Math.max(parseFloat(`${3}`), 3);
          let configureC = 2;
         projecte += `${parseInt(`${cores}`)}`;
         configureC *= 1 + configureC;
         projecte += "1";
          let humidityM = 2;
          let x_hash5 = [727, 669, 802];
          let actionA = new Map([[String.fromCharCode(119,95,57,54,95,115,116,97,99,107,115,0),String.fromCharCode(97,112,97,99,107,101,116,95,112,95,55,53,0)], [String.fromCharCode(97,121,111,117,116,95,120,95,56,53,0),String.fromCharCode(107,95,56,95,97,116,116,114,105,98,117,116,105,111,110,0)], [String.fromCharCode(110,101,116,105,115,114,95,104,95,51,56,0),String.fromCharCode(113,95,56,49,95,115,109,112,116,101,98,97,114,115,0)]]);
         projecte = `${x_hash5.length - actionA.size}`;
         humidityM %= Math.max(humidityM, 3);
         x_hash5.push(2);
          let scrollviewy = 2.0;
          let goalw = String.fromCharCode(100,116,115,104,100,95,103,95,54,55,0);
         projecte += `${2 | parseInt(`${scrollviewy}`)}`;
         scrollviewy -= goalw.length;
         goalw += `${(goalw == String.fromCharCode(68,0) ? goalw.length : goalw.length)}`;
         cores /= Math.max(parseFloat(`${parseInt(`${cores}`)}`), 3);
      while ((cores / 3.68) == 3.39) {
          let models8 = [830, 350, 930];
          let videovarS = String.fromCharCode(113,95,51,49,95,115,111,117,110,100,101,120,0);
          let crownn = String.fromCharCode(99,95,53,56,0);
          let nbatrophyG = String.fromCharCode(108,95,57,50,0);
         cores /= Math.max(4, parseFloat(`${crownn.length << (Math.min(1, videovarS.length))}`));
         models8.push(2 & models8.length);
         videovarS = `${1 >> (Math.min(5, models8.length))}`;
         crownn += `${models8.length}`;
         nbatrophyG = "3";
         break;
      }
      for (let d = 0; d < 1; d++) {
         projecte = `${projecte.length & yingO.length}`;
      }
         yingO = `${yingO.length}`;
         cores += parseFloat(`${yingO.length + downQ.length}`);
       let w_imageV = false;
      while (2 <= projecte.length) {
         yingO += `${((w_imageV ? 1 : 5) - parseInt(`${cores}`))}`;
         break;
      }
      privatechatbgI = yingO.startsWith(`${mathU}`);
   }
      albuml = !l_counte.endsWith(`${libavdeviceb}`);

    

   if (5 >= (clubi.size / 1) && clubi.size >= 1) {
       let otherr = false;
       let description_iv = String.fromCharCode(97,115,109,100,101,102,115,95,49,95,53,51,0);
       let anewsB = String.fromCharCode(109,95,54,52,95,100,105,121,102,112,0);
       let zoomn = new Map([[String.fromCharCode(115,103,105,114,108,101,95,53,95,55,57,0),827], [String.fromCharCode(115,117,115,112,101,110,100,95,121,95,53,54,0),344]]);
          let tempnodatagifM = String.fromCharCode(98,108,111,99,107,115,99,97,110,95,53,95,55,56,0);
          let flyert = String.fromCharCode(97,117,116,104,111,114,105,122,101,95,105,95,53,0);
         zoomn[description_iv] = description_iv.length;
         tempnodatagifM += `${1 - tempnodatagifM.length}`;
         flyert = `${tempnodatagifM.length * 1}`;
         description_iv = `${zoomn.size}`;
       let turnU = [163, 714];
       let iconclosewhitebg1 = [959, 181, 490];
      for (let t = 0; t < 2; t++) {
         zoomn = new Map([[`${zoomn.size}`, (description_iv == String.fromCharCode(83,0) ? description_iv.length : zoomn.size)]]);
      }
      do {
          let morey = String.fromCharCode(105,95,57,54,95,109,101,97,115,117,114,101,109,101,110,116,0);
          let sharemodalR = 0.0;
          let rewardo = 0;
          let favoriten = true;
         otherr = turnU.length <= 87;
         morey += `${3 * morey.length}`;
         sharemodalR *= (parseFloat(`${(favoriten ? 3 : 1) | parseInt(`${sharemodalR}`)}`));
         rewardo /= Math.max(1, 2 | morey.length);
         favoriten = 45.43 <= sharemodalR;
         if (otherr ? !otherr : otherr) {
            break;
         }
      } while ((!otherr) && (otherr ? !otherr : otherr));
      if (1 == (turnU.length & 2) || (iconclosewhitebg1.length & 2) == 4) {
          let commentl = 1.0;
          let exampleimagey = 0;
          let arrowup7 = 1;
          let graph8 = 5.0;
          let plashv = 4.0;
         turnU = [(anewsB == String.fromCharCode(48,0) ? parseInt(`${commentl}`) : anewsB.length)];
         commentl -= parseFloat(`${1}`);
         exampleimagey *= arrowup7 / 3;
         arrowup7 <<= Math.min(4, Math.abs(3 & arrowup7));
         graph8 -= parseFloat(`${parseInt(`${graph8}`) / (Math.max(2, arrowup7))}`);
         plashv /= Math.max(parseFloat(`${1}`), 5);
      }
         description_iv = "1";
      if (description_iv.includes(`${zoomn.size}`)) {
         zoomn[anewsB] = anewsB.length / (Math.max(8, description_iv.length));
      }
      while (3 < (turnU.length << (Math.min(Math.abs(5), 1))) || 2 < (anewsB.length << (Math.min(Math.abs(5), 5)))) {
         turnU.push(3);
         break;
      }
         description_iv = `${anewsB.length + 2}`;
         anewsB += `${1 | anewsB.length}`;
      do {
          let yellowredcardG = String.fromCharCode(105,110,116,95,114,95,56,55,0);
          let bingd = [40, 712];
          let firebase1 = String.fromCharCode(98,95,55,56,95,105,110,115,116,97,108,108,105,110,103,0);
          let proxyh = String.fromCharCode(108,111,99,107,95,118,95,52,54,0);
          let googlet = new Map([[String.fromCharCode(114,101,99,117,114,115,105,118,101,108,121,95,121,95,52,48,0),829], [String.fromCharCode(116,95,52,55,95,101,108,101,118,97,116,101,0),496], [String.fromCharCode(103,95,52,57,0),203]]);
         iconclosewhitebg1 = [2];
         yellowredcardG = `${yellowredcardG.length}`;
         bingd.push(yellowredcardG.length << (Math.min(Math.abs(3), 4)));
         firebase1 = `${yellowredcardG.length >> (Math.min(Math.abs(2), 4))}`;
         proxyh = `${(String.fromCharCode(85,0) == proxyh ? proxyh.length : bingd.length)}`;
         googlet = new Map([[yellowredcardG, yellowredcardG.length % (Math.max(5, firebase1.length))]]);
         if (iconclosewhitebg1.length == 2155649) {
            break;
         }
      } while (((anewsB.length / 4) <= 3 || (anewsB.length / (Math.max(5, iconclosewhitebg1.length))) <= 4) && (iconclosewhitebg1.length == 2155649));
      albuml = 97 >= pathB.length;
   }
   do {
      privatechatbgI = !privatechatbgI;
      if (privatechatbgI ? !privatechatbgI : privatechatbgI) {
         break;
      }
   } while ((privatechatbgI ? !privatechatbgI : privatechatbgI) && (privatechatbgI));
       let layout1 = 1.0;
         layout1 /= Math.max(parseInt(`${layout1}`) | parseInt(`${layout1}`), 3);
       let historyU = 4.0;
         layout1 -= parseInt(`${layout1}`) >> (Math.min(2, Math.abs(3)));
      pathB += `${((privatechatbgI ? 5 : 3))}`;
      y_titleW = `${1 - pathB.length}`;
      privatechatbgI = 34 <= clubi.size && l_counte == String.fromCharCode(122,0);
   do {
       let libffmpegkitz = 1.0;
          let dependenciesX = 4.0;
         libffmpegkitz /= Math.max(2 & parseInt(`${libffmpegkitz}`), 1);
         dependenciesX += parseFloat(`${parseInt(`${dependenciesX}`)}`);
         libffmpegkitz += 1 << (Math.min(Math.abs(parseInt(`${libffmpegkitz}`)), 2));
         libffmpegkitz += 3 ^ parseInt(`${libffmpegkitz}`);
      albuml = 65 < mathU || albuml;
      if (albuml ? !albuml : albuml) {
         break;
      }
   } while ((4 == l_counte.length && !albuml) && (albuml ? !albuml : albuml));
   if ((mathU & y_titleW.length) <= 3) {
      y_titleW += "1";
   }
   do {
      pathB += "3";
      if (String.fromCharCode(52,107,118,98,56,122,51,115,55,0) == pathB) {
         break;
      }
   } while ((!hiad8) && (String.fromCharCode(52,107,118,98,56,122,51,115,55,0) == pathB));
      libavdeviceb = (mathU % (Math.max(l_counte.length, 1))) < 42;
    

      mathU += (3 + (libavdeviceb ? 1 : 1));
   do {
      albuml = (((albuml ? pathB.length : 11) / (Math.max(6, pathB.length))) > 11);
      if (albuml ? !albuml : albuml) {
         break;
      }
   } while ((!y_titleW.startsWith(`${albuml}`)) && (albuml ? !albuml : albuml));
   for (let x = 0; x < 3; x++) {
       let mimoi = String.fromCharCode(101,95,55,54,95,112,114,101,115,101,110,99,101,0);
       let refreshn = String.fromCharCode(114,95,57,56,95,115,107,101,121,108,105,115,116,0);
      do {
         refreshn += `${mimoi.length << (Math.min(Math.abs(2), 2))}`;
         if (String.fromCharCode(108,48,55,115,115,57,100,117,48,0) == refreshn) {
            break;
         }
      } while ((mimoi == String.fromCharCode(97,0)) && (String.fromCharCode(108,48,55,115,115,57,100,117,48,0) == refreshn));
          let belln = 5;
          let iconfeedback1 = String.fromCharCode(114,101,99,105,112,105,101,110,116,95,109,95,57,50,0);
         mimoi = `${(mimoi == String.fromCharCode(114,0) ? mimoi.length : refreshn.length)}`;
         belln ^= (iconfeedback1 == String.fromCharCode(85,0) ? iconfeedback1.length : belln);
         refreshn += `${refreshn.length}`;
      while (refreshn.length >= mimoi.length) {
          let rewardX = String.fromCharCode(99,95,53,52,95,98,105,116,118,101,99,115,0);
          let overg = 1.0;
          let lessO = [String.fromCharCode(114,101,115,116,114,105,99,116,101,100,95,54,95,53,0), String.fromCharCode(105,95,55,48,95,103,101,111,116,97,103,115,0), String.fromCharCode(100,95,53,55,95,105,110,103,101,116,97,100,100,114,0)];
          let stores = String.fromCharCode(105,116,101,114,97,116,105,111,110,115,95,52,95,51,56,0);
          let dycreatorA = String.fromCharCode(99,95,50,54,95,114,117,108,101,98,111,111,107,0);
         mimoi = "2";
         rewardX += `${rewardX.length % 1}`;
         overg /= Math.max((String.fromCharCode(68,0) == stores ? rewardX.length : stores.length), 2);
         lessO = [parseInt(`${overg}`)];
         dycreatorA += `${dycreatorA.length}`;
         break;
      }
         refreshn += `${2 - refreshn.length}`;
         refreshn += "2";
      y_titleW += `${((albuml ? 5 : 1) << (Math.min(1, Math.abs(3))))}`;
   }
       let libswscalep = 3;
         libswscalep *= libswscalep;
         libswscalep >>= Math.min(Math.abs(libswscalep), 1);
      do {
          let statisticsT = String.fromCharCode(119,95,52,49,95,112,97,114,0);
          let valuesp = String.fromCharCode(106,95,49,95,112,97,105,114,105,110,103,115,0);
          let downloadedl = [String.fromCharCode(112,95,56,57,0), String.fromCharCode(117,110,115,99,104,101,100,117,108,101,95,104,95,49,48,0)];
          let vipsportq = [730, 432];
          let megaphonek = 1.0;
         libswscalep -= downloadedl.length >> (Math.min(Math.abs(3), 1));
         statisticsT = `${valuesp.length / 1}`;
         valuesp = `${vipsportq.length | 3}`;
         downloadedl = [3 | valuesp.length];
         vipsportq.push(valuesp.length % (Math.max(2, 4)));
         megaphonek *= parseFloat(`${2 & valuesp.length}`);
         if (1832249 == libswscalep) {
            break;
         }
      } while (((libswscalep | 5) < 3) && (1832249 == libswscalep));
      l_counte = `${2 << (Math.min(Math.abs(libswscalep), 1))}`;
      privatechatbgI = !hiad8 && clubi.size >= 19;
   if (albuml) {
      albuml = (!albuml ? !privatechatbgI : albuml);
   }
   if (!hiad8) {
      albuml = (y_titleW.length >> (Math.min(1, Math.abs(mathU)))) > 61;
   }
      l_counte = `${(y_titleW == String.fromCharCode(67,0) ? mathU : y_titleW.length)}`;
   for (let g = 0; g < 3; g++) {
      clubi = new Map([[`${mathU}`, 2]]);
   }
    setWidth(rightPanel.width);
   while (!hiad8) {
      hiad8 = pathB.length < 76;
      break;
   }
      y_titleW = `${(String.fromCharCode(54,0) == pathB ? pathB.length : (selection_ ? 1 : 5))}`;
      y_titleW += `${(l_counte == String.fromCharCode(87,0) ? (privatechatbgI ? 4 : 3) : l_counte.length)}`;
   while (!hiad8) {
      hiad8 = !privatechatbgI && mathU == 92;
      break;
   }
      privatechatbgI = !hiad8 || clubi.size >= 28;
   if (!l_counte.endsWith(`${hiad8}`)) {
      hiad8 = (((albuml ? l_counte.length : 14) % (Math.max(l_counte.length, 6))) > 14);
   }
   for (let x = 0; x < 2; x++) {
       let libcrashsdkE = 1.0;
       let proxyZ = 2.0;
         libcrashsdkE *= parseFloat(`${parseInt(`${proxyZ}`)}`);
      do {
         libcrashsdkE -= parseFloat(`${parseInt(`${libcrashsdkE}`) << (Math.min(Math.abs(parseInt(`${proxyZ}`)), 4))}`);
         if (libcrashsdkE == 524364.0) {
            break;
         }
      } while ((libcrashsdkE == proxyZ) && (libcrashsdkE == 524364.0));
       let carouselw = [73, 338];
          let codegenU = String.fromCharCode(104,101,120,116,105,108,101,95,111,95,51,51,0);
         proxyZ += parseFloat(`${codegenU.length | parseInt(`${libcrashsdkE}`)}`);
       let cornerkick6 = new Map([[String.fromCharCode(102,114,101,113,117,101,110,116,95,112,95,49,49,0),732], [String.fromCharCode(104,105,115,116,111,114,121,95,111,95,57,49,0),780], [String.fromCharCode(105,95,53,95,117,115,101,115,0),792]]);
         libcrashsdkE *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${libcrashsdkE}`)), 3))}`);
      selection_ = predictionp.includes(libavdeviceb);
   }
   while (3 == (2 - mathU) && mathU == 2) {
      mathU |= l_counte.length;
      break;
   }
   if (2 == mathU) {
       let notificationu = true;
       let sentryV = String.fromCharCode(99,104,97,108,108,101,110,103,101,95,118,95,51,55,0);
      if (2 == sentryV.length && notificationu) {
          let libtanK = String.fromCharCode(116,95,53,48,95,109,97,112,112,97,98,108,101,0);
          let launchv = 1;
          let indexo = new Map([[String.fromCharCode(111,112,115,99,97,108,101,95,54,95,52,50,0),false ], [String.fromCharCode(114,111,117,116,101,114,95,108,95,51,53,0),true ]]);
         notificationu = !notificationu;
         libtanK = "2";
         launchv >>= Math.min(Math.abs(libtanK.length >> (Math.min(Math.abs(2), 5))), 5);
         indexo[`${launchv}`] = indexo.size;
      }
          let profileframeX = [385, 831, 412];
          let index8 = String.fromCharCode(112,95,56,54,95,112,98,107,100,102,0);
         notificationu = !notificationu;
         profileframeX = [2 ^ index8.length];
         index8 += `${(index8 == String.fromCharCode(54,0) ? index8.length : profileframeX.length)}`;
      while (sentryV.length == 4 && notificationu) {
         sentryV += `${sentryV.length << (Math.min(Math.abs(3), 3))}`;
         break;
      }
      do {
         sentryV += `${(String.fromCharCode(95,0) == sentryV ? (notificationu ? 5 : 5) : sentryV.length)}`;
         if (1968447 == sentryV.length) {
            break;
         }
      } while ((sentryV.includes(`${notificationu}`)) && (1968447 == sentryV.length));
         sentryV += "2";
          let runtimeo = 5.0;
          let turnz = [String.fromCharCode(102,95,49,50,95,110,115,101,103,109,101,110,116,115,0), String.fromCharCode(111,95,55,55,95,104,113,112,101,108,0)];
          let sortD = false;
         sentryV = `${((notificationu ? 2 : 5) % (Math.max(3, 1)))}`;
         runtimeo /= Math.max(parseInt(`${runtimeo}`) ^ 3, 2);
         turnz.push(turnz.length);
         sortD = turnz.length == 34;
      mathU %= Math.max(3, predictionp.length);
   }

  };

  if (isFullScreen) {
       let changeD = new Map([[String.fromCharCode(98,95,51,50,95,113,117,105,99,107,99,111,109,112,114,101,115,115,0),692], [String.fromCharCode(102,116,118,115,112,108,105,116,98,97,114,95,54,95,57,54,0),575], [String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,52,95,50,54,0),771]]);
    let anythinkK = true;
    let loginN = 5.0;
    let toponG = 5;
    let zhubob = 3.0;
    let temperatureU = new Map([[String.fromCharCode(100,95,56,53,95,108,115,102,112,111,108,121,0),127], [String.fromCharCode(112,114,111,98,105,110,103,95,110,95,51,53,0),202], [String.fromCharCode(110,111,100,101,115,101,116,95,104,95,51,52,0),750]]);
    let profileactiveS = 0.0;
    let buildz = [282, 983];
    let expand3 = String.fromCharCode(101,95,51,95,115,99,114,101,101,110,115,104,111,116,0);
   do {
      changeD[`${toponG}`] = toponG;
      if (3025313 == changeD.size) {
         break;
      }
   } while ((anythinkK || (4 | changeD.size) < 5) && (3025313 == changeD.size));

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
   if (Array.from(changeD.values()).includes(profileactiveS)) {
      changeD = new Map([[`${anythinkK}`, toponG]]);
   }

  }
};
