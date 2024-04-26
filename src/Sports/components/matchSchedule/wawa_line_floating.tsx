import React, { memo, useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './wawa_hiad_iconnewchat';
import { TouchableOpacity } from 'react-native';
import { formatMatchDate } from '../../utility/utils';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';
import { wawaPhone } from '../../types/wawa_klevin_iconwechat';
import { Url } from '../../middleware/wawa_iconfeedback';
import { useInfiniteQuery } from '@tanstack/react-query';
import wawaLibjsinspector from '../../middleware/wawa_ping';
import MatchSchedule from './wawa_iconwatchnow_bgvipxvod';
import FastImage from '../../../components/common/wawa_iconarrowrightblack';
import { TOPON_BANNER_HEIGHT } from '@utility/wawa_iconpointscore';

interface wawaAwayShow {
  matchTypeID: number;
  status?: number;
  setShowBecomeVIPOverlay: any;
  bgDark?:boolean
}

type wawaFillSlider = {
  date: string | undefined;
  data: wawaPhone | undefined;
};

type wawa_pressure_helper = {
  headers: number[];
  data: wawaFillSlider[];
};

const MatchScheduleList = ({
  matchTypeID,
  status = -1,
  setShowBecomeVIPOverlay,
  bgDark = false
}: wawaAwayShow) => {
  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const latestListDate = useRef<Date | undefined>();
  let flatlistRef = useRef();

  const [isFetchNext, setFetchNext] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const [matches, setMatches] = useState<wawa_pressure_helper>({
    headers: [],
    data: [],
  });

  const getUrl = () => {
       let iconnewssharep = true;
    let collection2 = 2;
    let lighto = String.fromCharCode(107,95,53,51,95,112,101,117,107,101,114,0);
    let sentryV = String.fromCharCode(116,100,108,115,95,100,95,57,53,0);
    let toponj = String.fromCharCode(105,95,49,48,48,95,104,105,103,104,112,97,115,115,0);
    let selectiong = String.fromCharCode(97,95,49,52,95,100,97,105,0);
    let distN = 4.0;
    let icondownimgO = 0;
    let assistj = String.fromCharCode(117,95,49,50,95,101,108,108,105,112,116,105,99,97,108,0);
    let defaultprofilepicM = 3.0;
    let iconeditJ = 2.0;
    let backiconmaskI = 2.0;
   if (5.38 == (distN - 4.65) && (parseFloat(`${icondownimgO}`) - distN) == 4.65) {
      distN /= Math.max(parseFloat(`${1 & icondownimgO}`), 1);
   }
      iconnewssharep = 28 < collection2 && lighto == String.fromCharCode(66,0);
      defaultprofilepicM *= (parseFloat(`${icondownimgO - (iconnewssharep ? 5 : 1)}`));

    let url = '';

   while (2.8 < (defaultprofilepicM / 1.27) || 4 < (2 << (Math.min(2, toponj.length)))) {
      toponj += "2 * collection2";
      break;
   }
   while (toponj.length > 4) {
      toponj = `${sentryV.length}`;
      break;
   }
       let robotoT = String.fromCharCode(119,95,57,51,95,115,116,111,114,105,110,103,0);
      if (!robotoT.includes(`${robotoT.length}`)) {
         robotoT += `${robotoT.length << (Math.min(Math.abs(1), 3))}`;
      }
       let eventM = 3;
      while (robotoT.startsWith(`${eventM}`)) {
         robotoT = `${eventM ^ 1}`;
         break;
      }
      selectiong = `${icondownimgO}`;
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
    

   for (let e = 0; e < 3; e++) {
      distN *= (parseFloat(`${String.fromCharCode(70,0) == lighto ? lighto.length : icondownimgO}`));
   }
   if (4.85 > (defaultprofilepicM / (Math.max(1.32, 6))) && 2 > (3 / (Math.max(8, parseInt(`${defaultprofilepicM}`))))) {
       let profileinactiveJ = String.fromCharCode(114,101,99,101,105,118,101,95,101,95,55,50,0);
       let successZ: Map<any, any> = new Map([[String.fromCharCode(108,95,53,54,95,109,111,100,105,102,105,99,97,116,105,111,110,0),715], [String.fromCharCode(115,95,49,50,95,99,113,117,101,117,101,0),988], [String.fromCharCode(104,114,116,102,95,57,95,49,57,0),369]]);
       let nterstitialy = 5.0;
      let verticalW = successZ.size >= 9519819;
      do {
         successZ.set(`${profileinactiveJ}`, 1);
         if (verticalW) {
            break;
         }
      } while ((successZ.get(`${nterstitialy}`) != null) && verticalW);
         profileinactiveJ += `${2 + profileinactiveJ.length}`;
      if (1 <= (successZ.size << (Math.min(Math.abs(3), 3)))) {
          let carousel2 = 1.0;
          let basketballtrophy5 = true;
          let flyer8 = 0.0;
          let arrowupc = 3;
          let window_xM = String.fromCharCode(117,95,55,57,95,112,114,111,100,115,0);
         successZ = new Map([[`${successZ.size}`, 3 << (Math.min(4, Math.abs(successZ.size)))]]);
         carousel2 += parseFloat(`${arrowupc}`);
         basketballtrophy5 = window_xM.includes(`${arrowupc}`);
         flyer8 /= Math.max(2, parseFloat(`${1 * parseInt(`${flyer8}`)}`));
         window_xM = `${(String.fromCharCode(98,0) == window_xM ? arrowupc : window_xM.length)}`;
      }
          let goall = 4;
          let materialI = true;
         profileinactiveJ += `${3 ^ successZ.size}`;
         goall |= ((materialI ? 4 : 2) >> (Math.min(Math.abs(goall), 1)));
         materialI = !materialI;
         successZ = new Map([[`${nterstitialy}`, 2 % (Math.max(7, parseInt(`${nterstitialy}`)))]]);
       let elementsv = String.fromCharCode(107,95,56,56,95,98,105,111,109,101,116,114,105,99,0);
       let refresha = String.fromCharCode(109,101,97,115,117,114,101,95,113,95,51,48,0);
         profileinactiveJ += `${(profileinactiveJ == String.fromCharCode(70,0) ? elementsv.length : profileinactiveJ.length)}`;
          let iconcurrentmatch2 = 0;
          let routerd: Array<any> = [String.fromCharCode(111,95,53,52,95,112,97,115,115,99,111,100,101,0), String.fromCharCode(111,95,52,48,95,114,101,99,97,108,99,117,108,97,116,105,111,110,0)];
          let baselinek = String.fromCharCode(98,117,103,115,95,56,95,51,51,0);
         successZ = new Map([[`${routerd.length}`, routerd.length]]);
         iconcurrentmatch2 *= 3 | baselinek.length;
         baselinek += `${1 * baselinek.length}`;
       let fileq = String.fromCharCode(101,95,49,95,114,101,115,105,115,116,97,110,99,101,0);
      defaultprofilepicM *= parseFloat(`${collection2 & sentryV.length}`);
   }
   if (2 <= lighto.length) {
       let renewf = 1.0;
       let mintegrall: Array<any> = [989, 210, 403];
       let temperatureB = true;
       let colorsa = true;
         colorsa = mintegrall.length >= 2;
       let positionfieldH = 2.0;
          let iconviewergifa = String.fromCharCode(97,110,97,108,121,122,105,110,103,95,54,95,51,53,0);
         colorsa = temperatureB;
         iconviewergifa += "3";
         renewf += parseFloat(`${parseInt(`${renewf}`)}`);
          let eyecloseX: Array<any> = [String.fromCharCode(105,110,100,101,111,100,97,116,97,95,102,95,55,54,0), String.fromCharCode(103,95,55,52,95,108,101,97,118,101,0)];
         positionfieldH -= 1;
         eyecloseX.push(eyecloseX.length * 3);
      if (1.16 >= (renewf * positionfieldH) && 4.28 >= (positionfieldH + 1.16)) {
         positionfieldH += mintegrall.length;
      }
       let downu: Array<any> = [180, 754, 476];
       let latnD: Array<any> = [197, 365];
       let referrer6: Array<any> = [String.fromCharCode(115,95,54,51,95,109,97,108,108,111,99,122,0), String.fromCharCode(110,111,110,95,116,95,49,57,0), String.fromCharCode(103,101,111,107,101,121,95,57,95,49,53,0)];
         mintegrall = [parseInt(`${positionfieldH}`)];
         mintegrall.push(latnD.length / 1);
         colorsa = 11 == referrer6.length;
      for (let u = 0; u < 1; u++) {
          let libreactperfloggerjniP = String.fromCharCode(116,95,56,57,95,114,101,100,0);
          let annerJ = String.fromCharCode(118,95,55,53,95,102,100,99,116,100,115,112,0);
         mintegrall.push(parseInt(`${renewf}`));
         libreactperfloggerjniP += `${3 | annerJ.length}`;
         annerJ += `${annerJ.length | libreactperfloggerjniP.length}`;
      }
      lighto = `${toponj.length}`;
   }
    

      assistj = `${parseInt(`${distN}`) | 3}`;
   for (let y = 0; y < 3; y++) {
       let defaultlogo6 = true;
       let reactB = String.fromCharCode(114,95,49,56,95,119,105,110,97,114,109,0);
       let hooky = String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,122,95,54,49,0);
         reactB += `${hooky.length}`;
          let hejiy: Map<any, any> = new Map([[String.fromCharCode(98,95,50,53,95,118,101,114,116,0),298], [String.fromCharCode(117,95,52,55,95,110,111,115,105,109,100,0),399]]);
          let dnewsshareW = 5.0;
         hooky += `${1 + reactB.length}`;
         hejiy = new Map([[`${hejiy.size}`, hejiy.size]]);
         dnewsshareW /= Math.max(hejiy.size, 3);
         reactB = `${(2 + (defaultlogo6 ? 4 : 1))}`;
         hooky += `${((defaultlogo6 ? 1 : 4))}`;
      let notificationfillemptyk = hooky.length >= 9789407;
      do {
         hooky += `${(String.fromCharCode(75,0) == hooky ? hooky.length : (defaultlogo6 ? 1 : 4))}`;
         if (notificationfillemptyk) {
            break;
         }
      } while ((defaultlogo6) && notificationfillemptyk);
          let footballtrophyS = String.fromCharCode(115,119,105,122,122,108,105,110,103,95,103,95,52,54,0);
          let refreshborderlessP = String.fromCharCode(100,120,110,100,99,95,109,95,57,49,0);
          let runtimeschedulerv: Map<any, any> = new Map([[String.fromCharCode(103,95,53,49,95,102,116,121,112,0),true ], [String.fromCharCode(100,101,98,108,111,99,107,105,110,103,95,120,95,49,48,48,0),true ]]);
         reactB += `${(String.fromCharCode(109,0) == refreshborderlessP ? runtimeschedulerv.size : refreshborderlessP.length)}`;
         footballtrophyS = `${(footballtrophyS == String.fromCharCode(102,0) ? footballtrophyS.length : footballtrophyS.length)}`;
         defaultlogo6 = reactB.length >= 29;
         reactB += `${((defaultlogo6 ? 2 : 4))}`;
      while (reactB.length >= 1) {
         defaultlogo6 = defaultlogo6 && hooky.length <= 43;
         break;
      }
      defaultprofilepicM += (parseFloat(`${String.fromCharCode(67,0) == reactB ? icondownimgO : reactB.length}`));
   }
   let pausef = 7666989 >= selectiong.length;
   do {
      selectiong = `${parseInt(`${distN}`)}`;
      if (pausef) {
         break;
      }
   } while ((4 == lighto.length) && pausef);
    

      defaultprofilepicM += parseFloat(`${1}`);
   let sellmathbackground_ = 6221038.0 >= defaultprofilepicM;
   do {
       let philippinesO = String.fromCharCode(120,95,54,48,95,115,116,114,105,112,0);
       let turndownb = 3.0;
       let teamdetailsbg0: Map<any, any> = new Map([[String.fromCharCode(100,95,53,49,95,97,99,100,115,112,0),String.fromCharCode(101,95,54,54,95,97,114,114,97,121,115,105,122,101,0)], [String.fromCharCode(108,95,56,48,95,99,104,97,114,116,115,0),String.fromCharCode(100,95,57,56,95,111,114,100,101,114,116,121,112,101,0)]]);
       let complete4 = String.fromCharCode(110,95,55,95,115,116,114,105,110,103,117,116,105,108,115,0);
       let flyerV = String.fromCharCode(100,101,105,110,116,101,114,108,97,99,101,95,119,95,49,53,0);
          let termsk: Array<any> = [String.fromCharCode(111,110,116,97,99,116,95,108,95,52,50,0), String.fromCharCode(119,105,110,116,104,114,101,97,100,95,57,95,54,50,0), String.fromCharCode(102,108,116,112,95,53,95,50,57,0)];
         flyerV = "1";
         termsk.push(termsk.length);
       let yellowvideoliveK = 2;
      let gifgoalbgk = complete4.length <= 8159001;
      do {
          let privacy6 = false;
          let sharedn = 5.0;
          let anner2 = true;
          let iconnotificationnewk = 3.0;
         complete4 += `${2 ^ parseInt(`${turndownb}`)}`;
         privacy6 = !privacy6 && sharedn == 50.91;
         sharedn /= Math.max(1, parseInt(`${iconnotificationnewk}`) ^ 1);
         anner2 = !anner2;
         iconnotificationnewk += parseFloat(`${1 % (Math.max(parseInt(`${iconnotificationnewk}`), 7))}`);
         if (gifgoalbgk) {
            break;
         }
      } while ((philippinesO == String.fromCharCode(48,0)) && gifgoalbgk);
         complete4 += `${yellowvideoliveK}`;
         flyerV += `${yellowvideoliveK >> (Math.min(Math.abs(1), 5))}`;
          let fullr: Array<any> = [701, 869, 70];
         complete4 = `${(flyerV == String.fromCharCode(87,0) ? flyerV.length : complete4.length)}`;
         fullr = [fullr.length >> (Math.min(Math.abs(1), 5))];
         complete4 = "3";
      let trashB = teamdetailsbg0.size >= 5764440;
      do {
         teamdetailsbg0.set(`${turndownb}`, parseInt(`${turndownb}`) << (Math.min(3, Math.abs(yellowvideoliveK))));
         if (trashB) {
            break;
         }
      } while ((5 == (yellowvideoliveK & teamdetailsbg0.size) && 5 == (teamdetailsbg0.size & yellowvideoliveK)) && trashB);
      for (let z = 0; z < 3; z++) {
          let overlayb = false;
          let lightO = String.fromCharCode(112,114,101,101,109,112,104,95,121,95,50,55,0);
          let iconviewerY = String.fromCharCode(108,111,99,107,105,110,103,95,50,95,50,49,0);
         flyerV += "1";
         overlayb = (iconviewerY.length - lightO.length) < 18;
         lightO = `${iconviewerY.length}`;
      }
         flyerV = `${yellowvideoliveK >> (Math.min(Math.abs(teamdetailsbg0.size), 4))}`;
          let iconsharex = String.fromCharCode(111,95,49,54,95,108,101,97,102,0);
          let libturbomodulejsijnib = 1;
          let iconarrowrightblack7 = 2;
         philippinesO += `${libturbomodulejsijnib - philippinesO.length}`;
         iconsharex = `${iconsharex.length}`;
         libturbomodulejsijnib %= Math.max(4, iconarrowrightblack7);
         iconarrowrightblack7 ^= iconsharex.length;
       let imagemanagerr: Map<any, any> = new Map([[String.fromCharCode(99,95,51,52,95,113,115,99,97,108,101,0),327], [String.fromCharCode(103,114,97,112,104,95,112,95,55,50,0),13]]);
          let statisticsinactiveE: Map<any, any> = new Map([[String.fromCharCode(115,119,97,112,112,101,100,95,107,95,56,54,0),false ], [String.fromCharCode(97,95,49,52,95,105,110,118,105,115,105,98,108,101,0),true ]]);
          let interstitialh = String.fromCharCode(115,116,114,102,95,48,95,50,55,0);
          let termsr = 4;
         imagemanagerr = new Map([[`${turndownb}`, parseInt(`${turndownb}`)]]);
         statisticsinactiveE.set(`${interstitialh}`, 2);
         interstitialh += `${statisticsinactiveE.size}`;
         termsr <<= Math.min(3, Math.abs(3 ^ termsr));
         complete4 += `${3 - imagemanagerr.size}`;
       let contextq = String.fromCharCode(98,95,51,48,95,104,119,99,97,112,0);
      defaultprofilepicM /= Math.max((parseFloat(`${complete4 == String.fromCharCode(108,0) ? complete4.length : parseInt(`${defaultprofilepicM}`)}`)), 1);
      if (sellmathbackground_) {
         break;
      }
   } while (sellmathbackground_ && ((5 >> (Math.min(1, toponj.length))) > 3 && 5 > (toponj.length - parseInt(`${defaultprofilepicM}`))));
   for (let h = 0; h < 2; h++) {
       let sharewhiteg = String.fromCharCode(114,95,55,52,95,97,100,100,114,105,110,102,111,0);
       let assistN = 5;
       let configp = String.fromCharCode(115,116,114,109,95,105,95,55,49,0);
       let package_xP = String.fromCharCode(112,95,51,53,95,115,116,114,103,108,111,98,0);
          let dacccfaabfbcbadeebddcabacdffdbD: Array<any> = [500, 19, 556];
          let imagewatchliveh = String.fromCharCode(105,95,53,56,95,99,97,118,108,99,0);
         assistN <<= Math.min(Math.abs(assistN | sharewhiteg.length), 1);
         dacccfaabfbcbadeebddcabacdffdbD.push(imagewatchliveh.length * dacccfaabfbcbadeebddcabacdffdbD.length);
         imagewatchliveh = "2";
         sharewhiteg += `${sharewhiteg.length >> (Math.min(3, configp.length))}`;
      if (sharewhiteg.startsWith(package_xP)) {
         sharewhiteg += `${sharewhiteg.length}`;
      }
      for (let a = 0; a < 2; a++) {
          let tooltipsZ = 4;
         configp += "1";
         tooltipsZ <<= Math.min(Math.abs(2 >> (Math.min(3, Math.abs(tooltipsZ)))), 4);
      }
          let mapping_ = String.fromCharCode(101,95,56,48,95,115,99,111,112,101,105,100,0);
          let chartP: Map<any, any> = new Map([[String.fromCharCode(101,113,117,105,118,97,108,101,110,116,95,97,95,55,51,0),703], [String.fromCharCode(111,95,49,53,95,104,111,108,101,0),875]]);
         assistN &= 2 ^ sharewhiteg.length;
         mapping_ = `${chartP.size}`;
         chartP = new Map([[`${chartP.size}`, mapping_.length << (Math.min(3, Math.abs(chartP.size)))]]);
      sentryV += `${collection2 % 1}`;
   }
    

   let weibos = sentryV.length <= 7260758;
   do {
      sentryV += `${parseInt(`${distN}`) / 1}`;
      if (weibos) {
         break;
      }
   } while (weibos && (1 == (collection2 << (Math.min(Math.abs(1), 2))) || (sentryV.length << (Math.min(3, Math.abs(collection2)))) == 1));
   if (4 == (1 + assistj.length) && (assistj.length | 1) == 2) {
      defaultprofilepicM /= Math.max(5, parseFloat(`${toponj.length / 3}`));
   }
      icondownimgO &= icondownimgO ^ assistj.length;
    

       let hoverS = String.fromCharCode(114,101,103,101,110,101,114,97,116,101,95,112,95,57,50,0);
      while (hoverS.startsWith(`${hoverS.length}`)) {
         hoverS += `${hoverS.length}`;
         break;
      }
      if (hoverS.endsWith(`${hoverS.length}`)) {
          let uimanagerU: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,121,115,116,101,109,95,52,95,49,51,0),String.fromCharCode(116,114,97,110,115,105,101,110,116,95,118,95,54,56,0)], [String.fromCharCode(121,95,57,48,95,98,97,99,107,114,111,117,110,100,0),String.fromCharCode(100,95,54,51,95,115,101,114,105,97,108,105,122,97,98,108,101,0)]]);
         hoverS = `${uimanagerU.size}`;
      }
         hoverS = `${hoverS.length}`;
      defaultprofilepicM /= Math.max(parseFloat(`${3}`), 1);
   for (let f = 0; f < 1; f++) {
      icondownimgO %= Math.max(3, lighto.length * icondownimgO);
   }
      assistj += `${selectiong.length}`;
    

   if ((collection2 >> (Math.min(Math.abs(2), 3))) < 2 && (icondownimgO >> (Math.min(Math.abs(2), 5))) < 4) {
      collection2 *= parseInt(`${defaultprofilepicM}`);
   }
       let mbsplashy = 3.0;
       let notificationfilledY = false;
       let flyerD = false;
         mbsplashy *= parseFloat(`${2}`);
          let defaultlogoL: Array<any> = [41, 443];
          let penaltyshootnogoalr = false;
          let configurex = String.fromCharCode(101,122,111,115,95,103,95,53,57,0);
         flyerD = !notificationfilledY;
         defaultlogoL = [defaultlogoL.length << (Math.min(Math.abs(3), 1))];
         penaltyshootnogoalr = !penaltyshootnogoalr;
         configurex = `${1 - defaultlogoL.length}`;
         flyerD = mbsplashy <= 7.54 || !notificationfilledY;
         notificationfilledY = 61.70 < mbsplashy;
      let u_unlockw = 5394207.0 <= mbsplashy;
      do {
          let dialogQ = true;
          let with_pnX = String.fromCharCode(108,101,98,110,95,103,95,52,48,0);
          let selectedS = String.fromCharCode(109,111,118,105,110,103,95,56,95,54,57,0);
          let iconlogoutN = String.fromCharCode(100,101,115,116,114,117,99,116,111,114,95,111,95,55,48,0);
          let homeiconi = String.fromCharCode(119,95,50,53,95,99,111,110,115,117,109,101,100,0);
         mbsplashy += (parseFloat(`${(dialogQ ? 2 : 2)}`));
         dialogQ = iconlogoutN == homeiconi;
         with_pnX = `${(with_pnX == String.fromCharCode(70,0) ? with_pnX.length : selectedS.length)}`;
         selectedS += `${(String.fromCharCode(117,0) == homeiconi ? iconlogoutN.length : homeiconi.length)}`;
         if (u_unlockw) {
            break;
         }
      } while (u_unlockw && (flyerD && 3.91 == (mbsplashy + 5.28)));
          let webviewl = String.fromCharCode(103,95,53,52,95,112,97,114,97,109,101,116,101,114,0);
          let optionsh = 2.0;
          let loadingY: Array<any> = [721, 227];
         notificationfilledY = (38 >= ((!notificationfilledY ? 38 : loadingY.length) * loadingY.length));
         webviewl = `${2 & webviewl.length}`;
         optionsh += (parseFloat(`${webviewl == String.fromCharCode(83,0) ? parseInt(`${optionsh}`) : webviewl.length}`));
         mbsplashy /= Math.max((parseFloat(`${(flyerD ? 4 : 3) | (notificationfilledY ? 3 : 5)}`)), 2);
      while (!notificationfilledY) {
          let feedbacko = String.fromCharCode(97,115,112,101,99,116,115,95,97,95,49,53,0);
          let arrowdownv = String.fromCharCode(98,97,99,107,103,114,111,117,110,100,105,110,103,95,50,95,57,56,0);
         flyerD = (arrowdownv.length / (Math.max(10, feedbacko.length))) >= 54;
         break;
      }
         flyerD = flyerD || mbsplashy < 31.2;
      defaultprofilepicM -= parseFloat(`${1 % (Math.max(5, parseInt(`${defaultprofilepicM}`)))}`);
      icondownimgO += parseInt(`${defaultprofilepicM}`) / (Math.max(toponj.length, 6));
    

   for (let l = 0; l < 3; l++) {
      collection2 %= Math.max(1, 2);
   }
   let clocky = defaultprofilepicM >= 8598471.0;
   do {
      defaultprofilepicM += parseFloat(`${selectiong.length >> (Math.min(5, toponj.length))}`);
      if (clocky) {
         break;
      }
   } while (clocky && ((parseFloat(`${sentryV.length}`) + defaultprofilepicM) == 1.56 || (parseInt(`${defaultprofilepicM}`) + sentryV.length) == 2));
   let mapbufferz = String.fromCharCode(122,97,119,103,103,103,103,98,98,108,0) == assistj;
   do {
      assistj = `${toponj.length}`;
      if (mapbufferz) {
         break;
      }
   } while ((iconnewssharep && assistj.length > 2) && mapbufferz);
    return Url.matches11 + url;
  };

  const url = getUrl(); 

  const fetchData = useCallback(async () => {
       let bannerd = String.fromCharCode(116,95,55,51,95,105,112,104,111,110,101,0);
    let login0: Array<any> = [11, 724];
    let leagueD = true;
    let mbjscommonM = true;
    let tempk = 3.0;
    let albumC = 2.0;
    let containers = true;
    let predictionarrowE: Map<any, any> = new Map([[String.fromCharCode(100,97,105,108,121,95,122,95,52,48,0),717], [String.fromCharCode(118,111,112,101,110,95,105,95,56,55,0),549]]);
    let chinaz: Map<any, any> = new Map([[String.fromCharCode(99,95,52,52,95,102,105,108,108,105,110,103,0),675], [String.fromCharCode(115,101,99,107,101,121,95,50,95,57,48,0),385]]);
    let controlsM = String.fromCharCode(122,95,51,51,95,105,100,101,110,116,105,116,105,121,0);
   let livenodatabgimgC = String.fromCharCode(101,105,116,121,101,99,53,112,54,101,0) == bannerd;
   do {
      bannerd = `${(predictionarrowE.size | (containers ? 4 : 1))}`;
      if (livenodatabgimgC) {
         break;
      }
   } while ((bannerd.length <= 3) && livenodatabgimgC);

    const data = (await wawaLibjsinspector.call(url, {}, 'GET')).data

       let iconarrowrightblackh = String.fromCharCode(122,95,53,95,110,101,119,108,105,110,101,115,0);
         iconarrowrightblackh = `${iconarrowrightblackh.length}`;
       let telegramq = String.fromCharCode(112,111,114,116,97,105,116,95,110,95,49,54,0);
       let edito = String.fromCharCode(104,95,54,95,102,101,110,99,0);
          let predictionU = 5;
         iconarrowrightblackh += `${predictionU & edito.length}`;
      bannerd = `${chinaz.size}`;
    

      containers = albumC > 41.7;
    if (data !== undefined) {

   if (4.37 >= tempk || (4.37 + tempk) >= 5.5) {
      leagueD = (leagueD ? containers : !leagueD);
   }
      const dates = Object.keys(data);

   let codeY = bannerd.length >= 5075684;
   do {
       let utilsv = String.fromCharCode(115,105,109,117,108,116,97,110,101,111,117,115,95,113,95,52,56,0);
       let iconcurrentmatchX = String.fromCharCode(97,95,51,53,95,114,111,117,116,101,115,0);
      if (5 == utilsv.length) {
         iconcurrentmatchX += `${(iconcurrentmatchX == String.fromCharCode(73,0) ? iconcurrentmatchX.length : utilsv.length)}`;
      }
      for (let r = 0; r < 2; r++) {
          let episodesY = 0.0;
          let predictionactivee = 2.0;
          let shootnogoalx: Map<any, any> = new Map([[String.fromCharCode(121,95,57,51,95,118,108,99,111,100,101,99,0),439], [String.fromCharCode(99,102,102,116,98,95,48,95,57,51,0),803], [String.fromCharCode(108,111,119,101,114,95,53,95,49,50,0),40]]);
          let awayplayerd = 2.0;
         iconcurrentmatchX += `${iconcurrentmatchX.length % (Math.max(1, 5))}`;
         episodesY += 3 << (Math.min(Math.abs(parseInt(`${predictionactivee}`)), 5));
         predictionactivee /= Math.max(3, parseFloat(`${1 ^ shootnogoalx.size}`));
         shootnogoalx = new Map([[`${episodesY}`, parseInt(`${episodesY}`)]]);
         awayplayerd += parseInt(`${predictionactivee}`) * parseInt(`${awayplayerd}`);
      }
      if (iconcurrentmatchX.length >= utilsv.length) {
         utilsv += `${utilsv.length >> (Math.min(iconcurrentmatchX.length, 4))}`;
      }
         iconcurrentmatchX += "3";
      if (utilsv != iconcurrentmatchX) {
         iconcurrentmatchX += `${utilsv.length}`;
      }
          let basketballhometeamo = String.fromCharCode(98,95,55,55,95,108,97,98,101,108,115,0);
          let private_kD = 4.0;
          let pangleq = 2.0;
         utilsv += `${(String.fromCharCode(71,0) == utilsv ? basketballhometeamo.length : utilsv.length)}`;
         basketballhometeamo += "3";
         private_kD -= parseFloat(`${parseInt(`${pangleq}`) / 3}`);
         pangleq -= parseFloat(`${parseInt(`${private_kD}`) % (Math.max(parseInt(`${pangleq}`), 8))}`);
      bannerd += `${parseInt(`${tempk}`) * 1}`;
      if (codeY) {
         break;
      }
   } while ((leagueD && bannerd.length <= 3) && codeY);
      let lst: wawaFillSlider[] = isFetchNext ? matches.data : [];
      let headers = isFetchNext ? matches.headers : [];
      let count = lst.length;

   for (let q = 0; q < 2; q++) {
       let member2 = String.fromCharCode(105,95,49,49,95,112,105,99,116,0);
       let agreementA = String.fromCharCode(105,95,49,48,95,114,97,100,105,117,115,0);
       let iconcurrentmatchY = 3.0;
       let twitterw = 1.0;
       let middlebrightnessC: Map<any, any> = new Map([[String.fromCharCode(114,95,51,53,95,97,114,99,104,0),337], [String.fromCharCode(100,95,54,55,95,107,105,99,107,0),572], [String.fromCharCode(115,108,117,103,95,114,95,56,55,0),227]]);
         iconcurrentmatchY /= Math.max(parseFloat(`${1}`), 2);
         member2 = `${3 | agreementA.length}`;
      let liveshare_ = agreementA.length >= 8146797;
      do {
          let componentsi = 4;
          let indicator5: Array<any> = [String.fromCharCode(112,97,99,107,101,116,95,107,95,55,54,0), String.fromCharCode(105,110,116,112,95,99,95,51,51,0)];
          let adultZ = String.fromCharCode(105,95,53,95,115,108,105,100,97,98,108,101,0);
         agreementA = "2";
         componentsi *= componentsi;
         indicator5.push(3);
         adultZ = `${indicator5.length & adultZ.length}`;
         if (liveshare_) {
            break;
         }
      } while ((member2 == String.fromCharCode(90,0)) && liveshare_);
         middlebrightnessC = new Map([[`${middlebrightnessC.size}`, middlebrightnessC.size]]);
      for (let j = 0; j < 2; j++) {
          let m_centerF = String.fromCharCode(105,110,116,101,114,115,101,99,116,105,111,110,95,51,95,51,52,0);
          let giftbuttonA: Array<any> = [208, 890];
          let downarrowf = String.fromCharCode(99,105,112,104,101,114,98,121,110,97,109,101,95,55,95,52,55,0);
          let modulet: Map<any, any> = new Map([[String.fromCharCode(97,112,112,114,111,118,101,95,121,95,54,49,0),983], [String.fromCharCode(104,95,53,55,95,112,108,97,99,101,104,111,108,100,101,114,115,0),844], [String.fromCharCode(110,101,119,108,105,110,101,115,95,104,95,51,53,0),892]]);
          let activeq: Map<any, any> = new Map([[String.fromCharCode(118,95,51,52,95,118,97,114,105,97,110,99,101,0),true ], [String.fromCharCode(97,95,50,53,95,114,116,109,112,99,114,121,112,116,0),true ], [String.fromCharCode(113,95,56,95,108,111,115,115,121,0),false ]]);
         twitterw -= middlebrightnessC.size;
         m_centerF += `${3 & downarrowf.length}`;
         giftbuttonA.push(1);
         downarrowf += `${modulet.size * 1}`;
         modulet.set(`${downarrowf}`, activeq.size);
         activeq = new Map([[downarrowf, m_centerF.length]]);
      }
       let gemfileR = 0;
          let philippinesg: Map<any, any> = new Map([[String.fromCharCode(114,95,57,57,95,101,110,118,101,108,111,112,101,0),3], [String.fromCharCode(100,95,57,51,95,112,114,111,112,111,115,97,108,115,0),844], [String.fromCharCode(115,104,111,114,116,116,101,114,109,95,51,95,52,57,0),653]]);
          let crosst = String.fromCharCode(103,111,101,114,108,105,95,53,95,50,53,0);
         iconcurrentmatchY /= Math.max(parseFloat(`${3}`), 3);
         philippinesg.set(crosst, philippinesg.size * 3);
         crosst = `${crosst.length}`;
      for (let y = 0; y < 3; y++) {
         iconcurrentmatchY -= parseFloat(`${agreementA.length - parseInt(`${iconcurrentmatchY}`)}`);
      }
      let forwardS = 8337844 <= gemfileR;
      do {
         gemfileR *= agreementA.length;
         if (forwardS) {
            break;
         }
      } while ((!agreementA.includes(`${gemfileR}`)) && forwardS);
      if (1.2 == (twitterw * 3.54) && (member2.length * twitterw) == 3.54) {
         twitterw += member2.length;
      }
      let policyW = twitterw <= 6446005.0;
      do {
         twitterw /= Math.max(1, parseInt(`${twitterw}`) - 3);
         if (policyW) {
            break;
         }
      } while ((iconcurrentmatchY >= 3.65) && policyW);
      for (let q = 0; q < 2; q++) {
          let lessB = false;
          let inactives = 3;
          let libswscalew = 0.0;
          let jingdongz = 2.0;
         middlebrightnessC.set(`${libswscalew}`, parseInt(`${libswscalew}`));
         lessB = 18.75 > jingdongz;
         inactives -= inactives / 2;
         jingdongz -= (parseFloat(`${(lessB ? 1 : 5) ^ parseInt(`${jingdongz}`)}`));
      }
      let reactnativeultimatelistviewF = iconcurrentmatchY <= 6265910.0;
      do {
         iconcurrentmatchY *= (parseFloat(`${String.fromCharCode(102,0) == member2 ? member2.length : middlebrightnessC.size}`));
         if (reactnativeultimatelistviewF) {
            break;
         }
      } while ((1.14 >= iconcurrentmatchY) && reactnativeultimatelistviewF);
         twitterw += 2;
      if ((agreementA.length - parseInt(`${iconcurrentmatchY}`)) == 4) {
          let searchw = String.fromCharCode(103,95,54,52,95,115,116,114,105,114,101,112,108,97,99,101,0);
          let button2 = 5.0;
          let emoji1 = String.fromCharCode(109,95,53,48,95,116,119,105,100,100,108,101,115,0);
          let statsnomoredatag = String.fromCharCode(102,114,97,109,101,104,97,115,104,95,103,95,49,49,0);
         agreementA += `${(searchw == String.fromCharCode(69,0) ? parseInt(`${twitterw}`) : searchw.length)}`;
         button2 -= 3 + statsnomoredatag.length;
         emoji1 += `${parseInt(`${button2}`) * emoji1.length}`;
         statsnomoredatag += `${emoji1.length}`;
      }
      predictionarrowE = new Map([[`${leagueD}`, (2 << (Math.min(1, Math.abs((leagueD ? 3 : 5)))))]]);
   }
      if (latestListDate.current === undefined) {

       let libffmpegkitU = 3.0;
         libffmpegkitU /= Math.max(2, parseFloat(`${parseInt(`${libffmpegkitU}`)}`));
      for (let k = 0; k < 1; k++) {
         libffmpegkitU -= parseFloat(`${parseInt(`${libffmpegkitU}`)}`);
      }
         libffmpegkitU *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${libffmpegkitU}`)), 4))}`);
      predictionarrowE.set(`${login0.length}`, 1 & predictionarrowE.size);
        latestListDate.current = new Date(dates[dates.length - 1]);
      }
      if (status <= 2) {

      containers = leagueD;
        latestListDate.current = new Date(
          latestListDate.current.getTime() + 86400000,
        );
      } else {

   let topic_ = predictionarrowE.size <= 8155656;
   do {
       let connectionD: Map<any, any> = new Map([[String.fromCharCode(100,95,54,53,95,114,101,115,121,110,99,0),false ], [String.fromCharCode(119,95,55,48,95,114,97,99,105,110,103,0),true ]]);
       let mbridgem = String.fromCharCode(99,97,112,105,116,97,108,105,122,101,95,105,95,52,51,0);
       let related8 = 3.0;
       let libruntimeexecutorv = 0.0;
       let malaysiad = 0.0;
          let uploadb = 3;
          let dropdownC = false;
         mbridgem += `${parseInt(`${libruntimeexecutorv}`) | 2}`;
         uploadb -= uploadb;
         dropdownC = !dropdownC && 5 <= uploadb;
      while (3 < (connectionD.size % (Math.max(2, 4))) || (2 % (Math.max(3, mbridgem.length))) < 2) {
         mbridgem += `${connectionD.size << (Math.min(mbridgem.length, 3))}`;
         break;
      }
      while (1.40 <= (libruntimeexecutorv / (Math.max(3.39, 4)))) {
         libruntimeexecutorv *= (parseFloat(`${mbridgem == String.fromCharCode(104,0) ? parseInt(`${related8}`) : mbridgem.length}`));
         break;
      }
      while ((malaysiad + 3) == 2.58) {
         libruntimeexecutorv *= parseFloat(`${2 - parseInt(`${related8}`)}`);
         break;
      }
      if (connectionD.size > 1) {
          let iconsaveimageN = String.fromCharCode(98,95,51,56,95,99,97,114,101,102,117,108,108,121,0);
          let projectO = 3;
          let videocommonQ = 4;
          let iconarrowrightorangej = 3;
          let libpangleflippedu = 0.0;
         mbridgem += `${3 << (Math.min(Math.abs(videocommonQ), 4))}`;
         iconsaveimageN += `${projectO << (Math.min(Math.abs(3), 5))}`;
         projectO ^= iconsaveimageN.length >> (Math.min(Math.abs(3), 1));
         videocommonQ &= 1 ^ iconsaveimageN.length;
         iconarrowrightorangej %= Math.max(3, 4);
         libpangleflippedu += parseFloat(`${3 + projectO}`);
      }
          let downf = true;
          let closeM = String.fromCharCode(98,95,52,52,95,99,116,120,105,100,120,105,110,99,0);
         libruntimeexecutorv -= (parseFloat(`${2 & (downf ? 4 : 3)}`));
         downf = closeM == closeM;
      let weather6 = connectionD.size <= 9699867;
      do {
          let signinupW = String.fromCharCode(97,101,118,97,108,95,113,95,50,56,0);
          let librrc_ = 0.0;
          let tailG = 4;
         connectionD.set(`${related8}`, 3 ^ parseInt(`${related8}`));
         signinupW += `${3 ^ signinupW.length}`;
         librrc_ -= tailG * parseInt(`${librrc_}`);
         tailG %= Math.max(5, signinupW.length - parseInt(`${librrc_}`));
         if (weather6) {
            break;
         }
      } while (weather6 && ((connectionD.size % 3) == 1));
       let alertm = String.fromCharCode(102,97,97,110,100,99,116,95,53,95,51,51,0);
       let iconchatsendR = String.fromCharCode(122,95,57,51,95,116,114,101,97,100,0);
      while (4 >= (iconchatsendR.length >> (Math.min(Math.abs(3), 5)))) {
         iconchatsendR = `${iconchatsendR.length | alertm.length}`;
         break;
      }
      let binddatasA = libruntimeexecutorv <= 9052166.0;
      do {
         libruntimeexecutorv /= Math.max(parseFloat(`${iconchatsendR.length}`), 5);
         if (binddatasA) {
            break;
         }
      } while ((4.77 >= (libruntimeexecutorv + 4.24)) && binddatasA);
         iconchatsendR = `${3 ^ connectionD.size}`;
      let fastH = related8 >= 7502245.0;
      do {
         related8 -= parseFloat(`${parseInt(`${malaysiad}`)}`);
         if (fastH) {
            break;
         }
      } while (fastH && (libruntimeexecutorv > 1.29));
         related8 -= parseFloat(`${1}`);
         iconchatsendR += "2";
          let gemfilei = 3.0;
          let stepP: Map<any, any> = new Map([[String.fromCharCode(101,112,104,101,109,101,114,97,108,95,114,95,57,55,0),177], [String.fromCharCode(118,95,56,50,95,104,97,115,104,105,110,105,116,0),807], [String.fromCharCode(103,95,51,48,95,100,120,116,111,114,121,0),993]]);
          let mutedc = true;
         related8 /= Math.max(parseFloat(`${1 % (Math.max(4, connectionD.size))}`), 4);
         gemfilei -= parseFloat(`${parseInt(`${gemfilei}`) / (Math.max(3, stepP.size))}`);
         stepP.set(`${gemfilei}`, 2);
         mutedc = gemfilei < 26.2;
      predictionarrowE.set(`${leagueD}`, connectionD.size);
      if (topic_) {
         break;
      }
   } while (topic_ && ((predictionarrowE.size / (Math.max(3, 10))) == 4 || (3 + predictionarrowE.size) == 4));
        latestListDate.current = new Date(
          latestListDate.current.getTime() - 86400000,
        );
      }
      for (const date of dates) {

   while (login0.length >= 5) {
      chinaz = new Map([[bannerd, bannerd.length / 1]]);
      break;
   }
        const dateDate = new Date(date)

      leagueD = mbjscommonM;
        const now = new Date()

      leagueD = (((!mbjscommonM ? login0.length : 22) % (Math.max(login0.length, 3))) <= 22);
        const sevenDaysBefore = new Date(now.valueOf() - 7 * 24 * 60 * 60 * 1000)

      predictionarrowE = new Map([[`${leagueD}`, bannerd.length]]);
        const sevenDaysAfter = new Date(now.valueOf() + 7 * 24 * 60 * 60 * 1000)

   let indicatorI = 5723895.0 >= tempk;
   do {
      tempk -= (bannerd.length * (containers ? 4 : 3));
      if (indicatorI) {
         break;
      }
   } while ((bannerd.startsWith(`${tempk}`)) && indicatorI);

        if (dateDate < sevenDaysBefore || dateDate > sevenDaysAfter) continue

        lst.push({ date: formatMatchDate(date), data: undefined });
        headers.push(count);

   while (!Array.from(predictionarrowE.values()).includes(tempk)) {
       let reviewk = 5.0;
         reviewk += parseFloat(`${parseInt(`${reviewk}`) & 3}`);
      if (4.15 >= (reviewk * 5.21)) {
         reviewk += parseFloat(`${parseInt(`${reviewk}`) * 1}`);
      }
         reviewk *= parseFloat(`${parseInt(`${reviewk}`)}`);
      predictionarrowE.set(`${leagueD}`, (parseInt(`${reviewk}`) + (leagueD ? 2 : 2)));
      break;
   }
        count += 1;
        data[date].forEach((element: wawaPhone) => {
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
    item: { date: string | undefined; data: wawaPhone | undefined };
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
       let fastforwardv = String.fromCharCode(108,95,56,50,95,116,104,101,111,114,97,0);
    let whitesmalltickm: Array<any> = [637, 129];
    let countdown_ = String.fromCharCode(108,105,110,101,115,105,122,101,95,52,95,51,57,0);
    let kickm = 5.0;
    let classesU = 3.0;
    let pingV = String.fromCharCode(105,95,57,49,95,103,97,109,109,97,118,97,108,0);
    let stylez = String.fromCharCode(119,95,50,53,95,114,101,115,111,108,118,101,114,0);
    let defaultpredictionprofiler = false;
    let libfabricjnin: Map<any, any> = new Map([[String.fromCharCode(115,95,55,50,95,99,120,100,97,116,97,0),815], [String.fromCharCode(113,117,111,116,101,100,95,118,95,57,49,0),786], [String.fromCharCode(121,95,49,50,95,108,111,110,103,101,115,116,0),900]]);
    let mutedU = String.fromCharCode(101,95,49,55,95,98,97,99,107,103,114,111,117,110,100,115,0);
      defaultpredictionprofiler = countdown_.length == kickm;
      classesU += parseInt(`${classesU}`) >> (Math.min(whitesmalltickm.length, 4));
       let arrowrightm = String.fromCharCode(116,105,109,101,105,110,116,101,114,118,97,108,95,114,95,55,49,0);
      for (let p = 0; p < 2; p++) {
         arrowrightm += `${arrowrightm.length}`;
      }
         arrowrightm += `${arrowrightm.length}`;
       let vcopy_lkT = 2.0;
      countdown_ = `${1 & whitesmalltickm.length}`;
       let largesoundx = String.fromCharCode(99,104,114,111,109,97,109,99,95,111,95,53,54,0);
      if (largesoundx == largesoundx) {
         largesoundx += `${largesoundx.length}`;
      }
      let neonV = String.fromCharCode(107,99,113,54,102,120,0) == largesoundx;
      do {
          let rootj = String.fromCharCode(117,95,52,55,95,105,109,109,101,100,105,97,116,101,0);
          let mbbanner7 = String.fromCharCode(116,95,57,95,100,101,118,105,99,101,0);
          let libfby = String.fromCharCode(99,111,109,112,101,110,115,97,116,101,95,106,95,52,56,0);
         largesoundx += "1";
         rootj = "1";
         mbbanner7 = `${rootj.length << (Math.min(Math.abs(2), 1))}`;
         libfby += `${rootj.length + libfby.length}`;
         if (neonV) {
            break;
         }
      } while ((2 == largesoundx.length) && neonV);
      for (let n = 0; n < 1; n++) {
         largesoundx = "2";
      }
      defaultpredictionprofiler = fastforwardv.length < 69;
       let smallorangemand = String.fromCharCode(116,104,101,111,114,97,95,110,95,56,55,0);
       let b_animation0 = String.fromCharCode(118,95,50,56,95,115,108,105,99,101,97,110,103,108,101,0);
          let profileframei = 5.0;
          let appss = 2;
         b_animation0 += `${(String.fromCharCode(115,0) == smallorangemand ? smallorangemand.length : b_animation0.length)}`;
         profileframei -= parseInt(`${profileframei}`);
         appss |= 2 | appss;
      let short_qN = b_animation0.length <= 5934926;
      do {
         b_animation0 = `${3 % (Math.max(10, smallorangemand.length))}`;
         if (short_qN) {
            break;
         }
      } while (short_qN && (smallorangemand.includes(`${b_animation0.length}`)));
         b_animation0 += `${(String.fromCharCode(51,0) == smallorangemand ? smallorangemand.length : b_animation0.length)}`;
      let privilegeX = smallorangemand.length >= 4943859;
      do {
         smallorangemand = `${smallorangemand.length}`;
         if (privilegeX) {
            break;
         }
      } while ((b_animation0.length < smallorangemand.length) && privilegeX);
          let toponG = 4.0;
         b_animation0 = "2";
         toponG -= parseInt(`${toponG}`) ^ parseInt(`${toponG}`);
      while (2 < smallorangemand.length || b_animation0 != String.fromCharCode(83,0)) {
         b_animation0 += "2";
         break;
      }
      whitesmalltickm.push(parseInt(`${classesU}`));
      defaultpredictionprofiler = stylez.length <= 79 || String.fromCharCode(73,0) == pingV;
   while (!fastforwardv.includes(pingV)) {
      fastforwardv = `${(fastforwardv == String.fromCharCode(50,0) ? whitesmalltickm.length : fastforwardv.length)}`;
      break;
   }

    setShowLoading(true)
    flatlistRef?.current?.scrollToOffset({animated:false, offset:0})
    setTimeout(() => {

   for (let i = 0; i < 1; i++) {
      fastforwardv += `${whitesmalltickm.length % (Math.max(pingV.length, 1))}`;
   }
      whitesmalltickm = [(String.fromCharCode(70,0) == fastforwardv ? libfabricjnin.size : fastforwardv.length)];
       let sportsn = 4;
       let abidetectU = String.fromCharCode(111,95,53,48,95,103,114,97,121,115,99,97,108,101,0);
       let volumeE = 2.0;
         abidetectU = `${2 + abidetectU.length}`;
          let launchT: Map<any, any> = new Map([[String.fromCharCode(106,95,51,49,95,104,97,100,100,0),611], [String.fromCharCode(112,101,97,107,115,95,104,95,51,50,0),889]]);
          let templateprocessorj = String.fromCharCode(119,95,49,57,95,109,100,116,97,0);
          let loadingK = String.fromCharCode(112,116,105,111,110,115,95,99,95,49,50,0);
         abidetectU += `${loadingK.length + templateprocessorj.length}`;
         launchT = new Map([[`${launchT.size}`, 3 / (Math.max(4, launchT.size))]]);
         templateprocessorj += "3";
         abidetectU = `${1 * sportsn}`;
         sportsn &= sportsn & abidetectU.length;
      while (3.59 <= volumeE) {
         sportsn -= parseInt(`${volumeE}`);
         break;
      }
      if ((sportsn - abidetectU.length) <= 1 || (abidetectU.length - sportsn) <= 1) {
         sportsn -= abidetectU.length ^ parseInt(`${volumeE}`);
      }
      while (1 <= (abidetectU.length & 4)) {
          let tempnodatagifI: Map<any, any> = new Map([[String.fromCharCode(97,100,111,112,116,101,100,95,54,95,53,50,0),false ], [String.fromCharCode(106,95,57,0),false ]]);
          let cornershoot6: Map<any, any> = new Map([[String.fromCharCode(101,122,105,101,114,95,115,95,50,57,0),String.fromCharCode(112,114,111,114,101,115,100,115,112,95,119,95,56,48,0)], [String.fromCharCode(120,112,114,118,95,102,95,57,48,0),String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,110,95,56,54,0)], [String.fromCharCode(100,105,115,112,111,115,97,98,108,101,95,52,95,51,52,0),String.fromCharCode(99,111,99,103,95,100,95,56,53,0)]]);
          let logout5 = String.fromCharCode(120,95,55,50,95,118,111,116,101,115,0);
          let saveq = 5.0;
          let long_11G: Array<any> = [String.fromCharCode(112,97,99,105,110,103,95,109,95,51,48,0), String.fromCharCode(97,95,52,50,95,109,117,108,116,105,116,97,98,108,101,0)];
         sportsn *= 3;
         tempnodatagifI = new Map([[`${cornershoot6.size}`, parseInt(`${saveq}`)]]);
         cornershoot6 = new Map([[logout5, 1 * parseInt(`${saveq}`)]]);
         logout5 += "2";
         long_11G = [parseInt(`${saveq}`)];
         break;
      }
         volumeE -= 2;
      if (abidetectU.length == 2) {
         volumeE -= parseInt(`${volumeE}`);
      }
      pingV = `${1 ^ abidetectU.length}`;
   if (4 == (1 * whitesmalltickm.length)) {
      whitesmalltickm = [((defaultpredictionprofiler ? 1 : 2) / 1)];
   }
       let relatedW = 2.0;
       let cancelL = 0.0;
       let cnewarchdefaultso = 4.0;
       let telemetryP = 4;
       let iconpointscorew = 5;
         telemetryP %= Math.max(3, telemetryP - 3);
          let yellowtoredP = 5.0;
         iconpointscorew /= Math.max(3, 2);
         yellowtoredP += parseFloat(`${2 & parseInt(`${yellowtoredP}`)}`);
         telemetryP |= iconpointscorew;
         iconpointscorew >>= Math.min(3, Math.abs(parseInt(`${cnewarchdefaultso}`) << (Math.min(5, Math.abs(telemetryP)))));
          let nativeexr = 3.0;
          let umengv: Array<any> = [964, 624, 723];
          let xadsdk5 = 2;
         cnewarchdefaultso += umengv.length;
         nativeexr += 1;
         umengv = [3 / (Math.max(parseInt(`${nativeexr}`), 4))];
         xadsdk5 += 3 % (Math.max(7, parseInt(`${nativeexr}`)));
      while ((cnewarchdefaultso + relatedW) == 1.50 && (cnewarchdefaultso + relatedW) == 1.50) {
          let videocommonF = 0.0;
         relatedW -= parseFloat(`${1}`);
         videocommonF += parseInt(`${videocommonF}`);
         break;
      }
         iconpointscorew |= parseInt(`${relatedW}`) ^ 2;
      for (let m = 0; m < 3; m++) {
          let becomeq = String.fromCharCode(114,101,102,105,110,101,95,52,95,55,0);
          let bottomo = String.fromCharCode(115,117,112,112,114,101,115,115,101,100,95,114,95,49,0);
          let release_22O = true;
          let mbridgeF: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,105,102,105,99,97,110,100,95,55,95,53,54,0),125], [String.fromCharCode(103,111,116,111,95,53,95,55,0),260]]);
         cnewarchdefaultso *= (telemetryP / (Math.max(9, (release_22O ? 1 : 3))));
         becomeq = `${(bottomo == String.fromCharCode(104,0) ? bottomo.length : becomeq.length)}`;
         release_22O = bottomo.length >= 92;
         mbridgeF = new Map([[`${mbridgeF.size}`, 1]]);
      }
      countdown_ += `${parseInt(`${cnewarchdefaultso}`) * 2}`;
      cancelL *= parseInt(`${cancelL}`) & 1;
   if (kickm > whitesmalltickm.length) {
      kickm /= Math.max(2, parseInt(`${kickm}`));
   }
   let unfille = 6003777.0 <= kickm;
   do {
      kickm += (String.fromCharCode(85,0) == pingV ? parseInt(`${kickm}`) : pingV.length);
      if (unfille) {
         break;
      }
   } while ((2 == (libfabricjnin.size * parseInt(`${kickm}`))) && unfille);
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
          source={require('@static/images/iconnewsshareDist.gif')}
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
          source={require('../../assets/images/loginNativemoduleSingapore.png')}
          style={{ width: 35, height: 35 }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    </View>
  );
};
export default memo(MatchScheduleList);
