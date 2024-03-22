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
import OrderedSearchResultsList from "../../components/search/i_calendar_adult";
import SearchResultList from "../../components/search/gyn_renew_show";
import ScreenContainer from "../../components/container/ypy_fast";
import BackButton from "../../components/button/exb_member_source_button";
import SearchIcon from "@static/images/hejiPhoto.svg";
import ClearIcon from "@static/images/plashBootsplash.svg";
import { useQuery } from "@tanstack/react-query";

import { AWXGoogle } from "@type/wpk_long";
import { RootStackScreenProps } from "@type/vrm_thailand";
import { API_DOMAIN } from "@utility/n_subs_interstitial";
import VodWithDescriptionList from "../../components/vod/of_main_sheet";
import { useAppDispatch, useAppSelector } from "@hooks/kg_index";
import { PSmall } from "@redux/fj_prediction_thailand";
import FastImage from "../../components/common/gwi_with";
import {
  addSearchHistory,
  clearSearchHistory,
} from "@redux/actions/tnm_trophy";
import Animated, {
  FadeInUp,
  FadeOutUp,
  useAnimatedStyle,
} from "react-native-reanimated";
import ClearHistoryIcon from "@static/images/countShow.svg";
import EmptyList from "../../components/common/jip_next_bell";
import appsFlyer from "react-native-appsflyer";
import ConfirmationModal from "../../components/modal/nw_topic";
import { RCanvas } from "@api";
import umb_center_carousel from "../../../Umeng/umb_center_carousel";

