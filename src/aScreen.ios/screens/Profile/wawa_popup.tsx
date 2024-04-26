import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
  RefreshControl,
} from 'react-native';
import ScreenContainer from '../../components/container/wawa_nterstitial_iconpipexpand';
import { RootStackScreenProps } from '@type/wawa_iconnewchat';
import { useTheme } from '@react-navigation/native';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';

import TitleWithBackButtonHeader from '../../components/header/wawa_matchinactive_header';
import axios from 'axios';
import { Keyboard } from 'react-native';
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from '@utility/wawa_iconpointscore';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import InviteStep from '../../components/invite/wawa_final';
import InviteCard from '../../components/invite/wawa_pangle_macau';

import InviteHeader from '../../components/invite/wawa_vipsport_header';
import FastImage from '../../components/common/wawa_iconarrowrightblack';
import LinearGradient from 'react-native-linear-gradient';
import { useAppSelector, useSelector } from '@hooks/wawa_root';
import {
  updateUserAuth,
  updateUserReferral,
} from '@redux/actions/wawa_loginsuccess';
import { useDispatch } from 'react-redux';
import { wawaEvent } from '@api';
import { wawaPhoneControls } from '@redux/reducers/wawa_umeng';
export default ({ navigation }: RootStackScreenProps<'邀请详情'>) => {
  const { colors, textVariants, icons, spacing } = useTheme();

  const userState = useSelector<wawaPhoneControls>('userReducer');
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);
  const [inviteList, setInviteList] = useState([]);

  const handleRefresh = async () => {
       let iconeye7 = String.fromCharCode(104,115,98,95,98,95,53,56,0);
    let dplusL = String.fromCharCode(116,95,49,53,95,114,100,106,112,103,99,111,109,0);
    let attributedstringA = String.fromCharCode(102,95,56,50,95,112,114,101,102,101,116,99,104,101,114,0);
    let libmapbufferjni0 = 1;
    let abidetectg = 5.0;
    let q_countV = String.fromCharCode(97,112,112,101,110,100,95,54,95,52,54,0);
    let basketballplayerplaceholderk = String.fromCharCode(101,114,114,109,115,103,95,99,95,50,56,0);
    let inouttargetredg = 5;
    let sourceG = String.fromCharCode(99,117,114,114,101,110,100,95,57,95,51,54,0);
    let coreG = true;
    let selectL: Map<any, any> = new Map([[String.fromCharCode(112,101,110,97,108,116,121,95,120,95,57,54,0),766], [String.fromCharCode(98,95,57,55,95,97,108,112,104,97,110,117,109,0),560]]);
    let redscoreballf = false;
    let sentry1 = 4;
    let resulty = false;
    let imagese: Array<any> = [902, 761, 883];
       let libane8 = 0.0;
       let profilepicW: Array<any> = [854, 820];
       let s_title5: Array<any> = [52, 956, 496];
         profilepicW = [parseInt(`${libane8}`)];
          let selectr = String.fromCharCode(119,95,53,95,114,101,115,105,100,117,101,0);
          let largebrightnessH = String.fromCharCode(102,108,118,101,110,99,95,119,95,51,57,0);
          let modityV = String.fromCharCode(113,117,97,114,116,95,52,95,51,56,0);
         s_title5.push(selectr.length - largebrightnessH.length);
         selectr += `${modityV.length << (Math.min(modityV.length, 5))}`;
         largebrightnessH = `${modityV.length}`;
      while (profilepicW.includes(s_title5.length)) {
          let basketballiconU = 0;
          let anytimeL = String.fromCharCode(98,108,97,107,101,115,95,113,95,56,56,0);
         s_title5.push(3);
         basketballiconU ^= anytimeL.length;
         anytimeL += `${basketballiconU | anytimeL.length}`;
         break;
      }
          let strM = true;
          let projectt = 0.0;
          let cornerkickk = 5.0;
         profilepicW = [parseInt(`${cornerkickk}`)];
         strM = 59.21 <= projectt;
         projectt += parseFloat(`${3 * parseInt(`${projectt}`)}`);
         cornerkickk -= ((strM ? 2 : 1) ^ parseInt(`${projectt}`));
       let combinedX = String.fromCharCode(100,99,116,120,100,99,95,122,95,53,51,0);
          let gmailn = 1.0;
         profilepicW.push((String.fromCharCode(73,0) == combinedX ? parseInt(`${gmailn}`) : combinedX.length));
      if ((s_title5.length << (Math.min(4, profilepicW.length))) < 4) {
          let clearM: Map<any, any> = new Map([[String.fromCharCode(116,105,108,101,115,95,55,95,56,51,0),505], [String.fromCharCode(115,97,118,101,95,119,95,50,0),173], [String.fromCharCode(103,95,53,54,95,101,118,97,115,97,112,112,0),864]]);
          let basketballdetailsbgA = String.fromCharCode(100,101,114,101,103,105,115,116,101,114,95,53,95,54,54,0);
          let combineG: Map<any, any> = new Map([[String.fromCharCode(98,95,52,56,95,109,97,115,116,101,114,105,110,103,0),792], [String.fromCharCode(117,95,50,52,95,114,97,110,100,111,109,0),3]]);
         profilepicW.push(profilepicW.length);
         clearM.set(`${clearM.size}`, combineG.size);
         basketballdetailsbgA += `${combineG.size}`;
      }
      while (!combinedX.endsWith(`${libane8}`)) {
         libane8 *= parseFloat(`${profilepicW.length}`);
         break;
      }
          let soundT = false;
          let helperg = 1.0;
          let appsB = String.fromCharCode(101,120,112,105,114,105,110,103,95,53,95,56,54,0);
         s_title5 = [appsB.length];
         soundT = !soundT;
         helperg /= Math.max(2, parseInt(`${helperg}`) - 1);
         appsB = `${parseInt(`${helperg}`) << (Math.min(4, Math.abs(2)))}`;
      dplusL = `${libmapbufferjni0}`;
      sourceG += `${((coreG ? 4 : 1))}`;
      selectL.set(`${libmapbufferjni0}`, 1);
      selectL.set(`${coreG}`, parseInt(`${abidetectg}`) << (Math.min(1, Math.abs(3))));
   if (coreG) {
      coreG = 45 >= dplusL.length && 45 >= iconeye7.length;
   }
      attributedstringA += "1";
      selectL.set(sourceG, sourceG.length);
      q_countV += `${iconeye7.length}`;
   while ((iconeye7.length >> (Math.min(Math.abs(4), 4))) >= 3 || (inouttargetredg >> (Math.min(iconeye7.length, 1))) >= 4) {
       let downloaderd = 0.0;
       let libruntimeexecutorh: Map<any, any> = new Map([[String.fromCharCode(113,95,51,50,95,118,99,116,101,115,116,0),false ], [String.fromCharCode(105,95,50,56,95,98,105,116,115,116,114,0),false ]]);
       let o_centerh: Array<any> = [749, 988];
       let sheetF = true;
       let favorite_ = String.fromCharCode(116,95,52,51,95,103,101,111,0);
         sheetF = favorite_.length >= 32;
      let loadingf = favorite_ == String.fromCharCode(121,118,110,106,50,108,0);
      do {
         favorite_ = `${2 ^ favorite_.length}`;
         if (loadingf) {
            break;
         }
      } while (loadingf && (favorite_.length > 3 || sheetF));
         favorite_ += "2";
       let clearb: Array<any> = [365, 549, 61];
      while (!sheetF || 1 <= favorite_.length) {
         favorite_ = `${((sheetF ? 3 : 3) / (Math.max(favorite_.length, 9)))}`;
         break;
      }
         clearb = [libruntimeexecutorh.size];
      if (o_centerh.length >= 5) {
         favorite_ = `${o_centerh.length}`;
      }
       let reactnativeratings1 = String.fromCharCode(114,95,55,48,95,101,120,104,97,117,115,116,0);
       let bootsplashO = String.fromCharCode(97,118,97,116,97,114,95,100,95,48,0);
         reactnativeratings1 += `${parseInt(`${downloaderd}`) / (Math.max(clearb.length, 3))}`;
      if (favorite_.length == 3) {
          let downloadH: Map<any, any> = new Map([[String.fromCharCode(114,116,112,102,98,95,104,95,51,53,0),true ], [String.fromCharCode(114,97,115,116,101,114,105,122,101,95,109,95,51,51,0),true ], [String.fromCharCode(104,95,51,54,95,113,112,101,108,100,115,112,0),false ]]);
          let thumbnailb = String.fromCharCode(108,95,52,50,95,109,105,100,105,0);
          let matchesR = String.fromCharCode(99,95,49,48,48,95,100,100,118,97,0);
          let moduley = false;
          let libane3 = String.fromCharCode(117,108,111,110,103,95,111,95,52,51,0);
         o_centerh = [(String.fromCharCode(74,0) == reactnativeratings1 ? clearb.length : reactnativeratings1.length)];
         downloadH = new Map([[thumbnailb, libane3.length]]);
         thumbnailb += `${libane3.length}`;
         matchesR += `${downloadH.size / (Math.max(matchesR.length, 4))}`;
         moduley = (19 >= ((!moduley ? 19 : thumbnailb.length) / (Math.max(thumbnailb.length, 8))));
      }
      if (sheetF) {
         sheetF = clearb.includes(o_centerh[0]);
      }
         bootsplashO += `${((sheetF ? 1 : 5) / 1)}`;
          let baidu5 = false;
          let middlewaret: Array<any> = [54, 588, 983];
         o_centerh.push(libruntimeexecutorh.size / (Math.max(1, 4)));
         baidu5 = 14 == middlewaret.length || middlewaret.length == 14;
      for (let s = 0; s < 2; s++) {
         sheetF = bootsplashO.length == 59 || !sheetF;
      }
      for (let i = 0; i < 1; i++) {
         o_centerh.push(libruntimeexecutorh.size % (Math.max(clearb.length, 9)));
      }
      inouttargetredg *= 2 | favorite_.length;
      break;
   }
       let anythinkg = 1.0;
       let splashe: Map<any, any> = new Map([[String.fromCharCode(120,95,49,53,95,105,115,111,112,101,110,113,117,111,116,101,0),489], [String.fromCharCode(99,108,111,115,101,100,95,121,95,56,53,0),286], [String.fromCharCode(105,110,116,101,114,114,97,99,116,105,118,101,95,118,95,49,49,0),249]]);
         anythinkg += 3;
      while (4.100 > anythinkg) {
         splashe = new Map([[`${splashe.size}`, splashe.size]]);
         break;
      }
         splashe = new Map([[`${splashe.size}`, 3]]);
      let mountingJ = anythinkg >= 8284998.0;
      do {
         anythinkg -= parseInt(`${anythinkg}`) - splashe.size;
         if (mountingJ) {
            break;
         }
      } while ((5 >= (4 % (Math.max(6, splashe.size)))) && mountingJ);
      if (splashe.size <= anythinkg) {
         anythinkg /= Math.max(4, parseInt(`${anythinkg}`));
      }
      if (!Array.from(splashe.values()).includes(anythinkg)) {
         splashe.set(`${anythinkg}`, splashe.size % (Math.max(1, 10)));
      }
      iconeye7 += `${selectL.size}`;
   while ((1 << (Math.min(5, q_countV.length))) > 1 || (libmapbufferjni0 << (Math.min(q_countV.length, 1))) > 1) {
      libmapbufferjni0 -= 1 + dplusL.length;
      break;
   }
   if (1 > iconeye7.length) {
      iconeye7 = `${(dplusL == String.fromCharCode(111,0) ? dplusL.length : (coreG ? 2 : 2))}`;
   }
   for (let o = 0; o < 3; o++) {
      libmapbufferjni0 <<= Math.min(Math.abs(libmapbufferjni0), 3);
   }

    setRefreshing(true);

      dplusL += `${(iconeye7 == String.fromCharCode(113,0) ? iconeye7.length : attributedstringA.length)}`;
      iconeye7 = `${libmapbufferjni0 * basketballplayerplaceholderk.length}`;
   if (2 > inouttargetredg) {
      selectL.set(basketballplayerplaceholderk, 1);
   }
   if (!coreG) {
       let lightL: Array<any> = [String.fromCharCode(117,95,57,55,95,99,111,118,97,108,101,110,116,0), String.fromCharCode(113,95,56,57,95,115,104,97,100,111,119,0)];
          let sellmathbackgroundK: Array<any> = [String.fromCharCode(99,115,99,104,101,109,101,95,119,95,51,52,0), String.fromCharCode(111,95,55,48,95,118,101,114,98,97,116,105,109,0)];
         lightL = [lightL.length | sellmathbackgroundK.length];
      let profileP = 6320316 >= lightL.length;
      do {
         lightL.push(3);
         if (profileP) {
            break;
         }
      } while (profileP && (2 < lightL.length));
         lightL = [lightL.length + lightL.length];
      q_countV = `${parseInt(`${abidetectg}`) & lightL.length}`;
   }
   let giftS = sourceG.length <= 8326007;
   do {
       let reactnavigation1: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,110,100,105,110,103,95,109,95,51,50,0),192], [String.fromCharCode(99,95,52,51,95,115,105,110,99,0),749], [String.fromCharCode(103,95,53,54,95,114,101,116,97,105,110,101,100,0),73]]);
          let utilsx = String.fromCharCode(115,97,118,101,114,95,118,95,57,54,0);
          let delegate_h1m = String.fromCharCode(102,95,57,57,95,100,111,112,115,0);
          let fastforwardV = true;
         reactnavigation1 = new Map([[`${reactnavigation1.size}`, (utilsx == String.fromCharCode(116,0) ? utilsx.length : reactnavigation1.size)]]);
         delegate_h1m = `${delegate_h1m.length}`;
         fastforwardV = (30 <= ((fastforwardV ? delegate_h1m.length : 30) << (Math.min(delegate_h1m.length, 3))));
          let page0: Array<any> = [58, 332];
          let iconchatsendg = 4.0;
         reactnavigation1 = new Map([[`${reactnavigation1.size}`, reactnavigation1.size]]);
         page0 = [parseInt(`${iconchatsendg}`)];
         iconchatsendg += page0.length;
      if (!Array.from(reactnavigation1.keys()).includes(`${reactnavigation1.size}`)) {
         reactnavigation1.set(`${reactnavigation1.size}`, 1 / (Math.max(6, reactnavigation1.size)));
      }
      sourceG += "3";
      if (giftS) {
         break;
      }
   } while ((sourceG.length >= 3) && giftS);
       let mails = true;
       let iconsharefriends7 = 2.0;
      for (let k = 0; k < 1; k++) {
          let bangt: Array<any> = [749, 275];
          let reactnativeultimatelistviewy = String.fromCharCode(109,117,116,101,100,95,52,95,57,0);
          let profileframel = String.fromCharCode(100,95,55,95,116,111,114,101,100,0);
         iconsharefriends7 -= 3;
         bangt = [bangt.length + 2];
         reactnativeultimatelistviewy = `${1 | reactnativeultimatelistviewy.length}`;
         profileframel = `${(reactnativeultimatelistviewy == String.fromCharCode(104,0) ? bangt.length : reactnativeultimatelistviewy.length)}`;
      }
      for (let o = 0; o < 1; o++) {
         mails = 89.66 == iconsharefriends7;
      }
          let bellreminder3 = 0.0;
         iconsharefriends7 -= parseInt(`${iconsharefriends7}`) % (Math.max(8, parseInt(`${bellreminder3}`)));
      while (!mails && 2.46 >= (2.17 - iconsharefriends7)) {
         mails = 53.84 >= iconsharefriends7;
         break;
      }
      while ((5.18 + iconsharefriends7) <= 1.0 || mails) {
         iconsharefriends7 += 2 * parseInt(`${iconsharefriends7}`);
         break;
      }
      for (let a = 0; a < 1; a++) {
         mails = iconsharefriends7 <= 50.76;
      }
      inouttargetredg <<= Math.min(Math.abs(inouttargetredg), 1);
   for (let p = 0; p < 1; p++) {
       let popupw = 3.0;
       let iconsettingn = false;
       let interstitialN = false;
       let borderlessL = String.fromCharCode(107,95,52,53,95,108,111,111,107,97,115,105,100,101,0);
       let classesC = 4;
      while ((4 | classesC) > 1) {
         iconsettingn = borderlessL == String.fromCharCode(70,0);
         break;
      }
      if (popupw >= 4.90 && (popupw - 4.90) >= 1.52) {
          let userQ = String.fromCharCode(103,101,115,116,117,114,101,95,116,95,57,49,0);
         popupw /= Math.max(1, parseFloat(`${userQ.length | 2}`));
      }
      for (let l = 0; l < 3; l++) {
         classesC %= Math.max(1, ((iconsettingn ? 3 : 2) - (interstitialN ? 3 : 2)));
      }
       let containerh = 2.0;
       let eighteenq = 1.0;
         popupw *= (parseFloat(`${(interstitialN ? 5 : 4) << (Math.min(Math.abs(parseInt(`${eighteenq}`)), 4))}`));
          let episoder = 1;
         borderlessL += "3";
         episoder += episoder;
      let nalyticsP = eighteenq <= 9371424.0;
      do {
         eighteenq += 2 % (Math.max(6, parseInt(`${eighteenq}`)));
         if (nalyticsP) {
            break;
         }
      } while ((popupw > eighteenq) && nalyticsP);
      for (let s = 0; s < 3; s++) {
         popupw -= parseFloat(`${borderlessL.length % 2}`);
      }
         classesC %= Math.max(5, (3 ^ (interstitialN ? 2 : 2)));
      let iconstarF = 8080801 >= borderlessL.length;
      do {
         borderlessL = `${((interstitialN ? 3 : 1) - parseInt(`${eighteenq}`))}`;
         if (iconstarF) {
            break;
         }
      } while (iconstarF && (borderlessL.length >= classesC));
      let arrowdowng = borderlessL == String.fromCharCode(121,52,50,53,50,0);
      do {
         borderlessL += `${(parseInt(`${popupw}`) & (iconsettingn ? 1 : 1))}`;
         if (arrowdowng) {
            break;
         }
      } while ((!borderlessL.includes(`${popupw}`)) && arrowdowng);
      let morec = containerh <= 8550128.0;
      do {
          let gdtadvO = 5.0;
          let disconnectedlogow = String.fromCharCode(112,95,54,49,95,110,101,119,108,105,110,101,115,0);
         containerh /= Math.max(parseInt(`${gdtadvO}`) >> (Math.min(4, Math.abs(3))), 2);
         gdtadvO -= parseFloat(`${disconnectedlogow.length}`);
         disconnectedlogow = `${disconnectedlogow.length ^ 1}`;
         if (morec) {
            break;
         }
      } while ((5 == (classesC * parseInt(`${containerh}`)) && 4.67 == (containerh * 4.50)) && morec);
      while (5.60 == (containerh / (Math.max(5.25, 8))) || (containerh / (Math.max(5, popupw))) == 5.25) {
          let tickedo = 2.0;
          let acceptedJ: Array<any> = [626, 208, 807];
         containerh += ((iconsettingn ? 3 : 5) + parseInt(`${popupw}`));
         tickedo -= parseInt(`${tickedo}`);
         acceptedJ.push(acceptedJ.length >> (Math.min(Math.abs(2), 4)));
         break;
      }
      for (let r = 0; r < 2; r++) {
          let recommendationx: Array<any> = [597, 426];
          let mbbannerJ = 0.0;
          let loginsuccesse = String.fromCharCode(111,112,116,105,111,110,97,108,108,121,95,116,95,57,49,0);
          let yellowtoredl = 3.0;
         eighteenq -= ((iconsettingn ? 5 : 1) << (Math.min(Math.abs(parseInt(`${containerh}`)), 1)));
         recommendationx.push(parseInt(`${mbbannerJ}`));
         loginsuccesse += `${parseInt(`${yellowtoredl}`)}`;
         yellowtoredl += parseFloat(`${parseInt(`${mbbannerJ}`) >> (Math.min(2, Math.abs(parseInt(`${yellowtoredl}`))))}`);
      }
      if (4.81 <= (containerh - popupw) || (containerh - popupw) <= 4.81) {
         popupw -= (parseFloat(`${(interstitialN ? 2 : 4) / (Math.max(classesC, 7))}`));
      }
      selectL.set(`${classesC}`, (String.fromCharCode(86,0) == sourceG ? classesC : sourceG.length));
   }
       let confirmationp = String.fromCharCode(106,95,57,54,95,97,99,107,101,100,0);
       let final_vrU: Map<any, any> = new Map([[String.fromCharCode(100,111,117,98,108,105,110,103,95,107,95,55,51,0),145], [String.fromCharCode(107,95,50,54,95,111,110,121,120,100,0),501]]);
      if (!confirmationp.endsWith(`${final_vrU.size}`)) {
          let profileinactiveD = String.fromCharCode(107,95,54,55,95,99,111,110,115,116,0);
         final_vrU = new Map([[`${final_vrU.size}`, confirmationp.length ^ final_vrU.size]]);
         profileinactiveD += `${(profileinactiveD == String.fromCharCode(104,0) ? profileinactiveD.length : profileinactiveD.length)}`;
      }
      while (confirmationp.endsWith(`${final_vrU.size}`)) {
         final_vrU = new Map([[`${final_vrU.size}`, 3]]);
         break;
      }
          let weiboL: Array<any> = [String.fromCharCode(122,101,114,111,115,95,102,95,52,57,0), String.fromCharCode(100,111,117,98,108,101,105,110,116,115,116,114,95,101,95,57,56,0), String.fromCharCode(110,95,50,55,95,114,101,97,115,111,110,115,0)];
         final_vrU.set(`${confirmationp}`, 3);
         weiboL = [weiboL.length];
         confirmationp += `${confirmationp.length}`;
      while (final_vrU.size >= confirmationp.length) {
          let teamdetailsbgj = String.fromCharCode(100,97,112,112,95,48,95,55,49,0);
          let hookj = String.fromCharCode(108,95,51,48,95,99,97,112,105,0);
          let showQ = String.fromCharCode(98,114,111,97,100,99,97,115,116,95,116,95,49,49,0);
         final_vrU = new Map([[teamdetailsbgj, (confirmationp == String.fromCharCode(105,0) ? teamdetailsbgj.length : confirmationp.length)]]);
         hookj += `${showQ.length}`;
         showQ += `${showQ.length + 1}`;
         break;
      }
         confirmationp = `${final_vrU.size % (Math.max(confirmationp.length, 1))}`;
      inouttargetredg %= Math.max(4, 2);
      libmapbufferjni0 <<= Math.min(3, Math.abs(libmapbufferjni0));
   while (basketballplayerplaceholderk.length < q_countV.length) {
       let update_cr = 2.0;
       let latn0 = false;
       let plashH = 0;
       let orangeclockf = false;
       let kicks = 4.0;
         update_cr /= Math.max((parseInt(`${kicks}`) | (orangeclockf ? 4 : 4)), 1);
         latn0 = 81 < (kicks + plashH);
      if (1.30 <= (update_cr + kicks) && (1.30 + kicks) <= 5.94) {
          let bellu = String.fromCharCode(114,101,115,105,100,117,97,108,95,104,95,54,54,0);
          let mintegrall = true;
          let commonG = 5;
         update_cr *= plashH & parseInt(`${kicks}`);
         bellu += `${3 | commonG}`;
         mintegrall = !mintegrall;
         commonG >>= Math.min(2, Math.abs(commonG * 3));
      }
      for (let r = 0; r < 2; r++) {
         update_cr /= Math.max(3, plashH);
      }
      for (let i = 0; i < 2; i++) {
          let iconsaveimageO = String.fromCharCode(117,110,100,101,108,101,103,97,116,101,95,100,95,54,56,0);
          let default_jo: Array<any> = [493, 167, 955];
          let form1 = true;
          let iconbackwhiteb = 0;
         orangeclockf = (form1 ? !orangeclockf : !form1);
         iconsaveimageO += `${iconsaveimageO.length}`;
         default_jo.push((String.fromCharCode(54,0) == iconsaveimageO ? default_jo.length : iconsaveimageO.length));
         iconbackwhiteb %= Math.max(3, 1 + iconsaveimageO.length);
      }
      let injuryu = kicks <= 7519571.0;
      do {
          let unfillz = String.fromCharCode(99,95,50,53,95,99,111,109,112,111,115,101,100,0);
         kicks += (parseFloat(`${parseInt(`${update_cr}`) - (latn0 ? 2 : 1)}`));
         unfillz = `${unfillz.length}`;
         if (injuryu) {
            break;
         }
      } while (injuryu && (1 >= (4 + plashH) || (plashH / 4) >= 1));
         update_cr *= 3;
         plashH *= plashH;
         kicks /= Math.max(1, parseFloat(`${3 % (Math.max(parseInt(`${update_cr}`), 2))}`));
       let notificationd = 4.0;
       let confirmationz = 2.0;
          let a_viewo = 0.0;
          let clearQ: Array<any> = [937, 594];
          let humidityC = 3.0;
         plashH &= (parseInt(`${notificationd}`) & (latn0 ? 5 : 1));
         a_viewo *= 1 & parseInt(`${humidityC}`);
         clearQ.push(parseInt(`${humidityC}`) + 2);
      if (!latn0 || !orangeclockf) {
          let statisticsactives = String.fromCharCode(111,95,52,48,95,105,109,112,108,101,109,101,110,116,115,0);
          let spinnerL = 5.0;
          let gesture8: Map<any, any> = new Map([[String.fromCharCode(105,95,49,48,48,95,112,115,110,114,104,118,115,0),279], [String.fromCharCode(105,110,105,116,97,99,107,95,121,95,57,51,0),803], [String.fromCharCode(112,114,101,115,117,109,101,95,113,95,49,48,0),994]]);
          let shirtq = 0.0;
         orangeclockf = plashH < 18 || kicks < 13.29;
         statisticsactives = "2";
         spinnerL *= (statisticsactives == String.fromCharCode(52,0) ? statisticsactives.length : gesture8.size);
         gesture8 = new Map([[`${gesture8.size}`, 1]]);
         shirtq += 2;
      }
          let codeE = 1;
          let iconnotificationnewQ: Array<any> = [238, 268, 641];
          let libanev = 4.0;
         latn0 = update_cr < confirmationz;
         codeE <<= Math.min(4, Math.abs(parseInt(`${libanev}`) << (Math.min(iconnotificationnewQ.length, 5))));
         iconnotificationnewQ = [iconnotificationnewQ.length];
         libanev -= codeE;
       let reactnavigationh = String.fromCharCode(114,95,50,55,95,111,112,117,115,108,97,99,105,110,103,0);
       let videoy = String.fromCharCode(107,95,51,56,95,103,117,105,100,101,0);
         videoy += `${3 & parseInt(`${update_cr}`)}`;
      basketballplayerplaceholderk += `${(plashH * (latn0 ? 1 : 4))}`;
      break;
   }
      selectL = new Map([[`${selectL.size}`, (selectL.size | (coreG ? 5 : 3))]]);
   if ((2 * basketballplayerplaceholderk.length) >= 5 && (2 * basketballplayerplaceholderk.length) >= 3) {
      basketballplayerplaceholderk = `${sentry1 * 1}`;
   }
      basketballplayerplaceholderk += `${libmapbufferjni0}`;
    await refreshUserState();

   if (Array.from(selectL.values()).includes(sentry1)) {
       let refreshborderlessw = false;
       let basketballiconP = String.fromCharCode(100,101,99,111,109,112,111,115,101,105,95,97,95,49,0);
       let untickl = true;
       let darkC = 1.0;
       let showlessU = 3.0;
          let mimoo = false;
          let with_r1Y = String.fromCharCode(117,95,52,53,95,106,115,116,114,105,110,103,0);
         showlessU += (2 + (refreshborderlessw ? 2 : 2));
         mimoo = with_r1Y.length >= 95;
         with_r1Y = `${with_r1Y.length}`;
         darkC += 2 ^ parseInt(`${darkC}`);
         basketballiconP = `${((untickl ? 2 : 3) + (refreshborderlessw ? 5 : 3))}`;
      while (refreshborderlessw) {
         basketballiconP = `${((refreshborderlessw ? 2 : 1))}`;
         break;
      }
         darkC /= Math.max(1, parseInt(`${darkC}`));
      let readD = darkC <= 5468499.0;
      do {
          let skipi: Array<any> = [String.fromCharCode(118,115,101,114,118,105,99,101,95,56,95,55,49,0), String.fromCharCode(114,95,52,51,95,111,112,116,115,0), String.fromCharCode(100,101,99,108,97,114,101,100,95,98,95,54,49,0)];
          let navigationU = String.fromCharCode(115,95,50,0);
         darkC *= (basketballiconP.length >> (Math.min(1, Math.abs((refreshborderlessw ? 5 : 2)))));
         skipi = [2];
         navigationU += "3";
         if (readD) {
            break;
         }
      } while (((darkC + 5.59) >= 1.73 || 5.59 >= (darkC + showlessU)) && readD);
         darkC -= ((untickl ? 1 : 5) | parseInt(`${showlessU}`));
         refreshborderlessw = darkC < 47.12 && !refreshborderlessw;
      sentry1 ^= basketballiconP.length | 3;
   }
       let bellb = true;
       let catalogU = 1.0;
          let commonQ = String.fromCharCode(115,105,110,100,101,120,95,118,95,56,56,0);
          let suboutn = String.fromCharCode(112,95,50,54,95,109,98,101,100,103,101,0);
         catalogU += 3 + parseInt(`${catalogU}`);
         commonQ = `${(String.fromCharCode(103,0) == commonQ ? suboutn.length : commonQ.length)}`;
         suboutn = `${commonQ.length * suboutn.length}`;
      if (2.64 == (1.52 - catalogU) || !bellb) {
         catalogU *= 2 * parseInt(`${catalogU}`);
      }
       let indicatore: Map<any, any> = new Map([[String.fromCharCode(121,95,55,54,95,102,101,110,99,0),795], [String.fromCharCode(115,104,111,119,115,112,101,99,116,114,117,109,112,105,99,95,102,95,49,0),837]]);
       let modalB: Map<any, any> = new Map([[String.fromCharCode(108,95,56,57,95,105,108,98,99,102,105,120,0),String.fromCharCode(104,95,49,56,95,101,120,116,101,110,115,105,111,110,0)], [String.fromCharCode(103,95,48,95,99,97,112,105,116,97,108,115,0),String.fromCharCode(106,95,55,49,95,106,115,105,109,100,99,102,103,0)]]);
         catalogU += (parseInt(`${catalogU}`) % (Math.max(2, (bellb ? 4 : 5))));
         catalogU -= parseInt(`${catalogU}`) / (Math.max(1, 7));
         bellb = 22.14 <= catalogU;
      iconeye7 += `${selectL.size}`;
   for (let a = 0; a < 2; a++) {
      coreG = 61 >= sourceG.length;
   }
   let qcopy_v7e = sourceG == String.fromCharCode(110,98,105,113,118,0);
   do {
      sourceG = `${libmapbufferjni0}`;
      if (qcopy_v7e) {
         break;
      }
   } while (qcopy_v7e && (coreG));
       let cornerA = false;
       let commentV = String.fromCharCode(100,105,115,112,111,115,97,98,108,101,95,107,95,52,53,0);
       let pushS: Array<any> = [624, 211, 579];
       let faviconq = false;
         faviconq = (((!faviconq ? pushS.length : 54) ^ pushS.length) == 54);
         faviconq = (pushS.length << (Math.min(commentV.length, 4))) > 19;
      if (!faviconq) {
         pushS = [(commentV == String.fromCharCode(76,0) ? (cornerA ? 3 : 4) : commentV.length)];
      }
         pushS.push(2 & commentV.length);
         commentV = `${((cornerA ? 3 : 5) << (Math.min(3, Math.abs(1))))}`;
      if (!faviconq && cornerA) {
          let f_managere = String.fromCharCode(103,95,55,55,95,98,109,111,100,101,0);
          let stylesp: Map<any, any> = new Map([[String.fromCharCode(97,95,53,95,101,120,99,108,117,100,105,110,103,0),398], [String.fromCharCode(108,95,50,48,95,114,116,108,0),736]]);
          let iconstar6 = 4;
          let spinnerS: Array<any> = [581, 62, 339];
          let iconorientationv = String.fromCharCode(117,110,100,111,95,97,95,52,55,0);
         faviconq = stylesp.size > 43;
         f_managere += `${iconstar6 / (Math.max(f_managere.length, 10))}`;
         stylesp.set(iconorientationv, spinnerS.length ^ 2);
         iconstar6 %= Math.max(3, spinnerS.length);
         iconorientationv += `${spinnerS.length}`;
      }
         cornerA = (14 > ((!faviconq ? 14 : pushS.length) << (Math.min(pushS.length, 2))));
         faviconq = pushS.length >= 2;
      selectL.set(iconeye7, ((redscoreballf ? 2 : 1) | iconeye7.length));
   for (let u = 0; u < 2; u++) {
      dplusL += `${parseInt(`${abidetectg}`) | basketballplayerplaceholderk.length}`;
   }
       let ewardedQ: Map<any, any> = new Map([[String.fromCharCode(109,111,118,116,101,120,116,115,117,98,95,114,95,51,56,0),false ], [String.fromCharCode(115,104,111,119,105,110,103,95,107,95,50,48,0),false ]]);
          let graphicsR = String.fromCharCode(114,101,115,105,100,117,97,108,95,105,95,53,48,0);
          let sourceN = true;
         ewardedQ.set(graphicsR, (graphicsR == String.fromCharCode(82,0) ? (sourceN ? 5 : 1) : graphicsR.length));
      if ((ewardedQ.size & ewardedQ.size) == 1) {
         ewardedQ = new Map([[`${ewardedQ.size}`, 1 | ewardedQ.size]]);
      }
         ewardedQ.set(`${ewardedQ.size}`, ewardedQ.size * 2);
      libmapbufferjni0 -= parseInt(`${abidetectg}`) >> (Math.min(1, Math.abs(libmapbufferjni0)));
   while (1 < libmapbufferjni0) {
      libmapbufferjni0 &= 2;
      break;
   }
   for (let f = 0; f < 3; f++) {
      inouttargetredg /= Math.max(4, ((redscoreballf ? 5 : 4) / 2));
   }
   let minivodc = 5238943 <= basketballplayerplaceholderk.length;
   do {
      basketballplayerplaceholderk += `${parseInt(`${abidetectg}`) << (Math.min(1, Math.abs(3)))}`;
      if (minivodc) {
         break;
      }
   } while (minivodc && (q_countV.length <= 5));
   let directF = 8130032 <= q_countV.length;
   do {
       let volumen = 1;
       let loadingh = String.fromCharCode(109,95,57,55,95,103,97,117,103,101,0);
       let collection0 = String.fromCharCode(101,95,57,50,95,112,97,114,116,110,101,114,0);
         volumen <<= Math.min(Math.abs(collection0.length / (Math.max(3, 9))), 4);
          let yellowtoredH = String.fromCharCode(122,95,55,56,95,117,116,120,111,115,0);
         loadingh = `${yellowtoredH.length % (Math.max(3, 9))}`;
      let libsentryQ = collection0.length >= 8167643;
      do {
          let rankW = String.fromCharCode(109,95,49,49,95,99,111,109,98,105,110,101,100,0);
          let homeactiveG = String.fromCharCode(102,95,50,57,95,97,112,112,101,97,114,105,110,103,0);
          let bellreminderY = false;
          let clockW = 5.0;
         collection0 += `${homeactiveG.length}`;
         rankW += `${(1 & (bellreminderY ? 4 : 3))}`;
         homeactiveG = `${((bellreminderY ? 3 : 3) - rankW.length)}`;
         clockW /= Math.max(((bellreminderY ? 5 : 5)), 3);
         if (libsentryQ) {
            break;
         }
      } while (libsentryQ && ((volumen + 2) >= 2));
         loadingh = "2";
      while ((collection0.length << (Math.min(1, Math.abs(volumen)))) < 1) {
         volumen -= 3;
         break;
      }
      if ((collection0.length ^ volumen) == 3 || 5 == (3 ^ collection0.length)) {
         collection0 = `${loadingh.length | 3}`;
      }
          let predictionarrowp = 0;
          let langkeyv: Array<any> = [471, 716];
          let libreactM = String.fromCharCode(109,97,116,114,105,120,102,95,102,95,52,55,0);
         loadingh = `${predictionarrowp}`;
         predictionarrowp |= libreactM.length % (Math.max(1, 3));
         langkeyv = [langkeyv.length + libreactM.length];
       let orangetickc: Array<any> = [String.fromCharCode(111,95,53,54,95,115,117,98,109,105,116,0), String.fromCharCode(100,95,56,48,95,101,110,99,111,100,97,98,108,101,115,0), String.fromCharCode(108,111,103,103,101,100,95,107,95,53,49,0)];
       let goalb: Array<any> = [998, 328];
         collection0 = `${collection0.length}`;
      q_countV = `${(String.fromCharCode(56,0) == loadingh ? (coreG ? 2 : 2) : loadingh.length)}`;
      if (directF) {
         break;
      }
   } while (directF && (!q_countV.startsWith(`${attributedstringA.length}`)));
   let iconstarN = String.fromCharCode(110,118,122,57,118,120,0) == sourceG;
   do {
      sourceG = `${sourceG.length / (Math.max(3, 8))}`;
      if (iconstarN) {
         break;
      }
   } while ((3.15 < (parseFloat(`${sourceG.length}`) + abidetectg) || 3.15 < (parseFloat(`${sourceG.length}`) + abidetectg)) && iconstarN);
      redscoreballf = (dplusL.length - inouttargetredg) <= 65;
    setRefreshing(false);
  };
  const refreshUserState = async () => {
       let countryC = 3.0;
    let eactl: Map<any, any> = new Map([[String.fromCharCode(112,117,116,105,110,116,95,116,95,50,49,0),263], [String.fromCharCode(115,105,109,117,108,116,97,110,101,111,117,115,95,122,95,52,53,0),4], [String.fromCharCode(116,95,50,55,95,103,109,111,99,107,0),768]]);
    let backE = String.fromCharCode(102,95,52,53,95,115,121,110,116,104,102,105,108,116,0);
    let iconadslinkS = 4;
    let foregroundU = 5.0;
    let orangeuparrow9: Map<any, any> = new Map([[String.fromCharCode(106,95,52,48,95,109,97,103,110,105,116,117,100,101,0),false ], [String.fromCharCode(100,111,99,115,95,107,95,53,57,0),false ], [String.fromCharCode(115,95,57,95,99,111,114,114,101,115,112,111,110,100,101,110,116,115,0),true ]]);
    let heartV = String.fromCharCode(117,95,53,52,95,111,99,99,117,114,114,101,110,99,101,115,0);
    let models3 = String.fromCharCode(119,95,55,49,95,121,111,117,114,0);
    let binddatasD = String.fromCharCode(100,95,53,56,95,109,111,109,101,110,116,0);
    let gpayV = true;
    let confirmation8 = String.fromCharCode(101,95,53,56,95,115,101,108,101,99,116,105,111,110,115,0);
   while (orangeuparrow9.size > backE.length) {
      orangeuparrow9 = new Map([[`${eactl.size}`, eactl.size]]);
      break;
   }
   for (let p = 0; p < 3; p++) {
      iconadslinkS ^= orangeuparrow9.size;
   }
   if (iconadslinkS <= eactl.size) {
       let halff = 5.0;
       let directj = 5;
       let castB: Map<any, any> = new Map([[String.fromCharCode(106,95,51,57,95,114,101,97,100,98,121,116,101,0),388], [String.fromCharCode(99,108,117,116,95,53,95,52,49,0),25]]);
       let homeloading9: Map<any, any> = new Map([[String.fromCharCode(103,95,57,49,95,111,112,117,115,108,97,99,105,110,103,0),312], [String.fromCharCode(97,95,55,53,95,98,111,114,100,101,114,115,0),480]]);
       let componentregistryO: Array<any> = [830, 857, 698];
       let rocketP = true;
      let predictionbuttonL = 8431382 >= castB.size;
      do {
         castB.set(`${castB.size}`, 2 * castB.size);
         if (predictionbuttonL) {
            break;
         }
      } while (predictionbuttonL && ((castB.size + 4) > 5));
      while (!rocketP) {
         homeloading9.set(`${componentregistryO.length}`, homeloading9.size);
         break;
      }
      if ((1.37 + halff) == 3.31 || 1.37 == halff) {
          let default_7Q = 5;
         halff += parseFloat(`${1}`);
         default_7Q -= default_7Q - 1;
      }
         homeloading9.set(`${halff}`, castB.size % 2);
      while (castB.get(`${halff}`) == null) {
          let arrow4 = String.fromCharCode(105,118,97,114,95,122,95,51,52,0);
          let clubi = 3;
          let mbnativeE = String.fromCharCode(100,101,97,108,108,111,99,95,54,95,49,55,0);
          let iconsubssuccessc = 2;
          let sentrym: Map<any, any> = new Map([[String.fromCharCode(115,108,105,99,101,116,104,114,101,97,100,95,49,95,50,48,0),String.fromCharCode(99,95,49,55,95,119,105,108,100,99,97,114,100,0)], [String.fromCharCode(117,100,112,108,105,116,101,95,116,95,51,57,0),String.fromCharCode(115,101,115,115,105,111,110,105,100,95,49,95,55,48,0)], [String.fromCharCode(106,95,49,51,95,103,110,111,115,105,115,0),String.fromCharCode(106,95,49,49,95,98,114,101,103,0)]]);
         halff /= Math.max(parseFloat(`${iconsubssuccessc}`), 5);
         arrow4 += `${1 * sentrym.size}`;
         clubi += arrow4.length;
         mbnativeE = "2";
         iconsubssuccessc *= sentrym.size - mbnativeE.length;
         break;
      }
      for (let m = 0; m < 2; m++) {
         componentregistryO = [componentregistryO.length];
      }
      for (let a = 0; a < 3; a++) {
         halff += parseFloat(`${2 & parseInt(`${halff}`)}`);
      }
      if (4 < (homeloading9.size * 2) || !rocketP) {
         rocketP = ((castB.size >> (Math.min(1, Math.abs((!rocketP ? castB.size : 53))))) >= 91);
      }
      while (2 >= (componentregistryO.length & 5) && 5 >= (componentregistryO.length & directj)) {
         directj *= ((rocketP ? 2 : 5) % (Math.max(2, 6)));
         break;
      }
          let user1 = 5.0;
         homeloading9.set(`${user1}`, 3);
          let arrowG = 0.0;
          let footballtrophyF: Map<any, any> = new Map([[String.fromCharCode(107,95,52,53,95,99,111,108,108,101,116,105,111,110,0),String.fromCharCode(108,95,57,49,95,101,108,101,109,101,110,116,0)], [String.fromCharCode(106,114,101,102,95,107,95,56,48,0),String.fromCharCode(101,108,108,105,112,115,101,95,50,95,50,49,0)], [String.fromCharCode(118,95,56,55,95,116,97,107,101,111,118,101,114,0),String.fromCharCode(116,101,120,116,117,114,101,100,95,117,95,51,57,0)]]);
          let scheduleri = 4;
         directj |= ((rocketP ? 1 : 5) + parseInt(`${arrowG}`));
         arrowG += parseFloat(`${scheduleri}`);
         footballtrophyF = new Map([[`${footballtrophyF.size}`, 3]]);
         scheduleri %= Math.max(footballtrophyF.size, 5);
         halff += parseFloat(`${2 >> (Math.min(1, Math.abs(castB.size)))}`);
         castB = new Map([[`${homeloading9.size}`, componentregistryO.length]]);
      for (let y = 0; y < 3; y++) {
         componentregistryO.push(directj);
      }
      iconadslinkS <<= Math.min(5, Math.abs(3));
   }
   while ((eactl.size | 2) < 4 || (2 | backE.length) < 5) {
       let carouselJ: Map<any, any> = new Map([[String.fromCharCode(121,95,56,50,95,99,97,118,115,105,100,99,116,0),641], [String.fromCharCode(118,100,112,97,117,95,50,95,50,55,0),139], [String.fromCharCode(118,95,53,56,95,116,102,114,97,0),558]]);
       let typesP: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,105,111,117,115,95,53,95,54,55,0),887], [String.fromCharCode(115,95,57,51,95,99,111,110,116,114,111,108,101,114,115,0),544]]);
       let unimplementedviewt: Map<any, any> = new Map([[String.fromCharCode(103,101,116,95,117,95,54,54,0),824], [String.fromCharCode(100,105,115,109,105,115,115,105,110,103,95,117,95,52,48,0),954]]);
       let modelsl = String.fromCharCode(121,95,56,95,102,108,101,120,102,101,99,0);
      while (!Array.from(typesP.values()).includes(carouselJ.size)) {
         typesP = new Map([[`${unimplementedviewt.size}`, 2]]);
         break;
      }
      let currentT = 5489880 >= typesP.size;
      do {
         typesP.set(`${modelsl}`, 3);
         if (currentT) {
            break;
         }
      } while (currentT && (modelsl.length < typesP.size));
      for (let j = 0; j < 1; j++) {
         carouselJ = new Map([[`${typesP.size}`, modelsl.length]]);
      }
      let tempnodatar = modelsl.length >= 9519264;
      do {
          let dragE = String.fromCharCode(101,95,57,57,95,100,117,114,97,116,105,111,110,115,0);
         modelsl = `${unimplementedviewt.size / (Math.max(typesP.size, 3))}`;
         dragE = `${(dragE == String.fromCharCode(105,0) ? dragE.length : dragE.length)}`;
         if (tempnodatar) {
            break;
         }
      } while ((unimplementedviewt.size > 4) && tempnodatar);
      let serviceS = unimplementedviewt.size <= 9742597;
      do {
         unimplementedviewt = new Map([[`${typesP.size}`, typesP.size]]);
         if (serviceS) {
            break;
         }
      } while (serviceS && (!Array.from(unimplementedviewt.keys()).includes(`${typesP.size}`)));
      if (5 <= (carouselJ.size | modelsl.length) && (5 | modelsl.length) <= 1) {
         modelsl = `${unimplementedviewt.size % (Math.max(7, modelsl.length))}`;
      }
         typesP = new Map([[`${typesP.size}`, typesP.size]]);
      while (modelsl.includes(`${carouselJ.size}`)) {
         carouselJ = new Map([[`${typesP.size}`, carouselJ.size % (Math.max(3, 4))]]);
         break;
      }
          let cancell = String.fromCharCode(102,95,54,49,0);
          let firebased = 3.0;
          let leakcheckerB = 4;
         typesP = new Map([[cancell, modelsl.length]]);
         cancell = `${parseInt(`${firebased}`) ^ leakcheckerB}`;
         firebased *= parseFloat(`${parseInt(`${firebased}`) * 3}`);
         leakcheckerB &= parseInt(`${firebased}`);
      while (!Array.from(unimplementedviewt.keys()).includes(`${carouselJ.size}`)) {
         unimplementedviewt = new Map([[`${unimplementedviewt.size}`, 1]]);
         break;
      }
      if (carouselJ.size > unimplementedviewt.size) {
          let lineu = true;
          let weather4 = String.fromCharCode(105,110,116,101,114,110,101,100,95,107,95,51,48,0);
          let smallsoundE: Array<any> = [134, 114, 795];
         unimplementedviewt = new Map([[`${carouselJ.size}`, ((lineu ? 2 : 2) / 2)]]);
         lineu = 84 >= smallsoundE.length || String.fromCharCode(122,0) == weather4;
         weather4 += `${weather4.length}`;
         smallsoundE = [2];
      }
      let iconsharefriendsj = 5541386 >= modelsl.length;
      do {
         modelsl = `${modelsl.length}`;
         if (iconsharefriendsj) {
            break;
         }
      } while (iconsharefriendsj && (!modelsl.includes(`${typesP.size}`)));
      eactl = new Map([[`${orangeuparrow9.size}`, 1 ^ orangeuparrow9.size]]);
      break;
   }
      models3 = "2";

    const result = await wawaEvent.getUserDetails();

      countryC *= 1;
       let desc_ = String.fromCharCode(102,114,97,109,101,102,111,114,109,97,116,95,98,95,52,48,0);
       let searchA: Map<any, any> = new Map([[String.fromCharCode(101,120,112,108,97,105,110,95,54,95,54,54,0),482], [String.fromCharCode(103,95,55,54,95,115,121,109,98,111,108,105,99,97,116,97,98,108,101,0),148], [String.fromCharCode(102,95,56,51,95,115,98,108,111,103,0),703]]);
       let libreanimatedY = 0;
         libreanimatedY -= 1;
      for (let i = 0; i < 1; i++) {
         desc_ += `${desc_.length}`;
      }
       let fcdaebecbcbafcdfceaaeccfeacdbh = String.fromCharCode(102,105,108,109,95,51,95,50,54,0);
      let imagenetworkerrZ = 6744782 <= searchA.size;
      do {
          let topicj = String.fromCharCode(102,111,114,119,97,114,100,95,55,95,53,56,0);
          let colorsE = String.fromCharCode(110,112,117,116,95,111,95,56,48,0);
          let overlay9 = 4.0;
          let customw = 1;
         searchA.set(desc_, (String.fromCharCode(119,0) == desc_ ? parseInt(`${overlay9}`) : desc_.length));
         topicj = `${colorsE.length | topicj.length}`;
         colorsE += `${topicj.length}`;
         overlay9 /= Math.max(1, colorsE.length);
         customw |= 1 << (Math.min(1, Math.abs(customw)));
         if (imagenetworkerrZ) {
            break;
         }
      } while ((searchA.get(`${libreanimatedY}`) == null) && imagenetworkerrZ);
         libreanimatedY <<= Math.min(3, Math.abs(libreanimatedY % (Math.max(2, 6))));
         searchA = new Map([[`${searchA.size}`, 2 - libreanimatedY]]);
      while (5 > libreanimatedY) {
          let actionsR = 0.0;
          let downarrowV = String.fromCharCode(98,95,57,54,95,99,97,112,116,117,114,101,0);
          let crownT: Map<any, any> = new Map([[String.fromCharCode(112,97,116,99,104,115,101,116,95,98,95,57,54,0),963], [String.fromCharCode(120,95,52,55,95,108,111,110,103,101,114,0),817], [String.fromCharCode(97,95,51,49,95,111,116,104,101,114,119,105,115,101,0),6]]);
          let release_44 = 1.0;
          let textlayoutmanagerO = String.fromCharCode(119,95,51,50,95,112,111,105,110,116,0);
         fcdaebecbcbafcdfceaaeccfeacdbh += `${searchA.size / 1}`;
         actionsR += parseFloat(`${parseInt(`${actionsR}`) - parseInt(`${release_44}`)}`);
         downarrowV = `${crownT.size}`;
         crownT = new Map([[downarrowV, 1]]);
         release_44 -= parseFloat(`${2}`);
         textlayoutmanagerO = `${3 + crownT.size}`;
         break;
      }
         fcdaebecbcbafcdfceaaeccfeacdbh += `${fcdaebecbcbafcdfceaaeccfeacdbh.length % (Math.max(1, searchA.size))}`;
         desc_ = "1";
      iconadslinkS <<= Math.min(4, models3.length);
   if (heartV.length > 3) {
      heartV = `${1 | eactl.size}`;
   }
       let libsentryh = String.fromCharCode(105,95,56,55,95,100,105,115,97,112,112,101,97,114,105,110,103,0);
      let nodeP = String.fromCharCode(106,54,103,0) == libsentryh;
      do {
         libsentryh += `${libsentryh.length % 2}`;
         if (nodeP) {
            break;
         }
      } while (nodeP && (2 >= libsentryh.length));
      for (let u = 0; u < 2; u++) {
         libsentryh += `${libsentryh.length}`;
      }
      for (let j = 0; j < 1; j++) {
         libsentryh = `${(String.fromCharCode(101,0) == libsentryh ? libsentryh.length : libsentryh.length)}`;
      }
      orangeuparrow9 = new Map([[`${iconadslinkS}`, heartV.length % 3]]);
   for (let z = 0; z < 2; z++) {
      countryC += 1;
   }
    if (result == null) {

   if ((orangeuparrow9.size * foregroundU) == 1.73 && 2 == (parseInt(`${foregroundU}`) * orangeuparrow9.size)) {
       let onewsl = true;
       let middlebrightnesso = 5.0;
       let basketballmatchdetailbg4 = false;
       let chartX: Array<any> = [821, 483];
      while (chartX.length == 3) {
          let countdown8 = String.fromCharCode(103,95,51,51,95,114,101,102,112,108,97,110,101,0);
          let spinnerH: Array<any> = [742, 623];
         onewsl = chartX.length <= 75;
         countdown8 = `${countdown8.length}`;
         spinnerH = [spinnerH.length];
         break;
      }
         onewsl = 94.48 >= middlebrightnesso;
       let fullscreenmin3 = true;
       let encrypty = true;
         chartX.push(((onewsl ? 2 : 1) / (Math.max(chartX.length, 1))));
      while (!onewsl) {
         middlebrightnesso += (parseFloat(`${(onewsl ? 4 : 3) + chartX.length}`));
         break;
      }
         onewsl = (encrypty ? !fullscreenmin3 : !encrypty);
         fullscreenmin3 = basketballmatchdetailbg4;
         encrypty = (onewsl ? !fullscreenmin3 : onewsl);
         fullscreenmin3 = (!encrypty ? !basketballmatchdetailbg4 : !encrypty);
         chartX = [((encrypty ? 5 : 3) | 1)];
       let vietnam3 = String.fromCharCode(104,95,51,56,95,120,112,101,114,105,109,101,110,116,97,108,0);
       let hejit = String.fromCharCode(102,114,105,101,110,100,108,121,95,50,95,52,48,0);
          let chatbotphoton = 0.0;
          let awayteamfielde = 2.0;
         middlebrightnesso *= (parseFloat(`${(onewsl ? 3 : 3) - parseInt(`${chatbotphoton}`)}`));
         chatbotphoton += parseFloat(`${parseInt(`${awayteamfielde}`) / 3}`);
         awayteamfielde *= parseInt(`${awayteamfielde}`) % 1;
      foregroundU += orangeuparrow9.size >> (Math.min(heartV.length, 5));
   }
   while (!heartV.includes(`${iconadslinkS}`)) {
      iconadslinkS += 3 & orangeuparrow9.size;
      break;
   }
   for (let m = 0; m < 1; m++) {
       let libreanimated9 = String.fromCharCode(113,95,55,52,95,114,101,99,111,114,100,97,98,108,101,0);
       let canvasi: Map<any, any> = new Map([[String.fromCharCode(105,97,116,95,109,95,51,54,0),true ], [String.fromCharCode(108,95,52,52,95,104,101,120,98,121,116,101,0),false ]]);
      if (libreanimated9.length > 3) {
          let mapping3 = 1.0;
          let toponN = String.fromCharCode(98,101,103,105,110,110,105,110,103,95,53,95,51,53,0);
          let sideQ = String.fromCharCode(97,99,104,105,101,118,101,100,95,50,95,51,57,0);
         canvasi = new Map([[sideQ, 1]]);
         mapping3 *= parseFloat(`${parseInt(`${mapping3}`) & toponN.length}`);
         toponN = `${parseInt(`${mapping3}`)}`;
         sideQ = `${parseInt(`${mapping3}`)}`;
      }
      if (4 < canvasi.size) {
         libreanimated9 += "1";
      }
      for (let c = 0; c < 1; c++) {
         canvasi.set(libreanimated9, (libreanimated9 == String.fromCharCode(85,0) ? libreanimated9.length : canvasi.size));
      }
          let libfolly6 = 5.0;
          let frame_t2F = true;
          let o_animationW = String.fromCharCode(98,95,52,55,95,99,111,115,0);
         canvasi.set(libreanimated9, 2);
         libfolly6 *= parseInt(`${libfolly6}`) >> (Math.min(4, Math.abs(3)));
         frame_t2F = libfolly6 > 56.93;
         o_animationW = `${2 << (Math.min(5, o_animationW.length))}`;
          let telegramK = 5.0;
          let taiwanE = false;
          let circleQ = 5;
         canvasi = new Map([[`${telegramK}`, 2 | parseInt(`${telegramK}`)]]);
         taiwanE = !taiwanE;
         circleQ |= ((taiwanE ? 5 : 5) / (Math.max(circleQ, 10)));
      while (2 == (canvasi.size ^ libreanimated9.length)) {
         libreanimated9 = `${libreanimated9.length | canvasi.size}`;
         break;
      }
      iconadslinkS <<= Math.min(Math.abs(3 % (Math.max(4, eactl.size))), 5);
   }
       let shootyesgoalw = String.fromCharCode(122,95,56,54,95,115,117,98,106,0);
       let profilepicX = String.fromCharCode(121,95,53,56,95,103,101,110,101,114,105,99,0);
      if (shootyesgoalw != profilepicX) {
         profilepicX = `${shootyesgoalw.length}`;
      }
      if (4 > profilepicX.length) {
         profilepicX += `${shootyesgoalw.length * profilepicX.length}`;
      }
      while (profilepicX.startsWith(shootyesgoalw)) {
          let iconsaveimageE = String.fromCharCode(117,95,53,48,95,114,116,115,112,0);
         profilepicX = `${iconsaveimageE.length | 3}`;
         break;
      }
      while (profilepicX.startsWith(shootyesgoalw)) {
          let latn3 = String.fromCharCode(97,109,116,95,49,95,52,54,0);
          let redgoalN = String.fromCharCode(112,97,99,107,101,116,112,101,101,107,95,110,95,56,48,0);
          let shareA = String.fromCharCode(99,108,108,99,95,105,95,54,52,0);
         profilepicX += "3";
         latn3 = `${(String.fromCharCode(114,0) == shareA ? redgoalN.length : shareA.length)}`;
         redgoalN = `${latn3.length % (Math.max(5, shareA.length))}`;
         break;
      }
      let switch_jI = String.fromCharCode(116,109,106,51,49,113,112,0) == profilepicX;
      do {
         profilepicX += `${(profilepicX == String.fromCharCode(72,0) ? shootyesgoalw.length : profilepicX.length)}`;
         if (switch_jI) {
            break;
         }
      } while (switch_jI && (4 == profilepicX.length));
         profilepicX += `${(String.fromCharCode(119,0) == shootyesgoalw ? shootyesgoalw.length : profilepicX.length)}`;
      backE += `${((gpayV ? 3 : 4) & 1)}`;
      backE = `${backE.length}`;
      return;
    }

    await dispatch(updateUserAuth(result));

   for (let t = 0; t < 3; t++) {
      heartV += `${((gpayV ? 2 : 5))}`;
   }
   for (let p = 0; p < 1; p++) {
      countryC *= 3;
   }
   for (let u = 0; u < 3; u++) {
       let libcxxcomponentsa: Map<any, any> = new Map([[String.fromCharCode(97,114,101,110,97,115,95,119,95,51,55,0),22], [String.fromCharCode(113,95,52,54,95,101,105,112,118,0),43]]);
         libcxxcomponentsa.set(`${libcxxcomponentsa.size}`, libcxxcomponentsa.size / 1);
      while (4 >= (4 % (Math.max(3, libcxxcomponentsa.size))) && 4 >= (libcxxcomponentsa.size % (Math.max(5, libcxxcomponentsa.size)))) {
         libcxxcomponentsa.set(`${libcxxcomponentsa.size}`, libcxxcomponentsa.size | 3);
         break;
      }
       let debug5 = String.fromCharCode(116,95,51,95,117,115,100,0);
       let profileW = String.fromCharCode(113,100,114,97,119,95,56,95,52,56,0);
      heartV += `${(String.fromCharCode(107,0) == backE ? eactl.size : backE.length)}`;
   }
      countryC /= Math.max(4, 3 * orangeuparrow9.size);
      models3 = `${(String.fromCharCode(120,0) == heartV ? orangeuparrow9.size : heartV.length)}`;

    return;
  };

  useEffect(() => {
    

    let mergedArray;

    if (userState.user?.userUpline.created_at != '') {
      mergedArray = userState.user?.userInvitedUserList.concat(userState.user?.userUpline);
    } else {
      mergedArray = userState.user.userInvitedUserList;
    }

    mergedArray.sort((a: any, b: any) => {
      let dateA: any;
      dateA = new Date(a.created_at);
      let dateB: any;

      dateB = new Date(b.created_at);
      return dateB - dateA;
    });

    mergedArray = mergedArray.map((item: any) => {
      let displayText = '';
      if (item.text) {
        displayText = item.text;
        item.invited_vip_reward_day = item.vip_reward_day;
      } else {
        displayText = item.title;
      }

      return { ...item, displayText: displayText };
    });
    console.log('mergedArray');
    console.log(mergedArray);
    setInviteList(mergedArray);
  }, []);

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title="累计奖励明细" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        { }
        <LinearGradient
          colors={['#323638', '#1a1d20']} 
          locations={[0.1, 1]}
          start={{ x: 1, y: 0 }} 
          end={{ x: 0, y: 1 }} 
          style={{
            marginTop: 40,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 15,
            flexDirection: 'row', 
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: 120,
          }}>
          <View style={styles.container}>
            { }
            <Text style={styles.title}>{userState.user?.userTotalInvite}</Text>
            <Text style={styles.subTitle}>已邀请人数</Text>
          </View>

          <View style={styles.container}>
            { }
            <Text style={styles.title}>
              {userState.user?.userAccumulateRewardDay}
            </Text>
            <Text style={styles.subTitle}>累计获得天数</Text>
          </View>
        </LinearGradient>

        { }
        <View style={{ marginTop: 40, alignItems: 'center' }}>
          <Text
            style={{ ...textVariants.header, fontSize: 16, fontWeight: '700' }}>
            邀请记录
          </Text>

          {inviteList.length > 0 && (
            <View
              style={{
                marginTop: 20,
                marginBottom: 40,
                backgroundColor: '#1D2023',
                borderRadius: 15,
                overflow: 'hidden',
                width: '100%',
              }}>
              {inviteList.map(item => (
                <View
                  key={item.displayText}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                  }}>
                  <View style={{ flex: 1, paddingRight: 10 }}>
                    <Text
                      style={{ fontSize: 16, color: '#fff' }}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {item.displayText}
                    </Text>
                    <Text style={{ color: '#9c9c9c' }}>{item.created_at}</Text>
                  </View>

                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: colors.primary,
                        fontSize: 16,
                        flex: 1,
                      }}>
                      +{item.invited_vip_reward_day}天
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {inviteList.length == 0 && (
            <View
              style={{
                marginTop: 20,
                marginBottom: 40,
                backgroundColor: '#1D2023',
                borderRadius: 15,
                overflow: 'hidden',
                width: '100%',
              }}>
              <View
                style={{
                  flexDirection: 'row',

                  alignContent: 'center',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                }}>
                <View>
                  <Text style={{ color: '#fff' }}>暂时无邀请记录</Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  backgroundImage: {
    flex: 1, 
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 25,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '900',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#9C9C9C',
  },
});
