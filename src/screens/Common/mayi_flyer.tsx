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
import { mayi_CrossChat } from "@api";
import mayi_push from "../../../Umeng/mayi_push";

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
  const [searchLimit, setSearchLimit] = useState(0)

  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(
    ({ searchHistoryReducer }: mayi_Libapminsightb) => searchHistoryReducer
  );
  const [isFetching, setisFetching] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { colors, textVariants, spacing, icons } = useTheme();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

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

  async function fetchNextPage(text: string, userSearch: boolean = false) {
    if (!hasMore || isFetching) {
      return; 
    }

    setisFetching(true);

    const nextPage = page + 1;
    mayi_CrossChat.getListByKeyword(text, {
      page: nextPage,
    }).then((data) => {
      setSearchTimer(0);

      if (data.length <= 0) {
        setHasMore(false); 
      } else {
        
        setSearchResults([...searchResults, ...json.data.List]);
        setPage(nextPage);
        
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

  const handleEndReached = () => {
       let iconsharefriendsK = String.fromCharCode(102,95,52,49,95,101,120,112,101,114,116,0);
    let flyerr = 2.0;
    let iconsubssuccess_ = String.fromCharCode(102,114,97,109,101,104,97,115,104,95,108,95,55,0);
    let profilepicE = 2.0;
    let middlep = String.fromCharCode(98,101,97,116,95,54,95,57,53,0);
    let customR: Array<any> = [990, 599];
    let iconsharefriendsz = 4.0;
    let assist3 = true;
    let homeplayer9 = 1.0;
    let foregroundD = String.fromCharCode(113,95,55,57,95,115,101,116,108,101,99,116,101,100,0);
   while (3.82 >= (flyerr * iconsharefriendsz) || 1.100 >= (flyerr * 3.82)) {
      iconsharefriendsz += parseFloat(`${parseInt(`${flyerr}`) / (Math.max(9, customR.length))}`);
      break;
   }
      customR.push(customR.length);
   if ((profilepicE / 3.25) < 2.44 && (profilepicE / 3.25) < 3.41) {
      iconsharefriendsK += `${iconsharefriendsK.length * 1}`;
   }
   if (5 >= (parseInt(`${profilepicE}`) - iconsharefriendsK.length) && 2 >= (5 ^ iconsharefriendsK.length)) {
      iconsharefriendsK = "2";
   }
       let componentregistryY = 0.0;
       let encryptS = String.fromCharCode(109,95,55,54,95,100,101,106,117,100,100,101,114,0);
       let iconarrowrightorangeR = String.fromCharCode(100,95,54,95,112,114,111,99,101,115,115,111,114,0);
         iconarrowrightorangeR += "2";
      for (let f = 0; f < 3; f++) {
         encryptS = "2";
      }
          let issub6: Map<any, any> = new Map([[String.fromCharCode(104,95,52,51,95,103,101,116,110,97,109,101,105,110,102,111,0),String.fromCharCode(116,105,109,101,105,110,102,111,114,99,101,95,109,95,53,49,0)], [String.fromCharCode(106,95,51,51,95,116,115,114,0),String.fromCharCode(110,111,116,103,101,116,95,105,95,53,0)], [String.fromCharCode(100,95,50,50,95,100,101,115,99,112,114,105,112,116,105,111,110,0),String.fromCharCode(118,111,105,99,101,95,57,95,53,0)]]);
          let basketball0 = true;
          let xvodq = String.fromCharCode(97,116,111,109,115,95,119,95,49,52,0);
         iconarrowrightorangeR += `${iconarrowrightorangeR.length}`;
         issub6 = new Map([[`${issub6.size}`, issub6.size]]);
         basketball0 = !basketball0;
         xvodq += `${((basketball0 ? 2 : 1) & issub6.size)}`;
      let resende = String.fromCharCode(98,104,57,121,122,51,0) == encryptS;
      do {
          let graph2 = false;
         encryptS += `${encryptS.length + 1}`;
         graph2 = (!graph2 ? !graph2 : !graph2);
         if (resende) {
            break;
         }
      } while (resende && (encryptS.startsWith(`${componentregistryY}`)));
       let t_viewo: Array<any> = [782, 706, 736];
       let flipperN: Array<any> = [97, 415, 69];
      let rightT = t_viewo.length <= 9370027;
      do {
          let collectionV = String.fromCharCode(104,95,55,49,95,119,105,110,115,111,99,107,0);
          let mergerY = String.fromCharCode(119,95,55,52,95,116,105,108,101,115,0);
         t_viewo.push(parseInt(`${componentregistryY}`) ^ collectionV.length);
         collectionV = `${3 & mergerY.length}`;
         mergerY = `${3 << (Math.min(5, mergerY.length))}`;
         if (rightT) {
            break;
         }
      } while ((encryptS.length > 5) && rightT);
         t_viewo.push(parseInt(`${componentregistryY}`) & encryptS.length);
          let form4 = 2.0;
          let with_e5 = 0.0;
          let tumbnailF: Array<any> = [124, 453];
         t_viewo = [parseInt(`${form4}`)];
         form4 /= Math.max(4, parseFloat(`${1}`));
         with_e5 -= tumbnailF.length;
         tumbnailF.push(2);
         iconarrowrightorangeR = `${(String.fromCharCode(102,0) == iconarrowrightorangeR ? t_viewo.length : iconarrowrightorangeR.length)}`;
      iconsharefriendsK += `${(iconsubssuccess_.length + (assist3 ? 5 : 4))}`;
   while (!middlep.includes(`${flyerr}`)) {
      middlep += "3";
      break;
   }
       let description_n4 = String.fromCharCode(98,97,99,107,116,114,97,99,101,95,107,95,49,48,48,0);
       let combineD = String.fromCharCode(115,109,101,97,114,95,120,95,50,48,0);
       let twitterR: Map<any, any> = new Map([[String.fromCharCode(103,114,101,97,116,101,114,95,49,95,49,52,0),true ], [String.fromCharCode(111,111,108,116,105,112,95,49,95,53,55,0),false ]]);
         twitterR.set(description_n4, (String.fromCharCode(87,0) == description_n4 ? description_n4.length : twitterR.size));
         description_n4 = `${(combineD == String.fromCharCode(110,0) ? twitterR.size : combineD.length)}`;
         description_n4 += `${description_n4.length}`;
      while (!description_n4.includes(`${twitterR.size}`)) {
         description_n4 += "1";
         break;
      }
         combineD = `${twitterR.size / (Math.max(combineD.length, 8))}`;
         twitterR.set(description_n4, description_n4.length * 3);
      while (description_n4 == String.fromCharCode(55,0)) {
         combineD = `${twitterR.size}`;
         break;
      }
       let current7 = String.fromCharCode(115,105,103,110,97,116,117,114,101,95,121,95,52,50,0);
         twitterR.set(description_n4, combineD.length);
      flyerr += parseFloat(`${2 - twitterR.size}`);
       let dependenciesh: Map<any, any> = new Map([[String.fromCharCode(119,105,100,101,102,101,108,101,109,95,49,95,50,56,0),true ], [String.fromCharCode(105,95,56,56,95,108,105,109,105,116,115,0),false ]]);
       let basketballmatchdetailbgz = String.fromCharCode(99,95,55,49,95,102,114,97,109,101,110,117,109,0);
          let scheduleH = 5;
          let filedm = String.fromCharCode(99,111,109,112,101,110,115,97,116,101,95,119,95,49,57,0);
          let codeh = 3;
         dependenciesh = new Map([[`${dependenciesh.size}`, filedm.length]]);
         scheduleH |= 1 % (Math.max(7, scheduleH));
         filedm = `${scheduleH / (Math.max(7, codeh))}`;
         codeh += codeh * scheduleH;
         basketballmatchdetailbgz += `${1 * dependenciesh.size}`;
          let iconsharefriendsy = String.fromCharCode(105,97,100,115,116,95,57,95,56,53,0);
         basketballmatchdetailbgz = "2";
         iconsharefriendsy += `${iconsharefriendsy.length}`;
         dependenciesh.set(basketballmatchdetailbgz, (basketballmatchdetailbgz == String.fromCharCode(100,0) ? dependenciesh.size : basketballmatchdetailbgz.length));
      while (4 < (dependenciesh.size - basketballmatchdetailbgz.length)) {
         dependenciesh.set(`${basketballmatchdetailbgz}`, basketballmatchdetailbgz.length + dependenciesh.size);
         break;
      }
         dependenciesh = new Map([[`${dependenciesh.size}`, basketballmatchdetailbgz.length * 3]]);
      customR.push(customR.length * 1);
      assist3 = homeplayer9 <= 17.100;
   let xvodx = middlep == String.fromCharCode(106,115,95,99,0);
   do {
      middlep = `${parseInt(`${profilepicE}`)}`;
      if (xvodx) {
         break;
      }
   } while (xvodx && (iconsharefriendsK.length == 1));
      iconsubssuccess_ = `${(iconsubssuccess_ == String.fromCharCode(81,0) ? iconsubssuccess_.length : parseInt(`${profilepicE}`))}`;
   if (1 <= (customR.length ^ middlep.length)) {
       let register_3G = 0.0;
       let libjsinspectors = String.fromCharCode(114,101,109,101,109,98,101,114,101,100,95,102,95,52,57,0);
       let confirmationu: Array<any> = [String.fromCharCode(102,95,53,48,95,115,98,119,97,105,116,0), String.fromCharCode(100,101,115,99,114,105,98,101,95,97,95,54,52,0), String.fromCharCode(100,95,56,53,95,105,110,116,101,114,102,97,99,101,0)];
         libjsinspectors += `${3 - parseInt(`${register_3G}`)}`;
       let sportsG = 4.0;
      for (let v = 0; v < 1; v++) {
          let module5 = String.fromCharCode(122,95,57,48,95,109,105,108,108,105,115,101,99,111,110,100,115,0);
          let detaili = 0.0;
          let championI: Map<any, any> = new Map([[String.fromCharCode(119,95,49,95,117,110,99,111,110,102,105,114,109,101,100,0),false ], [String.fromCharCode(115,101,97,95,51,95,56,48,0),false ], [String.fromCharCode(112,114,101,115,101,110,116,95,105,95,56,54,0),true ]]);
          let tumbnailT = String.fromCharCode(102,95,56,52,95,114,105,110,102,0);
         register_3G *= parseFloat(`${libjsinspectors.length}`);
         module5 = `${championI.size % (Math.max(1, 1))}`;
         detaili /= Math.max(parseInt(`${detaili}`) << (Math.min(Math.abs(1), 1)), 3);
         championI.set(tumbnailT, championI.size | tumbnailT.length);
      }
      let member2 = 8268929.0 <= register_3G;
      do {
          let umenge = 2.0;
         register_3G *= parseFloat(`${libjsinspectors.length >> (Math.min(2, Math.abs(parseInt(`${umenge}`))))}`);
         if (member2) {
            break;
         }
      } while ((libjsinspectors.includes(`${register_3G}`)) && member2);
         sportsG *= (String.fromCharCode(102,0) == libjsinspectors ? libjsinspectors.length : parseInt(`${register_3G}`));
      let default_rB = confirmationu.length >= 8059665;
      do {
          let indicatorf = 0.0;
         confirmationu.push(parseInt(`${sportsG}`));
         indicatorf -= parseFloat(`${parseInt(`${indicatorf}`) >> (Math.min(2, Math.abs(parseInt(`${indicatorf}`))))}`);
         if (default_rB) {
            break;
         }
      } while (default_rB && ((libjsinspectors.length >> (Math.min(Math.abs(1), 1))) >= 4));
         confirmationu = [libjsinspectors.length | 1];
         libjsinspectors += "2";
      if (2 >= (parseInt(`${sportsG}`) / (Math.max(libjsinspectors.length, 4))) || 2 >= (parseInt(`${sportsG}`) / (Math.max(5, libjsinspectors.length)))) {
         sportsG += libjsinspectors.length % 1;
      }
      customR.push(3 & middlep.length);
   }
      assist3 = middlep.length < 69;
   let nalytics3 = String.fromCharCode(103,110,54,112,114,112,0) == middlep;
   do {
      middlep = `${iconsharefriendsK.length ^ iconsubssuccess_.length}`;
      if (nalytics3) {
         break;
      }
   } while (((iconsharefriendsz - 5.30) <= 1.66) && nalytics3);
      assist3 = 34.40 > (iconsharefriendsz + profilepicE);
   for (let b = 0; b < 3; b++) {
      middlep = "3";
   }
      flyerr *= parseFloat(`${iconsharefriendsK.length & 2}`);
   if (profilepicE < 4.36) {
       let kickH = 0;
         kickH ^= kickH;
         kickH &= kickH;
         kickH >>= Math.min(Math.abs(1), 3);
      profilepicE /= Math.max(2, parseFloat(`${parseInt(`${flyerr}`) % 3}`));
   }
   let defaultroombgy = 9570542.0 <= flyerr;
   do {
       let iconviewergifT = 0.0;
       let iconfeedbackk = String.fromCharCode(112,95,57,53,0);
       let activityd = String.fromCharCode(120,95,52,53,95,105,110,100,101,112,101,110,100,101,100,0);
       let pressurec = 1;
       let targetB: Map<any, any> = new Map([[String.fromCharCode(117,115,101,115,95,105,95,50,56,0),false ], [String.fromCharCode(101,114,114,108,111,103,95,50,95,55,55,0),true ], [String.fromCharCode(109,105,112,115,102,112,117,95,102,95,57,52,0),false ]]);
         iconfeedbackk = `${activityd.length}`;
      while ((pressurec + 4) < 1 || (pressurec + 4) < 1) {
         iconfeedbackk = `${iconfeedbackk.length}`;
         break;
      }
          let libhermesz = true;
          let buttonF = String.fromCharCode(103,95,54,57,0);
          let stations7: Array<any> = [String.fromCharCode(107,95,53,95,100,105,109,101,110,115,105,116,111,110,115,0), String.fromCharCode(112,101,110,99,105,108,95,50,95,51,50,0), String.fromCharCode(115,116,117,102,102,110,100,95,56,95,49,57,0)];
         iconviewergifT *= (String.fromCharCode(87,0) == iconfeedbackk ? targetB.size : iconfeedbackk.length);
         libhermesz = stations7.length > buttonF.length;
         buttonF = `${buttonF.length & 3}`;
         stations7 = [1];
      while (1 < (pressurec - 1)) {
          let basketballawayteamA = 4;
          let libfollyd = 1.0;
          let nodeX = String.fromCharCode(109,95,49,48,95,114,101,116,114,105,101,118,101,0);
          let libswresampleS: Map<any, any> = new Map([[String.fromCharCode(122,95,57,57,95,105,109,112,111,114,116,0),87], [String.fromCharCode(105,95,55,57,95,105,110,118,111,107,101,0),253], [String.fromCharCode(102,114,97,110,100,95,113,95,54,53,0),499]]);
         pressurec -= pressurec * targetB.size;
         basketballawayteamA ^= 2;
         libfollyd /= Math.max(3, parseFloat(`${3 | parseInt(`${libfollyd}`)}`));
         nodeX = "1";
         libswresampleS.set(nodeX, basketballawayteamA);
         break;
      }
      while ((activityd.length ^ 2) <= 2) {
         pressurec &= (iconfeedbackk == String.fromCharCode(89,0) ? iconfeedbackk.length : activityd.length);
         break;
      }
         iconviewergifT *= targetB.size;
         activityd += "2";
       let audienceO: Array<any> = [238, 988, 685];
         iconfeedbackk += "3";
         iconviewergifT /= Math.max(1, activityd.length / 1);
          let notification3: Map<any, any> = new Map([[String.fromCharCode(111,95,51,48,95,116,111,107,101,110,105,122,101,114,0),816], [String.fromCharCode(110,97,109,101,116,111,105,110,100,101,120,95,106,95,56,54,0),768]]);
          let package_hp = String.fromCharCode(110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,95,54,95,50,49,0);
         targetB.set(`${pressurec}`, pressurec ^ 3);
         notification3 = new Map([[`${notification3.size}`, 1]]);
         package_hp += `${package_hp.length << (Math.min(3, Math.abs(notification3.size)))}`;
         targetB.set(`${pressurec}`, targetB.size);
      for (let n = 0; n < 2; n++) {
         targetB.set(`${pressurec}`, 2);
      }
         pressurec *= 3 / (Math.max(10, parseInt(`${iconviewergifT}`)));
         audienceO.push(targetB.size & pressurec);
      flyerr *= parseFloat(`${3 / (Math.max(6, customR.length))}`);
      if (defaultroombgy) {
         break;
      }
   } while (((homeplayer9 + flyerr) < 2.54 || (flyerr + 2.54) < 5.76) && defaultroombgy);
      iconsharefriendsz += (parseFloat(`${middlep == String.fromCharCode(121,0) ? parseInt(`${homeplayer9}`) : middlep.length}`));
       let textlayoutmanagerr = true;
       let configo = String.fromCharCode(108,95,54,49,95,103,101,116,112,105,120,0);
      let redscoreballc = 6826846 >= configo.length;
      do {
          let clearo: Array<any> = [493, 878, 199];
          let backgroundi = 3.0;
          let membershipv: Array<any> = [811, 393];
         configo += `${configo.length}`;
         clearo.push(clearo.length);
         backgroundi *= parseFloat(`${parseInt(`${backgroundi}`)}`);
         membershipv = [clearo.length];
         if (redscoreballc) {
            break;
         }
      } while (redscoreballc && (configo.includes(`${textlayoutmanagerr}`)));
       let iconwatchq: Map<any, any> = new Map([[String.fromCharCode(101,95,52,56,95,110,111,110,100,99,0),String.fromCharCode(118,101,114,116,105,99,101,115,95,57,95,51,55,0)], [String.fromCharCode(116,104,101,111,114,97,95,109,95,50,54,0),String.fromCharCode(99,111,109,112,97,114,101,95,103,95,57,48,0)], [String.fromCharCode(104,101,116,97,95,106,95,51,55,0),String.fromCharCode(107,95,50,50,95,110,111,99,104,97,110,103,101,0)]]);
          let gpayw = String.fromCharCode(117,110,99,104,101,99,107,101,100,95,53,95,52,52,0);
         configo = `${gpayw.length}`;
      if (!configo.includes(`${textlayoutmanagerr}`)) {
         textlayoutmanagerr = String.fromCharCode(98,0) == configo;
      }
         configo += `${(configo.length >> (Math.min(3, Math.abs((textlayoutmanagerr ? 3 : 1)))))}`;
          let pointn = String.fromCharCode(122,95,57,57,95,105,116,120,102,109,0);
          let issubr = String.fromCharCode(101,95,51,52,95,103,114,97,100,108,101,0);
         configo += `${(configo == String.fromCharCode(98,0) ? (textlayoutmanagerr ? 3 : 3) : configo.length)}`;
         pointn += `${pointn.length}`;
         issubr += `${issubr.length}`;
      assist3 = iconsubssuccess_.startsWith(`${flyerr}`);
   while (iconsharefriendsK.length > 5) {
      flyerr *= parseFloat(`${2 + middlep.length}`);
      break;
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
       let stepz = 3;
    let stepq = false;
    let orientation5 = String.fromCharCode(118,101,114,105,102,105,97,116,105,111,110,95,119,95,55,55,0);
    let libyogaP = 3;
    let subsS: Array<any> = [811, 609, 984];
    let libavdevicec: Array<any> = [182, 942];
    let moreo: Array<any> = [158, 525, 675];
    let router_ = 1;
    let template_frI = 2;
    let saveL = 5;
    let libfileb = 5.0;
    let libreanimatedI = String.fromCharCode(111,95,52,50,95,100,99,97,100,115,112,0);
    let default_vrp: Map<any, any> = new Map([[String.fromCharCode(115,95,48,95,98,108,117,114,97,121,0),String.fromCharCode(111,116,111,115,95,49,95,54,51,0)], [String.fromCharCode(107,95,53,95,99,104,97,114,97,99,116,101,114,105,115,116,105,99,115,0),String.fromCharCode(97,95,56,95,112,116,114,109,97,112,0)]]);
    let usernamet: Map<any, any> = new Map([[String.fromCharCode(114,101,102,112,116,114,95,102,95,50,51,0),false ], [String.fromCharCode(103,108,121,112,104,95,120,95,50,52,0),false ], [String.fromCharCode(97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,95,117,95,51,55,0),false ]]);
      moreo.push(orientation5.length);
   while (4 >= (libyogaP - 1)) {
      libavdevicec.push(3 ^ moreo.length);
      break;
   }

    let searchKeyword = placeholderSearch;

       let resulty = String.fromCharCode(111,95,57,52,95,113,117,105,122,0);
       let mimeN: Map<any, any> = new Map([[String.fromCharCode(122,95,57,56,95,109,101,100,105,97,110,0),String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,95,56,95,52,55,0)], [String.fromCharCode(118,112,120,101,110,99,95,115,95,51,48,0),String.fromCharCode(102,114,111,109,102,101,95,54,95,49,57,0)]]);
       let shielddoneU = 4;
          let streamings: Array<any> = [604, 597, 819];
          let homeinactivef = 3.0;
          let kuaishouf = String.fromCharCode(113,95,57,95,103,105,103,97,103,114,111,117,112,0);
         resulty += `${kuaishouf.length}`;
         streamings = [parseInt(`${homeinactivef}`)];
         homeinactivef /= Math.max(parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${homeinactivef}`)), 3))}`), 3);
         kuaishouf += "3";
      if (resulty.length < 5) {
         mimeN.set(`${resulty}`, resulty.length);
      }
      if (mimeN.get(`${shielddoneU}`) != null) {
         mimeN = new Map([[resulty, shielddoneU % (Math.max(resulty.length, 10))]]);
      }
      if (4 < (mimeN.size >> (Math.min(resulty.length, 3))) && 4 < (mimeN.size >> (Math.min(resulty.length, 3)))) {
         mimeN.set(`${resulty}`, (String.fromCharCode(49,0) == resulty ? resulty.length : mimeN.size));
      }
         mimeN = new Map([[`${shielddoneU}`, shielddoneU << (Math.min(Math.abs(3), 2))]]);
       let refreshborderlessK: Array<any> = [String.fromCharCode(103,95,49,55,95,117,116,120,111,0), String.fromCharCode(114,101,115,116,111,114,101,95,104,95,54,54,0)];
       let feedbackH: Array<any> = [365, 900];
         shielddoneU /= Math.max(1 + mimeN.size, 2);
      while (1 == (feedbackH.length - refreshborderlessK.length)) {
          let libavfilterf: Map<any, any> = new Map([[String.fromCharCode(103,108,105,116,99,104,95,103,95,51,53,0),142], [String.fromCharCode(113,117,97,110,116,105,122,101,95,99,95,52,49,0),977], [String.fromCharCode(110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,95,100,95,50,53,0),504]]);
          let termsw: Array<any> = [135, 672, 46];
          let episodec = String.fromCharCode(115,98,99,100,101,99,95,51,95,51,0);
         refreshborderlessK.push(mimeN.size);
         libavfilterf = new Map([[`${libavfilterf.size}`, libavfilterf.size + 1]]);
         termsw = [termsw.length & 1];
         episodec = `${episodec.length - termsw.length}`;
         break;
      }
          let selectedI = 5.0;
          let yellowscoreball7 = String.fromCharCode(107,95,50,48,95,112,97,114,107,0);
         refreshborderlessK = [1 << (Math.min(4, feedbackH.length))];
         selectedI /= Math.max(parseFloat(`${yellowscoreball7.length & 1}`), 4);
         yellowscoreball7 += `${parseInt(`${selectedI}`) % (Math.max(yellowscoreball7.length, 6))}`;
      libavdevicec.push(subsS.length * resulty.length);
   while ((stepz >> (Math.min(Math.abs(1), 1))) >= 5) {
      saveL >>= Math.min(1, Math.abs(3 << (Math.min(Math.abs(router_), 3))));
      break;
   }

    if (search != "") {

   let privatechatbgS = 9881509 >= libavdevicec.length;
   do {
       let predictionactived: Map<any, any> = new Map([[String.fromCharCode(104,105,115,116,111,114,105,101,115,95,118,95,56,52,0),418], [String.fromCharCode(120,95,52,51,95,97,99,99,101,112,116,115,0),684], [String.fromCharCode(121,95,51,56,95,104,97,115,104,107,101,121,0),62]]);
       let nativeexT = String.fromCharCode(105,95,57,48,95,100,114,97,119,0);
       let gesturesu: Array<any> = [782, 955, 470];
          let shareG = 1.0;
          let crosse = String.fromCharCode(114,97,116,101,99,116,114,108,95,121,95,54,53,0);
          let backgroundx = String.fromCharCode(116,97,103,98,105,116,95,54,95,49,49,0);
         nativeexT = `${gesturesu.length >> (Math.min(4, Math.abs(parseInt(`${shareG}`))))}`;
         shareG *= parseFloat(`${backgroundx.length ^ 1}`);
         crosse = `${crosse.length * 2}`;
         backgroundx = `${backgroundx.length}`;
         predictionactived = new Map([[`${predictionactived.size}`, gesturesu.length | 1]]);
       let uimanagerp = String.fromCharCode(111,95,54,52,95,114,116,99,99,0);
       let fastforwardv = String.fromCharCode(117,95,52,50,95,117,110,114,101,103,105,115,116,101,114,0);
      let baselineH = nativeexT.length >= 9567858;
      do {
          let libapminsightaV = String.fromCharCode(97,117,116,111,99,108,111,115,101,95,110,95,53,52,0);
          let whatsappk: Array<any> = [469, 599];
          let shirtn = false;
          let projectL: Array<any> = [355, 690, 247];
          let iconZ = 5.0;
         nativeexT = `${libapminsightaV.length}`;
         libapminsightaV += `${((shirtn ? 5 : 2) / 1)}`;
         whatsappk = [((shirtn ? 2 : 4) * 1)];
         projectL.push((whatsappk.length ^ (shirtn ? 1 : 2)));
         iconZ *= parseFloat(`${3 & whatsappk.length}`);
         if (baselineH) {
            break;
         }
      } while (baselineH && (fastforwardv.length == nativeexT.length));
      for (let g = 0; g < 3; g++) {
         fastforwardv += `${gesturesu.length & uimanagerp.length}`;
      }
          let trophyo = false;
         gesturesu = [predictionactived.size | gesturesu.length];
         trophyo = trophyo && !trophyo;
       let exampleimagew = String.fromCharCode(105,95,51,95,106,115,111,110,115,0);
         predictionactived.set(fastforwardv, (fastforwardv == String.fromCharCode(71,0) ? predictionactived.size : fastforwardv.length));
         fastforwardv = `${fastforwardv.length}`;
      libavdevicec.push(3);
      if (privatechatbgS) {
         break;
      }
   } while (privatechatbgS && (1 > libavdevicec.length));
       let klevinI = String.fromCharCode(112,105,100,95,101,95,49,52,0);
         klevinI = `${2 | klevinI.length}`;
       let holderg = String.fromCharCode(108,95,49,53,95,100,101,99,111,100,105,110,103,0);
       let editG = String.fromCharCode(105,110,116,95,100,95,52,49,0);
          let dataU = String.fromCharCode(100,101,109,117,120,95,111,95,51,48,0);
          let icondefaultthumbnailT = 1.0;
         editG = `${klevinI.length}`;
         dataU += `${1 >> (Math.min(1, dataU.length))}`;
         icondefaultthumbnailT -= dataU.length;
      stepq = 13 < stepz;
      searchKeyword = search;
    }

    

   while (moreo.includes(router_)) {
      router_ <<= Math.min(2, subsS.length);
      break;
   }
   if (5 > libavdevicec.length && 3 > (5 & libavdevicec.length)) {
      stepq = libyogaP == router_;
   }
    

      moreo = [router_ - orientation5.length];
   for (let w = 0; w < 2; w++) {
       let hovery: Array<any> = [452, 642];
       let basketballa: Array<any> = [385, 331, 396];
       let clearW = false;
       let submith = String.fromCharCode(101,95,56,56,95,97,114,109,116,104,0);
       let profilepicW = 1.0;
      for (let t = 0; t < 2; t++) {
         clearW = (basketballa.length / (Math.max(hovery.length, 7))) == 93;
      }
         profilepicW += 1;
      for (let x = 0; x < 1; x++) {
         clearW = (((!clearW ? 57 : basketballa.length) << (Math.min(basketballa.length, 1))) <= 57);
      }
       let gcopy_o3 = String.fromCharCode(121,95,52,48,95,115,97,109,105,0);
       let shootZ = String.fromCharCode(106,95,53,57,95,114,101,109,105,110,100,101,114,0);
      while (!submith.startsWith(`${clearW}`)) {
         clearW = gcopy_o3.length <= 2;
         break;
      }
      if (2 < (1 >> (Math.min(3, hovery.length))) && 5 < (1 >> (Math.min(1, hovery.length)))) {
         profilepicW += parseInt(`${profilepicW}`) * 3;
      }
      if (4 < (shootZ.length << (Math.min(1, hovery.length))) || (shootZ.length << (Math.min(2, hovery.length))) < 4) {
         hovery.push(basketballa.length);
      }
          let bootsplashL = 3.0;
         gcopy_o3 += `${submith.length & shootZ.length}`;
         bootsplashL -= parseFloat(`${parseInt(`${bootsplashL}`) ^ 2}`);
          let clubs: Array<any> = [String.fromCharCode(97,121,98,114,105,95,108,95,54,49,0), String.fromCharCode(98,108,105,110,100,101,100,95,55,95,57,52,0), String.fromCharCode(114,95,52,52,95,115,99,97,110,110,105,110,103,0)];
          let renewB: Array<any> = [359, 666, 409];
          let manifestm = String.fromCharCode(101,120,97,110,100,101,100,95,56,95,50,52,0);
         hovery.push(3);
         clubs.push(2);
         renewB.push(2 + renewB.length);
         manifestm += `${clubs.length << (Math.min(Math.abs(1), 2))}`;
          let sourcef = String.fromCharCode(112,95,51,54,95,112,111,108,113,97,0);
          let mbnativeadvancedU = String.fromCharCode(114,101,97,99,104,97,98,105,108,105,116,121,95,97,95,55,57,0);
         hovery = [((clearW ? 5 : 1) * parseInt(`${profilepicW}`))];
         sourcef = `${sourcef.length * mbnativeadvancedU.length}`;
         mbnativeadvancedU += `${mbnativeadvancedU.length | sourcef.length}`;
      if ((basketballa.length ^ 5) >= 4 || 5 >= basketballa.length) {
         clearW = String.fromCharCode(119,0) == gcopy_o3;
      }
      libavdevicec = [2];
   }
    

   while (4 > subsS.length) {
       let yellowtored_: Map<any, any> = new Map([[String.fromCharCode(111,95,50,52,95,112,97,97,100,0),false ], [String.fromCharCode(100,97,114,107,101,110,105,110,103,95,54,95,51,48,0),false ], [String.fromCharCode(117,95,54,54,95,100,105,115,112,108,97,121,115,0),true ]]);
       let side7 = 4;
       let awayteamfieldD = String.fromCharCode(115,95,57,54,95,117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,0);
      if (yellowtored_.get(`${side7}`) == null) {
          let orangeuparrow4 = String.fromCharCode(97,95,54,52,95,97,110,111,116,104,101,114,0);
         yellowtored_ = new Map([[`${yellowtored_.size}`, 2]]);
         orangeuparrow4 += "3";
      }
      while (side7 == 3) {
         yellowtored_ = new Map([[awayteamfieldD, awayteamfieldD.length | side7]]);
         break;
      }
      for (let v = 0; v < 2; v++) {
         side7 %= Math.max(5, 1);
      }
      for (let o = 0; o < 2; o++) {
         side7 *= yellowtored_.size / (Math.max(9, side7));
      }
      let chartF = 5255779 <= side7;
      do {
         side7 &= side7;
         if (chartF) {
            break;
         }
      } while ((awayteamfieldD.length == side7) && chartF);
      if ((2 ^ side7) > 2 || 2 > (side7 ^ awayteamfieldD.length)) {
         side7 <<= Math.min(5, Math.abs(side7));
      }
         yellowtored_.set(`${side7}`, side7);
      let ballS = String.fromCharCode(104,56,118,105,119,50,117,120,0) == awayteamfieldD;
      do {
         awayteamfieldD += "2";
         if (ballS) {
            break;
         }
      } while (ballS && ((awayteamfieldD.length * 1) >= 3));
          let animationsU = String.fromCharCode(109,117,108,104,105,95,111,95,56,49,0);
         awayteamfieldD = `${animationsU.length}`;
      router_ /= Math.max(4, (orientation5 == String.fromCharCode(116,0) ? orientation5.length : stepz));
      break;
   }
       let mbjscommon0 = 1.0;
         mbjscommon0 -= parseFloat(`${parseInt(`${mbjscommon0}`)}`);
      while (mbjscommon0 > mbjscommon0) {
          let filled4 = 4.0;
          let orientationD = String.fromCharCode(117,110,105,120,95,109,95,51,54,0);
          let templateprocessorz = String.fromCharCode(104,95,54,54,95,101,110,118,101,108,111,112,101,0);
         mbjscommon0 -= parseFloat(`${parseInt(`${filled4}`)}`);
         filled4 /= Math.max(3, 1);
         orientationD = `${orientationD.length - 2}`;
         templateprocessorz = `${templateprocessorz.length}`;
         break;
      }
         mbjscommon0 *= parseFloat(`${parseInt(`${mbjscommon0}`)}`);
      template_frI *= ((stepq ? 3 : 1) - 2);
    

      template_frI |= 1;
   if ((libfileb / (Math.max(9, saveL))) == 5.7) {
       let gesturesP = String.fromCharCode(113,95,53,51,95,109,101,116,101,114,0);
       let tempnodataS = 0.0;
       let suggestiono = 0.0;
         gesturesP += `${parseInt(`${tempnodataS}`)}`;
         tempnodataS += 3;
       let dependenciesO = true;
      for (let t = 0; t < 2; t++) {
         tempnodataS /= Math.max((parseInt(`${tempnodataS}`) | (dependenciesO ? 5 : 2)), 5);
      }
          let incidentU = 4.0;
          let penaltyshootnogoalq = 2;
          let string9 = String.fromCharCode(97,95,52,51,95,102,117,110,103,105,98,108,101,0);
         dependenciesO = tempnodataS < gesturesP.length;
         incidentU -= parseFloat(`${3}`);
         penaltyshootnogoalq <<= Math.min(1, Math.abs(parseInt(`${incidentU}`) % 1));
         string9 = `${parseInt(`${incidentU}`) & string9.length}`;
      while ((tempnodataS * 4.18) >= 5.14) {
         tempnodataS -= (gesturesP == String.fromCharCode(71,0) ? gesturesP.length : (dependenciesO ? 1 : 4));
         break;
      }
       let eighteeny = false;
         tempnodataS *= parseInt(`${suggestiono}`) | 3;
      for (let y = 0; y < 2; y++) {
         suggestiono += parseInt(`${suggestiono}`);
      }
      libfileb /= Math.max(saveL, 2);
   }

    

   if ((libyogaP | stepz) == 4) {
      libyogaP *= parseInt(`${libfileb}`) / 1;
   }
   for (let d = 0; d < 2; d++) {
       let activeP = String.fromCharCode(122,95,50,48,95,119,111,114,100,108,105,115,116,0);
       let iconarrowleftz = false;
      for (let l = 0; l < 3; l++) {
         iconarrowleftz = !iconarrowleftz;
      }
      while (activeP.startsWith(`${iconarrowleftz}`)) {
          let tempnodataM = String.fromCharCode(112,95,50,48,95,116,111,111,108,0);
          let libavdevicet: Map<any, any> = new Map([[String.fromCharCode(109,95,52,55,95,100,101,99,111,114,114,101,108,97,116,101,0),false ], [String.fromCharCode(109,95,56,49,95,110,105,101,108,115,97,100,100,0),false ], [String.fromCharCode(115,99,104,101,109,97,95,51,95,48,0),true ]]);
         activeP = `${(2 << (Math.min(1, Math.abs((iconarrowleftz ? 5 : 4)))))}`;
         tempnodataM = `${tempnodataM.length | libavdevicet.size}`;
         libavdevicet = new Map([[`${libavdevicet.size}`, 2 & libavdevicet.size]]);
         break;
      }
         iconarrowleftz = activeP.length < 1;
      while (iconarrowleftz) {
         iconarrowleftz = !activeP.includes(`${iconarrowleftz}`);
         break;
      }
         iconarrowleftz = !activeP.endsWith(`${iconarrowleftz}`);
         activeP = `${activeP.length}`;
      stepq = 69 < subsS.length;
   }
    

   let incidentQ = template_frI >= 7438043;
   do {
       let scorepopsoundR = 1;
       let modal6 = String.fromCharCode(117,112,115,104,105,102,116,101,100,95,121,95,55,48,0);
       let android_ = String.fromCharCode(104,111,109,101,95,55,95,54,56,0);
       let predictiondefault1 = String.fromCharCode(116,101,114,109,105,110,97,116,101,95,57,95,54,50,0);
      while (modal6.length == 1) {
         scorepopsoundR ^= modal6.length | android_.length;
         break;
      }
         scorepopsoundR &= android_.length;
         scorepopsoundR /= Math.max(1, android_.length);
      for (let f = 0; f < 1; f++) {
         modal6 += `${modal6.length}`;
      }
         modal6 = "1";
         android_ = `${predictiondefault1.length - 3}`;
         scorepopsoundR /= Math.max(1, android_.length);
      while (predictiondefault1.length < 2) {
          let sheeta: Array<any> = [347, 235, 384];
          let rewardvideoP = String.fromCharCode(115,112,111,116,108,105,103,104,116,95,99,95,49,56,0);
          let downloader1 = String.fromCharCode(100,101,115,107,116,111,112,95,102,95,51,57,0);
          let sport3 = String.fromCharCode(100,101,116,101,99,116,105,111,110,95,114,95,55,57,0);
          let playlistR = String.fromCharCode(109,111,100,117,108,101,115,95,114,95,49,48,48,0);
         modal6 += `${3 - sheeta.length}`;
         sheeta.push(3);
         rewardvideoP += `${(downloader1 == String.fromCharCode(122,0) ? downloader1.length : sport3.length)}`;
         sport3 = `${rewardvideoP.length}`;
         playlistR += `${sport3.length >> (Math.min(playlistR.length, 1))}`;
         break;
      }
      let telemetryF = 5462018 >= android_.length;
      do {
         android_ += `${2 ^ predictiondefault1.length}`;
         if (telemetryF) {
            break;
         }
      } while (telemetryF && (modal6 == android_));
         android_ = `${android_.length}`;
       let values8 = 2.0;
      let reactnativeratingsC = scorepopsoundR <= 8095496;
      do {
          let next4 = String.fromCharCode(100,99,97,100,101,99,95,113,95,56,50,0);
          let telegrams = String.fromCharCode(103,116,101,115,116,95,48,95,56,56,0);
          let kuaishouR: Map<any, any> = new Map([[String.fromCharCode(117,100,112,95,55,95,53,50,0),false ], [String.fromCharCode(112,97,108,98,97,114,115,95,108,95,54,0),true ]]);
          let interstitialv = String.fromCharCode(114,101,109,111,116,101,95,103,95,52,48,0);
          let navigationp: Map<any, any> = new Map([[String.fromCharCode(118,111,119,101,108,95,105,95,52,57,0),915], [String.fromCharCode(117,116,104,111,114,95,102,95,54,0),262]]);
         scorepopsoundR *= telegrams.length ^ scorepopsoundR;
         next4 += `${navigationp.size}`;
         telegrams += `${kuaishouR.size ^ navigationp.size}`;
         kuaishouR = new Map([[`${navigationp.size}`, interstitialv.length - 3]]);
         interstitialv += "2";
         if (reactnativeratingsC) {
            break;
         }
      } while ((4 <= (scorepopsoundR / 5)) && reactnativeratingsC);
      template_frI -= 3 * libavdevicec.length;
      if (incidentQ) {
         break;
      }
   } while (incidentQ && (template_frI < 1));
   let loadingL = libavdevicec.length <= 8311765;
   do {
       let thumbnaile = 1.0;
       let refreshborderlesso = 2.0;
       let iconqqB = String.fromCharCode(115,112,101,97,107,101,114,95,50,95,53,0);
       let areaj: Map<any, any> = new Map([[String.fromCharCode(102,95,52,55,95,114,101,115,111,108,117,116,105,111,110,115,0),525], [String.fromCharCode(102,95,50,55,95,112,114,101,112,114,111,103,114,97,109,109,101,100,0),412], [String.fromCharCode(122,95,54,95,115,99,111,112,101,100,0),724]]);
      if ((thumbnaile / (Math.max(1.31, 10))) < 3.9 && 4 < (areaj.size / (Math.max(2, 8)))) {
         areaj = new Map([[`${refreshborderlesso}`, (iconqqB == String.fromCharCode(99,0) ? iconqqB.length : parseInt(`${refreshborderlesso}`))]]);
      }
      if (iconqqB.endsWith(`${areaj.size}`)) {
         areaj.set(`${thumbnaile}`, parseInt(`${thumbnaile}`) ^ iconqqB.length);
      }
      let change2 = 5489406.0 <= refreshborderlesso;
      do {
         refreshborderlesso *= parseFloat(`${3}`);
         if (change2) {
            break;
         }
      } while (change2 && (refreshborderlesso == thumbnaile));
          let runtimeschedulerI = String.fromCharCode(116,95,51,50,95,97,116,111,98,111,111,108,0);
          let pressureb = String.fromCharCode(100,111,119,110,115,97,109,112,108,101,100,95,101,95,51,48,0);
         thumbnaile /= Math.max(3, parseFloat(`${2}`));
         runtimeschedulerI += `${(runtimeschedulerI == String.fromCharCode(71,0) ? pressureb.length : runtimeschedulerI.length)}`;
         pressureb += `${3 / (Math.max(6, runtimeschedulerI.length))}`;
       let playlist3 = 2;
       let material6 = 3;
      if ((5 | material6) > 2 || 3 > (5 | material6)) {
          let episodesV: Array<any> = [112, 820];
          let dragj = String.fromCharCode(111,95,54,49,95,112,114,101,0);
          let tickO = String.fromCharCode(103,95,50,55,95,115,119,105,116,99,104,98,97,115,101,0);
          let backwhitew = String.fromCharCode(101,120,105,115,116,101,100,95,117,95,51,49,0);
          let ewarded_ = String.fromCharCode(112,108,105,115,116,95,49,95,55,55,0);
         playlist3 -= episodesV.length;
         episodesV = [1 / (Math.max(9, backwhitew.length))];
         dragj += `${1 & dragj.length}`;
         tickO = `${tickO.length / (Math.max(2, 3))}`;
         backwhitew = `${dragj.length}`;
         ewarded_ = `${2 >> (Math.min(3, tickO.length))}`;
      }
         refreshborderlesso += parseFloat(`${3}`);
         material6 |= parseInt(`${refreshborderlesso}`) * iconqqB.length;
          let eactv = false;
          let chat2 = 2;
         areaj = new Map([[`${chat2}`, 2]]);
         eactv = (eactv ? !eactv : !eactv);
         chat2 <<= Math.min(2, Math.abs(((eactv ? 5 : 4) - (eactv ? 3 : 1))));
          let gradle4 = String.fromCharCode(109,95,56,57,95,99,104,97,116,115,0);
         iconqqB = "3";
         gradle4 += "3";
      if ((1 & playlist3) == 3 || 3 == (playlist3 & 1)) {
         iconqqB += `${areaj.size % 3}`;
      }
         refreshborderlesso -= parseFloat(`${material6 % (Math.max(parseInt(`${refreshborderlesso}`), 5))}`);
      libavdevicec = [3 & stepz];
      if (loadingL) {
         break;
      }
   } while (loadingL && (stepq || (libavdevicec.length << (Math.min(Math.abs(2), 2))) < 2));
    

   while (!moreo.includes(libavdevicec.length)) {
      libavdevicec = [3 - template_frI];
      break;
   }
       let twitterp = false;
       let heartw = false;
      if (heartw || !twitterp) {
          let confirmationz = 3.0;
          let bridgei = 3.0;
          let next7: Array<any> = [879, 475, 12];
          let taile = 2;
          let binddatasG = 0.0;
         heartw = bridgei <= next7.length;
         confirmationz -= parseFloat(`${parseInt(`${binddatasG}`)}`);
         bridgei /= Math.max(3, parseInt(`${confirmationz}`) * 2);
         next7.push(parseInt(`${confirmationz}`));
         taile |= 1 - taile;
         binddatasG /= Math.max(taile << (Math.min(5, Math.abs(3))), 1);
      }
         heartw = !twitterp;
      while (!twitterp && heartw) {
         heartw = twitterp;
         break;
      }
         twitterp = heartw;
      while (!heartw && twitterp) {
         twitterp = (heartw ? !twitterp : heartw);
         break;
      }
         heartw = twitterp;
      stepz >>= Math.min(moreo.length, 2);
    

   for (let h = 0; h < 3; h++) {
      stepz &= libavdevicec.length;
   }
   while (5.91 <= libfileb) {
      libfileb += 2;
      break;
   }
    

      libreanimatedI += `${(2 ^ (stepq ? 4 : 3))}`;
   if (3 <= libyogaP) {
      libyogaP += ((stepq ? 5 : 1) - 1);
   }
    

       let iconclosewhitebgQ = String.fromCharCode(100,105,97,99,114,105,116,105,99,95,99,95,50,49,0);
      for (let z = 0; z < 3; z++) {
         iconclosewhitebgQ += `${iconclosewhitebgQ.length & iconclosewhitebgQ.length}`;
      }
       let chatroombackgroundf = String.fromCharCode(97,117,116,111,112,108,97,121,95,56,95,54,53,0);
      if (chatroombackgroundf != String.fromCharCode(56,0) || iconclosewhitebgQ == String.fromCharCode(118,0)) {
          let statsnomoredata5 = false;
          let libapminsighta5 = String.fromCharCode(109,95,57,49,95,111,100,101,114,110,0);
          let zoomc = 3.0;
          let brightnessc = false;
          let iconuserf = String.fromCharCode(105,95,48,95,115,97,109,112,108,101,114,0);
         iconclosewhitebgQ = `${iconuserf.length}`;
         statsnomoredata5 = statsnomoredata5 || 3.56 > zoomc;
         libapminsighta5 = `${libapminsighta5.length}`;
         zoomc *= ((statsnomoredata5 ? 1 : 1) & 2);
         brightnessc = String.fromCharCode(86,0) == libapminsighta5 && zoomc >= 31.60;
         iconuserf = "3";
      }
      moreo = [stepz ^ 3];
   while ((saveL % (Math.max(1, template_frI))) > 5 && (template_frI % (Math.max(saveL, 9))) > 5) {
      saveL += libavdevicec.length % 1;
      break;
   }
    

       let sinaY = 1.0;
       let chinasameb = String.fromCharCode(115,117,112,112,111,114,116,97,98,108,101,95,51,95,49,50,0);
         sinaY -= parseFloat(`${3}`);
          let homeicond = String.fromCharCode(120,95,55,55,95,122,111,110,101,115,0);
          let turn1 = String.fromCharCode(118,95,52,51,95,114,101,115,101,116,98,117,102,0);
          let friendsc = 2.0;
         sinaY += parseFloat(`${1 | parseInt(`${sinaY}`)}`);
         homeicond = `${homeicond.length}`;
         turn1 = "1";
         friendsc *= parseFloat(`${turn1.length - 3}`);
      while (chinasameb.endsWith(`${sinaY}`)) {
          let ewardedt = String.fromCharCode(119,95,50,49,95,109,101,109,115,104,105,112,0);
          let dependencyL = String.fromCharCode(101,95,51,57,95,97,117,116,111,109,97,116,105,99,97,108,108,121,0);
         chinasameb = `${chinasameb.length + dependencyL.length}`;
         ewardedt += `${(String.fromCharCode(108,0) == ewardedt ? ewardedt.length : ewardedt.length)}`;
         dependencyL += `${(ewardedt == String.fromCharCode(68,0) ? ewardedt.length : ewardedt.length)}`;
         break;
      }
         chinasameb = `${parseInt(`${sinaY}`) ^ chinasameb.length}`;
      while (!chinasameb.includes(`${sinaY}`)) {
         chinasameb = "3";
         break;
      }
         chinasameb = `${chinasameb.length & parseInt(`${sinaY}`)}`;
      saveL /= Math.max((1 - (stepq ? 2 : 1)), 3);
       let gradleS: Map<any, any> = new Map([[String.fromCharCode(122,95,53,57,95,119,104,105,116,101,115,112,97,99,101,0),false ], [String.fromCharCode(114,116,112,100,101,99,95,110,95,54,53,0),true ]]);
       let smallb = String.fromCharCode(102,114,97,99,116,105,111,110,95,57,95,49,52,0);
       let libjsiK = String.fromCharCode(110,101,97,114,101,115,116,95,116,95,51,53,0);
         smallb = `${(smallb == String.fromCharCode(117,0) ? gradleS.size : smallb.length)}`;
         libjsiK += `${smallb.length}`;
      libyogaP -= (parseInt(`${libfileb}`) & (stepq ? 5 : 1));
    

   let flipperZ = subsS.length >= 7609228;
   do {
      subsS.push(3 << (Math.min(3, Math.abs(default_vrp.size))));
      if (flipperZ) {
         break;
      }
   } while (flipperZ && (4 <= (subsS.length ^ template_frI)));
   if ((5 - libyogaP) >= 2 || 3 >= (libyogaP - 5)) {
      libyogaP += parseInt(`${libfileb}`) | saveL;
   }
    

      libavdevicec = [parseInt(`${libfileb}`)];
   while ((libyogaP | subsS.length) >= 3) {
      subsS = [(orientation5 == String.fromCharCode(100,0) ? libavdevicec.length : orientation5.length)];
      break;
   }
    

   let commentN = default_vrp.size >= 8934925;
   do {
      default_vrp.set(`${libyogaP}`, (libyogaP ^ (stepq ? 5 : 3)));
      if (commentN) {
         break;
      }
   } while (commentN && (orientation5.includes(`${default_vrp.size}`)));
      saveL &= router_ << (Math.min(orientation5.length, 3));

    fetchData(searchKeyword, true);

   while (libreanimatedI.includes(`${libfileb}`)) {
      libfileb += 3;
      break;
   }
      orientation5 = `${libavdevicec.length - saveL}`;
    dispatch(addSearchHistory(searchKeyword));

   let assistQ = libreanimatedI.length >= 7363281;
   do {
      libreanimatedI += `${((stepq ? 5 : 5) | stepz)}`;
      if (assistQ) {
         break;
      }
   } while (assistQ && ((libyogaP / (Math.max(6, libreanimatedI.length))) >= 5));
   if (3 <= template_frI) {
      template_frI &= 3 + moreo.length;
   }
    setShowResults(!showResults);
  };

  const clearHistory = useCallback(() => {
       let expiredW: Array<any> = [89, 865];
    let philippines7 = String.fromCharCode(119,95,51,51,95,100,105,103,101,115,116,0);
    let utils6: Map<any, any> = new Map([[String.fromCharCode(98,105,110,107,100,97,116,97,95,106,95,54,48,0),true ], [String.fromCharCode(118,95,56,48,95,114,97,98,98,105,116,0),true ]]);
    let statsnomoredatan: Map<any, any> = new Map([[String.fromCharCode(101,110,100,105,97,110,110,101,115,115,95,53,95,51,53,0),151], [String.fromCharCode(114,111,117,110,100,100,115,95,100,95,51,54,0),605], [String.fromCharCode(109,105,112,115,102,112,117,95,122,95,55,54,0),736]]);
    let disconnectedq = String.fromCharCode(103,95,49,53,95,116,104,111,117,103,104,0);
    let iconmore9 = 2.0;
    let predictiondefaulty = String.fromCharCode(103,101,116,114,97,110,100,111,109,95,107,95,54,51,0);
    let iconrightorangeE: Array<any> = [138, 395];
    let mappingJ: Map<any, any> = new Map([[String.fromCharCode(113,95,54,57,95,120,99,116,101,115,116,0),21], [String.fromCharCode(108,97,116,109,95,114,95,56,55,0),92], [String.fromCharCode(100,121,110,108,105,110,107,95,107,95,56,55,0),943]]);
    let auto_8e9: Map<any, any> = new Map([[String.fromCharCode(109,101,100,105,97,115,95,105,95,53,54,0),798], [String.fromCharCode(120,95,56,54,95,97,101,118,97,108,0),18], [String.fromCharCode(104,95,56,51,95,105,110,100,105,99,105,101,115,0),84]]);
    let emptyM = String.fromCharCode(119,105,100,101,102,101,108,101,109,95,54,95,56,0);
    let update_2C = 3.0;
    let backwhiteZ: Map<any, any> = new Map([[String.fromCharCode(115,95,53,55,95,112,97,99,101,114,0),413], [String.fromCharCode(105,100,101,110,116,105,102,105,101,114,115,95,114,95,49,55,0),962]]);
    let photo9: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,112,95,112,95,53,57,0),38], [String.fromCharCode(115,116,111,114,101,95,113,95,54,48,0),441], [String.fromCharCode(108,95,52,57,95,103,97,117,115,115,105,97,110,105,105,114,100,0),385]]);
       let basketballmatchdetailbgP = String.fromCharCode(106,117,108,105,97,110,95,49,95,56,52,0);
       let textW = 3.0;
         textW -= parseFloat(`${parseInt(`${textW}`) / 1}`);
         basketballmatchdetailbgP = `${basketballmatchdetailbgP.length}`;
          let iconarrowleftY = String.fromCharCode(113,95,52,57,0);
          let mbnativeadvancedl = String.fromCharCode(121,95,56,55,95,105,110,115,116,97,108,108,0);
         textW *= (parseFloat(`${iconarrowleftY == String.fromCharCode(98,0) ? iconarrowleftY.length : parseInt(`${textW}`)}`));
         mbnativeadvancedl += "2";
          let penaltyshootj = false;
         textW -= (parseFloat(`${parseInt(`${textW}`) - (penaltyshootj ? 5 : 2)}`));
          let iconwatchi: Array<any> = [419, 957, 105];
          let iconarrowrightC = String.fromCharCode(119,111,114,115,116,95,108,95,57,53,0);
         basketballmatchdetailbgP += "3";
         iconwatchi.push(2);
         iconarrowrightC = `${iconwatchi.length}`;
         basketballmatchdetailbgP = `${1 ^ basketballmatchdetailbgP.length}`;
      expiredW.push(statsnomoredatan.size % (Math.max(disconnectedq.length, 7)));
   while ((philippines7.length - iconmore9) < 5.45) {
       let historyV = String.fromCharCode(112,108,97,121,97,98,108,101,95,107,95,54,56,0);
       let traminip = 5.0;
       let z_lock9 = String.fromCharCode(109,95,57,50,95,114,101,109,97,105,110,0);
      while (traminip < 5.50) {
         historyV += `${z_lock9.length << (Math.min(4, Math.abs(parseInt(`${traminip}`))))}`;
         break;
      }
      let basketballawayteamC = traminip >= 7263212.0;
      do {
         traminip /= Math.max(z_lock9.length, 2);
         if (basketballawayteamC) {
            break;
         }
      } while ((2.2 < (traminip / 2.69)) && basketballawayteamC);
       let right4: Array<any> = [String.fromCharCode(116,95,52,56,95,102,108,97,99,100,97,116,97,0), String.fromCharCode(119,95,50,56,95,99,111,100,101,102,0), String.fromCharCode(100,120,116,111,114,121,95,56,95,54,52,0)];
         traminip /= Math.max(3, 1);
         z_lock9 += `${z_lock9.length ^ parseInt(`${traminip}`)}`;
      for (let m = 0; m < 2; m++) {
          let circleP = true;
          let iconstarR = 1.0;
          let mbnativeG = String.fromCharCode(114,95,49,48,48,95,97,118,102,111,114,109,97,116,114,101,115,0);
          let overlayS = 2;
          let memberO = 4;
         right4.push(overlayS | 2);
         circleP = memberO > parseInt(`${iconstarR}`);
         iconstarR /= Math.max(((circleP ? 3 : 2) << (Math.min(Math.abs(1), 4))), 1);
         mbnativeG += `${memberO * parseInt(`${iconstarR}`)}`;
         overlayS |= 2;
      }
      let emojiheart4 = 5563716 >= z_lock9.length;
      do {
          let defaultplayerimgR = String.fromCharCode(106,95,55,48,95,121,101,115,116,101,114,100,97,121,0);
          let shootyesgoalf = false;
          let emojig: Map<any, any> = new Map([[String.fromCharCode(110,99,111,110,102,95,113,95,55,57,0),298], [String.fromCharCode(104,95,51,95,115,108,111,112,0),995], [String.fromCharCode(115,95,53,53,95,103,101,110,101,114,97,108,105,115,101,100,0),655]]);
          let temperatureJ = String.fromCharCode(102,95,53,51,95,116,114,97,102,0);
          let launcherV = true;
         z_lock9 = `${(String.fromCharCode(117,0) == defaultplayerimgR ? right4.length : defaultplayerimgR.length)}`;
         shootyesgoalf = ((temperatureJ.length | (!shootyesgoalf ? temperatureJ.length : 25)) >= 25);
         emojig.set(temperatureJ, (temperatureJ == String.fromCharCode(106,0) ? temperatureJ.length : emojig.size));
         launcherV = (88 < ((!launcherV ? 88 : temperatureJ.length) >> (Math.min(temperatureJ.length, 5))));
         if (emojiheart4) {
            break;
         }
      } while (emojiheart4 && (!historyV.startsWith(`${z_lock9.length}`)));
         traminip -= z_lock9.length;
      while (5 > (historyV.length & 4)) {
          let friendsM = 5.0;
         traminip /= Math.max(1, 1);
         friendsM -= parseInt(`${friendsM}`);
         break;
      }
      iconmore9 /= Math.max(expiredW.length, 2);
      break;
   }
      predictiondefaulty = `${utils6.size}`;
   while ((3 << (Math.min(3, expiredW.length))) < 5) {
       let cancelD = 4.0;
       let malaysia5 = true;
       let libreactnativeblobG: Map<any, any> = new Map([[String.fromCharCode(114,95,57,54,95,114,97,100,97,114,0),false ], [String.fromCharCode(108,95,54,48,95,115,104,117,116,100,111,119,110,0),true ]]);
       let imagemanagerg: Map<any, any> = new Map([[String.fromCharCode(108,111,99,107,105,110,103,95,106,95,53,54,0),731], [String.fromCharCode(99,97,108,99,117,108,97,116,105,111,110,95,97,95,51,49,0),286]]);
         malaysia5 = (49 == (imagemanagerg.size | (!malaysia5 ? 49 : imagemanagerg.size)));
          let mbbid6: Map<any, any> = new Map([[String.fromCharCode(115,99,114,111,108,108,97,98,108,101,95,101,95,51,53,0),609], [String.fromCharCode(116,114,97,99,101,95,105,95,57,55,0),812], [String.fromCharCode(105,110,105,116,118,95,48,95,53,55,0),645]]);
         libreactnativeblobG = new Map([[`${imagemanagerg.size}`, 1 % (Math.max(6, imagemanagerg.size))]]);
         mbbid6.set(`${mbbid6.size}`, mbbid6.size + mbbid6.size);
         imagemanagerg.set(`${malaysia5}`, imagemanagerg.size);
      if (malaysia5) {
         malaysia5 = (libreactnativeblobG.size >> (Math.min(1, Math.abs(imagemanagerg.size)))) >= 100;
      }
         malaysia5 = 20 > libreactnativeblobG.size;
          let libfabricjniY = String.fromCharCode(118,101,108,111,99,105,116,121,95,103,95,52,50,0);
         imagemanagerg.set(`${libfabricjniY}`, 1);
         malaysia5 = ((libreactnativeblobG.size & (malaysia5 ? libreactnativeblobG.size : 4)) < 48);
       let xvody = true;
       let comment5 = true;
      while (5 <= libreactnativeblobG.size) {
         malaysia5 = imagemanagerg.get(`${comment5}`) != null;
         break;
      }
      for (let l = 0; l < 1; l++) {
         comment5 = malaysia5;
      }
      for (let u = 0; u < 2; u++) {
          let routerV: Map<any, any> = new Map([[String.fromCharCode(97,108,108,114,103,98,95,57,95,55,49,0),String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,100,95,112,95,51,54,0)], [String.fromCharCode(109,111,100,105,116,121,95,56,95,49,48,0),String.fromCharCode(109,95,57,52,95,97,98,115,100,105,102,102,0)], [String.fromCharCode(108,95,54,48,95,118,105,100,115,116,97,98,117,116,105,108,115,0),String.fromCharCode(111,105,100,97,110,121,95,54,95,50,51,0)]]);
          let libswscaleE = 3.0;
         cancelD += (parseFloat(`${(malaysia5 ? 5 : 1) + 2}`));
         routerV.set(`${libswscaleE}`, routerV.size);
         libswscaleE /= Math.max(parseFloat(`${parseInt(`${libswscaleE}`)}`), 3);
      }
      let emptyk = xvody ? !xvody : xvody;
      do {
         xvody = (71 > ((!xvody ? 71 : libreactnativeblobG.size) << (Math.min(Math.abs(libreactnativeblobG.size), 2))));
         if (emptyk) {
            break;
         }
      } while ((!xvody) && emptyk);
      expiredW = [3];
      break;
   }
      predictiondefaulty = `${utils6.size & 3}`;
      disconnectedq = `${1 << (Math.min(2, emptyM.length))}`;
      statsnomoredatan.set(`${statsnomoredatan.size}`, 3);
      philippines7 = `${iconrightorangeE.length}`;
       let thailandI = String.fromCharCode(111,98,106,110,105,100,95,113,95,51,54,0);
       let middle3 = 3.0;
       let templateprocessorF: Map<any, any> = new Map([[String.fromCharCode(104,95,54,51,95,101,120,97,109,112,108,101,115,0),String.fromCharCode(119,95,50,57,95,105,110,116,101,110,116,0)], [String.fromCharCode(100,95,52,95,115,119,114,105,0),String.fromCharCode(114,102,102,116,105,95,48,95,53,53,0)], [String.fromCharCode(98,121,112,97,115,115,95,106,95,55,48,0),String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,95,48,95,51,53,0)]]);
      let e_managerP = thailandI.length >= 9332745;
      do {
         thailandI += `${templateprocessorF.size}`;
         if (e_managerP) {
            break;
         }
      } while ((thailandI.includes(`${middle3}`)) && e_managerP);
      let inouttargetredp = middle3 >= 5565788.0;
      do {
         middle3 *= parseInt(`${middle3}`);
         if (inouttargetredp) {
            break;
         }
      } while (inouttargetredp && (3 < (templateprocessorF.size / (Math.max(9, parseInt(`${middle3}`)))) && 5.54 < (2.43 / (Math.max(6, middle3)))));
       let macauV = String.fromCharCode(119,95,54,48,95,99,111,117,110,116,105,110,103,0);
       let e_viewB = String.fromCharCode(118,95,51,49,95,109,111,100,105,102,105,101,114,115,0);
       let adults = 4;
       let libbufferP = 0;
      let teamd = adults >= 6881809;
      do {
          let executorr = 2.0;
          let bgvipxvodd = 1.0;
          let catalogu = true;
          let logoutS = 0.0;
         adults /= Math.max(3, macauV.length ^ templateprocessorF.size);
         executorr += parseFloat(`${1 | parseInt(`${bgvipxvodd}`)}`);
         bgvipxvodd /= Math.max(parseFloat(`${parseInt(`${logoutS}`)}`), 5);
         catalogu = !catalogu || logoutS < 65.85;
         if (teamd) {
            break;
         }
      } while ((2 == adults) && teamd);
      while (2.60 < middle3) {
          let storeC: Array<any> = [697, 215];
          let fullscreenminR = 5.0;
          let indicatorJ = 1.0;
         templateprocessorF.set(macauV, 3);
         storeC = [3 ^ parseInt(`${indicatorJ}`)];
         fullscreenminR += parseFloat(`${storeC.length}`);
         indicatorJ -= parseFloat(`${parseInt(`${fullscreenminR}`)}`);
         break;
      }
          let trashO = String.fromCharCode(97,108,108,121,117,118,95,111,95,55,56,0);
         thailandI += `${parseInt(`${middle3}`) + e_viewB.length}`;
         trashO += `${trashO.length + trashO.length}`;
          let privilegeZ = 5.0;
         templateprocessorF = new Map([[`${templateprocessorF.size}`, thailandI.length & 2]]);
         privilegeZ -= parseFloat(`${3}`);
         middle3 /= Math.max(2, 5);
      statsnomoredatan = new Map([[`${mappingJ.size}`, 2]]);
      philippines7 = `${mappingJ.size}`;
       let setting2: Array<any> = [538, 465, 189];
         setting2 = [setting2.length / (Math.max(1, setting2.length))];
      if (setting2.length >= 2) {
         setting2 = [setting2.length % 1];
      }
         setting2 = [setting2.length];
      iconrightorangeE.push(mappingJ.size);
   for (let w = 0; w < 2; w++) {
      iconrightorangeE = [auto_8e9.size];
   }
   if ((5 * statsnomoredatan.size) < 1 || 4 < (statsnomoredatan.size * 5)) {
      disconnectedq = `${3 % (Math.max(9, parseInt(`${iconmore9}`)))}`;
   }
      predictiondefaulty += `${statsnomoredatan.size}`;
   let inactiveO = iconmore9 >= 8861755.0;
   do {
       let icondefaultthumbnailZ: Array<any> = [387, 88, 3];
       let umengj: Array<any> = [String.fromCharCode(110,95,56,50,95,113,115,99,97,108,101,113,108,111,103,0), String.fromCharCode(97,115,115,111,99,108,105,115,116,95,109,95,50,52,0), String.fromCharCode(115,95,52,52,95,99,114,111,119,100,105,110,0)];
      while ((icondefaultthumbnailZ.length + umengj.length) > 4) {
         umengj.push(icondefaultthumbnailZ.length);
         break;
      }
      while ((1 + umengj.length) > 2) {
          let penaltyshootc = true;
          let basketballplayerplaceholdera = false;
          let minig = String.fromCharCode(120,95,57,50,95,100,101,112,101,110,100,0);
          let defaultprofilepici: Map<any, any> = new Map([[String.fromCharCode(98,102,108,121,95,56,95,51,52,0),false ], [String.fromCharCode(108,95,56,53,95,109,111,100,101,110,97,109,101,0),false ]]);
         umengj.push(umengj.length);
         penaltyshootc = defaultprofilepici.size <= 61;
         basketballplayerplaceholdera = (defaultprofilepici.size & minig.length) >= 97;
         minig += `${((penaltyshootc ? 1 : 5))}`;
         break;
      }
          let defaultroombgF: Map<any, any> = new Map([[String.fromCharCode(111,114,100,101,114,116,121,112,101,95,50,95,52,57,0),787], [String.fromCharCode(120,95,55,49,95,104,112,105,99,0),3], [String.fromCharCode(99,101,110,116,114,97,108,108,121,95,118,95,49,48,48,0),533]]);
          let goallogoH = false;
         icondefaultthumbnailZ.push(defaultroombgF.size);
      while (1 > (icondefaultthumbnailZ.length - 4) || (umengj.length - 4) > 2) {
          let adultC = 2.0;
          let homeloadingZ = true;
          let chinasamee: Array<any> = [886, 786, 32];
          let update_ye = String.fromCharCode(117,116,99,95,106,95,53,54,0);
          let libcxxcomponentsn: Map<any, any> = new Map([[String.fromCharCode(97,95,55,95,109,97,99,114,111,0),350], [String.fromCharCode(101,110,99,111,100,101,100,115,116,114,101,97,109,95,99,95,54,0),656], [String.fromCharCode(110,95,54,57,95,117,110,109,117,116,101,100,0),187]]);
         umengj.push(3 ^ chinasamee.length);
         adultC -= ((homeloadingZ ? 3 : 3) & 1);
         homeloadingZ = update_ye.length < 44;
         chinasamee = [parseInt(`${adultC}`) % (Math.max(update_ye.length, 10))];
         libcxxcomponentsn = new Map([[`${libcxxcomponentsn.size}`, libcxxcomponentsn.size ^ 1]]);
         break;
      }
      if ((2 * umengj.length) > 5 || 4 > (umengj.length * 2)) {
         icondefaultthumbnailZ = [umengj.length];
      }
      let baseO = 6703177 <= umengj.length;
      do {
         umengj = [icondefaultthumbnailZ.length];
         if (baseO) {
            break;
         }
      } while (baseO && (5 >= umengj.length));
      iconmore9 -= umengj.length >> (Math.min(Math.abs(2), 4));
      if (inactiveO) {
         break;
      }
   } while (inactiveO && (2 == (expiredW.length >> (Math.min(Math.abs(1), 3)))));
       let downloadedQ = 1.0;
       let libreanimatedI: Map<any, any> = new Map([[String.fromCharCode(112,95,54,57,95,107,101,121,108,101,110,0),692], [String.fromCharCode(117,110,114,101,109,111,118,97,98,108,101,95,48,95,56,52,0),668], [String.fromCharCode(103,114,105,100,95,118,95,51,49,0),685]]);
         downloadedQ += libreanimatedI.size - parseInt(`${downloadedQ}`);
      if (Array.from(libreanimatedI.values()).includes(downloadedQ)) {
         downloadedQ -= 3;
      }
      if ((libreanimatedI.size - downloadedQ) > 5.5 && (5.5 - downloadedQ) > 4.9) {
         downloadedQ *= parseInt(`${downloadedQ}`);
      }
      if (5 > (3 ^ libreanimatedI.size) && (3.70 / (Math.max(3, downloadedQ))) > 5.100) {
         downloadedQ -= libreanimatedI.size / 1;
      }
         libreanimatedI.set(`${downloadedQ}`, libreanimatedI.size);
      let mintegralf = downloadedQ <= 6995788.0;
      do {
         downloadedQ += libreanimatedI.size + parseInt(`${downloadedQ}`);
         if (mintegralf) {
            break;
         }
      } while (mintegralf && (libreanimatedI.get(`${downloadedQ}`) == null));
      predictiondefaulty += `${mappingJ.size}`;
      disconnectedq += `${iconrightorangeE.length}`;
   let filedr = 7184240 <= auto_8e9.size;
   do {
       let issubt = String.fromCharCode(105,95,53,49,95,114,101,108,101,97,115,101,0);
       let injuryR = String.fromCharCode(116,105,109,101,103,109,95,56,95,56,48,0);
      if (issubt.length <= injuryR.length) {
         issubt = `${issubt.length & injuryR.length}`;
      }
       let iconcalendart = String.fromCharCode(106,95,52,50,95,108,105,98,97,118,117,116,105,108,0);
       let telegramN = String.fromCharCode(102,95,57,52,95,98,105,116,109,97,112,0);
      for (let o = 0; o < 2; o++) {
         iconcalendart += "2";
      }
      let selections = String.fromCharCode(55,101,51,117,98,102,0) == telegramN;
      do {
         telegramN += `${1 & telegramN.length}`;
         if (selections) {
            break;
         }
      } while ((iconcalendart.length <= 3) && selections);
          let skip3 = String.fromCharCode(103,95,48,95,98,115,111,108,117,116,101,0);
          let componentt: Array<any> = [931, 987];
          let minit_xy = String.fromCharCode(116,105,109,101,111,117,116,101,100,95,112,95,52,52,0);
         injuryR += `${iconcalendart.length - componentt.length}`;
         skip3 = `${minit_xy.length % (Math.max(skip3.length, 9))}`;
         componentt = [minit_xy.length - 3];
         injuryR += `${iconcalendart.length}`;
      auto_8e9 = new Map([[`${expiredW.length}`, expiredW.length << (Math.min(Math.abs(2), 1))]]);
      if (filedr) {
         break;
      }
   } while (filedr && (disconnectedq.length == 3));
      disconnectedq = `${3 + statsnomoredatan.size}`;

    dispatch(clearSearchHistory());
  }, []);

  
  const onClickSearchResult = useCallback(() => {
       let modeF = 5.0;
    let tooltips7 = String.fromCharCode(116,95,50,53,95,112,97,115,115,0);
    let sellq = 3.0;
    let selectedx = 5.0;
    let ajaxX: Array<any> = [762, 474];
    let sliderp = 1.0;
    let fileb = String.fromCharCode(115,117,98,109,105,116,95,120,95,49,0);
    let button0: Map<any, any> = new Map([[String.fromCharCode(116,114,117,115,116,95,104,95,55,48,0),String.fromCharCode(98,95,54,56,95,100,105,118,109,111,100,0)], [String.fromCharCode(114,101,99,111,114,100,105,110,103,95,52,95,57,54,0),String.fromCharCode(118,95,50,54,95,118,105,109,97,103,101,108,111,97,100,101,114,0)]]);
    let savex = 3;
    let gestureS = 4;
    let reactnativeratingsA = String.fromCharCode(113,95,55,55,0);
    let e_positionn = 5.0;
    let completep = String.fromCharCode(102,95,52,57,95,109,97,116,114,105,120,101,110,99,0);
    let circlek = String.fromCharCode(109,100,99,116,95,56,95,55,51,0);
      tooltips7 = `${3 & ajaxX.length}`;
       let nbatrophy5 = String.fromCharCode(108,111,119,101,115,116,95,105,95,57,57,0);
       let libyoga1: Map<any, any> = new Map([[String.fromCharCode(102,95,53,48,95,97,99,99,117,109,0),344], [String.fromCharCode(117,95,57,48,95,115,101,108,102,105,101,0),631], [String.fromCharCode(109,95,57,55,95,104,105,103,104,98,105,116,100,101,112,116,104,0),325]]);
       let yellowZ = String.fromCharCode(99,95,56,95,110,116,102,115,0);
      let firebaseU = libyoga1.size >= 6078577;
      do {
         libyoga1.set(nbatrophy5, 1);
         if (firebaseU) {
            break;
         }
      } while ((libyoga1.size < 1) && firebaseU);
         libyoga1.set(nbatrophy5, libyoga1.size % (Math.max(nbatrophy5.length, 2)));
          let filedj: Array<any> = [String.fromCharCode(103,101,116,112,101,101,114,97,100,100,114,95,55,95,54,53,0), String.fromCharCode(104,95,54,53,95,99,111,110,110,101,99,116,0), String.fromCharCode(116,95,56,57,95,121,97,108,101,0)];
          let default_9cy = String.fromCharCode(114,95,55,51,95,112,108,117,115,0);
          let settingk = true;
         libyoga1 = new Map([[yellowZ, nbatrophy5.length % 2]]);
         filedj.push((3 - (settingk ? 5 : 3)));
         default_9cy += `${((settingk ? 3 : 3))}`;
      while (libyoga1.size > nbatrophy5.length) {
         nbatrophy5 += `${(String.fromCharCode(118,0) == nbatrophy5 ? nbatrophy5.length : libyoga1.size)}`;
         break;
      }
      let g_countL = String.fromCharCode(115,104,121,57,101,122,111,120,119,106,0) == nbatrophy5;
      do {
         nbatrophy5 += `${libyoga1.size}`;
         if (g_countL) {
            break;
         }
      } while ((yellowZ != nbatrophy5) && g_countL);
      for (let k = 0; k < 1; k++) {
         yellowZ += "3";
      }
      if ((5 + nbatrophy5.length) >= 3 || 3 >= (libyoga1.size + 5)) {
         nbatrophy5 = `${libyoga1.size}`;
      }
      let abidetect_ = 6798242 <= libyoga1.size;
      do {
         libyoga1.set(`${nbatrophy5}`, (nbatrophy5 == String.fromCharCode(107,0) ? nbatrophy5.length : libyoga1.size));
         if (abidetect_) {
            break;
         }
      } while (abidetect_ && (nbatrophy5.length > libyoga1.size));
         yellowZ += `${(String.fromCharCode(118,0) == nbatrophy5 ? nbatrophy5.length : libyoga1.size)}`;
      tooltips7 = `${reactnativeratingsA.length << (Math.min(5, Math.abs(parseInt(`${sellq}`))))}`;
       let awayicon7 = true;
       let fileN = true;
       let componentregistry8: Map<any, any> = new Map([[String.fromCharCode(119,95,55,95,107,116,111,112,0),String.fromCharCode(112,95,57,57,95,114,101,115,101,101,107,0)], [String.fromCharCode(108,105,98,115,104,105,110,101,95,118,95,54,57,0),String.fromCharCode(99,95,55,54,95,108,97,117,110,99,104,0)]]);
      for (let t = 0; t < 3; t++) {
         fileN = !fileN && componentregistry8.size >= 71;
      }
         awayicon7 = componentregistry8.size >= 23;
      while (!fileN || 3 >= (componentregistry8.size | 5)) {
          let mimeT = true;
         componentregistry8.set(`${fileN}`, ((awayicon7 ? 3 : 2)));
         mimeT = !mimeT;
         break;
      }
      for (let n = 0; n < 1; n++) {
         awayicon7 = fileN || awayicon7;
      }
      for (let m = 0; m < 2; m++) {
         fileN = (84 <= (componentregistry8.size * (!fileN ? componentregistry8.size : 20)));
      }
       let history0: Array<any> = [31, 758, 314];
      let predictionarrowN = history0.length <= 6247556;
      do {
          let pageG = String.fromCharCode(115,117,114,102,97,99,101,95,104,95,50,48,0);
          let plasha: Map<any, any> = new Map([[String.fromCharCode(110,101,119,101,115,116,95,57,95,52,57,0),56], [String.fromCharCode(110,95,49,56,95,112,97,114,115,101,117,116,105,108,115,0),267]]);
          let plus7 = String.fromCharCode(115,117,98,115,97,109,112,108,101,95,48,95,51,51,0);
          let shirtg = String.fromCharCode(97,98,111,117,116,115,95,98,95,50,49,0);
          let traminiT = 3.0;
         history0.push(3);
         pageG = `${plus7.length}`;
         plasha.set(`${shirtg}`, (shirtg == String.fromCharCode(120,0) ? plasha.size : shirtg.length));
         plus7 += `${plasha.size}`;
         traminiT += parseFloat(`${pageG.length / 1}`);
         if (predictionarrowN) {
            break;
         }
      } while (predictionarrowN && (!fileN));
         awayicon7 = !fileN;
         awayicon7 = !fileN;
      e_positionn += parseFloat(`${1 - reactnativeratingsA.length}`);
   while (savex < 2) {
       let shielddoneE = String.fromCharCode(99,95,49,48,48,95,112,114,101,116,116,121,0);
       let libyogaQ = String.fromCharCode(116,95,56,51,95,97,110,105,109,97,116,101,0);
       let fieldt: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,98,111,120,95,101,95,51,50,0),918], [String.fromCharCode(117,95,52,57,95,115,117,110,114,105,115,101,0),306], [String.fromCharCode(115,95,54,53,95,99,104,111,105,99,101,115,0),484]]);
       let cornerkickc = true;
       let blacklisto = String.fromCharCode(98,95,57,56,95,99,111,108,114,97,109,0);
      for (let y = 0; y < 2; y++) {
          let saveT = 2.0;
          let flipperG = String.fromCharCode(106,95,51,51,95,101,114,114,111,114,0);
          let chinasame3 = 5;
         shielddoneE += `${parseInt(`${saveT}`) / (Math.max(fieldt.size, 3))}`;
         saveT -= 1;
         flipperG = `${flipperG.length + chinasame3}`;
         chinasame3 %= Math.max(flipperG.length * chinasame3, 2);
      }
         cornerkickc = 10 >= shielddoneE.length;
         libyogaQ += "1";
      while (libyogaQ.length < fieldt.size) {
         fieldt.set(shielddoneE, (String.fromCharCode(102,0) == shielddoneE ? (cornerkickc ? 2 : 5) : shielddoneE.length));
         break;
      }
         cornerkickc = shielddoneE.length >= fieldt.size;
      if (4 >= blacklisto.length && cornerkickc) {
         blacklisto = `${blacklisto.length - 1}`;
      }
       let mutedz = 3.0;
          let basei = 5.0;
          let armva9 = String.fromCharCode(107,95,56,54,95,117,98,108,105,99,0);
         mutedz += fieldt.size;
         basei /= Math.max(2, parseFloat(`${armva9.length << (Math.min(Math.abs(1), 5))}`));
         armva9 = `${1 | armva9.length}`;
      let q_titleG = String.fromCharCode(52,56,49,120,48,122,51,121,104,0) == blacklisto;
      do {
          let iconshareH = 4.0;
          let contextu = 2.0;
         blacklisto = `${parseInt(`${contextu}`)}`;
         iconshareH /= Math.max(4, parseInt(`${iconshareH}`));
         if (q_titleG) {
            break;
         }
      } while (q_titleG && (fieldt.size > 1));
         libyogaQ = `${fieldt.size >> (Math.min(Math.abs(1), 5))}`;
          let mappingK: Array<any> = [37, 904, 57];
          let tooltipsV = 3;
          let targetc = String.fromCharCode(109,105,110,95,56,95,49,55,0);
         blacklisto += `${parseInt(`${mutedz}`)}`;
         mappingK.push(tooltipsV);
         tooltipsV *= 1 >> (Math.min(3, Math.abs(tooltipsV)));
         targetc = `${tooltipsV}`;
       let predictionbannery = 2.0;
       let auto_2aY = 5.0;
         libyogaQ += "1";
      if (5 == (libyogaQ.length << (Math.min(3, Math.abs(fieldt.size)))) && (libyogaQ.length << (Math.min(Math.abs(5), 4))) == 5) {
         fieldt = new Map([[shielddoneE, 2 % (Math.max(2, shielddoneE.length))]]);
      }
         libyogaQ += `${shielddoneE.length}`;
      savex <<= Math.min(Math.abs(savex), 4);
      break;
   }
   while ((selectedx * 2.41) <= 2.43) {
       let libswscaleQ = 1;
       let selection9 = true;
       let shootyesgoalK = String.fromCharCode(118,95,52,56,95,114,101,102,108,0);
       let switch_h66 = true;
         switch_h66 = !selection9;
         shootyesgoalK += `${libswscaleQ | 3}`;
      if ((libswscaleQ % (Math.max(shootyesgoalK.length, 6))) <= 4) {
         shootyesgoalK = `${((selection9 ? 2 : 5))}`;
      }
          let rocketf = String.fromCharCode(109,95,49,49,95,104,111,117,114,108,121,0);
          let fastforwardm: Map<any, any> = new Map([[String.fromCharCode(112,95,55,48,95,109,117,108,116,105,101,110,100,0),false ], [String.fromCharCode(102,105,108,116,101,114,103,114,97,112,104,95,103,95,48,0),false ], [String.fromCharCode(113,115,118,115,99,97,108,101,95,111,95,57,53,0),false ]]);
         selection9 = switch_h66;
         rocketf = `${1 - fastforwardm.size}`;
         fastforwardm = new Map([[`${fastforwardm.size}`, fastforwardm.size << (Math.min(rocketf.length, 4))]]);
          let l_unlockn: Map<any, any> = new Map([[String.fromCharCode(97,95,49,95,115,113,117,97,114,101,115,0),true ], [String.fromCharCode(102,95,51,95,98,105,103,117,105,110,116,0),false ], [String.fromCharCode(105,95,50,50,95,97,110,97,108,121,122,105,110,103,0),false ]]);
          let shootyesgoalX = String.fromCharCode(100,101,101,112,101,114,95,117,95,54,53,0);
          let iconrightorangeK: Map<any, any> = new Map([[String.fromCharCode(109,101,114,103,101,97,98,108,101,95,98,95,57,51,0),788], [String.fromCharCode(117,95,50,48,95,115,117,112,112,111,114,116,115,0),324], [String.fromCharCode(101,120,112,97,110,115,105,111,110,95,51,95,53,54,0),298]]);
         shootyesgoalK += `${(String.fromCharCode(67,0) == shootyesgoalK ? l_unlockn.size : shootyesgoalK.length)}`;
         l_unlockn.set(`${shootyesgoalX}`, shootyesgoalX.length);
         iconrightorangeK.set(`${shootyesgoalX}`, 1);
          let abidetectC = String.fromCharCode(114,101,97,115,109,95,109,95,54,56,0);
         libswscaleQ &= ((selection9 ? 1 : 3) + 3);
         abidetectC += `${abidetectC.length}`;
         selection9 = libswscaleQ == shootyesgoalK.length;
       let containeru = String.fromCharCode(99,111,110,118,101,114,115,105,111,110,95,101,95,53,49,0);
       let smalln = String.fromCharCode(112,111,112,95,109,95,56,57,0);
          let l_positionk = 4;
          let umengR = String.fromCharCode(116,97,110,115,105,103,95,48,95,52,56,0);
         selection9 = (libswscaleQ << (Math.min(containeru.length, 4))) < 31;
         l_positionk <<= Math.min(Math.abs(3 / (Math.max(2, l_positionk))), 2);
         umengR = `${l_positionk % (Math.max(1, 5))}`;
      for (let e = 0; e < 3; e++) {
         containeru += `${shootyesgoalK.length}`;
      }
          let iconnewsshareU = String.fromCharCode(111,95,50,95,117,110,101,115,99,97,112,101,0);
         containeru = `${containeru.length + 2}`;
         iconnewsshareU += `${(String.fromCharCode(116,0) == iconnewsshareU ? iconnewsshareU.length : iconnewsshareU.length)}`;
      let reminderl = String.fromCharCode(57,109,100,119,122,0) == shootyesgoalK;
      do {
         shootyesgoalK = `${smalln.length % 1}`;
         if (reminderl) {
            break;
         }
      } while (reminderl && (shootyesgoalK.length < 3 || !switch_h66));
      button0.set(`${sellq}`, parseInt(`${sellq}`) % (Math.max(9, parseInt(`${e_positionn}`))));
      break;
   }
   while (reactnativeratingsA.length < parseInt(`${modeF}`)) {
      reactnativeratingsA += `${parseInt(`${sellq}`)}`;
      break;
   }
      completep = `${reactnativeratingsA.length}`;
       let hover_ = false;
       let countryJ = String.fromCharCode(113,95,50,48,95,98,117,114,115,116,121,0);
       let detail0 = 0;
          let whitetickZ = String.fromCharCode(122,95,57,48,95,112,114,105,110,116,0);
          let dangerZ = String.fromCharCode(101,95,52,95,100,105,115,116,111,114,116,105,111,110,0);
          let iconwatch8 = String.fromCharCode(116,95,52,50,95,99,116,105,111,110,0);
         hover_ = dangerZ.length == whitetickZ.length;
         whitetickZ += `${iconwatch8.length ^ 1}`;
         dangerZ += `${iconwatch8.length << (Math.min(iconwatch8.length, 3))}`;
      let b_imageg = countryJ.length >= 8340121;
      do {
         countryJ += `${((hover_ ? 4 : 3) & 1)}`;
         if (b_imageg) {
            break;
         }
      } while (b_imageg && ((countryJ.length << (Math.min(5, Math.abs(detail0)))) < 4 || (detail0 << (Math.min(Math.abs(4), 4))) < 1));
       let a_managerw = String.fromCharCode(102,105,110,95,122,95,54,0);
         detail0 >>= Math.min(3, Math.abs(((hover_ ? 3 : 2))));
       let slidero = String.fromCharCode(112,99,105,112,104,101,114,116,101,120,116,95,56,95,50,0);
       let showlesss = String.fromCharCode(98,105,103,95,109,95,53,48,0);
      for (let k = 0; k < 1; k++) {
         a_managerw = `${(String.fromCharCode(113,0) == showlesss ? (hover_ ? 4 : 3) : showlesss.length)}`;
      }
          let chartl: Array<any> = [902, 100];
          let smallorangemanf: Array<any> = [968, 88];
         hover_ = 64 == a_managerw.length;
         chartl = [chartl.length];
         smallorangemanf = [smallorangemanf.length];
         detail0 <<= Math.min(Math.abs(a_managerw.length >> (Math.min(Math.abs(3), 5))), 2);
          let point3 = 4;
         countryJ = `${detail0 >> (Math.min(Math.abs(2), 1))}`;
         point3 += 1 | point3;
      e_positionn *= parseFloat(`${tooltips7.length}`);
   for (let k = 0; k < 2; k++) {
      tooltips7 += `${gestureS}`;
   }
       let mappingx = String.fromCharCode(118,95,53,51,95,114,101,102,108,101,99,116,0);
       let graphics7 = 0.0;
       let chat9 = String.fromCharCode(104,95,55,57,95,107,100,102,0);
       let libreactnativejniM = String.fromCharCode(108,111,111,107,97,115,105,100,101,95,119,95,53,57,0);
      if ((graphics7 + 2.95) <= 3.48) {
         chat9 = `${parseInt(`${graphics7}`)}`;
      }
       let assistV = String.fromCharCode(98,95,57,49,95,110,105,107,111,110,0);
         libreactnativejniM += `${parseInt(`${graphics7}`) % (Math.max(2, 1))}`;
      while (libreactnativejniM != String.fromCharCode(122,0)) {
          let predictionarrowz = String.fromCharCode(115,105,103,110,97,116,117,114,101,95,105,95,55,56,0);
          let redscoreballY: Map<any, any> = new Map([[String.fromCharCode(112,114,105,118,97,116,101,95,111,95,52,56,0),495], [String.fromCharCode(101,110,99,111,100,101,109,118,95,106,95,56,51,0),174], [String.fromCharCode(120,95,53,57,95,99,108,101,97,114,101,100,0),268]]);
         mappingx = "2";
         predictionarrowz += "3";
         redscoreballY = new Map([[`${redscoreballY.size}`, 3 + predictionarrowz.length]]);
         break;
      }
          let nativeV = 2.0;
          let fullscreenmin3 = String.fromCharCode(106,95,54,49,95,98,115,101,114,118,101,114,0);
         graphics7 += parseInt(`${nativeV}`);
         nativeV -= fullscreenmin3.length << (Math.min(Math.abs(2), 2));
         fullscreenmin3 += `${3 * fullscreenmin3.length}`;
          let clubL = 1.0;
         libreactnativejniM += `${parseInt(`${clubL}`)}`;
       let armvaf = 5;
      let libreactnativeblobo = 9378007 <= chat9.length;
      do {
         chat9 += `${armvaf ^ libreactnativejniM.length}`;
         if (libreactnativeblobo) {
            break;
         }
      } while (libreactnativeblobo && (assistV == chat9));
      selectedx -= parseInt(`${sellq}`) % (Math.max(chat9.length, 9));
   for (let r = 0; r < 1; r++) {
       let short_17l = 4.0;
       let classesc = 0.0;
       let viewer7 = String.fromCharCode(105,95,53,52,95,114,117,110,115,0);
      while (classesc > short_17l) {
         classesc /= Math.max(parseInt(`${short_17l}`), 2);
         break;
      }
      if (viewer7.length == 4) {
          let readF = String.fromCharCode(111,110,103,111,105,110,103,95,53,95,53,53,0);
          let actionsX = 3;
          let mbnativeadvancedO = true;
          let launcher_ = 1.0;
          let turndownt: Array<any> = [361, 340];
         viewer7 += `${1 ^ parseInt(`${launcher_}`)}`;
         readF += `${(readF == String.fromCharCode(75,0) ? turndownt.length : readF.length)}`;
         actionsX ^= 3 << (Math.min(3, turndownt.length));
         mbnativeadvancedO = (((!mbnativeadvancedO ? 34 : turndownt.length) | turndownt.length) > 34);
         launcher_ += turndownt.length;
      }
       let predictionbannerx = 3;
       let filledp = 1;
      if (viewer7.length < parseInt(`${classesc}`)) {
          let holderi = String.fromCharCode(98,114,101,97,100,99,114,117,109,98,115,95,112,95,52,57,0);
          let privilege2 = String.fromCharCode(102,105,110,100,95,111,95,53,51,0);
         viewer7 += `${holderi.length}`;
         holderi = "1";
         privilege2 = `${privilege2.length & 1}`;
      }
      for (let s = 0; s < 2; s++) {
         predictionbannerx >>= Math.min(Math.abs(predictionbannerx / (Math.max(4, viewer7.length))), 1);
      }
      gestureS += parseInt(`${sellq}`);
   }
       let thailandK: Map<any, any> = new Map([[String.fromCharCode(115,117,98,108,97,121,111,117,116,115,95,53,95,55,53,0),336], [String.fromCharCode(100,95,54,56,95,97,121,98,114,0),928], [String.fromCharCode(110,95,52,55,95,102,105,114,115,116,112,97,115,115,0),960]]);
      if ((5 | thailandK.size) > 2 || 5 > (thailandK.size | thailandK.size)) {
         thailandK = new Map([[`${thailandK.size}`, thailandK.size]]);
      }
       let playercommonh = String.fromCharCode(104,95,50,50,95,99,119,114,115,105,0);
       let confirmation3 = String.fromCharCode(111,118,102,108,95,122,95,49,49,0);
         playercommonh = `${confirmation3.length & 1}`;
      ajaxX = [ajaxX.length / 1];
      fileb += `${savex}`;
      modeF /= Math.max(gestureS, 2);
   let emojiq = sellq >= 6787598.0;
   do {
      sellq *= parseFloat(`${savex ^ parseInt(`${selectedx}`)}`);
      if (emojiq) {
         break;
      }
   } while (((parseInt(`${sellq}`) / (Math.max(reactnativeratingsA.length, 8))) > 4) && emojiq);
   for (let l = 0; l < 1; l++) {
      ajaxX = [1];
   }
      e_positionn *= parseFloat(`${gestureS}`);
      sliderp -= parseFloat(`${reactnativeratingsA.length & parseInt(`${e_positionn}`)}`);
   while (1.61 <= sliderp) {
      sliderp *= parseFloat(`${parseInt(`${modeF}`) % (Math.max(10, fileb.length))}`);
      break;
   }
       let matchB = String.fromCharCode(100,101,99,111,114,114,95,97,95,52,51,0);
      for (let y = 0; y < 1; y++) {
          let tempO: Map<any, any> = new Map([[String.fromCharCode(113,116,114,108,101,95,119,95,50,54,0),380], [String.fromCharCode(121,95,53,54,95,112,97,114,115,101,100,0),278], [String.fromCharCode(97,95,52,55,95,114,101,108,97,121,111,117,116,0),588]]);
         matchB = "1";
         tempO.set(`${tempO.size}`, 3 + tempO.size);
      }
          let modityt: Array<any> = [String.fromCharCode(104,95,52,49,95,101,110,116,101,114,105,110,103,0), String.fromCharCode(103,95,54,52,95,113,99,97,110,0), String.fromCharCode(99,111,100,101,102,95,116,95,56,52,0)];
          let index7 = String.fromCharCode(97,95,55,56,95,113,114,99,111,100,101,0);
          let cedbadcebfbfbfbcfecbct = String.fromCharCode(115,101,110,100,101,114,95,103,95,53,53,0);
         matchB += `${index7.length}`;
         modityt = [cedbadcebfbfbfbcfecbct.length >> (Math.min(Math.abs(3), 3))];
         index7 += `${3 | modityt.length}`;
         cedbadcebfbfbfbcfecbct = `${modityt.length * cedbadcebfbfbfbcfecbct.length}`;
      for (let m = 0; m < 3; m++) {
         matchB += `${(String.fromCharCode(81,0) == matchB ? matchB.length : matchB.length)}`;
      }
      sellq += parseFloat(`${parseInt(`${selectedx}`)}`);
   while ((reactnativeratingsA.length / (Math.max(6, savex))) < 3) {
      savex <<= Math.min(Math.abs(reactnativeratingsA.length + 2), 1);
      break;
   }
   if (4.98 > (gestureS + modeF) || (modeF + gestureS) > 4.98) {
      modeF -= parseInt(`${sellq}`);
   }
   let k_unlockw = selectedx <= 7293347.0;
   do {
      selectedx += 1;
      if (k_unlockw) {
         break;
      }
   } while (k_unlockw && ((sellq / (Math.max(selectedx, 5))) > 4.6));
   for (let y = 0; y < 2; y++) {
      selectedx -= fileb.length << (Math.min(4, ajaxX.length));
   }
   for (let q = 0; q < 1; q++) {
       let q_titlez = String.fromCharCode(118,95,49,51,95,105,110,116,101,103,101,114,115,0);
       let eventS = false;
       let rncoreS: Array<any> = [226, 644, 59];
       let desc5 = 4.0;
       let mapbufferg = true;
      for (let g = 0; g < 2; g++) {
         eventS = mapbufferg && 51.95 > desc5;
      }
       let libfolly7 = String.fromCharCode(98,112,117,116,115,95,117,95,50,55,0);
         mapbufferg = !eventS;
      if (!rncoreS.includes(desc5)) {
         rncoreS.push(rncoreS.length & q_titlez.length);
      }
      if ((desc5 / 3.77) > 3.86) {
         desc5 /= Math.max(1, parseInt(`${desc5}`) % 3);
      }
         rncoreS.push(1);
       let libreanimatedJ = 5;
       let active7 = 0;
         libfolly7 = `${3 >> (Math.min(3, Math.abs(parseInt(`${desc5}`))))}`;
      for (let t = 0; t < 3; t++) {
         eventS = !eventS;
      }
      for (let p = 0; p < 3; p++) {
         libfolly7 = `${((mapbufferg ? 3 : 1) / (Math.max(parseInt(`${desc5}`), 7)))}`;
      }
         mapbufferg = !mapbufferg;
      for (let m = 0; m < 2; m++) {
          let otherR = String.fromCharCode(119,111,114,107,108,111,97,100,95,55,95,51,0);
          let iconqq2 = 2.0;
          let sellmathbackgroundj = 2;
          let logouserW = false;
          let libapminsightb5 = 1.0;
         q_titlez += `${rncoreS.length}`;
         otherR = "2";
         iconqq2 -= parseInt(`${libapminsightb5}`);
         sellmathbackgroundj /= Math.max(sellmathbackgroundj >> (Math.min(1, Math.abs(3))), 5);
         logouserW = (parseInt(`${iconqq2}`) / (Math.max(otherR.length, 3))) <= 78;
         libapminsightb5 /= Math.max(4, (parseFloat(`${(logouserW ? 2 : 3) ^ 1}`)));
      }
      let libimagepipeline2 = String.fromCharCode(101,114,121,104,0) == q_titlez;
      do {
         q_titlez = "3";
         if (libimagepipeline2) {
            break;
         }
      } while ((2 > q_titlez.length || mapbufferg) && libimagepipeline2);
         rncoreS = [((mapbufferg ? 4 : 1))];
         rncoreS.push(2);
      tooltips7 += `${2 + button0.size}`;
   }
       let recommendationM = String.fromCharCode(121,95,53,53,95,119,97,114,110,105,110,103,0);
       let libreact4 = 5;
       let settingF = String.fromCharCode(105,95,55,95,101,102,102,101,99,116,105,118,101,0);
      for (let b = 0; b < 1; b++) {
         settingF = `${libreact4}`;
      }
      if (3 < recommendationM.length) {
          let subsf = String.fromCharCode(105,95,51,51,95,102,105,110,0);
          let paginationx = String.fromCharCode(115,119,105,122,122,108,101,100,95,112,95,55,0);
          let baseE = 0.0;
          let viewerR = String.fromCharCode(110,101,103,97,116,101,95,103,95,50,56,0);
          let filedZ = true;
         recommendationM += `${parseInt(`${baseE}`)}`;
         subsf = `${(String.fromCharCode(48,0) == paginationx ? paginationx.length : viewerR.length)}`;
         baseE *= paginationx.length;
         viewerR += `${viewerR.length >> (Math.min(paginationx.length, 1))}`;
         filedZ = paginationx.length <= viewerR.length;
      }
       let phoneshareK: Array<any> = [String.fromCharCode(97,95,53,51,95,99,119,110,100,0), String.fromCharCode(106,95,56,57,95,99,97,118,115,105,100,99,116,0), String.fromCharCode(100,97,116,97,98,97,115,101,115,95,115,95,55,57,0)];
          let dycreatorD: Map<any, any> = new Map([[String.fromCharCode(99,108,97,105,109,95,115,95,50,49,0),269], [String.fromCharCode(111,110,101,115,95,111,95,53,53,0),584], [String.fromCharCode(102,105,108,116,101,114,95,120,95,54,51,0),667]]);
          let iconuseri = 3.0;
          let macauq: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,115,105,102,105,101,114,95,104,95,49,48,48,0),String.fromCharCode(99,104,97,110,103,101,95,103,95,49,55,0)], [String.fromCharCode(101,95,51,51,95,111,110,110,101,99,116,105,111,110,0),String.fromCharCode(112,108,97,99,101,104,111,108,100,101,114,95,111,95,54,54,0)], [String.fromCharCode(99,111,110,116,101,120,116,99,111,110,102,105,103,95,109,95,53,54,0),String.fromCharCode(111,95,51,57,95,99,111,109,112,117,116,101,0)]]);
         recommendationM = "2";
         dycreatorD.set(`${iconuseri}`, dycreatorD.size / 2);
         iconuseri /= Math.max(4, parseFloat(`${macauq.size}`));
         macauq = new Map([[`${dycreatorD.size}`, 3]]);
          let gmailA = String.fromCharCode(114,100,106,112,103,99,111,109,95,118,95,55,53,0);
          let debugV = String.fromCharCode(97,95,55,54,95,105,110,102,111,0);
          let mappings = String.fromCharCode(107,95,54,49,95,102,105,120,116,117,114,101,0);
         phoneshareK.push(2 >> (Math.min(1, gmailA.length)));
         gmailA += `${debugV.length}`;
         debugV = `${mappings.length | debugV.length}`;
         mappings += `${debugV.length}`;
         recommendationM = "2";
      if (recommendationM.length <= phoneshareK.length) {
         phoneshareK.push(settingF.length);
      }
          let favorites = 1.0;
          let redirectO = 1;
          let gpayZ = String.fromCharCode(101,99,108,95,108,95,50,57,0);
         libreact4 <<= Math.min(Math.abs(1 | phoneshareK.length), 3);
         favorites -= parseFloat(`${gpayZ.length}`);
         redirectO |= redirectO;
         gpayZ += `${parseInt(`${favorites}`) % (Math.max(9, redirectO))}`;
       let dicea = String.fromCharCode(109,95,53,53,95,119,102,100,105,102,0);
      gestureS %= Math.max(4, (String.fromCharCode(67,0) == recommendationM ? recommendationM.length : parseInt(`${sliderp}`)));
      tooltips7 = "2";
   while ((sliderp * savex) == 2.96) {
      sliderp += parseFloat(`${tooltips7.length / (Math.max(10, parseInt(`${modeF}`)))}`);
      break;
   }
       let smallbrightnessr = 2;
      for (let j = 0; j < 3; j++) {
          let kuaishouu = String.fromCharCode(109,97,103,110,105,116,117,100,101,95,119,95,57,53,0);
          let mailY = 1;
          let episodes8 = 2;
          let iconuserK = String.fromCharCode(105,95,49,48,95,115,99,105,105,0);
          let reactnavigation1 = String.fromCharCode(102,95,54,49,95,100,105,115,112,111,115,97,108,0);
         smallbrightnessr /= Math.max(iconuserK.length | reactnavigation1.length, 5);
         kuaishouu += "2 | episodes8";
         mailY /= Math.max(3, 2 + episodes8);
         iconuserK = `${kuaishouu.length | mailY}`;
         reactnavigation1 += `${kuaishouu.length}`;
      }
       let configureU = 3.0;
         smallbrightnessr <<= Math.min(Math.abs(parseInt(`${configureU}`) - smallbrightnessr), 4);
      gestureS &= completep.length ^ 1;

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
