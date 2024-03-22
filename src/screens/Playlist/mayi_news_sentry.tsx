import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import ScreenContainer from '../../components/container/mayi_save';
import { RootStackScreenProps } from '@type/mayi_video_binddatas';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/mayi_redirect';
import { mayi_Libapminsightb } from '@redux/mayi_live_tumbnail';

import TitleWithBackButtonHeader from '../../components/header/mayi_predictiondefault_header';
import { mayi_FileBrightness, mayi_Middleware } from '@redux/reducers/mayi_temp_holder';
import { removeVodsFromHistory, playVod } from '@redux/actions/mayi_goallogo';
import VodHistoryCard from '../../components/vod/mayi_mbridge_football';
import CheckBoxSelected from '@static/images/encryptDownModity.svg';
import CheckBoxUnselected from '@static/images/notificationfillemptyUntick.svg';
import { mayi_Iconarrowright, mayi_SmallorangemanLibcxxcomponents, mayi_EmptyGradle } from '@type/mayi_green';
import { Button } from '@rneui/themed';
import ConfirmationModal from '../../components/modal/mayi_small_catalog';
import VodLiveStationListVertical from '../../components/vod/mayi_basketballmatchdetailbg';
import EmptyList from '../../components/common/mayi_unread';
import { ScrollView } from 'react-native-gesture-handler';
import FastImage from '../../components/common/mayi_slider';
import { API_DOMAIN_TEST } from '@utility/mayi_middleware_apps';
import { enableAdultMode } from '@redux/actions/mayi_iconorientation_chatroombackground';
import { mayi_CrossChat } from '@api';

type mayi_Hash = {
  data: {
    List: Array<mayi_SmallorangemanLibcxxcomponents>;
    TotalPageCount: number;
  };
};



