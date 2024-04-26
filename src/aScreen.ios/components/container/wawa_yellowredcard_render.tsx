import React, {memo, useState, useRef, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  RefreshControl,
  Dimensions,
  FlatList,
  Linking,
} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ShowMoreVodButton from '../button/wawa_notificationfillempty_button';
import {wawaWithCrown, wawaSellProfileinactive, wawaNterstitial} from '@type/wawa_gradlew';
import FastImage from '../common/wawa_iconarrowrightblack';
import {wawaAgreementFlag} from '@redux/reducers/wawa_quest_ping';
import {useAppDispatch, useAppSelector, useSelector} from '@hooks/wawa_root';
import {wawaIconsubssuccess} from '@redux/wawa_bgvipsport_spinner';
import VodHistoryList from '../vod/wawa_smallbrightness';
import VodLiveStationList from '../vod/wawa_neon_phoneshare';
import {API_DOMAIN, API_DOMAIN_TEST} from '@utility/wawa_iconpointscore';
import VodListVertical from '../vod/wawa_icon_action';
import {playVod, viewPlaylistDetails} from '@redux/actions/wawa_indicator';
import {useQuery, useInfiniteQuery} from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import CarouselPagination from './wawa_index_info';
import LoadingIcon from '@static/images/libyogaGesturesSubs.svg';
import {Image} from 'react-native';
import {YingPingContainer} from '../container/wawa_anythink';
import {wawaHiadCanvas, wawaWhitetickAway} from '@api';
import {wawaPhoneControls} from '@redux/reducers/wawa_umeng';
import {wawaLibglog} from '@models/wawa_refreshborderless_found';

interface wawaFullscreenminIconarrowleft {
  id: number;
  name: string;
}
interface wawaAwayShow {
  vodCarouselRes: wawaNterstitial;
  navOptions?: wawaFullscreenminIconarrowleft[] | undefined;
  onNavChange?: any;
  navId?: number;
  setScrollEnabled?: any;
  onRefresh?: any;
  refreshProp?: boolean;
  onLoad?: any;
}

