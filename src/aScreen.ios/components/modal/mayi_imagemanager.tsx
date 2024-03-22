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
import {mayi_Const} from '@type/mayi_green';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SortAscIcon from '@static/images/pathWeiboVolume.svg';
import SortDescIcon from '@static/images/tempWeatherIconuser.svg';
import BottomSheet from '../bottomSheet/mayi_transfer_libtob';

interface mayi_GoogleViews {
  onConfirm: any;
  onCancel: any;
  episodes?: mayi_Const;
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
}: mayi_GoogleViews) {
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
       let layoutu: Map<any, any> = new Map([[String.fromCharCode(121,95,54,50,95,117,110,105,109,112,111,114,116,97,110,116,0),String.fromCharCode(115,101,101,100,95,111,95,53,57,0)], [String.fromCharCode(108,95,50,55,95,105,110,102,0),String.fromCharCode(98,108,117,114,114,97,98,108,101,95,114,95,54,53,0)]]);
    let iconeditD = String.fromCharCode(110,111,110,102,97,116,97,108,95,101,95,56,54,0);
    let event6 = 3.0;
    let shirtk = String.fromCharCode(100,95,51,52,95,100,101,114,105,118,97,116,105,111,110,0);
    let embedu = 4.0;
    let smallorangemanP = String.fromCharCode(100,95,50,48,95,100,102,115,116,0);
    let controlP = 4;
    let iconrightorangeO: Map<any, any> = new Map([[String.fromCharCode(116,95,49,53,95,113,109,97,116,0),String.fromCharCode(116,95,57,57,95,114,101,110,100,101,114,101,114,115,0)], [String.fromCharCode(112,107,101,121,95,113,95,54,48,0),String.fromCharCode(119,95,50,51,95,105,103,110,111,114,105,110,103,0)], [String.fromCharCode(112,114,101,100,101,99,111,100,101,95,120,95,56,50,0),String.fromCharCode(111,98,115,101,114,118,105,110,103,95,102,95,56,52,0)]]);
   if (shirtk == String.fromCharCode(100,0)) {
      smallorangemanP += `${(iconeditD == String.fromCharCode(113,0) ? controlP : iconeditD.length)}`;
   }
      embedu += shirtk.length;
   while (1 >= (shirtk.length % 1)) {
      shirtk += `${1 | smallorangemanP.length}`;
      break;
   }
      event6 += layoutu.size - 1;

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd,
    );

   while ((5.48 + event6) >= 2.39) {
       let gifgoalbg4: Map<any, any> = new Map([[String.fromCharCode(101,95,56,50,95,121,117,118,112,116,111,121,117,121,0),true ], [String.fromCharCode(109,115,101,120,95,102,95,49,55,0),false ]]);
       let informationG = true;
       let downloaderE = 2;
         downloaderE ^= downloaderE;
      while (!informationG) {
         informationG = null != gifgoalbg4.get(`${informationG}`);
         break;
      }
      if ((gifgoalbg4.size % 4) <= 5) {
         gifgoalbg4.set(`${downloaderE}`, (downloaderE ^ (informationG ? 5 : 5)));
      }
      for (let z = 0; z < 1; z++) {
         informationG = gifgoalbg4.size < 48 || !informationG;
      }
          let gifgoal2: Map<any, any> = new Map([[String.fromCharCode(107,95,55,54,95,111,110,101,99,104,0),570], [String.fromCharCode(102,114,101,113,95,51,95,55,52,0),729], [String.fromCharCode(98,108,97,109,101,100,95,117,95,55,0),747]]);
          let dropdownL = 3.0;
         downloaderE <<= Math.min(Math.abs(downloaderE), 3);
         gifgoal2 = new Map([[`${gifgoal2.size}`, 2]]);
         dropdownL *= parseInt(`${dropdownL}`) % 3;
      let ajaxO = 8943553 >= gifgoalbg4.size;
      do {
         gifgoalbg4 = new Map([[`${gifgoalbg4.size}`, gifgoalbg4.size]]);
         if (ajaxO) {
            break;
         }
      } while ((4 > (1 + gifgoalbg4.size)) && ajaxO);
      while (gifgoalbg4.size >= 5) {
          let abidetectb = String.fromCharCode(103,114,97,98,98,101,114,95,99,95,56,0);
          let suggestionA = 0.0;
          let iconpipexpandH = 2;
          let episodeU = String.fromCharCode(111,95,54,50,95,116,116,97,99,104,109,101,110,116,0);
         informationG = abidetectb.length < 17 && !informationG;
         abidetectb += `${parseInt(`${suggestionA}`)}`;
         suggestionA += iconpipexpandH / (Math.max(episodeU.length, 3));
         iconpipexpandH *= iconpipexpandH / 1;
         episodeU += "3";
         break;
      }
          let resendF = String.fromCharCode(111,95,52,95,115,101,116,116,108,101,0);
         informationG = (downloaderE - resendF.length) > 9;
         downloaderE |= 3;
      shirtk += "3";
      break;
   }
   let topond = 6205819 >= layoutu.size;
   do {
      layoutu.set(`${event6}`, parseInt(`${event6}`));
      if (topond) {
         break;
      }
   } while ((4 <= layoutu.size) && topond);
      layoutu = new Map([[`${event6}`, iconeditD.length << (Math.min(4, Math.abs(parseInt(`${event6}`))))]]);
   for (let g = 0; g < 2; g++) {
      layoutu = new Map([[`${layoutu.size}`, shirtk.length]]);
   }
    if (sortBy === 'desc') {

   for (let y = 0; y < 2; y++) {
       let classesC: Array<any> = [String.fromCharCode(118,95,51,51,95,115,116,114,101,116,99,104,0), String.fromCharCode(101,114,99,95,121,95,55,49,0), String.fromCharCode(116,111,107,101,110,105,122,101,100,95,99,95,51,52,0)];
       let refreshw = String.fromCharCode(109,95,54,95,100,101,118,105,99,101,0);
       let predictionbannersharedy = 4.0;
       let themeQ = false;
       let background9 = false;
         themeQ = 59 < refreshw.length;
      while (refreshw.length <= classesC.length) {
          let nodeR = 5.0;
          let d_managern = true;
          let questF: Array<any> = [720, 729, 605];
          let groupX = true;
          let search8 = 0.0;
         classesC.push(1 - parseInt(`${nodeR}`));
         nodeR -= parseFloat(`${2}`);
         d_managern = 37 <= questF.length;
         questF.push(((d_managern ? 2 : 2) + questF.length));
         groupX = 22.74 > search8;
         search8 /= Math.max(4, 1 & parseInt(`${search8}`));
         break;
      }
      while (!background9 || refreshw.length > 5) {
         refreshw = `${((background9 ? 4 : 5) / (Math.max(classesC.length, 9)))}`;
         break;
      }
      while (background9) {
         themeQ = predictionbannersharedy <= 86.49 || !themeQ;
         break;
      }
          let sellmathbackgroundR = 0.0;
          let emojiheartk = String.fromCharCode(119,105,100,101,95,114,95,50,49,0);
         themeQ = refreshw.length >= 99 && !background9;
         sellmathbackgroundR -= parseInt(`${sellmathbackgroundR}`);
         emojiheartk += "3";
      let user7 = refreshw.length >= 5506934;
      do {
          let kick4 = true;
          let libffmpegkit4 = 2;
          let placeholderh: Map<any, any> = new Map([[String.fromCharCode(109,117,108,97,100,100,95,114,95,55,51,0),String.fromCharCode(98,95,55,54,95,115,99,97,110,0)], [String.fromCharCode(121,95,52,56,95,115,115,116,104,114,101,115,104,0),String.fromCharCode(102,97,105,108,95,120,95,51,49,0)]]);
          let kleviny: Map<any, any> = new Map([[String.fromCharCode(100,95,51,54,95,102,116,115,97,117,120,0),660], [String.fromCharCode(102,95,57,51,95,104,115,99,97,108,101,0),462]]);
         refreshw += `${parseInt(`${predictionbannersharedy}`) ^ 1}`;
         kick4 = (libffmpegkit4 << (Math.min(Math.abs(placeholderh.size), 4))) == 47;
         libffmpegkit4 %= Math.max(1, placeholderh.size);
         kleviny.set(`${kick4}`, 3);
         if (user7) {
            break;
         }
      } while (user7 && (2 == refreshw.length));
          let episodeC: Array<any> = [689, 257, 993];
         background9 = !background9 && themeQ;
         episodeC = [1 >> (Math.min(2, episodeC.length))];
         refreshw = `${classesC.length}`;
      shirtk += `${(smallorangemanP == String.fromCharCode(122,0) ? smallorangemanP.length : iconeditD.length)}`;
   }
       let anythinkb = String.fromCharCode(115,112,101,99,105,102,105,101,114,95,106,95,52,51,0);
       let iconarrowleftf = 3.0;
         anythinkb += `${anythinkb.length | 1}`;
      for (let j = 0; j < 3; j++) {
         anythinkb += `${anythinkb.length}`;
      }
         iconarrowleftf += anythinkb.length + 1;
         anythinkb = `${parseInt(`${iconarrowleftf}`)}`;
          let reactnativeratingsf: Array<any> = [0, 300];
          let matches0 = String.fromCharCode(116,105,109,101,108,105,110,101,95,55,95,49,55,0);
         iconarrowleftf -= parseInt(`${iconarrowleftf}`) ^ 1;
         reactnativeratingsf.push(1);
         matches0 += `${matches0.length}`;
      for (let w = 0; w < 1; w++) {
         anythinkb += "1";
      }
      embedu *= controlP;
   while (shirtk == String.fromCharCode(115,0)) {
      smallorangemanP += `${3 & parseInt(`${event6}`)}`;
      break;
   }
      event6 -= parseInt(`${event6}`);
      eps?.reverse();
    }
    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy]);

  
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeEpisode]);

  const sort = () => {
       let profileactivev = String.fromCharCode(115,95,55,53,95,100,101,114,105,118,97,116,105,118,101,0);
    let countryE: Map<any, any> = new Map([[String.fromCharCode(112,95,50,55,95,99,108,117,116,0),985], [String.fromCharCode(115,104,105,112,112,105,110,103,95,99,95,50,57,0),476]]);
    let teamdetailsbgx = String.fromCharCode(104,95,53,49,95,100,101,115,99,114,105,112,116,111,114,115,0);
    let iconorientationy = 0;
    let middlewarex = String.fromCharCode(116,104,105,115,95,112,95,56,48,0);
    let greytickt = 1;
    let application1 = 0.0;
    let progressS = String.fromCharCode(100,117,114,105,110,103,95,112,95,52,50,0);
    let iconlogoute = 1;
    let yellowtoredw: Array<any> = [100, 212, 940];
    let matchdetailbgR = String.fromCharCode(102,95,56,95,101,115,116,105,109,97,116,101,0);
    let profileactiveY: Array<any> = [954, 863, 931];
    let owngoali = String.fromCharCode(121,95,50,55,95,114,111,117,110,100,100,115,0);
    let apple6 = 4.0;
    let libfbjni4 = 4;
    let fastK = String.fromCharCode(101,99,109,117,108,116,95,121,95,56,57,0);
    let fullS = String.fromCharCode(116,105,109,101,115,99,97,108,101,95,105,95,56,48,0);
      profileactivev += `${iconorientationy}`;
   let footballV = String.fromCharCode(55,98,56,114,97,121,103,104,0) == middlewarex;
   do {
       let libimagepipelineI = String.fromCharCode(112,97,103,101,95,122,95,52,0);
      for (let r = 0; r < 3; r++) {
          let lessy: Map<any, any> = new Map([[String.fromCharCode(105,95,57,57,95,116,109,105,120,0),322], [String.fromCharCode(105,110,116,114,112,95,100,95,52,53,0),928]]);
          let areaq: Map<any, any> = new Map([[String.fromCharCode(98,100,119,110,95,103,95,53,0),588], [String.fromCharCode(99,97,112,95,109,95,53,57,0),161], [String.fromCharCode(112,114,111,102,105,108,101,95,51,95,54,0),728]]);
          let register_9yM = false;
         libimagepipelineI += `${areaq.size % (Math.max(7, lessy.size))}`;
         lessy = new Map([[`${register_9yM}`, (1 >> (Math.min(Math.abs((register_9yM ? 2 : 2)), 2)))]]);
         areaq = new Map([[`${register_9yM}`, (1 * (register_9yM ? 5 : 3))]]);
      }
          let defaultteamu = true;
          let greyticke: Map<any, any> = new Map([[String.fromCharCode(109,95,51,49,95,121,117,118,112,108,0),395], [String.fromCharCode(108,97,118,102,117,116,105,108,115,95,113,95,51,55,0),998], [String.fromCharCode(112,114,102,116,95,105,95,51,57,0),812]]);
          let completeB = true;
         libimagepipelineI = `${((defaultteamu ? 4 : 2))}`;
         defaultteamu = greyticke.size <= 52;
         greyticke = new Map([[`${greyticke.size}`, (2 << (Math.min(1, Math.abs((completeB ? 3 : 1)))))]]);
         completeB = completeB || greyticke.size <= 6;
      for (let g = 0; g < 3; g++) {
          let binddatast = 5.0;
          let auto_f1n: Map<any, any> = new Map([[String.fromCharCode(117,95,53,95,100,114,111,112,120,0),878], [String.fromCharCode(111,95,52,57,95,98,105,116,105,122,101,110,0),889], [String.fromCharCode(100,101,114,105,118,101,95,105,95,50,52,0),967]]);
          let huaweiA = false;
          let googlec = String.fromCharCode(110,95,56,53,95,109,97,105,108,116,111,0);
          let taiwanr = String.fromCharCode(100,99,97,100,115,112,95,111,95,54,53,0);
         libimagepipelineI = "1";
         binddatast -= (parseFloat(`${googlec == String.fromCharCode(56,0) ? googlec.length : parseInt(`${binddatast}`)}`));
         auto_f1n.set(taiwanr, (String.fromCharCode(49,0) == taiwanr ? parseInt(`${binddatast}`) : taiwanr.length));
         huaweiA = null == auto_f1n.get(`${binddatast}`);
      }
      middlewarex += `${profileactiveY.length | 2}`;
      if (footballV) {
         break;
      }
   } while (footballV && (greytickt >= middlewarex.length));
   let pangleJ = middlewarex == String.fromCharCode(51,110,51,108,122,98,51,113,112,0);
   do {
      middlewarex += `${middlewarex.length << (Math.min(Math.abs(2), 2))}`;
      if (pangleJ) {
         break;
      }
   } while ((progressS == String.fromCharCode(66,0)) && pangleJ);
       let accepted3: Map<any, any> = new Map([[String.fromCharCode(111,95,53,52,95,111,100,101,114,110,0),false ], [String.fromCharCode(98,111,110,106,111,117,114,95,113,95,50,48,0),false ]]);
      if (5 >= (3 >> (Math.min(2, Math.abs(accepted3.size)))) || 3 >= (accepted3.size >> (Math.min(3, Math.abs(accepted3.size))))) {
         accepted3 = new Map([[`${accepted3.size}`, 1]]);
      }
      while (1 < (accepted3.size % (Math.max(accepted3.size, 8))) || (accepted3.size % 1) < 2) {
          let sortd = String.fromCharCode(112,95,55,53,95,100,117,112,108,105,99,97,116,111,114,0);
         accepted3 = new Map([[`${accepted3.size}`, 2 << (Math.min(1, Math.abs(accepted3.size)))]]);
         sortd += `${sortd.length % 2}`;
         break;
      }
      while (2 > (accepted3.size | 5)) {
         accepted3 = new Map([[`${accepted3.size}`, accepted3.size << (Math.min(Math.abs(accepted3.size), 5))]]);
         break;
      }
      iconorientationy += parseInt(`${application1}`) * iconorientationy;
      application1 += parseFloat(`${yellowtoredw.length ^ 3}`);
      matchdetailbgR = `${2 % (Math.max(4, profileactivev.length))}`;
   while (3 < (4 + parseInt(`${application1}`)) && (middlewarex.length << (Math.min(Math.abs(4), 2))) < 3) {
       let libreactp = String.fromCharCode(98,95,55,55,95,105,110,115,116,97,110,99,101,0);
       let list7 = 1.0;
      while (libreactp.length > 3) {
         libreactp += `${3 | parseInt(`${list7}`)}`;
         break;
      }
         libreactp = "3";
      let castn = libreactp.length >= 6367446;
      do {
         libreactp += "3";
         if (castn) {
            break;
         }
      } while (((libreactp.length / (Math.max(6, parseInt(`${list7}`)))) >= 1) && castn);
      let downloadinge = list7 <= 6793008.0;
      do {
         list7 += libreactp.length << (Math.min(3, Math.abs(parseInt(`${list7}`))));
         if (downloadinge) {
            break;
         }
      } while (downloadinge && ((libreactp.length / 4) <= 4 && (4.66 * list7) <= 5.99));
      while (5 < (4 ^ libreactp.length) && (parseInt(`${list7}`) - libreactp.length) < 4) {
          let iconcalendarr = 3.0;
          let scorepopsoundO = String.fromCharCode(111,105,100,95,53,95,57,56,0);
          let libjsiI = String.fromCharCode(97,115,110,116,95,115,95,56,0);
          let privatechatbgg = String.fromCharCode(102,114,97,109,101,110,117,109,95,103,95,51,48,0);
          let profileu: Array<any> = [595, 572];
         libreactp += `${parseInt(`${iconcalendarr}`) ^ profileu.length}`;
         iconcalendarr -= 3;
         scorepopsoundO += `${scorepopsoundO.length / 2}`;
         libjsiI = `${libjsiI.length}`;
         privatechatbgg += `${libjsiI.length & 1}`;
         profileu.push((String.fromCharCode(120,0) == privatechatbgg ? libjsiI.length : privatechatbgg.length));
         break;
      }
         libreactp = `${parseInt(`${list7}`)}`;
      application1 -= parseFloat(`${greytickt}`);
      break;
   }
   while (!teamdetailsbgx.endsWith(`${iconorientationy}`)) {
      teamdetailsbgx = "3";
      break;
   }

    if (sortBy === 'asc') {

      teamdetailsbgx = `${parseInt(`${application1}`) / (Math.max(countryE.size, 6))}`;
   if (5 == middlewarex.length) {
      middlewarex += `${3 / (Math.max(6, matchdetailbgR.length))}`;
   }
      profileactiveY = [middlewarex.length - parseInt(`${application1}`)];
      teamdetailsbgx += "1";
   while (2 < (5 / (Math.max(4, iconlogoute))) && 4 < (iconlogoute / (Math.max(5, 5)))) {
      iconlogoute /= Math.max(progressS.length, 4);
      break;
   }
   if (!teamdetailsbgx.includes(`${countryE.size}`)) {
       let whatsapph: Map<any, any> = new Map([[String.fromCharCode(117,99,109,112,95,114,95,52,55,0),false ], [String.fromCharCode(99,95,49,55,95,108,105,98,114,115,118,103,0),true ], [String.fromCharCode(107,95,57,52,95,108,101,114,112,102,0),false ]]);
       let holderl = String.fromCharCode(99,97,114,116,101,115,105,97,110,95,55,95,52,50,0);
       let carouselh = String.fromCharCode(121,95,55,95,115,112,101,101,100,111,109,101,116,101,114,0);
         whatsapph.set(`${holderl}`, holderl.length);
      for (let f = 0; f < 3; f++) {
          let giftY = 5.0;
          let qaagM = String.fromCharCode(109,101,109,111,114,121,95,102,95,56,53,0);
          let filterU = String.fromCharCode(122,95,51,48,95,112,114,101,115,115,101,100,0);
         holderl = "1";
         giftY /= Math.max(5, 3 / (Math.max(1, parseInt(`${giftY}`))));
         qaagM += `${3 + parseInt(`${giftY}`)}`;
         filterU += `${3 + filterU.length}`;
      }
      for (let k = 0; k < 2; k++) {
         carouselh += `${1 & whatsapph.size}`;
      }
      for (let x = 0; x < 1; x++) {
          let c_positiona = String.fromCharCode(111,95,49,54,95,102,105,108,101,119,114,105,116,101,115,116,114,101,97,109,0);
          let source7 = String.fromCharCode(108,108,100,98,105,110,105,116,95,98,95,57,52,0);
          let materialj = 4;
          let tempnodataM = true;
         holderl = `${source7.length >> (Math.min(4, holderl.length))}`;
         c_positiona = "1";
         source7 = "3";
         materialj /= Math.max(c_positiona.length - 1, 5);
         tempnodataM = !tempnodataM;
      }
      while (carouselh.length >= holderl.length) {
          let rootp: Array<any> = [String.fromCharCode(108,95,55,51,95,99,97,114,114,105,101,114,0), String.fromCharCode(102,95,57,48,95,97,117,116,111,100,101,116,101,99,116,105,111,110,0)];
          let iconarrowrightl = 5.0;
          let faviconq = 1.0;
          let backwardY = String.fromCharCode(116,121,112,101,115,95,57,95,55,52,0);
         carouselh = `${carouselh.length ^ holderl.length}`;
         rootp.push(3 | parseInt(`${faviconq}`));
         iconarrowrightl /= Math.max(parseFloat(`${parseInt(`${faviconq}`)}`), 2);
         backwardY = "2";
         break;
      }
         carouselh = `${whatsapph.size}`;
         carouselh += "1";
          let reducer0 = 1.0;
          let googlej = 0.0;
          let securityB = 5.0;
         carouselh += `${parseInt(`${googlej}`)}`;
         reducer0 /= Math.max(5, parseFloat(`${2}`));
         securityB /= Math.max(parseInt(`${reducer0}`), 1);
         holderl += "3";
      countryE.set(`${iconorientationy}`, iconorientationy);
   }
      profileactivev += `${matchdetailbgR.length}`;
   for (let a = 0; a < 3; a++) {
      application1 *= parseFloat(`${parseInt(`${application1}`) % (Math.max(7, yellowtoredw.length))}`);
   }
      setSortBy('desc');
    } else {

   while (greytickt >= profileactiveY.length) {
      greytickt %= Math.max(progressS.length, 1);
      break;
   }
      middlewarex += "3";
       let cross0 = String.fromCharCode(105,110,105,116,97,108,95,120,95,49,55,0);
       let rootN: Array<any> = [834, 868];
       let basketballplayerplaceholderp = 5;
      for (let q = 0; q < 2; q++) {
         cross0 += `${cross0.length}`;
      }
         cross0 = `${3 * rootN.length}`;
         basketballplayerplaceholderp %= Math.max(cross0.length, 4);
      if (4 == (2 >> (Math.min(3, rootN.length)))) {
         rootN = [cross0.length];
      }
      while (!cross0.startsWith(`${basketballplayerplaceholderp}`)) {
          let cornerkickV: Map<any, any> = new Map([[String.fromCharCode(116,121,112,101,100,101,102,95,53,95,57,51,0),String.fromCharCode(115,109,97,108,108,101,115,116,95,103,95,54,51,0)], [String.fromCharCode(99,111,110,116,101,120,116,115,95,106,95,57,50,0),String.fromCharCode(108,111,117,112,101,95,104,95,51,54,0)], [String.fromCharCode(101,120,112,114,95,112,95,51,50,0),String.fromCharCode(97,117,116,104,105,110,102,111,95,101,95,52,55,0)]]);
          let iconrightorange7 = String.fromCharCode(98,108,97,99,107,108,105,115,116,95,122,95,53,54,0);
          let libreanimatedr = String.fromCharCode(107,95,49,57,95,99,97,108,99,117,108,97,116,105,111,110,0);
          let sidev = String.fromCharCode(97,95,56,49,95,112,117,116,115,116,114,0);
          let modulem = false;
         basketballplayerplaceholderp -= 3;
         cornerkickV.set(iconrightorange7, iconrightorange7.length);
         libreanimatedr = "2";
         sidev += `${cornerkickV.size / (Math.max(iconrightorange7.length, 4))}`;
         modulem = sidev == String.fromCharCode(120,0);
         break;
      }
      while (cross0.length <= 4) {
          let graphk = String.fromCharCode(122,95,52,95,101,118,114,112,99,0);
          let dplusP: Array<any> = [String.fromCharCode(117,110,115,104,105,102,116,95,106,95,52,57,0), String.fromCharCode(114,95,53,50,95,118,97,114,105,97,110,99,101,120,104,0), String.fromCharCode(121,95,57,48,95,117,110,98,105,110,100,0)];
         rootN = [2 ^ basketballplayerplaceholderp];
         graphk = `${graphk.length * dplusP.length}`;
         dplusP.push(graphk.length);
         break;
      }
      let memberr = 6833823 >= basketballplayerplaceholderp;
      do {
          let f_hashJ = false;
          let backgroundM = 0;
          let penalty7 = String.fromCharCode(98,95,51,49,95,105,110,118,97,114,105,97,110,116,115,0);
          let xvode = 3.0;
          let field8 = false;
         basketballplayerplaceholderp *= 1;
         f_hashJ = 49 >= backgroundM && field8;
         backgroundM -= 3 - parseInt(`${xvode}`);
         penalty7 += "3";
         xvode -= 2 + parseInt(`${xvode}`);
         if (memberr) {
            break;
         }
      } while (memberr && (!rootN.includes(basketballplayerplaceholderp)));
         basketballplayerplaceholderp <<= Math.min(5, Math.abs(basketballplayerplaceholderp));
      while ((basketballplayerplaceholderp | 1) <= 2 || 4 <= (1 | basketballplayerplaceholderp)) {
         rootN.push(basketballplayerplaceholderp);
         break;
      }
      matchdetailbgR += "1";
   for (let v = 0; v < 2; v++) {
       let malaysiaI: Map<any, any> = new Map([[String.fromCharCode(108,105,98,115,115,104,95,122,95,53,55,0),816], [String.fromCharCode(113,95,53,95,116,111,107,101,110,115,0),677], [String.fromCharCode(97,95,53,54,95,99,111,110,116,101,110,116,105,111,110,0),507]]);
       let vietnamQ = String.fromCharCode(112,95,53,48,95,97,101,99,0);
       let footballw = String.fromCharCode(110,111,110,110,117,108,108,115,99,104,101,109,101,115,95,56,95,57,0);
       let lineT: Map<any, any> = new Map([[String.fromCharCode(105,110,99,114,101,109,101,110,116,97,108,95,110,95,49,50,0),537], [String.fromCharCode(102,95,49,56,95,99,97,100,101,110,99,101,0),92], [String.fromCharCode(99,111,109,112,97,116,105,98,105,108,105,116,121,95,110,95,53,57,0),811]]);
       let textlayoutmanagerb = String.fromCharCode(101,95,55,53,95,102,105,110,100,110,101,116,0);
         lineT = new Map([[vietnamQ, vietnamQ.length / 1]]);
         footballw = `${lineT.size / 1}`;
      if (!textlayoutmanagerb.startsWith(footballw)) {
         footballw = `${malaysiaI.size & 3}`;
      }
         lineT.set(vietnamQ, 2);
         malaysiaI = new Map([[`${lineT.size}`, textlayoutmanagerb.length]]);
      let iconbackwhite5 = 8785556 <= malaysiaI.size;
      do {
         malaysiaI = new Map([[`${malaysiaI.size}`, footballw.length >> (Math.min(4, Math.abs(malaysiaI.size)))]]);
         if (iconbackwhite5) {
            break;
         }
      } while (iconbackwhite5 && (!textlayoutmanagerb.endsWith(`${malaysiaI.size}`)));
      if (vietnamQ != String.fromCharCode(113,0)) {
          let videobufferloadingt = 5.0;
          let mbbannere: Array<any> = [161, 433, 468];
          let homeloadingu = String.fromCharCode(113,95,56,54,95,115,111,99,97,110,116,114,99,118,109,111,114,101,0);
          let template_fx2 = true;
          let videov = String.fromCharCode(100,105,114,101,99,116,105,111,110,97,108,95,106,95,55,55,0);
         footballw += "1";
         videobufferloadingt += ((template_fx2 ? 1 : 1) + mbbannere.length);
         mbbannere = [2 >> (Math.min(1, Math.abs(parseInt(`${videobufferloadingt}`))))];
         homeloadingu = `${mbbannere.length >> (Math.min(Math.abs(2), 3))}`;
         template_fx2 = 29.60 >= videobufferloadingt || 97 >= mbbannere.length;
         videov = `${parseInt(`${videobufferloadingt}`) >> (Math.min(3, Math.abs(1)))}`;
      }
         malaysiaI = new Map([[`${malaysiaI.size}`, 3 >> (Math.min(2, vietnamQ.length))]]);
      let homeloading4 = 5717847 >= lineT.size;
      do {
          let tickedM: Array<any> = [String.fromCharCode(121,95,57,50,95,116,114,97,110,115,99,111,100,101,0), String.fromCharCode(110,95,51,52,95,112,115,101,117,100,111,99,111,108,111,114,0), String.fromCharCode(115,116,111,114,101,95,106,95,55,56,0)];
         lineT.set(vietnamQ, lineT.size);
         tickedM = [1];
         if (homeloading4) {
            break;
         }
      } while ((!textlayoutmanagerb.endsWith(`${lineT.size}`)) && homeloading4);
      if (textlayoutmanagerb.includes(`${lineT.size}`)) {
         textlayoutmanagerb = `${textlayoutmanagerb.length}`;
      }
      let window_87e = textlayoutmanagerb.length >= 5664225;
      do {
          let g_unlockl = 3;
          let layoutG = String.fromCharCode(115,101,116,116,108,105,110,103,95,55,95,51,55,0);
         textlayoutmanagerb += `${malaysiaI.size}`;
         g_unlockl |= g_unlockl / 2;
         layoutG += "2";
         if (window_87e) {
            break;
         }
      } while ((textlayoutmanagerb.length >= 1) && window_87e);
      if (vietnamQ == String.fromCharCode(50,0) && 4 == textlayoutmanagerb.length) {
         textlayoutmanagerb += "1";
      }
      for (let n = 0; n < 3; n++) {
          let holderP = 5;
          let placeholder6 = String.fromCharCode(113,95,53,50,95,105,110,116,101,114,97,99,116,105,118,101,0);
          let libfbjnib = 2;
          let reactnativejsI = String.fromCharCode(97,115,107,95,114,95,55,57,0);
         vietnamQ += `${1 ^ holderP}`;
         holderP *= libfbjnib % (Math.max(3, 4));
         placeholder6 = "3";
         libfbjnib >>= Math.min(4, Math.abs(libfbjnib));
         reactnativejsI = `${placeholder6.length}`;
      }
      let homeactiveh = lineT.size >= 7806109;
      do {
          let modityU = 3.0;
          let textinputT = 2.0;
          let detailP = String.fromCharCode(101,116,104,114,101,97,100,95,101,95,49,55,0);
          let penaltyT = 3;
         lineT.set(vietnamQ, vietnamQ.length);
         modityU -= parseFloat(`${1 + parseInt(`${modityU}`)}`);
         textinputT -= parseFloat(`${detailP.length}`);
         detailP = `${(detailP == String.fromCharCode(117,0) ? detailP.length : penaltyT)}`;
         penaltyT <<= Math.min(2, Math.abs(1));
         if (homeactiveh) {
            break;
         }
      } while (homeactiveh && (!vietnamQ.includes(`${lineT.size}`)));
         vietnamQ += `${1 | malaysiaI.size}`;
      countryE = new Map([[`${yellowtoredw.length}`, textlayoutmanagerb.length]]);
   }
   while ((4 << (Math.min(1, Math.abs(iconorientationy)))) >= 4) {
       let basketballmatchdetailbgP = String.fromCharCode(110,95,54,57,95,119,114,105,116,101,97,98,108,101,0);
          let smallbrightness1 = true;
          let iconwatch5 = 3.0;
          let subinP = 1.0;
         basketballmatchdetailbgP += `${parseInt(`${subinP}`) % 1}`;
         smallbrightness1 = smallbrightness1 && 89.30 > iconwatch5;
         iconwatch5 += ((smallbrightness1 ? 4 : 5) / (Math.max(parseInt(`${iconwatch5}`), 5)));
         subinP -= parseFloat(`${2 | parseInt(`${iconwatch5}`)}`);
          let linkg = 1;
         basketballmatchdetailbgP += `${linkg}`;
       let backicon2 = String.fromCharCode(120,95,53,95,99,111,118,97,108,101,110,116,0);
       let completeQ = String.fromCharCode(116,100,101,99,111,100,101,95,122,95,53,55,0);
      countryE.set(`${greytickt}`, 1);
      break;
   }
   let shootyesgoalq = progressS.length >= 8838985;
   do {
      progressS = `${owngoali.length}`;
      if (shootyesgoalq) {
         break;
      }
   } while (shootyesgoalq && (progressS.length > 4));
      profileactiveY = [2 + teamdetailsbgx.length];
   while (matchdetailbgR.startsWith(`${profileactivev.length}`)) {
       let libavdevicex = String.fromCharCode(114,95,53,49,95,97,100,106,97,99,101,110,116,0);
       let defaultlogoM = String.fromCharCode(97,95,52,52,95,116,97,115,107,115,0);
       let coreq: Map<any, any> = new Map([[String.fromCharCode(107,95,53,57,95,115,101,110,99,0),212], [String.fromCharCode(97,99,115,107,105,112,95,57,95,57,55,0),276], [String.fromCharCode(108,95,52,56,95,115,121,110,116,104,102,105,108,116,0),118]]);
       let modityv: Array<any> = [String.fromCharCode(103,95,53,53,95,101,110,99,111,100,101,114,0), String.fromCharCode(110,95,57,53,95,97,118,99,105,0), String.fromCharCode(110,111,116,104,101,108,100,95,52,95,55,56,0)];
       let shootV = String.fromCharCode(115,95,57,54,95,100,101,109,117,120,101,114,0);
       let prediction_ = 0.0;
         prediction_ += parseFloat(`${3 % (Math.max(parseInt(`${prediction_}`), 5))}`);
         prediction_ /= Math.max(parseFloat(`${modityv.length}`), 3);
      while (defaultlogoM != libavdevicex) {
         libavdevicex = `${(String.fromCharCode(90,0) == defaultlogoM ? defaultlogoM.length : parseInt(`${prediction_}`))}`;
         break;
      }
      for (let c = 0; c < 3; c++) {
          let singleB = 2;
          let dataW = 4.0;
          let modeT = 3.0;
          let iconfeedbackw = String.fromCharCode(97,95,55,55,95,105,100,108,101,0);
          let unselected8: Map<any, any> = new Map([[String.fromCharCode(97,110,97,108,121,115,101,95,56,95,55,48,0),String.fromCharCode(112,101,114,109,117,116,101,95,110,95,55,0)], [String.fromCharCode(114,101,97,100,101,114,95,112,95,53,49,0),String.fromCharCode(110,95,50,49,95,97,100,97,112,116,101,100,0)]]);
         coreq.set(iconfeedbackw, modityv.length % 1);
         singleB /= Math.max(singleB, 1);
         dataW *= parseInt(`${modeT}`);
         iconfeedbackw += `${parseInt(`${dataW}`)}`;
         unselected8.set(`${modeT}`, singleB << (Math.min(Math.abs(parseInt(`${modeT}`)), 5)));
      }
       let catalogN = false;
         prediction_ += parseFloat(`${parseInt(`${prediction_}`)}`);
          let modelsc = String.fromCharCode(111,95,53,51,95,99,111,110,115,105,115,116,101,110,99,121,0);
          let latn_: Array<any> = [String.fromCharCode(98,95,49,56,95,114,101,119,114,105,116,101,114,0), String.fromCharCode(104,95,49,95,117,110,112,111,105,115,111,110,0), String.fromCharCode(117,110,109,97,112,102,105,108,101,95,110,95,54,51,0)];
         catalogN = (defaultlogoM.length * libavdevicex.length) < 22;
         modelsc += `${modelsc.length * 3}`;
         latn_.push((String.fromCharCode(71,0) == modelsc ? modelsc.length : latn_.length));
      let plays = 5142587.0 <= prediction_;
      do {
         prediction_ += parseFloat(`${modityv.length}`);
         if (plays) {
            break;
         }
      } while ((!catalogN || 3.63 <= (prediction_ * 4.15)) && plays);
         coreq = new Map([[`${coreq.size}`, 2]]);
         prediction_ += parseFloat(`${libavdevicex.length}`);
       let homeiconW = 2;
         modityv.push(modityv.length + 2);
      let othere = 7935846 >= defaultlogoM.length;
      do {
         defaultlogoM += `${defaultlogoM.length}`;
         if (othere) {
            break;
         }
      } while (othere && ((coreq.size / 5) < 5 && (defaultlogoM.length / (Math.max(6, coreq.size))) < 5));
         homeiconW &= homeiconW * defaultlogoM.length;
      matchdetailbgR += "3";
      break;
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
