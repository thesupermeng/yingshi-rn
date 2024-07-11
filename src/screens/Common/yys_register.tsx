import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import { SearchBar } from "@rneui/base";
import { useTheme } from "@react-navigation/native";
import OrderedSearchResultsList from "../../components/search/yys_cancel";
import SearchResultList from "../../components/search/yys_libimagepipeline";
import ScreenContainer from "../../components/container/yys_executor_expand";
import BackButton from "../../components/button/yys_render_cast_button";
import SearchIcon from "@static/images/malaysiaLibcxxcomponents.svg";
import ClearIcon from "@static/images/mappingClub.svg";
import { useQuery } from "@tanstack/react-query";

import { yys_ActivityTumbnail } from "@type/yys_libzeus";
import { RootStackScreenProps } from "@type/yys_settings";
import { API_DOMAIN } from "@utility/yys_ajax_switch";
import VodWithDescriptionList from "../../components/vod/yys_abidetect_libavdevice";
import { useAppDispatch, useAppSelector } from "@hooks/yys_frame";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import FastImage from "../../components/common/yys_vertical_collection";
import {
  addSearchHistory,
  clearSearchHistory,
} from "@redux/actions/yys_background";
import Animated, {
  FadeInUp,
  FadeOutUp,
  useAnimatedStyle,
} from "react-native-reanimated";
import ClearHistoryIcon from "@static/images/tooltipsViewerOver.svg";
import EmptyList from "../../components/common/yys_goal_utils";
import appsFlyer from "react-native-appsflyer";
import ConfirmationModal from "../../components/modal/yys_shrink_reactnativejs";
import { yys_Downloader } from "@api";
import yys_event_common from "../../../Umeng/yys_event_common";
import { yys_StatsForm } from "@utility/yys_context_muted";

