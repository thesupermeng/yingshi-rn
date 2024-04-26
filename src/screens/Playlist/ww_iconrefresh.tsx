import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import ScreenContainer from '../../components/container/ww_collection';
import { RootStackScreenProps } from '@type/ww_tempnodatagif_description';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/ww_catagory_neon';
import { wwEighteenShirt } from '@redux/ww_small';

import TitleWithBackButtonHeader from '../../components/header/ww_react_predictionwin_header';
import { wwYellowredcardRelease, wwMbjscommon } from '@redux/reducers/ww_shared';
import { removeVodsFromHistory, playVod } from '@redux/actions/ww_floater';
import VodHistoryCard from '../../components/vod/ww_iconarrowright_point';
import CheckBoxSelected from '@static/images/auto_eMemberSwitch_lx.svg';
import CheckBoxUnselected from '@static/images/twitterNbatrophy.svg';
import { wwCenterPlay, wwNavigationBell, wwControl } from '@type/ww_dycreator_result';
import { Button } from '@rneui/themed';
import ConfirmationModal from '../../components/modal/ww_upgrade';
import VodLiveStationListVertical from '../../components/vod/ww_found';
import EmptyList from '../../components/common/ww_reducer_libreact';
import { ScrollView } from 'react-native-gesture-handler';
import FastImage from '../../components/common/ww_result';
import { API_DOMAIN_TEST } from '@utility/ww_icon';
import { enableAdultMode } from '@redux/actions/ww_hash';
import { wwIconedit } from '@api';

type wwNewsshareConst = {
  data: {
    List: Array<wwNavigationBell>;
    TotalPageCount: number;
  };
};



