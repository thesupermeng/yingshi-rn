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
import OrderedSearchResultsList from "../../components/search/yys_eact";
import SearchResultList from "../../components/search/yys_manifest_mini";
import ScreenContainer from "../../components/container/yys_matches";
import BackButton from "../../components/button/yys_matchdetailbg_iconarrowright_button";
import { SearchSvg, CrossSvg, ClearSvg } from "@static";
import { useQuery } from "@tanstack/react-query";

import { yysFullLibcrashsdk } from "@type";
import { RootStackScreenProps } from "@type";
import { API_DOMAIN } from "@utility";
import VodWithDescriptionList from "../../components/vod/yys_styles";
import { useAppDispatch, useAppSelector } from "@hooks";
import { yysIconclosewhiteBaiduads } from "@redux";
import FastImage from "../../components/common/yys_alert_backwhite";
import {
  addSearchHistory,
  clearSearchHistory,
} from "@redux";
import Animated, {
  FadeInUp,
  FadeOutUp,
  useAnimatedStyle,
} from "react-native-reanimated";
import EmptyList from "../../components/common/yys_benefit";
import appsFlyer from "react-native-appsflyer";
import ConfirmationModal from "../../components/modal/yys_twitter";
import { yysInactive } from "@api";
import yys_giftbutton_footballtrophy from "../../../Umeng/yys_giftbutton_footballtrophy";

