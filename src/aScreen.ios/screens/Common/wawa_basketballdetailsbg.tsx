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
import OrderedSearchResultsList from "../../components/search/wawa_giftbutton";
import SearchResultList from "../../components/search/wawa_anytime_core";
import ScreenContainer from "../../components/container/wawa_nterstitial_iconpipexpand";
import BackButton from "../../components/button/wawa_awayteamfield_airbnbstarselected_button";
import SearchIcon from "@static/images/basketballhometeamAbidetect.svg";
import ClearIcon from "@static/images/libavfilterDicelogo.svg";
import { useQuery } from "@tanstack/react-query";

import { wawaLayoutEvent } from "@type/wawa_gradlew";
import { RootStackScreenProps } from "@type/wawa_iconnewchat";
import { API_DOMAIN } from "@utility/wawa_iconpointscore";
import VodWithDescriptionList from "../../components/vod/wawa_nativeex_button";
import { useAppDispatch, useAppSelector } from "@hooks/wawa_root";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import FastImage from "../../components/common/wawa_iconarrowrightblack";
import {
  addSearchHistory,
  clearSearchHistory,
} from "@redux/actions/wawa_with_mapping";
import Animated, {
  FadeInUp,
  FadeOutUp,
  useAnimatedStyle,
} from "react-native-reanimated";
import ClearHistoryIcon from "@static/images/countryQuest.svg";
import EmptyList from "../../components/common/wawa_othermatchdetailbg_videocommon";
import appsFlyer from "react-native-appsflyer";
import ConfirmationModal from "../../components/modal/wawa_iconedit";
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";
import { wawaUsernameAdult } from "@api";