export default ({ navigation, route }: RootStackScreenProps<"搜索">) => {
  const [search, setSearch] = useState("");
  const [placeholderSearch, setPlaceHolderSearch] = useState(
    route.params.initial
  );

  const [searchTimer, setSearchTimer] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [searchResults, setSearchResults] = useState<Array<AWXGoogle>>(
    []
  );
  const [showResults, setShowResults] = useState(false);
  const [searchLimit, setSearchLimit] = useState(0)

  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(
    ({ searchHistoryReducer }: PSmall) => searchHistoryReducer
  );
  const [isFetching, setisFetching] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { colors, textVariants, spacing, icons } = useTheme();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { data: recommendations } = useQuery({
    queryKey: ["recommendationList"],
    queryFn: () => RCanvas.getListByRecommendations(),
  });

  async function fetchData(text: string, userSearch: boolean = false) {
    setisFetching(true);

    
    if (userSearch && text.length > 0) umb_center_carousel.searchKeywordAnalytics(text);
    

    RCanvas.getListByKeyword(text)
      .then((data) => {
        setSearchTimer(0);

        if (data.length <= 0) {
          setSearchResults([]);
        } else {
          setSearchResults(data);

          
          if (userSearch) umb_center_carousel.searchResultViewsAnalytics();
          
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
    RCanvas.getListByKeyword(text, {
      page: nextPage,
    }).then((data) => {
      setSearchTimer(0);

      if (data.length <= 0) {
        setHasMore(false); 
      } else {
        
        setSearchResults([...searchResults, ...json.data.List]);
        setPage(nextPage);
        
        if (userSearch) umb_center_carousel.searchResultViewsAnalytics();
        
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
       let renewx = 3.0;
    let watchV = String.fromCharCode(101,95,51,49,95,104,100,108,114,0);
    let tumbnail8 = 1.0;
    let statst: Array<any> = [266, 976];
    let rewindy = String.fromCharCode(114,95,56,57,95,98,101,110,99,104,0);
    let commonJ = String.fromCharCode(105,97,100,115,116,120,95,114,95,56,55,0);
    let typingR = String.fromCharCode(112,114,111,102,105,108,105,110,103,95,115,95,52,51,0);
    let viewsQ = String.fromCharCode(119,105,110,100,111,119,101,100,95,98,95,50,57,0);
    let tooltips5 = 3.0;
    let nalyticsC = String.fromCharCode(109,111,110,105,116,111,114,95,113,95,56,49,0);
    let gesturest = true;
      statst.push(typingR.length);
   let borderlessC = 5141366 <= commonJ.length;
   do {
       let time__a: Array<any> = [525, 243, 589];
       let alertk = String.fromCharCode(119,95,55,48,95,112,97,114,116,105,116,105,111,110,0);
         alertk = `${2 - alertk.length}`;
      while (alertk.includes(`${time__a.length}`)) {
         time__a.push((String.fromCharCode(112,0) == alertk ? alertk.length : time__a.length));
         break;
      }
       let anythinkk = 5.0;
       let megaphonep = 1.0;
      while (4.48 < (megaphonep - 4)) {
         anythinkk *= parseFloat(`${parseInt(`${anythinkk}`) | alertk.length}`);
         break;
      }
      while ((megaphonep + 2.34) <= 5.33) {
         megaphonep /= Math.max(parseFloat(`${parseInt(`${anythinkk}`)}`), 4);
         break;
      }
         megaphonep -= (parseFloat(`${String.fromCharCode(79,0) == alertk ? alertk.length : time__a.length}`));
      commonJ += `${statst.length * rewindy.length}`;
      if (borderlessC) {
         break;
      }
   } while (borderlessC && (3 >= (commonJ.length >> (Math.min(Math.abs(3), 2)))));
   let photob = 5952977.0 >= tumbnail8;
   do {
       let routerB: Array<any> = [655, 41, 574];
       let modelsj: Array<any> = [761, 959, 675];
          let uploadN = String.fromCharCode(116,111,107,101,104,95,57,95,51,51,0);
         routerB = [uploadN.length];
          let p_unlockE = String.fromCharCode(99,114,111,115,115,104,97,105,114,115,95,104,95,53,53,0);
         routerB.push(1);
         p_unlockE += `${p_unlockE.length}`;
       let heartH = String.fromCharCode(108,95,53,55,95,105,99,109,112,0);
      for (let l = 0; l < 2; l++) {
          let heartF = 4;
          let themeR: Map<any, any> = new Map([[String.fromCharCode(114,103,98,120,95,107,95,57,50,0),true ], [String.fromCharCode(97,100,100,114,101,115,115,101,115,95,112,95,52,57,0),true ]]);
         routerB = [2 ^ modelsj.length];
         heartF %= Math.max(1, heartF);
         themeR.set(`${heartF}`, heartF);
      }
       let clearF = 2.0;
      for (let u = 0; u < 3; u++) {
          let signinupM = 3.0;
         modelsj.push((String.fromCharCode(113,0) == heartH ? modelsj.length : heartH.length));
         signinupM -= parseInt(`${signinupM}`) | parseInt(`${signinupM}`);
      }
      tumbnail8 /= Math.max(5, typingR.length / 1);
      if (photob) {
         break;
      }
   } while (photob && ((4.70 / (Math.max(5, tooltips5))) >= 4.85 && 2.13 >= (4.70 - tumbnail8)));
   let pointt = tooltips5 <= 8747560.0;
   do {
      tooltips5 *= parseFloat(`${2}`);
      if (pointt) {
         break;
      }
   } while (pointt && (4.32 <= tooltips5));
   while (3.19 >= tumbnail8) {
      tumbnail8 += (String.fromCharCode(118,0) == viewsQ ? parseInt(`${renewx}`) : viewsQ.length);
      break;
   }
   let stepu = String.fromCharCode(116,119,115,122,0) == watchV;
   do {
       let filli = 5;
       let grayz = 0.0;
       let screeny: Array<any> = [String.fromCharCode(108,111,110,103,110,111,105,115,101,95,115,95,52,50,0), String.fromCharCode(101,95,54,56,95,109,97,120,113,0)];
       let carouselC: Map<any, any> = new Map([[String.fromCharCode(109,98,116,114,101,101,95,100,95,56,54,0),String.fromCharCode(99,95,50,48,95,109,97,114,107,117,112,0)], [String.fromCharCode(108,105,98,112,111,115,116,112,114,111,99,95,117,95,56,56,0),String.fromCharCode(101,107,121,95,105,95,50,56,0)], [String.fromCharCode(114,101,109,97,116,114,105,120,105,110,103,95,118,95,56,52,0),String.fromCharCode(107,95,51,95,116,108,111,103,0)]]);
       let dropdownR = String.fromCharCode(117,95,49,52,95,98,108,117,101,0);
          let modal5 = String.fromCharCode(116,95,49,48,95,118,109,97,102,109,111,116,105,111,110,0);
          let penalty5 = 1.0;
          let twitterv: Map<any, any> = new Map([[String.fromCharCode(109,97,116,114,111,115,107,97,95,101,95,49,56,0),false ], [String.fromCharCode(103,95,54,95,115,110,110,105,100,0),false ]]);
         grayz -= modal5.length + twitterv.size;
         modal5 += `${1 << (Math.min(Math.abs(parseInt(`${penalty5}`)), 4))}`;
         penalty5 += parseFloat(`${parseInt(`${penalty5}`)}`);
         carouselC = new Map([[`${carouselC.size}`, dropdownR.length >> (Math.min(Math.abs(1), 4))]]);
      while (2 > dropdownR.length) {
          let previewx = 2;
          let temp6 = true;
          let internetW = false;
         filli &= (parseInt(`${grayz}`) << (Math.min(2, Math.abs((temp6 ? 2 : 4)))));
         previewx >>= Math.min(Math.abs(1 << (Math.min(Math.abs(previewx), 2))), 1);
         temp6 = 12 > previewx;
         internetW = 93 == previewx && internetW;
         break;
      }
          let modelP: Map<any, any> = new Map([[String.fromCharCode(99,95,57,51,95,105,102,102,116,0),false ], [String.fromCharCode(99,101,110,116,114,97,108,105,116,121,95,118,95,55,49,0),true ]]);
          let sendu = 2.0;
         filli >>= Math.min(Math.abs(1 - carouselC.size), 2);
         modelP.set(`${sendu}`, 3 | modelP.size);
         sendu -= parseFloat(`${modelP.size}`);
       let scoreF = String.fromCharCode(108,105,98,115,119,105,102,116,111,115,95,101,95,55,56,0);
      let yellowe = 9178373.0 >= grayz;
      do {
         grayz /= Math.max(1 | parseInt(`${grayz}`), 2);
         if (yellowe) {
            break;
         }
      } while ((grayz > 1.15) && yellowe);
      if (5.89 > (filli + grayz)) {
          let topicZ: Array<any> = [910, 461, 119];
          let pingd = String.fromCharCode(105,110,115,116,97,108,108,101,100,95,108,95,56,48,0);
         grayz -= (String.fromCharCode(88,0) == pingd ? screeny.length : pingd.length);
         topicZ.push(topicZ.length);
      }
         grayz /= Math.max(2, parseInt(`${grayz}`));
         filli %= Math.max(2, 1);
      for (let g = 0; g < 2; g++) {
          let nalytics4 = true;
          let loadingu = String.fromCharCode(113,95,54,54,95,118,97,108,117,101,100,0);
          let overlayp = 4.0;
          let playN = 1;
         grayz *= parseInt(`${grayz}`);
         nalytics4 = playN <= parseInt(`${overlayp}`);
         loadingu = `${parseInt(`${overlayp}`) >> (Math.min(2, Math.abs(playN)))}`;
      }
      for (let k = 0; k < 3; k++) {
         screeny = [3];
      }
       let ewardedv: Map<any, any> = new Map([[String.fromCharCode(106,95,56,57,95,116,121,112,101,100,101,102,0),300], [String.fromCharCode(98,95,54,53,95,102,100,101,99,0),300], [String.fromCharCode(121,95,56,56,95,97,103,101,0),748]]);
       let progressd: Map<any, any> = new Map([[String.fromCharCode(99,111,111,108,100,111,119,110,115,95,101,95,57,53,0),true ], [String.fromCharCode(114,101,102,105,110,105,110,103,95,98,95,52,54,0),false ]]);
       let index0 = String.fromCharCode(110,101,116,119,111,114,107,95,56,95,49,55,0);
          let interstitial9 = String.fromCharCode(116,95,57,53,95,119,109,118,100,97,116,97,0);
          let main_ur = false;
         scoreF += `${((main_ur ? 3 : 4) >> (Math.min(Math.abs(parseInt(`${grayz}`)), 5)))}`;
         interstitial9 += `${(interstitial9 == String.fromCharCode(113,0) ? interstitial9.length : interstitial9.length)}`;
         main_ur = (interstitial9.length - interstitial9.length) <= 19;
         dropdownR = `${filli % 3}`;
      watchV = `${(watchV == String.fromCharCode(117,0) ? watchV.length : parseInt(`${grayz}`))}`;
      if (stepu) {
         break;
      }
   } while ((1 <= typingR.length) && stepu);
       let eighteenZ = 3.0;
      for (let f = 0; f < 2; f++) {
         eighteenZ *= 3 + parseInt(`${eighteenZ}`);
      }
      if ((eighteenZ - eighteenZ) > 1.22 || 5.97 > (1.22 - eighteenZ)) {
         eighteenZ /= Math.max(2, parseInt(`${eighteenZ}`));
      }
         eighteenZ -= parseInt(`${eighteenZ}`) % 1;
      typingR = `${watchV.length}`;
   if (commonJ.startsWith(`${rewindy.length}`)) {
      commonJ += "1";
   }
   if (viewsQ.startsWith(`${renewx}`)) {
      viewsQ += `${commonJ.length / 3}`;
   }
   while (watchV == commonJ) {
      commonJ += `${(nalyticsC == String.fromCharCode(49,0) ? nalyticsC.length : commonJ.length)}`;
      break;
   }
   if (!watchV.includes(rewindy)) {
       let controlz = String.fromCharCode(115,95,56,55,95,102,105,108,116,101,114,105,110,103,0);
       let twitterM = String.fromCharCode(99,95,53,56,95,99,111,109,109,101,110,116,0);
      while (twitterM.length >= 3) {
         controlz = `${twitterM.length & controlz.length}`;
         break;
      }
      if (3 <= twitterM.length) {
         twitterM += `${controlz.length & 1}`;
      }
         twitterM = `${controlz.length & 2}`;
          let suggestionh = 0;
         twitterM = `${(controlz == String.fromCharCode(73,0) ? twitterM.length : controlz.length)}`;
         suggestionh *= suggestionh - suggestionh;
      for (let n = 0; n < 3; n++) {
         controlz += `${twitterM.length / (Math.max(controlz.length, 6))}`;
      }
      for (let n = 0; n < 1; n++) {
         controlz += `${twitterM.length + controlz.length}`;
      }
      rewindy = `${typingR.length % 3}`;
   }
   for (let s = 0; s < 1; s++) {
      viewsQ += `${(String.fromCharCode(73,0) == viewsQ ? viewsQ.length : statst.length)}`;
   }
      gesturest = 26.81 <= tumbnail8;
      nalyticsC = `${parseInt(`${renewx}`)}`;
   if (4.41 >= (4.60 - renewx)) {
      rewindy = `${typingR.length}`;
   }
       let brightnessX = 3;
      if (4 >= brightnessX) {
         brightnessX += 1 >> (Math.min(5, Math.abs(brightnessX)));
      }
         brightnessX ^= brightnessX >> (Math.min(Math.abs(1), 4));
      for (let i = 0; i < 3; i++) {
         brightnessX *= brightnessX | 2;
      }
      commonJ += `${(String.fromCharCode(48,0) == typingR ? commonJ.length : typingR.length)}`;
   while (rewindy.length <= 3) {
      typingR = `${viewsQ.length >> (Math.min(Math.abs(3), 4))}`;
      break;
   }
      nalyticsC = `${2 & parseInt(`${tooltips5}`)}`;
   let entryJ = gesturest ? !gesturest : gesturest;
   do {
      gesturest = typingR.length == 16 && rewindy.length == 16;
      if (entryJ) {
         break;
      }
   } while ((!typingR.includes(`${gesturest}`)) && entryJ);
   while (!watchV.includes(`${gesturest}`)) {
       let save7: Array<any> = [925, 381, 941];
       let singlet = false;
       let taiwanh: Array<any> = [670, 420];
      if (singlet) {
         singlet = taiwanh.length > 79 || singlet;
      }
         singlet = (taiwanh.length + save7.length) == 38;
         taiwanh.push(2);
          let matchh = String.fromCharCode(115,117,98,112,97,121,108,111,97,100,95,48,95,51,49,0);
         singlet = 45 > taiwanh.length;
         matchh = `${matchh.length - matchh.length}`;
         singlet = (((!singlet ? taiwanh.length : 69) & taiwanh.length) >= 69);
      let shareb = singlet ? !singlet : singlet;
      do {
         singlet = save7.length >= 59;
         if (shareb) {
            break;
         }
      } while ((taiwanh.length < 3) && shareb);
          let ticke: Array<any> = [451, 251];
          let dragJ = String.fromCharCode(115,117,112,101,114,95,55,95,48,0);
         taiwanh.push(taiwanh.length);
         ticke.push(dragJ.length * ticke.length);
         dragJ += `${ticke.length + 1}`;
         singlet = save7.length == taiwanh.length;
      while ((3 >> (Math.min(2, save7.length))) >= 4) {
          let views5 = 2.0;
          let sportse = false;
          let lefty = 1.0;
         save7.push(1 | taiwanh.length);
         views5 -= parseInt(`${lefty}`);
         sportse = lefty < 41.92;
         break;
      }
      gesturest = (39 < (watchV.length >> (Math.min(1, Math.abs((!gesturest ? 39 : watchV.length))))));
      break;
   }
   if (!nalyticsC.startsWith(commonJ)) {
      nalyticsC = `${rewindy.length}`;
   }
      statst = [viewsQ.length | 2];
   if (4 >= (statst.length * watchV.length) && (4 * statst.length) >= 4) {
       let xvodo = false;
       let unticka: Map<any, any> = new Map([[String.fromCharCode(122,95,57,53,95,108,110,110,105,100,0),214], [String.fromCharCode(103,95,56,48,95,114,101,109,111,116,101,0),352], [String.fromCharCode(115,95,57,48,95,108,105,98,114,97,114,121,0),574]]);
       let uploadX = 2.0;
       let friendsb = String.fromCharCode(110,100,101,120,95,97,95,52,51,0);
      let optionsr = friendsb.length >= 8991058;
      do {
          let gestureP: Map<any, any> = new Map([[String.fromCharCode(112,117,108,115,101,115,95,48,95,54,49,0),587], [String.fromCharCode(115,95,55,56,95,119,105,110,100,111,119,101,100,0),719]]);
         friendsb += `${2 * gestureP.size}`;
         if (optionsr) {
            break;
         }
      } while ((5.46 <= (friendsb.length * uploadX) || 5.31 <= (uploadX * 5.46)) && optionsr);
          let privilege1 = 5.0;
          let viewerF: Map<any, any> = new Map([[String.fromCharCode(99,109,115,103,115,95,109,95,49,48,0),String.fromCharCode(102,95,50,56,95,118,99,100,115,112,0)], [String.fromCharCode(106,95,54,52,95,97,118,112,114,105,118,0),String.fromCharCode(115,99,97,110,115,116,97,116,117,115,95,106,95,52,48,0)], [String.fromCharCode(100,95,52,51,95,98,97,115,105,99,115,0),String.fromCharCode(103,114,111,101,115,116,108,95,110,95,53,48,0)]]);
         xvodo = !xvodo || unticka.size == 61;
         privilege1 += parseFloat(`${3 + parseInt(`${privilege1}`)}`);
         viewerF = new Map([[`${viewerF.size}`, 1 / (Math.max(9, viewerF.size))]]);
         uploadX += friendsb.length;
      let shareC = 7900350 <= unticka.size;
      do {
         unticka.set(friendsb, (friendsb == String.fromCharCode(83,0) ? friendsb.length : parseInt(`${uploadX}`)));
         if (shareC) {
            break;
         }
      } while (shareC && (!Array.from(unticka.values()).includes(uploadX)));
      while ((1 * unticka.size) >= 2 && (unticka.size * 1) >= 3) {
         unticka = new Map([[`${uploadX}`, 2]]);
         break;
      }
       let rulesn: Array<any> = [891, 32, 746];
       let themen: Array<any> = [String.fromCharCode(111,98,106,95,50,95,54,0), String.fromCharCode(108,105,98,97,118,100,101,118,105,99,101,95,106,95,57,55,0)];
       let annerR = String.fromCharCode(115,95,54,54,95,98,117,102,102,101,114,105,110,103,0);
       let away0 = String.fromCharCode(108,105,98,110,100,105,95,111,95,55,56,0);
       let ticked6 = String.fromCharCode(120,95,49,95,105,115,115,117,101,0);
       let playlistO = String.fromCharCode(118,97,108,115,95,112,95,56,50,0);
      for (let y = 0; y < 2; y++) {
          let nterstitialB = false;
          let launchL = 2.0;
          let modeH = 0.0;
          let full7 = String.fromCharCode(116,114,97,118,101,114,115,101,95,49,95,51,55,0);
          let telegram7 = String.fromCharCode(101,95,57,57,95,99,102,116,98,115,117,98,0);
         xvodo = playlistO.length <= 49;
         nterstitialB = modeH < launchL;
         launchL *= parseFloat(`${parseInt(`${launchL}`) % 1}`);
         modeH *= (parseFloat(`${parseInt(`${modeH}`) & (nterstitialB ? 3 : 1)}`));
         full7 += "3";
         telegram7 = "3";
      }
       let become7 = String.fromCharCode(107,95,50,56,95,100,101,115,116,105,110,97,116,105,111,110,0);
      let sport5 = xvodo ? !xvodo : xvodo;
      do {
          let hooksz = 1.0;
          let macau_ = false;
          let usernameu = String.fromCharCode(105,95,52,57,95,114,97,116,105,111,0);
         xvodo = ticked6 == String.fromCharCode(50,0);
         hooksz += (parseFloat(`${usernameu.length << (Math.min(4, Math.abs((macau_ ? 5 : 2))))}`));
         macau_ = !macau_;
         usernameu = `${2 * usernameu.length}`;
         if (sport5) {
            break;
         }
      } while (sport5 && ((5 - unticka.size) > 3));
      while ((themen.length * annerR.length) >= 4) {
         themen = [(ticked6 == String.fromCharCode(88,0) ? themen.length : ticked6.length)];
         break;
      }
      statst.push(1);
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
       let championq = 2.0;
    let macaun = String.fromCharCode(107,95,52,54,95,100,101,108,101,116,101,0);
    let promotionP = 1.0;
    let spec4 = String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,115,95,56,95,57,55,0);
    let circlei = String.fromCharCode(102,95,49,57,95,116,114,97,110,115,99,111,100,101,0);
    let frame_nL = 4.0;
    let calendarZ = String.fromCharCode(103,95,52,55,95,97,117,116,104,101,110,116,105,99,97,116,111,114,0);
    let logoV = String.fromCharCode(101,120,116,114,97,99,116,95,122,95,52,57,0);
    let favoriter = 1.0;
    let filedF = String.fromCharCode(100,95,53,55,95,105,116,101,114,97,116,101,0);
   for (let o = 0; o < 3; o++) {
      circlei = `${parseInt(`${frame_nL}`) * 2}`;
   }
      macaun += `${parseInt(`${promotionP}`) / 2}`;

    let searchKeyword = placeholderSearch;

   while (3.19 == (3.64 + championq) || 2.73 == (championq + 3.64)) {
      championq -= parseInt(`${frame_nL}`) & 2;
      break;
   }
      frame_nL += macaun.length >> (Math.min(4, spec4.length));

    if (search != "") {

   if ((championq + calendarZ.length) == 1.18) {
      championq /= Math.max((calendarZ == String.fromCharCode(120,0) ? parseInt(`${frame_nL}`) : calendarZ.length), 1);
   }
   if (2.86 >= (calendarZ.length - promotionP) || 2.86 >= (promotionP - calendarZ.length)) {
      calendarZ += `${macaun.length >> (Math.min(4, Math.abs(parseInt(`${championq}`))))}`;
   }
      searchKeyword = search;
    }

    

      championq += calendarZ.length ^ 3;
   for (let h = 0; h < 2; h++) {
      calendarZ += `${(calendarZ == String.fromCharCode(106,0) ? parseInt(`${frame_nL}`) : calendarZ.length)}`;
   }
    

   let router3 = macaun.length <= 9671036;
   do {
      macaun = `${parseInt(`${frame_nL}`) % 2}`;
      if (router3) {
         break;
      }
   } while (((1 + macaun.length) <= 4 || 3.68 <= (promotionP / 4.98)) && router3);
      macaun += `${spec4.length}`;
    

   while (spec4.length == circlei.length) {
      circlei = `${parseInt(`${frame_nL}`)}`;
      break;
   }
      circlei = "1";
    

      promotionP += spec4.length / (Math.max(5, calendarZ.length));
   while (1.22 >= (championq / 3.96) && 3.96 >= (championq / (Math.max(2, macaun.length)))) {
      macaun = `${parseInt(`${frame_nL}`) / (Math.max(4, parseInt(`${championq}`)))}`;
      break;
   }

    

      spec4 += `${(calendarZ == String.fromCharCode(108,0) ? spec4.length : calendarZ.length)}`;
      circlei = "3";
    

   if (calendarZ.length <= spec4.length) {
      spec4 += `${macaun.length ^ 2}`;
   }
   while (3 < (1 & circlei.length) || 3.91 < (frame_nL + 5.34)) {
       let typingN = 2;
       let castC = 5.0;
         typingN ^= parseInt(`${castC}`);
      while (3 < typingN) {
          let baidut = String.fromCharCode(104,95,49,53,95,115,119,105,116,99,104,105,110,103,0);
          let gesturesc = 3.0;
          let r_countN = 4.0;
          let l_centerw = String.fromCharCode(102,95,49,95,110,116,112,0);
          let googleN = 0;
         castC -= parseFloat(`${parseInt(`${castC}`) + 1}`);
         baidut += "3";
         gesturesc /= Math.max(5, 1);
         r_countN *= parseFloat(`${parseInt(`${gesturesc}`)}`);
         l_centerw = `${(baidut == String.fromCharCode(106,0) ? googleN : baidut.length)}`;
         googleN *= googleN ^ parseInt(`${r_countN}`);
         break;
      }
      let minii = typingN <= 6731138;
      do {
          let paginationv = 0;
         typingN *= paginationv;
         if (minii) {
            break;
         }
      } while ((1.66 == castC) && minii);
      if (castC == 3.86) {
         castC *= parseFloat(`${parseInt(`${castC}`)}`);
      }
         typingN ^= typingN >> (Math.min(Math.abs(parseInt(`${castC}`)), 2));
      while (castC > 5.36) {
          let langq = String.fromCharCode(116,95,49,55,95,107,101,99,99,97,107,0);
          let cnewsx = 0.0;
         typingN += typingN;
         langq += `${parseInt(`${cnewsx}`)}`;
         cnewsx /= Math.max(parseFloat(`${parseInt(`${cnewsx}`)}`), 3);
         break;
      }
      circlei = `${circlei.length}`;
      break;
   }
    

   while (spec4.startsWith(calendarZ)) {
      spec4 += `${parseInt(`${promotionP}`)}`;
      break;
   }
      frame_nL -= 1 & spec4.length;
    

      logoV += `${parseInt(`${frame_nL}`)}`;
   while (parseFloat(`${circlei.length}`) >= favoriter) {
      circlei += `${parseInt(`${championq}`) - 1}`;
      break;
   }
    

      promotionP /= Math.max(parseInt(`${promotionP}`), 2);
       let dropdowns = String.fromCharCode(111,95,54,55,95,110,111,100,101,0);
       let historys = String.fromCharCode(115,95,53,95,105,100,99,116,99,111,108,0);
      if (historys.length > 1) {
         dropdowns = `${dropdowns.length % 2}`;
      }
      for (let l = 0; l < 3; l++) {
          let liste = true;
          let whatsappP = false;
          let dataF = String.fromCharCode(118,97,114,105,97,110,116,95,111,95,50,49,0);
          let rulesw = String.fromCharCode(108,105,110,117,120,95,57,95,54,51,0);
          let anythinkS = String.fromCharCode(100,101,102,101,114,114,105,110,103,95,103,95,53,54,0);
         dropdowns += "2";
         liste = !liste || !whatsappP;
         whatsappP = liste;
         dataF = `${anythinkS.length - 2}`;
         rulesw += `${dataF.length}`;
         anythinkS = `${rulesw.length}`;
      }
          let hoverz = true;
          let gpayd = 5.0;
         historys = `${((hoverz ? 1 : 2) >> (Math.min(dropdowns.length, 2)))}`;
         hoverz = gpayd <= 31.23 || 31.23 <= gpayd;
      for (let c = 0; c < 3; c++) {
          let score0: Map<any, any> = new Map([[String.fromCharCode(115,101,113,95,49,95,56,57,0),582], [String.fromCharCode(99,97,118,115,100,115,112,95,116,95,56,0),304], [String.fromCharCode(115,121,109,98,111,108,105,99,95,106,95,53,52,0),22]]);
          let clearc = String.fromCharCode(115,117,112,112,111,114,116,105,110,103,95,108,95,49,52,0);
          let gesturesJ = String.fromCharCode(115,109,117,115,104,95,54,95,54,49,0);
         dropdowns = `${1 & historys.length}`;
         score0 = new Map([[gesturesJ, clearc.length / 1]]);
         clearc = `${score0.size % (Math.max(clearc.length, 10))}`;
         gesturesJ = `${score0.size}`;
      }
      if (2 < dropdowns.length) {
         dropdowns = `${(historys == String.fromCharCode(98,0) ? dropdowns.length : historys.length)}`;
      }
      if (!dropdowns.startsWith(`${historys.length}`)) {
         historys = `${(dropdowns == String.fromCharCode(49,0) ? dropdowns.length : historys.length)}`;
      }
      calendarZ += "3";
    

   for (let r = 0; r < 2; r++) {
      logoV = `${circlei.length}`;
   }
      calendarZ = `${parseInt(`${promotionP}`) & calendarZ.length}`;
    

       let livep: Array<any> = [221, 380, 658];
       let weiboL = String.fromCharCode(105,95,57,53,95,115,98,119,97,105,116,0);
       let gesturesV: Array<any> = [903, 241];
          let screen8 = 1.0;
         gesturesV = [livep.length | 1];
         screen8 *= 1 % (Math.max(7, parseInt(`${screen8}`)));
      let overy = gesturesV.length >= 7237129;
      do {
         gesturesV = [weiboL.length];
         if (overy) {
            break;
         }
      } while (overy && (!livep.includes(gesturesV.length)));
          let stationF = String.fromCharCode(116,114,105,97,110,103,108,101,115,95,54,95,57,56,0);
          let d_viewu = String.fromCharCode(104,97,98,108,101,95,99,95,49,50,0);
         weiboL = `${gesturesV.length + livep.length}`;
         stationF += `${d_viewu.length << (Math.min(stationF.length, 3))}`;
         d_viewu += `${stationF.length}`;
         weiboL += "1";
       let policyj = false;
       let activeA = false;
      while (gesturesV.length == 5) {
         weiboL = `${gesturesV.length % (Math.max(weiboL.length, 8))}`;
         break;
      }
       let mutedF = 3;
       let playp = 4;
      while (3 >= (weiboL.length << (Math.min(5, Math.abs(playp))))) {
          let brightnessO = 1;
          let floater2 = String.fromCharCode(107,95,50,57,95,112,114,101,100,105,99,116,105,111,110,0);
          let dragC = String.fromCharCode(98,95,51,53,95,111,115,116,114,101,97,109,0);
          let service7 = String.fromCharCode(118,99,111,100,101,99,95,103,95,55,55,0);
          let yellowH = true;
         weiboL += `${(dragC == String.fromCharCode(101,0) ? dragC.length : gesturesV.length)}`;
         brightnessO <<= Math.min(1, Math.abs(((yellowH ? 1 : 2))));
         floater2 = `${brightnessO}`;
         service7 += `${service7.length}`;
         yellowH = service7.length >= 8;
         break;
      }
      for (let n = 0; n < 3; n++) {
         policyj = 63 > livep.length;
      }
      circlei = `${(calendarZ == String.fromCharCode(71,0) ? logoV.length : calendarZ.length)}`;
   while (macaun.length < calendarZ.length) {
      macaun = `${2 - spec4.length}`;
      break;
   }
    

   let stringP = circlei == String.fromCharCode(121,117,121,118,53,122,0);
   do {
       let edit3 = String.fromCharCode(110,95,56,56,95,118,101,99,0);
       let privacyf = 1.0;
          let commentQ = String.fromCharCode(107,95,53,50,95,112,114,111,99,99,101,115,115,0);
          let backn: Map<any, any> = new Map([[String.fromCharCode(116,95,53,55,95,112,114,105,109,97,108,105,116,121,0),642], [String.fromCharCode(115,111,108,105,100,95,98,95,50,54,0),547], [String.fromCharCode(115,95,50,51,95,104,99,115,99,97,108,101,0),390]]);
          let orientationm = String.fromCharCode(106,95,56,95,115,117,98,115,121,115,116,101,109,0);
         privacyf -= parseFloat(`${edit3.length << (Math.min(Math.abs(2), 3))}`);
         commentQ = `${(orientationm == String.fromCharCode(121,0) ? commentQ.length : orientationm.length)}`;
         backn = new Map([[commentQ, (String.fromCharCode(87,0) == orientationm ? orientationm.length : commentQ.length)]]);
      if (1.88 > (privacyf + 3.65)) {
         privacyf += (parseFloat(`${String.fromCharCode(113,0) == edit3 ? edit3.length : parseInt(`${privacyf}`)}`));
      }
      if (!edit3.endsWith(`${privacyf}`)) {
         privacyf += parseFloat(`${parseInt(`${privacyf}`)}`);
      }
         privacyf /= Math.max(1, parseFloat(`${edit3.length}`));
         privacyf -= parseFloat(`${parseInt(`${privacyf}`)}`);
      if (2 == (edit3.length / (Math.max(5, parseInt(`${privacyf}`)))) || (parseInt(`${privacyf}`) / 2) == 3) {
         edit3 = `${edit3.length}`;
      }
      circlei = `${logoV.length + 2}`;
      if (stringP) {
         break;
      }
   } while (stringP && (4 >= circlei.length));
   if (filedF == String.fromCharCode(106,0)) {
      circlei += `${parseInt(`${frame_nL}`) & filedF.length}`;
   }
    
    

    fetchData(searchKeyword, true);
    dispatch(addSearchHistory(searchKeyword));
    setShowResults(!showResults);
  };

  const clearHistory = useCallback(() => {
       let faviconp = false;
    let adultH = 2.0;
    let trophy2 = String.fromCharCode(115,116,114,101,97,109,104,101,97,100,101,114,95,117,95,51,55,0);
    let matches1: Map<any, any> = new Map([[String.fromCharCode(110,95,57,48,95,109,97,114,103,105,110,0),639], [String.fromCharCode(109,95,49,56,95,102,116,118,102,111,108,100,101,114,99,108,111,115,101,100,0),807], [String.fromCharCode(119,105,110,100,111,119,115,95,57,95,52,55,0),248]]);
    let typesX = false;
    let hooksn = String.fromCharCode(99,111,118,97,108,101,110,116,95,52,95,51,48,0);
    let indexn: Array<any> = [455, 704];
    let emojiM: Map<any, any> = new Map([[String.fromCharCode(105,95,49,54,95,97,112,112,114,111,120,105,109,97,116,105,111,110,0),505], [String.fromCharCode(100,95,53,53,95,114,101,99,118,118,0),17]]);
    let anythink1 = String.fromCharCode(102,95,56,54,95,109,117,108,116,105,112,108,121,120,0);
    let windV = String.fromCharCode(105,110,100,101,110,116,97,116,105,111,110,95,48,95,56,48,0);
    let quest3 = String.fromCharCode(104,119,99,111,110,116,101,120,116,95,120,95,55,54,0);
    let nterstitialJ = 0.0;
    let overlayW = String.fromCharCode(101,95,52,54,95,109,111,110,105,116,111,114,105,110,103,0);
    let crossE: Array<any> = [404, 484];
    let emptyf = String.fromCharCode(116,95,53,54,95,119,97,118,101,115,0);
   for (let r = 0; r < 1; r++) {
      windV += `${(windV == String.fromCharCode(113,0) ? windV.length : parseInt(`${adultH}`))}`;
   }
   if ((trophy2.length * matches1.size) < 1) {
       let loginh = String.fromCharCode(119,116,118,102,105,108,101,95,57,95,56,49,0);
       let assistB = String.fromCharCode(110,95,51,55,95,114,101,112,108,97,121,101,114,0);
      for (let p = 0; p < 3; p++) {
         loginh += "3";
      }
         assistB += `${1 * loginh.length}`;
      while (assistB == String.fromCharCode(99,0)) {
         loginh = `${assistB.length + 1}`;
         break;
      }
         loginh += "3";
         assistB += `${1 + loginh.length}`;
       let icon7 = 4;
       let entryF = 3;
      matches1.set(hooksn, hooksn.length);
   }
   if (1 < trophy2.length) {
      adultH /= Math.max(2, parseFloat(`${matches1.size}`));
   }
   let nalyticsa = 9708884.0 >= adultH;
   do {
      adultH *= (parseFloat(`${(typesX ? 4 : 5) % (Math.max(3, 10))}`));
      if (nalyticsa) {
         break;
      }
   } while (nalyticsa && (4.82 > (adultH + 5.35)));
   for (let q = 0; q < 1; q++) {
      hooksn = `${2 * hooksn.length}`;
   }
      typesX = matches1.size < hooksn.length;
       let sellN: Array<any> = [80, 768];
      if (5 <= (sellN.length | sellN.length)) {
         sellN = [sellN.length];
      }
       let diceV = true;
      for (let f = 0; f < 1; f++) {
         sellN = [sellN.length];
      }
      quest3 = `${((faviconp ? 4 : 1))}`;
   for (let d = 0; d < 3; d++) {
      adultH -= parseFloat(`${2 - windV.length}`);
   }
   let modelsz = matches1.size <= 5043442;
   do {
      matches1 = new Map([[`${indexn.length}`, 2]]);
      if (modelsz) {
         break;
      }
   } while (modelsz && (2 < matches1.size));
      emojiM = new Map([[`${matches1.size}`, anythink1.length * 3]]);
   while (nterstitialJ < 3.71) {
      adultH += parseFloat(`${2 | parseInt(`${nterstitialJ}`)}`);
      break;
   }
   if (1 > windV.length) {
       let actionn: Map<any, any> = new Map([[String.fromCharCode(113,99,111,109,95,113,95,50,51,0),954], [String.fromCharCode(111,118,101,114,115,99,114,111,108,108,95,114,95,49,54,0),394]]);
       let roomh: Map<any, any> = new Map([[String.fromCharCode(109,95,53,51,95,112,117,108,108,0),550], [String.fromCharCode(108,95,56,54,95,112,97,115,112,0),660]]);
       let textI = String.fromCharCode(106,95,52,51,95,116,111,107,101,110,100,0);
      while (textI.includes(`${actionn.size}`)) {
         textI = `${actionn.size * roomh.size}`;
         break;
      }
      for (let a = 0; a < 2; a++) {
         textI = `${roomh.size % 2}`;
      }
       let eventS = false;
      for (let q = 0; q < 3; q++) {
         textI += `${(textI == String.fromCharCode(81,0) ? (eventS ? 5 : 1) : textI.length)}`;
      }
       let infoB = 4.0;
       let theme1 = 2.0;
          let phone0 = 4.0;
          let backgrounds = 5;
         roomh = new Map([[`${infoB}`, 1 + parseInt(`${phone0}`)]]);
         phone0 += backgrounds;
          let tooltipsf = String.fromCharCode(98,97,107,101,100,95,122,95,52,50,0);
          let volumel = 2.0;
         eventS = 67.79 == theme1 && 28 == tooltipsf.length;
         tooltipsf += `${parseInt(`${volumel}`) << (Math.min(5, Math.abs(2)))}`;
         volumel -= 2;
         textI += `${(String.fromCharCode(104,0) == textI ? parseInt(`${theme1}`) : textI.length)}`;
       let updatesM = String.fromCharCode(104,102,121,117,95,97,95,55,53,0);
      windV += `${matches1.size}`;
   }
   if (1 == (emojiM.size & indexn.length) || 4 == (1 & indexn.length)) {
      indexn.push(3 << (Math.min(1, indexn.length)));
   }
   let knewsC = 5822926.0 >= adultH;
   do {
      adultH -= parseFloat(`${1}`);
      if (knewsC) {
         break;
      }
   } while ((Array.from(emojiM.values()).includes(adultH)) && knewsC);
   for (let j = 0; j < 1; j++) {
      trophy2 = `${((faviconp ? 4 : 5) ^ emojiM.size)}`;
   }
   while (!trophy2.includes(`${adultH}`)) {
       let sellz = 5;
       let signinupe = 1.0;
       let selects = 1.0;
       let mutedO = false;
      let annerm = 7959583.0 <= signinupe;
      do {
         signinupe /= Math.max(4, 2 ^ parseInt(`${selects}`));
         if (annerm) {
            break;
         }
      } while ((1.1 <= (signinupe + selects) || (selects + 1.1) <= 5.6) && annerm);
          let grey0 = 4.0;
          let tickm = String.fromCharCode(114,103,98,116,111,98,103,114,95,57,95,56,54,0);
          let close9 = String.fromCharCode(111,95,55,51,95,99,111,115,105,103,110,97,116,111,114,121,0);
         signinupe -= 2;
         grey0 -= tickm.length;
         tickm = `${parseInt(`${grey0}`) % (Math.max(1, 5))}`;
         close9 += `${tickm.length ^ parseInt(`${grey0}`)}`;
         selects -= parseFloat(`${3 ^ parseInt(`${selects}`)}`);
         sellz <<= Math.min(Math.abs(parseInt(`${selects}`) ^ 3), 2);
      let analyticso = 5255848.0 >= selects;
      do {
         selects /= Math.max(4, parseFloat(`${1 % (Math.max(parseInt(`${selects}`), 7))}`));
         if (analyticso) {
            break;
         }
      } while (((selects / (Math.max(3.11, 7))) > 3.15 && 3.11 > selects) && analyticso);
       let e_positionY: Array<any> = [831, 79];
      while (sellz > 2) {
         sellz %= Math.max(4, sellz % (Math.max(6, parseInt(`${signinupe}`))));
         break;
      }
         sellz <<= Math.min(2, Math.abs(((mutedO ? 3 : 5) | parseInt(`${selects}`))));
         e_positionY = [(e_positionY.length + (mutedO ? 1 : 5))];
       let emojir = String.fromCharCode(101,110,99,111,100,97,98,108,101,115,95,116,95,57,49,0);
       let turnk = String.fromCharCode(115,98,119,97,105,116,95,57,95,49,52,0);
         e_positionY = [2];
      for (let v = 0; v < 3; v++) {
         e_positionY = [parseInt(`${signinupe}`)];
      }
      trophy2 = `${((faviconp ? 2 : 2) - parseInt(`${signinupe}`))}`;
      break;
   }
   for (let b = 0; b < 3; b++) {
       let playlistp = 2.0;
       let shared4 = String.fromCharCode(116,114,101,97,100,95,49,95,50,49,0);
       let clockn = String.fromCharCode(97,112,112,114,111,118,101,95,99,95,52,49,0);
       let twitter9 = String.fromCharCode(120,95,54,52,95,102,111,114,101,97,99,104,0);
          let leftC = 4.0;
          let homeV = 2;
          let combineN = 5.0;
         shared4 = `${2 + parseInt(`${leftC}`)}`;
         leftC /= Math.max(2, parseFloat(`${homeV / (Math.max(3, parseInt(`${combineN}`)))}`));
         homeV += homeV ^ 1;
         combineN -= parseFloat(`${homeV}`);
      if ((twitter9.length & 5) >= 2) {
         playlistp -= parseFloat(`${1}`);
      }
         clockn += `${parseInt(`${playlistp}`)}`;
      let resulth = 8730740 <= shared4.length;
      do {
         shared4 = `${shared4.length >> (Math.min(Math.abs(3), 4))}`;
         if (resulth) {
            break;
         }
      } while (resulth && (twitter9.includes(shared4)));
      if (twitter9.length >= 2 && clockn == String.fromCharCode(77,0)) {
         clockn += "3";
      }
          let dataq = 0.0;
          let singaporeN = false;
         playlistp += parseFloat(`${2 + parseInt(`${dataq}`)}`);
         dataq /= Math.max(((singaporeN ? 5 : 1)), 2);
      let orientationz = playlistp >= 8710496.0;
      do {
         playlistp /= Math.max(2, parseFloat(`${shared4.length % (Math.max(clockn.length, 4))}`));
         if (orientationz) {
            break;
         }
      } while ((2.91 == (playlistp * 3.54)) && orientationz);
       let changeW: Map<any, any> = new Map([[String.fromCharCode(99,114,101,97,116,105,111,110,95,119,95,54,55,0),82], [String.fromCharCode(113,109,97,116,95,113,95,51,53,0),93]]);
       let google5: Map<any, any> = new Map([[String.fromCharCode(99,95,54,48,95,116,104,101,0),false ], [String.fromCharCode(97,98,115,95,116,95,50,52,0),true ]]);
      let pointE = clockn.length <= 6249158;
      do {
         clockn = "2";
         if (pointE) {
            break;
         }
      } while (pointE && (!shared4.includes(`${clockn.length}`)));
      while ((twitter9.length - 2) < 5 || 2 < (2 - google5.size)) {
          let pointH = String.fromCharCode(99,95,50,95,104,97,110,100,115,0);
         twitter9 += `${shared4.length}`;
         pointH = `${(pointH == String.fromCharCode(83,0) ? pointH.length : pointH.length)}`;
         break;
      }
         shared4 += `${clockn.length}`;
          let clearq: Map<any, any> = new Map([[String.fromCharCode(111,95,50,55,95,116,114,97,110,115,102,111,114,109,101,114,0),String.fromCharCode(100,95,51,57,95,116,97,112,101,0)], [String.fromCharCode(116,114,101,110,100,108,105,110,101,95,105,95,56,54,0),String.fromCharCode(103,101,116,101,110,118,95,103,95,56,54,0)], [String.fromCharCode(102,116,118,112,110,111,100,101,95,49,95,49,53,0),String.fromCharCode(103,98,114,97,112,95,116,95,56,56,0)]]);
         shared4 += `${clockn.length << (Math.min(5, Math.abs(parseInt(`${playlistp}`))))}`;
         clearq = new Map([[`${clearq.size}`, clearq.size]]);
      faviconp = hooksn.length <= 57;
   }
      emojiM.set(`${nterstitialJ}`, (trophy2 == String.fromCharCode(108,0) ? trophy2.length : parseInt(`${nterstitialJ}`)));
      adultH += parseFloat(`${1}`);
   while (!faviconp) {
      emojiM.set(overlayW, (String.fromCharCode(87,0) == overlayW ? overlayW.length : parseInt(`${nterstitialJ}`)));
      break;
   }
      anythink1 = "3";

    dispatch(clearSearchHistory());
  }, []);

  
  const onClickSearchResult = useCallback(() => {
       let album6 = false;
    let referrerT = 2.0;
    let orangeA = false;
    let update_pD = true;
    let scorem = String.fromCharCode(114,101,101,110,99,114,121,112,116,95,97,95,55,55,0);
    let downloadc = false;
    let areaG = false;
    let reminder7 = true;
    let mailV = String.fromCharCode(114,101,109,98,95,112,95,54,48,0);
    let floatingj = 1.0;
    let hejis = String.fromCharCode(100,99,116,120,100,99,95,99,95,55,53,0);
   for (let v = 0; v < 2; v++) {
       let auto_ci = String.fromCharCode(105,109,112,97,99,116,95,52,95,49,56,0);
       let side8: Array<any> = [870, 889];
      while (2 < (auto_ci.length - 5)) {
         auto_ci += `${(auto_ci == String.fromCharCode(100,0) ? auto_ci.length : side8.length)}`;
         break;
      }
         side8.push((auto_ci == String.fromCharCode(122,0) ? side8.length : auto_ci.length));
       let nextV = String.fromCharCode(115,116,97,116,117,115,95,98,95,57,52,0);
      if ((auto_ci.length % 2) >= 2 && (side8.length % 2) >= 2) {
         auto_ci = `${side8.length % (Math.max(nextV.length, 1))}`;
      }
         auto_ci += "2";
      let sheetU = 5036997 >= side8.length;
      do {
         side8.push(side8.length);
         if (sheetU) {
            break;
         }
      } while (((nextV.length / 2) < 4) && sheetU);
      downloadc = referrerT < 30.47;
   }
   for (let z = 0; z < 3; z++) {
       let unreadU = 2.0;
      if (5.73 >= unreadU) {
         unreadU += parseFloat(`${parseInt(`${unreadU}`) / 3}`);
      }
         unreadU *= parseFloat(`${parseInt(`${unreadU}`) % (Math.max(10, parseInt(`${unreadU}`)))}`);
      let whatsappF = unreadU >= 5647272.0;
      do {
          let with_vC: Array<any> = [107, 580, 827];
         unreadU += parseFloat(`${2 ^ parseInt(`${unreadU}`)}`);
         with_vC = [1 << (Math.min(3, with_vC.length))];
         if (whatsappF) {
            break;
         }
      } while ((4.92 > unreadU) && whatsappF);
      album6 = (!album6 ? !update_pD : !album6);
   }
      update_pD = !update_pD;
      orangeA = scorem == String.fromCharCode(116,0);
      update_pD = !downloadc;
      downloadc = !orangeA;
   if (!downloadc) {
      reminder7 = scorem.length < 45;
   }
      areaG = referrerT >= 66.1;
   while (2 == mailV.length && areaG) {
       let gifth = String.fromCharCode(103,114,101,101,110,95,113,95,55,50,0);
       let readf = String.fromCharCode(99,111,110,97,110,102,105,108,101,95,103,95,57,0);
       let sansV = false;
       let clubw: Array<any> = [563, 9];
      while ((3 << (Math.min(5, clubw.length))) == 5) {
         sansV = readf.endsWith(`${sansV}`);
         break;
      }
         sansV = (((!sansV ? readf.length : 7) * readf.length) <= 7);
       let launch8 = String.fromCharCode(100,110,120,104,100,101,110,99,95,118,95,50,52,0);
       let abouti = String.fromCharCode(102,105,108,116,101,114,101,100,95,49,95,51,50,0);
       let groupY = String.fromCharCode(114,112,99,95,113,95,49,57,0);
         clubw = [((sansV ? 4 : 4) % (Math.max(4, groupY.length)))];
          let filedd = 2;
          let c_playerp = String.fromCharCode(115,101,110,100,118,95,106,95,52,48,0);
          let uploadD = String.fromCharCode(117,95,51,57,95,99,111,102,102,105,110,0);
         clubw.push(clubw.length);
         filedd <<= Math.min(Math.abs(c_playerp.length / 2), 5);
         c_playerp += `${filedd & 2}`;
         uploadD = `${uploadD.length}`;
      if (1 <= (clubw.length >> (Math.min(Math.abs(2), 1)))) {
          let specQ: Map<any, any> = new Map([[String.fromCharCode(97,99,101,115,115,111,114,121,95,98,95,54,48,0),771], [String.fromCharCode(103,95,56,49,95,101,107,121,0),869]]);
         clubw = [launch8.length];
         specQ.set(`${specQ.size}`, specQ.size);
      }
      while (1 >= (clubw.length ^ launch8.length) || (clubw.length ^ launch8.length) >= 1) {
         launch8 = `${groupY.length}`;
         break;
      }
      for (let n = 0; n < 2; n++) {
         readf = `${readf.length / (Math.max(2, groupY.length))}`;
      }
          let annerV = 0.0;
         abouti += `${(String.fromCharCode(109,0) == groupY ? groupY.length : (sansV ? 2 : 2))}`;
         annerV *= parseFloat(`${parseInt(`${annerV}`)}`);
      while (4 <= launch8.length) {
         abouti += `${2 & gifth.length}`;
         break;
      }
      let step2 = clubw.length <= 8147851;
      do {
          let viewsw = String.fromCharCode(114,101,109,97,105,110,95,110,95,55,51,0);
          let controlsO: Array<any> = [551, 559, 685];
          let feedbackr = String.fromCharCode(97,114,103,117,109,101,110,116,115,95,107,95,56,56,0);
          let alertd = 5.0;
          let backgroundC = String.fromCharCode(101,120,116,114,97,100,97,116,97,95,109,95,56,57,0);
         clubw = [clubw.length / (Math.max(groupY.length, 5))];
         viewsw += `${parseInt(`${alertd}`) / (Math.max(3, controlsO.length))}`;
         controlsO.push(viewsw.length);
         feedbackr += `${controlsO.length}`;
         alertd /= Math.max(5, viewsw.length & 3);
         backgroundC = `${feedbackr.length * controlsO.length}`;
         if (step2) {
            break;
         }
      } while ((clubw.length > 4 || (clubw.length / 4) > 2) && step2);
      mailV += `${clubw.length % (Math.max(3, 2))}`;
      break;
   }
      scorem = `${((areaG ? 1 : 4) * parseInt(`${referrerT}`))}`;
   let disconnectedN = scorem.length <= 8586875;
   do {
      scorem += `${parseInt(`${referrerT}`) >> (Math.min(4, Math.abs(2)))}`;
      if (disconnectedN) {
         break;
      }
   } while ((scorem.length < 2 || !areaG) && disconnectedN);
   while (1.31 >= referrerT) {
       let predictionO = 1.0;
         predictionO /= Math.max(parseFloat(`${parseInt(`${predictionO}`) ^ parseInt(`${predictionO}`)}`), 5);
         predictionO -= parseFloat(`${parseInt(`${predictionO}`) % (Math.max(parseInt(`${predictionO}`), 5))}`);
      while ((predictionO - predictionO) > 5.97 && (predictionO - predictionO) > 5.97) {
          let leftb = 2;
          let ajaxh = 1;
          let customv = String.fromCharCode(100,95,57,52,95,98,97,99,107,119,97,114,100,115,0);
         predictionO *= parseFloat(`${1}`);
         leftb %= Math.max(1, ajaxh + 3);
         ajaxh /= Math.max(3 << (Math.min(1, Math.abs(leftb))), 4);
         customv += `${ajaxh}`;
         break;
      }
      referrerT /= Math.max(4, parseFloat(`${scorem.length}`));
      break;
   }
      referrerT += (parseFloat(`${3 ^ (album6 ? 5 : 3)}`));
      reminder7 = scorem.endsWith(`${update_pD}`);
   let signinupQ = album6 ? !album6 : album6;
   do {
      album6 = referrerT > 53.63;
      if (signinupQ) {
         break;
      }
   } while (signinupQ && (scorem.length == 2));
   for (let y = 0; y < 3; y++) {
       let default_w4 = String.fromCharCode(99,111,109,112,97,114,101,95,105,95,53,50,0);
       let schedulei: Map<any, any> = new Map([[String.fromCharCode(105,95,57,95,115,117,98,106,0),true ], [String.fromCharCode(103,95,51,57,95,121,117,118,0),false ], [String.fromCharCode(105,95,49,95,104,100,114,115,0),true ]]);
       let rank5 = 5;
       let textw = String.fromCharCode(121,95,52,50,95,115,99,101,110,101,99,117,116,0);
         default_w4 += `${(default_w4 == String.fromCharCode(104,0) ? default_w4.length : textw.length)}`;
      if (textw != default_w4) {
          let shootn = String.fromCharCode(114,95,55,56,95,99,100,97,116,97,0);
          let updatesG = 3.0;
          let floaterj = String.fromCharCode(111,95,49,56,95,106,105,103,103,108,101,0);
          let plashP = String.fromCharCode(121,95,49,48,48,95,109,97,99,104,105,110,101,0);
          let catagoryH = false;
         default_w4 += `${3 << (Math.min(2, shootn.length))}`;
         shootn = `${floaterj.length + 1}`;
         updatesG -= floaterj.length & 1;
         plashP += `${((catagoryH ? 2 : 3) % (Math.max(parseInt(`${updatesG}`), 8)))}`;
         catagoryH = plashP.endsWith(`${catagoryH}`);
      }
          let playa = String.fromCharCode(110,95,50,56,95,114,101,98,117,105,108,100,0);
          let tailz = String.fromCharCode(102,95,53,48,95,118,105,115,97,0);
         textw = `${schedulei.size}`;
         playa = `${playa.length}`;
         tailz = `${playa.length}`;
       let humidityD = 1.0;
       let backV = 4.0;
      if ((parseInt(`${humidityD}`) / (Math.max(5, 2))) > 5 && 2 > (textw.length + 5)) {
          let sinaZ = String.fromCharCode(115,95,54,52,95,116,111,110,0);
          let questc = true;
          let updatesq = 1.0;
         textw += "1";
         sinaZ = `${sinaZ.length}`;
         questc = !questc;
         updatesq *= (parseFloat(`${(questc ? 1 : 2)}`));
      }
       let const_dI = String.fromCharCode(99,95,55,57,95,102,98,100,101,118,0);
         humidityD += parseFloat(`${1 | parseInt(`${backV}`)}`);
      while (default_w4 == textw) {
          let styleZ = String.fromCharCode(97,95,53,95,105,110,116,101,114,112,111,108,97,116,101,112,111,108,121,100,101,99,0);
          let commonN = String.fromCharCode(113,95,55,50,95,101,122,105,101,114,0);
          let statisticsm = String.fromCharCode(106,95,54,48,95,98,114,97,110,99,104,0);
         textw += `${textw.length >> (Math.min(Math.abs(1), 2))}`;
         styleZ += `${statisticsm.length}`;
         commonN = `${styleZ.length}`;
         statisticsm = `${statisticsm.length}`;
         break;
      }
      while (1.31 > (backV - humidityD) && (backV - 1.31) > 4.74) {
         backV /= Math.max(5, parseFloat(`${parseInt(`${humidityD}`)}`));
         break;
      }
         rank5 %= Math.max(default_w4.length, 3);
      let adultS = schedulei.size <= 8781030;
      do {
          let backgroundA: Array<any> = [360, 818];
          let awayr = String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,115,95,49,95,51,51,0);
          let viewsS = 4;
          let modew = String.fromCharCode(121,95,49,52,95,100,101,112,101,110,100,101,110,116,0);
          let resend0 = 2.0;
         schedulei.set(`${viewsS}`, modew.length & 3);
         backgroundA = [(awayr == String.fromCharCode(79,0) ? backgroundA.length : awayr.length)];
         viewsS <<= Math.min(3, Math.abs(parseInt(`${resend0}`) / (Math.max(awayr.length, 8))));
         modew += `${backgroundA.length}`;
         resend0 *= backgroundA.length;
         if (adultS) {
            break;
         }
      } while ((3 == (schedulei.size * 3)) && adultS);
      for (let r = 0; r < 2; r++) {
          let topicc: Map<any, any> = new Map([[String.fromCharCode(105,95,54,51,95,114,97,115,116,101,114,105,122,97,116,105,111,110,0),false ], [String.fromCharCode(105,110,115,116,97,110,99,101,95,50,95,49,53,0),false ], [String.fromCharCode(117,112,100,97,116,97,98,108,101,95,119,95,52,51,0),true ]]);
         rank5 -= const_dI.length | rank5;
         topicc = new Map([[`${topicc.size}`, 3 ^ topicc.size]]);
      }
      areaG = 100 > schedulei.size;
   }
      referrerT -= parseFloat(`${parseInt(`${referrerT}`) & 3}`);

    umb_center_carousel.searchResultClicksAnalytics();
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
            source={require("@static/images/shootAcceptedPrivate_7.gif")}
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
    color: "moonSelected",
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