const RecommendationHome = ({
  vodCarouselRes: data,
  setScrollEnabled,
  onRefresh,
  refreshProp = false,
  onLoad = () => {
       let iconclosej = 4.0;
    let hoverb = 4;
    let fast5 = 2.0;
    let volumex = String.fromCharCode(97,99,114,111,115,115,95,113,95,53,48,0);
    let wifirouterG = true;
    let iconrightorangeF = String.fromCharCode(107,95,51,51,95,119,111,114,100,108,105,115,116,0);
    let sinaP = 1.0;
    let downloadedm = String.fromCharCode(117,95,53,53,95,102,101,97,116,117,114,101,115,0);
    let watchv = 1.0;
    let zhengpianU = String.fromCharCode(109,121,113,114,95,104,95,50,57,0);
    let profileactivek = 5.0;
    let greyarrowupD = 5.0;
      fast5 *= parseFloat(`${3}`);
      hoverb <<= Math.min(Math.abs(3 * hoverb), 4);
   if ((iconclosej + 4) >= 4.77) {
      fast5 *= parseFloat(`${iconrightorangeF.length}`);
   }
   let agreementi = String.fromCharCode(97,115,50,97,119,116,0) == iconrightorangeF;
   do {
      iconrightorangeF = "1";
      if (agreementi) {
         break;
      }
   } while ((iconrightorangeF.length == parseInt(`${iconclosej}`)) && agreementi);
   let typingloadingj = 7616648 <= hoverb;
   do {
      hoverb -= 2 ^ parseInt(`${fast5}`);
      if (typingloadingj) {
         break;
      }
   } while ((2 <= (parseInt(`${fast5}`) - hoverb) && (2 & hoverb) <= 5) && typingloadingj);
      hoverb &= iconrightorangeF.length;
      sinaP -= (parseFloat(`${hoverb >> (Math.min(4, Math.abs((wifirouterG ? 2 : 2))))}`));
      iconrightorangeF += `${(iconrightorangeF == String.fromCharCode(112,0) ? parseInt(`${sinaP}`) : iconrightorangeF.length)}`;
      wifirouterG = (iconclosej * fast5) > 35.71;
   let eventj = 7859415.0 <= fast5;
   do {
      fast5 *= parseFloat(`${3 - parseInt(`${sinaP}`)}`);
      if (eventj) {
         break;
      }
   } while (eventj && ((3.66 + fast5) >= 3.41));
      sinaP += parseFloat(`${volumex.length}`);
       let productO = String.fromCharCode(103,109,104,100,95,101,95,54,55,0);
          let minimizeq = true;
          let yellowvideoliveE: Map<any, any> = new Map([[String.fromCharCode(100,95,55,49,95,118,105,100,101,111,100,115,112,0),811], [String.fromCharCode(110,101,119,108,105,110,101,95,104,95,48,0),563]]);
         productO += `${2 << (Math.min(2, Math.abs(yellowvideoliveE.size)))}`;
         minimizeq = (minimizeq ? minimizeq : !minimizeq);
         yellowvideoliveE = new Map([[`${minimizeq}`, 2]]);
       let goallogo5 = 1;
      if (productO.startsWith(`${goallogo5}`)) {
         productO += "1";
      }
      fast5 += parseFloat(`${productO.length}`);
   if ((3 % (Math.max(2, hoverb))) >= 3 && 5 >= (hoverb % (Math.max(3, 3)))) {
      hoverb /= Math.max(((wifirouterG ? 5 : 4) % 2), 2);
   }
      volumex = `${parseInt(`${iconclosej}`)}`;
       let spinnerb = String.fromCharCode(109,95,55,50,95,103,100,115,112,0);
       let liveendmodallogom = 1.0;
       let floating1 = 3.0;
      if (2.4 > floating1) {
         liveendmodallogom += parseInt(`${liveendmodallogom}`) ^ 3;
      }
      let modalK = spinnerb.length >= 5667807;
      do {
         spinnerb = `${spinnerb.length * 2}`;
         if (modalK) {
            break;
         }
      } while ((spinnerb.length >= liveendmodallogom) && modalK);
         liveendmodallogom -= parseInt(`${liveendmodallogom}`) % (Math.max(3, 7));
       let whitew = String.fromCharCode(103,95,52,48,95,100,105,97,99,114,105,116,105,99,0);
       let progresss = String.fromCharCode(114,101,99,111,114,100,97,98,108,101,95,117,95,50,0);
      let filedr = whitew.length >= 6911808;
      do {
          let bellremindera: Map<any, any> = new Map([[String.fromCharCode(105,109,97,103,101,95,110,95,54,53,0),108], [String.fromCharCode(108,95,53,54,95,99,108,101,97,114,101,100,0),809], [String.fromCharCode(107,95,53,49,95,112,114,111,112,111,115,97,108,0),987]]);
          let team1: Map<any, any> = new Map([[String.fromCharCode(116,111,107,101,110,100,95,104,95,57,54,0),400], [String.fromCharCode(99,95,55,57,95,105,105,114,102,105,108,116,101,114,0),487]]);
          let historyJ = String.fromCharCode(104,95,50,52,95,98,108,105,110,100,101,100,0);
         whitew += `${bellremindera.size}`;
         bellremindera = new Map([[`${team1.size}`, historyJ.length]]);
         team1 = new Map([[`${team1.size}`, historyJ.length]]);
         if (filedr) {
            break;
         }
      } while ((5.77 >= (floating1 - parseFloat(`${whitew.length}`)) && (floating1 - 5.77) >= 4.86) && filedr);
       let team1T: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,112,114,111,99,95,100,95,50,51,0),907], [String.fromCharCode(108,95,55,49,95,99,101,110,116,114,97,108,0),677], [String.fromCharCode(116,95,57,95,99,102,102,116,105,0),271]]);
         spinnerb += `${1 - parseInt(`${liveendmodallogom}`)}`;
         liveendmodallogom += 3;
      while (progresss != String.fromCharCode(99,0)) {
          let pushy = String.fromCharCode(119,95,54,51,95,99,97,112,112,101,100,0);
          let mountingR = String.fromCharCode(102,97,100,101,111,117,116,95,105,95,54,49,0);
          let entryh = false;
          let canvass = String.fromCharCode(114,101,99,116,97,110,103,108,101,115,95,98,95,49,48,48,0);
          let productM = 5.0;
         whitew = `${((entryh ? 2 : 2) % (Math.max(parseInt(`${liveendmodallogom}`), 8)))}`;
         pushy = `${2 ^ mountingR.length}`;
         mountingR += `${parseInt(`${productM}`) ^ mountingR.length}`;
         entryh = pushy.length >= 35 || mountingR == String.fromCharCode(108,0);
         canvass += `${pushy.length % (Math.max(mountingR.length, 9))}`;
         productM /= Math.max(3, 3);
         break;
      }
      wifirouterG = parseFloat(`${hoverb}`) < iconclosej;
       let iconorientationu: Array<any> = [587, 540, 130];
       let rounds: Map<any, any> = new Map([[String.fromCharCode(107,95,53,51,95,105,110,118,115,98,111,120,0),928], [String.fromCharCode(108,95,57,56,95,112,105,99,107,0),763], [String.fromCharCode(100,95,57,49,95,111,99,116,101,116,0),452]]);
         iconorientationu = [3];
      if (Array.from(rounds.values()).includes(iconorientationu.length)) {
         iconorientationu = [1 - iconorientationu.length];
      }
      fast5 /= Math.max(4, parseFloat(`${hoverb}`));
      hoverb *= 1 - hoverb;
      hoverb &= hoverb;
       let sansE = 2.0;
       let nalyticsH = String.fromCharCode(108,97,116,116,105,99,101,95,116,95,57,50,0);
         nalyticsH += "1";
          let strings8 = String.fromCharCode(115,105,103,110,105,102,105,99,97,110,116,95,118,95,53,48,0);
          let description_vaA = 0;
          let usernameq = String.fromCharCode(119,100,108,116,95,97,95,50,0);
         nalyticsH = `${description_vaA * usernameq.length}`;
         strings8 += `${(strings8 == String.fromCharCode(53,0) ? strings8.length : strings8.length)}`;
         description_vaA &= (strings8 == String.fromCharCode(85,0) ? strings8.length : strings8.length);
          let specU: Array<any> = [String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,95,98,95,50,56,0), String.fromCharCode(115,109,112,116,101,104,100,98,97,114,115,95,122,95,57,52,0)];
          let found8 = 0;
         sansE -= 3;
         specU.push(2);
         found8 *= specU.length;
      if ((nalyticsH.length - sansE) < 4.33 || 3 < (1 ^ nalyticsH.length)) {
         sansE += (String.fromCharCode(53,0) == nalyticsH ? parseInt(`${sansE}`) : nalyticsH.length);
      }
      for (let l = 0; l < 2; l++) {
         nalyticsH += "1";
      }
          let androidy = 1.0;
          let transfer7 = String.fromCharCode(114,95,50,54,95,100,101,115,114,111,121,0);
          let becomeB = 4.0;
         nalyticsH = `${transfer7.length}`;
         androidy /= Math.max(4, 2 * parseInt(`${becomeB}`));
         transfer7 = `${parseInt(`${becomeB}`)}`;
      iconclosej *= parseFloat(`${volumex.length - 3}`);
      fast5 *= parseFloat(`${hoverb - parseInt(`${fast5}`)}`);
       let toponx = 5.0;
       let infoW = 5;
      for (let t = 0; t < 1; t++) {
         infoW |= 3;
      }
         toponx += parseFloat(`${infoW / 2}`);
      let selectionC = infoW <= 5956277;
      do {
         infoW %= Math.max(parseInt(`${toponx}`), 5);
         if (selectionC) {
            break;
         }
      } while (selectionC && ((3 - infoW) > 4 && 3.74 > (4.27 + toponx)));
      let dplus7 = infoW <= 6040652;
      do {
         infoW -= 3 >> (Math.min(Math.abs(infoW), 1));
         if (dplus7) {
            break;
         }
      } while ((toponx <= 5.85) && dplus7);
       let dplusz = 5.0;
       let backwardX = 1.0;
       let leakcheckerG = String.fromCharCode(115,117,98,116,105,116,108,101,115,95,116,95,50,51,0);
       let searchK = String.fromCharCode(110,101,108,108,121,95,114,95,50,57,0);
      wifirouterG = volumex.length == 75;
   let proxyL = downloadedm.length <= 8751319;
   do {
      downloadedm += `${(iconrightorangeF == String.fromCharCode(102,0) ? hoverb : iconrightorangeF.length)}`;
      if (proxyL) {
         break;
      }
   } while (proxyL && (downloadedm.length == 4));
   for (let g = 0; g < 3; g++) {
       let smallsoundd = 1.0;
       let dycreator1 = 1.0;
       let mailf = String.fromCharCode(110,111,116,105,102,105,101,114,95,122,95,48,0);
      for (let w = 0; w < 2; w++) {
         dycreator1 *= parseFloat(`${mailf.length}`);
      }
         smallsoundd /= Math.max(parseFloat(`${2 << (Math.min(5, Math.abs(parseInt(`${dycreator1}`))))}`), 3);
      let minit = 7607885.0 >= smallsoundd;
      do {
         smallsoundd -= parseFloat(`${parseInt(`${smallsoundd}`) | parseInt(`${dycreator1}`)}`);
         if (minit) {
            break;
         }
      } while (minit && (!mailf.startsWith(`${smallsoundd}`)));
         smallsoundd += parseFloat(`${1}`);
      while (mailf.length <= parseInt(`${dycreator1}`)) {
         dycreator1 *= parseFloat(`${parseInt(`${smallsoundd}`) >> (Math.min(Math.abs(parseInt(`${dycreator1}`)), 2))}`);
         break;
      }
      iconclosej *= (parseFloat(`${downloadedm == String.fromCharCode(71,0) ? downloadedm.length : parseInt(`${fast5}`)}`));
   }
   while ((3.87 + watchv) == 5.70) {
      wifirouterG = downloadedm == String.fromCharCode(101,0);
      break;
   }
      downloadedm += `${iconrightorangeF.length >> (Math.min(4, Math.abs(parseInt(`${watchv}`))))}`;
       let huawei9 = 2;
       let gradlewI: Array<any> = [926, 487];
          let librrcX: Array<any> = [92, 886, 696];
         huawei9 /= Math.max(gradlewI.length, 4);
         librrcX.push(2);
      for (let d = 0; d < 2; d++) {
          let klevinn = 0;
          let iconviewerE: Map<any, any> = new Map([[String.fromCharCode(122,95,52,52,95,103,101,111,99,111,100,101,115,0),938], [String.fromCharCode(115,116,97,114,116,99,111,100,101,95,104,95,57,0),116]]);
          let iconmoreJ = String.fromCharCode(99,104,107,108,105,115,116,95,53,95,50,48,0);
          let yellowscoreballo = String.fromCharCode(109,112,116,111,97,110,110,101,120,98,95,108,95,52,50,0);
         huawei9 <<= Math.min(Math.abs(3 >> (Math.min(1, iconmoreJ.length))), 4);
         klevinn %= Math.max(3, 1);
         iconviewerE = new Map([[`${iconviewerE.size}`, 1 | yellowscoreballo.length]]);
         iconmoreJ = `${iconviewerE.size + yellowscoreballo.length}`;
      }
       let final_sH: Array<any> = [String.fromCharCode(115,116,105,114,110,103,95,48,95,53,57,0), String.fromCharCode(104,97,115,104,95,51,95,53,52,0), String.fromCharCode(97,112,112,114,111,118,97,108,95,117,95,50,51,0)];
         huawei9 ^= huawei9 - 1;
      for (let z = 0; z < 2; z++) {
          let notificationfilledZ = 4;
          let o_hashM = String.fromCharCode(107,95,53,55,95,101,109,117,108,97,116,101,0);
         final_sH.push(final_sH.length);
         notificationfilledZ |= (o_hashM == String.fromCharCode(97,0) ? notificationfilledZ : o_hashM.length);
      }
         huawei9 *= gradlewI.length;
      iconrightorangeF = `${parseInt(`${watchv}`) | iconrightorangeF.length}`;
   if (!downloadedm.includes(`${fast5}`)) {
      downloadedm = `${iconrightorangeF.length}`;
   }
   let libflippern = zhengpianU.length >= 5849274;
   do {
       let penaltymatchiconv: Array<any> = [510, 452, 524];
       let iconpipshrinkH = 3;
       let iconbackwhiteD = 1.0;
       let inactiveF = 5;
       let ginit_j2 = 0.0;
         inactiveF <<= Math.min(Math.abs(3), 5);
      if (!penaltymatchiconv.includes(inactiveF)) {
         penaltymatchiconv = [penaltymatchiconv.length % (Math.max(10, iconpipshrinkH))];
      }
          let hooku = 5.0;
          let layoutP: Array<any> = [String.fromCharCode(119,95,49,51,95,116,97,103,99,111,109,112,97,114,101,0), String.fromCharCode(117,95,56,50,95,119,101,97,118,101,0)];
          let crownV = String.fromCharCode(113,95,56,53,95,107,110,111,119,110,0);
         penaltymatchiconv = [1 % (Math.max(5, iconpipshrinkH))];
         hooku += 3;
         layoutP = [1];
         crownV += `${1 << (Math.min(Math.abs(parseInt(`${hooku}`)), 3))}`;
       let rankS = String.fromCharCode(120,95,56,56,95,97,107,105,100,0);
          let awayiconQ = String.fromCharCode(122,95,51,50,95,105,115,122,101,114,111,0);
          let oinit_67 = String.fromCharCode(100,95,52,51,95,102,99,104,111,119,110,0);
         iconbackwhiteD *= 3;
         awayiconQ += `${awayiconQ.length}`;
         oinit_67 += `${3 | awayiconQ.length}`;
      for (let y = 0; y < 3; y++) {
         rankS = `${parseInt(`${ginit_j2}`)}`;
      }
         rankS += `${iconpipshrinkH}`;
         inactiveF *= 2 % (Math.max(9, iconpipshrinkH));
         iconbackwhiteD /= Math.max(iconpipshrinkH, 5);
         ginit_j2 += 3 + iconpipshrinkH;
          let private_tyq: Map<any, any> = new Map([[String.fromCharCode(97,103,97,105,110,95,108,95,54,0),false ], [String.fromCharCode(119,95,57,51,95,116,119,111,108,97,109,101,0),true ], [String.fromCharCode(106,95,53,52,95,115,101,116,119,97,116,101,114,109,97,114,107,0),false ]]);
         inactiveF >>= Math.min(5, Math.abs(private_tyq.size));
         rankS = "2";
         iconbackwhiteD -= penaltymatchiconv.length / (Math.max(1, 7));
      let floatingH = 8578199 >= inactiveF;
      do {
         inactiveF %= Math.max(2, 3);
         if (floatingH) {
            break;
         }
      } while ((1 <= inactiveF) && floatingH);
      if (2 < (4 & iconpipshrinkH)) {
         penaltymatchiconv.push(parseInt(`${ginit_j2}`) & inactiveF);
      }
      zhengpianU += `${3 * parseInt(`${iconbackwhiteD}`)}`;
      if (libflippern) {
         break;
      }
   } while ((2.51 < (fast5 + 5.88) && 1 < (5 + zhengpianU.length)) && libflippern);
      hoverb /= Math.max(3, volumex.length);
   if ((5.45 * profileactivek) < 2.37 || (profileactivek * 5.45) < 3.95) {
       let inouttargetred9 = String.fromCharCode(101,120,116,110,95,97,95,53,49,0);
       let footballG = String.fromCharCode(101,98,109,108,95,107,95,53,52,0);
       let commonN = String.fromCharCode(98,97,115,101,117,114,108,95,105,95,51,48,0);
       let inviteF = 1.0;
      while (commonN.length <= 4) {
         commonN += "1";
         break;
      }
       let dependenciesL: Map<any, any> = new Map([[String.fromCharCode(120,95,55,52,95,101,120,99,108,0),635], [String.fromCharCode(102,97,105,108,101,100,95,120,95,49,0),319]]);
      for (let d = 0; d < 1; d++) {
         footballG = `${1 & dependenciesL.size}`;
      }
      if ((inviteF * parseFloat(`${footballG.length}`)) == 4.89 || (inviteF * 4.89) == 5.17) {
         inviteF *= parseFloat(`${parseInt(`${inviteF}`) - 3}`);
      }
      if (5.49 >= (inviteF - parseFloat(`${footballG.length}`))) {
         footballG = "2";
      }
      for (let q = 0; q < 3; q++) {
         footballG += `${footballG.length | inouttargetred9.length}`;
      }
      for (let y = 0; y < 3; y++) {
          let delegate_djy: Array<any> = [824, 580, 840];
          let graphH: Map<any, any> = new Map([[String.fromCharCode(114,108,118,108,99,95,52,95,51,48,0),String.fromCharCode(114,102,116,98,115,117,98,95,112,95,54,56,0)], [String.fromCharCode(112,97,114,105,116,105,111,110,105,110,103,95,105,95,49,48,48,0),String.fromCharCode(118,95,52,48,95,100,105,109,105,110,115,105,111,110,115,0)], [String.fromCharCode(108,95,55,57,0),String.fromCharCode(111,95,49,49,95,97,99,107,110,111,119,108,101,100,103,109,101,110,116,0)]]);
          let benefitG: Map<any, any> = new Map([[String.fromCharCode(107,95,51,53,95,101,120,116,114,97,115,0),false ], [String.fromCharCode(116,104,97,119,95,97,95,57,55,0),false ]]);
          let klevini = String.fromCharCode(106,115,105,109,100,99,112,117,95,97,95,56,52,0);
          let questt = 1;
         footballG += `${graphH.size}`;
         delegate_djy = [1];
         graphH = new Map([[`${delegate_djy.length}`, delegate_djy.length]]);
         benefitG.set(klevini, delegate_djy.length);
         klevini = `${delegate_djy.length}`;
         questt |= questt >> (Math.min(Math.abs(benefitG.size), 5));
      }
      let countdownX = String.fromCharCode(110,113,52,0) == commonN;
      do {
          let libsentryi = true;
          let eventP = 0;
          let watchnowbg4 = String.fromCharCode(111,95,57,56,95,111,117,112,117,116,0);
          let robotow = String.fromCharCode(118,105,111,108,97,116,105,111,110,95,114,95,55,54,0);
          let umeng9 = true;
         commonN = `${3 / (Math.max(5, dependenciesL.size))}`;
         libsentryi = 79 < watchnowbg4.length || 79 < robotow.length;
         eventP |= robotow.length * watchnowbg4.length;
         umeng9 = watchnowbg4 == String.fromCharCode(88,0) && 66 < eventP;
         if (countdownX) {
            break;
         }
      } while (countdownX && (commonN.length <= 5 && inouttargetred9 != String.fromCharCode(114,0)));
         footballG += `${parseInt(`${inviteF}`) >> (Math.min(Math.abs(1), 4))}`;
      for (let j = 0; j < 3; j++) {
         dependenciesL.set(`${inviteF}`, dependenciesL.size);
      }
       let penaltymatchiconj: Array<any> = [789, 875, 134];
       let redcirclebg3: Array<any> = [516, 797];
      let iconclosewhitez = 5693090 >= redcirclebg3.length;
      do {
         redcirclebg3.push(1 ^ parseInt(`${inviteF}`));
         if (iconclosewhitez) {
            break;
         }
      } while (iconclosewhitez && ((footballG.length << (Math.min(3, redcirclebg3.length))) > 3));
      fast5 *= parseFloat(`${footballG.length}`);
   }
},
}: wawaAwayShow) => {
  const {colors, textVariants, spacing} = useTheme();
  const vodReducer: wawaAgreementFlag = useAppSelector(
    ({vodReducer}: wawaIconsubssuccess) => vodReducer,
  );
  const history = vodReducer.history;
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [totalPage, setTotalPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [results, setResults] = useState<Array<wawaWithCrown>>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const carouselRef = useRef<any>();
  
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [imgRatio, setImgRatio] = useState(1.5);

  const userState = useSelector<wawaPhoneControls>('userReducer');
  const isVip = wawaLibglog.isVip(userState.user);

  useEffect(() => {
    setWidth(Number(Dimensions.get('window').width));

    if (data.carousel.length > 0) {
      Image.getSize(data.carousel[0].carousel_pic_mobile, (w, h) => {
        setImgRatio(w / h);
      });
    }
  }, []);
  
  const handleRefresh = async () => {
       let yellowq: Array<any> = [String.fromCharCode(115,119,105,102,116,95,114,95,52,51,0), String.fromCharCode(115,95,56,50,95,116,111,116,97,108,115,0)];
    let toponG = String.fromCharCode(111,116,111,98,95,108,95,57,0);
    let subtextO = 1;
    let servicey = String.fromCharCode(115,101,110,100,105,110,103,95,115,95,49,54,0);
    let icontransferclubi = String.fromCharCode(99,100,97,116,97,95,98,95,54,55,0);
    let homeinactivey = 3.0;
    let placeholderb = 1;
    let bootsplashB = String.fromCharCode(105,115,108,101,97,112,95,115,95,51,52,0);
    let connectiona = 4.0;
    let shootyesgoalf = String.fromCharCode(100,97,121,95,119,95,57,50,0);
    let giftbuttonO: Array<any> = [String.fromCharCode(98,95,57,50,95,100,105,109,101,110,115,105,116,111,110,115,0), String.fromCharCode(100,95,52,49,95,115,107,101,119,101,100,0)];
    let progressM = 1.0;
    let friends0 = 5;
    let telemetryk = 3;
    let tumbnail1 = String.fromCharCode(98,95,53,49,95,112,114,101,114,101,108,101,97,115,101,0);
   while (shootyesgoalf.length < 4) {
      shootyesgoalf = "1";
      break;
   }
       let schedule8 = 5.0;
       let lefto = String.fromCharCode(103,111,108,100,95,53,95,49,52,0);
       let iconqqz: Array<any> = [String.fromCharCode(107,95,57,52,95,102,97,108,108,111,102,102,0), String.fromCharCode(120,95,54,49,95,114,101,116,117,114,110,0), String.fromCharCode(99,95,57,95,119,101,108,115,100,101,99,100,101,109,111,0)];
       let videocommoni: Array<any> = [231, 902, 447];
       let long__9a = 3.0;
         iconqqz = [parseInt(`${schedule8}`)];
          let awayteamfieldv = String.fromCharCode(109,97,105,110,110,101,116,95,97,95,53,0);
          let unreadK = String.fromCharCode(103,97,112,115,95,110,95,49,57,0);
         schedule8 -= parseFloat(`${iconqqz.length}`);
         awayteamfieldv += `${(unreadK == String.fromCharCode(73,0) ? unreadK.length : awayteamfieldv.length)}`;
         iconqqz = [3];
      for (let o = 0; o < 2; o++) {
         lefto += `${videocommoni.length * 3}`;
      }
      servicey += `${shootyesgoalf.length >> (Math.min(Math.abs(3), 4))}`;
   while ((toponG.length | 2) == 4) {
      toponG = `${subtextO}`;
      break;
   }
   while ((icontransferclubi.length ^ subtextO) > 2 && 2 > (icontransferclubi.length ^ subtextO)) {
      icontransferclubi = `${parseInt(`${progressM}`) % 2}`;
      break;
   }
   while (4.17 <= (connectiona - shootyesgoalf.length) || 5 <= (4 - parseInt(`${connectiona}`))) {
      connectiona *= placeholderb | 2;
      break;
   }

    setIsRefreshing(true);

      shootyesgoalf = `${(bootsplashB == String.fromCharCode(81,0) ? subtextO : bootsplashB.length)}`;
   while (1 > yellowq.length) {
       let frame_dhX = 2.0;
       let rightz = 4.0;
         frame_dhX += parseFloat(`${parseInt(`${rightz}`)}`);
      let statisticsactiveJ = 7226722.0 >= rightz;
      do {
         rightz -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${rightz}`)), 1))}`);
         if (statisticsactiveJ) {
            break;
         }
      } while (statisticsactiveJ && ((frame_dhX - rightz) >= 1.21 || 2.47 >= (1.21 - frame_dhX)));
      while (2.23 <= (frame_dhX / (Math.max(rightz, 9)))) {
          let ajaxN = 5.0;
          let libfbH: Map<any, any> = new Map([[String.fromCharCode(117,95,53,49,95,100,105,115,116,114,105,98,117,116,105,111,110,0),true ], [String.fromCharCode(102,95,56,48,95,103,108,111,98,97,108,116,101,109,0),true ]]);
          let topon5 = String.fromCharCode(107,95,56,53,95,114,111,117,110,100,0);
          let awayplayerW = String.fromCharCode(106,95,53,48,95,104,111,114,105,103,0);
          let manifestZ = String.fromCharCode(108,97,112,110,100,122,95,106,95,53,55,0);
         rightz *= parseFloat(`${parseInt(`${frame_dhX}`)}`);
         ajaxN += parseFloat(`${3 + parseInt(`${ajaxN}`)}`);
         libfbH.set(awayplayerW, 2);
         topon5 += `${manifestZ.length & libfbH.size}`;
         awayplayerW = `${manifestZ.length | topon5.length}`;
         break;
      }
      for (let t = 0; t < 2; t++) {
          let eact2 = String.fromCharCode(115,98,114,101,115,101,114,118,101,95,57,95,53,53,0);
          let basketballdetailsbgA = 3.0;
          let pingP: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,115,95,106,95,54,54,0),464], [String.fromCharCode(98,95,52,51,95,101,120,101,99,0),8]]);
          let othero: Map<any, any> = new Map([[String.fromCharCode(116,101,114,109,105,110,97,116,111,114,95,114,95,49,49,0),String.fromCharCode(98,95,54,55,95,97,99,111,108,111,114,0)], [String.fromCharCode(116,95,55,55,95,106,112,101,103,105,110,116,0),String.fromCharCode(113,95,51,56,95,115,117,112,112,108,101,109,101,110,116,97,108,0)]]);
         frame_dhX /= Math.max(parseFloat(`${parseInt(`${frame_dhX}`) >> (Math.min(Math.abs(pingP.size), 5))}`), 2);
         eact2 += `${(eact2 == String.fromCharCode(118,0) ? eact2.length : parseInt(`${basketballdetailsbgA}`))}`;
         basketballdetailsbgA *= parseFloat(`${eact2.length * 1}`);
         pingP = new Map([[`${basketballdetailsbgA}`, parseInt(`${basketballdetailsbgA}`) * eact2.length]]);
         othero.set(eact2, eact2.length / (Math.max(3, 6)));
      }
      if (1.27 < (frame_dhX * rightz) || (frame_dhX + 1.27) < 1.99) {
         frame_dhX -= parseFloat(`${parseInt(`${rightz}`)}`);
      }
         frame_dhX -= parseFloat(`${parseInt(`${frame_dhX}`) / (Math.max(10, parseInt(`${rightz}`)))}`);
      yellowq = [parseInt(`${frame_dhX}`) % 2];
      break;
   }
      servicey += `${placeholderb}`;
   for (let n = 0; n < 2; n++) {
      yellowq = [giftbuttonO.length | 3];
   }
   for (let c = 0; c < 2; c++) {
      placeholderb %= Math.max(2, parseInt(`${homeinactivey}`));
   }
    await onRefresh(0, true);

      friends0 |= icontransferclubi.length ^ yellowq.length;
   for (let w = 0; w < 1; w++) {
      bootsplashB += `${yellowq.length}`;
   }
   while ((giftbuttonO.length >> (Math.min(Math.abs(2), 5))) >= 4 || 5 >= (2 >> (Math.min(2, bootsplashB.length)))) {
       let arean: Array<any> = [670, 638, 591];
       let borderlessh: Map<any, any> = new Map([[String.fromCharCode(105,95,49,54,95,99,111,108,114,97,109,0),39], [String.fromCharCode(119,95,51,50,95,97,112,112,101,97,114,0),367], [String.fromCharCode(103,108,98,108,95,50,95,56,0),624]]);
       let notificationu: Array<any> = [String.fromCharCode(101,95,53,56,95,100,105,114,101,99,116,100,0), String.fromCharCode(114,101,113,117,105,114,101,95,100,95,56,50,0), String.fromCharCode(100,95,53,56,95,112,114,101,105,110,105,116,0)];
       let typingo = 3.0;
         borderlessh.set(`${notificationu.length}`, notificationu.length | 2);
         arean.push(arean.length);
          let referrerW = 5;
          let star_ = String.fromCharCode(116,95,51,55,95,115,117,109,109,97,114,121,0);
          let suggestionl = false;
         borderlessh = new Map([[star_, referrerW / (Math.max(7, star_.length))]]);
         referrerW *= 2;
      for (let i = 0; i < 2; i++) {
          let whitetickG = false;
          let nativeexO = 3.0;
          let checkboxr = 3;
         typingo += (parseFloat(`${(whitetickG ? 4 : 4) >> (Math.min(Math.abs(1), 5))}`));
         whitetickG = checkboxr > 80;
         nativeexO += checkboxr;
      }
         borderlessh = new Map([[`${notificationu.length}`, parseInt(`${typingo}`) % 2]]);
      for (let i = 0; i < 2; i++) {
          let awayplayerv: Array<any> = [318, 861, 419];
          let roomu = 1.0;
          let libpangleflippedu = false;
         notificationu = [borderlessh.size];
         awayplayerv.push(parseInt(`${roomu}`));
         roomu /= Math.max(4, (parseFloat(`${(libpangleflippedu ? 2 : 3) ^ parseInt(`${roomu}`)}`)));
         libpangleflippedu = roomu <= 56.23;
      }
      while ((typingo + parseFloat(`${notificationu.length}`)) <= 2.92) {
          let libreactnativebloby = String.fromCharCode(110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,95,105,95,54,53,0);
          let scorepopsoundK: Array<any> = [404, 776, 863];
          let rulesQ = String.fromCharCode(109,118,115,101,116,95,116,95,56,50,0);
          let imagemanagerr = true;
         typingo += parseFloat(`${arean.length | 3}`);
         libreactnativebloby = `${3 * libreactnativebloby.length}`;
         scorepopsoundK = [(String.fromCharCode(122,0) == rulesQ ? libreactnativebloby.length : rulesQ.length)];
         imagemanagerr = String.fromCharCode(121,0) == libreactnativebloby;
         break;
      }
         notificationu = [borderlessh.size / 3];
         notificationu = [parseInt(`${typingo}`)];
         arean.push(borderlessh.size % (Math.max(2, parseInt(`${typingo}`))));
      let defaultbasketballbgI = 7965244.0 >= typingo;
      do {
         typingo -= parseFloat(`${2 | notificationu.length}`);
         if (defaultbasketballbgI) {
            break;
         }
      } while (defaultbasketballbgI && ((5 | arean.length) > 2));
          let statsnomoredataR = 0.0;
          let topicO = false;
         notificationu = [notificationu.length * 1];
         statsnomoredataR *= (parseInt(`${statsnomoredataR}`) + (topicO ? 1 : 5));
         topicO = statsnomoredataR == 95.38 || topicO;
      giftbuttonO.push(parseInt(`${typingo}`) % (Math.max(parseInt(`${connectiona}`), 9)));
      break;
   }
       let libimagepipelinej = 5.0;
      for (let t = 0; t < 3; t++) {
         libimagepipelinej -= parseFloat(`${parseInt(`${libimagepipelinej}`)}`);
      }
      for (let z = 0; z < 3; z++) {
         libimagepipelinej += parseFloat(`${parseInt(`${libimagepipelinej}`) + 2}`);
      }
          let searchbarj = true;
          let middleO: Map<any, any> = new Map([[String.fromCharCode(97,95,50,53,95,116,101,115,116,0),String.fromCharCode(115,99,114,101,101,110,99,97,115,116,95,121,95,52,53,0)], [String.fromCharCode(111,95,52,49,95,114,101,113,117,105,117,114,101,115,0),String.fromCharCode(100,95,55,50,95,99,111,110,118,101,114,103,101,110,99,101,0)]]);
         libimagepipelinej *= (parseFloat(`${parseInt(`${libimagepipelinej}`) / (Math.max(7, (searchbarj ? 4 : 2)))}`));
         searchbarj = middleO.size == 27;
         middleO = new Map([[`${middleO.size}`, 3]]);
      homeinactivey += parseInt(`${libimagepipelinej}`);
      placeholderb |= (String.fromCharCode(102,0) == shootyesgoalf ? shootyesgoalf.length : parseInt(`${progressM}`));

    setTimeout(() => {

   if (2 > (bootsplashB.length * 2) && (bootsplashB.length * subtextO) > 2) {
      subtextO >>= Math.min(1, Math.abs(3 - yellowq.length));
   }
   while (5 == (placeholderb >> (Math.min(servicey.length, 5))) || (placeholderb >> (Math.min(servicey.length, 3))) == 5) {
      servicey += `${bootsplashB.length}`;
      break;
   }
   while ((friends0 / 5) <= 4 || 5 <= (friends0 / (Math.max(placeholderb, 9)))) {
       let iconwatchnow8 = String.fromCharCode(115,95,52,49,95,102,105,108,108,105,110,0);
         iconwatchnow8 = `${iconwatchnow8.length}`;
      let subsd = 5130302 >= iconwatchnow8.length;
      do {
         iconwatchnow8 = `${iconwatchnow8.length << (Math.min(iconwatchnow8.length, 1))}`;
         if (subsd) {
            break;
         }
      } while (subsd && (iconwatchnow8.startsWith(iconwatchnow8)));
      while (iconwatchnow8.length > 4) {
         iconwatchnow8 = `${(iconwatchnow8 == String.fromCharCode(95,0) ? iconwatchnow8.length : iconwatchnow8.length)}`;
         break;
      }
      placeholderb /= Math.max(1, 1 / (Math.max(6, yellowq.length)));
      break;
   }
   while (!servicey.startsWith(`${progressM}`)) {
      progressM -= shootyesgoalf.length;
      break;
   }
      connectiona *= 1;
      setActiveIndex(0);

      homeinactivey /= Math.max(4, 3);
      progressM *= giftbuttonO.length ^ friends0;
      homeinactivey *= bootsplashB.length / (Math.max(1, 6));
       let iconchatsendC = String.fromCharCode(100,106,112,101,103,95,106,95,55,50,0);
       let castingi = 3.0;
      while ((iconchatsendC.length % 2) < 2) {
         iconchatsendC = "1";
         break;
      }
         castingi -= parseFloat(`${iconchatsendC.length >> (Math.min(Math.abs(2), 5))}`);
      for (let k = 0; k < 1; k++) {
         iconchatsendC += `${parseInt(`${castingi}`)}`;
      }
         iconchatsendC += `${parseInt(`${castingi}`)}`;
         iconchatsendC += `${(String.fromCharCode(111,0) == iconchatsendC ? parseInt(`${castingi}`) : iconchatsendC.length)}`;
      if ((parseInt(`${castingi}`) + iconchatsendC.length) >= 3 && 3 >= (iconchatsendC.length % (Math.max(3, 3)))) {
          let filedC: Array<any> = [533, 819, 156];
         castingi -= parseFloat(`${filedC.length + 2}`);
      }
      shootyesgoalf += `${bootsplashB.length}`;
      yellowq.push((String.fromCharCode(119,0) == toponG ? toponG.length : friends0));
      if (carouselRef) {

      placeholderb *= (String.fromCharCode(65,0) == servicey ? placeholderb : servicey.length);
      yellowq = [yellowq.length & subtextO];
   while (shootyesgoalf != bootsplashB) {
       let logoutq = String.fromCharCode(104,95,50,50,95,112,114,111,109,111,116,105,110,103,0);
       let referrerA = String.fromCharCode(102,95,49,53,95,114,98,115,112,0);
       let leaguedetailsbg9: Array<any> = [349, 473];
       let register_num = String.fromCharCode(107,95,53,50,95,99,114,111,108,108,0);
       let libjsinspectorV = String.fromCharCode(109,101,109,106,114,110,108,95,55,95,55,50,0);
       let awayplayerm = String.fromCharCode(97,95,52,50,95,119,114,97,112,112,105,110,103,0);
      if (register_num.length < 3) {
          let largeG = false;
          let banner2: Array<any> = [String.fromCharCode(101,121,101,115,95,111,95,52,52,0), String.fromCharCode(105,110,116,101,114,110,97,108,95,52,95,57,56,0), String.fromCharCode(110,95,49,48,48,95,118,111,98,115,117,98,0)];
          let feedbacke = String.fromCharCode(98,111,117,110,100,97,114,121,95,50,95,51,52,0);
          let shootnogoalL: Map<any, any> = new Map([[String.fromCharCode(111,95,51,48,95,116,114,97,110,115,105,116,105,111,110,105,110,103,0),232], [String.fromCharCode(117,110,101,120,112,101,99,116,101,100,95,121,95,56,53,0),245], [String.fromCharCode(98,105,100,105,114,95,116,95,50,55,0),373]]);
          let register_zd = String.fromCharCode(101,95,53,55,95,101,109,111,114,121,0);
         awayplayerm += `${register_num.length | 1}`;
         largeG = String.fromCharCode(116,0) == feedbacke;
         banner2.push(register_zd.length << (Math.min(feedbacke.length, 3)));
         shootnogoalL = new Map([[register_zd, feedbacke.length]]);
      }
      let subinX = 6450547 >= logoutq.length;
      do {
         logoutq += `${3 % (Math.max(7, awayplayerm.length))}`;
         if (subinX) {
            break;
         }
      } while (subinX && (logoutq.startsWith(register_num)));
         libjsinspectorV += `${referrerA.length & 2}`;
          let greyarrowup3 = 4.0;
          let iconmegaphoneT = 3.0;
          let mathF = 4;
         referrerA = `${mathF + libjsinspectorV.length}`;
         greyarrowup3 -= parseInt(`${iconmegaphoneT}`);
         iconmegaphoneT += 3;
         mathF -= parseInt(`${greyarrowup3}`);
      if (logoutq.endsWith(referrerA)) {
         referrerA += `${2 - logoutq.length}`;
      }
          let whiteanimationlivey = String.fromCharCode(104,95,56,51,95,111,118,101,114,115,99,114,111,108,108,0);
          let calendarU: Array<any> = [String.fromCharCode(99,95,55,56,95,99,100,120,108,0), String.fromCharCode(106,95,53,52,95,115,117,98,112,97,99,107,101,116,115,0), String.fromCharCode(102,105,120,116,117,114,101,95,110,95,51,57,0)];
          let pingL = String.fromCharCode(113,117,97,110,116,115,95,102,95,53,57,0);
         logoutq = `${referrerA.length * awayplayerm.length}`;
         whiteanimationlivey += `${calendarU.length | whiteanimationlivey.length}`;
         calendarU.push(calendarU.length % (Math.max(4, whiteanimationlivey.length)));
         pingL += `${(pingL == String.fromCharCode(101,0) ? pingL.length : whiteanimationlivey.length)}`;
         libjsinspectorV = `${3 | logoutq.length}`;
         register_num += `${awayplayerm.length << (Math.min(libjsinspectorV.length, 3))}`;
      for (let t = 0; t < 2; t++) {
          let commonR: Array<any> = [327, 792, 382];
         leaguedetailsbg9.push(libjsinspectorV.length);
         commonR.push(commonR.length / 3);
      }
         register_num += `${referrerA.length << (Math.min(Math.abs(2), 4))}`;
       let nativex = String.fromCharCode(116,95,50,56,95,105,100,102,97,0);
       let text3 = String.fromCharCode(117,110,99,104,97,110,103,101,100,95,101,95,51,50,0);
      bootsplashB += `${yellowq.length}`;
      break;
   }
      placeholderb += parseInt(`${homeinactivey}`);
      toponG = `${parseInt(`${homeinactivey}`) + toponG.length}`;
        setIsRefreshing(false);
        carouselRef?.current?.scrollTo({index: 0, animated: false});
      }
    }, 0);
  };

  // const fetchPlaylist = (page: number) =>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //   ({ pageParam = 1 }) => fetchPlaylist(pageParam),
  
  
  
  
  
  
  
  //       if (nextPage > totalPage && totalPage != 0) {
  
  
  
  
  
  
  
  
  
  
  

  const fetchYingPing = () =>
    wawaHiadCanvas.getHomePages(1000, isVip).then(data => {
      setResults(data.topic_list);
      return data;
    });

  const {data: yingPingList, isFetching: isFetchingYingPing} = useQuery({
    queryKey: ['yingPingList'],
    queryFn: () => fetchYingPing(),
  });

  useEffect(() => {
    onLoad();
  }, []);

  const renderCarousel = useCallback(
    ({item, index}: {item: any; index: number}) => {
      const key = item.is_ads
        ? item.carousel_id + item.carousel_pic_mobile
        : item.carousel_id;
      return (
        <TouchableOpacity
          key={`slider-${key}`}
          onPress={() => {
            dispatch(playVod(item.vod));
            navigation.navigate('播放IOS', {
              vod_id: item.carousel_content_id,
            });
          }}>
          <FastImage
            key={`slider-${key}`}
            style={styles.image}
            source={{
              uri: item.carousel_pic_mobile,
              priority: 'normal',
            }}
            resizeMode={'cover'}
            useFastImage={true}
          />
          <LinearGradient
            colors={['transparent', 'black']}
            start={{x: 0.8, y: 0}}
            end={{x: 0.8, y: 0.9}}
            style={styles.bottomBlur}
          />
          <Text
            style={{
              ...textVariants.bodyBold,
              ...styles.carouselTag,
              color: 'white',
            }}
            numberOfLines={1}>
            {item.carousel_name}
          </Text>
        </TouchableOpacity>
      );
    },
    [],
  );

  const renderContent = useCallback(
    ({item, index}: {item: wawaWithCrown; index: number}) => (
      <View
        style={{
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
        }}>
        { }
        <View key={`${item.topic_name}-${index}`} style={{paddingTop: 10}}>
          <View style={{paddingBottom: 5}}>
            <ShowMoreVodButton
              text={item.topic_name}
              onPress={() => {
                dispatch(viewPlaylistDetails(item));
                navigation.navigate('PlaylistDetail', {
                  topic_id: item.topic_id,
                });
              }}
            />
          </View>
          <VodListVertical vods={item.vod_list} />
        </View>
      </View>
    ),
    [],
  );

  return (
    <View style={{width: width}}>
      {yingPingList ? (
        <FlatList
          style={{paddingBottom: 10}}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              tintColor="#FAC33D"
            />
          }
          ListHeaderComponent={
            <>
              {yingPingList?.carousel[0] && !refreshProp && (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 17,
                    zIndex: 9999,
                  }}>
                  <Carousel
                    ref={carouselRef}
                    loop
                    width={width - spacing.sideOffset - spacing.sideOffset}
                    height={
                      (width - spacing.sideOffset - spacing.sideOffset) /
                      imgRatio
                    }
                    autoPlay={true}
                    data={yingPingList.carousel}
                    scrollAnimationDuration={220}
                    autoPlayInterval={2300}
                    onSnapToItem={index => {
                      setActiveIndex(index);
                    }}
                    onScrollEnd={index => {
                      setActiveIndex(index);
                    }}
                    renderItem={renderCarousel}
                  />
                  <CarouselPagination
                    data={yingPingList.carousel}
                    activeIndex={activeIndex}
                  />
                </View>
              )}
              <View>
                <View style={{gap: spacing.m}}></View>

                {yingPingList &&
                  yingPingList.yingping_list.vod_list.length > 0 && (
                    <View
                      style={{
                        paddingLeft: spacing.sideOffset,
                        paddingRight: spacing.sideOffset,
                        gap: spacing.xxs,
                      }}>
                      <ShowMoreVodButton
                        text={yingPingList.yingping_list.type_name}
                      />
                      {yingPingList.yingping_list.vod_list.map(
                        (item, index) => (
                          <YingPingContainer
                            key={item.vod_id}
                            vod={item}
                            width={width}
                            imgRatio={imgRatio}
                            isSlide={index % 2 !== 0}
                          />
                        ),
                      )}
                    </View>
                  )}

                {/* {data?.yunying &&
                  data.yunying.length > 0 &&
                  data.yunying.map((item, index) => (
                    <View
                      key={item.type_name}
                      style={{
                        paddingLeft: spacing.sideOffset,
                        paddingRight: spacing.sideOffset,
                        gap: spacing.xxs,
                      }}
                    >
                      <View>
                        <ShowMoreVodButton
                          text={item.type_name}
                          onPress={() => {
                            navigation.navigate("片库", {
                              type_id: item.vod_list[0].type_id,
                            });
                          }}
                        />
                      </View>
                      <VodListVertical vods={item.vod_list} />
                    </View>
                  ))} */}

                {yingPingList?.categories &&
                  yingPingList.categories.length > 0 &&
                  yingPingList.categories.map((category, index) => (
                    <View
                      key={`category-${index}`}
                      style={{
                        paddingLeft: spacing.sideOffset,
                        paddingRight: spacing.sideOffset,
                        paddingTop: 5,
                      }}>
                      <View
                        style={{
                          paddingBottom: 5,
                        }}>
                        <ShowMoreVodButton
                          text={category.type_name}
                          onPress={() => {
                            navigation.navigate('片库', {
                              type_id: category.type_id,
                            });
                          }}
                        />
                      </View>
                      <VodListVertical vods={category.vod_list} />
                    </View>
                  ))}
              </View>
            </>
          }
          data={results}
          
          
          
          
          
          initialNumToRender={0}
          onEndReachedThreshold={0.5}
          renderItem={renderContent}
          
          //   <View style={{ ...styles.loading, marginBottom: 60 }}>
          
          
          
          
          

          
          
          
          
          
          
          //       />
          
          
          
          
          
          
          
          
          //       >
          
          //       </Text>
          
          //   </View>
          
        />
      ) : (
        <>
          <View
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <FastImage
              style={{height: 80, width: 80}}
              source={require('@static/images/iconnewsshareDist.gif')}
              resizeMode={'contain'}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default memo(RecommendationHome);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    marginTop: 10,
    zIndex: 99,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 17,
    
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dotStyle: {
    width: 6,
    height: 4,
  },
  activeDotStyle: {
    width: 14,
    height: 4,
  },
  paginationStyle: {
    top: 173,
    height: 20,
  },
  vod_hotlist: {
    height: 99,
    width: 176,
  },
  vod_live_station: {
    height: 90,
    width: 150,
  },
  nav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 10,
  },
  catalogNav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 5,
  },
  vodList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottomBlur: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 75,
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    opacity: 0.8,
  },
  carouselTag: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    marginRight: 16,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  banner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 5,
  },
  icon: {
    color: 'white',
    
    maxWidth: '15%',
    objectFix: 'contain',
  },
});