export default ({ navigation, route }: RootStackScreenProps<"搜索">) => {
  const [search, setSearch] = useState("");
  const [placeholderSearch, setPlaceHolderSearch] = useState(
    route.params.initial
  );

  const [searchTimer, setSearchTimer] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [searchResults, setSearchResults] = useState<Array<wawaLayoutEvent>>(
    []
  );
  const [showResults, setShowResults] = useState(false);

  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(
    ({ searchHistoryReducer }: wawaIconsubssuccess) => searchHistoryReducer
  );
  const [isFetching, setisFetching] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { colors, textVariants, spacing, icons } = useTheme();

  const { data: recommendations } = useQuery({
    queryKey: ["recommendationList"],
    queryFn: () => wawaUsernameAdult.getListByRecommendations(),
  });

  async function fetchData(text: string, userSearch: boolean = false) {
    setisFetching(true);

    
    if (userSearch && text.length > 0) wawa_dacccfaabfbcbadeebddcabacdffdbc_video.searchKeywordAnalytics(text);
    

    wawaUsernameAdult.getListByKeyword(text)
      .then((data) => {
        setSearchTimer(0);

        if (data.length <= 0) {
          setSearchResults([]);
        } else {
          setSearchResults(data);

          
          if (userSearch) wawa_dacccfaabfbcbadeebddcabacdffdbc_video.searchResultViewsAnalytics();
          
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
       let defaultprofilepicY: Array<any> = [421, 254];
    let injuryv = String.fromCharCode(112,105,120,101,108,102,108,111,97,116,95,51,95,56,57,0);
    let accepted7 = String.fromCharCode(105,110,99,111,109,112,97,116,105,98,108,101,95,51,95,55,51,0);
    let iconsharefriendsC = String.fromCharCode(100,95,55,49,95,111,116,111,102,0);
    let basketballdetailsbg5 = true;
    let stationc = 1.0;
    let rewardP = 3.0;
    let minimize2 = String.fromCharCode(116,114,97,107,95,114,95,57,50,0);
    let rncorez = String.fromCharCode(116,105,109,101,105,110,102,111,95,99,95,50,51,0);
    let wifirouter8 = String.fromCharCode(115,95,55,54,95,104,121,115,116,101,114,101,115,105,115,0);
    let iconpointscore1: Map<any, any> = new Map([[String.fromCharCode(112,95,54,57,95,108,105,109,105,116,101,114,0),653], [String.fromCharCode(110,104,97,110,99,101,95,114,95,56,49,0),226]]);
    let buttonD: Array<any> = [739, 557, 463];
    let string5 = String.fromCharCode(115,95,57,55,95,97,114,103,98,0);
    let indicatorU = 1;
    let libavfilterz = 0.0;
    let vignetteO = 5;
      rncorez += `${(String.fromCharCode(68,0) == injuryv ? wifirouter8.length : injuryv.length)}`;
   while (injuryv == String.fromCharCode(82,0)) {
      iconsharefriendsC = `${iconsharefriendsC.length - injuryv.length}`;
      break;
   }

    let searchKeyword = placeholderSearch;

      iconsharefriendsC = `${(String.fromCharCode(118,0) == accepted7 ? rncorez.length : accepted7.length)}`;
      rncorez += `${(String.fromCharCode(100,0) == injuryv ? injuryv.length : iconpointscore1.size)}`;

    if (search != "") {

   for (let b = 0; b < 1; b++) {
      iconpointscore1 = new Map([[`${iconpointscore1.size}`, iconpointscore1.size & defaultprofilepicY.length]]);
   }
      buttonD = [iconpointscore1.size];
      searchKeyword = search;
    }

    

       let firebaseQ: Array<any> = [414, 58, 617];
       let arrowrightwithtailj = String.fromCharCode(97,95,51,53,95,98,97,99,107,105,110,103,0);
       let login7 = 1.0;
      while (5 >= (firebaseQ.length << (Math.min(Math.abs(1), 4))) && (firebaseQ.length << (Math.min(arrowrightwithtailj.length, 5))) >= 1) {
         firebaseQ.push(arrowrightwithtailj.length);
         break;
      }
      for (let c = 0; c < 1; c++) {
         arrowrightwithtailj = `${(String.fromCharCode(65,0) == arrowrightwithtailj ? parseInt(`${login7}`) : arrowrightwithtailj.length)}`;
      }
      for (let z = 0; z < 2; z++) {
         arrowrightwithtailj = `${parseInt(`${login7}`)}`;
      }
         arrowrightwithtailj = `${firebaseQ.length}`;
      while (4.60 >= login7) {
         login7 -= parseFloat(`${firebaseQ.length - 3}`);
         break;
      }
       let iconbellactiveP = 2;
          let statisticsactive9 = String.fromCharCode(110,101,116,101,114,114,110,111,95,97,95,50,57,0);
          let iconclosewhitewithbgj = String.fromCharCode(117,116,105,108,105,116,121,95,51,95,49,49,0);
         firebaseQ.push((String.fromCharCode(95,0) == statisticsactive9 ? iconclosewhitewithbgj.length : statisticsactive9.length));
      if (3.56 > (iconbellactiveP / (Math.max(login7, 6)))) {
          let executort = 4;
         login7 *= parseFloat(`${iconbellactiveP << (Math.min(Math.abs(2), 5))}`);
         executort >>= Math.min(5, Math.abs(3));
      }
         iconbellactiveP *= firebaseQ.length;
      basketballdetailsbg5 = firebaseQ.length >= string5.length;
       let basketballawayteamF = 4;
       let producte = String.fromCharCode(108,95,52,48,95,103,101,110,99,102,103,115,0);
       let librrcd = String.fromCharCode(114,95,51,55,95,109,112,101,103,116,115,0);
      let readr = 5674387 <= producte.length;
      do {
         producte += "3";
         if (readr) {
            break;
         }
      } while (readr && (!producte.includes(librrcd)));
         basketballawayteamF *= (String.fromCharCode(116,0) == librrcd ? producte.length : librrcd.length);
         basketballawayteamF += basketballawayteamF;
      if (librrcd == String.fromCharCode(103,0)) {
         producte += `${librrcd.length}`;
      }
      for (let u = 0; u < 1; u++) {
         producte = "3";
      }
      if (4 > librrcd.length && producte == String.fromCharCode(112,0)) {
          let graphics0 = String.fromCharCode(100,95,50,52,95,101,114,97,115,101,0);
         librrcd = "1";
         graphics0 = `${2 % (Math.max(9, graphics0.length))}`;
      }
         producte = "2";
         basketballawayteamF &= 1 / (Math.max(3, producte.length));
       let bgvipsportc = 5.0;
      string5 = `${(String.fromCharCode(54,0) == wifirouter8 ? minimize2.length : wifirouter8.length)}`;
    

      rewardP /= Math.max(5, (parseFloat(`${String.fromCharCode(80,0) == accepted7 ? iconpointscore1.size : accepted7.length}`)));
   let rulesg = injuryv.length >= 7516742;
   do {
      injuryv += `${((basketballdetailsbg5 ? 2 : 2))}`;
      if (rulesg) {
         break;
      }
   } while (rulesg && (parseInt(`${stationc}`) < injuryv.length));
    

      rncorez += `${((basketballdetailsbg5 ? 4 : 3))}`;
   for (let s = 0; s < 3; s++) {
      rewardP += (parseFloat(`${String.fromCharCode(65,0) == injuryv ? injuryv.length : iconsharefriendsC.length}`));
   }
    

   for (let p = 0; p < 1; p++) {
       let refreshborderlesse: Array<any> = [394, 339];
       let iconcurrentmatchC = String.fromCharCode(98,95,54,52,0);
       let constants7 = String.fromCharCode(99,107,115,117,109,95,116,95,53,50,0);
      let mbnative3 = iconcurrentmatchC.length <= 5651128;
      do {
         iconcurrentmatchC += `${refreshborderlesse.length}`;
         if (mbnative3) {
            break;
         }
      } while ((refreshborderlesse.length >= 5) && mbnative3);
      let loading2 = refreshborderlesse.length <= 5213814;
      do {
         refreshborderlesse = [3 << (Math.min(3, constants7.length))];
         if (loading2) {
            break;
         }
      } while (loading2 && (constants7.startsWith(`${refreshborderlesse.length}`)));
         refreshborderlesse.push(refreshborderlesse.length);
      while (refreshborderlesse.length == constants7.length) {
          let searcha: Array<any> = [541, 337];
          let weather4 = 4;
          let zoomi: Array<any> = [String.fromCharCode(99,108,111,115,101,115,111,99,107,101,116,95,54,95,57,48,0), String.fromCharCode(103,95,49,54,95,109,106,112,101,103,98,0), String.fromCharCode(99,111,110,116,101,120,116,115,95,120,95,51,52,0)];
          let basketballhometeamE = String.fromCharCode(108,97,110,103,117,97,103,101,95,113,95,55,52,0);
         constants7 += `${searcha.length % (Math.max(1, 6))}`;
         searcha = [zoomi.length % 2];
         weather4 <<= Math.min(2, Math.abs(2));
         zoomi.push(zoomi.length);
         basketballhometeamE += `${basketballhometeamE.length}`;
         break;
      }
      if (5 == iconcurrentmatchC.length) {
         iconcurrentmatchC = `${iconcurrentmatchC.length}`;
      }
          let shrinkN = 1.0;
         iconcurrentmatchC = `${constants7.length >> (Math.min(3, refreshborderlesse.length))}`;
         shrinkN += parseFloat(`${parseInt(`${shrinkN}`)}`);
       let giflivestreamingS: Map<any, any> = new Map([[String.fromCharCode(99,111,109,109,111,110,95,118,95,56,52,0),String.fromCharCode(102,115,112,112,95,107,95,56,56,0)], [String.fromCharCode(115,101,110,115,111,114,95,113,95,49,0),String.fromCharCode(116,95,57,53,95,108,111,119,112,97,115,115,0)]]);
       let schedulerS: Map<any, any> = new Map([[String.fromCharCode(100,95,56,54,95,105,110,116,101,114,115,101,99,116,115,0),false ], [String.fromCharCode(109,95,55,57,95,97,108,108,111,99,97,116,105,111,110,0),false ], [String.fromCharCode(109,95,50,57,95,102,101,116,99,104,105,110,103,0),false ]]);
      for (let j = 0; j < 2; j++) {
         refreshborderlesse.push(2 | constants7.length);
      }
      let countdownO = 6068920 >= refreshborderlesse.length;
      do {
         refreshborderlesse = [refreshborderlesse.length * 1];
         if (countdownO) {
            break;
         }
      } while (countdownO && (5 < (3 | iconcurrentmatchC.length)));
      string5 += `${2 / (Math.max(1, refreshborderlesse.length))}`;
   }
      iconpointscore1.set(`${wifirouter8}`, 3 ^ iconpointscore1.size);

    

   if (iconsharefriendsC.length < 5) {
      defaultprofilepicY.push(rncorez.length);
   }
   let icondownimgY = 5340689 >= buttonD.length;
   do {
      buttonD.push(2);
      if (icondownimgY) {
         break;
      }
   } while (icondownimgY && (!wifirouter8.endsWith(`${buttonD.length}`)));
    

      defaultprofilepicY = [3 ^ minimize2.length];
       let matchactive2 = 5.0;
       let nativeg = String.fromCharCode(113,117,97,110,116,105,122,101,114,115,95,109,95,57,0);
      for (let o = 0; o < 3; o++) {
         matchactive2 *= parseFloat(`${2}`);
      }
         nativeg += `${1 | nativeg.length}`;
      let znewsshareA = 6552677.0 <= matchactive2;
      do {
         matchactive2 /= Math.max(parseFloat(`${3}`), 4);
         if (znewsshareA) {
            break;
         }
      } while (znewsshareA && (nativeg.includes(`${matchactive2}`)));
         nativeg += `${nativeg.length}`;
      let debugI = nativeg == String.fromCharCode(103,57,110,121,100,102,0);
      do {
         nativeg = "2";
         if (debugI) {
            break;
         }
      } while (debugI && ((parseFloat(`${nativeg.length}`) * matchactive2) > 1.43));
      if (nativeg.length > parseInt(`${matchactive2}`)) {
         matchactive2 *= parseFloat(`${nativeg.length >> (Math.min(Math.abs(1), 4))}`);
      }
      injuryv += `${1 - iconsharefriendsC.length}`;
    

   if (5 >= accepted7.length) {
       let canvasM = 3;
       let scrollviewk = 4;
       let libjsijniprofilerA = String.fromCharCode(102,114,101,101,112,97,100,100,114,115,95,49,95,57,54,0);
       let halffieldimageS = false;
       let register_bu = false;
       let owngoal3: Array<any> = [String.fromCharCode(108,95,54,56,95,115,97,116,117,114,97,116,101,0), String.fromCharCode(97,95,55,56,95,104,111,108,100,101,114,115,0)];
      for (let q = 0; q < 3; q++) {
          let dropdownv = 0.0;
          let anythinkN = true;
          let analyticsT = false;
         halffieldimageS = !analyticsT;
         dropdownv += parseFloat(`${parseInt(`${dropdownv}`) ^ 1}`);
         anythinkN = 14.20 >= dropdownv || !anythinkN;
         analyticsT = dropdownv < 29.1 || anythinkN;
      }
      for (let z = 0; z < 1; z++) {
         scrollviewk /= Math.max(3, 2);
      }
       let iconsaveimageq: Array<any> = [String.fromCharCode(118,102,105,108,116,101,114,95,53,95,57,55,0), String.fromCharCode(116,95,57,50,95,102,97,117,99,101,116,115,0)];
      let baidu6 = scrollviewk <= 7598165;
      do {
          let unreadg = 4;
         scrollviewk /= Math.max(4, scrollviewk);
         unreadg &= unreadg + unreadg;
         if (baidu6) {
            break;
         }
      } while (baidu6 && ((iconsaveimageq.length << (Math.min(Math.abs(2), 1))) == 3 || (scrollviewk << (Math.min(iconsaveimageq.length, 3))) == 2));
      while (owngoal3.length == canvasM) {
         canvasM /= Math.max(5, scrollviewk | owngoal3.length);
         break;
      }
          let hooks6 = 1;
          let target0 = 5.0;
          let thumbnailz = String.fromCharCode(117,95,56,55,95,112,111,115,108,105,115,116,0);
         libjsijniprofilerA = `${(2 << (Math.min(Math.abs((register_bu ? 3 : 2)), 4)))}`;
         hooks6 >>= Math.min(Math.abs(parseInt(`${target0}`)), 3);
         target0 -= parseFloat(`${parseInt(`${target0}`) << (Math.min(1, Math.abs(hooks6)))}`);
         thumbnailz += `${thumbnailz.length / 1}`;
      let championh = 8208730 >= owngoal3.length;
      do {
         owngoal3.push(canvasM);
         if (championh) {
            break;
         }
      } while ((owngoal3.length == 5) && championh);
      let actionss = scrollviewk >= 8947660;
      do {
          let iconmegaphoneu = 3.0;
         scrollviewk -= 2;
         iconmegaphoneu *= parseInt(`${iconmegaphoneu}`);
         if (actionss) {
            break;
         }
      } while (((2 << (Math.min(5, Math.abs(canvasM)))) == 5) && actionss);
      while (libjsijniprofilerA.includes(`${owngoal3.length}`)) {
          let recommendationp = 5;
          let footballtrophyj = 5.0;
         owngoal3 = [((register_bu ? 3 : 2))];
         recommendationp /= Math.max(recommendationp, 4);
         footballtrophyj += parseFloat(`${parseInt(`${footballtrophyj}`) - 3}`);
         break;
      }
      let login6 = 5604774 <= owngoal3.length;
      do {
          let profileframea: Map<any, any> = new Map([[String.fromCharCode(116,95,48,95,116,121,112,101,99,111,100,101,0),true ], [String.fromCharCode(112,95,51,55,95,115,121,115,116,101,109,0),false ]]);
          let vipsport4 = 2.0;
          let libhermesP = String.fromCharCode(102,116,118,99,108,95,115,95,56,0);
          let mounting_ = String.fromCharCode(100,101,103,114,97,100,101,100,95,53,95,56,57,0);
          let stept = 3;
         owngoal3.push(mounting_.length);
         profileframea.set(`${vipsport4}`, 3);
         vipsport4 -= stept;
         libhermesP += `${stept + 2}`;
         mounting_ = `${profileframea.size}`;
         if (login6) {
            break;
         }
      } while (login6 && (canvasM < owngoal3.length));
      while (canvasM >= owngoal3.length) {
         owngoal3.push(iconsaveimageq.length);
         break;
      }
       let submitg = 0;
      let whiteanimationlive6 = register_bu ? !register_bu : register_bu;
      do {
         register_bu = (submitg & scrollviewk) < 36;
         if (whiteanimationlive6) {
            break;
         }
      } while (whiteanimationlive6 && (4 <= (1 >> (Math.min(4, iconsaveimageq.length)))));
          let nativemodulef: Array<any> = [421, 766];
          let libimagepipelines = String.fromCharCode(110,95,53,57,95,109,98,112,97,105,114,0);
         libjsijniprofilerA = `${2 & iconsaveimageq.length}`;
         nativemodulef = [nativemodulef.length];
         libimagepipelines = `${libimagepipelines.length + nativemodulef.length}`;
      iconsharefriendsC = `${rncorez.length}`;
   }
   while (4 <= defaultprofilepicY.length) {
       let mathv = String.fromCharCode(109,95,53,95,115,111,100,105,115,99,111,110,110,101,99,116,0);
       let iconmoreb = 3.0;
      for (let r = 0; r < 3; r++) {
         mathv += `${1 | parseInt(`${iconmoreb}`)}`;
      }
         mathv += `${parseInt(`${iconmoreb}`) - mathv.length}`;
          let gifgoalbgN = true;
          let defaultteamb = 4.0;
         mathv += "3";
         gifgoalbgN = defaultteamb >= 6.96;
         defaultteamb += (parseFloat(`${parseInt(`${defaultteamb}`) + (gifgoalbgN ? 4 : 1)}`));
      if (1 >= (mathv.length - 4) || (4 % (Math.max(1, mathv.length))) >= 5) {
          let reminderO: Map<any, any> = new Map([[String.fromCharCode(121,95,52,50,95,114,101,97,99,104,0),913], [String.fromCharCode(111,95,49,53,95,101,118,105,99,101,0),841]]);
         iconmoreb -= mathv.length;
         reminderO.set(`${reminderO.size}`, reminderO.size % (Math.max(reminderO.size, 10)));
      }
         mathv += `${mathv.length + parseInt(`${iconmoreb}`)}`;
      for (let b = 0; b < 1; b++) {
         iconmoreb /= Math.max(mathv.length, 2);
      }
      rewardP /= Math.max(2, parseFloat(`${iconpointscore1.size >> (Math.min(Math.abs(3), 1))}`));
      break;
   }
    

   if (string5 == String.fromCharCode(85,0) || rncorez.length >= 3) {
      string5 = `${((basketballdetailsbg5 ? 3 : 1) / (Math.max(4, indicatorU)))}`;
   }
       let smalle = String.fromCharCode(116,95,54,49,95,102,117,108,108,121,0);
       let rocket5 = 1.0;
       let editO = String.fromCharCode(97,95,52,56,95,102,114,101,101,100,0);
          let tramini1 = String.fromCharCode(102,95,49,53,95,117,110,116,114,97,99,107,0);
          let eyeopen4 = false;
         editO = `${3 & smalle.length}`;
         tramini1 = `${tramini1.length}`;
         eyeopen4 = tramini1.length == 26;
      if (!editO.startsWith(`${smalle.length}`)) {
          let topon7 = 4.0;
         smalle = `${1 + parseInt(`${rocket5}`)}`;
         topon7 *= 2;
      }
      for (let l = 0; l < 2; l++) {
         rocket5 += parseFloat(`${parseInt(`${rocket5}`) << (Math.min(smalle.length, 2))}`);
      }
         rocket5 *= parseFloat(`${editO.length - 3}`);
         editO += `${(String.fromCharCode(52,0) == smalle ? editO.length : smalle.length)}`;
      for (let a = 0; a < 2; a++) {
          let n_animationk = true;
          let iconviewerL: Map<any, any> = new Map([[String.fromCharCode(119,95,50,57,95,120,98,105,110,0),249], [String.fromCharCode(118,95,52,52,95,105,110,118,111,107,101,0),88]]);
         rocket5 /= Math.max(parseFloat(`${iconviewerL.size}`), 1);
         n_animationk = !n_animationk;
         iconviewerL = new Map([[`${n_animationk}`, 2]]);
      }
       let predictionbuttony = 0;
          let videobufferloadingj = 4.0;
         smalle += `${(String.fromCharCode(48,0) == editO ? editO.length : parseInt(`${rocket5}`))}`;
         videobufferloadingj += parseInt(`${videobufferloadingj}`);
      while (2 <= editO.length) {
          let iconviewergifa = 4;
         rocket5 -= parseFloat(`${predictionbuttony % (Math.max(1, 7))}`);
         iconviewergifa -= iconviewergifa;
         break;
      }
      rewardP -= parseFloat(`${editO.length}`);
    

      injuryv = `${parseInt(`${rewardP}`)}`;
      basketballdetailsbg5 = (buttonD.length % (Math.max(4, injuryv.length))) <= 67;
    

      accepted7 = `${parseInt(`${stationc}`)}`;
   if ((1 + defaultprofilepicY.length) == 4) {
      buttonD.push(string5.length);
   }
    

      iconpointscore1 = new Map([[`${buttonD.length}`, buttonD.length]]);
   if (injuryv.includes(`${defaultprofilepicY.length}`)) {
      defaultprofilepicY.push(buttonD.length - 3);
   }
    

      accepted7 = `${parseInt(`${rewardP}`) % 3}`;
   while (2 <= (1 >> (Math.min(5, wifirouter8.length))) || (wifirouter8.length >> (Math.min(Math.abs(1), 2))) <= 4) {
      wifirouter8 += `${string5.length & 3}`;
      break;
   }
    

      rewardP -= (parseFloat(`${accepted7 == String.fromCharCode(119,0) ? accepted7.length : iconsharefriendsC.length}`));
   for (let v = 0; v < 3; v++) {
      string5 += `${string5.length % 3}`;
   }
    

   let componentD = String.fromCharCode(97,52,100,0) == string5;
   do {
       let sharewhitec = 3.0;
       let mathA = 0.0;
       let gestureC = String.fromCharCode(107,101,121,119,111,114,100,95,120,95,50,55,0);
       let shareblackI = String.fromCharCode(104,107,100,102,95,121,95,51,48,0);
       let verticala = String.fromCharCode(118,105,115,105,98,105,116,121,95,122,95,53,0);
         gestureC += `${(verticala == String.fromCharCode(106,0) ? verticala.length : gestureC.length)}`;
       let vietnamO = 5;
      for (let w = 0; w < 1; w++) {
         mathA /= Math.max(parseFloat(`${1 & gestureC.length}`), 1);
      }
          let chatG: Map<any, any> = new Map([[String.fromCharCode(112,114,111,98,115,95,107,95,53,51,0),false ], [String.fromCharCode(105,95,54,95,102,108,111,97,116,115,0),false ]]);
         mathA /= Math.max(5, parseFloat(`${vietnamO}`));
         chatG = new Map([[`${chatG.size}`, 2 + chatG.size]]);
      if (2 <= verticala.length) {
         sharewhitec *= (verticala == String.fromCharCode(113,0) ? verticala.length : vietnamO);
      }
          let sheetQ = 4.0;
          let homeloadingm = 2;
         shareblackI = "1";
         sheetQ += parseInt(`${sheetQ}`) / 3;
         homeloadingm &= parseInt(`${sheetQ}`);
         gestureC += `${1 >> (Math.min(Math.abs(parseInt(`${mathA}`)), 3))}`;
          let greytickI = String.fromCharCode(105,95,57,49,95,114,101,110,97,109,101,0);
         gestureC += `${parseInt(`${sharewhitec}`)}`;
         greytickI = `${greytickI.length % (Math.max(7, greytickI.length))}`;
         verticala = "2";
      if ((vietnamO ^ 3) >= 2) {
         vietnamO >>= Math.min(5, Math.abs(3 ^ vietnamO));
      }
      while (gestureC != String.fromCharCode(57,0)) {
          let yellowscoreball1 = String.fromCharCode(109,111,116,105,111,110,112,105,120,101,108,115,95,111,95,51,48,0);
         verticala = `${2 - shareblackI.length}`;
         yellowscoreball1 = "3";
         break;
      }
      while (4 < (vietnamO % (Math.max(verticala.length, 10))) || 4 < (verticala.length % (Math.max(2, vietnamO)))) {
         vietnamO ^= 3 ^ shareblackI.length;
         break;
      }
         verticala = "2";
      while (gestureC == String.fromCharCode(67,0)) {
         shareblackI += `${shareblackI.length / 2}`;
         break;
      }
       let distp = String.fromCharCode(117,110,102,114,101,101,122,101,95,121,95,55,53,0);
      string5 = "3";
      if (componentD) {
         break;
      }
   } while ((!string5.endsWith(rncorez)) && componentD);
      buttonD = [((basketballdetailsbg5 ? 3 : 1) / (Math.max(parseInt(`${rewardP}`), 6)))];

    fetchData(searchKeyword, true);

      defaultprofilepicY.push(rncorez.length + buttonD.length);
      buttonD.push((1 << (Math.min(5, Math.abs((basketballdetailsbg5 ? 3 : 5))))));
    dispatch(addSearchHistory(searchKeyword));

   for (let q = 0; q < 1; q++) {
      stationc -= parseFloat(`${parseInt(`${libavfilterz}`) >> (Math.min(injuryv.length, 4))}`);
   }
   let tickU = rncorez.length <= 5263537;
   do {
      rncorez += `${buttonD.length | 3}`;
      if (tickU) {
         break;
      }
   } while (tickU && (5 >= rncorez.length));
    setShowResults(!showResults);
  };

  const clearHistory = useCallback(() => {
       let iconrightorangeu = 4.0;
    let defaultlogov = String.fromCharCode(99,111,110,100,105,116,105,111,110,97,108,95,49,95,50,51,0);
    let playx = String.fromCharCode(99,104,97,110,103,101,100,104,95,51,95,51,57,0);
    let recommendationa = 0;
    let carouselU: Map<any, any> = new Map([[String.fromCharCode(122,111,109,98,105,101,95,49,95,54,52,0),String.fromCharCode(99,95,52,48,0)], [String.fromCharCode(114,101,99,117,114,115,105,111,110,95,114,95,50,48,0),String.fromCharCode(102,105,114,101,98,97,115,101,95,49,95,49,52,0)]]);
    let kuaishou9 = 2;
    let indexR = 1.0;
    let tempT: Array<any> = [398, 833, 312];
    let chatbotphotof = 4.0;
    let downloaderH = 4.0;
    let nalyticsN = 4.0;
    let weiboR = String.fromCharCode(99,111,108,108,97,112,115,101,95,114,95,50,50,0);
    let package_ixI: Array<any> = [431, 638];
    let exampleimageS: Array<any> = [175, 461];
    let iconplayN: Array<any> = [15, 358, 851];
    let iconpipshrink7 = String.fromCharCode(113,117,111,116,105,101,110,116,95,107,95,56,51,0);
    let nextB = 2.0;
       let reddownarrowy: Map<any, any> = new Map([[String.fromCharCode(120,95,56,54,95,109,97,116,104,111,112,115,0),String.fromCharCode(102,105,102,97,95,111,95,55,52,0)], [String.fromCharCode(116,95,49,53,95,104,97,115,120,0),String.fromCharCode(118,100,112,97,117,95,48,95,54,57,0)]]);
      if (Array.from(reddownarrowy.values()).includes(reddownarrowy.size)) {
         reddownarrowy.set(`${reddownarrowy.size}`, reddownarrowy.size * reddownarrowy.size);
      }
      if (4 >= (reddownarrowy.size ^ 1) && 1 >= (reddownarrowy.size ^ reddownarrowy.size)) {
         reddownarrowy = new Map([[`${reddownarrowy.size}`, reddownarrowy.size / 1]]);
      }
      while ((reddownarrowy.size >> (Math.min(Math.abs(reddownarrowy.size), 4))) == 5) {
          let iconviewergifp = 5.0;
          let statisticsactiver = 0.0;
          let firebasem: Map<any, any> = new Map([[String.fromCharCode(105,95,54,57,95,97,100,106,101,99,116,105,118,101,115,0),256], [String.fromCharCode(101,95,50,54,95,97,99,111,109,112,114,101,115,115,111,114,0),87]]);
          let chatk = 2;
         reddownarrowy.set(`${firebasem.size}`, firebasem.size + 2);
         iconviewergifp *= parseInt(`${iconviewergifp}`) / (Math.max(10, chatk));
         statisticsactiver += 3 % (Math.max(parseInt(`${statisticsactiver}`), 7));
         chatk -= 1 / (Math.max(chatk, 2));
         break;
      }
      indexR /= Math.max(parseInt(`${chatbotphotof}`), 2);
      iconrightorangeu *= parseFloat(`${defaultlogov.length}`);
      nalyticsN *= parseInt(`${iconrightorangeu}`);
      downloaderH -= parseFloat(`${3}`);
       let searchbarx = 3.0;
       let homeplayerJ = 4.0;
       let profileactiver = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,111,114,95,99,95,50,50,0);
      if ((homeplayerJ + 5.98) < 2.53 || (searchbarx * 5.98) < 3.94) {
         homeplayerJ += 2 - parseInt(`${homeplayerJ}`);
      }
      while ((5.90 * homeplayerJ) >= 1.3 && (5.90 * searchbarx) >= 4.80) {
         homeplayerJ -= profileactiver.length;
         break;
      }
          let corneri = String.fromCharCode(100,101,116,101,114,109,105,110,97,98,108,101,95,110,95,54,56,0);
         homeplayerJ -= 2;
         corneri += "2";
          let mbnativeK = String.fromCharCode(101,95,57,53,95,98,114,111,97,100,99,97,115,116,115,0);
          let whitetickN = 3;
         homeplayerJ *= 2;
         mbnativeK += `${mbnativeK.length % 1}`;
         whitetickN -= (mbnativeK == String.fromCharCode(56,0) ? whitetickN : mbnativeK.length);
         searchbarx /= Math.max(2, parseInt(`${searchbarx}`) / 2);
         searchbarx += 2 >> (Math.min(2, profileactiver.length));
          let homeplayerI = 2.0;
          let iconuserE = 3;
         profileactiver += `${parseInt(`${homeplayerI}`)}`;
         homeplayerI += parseFloat(`${iconuserE}`);
      let expandM = String.fromCharCode(54,97,116,0) == profileactiver;
      do {
          let analyticq = 0.0;
          let rncorek: Map<any, any> = new Map([[String.fromCharCode(104,95,53,50,95,114,101,116,114,105,101,118,105,110,103,0),true ], [String.fromCharCode(108,95,56,95,117,110,119,114,97,112,112,101,100,0),false ], [String.fromCharCode(115,95,54,48,95,102,97,105,108,115,0),false ]]);
          let sharewhite1 = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,115,95,113,95,54,53,0);
          let usernameG = 1.0;
          let libreactM = 1;
         profileactiver += `${sharewhite1.length}`;
         analyticq *= parseFloat(`${parseInt(`${analyticq}`) + 2}`);
         rncorek.set(`${usernameG}`, libreactM);
         sharewhite1 += `${2 + parseInt(`${usernameG}`)}`;
         libreactM ^= 3 + rncorek.size;
         if (expandM) {
            break;
         }
      } while (expandM && (5 == (profileactiver.length & 2)));
       let submitv = String.fromCharCode(119,95,57,49,95,105,110,99,111,110,115,105,115,116,101,110,99,121,0);
      indexR /= Math.max(3, recommendationa);
   let detailu = 7226534.0 >= chatbotphotof;
   do {
      chatbotphotof /= Math.max((parseFloat(`${defaultlogov == String.fromCharCode(69,0) ? parseInt(`${iconrightorangeu}`) : defaultlogov.length}`)), 4);
      if (detailu) {
         break;
      }
   } while (detailu && (2.88 >= (2.1 + chatbotphotof)));
   for (let w = 0; w < 1; w++) {
      carouselU = new Map([[`${carouselU.size}`, carouselU.size]]);
   }
   for (let l = 0; l < 1; l++) {
      iconrightorangeu /= Math.max(parseFloat(`${parseInt(`${indexR}`) << (Math.min(Math.abs(parseInt(`${nalyticsN}`)), 4))}`), 4);
   }
      weiboR += `${carouselU.size % 1}`;
   while (tempT.length > recommendationa) {
       let shareblack2 = String.fromCharCode(98,95,51,53,95,98,111,114,100,101,114,108,101,115,115,0);
       let predictionactiveg: Map<any, any> = new Map([[String.fromCharCode(105,110,116,99,104,101,99,107,95,118,95,56,0),false ], [String.fromCharCode(112,114,111,112,97,103,97,116,105,111,110,95,98,95,56,51,0),false ]]);
       let spinner7 = String.fromCharCode(118,95,52,51,95,115,97,110,100,98,111,120,0);
         shareblack2 = `${shareblack2.length % (Math.max(1, 1))}`;
      for (let q = 0; q < 1; q++) {
         spinner7 += `${shareblack2.length}`;
      }
          let w_viewC: Array<any> = [852, 40, 588];
          let controls5 = String.fromCharCode(98,95,57,50,95,116,111,110,101,0);
          let tumbnailU = String.fromCharCode(105,95,55,48,95,115,112,105,108,108,0);
         shareblack2 += `${spinner7.length}`;
         w_viewC = [controls5.length];
         controls5 = `${w_viewC.length ^ controls5.length}`;
         tumbnailU += `${3 / (Math.max(10, controls5.length))}`;
      let dicelogoQ = String.fromCharCode(107,98,119,95,117,0) == shareblack2;
      do {
         shareblack2 = `${1 * predictionactiveg.size}`;
         if (dicelogoQ) {
            break;
         }
      } while ((spinner7 == shareblack2) && dicelogoQ);
         shareblack2 = `${spinner7.length + shareblack2.length}`;
          let largesoundH = String.fromCharCode(99,95,55,54,95,97,117,116,104,0);
          let awayteamfieldU = String.fromCharCode(107,95,54,51,95,115,117,98,113,117,101,114,121,0);
          let iconsharefriendsn = String.fromCharCode(116,104,114,101,101,95,116,95,50,55,0);
         shareblack2 = `${predictionactiveg.size * 2}`;
         largesoundH = `${iconsharefriendsn.length}`;
         awayteamfieldU = `${awayteamfieldU.length}`;
         iconsharefriendsn = "3";
      if (4 < (predictionactiveg.size & 5) && 4 < (5 & spinner7.length)) {
          let ajaxB = 5.0;
         spinner7 = `${spinner7.length}`;
         ajaxB -= parseInt(`${ajaxB}`);
      }
       let statsy = 4;
       let libsentryr = 5;
          let megaphoner: Map<any, any> = new Map([[String.fromCharCode(122,95,57,50,0),93], [String.fromCharCode(103,95,49,49,95,116,101,114,109,105,110,97,116,105,111,110,0),376], [String.fromCharCode(107,95,50,48,95,97,118,112,114,105,118,0),796]]);
         shareblack2 += `${megaphoner.size << (Math.min(3, Math.abs(libsentryr)))}`;
      tempT.push(carouselU.size << (Math.min(Math.abs(2), 3)));
      break;
   }
      tempT.push(carouselU.size - 2);
   let heartz = 6925286.0 <= indexR;
   do {
      indexR += package_ixI.length;
      if (heartz) {
         break;
      }
   } while (heartz && (nalyticsN <= indexR));
   for (let e = 0; e < 2; e++) {
      nalyticsN += exampleimageS.length;
   }
   for (let f = 0; f < 1; f++) {
      weiboR += `${parseInt(`${downloaderH}`) - 3}`;
   }
   let imagenomoredatap = 9195540.0 >= iconrightorangeu;
   do {
      iconrightorangeu -= (parseFloat(`${String.fromCharCode(68,0) == playx ? parseInt(`${downloaderH}`) : playx.length}`));
      if (imagenomoredatap) {
         break;
      }
   } while ((!weiboR.includes(`${iconrightorangeu}`)) && imagenomoredatap);
   if (weiboR != String.fromCharCode(53,0)) {
       let cancelk = true;
         cancelk = (!cancelk ? cancelk : cancelk);
         cancelk = (cancelk ? !cancelk : cancelk);
      if (!cancelk && cancelk) {
         cancelk = (cancelk ? cancelk : cancelk);
      }
      playx += `${playx.length >> (Math.min(1, package_ixI.length))}`;
   }
   if (carouselU.get(`${recommendationa}`) != null) {
       let backn = String.fromCharCode(105,110,116,116,121,112,101,115,95,120,95,57,53,0);
       let filledM = 1;
         backn += `${backn.length}`;
      for (let u = 0; u < 2; u++) {
         backn += `${(String.fromCharCode(117,0) == backn ? backn.length : filledM)}`;
      }
      let guide6 = 7215774 >= filledM;
      do {
         filledM >>= Math.min(Math.abs(filledM), 1);
         if (guide6) {
            break;
         }
      } while ((!backn.endsWith(`${filledM}`)) && guide6);
       let buildR = String.fromCharCode(115,99,97,110,115,116,97,116,117,115,95,101,95,53,54,0);
       let libpangleflippedX = String.fromCharCode(109,98,101,100,95,110,95,57,50,0);
         backn = "1";
      for (let x = 0; x < 2; x++) {
         backn += `${2 / (Math.max(9, buildR.length))}`;
      }
      recommendationa |= tempT.length | 1;
   }
       let defaultbasketballbgy = 0;
       let shrinky: Map<any, any> = new Map([[String.fromCharCode(117,110,105,110,105,116,95,119,95,56,52,0),532], [String.fromCharCode(108,95,55,55,95,101,97,103,101,114,0),572], [String.fromCharCode(114,101,109,111,116,101,95,121,95,52,52,0),284]]);
      if ((defaultbasketballbgy ^ shrinky.size) == 4) {
         shrinky = new Map([[`${shrinky.size}`, shrinky.size]]);
      }
      let footballtrophyG = defaultbasketballbgy <= 6955962;
      do {
         defaultbasketballbgy *= defaultbasketballbgy;
         if (footballtrophyG) {
            break;
         }
      } while ((3 >= (defaultbasketballbgy << (Math.min(Math.abs(2), 5)))) && footballtrophyG);
         shrinky.set(`${defaultbasketballbgy}`, defaultbasketballbgy);
          let project1 = String.fromCharCode(112,95,57,95,101,115,99,97,112,101,0);
          let libflipper7 = String.fromCharCode(99,95,54,55,95,112,97,114,97,109,0);
          let twitterC = 4;
         defaultbasketballbgy %= Math.max(2, twitterC);
         project1 += `${3 >> (Math.min(3, project1.length))}`;
         libflipper7 = `${(String.fromCharCode(49,0) == project1 ? libflipper7.length : project1.length)}`;
         twitterC &= project1.length >> (Math.min(Math.abs(1), 1));
         shrinky.set(`${defaultbasketballbgy}`, shrinky.size);
          let package_4I: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,97,100,95,49,95,54,57,0),446], [String.fromCharCode(115,97,109,112,108,101,114,95,97,95,53,50,0),551], [String.fromCharCode(115,117,98,112,111,105,110,116,95,108,95,57,51,0),756]]);
         defaultbasketballbgy &= defaultbasketballbgy | 3;
         package_4I = new Map([[`${package_4I.size}`, package_4I.size]]);
      recommendationa -= 2;
       let iconC = true;
         iconC = !iconC;
         iconC = !iconC && iconC;
      let aboutX = iconC ? !iconC : iconC;
      do {
          let imagenomoredataC: Array<any> = [267, 647];
         iconC = (((!iconC ? imagenomoredataC.length : 25) % (Math.max(imagenomoredataC.length, 10))) <= 25);
         if (aboutX) {
            break;
         }
      } while (aboutX && (iconC));
      downloaderH *= parseFloat(`${playx.length}`);
      weiboR += `${weiboR.length}`;
      nalyticsN *= defaultlogov.length & weiboR.length;
   if ((kuaishou9 - 1) < 1) {
       let componentsY = 5;
       let iconarrowrightorangep = String.fromCharCode(99,102,116,115,116,95,100,95,57,49,0);
       let giftbuttonS = String.fromCharCode(108,95,53,54,95,100,101,115,99,114,0);
      let window_woe = iconarrowrightorangep == String.fromCharCode(118,52,49,52,50,112,110,95,118,122,0);
      do {
         iconarrowrightorangep = `${2 & iconarrowrightorangep.length}`;
         if (window_woe) {
            break;
         }
      } while ((iconarrowrightorangep.endsWith(`${componentsY}`)) && window_woe);
      let regengE = String.fromCharCode(117,110,111,106,117,48,109,105,0) == iconarrowrightorangep;
      do {
         iconarrowrightorangep += `${2 ^ iconarrowrightorangep.length}`;
         if (regengE) {
            break;
         }
      } while (regengE && (2 == iconarrowrightorangep.length && giftbuttonS.length == 2));
         componentsY -= 2;
      while ((2 << (Math.min(3, Math.abs(componentsY)))) > 3) {
         componentsY >>= Math.min(giftbuttonS.length, 1);
         break;
      }
      for (let u = 0; u < 2; u++) {
          let release_1jD = false;
          let sportc: Array<any> = [554, 867];
          let description_ryw: Map<any, any> = new Map([[String.fromCharCode(110,95,51,95,100,105,97,108,108,101,100,0),482], [String.fromCharCode(117,95,57,50,95,97,118,115,117,98,116,105,116,108,101,0),410], [String.fromCharCode(112,97,114,97,109,95,110,95,53,48,0),190]]);
          let grey3 = String.fromCharCode(115,117,98,115,116,114,105,110,103,115,95,115,95,51,50,0);
          let sansd = 5.0;
         iconarrowrightorangep += `${1 & componentsY}`;
         release_1jD = sansd >= 82.19;
         sportc.push(1);
         description_ryw = new Map([[`${description_ryw.size}`, 1]]);
         grey3 = `${(String.fromCharCode(122,0) == grey3 ? grey3.length : parseInt(`${sansd}`))}`;
      }
         giftbuttonS = `${iconarrowrightorangep.length ^ componentsY}`;
         componentsY <<= Math.min(Math.abs((String.fromCharCode(65,0) == iconarrowrightorangep ? iconarrowrightorangep.length : componentsY)), 4);
         componentsY &= componentsY;
       let flaga = 1.0;
       let textR = 1.0;
      kuaishou9 ^= parseInt(`${iconrightorangeu}`) << (Math.min(3, Math.abs(3)));
   }
      package_ixI.push(exampleimageS.length / 2);
   let backwardT = tempT.length >= 9387321;
   do {
       let typingloadingV = String.fromCharCode(111,95,54,53,95,100,111,103,115,0);
       let carousel4 = String.fromCharCode(122,95,57,49,95,97,115,110,0);
       let gemfile7 = String.fromCharCode(100,117,109,109,121,95,100,95,56,55,0);
         carousel4 += `${carousel4.length}`;
       let questicons = 5.0;
       let colorss = 5.0;
      for (let o = 0; o < 2; o++) {
         gemfile7 = `${gemfile7.length | 1}`;
      }
       let greytickR: Array<any> = [163, 290];
       let statsg: Array<any> = [String.fromCharCode(99,117,114,118,101,115,95,55,95,52,52,0), String.fromCharCode(99,111,109,112,111,115,101,95,104,95,56,56,0), String.fromCharCode(115,104,111,114,116,101,110,95,99,95,50,57,0)];
       let closej = false;
         carousel4 = "2";
          let chinao = 5.0;
          let tailQ: Array<any> = [139, 836, 922];
          let application0 = 2;
         greytickR = [tailQ.length % (Math.max(1, 1))];
         chinao /= Math.max(application0 & 3, 5);
         tailQ = [3];
         application0 *= 1;
      if (!carousel4.endsWith(`${closej}`)) {
         closej = (((closej ? statsg.length : 55) / (Math.max(8, statsg.length))) > 55);
      }
      if (!gemfile7.startsWith(`${colorss}`)) {
         colorss /= Math.max(parseFloat(`${1 | typingloadingV.length}`), 1);
      }
      tempT = [parseInt(`${chatbotphotof}`) ^ 1];
      if (backwardT) {
         break;
      }
   } while (backwardT && (tempT.includes(iconrightorangeu)));

    dispatch(clearSearchHistory());
  }, []);

  
  const onClickSearchResult = useCallback(() => {
       let reward1: Array<any> = [337, 983];
    let typesT = String.fromCharCode(121,95,52,51,95,100,101,114,105,118,97,116,105,118,101,0);
    let overlayU: Array<any> = [427, 623];
    let iconcalendary: Map<any, any> = new Map([[String.fromCharCode(97,114,116,95,108,95,57,54,0),false ], [String.fromCharCode(113,95,53,54,95,117,115,108,101,101,112,0),false ]]);
    let videocommon9 = 2.0;
    let contextJ = String.fromCharCode(118,95,49,55,95,114,101,106,101,99,116,105,111,110,0);
    let carouselS = 5;
    let activityN: Map<any, any> = new Map([[String.fromCharCode(119,95,50,50,95,111,117,112,117,116,0),String.fromCharCode(105,95,53,50,95,114,111,113,118,105,100,101,111,0)], [String.fromCharCode(118,95,57,56,95,112,101,110,97,108,116,121,0),String.fromCharCode(100,101,99,108,97,114,101,95,117,95,55,56,0)], [String.fromCharCode(119,95,54,50,95,114,111,117,116,101,0),String.fromCharCode(108,95,52,49,95,99,108,105,112,116,101,115,116,0)]]);
    let moviesZ = String.fromCharCode(100,101,105,110,116,95,110,95,56,51,0);
   for (let o = 0; o < 3; o++) {
      iconcalendary.set(`${typesT}`, 1 - typesT.length);
   }
   if (4 > (parseInt(`${videocommon9}`) * typesT.length) && (videocommon9 * 3.73) > 1.15) {
      videocommon9 /= Math.max(1, parseFloat(`${iconcalendary.size}`));
   }
      activityN = new Map([[`${iconcalendary.size}`, 3]]);
      typesT += `${iconcalendary.size << (Math.min(3, Math.abs(parseInt(`${videocommon9}`))))}`;
   let darkO = 7979461.0 <= videocommon9;
   do {
       let indicatorE = String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,95,115,95,54,54,0);
       let plashB = String.fromCharCode(105,110,116,101,114,120,95,105,95,54,56,0);
         plashB = `${plashB.length}`;
       let cornerj: Array<any> = [217, 35];
       let update_eoc: Array<any> = [710, 228, 154];
       let iconorientationJ: Array<any> = [507, 691, 919];
      for (let o = 0; o < 3; o++) {
         indicatorE += `${cornerj.length}`;
      }
         indicatorE = `${cornerj.length}`;
         plashB = `${plashB.length % 3}`;
      videocommon9 /= Math.max(3, parseFloat(`${2 + carouselS}`));
      if (darkO) {
         break;
      }
   } while (((contextJ.length - 2) <= 3 || (parseInt(`${videocommon9}`) - contextJ.length) <= 2) && darkO);
   for (let n = 0; n < 1; n++) {
       let iconchatsendg = String.fromCharCode(99,111,110,100,101,110,115,97,98,108,101,95,118,95,49,55,0);
       let selectionH = String.fromCharCode(110,95,50,95,121,117,118,110,118,99,0);
       let blackF = 4.0;
          let darkk = 4;
         selectionH += "2";
         darkk -= darkk - 3;
      if (!selectionH.startsWith(`${iconchatsendg.length}`)) {
         iconchatsendg += `${iconchatsendg.length | selectionH.length}`;
      }
          let defaultfootballbgf: Map<any, any> = new Map([[String.fromCharCode(115,95,56,52,95,97,99,99,101,108,101,114,97,116,101,100,0),499], [String.fromCharCode(116,105,108,116,95,104,95,56,50,0),338]]);
          let collectionD = String.fromCharCode(104,95,55,49,95,105,110,105,116,118,0);
         selectionH = `${(String.fromCharCode(112,0) == selectionH ? collectionD.length : selectionH.length)}`;
         defaultfootballbgf = new Map([[`${defaultfootballbgf.size}`, defaultfootballbgf.size ^ 1]]);
         collectionD += `${defaultfootballbgf.size & 3}`;
      for (let l = 0; l < 3; l++) {
          let modelS = 4;
         iconchatsendg = `${iconchatsendg.length}`;
         modelS %= Math.max(modelS << (Math.min(Math.abs(modelS), 3)), 5);
      }
      if (iconchatsendg != String.fromCharCode(106,0)) {
          let traminiP = 0.0;
         selectionH = `${iconchatsendg.length}`;
         traminiP *= parseFloat(`${parseInt(`${traminiP}`) * 3}`);
      }
          let serviceW = 0.0;
          let middlewareh = true;
          let darke = true;
         selectionH += `${((darke ? 4 : 5) << (Math.min(Math.abs(parseInt(`${serviceW}`)), 3)))}`;
         serviceW += ((middlewareh ? 2 : 1) >> (Math.min(Math.abs((middlewareh ? 2 : 2)), 1)));
      let othermatchdetailbgo = iconchatsendg.length <= 7118629;
      do {
         iconchatsendg += `${selectionH.length & 1}`;
         if (othermatchdetailbgo) {
            break;
         }
      } while ((parseFloat(`${iconchatsendg.length}`) > blackF) && othermatchdetailbgo);
      let bangS = String.fromCharCode(103,112,50,57,108,53,49,50,56,0) == iconchatsendg;
      do {
         iconchatsendg = `${selectionH.length - 1}`;
         if (bangS) {
            break;
         }
      } while ((selectionH != String.fromCharCode(89,0)) && bangS);
      if (iconchatsendg.endsWith(`${blackF}`)) {
         iconchatsendg += `${selectionH.length / (Math.max(iconchatsendg.length, 10))}`;
      }
      contextJ = `${parseInt(`${blackF}`) + reward1.length}`;
   }
   if (Array.from(activityN.keys()).includes(`${videocommon9}`)) {
       let borderlessT = 5.0;
       let miniO = String.fromCharCode(120,95,56,56,95,100,105,115,112,97,116,99,104,0);
         miniO = `${miniO.length}`;
      if (3 <= (1 ^ miniO.length) || 3 <= (1 << (Math.min(3, miniO.length)))) {
          let typingG = String.fromCharCode(107,95,50,52,95,112,111,119,116,97,98,108,101,0);
         miniO = `${parseInt(`${borderlessT}`) & 1}`;
         typingG += `${typingG.length % (Math.max(1, 10))}`;
      }
      for (let w = 0; w < 1; w++) {
          let paginationd: Map<any, any> = new Map([[String.fromCharCode(118,111,116,101,100,95,109,95,55,55,0),608], [String.fromCharCode(113,95,56,56,95,109,117,108,116,105,112,108,121,120,0),938]]);
          let qaagO: Map<any, any> = new Map([[String.fromCharCode(100,95,54,51,95,99,111,110,116,111,108,108,101,114,0),74], [String.fromCharCode(105,95,51,53,95,110,111,110,0),7], [String.fromCharCode(101,95,54,55,95,115,109,104,100,0),947]]);
         miniO += "2";
         paginationd.set(`${paginationd.size}`, 1);
         qaagO.set(`${qaagO.size}`, qaagO.size >> (Math.min(Math.abs(paginationd.size), 3)));
      }
          let smallj = String.fromCharCode(122,111,110,101,105,110,102,111,95,56,95,51,51,0);
         miniO = `${parseInt(`${borderlessT}`) * 2}`;
         smallj += "3";
      if (borderlessT > parseFloat(`${miniO.length}`)) {
         miniO = `${miniO.length ^ parseInt(`${borderlessT}`)}`;
      }
         borderlessT -= parseFloat(`${2}`);
      activityN.set(`${reward1.length}`, 2 << (Math.min(2, reward1.length)));
   }
   for (let k = 0; k < 2; k++) {
      contextJ = `${2 + parseInt(`${videocommon9}`)}`;
   }
   for (let e = 0; e < 2; e++) {
      contextJ = `${activityN.size | overlayU.length}`;
   }
      typesT = `${parseInt(`${videocommon9}`) & contextJ.length}`;
   while (5 >= (overlayU.length * carouselS) || (carouselS * 5) >= 1) {
      overlayU.push((String.fromCharCode(49,0) == typesT ? typesT.length : iconcalendary.size));
      break;
   }
   for (let s = 0; s < 3; s++) {
      typesT += `${reward1.length | carouselS}`;
   }
   for (let t = 0; t < 3; t++) {
      activityN.set(typesT, reward1.length | 2);
   }
   for (let x = 0; x < 3; x++) {
      iconcalendary = new Map([[`${overlayU.length}`, overlayU.length]]);
   }
       let points = String.fromCharCode(110,95,52,50,95,114,116,109,112,100,104,0);
      if (points.length < 1) {
         points += "1";
      }
      while (points != String.fromCharCode(57,0)) {
          let positionfieldF: Array<any> = [740, 348, 935];
          let cornery: Array<any> = [825, 188];
          let detailk = 0.0;
         points = `${points.length}`;
         positionfieldF.push(positionfieldF.length >> (Math.min(cornery.length, 2)));
         cornery.push(cornery.length & parseInt(`${detailk}`));
         detailk /= Math.max(parseFloat(`${positionfieldF.length ^ parseInt(`${detailk}`)}`), 2);
         break;
      }
       let iconsaveimageW = String.fromCharCode(103,117,101,115,115,95,117,95,53,51,0);
       let productn = String.fromCharCode(103,98,114,97,112,95,107,95,50,55,0);
      contextJ = `${activityN.size}`;
   let agreement2 = String.fromCharCode(57,54,119,116,113,51,0) == typesT;
   do {
      typesT = "3";
      if (agreement2) {
         break;
      }
   } while ((4 < (overlayU.length >> (Math.min(typesT.length, 5))) && (overlayU.length >> (Math.min(Math.abs(4), 1))) < 2) && agreement2);
   while (3 > (4 % (Math.max(2, carouselS))) || 1 > (4 % (Math.max(8, activityN.size)))) {
      carouselS /= Math.max(3, activityN.size);
      break;
   }
   for (let m = 0; m < 1; m++) {
      overlayU.push(overlayU.length + parseInt(`${videocommon9}`));
   }
      videocommon9 *= parseFloat(`${1}`);

    wawa_dacccfaabfbcbadeebddcabacdffdbc_video.searchResultClicksAnalytics();
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
            source={require("@static/images/libjsijniprofilerRncore.gif")}
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
    color: "whiteanimationliveFast",
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