export default ({ navigation, route }: RootStackScreenProps<"搜索">) => {
  const [search, setSearch] = useState("");
  const [placeholderSearch, setPlaceHolderSearch] = useState(
    route.params.initial
  );

  const [searchTimer, setSearchTimer] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [searchResults, setSearchResults] = useState<Array<yys_ActivityTumbnail>>(
    []
  );
  const [showResults, setShowResults] = useState(false);
  const [searchLimit, setSearchLimit] = useState(0)

  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(
    ({ searchHistoryReducer }: yys_MintegralLibavdevice) => searchHistoryReducer
  );
  const [isFetching, setisFetching] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { colors, textVariants, spacing, icons } = useTheme();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { data: recommendations } = useQuery({
    queryKey: ["recommendationList"],
    queryFn: () => yys_Downloader.getListByRecommendations(),
  });

  async function fetchData(text: string, userSearch: boolean = false) {
    setisFetching(true);

    
    if (userSearch && text.length > 0) yys_event_common.searchKeywordAnalytics(text);
    

    yys_Downloader.getListByKeyword(text)
      .then((data) => {
        setSearchTimer(0);

        if (data.length <= 0) {
          setSearchResults([]);
        } else {
          setSearchResults(data);

          
          if (userSearch) yys_event_common.searchResultViewsAnalytics();
          
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setisFetching(false);
      });
  }

  async function fetchNextPage(text: string, userSearch: boolean = false) {
    if (!hasMore || isFetching) {
      return; 
    }

    setisFetching(true);

    const nextPage = page + 1;
    yys_Downloader.getListByKeyword(text, {
      page: nextPage,
    }).then((data) => {
      setSearchTimer(0);

      if (data.length <= 0) {
        setHasMore(false); 
      } else {
        
        setSearchResults([...searchResults, ...json.data.List]);
        setPage(nextPage);
        
        if (userSearch) yys_event_common.searchResultViewsAnalytics();
        
      }
    })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setisFetching(false);
      });
  }

  const handleEndReached = () => {
       let fast0: Array<any> = [160, 514];
    let stepx: Array<any> = [500, 847];
    let sidem = String.fromCharCode(97,115,115,101,109,98,108,121,0);
    let otherV: Array<any> = [String.fromCharCode(115,107,105,112,0), String.fromCharCode(102,117,110,99,116,105,111,110,0)];
    let matchesX: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,99,97,115,116,0),630], [String.fromCharCode(114,101,112,108,105,99,97,116,101,0),749]]);
    let shoot6 = true;
    let thailandM = false;
    let downloads = String.fromCharCode(105,110,111,117,116,115,0);
      thailandM = downloads.length >= 71 && !thailandM;
      matchesX = new Map([[`${otherV.length}`, sidem.length]]);
   for (let z = 0; z < 3; z++) {
      thailandM = fast0.length < 62;
   }
      downloads += "3";
      sidem = "2";
   let toponN = 6738015 >= fast0.length;
   do {
      fast0.push(sidem.length);
      if (toponN) {
         break;
      }
   } while ((2 == (matchesX.size * fast0.length) && (matchesX.size * fast0.length) == 2) && toponN);
       let hook9 = 2.0;
       let profile1: Array<any> = [String.fromCharCode(114,101,99,111,118,101,114,0), String.fromCharCode(97,102,102,105,110,105,116,121,95,114,95,49,53,0)];
         hook9 /= Math.max(parseFloat(`${parseInt(`${hook9}`) * profile1.length}`), 3);
         profile1.push(profile1.length);
       let episodesD = String.fromCharCode(99,111,114,114,101,99,116,101,100,0);
       let knewinterstitial5 = String.fromCharCode(97,99,111,108,111,114,0);
      if (1 < (profile1.length & knewinterstitial5.length) && (knewinterstitial5.length & 1) < 1) {
         knewinterstitial5 += `${episodesD.length}`;
      }
         episodesD = `${(String.fromCharCode(52,0) == episodesD ? knewinterstitial5.length : episodesD.length)}`;
         knewinterstitial5 = "3";
      thailandM = sidem.endsWith(`${thailandM}`);
       let giftP = 1.0;
       let filep = 0.0;
       let libreactperfloggerjnit = String.fromCharCode(116,111,120,121,122,0);
          let targetM = String.fromCharCode(119,101,114,101,0);
          let guidec = String.fromCharCode(104,108,105,116,0);
         filep /= Math.max(libreactperfloggerjnit.length / 1, 3);
         targetM = `${(targetM == String.fromCharCode(75,0) ? targetM.length : guidec.length)}`;
         guidec = "1";
          let entryQ = String.fromCharCode(116,114,97,99,101,114,0);
          let bannerk = 0;
         giftP += parseFloat(`${bannerk | 1}`);
         entryQ = `${entryQ.length % (Math.max(entryQ.length, 10))}`;
         bannerk /= Math.max(1, (entryQ == String.fromCharCode(66,0) ? entryQ.length : entryQ.length));
       let mbnativeadvancedc = 3;
      while ((filep + 5.20) < 3.10 && 5.20 < (libreactperfloggerjnit.length + filep)) {
          let unimplementedviewY = 0.0;
          let stationsI: Array<any> = [String.fromCharCode(104,97,108,102,0), String.fromCharCode(118,112,108,112,102,0)];
          let playI = String.fromCharCode(117,115,97,103,101,0);
          let guide5 = 4.0;
          let unread5 = String.fromCharCode(112,97,99,107,101,100,0);
         libreactperfloggerjnit = `${playI.length >> (Math.min(1, Math.abs(parseInt(`${unimplementedviewY}`))))}`;
         unimplementedviewY /= Math.max(1, 4);
         stationsI.push(stationsI.length | parseInt(`${guide5}`));
         playI += `${parseInt(`${guide5}`) + 2}`;
         unread5 = `${unread5.length}`;
         break;
      }
      while ((5.87 - giftP) < 5.32 || 5 < (mbnativeadvancedc - parseInt(`${giftP}`))) {
         giftP -= parseFloat(`${parseInt(`${filep}`)}`);
         break;
      }
      let left9 = filep >= 7454695.0;
      do {
         filep /= Math.max(2, 1);
         if (left9) {
            break;
         }
      } while (left9 && (1.17 < filep));
         mbnativeadvancedc ^= 3 ^ mbnativeadvancedc;
         libreactperfloggerjnit += `${mbnativeadvancedc / (Math.max(7, parseInt(`${giftP}`)))}`;
         libreactperfloggerjnit += `${3 ^ mbnativeadvancedc}`;
      sidem = `${libreactperfloggerjnit.length >> (Math.min(2, fast0.length))}`;
      matchesX = new Map([[sidem, (sidem == String.fromCharCode(97,0) ? sidem.length : (shoot6 ? 1 : 5))]]);
   let sinay = sidem.length <= 5268450;
   do {
       let libswscaleq = String.fromCharCode(115,101,116,105,0);
       let encrypte = 5.0;
       let clockQ = 0.0;
       let disconnectedn = 1.0;
         libswscaleq += `${libswscaleq.length}`;
      for (let w = 0; w < 2; w++) {
         encrypte /= Math.max(2, 2);
      }
      if (3.95 >= (disconnectedn - clockQ)) {
          let networks = String.fromCharCode(105,109,112,97,99,116,0);
          let renderF: Array<any> = [889, 950, 22];
          let collection1 = String.fromCharCode(114,101,97,100,98,105,116,115,0);
         clockQ += 3;
         networks += `${renderF.length + networks.length}`;
         renderF = [1 % (Math.max(3, networks.length))];
         collection1 = `${2 - renderF.length}`;
      }
         libswscaleq = `${2 ^ parseInt(`${disconnectedn}`)}`;
          let infoy = 0.0;
          let canvas9 = String.fromCharCode(116,108,101,110,0);
         encrypte /= Math.max(libswscaleq.length, 3);
         infoy += canvas9.length & parseInt(`${infoy}`);
         canvas9 += `${(String.fromCharCode(117,0) == canvas9 ? parseInt(`${infoy}`) : canvas9.length)}`;
      let roomK = 7139346.0 <= clockQ;
      do {
         clockQ /= Math.max(parseInt(`${encrypte}`) - parseInt(`${clockQ}`), 2);
         if (roomK) {
            break;
         }
      } while (roomK && ((libswscaleq.length | 1) < 5));
      if ((disconnectedn * 5.77) > 4.93) {
          let libfollys = String.fromCharCode(97,101,115,111,112,116,0);
          let trophyp = false;
         disconnectedn /= Math.max(1, 2);
         libfollys = `${(3 % (Math.max(5, (trophyp ? 3 : 2))))}`;
         trophyp = libfollys.length > 77;
      }
         disconnectedn /= Math.max(5, 3);
       let activeU: Map<any, any> = new Map([[String.fromCharCode(111,117,114,0),true ], [String.fromCharCode(115,104,117,116,116,105,110,103,0),false ]]);
       let baiduH: Map<any, any> = new Map([[String.fromCharCode(98,111,114,100,101,114,101,100,0),192], [String.fromCharCode(114,95,55,49,95,98,108,111,99,107,100,115,112,0),613]]);
         activeU.set(`${activeU.size}`, activeU.size + 3);
         disconnectedn += libswscaleq.length & 1;
      let neonF = 6091040.0 >= encrypte;
      do {
         encrypte -= 1 ^ activeU.size;
         if (neonF) {
            break;
         }
      } while (neonF && (1.41 == encrypte));
      sidem += `${otherV.length % 3}`;
      if (sinay) {
         break;
      }
   } while (sinay && (4 < (sidem.length % 3)));
      matchesX.set(sidem, fast0.length);
   if ((matchesX.size >> (Math.min(3, fast0.length))) == 1) {
       let searchE = 1.0;
       let whistleP = String.fromCharCode(99,115,114,105,100,0);
       let injuryo = 0.0;
       let native2 = String.fromCharCode(109,111,118,116,101,120,116,115,117,98,0);
       let mintegrals = false;
         mintegrals = whistleP.length <= searchE;
         mintegrals = (((mintegrals ? 59 : native2.length) | native2.length) < 59);
         native2 = `${whistleP.length}`;
         searchE -= whistleP.length;
         native2 += "1";
      let actionsD = mintegrals ? !mintegrals : mintegrals;
      do {
         mintegrals = String.fromCharCode(76,0) == whistleP;
         if (actionsD) {
            break;
         }
      } while (actionsD && (native2.length > 4 || !mintegrals));
       let configw = String.fromCharCode(108,105,115,116,101,100,0);
       let greyz = String.fromCharCode(100,111,110,101,0);
      if ((1.11 / (Math.max(7, searchE))) > 3.26 || (greyz.length - 5) > 2) {
         greyz += `${configw.length}`;
      }
      if (!mintegrals) {
          let privacyQ: Map<any, any> = new Map([[String.fromCharCode(97,109,117,108,116,105,0),895], [String.fromCharCode(99,104,97,108,108,101,110,103,101,0),769]]);
          let tumbnailF = 4;
         searchE += 1;
         privacyQ.set(`${tumbnailF}`, privacyQ.size);
         tumbnailF >>= Math.min(3, Math.abs(privacyQ.size & tumbnailF));
      }
      for (let e = 0; e < 3; e++) {
          let telemetryH = 4;
          let emptyP: Array<any> = [229, 318];
          let popupf = 5;
          let scrollviewi = String.fromCharCode(110,101,103,111,116,105,97,116,105,111,110,0);
          let orangeb = 5.0;
         native2 += `${1 | telemetryH}`;
         telemetryH -= (scrollviewi == String.fromCharCode(103,0) ? scrollviewi.length : parseInt(`${orangeb}`));
         emptyP.push(popupf);
         popupf &= emptyP.length;
         orangeb += parseFloat(`${2 * parseInt(`${orangeb}`)}`);
      }
      for (let x = 0; x < 3; x++) {
         mintegrals = 73 >= native2.length;
      }
      for (let q = 0; q < 3; q++) {
         searchE += 1 >> (Math.min(2, greyz.length));
      }
      if ((configw.length | 1) > 1 && 3.67 > (searchE / (Math.max(3.13, 5)))) {
          let turn3 = String.fromCharCode(117,115,101,115,0);
          let trashR = String.fromCharCode(106,95,56,52,95,111,112,99,111,100,101,115,0);
         configw = `${(native2 == String.fromCharCode(122,0) ? native2.length : parseInt(`${injuryo}`))}`;
         turn3 = `${turn3.length + trashR.length}`;
         trashR += `${turn3.length | trashR.length}`;
      }
          let referrerM = true;
          let unreadG = false;
          let mailg = String.fromCharCode(103,114,97,121,115,99,97,108,101,0);
         configw = `${(parseInt(`${searchE}`) << (Math.min(3, Math.abs((mintegrals ? 2 : 4)))))}`;
         referrerM = (referrerM ? unreadG : !referrerM);
         unreadG = (20 >= (mailg.length + (!referrerM ? mailg.length : 20)));
          let ajaxl = String.fromCharCode(108,111,119,98,100,0);
          let whatsappO = String.fromCharCode(117,100,105,111,0);
         whistleP = `${2 << (Math.min(2, Math.abs(parseInt(`${injuryo}`))))}`;
         ajaxl += "1";
         whatsappO = "3";
      fast0.push((sidem == String.fromCharCode(101,0) ? (thailandM ? 5 : 5) : sidem.length));
   }
       let cross2 = String.fromCharCode(112,97,99,107,97,103,101,0);
       let viewerA: Map<any, any> = new Map([[String.fromCharCode(99,104,105,108,100,0),267], [String.fromCharCode(115,117,115,112,101,110,100,101,100,0),719], [String.fromCharCode(114,101,105,109,112,111,114,116,0),242]]);
       let latnk = String.fromCharCode(114,101,97,100,99,98,0);
      let unselecteda = cross2 == String.fromCharCode(48,99,101,0);
      do {
         cross2 += `${viewerA.size}`;
         if (unselecteda) {
            break;
         }
      } while (unselecteda && ((5 << (Math.min(3, Math.abs(viewerA.size)))) >= 4));
      if ((2 >> (Math.min(3, Math.abs(viewerA.size)))) < 3) {
          let actionL = String.fromCharCode(97,110,110,111,116,97,116,105,111,110,0);
          let bodan8: Map<any, any> = new Map([[String.fromCharCode(114,116,102,0),String.fromCharCode(114,103,98,97,98,101,0)], [String.fromCharCode(97,117,116,111,99,111,109,109,105,116,0),String.fromCharCode(105,109,101,114,0)]]);
          let textlayoutmanagerl = 4.0;
          let orangeE = false;
         latnk = `${(cross2 == String.fromCharCode(81,0) ? viewerA.size : cross2.length)}`;
         actionL = `${bodan8.size << (Math.min(Math.abs(2), 4))}`;
         bodan8.set(`${actionL}`, (actionL == String.fromCharCode(48,0) ? bodan8.size : actionL.length));
         textlayoutmanagerl -= ((orangeE ? 1 : 1) + parseInt(`${textlayoutmanagerl}`));
         orangeE = bodan8.size > 14 || String.fromCharCode(86,0) == actionL;
      }
          let linkr = 3;
         viewerA.set(latnk, viewerA.size | latnk.length);
         linkr *= linkr >> (Math.min(Math.abs(2), 1));
         latnk = `${viewerA.size << (Math.min(cross2.length, 4))}`;
         viewerA.set(cross2, viewerA.size);
          let nalyticsR = false;
          let benefitx = String.fromCharCode(100,105,109,105,115,115,0);
         viewerA = new Map([[benefitx, 1]]);
         nalyticsR = !nalyticsR;
         benefitx = `${((nalyticsR ? 1 : 5))}`;
       let vietnamK = 3.0;
         cross2 += `${parseInt(`${vietnamK}`)}`;
      for (let l = 0; l < 1; l++) {
         cross2 += `${(cross2 == String.fromCharCode(107,0) ? cross2.length : parseInt(`${vietnamK}`))}`;
      }
      downloads += `${fast0.length & matchesX.size}`;
       let shoot5 = 3.0;
       let libpangleflippedf = String.fromCharCode(115,116,111,114,109,98,105,114,100,0);
       let mini3 = 0.0;
         libpangleflippedf = `${parseInt(`${mini3}`) | 3}`;
      if (1 >= libpangleflippedf.length) {
          let injuryv = false;
         mini3 *= parseFloat(`${1}`);
         injuryv = (!injuryv ? injuryv : !injuryv);
      }
      while (libpangleflippedf.includes(`${shoot5}`)) {
          let entrye = String.fromCharCode(115,111,99,97,110,116,115,101,110,100,109,111,114,101,0);
          let chinaZ = 4.0;
          let math6 = 0.0;
          let combinedt = String.fromCharCode(106,119,116,0);
          let neone = String.fromCharCode(100,110,115,110,97,109,101,0);
         libpangleflippedf += `${combinedt.length}`;
         entrye = `${(String.fromCharCode(111,0) == neone ? parseInt(`${math6}`) : neone.length)}`;
         chinaZ -= parseFloat(`${3}`);
         math6 *= 2 >> (Math.min(3, Math.abs(parseInt(`${chinaZ}`))));
         combinedt = "1";
         break;
      }
         libpangleflippedf += "3";
          let networka: Array<any> = [158, 699];
         libpangleflippedf = "3";
         networka = [3 - networka.length];
         mini3 *= parseFloat(`${2 * parseInt(`${shoot5}`)}`);
      let morev = libpangleflippedf == String.fromCharCode(53,54,110,53,0);
      do {
         libpangleflippedf += `${parseInt(`${mini3}`)}`;
         if (morev) {
            break;
         }
      } while (morev && (shoot5 > 5.7));
      let textinput7 = libpangleflippedf == String.fromCharCode(52,99,55,117,103,57,0);
      do {
         libpangleflippedf = `${parseInt(`${mini3}`) ^ 2}`;
         if (textinput7) {
            break;
         }
      } while (textinput7 && ((parseInt(`${mini3}`) / (Math.max(8, libpangleflippedf.length))) < 1));
      for (let y = 0; y < 1; y++) {
         mini3 -= parseFloat(`${parseInt(`${mini3}`) ^ 1}`);
      }
      thailandM = !thailandM || stepx.length >= 6;
   while (stepx.length <= 1) {
       let starK = 3;
       let leagueZ = 1.0;
          let ucopy_l_a = String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,0);
          let large4 = 1;
          let invitey = String.fromCharCode(112,114,111,112,101,114,116,105,101,115,0);
         starK *= 3 ^ large4;
         ucopy_l_a = `${(String.fromCharCode(65,0) == ucopy_l_a ? invitey.length : ucopy_l_a.length)}`;
         large4 *= invitey.length << (Math.min(Math.abs(2), 5));
         leagueZ *= parseInt(`${leagueZ}`) | 1;
      while (leagueZ <= starK) {
         leagueZ /= Math.max(starK, 5);
         break;
      }
         starK *= 2;
         leagueZ += 1;
       let otherP: Array<any> = [148, 141, 933];
      shoot6 = stepx.length < 59;
      break;
   }
       let znewarchdefaultsd = 2.0;
       let whistleu = String.fromCharCode(115,119,102,112,108,97,121,101,114,0);
          let eighteens = 5.0;
          let config1: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,111,110,97,110,116,0),String.fromCharCode(116,114,97,110,115,112,97,114,101,110,99,121,0)], [String.fromCharCode(122,109,98,118,0),String.fromCharCode(115,117,109,109,97,114,121,0)], [String.fromCharCode(115,98,112,114,111,0),String.fromCharCode(105,102,97,99,116,111,114,0)]]);
         whistleu += "3";
         eighteens /= Math.max(config1.size >> (Math.min(1, Math.abs(parseInt(`${eighteens}`)))), 1);
         config1.set(`${eighteens}`, config1.size >> (Math.min(2, Math.abs(parseInt(`${eighteens}`)))));
      while (parseInt(`${znewarchdefaultsd}`) >= whistleu.length) {
         znewarchdefaultsd += parseInt(`${znewarchdefaultsd}`);
         break;
      }
          let privilegek: Map<any, any> = new Map([[String.fromCharCode(120,103,101,116,98,118,0),997], [String.fromCharCode(97,117,116,111,99,97,112,105,116,97,108,105,122,97,116,105,111,110,0),843], [String.fromCharCode(106,115,111,110,115,0),271]]);
          let catagoryk = String.fromCharCode(114,101,97,108,105,102,121,0);
          let klevinO = String.fromCharCode(99,111,110,118,101,114,116,0);
         whistleu += `${klevinO.length}`;
         privilegek = new Map([[`${privilegek.size}`, 2]]);
         catagoryk = `${(String.fromCharCode(119,0) == catagoryk ? privilegek.size : catagoryk.length)}`;
         klevinO = "1";
         whistleu = `${parseInt(`${znewarchdefaultsd}`)}`;
       let securityd: Array<any> = [714, 389];
         securityd.push(2 + whistleu.length);
      stepx.push(otherV.length);
   if (!shoot6) {
       let libfolly9: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,103,109,0),String.fromCharCode(109,101,109,117,116,105,108,0)], [String.fromCharCode(98,105,119,101,105,103,104,116,0),String.fromCharCode(98,111,117,110,100,115,0)]]);
       let volumen = 0;
       let imagemanagerf = false;
      while (!Array.from(libfolly9.keys()).includes(`${volumen}`)) {
         libfolly9.set(`${imagemanagerf}`, 3 - libfolly9.size);
         break;
      }
         volumen *= 3 << (Math.min(Math.abs(volumen), 4));
         volumen &= (volumen + (imagemanagerf ? 1 : 4));
         libfolly9 = new Map([[`${libfolly9.size}`, libfolly9.size - 3]]);
      let latnu = volumen <= 9153384;
      do {
          let greyk: Array<any> = [350, 387];
          let launcherN = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,0);
          let bodanh = String.fromCharCode(100,97,115,104,101,110,99,0);
          let linkZ = String.fromCharCode(98,100,119,110,0);
          let librrc5 = 1.0;
         volumen ^= 3;
         greyk = [parseInt(`${librrc5}`)];
         launcherN += `${bodanh.length}`;
         bodanh = `${launcherN.length}`;
         linkZ += `${launcherN.length & parseInt(`${librrc5}`)}`;
         if (latnu) {
            break;
         }
      } while ((libfolly9.get(`${volumen}`) == null) && latnu);
          let sourceg: Array<any> = [618, 907, 949];
          let malaysial: Map<any, any> = new Map([[String.fromCharCode(115,116,97,116,101,112,0),807], [String.fromCharCode(100,117,109,109,121,0),976], [String.fromCharCode(99,111,108,108,97,112,115,101,0),560]]);
         libfolly9.set(`${volumen}`, volumen - malaysial.size);
         sourceg = [1];
         malaysial = new Map([[`${sourceg.length}`, 2]]);
         volumen |= (2 / (Math.max(3, (imagemanagerf ? 2 : 5))));
      if ((2 * libfolly9.size) < 1) {
          let windV = 2;
          let referrerp = String.fromCharCode(112,114,111,118,105,100,101,114,0);
          let short_po = String.fromCharCode(101,120,104,97,117,115,116,0);
          let appsn = false;
          let scorex = 0;
         libfolly9.set(`${appsn}`, 1 | libfolly9.size);
         windV >>= Math.min(1, Math.abs(1));
         referrerp += `${scorex | 1}`;
         short_po = `${windV % (Math.max(short_po.length, 10))}`;
         scorex ^= 1 - short_po.length;
      }
      while (imagemanagerf && (2 / (Math.max(4, libfolly9.size))) <= 1) {
         libfolly9.set(`${imagemanagerf}`, volumen);
         break;
      }
      shoot6 = (!thailandM ? shoot6 : !thailandM);
   }
   for (let r = 0; r < 2; r++) {
      matchesX = new Map([[`${matchesX.size}`, sidem.length + 3]]);
   }
      stepx = [((thailandM ? 3 : 2))];
   for (let h = 0; h < 1; h++) {
      shoot6 = otherV.length > matchesX.size;
   }

    fetchNextPage(search, true); 
  };

  useEffect(() => {
    if (route.params.initial !== "") {
      fetchData(route.params.initial);
    }
  }, []);

  const updateSearch = (input: string) => {
    setSearch(input);
    setSearchResults([]);
    if (searchTimer) {
      clearTimeout(searchTimer);
    }
    setSearchTimer(
      setTimeout(() => {
        fetchData(input, true);
      }, 500)
    );
  };

  const onSubmit = () => {
       let main_jO: Map<any, any> = new Map([[String.fromCharCode(100,114,105,102,116,0),String.fromCharCode(108,105,110,101,97,114,0)], [String.fromCharCode(100,116,115,0),String.fromCharCode(115,108,105,99,101,116,104,114,101,97,100,0)], [String.fromCharCode(119,95,54,53,0),String.fromCharCode(99,111,102,102,105,110,0)]]);
    let whiteY = String.fromCharCode(98,114,117,116,101,102,111,114,99,101,0);
    let alertl: Array<any> = [String.fromCharCode(99,97,108,108,98,97,99,107,115,0), String.fromCharCode(100,101,118,105,99,101,115,0), String.fromCharCode(114,101,97,100,109,101,0)];
    let telemetryo = String.fromCharCode(104,99,109,99,0);
    let injuryw = String.fromCharCode(99,117,114,118,101,115,0);
    let frame_uk = 5.0;
    let linkA = false;
    let react9 = String.fromCharCode(98,117,109,112,0);
   for (let v = 0; v < 2; v++) {
       let dropdownf = 1.0;
       let qnewinterstitiall = String.fromCharCode(97,116,104,0);
       let fieldV = String.fromCharCode(100,97,114,119,105,110,0);
      for (let r = 0; r < 2; r++) {
         qnewinterstitiall = "2";
      }
       let notificationp = 0.0;
       let private_kn = 0.0;
      for (let u = 0; u < 2; u++) {
          let directZ: Map<any, any> = new Map([[String.fromCharCode(112,104,112,0),709], [String.fromCharCode(97,100,100,98,108,107,0),208]]);
          let serviceQ = String.fromCharCode(117,110,97,115,115,105,103,110,101,100,0);
          let policyF = 2.0;
          let helperr = String.fromCharCode(105,116,101,109,0);
          let tailN = 5.0;
         notificationp += (String.fromCharCode(100,0) == serviceQ ? parseInt(`${policyF}`) : serviceQ.length);
         directZ = new Map([[`${directZ.size}`, 3 - helperr.length]]);
         policyF *= parseInt(`${tailN}`) * helperr.length;
         tailN *= directZ.size >> (Math.min(Math.abs(1), 5));
      }
         notificationp *= parseInt(`${private_kn}`);
         notificationp -= parseInt(`${private_kn}`);
      while (dropdownf >= 1.40) {
          let membership8 = true;
          let screend: Array<any> = [String.fromCharCode(113,117,97,100,116,114,101,101,0), String.fromCharCode(105,110,100,101,118,115,0)];
         qnewinterstitiall = `${screend.length >> (Math.min(Math.abs(3), 3))}`;
         break;
      }
      if ((dropdownf - 4) >= 4.55) {
         notificationp -= parseInt(`${dropdownf}`) ^ 1;
      }
          let episodes2 = true;
         notificationp /= Math.max(1 | parseInt(`${notificationp}`), 2);
         episodes2 = (!episodes2 ? !episodes2 : !episodes2);
         dropdownf -= parseFloat(`${parseInt(`${dropdownf}`) % 2}`);
      telemetryo += `${3 ^ injuryw.length}`;
   }
      main_jO.set(whiteY, whiteY.length % 3);

    let searchKeyword = placeholderSearch;

      alertl.push(injuryw.length % (Math.max(2, 2)));
       let abidetect3: Map<any, any> = new Map([[String.fromCharCode(104,97,110,100,111,102,102,0),String.fromCharCode(105,110,116,101,114,0)], [String.fromCharCode(99,111,109,98,105,110,101,114,0),String.fromCharCode(101,113,117,105,108,105,98,114,105,117,109,0)], [String.fromCharCode(115,116,100,97,116,111,109,105,99,0),String.fromCharCode(99,111,109,112,97,115,115,0)]]);
          let custom7: Array<any> = [19, 599, 351];
          let orientationl: Map<any, any> = new Map([[String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,115,0),741], [String.fromCharCode(97,112,110,103,0),229]]);
         abidetect3 = new Map([[`${orientationl.size}`, custom7.length]]);
         abidetect3.set(`${abidetect3.size}`, abidetect3.size % 2);
          let floatingd = false;
          let winit_s2H = true;
          let floatingK = String.fromCharCode(116,97,100,100,0);
         abidetect3 = new Map([[`${winit_s2H}`, (2 + (floatingd ? 3 : 2))]]);
         floatingd = String.fromCharCode(95,0) == floatingK;
      injuryw = "2";

    if (search != "") {

   if (frame_uk > 3.95) {
       let mode0 = String.fromCharCode(111,112,101,110,103,108,95,57,95,57,51,0);
       let progresse = String.fromCharCode(115,116,117,102,102,0);
       let filei = String.fromCharCode(101,113,117,105,118,97,108,101,110,116,0);
       let favicony = true;
         favicony = progresse.length == 9;
      for (let m = 0; m < 2; m++) {
         favicony = String.fromCharCode(95,0) == mode0 && progresse.length == 91;
      }
      if (!favicony) {
          let libglogi = String.fromCharCode(99,111,109,98,0);
         mode0 = `${2 >> (Math.min(1, progresse.length))}`;
         libglogi += `${2 >> (Math.min(3, libglogi.length))}`;
      }
      for (let w = 0; w < 1; w++) {
         filei = `${(1 * (favicony ? 5 : 4))}`;
      }
         progresse = `${mode0.length ^ progresse.length}`;
          let indexG = 0.0;
         filei = `${3 << (Math.min(5, filei.length))}`;
         indexG -= parseInt(`${indexG}`);
         mode0 += "2";
       let icong = true;
      if (!progresse.includes(`${mode0.length}`)) {
         mode0 += `${((favicony ? 5 : 4) - 2)}`;
      }
         favicony = (!icong ? !favicony : !icong);
      for (let e = 0; e < 2; e++) {
         icong = String.fromCharCode(110,0) == progresse;
      }
      while (icong) {
         favicony = (icong ? !favicony : icong);
         break;
      }
      linkA = alertl.length >= 23;
   }
       let sourceu = String.fromCharCode(105,110,105,116,115,109,111,116,105,111,110,0);
       let window_o8 = false;
         window_o8 = !window_o8;
         window_o8 = sourceu.endsWith(`${window_o8}`);
         window_o8 = !sourceu.startsWith(`${window_o8}`);
      for (let g = 0; g < 3; g++) {
         sourceu = `${((window_o8 ? 4 : 4) / (Math.max(sourceu.length, 5)))}`;
      }
         sourceu += `${((window_o8 ? 2 : 1))}`;
         sourceu += `${((window_o8 ? 1 : 4))}`;
      linkA = 63.76 < frame_uk;
      searchKeyword = search;
    }

    

   if (2 < alertl.length) {
      injuryw += `${main_jO.size}`;
   }
   if (!linkA) {
      alertl.push(main_jO.size / (Math.max(1, 7)));
   }
    

       let shrinki = String.fromCharCode(112,111,119,101,114,101,100,0);
       let libimagepipelineC = String.fromCharCode(116,101,115,116,99,111,110,102,105,103,0);
      let tramini8 = shrinki.length <= 5939437;
      do {
         shrinki = "2";
         if (tramini8) {
            break;
         }
      } while (tramini8 && (3 == shrinki.length && libimagepipelineC != String.fromCharCode(115,0)));
         libimagepipelineC += `${(libimagepipelineC == String.fromCharCode(74,0) ? libimagepipelineC.length : shrinki.length)}`;
      alertl = [1 << (Math.min(1, Math.abs(parseInt(`${frame_uk}`))))];
   for (let q = 0; q < 2; q++) {
       let settingG = String.fromCharCode(98,97,116,99,104,101,100,0);
       let analytic6 = String.fromCharCode(116,101,114,109,105,110,97,108,0);
       let areaN: Map<any, any> = new Map([[String.fromCharCode(115,101,114,118,101,114,115,0),336], [String.fromCharCode(99,111,108,108,97,103,101,0),388]]);
       let libavformatx = 3.0;
         areaN.set(settingG, settingG.length);
       let anythinkK = 1.0;
          let configureV = String.fromCharCode(104,95,57,57,95,116,97,107,101,0);
          let libswscaleY = String.fromCharCode(114,101,97,100,121,0);
         analytic6 = `${parseInt(`${libavformatx}`)}`;
         configureV = `${libswscaleY.length}`;
         libswscaleY += `${libswscaleY.length}`;
      if (2.71 <= (libavformatx * anythinkK)) {
          let neonb = String.fromCharCode(101,120,105,115,116,97,110,99,101,0);
          let moonZ = String.fromCharCode(99,117,100,97,0);
          let u_imagen: Map<any, any> = new Map([[String.fromCharCode(115,117,99,99,101,101,100,101,100,0),203], [String.fromCharCode(109,117,108,116,105,112,108,101,0),136], [String.fromCharCode(98,111,111,107,107,101,101,112,105,110,103,0),191]]);
          let chinasameb = String.fromCharCode(102,116,118,108,105,110,107,0);
          let linev = 2.0;
         anythinkK /= Math.max(parseInt(`${libavformatx}`), 4);
         neonb = `${parseInt(`${linev}`) * moonZ.length}`;
         moonZ = "2";
         u_imagen = new Map([[`${u_imagen.size}`, u_imagen.size]]);
         chinasameb += "3";
         linev += u_imagen.size + parseInt(`${linev}`);
      }
         areaN.set(analytic6, analytic6.length);
      for (let z = 0; z < 1; z++) {
         anythinkK *= areaN.size & 1;
      }
      if (3 > analytic6.length) {
         analytic6 = `${parseInt(`${anythinkK}`)}`;
      }
          let rinit_wi = String.fromCharCode(102,114,111,109,98,105,110,100,0);
          let bootsplash2 = String.fromCharCode(98,97,110,110,101,100,0);
         analytic6 += `${3 * bootsplash2.length}`;
         rinit_wi = `${rinit_wi.length >> (Math.min(4, rinit_wi.length))}`;
         bootsplash2 += `${rinit_wi.length | 2}`;
          let renewS = 3.0;
          let moduleK = false;
         libavformatx += parseFloat(`${settingG.length | 1}`);
         renewS -= parseInt(`${renewS}`) & 3;
         moduleK = 11.33 < renewS;
      while (analytic6.length >= parseInt(`${libavformatx}`)) {
          let whatsappH = 2.0;
          let long_n2 = 2;
          let macauE = 3.0;
         analytic6 += "1";
         whatsappH -= 3;
         long_n2 += long_n2 & parseInt(`${macauE}`);
         macauE /= Math.max(parseInt(`${macauE}`) | long_n2, 5);
         break;
      }
      while ((3 >> (Math.min(2, analytic6.length))) == 2) {
         areaN.set(`${libavformatx}`, parseInt(`${libavformatx}`));
         break;
      }
         libavformatx *= parseFloat(`${1 / (Math.max(10, settingG.length))}`);
      whiteY += "2";
   }
    

      main_jO.set(`${alertl.length}`, 2 - alertl.length);
   let downloadedS = main_jO.size >= 7924811;
   do {
      main_jO.set(whiteY, main_jO.size);
      if (downloadedS) {
         break;
      }
   } while (downloadedS && (!Array.from(main_jO.keys()).includes(`${frame_uk}`)));
    

   let settings0 = whiteY.length >= 6646004;
   do {
      whiteY = `${whiteY.length - 3}`;
      if (settings0) {
         break;
      }
   } while ((whiteY.length <= 1) && settings0);
      alertl.push(telemetryo.length * 1);

    

   for (let m = 0; m < 3; m++) {
       let navigationt = String.fromCharCode(111,114,105,101,110,116,0);
       let left8: Array<any> = [543, 656, 335];
       let bdxadsdkj: Array<any> = [882, 178, 325];
       let acceptedL = String.fromCharCode(109,112,101,103,97,117,100,105,111,100,101,99,116,97,98,0);
       let uimanagerW = String.fromCharCode(97,97,114,99,104,0);
       let libfollyN = String.fromCharCode(104,108,105,110,101,0);
       let hejiA = String.fromCharCode(116,109,105,120,0);
         left8.push(hejiA.length);
      let foregroundC = 8769690 <= bdxadsdkj.length;
      do {
          let readP = 0.0;
          let promotionA: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,111,115,101,105,0),244], [String.fromCharCode(115,116,111,112,101,100,0),446]]);
          let zoomv = String.fromCharCode(99,117,98,101,100,0);
          let banner_: Array<any> = [358, 466, 401];
         bdxadsdkj.push(2);
         readP /= Math.max(1, (parseFloat(`${zoomv == String.fromCharCode(117,0) ? banner_.length : zoomv.length}`)));
         promotionA = new Map([[`${promotionA.size}`, banner_.length ^ 1]]);
         if (foregroundC) {
            break;
         }
      } while ((2 >= (uimanagerW.length % 4)) && foregroundC);
         libfollyN += `${(String.fromCharCode(98,0) == libfollyN ? libfollyN.length : acceptedL.length)}`;
      let stationp = uimanagerW == String.fromCharCode(48,107,57,118,115,105,0);
      do {
          let libavcodecp = String.fromCharCode(114,97,100,98,0);
          let n_image2 = String.fromCharCode(109,105,103,114,97,116,105,110,103,0);
          let e_countM = String.fromCharCode(121,99,98,99,114,0);
          let liveG = 2.0;
         uimanagerW = `${e_countM.length | 2}`;
         libavcodecp += `${libavcodecp.length}`;
         n_image2 = `${libavcodecp.length}`;
         e_countM += `${parseInt(`${liveG}`)}`;
         liveG += parseInt(`${liveG}`);
         if (stationp) {
            break;
         }
      } while (stationp && ((left8.length | 4) >= 1 && 4 >= (uimanagerW.length | left8.length)));
         navigationt += "3";
         hejiA = `${bdxadsdkj.length}`;
      let playlistE = left8.length >= 6176461;
      do {
         left8 = [left8.length % (Math.max(1, 5))];
         if (playlistE) {
            break;
         }
      } while (playlistE && (4 < (uimanagerW.length >> (Math.min(Math.abs(2), 2))) || 2 < (2 >> (Math.min(5, uimanagerW.length)))));
      for (let v = 0; v < 2; v++) {
         hejiA = `${3 & acceptedL.length}`;
      }
      for (let q = 0; q < 3; q++) {
         hejiA = "2";
      }
         bdxadsdkj.push(bdxadsdkj.length);
          let scoreT = 3.0;
          let paginationz = 5.0;
          let shirtn = 5.0;
         hejiA = "3";
         scoreT += parseInt(`${paginationz}`);
         shirtn /= Math.max(parseInt(`${shirtn}`) * parseInt(`${scoreT}`), 2);
      while (libfollyN.length > hejiA.length) {
          let str4 = String.fromCharCode(113,100,101,108,116,97,0);
          let historyu = 2;
         libfollyN += `${historyu}`;
         str4 = `${str4.length + 2}`;
         historyu &= 3;
         break;
      }
       let utilsz = String.fromCharCode(100,101,115,114,111,121,0);
         acceptedL += `${2 | acceptedL.length}`;
      frame_uk += parseFloat(`${2 ^ alertl.length}`);
   }
   for (let s = 0; s < 3; s++) {
      main_jO = new Map([[`${main_jO.size}`, 2 & main_jO.size]]);
   }
    

      injuryw = `${alertl.length << (Math.min(whiteY.length, 2))}`;
   while (injuryw.includes(`${whiteY.length}`)) {
      injuryw = `${((linkA ? 2 : 4))}`;
      break;
   }
    

   while (whiteY.endsWith(telemetryo)) {
      telemetryo = `${(String.fromCharCode(101,0) == telemetryo ? telemetryo.length : (linkA ? 3 : 3))}`;
      break;
   }
       let rewindz = 3;
       let descE = false;
       let miniq: Map<any, any> = new Map([[String.fromCharCode(114,101,99,117,114,115,105,111,110,0),778], [String.fromCharCode(115,104,97,100,101,114,115,0),888], [String.fromCharCode(112,114,111,103,114,101,115,115,0),248]]);
          let disconnectedp: Array<any> = [String.fromCharCode(98,97,110,100,105,110,103,0), String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,0), String.fromCharCode(115,117,98,115,97,109,112,108,105,110,103,0)];
          let mbsplashg = true;
          let unreadL = false;
         rewindz &= 1 ^ rewindz;
         disconnectedp = [3 & disconnectedp.length];
         mbsplashg = disconnectedp.includes(mbsplashg);
         unreadL = disconnectedp.length <= 53;
      let termsJ = descE ? !descE : descE;
      do {
          let robotoj = false;
          let runtime8 = String.fromCharCode(105,110,104,105,98,105,116,0);
          let bellP = String.fromCharCode(97,108,109,111,115,116,0);
          let fastforwarde = 5.0;
          let libreactnativeblobS = String.fromCharCode(111,97,117,116,104,0);
         descE = libreactnativeblobS.includes(`${descE}`);
         robotoj = bellP.endsWith(`${fastforwarde}`);
         runtime8 = `${(bellP.length * (robotoj ? 5 : 1))}`;
         fastforwarde *= bellP.length;
         libreactnativeblobS = `${parseInt(`${fastforwarde}`) + 2}`;
         if (termsJ) {
            break;
         }
      } while (((1 >> (Math.min(1, Math.abs(rewindz)))) >= 5 || rewindz >= 1) && termsJ);
      while ((rewindz & 1) == 2 && rewindz == 1) {
          let mountingw = 4.0;
          let adultv = 0;
          let moduleb = 2.0;
          let leaguee = String.fromCharCode(114,101,99,111,118,101,114,97,98,108,101,0);
          let basketball3 = 2.0;
         descE = null == miniq.get(`${descE}`);
         mountingw += parseFloat(`${leaguee.length >> (Math.min(4, Math.abs(parseInt(`${basketball3}`))))}`);
         adultv ^= parseInt(`${moduleb}`) % 3;
         moduleb /= Math.max(parseInt(`${mountingw}`) * 3, 4);
         leaguee += `${parseInt(`${mountingw}`) ^ parseInt(`${moduleb}`)}`;
         basketball3 *= parseInt(`${mountingw}`) << (Math.min(2, Math.abs(adultv)));
         break;
      }
         miniq.set(`${descE}`, (miniq.size * (descE ? 3 : 2)));
         descE = null != miniq.get(`${rewindz}`);
         rewindz &= 3;
          let zoom9 = String.fromCharCode(109,98,112,97,105,114,0);
         rewindz += 3;
         zoom9 = `${(String.fromCharCode(119,0) == zoom9 ? zoom9.length : zoom9.length)}`;
          let diceL: Map<any, any> = new Map([[String.fromCharCode(114,101,99,116,97,110,103,108,101,0),447], [String.fromCharCode(108,105,98,120,0),283], [String.fromCharCode(116,114,117,110,99,97,116,101,0),164]]);
          let minivodG = 3.0;
          let topon7 = String.fromCharCode(112,114,111,102,105,108,101,115,0);
         descE = topon7 == String.fromCharCode(84,0) || diceL.size == 3;
         diceL.set(`${minivodG}`, parseInt(`${minivodG}`) * parseInt(`${minivodG}`));
       let select3 = 0.0;
       let langkeye = 4.0;
      linkA = miniq.size >= 77 && !descE;
    

   for (let t = 0; t < 1; t++) {
      linkA = String.fromCharCode(110,0) == react9 || injuryw.length > 28;
   }
      injuryw = `${main_jO.size}`;
    

      frame_uk *= parseFloat(`${3 & alertl.length}`);
      whiteY += `${alertl.length * 2}`;
    

   if ((1 | main_jO.size) >= 2) {
      linkA = !telemetryo.endsWith(`${linkA}`);
   }
      injuryw = `${(String.fromCharCode(70,0) == react9 ? telemetryo.length : react9.length)}`;
    

       let dragz = String.fromCharCode(109,101,109,120,0);
       let changec = String.fromCharCode(114,95,56,48,95,100,120,116,121,115,0);
      while (changec != String.fromCharCode(51,0) || 1 >= dragz.length) {
         dragz += `${dragz.length + changec.length}`;
         break;
      }
         dragz += "1";
          let invite4 = String.fromCharCode(112,108,97,99,101,115,0);
         dragz += `${(String.fromCharCode(81,0) == dragz ? dragz.length : invite4.length)}`;
         dragz += `${changec.length}`;
      while (dragz.length >= 5) {
          let libimagepipeline8: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,97,108,108,0),true ], [String.fromCharCode(99,111,110,103,101,115,116,105,111,110,0),true ], [String.fromCharCode(108,101,97,115,101,0),true ]]);
          let graphicsU: Array<any> = [346, 194, 998];
          let runtimeA = 5;
         dragz += `${runtimeA * dragz.length}`;
         libimagepipeline8 = new Map([[`${libimagepipeline8.size}`, 3 + libimagepipeline8.size]]);
         graphicsU = [libimagepipeline8.size / (Math.max(5, graphicsU.length))];
         runtimeA <<= Math.min(2, Math.abs(libimagepipeline8.size));
         break;
      }
      if (dragz != String.fromCharCode(48,0)) {
         changec += `${changec.length}`;
      }
      injuryw += `${parseInt(`${frame_uk}`) >> (Math.min(injuryw.length, 2))}`;
   while (whiteY == injuryw) {
      injuryw = "3";
      break;
   }
    

       let bannerf = 3;
      if (4 < (5 & bannerf) || 3 < (5 & bannerf)) {
         bannerf <<= Math.min(2, Math.abs(bannerf));
      }
      let mailF = 9738857 >= bannerf;
      do {
          let klevina: Map<any, any> = new Map([[String.fromCharCode(116,105,108,108,0),String.fromCharCode(109,111,100,97,108,0)], [String.fromCharCode(100,105,103,101,115,116,98,121,110,105,100,0),String.fromCharCode(115,117,112,112,114,101,115,115,105,111,110,0)], [String.fromCharCode(114,101,115,117,109,101,0),String.fromCharCode(115,105,103,110,97,108,105,110,103,0)]]);
          let twitterP = 0.0;
          let lnewinterstitialq: Array<any> = [String.fromCharCode(97,108,115,97,115,121,109,98,111,108,116,97,98,108,101,0), String.fromCharCode(115,116,115,100,0)];
          let sinaV = String.fromCharCode(105,110,118,105,116,97,116,105,111,110,0);
         bannerf *= sinaV.length;
         klevina.set(`${twitterP}`, 1 | parseInt(`${twitterP}`));
         lnewinterstitialq = [3 / (Math.max(5, parseInt(`${twitterP}`)))];
         sinaV += `${1 ^ lnewinterstitialq.length}`;
         if (mailF) {
            break;
         }
      } while ((5 < bannerf) && mailF);
      let chatv = bannerf <= 9768110;
      do {
         bannerf &= 1;
         if (chatv) {
            break;
         }
      } while (((1 | bannerf) >= 1 || (1 | bannerf) >= 5) && chatv);
      telemetryo = "1";
      telemetryo = "1";
    

   let ksadU = linkA ? !linkA : linkA;
   do {
       let directR = String.fromCharCode(116,119,105,108,105,103,104,116,0);
       let clubI = 0.0;
       let crownD = String.fromCharCode(98,117,105,108,100,101,114,0);
       let schedulerJ = true;
          let libpangleflippedG = String.fromCharCode(115,97,109,112,108,101,99,112,121,0);
          let package_rM = 0.0;
          let libavformat2 = 0;
         schedulerJ = 35.68 < clubI;
         libpangleflippedG += `${parseInt(`${package_rM}`)}`;
         package_rM += 3;
         libavformat2 ^= parseInt(`${package_rM}`) >> (Math.min(5, Math.abs(1)));
      while (3 >= (directR.length * parseInt(`${clubI}`)) && (clubI * 5.20) >= 5.65) {
         clubI += ((schedulerJ ? 1 : 1));
         break;
      }
         schedulerJ = String.fromCharCode(55,0) == crownD;
      while (!crownD.endsWith(`${clubI}`)) {
          let sportsc: Map<any, any> = new Map([[String.fromCharCode(108,105,109,105,116,115,0),String.fromCharCode(112,116,115,101,115,0)], [String.fromCharCode(119,101,98,112,97,103,101,0),String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,115,0)]]);
          let libreactK = 1;
          let grayr = String.fromCharCode(97,109,114,119,98,100,101,99,0);
         crownD = `${((schedulerJ ? 4 : 2))}`;
         sportsc.set(`${libreactK}`, sportsc.size & libreactK);
         grayr += "3";
         break;
      }
         schedulerJ = crownD == directR;
         clubI /= Math.max(3 << (Math.min(3, Math.abs(parseInt(`${clubI}`)))), 2);
          let entryn = String.fromCharCode(110,116,111,108,111,103,121,0);
         directR += "3";
         entryn = `${entryn.length >> (Math.min(entryn.length, 4))}`;
         crownD = `${2 & crownD.length}`;
      for (let b = 0; b < 3; b++) {
         crownD += `${parseInt(`${clubI}`) + 3}`;
      }
         clubI += directR.length;
         crownD = "2";
          let hovera = 0;
          let nativep = String.fromCharCode(116,105,109,101,105,110,102,111,0);
         schedulerJ = 42.37 <= clubI && schedulerJ;
         hovera += 2;
         nativep += "3";
      linkA = 58.55 <= clubI;
      if (ksadU) {
         break;
      }
   } while ((linkA) && ksadU);
   while (telemetryo == String.fromCharCode(113,0) && injuryw != String.fromCharCode(89,0)) {
      injuryw = `${injuryw.length | 1}`;
      break;
   }
    

   for (let q = 0; q < 2; q++) {
      linkA = 94 > main_jO.size;
   }
   let layoutJ = 8805977.0 <= frame_uk;
   do {
      frame_uk /= Math.max(4, parseFloat(`${1}`));
      if (layoutJ) {
         break;
      }
   } while (layoutJ && ((frame_uk + 4.6) > 3.32 && (frame_uk + parseFloat(`${whiteY.length}`)) > 4.6));

   if (searchKeyword.trim().length <= 0) {
      yys_StatsForm.showToast('请输入搜索内容！');
      return;
   }
   
    fetchData(searchKeyword, true);
    dispatch(addSearchHistory(searchKeyword));
    setShowResults(!showResults);
  };

  const clearHistory = useCallback(() => {
       let sportu = 2;
    let submitg = String.fromCharCode(104,101,120,98,121,116,101,0);
    let loadingp = String.fromCharCode(97,110,99,101,115,116,114,121,95,102,95,52,0);
    let debugK = String.fromCharCode(115,109,112,116,101,98,97,114,115,0);
    let huaweiT = 4.0;
    let tramini7: Array<any> = [668, 754];
    let streamingO = 5;
    let settingse = false;
    let alert0 = true;
    let themeS = 3;
    let indexG: Map<any, any> = new Map([[String.fromCharCode(119,105,110,99,101,0),699], [String.fromCharCode(116,114,117,110,107,0),728], [String.fromCharCode(99,97,114,114,105,101,114,0),30]]);
    let confirmationW = 1.0;
    let headerS = 4.0;
    let trophyw = String.fromCharCode(108,112,99,109,0);
    let update_qq = String.fromCharCode(114,101,115,104,117,102,102,108,101,0);
      loadingp += `${(sportu + (alert0 ? 1 : 3))}`;
   let championY = 6530798.0 <= huaweiT;
   do {
       let eventF = String.fromCharCode(112,114,110,103,0);
       let networkM = String.fromCharCode(97,110,103,108,101,100,0);
       let whatsappb = 3.0;
       let injuryM = String.fromCharCode(111,114,105,101,110,116,97,116,105,111,110,115,0);
       let pressureA: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,111,116,97,116,101,0),310], [String.fromCharCode(110,112,97,116,99,104,101,115,0),340], [String.fromCharCode(108,111,115,115,121,0),674]]);
         eventF += `${networkM.length * eventF.length}`;
         eventF += `${1 + networkM.length}`;
      while (1 == (injuryM.length ^ 1) || (1 ^ injuryM.length) == 1) {
          let transferQ = String.fromCharCode(111,102,102,101,115,116,0);
          let customF = String.fromCharCode(104,97,100,100,0);
          let fieldz = 5.0;
          let combinedd = 1.0;
         injuryM = `${parseInt(`${fieldz}`) / (Math.max(1, 7))}`;
         transferQ = `${parseInt(`${combinedd}`)}`;
         customF += `${(String.fromCharCode(100,0) == transferQ ? transferQ.length : customF.length)}`;
         fieldz /= Math.max(5, transferQ.length & 3);
         combinedd /= Math.max(1, parseFloat(`${transferQ.length}`));
         break;
      }
      for (let i = 0; i < 2; i++) {
         pressureA.set(eventF, eventF.length + 2);
      }
      while (networkM.endsWith(eventF)) {
         eventF = `${networkM.length << (Math.min(5, Math.abs(pressureA.size)))}`;
         break;
      }
         pressureA = new Map([[networkM, eventF.length]]);
      for (let j = 0; j < 2; j++) {
          let configureo = String.fromCharCode(114,95,54,49,95,105,110,116,101,114,115,101,99,116,105,111,110,0);
          let orientationo = 0.0;
          let resendS = String.fromCharCode(98,111,117,110,100,0);
          let mapbufferP = true;
         networkM += `${((mapbufferP ? 3 : 5))}`;
         configureo += `${parseInt(`${orientationo}`)}`;
         orientationo /= Math.max(3, resendS.length << (Math.min(1, Math.abs(parseInt(`${orientationo}`)))));
         resendS = `${parseInt(`${orientationo}`)}`;
         mapbufferP = orientationo < 99.52;
      }
       let plashC = 0.0;
       let topicy = 4.0;
          let resendo = 0.0;
          let goalp = false;
          let transferh = String.fromCharCode(100,105,114,101,99,116,111,114,121,0);
         pressureA = new Map([[`${resendo}`, 1 << (Math.min(Math.abs(parseInt(`${resendo}`)), 4))]]);
         goalp = (92 < (transferh.length ^ (goalp ? transferh.length : 92)));
      if (1 < (pressureA.size | 2)) {
         whatsappb /= Math.max(parseInt(`${whatsappb}`), 2);
      }
       let klevinp: Array<any> = [String.fromCharCode(102,108,101,120,102,101,99,0), String.fromCharCode(98,114,101,97,107,112,111,105,110,116,0), String.fromCharCode(105,95,50,56,0)];
       let crossT: Array<any> = [238, 890];
         injuryM = `${crossT.length + injuryM.length}`;
         topicy /= Math.max(5, parseFloat(`${parseInt(`${whatsappb}`) - parseInt(`${topicy}`)}`));
          let bootsplashi = String.fromCharCode(109,97,105,108,99,104,105,109,112,0);
         whatsappb += bootsplashi.length;
      let m_centerm = injuryM == String.fromCharCode(113,51,118,50,0);
      do {
          let neong = String.fromCharCode(108,97,117,110,99,104,105,110,103,0);
          let trophyc = String.fromCharCode(120,118,105,100,105,100,99,116,0);
          let untickX = 0.0;
          let connection5 = String.fromCharCode(116,117,114,98,111,106,112,101,103,0);
         injuryM += `${parseInt(`${untickX}`)}`;
         neong = `${neong.length << (Math.min(Math.abs(3), 1))}`;
         trophyc = "3";
         untickX += parseFloat(`${trophyc.length}`);
         connection5 += `${1 - neong.length}`;
         if (m_centerm) {
            break;
         }
      } while ((2 < (klevinp.length ^ 4)) && m_centerm);
      huaweiT /= Math.max(1 * parseInt(`${huaweiT}`), 1);
      if (championY) {
         break;
      }
   } while ((parseInt(`${huaweiT}`) <= tramini7.length) && championY);
   if (1 <= (3 >> (Math.min(1, debugK.length))) && 2 <= (3 ^ debugK.length)) {
      huaweiT -= ((settingse ? 3 : 2) << (Math.min(Math.abs(3), 1)));
   }
   for (let r = 0; r < 1; r++) {
       let star2 = String.fromCharCode(114,101,116,114,121,0);
       let nativeexQ: Array<any> = [436, 785, 717];
          let long_yfr = 3.0;
         nativeexQ = [2 / (Math.max(8, star2.length))];
         long_yfr -= parseFloat(`${parseInt(`${long_yfr}`) & 1}`);
          let fillC = String.fromCharCode(115,101,97,114,99,104,98,97,114,0);
         nativeexQ = [fillC.length >> (Math.min(4, nativeexQ.length))];
         nativeexQ = [star2.length >> (Math.min(Math.abs(2), 3))];
      let latn8 = 8429710 >= star2.length;
      do {
         star2 += `${nativeexQ.length}`;
         if (latn8) {
            break;
         }
      } while ((4 >= (star2.length * 5)) && latn8);
         nativeexQ.push(nativeexQ.length - 3);
      while (star2.startsWith(`${nativeexQ.length}`)) {
         star2 += `${nativeexQ.length + star2.length}`;
         break;
      }
      streamingO &= ((alert0 ? 1 : 2) ^ 1);
   }
   while (themeS < 3) {
       let zoomV = 1;
       let historyF = String.fromCharCode(116,114,101,110,100,108,105,110,101,0);
       let textinputd = false;
      for (let w = 0; w < 3; w++) {
         historyF += `${zoomV * 2}`;
      }
          let time__U = String.fromCharCode(109,105,110,113,0);
          let scoreg = 0;
         textinputd = String.fromCharCode(106,0) == historyF;
         time__U += `${scoreg}`;
         scoreg <<= Math.min(Math.abs((String.fromCharCode(110,0) == time__U ? time__U.length : scoreg)), 1);
      let modelsw = textinputd ? !textinputd : textinputd;
      do {
          let specS: Array<any> = [String.fromCharCode(98,108,111,99,107,99,104,97,105,110,115,0), String.fromCharCode(114,101,99,111,114,100,105,110,103,99,111,110,110,0), String.fromCharCode(97,116,116,114,98,117,116,101,0)];
          let commonY: Map<any, any> = new Map([[String.fromCharCode(115,116,111,114,97,103,101,115,0),775], [String.fromCharCode(103,100,105,103,114,97,98,0),440], [String.fromCharCode(110,111,109,105,110,97,116,101,0),708]]);
         textinputd = (specS.length | zoomV) > 15;
         specS.push(2 + commonY.size);
         commonY = new Map([[`${commonY.size}`, 1]]);
         if (modelsw) {
            break;
         }
      } while ((1 == (3 * zoomV)) && modelsw);
          let favicon0 = 0.0;
          let stats7 = String.fromCharCode(97,99,117,116,111,102,102,95,52,95,49,51,0);
          let whatsappi = 0;
         historyF = `${(historyF == String.fromCharCode(50,0) ? historyF.length : stats7.length)}`;
         favicon0 += 3 << (Math.min(Math.abs(parseInt(`${favicon0}`)), 3));
         stats7 = "1";
         whatsappi += 1 | parseInt(`${favicon0}`);
          let halfH = String.fromCharCode(114,110,110,111,105,115,101,0);
          let downloadingJ = String.fromCharCode(114,101,112,114,101,115,101,110,116,115,0);
         historyF = `${(historyF == String.fromCharCode(103,0) ? historyF.length : zoomV)}`;
         halfH += `${downloadingJ.length}`;
         downloadingJ += `${halfH.length ^ downloadingJ.length}`;
      while (!textinputd) {
          let loginb = String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,0);
          let windx = true;
         textinputd = (windx ? !textinputd : !windx);
         loginb = "2";
         break;
      }
      for (let t = 0; t < 2; t++) {
         historyF = `${(String.fromCharCode(104,0) == historyF ? (textinputd ? 2 : 3) : historyF.length)}`;
      }
          let playercommonx = String.fromCharCode(98,117,116,116,101,114,102,108,105,101,115,0);
          let bannert = 3;
         textinputd = String.fromCharCode(113,0) == playercommonx;
         playercommonx = "1";
         bannert &= 3;
          let source_ = 1;
          let incidentp: Map<any, any> = new Map([[String.fromCharCode(102,97,105,108,101,100,0),373], [String.fromCharCode(114,117,108,101,115,0),79], [String.fromCharCode(112,101,114,105,111,100,105,99,0),539]]);
         zoomV -= zoomV >> (Math.min(4, Math.abs(source_)));
         source_ |= 2;
         incidentp.set(`${incidentp.size}`, incidentp.size);
      themeS %= Math.max(debugK.length, 3);
      break;
   }
   while (4 <= (themeS - 3)) {
      themeS |= loadingp.length;
      break;
   }
      themeS %= Math.max(5, 2 * themeS);
      submitg = `${parseInt(`${huaweiT}`)}`;
      submitg += `${sportu & 3}`;
   for (let d = 0; d < 1; d++) {
      themeS %= Math.max(sportu / 2, 3);
   }
       let manifestQ: Map<any, any> = new Map([[String.fromCharCode(105,99,111,110,0),false ], [String.fromCharCode(105,110,105,116,105,97,108,0),false ]]);
      for (let n = 0; n < 1; n++) {
          let libruntimeexecutori: Map<any, any> = new Map([[String.fromCharCode(109,111,100,117,108,101,115,0),254], [String.fromCharCode(113,100,114,97,119,0),353]]);
         manifestQ.set(`${libruntimeexecutori.size}`, 1 * manifestQ.size);
      }
         manifestQ = new Map([[`${manifestQ.size}`, manifestQ.size / 3]]);
          let klevinV = 1.0;
         manifestQ = new Map([[`${manifestQ.size}`, parseInt(`${klevinV}`) >> (Math.min(Math.abs(2), 5))]]);
      debugK += `${parseInt(`${huaweiT}`) % (Math.max(3, 1))}`;
      tramini7 = [1];
      loadingp += `${(debugK == String.fromCharCode(105,0) ? debugK.length : loadingp.length)}`;
   if (3 > (loadingp.length - themeS) && (themeS - loadingp.length) > 3) {
       let googlex: Array<any> = [464, 361];
       let contextk = String.fromCharCode(100,101,116,97,105,108,101,100,0);
       let dropdownj: Map<any, any> = new Map([[String.fromCharCode(112,105,112,101,108,111,115,115,0),626], [String.fromCharCode(117,110,102,101,116,99,104,0),474]]);
       let filedL = String.fromCharCode(100,114,111,112,112,101,114,0);
       let libflipperS = 5.0;
       let suggestionx = 1.0;
       let regengL = String.fromCharCode(109,112,101,103,100,97,116,97,0);
       let libswresampley = 2;
       let classesq: Map<any, any> = new Map([[String.fromCharCode(105,119,104,116,120,0),947], [String.fromCharCode(99,104,114,111,109,105,110,97,110,99,101,0),375]]);
       let imagemanager8 = false;
       let debugK8 = false;
          let analyticsS: Array<any> = [143, 136, 627];
         googlex = [3 * regengL.length];
         analyticsS.push(3);
      for (let r = 0; r < 2; r++) {
         contextk += `${1 ^ googlex.length}`;
      }
      if ((classesq.size / 3) <= 1 && (classesq.size / (Math.max(3, libswresampley))) <= 3) {
          let roomA = String.fromCharCode(105,112,109,111,118,105,101,0);
          let description_yL = false;
         classesq.set(`${description_yL}`, ((description_yL ? 2 : 4) << (Math.min(Math.abs(classesq.size), 5))));
         roomA += `${roomA.length}`;
      }
         suggestionx *= parseFloat(`${dropdownj.size ^ 2}`);
      while (1 < (1 & regengL.length) && 1 < (regengL.length - 1)) {
          let placeholderM = true;
          let memberh = 2;
         regengL += `${parseInt(`${libflipperS}`) | memberh}`;
         placeholderM = (placeholderM ? placeholderM : placeholderM);
         memberh /= Math.max(3, 3);
         break;
      }
      while (imagemanager8 && regengL.length < 5) {
         regengL += `${regengL.length + 1}`;
         break;
      }
         classesq.set(`${libflipperS}`, 1 & googlex.length);
      themeS <<= Math.min(4, Math.abs(2 % (Math.max(5, contextk.length))));
   }
      streamingO -= debugK.length;
   if ((submitg.length & 2) >= 2 && 4 >= (submitg.length & 2)) {
      submitg += `${2 + parseInt(`${huaweiT}`)}`;
   }
      tramini7.push(loadingp.length / (Math.max(3, 7)));
      sportu -= indexG.size;
       let actionsz = String.fromCharCode(99,111,114,100,122,0);
       let langA: Array<any> = [String.fromCharCode(100,114,97,119,108,105,110,101,0), String.fromCharCode(116,122,102,105,108,101,0)];
         langA.push(langA.length);
          let strings_ = String.fromCharCode(105,100,108,101,0);
          let homeI = String.fromCharCode(115,105,110,107,0);
          let bdxadsdk0 = String.fromCharCode(118,97,116,97,114,0);
         langA.push(3 >> (Math.min(5, actionsz.length)));
         strings_ += `${1 | homeI.length}`;
         homeI += `${3 & bdxadsdk0.length}`;
         bdxadsdk0 += `${(String.fromCharCode(57,0) == homeI ? homeI.length : strings_.length)}`;
          let u_titley = String.fromCharCode(115,119,105,114,108,95,116,95,52,50,0);
         actionsz = `${langA.length - 2}`;
         u_titley = `${1 | u_titley.length}`;
         langA = [1 | langA.length];
      if ((3 ^ actionsz.length) <= 5 || (langA.length ^ actionsz.length) <= 3) {
         actionsz = `${actionsz.length & langA.length}`;
      }
         actionsz = "2";
      submitg += `${actionsz.length}`;
      debugK = `${((settingse ? 4 : 4))}`;
   for (let k = 0; k < 1; k++) {
      confirmationW -= parseFloat(`${submitg.length & indexG.size}`);
   }
   if ((3 & streamingO) == 5 || (3 & indexG.size) == 1) {
      streamingO ^= (String.fromCharCode(97,0) == debugK ? tramini7.length : debugK.length);
   }

    dispatch(clearSearchHistory());
  }, []);

  
  const onClickSearchResult = useCallback(() => {
       let catalogl = String.fromCharCode(98,117,102,102,101,114,115,105,110,107,0);
    let moditya = String.fromCharCode(121,97,100,105,102,0);
    let mailN = 3;
    let teamP: Map<any, any> = new Map([[String.fromCharCode(103,95,53,52,95,115,97,118,101,112,111,105,110,116,115,0),true ], [String.fromCharCode(108,95,49,95,97,115,102,99,114,121,112,116,0),true ]]);
    let successN: Map<any, any> = new Map([[String.fromCharCode(98,114,111,97,100,99,97,115,116,101,114,0),true ], [String.fromCharCode(105,115,111,0),false ], [String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,0),false ]]);
    let ping4 = String.fromCharCode(99,111,110,116,97,105,110,97,98,108,101,0);
    let catalog5 = 2;
    let schedulerK: Map<any, any> = new Map([[String.fromCharCode(100,110,120,104,100,0),132], [String.fromCharCode(114,101,102,101,114,101,110,99,101,0),351]]);
    let collection6 = String.fromCharCode(102,95,55,50,95,122,111,110,101,115,0);
    let debugD = 2.0;
    let nativemoduleX = 1;
    let invited = false;
    let actionR = String.fromCharCode(101,98,117,114,0);
    let historyf = 5.0;
    let mutedh = true;
    let gradlek = 3.0;
    let miniE = 4;
   while (moditya.includes(`${debugD}`)) {
      moditya += "1";
      break;
   }
   if (5 > (catalogl.length ^ 4)) {
      catalogl = `${((invited ? 1 : 4) ^ 2)}`;
   }
      invited = String.fromCharCode(86,0) == collection6;
   if (2 >= (successN.size & 2) || 1 >= (successN.size & 2)) {
       let reward6 = 3.0;
       let blackK = String.fromCharCode(114,101,99,111,110,102,105,103,117,114,101,0);
       let matha: Map<any, any> = new Map([[String.fromCharCode(114,103,98,116,101,115,116,0),true ], [String.fromCharCode(98,111,117,110,100,105,110,103,0),false ], [String.fromCharCode(115,101,97,114,99,104,0),true ]]);
      let launcherd = String.fromCharCode(108,102,51,118,114,0) == blackK;
      do {
         blackK += "1";
         if (launcherd) {
            break;
         }
      } while (launcherd && ((blackK.length * parseInt(`${reward6}`)) >= 4 || 4.84 >= (3.62 * reward6)));
         matha.set(`${blackK}`, matha.size);
       let attributedstringU = String.fromCharCode(98,108,117,114,97,121,0);
         matha.set(`${attributedstringU}`, attributedstringU.length);
         matha.set(`${blackK}`, blackK.length);
       let dialogu = 5.0;
       let unimplementedvieww = 2.0;
         matha.set(`${dialogu}`, 2);
         dialogu += matha.size;
      for (let h = 0; h < 1; h++) {
         reward6 -= (String.fromCharCode(95,0) == attributedstringU ? attributedstringU.length : matha.size);
      }
      catalogl = `${(String.fromCharCode(48,0) == collection6 ? collection6.length : blackK.length)}`;
   }
   while (1 == (collection6.length * 2)) {
      debugD += parseFloat(`${catalogl.length | moditya.length}`);
      break;
   }
   while (ping4.startsWith(moditya)) {
      ping4 += `${(catalogl == String.fromCharCode(80,0) ? catalogl.length : successN.size)}`;
      break;
   }
   let collectionp = debugD <= 6096404.0;
   do {
       let sharedS = true;
       let stylex: Map<any, any> = new Map([[String.fromCharCode(98,95,57,55,95,100,111,119,110,108,111,97,100,105,110,103,0),false ], [String.fromCharCode(115,117,98,115,121,115,116,101,109,0),false ]]);
         stylex.set(`${sharedS}`, stylex.size);
          let settingO = true;
         stylex.set(`${sharedS}`, 2);
         settingO = !settingO;
          let redirectQ: Array<any> = [287, 506, 576];
         sharedS = stylex.size <= 41;
         redirectQ.push(redirectQ.length - redirectQ.length);
      let u_positionD = sharedS ? !sharedS : sharedS;
      do {
         sharedS = stylex.size <= 61 && sharedS;
         if (u_positionD) {
            break;
         }
      } while ((3 > (stylex.size - 4) && stylex.size > 4) && u_positionD);
         stylex = new Map([[`${stylex.size}`, (2 + (sharedS ? 2 : 1))]]);
      for (let c = 0; c < 3; c++) {
          let notificationt = 1;
          let d_managerl = true;
          let profilek: Array<any> = [862, 374];
          let castu: Array<any> = [795, 298];
         sharedS = stylex.size == 42;
         notificationt /= Math.max(4, 2);
         d_managerl = !d_managerl && notificationt == 6;
         profilek.push(profilek.length);
         castu.push(3);
      }
      debugD -= parseFloat(`${nativemoduleX}`);
      if (collectionp) {
         break;
      }
   } while ((1 < successN.size) && collectionp);
      debugD += parseFloat(`${moditya.length}`);
   for (let e = 0; e < 3; e++) {
      schedulerK = new Map([[`${successN.size}`, (successN.size / (Math.max(10, (invited ? 4 : 3))))]]);
   }
   if (moditya.endsWith(`${nativemoduleX}`)) {
      moditya = `${mailN % (Math.max(5, collection6.length))}`;
   }
       let championk = 3;
         championk += championk % 2;
         championk &= championk;
          let default_e0: Map<any, any> = new Map([[String.fromCharCode(97,115,105,110,107,0),false ], [String.fromCharCode(113,100,109,100,97,116,97,0),true ]]);
         championk %= Math.max(3, 3 & default_e0.size);
      nativemoduleX <<= Math.min(5, Math.abs(3 & schedulerK.size));
       let terms2 = 4.0;
      if (terms2 > 3.72) {
         terms2 /= Math.max(3, parseInt(`${terms2}`) % 2);
      }
      for (let i = 0; i < 2; i++) {
         terms2 -= parseInt(`${terms2}`);
      }
      while (1.51 > (terms2 - terms2) && 1.51 > (terms2 - terms2)) {
         terms2 += parseInt(`${terms2}`);
         break;
      }
      collection6 = `${2 * teamP.size}`;
      catalogl = `${(ping4.length % (Math.max(6, (invited ? 4 : 3))))}`;
   let promotionU = debugD <= 6745082.0;
   do {
      debugD -= (parseFloat(`${(invited ? 3 : 3) << (Math.min(Math.abs(nativemoduleX), 3))}`));
      if (promotionU) {
         break;
      }
   } while ((1.31 <= debugD) && promotionU);
       let manifestL = 4;
      for (let a = 0; a < 3; a++) {
          let libyogaF = 3.0;
          let libmapbufferjniz: Map<any, any> = new Map([[String.fromCharCode(100,101,115,116,114,111,121,105,110,103,0),295], [String.fromCharCode(110,111,109,101,109,95,99,95,52,53,0),83], [String.fromCharCode(103,95,51,56,95,114,117,110,116,105,109,101,0),882]]);
          let templateprocessorb = 5;
         manifestL += parseInt(`${libyogaF}`);
         libyogaF *= 2 | templateprocessorb;
         libmapbufferjniz.set(`${templateprocessorb}`, 2 - libmapbufferjniz.size);
      }
      for (let g = 0; g < 3; g++) {
          let type_cp9 = String.fromCharCode(115,99,114,101,101,110,112,114,101,115,115,111,0);
          let checkboxc = String.fromCharCode(114,101,99,118,102,114,111,109,0);
         manifestL &= type_cp9.length ^ manifestL;
         type_cp9 += `${checkboxc.length}`;
         checkboxc = `${checkboxc.length - checkboxc.length}`;
      }
      while ((manifestL % (Math.max(manifestL, 4))) > 3) {
         manifestL <<= Math.min(1, Math.abs(manifestL & 2));
         break;
      }
      catalog5 &= 3 / (Math.max(10, ping4.length));
   if (actionR.length <= 4) {
       let huaweiA = 2;
       let imagemanagerE = 2;
       let teamo = String.fromCharCode(100,101,102,114,97,103,109,101,110,116,0);
       let routerI = false;
       let middlef: Array<any> = [879, 876, 706];
      let popupm = middlef.length <= 9677904;
      do {
         middlef.push(huaweiA);
         if (popupm) {
            break;
         }
      } while ((5 > (2 + middlef.length) && routerI) && popupm);
       let themep = String.fromCharCode(105,110,99,108,117,100,101,0);
       let renewc = String.fromCharCode(100,99,98,108,111,99,107,0);
         teamo = `${themep.length * 1}`;
      for (let n = 0; n < 1; n++) {
         imagemanagerE >>= Math.min(5, Math.abs(huaweiA % (Math.max(renewc.length, 7))));
      }
         huaweiA &= 1 & imagemanagerE;
         routerI = middlef.includes(routerI);
       let auto_qv8 = 5.0;
         routerI = huaweiA <= 37;
      while (!routerI) {
         routerI = (((routerI ? 11 : middlef.length) | middlef.length) >= 11);
         break;
      }
         imagemanagerE /= Math.max(3, themep.length);
       let leakchecker8 = 2;
      while (5 == huaweiA) {
          let gradleH = 5.0;
          let dangerN = true;
          let textinput3 = 4.0;
          let orangeU = 4;
          let privacyj = 1.0;
         routerI = themep.length > orangeU;
         gradleH -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${textinput3}`)), 1))}`);
         dangerN = privacyj < 88.45 || !dangerN;
         textinput3 -= (parseFloat(`${(dangerN ? 3 : 2) + parseInt(`${textinput3}`)}`));
         orangeU -= 1 / (Math.max(parseInt(`${privacyj}`), 5));
         break;
      }
         leakchecker8 += 3 - huaweiA;
         teamo += `${themep.length & teamo.length}`;
      for (let o = 0; o < 1; o++) {
         routerI = leakchecker8 > 34;
      }
      collection6 = `${catalogl.length}`;
   }
   if (!Array.from(successN.keys()).includes(`${mailN}`)) {
      mailN |= collection6.length >> (Math.min(ping4.length, 4));
   }
   while ((teamP.size % (Math.max(9, schedulerK.size))) == 4) {
       let expand2 = 5.0;
       let h_unlockb = String.fromCharCode(110,111,110,100,99,0);
          let nativemodule7 = String.fromCharCode(102,114,97,109,101,98,117,102,102,101,114,115,0);
         expand2 /= Math.max(5, nativemodule7.length);
          let sell6 = 3.0;
         h_unlockb = `${parseInt(`${expand2}`) << (Math.min(h_unlockb.length, 4))}`;
         sell6 /= Math.max(parseFloat(`${parseInt(`${sell6}`) << (Math.min(5, Math.abs(1)))}`), 4);
      let frame_ijc = h_unlockb == String.fromCharCode(100,98,48,118,120,101,97,0);
      do {
         h_unlockb += `${parseInt(`${expand2}`)}`;
         if (frame_ijc) {
            break;
         }
      } while (frame_ijc && (h_unlockb.includes(`${expand2}`)));
      while (h_unlockb.length >= 3) {
         h_unlockb = `${parseInt(`${expand2}`) << (Math.min(Math.abs(1), 2))}`;
         break;
      }
       let libyoga1: Map<any, any> = new Map([[String.fromCharCode(116,111,117,99,104,0),true ], [String.fromCharCode(105,112,97,100,105,102,102,0),false ], [String.fromCharCode(109,97,107,101,99,121,103,119,105,110,112,107,103,0),false ]]);
       let xadsdk7: Map<any, any> = new Map([[String.fromCharCode(108,101,110,103,116,104,0),true ], [String.fromCharCode(115,105,110,102,0),false ], [String.fromCharCode(111,95,50,53,95,100,105,97,108,111,103,0),false ]]);
         xadsdk7 = new Map([[`${libyoga1.size}`, 2]]);
      schedulerK = new Map([[`${nativemoduleX}`, 1]]);
      break;
   }
   let sound5 = String.fromCharCode(53,112,121,101,108,121,106,95,112,52,0) == ping4;
   do {
      ping4 = `${teamP.size & mailN}`;
      if (sound5) {
         break;
      }
   } while ((2 >= (catalog5 ^ ping4.length)) && sound5);
   for (let w = 0; w < 2; w++) {
      catalogl += `${ping4.length}`;
   }
      ping4 = `${(catalogl == String.fromCharCode(95,0) ? catalog5 : catalogl.length)}`;
      catalog5 *= mailN;
      debugD *= parseFloat(`${1}`);
      moditya = "3";
       let gdtadvI = String.fromCharCode(109,111,100,0);
         gdtadvI += `${(String.fromCharCode(87,0) == gdtadvI ? gdtadvI.length : gdtadvI.length)}`;
      let strc = 5330525 >= gdtadvI.length;
      do {
          let userb = 0.0;
         gdtadvI += `${parseInt(`${userb}`) << (Math.min(gdtadvI.length, 1))}`;
         if (strc) {
            break;
         }
      } while (strc && (1 >= gdtadvI.length));
          let sports6 = String.fromCharCode(118,105,116,99,0);
          let viewsY = String.fromCharCode(114,97,109,112,117,112,0);
         gdtadvI += `${sports6.length << (Math.min(Math.abs(3), 3))}`;
         sports6 += `${viewsY.length}`;
         viewsY += `${viewsY.length}`;
      debugD *= parseFloat(`${catalogl.length}`);
   while (schedulerK.size >= catalog5) {
      catalog5 %= Math.max(4, 2);
      break;
   }
      nativemoduleX >>= Math.min(Math.abs((collection6 == String.fromCharCode(76,0) ? successN.size : collection6.length)), 4);
   while (5 <= (successN.size - parseInt(`${debugD}`)) && (parseFloat(`${successN.size}`) - debugD) <= 4.68) {
      successN = new Map([[`${teamP.size}`, teamP.size]]);
      break;
   }

    yys_event_common.searchResultClicksAnalytics();
  }, []);
  

  return (
    <ScreenContainer>
      <View style={styles.nav}>
        <View style={styles.backContainer}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <SearchBar
          platform="default"
          containerStyle={styles.containerStyle}
          inputContainerStyle={{
            backgroundColor: colors.search,
            ...styles.inputContainerStyle,
          }}
          leftIconContainerStyle={{}}
          rightIconContainerStyle={{}}
          inputStyle={{
            ...textVariants.small,
            position: "relative",
            right: 10,
            top: 1,
          }}
          loadingProps={{}}
          onChangeText={(newVal: string) => {
            setShowResults(false);
            updateSearch(newVal);
          }}
          
          placeholder={placeholderSearch}
          placeholderTextColor={colors.muted}
          round
          onSubmitEditing={onSubmit}
          searchIcon={
            <SearchIcon color={colors.muted} height={23} width={23} />
          }
          value={search}
          clearIcon={
            search ? (
              <TouchableOpacity
                onPress={() => {
                  setSearchResults([]);
                  setSearch("");
                  setShowResults(false);
                }}
              >
                <ClearIcon height={12} width={12} />
              </TouchableOpacity>
            ) : (
              <></>
            )
          }
        />
      </View>

      {showResults ? (
        <View style={styles.searchResult}>
          <VodWithDescriptionList
            vodList={searchResults}
            onClickSearchResult={onClickSearchResult}
          />
        </View>
      ) : (
        <ScrollView
          style={styles.searchResult}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false} 
          keyboardDismissMode="on-drag"
          onScroll={({ nativeEvent }) => {
            const offsetY = nativeEvent.contentOffset.y;
            const contentHeight = nativeEvent.contentSize.height;
            const height = nativeEvent.layoutMeasurement.height;
            if (offsetY >= contentHeight - height && !isFetching) {
              handleEndReached();
            }
          }}
        >
          <View style={{ marginLeft: 10 }}>
            {search !== undefined &&
              search !== null &&
              search.length === 0 &&
              recommendations ? (
              <View style={{ gap: spacing.m }}>
                {searchHistory.history.length > 0 && (
                  <View style={{ gap: spacing.m }}>
                    <View style={styles.rowApart}>
                      <Text style={{ ...textVariants.header }}>历史搜索</Text>
                      <TouchableOpacity
                        style={styles.rowApart}
                        onPress={() => {
                          setIsDialogOpen(true);
                        }}
                      >
                        <Text
                          style={{
                            ...textVariants.small,
                            marginRight: 5,
                            color: colors.muted,
                          }}
                        >
                          清除
                        </Text>
                        <ClearHistoryIcon
                          height={textVariants.small.fontSize}
                          width={textVariants.small.fontSize}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.searchContainer}>
                      {searchHistory.history.map((hst, idx) => {
                        if (hst === null || hst.trim().length === 0) {
                          return null; 
                        }
                        return (
                          <TouchableOpacity
                            key={`search-${idx}`}
                            style={{
                              backgroundColor: colors.search,
                              ...styles.hst,
                            }}
                            onPress={() => {
                              dispatch(addSearchHistory(hst));
                              setisFetching(true);
                              updateSearch(hst);
                              setShowResults(true);
                            }}
                          >
                            <Text
                              style={{
                                ...textVariants.body,
                                color: colors.muted,
                              }}
                            >
                              {hst}
                            </Text>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </View>
                )}
                <OrderedSearchResultsList
                  recommendationList={recommendations}
                  style={{ flex: 1, maxHeight: "100%" }} 
                />
              </View>
            ) : (
              <SearchResultList
                searchResultList={searchResults}
                keyword={search}
                onItemSelect={(vod: string) => {
                  setisFetching(true);
                  updateSearch(vod);
                  setShowResults(true);
                }}
              />
            )}
          </View>
        </ScrollView>
      )}
      {showResults && searchResults.length === 0 && !isFetching && (
        <EmptyList description={`抱歉没有找到“${search}”的相关视频`} />
      )}

      {showResults && searchResults.length === 0 && isFetching && (
        <View style={styles.buffering}>
          <FastImage
            source={require("@static/images/sinaHover.gif")}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
        </View>
      )}

      <ConfirmationModal
        onConfirm={() => {
          clearHistory();
          setIsDialogOpen(false);
        }}
        onCancel={() => {
          setIsDialogOpen(false);
        }}
        isVisible={isDialogOpen}
        title="清除提示"
        subtitle="您是否确定清除搜索记录吗？"
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: 5,
  },
  containerStyle: {
    paddingLeft: 10,
    backgroundColor: "transparent",
    textAlign: "left",
    flexGrow: 1,
    borderRadius: 100,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  inputContainerStyle: {
    borderRadius: 100,
    height: 35,
  },
  searchResult: {
    marginTop: 10,
    flex: 1,
    marginBottom: 20,
  },
  rowApart: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  buffering: {
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
    color: "miniUimanagerZhengpian",
    position: "absolute",
    top: "40%",
    left: "36%",
    zIndex: 100,
  },
  hst: {
    paddingTop: 7,
    paddingBottom: 9,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8,
    marginBottom: 4,
    marginRight: 10,
  },
  backContainer: {
    width: 30,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
});
