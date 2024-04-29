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
import OrderedSearchResultsList from "../../components/search/tt_sina_mode";
import SearchResultList from "../../components/search/tt_link_down";
import ScreenContainer from "../../components/container/tt_backward";
import BackButton from "../../components/button/tt_moon_favicon_button";
import SearchIcon from "@static/images/lockExpandHistory.svg";
import ClearIcon from "@static/images/matchesStringUpdate_ex.svg";
import { useQuery } from "@tanstack/react-query";

import { ttReportInjury } from "@type/tt_line_borderless";
import { RootStackScreenProps } from "@type/tt_temperature";
import { API_DOMAIN } from "@utility/tt_trophy_cross";
import VodWithDescriptionList from "../../components/vod/tt_carousel_circle";
import { useAppDispatch, useAppSelector } from "@hooks/tt_spec_download";
import { ttOrange } from "@redux/tt_updates_bottom";
import FastImage from "../../components/common/tt_connection";
import {
  addSearchHistory,
  clearSearchHistory,
} from "@redux/actions/tt_favorite_downloaded";
import Animated, {
  FadeInUp,
  FadeOutUp,
  useAnimatedStyle,
} from "react-native-reanimated";
import ClearHistoryIcon from "@static/images/grayBellTurn.svg";
import EmptyList from "../../components/common/tt_logo_desc";
import appsFlyer from "react-native-appsflyer";
import ConfirmationModal from "../../components/modal/tt_styles";
import { ttConfirmationChinasame } from "@api";
import tt_humidity_guide from "../../../Umeng/tt_humidity_guide";

