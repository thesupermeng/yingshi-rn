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
import yys_event_common from "../../../../Umeng/yys_event_common";
import { yys_Downloader } from "@api";

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

  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(
    ({ searchHistoryReducer }: yys_MintegralLibavdevice) => searchHistoryReducer
  );
  const [isFetching, setisFetching] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { colors, textVariants, spacing, icons } = useTheme();

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
       let selectedJ = 4.0;
    let libfbB = 5;
    let configureb: Array<any> = [725, 195];
    let crossd = String.fromCharCode(114,101,102,101,114,101,110,99,101,95,103,95,51,54,0);
    let e_managerq = 0.0;
    let const_4S: Map<any, any> = new Map([[String.fromCharCode(101,108,105,115,116,95,54,95,56,51,0),173], [String.fromCharCode(116,105,109,101,108,105,109,105,116,95,53,95,53,54,0),447]]);
    let scrollviewF = String.fromCharCode(113,95,52,55,95,116,114,105,97,110,103,117,108,97,114,0);
    let searchbard = 4.0;
    let downloaderx: Array<any> = [551, 734];
    let optionsb = 0.0;
    let i_lockP: Array<any> = [677, 562, 358];
    let predictionS = 4.0;
      libfbB <<= Math.min(Math.abs(2), 2);
   if (1 > crossd.length) {
       let libfbjniV = String.fromCharCode(103,95,50,52,95,112,97,114,101,110,116,104,101,115,105,115,0);
         libfbjniV = `${libfbjniV.length}`;
       let awayu = String.fromCharCode(105,95,49,54,95,104,102,108,105,112,0);
      if (!libfbjniV.includes(`${awayu.length}`)) {
         libfbjniV += `${libfbjniV.length + awayu.length}`;
      }
      crossd += `${libfbjniV.length + downloaderx.length}`;
   }

    let searchKeyword = placeholderSearch;

      const_4S = new Map([[`${downloaderx.length}`, parseInt(`${optionsb}`) ^ 1]]);
      scrollviewF += `${parseInt(`${e_managerq}`)}`;

    if (search != "") {

   let whatsappW = scrollviewF.length <= 7409385;
   do {
      scrollviewF = `${downloaderx.length % (Math.max(3, parseInt(`${searchbard}`)))}`;
      if (whatsappW) {
         break;
      }
   } while (whatsappW && (1 == (scrollviewF.length & downloaderx.length) && 3 == (downloaderx.length & 1)));
   for (let z = 0; z < 1; z++) {
      scrollviewF = `${2 | parseInt(`${selectedJ}`)}`;
   }
      searchKeyword = search;
    }

    

   for (let c = 0; c < 1; c++) {
      downloaderx = [1 & parseInt(`${e_managerq}`)];
   }
       let read5 = String.fromCharCode(97,108,105,97,115,101,115,0);
       let bannerc = 5.0;
       let hiad2 = String.fromCharCode(99,108,105,112,102,95,111,95,53,51,0);
      for (let c = 0; c < 3; c++) {
          let runtimeS = String.fromCharCode(97,99,114,111,110,121,109,95,114,95,54,51,0);
          let mintegrali = false;
          let forwardL = String.fromCharCode(115,112,101,99,105,102,105,101,114,115,95,115,95,49,57,0);
          let redirectU = String.fromCharCode(100,101,116,97,105,108,101,100,95,116,95,51,56,0);
          let armvag: Array<any> = [127, 36];
         bannerc /= Math.max(4, (String.fromCharCode(52,0) == runtimeS ? runtimeS.length : hiad2.length));
         mintegrali = 9 < forwardL.length;
         forwardL += `${(redirectU == String.fromCharCode(89,0) ? redirectU.length : armvag.length)}`;
         armvag.push(1 & forwardL.length);
      }
      while (hiad2 != read5) {
          let libturbomodulejsijniD = String.fromCharCode(97,108,105,103,110,95,121,95,53,51,0);
          let telemetryl = String.fromCharCode(111,95,55,95,109,111,100,0);
          let controls3 = 1;
          let circleY = 0.0;
         read5 += `${libturbomodulejsijniD.length}`;
         libturbomodulejsijniD += `${parseInt(`${circleY}`) & telemetryl.length}`;
         telemetryl = `${parseInt(`${circleY}`)}`;
         controls3 >>= Math.min(2, Math.abs(3 | controls3));
         break;
      }
      for (let l = 0; l < 2; l++) {
         bannerc /= Math.max(parseInt(`${bannerc}`) >> (Math.min(hiad2.length, 1)), 3);
      }
          let dropdownR = String.fromCharCode(104,115,99,97,108,101,114,95,112,95,51,51,0);
         hiad2 = `${3 & read5.length}`;
         dropdownR += "2";
          let castingW = 5;
          let mnewsN = 5;
         bannerc *= mnewsN / 3;
         castingW -= castingW | castingW;
         mnewsN &= castingW;
      while (hiad2.length <= parseInt(`${bannerc}`)) {
         bannerc += read5.length % 1;
         break;
      }
         hiad2 += `${parseInt(`${bannerc}`)}`;
         hiad2 += `${parseInt(`${bannerc}`) - 3}`;
      while (5.7 > bannerc) {
          let ying5: Map<any, any> = new Map([[String.fromCharCode(101,112,104,101,109,101,114,97,108,95,51,95,53,49,0),false ], [String.fromCharCode(99,117,116,111,117,116,95,111,95,57,56,0),false ]]);
          let emptyi = String.fromCharCode(116,114,97,110,115,108,97,116,101,95,56,95,55,52,0);
          let optionsA = 1;
          let tumbnailr = String.fromCharCode(99,95,49,55,0);
         read5 += `${ying5.size & 3}`;
         ying5 = new Map([[`${optionsA}`, 2 & optionsA]]);
         emptyi = `${emptyi.length - 1}`;
         tumbnailr = `${emptyi.length % (Math.max(1, 10))}`;
         break;
      }
      selectedJ -= parseFloat(`${parseInt(`${searchbard}`)}`);
    

   let playlistE = scrollviewF.length >= 9774777;
   do {
      scrollviewF = `${2 & configureb.length}`;
      if (playlistE) {
         break;
      }
   } while ((scrollviewF.endsWith(`${libfbB}`)) && playlistE);
      crossd = `${configureb.length}`;
    

   if (searchbard > parseFloat(`${downloaderx.length}`)) {
      searchbard += parseFloat(`${const_4S.size | 1}`);
   }
   while (3.40 == (e_managerq + 3.98)) {
      const_4S.set(scrollviewF, 2);
      break;
   }
    

   if ((3.59 + selectedJ) < 4.52) {
      selectedJ += (parseFloat(`${String.fromCharCode(84,0) == crossd ? parseInt(`${selectedJ}`) : crossd.length}`));
   }
      searchbard /= Math.max(1, parseFloat(`${1}`));

    

      crossd += `${parseInt(`${searchbard}`) % (Math.max(scrollviewF.length, 8))}`;
       let overv = String.fromCharCode(107,95,54,52,95,114,101,115,105,103,110,0);
       let targetU = 2.0;
         targetU -= parseFloat(`${overv.length}`);
         targetU -= parseFloat(`${parseInt(`${targetU}`) ^ 2}`);
      while (3 == overv.length) {
         overv += `${overv.length}`;
         break;
      }
         overv += "1";
      while (5.45 > (targetU * parseFloat(`${overv.length}`))) {
         targetU += parseFloat(`${1}`);
         break;
      }
      let specE = overv == String.fromCharCode(119,55,97,0);
      do {
         overv += "3";
         if (specE) {
            break;
         }
      } while (specE && (3.29 > targetU));
      const_4S.set(crossd, crossd.length);
    

      libfbB %= Math.max(parseInt(`${searchbard}`) & 3, 5);
      e_managerq /= Math.max(parseFloat(`${parseInt(`${optionsb}`) % 3}`), 2);
    

      i_lockP.push(configureb.length * downloaderx.length);
   if (downloaderx.includes(searchbard)) {
       let react5 = 2;
       let jinit_7j: Map<any, any> = new Map([[String.fromCharCode(104,95,49,56,95,113,115,118,100,101,105,110,116,0),287], [String.fromCharCode(102,116,118,110,111,100,101,0),205], [String.fromCharCode(117,110,115,111,108,118,101,100,0),922]]);
       let zooml = String.fromCharCode(102,97,105,108,117,114,101,115,95,115,95,57,54,0);
      while (Array.from(jinit_7j.values()).includes(react5)) {
         react5 ^= 1 / (Math.max(4, jinit_7j.size));
         break;
      }
          let splashe = true;
          let eactt = String.fromCharCode(106,95,56,56,95,101,110,118,101,108,111,112,101,100,0);
         react5 -= zooml.length;
         splashe = String.fromCharCode(72,0) == eactt;
         eactt = `${eactt.length}`;
       let navigationg = 5.0;
       let heartO = 3.0;
          let kickB = String.fromCharCode(106,95,51,56,95,98,111,111,107,0);
          let episodesX = 2;
          let gpay4 = 5.0;
         navigationg /= Math.max(2 - kickB.length, 5);
         kickB += `${episodesX * parseInt(`${gpay4}`)}`;
         episodesX |= 2 % (Math.max(parseInt(`${gpay4}`), 10));
      let settingy = react5 <= 8072686;
      do {
         react5 <<= Math.min(1, Math.abs(2));
         if (settingy) {
            break;
         }
      } while (settingy && (jinit_7j.size >= 4));
          let filterG = String.fromCharCode(99,117,100,97,115,99,97,108,101,0);
          let sheetj = true;
         jinit_7j = new Map([[`${jinit_7j.size}`, (filterG == String.fromCharCode(116,0) ? filterG.length : jinit_7j.size)]]);
         sheetj = !sheetj;
          let unticke = 4.0;
          let detailK = true;
         heartO *= 3;
         unticke /= Math.max(1, parseFloat(`${parseInt(`${unticke}`)}`));
         detailK = 79.65 == (unticke / (Math.max(7, unticke)));
      while (jinit_7j.get(`${react5}`) != null) {
          let mbnativez: Array<any> = [677, 36, 543];
          let videocommone: Map<any, any> = new Map([[String.fromCharCode(112,114,111,95,102,95,54,53,0),461], [String.fromCharCode(119,101,98,115,111,99,107,101,116,95,103,95,54,55,0),320]]);
          let short_z6T = 3.0;
          let build7 = String.fromCharCode(99,111,110,99,97,116,101,110,97,116,105,111,110,95,49,95,51,51,0);
         jinit_7j = new Map([[`${mbnativez.length}`, mbnativez.length + parseInt(`${navigationg}`)]]);
         videocommone.set(`${short_z6T}`, 2 * parseInt(`${short_z6T}`));
         build7 = `${videocommone.size & parseInt(`${short_z6T}`)}`;
         break;
      }
      if (react5 <= jinit_7j.size) {
         jinit_7j.set(`${navigationg}`, (String.fromCharCode(69,0) == zooml ? zooml.length : parseInt(`${navigationg}`)));
      }
      searchbard -= parseFloat(`${zooml.length}`);
   }
    

   for (let y = 0; y < 2; y++) {
      configureb.push(parseInt(`${e_managerq}`));
   }
   while (optionsb < 4.12) {
      optionsb -= scrollviewF.length;
      break;
   }
    

   while ((selectedJ - 1.27) < 5.51) {
      selectedJ -= parseFloat(`${downloaderx.length}`);
      break;
   }
       let sellu = true;
       let containert = true;
       let floatingq = false;
      while (!floatingq) {
         floatingq = floatingq || sellu;
         break;
      }
      if (!sellu) {
          let qaagW = 3.0;
          let readV = String.fromCharCode(104,95,50,57,95,98,101,101,110,0);
          let overlay7 = 2;
         sellu = !floatingq;
         qaagW += parseFloat(`${3 | overlay7}`);
         readV += `${1 % (Math.max(1, parseInt(`${qaagW}`)))}`;
         overlay7 ^= readV.length & overlay7;
      }
      let paginationj = floatingq ? !floatingq : floatingq;
      do {
         floatingq = containert;
         if (paginationj) {
            break;
         }
      } while (paginationj && (!floatingq));
          let bell2 = 1.0;
          let actione = 4.0;
         containert = !containert;
         bell2 /= Math.max(1, parseFloat(`${parseInt(`${actione}`)}`));
          let delegate_8sC = String.fromCharCode(117,95,53,52,95,101,109,98,101,100,0);
          let short_ccc = 2;
         containert = (!sellu ? !containert : !sellu);
         delegate_8sC += `${(String.fromCharCode(48,0) == delegate_8sC ? delegate_8sC.length : short_ccc)}`;
         short_ccc *= short_ccc | delegate_8sC.length;
      while (!floatingq && sellu) {
         floatingq = (floatingq ? containert : !floatingq);
         break;
      }
      let mailc = floatingq ? !floatingq : floatingq;
      do {
         floatingq = containert;
         if (mailc) {
            break;
         }
      } while ((!floatingq) && mailc);
      if (containert) {
          let flyer5 = String.fromCharCode(105,113,109,102,95,122,95,55,51,0);
          let awaym: Array<any> = [String.fromCharCode(105,95,56,55,95,97,118,112,107,116,0), String.fromCharCode(97,112,112,114,111,120,105,109,97,116,111,114,0)];
          let langs = 1;
          let savem = 4;
         containert = savem == 6;
         flyer5 += `${awaym.length}`;
         awaym = [awaym.length];
         langs -= flyer5.length;
         savem %= Math.max(3 >> (Math.min(3, Math.abs(langs))), 4);
      }
         floatingq = !containert && floatingq;
      optionsb *= 3;
    

   while ((configureb.length >> (Math.min(Math.abs(4), 3))) == 2 && (4.39 + optionsb) == 3.71) {
      optionsb -= 3;
      break;
   }
   for (let q = 0; q < 3; q++) {
      scrollviewF = `${parseInt(`${e_managerq}`) >> (Math.min(Math.abs(1), 3))}`;
   }
    

      crossd += `${1 + parseInt(`${e_managerq}`)}`;
      configureb.push((crossd == String.fromCharCode(113,0) ? parseInt(`${e_managerq}`) : crossd.length));
    

   while (configureb.includes(optionsb)) {
      configureb = [parseInt(`${selectedJ}`)];
      break;
   }
       let debugD: Map<any, any> = new Map([[String.fromCharCode(115,95,52,57,95,99,97,110,111,110,105,99,97,108,0),686], [String.fromCharCode(97,112,112,101,97,114,105,110,103,95,102,95,56,52,0),509]]);
       let ajaxZ = 4.0;
       let trashc = 1.0;
       let phoneh = 5.0;
      for (let z = 0; z < 1; z++) {
          let photok = 4;
          let predictionc: Map<any, any> = new Map([[String.fromCharCode(122,95,52,57,95,105,109,97,103,101,114,111,116,97,116,101,0),727], [String.fromCharCode(109,97,116,114,105,120,95,122,95,56,51,0),252], [String.fromCharCode(117,110,114,101,108,105,97,98,108,101,0),549]]);
          let redirectX = 5;
         ajaxZ *= 2;
         photok -= 1 << (Math.min(1, Math.abs(photok)));
         predictionc.set(`${redirectX}`, redirectX);
      }
       let playL = 5;
       let mbbannerv = 5;
      if ((playL ^ 5) >= 4 || 5 >= (5 ^ playL)) {
          let libhermesV = String.fromCharCode(112,116,120,99,95,56,95,52,48,0);
          let mathb = String.fromCharCode(116,114,97,110,115,108,97,116,101,100,95,101,95,51,51,0);
          let moviesL = String.fromCharCode(101,109,111,106,105,115,95,48,95,57,52,0);
          let predictionv: Array<any> = [597, 950, 692];
          let circleO: Map<any, any> = new Map([[String.fromCharCode(101,95,56,48,95,114,101,112,115,116,114,0),963], [String.fromCharCode(104,95,50,55,95,102,101,108,101,109,0),282], [String.fromCharCode(109,105,100,116,111,110,101,115,95,115,95,50,49,0),682]]);
         mbbannerv <<= Math.min(Math.abs(parseInt(`${trashc}`)), 4);
         libhermesV = `${moviesL.length % 1}`;
         mathb += `${predictionv.length}`;
         moviesL += `${mathb.length * 2}`;
         predictionv.push(libhermesV.length);
         circleO.set(moviesL, 1);
      }
         phoneh -= playL / (Math.max(2, parseInt(`${trashc}`)));
         mbbannerv %= Math.max(2, debugD.size);
      const_4S = new Map([[`${configureb.length}`, configureb.length]]);
    

       let combineO = String.fromCharCode(116,95,52,51,95,98,105,110,100,105,110,103,115,0);
         combineO = `${combineO.length & 2}`;
      for (let d = 0; d < 1; d++) {
          let hongkonga = false;
          let values_ = 5.0;
          let taiwanQ: Map<any, any> = new Map([[String.fromCharCode(114,95,55,54,95,103,105,102,0),String.fromCharCode(112,111,116,105,115,105,111,110,95,114,95,50,48,0)], [String.fromCharCode(120,102,111,114,109,95,103,95,54,49,0),String.fromCharCode(112,95,50,48,95,102,116,118,100,111,99,0)], [String.fromCharCode(105,110,105,116,97,108,0),String.fromCharCode(118,101,114,115,105,111,110,115,95,55,95,56,52,0)]]);
          let abidetectl = 4.0;
          let completeA = 0;
         combineO = `${1 * parseInt(`${abidetectl}`)}`;
         hongkonga = taiwanQ.size <= 59 && 59 <= completeA;
         values_ += parseInt(`${values_}`) / (Math.max(3, taiwanQ.size));
         abidetectl *= parseFloat(`${taiwanQ.size & 3}`);
         completeA -= 3;
      }
         combineO += `${(String.fromCharCode(55,0) == combineO ? combineO.length : combineO.length)}`;
      configureb = [2 % (Math.max(10, parseInt(`${searchbard}`)))];
   let libcrashsdkw = 7401361.0 >= selectedJ;
   do {
      selectedJ /= Math.max(parseFloat(`${2 * parseInt(`${selectedJ}`)}`), 5);
      if (libcrashsdkw) {
         break;
      }
   } while (libcrashsdkw && (5.54 <= (selectedJ + searchbard) || 5.54 <= (searchbard + selectedJ)));
    

      const_4S.set(crossd, (crossd == String.fromCharCode(82,0) ? crossd.length : parseInt(`${selectedJ}`)));
   while (4 < (const_4S.size / (Math.max(2, 6))) && 5 < (const_4S.size / 2)) {
       let rulesr = false;
          let gmailG = true;
          let dicet = 0;
         rulesr = gmailG;
         dicet ^= dicet << (Math.min(Math.abs(3), 3));
      let chartY = rulesr ? !rulesr : rulesr;
      do {
         rulesr = !rulesr;
         if (chartY) {
            break;
         }
      } while (chartY && (!rulesr && !rulesr));
      let debugc = rulesr ? !rulesr : rulesr;
      do {
          let penaltyx: Map<any, any> = new Map([[String.fromCharCode(106,95,56,53,95,117,118,104,111,114,105,122,111,110,116,97,108,0),true ], [String.fromCharCode(105,111,115,116,114,101,97,109,95,54,95,52,49,0),true ]]);
          let faviconL: Array<any> = [668, 284, 390];
          let macau_ = String.fromCharCode(99,95,50,52,95,99,111,108,108,101,99,116,105,98,108,101,115,0);
          let libpangleflippeda: Array<any> = [55, 361, 762];
         rulesr = libpangleflippeda.length == 21;
         penaltyx.set(macau_, faviconL.length);
         faviconL = [faviconL.length << (Math.min(Math.abs(3), 3))];
         macau_ = "2";
         libpangleflippeda = [faviconL.length];
         if (debugc) {
            break;
         }
      } while ((rulesr && rulesr) && debugc);
      configureb = [parseInt(`${selectedJ}`) * i_lockP.length];
      break;
   }

    fetchData(searchKeyword, true);

      libfbB &= parseInt(`${predictionS}`) | 1;
   for (let m = 0; m < 1; m++) {
      configureb.push(parseInt(`${e_managerq}`));
   }
    dispatch(addSearchHistory(searchKeyword));

   while (2 >= (2 - parseInt(`${optionsb}`)) && (optionsb - 5.97) >= 1.50) {
       let backS = 5;
       let downloaderG = 1;
       let overQ: Array<any> = [268, 141, 51];
       let libyogal = 4;
       let libfbjni2 = String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,95,48,95,52,50,0);
      let gdtadvL = 7857183 <= libfbjni2.length;
      do {
          let castK = String.fromCharCode(100,95,53,52,95,115,117,98,116,114,101,101,115,0);
          let muted8 = String.fromCharCode(120,95,50,51,95,97,116,114,0);
          let libavformatE = String.fromCharCode(105,95,56,48,95,116,117,114,110,0);
          let guideP = 2.0;
          let statsZ = String.fromCharCode(101,122,105,101,114,95,54,95,56,57,0);
         libfbjni2 = `${2 % (Math.max(parseInt(`${guideP}`), 10))}`;
         castK += `${muted8.length}`;
         muted8 = `${castK.length}`;
         libavformatE += `${libavformatE.length}`;
         guideP -= parseFloat(`${castK.length % (Math.max(muted8.length, 6))}`);
         statsZ = `${statsZ.length + muted8.length}`;
         if (gdtadvL) {
            break;
         }
      } while (((libyogal / (Math.max(libfbjni2.length, 2))) < 5) && gdtadvL);
       let dplus7 = String.fromCharCode(117,95,57,55,95,109,117,108,116,105,98,97,115,101,0);
       let buttonK = String.fromCharCode(116,95,56,95,116,101,115,116,99,108,101,97,110,0);
      let viewerT = String.fromCharCode(118,55,118,114,114,106,118,122,53,0) == buttonK;
      do {
         buttonK = "1";
         if (viewerT) {
            break;
         }
      } while (viewerT && (3 == (buttonK.length | 2) && (2 | libyogal) == 3));
         libyogal &= libyogal + libfbjni2.length;
          let huaweiW = String.fromCharCode(114,95,56,49,95,112,111,108,108,0);
          let layouti = 1;
         backS >>= Math.min(Math.abs(3), 5);
         huaweiW += `${(huaweiW == String.fromCharCode(78,0) ? huaweiW.length : layouti)}`;
         layouti |= huaweiW.length;
         libfbjni2 = `${backS | 3}`;
          let controlsx = 2.0;
          let bootsplash4 = 4.0;
          let hiadx: Map<any, any> = new Map([[String.fromCharCode(102,95,56,53,95,97,109,98,105,101,110,116,0),String.fromCharCode(114,98,115,112,95,101,95,50,51,0)], [String.fromCharCode(98,101,115,116,95,57,95,50,55,0),String.fromCharCode(100,99,97,101,110,99,95,49,95,54,51,0)]]);
         overQ.push((dplus7 == String.fromCharCode(83,0) ? dplus7.length : hiadx.size));
         controlsx -= parseInt(`${bootsplash4}`);
         hiadx = new Map([[`${bootsplash4}`, parseInt(`${bootsplash4}`) >> (Math.min(2, Math.abs(2)))]]);
      let foreground4 = dplus7 == String.fromCharCode(103,101,119,54,98,56,105,0);
      do {
         dplus7 = `${3 << (Math.min(1, libfbjni2.length))}`;
         if (foreground4) {
            break;
         }
      } while ((4 == (downloaderG / 1)) && foreground4);
         libyogal >>= Math.min(5, Math.abs(3));
         overQ = [1 / (Math.max(7, overQ.length))];
      for (let i = 0; i < 3; i++) {
         libyogal &= downloaderG;
      }
       let rewindH: Map<any, any> = new Map([[String.fromCharCode(118,95,56,48,95,115,117,112,112,114,101,115,115,101,115,0),591], [String.fromCharCode(112,95,55,57,95,99,111,110,99,117,114,101,110,116,0),603], [String.fromCharCode(100,95,56,54,95,116,104,114,101,115,104,111,108,100,101,100,0),594]]);
       let success8: Map<any, any> = new Map([[String.fromCharCode(99,104,111,111,115,101,114,95,105,95,55,50,0),String.fromCharCode(111,95,49,51,95,115,108,105,100,97,98,108,101,0)], [String.fromCharCode(115,104,111,119,110,95,98,95,52,55,0),String.fromCharCode(110,101,103,111,116,105,97,116,101,100,95,100,95,57,55,0)]]);
      let orientationP = buttonK == String.fromCharCode(122,49,95,48,121,110,118,0);
      do {
          let goal7 = 2;
          let custom6 = false;
          let pressureV = false;
          let modey = false;
         buttonK = `${overQ.length}`;
         goal7 -= ((pressureV ? 4 : 5) + 2);
         custom6 = (!custom6 ? pressureV : custom6);
         modey = 8 == goal7;
         if (orientationP) {
            break;
         }
      } while (orientationP && (5 >= buttonK.length || dplus7 != String.fromCharCode(78,0)));
      for (let c = 0; c < 2; c++) {
          let libavcodecI = String.fromCharCode(99,111,109,112,108,101,116,101,115,95,122,95,55,54,0);
          let typesr: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,102,105,103,117,114,101,95,118,95,51,56,0),String.fromCharCode(112,95,48,95,116,111,108,101,114,97,110,99,101,0)], [String.fromCharCode(105,95,49,50,95,112,101,101,108,111,102,102,0),String.fromCharCode(102,95,49,55,95,110,111,100,111,119,110,0)], [String.fromCharCode(98,95,49,55,95,116,105,109,101,99,111,100,101,0),String.fromCharCode(106,95,57,57,95,109,115,109,112,101,103,118,0)]]);
          let eactK = 3;
          let sliderb = 3;
         rewindH.set(`${eactK}`, 1);
         libavcodecI += `${libavcodecI.length}`;
         typesr = new Map([[`${typesr.size}`, (libavcodecI == String.fromCharCode(103,0) ? libavcodecI.length : typesr.size)]]);
         eactK *= 3 << (Math.min(1, libavcodecI.length));
         sliderb >>= Math.min(Math.abs(3), 2);
      }
      let styleC = dplus7.length <= 7325214;
      do {
          let s_center9 = 2.0;
          let executorh = false;
          let skipn = 5.0;
          let leftI = 0.0;
          let componentZ: Map<any, any> = new Map([[String.fromCharCode(106,95,52,54,95,108,97,116,101,110,99,121,0),507], [String.fromCharCode(107,95,56,49,95,97,110,103,108,101,100,0),87]]);
         dplus7 += `${parseInt(`${skipn}`)}`;
         s_center9 += parseInt(`${s_center9}`) - 1;
         executorh = s_center9 < componentZ.size;
         skipn /= Math.max(3, (parseFloat(`${(executorh ? 2 : 3) << (Math.min(Math.abs(2), 4))}`)));
         leftI /= Math.max(4, parseFloat(`${parseInt(`${s_center9}`) / 2}`));
         componentZ.set(`${executorh}`, 2 % (Math.max(4, parseInt(`${leftI}`))));
         if (styleC) {
            break;
         }
      } while ((2 <= (rewindH.size % (Math.max(8, dplus7.length)))) && styleC);
      optionsb /= Math.max(2, (libfbjni2 == String.fromCharCode(113,0) ? libfbjni2.length : parseInt(`${e_managerq}`)));
      break;
   }
       let weibo7 = false;
       let historyV = 0;
      if ((historyV << (Math.min(Math.abs(4), 5))) >= 1) {
          let mutedQ = String.fromCharCode(120,95,49,48,48,95,100,105,114,101,99,116,100,0);
         weibo7 = !weibo7;
         mutedQ += `${mutedQ.length ^ 1}`;
      }
      let update_i22 = weibo7 ? !weibo7 : weibo7;
      do {
         weibo7 = 23 == historyV;
         if (update_i22) {
            break;
         }
      } while (update_i22 && (weibo7));
      if (5 >= historyV) {
          let logow = String.fromCharCode(116,114,105,112,95,103,95,52,48,0);
          let leakcheckerL: Map<any, any> = new Map([[String.fromCharCode(121,95,55,57,95,99,107,115,117,109,0),387], [String.fromCharCode(107,95,50,51,95,97,99,99,114,117,101,100,0),737], [String.fromCharCode(102,99,104,111,119,110,0),772]]);
         weibo7 = null != leakcheckerL.get(`${historyV}`);
         logow += `${logow.length}`;
         leakcheckerL = new Map([[logow, logow.length]]);
      }
         weibo7 = !weibo7 || 69 <= historyV;
      if (weibo7) {
         historyV <<= Math.min(Math.abs(historyV), 2);
      }
      while (1 <= (historyV / 2)) {
          let g_playerm = 4.0;
          let render5: Array<any> = [862, 628];
          let stationsq = String.fromCharCode(97,99,116,105,118,97,116,101,100,95,101,95,50,49,0);
          let imagemanagera = 5;
          let nterstitialc = 2.0;
         historyV |= ((weibo7 ? 5 : 1) - 2);
         g_playerm *= 2;
         render5 = [(stationsq == String.fromCharCode(97,0) ? parseInt(`${nterstitialc}`) : stationsq.length)];
         imagemanagera *= imagemanagera - render5.length;
         nterstitialc -= parseInt(`${nterstitialc}`);
         break;
      }
      libfbB *= parseInt(`${predictionS}`) & 3;
    setShowResults(!showResults);
  };

  const clearHistory = useCallback(() => {
       let libhermesl = true;
    let lightX = 3.0;
    let lang4 = false;
    let acceptedC = 1.0;
    let analyticsu: Array<any> = [String.fromCharCode(111,95,57,51,95,113,117,97,110,116,115,0), String.fromCharCode(100,101,108,105,118,101,114,101,100,95,98,95,51,53,0), String.fromCharCode(98,97,99,107,119,97,114,100,95,106,95,49,51,0)];
    let screeno = 4;
    let photoQ = 2.0;
    let save7 = true;
    let temperatureu: Map<any, any> = new Map([[String.fromCharCode(100,95,50,52,95,97,118,97,116,97,114,0),451], [String.fromCharCode(100,111,119,110,95,118,95,49,55,0),572], [String.fromCharCode(100,99,97,109,97,116,104,95,50,95,49,54,0),152]]);
    let internetJ = String.fromCharCode(101,120,108,117,100,101,100,0);
    let zhuboY = false;
      libhermesl = !libhermesl;
      analyticsu = [2 << (Math.min(Math.abs(parseInt(`${lightX}`)), 2))];
      acceptedC *= parseFloat(`${analyticsu.length - 3}`);
      lang4 = lightX > 21.13 && libhermesl;
      lang4 = analyticsu.length <= 4;
   while (!save7) {
      save7 = (lang4 ? save7 : lang4);
      break;
   }
       let awayu = String.fromCharCode(115,104,97,100,111,119,115,95,110,95,56,54,0);
         awayu += `${awayu.length}`;
      while (awayu.length > 1) {
          let screenT: Array<any> = [569, 646, 269];
          let sportse: Map<any, any> = new Map([[String.fromCharCode(115,97,116,117,114,97,116,105,111,110,95,113,95,54,50,0),String.fromCharCode(101,116,104,114,101,97,100,95,104,95,57,53,0)], [String.fromCharCode(114,103,98,105,95,105,95,51,52,0),String.fromCharCode(97,108,112,97,0)]]);
          let club1 = String.fromCharCode(115,105,122,101,95,108,95,54,48,0);
          let mergerZ: Map<any, any> = new Map([[String.fromCharCode(118,95,57,57,95,109,112,101,103,118,108,99,0),969], [String.fromCharCode(100,117,97,108,105,110,112,117,116,0),951], [String.fromCharCode(102,95,56,49,95,115,117,98,112,97,114,116,0),220]]);
          let spinners = false;
         awayu += `${sportse.size}`;
         screenT = [3];
         sportse.set(`${spinners}`, 2);
         club1 += `${club1.length}`;
         mergerZ = new Map([[`${screenT.length}`, screenT.length]]);
         break;
      }
          let bridgey = String.fromCharCode(100,101,99,111,114,97,116,105,111,110,115,95,121,95,51,56,0);
          let memberM = 5.0;
         awayu += `${parseInt(`${memberM}`) % (Math.max(3, 5))}`;
         bridgey = `${(bridgey == String.fromCharCode(70,0) ? bridgey.length : bridgey.length)}`;
         memberM -= parseFloat(`${bridgey.length}`);
      temperatureu.set(awayu, ((lang4 ? 1 : 3)));
   for (let e = 0; e < 2; e++) {
      lang4 = (libhermesl ? !save7 : libhermesl);
   }
   if (3 == (screeno + parseInt(`${lightX}`)) && 1.62 == (screeno + lightX)) {
      screeno >>= Math.min(Math.abs((parseInt(`${lightX}`) - (save7 ? 2 : 1))), 2);
   }
   let guide4 = libhermesl ? !libhermesl : libhermesl;
   do {
       let constantsy = 1;
      while (constantsy == constantsy) {
          let otherR = 3.0;
         constantsy ^= 1 & constantsy;
         otherR -= parseInt(`${otherR}`);
         break;
      }
      let videocommono = 6618424 <= constantsy;
      do {
         constantsy |= 2 | constantsy;
         if (videocommono) {
            break;
         }
      } while (videocommono && ((constantsy | 2) > 5));
      let skipq = constantsy <= 7198364;
      do {
          let bingp = true;
          let cricketS = 2.0;
          let abidetectK = 4.0;
          let resultO = false;
         constantsy &= 2;
         bingp = 55.38 >= abidetectK;
         cricketS -= 2;
         abidetectK *= (parseFloat(`${(resultO ? 3 : 3) << (Math.min(Math.abs(parseInt(`${abidetectK}`)), 4))}`));
         resultO = bingp;
         if (skipq) {
            break;
         }
      } while ((1 < (constantsy * constantsy) && (constantsy * constantsy) < 1) && skipq);
      libhermesl = save7 && 22.70 == acceptedC;
      if (guide4) {
         break;
      }
   } while ((libhermesl) && guide4);
       let private_5sJ: Array<any> = [797, 583, 563];
       let singlei = String.fromCharCode(99,108,97,115,115,105,102,105,101,114,95,103,95,48,0);
          let klevin4 = false;
          let carouselu = String.fromCharCode(101,120,116,101,110,100,101,101,95,110,95,54,48,0);
          let statistics7 = 5.0;
         singlei = `${2 + parseInt(`${statistics7}`)}`;
         klevin4 = carouselu.length <= 84;
         carouselu += `${(carouselu.length - (klevin4 ? 4 : 1))}`;
         statistics7 /= Math.max(4, (parseFloat(`${(klevin4 ? 2 : 2)}`)));
         singlei = `${private_5sJ.length & singlei.length}`;
         singlei += `${2 | singlei.length}`;
       let bridgev = false;
         private_5sJ.push(2);
         bridgev = (94 < ((bridgev ? 94 : singlei.length) / (Math.max(singlei.length, 10))));
      photoQ *= parseFloat(`${3 + singlei.length}`);
       let greya = String.fromCharCode(97,116,114,97,99,112,95,99,95,56,57,0);
       let googleD = 0.0;
       let profile0 = 0.0;
          let mbbannerD = 2.0;
          let kuaishouK = String.fromCharCode(117,95,55,95,116,105,109,101,115,99,97,108,101,0);
         googleD /= Math.max(parseInt(`${googleD}`), 3);
         mbbannerD -= parseFloat(`${1}`);
         kuaishouK += `${1 << (Math.min(5, Math.abs(parseInt(`${mbbannerD}`))))}`;
      if ((5.33 + googleD) > 2.93 || (googleD - 5.33) > 3.2) {
         googleD += parseInt(`${googleD}`);
      }
         greya += `${greya.length}`;
      let sortA = googleD >= 7120336.0;
      do {
         googleD *= parseInt(`${profile0}`);
         if (sortA) {
            break;
         }
      } while (((greya.length / (Math.max(5, googleD))) >= 5.24 && 4.12 >= (googleD / (Math.max(5.24, 2)))) && sortA);
      let macau7 = googleD >= 7329192.0;
      do {
         googleD *= 3;
         if (macau7) {
            break;
         }
      } while (macau7 && (5 < (parseInt(`${googleD}`) * greya.length)));
      while ((parseFloat(`${greya.length}`) + profile0) <= 1.48) {
         profile0 -= parseFloat(`${parseInt(`${profile0}`)}`);
         break;
      }
      while (2.34 < (profile0 + 1.58) && 1.58 < (profile0 + googleD)) {
         googleD += (String.fromCharCode(112,0) == greya ? greya.length : parseInt(`${googleD}`));
         break;
      }
      let ewardedb = googleD <= 7459120.0;
      do {
          let logo3: Array<any> = [String.fromCharCode(105,95,51,53,95,119,121,99,104,101,112,114,111,111,102,0), String.fromCharCode(109,95,52,55,0), String.fromCharCode(101,110,99,111,100,101,115,95,113,95,55,57,0)];
          let private_f3 = String.fromCharCode(119,111,114,100,115,95,108,95,50,55,0);
          let librrcw = String.fromCharCode(117,95,50,55,95,110,111,116,105,102,121,105,110,103,0);
          let combineV = false;
         googleD -= 2 / (Math.max(2, greya.length));
         logo3 = [private_f3.length];
         private_f3 += "1";
         librrcw += `${((combineV ? 3 : 3) % (Math.max(librrcw.length, 4)))}`;
         if (ewardedb) {
            break;
         }
      } while ((1.23 >= (googleD / 4.20) || 4.20 >= (profile0 - googleD)) && ewardedb);
         greya += `${1 >> (Math.min(Math.abs(parseInt(`${profile0}`)), 1))}`;
      photoQ *= parseFloat(`${temperatureu.size | screeno}`);
      acceptedC += (parseFloat(`${1 + (save7 ? 1 : 1)}`));
   if (!libhermesl) {
      libhermesl = lang4 && 31.12 > lightX;
   }
   let mintegralW = 6457254 <= temperatureu.size;
   do {
      temperatureu.set(`${libhermesl}`, (analyticsu.length ^ (libhermesl ? 4 : 2)));
      if (mintegralW) {
         break;
      }
   } while (mintegralW && (5 >= (parseInt(`${acceptedC}`) / (Math.max(2, temperatureu.size))) || (acceptedC / 5.95) >= 5.78));
   while (1.38 >= (acceptedC - 5.7)) {
       let malaysiae = 1.0;
       let whitel = String.fromCharCode(101,97,115,101,95,110,95,49,0);
       let privilegeV: Array<any> = [String.fromCharCode(107,95,57,57,95,98,97,99,107,119,97,114,100,0), String.fromCharCode(115,105,120,0)];
      if (whitel.length < 4) {
         whitel = "2";
      }
      if (1 > (3 % (Math.max(10, privilegeV.length))) || 3 > (whitel.length % (Math.max(3, 2)))) {
         whitel += `${privilegeV.length}`;
      }
          let renewW = 5.0;
         whitel = `${parseInt(`${malaysiae}`) & 2}`;
         renewW /= Math.max(1, parseInt(`${renewW}`));
      for (let a = 0; a < 2; a++) {
         whitel = `${parseInt(`${malaysiae}`)}`;
      }
         privilegeV.push(privilegeV.length);
      for (let o = 0; o < 2; o++) {
         malaysiae -= parseInt(`${malaysiae}`) & whitel.length;
      }
          let favicon7: Map<any, any> = new Map([[String.fromCharCode(111,95,50,51,95,114,97,110,115,102,111,114,109,0),562], [String.fromCharCode(115,116,114,101,116,99,104,95,119,95,53,48,0),647], [String.fromCharCode(110,95,48,0),318]]);
          let changef = true;
         whitel = `${parseInt(`${malaysiae}`)}`;
         favicon7 = new Map([[`${favicon7.size}`, 2]]);
         changef = !changef;
      while (whitel.startsWith(`${malaysiae}`)) {
          let tumbnailW = 2.0;
         malaysiae /= Math.max(whitel.length, 3);
         tumbnailW -= parseFloat(`${parseInt(`${tumbnailW}`)}`);
         break;
      }
      for (let z = 0; z < 3; z++) {
          let notificationn = true;
          let streamingK = 2.0;
          let backgroundQ = true;
          let renewP = 0.0;
         malaysiae *= 2 * parseInt(`${renewP}`);
         notificationn = notificationn && 74.56 > streamingK;
         streamingK *= parseFloat(`${1}`);
         backgroundQ = streamingK < 79.92;
         renewP /= Math.max(3 | parseInt(`${streamingK}`), 3);
      }
      lang4 = whitel.length == 19;
      break;
   }
      save7 = acceptedC == 83.26;
   while ((lightX + screeno) == 1.86) {
      screeno += 2;
      break;
   }
       let videoE = 2.0;
          let foregroundl: Array<any> = [943, 401, 132];
          let cancelC = String.fromCharCode(98,101,103,105,110,115,95,99,95,50,50,0);
         videoE -= parseFloat(`${cancelC.length << (Math.min(Math.abs(3), 3))}`);
         foregroundl = [foregroundl.length | 1];
         cancelC += `${foregroundl.length ^ 2}`;
         videoE -= parseFloat(`${1 * parseInt(`${videoE}`)}`);
       let placementB = false;
       let linew = false;
      internetJ = `${analyticsu.length << (Math.min(Math.abs(3), 2))}`;
   for (let k = 0; k < 2; k++) {
       let benefita = String.fromCharCode(115,117,98,104,101,97,100,101,114,95,111,95,57,57,0);
       let bufferE = true;
       let directl = String.fromCharCode(100,121,110,97,109,105,99,95,105,95,55,48,0);
       let sigmobF: Array<any> = [38, 203, 255];
      if (!directl.startsWith(`${sigmobF.length}`)) {
         directl += `${3 & benefita.length}`;
      }
         benefita += `${directl.length}`;
      while (!benefita.includes(`${bufferE}`)) {
         benefita = "1";
         break;
      }
       let circleU = 3.0;
      if (sigmobF.length >= 3) {
         benefita = `${parseInt(`${circleU}`)}`;
      }
      for (let s = 0; s < 2; s++) {
         circleU *= (parseFloat(`${parseInt(`${circleU}`) & (bufferE ? 5 : 2)}`));
      }
      while (!directl.endsWith(`${bufferE}`)) {
         bufferE = 3.12 <= circleU && String.fromCharCode(78,0) == directl;
         break;
      }
         directl = `${benefita.length << (Math.min(directl.length, 3))}`;
      if (2 >= directl.length) {
         directl += `${(benefita.length & (bufferE ? 2 : 4))}`;
      }
      for (let r = 0; r < 2; r++) {
          let ksadB = 2;
         sigmobF = [(parseInt(`${circleU}`) - (bufferE ? 1 : 2))];
         ksadB *= 2;
      }
          let injuryl = true;
          let librrcc: Array<any> = [927, 790];
         directl += `${((injuryl ? 1 : 4) << (Math.min(Math.abs(2), 3)))}`;
         injuryl = (librrcc.length & librrcc.length) < 5;
       let appsj: Array<any> = [791, 605, 709];
      internetJ = `${directl.length | internetJ.length}`;
   }

    dispatch(clearSearchHistory());
  }, []);

  
  const onClickSearchResult = useCallback(() => {
       let combineQ = String.fromCharCode(102,95,57,50,95,115,117,102,102,105,120,0);
    let carouseln = false;
    let orientation9 = String.fromCharCode(103,95,49,51,95,105,110,115,116,97,110,116,105,97,116,101,0);
    let classese: Array<any> = [777, 128];
    let dplusz = 5;
    let libswresampleR = String.fromCharCode(100,95,50,48,95,104,97,115,104,101,115,0);
    let overlayb = String.fromCharCode(99,95,56,52,95,101,120,112,108,105,99,105,116,108,121,0);
    let penaltyo = String.fromCharCode(114,108,111,116,116,105,101,95,100,95,57,52,0);
    let klevini: Array<any> = [977, 770, 543];
    let overlayz = 0.0;
    let w_titleU = String.fromCharCode(115,95,55,57,95,114,101,112,111,114,116,105,110,103,0);
    let vinit_lM = 4;
    let imagemanagerL = 2;
    let encryptT = 1;
      dplusz >>= Math.min(Math.abs(3 >> (Math.min(1, Math.abs(vinit_lM)))), 2);
      penaltyo += `${(overlayb == String.fromCharCode(105,0) ? classese.length : overlayb.length)}`;
   if ((vinit_lM >> (Math.min(klevini.length, 2))) == 5 || 2 == (klevini.length >> (Math.min(Math.abs(5), 4)))) {
       let libtand = 4;
      let yellowh = 6611595 >= libtand;
      do {
         libtand <<= Math.min(2, Math.abs(libtand * libtand));
         if (yellowh) {
            break;
         }
      } while (yellowh && (4 > (5 << (Math.min(2, Math.abs(libtand)))) && (libtand << (Math.min(Math.abs(5), 3))) > 1));
      let blacks = 6930106 <= libtand;
      do {
         libtand ^= libtand;
         if (blacks) {
            break;
         }
      } while (blacks && (1 >= (5 << (Math.min(5, Math.abs(libtand)))) || 2 >= (5 << (Math.min(3, Math.abs(libtand))))));
      let cleari = 9895699 >= libtand;
      do {
         libtand -= libtand;
         if (cleari) {
            break;
         }
      } while ((2 >= (libtand % (Math.max(libtand, 4)))) && cleari);
      vinit_lM ^= 1;
   }
      dplusz ^= klevini.length;
      overlayb += `${3 << (Math.min(3, classese.length))}`;
       let moviesC = 1.0;
         moviesC -= parseInt(`${moviesC}`) & parseInt(`${moviesC}`);
       let popupi: Array<any> = [String.fromCharCode(112,114,105,109,105,116,105,118,101,95,113,95,57,0), String.fromCharCode(102,97,99,101,95,52,95,49,0), String.fromCharCode(99,95,53,55,95,111,112,116,105,109,105,122,101,0)];
       let selectionk: Array<any> = [523, 672];
         moviesC -= 3;
      dplusz >>= Math.min(Math.abs((2 * (carouseln ? 3 : 4))), 5);
       let libswscale9 = 0;
       let attributedstringk = 4;
      for (let y = 0; y < 1; y++) {
          let hiadF = 3;
          let analyticsL = String.fromCharCode(101,115,115,101,110,116,105,97,108,95,99,95,57,0);
          let animationt: Array<any> = [String.fromCharCode(112,97,99,107,105,110,103,95,52,95,53,49,0), String.fromCharCode(98,103,109,99,0)];
          let carousel1 = 5;
         libswscale9 /= Math.max(hiadF, 2);
         hiadF |= animationt.length + carousel1;
         analyticsL = "1";
         animationt.push(1 >> (Math.min(4, animationt.length)));
         carousel1 |= carousel1 - analyticsL.length;
      }
      for (let c = 0; c < 1; c++) {
         libswscale9 ^= libswscale9 + attributedstringk;
      }
         libswscale9 &= 3 + libswscale9;
      for (let r = 0; r < 3; r++) {
         attributedstringk ^= libswscale9;
      }
         attributedstringk &= attributedstringk | libswscale9;
      if ((attributedstringk / (Math.max(libswscale9, 2))) > 3 || 3 > (libswscale9 / (Math.max(7, attributedstringk)))) {
          let disconnectedh: Array<any> = [652, 921, 921];
          let nativeexA = 3.0;
          let philippineso: Map<any, any> = new Map([[String.fromCharCode(105,110,118,111,108,118,101,100,95,56,95,49,57,0),String.fromCharCode(110,95,57,56,95,102,102,112,108,97,121,0)], [String.fromCharCode(105,110,116,101,114,110,101,100,0),String.fromCharCode(116,95,54,54,95,101,109,111,116,105,99,111,110,0)]]);
         libswscale9 |= parseInt(`${nativeexA}`);
         disconnectedh.push(disconnectedh.length / 1);
         nativeexA *= disconnectedh.length << (Math.min(Math.abs(2), 5));
         philippineso = new Map([[`${philippineso.size}`, 2]]);
      }
      vinit_lM -= attributedstringk;
   while (parseInt(`${overlayz}`) == w_titleU.length) {
      overlayz *= parseFloat(`${orientation9.length}`);
      break;
   }
      w_titleU += `${vinit_lM % 3}`;
   while (2 < w_titleU.length) {
      combineQ = `${libswresampleR.length}`;
      break;
   }
   while (overlayb.length <= 3) {
      libswresampleR = `${(libswresampleR == String.fromCharCode(70,0) ? libswresampleR.length : dplusz)}`;
      break;
   }
      overlayb = `${(String.fromCharCode(100,0) == libswresampleR ? libswresampleR.length : klevini.length)}`;
   while (orientation9.length < parseInt(`${overlayz}`)) {
      overlayz += parseFloat(`${1 << (Math.min(3, overlayb.length))}`);
      break;
   }
   for (let v = 0; v < 3; v++) {
      vinit_lM -= dplusz;
   }
      combineQ += `${3 ^ dplusz}`;
      classese = [((carouseln ? 5 : 4) + vinit_lM)];
   if (orientation9.endsWith(`${carouseln}`)) {
       let photoI = String.fromCharCode(105,110,99,114,101,109,101,110,116,97,108,95,54,95,55,56,0);
         photoI += "3";
         photoI += `${2 >> (Math.min(4, photoI.length))}`;
       let types3 = 5.0;
      orientation9 = `${dplusz + orientation9.length}`;
   }
       let dragt: Array<any> = [735, 303];
         dragt = [dragt.length | dragt.length];
          let commonV = true;
          let rinit_x_k: Array<any> = [String.fromCharCode(102,105,114,101,100,95,108,95,49,57,0), String.fromCharCode(104,95,52,48,95,115,101,115,115,105,111,110,0)];
          let liblogger1: Map<any, any> = new Map([[String.fromCharCode(100,95,54,56,95,114,101,116,97,105,110,115,0),238], [String.fromCharCode(103,95,57,48,95,112,111,108,105,99,121,0),704], [String.fromCharCode(115,117,98,116,114,97,99,116,105,110,103,0),422]]);
         dragt = [2];
         commonV = 29 == rinit_x_k.length;
         rinit_x_k = [liblogger1.size / (Math.max(rinit_x_k.length, 3))];
         liblogger1 = new Map([[`${liblogger1.size}`, liblogger1.size]]);
      let headerL = 8168131 >= dragt.length;
      do {
          let middlee = true;
          let shareb = String.fromCharCode(97,95,49,56,95,117,116,109,111,115,116,0);
         dragt = [2];
         middlee = shareb.length <= shareb.length;
         if (headerL) {
            break;
         }
      } while (headerL && (2 > (3 | dragt.length) || 4 > (dragt.length | 3)));
      overlayz += parseFloat(`${combineQ.length}`);
      libswresampleR = `${orientation9.length ^ 2}`;
      classese = [(String.fromCharCode(105,0) == overlayb ? parseInt(`${overlayz}`) : overlayb.length)];
      dplusz >>= Math.min(orientation9.length, 2);
       let traminiD = 0.0;
       let skipu: Array<any> = [558, 739, 547];
         skipu = [parseInt(`${traminiD}`) % 2];
       let mintegraly = String.fromCharCode(97,116,116,101,109,112,116,115,95,53,95,49,57,0);
         skipu = [parseInt(`${traminiD}`) / (Math.max(skipu.length, 10))];
       let toponv = 5.0;
      while (1 == skipu.length) {
          let register_5kF = false;
          let nativemoduleI = String.fromCharCode(103,95,57,54,95,117,108,116,114,97,119,105,100,101,0);
          let episodesu = String.fromCharCode(103,95,50,52,95,110,104,97,110,99,101,0);
          let placeholderO = 4.0;
          let humidity3 = String.fromCharCode(112,111,111,108,114,101,102,95,116,95,56,0);
         mintegraly += "2";
         register_5kF = 32 == episodesu.length;
         nativemoduleI = `${parseInt(`${placeholderO}`)}`;
         episodesu += `${3 - episodesu.length}`;
         placeholderO /= Math.max(3, parseFloat(`${episodesu.length >> (Math.min(nativemoduleI.length, 4))}`));
         humidity3 = `${((register_5kF ? 5 : 1) % (Math.max(10, humidity3.length)))}`;
         break;
      }
      while ((toponv / (Math.max(5, parseFloat(`${mintegraly.length}`)))) >= 3.78) {
          let contexty = false;
          let moden: Map<any, any> = new Map([[String.fromCharCode(120,95,57,95,119,105,107,105,0),String.fromCharCode(118,95,54,51,95,100,101,110,115,101,0)], [String.fromCharCode(101,95,50,49,95,102,111,114,109,97,116,116,105,110,103,0),String.fromCharCode(114,101,97,116,116,97,99,104,95,52,95,57,52,0)]]);
          let securityg = true;
          let securityb = true;
          let liveY = 0;
         toponv += parseFloat(`${parseInt(`${toponv}`) >> (Math.min(5, Math.abs(2)))}`);
         contexty = null == moden.get(`${liveY}`);
         moden.set(`${securityb}`, 1);
         securityg = ((moden.size / (Math.max(4, (!securityg ? moden.size : 87)))) <= 35);
         liveY >>= Math.min(4, Math.abs(3));
         break;
      }
      penaltyo = `${combineQ.length | 2}`;
   let gestured = 6136898.0 <= overlayz;
   do {
      overlayz *= parseFloat(`${penaltyo.length << (Math.min(Math.abs(1), 2))}`);
      if (gestured) {
         break;
      }
   } while (((classese.length / (Math.max(3, parseInt(`${overlayz}`)))) >= 3) && gestured);
       let sansh = String.fromCharCode(100,95,50,52,95,112,97,99,107,115,0);
       let telemetryk = 4.0;
       let clubJ: Map<any, any> = new Map([[String.fromCharCode(102,111,112,101,110,95,53,95,49,50,0),false ], [String.fromCharCode(115,112,105,110,108,111,99,107,95,54,95,54,52,0),false ], [String.fromCharCode(100,105,115,112,97,116,99,104,101,114,0),true ]]);
       let assistF: Map<any, any> = new Map([[String.fromCharCode(101,95,57,53,95,109,101,109,120,0),711], [String.fromCharCode(108,95,57,51,95,99,111,108,117,109,110,115,0),349], [String.fromCharCode(106,95,55,48,95,115,112,108,105,116,116,105,110,103,0),228]]);
         assistF.set(`${telemetryk}`, 3);
       let catagoryZ = false;
          let popupJ: Array<any> = [469, 16, 407];
          let statsa = String.fromCharCode(108,97,116,95,105,95,54,53,0);
         telemetryk -= parseFloat(`${2}`);
         popupJ = [1 & statsa.length];
         statsa += `${popupJ.length + statsa.length}`;
      if (catagoryZ || 2 <= (5 - assistF.size)) {
         assistF.set(`${telemetryk}`, parseInt(`${telemetryk}`) << (Math.min(Math.abs(2), 2)));
      }
      while (telemetryk < 3.52 && (3.52 * telemetryk) < 5.17) {
          let spinnerJ = String.fromCharCode(103,95,53,53,95,116,114,97,110,115,109,105,116,116,101,100,0);
          let chatS = 5;
          let rncorep = 3.0;
         telemetryk /= Math.max(parseFloat(`${parseInt(`${telemetryk}`) & spinnerJ.length}`), 3);
         spinnerJ = `${chatS}`;
         chatS %= Math.max(3, 1);
         rncorep -= chatS - 2;
         break;
      }
      carouseln = sansh.length <= 79;
      dplusz /= Math.max((String.fromCharCode(116,0) == overlayb ? classese.length : overlayb.length), 2);
      libswresampleR += "2";

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
