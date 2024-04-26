import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import ScreenContainer from '../../components/container/wawa_nterstitial_iconpipexpand';
import { RootStackScreenProps } from '@type/wawa_iconnewchat';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/wawa_root';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';

import TitleWithBackButtonHeader from '../../components/header/wawa_matchinactive_header';
import { wawaGuideSelect, wawaAgreementFlag } from '@redux/reducers/wawa_quest_ping';
import { removeVodsFromHistory, playVod } from '@redux/actions/wawa_indicator';
import VodHistoryCard from '../../components/vod/wawa_short_libcxxcomponents';
import CheckBoxSelected from '@static/images/iconbellactiveQuest.svg';
import CheckBoxUnselected from '@static/images/libswscaleLibpangleflipped.svg';
import { wawaBecome, wawaConstThumbnail, wawaSellProfileinactive } from '@type/wawa_gradlew';
import { Button } from '@rneui/themed';
import ConfirmationModal from '../../components/modal/wawa_iconedit';
import VodLiveStationListVertical from '../../components/vod/wawa_reactnativeratings_mounting';
import EmptyList from '../../components/common/wawa_othermatchdetailbg_videocommon';
import { ScrollView } from 'react-native-gesture-handler';
import FastImage from '../../components/common/wawa_iconarrowrightblack';
import { API_DOMAIN_TEST } from '@utility/wawa_iconpointscore';
import { enableAdultMode } from '@redux/actions/wawa_related';
import { wawaUsernameAdult } from '@api';

type wawaBackwardChinasame = {
  data: {
    List: Array<wawaConstThumbnail>;
    TotalPageCount: number;
  };
};



