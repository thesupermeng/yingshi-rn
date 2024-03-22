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
import umb_center_carousel from "../../../../Umeng/umb_center_carousel";
import { RCanvas } from "@api";

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

  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(
    ({ searchHistoryReducer }: PSmall) => searchHistoryReducer
  );
  const [isFetching, setisFetching] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { colors, textVariants, spacing, icons } = useTheme();

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
       let selectedC = 4;
    let chatM = String.fromCharCode(118,112,114,105,110,116,102,0);
    let default_0i = String.fromCharCode(97,118,111,105,100,0);
    let crossF = String.fromCharCode(112,114,101,102,101,114,95,104,95,53,48,0);
    let moduleF: Array<any> = [874, 632];
    let tempd = String.fromCharCode(100,95,50,56,95,115,116,97,116,117,115,101,115,0);
    let selection9: Map<any, any> = new Map([[String.fromCharCode(114,97,100,102,103,0),298], [String.fromCharCode(112,114,111,100,117,99,116,0),410], [String.fromCharCode(100,115,116,0),566]]);
    let adult4 = 0;
    let feedbackx = 2.0;
      default_0i = `${moduleF.length * tempd.length}`;
      default_0i += `${1 << (Math.min(4, Math.abs(selection9.size)))}`;

    let searchKeyword = placeholderSearch;

      default_0i += `${(default_0i == String.fromCharCode(68,0) ? selection9.size : default_0i.length)}`;
   if (crossF == default_0i) {
       let invite1 = String.fromCharCode(101,120,97,110,100,101,100,0);
       let downp = 1.0;
         downp /= Math.max(2, parseFloat(`${invite1.length | parseInt(`${downp}`)}`));
         invite1 = `${invite1.length}`;
         downp += parseFloat(`${parseInt(`${downp}`)}`);
         downp /= Math.max(5, parseFloat(`${invite1.length}`));
         downp /= Math.max(1, parseFloat(`${1}`));
      for (let n = 0; n < 2; n++) {
         downp += parseFloat(`${invite1.length}`);
      }
      default_0i = `${selection9.size}`;
   }

    if (search != "") {

   while ((chatM.length << (Math.min(4, Math.abs(selection9.size)))) == 1 && 1 == (chatM.length << (Math.min(5, Math.abs(selection9.size))))) {
      chatM = `${2 * moduleF.length}`;
      break;
   }
      crossF = `${tempd.length ^ 1}`;
      searchKeyword = search;
    }

    

      selectedC *= default_0i.length;
      adult4 <<= Math.min(2, chatM.length);
    

   for (let l = 0; l < 3; l++) {
       let interstitialT = String.fromCharCode(101,99,104,111,0);
       let popupp = String.fromCharCode(105,110,110,100,101,114,0);
          let bannerV = 2;
          let sendX = 1.0;
         popupp = `${parseInt(`${sendX}`) + 3}`;
         bannerV -= bannerV >> (Math.min(5, Math.abs(bannerV)));
         sendX /= Math.max(parseFloat(`${bannerV << (Math.min(Math.abs(2), 3))}`), 2);
          let bufferS = 4.0;
          let privacyA = String.fromCharCode(117,110,98,111,110,100,0);
          let abouts = String.fromCharCode(100,101,108,115,117,112,101,114,0);
         popupp = `${(String.fromCharCode(81,0) == interstitialT ? parseInt(`${bufferS}`) : interstitialT.length)}`;
         bufferS *= abouts.length % (Math.max(4, privacyA.length));
         privacyA = `${privacyA.length}`;
         abouts = `${abouts.length / 3}`;
      for (let o = 0; o < 1; o++) {
         interstitialT += `${interstitialT.length}`;
      }
      if (popupp != interstitialT) {
          let langB = String.fromCharCode(114,101,117,115,101,0);
          let aboutT = String.fromCharCode(99,101,108,108,115,95,109,95,55,52,0);
         interstitialT = `${langB.length}`;
         langB = "1";
         aboutT = `${aboutT.length}`;
      }
         interstitialT = `${3 * popupp.length}`;
       let tailm: Array<any> = [785, 711];
       let configurep: Array<any> = [182, 667];
      selection9 = new Map([[default_0i, popupp.length ^ default_0i.length]]);
   }
   while (!crossF.endsWith(`${selection9.size}`)) {
      selection9.set(crossF, crossF.length | moduleF.length);
      break;
   }
    

       let groupu = String.fromCharCode(118,111,119,101,108,0);
       let uploadm: Array<any> = [String.fromCharCode(98,105,116,118,101,99,116,111,114,0), String.fromCharCode(102,115,101,101,107,0)];
       let topicB = String.fromCharCode(114,111,112,115,116,101,110,0);
      while (2 < (5 | uploadm.length)) {
         uploadm = [1];
         break;
      }
         groupu = `${uploadm.length % 1}`;
         uploadm = [1 | topicB.length];
      for (let a = 0; a < 1; a++) {
         groupu = `${groupu.length % (Math.max(5, topicB.length))}`;
      }
          let buttonn = String.fromCharCode(114,101,112,101,97,116,101,114,0);
          let dropdown5 = 2.0;
          let tumbnailH = String.fromCharCode(99,97,99,97,0);
         topicB += `${uploadm.length & tumbnailH.length}`;
         buttonn = `${buttonn.length ^ 1}`;
         dropdown5 -= buttonn.length * 3;
         tumbnailH = "1";
      while (uploadm.length < 5) {
          let club6 = String.fromCharCode(111,110,101,115,99,97,108,101,0);
          let tailx = 4.0;
          let moduleFn = 0.0;
          let gemfileI = 3.0;
          let humidity7: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,115,116,97,109,112,101,100,0),true ], [String.fromCharCode(104,119,100,111,119,110,108,111,97,100,0),false ]]);
         topicB += `${humidity7.size}`;
         club6 += `${parseInt(`${gemfileI}`) | 2}`;
         tailx += parseInt(`${tailx}`) - 1;
         moduleFn += parseFloat(`${club6.length}`);
         gemfileI += parseFloat(`${parseInt(`${moduleFn}`) % (Math.max(parseInt(`${gemfileI}`), 3))}`);
         humidity7.set(`${tailx}`, club6.length * 2);
         break;
      }
         uploadm = [uploadm.length];
       let analytick = false;
      let stationsC = analytick ? !analytick : analytick;
      do {
         analytick = uploadm.includes(analytick);
         if (stationsC) {
            break;
         }
      } while (stationsC && (groupu.length > 1 || analytick));
      default_0i = `${parseInt(`${feedbackx}`)}`;
      feedbackx -= parseFloat(`${3 - tempd.length}`);
    

   while ((feedbackx / (Math.max(parseFloat(`${crossF.length}`), 5))) <= 4.52) {
      feedbackx /= Math.max(parseFloat(`${selectedC}`), 1);
      break;
   }
   for (let o = 0; o < 3; o++) {
       let fastX = 5.0;
          let overlayA: Array<any> = [String.fromCharCode(116,95,53,56,95,117,110,107,101,121,101,100,0), String.fromCharCode(97,98,115,101,105,108,0), String.fromCharCode(115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,95,119,95,56,50,0)];
         fastX *= parseFloat(`${2}`);
         overlayA = [overlayA.length];
          let lineQ = String.fromCharCode(102,105,102,111,115,95,50,95,57,56,0);
          let anythinkh = 2.0;
         fastX /= Math.max(5, parseFloat(`${lineQ.length}`));
         lineQ += "1";
         anythinkh *= parseFloat(`${parseInt(`${anythinkh}`) + parseInt(`${anythinkh}`)}`);
      while ((fastX + fastX) < 3.21 || 2.97 < (3.21 + fastX)) {
          let renewX = 3.0;
          let backwardh = false;
          let auto_35f: Map<any, any> = new Map([[String.fromCharCode(111,114,119,97,114,100,101,100,0),606], [String.fromCharCode(115,97,109,112,108,101,102,109,116,0),25]]);
         fastX -= parseFloat(`${1}`);
         renewX *= parseFloat(`${parseInt(`${renewX}`)}`);
         backwardh = renewX > 89.2;
         auto_35f.set(`${renewX}`, (parseInt(`${renewX}`) / (Math.max(4, (backwardh ? 4 : 2)))));
         break;
      }
      chatM = "1";
   }

    

   let j_title0 = crossF == String.fromCharCode(111,117,108,107,105,122,0);
   do {
      crossF = `${moduleF.length}`;
      if (j_title0) {
         break;
      }
   } while ((selectedC >= 3) && j_title0);
   for (let f = 0; f < 2; f++) {
      crossF += `${default_0i.length - 2}`;
   }
    

   while (2 <= (selection9.size ^ moduleF.length) || (moduleF.length ^ selection9.size) <= 2) {
       let dangerg: Map<any, any> = new Map([[String.fromCharCode(109,111,100,117,108,101,115,0),true ], [String.fromCharCode(99,104,97,114,97,99,116,101,114,105,115,116,105,99,115,0),false ]]);
       let control5 = String.fromCharCode(97,114,116,119,111,114,107,0);
       let a_titleh: Array<any> = [883, 373];
       let foundi = String.fromCharCode(109,97,120,120,0);
      while (foundi.includes(`${a_titleh.length}`)) {
          let usernameL = String.fromCharCode(115,111,108,118,101,100,0);
          let fast9 = 5;
         foundi += `${fast9 << (Math.min(Math.abs(2), 2))}`;
         usernameL = `${2 ^ usernameL.length}`;
         fast9 *= usernameL.length ^ usernameL.length;
         break;
      }
      for (let h = 0; h < 3; h++) {
         a_titleh = [a_titleh.length + 2];
      }
         control5 += `${(String.fromCharCode(54,0) == foundi ? foundi.length : a_titleh.length)}`;
         control5 = `${a_titleh.length - 2}`;
      if ((a_titleh.length << (Math.min(Math.abs(5), 3))) >= 4 || (a_titleh.length << (Math.min(Math.abs(5), 2))) >= 4) {
         a_titleh.push(1 + dangerg.size);
      }
      for (let a = 0; a < 3; a++) {
          let shoote = false;
          let temperature6 = 1;
         foundi += `${a_titleh.length}`;
         shoote = temperature6 == 21;
         temperature6 += temperature6 << (Math.min(2, Math.abs(3)));
      }
         foundi = `${control5.length & foundi.length}`;
          let register_vT = String.fromCharCode(118,105,115,105,98,105,108,105,116,105,116,101,115,0);
          let previewk = 3.0;
          let sharek = true;
         foundi += `${parseInt(`${previewk}`)}`;
         register_vT += "2";
         previewk -= register_vT.length;
      for (let a = 0; a < 3; a++) {
         control5 = `${control5.length & dangerg.size}`;
      }
       let countrya = true;
      while (3 == (a_titleh.length - 4) || a_titleh.length == 4) {
         a_titleh.push(((countrya ? 3 : 5) ^ dangerg.size));
         break;
      }
      for (let q = 0; q < 2; q++) {
         countrya = !countrya;
      }
      selection9.set(control5, a_titleh.length);
      break;
   }
   while (default_0i == String.fromCharCode(89,0)) {
      tempd += `${3 / (Math.max(10, parseInt(`${feedbackx}`)))}`;
      break;
   }
    

   while (chatM.endsWith(`${selectedC}`)) {
      chatM = `${chatM.length << (Math.min(3, Math.abs(selectedC)))}`;
      break;
   }
   if (chatM.length >= crossF.length) {
       let x_image0 = true;
       let helperE = String.fromCharCode(108,105,98,115,119,105,102,116,111,115,0);
       let banner2 = 5;
       let memberx = 4;
      for (let m = 0; m < 2; m++) {
         x_image0 = x_image0 && helperE.length > 67;
      }
       let constantsF = String.fromCharCode(100,111,119,110,108,105,110,107,0);
         memberx *= (String.fromCharCode(105,0) == constantsF ? constantsF.length : helperE.length);
      while (helperE.endsWith(`${x_image0}`)) {
          let hongkong7: Map<any, any> = new Map([[String.fromCharCode(114,95,49,48,48,95,100,97,116,97,108,0),true ], [String.fromCharCode(117,95,51,53,95,97,114,99,104,105,116,101,99,116,117,114,101,0),true ]]);
          let sideA = 5.0;
          let telegramw: Map<any, any> = new Map([[String.fromCharCode(97,110,116,105,99,111,108,108,97,112,115,101,0),String.fromCharCode(115,97,109,101,95,99,95,52,49,0)], [String.fromCharCode(101,118,97,108,102,117,110,99,0),String.fromCharCode(116,104,111,117,103,104,0)], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,111,95,56,54,0),String.fromCharCode(99,112,117,117,115,101,100,0)]]);
          let downloaderl: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,98,117,102,102,101,114,95,111,95,51,52,0),true ], [String.fromCharCode(109,115,109,112,101,103,100,97,116,97,0),true ], [String.fromCharCode(104,95,53,57,95,110,105,103,104,116,0),true ]]);
         x_image0 = downloaderl.size == 68;
         hongkong7 = new Map([[`${hongkong7.size}`, 1]]);
         sideA += parseFloat(`${parseInt(`${sideA}`) ^ 3}`);
         telegramw.set(`${sideA}`, 2 | parseInt(`${sideA}`));
         downloaderl = new Map([[`${telegramw.size}`, telegramw.size >> (Math.min(Math.abs(3), 3))]]);
         break;
      }
         x_image0 = constantsF == String.fromCharCode(115,0) && 63 == banner2;
      crossF += `${parseInt(`${feedbackx}`) ^ chatM.length}`;
   }
    

   while ((moduleF.length >> (Math.min(Math.abs(3), 5))) <= 4 || (tempd.length >> (Math.min(Math.abs(3), 4))) <= 5) {
      tempd = `${default_0i.length - crossF.length}`;
      break;
   }
      moduleF = [3];
    

   for (let i = 0; i < 3; i++) {
       let modityx: Map<any, any> = new Map([[String.fromCharCode(116,119,105,108,105,103,104,116,0),false ], [String.fromCharCode(109,111,99,107,105,110,103,0),false ], [String.fromCharCode(98,95,54,95,118,112,97,116,104,0),false ]]);
       let nativet = 3.0;
       let vignetteL = 2.0;
       let floatingd = 4.0;
       let untickx: Array<any> = [317, 139];
         floatingd *= parseFloat(`${parseInt(`${nativet}`)}`);
      if (modityx.size > 1) {
         modityx = new Map([[`${modityx.size}`, modityx.size % (Math.max(1, 6))]]);
      }
          let statsp = 5.0;
          let activex = String.fromCharCode(119,105,110,99,101,0);
         nativet *= modityx.size;
         statsp *= parseFloat(`${1 ^ parseInt(`${statsp}`)}`);
         activex = `${activex.length}`;
      for (let h = 0; h < 3; h++) {
         nativet -= parseInt(`${floatingd}`) | 3;
      }
      for (let y = 0; y < 2; y++) {
          let thumbnail9 = true;
          let projectE = 2.0;
          let predictionx: Array<any> = [470, 920, 34];
          let resendw = String.fromCharCode(105,95,51,54,95,99,97,112,116,117,114,101,0);
         vignetteL -= parseInt(`${nativet}`);
         thumbnail9 = projectE >= 70.46;
         projectE += parseInt(`${projectE}`);
         predictionx.push(parseInt(`${projectE}`));
         resendw = `${predictionx.length & parseInt(`${projectE}`)}`;
      }
          let filledo: Map<any, any> = new Map([[String.fromCharCode(122,101,114,111,118,0),false ], [String.fromCharCode(115,116,117,102,102,0),true ]]);
          let h_titleu = false;
          let verticalC = true;
         modityx = new Map([[`${h_titleu}`, ((h_titleu ? 5 : 5))]]);
         filledo = new Map([[`${filledo.size}`, filledo.size]]);
      if (untickx.length > modityx.size) {
         modityx = new Map([[`${untickx.length}`, untickx.length]]);
      }
       let fullK: Array<any> = [508, 215, 750];
      if (!untickx.includes(fullK.length)) {
         fullK.push(fullK.length | parseInt(`${nativet}`));
      }
          let settingsk = String.fromCharCode(112,117,114,112,111,115,101,102,117,108,0);
          let pressuref = 1;
          let firebasei: Array<any> = [490, 1000, 623];
         vignetteL /= Math.max(3, pressuref);
         settingsk += "1";
         pressuref %= Math.max(2, firebasei.length);
         firebasei.push(settingsk.length);
          let progressM = String.fromCharCode(109,117,108,120,0);
          let tickw = String.fromCharCode(114,101,110,100,101,114,95,106,95,50,56,0);
         nativet -= untickx.length >> (Math.min(Math.abs(1), 2));
         progressM += `${1 & progressM.length}`;
         tickw += `${(String.fromCharCode(69,0) == tickw ? tickw.length : progressM.length)}`;
       let trophya = 2;
       let phoner = 2;
         fullK.push(parseInt(`${nativet}`));
      for (let g = 0; g < 2; g++) {
         floatingd -= parseFloat(`${modityx.size}`);
      }
      let readX = 7575791.0 >= floatingd;
      do {
         floatingd -= parseFloat(`${parseInt(`${vignetteL}`)}`);
         if (readX) {
            break;
         }
      } while (((floatingd - 2.15) == 4.7) && readX);
      selection9 = new Map([[`${modityx.size}`, chatM.length + modityx.size]]);
   }
       let router6 = String.fromCharCode(97,116,116,114,0);
      if (router6.length <= router6.length) {
         router6 = `${router6.length}`;
      }
      while (5 > router6.length) {
         router6 = `${router6.length}`;
         break;
      }
          let screen6 = 4;
          let blacku = 2.0;
          let gesturesT = String.fromCharCode(99,111,108,108,97,116,105,110,103,0);
         router6 += "1";
         screen6 %= Math.max(gesturesT.length & screen6, 5);
         blacku *= parseFloat(`${parseInt(`${blacku}`)}`);
         gesturesT = `${gesturesT.length & 3}`;
      tempd = `${selectedC}`;
    

   while ((adult4 / (Math.max(1, 2))) > 2) {
      adult4 *= moduleF.length * tempd.length;
      break;
   }
       let rewindv = String.fromCharCode(103,97,112,0);
       let middlewareC: Map<any, any> = new Map([[String.fromCharCode(118,105,101,119,112,111,114,116,0),63], [String.fromCharCode(109,111,111,102,0),593], [String.fromCharCode(101,110,108,97,114,103,101,95,112,95,49,48,0),725]]);
       let source8 = 3.0;
      for (let g = 0; g < 2; g++) {
          let sourceA = 0.0;
          let searchbar5 = true;
          let editj: Array<any> = [762, 830, 768];
          let typingU = false;
          let catalogl: Array<any> = [String.fromCharCode(98,117,102,102,101,114,0), String.fromCharCode(109,105,115,115,101,100,0), String.fromCharCode(99,104,101,99,107,108,105,110,101,0)];
         source8 *= (parseFloat(`${String.fromCharCode(78,0) == rewindv ? rewindv.length : parseInt(`${sourceA}`)}`));
         sourceA -= ((typingU ? 5 : 5));
         searchbar5 = editj.includes(typingU);
         editj = [editj.length ^ 2];
         catalogl.push(2);
      }
      if (Array.from(middlewareC.keys()).includes(`${source8}`)) {
         middlewareC.set(rewindv, (rewindv == String.fromCharCode(116,0) ? parseInt(`${source8}`) : rewindv.length));
      }
      for (let i = 0; i < 2; i++) {
         middlewareC = new Map([[`${middlewareC.size}`, rewindv.length]]);
      }
      let moviesU = middlewareC.size <= 7811890;
      do {
          let episodeD = 4;
          let trasha = true;
          let movies4 = 5;
          let helper9 = 0.0;
         middlewareC = new Map([[`${movies4}`, 3]]);
         episodeD <<= Math.min(5, Math.abs(2));
         trasha = episodeD >= 29 || trasha;
         movies4 %= Math.max(1, episodeD - 2);
         helper9 /= Math.max(2 + parseInt(`${helper9}`), 5);
         if (moviesU) {
            break;
         }
      } while (moviesU && (rewindv.length > middlewareC.size));
      if (3 <= (middlewareC.size * parseInt(`${source8}`)) && 5 <= (middlewareC.size & 3)) {
          let selectedx = 0.0;
          let whatsappv = String.fromCharCode(108,105,103,104,116,101,110,105,110,103,0);
         middlewareC = new Map([[`${middlewareC.size}`, parseInt(`${selectedx}`)]]);
         selectedx -= whatsappv.length / (Math.max(whatsappv.length, 8));
      }
         source8 /= Math.max(2, parseFloat(`${middlewareC.size}`));
         source8 *= (parseFloat(`${rewindv == String.fromCharCode(88,0) ? parseInt(`${source8}`) : rewindv.length}`));
       let controlsP = true;
       let configurer = true;
      for (let h = 0; h < 1; h++) {
         configurer = 71 == middlewareC.size;
      }
      selection9.set(`${source8}`, 1 ^ parseInt(`${source8}`));
    

   for (let o = 0; o < 3; o++) {
       let trashj = 0;
       let promotiony = 0;
       let applez: Array<any> = [537, 560];
      let related_ = 5947420 <= applez.length;
      do {
          let result8 = 3;
          let containerA = 1.0;
          let robotoK = false;
          let middlewareP = String.fromCharCode(99,112,108,120,95,103,95,55,50,0);
         applez.push(3);
         result8 /= Math.max(5, 2 << (Math.min(2, middlewareP.length)));
         containerA *= parseFloat(`${parseInt(`${containerA}`)}`);
         robotoK = !robotoK;
         middlewareP = `${((robotoK ? 4 : 5))}`;
         if (related_) {
            break;
         }
      } while ((1 < (3 + applez.length) || 3 < (3 + promotiony)) && related_);
       let catagoryI = String.fromCharCode(111,117,112,117,116,95,110,95,51,53,0);
      if (3 >= (promotiony - applez.length) && 4 >= (3 - applez.length)) {
          let adultJ: Array<any> = [847, 146];
          let referrera = 3.0;
          let routerJ = true;
          let scoreP = String.fromCharCode(116,104,101,0);
          let borderlessr = 4;
         promotiony ^= scoreP.length;
         adultJ.push(3 * parseInt(`${referrera}`));
         referrera *= borderlessr << (Math.min(4, Math.abs(1)));
         routerJ = parseInt(`${referrera}`) <= adultJ.length;
         scoreP = `${borderlessr * adultJ.length}`;
      }
         promotiony ^= applez.length;
          let umengn = String.fromCharCode(112,114,111,98,97,98,105,108,105,116,121,0);
          let reduceru = String.fromCharCode(109,111,110,111,119,104,105,116,101,0);
         applez.push(1 * trashj);
         umengn = `${umengn.length}`;
         reduceru += `${reduceru.length & umengn.length}`;
       let macauL = String.fromCharCode(100,101,103,114,97,100,101,100,0);
         macauL += `${applez.length ^ 2}`;
       let malaysiac = 3.0;
      if (malaysiac > 5.44) {
         malaysiac *= parseFloat(`${promotiony >> (Math.min(Math.abs(3), 4))}`);
      }
      default_0i = `${(String.fromCharCode(89,0) == crossF ? adult4 : crossF.length)}`;
   }
      default_0i += `${default_0i.length}`;
    

   if (tempd.endsWith(`${crossF.length}`)) {
      crossF = `${selection9.size * parseInt(`${feedbackx}`)}`;
   }
      feedbackx += parseFloat(`${1 << (Math.min(Math.abs(adult4), 5))}`);
    

   while (5 > tempd.length) {
       let downloading1 = 5.0;
       let screenr: Array<any> = [821, 484];
          let producte = false;
          let constantsn = String.fromCharCode(97,103,114,101,101,109,101,110,116,0);
         screenr = [parseInt(`${downloading1}`) - 3];
         producte = (28 < ((producte ? 28 : constantsn.length) % (Math.max(9, constantsn.length))));
          let bellx = 4;
          let condensedG = 1;
         screenr = [screenr.length >> (Math.min(Math.abs(1), 4))];
         bellx += condensedG;
         condensedG /= Math.max(bellx, 3);
         screenr.push(3);
      for (let d = 0; d < 3; d++) {
         screenr.push(parseInt(`${downloading1}`));
      }
          let controln = false;
         downloading1 /= Math.max(screenr.length & 1, 3);
         controln = !controln && !controln;
      if ((downloading1 / 2.40) < 1.34) {
         downloading1 /= Math.max(screenr.length ^ 2, 4);
      }
      default_0i += `${1 * screenr.length}`;
      break;
   }
   for (let n = 0; n < 1; n++) {
      adult4 -= adult4 * 3;
   }
    

    fetchData(searchKeyword, true);
    dispatch(addSearchHistory(searchKeyword));
    setShowResults(!showResults);
  };

  const clearHistory = useCallback(() => {
       let countdowno = String.fromCharCode(98,101,99,97,117,115,101,95,114,95,54,57,0);
    let rightc = String.fromCharCode(100,116,115,104,100,0);
    let minimize2: Array<any> = [862, 856, 560];
    let line9 = true;
    let update_ljU: Array<any> = [String.fromCharCode(110,101,105,103,104,98,111,114,105,110,103,0), String.fromCharCode(97,116,116,0), String.fromCharCode(100,101,115,105,114,101,100,0)];
    let loadingu = 3.0;
    let historyI = true;
    let smallx = String.fromCharCode(102,102,109,109,97,108,0);
    let pointl = String.fromCharCode(97,108,105,103,110,101,114,0);
    let greenW: Array<any> = [466, 393, 807];
    let countryI = true;
   for (let f = 0; f < 3; f++) {
      rightc += `${minimize2.length ^ 1}`;
   }
   for (let f = 0; f < 3; f++) {
      update_ljU.push(3);
   }
       let xvodH = 5.0;
       let progressI: Array<any> = [146, 169];
       let countryn: Map<any, any> = new Map([[String.fromCharCode(108,95,55,49,95,98,105,110,97,115,99,105,105,0),134], [String.fromCharCode(113,115,99,97,108,101,98,105,116,115,95,108,95,57,54,0),94], [String.fromCharCode(114,101,102,108,101,99,116,0),558]]);
      for (let c = 0; c < 1; c++) {
         countryn = new Map([[`${countryn.size}`, countryn.size >> (Math.min(Math.abs(2), 5))]]);
      }
          let rightp = true;
          let setting3 = false;
         countryn.set(`${xvodH}`, parseInt(`${xvodH}`) << (Math.min(1, Math.abs(3))));
         rightp = (rightp ? !setting3 : rightp);
         setting3 = rightp;
      if (3 > (progressI.length & countryn.size)) {
          let handler_: Map<any, any> = new Map([[String.fromCharCode(102,111,114,109,97,116,116,101,114,115,95,53,95,52,54,0),false ], [String.fromCharCode(109,111,110,111,116,111,110,105,116,121,0),true ], [String.fromCharCode(102,111,114,109,97,116,0),false ]]);
         countryn = new Map([[`${handler_.size}`, handler_.size & countryn.size]]);
      }
      while (Array.from(countryn.keys()).includes(`${progressI.length}`)) {
          let castr = String.fromCharCode(99,108,117,116,0);
          let styleK: Array<any> = [321, 400, 779];
          let mathx = 1;
          let ajaxH = true;
         progressI.push(3);
         castr += "2";
         styleK = [castr.length];
         mathx %= Math.max(castr.length, 4);
         ajaxH = String.fromCharCode(107,0) == castr && styleK.length <= 78;
         break;
      }
      if (!progressI.includes(xvodH)) {
         xvodH += parseInt(`${xvodH}`) >> (Math.min(Math.abs(countryn.size), 4));
      }
      let delegate_l4L = 9825114 >= progressI.length;
      do {
         progressI.push(progressI.length / (Math.max(2, 3)));
         if (delegate_l4L) {
            break;
         }
      } while (delegate_l4L && (1.82 < xvodH));
       let scheduleF: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,100,111,109,0),931], [String.fromCharCode(116,101,109,112,115,95,117,95,49,53,0),114]]);
      let backE = 5310070 <= countryn.size;
      do {
         countryn = new Map([[`${countryn.size}`, countryn.size]]);
         if (backE) {
            break;
         }
      } while (backE && (countryn.get(`${xvodH}`) == null));
      let policyf = 7626372 <= scheduleF.size;
      do {
         scheduleF.set(`${progressI.length}`, 1);
         if (policyf) {
            break;
         }
      } while (policyf && ((progressI.length | 5) >= 1));
      update_ljU = [3 + parseInt(`${loadingu}`)];
       let catalogy = String.fromCharCode(117,118,114,100,0);
       let tailj = String.fromCharCode(100,105,118,105,100,101,100,0);
         catalogy = "2";
         catalogy = `${(String.fromCharCode(79,0) == catalogy ? catalogy.length : tailj.length)}`;
      let o_viewV = catalogy == String.fromCharCode(111,114,116,98,99,112,110,49,109,52,0);
      do {
         catalogy += `${2 << (Math.min(5, tailj.length))}`;
         if (o_viewV) {
            break;
         }
      } while (o_viewV && (catalogy.startsWith(`${tailj.length}`)));
          let carouselK = 4.0;
          let fillH = 2.0;
          let orangeP = 2.0;
         catalogy += `${parseInt(`${carouselK}`) << (Math.min(catalogy.length, 4))}`;
         carouselK -= parseInt(`${orangeP}`);
         fillH *= parseFloat(`${parseInt(`${orangeP}`)}`);
      while (!catalogy.endsWith(`${tailj.length}`)) {
         catalogy = `${(tailj == String.fromCharCode(69,0) ? catalogy.length : tailj.length)}`;
         break;
      }
      let projectn = tailj == String.fromCharCode(97,107,95,101,95,109,116,118,104,0);
      do {
          let diceC = String.fromCharCode(97,114,103,120,105,0);
          let chinaw = 5.0;
         tailj = `${parseInt(`${chinaw}`)}`;
         diceC = `${diceC.length | 3}`;
         chinaw -= 1 + diceC.length;
         if (projectn) {
            break;
         }
      } while ((catalogy != String.fromCharCode(122,0)) && projectn);
      loadingu -= minimize2.length;
       let videot = 4.0;
      if (2.70 < videot) {
         videot += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${videot}`)), 2))}`);
      }
      while ((videot / (Math.max(videot, 6))) == 3.64 && 3.38 == (3.64 / (Math.max(5, videot)))) {
          let loginD = 1.0;
          let relatedS = 2.0;
          let stationd = 1;
          let tailT = 5;
         videot /= Math.max(parseFloat(`${3 * parseInt(`${videot}`)}`), 4);
         loginD -= parseFloat(`${stationd << (Math.min(Math.abs(2), 5))}`);
         relatedS /= Math.max(tailT, 1);
         stationd %= Math.max(4, tailT ^ parseInt(`${loginD}`));
         break;
      }
          let photow = 5;
         videot += parseFloat(`${3}`);
         photow <<= Math.min(Math.abs(3), 5);
      rightc += `${pointl.length - 1}`;
      loadingu += smallx.length;
       let n_centerC: Map<any, any> = new Map([[String.fromCharCode(115,116,114,116,111,107,95,97,95,57,48,0),false ], [String.fromCharCode(112,114,111,112,115,0),true ], [String.fromCharCode(103,102,109,117,108,0),false ]]);
       let submity = 2.0;
       let episodeX = String.fromCharCode(102,105,114,101,119,97,108,108,0);
         n_centerC = new Map([[episodeX, parseInt(`${submity}`) % (Math.max(episodeX.length, 2))]]);
      let whistlec = submity >= 7019038.0;
      do {
          let movies9: Map<any, any> = new Map([[String.fromCharCode(99,95,52,56,95,118,105,101,119,101,100,0),false ], [String.fromCharCode(108,117,109,97,0),true ], [String.fromCharCode(119,116,118,102,105,108,101,0),true ]]);
          let phone3 = String.fromCharCode(115,111,99,111,110,110,101,99,116,0);
          let internetv: Array<any> = [String.fromCharCode(114,101,100,97,99,116,95,53,95,52,54,0), String.fromCharCode(104,95,56,53,95,109,111,118,105,110,103,0), String.fromCharCode(104,108,105,110,101,0)];
          let connectionL = String.fromCharCode(112,103,115,122,95,115,95,53,48,0);
         submity /= Math.max(parseFloat(`${internetv.length & 2}`), 1);
         movies9 = new Map([[`${movies9.size}`, movies9.size % 2]]);
         phone3 = `${3 ^ phone3.length}`;
         internetv = [1];
         connectionL += `${phone3.length}`;
         if (whistlec) {
            break;
         }
      } while ((n_centerC.size == 4) && whistlec);
      for (let m = 0; m < 3; m++) {
          let roomY: Map<any, any> = new Map([[String.fromCharCode(108,101,97,102,0),853], [String.fromCharCode(116,105,109,101,99,111,100,101,115,0),229]]);
          let bufferh = String.fromCharCode(103,111,111,100,95,109,95,56,50,0);
         episodeX = `${3 << (Math.min(3, episodeX.length))}`;
         roomY.set(`${bufferh}`, (String.fromCharCode(88,0) == bufferh ? roomY.size : bufferh.length));
      }
       let expandn: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,99,101,112,116,0),false ], [String.fromCharCode(99,101,110,116,114,97,108,105,116,121,95,105,95,54,0),false ], [String.fromCharCode(114,101,115,97,109,112,0),true ]]);
         submity += parseFloat(`${n_centerC.size}`);
         episodeX = "2";
         episodeX = `${2 << (Math.min(2, Math.abs(parseInt(`${submity}`))))}`;
         submity /= Math.max(5, parseFloat(`${episodeX.length + expandn.size}`));
         expandn.set(`${submity}`, n_centerC.size + 2);
      pointl = "3";
   if (!line9) {
      minimize2.push(parseInt(`${loadingu}`));
   }
   let tempd = smallx.length >= 9152986;
   do {
      smallx += "1";
      if (tempd) {
         break;
      }
   } while (tempd && (smallx.length >= 1));
   let group9 = countdowno.length >= 7113455;
   do {
      countdowno += `${((historyI ? 2 : 1) + parseInt(`${loadingu}`))}`;
      if (group9) {
         break;
      }
   } while (((3 * countdowno.length) == 1 || 3 == (countdowno.length * 3)) && group9);
   let launchX = countdowno == String.fromCharCode(112,110,98,107,105,0);
   do {
       let typesO = false;
      if (!typesO && typesO) {
         typesO = (!typesO ? typesO : !typesO);
      }
          let backgroundp = false;
          let privilegeg = 4;
         typesO = 32 < privilegeg;
         backgroundp = !backgroundp;
         privilegeg /= Math.max(((backgroundp ? 2 : 2) >> (Math.min(3, Math.abs((backgroundp ? 1 : 4))))), 5);
         typesO = (!typesO ? typesO : !typesO);
      countdowno += "1";
      if (launchX) {
         break;
      }
   } while ((!smallx.includes(countdowno)) && launchX);
   for (let s = 0; s < 1; s++) {
       let bingn = String.fromCharCode(97,95,52,55,95,118,97,114,121,0);
       let ticked5 = 5.0;
          let upgradej = String.fromCharCode(108,112,99,108,115,112,0);
          let ecopy__h7 = true;
         bingn = `${(String.fromCharCode(95,0) == upgradej ? bingn.length : upgradej.length)}`;
         ecopy__h7 = ecopy__h7 || ecopy__h7;
      for (let t = 0; t < 1; t++) {
         ticked5 *= parseFloat(`${bingn.length % 1}`);
      }
         bingn += `${bingn.length}`;
          let episodesZ = false;
         ticked5 *= (parseFloat(`${(episodesZ ? 3 : 2) * parseInt(`${ticked5}`)}`));
       let thumbnailV: Map<any, any> = new Map([[String.fromCharCode(99,117,108,115,104,105,102,116,0),String.fromCharCode(100,95,52,95,100,105,97,108,111,103,0)], [String.fromCharCode(105,109,112,108,101,109,101,110,116,115,0),String.fromCharCode(115,108,97,115,104,105,110,103,0)]]);
          let reminderC = 1.0;
          let xvodM: Array<any> = [863, 115, 656];
          let sharedt = String.fromCharCode(105,110,115,116,97,108,108,115,0);
         bingn += `${parseInt(`${ticked5}`)}`;
         reminderC += xvodM.length + parseInt(`${reminderC}`);
         xvodM = [2 + xvodM.length];
         sharedt = `${xvodM.length}`;
      update_ljU.push(2);
   }
      line9 = minimize2.includes(line9);
      pointl += `${smallx.length}`;
      loadingu -= 2 << (Math.min(2, minimize2.length));
       let pausez: Array<any> = [198, 986, 527];
       let moonA = 2.0;
       let theme3 = 3;
      for (let s = 0; s < 3; s++) {
          let scoreh: Map<any, any> = new Map([[String.fromCharCode(112,114,111,103,114,97,109,115,95,49,95,51,50,0),false ], [String.fromCharCode(117,118,118,101,114,116,105,99,97,108,0),false ]]);
          let stringd = String.fromCharCode(102,97,114,101,110,100,0);
         theme3 += 3;
         scoreh = new Map([[`${scoreh.size}`, scoreh.size]]);
         stringd += `${scoreh.size}`;
      }
         moonA += parseFloat(`${parseInt(`${moonA}`) % 3}`);
         pausez = [2 & parseInt(`${moonA}`)];
      while (moonA >= 2.90) {
         moonA += parseFloat(`${parseInt(`${moonA}`) % (Math.max(pausez.length, 6))}`);
         break;
      }
       let dragP = String.fromCharCode(111,95,52,53,95,113,117,101,114,121,0);
         pausez = [(dragP == String.fromCharCode(111,0) ? parseInt(`${moonA}`) : dragP.length)];
         pausez = [dragP.length];
         pausez = [dragP.length];
      while ((pausez.length + parseInt(`${moonA}`)) == 3 && (3.45 + moonA) == 2.57) {
         moonA *= (parseFloat(`${String.fromCharCode(88,0) == dragP ? theme3 : dragP.length}`));
         break;
      }
      pointl = `${pointl.length}`;
   while (!smallx.startsWith(`${loadingu}`)) {
       let tick7 = 0.0;
       let dangerw = String.fromCharCode(108,114,111,110,100,0);
      if (2.33 >= (parseFloat(`${dangerw.length}`) * tick7)) {
          let episodesj = 0.0;
          let sidex: Array<any> = [887, 925, 460];
          let shrinkx = 5.0;
         dangerw += `${dangerw.length}`;
         episodesj /= Math.max(parseFloat(`${sidex.length}`), 2);
         sidex = [parseInt(`${episodesj}`) | 3];
         shrinkx -= parseInt(`${shrinkx}`) & 2;
      }
         dangerw = `${parseInt(`${tick7}`)}`;
          let plashT = 1;
          let subsL = 5.0;
          let shootm = String.fromCharCode(102,108,111,99,107,95,121,95,52,53,0);
         tick7 *= parseFloat(`${parseInt(`${subsL}`)}`);
         plashT >>= Math.min(Math.abs(plashT), 2);
         subsL /= Math.max(1, (shootm == String.fromCharCode(113,0) ? plashT : shootm.length));
       let video2 = 5.0;
       let black9 = 2.0;
         black9 += parseFloat(`${parseInt(`${black9}`) << (Math.min(Math.abs(parseInt(`${video2}`)), 1))}`);
       let dataT: Array<any> = [538, 375, 857];
       let placementK: Array<any> = [String.fromCharCode(110,111,105,115,101,115,0), String.fromCharCode(120,95,50,48,95,105,110,116,112,0), String.fromCharCode(97,115,110,0)];
      loadingu /= Math.max(2, parseInt(`${loadingu}`) * 1);
      break;
   }
   while (smallx.startsWith(`${line9}`)) {
      smallx += `${(String.fromCharCode(121,0) == rightc ? rightc.length : minimize2.length)}`;
      break;
   }
   if (3 >= (smallx.length % (Math.max(7, update_ljU.length))) && (smallx.length % 3) >= 2) {
       let updatesb = String.fromCharCode(101,97,105,100,99,116,0);
      for (let w = 0; w < 1; w++) {
          let referrerA = String.fromCharCode(101,110,116,114,121,112,111,105,110,116,0);
          let sportsd: Array<any> = [764, 231];
          let terms6: Map<any, any> = new Map([[String.fromCharCode(122,95,50,52,95,118,97,114,105,97,100,105,99,0),203], [String.fromCharCode(102,95,54,95,115,101,116,115,0),367]]);
         updatesb += `${terms6.size % 2}`;
         referrerA += `${referrerA.length % (Math.max(7, sportsd.length))}`;
         sportsd.push(3 + referrerA.length);
         terms6 = new Map([[`${sportsd.length}`, 1]]);
      }
       let teamd: Map<any, any> = new Map([[String.fromCharCode(112,97,115,112,0),true ], [String.fromCharCode(101,114,114,0),false ]]);
       let ynewsS: Map<any, any> = new Map([[String.fromCharCode(99,108,111,115,101,115,0),false ], [String.fromCharCode(109,97,110,97,103,101,97,98,108,101,0),true ], [String.fromCharCode(104,95,52,95,99,117,98,101,100,0),false ]]);
       let profilew = 3.0;
       let h_centerT = 3.0;
      update_ljU.push(updatesb.length);
   }
   if (!historyI) {
       let controlk: Array<any> = [116, 329];
       let viewsm = false;
       let activeh: Map<any, any> = new Map([[String.fromCharCode(115,111,110,101,119,99,111,110,110,95,107,95,51,53,0),829], [String.fromCharCode(114,95,50,57,95,99,104,97,110,103,101,100,0),27], [String.fromCharCode(116,115,99,99,0),228]]);
       let streamingo = false;
      while (viewsm) {
         viewsm = streamingo;
         break;
      }
      for (let b = 0; b < 3; b++) {
         activeh = new Map([[`${activeh.size}`, (3 + (streamingo ? 2 : 4))]]);
      }
      for (let x = 0; x < 2; x++) {
         activeh = new Map([[`${activeh.size}`, activeh.size]]);
      }
         controlk = [(3 / (Math.max(1, (viewsm ? 3 : 5))))];
         viewsm = controlk.includes(viewsm);
         activeh = new Map([[`${controlk.length}`, controlk.length >> (Math.min(Math.abs(3), 4))]]);
         activeh = new Map([[`${activeh.size}`, 2 & controlk.length]]);
         controlk = [((viewsm ? 1 : 1) * 2)];
          let less_ = 0;
         controlk.push(((viewsm ? 2 : 3) | 2));
         less_ *= less_ * less_;
      let anytimeG = activeh.size <= 5796536;
      do {
         activeh.set(`${viewsm}`, 2);
         if (anytimeG) {
            break;
         }
      } while (anytimeG && (4 <= (4 ^ activeh.size) && !viewsm));
          let bingV = false;
          let navigationv = true;
         controlk.push(((bingV ? 4 : 1) / 2));
         bingV = !navigationv;
       let textL = String.fromCharCode(107,95,56,95,100,101,102,108,97,116,101,0);
       let thailandL = String.fromCharCode(103,97,109,101,115,0);
      smallx = `${controlk.length ^ 2}`;
   }
   for (let a = 0; a < 1; a++) {
      update_ljU = [((historyI ? 2 : 2) * countdowno.length)];
   }
      rightc += `${(String.fromCharCode(90,0) == pointl ? (historyI ? 4 : 5) : pointl.length)}`;

    dispatch(clearSearchHistory());
  }, []);

  
  const onClickSearchResult = useCallback(() => {
       let controlE = String.fromCharCode(115,95,52,50,95,109,117,114,109,117,114,0);
    let submit1: Array<any> = [450, 957, 458];
    let selectionC = 3.0;
    let queste = 0.0;
    let arrowV = String.fromCharCode(112,108,117,103,105,110,95,105,95,57,53,0);
    let album7 = String.fromCharCode(114,101,116,117,114,110,0);
    let floater7 = 5.0;
    let confirmation_ = String.fromCharCode(112,95,52,50,95,117,110,105,99,111,100,101,0);
    let hookT = String.fromCharCode(111,112,117,115,116,97,98,0);
    let handleri = String.fromCharCode(99,111,109,112,97,114,101,112,111,119,0);
    let scheduleF: Array<any> = [264, 678, 861];
   while ((5 + arrowV.length) > 2) {
      floater7 -= parseFloat(`${parseInt(`${floater7}`)}`);
      break;
   }
   let alert_ = album7 == String.fromCharCode(122,118,104,99,107,103,112,0);
   do {
       let downloaderr: Map<any, any> = new Map([[String.fromCharCode(110,95,57,54,95,100,110,115,0),922], [String.fromCharCode(121,100,97,121,95,51,95,57,53,0),560], [String.fromCharCode(98,105,116,115,0),248]]);
       let trophyN = 2.0;
       let datam: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,95,113,95,57,54,0),512], [String.fromCharCode(99,117,114,115,111,114,0),439]]);
       let circleN = String.fromCharCode(106,95,55,55,95,122,101,114,111,118,0);
       let zhubo4 = String.fromCharCode(117,95,51,52,95,115,97,105,111,0);
         zhubo4 += `${downloaderr.size}`;
      while (5 <= zhubo4.length) {
          let updatesj = String.fromCharCode(111,112,116,97,114,103,0);
          let blacks = 3.0;
         zhubo4 = `${(updatesj == String.fromCharCode(50,0) ? parseInt(`${blacks}`) : updatesj.length)}`;
         break;
      }
      for (let n = 0; n < 3; n++) {
         trophyN += parseFloat(`${2 - zhubo4.length}`);
      }
         datam.set(`${trophyN}`, parseInt(`${trophyN}`));
         trophyN -= parseFloat(`${datam.size}`);
      let pageC = 6083738 <= datam.size;
      do {
          let acceptedW = 0.0;
          let hongkongM = String.fromCharCode(101,95,50,52,95,102,105,108,116,101,114,0);
          let splashE = String.fromCharCode(115,95,49,56,0);
         datam = new Map([[circleN, 3]]);
         acceptedW += parseFloat(`${1 & hongkongM.length}`);
         hongkongM = `${parseInt(`${acceptedW}`)}`;
         splashE += `${splashE.length}`;
         if (pageC) {
            break;
         }
      } while ((!Array.from(datam.keys()).includes(`${downloaderr.size}`)) && pageC);
       let viewsH = String.fromCharCode(97,95,49,48,95,115,110,97,112,112,101,100,0);
       let plusg = String.fromCharCode(104,95,57,52,95,114,101,102,101,114,114,101,114,0);
      if (!viewsH.includes(`${downloaderr.size}`)) {
          let typesX = String.fromCharCode(116,101,109,112,111,114,97,114,105,108,121,95,51,95,50,49,0);
          let closeW: Map<any, any> = new Map([[String.fromCharCode(115,105,122,101,114,0),595], [String.fromCharCode(116,100,101,99,111,100,101,0),498]]);
          let blacklistH: Map<any, any> = new Map([[String.fromCharCode(112,105,116,99,104,95,54,95,54,50,0),734], [String.fromCharCode(97,112,112,114,101,99,105,97,116,101,100,104,95,112,95,51,48,0),897]]);
         downloaderr.set(typesX, (String.fromCharCode(48,0) == typesX ? datam.size : typesX.length));
         closeW = new Map([[`${closeW.size}`, 1 - blacklistH.size]]);
         blacklistH.set(`${blacklistH.size}`, closeW.size);
      }
       let albumK = true;
       let sortI = 2;
       let detail9 = 0;
          let downloaderV = String.fromCharCode(103,95,55,50,95,99,97,99,104,101,115,0);
         downloaderr.set(`${sortI}`, plusg.length);
         downloaderV += "3";
         downloaderr = new Map([[`${trophyN}`, 2 - parseInt(`${trophyN}`)]]);
      let unreadW = 7130733 <= sortI;
      do {
         sortI %= Math.max(sortI, 3);
         if (unreadW) {
            break;
         }
      } while (unreadW && ((1 & downloaderr.size) >= 5 || 1 >= (downloaderr.size & sortI)));
       let questU: Map<any, any> = new Map([[String.fromCharCode(99,111,117,108,100,0),831], [String.fromCharCode(118,99,111,119,112,116,114,0),599]]);
         viewsH = `${1 >> (Math.min(2, Math.abs(detail9)))}`;
      album7 = "2";
      if (alert_) {
         break;
      }
   } while (alert_ && (1 <= (3 + album7.length) || (album7.length >> (Math.min(Math.abs(3), 1))) <= 3));
   let saveh = submit1.length >= 6560239;
   do {
      submit1.push((String.fromCharCode(65,0) == controlE ? controlE.length : submit1.length));
      if (saveh) {
         break;
      }
   } while (saveh && (4 < submit1.length));
   let time_ujU = 8793387 >= arrowV.length;
   do {
       let step5 = true;
       let saveQ = 3.0;
       let animationz = String.fromCharCode(106,111,98,113,0);
       let shirtj = 0.0;
      for (let q = 0; q < 2; q++) {
         saveQ *= animationz.length / 2;
      }
      while (step5) {
         shirtj *= parseFloat(`${animationz.length & 2}`);
         break;
      }
      for (let h = 0; h < 2; h++) {
          let collectionu = String.fromCharCode(110,95,57,55,95,115,104,117,102,102,108,101,112,108,97,110,101,115,0);
          let vietname = String.fromCharCode(121,95,55,49,95,114,101,97,115,109,0);
          let bannerw: Array<any> = [String.fromCharCode(102,108,111,97,116,105,110,103,0), String.fromCharCode(112,114,122,112,0), String.fromCharCode(102,105,114,115,116,112,97,115,115,0)];
          let plashJ: Array<any> = [593, 464, 470];
          let moduleS = 4;
         shirtj -= parseFloat(`${bannerw.length / 1}`);
         collectionu += `${plashJ.length}`;
         vietname += `${vietname.length}`;
         bannerw = [(collectionu == String.fromCharCode(95,0) ? collectionu.length : vietname.length)];
         plashJ = [moduleS];
         moduleS &= vietname.length;
      }
      while (!animationz.startsWith(`${step5}`)) {
         animationz += "1";
         break;
      }
         shirtj -= parseFloat(`${parseInt(`${shirtj}`) + parseInt(`${saveQ}`)}`);
      let catalogm = saveQ <= 8099626.0;
      do {
         saveQ += (animationz == String.fromCharCode(112,0) ? parseInt(`${saveQ}`) : animationz.length);
         if (catalogm) {
            break;
         }
      } while ((!step5) && catalogm);
      let forwardA = animationz == String.fromCharCode(104,112,103,119,119,109,0);
      do {
         animationz = `${3 << (Math.min(3, animationz.length))}`;
         if (forwardA) {
            break;
         }
      } while (forwardA && (3.75 < (5.49 - saveQ)));
          let headerA = 3.0;
         saveQ -= ((step5 ? 5 : 3));
         headerA *= parseFloat(`${parseInt(`${headerA}`)}`);
          let commonB = String.fromCharCode(112,95,50,51,95,114,101,116,97,105,110,0);
          let downX = String.fromCharCode(112,95,50,49,95,114,97,110,115,102,111,114,109,101,114,0);
          let middle1 = String.fromCharCode(101,114,114,99,111,100,101,0);
         step5 = shirtj == saveQ;
         commonB += `${commonB.length}`;
         downX += "3";
         middle1 += `${(String.fromCharCode(79,0) == commonB ? downX.length : commonB.length)}`;
         saveQ -= 1 ^ parseInt(`${saveQ}`);
         animationz = `${((step5 ? 5 : 5) >> (Math.min(Math.abs(parseInt(`${saveQ}`)), 3)))}`;
      while ((4.96 - saveQ) <= 4.68) {
          let combinef = String.fromCharCode(99,111,110,116,97,105,110,105,110,103,0);
          let eventZ: Map<any, any> = new Map([[String.fromCharCode(118,100,97,116,97,0),699], [String.fromCharCode(116,105,109,101,105,110,116,101,114,118,97,108,95,53,95,49,51,0),968], [String.fromCharCode(97,99,114,111,115,115,0),259]]);
          let downloadw = 4.0;
          let field6: Map<any, any> = new Map([[String.fromCharCode(100,105,97,103,111,110,97,108,0),false ], [String.fromCharCode(109,112,101,103,118,105,100,101,111,100,97,116,97,0),true ], [String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,95,101,95,55,48,0),true ]]);
         saveQ /= Math.max(1, combinef.length);
         combinef = `${parseInt(`${downloadw}`)}`;
         eventZ.set(`${downloadw}`, field6.size);
         field6.set(`${downloadw}`, parseInt(`${downloadw}`) >> (Math.min(Math.abs(1), 1)));
         break;
      }
      arrowV += "1";
      if (time_ujU) {
         break;
      }
   } while (time_ujU && (controlE.length <= 2));
   while (1 == controlE.length) {
      controlE = `${1 ^ parseInt(`${queste}`)}`;
      break;
   }
      selectionC -= 1;
   if (album7.startsWith(controlE)) {
      controlE += `${arrowV.length}`;
   }
   let applej = 9689437.0 >= selectionC;
   do {
      selectionC *= controlE.length & album7.length;
      if (applej) {
         break;
      }
   } while (((selectionC - arrowV.length) >= 2.45) && applej);
   let yingI = 7913304 >= album7.length;
   do {
       let stationsm = 3.0;
       let turns = 0;
       let benefitv = String.fromCharCode(103,101,116,97,100,100,114,105,110,102,111,0);
         turns >>= Math.min(4, Math.abs(turns | benefitv.length));
         stationsm += turns;
         turns -= turns << (Math.min(benefitv.length, 3));
      let entry0 = 9309399.0 <= stationsm;
      do {
         stationsm /= Math.max(benefitv.length, 3);
         if (entry0) {
            break;
         }
      } while (entry0 && (benefitv.length < stationsm));
         turns -= (benefitv == String.fromCharCode(84,0) ? benefitv.length : turns);
      while (benefitv.endsWith(`${stationsm}`)) {
         stationsm /= Math.max(parseInt(`${stationsm}`) * benefitv.length, 3);
         break;
      }
      if (!benefitv.startsWith(`${turns}`)) {
          let feedbackn = String.fromCharCode(110,101,103,97,116,101,0);
          let unselectedz = 0.0;
          let regeng2 = 0.0;
          let sentryE = true;
          let crownW = 2.0;
         benefitv = "2";
         feedbackn += "2";
         unselectedz /= Math.max(parseInt(`${unselectedz}`) % (Math.max(feedbackn.length, 5)), 5);
         regeng2 *= parseInt(`${regeng2}`) << (Math.min(Math.abs(parseInt(`${unselectedz}`)), 5));
         sentryE = crownW >= regeng2;
         crownW += 2 % (Math.max(8, parseInt(`${crownW}`)));
      }
         benefitv = `${turns}`;
      for (let y = 0; y < 1; y++) {
         stationsm /= Math.max(turns | benefitv.length, 5);
      }
      album7 = `${parseInt(`${stationsm}`)}`;
      if (yingI) {
         break;
      }
   } while ((!album7.endsWith(arrowV)) && yingI);
   for (let x = 0; x < 1; x++) {
      submit1.push(1 >> (Math.min(2, Math.abs(parseInt(`${floater7}`)))));
   }
       let referrerD: Array<any> = [String.fromCharCode(115,114,116,112,95,100,95,52,50,0), String.fromCharCode(115,98,99,100,101,99,95,110,95,51,52,0), String.fromCharCode(119,97,108,108,97,112,101,114,115,95,102,95,57,54,0)];
       let backgrounda = String.fromCharCode(105,110,115,116,97,110,99,101,115,0);
       let analyticx: Array<any> = [564, 553];
          let brightnessj = String.fromCharCode(114,101,99,111,110,110,101,99,116,95,105,95,52,0);
          let userk = String.fromCharCode(98,95,51,56,95,100,101,99,111,114,114,101,108,97,116,101,0);
          let backwardO = 5.0;
         backgrounda += "1";
         brightnessj += "1";
         userk = "2";
         backwardO *= parseInt(`${backwardO}`);
      for (let o = 0; o < 1; o++) {
          let white6 = String.fromCharCode(116,97,107,100,115,112,95,105,95,55,50,0);
          let buttona = String.fromCharCode(110,95,51,54,95,111,117,116,112,117,116,115,0);
          let smallN = 4;
          let baiduy = String.fromCharCode(103,101,110,101,114,97,116,101,102,105,108,101,0);
          let shrinke = 5;
         backgrounda += `${referrerD.length + smallN}`;
         white6 = `${shrinke << (Math.min(Math.abs(3), 4))}`;
         buttona += `${buttona.length - white6.length}`;
         smallN <<= Math.min(Math.abs(white6.length << (Math.min(baiduy.length, 1))), 2);
         baiduy = "1";
         shrinke >>= Math.min(5, Math.abs(2));
      }
         referrerD = [3 + referrerD.length];
      while ((analyticx.length + backgrounda.length) <= 2 && (analyticx.length + backgrounda.length) <= 2) {
         analyticx.push(backgrounda.length);
         break;
      }
         backgrounda += `${(backgrounda == String.fromCharCode(65,0) ? backgrounda.length : analyticx.length)}`;
      let giftp = analyticx.length <= 8718759;
      do {
          let statsu = String.fromCharCode(112,108,97,99,101,104,111,108,100,101,114,115,0);
          let searchbarg = 4.0;
          let annerB = String.fromCharCode(102,111,111,116,98,97,108,108,0);
          let benefit6 = 2.0;
         analyticx.push(3);
         statsu = "3";
         searchbarg += 2;
         annerB += `${parseInt(`${benefit6}`) * annerB.length}`;
         benefit6 *= (parseFloat(`${annerB == String.fromCharCode(101,0) ? parseInt(`${benefit6}`) : annerB.length}`));
         if (giftp) {
            break;
         }
      } while (((analyticx.length << (Math.min(backgrounda.length, 3))) >= 2) && giftp);
       let dropdownM = false;
      for (let l = 0; l < 1; l++) {
         backgrounda += `${backgrounda.length}`;
      }
       let hongkongR = 3.0;
       let containerR = 2.0;
      controlE = `${(album7 == String.fromCharCode(83,0) ? album7.length : parseInt(`${queste}`))}`;
       let sourceJ: Array<any> = [811, 111];
       let calendarT = String.fromCharCode(119,104,111,108,101,0);
      if (5 >= (calendarT.length % (Math.max(7, sourceJ.length))) && 2 >= (calendarT.length % 5)) {
          let tickx = 2.0;
          let gesturesJ = 0;
          let entryb = String.fromCharCode(98,97,115,101,110,97,109,101,0);
         calendarT += "1";
         tickx /= Math.max((String.fromCharCode(116,0) == entryb ? entryb.length : parseInt(`${tickx}`)), 1);
         gesturesJ /= Math.max(5, gesturesJ | parseInt(`${tickx}`));
      }
         sourceJ.push((calendarT == String.fromCharCode(53,0) ? sourceJ.length : calendarT.length));
         calendarT += `${calendarT.length}`;
      if (sourceJ.length < 1) {
          let circleh = String.fromCharCode(105,100,115,117,98,116,121,112,101,0);
          let countryv = String.fromCharCode(102,114,101,101,108,97,100,100,114,115,0);
          let backn: Array<any> = [946, 906];
          let fullW = false;
          let t_titleJ: Array<any> = [String.fromCharCode(116,95,55,48,95,100,111,99,115,0), String.fromCharCode(109,107,118,119,114,105,116,101,114,95,51,95,57,57,0), String.fromCharCode(104,95,52,51,95,112,97,100,0)];
         calendarT = `${2 / (Math.max(7, backn.length))}`;
         circleh += `${((fullW ? 1 : 3))}`;
         countryv = `${countryv.length}`;
         backn.push(((fullW ? 5 : 3)));
         t_titleJ = [(circleh == String.fromCharCode(73,0) ? circleh.length : countryv.length)];
      }
         calendarT += `${2 / (Math.max(1, calendarT.length))}`;
         calendarT += `${calendarT.length >> (Math.min(5, sourceJ.length))}`;
      queste += parseInt(`${selectionC}`);
   for (let z = 0; z < 2; z++) {
      selectionC *= confirmation_.length;
   }
   if (floater7 == 3.56) {
      submit1.push(parseInt(`${selectionC}`));
   }
      album7 += `${parseInt(`${floater7}`) - album7.length}`;

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
