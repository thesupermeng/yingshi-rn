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
import ScreenContainer from '../../components/container/ww_collection';
import { RootStackScreenProps } from '@type/ww_tempnodatagif_description';
import { useTheme } from '@react-navigation/native';
import { wwEighteenShirt } from '@redux/ww_small';

import TitleWithBackButtonHeader from '../../components/header/ww_react_predictionwin_header';
import axios from 'axios';
import { Keyboard } from 'react-native';
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from '@utility/ww_icon';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import InviteStep from '../../components/invite/ww_libjsi';
import InviteCard from '../../components/invite/ww_analytic';

import InviteHeader from '../../components/invite/ww_catalog_header';
import FastImage from '../../components/common/ww_result';
import LinearGradient from 'react-native-linear-gradient';
import { useAppSelector, useSelector } from '@hooks/ww_catagory_neon';
import {
  updateUserAuth,
  updateUserReferral,
} from '@redux/actions/ww_libreactperfloggerjni_small';
import { useDispatch } from 'react-redux';
import { wwIconscheduleColors } from '@api';
import { wwVertical } from '@redux/reducers/ww_related_kuaishou';
export default ({ navigation }: RootStackScreenProps<'邀请详情'>) => {
  const { colors, textVariants, icons, spacing } = useTheme();

  const userState = useSelector<wwVertical>('userReducer');
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);
  const [inviteList, setInviteList] = useState([]);

  const handleRefresh = async () => {
       let stringh = String.fromCharCode(102,95,52,55,95,100,111,99,117,109,101,110,116,97,116,105,111,110,0);
    let jingdong3 = String.fromCharCode(99,95,53,53,95,99,97,110,99,101,108,108,97,98,108,101,0);
    let pointM: Map<any, any> = new Map([[String.fromCharCode(109,95,55,95,111,115,109,111,115,0),true ], [String.fromCharCode(98,95,52,53,95,116,111,111,108,99,104,97,105,110,0),false ], [String.fromCharCode(109,95,55,54,95,104,114,115,115,0),false ]]);
    let profileinactiveS: Array<any> = [76, 278, 477];
    let libavutilq = 1.0;
    let yellowredcarda = 1.0;
    let window_a1 = 1.0;
    let zhengpiane = String.fromCharCode(121,95,55,49,95,114,101,113,117,101,115,116,105,110,103,0);
    let favoritef = 1.0;
    let change1 = String.fromCharCode(115,104,97,114,112,101,110,95,110,95,56,52,0);
    let flagy: Array<any> = [String.fromCharCode(108,95,51,50,95,119,97,114,110,0), String.fromCharCode(98,117,116,116,101,114,102,108,121,95,122,95,57,51,0)];
    let expandh = 4.0;
   let resendg = 5113811.0 >= window_a1;
   do {
       let spec_ = String.fromCharCode(121,95,55,95,116,111,108,108,0);
       let bootsplashj = false;
       let libsgcoreo: Array<any> = [260, 504];
      if (!spec_.endsWith(`${bootsplashj}`)) {
         spec_ = `${(spec_.length >> (Math.min(5, Math.abs((bootsplashj ? 5 : 4)))))}`;
      }
      while (spec_.length > 5) {
          let bdxadsdk9 = 5.0;
          let champion9 = 3.0;
          let libhermesz: Array<any> = [279, 18];
          let langkey3 = String.fromCharCode(100,105,114,95,117,95,49,55,0);
         bootsplashj = !bootsplashj;
         bdxadsdk9 -= parseFloat(`${3 ^ libhermesz.length}`);
         champion9 /= Math.max(parseFloat(`${langkey3.length}`), 5);
         libhermesz.push(3);
         langkey3 = `${parseInt(`${champion9}`) % (Math.max(10, parseInt(`${bdxadsdk9}`)))}`;
         break;
      }
       let sendy = 2;
          let eighteenP = String.fromCharCode(109,97,100,101,98,121,95,101,95,54,49,0);
          let matchesQ: Array<any> = [899, 67];
          let related7 = true;
         bootsplashj = (86 < ((!bootsplashj ? matchesQ.length : 86) % (Math.max(1, matchesQ.length))));
         eighteenP += `${(String.fromCharCode(105,0) == eighteenP ? eighteenP.length : (related7 ? 3 : 4))}`;
         related7 = eighteenP.startsWith(`${related7}`);
         libsgcoreo.push((spec_.length << (Math.min(3, Math.abs((bootsplashj ? 5 : 2))))));
         spec_ = "1";
          let defaultprofilepicI = String.fromCharCode(101,95,57,57,95,115,112,101,99,116,105,109,101,0);
          let defaultplayerimgT = true;
         libsgcoreo = [defaultprofilepicI.length];
      let large7 = libsgcoreo.length >= 5028535;
      do {
          let predictionarrowy = String.fromCharCode(104,97,114,100,116,104,114,101,115,104,95,53,95,50,52,0);
         libsgcoreo.push(2);
         predictionarrowy += `${predictionarrowy.length}`;
         if (large7) {
            break;
         }
      } while (((4 ^ libsgcoreo.length) >= 2) && large7);
       let icons = 2.0;
       let component7 = 4.0;
      window_a1 += 2 | profileinactiveS.length;
      if (resendg) {
         break;
      }
   } while (resendg && (3 == (jingdong3.length + parseInt(`${window_a1}`))));
   while (2 >= (zhengpiane.length * profileinactiveS.length)) {
      zhengpiane += `${zhengpiane.length}`;
      break;
   }
       let carouselT: Map<any, any> = new Map([[String.fromCharCode(109,115,114,108,101,100,101,99,95,107,95,49,56,0),204], [String.fromCharCode(116,95,49,48,95,111,110,101,99,104,0),429], [String.fromCharCode(99,111,109,112,105,116,97,98,108,101,95,99,95,50,52,0),638]]);
       let configA = String.fromCharCode(112,114,105,110,116,99,111,109,112,95,115,95,55,51,0);
       let textlayoutmanagerV: Map<any, any> = new Map([[String.fromCharCode(101,95,57,51,95,101,120,105,115,116,115,0),75], [String.fromCharCode(101,95,56,52,95,116,104,97,119,0),731], [String.fromCharCode(117,95,50,52,95,97,114,99,104,105,118,101,0),107]]);
         configA += `${3 * configA.length}`;
         configA = `${textlayoutmanagerV.size - 1}`;
         configA = `${textlayoutmanagerV.size}`;
          let telemetry7 = true;
         configA = `${carouselT.size}`;
         telemetry7 = !telemetry7;
      let traminil = configA.length <= 7824476;
      do {
          let yingn = String.fromCharCode(99,107,115,117,109,95,102,95,52,55,0);
          let modalt = 4;
          let ksad7 = 0;
          let componentsT = String.fromCharCode(110,111,110,109,117,108,116,95,111,95,55,56,0);
         configA += `${textlayoutmanagerV.size | 1}`;
         yingn += `${yingn.length / 1}`;
         modalt ^= componentsT.length / (Math.max(2, modalt));
         ksad7 ^= (String.fromCharCode(103,0) == yingn ? yingn.length : modalt);
         componentsT += `${yingn.length << (Math.min(Math.abs(3), 3))}`;
         if (traminil) {
            break;
         }
      } while (traminil && (!configA.startsWith(`${carouselT.size}`)));
         carouselT.set(`${textlayoutmanagerV.size}`, carouselT.size * textlayoutmanagerV.size);
       let screenp = 2.0;
       let reacto = 2.0;
       let moviesM = String.fromCharCode(108,111,99,107,95,50,95,57,56,0);
       let borderlesso = String.fromCharCode(99,108,101,97,110,117,112,95,106,95,57,50,0);
          let penaltyw = 5.0;
          let predictionarrowj = String.fromCharCode(114,101,115,105,103,110,105,110,103,95,113,95,53,52,0);
          let gesturesg = 1.0;
         borderlesso = `${parseInt(`${penaltyw}`)}`;
         penaltyw /= Math.max(4, predictionarrowj.length);
         predictionarrowj += `${parseInt(`${gesturesg}`)}`;
         gesturesg += parseInt(`${gesturesg}`) & predictionarrowj.length;
      libavutilq += parseFloat(`${1}`);
      zhengpiane = `${parseInt(`${libavutilq}`) % 2}`;
   while (2.83 <= (favoritef - 1.7) || (favoritef - 1.7) <= 4.63) {
      profileinactiveS.push(parseInt(`${libavutilq}`) / (Math.max(profileinactiveS.length, 3)));
      break;
   }
      profileinactiveS.push(jingdong3.length % 1);
      window_a1 *= 3;
      pointM.set(stringh, (String.fromCharCode(99,0) == stringh ? profileinactiveS.length : stringh.length));
   while (5.56 <= (libavutilq - 4.39) && 4.39 <= (window_a1 - libavutilq)) {
       let profileinactiveR = String.fromCharCode(97,95,52,49,95,108,97,98,101,108,0);
       let router0 = 0.0;
       let combinet: Array<any> = [870, 704, 1];
       let photo_: Array<any> = [972, 579, 576];
       let field3 = String.fromCharCode(102,105,110,116,95,113,95,51,53,0);
          let release_0xs = false;
          let starJ = 4;
          let minivodE: Array<any> = [856, 916];
         router0 /= Math.max(3 + parseInt(`${router0}`), 5);
         release_0xs = starJ < 46 || 46 < minivodE.length;
         starJ += minivodE.length;
         photo_ = [profileinactiveR.length];
         photo_ = [2];
      while (3 > (2 - photo_.length) || (2 - field3.length) > 2) {
         field3 = `${field3.length}`;
         break;
      }
       let largebrightnesso = String.fromCharCode(100,101,97,99,116,105,118,97,116,105,111,110,95,57,95,50,50,0);
       let matchesV = String.fromCharCode(100,101,99,114,101,97,115,105,110,103,95,104,95,51,57,0);
      let header9 = 7738749 >= combinet.length;
      do {
          let predictionI: Map<any, any> = new Map([[String.fromCharCode(108,105,98,106,112,101,103,116,117,114,98,111,95,105,95,52,55,0),928], [String.fromCharCode(108,95,57,57,95,105,110,102,111,115,0),530]]);
         combinet = [field3.length / (Math.max(3, parseInt(`${router0}`)))];
         predictionI = new Map([[`${predictionI.size}`, predictionI.size]]);
         if (header9) {
            break;
         }
      } while (header9 && ((combinet.length * 4) == 1 && (combinet.length * 4) == 1));
          let unimplementedviewq = true;
          let giftj = 4.0;
         field3 = `${profileinactiveR.length + parseInt(`${router0}`)}`;
         unimplementedviewq = giftj == 47.77;
         giftj *= parseFloat(`${parseInt(`${giftj}`) | 1}`);
         combinet = [combinet.length];
      let progress3 = profileinactiveR.length >= 5547725;
      do {
         profileinactiveR = `${3 * photo_.length}`;
         if (progress3) {
            break;
         }
      } while ((profileinactiveR.startsWith(`${largebrightnesso.length}`)) && progress3);
      for (let g = 0; g < 2; g++) {
          let renderD = String.fromCharCode(115,116,105,114,110,103,95,116,95,56,52,0);
          let disconnectedlogoK: Map<any, any> = new Map([[String.fromCharCode(100,101,99,101,108,101,114,97,116,105,111,110,95,113,95,57,0),320], [String.fromCharCode(113,95,57,95,115,101,114,118,101,114,115,0),943], [String.fromCharCode(118,99,100,115,112,95,97,95,55,51,0),108]]);
          let rewindI = 4.0;
         router0 /= Math.max(2, 1);
         renderD = `${parseInt(`${rewindI}`)}`;
         disconnectedlogoK.set(`${rewindI}`, disconnectedlogoK.size);
      }
         photo_ = [(largebrightnesso == String.fromCharCode(57,0) ? photo_.length : largebrightnesso.length)];
         field3 += `${1 / (Math.max(1, matchesV.length))}`;
      let buttonF = 8552043 <= combinet.length;
      do {
         combinet = [parseInt(`${router0}`)];
         if (buttonF) {
            break;
         }
      } while ((combinet.length <= photo_.length) && buttonF);
         router0 -= 2;
       let iconsettingA = 3;
      window_a1 /= Math.max(4, parseInt(`${window_a1}`));
      break;
   }
       let subtexts: Map<any, any> = new Map([[String.fromCharCode(102,114,111,110,116,95,113,95,53,57,0),546], [String.fromCharCode(114,101,99,117,114,115,105,118,101,95,102,95,54,54,0),638]]);
       let details2 = 0;
       let defaultlogox = 1.0;
         defaultlogox /= Math.max(5, 3 - parseInt(`${defaultlogox}`));
      let schedulerz = 9192783 >= details2;
      do {
          let runtimeV = 4.0;
         details2 += parseInt(`${runtimeV}`) >> (Math.min(2, Math.abs(parseInt(`${defaultlogox}`))));
         if (schedulerz) {
            break;
         }
      } while (schedulerz && (2 < (details2 | 1)));
       let customf = String.fromCharCode(101,95,57,54,95,97,116,116,105,98,117,116,101,0);
       let webviewr = 3.0;
         subtexts.set(`${defaultlogox}`, 2);
          let leftv = true;
         details2 >>= Math.min(2, customf.length);
         leftv = !leftv || !leftv;
       let taiwanq = 1.0;
       let executor9: Map<any, any> = new Map([[String.fromCharCode(99,97,115,116,95,55,95,56,48,0),840], [String.fromCharCode(114,101,100,117,99,101,95,51,95,51,49,0),938], [String.fromCharCode(108,111,119,98,105,116,115,95,110,95,53,49,0),427]]);
         executor9 = new Map([[customf, (customf == String.fromCharCode(100,0) ? parseInt(`${taiwanq}`) : customf.length)]]);
      stringh += `${jingdong3.length >> (Math.min(Math.abs(1), 3))}`;
      yellowredcarda *= parseInt(`${window_a1}`);

    setRefreshing(true);

      stringh = `${parseInt(`${favoritef}`) + jingdong3.length}`;
       let libjsinspectorv = String.fromCharCode(97,114,99,104,95,99,95,56,48,0);
      if (1 == libjsinspectorv.length) {
         libjsinspectorv = `${libjsinspectorv.length & 2}`;
      }
      for (let u = 0; u < 3; u++) {
         libjsinspectorv += "3";
      }
         libjsinspectorv += "3";
      profileinactiveS.push(1 / (Math.max(1, parseInt(`${window_a1}`))));
   let gesturesU = window_a1 <= 9292545.0;
   do {
      window_a1 += 3 * stringh.length;
      if (gesturesU) {
         break;
      }
   } while ((jingdong3.includes(`${window_a1}`)) && gesturesU);
      window_a1 += (stringh == String.fromCharCode(114,0) ? stringh.length : parseInt(`${favoritef}`));
       let updatesm = String.fromCharCode(102,95,51,49,95,108,105,103,104,116,110,101,115,115,0);
       let zoomt: Map<any, any> = new Map([[String.fromCharCode(108,111,103,111,117,114,108,95,108,95,54,54,0),true ], [String.fromCharCode(101,95,49,55,95,97,99,99,0),true ]]);
          let selectJ: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,114,113,117,97,110,116,95,110,95,57,51,0),String.fromCharCode(119,95,57,56,95,110,117,109,101,114,105,102,121,0)], [String.fromCharCode(103,95,49,50,95,98,97,99,107,114,111,117,110,100,0),String.fromCharCode(116,95,50,52,95,118,97,108,117,101,100,0)], [String.fromCharCode(121,95,53,56,95,110,102,116,0),String.fromCharCode(116,97,105,108,115,95,106,95,51,49,0)]]);
         updatesm += `${updatesm.length % 1}`;
         selectJ = new Map([[`${selectJ.size}`, 2 ^ selectJ.size]]);
      while ((2 ^ zoomt.size) == 2) {
         updatesm += `${(String.fromCharCode(112,0) == updatesm ? updatesm.length : zoomt.size)}`;
         break;
      }
         updatesm = `${1 + zoomt.size}`;
      let moviesg = updatesm.length >= 5918189;
      do {
          let templateprocessoro = String.fromCharCode(100,105,121,102,112,95,119,95,56,55,0);
         updatesm = `${(String.fromCharCode(52,0) == templateprocessoro ? templateprocessoro.length : zoomt.size)}`;
         if (moviesg) {
            break;
         }
      } while ((zoomt.size <= 1) && moviesg);
         zoomt = new Map([[`${zoomt.size}`, 2]]);
         zoomt.set(updatesm, zoomt.size - updatesm.length);
      zhengpiane = `${profileinactiveS.length & parseInt(`${yellowredcarda}`)}`;
       let awayw = String.fromCharCode(97,118,97,105,108,97,98,105,108,105,116,121,95,56,95,51,52,0);
      let signinup2 = awayw == String.fromCharCode(108,97,122,98,114,56,99,107,106,0);
      do {
          let libjsijniprofilerm = 0.0;
          let basec: Array<any> = [799, 987, 667];
          let untickT: Array<any> = [337, 895, 887];
         awayw = "3";
         libjsijniprofilerm -= 1;
         basec = [3 ^ parseInt(`${libjsijniprofilerm}`)];
         untickT.push(parseInt(`${libjsijniprofilerm}`));
         if (signinup2) {
            break;
         }
      } while (signinup2 && (awayw != String.fromCharCode(88,0) && awayw == String.fromCharCode(82,0)));
      let defaultplayerimgj = 8321995 <= awayw.length;
      do {
          let gray9 = 5.0;
          let controlss: Array<any> = [243, 930, 612];
          let megaphoneO = String.fromCharCode(105,95,56,55,95,100,101,108,101,103,97,116,101,0);
          let userj = 4;
         awayw = `${(awayw == String.fromCharCode(98,0) ? awayw.length : parseInt(`${gray9}`))}`;
         gray9 /= Math.max(userj, 3);
         controlss = [controlss.length];
         megaphoneO += "2";
         userj -= megaphoneO.length ^ userj;
         if (defaultplayerimgj) {
            break;
         }
      } while (defaultplayerimgj && (awayw.length > 3));
      let libavcodec3 = awayw.length >= 6188215;
      do {
         awayw = `${awayw.length}`;
         if (libavcodec3) {
            break;
         }
      } while (libavcodec3 && (4 >= awayw.length));
      zhengpiane += "3";
      yellowredcarda += jingdong3.length * parseInt(`${window_a1}`);
   for (let n = 0; n < 1; n++) {
      jingdong3 += `${parseInt(`${libavutilq}`) & 1}`;
   }
      window_a1 /= Math.max(parseInt(`${favoritef}`) * 1, 4);
   for (let l = 0; l < 3; l++) {
      profileinactiveS.push(1);
   }
      pointM = new Map([[`${pointM.size}`, 2]]);
    await refreshUserState();

      yellowredcarda += parseInt(`${libavutilq}`);
       let predictionbannersharedm = 3;
       let dragN = true;
       let gpayk = String.fromCharCode(100,95,54,53,95,118,109,97,112,115,105,110,0);
         predictionbannersharedm *= predictionbannersharedm >> (Math.min(gpayk.length, 4));
         gpayk += `${(gpayk.length >> (Math.min(2, Math.abs((dragN ? 1 : 5)))))}`;
         predictionbannersharedm /= Math.max(4, 3 - predictionbannersharedm);
         dragN = gpayk.length == 24;
         predictionbannersharedm ^= ((dragN ? 3 : 4) << (Math.min(gpayk.length, 1)));
      while (!gpayk.startsWith(`${dragN}`)) {
          let profileframeu = 5.0;
          let libsentryN: Map<any, any> = new Map([[String.fromCharCode(121,95,51,50,95,116,114,97,99,107,0),829], [String.fromCharCode(104,95,54,56,95,115,122,97,98,111,0),91]]);
          let libfollyj = 2.0;
          let checkbox6 = 1;
          let blacky: Map<any, any> = new Map([[String.fromCharCode(109,95,49,50,95,112,114,111,103,114,97,109,115,0),String.fromCharCode(116,114,97,110,115,99,116,105,111,110,95,114,95,51,52,0)], [String.fromCharCode(119,95,57,48,95,97,108,108,114,103,98,0),String.fromCharCode(114,95,52,57,95,112,97,112,101,114,115,0)], [String.fromCharCode(114,101,108,97,116,101,100,95,102,95,56,49,0),String.fromCharCode(100,95,53,49,95,102,97,99,116,111,114,105,122,97,116,105,111,110,0)]]);
         gpayk = `${predictionbannersharedm}`;
         profileframeu *= checkbox6 % (Math.max(2, 9));
         libsentryN.set(`${profileframeu}`, parseInt(`${profileframeu}`) % (Math.max(3, 1)));
         libfollyj /= Math.max(2, 1);
         checkbox6 *= checkbox6;
         blacky.set(`${libfollyj}`, libsentryN.size);
         break;
      }
      let combiner = gpayk.length >= 6293843;
      do {
         gpayk = `${((dragN ? 5 : 3) / 2)}`;
         if (combiner) {
            break;
         }
      } while (combiner && (gpayk.length < 5 && dragN));
         dragN = (79 < ((dragN ? 79 : gpayk.length) / (Math.max(6, gpayk.length))));
      let sliderW = dragN ? !dragN : dragN;
      do {
         dragN = String.fromCharCode(86,0) == gpayk;
         if (sliderW) {
            break;
         }
      } while (((2 & predictionbannersharedm) <= 1) && sliderW);
      libavutilq *= parseFloat(`${2 ^ parseInt(`${libavutilq}`)}`);
   while ((5.78 - libavutilq) <= 3.96 || 5 <= (2 + profileinactiveS.length)) {
      libavutilq *= parseFloat(`${1 - profileinactiveS.length}`);
      break;
   }
   let const_bm = 9324726.0 >= window_a1;
   do {
      window_a1 += 1;
      if (const_bm) {
         break;
      }
   } while (const_bm && (window_a1 > 1.67));
   if (zhengpiane.length < jingdong3.length) {
      jingdong3 += `${(String.fromCharCode(49,0) == stringh ? parseInt(`${libavutilq}`) : stringh.length)}`;
   }
   while (2.43 > (favoritef / (Math.max(2.85, 4))) && 3 > (5 - jingdong3.length)) {
       let combiney = String.fromCharCode(99,111,110,118,101,120,95,51,95,49,0);
       let constants9 = 2.0;
       let imagemanagerk = 3.0;
       let libsgcoreC = String.fromCharCode(99,111,110,116,105,110,117,111,117,115,95,112,95,49,49,0);
         combiney += `${(String.fromCharCode(83,0) == libsgcoreC ? combiney.length : libsgcoreC.length)}`;
      for (let d = 0; d < 2; d++) {
          let selection_ = 1.0;
         constants9 *= parseFloat(`${2}`);
         selection_ += parseInt(`${selection_}`);
      }
      if (2 <= (parseInt(`${imagemanagerk}`) - 3) && 3.55 <= (imagemanagerk - 4.82)) {
         imagemanagerk /= Math.max(1, parseFloat(`${2 * parseInt(`${imagemanagerk}`)}`));
      }
      for (let f = 0; f < 1; f++) {
         libsgcoreC = `${parseInt(`${constants9}`) % (Math.max(combiney.length, 3))}`;
      }
         constants9 *= parseFloat(`${parseInt(`${imagemanagerk}`)}`);
          let vinit_8a7 = String.fromCharCode(102,114,97,109,101,115,105,122,101,115,95,113,95,57,54,0);
          let thumbnailY = String.fromCharCode(98,114,101,110,100,101,114,95,115,95,57,51,0);
          let baidux = 3.0;
         constants9 *= parseFloat(`${3 << (Math.min(3, vinit_8a7.length))}`);
         vinit_8a7 += `${(thumbnailY == String.fromCharCode(70,0) ? parseInt(`${baidux}`) : thumbnailY.length)}`;
         baidux *= parseFloat(`${parseInt(`${baidux}`) | 2}`);
      while (5.68 == (constants9 + parseFloat(`${combiney.length}`)) && 2.10 == (constants9 + 5.68)) {
         combiney += `${parseInt(`${imagemanagerk}`) ^ libsgcoreC.length}`;
         break;
      }
          let gesturesi = 0;
          let time_gF: Array<any> = [String.fromCharCode(97,99,99,101,112,116,115,95,121,95,55,50,0), String.fromCharCode(100,101,113,117,97,110,116,105,122,101,95,52,95,53,49,0), String.fromCharCode(97,112,115,95,52,95,50,55,0)];
         imagemanagerk *= parseFloat(`${2}`);
         gesturesi &= gesturesi / (Math.max(time_gF.length, 10));
         time_gF.push(3 ^ gesturesi);
       let iconbellactiveM = String.fromCharCode(97,95,54,95,109,117,108,120,0);
      for (let c = 0; c < 1; c++) {
         libsgcoreC = `${parseInt(`${imagemanagerk}`) * 1}`;
      }
         imagemanagerk += parseFloat(`${libsgcoreC.length | 1}`);
         imagemanagerk /= Math.max(3, parseFloat(`${parseInt(`${constants9}`) * combiney.length}`));
      jingdong3 += `${(combiney == String.fromCharCode(66,0) ? parseInt(`${constants9}`) : combiney.length)}`;
      break;
   }
      window_a1 /= Math.max(stringh.length, 5);
       let paginationK = String.fromCharCode(99,95,49,55,95,115,101,109,105,99,111,108,111,110,0);
       let libloggerH = 2.0;
       let sharey = 2.0;
      if (2.74 > (sharey - libloggerH)) {
         sharey += parseInt(`${libloggerH}`);
      }
      while (2.43 > (2 / (Math.max(7, libloggerH)))) {
         sharey *= parseInt(`${sharey}`) - parseInt(`${libloggerH}`);
         break;
      }
         libloggerH *= parseInt(`${sharey}`);
       let videoc = 3.0;
       let latn1 = 4.0;
      let mergerx = videoc <= 9415252.0;
      do {
          let profileactivez: Map<any, any> = new Map([[String.fromCharCode(98,95,54,57,0),560], [String.fromCharCode(117,112,115,101,114,116,95,119,95,51,57,0),135], [String.fromCharCode(112,95,55,57,95,110,111,109,105,110,97,116,111,114,115,0),113]]);
          let flipper1 = 4.0;
          let whitetickJ = 4;
          let customN = true;
          let reactnativeultimatelistviewC: Array<any> = [213, 613];
         videoc *= whitetickJ / (Math.max(3, parseInt(`${flipper1}`)));
         profileactivez = new Map([[`${profileactivez.size}`, (1 + (customN ? 1 : 5))]]);
         flipper1 -= (parseFloat(`${(customN ? 5 : 1) % (Math.max(profileactivez.size, 2))}`));
         whitetickJ -= 2;
         reactnativeultimatelistviewC.push(profileactivez.size | 2);
         if (mergerx) {
            break;
         }
      } while (mergerx && (1.16 > sharey));
      if (paginationK.length > 1) {
          let login_ = String.fromCharCode(105,95,52,51,95,99,111,108,120,0);
          let predictionbannershared_ = true;
          let baseG = false;
         sharey += ((baseG ? 2 : 3) / 1);
         login_ += `${((predictionbannershared_ ? 4 : 5) ^ login_.length)}`;
         predictionbannershared_ = login_.includes(`${predictionbannershared_}`);
         baseG = (42 < ((!predictionbannershared_ ? 42 : login_.length) + login_.length));
      }
      if (!paginationK.startsWith(`${videoc}`)) {
         videoc -= parseInt(`${videoc}`);
      }
          let screenM: Array<any> = [829, 844, 33];
          let uimanagerT = String.fromCharCode(115,95,52,52,95,108,111,99,105,0);
         paginationK = `${screenM.length}`;
         screenM = [uimanagerT.length | 1];
         uimanagerT = `${uimanagerT.length}`;
      for (let y = 0; y < 2; y++) {
         sharey += parseInt(`${libloggerH}`) - 3;
      }
      favoritef *= parseFloat(`${3}`);
       let tickedd = String.fromCharCode(116,95,52,57,95,97,115,115,111,99,0);
       let bridgeE = String.fromCharCode(115,105,103,110,97,108,95,56,95,56,53,0);
       let combineR = 5;
      while (4 > (combineR >> (Math.min(bridgeE.length, 2))) || (combineR >> (Math.min(bridgeE.length, 2))) > 4) {
         combineR -= tickedd.length - bridgeE.length;
         break;
      }
      let viewerY = 6973747 <= combineR;
      do {
         combineR <<= Math.min(Math.abs(combineR >> (Math.min(Math.abs(3), 5))), 2);
         if (viewerY) {
            break;
         }
      } while (viewerY && (5 < (2 | combineR) || (combineR | bridgeE.length) < 2));
         tickedd += `${bridgeE.length + tickedd.length}`;
         combineR |= (String.fromCharCode(79,0) == tickedd ? bridgeE.length : tickedd.length);
      let ewardedF = String.fromCharCode(112,117,52,105,103,0) == bridgeE;
      do {
          let libjsijniprofiler4 = String.fromCharCode(97,99,102,102,95,111,95,53,51,0);
          let macaut = true;
          let stringsl = String.fromCharCode(110,95,49,95,97,108,103,111,0);
          let updatesu = true;
         bridgeE = `${((macaut ? 4 : 2) % 2)}`;
         libjsijniprofiler4 += "3";
         macaut = (stringsl.length - libjsijniprofiler4.length) <= 99;
         stringsl += `${(stringsl.length | (updatesu ? 4 : 4))}`;
         if (ewardedF) {
            break;
         }
      } while ((tickedd == bridgeE) && ewardedF);
         combineR <<= Math.min(5, bridgeE.length);
      while ((combineR >> (Math.min(Math.abs(3), 2))) >= 4 && 3 >= (3 >> (Math.min(3, Math.abs(combineR))))) {
         bridgeE = `${bridgeE.length}`;
         break;
      }
      let loginf = 9201596 >= bridgeE.length;
      do {
          let libreactperfloggerjniD = 4.0;
         bridgeE += "2";
         libreactperfloggerjniD /= Math.max(parseFloat(`${parseInt(`${libreactperfloggerjniD}`) - 3}`), 5);
         if (loginf) {
            break;
         }
      } while (loginf && (!bridgeE.includes(tickedd)));
      for (let c = 0; c < 1; c++) {
         combineR ^= 2;
      }
      profileinactiveS.push(tickedd.length);
       let star0 = 1;
       let internetg: Array<any> = [559, 519];
       let catagoryD: Map<any, any> = new Map([[String.fromCharCode(116,95,53,56,95,111,118,101,114,114,105,100,100,101,110,0),false ], [String.fromCharCode(107,95,50,95,105,115,99,111,118,101,114,0),true ]]);
       let iconwatchnowt = 1.0;
          let predictionbannersharedq = String.fromCharCode(97,118,102,105,108,116,101,114,114,101,115,95,115,95,52,48,0);
         internetg = [3 >> (Math.min(Math.abs(parseInt(`${iconwatchnowt}`)), 1))];
         predictionbannersharedq += `${predictionbannersharedq.length}`;
      while (3 < internetg.length) {
         star0 -= parseInt(`${iconwatchnowt}`) & star0;
         break;
      }
         internetg.push(catagoryD.size);
      if ((internetg.length * star0) >= 3) {
         internetg = [internetg.length];
      }
      if (1.88 <= (iconwatchnowt * 5.64) || 1.74 <= (5.64 * iconwatchnowt)) {
         internetg.push(parseInt(`${iconwatchnowt}`));
      }
      let modulesX = 6952085 >= catagoryD.size;
      do {
         catagoryD.set(`${internetg.length}`, catagoryD.size);
         if (modulesX) {
            break;
         }
      } while (modulesX && (catagoryD.get(`${iconwatchnowt}`) != null));
       let castingV = 0;
      while ((iconwatchnowt + 2.3) > 2.84) {
          let utilst = String.fromCharCode(112,101,110,100,105,110,103,95,112,95,55,50,0);
          let commonp = String.fromCharCode(104,95,49,48,95,99,108,97,122,122,0);
          let telemetry8 = 2.0;
         iconwatchnowt += parseFloat(`${castingV}`);
         utilst += "2";
         commonp = `${parseInt(`${telemetry8}`)}`;
         telemetry8 *= parseFloat(`${3 + parseInt(`${telemetry8}`)}`);
         break;
      }
      profileinactiveS = [1];
   if (3.71 < (yellowredcarda / 5.29)) {
       let iconrefreshU = String.fromCharCode(109,117,116,97,116,101,95,121,95,53,48,0);
       let libpangleflipped0: Map<any, any> = new Map([[String.fromCharCode(120,95,51,55,95,102,117,108,102,105,108,108,0),89], [String.fromCharCode(97,95,54,52,95,102,97,105,108,101,100,0),395], [String.fromCharCode(109,117,108,109,111,100,95,111,95,57,49,0),857]]);
         libpangleflipped0.set(iconrefreshU, iconrefreshU.length + 2);
      for (let o = 0; o < 3; o++) {
         libpangleflipped0.set(`${iconrefreshU}`, libpangleflipped0.size | iconrefreshU.length);
      }
      yellowredcarda += 1;
   }
    setRefreshing(false);
  };
  const refreshUserState = async () => {
       let loadingR = 4.0;
    let shielddone7 = 2.0;
    let unimplementedviewB: Array<any> = [572, 745, 465];
    let privilegeE = String.fromCharCode(121,95,55,50,95,97,108,97,114,109,0);
    let auto_k2 = String.fromCharCode(102,95,56,53,95,120,99,116,101,115,116,0);
    let iconedith = String.fromCharCode(98,95,57,52,95,117,110,105,110,115,116,97,108,108,0);
    let kleviny = 4.0;
    let type_f0N = false;
    let topicG = 0.0;
   while (4 > (1 | privilegeE.length) && (3.60 - shielddone7) > 2.3) {
      shielddone7 *= parseFloat(`${iconedith.length}`);
      break;
   }
   for (let h = 0; h < 1; h++) {
      iconedith = `${iconedith.length}`;
   }
   let hejiO = 9444989 <= unimplementedviewB.length;
   do {
      unimplementedviewB = [parseInt(`${shielddone7}`)];
      if (hejiO) {
         break;
      }
   } while ((parseInt(`${shielddone7}`) == unimplementedviewB.length) && hejiO);
   let penaltygoal7 = auto_k2.length <= 9737785;
   do {
       let dependenciesy = String.fromCharCode(97,116,116,101,109,116,115,95,57,95,52,55,0);
       let componentZ: Array<any> = [652, 615];
       let profileinactiveK: Map<any, any> = new Map([[String.fromCharCode(116,95,52,50,95,114,101,97,100,115,0),703], [String.fromCharCode(114,101,109,97,116,114,105,120,105,110,103,95,100,95,57,53,0),891]]);
       let volume7: Array<any> = [8, 209];
       let defaultpredictionprofileh: Array<any> = [359, 823];
      for (let q = 0; q < 1; q++) {
          let graphicst = false;
          let cornerkickB = String.fromCharCode(109,95,55,48,95,115,121,115,116,101,109,0);
          let ajax1: Array<any> = [739, 378, 793];
         volume7.push(profileinactiveK.size);
         graphicst = !graphicst;
         cornerkickB += `${ajax1.length}`;
         ajax1.push(((graphicst ? 2 : 5)));
      }
      while (4 < (volume7.length % (Math.max(8, defaultpredictionprofileh.length))) || (defaultpredictionprofileh.length % (Math.max(4, 4))) < 5) {
          let privacyT = 1.0;
          let emoji9 = 1;
          let mutedu = String.fromCharCode(107,95,55,50,95,119,97,116,99,104,101,114,115,0);
         volume7 = [(String.fromCharCode(104,0) == dependenciesy ? dependenciesy.length : componentZ.length)];
         privacyT += parseFloat(`${2 << (Math.min(2, mutedu.length))}`);
         emoji9 >>= Math.min(5, Math.abs(emoji9 << (Math.min(3, Math.abs(3)))));
         mutedu += "3";
         break;
      }
       let f_titlev = String.fromCharCode(117,95,52,57,95,104,97,110,100,108,101,114,115,0);
       let animations5 = String.fromCharCode(114,95,53,50,95,114,97,105,116,0);
      if (3 > (4 << (Math.min(1, componentZ.length)))) {
         animations5 = `${defaultpredictionprofileh.length >> (Math.min(Math.abs(1), 5))}`;
      }
          let nativemoduleI = 0.0;
          let memberI = String.fromCharCode(103,95,52,49,95,109,100,105,97,0);
          let final_1w0 = String.fromCharCode(112,101,114,99,101,110,116,95,102,95,53,48,0);
         volume7.push(3);
         nativemoduleI /= Math.max(memberI.length, 4);
         memberI = `${final_1w0.length & 3}`;
         final_1w0 = `${1 * memberI.length}`;
      if ((profileinactiveK.size * 3) == 4 || (profileinactiveK.size * 3) == 2) {
         profileinactiveK = new Map([[`${volume7.length}`, dependenciesy.length ^ volume7.length]]);
      }
          let configV = String.fromCharCode(98,95,49,54,95,109,115,98,115,0);
         componentZ = [2 ^ volume7.length];
         configV = `${configV.length ^ 3}`;
      for (let i = 0; i < 1; i++) {
          let closez = 1.0;
          let tempnodatagif6: Array<any> = [938, 22];
          let condensedt = String.fromCharCode(117,95,57,52,95,98,117,108,108,101,116,115,0);
          let typingP = String.fromCharCode(111,95,51,49,95,115,97,110,101,0);
          let matchactiveB: Map<any, any> = new Map([[String.fromCharCode(119,95,49,53,95,104,105,103,104,101,115,116,0),String.fromCharCode(110,95,57,55,95,105,103,110,111,114,101,0)], [String.fromCharCode(117,115,101,100,95,115,95,55,48,0),String.fromCharCode(112,114,101,99,111,109,112,95,55,95,51,53,0)]]);
         volume7.push(1 | typingP.length);
         closez += 2 | tempnodatagif6.length;
         tempnodatagif6.push(matchactiveB.size % (Math.max(10, parseInt(`${closez}`))));
         condensedt += `${condensedt.length + matchactiveB.size}`;
         typingP = `${matchactiveB.size ^ parseInt(`${closez}`)}`;
      }
         defaultpredictionprofileh = [volume7.length];
      if ((defaultpredictionprofileh.length + 1) >= 4) {
          let downloadingY = 3.0;
          let constants4: Map<any, any> = new Map([[String.fromCharCode(103,95,49,53,95,97,115,115,101,109,98,108,101,100,0),747], [String.fromCharCode(99,95,53,95,110,115,117,105,0),548], [String.fromCharCode(114,101,99,101,105,118,101,95,112,95,55,56,0),597]]);
         componentZ = [volume7.length];
         downloadingY /= Math.max(1, 1);
         constants4 = new Map([[`${constants4.size}`, 2 >> (Math.min(4, Math.abs(parseInt(`${downloadingY}`))))]]);
      }
         animations5 = `${dependenciesy.length}`;
      auto_k2 += `${volume7.length % 1}`;
      if (penaltygoal7) {
         break;
      }
   } while (penaltygoal7 && (auto_k2.startsWith(`${loadingR}`)));
       let librrck = 0;
       let build1: Array<any> = [843, 499];
         librrck |= build1.length >> (Math.min(1, Math.abs(librrck)));
      if (build1.length == 4) {
         build1 = [2];
      }
       let templateprocessor0 = 4;
       let descV = 5;
      if (4 <= (librrck << (Math.min(Math.abs(3), 4))) || (librrck << (Math.min(Math.abs(3), 3))) <= 1) {
          let sports5: Array<any> = [String.fromCharCode(102,111,117,114,120,109,95,119,95,51,55,0), String.fromCharCode(101,120,116,114,97,99,102,103,95,110,95,52,55,0)];
         templateprocessor0 <<= Math.min(3, Math.abs(1));
         sports5.push(2 * sports5.length);
      }
      while ((build1.length - 2) > 3 || 2 > (build1.length - descV)) {
         descV &= descV + 3;
         break;
      }
       let soundP = 1.0;
      shielddone7 -= parseFloat(`${iconedith.length / (Math.max(2, 4))}`);

    const result = await wwIconscheduleColors.getUserDetails();

      iconedith = `${parseInt(`${loadingR}`)}`;
       let animationsb = String.fromCharCode(97,95,50,51,95,108,111,111,112,115,0);
       let notificationfillempty9 = true;
       let iconmorez = 5.0;
         animationsb = `${2 / (Math.max(10, animationsb.length))}`;
          let loginsuccessi: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,114,114,101,108,97,116,105,111,110,95,121,95,50,56,0),120], [String.fromCharCode(101,120,112,105,114,121,95,51,95,51,48,0),786], [String.fromCharCode(115,117,98,112,114,111,99,101,115,115,95,56,95,50,0),596]]);
          let nalyticsI = 4.0;
         notificationfillempty9 = nalyticsI > 97.54;
         loginsuccessi = new Map([[`${loginsuccessi.size}`, 2]]);
         nalyticsI += parseFloat(`${loginsuccessi.size << (Math.min(4, Math.abs(loginsuccessi.size)))}`);
      let formN = notificationfillempty9 ? !notificationfillempty9 : notificationfillempty9;
      do {
         notificationfillempty9 = String.fromCharCode(106,0) == animationsb || iconmorez <= 57.11;
         if (formN) {
            break;
         }
      } while (formN && (notificationfillempty9));
         notificationfillempty9 = !notificationfillempty9;
         animationsb += `${(parseInt(`${iconmorez}`) / (Math.max(2, (notificationfillempty9 ? 5 : 2))))}`;
      let exampleimageq = notificationfillempty9 ? !notificationfillempty9 : notificationfillempty9;
      do {
         notificationfillempty9 = 68.34 > iconmorez && notificationfillempty9;
         if (exampleimageq) {
            break;
         }
      } while (exampleimageq && (animationsb.length >= 1));
          let notificationfillemptyK = String.fromCharCode(111,95,52,49,95,99,111,110,115,116,114,117,99,116,0);
          let footballn = String.fromCharCode(110,117,108,108,115,95,103,95,56,53,0);
          let valuesT = String.fromCharCode(116,111,97,115,116,115,95,119,95,49,51,0);
         notificationfillempty9 = iconmorez == notificationfillemptyK.length;
         notificationfillemptyK = "3";
         footballn = `${(String.fromCharCode(107,0) == valuesT ? footballn.length : valuesT.length)}`;
      for (let x = 0; x < 2; x++) {
         iconmorez *= (1 + (notificationfillempty9 ? 2 : 3));
      }
      for (let p = 0; p < 1; p++) {
          let trashG = 1;
         notificationfillempty9 = (iconmorez + animationsb.length) >= 49.79;
         trashG -= trashG;
      }
      unimplementedviewB.push(parseInt(`${kleviny}`) - 1);
      unimplementedviewB.push(parseInt(`${shielddone7}`) / 3);
       let runtimeschedulerv = true;
       let downloadingS = String.fromCharCode(104,95,53,52,95,116,104,114,101,97,100,103,114,111,117,112,0);
      let commonw = runtimeschedulerv ? !runtimeschedulerv : runtimeschedulerv;
      do {
         runtimeschedulerv = runtimeschedulerv && downloadingS.length >= 13;
         if (commonw) {
            break;
         }
      } while (commonw && (!runtimeschedulerv || 1 >= downloadingS.length));
       let agreementJ = String.fromCharCode(105,110,100,101,102,105,110,105,116,101,95,118,95,50,53,0);
       let selectedz = String.fromCharCode(112,95,52,49,95,114,107,109,112,112,0);
          let trashg = String.fromCharCode(110,95,53,51,95,115,98,105,116,115,0);
         agreementJ = "3";
         trashg = `${trashg.length}`;
         agreementJ += `${(String.fromCharCode(51,0) == agreementJ ? downloadingS.length : agreementJ.length)}`;
      for (let f = 0; f < 1; f++) {
          let albumx = String.fromCharCode(118,95,52,49,95,100,97,105,108,121,0);
          let iconclosewhitebgH = String.fromCharCode(105,103,110,111,114,101,100,95,102,95,56,55,0);
          let moonm: Array<any> = [String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,95,113,95,50,55,0), String.fromCharCode(101,95,51,51,95,115,101,110,100,118,0), String.fromCharCode(99,95,55,53,95,118,105,100,101,111,116,111,111,108,98,111,120,0)];
          let attributedstringd = String.fromCharCode(112,111,108,121,108,105,110,101,95,106,95,50,52,0);
         selectedz = `${albumx.length}`;
         albumx = `${(attributedstringd == String.fromCharCode(115,0) ? moonm.length : attributedstringd.length)}`;
         iconclosewhitebgH += `${iconclosewhitebgH.length % 1}`;
         moonm.push(attributedstringd.length);
      }
      for (let y = 0; y < 2; y++) {
          let roboto7 = 0;
          let libffmpegkits = 5.0;
          let moduleM = 1;
         selectedz += `${2 + selectedz.length}`;
         roboto7 >>= Math.min(4, Math.abs(parseInt(`${libffmpegkits}`)));
         libffmpegkits += parseFloat(`${parseInt(`${libffmpegkits}`)}`);
         moduleM %= Math.max(2 / (Math.max(moduleM, 1)), 1);
      }
      auto_k2 = `${auto_k2.length}`;
   for (let n = 0; n < 3; n++) {
       let termss = 5.0;
       let runtimeschedulerB: Array<any> = [800, 749, 31];
       let rewardvideo3 = String.fromCharCode(109,111,115,97,105,99,95,49,95,57,49,0);
       let areaF = 5.0;
       let profileframeD = true;
      if (rewardvideo3.length > areaF) {
          let reactnativeratingsx = false;
          let runtimeschedulerD = false;
          let abidetect8 = false;
          let footballfieldF = 1.0;
          let v_hashF = String.fromCharCode(110,112,112,116,114,97,110,115,112,111,115,101,95,99,95,54,55,0);
         areaF -= ((reactnativeratingsx ? 4 : 4) & 2);
         reactnativeratingsx = v_hashF.length >= 5 || footballfieldF >= 81.93;
         runtimeschedulerD = footballfieldF == 87.20 || abidetect8;
         abidetect8 = !abidetect8;
         v_hashF += "1";
      }
       let libavutilH = String.fromCharCode(114,101,105,115,115,117,101,95,57,95,51,52,0);
       let executora = String.fromCharCode(119,95,53,95,115,101,99,116,111,114,0);
      while ((5 << (Math.min(1, executora.length))) > 5 && (termss - 3.86) > 2.73) {
          let signinuph: Array<any> = [String.fromCharCode(100,95,53,48,95,115,99,99,111,110,102,105,103,0), String.fromCharCode(97,100,106,117,115,116,101,114,95,57,95,57,49,0), String.fromCharCode(103,111,108,111,109,98,95,121,95,55,54,0)];
          let overlayN: Map<any, any> = new Map([[String.fromCharCode(119,95,54,51,95,109,105,120,105,110,0),54], [String.fromCharCode(122,95,51,48,95,99,111,110,116,97,105,110,101,114,0),872]]);
         executora = `${executora.length}`;
         signinuph.push(signinuph.length);
         overlayN = new Map([[`${overlayN.size}`, 3 * overlayN.size]]);
         break;
      }
       let libhermes4: Map<any, any> = new Map([[String.fromCharCode(118,95,56,55,95,112,104,121,115,105,99,97,108,0),415], [String.fromCharCode(99,95,54,54,95,110,111,116,101,0),624], [String.fromCharCode(100,119,111,114,100,95,116,95,51,48,0),167]]);
       let condensedy: Map<any, any> = new Map([[String.fromCharCode(114,101,99,101,112,116,105,111,110,95,115,95,53,50,0),156], [String.fromCharCode(102,111,114,101,97,99,104,95,110,95,57,56,0),267], [String.fromCharCode(113,95,56,51,95,97,99,114,111,110,121,109,0),666]]);
         rewardvideo3 += `${libhermes4.size >> (Math.min(executora.length, 4))}`;
          let libreactnativeblob2: Map<any, any> = new Map([[String.fromCharCode(108,95,49,50,95,116,114,101,122,111,114,0),715], [String.fromCharCode(114,101,112,114,101,115,101,110,116,115,95,117,95,54,56,0),982], [String.fromCharCode(98,97,114,99,111,100,101,95,57,95,56,57,0),419]]);
          let traminim = String.fromCharCode(100,95,54,56,95,98,116,110,99,108,105,99,107,0);
         runtimeschedulerB.push(libhermes4.size / 3);
         libreactnativeblob2.set(`${traminim}`, 3);
         traminim += `${2 | traminim.length}`;
      for (let c = 0; c < 2; c++) {
         libavutilH += `${parseInt(`${areaF}`) - condensedy.size}`;
      }
         libhermes4 = new Map([[`${condensedy.size}`, condensedy.size ^ parseInt(`${areaF}`)]]);
       let closeS = String.fromCharCode(108,95,54,52,95,109,101,109,98,101,114,0);
         termss -= 2;
         runtimeschedulerB.push(rewardvideo3.length << (Math.min(Math.abs(3), 3)));
       let themey = String.fromCharCode(115,114,99,95,110,95,49,56,0);
      if (themey.length < 2) {
         themey = `${condensedy.size}`;
      }
       let imagenetworkerrJ = String.fromCharCode(106,95,52,95,105,110,108,105,103,104,116,0);
      while ((themey.length << (Math.min(Math.abs(5), 5))) < 4) {
         runtimeschedulerB.push(((profileframeD ? 5 : 4) >> (Math.min(Math.abs(parseInt(`${areaF}`)), 5))));
         break;
      }
      type_f0N = areaF < 33.34;
   }
    if (result == null) {

      iconedith += `${iconedith.length - 2}`;
   for (let m = 0; m < 3; m++) {
       let directt = true;
       let libreactnativeblobg: Map<any, any> = new Map([[String.fromCharCode(102,97,100,101,111,117,116,95,102,95,55,0),String.fromCharCode(99,104,97,114,108,101,110,95,115,95,50,0)], [String.fromCharCode(100,95,51,51,95,108,97,99,101,115,0),String.fromCharCode(114,95,52,48,95,104,114,101,97,100,0)]]);
       let codeq = String.fromCharCode(119,95,57,54,95,101,114,97,0);
       let updatesL = 3.0;
      if ((updatesL - 3.67) == 3.37) {
         directt = libreactnativeblobg.size >= 31;
      }
      let successm = directt ? !directt : directt;
      do {
         directt = codeq.length < 24 || 87.11 < updatesL;
         if (successm) {
            break;
         }
      } while (successm && ((libreactnativeblobg.size % 3) > 5 || !directt));
         updatesL /= Math.max(3, parseFloat(`${1 ^ codeq.length}`));
       let resend5 = 0.0;
       let predictionM = 0.0;
         updatesL *= parseFloat(`${parseInt(`${updatesL}`) * 1}`);
      while ((updatesL + resend5) > 4.94 || (4.94 + resend5) > 3.10) {
          let libpangleflippedR = 5;
          let eighteenz = 5.0;
          let turndown6: Map<any, any> = new Map([[String.fromCharCode(116,114,105,109,109,101,100,95,113,95,57,51,0),String.fromCharCode(116,95,52,54,95,112,97,115,116,101,0)], [String.fromCharCode(99,112,117,105,100,95,119,95,52,48,0),String.fromCharCode(113,95,50,52,95,103,105,118,101,110,0)], [String.fromCharCode(115,105,122,105,110,103,95,111,95,50,52,0),String.fromCharCode(115,97,105,111,95,55,95,57,51,0)]]);
          let penalty1 = false;
          let hookss = 2;
         updatesL -= parseFloat(`${1 & parseInt(`${updatesL}`)}`);
         libpangleflippedR += libpangleflippedR / (Math.max(turndown6.size, 9));
         eighteenz += parseFloat(`${libpangleflippedR >> (Math.min(4, Math.abs(2)))}`);
         turndown6.set(`${hookss}`, ((penalty1 ? 2 : 4) >> (Math.min(Math.abs(hookss), 1))));
         penalty1 = turndown6.size <= 91;
         break;
      }
       let valuesc = String.fromCharCode(113,95,57,54,95,114,103,98,114,103,98,0);
       let dycreatorl = false;
         resend5 -= (3 & (directt ? 2 : 5));
      while (valuesc.includes(`${codeq.length}`)) {
         valuesc += `${parseInt(`${resend5}`) & 1}`;
         break;
      }
       let dependenciesn = String.fromCharCode(99,95,57,57,95,102,102,109,101,116,97,0);
       let activeZ = String.fromCharCode(104,100,114,115,95,50,95,57,50,0);
         dycreatorl = (predictionM * activeZ.length) >= 31.98;
      iconedith = `${parseInt(`${updatesL}`)}`;
   }
   let encryptS = auto_k2.length >= 8549995;
   do {
       let castU = String.fromCharCode(110,95,54,52,95,115,112,97,99,101,100,0);
       let topona = String.fromCharCode(115,104,97,114,112,110,101,115,115,95,117,95,51,57,0);
       let inviteP = 1;
       let libpangleflippedb = String.fromCharCode(119,104,97,116,115,95,108,95,56,57,0);
       let libfbY = 5.0;
      for (let o = 0; o < 3; o++) {
         libpangleflippedb += `${topona.length | libpangleflippedb.length}`;
      }
      for (let u = 0; u < 1; u++) {
         castU = `${(String.fromCharCode(74,0) == topona ? castU.length : topona.length)}`;
      }
         topona += "1";
         libpangleflippedb += `${libpangleflippedb.length}`;
      if ((5.66 - libfbY) >= 2.75) {
         libfbY -= topona.length;
      }
      for (let x = 0; x < 3; x++) {
         castU = "1";
      }
          let upload1: Map<any, any> = new Map([[String.fromCharCode(107,95,49,56,95,101,120,116,101,110,115,105,111,110,0),759], [String.fromCharCode(107,95,55,50,95,106,112,101,103,0),314]]);
          let linkK = 3.0;
         libfbY -= upload1.size >> (Math.min(Math.abs(3), 1));
         upload1 = new Map([[`${linkK}`, parseInt(`${linkK}`) % 1]]);
      if (libpangleflippedb.startsWith(`${inviteP}`)) {
         libpangleflippedb += `${(libpangleflippedb == String.fromCharCode(86,0) ? libpangleflippedb.length : parseInt(`${libfbY}`))}`;
      }
      if (libpangleflippedb.length == 5) {
         topona = `${3 | topona.length}`;
      }
      while (topona == libpangleflippedb) {
         libpangleflippedb = "2";
         break;
      }
          let executorS: Map<any, any> = new Map([[String.fromCharCode(112,97,103,101,99,111,117,110,116,95,112,95,55,57,0),864], [String.fromCharCode(116,104,97,110,95,101,95,52,54,0),542]]);
          let transferL = true;
         libfbY /= Math.max(3, executorS.size);
         executorS = new Map([[`${transferL}`, 1]]);
      let forwardF = inviteP >= 9458463;
      do {
          let skipe: Array<any> = [142, 221, 540];
          let dataM = String.fromCharCode(119,95,50,95,112,114,101,112,101,110,100,0);
         inviteP *= 1 << (Math.min(Math.abs(inviteP), 4));
         skipe = [dataM.length];
         dataM = `${(dataM == String.fromCharCode(77,0) ? skipe.length : dataM.length)}`;
         if (forwardF) {
            break;
         }
      } while ((2.60 > (libfbY * 2.11) && 5 > (parseInt(`${libfbY}`) * inviteP)) && forwardF);
      let queste = libpangleflippedb == String.fromCharCode(105,116,100,0);
      do {
         libpangleflippedb += `${inviteP / (Math.max(1, 8))}`;
         if (queste) {
            break;
         }
      } while (queste && (!libpangleflippedb.includes(`${libfbY}`)));
      let halffieldimage3 = inviteP >= 6782529;
      do {
          let componentsp = 3.0;
         inviteP |= inviteP % (Math.max(3, 8));
         componentsp += parseInt(`${componentsp}`) % 1;
         if (halffieldimage3) {
            break;
         }
      } while (halffieldimage3 && (inviteP > libpangleflippedb.length));
      let catalogK = String.fromCharCode(50,118,122,109,106,105,49,0) == castU;
      do {
          let kuaishou1 = 0.0;
          let giftx = String.fromCharCode(119,95,52,57,95,99,103,105,109,97,103,101,0);
          let about_ = 1.0;
          let awayteamfieldd = true;
          let animationU = 4.0;
         castU = `${(String.fromCharCode(102,0) == castU ? parseInt(`${libfbY}`) : castU.length)}`;
         kuaishou1 /= Math.max(parseFloat(`${giftx.length - parseInt(`${animationU}`)}`), 3);
         giftx += `${parseInt(`${kuaishou1}`)}`;
         about_ *= parseFloat(`${giftx.length >> (Math.min(Math.abs(3), 3))}`);
         awayteamfieldd = String.fromCharCode(82,0) == giftx;
         animationU /= Math.max(giftx.length >> (Math.min(Math.abs(1), 1)), 4);
         if (catalogK) {
            break;
         }
      } while (catalogK && (topona != String.fromCharCode(102,0)));
      auto_k2 += `${privilegeE.length + 2}`;
      if (encryptS) {
         break;
      }
   } while (encryptS && (auto_k2.length == iconedith.length));
   let chinaZ = 7126345 >= iconedith.length;
   do {
       let time_48e = 4.0;
       let whistleorangeq = 0.0;
       let valuesB: Map<any, any> = new Map([[String.fromCharCode(120,116,101,97,95,53,95,49,52,0),466], [String.fromCharCode(97,114,114,97,121,95,121,95,52,0),843], [String.fromCharCode(105,95,52,55,95,109,97,110,100,101,108,98,114,111,116,0),270]]);
       let orangew = String.fromCharCode(97,115,107,105,110,103,95,49,95,56,49,0);
      while (4 < (3 + orangew.length) || 2 < (parseInt(`${whistleorangeq}`) + 3)) {
         orangew = `${orangew.length}`;
         break;
      }
      if (5 >= (orangew.length - parseInt(`${whistleorangeq}`))) {
         whistleorangeq += parseFloat(`${valuesB.size * parseInt(`${whistleorangeq}`)}`);
      }
      if ((time_48e / (Math.max(7, whistleorangeq))) < 4.67 || 3.14 < (whistleorangeq / 4.67)) {
         time_48e *= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${whistleorangeq}`)), 3))}`);
      }
         time_48e -= parseFloat(`${parseInt(`${whistleorangeq}`)}`);
      if ((orangew.length & 2) < 4 && (parseInt(`${whistleorangeq}`) - 2) < 5) {
         whistleorangeq += parseFloat(`${valuesB.size}`);
      }
      for (let q = 0; q < 3; q++) {
         whistleorangeq += parseFloat(`${parseInt(`${time_48e}`) * valuesB.size}`);
      }
          let scrollviewo = String.fromCharCode(112,95,54,54,95,104,105,103,104,105,103,104,116,0);
          let libflipperQ: Array<any> = [String.fromCharCode(115,101,114,105,97,108,105,122,101,100,95,57,95,51,0), String.fromCharCode(111,112,116,105,109,105,122,97,116,105,111,110,95,118,95,49,55,0), String.fromCharCode(105,109,112,114,105,110,116,95,117,95,51,55,0)];
         valuesB.set(scrollviewo, (String.fromCharCode(67,0) == scrollviewo ? libflipperQ.length : scrollviewo.length));
         valuesB.set(`${time_48e}`, parseInt(`${time_48e}`));
      while (!orangew.startsWith(`${valuesB.size}`)) {
          let grayb = 4.0;
          let huawei_ = 5;
         valuesB = new Map([[`${valuesB.size}`, (orangew == String.fromCharCode(81,0) ? orangew.length : valuesB.size)]]);
         grayb /= Math.max(1, 2 << (Math.min(Math.abs(huawei_), 1)));
         huawei_ /= Math.max(3, huawei_);
         break;
      }
      if ((parseFloat(`${valuesB.size}`) * whistleorangeq) <= 3.82 || (valuesB.size % (Math.max(1, 2))) <= 4) {
         whistleorangeq += (parseFloat(`${orangew == String.fromCharCode(98,0) ? parseInt(`${time_48e}`) : orangew.length}`));
      }
         time_48e /= Math.max(2, parseFloat(`${orangew.length}`));
         orangew += `${orangew.length}`;
      iconedith = `${orangew.length + 2}`;
      if (chinaZ) {
         break;
      }
   } while (chinaZ && (1.36 >= (3.36 + kleviny) || 1 >= (parseInt(`${kleviny}`) + 2)));
      shielddone7 -= parseFloat(`${1}`);
      return;
    }

    await dispatch(updateUserAuth(result));

      auto_k2 = `${unimplementedviewB.length / (Math.max(3, 9))}`;
      unimplementedviewB = [unimplementedviewB.length * parseInt(`${shielddone7}`)];
      unimplementedviewB.push(parseInt(`${kleviny}`));
   let bdxadsdkQ = privilegeE.length >= 8699260;
   do {
       let stationu: Array<any> = [402, 296, 78];
       let stepQ = 4.0;
       let libcrashsdkq = 1.0;
         stepQ += 1 / (Math.max(parseInt(`${stepQ}`), 7));
      let configurel = 5078457.0 >= libcrashsdkq;
      do {
         libcrashsdkq *= parseFloat(`${stationu.length}`);
         if (configurel) {
            break;
         }
      } while (configurel && (4 > (1 & stationu.length)));
      let libcrashsdkk = stepQ <= 6325808.0;
      do {
          let renewT = String.fromCharCode(107,101,121,119,111,114,100,95,50,95,54,52,0);
          let sportsa = String.fromCharCode(109,95,49,57,95,114,101,117,112,108,111,97,100,105,110,103,0);
          let dragz: Map<any, any> = new Map([[String.fromCharCode(106,95,56,50,95,115,101,101,107,98,97,99,107,0),418], [String.fromCharCode(107,95,52,55,95,111,112,117,115,116,97,98,0),804]]);
          let libavfilterF: Array<any> = [846, 48];
         stepQ += parseInt(`${libcrashsdkq}`) % 1;
         renewT += `${dragz.size}`;
         sportsa = `${libavfilterF.length * 1}`;
         dragz = new Map([[`${dragz.size}`, dragz.size - renewT.length]]);
         libavfilterF = [sportsa.length];
         if (libcrashsdkk) {
            break;
         }
      } while (((stepQ / 3.36) < 1.39 && 3 < (parseInt(`${stepQ}`) / (Math.max(stationu.length, 2)))) && libcrashsdkk);
      if (5.52 >= stepQ) {
          let contextL = 4.0;
          let umengf = 4;
         stepQ /= Math.max(3 * umengf, 5);
         contextL -= 3 ^ parseInt(`${contextL}`);
         umengf %= Math.max(2, 4);
      }
      while (1.37 <= libcrashsdkq) {
         stationu = [parseInt(`${stepQ}`) * stationu.length];
         break;
      }
          let megaphoneV = String.fromCharCode(98,111,114,105,110,103,115,115,108,95,110,95,51,49,0);
          let abouta = 1.0;
          let type_qaQ = 5.0;
         libcrashsdkq *= parseFloat(`${3}`);
         megaphoneV = "3";
         abouta -= 1 * parseInt(`${type_qaQ}`);
         type_qaQ /= Math.max(parseInt(`${abouta}`), 4);
       let arrowrightM = 1.0;
      for (let f = 0; f < 1; f++) {
         arrowrightM *= parseInt(`${arrowrightM}`);
      }
      let phoneT = arrowrightM >= 8984182.0;
      do {
          let classesb = String.fromCharCode(110,95,53,95,113,117,97,110,116,105,122,101,100,0);
          let long_e5l: Array<any> = [String.fromCharCode(110,95,53,52,95,117,110,114,111,117,110,100,101,100,0), String.fromCharCode(100,101,112,101,110,100,101,110,116,95,122,95,57,56,0)];
         arrowrightM -= parseInt(`${stepQ}`) | stationu.length;
         classesb = `${long_e5l.length}`;
         long_e5l = [1];
         if (phoneT) {
            break;
         }
      } while ((4 <= (stationu.length / 4) || (2.91 - arrowrightM) <= 1.54) && phoneT);
      privilegeE = `${privilegeE.length}`;
      if (bdxadsdkQ) {
         break;
      }
   } while (bdxadsdkQ && (2 < (1 + privilegeE.length) || 5 < (unimplementedviewB.length + 1)));
      unimplementedviewB = [unimplementedviewB.length | 3];

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
