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
import OrderedSearchResultsList from "../../components/search/ww_hooks_white";
import SearchResultList from "../../components/search/ww_penaltygoal";
import ScreenContainer from "../../components/container/ww_collection";
import BackButton from "../../components/button/ww_page_button";
import SearchIcon from "@static/images/hoverRegister_wy.svg";
import ClearIcon from "@static/images/zhengpianDefaultprofilepicScore.svg";
import { useQuery } from "@tanstack/react-query";

import { wwProfileinactiveBrightness } from "@type/ww_dycreator_result";
import { RootStackScreenProps } from "@type/ww_tempnodatagif_description";
import { API_DOMAIN } from "@utility/ww_icon";
import VodWithDescriptionList from "../../components/vod/ww_grey";
import { useAppDispatch, useAppSelector } from "@hooks/ww_catagory_neon";
import { wwEighteenShirt } from "@redux/ww_small";
import FastImage from "../../components/common/ww_result";
import {
  addSearchHistory,
  clearSearchHistory,
} from "@redux/actions/ww_submit_modal";
import Animated, {
  FadeInUp,
  FadeOutUp,
  useAnimatedStyle,
} from "react-native-reanimated";
import ClearHistoryIcon from "@static/images/tickedAssistBell.svg";
import EmptyList from "../../components/common/ww_reducer_libreact";
import appsFlyer from "react-native-appsflyer";
import ConfirmationModal from "../../components/modal/ww_upgrade";
import { wwIconedit } from "@api";
import ww_runtime from "../../../Umeng/ww_runtime";