export default ({ navigation, route }: RootStackScreenProps<'午夜场剧情'>) => {
  const [adultVodData, setAdultVodData] = useState<mayi_SmallorangemanLibcxxcomponents[]>([]);
  const { colors, textVariants, spacing, icons } = useTheme();
  const [page, setPage] = useState(1);
  const totalPageCount = useRef<number>(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useAppDispatch()

  const fetchVod = async (page: number) => {
    return await mayi_CrossChat.getList({
      page: page,
      limit: 10,
      category: route.params.class,
      vod_source_name: route.params.vod_source_name,
      xMode: true,
    })
  };

  const fetchNextPage = async () => {
       let catalogR: Array<any> = [812, 510];
    let transferJ = String.fromCharCode(109,117,114,109,117,114,95,103,95,50,55,0);
    let subtextm = 4.0;
    let xvod1: Array<any> = [930, 939];
    let halffieldimagem = String.fromCharCode(115,95,52,49,95,116,119,111,115,99,97,108,101,0);
    let ajaxf = String.fromCharCode(99,95,54,53,95,97,117,116,104,111,114,105,122,101,100,0);
    let yellowtoredM: Array<any> = [130, 295];
    let yellowi: Map<any, any> = new Map([[String.fromCharCode(109,95,50,51,95,109,101,109,111,114,121,115,116,114,101,97,109,0),404], [String.fromCharCode(120,95,51,54,95,111,112,116,105,109,105,122,97,116,105,111,110,0),126], [String.fromCharCode(115,95,57,51,95,117,110,99,111,110,115,117,109,101,100,0),464]]);
    let bell0 = true;
    let previewk = String.fromCharCode(104,95,53,53,95,115,99,114,111,108,108,97,98,108,101,0);
    let nbatrophyB: Array<any> = [269, 785];
    let castingS: Array<any> = [433, 677];
    let gpayo: Array<any> = [855, 630, 689];
      transferJ = `${3 & yellowtoredM.length}`;
       let invite5 = String.fromCharCode(105,95,55,50,95,97,112,112,114,111,118,97,108,0);
      let libturbomodulejsijniQ = invite5.length >= 7060747;
      do {
         invite5 += `${invite5.length / (Math.max(1, 7))}`;
         if (libturbomodulejsijniQ) {
            break;
         }
      } while ((invite5.length == 4 || 4 == invite5.length) && libturbomodulejsijniQ);
       let typesZ = false;
       let phonesharev = false;
       let information7 = String.fromCharCode(105,95,55,95,110,97,110,111,112,98,0);
      yellowtoredM.push(parseInt(`${subtextm}`));
   if (Array.from(yellowi.values()).includes(subtextm)) {
      yellowi.set(`${bell0}`, catalogR.length * 3);
   }

    if (isFetching) return;

      subtextm += parseFloat(`${xvod1.length}`);
      ajaxf = `${xvod1.length << (Math.min(Math.abs(1), 2))}`;
   let libreanimatedC = subtextm >= 5452590.0;
   do {
      subtextm += (parseFloat(`${String.fromCharCode(99,0) == transferJ ? transferJ.length : catalogR.length}`));
      if (libreanimatedC) {
         break;
      }
   } while (libreanimatedC && (subtextm >= 2.9 || 5.46 >= (subtextm / 2.9)));

    if (page > totalPageCount.current) {

   while (2 > (transferJ.length - xvod1.length)) {
      xvod1.push(xvod1.length >> (Math.min(previewk.length, 3)));
      break;
   }
   for (let f = 0; f < 1; f++) {
      catalogR = [nbatrophyB.length ^ 3];
   }
      ajaxf += `${3 << (Math.min(1, ajaxf.length))}`;
      setHasNextPage(false);

   for (let s = 0; s < 1; s++) {
      yellowtoredM.push(1 << (Math.min(5, nbatrophyB.length)));
   }
       let leagueb = String.fromCharCode(114,95,54,53,95,109,97,120,0);
       let librrch = String.fromCharCode(114,95,55,48,95,99,117,109,117,108,97,116,105,118,101,0);
         librrch = `${leagueb.length}`;
         librrch += `${leagueb.length}`;
         librrch = `${(librrch == String.fromCharCode(90,0) ? librrch.length : leagueb.length)}`;
      let connectionI = leagueb.length >= 8283602;
      do {
         leagueb = "3";
         if (connectionI) {
            break;
         }
      } while ((librrch.length > leagueb.length) && connectionI);
      for (let i = 0; i < 3; i++) {
         librrch += `${(String.fromCharCode(83,0) == leagueb ? leagueb.length : librrch.length)}`;
      }
      while (3 <= leagueb.length) {
         librrch += `${leagueb.length & 2}`;
         break;
      }
      previewk = `${catalogR.length << (Math.min(Math.abs(2), 4))}`;
   for (let d = 0; d < 3; d++) {
       let giftf = String.fromCharCode(113,95,52,50,95,108,105,98,119,101,98,112,0);
       let reduceri = String.fromCharCode(99,95,53,53,95,112,105,120,101,108,117,116,105,108,115,0);
       let libapminsightbt = 4;
       let hongkongw = 4;
       let iconorientation0 = true;
      if (2 <= (giftf.length * hongkongw) && 1 <= (giftf.length * 2)) {
         hongkongw &= libapminsightbt;
      }
      for (let j = 0; j < 3; j++) {
         hongkongw &= (String.fromCharCode(98,0) == giftf ? reduceri.length : giftf.length);
      }
      if (iconorientation0) {
         iconorientation0 = hongkongw == 76 && !iconorientation0;
      }
          let imagemanagerv = 0;
          let privacyg = 2.0;
         libapminsightbt -= (String.fromCharCode(102,0) == giftf ? giftf.length : hongkongw);
         imagemanagerv &= 2;
         privacyg += parseFloat(`${1}`);
         libapminsightbt -= 2;
          let footballtrophyK = 2.0;
         libapminsightbt |= (String.fromCharCode(55,0) == giftf ? libapminsightbt : giftf.length);
         footballtrophyK -= parseFloat(`${parseInt(`${footballtrophyK}`)}`);
      while (hongkongw >= reduceri.length) {
          let nalyticsb = String.fromCharCode(106,95,57,48,95,101,114,114,109,115,103,0);
          let unimplementedviewy = 4;
         reduceri += `${unimplementedviewy}`;
         nalyticsb += `${nalyticsb.length}`;
         unimplementedviewy += (nalyticsb == String.fromCharCode(65,0) ? nalyticsb.length : nalyticsb.length);
         break;
      }
      for (let s = 0; s < 1; s++) {
         hongkongw <<= Math.min(Math.abs(1), 1);
      }
         libapminsightbt <<= Math.min(3, reduceri.length);
         hongkongw *= 2;
         reduceri = `${3 + hongkongw}`;
         libapminsightbt <<= Math.min(1, Math.abs(hongkongw % 1));
       let awayicont: Array<any> = [String.fromCharCode(121,95,49,49,95,109,117,108,116,105,100,101,115,99,114,105,112,116,111,114,0), String.fromCharCode(100,95,54,95,114,117,108,101,115,0)];
      for (let f = 0; f < 1; f++) {
         awayicont.push(3 % (Math.max(8, libapminsightbt)));
      }
      if (awayicont.length > reduceri.length) {
          let libyogat = String.fromCharCode(105,115,115,117,101,95,103,95,54,55,0);
          let graphicsD = String.fromCharCode(122,95,51,50,95,116,105,109,101,115,0);
         reduceri = `${(reduceri == String.fromCharCode(98,0) ? reduceri.length : (iconorientation0 ? 1 : 4))}`;
         libyogat = `${3 << (Math.min(2, libyogat.length))}`;
         graphicsD = `${graphicsD.length}`;
      }
      ajaxf += `${xvod1.length ^ 3}`;
   }
      return;
    } else {

   if ((yellowi.size * 5) == 2 && (5 * yellowi.size) == 3) {
      castingS = [catalogR.length * 1];
   }
       let matchesV = String.fromCharCode(116,111,111,108,99,104,97,105,110,95,51,95,54,57,0);
       let rncoreP = true;
          let switch_sM = true;
          let bnewsL = false;
          let iconpointscoreN = 1;
         rncoreP = matchesV.length < 11 || switch_sM;
         switch_sM = 96 < iconpointscoreN && !bnewsL;
         bnewsL = 8 < iconpointscoreN;
         rncoreP = matchesV.endsWith(`${rncoreP}`);
      for (let g = 0; g < 2; g++) {
         rncoreP = rncoreP && matchesV.length == 7;
      }
      if (rncoreP) {
          let defaultteamC = true;
          let yellowcirclebgg = String.fromCharCode(97,118,97,105,108,95,99,95,49,57,0);
         matchesV = `${(1 >> (Math.min(2, Math.abs((rncoreP ? 2 : 2)))))}`;
         defaultteamC = yellowcirclebgg.length >= 48;
         yellowcirclebgg += `${(String.fromCharCode(117,0) == yellowcirclebgg ? (defaultteamC ? 2 : 5) : yellowcirclebgg.length)}`;
      }
       let custom_ = false;
       let hongkongR = true;
         custom_ = !hongkongR;
      bell0 = nbatrophyB.length <= 82 && String.fromCharCode(113,0) == halffieldimagem;
   for (let x = 0; x < 3; x++) {
       let detailsC = String.fromCharCode(111,114,112,104,97,110,95,107,95,54,49,0);
         detailsC = `${detailsC.length}`;
         detailsC = `${detailsC.length}`;
       let lineV = String.fromCharCode(108,95,49,48,48,95,115,101,110,100,109,115,103,0);
      castingS.push((transferJ == String.fromCharCode(78,0) ? castingS.length : transferJ.length));
   }
      setHasNextPage(true);
    }
    setIsFetching(true);

      subtextm *= parseFloat(`${halffieldimagem.length}`);
      subtextm /= Math.max(2, parseFloat(`${previewk.length * 3}`));
   for (let i = 0; i < 3; i++) {
       let unreadU: Array<any> = [44, 883];
       let shootyesgoalN: Array<any> = [524, 198];
       let fieldi = 5.0;
         unreadU = [1 + parseInt(`${fieldi}`)];
      while ((parseFloat(`${unreadU.length}`) + fieldi) > 1.99) {
          let chinasameQ = 4.0;
          let googlew = String.fromCharCode(103,95,53,50,95,115,105,109,117,108,99,97,115,116,0);
          let brightnessy = String.fromCharCode(100,111,119,110,108,105,110,107,95,99,95,52,53,0);
         unreadU = [unreadU.length & googlew.length];
         chinasameQ /= Math.max(parseFloat(`${2 + parseInt(`${chinasameQ}`)}`), 5);
         googlew += "2";
         brightnessy += `${3 >> (Math.min(5, Math.abs(parseInt(`${chinasameQ}`))))}`;
         break;
      }
         fieldi *= parseFloat(`${unreadU.length ^ shootyesgoalN.length}`);
      while (5 <= (2 << (Math.min(2, unreadU.length))) && 2 <= (unreadU.length << (Math.min(2, shootyesgoalN.length)))) {
          let exampleimageu = 1.0;
          let hooks1: Map<any, any> = new Map([[String.fromCharCode(119,109,97,112,114,111,100,97,116,97,95,111,95,52,57,0),false ], [String.fromCharCode(122,95,50,50,95,102,109,97,99,0),true ], [String.fromCharCode(119,95,57,56,95,109,105,110,116,0),false ]]);
          let core2 = String.fromCharCode(111,110,101,116,105,109,101,97,117,116,104,95,120,95,54,57,0);
          let downloading9: Map<any, any> = new Map([[String.fromCharCode(112,95,56,57,95,118,111,98,115,117,98,0),60], [String.fromCharCode(103,114,111,101,115,116,108,95,51,95,49,49,0),574]]);
         shootyesgoalN = [downloading9.size + 1];
         exampleimageu -= parseFloat(`${parseInt(`${exampleimageu}`)}`);
         hooks1.set(core2, 1);
         core2 += `${(String.fromCharCode(101,0) == core2 ? core2.length : hooks1.size)}`;
         downloading9 = new Map([[`${hooks1.size}`, 1 >> (Math.min(1, Math.abs(hooks1.size)))]]);
         break;
      }
      if (1 <= (unreadU.length % (Math.max(1, 8))) || (1 % (Math.max(4, unreadU.length))) <= 1) {
          let minimizeW = 0.0;
          let floaterr = String.fromCharCode(122,95,57,50,95,114,101,115,116,114,105,99,116,101,100,0);
          let reminderp = 1;
         shootyesgoalN.push((floaterr == String.fromCharCode(100,0) ? floaterr.length : unreadU.length));
         minimizeW -= parseInt(`${minimizeW}`);
         reminderp <<= Math.min(3, Math.abs(3 | parseInt(`${minimizeW}`)));
      }
      if ((4 & unreadU.length) < 4 && 4 < (shootyesgoalN.length & unreadU.length)) {
          let codegenE = true;
          let binddatas7: Array<any> = [840, 5];
          let pausev = 1.0;
         unreadU = [unreadU.length ^ 1];
         codegenE = !codegenE;
         binddatas7.push(binddatas7.length * 1);
         pausev *= parseFloat(`${parseInt(`${pausev}`)}`);
      }
         shootyesgoalN.push(shootyesgoalN.length ^ 1);
          let rewardA = true;
          let ccopy_r2f = String.fromCharCode(117,110,115,101,110,116,95,104,95,53,51,0);
         unreadU.push(unreadU.length & 3);
         rewardA = (57 > ((rewardA ? ccopy_r2f.length : 57) | ccopy_r2f.length));
       let pingm = false;
       let anytimeV = false;
      xvod1 = [xvod1.length ^ unreadU.length];
   }
    const vodData = await fetchVod(page) as mayi_Iconarrowright;

       let libcxxcomponentsY = String.fromCharCode(114,115,112,95,113,95,56,53,0);
       let privacyH = String.fromCharCode(99,95,53,50,95,99,119,114,115,105,0);
      while (privacyH.length >= libcxxcomponentsY.length) {
          let applek = 2;
         libcxxcomponentsY = `${(String.fromCharCode(66,0) == libcxxcomponentsY ? libcxxcomponentsY.length : applek)}`;
         break;
      }
      if (5 == privacyH.length) {
         privacyH = `${3 + privacyH.length}`;
      }
      if (!libcxxcomponentsY.endsWith(`${privacyH.length}`)) {
          let combinedZ = 2.0;
         libcxxcomponentsY = "3";
         combinedZ /= Math.max(parseInt(`${combinedZ}`) % (Math.max(9, parseInt(`${combinedZ}`))), 5);
      }
         privacyH += `${(String.fromCharCode(108,0) == libcxxcomponentsY ? privacyH.length : libcxxcomponentsY.length)}`;
         privacyH += `${libcxxcomponentsY.length}`;
          let giftO: Map<any, any> = new Map([[String.fromCharCode(118,102,105,108,116,101,114,95,53,95,57,57,0),310], [String.fromCharCode(115,95,56,95,105,102,114,97,109,101,0),914]]);
          let humidityW = String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,95,103,95,50,56,0);
         libcxxcomponentsY = `${libcxxcomponentsY.length >> (Math.min(humidityW.length, 2))}`;
         giftO.set(`${giftO.size}`, giftO.size);
         humidityW += `${3 - giftO.size}`;
      previewk = `${2 % (Math.max(6, gpayo.length))}`;
   for (let v = 0; v < 2; v++) {
       let renderU = String.fromCharCode(98,105,116,118,101,99,116,111,114,95,51,95,56,49,0);
       let reportd: Array<any> = [String.fromCharCode(103,114,97,121,95,50,95,52,50,0), String.fromCharCode(120,95,52,51,95,102,119,114,105,116,101,0), String.fromCharCode(115,116,101,114,101,111,95,50,95,51,50,0)];
      let circles = reportd.length >= 4945210;
      do {
         reportd.push((renderU == String.fromCharCode(48,0) ? reportd.length : renderU.length));
         if (circles) {
            break;
         }
      } while ((1 < (reportd.length - renderU.length) && (reportd.length - 1) < 2) && circles);
         renderU += `${renderU.length & reportd.length}`;
       let greyarrowup0 = 0.0;
       let awayiconP = 1.0;
         renderU += `${reportd.length / 3}`;
      if (renderU.startsWith(`${greyarrowup0}`)) {
         renderU += `${renderU.length ^ parseInt(`${awayiconP}`)}`;
      }
         reportd.push(reportd.length << (Math.min(renderU.length, 3)));
      previewk = `${1 + gpayo.length}`;
   }
   if ((xvod1.length ^ castingS.length) == 4 && (4 ^ castingS.length) == 2) {
      xvod1 = [castingS.length];
   }
    const data = vodData.List;

       let middleA = String.fromCharCode(102,114,101,101,109,95,49,95,51,55,0);
       let libfbjniR = String.fromCharCode(100,95,55,51,95,109,111,118,101,100,0);
       let rewardl = 5.0;
       let gradleo = 3.0;
         gradleo /= Math.max(2, (parseFloat(`${String.fromCharCode(101,0) == libfbjniR ? parseInt(`${gradleo}`) : libfbjniR.length}`)));
      for (let t = 0; t < 3; t++) {
          let libruntimeexecutorA: Map<any, any> = new Map([[String.fromCharCode(99,97,108,105,110,103,95,49,95,54,50,0),993], [String.fromCharCode(97,97,100,95,118,95,52,49,0),853], [String.fromCharCode(105,109,112,111,114,116,97,98,108,101,100,95,99,95,52,56,0),677]]);
          let productV = String.fromCharCode(120,95,52,95,113,99,101,108,112,0);
          let blackZ = 0.0;
          let floatingQ = String.fromCharCode(104,95,54,55,95,109,99,100,99,0);
          let inouttargetredz = 1;
         libfbjniR += `${parseInt(`${gradleo}`)}`;
         libruntimeexecutorA.set(productV, (productV == String.fromCharCode(117,0) ? productV.length : floatingQ.length));
         blackZ += libruntimeexecutorA.size;
         floatingQ = `${1 - libruntimeexecutorA.size}`;
         inouttargetredz &= 1;
      }
      for (let f = 0; f < 2; f++) {
         middleA = `${1 / (Math.max(2, parseInt(`${rewardl}`)))}`;
      }
       let flipperx: Array<any> = [735, 36];
      while (middleA.includes(`${rewardl}`)) {
         rewardl -= parseFloat(`${3 & parseInt(`${gradleo}`)}`);
         break;
      }
      if (libfbjniR.length < 4) {
          let base1 = 2;
          let gesturesn = 4.0;
          let redirectP = true;
          let inouttargetredx = String.fromCharCode(115,109,105,108,101,95,122,95,49,53,0);
         middleA += `${libfbjniR.length | 1}`;
         base1 %= Math.max(1, (parseInt(`${gesturesn}`) | (redirectP ? 4 : 4)));
         gesturesn *= parseInt(`${gesturesn}`) * base1;
         redirectP = !redirectP || base1 >= 89;
         inouttargetredx = `${((redirectP ? 5 : 1) % (Math.max(parseInt(`${gesturesn}`), 5)))}`;
      }
          let componentregistryB = String.fromCharCode(99,97,116,101,103,111,114,121,95,107,95,52,0);
          let vignettel = String.fromCharCode(97,114,114,111,119,95,54,95,50,56,0);
          let iconwatchY: Array<any> = [760, 150, 492];
         flipperx.push(flipperx.length * vignettel.length);
         componentregistryB = `${iconwatchY.length}`;
         vignettel += `${iconwatchY.length}`;
       let baseD = String.fromCharCode(99,95,52,57,95,98,114,101,97,107,115,0);
       let appleA = String.fromCharCode(111,118,101,114,102,108,111,119,95,121,95,49,52,0);
      halffieldimagem = `${catalogR.length}`;
      yellowtoredM = [((bell0 ? 2 : 5))];
   if (previewk.length < 5) {
      previewk += `${ajaxf.length}`;
   }
    setIsFetching(false);

       let uimanagerR = true;
       let arrowupK = true;
         arrowupK = (!arrowupK ? uimanagerR : arrowupK);
          let policyH = 3;
          let libapminsightaY: Array<any> = [334, 761];
          let subinR: Array<any> = [537, 464, 636];
         arrowupK = subinR.length == libapminsightaY.length;
         policyH += policyH;
         libapminsightaY = [policyH << (Math.min(Math.abs(3), 4))];
      if (arrowupK) {
         uimanagerR = !uimanagerR || arrowupK;
      }
       let orangeuparroww = true;
       let referrerH = false;
         arrowupK = !referrerH;
          let incidentw = 0.0;
         uimanagerR = !uimanagerR;
         incidentw += parseFloat(`${3 - parseInt(`${incidentw}`)}`);
      ajaxf += "3";
       let foregroundN: Map<any, any> = new Map([[String.fromCharCode(119,95,51,50,95,115,104,105,109,109,101,114,0),true ], [String.fromCharCode(111,112,115,99,97,108,101,95,98,95,56,55,0),true ], [String.fromCharCode(100,95,56,51,95,116,119,111,112,111,105,110,116,0),true ]]);
      if ((5 & foregroundN.size) == 5 || 5 == (5 & foregroundN.size)) {
          let spinnerD = String.fromCharCode(97,95,49,49,95,116,109,109,98,0);
          let cornerB: Map<any, any> = new Map([[String.fromCharCode(100,95,49,56,95,116,105,109,101,111,117,116,101,100,0),484], [String.fromCharCode(116,114,97,99,107,95,100,95,51,0),436], [String.fromCharCode(107,109,115,95,54,95,50,0),27]]);
          let pageV = 4;
         foregroundN.set(`${spinnerD}`, spinnerD.length);
         cornerB = new Map([[`${cornerB.size}`, 1]]);
         pageV += 3 & cornerB.size;
      }
      let downloaded3 = foregroundN.size >= 5243317;
      do {
         foregroundN.set(`${foregroundN.size}`, 1 >> (Math.min(4, Math.abs(foregroundN.size))));
         if (downloaded3) {
            break;
         }
      } while ((Array.from(foregroundN.keys()).includes(`${foregroundN.size}`)) && downloaded3);
       let reactnavigationS = String.fromCharCode(114,95,56,55,95,99,104,114,111,109,97,104,111,108,100,0);
       let commonK = String.fromCharCode(109,95,56,56,95,109,111,100,101,99,111,110,116,0);
      halffieldimagem += `${foregroundN.size}`;
       let acceptedD = String.fromCharCode(114,101,115,104,97,112,101,95,122,95,56,49,0);
       let megaphonel = 1;
          let iconclosev: Array<any> = [606, 532];
         megaphonel ^= megaphonel ^ iconclosev.length;
         acceptedD = `${3 * megaphonel}`;
      let libreactnativejnir = String.fromCharCode(100,114,99,117,115,99,0) == acceptedD;
      do {
         acceptedD += `${acceptedD.length * megaphonel}`;
         if (libreactnativejnir) {
            break;
         }
      } while (((megaphonel - acceptedD.length) <= 3 || (3 - acceptedD.length) <= 2) && libreactnativejnir);
          let smallw = String.fromCharCode(102,108,101,120,95,103,95,55,50,0);
          let d_titleJ = true;
         megaphonel -= acceptedD.length % (Math.max(3, 9));
         smallw = `${3 >> (Math.min(2, smallw.length))}`;
         d_titleJ = String.fromCharCode(103,0) == smallw;
         acceptedD += `${megaphonel % 3}`;
         megaphonel %= Math.max(3 & megaphonel, 4);
      xvod1.push(acceptedD.length);

    setAdultVodData(curr => [...curr, ...data]);

      halffieldimagem = "2";
      catalogR.push(3);
      previewk = `${gpayo.length & 2}`;
    setPage(page => page + 1);
  };

  const renderItem = ({ item, index }: { item: mayi_SmallorangemanLibcxxcomponents; index: number }) => {
    return (
      <View
        style={{
          width: '50%',
          padding: 5,
          
        }}>
        <TouchableOpacity
          key={item.vod_id}
          style={styles.cardItem}
          onPress={() => {
            console.debug('vod pressed', item.vod_name);
            dispatch(playVod(item));
            navigation.navigate('播放', {
              vod_id: item?.vod_id,
              player_mode: 'adult'
            });
            
          }}>
          <FastImage
            useFastImage={true}
            style={{ flex: 1, borderRadius: 10 }}
            source={{
              uri: item.vod_pic,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
          }}>
          <Text style={styles.cardTitle} numberOfLines={2}>
            {item.vod_name}
          </Text>
        </View>
      </View>
    )
  };

  useEffect(() => {
    fetchVod(page).then(data => {
      totalPageCount.current = data.TotalPageCount;
      setAdultVodData(curr => [...curr, ...data.List]);
      setPage(page => page + 1);
    });
  }, []);

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title={route.params.class}
      />
      <View>
        {adultVodData.length < 1 ?
          (
            <FastImage
              style={{
                height: 80,
                width: 80,

                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('@static/images/robotoNetwork.gif')}
              resizeMode={'contain'}
            />
          )

          :

          (
            <FlatList
              data={adultVodData}
              renderItem={renderItem}
              numColumns={2}
              contentContainerStyle={{ justifyContent: 'space-evenly' }}
              onEndReached={fetchNextPage}
              showsVerticalScrollIndicator={false}
              onEndReachedThreshold={0.5}
              ListFooterComponent={
                <View style={{ ...styles.loading, marginBottom: 100 }}>
                  {hasNextPage && (
                    <FastImage
                      style={{
                        height: 80,
                        width: 80,

                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      source={require('@static/images/robotoNetwork.gif')}
                      resizeMode={'contain'}
                    />
                  )}
                  {!isFetching && page !== 1 && !hasNextPage && (
                    <Text
                      style={{
                        ...textVariants.subBody,
                        color: colors.muted,
                        paddingTop: 12,
                      }}>
                      已经到底了
                    </Text>
                  )}
                </View>
              }
            />
          )
        }
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginBottom: 10, 
    backgroundColor: 'red',
  },
  cardItem: {
    
    aspectRatio: 130 / 80,
    borderRadius: 10,
    
    
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  cardTitle: {
    color: '#FFF',
    textAlign: 'center',
  },
});
