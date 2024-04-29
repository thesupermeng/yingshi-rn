import React, {
  useState,
  useMemo,
  memo,
  useEffect,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {ttWeibo} from '@type/tt_line_borderless';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SortAscIcon from '@static/images/bootTemperatureRoboto.svg';
import SortDescIcon from '@static/images/countryChatSpinner.svg';
import BottomSheet from '../bottomSheet/tt_apple_bridge';

interface ttSmall {
  onConfirm: any;
  onCancel: any;
  episodes?: ttWeibo;
  activeEpisode?: number;
  rangeSize?: number;
  isVisible: boolean; 
  handleClose: any;
}
function VodEpisodeSelectionModal({
  onConfirm,
  onCancel,
  episodes,
  isVisible,
  handleClose, 
  activeEpisode = 0,
  rangeSize = 50,
}: ttSmall) {
  const {colors, textVariants, spacing} = useTheme();
  const EPISODE_RANGE_SIZE = rangeSize;
  const insets = useSafeAreaInsets();
  const [sortBy, setSortBy] = useState('asc');
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(activeEpisode / EPISODE_RANGE_SIZE),
  );
  const showEpisodeRangeStart = useMemo(
    () => currentIndex * EPISODE_RANGE_SIZE,
    [activeEpisode, currentIndex],
  );
  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        episodes
          ? episodes.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE,
      ),
    [episodes, showEpisodeRangeStart],
  );
  const displayEpisodes = useMemo(() => {
       let scoreW = String.fromCharCode(121,118,116,111,117,121,118,121,95,112,95,50,50,0);
    let mbridged: Array<any> = [String.fromCharCode(116,95,54,54,95,113,117,101,115,116,105,111,110,0), String.fromCharCode(111,95,49,54,95,104,97,110,100,108,101,0), String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,116,105,111,110,95,54,95,56,0)];
    let recommendation6: Array<any> = [483, 917];
    let entryf = 0;
    let uploadv = String.fromCharCode(113,95,57,51,95,104,101,118,109,97,115,107,0);
    let actionL: Map<any, any> = new Map([[String.fromCharCode(105,95,51,48,95,120,117,118,109,118,115,0),209], [String.fromCharCode(120,95,50,55,95,115,101,108,101,99,116,111,112,0),784]]);
    let dropdownN = String.fromCharCode(118,95,53,53,95,116,101,115,116,0);
    let plash2 = 0.0;
    let placeholderC = 5.0;
    let whistleJ = 4;
    let updatesK = String.fromCharCode(97,108,108,111,119,105,95,108,95,52,55,0);
    let screenV = String.fromCharCode(112,95,55,95,102,114,101,105,114,0);
    let scoree = 1;
       let invite1 = String.fromCharCode(100,95,52,48,95,108,105,98,115,119,105,102,116,111,115,0);
         invite1 = `${invite1.length * 1}`;
      let mbbidX = String.fromCharCode(110,52,111,95,95,0) == invite1;
      do {
          let acceptedp = 0.0;
          let moony = String.fromCharCode(97,115,115,111,99,105,97,116,101,100,95,106,95,55,54,0);
         invite1 = `${invite1.length}`;
         acceptedp *= parseFloat(`${moony.length}`);
         moony = `${parseInt(`${acceptedp}`) % (Math.max(moony.length, 2))}`;
         if (mbbidX) {
            break;
         }
      } while ((invite1.includes(`${invite1.length}`)) && mbbidX);
      for (let l = 0; l < 2; l++) {
         invite1 += `${(String.fromCharCode(105,0) == invite1 ? invite1.length : invite1.length)}`;
      }
      mbridged.push(2 | invite1.length);
   if ((2 ^ entryf) <= 1 || 5 <= (2 ^ entryf)) {
       let dropdownV = 1;
       let minimize_ = 4.0;
       let largeP: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,115,105,102,121,95,54,95,57,48,0),6], [String.fromCharCode(112,99,109,117,95,52,95,55,49,0),162], [String.fromCharCode(100,99,116,120,95,117,95,53,53,0),391]]);
       let dropdownP = 1.0;
       let kickV = 4.0;
          let adultH = false;
         minimize_ *= parseInt(`${kickV}`);
         adultH = !adultH || !adultH;
      for (let f = 0; f < 2; f++) {
          let overP = String.fromCharCode(122,95,49,57,95,100,101,102,105,110,101,115,0);
          let fieldU = 1.0;
         minimize_ /= Math.max(2, 4);
         overP += `${(String.fromCharCode(57,0) == overP ? parseInt(`${fieldU}`) : overP.length)}`;
         fieldU *= parseFloat(`${3}`);
      }
         dropdownV &= largeP.size;
         dropdownP /= Math.max(2, parseInt(`${dropdownP}`) % (Math.max(parseInt(`${minimize_}`), 6)));
         kickV += largeP.size;
      let faviconz = 4961272 <= largeP.size;
      do {
         largeP.set(`${kickV}`, parseInt(`${kickV}`) ^ 1);
         if (faviconz) {
            break;
         }
      } while (faviconz && (2 == (largeP.size - parseInt(`${kickV}`))));
          let whiteX = false;
          let ranks = String.fromCharCode(104,97,115,104,116,97,98,108,101,95,105,95,54,48,0);
         dropdownP *= parseInt(`${dropdownP}`) | 3;
         whiteX = (((whiteX ? 27 : ranks.length) + ranks.length) <= 27);
      while ((minimize_ - 2.37) > 2.88 && 2.37 > (minimize_ - kickV)) {
          let t_titleK = String.fromCharCode(107,95,56,50,95,102,105,108,101,110,97,109,101,0);
          let cornerU = 2.0;
          let videof: Map<any, any> = new Map([[String.fromCharCode(104,95,53,57,95,99,104,111,112,0),true ], [String.fromCharCode(113,95,57,57,95,97,108,108,111,99,97,116,101,0),true ]]);
          let mathY: Map<any, any> = new Map([[String.fromCharCode(101,102,102,101,99,116,115,95,50,95,50,56,0),252], [String.fromCharCode(118,95,56,51,95,111,110,97,118,99,100,97,116,97,0),159]]);
          let phoneH: Array<any> = [String.fromCharCode(104,95,53,57,95,111,108,100,101,115,116,0), String.fromCharCode(112,97,99,101,100,95,103,95,56,57,0), String.fromCharCode(109,95,53,53,95,104,117,109,97,110,0)];
         kickV += dropdownV;
         t_titleK = `${videof.size / (Math.max(3, 10))}`;
         cornerU += parseFloat(`${phoneH.length | 2}`);
         videof = new Map([[`${videof.size}`, videof.size]]);
         mathY.set(`${t_titleK}`, t_titleK.length * 2);
         phoneH = [3 | t_titleK.length];
         break;
      }
      let philippines0 = 5591041.0 >= minimize_;
      do {
         minimize_ *= 1;
         if (philippines0) {
            break;
         }
      } while (((2.25 - minimize_) >= 3.97 && (2.25 - minimize_) >= 5.98) && philippines0);
      let gradleY = minimize_ <= 5050397.0;
      do {
          let dark9: Array<any> = [46, 210];
          let controlsh: Array<any> = [882, 535];
          let redirectv: Array<any> = [153, 761];
          let description_4zZ = 5.0;
         minimize_ += 1 / (Math.max(3, redirectv.length));
         dark9 = [parseInt(`${description_4zZ}`) | controlsh.length];
         controlsh.push(parseInt(`${description_4zZ}`));
         redirectv = [1 << (Math.min(1, controlsh.length))];
         if (gradleY) {
            break;
         }
      } while (gradleY && (!Array.from(largeP.values()).includes(minimize_)));
      if ((5 - kickV) <= 1.91) {
         dropdownP /= Math.max(2, 2);
      }
       let mimoh = String.fromCharCode(111,95,52,55,95,102,99,116,108,0);
       let update_edF = String.fromCharCode(112,95,53,54,95,115,112,101,99,105,102,105,99,97,116,105,111,110,0);
      let privilegeq = update_edF == String.fromCharCode(120,102,50,115,101,116,0);
      do {
          let main_eP = 3;
          let termsR = String.fromCharCode(115,119,115,99,97,108,101,114,101,115,95,98,95,57,57,0);
          let corner5 = 0;
          let gesture2 = 4.0;
         update_edF = `${largeP.size}`;
         main_eP *= termsR.length % (Math.max(2, 6));
         termsR = `${termsR.length}`;
         corner5 /= Math.max(1, parseInt(`${gesture2}`));
         gesture2 -= 1;
         if (privilegeq) {
            break;
         }
      } while ((update_edF.length == 4) && privilegeq);
      for (let r = 0; r < 1; r++) {
          let vietnamN = String.fromCharCode(109,95,54,53,95,98,105,116,115,0);
          let plusk = 4.0;
         dropdownV &= (String.fromCharCode(86,0) == update_edF ? mimoh.length : update_edF.length);
         vietnamN = `${parseInt(`${plusk}`)}`;
         plusk -= (String.fromCharCode(88,0) == vietnamN ? vietnamN.length : parseInt(`${plusk}`));
      }
          let sendK = String.fromCharCode(105,95,54,53,95,99,97,108,108,115,0);
         kickV /= Math.max(5, sendK.length ^ parseInt(`${kickV}`));
      entryf <<= Math.min(4, Math.abs(parseInt(`${placeholderC}`) * parseInt(`${plash2}`)));
   }
   while (entryf > uploadv.length) {
      uploadv = `${recommendation6.length >> (Math.min(2, Math.abs(parseInt(`${plash2}`))))}`;
      break;
   }
       let v_playerd = String.fromCharCode(115,99,97,108,97,98,105,108,105,116,121,95,103,95,56,48,0);
       let eighteenT: Map<any, any> = new Map([[String.fromCharCode(109,95,54,54,95,97,107,105,100,0),969], [String.fromCharCode(115,97,109,105,95,112,95,50,57,0),182], [String.fromCharCode(118,105,111,108,101,116,95,51,95,52,51,0),951]]);
       let default_wi: Map<any, any> = new Map([[String.fromCharCode(116,101,110,115,105,111,110,95,113,95,53,0),772], [String.fromCharCode(98,95,55,50,95,116,119,105,116,116,101,114,0),313], [String.fromCharCode(113,95,54,50,95,97,108,111,99,0),193]]);
       let short_zl7: Map<any, any> = new Map([[String.fromCharCode(114,95,56,57,95,102,115,105,122,101,0),237], [String.fromCharCode(114,99,118,100,95,114,95,54,52,0),133]]);
      let hoverV = short_zl7.size >= 9650393;
      do {
          let penaltyn = String.fromCharCode(108,95,52,50,95,116,105,109,101,108,105,109,105,116,0);
          let umeng8 = 5.0;
          let androidx = 2.0;
         short_zl7.set(`${androidx}`, parseInt(`${androidx}`) + 3);
         penaltyn = `${(penaltyn == String.fromCharCode(52,0) ? penaltyn.length : parseInt(`${umeng8}`))}`;
         umeng8 /= Math.max(1, penaltyn.length * parseInt(`${umeng8}`));
         if (hoverV) {
            break;
         }
      } while ((5 == v_playerd.length) && hoverV);
         eighteenT.set(`${v_playerd}`, eighteenT.size);
      let anytimet = 8858939 <= short_zl7.size;
      do {
          let traminiR = String.fromCharCode(122,95,55,95,97,100,97,112,116,115,0);
          let regengf = 1.0;
          let flyert = 4.0;
          let bottomC = String.fromCharCode(101,110,104,97,110,99,101,95,103,95,52,54,0);
          let clubG = 2;
         short_zl7.set(`${flyert}`, v_playerd.length - parseInt(`${flyert}`));
         traminiR = `${bottomC.length >> (Math.min(Math.abs(2), 5))}`;
         regengf -= 3 >> (Math.min(3, bottomC.length));
         clubG &= traminiR.length;
         if (anytimet) {
            break;
         }
      } while (anytimet && (short_zl7.get(`${default_wi.size}`) != null));
         eighteenT.set(`${v_playerd}`, 1);
          let pointd = String.fromCharCode(120,95,56,50,95,101,102,102,101,99,105,116,118,101,108,121,0);
         eighteenT.set(`${pointd}`, 2 | short_zl7.size);
      uploadv += "3";
   if (recommendation6.includes(plash2)) {
      plash2 *= parseFloat(`${entryf & parseInt(`${placeholderC}`)}`);
   }

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd,
    );

   while (recommendation6.length <= 3) {
      dropdownN = `${recommendation6.length}`;
      break;
   }
      scoreW = `${(String.fromCharCode(77,0) == scoreW ? entryf : scoreW.length)}`;
      dropdownN = `${recommendation6.length}`;
      plash2 /= Math.max(3, parseFloat(`${uploadv.length - entryf}`));
   for (let z = 0; z < 1; z++) {
      plash2 /= Math.max(parseFloat(`${recommendation6.length}`), 2);
   }
    if (sortBy === 'desc') {

   while (dropdownN.length < actionL.size) {
      dropdownN += `${recommendation6.length & uploadv.length}`;
      break;
   }
   if (!scoreW.startsWith(`${recommendation6.length}`)) {
      recommendation6.push((scoreW == String.fromCharCode(98,0) ? scoreW.length : entryf));
   }
       let infop = true;
       let shrinkw = String.fromCharCode(112,95,53,50,95,101,120,112,97,110,115,105,111,110,0);
         infop = ((shrinkw.length / (Math.max(10, (infop ? 94 : shrinkw.length)))) < 94);
      while (!shrinkw.startsWith(`${infop}`)) {
         shrinkw += `${(shrinkw == String.fromCharCode(119,0) ? shrinkw.length : (infop ? 5 : 4))}`;
         break;
      }
          let indexB = 0.0;
         shrinkw = "3";
         indexB -= 2 & parseInt(`${indexB}`);
         shrinkw += "3";
      if (infop) {
         infop = shrinkw.length <= 6;
      }
         shrinkw += `${shrinkw.length}`;
      plash2 -= parseFloat(`${uploadv.length}`);
   let mbnativeadvancedB = String.fromCharCode(55,50,111,121,119,0) == uploadv;
   do {
      uploadv += `${3 - uploadv.length}`;
      if (mbnativeadvancedB) {
         break;
      }
   } while (((plash2 + 3.70) >= 2.64) && mbnativeadvancedB);
      dropdownN = `${actionL.size}`;
      eps?.reverse();
    }
    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy]);

  
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeEpisode]);

  const sort = () => {
       let humidityj: Array<any> = [642, 324];
    let predictions = false;
    let mbnativeV = String.fromCharCode(97,117,100,105,111,112,114,111,99,95,50,95,53,55,0);
    let entrye = 2.0;
    let sansR: Array<any> = [44, 874];
    let pangleQ = String.fromCharCode(99,97,115,101,100,95,116,95,49,55,0);
    let entry9 = false;
    let hejib = 0;
    let actionsq: Array<any> = [841, 250];
    let collectionA = String.fromCharCode(99,101,110,116,114,111,105,100,115,95,114,95,54,53,0);
   for (let u = 0; u < 2; u++) {
      entry9 = 94 >= mbnativeV.length;
   }
   for (let n = 0; n < 2; n++) {
       let grey5: Array<any> = [544, 752, 747];
       let fast6: Map<any, any> = new Map([[String.fromCharCode(103,95,55,48,95,100,101,109,97,110,100,0),true ], [String.fromCharCode(103,114,101,101,116,105,110,103,95,56,95,50,56,0),false ], [String.fromCharCode(100,101,100,117,112,101,95,49,95,56,50,0),true ]]);
         grey5.push(grey5.length);
          let sortN = 1.0;
          let contextr: Array<any> = [368, 708];
         fast6.set(`${grey5.length}`, grey5.length + fast6.size);
         sortN -= parseFloat(`${parseInt(`${sortN}`) * 2}`);
         contextr.push(parseInt(`${sortN}`));
         grey5 = [grey5.length];
         grey5 = [fast6.size / (Math.max(grey5.length, 1))];
          let materialw = String.fromCharCode(97,95,51,52,95,108,104,97,115,104,0);
          let traminiM = 0;
          let downloaderD = true;
         fast6.set(`${traminiM}`, materialw.length);
         materialw += `${((downloaderD ? 4 : 2) % 2)}`;
         traminiM /= Math.max(2, ((downloaderD ? 2 : 2)));
          let unselectedU = true;
         fast6.set(`${unselectedU}`, (fast6.size << (Math.min(2, Math.abs((unselectedU ? 4 : 5))))));
      pangleQ = `${3 ^ pangleQ.length}`;
   }
      pangleQ = `${mbnativeV.length}`;
   let halfZ = String.fromCharCode(111,111,102,56,103,99,53,0) == pangleQ;
   do {
       let yellowk = String.fromCharCode(114,101,102,101,114,101,110,99,101,115,95,56,95,55,55,0);
       let notification_ = true;
       let blackn = 0.0;
       let singleq = 5;
       let k_unlock4: Array<any> = [971, 757];
         singleq |= parseInt(`${blackn}`) / 2;
      let popupT = 6792003 <= yellowk.length;
      do {
          let privacyI = String.fromCharCode(118,95,56,56,95,117,110,118,111,116,101,0);
          let splashx: Map<any, any> = new Map([[String.fromCharCode(97,95,49,48,48,95,99,111,117,110,116,101,114,0),String.fromCharCode(102,101,116,99,104,105,110,103,95,121,95,57,57,0)], [String.fromCharCode(98,95,50,49,95,105,110,116,101,114,120,121,0),String.fromCharCode(103,95,49,53,95,101,120,112,101,99,116,101,100,0)]]);
         yellowk = `${((notification_ ? 3 : 5) << (Math.min(k_unlock4.length, 4)))}`;
         privacyI = `${(privacyI == String.fromCharCode(53,0) ? splashx.size : privacyI.length)}`;
         splashx = new Map([[`${splashx.size}`, 2]]);
         if (popupT) {
            break;
         }
      } while (popupT && (notification_));
      if ((3.50 + blackn) <= 1.87) {
          let delegate_oz = false;
         notification_ = yellowk.length <= 59 && !delegate_oz;
      }
       let hookN = String.fromCharCode(115,112,114,101,97,100,95,111,95,51,54,0);
       let gmailh = String.fromCharCode(117,110,100,101,108,101,103,97,116,101,95,54,95,57,52,0);
         blackn += 2 & hookN.length;
      if (4 == (4 << (Math.min(3, Math.abs(singleq)))) && (blackn + singleq) == 1.8) {
          let coreI = 1.0;
          let eactX: Map<any, any> = new Map([[String.fromCharCode(101,100,103,101,95,53,95,53,0),true ], [String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,95,104,95,49,50,0),false ], [String.fromCharCode(118,95,49,55,95,99,104,101,99,107,111,117,116,0),true ]]);
         blackn *= gmailh.length;
         coreI /= Math.max(eactX.size + 3, 1);
         eactX.set(`${coreI}`, eactX.size);
      }
      for (let z = 0; z < 3; z++) {
         blackn -= (String.fromCharCode(108,0) == yellowk ? singleq : yellowk.length);
      }
      if (3 < gmailh.length) {
          let tail4 = String.fromCharCode(98,105,103,110,117,109,95,117,95,50,55,0);
          let bodan0 = String.fromCharCode(99,95,54,54,95,109,105,110,109,97,120,0);
          let profileI = true;
          let backwardy = String.fromCharCode(118,99,114,101,97,116,101,95,102,95,52,51,0);
          let logow = String.fromCharCode(109,111,100,97,108,108,121,95,114,95,50,54,0);
         k_unlock4.push(gmailh.length);
         tail4 += `${3 << (Math.min(1, tail4.length))}`;
         bodan0 = `${(String.fromCharCode(103,0) == logow ? tail4.length : logow.length)}`;
         profileI = 51 > bodan0.length && backwardy.length > 51;
         backwardy += `${bodan0.length}`;
      }
      for (let t = 0; t < 1; t++) {
          let notificationm = true;
          let controlsK = 5;
          let episodesx = String.fromCharCode(115,101,110,116,95,108,95,57,54,0);
          let flipperA = 5;
         k_unlock4 = [(episodesx == String.fromCharCode(69,0) ? singleq : episodesx.length)];
         notificationm = (flipperA / (Math.max(1, controlsK))) == 14;
         controlsK += 3 << (Math.min(1, Math.abs(flipperA)));
      }
         hookN += `${yellowk.length}`;
         blackn -= hookN.length % (Math.max(2, 6));
       let shoot5 = 3.0;
       let moviese = 4.0;
      if ((3.59 - blackn) <= 5.55 && (blackn - 3.59) <= 3.4) {
         blackn *= hookN.length | yellowk.length;
      }
       let teami: Map<any, any> = new Map([[String.fromCharCode(121,95,56,56,95,119,104,101,110,0),415], [String.fromCharCode(98,95,57,49,95,97,121,117,118,108,101,0),982], [String.fromCharCode(115,104,111,114,116,101,110,95,48,95,54,53,0),291]]);
         teami = new Map([[`${singleq}`, parseInt(`${shoot5}`)]]);
      pangleQ += `${((entry9 ? 4 : 5) << (Math.min(Math.abs(parseInt(`${blackn}`)), 3)))}`;
      if (halfZ) {
         break;
      }
   } while ((pangleQ.length == 2) && halfZ);
      mbnativeV = `${(2 - (entry9 ? 1 : 2))}`;

    if (sortBy === 'asc') {

       let firebaseS: Array<any> = [579, 722];
       let bootsplash6 = String.fromCharCode(98,95,53,55,95,112,111,108,121,109,101,115,104,0);
      let description_ko = bootsplash6.length <= 9587252;
      do {
         bootsplash6 += "2";
         if (description_ko) {
            break;
         }
      } while (((firebaseS.length * bootsplash6.length) <= 3) && description_ko);
          let home8 = 3.0;
          let videojs_ = String.fromCharCode(114,101,112,108,105,101,115,95,52,95,54,54,0);
         firebaseS = [1];
         home8 /= Math.max(videojs_.length, 3);
         videojs_ = `${(videojs_ == String.fromCharCode(48,0) ? parseInt(`${home8}`) : videojs_.length)}`;
      if (4 <= (bootsplash6.length << (Math.min(Math.abs(3), 2)))) {
         firebaseS = [3];
      }
      for (let m = 0; m < 2; m++) {
          let crossa = 2.0;
         firebaseS.push(3 * firebaseS.length);
         crossa -= parseInt(`${crossa}`);
      }
         bootsplash6 += `${firebaseS.length << (Math.min(Math.abs(2), 5))}`;
       let largeP = 2;
       let scoreE = 1;
      entrye /= Math.max(3, parseInt(`${entrye}`) ^ 2);
   let mintegralV = pangleQ.length <= 8088969;
   do {
      pangleQ += `${parseInt(`${entrye}`) >> (Math.min(1, Math.abs(3)))}`;
      if (mintegralV) {
         break;
      }
   } while (mintegralV && (sansR.length < pangleQ.length));
   if (3.57 <= (entrye / (Math.max(10, mbnativeV.length))) || (2 - mbnativeV.length) <= 4) {
      mbnativeV += `${parseInt(`${entrye}`)}`;
   }
      entry9 = hejib >= pangleQ.length;
      predictions = !predictions;
      setSortBy('desc');
    } else {

   while (4 < hejib) {
       let shirtr: Map<any, any> = new Map([[String.fromCharCode(116,97,103,95,52,95,51,0),String.fromCharCode(100,101,115,104,97,107,101,95,113,95,50,48,0)], [String.fromCharCode(98,114,101,97,107,105,110,103,95,50,95,54,53,0),String.fromCharCode(118,112,105,116,120,102,109,95,102,95,49,48,0)]]);
      let episodes6 = 6596971 <= shirtr.size;
      do {
         shirtr = new Map([[`${shirtr.size}`, 2]]);
         if (episodes6) {
            break;
         }
      } while (episodes6 && ((5 >> (Math.min(5, Math.abs(shirtr.size)))) <= 3 && (5 >> (Math.min(5, Math.abs(shirtr.size)))) <= 1));
          let wnewinterstitialD = 2.0;
          let dataI = 5;
         shirtr.set(`${wnewinterstitialD}`, 3 ^ shirtr.size);
         wnewinterstitialD += dataI;
      if (!Array.from(shirtr.values()).includes(shirtr.size)) {
         shirtr = new Map([[`${shirtr.size}`, shirtr.size / 1]]);
      }
      hejib *= ((predictions ? 2 : 4) << (Math.min(Math.abs(parseInt(`${entrye}`)), 1)));
      break;
   }
      sansR.push(3 * sansR.length);
      entry9 = sansR.includes(entry9);
   let playercommone = sansR.length >= 8345696;
   do {
      sansR.push(parseInt(`${entrye}`) / (Math.max(10, hejib)));
      if (playercommone) {
         break;
      }
   } while ((3 >= sansR.length) && playercommone);
   if (!sansR.includes(entrye)) {
      entrye -= 2 * sansR.length;
   }
      setSortBy('asc');
    }
  };

  return (
    <BottomSheet 
      isVisible={isVisible}
      onBackdropPress={handleClose}
      containerStyle={{
        paddingLeft: spacing.sideOffset,
        paddingRight: spacing.sideOffset,
        gap: spacing.m,
        alignItems: 'center',
      }}
      height='50%'
    >
      <View style={styles.episodeList}>
        <Text
          style={{
            ...styles.btn,
            ...textVariants.header
          }}>
          {`${showEpisodeRangeStart+1}-${showEpisodeRangeEnd} 集`}
        </Text>
        <TouchableOpacity activeOpacity={0.85} style={styles.sortBtn} onPress={sort}>
          <View style={{paddingTop: 4}}>
            {sortBy === 'asc' ? <SortAscIcon /> : <SortDescIcon />}
          </View>
          <Text
            style={{
              textAlign: 'center',
              ...textVariants.header,
              color: colors.muted,
              fontSize: 15,
            }}>
            顺序
          </Text>
        </TouchableOpacity>
      </View>
      {(displayEpisodes && isVisible) &&
      <ScrollView
        contentContainerStyle={{
          ...styles.episodeList,
          paddingBottom: insets.bottom,
        }}>
        {displayEpisodes?.map((ep, idx) => (
          <TouchableOpacity activeOpacity={0.85}
            key={`expand-${idx}`}
            onPress={() => {
              onConfirm(ep.nid);
              onCancel();
            }}>
            <View
              style={{
                backgroundColor:
                  ep.nid === activeEpisode ? colors.primary : colors.search,
                padding: spacing.s,
                minWidth: 60,
                marginRight: 'auto',
                marginBottom: spacing.s,
                borderRadius: 8,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 13,
                  textAlign: 'center',
                  fontWeight: '500',
                  color:
                    ep.nid === activeEpisode ? colors.selected : colors.muted,
                }}>
                {`${ep.name}`}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      }
    </BottomSheet>
  );
}

export default memo(VodEpisodeSelectionModal);

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  btn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  episodeList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'flex-start',
    paddingLeft: 8,
    marginBottom: 14,
  },
  sortBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
