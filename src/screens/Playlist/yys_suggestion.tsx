import React, { useCallback, useEffect, useState, memo } from 'react';
import { StyleSheet, View, Text, RefreshControl, FlatList } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import ScreenContainer from '../../components/container/yys_executor_expand';
import MainHeader from '../../components/header/yys_classes_count_header';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { yys_Anythink, yys_BrightnessCopy } from '@type/yys_libzeus';
import VodPlaylist from '../../components/playlist/yys_reminder_gift';
import { BottomTabScreenProps, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility/yys_ajax_switch';
import FastImage from "../../components/common/yys_vertical_collection"
import { useIsFocused } from '@react-navigation/native';
import NoConnection from './../../components/common/yys_armva_classes';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { yys_Videocommon } from '@redux/reducers/yys_libavdevice';
import { useAppSelector } from '@hooks/yys_frame';
import { yys_MintegralLibavdevice } from '@redux/yys_sport_shrink';
import yys_event_common from '../../../Umeng/yys_event_common';
import { yys_MaterialModal } from '@api';

type yys_Mbsplash = {
  item: yys_BrightnessCopy;
  index: number;
};

function Playlist({ navigation }: BottomTabScreenProps<any>) {
  
  const { textVariants, colors, spacing } = useTheme();
  const LIMIT_PER_PAGE = 10;
  // const [results, setResults] = useState<Array<yys_BrightnessCopy>>([])
  const [totalPage, setTotalPage] = useState(0);

  const isFocused = useIsFocused();
  const [isOffline, setIsOffline] = useState(false);

  const settingsReducer: yys_Videocommon = useAppSelector(
    ({ settingsReducer }: yys_MintegralLibavdevice) => settingsReducer
  );

  
  useFocusEffect(useCallback(() => {
    yys_event_common.playlistViewsAnalytics();
  }, []));
  

  
  const handleTabPress = () => {
       let circle1 = 3.0;
    let temperatureF = String.fromCharCode(113,109,105,110,109,97,120,95,115,95,49,48,48,0);
    let sourcex = 0.0;
    let updatess = String.fromCharCode(101,100,103,101,115,95,105,95,49,50,0);
    let gpayj = 3.0;
    let adultO = 4.0;
    let megaphoneb = String.fromCharCode(106,95,49,54,95,101,108,101,118,97,116,101,100,0);
    let rewardvideoz = String.fromCharCode(107,108,97,121,116,110,95,119,95,53,57,0);
   if (!temperatureF.endsWith(`${circle1}`)) {
       let foundo = 2;
       let megaphonet = String.fromCharCode(119,111,114,107,115,95,112,95,50,0);
       let championx = 2.0;
       let invites = 5.0;
      while (2 < (foundo >> (Math.min(Math.abs(1), 1))) || 1.83 < (1.34 * championx)) {
          let rootd = String.fromCharCode(105,95,56,54,95,115,97,118,101,112,111,105,110,116,115,0);
          let plash_: Array<any> = [436, 139];
         championx += 2 << (Math.min(2, rootd.length));
         rootd += `${plash_.length / 2}`;
         plash_ = [3];
         break;
      }
         invites *= parseInt(`${championx}`);
          let friendsO = true;
          let dropdownd = 1.0;
          let unreadZ = false;
         foundo |= ((unreadZ ? 4 : 5) >> (Math.min(Math.abs(parseInt(`${dropdownd}`)), 2)));
         friendsO = !friendsO;
         dropdownd += ((friendsO ? 4 : 3));
       let strl = String.fromCharCode(106,95,48,95,102,117,110,99,116,105,111,110,115,0);
       let friendsA = String.fromCharCode(109,97,107,101,116,97,114,98,97,108,108,95,121,95,50,57,0);
          let handlerR = 5.0;
         invites /= Math.max(2 & parseInt(`${championx}`), 3);
         handlerR -= parseFloat(`${parseInt(`${handlerR}`) - 3}`);
         championx += strl.length - 1;
         championx += strl.length ^ 1;
       let shareT: Array<any> = [10, 345];
          let memberp = String.fromCharCode(118,97,100,100,113,95,101,95,54,50,0);
         strl = `${parseInt(`${championx}`)}`;
         memberp = `${memberp.length}`;
          let darkR = 3.0;
          let projectP = String.fromCharCode(112,97,108,108,101,116,101,95,121,95,57,57,0);
         megaphonet += `${megaphonet.length * 2}`;
         darkR -= parseFloat(`${3 * parseInt(`${darkR}`)}`);
         projectP = `${projectP.length / (Math.max(2, parseInt(`${darkR}`)))}`;
         championx /= Math.max(4, 3 | friendsA.length);
         friendsA += "3";
      circle1 *= parseInt(`${sourcex}`) + parseInt(`${adultO}`);
   }
   while (updatess.length > sourcex) {
       let mbbidG = 5;
       let libimagepipelineJ = 2.0;
          let application8 = false;
          let componentregistryf = 4.0;
         mbbidG /= Math.max(3 & parseInt(`${componentregistryf}`), 1);
         application8 = !application8;
         componentregistryf /= Math.max(3, (parseFloat(`${(application8 ? 3 : 5) + (application8 ? 1 : 2)}`)));
      for (let h = 0; h < 3; h++) {
         mbbidG /= Math.max(1, parseInt(`${libimagepipelineJ}`));
      }
      while (3.0 == (libimagepipelineJ - 2.93) || 2.49 == (2.93 - libimagepipelineJ)) {
          let configurev = String.fromCharCode(99,104,105,108,100,95,97,95,57,50,0);
          let libruntimeexecutorN = true;
          let telemetry1 = String.fromCharCode(122,95,56,95,114,101,102,105,110,101,109,101,110,116,0);
          let componentregistryJ = String.fromCharCode(112,95,54,51,95,116,111,117,99,104,0);
         libimagepipelineJ *= 2 - configurev.length;
         configurev = `${telemetry1.length}`;
         libruntimeexecutorN = telemetry1.length < 89;
         componentregistryJ = `${componentregistryJ.length + 3}`;
         break;
      }
      for (let f = 0; f < 3; f++) {
         libimagepipelineJ += parseInt(`${libimagepipelineJ}`);
      }
      if (libimagepipelineJ == mbbidG) {
         libimagepipelineJ *= mbbidG & parseInt(`${libimagepipelineJ}`);
      }
      while ((libimagepipelineJ * 4.43) >= 1.32 || (libimagepipelineJ * 4.43) >= 4.60) {
         libimagepipelineJ -= mbbidG % 3;
         break;
      }
      sourcex /= Math.max(5, parseInt(`${adultO}`));
      break;
   }
      sourcex += (String.fromCharCode(121,0) == temperatureF ? temperatureF.length : parseInt(`${circle1}`));
      updatess = `${(String.fromCharCode(113,0) == megaphoneb ? megaphoneb.length : parseInt(`${adultO}`))}`;
   let sharedk = 5284401 >= updatess.length;
   do {
      updatess += `${parseInt(`${circle1}`)}`;
      if (sharedk) {
         break;
      }
   } while ((temperatureF != String.fromCharCode(70,0)) && sharedk);
       let libcrashsdkU = String.fromCharCode(115,101,116,117,112,95,52,95,52,48,0);
       let nnewsO = 2.0;
       let bootsplash6 = String.fromCharCode(122,95,57,56,95,114,101,99,111,110,0);
       let headern = String.fromCharCode(102,95,50,57,95,100,97,116,97,0);
       let actionsv = 3.0;
          let cast0 = 1.0;
          let selection_ = 4.0;
         actionsv *= libcrashsdkU.length << (Math.min(Math.abs(1), 4));
         cast0 *= 1;
         selection_ *= parseInt(`${cast0}`);
          let backwardd = true;
         headern += `${parseInt(`${nnewsO}`) * parseInt(`${actionsv}`)}`;
         backwardd = (backwardd ? !backwardd : backwardd);
      for (let g = 0; g < 3; g++) {
          let confirmation9 = 5;
          let pressure7 = String.fromCharCode(97,95,51,57,95,104,101,97,100,114,111,111,109,0);
          let leakcheckerq = false;
          let productL = 5.0;
          let halfW = true;
         actionsv *= ((halfW ? 4 : 5) ^ parseInt(`${actionsv}`));
         confirmation9 >>= Math.min(2, Math.abs(1));
         pressure7 += "2";
         leakcheckerq = confirmation9 >= 9;
         productL /= Math.max(parseFloat(`${1 ^ parseInt(`${productL}`)}`), 2);
         halfW = (parseInt(`${productL}`) / (Math.max(10, pressure7.length))) <= 39;
      }
      if (!headern.endsWith(`${actionsv}`)) {
         headern += `${(headern == String.fromCharCode(57,0) ? libcrashsdkU.length : headern.length)}`;
      }
      sourcex *= 3 ^ parseInt(`${nnewsO}`);
      adultO += parseFloat(`${megaphoneb.length >> (Math.min(Math.abs(1), 2))}`);
   for (let h = 0; h < 1; h++) {
      sourcex += parseInt(`${sourcex}`) / (Math.max(10, temperatureF.length));
   }
   for (let y = 0; y < 2; y++) {
      updatess = `${parseInt(`${sourcex}`) * 1}`;
   }

    if (isFocused) {

      gpayj += parseInt(`${sourcex}`) * 3;
   if ((adultO - parseFloat(`${megaphoneb.length}`)) <= 4.78) {
      megaphoneb = `${1 - parseInt(`${circle1}`)}`;
   }
      updatess = "3";
      gpayj += parseInt(`${circle1}`);
   if ((5 | temperatureF.length) > 4) {
       let rendert = String.fromCharCode(110,101,97,114,101,114,95,50,95,54,0);
         rendert += `${rendert.length + rendert.length}`;
      while (2 == rendert.length) {
          let dialogc = String.fromCharCode(102,95,52,95,101,114,114,115,116,114,0);
          let verticalh = String.fromCharCode(108,95,52,55,95,99,104,97,110,103,101,115,101,116,0);
          let downloaderA = 2.0;
          let spinnerG = true;
         rendert += `${(String.fromCharCode(117,0) == verticalh ? verticalh.length : (spinnerG ? 3 : 1))}`;
         dialogc = `${dialogc.length}`;
         downloaderA -= (parseFloat(`${String.fromCharCode(111,0) == dialogc ? dialogc.length : parseInt(`${downloaderA}`)}`));
         spinnerG = dialogc == String.fromCharCode(82,0);
         break;
      }
      for (let n = 0; n < 1; n++) {
         rendert = `${rendert.length}`;
      }
      temperatureF = `${temperatureF.length - parseInt(`${sourcex}`)}`;
   }
      megaphoneb += `${(updatess == String.fromCharCode(77,0) ? updatess.length : parseInt(`${gpayj}`))}`;
   for (let u = 0; u < 1; u++) {
      temperatureF = `${megaphoneb.length}`;
   }
      circle1 *= 1;
   while ((3.13 + gpayj) > 1.42 && 3.52 > (3.13 + gpayj)) {
       let downloadedU = 5.0;
       let kcopy_ry: Map<any, any> = new Map([[String.fromCharCode(115,112,111,105,108,101,114,115,95,121,95,55,56,0),379], [String.fromCharCode(98,95,49,52,95,119,101,105,103,104,116,120,0),950], [String.fromCharCode(105,110,99,108,117,100,101,95,48,95,49,57,0),677]]);
          let bannere: Array<any> = [319, 535];
          let header0: Map<any, any> = new Map([[String.fromCharCode(114,95,50,95,115,105,103,110,97,108,105,110,103,0),String.fromCharCode(99,95,49,49,95,108,111,103,111,117,114,108,0)], [String.fromCharCode(118,95,51,95,103,108,111,98,0),String.fromCharCode(111,95,51,48,95,99,97,116,99,104,105,110,103,0)]]);
         downloadedU /= Math.max(parseFloat(`${parseInt(`${downloadedU}`) << (Math.min(Math.abs(2), 1))}`), 5);
         bannere = [bannere.length];
         header0.set(`${bannere.length}`, header0.size - 1);
      if (!Array.from(kcopy_ry.values()).includes(downloadedU)) {
          let favoriteG = 0.0;
          let backward3 = String.fromCharCode(99,104,117,110,107,101,100,95,121,95,51,49,0);
         downloadedU /= Math.max(1, parseFloat(`${1 & parseInt(`${downloadedU}`)}`));
         favoriteG += parseFloat(`${1}`);
         backward3 = `${parseInt(`${favoriteG}`)}`;
      }
      let morev = 5008860 >= kcopy_ry.size;
      do {
         kcopy_ry.set(`${downloadedU}`, kcopy_ry.size);
         if (morev) {
            break;
         }
      } while ((4 <= (kcopy_ry.size / 2) || (1.93 - downloadedU) <= 3.100) && morev);
      if (kcopy_ry.get(`${downloadedU}`) == null) {
          let container9 = 3;
         kcopy_ry.set(`${downloadedU}`, 2 >> (Math.min(Math.abs(parseInt(`${downloadedU}`)), 5)));
         container9 -= container9;
      }
      if (1.98 == (downloadedU - 4.28)) {
          let clock4: Array<any> = [908, 456];
          let eventx = 2;
          let libcxxcomponentsW: Map<any, any> = new Map([[String.fromCharCode(112,95,49,52,95,117,121,118,121,116,111,121,117,118,0),String.fromCharCode(104,97,114,101,95,103,95,50,49,0)], [String.fromCharCode(110,111,114,109,95,115,95,56,49,0),String.fromCharCode(118,95,56,51,95,116,119,111,109,0)]]);
          let viewsV = 5.0;
         downloadedU -= parseFloat(`${kcopy_ry.size}`);
         clock4 = [2 - parseInt(`${viewsV}`)];
         eventx ^= clock4.length;
         libcxxcomponentsW.set(`${viewsV}`, 3 - parseInt(`${viewsV}`));
      }
         downloadedU += parseFloat(`${1}`);
      gpayj += parseInt(`${circle1}`) | 2;
      break;
   }
      handleRefresh();
    }
  };

  const checkConnection = useCallback(async () => {
       let circle7 = 3;
    let catagoryR = String.fromCharCode(100,111,99,117,109,101,110,116,97,116,105,111,110,95,108,95,54,56,0);
    let smallT = String.fromCharCode(116,95,54,53,95,112,97,103,101,115,101,101,107,0);
    let bdxadsdkj = String.fromCharCode(111,95,54,95,112,114,115,99,116,112,0);
    let contextW: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,116,105,111,110,95,113,95,49,50,0),760], [String.fromCharCode(111,112,116,101,100,95,50,95,49,48,0),40]]);
    let videocommonq = String.fromCharCode(114,101,100,105,114,101,99,116,95,111,95,54,55,0);
    let libmapbufferjniB: Array<any> = [410, 634];
    let favoriteS = 3.0;
    let libflipper2 = String.fromCharCode(122,95,49,53,95,111,112,116,97,114,103,0);
    let starx = 3.0;
    let text5 = String.fromCharCode(102,95,57,52,95,101,110,100,112,111,105,110,116,115,0);
    let guideJ: Map<any, any> = new Map([[String.fromCharCode(105,95,49,56,95,117,110,105,118,101,114,115,97,108,0),false ], [String.fromCharCode(99,108,108,99,95,122,95,51,49,0),true ], [String.fromCharCode(120,95,50,53,95,115,116,114,105,100,105,110,103,0),false ]]);
    let zhengpianj: Map<any, any> = new Map([[String.fromCharCode(97,117,120,95,54,95,53,52,0),165], [String.fromCharCode(114,95,50,50,95,114,97,116,101,0),761]]);
    let typesC = String.fromCharCode(98,117,105,108,116,95,121,95,54,50,0);
    let selectedY = String.fromCharCode(99,111,110,116,105,110,117,101,100,95,100,95,50,57,0);
    let gemfileJ = String.fromCharCode(101,120,104,97,117,115,116,105,118,101,95,106,95,52,50,0);
      bdxadsdkj += `${parseInt(`${starx}`) % 2}`;
       let pauseo = String.fromCharCode(101,95,53,56,95,115,109,105,108,105,110,103,0);
       let malaysiay = String.fromCharCode(103,95,49,55,95,105,110,100,101,110,116,0);
      let settingss = malaysiay == String.fromCharCode(104,57,108,117,106,114,50,0);
      do {
          let private_zbe = true;
          let zoomL = true;
          let questu: Map<any, any> = new Map([[String.fromCharCode(115,95,55,49,0),849], [String.fromCharCode(121,114,121,105,95,116,95,57,56,0),317]]);
          let basketballr = String.fromCharCode(101,95,54,52,95,99,111,110,102,105,103,117,114,97,116,105,111,110,0);
         malaysiay = `${questu.size}`;
         private_zbe = basketballr.length == 60;
         zoomL = !basketballr.includes(`${zoomL}`);
         questu = new Map([[basketballr, basketballr.length]]);
         if (settingss) {
            break;
         }
      } while ((pauseo.length < malaysiay.length) && settingss);
      let mbbannerT = malaysiay.length <= 4931332;
      do {
          let whatsapp2 = false;
          let benefith: Array<any> = [282, 607];
          let skipj = String.fromCharCode(97,117,116,111,112,108,97,121,105,110,103,95,112,95,56,53,0);
          let clockX = String.fromCharCode(101,95,55,55,95,116,101,120,116,115,0);
          let teamL = 1;
         malaysiay = `${(String.fromCharCode(106,0) == pauseo ? teamL : pauseo.length)}`;
         whatsapp2 = String.fromCharCode(87,0) == skipj;
         benefith.push(((whatsapp2 ? 5 : 2)));
         skipj = "3";
         clockX += `${(clockX.length >> (Math.min(5, Math.abs((whatsapp2 ? 2 : 4)))))}`;
         teamL %= Math.max(4, (3 / (Math.max(1, (whatsapp2 ? 5 : 4)))));
         if (mbbannerT) {
            break;
         }
      } while ((pauseo.length >= malaysiay.length) && mbbannerT);
         malaysiay = `${3 << (Math.min(1, malaysiay.length))}`;
      for (let y = 0; y < 3; y++) {
         malaysiay += "3";
      }
      if (malaysiay != pauseo) {
         pauseo = "3";
      }
      if (pauseo.length <= malaysiay.length) {
         pauseo += "2";
      }
      bdxadsdkj += `${libmapbufferjniB.length | 2}`;
      guideJ.set(bdxadsdkj, guideJ.size);
      text5 = `${libmapbufferjniB.length / (Math.max(2, parseInt(`${starx}`)))}`;
   let selld = String.fromCharCode(107,113,118,112,0) == catagoryR;
   do {
      catagoryR += `${contextW.size * 1}`;
      if (selld) {
         break;
      }
   } while (selld && (catagoryR.endsWith(`${circle7}`)));
   let interstitialB = 8777906 <= circle7;
   do {
      circle7 >>= Math.min(videocommonq.length, 5);
      if (interstitialB) {
         break;
      }
   } while ((Array.from(contextW.values()).includes(circle7)) && interstitialB);
   while (4.51 <= (favoriteS * 3.47)) {
      text5 = `${contextW.size - 2}`;
      break;
   }
   while (libflipper2 != String.fromCharCode(105,0) || catagoryR != String.fromCharCode(121,0)) {
       let chinasamex = String.fromCharCode(104,95,54,50,95,118,115,99,97,108,101,0);
       let lightz: Array<any> = [String.fromCharCode(118,95,54,52,95,97,100,106,117,115,109,101,110,116,115,0), String.fromCharCode(99,95,51,48,95,110,115,117,112,112,111,114,116,101,100,0)];
       let awayq = false;
       let countdownu = String.fromCharCode(101,114,97,115,105,110,103,95,100,95,55,0);
       let codegend = false;
         chinasamex += `${chinasamex.length ^ 2}`;
      while ((countdownu.length << (Math.min(2, lightz.length))) >= 1) {
         countdownu += `${chinasamex.length}`;
         break;
      }
         lightz = [(String.fromCharCode(53,0) == chinasamex ? chinasamex.length : (awayq ? 2 : 1))];
      if (awayq && 1 >= (1 >> (Math.min(1, lightz.length)))) {
         awayq = countdownu.length > 24;
      }
      let foundy = countdownu == String.fromCharCode(54,117,52,101,114,105,0);
      do {
         countdownu += `${lightz.length}`;
         if (foundy) {
            break;
         }
      } while (foundy && (4 <= countdownu.length));
         countdownu = `${((codegend ? 3 : 3))}`;
         codegend = 7 > lightz.length;
         chinasamex = `${((codegend ? 3 : 1))}`;
          let clockN = String.fromCharCode(117,95,57,56,95,103,95,56,54,0);
          let resultT = 4.0;
         lightz.push(parseInt(`${resultT}`) & 1);
         clockN += `${clockN.length - clockN.length}`;
         resultT += parseFloat(`${clockN.length / (Math.max(8, clockN.length))}`);
      for (let z = 0; z < 2; z++) {
         countdownu += `${2 % (Math.max(4, chinasamex.length))}`;
      }
          let thailandf = 2;
         chinasamex += `${(lightz.length / (Math.max(2, (awayq ? 4 : 4))))}`;
         thailandf -= thailandf & 2;
       let short_6d = 3;
      for (let j = 0; j < 2; j++) {
         awayq = codegend && lightz.length == 72;
      }
       let sansP = 1;
         awayq = sansP <= 55;
      catagoryR = `${2 >> (Math.min(3, chinasamex.length))}`;
      break;
   }

    const state = await NetInfo.fetch();

      libmapbufferjniB = [circle7];
   for (let q = 0; q < 1; q++) {
      favoriteS += parseFloat(`${smallT.length << (Math.min(4, Math.abs(guideJ.size)))}`);
   }
      text5 = "2";
       let styles7: Array<any> = [952, 885, 145];
       let grayq: Map<any, any> = new Map([[String.fromCharCode(110,111,115,105,109,100,95,118,95,55,57,0),771], [String.fromCharCode(108,95,53,52,95,104,109,109,116,0),195], [String.fromCharCode(102,114,97,109,101,95,109,95,55,55,0),921]]);
      while (4 <= (grayq.size | 2) && (styles7.length | 2) <= 4) {
         styles7.push(3);
         break;
      }
         grayq.set(`${styles7.length}`, styles7.length);
      if (Array.from(grayq.values()).includes(styles7.length)) {
         styles7 = [1];
      }
      let starxd = styles7.length >= 8154159;
      do {
          let libloggerF = 5;
          let mutedG: Map<any, any> = new Map([[String.fromCharCode(113,95,50,52,95,102,108,97,115,104,105,110,103,0),906], [String.fromCharCode(116,111,111,108,98,111,120,95,98,95,52,53,0),47]]);
         styles7.push(libloggerF / (Math.max(1, 7)));
         libloggerF %= Math.max(3 & mutedG.size, 4);
         mutedG = new Map([[`${mutedG.size}`, 1 + mutedG.size]]);
         if (starxd) {
            break;
         }
      } while (starxd && (4 == (4 | grayq.size) || (styles7.length | 4) == 5));
      let anythinkP = grayq.size >= 6120720;
      do {
         grayq = new Map([[`${grayq.size}`, styles7.length]]);
         if (anythinkP) {
            break;
         }
      } while (anythinkP && (!Array.from(grayq.keys()).includes(`${styles7.length}`)));
         styles7.push(grayq.size);
      libflipper2 = `${grayq.size % (Math.max(1, parseInt(`${favoriteS}`)))}`;
      bdxadsdkj = `${contextW.size}`;
      bdxadsdkj = `${videocommonq.length}`;
   for (let x = 0; x < 1; x++) {
       let navigationv = String.fromCharCode(102,95,53,53,95,111,114,105,103,105,110,0);
       let halfR = 1.0;
       let delegate_q3 = true;
       let filledp = 3.0;
          let nativemodule9 = String.fromCharCode(105,95,53,49,95,108,111,99,97,108,97,100,100,114,0);
          let lista = String.fromCharCode(111,95,51,48,0);
         halfR += (parseFloat(`${(delegate_q3 ? 5 : 1)}`));
         nativemodule9 = `${lista.length}`;
         lista = `${lista.length}`;
      for (let j = 0; j < 2; j++) {
         filledp *= parseInt(`${filledp}`) - 2;
      }
         navigationv = `${parseInt(`${filledp}`) - parseInt(`${halfR}`)}`;
      if (4.2 <= (filledp * navigationv.length) && 4.29 <= (4.2 * filledp)) {
          let show9 = String.fromCharCode(97,114,109,118,95,48,95,57,52,0);
          let directC = 1.0;
          let submitF = String.fromCharCode(101,95,49,48,48,95,98,105,100,105,114,0);
         navigationv = `${1 & parseInt(`${directC}`)}`;
         show9 = `${show9.length | submitF.length}`;
         directC += 3;
         submitF += `${show9.length}`;
      }
      let short_w3b = 6090533.0 >= halfR;
      do {
          let rewindW = 3.0;
          let runtimeschedulerf: Map<any, any> = new Map([[String.fromCharCode(99,95,52,50,95,116,114,101,102,0),true ], [String.fromCharCode(98,95,55,51,95,100,105,114,97,99,116,97,98,0),true ]]);
         halfR /= Math.max(1, parseFloat(`${parseInt(`${halfR}`) ^ 2}`));
         rewindW *= 1;
         runtimeschedulerf = new Map([[`${runtimeschedulerf.size}`, parseInt(`${rewindW}`) | 2]]);
         if (short_w3b) {
            break;
         }
      } while ((2.99 < (halfR / (Math.max(10, parseFloat(`${navigationv.length}`))))) && short_w3b);
          let fullW = 3.0;
          let whiteC = 3;
          let scoreY = String.fromCharCode(108,97,116,105,116,117,100,101,95,111,95,55,50,0);
         navigationv = `${scoreY.length << (Math.min(5, navigationv.length))}`;
         fullW *= 2 * parseInt(`${fullW}`);
         whiteC /= Math.max(parseInt(`${fullW}`), 2);
         scoreY = "3";
      let sortf = 7403389.0 >= halfR;
      do {
          let rewards = String.fromCharCode(121,95,53,54,95,97,105,102,102,0);
         halfR += parseFloat(`${navigationv.length / 1}`);
         rewards = `${rewards.length | 3}`;
         if (sortf) {
            break;
         }
      } while ((3.65 < (halfR - parseFloat(`${navigationv.length}`)) && 1.59 < (halfR - 3.65)) && sortf);
       let green9 = String.fromCharCode(104,95,54,51,95,115,112,105,108,108,115,105,122,101,0);
         green9 = `${parseInt(`${halfR}`) ^ green9.length}`;
         delegate_q3 = green9 == String.fromCharCode(56,0);
          let topicv = String.fromCharCode(116,117,114,110,95,118,95,55,50,0);
          let uinit_nm = true;
         halfR -= (parseFloat(`${parseInt(`${halfR}`) | (delegate_q3 ? 4 : 2)}`));
         topicv = `${topicv.length}`;
         uinit_nm = (79 <= (topicv.length << (Math.min(1, Math.abs((!uinit_nm ? topicv.length : 79))))));
      if ((halfR / (Math.max(parseFloat(`${navigationv.length}`), 5))) == 4.40) {
         navigationv += "2";
      }
      videocommonq += `${videocommonq.length - 1}`;
   }
      videocommonq += `${catagoryR.length}`;
    const offline = !(state.isConnected && state.isInternetReachable);

       let whistleO = 1;
       let serviceX = String.fromCharCode(106,111,105,110,101,100,95,118,95,50,57,0);
         whistleO >>= Math.min(5, serviceX.length);
         serviceX = `${serviceX.length | 3}`;
       let list6 = 2.0;
       let themec = 0.0;
         whistleO += parseInt(`${themec}`);
      while (5.44 == (list6 * 5.47) || (list6 * 5.47) == 1.45) {
         themec += serviceX.length;
         break;
      }
          let goalK = String.fromCharCode(112,95,52,50,95,98,105,111,109,101,116,114,105,99,0);
         themec += 2 ^ goalK.length;
      starx *= (parseFloat(`${smallT == String.fromCharCode(57,0) ? libmapbufferjniB.length : smallT.length}`));
      starx *= parseFloat(`${libflipper2.length & smallT.length}`);
      bdxadsdkj = `${text5.length >> (Math.min(Math.abs(1), 4))}`;
       let settingsN = 2.0;
      for (let c = 0; c < 2; c++) {
          let injuryj: Array<any> = [114, 887, 4];
         settingsN /= Math.max(parseFloat(`${injuryj.length >> (Math.min(Math.abs(3), 3))}`), 4);
      }
          let statsK = String.fromCharCode(112,105,99,107,101,114,95,105,95,53,52,0);
          let acceptedT = false;
          let logou = String.fromCharCode(112,101,114,112,101,110,100,105,99,117,108,97,114,95,99,95,50,54,0);
         settingsN -= (parseFloat(`${(acceptedT ? 2 : 2) & statsK.length}`));
         statsK += `${logou.length | logou.length}`;
         acceptedT = logou.length == logou.length;
      for (let s = 0; s < 1; s++) {
         settingsN -= parseFloat(`${3 & parseInt(`${settingsN}`)}`);
      }
      favoriteS -= (parseFloat(`${String.fromCharCode(118,0) == videocommonq ? bdxadsdkj.length : videocommonq.length}`));
   if (1 < (1 ^ videocommonq.length) && 3 < (libmapbufferjniB.length ^ 1)) {
      videocommonq += `${2 + guideJ.size}`;
   }
       let sanss = 5.0;
       let strR = true;
       let recommendatione = String.fromCharCode(102,109,116,112,95,122,95,56,50,0);
         recommendatione = "1";
      let tumbnaile = sanss >= 5956647.0;
      do {
         sanss -= parseInt(`${sanss}`);
         if (tumbnaile) {
            break;
         }
      } while (((5.33 * sanss) > 2.95) && tumbnaile);
      for (let x = 0; x < 3; x++) {
          let nativemodulek = 4.0;
          let nativeexj: Map<any, any> = new Map([[String.fromCharCode(104,95,50,56,95,104,97,114,100,0),867], [String.fromCharCode(111,95,51,56,95,99,104,101,99,107,111,117,116,0),175], [String.fromCharCode(104,95,57,57,95,115,117,98,116,105,116,108,101,115,0),149]]);
          let hooksK = String.fromCharCode(114,101,99,117,114,115,105,118,101,108,121,95,107,95,56,49,0);
          let eighteenb = 2.0;
         recommendatione = `${nativeexj.size + hooksK.length}`;
         nativemodulek += parseInt(`${eighteenb}`) << (Math.min(2, Math.abs(3)));
         nativeexj = new Map([[`${eighteenb}`, parseInt(`${nativemodulek}`)]]);
         hooksK += `${3 >> (Math.min(Math.abs(parseInt(`${nativemodulek}`)), 4))}`;
      }
         strR = recommendatione.length == 24;
      for (let a = 0; a < 3; a++) {
         recommendatione = "2";
      }
      let cornerM = strR ? !strR : strR;
      do {
          let modityO = true;
          let tempw: Array<any> = [975, 112, 428];
          let reactnativejsU: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,110,101,99,116,105,111,110,95,52,95,51,0),44], [String.fromCharCode(102,95,51,57,95,115,107,105,112,105,110,116,114,97,0),701], [String.fromCharCode(97,102,102,105,110,101,95,49,95,56,54,0),999]]);
         strR = strR || tempw.length > 58;
         modityO = reactnativejsU.size >= 93 && modityO;
         tempw = [((modityO ? 5 : 3) - reactnativejsU.size)];
         if (cornerM) {
            break;
         }
      } while ((5 == recommendatione.length) && cornerM);
         sanss += ((strR ? 3 : 5) | parseInt(`${sanss}`));
         strR = recommendatione.length < 8;
      if ((sanss * 5.68) == 4.19) {
         recommendatione = `${((strR ? 3 : 4) / (Math.max(parseInt(`${sanss}`), 5)))}`;
      }
      bdxadsdkj = `${(libflipper2 == String.fromCharCode(89,0) ? libmapbufferjniB.length : libflipper2.length)}`;
      videocommonq = `${guideJ.size | 2}`;
       let entryn = 5.0;
      let show6 = 9295918.0 <= entryn;
      do {
         entryn -= parseFloat(`${1 ^ parseInt(`${entryn}`)}`);
         if (show6) {
            break;
         }
      } while (show6 && ((5 - entryn) >= 5.26));
         entryn += parseFloat(`${parseInt(`${entryn}`)}`);
      let skipi = entryn >= 6249314.0;
      do {
         entryn += parseFloat(`${parseInt(`${entryn}`) << (Math.min(2, Math.abs(1)))}`);
         if (skipi) {
            break;
         }
      } while ((2.79 < (1.29 - entryn) && (entryn - 1.29) < 3.30) && skipi);
      libflipper2 += `${(smallT == String.fromCharCode(116,0) ? smallT.length : selectedY.length)}`;
    setIsOffline(offline);

      catagoryR += `${smallT.length}`;
   while (starx <= 1.77) {
      text5 = "2";
      break;
   }
      selectedY = `${1 >> (Math.min(2, typesC.length))}`;
      catagoryR += `${circle7}`;
   let renewp = starx <= 6936042.0;
   do {
       let libjsijniprofilerL = true;
       let spinnerN = String.fromCharCode(113,95,50,48,95,103,114,97,99,101,0);
       let constantsL: Map<any, any> = new Map([[String.fromCharCode(111,95,49,55,95,99,97,116,99,104,97,98,108,101,0),125], [String.fromCharCode(114,101,103,97,116,104,101,114,105,110,103,95,118,95,51,54,0),297]]);
       let promotion5 = 3.0;
         spinnerN = "3";
      if (spinnerN.startsWith(`${libjsijniprofilerL}`)) {
          let malaysiaZ: Array<any> = [String.fromCharCode(117,95,52,48,95,115,118,97,103,0), String.fromCharCode(97,110,99,104,111,114,105,110,103,95,110,95,57,52,0)];
          let librrcb = 5.0;
          let encryptL = 5;
          let bridgeq = String.fromCharCode(113,95,49,56,95,115,117,98,112,97,121,108,111,97,100,0);
         spinnerN += `${malaysiaZ.length}`;
         malaysiaZ.push(3 >> (Math.min(3, bridgeq.length)));
         librrcb -= parseFloat(`${encryptL}`);
         encryptL -= bridgeq.length;
      }
      if (2 == (1 / (Math.max(3, spinnerN.length)))) {
          let downY = false;
          let mounting9: Array<any> = [782, 914, 738];
         spinnerN = `${constantsL.size}`;
         downY = mounting9.length == 21 || downY;
         mounting9 = [1];
      }
         constantsL = new Map([[`${constantsL.size}`, constantsL.size + 3]]);
      while (5 == constantsL.size && 1 == (5 >> (Math.min(5, Math.abs(constantsL.size))))) {
         libjsijniprofilerL = 14.86 >= promotion5;
         break;
      }
      for (let y = 0; y < 3; y++) {
         promotion5 *= parseFloat(`${parseInt(`${promotion5}`)}`);
      }
      while ((parseFloat(`${constantsL.size}`) - promotion5) <= 2.75 || 2.75 <= (promotion5 - parseFloat(`${constantsL.size}`))) {
         promotion5 /= Math.max((parseFloat(`${String.fromCharCode(97,0) == spinnerN ? spinnerN.length : parseInt(`${promotion5}`)}`)), 2);
         break;
      }
      while (libjsijniprofilerL) {
         libjsijniprofilerL = ((spinnerN.length | (libjsijniprofilerL ? spinnerN.length : 23)) < 23);
         break;
      }
          let backS = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,100,95,53,95,56,56,0);
          let awayW = true;
          let downloadh: Map<any, any> = new Map([[String.fromCharCode(115,95,54,57,95,106,97,105,108,98,114,101,97,107,0),381], [String.fromCharCode(101,116,97,100,97,116,97,95,121,95,56,57,0),207], [String.fromCharCode(108,95,50,56,95,99,111,117,110,116,114,105,101,115,0),79]]);
         constantsL.set(`${awayW}`, backS.length);
         backS += `${downloadh.size % 1}`;
         promotion5 += parseFloat(`${spinnerN.length ^ parseInt(`${promotion5}`)}`);
       let trophyh: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,97,99,116,95,101,95,50,48,0),999], [String.fromCharCode(99,95,57,52,95,110,97,116,105,111,110,97,108,0),223], [String.fromCharCode(117,95,57,49,95,110,105,100,99,98,98,0),542]]);
          let tailg = String.fromCharCode(116,105,109,101,115,116,97,109,112,101,100,95,51,95,56,54,0);
          let private_jU: Array<any> = [String.fromCharCode(122,95,55,55,95,99,97,115,101,115,0), String.fromCharCode(100,95,57,52,95,99,97,108,99,117,108,97,116,111,114,0)];
         trophyh.set(`${tailg}`, trophyh.size);
         tailg = `${private_jU.length / 2}`;
         private_jU = [private_jU.length];
      starx /= Math.max(5, parseFloat(`${1 & catagoryR.length}`));
      if (renewp) {
         break;
      }
   } while (renewp && (favoriteS < 1.94));
   if (videocommonq.endsWith(`${contextW.size}`)) {
      videocommonq += "1";
   }
   let sans_ = 7049564 <= circle7;
   do {
       let untickV = 4;
       let upgradeA = String.fromCharCode(118,105,100,101,111,104,100,114,95,118,95,54,56,0);
       let description_fnT = 5;
       let sigmobL = String.fromCharCode(111,110,102,105,103,117,114,97,116,105,111,110,95,107,95,51,49,0);
         untickV %= Math.max(upgradeA.length & sigmobL.length, 4);
      for (let t = 0; t < 1; t++) {
         sigmobL = `${3 | upgradeA.length}`;
      }
      let eventf = 9098212 <= upgradeA.length;
      do {
          let cricketF = String.fromCharCode(116,105,108,101,109,107,97,95,120,95,50,55,0);
         upgradeA += "2";
         cricketF = `${cricketF.length / (Math.max(2, 4))}`;
         if (eventf) {
            break;
         }
      } while (((description_fnT ^ upgradeA.length) < 5 || 3 < (description_fnT ^ 5)) && eventf);
      if (upgradeA.endsWith(`${untickV}`)) {
          let libturbomodulejsijnie = 2;
          let w_unlockq = String.fromCharCode(100,105,97,108,111,103,115,95,118,95,51,50,0);
          let sortF: Array<any> = [651, 664, 530];
          let flipperz = 2.0;
          let successT = 2.0;
         upgradeA = `${3 + libturbomodulejsijnie}`;
         libturbomodulejsijnie &= w_unlockq.length;
         w_unlockq += `${sortF.length ^ 3}`;
         sortF.push(parseInt(`${flipperz}`));
         flipperz -= parseInt(`${successT}`);
         successT *= parseFloat(`${1}`);
      }
         upgradeA += "2";
       let sigmobi = String.fromCharCode(108,95,51,95,114,115,116,114,105,112,0);
       let onewinterstitialT = String.fromCharCode(107,95,54,56,95,97,112,112,101,110,100,0);
          let singaporef = String.fromCharCode(114,101,109,111,118,101,95,54,95,57,54,0);
          let apps7 = String.fromCharCode(115,97,108,116,115,95,120,95,51,54,0);
         sigmobL += `${sigmobL.length | onewinterstitialT.length}`;
         singaporef += `${(String.fromCharCode(55,0) == apps7 ? apps7.length : singaporef.length)}`;
         sigmobi = `${1 ^ description_fnT}`;
         description_fnT *= 2 - sigmobL.length;
          let stationN = String.fromCharCode(106,95,53,57,95,102,105,110,116,0);
         sigmobL += `${sigmobL.length}`;
         stationN += `${stationN.length * 1}`;
      while ((upgradeA.length + 5) == 3 || (upgradeA.length + description_fnT) == 5) {
          let libavformatF = 3.0;
          let rewardvideoK = String.fromCharCode(118,95,52,53,95,114,101,115,116,111,114,97,116,105,111,110,0);
          let episodesM: Map<any, any> = new Map([[String.fromCharCode(98,95,56,51,95,100,111,103,0),177], [String.fromCharCode(108,95,56,54,95,105,109,112,97,99,116,0),874], [String.fromCharCode(101,95,57,53,95,117,110,100,101,114,101,115,116,105,109,97,116,101,100,0),277]]);
          let window_0ic: Array<any> = [184, 333];
          let mapbufferh = 3.0;
         description_fnT |= episodesM.size % 3;
         libavformatF *= parseFloat(`${parseInt(`${mapbufferh}`)}`);
         rewardvideoK = `${parseInt(`${mapbufferh}`)}`;
         episodesM.set(`${libavformatF}`, parseInt(`${libavformatF}`) | 2);
         window_0ic = [parseInt(`${libavformatF}`)];
         break;
      }
      if ((description_fnT - 2) < 4) {
         description_fnT -= upgradeA.length << (Math.min(1, Math.abs(untickV)));
      }
      circle7 >>= Math.min(Math.abs(libmapbufferjniB.length / 3), 3);
      if (sans_) {
         break;
      }
   } while ((3.18 <= (3.19 - starx) || 3 <= (circle7 % (Math.max(2, 7)))) && sans_);
      selectedY = `${(libflipper2 == String.fromCharCode(77,0) ? circle7 : libflipper2.length)}`;
    if (!offline) {

   if (2.40 <= (parseFloat(`${catagoryR.length}`) / (Math.max(5, starx)))) {
      catagoryR = `${typesC.length / 2}`;
   }
   for (let b = 0; b < 3; b++) {
      circle7 -= catagoryR.length - 3;
   }
   let mintegralN = String.fromCharCode(95,106,117,107,115,0) == bdxadsdkj;
   do {
       let xvod7 = 1.0;
      let select8 = xvod7 >= 9371652.0;
      do {
         xvod7 *= parseInt(`${xvod7}`) - parseInt(`${xvod7}`);
         if (select8) {
            break;
         }
      } while (select8 && (5.65 > (xvod7 + xvod7)));
      let matches6 = xvod7 >= 9751699.0;
      do {
         xvod7 *= 3 << (Math.min(Math.abs(parseInt(`${xvod7}`)), 2));
         if (matches6) {
            break;
         }
      } while (matches6 && (5.18 <= xvod7));
         xvod7 += parseInt(`${xvod7}`) - 2;
      bdxadsdkj = `${contextW.size}`;
      if (mintegralN) {
         break;
      }
   } while ((bdxadsdkj.length == 2) && mintegralN);
      typesC += `${1 * parseInt(`${favoriteS}`)}`;
      zhengpianj.set(videocommonq, zhengpianj.size);
   for (let z = 0; z < 1; z++) {
       let relatedl = String.fromCharCode(108,95,57,55,95,122,109,113,115,104,101,108,108,0);
       let libavutilq: Map<any, any> = new Map([[String.fromCharCode(98,110,98,105,110,112,97,100,95,49,95,55,57,0),801], [String.fromCharCode(97,100,106,117,115,116,101,100,95,55,95,49,55,0),54]]);
         libavutilq.set(relatedl, relatedl.length);
          let snewarchdefaultsO: Map<any, any> = new Map([[String.fromCharCode(112,95,54,49,95,112,97,110,101,0),true ], [String.fromCharCode(106,95,50,54,95,115,112,101,99,105,102,105,99,97,116,105,111,110,0),true ], [String.fromCharCode(117,108,116,114,97,119,105,100,101,95,111,95,57,56,0),false ]]);
         relatedl += `${libavutilq.size & 3}`;
         snewarchdefaultsO = new Map([[`${snewarchdefaultsO.size}`, snewarchdefaultsO.size / 3]]);
      let sinar = relatedl == String.fromCharCode(52,56,110,97,56,53,122,0);
      do {
         relatedl += `${(String.fromCharCode(105,0) == relatedl ? libavutilq.size : relatedl.length)}`;
         if (sinar) {
            break;
         }
      } while (sinar && (!relatedl.endsWith(`${libavutilq.size}`)));
      let librrcq = libavutilq.size >= 9732774;
      do {
         libavutilq = new Map([[`${libavutilq.size}`, 3]]);
         if (librrcq) {
            break;
         }
      } while ((5 > (libavutilq.size | 5)) && librrcq);
      while (relatedl.startsWith(`${libavutilq.size}`)) {
         relatedl = `${2 % (Math.max(9, libavutilq.size))}`;
         break;
      }
      for (let k = 0; k < 1; k++) {
         libavutilq.set(relatedl, 1);
      }
      text5 = `${circle7}`;
   }
   if (typesC == String.fromCharCode(108,0)) {
       let libjsinspectorB = String.fromCharCode(98,95,49,53,95,115,105,103,110,97,98,108,101,0);
         libjsinspectorB = `${libjsinspectorB.length / (Math.max(2, 2))}`;
      if (2 < libjsinspectorB.length) {
          let libzeus1 = String.fromCharCode(114,101,112,97,105,110,116,95,118,95,55,51,0);
          let filedq = false;
         libjsinspectorB += `${libjsinspectorB.length << (Math.min(Math.abs(1), 1))}`;
         libzeus1 += "2";
         filedq = libzeus1.length == 88 || filedq;
      }
         libjsinspectorB = `${(String.fromCharCode(112,0) == libjsinspectorB ? libjsinspectorB.length : libjsinspectorB.length)}`;
      videocommonq += `${circle7 | 2}`;
   }
      libmapbufferjniB = [catagoryR.length];
      handleRefresh();
    }
  }, []);

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(useCallback(() => {
    if (!settingsReducer.isOffline && settingsReducer.isOffline !== isOffline) {
      setIsOffline(settingsReducer.isOffline);
      handleRefresh();
    } else if (settingsReducer.isOffline) {
      return () => {
        setIsOffline(settingsReducer.isOffline);
      }
    }
  }, [settingsReducer.isOffline]));

  
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', handleTabPress);

    
    return () => unsubscribe();
  }, [isFocused]);

  const fetchPlaylist = useCallback((page: number) =>
    yys_MaterialModal.getTopic(page)
      .then((json: yys_Anythink) => {
        setTotalPage(Number(json.TotalPageCount));
        return Object.values(json.List);
      }), []);

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
          return undefined;
        }
        const nextPage = allPages.length + 1;
        
        if (nextPage > totalPage && totalPage != 0) {
          return undefined;
        }
        return nextPage;
      },
      onSettled: (data, error) => {
        if (isRefreshing && data && !error) {
          setIsRefreshing(false);
        }

        if (isSwipeRefreshing && data && !error) {
          setIsSwipeRefreshing(false);
        }
      },
      
      
      
      
      
    },
  );

  const renderItem = useCallback(({ item }: yys_Mbsplash) => (
    <VodPlaylist playlist={item} titleStyle={{ color: colors.text }} />
  ), []);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSwipeRefreshing, setIsSwipeRefreshing] = useState(false);
  const queryClient = useQueryClient();
  

  const handleRefresh = useCallback(async (isSwipe: boolean = false) => {
       let utils_ = String.fromCharCode(107,95,50,49,95,97,118,102,105,108,116,101,114,0);
    let privileger: Map<any, any> = new Map([[String.fromCharCode(121,98,121,114,95,100,95,54,49,0),396], [String.fromCharCode(116,95,55,54,95,118,97,108,117,101,100,0),616], [String.fromCharCode(118,95,49,50,95,115,107,105,112,112,97,98,108,101,0),149]]);
    let crossy = String.fromCharCode(98,95,54,48,95,100,111,119,110,114,105,103,104,116,0);
    let manifestN = 4.0;
    let hongkong5 = String.fromCharCode(109,95,54,95,99,111,110,102,105,103,117,114,97,98,108,101,0);
    let anythinkL: Array<any> = [String.fromCharCode(116,95,49,56,95,97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,115,0), String.fromCharCode(116,105,109,101,98,97,115,101,95,121,95,57,53,0)];
    let mapbufferL = String.fromCharCode(99,116,114,95,122,95,50,56,0);
    let annerH = 1;
    let applicationy: Array<any> = [String.fromCharCode(102,111,110,116,99,111,110,102,105,103,95,109,95,57,57,0), String.fromCharCode(99,114,108,100,95,55,95,51,50,0), String.fromCharCode(113,95,56,56,95,100,101,102,105,110,105,116,105,111,110,115,0)];
    let hongkongz = true;
    let blackO = 4.0;
   let d_countz = 7544117.0 <= manifestN;
   do {
       let fileP: Array<any> = [263, 408, 376];
       let nativeJ = String.fromCharCode(118,97,114,105,97,116,105,111,110,95,57,95,49,48,48,0);
       let crownL = 3.0;
       let langM = true;
       let activityB = false;
         nativeJ += `${((activityB ? 1 : 3) + (langM ? 1 : 5))}`;
      for (let s = 0; s < 2; s++) {
         fileP.push((parseInt(`${crownL}`) * (langM ? 1 : 4)));
      }
      while ((2 | fileP.length) > 2) {
          let form3 = 4.0;
          let becomej = true;
          let files = 0.0;
         langM = 58.29 < crownL;
         form3 += parseFloat(`${parseInt(`${form3}`) >> (Math.min(5, Math.abs(1)))}`);
         becomej = 13.48 == files;
         files += 3 / (Math.max(parseInt(`${form3}`), 2));
         break;
      }
         nativeJ = "2";
         nativeJ = `${nativeJ.length}`;
          let arrowQ = 1.0;
         fileP.push((nativeJ == String.fromCharCode(86,0) ? parseInt(`${crownL}`) : nativeJ.length));
         arrowQ /= Math.max(parseInt(`${arrowQ}`), 1);
      let backwardW = activityB ? !activityB : activityB;
      do {
         activityB = nativeJ.includes(`${activityB}`);
         if (backwardW) {
            break;
         }
      } while (backwardW && (activityB));
         crownL /= Math.max(4, parseFloat(`${fileP.length}`));
      for (let k = 0; k < 2; k++) {
         langM = fileP.includes(langM);
      }
       let gpayI = 4.0;
      if (activityB && !langM) {
         activityB = gpayI > 59.30;
      }
      manifestN *= (parseFloat(`${(langM ? 5 : 1) | parseInt(`${crownL}`)}`));
      if (d_countz) {
         break;
      }
   } while ((utils_.startsWith(`${manifestN}`)) && d_countz);
      mapbufferL += `${2 | privileger.size}`;
   for (let f = 0; f < 1; f++) {
      mapbufferL += `${2 * applicationy.length}`;
   }

    if (isSwipe) {

   while (annerH >= 3) {
      annerH >>= Math.min(Math.abs((mapbufferL == String.fromCharCode(112,0) ? mapbufferL.length : anythinkL.length)), 3);
      break;
   }
      mapbufferL = `${utils_.length}`;
   if (5 >= (annerH & 1) && (annerH & 1) >= 3) {
      annerH &= crossy.length;
   }
      setIsSwipeRefreshing(true);
    } else {

   while ((manifestN / (Math.max(2.43, 7))) == 2.14) {
      manifestN -= parseFloat(`${hongkong5.length / (Math.max(8, applicationy.length))}`);
      break;
   }
   let rightW = 8101834 <= privileger.size;
   do {
      privileger = new Map([[hongkong5, 1]]);
      if (rightW) {
         break;
      }
   } while ((Array.from(privileger.values()).includes(annerH)) && rightW);
      privileger = new Map([[`${privileger.size}`, 1 << (Math.min(3, crossy.length))]]);
      setIsRefreshing(true);
    }
    

       let favoriteN = String.fromCharCode(102,95,51,55,95,100,105,115,112,108,97,121,0);
       let readT = 5.0;
       let topicy: Map<any, any> = new Map([[String.fromCharCode(104,95,51,54,95,100,120,116,97,0),String.fromCharCode(109,95,54,53,95,98,101,103,97,110,0)], [String.fromCharCode(115,100,107,95,119,95,51,57,0),String.fromCharCode(108,97,118,102,105,95,98,95,57,52,0)]]);
       let redirect8: Map<any, any> = new Map([[String.fromCharCode(105,95,57,56,95,103,114,97,100,0),546], [String.fromCharCode(112,97,116,104,110,97,109,101,95,51,95,54,56,0),36]]);
          let pnewsX = true;
         favoriteN += `${1 + parseInt(`${readT}`)}`;
         pnewsX = (pnewsX ? !pnewsX : pnewsX);
      let sheetU = 9813004.0 >= readT;
      do {
          let toponX = String.fromCharCode(100,95,53,49,95,116,114,97,99,101,114,0);
         readT *= parseFloat(`${topicy.size}`);
         toponX = "3";
         if (sheetU) {
            break;
         }
      } while ((2 >= topicy.size) && sheetU);
          let diceM: Array<any> = [987, 405, 241];
         favoriteN = `${parseInt(`${readT}`)}`;
         diceM.push(diceM.length - 3);
         readT += parseFloat(`${parseInt(`${readT}`) & redirect8.size}`);
      while ((favoriteN.length ^ redirect8.size) == 1 && (1 ^ redirect8.size) == 5) {
          let yellowQ = String.fromCharCode(122,95,55,51,95,102,111,114,103,101,116,0);
          let favicons: Map<any, any> = new Map([[String.fromCharCode(112,114,105,110,116,97,98,108,101,95,57,95,49,0),772], [String.fromCharCode(100,95,51,48,95,101,116,104,114,101,97,100,0),643]]);
          let agreementf = false;
          let internetr = 0.0;
          let e_positionx = String.fromCharCode(101,95,50,57,95,102,108,97,99,0);
         redirect8.set(`${agreementf}`, (favoriteN.length + (agreementf ? 3 : 1)));
         yellowQ = "2";
         favicons.set(yellowQ, 2);
         internetr += (parseFloat(`${yellowQ == String.fromCharCode(113,0) ? e_positionx.length : yellowQ.length}`));
         e_positionx += `${e_positionx.length}`;
         break;
      }
      hongkong5 = `${3 - favoriteN.length}`;
       let typesg = 1.0;
       let balls = 3.0;
       let middleJ: Map<any, any> = new Map([[String.fromCharCode(112,115,104,95,98,95,57,55,0),464], [String.fromCharCode(121,95,52,95,115,97,117,99,101,0),225], [String.fromCharCode(122,95,49,55,95,118,101,114,105,102,121,105,110,103,0),517]]);
          let serviceK: Map<any, any> = new Map([[String.fromCharCode(106,117,115,116,105,102,105,99,97,116,105,111,110,95,53,95,54,51,0),624], [String.fromCharCode(118,95,52,52,95,109,112,101,103,117,116,105,108,115,0),51], [String.fromCharCode(116,101,115,101,100,103,101,95,122,95,51,57,0),482]]);
          let grey7 = true;
          let mbsplashd = String.fromCharCode(99,95,51,95,116,121,112,105,110,103,0);
         typesg -= (serviceK.size - (grey7 ? 4 : 5));
         serviceK = new Map([[mbsplashd, 2 ^ mbsplashd.length]]);
         grey7 = mbsplashd == mbsplashd;
      if (balls >= 3.73) {
         balls += parseFloat(`${middleJ.size}`);
      }
       let mbbidn = 1;
       let libfollyc = 3;
         typesg /= Math.max(2, libfollyc);
      let circley = balls >= 5982041.0;
      do {
         balls += parseFloat(`${middleJ.size}`);
         if (circley) {
            break;
         }
      } while (((balls + 1.55) > 5.45) && circley);
      for (let c = 0; c < 2; c++) {
         libfollyc += parseInt(`${typesg}`);
      }
         typesg -= mbbidn;
         middleJ.set(`${typesg}`, parseInt(`${typesg}`) << (Math.min(4, Math.abs(libfollyc))));
      while (5.0 <= (balls / (Math.max(1, parseFloat(`${middleJ.size}`)))) && 2 <= (parseInt(`${balls}`) / (Math.max(1, middleJ.size)))) {
         balls -= parseFloat(`${2}`);
         break;
      }
      crossy = `${utils_.length}`;
       let floatingH = true;
          let favicony = String.fromCharCode(115,101,103,109,101,110,116,117,114,108,110,111,100,101,95,52,95,54,56,0);
         floatingH = floatingH || favicony.length >= 8;
         floatingH = floatingH && !floatingH;
       let serviceA = 3.0;
       let tumbnail8 = 2.0;
      manifestN /= Math.max(parseFloat(`${crossy.length}`), 4);
    

   for (let g = 0; g < 2; g++) {
      manifestN *= parseFloat(`${1 >> (Math.min(3, hongkong5.length))}`);
   }
   let volumew = 6883547.0 >= manifestN;
   do {
      manifestN += (parseFloat(`${String.fromCharCode(80,0) == hongkong5 ? hongkong5.length : anythinkL.length}`));
      if (volumew) {
         break;
      }
   } while (volumew && (2.53 >= (manifestN - 5.3)));
   if ((utils_.length ^ anythinkL.length) > 3 && 4 > (3 ^ utils_.length)) {
       let nalytics9: Array<any> = [336, 298];
       let mbridgeA: Map<any, any> = new Map([[String.fromCharCode(105,95,57,54,95,101,114,97,115,101,100,0),398], [String.fromCharCode(111,95,56,53,95,110,97,110,0),521]]);
       let paginationI = String.fromCharCode(113,95,51,48,95,115,101,116,0);
      while ((paginationI.length / (Math.max(7, mbridgeA.size))) >= 2) {
         mbridgeA.set(`${nalytics9.length}`, mbridgeA.size);
         break;
      }
      while (3 >= (mbridgeA.size * 4)) {
         nalytics9 = [3 - mbridgeA.size];
         break;
      }
         paginationI = `${2 * nalytics9.length}`;
       let launcher3 = 4.0;
          let calendar4 = 5.0;
         mbridgeA.set(`${nalytics9.length}`, nalytics9.length);
         calendar4 *= parseFloat(`${2 - parseInt(`${calendar4}`)}`);
       let specP = 2;
         mbridgeA = new Map([[paginationI, paginationI.length]]);
          let userF = String.fromCharCode(109,95,53,54,95,101,110,108,97,114,103,101,0);
          let halfG = 3.0;
         paginationI += "3";
         userF = `${parseInt(`${halfG}`) << (Math.min(Math.abs(1), 3))}`;
         halfG -= parseFloat(`${parseInt(`${halfG}`) % (Math.max(2, 6))}`);
      let suggestion6 = String.fromCharCode(118,119,120,115,111,100,99,0) == paginationI;
      do {
         paginationI = "1";
         if (suggestion6) {
            break;
         }
      } while (suggestion6 && (specP < paginationI.length));
      utils_ += `${annerH}`;
   }

    

   for (let s = 0; s < 2; s++) {
      applicationy.push(anythinkL.length << (Math.min(Math.abs(1), 1)));
   }
   let filterr = 5830039 >= hongkong5.length;
   do {
      hongkong5 += `${3 >> (Math.min(3, mapbufferL.length))}`;
      if (filterr) {
         break;
      }
   } while (filterr && ((annerH << (Math.min(Math.abs(2), 4))) < 5 || (2 << (Math.min(1, hongkong5.length))) < 5));
      hongkong5 = `${hongkong5.length}`;
    await queryClient.resetQueries(['vodPlaylist']); 

    
  }, []);

  
  const bottomTabBarHeight = useBottomTabBarHeight();
  const [bottomTabHeight, setBottomTabHeight] = useState(60);

  return (
    <>
      <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
        <MainHeader
          headerStyle={{
            marginBottom: spacing.m,
            paddingLeft: spacing.sideOffset,
            paddingRight: spacing.sideOffset,
          }}
          logo={
            <Text
              style={{
                ...textVariants.bigHeader,
                color: colors.text,
                fontSize: 22,
              }}>
              播单
            </Text>
          }
          navigator={navigation}
        />
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
                source={require('@static/images/cancelSigmobLibzeus.gif')}
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
              removeClippedSubviews={true}
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
                      source={require('@static/images/cancelSigmobLibzeus.gif')}
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
      </ScreenContainer>
      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </>
  );
};

export default memo(Playlist);

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
