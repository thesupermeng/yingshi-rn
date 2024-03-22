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
import OrderedSearchResultsList from "../../components/search/mayi_copy_reminder";
import SearchResultList from "../../components/search/mayi_backward";
import ScreenContainer from "../../components/container/mayi_save";
import BackButton from "../../components/button/mayi_issub_button";
import SearchIcon from "@static/images/const_ixBangGroup.svg";
import ClearIcon from "@static/images/heartLibbufferBridge.svg";
import { useQuery } from "@tanstack/react-query";

import { mayi_LibswresampleModal } from "@type/mayi_green";
import { RootStackScreenProps } from "@type/mayi_video_binddatas";
import { API_DOMAIN } from "@utility/mayi_middleware_apps";
import VodWithDescriptionList from "../../components/vod/mayi_background_imagenetworkerr";
import { useAppDispatch, useAppSelector } from "@hooks/mayi_redirect";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import FastImage from "../../components/common/mayi_slider";
import {
  addSearchHistory,
  clearSearchHistory,
} from "@redux/actions/mayi_libffmpegkit";
import Animated, {
  FadeInUp,
  FadeOutUp,
  useAnimatedStyle,
} from "react-native-reanimated";
import ClearHistoryIcon from "@static/images/trashMinivodIconsetting.svg";
import EmptyList from "../../components/common/mayi_unread";
import appsFlyer from "react-native-appsflyer";
import ConfirmationModal from "../../components/modal/mayi_small_catalog";
import mayi_push from "../../../../Umeng/mayi_push";
import { mayi_CrossChat } from "@api";

