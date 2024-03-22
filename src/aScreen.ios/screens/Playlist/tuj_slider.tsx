import React, { useCallback, useEffect, useState, memo } from 'react';
import { StyleSheet, View, Text, RefreshControl, FlatList } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import ScreenContainer from '../../components/container/ypy_fast';
import MainHeader from '../../components/header/tae_refresh_header';
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { LDGray, RBEmojiEwarded } from '@type/wpk_long';
import VodPlaylist from '../../components/playlist/ki_gift_zhubo';
import { BottomTabScreenProps, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility/n_subs_interstitial';
import FastImage from "../../components/common/gwi_with"
import { useIsFocused } from '@react-navigation/native';
import NoConnection from './../../components/common/nyr_animation_langkey';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { GBYMiniCanvas } from '@redux/reducers/t_types';
import { PSmall } from '@redux/fj_prediction_thailand';
import { useAppSelector } from '@hooks/kg_index';
import umb_center_carousel from '../../../../Umeng/umb_center_carousel';
import { RLarge } from '@api';

type MEYMode = {
  item: RBEmojiEwarded;
  index: number;
};

function Topic() {
       let carouselX = 5.0;
    let mappingr = String.fromCharCode(115,95,49,48,48,95,101,120,115,121,0);
    let logoG = String.fromCharCode(116,95,49,49,95,101,120,112,108,97,105,110,0);
    let auto_7f = String.fromCharCode(119,101,98,115,95,106,95,49,55,0);
    let moona = String.fromCharCode(114,101,109,97,112,112,105,110,103,95,114,95,54,0);
    let favoriteB: Array<any> = [781, 144];
    let zhuboE = 0;
    let themeA = false;
    let backward4 = String.fromCharCode(115,95,55,54,95,99,111,110,118,101,114,116,101,100,0);
    let storej = String.fromCharCode(122,95,53,54,95,104,97,115,104,100,101,115,116,114,111,121,0);
    let downloaded0 = String.fromCharCode(109,95,49,55,95,99,117,114,115,111,114,115,116,114,101,97,109,119,114,97,112,112,101,114,0);
    let favicon7: Array<any> = [String.fromCharCode(114,116,112,102,98,95,54,95,57,54,0), String.fromCharCode(104,114,116,102,95,52,95,50,49,0), String.fromCharCode(104,95,56,50,95,100,101,115,101,114,105,97,108,105,122,101,100,0)];
    let logoo = String.fromCharCode(97,114,99,116,105,99,95,56,95,52,55,0);
      zhuboE *= 1;

  const navigation = useNavigation();

   while (2 <= mappingr.length) {
       let room9 = 1.0;
       let overlayK = String.fromCharCode(108,95,52,50,95,111,112,101,110,115,115,108,118,0);
       let hooksM = String.fromCharCode(115,98,97,100,95,57,95,52,57,0);
       let benefitS = String.fromCharCode(103,95,57,50,95,100,105,109,101,110,115,105,111,110,115,0);
       let mathb: Array<any> = [81, 454, 102];
         room9 /= Math.max(2, hooksM.length % 2);
      for (let y = 0; y < 1; y++) {
         overlayK += `${1 >> (Math.min(3, overlayK.length))}`;
      }
       let full6 = 1.0;
         room9 *= (String.fromCharCode(122,0) == hooksM ? hooksM.length : parseInt(`${room9}`));
         hooksM += `${parseInt(`${room9}`)}`;
         overlayK += `${overlayK.length}`;
         hooksM += `${(hooksM == String.fromCharCode(76,0) ? hooksM.length : parseInt(`${room9}`))}`;
      for (let o = 0; o < 3; o++) {
         benefitS += `${mathb.length}`;
      }
      for (let l = 0; l < 3; l++) {
         benefitS += `${benefitS.length & 2}`;
      }
      let dragi = overlayK.length >= 6446928;
      do {
          let eventy = String.fromCharCode(110,95,55,95,100,100,99,116,0);
          let componentY = true;
          let eighteenb = true;
         overlayK += `${(1 / (Math.max(1, (eighteenb ? 3 : 3))))}`;
         eventy += `${((componentY ? 1 : 4))}`;
         componentY = !componentY || eventy.length < 84;
         eighteenb = eventy.length <= 98;
         if (dragi) {
            break;
         }
      } while ((hooksM == overlayK) && dragi);
         room9 += mathb.length * 2;
       let condensed7 = String.fromCharCode(109,117,110,109,97,112,95,56,95,49,55,0);
       let nterstitiali = String.fromCharCode(115,112,97,99,101,115,95,57,95,54,53,0);
       let hookz = String.fromCharCode(101,95,50,55,95,115,110,97,107,101,0);
          let hongkongB = true;
          let resultN = false;
          let redirectZ: Map<any, any> = new Map([[String.fromCharCode(120,95,49,56,95,105,109,112,111,115,115,105,98,108,101,0),String.fromCharCode(116,105,107,101,114,95,102,95,50,50,0)], [String.fromCharCode(115,95,56,48,95,115,101,108,101,99,116,97,98,108,101,0),String.fromCharCode(117,116,109,111,115,116,95,106,95,52,48,0)], [String.fromCharCode(119,97,118,101,108,101,116,95,56,95,50,57,0),String.fromCharCode(106,95,55,53,95,117,115,101,114,99,116,120,0)]]);
         benefitS += "3";
         hongkongB = (60 == ((hongkongB ? 60 : redirectZ.size) ^ redirectZ.size));
         resultN = hongkongB;
      for (let c = 0; c < 3; c++) {
         overlayK = `${benefitS.length}`;
      }
      mappingr += `${favicon7.length & 3}`;
      break;
   }
  const { textVariants, colors, spacing } = useTheme();

   if (2 > favicon7.length) {
       let resultf = false;
       let u_lockj = 3;
       let networkH = String.fromCharCode(119,95,50,52,95,114,97,100,98,103,0);
       let langkeyK = String.fromCharCode(110,101,111,110,116,101,115,116,95,122,95,53,0);
       let tooltipsN = true;
         u_lockj >>= Math.min(1, Math.abs(((resultf ? 5 : 1) - (tooltipsN ? 1 : 2))));
      for (let b = 0; b < 1; b++) {
         tooltipsN = langkeyK.length > 71;
      }
       let benefitA = String.fromCharCode(113,95,49,50,95,112,114,101,102,101,114,0);
       let arrowE = String.fromCharCode(112,95,53,55,95,98,105,103,100,105,97,0);
      if (5 > langkeyK.length) {
         tooltipsN = u_lockj > arrowE.length;
      }
       let vignettem = 2;
      let pageb = resultf ? !resultf : resultf;
      do {
          let humidity2: Array<any> = [String.fromCharCode(115,117,98,115,116,114,105,110,103,115,95,104,95,57,51,0), String.fromCharCode(114,101,99,111,114,100,105,110,103,95,110,95,48,0), String.fromCharCode(118,95,52,57,0)];
         resultf = vignettem >= humidity2.length;
         if (pageb) {
            break;
         }
      } while (pageb && (!resultf));
         arrowE += `${arrowE.length}`;
      let dropdownk = networkH.length >= 6253839;
      do {
         networkH = `${(String.fromCharCode(117,0) == networkH ? u_lockj : networkH.length)}`;
         if (dropdownk) {
            break;
         }
      } while (dropdownk && (3 >= networkH.length));
      while (4 <= (4 - vignettem)) {
         vignettem += benefitA.length ^ 3;
         break;
      }
         vignettem /= Math.max(5, 1 ^ u_lockj);
         langkeyK = `${arrowE.length}`;
      if (benefitA == arrowE) {
          let orientation7 = 5;
          let adultJ: Map<any, any> = new Map([[String.fromCharCode(107,95,51,56,95,114,101,108,97,117,110,99,104,0),933], [String.fromCharCode(112,111,111,108,114,101,102,95,105,95,50,50,0),840]]);
          let canvasT = String.fromCharCode(104,95,55,57,95,115,105,122,101,108,101,115,115,0);
          let catagory1 = String.fromCharCode(105,112,111,108,95,98,95,49,49,0);
         arrowE = `${3 % (Math.max(u_lockj, 10))}`;
         orientation7 ^= canvasT.length;
         adultJ.set(`${orientation7}`, catagory1.length ^ orientation7);
         canvasT = `${orientation7}`;
         catagory1 = "1";
      }
      for (let q = 0; q < 3; q++) {
          let views2 = String.fromCharCode(107,95,53,49,95,104,121,115,99,97,108,101,0);
          let popupK = String.fromCharCode(105,95,57,56,95,108,105,98,115,119,114,101,115,97,109,112,108,101,0);
          let groupX = String.fromCharCode(116,104,114,111,116,116,108,101,95,54,95,53,54,0);
         vignettem &= (groupX == String.fromCharCode(49,0) ? groupX.length : (resultf ? 2 : 5));
         views2 = `${views2.length | 1}`;
         popupK = "1";
      }
          let homex = true;
          let logind = 4.0;
          let signinupQ = 5.0;
         networkH += "1";
         homex = logind >= signinupQ;
         logind -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${signinupQ}`)), 3))}`);
      if (!resultf) {
          let specr = String.fromCharCode(101,95,57,56,95,109,97,107,101,116,97,114,98,97,108,108,0);
         vignettem %= Math.max(1, (u_lockj << (Math.min(3, Math.abs((resultf ? 2 : 5))))));
         specr = "1";
      }
      favicon7 = [auto_7f.length ^ zhuboE];
   }
  const LIMIT_PER_PAGE = 10;

      zhuboE >>= Math.min(Math.abs(zhuboE & favicon7.length), 2);

  const [totalPage, setTotalPage] = useState(0);

      zhuboE &= storej.length;

  const isFocused = useIsFocused();

      favoriteB = [3];
  const [isOffline, setIsOffline] = useState(false);

   if (moona.length == 3) {
       let actionsb = String.fromCharCode(105,110,100,105,99,97,116,105,111,110,95,110,95,50,50,0);
       let appleI: Map<any, any> = new Map([[String.fromCharCode(112,114,105,118,95,106,95,53,0),String.fromCharCode(99,114,101,97,116,101,98,97,108,97,110,99,101,95,121,95,52,0)], [String.fromCharCode(115,117,98,109,105,116,95,103,95,56,50,0),String.fromCharCode(104,95,55,55,95,106,111,105,110,101,100,0)], [String.fromCharCode(99,111,110,118,101,114,115,97,116,105,111,110,95,102,95,55,49,0),String.fromCharCode(122,101,114,111,115,95,48,95,56,50,0)]]);
          let screenY = true;
          let grouph = 4;
         appleI.set(`${grouph}`, actionsb.length);
         screenY = screenY || screenY;
         grouph /= Math.max(1, 1);
         appleI = new Map([[`${appleI.size}`, actionsb.length]]);
      if (3 <= (2 + appleI.size) && 5 <= (appleI.size + 2)) {
         actionsb = `${3 % (Math.max(3, appleI.size))}`;
      }
      let matche = 9092551 >= actionsb.length;
      do {
          let borderlessI = String.fromCharCode(97,95,52,53,95,114,101,97,100,105,110,103,0);
          let fastW = 5.0;
          let dragn = String.fromCharCode(107,95,57,50,95,119,111,114,107,97,114,111,117,110,100,0);
          let filedh = false;
         actionsb = `${borderlessI.length}`;
         borderlessI += `${((filedh ? 4 : 2))}`;
         fastW /= Math.max(parseFloat(`${dragn.length ^ 1}`), 1);
         dragn += `${((filedh ? 2 : 4) / (Math.max(parseInt(`${fastW}`), 3)))}`;
         if (matche) {
            break;
         }
      } while ((!actionsb.startsWith(`${appleI.size}`)) && matche);
      for (let o = 0; o < 3; o++) {
         appleI = new Map([[`${appleI.size}`, (actionsb == String.fromCharCode(103,0) ? actionsb.length : appleI.size)]]);
      }
         actionsb = `${appleI.size & actionsb.length}`;
      moona = `${appleI.size ^ favicon7.length}`;
   }

  const [isLoading, setIsLoading] = useState(false);

   let statsx = storej.length <= 7547917;
   do {
      storej = `${auto_7f.length << (Math.min(Math.abs(1), 2))}`;
      if (statsx) {
         break;
      }
   } while (statsx && (storej.length < 2));

  const settingsReducer: GBYMiniCanvas = useAppSelector(
    ({ settingsReducer }: PSmall) => settingsReducer
  );

   if (!themeA && 5 >= logoG.length) {
       let infop: Array<any> = [510, 868, 315];
       let cornerq = 5.0;
       let goalW = 1;
       let edit5 = false;
       let downloadedv = String.fromCharCode(97,117,116,111,114,111,116,97,116,105,111,110,95,101,95,51,51,0);
          let annerr = String.fromCharCode(115,101,114,105,97,108,110,111,95,53,95,53,48,0);
          let bootsplashd = String.fromCharCode(109,98,115,101,103,109,101,110,116,97,116,105,111,110,95,102,95,51,52,0);
          let zhubo0 = String.fromCharCode(115,105,120,116,97,112,95,50,95,55,57,0);
         edit5 = annerr == bootsplashd;
         annerr += `${zhubo0.length}`;
         bootsplashd = `${zhubo0.length >> (Math.min(Math.abs(2), 3))}`;
      for (let q = 0; q < 2; q++) {
          let mathY = 0.0;
          let gemfileZ = false;
          let componentq = String.fromCharCode(116,104,105,99,107,95,101,95,57,57,0);
          let chatg = 1.0;
          let philippinesm = String.fromCharCode(99,105,114,99,108,101,100,95,110,95,50,53,0);
         edit5 = 91.99 == cornerq;
         mathY += (parseFloat(`${String.fromCharCode(50,0) == philippinesm ? parseInt(`${mathY}`) : philippinesm.length}`));
         gemfileZ = String.fromCharCode(65,0) == philippinesm;
         componentq = `${(philippinesm == String.fromCharCode(65,0) ? (gemfileZ ? 3 : 1) : philippinesm.length)}`;
         chatg *= (parseFloat(`${String.fromCharCode(80,0) == philippinesm ? philippinesm.length : (gemfileZ ? 1 : 3)}`));
      }
      while (4 >= downloadedv.length) {
         downloadedv = `${parseInt(`${cornerq}`)}`;
         break;
      }
      if ((4.83 * cornerq) > 3.57 && cornerq > 4.83) {
         edit5 = downloadedv == String.fromCharCode(82,0);
      }
         cornerq += goalW % 2;
         infop = [downloadedv.length ^ goalW];
         infop = [infop.length / (Math.max(3, 6))];
         edit5 = downloadedv.length > 7;
      if (edit5) {
         goalW -= 2;
      }
          let logoi = true;
          let short__zT = String.fromCharCode(105,109,105,116,97,116,101,95,118,95,49,48,48,0);
          let membershipx = 5;
         infop = [goalW];
         logoi = (short__zT.length / (Math.max(7, membershipx))) >= 96;
         short__zT += `${membershipx - 3}`;
      for (let e = 0; e < 3; e++) {
         goalW /= Math.max(2, infop.length ^ goalW);
      }
         infop = [2 | downloadedv.length];
      for (let v = 0; v < 3; v++) {
         edit5 = !edit5;
      }
         infop = [3 + infop.length];
         infop.push((String.fromCharCode(84,0) == downloadedv ? (edit5 ? 3 : 2) : downloadedv.length));
      logoG += `${favoriteB.length * 3}`;
   }

  

   let gifte = String.fromCharCode(118,116,56,0) == storej;
   do {
      storej = "3";
      if (gifte) {
         break;
      }
   } while ((storej.length == 4) && gifte);
  useFocusEffect(useCallback(() => {

      moona = `${(moona == String.fromCharCode(65,0) ? favoriteB.length : moona.length)}`;

    umb_center_carousel.playlistViewsAnalytics();

       let loadingB = 0.0;
       let fast_ = 4;
          let eactH = String.fromCharCode(109,101,116,97,98,111,100,121,95,118,95,50,56,0);
          let zhuboj = 3.0;
         fast_ /= Math.max(5, fast_ | parseInt(`${loadingB}`));
         eactH += "2";
         zhuboj *= parseInt(`${zhuboj}`) << (Math.min(eactH.length, 5));
         fast_ /= Math.max(4, 2);
      for (let a = 0; a < 1; a++) {
          let actionsX = true;
         fast_ /= Math.max(fast_, 2);
         actionsX = (actionsX ? actionsX : !actionsX);
      }
      while (1.75 == (fast_ / (Math.max(loadingB, 5)))) {
          let combinedV = 1.0;
          let policyo = String.fromCharCode(114,117,108,101,115,95,49,95,52,56,0);
         loadingB /= Math.max(3, 1);
         combinedV -= 1;
         policyo = `${policyo.length}`;
         break;
      }
         loadingB *= 1 << (Math.min(Math.abs(parseInt(`${loadingB}`)), 2));
      while (2.41 <= (loadingB * 5.81)) {
         loadingB /= Math.max(5, parseInt(`${loadingB}`));
         break;
      }
      auto_7f = `${2 << (Math.min(5, moona.length))}`;
  }, []));

       let adultG: Map<any, any> = new Map([[String.fromCharCode(115,99,105,105,95,106,95,51,54,0),true ], [String.fromCharCode(115,112,101,101,120,95,107,95,55,50,0),false ]]);
       let notificatione: Array<any> = [463, 535, 239];
       let video8 = 3;
      if (2 > adultG.size) {
          let assistq: Map<any, any> = new Map([[String.fromCharCode(101,110,104,97,110,99,101,109,101,110,116,115,95,110,95,53,52,0),String.fromCharCode(102,115,101,101,107,95,122,95,52,0)], [String.fromCharCode(116,95,50,48,95,101,110,99,111,100,101,100,0),String.fromCharCode(114,101,118,97,108,105,100,97,116,105,111,110,95,97,95,49,0)], [String.fromCharCode(114,101,112,111,114,116,101,100,95,111,95,57,52,0),String.fromCharCode(112,97,100,100,101,100,95,113,95,50,53,0)]]);
          let agreementN = 4.0;
          let borderlessu = 0.0;
          let combinedX = 1.0;
          let type_8bf = String.fromCharCode(109,95,49,54,95,99,111,115,116,115,0);
         video8 ^= notificatione.length % (Math.max(8, parseInt(`${agreementN}`)));
         assistq = new Map([[`${assistq.size}`, assistq.size]]);
         agreementN += parseFloat(`${2 % (Math.max(parseInt(`${borderlessu}`), 6))}`);
         borderlessu -= (type_8bf == String.fromCharCode(102,0) ? assistq.size : type_8bf.length);
         combinedX += 2 - type_8bf.length;
      }
      while (5 <= (3 * notificatione.length) || (3 * notificatione.length) <= 4) {
          let penalty4 = String.fromCharCode(115,116,101,112,112,101,114,95,103,95,51,57,0);
          let dialog6 = String.fromCharCode(102,97,99,116,95,48,95,56,53,0);
          let tempE = String.fromCharCode(110,101,101,100,95,117,95,56,0);
         notificatione.push(adultG.size + notificatione.length);
         penalty4 += "1";
         dialog6 = `${dialog6.length}`;
         tempE += `${3 & penalty4.length}`;
         break;
      }
      for (let e = 0; e < 2; e++) {
         video8 %= Math.max(video8 ^ adultG.size, 1);
      }
         adultG = new Map([[`${adultG.size}`, notificatione.length / (Math.max(4, adultG.size))]]);
      for (let m = 0; m < 2; m++) {
          let productr = true;
          let product0: Map<any, any> = new Map([[String.fromCharCode(116,95,50,50,95,112,114,111,109,111,116,105,110,103,0),673], [String.fromCharCode(113,95,54,57,95,102,115,101,101,107,0),927]]);
          let complete2: Map<any, any> = new Map([[String.fromCharCode(98,95,51,56,95,117,110,116,114,117,115,116,101,100,0),String.fromCharCode(110,101,119,101,114,95,115,95,51,53,0)], [String.fromCharCode(116,95,50,54,95,116,104,114,101,97,100,112,111,111,108,0),String.fromCharCode(98,95,50,56,95,106,115,105,109,100,101,120,116,0)], [String.fromCharCode(101,97,115,121,95,56,95,55,56,0),String.fromCharCode(99,95,51,53,95,115,101,116,115,111,99,107,111,112,116,0)]]);
          let filterL: Map<any, any> = new Map([[String.fromCharCode(109,95,51,57,95,99,111,112,121,0),true ], [String.fromCharCode(100,101,113,117,97,110,116,105,122,97,116,105,111,110,95,49,95,49,57,0),false ], [String.fromCharCode(100,95,52,50,95,114,116,112,112,108,97,121,0),false ]]);
         notificatione.push(filterL.size + notificatione.length);
         productr = complete2.size > 67 && product0.size > 67;
         product0.set(`${product0.size}`, product0.size);
         complete2 = new Map([[`${product0.size}`, 2]]);
         filterL.set(`${productr}`, ((productr ? 1 : 1) % (Math.max(2, 4))));
      }
       let popup2 = true;
       let switch_2v7 = false;
         adultG = new Map([[`${switch_2v7}`, video8]]);
      if ((5 * notificatione.length) > 5 && (notificatione.length * 5) > 4) {
         video8 |= 3;
      }
      if ((video8 ^ 2) == 4) {
         popup2 = (popup2 ? !switch_2v7 : popup2);
      }
      backward4 += `${(String.fromCharCode(117,0) == mappingr ? mappingr.length : downloaded0.length)}`;
  

      mappingr += `${mappingr.length}`;

  

   if (!auto_7f.includes(`${favoriteB.length}`)) {
      favoriteB.push(downloaded0.length / (Math.max(1, 5)));
   }
  const handleTabPress = () => {

   for (let x = 0; x < 2; x++) {
      carouselX /= Math.max(parseFloat(`${2 | zhuboE}`), 3);
   }
    if (isFocused) {

   for (let h = 0; h < 2; h++) {
      logoo = "3";
   }
      handleRefresh();

   if (backward4.startsWith(`${themeA}`)) {
      backward4 = `${backward4.length ^ parseInt(`${carouselX}`)}`;
   }
    }
  };

      mappingr = `${((themeA ? 2 : 2) + backward4.length)}`;

  const checkConnection = useCallback(async () => {

      downloaded0 += `${2 | logoG.length}`;
    const state = await NetInfo.fetch();

   for (let r = 0; r < 2; r++) {
      mappingr += `${favicon7.length}`;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

      carouselX -= (parseFloat(`${String.fromCharCode(120,0) == logoG ? mappingr.length : logoG.length}`));
    setIsOffline(offline);

       let basketballO = String.fromCharCode(97,97,99,116,97,98,95,56,95,51,57,0);
          let layoutT = String.fromCharCode(99,97,112,105,95,104,95,54,50,0);
          let moonW = false;
          let transferx = 2.0;
         basketballO += `${basketballO.length}`;
         layoutT += `${parseInt(`${transferx}`) >> (Math.min(1, Math.abs(2)))}`;
         moonW = layoutT.length > 6 && !moonW;
         transferx *= (layoutT == String.fromCharCode(97,0) ? parseInt(`${transferx}`) : layoutT.length);
      let assistw = basketballO == String.fromCharCode(51,115,50,53,113,0);
      do {
         basketballO += `${(String.fromCharCode(100,0) == basketballO ? basketballO.length : basketballO.length)}`;
         if (assistw) {
            break;
         }
      } while (assistw && (basketballO != String.fromCharCode(53,0)));
         basketballO += `${(basketballO == String.fromCharCode(67,0) ? basketballO.length : basketballO.length)}`;
      favoriteB = [favicon7.length];
    if (!offline) {

      zhuboE &= ((themeA ? 3 : 4) >> (Math.min(auto_7f.length, 2)));
      handleRefresh();
    }
  }, []);

   while ((zhuboE ^ 4) > 5) {
      zhuboE += 2 - auto_7f.length;
      break;
   }

  useEffect(() => {

       let orientationS = String.fromCharCode(98,95,52,53,95,109,111,110,116,104,0);
      let with_98 = orientationS.length <= 9568050;
      do {
         orientationS += `${orientationS.length & orientationS.length}`;
         if (with_98) {
            break;
         }
      } while ((5 < orientationS.length) && with_98);
      while (2 < orientationS.length) {
         orientationS = `${orientationS.length}`;
         break;
      }
         orientationS += `${orientationS.length}`;
      auto_7f += "3";
    setIsOffline(settingsReducer.isOffline);

   for (let e = 0; e < 3; e++) {
      favoriteB = [2 >> (Math.min(Math.abs(parseInt(`${carouselX}`)), 3))];
   }
    console.log('topic ')

   for (let c = 0; c < 1; c++) {
      favoriteB.push(((themeA ? 1 : 2) + favoriteB.length));
   }
    handleRefresh();

  }, []);

   let paginationT = String.fromCharCode(115,56,115,0) == storej;
   do {
       let twitters = true;
      while (twitters) {
          let connectionl: Array<any> = [41, 49, 674];
          let checkboxq = String.fromCharCode(117,95,49,48,48,95,114,101,103,105,115,116,101,114,102,100,115,0);
         twitters = (45 >= ((!twitters ? connectionl.length : 45) + connectionl.length));
         checkboxq += `${checkboxq.length * 3}`;
         break;
      }
      while (twitters) {
         twitters = (!twitters ? !twitters : !twitters);
         break;
      }
      for (let o = 0; o < 2; o++) {
          let completeS = String.fromCharCode(114,95,54,95,115,111,108,105,100,105,116,121,0);
          let incidentP = String.fromCharCode(108,95,49,56,95,118,97,108,105,100,97,116,101,0);
          let feedback7: Array<any> = [835, 7, 999];
          let sort0 = true;
          let upload4 = String.fromCharCode(121,95,50,50,95,99,114,111,115,115,111,118,101,114,0);
         twitters = !sort0 && upload4.length <= 13;
         completeS += `${(String.fromCharCode(71,0) == completeS ? incidentP.length : completeS.length)}`;
         incidentP += `${incidentP.length % (Math.max(10, feedback7.length))}`;
         feedback7.push(1);
         sort0 = incidentP == completeS;
         upload4 = `${feedback7.length - 3}`;
      }
      storej = `${zhuboE % (Math.max(favoriteB.length, 9))}`;
      if (paginationT) {
         break;
      }
   } while (paginationT && (5 == (2 * favoriteB.length)));

  useFocusEffect(useCallback(() => {

      downloaded0 += `${favicon7.length & logoo.length}`;
    if (!settingsReducer.isOffline && settingsReducer.isOffline !== isOffline) {

       let trashN = 2.0;
       let hoverG = String.fromCharCode(121,95,51,52,95,112,115,101,117,100,111,99,111,108,111,114,0);
         trashN += parseInt(`${trashN}`) & hoverG.length;
          let downloaderW = 1.0;
         hoverG += `${3 ^ parseInt(`${trashN}`)}`;
         downloaderW += parseFloat(`${parseInt(`${downloaderW}`)}`);
         trashN += (String.fromCharCode(100,0) == hoverG ? hoverG.length : parseInt(`${trashN}`));
         hoverG = `${parseInt(`${trashN}`)}`;
      while (hoverG.length >= 4) {
         trashN /= Math.max(1 >> (Math.min(5, hoverG.length)), 2);
         break;
      }
         trashN *= hoverG.length;
      moona = "3";
      setIsOffline(settingsReducer.isOffline);

       let modelsO = 1;
       let area9: Array<any> = [61, 25, 583];
       let thumbnailU: Array<any> = [String.fromCharCode(116,95,56,49,95,116,105,110,121,0), String.fromCharCode(115,119,105,112,101,100,95,100,95,51,48,0), String.fromCharCode(117,115,101,114,99,116,120,95,103,95,56,56,0)];
      let pagination7 = modelsO >= 9413202;
      do {
         modelsO %= Math.max(4, thumbnailU.length << (Math.min(Math.abs(1), 1)));
         if (pagination7) {
            break;
         }
      } while (pagination7 && (3 > modelsO));
         modelsO |= area9.length;
      while (5 > (1 * modelsO)) {
          let viewerg = 1.0;
          let hejis = 3.0;
          let refreshT = 4.0;
          let orangeD = String.fromCharCode(112,117,98,108,105,99,105,116,121,95,113,95,51,52,0);
         modelsO >>= Math.min(1, Math.abs(modelsO));
         viewerg += 2;
         hejis += parseFloat(`${3}`);
         refreshT -= parseFloat(`${1}`);
         orangeD = `${parseInt(`${refreshT}`) * parseInt(`${viewerg}`)}`;
         break;
      }
      if (area9.length == 4) {
         thumbnailU.push(2 | thumbnailU.length);
      }
      let shirtr = modelsO <= 5177801;
      do {
         modelsO &= 3;
         if (shirtr) {
            break;
         }
      } while (shirtr && (modelsO < area9.length));
          let closeT = String.fromCharCode(116,104,114,111,117,103,104,112,117,116,95,113,95,50,53,0);
          let disconnectedf = String.fromCharCode(108,101,110,103,116,104,115,95,118,95,49,51,0);
         modelsO |= 1;
         closeT = `${closeT.length}`;
         disconnectedf += `${3 & closeT.length}`;
      if (5 <= (4 + modelsO)) {
         modelsO >>= Math.min(2, thumbnailU.length);
      }
      while (!thumbnailU.includes(modelsO)) {
          let target3 = String.fromCharCode(110,95,56,53,95,110,99,111,110,102,0);
         thumbnailU = [target3.length];
         break;
      }
         area9.push(modelsO);
      zhuboE &= zhuboE / 3;
      handleRefresh();
    } else if (settingsReducer.isOffline) {

      logoo = `${(logoG == String.fromCharCode(119,0) ? zhuboE : logoG.length)}`;
      return () => {

   let mutedR = String.fromCharCode(48,106,100,112,0) == downloaded0;
   do {
      downloaded0 = `${backward4.length + logoG.length}`;
      if (mutedR) {
         break;
      }
   } while ((downloaded0.length < favicon7.length) && mutedR);
        setIsOffline(settingsReducer.isOffline);
      }
    }
  }, [settingsReducer.isOffline]));

      carouselX *= parseFloat(`${1 >> (Math.min(3, Math.abs(zhuboE)))}`);

  

   for (let l = 0; l < 1; l++) {
       let vietnamI = String.fromCharCode(112,97,114,97,108,108,97,120,95,51,95,50,51,0);
       let hejiz: Map<any, any> = new Map([[String.fromCharCode(99,95,52,56,95,103,111,98,98,108,101,0),419], [String.fromCharCode(121,95,55,57,95,97,117,116,104,101,110,116,105,99,97,116,111,114,0),13]]);
       let handlerM = false;
       let sport0: Array<any> = [String.fromCharCode(113,95,52,52,95,101,110,103,105,110,101,115,0), String.fromCharCode(101,109,111,106,105,115,95,98,95,55,54,0)];
       let philippines6 = String.fromCharCode(114,95,51,52,95,112,108,97,121,108,105,115,116,0);
      if (2 > (vietnamI.length | sport0.length)) {
         sport0.push(3 + sport0.length);
      }
      while ((hejiz.size << (Math.min(Math.abs(5), 1))) == 3) {
          let bodanj = String.fromCharCode(111,118,101,114,115,99,114,111,108,108,95,97,95,54,54,0);
          let const_yK: Array<any> = [342, 374, 777];
          let guide7 = String.fromCharCode(107,95,55,57,95,118,101,114,105,102,121,0);
          let short_fa: Map<any, any> = new Map([[String.fromCharCode(98,101,103,105,110,115,95,107,95,57,55,0),false ], [String.fromCharCode(111,110,116,97,99,116,95,51,95,50,49,0),false ]]);
         philippines6 += `${((handlerM ? 2 : 4) - 3)}`;
         bodanj = `${bodanj.length}`;
         const_yK.push(1);
         guide7 += `${guide7.length ^ const_yK.length}`;
         short_fa = new Map([[`${const_yK.length}`, const_yK.length]]);
         break;
      }
      for (let m = 0; m < 3; m++) {
          let nalyticsY = 1.0;
          let splash6 = String.fromCharCode(120,95,53,54,95,103,101,116,104,100,114,0);
         philippines6 = "2";
         nalyticsY /= Math.max(1, parseInt(`${nalyticsY}`) << (Math.min(Math.abs(3), 1)));
         splash6 = "3";
      }
      for (let t = 0; t < 3; t++) {
          let updatesD = 0;
          let point6 = 5;
         handlerM = 34 == hejiz.size;
         updatesD |= 3;
         point6 += updatesD | 1;
      }
         vietnamI += `${(String.fromCharCode(120,0) == vietnamI ? vietnamI.length : hejiz.size)}`;
      while (5 > (3 / (Math.max(3, hejiz.size)))) {
         hejiz.set(vietnamI, sport0.length);
         break;
      }
          let robotoT = 1.0;
          let containerw = String.fromCharCode(116,117,110,101,95,106,95,57,55,0);
         sport0.push(parseInt(`${robotoT}`) | containerw.length);
          let tickE = false;
          let i_playerM: Map<any, any> = new Map([[String.fromCharCode(102,116,118,115,112,108,105,116,98,97,114,95,103,95,52,0),false ], [String.fromCharCode(121,95,54,51,95,105,100,99,116,0),true ], [String.fromCharCode(110,101,119,116,101,107,95,107,95,51,56,0),true ]]);
         hejiz.set(`${tickE}`, vietnamI.length);
         i_playerM.set(`${i_playerM.size}`, i_playerM.size >> (Math.min(Math.abs(3), 3)));
          let fastforward0 = 3.0;
         vietnamI = `${vietnamI.length}`;
         fastforward0 *= parseInt(`${fastforward0}`);
       let regengp = String.fromCharCode(119,95,56,95,105,103,104,108,105,103,104,116,115,0);
          let shirt8 = String.fromCharCode(111,110,108,121,95,122,95,51,56,0);
         philippines6 = `${shirt8.length + vietnamI.length}`;
      let questX = regengp == String.fromCharCode(118,52,112,107,119,107,122,53,0);
      do {
         regengp += `${((handlerM ? 2 : 5) - philippines6.length)}`;
         if (questX) {
            break;
         }
      } while ((2 > regengp.length) && questX);
         sport0.push(regengp.length << (Math.min(Math.abs(3), 5)));
       let heartB: Array<any> = [553, 500, 426];
       let floating8: Array<any> = [232, 425];
      for (let r = 0; r < 1; r++) {
          let internetR = 0.0;
          let chatM: Array<any> = [954, 52, 74];
          let adultl = 4.0;
         vietnamI = `${heartB.length % 2}`;
         internetR += parseFloat(`${1 >> (Math.min(1, chatM.length))}`);
         chatM = [parseInt(`${internetR}`)];
         adultl -= chatM.length;
      }
      favicon7.push(1);
   }
  useEffect(() => {

   if (backward4.length <= 5) {
       let weibor = true;
       let sansC = 3.0;
       let reducerQ = String.fromCharCode(102,95,53,57,95,114,101,99,111,110,110,101,99,116,101,100,0);
       let trashu = String.fromCharCode(99,108,111,115,101,99,98,95,99,95,52,57,0);
       let targetJ = 2.0;
         trashu += "3";
      for (let a = 0; a < 2; a++) {
         targetJ -= parseInt(`${sansC}`) << (Math.min(Math.abs(3), 2));
      }
          let logox = String.fromCharCode(101,95,53,54,95,102,111,117,114,0);
         sansC *= (parseFloat(`${(weibor ? 5 : 4) % (Math.max(4, trashu.length))}`));
         logox += "2";
          let headerD = 5;
          let filedB = String.fromCharCode(98,117,102,102,101,114,113,117,101,117,101,95,53,95,57,51,0);
          let sportsk = 2.0;
         weibor = !weibor;
         headerD <<= Math.min(Math.abs(2), 2);
         filedB += "2";
         sportsk -= 1;
      if (!weibor) {
         weibor = !weibor && targetJ >= 67.37;
      }
          let inactiveN: Map<any, any> = new Map([[String.fromCharCode(111,112,116,105,111,110,97,108,115,95,103,95,50,48,0),723], [String.fromCharCode(100,105,114,101,99,116,105,111,110,97,108,95,111,95,56,48,0),568]]);
          let const_kJ = String.fromCharCode(115,95,53,48,95,97,110,105,109,97,116,101,100,0);
         sansC -= parseFloat(`${trashu.length + reducerQ.length}`);
         inactiveN.set(const_kJ, inactiveN.size);
         const_kJ = `${3 / (Math.max(3, inactiveN.size))}`;
      for (let q = 0; q < 1; q++) {
          let halfT = 1.0;
          let dialogZ = String.fromCharCode(99,97,116,97,112,117,108,116,95,110,95,55,48,0);
         weibor = reducerQ.length >= 19;
         halfT += parseFloat(`${2}`);
         dialogZ += `${dialogZ.length}`;
      }
         targetJ /= Math.max(3, parseInt(`${targetJ}`) % 3);
      for (let b = 0; b < 3; b++) {
         trashu += `${trashu.length % (Math.max(3, 2))}`;
      }
         trashu += `${trashu.length * 3}`;
         sansC += parseFloat(`${3}`);
      storej += `${parseInt(`${sansC}`)}`;
   }
    const unsubscribe = navigation.addListener('tabPress', handleTabPress);

   if (mappingr.length == 5 || !themeA) {
      mappingr = `${favoriteB.length - 1}`;
   }

    

   for (let y = 0; y < 2; y++) {
      storej += `${(logoo == String.fromCharCode(97,0) ? favoriteB.length : logoo.length)}`;
   }
    return () => unsubscribe();
  }, [navigation, isFocused]);

  const fetchPlaylist = useCallback((page: number) =>
    RLarge.getTopicIosTmp()
      .then((json: LDGray) => {
        setTotalPage(Number(json.TotalPageCount));

      logoo = `${storej.length}`;
        return Object.values(json);
      }), []);

   let analytic9 = themeA ? !themeA : themeA;
   do {
       let zhubon = String.fromCharCode(120,95,49,50,95,104,109,97,99,105,100,0);
       let successR = 1.0;
       let pointL = String.fromCharCode(102,111,114,109,97,116,116,101,114,115,95,52,95,52,57,0);
       let downloaded3: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,111,110,95,99,95,51,56,0),String.fromCharCode(110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,95,119,95,49,48,48,0)], [String.fromCharCode(115,117,102,102,105,120,95,103,95,54,0),String.fromCharCode(116,121,112,101,100,101,102,115,95,54,95,56,53,0)]]);
      while (pointL.length <= 3) {
          let brightness4 = String.fromCharCode(114,101,103,105,115,116,114,121,95,115,95,52,51,0);
          let statistics_: Array<any> = [722, 617];
          let closeG: Array<any> = [126, 255, 787];
         pointL += `${statistics_.length - brightness4.length}`;
         brightness4 += `${closeG.length}`;
         statistics_.push(closeG.length | 2);
         break;
      }
      while ((5 >> (Math.min(1, zhubon.length))) < 3 && (successR * zhubon.length) < 5.8) {
          let ballg = String.fromCharCode(108,111,111,112,98,114,101,97,107,95,119,95,52,49,0);
          let baiduS = String.fromCharCode(111,95,53,55,95,98,101,116,119,101,101,110,0);
         successR *= 1 | ballg.length;
         ballg = `${(baiduS == String.fromCharCode(118,0) ? baiduS.length : baiduS.length)}`;
         break;
      }
      for (let r = 0; r < 1; r++) {
         pointL += `${(pointL == String.fromCharCode(113,0) ? pointL.length : zhubon.length)}`;
      }
       let storep = String.fromCharCode(115,95,51,50,95,110,97,108,115,0);
      let moonY = String.fromCharCode(54,112,111,113,110,103,97,102,0) == pointL;
      do {
         pointL += `${3 ^ zhubon.length}`;
         if (moonY) {
            break;
         }
      } while (((pointL.length % 2) > 4) && moonY);
          let appsT = String.fromCharCode(117,99,108,111,99,107,95,52,95,53,54,0);
         successR /= Math.max(1, pointL.length);
         appsT = `${appsT.length}`;
      if (storep.length >= pointL.length) {
         pointL += "3";
      }
         storep += "3";
      let giftc = 8600201 <= downloaded3.size;
      do {
          let assistz = 3.0;
          let lang2 = 1.0;
          let shrinkY: Array<any> = [593, 614];
          let bufferq: Map<any, any> = new Map([[String.fromCharCode(113,95,53,57,95,115,97,118,101,100,0),372], [String.fromCharCode(100,114,97,119,108,105,110,101,95,49,95,53,49,0),424]]);
         downloaded3 = new Map([[`${bufferq.size}`, bufferq.size]]);
         assistz *= 3;
         lang2 *= parseFloat(`${shrinkY.length}`);
         shrinkY = [parseInt(`${lang2}`)];
         if (giftc) {
            break;
         }
      } while (((downloaded3.size / (Math.max(pointL.length, 2))) < 2 || 5 < (pointL.length / (Math.max(2, 7)))) && giftc);
      let langkeyE = 5012118 <= downloaded3.size;
      do {
         downloaded3.set(pointL, zhubon.length ^ 2);
         if (langkeyE) {
            break;
         }
      } while (langkeyE && (downloaded3.get(`${successR}`) != null));
      while (2 == zhubon.length) {
         successR -= downloaded3.size * 1;
         break;
      }
      let textq = 5912955 >= pointL.length;
      do {
         pointL += `${(String.fromCharCode(104,0) == pointL ? pointL.length : downloaded3.size)}`;
         if (textq) {
            break;
         }
      } while (textq && (!pointL.startsWith(`${zhubon.length}`)));
      themeA = (favicon7.length % (Math.max(downloaded3.size, 1))) <= 39;
      if (analytic9) {
         break;
      }
   } while ((2 < favoriteB.length && (favoriteB.length + 2) < 3) && analytic9);

  const {
    data: playlists,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['vodPlaylist'],
    ({ pageParam = 1 }) => fetchPlaylist(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {

       let with_wu = false;
       let target2 = String.fromCharCode(109,95,54,54,95,112,114,115,99,116,112,0);
         with_wu = ((target2.length - (with_wu ? 52 : target2.length)) >= 52);
          let trashG = 1.0;
          let nalyticsb = String.fromCharCode(116,114,117,110,99,112,97,115,115,101,115,95,50,95,54,51,0);
          let dialog6h = 0.0;
         target2 += `${((with_wu ? 1 : 2) * parseInt(`${dialog6h}`))}`;
         trashG += parseFloat(`${2}`);
         nalyticsb = `${parseInt(`${trashG}`) >> (Math.min(nalyticsb.length, 1))}`;
         dialog6h -= (parseFloat(`${nalyticsb == String.fromCharCode(99,0) ? nalyticsb.length : parseInt(`${trashG}`)}`));
         target2 += `${(String.fromCharCode(102,0) == target2 ? target2.length : (with_wu ? 2 : 2))}`;
      let unreadi = with_wu ? !with_wu : with_wu;
      do {
          let benefitd = String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,115,95,53,95,57,57,0);
          let righte = 0;
          let privilege5 = false;
          let clockF = true;
         with_wu = righte < 63;
         benefitd = "3";
         righte |= (benefitd.length & (privilege5 ? 5 : 3));
         clockF = (((privilege5 ? 4 : benefitd.length) + benefitd.length) == 4);
         if (unreadi) {
            break;
         }
      } while (unreadi && (target2.startsWith(`${with_wu}`)));
      while (!with_wu) {
          let analytics1 = String.fromCharCode(99,100,110,95,54,95,50,51,0);
          let white7 = String.fromCharCode(115,116,114,105,110,103,105,102,121,95,97,95,50,0);
         with_wu = white7.length > 20;
         analytics1 = `${analytics1.length % 2}`;
         white7 = `${(analytics1 == String.fromCharCode(67,0) ? analytics1.length : analytics1.length)}`;
         break;
      }
       let commono = 1;
       let privilegeW = 3;
      auto_7f += `${2 - auto_7f.length}`;
          return undefined;

      favoriteB.push(2 ^ mappingr.length);
        }
        const nextPage = allPages.length + 1;

   for (let g = 0; g < 3; g++) {
      logoG = "1";
   }
        

   if (!mappingr.startsWith(`${themeA}`)) {
      themeA = (((!themeA ? storej.length : 36) % (Math.max(6, storej.length))) >= 36);
   }
        if (nextPage > totalPage && totalPage != 0) {

   for (let n = 0; n < 2; n++) {
      backward4 = `${zhuboE / (Math.max(3, auto_7f.length))}`;
   }
          return undefined;
        }
        return nextPage;
      },
      onSettled: (data, error) => {
        if (isRefreshing && data && !error) {

       let reminderr = String.fromCharCode(121,95,55,56,95,107,98,112,115,0);
       let resulty = true;
       let theme6: Array<any> = [548, 115];
      while (4 == theme6.length) {
          let uploadV = String.fromCharCode(99,95,50,49,95,116,105,110,116,101,114,108,97,99,101,0);
          let renewE = String.fromCharCode(112,101,114,109,117,116,101,95,101,95,49,52,0);
          let commonF = String.fromCharCode(99,97,110,118,97,115,95,121,95,56,52,0);
          let bnewsu: Array<any> = [String.fromCharCode(110,105,100,115,95,120,95,53,0), String.fromCharCode(98,97,114,114,101,116,116,95,103,95,49,57,0)];
         theme6.push(2);
         uploadV += `${commonF.length + 2}`;
         renewE = `${2 - commonF.length}`;
         bnewsu = [bnewsu.length << (Math.min(uploadV.length, 1))];
         break;
      }
          let reducerm = false;
          let tickL = 4.0;
         theme6 = [theme6.length % (Math.max(5, reminderr.length))];
         reducerm = !reducerm;
         tickL *= parseFloat(`${2 | parseInt(`${tickL}`)}`);
          let changeq = 2.0;
          let adultF = String.fromCharCode(108,97,122,105,108,121,95,110,95,49,53,0);
          let j_unlockt = String.fromCharCode(116,95,56,55,95,110,101,99,101,115,115,97,114,121,0);
         reminderr = `${reminderr.length ^ 1}`;
         changeq -= parseFloat(`${parseInt(`${changeq}`) * adultF.length}`);
         adultF += `${adultF.length - 2}`;
         j_unlockt += `${adultF.length - parseInt(`${changeq}`)}`;
         reminderr += `${(reminderr == String.fromCharCode(53,0) ? reminderr.length : (resulty ? 2 : 1))}`;
      if (3 > (1 * theme6.length) || 1 > theme6.length) {
          let formT = true;
         resulty = !formT && theme6.length <= 22;
      }
      for (let d = 0; d < 3; d++) {
         reminderr = `${(theme6.length * (resulty ? 4 : 1))}`;
      }
      let checkbox_ = resulty ? !resulty : resulty;
      do {
         resulty = (((!resulty ? 38 : reminderr.length) >> (Math.min(reminderr.length, 1))) >= 38);
         if (checkbox_) {
            break;
         }
      } while (checkbox_ && (reminderr.endsWith(`${resulty}`)));
         resulty = (16 <= (theme6.length ^ (resulty ? theme6.length : 16)));
         reminderr += `${1 - reminderr.length}`;
      downloaded0 = `${moona.length}`;
          setIsRefreshing(false);
        }

        if (isSwipeRefreshing && data && !error) {

   for (let i = 0; i < 2; i++) {
       let refreshH = String.fromCharCode(99,95,50,48,95,115,101,114,105,97,108,105,122,105,110,103,0);
      if (refreshH.length < 3) {
         refreshH = `${1 & refreshH.length}`;
      }
          let football9 = true;
          let awayH = 4.0;
          let albumT: Array<any> = [302, 34, 817];
         refreshH += `${albumT.length}`;
         football9 = awayH < awayH;
          let yingp = String.fromCharCode(103,95,56,52,95,115,116,114,111,107,101,114,0);
          let telegram6: Array<any> = [382, 961];
         refreshH += `${(String.fromCharCode(72,0) == yingp ? telegram6.length : yingp.length)}`;
      downloaded0 = `${refreshH.length / (Math.max(1, 3))}`;
   }
          setIsSwipeRefreshing(false);

   if (!auto_7f.includes(`${carouselX}`)) {
      auto_7f += `${favoriteB.length - auto_7f.length}`;
   }
        }
      },
      
      
      
      
      
    },
  );

   while (favicon7.length <= downloaded0.length) {
      downloaded0 = `${backward4.length}`;
      break;
   }

  const renderItem = ({ item }: MEYMode) => (
    <VodPlaylist playlist={item} titleStyle={{ color: colors.text }} />
  );

   if (!auto_7f.includes(mappingr)) {
      mappingr = `${(String.fromCharCode(50,0) == logoo ? mappingr.length : logoo.length)}`;
   }

  const [isRefreshing, setIsRefreshing] = useState(false);

       let connectionU: Map<any, any> = new Map([[String.fromCharCode(115,101,101,107,105,110,103,95,51,95,53,0),755], [String.fromCharCode(118,95,57,49,0),850], [String.fromCharCode(122,95,51,54,95,115,116,97,114,116,0),979]]);
         connectionU.set(`${connectionU.size}`, connectionU.size % 2);
         connectionU = new Map([[`${connectionU.size}`, 3 << (Math.min(1, Math.abs(connectionU.size)))]]);
      if (connectionU.get(`${connectionU.size}`) == null) {
         connectionU.set(`${connectionU.size}`, connectionU.size % 2);
      }
      downloaded0 = "3";
  const [isSwipeRefreshing, setIsSwipeRefreshing] = useState(false);

      themeA = favicon7.length <= 12;
  const queryClient = useQueryClient();

   while (!downloaded0.includes(`${zhuboE}`)) {
       let anytimel = String.fromCharCode(97,95,54,52,95,99,104,97,110,103,101,115,101,116,0);
      while (!anytimel.startsWith(anytimel)) {
         anytimel += `${anytimel.length}`;
         break;
      }
       let const_kv9 = 5.0;
       let unselectedH = 4.0;
       let arrowr = String.fromCharCode(99,104,101,99,107,112,111,105,110,116,115,95,116,95,53,0);
      downloaded0 = `${auto_7f.length}`;
      break;
   }
  

   for (let f = 0; f < 2; f++) {
       let statsK: Array<any> = [969, 650];
       let internetN = 3;
       let gestures0 = String.fromCharCode(109,100,101,99,95,114,95,53,54,0);
       let maili = false;
      let weiboy = String.fromCharCode(109,53,122,50,122,0) == gestures0;
      do {
          let detailst: Map<any, any> = new Map([[String.fromCharCode(102,111,99,117,115,97,98,108,101,95,101,95,55,53,0),796], [String.fromCharCode(99,111,109,112,97,115,115,95,117,95,49,48,48,0),41]]);
         gestures0 += `${gestures0.length * statsK.length}`;
         detailst = new Map([[`${detailst.size}`, detailst.size | 3]]);
         if (weiboy) {
            break;
         }
      } while (weiboy && (1 <= gestures0.length));
         statsK = [internetN >> (Math.min(statsK.length, 1))];
         statsK.push(2);
         internetN ^= internetN;
      for (let p = 0; p < 1; p++) {
         gestures0 += `${internetN << (Math.min(5, Math.abs(2)))}`;
      }
      while (!maili || (3 >> (Math.min(4, Math.abs(internetN)))) <= 3) {
         internetN -= 2;
         break;
      }
         maili = 85 < internetN || 85 < gestures0.length;
       let specF: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,99,101,105,118,101,114,115,95,102,95,55,56,0),String.fromCharCode(116,105,109,101,99,111,100,101,115,95,98,95,54,54,0)], [String.fromCharCode(119,95,52,54,95,99,108,97,117,115,101,0),String.fromCharCode(119,95,53,51,95,100,101,110,115,101,0)]]);
       let forwardc = 2.0;
          let saveV = String.fromCharCode(100,95,49,56,95,115,114,99,0);
         maili = internetN == 43 && String.fromCharCode(71,0) == saveV;
         statsK.push(2);
         statsK.push(internetN);
      themeA = 53.99 > carouselX;
   }

  const handleRefresh = useCallback(async (isSwipe: boolean = false) => {
    if (isSwipe) {

      mappingr += `${(auto_7f == String.fromCharCode(77,0) ? (themeA ? 4 : 3) : auto_7f.length)}`;
      setIsSwipeRefreshing(true);
    } else {
      setIsRefreshing(true);
    }
    
    

    
    await queryClient.resetQueries(['vodPlaylist']); 

    
  }, []);

  useEffect(() => {
    
    
    setIsRefreshing(true)

    
    
    

    
    setTimeout(() => {
      
      
      setIsRefreshing(false)
    }, 2000); 
  }, []);

  
  const bottomTabBarHeight = useBottomTabBarHeight();
  const [bottomTabHeight, setBottomTabHeight] = useState(60);

  return (
    <View style={{     flex: 1,  paddingTop:20}}>

        {isRefreshing && !isOffline && (
          <View
            style={{
              ...styles.loading,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {
              <FastImage
                style={{ height: 80, width: 80 }}
                source={require('@static/images/settingsGrayZhengpian.gif')}
                resizeMode={"contain"}
              />
            }
          </View>
        )}
        {!isOffline && (
          <>


            <FlatList
              showsVerticalScrollIndicator={false}
              data={playlists?.pages.flat()}
              onEndReached={() => {
                if (hasNextPage) {
                  fetchNextPage();
                }
              }}
              onEndReachedThreshold={0.3}
              windowSize={5}
              maxToRenderPerBatch={5}
              renderItem={renderItem}
              initialNumToRender={5}
              ListFooterComponent={
                <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                  {hasNextPage && (
                    <FastImage
                      style={{ height: 80, width: 80 }}
                      source={require('@static/images/settingsGrayZhengpian.gif')}
                      resizeMode={"contain"}
                    />
                  )}
                  {!(isFetchingNextPage || isFetching) && !hasNextPage && (
                    <Text style={{ ...textVariants.body, color: colors.muted }}>
                      没有更多了
                    </Text>
                  )}
                </View>
              }
              refreshControl={
                <RefreshControl
                  refreshing={isSwipeRefreshing}
                  onRefresh={() => handleRefresh(true)}
                  tintColor="#FAC33D" 
                />
              }
            />
          </>
        )}

      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </View>
  );
};

export default memo(Topic);

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
