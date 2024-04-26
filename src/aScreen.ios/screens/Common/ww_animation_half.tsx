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
import ww_runtime from "../../../../Umeng/ww_runtime";
import { wwIconedit } from "@api";

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

  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(
    ({ searchHistoryReducer }: wwEighteenShirt) => searchHistoryReducer
  );
  const [isFetching, setisFetching] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { colors, textVariants, spacing, icons } = useTheme();

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
       let time_e2G: Array<any> = [374, 316, 146];
    let buildy = 3.0;
    let libtani: Array<any> = [927, 765];
    let update_fh = true;
    let checkboxH = 5;
    let clock9: Array<any> = [122, 525, 371];
    let clearr = 3.0;
    let splashu = String.fromCharCode(112,95,53,57,95,119,101,108,115,101,110,99,100,101,109,111,0);
    let shootyesgoalk = String.fromCharCode(116,98,117,102,95,100,95,51,50,0);
    let main_hY: Map<any, any> = new Map([[String.fromCharCode(115,112,108,105,116,109,118,115,95,99,95,57,53,0),false ], [String.fromCharCode(106,112,101,103,99,111,109,112,95,112,95,53,53,0),true ], [String.fromCharCode(108,95,52,53,95,115,109,111,111,116,104,101,100,0),true ]]);
    let sortn = 1.0;
    let pagee = 2.0;
    let libturbomodulejsijniT: Array<any> = [818, 963];
    let stylesg = String.fromCharCode(99,95,57,51,95,102,108,97,99,100,115,112,0);
    let borderless1 = String.fromCharCode(114,95,51,55,95,99,111,108,108,97,112,115,101,0);
    let livenodatabgimgQ = 1.0;
    let project7: Map<any, any> = new Map([[String.fromCharCode(101,113,117,105,118,97,108,101,110,116,95,98,95,52,56,0),false ], [String.fromCharCode(99,108,101,97,114,98,105,116,95,116,95,53,52,0),false ], [String.fromCharCode(117,95,51,52,95,115,112,101,99,105,102,105,101,114,115,0),false ]]);
   if (parseInt(`${buildy}`) <= time_e2G.length) {
      buildy += parseFloat(`${checkboxH | 1}`);
   }
       let popupz = 1.0;
         popupz += parseFloat(`${parseInt(`${popupz}`)}`);
      while (5.78 <= (popupz - 4.7) && 2.24 <= (4.7 - popupz)) {
          let rank4: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,111,114,105,122,97,116,105,111,110,115,95,57,95,53,56,0),String.fromCharCode(99,97,110,116,95,107,95,53,51,0)], [String.fromCharCode(104,95,55,51,95,119,101,108,108,98,101,104,97,118,101,100,0),String.fromCharCode(116,95,57,48,95,107,102,119,114,105,116,101,0)]]);
          let pageT = 2;
          let exampleimages = false;
         popupz /= Math.max(5, parseFloat(`${3}`));
         rank4.set(`${pageT}`, rank4.size - pageT);
         exampleimages = 69 == rank4.size;
         break;
      }
          let gradleX: Array<any> = [616, 830];
          let templateprocessors = false;
         popupz /= Math.max(1, (parseFloat(`${parseInt(`${popupz}`) * (templateprocessors ? 4 : 3)}`)));
         gradleX.push(1);
         templateprocessors = 25 <= gradleX.length;
      shootyesgoalk = `${(shootyesgoalk.length / (Math.max(3, (update_fh ? 2 : 1))))}`;

    let searchKeyword = placeholderSearch;

   for (let x = 0; x < 3; x++) {
       let securityc = 5.0;
       let kuaishouK = String.fromCharCode(110,95,53,55,95,98,108,117,114,114,101,100,0);
       let disconnectedlogoL = String.fromCharCode(98,95,56,49,95,101,120,101,99,117,116,97,98,108,101,0);
      let robotoU = kuaishouK.length <= 5539064;
      do {
          let footballfiledlayoutH = String.fromCharCode(122,95,57,49,95,105,119,104,116,120,0);
         kuaishouK += `${kuaishouK.length}`;
         footballfiledlayoutH = `${footballfiledlayoutH.length}`;
         if (robotoU) {
            break;
         }
      } while (robotoU && (kuaishouK.length > securityc));
         disconnectedlogoL += `${disconnectedlogoL.length << (Math.min(Math.abs(3), 5))}`;
       let iconsubssuccessJ = 1.0;
       let telemetryo = 1.0;
       let incidentW = false;
       let mbnativeG = true;
      for (let d = 0; d < 3; d++) {
         kuaishouK = `${((incidentW ? 5 : 4) >> (Math.min(Math.abs(parseInt(`${telemetryo}`)), 3)))}`;
      }
         telemetryo -= 1 / (Math.max(3, parseInt(`${iconsubssuccessJ}`)));
      while (telemetryo < 5.73) {
          let vipsportZ = 3.0;
          let upgradeY = String.fromCharCode(109,97,105,110,115,116,97,103,101,95,55,95,50,0);
          let statsX = 0.0;
          let libtanW: Map<any, any> = new Map([[String.fromCharCode(121,95,57,55,95,101,108,97,112,115,101,100,0),890], [String.fromCharCode(115,119,97,112,112,101,100,95,51,95,51,0),263]]);
          let videovarJ = String.fromCharCode(103,95,54,51,95,102,111,110,116,115,0);
         disconnectedlogoL = `${2 | parseInt(`${statsX}`)}`;
         vipsportZ /= Math.max(3, parseFloat(`${parseInt(`${vipsportZ}`)}`));
         upgradeY = `${(videovarJ == String.fromCharCode(53,0) ? videovarJ.length : libtanW.size)}`;
         statsX += parseFloat(`${upgradeY.length}`);
         libtanW = new Map([[`${libtanW.size}`, libtanW.size]]);
         break;
      }
      for (let b = 0; b < 3; b++) {
         telemetryo *= parseInt(`${iconsubssuccessJ}`);
      }
      for (let u = 0; u < 3; u++) {
         mbnativeG = !incidentW || disconnectedlogoL.length >= 50;
      }
      clearr += parseInt(`${sortn}`);
   }
       let jnewarchdefaultsJ = 5;
      for (let g = 0; g < 3; g++) {
          let football4 = 3.0;
          let defaultlogow = String.fromCharCode(108,101,110,95,49,95,55,55,0);
         jnewarchdefaultsJ &= jnewarchdefaultsJ - 3;
         football4 *= (parseFloat(`${defaultlogow == String.fromCharCode(99,0) ? defaultlogow.length : parseInt(`${football4}`)}`));
      }
       let dependenciesn = 5;
       let taiwanS = 0;
      while (1 <= jnewarchdefaultsJ) {
          let fieldk: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,108,105,99,116,115,95,99,95,55,48,0),true ], [String.fromCharCode(109,95,54,49,95,99,118,116,121,117,118,116,111,0),true ], [String.fromCharCode(110,95,55,48,95,97,117,116,111,102,105,120,0),true ]]);
          let plash7 = 1.0;
          let vignetteM = 1.0;
          let filter0 = 2;
          let mbbidu: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,108,116,105,109,101,95,56,95,56,56,0),String.fromCharCode(112,95,51,51,95,100,101,115,116,111,114,121,0)], [String.fromCharCode(99,111,108,111,114,102,117,108,95,97,95,57,48,0),String.fromCharCode(122,95,56,52,95,111,112,101,114,97,116,105,111,110,0)]]);
         taiwanS >>= Math.min(Math.abs(filter0), 2);
         fieldk = new Map([[`${fieldk.size}`, 1]]);
         plash7 *= fieldk.size << (Math.min(Math.abs(1), 4));
         vignetteM /= Math.max(parseFloat(`${mbbidu.size % (Math.max(3, fieldk.size))}`), 5);
         mbbidu = new Map([[`${vignetteM}`, parseInt(`${vignetteM}`) / 3]]);
         break;
      }
      libtani.push(shootyesgoalk.length * 3);

    if (search != "") {

   if (!Array.from(main_hY.values()).includes(sortn)) {
      sortn /= Math.max(4, parseFloat(`${clock9.length | shootyesgoalk.length}`));
   }
   let animation6 = 8248401.0 <= clearr;
   do {
      clearr += 3 >> (Math.min(Math.abs(parseInt(`${clearr}`)), 3));
      if (animation6) {
         break;
      }
   } while (animation6 && ((4.90 - clearr) == 1.13));
      searchKeyword = search;
    }

    

   let viewerQ = 6798973 <= time_e2G.length;
   do {
      time_e2G = [libtani.length / (Math.max(2, 6))];
      if (viewerQ) {
         break;
      }
   } while (((shootyesgoalk.length | time_e2G.length) <= 3) && viewerQ);
   for (let p = 0; p < 2; p++) {
      sortn *= (parseFloat(`${(update_fh ? 2 : 1) % (Math.max(parseInt(`${clearr}`), 7))}`));
   }
    

      splashu = `${splashu.length ^ 2}`;
       let chinasamec = false;
         chinasamec = !chinasamec;
         chinasamec = chinasamec && chinasamec;
      for (let x = 0; x < 2; x++) {
         chinasamec = !chinasamec;
      }
      libturbomodulejsijniT = [parseInt(`${clearr}`) << (Math.min(Math.abs(1), 5))];
    

   while (update_fh) {
      clock9 = [time_e2G.length];
      break;
   }
   let mapbufferp = 5510784.0 >= clearr;
   do {
      clearr /= Math.max(5, shootyesgoalk.length % (Math.max(2, parseInt(`${buildy}`))));
      if (mapbufferp) {
         break;
      }
   } while (mapbufferp && (clearr >= stylesg.length));
    

      buildy += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${buildy}`)), 3))}`);
      libtani = [parseInt(`${sortn}`) | libturbomodulejsijniT.length];

    

   for (let r = 0; r < 1; r++) {
       let acceptedb: Map<any, any> = new Map([[String.fromCharCode(113,95,57,51,95,112,114,101,112,97,114,105,110,103,0),String.fromCharCode(99,111,110,115,111,110,97,110,116,95,122,95,49,48,0)], [String.fromCharCode(106,95,50,51,95,110,118,100,101,99,0),String.fromCharCode(99,114,101,97,116,101,101,120,95,51,95,51,48,0)]]);
       let rewardt = String.fromCharCode(114,101,110,101,119,95,107,95,57,57,0);
       let castingw = true;
      for (let r = 0; r < 1; r++) {
          let reactq = 3.0;
          let libavcodec5 = 0.0;
          let libreactperfloggerjnif: Array<any> = [String.fromCharCode(118,95,48,95,109,97,107,101,0), String.fromCharCode(111,95,50,54,95,97,109,114,110,98,0), String.fromCharCode(109,99,111,114,101,95,119,95,49,55,0)];
         castingw = libreactperfloggerjnif.includes(libavcodec5);
         reactq -= parseFloat(`${parseInt(`${reactq}`)}`);
         libavcodec5 -= 1 % (Math.max(2, parseInt(`${reactq}`)));
      }
      for (let o = 0; o < 2; o++) {
          let page8: Array<any> = [626, 13];
          let vietnamA: Map<any, any> = new Map([[String.fromCharCode(101,120,97,99,116,108,121,95,104,95,56,51,0),382], [String.fromCharCode(101,95,53,50,95,115,101,110,115,105,116,105,118,101,0),154], [String.fromCharCode(98,105,113,117,97,100,95,119,95,49,0),728]]);
         castingw = 7 > rewardt.length;
         page8 = [vietnamA.size];
         vietnamA = new Map([[`${vietnamA.size}`, 2 ^ vietnamA.size]]);
      }
         castingw = acceptedb.size <= 58 || rewardt == String.fromCharCode(95,0);
      while (3 >= (rewardt.length >> (Math.min(Math.abs(4), 1)))) {
         acceptedb.set(rewardt, ((castingw ? 3 : 1) ^ rewardt.length));
         break;
      }
       let profileinactiveZ: Map<any, any> = new Map([[String.fromCharCode(101,95,53,54,95,100,101,97,100,105,110,101,0),213], [String.fromCharCode(98,101,122,101,108,95,115,95,54,49,0),518]]);
       let imagesQ: Map<any, any> = new Map([[String.fromCharCode(121,95,49,49,95,112,114,111,103,114,97,109,0),505], [String.fromCharCode(116,101,109,112,108,97,116,101,100,95,53,95,51,55,0),586], [String.fromCharCode(97,118,101,114,97,103,101,115,95,118,95,52,56,0),887]]);
         profileinactiveZ = new Map([[`${acceptedb.size}`, imagesQ.size | 2]]);
      if (Array.from(acceptedb.keys()).includes(`${profileinactiveZ.size}`)) {
          let confirmationF: Map<any, any> = new Map([[String.fromCharCode(97,108,116,105,118,101,99,95,120,95,50,0),String.fromCharCode(109,101,109,115,104,105,112,95,112,95,49,48,48,0)], [String.fromCharCode(99,95,52,54,0),String.fromCharCode(109,115,118,115,100,101,112,101,110,100,95,50,95,53,53,0)], [String.fromCharCode(112,114,111,109,111,116,105,110,103,95,112,95,56,52,0),String.fromCharCode(116,95,53,50,95,121,97,98,101,0)]]);
          let gestures2: Map<any, any> = new Map([[String.fromCharCode(116,101,120,116,97,116,116,114,95,104,95,56,51,0),String.fromCharCode(115,101,116,100,97,114,95,108,95,55,56,0)], [String.fromCharCode(99,111,108,117,109,110,95,108,95,57,48,0),String.fromCharCode(105,95,52,49,95,102,99,116,108,0)]]);
          let rooty = 0.0;
          let placeholderl = String.fromCharCode(117,112,108,111,97,100,105,110,103,95,49,95,50,53,0);
          let classesV: Map<any, any> = new Map([[String.fromCharCode(100,95,52,54,95,97,108,108,114,103,98,0),false ], [String.fromCharCode(100,95,49,52,0),false ]]);
         acceptedb = new Map([[`${classesV.size}`, classesV.size]]);
         confirmationF = new Map([[`${gestures2.size}`, 3 / (Math.max(7, parseInt(`${rooty}`)))]]);
         gestures2.set(`${rooty}`, parseInt(`${rooty}`));
         placeholderl += `${gestures2.size}`;
      }
      while (!Array.from(profileinactiveZ.keys()).includes(`${acceptedb.size}`)) {
         profileinactiveZ.set(`${castingw}`, ((castingw ? 2 : 5) & acceptedb.size));
         break;
      }
      if (3 <= (4 * rewardt.length) || 4 <= (rewardt.length * acceptedb.size)) {
          let interstitialM: Array<any> = [String.fromCharCode(102,105,97,116,95,57,95,51,48,0), String.fromCharCode(100,101,109,117,120,101,114,95,111,95,51,52,0), String.fromCharCode(104,95,56,49,95,106,112,101,103,100,115,112,0)];
          let greyf = String.fromCharCode(99,95,56,53,95,110,110,109,111,100,0);
          let privilegeO = false;
          let imagesX = String.fromCharCode(100,120,116,121,115,95,57,95,51,50,0);
          let iconrefreshw = false;
         rewardt = `${1 + imagesX.length}`;
         interstitialM = [3];
         greyf += `${((iconrefreshw ? 3 : 1) & (privilegeO ? 1 : 4))}`;
         imagesX += `${interstitialM.length}`;
      }
      splashu += `${parseInt(`${clearr}`) % (Math.max(3, acceptedb.size))}`;
   }
      main_hY = new Map([[splashu, splashu.length]]);
    

   if ((clock9.length << (Math.min(Math.abs(5), 2))) > 4) {
      clock9 = [parseInt(`${buildy}`) | libtani.length];
   }
   while ((buildy * 3.17) >= 4.30 && 5 >= (splashu.length * parseInt(`${buildy}`))) {
      buildy += (parseFloat(`${String.fromCharCode(105,0) == shootyesgoalk ? shootyesgoalk.length : parseInt(`${pagee}`)}`));
      break;
   }
    

   while (checkboxH <= 4) {
       let root_ = false;
       let over5 = 2.0;
       let downloaderJ = 5;
       let modalH: Array<any> = [534, 440, 412];
         over5 /= Math.max(parseInt(`${over5}`) | 3, 1);
      for (let a = 0; a < 3; a++) {
         root_ = !root_ || modalH.length >= 39;
      }
      if (4.100 > over5) {
         over5 -= 1 >> (Math.min(1, modalH.length));
      }
      for (let o = 0; o < 1; o++) {
         root_ = modalH.length >= downloaderJ;
      }
       let update_bbp = 2.0;
         root_ = 84 >= downloaderJ;
      if ((downloaderJ * 4) == 1 || (4 >> (Math.min(3, Math.abs(downloaderJ)))) == 1) {
         update_bbp -= modalH.length % (Math.max(2, 2));
      }
         root_ = over5 <= modalH.length;
         root_ = 83.45 < over5;
      let moreo = root_ ? !root_ : root_;
      do {
         root_ = 4.47 >= update_bbp;
         if (moreo) {
            break;
         }
      } while ((over5 == 5.7) && moreo);
      for (let y = 0; y < 3; y++) {
         over5 *= downloaderJ >> (Math.min(4, Math.abs(3)));
      }
         root_ = (update_bbp - downloaderJ) <= 32;
      checkboxH ^= 1 | time_e2G.length;
      break;
   }
      shootyesgoalk += `${time_e2G.length}`;
    

      update_fh = !update_fh || clock9.length < 77;
      project7.set(`${checkboxH}`, checkboxH);
    

       let time_tl = String.fromCharCode(101,120,116,101,116,110,100,101,100,95,122,95,55,50,0);
       let thailandF = String.fromCharCode(101,95,50,56,95,109,117,108,116,105,112,108,101,114,115,0);
      if (time_tl.endsWith(`${thailandF.length}`)) {
         thailandF = `${(String.fromCharCode(69,0) == thailandF ? thailandF.length : time_tl.length)}`;
      }
      while (thailandF.length < time_tl.length) {
         time_tl += `${(String.fromCharCode(111,0) == thailandF ? thailandF.length : time_tl.length)}`;
         break;
      }
         time_tl += `${time_tl.length}`;
      while (thailandF.length > 3) {
          let libzeusf = String.fromCharCode(104,116,108,116,95,98,95,49,53,0);
          let buffer9 = String.fromCharCode(114,95,50,55,95,99,111,108,115,112,97,110,0);
          let page2: Map<any, any> = new Map([[String.fromCharCode(109,95,56,53,95,99,111,114,114,101,99,116,105,111,110,0),false ], [String.fromCharCode(102,95,55,51,95,116,116,97,100,97,116,97,0),false ], [String.fromCharCode(98,111,114,100,101,114,108,101,115,115,95,114,95,57,57,0),false ]]);
         thailandF = "2";
         libzeusf = `${buffer9.length | libzeusf.length}`;
         buffer9 += `${libzeusf.length}`;
         page2 = new Map([[`${page2.size}`, buffer9.length]]);
         break;
      }
       let interstitialL = 2;
      if (!thailandF.endsWith(time_tl)) {
          let penaltyp = 2.0;
          let analyticsJ = 2.0;
         thailandF += "3";
         penaltyp /= Math.max(parseInt(`${penaltyp}`) & 3, 4);
         analyticsJ -= parseFloat(`${parseInt(`${analyticsJ}`) | parseInt(`${penaltyp}`)}`);
      }
      borderless1 += `${3 / (Math.max(7, libtani.length))}`;
   let viewsI = 9084108 >= main_hY.size;
   do {
      main_hY.set(`${pagee}`, 2 ^ parseInt(`${pagee}`));
      if (viewsI) {
         break;
      }
   } while (viewsI && (4 == stylesg.length));
    

   if (time_e2G.length < checkboxH) {
      checkboxH *= splashu.length % (Math.max(7, main_hY.size));
   }
   if (!borderless1.endsWith(`${time_e2G.length}`)) {
      time_e2G.push(3 * shootyesgoalk.length);
   }
    

       let playlistS: Array<any> = [String.fromCharCode(115,97,108,116,115,95,103,95,50,55,0), String.fromCharCode(100,95,55,49,95,97,108,116,114,101,102,0), String.fromCharCode(101,118,97,108,117,97,116,101,100,95,49,95,53,54,0)];
       let package_hgx = 2.0;
       let typesG = String.fromCharCode(115,95,49,48,95,119,97,116,99,104,101,114,115,0);
         playlistS.push(2);
      if (1.80 < (package_hgx + parseFloat(`${playlistS.length}`))) {
         package_hgx *= parseFloat(`${playlistS.length}`);
      }
      if (4.59 == (package_hgx * 5.71) || 1 == (playlistS.length & 4)) {
          let listj: Map<any, any> = new Map([[String.fromCharCode(115,97,118,101,95,107,95,55,55,0),false ], [String.fromCharCode(122,95,56,52,95,102,105,100,99,116,0),true ], [String.fromCharCode(101,95,52,53,95,105,115,105,0),true ]]);
          let tooltipsR = String.fromCharCode(112,114,101,100,111,119,110,108,111,97,100,95,51,95,52,56,0);
          let questicon9 = String.fromCharCode(109,111,109,101,110,116,97,114,121,95,106,95,57,48,0);
          let iconarrowrighto = 3.0;
          let bgvipxvodX: Array<any> = [579, 482, 689];
         playlistS = [parseInt(`${iconarrowrighto}`)];
         listj = new Map([[`${listj.size}`, 3]]);
         tooltipsR = `${tooltipsR.length + listj.size}`;
         questicon9 += `${1 - listj.size}`;
         iconarrowrighto += parseFloat(`${1 - questicon9.length}`);
         bgvipxvodX = [(questicon9 == String.fromCharCode(100,0) ? questicon9.length : bgvipxvodX.length)];
      }
      let f_managerg = typesG == String.fromCharCode(114,103,105,105,101,0);
      do {
         typesG = `${parseInt(`${package_hgx}`) ^ playlistS.length}`;
         if (f_managerg) {
            break;
         }
      } while ((package_hgx <= 1.81) && f_managerg);
          let filterG: Array<any> = [28, 115];
          let iconstarI = false;
         package_hgx /= Math.max(parseFloat(`${3 / (Math.max(parseInt(`${package_hgx}`), 1))}`), 4);
         filterG.push(2);
         iconstarI = (((!iconstarI ? filterG.length : 86) >> (Math.min(filterG.length, 3))) > 86);
         package_hgx *= (parseFloat(`${String.fromCharCode(71,0) == typesG ? typesG.length : playlistS.length}`));
       let acopy_36I: Map<any, any> = new Map([[String.fromCharCode(103,95,56,56,95,116,121,112,101,0),String.fromCharCode(104,95,49,55,95,105,100,99,116,0)], [String.fromCharCode(109,95,49,95,99,111,109,112,97,114,97,98,108,101,0),String.fromCharCode(112,111,112,117,108,97,116,101,100,95,50,95,56,51,0)], [String.fromCharCode(116,119,111,109,95,109,95,53,50,0),String.fromCharCode(102,109,115,117,98,95,106,95,54,55,0)]]);
       let eighteen0: Map<any, any> = new Map([[String.fromCharCode(99,95,56,57,95,100,98,115,105,122,101,0),String.fromCharCode(115,95,55,51,95,100,97,116,101,0)], [String.fromCharCode(109,101,116,104,111,100,115,95,117,95,50,54,0),String.fromCharCode(109,105,120,101,100,95,103,95,56,53,0)]]);
      for (let u = 0; u < 1; u++) {
         playlistS.push(acopy_36I.size);
      }
          let left1 = String.fromCharCode(115,117,98,105,109,97,103,101,95,117,95,55,56,0);
          let buildV = 0.0;
         eighteen0.set(`${buildV}`, playlistS.length);
         left1 = "2";
         buildV += parseFloat(`${left1.length - 2}`);
      libturbomodulejsijniT = [typesG.length];
      splashu = `${libtani.length % 1}`;
    

   if ((livenodatabgimgQ * 1.27) < 1.85 && (parseInt(`${livenodatabgimgQ}`) * 5) < 4) {
      borderless1 += "2";
   }
       let libreactperfloggerjniR: Map<any, any> = new Map([[String.fromCharCode(99,95,50,49,95,115,111,117,114,99,101,99,108,105,112,0),String.fromCharCode(122,95,50,95,100,105,115,116,97,110,99,101,0)], [String.fromCharCode(99,97,110,111,110,105,99,97,108,105,122,101,100,95,118,95,57,52,0),String.fromCharCode(119,95,50,49,95,100,101,99,111,114,114,101,108,97,116,105,111,110,0)]]);
      for (let f = 0; f < 1; f++) {
         libreactperfloggerjniR = new Map([[`${libreactperfloggerjniR.size}`, libreactperfloggerjniR.size & libreactperfloggerjniR.size]]);
      }
          let backW = String.fromCharCode(114,95,52,49,95,99,111,110,116,114,97,105,110,116,115,0);
          let castY = 3.0;
          let runtimeschedulerV = String.fromCharCode(103,95,54,55,95,102,117,108,108,121,0);
         libreactperfloggerjniR = new Map([[`${libreactperfloggerjniR.size}`, libreactperfloggerjniR.size]]);
         backW = `${backW.length ^ runtimeschedulerV.length}`;
         castY *= parseFloat(`${parseInt(`${castY}`) % (Math.max(runtimeschedulerV.length, 6))}`);
         libreactperfloggerjniR = new Map([[`${libreactperfloggerjniR.size}`, libreactperfloggerjniR.size]]);
      project7.set(shootyesgoalk, 2 >> (Math.min(1, libturbomodulejsijniT.length)));
    

   let holderQ = update_fh ? !update_fh : update_fh;
   do {
      update_fh = splashu.includes(`${clearr}`);
      if (holderQ) {
         break;
      }
   } while (holderQ && (update_fh));
      project7.set(splashu, 1);
    

   for (let v = 0; v < 2; v++) {
       let umengB: Map<any, any> = new Map([[String.fromCharCode(106,117,115,116,95,113,95,54,52,0),String.fromCharCode(115,117,112,112,114,101,115,115,101,115,95,117,95,54,55,0)], [String.fromCharCode(100,101,108,105,109,105,116,101,114,95,113,95,53,50,0),String.fromCharCode(112,95,56,50,95,112,107,99,115,0)]]);
       let appleK: Array<any> = [921, 610, 883];
         umengB = new Map([[`${umengB.size}`, 1]]);
       let downloadedF = true;
       let playG = true;
      for (let j = 0; j < 3; j++) {
         downloadedF = 79 >= umengB.size && appleK.length >= 79;
      }
      let submitE = umengB.size >= 8530513;
      do {
          let profileactive0: Array<any> = [588, 76, 833];
         umengB = new Map([[`${appleK.length}`, ((playG ? 2 : 5) + 2)]]);
         profileactive0.push(profileactive0.length);
         if (submitE) {
            break;
         }
      } while (((5 << (Math.min(2, Math.abs(umengB.size)))) >= 3) && submitE);
       let listA = 0;
         umengB.set(`${downloadedF}`, umengB.size * 3);
      checkboxH |= umengB.size | parseInt(`${livenodatabgimgQ}`);
   }
   while (shootyesgoalk.startsWith(`${borderless1.length}`)) {
      borderless1 = `${parseInt(`${sortn}`) + main_hY.size}`;
      break;
   }

    fetchData(searchKeyword, true);

       let infot = String.fromCharCode(114,101,100,117,99,116,105,111,110,115,95,119,95,52,0);
         infot += `${infot.length % 1}`;
      while (infot.length <= 1) {
         infot = `${infot.length >> (Math.min(infot.length, 4))}`;
         break;
      }
          let team8 = 5.0;
         infot = `${infot.length % (Math.max(1, parseInt(`${team8}`)))}`;
      borderless1 += `${splashu.length}`;
       let libswscale0 = String.fromCharCode(108,95,52,48,95,101,102,102,101,99,116,0);
      for (let h = 0; h < 2; h++) {
         libswscale0 = "2";
      }
          let pagea = String.fromCharCode(112,95,55,55,95,99,104,112,108,0);
          let tooltipsS: Map<any, any> = new Map([[String.fromCharCode(111,95,56,52,95,99,98,112,104,105,0),String.fromCharCode(104,95,52,52,95,99,117,101,112,111,105,110,116,0)], [String.fromCharCode(110,101,116,119,111,114,107,110,101,119,95,51,95,54,49,0),String.fromCharCode(108,111,103,115,95,104,95,50,53,0)]]);
         libswscale0 += `${tooltipsS.size}`;
         pagea = `${pagea.length | pagea.length}`;
         tooltipsS.set(pagea, (String.fromCharCode(77,0) == pagea ? pagea.length : pagea.length));
      for (let w = 0; w < 3; w++) {
         libswscale0 += `${3 | libswscale0.length}`;
      }
      splashu += `${(splashu == String.fromCharCode(80,0) ? stylesg.length : splashu.length)}`;
    dispatch(addSearchHistory(searchKeyword));

   while ((livenodatabgimgQ * 2.4) >= 1.7) {
      livenodatabgimgQ /= Math.max(3, parseFloat(`${3}`));
      break;
   }
   while (3 > (main_hY.size >> (Math.min(1, libturbomodulejsijniT.length))) || (3 >> (Math.min(3, Math.abs(main_hY.size)))) > 2) {
      main_hY = new Map([[`${livenodatabgimgQ}`, 1 * borderless1.length]]);
      break;
   }
    setShowResults(!showResults);
  };

  const clearHistory = useCallback(() => {
       let codeh: Array<any> = [592, 134, 21];
    let h_centerh = String.fromCharCode(114,95,56,51,95,101,110,99,111,100,105,110,103,98,0);
    let storeN = String.fromCharCode(117,115,101,95,51,95,54,53,0);
    let vietnam6: Array<any> = [String.fromCharCode(102,105,108,116,101,114,115,95,121,95,50,55,0), String.fromCharCode(103,109,116,105,109,101,95,111,95,57,48,0), String.fromCharCode(108,95,52,95,114,101,115,105,122,101,114,0)];
    let disconnectedd = String.fromCharCode(116,119,105,116,99,104,95,106,95,50,50,0);
    let stringsi = 1.0;
    let defaultroombgu = false;
    let commone = 0.0;
    let becomea: Map<any, any> = new Map([[String.fromCharCode(97,95,49,57,95,115,108,117,114,112,0),248], [String.fromCharCode(115,116,105,99,107,101,114,115,95,116,95,52,52,0),809]]);
    let penaltygoalw = String.fromCharCode(121,95,56,56,95,114,101,113,117,101,115,116,115,0);
    let nativeX: Array<any> = [217, 364, 35];
      disconnectedd += `${2 - disconnectedd.length}`;
      h_centerh += `${parseInt(`${stringsi}`)}`;
   for (let a = 0; a < 1; a++) {
      codeh = [vietnam6.length >> (Math.min(Math.abs(1), 1))];
   }
      stringsi *= (1 | (defaultroombgu ? 5 : 1));
   if (disconnectedd.endsWith(`${becomea.size}`)) {
       let benefit_ = 3;
      while (benefit_ < 2) {
         benefit_ -= benefit_;
         break;
      }
      while ((benefit_ + 2) == 5 && (benefit_ + 2) == 1) {
         benefit_ /= Math.max(benefit_, 3);
         break;
      }
          let executorw = String.fromCharCode(116,116,97,100,115,112,95,107,95,49,52,0);
          let changeU = String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,95,117,95,50,53,0);
          let stringP = String.fromCharCode(111,110,101,108,105,110,101,95,57,95,57,50,0);
         benefit_ &= changeU.length >> (Math.min(stringP.length, 2));
         executorw += `${executorw.length % (Math.max(6, executorw.length))}`;
         changeU = `${executorw.length % 3}`;
      becomea = new Map([[`${codeh.length}`, 1]]);
   }
   let weiboy = storeN.length >= 5283965;
   do {
       let greytick2 = false;
       let modelsX = String.fromCharCode(115,107,101,121,95,106,95,50,56,0);
       let robotoI = String.fromCharCode(112,95,57,95,110,112,112,116,114,97,110,115,112,111,115,101,0);
       let pushS = false;
      while (pushS || 1 <= modelsX.length) {
         pushS = pushS && robotoI.length <= 71;
         break;
      }
      let bootsplashL = 9738418 >= robotoI.length;
      do {
         robotoI += `${((pushS ? 1 : 3) - 1)}`;
         if (bootsplashL) {
            break;
         }
      } while ((modelsX == String.fromCharCode(119,0)) && bootsplashL);
      for (let w = 0; w < 2; w++) {
          let orangeclockb = String.fromCharCode(100,101,100,117,112,101,95,97,95,50,52,0);
          let nbatrophyB = 3.0;
          let statsn = true;
          let greyK = true;
         robotoI = `${((greyK ? 2 : 4))}`;
         orangeclockb = `${(orangeclockb == String.fromCharCode(68,0) ? (statsn ? 3 : 1) : orangeclockb.length)}`;
         nbatrophyB *= ((statsn ? 2 : 2) - orangeclockb.length);
         greyK = (((statsn ? 82 : orangeclockb.length) + orangeclockb.length) > 82);
      }
         robotoI += `${robotoI.length / (Math.max(1, 7))}`;
      if (5 <= robotoI.length) {
          let resendl: Array<any> = [160, 394, 547];
          let iconsaveimageo = 1.0;
         robotoI = "2";
         resendl.push(1 | parseInt(`${iconsaveimageo}`));
         iconsaveimageo *= parseFloat(`${parseInt(`${iconsaveimageo}`) ^ 1}`);
      }
      for (let t = 0; t < 1; t++) {
         robotoI += `${(robotoI == String.fromCharCode(110,0) ? robotoI.length : (pushS ? 1 : 4))}`;
      }
         greytick2 = (pushS ? greytick2 : pushS);
          let promotionl = String.fromCharCode(103,95,53,49,95,98,108,105,110,100,105,110,103,0);
          let sportS = 5;
         pushS = 66 < robotoI.length;
         promotionl += `${sportS & 1}`;
         sportS += (promotionl == String.fromCharCode(106,0) ? promotionl.length : sportS);
      while (robotoI.length < 3 || greytick2) {
          let animationsG = String.fromCharCode(105,95,51,49,95,100,101,109,117,120,0);
          let bdxadsdkp = 2.0;
          let stylesZ = 4.0;
          let modalw = 3.0;
          let n_managerv = String.fromCharCode(105,95,51,54,0);
         robotoI += `${3 / (Math.max(8, robotoI.length))}`;
         animationsG = `${parseInt(`${stylesZ}`) * 3}`;
         bdxadsdkp *= parseInt(`${bdxadsdkp}`) | 1;
         stylesZ += parseInt(`${bdxadsdkp}`);
         modalw /= Math.max(parseFloat(`${n_managerv.length + parseInt(`${modalw}`)}`), 3);
         n_managerv = `${(String.fromCharCode(104,0) == n_managerv ? parseInt(`${bdxadsdkp}`) : n_managerv.length)}`;
         break;
      }
          let xadsdkE = String.fromCharCode(97,118,105,100,95,103,95,55,57,0);
          let detailF = String.fromCharCode(107,95,54,48,95,105,110,102,111,114,109,97,116,105,111,110,0);
         robotoI += `${((greytick2 ? 2 : 2) ^ modelsX.length)}`;
         xadsdkE = `${detailF.length}`;
         detailF += "3";
      let cancelk = greytick2 ? !greytick2 : greytick2;
      do {
         greytick2 = pushS && modelsX.length < 11;
         if (cancelk) {
            break;
         }
      } while ((modelsX.includes(`${greytick2}`)) && cancelk);
         modelsX = "3";
      storeN = `${storeN.length}`;
      if (weiboy) {
         break;
      }
   } while ((storeN.length >= vietnam6.length) && weiboy);
   let gmailX = storeN == String.fromCharCode(95,102,49,53,0);
   do {
      storeN += `${(h_centerh == String.fromCharCode(56,0) ? h_centerh.length : storeN.length)}`;
      if (gmailX) {
         break;
      }
   } while (gmailX && (storeN.includes(`${codeh.length}`)));
   let combine3 = String.fromCharCode(52,103,102,0) == storeN;
   do {
       let reactnativeultimatelistview3 = String.fromCharCode(122,95,54,95,102,105,114,115,116,108,105,110,101,0);
       let nnewsshareo = String.fromCharCode(104,101,105,103,104,116,115,95,55,95,55,56,0);
       let belle = String.fromCharCode(105,95,51,49,95,112,111,105,110,116,99,98,98,0);
       let libswscaleQ = 4.0;
       let saveV = 4.0;
      let gray6 = 9634809.0 <= saveV;
      do {
          let klevin1: Array<any> = [114, 538];
         saveV -= parseFloat(`${2 * parseInt(`${libswscaleQ}`)}`);
         klevin1.push(1 * klevin1.length);
         if (gray6) {
            break;
         }
      } while ((!reactnativeultimatelistview3.endsWith(`${saveV}`)) && gray6);
      let transfere = 8284288 >= reactnativeultimatelistview3.length;
      do {
         reactnativeultimatelistview3 += `${(String.fromCharCode(108,0) == nnewsshareo ? parseInt(`${saveV}`) : nnewsshareo.length)}`;
         if (transfere) {
            break;
         }
      } while ((3 == belle.length) && transfere);
       let teamdetailsbgA = 1;
      while ((2 << (Math.min(3, Math.abs(teamdetailsbgA)))) == 4 && 5 == (teamdetailsbgA << (Math.min(Math.abs(2), 5)))) {
         teamdetailsbgA %= Math.max(reactnativeultimatelistview3.length << (Math.min(Math.abs(2), 5)), 2);
         break;
      }
         saveV *= parseFloat(`${parseInt(`${libswscaleQ}`) / 3}`);
          let defaultplayerimgO = 0.0;
         nnewsshareo += `${belle.length - 2}`;
         defaultplayerimgO *= parseFloat(`${2}`);
          let bootsplash8: Array<any> = [521, 325];
          let predictionactiveY = String.fromCharCode(99,111,110,116,114,111,108,108,101,114,115,95,113,95,54,56,0);
         reactnativeultimatelistview3 = "2";
         bootsplash8.push(predictionactiveY.length);
         predictionactiveY = "2";
       let launchI = String.fromCharCode(115,112,101,101,100,104,113,95,99,95,55,52,0);
       let ball3 = String.fromCharCode(115,95,53,51,95,118,101,99,0);
       let liveJ = String.fromCharCode(118,95,52,51,95,116,114,97,99,107,101,100,0);
       let predictionactivea = String.fromCharCode(99,116,105,109,101,115,116,97,109,112,95,111,95,55,50,0);
      while (4.48 >= (libswscaleQ + saveV)) {
          let hiadp = 2;
          let condensedX = String.fromCharCode(109,111,114,112,104,101,100,95,54,95,52,49,0);
         saveV += parseFloat(`${2}`);
         hiadp ^= condensedX.length | hiadp;
         condensedX += `${condensedX.length << (Math.min(4, Math.abs(hiadp)))}`;
         break;
      }
         libswscaleQ *= parseFloat(`${reactnativeultimatelistview3.length >> (Math.min(5, Math.abs(parseInt(`${saveV}`))))}`);
         liveJ = `${(String.fromCharCode(83,0) == ball3 ? parseInt(`${saveV}`) : ball3.length)}`;
      for (let i = 0; i < 1; i++) {
         saveV += parseFloat(`${3}`);
      }
      for (let b = 0; b < 1; b++) {
          let detailsT: Array<any> = [String.fromCharCode(98,114,105,103,104,116,110,101,115,115,95,111,95,56,49,0), String.fromCharCode(106,95,57,49,95,116,117,110,110,101,108,0), String.fromCharCode(101,95,53,49,95,116,101,97,109,115,0)];
          let whitetickB = 3.0;
          let modulesK = String.fromCharCode(120,95,57,56,95,112,111,115,108,105,115,116,0);
         libswscaleQ /= Math.max(4, parseFloat(`${liveJ.length}`));
         detailsT.push(modulesK.length % (Math.max(4, parseInt(`${whitetickB}`))));
         whitetickB += parseInt(`${whitetickB}`);
         modulesK = `${parseInt(`${whitetickB}`) % (Math.max(1, modulesK.length))}`;
      }
      for (let r = 0; r < 2; r++) {
          let giftbuttonF = false;
          let pointj = true;
          let yellowredcardg: Array<any> = [893, 991, 498];
         libswscaleQ -= parseFloat(`${3}`);
         giftbuttonF = !pointj;
         yellowredcardg = [1];
      }
      storeN = "1";
      if (combine3) {
         break;
      }
   } while ((disconnectedd.startsWith(storeN)) && combine3);
       let megaphoner = 5.0;
      for (let f = 0; f < 1; f++) {
         megaphoner += parseInt(`${megaphoner}`);
      }
      if (4.41 >= (megaphoner + megaphoner) || (megaphoner + 4.41) >= 5.9) {
         megaphoner += parseInt(`${megaphoner}`);
      }
      while ((megaphoner * megaphoner) == 5.16) {
          let line8 = String.fromCharCode(114,111,98,117,115,116,95,97,95,50,52,0);
          let diceT = 2.0;
          let shootyesgoalU = true;
         megaphoner *= ((shootyesgoalU ? 4 : 3) >> (Math.min(Math.abs(parseInt(`${diceT}`)), 3)));
         line8 += `${(String.fromCharCode(106,0) == line8 ? line8.length : line8.length)}`;
         diceT /= Math.max(3, 3 ^ line8.length);
         break;
      }
      storeN = `${((defaultroombgu ? 4 : 5) % 1)}`;
   for (let c = 0; c < 1; c++) {
       let matchesX = String.fromCharCode(105,100,101,111,95,98,95,52,49,0);
       let liveendmodallogor = 4.0;
       let predictionactiveS: Map<any, any> = new Map([[String.fromCharCode(99,95,56,49,95,114,101,110,100,101,114,98,117,102,102,101,114,0),587], [String.fromCharCode(100,95,52,48,95,109,115,109,112,101,103,118,0),16]]);
         liveendmodallogor /= Math.max(parseInt(`${liveendmodallogor}`) << (Math.min(Math.abs(2), 5)), 5);
       let models7 = 0.0;
       let mappingG = 3.0;
         liveendmodallogor /= Math.max(1, parseInt(`${models7}`));
         predictionactiveS.set(`${liveendmodallogor}`, 1 << (Math.min(Math.abs(parseInt(`${mappingG}`)), 1)));
          let encryptq = 5.0;
          let jingdongm = String.fromCharCode(109,97,103,101,110,116,97,95,97,95,49,57,0);
          let f_managero = String.fromCharCode(109,95,55,53,95,116,114,97,110,115,108,105,116,101,114,97,116,101,100,0);
         models7 += parseFloat(`${parseInt(`${liveendmodallogor}`)}`);
         encryptq += parseFloat(`${jingdongm.length}`);
         jingdongm = `${jingdongm.length % (Math.max(5, parseInt(`${encryptq}`)))}`;
         f_managero += `${(f_managero == String.fromCharCode(104,0) ? parseInt(`${encryptq}`) : f_managero.length)}`;
       let footballL = 5;
         liveendmodallogor += parseInt(`${models7}`) | parseInt(`${mappingG}`);
       let proxy8 = 2;
       let modelsn = 2;
          let gdtadvf = 2.0;
          let redirectZ = String.fromCharCode(115,116,115,99,95,48,95,52,51,0);
          let basketballhometeamz = String.fromCharCode(120,95,56,50,95,109,101,115,115,97,103,101,0);
         models7 *= (parseFloat(`${String.fromCharCode(95,0) == redirectZ ? footballL : redirectZ.length}`));
         gdtadvf /= Math.max(parseFloat(`${3}`), 4);
         basketballhometeamz = `${(String.fromCharCode(111,0) == basketballhometeamz ? basketballhometeamz.length : parseInt(`${gdtadvf}`))}`;
      stringsi += parseInt(`${stringsi}`) >> (Math.min(4, Math.abs(3)));
      matchesX += `${matchesX.length + matchesX.length}`;
   }
   if (storeN.length > 1) {
       let baseline7 = 3.0;
       let defaultfootballbg9 = String.fromCharCode(114,95,50,50,95,103,101,116,115,111,99,107,111,112,116,0);
      for (let a = 0; a < 1; a++) {
          let notificationfillempty0 = String.fromCharCode(103,95,49,51,95,100,101,115,99,112,114,105,112,116,105,111,110,0);
          let attributedstring4: Array<any> = [341, 934];
          let fillI = 1.0;
         baseline7 *= parseFloat(`${attributedstring4.length % (Math.max(1, 4))}`);
         notificationfillempty0 = `${(String.fromCharCode(77,0) == notificationfillempty0 ? notificationfillempty0.length : parseInt(`${fillI}`))}`;
         attributedstring4.push(parseInt(`${fillI}`));
      }
         defaultfootballbg9 += "3";
      if (5.90 == (baseline7 / (Math.max(parseFloat(`${defaultfootballbg9.length}`), 9))) || (defaultfootballbg9.length / (Math.max(3, parseInt(`${baseline7}`)))) == 4) {
         defaultfootballbg9 = `${parseInt(`${baseline7}`)}`;
      }
       let statisticsinactivew = 3;
          let otheri = 3.0;
         defaultfootballbg9 += `${defaultfootballbg9.length}`;
         otheri += parseInt(`${otheri}`);
      for (let a = 0; a < 2; a++) {
         defaultfootballbg9 += "3";
      }
      storeN += "2";
   }
      stringsi /= Math.max(penaltygoalw.length * 1, 5);
      defaultroombgu = !defaultroombgu;
   let iconshared = commone <= 6219387.0;
   do {
      commone += vietnam6.length + penaltygoalw.length;
      if (iconshared) {
         break;
      }
   } while ((!storeN.startsWith(`${commone}`)) && iconshared);
      becomea = new Map([[`${defaultroombgu}`, ((defaultroombgu ? 5 : 1) ^ 3)]]);
       let interstitialN = String.fromCharCode(105,95,52,95,116,105,110,105,116,0);
       let mbjscommoni = String.fromCharCode(98,105,111,109,101,116,114,121,95,49,95,50,52,0);
      for (let v = 0; v < 3; v++) {
         mbjscommoni = `${(String.fromCharCode(97,0) == mbjscommoni ? interstitialN.length : mbjscommoni.length)}`;
      }
         interstitialN = `${mbjscommoni.length}`;
          let injury2 = String.fromCharCode(118,99,116,101,115,116,95,52,95,50,49,0);
          let previewz = false;
          let m_hashd = 1;
         mbjscommoni = `${(String.fromCharCode(55,0) == mbjscommoni ? injury2.length : mbjscommoni.length)}`;
         injury2 = `${m_hashd}`;
         previewz = !previewz;
         m_hashd /= Math.max(5, 1);
       let c_playerj: Array<any> = [16, 23, 619];
       let defaultfootballbgO: Array<any> = [String.fromCharCode(97,95,49,52,95,97,110,110,101,120,98,109,112,0), String.fromCharCode(121,95,49,48,48,95,102,117,110,110,121,0)];
       let jingdongF = String.fromCharCode(109,101,97,115,117,114,101,115,95,55,95,49,52,0);
       let movies_ = String.fromCharCode(115,104,97,100,101,95,101,95,57,56,0);
         mbjscommoni = `${2 - movies_.length}`;
      vietnam6 = [3 + penaltygoalw.length];
      storeN += `${codeh.length >> (Math.min(disconnectedd.length, 5))}`;
   for (let b = 0; b < 3; b++) {
       let anytimeK = 5;
       let delegate_iy = 1.0;
       let friends6 = String.fromCharCode(109,95,55,51,95,107,97,108,109,97,110,0);
       let libpangleflippedn = 4;
       let mbsplashp = String.fromCharCode(116,101,115,101,100,103,101,95,99,95,50,51,0);
      if (3.81 <= (delegate_iy * mbsplashp.length)) {
         mbsplashp = `${(String.fromCharCode(53,0) == friends6 ? friends6.length : anytimeK)}`;
      }
      let uploadw = mbsplashp.length >= 7964845;
      do {
         mbsplashp += `${friends6.length + mbsplashp.length}`;
         if (uploadw) {
            break;
         }
      } while ((friends6.length > mbsplashp.length) && uploadw);
          let minivodD = String.fromCharCode(114,116,112,114,101,99,101,105,118,101,114,95,55,95,57,0);
          let phone7 = true;
         mbsplashp += `${libpangleflippedn}`;
         minivodD += `${((phone7 ? 2 : 1))}`;
         phone7 = !phone7;
         friends6 += `${parseInt(`${delegate_iy}`)}`;
         anytimeK %= Math.max(1, 3);
         libpangleflippedn |= 1 - parseInt(`${delegate_iy}`);
          let infoR = 2;
          let libjsinspectorE = 1.0;
          let predictionarrowq = 1.0;
         delegate_iy *= 3;
         infoR ^= 2;
         libjsinspectorE /= Math.max(1, parseFloat(`${parseInt(`${libjsinspectorE}`)}`));
         predictionarrowq /= Math.max(parseFloat(`${infoR & 2}`), 4);
         delegate_iy *= friends6.length;
      if (!friends6.startsWith(mbsplashp)) {
          let libreactperfloggerjni0 = String.fromCharCode(102,95,54,50,95,116,97,114,103,101,116,0);
          let sportc = true;
          let hooksW = 1.0;
          let rewardP = 1;
          let preview_ = 5;
         friends6 = `${libreactperfloggerjni0.length}`;
         libreactperfloggerjni0 = `${((sportc ? 2 : 5) - parseInt(`${hooksW}`))}`;
         sportc = 33.83 <= hooksW;
         rewardP /= Math.max(((sportc ? 4 : 4) | parseInt(`${hooksW}`)), 1);
         preview_ <<= Math.min(3, Math.abs(2 / (Math.max(8, parseInt(`${hooksW}`)))));
      }
       let customq = 4.0;
       let cornerH = 5;
       let reactv = 2;
      for (let x = 0; x < 2; x++) {
          let routerZ = String.fromCharCode(118,95,52,95,99,97,99,104,101,102,108,117,115,104,0);
          let flyerv = 4.0;
          let default_fe0 = 5;
          let launcho = String.fromCharCode(115,97,116,117,114,97,116,101,95,100,95,52,0);
         customq /= Math.max(3, parseFloat(`${1}`));
         routerZ = `${parseInt(`${flyerv}`)}`;
         flyerv += 1 + default_fe0;
         default_fe0 &= 1 | launcho.length;
         launcho = `${default_fe0 ^ 1}`;
      }
          let iconsaveimage_ = false;
         mbsplashp += `${1 * parseInt(`${customq}`)}`;
         iconsaveimage_ = (iconsaveimage_ ? !iconsaveimage_ : iconsaveimage_);
         delegate_iy /= Math.max(libpangleflippedn | reactv, 4);
      if (4 > libpangleflippedn) {
          let currentj = 5;
         libpangleflippedn += reactv;
         currentj += 3;
      }
      vietnam6.push(anytimeK | codeh.length);
   }

    dispatch(clearSearchHistory());
  }, []);

  
  const onClickSearchResult = useCallback(() => {
       let reactnavigationG = 0;
    let progresss = String.fromCharCode(109,115,109,112,101,103,95,104,95,50,52,0);
    let morev = String.fromCharCode(97,95,55,57,95,108,111,115,101,0);
    let halfh: Array<any> = [343, 725];
    let floatingw = 4;
    let sentryV = 0.0;
    let controlsC: Array<any> = [717, 931];
    let nativemoduleh = String.fromCharCode(101,122,105,101,114,95,99,95,55,49,0);
    let iconscheduled = true;
    let next3 = String.fromCharCode(112,95,54,50,95,97,114,99,104,105,118,101,0);
    let bing5 = 1.0;
    let room0 = String.fromCharCode(103,95,50,55,95,115,105,109,117,108,97,116,105,111,110,0);
    let unews6 = 2.0;
    let policyQ = true;
      nativemoduleh += `${controlsC.length}`;
      reactnavigationG += next3.length << (Math.min(morev.length, 2));
      nativemoduleh = `${(progresss == String.fromCharCode(51,0) ? controlsC.length : progresss.length)}`;
      sentryV *= (String.fromCharCode(99,0) == next3 ? reactnavigationG : next3.length);
   for (let x = 0; x < 3; x++) {
       let downarrowz = 3.0;
       let analyticD: Map<any, any> = new Map([[String.fromCharCode(112,95,51,95,115,117,98,116,114,97,99,116,105,110,103,0),true ], [String.fromCharCode(101,114,97,115,105,110,103,95,56,95,48,0),false ], [String.fromCharCode(118,95,53,50,95,100,101,101,112,101,114,0),true ]]);
       let playlistk = String.fromCharCode(119,95,54,54,95,99,104,97,114,115,0);
       let backicon1 = 2.0;
      if ((downarrowz / (Math.max(backicon1, 2))) == 1.30 && (backicon1 * 1.30) == 2.20) {
         backicon1 += playlistk.length | parseInt(`${downarrowz}`);
      }
      if (!Array.from(analyticD.values()).includes(downarrowz)) {
          let smalli = 3;
         downarrowz += 3 << (Math.min(3, Math.abs(smalli)));
      }
      let filleds = 9634696 >= analyticD.size;
      do {
         analyticD = new Map([[`${analyticD.size}`, analyticD.size % (Math.max(playlistk.length, 1))]]);
         if (filleds) {
            break;
         }
      } while (filleds && ((playlistk.length & 1) <= 3));
         playlistk += "1";
         analyticD.set(`${downarrowz}`, 3);
      for (let r = 0; r < 2; r++) {
         downarrowz /= Math.max(analyticD.size, 1);
      }
      if (2.72 >= (downarrowz / 5.35) && 1.46 >= (downarrowz / (Math.max(5.35, 8)))) {
          let huaweij: Map<any, any> = new Map([[String.fromCharCode(110,101,119,108,105,110,101,115,95,98,95,51,50,0),877], [String.fromCharCode(115,95,56,49,95,98,97,110,110,101,114,0),175], [String.fromCharCode(122,95,57,49,95,107,105,110,103,0),957]]);
          let libfbjniW = false;
          let x_countf = String.fromCharCode(99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,95,56,95,52,51,0);
         analyticD = new Map([[playlistk, (1 << (Math.min(3, Math.abs((libfbjniW ? 3 : 4)))))]]);
         huaweij = new Map([[`${huaweij.size}`, x_countf.length << (Math.min(1, Math.abs(huaweij.size)))]]);
         libfbjniW = x_countf.length >= huaweij.size;
      }
         analyticD = new Map([[`${analyticD.size}`, parseInt(`${backicon1}`)]]);
         analyticD = new Map([[`${analyticD.size}`, (playlistk == String.fromCharCode(48,0) ? analyticD.size : playlistk.length)]]);
      while ((downarrowz * 4.2) <= 1.27 && (analyticD.size << (Math.min(Math.abs(4), 2))) <= 5) {
         downarrowz -= 1;
         break;
      }
         playlistk = `${(playlistk == String.fromCharCode(114,0) ? playlistk.length : parseInt(`${backicon1}`))}`;
         playlistk += `${1 ^ parseInt(`${downarrowz}`)}`;
      next3 = `${halfh.length - playlistk.length}`;
   }
       let serviceW: Array<any> = [276, 400, 472];
       let orientationf = String.fromCharCode(121,117,118,95,50,95,57,48,0);
       let floating1 = true;
      for (let x = 0; x < 1; x++) {
         floating1 = !floating1;
      }
      let controlL = floating1 ? !floating1 : floating1;
      do {
          let crownw = String.fromCharCode(119,95,55,56,0);
          let completeg = 1;
         floating1 = !floating1;
         crownw = `${crownw.length}`;
         completeg &= crownw.length / (Math.max(10, completeg));
         if (controlL) {
            break;
         }
      } while (controlL && (floating1));
       let selected1 = 2.0;
      for (let t = 0; t < 2; t++) {
         selected1 /= Math.max(((floating1 ? 5 : 4) ^ parseInt(`${selected1}`)), 3);
      }
         floating1 = 92 >= orientationf.length;
      nativemoduleh = `${parseInt(`${sentryV}`)}`;
      serviceW.push(serviceW.length);
      orientationf = `${serviceW.length >> (Math.min(4, serviceW.length))}`;
   while ((4 + reactnavigationG) >= 3) {
       let stationsj = 0.0;
       let guidek = true;
       let clear3 = String.fromCharCode(102,114,101,101,122,101,95,56,95,49,50,0);
       let castV = String.fromCharCode(119,95,52,52,95,118,108,99,111,100,101,99,0);
       let scrollviewF = String.fromCharCode(99,101,110,116,101,114,105,110,103,95,101,95,55,55,0);
      for (let a = 0; a < 2; a++) {
         guidek = scrollviewF.length <= 58;
      }
      if (castV != String.fromCharCode(118,0) && clear3 != String.fromCharCode(100,0)) {
          let brightnessp: Map<any, any> = new Map([[String.fromCharCode(119,95,57,49,95,105,115,115,117,101,114,0),149], [String.fromCharCode(120,95,55,53,95,120,120,99,104,0),208]]);
         clear3 = `${scrollviewF.length}`;
         brightnessp.set(`${brightnessp.size}`, brightnessp.size);
      }
          let whitetickQ: Array<any> = [909, 261];
         clear3 += `${clear3.length}`;
         whitetickQ.push(whitetickQ.length ^ whitetickQ.length);
      for (let k = 0; k < 1; k++) {
         castV += `${scrollviewF.length}`;
      }
         stationsj *= scrollviewF.length;
      if (!guidek) {
         scrollviewF += `${(String.fromCharCode(90,0) == clear3 ? scrollviewF.length : clear3.length)}`;
      }
         stationsj *= (1 >> (Math.min(1, Math.abs((guidek ? 5 : 1)))));
          let long_ruC = String.fromCharCode(114,95,57,49,95,118,95,54,55,0);
          let animationr: Map<any, any> = new Map([[String.fromCharCode(107,95,49,57,95,109,117,108,116,105,112,108,101,120,0),12], [String.fromCharCode(121,95,54,48,95,105,110,100,101,112,101,110,100,101,110,99,101,0),961]]);
          let libavcodecx = true;
         guidek = !guidek || scrollviewF.length > 83;
         long_ruC += `${long_ruC.length}`;
         animationr.set(long_ruC, ((libavcodecx ? 1 : 3) / (Math.max(long_ruC.length, 10))));
         libavcodecx = !long_ruC.startsWith(`${libavcodecx}`);
      if (4 <= scrollviewF.length) {
         castV += "3";
      }
         clear3 = `${parseInt(`${stationsj}`)}`;
         castV = `${clear3.length}`;
      while (guidek) {
         guidek = scrollviewF.length <= 96;
         break;
      }
       let gmailR = String.fromCharCode(111,112,116,105,109,117,109,95,118,95,51,50,0);
       let gdtadv_ = String.fromCharCode(114,95,53,50,95,118,112,120,101,110,99,0);
          let weathery = String.fromCharCode(104,111,117,114,95,57,95,55,52,0);
          let layouti: Map<any, any> = new Map([[String.fromCharCode(119,95,52,0),591], [String.fromCharCode(118,95,50,52,95,98,97,114,101,0),61]]);
          let androidy = String.fromCharCode(112,95,54,49,95,102,108,97,115,104,115,118,0);
         clear3 += `${2 << (Math.min(5, castV.length))}`;
         weathery += `${weathery.length >> (Math.min(androidy.length, 5))}`;
         layouti.set(weathery, weathery.length + 1);
         androidy = "1";
      for (let w = 0; w < 3; w++) {
         gdtadv_ += `${parseInt(`${stationsj}`) / 2}`;
      }
      reactnavigationG &= 2 | parseInt(`${sentryV}`);
      break;
   }
       let iconclosewhitebgU = String.fromCharCode(97,95,50,52,95,100,101,115,114,111,121,0);
       let contexto = String.fromCharCode(120,95,56,54,95,116,114,105,103,103,101,114,0);
       let componentJ = true;
         componentJ = !componentJ;
      if (!componentJ && iconclosewhitebgU.length >= 2) {
          let gmailA = String.fromCharCode(109,95,57,51,95,120,109,97,115,109,0);
          let flyer8 = String.fromCharCode(117,112,115,104,105,102,116,101,100,95,118,95,55,56,0);
         iconclosewhitebgU = `${1 + iconclosewhitebgU.length}`;
         gmailA += `${3 & gmailA.length}`;
         flyer8 = `${gmailA.length}`;
      }
         componentJ = contexto.length == iconclosewhitebgU.length;
      if (componentJ) {
         componentJ = (iconclosewhitebgU.length << (Math.min(contexto.length, 3))) < 62;
      }
         componentJ = !componentJ;
      let loadingP = componentJ ? !componentJ : componentJ;
      do {
         componentJ = iconclosewhitebgU.length >= contexto.length;
         if (loadingP) {
            break;
         }
      } while ((contexto.length <= 3) && loadingP);
      while (!componentJ || contexto.length > 2) {
         contexto += `${iconclosewhitebgU.length ^ 2}`;
         break;
      }
         contexto += `${(contexto.length ^ (componentJ ? 3 : 5))}`;
         componentJ = !iconclosewhitebgU.startsWith(`${componentJ}`);
      floatingw <<= Math.min(Math.abs(3), 1);
       let libfabricjniu: Array<any> = [302, 232, 818];
       let iconnointernetn = 3.0;
       let libjsinspectorG = 1.0;
       let profileactivel = 2.0;
       let reactnativejsZ: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,116,105,111,110,105,110,103,95,53,95,49,54,0),true ], [String.fromCharCode(115,95,55,51,95,97,117,120,105,108,105,97,114,121,0),true ]]);
       let dark8: Map<any, any> = new Map([[String.fromCharCode(110,97,108,117,95,48,95,54,49,0),747], [String.fromCharCode(119,95,50,56,95,111,112,97,113,117,101,0),695], [String.fromCharCode(99,95,50,49,95,115,104,105,102,116,115,0),860]]);
      while ((libfabricjniu.length / (Math.max(2, profileactivel))) >= 1.3 && 5.74 >= (profileactivel / 1.3)) {
         profileactivel -= dark8.size * reactnativejsZ.size;
         break;
      }
      while (profileactivel > reactnativejsZ.size) {
         profileactivel /= Math.max(4, reactnativejsZ.size + 1);
         break;
      }
      for (let b = 0; b < 1; b++) {
          let material5 = 1.0;
          let commentb: Array<any> = [65, 553, 38];
          let langq: Array<any> = [187, 978, 96];
          let ocopy_6J = String.fromCharCode(100,105,97,108,108,101,100,95,56,95,56,50,0);
         iconnointernetn /= Math.max(parseFloat(`${ocopy_6J.length ^ reactnativejsZ.size}`), 5);
         material5 *= parseFloat(`${3 & parseInt(`${material5}`)}`);
         commentb.push(commentb.length << (Math.min(3, Math.abs(parseInt(`${material5}`)))));
         langq = [langq.length - parseInt(`${material5}`)];
         ocopy_6J += `${commentb.length}`;
      }
      if (3 >= (reactnativejsZ.size % 5) || (reactnativejsZ.size % (Math.max(5, 10))) >= 2) {
         dark8 = new Map([[`${profileactivel}`, parseInt(`${profileactivel}`) >> (Math.min(Math.abs(parseInt(`${libjsinspectorG}`)), 1))]]);
      }
      iconscheduled = 74 >= libfabricjniu.length || 74 >= morev.length;
   while (!nativemoduleh.endsWith(progresss)) {
      progresss = `${parseInt(`${bing5}`)}`;
      break;
   }
   let iconedit3 = morev.length <= 6853752;
   do {
       let armva8 = String.fromCharCode(114,101,105,115,115,117,101,95,55,95,55,53,0);
       let appleW = 1.0;
      let baseN = appleW >= 6886259.0;
      do {
          let telegramv = String.fromCharCode(115,95,56,56,95,121,111,117,0);
          let subtextn = 2.0;
         appleW -= parseInt(`${subtextn}`) | 1;
         telegramv = `${telegramv.length}`;
         subtextn -= parseFloat(`${telegramv.length + telegramv.length}`);
         if (baseN) {
            break;
         }
      } while ((1 == (armva8.length % 5) || (armva8.length + parseInt(`${appleW}`)) == 5) && baseN);
      while ((3 ^ armva8.length) == 2 || (appleW / 3.75) == 5.22) {
          let vipsportt = String.fromCharCode(118,101,108,111,99,105,116,121,95,122,95,57,51,0);
         armva8 = `${armva8.length}`;
         vipsportt += `${vipsportt.length >> (Math.min(Math.abs(1), 3))}`;
         break;
      }
      if ((appleW - armva8.length) >= 4.67) {
         appleW *= 2;
      }
          let xvod7 = String.fromCharCode(101,110,104,97,110,99,101,100,95,112,95,54,53,0);
         armva8 += `${armva8.length - parseInt(`${appleW}`)}`;
         xvod7 += `${xvod7.length}`;
         appleW -= 1 & parseInt(`${appleW}`);
          let nbatrophyX = String.fromCharCode(99,104,97,114,108,101,110,95,50,95,51,49,0);
          let scheduleW = 1.0;
         armva8 = `${(armva8 == String.fromCharCode(106,0) ? armva8.length : nbatrophyX.length)}`;
         nbatrophyX += "3";
         scheduleW /= Math.max(5, parseInt(`${scheduleW}`) ^ 2);
      morev = `${floatingw + 2}`;
      if (iconedit3) {
         break;
      }
   } while (((4 & morev.length) == 5) && iconedit3);
      controlsC.push((nativemoduleh.length / (Math.max(7, (iconscheduled ? 5 : 5)))));
      room0 = `${(String.fromCharCode(111,0) == next3 ? next3.length : (iconscheduled ? 2 : 5))}`;
   while (halfh.length > controlsC.length) {
      halfh = [progresss.length << (Math.min(4, nativemoduleh.length))];
      break;
   }
   let eighteenf = String.fromCharCode(121,56,108,109,106,119,104,0) == progresss;
   do {
       let bang3 = String.fromCharCode(121,95,56,49,95,105,111,118,101,99,105,110,0);
       let event_ = 5;
       let renderS = String.fromCharCode(115,120,110,101,116,95,102,95,55,52,0);
         event_ |= 1;
      while (renderS.startsWith(`${bang3.length}`)) {
          let basketballhometeamz = 3;
          let sinaJ = false;
          let blackS = 4.0;
          let launcherl = String.fromCharCode(102,105,110,105,115,101,100,95,121,95,53,0);
          let binddatas3 = 2.0;
         renderS += `${bang3.length}`;
         basketballhometeamz += parseInt(`${blackS}`) | 3;
         sinaJ = !sinaJ && 7 < basketballhometeamz;
         blackS /= Math.max((parseFloat(`${String.fromCharCode(79,0) == launcherl ? parseInt(`${blackS}`) : launcherl.length}`)), 4);
         binddatas3 /= Math.max(1 - parseInt(`${binddatas3}`), 3);
         break;
      }
         bang3 += `${renderS.length}`;
      if (renderS.length >= event_) {
         event_ %= Math.max(1, 4);
      }
         bang3 += `${event_}`;
         event_ += bang3.length / 2;
      while (renderS == String.fromCharCode(53,0)) {
         bang3 += `${3 & bang3.length}`;
         break;
      }
         renderS += `${event_}`;
         renderS = `${renderS.length}`;
      progresss += `${event_}`;
      if (eighteenf) {
         break;
      }
   } while (eighteenf && (!progresss.startsWith(`${reactnavigationG}`)));
      reactnavigationG *= next3.length & 3;
      bing5 *= 1 << (Math.min(1, Math.abs(parseInt(`${bing5}`))));
      floatingw *= 1 / (Math.max(3, parseInt(`${unews6}`)));
      controlsC = [halfh.length];
      controlsC = [nativemoduleh.length / 2];

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