export default ({ navigation, route }: RootStackScreenProps<"搜索">) => {
  const [search, setSearch] = useState("");
  const [placeholderSearch, setPlaceHolderSearch] = useState(
    route.params.initial
  );

  const [searchTimer, setSearchTimer] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [searchResults, setSearchResults] = useState<Array<wwProfileinactiveBrightness>>(
    []
  );
  const [showResults, setShowResults] = useState(false);
  const [searchLimit, setSearchLimit] = useState(0)

  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(
    ({ searchHistoryReducer }: wwEighteenShirt) => searchHistoryReducer
  );
  const [isFetching, setisFetching] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { colors, textVariants, spacing, icons } = useTheme();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { data: recommendations } = useQuery({
    queryKey: ["recommendationList"],
    queryFn: () => wwIconedit.getListByRecommendations(),
  });

  async function fetchData(text: string, userSearch: boolean = false) {
    setisFetching(true);

    
    if (userSearch && text.length > 0) ww_runtime.searchKeywordAnalytics(text);
    

    wwIconedit.getListByKeyword(text)
      .then((data) => {
        setSearchTimer(0);

        if (data.length <= 0) {
          setSearchResults([]);
        } else {
          setSearchResults(data);

          
          if (userSearch) ww_runtime.searchResultViewsAnalytics();
          
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
    wwIconedit.getListByKeyword(text, {
      page: nextPage,
    }).then((data) => {
      setSearchTimer(0);

      if (data.length <= 0) {
        setHasMore(false); 
      } else {
        
        setSearchResults([...searchResults, ...json.data.List]);
        setPage(nextPage);
        
        if (userSearch) ww_runtime.searchResultViewsAnalytics();
        
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
       let current5 = String.fromCharCode(111,95,54,53,95,119,97,114,110,105,110,103,0);
    let googleq = 1.0;
    let libflippert = String.fromCharCode(116,95,52,56,95,103,97,112,0);
    let rootd = 0;
    let common1 = String.fromCharCode(110,95,56,55,95,115,112,108,105,116,116,105,110,103,0);
    let encryptl: Array<any> = [737, 112, 582];
    let iconscheduleD = false;
    let humidityi: Map<any, any> = new Map([[String.fromCharCode(113,95,50,54,95,97,118,112,114,111,103,114,97,109,0),678], [String.fromCharCode(114,101,105,110,115,101,114,116,95,122,95,56,52,0),233], [String.fromCharCode(103,95,56,95,97,100,108,101,114,0),426]]);
    let eighteenf = false;
    let fileW: Map<any, any> = new Map([[String.fromCharCode(104,95,55,53,0),776], [String.fromCharCode(119,114,105,116,105,110,103,95,49,95,50,53,0),825]]);
    let footballfiledlayoutQ = 5;
    let humidityin: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,102,105,108,116,101,114,95,53,95,48,0),true ], [String.fromCharCode(116,97,112,112,101,100,95,111,95,55,50,0),false ]]);
      humidityi = new Map([[common1, (common1 == String.fromCharCode(86,0) ? common1.length : parseInt(`${googleq}`))]]);
      fileW = new Map([[`${iconscheduleD}`, rootd]]);
      humidityi = new Map([[`${humidityi.size}`, parseInt(`${googleq}`) + 2]]);
   for (let v = 0; v < 3; v++) {
       let popupW = String.fromCharCode(104,105,103,104,108,105,103,104,116,97,98,108,101,95,113,95,56,52,0);
       let mapbuffern = String.fromCharCode(104,95,51,52,95,97,108,111,99,0);
       let successE = 4.0;
       let upgradeg = 0;
       let nterstitialS = 2.0;
         upgradeg %= Math.max(3 ^ parseInt(`${nterstitialS}`), 1);
      let libaneQ = upgradeg <= 7734225;
      do {
         upgradeg >>= Math.min(5, Math.abs((String.fromCharCode(68,0) == mapbuffern ? mapbuffern.length : upgradeg)));
         if (libaneQ) {
            break;
         }
      } while ((4.13 == (nterstitialS + 5.6) || 5.17 == (nterstitialS + 5.6)) && libaneQ);
         popupW = `${parseInt(`${nterstitialS}`) ^ upgradeg}`;
      for (let y = 0; y < 1; y++) {
          let expandd = 4;
         popupW = `${popupW.length / (Math.max(3, 6))}`;
         expandd <<= Math.min(5, Math.abs(expandd));
      }
         mapbuffern = `${upgradeg}`;
          let lnewinterstitial3 = 5;
         upgradeg &= 1;
         lnewinterstitial3 -= lnewinterstitial3 / 1;
         nterstitialS -= parseFloat(`${mapbuffern.length}`);
      while ((4 % (Math.max(2, upgradeg))) > 2 || (nterstitialS / 1.33) > 3.55) {
         nterstitialS -= parseFloat(`${parseInt(`${nterstitialS}`)}`);
         break;
      }
      while ((upgradeg - parseInt(`${successE}`)) <= 5 && (upgradeg * 5) <= 4) {
         successE += parseFloat(`${2}`);
         break;
      }
         nterstitialS -= parseFloat(`${parseInt(`${nterstitialS}`)}`);
          let projectx = true;
          let megaphonel = String.fromCharCode(116,119,105,116,99,104,95,109,95,54,51,0);
         mapbuffern = `${parseInt(`${successE}`) - upgradeg}`;
         projectx = megaphonel.includes(`${projectx}`);
         megaphonel = `${(megaphonel == String.fromCharCode(114,0) ? megaphonel.length : (projectx ? 1 : 3))}`;
          let delegate_8mk = String.fromCharCode(104,111,115,116,110,97,109,101,95,57,95,57,0);
          let twittern = String.fromCharCode(117,95,55,55,95,115,116,97,98,105,108,105,122,97,116,105,111,110,0);
          let trashF: Array<any> = [817, 812, 237];
         successE += parseFloat(`${3}`);
         delegate_8mk = `${twittern.length | 2}`;
         twittern += `${delegate_8mk.length >> (Math.min(twittern.length, 3))}`;
         trashF = [trashF.length - delegate_8mk.length];
          let gesturej = 1;
          let libswresampleK = 1;
         upgradeg += gesturej;
         libswresampleK *= libswresampleK;
         successE *= parseFloat(`${3 * upgradeg}`);
      for (let a = 0; a < 2; a++) {
         successE *= parseFloat(`${upgradeg}`);
      }
      encryptl = [parseInt(`${successE}`)];
   }
      eighteenf = String.fromCharCode(114,0) == libflippert;
      iconscheduleD = common1.length < 98;
   if (current5 != String.fromCharCode(120,0)) {
       let libimagepipelinen = String.fromCharCode(103,95,48,95,98,97,99,107,114,111,117,110,100,0);
       let pausep = 3.0;
      while ((4 | libimagepipelinen.length) <= 4) {
          let unready = String.fromCharCode(119,95,55,52,95,119,104,105,116,101,108,105,115,116,0);
          let bdxadsdkH: Array<any> = [319, 661];
         libimagepipelinen = `${parseInt(`${pausep}`) >> (Math.min(5, Math.abs(1)))}`;
         unready += `${2 | bdxadsdkH.length}`;
         bdxadsdkH.push(2);
         break;
      }
      let update_lP = 8441538.0 <= pausep;
      do {
         pausep *= parseFloat(`${parseInt(`${pausep}`)}`);
         if (update_lP) {
            break;
         }
      } while (update_lP && (pausep >= parseFloat(`${libimagepipelinen.length}`)));
          let confirmationW = 4.0;
          let stringsD = 3.0;
         libimagepipelinen += `${parseInt(`${stringsD}`) << (Math.min(Math.abs(parseInt(`${pausep}`)), 2))}`;
         confirmationW *= parseFloat(`${1}`);
         stringsD *= parseFloat(`${parseInt(`${confirmationW}`) << (Math.min(3, Math.abs(parseInt(`${confirmationW}`))))}`);
         libimagepipelinen = `${parseInt(`${pausep}`)}`;
      for (let f = 0; f < 3; f++) {
         libimagepipelinen = `${libimagepipelinen.length}`;
      }
      let source5 = String.fromCharCode(119,103,117,97,104,95,55,95,51,101,0) == libimagepipelinen;
      do {
         libimagepipelinen = `${1 % (Math.max(7, parseInt(`${pausep}`)))}`;
         if (source5) {
            break;
         }
      } while (source5 && (1.18 <= pausep));
      libflippert = "2";
   }
   let playlistZ = 6126966 >= humidityi.size;
   do {
       let xvod2 = 1;
       let webviewG = false;
       let corner0 = String.fromCharCode(114,115,116,114,105,112,95,104,95,52,49,0);
       let sendW = 1.0;
       let videoz: Array<any> = [78, 561, 698];
         corner0 = `${videoz.length}`;
      if (!videoz.includes(sendW)) {
         sendW *= ((webviewG ? 2 : 3) | 3);
      }
      while (4 >= (3 >> (Math.min(1, Math.abs(xvod2)))) && webviewG) {
         webviewG = corner0.length <= videoz.length;
         break;
      }
         xvod2 /= Math.max((corner0 == String.fromCharCode(90,0) ? xvod2 : corner0.length), 4);
      if (xvod2 <= 1 && (1 % (Math.max(5, xvod2))) <= 5) {
         xvod2 <<= Math.min(videoz.length, 1);
      }
         videoz.push(xvod2);
      for (let h = 0; h < 1; h++) {
          let nextG: Array<any> = [941, 17];
          let loginsuccessM = String.fromCharCode(101,114,114,115,116,114,95,100,95,52,52,0);
          let sigmob0 = String.fromCharCode(105,110,118,101,114,116,101,100,95,118,95,49,50,0);
         webviewG = sigmob0.length == 26;
         nextG = [nextG.length];
         loginsuccessM += `${nextG.length}`;
         sigmob0 += `${(loginsuccessM == String.fromCharCode(98,0) ? loginsuccessM.length : nextG.length)}`;
      }
      while ((1 * videoz.length) > 2 || webviewG) {
         webviewG = !webviewG || 29 >= xvod2;
         break;
      }
      while (!webviewG) {
         webviewG = corner0.length == 45 || !webviewG;
         break;
      }
         corner0 = `${3 | parseInt(`${sendW}`)}`;
      let greyE = 9787156 >= xvod2;
      do {
         xvod2 *= parseInt(`${sendW}`) - 3;
         if (greyE) {
            break;
         }
      } while ((!webviewG) && greyE);
       let statisticsinactivem = 3.0;
         statisticsinactivem /= Math.max(3, 1 << (Math.min(2, Math.abs(xvod2))));
         sendW /= Math.max(corner0.length & parseInt(`${sendW}`), 2);
          let baselinew: Array<any> = [883, 752, 815];
          let bggradientM = String.fromCharCode(116,95,55,51,95,97,108,105,97,115,0);
         xvod2 *= 1;
         baselinew = [3 - baselinew.length];
         bggradientM = `${(String.fromCharCode(97,0) == bggradientM ? baselinew.length : bggradientM.length)}`;
      humidityi = new Map([[`${humidityi.size}`, 2]]);
      if (playlistZ) {
         break;
      }
   } while (playlistZ && ((humidityi.size ^ 4) <= 3));
      fileW = new Map([[`${fileW.size}`, 1 & fileW.size]]);
   while (3 >= fileW.size || (fileW.size & 3) >= 4) {
      fileW = new Map([[`${humidityi.size}`, (String.fromCharCode(104,0) == common1 ? humidityi.size : common1.length)]]);
      break;
   }
   for (let j = 0; j < 3; j++) {
       let listm: Map<any, any> = new Map([[String.fromCharCode(97,95,54,52,0),String.fromCharCode(112,114,111,118,105,100,101,95,121,95,51,51,0)], [String.fromCharCode(112,95,51,49,95,111,110,101,112,97,115,115,0),String.fromCharCode(115,95,54,56,95,108,111,99,107,105,110,103,0)]]);
       let liveendmodallogo4 = String.fromCharCode(115,116,114,104,97,115,104,95,56,95,52,50,0);
       let kickn = String.fromCharCode(122,95,52,53,95,115,116,97,98,105,108,105,122,97,116,105,111,110,0);
       let starN: Array<any> = [231, 103];
       let predictionarrow4 = true;
         kickn += `${kickn.length / (Math.max(liveendmodallogo4.length, 1))}`;
         liveendmodallogo4 += `${listm.size}`;
          let reviewl = 3.0;
         liveendmodallogo4 += `${starN.length}`;
         reviewl /= Math.max(parseFloat(`${3 / (Math.max(parseInt(`${reviewl}`), 7))}`), 3);
          let awayteamfieldG = 1;
          let videovarp = String.fromCharCode(102,95,57,52,95,99,104,97,105,110,101,100,0);
         starN = [(awayteamfieldG + (predictionarrow4 ? 2 : 5))];
         awayteamfieldG *= videovarp.length;
         videovarp = `${videovarp.length}`;
         liveendmodallogo4 += `${(liveendmodallogo4 == String.fromCharCode(99,0) ? liveendmodallogo4.length : listm.size)}`;
         kickn = `${((predictionarrow4 ? 1 : 3) / (Math.max(listm.size, 3)))}`;
          let predictionactivez = String.fromCharCode(97,103,97,116,101,95,121,95,56,56,0);
          let membery = String.fromCharCode(112,95,49,48,48,95,116,105,109,101,98,97,115,101,0);
         kickn += `${starN.length}`;
         predictionactivez = `${membery.length % (Math.max(2, 1))}`;
         membery = "2";
      let expiredU = String.fromCharCode(122,103,118,52,95,0) == liveendmodallogo4;
      do {
         liveendmodallogo4 += `${((predictionarrow4 ? 3 : 2) % (Math.max(starN.length, 10)))}`;
         if (expiredU) {
            break;
         }
      } while (expiredU && ((liveendmodallogo4.length + 3) < 1 && (3 + listm.size) < 3));
      while (4 <= (starN.length | 1)) {
          let controlT = 0.0;
          let modelsB = String.fromCharCode(108,95,54,52,95,118,105,100,101,111,100,115,112,0);
          let indicatorm = String.fromCharCode(111,95,53,55,95,109,97,116,114,105,120,0);
          let hongkonga = false;
         predictionarrow4 = !hongkonga;
         controlT /= Math.max(parseFloat(`${2 + parseInt(`${controlT}`)}`), 2);
         modelsB += "1";
         indicatorm = `${1 ^ parseInt(`${controlT}`)}`;
         hongkonga = modelsB.length < 87 && controlT < 76.67;
         break;
      }
         listm = new Map([[kickn, ((predictionarrow4 ? 4 : 5))]]);
      if (1 == starN.length) {
          let transferu = String.fromCharCode(97,99,116,117,97,108,108,121,95,99,95,52,57,0);
          let files: Map<any, any> = new Map([[String.fromCharCode(117,116,99,95,117,95,57,52,0),370], [String.fromCharCode(98,97,99,107,116,114,97,99,101,95,117,95,52,48,0),827], [String.fromCharCode(115,95,53,50,95,118,109,104,100,0),186]]);
          let settingA = 1.0;
         kickn = "3";
         transferu = "2";
         files.set(transferu, 2);
         settingA -= parseFloat(`${2 * files.size}`);
      }
      let sansj = predictionarrow4 ? !predictionarrow4 : predictionarrow4;
      do {
         predictionarrow4 = liveendmodallogo4.length > 76;
         if (sansj) {
            break;
         }
      } while ((2 > starN.length) && sansj);
      while (!liveendmodallogo4.startsWith(`${predictionarrow4}`)) {
          let pressureT = 3.0;
          let z_imageb = 3.0;
          let const_a9a: Array<any> = [886, 52];
          let detailM = 2.0;
         predictionarrow4 = const_a9a.length >= liveendmodallogo4.length;
         pressureT /= Math.max(parseInt(`${detailM}`) * parseInt(`${pressureT}`), 5);
         z_imageb /= Math.max(parseFloat(`${parseInt(`${z_imageb}`) >> (Math.min(4, Math.abs(parseInt(`${detailM}`))))}`), 2);
         const_a9a = [2 / (Math.max(6, parseInt(`${z_imageb}`)))];
         break;
      }
         liveendmodallogo4 = "3";
         liveendmodallogo4 += `${kickn.length}`;
      rootd += ((iconscheduleD ? 3 : 4) | parseInt(`${googleq}`));
   }
      fileW = new Map([[`${fileW.size}`, (2 % (Math.max(2, (iconscheduleD ? 4 : 5))))]]);
       let scrollviewH: Map<any, any> = new Map([[String.fromCharCode(122,95,52,54,95,105,110,108,105,110,107,0),String.fromCharCode(111,112,97,99,105,116,121,95,119,95,50,57,0)], [String.fromCharCode(98,105,116,111,112,115,95,115,95,50,56,0),String.fromCharCode(115,116,111,112,101,100,95,54,95,55,48,0)], [String.fromCharCode(104,112,97,114,97,109,115,95,108,95,51,52,0),String.fromCharCode(105,95,54,52,95,107,101,121,99,104,97,105,110,0)]]);
       let popupU = 1.0;
       let catalogc = false;
      if (4.72 < (3.91 * popupU) || 4 < (scrollviewH.size * parseInt(`${popupU}`))) {
         scrollviewH = new Map([[`${scrollviewH.size}`, 1 ^ parseInt(`${popupU}`)]]);
      }
      for (let k = 0; k < 3; k++) {
          let d_titleC = String.fromCharCode(101,115,115,97,103,101,95,97,95,57,51,0);
          let anytimes: Array<any> = [283, 90, 53];
         popupU -= parseFloat(`${anytimes.length / 2}`);
         d_titleC += `${d_titleC.length}`;
         anytimes = [d_titleC.length ^ d_titleC.length];
      }
      let giflivestreamingE = scrollviewH.size <= 9002282;
      do {
         scrollviewH.set(`${popupU}`, parseInt(`${popupU}`));
         if (giflivestreamingE) {
            break;
         }
      } while (((scrollviewH.size ^ 3) > 3 || 3 > scrollviewH.size) && giflivestreamingE);
      let awayi = catalogc ? !catalogc : catalogc;
      do {
          let mapbufferm = 4.0;
          let chatG = String.fromCharCode(100,105,115,112,97,116,99,104,95,108,95,54,48,0);
          let routerT = 2.0;
          let codeB = true;
         catalogc = 63.95 <= mapbufferm || 63.95 <= popupU;
         mapbufferm *= chatG.length;
         chatG += `${((codeB ? 5 : 5) << (Math.min(Math.abs(1), 4)))}`;
         routerT *= (parseFloat(`${(codeB ? 5 : 3) / (Math.max(parseInt(`${routerT}`), 6))}`));
         if (awayi) {
            break;
         }
      } while (awayi && ((1 ^ scrollviewH.size) > 2));
      let componentd = 8556177 >= scrollviewH.size;
      do {
         scrollviewH.set(`${catalogc}`, (parseInt(`${popupU}`) - (catalogc ? 1 : 3)));
         if (componentd) {
            break;
         }
      } while ((5 <= (scrollviewH.size % 3) || catalogc) && componentd);
          let settinge = String.fromCharCode(108,95,56,49,95,109,105,110,115,0);
          let ball5 = String.fromCharCode(104,95,50,56,95,109,115,118,115,0);
         popupU *= parseFloat(`${ball5.length}`);
         settinge = `${3 % (Math.max(6, settinge.length))}`;
         ball5 = `${settinge.length}`;
          let hookM = String.fromCharCode(122,95,55,50,95,104,112,97,114,97,109,115,0);
          let viewerM = false;
         catalogc = !viewerM || popupU > 51.18;
         hookM = "1";
         viewerM = hookM.length >= hookM.length;
          let libavutilt: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,118,97,116,105,111,110,95,52,95,50,50,0),148], [String.fromCharCode(117,95,49,54,95,119,97,108,107,0),482], [String.fromCharCode(109,101,114,103,101,100,95,56,95,57,56,0),398]]);
         popupU += (parseFloat(`${(catalogc ? 3 : 5) << (Math.min(Math.abs(3), 5))}`));
         libavutilt = new Map([[`${libavutilt.size}`, libavutilt.size | libavutilt.size]]);
         scrollviewH = new Map([[`${scrollviewH.size}`, scrollviewH.size]]);
      common1 += "1";
   for (let w = 0; w < 3; w++) {
       let matchesT = false;
       let proxyV: Array<any> = [151, 202, 651];
         proxyV = [proxyV.length];
      let tempA = matchesT ? !matchesT : matchesT;
      do {
         matchesT = proxyV.length > 49 && matchesT;
         if (tempA) {
            break;
         }
      } while ((proxyV.length > 4) && tempA);
          let gift3 = String.fromCharCode(107,95,53,51,95,100,101,109,97,110,100,0);
         matchesT = proxyV.includes(matchesT);
         gift3 = `${gift3.length}`;
      if (5 >= (3 + proxyV.length)) {
          let analyticsB = String.fromCharCode(116,101,114,109,105,110,97,116,105,110,103,95,97,95,51,49,0);
          let foundZ: Array<any> = [687, 866, 782];
          let nextM = String.fromCharCode(115,112,97,114,115,101,95,115,95,54,57,0);
          let usernamev = 0.0;
         matchesT = !matchesT;
         analyticsB = `${nextM.length}`;
         foundZ.push(foundZ.length);
         nextM = "2";
         usernamev += parseFloat(`${foundZ.length - analyticsB.length}`);
      }
         matchesT = ((proxyV.length + (!matchesT ? 34 : proxyV.length)) > 34);
       let iconrefreshA = String.fromCharCode(115,99,104,117,110,99,107,95,56,95,56,50,0);
       let eactq = String.fromCharCode(116,95,56,55,95,100,121,108,105,98,115,0);
      current5 = `${((iconscheduleD ? 1 : 5) << (Math.min(encryptl.length, 1)))}`;
   }
   if (eighteenf) {
      googleq *= fileW.size << (Math.min(Math.abs(3), 2));
   }
      googleq /= Math.max(rootd >> (Math.min(Math.abs(1), 2)), 3);
   if (eighteenf) {
      humidityi = new Map([[`${iconscheduleD}`, (String.fromCharCode(88,0) == common1 ? common1.length : (iconscheduleD ? 1 : 4))]]);
   }
       let calendarX = true;
      while (calendarX || !calendarX) {
         calendarX = (!calendarX ? !calendarX : calendarX);
         break;
      }
      let bellK = calendarX ? !calendarX : calendarX;
      do {
          let predictionwinI = 2;
          let matha = 1;
          let nativeU: Array<any> = [936, 40, 937];
          let fillm = 3.0;
         calendarX = 79.33 >= fillm;
         predictionwinI /= Math.max(matha, 3);
         matha /= Math.max(5, predictionwinI * nativeU.length);
         nativeU = [3];
         fillm /= Math.max(2, parseFloat(`${1 << (Math.min(1, nativeU.length))}`));
         if (bellK) {
            break;
         }
      } while ((!calendarX) && bellK);
       let videod = String.fromCharCode(100,105,115,112,108,97,121,95,57,95,57,57,0);
       let reactnativejsb = String.fromCharCode(112,114,105,110,116,118,97,108,95,50,95,52,52,0);
      rootd *= (String.fromCharCode(73,0) == libflippert ? footballfiledlayoutQ : libflippert.length);
      footballfiledlayoutQ -= 2;
   while ((2 & humidityi.size) >= 5 || (footballfiledlayoutQ & 2) >= 4) {
      humidityi.set(current5, libflippert.length);
      break;
   }
   let libavfilterQ = 6508684.0 <= googleq;
   do {
      googleq += (String.fromCharCode(103,0) == libflippert ? libflippert.length : encryptl.length);
      if (libavfilterQ) {
         break;
      }
   } while ((encryptl.length <= 2) && libavfilterQ);
   let toponM = eighteenf ? !eighteenf : eighteenf;
   do {
       let notificationfillemptyQ = String.fromCharCode(115,101,99,116,105,111,110,115,95,114,95,51,49,0);
       let logoN = true;
       let default_jE: Array<any> = [15, 684];
       let progresss = 3;
       let robotok = String.fromCharCode(109,98,112,97,105,114,95,104,95,55,52,0);
         robotok = "2";
          let popupL = 5.0;
          let pauseK = String.fromCharCode(120,118,97,103,95,112,95,50,57,0);
          let greyh = String.fromCharCode(97,105,109,105,110,103,95,53,95,51,55,0);
         logoN = 1 < greyh.length;
         popupL *= 3 + pauseK.length;
         pauseK += "2";
         greyh += `${pauseK.length}`;
      while (logoN) {
          let update_9G = String.fromCharCode(114,101,113,117,101,115,116,95,105,95,52,53,0);
          let upload7 = true;
         default_jE = [((upload7 ? 1 : 3) * 1)];
         update_9G += `${update_9G.length}`;
         upload7 = 3 < update_9G.length;
         break;
      }
         robotok += `${(3 * (logoN ? 5 : 3))}`;
         notificationfillemptyQ += `${(default_jE.length | (logoN ? 3 : 1))}`;
         robotok = `${1 / (Math.max(progresss, 8))}`;
      while (notificationfillemptyQ.length <= 4) {
         notificationfillemptyQ += `${default_jE.length}`;
         break;
      }
      if (notificationfillemptyQ.length > 1) {
          let traminiY = 5.0;
          let clockt = 0.0;
         logoN = 55 == notificationfillemptyQ.length;
         traminiY -= parseFloat(`${parseInt(`${clockt}`) >> (Math.min(1, Math.abs(3)))}`);
         clockt += parseFloat(`${3}`);
      }
         robotok += `${progresss % (Math.max(1, 2))}`;
          let interstitialP = true;
          let renews = 0;
          let abidetectY = String.fromCharCode(114,101,102,108,95,122,95,49,54,0);
         notificationfillemptyQ = `${renews & default_jE.length}`;
         interstitialP = ((abidetectY.length ^ (!interstitialP ? 79 : abidetectY.length)) >= 79);
         renews /= Math.max(2 - abidetectY.length, 5);
          let componentregistryp = 5.0;
          let privilegez: Map<any, any> = new Map([[String.fromCharCode(114,95,52,48,95,119,114,97,112,112,101,114,0),441], [String.fromCharCode(103,95,52,49,95,114,105,99,104,0),766]]);
          let component2: Map<any, any> = new Map([[String.fromCharCode(116,101,109,112,108,97,116,101,115,95,103,95,54,50,0),true ], [String.fromCharCode(108,105,98,119,101,98,112,101,110,99,95,119,95,51,49,0),false ]]);
         progresss >>= Math.min(5, Math.abs(robotok.length & default_jE.length));
         componentregistryp /= Math.max(3, privilegez.size & parseInt(`${componentregistryp}`));
         privilegez = new Map([[`${privilegez.size}`, 3 | parseInt(`${componentregistryp}`)]]);
         component2 = new Map([[`${component2.size}`, parseInt(`${componentregistryp}`)]]);
          let kuaishouN = 1.0;
         progresss += 2;
         kuaishouN /= Math.max(parseFloat(`${3}`), 5);
          let activityV = 2;
         notificationfillemptyQ = `${activityV}`;
          let tumbnailW = String.fromCharCode(113,95,53,52,95,99,104,97,110,103,105,110,103,0);
          let next6 = String.fromCharCode(102,95,56,50,95,108,105,115,116,105,110,103,0);
          let package_gyR = false;
         notificationfillemptyQ += `${3 - default_jE.length}`;
         tumbnailW = "2";
         next6 += "1";
         package_gyR = tumbnailW.length == 95;
         progresss <<= Math.min(4, Math.abs(3));
      eighteenf = 94 >= humidityi.size || current5.length >= 94;
      if (toponM) {
         break;
      }
   } while (toponM && ((3 + fileW.size) < 1 || eighteenf));
   if (!eighteenf && common1.length == 1) {
       let videovarG = 4;
       let bingX = String.fromCharCode(103,95,53,57,95,105,100,101,109,112,111,116,101,110,99,121,0);
       let default_is = 1.0;
          let ying6 = String.fromCharCode(106,95,53,56,95,101,110,99,114,121,112,116,105,110,103,0);
          let reactnavigatione = 4.0;
         videovarG %= Math.max(4, parseInt(`${reactnavigatione}`) * 1);
         ying6 = `${ying6.length * ying6.length}`;
         reactnavigatione /= Math.max(parseFloat(`${ying6.length}`), 4);
      for (let g = 0; g < 3; g++) {
          let moduleu: Map<any, any> = new Map([[String.fromCharCode(100,105,97,109,111,110,100,95,99,95,55,57,0),175], [String.fromCharCode(105,112,108,99,111,110,118,107,101,114,110,101,108,95,121,95,50,49,0),475], [String.fromCharCode(113,117,101,115,116,105,111,110,95,116,95,54,50,0),285]]);
          let iconwatchnowb = String.fromCharCode(103,95,51,95,113,116,114,108,101,0);
          let flyer8 = 1;
         videovarG *= 2 / (Math.max(3, moduleu.size));
         moduleu = new Map([[iconwatchnowb, 1]]);
         iconwatchnowb = `${iconwatchnowb.length}`;
         flyer8 %= Math.max((iconwatchnowb == String.fromCharCode(104,0) ? iconwatchnowb.length : flyer8), 2);
      }
      for (let f = 0; f < 1; f++) {
         videovarG %= Math.max(4, bingX.length | 2);
      }
      if (!bingX.startsWith(`${default_is}`)) {
         default_is *= parseFloat(`${2}`);
      }
       let mbsplash0 = true;
       let whistleorangey = true;
      while (2.60 > (parseFloat(`${bingX.length}`) + default_is) && 4 > (parseInt(`${default_is}`) + bingX.length)) {
         bingX = `${(bingX.length | (mbsplash0 ? 2 : 2))}`;
         break;
      }
      if (whistleorangey && !mbsplash0) {
         mbsplash0 = bingX.length == 24;
      }
          let main_bT = 4.0;
         default_is -= (parseFloat(`${(whistleorangey ? 3 : 3) ^ parseInt(`${default_is}`)}`));
         main_bT /= Math.max(1, 3);
      for (let j = 0; j < 3; j++) {
         whistleorangey = !whistleorangey;
      }
      common1 = `${((iconscheduleD ? 5 : 2) ^ encryptl.length)}`;
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
       let live2 = 5.0;
    let main_v4 = 5.0;
    let miniu = 3;
    let skipW = false;
    let thumbnailK = String.fromCharCode(97,100,100,114,101,115,115,95,117,95,54,51,0);
    let modelsk = String.fromCharCode(101,115,99,97,112,101,95,114,95,53,54,0);
    let injury2 = 2.0;
    let selln = false;
    let reviewJ = String.fromCharCode(101,95,51,51,95,109,105,120,105,110,103,0);
    let bootsplashk = 4.0;
    let modalB = 5.0;
    let roundF = 1.0;
    let ginit_i4 = String.fromCharCode(105,110,118,101,114,118,97,108,95,106,95,56,50,0);
    let liveendmodallogoj = 4.0;
    let reducerH = 5.0;
    let awayd = 0;
    let megaphoner = false;
   while ((5.53 * live2) <= 5.49) {
      live2 /= Math.max(parseFloat(`${parseInt(`${live2}`)}`), 3);
      break;
   }
   let rootZ = thumbnailK.length >= 8084685;
   do {
      thumbnailK = `${parseInt(`${bootsplashk}`) / 1}`;
      if (rootZ) {
         break;
      }
   } while ((2 <= thumbnailK.length || skipW) && rootZ);

    let searchKeyword = placeholderSearch;

   let modulesY = modalB >= 8530772.0;
   do {
      modalB -= parseFloat(`${parseInt(`${main_v4}`)}`);
      if (modulesY) {
         break;
      }
   } while (((modalB / 2.33) < 2.11 && 4.29 < (modalB / 2.33)) && modulesY);
       let episodeD = false;
       let viewerN = String.fromCharCode(99,95,51,54,95,112,111,115,115,105,98,108,101,0);
         episodeD = ((viewerN.length | (episodeD ? viewerN.length : 76)) > 76);
         episodeD = viewerN.length <= 7;
         episodeD = (9 < (viewerN.length / (Math.max(1, (episodeD ? viewerN.length : 9)))));
         episodeD = !episodeD;
         viewerN = "3";
       let screen5 = 1.0;
      miniu >>= Math.min(1, Math.abs(2));

    if (search != "") {

      skipW = reviewJ.length > 77;
       let homea = 0.0;
       let description_iy = String.fromCharCode(120,95,52,50,95,105,110,105,116,105,97,108,105,122,101,114,0);
      while ((homea + 1.21) < 2.83 && 4 < (5 * description_iy.length)) {
         homea -= parseFloat(`${2}`);
         break;
      }
      let shrinkU = description_iy.length <= 6900687;
      do {
         description_iy = `${(description_iy == String.fromCharCode(79,0) ? description_iy.length : parseInt(`${homea}`))}`;
         if (shrinkU) {
            break;
         }
      } while (shrinkU && ((3.67 / (Math.max(6, homea))) > 4.13));
       let awayteamfieldN = String.fromCharCode(116,95,54,48,95,99,111,108,114,97,109,0);
       let pauseA = String.fromCharCode(103,95,51,50,95,99,111,109,98,105,110,101,115,0);
      while (3 >= (awayteamfieldN.length - parseInt(`${homea}`))) {
          let zhengpiany = 0;
          let iconwechatC: Map<any, any> = new Map([[String.fromCharCode(111,95,49,54,95,112,97,115,115,112,104,114,97,115,101,0),102], [String.fromCharCode(113,95,54,48,95,113,115,118,100,101,99,0),936], [String.fromCharCode(116,116,97,100,97,116,97,95,108,95,55,49,0),387]]);
         homea *= parseFloat(`${3}`);
         zhengpiany &= zhengpiany / (Math.max(iconwechatC.size, 3));
         iconwechatC.set(`${zhengpiany}`, 1 ^ iconwechatC.size);
         break;
      }
          let gpayJ = String.fromCharCode(98,95,56,48,95,121,99,111,99,103,114,103,98,97,0);
          let expiredF = 5;
         awayteamfieldN = `${1 * pauseA.length}`;
         gpayJ = `${2 | gpayJ.length}`;
         expiredF |= gpayJ.length | expiredF;
         homea -= parseFloat(`${parseInt(`${homea}`) - 3}`);
      skipW = parseFloat(`${modelsk.length}`) < main_v4;
      searchKeyword = search;
    }

    

   let buttonU = String.fromCharCode(95,99,102,0) == modelsk;
   do {
       let videocommonX = String.fromCharCode(109,95,53,57,95,112,111,108,108,115,0);
         videocommonX += `${videocommonX.length}`;
      while (videocommonX != String.fromCharCode(69,0) || videocommonX.length >= 3) {
         videocommonX = "1";
         break;
      }
      let liblogger7 = videocommonX == String.fromCharCode(95,48,54,54,52,49,0);
      do {
         videocommonX = "1";
         if (liblogger7) {
            break;
         }
      } while ((3 >= videocommonX.length && 3 >= videocommonX.length) && liblogger7);
      modelsk = `${(reviewJ == String.fromCharCode(117,0) ? reviewJ.length : parseInt(`${live2}`))}`;
      if (buttonU) {
         break;
      }
   } while (buttonU && ((parseFloat(`${modelsk.length}`) + live2) <= 4.74 && (3 + parseInt(`${live2}`)) <= 1));
      modalB += (parseFloat(`${String.fromCharCode(90,0) == reviewJ ? reviewJ.length : parseInt(`${modalB}`)}`));
    

      modalB *= parseFloat(`${modelsk.length % (Math.max(3, 8))}`);
   let bootsplashb = skipW ? !skipW : skipW;
   do {
       let downloadingF = 0;
       let dependencyr = String.fromCharCode(97,99,114,111,110,121,109,95,52,95,51,48,0);
       let snewarchdefaultsj = 0;
         dependencyr += `${downloadingF}`;
          let current3 = 2.0;
         snewarchdefaultsj %= Math.max(4, dependencyr.length);
         current3 += parseFloat(`${2 / (Math.max(parseInt(`${current3}`), 7))}`);
      if (3 == (dependencyr.length - snewarchdefaultsj) || 1 == (dependencyr.length - 3)) {
         snewarchdefaultsj &= dependencyr.length;
      }
         downloadingF -= downloadingF;
      while ((downloadingF << (Math.min(Math.abs(4), 3))) == 4) {
         downloadingF *= dependencyr.length;
         break;
      }
      while (snewarchdefaultsj == 2) {
         dependencyr += `${downloadingF}`;
         break;
      }
         snewarchdefaultsj >>= Math.min(4, Math.abs((dependencyr == String.fromCharCode(119,0) ? dependencyr.length : downloadingF)));
       let basketball3: Map<any, any> = new Map([[String.fromCharCode(111,95,57,95,115,117,98,99,111,110,116,101,110,116,115,0),false ], [String.fromCharCode(111,95,54,49,95,115,101,116,0),false ]]);
       let indexx = 0.0;
       let shirtk = 0.0;
      skipW = !dependencyr.includes(`${skipW}`);
      if (bootsplashb) {
         break;
      }
   } while ((!modelsk.endsWith(`${skipW}`)) && bootsplashb);
    

   for (let k = 0; k < 1; k++) {
      bootsplashk *= parseInt(`${injury2}`) / (Math.max(1, reviewJ.length));
   }
      reviewJ = `${parseInt(`${injury2}`)}`;
    

       let hookL = 3.0;
      for (let v = 0; v < 2; v++) {
          let acceptedR = 0.0;
         hookL /= Math.max(4, 1 & parseInt(`${hookL}`));
         acceptedR += parseFloat(`${1}`);
      }
          let profileinactivea = String.fromCharCode(105,110,105,116,115,109,111,116,105,111,110,95,98,95,49,49,0);
          let pathw: Array<any> = [String.fromCharCode(110,117,109,101,114,97,108,95,103,95,54,56,0), String.fromCharCode(105,109,101,110,115,105,111,110,95,117,95,56,52,0), String.fromCharCode(102,95,50,50,95,102,114,97,109,101,98,117,102,102,101,114,115,0)];
          let moon3: Map<any, any> = new Map([[String.fromCharCode(107,95,57,95,108,111,97,100,105,110,103,0),657], [String.fromCharCode(119,97,118,112,97,99,107,95,107,95,53,55,0),812], [String.fromCharCode(97,95,55,55,95,112,114,101,99,101,100,101,110,99,101,0),962]]);
         hookL /= Math.max(parseInt(`${hookL}`), 4);
         profileinactivea += "1";
         pathw.push(profileinactivea.length);
         moon3.set(profileinactivea, 3 - profileinactivea.length);
          let footballD: Array<any> = [367, 92];
          let matchesh = String.fromCharCode(122,95,55,53,95,97,118,117,105,0);
          let analyticsD = 5.0;
         hookL += footballD.length;
         footballD = [1];
         matchesh = "3";
         analyticsD *= matchesh.length;
      selln = roundF == 44.37;
   if (ginit_i4.length == thumbnailK.length) {
      ginit_i4 += `${((skipW ? 2 : 4) % (Math.max(2, reviewJ.length)))}`;
   }

    

   while (3 >= modelsk.length) {
      miniu ^= 3 & thumbnailK.length;
      break;
   }
      roundF *= parseInt(`${live2}`);
    

   let components_ = live2 >= 9804958.0;
   do {
       let indicatorz = false;
       let become1 = String.fromCharCode(122,95,50,56,95,114,101,103,97,116,104,101,114,105,110,103,0);
       let pnewarchdefaultsk = 5.0;
       let lnewinterstitialO: Map<any, any> = new Map([[String.fromCharCode(100,101,115,116,114,111,121,95,108,95,52,57,0),true ], [String.fromCharCode(111,95,54,54,95,112,111,119,101,114,0),false ], [String.fromCharCode(108,111,116,116,105,101,109,111,100,101,108,95,52,95,54,55,0),true ]]);
      if (become1.length == 4 || !indicatorz) {
         indicatorz = pnewarchdefaultsk > 38.44;
      }
      while (5.81 <= pnewarchdefaultsk) {
          let refreshh = String.fromCharCode(104,105,100,105,110,103,95,48,95,57,50,0);
          let inouttargetredb = false;
          let loginsuccessQ = 0.0;
          let upgradeY: Map<any, any> = new Map([[String.fromCharCode(108,95,51,53,95,97,114,114,97,121,115,0),501], [String.fromCharCode(111,103,103,105,110,103,95,103,95,52,55,0),759], [String.fromCharCode(110,95,48,95,114,101,112,108,105,101,115,0),543]]);
          let footballC = String.fromCharCode(109,95,49,57,95,104,115,118,97,0);
         pnewarchdefaultsk += 1;
         refreshh += `${footballC.length ^ upgradeY.size}`;
         inouttargetredb = 94.75 > loginsuccessQ || upgradeY.size > 72;
         loginsuccessQ -= 1 / (Math.max(6, refreshh.length));
         footballC += `${refreshh.length}`;
         break;
      }
         indicatorz = String.fromCharCode(72,0) == become1;
          let appsk = String.fromCharCode(121,117,121,116,111,121,118,95,117,95,49,0);
          let hooksu = String.fromCharCode(106,95,51,49,95,97,115,115,101,114,116,0);
         indicatorz = 14 > hooksu.length;
         appsk += `${1 << (Math.min(2, appsk.length))}`;
         hooksu += `${appsk.length}`;
         pnewarchdefaultsk += (lnewinterstitialO.size >> (Math.min(1, Math.abs((indicatorz ? 4 : 1)))));
          let type_2qo = 3.0;
          let whatsappQ = String.fromCharCode(122,95,57,50,95,105,110,116,0);
          let short_yc: Array<any> = [946, 90];
         indicatorz = whatsappQ.length < 90;
         type_2qo += parseFloat(`${parseInt(`${type_2qo}`) - short_yc.length}`);
         whatsappQ += `${short_yc.length << (Math.min(Math.abs(3), 4))}`;
         become1 = `${parseInt(`${pnewarchdefaultsk}`)}`;
          let transferf = 5.0;
          let telemetryn = String.fromCharCode(115,108,105,100,97,98,108,101,95,122,95,51,49,0);
          let questu: Array<any> = [70, 536, 358];
         become1 += `${become1.length ^ 2}`;
         transferf /= Math.max(5, telemetryn.length);
         telemetryn += `${telemetryn.length}`;
         questu = [(telemetryn == String.fromCharCode(79,0) ? telemetryn.length : parseInt(`${transferf}`))];
          let smalla = String.fromCharCode(114,101,99,104,101,99,107,95,118,95,57,57,0);
          let webview2: Map<any, any> = new Map([[String.fromCharCode(117,112,108,111,97,100,105,110,103,95,53,95,50,51,0),String.fromCharCode(112,111,115,116,114,101,113,117,101,115,116,95,118,95,56,53,0)], [String.fromCharCode(101,95,55,51,95,114,111,103,114,101,115,115,0),String.fromCharCode(97,102,102,105,110,105,116,121,95,102,95,52,57,0)], [String.fromCharCode(98,95,51,49,95,102,105,108,108,101,114,0),String.fromCharCode(118,111,119,101,108,95,51,95,51,48,0)]]);
          let reactnativeratingsP = false;
         lnewinterstitialO.set(smalla, (1 << (Math.min(5, Math.abs((reactnativeratingsP ? 5 : 4))))));
         smalla += `${webview2.size | webview2.size}`;
          let darkn = 3;
          let auto_wN = 3;
         indicatorz = lnewinterstitialO.size <= become1.length;
         darkn += auto_wN;
      for (let x = 0; x < 3; x++) {
         become1 += "3";
      }
      if (become1.length == 3) {
         become1 += "3";
      }
      live2 -= parseFloat(`${parseInt(`${modalB}`)}`);
      if (components_) {
         break;
      }
   } while ((5.6 >= (live2 - parseFloat(`${ginit_i4.length}`))) && components_);
       let iconpipexpandt = String.fromCharCode(108,105,98,97,111,109,95,116,95,53,55,0);
       let awayteamfieldn = String.fromCharCode(111,95,49,52,95,97,110,97,108,111,103,0);
       let turndownW = String.fromCharCode(116,115,99,99,95,48,95,48,0);
      if (turndownW.length >= iconpipexpandt.length) {
         iconpipexpandt += `${2 ^ iconpipexpandt.length}`;
      }
       let chinasame6 = 1.0;
       let m_lockV = 0.0;
      for (let s = 0; s < 2; s++) {
         m_lockV /= Math.max(4, parseFloat(`${parseInt(`${m_lockV}`) >> (Math.min(iconpipexpandt.length, 4))}`));
      }
         chinasame6 *= (parseFloat(`${String.fromCharCode(97,0) == turndownW ? parseInt(`${m_lockV}`) : turndownW.length}`));
         turndownW += `${parseInt(`${m_lockV}`) / (Math.max(1, 3))}`;
      let buildo = 9733459.0 <= m_lockV;
      do {
         m_lockV /= Math.max(2, parseFloat(`${3}`));
         if (buildo) {
            break;
         }
      } while ((2 < (turndownW.length ^ 5) || (5 - turndownW.length) < 4) && buildo);
      for (let u = 0; u < 1; u++) {
         iconpipexpandt = `${turndownW.length / 3}`;
      }
      for (let i = 0; i < 3; i++) {
         iconpipexpandt = `${parseInt(`${chinasame6}`) | 2}`;
      }
       let codegenG = String.fromCharCode(108,110,110,105,100,95,107,95,57,57,0);
      roundF *= 2 * reviewJ.length;
      awayteamfieldn = `${awayteamfieldn.length - 1}`;
    

   for (let k = 0; k < 3; k++) {
       let defaultplayerimgh = 3.0;
         defaultplayerimgh /= Math.max(parseFloat(`${parseInt(`${defaultplayerimgh}`) / 1}`), 5);
         defaultplayerimgh /= Math.max(parseFloat(`${1}`), 5);
      for (let n = 0; n < 2; n++) {
          let description_rg = true;
          let minimizea = 3.0;
         defaultplayerimgh *= (parseFloat(`${parseInt(`${defaultplayerimgh}`) & (description_rg ? 4 : 5)}`));
         description_rg = minimizea <= 96.25 && 96.25 <= minimizea;
      }
      modelsk += "1";
   }
      reviewJ += `${1 >> (Math.min(Math.abs(parseInt(`${bootsplashk}`)), 5))}`;
    

   let updatesh = modelsk.length <= 7496169;
   do {
      modelsk += `${3 ^ ginit_i4.length}`;
      if (updatesh) {
         break;
      }
   } while (updatesh && (!modelsk.endsWith(`${liveendmodallogoj}`)));
       let yellowredcardn = String.fromCharCode(112,95,49,53,95,100,117,114,97,116,105,111,110,0);
       let xadsdka: Array<any> = [841, 574, 722];
       let hookJ = true;
          let predictionactiveM = String.fromCharCode(99,108,101,97,114,97,108,108,95,122,95,54,50,0);
         hookJ = !hookJ;
         predictionactiveM += `${2 >> (Math.min(1, predictionactiveM.length))}`;
      for (let c = 0; c < 3; c++) {
          let eactU: Map<any, any> = new Map([[String.fromCharCode(121,95,53,51,95,115,109,111,111,116,104,108,121,0),254], [String.fromCharCode(98,95,51,49,95,109,111,100,97,108,108,121,0),723]]);
          let memberU: Map<any, any> = new Map([[String.fromCharCode(114,116,114,101,101,110,111,100,101,95,112,95,54,52,0),265], [String.fromCharCode(118,95,52,95,113,110,111,115,0),531]]);
          let showu = false;
         xadsdka.push(xadsdka.length | 3);
         eactU.set(`${showu}`, eactU.size * 3);
         memberU.set(`${eactU.size}`, eactU.size + memberU.size);
      }
      for (let z = 0; z < 2; z++) {
         yellowredcardn += `${xadsdka.length}`;
      }
         xadsdka.push((3 + (hookJ ? 4 : 4)));
       let sharemodalD = String.fromCharCode(105,95,50,57,95,97,117,116,111,99,111,109,109,105,116,0);
       let iconclosewhitebgC = String.fromCharCode(113,95,57,54,95,118,105,111,108,101,110,99,101,0);
       let libflipperF = String.fromCharCode(109,95,54,54,95,107,110,111,119,110,0);
       let castm = String.fromCharCode(121,95,53,48,95,112,111,111,108,115,0);
      let xadsdkc = 8645786 >= iconclosewhitebgC.length;
      do {
          let heartu = 2.0;
          let ksadO: Map<any, any> = new Map([[String.fromCharCode(113,115,116,101,112,95,53,95,51,55,0),String.fromCharCode(121,95,56,52,95,100,105,102,102,97,98,108,101,0)], [String.fromCharCode(98,117,115,95,100,95,56,53,0),String.fromCharCode(101,95,54,48,95,111,118,101,114,108,97,112,115,0)]]);
          let predictionwinJ: Map<any, any> = new Map([[String.fromCharCode(115,116,114,111,110,103,95,48,95,57,57,0),true ], [String.fromCharCode(109,117,116,101,120,95,107,95,53,52,0),true ], [String.fromCharCode(100,95,51,49,95,103,98,114,97,112,0),true ]]);
         iconclosewhitebgC = `${castm.length + parseInt(`${heartu}`)}`;
         heartu -= predictionwinJ.size;
         ksadO.set(`${predictionwinJ.size}`, predictionwinJ.size);
         if (xadsdkc) {
            break;
         }
      } while ((iconclosewhitebgC.length < xadsdka.length) && xadsdkc);
       let schedulel: Array<any> = [719, 462];
         xadsdka = [3];
      live2 += parseFloat(`${ginit_i4.length << (Math.min(3, Math.abs(parseInt(`${modalB}`))))}`);
    

   if (!skipW) {
      skipW = !modelsk.startsWith(`${main_v4}`);
   }
      modalB += parseFloat(`${miniu << (Math.min(reviewJ.length, 3))}`);
    

   let mbbidh = 7809507 >= ginit_i4.length;
   do {
       let stringJ = 4.0;
         stringJ *= 3 + parseInt(`${stringJ}`);
      for (let f = 0; f < 3; f++) {
         stringJ /= Math.max(4, parseInt(`${stringJ}`));
      }
         stringJ += 3;
      ginit_i4 += `${2 - thumbnailK.length}`;
      if (mbbidh) {
         break;
      }
   } while ((reviewJ == ginit_i4) && mbbidh);
      selln = (bootsplashk * reviewJ.length) <= 12.71;
    

   let mode2 = 5936794.0 >= reducerH;
   do {
      reducerH /= Math.max(parseFloat(`${modelsk.length - 1}`), 4);
      if (mode2) {
         break;
      }
   } while ((!selln) && mode2);
      thumbnailK = `${parseInt(`${liveendmodallogoj}`) % (Math.max(parseInt(`${main_v4}`), 1))}`;
    

       let basketballR = 0.0;
       let libffmpegkitG: Map<any, any> = new Map([[String.fromCharCode(118,111,119,101,108,95,54,95,53,55,0),true ], [String.fromCharCode(103,95,55,50,95,115,112,101,99,105,97,108,0),true ], [String.fromCharCode(113,95,51,57,95,97,115,97,110,0),true ]]);
       let iconstarU: Map<any, any> = new Map([[String.fromCharCode(107,95,57,95,101,109,117,108,97,116,101,100,0),false ], [String.fromCharCode(115,95,56,51,95,103,101,116,116,105,110,103,0),false ]]);
      if (1 == (iconstarU.size | 4) && (basketballR - parseFloat(`${iconstarU.size}`)) == 2.17) {
         basketballR -= parseFloat(`${iconstarU.size}`);
      }
         basketballR += parseFloat(`${libffmpegkitG.size ^ iconstarU.size}`);
      modalB -= (parseFloat(`${String.fromCharCode(51,0) == ginit_i4 ? parseInt(`${live2}`) : ginit_i4.length}`));
   while (4.61 <= (2.52 - bootsplashk)) {
      ginit_i4 += `${modelsk.length}`;
      break;
   }
    

   for (let l = 0; l < 3; l++) {
       let historyT = 0;
       let balll: Map<any, any> = new Map([[String.fromCharCode(114,101,100,101,101,109,95,110,95,50,0),String.fromCharCode(118,105,101,119,95,55,95,54,0)], [String.fromCharCode(117,95,57,52,95,115,112,108,97,116,0),String.fromCharCode(122,95,51,53,95,117,110,112,97,99,107,104,105,0)], [String.fromCharCode(105,110,116,101,110,116,95,102,95,55,0),String.fromCharCode(104,113,120,100,115,112,95,99,95,57,56,0)]]);
       let benefitT = 3;
       let nativeL = String.fromCharCode(99,111,114,114,101,108,97,116,101,95,109,95,50,57,0);
       let libcxxcomponentsf: Array<any> = [870, 835, 31];
      let save6 = 9765040 >= libcxxcomponentsf.length;
      do {
         libcxxcomponentsf = [balll.size];
         if (save6) {
            break;
         }
      } while (((benefitT >> (Math.min(libcxxcomponentsf.length, 4))) <= 4) && save6);
         benefitT += historyT;
       let yellowredcardf = true;
       let mbnativeadvanced7 = false;
          let eactL = String.fromCharCode(114,100,99,111,115,116,95,57,95,52,54,0);
          let previewb = 2.0;
          let materialV = true;
         yellowredcardf = eactL.length <= 48;
         eactL += `${(parseInt(`${previewb}`) >> (Math.min(1, Math.abs((materialV ? 5 : 4)))))}`;
         previewb += (parseFloat(`${parseInt(`${previewb}`) % (Math.max(9, (materialV ? 4 : 2)))}`));
         historyT |= 3;
         nativeL += `${libcxxcomponentsf.length}`;
      while (balll.size <= libcxxcomponentsf.length) {
         balll.set(nativeL, nativeL.length);
         break;
      }
       let small6 = 1;
       let scoreQ: Array<any> = [1000, 256];
       let clearL: Array<any> = [863, 513, 177];
         libcxxcomponentsf.push(2);
          let descs: Array<any> = [687, 482];
          let incidentF: Map<any, any> = new Map([[String.fromCharCode(104,118,99,99,95,100,95,51,51,0),652], [String.fromCharCode(117,95,56,57,95,114,101,100,115,112,97,114,107,0),518]]);
         small6 >>= Math.min(2, Math.abs(3));
         descs = [incidentF.size];
         incidentF = new Map([[`${incidentF.size}`, descs.length]]);
         mbnativeadvanced7 = !yellowredcardf;
      while (libcxxcomponentsf.length == 4) {
         scoreQ.push(small6 ^ 2);
         break;
      }
         scoreQ = [small6];
         yellowredcardf = historyT == nativeL.length;
      thumbnailK = `${miniu - parseInt(`${modalB}`)}`;
   }
      injury2 /= Math.max(3, thumbnailK.length);
    

   if (ginit_i4.length > thumbnailK.length) {
      ginit_i4 += `${(parseInt(`${injury2}`) >> (Math.min(1, Math.abs((selln ? 2 : 1)))))}`;
   }
      skipW = awayd < parseInt(`${modalB}`);

    fetchData(searchKeyword, true);

       let logoutJ: Array<any> = [160, 634, 121];
      let xvodD = 8699330 <= logoutJ.length;
      do {
          let catalogc = true;
          let suggestione = 0.0;
          let otherG = String.fromCharCode(114,95,51,50,95,115,97,118,101,115,116,97,116,101,0);
          let invite_: Array<any> = [25, 495, 593];
          let heartK: Map<any, any> = new Map([[String.fromCharCode(115,117,98,112,101,101,114,95,97,95,57,49,0),String.fromCharCode(107,101,121,98,117,102,95,108,95,51,54,0)], [String.fromCharCode(115,95,55,56,95,105,109,109,117,116,97,98,108,101,0),String.fromCharCode(105,95,56,56,95,108,117,116,114,103,98,0)], [String.fromCharCode(112,114,105,109,105,116,105,118,101,95,48,95,49,48,0),String.fromCharCode(117,115,101,115,95,101,95,55,53,0)]]);
         logoutJ = [((catalogc ? 4 : 1) % (Math.max(7, invite_.length)))];
         catalogc = (heartK.size * otherG.length) > 84;
         suggestione -= parseFloat(`${1}`);
         otherG += `${otherG.length | parseInt(`${suggestione}`)}`;
         invite_ = [otherG.length];
         heartK.set(`${suggestione}`, 3 ^ heartK.size);
         if (xvodD) {
            break;
         }
      } while (xvodD && (1 < (logoutJ.length % 4)));
       let anytimeR = true;
       let bannerY = false;
      for (let i = 0; i < 2; i++) {
         anytimeR = logoutJ.includes(bannerY);
      }
      selln = main_v4 == reducerH;
      miniu |= (String.fromCharCode(71,0) == modelsk ? parseInt(`${reducerH}`) : modelsk.length);
    dispatch(addSearchHistory(searchKeyword));

      injury2 /= Math.max(5, 2 / (Math.max(7, parseInt(`${bootsplashk}`))));
       let vertical1 = 4.0;
       let unticku = String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,100,95,105,95,52,49,0);
       let type_ej = String.fromCharCode(111,95,48,95,119,114,106,112,103,99,111,109,0);
      while (unticku.length > parseInt(`${vertical1}`)) {
         unticku += `${parseInt(`${vertical1}`) >> (Math.min(Math.abs(2), 5))}`;
         break;
      }
      while (!unticku.endsWith(`${vertical1}`)) {
          let sina7 = String.fromCharCode(120,95,50,55,95,108,105,115,116,0);
          let brightnessS = 5.0;
          let episodesE = String.fromCharCode(109,97,114,107,100,111,119,110,95,98,95,55,54,0);
          let nativeexl = 3;
         unticku += `${sina7.length}`;
         sina7 += `${parseInt(`${brightnessS}`)}`;
         brightnessS *= parseFloat(`${parseInt(`${brightnessS}`) << (Math.min(2, Math.abs(nativeexl)))}`);
         episodesE = `${episodesE.length << (Math.min(Math.abs(1), 4))}`;
         nativeexl <<= Math.min(Math.abs((String.fromCharCode(116,0) == episodesE ? nativeexl : episodesE.length)), 1);
         break;
      }
      while (4.98 >= vertical1) {
          let arrowrightN = 5;
          let predictionl = true;
          let videojsW = String.fromCharCode(97,116,111,109,105,99,111,112,115,95,102,95,55,57,0);
          let side2 = true;
         vertical1 += parseFloat(`${parseInt(`${vertical1}`) | type_ej.length}`);
         arrowrightN |= 3 >> (Math.min(4, videojsW.length));
         predictionl = !side2;
         videojsW = `${((side2 ? 4 : 1) * videojsW.length)}`;
         break;
      }
          let qinit_toE = String.fromCharCode(99,98,117,102,95,49,95,50,56,0);
          let manifestz: Array<any> = [703, 819, 901];
         vertical1 -= parseFloat(`${1}`);
         qinit_toE += `${(qinit_toE == String.fromCharCode(109,0) ? qinit_toE.length : manifestz.length)}`;
         manifestz.push(qinit_toE.length);
         vertical1 *= parseFloat(`${type_ej.length}`);
          let sharemodalm = String.fromCharCode(100,95,53,49,95,121,117,118,109,111,110,111,0);
          let adultv = 4.0;
          let libavcodec_ = String.fromCharCode(118,95,51,56,95,121,121,121,121,0);
         unticku = `${(String.fromCharCode(68,0) == sharemodalm ? sharemodalm.length : parseInt(`${adultv}`))}`;
         adultv *= (parseFloat(`${libavcodec_ == String.fromCharCode(105,0) ? libavcodec_.length : libavcodec_.length}`));
      while (vertical1 == 4.86) {
          let flyerL = String.fromCharCode(100,105,115,99,97,114,100,95,99,95,55,55,0);
          let time_ucR = 4.0;
          let backiconW = String.fromCharCode(100,101,99,111,114,114,95,51,95,51,0);
          let c_imager = String.fromCharCode(109,95,54,51,95,112,117,114,112,111,115,101,0);
         type_ej = `${parseInt(`${vertical1}`)}`;
         flyerL = "1";
         time_ucR -= parseFloat(`${parseInt(`${time_ucR}`)}`);
         backiconW += `${(flyerL == String.fromCharCode(111,0) ? c_imager.length : flyerL.length)}`;
         c_imager += `${parseInt(`${time_ucR}`) + backiconW.length}`;
         break;
      }
      for (let c = 0; c < 3; c++) {
         type_ej = `${type_ej.length ^ parseInt(`${vertical1}`)}`;
      }
          let mbjscommona = String.fromCharCode(105,112,114,101,100,95,121,95,56,49,0);
          let profileactive4 = 2;
          let dragN = String.fromCharCode(109,95,53,49,95,116,101,97,114,0);
         vertical1 *= (parseFloat(`${String.fromCharCode(104,0) == unticku ? parseInt(`${vertical1}`) : unticku.length}`));
         mbjscommona += "2";
         profileactive4 -= mbjscommona.length;
         dragN = `${dragN.length}`;
      reviewJ = `${modelsk.length - thumbnailK.length}`;
    setShowResults(!showResults);
  };

  const clearHistory = useCallback(() => {
       let spinnerP = String.fromCharCode(122,95,53,51,95,114,101,116,97,105,110,115,0);
    let reducerU = String.fromCharCode(99,111,109,112,108,101,120,105,116,121,95,102,95,51,53,0);
    let unreadE = false;
    let reactnativejss = String.fromCharCode(102,95,53,53,95,103,101,116,105,110,116,0);
    let downarrowg = String.fromCharCode(115,95,53,49,95,100,115,116,114,0);
    let middlebrightnessd = String.fromCharCode(106,115,101,112,95,113,95,51,55,0);
    let mbnativeadvancedx = String.fromCharCode(109,111,100,101,99,111,110,116,95,100,95,51,0);
   let bodanY = reactnativejss == String.fromCharCode(106,104,122,109,97,109,50,54,0);
   do {
      reactnativejss = `${spinnerP.length / (Math.max(4, reducerU.length))}`;
      if (bodanY) {
         break;
      }
   } while (bodanY && (4 <= reducerU.length || reactnativejss == String.fromCharCode(113,0)));
   let b_centerx = reducerU == String.fromCharCode(110,110,55,122,0);
   do {
      reducerU = `${downarrowg.length}`;
      if (b_centerx) {
         break;
      }
   } while ((reducerU == String.fromCharCode(104,0) || 5 >= mbnativeadvancedx.length) && b_centerx);
       let valuesE: Map<any, any> = new Map([[String.fromCharCode(115,105,110,103,117,108,97,114,95,102,95,57,52,0),162], [String.fromCharCode(113,95,53,95,112,101,114,105,111,100,0),622]]);
       let iconnewsshareq = 2.0;
         valuesE = new Map([[`${valuesE.size}`, valuesE.size]]);
      while (Array.from(valuesE.values()).includes(iconnewsshareq)) {
         iconnewsshareq -= parseFloat(`${parseInt(`${iconnewsshareq}`)}`);
         break;
      }
      for (let o = 0; o < 3; o++) {
         valuesE = new Map([[`${valuesE.size}`, 2]]);
      }
      while (Array.from(valuesE.keys()).includes(`${iconnewsshareq}`)) {
         iconnewsshareq -= parseFloat(`${3}`);
         break;
      }
          let libffmpegkitO = String.fromCharCode(104,95,57,49,95,106,99,111,110,102,105,103,0);
         iconnewsshareq /= Math.max(5, parseFloat(`${3}`));
         libffmpegkitO += `${libffmpegkitO.length}`;
      if (5.6 < (iconnewsshareq * 3.41) || 1.93 < (3.41 * iconnewsshareq)) {
         iconnewsshareq -= parseFloat(`${3}`);
      }
      spinnerP += `${reactnativejss.length}`;
      mbnativeadvancedx = `${reactnativejss.length % (Math.max(1, downarrowg.length))}`;
      unreadE = mbnativeadvancedx.endsWith(`${unreadE}`);
   while (middlebrightnessd.length == 3 || 3 == spinnerP.length) {
       let pathj: Array<any> = [260, 15];
       let next8 = String.fromCharCode(103,100,112,114,95,52,95,49,48,0);
       let lightX = 5.0;
       let questw = String.fromCharCode(115,117,98,105,116,101,109,115,95,48,95,54,49,0);
      while (2.95 <= (lightX / 2.42) || (lightX / (Math.max(2.42, 5))) <= 4.4) {
         lightX += parseFloat(`${questw.length}`);
         break;
      }
          let promotionz = 5.0;
          let jingdongO = String.fromCharCode(119,95,56,55,95,118,105,101,119,112,111,114,116,0);
         lightX /= Math.max(1, parseFloat(`${next8.length}`));
         promotionz -= (parseFloat(`${jingdongO == String.fromCharCode(86,0) ? jingdongO.length : parseInt(`${promotionz}`)}`));
         next8 += `${questw.length >> (Math.min(Math.abs(3), 1))}`;
          let imagenetworkerrz = String.fromCharCode(116,111,111,108,116,105,112,95,110,95,53,48,0);
         pathj = [pathj.length];
         imagenetworkerrz += `${(imagenetworkerrz == String.fromCharCode(53,0) ? imagenetworkerrz.length : imagenetworkerrz.length)}`;
         lightX *= parseFloat(`${parseInt(`${lightX}`) + 3}`);
         next8 += `${parseInt(`${lightX}`) % (Math.max(1, 9))}`;
      let flagV = pathj.length <= 5760589;
      do {
         pathj.push(questw.length >> (Math.min(Math.abs(2), 2)));
         if (flagV) {
            break;
         }
      } while ((4 > (pathj.length << (Math.min(next8.length, 3)))) && flagV);
      let libloggerZ = 6980091.0 <= lightX;
      do {
          let b_centerl = String.fromCharCode(99,108,117,116,95,122,95,51,54,0);
          let countdownT = false;
          let mbridgeL = String.fromCharCode(107,101,121,119,111,114,100,95,121,95,52,57,0);
          let libflipperJ = 4;
          let overC: Map<any, any> = new Map([[String.fromCharCode(115,95,51,49,95,112,114,117,110,101,0),307], [String.fromCharCode(106,95,49,52,95,118,97,108,105,100,0),631]]);
         lightX /= Math.max(5, parseFloat(`${3 + b_centerl.length}`));
         b_centerl = `${libflipperJ * 1}`;
         countdownT = (overC.size % (Math.max(2, libflipperJ))) >= 7;
         mbridgeL = `${libflipperJ << (Math.min(Math.abs(overC.size), 1))}`;
         if (libloggerZ) {
            break;
         }
      } while ((1.16 == (parseFloat(`${questw.length}`) - lightX) || 4 == (3 << (Math.min(3, questw.length)))) && libloggerZ);
      let matchH = questw == String.fromCharCode(114,48,97,113,0);
      do {
          let popupq = 4.0;
          let spinnerA = 5.0;
          let libreanimatedE = String.fromCharCode(100,95,53,52,95,100,101,99,114,121,112,116,0);
         questw += `${questw.length}`;
         popupq += parseFloat(`${1}`);
         spinnerA -= parseFloat(`${parseInt(`${popupq}`)}`);
         libreanimatedE += `${(libreanimatedE == String.fromCharCode(120,0) ? parseInt(`${popupq}`) : libreanimatedE.length)}`;
         if (matchH) {
            break;
         }
      } while (matchH && (5 >= pathj.length));
      for (let w = 0; w < 1; w++) {
          let signinup9 = 5.0;
          let chartw = String.fromCharCode(112,105,120,108,101,116,95,103,95,53,0);
          let modeE = String.fromCharCode(109,95,55,52,95,112,111,115,116,105,110,103,0);
         questw = `${(String.fromCharCode(104,0) == modeE ? modeE.length : chartw.length)}`;
         signinup9 -= 1 | parseInt(`${signinup9}`);
         chartw = `${parseInt(`${signinup9}`) - parseInt(`${signinup9}`)}`;
      }
      let orientationt = String.fromCharCode(113,57,110,54,113,114,0) == next8;
      do {
         next8 += `${(next8 == String.fromCharCode(89,0) ? pathj.length : next8.length)}`;
         if (orientationt) {
            break;
         }
      } while ((questw.endsWith(`${next8.length}`)) && orientationt);
         questw += "1";
      spinnerP += `${parseInt(`${lightX}`)}`;
      break;
   }
   let libsgcore5 = spinnerP.length <= 9681374;
   do {
      spinnerP += `${3 & reactnativejss.length}`;
      if (libsgcore5) {
         break;
      }
   } while (libsgcore5 && (middlebrightnessd == String.fromCharCode(113,0)));
      spinnerP = "3";
       let k_viewI = String.fromCharCode(119,95,53,95,105,110,112,108,105,99,105,116,101,108,121,0);
       let qaagO = 0.0;
       let searchq: Map<any, any> = new Map([[String.fromCharCode(109,95,51,57,95,103,108,111,119,0),String.fromCharCode(105,95,50,57,95,109,112,115,117,98,0)], [String.fromCharCode(97,95,49,56,95,115,109,105,120,0),String.fromCharCode(117,95,50,57,95,111,116,111,115,0)]]);
      while (3.33 < (qaagO / 5.91) && 5.91 < (qaagO / (Math.max(9, searchq.size)))) {
         searchq = new Map([[`${qaagO}`, parseInt(`${qaagO}`)]]);
         break;
      }
         k_viewI = `${searchq.size}`;
      for (let c = 0; c < 2; c++) {
         k_viewI += `${k_viewI.length + parseInt(`${qaagO}`)}`;
      }
      let runtimei = 5393001.0 <= qaagO;
      do {
          let eighteeno = 1.0;
          let combinedW = String.fromCharCode(98,101,110,99,104,95,102,95,51,50,0);
          let comment0 = String.fromCharCode(122,95,49,49,95,102,102,109,101,116,97,0);
         qaagO *= searchq.size;
         eighteeno -= parseInt(`${eighteeno}`);
         combinedW += `${parseInt(`${eighteeno}`)}`;
         comment0 += `${combinedW.length | 2}`;
         if (runtimei) {
            break;
         }
      } while (runtimei && (2.67 <= (qaagO / (Math.max(2.70, 4))) && (qaagO / 2.70) <= 2.31));
      for (let l = 0; l < 3; l++) {
          let libcrashsdkQ = 1.0;
         searchq = new Map([[`${searchq.size}`, parseInt(`${libcrashsdkQ}`)]]);
      }
       let ying0: Array<any> = [String.fromCharCode(108,108,110,119,95,48,95,49,49,0), String.fromCharCode(98,100,119,110,95,56,95,52,51,0), String.fromCharCode(102,108,116,117,105,110,116,95,109,95,52,48,0)];
       let whiteanimationlivei: Array<any> = [621, 89, 1000];
         ying0 = [3];
      for (let m = 0; m < 1; m++) {
         whiteanimationlivei.push(ying0.length);
      }
         searchq = new Map([[`${whiteanimationlivei.length}`, whiteanimationlivei.length]]);
      middlebrightnessd += `${2 >> (Math.min(4, downarrowg.length))}`;
      spinnerP = `${((unreadE ? 5 : 5))}`;
      mbnativeadvancedx += `${(middlebrightnessd.length >> (Math.min(2, Math.abs((unreadE ? 1 : 5)))))}`;
   let libimagepipelinec = downarrowg.length >= 9620163;
   do {
       let project2 = 2;
       let selectedN = String.fromCharCode(104,105,101,114,95,116,95,55,57,0);
       let backiconC = false;
       let dplus9 = false;
       let disconnectedlogo5 = 0;
      for (let t = 0; t < 1; t++) {
         backiconC = disconnectedlogo5 >= 37;
      }
      while (project2 == 2) {
         backiconC = disconnectedlogo5 >= 30;
         break;
      }
      let userM = disconnectedlogo5 <= 5450487;
      do {
          let hover0: Map<any, any> = new Map([[String.fromCharCode(115,116,97,103,105,110,103,95,121,95,55,49,0),false ], [String.fromCharCode(119,95,55,95,99,99,111,117,110,116,0),false ], [String.fromCharCode(112,95,57,56,95,105,99,111,110,105,99,0),true ]]);
          let smallk = false;
         disconnectedlogo5 += (3 + (dplus9 ? 1 : 1));
         hover0.set(`${smallk}`, 3);
         if (userM) {
            break;
         }
      } while (userM && ((4 | disconnectedlogo5) == 5));
          let gdtadvG = String.fromCharCode(105,115,115,117,101,114,95,121,95,53,0);
          let bgvipxvodV = 2;
         disconnectedlogo5 <<= Math.min(4, Math.abs(2));
         gdtadvG += `${bgvipxvodV}`;
         bgvipxvodV <<= Math.min(5, Math.abs(2 >> (Math.min(1, Math.abs(bgvipxvodV)))));
      let bootsplashk = String.fromCharCode(113,54,52,121,111,103,0) == selectedN;
      do {
         selectedN = `${1 ^ selectedN.length}`;
         if (bootsplashk) {
            break;
         }
      } while (bootsplashk && (3 < selectedN.length && !dplus9));
         backiconC = 47 < disconnectedlogo5 || !dplus9;
         dplus9 = !dplus9;
      for (let z = 0; z < 1; z++) {
         project2 *= project2 >> (Math.min(4, Math.abs(2)));
      }
         selectedN += `${(String.fromCharCode(85,0) == selectedN ? selectedN.length : disconnectedlogo5)}`;
      for (let y = 0; y < 3; y++) {
         backiconC = selectedN == String.fromCharCode(71,0);
      }
      let watchnowbgr = dplus9 ? !dplus9 : dplus9;
      do {
         dplus9 = selectedN.length == 12;
         if (watchnowbgr) {
            break;
         }
      } while (watchnowbgr && (!dplus9 || (disconnectedlogo5 % (Math.max(3, 2))) == 4));
      for (let j = 0; j < 1; j++) {
         dplus9 = backiconC;
      }
          let balll = String.fromCharCode(110,105,100,111,98,106,95,101,95,54,55,0);
         disconnectedlogo5 <<= Math.min(Math.abs((disconnectedlogo5 ^ (dplus9 ? 4 : 1))), 2);
         balll += `${balll.length & 2}`;
         backiconC = !dplus9 || 43 < project2;
          let colorsN = false;
         disconnectedlogo5 |= selectedN.length;
      downarrowg += `${reactnativejss.length + 3}`;
      if (libimagepipelinec) {
         break;
      }
   } while ((4 > downarrowg.length) && libimagepipelinec);
       let heartQ = 2;
         heartQ -= heartQ;
      while (4 > (heartQ % (Math.max(4, heartQ)))) {
         heartQ -= heartQ;
         break;
      }
          let share5: Array<any> = [1000, 95, 146];
          let libflipperR = 2.0;
         heartQ >>= Math.min(3, share5.length);
         share5 = [parseInt(`${libflipperR}`) % (Math.max(parseInt(`${libflipperR}`), 1))];
      mbnativeadvancedx = `${(1 - (unreadE ? 5 : 3))}`;
   let filedp = unreadE ? !unreadE : unreadE;
   do {
       let stringsu = 2;
       let iconpipexpand4: Array<any> = [String.fromCharCode(114,101,97,100,95,57,95,55,52,0), String.fromCharCode(122,95,53,54,95,99,111,110,116,111,108,108,101,114,0), String.fromCharCode(118,95,51,50,95,99,111,100,101,99,0)];
       let commentw = 3.0;
          let flag_ = 5.0;
         iconpipexpand4 = [parseInt(`${flag_}`) / (Math.max(5, parseInt(`${commentw}`)))];
      while ((stringsu / (Math.max(iconpipexpand4.length, 3))) < 2 && (iconpipexpand4.length / (Math.max(2, 3))) < 3) {
         stringsu -= stringsu % (Math.max(iconpipexpand4.length, 3));
         break;
      }
         stringsu |= parseInt(`${commentw}`) | 3;
      if ((1 - stringsu) >= 1 && 2 >= (1 - iconpipexpand4.length)) {
          let libturbomodulejsijniR = String.fromCharCode(109,95,49,48,48,95,109,97,114,103,105,110,115,0);
         iconpipexpand4.push(stringsu + 3);
         libturbomodulejsijniR += "1";
      }
      for (let q = 0; q < 1; q++) {
         iconpipexpand4 = [iconpipexpand4.length];
      }
      let subtext4 = commentw >= 7134590.0;
      do {
         commentw /= Math.max(stringsu, 1);
         if (subtext4) {
            break;
         }
      } while (subtext4 && (stringsu < 1));
          let gestureb: Map<any, any> = new Map([[String.fromCharCode(115,116,105,102,102,110,101,115,115,95,106,95,51,53,0),196], [String.fromCharCode(99,111,110,99,97,116,101,110,97,116,101,100,95,97,95,53,52,0),889], [String.fromCharCode(109,118,115,97,100,95,106,95,55,49,0),813]]);
         iconpipexpand4.push(gestureb.size);
      if (2 > (stringsu ^ 2) && (iconpipexpand4.length ^ stringsu) > 2) {
          let predictiono: Map<any, any> = new Map([[String.fromCharCode(103,108,111,98,97,108,108,121,95,57,95,49,52,0),true ], [String.fromCharCode(105,99,101,99,97,115,116,95,49,95,54,50,0),false ]]);
          let friendsH = 1;
         iconpipexpand4.push(parseInt(`${commentw}`));
         predictiono = new Map([[`${predictiono.size}`, 2 + friendsH]]);
         friendsH /= Math.max(1 % (Math.max(5, friendsH)), 3);
      }
      if (commentw > stringsu) {
         commentw += 3;
      }
      unreadE = spinnerP == String.fromCharCode(69,0);
      if (filedp) {
         break;
      }
   } while (filedp && (reactnativejss.length >= 3));
       let checkboxk = 0.0;
       let predictionactivep: Array<any> = [String.fromCharCode(106,95,56,95,118,105,122,105,101,114,0), String.fromCharCode(114,95,57,55,0)];
         predictionactivep.push(3 | parseInt(`${checkboxk}`));
      if ((checkboxk - 2.6) == 2.13) {
         checkboxk -= parseFloat(`${1}`);
      }
      if (predictionactivep.includes(checkboxk)) {
         predictionactivep.push(3 ^ predictionactivep.length);
      }
       let schedulev = String.fromCharCode(102,95,56,53,95,98,97,116,99,104,101,100,0);
       let singleV = String.fromCharCode(119,114,105,116,101,95,99,95,49,55,0);
      while (1 < (predictionactivep.length - 2)) {
          let zhengpianp = 2.0;
          let inewse: Array<any> = [String.fromCharCode(108,111,103,103,105,110,103,95,112,95,56,54,0), String.fromCharCode(110,95,49,51,95,100,101,99,98,110,0)];
          let expandF = 0.0;
          let gifth: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,109,97,114,107,101,114,95,49,95,56,55,0),251], [String.fromCharCode(105,110,102,105,110,105,116,101,95,122,95,55,54,0),844]]);
         predictionactivep.push(schedulev.length - parseInt(`${checkboxk}`));
         zhengpianp -= inewse.length - 2;
         inewse.push(parseInt(`${zhengpianp}`) / (Math.max(1, inewse.length)));
         expandF -= parseInt(`${expandF}`) / (Math.max(gifth.size, 3));
         gifth = new Map([[`${gifth.size}`, parseInt(`${zhengpianp}`)]]);
         break;
      }
      let launchP = schedulev.length <= 6619850;
      do {
         schedulev = `${schedulev.length}`;
         if (launchP) {
            break;
         }
      } while (launchP && (singleV != String.fromCharCode(99,0)));
      reducerU = `${1 >> (Math.min(3, reactnativejss.length))}`;
   if (4 <= spinnerP.length && !unreadE) {
       let modalJ = true;
       let downloader7: Map<any, any> = new Map([[String.fromCharCode(97,116,111,109,105,99,111,112,115,95,104,95,50,54,0),true ], [String.fromCharCode(122,95,54,56,95,114,101,97,110,97,108,121,122,101,0),true ], [String.fromCharCode(105,108,115,116,95,119,95,50,52,0),false ]]);
       let sigmobQ = 0;
       let sharemodalU: Map<any, any> = new Map([[String.fromCharCode(115,99,104,105,95,116,95,57,52,0),585], [String.fromCharCode(104,95,57,55,95,115,111,98,101,108,0),329]]);
       let mappingf = 1.0;
      if (!modalJ && (mappingf + 3.43) <= 3.25) {
         modalJ = (downloader7.size - parseInt(`${mappingf}`)) < 37;
      }
      if (4 < (sigmobQ ^ downloader7.size) && (sigmobQ ^ downloader7.size) < 4) {
          let castA = true;
          let viewert = String.fromCharCode(112,114,111,109,112,116,101,100,95,118,95,53,56,0);
          let countryQ = 2;
          let livev = String.fromCharCode(109,95,52,49,95,97,118,115,115,0);
         sigmobQ &= sigmobQ;
         castA = viewert.length < 71;
         viewert = `${livev.length}`;
         countryQ <<= Math.min(5, Math.abs(2));
         livev = `${viewert.length ^ countryQ}`;
      }
         sigmobQ &= downloader7.size;
      let gradlewO = 6935170 <= downloader7.size;
      do {
         downloader7.set(`${sigmobQ}`, sigmobQ);
         if (gradlewO) {
            break;
         }
      } while (gradlewO && (!modalJ));
      let moduleN = mappingf <= 5367937.0;
      do {
         mappingf += parseFloat(`${parseInt(`${mappingf}`) | 2}`);
         if (moduleN) {
            break;
         }
      } while (moduleN && (Array.from(sharemodalU.keys()).includes(`${mappingf}`)));
      let libreactperfloggerjniT = 8391144.0 <= mappingf;
      do {
         mappingf *= parseFloat(`${2}`);
         if (libreactperfloggerjniT) {
            break;
         }
      } while (libreactperfloggerjniT && (5 == (sharemodalU.size * parseInt(`${mappingf}`))));
      while (downloader7.get(`${mappingf}`) == null) {
          let dice9 = String.fromCharCode(113,95,54,54,95,102,117,108,108,121,0);
          let backicong: Map<any, any> = new Map([[String.fromCharCode(111,95,50,56,95,114,101,115,105,103,110,0),678], [String.fromCharCode(104,95,53,95,116,104,105,114,100,0),707], [String.fromCharCode(99,111,110,102,105,114,109,101,100,95,104,95,56,53,0),853]]);
         mappingf -= parseFloat(`${2 << (Math.min(3, dice9.length))}`);
         dice9 += `${backicong.size << (Math.min(4, Math.abs(backicong.size)))}`;
         break;
      }
          let iconrefreshl: Map<any, any> = new Map([[String.fromCharCode(110,95,49,53,95,98,97,116,99,104,101,115,0),145], [String.fromCharCode(115,117,98,112,101,108,95,120,95,50,50,0),463], [String.fromCharCode(107,95,49,56,95,112,105,99,107,101,114,0),916]]);
         sharemodalU.set(`${iconrefreshl.size}`, downloader7.size | 1);
         sigmobQ ^= 3;
      if ((5.21 * mappingf) == 1.82) {
         mappingf += parseFloat(`${sharemodalU.size - 3}`);
      }
         sigmobQ *= 3;
      if (3 <= downloader7.size) {
         downloader7.set(`${downloader7.size}`, downloader7.size);
      }
      let iconnointernetE = 8741780 <= sharemodalU.size;
      do {
         sharemodalU = new Map([[`${downloader7.size}`, sigmobQ]]);
         if (iconnointernetE) {
            break;
         }
      } while ((!Array.from(sharemodalU.values()).includes(mappingf)) && iconnointernetE);
          let backward4: Map<any, any> = new Map([[String.fromCharCode(116,111,103,103,108,101,100,95,48,95,50,54,0),366], [String.fromCharCode(115,117,98,112,97,99,107,101,116,115,95,119,95,57,56,0),259]]);
          let agreementW = String.fromCharCode(115,101,103,109,101,110,116,95,108,95,54,53,0);
          let loadingK = String.fromCharCode(101,108,105,115,116,95,111,95,54,49,0);
         mappingf += parseFloat(`${1 * sigmobQ}`);
         backward4.set(loadingK, agreementW.length + loadingK.length);
         agreementW = `${backward4.size / (Math.max(agreementW.length, 4))}`;
         downloader7 = new Map([[`${downloader7.size}`, 3 - sharemodalU.size]]);
      spinnerP = `${3 >> (Math.min(2, spinnerP.length))}`;
   }
       let baseU: Map<any, any> = new Map([[String.fromCharCode(118,95,51,49,95,114,101,97,100,97,98,108,101,0),true ], [String.fromCharCode(115,105,103,105,100,95,97,95,56,50,0),true ], [String.fromCharCode(115,99,104,101,109,97,95,115,95,56,51,0),true ]]);
          let rewardvideo6 = String.fromCharCode(106,97,105,108,98,114,101,97,107,95,110,95,50,54,0);
         baseU.set(`${rewardvideo6}`, rewardvideo6.length + 3);
      for (let e = 0; e < 2; e++) {
         baseU = new Map([[`${baseU.size}`, baseU.size >> (Math.min(3, Math.abs(baseU.size)))]]);
      }
      if (baseU.get(`${baseU.size}`) == null) {
         baseU.set(`${baseU.size}`, 3);
      }
      unreadE = (spinnerP.length % (Math.max(4, downarrowg.length))) == 70;
      spinnerP += `${1 % (Math.max(6, reducerU.length))}`;

    dispatch(clearSearchHistory());
  }, []);

  
  const onClickSearchResult = useCallback(() => {
       let resultE = String.fromCharCode(121,95,56,56,95,111,118,101,114,114,105,100,105,110,103,0);
    let shirtP = String.fromCharCode(115,108,105,112,112,97,103,101,115,95,113,95,56,57,0);
    let libavdevice9 = String.fromCharCode(102,111,114,107,95,111,95,53,57,0);
    let androidH = String.fromCharCode(109,97,99,104,95,48,95,54,54,0);
    let flipperW: Array<any> = [String.fromCharCode(106,95,50,53,95,98,111,116,104,0), String.fromCharCode(122,95,57,51,95,100,97,116,97,0)];
    let umengB = String.fromCharCode(116,114,101,120,95,105,95,57,51,0);
    let vipsportd = 0.0;
    let base0: Map<any, any> = new Map([[String.fromCharCode(113,95,53,50,95,97,114,98,105,116,114,117,109,0),false ], [String.fromCharCode(111,95,55,57,95,115,116,114,116,111,108,108,0),false ]]);
    let screenO = String.fromCharCode(108,97,100,100,101,114,115,116,101,112,95,117,95,52,51,0);
    let configureC = 1.0;
    let trophyl = String.fromCharCode(115,116,112,115,95,104,95,50,0);
    let mutedY = String.fromCharCode(118,95,52,51,95,102,116,101,108,108,0);
    let main_qm = String.fromCharCode(120,95,57,54,95,112,97,116,104,109,116,117,0);
    let spinner7: Array<any> = [709, 149, 425];
    let arrow9 = false;
      screenO = `${parseInt(`${vipsportd}`)}`;
       let libtanH: Array<any> = [540, 464];
         libtanH.push(libtanH.length * 3);
      while ((2 >> (Math.min(4, libtanH.length))) <= 5 && (libtanH.length >> (Math.min(Math.abs(2), 4))) <= 1) {
         libtanH.push(libtanH.length % (Math.max(1, libtanH.length)));
         break;
      }
          let webview2: Array<any> = [755, 873];
         libtanH.push(libtanH.length);
         webview2 = [webview2.length % 1];
      mutedY += `${parseInt(`${vipsportd}`)}`;
   if (2 <= base0.size) {
      configureC /= Math.max(1, libavdevice9.length / 3);
   }
       let minivodJ = String.fromCharCode(114,95,49,48,48,95,118,112,114,105,110,116,102,0);
       let volumeW: Array<any> = [194, 751];
       let baselineS = String.fromCharCode(121,95,57,49,95,115,101,108,101,99,116,105,111,110,115,0);
         baselineS += "1";
      let sendK = 8196225 <= minivodJ.length;
      do {
         minivodJ += `${volumeW.length}`;
         if (sendK) {
            break;
         }
      } while ((baselineS != String.fromCharCode(86,0)) && sendK);
      let sportsU = 7153602 >= baselineS.length;
      do {
         baselineS = `${minivodJ.length}`;
         if (sportsU) {
            break;
         }
      } while ((minivodJ == String.fromCharCode(114,0)) && sportsU);
          let unreadq = String.fromCharCode(108,95,55,56,95,105,100,99,116,0);
          let dycreatorE: Array<any> = [529, 783, 210];
          let countdownB: Map<any, any> = new Map([[String.fromCharCode(100,95,54,56,95,110,95,51,52,0),String.fromCharCode(113,95,56,56,95,114,101,99,111,110,0)], [String.fromCharCode(112,114,101,98,117,102,95,101,95,57,52,0),String.fromCharCode(108,95,50,49,95,97,117,116,111,99,104,101,99,107,112,111,105,110,116,0)]]);
         volumeW = [2];
         unreadq += `${(String.fromCharCode(103,0) == unreadq ? dycreatorE.length : unreadq.length)}`;
         dycreatorE.push(1);
         countdownB = new Map([[`${countdownB.size}`, countdownB.size * 2]]);
          let expiredd: Map<any, any> = new Map([[String.fromCharCode(102,101,97,116,117,114,101,115,95,120,95,55,50,0),9], [String.fromCharCode(116,95,57,53,95,99,101,108,101,98,114,97,116,101,0),296]]);
         minivodJ += `${baselineS.length}`;
         expiredd.set(`${expiredd.size}`, expiredd.size);
      while (minivodJ.length >= 2) {
          let dangerH = 1.0;
          let spinnerM = 3.0;
          let contextH = String.fromCharCode(119,95,53,55,95,116,109,112,108,0);
         minivodJ += `${parseInt(`${spinnerM}`)}`;
         dangerH *= (contextH == String.fromCharCode(68,0) ? parseInt(`${dangerH}`) : contextH.length);
         break;
      }
       let internetm = 5.0;
       let f_centerZ = 0.0;
      let mbnativeadvancedg = 5785283.0 >= f_centerZ;
      do {
         f_centerZ *= 1;
         if (mbnativeadvancedg) {
            break;
         }
      } while (mbnativeadvancedg && (baselineS.startsWith(`${f_centerZ}`)));
         minivodJ = `${parseInt(`${f_centerZ}`)}`;
      umengB += `${resultE.length}`;
      libavdevice9 += `${umengB.length}`;
      androidH = `${base0.size}`;
      trophyl += `${main_qm.length}`;
      mutedY += `${umengB.length / 1}`;
       let gifgoalbgB: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,97,100,101,100,95,115,95,54,56,0),980], [String.fromCharCode(99,95,52,53,95,107,105,116,0),57], [String.fromCharCode(109,95,55,95,111,115,116,97,114,0),106]]);
      while (gifgoalbgB.size <= gifgoalbgB.size) {
         gifgoalbgB = new Map([[`${gifgoalbgB.size}`, gifgoalbgB.size - 3]]);
         break;
      }
         gifgoalbgB = new Map([[`${gifgoalbgB.size}`, gifgoalbgB.size]]);
         gifgoalbgB.set(`${gifgoalbgB.size}`, gifgoalbgB.size % (Math.max(gifgoalbgB.size, 9)));
      androidH = `${parseInt(`${vipsportd}`)}`;
       let const_y5 = String.fromCharCode(103,95,55,54,95,105,110,111,117,116,115,0);
       let detailsx = 1.0;
          let inactiveu: Array<any> = [907, 806, 931];
          let topicY = 0.0;
          let matchesE = String.fromCharCode(115,111,102,116,119,97,114,101,95,111,95,51,54,0);
         const_y5 += `${const_y5.length * 3}`;
         inactiveu = [1];
         topicY *= inactiveu.length / (Math.max(matchesE.length, 6));
         matchesE += `${2 & matchesE.length}`;
      while (const_y5.includes(`${detailsx}`)) {
         const_y5 += `${parseInt(`${detailsx}`) % (Math.max(2, const_y5.length))}`;
         break;
      }
      while ((detailsx - 1.75) > 1.100) {
         const_y5 += `${parseInt(`${detailsx}`)}`;
         break;
      }
      let stylesH = String.fromCharCode(121,98,50,120,0) == const_y5;
      do {
         const_y5 = "2";
         if (stylesH) {
            break;
         }
      } while ((const_y5.length == parseInt(`${detailsx}`)) && stylesH);
          let configure_ = String.fromCharCode(115,99,97,110,110,101,114,95,101,95,51,53,0);
         const_y5 = `${2 & const_y5.length}`;
         configure_ = `${configure_.length | configure_.length}`;
      if (1 < (4 ^ const_y5.length)) {
          let dplus6 = String.fromCharCode(98,111,108,100,95,48,95,49,57,0);
          let mbridge8 = 5;
          let xadsdkW = 1.0;
          let hiadf = 0;
          let lineO: Map<any, any> = new Map([[String.fromCharCode(117,95,55,54,95,97,115,110,0),691], [String.fromCharCode(102,95,55,53,95,113,117,97,110,116,105,108,101,0),591]]);
         detailsx += parseFloat(`${mbridge8}`);
         dplus6 = `${hiadf}`;
         mbridge8 ^= 3 >> (Math.min(Math.abs(parseInt(`${xadsdkW}`)), 5));
         xadsdkW += (parseFloat(`${String.fromCharCode(48,0) == dplus6 ? hiadf : dplus6.length}`));
         lineO = new Map([[`${xadsdkW}`, dplus6.length]]);
      }
      base0 = new Map([[`${base0.size}`, umengB.length | base0.size]]);
   if (androidH == trophyl) {
       let entryk = String.fromCharCode(122,112,116,102,95,50,95,54,52,0);
       let greyH = 5.0;
          let downw = 2.0;
         greyH += 2 * parseInt(`${downw}`);
      while (1 >= entryk.length) {
          let whatsappr = 4;
          let traminiA = 3.0;
          let starH = String.fromCharCode(113,95,50,57,95,99,111,109,109,117,110,105,99,97,116,105,111,110,0);
          let iconstarR: Map<any, any> = new Map([[String.fromCharCode(104,95,55,52,95,112,114,101,118,101,110,116,101,100,0),false ], [String.fromCharCode(119,95,52,51,95,115,112,114,101,97,100,0),true ], [String.fromCharCode(118,95,50,56,95,110,111,116,105,102,105,101,115,0),true ]]);
          let anner5 = 1.0;
         greyH -= 1;
         whatsappr += 2 | whatsappr;
         traminiA *= parseInt(`${anner5}`) << (Math.min(starH.length, 3));
         starH = "1";
         iconstarR.set(`${traminiA}`, 3 - parseInt(`${traminiA}`));
         anner5 /= Math.max(whatsappr, 5);
         break;
      }
          let assistl = 2.0;
          let tempnodatagifa: Array<any> = [569, 981, 56];
          let overC = String.fromCharCode(99,108,97,105,109,95,97,95,55,56,0);
         greyH *= 1 - parseInt(`${assistl}`);
         assistl += parseFloat(`${tempnodatagifa.length}`);
         tempnodatagifa = [tempnodatagifa.length];
         overC = `${tempnodatagifa.length}`;
       let eventsplashR = String.fromCharCode(107,101,121,99,104,97,105,110,95,107,95,50,49,0);
       let taiwan1 = String.fromCharCode(110,95,50,57,95,114,111,108,108,0);
      for (let m = 0; m < 3; m++) {
         eventsplashR += `${parseInt(`${greyH}`)}`;
      }
         taiwan1 = `${2 & eventsplashR.length}`;
      trophyl = `${flipperW.length}`;
   }
       let defaultprofilepicv: Array<any> = [640, 11];
       let apps3 = 1.0;
       let controlsi: Array<any> = [876, 730];
          let sentryy = true;
          let profileinactiveH = 0.0;
         apps3 /= Math.max(4, ((sentryy ? 4 : 5) | 3));
         sentryy = profileinactiveH >= 55.63 && profileinactiveH >= 55.63;
       let episodesh = true;
      let update_qW = controlsi.length <= 6270763;
      do {
          let tnewsd = true;
          let const_z27 = 1.0;
          let preview8 = 0.0;
          let webviewX = 4.0;
         controlsi.push(controlsi.length);
         tnewsd = preview8 == webviewX;
         const_z27 += parseFloat(`${parseInt(`${webviewX}`)}`);
         preview8 *= 2;
         if (update_qW) {
            break;
         }
      } while ((episodesh) && update_qW);
       let orangeo = 5.0;
       let defaultprofilepicU = 1.0;
          let abidetecth = 5.0;
          let short_ij: Map<any, any> = new Map([[String.fromCharCode(112,114,111,104,105,98,105,116,95,113,95,57,48,0),853], [String.fromCharCode(109,95,52,48,95,114,101,100,117,99,116,105,111,110,115,0),3], [String.fromCharCode(107,95,51,56,95,100,101,102,105,110,105,116,105,111,110,0),122]]);
          let analytic6 = String.fromCharCode(112,95,50,56,95,121,118,116,111,121,117,121,0);
         episodesh = 50.1 >= apps3;
         abidetecth += 3 + analytic6.length;
         short_ij = new Map([[`${short_ij.size}`, short_ij.size - parseInt(`${abidetecth}`)]]);
         analytic6 += `${parseInt(`${abidetecth}`)}`;
      while (controlsi.length >= parseInt(`${defaultprofilepicU}`)) {
          let teamR = 0.0;
          let libcrashsdkE = String.fromCharCode(99,111,110,100,117,99,116,111,114,95,55,95,57,53,0);
         controlsi = [((episodesh ? 3 : 2) % (Math.max(parseInt(`${orangeo}`), 8)))];
         teamR -= parseFloat(`${2 - libcrashsdkE.length}`);
         libcrashsdkE = `${libcrashsdkE.length | parseInt(`${teamR}`)}`;
         break;
      }
      if ((4.71 * apps3) > 2.39 || (defaultprofilepicv.length / 2) > 3) {
         apps3 -= controlsi.length;
      }
      for (let w = 0; w < 3; w++) {
         orangeo -= parseFloat(`${defaultprofilepicv.length}`);
      }
      let floaterW = episodesh ? !episodesh : episodesh;
      do {
          let albumm = 5.0;
          let defaultprofilepic5 = 0.0;
          let unselecteds: Array<any> = [629, 414, 335];
          let mbridgei = 4;
          let hoverQ: Array<any> = [174, 106];
         episodesh = defaultprofilepic5 < parseFloat(`${defaultprofilepicv.length}`);
         albumm *= unselecteds.length >> (Math.min(2, Math.abs(mbridgei)));
         defaultprofilepic5 /= Math.max(parseFloat(`${unselecteds.length}`), 1);
         mbridgei /= Math.max(unselecteds.length, 5);
         hoverQ.push(1);
         if (floaterW) {
            break;
         }
      } while ((4.83 < defaultprofilepicU) && floaterW);
      main_qm += `${parseInt(`${configureC}`)}`;
      androidH += `${(String.fromCharCode(106,0) == androidH ? androidH.length : shirtP.length)}`;
      libavdevice9 += `${androidH.length & base0.size}`;
   if (!mutedY.startsWith(libavdevice9)) {
      libavdevice9 = `${parseInt(`${vipsportd}`) & spinner7.length}`;
   }
   for (let u = 0; u < 1; u++) {
       let animationR: Map<any, any> = new Map([[String.fromCharCode(114,95,54,95,97,102,116,101,114,0),890], [String.fromCharCode(102,95,51,95,111,117,116,108,105,101,114,0),473]]);
       let bannerf: Array<any> = [140, 879, 434];
       let thumbnailO = true;
      for (let x = 0; x < 2; x++) {
         bannerf.push(1);
      }
       let predictionbannersharedb = 3;
       let lessC = 0;
         predictionbannersharedb *= predictionbannersharedb / (Math.max(lessC, 3));
      let abidetectC = bannerf.length >= 7587690;
      do {
         bannerf = [1];
         if (abidetectC) {
            break;
         }
      } while (((5 & bannerf.length) == 5 || 3 == (5 & bannerf.length)) && abidetectC);
      let giftbuttonZ = lessC >= 9006664;
      do {
          let aboutw: Array<any> = [729, 847, 29];
          let lineW: Map<any, any> = new Map([[String.fromCharCode(110,95,53,48,95,117,105,110,116,112,111,119,0),909], [String.fromCharCode(105,95,56,49,95,112,105,116,99,104,102,105,108,116,101,114,0),436]]);
          let submitt = String.fromCharCode(115,105,103,104,97,110,100,108,101,114,95,109,95,52,53,0);
          let questQ = 5.0;
         lessC -= aboutw.length;
         aboutw = [2 | submitt.length];
         lineW = new Map([[submitt, parseInt(`${questQ}`) % (Math.max(2, 1))]]);
         questQ *= 3 >> (Math.min(2, submitt.length));
         if (giftbuttonZ) {
            break;
         }
      } while (((2 & lessC) == 3 && 1 == (2 & bannerf.length)) && giftbuttonZ);
      let clubP = thumbnailO ? !thumbnailO : thumbnailO;
      do {
         thumbnailO = !thumbnailO;
         if (clubP) {
            break;
         }
      } while (clubP && (4 <= (5 * animationR.size) && thumbnailO));
          let indicator0: Array<any> = [925, 968, 869];
          let whatsappY = 3.0;
          let basketballhometeamE = String.fromCharCode(109,117,120,95,117,95,54,52,0);
         thumbnailO = 90 >= animationR.size;
         indicator0 = [3 - indicator0.length];
         whatsappY -= basketballhometeamE.length & parseInt(`${whatsappY}`);
         basketballhometeamE += `${parseInt(`${whatsappY}`) ^ 2}`;
         bannerf.push(((thumbnailO ? 3 : 4) >> (Math.min(bannerf.length, 2))));
         animationR = new Map([[`${predictionbannersharedb}`, lessC << (Math.min(Math.abs(predictionbannersharedb), 4))]]);
      shirtP += `${flipperW.length}`;
   }
   if (!shirtP.includes(mutedY)) {
       let neond = 3.0;
       let handlere = 5;
       let actiono = String.fromCharCode(107,101,121,118,97,108,95,115,95,49,48,0);
      for (let f = 0; f < 2; f++) {
         neond /= Math.max(3, parseInt(`${neond}`));
      }
      let librrcw = handlere >= 6997054;
      do {
         handlere ^= 2;
         if (librrcw) {
            break;
         }
      } while ((3 <= handlere) && librrcw);
       let backgroundz = 2.0;
       let libzeusJ = 5.0;
      if (5.59 > (libzeusJ / 2.83) || (backgroundz / 2.83) > 4.33) {
         backgroundz += handlere * parseInt(`${neond}`);
      }
      if ((handlere << (Math.min(Math.abs(1), 3))) >= 4) {
          let rulesw = String.fromCharCode(97,117,116,111,112,108,97,121,105,110,103,95,101,95,48,0);
          let areah = false;
          let short_gj = false;
          let updatesH = 1.0;
         handlere *= (rulesw == String.fromCharCode(48,0) ? rulesw.length : parseInt(`${libzeusJ}`));
         areah = 18.30 <= updatesH && !short_gj;
         short_gj = updatesH == 55.13;
      }
      if ((neond / (Math.max(1.6, 6))) > 5.83) {
         neond *= 1 >> (Math.min(Math.abs(parseInt(`${libzeusJ}`)), 3));
      }
      if (4 < actiono.length) {
         actiono += `${(actiono == String.fromCharCode(110,0) ? actiono.length : handlere)}`;
      }
      let diceF = String.fromCharCode(104,50,52,114,118,101,0) == actiono;
      do {
         actiono = `${handlere}`;
         if (diceF) {
            break;
         }
      } while (diceF && (actiono.length == 1));
      while ((parseInt(`${backgroundz}`) - actiono.length) <= 5) {
         backgroundz /= Math.max(1, 4);
         break;
      }
      shirtP += "1";
   }
   for (let j = 0; j < 3; j++) {
      libavdevice9 = `${shirtP.length}`;
   }
   for (let r = 0; r < 3; r++) {
      base0 = new Map([[screenO, trophyl.length << (Math.min(2, screenO.length))]]);
   }
   while (!trophyl.includes(`${mutedY.length}`)) {
      mutedY = `${shirtP.length}`;
      break;
   }
   while (androidH != trophyl) {
      trophyl = "1";
      break;
   }
   if (5 < (umengB.length << (Math.min(3, Math.abs(base0.size)))) && (5 << (Math.min(2, umengB.length))) < 2) {
      base0 = new Map([[`${spinner7.length}`, resultE.length]]);
   }
      umengB = `${main_qm.length}`;
      main_qm = `${1 - spinner7.length}`;
   while (!spinner7.includes(flipperW.length)) {
      flipperW = [1 / (Math.max(1, spinner7.length))];
      break;
   }

    ww_runtime.searchResultClicksAnalytics();
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
            source={require("@static/images/giflivestreamingNavigationVolume.gif")}
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
    color: "orientationKsadHuawei",
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
