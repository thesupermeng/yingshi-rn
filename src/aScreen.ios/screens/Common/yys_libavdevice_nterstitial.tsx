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
import yys_giftbutton_footballtrophy from "../../../../Umeng/yys_giftbutton_footballtrophy";
import { yysInactive } from "@api";

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

  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(
    ({ searchHistoryReducer }: yysIconclosewhiteBaiduads) => searchHistoryReducer
  );
  const [isFetching, setisFetching] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { colors, textVariants, spacing, icons } = useTheme();

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
       let resultg = 3;
    let clearX = 5.0;
    let predictionbannerA = String.fromCharCode(101,100,105,116,111,114,95,98,95,53,49,0);
    let scoren = true;
    let b_images = String.fromCharCode(112,111,119,116,97,98,108,101,95,117,95,50,0);
    let plusp = String.fromCharCode(114,95,54,56,95,100,101,115,114,111,121,0);
    let login_: Map<any, any> = new Map([[String.fromCharCode(116,105,99,107,101,116,95,103,95,55,50,0),String.fromCharCode(108,95,56,57,95,112,114,111,108,111,110,103,0)], [String.fromCharCode(108,111,103,102,110,95,116,95,57,51,0),String.fromCharCode(102,101,110,99,95,122,95,56,51,0)], [String.fromCharCode(111,109,112,108,105,99,97,116,105,111,110,95,114,95,53,56,0),String.fromCharCode(107,95,50,54,95,114,101,116,117,114,110,115,0)]]);
    let profileactiveM = String.fromCharCode(115,112,101,99,105,102,105,101,100,95,116,95,54,48,0);
    let header9 = 0.0;
    let redcirclebgB = String.fromCharCode(109,105,99,114,111,115,111,102,116,95,106,95,52,56,0);
    let detailsi: Map<any, any> = new Map([[String.fromCharCode(102,112,115,95,117,95,54,0),String.fromCharCode(101,110,100,120,95,57,95,49,56,0)], [String.fromCharCode(98,95,50,57,95,114,101,108,97,117,110,99,104,0),String.fromCharCode(99,95,50,56,95,120,102,101,114,0)]]);
    let turn_ = false;
   let playlistJ = clearX <= 7716382.0;
   do {
      clearX += parseFloat(`${plusp.length / (Math.max(3, 8))}`);
      if (playlistJ) {
         break;
      }
   } while (playlistJ && (4.14 <= (parseFloat(`${predictionbannerA.length}`) + clearX) || 3 <= (predictionbannerA.length + parseInt(`${clearX}`))));
      clearX *= (parseFloat(`${String.fromCharCode(122,0) == profileactiveM ? profileactiveM.length : plusp.length}`));

    let searchKeyword = placeholderSearch;

   for (let j = 0; j < 1; j++) {
      predictionbannerA = `${login_.size}`;
   }
      b_images += `${parseInt(`${clearX}`)}`;

    if (search != "") {

   if (profileactiveM.length == login_.size) {
       let modelx: Map<any, any> = new Map([[String.fromCharCode(121,95,56,54,95,105,110,115,116,97,108,108,0),599], [String.fromCharCode(114,101,108,117,95,100,95,55,55,0),330]]);
       let filledW: Map<any, any> = new Map([[String.fromCharCode(109,95,56,49,95,100,105,99,116,0),false ], [String.fromCharCode(102,95,55,56,95,99,111,108,115,112,97,110,0),true ], [String.fromCharCode(105,95,57,53,95,114,101,97,100,108,105,110,101,0),false ]]);
       let whatsappc = 0.0;
       let whistleorange4 = String.fromCharCode(114,101,116,114,121,95,105,95,57,51,0);
       let anythinki = String.fromCharCode(116,106,101,120,97,109,112,108,101,116,101,115,116,95,116,95,52,57,0);
          let backwardX = false;
         modelx.set(`${backwardX}`, ((backwardX ? 2 : 4) & filledW.size));
      while (filledW.size == modelx.size) {
         filledW.set(`${filledW.size}`, modelx.size | 3);
         break;
      }
         whistleorange4 = `${2 + filledW.size}`;
       let awayplayer_ = 2.0;
       let homeactive_ = 5.0;
      for (let n = 0; n < 2; n++) {
         modelx.set(whistleorange4, modelx.size);
      }
      if ((2 & filledW.size) > 3 || (parseFloat(`${filledW.size}`) - homeactive_) > 5.90) {
         homeactive_ += parseFloat(`${parseInt(`${whatsappc}`) ^ 1}`);
      }
      if ((whatsappc + 2.85) == 1.4) {
          let animationst: Map<any, any> = new Map([[String.fromCharCode(116,104,101,110,97,98,108,101,95,114,95,56,54,0),847], [String.fromCharCode(121,98,121,114,95,116,95,55,50,0),225], [String.fromCharCode(117,112,100,97,116,101,115,95,55,95,53,54,0),829]]);
          let libreanimated9 = 1.0;
          let pagination0 = String.fromCharCode(115,104,97,114,100,95,103,95,55,48,0);
         whatsappc -= 2 + modelx.size;
         animationst = new Map([[`${animationst.size}`, parseInt(`${libreanimated9}`)]]);
         libreanimated9 *= (parseFloat(`${pagination0 == String.fromCharCode(103,0) ? parseInt(`${libreanimated9}`) : pagination0.length}`));
      }
       let anythinky: Array<any> = [589, 139];
       let checkbox_: Array<any> = [768, 831];
          let icondownimgT = 2;
          let colorsL: Map<any, any> = new Map([[String.fromCharCode(108,95,55,95,100,105,115,112,111,115,105,116,105,111,110,0),864], [String.fromCharCode(115,95,55,49,95,108,111,97,100,0),948], [String.fromCharCode(110,95,48,0),678]]);
         whistleorange4 = `${parseInt(`${homeactive_}`) & anythinky.length}`;
         icondownimgT /= Math.max(2 + icondownimgT, 5);
         colorsL.set(`${icondownimgT}`, colorsL.size);
      if ((modelx.size - 4) > 2 && (4 - modelx.size) > 5) {
         modelx.set(`${whatsappc}`, filledW.size);
      }
      for (let i = 0; i < 1; i++) {
         whistleorange4 += `${parseInt(`${homeactive_}`)}`;
      }
         anythinky = [checkbox_.length % (Math.max(2, 4))];
         whatsappc += parseInt(`${homeactive_}`);
          let policy0 = String.fromCharCode(109,95,51,55,95,101,116,104,101,114,115,99,97,110,0);
          let iconshareP: Array<any> = [898, 55, 452];
          let editU = String.fromCharCode(104,95,50,57,95,97,118,115,116,114,105,110,103,0);
         checkbox_.push(checkbox_.length % 1);
         policy0 += `${editU.length}`;
         iconshareP = [iconshareP.length ^ editU.length];
      if ((awayplayer_ / 3.65) > 4.22 && (3.65 / (Math.max(3, awayplayer_))) > 2.23) {
         homeactive_ *= parseFloat(`${anythinky.length << (Math.min(Math.abs(2), 2))}`);
      }
      login_ = new Map([[`${clearX}`, (parseInt(`${clearX}`) & (scoren ? 5 : 3))]]);
   }
   for (let y = 0; y < 3; y++) {
      clearX /= Math.max(parseFloat(`${b_images.length << (Math.min(5, Math.abs(login_.size)))}`), 1);
   }
      searchKeyword = search;
    }

    

       let corneri = 4.0;
      if ((corneri * corneri) <= 3.26) {
          let dice6: Array<any> = [String.fromCharCode(98,117,114,115,116,95,51,95,54,50,0), String.fromCharCode(108,95,49,49,95,112,114,101,104,97,115,104,0)];
          let ninit_r4b = String.fromCharCode(118,98,108,101,95,98,95,56,48,0);
          let bangt = false;
         corneri /= Math.max(2, (parseInt(`${corneri}`) + (bangt ? 1 : 1)));
         dice6 = [dice6.length % (Math.max(8, ninit_r4b.length))];
         ninit_r4b = `${ninit_r4b.length << (Math.min(3, dice6.length))}`;
         bangt = String.fromCharCode(103,0) == ninit_r4b;
      }
      while ((corneri * corneri) > 1.17 || 1.17 > (corneri * corneri)) {
         corneri -= parseInt(`${corneri}`) / (Math.max(parseInt(`${corneri}`), 7));
         break;
      }
          let graphF = 0.0;
         corneri *= parseInt(`${graphF}`) & 3;
      resultg *= 2 << (Math.min(2, b_images.length));
   if (profileactiveM == String.fromCharCode(86,0) && b_images == String.fromCharCode(48,0)) {
       let orangeclocku = true;
      while (!orangeclocku) {
          let materialo: Map<any, any> = new Map([[String.fromCharCode(98,108,105,116,95,53,95,57,0),391], [String.fromCharCode(118,95,57,55,95,114,101,112,111,114,116,0),750]]);
          let e_playerI = 1.0;
          let roundq = String.fromCharCode(101,110,103,108,105,115,104,95,105,95,54,51,0);
         orangeclocku = roundq.length > 27 && orangeclocku;
         materialo.set(`${e_playerI}`, 3);
         e_playerI *= parseFloat(`${materialo.size}`);
         roundq += `${parseInt(`${e_playerI}`)}`;
         break;
      }
      let mathb = orangeclocku ? !orangeclocku : orangeclocku;
      do {
         orangeclocku = (!orangeclocku ? !orangeclocku : !orangeclocku);
         if (mathb) {
            break;
         }
      } while ((orangeclocku) && mathb);
         orangeclocku = (!orangeclocku ? orangeclocku : orangeclocku);
      profileactiveM += `${((orangeclocku ? 2 : 4))}`;
   }
    

   if (4 == (3 % (Math.max(10, login_.size)))) {
      login_ = new Map([[`${clearX}`, parseInt(`${clearX}`)]]);
   }
       let nalyticsU = 4.0;
       let iconnewchatu = 0.0;
      while ((nalyticsU - iconnewchatu) > 3.16 && 4.90 > (nalyticsU - 3.16)) {
          let banner4 = true;
          let debugb: Map<any, any> = new Map([[String.fromCharCode(100,109,117,108,95,118,95,54,0),660], [String.fromCharCode(116,95,56,55,95,108,105,110,101,98,114,101,97,107,0),259], [String.fromCharCode(102,95,54,52,95,117,116,117,114,101,0),706]]);
          let empty5 = String.fromCharCode(108,97,98,101,108,101,100,95,52,95,56,51,0);
          let black9 = 5.0;
          let defaultroombgf = String.fromCharCode(102,95,50,54,95,100,116,100,102,0);
         iconnewchatu /= Math.max(5, parseFloat(`${empty5.length}`));
         banner4 = debugb.size >= 16;
         debugb = new Map([[defaultroombgf, 1 >> (Math.min(3, Math.abs(parseInt(`${black9}`))))]]);
         empty5 += `${debugb.size >> (Math.min(defaultroombgf.length, 3))}`;
         black9 += debugb.size / (Math.max(3, 6));
         break;
      }
          let mbnativeT = String.fromCharCode(98,105,111,109,101,116,114,105,99,95,102,95,57,51,0);
         nalyticsU *= parseFloat(`${parseInt(`${iconnewchatu}`) / (Math.max(mbnativeT.length, 4))}`);
         nalyticsU *= parseFloat(`${parseInt(`${nalyticsU}`) & parseInt(`${iconnewchatu}`)}`);
         nalyticsU /= Math.max(parseFloat(`${3}`), 5);
          let castg = String.fromCharCode(112,97,99,107,101,116,111,117,116,95,53,95,54,53,0);
          let iconusert = String.fromCharCode(97,117,116,111,102,111,99,117,115,105,110,103,0);
         nalyticsU *= parseFloat(`${parseInt(`${nalyticsU}`) % (Math.max(iconusert.length, 2))}`);
         castg += `${castg.length / (Math.max(castg.length, 1))}`;
         iconusert = `${3 + castg.length}`;
         iconnewchatu *= parseFloat(`${parseInt(`${nalyticsU}`) ^ parseInt(`${iconnewchatu}`)}`);
      plusp = "2";
    

   let iconpipshrinks = predictionbannerA == String.fromCharCode(97,115,97,102,98,0);
   do {
      predictionbannerA = "1";
      if (iconpipshrinks) {
         break;
      }
   } while ((profileactiveM == predictionbannerA) && iconpipshrinks);
   while (login_.size == parseInt(`${header9}`)) {
      header9 += plusp.length % 1;
      break;
   }
    

   for (let e = 0; e < 3; e++) {
      b_images = "3";
   }
   let diceD = 8460452.0 >= clearX;
   do {
      clearX /= Math.max(parseFloat(`${3}`), 5);
      if (diceD) {
         break;
      }
   } while ((header9 > 2.96) && diceD);

    

       let forwardZ = String.fromCharCode(100,95,57,51,95,109,111,110,116,103,111,109,101,114,121,0);
       let rewindZ: Map<any, any> = new Map([[String.fromCharCode(114,95,53,49,95,114,101,102,105,110,101,114,0),849], [String.fromCharCode(101,95,55,52,95,115,116,97,114,116,115,0),589]]);
       let sheet9 = String.fromCharCode(97,114,114,97,121,115,105,122,101,95,102,95,49,49,0);
      for (let d = 0; d < 3; d++) {
         sheet9 = `${(forwardZ == String.fromCharCode(72,0) ? forwardZ.length : sheet9.length)}`;
      }
          let actionsm = String.fromCharCode(104,95,53,48,95,101,120,116,101,110,116,0);
          let yellowanimationliveC: Map<any, any> = new Map([[String.fromCharCode(102,105,110,105,115,101,100,95,113,95,49,55,0),950], [String.fromCharCode(116,95,53,95,118,101,99,116,0),565]]);
         sheet9 = "1";
         actionsm = `${actionsm.length - yellowanimationliveC.size}`;
         yellowanimationliveC.set(`${actionsm}`, actionsm.length);
         sheet9 += `${(forwardZ == String.fromCharCode(110,0) ? forwardZ.length : sheet9.length)}`;
         sheet9 = `${forwardZ.length >> (Math.min(2, Math.abs(rewindZ.size)))}`;
         forwardZ += `${rewindZ.size - 1}`;
      for (let p = 0; p < 2; p++) {
          let refreshborderlessO = 5.0;
          let loadingspinner9 = true;
         rewindZ.set(`${sheet9}`, sheet9.length % 3);
         refreshborderlessO += parseFloat(`${2 + parseInt(`${refreshborderlessO}`)}`);
         loadingspinner9 = !loadingspinner9 && 83.13 <= refreshborderlessO;
      }
          let unewsx = String.fromCharCode(98,108,111,99,107,104,97,115,104,95,120,95,49,52,0);
          let collectionD = String.fromCharCode(115,105,103,110,97,108,115,95,106,95,49,48,48,0);
         forwardZ += "3";
         unewsx += `${(unewsx == String.fromCharCode(122,0) ? collectionD.length : unewsx.length)}`;
         collectionD += `${(unewsx == String.fromCharCode(77,0) ? unewsx.length : collectionD.length)}`;
          let videocommonO = 3.0;
          let dependencyJ = 5.0;
         rewindZ = new Map([[forwardZ, (forwardZ == String.fromCharCode(68,0) ? parseInt(`${videocommonO}`) : forwardZ.length)]]);
         videocommonO -= parseFloat(`${1}`);
         dependencyJ -= parseFloat(`${parseInt(`${dependencyJ}`) & 3}`);
          let aboutc = true;
          let networkS = 2.0;
         rewindZ.set(`${networkS}`, 1);
         aboutc = (!aboutc ? aboutc : !aboutc);
         networkS += 3;
      predictionbannerA += `${forwardZ.length & resultg}`;
      scoren = 47 > login_.size;
    

       let questo = String.fromCharCode(98,117,99,107,101,116,95,103,95,53,51,0);
         questo += "1";
      while (questo.length == questo.length) {
          let megaphonep = true;
          let basel = String.fromCharCode(113,95,54,55,95,102,111,114,116,104,0);
          let frame_il = String.fromCharCode(113,95,52,53,95,115,117,98,114,101,115,117,108,116,115,0);
         questo += "3";
         megaphonep = (basel.length + frame_il.length) == 34;
         basel = `${basel.length}`;
         frame_il += `${frame_il.length * 1}`;
         break;
      }
      let profileactiveX = String.fromCharCode(49,104,108,115,0) == questo;
      do {
         questo += `${(questo == String.fromCharCode(86,0) ? questo.length : questo.length)}`;
         if (profileactiveX) {
            break;
         }
      } while (profileactiveX && (questo != String.fromCharCode(68,0)));
      clearX -= (parseFloat(`${(scoren ? 2 : 4) % (Math.max(1, 8))}`));
   if (scoren || 1 < profileactiveM.length) {
      scoren = login_.size <= profileactiveM.length;
   }
    

      plusp = `${(plusp == String.fromCharCode(76,0) ? parseInt(`${clearX}`) : plusp.length)}`;
      header9 /= Math.max(3 & profileactiveM.length, 5);
    

   while (clearX <= 3.86) {
      resultg %= Math.max(4, (String.fromCharCode(118,0) == profileactiveM ? resultg : profileactiveM.length));
      break;
   }
   for (let z = 0; z < 3; z++) {
      header9 -= (1 ^ (scoren ? 5 : 1));
   }
    

      header9 *= 1 | b_images.length;
       let greenarrowupF: Map<any, any> = new Map([[String.fromCharCode(110,95,52,51,95,115,105,110,113,102,0),662], [String.fromCharCode(118,97,108,117,101,115,95,119,95,54,48,0),748], [String.fromCharCode(97,95,54,48,95,104,101,118,109,97,115,107,0),473]]);
       let sportn: Array<any> = [String.fromCharCode(105,110,115,116,97,108,108,105,110,103,95,98,95,53,57,0), String.fromCharCode(119,95,55,48,95,100,111,120,121,103,101,110,0)];
      let nalyticsT = sportn.length >= 6498597;
      do {
         sportn = [1];
         if (nalyticsT) {
            break;
         }
      } while (((4 ^ sportn.length) > 4) && nalyticsT);
          let arrowN = 0.0;
          let redcirclebgi = String.fromCharCode(112,111,115,116,105,110,105,116,95,110,95,52,51,0);
         sportn.push(greenarrowupF.size % 3);
         arrowN /= Math.max(3, 2 >> (Math.min(1, Math.abs(parseInt(`${arrowN}`)))));
         redcirclebgi = `${redcirclebgi.length}`;
      while (3 <= (4 + sportn.length)) {
          let iconbackwhiteI: Array<any> = [664, 651, 680];
          let animationsV = 5.0;
          let iconarrowrightblackg: Map<any, any> = new Map([[String.fromCharCode(105,110,118,111,107,101,95,121,95,51,52,0),5], [String.fromCharCode(121,95,50,50,95,98,98,111,120,0),308], [String.fromCharCode(108,105,98,106,112,101,103,116,117,114,98,111,95,111,95,53,57,0),593]]);
         greenarrowupF.set(`${animationsV}`, parseInt(`${animationsV}`));
         iconbackwhiteI.push(iconarrowrightblackg.size);
         iconarrowrightblackg.set(`${iconbackwhiteI.length}`, iconarrowrightblackg.size >> (Math.min(Math.abs(1), 3)));
         break;
      }
          let eyecloser = 5;
          let downloadeda = 0;
         greenarrowupF.set(`${downloadeda}`, downloadeda + greenarrowupF.size);
         eyecloser %= Math.max(4, 3 & eyecloser);
      let tickD = 7262555 <= greenarrowupF.size;
      do {
          let whiteR: Map<any, any> = new Map([[String.fromCharCode(103,95,53,57,95,118,101,114,116,0),275], [String.fromCharCode(119,95,55,55,95,104,117,110,103,0),936]]);
          let gradlew_ = String.fromCharCode(122,111,111,109,101,100,95,108,95,54,50,0);
          let libyogal: Map<any, any> = new Map([[String.fromCharCode(119,95,57,48,95,97,116,116,97,99,104,101,100,0),String.fromCharCode(114,101,116,117,114,110,95,114,95,52,53,0)], [String.fromCharCode(100,95,52,54,95,108,97,122,105,108,121,0),String.fromCharCode(122,95,49,55,95,111,110,116,114,111,108,115,0)], [String.fromCharCode(115,117,98,116,121,112,101,115,95,97,95,53,49,0),String.fromCharCode(108,111,103,102,110,95,100,95,49,0)]]);
          let penaltyshooty = String.fromCharCode(98,97,122,101,108,95,99,95,56,56,0);
         greenarrowupF.set(`${gradlew_}`, 1);
         whiteR.set(penaltyshooty, penaltyshooty.length);
         gradlew_ += `${libyogal.size % (Math.max(3, 8))}`;
         libyogal.set(`${penaltyshooty}`, penaltyshooty.length);
         if (tickD) {
            break;
         }
      } while ((3 > (greenarrowupF.size ^ 5) || (5 ^ sportn.length) > 2) && tickD);
         sportn = [greenarrowupF.size];
      predictionbannerA += "2";
    

   let libjsinspectorY = redcirclebgB == String.fromCharCode(111,53,103,107,0);
   do {
       let policyG = false;
         policyG = (!policyG ? !policyG : !policyG);
          let historyg = true;
         policyG = (!policyG ? historyg : policyG);
       let middlesounds = 2.0;
       let basketballicond = 0.0;
      redcirclebgB += "3";
      if (libjsinspectorY) {
         break;
      }
   } while (libjsinspectorY && ((redcirclebgB.length % (Math.max(1, 1))) <= 2 || (redcirclebgB.length * header9) <= 2.30));
   let iconbellactivew = scoren ? !scoren : scoren;
   do {
       let incidentX = String.fromCharCode(119,95,57,52,95,116,104,114,111,116,116,108,105,110,103,0);
       let overlayA = 4;
       let shootyesgoalL = 2.0;
          let cornershootC = 5;
         incidentX += `${cornershootC}`;
         overlayA |= (incidentX == String.fromCharCode(67,0) ? incidentX.length : overlayA);
          let statst = String.fromCharCode(101,95,54,52,95,116,106,98,101,110,99,104,116,101,115,116,0);
         overlayA -= incidentX.length + 1;
         statst = `${statst.length * 1}`;
      while ((overlayA / (Math.max(1, incidentX.length))) < 2 || 2 < (overlayA / (Math.max(incidentX.length, 7)))) {
         overlayA >>= Math.min(2, Math.abs(incidentX.length % (Math.max(1, parseInt(`${shootyesgoalL}`)))));
         break;
      }
      while (2 >= (overlayA * 3) && (3 & overlayA) >= 2) {
          let fullscreenmaxD = 5.0;
         shootyesgoalL /= Math.max(5, overlayA / 2);
         fullscreenmaxD -= parseInt(`${fullscreenmaxD}`);
         break;
      }
      if ((shootyesgoalL * 4.24) <= 3.34) {
          let nendE = String.fromCharCode(122,95,56,55,95,98,117,103,115,0);
          let homeactiveo: Map<any, any> = new Map([[String.fromCharCode(104,95,50,49,95,97,112,112,97,114,101,110,116,0),true ], [String.fromCharCode(110,115,117,112,112,111,114,116,101,100,95,108,95,57,49,0),false ]]);
          let prediction4: Array<any> = [450, 449, 255];
         incidentX += "2";
         nendE += `${prediction4.length}`;
         homeactiveo.set(nendE, 3 | homeactiveo.size);
         prediction4 = [(nendE == String.fromCharCode(83,0) ? prediction4.length : nendE.length)];
      }
         overlayA *= 2;
      if (4 == (overlayA >> (Math.min(Math.abs(4), 1)))) {
         shootyesgoalL -= overlayA;
      }
      for (let f = 0; f < 3; f++) {
          let borderlessy = true;
         incidentX = `${2 + overlayA}`;
         borderlessy = borderlessy && !borderlessy;
      }
      scoren = login_.size <= 99 && 99 <= detailsi.size;
      if (iconbellactivew) {
         break;
      }
   } while ((scoren) && iconbellactivew);
    

   if (plusp == b_images) {
      b_images += `${3 ^ parseInt(`${header9}`)}`;
   }
   for (let t = 0; t < 2; t++) {
       let switch_6l: Array<any> = [746, 583, 399];
       let next1 = 0.0;
       let minivodu = String.fromCharCode(116,104,101,105,114,95,98,95,51,0);
       let rewinda = String.fromCharCode(120,117,116,105,108,95,121,95,52,48,0);
       let icondefaultthumbnailT = String.fromCharCode(99,111,118,101,114,97,103,101,95,117,95,55,50,0);
      if (4.60 > (next1 * switch_6l.length) && 4.60 > (next1 * switch_6l.length)) {
         switch_6l.push((String.fromCharCode(104,0) == rewinda ? rewinda.length : parseInt(`${next1}`)));
      }
      let bannerq = switch_6l.length >= 7140833;
      do {
         switch_6l = [switch_6l.length];
         if (bannerq) {
            break;
         }
      } while (bannerq && (switch_6l.length <= rewinda.length));
      let defaultroombg0 = 7044329.0 >= next1;
      do {
         next1 *= 2;
         if (defaultroombg0) {
            break;
         }
      } while (((parseInt(`${next1}`) / (Math.max(minivodu.length, 1))) == 5) && defaultroombg0);
          let fastC = 0.0;
          let context0 = 0.0;
         minivodu += `${parseInt(`${fastC}`)}`;
         fastC *= parseInt(`${context0}`) / (Math.max(parseInt(`${context0}`), 8));
         icondefaultthumbnailT = `${icondefaultthumbnailT.length}`;
       let baiduadsF = 0.0;
       let huaweim = 0.0;
         baiduadsF *= parseInt(`${huaweim}`);
          let sinaV = String.fromCharCode(98,97,99,107,112,116,114,95,112,95,57,51,0);
          let configB = String.fromCharCode(112,108,111,116,116,101,114,95,112,95,49,51,0);
          let s_image5: Map<any, any> = new Map([[String.fromCharCode(115,117,98,99,101,108,95,115,95,56,55,0),false ], [String.fromCharCode(97,95,49,95,115,111,110,105,99,0),true ], [String.fromCharCode(102,105,110,103,101,114,95,119,95,50,54,0),true ]]);
         rewinda = `${parseInt(`${huaweim}`) | configB.length}`;
         sinaV = "2";
         configB = `${s_image5.size / (Math.max(8, sinaV.length))}`;
         s_image5.set(`${sinaV}`, 1 * sinaV.length);
          let china8 = String.fromCharCode(99,97,99,104,101,100,107,101,121,115,95,103,95,51,48,0);
         next1 += icondefaultthumbnailT.length / 3;
         china8 = `${china8.length}`;
       let pauseP = 4.0;
       let iconarrowrightwhitec = 5.0;
       let reducerP = String.fromCharCode(101,95,52,57,95,98,101,105,103,110,101,116,0);
      let shootnogoalM = 8779129.0 <= baiduadsF;
      do {
         baiduadsF *= (reducerP == String.fromCharCode(109,0) ? reducerP.length : parseInt(`${next1}`));
         if (shootnogoalM) {
            break;
         }
      } while (shootnogoalM && (5 <= (2 - reducerP.length) && (parseInt(`${baiduadsF}`) / (Math.max(reducerP.length, 1))) <= 2));
      for (let i = 0; i < 1; i++) {
          let core4: Map<any, any> = new Map([[String.fromCharCode(100,95,49,56,95,112,114,111,109,112,116,101,100,0),335], [String.fromCharCode(105,102,111,114,109,97,116,95,55,95,55,53,0),337]]);
          let libyogah = String.fromCharCode(120,95,57,51,95,112,97,114,109,115,0);
          let sheetI: Map<any, any> = new Map([[String.fromCharCode(109,95,51,52,95,101,120,108,117,100,101,100,0),String.fromCharCode(113,95,50,56,95,100,97,116,97,100,105,114,0)], [String.fromCharCode(112,114,111,112,111,115,101,95,110,95,54,48,0),String.fromCharCode(99,97,116,101,103,111,114,105,122,101,95,102,95,57,55,0)]]);
         rewinda += `${switch_6l.length << (Math.min(3, Math.abs(core4.size)))}`;
         core4.set(libyogah, 3);
         libyogah = `${libyogah.length & sheetI.size}`;
         sheetI = new Map([[`${sheetI.size}`, sheetI.size ^ libyogah.length]]);
      }
         next1 -= switch_6l.length;
       let yellowvideoliveX = true;
       let rendery = false;
      b_images = `${(String.fromCharCode(97,0) == icondefaultthumbnailT ? icondefaultthumbnailT.length : predictionbannerA.length)}`;
   }
    

       let template_ps = 1.0;
       let smallorangemanK = String.fromCharCode(106,117,109,112,95,98,95,50,49,0);
         template_ps -= (parseFloat(`${smallorangemanK == String.fromCharCode(70,0) ? smallorangemanK.length : parseInt(`${template_ps}`)}`));
         smallorangemanK += `${smallorangemanK.length}`;
       let applicationB: Map<any, any> = new Map([[String.fromCharCode(114,105,110,100,101,120,95,119,95,54,51,0),false ], [String.fromCharCode(104,97,114,109,111,110,105,99,95,106,95,49,50,0),false ], [String.fromCharCode(106,95,51,57,95,111,117,116,112,117,116,115,0),true ]]);
       let injuryx: Map<any, any> = new Map([[String.fromCharCode(99,114,117,110,95,110,95,50,49,0),889], [String.fromCharCode(99,111,110,115,101,99,117,116,105,118,101,95,105,95,51,57,0),571], [String.fromCharCode(102,95,52,52,0),749]]);
          let assetsY: Array<any> = [989, 255, 616];
         applicationB.set(`${assetsY.length}`, 2);
         template_ps /= Math.max(parseFloat(`${3 - injuryx.size}`), 2);
       let iconadslinkj = 5;
      header9 += profileactiveM.length;
   while (1.92 > (1.24 * header9)) {
      header9 /= Math.max(((scoren ? 5 : 5) << (Math.min(Math.abs(parseInt(`${header9}`)), 5))), 4);
      break;
   }
    

      detailsi.set(`${header9}`, login_.size ^ 2);
      clearX *= parseFloat(`${detailsi.size ^ 3}`);
    

   for (let a = 0; a < 3; a++) {
      scoren = clearX == 12.86;
   }
       let downarrowk: Array<any> = [168, 356, 944];
       let videoV = 4.0;
       let zhengpianM = String.fromCharCode(101,115,116,105,109,97,116,105,110,103,95,121,95,53,55,0);
      for (let x = 0; x < 2; x++) {
         videoV /= Math.max(parseFloat(`${3 + parseInt(`${videoV}`)}`), 1);
      }
      for (let i = 0; i < 3; i++) {
         videoV /= Math.max(1, parseFloat(`${parseInt(`${videoV}`) - zhengpianM.length}`));
      }
      for (let a = 0; a < 3; a++) {
         zhengpianM = "3";
      }
      let templateprocessor0 = zhengpianM == String.fromCharCode(115,97,116,49,56,49,113,117,103,111,0);
      do {
          let tick3 = 3;
          let imagewatchlive6 = String.fromCharCode(106,95,53,49,95,115,104,97,112,101,115,0);
         zhengpianM += "2 + tick3";
         tick3 <<= Math.min(4, Math.abs(2));
         imagewatchlive6 += `${imagewatchlive6.length}`;
         if (templateprocessor0) {
            break;
         }
      } while (templateprocessor0 && ((5.58 + videoV) < 5.46));
      while (!downarrowk.includes(videoV)) {
          let sourcex = true;
         videoV /= Math.max(parseFloat(`${2}`), 5);
         break;
      }
      for (let i = 0; i < 1; i++) {
         zhengpianM = "2";
      }
       let borderlessX = 3.0;
       let logoutu = 4.0;
         logoutu += parseFloat(`${zhengpianM.length & 1}`);
       let linkG = String.fromCharCode(113,95,53,48,95,99,104,97,110,110,101,108,115,0);
       let leagueU = String.fromCharCode(109,101,114,103,101,100,95,119,95,53,54,0);
      header9 *= resultg % (Math.max(8, redcirclebgB.length));

    fetchData(searchKeyword, true);
    dispatch(addSearchHistory(searchKeyword));
    setShowResults(!showResults);
  };

  const clearHistory = useCallback(() => {
       let friendsf = 2;
    let modec: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,101,110,116,115,95,57,95,54,54,0),String.fromCharCode(122,95,51,54,95,119,105,110,100,105,110,103,0)], [String.fromCharCode(110,95,53,55,0),String.fromCharCode(115,111,102,116,95,48,95,57,51,0)], [String.fromCharCode(120,95,51,56,95,102,114,101,101,100,111,109,0),String.fromCharCode(110,95,54,51,95,99,108,105,112,112,105,110,103,110,111,100,101,0)]]);
    let gifgoalm = true;
    let iconbella = 0.0;
    let predictionbuttong = String.fromCharCode(111,95,55,48,95,103,114,97,121,115,99,97,108,101,0);
    let iconsaveimageW = 5.0;
    let sharewhiteM = 5;
    let historyg = String.fromCharCode(107,95,53,52,0);
    let predictionloss8 = String.fromCharCode(113,95,53,51,95,112,114,111,116,101,99,116,101,100,0);
    let profileinactiveo = String.fromCharCode(104,101,118,99,100,115,112,95,111,95,56,57,0);
    let brightnessK = false;
    let iconpipshrinkZ = false;
    let borderlessM: Array<any> = [829, 755];
   for (let e = 0; e < 2; e++) {
      predictionbuttong += `${friendsf & 3}`;
   }
       let slider6 = 3.0;
       let text6 = false;
          let feedbackV = 4;
          let crown7: Array<any> = [String.fromCharCode(113,95,55,51,95,116,114,105,112,0), String.fromCharCode(119,111,114,100,95,53,95,53,51,0), String.fromCharCode(118,97,108,105,100,97,116,105,111,110,95,110,95,50,0)];
         text6 = 77 <= feedbackV;
         feedbackV -= 1;
         crown7 = [crown7.length << (Math.min(Math.abs(1), 3))];
         slider6 += ((text6 ? 3 : 2) / (Math.max(parseInt(`${slider6}`), 10)));
       let incidentx = false;
       let icontransferclubp = false;
         icontransferclubp = !text6 && !icontransferclubp;
      let saveN = text6 ? !text6 : text6;
      do {
         text6 = (!text6 ? icontransferclubp : text6);
         if (saveN) {
            break;
         }
      } while ((text6) && saveN);
         icontransferclubp = text6 || !incidentx;
      historyg += `${1 ^ friendsf}`;
   for (let c = 0; c < 3; c++) {
      friendsf <<= Math.min(4, Math.abs(modec.size | 2));
   }
       let schedulen: Array<any> = [273, 578];
       let transferW = String.fromCharCode(97,98,105,95,103,95,53,52,0);
         schedulen = [schedulen.length ^ 3];
      if (3 > (schedulen.length / 3)) {
          let cross2: Array<any> = [992, 284, 624];
          let merger8 = true;
          let transferB = 4.0;
         schedulen.push((String.fromCharCode(104,0) == transferW ? transferW.length : (merger8 ? 4 : 3)));
         cross2.push(cross2.length * parseInt(`${transferB}`));
         merger8 = transferB == 64.35;
      }
         schedulen = [schedulen.length];
         transferW = `${schedulen.length << (Math.min(Math.abs(2), 4))}`;
      if (5 == schedulen.length) {
          let selectiono = 3.0;
         schedulen.push(2 & parseInt(`${selectiono}`));
      }
          let arrowselectdownY = 2.0;
          let reactnativeultimatelistviewy = 1.0;
         schedulen.push(parseInt(`${arrowselectdownY}`));
         reactnativeultimatelistviewy -= parseInt(`${reactnativeultimatelistviewy}`);
      predictionbuttong = `${parseInt(`${iconbella}`) * schedulen.length}`;
   while (iconsaveimageW >= iconbella) {
       let gmailh = 0;
       let f_lock8 = 0.0;
       let largebrightnessK = 4;
       let eighteeni = String.fromCharCode(100,105,115,97,112,112,101,97,114,105,110,103,95,109,95,51,57,0);
       let s_playerN = String.fromCharCode(114,95,51,53,95,117,110,102,111,114,109,97,116,116,101,100,0);
         f_lock8 -= largebrightnessK * parseInt(`${f_lock8}`);
       let bgvipxvodh = 3.0;
       let iconuserP = 5.0;
      for (let y = 0; y < 2; y++) {
         bgvipxvodh /= Math.max(gmailh - 3, 2);
      }
      if ((1 + eighteeni.length) <= 2 || 4.83 <= (3.55 - bgvipxvodh)) {
         bgvipxvodh /= Math.max(parseInt(`${bgvipxvodh}`) ^ 2, 3);
      }
          let ccopy_ebd = 3.0;
          let zhubou = String.fromCharCode(119,95,57,54,95,101,110,100,0);
         largebrightnessK %= Math.max(largebrightnessK - 2, 4);
         ccopy_ebd -= 1 + parseInt(`${ccopy_ebd}`);
         zhubou += `${parseInt(`${ccopy_ebd}`)}`;
       let homeplayerU = String.fromCharCode(108,101,110,103,116,104,115,95,56,95,54,53,0);
       let renewr = String.fromCharCode(103,111,112,115,95,51,95,56,51,0);
          let iconsharefriendsw = 1.0;
          let gemfilea = String.fromCharCode(106,95,53,95,102,97,114,101,110,100,0);
         eighteeni = `${parseInt(`${iconsharefriendsw}`) >> (Math.min(Math.abs(parseInt(`${bgvipxvodh}`)), 5))}`;
         iconsharefriendsw += (gemfilea == String.fromCharCode(72,0) ? gemfilea.length : gemfilea.length);
         s_playerN += `${largebrightnessK * eighteeni.length}`;
      iconsaveimageW -= friendsf;
      break;
   }
   while (4 >= (3 * predictionloss8.length) && (3 * friendsf) >= 5) {
      predictionloss8 = `${friendsf}`;
      break;
   }
   while (5 > (3 | historyg.length)) {
       let selectionQ = 2.0;
       let matchactiveC = String.fromCharCode(108,95,51,49,95,100,114,111,112,112,101,114,0);
      while (2 < (matchactiveC.length / 2)) {
         matchactiveC = "3";
         break;
      }
      for (let i = 0; i < 1; i++) {
         matchactiveC += `${matchactiveC.length}`;
      }
      let match6 = selectionQ <= 6902949.0;
      do {
         selectionQ *= parseFloat(`${matchactiveC.length * 3}`);
         if (match6) {
            break;
         }
      } while (match6 && (selectionQ <= parseFloat(`${matchactiveC.length}`)));
       let internetz = 3.0;
          let detail8 = 5.0;
          let profileinactivel = 1.0;
          let ccopy_ja = 2.0;
         matchactiveC = `${parseInt(`${selectionQ}`)}`;
         detail8 += parseInt(`${profileinactivel}`);
         profileinactivel /= Math.max(parseFloat(`${parseInt(`${profileinactivel}`) + 1}`), 5);
         ccopy_ja -= parseInt(`${ccopy_ja}`) / (Math.max(1, parseInt(`${profileinactivel}`)));
         selectionQ += parseFloat(`${parseInt(`${internetz}`) ^ parseInt(`${selectionQ}`)}`);
      iconbella -= parseFloat(`${1}`);
      break;
   }
   while (sharewhiteM < predictionloss8.length) {
      sharewhiteM >>= Math.min(Math.abs(historyg.length / 2), 2);
      break;
   }
   for (let b = 0; b < 2; b++) {
       let mintegralU = String.fromCharCode(100,95,55,51,95,100,105,97,108,111,103,117,101,115,0);
          let node9: Map<any, any> = new Map([[String.fromCharCode(108,105,98,115,119,105,102,116,111,115,95,55,95,53,51,0),965], [String.fromCharCode(98,108,111,99,107,100,115,112,95,104,95,55,54,0),908]]);
          let materialL = String.fromCharCode(119,95,57,55,95,111,112,117,115,108,97,99,105,110,103,0);
          let iconbackwhitef = false;
         mintegralU = `${mintegralU.length / (Math.max(materialL.length, 6))}`;
         node9 = new Map([[`${node9.size}`, (2 & (iconbackwhitef ? 5 : 2))]]);
         materialL += `${(1 * (iconbackwhitef ? 2 : 1))}`;
          let profileframez = 5.0;
          let audiencen: Map<any, any> = new Map([[String.fromCharCode(100,95,49,48,95,114,97,110,115,105,116,105,111,110,0),String.fromCharCode(110,95,50,51,95,110,111,116,105,102,105,99,97,116,105,111,110,0)], [String.fromCharCode(98,95,54,49,95,109,105,109,101,0),String.fromCharCode(109,95,51,52,95,109,97,110,116,105,115,115,97,115,0)]]);
          let sliderN: Array<any> = [973, 423];
         mintegralU += `${parseInt(`${profileframez}`) & 3}`;
         profileframez *= audiencen.size;
         audiencen.set(`${sliderN.length}`, audiencen.size);
         sliderN = [3 & audiencen.size];
         mintegralU += "3";
      sharewhiteM <<= Math.min(parseInt(`${Math.abs(((gifgoalm ? 3 : 2) << (Math.min(Math.abs(parseInt(`${iconbella}`)), 2))))}`), 3);
   }
   while (2 > modec.size) {
       let eyeopenR = String.fromCharCode(102,95,49,50,95,117,118,109,118,0);
       let matchesd = 3.0;
       let nalytics1 = String.fromCharCode(119,95,57,51,95,116,114,97,102,102,105,99,0);
       let iconK = 0;
      if (1 < nalytics1.length) {
         nalytics1 += "1";
      }
      while ((3 + eyeopenR.length) >= 5) {
         matchesd -= parseFloat(`${3}`);
         break;
      }
      let hometeamfieldt = 4998231.0 >= matchesd;
      do {
         matchesd += parseFloat(`${iconK}`);
         if (hometeamfieldt) {
            break;
         }
      } while ((nalytics1.startsWith(`${matchesd}`)) && hometeamfieldt);
      let splashT = String.fromCharCode(51,106,105,99,116,50,0) == eyeopenR;
      do {
          let forwardq = false;
          let twitterD = 4;
         eyeopenR += `${eyeopenR.length - 2}`;
         forwardq = twitterD == 28;
         twitterD &= twitterD;
         if (splashT) {
            break;
         }
      } while (((eyeopenR.length * parseInt(`${matchesd}`)) == 5) && splashT);
      if ((4.79 - matchesd) >= 1.6) {
          let awayiconn = 4.0;
         eyeopenR = "3";
         awayiconn -= parseFloat(`${parseInt(`${awayiconn}`) % 2}`);
      }
      let alertL = 7418859 >= iconK;
      do {
         iconK <<= Math.min(5, nalytics1.length);
         if (alertL) {
            break;
         }
      } while (alertL && (eyeopenR.length < iconK));
      let darkg = 8506908.0 >= matchesd;
      do {
          let iconwatch8: Array<any> = [174, 322];
         matchesd += parseFloat(`${parseInt(`${matchesd}`)}`);
         iconwatch8.push(2);
         if (darkg) {
            break;
         }
      } while (darkg && (3.95 >= (2.12 / (Math.max(8, matchesd))) || (2.12 / (Math.max(4, matchesd))) >= 1.0));
      while (2.16 == (parseFloat(`${eyeopenR.length}`) * matchesd)) {
         matchesd *= parseFloat(`${2 ^ parseInt(`${matchesd}`)}`);
         break;
      }
      modec = new Map([[`${iconsaveimageW}`, 1 ^ parseInt(`${iconbella}`)]]);
      break;
   }
      iconsaveimageW *= 1;
   for (let n = 0; n < 1; n++) {
       let condensed6 = String.fromCharCode(112,97,99,107,115,95,104,95,53,0);
       let overlayq = String.fromCharCode(118,95,53,50,95,115,108,111,116,115,0);
       let actions4: Map<any, any> = new Map([[String.fromCharCode(100,95,49,48,95,114,101,112,101,97,116,101,100,0),542], [String.fromCharCode(112,108,97,121,105,110,103,95,104,95,50,57,0),311]]);
       let layout5 = String.fromCharCode(105,110,118,97,108,105,100,97,116,105,111,110,95,109,95,51,49,0);
      for (let u = 0; u < 3; u++) {
         overlayq = `${condensed6.length}`;
      }
         overlayq += "2";
      for (let e = 0; e < 1; e++) {
          let leakchecker2: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,120,121,95,55,95,52,57,0),String.fromCharCode(108,95,53,56,95,112,114,111,109,105,115,101,115,0)], [String.fromCharCode(118,95,51,50,95,115,122,97,98,111,0),String.fromCharCode(100,101,114,105,118,101,95,102,95,51,52,0)]]);
          let volumez = String.fromCharCode(100,105,97,103,114,97,109,95,56,95,54,54,0);
         layout5 += `${1 << (Math.min(3, Math.abs(leakchecker2.size)))}`;
         leakchecker2 = new Map([[volumez, volumez.length]]);
      }
         overlayq = `${condensed6.length - layout5.length}`;
         overlayq = `${condensed6.length - 3}`;
      for (let n = 0; n < 1; n++) {
         overlayq = `${actions4.size ^ layout5.length}`;
      }
      let androidO = 7801384 >= actions4.size;
      do {
          let basketballhometeam5: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,101,99,116,105,98,108,101,115,95,53,95,49,50,0),336], [String.fromCharCode(100,101,99,111,109,112,114,101,115,115,95,49,95,55,55,0),683]]);
          let eventz = 2;
          let linel = 5.0;
         actions4.set(`${eventz}`, eventz << (Math.min(Math.abs(basketballhometeam5.size), 2)));
         basketballhometeam5.set(`${linel}`, 1 * parseInt(`${linel}`));
         if (androidO) {
            break;
         }
      } while (((4 - layout5.length) == 5 || (4 - actions4.size) == 5) && androidO);
       let tail2: Map<any, any> = new Map([[String.fromCharCode(119,109,118,100,97,116,97,95,120,95,49,56,0),696], [String.fromCharCode(122,95,49,48,48,95,100,111,119,110,108,111,97,100,115,0),540]]);
         condensed6 = `${actions4.size}`;
      while (condensed6.length > tail2.size) {
         tail2.set(`${layout5}`, (String.fromCharCode(114,0) == layout5 ? actions4.size : layout5.length));
         break;
      }
       let sheet6 = true;
      while (4 <= overlayq.length || 4 <= condensed6.length) {
         overlayq = `${tail2.size ^ 2}`;
         break;
      }
      friendsf /= Math.max(4, ((gifgoalm ? 2 : 3)));
   }
   for (let b = 0; b < 3; b++) {
      friendsf /= Math.max(profileinactiveo.length, 3);
   }
   if (2 > (historyg.length % 1) && (modec.size % (Math.max(1, 10))) > 1) {
      historyg = `${historyg.length}`;
   }
   if (4 < (modec.size / (Math.max(predictionbuttong.length, 4))) || 1 < (modec.size / 4)) {
       let mbbidj: Map<any, any> = new Map([[String.fromCharCode(121,95,50,52,95,99,104,97,110,103,101,104,0),287], [String.fromCharCode(98,95,50,53,95,114,116,109,112,101,0),311], [String.fromCharCode(122,95,56,57,95,102,105,110,100,110,101,116,0),727]]);
       let positionfieldg = 5.0;
         mbbidj.set(`${positionfieldg}`, parseInt(`${positionfieldg}`));
         positionfieldg += parseFloat(`${1 - parseInt(`${positionfieldg}`)}`);
      let playX = 6809901.0 >= positionfieldg;
      do {
          let livenodatabgimgi: Array<any> = [854, 714];
          let zhengpianq = 2.0;
          let libavformatz = String.fromCharCode(109,95,51,95,110,97,110,111,112,98,0);
          let orangeclocki: Array<any> = [897, 714, 846];
          let iconbellL = String.fromCharCode(115,111,110,105,99,95,120,95,57,53,0);
         positionfieldg -= parseFloat(`${iconbellL.length * 1}`);
         livenodatabgimgi.push(3 + livenodatabgimgi.length);
         zhengpianq += parseInt(`${zhengpianq}`) + livenodatabgimgi.length;
         libavformatz = `${2 ^ orangeclocki.length}`;
         orangeclocki = [2];
         iconbellL += `${parseInt(`${zhengpianq}`) & orangeclocki.length}`;
         if (playX) {
            break;
         }
      } while (playX && (mbbidj.get(`${positionfieldg}`) == null));
          let icon0 = 0;
          let roundt = 3;
         mbbidj.set(`${roundt}`, 3 * mbbidj.size);
         icon0 /= Math.max(2 | icon0, 4);
         roundt &= 2 >> (Math.min(2, Math.abs(icon0)));
         mbbidj = new Map([[`${mbbidj.size}`, parseInt(`${positionfieldg}`) * mbbidj.size]]);
          let encryptY = 0;
         mbbidj = new Map([[`${mbbidj.size}`, encryptY + mbbidj.size]]);
      predictionbuttong = `${modec.size}`;
   }
   if (2 <= historyg.length) {
      sharewhiteM *= predictionloss8.length - modec.size;
   }
      gifgoalm = !brightnessK;
       let owngoalW = 3.0;
       let privacyR: Map<any, any> = new Map([[String.fromCharCode(99,97,114,114,121,95,105,95,51,53,0),351], [String.fromCharCode(103,95,57,49,95,115,105,110,102,0),423]]);
         privacyR = new Map([[`${privacyR.size}`, parseInt(`${owngoalW}`) - privacyR.size]]);
          let matchinactiveD = false;
          let libcxxcomponentsd: Array<any> = [String.fromCharCode(121,95,49,55,95,97,116,116,114,0), String.fromCharCode(118,95,57,51,95,112,110,105,101,108,115,97,100,100,0), String.fromCharCode(108,105,115,116,95,98,95,51,50,0)];
         owngoalW *= libcxxcomponentsd.length & privacyR.size;
         matchinactiveD = !matchinactiveD;
         libcxxcomponentsd = [3];
          let shootC = 4.0;
          let play1 = 5;
         owngoalW += privacyR.size;
         shootC -= 3;
         play1 >>= Math.min(2, Math.abs(parseInt(`${shootC}`) + play1));
         privacyR.set(`${owngoalW}`, 1 << (Math.min(4, Math.abs(parseInt(`${owngoalW}`)))));
      for (let n = 0; n < 3; n++) {
         privacyR = new Map([[`${privacyR.size}`, parseInt(`${owngoalW}`) & 2]]);
      }
      while (5.7 < (owngoalW / 5.77) && (privacyR.size / 5) < 2) {
         privacyR = new Map([[`${privacyR.size}`, parseInt(`${owngoalW}`) - 1]]);
         break;
      }
      predictionbuttong += `${((gifgoalm ? 4 : 4) * predictionbuttong.length)}`;
   if (sharewhiteM > 4) {
       let private_g_ = 3.0;
       let friendsM = String.fromCharCode(115,95,51,49,95,112,97,105,114,0);
       let backiconmask6 = true;
         backiconmask6 = (parseInt(`${private_g_}`) * friendsM.length) <= 21;
         friendsM += `${((backiconmask6 ? 5 : 2) / (Math.max(3, 8)))}`;
      for (let f = 0; f < 2; f++) {
          let mappingz = String.fromCharCode(112,114,101,104,101,97,116,95,114,95,56,55,0);
          let ccdfbdabcabbbedbV: Array<any> = [String.fromCharCode(121,95,52,57,0), String.fromCharCode(104,95,51,50,95,105,100,108,101,0)];
         private_g_ -= (parseFloat(`${(backiconmask6 ? 5 : 3)}`));
         mappingz += `${ccdfbdabcabbbedbV.length}`;
         ccdfbdabcabbbedbV = [ccdfbdabcabbbedbV.length << (Math.min(Math.abs(3), 1))];
      }
      for (let k = 0; k < 1; k++) {
         private_g_ -= parseFloat(`${2}`);
      }
       let carouselY = 4.0;
       let buildt = 0.0;
          let mimo5 = String.fromCharCode(98,95,57,95,97,115,115,101,109,98,108,101,0);
         backiconmask6 = private_g_ > 85.16 && backiconmask6;
         mimo5 = `${mimo5.length - 1}`;
         friendsM = "2";
      if (1.12 > carouselY || 3.24 > (carouselY / 1.12)) {
          let iconplayT = 1.0;
          let iconeyei = 1;
          let greyarrowupE = String.fromCharCode(111,95,56,57,95,99,104,101,118,114,111,110,0);
          let textinputW = String.fromCharCode(105,95,51,54,95,99,97,99,104,101,0);
         backiconmask6 = 5.60 >= (iconplayT + carouselY);
         iconplayT += parseFloat(`${textinputW.length}`);
         iconeyei -= (greyarrowupE == String.fromCharCode(120,0) ? greyarrowupE.length : iconeyei);
         textinputW += `${iconeyei}`;
      }
      if ((private_g_ + parseFloat(`${friendsM.length}`)) <= 1.17) {
         private_g_ += parseFloat(`${3 | parseInt(`${private_g_}`)}`);
      }
      sharewhiteM += 3 * modec.size;
   }
   for (let x = 0; x < 1; x++) {
      modec.set(historyg, friendsf);
   }
      friendsf /= Math.max(2, ((gifgoalm ? 5 : 2) >> (Math.min(profileinactiveo.length, 1))));
   if (brightnessK) {
      brightnessK = sharewhiteM < 90 && modec.size < 90;
   }
      profileinactiveo += `${1 >> (Math.min(Math.abs(parseInt(`${iconbella}`)), 4))}`;
   if (2 > (1 - profileinactiveo.length) || 1 > (profileinactiveo.length - modec.size)) {
      modec = new Map([[`${iconsaveimageW}`, (parseInt(`${iconsaveimageW}`) - (brightnessK ? 5 : 4))]]);
   }

    dispatch(clearSearchHistory());
  }, []);

  
  const onClickSearchResult = useCallback(() => {
       let xvodt = String.fromCharCode(115,117,102,102,105,120,0);
    let dropdowne = true;
    let unreadw = String.fromCharCode(114,111,103,114,101,115,115,95,119,95,54,53,0);
    let const_0l: Array<any> = [String.fromCharCode(116,105,109,101,102,105,108,116,101,114,95,119,95,54,53,0), String.fromCharCode(115,112,97,114,115,101,95,51,95,51,57,0)];
    let predictionbannerV = 2.0;
    let executorf = String.fromCharCode(100,101,110,111,114,109,97,108,95,108,95,55,54,0);
    let bnewinterstitialn = String.fromCharCode(109,95,49,48,48,95,114,101,100,101,101,109,0);
    let iconbellq = false;
    let floaterm: Array<any> = [786, 286, 36];
   for (let z = 0; z < 3; z++) {
      dropdowne = (bnewinterstitialn.length | const_0l.length) <= 22;
   }
   for (let u = 0; u < 3; u++) {
      executorf += "1";
   }
   if (executorf.endsWith(`${predictionbannerV}`)) {
       let helperd: Array<any> = [669, 487];
       let orangedownarrowr = 4.0;
       let rncore9: Map<any, any> = new Map([[String.fromCharCode(121,95,51,54,95,103,101,116,114,97,110,100,111,109,0),231], [String.fromCharCode(114,101,102,108,101,99,116,111,114,95,102,95,55,57,0),782]]);
       let whistleh: Array<any> = [200, 142];
       let libapminsightal = 5.0;
      let sortf = orangedownarrowr >= 9088368.0;
      do {
         orangedownarrowr += parseFloat(`${3 & whistleh.length}`);
         if (sortf) {
            break;
         }
      } while (sortf && (1.6 <= (5 + libapminsightal)));
      if ((helperd.length << (Math.min(Math.abs(rncore9.size), 4))) <= 4) {
         rncore9 = new Map([[`${whistleh.length}`, parseInt(`${orangedownarrowr}`) / 3]]);
      }
      while ((parseInt(`${orangedownarrowr}`) / (Math.max(9, rncore9.size))) > 3 && 2.36 > (orangedownarrowr / 1.20)) {
         rncore9.set(`${orangedownarrowr}`, 2 / (Math.max(3, rncore9.size)));
         break;
      }
         libapminsightal += parseFloat(`${parseInt(`${libapminsightal}`)}`);
         orangedownarrowr -= parseFloat(`${rncore9.size}`);
      for (let c = 0; c < 3; c++) {
          let defaultroombgW = String.fromCharCode(122,95,53,56,95,115,117,98,112,97,116,104,115,0);
          let currentk = String.fromCharCode(104,100,108,114,95,51,95,54,54,0);
          let viewsu: Array<any> = [601, 918, 309];
         whistleh = [3 / (Math.max(5, rncore9.size))];
         defaultroombgW += `${(defaultroombgW == String.fromCharCode(115,0) ? defaultroombgW.length : currentk.length)}`;
         currentk += `${currentk.length}`;
         viewsu = [2];
      }
       let navigationG = 4.0;
       let sigmobO = 4.0;
          let redirectR = 2;
          let episodesU = String.fromCharCode(112,95,49,49,95,115,109,111,111,116,104,110,101,115,115,0);
          let gesturet = String.fromCharCode(100,95,50,54,95,112,114,111,116,101,99,116,105,111,110,0);
         whistleh.push(redirectR - 3);
         redirectR ^= episodesU.length >> (Math.min(4, gesturet.length));
         episodesU = `${(String.fromCharCode(76,0) == episodesU ? episodesU.length : gesturet.length)}`;
      if (4.92 >= (3.79 * sigmobO) && (libapminsightal / (Math.max(3.79, 4))) >= 3.64) {
          let largebrightness1 = String.fromCharCode(104,95,51,49,95,114,101,97,115,111,110,0);
         libapminsightal += parseFloat(`${rncore9.size / (Math.max(10, parseInt(`${sigmobO}`)))}`);
         largebrightness1 = `${2 * largebrightness1.length}`;
      }
      if (!Array.from(rncore9.values()).includes(helperd.length)) {
          let photo1 = String.fromCharCode(99,111,111,114,100,95,52,95,56,52,0);
          let anythinka: Map<any, any> = new Map([[String.fromCharCode(101,95,49,49,95,115,119,97,116,99,104,0),434], [String.fromCharCode(108,95,56,48,95,122,101,114,111,109,118,0),92], [String.fromCharCode(104,95,56,52,95,98,114,105,101,102,108,121,0),331]]);
          let debug4 = String.fromCharCode(102,97,115,116,95,117,95,53,54,0);
          let canvasz: Map<any, any> = new Map([[String.fromCharCode(110,111,116,105,102,105,101,100,95,114,95,50,52,0),44], [String.fromCharCode(101,116,101,114,110,105,116,121,95,119,95,56,48,0),619], [String.fromCharCode(99,95,52,57,95,101,116,104,101,114,0),25]]);
         rncore9.set(`${orangedownarrowr}`, 3);
         photo1 += `${1 + photo1.length}`;
         anythinka.set(photo1, canvasz.size / (Math.max(photo1.length, 6)));
         debug4 += `${photo1.length}`;
         canvasz.set(photo1, photo1.length);
      }
      for (let a = 0; a < 3; a++) {
         libapminsightal *= parseFloat(`${whistleh.length}`);
      }
         orangedownarrowr *= parseFloat(`${2}`);
      let bellremindern = 5986842.0 >= sigmobO;
      do {
          let cornershootO = 1.0;
          let regengR = String.fromCharCode(111,95,53,52,95,110,101,116,119,111,114,107,110,101,119,0);
          let attributedstringu: Map<any, any> = new Map([[String.fromCharCode(114,95,56,51,95,119,97,116,99,104,101,100,0),125], [String.fromCharCode(114,95,49,54,95,104,109,97,99,105,100,0),527]]);
          let scheduleS = String.fromCharCode(105,112,99,95,100,95,49,0);
         sigmobO /= Math.max(4, parseFloat(`${whistleh.length}`));
         cornershootO -= parseFloat(`${2}`);
         regengR = `${(scheduleS == String.fromCharCode(107,0) ? scheduleS.length : attributedstringu.size)}`;
         attributedstringu = new Map([[regengR, parseInt(`${cornershootO}`)]]);
         if (bellremindern) {
            break;
         }
      } while ((sigmobO > 2.98) && bellremindern);
      if (3 < whistleh.length) {
          let regengP: Map<any, any> = new Map([[String.fromCharCode(97,98,111,117,116,95,98,95,50,52,0),50], [String.fromCharCode(120,109,117,108,116,95,116,95,55,48,0),708], [String.fromCharCode(100,95,50,55,95,104,119,99,111,110,116,101,120,116,0),936]]);
          let uimanager0 = String.fromCharCode(99,111,108,115,107,105,112,95,106,95,54,49,0);
          let iconeditc: Map<any, any> = new Map([[String.fromCharCode(98,105,116,115,113,112,95,53,95,56,49,0),601], [String.fromCharCode(112,95,49,55,95,114,101,115,105,103,110,0),185], [String.fromCharCode(110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,95,102,95,57,49,0),318]]);
          let graph5 = String.fromCharCode(98,108,105,110,107,95,56,95,55,49,0);
         libapminsightal -= parseFloat(`${1 | rncore9.size}`);
         regengP = new Map([[uimanager0, uimanager0.length]]);
         iconeditc.set(`${uimanager0}`, uimanager0.length & 3);
         graph5 = `${3 + graph5.length}`;
      }
       let d_unlockM: Map<any, any> = new Map([[String.fromCharCode(116,95,52,48,95,118,97,116,97,114,0),897], [String.fromCharCode(117,95,56,53,95,109,112,101,103,0),864], [String.fromCharCode(98,117,102,108,101,110,95,114,95,57,55,0),181]]);
       let disconnectedlogo7: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,112,95,49,95,57,0),false ], [String.fromCharCode(115,99,97,110,115,95,98,95,52,55,0),true ]]);
      predictionbannerV += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${libapminsightal}`)), 2))}`);
   }
   let umengr = xvodt.length >= 8218274;
   do {
      xvodt += `${((dropdowne ? 1 : 2) - const_0l.length)}`;
      if (umengr) {
         break;
      }
   } while ((!dropdowne) && umengr);
   let philippines0 = bnewinterstitialn.length >= 6195137;
   do {
      bnewinterstitialn = `${(String.fromCharCode(72,0) == bnewinterstitialn ? bnewinterstitialn.length : executorf.length)}`;
      if (philippines0) {
         break;
      }
   } while (((bnewinterstitialn.length | const_0l.length) >= 4) && philippines0);
       let bottom4 = true;
         bottom4 = (!bottom4 ? bottom4 : bottom4);
      if (!bottom4 || bottom4) {
          let defaultlogoh = 0.0;
          let libavdeviceP = 4;
          let pausea = 3.0;
         bottom4 = parseFloat(`${libavdeviceP}`) == pausea;
         defaultlogoh *= parseInt(`${defaultlogoh}`);
         libavdeviceP ^= parseInt(`${defaultlogoh}`) % (Math.max(7, parseInt(`${defaultlogoh}`)));
      }
      let baiduadsw = bottom4 ? !bottom4 : bottom4;
      do {
         bottom4 = (bottom4 ? !bottom4 : !bottom4);
         if (baiduadsw) {
            break;
         }
      } while (baiduadsw && (bottom4));
      bnewinterstitialn += `${3 << (Math.min(1, executorf.length))}`;
      const_0l.push(2 + xvodt.length);
   for (let o = 0; o < 2; o++) {
      unreadw += `${executorf.length & parseInt(`${predictionbannerV}`)}`;
   }
       let darkk = String.fromCharCode(116,97,103,99,111,109,112,97,114,101,95,48,95,50,49,0);
       let enewinterstitialt = String.fromCharCode(101,95,54,57,95,109,101,97,115,117,114,101,114,0);
       let plashO = String.fromCharCode(106,117,109,112,95,116,95,55,57,0);
          let darkE = String.fromCharCode(102,95,55,53,95,100,114,111,112,115,0);
         enewinterstitialt += `${(String.fromCharCode(99,0) == plashO ? darkE.length : plashO.length)}`;
          let bootsplasht: Array<any> = [509, 462];
         plashO = `${plashO.length - 3}`;
         bootsplasht.push(1 >> (Math.min(4, bootsplasht.length)));
       let signinupB = String.fromCharCode(106,100,99,111,101,102,99,116,95,55,95,49,56,0);
      while (1 < plashO.length) {
          let phoneshare6 = 4.0;
          let iconwatchnowo = true;
          let rootL = String.fromCharCode(116,116,116,95,115,95,52,51,0);
          let store1 = 5.0;
         signinupB = `${signinupB.length}`;
         phoneshare6 -= parseFloat(`${parseInt(`${phoneshare6}`) - 1}`);
         iconwatchnowo = store1 < 18.75;
         rootL += `${rootL.length / (Math.max(8, parseInt(`${store1}`)))}`;
         break;
      }
         darkk = `${darkk.length & plashO.length}`;
       let sentry_ = String.fromCharCode(98,95,49,55,95,116,109,109,98,0);
       let libglogE = String.fromCharCode(114,101,108,97,116,105,118,101,108,121,95,118,95,52,0);
      let libreactnativejniR = libglogE == String.fromCharCode(106,57,111,97,98,98,55,95,97,103,0);
      do {
          let showlessl = String.fromCharCode(105,95,50,56,95,97,118,99,111,100,101,99,114,101,115,0);
          let bingf = 4;
          let videocommonh = 3.0;
         libglogE = `${showlessl.length}`;
         showlessl += `${parseInt(`${videocommonh}`)}`;
         bingf += parseInt(`${videocommonh}`);
         if (libreactnativejniR) {
            break;
         }
      } while (libreactnativejniR && (libglogE.length < sentry_.length));
         sentry_ = `${enewinterstitialt.length}`;
      let matches5 = signinupB.length >= 7325305;
      do {
          let issubf: Array<any> = [470, 359];
          let qaagI = true;
          let backwardh: Array<any> = [110, 9];
          let bannerb = 0.0;
          let textx = 5;
         signinupB += `${sentry_.length}`;
         issubf = [2 + backwardh.length];
         qaagI = 10 > issubf.length && backwardh.length > 10;
         bannerb -= backwardh.length;
         textx *= 2 - parseInt(`${bannerb}`);
         if (matches5) {
            break;
         }
      } while ((darkk.length <= signinupB.length) && matches5);
      executorf += "3";
   if ((unreadw.length / (Math.max(1, 3))) > 4 && (1 / (Math.max(3, unreadw.length))) > 4) {
       let arrowdown7 = String.fromCharCode(117,95,53,57,95,112,101,114,102,111,114,109,101,114,0);
       let predictionlossq = 2.0;
       let libreactnativeblobD = 1.0;
       let largef = 1;
       let memberZ = String.fromCharCode(118,95,49,55,95,116,119,111,0);
      if (3.20 >= (predictionlossq * libreactnativeblobD)) {
         predictionlossq -= largef / (Math.max(memberZ.length, 7));
      }
      let whitevideoliveA = String.fromCharCode(116,105,108,112,51,117,114,48,0) == memberZ;
      do {
         memberZ += `${2 + memberZ.length}`;
         if (whitevideoliveA) {
            break;
         }
      } while (((memberZ.length | 3) < 4 && 2 < (3 ^ memberZ.length)) && whitevideoliveA);
         arrowdown7 += `${parseInt(`${predictionlossq}`) | largef}`;
         largef <<= Math.min(Math.abs(1), 4);
      let iconrightorangeC = 8040798.0 >= predictionlossq;
      do {
         predictionlossq *= (arrowdown7 == String.fromCharCode(88,0) ? arrowdown7.length : largef);
         if (iconrightorangeC) {
            break;
         }
      } while ((!arrowdown7.startsWith(`${predictionlossq}`)) && iconrightorangeC);
      while (2.50 <= predictionlossq) {
         libreactnativeblobD += parseFloat(`${1}`);
         break;
      }
       let share3: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,105,114,101,115,95,98,95,50,52,0),false ], [String.fromCharCode(109,95,49,53,95,109,111,100,110,112,102,0),false ], [String.fromCharCode(117,109,98,101,114,95,108,95,49,50,0),false ]]);
      while ((libreactnativeblobD - parseFloat(`${largef}`)) > 2.3 || 2.3 > (parseFloat(`${largef}`) - libreactnativeblobD)) {
          let anythinkm = 5.0;
          let matchactivev: Map<any, any> = new Map([[String.fromCharCode(110,97,108,117,95,97,95,51,51,0),true ], [String.fromCharCode(116,101,114,109,95,115,95,56,50,0),true ]]);
         largef <<= Math.min(5, Math.abs(1 ^ parseInt(`${anythinkm}`)));
         anythinkm *= matchactivev.size % (Math.max(3, 10));
         matchactivev.set(`${matchactivev.size}`, 2 ^ matchactivev.size);
         break;
      }
      let dataz = share3.size <= 8937610;
      do {
         share3 = new Map([[`${predictionlossq}`, 1]]);
         if (dataz) {
            break;
         }
      } while (dataz && ((memberZ.length | share3.size) >= 3));
         share3 = new Map([[`${libreactnativeblobD}`, largef & parseInt(`${libreactnativeblobD}`)]]);
      for (let v = 0; v < 1; v++) {
          let tempnodataM: Map<any, any> = new Map([[String.fromCharCode(111,95,52,56,95,109,115,105,122,101,0),String.fromCharCode(116,104,117,109,98,115,117,112,95,102,95,54,53,0)], [String.fromCharCode(97,117,116,111,115,99,114,111,108,108,105,110,103,95,98,95,55,48,0),String.fromCharCode(108,95,55,48,0)]]);
          let containerv: Array<any> = [315, 899, 562];
         largef ^= containerv.length;
         tempnodataM.set(`${tempnodataM.size}`, tempnodataM.size >> (Math.min(Math.abs(3), 1)));
         containerv.push(1);
      }
      while (2 >= (2 - arrowdown7.length) && 1.22 >= (3.17 - predictionlossq)) {
          let topica = 4;
          let mimeb = 4.0;
          let apples = String.fromCharCode(105,110,118,105,116,101,100,95,102,95,54,52,0);
          let bottomU = String.fromCharCode(116,101,109,112,108,97,116,101,95,122,95,55,0);
         predictionlossq -= parseInt(`${predictionlossq}`) / (Math.max(memberZ.length, 3));
         topica &= 1;
         mimeb -= 1;
         apples += `${parseInt(`${mimeb}`) & apples.length}`;
         bottomU += `${apples.length}`;
         break;
      }
         predictionlossq *= 3;
      while (1 > (largef * 5) || (largef * memberZ.length) > 5) {
         largef += arrowdown7.length;
         break;
      }
      if (5.25 >= (arrowdown7.length + predictionlossq)) {
         arrowdown7 += "3";
      }
      unreadw += `${((iconbellq ? 3 : 5) / (Math.max(parseInt(`${predictionbannerV}`), 6)))}`;
   }
   if (xvodt.includes(`${executorf.length}`)) {
      executorf += `${((dropdowne ? 4 : 1))}`;
   }
   let footballtrophyJ = String.fromCharCode(49,115,105,111,98,48,115,104,54,57,0) == bnewinterstitialn;
   do {
       let referrers = String.fromCharCode(100,111,117,103,108,97,115,95,115,95,55,53,0);
       let showlessP = String.fromCharCode(113,95,54,54,95,114,101,101,110,97,98,108,101,0);
       let imagewatchliveC = false;
       let emojiK = String.fromCharCode(119,114,105,116,101,97,98,108,101,95,103,95,57,55,0);
      if (!showlessP.endsWith(`${referrers.length}`)) {
          let libbufferF = String.fromCharCode(107,95,49,48,95,118,111,105,112,0);
         showlessP += `${((imagewatchliveC ? 1 : 5))}`;
         libbufferF += `${libbufferF.length | libbufferF.length}`;
      }
          let graphicsS = String.fromCharCode(113,115,116,101,112,95,113,95,53,55,0);
          let libsentryR = 5.0;
          let countryI = 5.0;
         emojiK += `${2 * parseInt(`${libsentryR}`)}`;
         graphicsS = `${(String.fromCharCode(97,0) == graphicsS ? parseInt(`${countryI}`) : graphicsS.length)}`;
         libsentryR *= graphicsS.length;
         countryI *= (graphicsS == String.fromCharCode(101,0) ? parseInt(`${countryI}`) : graphicsS.length);
      let upgradeI = emojiK.length >= 5145913;
      do {
         emojiK += `${(referrers.length ^ (imagewatchliveC ? 4 : 2))}`;
         if (upgradeI) {
            break;
         }
      } while (upgradeI && (showlessP == emojiK));
         referrers += `${(String.fromCharCode(72,0) == showlessP ? referrers.length : showlessP.length)}`;
      if (1 <= referrers.length || !imagewatchliveC) {
          let macauz = String.fromCharCode(111,118,101,114,102,108,111,119,95,102,95,53,0);
         imagewatchliveC = emojiK == macauz;
      }
      if (imagewatchliveC) {
          let redirect9: Array<any> = [698, 51, 437];
          let predictionarrowt = 2.0;
          let iconF: Map<any, any> = new Map([[String.fromCharCode(118,95,54,48,95,101,120,116,101,116,110,100,101,100,0),898], [String.fromCharCode(99,121,99,108,105,99,114,101,102,114,101,115,104,95,110,95,55,48,0),139], [String.fromCharCode(112,114,101,118,105,101,119,115,95,101,95,52,56,0),586]]);
          let neon8 = 4;
          let goal6 = 3;
         showlessP += `${redirect9.length ^ iconF.size}`;
         redirect9 = [goal6 % (Math.max(neon8, 9))];
         predictionarrowt *= parseFloat(`${goal6 - parseInt(`${predictionarrowt}`)}`);
         iconF = new Map([[`${neon8}`, goal6]]);
      }
      let basketballhometeamw = 5355248 <= referrers.length;
      do {
         referrers = `${(emojiK.length - (imagewatchliveC ? 1 : 5))}`;
         if (basketballhometeamw) {
            break;
         }
      } while ((5 >= referrers.length || showlessP == String.fromCharCode(86,0)) && basketballhometeamw);
         imagewatchliveC = (emojiK.length % (Math.max(4, showlessP.length))) > 41;
      let greenarrowupF = 7544717 >= emojiK.length;
      do {
         emojiK = `${(String.fromCharCode(117,0) == showlessP ? showlessP.length : (imagewatchliveC ? 5 : 2))}`;
         if (greenarrowupF) {
            break;
         }
      } while ((imagewatchliveC) && greenarrowupF);
          let sheetk = true;
         referrers += `${emojiK.length}`;
         sheetk = !sheetk;
         referrers += `${(String.fromCharCode(100,0) == showlessP ? showlessP.length : referrers.length)}`;
          let template_ivb: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,95,49,95,51,54,0),145], [String.fromCharCode(114,95,52,53,95,112,97,110,105,99,0),503], [String.fromCharCode(99,111,110,100,117,99,116,111,114,95,107,95,55,51,0),865]]);
          let sellH: Map<any, any> = new Map([[String.fromCharCode(97,108,112,105,110,101,95,55,95,51,51,0),90], [String.fromCharCode(120,95,50,54,95,115,101,116,98,105,116,0),868]]);
         showlessP = `${referrers.length & showlessP.length}`;
         template_ivb = new Map([[`${template_ivb.size}`, sellH.size / (Math.max(template_ivb.size, 4))]]);
         sellH = new Map([[`${template_ivb.size}`, 3 * template_ivb.size]]);
      bnewinterstitialn = `${(bnewinterstitialn == String.fromCharCode(107,0) ? executorf.length : bnewinterstitialn.length)}`;
      if (footballtrophyJ) {
         break;
      }
   } while (footballtrophyJ && (iconbellq && 1 > bnewinterstitialn.length));
       let invites = String.fromCharCode(110,97,116,105,111,110,97,108,105,116,121,95,56,95,52,50,0);
       let clockw = String.fromCharCode(102,95,49,49,95,114,101,97,100,105,110,103,0);
         invites += `${clockw.length + 1}`;
          let nbatrophyd = String.fromCharCode(116,95,55,50,95,114,111,102,105,108,101,0);
          let countryr = 4.0;
         invites += `${nbatrophyd.length}`;
         nbatrophyd += `${parseInt(`${countryr}`) * parseInt(`${countryr}`)}`;
         clockw += "2";
      if (invites.length == clockw.length) {
         invites = `${invites.length << (Math.min(Math.abs(1), 4))}`;
      }
          let transferH: Array<any> = [624, 146];
         clockw += `${3 >> (Math.min(3, clockw.length))}`;
         transferH = [transferH.length / 3];
       let iconcalendarc: Array<any> = [747, 161];
      bnewinterstitialn += `${invites.length}`;
   while ((floaterm.length + 1) == 4) {
      dropdowne = unreadw.length > 17;
      break;
   }
       let iconsetting3 = 1;
         iconsetting3 /= Math.max(iconsetting3, 2);
      if (2 <= (iconsetting3 & iconsetting3)) {
          let rewardvideor = 4.0;
          let zhubok = String.fromCharCode(118,95,49,50,95,99,97,108,99,117,108,97,116,101,0);
          let trophyP = 2.0;
          let diceH = String.fromCharCode(100,117,109,112,105,110,102,111,95,97,95,50,51,0);
          let iconeditI = String.fromCharCode(100,101,113,117,101,117,101,100,95,51,95,51,56,0);
         iconsetting3 += diceH.length + parseInt(`${trophyP}`);
         rewardvideor *= 3;
         zhubok += `${(zhubok == String.fromCharCode(104,0) ? zhubok.length : parseInt(`${rewardvideor}`))}`;
         trophyP /= Math.max(parseFloat(`${zhubok.length}`), 3);
         diceH += `${zhubok.length}`;
         iconeditI = `${zhubok.length / (Math.max(3, 1))}`;
      }
       let mounting4 = String.fromCharCode(109,95,54,49,95,115,112,97,110,115,0);
       let reactnativeultimatelistviewI = String.fromCharCode(110,111,104,119,95,105,95,55,57,0);
      dropdowne = xvodt.length == floaterm.length;
   for (let y = 0; y < 1; y++) {
       let contextl = String.fromCharCode(112,114,101,100,105,99,116,105,111,110,115,95,114,95,50,50,0);
      for (let c = 0; c < 3; c++) {
         contextl = `${contextl.length}`;
      }
         contextl += `${contextl.length + 3}`;
      let iconclosewhite4 = contextl == String.fromCharCode(116,57,119,114,49,56,50,0);
      do {
          let splashj = 1.0;
          let ping1: Map<any, any> = new Map([[String.fromCharCode(115,116,100,105,110,116,95,102,95,54,48,0),54], [String.fromCharCode(110,95,57,56,95,109,98,117,118,0),418]]);
         contextl += "3";
         splashj -= parseFloat(`${ping1.size}`);
         ping1.set(`${splashj}`, 3 ^ parseInt(`${splashj}`));
         if (iconclosewhite4) {
            break;
         }
      } while (iconclosewhite4 && (contextl != String.fromCharCode(82,0)));
      const_0l = [(3 >> (Math.min(4, Math.abs((dropdowne ? 4 : 5)))))];
   }

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
            source={require("../../../../static/images/constantsMimePhone.gif")}
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