export default ({ navigation, route }: RootStackScreenProps<"搜索">) => {
  const [search, setSearch] = useState("");
  const [placeholderSearch, setPlaceHolderSearch] = useState(
    route.params.initial
  );

  const [searchTimer, setSearchTimer] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [searchResults, setSearchResults] = useState<Array<yysFullLibcrashsdk>>(
    []
  );
  const [showResults, setShowResults] = useState(false);
  const [searchLimit, setSearchLimit] = useState(0)

  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(
    ({ searchHistoryReducer }: yysIconclosewhiteBaiduads) => searchHistoryReducer
  );
  const [isFetching, setisFetching] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { colors, textVariants, spacing, icons } = useTheme();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { data: recommendations } = useQuery({
    queryKey: ["recommendationList"],
    queryFn: () => yysInactive.getListByRecommendations(),
  });

  async function fetchData(text: string, userSearch: boolean = false) {
    setisFetching(true);

    
    if (userSearch && text.length > 0) yys_giftbutton_footballtrophy.searchKeywordAnalytics(text);
    

    yysInactive.getListByKeyword(text)
      .then((data) => {
        setSearchTimer(0);

        if (data.length <= 0) {
          setSearchResults([]);
        } else {
          setSearchResults(data);

          
          if (userSearch) yys_giftbutton_footballtrophy.searchResultViewsAnalytics();
          
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
    yysInactive.getListByKeyword(text, {
      page: nextPage,
    }).then((data) => {
      setSearchTimer(0);

      if (data.length <= 0) {
        setHasMore(false); 
      } else {
        
        setSearchResults([...searchResults, ...json.data.List]);
        setPage(nextPage);
        
        if (userSearch) yys_giftbutton_footballtrophy.searchResultViewsAnalytics();
        
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
       let neonT: Map<any, any> = new Map([[String.fromCharCode(116,95,52,49,95,97,99,114,111,115,115,102,97,100,101,0),103], [String.fromCharCode(120,95,52,50,95,112,108,97,105,110,116,101,120,116,0),743], [String.fromCharCode(118,95,57,56,95,97,97,99,101,110,99,0),268]]);
    let giftbuttonv = String.fromCharCode(116,95,57,54,95,110,111,114,111,117,110,100,0);
    let pingn = String.fromCharCode(101,95,52,51,95,98,111,108,100,0);
    let termsA = 5.0;
    let holderf = 0.0;
    let libfbjnio = String.fromCharCode(98,95,52,48,95,116,101,108,101,103,114,97,112,104,0);
    let humidityN = true;
    let back6 = String.fromCharCode(99,111,110,118,115,97,109,112,95,57,95,51,51,0);
    let cricketH = 2.0;
    let cornershooty = 1;
      back6 = `${neonT.size}`;
       let templateprocessors: Map<any, any> = new Map([[String.fromCharCode(98,95,51,52,95,102,105,110,101,0),String.fromCharCode(112,97,110,101,108,115,95,118,95,52,0)], [String.fromCharCode(98,121,116,101,105,110,95,111,95,52,52,0),String.fromCharCode(103,95,55,49,95,99,111,110,116,101,110,116,115,0)], [String.fromCharCode(110,95,53,55,95,110,111,110,110,117,108,108,115,115,114,99,0),String.fromCharCode(112,95,51,53,95,121,99,98,99,114,0)]]);
       let championZ = 5.0;
       let showmoreK = false;
         showmoreK = championZ == 95.65;
          let r_playerc: Map<any, any> = new Map([[String.fromCharCode(100,105,115,97,112,112,101,97,114,101,100,95,49,95,50,55,0),String.fromCharCode(117,95,55,56,95,118,111,105,100,0)], [String.fromCharCode(100,116,111,97,95,57,95,56,56,0),String.fromCharCode(112,99,109,119,98,95,109,95,56,52,0)], [String.fromCharCode(102,119,100,95,112,95,50,54,0),String.fromCharCode(97,115,115,105,103,110,101,100,95,122,95,54,57,0)]]);
         showmoreK = 18 > templateprocessors.size;
         r_playerc.set(`${r_playerc.size}`, 2);
      while (5 < (parseInt(`${championZ}`) * templateprocessors.size) && 5 < (parseInt(`${championZ}`) * templateprocessors.size)) {
         templateprocessors.set(`${showmoreK}`, templateprocessors.size / 2);
         break;
      }
          let wifirouterS = String.fromCharCode(119,105,110,100,111,119,105,110,103,95,57,95,50,55,0);
          let windg = 4.0;
          let actionA = 0;
         templateprocessors.set(`${showmoreK}`, ((showmoreK ? 5 : 5) % (Math.max(parseInt(`${championZ}`), 1))));
         wifirouterS = `${actionA}`;
         windg += parseFloat(`${2 * wifirouterS.length}`);
         actionA >>= Math.min(3, Math.abs(actionA >> (Math.min(4, Math.abs(1)))));
      while ((3.62 + championZ) == 5.11 || (championZ + parseFloat(`${templateprocessors.size}`)) == 3.62) {
         championZ -= parseFloat(`${templateprocessors.size}`);
         break;
      }
      if ((championZ / 1.4) == 3.81) {
         championZ += (parseFloat(`${parseInt(`${championZ}`) | (showmoreK ? 2 : 5)}`));
      }
       let libjsijniprofilerD: Array<any> = [660, 800];
      for (let v = 0; v < 3; v++) {
         showmoreK = (parseFloat(`${libjsijniprofilerD.length}`) + championZ) == 18.82;
      }
      while (templateprocessors.size > 2) {
         templateprocessors.set(`${championZ}`, templateprocessors.size << (Math.min(4, Math.abs(parseInt(`${championZ}`)))));
         break;
      }
      humidityN = 54.24 < cricketH;
      neonT = new Map([[libfbjnio, giftbuttonv.length]]);
   let stringF = String.fromCharCode(54,55,111,101,112,115,97,118,110,52,0) == pingn;
   do {
      pingn += `${libfbjnio.length - parseInt(`${holderf}`)}`;
      if (stringF) {
         break;
      }
   } while (stringF && (3 >= libfbjnio.length));
   let inouttargetreda = cricketH >= 6708646.0;
   do {
       let iconnewsshare9 = String.fromCharCode(104,95,54,49,0);
      while (iconnewsshare9 != iconnewsshare9) {
         iconnewsshare9 = `${3 / (Math.max(4, iconnewsshare9.length))}`;
         break;
      }
      if (iconnewsshare9.length < iconnewsshare9.length) {
          let send5 = 5.0;
         iconnewsshare9 += "1";
         send5 *= parseFloat(`${parseInt(`${send5}`) % 3}`);
      }
         iconnewsshare9 += `${(iconnewsshare9 == String.fromCharCode(77,0) ? iconnewsshare9.length : iconnewsshare9.length)}`;
      cricketH *= (parseFloat(`${(humidityN ? 1 : 5) ^ 3}`));
      if (inouttargetreda) {
         break;
      }
   } while ((5.34 >= (holderf - 3)) && inouttargetreda);
   while ((1 * giftbuttonv.length) < 4) {
      giftbuttonv = `${2 * libfbjnio.length}`;
      break;
   }
   if (neonT.get(`${holderf}`) == null) {
      holderf *= 2;
   }
      neonT.set(`${humidityN}`, 3 - parseInt(`${termsA}`));
   if (!pingn.startsWith(`${termsA}`)) {
      termsA /= Math.max(libfbjnio.length, 3);
   }
      libfbjnio += `${(parseInt(`${holderf}`) - (humidityN ? 5 : 1))}`;
   for (let l = 0; l < 1; l++) {
      humidityN = 87.97 == (holderf * cricketH);
   }
       let detailsl: Array<any> = [823, 514];
       let starM = String.fromCharCode(120,95,52,56,95,109,117,116,101,0);
       let short_oX = String.fromCharCode(109,95,56,54,95,109,111,110,111,98,105,116,0);
      for (let h = 0; h < 3; h++) {
         starM += `${starM.length}`;
      }
      while (1 == (2 - detailsl.length)) {
         short_oX = `${1 & detailsl.length}`;
         break;
      }
         detailsl.push(short_oX.length % (Math.max(2, 1)));
         starM = `${3 * short_oX.length}`;
         short_oX = `${(String.fromCharCode(80,0) == short_oX ? detailsl.length : short_oX.length)}`;
      for (let m = 0; m < 2; m++) {
         starM = `${starM.length << (Math.min(Math.abs(1), 5))}`;
      }
       let iconplayg = 0.0;
      if ((short_oX.length ^ 2) < 4 || (detailsl.length ^ 2) < 5) {
          let videocommont = String.fromCharCode(109,95,57,55,95,99,111,114,101,0);
          let twitterm = 5.0;
         short_oX += "1";
         videocommont = `${videocommont.length << (Math.min(Math.abs(1), 4))}`;
         twitterm /= Math.max(4, parseFloat(`${parseInt(`${twitterm}`)}`));
      }
          let distQ = false;
          let libapminsightbt = String.fromCharCode(117,95,49,95,104,105,110,116,101,100,0);
         iconplayg -= parseFloat(`${short_oX.length}`);
         distQ = libapminsightbt.length == 95;
         libapminsightbt = `${(String.fromCharCode(107,0) == libapminsightbt ? libapminsightbt.length : (distQ ? 5 : 3))}`;
      neonT = new Map([[`${detailsl.length}`, libfbjnio.length * detailsl.length]]);
   while ((holderf / 1.67) > 4.24) {
      humidityN = 20.43 == cricketH;
      break;
   }
      humidityN = 20.10 > termsA && libfbjnio.length > 92;
      neonT.set(giftbuttonv, neonT.size / (Math.max(3, 7)));
       let verticalu = 3.0;
       let mimew: Array<any> = [511, 567, 299];
       let libfbU = true;
       let skipA = true;
          let sliderY = 3;
         libfbU = (mimew.length & sliderY) <= 57;
         skipA = mimew.length > 50 || !skipA;
      for (let w = 0; w < 3; w++) {
         mimew = [(parseInt(`${verticalu}`) | (libfbU ? 1 : 4))];
      }
      while (skipA) {
         skipA = verticalu < 45.22;
         break;
      }
      if ((verticalu - 1.1) > 4.95) {
         mimew = [mimew.length];
      }
      cricketH += parseFloat(`${pingn.length}`);
      back6 += `${((humidityN ? 4 : 3) | 1)}`;
       let userp = String.fromCharCode(111,95,56,51,95,99,111,108,108,101,99,116,105,111,110,0);
          let commont = String.fromCharCode(116,95,54,52,95,114,101,103,105,115,116,114,97,116,105,111,110,0);
          let libreactI = true;
          let rocketR = 0.0;
         userp = `${((libreactI ? 4 : 5) % (Math.max(10, parseInt(`${rocketR}`))))}`;
         commont += `${commont.length}`;
         libreactI = commont.length <= 62;
      while (2 == userp.length) {
         userp += `${userp.length}`;
         break;
      }
      while (4 == userp.length && userp.length == 4) {
         userp += `${userp.length * 1}`;
         break;
      }
      humidityN = termsA == 18.86;
   for (let o = 0; o < 1; o++) {
      cricketH += (parseFloat(`${2 % (Math.max(5, (humidityN ? 4 : 5)))}`));
   }
   for (let o = 0; o < 2; o++) {
      humidityN = 88 < back6.length;
   }
      neonT = new Map([[`${humidityN}`, ((humidityN ? 5 : 5) << (Math.min(Math.abs(parseInt(`${cricketH}`)), 1)))]]);
      giftbuttonv += `${((humidityN ? 2 : 5))}`;

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
       let searchA = String.fromCharCode(106,95,53,48,95,114,111,117,116,105,110,115,0);
    let penaltygoalD = String.fromCharCode(99,97,115,101,95,108,95,55,52,0);
    let iconarrowrightblackt = 2.0;
    let dycreatorx: Array<any> = [970, 794, 929];
    let reactnativejso = 5.0;
    let away7 = String.fromCharCode(109,115,101,99,115,95,103,95,50,49,0);
    let splashp = false;
    let rewindt: Map<any, any> = new Map([[String.fromCharCode(99,101,114,116,95,56,95,56,49,0),838], [String.fromCharCode(116,95,57,50,95,105,110,115,116,114,117,99,116,105,111,110,0),762], [String.fromCharCode(121,95,49,48,95,112,107,103,99,111,110,102,105,103,0),682]]);
    let line0 = 2.0;
    let temperaturex = 2.0;
    let matchinactiveR = String.fromCharCode(103,95,54,50,95,115,101,97,114,99,104,97,98,108,101,0);
    let crownn = String.fromCharCode(108,95,50,50,95,115,117,98,108,97,121,111,117,116,0);
   let configa = String.fromCharCode(52,55,119,113,99,95,122,111,0) == away7;
   do {
      away7 += `${((splashp ? 3 : 5))}`;
      if (configa) {
         break;
      }
   } while ((away7.length == searchA.length) && configa);
      dycreatorx.push(dycreatorx.length * parseInt(`${reactnativejso}`));

    let searchKeyword = placeholderSearch;

   for (let p = 0; p < 1; p++) {
      away7 = `${dycreatorx.length}`;
   }
      searchA = `${away7.length * 1}`;

    if (search != "") {

   if (away7.endsWith(`${splashp}`)) {
      away7 = `${away7.length}`;
   }
   while (!penaltygoalD.endsWith(searchA)) {
       let issub3 = 1;
       let register_pI = String.fromCharCode(111,98,106,116,120,116,95,114,95,49,50,0);
       let shoot2 = String.fromCharCode(98,95,49,48,48,95,108,111,103,115,0);
       let switch_i0w = String.fromCharCode(99,108,111,115,101,115,95,49,95,53,50,0);
       let googleU: Map<any, any> = new Map([[String.fromCharCode(117,110,99,108,105,112,112,101,100,95,110,95,56,57,0),String.fromCharCode(97,99,99,101,115,115,105,98,105,108,105,116,121,95,115,95,50,0)], [String.fromCharCode(112,95,52,51,95,111,98,117,115,0),String.fromCharCode(112,114,111,109,112,116,95,103,95,55,48,0)]]);
          let fullI = String.fromCharCode(121,117,118,109,112,101,103,95,56,95,55,0);
          let package_yL = 1.0;
          let pathY = String.fromCharCode(98,95,53,54,95,99,111,109,112,101,110,115,97,116,101,100,0);
         shoot2 = `${parseInt(`${package_yL}`)}`;
         fullI += `${fullI.length}`;
         package_yL -= parseFloat(`${2}`);
         pathY = `${(fullI == String.fromCharCode(85,0) ? pathY.length : fullI.length)}`;
         googleU = new Map([[switch_i0w, (switch_i0w == String.fromCharCode(74,0) ? switch_i0w.length : issub3)]]);
      while (5 < register_pI.length) {
          let h_centerJ = String.fromCharCode(98,97,99,107,103,114,111,117,110,100,115,95,57,95,55,57,0);
          let sendo: Array<any> = [927, 972];
         register_pI += `${(String.fromCharCode(101,0) == switch_i0w ? switch_i0w.length : issub3)}`;
         h_centerJ += `${h_centerJ.length}`;
         sendo.push(h_centerJ.length / (Math.max(9, sendo.length)));
         break;
      }
         register_pI += `${2 ^ switch_i0w.length}`;
      while ((googleU.size / 1) >= 3) {
          let logousern = String.fromCharCode(114,101,97,108,109,95,104,95,52,56,0);
          let neona: Map<any, any> = new Map([[String.fromCharCode(105,95,55,57,95,115,112,97,99,101,100,0),195], [String.fromCharCode(114,116,115,112,95,50,95,57,52,0),923]]);
         shoot2 += `${issub3 & googleU.size}`;
         logousern += `${3 >> (Math.min(3, Math.abs(neona.size)))}`;
         neona = new Map([[`${neona.size}`, 1]]);
         break;
      }
         register_pI += `${(shoot2 == String.fromCharCode(82,0) ? shoot2.length : issub3)}`;
          let moony = 2.0;
         switch_i0w += `${1 ^ parseInt(`${moony}`)}`;
      for (let z = 0; z < 2; z++) {
         switch_i0w += `${(register_pI == String.fromCharCode(82,0) ? register_pI.length : issub3)}`;
      }
          let penaltyO = String.fromCharCode(100,95,52,56,95,97,103,101,0);
          let backiconi = true;
         issub3 /= Math.max(3, 1 >> (Math.min(5, shoot2.length)));
         penaltyO = `${1 - penaltyO.length}`;
         backiconi = penaltyO == penaltyO;
      if (!switch_i0w.startsWith(`${shoot2.length}`)) {
          let vietnamz = String.fromCharCode(100,111,109,105,110,97,110,116,95,54,95,50,51,0);
          let submitI = 2;
          let showlessY = 1.0;
          let feedbackI: Array<any> = [303, 669, 530];
         shoot2 = "3 * issub3";
         vietnamz = `${1 & parseInt(`${showlessY}`)}`;
         submitI *= 2 * vietnamz.length;
         showlessY -= parseFloat(`${2 / (Math.max(4, feedbackI.length))}`);
         feedbackI = [vietnamz.length];
      }
       let iconmoreu = String.fromCharCode(102,95,49,52,95,102,105,103,117,114,101,0);
         issub3 += register_pI.length ^ googleU.size;
      while (2 >= issub3) {
         iconmoreu += `${issub3 / (Math.max(register_pI.length, 3))}`;
         break;
      }
         switch_i0w = `${issub3}`;
          let megaphoneh = 2.0;
         register_pI += `${(switch_i0w == String.fromCharCode(106,0) ? switch_i0w.length : parseInt(`${megaphoneh}`))}`;
      penaltygoalD = `${penaltygoalD.length}`;
      break;
   }
      searchKeyword = search;
    }

    

      dycreatorx = [2];
   while (3 == dycreatorx.length) {
      searchA += `${((splashp ? 2 : 2) / (Math.max(parseInt(`${reactnativejso}`), 4)))}`;
      break;
   }
    

       let mintegralQ = 0;
         mintegralQ ^= mintegralQ;
         mintegralQ ^= mintegralQ;
      let themeL = 8964072 >= mintegralQ;
      do {
          let incidentS = String.fromCharCode(115,111,97,99,99,101,112,116,95,99,95,52,56,0);
          let statsR = String.fromCharCode(116,111,97,115,116,115,95,56,95,49,56,0);
          let encryptorr: Array<any> = [128, 339];
          let actionsT = false;
          let componentregistrym = String.fromCharCode(120,95,49,95,121,115,108,111,103,0);
         mintegralQ *= componentregistrym.length;
         incidentS = `${(encryptorr.length >> (Math.min(5, Math.abs((actionsT ? 1 : 3)))))}`;
         statsR = `${statsR.length}`;
         encryptorr = [(statsR.length % (Math.max(1, (actionsT ? 3 : 1))))];
         componentregistrym = `${((actionsT ? 2 : 2))}`;
         if (themeL) {
            break;
         }
      } while (themeL && ((5 - mintegralQ) > 4));
      dycreatorx.push(3 << (Math.min(1, dycreatorx.length)));
      dycreatorx.push(2 << (Math.min(Math.abs(parseInt(`${iconarrowrightblackt}`)), 1)));
    

   let templateprocessor3 = String.fromCharCode(104,95,99,99,111,54,113,0) == away7;
   do {
      away7 = `${parseInt(`${iconarrowrightblackt}`) / (Math.max(6, parseInt(`${reactnativejso}`)))}`;
      if (templateprocessor3) {
         break;
      }
   } while (((5.46 + reactnativejso) > 1.52) && templateprocessor3);
      iconarrowrightblackt *= parseFloat(`${parseInt(`${iconarrowrightblackt}`)}`);
    

   let icondefaultthumbnail8 = reactnativejso >= 9639802.0;
   do {
       let splashO = 2.0;
       let v_playerd = 0;
       let leaguedetailsbgh = 5;
       let const_oaH = String.fromCharCode(112,114,111,112,95,109,95,49,49,0);
       let icondownimgT: Map<any, any> = new Map([[String.fromCharCode(105,95,56,57,95,108,97,98,101,108,115,0),209], [String.fromCharCode(100,101,109,117,120,101,114,95,100,95,53,53,0),862], [String.fromCharCode(114,99,118,100,95,53,95,55,55,0),951]]);
         v_playerd %= Math.max(1 ^ v_playerd, 1);
      let nalyticsQ = 6964802.0 <= splashO;
      do {
         splashO *= parseFloat(`${2 ^ const_oaH.length}`);
         if (nalyticsQ) {
            break;
         }
      } while (nalyticsQ && (v_playerd <= 5));
      let downV = 5709001 <= leaguedetailsbgh;
      do {
         leaguedetailsbgh /= Math.max(2, 3 * icondownimgT.size);
         if (downV) {
            break;
         }
      } while (downV && (!const_oaH.includes(`${leaguedetailsbgh}`)));
      let exampleimageS = splashO <= 7530504.0;
      do {
         splashO *= parseFloat(`${leaguedetailsbgh % 3}`);
         if (exampleimageS) {
            break;
         }
      } while (exampleimageS && (1.28 <= (splashO * 1.65) || (2 - const_oaH.length) <= 1));
       let fullscreenmin3 = String.fromCharCode(113,95,52,57,95,103,101,116,97,117,120,118,97,108,0);
         fullscreenmin3 = `${parseInt(`${splashO}`) / 3}`;
         fullscreenmin3 += "3";
       let filed2 = 0;
       let prediction7 = 3;
         fullscreenmin3 += `${(const_oaH == String.fromCharCode(80,0) ? prediction7 : const_oaH.length)}`;
       let typing8: Array<any> = [124, 799, 315];
       let reddownarrowF: Array<any> = [225, 287, 758];
      for (let i = 0; i < 2; i++) {
         const_oaH += `${icondownimgT.size >> (Math.min(1, Math.abs(v_playerd)))}`;
      }
      let smallH = filed2 <= 9877213;
      do {
         filed2 -= filed2;
         if (smallH) {
            break;
         }
      } while (((filed2 + fullscreenmin3.length) <= 3) && smallH);
      for (let w = 0; w < 3; w++) {
          let expiredd = String.fromCharCode(109,95,50,55,95,110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,0);
          let activityh = String.fromCharCode(118,95,55,95,112,114,101,118,105,111,117,115,108,121,0);
          let overlayB: Map<any, any> = new Map([[String.fromCharCode(98,97,115,101,103,112,104,95,109,95,48,0),false ], [String.fromCharCode(107,95,55,51,95,114,101,115,101,116,0),false ], [String.fromCharCode(107,95,52,95,99,121,99,108,105,99,0),true ]]);
         reddownarrowF.push(typing8.length - leaguedetailsbgh);
         expiredd += "1";
         activityh = `${activityh.length | expiredd.length}`;
         overlayB.set(expiredd, 2 / (Math.max(4, expiredd.length)));
      }
      for (let f = 0; f < 1; f++) {
         filed2 |= icondownimgT.size;
      }
       let chatV = false;
       let settingi = true;
      reactnativejso *= v_playerd ^ 2;
      if (icondefaultthumbnail8) {
         break;
      }
   } while (icondefaultthumbnail8 && ((reactnativejso - penaltygoalD.length) > 1.39 || 4 > (penaltygoalD.length * 4)));
       let nativeU: Array<any> = [198, 87, 313];
       let runtimeI = String.fromCharCode(119,97,108,107,105,110,103,95,98,95,55,55,0);
         nativeU = [3 % (Math.max(10, runtimeI.length))];
         nativeU = [nativeU.length & runtimeI.length];
      if (nativeU.length > runtimeI.length) {
          let header2 = String.fromCharCode(100,105,115,116,114,97,99,116,105,111,110,95,110,95,54,56,0);
         runtimeI = `${nativeU.length}`;
         header2 = "3";
      }
      for (let r = 0; r < 1; r++) {
         nativeU.push((String.fromCharCode(112,0) == runtimeI ? runtimeI.length : nativeU.length));
      }
      for (let y = 0; y < 2; y++) {
          let windV = String.fromCharCode(107,95,50,48,95,109,105,120,0);
          let penaltymatchiconI = 0.0;
          let orangeclock4 = String.fromCharCode(112,95,54,50,95,110,97,116,117,114,97,108,0);
         nativeU.push(windV.length);
         windV = "1";
         penaltymatchiconI -= 1 ^ parseInt(`${penaltymatchiconI}`);
         orangeclock4 = `${3 - parseInt(`${penaltymatchiconI}`)}`;
      }
         nativeU.push(2);
      splashp = String.fromCharCode(73,0) == searchA || 32.24 >= iconarrowrightblackt;

    

      penaltygoalD += "2";
   if (4 <= (parseInt(`${reactnativejso}`) * searchA.length)) {
       let yellowscoreballf = 0.0;
       let subtextF = true;
       let runtimeschedulerg = 0;
         runtimeschedulerg |= parseInt(`${yellowscoreballf}`) & runtimeschedulerg;
      let liveendmodallogoe = subtextF ? !subtextF : subtextF;
      do {
         subtextF = 81 > runtimeschedulerg;
         if (liveendmodallogoe) {
            break;
         }
      } while ((subtextF) && liveendmodallogoe);
       let controli = String.fromCharCode(115,117,98,109,111,100,117,108,101,95,117,95,50,54,0);
       let buildw = String.fromCharCode(111,95,52,51,95,102,102,116,112,97,99,107,0);
      for (let l = 0; l < 2; l++) {
          let orangeuparrowR: Array<any> = [410, 204];
          let twittery = 1.0;
          let googleq = String.fromCharCode(101,110,100,105,110,103,95,50,95,51,0);
          let homeiconV = String.fromCharCode(116,95,53,54,95,97,99,100,99,0);
         runtimeschedulerg += ((subtextF ? 1 : 5) >> (Math.min(Math.abs(parseInt(`${yellowscoreballf}`)), 1)));
         orangeuparrowR.push(googleq.length);
         twittery /= Math.max(parseFloat(`${homeiconV.length + googleq.length}`), 3);
         homeiconV = `${orangeuparrowR.length}`;
      }
      for (let m = 0; m < 1; m++) {
         runtimeschedulerg &= buildw.length;
      }
      if (2 == (runtimeschedulerg >> (Math.min(Math.abs(4), 1)))) {
         yellowscoreballf /= Math.max(parseFloat(`${controli.length}`), 4);
      }
       let iconsubssuccessz = String.fromCharCode(105,95,55,53,0);
      for (let b = 0; b < 3; b++) {
         iconsubssuccessz += `${controli.length}`;
      }
       let chatB = 5.0;
      reactnativejso /= Math.max(parseInt(`${yellowscoreballf}`) ^ 2, 5);
   }
    

      iconarrowrightblackt += parseFloat(`${searchA.length}`);
       let runtimeschedulerk = String.fromCharCode(101,95,54,54,95,108,105,110,101,115,105,122,101,0);
      let libturbomodulejsijnik = 9428700 <= runtimeschedulerk.length;
      do {
         runtimeschedulerk = `${runtimeschedulerk.length}`;
         if (libturbomodulejsijnik) {
            break;
         }
      } while (libturbomodulejsijnik && (1 < runtimeschedulerk.length));
      if (runtimeschedulerk != runtimeschedulerk) {
         runtimeschedulerk += "3";
      }
       let matchesT = String.fromCharCode(113,95,51,51,95,115,112,97,110,115,0);
       let langr = String.fromCharCode(118,101,114,116,101,120,95,51,95,57,49,0);
      splashp = !splashp;
    

   while ((dycreatorx.length >> (Math.min(Math.abs(2), 1))) > 1 || (iconarrowrightblackt * 1.30) > 1.98) {
       let modelj = String.fromCharCode(97,118,103,95,120,95,54,57,0);
       let x_hashe = String.fromCharCode(100,95,50,51,95,108,111,110,103,101,114,0);
       let iconarrowrightwhitev = 0;
       let condensedZ = 3;
      for (let o = 0; o < 3; o++) {
         iconarrowrightwhitev |= x_hashe.length << (Math.min(Math.abs(1), 3));
      }
      for (let n = 0; n < 2; n++) {
         x_hashe = `${condensedZ}`;
      }
      while (x_hashe.startsWith(`${iconarrowrightwhitev}`)) {
         x_hashe = `${1 >> (Math.min(1, Math.abs(condensedZ)))}`;
         break;
      }
       let iconarrowleftj = String.fromCharCode(102,95,50,49,95,108,105,115,116,0);
          let gemfilex = 5.0;
         modelj += `${modelj.length}`;
         gemfilex *= parseFloat(`${parseInt(`${gemfilex}`)}`);
      let anythinkP = String.fromCharCode(120,98,55,0) == iconarrowleftj;
      do {
         iconarrowleftj += `${modelj.length}`;
         if (anythinkP) {
            break;
         }
      } while (anythinkP && ((condensedZ << (Math.min(iconarrowleftj.length, 5))) > 3 && (iconarrowleftj.length << (Math.min(4, Math.abs(condensedZ)))) > 3));
      if (!iconarrowleftj.startsWith(`${iconarrowrightwhitev}`)) {
         iconarrowrightwhitev *= modelj.length ^ x_hashe.length;
      }
       let tickedo = false;
       let libcrashsdk1 = true;
         tickedo = !libcrashsdk1;
         libcrashsdk1 = tickedo && 26 == condensedZ;
      while ((iconarrowrightwhitev * x_hashe.length) > 3 && (3 * x_hashe.length) > 1) {
         x_hashe = `${iconarrowleftj.length}`;
         break;
      }
      for (let g = 0; g < 3; g++) {
         iconarrowrightwhitev ^= condensedZ;
      }
      dycreatorx.push((String.fromCharCode(113,0) == modelj ? modelj.length : dycreatorx.length));
      break;
   }
   for (let d = 0; d < 2; d++) {
      rewindt = new Map([[away7, away7.length & 2]]);
   }
    

   for (let l = 0; l < 2; l++) {
      searchA += "2";
   }
   while (3 > (rewindt.size >> (Math.min(Math.abs(2), 5))) && 2 > (searchA.length >> (Math.min(Math.abs(2), 2)))) {
       let fullscreenmaxA = 3.0;
       let iconl = String.fromCharCode(104,95,53,48,95,99,97,110,99,101,108,0);
       let defaultfootballbgp: Array<any> = [706, 994];
       let orangetick2 = String.fromCharCode(111,112,116,105,111,110,95,107,95,51,51,0);
       let airbnbstarselectedX = 2.0;
      for (let h = 0; h < 1; h++) {
         iconl = `${(String.fromCharCode(112,0) == iconl ? iconl.length : orangetick2.length)}`;
      }
          let classese = String.fromCharCode(118,95,51,49,95,116,104,97,116,0);
          let download8 = String.fromCharCode(110,95,52,48,95,100,101,115,99,101,110,100,101,114,0);
         iconl = `${classese.length | parseInt(`${airbnbstarselectedX}`)}`;
         classese += `${(download8 == String.fromCharCode(66,0) ? download8.length : download8.length)}`;
      while (parseFloat(`${defaultfootballbgp.length}`) >= airbnbstarselectedX) {
         airbnbstarselectedX *= (parseFloat(`${orangetick2 == String.fromCharCode(114,0) ? orangetick2.length : defaultfootballbgp.length}`));
         break;
      }
      let mbnativeadvancedu = 6634307.0 >= airbnbstarselectedX;
      do {
         airbnbstarselectedX *= parseFloat(`${orangetick2.length}`);
         if (mbnativeadvancedu) {
            break;
         }
      } while (mbnativeadvancedu && (4 == orangetick2.length));
         defaultfootballbgp.push(parseInt(`${fullscreenmaxA}`) * 1);
         iconl += `${iconl.length}`;
      for (let m = 0; m < 3; m++) {
         fullscreenmaxA -= parseFloat(`${defaultfootballbgp.length}`);
      }
         fullscreenmaxA /= Math.max(5, parseFloat(`${1 | orangetick2.length}`));
          let singapore5 = 2.0;
          let ajaxE = String.fromCharCode(99,111,109,112,108,101,109,101,110,116,95,57,95,55,54,0);
         iconl += `${defaultfootballbgp.length >> (Math.min(Math.abs(1), 4))}`;
         singapore5 -= parseFloat(`${3 % (Math.max(6, ajaxE.length))}`);
         ajaxE += `${2 ^ parseInt(`${singapore5}`)}`;
       let inactiveS = true;
       let bgvipsporto = true;
          let libimagepipelineJ = 4;
         fullscreenmaxA /= Math.max(3, parseFloat(`${2}`));
         libimagepipelineJ += libimagepipelineJ << (Math.min(Math.abs(1), 1));
       let pageb = 2.0;
         bgvipsporto = parseInt(`${airbnbstarselectedX}`) > orangetick2.length;
       let iconclosewhitebgJ = String.fromCharCode(114,95,50,48,95,97,99,116,117,97,108,105,122,101,0);
          let hooksu: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,99,114,99,95,112,95,50,49,0),48], [String.fromCharCode(116,95,55,57,95,115,117,112,112,114,101,115,115,105,111,110,0),447]]);
         pageb *= parseFloat(`${hooksu.size << (Math.min(Math.abs(3), 4))}`);
      rewindt = new Map([[`${dycreatorx.length}`, 2]]);
      break;
   }
    

      splashp = (reactnativejso + rewindt.size) >= 69.4;
      line0 -= parseFloat(`${penaltygoalD.length}`);
    

       let jnewarchdefaultso = String.fromCharCode(99,97,99,97,95,108,95,49,57,0);
       let videoN = String.fromCharCode(118,97,97,112,105,95,122,95,57,56,0);
      if (!jnewarchdefaultso.startsWith(videoN)) {
          let greytickt = String.fromCharCode(111,117,116,95,52,95,55,56,0);
          let reactnativeratingsR = 2.0;
          let time_48 = 3;
         videoN += "1 & time_48";
         greytickt += `${greytickt.length | 2}`;
         reactnativeratingsR += parseFloat(`${greytickt.length + 3}`);
         time_48 <<= Math.min(3, Math.abs(parseInt(`${reactnativeratingsR}`)));
      }
         jnewarchdefaultso += `${jnewarchdefaultso.length << (Math.min(Math.abs(2), 4))}`;
      searchA = `${parseInt(`${line0}`)}`;
   for (let h = 0; h < 3; h++) {
      searchA = "3";
   }
    
    
    
    

    fetchData(searchKeyword, true);
    dispatch(addSearchHistory(searchKeyword));
    setShowResults(!showResults);
  };

  const clearHistory = useCallback(() => {
       let moon_ = String.fromCharCode(98,114,105,103,104,116,110,101,115,115,95,99,95,53,48,0);
    let volumeN = String.fromCharCode(102,111,117,110,100,95,107,95,53,53,0);
    let backgroundg = 0.0;
    let libyogaZ = String.fromCharCode(121,95,49,95,115,116,101,112,112,101,100,0);
    let gesturesc = 4;
    let disconnected8 = 1.0;
    let homeiconu = 2;
    let untickC = 4;
    let bellreminderV = String.fromCharCode(108,95,55,50,95,97,100,103,114,111,117,112,0);
    let basketballK = String.fromCharCode(111,114,97,110,103,101,95,111,95,50,57,0);
    let basketballtrophyH = true;
    let entry2 = 0.0;
   while (moon_ == String.fromCharCode(76,0)) {
      volumeN += `${3 / (Math.max(8, homeiconu))}`;
      break;
   }
       let club0: Array<any> = [String.fromCharCode(101,110,100,95,118,95,51,57,0), String.fromCharCode(111,110,101,119,97,121,95,112,95,53,56,0)];
       let basketballawayteamB = String.fromCharCode(99,95,55,51,95,97,117,116,111,0);
         club0 = [1 / (Math.max(1, club0.length))];
         club0 = [club0.length];
      if (basketballawayteamB.length == club0.length) {
         club0.push(2);
      }
         basketballawayteamB += `${basketballawayteamB.length * club0.length}`;
      for (let f = 0; f < 1; f++) {
          let searchbarL = String.fromCharCode(120,95,57,52,95,118,115,121,110,99,0);
          let downd = String.fromCharCode(108,95,50,56,95,115,117,109,109,97,114,105,101,115,0);
         basketballawayteamB += `${searchbarL.length - 1}`;
         searchbarL += `${downd.length}`;
         downd += "1";
      }
      let redgoal1 = basketballawayteamB == String.fromCharCode(54,100,111,121,100,56,119,114,0);
      do {
         basketballawayteamB = `${(String.fromCharCode(86,0) == basketballawayteamB ? club0.length : basketballawayteamB.length)}`;
         if (redgoal1) {
            break;
         }
      } while (((basketballawayteamB.length - 1) == 4) && redgoal1);
      homeiconu += homeiconu * 2;
      backgroundg /= Math.max(homeiconu, 1);
   while (5 >= moon_.length) {
      moon_ = `${untickC & parseInt(`${backgroundg}`)}`;
      break;
   }
       let tickedf: Array<any> = [230, 846];
       let bodan4 = false;
      let areac = bodan4 ? !bodan4 : bodan4;
      do {
          let greyQ = String.fromCharCode(107,105,116,116,121,95,116,95,57,48,0);
         bodan4 = bodan4 || greyQ.length < 18;
         if (areac) {
            break;
         }
      } while ((!bodan4 || (tickedf.length % 3) >= 2) && areac);
       let halffieldimagec: Array<any> = [446, 643, 825];
       let greenz: Array<any> = [String.fromCharCode(100,95,52,57,95,100,97,116,97,115,116,111,114,101,0), String.fromCharCode(109,97,107,101,99,121,103,119,105,110,112,107,103,95,120,95,53,0)];
          let playlistD = 0.0;
          let scoreO = 1.0;
          let androidP = String.fromCharCode(107,95,52,52,95,103,97,117,103,101,0);
         bodan4 = (halffieldimagec.length % (Math.max(androidP.length, 9))) >= 36;
         playlistD /= Math.max(5, parseFloat(`${parseInt(`${playlistD}`) - 1}`));
         scoreO -= parseFloat(`${parseInt(`${scoreO}`) / (Math.max(parseInt(`${playlistD}`), 9))}`);
         androidP += "3";
      for (let o = 0; o < 2; o++) {
         greenz = [halffieldimagec.length];
      }
      for (let e = 0; e < 2; e++) {
         halffieldimagec.push((3 + (bodan4 ? 3 : 5)));
      }
      while (1 >= tickedf.length || 2 >= (tickedf.length << (Math.min(Math.abs(1), 5)))) {
         tickedf = [tickedf.length];
         break;
      }
      bellreminderV += `${(moon_ == String.fromCharCode(56,0) ? moon_.length : (bodan4 ? 1 : 1))}`;
   for (let k = 0; k < 2; k++) {
       let libfollyM = 1.0;
       let langkeyH: Array<any> = [743, 730];
       let temperatureD = String.fromCharCode(100,114,98,103,95,49,95,56,50,0);
       let informationr = 2.0;
          let minivodb = 1.0;
         libfollyM += parseFloat(`${temperatureD.length}`);
         minivodb /= Math.max(1, parseFloat(`${parseInt(`${minivodb}`)}`));
         temperatureD += `${(temperatureD == String.fromCharCode(74,0) ? temperatureD.length : langkeyH.length)}`;
      while ((2 / (Math.max(4, langkeyH.length))) > 2) {
          let predictionlossL = 4.0;
          let code_ = String.fromCharCode(122,95,49,55,95,109,117,108,120,0);
          let chinax = String.fromCharCode(101,95,50,53,95,97,100,106,117,115,109,101,110,116,115,0);
          let robotoJ = 4;
         langkeyH = [temperatureD.length];
         predictionlossL *= parseFloat(`${robotoJ}`);
         code_ = `${chinax.length}`;
         chinax = `${robotoJ ^ 3}`;
         break;
      }
      if (5 <= (5 << (Math.min(3, temperatureD.length))) && (parseInt(`${informationr}`) * temperatureD.length) <= 5) {
         temperatureD = `${parseInt(`${libfollyM}`)}`;
      }
      while ((temperatureD.length & 2) > 2 && 4 > (2 & langkeyH.length)) {
         langkeyH = [2 & temperatureD.length];
         break;
      }
      for (let f = 0; f < 1; f++) {
         temperatureD = `${temperatureD.length}`;
      }
      for (let q = 0; q < 3; q++) {
          let time_gp = String.fromCharCode(111,95,55,53,95,115,121,110,116,97,120,0);
          let unimplementedviewJ = 0.0;
          let live6 = String.fromCharCode(113,95,54,49,95,99,98,114,116,0);
          let subtext9 = String.fromCharCode(114,101,112,108,105,101,114,115,95,117,95,53,54,0);
          let orangeuparrowi = 5.0;
         temperatureD += `${live6.length}`;
         time_gp += `${time_gp.length}`;
         unimplementedviewJ -= parseFloat(`${parseInt(`${unimplementedviewJ}`) << (Math.min(Math.abs(1), 2))}`);
         live6 += `${parseInt(`${unimplementedviewJ}`)}`;
         subtext9 = `${parseInt(`${orangeuparrowi}`) / 1}`;
         orangeuparrowi -= (String.fromCharCode(122,0) == time_gp ? parseInt(`${unimplementedviewJ}`) : time_gp.length);
      }
      if ((4.64 / (Math.max(8, libfollyM))) > 1.18) {
         temperatureD += `${parseInt(`${informationr}`) - 2}`;
      }
          let type_2t = 0;
          let turndownM: Array<any> = [String.fromCharCode(115,97,108,116,95,98,95,51,55,0), String.fromCharCode(112,97,99,107,101,116,111,117,116,95,121,95,55,0), String.fromCharCode(106,95,52,52,95,113,117,97,108,105,102,121,0)];
          let telegramf = 0.0;
         libfollyM -= parseFloat(`${2}`);
         type_2t ^= type_2t + parseInt(`${telegramf}`);
         turndownM.push(parseInt(`${telegramf}`) + 1);
         libfollyM *= parseFloat(`${1 % (Math.max(5, parseInt(`${libfollyM}`)))}`);
      if (informationr >= 5.48) {
          let sigmobG = 1.0;
          let shrunkG = String.fromCharCode(114,101,116,97,105,110,115,95,114,95,54,52,0);
         temperatureD = "2";
         sigmobG /= Math.max(2, parseFloat(`${shrunkG.length ^ parseInt(`${sigmobG}`)}`));
         shrunkG = "1";
      }
      if ((libfollyM * 3) <= 2.12) {
         informationr += parseFloat(`${1 ^ parseInt(`${informationr}`)}`);
      }
      untickC <<= Math.min(4, Math.abs(langkeyH.length << (Math.min(4, Math.abs(parseInt(`${libfollyM}`))))));
   }
   for (let c = 0; c < 3; c++) {
      volumeN += `${(String.fromCharCode(104,0) == volumeN ? homeiconu : volumeN.length)}`;
   }
      libyogaZ += `${1 + moon_.length}`;
   while (4 >= (bellreminderV.length << (Math.min(Math.abs(2), 2)))) {
       let renderW = 3.0;
       let ajaxw = String.fromCharCode(115,116,114,101,97,109,105,100,95,108,95,49,51,0);
       let submitG = 2.0;
       let gesturesI = 3.0;
       let tempO: Map<any, any> = new Map([[String.fromCharCode(99,95,54,51,95,115,99,97,110,120,0),347], [String.fromCharCode(99,95,50,51,95,99,111,100,101,98,111,111,107,0),471], [String.fromCharCode(102,95,53,54,95,99,97,110,118,97,115,0),421]]);
       let malaysiaI = 4;
      for (let p = 0; p < 2; p++) {
          let promotionO = String.fromCharCode(101,110,116,114,121,112,111,105,110,116,95,101,95,56,50,0);
          let leakcheckerv = String.fromCharCode(112,95,53,52,95,114,101,103,117,108,97,114,0);
          let borderlessr = 1.0;
          let acopy_02 = 1;
         ajaxw = "2";
         promotionO += "1";
         leakcheckerv += `${(promotionO == String.fromCharCode(99,0) ? promotionO.length : leakcheckerv.length)}`;
         borderlessr /= Math.max(parseFloat(`${promotionO.length % (Math.max(1, 9))}`), 3);
         acopy_02 %= Math.max(2 >> (Math.min(3, leakcheckerv.length)), 1);
      }
      if ((renderW * 4.99) >= 4.75) {
         renderW *= 2 + tempO.size;
      }
         renderW *= 2 ^ parseInt(`${gesturesI}`);
          let applicationR: Array<any> = [924, 102];
          let usernameC = 1;
          let binddatasP = 4.0;
         malaysiaI &= 1;
         applicationR.push(parseInt(`${binddatasP}`) | usernameC);
         usernameC <<= Math.min(3, Math.abs(usernameC >> (Math.min(2, Math.abs(3)))));
         binddatasP -= parseFloat(`${2}`);
      let stationst = ajaxw.length >= 6375655;
      do {
         ajaxw += "1";
         if (stationst) {
            break;
         }
      } while (stationst && (4 < (ajaxw.length + parseInt(`${submitG}`))));
         gesturesI += (ajaxw == String.fromCharCode(117,0) ? parseInt(`${submitG}`) : ajaxw.length);
         submitG *= parseFloat(`${3}`);
          let teamdetailsbg5 = String.fromCharCode(101,95,56,55,95,102,102,109,109,97,108,0);
          let airbnbstarm: Map<any, any> = new Map([[String.fromCharCode(99,100,97,116,101,95,98,95,57,49,0),37], [String.fromCharCode(97,98,103,114,95,48,95,57,48,0),514], [String.fromCharCode(118,115,116,97,116,115,95,114,95,50,49,0),567]]);
         gesturesI -= tempO.size & teamdetailsbg5.length;
         teamdetailsbg5 = `${airbnbstarm.size}`;
         airbnbstarm = new Map([[`${airbnbstarm.size}`, airbnbstarm.size]]);
         tempO.set(`${malaysiaI}`, 3 - malaysiaI);
       let entryD = false;
       let attributedstringA = true;
      if ((2 ^ malaysiaI) < 1 || (2 | malaysiaI) < 3) {
         malaysiaI %= Math.max(parseInt(`${gesturesI}`) / 2, 3);
      }
         submitG /= Math.max(5, (parseFloat(`${(entryD ? 1 : 1) / (Math.max(3, parseInt(`${gesturesI}`)))}`)));
         ajaxw = `${1 - parseInt(`${submitG}`)}`;
      let redgoalo = 7637122 <= malaysiaI;
      do {
          let become3 = String.fromCharCode(110,115,116,97,110,116,95,111,95,55,53,0);
          let libfbjniR = 4.0;
         malaysiaI *= 3;
         become3 = "3";
         libfbjniR -= 1 << (Math.min(5, become3.length));
         if (redgoalo) {
            break;
         }
      } while (redgoalo && ((3 >> (Math.min(2, Math.abs(tempO.size)))) <= 5 || (3 >> (Math.min(2, Math.abs(tempO.size)))) <= 4));
      untickC /= Math.max(3, libyogaZ.length % 3);
      break;
   }
      homeiconu <<= Math.min(5, Math.abs(1));
      bellreminderV = `${parseInt(`${backgroundg}`)}`;
      untickC >>= Math.min(Math.abs(bellreminderV.length & volumeN.length), 2);
   for (let b = 0; b < 3; b++) {
      bellreminderV += `${homeiconu}`;
   }
       let stationsv = String.fromCharCode(97,118,101,114,95,51,95,50,0);
       let targetC = String.fromCharCode(114,101,115,105,115,116,97,110,99,101,95,50,95,55,48,0);
       let encrypt6 = 2;
       let areaA = String.fromCharCode(102,114,97,109,101,113,117,101,117,101,95,106,95,57,56,0);
       let borderlessw = String.fromCharCode(117,95,51,56,95,98,108,117,114,114,97,98,108,101,0);
       let iconcalendarF = 5.0;
         encrypt6 /= Math.max(1 & targetC.length, 3);
       let iconcloseW = 4.0;
       let dataI = 0.0;
          let anytime2 = 5;
         targetC = `${parseInt(`${iconcalendarF}`) >> (Math.min(1, Math.abs(encrypt6)))}`;
         anytime2 <<= Math.min(Math.abs(anytime2), 3);
      let downu = 5401448 <= borderlessw.length;
      do {
         borderlessw = `${3 ^ targetC.length}`;
         if (downu) {
            break;
         }
      } while (downu && ((iconcloseW - 1.32) <= 5.93 || (borderlessw.length - parseInt(`${iconcloseW}`)) <= 5));
      for (let u = 0; u < 1; u++) {
         dataI -= parseFloat(`${parseInt(`${iconcloseW}`) | parseInt(`${iconcalendarF}`)}`);
      }
      while (!areaA.startsWith(`${encrypt6}`)) {
         encrypt6 -= parseInt(`${iconcloseW}`);
         break;
      }
          let iconplayb = String.fromCharCode(115,109,112,116,101,104,100,98,97,114,115,95,49,95,49,52,0);
         areaA += `${parseInt(`${dataI}`)}`;
         iconplayb += "2";
      backgroundg /= Math.max(1, targetC.length);
      stationsv = `${(stationsv == String.fromCharCode(109,0) ? stationsv.length : stationsv.length)}`;
   while ((1.71 - backgroundg) == 4.69) {
       let iconpointscorex: Map<any, any> = new Map([[String.fromCharCode(116,114,101,101,119,114,105,116,101,114,95,48,95,50,57,0),236], [String.fromCharCode(97,108,108,114,103,98,95,106,95,55,54,0),21]]);
         iconpointscorex = new Map([[`${iconpointscorex.size}`, iconpointscorex.size]]);
         iconpointscorex = new Map([[`${iconpointscorex.size}`, iconpointscorex.size >> (Math.min(Math.abs(1), 2))]]);
         iconpointscorex.set(`${iconpointscorex.size}`, iconpointscorex.size / 2);
      backgroundg *= libyogaZ.length >> (Math.min(Math.abs(3), 1));
      break;
   }
   let time_2gs = backgroundg >= 8876968.0;
   do {
      backgroundg += parseInt(`${backgroundg}`) * 2;
      if (time_2gs) {
         break;
      }
   } while ((backgroundg >= 4.85) && time_2gs);
       let qaaga = 2.0;
         qaaga += parseInt(`${qaaga}`) / (Math.max(2, parseInt(`${qaaga}`)));
      let holderp = 9457782.0 <= qaaga;
      do {
         qaaga -= 1 * parseInt(`${qaaga}`);
         if (holderp) {
            break;
         }
      } while (holderp && (qaaga < 1.75));
      if ((qaaga + 2.84) == 4.61) {
         qaaga -= parseInt(`${qaaga}`);
      }
      gesturesc <<= Math.min(Math.abs(untickC ^ moon_.length), 5);
   while (moon_.length >= 3 || volumeN != String.fromCharCode(75,0)) {
      volumeN += `${homeiconu}`;
      break;
   }
       let turndownC: Array<any> = [989, 860];
      while (turndownC.length < 3) {
         turndownC = [turndownC.length * turndownC.length];
         break;
      }
      while (turndownC.includes(turndownC.length)) {
         turndownC = [3];
         break;
      }
      for (let m = 0; m < 1; m++) {
         turndownC = [turndownC.length >> (Math.min(Math.abs(3), 5))];
      }
      disconnected8 /= Math.max(1, parseFloat(`${gesturesc}`));
   while ((libyogaZ.length >> (Math.min(Math.abs(5), 4))) < 2) {
       let telegram3 = 5;
       let libffmpegkit0 = String.fromCharCode(97,95,57,95,118,111,116,101,0);
       let submith = true;
       let libavcodecD: Array<any> = [768, 787];
       let orange7: Array<any> = [908, 998];
          let chatbotphotoX = 4.0;
          let field_ = String.fromCharCode(105,122,101,114,111,95,102,95,53,52,0);
          let foundX = 0.0;
         orange7.push(2 ^ libffmpegkit0.length);
         chatbotphotoX += (String.fromCharCode(97,0) == field_ ? field_.length : parseInt(`${chatbotphotoX}`));
         foundX += 3;
          let lessZ: Map<any, any> = new Map([[String.fromCharCode(110,95,56,48,95,115,116,97,114,116,114,101,101,0),String.fromCharCode(115,95,56,57,95,101,120,99,108,117,100,105,110,103,0)], [String.fromCharCode(118,95,52,55,95,109,100,116,97,0),String.fromCharCode(111,112,99,111,100,101,95,115,95,53,56,0)], [String.fromCharCode(113,95,57,53,95,119,97,116,99,104,100,111,103,0),String.fromCharCode(119,95,55,51,95,120,109,117,108,0)]]);
         libffmpegkit0 = `${lessZ.size}`;
          let schedulers: Map<any, any> = new Map([[String.fromCharCode(112,117,108,108,117,112,95,108,95,54,54,0),String.fromCharCode(103,101,110,101,114,97,108,105,115,101,100,95,102,95,53,48,0)], [String.fromCharCode(117,114,97,110,100,111,109,95,114,95,49,54,0),String.fromCharCode(116,114,97,118,101,114,115,101,95,114,95,52,0)], [String.fromCharCode(116,104,111,117,103,104,95,108,95,50,55,0),String.fromCharCode(118,95,57,95,115,117,112,112,111,114,116,115,0)]]);
         libffmpegkit0 += `${telegram3}`;
         schedulers = new Map([[`${schedulers.size}`, schedulers.size & 1]]);
      for (let p = 0; p < 3; p++) {
         libffmpegkit0 = `${((submith ? 2 : 4) >> (Math.min(Math.abs(2), 5)))}`;
      }
         libavcodecD.push(orange7.length + telegram3);
      if (!submith || (5 - orange7.length) > 5) {
         submith = telegram3 > 14;
      }
      while (2 == (3 | libavcodecD.length) && (libffmpegkit0.length | libavcodecD.length) == 3) {
         libffmpegkit0 = `${libffmpegkit0.length}`;
         break;
      }
       let iconpipshrinkP: Array<any> = [String.fromCharCode(99,95,54,95,98,105,116,115,104,105,102,116,0), String.fromCharCode(115,119,101,101,112,95,107,95,56,51,0), String.fromCharCode(108,95,56,50,95,106,115,105,109,100,99,112,117,0)];
       let logind: Array<any> = [743, 517, 363];
         logind.push(((submith ? 1 : 1) - logind.length));
      while ((telegram3 / 1) < 2) {
         telegram3 |= 3;
         break;
      }
          let iconarrowrightorange1 = 5.0;
         libavcodecD.push(libffmpegkit0.length * libavcodecD.length);
         iconarrowrightorange1 -= 3 % (Math.max(parseInt(`${iconarrowrightorange1}`), 2));
          let mapbuffer3 = String.fromCharCode(104,95,53,56,95,99,111,110,102,111,114,109,97,110,99,101,0);
         iconpipshrinkP = [telegram3];
         mapbuffer3 += `${mapbuffer3.length % 1}`;
      let questH = orange7.length >= 5159553;
      do {
         orange7.push(iconpipshrinkP.length);
         if (questH) {
            break;
         }
      } while ((5 >= (4 >> (Math.min(3, iconpipshrinkP.length))) || (iconpipshrinkP.length >> (Math.min(3, orange7.length))) >= 4) && questH);
      if (libffmpegkit0.length <= 5) {
         libffmpegkit0 = `${telegram3 ^ logind.length}`;
      }
         submith = 64 == orange7.length;
      libyogaZ += `${(libyogaZ == String.fromCharCode(102,0) ? libyogaZ.length : orange7.length)}`;
      break;
   }
   if ((1 << (Math.min(2, Math.abs(untickC)))) > 3) {
       let colorsu = String.fromCharCode(109,97,103,110,105,116,117,100,101,95,117,95,53,54,0);
       let libapminsightbt: Array<any> = [String.fromCharCode(117,110,105,116,95,115,95,49,48,48,0), String.fromCharCode(112,95,49,50,95,97,99,99,117,114,97,116,101,0)];
       let gmailG: Array<any> = [String.fromCharCode(118,95,50,55,95,99,111,108,108,97,112,115,101,0), String.fromCharCode(122,95,56,50,95,118,97,110,99,0)];
         colorsu = `${gmailG.length}`;
      for (let m = 0; m < 2; m++) {
          let tempnodataw = String.fromCharCode(119,95,52,53,95,116,117,108,115,105,0);
          let analytic7 = String.fromCharCode(100,105,115,112,95,113,95,52,49,0);
          let encryptorv: Map<any, any> = new Map([[String.fromCharCode(101,95,55,57,95,111,112,116,105,109,97,108,0),884], [String.fromCharCode(111,95,54,48,95,102,111,114,119,97,114,100,0),240], [String.fromCharCode(102,102,109,97,116,104,95,111,95,51,53,0),881]]);
          let vignette7 = false;
         gmailG.push(colorsu.length);
         tempnodataw += `${encryptorv.size ^ tempnodataw.length}`;
         analytic7 = `${tempnodataw.length / 1}`;
         encryptorv.set(analytic7, tempnodataw.length | analytic7.length);
         vignette7 = encryptorv.size < 12 && vignette7;
      }
      untickC &= ((basketballtrophyH ? 2 : 4) ^ parseInt(`${backgroundg}`));
   }

    dispatch(clearSearchHistory());
  }, []);

  
  const onClickSearchResult = useCallback(() => {
       let libjsi3 = 1.0;
    let videovarP = String.fromCharCode(119,95,57,55,95,101,98,117,108,97,115,0);
    let react4 = String.fromCharCode(103,108,105,116,99,104,95,98,95,57,48,0);
    let yellowanimationlivep = 3;
    let statisticsinactiveZ = 2;
    let controlT = String.fromCharCode(100,95,54,50,95,114,101,99,111,110,0);
    let teamdetailsbg2 = String.fromCharCode(100,105,97,108,108,101,100,95,50,95,50,48,0);
    let desco = 5.0;
    let splashg = String.fromCharCode(100,105,114,97,99,95,53,95,54,53,0);
    let iconeyeE = String.fromCharCode(116,116,116,95,107,95,54,0);
    let trophyd = String.fromCharCode(116,97,98,108,101,99,95,111,95,57,50,0);
    let bells: Map<any, any> = new Map([[String.fromCharCode(110,95,54,57,95,109,117,110,108,111,99,107,0),141], [String.fromCharCode(102,116,118,99,108,95,121,95,55,50,0),769], [String.fromCharCode(97,114,114,95,111,95,56,48,0),967]]);
    let orientationk = String.fromCharCode(119,95,57,56,95,112,101,110,100,105,110,103,115,0);
    let buildF = 1.0;
    let grayR = 5;
      teamdetailsbg2 = `${statisticsinactiveZ >> (Math.min(Math.abs(parseInt(`${desco}`)), 5))}`;
      react4 = `${(videovarP == String.fromCharCode(119,0) ? parseInt(`${libjsi3}`) : videovarP.length)}`;
      desco += 2;
   while (3 == (yellowanimationlivep / 5) && (5 ^ yellowanimationlivep) == 2) {
      libjsi3 *= parseFloat(`${3}`);
      break;
   }
   if (react4.length > splashg.length) {
      splashg = "2";
   }
       let show7 = String.fromCharCode(97,95,51,48,95,111,112,116,105,111,110,97,108,0);
       let memberL: Array<any> = [111, 746, 186];
       let iconarrowrightwhite8 = String.fromCharCode(112,95,55,49,95,115,105,103,110,97,98,108,101,0);
         memberL = [memberL.length - show7.length];
         memberL.push(show7.length | 1);
      for (let z = 0; z < 3; z++) {
         memberL = [show7.length];
      }
         memberL.push(show7.length);
      while ((2 ^ memberL.length) == 5 && (memberL.length ^ 2) == 4) {
          let subtextS = String.fromCharCode(102,95,51,55,95,97,117,116,111,109,97,116,105,99,0);
          let stationk = String.fromCharCode(97,99,116,105,111,110,115,95,99,95,55,54,0);
          let spinnerj: Map<any, any> = new Map([[String.fromCharCode(105,110,118,97,114,105,97,110,116,115,95,122,95,54,51,0),true ], [String.fromCharCode(104,97,115,104,116,97,103,95,109,95,54,55,0),false ], [String.fromCharCode(99,95,52,52,0),false ]]);
          let imagenomoredatap = String.fromCharCode(118,95,51,95,113,115,99,97,108,101,0);
          let suggestionl: Map<any, any> = new Map([[String.fromCharCode(103,95,50,95,105,110,115,101,114,116,105,111,110,0),602], [String.fromCharCode(99,95,54,55,95,112,114,111,102,105,108,101,0),922]]);
         memberL = [2];
         subtextS = "3";
         stationk += "1";
         spinnerj = new Map([[`${suggestionl.size}`, 2]]);
         imagenomoredatap = `${suggestionl.size}`;
         break;
      }
       let matchinactiveU = true;
       let chinasamer = true;
      for (let t = 0; t < 1; t++) {
         matchinactiveU = !matchinactiveU;
      }
      let reactB = matchinactiveU ? !matchinactiveU : matchinactiveU;
      do {
          let condensedG = String.fromCharCode(101,95,55,54,95,117,112,99,97,108,108,0);
          let nodef = 0;
          let clockg = String.fromCharCode(107,95,56,51,95,114,101,115,105,100,101,110,99,101,0);
         matchinactiveU = chinasamer;
         condensedG = `${1 % (Math.max(2, condensedG.length))}`;
         nodef ^= condensedG.length ^ 3;
         clockg = `${(clockg == String.fromCharCode(113,0) ? clockg.length : nodef)}`;
         if (reactB) {
            break;
         }
      } while (reactB && (chinasamer || !matchinactiveU));
          let guide0 = 2.0;
          let audienced = 3.0;
          let basketballtrophyu = 1.0;
         matchinactiveU = show7.length == 29 || guide0 == 91.80;
         guide0 /= Math.max(parseFloat(`${parseInt(`${audienced}`)}`), 5);
         basketballtrophyu += parseFloat(`${3 ^ parseInt(`${audienced}`)}`);
      desco += 2 & react4.length;
   let detailsx = 7740593.0 <= desco;
   do {
       let iconmorec: Map<any, any> = new Map([[String.fromCharCode(114,95,50,52,95,118,97,114,105,97,98,108,101,0),115], [String.fromCharCode(108,95,57,49,95,110,117,109,101,114,97,108,0),397]]);
       let hejiW = 5;
      for (let v = 0; v < 2; v++) {
         hejiW %= Math.max(3, 2 / (Math.max(9, hejiW)));
      }
         iconmorec.set(`${hejiW}`, iconmorec.size % (Math.max(4, hejiW)));
      if (iconmorec.get(`${hejiW}`) == null) {
         iconmorec = new Map([[`${iconmorec.size}`, hejiW << (Math.min(Math.abs(1), 1))]]);
      }
         hejiW /= Math.max(iconmorec.size, 4);
      while (Array.from(iconmorec.values()).includes(hejiW)) {
         iconmorec = new Map([[`${iconmorec.size}`, iconmorec.size]]);
         break;
      }
         iconmorec = new Map([[`${iconmorec.size}`, 3 >> (Math.min(5, Math.abs(hejiW)))]]);
      desco *= videovarP.length;
      if (detailsx) {
         break;
      }
   } while (detailsx && (4.46 <= (desco / 2.7)));
   let defaultpredictionprofileq = 7740494 <= iconeyeE.length;
   do {
       let whistle9 = String.fromCharCode(99,111,109,112,108,101,116,101,100,95,116,95,54,51,0);
       let bnewinterstitialn = 4;
         bnewinterstitialn |= whistle9.length;
          let baselineo = false;
         bnewinterstitialn += bnewinterstitialn & 2;
         baselineo = !baselineo && !baselineo;
      let reminder9 = 8283705 <= bnewinterstitialn;
      do {
          let serviceE = 1;
          let pangled = 0.0;
          let const_15p = false;
         bnewinterstitialn |= parseInt(`${pangled}`) | 3;
         serviceE >>= Math.min(3, Math.abs(serviceE));
         pangled -= ((const_15p ? 1 : 4) << (Math.min(Math.abs(serviceE), 4)));
         const_15p = serviceE == 60 && !const_15p;
         if (reminder9) {
            break;
         }
      } while (reminder9 && (whistle9.length < 3));
       let sideV = String.fromCharCode(106,95,54,50,95,100,105,115,99,117,115,115,0);
       let hometeamfieldg = String.fromCharCode(117,95,53,49,95,97,112,105,0);
         whistle9 += `${whistle9.length}`;
         hometeamfieldg += "2";
      iconeyeE = `${iconeyeE.length * react4.length}`;
      if (defaultpredictionprofileq) {
         break;
      }
   } while ((react4 != String.fromCharCode(102,0)) && defaultpredictionprofileq);
   for (let g = 0; g < 2; g++) {
      teamdetailsbg2 = `${splashg.length & 3}`;
   }
   for (let g = 0; g < 3; g++) {
      videovarP += `${splashg.length & statisticsinactiveZ}`;
   }
       let watchW = String.fromCharCode(103,95,49,48,95,120,114,101,115,0);
       let description_oZ = String.fromCharCode(119,112,116,104,114,101,97,100,115,95,97,95,53,57,0);
       let encryptS = false;
      if (watchW == description_oZ) {
         description_oZ = `${description_oZ.length / 3}`;
      }
      while (watchW.length > description_oZ.length) {
         watchW += `${watchW.length}`;
         break;
      }
         description_oZ = `${3 << (Math.min(1, description_oZ.length))}`;
      if (watchW == String.fromCharCode(55,0)) {
         description_oZ += `${description_oZ.length | watchW.length}`;
      }
         watchW = `${((encryptS ? 2 : 4) % (Math.max(watchW.length, 8)))}`;
         encryptS = 34 > watchW.length;
      while (watchW.length > description_oZ.length) {
          let dragcloseT = 3;
         watchW = `${((encryptS ? 4 : 3))}`;
         dragcloseT -= dragcloseT;
         break;
      }
         watchW += `${((encryptS ? 1 : 5) % (Math.max(watchW.length, 4)))}`;
         description_oZ += `${(description_oZ == String.fromCharCode(88,0) ? description_oZ.length : (encryptS ? 3 : 4))}`;
      yellowanimationlivep += watchW.length << (Math.min(Math.abs(3), 3));
      videovarP += "1";
   let pingf = yellowanimationlivep >= 6477361;
   do {
      yellowanimationlivep ^= parseInt(`${desco}`);
      if (pingf) {
         break;
      }
   } while ((yellowanimationlivep <= desco) && pingf);
   for (let v = 0; v < 1; v++) {
       let iconpointscoreh = String.fromCharCode(112,97,99,105,110,103,95,109,95,57,49,0);
       let main_pe = String.fromCharCode(115,113,108,105,116,101,101,120,116,95,111,95,52,53,0);
       let suggestiong = 3;
       let episodese = String.fromCharCode(109,117,115,105,99,95,108,95,51,53,0);
       let bellreminderl = String.fromCharCode(100,105,114,101,99,116,105,111,110,95,56,95,55,50,0);
       let producti = String.fromCharCode(97,108,105,118,101,95,97,95,55,52,0);
      while (bellreminderl != String.fromCharCode(53,0)) {
         main_pe += `${suggestiong}`;
         break;
      }
       let recommendationO: Array<any> = [159, 567];
       let iconcurrentmatchz: Array<any> = [321, 726];
         recommendationO.push(recommendationO.length << (Math.min(Math.abs(1), 3)));
      for (let x = 0; x < 1; x++) {
          let questl = String.fromCharCode(97,95,49,95,105,110,118,111,108,118,101,100,0);
         recommendationO = [producti.length << (Math.min(Math.abs(1), 1))];
         questl = `${questl.length % 1}`;
      }
       let disconnectedlogol = 2.0;
       let iconviewer7 = 1.0;
         producti = `${recommendationO.length + 3}`;
         suggestiong %= Math.max(2, recommendationO.length + 1);
      while (bellreminderl.length > 1) {
          let background7 = String.fromCharCode(115,101,116,99,98,95,97,95,52,53,0);
         iconpointscoreh = `${parseInt(`${iconviewer7}`)}`;
         background7 = `${background7.length >> (Math.min(Math.abs(3), 4))}`;
         break;
      }
          let useri = String.fromCharCode(109,95,51,55,95,115,117,103,103,101,115,116,105,111,110,0);
          let b_titlel = String.fromCharCode(97,95,50,49,95,109,98,101,100,103,101,0);
          let saveN = String.fromCharCode(101,95,53,53,95,119,112,101,110,100,105,110,103,0);
         producti = `${b_titlel.length}`;
         useri = "1";
         b_titlel = `${(String.fromCharCode(53,0) == saveN ? saveN.length : useri.length)}`;
         main_pe = `${bellreminderl.length}`;
      for (let q = 0; q < 2; q++) {
         main_pe = `${2 << (Math.min(2, iconcurrentmatchz.length))}`;
      }
      desco -= 3 - yellowanimationlivep;
   }
      iconeyeE = `${react4.length}`;
   let mountingj = iconeyeE == String.fromCharCode(56,115,121,48,121,102,112,99,0);
   do {
       let basketballmatchdetailbg0 = 4.0;
       let nterstitialB: Array<any> = [665, 202, 938];
       let dependency8 = String.fromCharCode(116,104,105,114,100,95,110,95,57,57,0);
         nterstitialB.push(3);
         nterstitialB.push(nterstitialB.length % (Math.max(dependency8.length, 3)));
         nterstitialB.push(parseInt(`${basketballmatchdetailbg0}`) ^ nterstitialB.length);
      if (parseInt(`${basketballmatchdetailbg0}`) > nterstitialB.length) {
         nterstitialB = [1 << (Math.min(4, dependency8.length))];
      }
          let halffieldimagez: Map<any, any> = new Map([[String.fromCharCode(103,95,55,52,95,116,109,109,98,0),965], [String.fromCharCode(107,95,57,57,95,113,117,97,100,116,114,101,101,0),984], [String.fromCharCode(109,95,50,49,95,112,115,110,114,0),185]]);
          let policyD: Map<any, any> = new Map([[String.fromCharCode(108,115,112,114,95,106,95,49,57,0),true ], [String.fromCharCode(112,95,48,95,100,105,115,112,108,97,99,101,0),true ]]);
          let iconarrowrightblackn = 2;
         dependency8 += "3";
         halffieldimagez = new Map([[`${halffieldimagez.size}`, halffieldimagez.size]]);
         policyD.set(`${iconarrowrightblackn}`, policyD.size & 1);
         iconarrowrightblackn >>= Math.min(Math.abs(policyD.size % (Math.max(4, iconarrowrightblackn))), 4);
      while (dependency8.includes(`${nterstitialB.length}`)) {
         dependency8 += `${dependency8.length}`;
         break;
      }
      let u_countS = nterstitialB.length >= 5320897;
      do {
          let chinasamel = true;
          let defaultpredictionprofileY = String.fromCharCode(109,97,114,107,101,100,95,105,95,53,52,0);
         nterstitialB.push(((chinasamel ? 5 : 1) & 2));
         chinasamel = (defaultpredictionprofileY.length << (Math.min(1, defaultpredictionprofileY.length))) >= 46;
         if (u_countS) {
            break;
         }
      } while ((!dependency8.endsWith(`${nterstitialB.length}`)) && u_countS);
      while (4 == (nterstitialB.length * parseInt(`${basketballmatchdetailbg0}`))) {
         basketballmatchdetailbg0 *= parseInt(`${basketballmatchdetailbg0}`) - 2;
         break;
      }
         nterstitialB.push(nterstitialB.length - parseInt(`${basketballmatchdetailbg0}`));
      iconeyeE = `${parseInt(`${desco}`)}`;
      if (mountingj) {
         break;
      }
   } while (mountingj && (iconeyeE.length < controlT.length));
   for (let y = 0; y < 2; y++) {
      yellowanimationlivep *= controlT.length;
   }
   while ((splashg.length - desco) == 4.11 && (splashg.length & 5) == 1) {
       let halffieldimageQ = 5.0;
       let baseF = String.fromCharCode(109,95,50,53,95,100,117,112,115,111,114,116,0);
       let shareblack_: Array<any> = [999, 623];
         baseF = `${shareblack_.length * 2}`;
         baseF += `${baseF.length - parseInt(`${halffieldimageQ}`)}`;
      while ((parseInt(`${halffieldimageQ}`) / (Math.max(baseF.length, 1))) == 4 || (halffieldimageQ / 1.82) == 2.91) {
         halffieldimageQ -= parseInt(`${halffieldimageQ}`) ^ 2;
         break;
      }
          let mathb = 2.0;
          let ballC = String.fromCharCode(115,95,57,95,109,112,101,103,112,105,99,116,117,114,101,0);
         halffieldimageQ /= Math.max(4, ballC.length % (Math.max(8, shareblack_.length)));
         mathb /= Math.max(5, parseInt(`${mathb}`) + 2);
         ballC = `${parseInt(`${mathb}`)}`;
      if (2 > (baseF.length % 2)) {
         shareblack_ = [3];
      }
      let refreshborderlessd = baseF.length <= 7839970;
      do {
          let episodesH = 0;
         baseF = `${episodesH}`;
         if (refreshborderlessd) {
            break;
         }
      } while ((3 <= baseF.length) && refreshborderlessd);
      for (let l = 0; l < 2; l++) {
         halffieldimageQ *= shareblack_.length + 3;
      }
       let logouserl = false;
       let hejib: Array<any> = [449, 883, 795];
       let station_: Array<any> = [String.fromCharCode(98,95,51,48,95,99,111,109,112,114,101,115,115,111,114,0), String.fromCharCode(118,95,55,53,95,117,116,105,108,105,116,105,101,115,0)];
      desco += (String.fromCharCode(89,0) == iconeyeE ? iconeyeE.length : parseInt(`${halffieldimageQ}`));
      break;
   }
       let libglogg = 1.0;
       let regengl = String.fromCharCode(103,95,52,49,95,112,110,103,0);
       let watchr = String.fromCharCode(114,95,55,55,95,109,111,118,105,101,0);
      if ((parseInt(`${libglogg}`) + watchr.length) > 4 || (5.70 + libglogg) > 3.0) {
         watchr += "3";
      }
      let internet2 = watchr == String.fromCharCode(106,95,109,112,109,109,111,0);
      do {
          let subtext5 = String.fromCharCode(118,95,57,53,95,105,110,116,101,114,105,116,101,109,0);
          let calendar4 = String.fromCharCode(116,104,114,101,101,100,111,115,116,114,95,120,95,51,53,0);
          let indexB: Array<any> = [391, 445, 932];
          let anytimex = 3;
         watchr += `${watchr.length & indexB.length}`;
         subtext5 += `${calendar4.length | 3}`;
         calendar4 += `${calendar4.length}`;
         indexB = [1];
         anytimex %= Math.max(2, 5);
         if (internet2) {
            break;
         }
      } while ((watchr.length <= 1) && internet2);
       let defaultfootballbgs = String.fromCharCode(101,95,50,52,95,109,111,100,101,108,0);
       let downloadingC = String.fromCharCode(97,95,55,49,95,101,120,101,99,117,116,101,0);
         regengl += `${watchr.length}`;
      let iconpipshrinkF = String.fromCharCode(50,99,95,115,121,106,122,99,0) == downloadingC;
      do {
         downloadingC += `${watchr.length - 3}`;
         if (iconpipshrinkF) {
            break;
         }
      } while (iconpipshrinkF && (regengl.length > 1));
         regengl = `${watchr.length ^ regengl.length}`;
         regengl = "2";
          let matchu = String.fromCharCode(116,114,97,110,115,112,97,114,101,110,99,121,95,108,95,50,49,0);
          let package_i7V = String.fromCharCode(116,95,55,57,95,112,114,101,102,101,114,101,110,99,101,0);
         watchr += `${matchu.length / (Math.max(8, package_i7V.length))}`;
         defaultfootballbgs = `${defaultfootballbgs.length}`;
      splashg += `${statisticsinactiveZ >> (Math.min(videovarP.length, 3))}`;

    yys_giftbutton_footballtrophy.searchResultClicksAnalytics();
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
            <SearchSvg color={colors.muted} height={23} width={23} />
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
                <CrossSvg height={12} width={12} />
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
                        <ClearSvg
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
            source={require("../../../static/images/constantsMimePhone.gif")}
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
    color: "toponHelperProject",
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
