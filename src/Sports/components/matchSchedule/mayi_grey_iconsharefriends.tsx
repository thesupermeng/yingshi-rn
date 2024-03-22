import React, { memo, useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './mayi_iconarrowrightwhite';
import { TouchableOpacity } from 'react-native';
import { formatMatchDate } from '../../utility/utils';
import { mayi_Libapminsightb } from '@redux/mayi_live_tumbnail';
import { mayi_Default } from '../../types/mayi_homeinactive';
import { Url } from '../../middleware/mayi_countdown_videovar';
import { useInfiniteQuery } from '@tanstack/react-query';
import mayi_Analytics from '../../middleware/mayi_plash_basketballtrophy';
import MatchSchedule from './mayi_refresh';
import FastImage from '../../../components/common/mayi_slider';
import { TOPON_BANNER_HEIGHT } from '@utility/mayi_middleware_apps';

interface mayi_GoogleViews {
  matchTypeID: number;
  status?: number;
  setShowBecomeVIPOverlay: any;
  bgDark?:boolean
}

type mayi_ContainerBackwhite = {
  date: string | undefined;
  data: mayi_Default | undefined;
};

type mayi_reminder_iconqq = {
  headers: number[];
  data: mayi_ContainerBackwhite[];
};

const MatchScheduleList = ({
  matchTypeID,
  status = -1,
  setShowBecomeVIPOverlay,
  bgDark = false
}: mayi_GoogleViews) => {
  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const latestListDate = useRef<Date | undefined>();
  let flatlistRef = useRef();

  const [isFetchNext, setFetchNext] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const [matches, setMatches] = useState<mayi_reminder_iconqq>({
    headers: [],
    data: [],
  });

  const getUrl = () => {
       let dplusP = 5.0;
    let short_91G: Map<any, any> = new Map([[String.fromCharCode(116,101,109,112,115,95,97,95,49,55,0),323], [String.fromCharCode(119,104,101,110,95,103,95,57,50,0),227]]);
    let vertical9 = false;
    let invitei = 4;
    let plash5 = String.fromCharCode(107,98,105,116,95,116,95,55,57,0);
    let dangerJ = 2.0;
    let pressurew: Map<any, any> = new Map([[String.fromCharCode(113,95,53,95,102,105,110,0),667], [String.fromCharCode(114,95,53,49,95,102,111,114,103,101,116,0),592], [String.fromCharCode(102,95,55,57,95,99,97,99,104,101,100,0),893]]);
    let libsentryu = 0.0;
    let libavdeviceL: Array<any> = [String.fromCharCode(99,111,102,97,99,116,111,114,95,116,95,56,48,0), String.fromCharCode(109,118,99,111,109,112,111,110,101,110,116,95,53,95,51,55,0)];
    let zoomE: Array<any> = [775, 757];
    let iconsubssuccess0 = true;
   if (!Array.from(pressurew.keys()).includes(`${libavdeviceL.length}`)) {
      pressurew.set(`${libsentryu}`, parseInt(`${libsentryu}`));
   }
   for (let t = 0; t < 2; t++) {
      plash5 = "2";
   }
   while ((dangerJ - 5.19) <= 2.60 && 5.19 <= (dangerJ - libavdeviceL.length)) {
      libavdeviceL = [invitei - libavdeviceL.length];
      break;
   }

    let url = '';

   let detailN = 6537162 <= short_91G.size;
   do {
       let upgrade2: Map<any, any> = new Map([[String.fromCharCode(115,108,105,100,101,114,95,99,95,56,57,0),846], [String.fromCharCode(103,95,51,53,95,118,97,114,115,0),130], [String.fromCharCode(115,111,99,107,95,56,95,52,49,0),268]]);
          let fcopy_uj = 5;
          let entryQ = 1.0;
          let libnmsn = String.fromCharCode(109,98,112,114,101,100,95,100,95,49,0);
         upgrade2.set(`${fcopy_uj}`, 1);
         fcopy_uj ^= parseInt(`${entryQ}`);
         entryQ -= (libnmsn == String.fromCharCode(87,0) ? libnmsn.length : parseInt(`${entryQ}`));
         upgrade2.set(`${upgrade2.size}`, upgrade2.size >> (Math.min(Math.abs(upgrade2.size), 4)));
       let recommendationc = 5.0;
       let libreactperfloggerjnid = 4.0;
      short_91G.set(`${plash5}`, pressurew.size);
      if (detailN) {
         break;
      }
   } while ((!vertical9) && detailN);
   while (3 == (plash5.length | 5) || (invitei | 5) == 3) {
       let data6 = String.fromCharCode(113,95,53,48,95,101,115,100,115,0);
       let r_playerk = 2.0;
       let mbnativeM = String.fromCharCode(117,95,52,56,95,112,108,97,116,102,111,114,109,0);
       let eventr = String.fromCharCode(107,95,57,48,95,117,112,100,97,116,101,0);
          let libjsijniprofilerp = 2.0;
          let acceptedu = String.fromCharCode(109,117,108,116,105,112,97,114,116,95,48,95,50,53,0);
         r_playerk *= 2 ^ parseInt(`${libjsijniprofilerp}`);
         libjsijniprofilerp -= (String.fromCharCode(82,0) == acceptedu ? acceptedu.length : acceptedu.length);
       let basketballawayteamG = 4;
      let const_wW = r_playerk <= 8885003.0;
      do {
         r_playerk /= Math.max(4, 2);
         if (const_wW) {
            break;
         }
      } while ((mbnativeM.includes(`${r_playerk}`)) && const_wW);
         r_playerk *= data6.length;
      for (let a = 0; a < 2; a++) {
         basketballawayteamG += 1;
      }
         eventr = `${3 & basketballawayteamG}`;
         data6 = `${mbnativeM.length << (Math.min(Math.abs(2), 3))}`;
          let telemetryT = String.fromCharCode(116,105,110,121,95,103,95,57,55,0);
          let collection5 = 3;
          let libapminsightbX = 5.0;
         r_playerk /= Math.max(1, basketballawayteamG << (Math.min(telemetryT.length, 4)));
         telemetryT += `${collection5}`;
         collection5 |= collection5 * parseInt(`${libapminsightbX}`);
         libapminsightbX /= Math.max(parseFloat(`${parseInt(`${libapminsightbX}`)}`), 1);
          let green_: Map<any, any> = new Map([[String.fromCharCode(100,95,50,50,95,115,104,114,117,110,107,0),264], [String.fromCharCode(115,104,101,101,114,118,105,100,101,111,100,97,116,97,95,53,95,53,54,0),395]]);
          let libffmpegkit3 = String.fromCharCode(114,95,55,48,95,99,97,108,99,117,108,97,116,101,0);
          let away4 = String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,95,103,95,50,57,0);
         data6 += `${libffmpegkit3.length % (Math.max(1, basketballawayteamG))}`;
         green_.set(`${away4}`, away4.length);
         libffmpegkit3 += `${away4.length | green_.size}`;
          let successA = String.fromCharCode(101,95,50,53,95,99,111,114,114,117,112,116,101,100,0);
          let episodej: Map<any, any> = new Map([[String.fromCharCode(122,95,56,54,95,99,111,110,110,101,99,116,111,114,0),String.fromCharCode(99,97,112,116,117,114,101,95,122,95,54,51,0)], [String.fromCharCode(114,101,97,100,102,114,97,109,101,95,120,95,52,50,0),String.fromCharCode(112,114,111,102,105,108,105,110,103,95,57,95,50,56,0)], [String.fromCharCode(108,95,49,54,95,115,112,111,116,108,105,103,104,116,0),String.fromCharCode(122,95,49,56,95,109,97,110,100,101,108,98,114,111,116,0)]]);
          let ying9 = String.fromCharCode(103,114,101,97,116,101,115,116,95,122,95,52,55,0);
         mbnativeM += `${eventr.length >> (Math.min(Math.abs(3), 1))}`;
         successA += `${episodej.size}`;
         episodej = new Map([[ying9, ying9.length]]);
      if (eventr == String.fromCharCode(88,0)) {
         mbnativeM += `${parseInt(`${r_playerk}`)}`;
      }
      let libfbU = String.fromCharCode(49,103,114,54,99,119,116,99,55,56,0) == eventr;
      do {
         eventr = `${data6.length}`;
         if (libfbU) {
            break;
         }
      } while (libfbU && (mbnativeM != String.fromCharCode(65,0) || eventr != String.fromCharCode(53,0)));
      invitei &= mbnativeM.length;
      break;
   }
   while ((dangerJ / (Math.max(5.33, 4))) > 4.64 && (invitei / (Math.max(parseInt(`${dangerJ}`), 2))) > 5) {
       let unreada: Array<any> = [74, 873];
       let collection6 = String.fromCharCode(116,97,107,101,111,117,116,95,108,95,54,54,0);
       let hookJ: Array<any> = [927, 43, 477];
       let catagoryv = String.fromCharCode(115,95,54,55,95,108,105,98,103,115,109,0);
      let flyer_ = 8560147 <= hookJ.length;
      do {
         hookJ.push(hookJ.length * 1);
         if (flyer_) {
            break;
         }
      } while ((hookJ.length == catagoryv.length) && flyer_);
         catagoryv = `${unreada.length << (Math.min(Math.abs(3), 4))}`;
         catagoryv = `${unreada.length & collection6.length}`;
      let customI = hookJ.length >= 6251932;
      do {
         hookJ.push((String.fromCharCode(97,0) == catagoryv ? hookJ.length : catagoryv.length));
         if (customI) {
            break;
         }
      } while (((hookJ.length ^ 5) >= 1) && customI);
         collection6 = "1";
       let debugk = 0.0;
       let kickm = 3.0;
      for (let z = 0; z < 2; z++) {
          let roota = 0.0;
          let iconarrowrightorange8: Array<any> = [147, 305];
         debugk /= Math.max(1, parseFloat(`${parseInt(`${kickm}`)}`));
         roota *= parseFloat(`${parseInt(`${roota}`) | 2}`);
         iconarrowrightorange8.push(iconarrowrightorange8.length ^ 3);
      }
      while (hookJ.length > catagoryv.length) {
         hookJ = [parseInt(`${kickm}`) ^ 3];
         break;
      }
      if (4.27 >= (kickm - debugk)) {
         debugk *= parseFloat(`${hookJ.length}`);
      }
       let nativemodulez = false;
       let injuryK = String.fromCharCode(104,95,54,51,95,115,117,98,109,105,116,0);
       let modelsN = String.fromCharCode(115,98,99,100,101,99,95,116,95,55,48,0);
       let streamingM: Array<any> = [869, 848];
       let huaweit: Array<any> = [665, 297];
      dangerJ -= collection6.length % (Math.max(2, 4));
      break;
   }
    if (matchTypeID !== -1) {
      url += `?sports_type=${matchTypeID}`;
    }
    if (url === '') {
      url = '?';
    }
    if (status !== -1) {
      url += `&status=${status}`;
    } else {
      url += `&is_live=${true}`;
    }
    

   let videobufferloadinga = vertical9 ? !vertical9 : vertical9;
   do {
       let attributedstring3 = false;
       let iconarrowright2 = String.fromCharCode(99,95,49,56,95,108,97,98,101,108,115,0);
       let faviconv = 2.0;
       let weatheru = true;
         iconarrowright2 = `${2 + parseInt(`${faviconv}`)}`;
      if (!weatheru) {
         iconarrowright2 = "2";
      }
         weatheru = faviconv > 13.52;
      let launcherQ = 8591368.0 <= faviconv;
      do {
          let heartX: Map<any, any> = new Map([[String.fromCharCode(121,95,50,56,95,102,114,97,110,100,0),437], [String.fromCharCode(107,110,111,98,95,97,95,54,49,0),580]]);
          let arrowr = String.fromCharCode(109,115,103,115,95,106,95,56,56,0);
         faviconv += arrowr.length + heartX.size;
         if (launcherQ) {
            break;
         }
      } while (launcherQ && ((1.92 * faviconv) < 4.45));
       let pauseE: Map<any, any> = new Map([[String.fromCharCode(115,111,108,118,101,95,56,95,52,55,0),824], [String.fromCharCode(116,104,114,111,119,95,105,95,56,49,0),646], [String.fromCharCode(118,95,53,52,95,100,117,112,101,100,0),880]]);
       let animationsU: Map<any, any> = new Map([[String.fromCharCode(114,95,53,48,95,108,108,110,119,0),672], [String.fromCharCode(105,95,55,53,95,98,101,108,111,119,0),443], [String.fromCharCode(118,95,51,48,95,97,117,116,104,114,111,114,105,122,97,116,105,111,110,0),186]]);
          let profileq = 5;
          let mbnativeadvancedS = String.fromCharCode(117,95,52,50,95,112,111,119,101,114,101,100,0);
          let filledj = 5.0;
         faviconv += 2 / (Math.max(6, mbnativeadvancedS.length));
         profileq *= parseInt(`${filledj}`) >> (Math.min(2, Math.abs(profileq)));
         mbnativeadvancedS += `${parseInt(`${filledj}`)}`;
         iconarrowright2 += `${animationsU.size}`;
         attributedstring3 = !weatheru;
       let china5 = String.fromCharCode(105,115,115,117,105,110,103,95,103,95,55,51,0);
       let applem = String.fromCharCode(115,101,99,112,107,95,109,95,49,57,0);
         applem += `${animationsU.size}`;
          let routera: Map<any, any> = new Map([[String.fromCharCode(120,95,49,50,95,102,97,107,101,0),975], [String.fromCharCode(110,111,114,109,97,108,105,122,97,116,105,111,110,95,107,95,57,57,0),14]]);
          let gmail8 = true;
         faviconv += 3;
         routera = new Map([[`${routera.size}`, ((gmail8 ? 5 : 4) % (Math.max(routera.size, 7)))]]);
         gmail8 = !gmail8;
      for (let l = 0; l < 1; l++) {
         animationsU.set(china5, parseInt(`${faviconv}`));
      }
      vertical9 = !vertical9;
      if (videobufferloadinga) {
         break;
      }
   } while (((pressurew.size / (Math.max(4, 1))) > 3 || !vertical9) && videobufferloadinga);
   for (let q = 0; q < 3; q++) {
      short_91G = new Map([[`${zoomE.length}`, invitei]]);
   }
   while ((2 << (Math.min(2, plash5.length))) > 5 || (2 * plash5.length) > 3) {
      dangerJ -= 3;
      break;
   }
    

   while (zoomE.length == 5) {
      zoomE = [libavdeviceL.length];
      break;
   }
      short_91G = new Map([[`${libavdeviceL.length}`, 1 | libavdeviceL.length]]);
      short_91G = new Map([[`${libavdeviceL.length}`, libavdeviceL.length % (Math.max(1, 7))]]);
    

   while (4 <= (short_91G.size * parseInt(`${dplusP}`))) {
      short_91G.set(`${vertical9}`, ((vertical9 ? 5 : 2) ^ libavdeviceL.length));
      break;
   }
   while ((3.98 * dangerJ) > 1.50 || (parseInt(`${dangerJ}`) * short_91G.size) > 4) {
      dangerJ -= 2 + parseInt(`${dangerJ}`);
      break;
   }
   let acceptedG = pressurew.size <= 8861193;
   do {
      pressurew.set(`${invitei}`, invitei / (Math.max(plash5.length, 4)));
      if (acceptedG) {
         break;
      }
   } while ((!Array.from(pressurew.keys()).includes(`${libsentryu}`)) && acceptedG);
    

   if (4 < (1 * libavdeviceL.length) || (libavdeviceL.length * invitei) < 1) {
      libavdeviceL.push(pressurew.size + 1);
   }
      pressurew.set(`${libavdeviceL.length}`, libavdeviceL.length % 1);
      zoomE.push(((vertical9 ? 2 : 3) ^ short_91G.size));
    

   let mapbuffer0 = 6840547.0 >= dangerJ;
   do {
      dangerJ *= plash5.length;
      if (mapbuffer0) {
         break;
      }
   } while (mapbuffer0 && (1 >= (2 + libavdeviceL.length)));
   if (libavdeviceL.includes(libsentryu)) {
       let serviceI = false;
          let backm = String.fromCharCode(100,105,114,101,99,116,120,95,102,95,51,51,0);
          let cancelL = 5.0;
         serviceI = !serviceI;
         backm = `${2 - backm.length}`;
         cancelL -= parseFloat(`${parseInt(`${cancelL}`)}`);
      for (let t = 0; t < 2; t++) {
         serviceI = (serviceI ? serviceI : !serviceI);
      }
      for (let e = 0; e < 1; e++) {
         serviceI = (!serviceI ? serviceI : serviceI);
      }
      libavdeviceL.push(3);
   }
       let airbnbstare = String.fromCharCode(120,95,54,57,95,117,110,122,116,101,108,108,0);
       let plusX: Array<any> = [325, 785, 74];
      for (let s = 0; s < 2; s++) {
         plusX.push((String.fromCharCode(84,0) == airbnbstare ? airbnbstare.length : plusX.length));
      }
          let smallorangeman1 = String.fromCharCode(118,95,54,95,115,105,103,102,105,103,0);
         airbnbstare += `${(airbnbstare == String.fromCharCode(86,0) ? airbnbstare.length : plusX.length)}`;
         smallorangeman1 = `${smallorangeman1.length}`;
      if (3 == (4 & airbnbstare.length) && 1 == (airbnbstare.length & 4)) {
         airbnbstare += "3";
      }
      let transfera = 5603604 <= plusX.length;
      do {
         plusX = [2];
         if (transfera) {
            break;
         }
      } while (transfera && ((airbnbstare.length - 4) >= 5 || 5 >= (4 - plusX.length)));
          let yellowI = 3.0;
          let sigmobb = String.fromCharCode(99,97,115,101,100,95,98,95,53,50,0);
         airbnbstare += `${plusX.length / 2}`;
         yellowI -= parseFloat(`${3 ^ parseInt(`${yellowI}`)}`);
         sigmobb += `${1 << (Math.min(2, sigmobb.length))}`;
      while (5 <= (plusX.length >> (Math.min(Math.abs(2), 3)))) {
         plusX.push(plusX.length);
         break;
      }
      libsentryu -= (parseFloat(`${String.fromCharCode(49,0) == plash5 ? plash5.length : parseInt(`${dangerJ}`)}`));
    

      dangerJ *= parseInt(`${libsentryu}`);
      vertical9 = zoomE.length == 91 || vertical9;
       let anythinkX = 5.0;
       let libfabricjnii = 5.0;
       let privilegec = 1.0;
       let skipQ: Array<any> = [983, 336, 327];
      if ((libfabricjnii - 4.17) < 3.26 || 3 < (parseInt(`${libfabricjnii}`) - skipQ.length)) {
         skipQ.push(skipQ.length << (Math.min(2, Math.abs(parseInt(`${privilegec}`)))));
      }
         privilegec *= parseInt(`${anythinkX}`) >> (Math.min(2, Math.abs(parseInt(`${libfabricjnii}`))));
          let heartJ = String.fromCharCode(105,115,122,101,114,111,95,120,95,52,57,0);
         libfabricjnii += parseFloat(`${skipQ.length}`);
         heartJ += `${1 * heartJ.length}`;
       let episodes4: Array<any> = [164, 844, 823];
      for (let s = 0; s < 2; s++) {
         anythinkX += parseFloat(`${parseInt(`${anythinkX}`) >> (Math.min(skipQ.length, 3))}`);
      }
         libfabricjnii += parseFloat(`${parseInt(`${privilegec}`)}`);
          let pageB = 1;
          let downarrowX: Map<any, any> = new Map([[String.fromCharCode(117,115,116,111,109,95,109,95,54,56,0),631], [String.fromCharCode(97,118,99,111,100,101,99,114,101,115,95,52,95,55,52,0),183]]);
         skipQ.push(1);
         pageB += pageB ^ 1;
         downarrowX = new Map([[`${downarrowX.size}`, downarrowX.size]]);
      let graphicsE = privilegec >= 6359664.0;
      do {
         privilegec -= parseInt(`${anythinkX}`) << (Math.min(skipQ.length, 5));
         if (graphicsE) {
            break;
         }
      } while (graphicsE && (4.84 < (4.13 - privilegec) && (privilegec - 4.13) < 3.54));
      vertical9 = 87 <= invitei;
    

      dangerJ *= short_91G.size % (Math.max(3, 6));
   for (let d = 0; d < 1; d++) {
      plash5 += `${parseInt(`${libsentryu}`)}`;
   }
       let videocommonp = String.fromCharCode(115,97,105,122,95,49,95,52,50,0);
       let videocommonE: Array<any> = [String.fromCharCode(115,95,52,95,100,105,115,97,98,108,105,110,103,0), String.fromCharCode(114,95,52,48,95,114,101,99,111,110,0)];
       let owngoals: Array<any> = [637, 633];
      if (!videocommonp.endsWith(`${videocommonE.length}`)) {
         videocommonp += "3";
      }
         videocommonp = `${3 ^ videocommonp.length}`;
          let baiduZ: Array<any> = [24, 815, 60];
         videocommonp += `${baiduZ.length + 3}`;
          let videoz = String.fromCharCode(103,95,54,51,95,100,105,114,97,99,116,97,98,0);
         videocommonE = [videoz.length ^ 2];
      while ((4 << (Math.min(1, owngoals.length))) > 5 || (owngoals.length << (Math.min(Math.abs(4), 4))) > 5) {
         videocommonE = [videocommonp.length];
         break;
      }
       let context5: Array<any> = [310, 130, 893];
      while (videocommonE.length < 3) {
         owngoals.push(videocommonp.length | 2);
         break;
      }
         videocommonE.push(1 * videocommonp.length);
      while (3 > (owngoals.length >> (Math.min(Math.abs(3), 4)))) {
         context5.push(3 ^ owngoals.length);
         break;
      }
      plash5 = "3";
    return Url.matches11 + url;
  };

  const url = getUrl(); 

  const fetchData = useCallback(async () => {
       let cedbadcebfbfbfbcfecbck = true;
    let footballtrophyO = false;
    let circle1: Array<any> = [String.fromCharCode(113,112,102,105,108,101,95,98,95,56,55,0), String.fromCharCode(117,110,115,101,101,110,95,121,95,49,0), String.fromCharCode(115,97,110,105,116,121,95,114,95,57,57,0)];
    let default_p5 = true;
    let usera: Array<any> = [327, 637];
    let window_y0 = 4;
    let phonesharet = 0;
    let philippinesp = String.fromCharCode(109,95,49,49,95,100,98,105,115,0);
    let streamingl = 3;
    let dplusG = String.fromCharCode(119,95,54,49,95,100,101,115,116,114,111,121,0);
    let subsM = 4.0;
    let filledF = String.fromCharCode(102,95,49,95,102,101,101,0);
    let searchbarV: Map<any, any> = new Map([[String.fromCharCode(119,95,57,53,95,97,98,111,114,116,0),false ], [String.fromCharCode(118,95,50,57,95,97,100,118,97,110,99,101,0),true ]]);
    let utilsx: Map<any, any> = new Map([[String.fromCharCode(105,110,100,101,110,116,101,100,95,115,95,53,0),true ], [String.fromCharCode(99,108,101,97,114,98,105,116,95,55,95,55,57,0),true ]]);
    let predictionbuttonX = String.fromCharCode(114,101,99,111,103,110,105,122,101,114,115,95,50,95,57,57,0);
    let imagemanagerh = String.fromCharCode(115,116,97,116,105,99,95,97,95,57,54,0);
    let controlg = 2;
    let suggestionp = String.fromCharCode(110,100,111,116,115,95,121,95,57,55,0);
   for (let o = 0; o < 2; o++) {
      philippinesp += `${parseInt(`${subsM}`) & usera.length}`;
   }
       let scorepopsound0 = 4.0;
       let smallorangemanN = String.fromCharCode(104,119,99,97,112,95,97,95,55,53,0);
       let iconusery = String.fromCharCode(107,95,51,51,95,98,105,116,114,101,97,100,101,114,0);
         iconusery = `${(String.fromCharCode(51,0) == iconusery ? iconusery.length : smallorangemanN.length)}`;
      for (let v = 0; v < 3; v++) {
          let disconnected1 = 2.0;
          let iconsharefriendsr = false;
          let profileactiveL: Array<any> = [925, 881];
          let yingK = 2.0;
         smallorangemanN += `${iconusery.length}`;
         disconnected1 -= 2 + profileactiveL.length;
         iconsharefriendsr = yingK <= 24.55 || iconsharefriendsr;
         profileactiveL.push(profileactiveL.length);
         yingK -= ((iconsharefriendsr ? 4 : 1) / (Math.max(profileactiveL.length, 9)));
      }
      let anytime6 = smallorangemanN.length <= 7301481;
      do {
         smallorangemanN = "2";
         if (anytime6) {
            break;
         }
      } while ((!iconusery.startsWith(smallorangemanN)) && anytime6);
         smallorangemanN = `${iconusery.length}`;
          let ajaxA = 5.0;
          let audienceQ = String.fromCharCode(115,95,50,48,95,112,114,111,112,101,114,0);
         scorepopsound0 *= (iconusery == String.fromCharCode(106,0) ? iconusery.length : parseInt(`${ajaxA}`));
         ajaxA /= Math.max(2, audienceQ.length * audienceQ.length);
         smallorangemanN += `${parseInt(`${scorepopsound0}`) + smallorangemanN.length}`;
      while (smallorangemanN.length < parseInt(`${scorepopsound0}`)) {
          let nativeex5 = String.fromCharCode(104,95,55,50,95,99,111,109,98,105,110,101,115,0);
          let m_managerm = String.fromCharCode(102,95,52,55,95,105,100,99,116,120,108,108,109,0);
          let crownv = 5;
         scorepopsound0 += 1;
         nativeex5 += "2";
         m_managerm = `${3 * m_managerm.length}`;
         crownv >>= Math.min(4, Math.abs(crownv));
         break;
      }
      for (let r = 0; r < 3; r++) {
         iconusery = `${parseInt(`${scorepopsound0}`)}`;
      }
         smallorangemanN += `${iconusery.length}`;
      cedbadcebfbfbfbcfecbck = scorepopsound0 > 15.40;

    const data = (await mayi_Analytics.call(url, {}, 'GET')).data

   while (window_y0 < streamingl) {
      streamingl |= philippinesp.length;
      break;
   }
      phonesharet >>= Math.min(5, Math.abs(filledF.length - window_y0));
    

      usera = [2 | window_y0];
       let delegate_jJ = String.fromCharCode(112,97,114,97,109,101,116,114,105,99,95,122,95,56,51,0);
       let orangedownarrowi = true;
       let telemetryX: Map<any, any> = new Map([[String.fromCharCode(111,112,116,105,109,105,115,109,95,117,95,49,55,0),97], [String.fromCharCode(111,110,101,111,102,115,95,55,95,53,57,0),522], [String.fromCharCode(112,97,121,109,97,115,116,101,114,95,56,95,49,49,0),28]]);
      for (let x = 0; x < 1; x++) {
         orangedownarrowi = delegate_jJ.startsWith(`${orangedownarrowi}`);
      }
         delegate_jJ += `${(1 >> (Math.min(5, Math.abs((orangedownarrowi ? 3 : 5)))))}`;
         delegate_jJ = "3";
      let matchinactiveh = 6881754 <= telemetryX.size;
      do {
         telemetryX.set(`${orangedownarrowi}`, ((orangedownarrowi ? 5 : 2) + 1));
         if (matchinactiveh) {
            break;
         }
      } while (matchinactiveh && (2 <= (delegate_jJ.length - 3) && 2 <= (3 - delegate_jJ.length)));
      let predictionactiveg = orangedownarrowi ? !orangedownarrowi : orangedownarrowi;
      do {
         orangedownarrowi = telemetryX.size == 98;
         if (predictionactiveg) {
            break;
         }
      } while ((1 >= delegate_jJ.length || !orangedownarrowi) && predictionactiveg);
      let feedback6 = orangedownarrowi ? !orangedownarrowi : orangedownarrowi;
      do {
          let crossy = false;
          let indexV = 0.0;
         orangedownarrowi = indexV <= 34.53;
         crossy = crossy || crossy;
         indexV += 2;
         if (feedback6) {
            break;
         }
      } while ((delegate_jJ.includes(`${orangedownarrowi}`)) && feedback6);
          let shootyesgoalN = String.fromCharCode(121,117,118,95,106,95,56,0);
          let circleQ = 2;
          let canvasi = String.fromCharCode(113,95,50,53,95,102,111,108,108,111,119,115,0);
         orangedownarrowi = shootyesgoalN == delegate_jJ;
         shootyesgoalN = "2";
         circleQ /= Math.max(circleQ + 2, 2);
         canvasi = `${2 + circleQ}`;
       let iconclosewhiten: Map<any, any> = new Map([[String.fromCharCode(121,95,54,49,95,122,108,105,98,0),973], [String.fromCharCode(119,101,98,118,116,116,95,113,95,50,56,0),174], [String.fromCharCode(102,112,115,95,110,95,53,49,0),612]]);
      if (4 <= (telemetryX.size << (Math.min(Math.abs(3), 5))) || 3 <= telemetryX.size) {
          let pageC = 4.0;
          let orangedownarrowp = 4.0;
          let classesf: Array<any> = [String.fromCharCode(114,101,116,114,97,110,109,105,115,115,105,111,110,95,112,95,49,52,0), String.fromCharCode(115,105,100,101,95,112,95,53,54,0), String.fromCharCode(116,114,97,110,115,108,97,116,101,95,119,95,50,50,0)];
          let description_gd = String.fromCharCode(111,112,116,105,111,110,115,95,57,95,49,50,0);
         orangedownarrowi = delegate_jJ.length < 83;
         pageC /= Math.max(parseFloat(`${2}`), 3);
         orangedownarrowp *= parseFloat(`${1}`);
         classesf.push(parseInt(`${pageC}`));
         description_gd = `${classesf.length / 1}`;
      }
      window_y0 *= streamingl;
    if (data !== undefined) {

   for (let h = 0; h < 2; h++) {
       let splashU = 2;
       let runtimeI = 4.0;
       let moons = false;
       let reactnativeultimatelistviewz = String.fromCharCode(100,95,52,51,95,102,116,118,100,111,99,0);
         reactnativeultimatelistviewz += `${parseInt(`${runtimeI}`) >> (Math.min(1, Math.abs(1)))}`;
      if (!moons) {
         reactnativeultimatelistviewz = `${reactnativeultimatelistviewz.length + splashU}`;
      }
         runtimeI += ((moons ? 1 : 2) ^ parseInt(`${runtimeI}`));
      for (let y = 0; y < 1; y++) {
         moons = runtimeI == 55.48;
      }
         splashU /= Math.max(2, reactnativeultimatelistviewz.length);
         reactnativeultimatelistviewz += `${2 * splashU}`;
      if ((runtimeI / (Math.max(2.0, 2))) > 5.99 && (runtimeI / (Math.max(reactnativeultimatelistviewz.length, 3))) > 2.0) {
         reactnativeultimatelistviewz += `${reactnativeultimatelistviewz.length}`;
      }
         moons = !moons;
       let logouserl = String.fromCharCode(120,112,111,114,116,101,100,95,108,95,49,52,0);
       let matchinactiveJ = 1.0;
       let graphP = 5.0;
      while ((5 << (Math.min(2, reactnativeultimatelistviewz.length))) < 5 || (5 ^ reactnativeultimatelistviewz.length) < 5) {
         reactnativeultimatelistviewz = `${reactnativeultimatelistviewz.length / 2}`;
         break;
      }
      let homeinactivex = moons ? !moons : moons;
      do {
         moons = matchinactiveJ < 12.32;
         if (homeinactivex) {
            break;
         }
      } while (homeinactivex && (2 >= (splashU * 5) || 5 >= splashU));
      usera.push(1);
   }
   if (circle1.length >= 3) {
      circle1 = [parseInt(`${subsM}`) % 2];
   }
      const dates = Object.keys(data);

   if (philippinesp.length == 1) {
      filledF += `${circle1.length ^ phonesharet}`;
   }
      usera = [window_y0];
      let lst: mayi_ContainerBackwhite[] = isFetchNext ? matches.data : [];
      let headers = isFetchNext ? matches.headers : [];
      let count = lst.length;

       let dependencies_ = false;
       let profileactiven = false;
       let zoomI = 2.0;
      for (let g = 0; g < 2; g++) {
          let launcheri = 4;
          let championu: Array<any> = [String.fromCharCode(117,95,50,95,103,101,116,101,110,118,0), String.fromCharCode(103,115,116,114,105,110,103,95,51,95,55,53,0), String.fromCharCode(99,95,53,52,95,99,108,101,97,110,115,101,0)];
          let dycreatorQ = false;
         zoomI /= Math.max(((dependencies_ ? 5 : 5) >> (Math.min(3, Math.abs(3)))), 4);
         launcheri >>= Math.min(championu.length, 2);
         championu = [1 & championu.length];
         dycreatorQ = championu.length > 100;
      }
      if ((zoomI / 3.82) <= 4.70 && zoomI <= 3.82) {
         profileactiven = !dependencies_;
      }
         dependencies_ = profileactiven || 38.100 == zoomI;
          let nendQ: Array<any> = [414, 918, 358];
         zoomI += (parseInt(`${zoomI}`) / (Math.max(10, (dependencies_ ? 5 : 4))));
         nendQ.push(nendQ.length ^ nendQ.length);
       let airbnbstare = String.fromCharCode(107,95,52,95,115,107,101,119,0);
       let nendW = String.fromCharCode(97,95,55,52,95,116,114,97,100,105,116,105,111,110,97,108,0);
       let whistleV = String.fromCharCode(114,101,99,114,101,97,116,101,95,48,95,55,54,0);
      if (nendW.length == 3) {
         nendW += `${whistleV.length}`;
      }
      if (dependencies_ && !profileactiven) {
         dependencies_ = airbnbstare.length <= 74;
      }
      if (profileactiven) {
         profileactiven = (airbnbstare.length << (Math.min(whistleV.length, 5))) >= 61;
      }
      usera.push(2 % (Math.max(phonesharet, 7)));
      usera = [2 + parseInt(`${subsM}`)];
      if (latestListDate.current === undefined) {

   let middlet = phonesharet <= 5589912;
   do {
       let hongkongv = 4.0;
       let libjsijniprofilerA = 4.0;
       let selectiond = 0.0;
      for (let o = 0; o < 2; o++) {
          let gift3 = String.fromCharCode(106,95,52,53,0);
         libjsijniprofilerA -= gift3.length + 2;
      }
      let default_qM = 8986895.0 <= selectiond;
      do {
         selectiond += 2 + parseInt(`${selectiond}`);
         if (default_qM) {
            break;
         }
      } while (default_qM && (5.84 > (hongkongv * 4)));
         libjsijniprofilerA *= 1 / (Math.max(parseInt(`${hongkongv}`), 6));
       let iconuserO: Array<any> = [296, 41, 244];
       let abidetectZ: Array<any> = [270, 178];
         abidetectZ.push(1);
      let predictionJ = hongkongv <= 5523657.0;
      do {
          let turnX: Array<any> = [706, 441, 635];
          let goallogow = 5.0;
          let gesturesm = String.fromCharCode(100,95,54,53,95,116,97,112,116,105,99,0);
          let descU = String.fromCharCode(104,97,110,100,108,101,95,120,95,57,56,0);
          let helperI = String.fromCharCode(117,95,51,52,95,114,101,115,116,114,105,99,116,105,111,110,0);
         hongkongv += abidetectZ.length;
         turnX.push(descU.length >> (Math.min(Math.abs(2), 2)));
         goallogow *= (parseFloat(`${gesturesm == String.fromCharCode(79,0) ? parseInt(`${goallogow}`) : gesturesm.length}`));
         descU = `${turnX.length >> (Math.min(Math.abs(3), 5))}`;
         helperI = `${(String.fromCharCode(87,0) == descU ? descU.length : turnX.length)}`;
         if (predictionJ) {
            break;
         }
      } while ((1 == (1 + iconuserO.length) && (iconuserO.length / 1) == 3) && predictionJ);
      while ((abidetectZ.length / 3) == 1) {
         abidetectZ = [parseInt(`${selectiond}`) * 3];
         break;
      }
         selectiond -= abidetectZ.length;
      if (5 <= (iconuserO.length % (Math.max(abidetectZ.length, 3)))) {
          let homeplayerB = String.fromCharCode(99,116,105,111,110,95,112,95,54,57,0);
          let gradlewX: Array<any> = [458, 546, 255];
          let greyarrowupU: Array<any> = [226, 510, 818];
         iconuserO = [iconuserO.length];
         homeplayerB = `${greyarrowupU.length >> (Math.min(4, gradlewX.length))}`;
         gradlewX.push(homeplayerB.length);
         greyarrowupU.push(3 >> (Math.min(1, gradlewX.length)));
      }
      phonesharet |= parseInt(`${libjsijniprofilerA}`) ^ 3;
      if (middlet) {
         break;
      }
   } while (middlet && (4 > phonesharet));
   if (dplusG.length == 1) {
      dplusG = "1";
   }
        latestListDate.current = new Date(dates[dates.length - 1]);
      }
      if (status <= 2) {

       let splash9 = String.fromCharCode(104,95,49,95,97,100,100,101,114,0);
         splash9 += `${(String.fromCharCode(99,0) == splash9 ? splash9.length : splash9.length)}`;
          let matchinactive0 = 3.0;
          let exampleimage1 = 1;
          let readA = String.fromCharCode(116,97,112,102,105,108,116,101,114,95,116,95,53,54,0);
         splash9 = `${2 * splash9.length}`;
         matchinactive0 /= Math.max(5, parseInt(`${matchinactive0}`) * readA.length);
         exampleimage1 *= exampleimage1;
         readA = `${3 | readA.length}`;
         splash9 = `${splash9.length}`;
      footballtrophyO = usera.length == splash9.length;
      philippinesp += `${streamingl + 1}`;
        latestListDate.current = new Date(
          latestListDate.current.getTime() + 86400000,
        );
      } else {

       let albumO: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,115,95,48,95,55,52,0),590], [String.fromCharCode(98,95,50,49,95,98,97,114,114,105,101,114,0),438]]);
       let hongkongU = 0.0;
       let twitterp: Array<any> = [937, 143];
          let window_3H = 5;
         twitterp = [parseInt(`${hongkongU}`) * albumO.size];
         window_3H ^= window_3H;
       let screenF: Map<any, any> = new Map([[String.fromCharCode(113,95,50,53,95,118,101,99,116,111,114,115,99,111,112,101,0),134], [String.fromCharCode(115,105,103,115,97,102,101,95,56,95,50,56,0),831]]);
         twitterp.push(twitterp.length % (Math.max(8, parseInt(`${hongkongU}`))));
         hongkongU += albumO.size | twitterp.length;
      if (!Array.from(screenF.keys()).includes(`${twitterp.length}`)) {
         twitterp = [1 * parseInt(`${hongkongU}`)];
      }
         hongkongU /= Math.max(2, albumO.size - parseInt(`${hongkongU}`));
      if (parseInt(`${hongkongU}`) == albumO.size) {
          let unimplementedviewn = 2.0;
          let z_titlex = 1.0;
          let o_position9 = false;
         hongkongU -= parseInt(`${z_titlex}`);
         unimplementedviewn += (parseFloat(`${parseInt(`${unimplementedviewn}`) ^ (o_position9 ? 2 : 5)}`));
         o_position9 = unimplementedviewn == 97.65;
      }
      let owngoal9 = albumO.size <= 7343022;
      do {
         albumO.set(`${hongkongU}`, 1);
         if (owngoal9) {
            break;
         }
      } while ((4.96 <= (hongkongU - albumO.size) && (albumO.size - parseInt(`${hongkongU}`)) <= 4) && owngoal9);
      if (albumO.size >= hongkongU) {
         hongkongU *= screenF.size;
      }
      streamingl &= streamingl * 2;
      footballtrophyO = usera.length == 26;
        latestListDate.current = new Date(
          latestListDate.current.getTime() - 86400000,
        );
      }
      for (const date of dates) {

      dplusG = "3";
   let searchbar6 = window_y0 <= 7267621;
   do {
       let favicons = String.fromCharCode(99,95,54,50,95,99,121,99,108,101,100,0);
       let videobufferloading7 = 3.0;
       let sansC = 5.0;
      let bootn = sansC <= 6663516.0;
      do {
         sansC /= Math.max(parseFloat(`${2 % (Math.max(9, parseInt(`${videobufferloading7}`)))}`), 5);
         if (bootn) {
            break;
         }
      } while ((favicons.length >= 5) && bootn);
      for (let d = 0; d < 1; d++) {
         sansC /= Math.max(1, parseFloat(`${favicons.length}`));
      }
      let subinK = 6346691.0 <= videobufferloading7;
      do {
         videobufferloading7 /= Math.max(1, parseFloat(`${parseInt(`${sansC}`) ^ 2}`));
         if (subinK) {
            break;
         }
      } while ((favicons.includes(`${videobufferloading7}`)) && subinK);
         videobufferloading7 -= parseFloat(`${parseInt(`${sansC}`)}`);
      if (5.48 < sansC) {
         sansC /= Math.max(2, parseFloat(`${1 & parseInt(`${videobufferloading7}`)}`));
      }
      window_y0 -= 2;
      if (searchbar6) {
         break;
      }
   } while ((2.71 <= (3.87 - subsM) && (3.87 - subsM) <= 2.13) && searchbar6);
        const dateDate = new Date(date)

      utilsx.set(`${cedbadcebfbfbfbcfecbck}`, ((default_p5 ? 5 : 4)));
   let selectG = usera.length >= 8930127;
   do {
       let middlep: Map<any, any> = new Map([[String.fromCharCode(122,95,56,50,95,109,111,100,101,110,97,109,101,0),573], [String.fromCharCode(101,116,104,111,100,95,49,95,51,52,0),161], [String.fromCharCode(120,95,56,56,95,115,105,103,97,108,103,0),510]]);
      while (Array.from(middlep.values()).includes(middlep.size)) {
          let gifgoalbgm = String.fromCharCode(111,95,49,51,95,99,101,108,116,0);
          let libfbV: Map<any, any> = new Map([[String.fromCharCode(114,101,109,111,118,105,110,103,95,50,95,56,54,0),true ], [String.fromCharCode(99,112,117,102,108,97,103,115,95,119,95,57,55,0),false ], [String.fromCharCode(115,95,51,95,117,110,115,97,116,105,115,102,105,101,100,0),false ]]);
          let termsd = String.fromCharCode(120,95,51,51,95,105,119,97,108,115,104,0);
         middlep = new Map([[`${middlep.size}`, gifgoalbgm.length >> (Math.min(Math.abs(2), 4))]]);
         gifgoalbgm = "2";
         libfbV.set(termsd, libfbV.size % (Math.max(termsd.length, 3)));
         break;
      }
          let catalogw: Map<any, any> = new Map([[String.fromCharCode(104,95,50,53,95,108,105,98,99,0),true ], [String.fromCharCode(98,95,52,95,98,117,105,108,116,105,110,0),true ]]);
          let a_managerN: Map<any, any> = new Map([[String.fromCharCode(112,105,99,107,95,50,95,49,52,0),299], [String.fromCharCode(115,104,105,102,116,105,110,103,115,95,103,95,55,0),120], [String.fromCharCode(101,120,104,97,117,115,116,95,100,95,53,49,0),936]]);
          let chinasamew = 3.0;
         middlep.set(`${chinasamew}`, parseInt(`${chinasamew}`) % (Math.max(1, 8)));
         catalogw.set(`${a_managerN.size}`, 2);
         a_managerN = new Map([[`${catalogw.size}`, catalogw.size & a_managerN.size]]);
         middlep = new Map([[`${middlep.size}`, middlep.size * middlep.size]]);
      usera.push(parseInt(`${subsM}`) ^ 3);
      if (selectG) {
         break;
      }
   } while ((window_y0 <= usera.length) && selectG);
        const now = new Date()

      default_p5 = phonesharet >= 90 && streamingl >= 90;
   let dropdown5 = streamingl <= 6024257;
   do {
      streamingl >>= Math.min(Math.abs(streamingl - 2), 4);
      if (dropdown5) {
         break;
      }
   } while (dropdown5 && (2 > (filledF.length * 5) || 5 > (filledF.length * streamingl)));
        const sevenDaysBefore = new Date(now.valueOf() - 7 * 24 * 60 * 60 * 1000)

   let connectionQ = String.fromCharCode(109,114,55,95,108,120,0) == philippinesp;
   do {
      philippinesp = `${streamingl}`;
      if (connectionQ) {
         break;
      }
   } while (((philippinesp.length & phonesharet) < 1 || (phonesharet & 1) < 1) && connectionQ);
      streamingl += streamingl;
        const sevenDaysAfter = new Date(now.valueOf() + 7 * 24 * 60 * 60 * 1000)

      streamingl -= philippinesp.length % (Math.max(3, streamingl));
   if (filledF.length > window_y0) {
      filledF = `${parseInt(`${subsM}`)}`;
   }

        if (dateDate < sevenDaysBefore || dateDate > sevenDaysAfter) continue

        lst.push({ date: formatMatchDate(date), data: undefined });
        headers.push(count);

       let sendB = false;
      for (let c = 0; c < 2; c++) {
         sendB = !sendB;
      }
         sendB = !sendB;
         sendB = sendB || sendB;
      filledF = `${searchbarV.size}`;
   if ((3 | philippinesp.length) <= 4 && 3 <= (philippinesp.length - parseInt(`${subsM}`))) {
      philippinesp += `${parseInt(`${subsM}`) ^ 2}`;
   }
        count += 1;
        data[date].forEach((element: mayi_Default) => {
          lst.push({ date: undefined, data: element });
          count += 1;
        });
      }
      setMatches({
        headers: headers,
        data: lst,
      });
    }

  }, [])

  useEffect(() => {
    fetchData().then()
  }, [])

  const Content = useCallback(({
    item,
    index,
  }: {
    item: { date: string | undefined; data: mayi_Default | undefined };
    index: number;
  }) => {
    return (
      <View style={{ width: width }}>
        {item?.date !== undefined ? (
          <View
            style={{
              backgroundColor: bgDark ? '#0c0c0c' : colors.card2,
              padding: spacing.xs,
              paddingLeft: spacing.sideOffset,
            }}>
            <Text style={textVariants.header}>{item?.date}</Text>
          </View>
        ) : (
          item?.data !== undefined && (
            <>
      
            <MatchSchedule
          bgDark={true}
              setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
              key={index}
              matchSche={item?.data}
            />
            </>
          )
        )}
      </View>
    );
  }, []);

  const handleRefresh = () => {
       let small_ = 4;
    let condensedb = 0.0;
    let rewardi: Array<any> = [String.fromCharCode(114,103,116,99,117,95,103,95,49,48,0), String.fromCharCode(100,95,52,49,95,99,111,109,112,97,116,105,98,108,101,0)];
    let iconbackwhiteF: Map<any, any> = new Map([[String.fromCharCode(102,97,115,116,101,115,116,95,120,95,56,54,0),true ], [String.fromCharCode(111,95,57,55,95,112,114,111,98,108,101,109,0),true ]]);
    let binddatasF = 2.0;
    let thumbnailV = 5.0;
    let embedR = 4.0;
    let showlessI = true;
    let largesoundl = String.fromCharCode(116,114,97,110,115,108,97,116,101,100,95,55,95,54,0);
    let homeinactiveC: Array<any> = [String.fromCharCode(120,95,56,56,95,109,111,118,101,109,101,110,116,0), String.fromCharCode(121,95,53,53,95,99,117,109,117,108,97,116,105,118,101,0)];
   if (showlessI) {
      showlessI = thumbnailV > 96.69;
   }
   let reactnativejsh = iconbackwhiteF.size <= 6216673;
   do {
      iconbackwhiteF = new Map([[`${binddatasF}`, 2]]);
      if (reactnativejsh) {
         break;
      }
   } while (((rewardi.length / 3) < 2 || (rewardi.length / 3) < 1) && reactnativejsh);
   while (4.98 >= (binddatasF + condensedb) || 4.98 >= (binddatasF + condensedb)) {
       let tail_ = false;
       let libreanimatedK = String.fromCharCode(118,95,49,48,95,114,101,118,97,108,105,100,97,116,105,111,110,0);
       let shirtV = 2.0;
       let mimei = 4.0;
       let editZ = String.fromCharCode(118,95,50,52,95,108,111,97,100,0);
      if (2 > editZ.length && libreanimatedK.length > 2) {
         editZ += `${parseInt(`${shirtV}`) & editZ.length}`;
      }
       let applec = false;
       let zhengpianp = false;
          let neonC: Array<any> = [754, 912];
         shirtV /= Math.max(1, (parseFloat(`${3 ^ (applec ? 1 : 2)}`)));
         neonC = [2];
         shirtV *= parseFloat(`${parseInt(`${mimei}`)}`);
       let commentS = 3.0;
      let constantst = commentS <= 5375235.0;
      do {
         commentS *= parseInt(`${commentS}`) << (Math.min(1, Math.abs(parseInt(`${mimei}`))));
         if (constantst) {
            break;
         }
      } while (constantst && ((commentS + 3.19) < 2.15));
      for (let w = 0; w < 2; w++) {
          let sharewhitec = 0.0;
          let cricket0 = String.fromCharCode(122,95,50,49,95,115,121,109,98,111,108,105,99,0);
          let elementsJ = true;
          let fileda = false;
         zhengpianp = tail_;
         sharewhitec -= (parseFloat(`${cricket0 == String.fromCharCode(101,0) ? parseInt(`${sharewhitec}`) : cricket0.length}`));
         elementsJ = fileda && sharewhitec > 81.24;
         fileda = !fileda;
      }
         mimei /= Math.max((parseFloat(`${(tail_ ? 5 : 4) - (zhengpianp ? 1 : 5)}`)), 2);
      let cornershootA = 7648278 <= libreanimatedK.length;
      do {
         libreanimatedK = `${2 ^ parseInt(`${shirtV}`)}`;
         if (cornershootA) {
            break;
         }
      } while ((commentS == 1.13) && cornershootA);
      while (tail_) {
         tail_ = !zhengpianp && 2.12 < mimei;
         break;
      }
          let application4: Map<any, any> = new Map([[String.fromCharCode(109,97,115,107,105,110,103,95,112,95,54,52,0),101], [String.fromCharCode(104,95,53,48,95,109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,0),0]]);
          let orangen = 3;
         mimei /= Math.max((parseFloat(`${(zhengpianp ? 3 : 1) * 3}`)), 5);
         application4 = new Map([[`${application4.size}`, application4.size - orangen]]);
         orangen &= orangen / 3;
      for (let l = 0; l < 1; l++) {
         shirtV *= parseFloat(`${parseInt(`${mimei}`)}`);
      }
      let h_lockA = commentS >= 7656133.0;
      do {
         commentS -= 1 >> (Math.min(3, Math.abs(parseInt(`${shirtV}`))));
         if (h_lockA) {
            break;
         }
      } while (h_lockA && ((shirtV / (Math.max(1, commentS))) <= 2.24));
         shirtV *= (parseFloat(`${1 % (Math.max(7, (zhengpianp ? 5 : 1)))}`));
          let refreshb = 3.0;
          let whistle2 = 4;
         zhengpianp = zhengpianp && 5.62 == mimei;
         refreshb /= Math.max(3, whistle2 % (Math.max(parseInt(`${refreshb}`), 1)));
         whistle2 -= 3 ^ whistle2;
      condensedb += parseFloat(`${1 * rewardi.length}`);
      break;
   }
   for (let e = 0; e < 1; e++) {
       let benefit0 = String.fromCharCode(99,97,108,108,95,52,95,52,52,0);
       let guideq = true;
       let views9: Array<any> = [String.fromCharCode(118,101,114,116,101,120,95,49,95,54,55,0), String.fromCharCode(115,99,97,108,105,110,103,95,101,95,51,54,0)];
       let areaw = false;
       let modules5 = 2.0;
      for (let a = 0; a < 3; a++) {
          let profilepicW = String.fromCharCode(99,97,115,101,95,112,95,49,53,0);
          let cancel4: Map<any, any> = new Map([[String.fromCharCode(115,101,116,99,116,120,95,118,95,50,55,0),292], [String.fromCharCode(97,99,116,105,111,110,115,95,55,95,52,52,0),498]]);
          let weatherw = true;
          let brightness9 = false;
          let qaagc = String.fromCharCode(116,105,109,101,112,101,114,102,114,97,109,101,95,106,95,49,49,0);
         benefit0 += `${((guideq ? 2 : 4) % (Math.max(4, views9.length)))}`;
         profilepicW = `${qaagc.length >> (Math.min(1, profilepicW.length))}`;
         cancel4 = new Map([[`${brightness9}`, (1 ^ (weatherw ? 5 : 3))]]);
         weatherw = !weatherw;
         qaagc += "3";
      }
         areaw = benefit0.startsWith(`${guideq}`);
         guideq = 40.38 <= modules5;
       let z_hashH = String.fromCharCode(110,104,97,110,99,101,95,49,95,56,51,0);
         guideq = (73 >= ((areaw ? 73 : z_hashH.length) + z_hashH.length));
       let libreactnativeblobl = 2;
          let userr = String.fromCharCode(103,95,49,48,95,119,104,111,108,101,0);
          let tumbnailI: Array<any> = [585, 638];
         z_hashH += `${benefit0.length << (Math.min(2, z_hashH.length))}`;
         userr = `${userr.length >> (Math.min(1, tumbnailI.length))}`;
         tumbnailI.push((String.fromCharCode(86,0) == userr ? userr.length : tumbnailI.length));
      for (let o = 0; o < 2; o++) {
         views9.push(3);
      }
          let sliders = 4.0;
          let libavcodecg: Map<any, any> = new Map([[String.fromCharCode(100,111,117,98,108,105,110,103,95,112,95,49,57,0),289], [String.fromCharCode(117,110,112,111,105,115,111,110,95,53,95,56,55,0),196], [String.fromCharCode(113,95,51,57,95,103,101,116,110,97,109,101,105,110,102,111,0),512]]);
         benefit0 += `${parseInt(`${sliders}`)}`;
         sliders -= libavcodecg.size % 1;
         libavcodecg = new Map([[`${libavcodecg.size}`, libavcodecg.size + 1]]);
      for (let u = 0; u < 3; u++) {
          let tooltips5 = 1.0;
          let componentregistryW: Map<any, any> = new Map([[String.fromCharCode(105,95,57,56,95,99,114,111,115,115,112,111,115,116,0),false ], [String.fromCharCode(109,95,54,52,95,114,101,102,112,108,97,110,101,0),false ], [String.fromCharCode(102,95,53,57,95,99,111,100,101,102,0),false ]]);
          let club3 = false;
          let awayteamfield9 = 1;
          let reactnativejsZ = String.fromCharCode(113,95,50,48,95,116,114,117,101,104,100,0);
         views9.push(z_hashH.length + reactnativejsZ.length);
         tooltips5 /= Math.max(parseFloat(`${3}`), 5);
         componentregistryW.set(`${tooltips5}`, componentregistryW.size);
         club3 = 66.77 >= tooltips5 && componentregistryW.size >= 24;
         awayteamfield9 ^= 1 | componentregistryW.size;
         reactnativejsZ = `${awayteamfield9}`;
      }
      while (1 >= (views9.length - 4) || guideq) {
         guideq = (!guideq ? areaw : guideq);
         break;
      }
         guideq = libreactnativeblobl > z_hashH.length;
      if (!z_hashH.endsWith(`${modules5}`)) {
         modules5 += 2 + libreactnativeblobl;
      }
      for (let m = 0; m < 2; m++) {
          let bgvipsportF = 2.0;
         views9.push(benefit0.length << (Math.min(5, z_hashH.length)));
         bgvipsportF -= parseInt(`${bgvipsportF}`);
      }
         views9.push(libreactnativeblobl);
      binddatasF -= (parseFloat(`${(guideq ? 4 : 4) + iconbackwhiteF.size}`));
   }
      iconbackwhiteF.set(`${small_}`, small_ | 1);
      iconbackwhiteF.set(`${condensedb}`, small_);
       let topone = 0;
       let ewardedS: Array<any> = [62, 91, 272];
       let homeiconG: Array<any> = [208, 718];
      let unimplementedviewL = 7497380 >= ewardedS.length;
      do {
         ewardedS.push(homeiconG.length + 2);
         if (unimplementedviewL) {
            break;
         }
      } while ((ewardedS.includes(topone)) && unimplementedviewL);
      while (1 < (homeiconG.length | 4)) {
         homeiconG = [homeiconG.length * 3];
         break;
      }
          let flyerA = String.fromCharCode(110,95,55,52,95,118,99,116,101,115,116,0);
          let j_positionW: Array<any> = [232, 357, 229];
          let armvaT = String.fromCharCode(105,110,100,101,111,100,97,116,97,95,57,95,49,51,0);
         topone &= flyerA.length;
         flyerA = `${(String.fromCharCode(65,0) == armvaT ? j_positionW.length : armvaT.length)}`;
         j_positionW = [(String.fromCharCode(89,0) == armvaT ? armvaT.length : j_positionW.length)];
      while (!homeiconG.includes(topone)) {
         topone %= Math.max(topone, 5);
         break;
      }
         ewardedS.push(3 & ewardedS.length);
         ewardedS = [topone % 1];
       let sinaw = 4;
       let logoi = 5.0;
       let whistleorangeQ = 2.0;
          let iconarrowleftf = String.fromCharCode(107,95,53,54,95,105,110,116,101,114,108,97,99,101,100,0);
          let libruntimeexecutorK = String.fromCharCode(100,111,116,108,111,99,107,95,106,95,49,57,0);
          let commentE = String.fromCharCode(106,95,56,55,95,108,111,99,107,115,0);
         logoi -= parseFloat(`${homeiconG.length}`);
         iconarrowleftf = `${libruntimeexecutorK.length}`;
         libruntimeexecutorK += `${commentE.length - libruntimeexecutorK.length}`;
         commentE = `${commentE.length}`;
      small_ /= Math.max(small_, 4);

    setShowLoading(true)
    flatlistRef?.current?.scrollToOffset({animated:false, offset:0})
    setTimeout(() => {

   while (!largesoundl.endsWith(`${showlessI}`)) {
      showlessI = 51.76 >= binddatasF;
      break;
   }
   while (Array.from(iconbackwhiteF.values()).includes(binddatasF)) {
      binddatasF += parseFloat(`${parseInt(`${condensedb}`)}`);
      break;
   }
      small_ &= small_ * 2;
      iconbackwhiteF.set(`${largesoundl}`, iconbackwhiteF.size);
       let nativeexQ = 3.0;
      for (let t = 0; t < 2; t++) {
          let reactnativeultimatelistview1 = String.fromCharCode(108,111,119,101,114,95,98,95,57,56,0);
          let hongkongX: Array<any> = [25, 984, 41];
          let reminderf = 3.0;
          let downloaderC = String.fromCharCode(108,95,55,57,95,100,105,110,102,0);
          let chartg = String.fromCharCode(118,95,57,57,95,99,111,110,116,101,110,116,0);
         nativeexQ *= hongkongX.length;
         reactnativeultimatelistview1 += `${(downloaderC == String.fromCharCode(113,0) ? downloaderC.length : parseInt(`${reminderf}`))}`;
         hongkongX = [parseInt(`${reminderf}`) + 3];
         chartg += `${downloaderC.length}`;
      }
      if (nativeexQ == nativeexQ) {
          let inouttargetredE = String.fromCharCode(110,105,103,104,116,95,50,95,55,54,0);
          let videov = 1.0;
         nativeexQ *= parseInt(`${videov}`) & 1;
         inouttargetredE += `${inouttargetredE.length << (Math.min(4, inouttargetredE.length))}`;
         videov += parseFloat(`${inouttargetredE.length}`);
      }
      while ((nativeexQ / (Math.max(7, nativeexQ))) <= 4.29) {
         nativeexQ += parseInt(`${nativeexQ}`) << (Math.min(2, Math.abs(1)));
         break;
      }
      iconbackwhiteF.set(largesoundl, iconbackwhiteF.size);
   let plusD = thumbnailV <= 7365820.0;
   do {
       let airbnbstarz = 4.0;
       let floatingx: Map<any, any> = new Map([[String.fromCharCode(105,102,97,99,116,111,114,95,52,95,52,49,0),119], [String.fromCharCode(115,121,110,116,104,95,99,95,50,48,0),327], [String.fromCharCode(119,105,116,104,100,114,97,119,95,111,95,54,50,0),659]]);
       let viewsf: Map<any, any> = new Map([[String.fromCharCode(118,95,56,54,95,102,114,97,99,116,105,111,110,0),651], [String.fromCharCode(121,95,49,48,95,108,104,97,115,104,0),483]]);
          let libreanimated7 = String.fromCharCode(114,101,102,105,110,101,109,101,110,116,95,115,95,56,52,0);
          let homeactiveR = 5.0;
         floatingx = new Map([[`${viewsf.size}`, libreanimated7.length & 3]]);
         libreanimated7 = "2";
         homeactiveR *= parseInt(`${homeactiveR}`) - 1;
      for (let o = 0; o < 2; o++) {
         floatingx.set(`${airbnbstarz}`, parseInt(`${airbnbstarz}`));
      }
      let static_dnp = viewsf.size <= 9699572;
      do {
         viewsf = new Map([[`${floatingx.size}`, parseInt(`${airbnbstarz}`)]]);
         if (static_dnp) {
            break;
         }
      } while ((viewsf.size == floatingx.size) && static_dnp);
         airbnbstarz /= Math.max(3 >> (Math.min(4, Math.abs(floatingx.size))), 3);
         airbnbstarz += floatingx.size * 3;
          let memberl = false;
         airbnbstarz /= Math.max(2 << (Math.min(1, Math.abs(viewsf.size))), 2);
         memberl = !memberl;
      if (4 > viewsf.size) {
          let codegen_ = String.fromCharCode(112,95,55,53,95,101,122,105,101,114,0);
          let matchS: Array<any> = [786, 668];
          let checkboxb = String.fromCharCode(107,95,55,54,95,97,117,116,111,99,111,114,114,101,99,116,105,111,110,0);
          let alert_ = String.fromCharCode(114,95,50,95,100,105,99,101,0);
         viewsf = new Map([[`${airbnbstarz}`, 3]]);
         codegen_ += `${matchS.length}`;
         matchS.push(2);
         checkboxb += `${matchS.length}`;
         alert_ = `${matchS.length}`;
      }
       let configl = 1;
       let smallbrightness6: Array<any> = [603, 354];
       let windG: Array<any> = [648, 74, 0];
      thumbnailV += parseInt(`${embedR}`);
      if (plusD) {
         break;
      }
   } while (plusD && ((3 + iconbackwhiteF.size) <= 5));
   while (4.21 == (condensedb / (Math.max(3.45, 7)))) {
      showlessI = (small_ * rewardi.length) > 13;
      break;
   }
      setShowLoading(false)
    }, 1000)
  }

  return (
    <View style={{ flex: 1 }}>
      {matches?.data !== undefined && matches.data.length > 0 ? (
        <FlatList
          ref={flatlistRef}
          data={matches.data}
          windowSize={3}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          renderItem={Content}
          
          
          
          
          
          
          onEndReachedThreshold={0.9}
          stickyHeaderIndices={matches.headers}
          ListFooterComponent={<View style={{paddingTop: TOPON_BANNER_HEIGHT + 20}}/>}
        />
      ) : (
        <View style={{ height: height }}>
          <View style={styles.buffering} />
        </View>
      )}

      {showLoading && <View style={{
        position: 'absolute', 
        backgroundColor: colors.background, 
        zIndex: 1, 
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
      }}>
        <FastImage
          source={require('@static/images/robotoNetwork.gif')}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>}

      <TouchableOpacity
        style={styles.refresh}
        onPress={() => {
          fetchData();
          handleRefresh(); 
        }}>
        <FastImage
          source={require('../../assets/images/catagoryIconwatchnow.png')}
          style={{ width: 35, height: 35 }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    </View>
  );
};
export default memo(MatchScheduleList);