export default ({ navigation, route }: RootStackScreenProps<'午夜场剧情'>) => {
  const [adultVodData, setAdultVodData] = useState<wwNavigationBell[]>([]);
  const { colors, textVariants, spacing, icons } = useTheme();
  const [page, setPage] = useState(1);
  const totalPageCount = useRef<number>(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useAppDispatch()

  const fetchVod = async (page: number) => {
    return await wwIconedit.getList({
      page: page,
      limit: 10,
      category: route.params.class,
      vod_source_name: route.params.vod_source_name,
      xMode: true,
    })
  };

  const fetchNextPage = async () => {
       let humidityg: Map<any, any> = new Map([[String.fromCharCode(101,114,115,105,111,110,95,117,95,50,55,0),true ], [String.fromCharCode(118,95,54,52,95,99,111,108,0),true ], [String.fromCharCode(120,95,55,57,95,108,105,115,116,0),false ]]);
    let reminderR = String.fromCharCode(115,95,57,55,95,116,101,115,116,98,114,105,100,103,101,0);
    let changey = String.fromCharCode(112,114,101,101,109,112,104,95,107,95,56,51,0);
    let macaub = 3.0;
    let reviewp: Map<any, any> = new Map([[String.fromCharCode(115,117,114,102,95,106,95,53,49,0),211], [String.fromCharCode(97,112,110,115,95,120,95,56,51,0),185], [String.fromCharCode(113,95,55,55,95,110,115,117,105,114,103,98,97,0),496]]);
    let star_ = String.fromCharCode(119,95,54,54,95,115,97,118,101,105,0);
    let commente: Array<any> = [33, 687];
    let iconsharex = String.fromCharCode(100,95,51,56,95,118,105,101,119,101,100,0);
    let bcopy_bmT = 2;
    let policy8 = String.fromCharCode(112,111,105,110,116,101,114,115,95,115,95,51,51,0);
    let codeW = String.fromCharCode(106,95,56,57,95,97,110,103,114,121,0);
    let reviewK = String.fromCharCode(112,97,115,115,102,98,95,108,95,50,52,0);
      star_ += `${commente.length ^ 1}`;
      iconsharex = "3";
       let kuaishou2: Array<any> = [675, 362, 418];
       let mapbuffer7 = 3.0;
      while (1.90 == (kuaishou2.length + mapbuffer7) || (mapbuffer7 + 1.90) == 2.82) {
         mapbuffer7 /= Math.max(2, 3 ^ kuaishou2.length);
         break;
      }
      if (kuaishou2.includes(mapbuffer7)) {
         mapbuffer7 *= kuaishou2.length;
      }
      let history9 = 5215433 <= kuaishou2.length;
      do {
         kuaishou2 = [kuaishou2.length];
         if (history9) {
            break;
         }
      } while (((kuaishou2.length / (Math.max(1, parseInt(`${mapbuffer7}`)))) <= 1) && history9);
         kuaishou2 = [1];
          let defaultpredictionprofile_ = String.fromCharCode(100,101,99,111,114,114,95,49,95,49,54,0);
         kuaishou2.push(kuaishou2.length / (Math.max(defaultpredictionprofile_.length, 8)));
         kuaishou2 = [kuaishou2.length % (Math.max(7, parseInt(`${mapbuffer7}`)))];
      commente.push(kuaishou2.length);

    if (isFetching) return;

   for (let l = 0; l < 1; l++) {
      reminderR += `${reviewp.size}`;
   }
       let mbjscommonv = 0.0;
       let telegramT: Map<any, any> = new Map([[String.fromCharCode(110,105,108,115,95,107,95,56,49,0),390], [String.fromCharCode(105,115,110,101,103,97,116,105,118,101,95,101,95,54,51,0),119], [String.fromCharCode(110,95,57,51,95,110,111,114,109,97,108,105,122,97,116,105,111,110,0),107]]);
      while (!Array.from(telegramT.keys()).includes(`${mbjscommonv}`)) {
          let forward1 = String.fromCharCode(118,116,101,110,99,95,115,95,54,53,0);
          let delegate_pX = false;
         telegramT.set(`${mbjscommonv}`, telegramT.size);
         forward1 += "2";
         delegate_pX = !forward1.endsWith(`${delegate_pX}`);
         break;
      }
      for (let d = 0; d < 1; d++) {
         telegramT.set(`${mbjscommonv}`, 1 - parseInt(`${mbjscommonv}`));
      }
          let carouselM = 2;
         mbjscommonv += telegramT.size;
         carouselM += 3;
      let combinedj = telegramT.size <= 8048779;
      do {
         telegramT.set(`${mbjscommonv}`, telegramT.size);
         if (combinedj) {
            break;
         }
      } while (((mbjscommonv / (Math.max(telegramT.size, 8))) == 4.8 && 4.80 == (mbjscommonv / (Math.max(4.8, 10)))) && combinedj);
      if (Array.from(telegramT.keys()).includes(`${mbjscommonv}`)) {
          let watchH: Map<any, any> = new Map([[String.fromCharCode(120,95,51,51,95,114,116,112,101,110,99,0),416], [String.fromCharCode(110,95,55,95,102,117,116,117,114,101,0),42], [String.fromCharCode(109,97,110,100,101,108,98,114,111,116,95,51,95,54,54,0),961]]);
          let shrinkY = 2.0;
          let favoriteG = 3.0;
         mbjscommonv -= parseInt(`${favoriteG}`) >> (Math.min(3, Math.abs(parseInt(`${mbjscommonv}`))));
         watchH.set(`${shrinkY}`, parseInt(`${shrinkY}`) & watchH.size);
         favoriteG -= 3 & parseInt(`${shrinkY}`);
      }
         mbjscommonv *= parseInt(`${mbjscommonv}`) | telegramT.size;
      macaub -= 1 + policy8.length;
   if (3.93 == (bcopy_bmT / (Math.max(macaub, 2))) || (macaub / (Math.max(9, bcopy_bmT))) == 3.93) {
      macaub *= bcopy_bmT - 2;
   }

    if (page > totalPageCount.current) {

       let libfollyg = true;
       let subbasketballplayer1 = String.fromCharCode(109,95,54,52,0);
      let projectB = libfollyg ? !libfollyg : libfollyg;
      do {
         libfollyg = subbasketballplayer1.length == 87 && libfollyg;
         if (projectB) {
            break;
         }
      } while ((!libfollyg) && projectB);
         subbasketballplayer1 = `${1 & subbasketballplayer1.length}`;
         subbasketballplayer1 = `${(3 * (libfollyg ? 3 : 1))}`;
      for (let g = 0; g < 1; g++) {
          let searchD: Array<any> = [925, 656, 659];
          let shootyesgoalJ = 1.0;
         libfollyg = (searchD.length + parseInt(`${shootyesgoalJ}`)) <= 58;
      }
         libfollyg = subbasketballplayer1.length == 77 || !libfollyg;
      if (!libfollyg) {
         libfollyg = !libfollyg || subbasketballplayer1.length < 34;
      }
      iconsharex += "1";
      commente = [2];
      reminderR += `${(changey == String.fromCharCode(122,0) ? changey.length : policy8.length)}`;
      setHasNextPage(false);

      macaub += policy8.length - commente.length;
   while ((reviewp.size | 2) <= 2 && (reviewp.size | star_.length) <= 2) {
      star_ = `${iconsharex.length}`;
      break;
   }
   let iconwatchnows = 8850014 >= reviewp.size;
   do {
       let iconclosewhitebgM = String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,95,105,95,51,54,0);
       let gemfile3 = 1.0;
      while (5.46 < (gemfile3 / 5.43)) {
         iconclosewhitebgM = "2";
         break;
      }
      while (!iconclosewhitebgM.includes(`${gemfile3}`)) {
         gemfile3 += parseInt(`${gemfile3}`) / (Math.max(10, iconclosewhitebgM.length));
         break;
      }
      while (!iconclosewhitebgM.startsWith(`${gemfile3}`)) {
          let ajaxa = String.fromCharCode(108,111,115,101,95,102,95,54,56,0);
          let bodanT: Array<any> = [7, 66];
          let leaguex = 3.0;
         iconclosewhitebgM += `${parseInt(`${gemfile3}`)}`;
         ajaxa = "2";
         bodanT = [ajaxa.length << (Math.min(Math.abs(2), 5))];
         leaguex += parseFloat(`${ajaxa.length}`);
         break;
      }
         iconclosewhitebgM = `${parseInt(`${gemfile3}`) & iconclosewhitebgM.length}`;
      let bannerN = 8404377.0 >= gemfile3;
      do {
         gemfile3 /= Math.max(1, 1);
         if (bannerN) {
            break;
         }
      } while (bannerN && (3 < (3 & iconclosewhitebgM.length)));
      if (1 == (2 >> (Math.min(5, iconclosewhitebgM.length))) || (parseInt(`${gemfile3}`) / 2) == 3) {
         gemfile3 -= iconclosewhitebgM.length * 1;
      }
      reviewp = new Map([[`${humidityg.size}`, (changey == String.fromCharCode(66,0) ? humidityg.size : changey.length)]]);
      if (iconwatchnows) {
         break;
      }
   } while (iconwatchnows && (!Array.from(reviewp.keys()).includes(`${macaub}`)));
      return;
    } else {

      iconsharex = `${iconsharex.length << (Math.min(Math.abs(2), 2))}`;
      reminderR = `${star_.length + humidityg.size}`;
      bcopy_bmT *= 1;
      setHasNextPage(true);
    }
    setIsFetching(true);

   for (let n = 0; n < 3; n++) {
       let graphicsR = 2;
       let type_arO: Array<any> = [String.fromCharCode(117,110,102,111,99,117,115,101,100,95,102,95,56,48,0), String.fromCharCode(102,105,110,97,108,108,121,95,55,95,51,48,0), String.fromCharCode(116,95,49,53,95,118,101,110,117,101,0)];
       let short_l0 = String.fromCharCode(106,95,52,56,95,100,109,97,99,0);
       let bannerL: Array<any> = [464, 650, 868];
       let iconpipexpandK = String.fromCharCode(114,115,104,105,102,116,95,102,95,51,50,0);
      while (2 > (bannerL.length & 4) && (iconpipexpandK.length & 4) > 2) {
         bannerL.push(2);
         break;
      }
          let guideQ = String.fromCharCode(99,101,110,116,114,111,105,100,115,95,101,95,54,51,0);
          let privilegeA = 2.0;
          let field0 = true;
         bannerL = [2 << (Math.min(5, short_l0.length))];
         guideQ = `${1 * parseInt(`${privilegeA}`)}`;
         privilegeA += parseFloat(`${parseInt(`${privilegeA}`) ^ 2}`);
         field0 = !field0;
      if ((bannerL.length + short_l0.length) <= 2) {
         short_l0 += "2";
      }
      for (let u = 0; u < 2; u++) {
         iconpipexpandK += `${bannerL.length}`;
      }
         iconpipexpandK = `${type_arO.length}`;
          let runtimel: Map<any, any> = new Map([[String.fromCharCode(99,117,114,95,50,95,54,55,0),220], [String.fromCharCode(122,95,49,54,95,100,105,97,108,111,103,0),827]]);
          let lineG = String.fromCharCode(109,117,109,98,97,105,95,122,95,51,50,0);
          let expandK = String.fromCharCode(104,97,97,114,95,100,95,54,53,0);
         iconpipexpandK = `${type_arO.length | iconpipexpandK.length}`;
         runtimel.set(expandK, runtimel.size);
         lineG = `${(expandK == String.fromCharCode(75,0) ? expandK.length : runtimel.size)}`;
         graphicsR |= 1;
      for (let g = 0; g < 3; g++) {
         graphicsR /= Math.max(4, iconpipexpandK.length);
      }
       let windh = String.fromCharCode(98,95,50,55,95,97,118,102,111,114,109,97,116,114,101,115,0);
       let dacccfaabfbcbadeebddcabacdffdbE = String.fromCharCode(100,95,55,56,95,97,105,116,101,114,0);
       let settingsH = String.fromCharCode(115,113,117,101,101,122,101,95,98,95,54,57,0);
         iconpipexpandK += `${(settingsH == String.fromCharCode(120,0) ? bannerL.length : settingsH.length)}`;
       let predictionbannershared3 = String.fromCharCode(102,95,50,95,99,114,111,119,100,105,110,0);
       let profileinactiveG = String.fromCharCode(106,95,55,54,95,112,114,101,118,0);
      let libjsijniprofilerH = 5140376 <= settingsH.length;
      do {
         settingsH = `${predictionbannershared3.length ^ 2}`;
         if (libjsijniprofilerH) {
            break;
         }
      } while (libjsijniprofilerH && (5 >= (bannerL.length % (Math.max(4, settingsH.length)))));
      for (let w = 0; w < 2; w++) {
          let morep = String.fromCharCode(109,95,49,50,95,99,111,110,99,104,0);
          let disconnectedlogoJ = 2;
          let photok = String.fromCharCode(115,105,103,110,105,102,105,99,97,110,99,101,95,104,95,55,52,0);
          let libglogr = String.fromCharCode(103,95,53,48,95,116,97,107,101,0);
         iconpipexpandK += "3";
         morep += "3";
         disconnectedlogoJ <<= Math.min(Math.abs(disconnectedlogoJ), 2);
         photok = `${1 >> (Math.min(4, morep.length))}`;
         libglogr += `${3 ^ libglogr.length}`;
      }
         profileinactiveG += "1";
      changey = `${graphicsR}`;
   }
   while ((bcopy_bmT ^ policy8.length) < 4 && 1 < (4 ^ policy8.length)) {
       let downarrowB = String.fromCharCode(116,101,115,116,105,109,103,105,110,116,95,111,95,51,56,0);
       let gradleN = String.fromCharCode(109,110,101,109,111,110,105,99,95,54,95,54,50,0);
      let libsgcorej = 8028477 >= gradleN.length;
      do {
          let privilegeB = String.fromCharCode(108,95,51,57,95,97,116,116,97,99,104,109,101,110,116,115,0);
          let favoritex = 4.0;
         gradleN = `${gradleN.length}`;
         privilegeB += "2";
         favoritex *= privilegeB.length ^ 2;
         if (libsgcorej) {
            break;
         }
      } while ((gradleN.length >= 3) && libsgcorej);
          let string0 = false;
          let libsgcorei = 3.0;
          let feedbackL: Array<any> = [8, 515, 251];
         gradleN += `${((string0 ? 4 : 4) % 2)}`;
         string0 = feedbackL.length >= libsgcorei;
         libsgcorei -= parseInt(`${libsgcorei}`);
         feedbackL = [2 | parseInt(`${libsgcorei}`)];
       let updatesJ = 4;
       let dacccfaabfbcbadeebddcabacdffdb5 = 3;
      if (dacccfaabfbcbadeebddcabacdffdb5 > updatesJ) {
          let anythinku = String.fromCharCode(119,95,56,57,95,116,114,97,110,115,97,99,116,105,111,110,115,0);
          let privacyY: Array<any> = [String.fromCharCode(98,101,103,105,110,110,105,110,103,95,112,95,53,51,0), String.fromCharCode(115,97,116,100,95,97,95,51,0), String.fromCharCode(112,101,101,114,95,56,95,52,49,0)];
          let privacyU: Map<any, any> = new Map([[String.fromCharCode(115,95,49,57,95,115,99,105,101,110,116,105,102,105,99,0),false ], [String.fromCharCode(104,95,50,54,95,97,114,103,115,0),false ]]);
         updatesJ *= privacyY.length;
         anythinku += `${anythinku.length}`;
         privacyY.push(privacyU.size % (Math.max(anythinku.length, 2)));
         privacyU = new Map([[`${privacyU.size}`, privacyU.size | anythinku.length]]);
      }
      if (2 >= (dacccfaabfbcbadeebddcabacdffdb5 & 2) && (dacccfaabfbcbadeebddcabacdffdb5 & gradleN.length) >= 2) {
         dacccfaabfbcbadeebddcabacdffdb5 &= updatesJ & 3;
      }
      for (let z = 0; z < 1; z++) {
          let watch8 = String.fromCharCode(101,122,111,115,95,49,95,50,48,0);
         gradleN = `${(gradleN == String.fromCharCode(98,0) ? updatesJ : gradleN.length)}`;
         watch8 = `${watch8.length & watch8.length}`;
      }
      policy8 += `${reviewp.size + parseInt(`${macaub}`)}`;
      downarrowB = `${downarrowB.length * downarrowB.length}`;
      break;
   }
   if (3 >= changey.length) {
       let dependencyy = 4.0;
       let styleH = String.fromCharCode(109,111,100,101,108,95,103,95,52,55,0);
         styleH = `${parseInt(`${dependencyy}`) | 1}`;
         dependencyy -= parseFloat(`${styleH.length ^ 1}`);
      for (let o = 0; o < 3; o++) {
          let successC = 1.0;
          let libfabricjniR = String.fromCharCode(111,118,102,108,95,57,95,49,0);
         styleH += `${libfabricjniR.length}`;
         successC /= Math.max(4, parseInt(`${successC}`));
         libfabricjniR += `${parseInt(`${successC}`)}`;
      }
         styleH = `${(styleH == String.fromCharCode(53,0) ? parseInt(`${dependencyy}`) : styleH.length)}`;
      for (let t = 0; t < 1; t++) {
          let user1: Array<any> = [995, 846];
          let plashl = String.fromCharCode(107,101,101,112,95,57,95,51,0);
         styleH += `${styleH.length | 3}`;
         user1 = [plashl.length | user1.length];
         plashl = `${plashl.length}`;
      }
          let goalm = String.fromCharCode(118,95,56,51,95,100,105,97,103,0);
         styleH += `${styleH.length}`;
         goalm += "1";
      humidityg.set(iconsharex, bcopy_bmT ^ iconsharex.length);
   }
    const vodData = await fetchVod(page) as wwCenterPlay;

       let penalty4 = 0;
       let mbsplashD = 2;
       let projectK = 0.0;
      if ((projectK - mbsplashD) >= 2.7 || (projectK - 2.7) >= 4.20) {
         mbsplashD ^= mbsplashD / (Math.max(10, penalty4));
      }
      let lang3 = 8775988 >= penalty4;
      do {
         penalty4 >>= Math.min(1, Math.abs(2 % (Math.max(5, parseInt(`${projectK}`)))));
         if (lang3) {
            break;
         }
      } while (lang3 && (1.95 > projectK));
       let mapping7 = true;
          let telemetryO = 3;
         mapping7 = 5 <= penalty4;
         telemetryO |= telemetryO << (Math.min(Math.abs(2), 3));
      while ((mbsplashD - projectK) == 4.21 && (mbsplashD - parseInt(`${projectK}`)) == 1) {
          let aboutS = String.fromCharCode(102,114,97,109,101,100,97,116,97,95,104,95,55,0);
          let emoji9 = 3.0;
          let stylesv = String.fromCharCode(110,95,56,55,0);
         projectK -= parseInt(`${emoji9}`);
         aboutS = `${(stylesv == String.fromCharCode(54,0) ? stylesv.length : aboutS.length)}`;
         emoji9 *= 3;
         break;
      }
       let brightnessi = String.fromCharCode(118,115,105,110,107,95,103,95,57,57,0);
         penalty4 |= parseInt(`${projectK}`) >> (Math.min(5, Math.abs(mbsplashD)));
      for (let n = 0; n < 2; n++) {
          let floatingz = String.fromCharCode(100,101,99,111,114,97,116,105,111,110,95,50,95,57,0);
          let goalK = 5.0;
          let main_gV: Map<any, any> = new Map([[String.fromCharCode(100,97,115,104,101,115,95,97,95,53,57,0),19], [String.fromCharCode(120,95,54,51,0),83]]);
          let eactN: Map<any, any> = new Map([[String.fromCharCode(97,99,102,105,108,116,101,114,95,52,95,50,49,0),true ], [String.fromCharCode(122,95,56,95,115,117,98,116,105,116,108,101,115,0),true ], [String.fromCharCode(119,109,97,100,97,116,97,95,50,95,50,49,0),true ]]);
          let applew = String.fromCharCode(98,101,97,114,105,110,103,95,118,95,52,51,0);
         mbsplashD -= penalty4;
         floatingz = `${parseInt(`${goalK}`)}`;
         goalK -= parseInt(`${goalK}`) | main_gV.size;
         main_gV = new Map([[floatingz, floatingz.length << (Math.min(Math.abs(1), 3))]]);
         eactN.set(applew, 3 | applew.length);
      }
          let basketballQ = String.fromCharCode(105,95,57,55,95,116,114,97,110,115,112,0);
          let cornerkicks: Array<any> = [String.fromCharCode(113,117,105,99,107,95,121,95,50,0), String.fromCharCode(114,101,99,101,110,116,108,121,95,116,95,55,57,0), String.fromCharCode(105,110,108,101,110,95,48,95,54,57,0)];
          let arrowrightn = String.fromCharCode(103,111,108,100,95,103,95,49,53,0);
         projectK += 2;
         basketballQ = `${(String.fromCharCode(78,0) == arrowrightn ? cornerkicks.length : arrowrightn.length)}`;
         cornerkicks = [cornerkicks.length];
      bcopy_bmT += bcopy_bmT;
      macaub *= 1 | reviewp.size;
       let penaltyv = 1.0;
       let thailand2 = 1.0;
         thailand2 *= parseFloat(`${parseInt(`${thailand2}`) / (Math.max(1, parseInt(`${penaltyv}`)))}`);
       let sigmobW: Map<any, any> = new Map([[String.fromCharCode(118,95,55,48,95,102,105,101,108,100,0),990], [String.fromCharCode(120,95,54,53,95,101,108,101,109,101,110,116,115,0),756]]);
       let umengm: Map<any, any> = new Map([[String.fromCharCode(115,108,97,110,116,95,102,95,49,52,0),String.fromCharCode(107,95,56,95,100,101,113,117,97,110,116,105,122,97,116,105,111,110,0)], [String.fromCharCode(115,95,55,48,95,115,116,97,114,116,0),String.fromCharCode(110,95,52,49,95,100,101,98,108,111,99,107,105,110,103,0)], [String.fromCharCode(101,120,116,115,107,95,56,95,56,52,0),String.fromCharCode(108,95,51,51,95,97,118,102,105,108,116,101,114,114,101,115,0)]]);
       let bdxadsdkk = 5.0;
       let chat4 = 4.0;
      while (1.6 >= (bdxadsdkk + 3.63) && (bdxadsdkk / (Math.max(8, chat4))) >= 3.63) {
          let playB = true;
          let libcrashsdkn = 5.0;
          let inouttargetredq = String.fromCharCode(100,95,50,95,99,104,97,105,110,105,100,0);
         bdxadsdkk -= 3;
         playB = (libcrashsdkn * inouttargetredq.length) <= 25.97;
         libcrashsdkn /= Math.max(inouttargetredq.length % (Math.max(10, parseInt(`${libcrashsdkn}`))), 1);
         break;
      }
         thailand2 /= Math.max(1, parseFloat(`${3 - umengm.size}`));
         sigmobW.set(`${thailand2}`, parseInt(`${thailand2}`));
      policy8 = `${reviewp.size}`;
    const data = vodData.List;

   while (2 >= reviewp.size) {
      reminderR += "3";
      break;
   }
   if (2.49 > (macaub - 1.12)) {
      macaub += parseInt(`${macaub}`);
   }
      reminderR += `${commente.length}`;
    setIsFetching(false);

      reviewp.set(policy8, (String.fromCharCode(108,0) == policy8 ? policy8.length : bcopy_bmT));
      commente = [commente.length << (Math.min(Math.abs(1), 4))];
   for (let d = 0; d < 3; d++) {
      changey += `${iconsharex.length % (Math.max(2, 4))}`;
   }

    setAdultVodData(curr => [...curr, ...data]);

      bcopy_bmT &= (String.fromCharCode(72,0) == star_ ? star_.length : reviewp.size);
       let fast_ = String.fromCharCode(101,95,56,52,95,116,114,97,110,115,105,116,105,111,110,0);
       let sortS = true;
       let animationsa = 1.0;
         fast_ += `${(parseInt(`${animationsa}`) & (sortS ? 3 : 5))}`;
          let libavdeviceE = String.fromCharCode(98,101,105,110,103,95,49,95,57,48,0);
          let updatesJc = String.fromCharCode(112,95,51,52,95,100,105,118,105,100,111,114,115,0);
         fast_ = `${updatesJc.length / (Math.max(3, 6))}`;
         libavdeviceE = `${libavdeviceE.length}`;
         updatesJc = `${2 + libavdeviceE.length}`;
         animationsa += (parseFloat(`${fast_.length ^ (sortS ? 4 : 3)}`));
      let graphV = String.fromCharCode(108,121,111,121,0) == fast_;
      do {
         fast_ += `${(String.fromCharCode(86,0) == fast_ ? fast_.length : (sortS ? 3 : 1))}`;
         if (graphV) {
            break;
         }
      } while (graphV && (5 <= (parseInt(`${animationsa}`) - 2) && (animationsa - 3.73) <= 4.44));
      let lesss = sortS ? !sortS : sortS;
      do {
          let greyR = String.fromCharCode(97,95,57,53,95,112,114,105,109,101,0);
          let giftt = false;
         sortS = fast_.length > 97;
         greyR += `${((giftt ? 1 : 2) * 3)}`;
         giftt = giftt && greyR.length > 57;
         if (lesss) {
            break;
         }
      } while (lesss && (!sortS || 3 <= fast_.length));
      star_ = `${(parseInt(`${macaub}`) + (sortS ? 4 : 1))}`;
       let actionsZ = String.fromCharCode(100,95,54,57,95,119,97,108,107,105,110,103,0);
       let auto__rI: Array<any> = [488, 327, 22];
          let logoutr = String.fromCharCode(98,95,54,53,95,97,110,99,101,115,116,114,121,0);
         actionsZ = `${1 >> (Math.min(5, actionsZ.length))}`;
         logoutr = `${logoutr.length}`;
       let iconsaveimageV = String.fromCharCode(101,95,49,55,95,115,109,97,108,108,101,114,0);
         actionsZ = `${(String.fromCharCode(115,0) == actionsZ ? actionsZ.length : auto__rI.length)}`;
         iconsaveimageV += `${(iconsaveimageV == String.fromCharCode(77,0) ? actionsZ.length : iconsaveimageV.length)}`;
         actionsZ = `${actionsZ.length % (Math.max(2, 9))}`;
      for (let g = 0; g < 2; g++) {
         auto__rI = [3];
      }
      codeW += `${parseInt(`${macaub}`)}`;
    setPage(page => page + 1);
  };

  const renderItem = ({ item, index }: { item: wwNavigationBell; index: number }) => {
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
              source={require('@static/images/runtimeschedulerPromotion.gif')}
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
                      source={require('@static/images/runtimeschedulerPromotion.gif')}
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
