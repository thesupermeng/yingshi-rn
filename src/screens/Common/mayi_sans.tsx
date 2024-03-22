import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import ScreenContainer from '../../components/container/mayi_save';
import {RootStackScreenProps} from '@type/mayi_video_binddatas';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/mayi_redirect';
import {mayi_Libapminsightb} from '@redux/mayi_live_tumbnail';

import TitleWithBackButtonHeader from '../../components/header/mayi_predictiondefault_header';
import {mayi_FileBrightness, mayi_Middleware} from '@redux/reducers/mayi_temp_holder';
import {removeVodsFromHistory, playVod} from '@redux/actions/mayi_goallogo';
import VodHistoryCard from '../../components/vod/mayi_mbridge_football';
import CheckBoxSelected from '@static/images/encryptDownModity.svg';
import CheckBoxUnselected from '@static/images/notificationfillemptyUntick.svg';
import {mayi_EmptyGradle} from '@type/mayi_green';
import {Button} from '@rneui/themed';
import ConfirmationModal from '../../components/modal/mayi_small_catalog';
import VodLiveStationListVertical from '../../components/vod/mayi_basketballmatchdetailbg';
import EmptyList from '../../components/common/mayi_unread';
import {ScrollView} from 'react-native-gesture-handler';

type mayi_EventLibnms = {
  item: mayi_FileBrightness;
};
export default ({navigation, route}: RootStackScreenProps<'电视台列表'>) => {
  const {liveStationItemList} = route.params;
  const {colors, textVariants, icons, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const vodReducer: mayi_Middleware = useAppSelector(
    ({vodReducer}: mayi_Libapminsightb) => vodReducer,
  );
  const history = vodReducer.history;
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Array<mayi_EmptyGradle>>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let headert = String.fromCharCode(103,95,51,52,95,101,99,104,111,0);
    let diceu = true;
    let gpay1 = String.fromCharCode(113,95,55,56,95,99,117,108,102,114,101,113,0);
    let thailandC = String.fromCharCode(107,95,49,55,95,103,100,111,99,0);
    let iconsettingx = String.fromCharCode(105,95,52,56,95,114,101,99,111,114,100,97,98,108,101,0);
    let recommendationK = true;
    let yellowcirclebg9 = false;
    let comment2 = 0.0;
    let giftO: Array<any> = [739, 536, 454];
    let iconrightorange_ = 5.0;
    let reminderl = String.fromCharCode(121,95,48,95,100,98,108,113,117,111,116,101,0);
    let more_ = String.fromCharCode(100,105,115,99,111,118,101,114,95,53,95,56,53,0);
    let mbnativeadvancedm: Array<any> = [String.fromCharCode(97,117,100,105,111,105,110,116,101,114,108,101,97,118,101,95,98,95,49,52,0), String.fromCharCode(109,97,120,101,100,95,50,95,51,54,0)];
       let floating6 = 4;
       let matches6: Map<any, any> = new Map([[String.fromCharCode(100,109,97,98,117,102,95,53,95,50,55,0),145], [String.fromCharCode(106,95,57,48,95,103,101,116,116,105,109,101,0),403], [String.fromCharCode(112,95,52,50,95,100,99,97,100,101,99,0),344]]);
       let tempd = 5.0;
      let libreanimated6 = 6742461.0 <= tempd;
      do {
          let teamG = String.fromCharCode(116,95,49,55,95,114,101,115,117,108,116,115,0);
          let bannerh = String.fromCharCode(118,99,101,110,99,95,48,95,49,55,0);
          let vipsportM = String.fromCharCode(107,95,49,48,48,95,116,101,108,0);
          let corner7 = true;
         tempd += teamG.length / 1;
         teamG += `${3 & vipsportM.length}`;
         bannerh = "2";
         vipsportM += `${bannerh.length + vipsportM.length}`;
         if (libreanimated6) {
            break;
         }
      } while ((5 == matches6.size) && libreanimated6);
       let movies5 = String.fromCharCode(100,105,115,112,111,115,97,98,108,101,115,95,107,95,53,52,0);
       let benefitL = String.fromCharCode(115,100,112,95,52,95,55,53,0);
      let libffmpegkitW = movies5 == String.fromCharCode(110,105,99,115,116,113,112,56,121,122,0);
      do {
         movies5 += `${1 - matches6.size}`;
         if (libffmpegkitW) {
            break;
         }
      } while (libffmpegkitW && (4 <= (parseInt(`${tempd}`) / (Math.max(movies5.length, 8)))));
      while (1.79 <= (tempd - matches6.size) && (1 & matches6.size) <= 1) {
         matches6 = new Map([[`${floating6}`, floating6 | movies5.length]]);
         break;
      }
         floating6 <<= Math.min(Math.abs(matches6.size), 3);
         tempd /= Math.max(5, matches6.size - 1);
       let hometeamfieldT = 5.0;
          let mode2 = String.fromCharCode(102,111,115,115,105,108,95,48,95,51,52,0);
         matches6 = new Map([[`${tempd}`, parseInt(`${tempd}`) | 2]]);
         mode2 = `${mode2.length - mode2.length}`;
      let plashX = matches6.size <= 9603891;
      do {
         matches6.set(`${floating6}`, floating6);
         if (plashX) {
            break;
         }
      } while (plashX && (4 > (parseInt(`${tempd}`) + matches6.size) || 1 > (matches6.size / 4)));
      iconsettingx = `${parseInt(`${iconrightorange_}`) - 2}`;
   for (let a = 0; a < 3; a++) {
      yellowcirclebg9 = gpay1.length <= 90;
   }
      recommendationK = gpay1.length < 9 || yellowcirclebg9;
       let gradlei = 3;
      if ((1 | gradlei) > 2) {
         gradlei >>= Math.min(Math.abs(gradlei), 1);
      }
         gradlei *= gradlei * 1;
      let libyogaM = 6629556 <= gradlei;
      do {
         gradlei |= gradlei;
         if (libyogaM) {
            break;
         }
      } while (((gradlei >> (Math.min(4, Math.abs(gradlei)))) < 5 && (gradlei >> (Math.min(Math.abs(5), 3))) < 3) && libyogaM);
      gpay1 = `${parseInt(`${comment2}`) % 3}`;
   while (!headert.includes(gpay1)) {
      gpay1 += `${((diceu ? 3 : 1) - parseInt(`${comment2}`))}`;
      break;
   }
   for (let i = 0; i < 2; i++) {
      iconsettingx += `${3 - thailandC.length}`;
   }
   for (let p = 0; p < 3; p++) {
      iconrightorange_ -= parseFloat(`${iconsettingx.length}`);
   }
       let product8 = 1.0;
       let historyT = 3.0;
       let commentU = 4.0;
         historyT /= Math.max(5, parseFloat(`${parseInt(`${commentU}`)}`));
      for (let j = 0; j < 1; j++) {
          let traminiI = String.fromCharCode(118,95,52,54,95,100,121,110,97,114,114,97,121,0);
          let libsentry9: Map<any, any> = new Map([[String.fromCharCode(109,95,53,48,95,114,116,109,112,101,0),408], [String.fromCharCode(108,105,98,109,95,56,95,56,56,0),457], [String.fromCharCode(100,97,118,100,95,55,95,49,48,0),774]]);
          let smallbrightnessw = 0.0;
          let fieldS = 4.0;
          let qaagP = 3.0;
         product8 *= 2;
         traminiI += `${libsentry9.size | traminiI.length}`;
         libsentry9 = new Map([[`${libsentry9.size}`, (traminiI == String.fromCharCode(116,0) ? traminiI.length : libsentry9.size)]]);
         smallbrightnessw *= parseFloat(`${parseInt(`${smallbrightnessw}`) & 2}`);
         fieldS *= parseInt(`${fieldS}`) + 3;
         qaagP -= parseFloat(`${parseInt(`${smallbrightnessw}`) & 2}`);
      }
         commentU -= parseInt(`${product8}`) - 3;
      if (5.51 < (product8 - 1)) {
         historyT += parseFloat(`${parseInt(`${product8}`)}`);
      }
         product8 *= parseInt(`${historyT}`);
      if (5.59 < product8) {
         product8 /= Math.max(4, parseInt(`${historyT}`));
      }
      for (let z = 0; z < 3; z++) {
         historyT /= Math.max(2, parseFloat(`${2}`));
      }
         historyT += parseFloat(`${parseInt(`${commentU}`) & 3}`);
         commentU += 3;
      more_ = `${gpay1.length * headert.length}`;
      diceu = headert.length > 33;
       let footballfiledlayouts = String.fromCharCode(99,95,55,50,95,105,110,103,101,110,105,101,110,116,0);
       let transfer5 = String.fromCharCode(102,111,114,116,104,95,99,95,53,49,0);
       let tickN = String.fromCharCode(98,95,53,54,95,99,111,111,107,105,101,115,0);
          let fullscreenminO = String.fromCharCode(109,95,57,56,95,102,114,97,103,109,101,110,116,0);
          let defaultteamO = String.fromCharCode(101,95,50,48,95,109,97,115,107,101,100,0);
         footballfiledlayouts = `${1 - transfer5.length}`;
         fullscreenminO += `${defaultteamO.length}`;
         defaultteamO += `${1 >> (Math.min(4, fullscreenminO.length))}`;
      let buttonh = footballfiledlayouts.length <= 5304565;
      do {
         footballfiledlayouts += `${transfer5.length / (Math.max(tickN.length, 9))}`;
         if (buttonh) {
            break;
         }
      } while ((footballfiledlayouts.startsWith(tickN)) && buttonh);
         transfer5 += `${transfer5.length}`;
         footballfiledlayouts = `${1 | tickN.length}`;
         tickN = `${3 % (Math.max(7, footballfiledlayouts.length))}`;
      let modityB = transfer5 == String.fromCharCode(116,52,116,54,113,108,111,112,0);
      do {
         transfer5 += `${tickN.length}`;
         if (modityB) {
            break;
         }
      } while ((footballfiledlayouts == String.fromCharCode(54,0)) && modityB);
         footballfiledlayouts = `${transfer5.length}`;
      let ballK = String.fromCharCode(103,99,109,53,97,122,104,0) == transfer5;
      do {
         transfer5 = `${(String.fromCharCode(87,0) == footballfiledlayouts ? tickN.length : footballfiledlayouts.length)}`;
         if (ballK) {
            break;
         }
      } while (ballK && (footballfiledlayouts.length < 5));
      if (transfer5.length == footballfiledlayouts.length) {
          let indexr = String.fromCharCode(116,119,105,100,100,108,101,95,104,95,49,48,0);
          let profilepic5: Array<any> = [567, 105, 668];
         footballfiledlayouts = `${3 / (Math.max(10, footballfiledlayouts.length))}`;
         indexr = `${profilepic5.length}`;
         profilepic5 = [indexr.length % (Math.max(1, 3))];
      }
      thailandC += `${headert.length}`;
       let whistles = 5.0;
       let dialogT: Array<any> = [89, 710];
          let interstitial_ = String.fromCharCode(118,95,57,50,95,102,111,117,114,99,99,115,0);
          let humidityc = 5.0;
          let basketballtrophyu: Map<any, any> = new Map([[String.fromCharCode(97,110,97,108,121,122,101,114,95,51,95,49,50,0),956], [String.fromCharCode(112,108,97,121,101,114,95,104,95,55,52,0),363], [String.fromCharCode(116,114,97,110,115,99,101,105,118,101,114,115,95,112,95,54,56,0),469]]);
         dialogT.push(2);
         interstitial_ += `${interstitial_.length - 1}`;
         humidityc /= Math.max(1, parseInt(`${humidityc}`) ^ basketballtrophyu.size);
         basketballtrophyu.set(`${humidityc}`, parseInt(`${humidityc}`));
         whistles -= parseFloat(`${1}`);
          let short_zk = String.fromCharCode(110,97,116,105,118,101,95,53,95,51,51,0);
          let plashZ: Array<any> = [String.fromCharCode(106,117,115,116,105,102,121,95,111,95,54,56,0), String.fromCharCode(107,95,57,53,95,99,116,114,0)];
          let binddatasd = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,98,108,101,95,102,95,56,51,0);
         whistles += parseFloat(`${2}`);
         short_zk += `${plashZ.length}`;
         plashZ.push(plashZ.length);
         binddatasd = `${plashZ.length}`;
       let storeN = true;
       let stylesC = true;
         whistles -= (parseFloat(`${(storeN ? 5 : 5) * 1}`));
      if (stylesC || storeN) {
         storeN = !stylesC;
      }
      headert = `${(headert.length ^ (yellowcirclebg9 ? 5 : 2))}`;
      comment2 *= ((yellowcirclebg9 ? 1 : 5) >> (Math.min(headert.length, 3)));
       let googleP = String.fromCharCode(99,114,117,110,95,114,95,50,56,0);
      if (googleP != googleP) {
         googleP += `${googleP.length}`;
      }
      let promotionR = googleP == String.fromCharCode(116,116,99,100,95,0);
      do {
          let goallogos = 4.0;
          let libimagepipeline6 = String.fromCharCode(110,102,116,95,48,95,55,53,0);
          let rightU = String.fromCharCode(104,95,50,54,95,97,116,116,101,109,112,116,115,0);
         googleP += `${parseInt(`${goallogos}`) | libimagepipeline6.length}`;
         goallogos *= 2 % (Math.max(2, rightU.length));
         libimagepipeline6 = `${1 >> (Math.min(2, rightU.length))}`;
         if (promotionR) {
            break;
         }
      } while (promotionR && (googleP.startsWith(`${googleP.length}`)));
      if (3 >= googleP.length) {
         googleP += `${(googleP == String.fromCharCode(69,0) ? googleP.length : googleP.length)}`;
      }
      headert = `${parseInt(`${comment2}`)}`;
      more_ += `${more_.length * 2}`;
   let libjsinspectorx = recommendationK ? !recommendationK : recommendationK;
   do {
       let downloadedn = String.fromCharCode(118,95,57,57,95,103,97,109,117,116,0);
       let libffmpegkitT = String.fromCharCode(98,97,99,107,101,110,100,95,55,95,57,51,0);
       let zhubob = String.fromCharCode(119,105,116,104,95,100,95,55,57,0);
       let launcherW: Map<any, any> = new Map([[String.fromCharCode(115,112,97,109,95,105,95,56,51,0),281], [String.fromCharCode(100,95,56,49,95,103,101,110,99,98,0),819], [String.fromCharCode(122,95,52,54,95,108,101,110,103,116,104,115,0),991]]);
      for (let o = 0; o < 1; o++) {
         zhubob += `${libffmpegkitT.length}`;
      }
         libffmpegkitT = `${downloadedn.length ^ 1}`;
      if (libffmpegkitT == zhubob) {
         zhubob = `${downloadedn.length}`;
      }
       let langkeyC = 5;
       let unimplementedviewL = 4;
      while ((unimplementedviewL << (Math.min(Math.abs(2), 1))) == 5) {
         zhubob = `${launcherW.size}`;
         break;
      }
      while (5 == libffmpegkitT.length) {
         libffmpegkitT = `${libffmpegkitT.length}`;
         break;
      }
         downloadedn += `${downloadedn.length % 1}`;
      if (libffmpegkitT.length > zhubob.length) {
          let libreactperfloggerjnid = String.fromCharCode(115,105,116,101,109,97,112,95,113,95,50,54,0);
         zhubob = `${3 - libffmpegkitT.length}`;
         libreactperfloggerjnid += `${(String.fromCharCode(75,0) == libreactperfloggerjnid ? libreactperfloggerjnid.length : libreactperfloggerjnid.length)}`;
      }
      let notificationfillempty1 = langkeyC <= 9536732;
      do {
         langkeyC %= Math.max((downloadedn == String.fromCharCode(72,0) ? downloadedn.length : langkeyC), 3);
         if (notificationfillempty1) {
            break;
         }
      } while (((3 >> (Math.min(5, Math.abs(langkeyC)))) == 5 || (langkeyC >> (Math.min(Math.abs(3), 1))) == 1) && notificationfillempty1);
      let empty9 = launcherW.size <= 6958026;
      do {
          let zhengpianj = true;
          let whatsapp6 = String.fromCharCode(115,112,101,97,107,95,57,95,50,53,0);
          let mathV = String.fromCharCode(101,99,116,97,110,103,108,101,95,99,95,55,48,0);
          let iconsaveimage1 = String.fromCharCode(117,95,54,54,95,117,110,100,101,114,0);
         launcherW = new Map([[whatsapp6, (String.fromCharCode(49,0) == whatsapp6 ? whatsapp6.length : unimplementedviewL)]]);
         zhengpianj = mathV.includes(`${zhengpianj}`);
         mathV = `${1 ^ iconsaveimage1.length}`;
         iconsaveimage1 = `${mathV.length % 3}`;
         if (empty9) {
            break;
         }
      } while ((5 < (launcherW.size % (Math.max(2, 3)))) && empty9);
       let roomj = true;
      if (zhubob.length == libffmpegkitT.length) {
          let libavcodecg: Array<any> = [122, 27, 537];
          let predictionbutton8 = String.fromCharCode(98,101,101,110,95,104,95,55,57,0);
          let filede = 1.0;
          let overT = true;
         zhubob = `${((overT ? 2 : 2) & 2)}`;
         libavcodecg.push(predictionbutton8.length);
         predictionbutton8 = `${libavcodecg.length >> (Math.min(4, Math.abs(parseInt(`${filede}`))))}`;
         filede *= parseFloat(`${parseInt(`${filede}`)}`);
         overT = !predictionbutton8.startsWith(`${filede}`);
      }
      recommendationK = downloadedn.length >= 19;
      if (libjsinspectorx) {
         break;
      }
   } while (libjsinspectorx && (recommendationK));
   while ((2 | giftO.length) >= 4 || giftO.length >= 2) {
      diceu = more_.length <= 100 || 100 <= headert.length;
      break;
   }
       let dycreatorZ = 3.0;
       let videovarX = 2.0;
          let headerw = 4.0;
          let defaultlogoe = String.fromCharCode(105,115,112,108,97,121,95,110,95,52,57,0);
         videovarX -= parseFloat(`${parseInt(`${headerw}`)}`);
         headerw *= (defaultlogoe == String.fromCharCode(52,0) ? defaultlogoe.length : defaultlogoe.length);
      for (let g = 0; g < 2; g++) {
          let homeactiveC = String.fromCharCode(97,95,52,57,95,101,120,112,114,101,115,115,0);
         dycreatorZ *= homeactiveC.length | 1;
      }
         dycreatorZ -= parseInt(`${videovarX}`);
         videovarX /= Math.max(2, parseFloat(`${parseInt(`${videovarX}`) * parseInt(`${dycreatorZ}`)}`));
          let downloaderF = false;
          let libjsinspectorr = 5.0;
          let reactnavigationZ: Array<any> = [227, 823, 510];
         videovarX += parseFloat(`${parseInt(`${dycreatorZ}`) << (Math.min(1, Math.abs(2)))}`);
         downloaderF = reactnavigationZ.length < 66;
         libjsinspectorr *= parseInt(`${libjsinspectorr}`) + 2;
         reactnavigationZ = [((downloaderF ? 5 : 1) + parseInt(`${libjsinspectorr}`))];
       let mounting6 = String.fromCharCode(112,95,54,49,95,100,114,97,119,117,116,105,108,115,0);
      iconsettingx += `${parseInt(`${dycreatorZ}`) | 2}`;
   while (!recommendationK && 5 > iconsettingx.length) {
      recommendationK = !thailandC.endsWith(`${yellowcirclebg9}`);
      break;
   }
      reminderl = "2";
   if (yellowcirclebg9) {
      headert = `${more_.length}`;
   }
   for (let m = 0; m < 3; m++) {
       let confirmation5: Map<any, any> = new Map([[String.fromCharCode(101,95,57,50,95,114,111,117,116,105,110,101,115,0),93], [String.fromCharCode(115,97,116,100,120,95,116,95,53,57,0),544]]);
       let pagep = 1.0;
       let logox = true;
      for (let x = 0; x < 2; x++) {
          let moreJ: Map<any, any> = new Map([[String.fromCharCode(101,95,49,57,95,97,97,99,112,115,100,115,112,0),97], [String.fromCharCode(114,95,53,51,95,100,119,111,114,100,0),358]]);
          let awayZ = 3.0;
          let detail9: Array<any> = [235, 692];
          let weatherw = 0.0;
         confirmation5.set(`${awayZ}`, parseInt(`${awayZ}`) & 2);
         moreJ = new Map([[`${detail9.length}`, parseInt(`${weatherw}`) & detail9.length]]);
         weatherw *= parseFloat(`${parseInt(`${weatherw}`)}`);
      }
      while (logox) {
         confirmation5 = new Map([[`${confirmation5.size}`, parseInt(`${pagep}`) / (Math.max(10, confirmation5.size))]]);
         break;
      }
         confirmation5 = new Map([[`${confirmation5.size}`, confirmation5.size / (Math.max(2, parseInt(`${pagep}`)))]]);
          let tailH = 3.0;
          let detailo: Array<any> = [369, 783];
         confirmation5 = new Map([[`${tailH}`, ((logox ? 3 : 4) | parseInt(`${tailH}`))]]);
         detailo = [detailo.length];
         confirmation5.set(`${pagep}`, confirmation5.size << (Math.min(Math.abs(3), 5)));
          let subs3 = String.fromCharCode(101,95,51,95,99,105,116,121,0);
         pagep -= 2;
         subs3 = "1";
         confirmation5.set(`${pagep}`, parseInt(`${pagep}`) << (Math.min(5, Math.abs(1))));
      while (pagep <= 1.18 && (pagep * 1.18) <= 2.1) {
         logox = pagep > confirmation5.size;
         break;
      }
         logox = pagep < 12.52 && !logox;
      iconrightorange_ -= parseFloat(`${headert.length / 2}`);
   }
   while (!recommendationK || 4 > iconsettingx.length) {
       let expired7 = String.fromCharCode(105,95,49,48,95,111,110,101,112,97,115,115,0);
       let iconsaveimageP: Array<any> = [451, 258, 994];
       let const_7s: Map<any, any> = new Map([[String.fromCharCode(104,95,57,57,95,104,111,117,114,0),true ], [String.fromCharCode(98,116,110,99,108,105,99,107,95,49,95,49,0),true ], [String.fromCharCode(102,95,50,55,95,114,116,108,0),false ]]);
       let other9 = String.fromCharCode(112,114,101,115,117,109,101,95,104,95,55,55,0);
       let profileF: Array<any> = [String.fromCharCode(117,95,49,53,95,108,108,118,105,100,100,115,112,0), String.fromCharCode(104,95,55,50,95,109,99,111,109,112,97,110,100,0), String.fromCharCode(119,95,56,55,95,118,112,111,105,110,116,0)];
         expired7 += `${(other9 == String.fromCharCode(102,0) ? other9.length : iconsaveimageP.length)}`;
      let guideC = profileF.length <= 5340944;
      do {
         profileF.push(profileF.length << (Math.min(expired7.length, 1)));
         if (guideC) {
            break;
         }
      } while (guideC && (other9.length <= 1));
         other9 = `${iconsaveimageP.length << (Math.min(2, Math.abs(const_7s.size)))}`;
       let colorsJ = 5;
       let binddatas4 = 4;
       let indicatorj = 1;
         other9 += `${binddatas4 << (Math.min(other9.length, 2))}`;
         iconsaveimageP = [1];
       let reactnativejsp = String.fromCharCode(104,95,53,53,95,119,105,110,97,114,109,0);
         colorsJ += indicatorj;
         iconsaveimageP = [colorsJ];
      let baselinef = 8665955 <= colorsJ;
      do {
         colorsJ -= colorsJ;
         if (baselinef) {
            break;
         }
      } while (baselinef && (profileF.includes(colorsJ)));
      if ((3 ^ indicatorj) > 2 || 2 > (3 ^ iconsaveimageP.length)) {
          let combinedZ = 1.0;
          let service2 = 5;
          let predictionbuttonD = 1;
         iconsaveimageP = [service2];
         combinedZ *= parseFloat(`${predictionbuttonD / (Math.max(2, parseInt(`${combinedZ}`)))}`);
         service2 ^= parseInt(`${combinedZ}`) - 2;
         predictionbuttonD ^= parseInt(`${combinedZ}`);
      }
      let encryptorE = 7108221 <= profileF.length;
      do {
         profileF.push(1 - const_7s.size);
         if (encryptorE) {
            break;
         }
      } while ((3 > (profileF.length % (Math.max(expired7.length, 6))) && (expired7.length % 3) > 4) && encryptorE);
      if (reactnativejsp.includes(`${iconsaveimageP.length}`)) {
         iconsaveimageP = [1];
      }
         profileF.push(indicatorj & 3);
      recommendationK = more_.length == 97 || yellowcirclebg9;
      break;
   }

    setIsDialogOpen(!isDialogOpen);
  };

  const toggleHistory = (vod: mayi_EmptyGradle) => {
    const filtered = removeHistory.filter(x => x.vod_id !== vod.vod_id);
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([vod, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  };
  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title="电视台"
        
      />
      <ScrollView style={{marginBottom: spacing.xl}}>
        {liveStationItemList != undefined && liveStationItemList.length > 0 && (
          <View
            style={{
              ...styles.descriptionContainer,
              gap: spacing.m,
              alignItems: 'center',
            }}>
            <VodLiveStationListVertical
              itemList={liveStationItemList}
              itemsPerRow={2}
              numOfRows={100}
            />
          </View>
        )}
        {/* {
                    history && history.length === 0 &&
                    <EmptyList description='暂无播放历史' />
                } */}
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    flex: 1,
  },
});
