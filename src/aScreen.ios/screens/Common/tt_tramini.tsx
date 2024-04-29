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
import tt_humidity_guide from "../../../../Umeng/tt_humidity_guide";
import { ttConfirmationChinasame } from "@api";

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

  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(
    ({ searchHistoryReducer }: ttOrange) => searchHistoryReducer
  );
  const [isFetching, setisFetching] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { colors, textVariants, spacing, icons } = useTheme();

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
       let rulesb = false;
    let streamingj = 1.0;
    let launchere = 0.0;
    let shoot7 = 5;
    let fullF = 5.0;
    let anewsn = String.fromCharCode(100,101,102,97,117,108,116,115,95,53,95,54,56,0);
    let albumK = String.fromCharCode(116,101,114,109,105,110,97,116,105,110,103,95,54,95,52,48,0);
    let productz = String.fromCharCode(120,95,54,51,95,112,116,111,110,0);
      albumK = `${albumK.length}`;
      launchere -= parseFloat(`${3 | parseInt(`${fullF}`)}`);

    let searchKeyword = placeholderSearch;

       let pingo = 0.0;
      if ((4.21 * pingo) >= 2.39) {
          let mbnativee = 1.0;
         pingo /= Math.max(5, parseInt(`${mbnativee}`) & 3);
      }
      for (let i = 0; i < 1; i++) {
          let filterK: Array<any> = [274, 210, 511];
         pingo += filterK.length + parseInt(`${pingo}`);
      }
      while (2.36 >= (1.56 - pingo) && (1.56 - pingo) >= 5.9) {
          let serviceK = String.fromCharCode(115,109,112,116,101,104,100,98,97,114,115,95,120,95,49,51,0);
          let lessh = String.fromCharCode(99,111,117,108,100,95,116,95,54,55,0);
          let traminit = 0;
         pingo /= Math.max(3, 2);
         serviceK += "3";
         lessh = `${serviceK.length | lessh.length}`;
         traminit %= Math.max(2, traminit);
         break;
      }
      launchere *= parseFloat(`${parseInt(`${streamingj}`)}`);
   let bottomV = rulesb ? !rulesb : rulesb;
   do {
      rulesb = launchere < 7.31 && shoot7 < 73;
      if (bottomV) {
         break;
      }
   } while ((!rulesb) && bottomV);

    if (search != "") {

   if (anewsn.length == 2) {
       let modalP = String.fromCharCode(120,95,52,54,95,97,117,116,111,117,112,100,97,116,101,0);
         modalP += "1";
      if (modalP.length <= modalP.length) {
          let injuryi: Map<any, any> = new Map([[String.fromCharCode(107,101,121,119,111,114,100,95,120,95,50,0),true ], [String.fromCharCode(101,95,49,48,95,112,114,101,112,114,111,103,114,97,109,109,101,100,0),true ], [String.fromCharCode(109,97,120,101,100,95,109,95,57,53,0),false ]]);
          let settings8: Array<any> = [String.fromCharCode(108,105,110,107,115,95,53,95,57,56,0), String.fromCharCode(104,101,105,103,104,116,95,120,95,52,53,0), String.fromCharCode(121,95,54,52,95,101,103,111,108,111,109,98,0)];
         modalP = `${injuryi.size / (Math.max(modalP.length, 4))}`;
         injuryi.set(`${settings8.length}`, settings8.length);
      }
      let textz = modalP == String.fromCharCode(51,115,55,50,122,103,57,95,0);
      do {
          let greyl = 4.0;
          let floatingn: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,102,97,99,101,95,101,95,53,56,0),352], [String.fromCharCode(121,95,51,54,95,97,97,99,100,101,99,116,97,98,0),232]]);
          let vietnam5 = 3;
          let b_lockZ = String.fromCharCode(119,119,119,95,103,95,50,53,0);
          let mbsplashb = 3.0;
         modalP = `${parseInt(`${mbsplashb}`) & parseInt(`${greyl}`)}`;
         greyl += parseFloat(`${floatingn.size}`);
         floatingn = new Map([[`${floatingn.size}`, vietnam5 + 1]]);
         vietnam5 /= Math.max((b_lockZ == String.fromCharCode(89,0) ? b_lockZ.length : vietnam5), 1);
         mbsplashb *= parseFloat(`${b_lockZ.length ^ 3}`);
         if (textz) {
            break;
         }
      } while (textz && (modalP.startsWith(`${modalP.length}`)));
      anewsn = `${3 >> (Math.min(2, modalP.length))}`;
   }
      streamingj /= Math.max(4, parseInt(`${launchere}`) ^ parseInt(`${streamingj}`));
      searchKeyword = search;
    }

    

   for (let t = 0; t < 3; t++) {
       let macaum = String.fromCharCode(97,95,49,56,95,114,111,119,105,100,0);
       let combinedX = true;
       let selection3 = 1;
          let mailk = String.fromCharCode(111,95,53,48,95,99,111,110,102,108,105,99,116,105,110,103,0);
          let condensed7: Array<any> = [440, 796, 541];
          let entryW = 3;
         combinedX = 56 > entryW;
         mailk = `${condensed7.length + 1}`;
         condensed7.push(3);
         entryW |= mailk.length & condensed7.length;
      anewsn += `${1 / (Math.max(10, parseInt(`${fullF}`)))}`;
      macaum = `${3 << (Math.min(4, macaum.length))}`;
   }
   if (5.10 >= (streamingj * albumK.length) && (streamingj * 5.10) >= 4.33) {
      albumK = `${3 << (Math.min(2, anewsn.length))}`;
   }
    

   let chinasameI = 7041352 <= shoot7;
   do {
      shoot7 += 3 * parseInt(`${streamingj}`);
      if (chinasameI) {
         break;
      }
   } while (chinasameI && (shoot7 == 3));
      anewsn += `${parseInt(`${launchere}`)}`;
    

   let userW = 9109169 <= shoot7;
   do {
      shoot7 >>= Math.min(3, Math.abs(parseInt(`${launchere}`) % (Math.max(parseInt(`${streamingj}`), 3))));
      if (userW) {
         break;
      }
   } while (((launchere + shoot7) < 1.27) && userW);
   for (let r = 0; r < 3; r++) {
      anewsn += `${parseInt(`${streamingj}`)}`;
   }
    

   for (let o = 0; o < 1; o++) {
      anewsn = `${parseInt(`${launchere}`)}`;
   }
      launchere += parseFloat(`${albumK.length}`);

    

      launchere /= Math.max(3, (parseFloat(`${parseInt(`${fullF}`) * (rulesb ? 1 : 4)}`)));
   if (1 < (shoot7 % (Math.max(anewsn.length, 8))) || (1 % (Math.max(9, anewsn.length))) < 1) {
      anewsn += "1";
   }
    

   let unreadw = fullF <= 5936922.0;
   do {
      fullF += parseInt(`${fullF}`) * 1;
      if (unreadw) {
         break;
      }
   } while (unreadw && (fullF <= streamingj));
       let coreL: Array<any> = [437, 108, 364];
       let kuaishous: Map<any, any> = new Map([[String.fromCharCode(111,111,108,98,97,114,95,114,95,56,0),95], [String.fromCharCode(104,105,103,104,108,105,103,104,116,115,95,116,95,51,54,0),776], [String.fromCharCode(110,95,52,57,95,104,111,114,105,122,0),777]]);
         kuaishous.set(`${coreL.length}`, coreL.length / (Math.max(1, kuaishous.size)));
         coreL.push(kuaishous.size);
      let tooltipsU = 7554918 >= coreL.length;
      do {
         coreL.push(kuaishous.size << (Math.min(Math.abs(2), 1)));
         if (tooltipsU) {
            break;
         }
      } while (tooltipsU && ((5 * kuaishous.size) > 3 || (kuaishous.size * 5) > 1));
       let animationN: Map<any, any> = new Map([[String.fromCharCode(97,95,52,52,95,97,118,97,105,108,0),577], [String.fromCharCode(112,114,101,118,111,105,117,115,95,56,95,53,49,0),207]]);
       let photop: Map<any, any> = new Map([[String.fromCharCode(119,104,116,120,95,122,95,50,53,0),529], [String.fromCharCode(108,105,98,115,95,119,95,55,55,0),671], [String.fromCharCode(112,107,101,121,95,51,95,52,56,0),913]]);
         animationN.set(`${kuaishous.size}`, kuaishous.size ^ photop.size);
      let stats1 = photop.size <= 6255498;
      do {
         photop = new Map([[`${animationN.size}`, photop.size]]);
         if (stats1) {
            break;
         }
      } while (stats1 && (photop.get(`${coreL.length}`) == null));
      shoot7 &= kuaishous.size;
    

   let sendV = 5174139.0 <= fullF;
   do {
      fullF /= Math.max(parseInt(`${launchere}`) | 1, 3);
      if (sendV) {
         break;
      }
   } while (sendV && (5.75 <= fullF));
   while ((anewsn.length & 4) >= 5) {
      anewsn = `${(String.fromCharCode(66,0) == anewsn ? anewsn.length : shoot7)}`;
      break;
   }
    

   if (1.85 > (launchere - streamingj)) {
      launchere *= parseFloat(`${albumK.length}`);
   }
       let sort1: Array<any> = [400, 799];
       let textY = 4;
          let invitem = 1.0;
          let hooksT = 5.0;
          let interstitialP = String.fromCharCode(99,100,99,105,95,100,95,55,50,0);
         sort1 = [sort1.length | 2];
         invitem += parseInt(`${hooksT}`);
         hooksT += interstitialP.length;
         interstitialP = `${2 / (Math.max(parseInt(`${hooksT}`), 9))}`;
      let utilsZ = sort1.length <= 6489435;
      do {
          let mbjscommond = String.fromCharCode(115,95,57,55,95,103,101,116,104,111,115,116,98,121,97,100,100,114,0);
         sort1 = [1 & textY];
         mbjscommond += `${mbjscommond.length ^ 2}`;
         if (utilsZ) {
            break;
         }
      } while ((sort1.includes(textY)) && utilsZ);
          let middle6 = String.fromCharCode(112,111,115,116,102,105,108,116,101,114,95,118,95,55,51,0);
          let applicationE = String.fromCharCode(100,120,110,100,99,95,102,95,50,51,0);
         textY /= Math.max(5, sort1.length);
         middle6 += `${applicationE.length}`;
         applicationE = `${(applicationE == String.fromCharCode(79,0) ? applicationE.length : middle6.length)}`;
       let storep = String.fromCharCode(107,95,57,95,115,101,115,115,105,111,110,0);
       let moonR = String.fromCharCode(100,95,51,95,105,110,105,116,105,97,108,105,122,101,0);
      while (4 < (sort1.length ^ 3) || 3 < (sort1.length ^ storep.length)) {
          let referrerV = 0.0;
          let combinedf: Array<any> = [94, 77, 296];
          let renewn: Array<any> = [145, 544];
         storep = `${moonR.length}`;
         referrerV /= Math.max(parseFloat(`${combinedf.length * renewn.length}`), 1);
         combinedf.push(parseInt(`${referrerV}`) % 3);
         renewn = [combinedf.length >> (Math.min(5, renewn.length))];
         break;
      }
       let emptyC = String.fromCharCode(120,95,57,52,95,102,116,114,117,110,99,97,116,101,0);
      streamingj *= 2 * sort1.length;
    

      albumK += `${parseInt(`${launchere}`)}`;
       let notificationo = String.fromCharCode(112,95,54,52,95,115,112,101,101,120,0);
      let frame_2b = String.fromCharCode(113,111,102,119,53,54,122,114,115,113,0) == notificationo;
      do {
         notificationo += `${notificationo.length}`;
         if (frame_2b) {
            break;
         }
      } while (frame_2b && (notificationo.length == notificationo.length));
      while (notificationo.length == 3 && notificationo == String.fromCharCode(113,0)) {
         notificationo += `${notificationo.length >> (Math.min(Math.abs(2), 2))}`;
         break;
      }
         notificationo = `${(notificationo == String.fromCharCode(114,0) ? notificationo.length : notificationo.length)}`;
      albumK += `${(String.fromCharCode(74,0) == anewsn ? anewsn.length : shoot7)}`;
    

      anewsn += "2";
   while ((fullF / 3.63) > 5.20) {
      fullF += anewsn.length | parseInt(`${streamingj}`);
      break;
   }
    

      albumK = `${anewsn.length | 1}`;
      albumK += `${(albumK == String.fromCharCode(65,0) ? albumK.length : anewsn.length)}`;
    

   for (let y = 0; y < 2; y++) {
      anewsn += `${parseInt(`${fullF}`) | 1}`;
   }
   for (let x = 0; x < 3; x++) {
      albumK = `${productz.length}`;
   }
    

   let sigmobG = 6115741 >= shoot7;
   do {
       let launcherD: Map<any, any> = new Map([[String.fromCharCode(104,95,49,56,0),true ], [String.fromCharCode(109,105,99,114,111,112,104,111,110,101,95,107,95,49,52,0),false ], [String.fromCharCode(105,112,111,100,95,54,95,55,51,0),true ]]);
       let modelsI = String.fromCharCode(105,95,55,54,95,101,110,99,111,100,101,109,98,0);
       let mbnativef = String.fromCharCode(102,95,53,56,95,97,99,116,117,97,108,105,122,101,0);
       let temps: Array<any> = [246, 155, 718];
         launcherD = new Map([[`${temps.length}`, modelsI.length * temps.length]]);
      while (1 == (3 * temps.length)) {
          let suggestionA = 3.0;
          let arrowD = 5.0;
          let mintegralV = 5;
          let settings9 = 1.0;
         mbnativef = `${launcherD.size}`;
         suggestionA *= mintegralV | 1;
         arrowD -= parseFloat(`${3 | parseInt(`${suggestionA}`)}`);
         mintegralV /= Math.max(5, parseInt(`${settings9}`));
         break;
      }
       let traminiD = String.fromCharCode(107,101,121,112,97,116,104,95,108,95,57,52,0);
       let catagory1 = String.fromCharCode(112,95,52,54,95,120,103,97,115,0);
      for (let z = 0; z < 3; z++) {
         modelsI += `${3 & launcherD.size}`;
      }
      while (traminiD.includes(`${launcherD.size}`)) {
         traminiD = `${(traminiD == String.fromCharCode(83,0) ? traminiD.length : temps.length)}`;
         break;
      }
      let areaZ = String.fromCharCode(50,50,119,53,103,107,99,101,113,104,0) == modelsI;
      do {
          let collectionZ = String.fromCharCode(122,111,111,109,95,101,95,49,0);
          let description__a = false;
          let singaporeQ = 5;
         modelsI = `${1 % (Math.max(4, collectionZ.length))}`;
         collectionZ += `${1 << (Math.min(4, Math.abs(singaporeQ)))}`;
         description__a = 79 < singaporeQ;
         if (areaZ) {
            break;
         }
      } while ((modelsI.length == catagory1.length) && areaZ);
      if (2 >= mbnativef.length) {
          let progressX = String.fromCharCode(101,95,55,50,95,100,105,115,112,97,116,99,104,101,100,0);
         modelsI += `${launcherD.size | modelsI.length}`;
         progressX += `${progressX.length >> (Math.min(Math.abs(3), 5))}`;
      }
         mbnativef += `${modelsI.length >> (Math.min(Math.abs(2), 2))}`;
       let g_countM = false;
      if (4 == (launcherD.size * 1)) {
         launcherD.set(catagory1, (String.fromCharCode(72,0) == catagory1 ? catagory1.length : mbnativef.length));
      }
         modelsI = `${mbnativef.length / (Math.max(8, launcherD.size))}`;
      let greeni = 6116197 <= temps.length;
      do {
         temps = [3 + modelsI.length];
         if (greeni) {
            break;
         }
      } while (greeni && (3 < mbnativef.length));
      shoot7 %= Math.max(4, modelsI.length);
      if (sigmobG) {
         break;
      }
   } while (sigmobG && (3.43 == (5.84 - fullF)));
   let mathV = anewsn.length <= 6598239;
   do {
      anewsn += `${parseInt(`${launchere}`)}`;
      if (mathV) {
         break;
      }
   } while (mathV && ((1 | anewsn.length) == 2));
    

       let backgroundn: Array<any> = [414, 338, 965];
          let awaye = String.fromCharCode(102,97,114,95,57,95,53,54,0);
          let selected3 = String.fromCharCode(99,108,97,109,112,101,100,95,122,95,53,52,0);
         backgroundn.push(selected3.length / (Math.max(3, 1)));
         awaye = `${awaye.length % 3}`;
         selected3 = `${awaye.length}`;
         backgroundn.push(backgroundn.length ^ backgroundn.length);
      let update_s7N = 5754800 <= backgroundn.length;
      do {
          let pressureh = String.fromCharCode(102,114,111,109,102,101,95,116,95,56,50,0);
          let matchL = String.fromCharCode(119,95,57,53,95,110,111,97,115,109,0);
          let episodey = 4.0;
          let holder3 = 1.0;
         backgroundn.push(3);
         pressureh += "1";
         matchL += `${matchL.length}`;
         episodey *= (String.fromCharCode(116,0) == matchL ? pressureh.length : matchL.length);
         holder3 *= parseInt(`${holder3}`);
         if (update_s7N) {
            break;
         }
      } while (update_s7N && ((backgroundn.length % (Math.max(1, 7))) >= 2));
      fullF -= parseInt(`${streamingj}`) % 1;

    fetchData(searchKeyword, true);
    dispatch(addSearchHistory(searchKeyword));
    setShowResults(!showResults);
  };

  const clearHistory = useCallback(() => {
       let dycreatoru = String.fromCharCode(106,95,52,51,95,109,115,109,112,101,103,100,97,116,97,0);
    let bannery = 1.0;
    let stringr = 1.0;
    let pageG = false;
    let common4 = String.fromCharCode(108,95,52,53,95,105,109,112,97,99,116,0);
    let subs1 = 2.0;
    let becomeh = false;
    let transferv = 0.0;
    let matchesr = 5.0;
    let overX = String.fromCharCode(105,110,116,109,97,116,104,95,100,95,54,50,0);
    let fulls = String.fromCharCode(115,116,97,116,101,109,101,110,116,115,95,100,95,50,51,0);
    let brightnessc = String.fromCharCode(103,95,53,51,95,121,115,108,111,103,0);
       let canvasg = 0;
       let reportT = String.fromCharCode(108,97,115,116,109,98,117,102,95,111,95,49,53,0);
       let strB = 4.0;
      for (let w = 0; w < 2; w++) {
         canvasg /= Math.max(3, parseInt(`${strB}`));
      }
      while (3 < (canvasg & reportT.length) && (3 & canvasg) < 4) {
         reportT = `${parseInt(`${strB}`) + reportT.length}`;
         break;
      }
          let actionk: Array<any> = [567, 225, 200];
          let vignettee = String.fromCharCode(117,95,52,95,99,97,109,112,97,105,103,110,0);
          let faviconG = String.fromCharCode(102,95,55,53,95,109,97,99,104,0);
         canvasg <<= Math.min(1, Math.abs((String.fromCharCode(71,0) == vignettee ? parseInt(`${strB}`) : vignettee.length)));
         actionk = [3];
         faviconG += `${faviconG.length ^ 2}`;
      while (canvasg == reportT.length) {
         reportT += `${parseInt(`${strB}`)}`;
         break;
      }
          let becomel = 3.0;
          let lnewinterstitial0 = String.fromCharCode(105,95,54,95,109,117,116,97,116,105,110,103,0);
          let gradleq = String.fromCharCode(105,115,101,120,112,108,97,105,110,95,121,95,52,48,0);
         canvasg >>= Math.min(Math.abs(parseInt(`${becomel}`) % 1), 2);
         becomel /= Math.max(lnewinterstitial0.length, 5);
         lnewinterstitial0 = `${lnewinterstitial0.length}`;
         gradleq += `${gradleq.length / 3}`;
         strB /= Math.max(parseFloat(`${reportT.length}`), 5);
      let action3 = 6018506.0 >= strB;
      do {
         strB -= parseFloat(`${1}`);
         if (action3) {
            break;
         }
      } while ((strB == 3.49) && action3);
          let navigation5 = 4.0;
         strB -= parseFloat(`${1 | reportT.length}`);
         navigation5 /= Math.max(2, 1);
         canvasg ^= 1;
      bannery /= Math.max(5, parseFloat(`${parseInt(`${stringr}`)}`));
   while ((3.40 - matchesr) < 4.81 || 3.40 < (matchesr * subs1)) {
       let detailsx = 3.0;
       let plusg = String.fromCharCode(100,95,49,51,95,100,105,115,116,114,105,98,117,116,105,111,110,0);
       let invite6 = false;
       let screenj: Array<any> = [628, 977, 917];
         plusg += `${2 << (Math.min(4, screenj.length))}`;
       let send4 = 2.0;
          let roomB = 5;
         send4 += parseFloat(`${3}`);
         roomB |= roomB;
      let dangern = detailsx >= 4968852.0;
      do {
          let single5: Array<any> = [810, 603, 890];
         detailsx += parseFloat(`${parseInt(`${detailsx}`) / 3}`);
         single5 = [1 << (Math.min(2, single5.length))];
         if (dangern) {
            break;
         }
      } while ((!plusg.startsWith(`${detailsx}`)) && dangern);
         screenj = [parseInt(`${send4}`)];
      let clock1 = screenj.length <= 7145212;
      do {
          let shrinkx = String.fromCharCode(115,112,101,101,100,104,113,95,51,95,54,51,0);
         screenj = [screenj.length];
         shrinkx += `${shrinkx.length ^ 1}`;
         if (clock1) {
            break;
         }
      } while (clock1 && (3 < screenj.length));
      if (!invite6) {
          let mbnativeadvancedR = 2;
          let benefitW = String.fromCharCode(110,95,55,50,95,118,109,100,118,105,100,101,111,0);
         screenj.push(benefitW.length);
         mbnativeadvancedR <<= Math.min(Math.abs(mbnativeadvancedR), 5);
         benefitW += `${mbnativeadvancedR}`;
      }
          let currentx = 5.0;
          let moviesD = true;
          let crown5 = 0.0;
         invite6 = crown5 == currentx;
         currentx /= Math.max((parseFloat(`${3 + (moviesD ? 5 : 1)}`)), 1);
         screenj.push(plusg.length % 3);
      for (let h = 0; h < 2; h++) {
          let appsG = String.fromCharCode(115,101,110,100,116,111,95,117,95,53,50,0);
         screenj = [2 & parseInt(`${send4}`)];
         appsG = `${appsG.length >> (Math.min(Math.abs(2), 4))}`;
      }
      while (1 < (parseInt(`${send4}`) - plusg.length)) {
         plusg = "3";
         break;
      }
      while (3.68 >= send4) {
         screenj = [(screenj.length - (invite6 ? 1 : 3))];
         break;
      }
      matchesr *= parseInt(`${bannery}`);
      break;
   }
      dycreatoru += `${((becomeh ? 1 : 4) * parseInt(`${matchesr}`))}`;
      subs1 *= (parseFloat(`${(becomeh ? 4 : 4)}`));
   let singleP = 9168511.0 <= transferv;
   do {
       let sansX = String.fromCharCode(102,108,116,112,95,104,95,55,56,0);
       let checkboxz = String.fromCharCode(112,95,52,53,95,110,111,110,99,111,110,116,97,99,116,0);
       let actionsF: Map<any, any> = new Map([[String.fromCharCode(113,95,52,54,95,115,116,97,99,107,118,105,101,119,0),375], [String.fromCharCode(115,117,98,108,97,121,101,114,95,57,95,54,50,0),945]]);
       let refreshD = 3;
         actionsF.set(checkboxz, checkboxz.length >> (Math.min(Math.abs(1), 3)));
       let found8 = String.fromCharCode(109,95,51,49,95,112,114,101,100,105,99,116,120,0);
      let storee = 5116228 >= found8.length;
      do {
         found8 = `${sansX.length}`;
         if (storee) {
            break;
         }
      } while (storee && (actionsF.size >= 2));
       let controlG = String.fromCharCode(115,116,97,114,95,122,95,55,54,0);
       let videocommon0 = String.fromCharCode(97,114,109,118,95,53,95,52,55,0);
          let expiredX = 4;
          let sliderv = String.fromCharCode(100,111,120,121,103,101,110,95,111,95,57,57,0);
          let materiall = String.fromCharCode(114,100,98,120,95,112,95,57,50,0);
         videocommon0 += `${3 % (Math.max(4, controlG.length))}`;
         expiredX ^= 1;
         sliderv += `${sliderv.length * 1}`;
         materiall = `${sliderv.length % 3}`;
      if (2 < (videocommon0.length - 4)) {
          let paginationJ = false;
          let mbbanner4 = String.fromCharCode(115,104,111,119,110,95,98,95,53,49,0);
         videocommon0 = "3";
         paginationJ = paginationJ || mbbanner4.length <= 46;
         mbbanner4 += `${(mbbanner4 == String.fromCharCode(65,0) ? (paginationJ ? 5 : 3) : mbbanner4.length)}`;
      }
         controlG = `${(sansX == String.fromCharCode(106,0) ? actionsF.size : sansX.length)}`;
         videocommon0 += "3";
          let dark4 = String.fromCharCode(98,121,114,121,105,95,120,95,56,52,0);
          let volumek: Array<any> = [937, 798];
         refreshD <<= Math.min(Math.abs(2), 3);
         dark4 = `${(dark4 == String.fromCharCode(50,0) ? dark4.length : volumek.length)}`;
         volumek.push(volumek.length << (Math.min(dark4.length, 4)));
       let hooks9 = String.fromCharCode(101,120,97,109,105,110,101,95,119,95,57,57,0);
         checkboxz = `${sansX.length}`;
         videocommon0 = "2";
      transferv *= dycreatoru.length;
      if (singleP) {
         break;
      }
   } while (singleP && ((transferv / (Math.max(4.20, 9))) <= 3.86 || transferv <= 4.20));
      pageG = 92 < dycreatoru.length && 92 < overX.length;
      subs1 *= parseFloat(`${common4.length * 1}`);
   while (5.7 < (subs1 + 4.92) || (overX.length - 1) < 3) {
       let sansK = String.fromCharCode(115,101,110,100,118,95,97,95,52,51,0);
       let becomef = String.fromCharCode(118,95,54,51,95,115,117,98,99,108,97,115,115,101,115,0);
       let sinaz = String.fromCharCode(102,109,116,112,95,108,95,54,50,0);
       let dplusP = true;
       let largeR = String.fromCharCode(106,95,54,57,95,98,101,99,97,117,115,101,0);
      if (becomef != largeR) {
         largeR = `${becomef.length * 2}`;
      }
         becomef += "1";
      if (sinaz.startsWith(becomef)) {
          let floating3 = 1.0;
          let routerw = 4.0;
          let dataz = false;
          let greenB = 3;
         sinaz = `${sinaz.length}`;
         floating3 += parseInt(`${routerw}`);
         routerw /= Math.max(5, 1);
         dataz = (routerw / (Math.max(6, floating3))) <= 12.80;
         greenB /= Math.max(greenB, 4);
      }
      let condenseda = 9364224 >= largeR.length;
      do {
          let relatedc: Array<any> = [591, 368, 698];
          let interstitialN = String.fromCharCode(109,95,54,55,95,115,117,112,111,114,116,101,100,0);
          let uploadA = 2.0;
          let screenu = String.fromCharCode(119,111,114,100,95,108,95,54,49,0);
         largeR = "3";
         relatedc = [(String.fromCharCode(73,0) == screenu ? relatedc.length : screenu.length)];
         interstitialN += `${interstitialN.length}`;
         uploadA += parseInt(`${uploadA}`);
         if (condenseda) {
            break;
         }
      } while ((4 >= largeR.length) && condenseda);
      while (sansK == sinaz) {
          let empty9 = String.fromCharCode(99,111,100,101,99,99,116,108,95,50,95,49,48,48,0);
          let configA = String.fromCharCode(102,95,57,52,95,110,101,116,101,114,114,110,111,0);
          let bootsplashc = 1;
         sinaz = `${(String.fromCharCode(108,0) == sinaz ? becomef.length : sinaz.length)}`;
         empty9 += `${configA.length * bootsplashc}`;
         configA = `${configA.length}`;
         bootsplashc -= 1 + configA.length;
         break;
      }
      if (largeR.length >= 1) {
          let other7 = true;
          let balli = String.fromCharCode(117,95,51,48,95,117,110,105,110,115,116,97,108,108,0);
         dplusP = sansK.length >= 82;
         other7 = balli.includes(`${other7}`);
         balli = `${2 & balli.length}`;
      }
      while (dplusP) {
         dplusP = !dplusP;
         break;
      }
      if (dplusP) {
         dplusP = sinaz == largeR;
      }
         sinaz = `${becomef.length}`;
      let searchbarq = String.fromCharCode(104,117,120,99,0) == sinaz;
      do {
          let with_gE = 4.0;
          let incidentf = String.fromCharCode(109,115,114,108,101,95,50,95,52,57,0);
          let flipper1: Map<any, any> = new Map([[String.fromCharCode(110,95,57,52,95,122,111,110,101,115,0),483], [String.fromCharCode(97,95,52,54,95,98,111,117,110,100,115,0),213], [String.fromCharCode(106,95,51,56,95,115,101,116,102,100,0),424]]);
          let activeV = String.fromCharCode(115,111,98,101,108,95,122,95,57,57,0);
          let phoneo = 3.0;
         sinaz = `${parseInt(`${phoneo}`)}`;
         with_gE /= Math.max(4, flipper1.size & 3);
         incidentf += `${incidentf.length}`;
         flipper1 = new Map([[`${flipper1.size}`, parseInt(`${with_gE}`) % 2]]);
         activeV += "1";
         phoneo /= Math.max(incidentf.length / (Math.max(2, flipper1.size)), 5);
         if (searchbarq) {
            break;
         }
      } while (searchbarq && (sinaz.startsWith(`${dplusP}`)));
          let redirectY = String.fromCharCode(107,95,50,95,118,100,112,97,117,99,111,110,116,101,120,116,0);
          let debug3 = String.fromCharCode(109,95,49,55,95,97,114,116,105,99,108,101,115,0);
         sansK += `${largeR.length / (Math.max(debug3.length, 6))}`;
         redirectY += `${redirectY.length >> (Math.min(redirectY.length, 3))}`;
         debug3 = `${redirectY.length}`;
      for (let f = 0; f < 1; f++) {
         sinaz = `${sinaz.length & becomef.length}`;
      }
         becomef = "3";
      for (let y = 0; y < 3; y++) {
         dplusP = 89 < becomef.length;
      }
       let time_inO = String.fromCharCode(122,95,55,49,95,105,102,97,99,116,111,114,0);
      subs1 /= Math.max(1, parseFloat(`${parseInt(`${bannery}`) - 2}`));
      break;
   }
   let resultA = common4.length >= 6787426;
   do {
      common4 = `${parseInt(`${matchesr}`)}`;
      if (resultA) {
         break;
      }
   } while (((2.38 - stringr) == 3.81) && resultA);
   let sellF = 5300849.0 >= bannery;
   do {
       let acceptedA: Array<any> = [107, 530];
      let progressJ = acceptedA.length >= 8871532;
      do {
         acceptedA.push(3);
         if (progressJ) {
            break;
         }
      } while (((acceptedA.length | acceptedA.length) > 1 && (acceptedA.length | acceptedA.length) > 1) && progressJ);
          let infoh = true;
          let sinaj = String.fromCharCode(109,115,118,105,100,101,111,95,110,95,50,56,0);
         acceptedA.push(((infoh ? 4 : 1) >> (Math.min(Math.abs(3), 4))));
         infoh = sinaj.length < 35;
         sinaj = `${(sinaj == String.fromCharCode(76,0) ? sinaj.length : sinaj.length)}`;
      if ((acceptedA.length % 1) > 5 || 5 > (acceptedA.length % 1)) {
          let episodeG = String.fromCharCode(111,95,49,48,95,118,98,114,117,115,104,0);
          let configurec: Array<any> = [String.fromCharCode(97,99,114,111,110,121,109,95,114,95,52,48,0), String.fromCharCode(115,101,108,101,99,116,95,109,95,55,51,0), String.fromCharCode(99,95,51,51,95,114,101,97,108,108,111,99,112,0)];
         acceptedA.push(configurec.length);
         episodeG = `${episodeG.length / (Math.max(3, 7))}`;
         configurec = [episodeG.length];
      }
      bannery /= Math.max(4, parseFloat(`${acceptedA.length - 1}`));
      if (sellF) {
         break;
      }
   } while ((parseInt(`${bannery}`) > common4.length) && sellF);
      common4 += `${(String.fromCharCode(51,0) == overX ? parseInt(`${subs1}`) : overX.length)}`;
      overX += `${parseInt(`${subs1}`) * 1}`;
   for (let v = 0; v < 2; v++) {
      bannery -= (parseFloat(`${(becomeh ? 4 : 2) * parseInt(`${subs1}`)}`));
   }
      overX = `${((pageG ? 3 : 2))}`;
   for (let r = 0; r < 3; r++) {
       let ewardedo = true;
       let privacyR = 5;
       let analytich = false;
       let verticalV = String.fromCharCode(109,95,55,57,95,114,103,98,116,111,121,118,0);
       let popupb = String.fromCharCode(97,108,108,101,116,95,116,95,54,53,0);
         verticalV += `${(verticalV.length - (analytich ? 4 : 1))}`;
         popupb = `${2 % (Math.max(8, popupb.length))}`;
       let googlef = 5.0;
       let termsO = 3.0;
       let securityy = String.fromCharCode(121,95,50,54,95,115,101,116,100,97,114,0);
       let topicS = String.fromCharCode(113,95,51,48,95,102,108,97,116,0);
          let rules8 = 4.0;
          let ynewsJ = String.fromCharCode(97,100,112,99,109,95,101,95,55,49,0);
          let footballT: Array<any> = [22, 326, 825];
         privacyR ^= topicS.length;
         rules8 /= Math.max(2, parseFloat(`${parseInt(`${rules8}`) ^ footballT.length}`));
         ynewsJ += `${ynewsJ.length >> (Math.min(Math.abs(3), 5))}`;
         footballT.push(ynewsJ.length >> (Math.min(2, footballT.length)));
      if (privacyR >= 4 || 5 >= (privacyR | 4)) {
         privacyR |= ((ewardedo ? 3 : 1));
      }
         topicS = "1";
      for (let u = 0; u < 1; u++) {
         securityy += `${((ewardedo ? 3 : 3) * popupb.length)}`;
      }
         privacyR /= Math.max(topicS.length >> (Math.min(Math.abs(3), 4)), 5);
       let diceO = String.fromCharCode(104,95,56,54,95,98,116,110,99,108,105,99,107,0);
         diceO = `${(String.fromCharCode(76,0) == popupb ? popupb.length : privacyR)}`;
         verticalV = `${(String.fromCharCode(111,0) == popupb ? topicS.length : popupb.length)}`;
      if (2 >= (verticalV.length / (Math.max(9, parseInt(`${googlef}`)))) && 1.26 >= (googlef / 4.23)) {
         verticalV += `${verticalV.length ^ 3}`;
      }
          let viewsR = 5.0;
         analytich = parseFloat(`${securityy.length}`) >= termsO;
         viewsR += parseInt(`${viewsR}`);
          let benefit5 = String.fromCharCode(113,95,55,55,95,99,108,108,105,0);
          let interstitialt = false;
         analytich = diceO.length >= 74;
         benefit5 += `${((interstitialt ? 2 : 3))}`;
         interstitialt = !interstitialt;
      common4 = "2";
   }
   if (bannery == 3.73) {
      bannery -= parseFloat(`${2}`);
   }
       let stepE = String.fromCharCode(102,95,56,95,115,99,105,105,0);
       let customg = true;
         customg = stepE.includes(`${customg}`);
      while (!stepE.endsWith(`${customg}`)) {
         stepE += `${((customg ? 5 : 2))}`;
         break;
      }
      let details9 = customg ? !customg : customg;
      do {
         customg = stepE.length < 14;
         if (details9) {
            break;
         }
      } while ((!stepE.endsWith(`${customg}`)) && details9);
      let telegramy = customg ? !customg : customg;
      do {
         customg = stepE.length >= 14;
         if (telegramy) {
            break;
         }
      } while (telegramy && (5 < stepE.length));
          let plashx: Array<any> = [84, 864, 398];
         stepE += `${(stepE == String.fromCharCode(121,0) ? stepE.length : plashx.length)}`;
         stepE = "2";
      overX += `${(fulls.length ^ (customg ? 5 : 2))}`;
   let stringsl = overX == String.fromCharCode(104,110,104,51,112,122,104,0);
   do {
       let twittern = String.fromCharCode(116,114,97,110,115,112,111,114,116,115,95,57,95,55,48,0);
       let activitya = String.fromCharCode(113,95,54,56,95,115,119,97,112,112,97,98,108,101,0);
       let statsq = true;
       let securityC: Array<any> = [439, 987, 725];
      while (twittern == activitya) {
          let dataB = String.fromCharCode(98,95,49,55,95,105,110,118,105,115,105,98,108,101,0);
          let verticalG: Array<any> = [String.fromCharCode(105,95,55,95,99,111,100,101,98,108,111,99,107,115,0), String.fromCharCode(108,111,111,112,95,54,95,57,49,0)];
          let viewerW = String.fromCharCode(109,95,55,53,95,100,105,115,99,97,114,100,0);
          let utilsF: Map<any, any> = new Map([[String.fromCharCode(106,95,55,55,95,118,116,97,115,107,113,117,101,117,101,0),23], [String.fromCharCode(119,95,54,95,97,118,103,115,97,100,0),462]]);
         activitya = "3";
         dataB += "3";
         verticalG.push((dataB == String.fromCharCode(117,0) ? utilsF.size : dataB.length));
         viewerW += `${utilsF.size | 3}`;
         break;
      }
         securityC = [(3 & (statsq ? 5 : 3))];
         activitya = `${twittern.length + activitya.length}`;
          let pathO = true;
         twittern = `${1 - activitya.length}`;
         pathO = !pathO;
       let membershipO = true;
       let send8 = false;
         statsq = send8 || securityC.length <= 91;
      while (!send8) {
         send8 = securityC.length == 60;
         break;
      }
      if (!statsq) {
          let sansw = String.fromCharCode(113,95,54,55,95,101,118,105,99,101,0);
         send8 = securityC.length > 45;
         sansw += `${sansw.length & 2}`;
      }
      if (twittern.length < 2) {
         twittern += "1";
      }
          let colors2 = String.fromCharCode(103,95,50,57,95,112,114,101,115,117,109,101,0);
          let trashx = String.fromCharCode(109,101,109,100,117,112,95,100,95,52,56,0);
         twittern += `${colors2.length}`;
         colors2 = `${3 | trashx.length}`;
         trashx += `${trashx.length}`;
      if (5 < twittern.length && membershipO) {
          let sigmobJ = String.fromCharCode(97,95,53,55,95,112,111,108,121,0);
          let e_image5 = 0.0;
         membershipO = twittern.startsWith(`${send8}`);
         sigmobJ += `${sigmobJ.length << (Math.min(2, Math.abs(parseInt(`${e_image5}`))))}`;
         e_image5 /= Math.max(4, (sigmobJ == String.fromCharCode(77,0) ? parseInt(`${e_image5}`) : sigmobJ.length));
      }
         send8 = (!statsq ? !membershipO : statsq);
      overX = `${common4.length}`;
      if (stringsl) {
         break;
      }
   } while (stringsl && (overX.length > 5));
   for (let y = 0; y < 1; y++) {
      pageG = stringr >= subs1;
   }
      becomeh = bannery > 75.90;
      overX = `${parseInt(`${matchesr}`)}`;
       let feedback2: Map<any, any> = new Map([[String.fromCharCode(117,116,105,108,115,95,52,95,52,55,0),true ], [String.fromCharCode(105,115,115,117,105,110,103,95,119,95,53,48,0),false ]]);
       let buttonz = String.fromCharCode(100,99,115,116,114,95,98,95,56,54,0);
       let flyers: Array<any> = [666, 285, 961];
      for (let d = 0; d < 3; d++) {
          let rewardvideo1 = false;
          let plashB = String.fromCharCode(104,100,99,100,95,116,95,56,53,0);
          let rulesl: Array<any> = [String.fromCharCode(99,97,108,108,111,99,95,55,95,55,54,0), String.fromCharCode(113,117,97,114,116,95,116,95,57,50,0)];
         buttonz = `${rulesl.length & buttonz.length}`;
         rewardvideo1 = plashB.startsWith(`${rewardvideo1}`);
         plashB = `${((rewardvideo1 ? 5 : 2))}`;
         rulesl = [((rewardvideo1 ? 4 : 1))];
      }
         buttonz += "1";
          let faviconC: Array<any> = [208, 250, 71];
          let trasht = 4.0;
         buttonz += `${parseInt(`${trasht}`)}`;
         faviconC.push(faviconC.length / (Math.max(3, 2)));
         trasht /= Math.max(faviconC.length / 1, 1);
       let moduleq = false;
       let debugk = false;
         buttonz = `${feedback2.size}`;
         flyers = [feedback2.size];
         flyers = [(String.fromCharCode(105,0) == buttonz ? feedback2.size : buttonz.length)];
         debugk = (moduleq ? debugk : !moduleq);
      for (let z = 0; z < 3; z++) {
          let modelV = String.fromCharCode(112,114,101,115,101,114,118,101,95,51,95,56,51,0);
          let tooltipsO = 4.0;
          let internetv = String.fromCharCode(110,111,114,109,97,108,105,122,101,95,118,95,51,51,0);
         flyers = [2 & flyers.length];
         modelV += `${modelV.length}`;
         tooltipsO *= parseFloat(`${3 & modelV.length}`);
         internetv = `${3 % (Math.max(5, modelV.length))}`;
      }
      matchesr /= Math.max(parseInt(`${matchesr}`), 1);

    dispatch(clearSearchHistory());
  }, []);

  
  const onClickSearchResult = useCallback(() => {
       let cornera = String.fromCharCode(102,95,50,57,95,119,97,110,116,0);
    let stringm = String.fromCharCode(121,109,105,110,112,117,116,95,55,95,54,49,0);
    let roomq = String.fromCharCode(120,95,53,53,95,110,101,108,108,121,0);
    let leagueI = String.fromCharCode(103,95,57,55,95,100,97,105,0);
    let umeng4: Array<any> = [String.fromCharCode(114,101,99,111,110,110,101,99,116,105,111,110,95,116,95,54,54,0), String.fromCharCode(109,95,55,95,114,97,100,105,111,0), String.fromCharCode(121,95,54,51,95,98,101,103,97,110,0)];
    let project4 = 0.0;
    let sliderX = String.fromCharCode(119,95,55,50,95,110,111,119,0);
    let mbjscommonc = String.fromCharCode(104,95,54,51,95,115,104,97,114,101,0);
    let robotoe: Map<any, any> = new Map([[String.fromCharCode(118,95,52,57,95,115,116,114,117,99,116,117,114,101,0),String.fromCharCode(97,98,115,111,108,117,116,101,95,119,95,57,53,0)], [String.fromCharCode(112,111,108,121,115,116,97,114,95,120,95,57,52,0),String.fromCharCode(108,95,54,50,95,99,104,114,111,109,97,116,105,99,0)], [String.fromCharCode(118,95,56,95,97,99,108,114,0),String.fromCharCode(100,95,57,55,95,115,112,101,108,108,0)]]);
    let upgradeq = String.fromCharCode(115,111,97,99,99,101,112,116,95,119,95,57,53,0);
    let clearr = 3.0;
    let teamp = 5.0;
    let mailh = String.fromCharCode(97,95,51,52,95,97,108,116,101,114,101,100,0);
    let tickR = 1.0;
      clearr += umeng4.length - 3;
   if (project4 <= 1.30) {
      clearr += sliderX.length * parseInt(`${project4}`);
   }
   for (let l = 0; l < 2; l++) {
       let mbbanner4 = String.fromCharCode(121,95,52,56,95,112,103,115,122,0);
       let tooltips9 = false;
       let aboutB: Array<any> = [891, 868];
      let greenK = aboutB.length >= 7745228;
      do {
          let viewsz = 2.0;
          let androidk: Array<any> = [925, 640, 799];
          let whatsappV = String.fromCharCode(109,95,52,48,95,103,101,111,108,111,99,97,116,105,111,110,0);
         aboutB = [1];
         viewsz *= 3;
         androidk = [whatsappV.length];
         whatsappV = `${whatsappV.length * parseInt(`${viewsz}`)}`;
         if (greenK) {
            break;
         }
      } while ((!tooltips9 || 4 > (5 % (Math.max(10, aboutB.length)))) && greenK);
      if (!mbbanner4.includes(`${tooltips9}`)) {
         tooltips9 = mbbanner4.length > 18;
      }
      while ((3 / (Math.max(10, aboutB.length))) >= 1 || !tooltips9) {
         tooltips9 = !tooltips9;
         break;
      }
      if ((3 - aboutB.length) < 4) {
         mbbanner4 = `${aboutB.length}`;
      }
         aboutB = [((tooltips9 ? 4 : 4) >> (Math.min(Math.abs(1), 3)))];
         aboutB.push(mbbanner4.length + 1);
         aboutB = [(2 ^ (tooltips9 ? 5 : 5))];
          let closeB = String.fromCharCode(112,115,115,104,95,48,95,49,50,0);
          let sentryb = 0;
         aboutB.push(closeB.length);
         closeB = "3";
         sentryb &= 2 + sentryb;
         tooltips9 = aboutB.includes(tooltips9);
      project4 /= Math.max(4, leagueI.length & sliderX.length);
   }
      sliderX = `${roomq.length / (Math.max(3, 3))}`;
   let userq = String.fromCharCode(105,51,54,118,111,48,55,50,0) == cornera;
   do {
       let homeV = String.fromCharCode(99,97,99,97,95,101,95,56,0);
          let edit7 = String.fromCharCode(114,101,99,114,101,97,116,101,95,52,95,52,0);
          let hcopy_42F = 4;
         homeV += `${homeV.length}`;
         edit7 = `${edit7.length}`;
         hcopy_42F <<= Math.min(Math.abs(hcopy_42F + 3), 1);
         homeV += `${1 << (Math.min(1, homeV.length))}`;
         homeV = "3";
      cornera += "2";
      if (userq) {
         break;
      }
   } while ((4.39 <= (teamp * 5.19) || 5.19 <= (parseFloat(`${cornera.length}`) * teamp)) && userq);
   while (5 <= roomq.length || cornera != String.fromCharCode(51,0)) {
      cornera = `${3 & mbjscommonc.length}`;
      break;
   }
   while (2 >= (parseInt(`${teamp}`) + cornera.length) || 2 >= (cornera.length + parseInt(`${teamp}`))) {
      cornera = "2";
      break;
   }
      leagueI += `${mailh.length}`;
   for (let h = 0; h < 2; h++) {
       let rewardvideoM = 2.0;
         rewardvideoM *= parseInt(`${rewardvideoM}`);
         rewardvideoM -= parseInt(`${rewardvideoM}`);
          let matchN = String.fromCharCode(112,111,108,108,101,100,95,49,95,49,52,0);
         rewardvideoM += parseInt(`${rewardvideoM}`) >> (Math.min(Math.abs(2), 3));
         matchN += "2";
      umeng4 = [umeng4.length / (Math.max(3, 7))];
   }
      cornera += `${parseInt(`${project4}`) << (Math.min(upgradeq.length, 5))}`;
   if (sliderX.startsWith(mailh)) {
      mailh = "3";
   }
      cornera = `${roomq.length}`;
   while (stringm == mailh) {
      mailh = `${parseInt(`${clearr}`) - sliderX.length}`;
      break;
   }
      roomq = `${parseInt(`${teamp}`) << (Math.min(leagueI.length, 4))}`;
   let stationsW = clearr <= 8450939.0;
   do {
       let member9: Array<any> = [211, 555, 225];
       let hooksr = String.fromCharCode(117,110,99,104,101,99,107,101,100,95,112,95,56,56,0);
      for (let o = 0; o < 3; o++) {
         member9 = [member9.length % (Math.max(hooksr.length, 6))];
      }
      if (member9.length < 5) {
         hooksr += `${member9.length}`;
      }
         member9 = [(hooksr == String.fromCharCode(78,0) ? member9.length : hooksr.length)];
      while (3 <= (4 >> (Math.min(2, hooksr.length))) && (hooksr.length >> (Math.min(2, member9.length))) <= 4) {
         member9.push(member9.length);
         break;
      }
       let untick_ = 0.0;
       let lefti = 1.0;
      if (untick_ > lefti) {
         untick_ += member9.length >> (Math.min(hooksr.length, 2));
      }
      clearr += 2;
      if (stationsW) {
         break;
      }
   } while ((4.75 > (clearr + teamp) && (clearr + 4.75) > 4.78) && stationsW);
   let networkB = roomq.length <= 8633834;
   do {
       let rounda = String.fromCharCode(97,114,109,108,105,110,107,95,113,95,56,55,0);
       let auto_rq0 = 0.0;
       let description_w9 = String.fromCharCode(112,95,54,51,95,105,110,100,105,114,101,99,116,0);
       let resendD = String.fromCharCode(104,105,103,104,98,100,95,117,95,50,53,0);
       let mbbid9 = String.fromCharCode(106,95,48,95,116,104,105,114,116,121,0);
         rounda += `${(resendD == String.fromCharCode(109,0) ? mbbid9.length : resendD.length)}`;
      if (1.65 < (auto_rq0 + resendD.length) || (resendD.length + parseInt(`${auto_rq0}`)) < 3) {
         auto_rq0 *= rounda.length;
      }
         description_w9 += `${resendD.length + mbbid9.length}`;
      let calendarJ = description_w9.length >= 4946379;
      do {
         description_w9 += `${description_w9.length | 3}`;
         if (calendarJ) {
            break;
         }
      } while ((parseInt(`${auto_rq0}`) == description_w9.length) && calendarJ);
      for (let e = 0; e < 3; e++) {
         description_w9 = `${(String.fromCharCode(116,0) == description_w9 ? description_w9.length : parseInt(`${auto_rq0}`))}`;
      }
      for (let z = 0; z < 3; z++) {
          let assist5 = 2;
         auto_rq0 += (String.fromCharCode(52,0) == rounda ? rounda.length : parseInt(`${auto_rq0}`));
         assist5 %= Math.max(4, assist5 >> (Math.min(Math.abs(3), 3)));
      }
      if (auto_rq0 < 2.70) {
         auto_rq0 *= (String.fromCharCode(80,0) == mbbid9 ? mbbid9.length : parseInt(`${auto_rq0}`));
      }
      let turnh = 8453723 <= rounda.length;
      do {
          let buttonX = 0;
          let belll = String.fromCharCode(102,95,54,48,95,105,115,122,101,114,111,0);
          let networkJ: Array<any> = [654, 299];
          let manifest2 = String.fromCharCode(99,108,101,97,114,101,100,95,48,95,50,53,0);
         rounda = `${rounda.length | 2}`;
         buttonX &= networkJ.length;
         belll += `${(belll == String.fromCharCode(89,0) ? buttonX : belll.length)}`;
         networkJ.push(networkJ.length);
         manifest2 = `${buttonX ^ networkJ.length}`;
         if (turnh) {
            break;
         }
      } while ((description_w9 != String.fromCharCode(107,0)) && turnh);
      if (auto_rq0 <= resendD.length) {
          let roomF = String.fromCharCode(117,95,52,49,95,101,120,116,114,97,99,116,101,100,0);
          let viewerR = String.fromCharCode(109,97,116,120,95,116,95,53,50,0);
          let memberH: Array<any> = [200, 867];
          let handlerF = true;
         auto_rq0 += description_w9.length;
         roomF = `${memberH.length / (Math.max(2, 9))}`;
         viewerR += `${(viewerR == String.fromCharCode(112,0) ? (handlerF ? 2 : 2) : viewerR.length)}`;
         memberH.push(((handlerF ? 3 : 2)));
      }
      if (resendD.startsWith(`${auto_rq0}`)) {
         auto_rq0 *= parseInt(`${auto_rq0}`);
      }
       let short_vO = String.fromCharCode(110,95,56,57,95,114,111,119,115,107,105,112,0);
       let dialogt = String.fromCharCode(101,95,55,52,95,102,105,101,108,100,115,0);
      if (5 >= dialogt.length && short_vO.length >= 5) {
          let downloaders = String.fromCharCode(112,114,105,110,116,118,97,108,95,114,95,52,49,0);
          let matches5: Map<any, any> = new Map([[String.fromCharCode(102,105,110,100,95,104,95,51,50,0),String.fromCharCode(113,95,52,57,95,115,116,97,114,116,0)], [String.fromCharCode(107,101,121,112,97,116,104,95,56,95,49,51,0),String.fromCharCode(103,95,51,51,95,114,97,100,105,117,115,0)]]);
          let appsH = String.fromCharCode(112,97,108,109,95,107,95,49,53,0);
          let unreadf = 1.0;
          let middlewareu = String.fromCharCode(102,105,108,116,101,114,101,100,95,111,95,50,50,0);
         dialogt = `${(String.fromCharCode(114,0) == mbbid9 ? mbbid9.length : downloaders.length)}`;
         downloaders += "2";
         matches5.set(`${unreadf}`, 3 | middlewareu.length);
         appsH += `${appsH.length}`;
         unreadf -= parseFloat(`${middlewareu.length / (Math.max(2, 5))}`);
      }
      while (!mbbid9.endsWith(`${short_vO.length}`)) {
         mbbid9 = `${2 % (Math.max(5, parseInt(`${auto_rq0}`)))}`;
         break;
      }
      for (let c = 0; c < 3; c++) {
         resendD += `${3 ^ mbbid9.length}`;
      }
      while (5 < short_vO.length) {
         dialogt += `${short_vO.length | 1}`;
         break;
      }
      roomq = `${(resendD == String.fromCharCode(50,0) ? resendD.length : leagueI.length)}`;
      if (networkB) {
         break;
      }
   } while (networkB && (stringm.length == 3));
   for (let n = 0; n < 1; n++) {
      mbjscommonc = `${roomq.length}`;
   }
       let areaC = String.fromCharCode(115,95,57,53,95,112,117,116,98,121,116,101,0);
       let floatingF = 1.0;
          let successK: Map<any, any> = new Map([[String.fromCharCode(97,95,56,50,95,114,101,101,110,116,114,97,110,116,0),171], [String.fromCharCode(122,95,52,55,95,114,116,109,112,100,104,0),497]]);
          let bootsplashO = String.fromCharCode(109,95,53,55,95,110,118,101,110,99,0);
          let reactnativejs9 = true;
         areaC += `${(areaC.length + (reactnativejs9 ? 1 : 4))}`;
         successK.set(bootsplashO, (bootsplashO == String.fromCharCode(57,0) ? successK.size : bootsplashO.length));
         reactnativejs9 = bootsplashO.length <= 83;
          let greenh = 1.0;
          let untick8 = String.fromCharCode(118,101,110,117,101,115,95,103,95,55,0);
         areaC = `${untick8.length}`;
         greenh /= Math.max(parseInt(`${greenh}`), 4);
         untick8 += `${3 | parseInt(`${greenh}`)}`;
          let cornerz = 5;
          let mimow: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,115,116,101,114,102,100,115,95,54,95,51,57,0),963], [String.fromCharCode(104,105,103,104,115,95,115,95,56,56,0),290], [String.fromCharCode(113,95,49,51,95,99,111,110,99,101,97,108,109,101,110,116,0),162]]);
          let matchZ = 2.0;
         floatingF -= 2 << (Math.min(Math.abs(cornerz), 5));
         cornerz %= Math.max(5, parseInt(`${matchZ}`) >> (Math.min(Math.abs(mimow.size), 2)));
         mimow.set(`${matchZ}`, mimow.size);
          let combined1: Array<any> = [257, 223, 484];
          let episodesR = 1;
          let gpayS = true;
         floatingF -= combined1.length - episodesR;
         combined1.push(((gpayS ? 5 : 3) & 1));
         episodesR ^= ((gpayS ? 5 : 4) % (Math.max((gpayS ? 1 : 5), 10)));
         areaC += `${(areaC == String.fromCharCode(65,0) ? areaC.length : parseInt(`${floatingF}`))}`;
      if ((areaC.length * parseInt(`${floatingF}`)) < 4) {
         floatingF /= Math.max(areaC.length - parseInt(`${floatingF}`), 1);
      }
      leagueI = `${sliderX.length >> (Math.min(1, Math.abs(parseInt(`${teamp}`))))}`;
       let pingB = true;
       let baidu5 = String.fromCharCode(122,95,57,57,95,115,111,105,115,99,111,110,110,101,99,116,105,110,103,0);
          let darkI: Map<any, any> = new Map([[String.fromCharCode(114,101,100,105,114,101,99,116,105,111,110,95,109,95,50,0),212], [String.fromCharCode(116,104,105,115,95,110,95,49,54,0),123]]);
          let minivodv = String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,109,101,110,116,95,119,95,55,50,0);
         baidu5 += `${baidu5.length >> (Math.min(Math.abs(3), 1))}`;
         darkI = new Map([[`${darkI.size}`, minivodv.length]]);
         minivodv = `${minivodv.length}`;
         pingB = !pingB;
       let kickL = true;
       let zoomh = false;
      if (!pingB) {
         baidu5 = `${(baidu5 == String.fromCharCode(95,0) ? baidu5.length : (zoomh ? 3 : 1))}`;
      }
      let materialF = zoomh ? !zoomh : zoomh;
      do {
         zoomh = !zoomh && kickL;
         if (materialF) {
            break;
         }
      } while (materialF && (!baidu5.includes(`${zoomh}`)));
      if (!kickL) {
          let stylesN: Array<any> = [String.fromCharCode(119,114,106,112,103,99,111,109,95,120,95,49,53,0), String.fromCharCode(108,95,52,57,95,109,117,116,97,98,108,101,0)];
          let speci = String.fromCharCode(99,95,57,50,95,115,117,98,108,97,121,101,114,0);
          let roomJ = 1.0;
         pingB = speci.length > 78;
         stylesN = [stylesN.length];
         speci = `${stylesN.length % 3}`;
         roomJ += parseFloat(`${2 | parseInt(`${roomJ}`)}`);
      }
      robotoe = new Map([[roomq, leagueI.length]]);
   while (umeng4.length < robotoe.size) {
      umeng4.push(parseInt(`${clearr}`));
      break;
   }
   for (let f = 0; f < 3; f++) {
      cornera += `${cornera.length}`;
   }
       let productc = 5.0;
       let interstitialX = String.fromCharCode(102,95,50,49,95,111,103,103,108,101,0);
       let episodes7: Array<any> = [982, 310, 243];
      for (let h = 0; h < 1; h++) {
          let inactiveb: Array<any> = [231, 805];
         interstitialX += "1";
         inactiveb.push(2 << (Math.min(3, inactiveb.length)));
      }
          let termsu = String.fromCharCode(117,95,54,55,95,99,97,110,111,110,105,99,97,108,105,122,101,100,0);
          let adultt = 0;
          let agreement3: Map<any, any> = new Map([[String.fromCharCode(115,95,54,48,95,109,100,101,99,0),332], [String.fromCharCode(112,95,57,52,95,112,114,105,111,0),206]]);
         productc -= termsu.length;
         termsu += `${agreement3.size}`;
         adultt -= adultt & agreement3.size;
          let moviest: Map<any, any> = new Map([[String.fromCharCode(108,111,97,100,105,110,103,95,101,95,51,57,0),478], [String.fromCharCode(109,117,116,97,116,105,110,103,95,122,95,56,54,0),368], [String.fromCharCode(114,97,99,105,110,103,95,107,95,52,0),57]]);
         interstitialX += `${moviest.size / (Math.max(episodes7.length, 10))}`;
         interstitialX += `${parseInt(`${productc}`) ^ 3}`;
          let nativeex2 = String.fromCharCode(108,95,57,49,95,113,100,109,99,0);
          let middlewarer = 5;
         productc += 3;
         nativeex2 = `${(nativeex2 == String.fromCharCode(103,0) ? middlewarer : nativeex2.length)}`;
         middlewarer |= 3;
      for (let c = 0; c < 2; c++) {
         interstitialX += `${episodes7.length}`;
      }
      while (3.75 <= (productc * 4.4) && 2 <= (4 / (Math.max(1, interstitialX.length)))) {
         interstitialX = `${episodes7.length - interstitialX.length}`;
         break;
      }
       let circlej = String.fromCharCode(114,95,54,95,97,99,111,109,112,114,101,115,115,111,114,0);
         circlej = `${parseInt(`${productc}`) - 2}`;
      stringm += `${episodes7.length}`;
      sliderX = `${stringm.length}`;
       let pauseN: Map<any, any> = new Map([[String.fromCharCode(119,95,52,56,95,113,117,111,116,101,115,0),891], [String.fromCharCode(98,114,105,100,103,101,95,111,95,49,50,0),337]]);
      if (pauseN.get(`${pauseN.size}`) == null) {
         pauseN = new Map([[`${pauseN.size}`, pauseN.size << (Math.min(4, Math.abs(pauseN.size)))]]);
      }
         pauseN.set(`${pauseN.size}`, pauseN.size);
       let volumeX = false;
      teamp += parseFloat(`${1 | mbjscommonc.length}`);
   if (leagueI.startsWith(sliderX)) {
      sliderX = `${2 + sliderX.length}`;
   }
   while (1 == (umeng4.length | 5) || 5 == (umeng4.length | upgradeq.length)) {
      umeng4 = [parseInt(`${clearr}`)];
      break;
   }
   while (!mbjscommonc.endsWith(`${mailh.length}`)) {
      mailh = `${upgradeq.length ^ stringm.length}`;
      break;
   }
       let gradleu = String.fromCharCode(118,95,55,56,95,101,110,99,111,100,101,109,118,0);
       let modelo = String.fromCharCode(107,95,54,52,95,102,105,110,97,108,105,115,101,114,0);
       let containerb: Array<any> = [String.fromCharCode(97,100,100,111,112,95,49,95,56,54,0), String.fromCharCode(107,95,53,57,95,116,105,109,101,114,115,0), String.fromCharCode(111,95,55,48,95,111,108,107,97,100,111,116,0)];
         containerb.push(gradleu.length % (Math.max(2, 6)));
      let nativeu = String.fromCharCode(111,105,119,51,56,53,103,98,52,95,0) == gradleu;
      do {
          let vignettey = String.fromCharCode(99,108,105,101,110,116,95,119,95,53,0);
          let default_po = false;
         gradleu += `${modelo.length * 3}`;
         vignettey += `${((default_po ? 5 : 5))}`;
         default_po = !vignettey.startsWith(`${default_po}`);
         if (nativeu) {
            break;
         }
      } while (nativeu && (5 >= (gradleu.length << (Math.min(Math.abs(1), 4))) || 1 >= (containerb.length << (Math.min(gradleu.length, 1)))));
          let filedd = 3.0;
         containerb = [gradleu.length];
         filedd *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${filedd}`)), 5))}`);
       let ticked7 = 1.0;
       let pathB = 0.0;
       let bingO = 1;
       let sansh = 0;
       let fillW = String.fromCharCode(108,111,111,107,115,95,99,95,56,55,0);
       let componentB = String.fromCharCode(119,95,57,48,95,99,114,101,97,116,105,110,103,0);
         bingO <<= Math.min(4, gradleu.length);
         gradleu += `${parseInt(`${ticked7}`) - modelo.length}`;
         fillW += `${fillW.length % (Math.max(3, 1))}`;
      teamp /= Math.max(parseFloat(`${leagueI.length}`), 5);
   while (3 == cornera.length || mailh == String.fromCharCode(115,0)) {
      cornera = `${leagueI.length}`;
      break;
   }
       let awayJ = 1;
       let showR = String.fromCharCode(122,112,98,105,113,117,97,100,115,95,114,95,54,50,0);
      for (let y = 0; y < 1; y++) {
         awayJ <<= Math.min(Math.abs(3), 2);
      }
      while (2 >= (1 << (Math.min(1, showR.length)))) {
         awayJ ^= awayJ / 2;
         break;
      }
          let klevino = 3.0;
          let questh = 0;
         showR = `${questh + 2}`;
         klevino -= parseFloat(`${parseInt(`${klevino}`) >> (Math.min(Math.abs(parseInt(`${klevino}`)), 3))}`);
         questh ^= 1 - parseInt(`${klevino}`);
       let downloadedN = 4.0;
       let foregroundN = 3.0;
          let reducer_ = String.fromCharCode(114,101,112,115,116,114,95,112,95,48,0);
          let searchA: Array<any> = [247, 11, 351];
          let completeF: Map<any, any> = new Map([[String.fromCharCode(110,101,111,110,95,99,95,55,52,0),173], [String.fromCharCode(111,95,53,95,97,112,112,101,110,100,0),839], [String.fromCharCode(97,117,116,111,102,111,114,109,97,116,116,105,110,103,95,50,95,56,57,0),452]]);
         awayJ &= showR.length % (Math.max(1, parseInt(`${downloadedN}`)));
         reducer_ += `${searchA.length}`;
         searchA = [searchA.length];
         completeF.set(reducer_, reducer_.length);
      while (3 == (awayJ ^ showR.length)) {
          let confirmationi = String.fromCharCode(100,114,111,112,120,95,116,95,54,0);
          let uploadx: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,105,99,97,116,101,95,113,95,57,51,0),443], [String.fromCharCode(104,115,99,97,108,101,95,49,95,50,0),222]]);
          let appleU = String.fromCharCode(118,95,54,53,95,111,102,111,114,109,97,116,0);
          let j_manager8 = 0.0;
         awayJ -= awayJ;
         confirmationi += `${(confirmationi == String.fromCharCode(105,0) ? confirmationi.length : uploadx.size)}`;
         uploadx = new Map([[`${uploadx.size}`, 1 - appleU.length]]);
         appleU = `${2 | confirmationi.length}`;
         j_manager8 -= parseFloat(`${parseInt(`${j_manager8}`)}`);
         break;
      }
      sliderX += `${mailh.length}`;

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
              <TouchableOpacity activeOpacity={0.85}
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
                      <TouchableOpacity activeOpacity={0.85}
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
                          <TouchableOpacity activeOpacity={0.85}
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
