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
import { wawaUsernameAdult } from "@api";
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";

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
  const [searchLimit, setSearchLimit] = useState(0)

  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(
    ({ searchHistoryReducer }: wawaIconsubssuccess) => searchHistoryReducer
  );
  const [isFetching, setisFetching] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { colors, textVariants, spacing, icons } = useTheme();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

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

  async function fetchNextPage(text: string, userSearch: boolean = false) {
    if (!hasMore || isFetching) {
      return; 
    }

    setisFetching(true);

    const nextPage = page + 1;
    wawaUsernameAdult.getListByKeyword(text, {
      page: nextPage,
    }).then((data) => {
      setSearchTimer(0);

      if (data.length <= 0) {
        setHasMore(false); 
      } else {
        
        setSearchResults([...searchResults, ...json.data.List]);
        setPage(nextPage);
        
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

  const handleEndReached = () => {
       let time_bhh = 3.0;
    let mintegralx = String.fromCharCode(116,95,51,53,95,109,101,109,110,0);
    let dplusG: Array<any> = [String.fromCharCode(118,95,56,95,99,111,110,102,105,103,117,114,101,0), String.fromCharCode(100,95,53,48,95,97,100,103,114,111,117,112,0), String.fromCharCode(108,105,98,115,112,101,101,120,95,53,95,50,55,0)];
    let mbjscommon8 = true;
    let combinedi = false;
    let leaguei = String.fromCharCode(97,95,55,95,109,115,118,99,0);
    let clockx = String.fromCharCode(102,95,52,54,95,121,117,121,116,111,121,118,0);
    let star2: Map<any, any> = new Map([[String.fromCharCode(114,97,100,98,95,49,95,56,51,0),763], [String.fromCharCode(101,95,50,55,95,105,110,99,114,109,101,114,103,101,0),81], [String.fromCharCode(105,115,110,97,110,95,108,95,54,57,0),16]]);
    let albumd = 2.0;
    let becomeb = 4;
   while (4 < (2 << (Math.min(3, mintegralx.length))) || 2 < (mintegralx.length << (Math.min(4, dplusG.length)))) {
       let kickz = String.fromCharCode(98,95,57,51,95,98,101,122,101,108,0);
       let screenQ = String.fromCharCode(98,95,51,49,95,109,97,99,101,0);
       let championF = String.fromCharCode(111,95,55,49,95,99,95,53,55,0);
       let found9 = String.fromCharCode(120,95,57,52,95,100,101,112,111,115,105,116,0);
       let casty = String.fromCharCode(97,102,102,105,110,105,116,105,101,115,95,107,95,53,56,0);
         found9 += `${kickz.length}`;
          let textl: Array<any> = [729, 941, 515];
          let trasho: Array<any> = [450, 806];
          let mail8 = String.fromCharCode(120,95,49,57,95,102,105,110,97,108,0);
         kickz += `${kickz.length}`;
         textl = [trasho.length % 2];
         trasho = [mail8.length + 3];
         mail8 += `${2 / (Math.max(4, trasho.length))}`;
      for (let c = 0; c < 2; c++) {
         casty += `${championF.length}`;
      }
          let textS = 5.0;
          let iconnointernetx = true;
         found9 += "2";
         textS -= parseInt(`${textS}`);
         iconnointernetx = 16.21 >= (textS * textS);
         championF = `${championF.length}`;
         championF = `${(String.fromCharCode(95,0) == screenQ ? found9.length : screenQ.length)}`;
      while (kickz.length > 5) {
         kickz = `${casty.length}`;
         break;
      }
      let routers = String.fromCharCode(116,101,120,114,105,107,100,115,0) == kickz;
      do {
         kickz = `${championF.length / (Math.max(7, casty.length))}`;
         if (routers) {
            break;
         }
      } while ((kickz.length == 5) && routers);
         kickz = `${kickz.length}`;
      if (casty.length >= found9.length) {
          let circle8 = true;
         casty += `${2 & found9.length}`;
         circle8 = !circle8;
      }
      for (let z = 0; z < 2; z++) {
         kickz += `${championF.length}`;
      }
      if (casty.length <= 2) {
         found9 += `${1 & casty.length}`;
      }
      while (!screenQ.includes(kickz)) {
          let libavfilterM = 3;
          let iconpipshrinkl = String.fromCharCode(110,95,55,48,95,101,120,114,100,115,112,0);
          let render9 = false;
          let imagesj: Map<any, any> = new Map([[String.fromCharCode(104,95,50,95,116,114,117,101,109,111,116,105,111,110,100,97,116,97,0),634], [String.fromCharCode(116,95,57,57,95,115,116,111,114,101,102,114,97,109,101,0),237], [String.fromCharCode(115,95,56,55,95,115,117,98,112,101,108,0),101]]);
         screenQ += `${championF.length}`;
         libavfilterM /= Math.max(2, iconpipshrinkl.length << (Math.min(4, Math.abs(libavfilterM))));
         iconpipshrinkl = `${iconpipshrinkl.length}`;
         render9 = (imagesj.size - iconpipshrinkl.length) > 82;
         imagesj = new Map([[`${imagesj.size}`, imagesj.size & 1]]);
         break;
      }
      for (let y = 0; y < 1; y++) {
         casty = `${found9.length - 2}`;
      }
       let filedK = String.fromCharCode(99,121,117,118,95,119,95,55,57,0);
       let streamingr = String.fromCharCode(104,95,49,51,95,101,114,114,108,111,103,0);
      mintegralx += `${(kickz.length * (combinedi ? 3 : 5))}`;
      break;
   }
      leaguei = `${((mbjscommon8 ? 1 : 3) * (combinedi ? 4 : 3))}`;
       let iconarrowrightblacki: Array<any> = [516, 385];
       let foregroundc = String.fromCharCode(109,101,100,105,97,95,49,95,52,53,0);
       let iconwatchq = 5;
         iconarrowrightblacki = [3 ^ iconwatchq];
          let zhengpianc = 3.0;
          let stylesS: Map<any, any> = new Map([[String.fromCharCode(115,95,49,48,95,110,105,108,0),681], [String.fromCharCode(111,95,51,53,95,100,97,117,98,101,99,104,105,101,115,0),77]]);
         iconarrowrightblacki = [iconwatchq];
         zhengpianc /= Math.max(5, parseFloat(`${stylesS.size - parseInt(`${zhengpianc}`)}`));
         stylesS.set(`${zhengpianc}`, stylesS.size >> (Math.min(1, Math.abs(parseInt(`${zhengpianc}`)))));
      let upload9 = iconwatchq <= 8371520;
      do {
          let render3 = true;
         iconwatchq -= 1;
         render3 = !render3;
         if (upload9) {
            break;
         }
      } while (upload9 && (!foregroundc.includes(`${iconwatchq}`)));
          let iconlogoutw = false;
          let imageactionliveD = 5.0;
         iconarrowrightblacki = [2];
         iconlogoutw = 6.46 <= imageactionliveD && iconlogoutw;
         imageactionliveD *= ((iconlogoutw ? 1 : 4) / (Math.max(1, parseInt(`${imageactionliveD}`))));
          let upgradex: Array<any> = [857, 832];
          let bootsplash_ = String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,100,95,120,95,57,55,0);
          let iconviewergifX = String.fromCharCode(100,110,120,104,100,101,110,99,95,100,95,57,48,0);
         foregroundc = "3";
         upgradex.push(3);
         bootsplash_ += `${bootsplash_.length * 2}`;
         iconviewergifX += `${1 << (Math.min(3, bootsplash_.length))}`;
          let whitebelln = String.fromCharCode(112,114,105,110,99,105,112,97,108,95,55,95,53,49,0);
          let matchH = 2.0;
          let logouser5 = 2.0;
         foregroundc = `${iconwatchq % 3}`;
         whitebelln = `${parseInt(`${logouser5}`) + 2}`;
         matchH += parseFloat(`${parseInt(`${logouser5}`)}`);
      for (let q = 0; q < 1; q++) {
         foregroundc = `${iconarrowrightblacki.length - foregroundc.length}`;
      }
      while (iconwatchq <= 5) {
         foregroundc = `${iconarrowrightblacki.length >> (Math.min(foregroundc.length, 2))}`;
         break;
      }
          let subbasketballplayerS = 2.0;
          let modex = 5.0;
         foregroundc += `${iconwatchq}`;
         subbasketballplayerS += 2;
         modex -= parseFloat(`${3}`);
      combinedi = !clockx.startsWith(`${mbjscommon8}`);
       let videojsb = 4.0;
         videojsb *= parseInt(`${videojsb}`) << (Math.min(4, Math.abs(1)));
         videojsb -= parseInt(`${videojsb}`) & parseInt(`${videojsb}`);
         videojsb += parseInt(`${videojsb}`);
      mintegralx += `${mintegralx.length % (Math.max(1, 10))}`;
      leaguei += "1";
   if (4.71 >= time_bhh && 5.85 >= (4.71 * time_bhh)) {
      mbjscommon8 = combinedi;
   }
   for (let e = 0; e < 3; e++) {
      combinedi = dplusG.length >= 6 || mbjscommon8;
   }
   if ((star2.size - 2) < 2) {
      clockx = `${1 ^ clockx.length}`;
   }
   if ((time_bhh + parseFloat(`${mintegralx.length}`)) <= 2.37) {
      time_bhh += parseFloat(`${dplusG.length}`);
   }
   let gdtadv2 = 7694472 <= star2.size;
   do {
       let webviewZ = 4.0;
       let scorepopsoundp = 5;
       let libaneF = 0;
       let sigmobg = String.fromCharCode(114,95,52,51,0);
         scorepopsoundp &= parseInt(`${webviewZ}`);
       let libavutilT = 2.0;
         libavutilT *= parseFloat(`${sigmobg.length - 3}`);
          let penaltygoal8 = String.fromCharCode(102,95,56,53,95,99,111,110,118,0);
          let penaltymatchiconM = true;
         scorepopsoundp &= (sigmobg == String.fromCharCode(112,0) ? (penaltymatchiconM ? 2 : 4) : sigmobg.length);
         penaltygoal8 += `${penaltygoal8.length}`;
         penaltymatchiconM = penaltygoal8 == penaltygoal8;
      let arrowrightwithtaild = libaneF <= 9791852;
      do {
         libaneF /= Math.max(1, 3);
         if (arrowrightwithtaild) {
            break;
         }
      } while (arrowrightwithtaild && (libaneF <= scorepopsoundp));
      for (let m = 0; m < 2; m++) {
          let closeJ = String.fromCharCode(102,95,50,55,95,97,112,105,115,0);
          let imagenomoredataA: Array<any> = [String.fromCharCode(102,95,48,95,118,111,105,112,0), String.fromCharCode(102,95,57,54,95,115,116,100,101,114,114,0)];
         libavutilT -= parseFloat(`${1 >> (Math.min(4, closeJ.length))}`);
         closeJ += `${imagenomoredataA.length + imagenomoredataA.length}`;
      }
         libavutilT *= parseFloat(`${parseInt(`${libavutilT}`) % (Math.max(parseInt(`${webviewZ}`), 5))}`);
          let videocommond: Map<any, any> = new Map([[String.fromCharCode(109,95,49,52,95,117,121,118,121,116,111,121,117,118,0),208], [String.fromCharCode(101,95,55,48,95,108,101,109,111,110,0),356]]);
         libavutilT -= parseFloat(`${2 - videocommond.size}`);
      let unread_ = webviewZ >= 6281236.0;
      do {
         webviewZ += 2;
         if (unread_) {
            break;
         }
      } while (((1.80 - webviewZ) == 4.57) && unread_);
         libavutilT *= parseFloat(`${2 & sigmobg.length}`);
       let homeinactive7 = 1.0;
       let runtimeschedulerC = 1.0;
       let abidetectT = 5.0;
      star2 = new Map([[mintegralx, 1]]);
      if (gdtadv2) {
         break;
      }
   } while (gdtadv2 && ((star2.size << (Math.min(Math.abs(3), 3))) >= 2));
      clockx = `${leaguei.length}`;
   while (mintegralx.length == star2.size) {
      star2.set(`${time_bhh}`, (parseInt(`${time_bhh}`) & (combinedi ? 4 : 5)));
      break;
   }
       let icondefaultthumbnail3 = 1;
       let awayn = String.fromCharCode(115,117,98,116,114,97,99,116,109,111,100,95,115,95,52,54,0);
       let vieweri = String.fromCharCode(116,95,54,55,95,110,111,116,104,105,110,103,0);
      while (4 <= awayn.length) {
          let trophyJ = String.fromCharCode(107,95,52,54,95,118,105,100,101,111,115,116,114,101,97,109,0);
          let pathl = 2;
          let overd = String.fromCharCode(97,95,54,54,95,114,101,99,111,103,110,105,116,105,111,110,115,0);
         vieweri += `${awayn.length << (Math.min(3, Math.abs(icondefaultthumbnail3)))}`;
         trophyJ += "1";
         pathl ^= overd.length;
         overd += `${trophyJ.length + overd.length}`;
         break;
      }
         icondefaultthumbnail3 %= Math.max(1, 2 ^ vieweri.length);
      while (icondefaultthumbnail3 >= 5) {
         awayn += `${awayn.length}`;
         break;
      }
      while (5 > (vieweri.length % 2)) {
         icondefaultthumbnail3 += awayn.length << (Math.min(Math.abs(1), 1));
         break;
      }
       let orangetickJ = true;
         icondefaultthumbnail3 *= awayn.length ^ 2;
      let libanej = String.fromCharCode(57,57,104,54,116,0) == vieweri;
      do {
         vieweri += "2";
         if (libanej) {
            break;
         }
      } while ((2 > vieweri.length) && libanej);
          let iconnewchatu = String.fromCharCode(112,97,114,115,101,95,51,95,56,53,0);
         vieweri = `${vieweri.length}`;
         iconnewchatu = `${iconnewchatu.length ^ 1}`;
      if ((icondefaultthumbnail3 >> (Math.min(vieweri.length, 4))) == 1 || 2 == (1 >> (Math.min(4, Math.abs(icondefaultthumbnail3))))) {
         vieweri = `${vieweri.length}`;
      }
      time_bhh *= (parseFloat(`${clockx == String.fromCharCode(115,0) ? clockx.length : mintegralx.length}`));
      leaguei += `${(clockx.length - (mbjscommon8 ? 4 : 5))}`;
       let screenj: Array<any> = [944, 169];
         screenj.push(screenj.length);
          let profileactiveD = String.fromCharCode(105,95,57,56,95,115,117,98,116,101,114,109,0);
         screenj.push((String.fromCharCode(81,0) == profileactiveD ? screenj.length : profileactiveD.length));
         screenj = [screenj.length % (Math.max(screenj.length, 4))];
      mintegralx += `${mintegralx.length}`;
       let mode_ = 5.0;
       let iconschedule6 = 2.0;
      while (1.96 == mode_) {
         mode_ += parseFloat(`${2}`);
         break;
      }
         mode_ -= parseFloat(`${2}`);
         iconschedule6 -= parseInt(`${mode_}`) / 2;
      for (let w = 0; w < 2; w++) {
         mode_ -= parseFloat(`${1 + parseInt(`${mode_}`)}`);
      }
          let styles_ = String.fromCharCode(115,95,49,51,95,118,105,115,105,98,105,108,105,116,105,116,101,115,0);
         iconschedule6 += 3;
         styles_ = `${styles_.length / 3}`;
       let homeinactiveV = String.fromCharCode(114,117,101,95,49,95,54,0);
      star2.set(`${mbjscommon8}`, 1);
   let loadingY = combinedi ? !combinedi : combinedi;
   do {
      combinedi = dplusG.length <= parseInt(`${time_bhh}`);
      if (loadingY) {
         break;
      }
   } while (loadingY && ((dplusG.length - 2) < 5 || dplusG.length < 2));

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
       let orangeuparrowP = String.fromCharCode(121,95,51,50,95,102,114,97,109,101,98,117,102,102,101,114,115,0);
    let configT = 2.0;
    let arrow4 = 2.0;
    let schedulerO = 1.0;
    let assetsX = String.fromCharCode(99,111,110,118,101,114,103,101,110,99,101,95,105,95,56,50,0);
    let memberh = true;
    let q_positiony = false;
    let libfabricjnix = true;
    let detailsj = 2.0;
    let relatedi: Map<any, any> = new Map([[String.fromCharCode(107,95,54,54,0),371], [String.fromCharCode(97,112,99,109,95,115,95,49,52,0),600], [String.fromCharCode(117,114,118,101,95,48,95,55,0),932]]);
    let settingP = 3;
    let shootnogoalH = String.fromCharCode(110,95,49,48,48,95,102,114,101,101,102,111,114,109,0);
    let predictionarrow3: Array<any> = [358, 496];
    let libcxxcomponents7 = true;
   let agreementV = 6298578.0 <= schedulerO;
   do {
      schedulerO += parseFloat(`${3 % (Math.max(1, relatedi.size))}`);
      if (agreementV) {
         break;
      }
   } while ((2.40 >= (3.59 + schedulerO)) && agreementV);
   let playlistR = arrow4 <= 9404205.0;
   do {
      arrow4 += ((libfabricjnix ? 3 : 5) * parseInt(`${arrow4}`));
      if (playlistR) {
         break;
      }
   } while (playlistR && (2.96 == (arrow4 / (Math.max(3.41, 2))) && (relatedi.size / (Math.max(10, arrow4))) == 3.41));

    let searchKeyword = placeholderSearch;

   for (let d = 0; d < 3; d++) {
      detailsj += parseFloat(`${1}`);
   }
   for (let b = 0; b < 3; b++) {
       let libreactperfloggerjnin = 2.0;
       let exampleimageT = String.fromCharCode(97,95,50,48,95,116,114,101,110,100,108,105,110,101,0);
       let watchnowbgZ = 3;
         exampleimageT = `${1 | watchnowbgZ}`;
       let dangerf = true;
       let bodan0 = false;
       let loginQ = false;
       let predictionbuttonL = false;
      if (!predictionbuttonL) {
         predictionbuttonL = !predictionbuttonL;
      }
      while (5 == exampleimageT.length) {
         exampleimageT = `${(2 + (predictionbuttonL ? 1 : 3))}`;
         break;
      }
      let icondownimgJ = predictionbuttonL ? !predictionbuttonL : predictionbuttonL;
      do {
          let i_unlockQ = String.fromCharCode(118,97,108,105,100,97,116,101,95,100,95,57,48,0);
         predictionbuttonL = parseInt(`${libreactperfloggerjnin}`) == exampleimageT.length;
         i_unlockQ += `${(String.fromCharCode(95,0) == i_unlockQ ? i_unlockQ.length : i_unlockQ.length)}`;
         if (icondownimgJ) {
            break;
         }
      } while (icondownimgJ && (predictionbuttonL || !dangerf));
       let flyerR: Map<any, any> = new Map([[String.fromCharCode(115,95,51,48,95,116,97,105,108,0),106], [String.fromCharCode(99,95,55,49,95,101,120,99,101,101,100,105,110,103,0),487], [String.fromCharCode(98,95,54,57,95,102,111,114,116,104,0),369]]);
      for (let d = 0; d < 3; d++) {
          let libjsijniprofiler2 = String.fromCharCode(117,110,98,108,111,99,107,105,110,103,95,110,95,57,48,0);
          let builda = String.fromCharCode(106,95,49,55,95,101,110,106,105,110,0);
          let pushU = 5.0;
         watchnowbgZ += (String.fromCharCode(76,0) == libjsijniprofiler2 ? libjsijniprofiler2.length : parseInt(`${libreactperfloggerjnin}`));
         builda += `${3 / (Math.max(1, parseInt(`${pushU}`)))}`;
         pushU += builda.length >> (Math.min(Math.abs(1), 2));
      }
       let predictionactiveu: Array<any> = [579, 245, 779];
      detailsj *= parseFloat(`${settingP & shootnogoalH.length}`);
   }

    if (search != "") {

       let sharei: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,115,95,105,95,53,53,0),155], [String.fromCharCode(108,97,116,105,110,95,113,95,55,0),550], [String.fromCharCode(114,95,52,54,95,121,117,118,112,108,0),950]]);
       let shielddoneO = String.fromCharCode(98,95,54,48,95,103,99,109,0);
       let whistleM = String.fromCharCode(110,95,50,55,95,114,101,112,108,105,99,97,116,101,0);
      for (let s = 0; s < 3; s++) {
         whistleM += `${whistleM.length * 3}`;
      }
      while (5 == sharei.size) {
         sharei = new Map([[shielddoneO, shielddoneO.length]]);
         break;
      }
         whistleM = "2";
      while (shielddoneO.length <= 3) {
          let bootsplashz = String.fromCharCode(111,95,55,57,95,99,111,110,115,116,114,97,105,110,116,0);
          let turndowni: Map<any, any> = new Map([[String.fromCharCode(100,105,115,115,105,109,95,49,95,50,48,0),false ], [String.fromCharCode(114,95,50,57,95,110,111,110,98,108,111,99,107,105,110,103,0),true ], [String.fromCharCode(107,95,57,95,116,119,111,108,111,111,112,0),true ]]);
          let smallorangemant = String.fromCharCode(100,101,108,101,116,105,110,103,95,122,95,52,48,0);
         shielddoneO += `${(String.fromCharCode(84,0) == bootsplashz ? bootsplashz.length : whistleM.length)}`;
         turndowni = new Map([[`${turndowni.size}`, smallorangemant.length * 3]]);
         smallorangemant += `${turndowni.size}`;
         break;
      }
      while (whistleM.length >= shielddoneO.length) {
         shielddoneO += `${sharei.size}`;
         break;
      }
      if ((4 ^ shielddoneO.length) < 1) {
         sharei = new Map([[whistleM, 2]]);
      }
          let securityg = String.fromCharCode(106,95,49,49,95,103,101,116,110,112,97,115,115,101,115,0);
          let iconviewerx = String.fromCharCode(116,95,51,95,110,111,110,101,109,112,116,121,0);
         shielddoneO += `${3 << (Math.min(5, shielddoneO.length))}`;
         securityg += `${securityg.length}`;
         iconviewerx += `${2 & securityg.length}`;
         whistleM = "2";
      let settingh = String.fromCharCode(98,119,101,102,0) == whistleM;
      do {
         whistleM = `${shielddoneO.length}`;
         if (settingh) {
            break;
         }
      } while (settingh && (shielddoneO.length >= 4));
      configT /= Math.max(orangeuparrowP.length / 3, 5);
   while (memberh && 4.69 < (4.41 + detailsj)) {
       let predictionactiveP = String.fromCharCode(114,101,115,112,111,110,100,95,97,95,51,53,0);
         predictionactiveP = `${predictionactiveP.length}`;
         predictionactiveP = `${1 >> (Math.min(2, predictionactiveP.length))}`;
          let lefth = 2.0;
         predictionactiveP = `${(predictionactiveP == String.fromCharCode(114,0) ? predictionactiveP.length : parseInt(`${lefth}`))}`;
      memberh = (((!libfabricjnix ? 8 : predictionactiveP.length) ^ predictionactiveP.length) <= 8);
      break;
   }
      searchKeyword = search;
    }

    

   for (let h = 0; h < 1; h++) {
      libfabricjnix = q_positiony;
   }
   while (!libfabricjnix) {
      schedulerO *= parseFloat(`${3}`);
      break;
   }
    

      detailsj -= (parseFloat(`${(libfabricjnix ? 4 : 1) - 2}`));
   if (!orangeuparrowP.includes(`${arrow4}`)) {
       let windN = 0.0;
       let refreshz = String.fromCharCode(115,95,50,56,95,118,105,101,119,0);
         windN -= parseFloat(`${refreshz.length}`);
      for (let p = 0; p < 2; p++) {
          let nativemodulel = false;
          let libjsijniprofiler6 = true;
          let profileinactivef = String.fromCharCode(112,114,101,117,112,108,111,97,100,95,115,95,51,50,0);
         refreshz += `${(String.fromCharCode(67,0) == refreshz ? parseInt(`${windN}`) : refreshz.length)}`;
         nativemodulel = (!libjsijniprofiler6 ? !nativemodulel : libjsijniprofiler6);
         profileinactivef += `${((libjsijniprofiler6 ? 5 : 2) ^ (nativemodulel ? 5 : 2))}`;
      }
      while (4.45 == (1.10 + windN) && (1.10 + windN) == 3.92) {
          let tick1 = false;
         refreshz = `${parseInt(`${windN}`) >> (Math.min(refreshz.length, 4))}`;
         tick1 = !tick1;
         break;
      }
       let long_dvC: Array<any> = [623, 352, 445];
       let adultk: Array<any> = [706, 594];
         long_dvC.push((refreshz == String.fromCharCode(78,0) ? refreshz.length : parseInt(`${windN}`)));
      if (long_dvC.includes(windN)) {
         windN += parseFloat(`${refreshz.length}`);
      }
      orangeuparrowP = `${(assetsX == String.fromCharCode(66,0) ? (libfabricjnix ? 5 : 3) : assetsX.length)}`;
   }
    

   if (assetsX.length <= parseInt(`${schedulerO}`)) {
      assetsX += `${(String.fromCharCode(121,0) == shootnogoalH ? relatedi.size : shootnogoalH.length)}`;
   }
       let defaultlogoj = 5.0;
       let with__r = String.fromCharCode(115,110,97,112,112,101,100,95,104,95,49,56,0);
      if (!with__r.endsWith(`${defaultlogoj}`)) {
         with__r = `${(with__r == String.fromCharCode(110,0) ? parseInt(`${defaultlogoj}`) : with__r.length)}`;
      }
      for (let h = 0; h < 1; h++) {
         defaultlogoj *= parseInt(`${defaultlogoj}`);
      }
      for (let u = 0; u < 3; u++) {
         with__r = `${(with__r == String.fromCharCode(69,0) ? with__r.length : parseInt(`${defaultlogoj}`))}`;
      }
       let components8 = true;
       let nalyticsS = true;
       let imageactionliveN = 5.0;
       let indicator9 = 3.0;
      if (indicator9 > 2.64 || 4.13 > (indicator9 + 2.64)) {
         nalyticsS = parseInt(`${imageactionliveN}`) == with__r.length;
      }
      orangeuparrowP = `${3 - parseInt(`${defaultlogoj}`)}`;
    

   if (3.75 == (schedulerO / 4.70)) {
      schedulerO += parseFloat(`${assetsX.length + 1}`);
   }
   for (let c = 0; c < 2; c++) {
      configT *= 1 << (Math.min(5, Math.abs(relatedi.size)));
   }

    

   while (!libfabricjnix && 3.81 >= (5.41 - detailsj)) {
      libfabricjnix = shootnogoalH.length == 40;
      break;
   }
   for (let u = 0; u < 2; u++) {
      orangeuparrowP = `${parseInt(`${detailsj}`) ^ parseInt(`${schedulerO}`)}`;
   }
    

   let modulesK = configT <= 8667096.0;
   do {
      configT += 1 >> (Math.min(4, Math.abs(relatedi.size)));
      if (modulesK) {
         break;
      }
   } while (modulesK && (5 < (5 | settingP) && (settingP ^ 5) < 5));
   for (let v = 0; v < 1; v++) {
      assetsX = `${(String.fromCharCode(114,0) == orangeuparrowP ? (q_positiony ? 3 : 5) : orangeuparrowP.length)}`;
   }
    

      arrow4 -= assetsX.length;
      arrow4 *= assetsX.length - 2;
    

   if (assetsX.endsWith(`${memberh}`)) {
      assetsX = `${parseInt(`${arrow4}`)}`;
   }
       let minivod0 = 2.0;
      while (minivod0 == minivod0) {
         minivod0 *= 3;
         break;
      }
          let fcdaebecbcbafcdfceaaeccfeacdbA: Array<any> = [935, 312, 16];
          let cornerM = String.fromCharCode(120,95,55,54,95,112,107,101,121,0);
         minivod0 -= parseInt(`${minivod0}`) - 1;
         fcdaebecbcbafcdfceaaeccfeacdbA.push(cornerM.length + fcdaebecbcbafcdfceaaeccfeacdbA.length);
         cornerM += `${cornerM.length % (Math.max(3, fcdaebecbcbafcdfceaaeccfeacdbA.length))}`;
      if (minivod0 < minivod0) {
         minivod0 -= 2;
      }
      detailsj *= parseFloat(`${orangeuparrowP.length / (Math.max(2, parseInt(`${minivod0}`)))}`);
    

       let issubR = String.fromCharCode(108,105,98,101,114,116,121,95,116,95,57,54,0);
       let defaultbasketballbgj = 2.0;
         issubR += `${2 ^ parseInt(`${defaultbasketballbgj}`)}`;
         defaultbasketballbgj += parseInt(`${defaultbasketballbgj}`);
      let iconbellE = String.fromCharCode(111,101,101,54,118,109,99,112,114,0) == issubR;
      do {
         issubR = `${parseInt(`${defaultbasketballbgj}`)}`;
         if (iconbellE) {
            break;
         }
      } while ((5 <= issubR.length) && iconbellE);
         issubR += `${issubR.length | 1}`;
      for (let o = 0; o < 1; o++) {
         issubR += `${issubR.length - parseInt(`${defaultbasketballbgj}`)}`;
      }
      for (let c = 0; c < 2; c++) {
          let rewind_: Array<any> = [65, 384];
         defaultbasketballbgj -= parseInt(`${defaultbasketballbgj}`);
         rewind_ = [rewind_.length << (Math.min(Math.abs(2), 4))];
      }
      assetsX += `${(parseInt(`${schedulerO}`) * (q_positiony ? 2 : 1))}`;
      arrow4 -= ((q_positiony ? 5 : 5) / (Math.max(1, (libfabricjnix ? 4 : 2))));
    

   if (relatedi.get(`${configT}`) == null) {
       let condensedl = String.fromCharCode(117,95,56,95,98,108,111,119,102,105,115,104,0);
       let n_imageg = String.fromCharCode(102,95,51,95,105,115,116,114,101,97,109,119,114,97,112,112,101,114,0);
       let cornershooth = String.fromCharCode(97,95,54,50,95,116,109,112,111,0);
       let predictiondefaultR: Map<any, any> = new Map([[String.fromCharCode(111,95,50,48,95,119,101,105,103,104,116,120,0),236], [String.fromCharCode(104,97,97,114,95,120,95,55,55,0),553], [String.fromCharCode(121,95,50,54,95,97,109,114,110,98,100,97,116,97,0),335]]);
       let description_fiz: Array<any> = [String.fromCharCode(114,101,97,108,95,113,95,57,52,0), String.fromCharCode(105,110,105,116,95,113,95,52,51,0)];
         description_fiz.push((n_imageg == String.fromCharCode(75,0) ? condensedl.length : n_imageg.length));
          let goallogoV = String.fromCharCode(109,98,108,111,99,107,95,49,95,49,48,0);
          let awayw: Array<any> = [241, 721, 135];
         predictiondefaultR = new Map([[`${awayw.length}`, (String.fromCharCode(110,0) == goallogoV ? goallogoV.length : awayw.length)]]);
      for (let j = 0; j < 2; j++) {
         predictiondefaultR = new Map([[`${predictiondefaultR.size}`, predictiondefaultR.size ^ cornershooth.length]]);
      }
       let awayo = false;
       let notificationfilledB = true;
      for (let g = 0; g < 1; g++) {
         n_imageg += `${predictiondefaultR.size}`;
      }
      while (5 < (2 >> (Math.min(4, condensedl.length)))) {
          let s_hashF = 2.0;
         description_fiz = [(String.fromCharCode(103,0) == cornershooth ? cornershooth.length : description_fiz.length)];
         s_hashF += parseFloat(`${parseInt(`${s_hashF}`)}`);
         break;
      }
         description_fiz = [description_fiz.length + 1];
      let shrinky = 9406825 <= cornershooth.length;
      do {
         cornershooth += `${(description_fiz.length ^ (awayo ? 2 : 5))}`;
         if (shrinky) {
            break;
         }
      } while ((cornershooth.startsWith(`${awayo}`)) && shrinky);
         condensedl += `${((notificationfilledB ? 4 : 5))}`;
         notificationfilledB = !awayo;
      while (!awayo) {
         awayo = n_imageg == condensedl;
         break;
      }
          let mbbanner4 = 1.0;
          let statsnomoredataO = 3.0;
         cornershooth += `${3 / (Math.max(8, condensedl.length))}`;
         mbbanner4 -= parseInt(`${statsnomoredataO}`) ^ 3;
         statsnomoredataO *= parseFloat(`${parseInt(`${statsnomoredataO}`) * 1}`);
      for (let e = 0; e < 3; e++) {
         notificationfilledB = !n_imageg.endsWith(`${awayo}`);
      }
         predictiondefaultR.set(cornershooth, cornershooth.length);
      if (n_imageg.includes(`${predictiondefaultR.size}`)) {
          let moviest = String.fromCharCode(114,97,112,112,101,114,95,55,95,51,49,0);
          let iconsetting9 = 5.0;
          let gmailC: Array<any> = [632, 880];
          let footballfieldU = String.fromCharCode(99,108,99,112,95,111,95,55,56,0);
         n_imageg += `${(moviest == String.fromCharCode(77,0) ? moviest.length : (notificationfilledB ? 1 : 5))}`;
         iconsetting9 *= parseInt(`${iconsetting9}`) + gmailC.length;
         gmailC = [3];
         footballfieldU += `${footballfieldU.length << (Math.min(2, gmailC.length))}`;
      }
      configT /= Math.max(5, 2);
   }
      q_positiony = parseFloat(`${assetsX.length}`) == detailsj;
    

   for (let g = 0; g < 3; g++) {
      shootnogoalH += `${(orangeuparrowP.length ^ (q_positiony ? 2 : 3))}`;
   }
       let cornershootp = true;
       let libcxxcomponentsq: Map<any, any> = new Map([[String.fromCharCode(111,95,49,48,95,110,99,114,121,112,116,105,111,110,0),586], [String.fromCharCode(121,95,56,56,95,104,101,118,109,97,115,107,0),434], [String.fromCharCode(115,104,105,102,116,101,100,95,110,95,50,49,0),945]]);
       let overlayb = 1.0;
      if (libcxxcomponentsq.get(`${overlayb}`) != null) {
          let clocku: Array<any> = [264, 127, 311];
          let buffera = String.fromCharCode(108,97,116,101,114,95,98,95,51,0);
         libcxxcomponentsq.set(`${overlayb}`, clocku.length + 1);
         clocku = [buffera.length * 1];
         buffera = `${buffera.length << (Math.min(Math.abs(3), 2))}`;
      }
      while (libcxxcomponentsq.size == 3) {
         cornershootp = libcxxcomponentsq.get(`${overlayb}`) == null;
         break;
      }
          let telemetryC = 3.0;
          let icondownimgE = String.fromCharCode(103,114,97,100,102,117,110,95,117,95,49,54,0);
          let launchH: Map<any, any> = new Map([[String.fromCharCode(110,111,114,109,97,108,105,122,101,114,95,57,95,54,53,0),true ], [String.fromCharCode(114,101,112,95,113,95,56,53,0),true ], [String.fromCharCode(109,95,51,53,95,116,117,112,108,101,0),false ]]);
         overlayb += icondownimgE.length;
         telemetryC /= Math.max(4, parseFloat(`${launchH.size - 2}`));
         icondownimgE = `${launchH.size}`;
      while (libcxxcomponentsq.get(`${overlayb}`) == null) {
          let statisticsactiveG = 1.0;
          let zoom_ = 1.0;
          let target5 = String.fromCharCode(119,95,56,53,95,119,112,116,104,114,101,97,100,115,0);
         overlayb -= libcxxcomponentsq.size;
         statisticsactiveG /= Math.max(4, 1 & target5.length);
         zoom_ /= Math.max(5, parseFloat(`${parseInt(`${statisticsactiveG}`)}`));
         target5 += `${2 * target5.length}`;
         break;
      }
         cornershootp = (libcxxcomponentsq.size * parseInt(`${overlayb}`)) > 77;
         libcxxcomponentsq.set(`${cornershootp}`, 1 % (Math.max(parseInt(`${overlayb}`), 3)));
         libcxxcomponentsq = new Map([[`${libcxxcomponentsq.size}`, libcxxcomponentsq.size]]);
      for (let u = 0; u < 1; u++) {
         libcxxcomponentsq = new Map([[`${libcxxcomponentsq.size}`, 1]]);
      }
       let gradleP = String.fromCharCode(98,95,57,48,95,114,111,116,111,0);
      configT += 1;
    

      memberh = configT >= 67.89;
      orangeuparrowP = `${parseInt(`${arrow4}`) * 2}`;
    

      settingP <<= Math.min(Math.abs(assetsX.length % (Math.max(1, shootnogoalH.length))), 5);
   for (let h = 0; h < 1; h++) {
      configT /= Math.max(3, parseInt(`${schedulerO}`));
   }
    

   let videovarn = libfabricjnix ? !libfabricjnix : libfabricjnix;
   do {
      libfabricjnix = shootnogoalH.length >= 57 || libfabricjnix;
      if (videovarn) {
         break;
      }
   } while ((memberh && libfabricjnix) && videovarn);
   while (1 < (parseInt(`${detailsj}`) * assetsX.length) && 1 < (assetsX.length * parseInt(`${detailsj}`))) {
      detailsj /= Math.max(parseFloat(`${assetsX.length | 3}`), 5);
      break;
   }

    fetchData(searchKeyword, true);

      settingP %= Math.max(parseInt(`${configT}`), 5);
   let spinner2 = libfabricjnix ? !libfabricjnix : libfabricjnix;
   do {
       let orientationV = 4.0;
       let crownH = false;
       let flagG = String.fromCharCode(114,105,110,103,98,117,102,102,101,114,95,52,95,54,0);
         crownH = 80.78 >= orientationV && crownH;
      while (flagG.length < 5) {
          let cored: Array<any> = [609, 244, 751];
          let wifirouterc: Array<any> = [String.fromCharCode(114,101,118,105,115,105,111,110,95,49,95,56,49,0), String.fromCharCode(117,110,115,101,114,105,97,108,105,122,101,95,109,95,54,52,0), String.fromCharCode(116,95,56,48,95,105,112,118,105,100,101,111,0)];
         crownH = (cored.length / (Math.max(10, flagG.length))) <= 48;
         cored.push(wifirouterc.length | 3);
         wifirouterc = [3];
         break;
      }
         flagG = `${((crownH ? 3 : 5) * parseInt(`${orientationV}`))}`;
       let appsD = String.fromCharCode(98,97,110,100,119,105,100,116,104,95,117,95,56,57,0);
       let stationh: Array<any> = [539, 292, 757];
      for (let a = 0; a < 3; a++) {
         stationh = [stationh.length & 3];
      }
         flagG += `${appsD.length / 3}`;
      if (1.28 <= orientationV) {
         orientationV /= Math.max(3, flagG.length & 3);
      }
      while (1 > stationh.length) {
         orientationV *= 1;
         break;
      }
      libfabricjnix = parseInt(`${arrow4}`) == relatedi.size;
      if (spinner2) {
         break;
      }
   } while (spinner2 && (libfabricjnix));
    dispatch(addSearchHistory(searchKeyword));

   let specr = 8732613 <= predictionarrow3.length;
   do {
       let smallorangemanv = String.fromCharCode(115,119,105,114,108,95,50,95,51,49,0);
          let detailsp = String.fromCharCode(104,95,53,50,95,121,117,118,114,103,98,0);
          let unfillb = false;
          let iconfeedbackv = false;
         smallorangemanv = `${((iconfeedbackv ? 3 : 4) - smallorangemanv.length)}`;
         detailsp = `${(detailsp == String.fromCharCode(76,0) ? detailsp.length : (unfillb ? 3 : 3))}`;
         unfillb = detailsp.length > 74 && unfillb;
         iconfeedbackv = (18 >= ((!unfillb ? detailsp.length : 18) % (Math.max(detailsp.length, 4))));
      if (smallorangemanv == String.fromCharCode(71,0)) {
         smallorangemanv = `${smallorangemanv.length}`;
      }
         smallorangemanv = `${smallorangemanv.length}`;
      predictionarrow3.push(parseInt(`${arrow4}`) >> (Math.min(1, Math.abs(2))));
      if (specr) {
         break;
      }
   } while (specr && ((1 & predictionarrow3.length) > 2 && 1 > predictionarrow3.length));
   for (let p = 0; p < 1; p++) {
      settingP /= Math.max(4, parseInt(`${configT}`));
   }
    setShowResults(!showResults);
  };

  const clearHistory = useCallback(() => {
       let kuaishouZ: Map<any, any> = new Map([[String.fromCharCode(101,108,108,105,112,116,105,99,95,50,95,54,55,0),String.fromCharCode(113,95,55,54,95,109,101,109,98,101,114,0)], [String.fromCharCode(115,101,116,116,105,116,108,101,95,107,95,52,57,0),String.fromCharCode(105,110,100,101,102,105,110,105,116,101,95,116,95,49,50,0)]]);
    let robotoa = false;
    let smallorangemang = false;
    let taiwan0 = String.fromCharCode(98,114,111,97,100,99,97,115,116,95,99,95,53,51,0);
    let whatsappN: Array<any> = [373, 138, 478];
    let reactnativeratingsn = String.fromCharCode(98,121,112,97,115,115,105,110,103,95,112,95,54,49,0);
    let iconclosewhitewithbgH = 1;
    let penaltymatchiconz = 0.0;
    let time__9F: Array<any> = [249, 530];
    let views7 = String.fromCharCode(113,95,51,53,95,115,105,108,101,110,99,101,0);
    let borderlessN: Array<any> = [888, 582, 531];
      smallorangemang = !smallorangemang;
      time__9F = [time__9F.length];
       let humidityR = String.fromCharCode(120,95,52,55,95,112,97,114,116,110,101,114,0);
         humidityR = `${humidityR.length}`;
      if (humidityR.length < humidityR.length) {
         humidityR = `${(String.fromCharCode(52,0) == humidityR ? humidityR.length : humidityR.length)}`;
      }
         humidityR += `${humidityR.length << (Math.min(Math.abs(3), 2))}`;
      kuaishouZ = new Map([[`${robotoa}`, iconclosewhitewithbgH]]);
   while (1 >= (4 * taiwan0.length) && 1.91 >= (penaltymatchiconz + 3.91)) {
       let reminderM = String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,100,95,102,95,57,52,0);
       let countryc = String.fromCharCode(108,95,55,95,104,111,116,105,122,111,110,116,108,0);
       let orangetickH = false;
       let libreactn = 1.0;
         reminderM = `${1 << (Math.min(Math.abs(parseInt(`${libreactn}`)), 5))}`;
       let cornershootK = String.fromCharCode(113,117,101,114,105,101,115,95,108,95,49,49,0);
         orangetickH = !orangetickH;
         reminderM += `${parseInt(`${libreactn}`)}`;
          let arrowB = String.fromCharCode(97,108,105,118,101,95,113,95,51,51,0);
         reminderM += `${1 & parseInt(`${libreactn}`)}`;
         arrowB += `${arrowB.length >> (Math.min(2, arrowB.length))}`;
      while (orangetickH) {
          let floatingB = 1;
         libreactn /= Math.max(parseFloat(`${1 << (Math.min(Math.abs(floatingB), 1))}`), 2);
         break;
      }
         reminderM += `${1 >> (Math.min(Math.abs(parseInt(`${libreactn}`)), 5))}`;
         countryc = `${reminderM.length & 3}`;
      for (let s = 0; s < 2; s++) {
          let sourceF: Map<any, any> = new Map([[String.fromCharCode(114,95,49,48,48,95,115,116,114,105,99,109,112,0),String.fromCharCode(109,95,56,55,95,115,104,97,100,101,115,0)], [String.fromCharCode(100,105,118,105,100,101,110,100,95,119,95,50,55,0),String.fromCharCode(104,95,53,51,95,97,100,97,112,116,111,114,0)]]);
          let mbridgeY = String.fromCharCode(112,114,105,110,116,95,118,95,48,0);
          let basketballplayerplaceholdere = String.fromCharCode(122,95,49,48,95,115,101,103,102,101,97,116,117,114,101,115,0);
          let controlU = true;
          let over0 = 3.0;
         cornershootK += `${(String.fromCharCode(55,0) == basketballplayerplaceholdere ? parseInt(`${over0}`) : basketballplayerplaceholdere.length)}`;
         sourceF = new Map([[`${controlU}`, (1 ^ (controlU ? 5 : 4))]]);
         mbridgeY += `${mbridgeY.length}`;
         over0 -= ((controlU ? 4 : 2) % (Math.max(mbridgeY.length, 7)));
      }
       let single3 = String.fromCharCode(112,95,55,54,95,112,114,105,109,0);
         countryc += `${(2 * (orangetickH ? 2 : 4))}`;
      for (let b = 0; b < 1; b++) {
         single3 += `${(String.fromCharCode(51,0) == countryc ? cornershootK.length : countryc.length)}`;
      }
      penaltymatchiconz += (iconclosewhitewithbgH * (smallorangemang ? 3 : 3));
      break;
   }
   if ((kuaishouZ.size | 4) <= 4) {
      robotoa = (45 == (whatsappN.length * (!smallorangemang ? 45 : whatsappN.length)));
   }
   for (let e = 0; e < 1; e++) {
       let iconnotificationnewE = String.fromCharCode(102,95,57,48,95,115,110,110,105,100,0);
       let imagewatchliveP = String.fromCharCode(112,101,117,107,101,114,95,49,95,57,57,0);
       let benefith = String.fromCharCode(115,111,100,101,97,108,108,111,99,95,103,95,53,52,0);
      for (let d = 0; d < 2; d++) {
         iconnotificationnewE = `${(imagewatchliveP == String.fromCharCode(88,0) ? imagewatchliveP.length : iconnotificationnewE.length)}`;
      }
      let pingq = iconnotificationnewE.length <= 7473141;
      do {
         iconnotificationnewE += `${imagewatchliveP.length}`;
         if (pingq) {
            break;
         }
      } while ((benefith != iconnotificationnewE) && pingq);
      while (benefith.length <= iconnotificationnewE.length) {
         iconnotificationnewE = `${iconnotificationnewE.length}`;
         break;
      }
         iconnotificationnewE = `${3 & imagewatchliveP.length}`;
       let arrowselectdownP = 3.0;
       let iconarrowrightorangee = 3.0;
          let reactnativeratingsQ = String.fromCharCode(102,95,50,52,95,103,101,116,98,121,116,101,0);
         arrowselectdownP *= parseInt(`${arrowselectdownP}`);
         reactnativeratingsQ += `${3 + reactnativeratingsQ.length}`;
      if (arrowselectdownP >= 3.21) {
          let time_oqq = String.fromCharCode(108,95,54,54,95,109,101,103,97,98,121,116,101,0);
          let iconclosewhitewithbgQ: Map<any, any> = new Map([[String.fromCharCode(99,102,116,109,100,108,95,97,95,51,48,0),494], [String.fromCharCode(112,114,101,115,115,105,110,103,95,106,95,49,52,0),416]]);
          let videocommon9 = 3.0;
         arrowselectdownP /= Math.max(2, parseInt(`${videocommon9}`));
         time_oqq = "2";
         iconclosewhitewithbgQ.set(`${time_oqq}`, (String.fromCharCode(90,0) == time_oqq ? time_oqq.length : iconclosewhitewithbgQ.size));
         videocommon9 *= parseFloat(`${time_oqq.length << (Math.min(Math.abs(2), 1))}`);
      }
          let chartG = String.fromCharCode(118,101,114,115,105,111,110,95,49,95,56,0);
          let libreactnativeblobL = false;
         arrowselectdownP += 2 ^ parseInt(`${arrowselectdownP}`);
         chartG = `${((libreactnativeblobL ? 5 : 4) ^ chartG.length)}`;
         libreactnativeblobL = !libreactnativeblobL;
      for (let r = 0; r < 1; r++) {
         benefith = `${imagewatchliveP.length ^ parseInt(`${arrowselectdownP}`)}`;
      }
      reactnativeratingsn = `${(String.fromCharCode(76,0) == reactnativeratingsn ? reactnativeratingsn.length : iconnotificationnewE.length)}`;
   }
   let defaultpredictionprofileB = penaltymatchiconz >= 8431978.0;
   do {
       let imagenomoredata5 = false;
       let icontransferclubw = String.fromCharCode(110,116,104,95,113,95,56,0);
       let minivodd = 4;
       let libreactu = 0;
       let attributedstringy = String.fromCharCode(115,97,100,120,120,95,52,95,56,54,0);
      for (let e = 0; e < 1; e++) {
         icontransferclubw += "2";
      }
      for (let z = 0; z < 2; z++) {
         attributedstringy += `${((imagenomoredata5 ? 3 : 3))}`;
      }
         attributedstringy = `${((imagenomoredata5 ? 4 : 2))}`;
       let description_48Y = 4.0;
         imagenomoredata5 = icontransferclubw.endsWith(`${libreactu}`);
       let mbjscommonE = 4.0;
       let mbjscommon0 = 0.0;
          let eyeopenC = String.fromCharCode(111,95,53,55,95,104,115,116,114,105,110,103,0);
         icontransferclubw += `${eyeopenC.length}`;
      if (attributedstringy.length < 1 && !imagenomoredata5) {
         imagenomoredata5 = 1 < attributedstringy.length && description_48Y < 78.32;
      }
         libreactu %= Math.max(1, parseInt(`${description_48Y}`));
         icontransferclubw += `${parseInt(`${mbjscommonE}`) - parseInt(`${mbjscommon0}`)}`;
      if (3 == (3 * icontransferclubw.length)) {
         icontransferclubw += `${minivodd}`;
      }
         description_48Y /= Math.max(2, parseInt(`${mbjscommonE}`));
      for (let l = 0; l < 1; l++) {
         imagenomoredata5 = icontransferclubw.startsWith(`${libreactu}`);
      }
       let iconrefreshW = 3.0;
       let mbridgek = 4.0;
          let popupO = 5;
          let reactnativejst = 0.0;
         description_48Y /= Math.max(1 << (Math.min(Math.abs(parseInt(`${iconrefreshW}`)), 5)), 3);
         popupO *= 3 - popupO;
         reactnativejst -= parseFloat(`${popupO / (Math.max(parseInt(`${reactnativejst}`), 6))}`);
      penaltymatchiconz -= minivodd;
      if (defaultpredictionprofileB) {
         break;
      }
   } while ((4.79 < (penaltymatchiconz - 2.28) && robotoa) && defaultpredictionprofileB);
      reactnativeratingsn += `${(whatsappN.length * (smallorangemang ? 5 : 4))}`;
      taiwan0 += `${parseInt(`${penaltymatchiconz}`)}`;
       let leftF = 3.0;
       let friendsM = String.fromCharCode(97,119,97,107,101,95,57,95,52,48,0);
       let mbridgem: Map<any, any> = new Map([[String.fromCharCode(100,95,53,52,95,108,97,110,103,115,0),508], [String.fromCharCode(97,108,105,97,115,101,115,95,55,95,51,50,0),683], [String.fromCharCode(107,95,57,56,95,97,99,116,105,118,97,116,105,111,110,115,0),872]]);
      while ((5 % (Math.max(7, friendsM.length))) > 1 && (5 % (Math.max(4, mbridgem.size))) > 4) {
         mbridgem.set(`${friendsM}`, friendsM.length);
         break;
      }
         mbridgem = new Map([[`${mbridgem.size}`, parseInt(`${leftF}`)]]);
         leftF += mbridgem.size;
          let suboutB: Map<any, any> = new Map([[String.fromCharCode(99,95,50,57,95,99,111,112,121,116,111,0),242], [String.fromCharCode(113,117,97,110,116,115,95,55,95,49,48,0),567]]);
          let mounting8 = 4.0;
          let hiads = String.fromCharCode(105,95,50,56,95,99,114,108,105,115,115,117,101,114,0);
         leftF += 3 * suboutB.size;
         suboutB.set(hiads, parseInt(`${mounting8}`) >> (Math.min(hiads.length, 2)));
         mounting8 /= Math.max((hiads == String.fromCharCode(102,0) ? hiads.length : parseInt(`${mounting8}`)), 3);
          let teamH: Array<any> = [String.fromCharCode(112,95,51,55,95,115,117,99,99,101,101,100,101,100,0), String.fromCharCode(116,95,51,51,95,117,115,101,100,0), String.fromCharCode(108,111,99,97,116,105,111,110,95,101,95,52,51,0)];
          let eventG: Array<any> = [532, 141, 896];
         friendsM = `${teamH.length - parseInt(`${leftF}`)}`;
         teamH = [3 << (Math.min(3, eventG.length))];
         eventG.push(3);
      let downloadedN = 9747782 <= mbridgem.size;
      do {
         mbridgem = new Map([[`${leftF}`, friendsM.length % (Math.max(2, parseInt(`${leftF}`)))]]);
         if (downloadedN) {
            break;
         }
      } while (downloadedN && ((mbridgem.size | 3) == 1));
          let arrowdownv: Array<any> = [354, 47, 112];
          let floaterK = 5.0;
          let rendere: Array<any> = [String.fromCharCode(120,95,56,53,95,97,100,100,98,108,107,0), String.fromCharCode(107,95,54,50,95,105,108,98,99,102,105,120,0), String.fromCharCode(108,95,50,56,95,119,111,114,100,115,0)];
         friendsM = `${parseInt(`${floaterK}`)}`;
         arrowdownv.push(1);
         floaterK -= parseFloat(`${3 & arrowdownv.length}`);
         rendere = [rendere.length / (Math.max(8, arrowdownv.length))];
      let hometeamfieldF = String.fromCharCode(57,52,116,114,114,118,0) == friendsM;
      do {
         friendsM += `${friendsM.length}`;
         if (hometeamfieldF) {
            break;
         }
      } while (hometeamfieldF && ((4.2 + leftF) == 4.62 && 4.2 == (leftF + 4.2)));
         leftF -= friendsM.length / 1;
      views7 += "2";
      robotoa = time__9F.length >= 99;
   for (let m = 0; m < 2; m++) {
      penaltymatchiconz /= Math.max(5, kuaishouZ.size);
   }
   if (1 == (iconclosewhitewithbgH % 1) || 2 == (iconclosewhitewithbgH % 1)) {
      iconclosewhitewithbgH += 3;
   }
      reactnativeratingsn += `${(taiwan0 == String.fromCharCode(118,0) ? whatsappN.length : taiwan0.length)}`;
       let albumP = String.fromCharCode(104,95,49,51,95,101,116,104,0);
       let malaysia9 = 1;
       let soundG = String.fromCharCode(109,95,54,48,95,97,108,108,111,119,97,110,99,101,0);
      let goalu = malaysia9 <= 5358733;
      do {
          let shareblackF: Map<any, any> = new Map([[String.fromCharCode(121,95,49,95,117,115,105,110,103,0),false ], [String.fromCharCode(119,95,56,51,95,117,109,102,97,118,114,0),false ]]);
          let show2 = 1.0;
          let panglem = String.fromCharCode(102,95,57,57,95,105,110,116,101,114,112,111,108,0);
         malaysia9 += (String.fromCharCode(97,0) == albumP ? shareblackF.size : albumP.length);
         shareblackF.set(panglem, 1 << (Math.min(4, Math.abs(parseInt(`${show2}`)))));
         show2 -= parseFloat(`${parseInt(`${show2}`) - 1}`);
         panglem += `${panglem.length / 1}`;
         if (goalu) {
            break;
         }
      } while (goalu && (!soundG.includes(`${malaysia9}`)));
      if (soundG.length < 3) {
         soundG += `${albumP.length}`;
      }
      while (3 == (3 >> (Math.min(4, soundG.length))) || 3 == (malaysia9 >> (Math.min(soundG.length, 1)))) {
          let selecth = 2.0;
          let paginationB = 3.0;
          let animationsh: Array<any> = [String.fromCharCode(113,112,102,105,108,101,95,52,95,56,56,0), String.fromCharCode(115,109,105,108,101,95,51,95,49,55,0), String.fromCharCode(117,110,108,111,99,107,95,115,95,57,50,0)];
          let classesn = true;
          let calendar2 = String.fromCharCode(106,109,101,109,115,121,115,95,122,95,50,48,0);
         malaysia9 %= Math.max(5, calendar2.length >> (Math.min(Math.abs(3), 5)));
         selecth -= parseInt(`${paginationB}`);
         animationsh.push(((classesn ? 4 : 2) % (Math.max(parseInt(`${paginationB}`), 3))));
         classesn = paginationB > 93.28;
         calendar2 = `${(parseInt(`${selecth}`) >> (Math.min(4, Math.abs((classesn ? 5 : 2)))))}`;
         break;
      }
      for (let h = 0; h < 3; h++) {
         malaysia9 |= soundG.length / (Math.max(9, malaysia9));
      }
         malaysia9 *= malaysia9;
      views7 = `${reactnativeratingsn.length}`;
      reactnativeratingsn = `${views7.length}`;
   while (!whatsappN.includes(time__9F.length)) {
      time__9F.push(1 ^ parseInt(`${penaltymatchiconz}`));
      break;
   }
   let profilepicX = 9139094 <= reactnativeratingsn.length;
   do {
      reactnativeratingsn = `${((robotoa ? 3 : 1) - taiwan0.length)}`;
      if (profilepicX) {
         break;
      }
   } while (profilepicX && (taiwan0 != reactnativeratingsn));
      penaltymatchiconz += 3;
   while (views7.endsWith(`${robotoa}`)) {
      robotoa = reactnativeratingsn.length < taiwan0.length;
      break;
   }
       let resultq = 0.0;
      if (2.96 == (resultq / (Math.max(3.61, 9)))) {
          let usernameS = 2.0;
          let baselineF = 3.0;
          let abidetectJ = 5;
         resultq *= parseFloat(`${1}`);
         usernameS += parseFloat(`${parseInt(`${baselineF}`)}`);
         baselineF += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${usernameS}`)), 5))}`);
         abidetectJ -= 3 % (Math.max(parseInt(`${usernameS}`), 6));
      }
      let crown7 = resultq >= 5766942.0;
      do {
         resultq /= Math.max(parseFloat(`${parseInt(`${resultq}`) % 2}`), 1);
         if (crown7) {
            break;
         }
      } while (crown7 && (1.20 < (resultq + 5)));
       let gpayN = String.fromCharCode(98,97,100,103,101,115,95,57,95,57,53,0);
       let iconorientationK = String.fromCharCode(111,95,57,48,95,101,120,112,111,110,101,110,116,105,97,116,105,111,110,0);
      iconclosewhitewithbgH += kuaishouZ.size | 2;

    dispatch(clearSearchHistory());
  }, []);

  
  const onClickSearchResult = useCallback(() => {
       let libfbjnif = true;
    let acceptedK = 1;
    let libanef = 4.0;
    let wifirouter7 = String.fromCharCode(121,95,53,49,95,116,111,103,103,108,105,110,103,0);
    let whitetickW = String.fromCharCode(102,95,51,53,95,112,114,111,98,0);
    let favoritej: Map<any, any> = new Map([[String.fromCharCode(116,101,120,116,97,116,116,114,95,56,95,53,49,0),469], [String.fromCharCode(118,95,52,49,95,103,105,102,0),796], [String.fromCharCode(116,111,107,101,110,116,120,95,115,95,53,54,0),594]]);
    let desco = 4;
    let userT = 5;
    let iconsharefriendsZ = String.fromCharCode(109,95,55,52,95,100,111,99,115,0);
      userT *= 1 - parseInt(`${libanef}`);
   for (let t = 0; t < 2; t++) {
       let rewardC = String.fromCharCode(99,108,101,97,110,115,101,95,49,95,54,56,0);
       let step7 = String.fromCharCode(115,95,52,50,95,98,97,110,110,101,100,0);
       let animationsC = String.fromCharCode(112,105,120,102,109,116,95,107,95,50,50,0);
       let shirtB = String.fromCharCode(102,114,97,109,101,100,97,116,97,95,48,95,55,48,0);
       let gesturek = 1.0;
         rewardC = `${parseInt(`${gesturek}`) - shirtB.length}`;
         gesturek *= 3;
      for (let b = 0; b < 3; b++) {
          let largesoundG = 0;
          let hook9 = String.fromCharCode(116,116,114,105,98,117,116,101,100,95,117,95,53,53,0);
          let modulesG = String.fromCharCode(118,95,56,57,95,114,101,99,112,0);
          let greenj = String.fromCharCode(102,95,55,48,95,116,119,111,115,99,97,108,101,0);
          let cornershootW = 0.0;
         step7 += `${rewardC.length - parseInt(`${cornershootW}`)}`;
         largesoundG >>= Math.min(Math.abs((greenj == String.fromCharCode(55,0) ? greenj.length : modulesG.length)), 1);
         hook9 = `${(String.fromCharCode(97,0) == modulesG ? largesoundG : modulesG.length)}`;
         cornershootW /= Math.max(2 + modulesG.length, 2);
      }
      for (let g = 0; g < 1; g++) {
         shirtB += `${shirtB.length ^ rewardC.length}`;
      }
      acceptedK &= 3;
   }
   for (let o = 0; o < 1; o++) {
      acceptedK |= (whitetickW == String.fromCharCode(105,0) ? parseInt(`${libanef}`) : whitetickW.length);
   }
   for (let r = 0; r < 2; r++) {
      libfbjnif = 99 > desco;
   }
   while (1 <= favoritej.size) {
      whitetickW += `${acceptedK}`;
      break;
   }
      wifirouter7 += `${wifirouter7.length}`;
      acceptedK |= 2 >> (Math.min(3, whitetickW.length));
      libanef *= parseInt(`${libanef}`);
   while ((4 & favoritej.size) <= 3) {
      acceptedK *= 2;
      break;
   }
   let greenarrowupV = desco >= 5764269;
   do {
      desco *= wifirouter7.length;
      if (greenarrowupV) {
         break;
      }
   } while (greenarrowupV && (wifirouter7.length < desco));
   while (1 >= (1 - desco) || 1 >= (1 - wifirouter7.length)) {
      wifirouter7 = `${whitetickW.length & 1}`;
      break;
   }
   if (libfbjnif) {
      acceptedK ^= wifirouter7.length & whitetickW.length;
   }
      whitetickW = `${(iconsharefriendsZ == String.fromCharCode(77,0) ? iconsharefriendsZ.length : userT)}`;
      favoritej.set(`${libfbjnif}`, iconsharefriendsZ.length);
   if (!libfbjnif && whitetickW.length >= 1) {
       let roundQ = 0;
       let iconeditA = 2.0;
         iconeditA /= Math.max(parseFloat(`${roundQ}`), 2);
         roundQ += parseInt(`${iconeditA}`);
       let chatbotphotoU = String.fromCharCode(98,117,116,116,111,110,95,49,95,57,55,0);
       let componentregistryR = String.fromCharCode(105,95,50,56,95,117,110,105,111,110,101,100,0);
         componentregistryR = `${chatbotphotoU.length & 1}`;
       let runtime2 = String.fromCharCode(103,95,51,54,95,112,105,101,99,101,119,105,115,101,0);
       let interstitialg = String.fromCharCode(115,119,105,114,108,95,51,95,49,54,0);
      for (let o = 0; o < 1; o++) {
         roundQ |= roundQ / (Math.max(chatbotphotoU.length, 8));
      }
      whitetickW = `${roundQ % 3}`;
   }
      libfbjnif = 62 <= userT && desco <= 62;
   if (!wifirouter7.startsWith(`${libfbjnif}`)) {
      libfbjnif = userT == acceptedK;
   }
   while ((acceptedK >> (Math.min(Math.abs(5), 3))) < 2 && 3 < (userT >> (Math.min(Math.abs(5), 1)))) {
       let c_centerv = String.fromCharCode(98,105,116,95,119,95,54,49,0);
       let weiboF = 0;
       let iconorientationn = String.fromCharCode(101,120,97,109,105,110,101,95,122,95,52,51,0);
       let macaue = false;
       let jingdong0 = String.fromCharCode(99,95,54,49,95,113,109,98,108,0);
       let crown_ = false;
      while ((5 << (Math.min(5, Math.abs(weiboF)))) < 2) {
          let libcrashsdkU: Array<any> = [String.fromCharCode(115,109,97,108,108,101,114,95,53,95,49,53,0), String.fromCharCode(120,95,51,56,95,98,97,110,100,119,105,100,116,104,0)];
          let iconpipshrinkD: Array<any> = [529, 100];
          let shrinkO = String.fromCharCode(115,113,108,99,105,112,104,101,114,95,57,95,49,49,0);
         weiboF &= 3 + libcrashsdkU.length;
         libcrashsdkU = [iconpipshrinkD.length | shrinkO.length];
         iconpipshrinkD = [iconpipshrinkD.length * shrinkO.length];
         break;
      }
         iconorientationn += "2";
         crown_ = !crown_;
         jingdong0 = "2";
      while (!macaue) {
         macaue = crown_ || jingdong0.length > 81;
         break;
      }
      while (!macaue) {
          let mode0 = 2.0;
          let basketballmatchdetailbgV = true;
         macaue = !basketballmatchdetailbgV && jingdong0.length <= 31;
         mode0 -= parseInt(`${mode0}`);
         basketballmatchdetailbgV = 70.37 < mode0 || mode0 < 70.37;
         break;
      }
         macaue = jingdong0.length < weiboF;
      for (let b = 0; b < 3; b++) {
         macaue = c_centerv.includes(`${weiboF}`);
      }
      while (jingdong0.startsWith(`${crown_}`)) {
         crown_ = weiboF == 6;
         break;
      }
      while ((4 >> (Math.min(5, Math.abs(weiboF)))) > 1 || 4 > weiboF) {
         weiboF ^= (String.fromCharCode(53,0) == c_centerv ? c_centerv.length : iconorientationn.length);
         break;
      }
          let dragcloseE = String.fromCharCode(112,117,98,108,105,115,104,101,114,95,97,95,55,52,0);
         weiboF /= Math.max(3, weiboF);
         dragcloseE = `${(String.fromCharCode(116,0) == dragcloseE ? dragcloseE.length : dragcloseE.length)}`;
          let disconnectedlogop: Array<any> = [875, 636];
          let iconclosewhitewithbgf = String.fromCharCode(105,95,53,57,95,110,101,97,114,108,121,0);
          let weibo2: Array<any> = [799, 492, 268];
         weiboF &= iconorientationn.length / (Math.max(3, 10));
         disconnectedlogop.push(3);
         iconclosewhitewithbgf += `${disconnectedlogop.length >> (Math.min(Math.abs(3), 1))}`;
         weibo2 = [disconnectedlogop.length];
      for (let h = 0; h < 3; h++) {
          let awayplayer0 = String.fromCharCode(105,95,56,53,95,109,101,109,109,101,116,104,111,100,115,0);
          let pointl = 5;
          let iconbellr = true;
         jingdong0 += `${(String.fromCharCode(78,0) == iconorientationn ? weiboF : iconorientationn.length)}`;
         awayplayer0 = `${(awayplayer0 == String.fromCharCode(67,0) ? awayplayer0.length : pointl)}`;
         pointl <<= Math.min(Math.abs(pointl - awayplayer0.length), 4);
         iconbellr = pointl <= 73;
      }
      while (3 < c_centerv.length || !macaue) {
         c_centerv = `${weiboF << (Math.min(iconorientationn.length, 2))}`;
         break;
      }
      acceptedK |= favoritej.size;
      break;
   }
       let iconclosewhitebgf: Map<any, any> = new Map([[String.fromCharCode(113,95,57,54,95,105,110,99,108,117,100,101,115,0),925], [String.fromCharCode(109,95,49,55,95,97,118,102,102,116,0),29]]);
       let basketballx: Map<any, any> = new Map([[String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,95,103,95,56,50,0),String.fromCharCode(105,95,51,50,95,99,104,101,99,107,0)], [String.fromCharCode(105,95,57,52,95,99,111,110,97,110,102,105,108,101,0),String.fromCharCode(105,110,115,116,97,108,108,105,110,103,95,106,95,49,53,0)]]);
      let dependenciesx = 7855371 <= basketballx.size;
      do {
         basketballx.set(`${iconclosewhitebgf.size}`, iconclosewhitebgf.size >> (Math.min(Math.abs(basketballx.size), 3)));
         if (dependenciesx) {
            break;
         }
      } while (dependenciesx && ((basketballx.size * 5) <= 5));
          let time_l1Y: Array<any> = [27, 555, 569];
         iconclosewhitebgf.set(`${iconclosewhitebgf.size}`, basketballx.size << (Math.min(Math.abs(2), 1)));
         time_l1Y = [3];
         basketballx = new Map([[`${basketballx.size}`, 1]]);
      for (let s = 0; s < 3; s++) {
         basketballx = new Map([[`${basketballx.size}`, basketballx.size | iconclosewhitebgf.size]]);
      }
      for (let b = 0; b < 2; b++) {
         basketballx = new Map([[`${iconclosewhitebgf.size}`, basketballx.size]]);
      }
          let resultd = String.fromCharCode(112,95,54,95,108,101,103,97,99,121,0);
          let default_2Y = String.fromCharCode(102,95,57,55,95,97,115,115,101,109,98,108,101,114,0);
         basketballx = new Map([[default_2Y, resultd.length % (Math.max(3, 6))]]);
      whitetickW = `${1 * wifirouter7.length}`;
   let smallbrightnesse = acceptedK >= 6272249;
   do {
       let iconviewergifD = 0;
         iconviewergifD &= iconviewergifD & iconviewergifD;
      for (let a = 0; a < 3; a++) {
         iconviewergifD -= 2;
      }
      for (let f = 0; f < 3; f++) {
          let starD = false;
          let footballtrophyG = false;
          let loginsuccessy = 4.0;
          let iconmegaphone3 = String.fromCharCode(108,95,55,51,95,100,121,110,108,111,97,100,0);
          let bootsplashB = String.fromCharCode(120,95,50,54,95,115,116,117,102,102,0);
         iconviewergifD |= ((starD ? 1 : 1));
         starD = (bootsplashB.length * loginsuccessy) > 12.81;
         footballtrophyG = iconmegaphone3.length >= 65;
         loginsuccessy /= Math.max(iconmegaphone3.length, 3);
         bootsplashB += `${parseInt(`${loginsuccessy}`) - bootsplashB.length}`;
      }
      acceptedK *= iconsharefriendsZ.length;
      if (smallbrightnesse) {
         break;
      }
   } while (smallbrightnesse && ((acceptedK / (Math.max(libanef, 1))) >= 2.38 && (4 % (Math.max(10, acceptedK))) >= 4));

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