export default ({ navigation, route }: RootStackScreenProps<"搜索">) => {
  const [search, setSearch] = useState("");
  const [placeholderSearch, setPlaceHolderSearch] = useState(
    route.params.initial
  );

  const [searchTimer, setSearchTimer] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [searchResults, setSearchResults] = useState<Array<ttReportInjury>>(
    []
  );
  const [showResults, setShowResults] = useState(false);
  const [searchLimit, setSearchLimit] = useState(0)

  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(
    ({ searchHistoryReducer }: ttOrange) => searchHistoryReducer
  );
  const [isFetching, setisFetching] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { colors, textVariants, spacing, icons } = useTheme();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { data: recommendations } = useQuery({
    queryKey: ["recommendationList"],
    queryFn: () => ttConfirmationChinasame.getListByRecommendations(),
  });

  async function fetchData(text: string, userSearch: boolean = false) {
    setisFetching(true);

    
    if (userSearch && text.length > 0) tt_humidity_guide.searchKeywordAnalytics(text);
    

    ttConfirmationChinasame.getListByKeyword(text)
      .then((data) => {
        setSearchTimer(0);

        if (data.length <= 0) {
          setSearchResults([]);
        } else {
          setSearchResults(data);

          
          if (userSearch) tt_humidity_guide.searchResultViewsAnalytics();
          
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
    ttConfirmationChinasame.getListByKeyword(text, {
      page: nextPage,
    }).then((data) => {
      setSearchTimer(0);

      if (data.length <= 0) {
        setHasMore(false); 
      } else {
        
        setSearchResults([...searchResults, ...json.data.List]);
        setPage(nextPage);
        
        if (userSearch) tt_humidity_guide.searchResultViewsAnalytics();
        
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
       let settingE = String.fromCharCode(101,95,54,51,95,103,108,111,98,97,108,115,0);
    let nativeexV: Map<any, any> = new Map([[String.fromCharCode(114,101,115,116,97,107,101,95,115,95,51,48,0),133], [String.fromCharCode(97,116,101,120,105,116,95,120,95,57,54,0),592], [String.fromCharCode(113,95,49,54,95,121,97,100,105,102,0),353]]);
    let prediction4 = String.fromCharCode(119,95,54,52,95,118,101,99,0);
    let fileS: Array<any> = [865, 971, 352];
    let routerc = 3.0;
    let countryt = String.fromCharCode(119,95,57,57,95,105,102,97,100,100,114,115,0);
    let shirtn = String.fromCharCode(111,118,101,114,108,97,121,95,110,95,49,55,0);
    let commons = 5.0;
    let appsU = false;
    let bridgeY = 1.0;
    let moreq = 3;
    let appleY = String.fromCharCode(114,101,115,116,114,105,99,116,95,52,95,55,48,0);
    let selectionv = true;
    let prediction6n = String.fromCharCode(113,95,56,49,95,98,105,116,115,116,114,0);
    let taiwanV = 3.0;
   if ((fileS.length ^ settingE.length) < 5) {
      fileS.push(settingE.length);
   }
      moreq &= (shirtn == String.fromCharCode(104,0) ? shirtn.length : (appsU ? 1 : 3));
      moreq >>= Math.min(Math.abs((String.fromCharCode(120,0) == countryt ? countryt.length : parseInt(`${bridgeY}`))), 3);
   while ((nativeexV.size - 4) < 3 && 4 < (nativeexV.size - moreq)) {
      nativeexV.set(prediction4, prediction4.length ^ nativeexV.size);
      break;
   }
   while (!appsU && shirtn.length > 3) {
      appsU = countryt.includes(`${moreq}`);
      break;
   }
   let championw = 9346118.0 <= routerc;
   do {
      routerc += parseFloat(`${2 << (Math.min(1, prediction4.length))}`);
      if (championw) {
         break;
      }
   } while (championw && (parseFloat(`${prediction4.length}`) > routerc));
      moreq <<= Math.min(1, parseInt(`${Math.abs(((appsU ? 3 : 3) << (Math.min(Math.abs(3), 3))))}`));
       let slidery = String.fromCharCode(109,95,54,55,95,112,117,98,101,120,112,0);
      let xnews6 = slidery == String.fromCharCode(97,105,116,49,51,99,111,0);
      do {
          let philippinesm: Map<any, any> = new Map([[String.fromCharCode(97,110,115,119,101,114,95,53,95,51,57,0),412], [String.fromCharCode(115,95,56,50,95,111,112,101,114,97,116,105,111,110,115,0),517]]);
          let combinedS = 4.0;
         slidery = `${(String.fromCharCode(53,0) == slidery ? philippinesm.size : slidery.length)}`;
         philippinesm.set(`${combinedS}`, 1 * parseInt(`${combinedS}`));
         if (xnews6) {
            break;
         }
      } while ((1 <= slidery.length) && xnews6);
       let toponY = 3.0;
       let mbnativeadvancedF = 0.0;
          let mutedQ = 0.0;
          let pangleT = 1.0;
         toponY *= 2;
         mutedQ -= parseInt(`${pangleT}`);
         pangleT += parseFloat(`${2}`);
      fileS = [2];
   for (let n = 0; n < 1; n++) {
      appsU = shirtn.length == settingE.length;
   }
   if (moreq == 1) {
       let routerb = true;
       let matchq: Array<any> = [979, 225];
       let huaweiU = 1.0;
       let customd: Map<any, any> = new Map([[String.fromCharCode(115,116,115,99,95,98,95,49,55,0),931], [String.fromCharCode(97,95,53,55,95,115,117,110,114,105,115,101,115,101,116,0),122]]);
       let carousel8 = String.fromCharCode(116,95,54,55,95,116,104,114,101,97,100,103,114,111,117,112,0);
      if (1 >= carousel8.length) {
         carousel8 = "1";
      }
      if (1 >= (3 + carousel8.length)) {
         matchq = [(carousel8 == String.fromCharCode(79,0) ? carousel8.length : matchq.length)];
      }
          let rewardvideoF = 1.0;
          let switch_8uy = false;
          let u_playerF = false;
         matchq = [(String.fromCharCode(110,0) == carousel8 ? carousel8.length : matchq.length)];
         rewardvideoF /= Math.max((parseFloat(`${(u_playerF ? 1 : 2) + parseInt(`${rewardvideoF}`)}`)), 4);
         switch_8uy = u_playerF;
      if (carousel8.length > huaweiU) {
         carousel8 = `${1 - parseInt(`${huaweiU}`)}`;
      }
      if (huaweiU > 2.4) {
         matchq = [matchq.length >> (Math.min(Math.abs(2), 2))];
      }
      while (4.61 == huaweiU && (4.61 / (Math.max(10, huaweiU))) == 2.40) {
         huaweiU *= 3 * parseInt(`${huaweiU}`);
         break;
      }
       let dplus5 = 5;
       let grayf = 5;
         matchq.push(carousel8.length);
         dplus5 /= Math.max(((routerb ? 1 : 5) + 3), 5);
         routerb = dplus5 == 6 || 6 == grayf;
         matchq.push(1);
         huaweiU -= dplus5;
      let humidityh = 8488753 >= grayf;
      do {
         grayf ^= matchq.length % 3;
         if (humidityh) {
            break;
         }
      } while (humidityh && (dplus5 <= grayf));
         routerb = !routerb;
      let bottom6 = dplus5 >= 9705089;
      do {
         dplus5 %= Math.max(4, customd.size);
         if (bottom6) {
            break;
         }
      } while ((carousel8.startsWith(`${dplus5}`)) && bottom6);
      moreq |= ((appsU ? 2 : 5) << (Math.min(Math.abs(parseInt(`${huaweiU}`)), 1)));
   }
      appsU = commons >= routerc;
       let vignette4 = String.fromCharCode(98,114,97,99,101,95,99,95,53,56,0);
       let clubp = String.fromCharCode(98,114,111,119,110,95,106,95,52,48,0);
       let controlsZ: Map<any, any> = new Map([[String.fromCharCode(107,95,49,55,95,110,111,110,110,117,108,108,98,117,102,102,101,114,0),813], [String.fromCharCode(99,95,48,95,99,104,114,111,109,97,116,105,99,0),527]]);
      while (2 > vignette4.length) {
          let unticky = true;
          let uploadJ = 4.0;
         vignette4 += `${controlsZ.size}`;
         unticky = 21.52 >= uploadJ;
         uploadJ *= parseFloat(`${parseInt(`${uploadJ}`) >> (Math.min(Math.abs(parseInt(`${uploadJ}`)), 1))}`);
         break;
      }
      let optionsg = clubp.length >= 6803666;
      do {
          let logoutY = true;
         clubp = `${controlsZ.size}`;
         logoutY = (!logoutY ? !logoutY : !logoutY);
         if (optionsg) {
            break;
         }
      } while (optionsg && (clubp.length >= vignette4.length));
      if (clubp.endsWith(`${vignette4.length}`)) {
          let episodez = String.fromCharCode(99,108,101,97,114,95,57,95,56,0);
          let screenC = 1;
          let selectionM = String.fromCharCode(111,95,52,52,95,113,117,111,116,105,101,110,116,0);
         clubp += `${(clubp == String.fromCharCode(48,0) ? screenC : clubp.length)}`;
         episodez += `${(selectionM == String.fromCharCode(108,0) ? selectionM.length : episodez.length)}`;
         screenC |= episodez.length;
      }
         vignette4 += `${clubp.length}`;
          let controlsu: Array<any> = [494, 456];
          let leagueA = String.fromCharCode(110,101,103,111,116,105,97,116,101,95,53,95,50,0);
         controlsZ.set(vignette4, 1 ^ vignette4.length);
         controlsu.push(controlsu.length >> (Math.min(Math.abs(2), 2)));
         leagueA += `${controlsu.length | 3}`;
      for (let d = 0; d < 3; d++) {
         vignette4 += `${1 / (Math.max(10, controlsZ.size))}`;
      }
          let sentryX = 1.0;
          let playlistv = 2;
         clubp = "1";
         sentryX += playlistv;
         playlistv &= parseInt(`${sentryX}`) - playlistv;
      let navigationn = clubp.length <= 8042226;
      do {
          let whatsappf = String.fromCharCode(114,95,56,51,95,115,109,111,111,116,104,105,110,103,0);
         clubp += `${controlsZ.size}`;
         whatsappf += "1";
         if (navigationn) {
            break;
         }
      } while (navigationn && (clubp.length > vignette4.length));
      while (3 < (controlsZ.size ^ 1) && 1 < (controlsZ.size ^ vignette4.length)) {
         controlsZ = new Map([[`${controlsZ.size}`, 2 / (Math.max(10, controlsZ.size))]]);
         break;
      }
      commons -= parseFloat(`${3}`);
      countryt += `${(String.fromCharCode(95,0) == countryt ? (appsU ? 4 : 1) : countryt.length)}`;
   while (routerc < 3.73) {
      nativeexV = new Map([[`${bridgeY}`, appleY.length]]);
      break;
   }
      fileS = [2];
   while (3 <= (prediction4.length + 4)) {
       let penaltyG = String.fromCharCode(114,95,54,52,95,115,104,111,114,116,102,108,111,97,116,0);
          let commentE: Array<any> = [923, 291];
          let group6: Map<any, any> = new Map([[String.fromCharCode(97,115,99,105,105,95,115,95,55,54,0),String.fromCharCode(97,95,57,49,95,111,103,103,112,97,99,107,0)], [String.fromCharCode(112,97,114,97,108,108,97,120,95,107,95,49,49,0),String.fromCharCode(99,104,101,99,107,101,114,95,53,95,50,54,0)]]);
         penaltyG = `${penaltyG.length}`;
         commentE.push(commentE.length * 2);
         group6.set(`${commentE.length}`, commentE.length ^ group6.size);
         penaltyG = `${penaltyG.length}`;
      let relatede = penaltyG == String.fromCharCode(108,113,112,109,100,0);
      do {
          let home7: Array<any> = [80, 640];
          let activityG = 2;
          let modityw = false;
         penaltyG += `${penaltyG.length + 2}`;
         home7.push(2);
         activityG >>= Math.min(Math.abs(3), 2);
         modityw = 79 >= activityG;
         if (relatede) {
            break;
         }
      } while (relatede && (penaltyG != penaltyG));
      nativeexV = new Map([[`${moreq}`, countryt.length]]);
      break;
   }
   if (appleY.length <= 1) {
       let lightw = 0;
       let mathg = 1;
       let currentn: Map<any, any> = new Map([[String.fromCharCode(111,95,49,50,95,122,117,108,117,0),true ], [String.fromCharCode(107,95,54,55,95,115,117,98,115,116,97,116,101,0),true ], [String.fromCharCode(102,114,97,109,101,100,97,116,97,95,107,95,50,52,0),true ]]);
       let goalX = String.fromCharCode(111,95,54,55,95,112,97,99,107,101,116,105,122,97,116,105,111,110,0);
       let crownQ = false;
          let prediction6 = false;
          let mintegralT = true;
          let teamC = false;
         crownQ = prediction6;
         mintegralT = (!mintegralT ? teamC : !mintegralT);
         teamC = mintegralT;
         crownQ = (goalX.length ^ mathg) == 78;
          let memberE: Map<any, any> = new Map([[String.fromCharCode(112,97,103,101,105,110,95,117,95,52,57,0),609], [String.fromCharCode(116,111,107,101,95,104,95,57,49,0),512], [String.fromCharCode(107,95,53,48,95,111,114,105,101,110,116,97,116,105,111,110,0),542]]);
         mathg >>= Math.min(Math.abs(((crownQ ? 4 : 1))), 5);
         memberE = new Map([[`${memberE.size}`, memberE.size]]);
      let floaterg = goalX == String.fromCharCode(102,97,106,109,0);
      do {
          let fulld = 5.0;
         goalX += `${2 / (Math.max(10, parseInt(`${fulld}`)))}`;
         if (floaterg) {
            break;
         }
      } while (floaterg && (goalX.startsWith(`${mathg}`)));
          let mimoK = 0;
         lightw %= Math.max(5, currentn.size);
         mimoK /= Math.max(5, mimoK << (Math.min(Math.abs(mimoK), 4)));
      while (lightw == 5) {
         lightw += 1 >> (Math.min(3, goalX.length));
         break;
      }
       let popupB: Map<any, any> = new Map([[String.fromCharCode(113,95,53,53,95,111,98,106,0),String.fromCharCode(108,97,122,105,108,121,95,119,95,49,50,0)], [String.fromCharCode(120,95,49,50,95,97,112,112,101,97,114,101,110,99,101,0),String.fromCharCode(97,108,116,95,57,95,51,57,0)], [String.fromCharCode(104,95,51,54,95,115,111,108,118,101,100,0),String.fromCharCode(98,95,54,57,95,99,111,108,114,97,109,0)]]);
          let mailH = String.fromCharCode(114,116,109,112,100,104,95,109,95,49,53,0);
          let blackh = 5;
         currentn = new Map([[mailH, blackh]]);
       let viewsV: Map<any, any> = new Map([[String.fromCharCode(114,95,50,57,95,114,101,115,112,111,110,115,101,115,0),false ], [String.fromCharCode(99,104,114,111,109,105,110,97,110,99,101,95,97,95,49,48,0),true ], [String.fromCharCode(98,95,54,51,95,105,100,99,116,120,108,108,109,0),true ]]);
       let register_bW: Map<any, any> = new Map([[String.fromCharCode(118,95,56,52,95,112,101,101,114,115,0),false ], [String.fromCharCode(98,97,114,114,97,121,95,114,95,53,50,0),true ], [String.fromCharCode(111,110,121,120,99,95,99,95,55,56,0),true ]]);
      while (currentn.size > lightw) {
          let hejiE = true;
         lightw += popupB.size;
         hejiE = (hejiE ? !hejiE : !hejiE);
         break;
      }
      let filei = String.fromCharCode(113,118,98,98,107,49,0) == goalX;
      do {
         goalX += `${viewsV.size & lightw}`;
         if (filei) {
            break;
         }
      } while (((register_bW.size ^ 3) > 5) && filei);
          let loginD = 2.0;
          let info_ = 1;
         currentn.set(`${info_}`, 2 * info_);
         loginD += 1;
      let combiner = lightw <= 6042250;
      do {
         lightw += lightw * 1;
         if (combiner) {
            break;
         }
      } while (combiner && (lightw == 5));
         popupB = new Map([[`${lightw}`, lightw >> (Math.min(Math.abs(3), 2))]]);
         viewsV = new Map([[`${viewsV.size}`, popupB.size ^ viewsV.size]]);
      appleY = `${shirtn.length}`;
   }
   for (let s = 0; s < 2; s++) {
      nativeexV = new Map([[`${fileS.length}`, 2]]);
   }
   for (let g = 0; g < 3; g++) {
       let mbbanner9 = true;
       let resendV = 1;
       let leftq = 0.0;
       let favoriteN = String.fromCharCode(97,95,53,55,95,112,97,114,115,101,117,116,105,108,115,0);
      if (2.60 < (3.91 - leftq)) {
         mbbanner9 = resendV <= 38 || 25.19 <= leftq;
      }
      while (!favoriteN.endsWith(`${leftq}`)) {
         leftq += (parseFloat(`${parseInt(`${leftq}`) | (mbbanner9 ? 5 : 4)}`));
         break;
      }
       let reactnativejsf = String.fromCharCode(99,115,114,105,100,95,97,95,49,51,0);
      while (reactnativejsf != String.fromCharCode(116,0)) {
         favoriteN = `${((mbbanner9 ? 3 : 4) / (Math.max(favoriteN.length, 8)))}`;
         break;
      }
         resendV += resendV & parseInt(`${leftq}`);
      let fastS = 9126387 >= resendV;
      do {
         resendV &= resendV * 3;
         if (fastS) {
            break;
         }
      } while (fastS && (mbbanner9));
         resendV /= Math.max(5, parseInt(`${leftq}`) * 2);
         favoriteN += `${resendV + 3}`;
         reactnativejsf += `${favoriteN.length >> (Math.min(1, reactnativejsf.length))}`;
         mbbanner9 = reactnativejsf.includes(`${mbbanner9}`);
         resendV -= (String.fromCharCode(75,0) == favoriteN ? favoriteN.length : reactnativejsf.length);
         reactnativejsf += `${(favoriteN == String.fromCharCode(116,0) ? reactnativejsf.length : favoriteN.length)}`;
      bridgeY -= ((appsU ? 2 : 5) / 1);
   }
      routerc -= parseFloat(`${appleY.length}`);
   for (let z = 0; z < 3; z++) {
      routerc *= parseFloat(`${appleY.length ^ parseInt(`${bridgeY}`)}`);
   }
       let minit = 0.0;
       let becomeQ = false;
       let containerQ: Array<any> = [523, 797];
          let background2: Map<any, any> = new Map([[String.fromCharCode(112,95,56,56,95,101,120,112,97,110,115,105,111,110,0),647], [String.fromCharCode(103,101,111,98,116,97,103,95,54,95,50,56,0),193]]);
          let gesturesP = 0.0;
          let previewA = 3.0;
         becomeQ = 92.9 >= minit;
         background2.set(`${previewA}`, parseInt(`${gesturesP}`) + 2);
         gesturesP += 3 << (Math.min(Math.abs(parseInt(`${previewA}`)), 1));
       let tickj = 2.0;
       let groupA = 5.0;
       let memberf = 3;
       let promotion9 = 5;
         containerQ = [parseInt(`${groupA}`) | 1];
      while (2.50 <= minit) {
         containerQ.push(parseInt(`${tickj}`) | 2);
         break;
      }
          let v_imaget: Map<any, any> = new Map([[String.fromCharCode(116,100,108,116,95,100,95,57,52,0),340], [String.fromCharCode(122,95,52,53,95,112,114,101,102,101,116,99,104,101,114,0),16]]);
         becomeQ = !becomeQ;
         v_imaget.set(`${v_imaget.size}`, v_imaget.size & v_imaget.size);
         becomeQ = (memberf * tickj) >= 43;
      for (let k = 0; k < 1; k++) {
          let traminiy: Array<any> = [907, 834, 556];
          let paginationB = String.fromCharCode(100,95,51,50,95,116,111,110,101,0);
          let adult2 = 5.0;
          let pingu = false;
         becomeQ = paginationB.length <= traminiy.length;
         traminiy.push(parseInt(`${adult2}`) ^ 3);
         paginationB += `${(parseInt(`${adult2}`) * (pingu ? 5 : 5))}`;
         pingu = adult2 >= 98.9 && !pingu;
      }
         minit += 3;
      settingE = `${1 ^ prediction4.length}`;
      routerc /= Math.max(parseFloat(`${parseInt(`${commons}`) | parseInt(`${routerc}`)}`), 4);
   let historyN = 6150089 <= moreq;
   do {
      moreq /= Math.max((String.fromCharCode(113,0) == shirtn ? shirtn.length : moreq), 3);
      if (historyN) {
         break;
      }
   } while ((moreq <= 4) && historyN);
      shirtn = `${countryt.length << (Math.min(Math.abs(2), 3))}`;
      appsU = 14.47 >= commons;

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
       let chinasame8 = 1;
    let zhuboG: Array<any> = [43, 590];
    let sortW: Array<any> = [403, 51];
    let downU: Array<any> = [878, 470, 91];
    let target9 = 5.0;
    let resulte: Map<any, any> = new Map([[String.fromCharCode(108,95,52,50,95,99,97,112,97,98,105,108,105,116,121,0),75], [String.fromCharCode(102,95,54,53,95,112,99,97,112,0),393]]);
    let invitek: Map<any, any> = new Map([[String.fromCharCode(109,99,108,109,115,95,98,95,50,55,0),false ], [String.fromCharCode(107,95,56,48,95,115,117,98,115,116,114,105,110,103,0),false ], [String.fromCharCode(99,103,105,109,97,103,101,95,119,95,50,51,0),false ]]);
    let videocommonX: Array<any> = [90, 919, 738];
    let arrowX: Array<any> = [961, 316];
    let yellowi = 1.0;
    let commonx = String.fromCharCode(110,95,54,54,95,97,100,112,99,109,0);
    let save_ = false;
    let humidityc = String.fromCharCode(109,97,110,121,95,121,95,49,53,0);
    let yingL = String.fromCharCode(100,105,97,99,114,105,116,105,99,95,48,95,53,51,0);
    let icon8 = false;
      sortW.push(1 >> (Math.min(1, Math.abs(resulte.size))));
      sortW.push(2 + invitek.size);

    let searchKeyword = placeholderSearch;

   for (let n = 0; n < 1; n++) {
       let mbnativeadvancedG = 2.0;
       let downloadedh = 5.0;
       let bootsplashs: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,97,105,110,97,98,108,101,95,108,95,52,50,0),877], [String.fromCharCode(100,101,110,111,109,95,52,95,50,51,0),664], [String.fromCharCode(115,117,98,115,101,116,95,120,95,54,55,0),710]]);
       let gesturesc = String.fromCharCode(121,95,49,57,95,99,111,110,99,101,97,108,0);
      while (2.1 >= (mbnativeadvancedG / (Math.max(1.43, 10))) || 2.7 >= (1.43 + mbnativeadvancedG)) {
         mbnativeadvancedG += parseFloat(`${bootsplashs.size & parseInt(`${downloadedh}`)}`);
         break;
      }
          let actionss: Array<any> = [472, 502];
          let heji3 = false;
         gesturesc = `${actionss.length}`;
          let signinupe = 3.0;
          let pausep = String.fromCharCode(117,110,104,105,103,104,108,105,103,104,116,95,108,95,55,50,0);
          let rewindk = String.fromCharCode(118,95,56,57,95,105,115,100,105,103,105,116,0);
         gesturesc = `${2 ^ parseInt(`${downloadedh}`)}`;
         signinupe -= rewindk.length % 1;
         pausep = `${pausep.length & rewindk.length}`;
         gesturesc = `${parseInt(`${mbnativeadvancedG}`) % 3}`;
      while (bootsplashs.get(`${downloadedh}`) != null) {
         bootsplashs.set(`${downloadedh}`, 3 ^ bootsplashs.size);
         break;
      }
         gesturesc += `${(String.fromCharCode(65,0) == gesturesc ? gesturesc.length : bootsplashs.size)}`;
         mbnativeadvancedG *= parseFloat(`${parseInt(`${downloadedh}`)}`);
         downloadedh -= parseFloat(`${parseInt(`${mbnativeadvancedG}`) >> (Math.min(Math.abs(2), 3))}`);
      for (let m = 0; m < 3; m++) {
         mbnativeadvancedG += parseFloat(`${parseInt(`${downloadedh}`)}`);
      }
      while (5.77 <= (downloadedh - mbnativeadvancedG)) {
         downloadedh *= parseFloat(`${bootsplashs.size}`);
         break;
      }
      if (!gesturesc.includes(`${downloadedh}`)) {
         gesturesc = `${(String.fromCharCode(75,0) == gesturesc ? gesturesc.length : parseInt(`${mbnativeadvancedG}`))}`;
      }
       let skipG = true;
      chinasame8 += 2 >> (Math.min(4, Math.abs(parseInt(`${mbnativeadvancedG}`))));
   }
   let indicatort = videocommonX.length <= 5737908;
   do {
      videocommonX = [sortW.length];
      if (indicatort) {
         break;
      }
   } while (indicatort && (3 < videocommonX.length));

    if (search != "") {

   for (let w = 0; w < 3; w++) {
       let countdownh: Map<any, any> = new Map([[String.fromCharCode(115,95,51,51,95,105,109,112,108,105,101,115,0),false ], [String.fromCharCode(119,95,54,57,95,105,110,105,116,105,97,108,0),true ], [String.fromCharCode(118,105,101,119,112,111,114,116,95,103,95,56,49,0),false ]]);
       let mbbidQ = String.fromCharCode(97,99,99,101,115,115,111,114,115,95,114,95,52,0);
      for (let m = 0; m < 2; m++) {
         mbbidQ += `${mbbidQ.length}`;
      }
       let signinupZ = String.fromCharCode(101,120,112,114,101,115,115,95,121,95,54,0);
          let dplus5: Map<any, any> = new Map([[String.fromCharCode(106,95,55,50,95,104,117,109,97,110,0),339], [String.fromCharCode(117,95,49,48,95,114,105,100,103,101,0),915]]);
          let hoverf = true;
         mbbidQ += "3";
         dplus5 = new Map([[`${dplus5.size}`, dplus5.size]]);
         hoverf = dplus5.size <= 66 || dplus5.size <= 66;
       let mintegralw = 4;
          let condensedn = false;
         countdownh = new Map([[`${mintegralw}`, (String.fromCharCode(55,0) == mbbidQ ? mintegralw : mbbidQ.length)]]);
         condensedn = !condensedn;
      while ((1 << (Math.min(4, Math.abs(mintegralw)))) >= 4 || 1 >= (mintegralw << (Math.min(Math.abs(countdownh.size), 2)))) {
          let debuge: Array<any> = [186, 350];
         mintegralw -= (String.fromCharCode(121,0) == signinupZ ? signinupZ.length : countdownh.size);
         debuge.push(debuge.length * debuge.length);
         break;
      }
      videocommonX.push(2 | resulte.size);
   }
       let shrinkj = 4.0;
       let catagoryx = 1.0;
       let become5: Array<any> = [840, 95];
         catagoryx += become5.length;
       let rewardm = String.fromCharCode(100,101,99,111,100,101,95,48,95,51,52,0);
       let darkM = String.fromCharCode(99,105,112,104,101,114,98,121,110,97,109,101,95,110,95,51,56,0);
       let pauseE = String.fromCharCode(102,111,114,119,97,114,100,101,100,95,53,95,56,54,0);
         darkM = `${3 >> (Math.min(3, Math.abs(parseInt(`${catagoryx}`))))}`;
      if (1 <= rewardm.length) {
         rewardm = `${(String.fromCharCode(81,0) == rewardm ? parseInt(`${shrinkj}`) : rewardm.length)}`;
      }
      for (let r = 0; r < 2; r++) {
          let combinec = String.fromCharCode(105,95,54,49,95,117,110,105,120,0);
          let thailandZ = 2.0;
          let contexto = 3.0;
          let refreshF = false;
          let expandw = String.fromCharCode(98,105,110,104,101,120,95,52,95,53,53,0);
         catagoryx += pauseE.length - darkM.length;
         combinec = "1";
         thailandZ *= (parseFloat(`${(refreshF ? 4 : 3)}`));
         contexto -= parseFloat(`${expandw.length}`);
         refreshF = (51 >= ((!refreshF ? combinec.length : 51) >> (Math.min(combinec.length, 3))));
         expandw += `${parseInt(`${contexto}`)}`;
      }
         pauseE += `${parseInt(`${shrinkj}`)}`;
          let sendo = String.fromCharCode(102,95,53,57,95,115,117,98,116,105,116,108,101,0);
          let singlej: Map<any, any> = new Map([[String.fromCharCode(108,95,52,53,95,112,97,103,105,110,97,116,105,111,110,0),String.fromCharCode(99,111,111,114,100,105,110,97,116,101,95,102,95,49,55,0)], [String.fromCharCode(116,95,51,52,95,97,99,99,101,115,115,101,100,0),String.fromCharCode(120,95,52,95,118,97,108,0)], [String.fromCharCode(119,95,53,48,95,109,105,99,114,111,112,104,111,110,101,0),String.fromCharCode(103,114,111,119,116,104,95,110,95,55,54,0)]]);
         rewardm = `${3 << (Math.min(3, pauseE.length))}`;
         sendo += `${singlej.size}`;
         singlej = new Map([[`${singlej.size}`, sendo.length ^ singlej.size]]);
         rewardm = `${1 * parseInt(`${catagoryx}`)}`;
      videocommonX.push(1);
      searchKeyword = search;
    }

    

   for (let k = 0; k < 2; k++) {
       let traminiQ: Array<any> = [String.fromCharCode(110,95,50,52,95,103,117,105,100,101,115,0), String.fromCharCode(100,95,53,53,95,112,105,116,99,104,0)];
       let bottom4 = String.fromCharCode(100,116,115,109,95,106,95,51,50,0);
       let saveO = String.fromCharCode(109,97,107,101,100,112,107,103,95,115,95,49,49,0);
      let trophyd = bottom4.length >= 7937411;
      do {
         bottom4 = `${saveO.length}`;
         if (trophyd) {
            break;
         }
      } while (trophyd && (bottom4.includes(`${traminiQ.length}`)));
      let twitterz = String.fromCharCode(50,110,97,95,106,107,111,108,97,0) == saveO;
      do {
         saveO += `${(String.fromCharCode(83,0) == bottom4 ? bottom4.length : saveO.length)}`;
         if (twitterz) {
            break;
         }
      } while (twitterz && (2 == saveO.length));
      if (4 > (saveO.length % (Math.max(6, traminiQ.length)))) {
         saveO += `${2 & saveO.length}`;
      }
      while (5 > (5 - traminiQ.length) && 1 > (saveO.length - 5)) {
         saveO = `${traminiQ.length << (Math.min(Math.abs(2), 3))}`;
         break;
      }
      let regeng9 = bottom4 == String.fromCharCode(57,97,122,113,97,121,109,0);
      do {
          let ballq = String.fromCharCode(102,95,50,50,95,115,97,100,120,120,0);
          let favicone = String.fromCharCode(121,95,50,50,95,100,111,99,116,111,116,97,108,0);
         bottom4 += `${1 / (Math.max(8, saveO.length))}`;
         ballq = `${ballq.length}`;
         favicone += `${(String.fromCharCode(108,0) == favicone ? favicone.length : ballq.length)}`;
         if (regeng9) {
            break;
         }
      } while (regeng9 && (bottom4 == String.fromCharCode(52,0) && saveO.length == 1));
      if ((saveO.length ^ 2) <= 5 || 3 <= (traminiQ.length ^ 2)) {
          let main_a3: Array<any> = [320, 13];
          let largem: Map<any, any> = new Map([[String.fromCharCode(101,102,102,101,99,116,115,95,112,95,51,55,0),99], [String.fromCharCode(114,101,115,111,117,114,99,101,95,114,95,50,52,0),248], [String.fromCharCode(116,121,112,101,111,102,95,104,95,54,50,0),374]]);
          let lista = String.fromCharCode(111,105,100,97,110,121,95,109,95,57,54,0);
          let score4 = String.fromCharCode(115,99,97,110,116,97,98,108,101,95,56,95,52,54,0);
         saveO += "1";
         main_a3.push(main_a3.length);
         largem = new Map([[`${largem.size}`, largem.size]]);
         lista = `${score4.length + 3}`;
         score4 += `${score4.length / (Math.max(3, 10))}`;
      }
         saveO = `${traminiQ.length << (Math.min(Math.abs(2), 1))}`;
       let roomr: Map<any, any> = new Map([[String.fromCharCode(112,97,114,115,101,117,116,105,108,115,95,98,95,54,54,0),220], [String.fromCharCode(102,95,53,51,95,115,117,98,115,116,114,101,97,109,0),542], [String.fromCharCode(101,120,116,114,97,99,116,105,111,110,95,106,95,53,53,0),598]]);
       let benefity: Map<any, any> = new Map([[String.fromCharCode(106,95,53,52,95,111,115,116,114,101,97,109,119,114,97,112,112,101,114,0),627], [String.fromCharCode(97,95,56,54,95,115,99,105,105,0),503], [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,95,105,95,56,57,0),81]]);
         traminiQ = [3];
      chinasame8 >>= Math.min(saveO.length, 4);
   }
      sortW.push(videocommonX.length);
    

   while (4 <= zhuboG.length) {
       let selectb: Map<any, any> = new Map([[String.fromCharCode(114,101,115,112,95,122,95,54,56,0),369], [String.fromCharCode(115,101,108,101,99,116,95,113,95,56,56,0),933], [String.fromCharCode(109,95,56,56,95,112,111,115,116,97,108,0),652]]);
       let file9 = String.fromCharCode(111,95,52,49,95,116,114,97,99,101,114,0);
      while (file9.includes(`${selectb.size}`)) {
         selectb = new Map([[`${selectb.size}`, (String.fromCharCode(51,0) == file9 ? file9.length : selectb.size)]]);
         break;
      }
         file9 += "3";
      let utilsK = file9 == String.fromCharCode(109,112,111,106,55,99,116,0);
      do {
         file9 = `${file9.length}`;
         if (utilsK) {
            break;
         }
      } while ((4 >= (selectb.size / (Math.max(file9.length, 7))) && 4 >= (4 / (Math.max(2, selectb.size)))) && utilsK);
         file9 += `${selectb.size & file9.length}`;
       let y_lockS = 3;
      while ((selectb.size + file9.length) <= 3 || 3 <= (file9.length + selectb.size)) {
         file9 += "1";
         break;
      }
      videocommonX = [1];
      break;
   }
       let memberJ: Map<any, any> = new Map([[String.fromCharCode(118,95,55,57,95,113,115,118,100,101,99,0),false ], [String.fromCharCode(98,111,114,100,101,114,101,100,95,98,95,52,48,0),false ], [String.fromCharCode(116,95,52,48,95,99,112,117,105,100,0),false ]]);
      let collectioni = memberJ.size <= 7836784;
      do {
          let f_lockQ: Map<any, any> = new Map([[String.fromCharCode(109,111,115,116,95,53,95,52,56,0),true ], [String.fromCharCode(116,101,120,116,117,114,101,95,48,95,57,0),false ], [String.fromCharCode(115,121,110,116,104,101,115,105,115,95,53,95,52,57,0),true ]]);
          let photo2: Map<any, any> = new Map([[String.fromCharCode(98,101,120,116,95,105,95,52,57,0),String.fromCharCode(108,95,53,49,95,102,114,97,109,101,112,111,111,108,0)], [String.fromCharCode(121,95,49,55,95,99,108,111,115,101,0),String.fromCharCode(121,114,121,105,95,117,95,50,48,0)], [String.fromCharCode(114,105,103,104,116,109,111,115,116,95,99,95,49,52,0),String.fromCharCode(110,111,118,101,99,95,120,95,51,0)]]);
          let switch_63d = String.fromCharCode(99,111,100,101,99,100,97,116,97,95,103,95,53,0);
          let sentryK = 0.0;
         memberJ = new Map([[`${photo2.size}`, photo2.size]]);
         f_lockQ = new Map([[`${f_lockQ.size}`, parseInt(`${sentryK}`)]]);
         switch_63d = `${switch_63d.length << (Math.min(2, Math.abs(parseInt(`${sentryK}`))))}`;
         if (collectioni) {
            break;
         }
      } while (collectioni && ((memberJ.size % (Math.max(9, memberJ.size))) < 1));
      while (1 == (memberJ.size ^ 2) || 2 == (memberJ.size ^ memberJ.size)) {
          let mbsplashv = String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,105,111,110,95,56,95,56,0);
         memberJ = new Map([[`${memberJ.size}`, mbsplashv.length]]);
         break;
      }
      for (let j = 0; j < 3; j++) {
          let subss = 3;
          let becomec: Array<any> = [659, 140, 725];
          let goalY = String.fromCharCode(107,95,55,49,95,110,111,116,105,99,101,0);
          let invite9 = 0.0;
          let sliderA = String.fromCharCode(115,112,97,109,95,112,95,55,53,0);
         memberJ.set(goalY, subss * 1);
         subss -= parseInt(`${invite9}`) % (Math.max(becomec.length, 7));
         becomec.push(becomec.length - sliderA.length);
         goalY += "3";
         invite9 += becomec.length;
         sliderA += `${(String.fromCharCode(100,0) == sliderA ? becomec.length : sliderA.length)}`;
      }
      videocommonX.push(sortW.length);
    

   let bingO = 8750730.0 <= target9;
   do {
      target9 += videocommonX.length;
      if (bingO) {
         break;
      }
   } while (bingO && (!downU.includes(target9)));
   if ((yellowi - 5.82) >= 3.39) {
       let watch0 = String.fromCharCode(101,120,112,95,111,95,57,51,0);
       let paginationU = String.fromCharCode(114,100,101,108,116,97,95,50,95,55,56,0);
          let textf = 5;
          let regengs = 1.0;
         paginationU += `${paginationU.length}`;
         textf *= parseInt(`${regengs}`);
         regengs *= 3 | textf;
         watch0 += `${paginationU.length}`;
         watch0 += `${(watch0 == String.fromCharCode(121,0) ? paginationU.length : watch0.length)}`;
      while (paginationU == String.fromCharCode(50,0)) {
         watch0 = "2";
         break;
      }
       let stringsI: Array<any> = [395, 934];
       let profileY: Array<any> = [String.fromCharCode(115,101,108,102,105,101,95,103,95,53,49,0), String.fromCharCode(99,111,112,121,114,105,103,104,116,95,50,95,55,54,0), String.fromCharCode(102,97,100,101,95,54,95,49,55,0)];
      let panglev = paginationU == String.fromCharCode(99,112,116,0);
      do {
         paginationU += `${profileY.length}`;
         if (panglev) {
            break;
         }
      } while ((4 == (profileY.length / (Math.max(paginationU.length, 3))) || (paginationU.length / (Math.max(2, profileY.length))) == 4) && panglev);
      chinasame8 <<= Math.min(2, Math.abs(resulte.size));
   }
    

   let sansT = arrowX.length >= 7216088;
   do {
       let nalyticsX = String.fromCharCode(112,95,54,48,95,115,105,110,113,105,0);
       let preview9 = 3.0;
       let text9 = 0.0;
       let nativel: Array<any> = [425, 93];
       let next4 = 4;
      while (nalyticsX.length == 4) {
         preview9 /= Math.max(parseFloat(`${1}`), 1);
         break;
      }
      while (nalyticsX.includes(`${nativel.length}`)) {
          let typingC = 1;
          let arrowN = 1.0;
         nativel = [1 | parseInt(`${text9}`)];
         typingC += parseInt(`${arrowN}`) * 3;
         arrowN /= Math.max(parseFloat(`${parseInt(`${arrowN}`)}`), 5);
         break;
      }
         nalyticsX += `${parseInt(`${preview9}`) / 3}`;
         next4 |= (String.fromCharCode(51,0) == nalyticsX ? parseInt(`${text9}`) : nalyticsX.length);
       let headerk = String.fromCharCode(107,108,97,115,115,95,102,95,57,51,0);
      for (let s = 0; s < 2; s++) {
         nativel = [parseInt(`${preview9}`) / (Math.max(headerk.length, 3))];
      }
       let xvod3: Map<any, any> = new Map([[String.fromCharCode(110,95,52,95,112,114,111,114,101,115,100,101,99,0),984], [String.fromCharCode(97,110,105,109,97,116,101,100,95,97,95,54,54,0),199], [String.fromCharCode(108,105,102,101,95,112,95,56,54,0),297]]);
          let activel = 3;
         headerk = `${nativel.length ^ headerk.length}`;
         activel |= activel;
         text9 += parseFloat(`${next4 / (Math.max(headerk.length, 8))}`);
          let desca = 0.0;
         text9 *= parseFloat(`${parseInt(`${preview9}`)}`);
         desca /= Math.max(3, parseFloat(`${parseInt(`${desca}`) << (Math.min(1, Math.abs(parseInt(`${desca}`))))}`));
         next4 %= Math.max(3, xvod3.size);
      let commentC = 8429981 >= xvod3.size;
      do {
         xvod3 = new Map([[`${preview9}`, 1 & next4]]);
         if (commentC) {
            break;
         }
      } while ((4 <= (nativel.length >> (Math.min(Math.abs(xvod3.size), 4))) || (nativel.length >> (Math.min(Math.abs(4), 1))) <= 1) && commentC);
      if (nalyticsX.startsWith(`${nativel.length}`)) {
         nalyticsX += `${parseInt(`${preview9}`)}`;
      }
      if (!nativel.includes(next4)) {
         nativel.push(parseInt(`${preview9}`) % 3);
      }
         nativel.push(3);
      arrowX = [resulte.size];
      if (sansT) {
         break;
      }
   } while ((1 >= (arrowX.length >> (Math.min(Math.abs(1), 4)))) && sansT);
       let bannern = 1.0;
       let yingA = String.fromCharCode(97,118,99,105,95,52,95,52,53,0);
       let fastW = 0.0;
       let middleB = 3.0;
          let configW = 5.0;
          let z_unlockn: Map<any, any> = new Map([[String.fromCharCode(108,105,103,104,116,110,101,115,115,95,113,95,50,56,0),754], [String.fromCharCode(109,95,54,54,95,104,101,97,112,0),563]]);
          let bridgeE = String.fromCharCode(117,116,102,95,120,95,57,52,0);
         yingA = `${(String.fromCharCode(97,0) == yingA ? yingA.length : parseInt(`${fastW}`))}`;
         configW += parseFloat(`${2}`);
         z_unlockn.set(`${configW}`, z_unlockn.size);
         bridgeE = `${3 % (Math.max(8, bridgeE.length))}`;
         fastW -= parseFloat(`${3 >> (Math.min(5, Math.abs(parseInt(`${bannern}`))))}`);
      while ((yingA.length ^ 2) == 4) {
          let redirectH = 4;
          let t_positionV = String.fromCharCode(109,95,49,55,95,112,97,116,99,104,115,101,116,0);
         middleB -= parseFloat(`${redirectH}`);
         redirectH >>= Math.min(Math.abs(1), 1);
         t_positionV = `${t_positionV.length & 2}`;
         break;
      }
         fastW += parseFloat(`${parseInt(`${middleB}`)}`);
         bannern -= parseInt(`${fastW}`) / 2;
      chinasame8 *= 3 >> (Math.min(1, zhuboG.length));

    

      videocommonX.push(zhuboG.length << (Math.min(sortW.length, 2)));
      sortW = [2 | downU.length];
    

   for (let o = 0; o < 1; o++) {
       let bridgeZ: Map<any, any> = new Map([[String.fromCharCode(108,95,56,56,95,97,97,115,99,0),String.fromCharCode(117,110,109,105,110,105,109,105,122,101,95,116,95,56,55,0)], [String.fromCharCode(119,95,52,57,95,114,110,103,0),String.fromCharCode(102,95,49,54,95,112,97,117,115,101,0)]]);
       let tooltipsC = String.fromCharCode(100,101,108,97,117,110,97,121,95,117,95,53,51,0);
       let episodesc = 2.0;
       let gmailx = String.fromCharCode(111,108,107,97,100,111,116,95,112,95,49,0);
      let modem = 7239725 >= tooltipsC.length;
      do {
         tooltipsC = `${parseInt(`${episodesc}`) - bridgeZ.size}`;
         if (modem) {
            break;
         }
      } while (modem && ((2 * tooltipsC.length) < 3));
         bridgeZ = new Map([[`${bridgeZ.size}`, bridgeZ.size]]);
      let yingH = 8585496.0 >= episodesc;
      do {
         episodesc /= Math.max(1, (parseFloat(`${gmailx == String.fromCharCode(112,0) ? parseInt(`${episodesc}`) : gmailx.length}`)));
         if (yingH) {
            break;
         }
      } while (yingH && (!gmailx.startsWith(`${episodesc}`)));
      if ((4 << (Math.min(3, Math.abs(bridgeZ.size)))) > 3 || (2.32 - episodesc) > 1.83) {
          let filedS: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,115,104,101,108,102,95,107,95,57,52,0),68], [String.fromCharCode(116,114,101,120,95,119,95,57,55,0),915]]);
          let mbnativeh = 3.0;
          let containerK: Array<any> = [String.fromCharCode(106,95,56,52,95,97,95,52,48,0), String.fromCharCode(116,111,111,108,115,95,116,95,50,54,0)];
          let searchI = true;
         bridgeZ = new Map([[`${filedS.size}`, filedS.size]]);
         mbnativeh *= ((searchI ? 2 : 4) + 2);
         containerK.push(3);
      }
          let placementi = 0.0;
          let areaF: Map<any, any> = new Map([[String.fromCharCode(115,112,108,105,116,95,53,95,51,56,0),true ], [String.fromCharCode(105,95,50,50,95,100,105,109,105,110,115,105,111,110,115,0),false ], [String.fromCharCode(102,111,114,109,97,116,115,95,52,95,49,57,0),true ]]);
          let huaweik = 1;
         episodesc *= (parseFloat(`${String.fromCharCode(95,0) == tooltipsC ? parseInt(`${episodesc}`) : tooltipsC.length}`));
         placementi /= Math.max(parseFloat(`${areaF.size}`), 1);
         areaF = new Map([[`${areaF.size}`, areaF.size]]);
         huaweik /= Math.max(5, parseInt(`${placementi}`) ^ 2);
          let interstitialo = 0.0;
         tooltipsC = `${2 * gmailx.length}`;
         interstitialo += parseFloat(`${parseInt(`${interstitialo}`) % (Math.max(parseInt(`${interstitialo}`), 9))}`);
          let typeso = String.fromCharCode(104,95,57,0);
          let sheet9 = String.fromCharCode(114,97,110,107,95,55,95,52,52,0);
          let package_1E = false;
         episodesc /= Math.max(parseFloat(`${typeso.length}`), 3);
         typeso = `${(sheet9 == String.fromCharCode(48,0) ? sheet9.length : (package_1E ? 1 : 3))}`;
         package_1E = !package_1E;
         bridgeZ = new Map([[`${episodesc}`, gmailx.length]]);
      if ((gmailx.length << (Math.min(1, Math.abs(bridgeZ.size)))) >= 1) {
         bridgeZ.set(`${gmailx}`, (gmailx == String.fromCharCode(74,0) ? gmailx.length : bridgeZ.size));
      }
      if (4 >= (tooltipsC.length * bridgeZ.size) && (tooltipsC.length * bridgeZ.size) >= 4) {
         bridgeZ = new Map([[`${episodesc}`, parseInt(`${episodesc}`) | gmailx.length]]);
      }
          let sport2 = 4.0;
          let long_cQ = String.fromCharCode(98,95,52,51,95,99,97,108,99,0);
         episodesc /= Math.max((parseFloat(`${String.fromCharCode(77,0) == tooltipsC ? bridgeZ.size : tooltipsC.length}`)), 5);
         sport2 -= parseInt(`${sport2}`);
         long_cQ = `${parseInt(`${sport2}`) ^ long_cQ.length}`;
         tooltipsC = `${gmailx.length + 2}`;
      invitek = new Map([[`${zhuboG.length}`, (String.fromCharCode(49,0) == tooltipsC ? tooltipsC.length : zhuboG.length)]]);
   }
       let questg = 0.0;
       let controly = String.fromCharCode(115,116,101,112,112,101,114,95,118,95,54,51,0);
         questg -= parseInt(`${questg}`) & controly.length;
          let volumeZ = 1.0;
          let m_positionq = 5;
          let weiboi = String.fromCharCode(101,112,115,105,108,111,110,95,122,95,54,53,0);
         questg -= controly.length << (Math.min(4, Math.abs(parseInt(`${volumeZ}`))));
         volumeZ *= parseFloat(`${weiboi.length * m_positionq}`);
         m_positionq *= 3;
         weiboi += `${1 * weiboi.length}`;
      for (let j = 0; j < 2; j++) {
          let agreementZ = String.fromCharCode(99,97,99,104,101,115,95,56,95,48,0);
          let placementD = String.fromCharCode(102,95,55,95,115,116,97,114,116,0);
         controly += `${controly.length ^ 2}`;
         agreementZ = "3";
         placementD = `${(String.fromCharCode(86,0) == agreementZ ? agreementZ.length : placementD.length)}`;
      }
          let feedback7 = 1;
         controly += `${parseInt(`${questg}`) ^ controly.length}`;
         feedback7 /= Math.max(1, feedback7 - feedback7);
      for (let y = 0; y < 1; y++) {
          let vignetteB = 2.0;
          let homeb = 1.0;
          let homeN = true;
          let verticalb = String.fromCharCode(99,111,110,116,101,110,116,105,111,110,95,105,95,52,57,0);
          let filterl = 0.0;
         questg += 2 << (Math.min(2, verticalb.length));
         vignetteB -= parseInt(`${homeb}`);
         homeN = 18.80 > vignetteB && homeb > 18.80;
         verticalb += `${(parseInt(`${homeb}`) * (homeN ? 1 : 5))}`;
         filterl /= Math.max(4, parseFloat(`${1 % (Math.max(parseInt(`${vignetteB}`), 8))}`));
      }
      let rulesl = 8452884 >= controly.length;
      do {
         controly = `${parseInt(`${questg}`)}`;
         if (rulesl) {
            break;
         }
      } while (rulesl && (1 >= (parseInt(`${questg}`) - controly.length) || (4.50 - questg) >= 1.85));
      yellowi -= parseFloat(`${1 * videocommonX.length}`);
    

       let clock8 = String.fromCharCode(102,111,111,116,101,114,95,114,95,53,56,0);
       let chart4: Array<any> = [String.fromCharCode(115,112,108,105,116,115,95,51,95,52,0), String.fromCharCode(111,100,105,110,103,95,57,95,50,53,0)];
       let submit7 = 0.0;
      for (let r = 0; r < 3; r++) {
         chart4.push(1);
      }
       let groupA = 4;
      let circleR = 9169358.0 <= submit7;
      do {
         submit7 *= chart4.length + clock8.length;
         if (circleR) {
            break;
         }
      } while ((!chart4.includes(submit7)) && circleR);
         chart4 = [3];
      for (let d = 0; d < 2; d++) {
         clock8 += `${(clock8 == String.fromCharCode(53,0) ? groupA : clock8.length)}`;
      }
         submit7 *= chart4.length ^ 3;
          let package_0q5 = 1.0;
          let tempJ = 1.0;
         groupA >>= Math.min(4, Math.abs(2 - groupA));
         package_0q5 -= parseFloat(`${parseInt(`${tempJ}`)}`);
         clock8 += `${clock8.length}`;
          let trasht = String.fromCharCode(104,105,103,104,108,105,103,104,116,101,114,95,114,95,52,57,0);
          let showp = String.fromCharCode(109,95,50,51,95,97,102,105,108,116,101,114,0);
          let clear9 = 4.0;
         chart4.push(groupA);
         trasht += "3";
         showp += "2";
         clear9 *= trasht.length + 1;
      chinasame8 |= 2;
   for (let o = 0; o < 3; o++) {
      commonx += `${sortW.length}`;
   }
    

      yellowi -= parseFloat(`${1 | resulte.size}`);
   let crownB = 5447265 >= commonx.length;
   do {
      commonx += `${zhuboG.length + videocommonX.length}`;
      if (crownB) {
         break;
      }
   } while ((commonx.startsWith(`${invitek.size}`)) && crownB);
    

       let long_i8V = 5.0;
       let searchbarj = String.fromCharCode(104,111,108,100,95,101,95,50,49,0);
       let volumeM = 1.0;
         volumeM -= (parseFloat(`${String.fromCharCode(95,0) == searchbarj ? searchbarj.length : parseInt(`${long_i8V}`)}`));
      let membershipY = searchbarj.length >= 7753332;
      do {
         searchbarj = `${parseInt(`${volumeM}`) - parseInt(`${long_i8V}`)}`;
         if (membershipY) {
            break;
         }
      } while (((4.72 / (Math.max(1, long_i8V))) < 3.16 || (long_i8V / 4.72) < 2.79) && membershipY);
          let blackI: Array<any> = [23, 243];
         long_i8V /= Math.max(parseFloat(`${searchbarj.length}`), 3);
         blackI = [blackI.length >> (Math.min(Math.abs(3), 3))];
         searchbarj += "2";
       let theme_ = String.fromCharCode(116,95,51,53,95,118,111,116,101,115,0);
      for (let d = 0; d < 3; d++) {
         long_i8V -= parseFloat(`${parseInt(`${volumeM}`) + 2}`);
      }
      if ((volumeM - 4.27) < 2.52 || (theme_.length / 4) < 3) {
         volumeM *= parseFloat(`${2}`);
      }
       let leaguef = 2.0;
       let verticalC = 3.0;
         verticalC -= parseFloat(`${1}`);
      save_ = volumeM == 93.72;
      save_ = downU.length == arrowX.length;
    

   while (2 > (sortW.length + parseInt(`${yellowi}`)) || (yellowi + 3.7) > 1.66) {
      yellowi /= Math.max(2, (parseFloat(`${videocommonX.length << (Math.min(4, Math.abs((save_ ? 4 : 5))))}`)));
      break;
   }
      sortW.push(2);
    

   let tailH = commonx.length <= 4959527;
   do {
       let typesT: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,117,114,101,100,95,111,95,50,51,0),String.fromCharCode(119,95,53,50,95,119,105,114,101,102,114,97,109,101,0)], [String.fromCharCode(118,95,49,54,95,99,111,112,121,102,100,0),String.fromCharCode(102,95,56,52,95,97,112,112,114,111,118,101,100,0)], [String.fromCharCode(101,120,99,101,112,116,95,106,95,49,53,0),String.fromCharCode(116,95,55,51,95,115,105,108,101,110,99,101,100,0)]]);
       let buildR: Array<any> = [String.fromCharCode(107,95,57,51,95,115,111,117,114,99,101,105,100,0), String.fromCharCode(101,95,55,53,95,116,120,116,0), String.fromCharCode(105,110,110,101,114,95,113,95,55,51,0)];
          let gmaili = 3.0;
          let renewe = 5.0;
          let bingf = false;
         buildR.push(((bingf ? 1 : 2) - parseInt(`${renewe}`)));
         gmaili /= Math.max(3, parseInt(`${gmaili}`) / 2);
         renewe *= 3;
         typesT = new Map([[`${typesT.size}`, typesT.size]]);
      let drags = 7906287 >= typesT.size;
      do {
         typesT = new Map([[`${typesT.size}`, 3]]);
         if (drags) {
            break;
         }
      } while ((buildR.length == typesT.size) && drags);
       let untick5 = String.fromCharCode(102,111,111,95,109,95,52,57,0);
      if (2 >= (buildR.length | 5) && (5 | buildR.length) >= 2) {
          let selectedR = 5.0;
          let gmaild = 1.0;
          let kuaishou0 = String.fromCharCode(101,108,101,109,115,95,102,95,50,56,0);
          let usernamef = String.fromCharCode(109,97,116,101,114,105,97,108,95,117,95,54,54,0);
          let livew = 5.0;
         untick5 = `${typesT.size}`;
         selectedR *= usernamef.length;
         gmaild /= Math.max(5, kuaishou0.length - parseInt(`${gmaild}`));
         kuaishou0 += `${1 | usernamef.length}`;
         livew -= parseFloat(`${2 << (Math.min(4, usernamef.length))}`);
      }
         typesT = new Map([[`${typesT.size}`, buildR.length / 2]]);
      commonx += `${chinasame8 | parseInt(`${target9}`)}`;
      if (tailH) {
         break;
      }
   } while ((zhuboG.length < 5) && tailH);
   let singleC = 8945440 >= downU.length;
   do {
      downU = [chinasame8 << (Math.min(Math.abs(2), 1))];
      if (singleC) {
         break;
      }
   } while (singleC && ((downU.length | sortW.length) <= 4));
    

   while (2 == videocommonX.length) {
       let feedbackV = true;
       let soundX = String.fromCharCode(108,95,56,51,95,101,118,101,110,108,121,0);
       let zoom_ = false;
       let weiboN: Array<any> = [642, 454];
          let infoJ = 2;
          let productV: Map<any, any> = new Map([[String.fromCharCode(97,95,51,48,95,98,97,99,107,103,114,111,117,110,100,105,110,103,0),972], [String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,108,95,49,95,49,57,0),29], [String.fromCharCode(99,111,110,99,101,97,108,109,101,110,116,95,105,95,52,57,0),488]]);
         zoom_ = (zoom_ ? !feedbackV : zoom_);
         infoJ %= Math.max(productV.size, 3);
         productV = new Map([[`${productV.size}`, 1]]);
       let otherG = 4.0;
       let vietnamu = 2.0;
       let baiduo: Array<any> = [String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,95,56,95,53,53,0), String.fromCharCode(115,95,53,50,95,116,114,101,101,0)];
       let memberc: Array<any> = [625, 88, 387];
         zoom_ = weiboN.length < 1;
          let debug0 = 1;
          let time_h4Q = String.fromCharCode(109,95,57,55,95,120,118,97,103,0);
          let detailsU = true;
         otherG /= Math.max(1, parseFloat(`${soundX.length >> (Math.min(Math.abs(2), 4))}`));
         debug0 -= 2;
         time_h4Q = `${debug0 / 2}`;
         detailsU = time_h4Q.length <= debug0;
         weiboN = [parseInt(`${otherG}`)];
      if ((5 << (Math.min(1, baiduo.length))) > 1) {
          let routerc = String.fromCharCode(108,104,115,95,48,95,54,48,0);
          let firebaseS = 4.0;
          let catagory8: Array<any> = [433, 721];
         baiduo = [2];
         routerc = `${parseInt(`${firebaseS}`)}`;
         firebaseS += parseFloat(`${parseInt(`${firebaseS}`) / 1}`);
         catagory8.push((String.fromCharCode(88,0) == routerc ? routerc.length : parseInt(`${firebaseS}`)));
      }
         weiboN.push(soundX.length * baiduo.length);
      videocommonX = [3];
      break;
   }
      commonx = `${humidityc.length >> (Math.min(1, commonx.length))}`;
    

      sortW.push(videocommonX.length);
       let feedbackx: Map<any, any> = new Map([[String.fromCharCode(111,95,53,57,95,100,114,97,119,103,114,105,100,0),646], [String.fromCharCode(97,112,105,95,115,95,51,53,0),12]]);
       let goalQ = String.fromCharCode(108,95,53,54,95,116,97,98,0);
       let infoD: Array<any> = [String.fromCharCode(114,101,113,117,101,115,116,105,110,103,95,111,95,52,49,0), String.fromCharCode(115,95,49,51,95,118,108,111,103,0)];
      for (let p = 0; p < 2; p++) {
         feedbackx.set(goalQ, goalQ.length);
      }
         goalQ = `${feedbackx.size + infoD.length}`;
       let settingsa: Array<any> = [String.fromCharCode(107,95,49,52,95,118,105,109,101,111,0), String.fromCharCode(105,95,54,95,119,97,118,101,115,121,110,116,104,0)];
      let becomeU = infoD.length >= 7608699;
      do {
          let moonc = String.fromCharCode(116,101,108,101,103,114,97,95,100,95,49,55,0);
         infoD = [2 ^ infoD.length];
         moonc += `${moonc.length << (Math.min(1, moonc.length))}`;
         if (becomeU) {
            break;
         }
      } while (((settingsa.length * 2) > 1 || (settingsa.length * 2) > 4) && becomeU);
      let chat4 = 7286444 >= settingsa.length;
      do {
         settingsa = [1];
         if (chat4) {
            break;
         }
      } while (chat4 && ((settingsa.length % (Math.max(goalQ.length, 1))) <= 1));
         settingsa.push(feedbackx.size);
          let klevinu = String.fromCharCode(112,95,53,51,95,110,111,109,105,110,97,108,0);
          let viewero = String.fromCharCode(102,97,100,101,100,95,49,95,57,51,0);
          let helpert = 0;
         settingsa = [3];
         klevinu += `${helpert}`;
         viewero = "3";
         helpert += 2 << (Math.min(1, viewero.length));
       let orientation_: Array<any> = [String.fromCharCode(121,95,56,95,98,97,115,101,108,105,110,101,0), String.fromCharCode(104,95,54,55,95,97,114,97,98,105,99,0), String.fromCharCode(117,95,53,95,115,101,103,109,101,110,116,115,0)];
         settingsa.push(feedbackx.size);
      resulte.set(`${sortW.length}`, 2 + sortW.length);
    

      arrowX.push(videocommonX.length + parseInt(`${target9}`));
   if (4 <= downU.length) {
      downU.push(parseInt(`${yellowi}`) >> (Math.min(arrowX.length, 1)));
   }

    fetchData(searchKeyword, true);

       let actionn = 0.0;
       let kuaishous = 3;
       let linkB = String.fromCharCode(119,95,52,52,95,97,100,109,105,110,115,0);
         kuaishous |= linkB.length & kuaishous;
      if (2 < (linkB.length << (Math.min(1, Math.abs(kuaishous))))) {
         kuaishous &= parseInt(`${actionn}`) - 2;
      }
         actionn *= kuaishous / 2;
         linkB = `${(linkB == String.fromCharCode(119,0) ? parseInt(`${actionn}`) : linkB.length)}`;
         linkB += `${linkB.length}`;
      while ((3 - linkB.length) <= 1 || 4 <= (3 - kuaishous)) {
          let overx = 3.0;
         kuaishous &= 2;
         overx -= 2 - parseInt(`${overx}`);
         break;
      }
       let constantsN = String.fromCharCode(117,95,55,49,95,109,97,103,105,99,0);
         constantsN = `${linkB.length << (Math.min(5, Math.abs(kuaishous)))}`;
      while (constantsN.length <= 2) {
         constantsN += `${parseInt(`${actionn}`) ^ linkB.length}`;
         break;
      }
      videocommonX.push(2 & videocommonX.length);
      arrowX.push(yingL.length);
    dispatch(addSearchHistory(searchKeyword));

   if (downU.length <= humidityc.length) {
       let loginZ = 3;
       let listZ = 3.0;
       let promotionp: Map<any, any> = new Map([[String.fromCharCode(110,95,53,53,95,111,117,116,99,111,109,101,0),755], [String.fromCharCode(122,95,53,49,95,115,116,101,114,101,111,0),457], [String.fromCharCode(116,97,108,108,95,50,95,55,50,0),504]]);
       let zoomh = String.fromCharCode(106,95,52,52,95,103,101,116,0);
          let morec = 3;
          let policyu = 4.0;
          let black9 = String.fromCharCode(99,95,53,53,95,115,116,114,110,115,116,114,0);
         listZ -= parseFloat(`${promotionp.size >> (Math.min(zoomh.length, 4))}`);
         morec >>= Math.min(5, Math.abs(2 % (Math.max(4, parseInt(`${policyu}`)))));
         policyu += parseFloat(`${morec ^ parseInt(`${policyu}`)}`);
         black9 = `${black9.length >> (Math.min(5, Math.abs(morec)))}`;
          let scoreS = String.fromCharCode(115,99,97,108,101,95,52,95,55,0);
         zoomh = `${promotionp.size * 1}`;
         scoreS = `${scoreS.length | scoreS.length}`;
          let bella: Array<any> = [String.fromCharCode(119,95,55,50,0), String.fromCharCode(113,95,57,95,98,108,111,111,109,0)];
         zoomh = "3";
         bella.push(bella.length);
       let filef = String.fromCharCode(110,95,52,52,95,114,111,117,110,100,0);
          let shrinkJ = String.fromCharCode(98,111,110,106,111,117,114,95,103,95,49,56,0);
         filef = `${(zoomh == String.fromCharCode(70,0) ? zoomh.length : parseInt(`${listZ}`))}`;
         shrinkJ += `${shrinkJ.length | 2}`;
      let vietnamT = loginZ <= 5081311;
      do {
          let taiwanB = String.fromCharCode(116,114,121,95,118,95,52,49,0);
          let leagueE = String.fromCharCode(116,95,56,56,95,121,100,97,121,0);
          let sellO = 1;
          let privacyt = String.fromCharCode(116,95,51,56,95,101,120,112,108,111,114,101,114,0);
         loginZ >>= Math.min(3, Math.abs(loginZ * privacyt.length));
         taiwanB += "1";
         leagueE = `${leagueE.length}`;
         sellO &= (leagueE == String.fromCharCode(57,0) ? leagueE.length : sellO);
         privacyt += `${1 * leagueE.length}`;
         if (vietnamT) {
            break;
         }
      } while (vietnamT && (1.60 >= listZ));
      while ((listZ / (Math.max(1.15, 7))) <= 2.48 || (loginZ / (Math.max(parseInt(`${listZ}`), 1))) <= 4) {
          let rewarda = 2;
          let androidZ = false;
          let notificationk = 5;
         listZ += parseFloat(`${3 & loginZ}`);
         rewarda <<= Math.min(Math.abs(2 >> (Math.min(3, Math.abs(notificationk)))), 2);
         androidZ = !androidZ;
         notificationk -= 2;
         break;
      }
         promotionp = new Map([[`${listZ}`, (String.fromCharCode(83,0) == filef ? parseInt(`${listZ}`) : filef.length)]]);
          let typesP = 2.0;
         promotionp.set(`${loginZ}`, 3);
         typesP += parseInt(`${typesP}`) & 2;
      while (5 == (4 - zoomh.length) || 4 == (loginZ - 4)) {
         loginZ += loginZ;
         break;
      }
          let matchq: Array<any> = [String.fromCharCode(105,95,49,95,114,116,112,119,0), String.fromCharCode(117,95,52,57,95,118,105,100,101,111,115,116,114,101,97,109,0), String.fromCharCode(115,117,98,104,101,97,100,101,114,95,56,95,55,50,0)];
         loginZ ^= (String.fromCharCode(95,0) == filef ? loginZ : filef.length);
         matchq = [1];
      while ((listZ / (Math.max(5, loginZ))) < 4.37) {
          let catalogE = String.fromCharCode(121,95,51,51,95,110,117,109,98,101,114,0);
          let baidut: Array<any> = [635, 123, 139];
          let clockk: Map<any, any> = new Map([[String.fromCharCode(120,95,56,50,95,99,104,101,99,107,109,109,0),true ], [String.fromCharCode(108,95,53,50,95,112,114,101,100,114,97,119,110,0),true ], [String.fromCharCode(99,116,120,116,95,119,95,55,52,0),false ]]);
          let mintegral2 = String.fromCharCode(122,95,55,55,95,115,97,109,112,108,101,100,0);
         loginZ -= parseInt(`${listZ}`) | filef.length;
         catalogE += `${baidut.length}`;
         baidut = [baidut.length];
         clockk.set(catalogE, baidut.length);
         mintegral2 += `${catalogE.length % 3}`;
         break;
      }
      downU = [1 - humidityc.length];
   }
      commonx = `${(String.fromCharCode(81,0) == yingL ? downU.length : yingL.length)}`;
    setShowResults(!showResults);
  };

  const clearHistory = useCallback(() => {
       let complete5: Array<any> = [200, 765, 734];
    let episode2 = 2.0;
    let stepE: Array<any> = [332, 182];
    let groupH = 5.0;
    let clockY = 4;
    let logom = 1.0;
    let collectionK: Array<any> = [25, 815];
    let formi = String.fromCharCode(115,116,114,117,99,116,117,114,101,115,95,53,95,49,55,0);
    let loadingh = 4.0;
    let bootsplash2 = 2.0;
    let private_jZ = 1;
    let mbnativen = 0.0;
    let mbbidr: Map<any, any> = new Map([[String.fromCharCode(119,105,110,116,104,114,101,97,100,95,106,95,49,54,0),String.fromCharCode(101,116,104,101,114,110,101,116,95,55,95,55,52,0)], [String.fromCharCode(116,105,108,105,110,103,95,49,95,54,57,0),String.fromCharCode(98,117,102,115,95,120,95,54,54,0)], [String.fromCharCode(100,105,118,105,100,101,110,100,95,117,95,51,52,0),String.fromCharCode(97,95,51,53,95,102,97,108,108,111,102,102,0)]]);
    let leftt = false;
    let relatedB: Map<any, any> = new Map([[String.fromCharCode(119,95,55,53,95,102,116,121,112,0),20], [String.fromCharCode(97,95,55,55,95,98,117,103,115,0),140], [String.fromCharCode(116,109,109,98,114,95,103,95,57,52,0),454]]);
   while ((complete5.length & collectionK.length) == 4) {
      complete5.push(clockY);
      break;
   }
      private_jZ /= Math.max(2, 1);
   let currentz = 5234591.0 >= loadingh;
   do {
      loadingh /= Math.max(4, parseFloat(`${3 * parseInt(`${episode2}`)}`));
      if (currentz) {
         break;
      }
   } while ((4 < (2 % (Math.max(1, complete5.length)))) && currentz);
       let friendsq = String.fromCharCode(113,116,115,95,54,95,56,52,0);
      while (friendsq != String.fromCharCode(81,0) && 5 >= friendsq.length) {
         friendsq += `${1 << (Math.min(3, friendsq.length))}`;
         break;
      }
          let chatV = false;
          let sinaB = 3.0;
          let score6: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,112,95,52,53,0),588], [String.fromCharCode(110,101,101,100,101,100,95,111,95,55,51,0),150], [String.fromCharCode(106,95,56,53,95,110,116,105,108,101,0),226]]);
         friendsq = "3";
         chatV = score6.size > 55 || !chatV;
         sinaB *= score6.size * 3;
       let modalK = String.fromCharCode(118,97,114,105,97,98,105,108,105,116,121,95,57,95,53,48,0);
       let skipn = String.fromCharCode(115,101,99,111,110,100,95,49,95,51,48,0);
      private_jZ -= clockY * 1;
       let mimov = String.fromCharCode(112,95,49,50,95,99,111,114,101,105,109,97,103,101,0);
       let contextG: Array<any> = [586, 279, 122];
         mimov = `${(mimov == String.fromCharCode(79,0) ? mimov.length : contextG.length)}`;
         mimov += `${contextG.length}`;
         mimov = "2";
          let singapore4 = 0;
         contextG = [singapore4 >> (Math.min(mimov.length, 2))];
      for (let w = 0; w < 1; w++) {
          let calendarO = String.fromCharCode(115,99,111,112,101,95,110,95,50,48,0);
          let signinupb = String.fromCharCode(108,95,54,48,95,112,114,101,102,101,114,101,110,99,101,115,0);
         mimov = `${signinupb.length}`;
         calendarO = `${calendarO.length}`;
         signinupb = `${3 | calendarO.length}`;
      }
         contextG = [contextG.length];
      private_jZ >>= Math.min(3, Math.abs(3 | contextG.length));
       let fastL = 1.0;
       let long_wy = String.fromCharCode(114,101,112,101,97,116,95,105,95,55,57,0);
       let renewo: Map<any, any> = new Map([[String.fromCharCode(100,121,110,97,109,105,99,95,106,95,57,0),92], [String.fromCharCode(121,95,48,95,115,101,112,97,114,97,116,111,114,115,0),483]]);
      if (long_wy.endsWith(`${renewo.size}`)) {
         renewo.set(long_wy, (long_wy == String.fromCharCode(65,0) ? long_wy.length : parseInt(`${fastL}`)));
      }
      while (4 > long_wy.length) {
          let langH = String.fromCharCode(111,95,50,50,95,99,97,110,99,101,108,0);
          let chartB = String.fromCharCode(99,121,99,108,105,99,114,101,102,114,101,115,104,95,98,95,53,52,0);
         long_wy += `${(chartB == String.fromCharCode(116,0) ? chartB.length : langH.length)}`;
         break;
      }
      for (let r = 0; r < 2; r++) {
          let modeB = 2.0;
         renewo = new Map([[`${renewo.size}`, parseInt(`${fastL}`)]]);
         modeB -= parseFloat(`${3}`);
      }
         long_wy = `${parseInt(`${fastL}`)}`;
          let splashb: Map<any, any> = new Map([[String.fromCharCode(122,95,55,52,95,115,101,110,100,109,98,117,102,0),290], [String.fromCharCode(115,101,113,118,105,100,101,111,95,122,95,49,54,0),255], [String.fromCharCode(103,111,116,95,103,95,49,51,0),402]]);
          let sportsm = 2;
          let utils4 = String.fromCharCode(118,100,114,97,119,104,101,108,112,101,114,95,121,95,55,56,0);
         long_wy += `${parseInt(`${fastL}`) & sportsm}`;
         splashb = new Map([[`${splashb.size}`, utils4.length]]);
         sportsm *= 1 ^ utils4.length;
         fastL /= Math.max(parseInt(`${fastL}`), 4);
       let network5 = 3.0;
       let buffert = 0.0;
      while (!Array.from(renewo.values()).includes(network5)) {
         network5 *= 1;
         break;
      }
         network5 /= Math.max(1, 3 | renewo.size);
      stepE.push(parseInt(`${logom}`) >> (Math.min(Math.abs(2), 1)));
      groupH *= 2 % (Math.max(1, parseInt(`${groupH}`)));
      logom *= parseFloat(`${clockY | parseInt(`${groupH}`)}`);
      mbnativen += parseFloat(`${3 - parseInt(`${groupH}`)}`);
      mbnativen /= Math.max(parseFloat(`${1}`), 1);
   let targetr = groupH <= 5068211.0;
   do {
      groupH += parseInt(`${loadingh}`) / 1;
      if (targetr) {
         break;
      }
   } while (targetr && (4 >= collectionK.length));
   if (4.3 >= (mbnativen * 4.63) && 3.66 >= (4.63 * mbnativen)) {
      episode2 -= parseFloat(`${clockY - parseInt(`${bootsplash2}`)}`);
   }
      bootsplash2 /= Math.max(2, collectionK.length);
   while ((logom - 1.51) < 5.87) {
      collectionK.push(stepE.length);
      break;
   }
   while (2 >= (private_jZ ^ 1)) {
      private_jZ -= complete5.length;
      break;
   }
      collectionK = [2 >> (Math.min(Math.abs(parseInt(`${mbnativen}`)), 3))];
   if (complete5.length >= 3) {
      episode2 -= parseFloat(`${parseInt(`${logom}`)}`);
   }
      collectionK.push(parseInt(`${bootsplash2}`));
   while (logom > bootsplash2) {
       let o_unlock9 = String.fromCharCode(122,95,56,57,95,107,97,105,115,101,114,0);
       let members = 2.0;
       let nativeexV: Map<any, any> = new Map([[String.fromCharCode(100,105,116,97,98,108,101,95,116,95,52,56,0),600], [String.fromCharCode(121,95,56,51,95,112,114,111,103,114,97,109,0),771], [String.fromCharCode(107,95,57,55,95,113,105,110,116,102,108,111,97,116,0),162]]);
       let styleZ = String.fromCharCode(106,95,51,52,95,115,104,111,119,0);
       let guideI = 2;
      if (1 < guideI) {
          let linen = String.fromCharCode(98,95,55,57,95,101,99,108,0);
          let pingr = String.fromCharCode(109,114,122,95,49,95,57,53,0);
          let libcrashsdkg = String.fromCharCode(97,99,99,101,112,116,95,117,95,54,51,0);
          let circleu = String.fromCharCode(115,95,57,49,95,102,105,101,108,100,115,0);
          let searchbarz = false;
         guideI -= (circleu == String.fromCharCode(71,0) ? (searchbarz ? 2 : 5) : circleu.length);
         linen = `${(String.fromCharCode(83,0) == pingr ? libcrashsdkg.length : pingr.length)}`;
         libcrashsdkg = `${pingr.length >> (Math.min(Math.abs(3), 2))}`;
         searchbarz = (linen.length >> (Math.min(pingr.length, 4))) < 21;
      }
         guideI *= guideI >> (Math.min(Math.abs(3), 4));
          let verticalr = true;
         guideI >>= Math.min(Math.abs(guideI), 2);
         verticalr = !verticalr;
          let sheeta = 2.0;
          let dangerF = true;
          let middleware3: Array<any> = [718, 102];
         o_unlock9 += `${parseInt(`${members}`) % (Math.max(o_unlock9.length, 2))}`;
         sheeta /= Math.max((parseFloat(`${2 ^ (dangerF ? 4 : 2)}`)), 5);
         dangerF = 87.9 <= sheeta;
         middleware3 = [parseInt(`${sheeta}`) << (Math.min(5, Math.abs(1)))];
          let modity7 = true;
          let utilsO = String.fromCharCode(105,115,115,117,105,110,103,95,122,95,57,56,0);
         o_unlock9 = `${parseInt(`${members}`)}`;
         modity7 = !modity7;
         utilsO = `${utilsO.length >> (Math.min(Math.abs(2), 4))}`;
         o_unlock9 = `${(styleZ == String.fromCharCode(84,0) ? styleZ.length : o_unlock9.length)}`;
      for (let w = 0; w < 1; w++) {
         nativeexV = new Map([[styleZ, (styleZ == String.fromCharCode(95,0) ? styleZ.length : parseInt(`${members}`))]]);
      }
      if (styleZ.startsWith(`${o_unlock9.length}`)) {
         styleZ += `${nativeexV.size}`;
      }
       let disconnectedK: Map<any, any> = new Map([[String.fromCharCode(109,95,52,52,95,101,120,99,101,101,100,115,0),195], [String.fromCharCode(118,95,49,56,95,102,97,99,101,98,111,111,107,0),395]]);
       let colorsw = String.fromCharCode(102,95,56,57,95,115,97,118,101,0);
      while ((3 - disconnectedK.size) > 1 && (styleZ.length - 3) > 3) {
          let teamT = 0.0;
         styleZ += `${parseInt(`${members}`)}`;
         teamT /= Math.max(parseInt(`${teamT}`) - parseInt(`${teamT}`), 1);
         break;
      }
      for (let s = 0; s < 1; s++) {
         members /= Math.max(parseFloat(`${parseInt(`${members}`)}`), 5);
      }
          let left5 = false;
          let contextK: Array<any> = [String.fromCharCode(97,95,53,50,95,115,116,97,121,0), String.fromCharCode(103,111,112,104,101,114,95,121,95,54,56,0)];
         o_unlock9 += `${o_unlock9.length}`;
         left5 = (contextK.length + contextK.length) > 76;
          let bootsplash7: Map<any, any> = new Map([[String.fromCharCode(109,97,105,110,98,117,110,100,108,101,95,98,95,54,52,0),512], [String.fromCharCode(102,95,55,54,95,112,114,111,109,112,101,103,0),603], [String.fromCharCode(110,95,50,56,95,114,101,99,101,110,116,101,114,0),464]]);
         o_unlock9 += `${colorsw.length << (Math.min(Math.abs(3), 2))}`;
         bootsplash7.set(`${bootsplash7.size}`, bootsplash7.size << (Math.min(Math.abs(2), 5)));
         nativeexV.set(`${o_unlock9}`, (String.fromCharCode(67,0) == o_unlock9 ? o_unlock9.length : disconnectedK.size));
      bootsplash2 -= nativeexV.size;
      break;
   }
      collectionK.push(2);
   let nextr = formi == String.fromCharCode(57,106,97,50,118,120,110,48,0);
   do {
       let pauseM = 5.0;
          let penalty2 = 4.0;
          let styleX: Map<any, any> = new Map([[String.fromCharCode(116,102,114,102,95,110,95,57,52,0),false ], [String.fromCharCode(108,95,53,52,95,107,115,101,116,0),true ]]);
         pauseM *= parseInt(`${penalty2}`);
         penalty2 -= styleX.size;
         styleX = new Map([[`${styleX.size}`, styleX.size << (Math.min(2, Math.abs(styleX.size)))]]);
      for (let k = 0; k < 3; k++) {
         pauseM += 3 - parseInt(`${pauseM}`);
      }
      for (let e = 0; e < 1; e++) {
         pauseM += parseInt(`${pauseM}`);
      }
      formi = `${3 / (Math.max(parseInt(`${groupH}`), 3))}`;
      if (nextr) {
         break;
      }
   } while ((loadingh > 1.35) && nextr);
   while (!stepE.includes(private_jZ)) {
      stepE.push(clockY);
      break;
   }
      mbnativen += parseFloat(`${parseInt(`${episode2}`)}`);
       let mathI = 3.0;
         mathI /= Math.max(parseInt(`${mathI}`) / 2, 1);
      while (2.42 <= mathI) {
         mathI /= Math.max(2, parseInt(`${mathI}`) * 1);
         break;
      }
      if (3.95 > mathI) {
         mathI -= parseInt(`${mathI}`);
      }
      bootsplash2 += 2 | collectionK.length;
      complete5 = [complete5.length];

    dispatch(clearSearchHistory());
  }, []);

  
  const onClickSearchResult = useCallback(() => {
       let incidentd = 1.0;
    let clocku = 3;
    let templ = 2.0;
    let stylesM = String.fromCharCode(104,95,53,57,95,115,117,98,106,111,117,114,110,97,108,0);
    let vignetteQ = String.fromCharCode(98,95,55,55,95,102,114,111,109,0);
    let friendsw = 4;
    let const_nc: Array<any> = [189, 936, 945];
    let incident7 = String.fromCharCode(116,95,52,54,95,109,97,114,107,105,110,103,0);
    let darkS = String.fromCharCode(115,104,117,102,102,108,101,112,108,97,110,101,115,95,117,95,57,56,0);
    let popup9 = true;
    let main_g4: Array<any> = [23, 942];
    let sideA = String.fromCharCode(97,118,112,114,111,103,114,97,109,95,120,95,51,53,0);
    let reducerQ: Array<any> = [247, 653, 68];
   while (parseFloat(`${vignetteQ.length}`) >= templ) {
       let calendary = 4.0;
       let tailx = String.fromCharCode(113,95,55,54,95,114,101,109,105,120,105,110,103,0);
       let sourceG: Array<any> = [663, 232];
      for (let o = 0; o < 1; o++) {
         calendary -= parseFloat(`${tailx.length}`);
      }
      for (let l = 0; l < 3; l++) {
          let source2 = 4.0;
          let baiduQ: Map<any, any> = new Map([[String.fromCharCode(114,95,51,53,95,116,111,107,101,110,116,120,0),279], [String.fromCharCode(115,95,54,54,95,122,117,108,117,0),342]]);
          let forwardi = String.fromCharCode(102,95,49,49,95,101,120,105,102,0);
          let incident9 = 1.0;
          let upgradeB: Array<any> = [972, 431, 660];
         tailx = "1";
         source2 += parseFloat(`${upgradeB.length}`);
         baiduQ = new Map([[`${baiduQ.size}`, 3 & parseInt(`${source2}`)]]);
         forwardi += "1";
         incident9 *= 3 >> (Math.min(4, Math.abs(parseInt(`${incident9}`))));
         upgradeB.push(parseInt(`${incident9}`));
      }
      if ((parseInt(`${calendary}`) / (Math.max(6, tailx.length))) < 1) {
          let utilsG: Array<any> = [909, 58];
          let hooksn = String.fromCharCode(103,114,101,103,111,114,105,97,110,95,56,95,54,51,0);
         calendary *= parseFloat(`${sourceG.length}`);
         utilsG = [2 * hooksn.length];
         hooksn = `${(hooksn == String.fromCharCode(99,0) ? utilsG.length : hooksn.length)}`;
      }
      for (let t = 0; t < 2; t++) {
         tailx += `${parseInt(`${calendary}`) - sourceG.length}`;
      }
          let injuryd = 4;
          let rulesg = 2.0;
         calendary *= parseFloat(`${sourceG.length << (Math.min(Math.abs(2), 1))}`);
         injuryd |= parseInt(`${rulesg}`) + injuryd;
         rulesg *= injuryd - parseInt(`${rulesg}`);
      for (let l = 0; l < 1; l++) {
          let expand7 = true;
          let reportd = String.fromCharCode(100,105,115,97,98,108,105,110,103,95,104,95,55,54,0);
          let button0 = false;
          let footballl = 1.0;
         tailx = `${parseInt(`${calendary}`) / 3}`;
         expand7 = (reportd.length + parseInt(`${footballl}`)) > 96;
         reportd += "2";
         button0 = reportd.length >= 53;
         footballl /= Math.max((parseInt(`${footballl}`) | (expand7 ? 5 : 2)), 2);
      }
         calendary /= Math.max(parseFloat(`${sourceG.length % 3}`), 4);
      let whiteA = 5243897 >= sourceG.length;
      do {
         sourceG = [sourceG.length];
         if (whiteA) {
            break;
         }
      } while (whiteA && (5 <= (1 | tailx.length)));
         calendary *= parseFloat(`${1 ^ parseInt(`${calendary}`)}`);
      templ *= parseFloat(`${darkS.length}`);
      break;
   }
   for (let g = 0; g < 3; g++) {
       let roboto0 = true;
         roboto0 = !roboto0;
          let detailsl = 4.0;
         roboto0 = 72.69 < detailsl;
      if (roboto0) {
          let modeo: Map<any, any> = new Map([[String.fromCharCode(109,95,53,95,116,101,114,109,115,0),101], [String.fromCharCode(114,101,109,111,118,101,95,118,95,54,55,0),651], [String.fromCharCode(110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,95,52,95,49,48,0),365]]);
         roboto0 = modeo.size >= 71 && roboto0;
      }
      templ /= Math.max(2, parseFloat(`${parseInt(`${incidentd}`) - 3}`));
   }
      darkS += `${friendsw >> (Math.min(3, Math.abs(3)))}`;
      incident7 = `${incident7.length}`;
      clocku *= ((popup9 ? 4 : 4) / (Math.max(vignetteQ.length, 10)));
       let overlayc = 2.0;
       let delegate_tP = 2;
       let internetH = String.fromCharCode(97,116,114,97,99,97,108,95,106,95,50,53,0);
      for (let e = 0; e < 2; e++) {
         overlayc += parseFloat(`${3}`);
      }
       let macauU: Map<any, any> = new Map([[String.fromCharCode(101,95,55,51,95,114,112,114,111,98,101,0),248], [String.fromCharCode(98,95,52,95,97,99,101,110,99,0),496], [String.fromCharCode(97,99,99,101,108,101,114,97,116,101,100,95,48,95,51,55,0),905]]);
         macauU.set(`${overlayc}`, 2 << (Math.min(1, Math.abs(parseInt(`${overlayc}`)))));
      let update_9nG = 8528838 <= internetH.length;
      do {
          let pingR = String.fromCharCode(120,95,50,56,95,115,105,110,101,115,0);
          let temperature5 = true;
          let update_iuk = 4;
          let moonP = 1;
         internetH += `${((temperature5 ? 1 : 1) / (Math.max(moonP, 1)))}`;
         pingR += `${(String.fromCharCode(81,0) == pingR ? pingR.length : update_iuk)}`;
         temperature5 = (pingR.length >> (Math.min(4, Math.abs(update_iuk)))) > 69;
         moonP %= Math.max(pingR.length << (Math.min(3, Math.abs(update_iuk))), 5);
         if (update_9nG) {
            break;
         }
      } while (update_9nG && (2 <= (internetH.length & macauU.size) || 2 <= (internetH.length & macauU.size)));
      let roomN = overlayc <= 9307573.0;
      do {
          let forwardw = String.fromCharCode(99,95,50,50,95,101,100,103,101,0);
          let loadingt = 2.0;
         overlayc /= Math.max(3, (parseFloat(`${String.fromCharCode(78,0) == forwardw ? internetH.length : forwardw.length}`)));
         loadingt /= Math.max(3 + parseInt(`${loadingt}`), 5);
         if (roomN) {
            break;
         }
      } while ((macauU.size > parseInt(`${overlayc}`)) && roomN);
         macauU.set(internetH, 2);
       let container6 = 0;
       let strr = 4;
          let field3: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,109,101,95,98,95,53,50,0),283], [String.fromCharCode(116,95,56,56,95,112,111,115,116,102,105,120,0),64], [String.fromCharCode(112,97,110,101,108,115,95,48,95,53,57,0),918]]);
         container6 += (String.fromCharCode(108,0) == internetH ? internetH.length : strr);
         field3.set(`${field3.size}`, field3.size << (Math.min(Math.abs(3), 4)));
         internetH += `${1 ^ delegate_tP}`;
      darkS += `${sideA.length / (Math.max(1, 4))}`;
   for (let p = 0; p < 2; p++) {
      stylesM = `${parseInt(`${templ}`)}`;
   }
       let phone2 = String.fromCharCode(108,105,98,97,118,114,101,115,97,109,112,108,101,95,111,95,53,56,0);
      for (let u = 0; u < 1; u++) {
         phone2 = `${phone2.length}`;
      }
          let miniZ: Map<any, any> = new Map([[String.fromCharCode(112,114,111,103,114,101,115,105,118,101,95,108,95,56,54,0),544], [String.fromCharCode(118,95,51,56,95,104,99,109,99,0),495], [String.fromCharCode(119,101,108,115,101,110,99,100,101,109,111,95,111,95,53,49,0),63]]);
          let morea = String.fromCharCode(114,95,51,53,95,97,98,111,117,116,115,0);
          let notificationQ = 2.0;
         phone2 += `${morea.length}`;
         miniZ = new Map([[`${miniZ.size}`, miniZ.size]]);
         morea = `${miniZ.size}`;
         notificationQ -= parseFloat(`${parseInt(`${notificationQ}`)}`);
         phone2 = `${(String.fromCharCode(55,0) == phone2 ? phone2.length : phone2.length)}`;
      incident7 = `${parseInt(`${templ}`)}`;
   if (4 <= (2 * clocku)) {
       let sanso: Array<any> = [228, 195];
       let diceV = 4.0;
       let entryp: Map<any, any> = new Map([[String.fromCharCode(112,95,55,52,95,116,119,105,99,101,0),330], [String.fromCharCode(118,101,114,98,111,115,101,95,53,95,56,55,0),88]]);
       let umengb = String.fromCharCode(109,102,113,101,95,113,95,50,51,0);
       let sentryk = String.fromCharCode(111,99,115,112,95,122,95,51,53,0);
          let time_w4 = String.fromCharCode(101,95,50,53,95,101,120,101,99,117,116,97,98,108,101,0);
          let t_count8 = 2;
         entryp.set(`${diceV}`, 2);
         time_w4 += `${time_w4.length}`;
         t_count8 <<= Math.min(5, Math.abs(t_count8 / 3));
      while (entryp.size < sentryk.length) {
         sentryk += "2";
         break;
      }
          let interstitial3 = String.fromCharCode(111,95,57,52,95,115,99,97,110,115,116,97,116,117,115,0);
          let faviconR = String.fromCharCode(113,95,57,51,95,108,111,119,101,115,116,0);
          let serviceZ = 2.0;
         entryp = new Map([[`${entryp.size}`, 2]]);
         interstitial3 = `${(String.fromCharCode(56,0) == faviconR ? faviconR.length : parseInt(`${serviceZ}`))}`;
         serviceZ /= Math.max(5, parseFloat(`${3 & faviconR.length}`));
      for (let l = 0; l < 3; l++) {
         diceV /= Math.max(parseFloat(`${umengb.length % 3}`), 1);
      }
       let megaphonew: Map<any, any> = new Map([[String.fromCharCode(112,101,114,115,105,115,116,97,98,108,101,95,110,95,54,57,0),267], [String.fromCharCode(105,95,55,50,95,111,114,105,103,110,97,108,0),149], [String.fromCharCode(112,95,49,95,114,101,109,111,118,101,0),881]]);
         entryp.set(`${diceV}`, sanso.length & parseInt(`${diceV}`));
      let goalb = String.fromCharCode(108,104,108,56,105,106,120,50,112,55,0) == sentryk;
      do {
         sentryk += `${(String.fromCharCode(74,0) == umengb ? umengb.length : entryp.size)}`;
         if (goalb) {
            break;
         }
      } while (goalb && (!umengb.endsWith(`${sentryk.length}`)));
         sanso = [(String.fromCharCode(90,0) == umengb ? parseInt(`${diceV}`) : umengb.length)];
          let apple4: Array<any> = [String.fromCharCode(121,95,49,53,95,114,111,116,97,116,101,0), String.fromCharCode(121,95,49,51,95,115,101,97,114,99,104,0), String.fromCharCode(99,111,108,108,105,100,105,110,103,95,118,95,52,57,0)];
         megaphonew = new Map([[`${entryp.size}`, 1]]);
         apple4 = [apple4.length];
      let albumw = 5856198 >= sanso.length;
      do {
          let sentryf = false;
          let videocommonP = 0.0;
          let sigmobi: Map<any, any> = new Map([[String.fromCharCode(101,110,99,114,121,112,116,105,111,110,95,122,95,52,56,0),744], [String.fromCharCode(109,120,112,101,103,95,50,95,49,54,0),127]]);
          let textA = String.fromCharCode(99,114,101,97,116,101,95,114,95,54,55,0);
          let assist3 = String.fromCharCode(117,112,108,111,97,100,95,49,95,51,48,0);
         sanso = [megaphonew.size - assist3.length];
         sentryf = !sentryf;
         videocommonP -= (parseFloat(`${(sentryf ? 2 : 4) * parseInt(`${videocommonP}`)}`));
         sigmobi.set(textA, parseInt(`${videocommonP}`) >> (Math.min(Math.abs(2), 2)));
         textA += `${(1 % (Math.max(8, (sentryf ? 5 : 5))))}`;
         assist3 += "2";
         if (albumw) {
            break;
         }
      } while ((sanso.length > 4) && albumw);
      let network2 = 7290337.0 <= diceV;
      do {
         diceV += parseFloat(`${3 | megaphonew.size}`);
         if (network2) {
            break;
         }
      } while ((sanso.includes(diceV)) && network2);
         sanso.push(3 / (Math.max(10, parseInt(`${diceV}`))));
      for (let c = 0; c < 3; c++) {
         umengb += `${parseInt(`${diceV}`)}`;
      }
          let green7 = 2;
          let hook1 = 4.0;
          let mbsplashk = 0.0;
         diceV /= Math.max(parseFloat(`${parseInt(`${diceV}`)}`), 2);
         green7 &= parseInt(`${mbsplashk}`);
         hook1 -= parseInt(`${hook1}`) >> (Math.min(Math.abs(parseInt(`${mbsplashk}`)), 4));
       let lnewsS = 5.0;
      vignetteQ += "1";
   }
      incident7 += `${stylesM.length >> (Math.min(Math.abs(3), 4))}`;
      sideA += `${parseInt(`${templ}`) ^ 1}`;
   let combinel = 8206487 >= const_nc.length;
   do {
      const_nc = [(parseInt(`${incidentd}`) - (popup9 ? 4 : 3))];
      if (combinel) {
         break;
      }
   } while (((parseInt(`${incidentd}`) - const_nc.length) > 4 || (4 & const_nc.length) > 3) && combinel);
      templ += parseFloat(`${stylesM.length}`);
   let goal2 = main_g4.length <= 7838390;
   do {
      main_g4 = [1 ^ main_g4.length];
      if (goal2) {
         break;
      }
   } while ((!vignetteQ.endsWith(`${main_g4.length}`)) && goal2);
      friendsw -= vignetteQ.length & friendsw;
      incidentd += (parseFloat(`${String.fromCharCode(80,0) == vignetteQ ? vignetteQ.length : stylesM.length}`));
   let unreadD = 7221298 <= sideA.length;
   do {
      sideA += `${friendsw | 3}`;
      if (unreadD) {
         break;
      }
   } while (unreadD && (5.92 >= (templ - parseFloat(`${sideA.length}`)) || (sideA.length % 1) >= 1));
      templ /= Math.max(2, parseFloat(`${main_g4.length ^ parseInt(`${templ}`)}`));
   if (sideA.startsWith(`${popup9}`)) {
      sideA = "2";
   }
   while (4 < const_nc.length) {
       let savev = String.fromCharCode(115,109,97,108,108,101,115,116,95,118,95,53,51,0);
       let videojst = 4.0;
       let privacyw = 3.0;
       let back3 = false;
       let footballU = 2.0;
      while (5.82 < (footballU / (Math.max(6, parseFloat(`${savev.length}`)))) && 5.82 < (parseFloat(`${savev.length}`) / (Math.max(10, footballU)))) {
          let guide6 = 0;
          let auto_stk: Map<any, any> = new Map([[String.fromCharCode(115,95,56,95,118,97,108,105,100,97,116,105,111,110,115,0),811], [String.fromCharCode(102,95,50,56,95,100,101,105,110,116,101,114,108,97,99,101,0),423]]);
         footballU += (parseFloat(`${parseInt(`${videojst}`) >> (Math.min(3, Math.abs((back3 ? 1 : 2))))}`));
         guide6 &= auto_stk.size;
         auto_stk = new Map([[`${auto_stk.size}`, auto_stk.size]]);
         break;
      }
          let chartt = String.fromCharCode(119,95,56,49,95,97,102,102,105,110,101,0);
          let agreementh = 3.0;
         back3 = footballU == parseFloat(`${chartt.length}`);
         chartt += `${parseInt(`${agreementh}`)}`;
      if (1 <= (savev.length + 4)) {
         savev += `${savev.length}`;
      }
         videojst += ((back3 ? 3 : 3) % (Math.max(1, 7)));
         privacyw -= (parseFloat(`${parseInt(`${footballU}`) & (back3 ? 3 : 5)}`));
      while ((2 * footballU) < 5.41) {
         videojst -= 2 & parseInt(`${videojst}`);
         break;
      }
      if (4.80 > (privacyw - 4.39) || 4.39 > privacyw) {
         privacyw *= parseFloat(`${parseInt(`${privacyw}`) * parseInt(`${videojst}`)}`);
      }
         back3 = videojst >= 71.74;
          let save4 = String.fromCharCode(107,95,54,56,95,102,108,97,115,104,115,118,0);
         privacyw /= Math.max(parseFloat(`${parseInt(`${footballU}`)}`), 1);
         save4 += "3";
       let fieldj = false;
      while ((videojst + savev.length) <= 4.15 || 3 <= (savev.length ^ 3)) {
         videojst += ((back3 ? 2 : 1) & parseInt(`${videojst}`));
         break;
      }
      for (let n = 0; n < 2; n++) {
         videojst *= parseInt(`${footballU}`) & 1;
      }
       let halfr = String.fromCharCode(97,95,52,54,95,112,114,101,102,102,101,114,101,100,0);
       let fieldO = String.fromCharCode(107,101,121,98,117,102,95,99,95,53,55,0);
         fieldO += `${parseInt(`${privacyw}`) << (Math.min(5, Math.abs(2)))}`;
      let zhuboR = footballU <= 6061202.0;
      do {
          let photo8 = String.fromCharCode(121,95,55,48,95,99,112,117,102,108,97,103,115,0);
          let yellowZ: Map<any, any> = new Map([[String.fromCharCode(118,95,56,55,95,109,98,118,115,0),446], [String.fromCharCode(102,114,97,109,101,114,97,116,101,95,119,95,54,49,0),794], [String.fromCharCode(98,105,116,120,95,56,95,48,0),109]]);
         footballU -= parseFloat(`${parseInt(`${privacyw}`) & 1}`);
         photo8 = "2";
         yellowZ = new Map([[`${yellowZ.size}`, (photo8 == String.fromCharCode(98,0) ? photo8.length : yellowZ.size)]]);
         if (zhuboR) {
            break;
         }
      } while (((footballU / (Math.max(parseFloat(`${halfr.length}`), 1))) == 3.37) && zhuboR);
      const_nc = [stylesM.length << (Math.min(Math.abs(3), 5))];
      break;
   }
   while (!stylesM.includes(vignetteQ)) {
      stylesM += `${stylesM.length % 2}`;
      break;
   }
       let questR: Map<any, any> = new Map([[String.fromCharCode(119,95,56,52,95,100,105,115,112,108,97,121,115,0),670], [String.fromCharCode(99,111,110,102,105,103,117,114,101,95,101,95,52,49,0),243], [String.fromCharCode(102,108,117,115,104,105,110,103,95,49,95,56,55,0),506]]);
       let splashA = 4.0;
          let bridgeg: Map<any, any> = new Map([[String.fromCharCode(113,95,52,48,95,102,105,108,108,112,0),671], [String.fromCharCode(122,109,98,118,95,118,95,49,49,0),555]]);
          let modal3: Array<any> = [441, 804, 76];
          let unread7 = 4.0;
         questR.set(`${modal3.length}`, bridgeg.size);
         bridgeg = new Map([[`${unread7}`, parseInt(`${unread7}`)]]);
         modal3 = [1 >> (Math.min(Math.abs(parseInt(`${unread7}`)), 1))];
      if ((3 % (Math.max(9, questR.size))) > 4) {
         questR = new Map([[`${questR.size}`, questR.size]]);
      }
      clocku ^= 3;

    tt_humidity_guide.searchResultClicksAnalytics();
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
            source={require("@static/images/blacklistTumbnail.gif")}
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
    color: "plashPlusZhengpian",
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