export default ({ navigation, route }: RootStackScreenProps<"搜索">) => {
  const [search, setSearch] = useState("");
  const [placeholderSearch, setPlaceHolderSearch] = useState(
    route.params.initial
  );

  const [searchTimer, setSearchTimer] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [searchResults, setSearchResults] = useState<Array<mayi_LibswresampleModal>>(
    []
  );
  const [showResults, setShowResults] = useState(false);

  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(
    ({ searchHistoryReducer }: mayi_Libapminsightb) => searchHistoryReducer
  );
  const [isFetching, setisFetching] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { colors, textVariants, spacing, icons } = useTheme();

  const { data: recommendations } = useQuery({
    queryKey: ["recommendationList"],
    queryFn: () => mayi_CrossChat.getListByRecommendations(),
  });

  async function fetchData(text: string, userSearch: boolean = false) {
    setisFetching(true);

    
    if (userSearch && text.length > 0) mayi_push.searchKeywordAnalytics(text);
    

    mayi_CrossChat.getListByKeyword(text)
      .then((data) => {
        setSearchTimer(0);

        if (data.length <= 0) {
          setSearchResults([]);
        } else {
          setSearchResults(data);

          
          if (userSearch) mayi_push.searchResultViewsAnalytics();
          
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
       let source6 = false;
    let smallorangemang = String.fromCharCode(104,97,110,103,117,112,95,49,95,52,53,0);
    let vignette6 = String.fromCharCode(115,95,50,95,118,111,119,101,108,0);
    let trophyE: Array<any> = [String.fromCharCode(115,95,53,50,95,114,101,112,114,101,115,101,110,116,97,116,105,118,101,0), String.fromCharCode(102,114,97,109,101,100,95,114,95,53,52,0), String.fromCharCode(109,117,108,116,105,101,110,100,95,104,95,56,54,0)];
    let reporty = false;
    let other2 = 0.0;
    let predictionactivez = String.fromCharCode(120,95,51,54,95,106,111,105,110,0);
    let appleB = 1.0;
    let delegate_qG = 3.0;
    let otherK: Array<any> = [264, 133];
    let currenta: Array<any> = [376, 238, 654];
    let mbsplash6 = 2;
    let product2: Map<any, any> = new Map([[String.fromCharCode(104,97,109,98,117,114,103,101,114,95,109,95,51,54,0),808], [String.fromCharCode(99,117,118,105,100,95,57,95,50,55,0),132]]);
    let libfollyc = 5.0;
   let league5 = predictionactivez == String.fromCharCode(109,56,103,97,110,0);
   do {
       let libreactnativeblobF = String.fromCharCode(102,116,118,108,105,110,107,95,108,95,50,50,0);
       let invitep = String.fromCharCode(109,95,49,54,95,117,105,110,116,98,101,0);
       let libjsinspectorU = 5;
       let goallogoF = 5.0;
       let iconsettingf = 0.0;
      if (invitep.includes(`${goallogoF}`)) {
          let gestureM = false;
         goallogoF += parseFloat(`${libreactnativeblobF.length}`);
         gestureM = !gestureM;
      }
       let iconarrowrightwhiteJ = false;
         libjsinspectorU &= 3;
          let default_zv = 0.0;
          let termsQ: Array<any> = [617, 110, 81];
          let videobufferloadingv = false;
         goallogoF -= parseFloat(`${3 & invitep.length}`);
         default_zv /= Math.max(parseInt(`${default_zv}`), 3);
         termsQ = [termsQ.length];
         videobufferloadingv = (((!videobufferloadingv ? 96 : termsQ.length) % (Math.max(termsQ.length, 5))) == 96);
          let containerq: Map<any, any> = new Map([[String.fromCharCode(110,111,110,101,109,112,116,121,95,111,95,48,0),String.fromCharCode(108,105,98,115,114,116,95,52,95,54,48,0)], [String.fromCharCode(115,110,97,112,104,111,116,95,114,95,54,48,0),String.fromCharCode(122,95,49,48,48,95,103,97,117,103,101,0)]]);
          let viewerh = String.fromCharCode(98,117,116,116,111,110,95,99,95,52,51,0);
          let foundT = String.fromCharCode(111,95,51,48,95,112,97,114,97,115,101,116,0);
         libreactnativeblobF += `${foundT.length / (Math.max(4, viewerh.length))}`;
         containerq = new Map([[`${containerq.size}`, containerq.size << (Math.min(Math.abs(2), 4))]]);
         viewerh = "3";
      while ((goallogoF + parseFloat(`${libreactnativeblobF.length}`)) > 4.90) {
         libreactnativeblobF = `${1 % (Math.max(3, libjsinspectorU))}`;
         break;
      }
         invitep += `${parseInt(`${goallogoF}`) & 3}`;
      while (4 >= (libjsinspectorU >> (Math.min(Math.abs(4), 1))) && 1 >= (libjsinspectorU >> (Math.min(Math.abs(4), 4)))) {
          let googleS = false;
          let fieldk: Map<any, any> = new Map([[String.fromCharCode(107,95,52,54,95,119,97,118,112,97,99,107,0),705], [String.fromCharCode(109,101,97,115,117,114,101,100,95,116,95,53,54,0),276], [String.fromCharCode(106,95,55,49,95,116,104,97,110,0),891]]);
          let alertJ = String.fromCharCode(109,95,55,49,95,120,105,112,104,108,97,99,105,110,103,0);
          let upgradeA = 4;
          let launch9: Array<any> = [620, 982];
         invitep += "3";
         googleS = fieldk.get(`${upgradeA}`) != null;
         fieldk.set(`${upgradeA}`, upgradeA & 3);
         alertJ += `${launch9.length}`;
         launch9 = [(alertJ == String.fromCharCode(97,0) ? upgradeA : alertJ.length)];
         break;
      }
      predictionactivez += `${parseInt(`${delegate_qG}`)}`;
      if (league5) {
         break;
      }
   } while (league5 && (predictionactivez.includes(`${source6}`)));
   let giftQ = source6 ? !source6 : source6;
   do {
       let cornerkickq = true;
       let androidH = 1;
      for (let z = 0; z < 2; z++) {
          let rewindS = String.fromCharCode(116,95,54,48,95,115,99,114,111,108,108,105,110,103,0);
          let borderlessS = String.fromCharCode(115,109,112,116,101,98,97,114,115,95,103,95,49,53,0);
          let calendarJ = 3.0;
          let subtexts = String.fromCharCode(120,95,57,51,95,105,110,116,101,110,115,105,116,121,0);
         cornerkickq = 41.38 <= calendarJ && 98 <= rewindS.length;
         rewindS = "3";
         borderlessS += `${subtexts.length >> (Math.min(Math.abs(1), 5))}`;
         calendarJ *= parseFloat(`${subtexts.length}`);
      }
         androidH %= Math.max(3 * androidH, 2);
         androidH >>= Math.min(Math.abs(androidH >> (Math.min(5, Math.abs(1)))), 3);
      while (!cornerkickq || (androidH - 1) < 1) {
          let dependenciesR: Map<any, any> = new Map([[String.fromCharCode(105,95,55,56,95,114,101,111,115,0),663], [String.fromCharCode(122,105,112,112,101,100,95,115,95,54,0),81], [String.fromCharCode(97,110,97,108,121,122,101,95,99,95,54,56,0),257]]);
          let libhermesc: Map<any, any> = new Map([[String.fromCharCode(100,95,57,57,95,102,105,108,101,116,105,109,101,0),String.fromCharCode(120,95,57,54,95,97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,0)], [String.fromCharCode(108,108,118,105,100,101,110,99,100,115,112,95,49,95,56,51,0),String.fromCharCode(109,95,53,52,95,101,115,99,97,112,101,100,0)]]);
          let loadingz = String.fromCharCode(113,95,52,57,95,100,112,116,114,115,0);
          let scorepopsound5 = String.fromCharCode(101,95,50,48,95,100,101,102,101,114,0);
         cornerkickq = !cornerkickq;
         dependenciesR.set(`${loadingz}`, libhermesc.size);
         libhermesc.set(scorepopsound5, scorepopsound5.length);
         loadingz += `${libhermesc.size + 1}`;
         break;
      }
      for (let f = 0; f < 3; f++) {
          let iconclosewhitebgK = String.fromCharCode(99,95,50,53,95,121,117,118,112,116,111,121,117,121,0);
          let megaphoneB: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,98,97,115,101,95,108,95,56,53,0),545], [String.fromCharCode(115,101,110,100,109,98,117,102,95,108,95,51,49,0),190], [String.fromCharCode(115,95,49,50,95,101,110,113,117,101,117,101,100,0),528]]);
          let arroww = 3;
          let chinaL: Map<any, any> = new Map([[String.fromCharCode(104,95,49,48,95,112,111,108,108,101,114,0),String.fromCharCode(102,119,104,116,95,110,95,56,0)], [String.fromCharCode(109,95,54,55,95,99,111,100,101,99,115,117,98,98,108,111,99,107,0),String.fromCharCode(102,111,114,109,97,116,116,101,114,115,95,100,95,53,54,0)], [String.fromCharCode(115,105,110,102,95,111,95,51,55,0),String.fromCharCode(114,95,54,55,95,99,108,105,112,115,0)]]);
         cornerkickq = !cornerkickq || arroww == 35;
         iconclosewhitebgK = `${chinaL.size | iconclosewhitebgK.length}`;
         megaphoneB = new Map([[`${megaphoneB.size}`, megaphoneB.size + 1]]);
         arroww += 3 % (Math.max(3, chinaL.size));
      }
       let weibo7 = 0;
       let whatsapp5 = 2;
      source6 = mbsplash6 == parseInt(`${delegate_qG}`);
      if (giftQ) {
         break;
      }
   } while ((source6) && giftQ);
   for (let b = 0; b < 3; b++) {
      otherK = [smallorangemang.length];
   }

    let searchKeyword = placeholderSearch;

   for (let e = 0; e < 1; e++) {
       let libapminsightbQ = String.fromCharCode(100,101,98,97,110,100,95,52,95,53,50,0);
          let backicon0 = String.fromCharCode(101,95,51,55,95,100,111,119,110,109,105,120,0);
         libapminsightbQ += `${3 % (Math.max(2, libapminsightbQ.length))}`;
         backicon0 = `${backicon0.length}`;
      for (let p = 0; p < 3; p++) {
          let basketballiconK = String.fromCharCode(104,95,50,48,95,101,120,116,101,114,110,97,108,108,121,0);
          let remindern = String.fromCharCode(116,95,54,57,95,99,111,100,101,98,108,111,99,107,115,0);
          let libreactnativeblobu = String.fromCharCode(112,108,116,101,95,48,95,54,51,0);
          let leaguedetailsbgt = 4.0;
          let k_view9 = false;
         libapminsightbQ = `${(libapminsightbQ == String.fromCharCode(118,0) ? libapminsightbQ.length : basketballiconK.length)}`;
         basketballiconK = `${libreactnativeblobu.length / 1}`;
         remindern = `${(libreactnativeblobu == String.fromCharCode(111,0) ? parseInt(`${leaguedetailsbgt}`) : libreactnativeblobu.length)}`;
         leaguedetailsbgt *= (parseFloat(`${parseInt(`${leaguedetailsbgt}`) & (k_view9 ? 2 : 2)}`));
         k_view9 = remindern == libreactnativeblobu;
      }
      for (let s = 0; s < 3; s++) {
         libapminsightbQ += `${3 & libapminsightbQ.length}`;
      }
      trophyE.push(trophyE.length & 2);
   }
   while (!trophyE.includes(mbsplash6)) {
       let helperq = String.fromCharCode(97,95,57,48,95,112,114,111,112,111,115,97,108,0);
       let scorepopsounds = 4.0;
       let hoverQ = 1;
       let context6 = 4.0;
         hoverQ <<= Math.min(Math.abs(hoverQ / (Math.max(1, helperq.length))), 5);
      if ((2 / (Math.max(1, hoverQ))) <= 3 || (scorepopsounds + 2.26) <= 5.24) {
         scorepopsounds -= hoverQ;
      }
         hoverQ += parseInt(`${context6}`) + 2;
       let smallbrightness6 = 0.0;
      while (2 <= helperq.length) {
         smallbrightness6 *= parseInt(`${context6}`);
         break;
      }
         context6 *= parseFloat(`${helperq.length + 3}`);
          let largeF: Array<any> = [973, 548, 150];
          let short_gy = 3.0;
          let long_bs: Map<any, any> = new Map([[String.fromCharCode(110,97,110,111,115,101,99,111,110,100,115,95,119,95,56,54,0),719], [String.fromCharCode(115,95,49,48,48,95,112,97,114,116,105,116,105,111,110,105,110,103,0),124], [String.fromCharCode(112,97,115,115,95,122,95,51,0),793]]);
         smallbrightness6 -= 2;
         largeF = [long_bs.size >> (Math.min(4, Math.abs(parseInt(`${short_gy}`))))];
         short_gy += largeF.length;
         long_bs = new Map([[`${long_bs.size}`, parseInt(`${short_gy}`)]]);
         helperq += `${helperq.length % 1}`;
      if ((5.8 / (Math.max(9, smallbrightness6))) >= 5.76 && 5.8 >= (hoverQ / (Math.max(9, smallbrightness6)))) {
         hoverQ ^= hoverQ - parseInt(`${context6}`);
      }
      if (hoverQ <= 2) {
         hoverQ %= Math.max(2, parseInt(`${smallbrightness6}`) * 3);
      }
         scorepopsounds *= hoverQ | parseInt(`${smallbrightness6}`);
      for (let u = 0; u < 1; u++) {
         context6 -= parseFloat(`${parseInt(`${smallbrightness6}`)}`);
      }
      mbsplash6 *= 3 >> (Math.min(2, Math.abs(parseInt(`${appleB}`))));
      break;
   }
   for (let n = 0; n < 2; n++) {
      vignette6 = `${((reporty ? 4 : 3))}`;
   }

    if (search != "") {

   let customV = reporty ? !reporty : reporty;
   do {
       let searchv = 2.0;
       let runtime6: Map<any, any> = new Map([[String.fromCharCode(121,95,51,52,95,99,97,116,101,103,111,114,105,115,101,100,0),303], [String.fromCharCode(98,117,102,114,101,102,95,106,95,52,56,0),383], [String.fromCharCode(108,95,53,49,95,115,116,105,99,107,101,114,101,100,0),683]]);
      for (let o = 0; o < 1; o++) {
         searchv -= parseFloat(`${2 ^ parseInt(`${searchv}`)}`);
      }
      if (3 == (parseInt(`${searchv}`) - runtime6.size)) {
         searchv /= Math.max(parseFloat(`${3 | runtime6.size}`), 1);
      }
      if (1 < runtime6.size) {
          let commentb: Array<any> = [692, 38];
          let untickv = String.fromCharCode(104,95,51,52,95,118,100,114,97,119,104,101,108,112,101,114,0);
          let awayz = String.fromCharCode(108,105,98,114,115,118,103,95,110,95,50,48,0);
         runtime6 = new Map([[`${runtime6.size}`, runtime6.size]]);
         commentb = [commentb.length];
         untickv = `${untickv.length}`;
         awayz += `${commentb.length & 1}`;
      }
         searchv *= parseFloat(`${runtime6.size}`);
      if (!Array.from(runtime6.keys()).includes(`${searchv}`)) {
         searchv -= parseFloat(`${parseInt(`${searchv}`)}`);
      }
      while (3 < (parseInt(`${searchv}`) + runtime6.size)) {
          let filed5 = 2.0;
          let logousera = 3.0;
          let libjsijniprofilerS = String.fromCharCode(100,101,110,111,109,95,106,95,53,51,0);
          let mimoT = String.fromCharCode(101,95,51,95,99,99,111,117,110,116,0);
         searchv *= parseFloat(`${runtime6.size}`);
         filed5 -= libjsijniprofilerS.length / (Math.max(2, 1));
         logousera /= Math.max(mimoT.length ^ parseInt(`${filed5}`), 2);
         libjsijniprofilerS += `${2 / (Math.max(7, parseInt(`${filed5}`)))}`;
         mimoT = `${mimoT.length}`;
         break;
      }
      reporty = runtime6.size > 68;
      if (customV) {
         break;
      }
   } while ((reporty) && customV);
   while (4 >= otherK.length) {
      otherK.push(((source6 ? 4 : 1) >> (Math.min(otherK.length, 2))));
      break;
   }
   if (reporty || 5.46 <= (other2 / (Math.max(3.22, 1)))) {
      reporty = delegate_qG == 20.62;
   }
      searchKeyword = search;
    }

    

      appleB *= (predictionactivez == String.fromCharCode(117,0) ? predictionactivez.length : otherK.length);
      smallorangemang += `${trophyE.length}`;
   let popup2 = 9061137 <= vignette6.length;
   do {
      vignette6 = `${smallorangemang.length}`;
      if (popup2) {
         break;
      }
   } while (popup2 && (1 <= (trophyE.length % (Math.max(vignette6.length, 3))) && (trophyE.length % 1) <= 3));
    

      delegate_qG += 3 / (Math.max(8, otherK.length));
      other2 *= parseInt(`${appleB}`);
   while (4 > (3 + otherK.length) && (otherK.length + trophyE.length) > 3) {
      trophyE.push(otherK.length);
      break;
   }
    

      other2 -= smallorangemang.length;
   if (vignette6.length >= smallorangemang.length) {
      vignette6 = `${mbsplash6}`;
   }
   if (1.92 == (2.44 - other2)) {
      other2 += 2;
   }
    

   let foundq = mbsplash6 >= 7008658;
   do {
      mbsplash6 += parseInt(`${delegate_qG}`) * smallorangemang.length;
      if (foundq) {
         break;
      }
   } while (((delegate_qG + 1.81) <= 3.77) && foundq);
   if (trophyE.includes(appleB)) {
      appleB /= Math.max(smallorangemang.length % (Math.max(1, 4)), 5);
   }
   let topic8 = 6041121.0 >= delegate_qG;
   do {
       let fullscreenminC = String.fromCharCode(97,110,105,109,97,116,105,111,110,115,95,56,95,51,56,0);
       let toponn: Array<any> = [936, 17, 923];
       let customN = true;
      if (customN) {
         customN = !customN;
      }
      for (let r = 0; r < 2; r++) {
         toponn = [((customN ? 3 : 5))];
      }
         toponn.push(fullscreenminC.length);
      let gpayH = customN ? !customN : customN;
      do {
          let flyerb = String.fromCharCode(112,97,99,101,100,95,50,95,51,53,0);
          let libloggerK: Map<any, any> = new Map([[String.fromCharCode(108,95,53,54,95,117,112,108,111,97,100,97,98,108,101,0),481], [String.fromCharCode(115,101,112,97,114,97,116,111,114,95,51,95,52,55,0),690]]);
          let phonem: Array<any> = [String.fromCharCode(112,95,53,56,95,104,97,108,102,0), String.fromCharCode(121,95,50,56,95,113,117,97,108,105,116,121,0), String.fromCharCode(117,95,53,51,95,111,114,100,101,114,105,110,103,0)];
          let predictionwinj = String.fromCharCode(119,95,57,52,95,103,97,109,109,97,102,105,108,116,101,114,0);
          let elementsa = String.fromCharCode(109,97,106,111,114,95,100,95,54,57,0);
         customN = phonem.length == 28 || libloggerK.size == 28;
         flyerb = `${predictionwinj.length >> (Math.min(Math.abs(1), 4))}`;
         libloggerK.set(predictionwinj, predictionwinj.length & flyerb.length);
         phonem.push((String.fromCharCode(118,0) == flyerb ? flyerb.length : predictionwinj.length));
         elementsa = `${predictionwinj.length}`;
         if (gpayH) {
            break;
         }
      } while (gpayH && (1 < (5 * toponn.length) && 5 < toponn.length));
      for (let p = 0; p < 2; p++) {
          let private_7g: Array<any> = [974, 791];
          let libavfiltera = String.fromCharCode(116,95,49,57,95,115,111,108,118,101,0);
          let firebasek: Array<any> = [442, 924];
         toponn.push(toponn.length + firebasek.length);
         private_7g.push(libavfiltera.length);
         libavfiltera = `${private_7g.length}`;
         firebasek.push((String.fromCharCode(53,0) == libavfiltera ? private_7g.length : libavfiltera.length));
      }
          let reactnativeratingsj = String.fromCharCode(117,95,56,51,95,119,114,97,112,112,101,100,0);
         customN = (toponn.length % (Math.max(fullscreenminC.length, 5))) >= 79;
         reactnativeratingsj = `${reactnativeratingsj.length}`;
          let q_unlockh = 3.0;
          let teamdetailsbgr = String.fromCharCode(112,95,51,95,114,111,116,114,0);
          let sinaF = String.fromCharCode(115,101,114,105,97,108,105,122,97,116,105,111,110,95,122,95,56,48,0);
         customN = String.fromCharCode(90,0) == sinaF;
         q_unlockh += 2;
         teamdetailsbgr += `${teamdetailsbgr.length}`;
         sinaF += `${teamdetailsbgr.length ^ 2}`;
         toponn.push(fullscreenminC.length);
          let iconviewergifZ: Array<any> = [String.fromCharCode(116,95,49,57,95,112,101,114,0), String.fromCharCode(100,95,52,51,95,112,97,116,99,104,0), String.fromCharCode(99,104,97,110,110,101,108,115,95,110,95,56,51,0)];
          let defaultlogog = String.fromCharCode(122,95,49,48,48,95,119,97,115,0);
          let eactG = 3.0;
         fullscreenminC = `${iconviewergifZ.length}`;
         iconviewergifZ.push(parseInt(`${eactG}`) / (Math.max(10, defaultlogog.length)));
         defaultlogog = `${parseInt(`${eactG}`)}`;
      delegate_qG *= currenta.length;
      if (topic8) {
         break;
      }
   } while (topic8 && ((delegate_qG + 3.94) < 2.58 && 4 < (4 ^ mbsplash6)));

    

   let iconsaveimager = 5616210.0 <= delegate_qG;
   do {
       let owngoalT: Array<any> = [228, 778, 593];
       let libavcodect = String.fromCharCode(98,114,97,99,101,95,57,95,57,51,0);
       let trophyx = 2.0;
       let sharewhitel = 5.0;
       let reportQ = 2.0;
         sharewhitel += parseInt(`${sharewhitel}`) << (Math.min(Math.abs(parseInt(`${reportQ}`)), 3));
      while (2.29 >= reportQ) {
          let penaltyshootR: Array<any> = [111, 393, 988];
          let policys = String.fromCharCode(104,111,114,110,95,57,95,52,49,0);
         reportQ *= parseFloat(`${2 * parseInt(`${trophyx}`)}`);
         penaltyshootR = [policys.length];
         policys = `${2 - policys.length}`;
         break;
      }
         reportQ += parseFloat(`${parseInt(`${sharewhitel}`) + 2}`);
      while (1.53 <= (reportQ * parseFloat(`${libavcodect.length}`)) && 1 <= (1 - libavcodect.length)) {
         libavcodect += "1";
         break;
      }
       let showlessN = String.fromCharCode(99,108,111,115,101,115,111,99,107,101,116,95,114,95,49,55,0);
      if ((reportQ / 3.29) == 3.94 && (1 | showlessN.length) == 4) {
         reportQ /= Math.max((parseFloat(`${libavcodect == String.fromCharCode(88,0) ? parseInt(`${trophyx}`) : libavcodect.length}`)), 4);
      }
         libavcodect = "2";
          let chartm = false;
         libavcodect += `${2 | parseInt(`${reportQ}`)}`;
         chartm = (chartm ? chartm : !chartm);
      while (5 == (parseInt(`${reportQ}`) - libavcodect.length)) {
          let goalY = 4.0;
          let flipperj = String.fromCharCode(108,95,56,56,95,115,99,97,108,105,110,103,0);
          let vietnamg = 0.0;
          let iconwatchnowX = 3.0;
          let airbnbstare = true;
         libavcodect = `${(String.fromCharCode(65,0) == libavcodect ? parseInt(`${sharewhitel}`) : libavcodect.length)}`;
         goalY += 2;
         flipperj += `${((airbnbstare ? 2 : 4) * parseInt(`${iconwatchnowX}`))}`;
         vietnamg -= (parseFloat(`${(airbnbstare ? 4 : 4) ^ 2}`));
         iconwatchnowX += parseFloat(`${parseInt(`${vietnamg}`) / (Math.max(3, 8))}`);
         break;
      }
      let customq = String.fromCharCode(114,54,52,98,99,49,49,0) == libavcodect;
      do {
         libavcodect = `${parseInt(`${trophyx}`) * showlessN.length}`;
         if (customq) {
            break;
         }
      } while (customq && (showlessN.length <= 1));
         libavcodect += `${parseInt(`${reportQ}`)}`;
         libavcodect += `${parseInt(`${reportQ}`)}`;
       let lineC = String.fromCharCode(101,120,112,101,114,105,109,101,110,116,95,51,95,54,50,0);
       let typingW = String.fromCharCode(99,111,109,112,111,115,101,100,95,101,95,51,0);
         typingW = `${lineC.length}`;
         owngoalT = [typingW.length];
      delegate_qG += (currenta.length >> (Math.min(2, Math.abs((reporty ? 4 : 2)))));
      if (iconsaveimager) {
         break;
      }
   } while ((!reporty) && iconsaveimager);
   for (let o = 0; o < 2; o++) {
      smallorangemang = `${(predictionactivez == String.fromCharCode(122,0) ? predictionactivez.length : parseInt(`${delegate_qG}`))}`;
   }
   while ((2 >> (Math.min(3, Math.abs(mbsplash6)))) < 4) {
      delegate_qG -= predictionactivez.length;
      break;
   }
    

      predictionactivez += `${parseInt(`${appleB}`)}`;
   let o_lockC = reporty ? !reporty : reporty;
   do {
      reporty = (mbsplash6 + appleB) == 94;
      if (o_lockC) {
         break;
      }
   } while (o_lockC && ((3 >> (Math.min(1, trophyE.length))) > 4 && !reporty));
      vignette6 = `${trophyE.length}`;
    

      other2 *= otherK.length & 3;
   while (appleB > mbsplash6) {
      mbsplash6 *= parseInt(`${delegate_qG}`);
      break;
   }
      mbsplash6 ^= currenta.length % 3;
    

   let abidetectA = reporty ? !reporty : reporty;
   do {
      reporty = otherK.length <= predictionactivez.length;
      if (abidetectA) {
         break;
      }
   } while (abidetectA && (reporty));
      trophyE = [1 & vignette6.length];
   for (let o = 0; o < 2; o++) {
       let config_ = String.fromCharCode(115,121,115,114,97,110,100,95,52,95,49,0);
       let debugP: Array<any> = [896, 210, 349];
       let headere = String.fromCharCode(116,108,115,95,107,95,53,56,0);
         headere = `${1 | headere.length}`;
       let livef = String.fromCharCode(97,115,102,99,114,121,112,116,95,97,95,57,48,0);
       let philippinesS = 4.0;
         debugP = [parseInt(`${philippinesS}`) ^ 1];
      for (let t = 0; t < 2; t++) {
         headere = `${headere.length}`;
      }
          let iconwatchnow4 = 1.0;
          let libavutilx: Map<any, any> = new Map([[String.fromCharCode(105,95,54,49,95,105,110,102,111,0),String.fromCharCode(110,101,108,108,121,95,99,95,51,49,0)], [String.fromCharCode(101,110,100,112,111,105,110,116,115,95,53,95,54,52,0),String.fromCharCode(97,98,115,108,95,105,95,49,50,0)], [String.fromCharCode(105,110,118,97,114,105,97,110,116,115,95,98,95,51,50,0),String.fromCharCode(117,95,49,95,101,110,99,114,121,112,116,0)]]);
          let window_cP = true;
         debugP.push(3 | parseInt(`${philippinesS}`));
         iconwatchnow4 -= parseFloat(`${2}`);
         libavutilx = new Map([[`${libavutilx.size}`, parseInt(`${iconwatchnow4}`) & libavutilx.size]]);
         window_cP = iconwatchnow4 == 21.3;
      for (let v = 0; v < 3; v++) {
          let mounting1: Map<any, any> = new Map([[String.fromCharCode(101,109,101,114,103,101,110,99,121,95,103,95,57,49,0),String.fromCharCode(103,95,54,51,95,97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,0)], [String.fromCharCode(121,95,53,56,95,102,111,114,101,109,97,110,0),String.fromCharCode(120,95,50,51,95,116,114,97,99,105,110,103,0)]]);
          let latn4 = 2.0;
         config_ = "3";
         mounting1 = new Map([[`${mounting1.size}`, parseInt(`${latn4}`)]]);
         latn4 -= parseInt(`${latn4}`);
      }
         livef = `${headere.length}`;
         livef = `${(String.fromCharCode(53,0) == headere ? headere.length : config_.length)}`;
      trophyE.push(config_.length - 2);
   }
    

   let drago = 6113204 <= predictionactivez.length;
   do {
      predictionactivez += `${((reporty ? 3 : 5) | parseInt(`${delegate_qG}`))}`;
      if (drago) {
         break;
      }
   } while (drago && (predictionactivez.endsWith(`${source6}`)));
       let controlst = 3;
          let traminiu = String.fromCharCode(100,95,54,48,95,117,112,108,111,97,100,97,98,108,101,0);
          let field6: Array<any> = [823, 974];
         controlst ^= field6.length;
         traminiu += `${traminiu.length - 3}`;
         field6.push(2);
       let yellowanimationliveB = String.fromCharCode(104,95,55,49,95,108,111,119,101,114,99,97,115,101,100,0);
      while (2 == (2 - controlst) && (controlst - yellowanimationliveB.length) == 2) {
         controlst <<= Math.min(5, Math.abs(2));
         break;
      }
      trophyE.push(trophyE.length);
   while (3 <= (2 / (Math.max(5, currenta.length))) || 4.15 <= (other2 + 3.79)) {
      currenta = [smallorangemang.length ^ 1];
      break;
   }
    

   while ((5 ^ currenta.length) >= 1 && (currenta.length ^ product2.size) >= 5) {
      product2.set(`${reporty}`, 2);
      break;
   }
      reporty = 28 < trophyE.length || predictionactivez == String.fromCharCode(116,0);
      mbsplash6 -= 1;
    

   let cast4 = predictionactivez.length >= 5745926;
   do {
       let leakcheckerG = String.fromCharCode(108,95,57,50,95,98,114,111,119,115,101,0);
      while (leakcheckerG == String.fromCharCode(88,0)) {
         leakcheckerG += "3";
         break;
      }
      while (leakcheckerG == String.fromCharCode(85,0)) {
         leakcheckerG += `${leakcheckerG.length + leakcheckerG.length}`;
         break;
      }
          let mountingk = String.fromCharCode(110,101,101,100,108,101,95,103,95,52,49,0);
          let iconrightorangeO: Array<any> = [957, 583, 698];
          let libfb8 = true;
         leakcheckerG += `${(iconrightorangeO.length ^ (libfb8 ? 5 : 5))}`;
         mountingk = `${3 % (Math.max(9, mountingk.length))}`;
         iconrightorangeO.push(2 & mountingk.length);
      predictionactivez += `${parseInt(`${other2}`) & 2}`;
      if (cast4) {
         break;
      }
   } while (cast4 && ((5 + parseInt(`${other2}`)) > 3 || (predictionactivez.length + other2) > 3.4));
   if (5 == (4 - vignette6.length) || 4.50 == (1.17 + libfollyc)) {
      vignette6 = `${2 >> (Math.min(5, currenta.length))}`;
   }
       let hongkongl: Map<any, any> = new Map([[String.fromCharCode(111,95,53,57,95,99,117,114,115,111,114,0),166], [String.fromCharCode(111,95,56,48,95,104,101,97,100,115,101,116,0),646], [String.fromCharCode(115,97,109,112,108,101,114,101,100,117,99,116,105,111,110,95,55,95,49,50,0),537]]);
       let found2: Map<any, any> = new Map([[String.fromCharCode(107,95,55,56,95,108,105,109,105,116,115,0),857], [String.fromCharCode(100,95,56,52,95,117,110,105,113,117,101,108,121,0),53], [String.fromCharCode(117,95,53,52,95,115,118,113,101,110,99,0),954]]);
       let controlP: Map<any, any> = new Map([[String.fromCharCode(104,95,56,95,100,112,116,114,115,0),792], [String.fromCharCode(115,112,97,109,95,105,95,52,53,0),99], [String.fromCharCode(103,95,53,55,95,114,101,115,105,122,101,0),693]]);
          let rocketr = String.fromCharCode(118,95,49,49,95,98,101,101,110,0);
         found2 = new Map([[`${hongkongl.size}`, 2]]);
         rocketr = "3";
       let otherZ = 4.0;
      let sortq = 7556109 <= hongkongl.size;
      do {
         hongkongl = new Map([[`${found2.size}`, found2.size << (Math.min(Math.abs(1), 2))]]);
         if (sortq) {
            break;
         }
      } while (sortq && (1 >= (hongkongl.size * parseInt(`${otherZ}`)) && (hongkongl.size * parseInt(`${otherZ}`)) >= 1));
       let theme_ = String.fromCharCode(107,95,53,51,95,112,114,101,104,97,115,104,0);
      if ((otherZ * 4.67) > 4.90 && (otherZ * found2.size) > 4.67) {
          let eactm = String.fromCharCode(103,101,116,112,95,98,95,49,51,0);
          let pingA = true;
          let libglogO = String.fromCharCode(114,95,52,95,101,95,54,53,0);
          let backgroundS = String.fromCharCode(97,116,116,114,115,95,107,95,49,48,48,0);
          let airbnbstarw = false;
         otherZ += backgroundS.length & 1;
         eactm = `${1 * eactm.length}`;
         pingA = !pingA;
         libglogO += `${(String.fromCharCode(73,0) == libglogO ? libglogO.length : eactm.length)}`;
         backgroundS += `${eactm.length}`;
         airbnbstarw = !pingA || libglogO.length > 75;
      }
         theme_ = `${theme_.length / (Math.max(2, found2.size))}`;
      if (3 == (theme_.length & 3) && 3 == (hongkongl.size & theme_.length)) {
         hongkongl = new Map([[theme_, parseInt(`${otherZ}`)]]);
      }
       let actionsm = String.fromCharCode(102,95,53,52,95,99,111,108,108,105,115,116,0);
       let awayteamfieldo = String.fromCharCode(116,105,109,105,110,103,115,95,97,95,57,49,0);
      let shootJ = 5227328 <= controlP.size;
      do {
         controlP.set(awayteamfieldo, found2.size << (Math.min(awayteamfieldo.length, 4)));
         if (shootJ) {
            break;
         }
      } while (shootJ && (1 > (actionsm.length % 5)));
      currenta.push(hongkongl.size << (Math.min(Math.abs(2), 1)));
    

      trophyE = [parseInt(`${appleB}`)];
   if (predictionactivez.length > 2) {
      product2 = new Map([[`${mbsplash6}`, vignette6.length / 1]]);
   }
   while ((5.15 * delegate_qG) > 5.56) {
      source6 = libfollyc > delegate_qG;
      break;
   }
    

   if (appleB <= 2.27) {
      appleB += 3;
   }
       let invitee = false;
      if (invitee) {
          let default_rn = String.fromCharCode(105,110,105,116,95,49,95,49,0);
          let penaltyshootw: Array<any> = [991, 314];
          let default_6k = 5;
          let star0 = 4.0;
          let statsm = 4.0;
         invitee = star0 >= 27.48 || 27.48 >= statsm;
         default_rn = "1";
         penaltyshootw = [default_6k];
         default_6k ^= 2;
         star0 *= (parseFloat(`${String.fromCharCode(52,0) == default_rn ? default_rn.length : default_6k}`));
         statsm -= 3;
      }
         invitee = (!invitee ? !invitee : !invitee);
      while (!invitee) {
         invitee = invitee || !invitee;
         break;
      }
      predictionactivez = `${currenta.length / (Math.max(2, 6))}`;
   let default_jw = 7429306.0 >= appleB;
   do {
       let w_countk = String.fromCharCode(102,95,49,53,95,105,110,105,116,105,97,116,101,0);
       let mbbanner3: Array<any> = [382, 290, 949];
       let completeH = String.fromCharCode(109,95,53,51,95,99,111,111,107,105,101,0);
      if (w_countk.startsWith(completeH)) {
         w_countk = `${completeH.length / (Math.max(w_countk.length, 9))}`;
      }
          let scrollviewM = 4;
         mbbanner3.push(scrollviewM);
         w_countk = `${w_countk.length}`;
         w_countk = `${mbbanner3.length * completeH.length}`;
       let minio = 1.0;
         w_countk += `${mbbanner3.length % 3}`;
      while ((mbbanner3.length * w_countk.length) == 4 && (4 * mbbanner3.length) == 5) {
         w_countk = `${w_countk.length}`;
         break;
      }
      for (let v = 0; v < 2; v++) {
         mbbanner3 = [1 / (Math.max(1, parseInt(`${minio}`)))];
      }
          let downloadinge: Map<any, any> = new Map([[String.fromCharCode(111,95,57,54,95,114,114,116,114,0),String.fromCharCode(115,95,53,50,95,117,110,97,114,99,104,105,118,101,100,0)], [String.fromCharCode(108,95,56,50,95,109,101,109,99,112,121,0),String.fromCharCode(112,95,50,50,0)], [String.fromCharCode(101,95,49,54,95,100,111,119,110,115,104,105,102,116,0),String.fromCharCode(112,111,108,105,99,105,101,115,95,117,95,48,0)]]);
          let trophyS: Array<any> = [732, 454, 7];
          let playW = String.fromCharCode(99,111,115,105,103,110,97,116,111,114,121,95,56,95,53,52,0);
         completeH += `${playW.length}`;
         downloadinge.set(`${trophyS.length}`, downloadinge.size % 3);
         trophyS = [trophyS.length];
         playW = `${downloadinge.size}`;
      appleB -= 3 % (Math.max(10, product2.size));
      if (default_jw) {
         break;
      }
   } while ((smallorangemang.length >= parseInt(`${appleB}`)) && default_jw);
    

      predictionactivez = `${parseInt(`${delegate_qG}`) / 2}`;
   let libswresampleS = other2 <= 7624668.0;
   do {
       let predictionbuttonm = String.fromCharCode(98,95,51,55,95,99,111,110,116,97,105,110,101,100,0);
       let tempnodatagifl = String.fromCharCode(115,117,98,109,105,116,116,101,100,95,105,95,51,48,0);
       let scorew = false;
         scorew = tempnodatagifl == predictionbuttonm;
         tempnodatagifl = `${tempnodatagifl.length}`;
       let robotoX = false;
       let zoome = true;
      let debugR = scorew ? !scorew : scorew;
      do {
         scorew = zoome;
         if (debugR) {
            break;
         }
      } while ((predictionbuttonm.endsWith(`${scorew}`)) && debugR);
      for (let l = 0; l < 2; l++) {
         tempnodatagifl = `${(1 << (Math.min(2, Math.abs((zoome ? 4 : 4)))))}`;
      }
         tempnodatagifl = `${((scorew ? 4 : 5) ^ tempnodatagifl.length)}`;
       let selectedf = String.fromCharCode(110,95,49,51,95,116,101,115,116,114,97,110,115,0);
      let xvodE = selectedf == String.fromCharCode(54,118,122,0);
      do {
         selectedf += `${predictionbuttonm.length}`;
         if (xvodE) {
            break;
         }
      } while ((1 > selectedf.length) && xvodE);
      while (predictionbuttonm.length > 1) {
         predictionbuttonm = `${((robotoX ? 1 : 4) + 3)}`;
         break;
      }
      other2 *= vignette6.length;
      if (libswresampleS) {
         break;
      }
   } while ((3 < (parseInt(`${other2}`) + mbsplash6) && 3 < (mbsplash6 + parseInt(`${other2}`))) && libswresampleS);
   for (let v = 0; v < 3; v++) {
       let hovere = String.fromCharCode(116,114,117,110,99,97,116,101,95,114,95,51,48,0);
       let greytick0 = 5.0;
      if (4 <= (4 * hovere.length) || 4 <= (hovere.length + 4)) {
         greytick0 -= parseFloat(`${1}`);
      }
      if (1.79 > (greytick0 * 1.39) && (parseFloat(`${hovere.length}`) * greytick0) > 1.39) {
         greytick0 -= parseFloat(`${1}`);
      }
      for (let k = 0; k < 1; k++) {
         greytick0 += parseFloat(`${parseInt(`${greytick0}`) >> (Math.min(Math.abs(1), 3))}`);
      }
      if (hovere.length > 5) {
         hovere = `${2 | hovere.length}`;
      }
         hovere = `${(hovere == String.fromCharCode(69,0) ? hovere.length : parseInt(`${greytick0}`))}`;
      for (let a = 0; a < 2; a++) {
         greytick0 -= parseFloat(`${hovere.length}`);
      }
      other2 *= product2.size;
   }

    fetchData(searchKeyword, true);

   for (let t = 0; t < 2; t++) {
      mbsplash6 <<= Math.min(smallorangemang.length, 1);
   }
   for (let c = 0; c < 3; c++) {
      source6 = other2 < 34.9;
   }
   let whatsappK = source6 ? !source6 : source6;
   do {
       let suggestionF = 3.0;
       let home8 = 0.0;
      if (home8 >= 1.99) {
          let suggestionW: Map<any, any> = new Map([[String.fromCharCode(103,95,55,50,95,103,101,116,115,111,99,107,111,112,116,0),String.fromCharCode(106,95,51,53,95,114,101,115,111,108,118,101,0)], [String.fromCharCode(115,105,122,101,114,95,104,95,52,57,0),String.fromCharCode(102,108,111,99,107,95,116,95,57,53,0)], [String.fromCharCode(105,95,50,49,95,103,97,109,97,0),String.fromCharCode(97,95,56,53,95,115,116,117,102,102,105,110,103,0)]]);
          let aboutY = 4.0;
          let componentregistryb = String.fromCharCode(105,110,100,105,99,97,116,111,114,115,95,101,95,54,57,0);
          let becomeT = String.fromCharCode(117,95,55,50,95,115,117,98,112,97,99,107,101,116,115,0);
         suggestionF /= Math.max(parseFloat(`${suggestionW.size + componentregistryb.length}`), 1);
         suggestionW.set(becomeT, 2);
         aboutY += becomeT.length + parseInt(`${aboutY}`);
         componentregistryb = `${parseInt(`${aboutY}`) << (Math.min(becomeT.length, 3))}`;
      }
      while (1.97 < (home8 - 5.90) || 5.90 < (suggestionF - home8)) {
         home8 -= parseInt(`${home8}`) << (Math.min(1, Math.abs(3)));
         break;
      }
      for (let b = 0; b < 3; b++) {
          let evente = true;
          let module3 = String.fromCharCode(103,95,55,52,95,100,101,115,105,114,101,100,0);
          let videovar9 = 2.0;
         suggestionF += parseFloat(`${module3.length}`);
         evente = !evente;
         module3 += `${2 % (Math.max(parseInt(`${videovar9}`), 4))}`;
         videovar9 += (parseInt(`${videovar9}`) % (Math.max(6, (evente ? 4 : 2))));
      }
      while (3.25 >= (suggestionF / 4.29)) {
          let chatroombackground2 = 5.0;
          let predictionbannersharedb = 0.0;
          let shootyesgoalz: Array<any> = [658, 986];
         suggestionF -= parseFloat(`${1}`);
         chatroombackground2 /= Math.max(5, parseFloat(`${1}`));
         predictionbannersharedb *= parseFloat(`${shootyesgoalz.length - 3}`);
         shootyesgoalz = [3 & shootyesgoalz.length];
         break;
      }
         home8 /= Math.max(parseInt(`${suggestionF}`), 5);
          let defaultfootballbgR = 2.0;
          let resultM = 1.0;
          let untickQ = 0.0;
         suggestionF *= parseFloat(`${parseInt(`${untickQ}`) / 2}`);
         defaultfootballbgR -= parseInt(`${resultM}`) - 1;
         resultM *= parseFloat(`${3 - parseInt(`${resultM}`)}`);
         untickQ -= parseFloat(`${2}`);
      source6 = parseFloat(`${mbsplash6}`) < suggestionF;
      if (whatsappK) {
         break;
      }
   } while ((source6) && whatsappK);
    dispatch(addSearchHistory(searchKeyword));
    setShowResults(!showResults);
  };

  const clearHistory = useCallback(() => {
       let i_hashv = 3.0;
    let mini3 = String.fromCharCode(114,101,99,111,114,100,95,104,95,50,57,0);
    let fulld = String.fromCharCode(109,95,51,57,95,99,108,99,112,0);
    let stationq = 0.0;
    let weatherV = String.fromCharCode(99,108,105,112,116,101,115,116,95,48,95,55,54,0);
    let resultx: Map<any, any> = new Map([[String.fromCharCode(108,111,117,100,115,112,101,97,107,101,114,95,116,95,56,49,0),583], [String.fromCharCode(100,105,115,99,111,110,110,101,99,116,101,100,95,99,95,54,54,0),835]]);
    let executorr: Array<any> = [String.fromCharCode(116,95,50,0), String.fromCharCode(102,105,110,100,110,101,116,95,54,95,50,0), String.fromCharCode(99,111,109,109,111,110,95,97,95,57,55,0)];
    let thailandh = String.fromCharCode(121,95,54,56,95,111,118,112,97,103,101,0);
    let zoomy: Map<any, any> = new Map([[String.fromCharCode(99,95,49,48,48,95,115,121,109,98,111,108,115,0),false ], [String.fromCharCode(102,95,49,49,95,109,97,120,100,98,115,0),false ], [String.fromCharCode(118,100,97,115,104,101,114,95,97,95,56,48,0),true ]]);
   if (parseFloat(`${mini3.length}`) > stationq) {
      mini3 = `${mini3.length}`;
   }
      executorr = [3 >> (Math.min(1, Math.abs(parseInt(`${i_hashv}`))))];
      i_hashv += fulld.length;
       let iconeditc = String.fromCharCode(120,95,51,53,95,109,117,108,115,117,98,0);
       let smallbrightnessc: Array<any> = [472, 503];
      while (!iconeditc.startsWith(`${smallbrightnessc.length}`)) {
         smallbrightnessc.push(smallbrightnessc.length);
         break;
      }
      let currentQ = 9394102 <= smallbrightnessc.length;
      do {
         smallbrightnessc = [smallbrightnessc.length];
         if (currentQ) {
            break;
         }
      } while ((2 == (iconeditc.length >> (Math.min(1, smallbrightnessc.length)))) && currentQ);
         smallbrightnessc.push(3);
         smallbrightnessc = [smallbrightnessc.length * 2];
      while ((smallbrightnessc.length + 3) >= 1 || 1 >= (3 + smallbrightnessc.length)) {
          let iconsharefriendsI = 0.0;
          let holderI = String.fromCharCode(115,116,97,103,101,95,99,95,49,0);
          let moduler = 4.0;
         iconeditc += `${iconeditc.length}`;
         iconsharefriendsI -= parseInt(`${moduler}`) << (Math.min(Math.abs(1), 2));
         holderI = `${3 << (Math.min(Math.abs(parseInt(`${iconsharefriendsI}`)), 4))}`;
         moduler *= holderI.length | parseInt(`${moduler}`);
         break;
      }
         smallbrightnessc.push(1);
      resultx.set(fulld, 1);
      weatherV += `${(mini3 == String.fromCharCode(120,0) ? mini3.length : thailandh.length)}`;
   for (let j = 0; j < 3; j++) {
      stationq /= Math.max(parseFloat(`${parseInt(`${i_hashv}`)}`), 3);
   }
   while (resultx.get(`${i_hashv}`) != null) {
      resultx.set(weatherV, resultx.size);
      break;
   }
   while (fulld.length >= 4) {
      fulld = "2";
      break;
   }
   let schedule3 = String.fromCharCode(111,51,117,56,104,95,0) == fulld;
   do {
      fulld = `${resultx.size | 1}`;
      if (schedule3) {
         break;
      }
   } while (((zoomy.size ^ 1) <= 5) && schedule3);
   for (let s = 0; s < 3; s++) {
       let twittern = false;
       let unselectedX = String.fromCharCode(116,95,57,51,95,117,110,101,109,112,116,121,0);
       let animationsn: Map<any, any> = new Map([[String.fromCharCode(112,95,51,48,95,105,109,112,111,114,116,115,0),157], [String.fromCharCode(114,101,112,108,97,99,101,115,95,120,95,51,55,0),247]]);
       let imagenomoredataU = String.fromCharCode(97,95,52,56,95,100,101,115,116,114,117,99,116,111,114,0);
      for (let e = 0; e < 3; e++) {
         unselectedX = `${((twittern ? 2 : 4) + unselectedX.length)}`;
      }
          let componentI = 3.0;
          let rightJ = String.fromCharCode(120,95,51,54,95,115,105,109,112,108,101,0);
         animationsn.set(`${componentI}`, 3);
         componentI += 2 * rightJ.length;
         rightJ += `${rightJ.length % (Math.max(1, 2))}`;
         imagenomoredataU = `${(unselectedX == String.fromCharCode(75,0) ? (twittern ? 3 : 2) : unselectedX.length)}`;
      while (imagenomoredataU.length < 1) {
          let awayiconU = 2.0;
         imagenomoredataU += `${(parseInt(`${awayiconU}`) - (twittern ? 5 : 4))}`;
         break;
      }
       let aboutS = 5;
       let cancelA = 2.0;
       let bgvipxvodM = 0.0;
         aboutS *= unselectedX.length ^ aboutS;
       let dycreatorm = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,100,97,116,97,95,109,95,51,56,0);
       let yellowscoreballX = String.fromCharCode(122,95,53,57,95,100,97,117,98,101,99,104,105,101,115,0);
          let rncoreu = false;
         twittern = imagenomoredataU.length <= animationsn.size;
         rncoreu = !rncoreu;
          let iconqqp = 5;
         unselectedX += `${dycreatorm.length + 1}`;
         iconqqp ^= 3;
          let internetT = String.fromCharCode(114,101,112,108,97,99,105,110,103,95,118,95,52,57,0);
          let predictionX: Array<any> = [String.fromCharCode(122,95,56,56,95,115,105,100,101,0), String.fromCharCode(106,95,49,53,95,97,110,109,114,0)];
          let shared7: Array<any> = [720, 871];
         unselectedX += `${1 * animationsn.size}`;
         internetT += "3";
         predictionX.push((String.fromCharCode(97,0) == internetT ? shared7.length : internetT.length));
         shared7 = [2];
         cancelA *= 3 * parseInt(`${bgvipxvodM}`);
      stationq *= (parseFloat(`${unselectedX == String.fromCharCode(70,0) ? unselectedX.length : parseInt(`${stationq}`)}`));
   }
   if (4 <= (2 ^ fulld.length) || 3 <= (2 ^ executorr.length)) {
      fulld += "3";
   }
   while ((4 ^ weatherV.length) < 4 || (parseInt(`${i_hashv}`) / (Math.max(8, weatherV.length))) < 4) {
      i_hashv *= (String.fromCharCode(120,0) == fulld ? fulld.length : zoomy.size);
      break;
   }
      resultx = new Map([[`${resultx.size}`, resultx.size / 1]]);
   for (let u = 0; u < 1; u++) {
      mini3 += "3";
   }
      weatherV += `${mini3.length}`;
   for (let b = 0; b < 2; b++) {
      executorr.push(zoomy.size & resultx.size);
   }

    dispatch(clearSearchHistory());
  }, []);

  
  const onClickSearchResult = useCallback(() => {
       let c_centern = String.fromCharCode(97,117,116,111,117,112,100,97,116,101,95,57,95,49,50,0);
    let basketballawayteamX: Array<any> = [286, 640];
    let clock1 = String.fromCharCode(109,101,114,103,101,97,98,108,101,95,112,95,52,57,0);
    let libyogaj = 0.0;
    let inviteI = String.fromCharCode(115,112,101,99,105,102,105,101,114,115,95,122,95,53,55,0);
    let encryptorW = String.fromCharCode(104,95,51,57,95,98,114,111,119,115,101,0);
    let with_dpq = false;
    let fieldl = String.fromCharCode(101,110,99,114,121,112,116,101,100,95,122,95,51,53,0);
    let scheduler1: Map<any, any> = new Map([[String.fromCharCode(119,95,54,56,95,99,111,108,108,101,99,116,105,111,110,0),710], [String.fromCharCode(117,110,113,117,97,110,116,95,105,95,53,48,0),892]]);
      basketballawayteamX.push(inviteI.length % (Math.max(2, basketballawayteamX.length)));
      with_dpq = encryptorW.length >= 28;
      with_dpq = inviteI.length < 92;
   while ((1 ^ basketballawayteamX.length) <= 5) {
      basketballawayteamX.push(inviteI.length);
      break;
   }
   while (4 == basketballawayteamX.length) {
       let whistleO = 3.0;
       let logoP = String.fromCharCode(122,95,49,56,95,114,101,115,116,114,105,99,116,105,111,110,0);
       let streamingN = String.fromCharCode(100,95,52,52,95,114,101,97,109,0);
         streamingN += `${streamingN.length}`;
      let signinupc = streamingN.length >= 8148208;
      do {
         streamingN += `${logoP.length}`;
         if (signinupc) {
            break;
         }
      } while (signinupc && (logoP != String.fromCharCode(80,0)));
          let successE = false;
         streamingN += `${(logoP == String.fromCharCode(71,0) ? logoP.length : parseInt(`${whistleO}`))}`;
         successE = !successE;
      for (let x = 0; x < 3; x++) {
         streamingN += `${parseInt(`${whistleO}`)}`;
      }
         logoP += `${streamingN.length}`;
         logoP += `${3 - parseInt(`${whistleO}`)}`;
      for (let q = 0; q < 1; q++) {
          let boot8: Array<any> = [544, 735];
          let videovarb = 5.0;
         whistleO *= parseFloat(`${boot8.length}`);
         boot8 = [parseInt(`${videovarb}`)];
      }
      for (let f = 0; f < 2; f++) {
          let template_mtD = 3;
          let referrerR = 5.0;
          let cricketH = 4;
         whistleO -= parseFloat(`${template_mtD | parseInt(`${referrerR}`)}`);
         template_mtD <<= Math.min(1, Math.abs(cricketH));
         referrerR *= cricketH - cricketH;
      }
      while (streamingN.startsWith(`${whistleO}`)) {
         whistleO -= parseFloat(`${2 - streamingN.length}`);
         break;
      }
      encryptorW += `${1 ^ encryptorW.length}`;
      break;
   }
      basketballawayteamX.push(parseInt(`${libyogaj}`));
      inviteI += `${basketballawayteamX.length}`;
       let config0 = 0.0;
       let cornerkickI = 4.0;
       let animations4 = false;
      let turndown_ = cornerkickI <= 9365908.0;
      do {
         cornerkickI /= Math.max(4, (parseFloat(`${(animations4 ? 1 : 5) + parseInt(`${cornerkickI}`)}`)));
         if (turndown_) {
            break;
         }
      } while (turndown_ && (4.9 < (config0 + cornerkickI) && (cornerkickI + 4.9) < 4.87));
      let hooks4 = animations4 ? !animations4 : animations4;
      do {
         animations4 = 23.6 > cornerkickI;
         if (hooks4) {
            break;
         }
      } while (hooks4 && (!animations4));
          let launcherM: Array<any> = [934, 10];
          let borderlessN = 3;
          let less3 = String.fromCharCode(112,95,55,95,115,104,105,109,109,101,114,0);
         config0 *= parseFloat(`${less3.length | borderlessN}`);
         launcherM = [launcherM.length ^ launcherM.length];
         borderlessN <<= Math.min(launcherM.length, 5);
          let iconuserG = String.fromCharCode(111,95,50,48,95,97,97,99,99,111,100,101,114,0);
         cornerkickI *= parseFloat(`${parseInt(`${config0}`) - iconuserG.length}`);
         cornerkickI += parseFloat(`${1}`);
      for (let s = 0; s < 1; s++) {
         cornerkickI += parseFloat(`${2 ^ parseInt(`${cornerkickI}`)}`);
      }
          let iconclosewhitewithbg0 = String.fromCharCode(115,117,98,109,105,116,116,101,100,95,104,95,56,0);
         cornerkickI *= parseFloat(`${parseInt(`${config0}`)}`);
         iconclosewhitewithbg0 = `${iconclosewhitewithbg0.length}`;
      if (animations4 && 2.13 > (cornerkickI / (Math.max(3.12, 5)))) {
         animations4 = 21.5 <= cornerkickI;
      }
         config0 -= parseFloat(`${parseInt(`${config0}`) | 3}`);
      inviteI += `${encryptorW.length / (Math.max(3, basketballawayteamX.length))}`;
      libyogaj += (parseFloat(`${c_centern == String.fromCharCode(86,0) ? inviteI.length : c_centern.length}`));
   for (let o = 0; o < 3; o++) {
      clock1 = `${encryptorW.length}`;
   }
   if (clock1.endsWith(`${with_dpq}`)) {
      clock1 = `${encryptorW.length & basketballawayteamX.length}`;
   }
       let emptye = false;
       let mutedz = 4.0;
       let verticali = 5.0;
      for (let v = 0; v < 1; v++) {
         verticali /= Math.max(5, parseFloat(`${parseInt(`${mutedz}`) * 1}`));
      }
          let description_gJ: Map<any, any> = new Map([[String.fromCharCode(104,115,99,114,111,108,108,95,108,95,49,48,0),347], [String.fromCharCode(98,117,115,121,95,97,95,51,0),698]]);
         verticali *= parseFloat(`${2 | parseInt(`${mutedz}`)}`);
         description_gJ.set(`${description_gJ.size}`, 1);
      if (5.16 > verticali) {
          let countryw: Map<any, any> = new Map([[String.fromCharCode(104,95,52,53,95,122,111,110,101,0),631], [String.fromCharCode(112,111,112,112,101,100,95,102,95,56,54,0),501], [String.fromCharCode(100,95,57,95,115,116,97,116,101,0),789]]);
          let playercommonN = 5.0;
          let rncore3 = 2;
          let moduler = String.fromCharCode(103,109,111,99,107,95,100,95,55,57,0);
          let panglee = 2.0;
         mutedz += parseFloat(`${rncore3 - 3}`);
         countryw.set(`${panglee}`, parseInt(`${panglee}`) * 1);
         playercommonN /= Math.max(4, parseInt(`${panglee}`));
         rncore3 %= Math.max(2, countryw.size >> (Math.min(5, Math.abs(parseInt(`${playercommonN}`)))));
         moduler = `${parseInt(`${panglee}`)}`;
      }
      while (verticali < 1.68 && (verticali / (Math.max(1.68, 10))) < 1.97) {
         verticali -= parseFloat(`${parseInt(`${mutedz}`) | 1}`);
         break;
      }
      let spinnerN = 5495140.0 <= mutedz;
      do {
         mutedz /= Math.max(3, parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${mutedz}`)), 4))}`));
         if (spinnerN) {
            break;
         }
      } while (spinnerN && ((2.94 * mutedz) > 1.59));
         mutedz /= Math.max(5, (parseFloat(`${parseInt(`${mutedz}`) & (emptye ? 3 : 1)}`)));
          let codegenB = 4.0;
          let yingn = String.fromCharCode(110,105,99,101,108,121,95,112,95,51,53,0);
          let draga = 2.0;
         verticali /= Math.max(4, parseFloat(`${1 + parseInt(`${verticali}`)}`));
         codegenB *= 2;
         yingn += `${yingn.length}`;
         draga *= parseFloat(`${3}`);
         mutedz += parseFloat(`${parseInt(`${verticali}`) | 2}`);
         mutedz /= Math.max(parseFloat(`${parseInt(`${verticali}`) * 1}`), 5);
      with_dpq = !with_dpq;
      basketballawayteamX = [(encryptorW == String.fromCharCode(68,0) ? inviteI.length : encryptorW.length)];
      basketballawayteamX.push((String.fromCharCode(113,0) == inviteI ? parseInt(`${libyogaj}`) : inviteI.length));
      with_dpq = basketballawayteamX.length >= fieldl.length;
   while (c_centern.includes(`${with_dpq}`)) {
      with_dpq = (fieldl.length % (Math.max(inviteI.length, 8))) > 40;
      break;
   }

    mayi_push.searchResultClicksAnalytics();
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
            source={require("@static/images/sharedImageReactnativeratings.gif")}
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
    color: "carouselLibreactnativejniLibsentry",
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