export default ({ navigation, route }: RootStackScreenProps<'午夜场剧情'>) => {
  const [adultVodData, setAdultVodData] = useState<wawaConstThumbnail[]>([]);
  const { colors, textVariants, spacing, icons } = useTheme();
  const [page, setPage] = useState(1);
  const totalPageCount = useRef<number>(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useAppDispatch()

  const fetchVod = async (page: number) => {
    return await wawaUsernameAdult.getList({
      page: page,
      limit: 10,
      category: route.params.class,
      vod_source_name: route.params.vod_source_name,
      xMode: true,
    })
  };

  const fetchNextPage = async () => {
       let dangerV: Array<any> = [800, 123, 270];
    let arrowK = 1;
    let subsN = 4;
    let ocopy_zr = String.fromCharCode(111,95,49,48,48,95,97,114,101,115,0);
    let eventB = String.fromCharCode(122,112,98,105,113,117,97,100,115,95,55,95,54,48,0);
    let static_inE = 5.0;
    let forwardc: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,111,100,117,99,116,105,111,110,95,97,95,55,48,0),String.fromCharCode(112,108,97,121,98,97,99,107,95,110,95,51,55,0)], [String.fromCharCode(111,117,116,101,114,95,116,95,55,52,0),String.fromCharCode(112,95,50,50,95,114,111,117,110,100,101,100,110,101,115,115,0)]]);
    let eighteenl: Array<any> = [645, 938, 864];
    let customV = 4;
    let typesT = 0.0;
    let fcdaebecbcbafcdfceaaeccfeacdbp = String.fromCharCode(105,99,111,110,105,99,95,99,95,55,57,0);
    let libturbomodulejsijnij = 4.0;
    let headerr = String.fromCharCode(109,117,108,116,120,95,112,95,55,54,0);
   for (let f = 0; f < 3; f++) {
       let humidityO = 0.0;
       let settings1 = String.fromCharCode(113,95,56,55,95,112,111,115,108,105,115,116,0);
       let episode9: Map<any, any> = new Map([[String.fromCharCode(112,111,105,115,111,110,95,54,95,53,48,0),true ], [String.fromCharCode(115,95,55,53,95,114,101,106,101,99,116,105,111,110,0),true ]]);
       let episodest = 2.0;
       let linit_jrn = false;
      let iconclosewhitebgE = episodest >= 5309996.0;
      do {
         episodest *= parseFloat(`${episode9.size}`);
         if (iconclosewhitebgE) {
            break;
         }
      } while ((episodest < 4.3) && iconclosewhitebgE);
          let whitesmallticky = String.fromCharCode(99,95,55,56,95,111,110,101,115,0);
          let teamr = 5;
          let indicatort = true;
         linit_jrn = indicatort;
         whitesmallticky = `${teamr / (Math.max(1, 7))}`;
         teamr /= Math.max(teamr, 5);
         episode9 = new Map([[`${episode9.size}`, episode9.size]]);
      while (4 >= (4 >> (Math.min(1, Math.abs(episode9.size)))) || 1.40 >= (episodest + 3.87)) {
          let iconarrowrightS = 2.0;
          let unread2 = String.fromCharCode(105,95,51,48,95,98,111,100,101,114,0);
          let arrowupG = String.fromCharCode(102,95,54,57,95,114,97,119,100,101,99,0);
          let penaltyshootnogoalW = String.fromCharCode(122,95,54,57,95,115,108,111,112,101,0);
         episodest /= Math.max((parseFloat(`${1 - (linit_jrn ? 1 : 2)}`)), 1);
         iconarrowrightS /= Math.max(5, 1 * parseInt(`${iconarrowrightS}`));
         unread2 = `${unread2.length | penaltyshootnogoalW.length}`;
         arrowupG += `${arrowupG.length}`;
         penaltyshootnogoalW = `${penaltyshootnogoalW.length}`;
         break;
      }
      while ((episodest / (Math.max(7, humidityO))) >= 3.100) {
         humidityO -= parseFloat(`${parseInt(`${humidityO}`) * settings1.length}`);
         break;
      }
      if ((episodest + humidityO) < 3.18) {
         humidityO *= parseFloat(`${3}`);
      }
         episode9.set(`${linit_jrn}`, ((linit_jrn ? 5 : 3) + parseInt(`${episodest}`)));
      if (!settings1.startsWith(`${episodest}`)) {
          let pointv = 5.0;
         episodest *= (parseFloat(`${String.fromCharCode(85,0) == settings1 ? settings1.length : parseInt(`${episodest}`)}`));
         pointv -= parseFloat(`${parseInt(`${pointv}`)}`);
      }
      let catagoryw = 5573470.0 >= humidityO;
      do {
         humidityO -= parseFloat(`${parseInt(`${episodest}`) & episode9.size}`);
         if (catagoryw) {
            break;
         }
      } while ((humidityO < 3.42) && catagoryw);
      for (let s = 0; s < 2; s++) {
          let subtextI = 5.0;
         episode9.set(`${humidityO}`, 3 ^ parseInt(`${episodest}`));
         subtextI /= Math.max(parseFloat(`${parseInt(`${subtextI}`)}`), 2);
      }
      if (4.71 < humidityO) {
         humidityO -= parseFloat(`${3}`);
      }
      for (let p = 0; p < 1; p++) {
         settings1 += `${1 * parseInt(`${humidityO}`)}`;
      }
         episodest *= parseFloat(`${2}`);
         episodest /= Math.max(5, parseFloat(`${parseInt(`${humidityO}`) * settings1.length}`));
       let predictiondefaultd = 4.0;
      typesT -= (parseFloat(`${settings1 == String.fromCharCode(111,0) ? settings1.length : parseInt(`${typesT}`)}`));
   }
      ocopy_zr = `${parseInt(`${typesT}`)}`;
      eventB += `${customV}`;

    if (isFetching) return;

      typesT += parseFloat(`${arrowK}`);
      eventB += `${parseInt(`${static_inE}`)}`;
      ocopy_zr = "1";

    if (page > totalPageCount.current) {

      arrowK ^= 2;
   let forwardcg = static_inE <= 9217820.0;
   do {
       let defaultplayerimgE = String.fromCharCode(113,95,50,57,95,98,111,116,104,0);
       let handlerW = 0;
       let dplusP: Map<any, any> = new Map([[String.fromCharCode(106,95,51,57,95,99,104,117,110,107,101,100,0),String.fromCharCode(118,95,55,48,95,119,97,115,0)], [String.fromCharCode(102,108,111,111,114,95,105,95,53,49,0),String.fromCharCode(97,97,117,100,105,111,95,104,95,51,56,0)], [String.fromCharCode(114,95,55,51,95,99,111,109,112,108,101,109,101,110,116,0),String.fromCharCode(102,105,110,105,115,104,101,100,95,54,95,49,49,0)]]);
       let leaguedetailsbgO: Map<any, any> = new Map([[String.fromCharCode(121,95,57,48,95,97,99,115,107,105,112,0),222], [String.fromCharCode(117,110,104,97,110,100,108,101,100,95,107,95,57,53,0),842], [String.fromCharCode(98,95,54,50,95,102,116,118,110,115,0),807]]);
         defaultplayerimgE += "1";
      if (5 > leaguedetailsbgO.size) {
         leaguedetailsbgO = new Map([[`${leaguedetailsbgO.size}`, 1]]);
      }
         handlerW |= handlerW;
         defaultplayerimgE += `${1 ^ dplusP.size}`;
      let turndowng = dplusP.size <= 5202473;
      do {
         dplusP = new Map([[`${dplusP.size}`, leaguedetailsbgO.size]]);
         if (turndowng) {
            break;
         }
      } while (turndowng && ((handlerW + 1) == 5));
      if ((1 & dplusP.size) >= 2 && 4 >= (handlerW & 1)) {
          let iconpipshrink_ = String.fromCharCode(105,108,98,99,95,99,95,53,54,0);
          let sporto = String.fromCharCode(121,95,57,53,0);
          let mailz: Map<any, any> = new Map([[String.fromCharCode(97,95,54,52,95,117,110,119,114,97,112,0),24], [String.fromCharCode(98,105,110,107,98,95,112,95,57,48,0),650]]);
          let graphicsC = String.fromCharCode(102,95,56,50,95,103,114,97,118,105,116,121,0);
         handlerW &= 2;
         iconpipshrink_ = "3";
         sporto = `${mailz.size}`;
         mailz = new Map([[`${mailz.size}`, mailz.size]]);
         graphicsC = `${1 ^ iconpipshrink_.length}`;
      }
      while ((defaultplayerimgE.length << (Math.min(1, Math.abs(leaguedetailsbgO.size)))) < 1 && (defaultplayerimgE.length << (Math.min(Math.abs(1), 4))) < 1) {
          let foregrounds = String.fromCharCode(121,95,56,57,95,99,111,110,115,117,109,112,116,105,111,110,0);
          let iconorientationa = String.fromCharCode(112,101,114,105,111,100,115,95,121,95,52,0);
         defaultplayerimgE = `${dplusP.size | 3}`;
         foregrounds += `${(String.fromCharCode(66,0) == foregrounds ? foregrounds.length : iconorientationa.length)}`;
         iconorientationa = "2";
         break;
      }
      for (let q = 0; q < 1; q++) {
         leaguedetailsbgO.set(`${defaultplayerimgE}`, (defaultplayerimgE == String.fromCharCode(87,0) ? leaguedetailsbgO.size : defaultplayerimgE.length));
      }
      let collection3 = dplusP.size <= 9767301;
      do {
         dplusP.set(defaultplayerimgE, leaguedetailsbgO.size);
         if (collection3) {
            break;
         }
      } while (collection3 && (5 <= (defaultplayerimgE.length & 5) && (defaultplayerimgE.length & dplusP.size) <= 5));
      while ((dplusP.size << (Math.min(Math.abs(4), 5))) < 5) {
          let iconmorel = String.fromCharCode(117,95,48,95,101,113,117,97,108,105,122,101,114,0);
          let cornerC: Map<any, any> = new Map([[String.fromCharCode(97,95,56,57,95,107,101,109,112,102,0),false ], [String.fromCharCode(102,95,57,54,0),false ]]);
          let nbatrophyG: Array<any> = [String.fromCharCode(105,95,53,55,95,101,122,111,115,0), String.fromCharCode(106,95,54,55,0)];
         defaultplayerimgE = `${leaguedetailsbgO.size}`;
         iconmorel = `${nbatrophyG.length}`;
         cornerC = new Map([[`${cornerC.size}`, (iconmorel == String.fromCharCode(69,0) ? iconmorel.length : cornerC.size)]]);
         nbatrophyG = [3 | cornerC.size];
         break;
      }
      if ((2 | leaguedetailsbgO.size) >= 2) {
         leaguedetailsbgO.set(defaultplayerimgE, (String.fromCharCode(50,0) == defaultplayerimgE ? handlerW : defaultplayerimgE.length));
      }
      let icondefaultthumbnailL = 9576399 <= dplusP.size;
      do {
          let dependencyT = String.fromCharCode(98,95,53,55,95,108,105,98,115,0);
          let photoV = true;
          let executord = String.fromCharCode(99,95,55,95,115,116,114,101,97,109,105,100,0);
         dplusP.set(`${photoV}`, leaguedetailsbgO.size / 2);
         dependencyT = `${executord.length / (Math.max(2, 8))}`;
         executord = `${executord.length}`;
         if (icondefaultthumbnailL) {
            break;
         }
      } while (((handlerW + dplusP.size) == 5) && icondefaultthumbnailL);
      static_inE += parseFloat(`${dplusP.size >> (Math.min(Math.abs(2), 3))}`);
      if (forwardcg) {
         break;
      }
   } while ((3 == eventB.length) && forwardcg);
       let iconnewchatP = 0.0;
       let iconmoreS = 4.0;
       let gemfileg = String.fromCharCode(109,103,109,116,95,119,95,57,53,0);
          let rocket3 = 2;
          let predictiondefaultc = false;
          let penaltyshootu = 0;
         gemfileg = `${3 ^ gemfileg.length}`;
         rocket3 *= ((predictiondefaultc ? 2 : 4) - penaltyshootu);
         predictiondefaultc = 6 >= rocket3;
         penaltyshootu *= penaltyshootu;
      while (4.30 >= (iconmoreS / (Math.max(parseFloat(`${gemfileg.length}`), 5))) || (1 & gemfileg.length) >= 5) {
         gemfileg += "1";
         break;
      }
      for (let i = 0; i < 1; i++) {
          let flyer_ = false;
          let libcxxcomponentsa = 1.0;
          let libreactP = String.fromCharCode(122,95,54,57,95,115,110,110,105,100,0);
         iconnewchatP += parseFloat(`${gemfileg.length}`);
         flyer_ = libcxxcomponentsa == 97.88;
         libcxxcomponentsa *= parseFloat(`${parseInt(`${libcxxcomponentsa}`)}`);
         libreactP += `${libreactP.length * 2}`;
      }
      while (3.96 >= (3.38 * iconmoreS) && (3.38 * iconmoreS) >= 2.67) {
          let play9: Array<any> = [972, 544, 931];
          let header7 = 2;
          let placeholderQ = String.fromCharCode(115,116,114,103,108,111,98,95,108,95,56,53,0);
         iconmoreS *= (parseFloat(`${String.fromCharCode(52,0) == gemfileg ? gemfileg.length : header7}`));
         play9 = [2 << (Math.min(2, placeholderQ.length))];
         header7 %= Math.max(5, (String.fromCharCode(70,0) == placeholderQ ? placeholderQ.length : play9.length));
         break;
      }
          let phoneW: Map<any, any> = new Map([[String.fromCharCode(99,104,111,109,112,95,101,95,56,0),false ], [String.fromCharCode(105,118,97,114,115,95,103,95,54,53,0),false ]]);
          let iconviewerk = 5.0;
         iconmoreS /= Math.max(parseFloat(`${3}`), 2);
         phoneW = new Map([[`${phoneW.size}`, phoneW.size << (Math.min(5, Math.abs(parseInt(`${iconviewerk}`))))]]);
         iconviewerk /= Math.max(phoneW.size >> (Math.min(Math.abs(1), 4)), 3);
      for (let f = 0; f < 1; f++) {
          let eyecloseJ = false;
          let matchactiveD = String.fromCharCode(109,95,51,56,95,109,106,112,101,103,98,0);
          let moon3 = String.fromCharCode(105,110,99,114,101,97,115,105,110,103,95,98,95,51,51,0);
          let pageW = String.fromCharCode(118,95,53,49,95,117,116,118,105,100,101,111,100,115,112,0);
         iconmoreS *= parseFloat(`${2}`);
         eyecloseJ = matchactiveD == String.fromCharCode(85,0);
         matchactiveD = `${moon3.length ^ pageW.length}`;
         moon3 = `${(String.fromCharCode(103,0) == pageW ? pageW.length : moon3.length)}`;
      }
      if (4.11 <= (1.34 * iconnewchatP)) {
         iconnewchatP -= parseFloat(`${parseInt(`${iconnewchatP}`) & parseInt(`${iconmoreS}`)}`);
      }
         iconmoreS += parseFloat(`${parseInt(`${iconmoreS}`)}`);
          let notificationgray7: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,97,105,110,95,113,95,51,53,0),589], [String.fromCharCode(111,95,53,54,95,97,108,116,101,114,97,98,108,101,0),168]]);
          let default_a0Y = 3.0;
         iconmoreS /= Math.max(parseFloat(`${gemfileg.length}`), 2);
         notificationgray7.set(`${default_a0Y}`, notificationgray7.size);
         default_a0Y *= notificationgray7.size;
      subsN += (ocopy_zr == String.fromCharCode(119,0) ? customV : ocopy_zr.length);
      setHasNextPage(false);

      subsN += 3;
       let airbnbstarselectedG = 2.0;
       let loginsuccessy = String.fromCharCode(115,95,53,56,95,112,111,108,121,103,111,110,0);
       let libyogaM = String.fromCharCode(116,101,114,109,115,101,116,95,114,95,54,48,0);
         loginsuccessy = `${3 + libyogaM.length}`;
         libyogaM = `${libyogaM.length}`;
       let predictionwing: Map<any, any> = new Map([[String.fromCharCode(109,95,55,57,95,99,97,108,108,111,117,116,0),true ], [String.fromCharCode(117,110,111,114,100,101,114,101,100,95,51,95,57,0),false ], [String.fromCharCode(114,101,99,116,97,110,103,117,108,97,114,95,53,95,56,53,0),true ]]);
       let modelst: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,115,101,116,95,99,95,55,0),false ], [String.fromCharCode(112,105,120,109,97,112,95,97,95,52,55,0),false ], [String.fromCharCode(100,95,50,51,95,101,120,112,108,105,99,105,116,0),false ]]);
      for (let n = 0; n < 3; n++) {
         airbnbstarselectedG += parseFloat(`${libyogaM.length | 1}`);
      }
         predictionwing = new Map([[`${modelst.size}`, 1 ^ predictionwing.size]]);
          let defaultplayerimgb = 1.0;
          let stylesz: Array<any> = [600, 611];
          let bgvipsports = true;
         predictionwing.set(`${airbnbstarselectedG}`, parseInt(`${airbnbstarselectedG}`) ^ predictionwing.size);
         defaultplayerimgb -= stylesz.length;
         stylesz = [stylesz.length & 3];
      let relatedQ = 9427226 >= loginsuccessy.length;
      do {
         loginsuccessy += `${loginsuccessy.length ^ libyogaM.length}`;
         if (relatedQ) {
            break;
         }
      } while (relatedQ && (2.27 > airbnbstarselectedG));
      let analyticsQ = 9546239 >= loginsuccessy.length;
      do {
         loginsuccessy += "2";
         if (analyticsQ) {
            break;
         }
      } while (((loginsuccessy.length - 5) >= 2 && (loginsuccessy.length >> (Math.min(Math.abs(5), 5))) >= 1) && analyticsQ);
       let cast9 = 4;
      eventB += `${(String.fromCharCode(76,0) == eventB ? eventB.length : forwardc.size)}`;
      eventB = `${eighteenl.length}`;
      return;
    } else {

   for (let h = 0; h < 3; h++) {
       let miniR = String.fromCharCode(99,97,110,111,110,95,118,95,52,49,0);
       let modalk = 2.0;
       let megaphonei = String.fromCharCode(98,95,50,54,95,115,105,102,102,0);
       let inactiveW = String.fromCharCode(113,95,57,95,114,101,99,105,112,0);
       let libane2 = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,95,112,95,57,55,0);
      if (inactiveW != String.fromCharCode(110,0)) {
         libane2 += `${3 | inactiveW.length}`;
      }
         megaphonei = `${1 ^ miniR.length}`;
          let crossU = String.fromCharCode(115,116,97,114,116,105,110,103,95,55,95,52,50,0);
          let analyticT = String.fromCharCode(97,102,102,101,99,116,101,100,95,52,95,51,52,0);
          let statisticsinactiveE = 5.0;
         libane2 += `${1 >> (Math.min(5, Math.abs(parseInt(`${statisticsinactiveE}`))))}`;
         crossU = `${crossU.length - 1}`;
         analyticT += `${analyticT.length}`;
         statisticsinactiveE += parseFloat(`${2}`);
          let pagination9 = false;
          let imagesR = false;
          let type_j0O = 0.0;
         inactiveW = `${libane2.length}`;
         pagination9 = type_j0O <= 19.100 && imagesR;
         imagesR = !imagesR && type_j0O == 54.10;
         inactiveW = `${megaphonei.length}`;
         inactiveW += `${megaphonei.length & inactiveW.length}`;
      if ((miniR.length * parseInt(`${modalk}`)) == 3 && (modalk * 2.73) == 3.83) {
          let rncored = 3.0;
          let goallogob = 3;
         modalk /= Math.max((String.fromCharCode(111,0) == libane2 ? parseInt(`${rncored}`) : libane2.length), 3);
         rncored -= parseFloat(`${goallogob}`);
      }
         inactiveW += `${(miniR == String.fromCharCode(97,0) ? megaphonei.length : miniR.length)}`;
         miniR += `${libane2.length}`;
         megaphonei += `${1 >> (Math.min(2, libane2.length))}`;
         inactiveW += `${miniR.length - inactiveW.length}`;
         megaphonei = `${miniR.length - parseInt(`${modalk}`)}`;
      for (let m = 0; m < 3; m++) {
          let background1: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,105,114,101,95,53,95,50,48,0),String.fromCharCode(117,95,55,50,95,105,116,101,109,0)], [String.fromCharCode(106,95,54,48,95,101,114,114,115,116,114,0),String.fromCharCode(119,95,56,50,95,115,97,116,117,114,97,116,105,111,110,0)]]);
          let clockM: Map<any, any> = new Map([[String.fromCharCode(114,101,100,101,108,105,118,101,114,121,95,111,95,51,49,0),177], [String.fromCharCode(109,95,54,50,95,116,105,101,114,115,0),261]]);
          let libaneF = false;
          let libavutilA = 3.0;
         libane2 = `${3 - inactiveW.length}`;
         background1 = new Map([[`${clockM.size}`, parseInt(`${libavutilA}`) / (Math.max(clockM.size, 1))]]);
         libaneF = (clockM.size - libavutilA) <= 39.22;
      }
      let redcirclebgK = String.fromCharCode(113,104,113,102,97,118,101,104,111,0) == miniR;
      do {
         miniR = `${parseInt(`${modalk}`) & libane2.length}`;
         if (redcirclebgK) {
            break;
         }
      } while (redcirclebgK && ((2 >> (Math.min(2, miniR.length))) <= 2 || (parseInt(`${modalk}`) / (Math.max(miniR.length, 6))) <= 2));
      while (libane2.length > inactiveW.length) {
          let greytickc = true;
          let pointV = false;
         libane2 = `${((pointV ? 5 : 1))}`;
         greytickc = !greytickc;
         pointV = (!greytickc ? greytickc : greytickc);
         break;
      }
      eighteenl = [(megaphonei == String.fromCharCode(109,0) ? parseInt(`${static_inE}`) : megaphonei.length)];
   }
       let lcopy_uu0 = String.fromCharCode(103,95,51,53,95,97,98,111,114,116,0);
      if (4 > lcopy_uu0.length) {
         lcopy_uu0 = `${2 / (Math.max(3, lcopy_uu0.length))}`;
      }
      while (lcopy_uu0 == String.fromCharCode(103,0) || lcopy_uu0.length == 2) {
         lcopy_uu0 += `${lcopy_uu0.length | 2}`;
         break;
      }
      while (lcopy_uu0.length < 4) {
          let profileactiveN = false;
          let activityy = 2;
          let scrollviewZ = String.fromCharCode(108,105,98,121,117,118,95,108,95,56,52,0);
          let largesoundq = 3.0;
         lcopy_uu0 += `${(parseInt(`${largesoundq}`) + (profileactiveN ? 5 : 4))}`;
         profileactiveN = scrollviewZ.length >= activityy;
         activityy %= Math.max(3 * activityy, 3);
         scrollviewZ = "2";
         largesoundq /= Math.max(parseFloat(`${2 * scrollviewZ.length}`), 5);
         break;
      }
      ocopy_zr = `${3 & parseInt(`${static_inE}`)}`;
      dangerV = [eighteenl.length | subsN];
      setHasNextPage(true);
    }
    setIsFetching(true);

   let iconbackwhiteV = String.fromCharCode(103,56,120,54,106,100,120,57,56,56,0) == ocopy_zr;
   do {
      ocopy_zr += `${ocopy_zr.length}`;
      if (iconbackwhiteV) {
         break;
      }
   } while ((4 > (ocopy_zr.length << (Math.min(Math.abs(1), 1))) && (1 << (Math.min(3, ocopy_zr.length))) > 3) && iconbackwhiteV);
      eighteenl.push(3);
       let turnL: Array<any> = [461, 715];
         turnL.push(turnL.length);
      for (let r = 0; r < 3; r++) {
         turnL.push(turnL.length >> (Math.min(3, turnL.length)));
      }
       let profile3 = 2.0;
      dangerV.push(eighteenl.length / (Math.max(3, 10)));
    const vodData = await fetchVod(page) as wawaBecome;

   let libjsijniprofilerJ = arrowK >= 9553817;
   do {
      arrowK /= Math.max(5, 1 | forwardc.size);
      if (libjsijniprofilerJ) {
         break;
      }
   } while ((4 > (arrowK * 4) || (subsN * arrowK) > 4) && libjsijniprofilerJ);
   let libavfilterD = forwardc.size <= 5955069;
   do {
       let goallogol = String.fromCharCode(109,117,108,104,105,95,122,95,49,56,0);
       let hiad6 = true;
       let annerb: Array<any> = [705, 631];
          let iconpipshrinkw = String.fromCharCode(120,112,117,98,95,105,95,57,53,0);
          let airbnbstarselectedS: Array<any> = [852, 81];
          let humidityb: Array<any> = [String.fromCharCode(114,95,53,56,95,109,101,109,115,121,115,0), String.fromCharCode(99,95,54,54,95,112,110,105,101,108,115,0)];
         goallogol += "3";
         iconpipshrinkw += `${1 | humidityb.length}`;
         airbnbstarselectedS = [humidityb.length / (Math.max(2, 7))];
      while (5 <= goallogol.length && hiad6) {
         hiad6 = (((!hiad6 ? 70 : annerb.length) >> (Math.min(annerb.length, 3))) <= 70);
         break;
      }
         hiad6 = goallogol.startsWith(`${hiad6}`);
      while (hiad6) {
         goallogol += `${(goallogol.length << (Math.min(4, Math.abs((hiad6 ? 1 : 4)))))}`;
         break;
      }
      for (let h = 0; h < 3; h++) {
         hiad6 = annerb.includes(hiad6);
      }
      if (4 >= annerb.length) {
         annerb = [annerb.length];
      }
       let libswresamplem: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,110,103,95,120,95,52,50,0),643], [String.fromCharCode(103,95,55,95,100,99,115,116,114,0),229]]);
       let megaphone5: Map<any, any> = new Map([[String.fromCharCode(115,97,118,101,114,95,53,95,56,0),309], [String.fromCharCode(102,114,101,101,109,95,112,95,55,56,0),982]]);
         annerb.push(((hiad6 ? 1 : 1) % 1));
      for (let x = 0; x < 2; x++) {
         libswresamplem.set(goallogol, megaphone5.size % (Math.max(4, goallogol.length)));
      }
      forwardc = new Map([[`${dangerV.length}`, 3 + goallogol.length]]);
      if (libavfilterD) {
         break;
      }
   } while (libavfilterD && (5 >= (eventB.length / 1)));
   let mcopy_nzW = subsN <= 8268211;
   do {
      subsN ^= 2;
      if (mcopy_nzW) {
         break;
      }
   } while (mcopy_nzW && ((4 * subsN) > 5));
    const data = vodData.List;

       let giflivestreaming3 = 1;
      let iconpointscoreg = giflivestreaming3 >= 6625654;
      do {
         giflivestreaming3 ^= 2 - giflivestreaming3;
         if (iconpointscoreg) {
            break;
         }
      } while (((2 - giflivestreaming3) >= 2 && 2 >= (giflivestreaming3 - giflivestreaming3)) && iconpointscoreg);
       let libruntimeexecutorR = 5.0;
          let mnewssharec: Array<any> = [154, 301];
          let singleH = 0.0;
          let libpangleflippedR = String.fromCharCode(106,95,50,49,95,100,111,110,97,116,101,0);
         libruntimeexecutorR += parseFloat(`${libpangleflippedR.length * giflivestreaming3}`);
         mnewssharec = [2 | mnewssharec.length];
         singleH -= mnewssharec.length;
         libpangleflippedR = "3";
      ocopy_zr = `${(String.fromCharCode(104,0) == eventB ? parseInt(`${typesT}`) : eventB.length)}`;
   for (let d = 0; d < 3; d++) {
      dangerV.push(customV << (Math.min(Math.abs(3), 3)));
   }
   let updates3 = 7725840 >= dangerV.length;
   do {
       let selln = String.fromCharCode(101,120,116,109,97,112,95,111,95,55,56,0);
       let other_ = String.fromCharCode(118,95,51,49,95,111,102,102,101,115,116,0);
       let fastforwardh = String.fromCharCode(109,95,57,95,97,116,116,97,99,104,0);
      for (let l = 0; l < 2; l++) {
         fastforwardh += `${selln.length & other_.length}`;
      }
          let fullW = 3.0;
          let codegend = String.fromCharCode(98,116,111,98,105,110,95,57,95,55,51,0);
          let descb = 3;
         selln = `${other_.length ^ codegend.length}`;
         fullW += parseFloat(`${descb}`);
         codegend += `${parseInt(`${fullW}`) + 3}`;
         descb <<= Math.min(Math.abs(parseInt(`${fullW}`)), 3);
      dangerV.push(eventB.length & 1);
      if (updates3) {
         break;
      }
   } while (updates3 && ((dangerV.length + forwardc.size) <= 2 || (dangerV.length + forwardc.size) <= 2));
    setIsFetching(false);

      arrowK |= ocopy_zr.length;
   if (1 <= (subsN / (Math.max(3, 5))) && 3 <= (subsN - parseInt(`${typesT}`))) {
       let sortH = false;
       let notificationfillemptyT = 0;
      let scheduleE = sortH ? !sortH : sortH;
      do {
         sortH = 48 >= notificationfillemptyT;
         if (scheduleE) {
            break;
         }
      } while (((notificationfillemptyT + 5) <= 4) && scheduleE);
       let final_faY = String.fromCharCode(100,105,115,99,111,118,101,114,101,100,95,118,95,57,55,0);
       let yellowvideolivey = String.fromCharCode(100,95,53,51,95,114,101,109,105,110,100,0);
       let containerX = String.fromCharCode(111,95,54,53,95,116,111,111,108,116,105,112,0);
      let playlistS = containerX == String.fromCharCode(118,57,122,0);
      do {
          let wifirouterH = String.fromCharCode(109,97,108,101,95,111,95,54,50,0);
         containerX += `${2 % (Math.max(notificationfillemptyT, 6))}`;
         wifirouterH = `${wifirouterH.length % (Math.max(10, wifirouterH.length))}`;
         if (playlistS) {
            break;
         }
      } while (playlistS && (2 == containerX.length || !sortH));
      while (5 < (notificationfillemptyT >> (Math.min(Math.abs(1), 3)))) {
         yellowvideolivey = `${notificationfillemptyT ^ 2}`;
         break;
      }
      while (yellowvideolivey == String.fromCharCode(66,0)) {
         containerX += `${yellowvideolivey.length & containerX.length}`;
         break;
      }
      typesT /= Math.max(parseFloat(`${notificationfillemptyT & 3}`), 4);
   }
      ocopy_zr = `${customV % (Math.max(forwardc.size, 2))}`;

    setAdultVodData(curr => [...curr, ...data]);

   while (2 == eventB.length) {
      ocopy_zr += `${ocopy_zr.length}`;
      break;
   }
       let componentZ: Array<any> = [23, 255];
       let notificationgrayj = String.fromCharCode(108,111,103,105,99,97,108,95,111,95,56,51,0);
      while (notificationgrayj.includes(`${componentZ.length}`)) {
          let iconeyen = 3.0;
          let descY = String.fromCharCode(111,102,102,101,115,116,95,116,95,57,0);
         notificationgrayj += `${parseInt(`${iconeyen}`) & 1}`;
         iconeyen += descY.length % 3;
         descY += `${descY.length}`;
         break;
      }
       let penaltygoal6 = 4.0;
       let paginationa = 5.0;
      if ((5.65 * penaltygoal6) > 3.16 && (penaltygoal6 * 5.65) > 1.9) {
         paginationa -= parseFloat(`${notificationgrayj.length << (Math.min(Math.abs(1), 2))}`);
      }
      for (let r = 0; r < 3; r++) {
         paginationa -= parseFloat(`${parseInt(`${paginationa}`)}`);
      }
      if ((paginationa / (Math.max(4, penaltygoal6))) == 4.24 || 2.52 == (penaltygoal6 / 4.24)) {
          let sansd = 1.0;
          let bgvipsporto = false;
          let cornerkickK = 0.0;
          let commone = true;
         paginationa *= parseFloat(`${parseInt(`${cornerkickK}`) / 3}`);
         sansd += parseInt(`${sansd}`) + 3;
         bgvipsporto = bgvipsporto && commone;
         cornerkickK -= ((commone ? 2 : 4));
      }
      for (let a = 0; a < 1; a++) {
         paginationa *= parseFloat(`${notificationgrayj.length << (Math.min(2, Math.abs(parseInt(`${paginationa}`))))}`);
      }
      eventB = `${1 + subsN}`;
      arrowK /= Math.max(2 & forwardc.size, 1);
    setPage(page => page + 1);
  };

  const renderItem = ({ item, index }: { item: wawaConstThumbnail; index: number }) => {
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
              source={require('@static/images/iconnewsshareDist.gif')}
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
                      source={require('@static/images/iconnewsshareDist.gif')}
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
