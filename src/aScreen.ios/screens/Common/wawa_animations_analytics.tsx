

class AppsWatchnowbgLink {
    static pressureDownload = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
  useContext,
} from "react";
import {
  View,
  TouchableOpacity,
  Share,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Platform,
  Linking,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import FavoriteButton from "../../components/button/wawa_macau_button";
import FavoriteIcon from "@static/images/textPlayercommonIconsetting.svg";
import ScreenContainer from "../../components/container/wawa_nterstitial_iconpipexpand";
import { useTheme, useFocusEffect, useRoute } from "@react-navigation/native";
import { wawaBasketballiconPenaltyshootnogoal } from "../../../../wawa_shareblack_orientation";

import { RootStackScreenProps } from "@type/wawa_iconnewchat";
import { wawaLayoutEvent, wawaMintegralLibmapbufferjni } from "@type/wawa_gradlew";
import { addVodToHistory, playVod } from "@redux/actions/wawa_indicator";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/wawa_root";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import {
  wawaDistHook,
  wawaAgreementFlag,
} from "@redux/reducers/wawa_quest_ping";
import SinaIcon from "@static/images/roomMbbannerIconarrowrightblack.svg";
import WeChatIcon from "@static/images/scorepopsoundReact.svg";
import QQIcon from "@static/images/register_lLibavformatApplication.svg";
import PYQIcon from "@static/images/injuryMbridgeTumbnail.svg";
import MoreArrow from "@static/images/combinePredictionbuttonSelect.svg";
import VodEpisodeSelectionModal from "../../components/modal/wawa_rocket_step";
import FastImage from "../../components/common/wawa_iconarrowrightblack";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  APP_NAME_CONST,
  PLAY_HTTP_SERVER_PORT,
  UMENG_CHANNEL,
} from "@utility/wawa_iconpointscore";
import { useQuery } from "@tanstack/react-query";
import ShowMoreVodButton from "../../components/button/wawa_notificationfillempty_button";
import VodListVertical from "../../components/vod/wawa_icon_action";
import VodPlayer from "../../components/videoPlayer/wawa_orangetick_giftbutton";
import { FlatList } from "react-native-gesture-handler";
import { wawaBackground } from "@redux/reducers/wawa_comment";
import BingSearch from "../../components/container/wawa_types";
import SubmitBtn from "@static/images/indexCode.svg";

import NoConnection from "../../components/common/wawa_filed_privacy";
import NetInfo from "@react-native-community/netinfo";
import { lockAppOrientation } from "@redux/actions/wawa_apple_settings";
import { AdsBannerContext } from "../../../contexts/wawa_analytics";
import { URL } from "react-native-url-polyfill";
import RNFetchBlob from "rn-fetch-blob";
import { BridgeServer } from "react-native-http-bridge-refurbished";
import { debounce } from "lodash";
import TitleWithBackButtonHeader from "../../components/header/wawa_matchinactive_header";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showLoginAction } from "@redux/actions/wawa_related";
import { VodCommentBox } from "../../components/vodComment";
import { wawaNewarchdefaults } from "@utility/wawa_analytic_imagenomoredata";
import { wawaUsernameAdult } from "@api";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";

type wawaImage = {
  setPause: (param: boolean) => void;
  isPaused: boolean;
  setCurrentTime: (time: number) => void;
};

const definedValue = (val: any) => {
  if (val === undefined || val === null) {
    return "";
  }
  return val + " ";
};

const server = new BridgeServer(AppsWatchnowbgLink.pressureDownload([104,116,116,112,95,115,101,114,118,105,99,101,0],0x0,false), true); 

const getNoAdsUri = async (url: string) => {
  const startTime = new Date().valueOf();
  const parentUrl = url
    .split("/")
    .filter((part) => !part.includes(".m3u8"))
    .join("/"); 
  const videoSubfolder = parentUrl
    .replace(AppsWatchnowbgLink.pressureDownload([-23,-11,-11,-15,-14,-69,-82,-82,-127],0x81,false), "")
    .replace(AppsWatchnowbgLink.pressureDownload([4,24,24,28,86,67,67,108],0x6C,false), "");
  

  
  
  
  
  
  
  
  
  

  const index = await RNFetchBlob.fetch("GET", url);
  const masterPlaylistRelativeUrl = index
    .text()
    .toString()
    .split("\n")
    .filter((txt) => txt.includes(".m3u8"))
    .at(-1); 
  const masterPlaylistUrl = parentUrl + "/" + masterPlaylistRelativeUrl;

  const playlistFolder = masterPlaylistRelativeUrl
    .split("/")
    .slice(0, -1)
    .join("/"); 

  const playlistContent = (await RNFetchBlob.fetch("GET", masterPlaylistUrl))
    .text()
    .toString();

  if (playlistContent.includes("file not found"))
    throw new Error("Error: master playlist content not found"); 

  const playlist = playlistContent.split("\n").map((line) => {
    if (line.endsWith(".ts")) {
      return parentUrl + "/" + playlistFolder + "/" + line;
    }
    return line;
  });

  let fragCounter = 0;
  let adsLine: number[] = [];

  playlist.forEach((line, index) => {
    if (line.endsWith(".ts")) {
      const indexTs = line.split("/").at(-1).split(".ts")[0];
      const indexTsInt = parseInt(
        indexTs.substring(indexTs.length - index.toString().length)
      );
      if (indexTsInt === fragCounter) {
        fragCounter++;
      } else {
        adsLine.push(index - 1);
        adsLine.push(index);
      }
    }
  });
  
  const noAdsPlaylistContent = playlist.filter(
    (_, index) => !adsLine.includes(index)
  );

  

  server.get(`/${videoSubfolder}/index.m3u8`, async (req, res) => {
    res.send(
      200,
      "application/vnd.apple.mpegurl",
      noAdsPlaylistContent.join("\n")
    );
  });

  console.debug(
    "processing took ",
    (new Date().valueOf() - startTime) / 1000,
    "s"
  );

  return `http://localhost:${PLAY_HTTP_SERVER_PORT}/${videoSubfolder}/index.m3u8`;
};

export default ({ navigation, route }: RootStackScreenProps<"播放IOS">) => {
  const { setRoute: setAdsRoute } = useContext(AdsBannerContext);
  useFocusEffect(() => {
    
    setAdsRoute(route.name);
  });

  const { colors, spacing, textVariants, icons } = useTheme();
  const vodReducer: wawaAgreementFlag = useAppSelector(
    ({ vodReducer }: wawaIconsubssuccess) => vodReducer
  );
  const vodFavouriteReducer: wawaDistHook = useAppSelector(
    ({ vodFavouritesReducer }: wawaIconsubssuccess) => vodFavouritesReducer
  );
  const settingsReducer: wawaBackground = useAppSelector(
    ({ settingsReducer }: wawaIconsubssuccess) => settingsReducer
  );
  const userState = useSelector<wawaPhoneControls>('userReducer');
  const vod = vodReducer.playVod.vod;
  
  const [initTime, setInitTime] = useState(0);
  const isFavorite = vodFavouriteReducer.favorites.some(
    (x) => x.vod_id === vod?.vod_id
  );
  const [currentEpisode, setCurrentEpisode] = useState(
    vod?.episodeWatched === undefined ? 0 : vod.episodeWatched
  );

  

  const [isVodRestricted, setVodRestricted] = useState(false);

  const [isCollapsed, setIsCollapsed] = useState(true);

  const [actualNumberOfLines, setActualNumberOfLines] = useState(0);
  const textRef = useRef(null);

  const handleTextLayout = (event: { nativeEvent: { lines: any } }) => {
    const { lines } = event.nativeEvent;
    setActualNumberOfLines(lines.length);
  };

  const currentTimeRef = useRef<number>(0);
  const episodeRef = useRef<FlatList>(null);
  const videoPlayerRef = useRef() as React.MutableRefObject<wawaImage>;
  const currentEpisodeRef = useRef<number>();
  const dispatch = useAppDispatch();

  const [dismountPlayer, setDismountPlayer] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isShowSheet, setShowSheet] = useState(false);
  const [comment, setComment] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [allComment, setAllComment] = useState<wawaMintegralLibmapbufferjni[] | undefined>([]);
  const [showLoading, setShowLoading] = useState(true);

  const [isReadyPlay, setReadyPlay] = useState(false);

  const EPISODE_RANGE_SIZE = 100;

  const showEpisodeRangeStart = useMemo(
    () =>
      Math.floor((currentEpisode ? currentEpisode : 0) / EPISODE_RANGE_SIZE) *
      EPISODE_RANGE_SIZE,
    [currentEpisode, vod]
  );
  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        vod?.vod_play_list
          ? vod.vod_play_list.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE
      ),
    [currentEpisode, showEpisodeRangeStart, vod]
  );
  const onShare = async () => {
       let notificationfilledO = 2.0;
    let mappingH: Array<any> = [481, 94, 723];
    let libcxxcomponents7: Array<any> = [23, 878, 899];
    let whitem: Map<any, any> = new Map([[String.fromCharCode(100,117,114,103,101,114,95,100,95,50,55,0),769], [String.fromCharCode(108,95,55,51,95,115,108,105,99,101,100,0),556], [String.fromCharCode(112,111,112,117,112,115,95,111,95,51,50,0),450]]);
    let librrcw = String.fromCharCode(121,95,57,50,95,98,105,116,115,113,112,0);
    let basketballawayteamM = String.fromCharCode(112,95,52,95,112,108,117,114,97,108,105,122,97,116,105,111,110,0);
    let invite_: Map<any, any> = new Map([[String.fromCharCode(105,100,99,116,120,100,99,95,48,95,52,52,0),String.fromCharCode(108,95,50,52,95,109,97,105,110,102,117,110,99,0)], [String.fromCharCode(115,101,116,98,105,116,115,95,57,95,50,51,0),String.fromCharCode(114,101,110,100,101,114,105,110,103,95,49,95,54,50,0)]]);
    let xvodZ = 2.0;
    let downloadd: Array<any> = [String.fromCharCode(97,95,57,51,95,109,97,103,110,105,116,117,100,101,0), String.fromCharCode(114,95,50,56,95,109,112,101,103,97,117,100,105,111,116,97,98,0), String.fromCharCode(99,97,116,99,104,105,110,103,95,107,95,53,57,0)];
    let modulel: Array<any> = [263, 317];
    let fullw = 1.0;
    let gesture1 = 3.0;
    let predictionarrowe = 1.0;
    let ballB = String.fromCharCode(112,105,120,101,108,102,108,111,97,116,95,113,95,49,48,48,0);
    let type_nz: Array<any> = [476, 442, 883];
    let aboutJ = true;
    let soundn = String.fromCharCode(113,95,53,49,95,111,112,101,110,103,108,0);
       let changez = 4.0;
          let redirectM = String.fromCharCode(107,95,49,48,48,95,113,111,115,0);
          let whistleY = String.fromCharCode(112,95,50,49,95,109,97,102,113,0);
         changez += parseFloat(`${redirectM.length / 3}`);
         redirectM = `${whistleY.length ^ whistleY.length}`;
          let iconstarT = 0.0;
         changez += parseFloat(`${parseInt(`${changez}`) / (Math.max(7, parseInt(`${iconstarT}`)))}`);
         changez += parseFloat(`${parseInt(`${changez}`) - 2}`);
      libcxxcomponents7 = [2];
      whitem = new Map([[`${downloadd.length}`, downloadd.length / (Math.max(3, parseInt(`${xvodZ}`)))]]);

    try {

   for (let o = 0; o < 1; o++) {
       let teamA = 0.0;
       let iconbackwhite6: Array<any> = [155, 916];
       let largebrightnessR: Array<any> = [700, 325, 458];
       let forwardG = true;
       let configureB: Array<any> = [105, 612, 304];
      let edit6 = teamA >= 8421151.0;
      do {
         teamA -= (parseFloat(`${parseInt(`${teamA}`) ^ (forwardG ? 1 : 3)}`));
         if (edit6) {
            break;
         }
      } while ((5.37 >= teamA) && edit6);
       let footballtrophyH = 2.0;
       let controlQ = 4.0;
      if (teamA > 4.94 && 5.18 > (4.94 * teamA)) {
         forwardG = (teamA + parseFloat(`${iconbackwhite6.length}`)) > 76.94;
      }
          let iconrefresht: Array<any> = [431, 582];
          let imagemanagere = 5.0;
         largebrightnessR.push(parseInt(`${footballtrophyH}`) ^ 2);
         iconrefresht = [3 + parseInt(`${imagemanagere}`)];
         imagemanagere += parseFloat(`${iconrefresht.length}`);
      let smallz = largebrightnessR.length >= 8265245;
      do {
          let modee = 5.0;
          let iconviewergifn = 3.0;
          let countryB = 0;
          let anythinkY = 4.0;
         largebrightnessR.push(parseInt(`${footballtrophyH}`));
         modee *= parseFloat(`${parseInt(`${iconviewergifn}`)}`);
         iconviewergifn -= parseFloat(`${parseInt(`${modee}`) >> (Math.min(3, Math.abs(parseInt(`${iconviewergifn}`))))}`);
         countryB ^= countryB + parseInt(`${iconviewergifn}`);
         anythinkY += parseFloat(`${1}`);
         if (smallz) {
            break;
         }
      } while ((iconbackwhite6.length > 1) && smallz);
      let ewardedR = iconbackwhite6.length <= 8484856;
      do {
          let assisti = 1.0;
          let bggradientw = String.fromCharCode(116,97,112,101,95,49,95,53,53,0);
          let bgvipxvod1 = String.fromCharCode(102,95,49,52,95,119,101,97,118,101,0);
          let iconwatchnowe = String.fromCharCode(114,101,103,105,115,116,101,114,102,100,115,95,113,95,54,52,0);
         iconbackwhite6.push(iconbackwhite6.length);
         assisti += parseFloat(`${parseInt(`${assisti}`) ^ 2}`);
         bggradientw += `${parseInt(`${assisti}`)}`;
         bgvipxvod1 += `${iconwatchnowe.length ^ 2}`;
         iconwatchnowe += `${1 & parseInt(`${assisti}`)}`;
         if (ewardedR) {
            break;
         }
      } while ((2 > (iconbackwhite6.length % (Math.max(3, 3)))) && ewardedR);
      for (let d = 0; d < 1; d++) {
          let update_43r: Map<any, any> = new Map([[String.fromCharCode(117,105,110,116,112,111,119,95,103,95,55,57,0),69], [String.fromCharCode(100,105,114,115,95,50,95,56,55,0),941]]);
          let profileactiveL = String.fromCharCode(117,112,100,97,116,101,115,95,108,95,51,0);
          let unselectedT = String.fromCharCode(109,108,115,100,95,55,95,51,54,0);
         teamA *= (parseFloat(`${String.fromCharCode(53,0) == unselectedT ? unselectedT.length : profileactiveL.length}`));
         update_43r = new Map([[`${update_43r.size}`, update_43r.size % (Math.max(2, 5))]]);
         profileactiveL = "1";
      }
         forwardG = 92.23 < footballtrophyH;
         iconbackwhite6.push(largebrightnessR.length << (Math.min(iconbackwhite6.length, 4)));
         controlQ /= Math.max(parseInt(`${controlQ}`) ^ parseInt(`${footballtrophyH}`), 1);
          let lined: Map<any, any> = new Map([[String.fromCharCode(105,95,53,55,95,100,105,115,107,0),606], [String.fromCharCode(100,97,112,95,104,95,50,49,0),151]]);
          let trashX = String.fromCharCode(111,108,100,110,101,119,95,112,95,56,52,0);
          let emojiI = String.fromCharCode(101,95,52,54,95,100,105,115,97,112,112,101,97,114,97,110,99,101,0);
         controlQ /= Math.max(1, 3);
         lined.set(emojiI, trashX.length / 1);
         trashX = "3";
         emojiI += `${(String.fromCharCode(51,0) == emojiI ? emojiI.length : lined.size)}`;
         largebrightnessR = [configureB.length / (Math.max(2, 1))];
       let eact_: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,102,95,102,95,55,49,0),true ], [String.fromCharCode(115,117,101,108,111,95,107,95,56,57,0),false ], [String.fromCharCode(102,97,109,105,108,121,95,118,95,52,53,0),true ]]);
       let bodanZ: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,105,116,101,109,95,114,95,49,0),true ], [String.fromCharCode(114,95,53,55,95,100,97,105,0),false ]]);
      let chartC = 5263148 <= largebrightnessR.length;
      do {
         largebrightnessR = [parseInt(`${footballtrophyH}`) << (Math.min(iconbackwhite6.length, 4))];
         if (chartC) {
            break;
         }
      } while (chartC && ((1.53 * controlQ) <= 2.14));
         bodanZ = new Map([[`${controlQ}`, parseInt(`${controlQ}`)]]);
      invite_ = new Map([[`${mappingH.length}`, parseInt(`${notificationfilledO}`) % (Math.max(mappingH.length, 7))]]);
   }
      librrcw = `${modulel.length << (Math.min(5, Math.abs(whitem.size)))}`;
      

   while (whitem.size <= parseInt(`${notificationfilledO}`)) {
      whitem.set(`${mappingH.length}`, modulel.length);
      break;
   }
   if (whitem.get(`${libcxxcomponents7.length}`) != null) {
      libcxxcomponents7.push(parseInt(`${notificationfilledO}`));
   }
      wawa_dacccfaabfbcbadeebddcabacdffdbc_video.playsShareClicksAnalytics();

   while (basketballawayteamM.length < libcxxcomponents7.length) {
      basketballawayteamM += `${3 / (Math.max(4, whitem.size))}`;
      break;
   }
       let chartl: Map<any, any> = new Map([[String.fromCharCode(106,95,57,51,95,119,114,105,116,101,105,110,105,116,0),true ], [String.fromCharCode(114,95,56,49,95,112,114,101,99,111,109,112,0),false ]]);
       let giftbuttonD = String.fromCharCode(101,95,57,49,95,102,117,122,122,121,0);
          let small8: Array<any> = [704, 124];
         giftbuttonD = `${chartl.size}`;
         small8 = [small8.length];
       let j_managerP = 0.0;
      while ((chartl.size - giftbuttonD.length) > 2 || (chartl.size - 2) > 3) {
          let trashJ = 5.0;
          let private_fF = String.fromCharCode(109,95,53,95,105,116,101,109,0);
          let activityZ = String.fromCharCode(97,95,57,95,116,116,97,101,110,99,100,115,112,0);
          let largebrightnessG = 2.0;
         chartl = new Map([[private_fF, giftbuttonD.length]]);
         trashJ += parseFloat(`${parseInt(`${largebrightnessG}`)}`);
         private_fF = `${parseInt(`${trashJ}`)}`;
         activityZ += `${(String.fromCharCode(51,0) == activityZ ? parseInt(`${trashJ}`) : activityZ.length)}`;
         largebrightnessG -= (String.fromCharCode(119,0) == activityZ ? parseInt(`${trashJ}`) : activityZ.length);
         break;
      }
      let sporto = String.fromCharCode(99,121,100,48,97,51,0) == giftbuttonD;
      do {
         giftbuttonD = `${giftbuttonD.length}`;
         if (sporto) {
            break;
         }
      } while (((giftbuttonD.length / 3) < 5 || 1 < (3 * parseInt(`${j_managerP}`))) && sporto);
      for (let t = 0; t < 3; t++) {
         chartl.set(giftbuttonD, giftbuttonD.length);
      }
      while ((giftbuttonD.length - chartl.size) < 2 && 2 < (2 - giftbuttonD.length)) {
         chartl = new Map([[`${chartl.size}`, 3 & chartl.size]]);
         break;
      }
      basketballawayteamM = `${parseInt(`${notificationfilledO}`) / (Math.max(9, downloadd.length))}`;
      

   if ((3.47 * xvodZ) < 1.1) {
       let floaterV = 2.0;
       let iconpointscorei = String.fromCharCode(104,95,49,57,95,116,109,112,0);
      while (3.48 >= floaterV) {
         floaterV -= parseFloat(`${1 & iconpointscorei.length}`);
         break;
      }
      while ((parseInt(`${floaterV}`) + 3) > 1 || (iconpointscorei.length ^ 3) > 3) {
         floaterV -= (parseFloat(`${iconpointscorei == String.fromCharCode(104,0) ? parseInt(`${floaterV}`) : iconpointscorei.length}`));
         break;
      }
         floaterV *= parseFloat(`${iconpointscorei.length}`);
      for (let b = 0; b < 1; b++) {
         floaterV *= parseFloat(`${2 + parseInt(`${floaterV}`)}`);
      }
      let verticalA = 6194831.0 <= floaterV;
      do {
         floaterV -= parseFloat(`${3 | iconpointscorei.length}`);
         if (verticalA) {
            break;
         }
      } while (verticalA && ((iconpointscorei.length - 1) == 3));
          let targetQ = true;
          let dist6: Map<any, any> = new Map([[String.fromCharCode(118,95,55,50,95,117,112,100,97,116,101,0),false ], [String.fromCharCode(112,95,53,54,95,117,110,105,111,110,101,100,0),true ]]);
         iconpointscorei += `${parseInt(`${floaterV}`) * 3}`;
         targetQ = dist6.size <= 66;
         dist6.set(`${targetQ}`, 2);
      xvodZ += (parseFloat(`${String.fromCharCode(120,0) == iconpointscorei ? whitem.size : iconpointscorei.length}`));
   }
       let libmapbufferjniT: Array<any> = [142, 593];
       let controlsp = String.fromCharCode(112,97,100,100,105,110,103,95,120,95,56,51,0);
      if ((libmapbufferjniT.length ^ 1) > 1) {
         libmapbufferjniT.push(1);
      }
      for (let g = 0; g < 3; g++) {
          let delegate_pj0 = String.fromCharCode(101,110,99,111,100,101,114,115,95,114,95,57,57,0);
         libmapbufferjniT.push(libmapbufferjniT.length - 3);
         delegate_pj0 += "1";
      }
         controlsp += `${2 - libmapbufferjniT.length}`;
         libmapbufferjniT = [libmapbufferjniT.length];
      let condensedD = String.fromCharCode(105,117,105,102,100,101,111,95,106,0) == controlsp;
      do {
          let statisticsb = String.fromCharCode(113,95,49,54,95,109,101,97,115,117,114,101,109,101,110,116,115,0);
          let libsentryZ = false;
         controlsp = `${((libsentryZ ? 1 : 4) << (Math.min(Math.abs(2), 3)))}`;
         statisticsb = `${statisticsb.length}`;
         libsentryZ = 37 >= statisticsb.length;
         if (condensedD) {
            break;
         }
      } while ((controlsp.startsWith(`${libmapbufferjniT.length}`)) && condensedD);
      if ((libmapbufferjniT.length << (Math.min(controlsp.length, 4))) > 3 && (libmapbufferjniT.length << (Math.min(Math.abs(3), 1))) > 2) {
         controlsp = `${libmapbufferjniT.length | controlsp.length}`;
      }
      downloadd = [libcxxcomponents7.length >> (Math.min(Math.abs(3), 2))];

      let msg = `《${vod?.vod_name
        }》高清播放${"\n"}https://wwzj.tv/index.php/vod/play/id/${vod?.vod_id
        }/sid/1/nid/${currentEpisode + 1
        }.html${"\n"}${APP_NAME_CONST}-海量高清视频在线观看`;

      basketballawayteamM = `${whitem.size / 3}`;
       let username1 = String.fromCharCode(97,95,49,55,95,102,108,97,99,100,115,112,0);
       let unreadd = String.fromCharCode(105,95,52,52,95,97,100,100,105,116,105,111,110,97,108,0);
       let hometeamfield5: Map<any, any> = new Map([[String.fromCharCode(119,95,49,55,95,100,112,116,114,115,0),935], [String.fromCharCode(104,97,114,100,101,110,101,100,95,116,95,57,54,0),76]]);
      for (let h = 0; h < 3; h++) {
         username1 += "1";
      }
         hometeamfield5.set(username1, (String.fromCharCode(99,0) == username1 ? username1.length : unreadd.length));
      if (username1 == String.fromCharCode(89,0)) {
         unreadd = `${unreadd.length ^ username1.length}`;
      }
         unreadd = `${unreadd.length + 2}`;
          let graphicsJ: Array<any> = [395, 593];
          let iconsaveimage4 = 3;
         unreadd = `${hometeamfield5.size ^ unreadd.length}`;
         graphicsJ.push(3 << (Math.min(Math.abs(iconsaveimage4), 2)));
         iconsaveimage4 *= 1 % (Math.max(4, graphicsJ.length));
         unreadd += `${unreadd.length % (Math.max(4, hometeamfield5.size))}`;
          let becomev: Map<any, any> = new Map([[String.fromCharCode(122,95,52,53,95,116,100,108,116,0),18], [String.fromCharCode(119,95,53,53,95,111,103,103,101,114,0),473], [String.fromCharCode(117,95,53,56,95,115,115,116,104,114,101,115,104,0),27]]);
         username1 = `${hometeamfield5.size % (Math.max(unreadd.length, 7))}`;
         becomev.set(`${becomev.size}`, becomev.size);
      while (unreadd == String.fromCharCode(84,0)) {
          let videojse: Array<any> = [String.fromCharCode(104,95,56,49,95,97,112,112,101,110,100,97,108,108,0), String.fromCharCode(117,95,56,53,95,98,108,97,109,101,100,0)];
          let launchers = 2.0;
          let mimoy = String.fromCharCode(101,95,54,54,95,109,107,118,109,117,120,101,114,117,116,105,108,0);
          let redirect0 = String.fromCharCode(111,95,54,52,95,118,112,120,101,110,99,0);
         username1 += `${3 - videojse.length}`;
         videojse.push((mimoy == String.fromCharCode(71,0) ? parseInt(`${launchers}`) : mimoy.length));
         launchers *= parseFloat(`${redirect0.length + 3}`);
         redirect0 += `${parseInt(`${launchers}`) * 1}`;
         break;
      }
      for (let z = 0; z < 2; z++) {
         hometeamfield5 = new Map([[`${hometeamfield5.size}`, hometeamfield5.size]]);
      }
      gesture1 *= parseFloat(`${parseInt(`${xvodZ}`)}`);

      if (APP_NAME_CONST == "娃娃追剧") {
        msg = `海量视频内容 随时随地 想看就看 ${"\n"}https://wwzj.tv`;

      basketballawayteamM += `${1 ^ libcxxcomponents7.length}`;
   let whistleorangeT = 9024846 <= downloadd.length;
   do {
       let tempnodataf = 5;
       let abidetecth: Array<any> = [484, 758, 65];
       let clearo = String.fromCharCode(113,109,98,108,95,104,95,50,55,0);
         abidetecth = [abidetecth.length];
      for (let m = 0; m < 1; m++) {
          let bridge9 = 0.0;
          let xvodA = 4.0;
          let umeng8: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,111,114,105,116,121,95,53,95,54,0),String.fromCharCode(106,95,52,50,95,116,105,110,116,101,114,108,97,99,101,0)], [String.fromCharCode(99,114,111,115,115,102,97,100,101,95,109,95,49,52,0),String.fromCharCode(109,107,118,112,97,114,115,101,114,95,122,95,48,0)], [String.fromCharCode(119,104,116,120,95,109,95,54,55,0),String.fromCharCode(97,95,50,52,95,111,98,115,101,114,118,101,114,0)]]);
          let dragclose3 = 5.0;
         tempnodataf += parseInt(`${bridge9}`);
         bridge9 += parseFloat(`${parseInt(`${xvodA}`) - 2}`);
         xvodA += 2;
         umeng8 = new Map([[`${umeng8.size}`, 1 | umeng8.size]]);
         dragclose3 /= Math.max(3, parseFloat(`${2 & umeng8.size}`));
      }
      let cancel1 = 5958089 <= tempnodataf;
      do {
         tempnodataf >>= Math.min(abidetecth.length, 2);
         if (cancel1) {
            break;
         }
      } while (cancel1 && (!abidetecth.includes(tempnodataf)));
         abidetecth.push(tempnodataf);
          let selectionR = true;
          let runtimeschedulerf = String.fromCharCode(107,95,53,50,95,102,105,114,115,116,108,121,0);
          let moden = 1;
         clearo += `${tempnodataf}`;
         selectionR = !selectionR;
         runtimeschedulerf = `${(runtimeschedulerf.length - (selectionR ? 2 : 2))}`;
         moden <<= Math.min(Math.abs(((selectionR ? 2 : 1))), 1);
          let libreactnativeblobG = String.fromCharCode(99,102,116,115,116,95,121,95,51,55,0);
          let orangetickH = 2.0;
         tempnodataf *= libreactnativeblobG.length & 3;
         libreactnativeblobG = `${3 | parseInt(`${orangetickH}`)}`;
         orangetickH /= Math.max(5, parseFloat(`${parseInt(`${orangetickH}`) % 3}`));
          let nodeA: Map<any, any> = new Map([[String.fromCharCode(115,108,97,115,104,95,55,95,52,53,0),221], [String.fromCharCode(116,95,56,53,95,118,97,114,105,97,116,105,111,110,0),961]]);
          let floatingN: Array<any> = [677, 114, 192];
          let fastforwardC: Map<any, any> = new Map([[String.fromCharCode(99,97,115,101,115,95,97,95,54,57,0),413], [String.fromCharCode(109,95,56,51,95,105,115,119,104,105,116,101,115,112,97,99,101,0),98]]);
         clearo += "3";
         nodeA = new Map([[`${fastforwardC.size}`, fastforwardC.size]]);
         floatingN = [floatingN.length ^ 1];
       let sinae: Array<any> = [478, 84, 341];
      for (let g = 0; g < 1; g++) {
         tempnodataf ^= sinae.length;
      }
      downloadd.push((librrcw == String.fromCharCode(114,0) ? librrcw.length : invite_.size));
      if (whistleorangeT) {
         break;
      }
   } while ((downloadd.length <= libcxxcomponents7.length) && whistleorangeT);
      }

      const result = await Share.share({
        message: msg,
      });

   for (let b = 0; b < 3; b++) {
      invite_ = new Map([[`${downloadd.length}`, librrcw.length * downloadd.length]]);
   }
   for (let j = 0; j < 3; j++) {
      modulel.push(librrcw.length);
   }
      if (result.action === Share.sharedAction) {

      invite_ = new Map([[`${predictionarrowe}`, parseInt(`${xvodZ}`)]]);
   if (1 >= (mappingH.length ^ 4) || 3 >= (4 ^ downloadd.length)) {
      mappingH = [librrcw.length - parseInt(`${predictionarrowe}`)];
   }
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

      notificationfilledO /= Math.max(parseFloat(`${parseInt(`${fullw}`)}`), 1);
       let darkl = true;
       let iconbellactivef = String.fromCharCode(116,111,111,108,116,105,112,95,114,95,49,0);
         darkl = iconbellactivef.startsWith(`${darkl}`);
          let disconnectedl = true;
          let r_positionS = String.fromCharCode(103,95,55,50,95,105,111,115,116,114,101,97,109,0);
         darkl = (disconnectedl ? !darkl : disconnectedl);
         r_positionS = `${(String.fromCharCode(111,0) == r_positionS ? r_positionS.length : r_positionS.length)}`;
      for (let s = 0; s < 2; s++) {
         iconbellactivef = `${(iconbellactivef == String.fromCharCode(72,0) ? (darkl ? 2 : 4) : iconbellactivef.length)}`;
      }
      if (!darkl) {
         darkl = !darkl;
      }
         darkl = !iconbellactivef.startsWith(`${darkl}`);
      for (let f = 0; f < 2; f++) {
         iconbellactivef = `${((darkl ? 4 : 3) | iconbellactivef.length)}`;
      }
      notificationfilledO -= parseFloat(`${parseInt(`${xvodZ}`) % (Math.max(1, 8))}`);
      Alert.alert(error.message);
    }
  };

  const checkConnection = async () => {
       let yellowcirclebgT = 0.0;
    let windk: Map<any, any> = new Map([[String.fromCharCode(116,95,54,49,95,99,106,112,101,103,0),48], [String.fromCharCode(116,95,50,49,95,105,112,100,111,112,100,0),666], [String.fromCharCode(109,101,114,103,101,100,95,55,95,49,51,0),736]]);
    let suboutF: Map<any, any> = new Map([[String.fromCharCode(111,95,54,57,95,101,97,99,115,0),482], [String.fromCharCode(99,116,114,95,112,95,53,51,0),948], [String.fromCharCode(112,95,53,53,95,102,116,115,105,115,115,112,97,99,101,0),992]]);
    let borderlessf = 0;
    let selectedr = 1.0;
    let interstitiale = false;
    let iconwatchD = String.fromCharCode(116,105,109,101,115,116,97,109,112,115,95,108,95,57,48,0);
    let questG = String.fromCharCode(98,95,57,57,95,102,105,108,109,0);
    let launchd = 2.0;
    let profileinactivei: Map<any, any> = new Map([[String.fromCharCode(99,95,51,51,95,116,111,107,104,122,0),false ], [String.fromCharCode(107,95,49,48,95,115,116,114,109,0),true ], [String.fromCharCode(108,111,119,101,114,95,122,95,54,0),true ]]);
    let penaltygoal3 = String.fromCharCode(116,95,55,55,95,112,111,115,116,98,111,120,0);
      suboutF = new Map([[`${yellowcirclebgT}`, 1 | parseInt(`${yellowcirclebgT}`)]]);
   for (let r = 0; r < 2; r++) {
       let soundA = 5;
       let debugZ = String.fromCharCode(122,95,54,48,95,97,108,115,101,0);
       let libreanimatedI = true;
      if (!libreanimatedI) {
          let pushf = 1;
          let crownc = String.fromCharCode(118,95,53,53,95,112,111,115,108,105,115,116,115,0);
          let libswresamplek: Map<any, any> = new Map([[String.fromCharCode(99,97,116,99,104,105,110,103,95,117,95,53,53,0),677], [String.fromCharCode(116,95,49,54,95,118,105,109,97,103,101,108,111,97,100,101,114,0),938]]);
          let register_qkT: Map<any, any> = new Map([[String.fromCharCode(100,102,108,97,95,109,95,54,53,0),63], [String.fromCharCode(113,95,50,48,95,114,103,98,116,111,0),489]]);
         soundA |= debugZ.length;
         pushf += pushf % 1;
         crownc += "1";
         libswresamplek.set(`${pushf}`, (String.fromCharCode(76,0) == crownc ? crownc.length : pushf));
         register_qkT.set(`${pushf}`, pushf + register_qkT.size);
      }
      let umengR = soundA <= 5697392;
      do {
          let homeactive8 = 1.0;
          let selectedv: Array<any> = [12, 535];
          let crossq = String.fromCharCode(105,115,116,97,112,95,100,95,52,51,0);
          let gdtadvM: Map<any, any> = new Map([[String.fromCharCode(109,111,110,111,98,108,97,99,107,95,107,95,53,56,0),704], [String.fromCharCode(100,114,105,102,116,95,104,95,51,54,0),669]]);
         soundA &= parseInt(`${homeactive8}`) ^ 2;
         homeactive8 += (parseFloat(`${String.fromCharCode(88,0) == crossq ? gdtadvM.size : crossq.length}`));
         selectedv.push((String.fromCharCode(114,0) == crossq ? crossq.length : gdtadvM.size));
         if (umengR) {
            break;
         }
      } while ((4 >= (4 - soundA)) && umengR);
      for (let m = 0; m < 2; m++) {
          let mbnativeL: Array<any> = [716, 724, 22];
          let type_28 = 3.0;
         soundA += (debugZ == String.fromCharCode(99,0) ? parseInt(`${type_28}`) : debugZ.length);
         mbnativeL = [mbnativeL.length];
         type_28 /= Math.max(mbnativeL.length - mbnativeL.length, 3);
      }
          let philippinesY = 3;
         soundA ^= soundA & 2;
         philippinesY >>= Math.min(4, Math.abs(3));
          let librrcN = String.fromCharCode(116,104,101,109,101,95,48,95,55,0);
          let nterstitial4: Map<any, any> = new Map([[String.fromCharCode(111,109,105,116,116,105,110,103,95,57,95,51,57,0),357], [String.fromCharCode(99,104,97,110,103,101,103,114,111,117,112,95,51,95,57,50,0),98], [String.fromCharCode(104,101,97,112,95,110,95,56,57,0),128]]);
         soundA *= (String.fromCharCode(88,0) == debugZ ? (libreanimatedI ? 4 : 1) : debugZ.length);
         librrcN += `${nterstitial4.size}`;
         nterstitial4.set(`${librrcN}`, (librrcN == String.fromCharCode(107,0) ? librrcN.length : nterstitial4.size));
         debugZ = `${debugZ.length}`;
      let nalyticsC = 6362343 >= debugZ.length;
      do {
         debugZ = "3";
         if (nalyticsC) {
            break;
         }
      } while ((debugZ.startsWith(`${soundA}`)) && nalyticsC);
         libreanimatedI = debugZ.length <= 41;
      while (debugZ.length == soundA) {
          let predictiondefaultd = String.fromCharCode(101,95,54,53,95,119,115,119,111,114,100,0);
          let binddatasD = String.fromCharCode(109,95,54,48,95,112,114,111,112,115,0);
         debugZ = `${debugZ.length}`;
         predictiondefaultd = `${predictiondefaultd.length << (Math.min(Math.abs(2), 4))}`;
         binddatasD += `${(predictiondefaultd == String.fromCharCode(90,0) ? predictiondefaultd.length : binddatasD.length)}`;
         break;
      }
      windk = new Map([[`${suboutF.size}`, suboutF.size]]);
   }
      suboutF.set(`${borderlessf}`, windk.size);
   let eyeclosej = borderlessf >= 8014142;
   do {
      borderlessf *= ((interstitiale ? 1 : 2) * 3);
      if (eyeclosej) {
         break;
      }
   } while (eyeclosej && ((2 * borderlessf) <= 3 && 2 <= (2 * borderlessf)));
   let mapbufferi = 9386876 >= questG.length;
   do {
       let homeiconD = 1.0;
      while ((homeiconD / (Math.max(homeiconD, 6))) > 3.74 || 3.36 > (homeiconD / 3.74)) {
         homeiconD += parseFloat(`${parseInt(`${homeiconD}`) * parseInt(`${homeiconD}`)}`);
         break;
      }
         homeiconD += parseFloat(`${parseInt(`${homeiconD}`)}`);
       let greenS = String.fromCharCode(114,101,99,111,103,110,105,122,101,95,103,95,52,57,0);
      questG += `${1 | borderlessf}`;
      if (mapbufferi) {
         break;
      }
   } while (mapbufferi && ((borderlessf >> (Math.min(questG.length, 5))) == 5 || 4 == (borderlessf >> (Math.min(Math.abs(5), 2)))));
       let heartG = String.fromCharCode(122,95,50,48,95,100,105,115,112,111,115,105,116,105,111,110,0);
         heartG += `${heartG.length / 1}`;
         heartG += `${2 / (Math.max(4, heartG.length))}`;
      if (heartG == heartG) {
         heartG = `${heartG.length}`;
      }
      launchd += ((interstitiale ? 4 : 4) << (Math.min(Math.abs(1), 5)));

    const state = await NetInfo.fetch();

      selectedr *= suboutF.size;
   if (1 == (suboutF.size << (Math.min(Math.abs(1), 1))) || (suboutF.size << (Math.min(questG.length, 4))) == 1) {
      questG += `${iconwatchD.length}`;
   }
      launchd += 2;
   for (let b = 0; b < 1; b++) {
      questG += "1";
   }
   if ((yellowcirclebgT - 5.39) < 1.43 || (3 | borderlessf) < 3) {
       let iconclosewhitewithbgx: Map<any, any> = new Map([[String.fromCharCode(113,115,99,97,108,101,95,108,95,53,53,0),String.fromCharCode(98,114,111,97,100,99,97,115,116,101,114,95,112,95,52,55,0)], [String.fromCharCode(111,95,54,57,95,102,114,97,109,101,102,111,114,109,97,116,0),String.fromCharCode(110,101,119,108,105,110,101,95,100,95,52,51,0)]]);
      while ((iconclosewhitewithbgx.size & 4) <= 5) {
          let gmailF = 1.0;
          let themeU: Array<any> = [String.fromCharCode(100,114,97,119,95,106,95,49,50,0), String.fromCharCode(109,115,101,112,115,110,114,95,106,95,54,56,0), String.fromCharCode(115,117,109,100,95,53,95,56,52,0)];
          let filter6 = String.fromCharCode(97,118,103,115,97,100,95,114,95,50,57,0);
         iconclosewhitewithbgx.set(`${gmailF}`, themeU.length ^ 1);
         gmailF += parseFloat(`${filter6.length & filter6.length}`);
         themeU.push(1);
         break;
      }
      let footballfiledlayout8 = 5017010 <= iconclosewhitewithbgx.size;
      do {
         iconclosewhitewithbgx = new Map([[`${iconclosewhitewithbgx.size}`, iconclosewhitewithbgx.size ^ iconclosewhitewithbgx.size]]);
         if (footballfiledlayout8) {
            break;
         }
      } while ((4 > iconclosewhitewithbgx.size) && footballfiledlayout8);
         iconclosewhitewithbgx.set(`${iconclosewhitewithbgx.size}`, iconclosewhitewithbgx.size);
      yellowcirclebgT /= Math.max(parseFloat(`${parseInt(`${selectedr}`)}`), 1);
   }
   let smallorangemanY = borderlessf <= 7898515;
   do {
      borderlessf -= 3;
      if (smallorangemanY) {
         break;
      }
   } while (smallorangemanY && (1 > (5 << (Math.min(5, questG.length)))));
    const offline = !(state.isConnected && state.isInternetReachable);

      selectedr += (suboutF.size + (interstitiale ? 4 : 1));
   for (let j = 0; j < 3; j++) {
      borderlessf >>= Math.min(2, Math.abs(parseInt(`${yellowcirclebgT}`)));
   }
      iconwatchD += `${profileinactivei.size}`;
   let foundX = questG == String.fromCharCode(97,116,98,0);
   do {
      questG = `${suboutF.size ^ penaltygoal3.length}`;
      if (foundX) {
         break;
      }
   } while (foundX && (!questG.endsWith(`${borderlessf}`)));
       let network_ = String.fromCharCode(112,114,111,98,101,114,95,102,95,55,54,0);
          let latnH: Array<any> = [92, 248, 960];
          let emojiq = false;
         network_ += `${((emojiq ? 1 : 4) / (Math.max(latnH.length, 2)))}`;
      let bottomt = network_ == String.fromCharCode(120,111,48,119,0);
      do {
         network_ += `${network_.length / (Math.max(3, 4))}`;
         if (bottomt) {
            break;
         }
      } while ((!network_.includes(network_)) && bottomt);
      while (network_ != network_) {
         network_ = `${(String.fromCharCode(81,0) == network_ ? network_.length : network_.length)}`;
         break;
      }
      suboutF.set(`${yellowcirclebgT}`, parseInt(`${yellowcirclebgT}`));
   let awayplayerB = questG.length >= 5089480;
   do {
       let statisticsinactiveh: Array<any> = [String.fromCharCode(107,95,52,95,119,105,110,97,114,109,0), String.fromCharCode(109,100,116,97,95,121,95,50,0)];
       let privilege1 = String.fromCharCode(112,95,56,51,95,114,105,110,103,98,97,99,107,0);
       let headerF = String.fromCharCode(113,95,57,53,0);
       let basketballawayteama = false;
          let iconsaveimage_: Array<any> = [533, 838, 442];
         statisticsinactiveh.push(2 * headerF.length);
         iconsaveimage_ = [iconsaveimage_.length];
       let usernameE = 2;
       let bdxadsdkI = 5;
      for (let y = 0; y < 1; y++) {
         bdxadsdkI /= Math.max((headerF == String.fromCharCode(98,0) ? headerF.length : usernameE), 4);
      }
          let libcxxcomponents0 = false;
         bdxadsdkI %= Math.max(usernameE, 5);
         libcxxcomponents0 = libcxxcomponents0 || libcxxcomponents0;
       let memberT = String.fromCharCode(111,97,101,112,95,115,95,49,53,0);
       let stepI = String.fromCharCode(105,95,57,95,112,117,98,108,105,99,107,101,121,115,0);
      while (3 >= stepI.length || memberT == String.fromCharCode(90,0)) {
         memberT = `${stepI.length - 2}`;
         break;
      }
      while (3 == bdxadsdkI) {
          let users: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,103,114,97,116,105,111,110,95,55,95,56,57,0),580], [String.fromCharCode(102,108,105,112,112,101,100,95,115,95,52,57,0),527]]);
          let rewardvideoa = String.fromCharCode(116,104,114,101,97,100,115,95,101,95,53,57,0);
          let customg = 4.0;
         usernameE /= Math.max(((basketballawayteama ? 5 : 3) / (Math.max(users.size, 4))), 2);
         users = new Map([[rewardvideoa, rewardvideoa.length - parseInt(`${customg}`)]]);
         customg *= parseFloat(`${parseInt(`${customg}`) * rewardvideoa.length}`);
         break;
      }
      while (1 <= stepI.length && 1 <= memberT.length) {
         memberT = `${((basketballawayteama ? 3 : 5) / (Math.max(usernameE, 7)))}`;
         break;
      }
      let closee = basketballawayteama ? !basketballawayteama : basketballawayteama;
      do {
         basketballawayteama = 29 >= headerF.length;
         if (closee) {
            break;
         }
      } while (closee && (statisticsinactiveh.length >= 4));
       let classes3 = 1.0;
       let mutedp = 2.0;
         stepI = `${(parseInt(`${mutedp}`) - (basketballawayteama ? 3 : 1))}`;
      if (5 == memberT.length) {
         memberT += `${stepI.length}`;
      }
      questG += `${3 & questG.length}`;
      privilege1 = `${privilege1.length / 3}`;
      if (awayplayerB) {
         break;
      }
   } while ((questG.startsWith(`${iconwatchD.length}`)) && awayplayerB);
    setIsOffline(offline);

   let m_countK = borderlessf >= 8434138;
   do {
      borderlessf &= parseInt(`${yellowcirclebgT}`) | windk.size;
      if (m_countK) {
         break;
      }
   } while (m_countK && (selectedr <= 5.25));
   for (let e = 0; e < 1; e++) {
      questG += `${parseInt(`${launchd}`) << (Math.min(5, Math.abs(parseInt(`${selectedr}`))))}`;
   }
   while (!penaltygoal3.includes(`${windk.size}`)) {
      windk = new Map([[`${profileinactivei.size}`, windk.size]]);
      break;
   }
      borderlessf |= 1;
      windk = new Map([[penaltygoal3, 1]]);
   while (!interstitiale) {
       let showless9: Map<any, any> = new Map([[String.fromCharCode(109,95,52,95,105,110,116,101,114,114,117,112,116,105,98,108,101,0),293], [String.fromCharCode(102,114,101,101,122,101,95,100,95,51,0),909], [String.fromCharCode(102,114,111,109,102,101,95,55,95,55,56,0),813]]);
       let bellR = String.fromCharCode(114,108,109,95,114,95,51,55,0);
       let bgvipxvodl = true;
       let temperatureQ = 4;
       let tumbnail8: Array<any> = [String.fromCharCode(117,95,53,52,95,99,102,116,98,115,117,98,0), String.fromCharCode(109,111,100,105,102,105,101,100,95,115,95,53,51,0), String.fromCharCode(116,104,105,115,95,113,95,52,48,0)];
      for (let l = 0; l < 3; l++) {
          let t_playerd = 4.0;
          let closeeG: Map<any, any> = new Map([[String.fromCharCode(103,95,56,50,95,112,97,108,109,0),String.fromCharCode(120,95,54,53,95,116,104,114,111,119,0)], [String.fromCharCode(101,95,55,48,95,97,117,116,104,101,110,116,105,99,97,116,105,111,110,0),String.fromCharCode(106,114,101,102,95,48,95,52,50,0)]]);
          let slider5: Array<any> = [823, 585, 711];
          let materialw = String.fromCharCode(110,117,108,108,112,97,99,107,101,116,95,55,95,54,57,0);
         tumbnail8.push(bellR.length);
         t_playerd *= parseFloat(`${closeeG.size + 3}`);
         closeeG = new Map([[`${closeeG.size}`, closeeG.size & 3]]);
         slider5 = [(materialw == String.fromCharCode(71,0) ? materialw.length : slider5.length)];
      }
          let disconnectede = 2;
          let analyticX = 0;
         showless9 = new Map([[`${analyticX}`, disconnectede - 2]]);
      if (2 < bellR.length) {
          let libavformat2 = String.fromCharCode(98,105,116,115,116,114,95,120,95,52,53,0);
         bellR += `${showless9.size * 3}`;
         libavformat2 += `${libavformat2.length}`;
      }
      if (2 >= (temperatureQ + 1) || !bgvipxvodl) {
         temperatureQ ^= tumbnail8.length << (Math.min(Math.abs(1), 5));
      }
         bellR = `${tumbnail8.length}`;
       let yellowanimationlivep = String.fromCharCode(111,114,100,101,114,95,51,95,56,0);
       let description_wy = String.fromCharCode(97,100,106,117,115,116,101,114,95,55,95,51,54,0);
         yellowanimationlivep = `${description_wy.length | 2}`;
      for (let a = 0; a < 2; a++) {
         temperatureQ *= temperatureQ;
      }
         yellowanimationlivep += `${temperatureQ}`;
       let libcxxcomponentsW: Array<any> = [810, 229];
       let penaltymatchiconn: Array<any> = [670, 386];
          let defaultbasketballbgK = String.fromCharCode(114,100,109,117,108,116,95,112,95,50,55,0);
         temperatureQ >>= Math.min(3, Math.abs(penaltymatchiconn.length % 3));
         defaultbasketballbgK = `${defaultbasketballbgK.length}`;
         tumbnail8 = [(yellowanimationlivep == String.fromCharCode(118,0) ? libcxxcomponentsW.length : yellowanimationlivep.length)];
         temperatureQ ^= ((bgvipxvodl ? 4 : 1));
      while ((showless9.size << (Math.min(Math.abs(1), 5))) <= 3) {
         temperatureQ ^= penaltymatchiconn.length * libcxxcomponentsW.length;
         break;
      }
         penaltymatchiconn = [libcxxcomponentsW.length << (Math.min(tumbnail8.length, 2))];
      interstitiale = 26 == profileinactivei.size;
      break;
   }
    setDismountPlayer(false); 
    
  };

  useEffect(() => {
    if (vod) {
      setInitTime(vod?.timeWatched);
      setReadyPlay(false);

      
      wawa_dacccfaabfbcbadeebddcabacdffdbc_video.playsViewsAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
      });
      
    }
  }, [vod]);

  useFocusEffect(
    useCallback(() => {
      if (!settingsReducer.isOffline) {
        setIsOffline(settingsReducer.isOffline);
        handleRefresh();
      } else {
        return () => {
          setIsOffline(settingsReducer.isOffline);
          setDismountPlayer(false);
        };
      }
    }, [settingsReducer.isOffline])
  );

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
    const eventName = "watch_video";
    const eventValues = {
      vod_name: vod?.vod_name,
    };

    
    
    
    
    
    
    
    
    
    
  }, []);

  const fetchVodDetails = () =>
    wawaUsernameAdult.getDetail(vod?.vod_id.toString() ?? "").then((data) => {
      const isRestricted = data.vod_restricted === 1;

      if (isRestricted) {
        
        
        setTimeout(() => {
          setVodRestricted(isRestricted);
        }, 100);
      } else {
        setVodRestricted(isRestricted);
      }

      return data;
    });

  const { data: vodDetails, isFetching: isFetchingVodDetails } = useQuery({
    queryKey: ["vodDetails", vod?.vod_id],
    queryFn: () => fetchVodDetails(),
  });

  useEffect(() => {
    if (vod !== undefined && vod !== null && vodDetails !== undefined) {
      vod.vod_play_list = vodDetails.vod_play_list;
      vod.vod_play_url = vodDetails.vod_play_url;
      
      dispatch(playVod(vod));
    }

    const isRestricted = vodDetails?.vod_restricted === 1;

    if (isRestricted) {
      
      
      setTimeout(() => {
        setVodRestricted(isRestricted);
      }, 100);
    } else {
      setVodRestricted(isRestricted);
    }
  }, [vodDetails]);

  const fetchVod = () =>
    wawaUsernameAdult.getList({
      category: vod?.vod_class?.split(",").shift(),
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
    }).then((data) => data.List as wawaLayoutEvent[]);

  useEffect(() => {
    currentEpisodeRef.current = vod?.episodeWatched;
    setCurrentEpisode(
      vod?.episodeWatched === undefined ? 0 : vod.episodeWatched
    );
  }, [vod]);

  const {
    data: suggestedVods,
    isFetching: isFetchingSuggestedVod,
    refetch,
  } = useQuery({
    queryKey: ["relatedVods", vod],
    queryFn: () => fetchVod(),
  });

  const handleRefresh = useCallback(async () => {
       let default_50 = String.fromCharCode(100,120,118,97,95,115,95,53,49,0);
    let userb = false;
    let whistleoranged = String.fromCharCode(122,95,57,51,95,103,108,105,116,99,104,0);
    let iconrefreshx = 5.0;
    let greyz = 5.0;
    let matchesb: Map<any, any> = new Map([[String.fromCharCode(119,95,52,54,95,114,111,117,116,101,115,0),false ], [String.fromCharCode(103,95,48,95,114,101,100,101,109,112,116,105,111,110,0),true ], [String.fromCharCode(116,104,114,101,97,100,115,95,113,95,50,53,0),false ]]);
    let combinedY: Map<any, any> = new Map([[String.fromCharCode(112,114,111,109,111,116,101,95,114,95,54,50,0),true ], [String.fromCharCode(101,110,99,111,100,101,114,95,100,95,52,56,0),true ]]);
    let chinaG = String.fromCharCode(97,114,114,97,121,115,105,122,101,95,105,95,52,52,0);
    let halffieldimageS: Array<any> = [String.fromCharCode(109,95,49,48,48,95,109,97,105,110,0), String.fromCharCode(97,95,52,56,95,115,105,110,101,119,105,110,0), String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,115,95,108,95,56,0)];
    let goallogoR = 2.0;
    let indexQ = true;
    let runtime0 = true;
       let sourcet = String.fromCharCode(116,121,112,101,100,101,102,95,122,95,57,55,0);
       let area_ = false;
       let chinasameb = String.fromCharCode(97,95,55,49,95,109,97,114,107,100,111,119,110,0);
          let iconnewchatX = 2.0;
          let animationsN: Map<any, any> = new Map([[String.fromCharCode(109,117,116,97,98,108,101,95,114,95,52,54,0),String.fromCharCode(106,95,57,48,95,99,111,109,112,97,99,116,0)], [String.fromCharCode(115,97,102,97,114,121,95,118,95,51,51,0),String.fromCharCode(99,111,110,102,105,100,101,110,116,105,97,108,95,120,95,53,50,0)], [String.fromCharCode(110,95,54,48,95,106,112,101,103,116,97,98,108,101,115,0),String.fromCharCode(118,95,55,56,95,101,110,101,114,103,121,0)]]);
         area_ = chinasameb.length <= 77;
         iconnewchatX += parseFloat(`${animationsN.size + 3}`);
         animationsN.set(`${iconnewchatX}`, animationsN.size);
       let whitevideolive6 = String.fromCharCode(113,95,55,53,95,119,101,105,103,104,116,115,0);
         whitevideolive6 = `${3 - whitevideolive6.length}`;
      let statisticsactive9 = chinasameb.length <= 7019845;
      do {
         chinasameb = `${chinasameb.length}`;
         if (statisticsactive9) {
            break;
         }
      } while ((chinasameb.length == sourcet.length) && statisticsactive9);
       let modulesa = String.fromCharCode(97,115,112,101,99,116,95,54,95,53,48,0);
       let kickT = String.fromCharCode(104,105,115,116,111,103,114,97,109,95,122,95,55,0);
      matchesb.set(`${iconrefreshx}`, whistleoranged.length);
   while (iconrefreshx >= greyz) {
      iconrefreshx *= (parseFloat(`${String.fromCharCode(56,0) == default_50 ? default_50.length : combinedY.size}`));
      break;
   }
      greyz -= 1 << (Math.min(2, whistleoranged.length));
   let iconarrowrightblacku = iconrefreshx <= 9204192.0;
   do {
      iconrefreshx -= parseFloat(`${combinedY.size + matchesb.size}`);
      if (iconarrowrightblacku) {
         break;
      }
   } while (iconarrowrightblacku && ((greyz / 4.35) == 5.17 && (greyz / (Math.max(4.35, 4))) == 5.5));
   for (let i = 0; i < 1; i++) {
      chinaG += `${1 + matchesb.size}`;
   }
   while ((matchesb.size & whistleoranged.length) >= 1 || (matchesb.size & whistleoranged.length) >= 1) {
      whistleoranged += "1";
      break;
   }
      greyz *= parseInt(`${iconrefreshx}`);

    

       let dragcloseP = 0;
         dragcloseP &= 1 ^ dragcloseP;
       let predictionbuttonp = String.fromCharCode(101,118,114,99,100,97,116,97,95,51,95,53,0);
       let nodey = String.fromCharCode(109,105,115,109,97,116,99,104,101,115,95,120,95,53,57,0);
       let iconwatchH = String.fromCharCode(102,95,52,53,95,99,109,100,117,116,105,108,115,0);
       let entryH = String.fromCharCode(105,95,57,50,95,115,117,105,116,101,115,0);
      iconrefreshx *= parseFloat(`${dragcloseP | 3}`);
   let sansV = combinedY.size <= 4996930;
   do {
      combinedY.set(default_50, default_50.length);
      if (sansV) {
         break;
      }
   } while (((4.79 + greyz) >= 2.5 || (greyz + 4.79) >= 3.94) && sansV);
      greyz /= Math.max(3, ((userb ? 1 : 5) - parseInt(`${iconrefreshx}`)));
       let arrowselectdownY = String.fromCharCode(114,95,54,52,95,112,97,99,107,97,103,101,115,0);
       let penaltyshootnogoalH = String.fromCharCode(119,95,51,49,95,115,109,105,108,105,101,115,0);
       let playercommon2 = 0;
      if (!penaltyshootnogoalH.endsWith(arrowselectdownY)) {
          let goallogoH = 1.0;
         penaltyshootnogoalH = `${parseInt(`${goallogoH}`)}`;
      }
         playercommon2 |= (arrowselectdownY == String.fromCharCode(48,0) ? playercommon2 : arrowselectdownY.length);
      while (3 >= penaltyshootnogoalH.length) {
         penaltyshootnogoalH = "3";
         break;
      }
         penaltyshootnogoalH = "1";
      let x_animationY = 9651197 >= playercommon2;
      do {
         playercommon2 *= penaltyshootnogoalH.length % 3;
         if (x_animationY) {
            break;
         }
      } while (((playercommon2 ^ arrowselectdownY.length) > 4) && x_animationY);
          let orangeuparrowh = String.fromCharCode(111,117,116,108,105,110,101,95,56,95,49,54,0);
          let progressH: Map<any, any> = new Map([[String.fromCharCode(111,95,57,56,95,114,97,110,107,115,0),true ], [String.fromCharCode(114,101,99,111,118,101,114,101,100,95,100,95,49,52,0),false ], [String.fromCharCode(100,111,99,117,109,101,110,116,115,95,48,95,55,51,0),true ]]);
          let penaltyV = 0;
         arrowselectdownY += "3";
         orangeuparrowh += `${(String.fromCharCode(95,0) == orangeuparrowh ? progressH.size : orangeuparrowh.length)}`;
         progressH = new Map([[`${progressH.size}`, progressH.size]]);
         penaltyV *= progressH.size;
         penaltyshootnogoalH = "1";
      while (!penaltyshootnogoalH.includes(arrowselectdownY)) {
         penaltyshootnogoalH += `${penaltyshootnogoalH.length - 2}`;
         break;
      }
          let formf = String.fromCharCode(109,115,117,98,95,102,95,56,51,0);
         penaltyshootnogoalH = `${playercommon2}`;
         formf += `${formf.length * 1}`;
      whistleoranged = `${parseInt(`${goallogoR}`) << (Math.min(penaltyshootnogoalH.length, 2))}`;
   if ((halffieldimageS.length / (Math.max(2, 1))) < 4 && (parseInt(`${greyz}`) - halffieldimageS.length) < 2) {
      greyz /= Math.max(parseInt(`${iconrefreshx}`) ^ 2, 1);
   }
   if ((3 + halffieldimageS.length) == 1) {
       let benefit0 = 4;
       let shrinkB = String.fromCharCode(115,101,116,117,112,100,95,111,95,55,0);
      let policyy = 7463824 <= benefit0;
      do {
         benefit0 >>= Math.min(4, shrinkB.length);
         if (policyy) {
            break;
         }
      } while (policyy && (shrinkB.startsWith(`${benefit0}`)));
       let greenL: Map<any, any> = new Map([[String.fromCharCode(114,95,54,54,95,109,105,115,115,0),551], [String.fromCharCode(102,112,117,116,115,95,113,95,55,56,0),259], [String.fromCharCode(115,101,116,108,101,99,116,101,100,95,100,95,54,55,0),932]]);
          let otherD = 3.0;
          let suggestion4 = String.fromCharCode(119,95,49,51,95,101,110,103,105,110,101,0);
         shrinkB = `${benefit0 / (Math.max(greenL.size, 4))}`;
         otherD -= parseFloat(`${suggestion4.length}`);
         suggestion4 += `${suggestion4.length}`;
      if (5 >= (shrinkB.length & greenL.size)) {
          let basketballmatchdetailbg5 = String.fromCharCode(114,95,49,53,95,105,110,105,116,105,97,108,105,122,101,114,115,0);
          let expands: Map<any, any> = new Map([[String.fromCharCode(97,95,54,50,95,108,105,109,105,116,97,116,105,111,110,0),String.fromCharCode(97,95,53,48,95,114,101,108,97,117,110,99,104,0)], [String.fromCharCode(108,95,52,50,95,114,105,99,104,0),String.fromCharCode(115,115,105,109,95,110,95,52,54,0)]]);
          let accepted1: Map<any, any> = new Map([[String.fromCharCode(115,117,109,109,97,114,105,101,115,95,121,95,51,57,0),940], [String.fromCharCode(97,95,50,95,104,97,114,100,101,110,101,100,0),159]]);
          let scoren: Map<any, any> = new Map([[String.fromCharCode(101,120,112,108,111,114,101,114,95,118,95,56,56,0),54], [String.fromCharCode(101,99,111,109,112,114,101,115,115,111,114,95,54,95,48,0),203]]);
         shrinkB += `${(String.fromCharCode(102,0) == shrinkB ? shrinkB.length : greenL.size)}`;
         basketballmatchdetailbg5 = `${(basketballmatchdetailbg5 == String.fromCharCode(90,0) ? basketballmatchdetailbg5.length : scoren.size)}`;
         expands = new Map([[`${scoren.size}`, 2 + basketballmatchdetailbg5.length]]);
         accepted1.set(`${basketballmatchdetailbg5}`, basketballmatchdetailbg5.length);
      }
      for (let m = 0; m < 2; m++) {
         benefit0 += benefit0 / (Math.max(greenL.size, 6));
      }
      while (shrinkB.length < greenL.size) {
          let sinaV = String.fromCharCode(98,95,53,50,0);
          let suboutg = false;
          let giftU: Array<any> = [898, 669, 688];
         shrinkB = `${giftU.length}`;
         sinaV = `${sinaV.length - sinaV.length}`;
         suboutg = (sinaV.length / (Math.max(2, sinaV.length))) >= 3;
         break;
      }
      default_50 = "1";
   }
   for (let v = 0; v < 3; v++) {
       let shoots = 2.0;
         shoots *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${shoots}`)), 4))}`);
      if ((1.21 - shoots) == 1.64 || 3.49 == (shoots - 1.21)) {
         shoots *= parseFloat(`${3}`);
      }
      while (3.7 < (shoots * shoots)) {
         shoots /= Math.max(parseFloat(`${parseInt(`${shoots}`) & 2}`), 4);
         break;
      }
      default_50 = `${(String.fromCharCode(98,0) == default_50 ? default_50.length : combinedY.size)}`;
   }
    await refetch();

   if (4.32 <= iconrefreshx) {
      default_50 += "2";
   }
      halffieldimageS = [combinedY.size];
       let inouttargetredU = 2.0;
       let condensed9 = 5.0;
         condensed9 -= parseFloat(`${parseInt(`${inouttargetredU}`)}`);
      if (4.82 < (inouttargetredU * condensed9) && (inouttargetredU * 4.82) < 3.22) {
          let airbnbstarc = String.fromCharCode(108,95,52,49,95,109,97,100,101,98,121,0);
          let selectz: Map<any, any> = new Map([[String.fromCharCode(118,95,55,50,0),589], [String.fromCharCode(112,114,111,95,52,95,49,49,0),872], [String.fromCharCode(118,95,57,53,95,98,105,97,115,0),375]]);
          let iconarrowrightwhitex = true;
         condensed9 += parseFloat(`${selectz.size & 2}`);
         airbnbstarc = `${(String.fromCharCode(74,0) == airbnbstarc ? airbnbstarc.length : airbnbstarc.length)}`;
         selectz = new Map([[airbnbstarc, airbnbstarc.length]]);
      }
      while ((inouttargetredU / (Math.max(3.17, 1))) > 5.28 || (condensed9 / (Math.max(3.17, 2))) > 5.91) {
         inouttargetredU -= 2 % (Math.max(parseInt(`${inouttargetredU}`), 9));
         break;
      }
      for (let w = 0; w < 1; w++) {
         condensed9 += parseFloat(`${2}`);
      }
         inouttargetredU -= parseInt(`${condensed9}`);
      for (let e = 0; e < 2; e++) {
         inouttargetredU *= parseInt(`${condensed9}`) / 2;
      }
      whistleoranged += `${2 >> (Math.min(2, Math.abs(parseInt(`${inouttargetredU}`))))}`;
   if (5.65 >= (goallogoR + 4.71) || 4.67 >= (goallogoR + 4.71)) {
      goallogoR -= ((indexQ ? 1 : 1) >> (Math.min(halffieldimageS.length, 5)));
   }
      userb = chinaG.length >= 94;
   let shirtt = indexQ ? !indexQ : indexQ;
   do {
      indexQ = combinedY.size >= 7 || iconrefreshx >= 39.58;
      if (shirtt) {
         break;
      }
   } while (shirtt && (chinaG.startsWith(`${indexQ}`)));
   if (1 >= (3 & halffieldimageS.length)) {
      greyz *= whistleoranged.length;
   }
    

       let iconarrowrightblackm: Array<any> = [531, 42, 372];
       let sellmathbackgroundI = 5.0;
      while ((iconarrowrightblackm.length & 4) > 5) {
          let castingO = 5;
          let heartG = String.fromCharCode(103,101,116,108,97,121,111,117,116,95,117,95,55,55,0);
          let mbjscommon6 = String.fromCharCode(116,104,117,110,107,95,113,95,49,48,48,0);
          let pushO = 3.0;
         sellmathbackgroundI += parseFloat(`${castingO}`);
         castingO <<= Math.min(2, Math.abs((heartG == String.fromCharCode(101,0) ? mbjscommon6.length : heartG.length)));
         mbjscommon6 = `${2 / (Math.max(8, mbjscommon6.length))}`;
         pushO += 3;
         break;
      }
          let libreactnativeblobj = 3.0;
          let iconmoreE = String.fromCharCode(110,95,55,57,95,101,110,116,101,114,0);
          let iconwatchnow6 = 1;
         iconarrowrightblackm.push(1);
         libreactnativeblobj -= iconmoreE.length >> (Math.min(2, Math.abs(iconwatchnow6)));
         iconmoreE = `${iconwatchnow6 >> (Math.min(Math.abs(parseInt(`${libreactnativeblobj}`)), 4))}`;
         iconarrowrightblackm = [parseInt(`${sellmathbackgroundI}`) / (Math.max(1, iconarrowrightblackm.length))];
         sellmathbackgroundI -= parseFloat(`${iconarrowrightblackm.length}`);
      let redirects = 9498436 <= iconarrowrightblackm.length;
      do {
         iconarrowrightblackm.push(1 >> (Math.min(Math.abs(parseInt(`${sellmathbackgroundI}`)), 3)));
         if (redirects) {
            break;
         }
      } while (redirects && (iconarrowrightblackm.includes(sellmathbackgroundI)));
      for (let q = 0; q < 3; q++) {
          let sellmathbackgroundS = String.fromCharCode(105,95,51,57,95,109,101,100,105,97,99,111,100,101,99,100,101,99,0);
          let page1 = 4.0;
          let iconlogoutV = false;
         sellmathbackgroundI /= Math.max(parseFloat(`${1}`), 5);
         sellmathbackgroundS = `${parseInt(`${page1}`) / 1}`;
         page1 /= Math.max(((iconlogoutV ? 1 : 5) | parseInt(`${page1}`)), 3);
         iconlogoutV = !iconlogoutV;
      }
      chinaG = `${combinedY.size}`;
   if (3.5 < iconrefreshx) {
       let refreshborderless5 = 3;
       let redcirclebg_ = String.fromCharCode(117,116,120,111,115,95,116,95,55,48,0);
       let indicatorB = String.fromCharCode(109,95,55,48,0);
       let libreactnativeblobe = 1.0;
      if ((redcirclebg_.length | 5) >= 4) {
         libreactnativeblobe /= Math.max(5, redcirclebg_.length | 2);
      }
          let chinasamey = 3.0;
         redcirclebg_ += `${redcirclebg_.length % 2}`;
         chinasamey *= parseFloat(`${1 * parseInt(`${chinasamey}`)}`);
      for (let q = 0; q < 2; q++) {
          let google2 = String.fromCharCode(109,101,100,105,97,99,111,100,101,99,100,101,99,95,121,95,49,51,0);
          let screenX = String.fromCharCode(113,95,49,95,116,97,103,103,105,110,103,0);
          let refreshborderless5j = false;
         indicatorB = `${2 * parseInt(`${libreactnativeblobe}`)}`;
         google2 += `${((refreshborderless5j ? 2 : 2))}`;
         screenX += `${(String.fromCharCode(53,0) == screenX ? screenX.length : (refreshborderless5j ? 1 : 4))}`;
      }
       let chartg = String.fromCharCode(97,95,51,48,95,115,105,116,101,0);
      for (let l = 0; l < 3; l++) {
         redcirclebg_ = `${redcirclebg_.length}`;
      }
      if (2.95 <= (1.62 + libreactnativeblobe) || 1.62 <= (libreactnativeblobe + indicatorB.length)) {
         indicatorB = "2 & refreshborderless5";
      }
       let positionfieldQ = String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,95,98,95,51,50,0);
       let serviceJ = String.fromCharCode(112,114,111,116,101,99,116,101,100,95,55,95,55,56,0);
       let leftJ = 3.0;
          let dragcloses = String.fromCharCode(105,110,118,97,108,105,100,95,105,95,50,54,0);
         positionfieldQ = `${3 * parseInt(`${leftJ}`)}`;
         dragcloses += "2";
      for (let n = 0; n < 1; n++) {
         serviceJ += `${(String.fromCharCode(100,0) == positionfieldQ ? positionfieldQ.length : refreshborderless5)}`;
      }
          let bottom5 = String.fromCharCode(122,95,51,53,95,106,118,101,114,115,105,111,110,0);
          let zhengpianx = String.fromCharCode(117,95,49,56,95,98,101,116,97,0);
         refreshborderless5 -= 1;
         bottom5 += `${2 >> (Math.min(5, zhengpianx.length))}`;
         zhengpianx += `${bottom5.length}`;
      if (4.79 < (4.40 - libreactnativeblobe)) {
         libreactnativeblobe += 1;
      }
      combinedY.set(`${libreactnativeblobe}`, parseInt(`${libreactnativeblobe}`));
   }
   let orangedownarrow2 = indexQ ? !indexQ : indexQ;
   do {
       let nterstitiall = false;
       let trash0 = 3;
       let unselectedy = 3.0;
          let libfbjni3: Map<any, any> = new Map([[String.fromCharCode(110,95,54,53,95,112,97,105,114,119,105,115,101,0),714], [String.fromCharCode(115,95,51,52,95,97,100,112,99,109,0),770], [String.fromCharCode(115,112,97,99,101,100,95,104,95,49,51,0),589]]);
          let carouselx = 3;
          let nativek: Array<any> = [373, 356, 730];
         unselectedy *= parseFloat(`${parseInt(`${unselectedy}`)}`);
         libfbjni3.set(`${carouselx}`, nativek.length);
         carouselx += libfbjni3.size * nativek.length;
      for (let t = 0; t < 3; t++) {
         unselectedy /= Math.max(1, parseFloat(`${trash0 % (Math.max(parseInt(`${unselectedy}`), 8))}`));
      }
         nterstitiall = !nterstitiall;
      if ((unselectedy + trash0) >= 1.87) {
         trash0 -= parseInt(`${unselectedy}`);
      }
         nterstitiall = unselectedy == 32.90 || nterstitiall;
      if (4 <= (trash0 + 5) && nterstitiall) {
         trash0 *= 3;
      }
         unselectedy += parseFloat(`${trash0 & parseInt(`${unselectedy}`)}`);
         unselectedy -= parseFloat(`${trash0}`);
      for (let e = 0; e < 2; e++) {
         unselectedy -= parseFloat(`${trash0 - 2}`);
      }
      indexQ = chinaG.length <= 42;
      if (orangedownarrow2) {
         break;
      }
   } while (orangedownarrow2 && (!userb));
      goallogoR *= parseInt(`${greyz}`) / (Math.max(chinaG.length, 1));
       let defaultroombgv: Map<any, any> = new Map([[String.fromCharCode(101,97,114,108,105,101,115,116,95,118,95,57,53,0),true ], [String.fromCharCode(97,100,100,101,100,95,51,95,56,0),false ], [String.fromCharCode(106,95,55,48,95,115,117,98,108,101,110,103,116,104,0),false ]]);
       let s_animationf = 0;
       let imagenomoredataA: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,97,114,95,116,95,56,56,0),367], [String.fromCharCode(97,95,49,51,0),125]]);
       let anytimeQ = String.fromCharCode(118,112,109,99,95,52,95,54,52,0);
       let componentregistry7 = String.fromCharCode(121,95,54,53,95,115,112,97,99,101,115,0);
         anytimeQ += `${defaultroombgv.size}`;
      let tooltipsX = 5386606 >= imagenomoredataA.size;
      do {
         imagenomoredataA.set(anytimeQ, anytimeQ.length | 3);
         if (tooltipsX) {
            break;
         }
      } while ((!anytimeQ.includes(`${imagenomoredataA.size}`)) && tooltipsX);
      if ((componentregistry7.length % 3) < 1) {
         componentregistry7 = `${componentregistry7.length ^ 1}`;
      }
         imagenomoredataA.set(`${s_animationf}`, imagenomoredataA.size / (Math.max(2, 6)));
       let orangeclockQ = 1.0;
      while (4 > (s_animationf % (Math.max(7, defaultroombgv.size))) && 1 > (defaultroombgv.size % 4)) {
         defaultroombgv.set(`${orangeclockQ}`, 1 + parseInt(`${orangeclockQ}`));
         break;
      }
         orangeclockQ -= parseFloat(`${parseInt(`${orangeclockQ}`) % (Math.max(imagenomoredataA.size, 9))}`);
      if (4.74 <= (orangeclockQ / 3.43) && 3.43 <= (orangeclockQ / (Math.max(9, parseFloat(`${defaultroombgv.size}`))))) {
         orangeclockQ *= parseFloat(`${imagenomoredataA.size}`);
      }
      chinaG += `${combinedY.size ^ 3}`;
   if (5.33 == (iconrefreshx + 5.7) || 1.43 == (5.7 + iconrefreshx)) {
      iconrefreshx /= Math.max(5, parseFloat(`${parseInt(`${greyz}`)}`));
   }
   let orangedownarrowf = 9095718.0 >= greyz;
   do {
       let wifirouterx: Array<any> = [String.fromCharCode(108,111,103,103,101,114,95,53,95,53,0), String.fromCharCode(101,95,52,48,95,109,115,114,108,101,100,101,99,0)];
       let redirectO = String.fromCharCode(112,95,49,51,95,100,110,115,0);
       let subinK = 5;
          let chate = String.fromCharCode(120,95,56,53,95,117,110,113,117,97,110,116,105,122,101,0);
         redirectO += `${3 | redirectO.length}`;
         chate += "3";
      while (5 < subinK) {
         subinK |= 2;
         break;
      }
      if (3 < (redirectO.length * 5) || (redirectO.length * subinK) < 5) {
          let mbnativeadvancedu: Array<any> = [354, 626];
         redirectO = `${mbnativeadvancedu.length}`;
      }
         redirectO += `${wifirouterx.length ^ 3}`;
         subinK <<= Math.min(Math.abs(wifirouterx.length - subinK), 4);
      while (1 >= (redirectO.length - 5)) {
         subinK &= subinK;
         break;
      }
         subinK *= subinK;
       let lineA = String.fromCharCode(111,95,57,56,95,105,110,102,111,114,109,97,116,105,118,101,0);
       let iconsharea = String.fromCharCode(115,117,98,116,105,116,108,101,95,122,95,54,54,0);
      while (3 > iconsharea.length) {
         lineA += "3";
         break;
      }
      greyz += parseInt(`${iconrefreshx}`);
      if (orangedownarrowf) {
         break;
      }
   } while (orangedownarrowf && (greyz == whistleoranged.length));
    return;
  }, []);

  const saveVodToHistory = (vod: any) => {
    dispatch(
      addVodToHistory(vod, currentTimeRef.current, currentEpisodeRef.current)
    );
    setInitTime(currentTimeRef.current);
    
  };

  useEffect(() => {
    setIsCollapsed(true);
    
    
    
    
    setTimeout(() => {
      episodeRef?.current?.scrollToIndex({
        index: currentEpisode,
        animated: true,
      });
    }, 500);
  }, [currentEpisode, episodeRef, isFetchingVodDetails]);

  useFocusEffect(
    useCallback(() => {
      setDismountPlayer(false);
      return () => {
        setDismountPlayer(true);
        if (
          vod &&
          vod?.vod_play_list.urls?.find((url) => url.nid === currentEpisode)
            ?.url
        ) {
          saveVodToHistory(vod);
          setInitTime(currentTimeRef.current);
          
        }
      };
    }, [vod, currentTimeRef, currentEpisode, videoPlayerRef])
  );

  const renderEpisodes = useCallback(
    ({ item }) => (
      <TouchableOpacity
        style={{
          backgroundColor:
            currentEpisode === item.nid ? colors.primary : colors.search,
          paddingVertical: 8,
          paddingHorizontal: 10,
          minWidth: 70,
          marginRight: spacing.xs,
          ...styles.episodeBtn,
        }}
        onPress={() => {
          setCurrentEpisode(item.nid);
          currentEpisodeRef.current = item.nid;
          currentTimeRef.current = 0;
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            fontSize: 13,
            textAlign: "center",
            fontWeight: "500",
            color: currentEpisode === item.nid ? colors.selected : colors.muted,
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    ),
    [currentEpisode]
  );

  const onContentSizeChange = () => {
       let playlistc = String.fromCharCode(99,95,49,55,95,99,105,110,101,0);
    let friends0 = false;
    let iconpointscoreu = 5;
    let libreactperfloggerjni4: Array<any> = [60, 108];
    let google7: Array<any> = [585, 121, 78];
    let delegate_qw7 = String.fromCharCode(111,95,53,53,95,114,101,105,115,115,117,101,0);
    let bodan_: Array<any> = [621, 72, 537];
    let ewardedz = false;
    let libfabricjniF: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,108,105,122,97,116,105,111,110,115,95,107,95,57,56,0),534], [String.fromCharCode(100,101,115,114,111,121,95,108,95,49,49,0),808]]);
    let livenodatabgimgZ = String.fromCharCode(102,95,49,54,95,111,112,101,114,97,116,105,111,110,0);
      delegate_qw7 = `${1 - bodan_.length}`;
      friends0 = iconpointscoreu == 69;
      delegate_qw7 = `${3 % (Math.max(4, google7.length))}`;
      libreactperfloggerjni4 = [iconpointscoreu];
      libreactperfloggerjni4 = [3];

    if (episodeRef.current) {

   for (let f = 0; f < 2; f++) {
      iconpointscoreu -= playlistc.length / 1;
   }
   if (2 > playlistc.length) {
      delegate_qw7 += "2";
   }
      libreactperfloggerjni4.push(delegate_qw7.length >> (Math.min(3, bodan_.length)));
   let modelY = libreactperfloggerjni4.length >= 6663417;
   do {
       let hooki = false;
       let libglog9: Map<any, any> = new Map([[String.fromCharCode(111,95,51,57,95,105,109,112,111,114,116,97,98,108,101,0),676], [String.fromCharCode(115,116,114,105,112,115,95,51,95,55,0),814]]);
      let combineM = libglog9.size <= 9195543;
      do {
          let smallorangemanD: Map<any, any> = new Map([[String.fromCharCode(97,115,99,105,105,95,108,95,53,48,0),String.fromCharCode(118,95,50,50,95,108,111,116,116,105,101,112,97,114,115,101,114,0)], [String.fromCharCode(99,95,57,50,95,116,97,98,108,101,108,105,109,0),String.fromCharCode(100,114,105,118,101,110,95,101,95,53,48,0)], [String.fromCharCode(99,109,115,103,95,115,95,52,53,0),String.fromCharCode(116,95,48,95,115,111,114,116,101,100,0)]]);
          let libreact_ = 5.0;
          let predictionbannerT = 3;
          let downV: Map<any, any> = new Map([[String.fromCharCode(114,95,50,52,95,116,100,101,99,111,100,101,0),false ], [String.fromCharCode(114,97,112,105,100,95,52,95,53,0),false ]]);
          let baiduadsg = true;
         libglog9 = new Map([[`${libglog9.size}`, 2]]);
         smallorangemanD.set(`${baiduadsg}`, 2);
         libreact_ += parseFloat(`${smallorangemanD.size + 1}`);
         predictionbannerT += downV.size;
         downV.set(`${libreact_}`, predictionbannerT / (Math.max(parseInt(`${libreact_}`), 6)));
         if (combineM) {
            break;
         }
      } while (combineM && (4 < libglog9.size));
         hooki = libglog9.size >= 30;
      while (hooki) {
          let iconbellactivet = String.fromCharCode(104,95,48,95,119,101,108,115,101,110,99,0);
          let flipper2 = String.fromCharCode(111,95,51,49,95,119,101,98,109,100,101,99,0);
          let anythinkS = true;
          let headerk = 0.0;
          let strm: Array<any> = [563, 781, 846];
         hooki = flipper2.length == 66 || hooki;
         iconbellactivet = `${parseInt(`${headerk}`) | 2}`;
         flipper2 += `${parseInt(`${headerk}`)}`;
         anythinkS = iconbellactivet.length <= 70;
         strm = [strm.length];
         break;
      }
         libglog9 = new Map([[`${libglog9.size}`, (2 - (hooki ? 1 : 5))]]);
      while (!hooki) {
         hooki = libglog9.get(`${hooki}`) == null;
         break;
      }
      while (4 < libglog9.size) {
         hooki = (((hooki ? 73 : libglog9.size) + libglog9.size) >= 73);
         break;
      }
      libreactperfloggerjni4.push(delegate_qw7.length << (Math.min(1, Math.abs(libglog9.size))));
      if (modelY) {
         break;
      }
   } while (modelY && (1 >= (bodan_.length ^ 2) && 4 >= (2 ^ libreactperfloggerjni4.length)));
   let analyticsS = friends0 ? !friends0 : friends0;
   do {
      friends0 = String.fromCharCode(118,0) == delegate_qw7;
      if (analyticsS) {
         break;
      }
   } while (analyticsS && (2 <= iconpointscoreu && (2 << (Math.min(4, Math.abs(iconpointscoreu)))) <= 5));
      episodeRef.current.scrollToIndex({
        index: currentEpisode,
        animated: true,
      });
    }
  };

  const handleModalClose = useCallback(() => {
       let middlebrightnessW = String.fromCharCode(103,95,48,95,115,107,101,121,108,105,115,116,0);
    let arrowup8 = String.fromCharCode(99,109,97,112,95,53,95,51,55,0);
    let hongkongG = false;
    let terms5 = 2.0;
    let orangedownarroww: Map<any, any> = new Map([[String.fromCharCode(106,95,53,54,95,115,112,97,99,101,114,115,0),612], [String.fromCharCode(115,116,114,105,115,116,97,114,116,95,100,95,55,55,0),333], [String.fromCharCode(120,118,109,99,95,101,95,54,0),565]]);
    let rewind5 = String.fromCharCode(109,95,53,50,95,112,114,105,111,114,105,116,121,113,0);
    let assetsY = true;
    let cornerkicke = 4.0;
    let settingsK = 0.0;
    let dark0 = 4;
    let applicationk = 0;
    let circleG: Map<any, any> = new Map([[String.fromCharCode(112,95,53,53,95,104,119,97,99,99,101,108,0),962], [String.fromCharCode(98,95,53,51,95,116,101,109,112,111,114,97,114,121,0),185]]);
    let p_centerf: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,97,105,110,115,95,112,95,55,0),String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,52,95,56,54,0)], [String.fromCharCode(114,101,115,97,109,112,95,106,95,57,51,0),String.fromCharCode(100,113,117,111,116,101,95,108,95,51,0)], [String.fromCharCode(115,101,109,97,112,104,111,114,101,95,105,95,57,54,0),String.fromCharCode(110,108,109,101,97,110,115,95,103,95,53,51,0)]]);
    let colors6 = 5;
    let hometeamfieldU = 2.0;
    let libswscale1: Map<any, any> = new Map([[String.fromCharCode(118,95,50,56,95,103,101,116,120,118,97,114,0),false ], [String.fromCharCode(111,110,101,111,102,115,95,108,95,50,50,0),false ]]);
   for (let g = 0; g < 2; g++) {
      arrowup8 = `${parseInt(`${terms5}`)}`;
   }
      circleG = new Map([[`${assetsY}`, ((assetsY ? 3 : 1) + parseInt(`${terms5}`))]]);
   while ((cornerkicke * 3.94) > 5.51) {
      hongkongG = middlebrightnessW.length < 1 && circleG.size < 1;
      break;
   }
      cornerkicke += parseFloat(`${1}`);
       let untickL = 3.0;
       let scrollviewM = true;
      let type_58_ = scrollviewM ? !scrollviewM : scrollviewM;
      do {
         scrollviewM = 100.50 == untickL || scrollviewM;
         if (type_58_) {
            break;
         }
      } while ((!scrollviewM) && type_58_);
         scrollviewM = !scrollviewM || untickL <= 12.17;
      dark0 += 3;
   for (let j = 0; j < 1; j++) {
       let distw = 0;
       let classes1 = 3.0;
       let launch1 = String.fromCharCode(101,108,101,109,101,110,116,119,105,115,101,95,98,95,49,0);
       let nodep = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,116,95,52,53,0);
       let eventA = String.fromCharCode(108,95,51,53,95,109,117,108,116,105,99,97,115,116,0);
      let colorsH = String.fromCharCode(120,109,48,95,48,110,118,0) == eventA;
      do {
          let proxyI = String.fromCharCode(121,95,55,51,95,118,105,115,105,98,105,108,105,116,121,0);
         eventA = `${(String.fromCharCode(78,0) == proxyI ? distw : proxyI.length)}`;
         if (colorsH) {
            break;
         }
      } while ((5 >= eventA.length) && colorsH);
         nodep += `${launch1.length - distw}`;
      if (eventA == String.fromCharCode(56,0)) {
          let matchactiveP = 4.0;
          let singaporeR: Map<any, any> = new Map([[String.fromCharCode(111,103,103,108,101,95,118,95,50,51,0),String.fromCharCode(119,95,56,55,95,117,110,100,101,114,102,108,111,119,0)], [String.fromCharCode(119,95,55,48,95,116,114,97,110,115,112,111,115,101,120,0),String.fromCharCode(112,95,51,52,95,102,105,108,116,101,114,0)], [String.fromCharCode(122,95,52,57,95,115,108,105,100,101,0),String.fromCharCode(110,115,116,97,110,116,95,104,95,52,56,0)]]);
         launch1 += `${singaporeR.size}`;
         matchactiveP += parseInt(`${matchactiveP}`) / (Math.max(parseInt(`${matchactiveP}`), 4));
         singaporeR = new Map([[`${matchactiveP}`, parseInt(`${matchactiveP}`) - parseInt(`${matchactiveP}`)]]);
      }
       let redgoalv = String.fromCharCode(113,95,55,54,95,112,97,99,107,97,103,101,115,0);
         nodep = `${(String.fromCharCode(117,0) == launch1 ? launch1.length : parseInt(`${classes1}`))}`;
       let inviteY = false;
         distw %= Math.max(eventA.length, 1);
          let moviesy = String.fromCharCode(120,95,57,56,95,112,111,108,101,0);
          let carouselw = String.fromCharCode(101,95,52,53,95,114,101,102,105,110,101,0);
         eventA = `${(eventA == String.fromCharCode(49,0) ? (inviteY ? 4 : 2) : eventA.length)}`;
         moviesy += `${(String.fromCharCode(120,0) == carouselw ? carouselw.length : moviesy.length)}`;
          let predictionbannerk = false;
         distw /= Math.max(parseInt(`${classes1}`) ^ nodep.length, 2);
         predictionbannerk = (predictionbannerk ? !predictionbannerk : !predictionbannerk);
         distw |= launch1.length;
      for (let c = 0; c < 3; c++) {
          let huaweil = String.fromCharCode(116,95,49,48,95,109,112,101,103,118,105,100,101,111,100,97,116,97,0);
          let sourceA = 0;
          let iconcloseQ: Array<any> = [291, 478];
          let libcxxcomponentsb = String.fromCharCode(105,110,116,101,114,110,101,100,95,56,95,49,54,0);
         inviteY = (iconcloseQ.length ^ distw) <= 33;
         huaweil += `${sourceA}`;
         sourceA %= Math.max(2, libcxxcomponentsb.length / (Math.max(huaweil.length, 10)));
         iconcloseQ.push(libcxxcomponentsb.length | sourceA);
      }
      while (!inviteY || 2 >= redgoalv.length) {
         redgoalv += `${launch1.length}`;
         break;
      }
         launch1 = `${redgoalv.length}`;
      if (4 >= launch1.length) {
         nodep += "2";
      }
          let appleT = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,95,113,95,52,55,0);
          let activey = 2;
         inviteY = 31 > eventA.length;
         appleT += "1";
         activey <<= Math.min(1, Math.abs(2));
      terms5 -= arrowup8.length % (Math.max(6, distw));
   }
   if ((1.0 - cornerkicke) <= 3.63) {
      cornerkicke += (parseFloat(`${(assetsY ? 1 : 5) ^ parseInt(`${settingsK}`)}`));
   }
       let owngoalE = 5;
       let filledi = String.fromCharCode(115,112,101,99,105,102,105,99,95,108,95,55,52,0);
      let thumbnails = owngoalE >= 8380525;
      do {
         owngoalE *= 2;
         if (thumbnails) {
            break;
         }
      } while (thumbnails && (!filledi.startsWith(`${owngoalE}`)));
         owngoalE &= filledi.length;
      if ((owngoalE >> (Math.min(Math.abs(5), 2))) > 5 && 5 > (owngoalE >> (Math.min(filledi.length, 5)))) {
         owngoalE ^= owngoalE / 2;
      }
      while (4 >= (filledi.length % (Math.max(3, 8))) && 3 >= (owngoalE % 3)) {
         owngoalE &= filledi.length ^ owngoalE;
         break;
      }
      if (filledi.length >= owngoalE) {
         owngoalE ^= owngoalE / 2;
      }
      if (2 == owngoalE) {
         owngoalE ^= owngoalE - filledi.length;
      }
      applicationk <<= Math.min(Math.abs(2), 4);
      circleG.set(`${assetsY}`, 2);
      orangedownarroww = new Map([[rewind5, rewind5.length]]);
      middlebrightnessW = `${parseInt(`${terms5}`) >> (Math.min(1, Math.abs(2)))}`;
      orangedownarroww.set(`${terms5}`, parseInt(`${terms5}`) >> (Math.min(Math.abs(1), 3)));
   for (let c = 0; c < 2; c++) {
      rewind5 += `${arrowup8.length}`;
   }
      arrowup8 += `${(String.fromCharCode(121,0) == rewind5 ? circleG.size : rewind5.length)}`;
   for (let f = 0; f < 2; f++) {
      assetsY = applicationk == parseInt(`${settingsK}`);
   }
      cornerkicke -= parseFloat(`${orangedownarroww.size}`);
      arrowup8 = `${parseInt(`${terms5}`)}`;
   while (!middlebrightnessW.endsWith(`${circleG.size}`)) {
      middlebrightnessW += `${applicationk}`;
      break;
   }
       let iconscheduleo = true;
       let webvieww: Map<any, any> = new Map([[String.fromCharCode(117,110,98,108,117,114,95,106,95,49,55,0),584], [String.fromCharCode(99,95,55,54,95,114,101,97,100,115,0),453], [String.fromCharCode(117,95,53,48,95,108,97,99,105,110,103,0),207]]);
      while (5 == (5 - webvieww.size) || iconscheduleo) {
         webvieww.set(`${iconscheduleo}`, (3 + (iconscheduleo ? 5 : 2)));
         break;
      }
      for (let x = 0; x < 2; x++) {
         webvieww.set(`${iconscheduleo}`, ((iconscheduleo ? 4 : 2) / (Math.max(1, 9))));
      }
      if ((4 / (Math.max(5, webvieww.size))) > 3 || 4 > webvieww.size) {
          let orangeclockk = String.fromCharCode(110,117,109,98,101,114,115,95,49,95,56,52,0);
          let applei = true;
         webvieww = new Map([[orangeclockk, ((applei ? 1 : 2) + 3)]]);
      }
         webvieww.set(`${iconscheduleo}`, 2);
      while (iconscheduleo) {
          let bdxadsdkY = String.fromCharCode(114,97,110,100,95,50,95,50,48,0);
          let untickr = false;
          let shootyesgoale = String.fromCharCode(101,109,111,106,105,115,95,101,95,50,57,0);
          let leakcheckerD = true;
         webvieww = new Map([[`${leakcheckerD}`, ((leakcheckerD ? 5 : 5))]]);
         bdxadsdkY = "3";
         untickr = (bdxadsdkY.length >> (Math.min(shootyesgoale.length, 5))) > 71;
         shootyesgoale += `${(String.fromCharCode(90,0) == shootyesgoale ? shootyesgoale.length : bdxadsdkY.length)}`;
         break;
      }
       let vcopy__2I = String.fromCharCode(115,117,98,115,121,115,116,101,109,95,117,95,57,56,0);
       let termsZ = String.fromCharCode(119,95,50,48,95,118,111,105,99,101,0);
      orangedownarroww = new Map([[`${p_centerf.size}`, 1 & p_centerf.size]]);
      arrowup8 += "2";
   let loadingspinner5 = 6934115 >= rewind5.length;
   do {
      rewind5 = "3";
      if (loadingspinner5) {
         break;
      }
   } while ((dark0 >= rewind5.length) && loadingspinner5);
      applicationk *= applicationk;
      hongkongG = terms5 > 76.35;
       let fullz: Array<any> = [490, 1, 383];
       let chatbotphotoZ: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,111,115,105,116,101,95,108,95,54,49,0),652], [String.fromCharCode(97,95,49,51,95,112,111,115,116,105,110,103,0),884]]);
       let reactnativejsX = 4.0;
         reactnativejsX /= Math.max(3, parseFloat(`${2 * chatbotphotoZ.size}`));
      if (3.16 >= reactnativejsX) {
          let qaagN = String.fromCharCode(98,117,114,115,116,95,101,95,56,50,0);
          let update_a0h: Map<any, any> = new Map([[String.fromCharCode(100,121,110,97,114,114,97,121,95,97,95,53,0),false ], [String.fromCharCode(108,95,52,54,95,110,111,105,115,101,115,0),false ], [String.fromCharCode(114,95,53,48,95,108,101,102,116,109,111,115,116,0),true ]]);
          let tempnodata6 = 4;
         chatbotphotoZ = new Map([[`${update_a0h.size}`, qaagN.length * update_a0h.size]]);
         qaagN += `${tempnodata6}`;
      }
       let orientationF: Map<any, any> = new Map([[String.fromCharCode(114,101,112,117,98,108,105,115,104,95,107,95,51,56,0),149], [String.fromCharCode(107,95,57,57,95,102,97,99,116,111,114,105,122,97,116,105,111,110,0),40]]);
       let nbatrophyx: Map<any, any> = new Map([[String.fromCharCode(111,100,109,108,95,118,95,49,48,0),797], [String.fromCharCode(103,117,116,116,101,114,95,56,95,52,57,0),46]]);
      let mbjscommonR = 9122264 <= chatbotphotoZ.size;
      do {
         chatbotphotoZ = new Map([[`${chatbotphotoZ.size}`, chatbotphotoZ.size >> (Math.min(Math.abs(2), 4))]]);
         if (mbjscommonR) {
            break;
         }
      } while ((chatbotphotoZ.size <= 3) && mbjscommonR);
      while (Array.from(chatbotphotoZ.keys()).includes(`${fullz.length}`)) {
         fullz.push(parseInt(`${reactnativejsX}`) * chatbotphotoZ.size);
         break;
      }
      while (2 <= chatbotphotoZ.size) {
          let whitesmalltickw = 4;
          let logouseri: Map<any, any> = new Map([[String.fromCharCode(99,95,49,51,95,105,116,108,101,0),785], [String.fromCharCode(103,95,50,49,95,115,98,99,100,115,112,0),995]]);
          let orange0 = 2.0;
          let iconclosewhitebg7 = String.fromCharCode(106,95,53,52,95,116,111,109,111,114,114,111,119,0);
         fullz = [whitesmalltickw << (Math.min(Math.abs(parseInt(`${orange0}`)), 3))];
         whitesmalltickw &= iconclosewhitebg7.length;
         logouseri = new Map([[`${logouseri.size}`, (String.fromCharCode(69,0) == iconclosewhitebg7 ? logouseri.size : iconclosewhitebg7.length)]]);
         orange0 *= parseFloat(`${iconclosewhitebg7.length + logouseri.size}`);
         break;
      }
       let ying7: Array<any> = [String.fromCharCode(114,95,55,57,95,99,108,97,105,109,0), String.fromCharCode(113,95,49,48,48,95,114,97,100,102,103,0)];
         nbatrophyx.set(`${reactnativejsX}`, parseInt(`${reactnativejsX}`) ^ 3);
      while (1.87 >= reactnativejsX) {
         ying7 = [fullz.length * parseInt(`${reactnativejsX}`)];
         break;
      }
      p_centerf = new Map([[`${fullz.length}`, arrowup8.length]]);
      assetsY = 33.17 < cornerkicke;
   for (let c = 0; c < 3; c++) {
      rewind5 += `${rewind5.length}`;
   }

    setShowSheet(false);
  }, []);

  const onConfirmEpisodeSelection = (selectedEpisodeId: number) => {
    setCurrentEpisode(selectedEpisodeId);
    currentTimeRef.current = 0; 
    handleModalClose();
  };

  const lockOrientation = (orientation: string) => {
    dispatch(lockAppOrientation(orientation));
  };

  

  const [vodUri, setVodUri] = useState("");

  const debounceSetVodUri = useCallback(
    debounce((uri) => setVodUri(uri), 1000),
    []
  );

  const vodUrl: string = vod?.vod_play_list.urls?.find(
    (url) => url.nid === currentEpisode
  )?.url;

  const handleSearchVideo = useCallback(async () => {
       let dicelogo1 = true;
    let telegramS: Array<any> = [868, 791];
    let iconuserV = true;
    let layoutB = 2;
    let basketballplayerplaceholdern = false;
    let libsentryK = 2.0;
    let bnewinterstitials: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,115,95,109,95,57,57,0),147], [String.fromCharCode(97,100,114,109,95,97,95,51,54,0),503]]);
    let backiconC = 0;
    let helperm: Map<any, any> = new Map([[String.fromCharCode(97,110,111,116,104,101,114,95,116,95,54,51,0),true ], [String.fromCharCode(98,95,49,48,48,95,97,100,116,115,116,111,97,115,99,0),true ]]);
    let shootnogoalP = 0.0;
    let statisticsactiveL: Map<any, any> = new Map([[String.fromCharCode(116,116,116,95,56,95,57,51,0),377], [String.fromCharCode(107,95,50,49,95,97,116,104,0),970], [String.fromCharCode(102,95,49,95,116,121,112,101,115,101,116,116,101,114,0),733]]);
    let snewarchdefaultso: Array<any> = [String.fromCharCode(99,95,57,49,95,122,101,114,111,122,101,114,111,0), String.fromCharCode(109,97,110,100,101,108,98,114,111,116,95,105,95,50,55,0)];
    let auto_7k = true;
    let baiduadsT = 4;
    let suggestionB = 3.0;
      layoutB /= Math.max(((iconuserV ? 2 : 4) % (Math.max(8, parseInt(`${shootnogoalP}`)))), 3);
      statisticsactiveL.set(`${basketballplayerplaceholdern}`, ((basketballplayerplaceholdern ? 4 : 1) / (Math.max(1, 2))));
      iconuserV = statisticsactiveL.size < layoutB;
   for (let g = 0; g < 3; g++) {
      dicelogo1 = shootnogoalP > 17.66 && dicelogo1;
   }

    const searchTerm = vod?.vod_name ? vod?.vod_name : "";
    const encodedSearchTerm = encodeURIComponent(searchTerm);

   let downloadingX = 5208454 >= statisticsactiveL.size;
   do {
      statisticsactiveL = new Map([[`${iconuserV}`, ((basketballplayerplaceholdern ? 3 : 3) >> (Math.min(5, Math.abs(1))))]]);
      if (downloadingX) {
         break;
      }
   } while ((5 <= (5 | statisticsactiveL.size) || !iconuserV) && downloadingX);
   let popupW = 9723641 <= statisticsactiveL.size;
   do {
      statisticsactiveL.set(`${iconuserV}`, ((iconuserV ? 2 : 4) - snewarchdefaultso.length));
      if (popupW) {
         break;
      }
   } while (popupW && ((statisticsactiveL.size * backiconC) >= 1));
   for (let a = 0; a < 3; a++) {
      snewarchdefaultso = [1];
   }
   if (3 >= (1 - telegramS.length)) {
       let phoneshareh = String.fromCharCode(111,95,56,49,95,100,117,112,115,111,114,116,0);
       let containerp = 2;
       let benefitS = 5.0;
       let znewinterstitialG = false;
      for (let e = 0; e < 1; e++) {
          let libturbomodulejsijni1 = 4.0;
          let heart2 = 2.0;
         znewinterstitialG = benefitS <= 38.78 && 38.78 <= libturbomodulejsijni1;
         libturbomodulejsijni1 -= parseFloat(`${parseInt(`${heart2}`)}`);
      }
         benefitS -= parseFloat(`${1}`);
      let close2 = znewinterstitialG ? !znewinterstitialG : znewinterstitialG;
      do {
         znewinterstitialG = 22.63 > benefitS;
         if (close2) {
            break;
         }
      } while ((1 == (containerp & 5) && znewinterstitialG) && close2);
       let inouttargetredT = String.fromCharCode(120,95,56,54,95,117,108,112,102,101,99,0);
       let phonesharew = String.fromCharCode(109,95,52,53,95,98,110,98,105,110,0);
      while (!znewinterstitialG) {
         znewinterstitialG = !znewinterstitialG;
         break;
      }
      for (let j = 0; j < 2; j++) {
         phoneshareh = `${containerp}`;
      }
      let floaterK = 6202327 <= inouttargetredT.length;
      do {
         inouttargetredT = `${inouttargetredT.length}`;
         if (floaterK) {
            break;
         }
      } while (floaterK && ((inouttargetredT.length / 5) >= 4 || (containerp / 5) >= 3));
      let rootI = phoneshareh == String.fromCharCode(49,50,121,109,102,49,111,0);
      do {
         phoneshareh += `${parseInt(`${benefitS}`) | phonesharew.length}`;
         if (rootI) {
            break;
         }
      } while ((1 <= containerp) && rootI);
      for (let a = 0; a < 3; a++) {
         containerp /= Math.max(containerp / 3, 3);
      }
      let oinit_8Q = phoneshareh.length <= 6514781;
      do {
         phoneshareh = `${(String.fromCharCode(81,0) == phonesharew ? phonesharew.length : parseInt(`${benefitS}`))}`;
         if (oinit_8Q) {
            break;
         }
      } while ((znewinterstitialG) && oinit_8Q);
      if (inouttargetredT.length < phonesharew.length) {
         inouttargetredT += `${phoneshareh.length | 1}`;
      }
         benefitS /= Math.max((parseFloat(`${parseInt(`${benefitS}`) - (znewinterstitialG ? 2 : 4)}`)), 3);
      telegramS.push(parseInt(`${benefitS}`));
   }
    

   if (iconuserV && (5 ^ telegramS.length) < 1) {
      iconuserV = 89 <= backiconC && 89 <= telegramS.length;
   }
   let libyogay = libsentryK >= 9139307.0;
   do {
      libsentryK -= parseFloat(`${layoutB - 1}`);
      if (libyogay) {
         break;
      }
   } while ((5 <= (parseInt(`${libsentryK}`) / (Math.max(2, layoutB))) && 4.60 <= (libsentryK / (Math.max(1, parseFloat(`${layoutB}`))))) && libyogay);
   let bggradient4 = dicelogo1 ? !dicelogo1 : dicelogo1;
   do {
       let iconbellactiveU = 1;
       let const_ar = false;
       let webview_ = 2;
       let placeholderK = true;
       let f_imageC: Array<any> = [String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,101,95,55,50,0), String.fromCharCode(100,95,52,54,95,111,117,116,0), String.fromCharCode(108,95,53,48,95,115,104,117,116,100,111,119,110,97,99,107,0)];
      if (3 > (webview_ & 4)) {
         const_ar = 14 < webview_;
      }
      while ((3 | webview_) == 4) {
         placeholderK = 16 >= webview_;
         break;
      }
         iconbellactiveU >>= Math.min(Math.abs(f_imageC.length << (Math.min(Math.abs(2), 3))), 5);
         const_ar = webview_ > 47 || placeholderK;
      if (webview_ <= 1 || 2 <= (webview_ ^ 1)) {
         webview_ += ((placeholderK ? 3 : 1) * (const_ar ? 5 : 5));
      }
      if ((webview_ / (Math.max(5, 3))) > 5) {
         f_imageC = [1];
      }
      if (!const_ar) {
         const_ar = (((!placeholderK ? f_imageC.length : 26) | f_imageC.length) <= 26);
      }
          let areaG = 3.0;
          let liveendmodallogo2: Array<any> = [472, 585];
         f_imageC = [2 * iconbellactiveU];
         areaG -= parseFloat(`${parseInt(`${areaG}`) - liveendmodallogo2.length}`);
         liveendmodallogo2.push(3);
         placeholderK = 60 >= webview_ && 60 >= iconbellactiveU;
         const_ar = 63 <= webview_ && !placeholderK;
      for (let z = 0; z < 3; z++) {
         const_ar = placeholderK;
      }
         placeholderK = f_imageC.length <= iconbellactiveU;
      if (4 > iconbellactiveU) {
         iconbellactiveU >>= Math.min(2, Math.abs(2));
      }
      if (!const_ar && 4 <= (f_imageC.length / 3)) {
         const_ar = !placeholderK && 14 > webview_;
      }
          let hook_ = false;
          let greyarrowupn = String.fromCharCode(115,95,54,54,95,100,99,97,97,100,112,99,109,0);
          let arrowrightm = String.fromCharCode(111,95,49,48,95,102,108,105,112,0);
         const_ar = !const_ar;
         hook_ = !greyarrowupn.startsWith(`${hook_}`);
         greyarrowupn += `${arrowrightm.length * 3}`;
         arrowrightm = `${arrowrightm.length}`;
      dicelogo1 = null != helperm.get(`${backiconC}`);
      if (bggradient4) {
         break;
      }
   } while ((backiconC <= 5) && bggradient4);
      iconuserV = 24.19 >= shootnogoalP;
    

   for (let q = 0; q < 1; q++) {
      statisticsactiveL = new Map([[`${bnewinterstitials.size}`, parseInt(`${shootnogoalP}`) % 3]]);
   }
   if (2 == (backiconC % 2)) {
       let backiconmaskI = true;
       let giftbutton5 = 0.0;
       let modelsU = 2;
       let suggestionL: Array<any> = [801, 438, 63];
       let apps2: Array<any> = [410, 611];
      if ((modelsU * giftbutton5) < 4.78 || (giftbutton5 * 4.78) < 1.40) {
          let redscoreball7 = String.fromCharCode(114,101,110,100,105,116,105,111,110,95,118,95,53,57,0);
          let rightK = 1.0;
         giftbutton5 /= Math.max(modelsU & suggestionL.length, 2);
         redscoreball7 = `${parseInt(`${rightK}`) * redscoreball7.length}`;
         rightK += parseFloat(`${redscoreball7.length | 3}`);
      }
         suggestionL.push(3 * suggestionL.length);
      for (let e = 0; e < 1; e++) {
          let catagory5: Array<any> = [868, 723];
          let xvodf: Array<any> = [102, 947, 592];
          let inouttargetyellows: Map<any, any> = new Map([[String.fromCharCode(114,101,110,100,101,114,101,114,115,95,110,95,50,49,0),String.fromCharCode(115,111,108,118,101,114,95,98,95,55,48,0)], [String.fromCharCode(107,95,55,48,95,97,108,112,105,110,101,0),String.fromCharCode(112,114,111,102,105,108,105,110,103,95,119,95,55,52,0)]]);
          let round3 = 1.0;
          let vietnamZ = 3.0;
         giftbutton5 += parseInt(`${vietnamZ}`);
         catagory5.push(parseInt(`${round3}`));
         xvodf.push(1);
         inouttargetyellows = new Map([[`${xvodf.length}`, parseInt(`${round3}`)]]);
         vietnamZ -= parseInt(`${round3}`) ^ 2;
      }
      let iconL = suggestionL.length <= 9384663;
      do {
         suggestionL = [parseInt(`${giftbutton5}`) | modelsU];
         if (iconL) {
            break;
         }
      } while (iconL && (5 > apps2.length));
         modelsU <<= Math.min(5, suggestionL.length);
       let eventE = false;
       let plashK = false;
       let progressM: Array<any> = [912, 922, 352];
      while (plashK) {
         progressM = [parseInt(`${giftbutton5}`) << (Math.min(4, Math.abs(3)))];
         break;
      }
         eventE = (suggestionL.length - parseInt(`${giftbutton5}`)) < 92;
      let main_nY = 8109506 >= modelsU;
      do {
         modelsU -= ((eventE ? 1 : 3) - (backiconmaskI ? 4 : 4));
         if (main_nY) {
            break;
         }
      } while (main_nY && (2.37 <= (modelsU * giftbutton5)));
      if (apps2.includes(progressM.length)) {
         progressM.push((2 << (Math.min(Math.abs((eventE ? 3 : 4)), 1))));
      }
          let showR = 5;
          let leaguedetailsbgl = 2.0;
         giftbutton5 *= suggestionL.length | 2;
         showR |= 1 ^ showR;
         leaguedetailsbgl /= Math.max(parseInt(`${leaguedetailsbgl}`), 3);
      while (4 < modelsU || 2 < (4 % (Math.max(1, modelsU)))) {
          let mcopy_9f = String.fromCharCode(111,99,97,108,95,101,95,57,55,0);
         plashK = eventE;
         mcopy_9f += `${mcopy_9f.length}`;
         break;
      }
         apps2.push(((plashK ? 1 : 2) ^ 2));
      for (let m = 0; m < 3; m++) {
          let activeP = String.fromCharCode(97,95,50,54,95,115,117,99,99,101,115,115,99,98,0);
         apps2.push(2);
         activeP += `${activeP.length + activeP.length}`;
      }
      shootnogoalP -= 1;
   }
   if (bnewinterstitials.get(`${snewarchdefaultso.length}`) == null) {
      snewarchdefaultso = [2 ^ snewarchdefaultso.length];
   }
   for (let j = 0; j < 1; j++) {
      snewarchdefaultso.push(2 * bnewinterstitials.size);
   }
    const url = `https://www.bing.com/search?q=${encodedSearchTerm}&form=QBLH&sp=-1&ghc=1&lq=0&pq=a&sc=10-1&qs=n&sk=&cvid=F4E27DDDEE8343F082F994097EF7592A&ghsh=0&ghacc=0&ghpl=`;

   for (let b = 0; b < 2; b++) {
      basketballplayerplaceholdern = snewarchdefaultso.length <= 11;
   }
   let zhengpianZ = 8126361 <= helperm.size;
   do {
       let libswscaleZ = String.fromCharCode(115,116,114,101,110,103,116,104,95,52,95,56,0);
       let halfY = 0.0;
         libswscaleZ += `${libswscaleZ.length << (Math.min(Math.abs(1), 1))}`;
       let yingU = true;
      if (halfY > 4.42) {
          let iconY = String.fromCharCode(97,100,100,95,117,95,53,52,0);
          let championH: Map<any, any> = new Map([[String.fromCharCode(97,100,106,117,115,116,101,114,95,114,95,49,51,0),139], [String.fromCharCode(109,115,110,119,99,95,103,95,52,54,0),625]]);
          let cancelz = String.fromCharCode(106,95,48,95,104,97,98,108,101,0);
         yingU = cancelz.length >= libswscaleZ.length;
         iconY += `${iconY.length * championH.size}`;
         championH = new Map([[`${championH.size}`, championH.size]]);
         cancelz = `${(String.fromCharCode(95,0) == iconY ? championH.size : iconY.length)}`;
      }
      if (halfY > libswscaleZ.length) {
         halfY /= Math.max(1 & parseInt(`${halfY}`), 3);
      }
          let views9 = 4;
          let toponk = String.fromCharCode(113,95,56,48,95,117,110,99,111,114,114,0);
          let nbatrophy0 = true;
         halfY -= parseInt(`${halfY}`) / 3;
         views9 /= Math.max(3, (toponk == String.fromCharCode(67,0) ? (nbatrophy0 ? 5 : 5) : toponk.length));
         nbatrophy0 = !nbatrophy0;
       let infoN: Array<any> = [String.fromCharCode(122,95,57,56,95,115,121,110,116,97,120,0), String.fromCharCode(97,95,56,57,95,112,105,116,99,104,0)];
      helperm = new Map([[`${backiconC}`, ((basketballplayerplaceholdern ? 5 : 5) / (Math.max(backiconC, 6)))]]);
      if (zhengpianZ) {
         break;
      }
   } while (zhengpianZ && (5 >= (helperm.size << (Math.min(Math.abs(4), 4)))));
       let iconnointernetP = String.fromCharCode(103,95,49,48,95,97,99,111,109,112,114,101,115,115,111,114,0);
         iconnointernetP = `${iconnointernetP.length}`;
       let filledY = 3.0;
      let defaultplayerimgq = filledY >= 8722171.0;
      do {
          let becomej: Map<any, any> = new Map([[String.fromCharCode(110,105,109,97,116,101,100,95,53,95,53,51,0),true ], [String.fromCharCode(114,101,119,97,114,100,115,95,119,95,52,57,0),false ], [String.fromCharCode(116,97,112,102,105,108,116,101,114,95,122,95,49,54,0),false ]]);
          let matchdetailbgx: Map<any, any> = new Map([[String.fromCharCode(97,95,49,49,95,108,105,110,107,0),634], [String.fromCharCode(110,101,111,110,116,101,115,116,95,107,95,52,51,0),239]]);
          let aboutt = 0.0;
          let resendW: Array<any> = [271, 942, 60];
         filledY += 3;
         becomej.set(`${resendW.length}`, resendW.length);
         matchdetailbgx = new Map([[`${matchdetailbgx.size}`, matchdetailbgx.size - 1]]);
         aboutt += parseFloat(`${parseInt(`${aboutt}`) % 3}`);
         if (defaultplayerimgq) {
            break;
         }
      } while (defaultplayerimgq && (3 < (2 * iconnointernetP.length) || 2.13 < (5.94 - filledY)));
      backiconC += 3;
   while (shootnogoalP < backiconC) {
       let greyp = 1.0;
       let awayicon0 = String.fromCharCode(104,95,56,56,95,118,108,99,115,112,101,99,0);
       let reactnativeratingsD: Array<any> = [84, 866, 365];
       let constantsC = String.fromCharCode(112,95,56,57,0);
       let modityE = 4.0;
       let fastforwardg: Map<any, any> = new Map([[String.fromCharCode(106,95,56,52,95,98,121,116,101,114,117,110,0),true ], [String.fromCharCode(98,95,55,55,95,106,112,101,103,100,115,112,0),true ]]);
       let teamdetailsbgD: Array<any> = [230, 86, 386];
       let fastforward_: Array<any> = [307, 981, 78];
         fastforwardg.set(constantsC, 3 % (Math.max(2, constantsC.length)));
       let iconstarz: Array<any> = [800, 442, 616];
       let tcopy_1oY = String.fromCharCode(98,117,102,108,101,110,95,51,95,56,52,0);
       let largeB = String.fromCharCode(100,101,102,105,110,105,116,105,111,110,95,107,95,49,57,0);
         teamdetailsbgD = [fastforward_.length];
      for (let p = 0; p < 2; p++) {
         modityE /= Math.max(parseFloat(`${parseInt(`${greyp}`)}`), 2);
      }
      for (let i = 0; i < 3; i++) {
         constantsC += `${tcopy_1oY.length}`;
      }
         reactnativeratingsD = [reactnativeratingsD.length];
         iconstarz.push((largeB == String.fromCharCode(109,0) ? largeB.length : reactnativeratingsD.length));
      while (largeB.length < tcopy_1oY.length) {
         tcopy_1oY = `${largeB.length + 2}`;
         break;
      }
      let hiadY = 9211445 >= fastforward_.length;
      do {
          let floating2 = String.fromCharCode(107,95,49,54,95,100,101,99,105,109,97,108,115,0);
          let basketballhometeam6 = 4.0;
          let homeactive4 = String.fromCharCode(103,95,52,55,95,114,101,105,110,115,101,114,116,0);
          let indexg = String.fromCharCode(114,95,49,50,95,115,116,114,105,112,101,0);
          let static_sU = 1.0;
         fastforward_.push(parseInt(`${modityE}`) | teamdetailsbgD.length);
         floating2 += `${floating2.length}`;
         basketballhometeam6 /= Math.max(2, parseInt(`${static_sU}`));
         homeactive4 += `${floating2.length}`;
         indexg += `${parseInt(`${static_sU}`) - 1}`;
         if (hiadY) {
            break;
         }
      } while (hiadY && ((1 / (Math.max(3, fastforward_.length))) < 1));
         teamdetailsbgD = [1 | largeB.length];
      for (let j = 0; j < 1; j++) {
         tcopy_1oY += `${iconstarz.length % 3}`;
      }
      let armvas = teamdetailsbgD.length <= 7428279;
      do {
          let ycopy_gdd = String.fromCharCode(103,95,54,54,95,115,97,108,116,108,101,110,0);
          let collections: Map<any, any> = new Map([[String.fromCharCode(108,95,53,54,95,114,101,97,100,105,110,105,116,0),257], [String.fromCharCode(99,111,118,101,114,95,108,95,54,56,0),75], [String.fromCharCode(116,95,52,54,95,112,105,110,99,104,0),390]]);
          let panglee = 2.0;
          let volumek = false;
         teamdetailsbgD.push((tcopy_1oY == String.fromCharCode(101,0) ? tcopy_1oY.length : parseInt(`${panglee}`)));
         ycopy_gdd += `${(ycopy_gdd == String.fromCharCode(110,0) ? collections.size : ycopy_gdd.length)}`;
         collections.set(ycopy_gdd, collections.size | ycopy_gdd.length);
         panglee /= Math.max(parseFloat(`${collections.size / (Math.max(ycopy_gdd.length, 7))}`), 1);
         volumek = 63 == ycopy_gdd.length;
         if (armvas) {
            break;
         }
      } while (((3 - tcopy_1oY.length) == 3) && armvas);
      shootnogoalP *= layoutB & 1;
      greyp -= awayicon0.length >> (Math.min(Math.abs(3), 3));
      awayicon0 += "2";
      break;
   }
    try {

      auto_7k = layoutB == 72;
      auto_7k = 61 == layoutB;
      backiconC /= Math.max(helperm.size, 4);
       let switch_gsO: Map<any, any> = new Map([[String.fromCharCode(97,95,49,55,95,103,101,111,116,97,103,115,0),String.fromCharCode(115,98,105,116,115,95,104,95,49,49,0)], [String.fromCharCode(105,110,103,101,110,105,101,110,116,95,112,95,52,49,0),String.fromCharCode(101,120,101,99,117,116,97,98,108,101,95,56,95,51,50,0)]]);
       let taiwans = String.fromCharCode(118,101,99,95,118,95,49,57,0);
      let bgvipsportC = 9768029 >= switch_gsO.size;
      do {
          let backc = 4;
          let predictionactive6 = 4.0;
          let iconcurrentmatchV = 0.0;
         switch_gsO.set(taiwans, taiwans.length);
         backc += parseInt(`${predictionactive6}`) ^ backc;
         predictionactive6 -= 1 | parseInt(`${predictionactive6}`);
         iconcurrentmatchV /= Math.max(2, parseFloat(`${3}`));
         if (bgvipsportC) {
            break;
         }
      } while (((5 ^ taiwans.length) == 1) && bgvipsportC);
      for (let u = 0; u < 3; u++) {
         taiwans = "1";
      }
          let iconuserm = 0.0;
         taiwans = `${taiwans.length}`;
         iconuserm += parseFloat(`${3 ^ parseInt(`${iconuserm}`)}`);
          let expiredr = 2.0;
          let a_managere = 4.0;
          let green_ = String.fromCharCode(114,95,57,52,95,100,101,102,101,114,114,101,114,0);
         switch_gsO = new Map([[`${switch_gsO.size}`, switch_gsO.size]]);
         expiredr += parseInt(`${a_managere}`) | green_.length;
         a_managere /= Math.max(parseFloat(`${3 + green_.length}`), 3);
       let themeJ: Array<any> = [String.fromCharCode(121,95,49,55,95,114,101,99,111,109,98,105,110,101,0), String.fromCharCode(119,95,57,57,95,105,110,115,117,102,102,105,99,105,101,110,116,0)];
       let whistlel: Array<any> = [813, 687];
      for (let f = 0; f < 3; f++) {
          let thumbnailo = 4.0;
          let expandV = String.fromCharCode(100,95,56,48,95,115,101,97,114,99,104,0);
          let homeloadingJ = String.fromCharCode(102,95,57,49,95,109,118,101,99,0);
          let iconclosewhiteI = 5;
         themeJ.push(whistlel.length << (Math.min(1, Math.abs(switch_gsO.size))));
         thumbnailo /= Math.max(4, parseFloat(`${iconclosewhiteI & 3}`));
         expandV += `${homeloadingJ.length + iconclosewhiteI}`;
         homeloadingJ += `${2 + iconclosewhiteI}`;
      }
      iconuserV = telegramS.includes(basketballplayerplaceholdern);
      if (await InAppBrowser.isAvailable()) {

       let currenty: Map<any, any> = new Map([[String.fromCharCode(100,95,50,55,95,115,112,107,114,0),136], [String.fromCharCode(118,111,116,101,115,95,53,95,57,51,0),965], [String.fromCharCode(104,113,97,100,115,112,95,52,95,50,55,0),311]]);
       let playlistk = String.fromCharCode(117,110,100,101,114,95,105,95,49,50,0);
       let termsw = String.fromCharCode(105,95,50,53,95,110,116,104,0);
          let mbridgeG: Map<any, any> = new Map([[String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,95,104,95,53,57,0),String.fromCharCode(100,101,99,111,100,101,102,95,50,95,56,49,0)], [String.fromCharCode(109,95,50,95,97,108,112,104,97,98,101,116,115,0),String.fromCharCode(115,95,54,57,95,115,117,98,116,114,97,99,116,111,114,0)]]);
          let playershirt9 = String.fromCharCode(121,95,55,95,112,108,97,110,101,115,0);
          let comment9: Map<any, any> = new Map([[String.fromCharCode(115,112,101,110,100,101,114,95,55,95,55,49,0),819], [String.fromCharCode(99,111,109,112,114,101,115,115,101,100,95,105,95,52,49,0),612], [String.fromCharCode(115,116,114,99,115,112,110,95,118,95,55,48,0),180]]);
         playlistk = `${comment9.size}`;
         mbridgeG = new Map([[`${mbridgeG.size}`, (playershirt9 == String.fromCharCode(113,0) ? playershirt9.length : mbridgeG.size)]]);
         comment9.set(`${playershirt9}`, 2 << (Math.min(2, Math.abs(mbridgeG.size))));
          let albumi = String.fromCharCode(109,101,115,104,101,115,95,109,95,53,49,0);
          let default_q2 = true;
          let libfabricjnix = String.fromCharCode(109,95,56,50,95,114,101,118,105,115,105,111,110,0);
         playlistk = `${2 - playlistk.length}`;
         albumi = `${((default_q2 ? 5 : 4))}`;
         default_q2 = 33 >= albumi.length;
         libfabricjnix = `${(albumi == String.fromCharCode(90,0) ? albumi.length : libfabricjnix.length)}`;
      for (let j = 0; j < 2; j++) {
         termsw += `${(String.fromCharCode(74,0) == playlistk ? currenty.size : playlistk.length)}`;
      }
      if (1 >= termsw.length) {
          let crossg: Array<any> = [763, 575];
          let libtanw = String.fromCharCode(105,110,116,101,110,116,105,111,110,95,118,95,57,57,0);
          let minimizet = String.fromCharCode(100,115,116,114,101,97,109,95,102,95,53,53,0);
          let pingI = 3;
          let iconsaveimageY = String.fromCharCode(121,95,55,55,95,114,101,99,118,118,0);
         currenty = new Map([[minimizet, libtanw.length]]);
         crossg = [iconsaveimageY.length | 1];
         libtanw = `${crossg.length ^ 3}`;
         minimizet = `${iconsaveimageY.length | 3}`;
         pingI %= Math.max(2, iconsaveimageY.length);
      }
      if (1 > (currenty.size | playlistk.length) || 1 > (currenty.size | playlistk.length)) {
         currenty.set(playlistk, 3);
      }
         termsw += `${currenty.size}`;
         playlistk = `${playlistk.length << (Math.min(Math.abs(1), 4))}`;
      while (termsw.length == playlistk.length) {
          let sigmob3 = String.fromCharCode(112,95,57,56,95,101,120,112,108,111,100,105,110,103,0);
          let pagination5 = 1.0;
          let feedbackH: Map<any, any> = new Map([[String.fromCharCode(100,101,99,95,111,95,53,48,0),209], [String.fromCharCode(104,95,53,57,95,99,111,110,116,105,103,117,111,117,115,0),176]]);
          let securityB = String.fromCharCode(109,95,50,52,95,97,117,116,111,108,111,99,107,0);
         termsw = `${(String.fromCharCode(111,0) == termsw ? termsw.length : sigmob3.length)}`;
         sigmob3 += `${feedbackH.size % 2}`;
         pagination5 *= 2;
         feedbackH.set(`${pagination5}`, 2);
         securityB += `${parseInt(`${pagination5}`)}`;
         break;
      }
      let scheduleB = String.fromCharCode(57,55,111,102,0) == playlistk;
      do {
         playlistk += `${(playlistk == String.fromCharCode(81,0) ? currenty.size : playlistk.length)}`;
         if (scheduleB) {
            break;
         }
      } while (scheduleB && (5 <= playlistk.length));
      libsentryK /= Math.max(4, parseFloat(`${statisticsactiveL.size}`));
   let libyogaU = shootnogoalP >= 5310198.0;
   do {
       let basketballdetailsbgG = 3.0;
       let ewarded0 = String.fromCharCode(97,95,54,57,95,100,101,108,97,121,101,100,0);
       let dropdown7: Array<any> = [String.fromCharCode(99,104,97,110,103,101,103,114,111,117,112,95,108,95,54,49,0), String.fromCharCode(117,116,105,108,95,122,95,51,55,0)];
       let searchbarz = 5.0;
       let basketballdetailsbgE: Map<any, any> = new Map([[String.fromCharCode(112,95,49,52,95,100,105,116,97,98,108,101,0),false ], [String.fromCharCode(97,95,50,52,95,118,105,115,105,98,105,108,105,116,105,116,101,115,0),false ], [String.fromCharCode(117,110,108,111,99,107,95,103,95,51,50,0),true ]]);
          let graphics5 = false;
         searchbarz -= dropdown7.length % (Math.max(2, 2));
         graphics5 = graphics5 || graphics5;
      if (!ewarded0.startsWith(`${basketballdetailsbgE.size}`)) {
         ewarded0 += `${basketballdetailsbgE.size}`;
      }
      if ((4.46 / (Math.max(10, searchbarz))) > 2.93) {
         dropdown7 = [parseInt(`${basketballdetailsbgG}`)];
      }
      let sharemodal3 = 6489047 >= basketballdetailsbgE.size;
      do {
          let libreact8 = String.fromCharCode(120,95,52,48,95,107,101,121,112,97,116,104,0);
          let smallQ = String.fromCharCode(101,95,51,55,95,114,101,99,116,0);
         basketballdetailsbgE.set(libreact8, (String.fromCharCode(105,0) == libreact8 ? libreact8.length : smallQ.length));
         if (sharemodal3) {
            break;
         }
      } while ((basketballdetailsbgE.get(`${basketballdetailsbgG}`) == null) && sharemodal3);
      if (3.70 >= (parseFloat(`${ewarded0.length}`) - basketballdetailsbgG)) {
         ewarded0 += `${basketballdetailsbgE.size & parseInt(`${searchbarz}`)}`;
      }
      while (ewarded0.endsWith(`${basketballdetailsbgG}`)) {
         basketballdetailsbgG /= Math.max((parseFloat(`${String.fromCharCode(75,0) == ewarded0 ? ewarded0.length : parseInt(`${basketballdetailsbgG}`)}`)), 5);
         break;
      }
         basketballdetailsbgG /= Math.max(3, parseFloat(`${parseInt(`${basketballdetailsbgG}`)}`));
         dropdown7.push(3);
      for (let j = 0; j < 3; j++) {
          let bggradientF = String.fromCharCode(104,95,55,51,95,112,105,120,98,108,111,99,107,100,115,112,0);
         basketballdetailsbgE.set(`${searchbarz}`, 3 - parseInt(`${searchbarz}`));
         bggradientF = `${bggradientF.length >> (Math.min(Math.abs(2), 3))}`;
      }
      for (let p = 0; p < 1; p++) {
          let whitebellR = String.fromCharCode(109,95,55,53,95,115,117,99,99,101,115,115,111,114,0);
          let y_positionx = 2;
         dropdown7.push((String.fromCharCode(101,0) == ewarded0 ? dropdown7.length : ewarded0.length));
         whitebellR = `${whitebellR.length << (Math.min(5, Math.abs(y_positionx)))}`;
         y_positionx += (whitebellR == String.fromCharCode(69,0) ? whitebellR.length : y_positionx);
      }
      while (!Array.from(basketballdetailsbgE.values()).includes(dropdown7.length)) {
          let basketballmatchdetailbgK = String.fromCharCode(116,95,57,54,95,101,109,105,116,0);
          let tickedL = 0;
          let bingY = 0.0;
          let tumbnail5 = String.fromCharCode(100,105,103,101,115,116,98,121,110,97,109,101,95,50,95,55,54,0);
         basketballdetailsbgE = new Map([[`${bingY}`, basketballmatchdetailbgK.length]]);
         basketballmatchdetailbgK = `${tumbnail5.length}`;
         tickedL >>= Math.min(5, Math.abs(tickedL));
         bingY *= parseFloat(`${1}`);
         tumbnail5 += `${tickedL | 2}`;
         break;
      }
       let type_8S = String.fromCharCode(101,120,101,99,117,116,101,95,52,95,57,48,0);
       let predictiondefaultC = 2;
      if ((searchbarz / 4.92) < 4.47 && (dropdown7.length ^ 2) < 1) {
         dropdown7 = [1];
      }
      for (let l = 0; l < 2; l++) {
         basketballdetailsbgE = new Map([[`${basketballdetailsbgG}`, parseInt(`${searchbarz}`) + parseInt(`${basketballdetailsbgG}`)]]);
      }
      shootnogoalP += basketballdetailsbgE.size;
      if (libyogaU) {
         break;
      }
   } while (libyogaU && (2.42 > (shootnogoalP / (Math.max(2.49, 8))) || 2.49 > shootnogoalP));
      dicelogo1 = snewarchdefaultso.length > 75;
      layoutB <<= Math.min(1, Math.abs((1 * (dicelogo1 ? 5 : 5))));
        await InAppBrowser.open(url);
      } else {

   while (!basketballplayerplaceholdern) {
      basketballplayerplaceholdern = shootnogoalP == 99.7;
      break;
   }
       let mbbannerR: Array<any> = [589, 575];
      for (let o = 0; o < 3; o++) {
          let iconeditJ: Map<any, any> = new Map([[String.fromCharCode(114,95,55,55,95,108,105,98,120,118,105,100,0),700], [String.fromCharCode(97,95,56,56,95,114,101,100,117,99,116,105,111,110,115,0),864], [String.fromCharCode(109,95,56,55,95,99,114,111,112,112,105,110,103,0),791]]);
          let mintegralp = String.fromCharCode(102,95,55,56,95,115,97,109,101,113,0);
          let upgrade8 = false;
          let coreD = String.fromCharCode(113,95,50,95,114,101,97,99,104,97,98,105,108,105,116,121,0);
         mbbannerR.push(2 - coreD.length);
         iconeditJ = new Map([[`${iconeditJ.size}`, iconeditJ.size]]);
         mintegralp = "3";
         upgrade8 = !upgrade8;
         coreD = `${((upgrade8 ? 1 : 3) % (Math.max(2, 6)))}`;
      }
      for (let j = 0; j < 3; j++) {
         mbbannerR.push(1 + mbbannerR.length);
      }
      for (let g = 0; g < 1; g++) {
         mbbannerR.push(1);
      }
      shootnogoalP += ((basketballplayerplaceholdern ? 4 : 5));
      helperm.set(`${dicelogo1}`, telegramS.length);
      layoutB &= bnewinterstitials.size;
        Linking.openURL(url);
      }
    } catch (e) {

   if (3.87 >= shootnogoalP) {
       let showlessD = 3.0;
       let homeT = 1;
       let libavutilr = 5;
          let privatechatbgL = 0.0;
          let thumbnaila = 1.0;
         showlessD -= parseInt(`${privatechatbgL}`) * 3;
         privatechatbgL *= 3;
         thumbnaila += parseFloat(`${3 | parseInt(`${thumbnaila}`)}`);
          let const_12: Array<any> = [35, 551];
          let iconuserg = true;
          let userM = String.fromCharCode(115,108,97,115,104,101,115,95,102,95,53,50,0);
         homeT += const_12.length | parseInt(`${showlessD}`);
         const_12 = [((iconuserg ? 3 : 5) * 2)];
         iconuserg = !iconuserg;
         userM = `${userM.length}`;
      while (libavutilr > homeT) {
         libavutilr |= libavutilr >> (Math.min(Math.abs(parseInt(`${showlessD}`)), 5));
         break;
      }
         homeT /= Math.max(libavutilr, 4);
          let armvaC: Array<any> = [363, 484];
         showlessD -= libavutilr & 3;
         armvaC = [armvaC.length];
      let penaltyshootnogoalQ = 8075132 <= homeT;
      do {
          let directF = String.fromCharCode(98,105,116,105,122,101,110,95,117,95,53,50,0);
          let searchbar2 = String.fromCharCode(114,101,103,105,115,116,114,97,110,116,95,53,95,57,0);
          let orangee = 5;
          let zhengpianJ: Array<any> = [392, 856];
         homeT /= Math.max(3, parseInt(`${showlessD}`));
         directF = `${orangee * 2}`;
         searchbar2 = `${zhengpianJ.length}`;
         orangee ^= 1;
         zhengpianJ = [3];
         if (penaltyshootnogoalQ) {
            break;
         }
      } while (penaltyshootnogoalQ && ((homeT - showlessD) <= 5.53));
          let googleY = 2.0;
         showlessD -= 1;
         googleY *= parseInt(`${googleY}`);
      if (4.49 <= (showlessD + 2.56)) {
         showlessD *= homeT % (Math.max(parseInt(`${showlessD}`), 3));
      }
       let default_hdY: Map<any, any> = new Map([[String.fromCharCode(98,95,51,50,95,105,101,110,116,114,121,0),false ], [String.fromCharCode(98,95,51,55,95,112,114,101,115,101,110,99,101,115,0),false ]]);
       let fullg: Map<any, any> = new Map([[String.fromCharCode(114,108,118,108,99,95,108,95,57,53,0),265], [String.fromCharCode(98,114,97,99,101,95,108,95,57,53,0),383], [String.fromCharCode(106,95,54,54,95,112,114,111,118,105,100,105,110,103,0),931]]);
      shootnogoalP += parseInt(`${shootnogoalP}`) * 2;
   }
   let profileinactiveK = 6341455.0 >= shootnogoalP;
   do {
       let megaphoneI: Array<any> = [String.fromCharCode(101,95,52,52,95,101,110,100,112,111,105,110,116,115,0), String.fromCharCode(101,95,53,55,95,118,101,114,105,102,105,97,116,105,111,110,0)];
       let yellowtoredm = String.fromCharCode(122,95,54,53,95,97,115,115,105,103,110,0);
       let nalyticsJ = String.fromCharCode(107,105,116,95,122,95,51,55,0);
       let orangetickk = true;
       let librrcr: Map<any, any> = new Map([[String.fromCharCode(109,105,114,114,111,114,105,110,103,95,121,95,52,57,0),935], [String.fromCharCode(103,95,53,56,95,99,111,110,115,116,114,97,105,110,0),753], [String.fromCharCode(103,95,57,49,95,111,98,115,101,114,118,101,0),402]]);
      let utilss = orangetickk ? !orangetickk : orangetickk;
      do {
         orangetickk = String.fromCharCode(70,0) == yellowtoredm;
         if (utilss) {
            break;
         }
      } while (utilss && (orangetickk));
         nalyticsJ = `${megaphoneI.length ^ 1}`;
       let privatechatbgM = 1.0;
       let dragd = 5.0;
          let basketballtrophy1 = String.fromCharCode(98,110,98,105,110,112,97,100,95,112,95,53,56,0);
          let bodanR: Map<any, any> = new Map([[String.fromCharCode(109,95,54,49,95,114,116,109,112,101,0),182], [String.fromCharCode(115,95,56,51,95,109,116,105,109,101,0),501]]);
          let reducer_ = 0;
         dragd += (yellowtoredm == String.fromCharCode(75,0) ? yellowtoredm.length : bodanR.size);
         basketballtrophy1 += `${reducer_ & 3}`;
         bodanR = new Map([[`${reducer_}`, 3 - reducer_]]);
      if (Array.from(librrcr.keys()).includes(`${privatechatbgM}`)) {
         librrcr = new Map([[`${megaphoneI.length}`, 3 * megaphoneI.length]]);
      }
       let eyeopenq: Map<any, any> = new Map([[String.fromCharCode(99,104,97,110,103,105,110,103,95,104,95,52,53,0),5], [String.fromCharCode(119,95,54,95,112,97,116,104,109,116,117,0),621]]);
       let imagewatchlivet: Map<any, any> = new Map([[String.fromCharCode(111,110,116,114,97,115,116,95,112,95,52,54,0),String.fromCharCode(114,95,54,57,95,108,117,109,98,101,114,106,97,99,107,0)], [String.fromCharCode(97,95,52,53,95,115,104,97,100,111,119,115,0),String.fromCharCode(121,95,55,95,105,110,100,101,118,115,0)]]);
      for (let b = 0; b < 3; b++) {
         imagewatchlivet = new Map([[`${librrcr.size}`, ((orangetickk ? 3 : 3) - librrcr.size)]]);
      }
         megaphoneI.push(2 >> (Math.min(2, Math.abs(parseInt(`${privatechatbgM}`)))));
      if (Array.from(librrcr.keys()).includes(`${imagewatchlivet.size}`)) {
         librrcr = new Map([[`${privatechatbgM}`, (parseInt(`${privatechatbgM}`) << (Math.min(5, Math.abs((orangetickk ? 3 : 4)))))]]);
      }
       let libavformatD = String.fromCharCode(110,111,110,110,101,103,97,116,105,118,101,95,100,95,53,52,0);
       let playercommonj = String.fromCharCode(107,95,50,53,95,115,119,105,116,99,104,105,110,103,0);
      while (!nalyticsJ.endsWith(`${orangetickk}`)) {
         orangetickk = orangetickk || imagewatchlivet.size < 82;
         break;
      }
      let pathY = privatechatbgM <= 6723802.0;
      do {
         privatechatbgM *= 2 - parseInt(`${privatechatbgM}`);
         if (pathY) {
            break;
         }
      } while ((librrcr.get(`${privatechatbgM}`) == null) && pathY);
      let baidu2 = privatechatbgM >= 9339767.0;
      do {
          let savea = String.fromCharCode(112,114,101,98,117,102,95,54,95,54,49,0);
          let overlayK = 2.0;
         privatechatbgM *= 3;
         savea = `${savea.length}`;
         overlayK *= (String.fromCharCode(122,0) == savea ? savea.length : parseInt(`${overlayK}`));
         if (baidu2) {
            break;
         }
      } while ((3.96 > (2.39 - privatechatbgM) || (2.39 * privatechatbgM) > 1.49) && baidu2);
          let google0 = String.fromCharCode(102,95,53,54,95,112,117,98,0);
          let latnx = String.fromCharCode(100,111,119,110,108,111,97,100,95,50,95,56,52,0);
          let videobufferloadingX = String.fromCharCode(114,105,103,104,116,115,95,103,95,51,49,0);
         playercommonj = "2";
         google0 = `${(String.fromCharCode(69,0) == videobufferloadingX ? videobufferloadingX.length : latnx.length)}`;
         latnx += `${google0.length ^ 2}`;
          let default_d5 = false;
          let eventsplash_ = 0.0;
          let textlayoutmanager5 = 1.0;
         eyeopenq.set(`${privatechatbgM}`, 2 ^ parseInt(`${privatechatbgM}`));
         default_d5 = !default_d5;
         eventsplash_ += parseInt(`${textlayoutmanager5}`);
      shootnogoalP += snewarchdefaultso.length & 2;
      if (profileinactiveK) {
         break;
      }
   } while (profileinactiveK && (4.21 > (shootnogoalP / (Math.max(2, bnewinterstitials.size))) && (parseInt(`${shootnogoalP}`) / (Math.max(bnewinterstitials.size, 2))) > 2));
      shootnogoalP /= Math.max(2, 2);
      basketballplayerplaceholdern = iconuserV && !dicelogo1;
      Linking.openURL(url);
    }
  }, [vod]);

  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  

  

  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  

  
  
  

  const fetchComments = () =>
    wawaUsernameAdult.getReviewDetails(vod?.vod_douban_id.toString() ?? "").then(
      (data) => {
        return data.douban_reviews;
      }
    );

  const { data: onlineComments, isFetching: isFetchingComments } = useQuery({
    queryKey: ["relatedComments", vod?.vod_id],
    queryFn: () => fetchComments(),
  });

  useEffect(() => {
    const mergeAllComments = async () => {
       let fullg = 4.0;
    let modali = 1.0;
    let sellj = 1.0;
    let yellowanimationlive_: Map<any, any> = new Map([[String.fromCharCode(112,115,110,114,104,118,115,95,111,95,56,57,0),String.fromCharCode(117,116,105,108,105,116,105,101,115,95,112,95,52,0)], [String.fromCharCode(112,114,111,98,101,95,57,95,52,0),String.fromCharCode(121,95,49,51,95,119,97,108,107,0)]]);
    let disconnected_: Array<any> = [847, 418, 161];
    let thumbnailk = String.fromCharCode(115,95,49,48,48,95,109,101,115,115,97,103,101,115,0);
    let modityF = 1.0;
    let chinaj = false;
    let final_jdh = false;
    let icondefaultthumbnaill = String.fromCharCode(104,95,51,95,112,114,101,100,105,99,116,111,114,115,0);
    let links = 3;
    let signinupD = String.fromCharCode(109,95,54,48,95,108,111,99,97,108,105,122,97,116,105,111,110,0);
    let flipperx = true;
    let phoneshareS = 5.0;
    let tumbnailQ = String.fromCharCode(98,114,97,110,100,95,52,95,49,49,0);
    let homeactivef = String.fromCharCode(112,111,115,115,105,98,108,121,95,99,95,55,56,0);
   for (let h = 0; h < 2; h++) {
      final_jdh = yellowanimationlive_.size >= 2;
   }
      modityF *= parseInt(`${modityF}`);
      flipperx = String.fromCharCode(98,0) == signinupD || disconnected_.length <= 75;
       let regengo = false;
         regengo = (regengo ? !regengo : regengo);
          let animationsT = String.fromCharCode(100,101,115,116,114,117,99,116,105,118,101,95,110,95,50,55,0);
          let bannerl = String.fromCharCode(97,95,50,95,115,116,111,114,101,100,0);
          let predictionJ = String.fromCharCode(114,95,49,54,95,97,110,105,109,97,116,105,111,110,0);
         regengo = regengo && predictionJ.length == 42;
         animationsT += `${bannerl.length ^ animationsT.length}`;
         bannerl = `${bannerl.length}`;
         predictionJ += `${animationsT.length}`;
      for (let g = 0; g < 3; g++) {
         regengo = !regengo;
      }
      yellowanimationlive_ = new Map([[`${final_jdh}`, (icondefaultthumbnaill == String.fromCharCode(76,0) ? (final_jdh ? 5 : 1) : icondefaultthumbnaill.length)]]);
      icondefaultthumbnaill = `${(String.fromCharCode(90,0) == icondefaultthumbnaill ? parseInt(`${fullg}`) : icondefaultthumbnaill.length)}`;

      let mergedArray;

      modityF /= Math.max(4, 1 - links);
      chinaj = (sellj * icondefaultthumbnaill.length) == 84.41;
   while (1 < (yellowanimationlive_.size << (Math.min(Math.abs(1), 5)))) {
       let sortd = 3.0;
       let redscoreballe = String.fromCharCode(117,95,52,57,95,105,110,116,114,110,108,0);
       let traminit = 2;
       let verticalC = String.fromCharCode(114,101,102,112,105,99,95,105,95,49,56,0);
       let anytimeE = String.fromCharCode(107,95,56,95,101,120,116,101,110,116,0);
          let penaltyshootE = String.fromCharCode(102,95,49,50,95,118,98,114,117,115,104,0);
          let selectionG = false;
         anytimeE += `${traminit}`;
         penaltyshootE = `${((selectionG ? 2 : 3))}`;
         selectionG = penaltyshootE.includes(`${selectionG}`);
      if (4 == (traminit - 4) || 1 == (verticalC.length - 4)) {
         traminit %= Math.max(3 << (Math.min(3, verticalC.length)), 4);
      }
         anytimeE += "2";
      let streamingB = String.fromCharCode(116,53,103,0) == verticalC;
      do {
         verticalC += "2";
         if (streamingB) {
            break;
         }
      } while ((!verticalC.startsWith(redscoreballe)) && streamingB);
      if (!redscoreballe.startsWith(verticalC)) {
          let iconshareZ = 2.0;
         redscoreballe = `${parseInt(`${iconshareZ}`) + redscoreballe.length}`;
      }
      if (redscoreballe.length <= verticalC.length) {
          let favoriteN = String.fromCharCode(114,95,50,54,95,111,117,116,113,0);
          let neon9: Array<any> = [798, 569];
          let matchesi = 0.0;
          let awayI = String.fromCharCode(104,95,49,95,98,114,117,115,104,101,115,0);
          let iconpointscoreb = 3.0;
         redscoreballe = `${traminit}`;
         favoriteN = `${awayI.length}`;
         neon9 = [(awayI == String.fromCharCode(50,0) ? awayI.length : parseInt(`${iconpointscoreb}`))];
         matchesi /= Math.max(3, 1);
         iconpointscoreb /= Math.max(2, favoriteN.length | awayI.length);
      }
         traminit >>= Math.min(Math.abs(3 >> (Math.min(3, redscoreballe.length))), 3);
       let leaguedetailsbga = String.fromCharCode(102,95,55,55,95,105,110,105,116,105,97,108,105,122,101,0);
       let scorepopsound8 = String.fromCharCode(115,116,114,111,107,101,114,95,51,95,55,48,0);
      for (let r = 0; r < 1; r++) {
          let index1 = String.fromCharCode(112,95,49,56,95,100,118,98,116,120,116,0);
          let latnq: Array<any> = [709, 527, 59];
         redscoreballe += `${verticalC.length}`;
         index1 = `${(index1 == String.fromCharCode(87,0) ? index1.length : latnq.length)}`;
         latnq = [3];
      }
      while (!anytimeE.endsWith(`${sortd}`)) {
          let hiadl = false;
          let telegramk = 4.0;
          let awayplayera = 4.0;
          let pageQ: Array<any> = [String.fromCharCode(99,111,100,105,110,103,116,121,112,101,95,54,95,51,50,0), String.fromCharCode(101,102,102,101,99,116,105,118,101,108,121,95,106,95,57,54,0)];
          let libavfilterz: Map<any, any> = new Map([[String.fromCharCode(99,95,52,56,95,105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,0),String.fromCharCode(100,105,115,112,101,110,115,101,114,95,115,95,49,0)], [String.fromCharCode(97,99,116,105,118,97,116,101,95,57,95,53,51,0),String.fromCharCode(116,95,53,53,95,105,110,99,111,109,112,97,116,105,98,108,101,0)], [String.fromCharCode(100,98,105,115,95,98,95,50,51,0),String.fromCharCode(115,101,109,105,99,111,108,111,110,95,51,95,53,51,0)]]);
         sortd *= parseFloat(`${libavfilterz.size}`);
         hiadl = pageQ.length == parseInt(`${awayplayera}`);
         telegramk /= Math.max(2, parseInt(`${telegramk}`) & 2);
         awayplayera *= 2;
         pageQ = [1 - parseInt(`${awayplayera}`)];
         libavfilterz.set(`${awayplayera}`, parseInt(`${telegramk}`) << (Math.min(Math.abs(parseInt(`${awayplayera}`)), 2)));
         break;
      }
         verticalC += `${parseInt(`${sortd}`)}`;
      let loginS = 8168760 <= traminit;
      do {
         traminit %= Math.max(scorepopsound8.length ^ traminit, 1);
         if (loginS) {
            break;
         }
      } while ((3 < (traminit * 4) && (parseInt(`${sortd}`) - traminit) < 4) && loginS);
         sortd += parseFloat(`${leaguedetailsbga.length}`);
         redscoreballe += `${verticalC.length ^ traminit}`;
       let windd = String.fromCharCode(103,95,49,57,95,100,105,114,112,0);
      yellowanimationlive_.set(`${modali}`, parseInt(`${modali}`));
      break;
   }
   while (signinupD != String.fromCharCode(115,0)) {
      thumbnailk += `${parseInt(`${modali}`) & 2}`;
      break;
   }
   while ((5 ^ links) == 4 || (signinupD.length ^ links) == 5) {
      signinupD = `${parseInt(`${sellj}`) | 3}`;
      break;
   }
      const locComments = await getLocalComments();

       let basketballplayerplaceholdere = 1.0;
       let awayiconv = 4.0;
       let eventsplashi: Array<any> = [200, 901];
      let common2 = 6462077.0 <= awayiconv;
      do {
          let time_id3 = 4;
          let ksad9 = false;
          let temperaturex: Array<any> = [String.fromCharCode(106,95,56,57,95,119,111,114,100,0), String.fromCharCode(99,118,105,100,95,48,95,57,54,0), String.fromCharCode(99,111,110,115,116,114,97,105,110,116,95,97,95,55,53,0)];
          let emoji3: Array<any> = [String.fromCharCode(122,95,52,50,95,115,117,98,109,111,100,101,108,115,0), String.fromCharCode(121,95,56,48,95,99,111,109,112,105,108,101,114,0)];
          let iconstar3 = String.fromCharCode(101,95,53,51,95,113,115,111,114,116,0);
         awayiconv *= ((ksad9 ? 3 : 5) / (Math.max(temperaturex.length, 3)));
         time_id3 <<= Math.min(Math.abs(time_id3 / 1), 4);
         ksad9 = (iconstar3.length | emoji3.length) < 95;
         temperaturex = [time_id3 << (Math.min(4, Math.abs(3)))];
         emoji3.push(1);
         iconstar3 += `${iconstar3.length % (Math.max(1, 2))}`;
         if (common2) {
            break;
         }
      } while (common2 && (4 >= (eventsplashi.length / (Math.max(5, 7)))));
          let iconrefresh4 = String.fromCharCode(115,117,98,106,101,99,116,105,118,101,115,95,101,95,50,54,0);
          let rewardvideoS = 1.0;
         basketballplayerplaceholdere += parseFloat(`${2 * eventsplashi.length}`);
         iconrefresh4 = `${2 * parseInt(`${rewardvideoS}`)}`;
         rewardvideoS *= parseFloat(`${iconrefresh4.length | parseInt(`${rewardvideoS}`)}`);
       let mbsplashQ = 4.0;
      if (4.46 > basketballplayerplaceholdere) {
          let favicon1 = 3.0;
         mbsplashQ /= Math.max(1, parseInt(`${basketballplayerplaceholdere}`));
         favicon1 += parseInt(`${favicon1}`) + 1;
      }
      for (let h = 0; h < 2; h++) {
         eventsplashi.push(parseInt(`${mbsplashQ}`) * parseInt(`${basketballplayerplaceholdere}`));
      }
      fullg *= ((chinaj ? 5 : 2) * parseInt(`${fullg}`));
      chinaj = final_jdh || 9.33 < fullg;
   while (4 >= icondefaultthumbnaill.length) {
      icondefaultthumbnaill = `${3 - signinupD.length}`;
      break;
   }
   while (4.91 > fullg) {
      fullg /= Math.max(4, signinupD.length);
      break;
   }
   let libimagepipelined = 9287075.0 <= phoneshareS;
   do {
      phoneshareS /= Math.max(5, parseFloat(`${2}`));
      if (libimagepipelined) {
         break;
      }
   } while (libimagepipelined && (phoneshareS <= 3.9));

      if (onlineComments) {

   while (!chinaj) {
       let mbnativeadvancedv: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,110,95,106,95,51,54,0),96], [String.fromCharCode(99,97,98,97,99,95,108,95,51,50,0),506]]);
          let formA = String.fromCharCode(115,121,110,116,104,95,50,95,53,52,0);
         mbnativeadvancedv = new Map([[`${mbnativeadvancedv.size}`, formA.length << (Math.min(Math.abs(2), 4))]]);
      let iconclosewhitebgK = 7484928 <= mbnativeadvancedv.size;
      do {
         mbnativeadvancedv.set(`${mbnativeadvancedv.size}`, mbnativeadvancedv.size + 3);
         if (iconclosewhitebgK) {
            break;
         }
      } while ((mbnativeadvancedv.size >= 5) && iconclosewhitebgK);
      while (4 <= (mbnativeadvancedv.size << (Math.min(Math.abs(mbnativeadvancedv.size), 1))) && 4 <= (mbnativeadvancedv.size << (Math.min(Math.abs(4), 2)))) {
         mbnativeadvancedv.set(`${mbnativeadvancedv.size}`, 1);
         break;
      }
      final_jdh = phoneshareS >= 7.80;
      break;
   }
       let scheduleD = String.fromCharCode(101,95,49,48,48,95,122,102,114,101,101,0);
      let statisticsinactivel = scheduleD.length <= 8638572;
      do {
         scheduleD = `${scheduleD.length - scheduleD.length}`;
         if (statisticsinactivel) {
            break;
         }
      } while (statisticsinactivel && (scheduleD.includes(scheduleD)));
         scheduleD = "2";
      for (let k = 0; k < 1; k++) {
          let iconqqP = 0.0;
          let scrollview_ = String.fromCharCode(102,95,53,95,108,105,110,117,120,0);
          let iconpipshrinkO = 5;
          let comment5 = 5.0;
         scheduleD = `${(String.fromCharCode(87,0) == scheduleD ? parseInt(`${comment5}`) : scheduleD.length)}`;
         iconqqP += iconpipshrinkO;
         scrollview_ = `${parseInt(`${iconqqP}`) << (Math.min(Math.abs(2), 4))}`;
         iconpipshrinkO += iconpipshrinkO;
         comment5 *= parseFloat(`${scrollview_.length ^ 1}`);
      }
      phoneshareS /= Math.max(parseFloat(`${3}`), 5);
   let style1 = icondefaultthumbnaill.length >= 8224610;
   do {
      icondefaultthumbnaill += `${parseInt(`${modali}`) & tumbnailQ.length}`;
      if (style1) {
         break;
      }
   } while ((4 < (icondefaultthumbnaill.length * 4) || 2 < (icondefaultthumbnaill.length * 4)) && style1);
       let libimagepipeline5 = String.fromCharCode(107,101,121,115,101,116,117,112,95,115,95,52,49,0);
         libimagepipeline5 += `${(String.fromCharCode(114,0) == libimagepipeline5 ? libimagepipeline5.length : libimagepipeline5.length)}`;
      if (libimagepipeline5 == String.fromCharCode(56,0)) {
         libimagepipeline5 = `${libimagepipeline5.length << (Math.min(Math.abs(2), 5))}`;
      }
       let internetX = 2.0;
      phoneshareS -= (parseFloat(`${(flipperx ? 5 : 4) & parseInt(`${phoneshareS}`)}`));
   if (chinaj) {
      chinaj = 52.27 >= sellj;
   }
        mergedArray = locComments.concat(onlineComments);
      } else {

      modali -= parseFloat(`${icondefaultthumbnaill.length - yellowanimationlive_.size}`);
      modityF += 1;
      chinaj = disconnected_.length == 39;
      icondefaultthumbnaill += `${yellowanimationlive_.size}`;
   for (let f = 0; f < 2; f++) {
       let loadingspinnerC = 1.0;
       let eventa = true;
       let clearA: Array<any> = [958, 467, 976];
       let soundV = 0.0;
       let notificationfillemptyK = 1;
          let buildg: Map<any, any> = new Map([[String.fromCharCode(109,105,110,105,109,105,122,101,95,104,95,51,55,0),322], [String.fromCharCode(99,111,110,118,101,114,116,105,110,103,95,120,95,50,53,0),426], [String.fromCharCode(108,111,111,107,115,95,115,95,55,53,0),819]]);
         clearA = [parseInt(`${soundV}`) % 1];
         buildg = new Map([[`${buildg.size}`, buildg.size]]);
       let splashM = String.fromCharCode(97,100,106,117,115,109,101,110,116,115,95,104,95,54,54,0);
       let skipP = String.fromCharCode(97,95,56,52,95,97,116,116,0);
      while (1 == splashM.length) {
         clearA.push(3);
         break;
      }
      for (let t = 0; t < 3; t++) {
          let pathg = String.fromCharCode(105,95,53,50,95,112,114,101,115,99,97,108,105,110,103,0);
          let disconnectedlogox = String.fromCharCode(98,95,49,55,95,104,97,97,114,0);
          let agreementN = 4.0;
          let promotionS = String.fromCharCode(103,95,50,55,95,109,115,114,108,101,0);
          let xadsdk_ = String.fromCharCode(103,101,111,103,114,97,112,104,105,99,97,108,95,104,95,49,54,0);
         splashM += `${parseInt(`${soundV}`)}`;
         pathg += `${parseInt(`${agreementN}`) & 1}`;
         disconnectedlogox += "3";
         agreementN -= parseInt(`${agreementN}`) << (Math.min(Math.abs(3), 4));
         promotionS += `${xadsdk_.length | 2}`;
         xadsdk_ += `${1 + disconnectedlogox.length}`;
      }
          let baselinea: Map<any, any> = new Map([[String.fromCharCode(111,95,53,49,95,105,110,116,101,103,101,114,105,102,121,0),552], [String.fromCharCode(115,117,115,112,101,110,100,101,100,95,108,95,56,0),58]]);
         soundV *= parseFloat(`${skipP.length / (Math.max(splashM.length, 3))}`);
         baselinea = new Map([[`${baselinea.size}`, baselinea.size - baselinea.size]]);
         eventa = 54.97 > soundV;
      let default_6dt = notificationfillemptyK >= 9494305;
      do {
         notificationfillemptyK -= 1;
         if (default_6dt) {
            break;
         }
      } while ((2 > (5 << (Math.min(5, Math.abs(notificationfillemptyK)))) && (notificationfillemptyK << (Math.min(skipP.length, 2))) > 5) && default_6dt);
      while (skipP.startsWith(`${clearA.length}`)) {
         skipP += `${2 / (Math.max(8, splashM.length))}`;
         break;
      }
      let matchL = 9743756.0 >= loadingspinnerC;
      do {
         loadingspinnerC *= clearA.length;
         if (matchL) {
            break;
         }
      } while ((splashM.startsWith(`${loadingspinnerC}`)) && matchL);
         notificationfillemptyK &= (splashM == String.fromCharCode(122,0) ? splashM.length : clearA.length);
         soundV += parseFloat(`${2 & parseInt(`${soundV}`)}`);
      while (splashM.length <= 3) {
          let sinaE = 1;
          let suggestiona = 5;
          let gdtadve = 4;
          let googler: Array<any> = [339, 757, 443];
          let watchnowbgp = String.fromCharCode(100,111,116,115,95,49,95,51,53,0);
         clearA.push(suggestiona + 3);
         sinaE <<= Math.min(Math.abs(sinaE), 3);
         suggestiona >>= Math.min(2, Math.abs(sinaE));
         gdtadve |= gdtadve / 1;
         googler = [sinaE];
         watchnowbgp = `${gdtadve}`;
         break;
      }
      while (skipP.startsWith(`${soundV}`)) {
          let circleg = String.fromCharCode(104,95,57,49,95,97,110,110,101,120,98,0);
          let circlel = String.fromCharCode(102,95,56,95,97,114,98,105,116,114,97,114,121,0);
          let watchV = 0;
         skipP = `${splashM.length}`;
         circleg += `${circleg.length}`;
         circlel = "3";
         watchV >>= Math.min(1, Math.abs(2 | watchV));
         break;
      }
          let eyeopent = 2.0;
          let libreactnativejnij = String.fromCharCode(104,113,120,100,115,112,95,119,95,48,0);
         eventa = (notificationfillemptyK << (Math.min(clearA.length, 1))) > 66;
         eyeopent /= Math.max(parseFloat(`${parseInt(`${eyeopent}`)}`), 1);
         libreactnativejnij = `${(libreactnativejnij == String.fromCharCode(102,0) ? parseInt(`${eyeopent}`) : libreactnativejnij.length)}`;
      if (1 < (5 % (Math.max(9, clearA.length))) || 3 < (clearA.length * 5)) {
         soundV -= parseFloat(`${1 ^ parseInt(`${loadingspinnerC}`)}`);
      }
      phoneshareS *= parseFloat(`${2}`);
   }
        mergedArray = onlineComments;
      }

      setAllComment(mergedArray);

      modali -= (parseFloat(`${String.fromCharCode(111,0) == homeactivef ? yellowanimationlive_.size : homeactivef.length}`));
      modityF /= Math.max(5, tumbnailQ.length >> (Math.min(Math.abs(1), 3)));
      thumbnailk = `${(String.fromCharCode(49,0) == homeactivef ? (final_jdh ? 5 : 4) : homeactivef.length)}`;
   if (phoneshareS == 4.84) {
      disconnected_.push(parseInt(`${phoneshareS}`) - parseInt(`${modityF}`));
   }
      thumbnailk = `${parseInt(`${fullg}`) >> (Math.min(thumbnailk.length, 1))}`;
      setShowLoading(isFetchingComments);

   while ((yellowanimationlive_.size + 5) <= 3 || 3.42 <= (5.20 * phoneshareS)) {
       let iconeyee = String.fromCharCode(114,116,114,101,101,99,104,101,99,107,95,102,95,52,57,0);
       let incidentS = String.fromCharCode(120,95,49,95,112,97,103,101,114,0);
       let loadingv = 0.0;
       let arrowupP = 5.0;
       let iconpointscoreu: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,101,110,115,97,116,105,111,110,95,106,95,50,51,0),628], [String.fromCharCode(115,95,57,56,95,116,111,111,108,0),785]]);
      while (incidentS == iconeyee) {
         iconeyee += "3";
         break;
      }
       let giftbuttonP: Array<any> = [754, 992];
          let injurya = 3.0;
          let mbnativeadvancedi: Array<any> = [212, 169];
          let flagq = String.fromCharCode(103,95,52,95,116,111,117,112,112,101,114,0);
         incidentS += `${parseInt(`${injurya}`) >> (Math.min(4, Math.abs(3)))}`;
         injurya *= (String.fromCharCode(110,0) == flagq ? mbnativeadvancedi.length : flagq.length);
         mbnativeadvancedi.push(flagq.length);
      let common8 = 7035079.0 <= arrowupP;
      do {
         arrowupP -= (incidentS == String.fromCharCode(109,0) ? incidentS.length : iconpointscoreu.size);
         if (common8) {
            break;
         }
      } while (common8 && (!giftbuttonP.includes(arrowupP)));
      phoneshareS += parseFloat(`${parseInt(`${sellj}`)}`);
      break;
   }
      final_jdh = icondefaultthumbnaill == String.fromCharCode(83,0);
       let gesturesv = String.fromCharCode(113,95,49,55,95,112,111,114,116,0);
       let neonG: Array<any> = [153, 910, 293];
       let zhuboA = String.fromCharCode(101,95,49,95,112,114,101,118,105,111,117,115,0);
       let rootr = String.fromCharCode(102,105,110,101,95,112,95,50,48,0);
         neonG.push(zhuboA.length ^ 2);
         gesturesv = `${rootr.length * 1}`;
      let privilegeY = String.fromCharCode(112,100,98,49,115,51,107,118,115,98,0) == zhuboA;
      do {
          let descY = String.fromCharCode(99,108,105,101,110,116,95,52,95,50,49,0);
          let sliderC = 3.0;
          let chinasame2 = 1;
          let roomT = String.fromCharCode(101,95,55,55,95,100,101,108,101,116,105,111,110,115,0);
          let libreactd = true;
         zhuboA = `${gesturesv.length}`;
         descY += `${descY.length}`;
         sliderC *= 2;
         chinasame2 |= descY.length - roomT.length;
         roomT += "2";
         if (privilegeY) {
            break;
         }
      } while ((rootr.endsWith(zhuboA)) && privilegeY);
      while (rootr == String.fromCharCode(112,0) && gesturesv == String.fromCharCode(104,0)) {
         rootr = "2";
         break;
      }
         neonG.push(1);
      sellj -= 2 << (Math.min(Math.abs(parseInt(`${modityF}`)), 4));
      links ^= ((flipperx ? 5 : 1));
       let codeG = String.fromCharCode(119,111,114,100,108,105,115,116,95,48,95,55,49,0);
       let nterstitialD = 5.0;
       let lightH = 3;
      for (let u = 0; u < 2; u++) {
          let buildD: Map<any, any> = new Map([[String.fromCharCode(100,120,116,111,114,121,95,106,95,53,52,0),998], [String.fromCharCode(117,95,51,57,95,97,99,116,105,118,97,116,105,111,110,115,0),456]]);
          let predictionbanneri: Map<any, any> = new Map([[String.fromCharCode(111,108,100,101,115,116,95,112,95,56,51,0),true ], [String.fromCharCode(100,101,102,101,114,114,101,114,95,53,95,56,57,0),true ]]);
          let exampleimageB = String.fromCharCode(110,95,49,54,95,98,97,115,105,99,0);
          let iconcalendar1 = false;
         codeG += `${exampleimageB.length}`;
         buildD = new Map([[`${buildD.size}`, 2]]);
         predictionbanneri = new Map([[`${predictionbanneri.size}`, predictionbanneri.size]]);
         exampleimageB += "3";
      }
          let unfill0: Array<any> = [694, 720, 306];
         nterstitialD *= (parseFloat(`${String.fromCharCode(55,0) == codeG ? parseInt(`${nterstitialD}`) : codeG.length}`));
         unfill0.push(unfill0.length);
      for (let e = 0; e < 3; e++) {
         lightH |= lightH;
      }
      while (1 < (5 ^ lightH)) {
         nterstitialD *= parseFloat(`${3}`);
         break;
      }
      if ((codeG.length >> (Math.min(4, Math.abs(lightH)))) == 3 || 3 == (codeG.length >> (Math.min(1, Math.abs(lightH))))) {
         lightH <<= Math.min(5, Math.abs(codeG.length << (Math.min(Math.abs(3), 5))));
      }
      homeactivef += "1";
      console.log("done");
    };

    if (!isFetchingComments) {
      mergeAllComments();
    }
  }, [isFetchingComments, isUpdated]);

  const locCommentId = "userComment" + vod?.vod_id;
  const getLocalComments = async () => {
       let networkp: Array<any> = [String.fromCharCode(112,111,105,115,111,110,95,104,95,53,54,0), String.fromCharCode(115,95,57,54,95,103,114,101,97,116,101,115,116,0)];
    let indicatorr = false;
    let grayn = String.fromCharCode(120,95,57,50,95,97,118,118,115,0);
    let rules5: Map<any, any> = new Map([[String.fromCharCode(108,95,52,57,95,97,98,115,111,108,117,116,101,0),777], [String.fromCharCode(118,95,54,48,95,109,111,117,115,0),807]]);
    let confign: Map<any, any> = new Map([[String.fromCharCode(101,120,112,114,101,115,115,105,111,110,95,54,95,57,50,0),345], [String.fromCharCode(100,95,53,54,95,103,114,97,110,116,0),246], [String.fromCharCode(97,116,116,114,98,117,116,101,95,100,95,52,51,0),201]]);
    let backwardO = String.fromCharCode(105,95,55,50,95,108,105,98,97,118,100,101,118,105,99,101,0);
    let iconbackwhiter: Array<any> = [437, 496];
    let detailsw = String.fromCharCode(100,101,115,99,114,95,101,95,50,56,0);
    let backwardF = String.fromCharCode(98,95,55,56,95,97,99,114,111,110,121,109,0);
    let anewarchdefaults8: Map<any, any> = new Map([[String.fromCharCode(114,110,103,115,95,50,95,49,56,0),237], [String.fromCharCode(119,95,56,57,95,106,118,101,114,115,105,111,110,0),133]]);
    let orangeG: Map<any, any> = new Map([[String.fromCharCode(105,95,56,49,95,105,110,100,101,112,101,110,100,101,100,0),String.fromCharCode(99,95,51,48,95,102,105,116,122,0)], [String.fromCharCode(110,97,109,101,115,101,114,118,101,114,95,115,95,52,48,0),String.fromCharCode(106,95,49,50,0)]]);
    let refresht: Array<any> = [695, 522, 513];
   while ((confign.size + backwardO.length) == 3 || (3 + confign.size) == 3) {
      confign = new Map([[`${confign.size}`, networkp.length << (Math.min(Math.abs(2), 3))]]);
      break;
   }
      confign = new Map([[`${iconbackwhiter.length}`, 3]]);
   while (5 < backwardO.length) {
       let launcher5: Array<any> = [String.fromCharCode(122,95,56,56,95,99,111,115,116,105,0), String.fromCharCode(100,105,97,108,108,105,110,103,95,105,95,55,51,0)];
       let largebrightnessX = String.fromCharCode(97,118,112,105,99,116,117,114,101,95,52,95,50,52,0);
       let ynewarchdefaults9: Array<any> = [124, 467];
       let networkz: Map<any, any> = new Map([[String.fromCharCode(121,95,55,48,95,110,101,119,115,108,101,116,116,101,114,0),6], [String.fromCharCode(116,95,50,51,95,102,97,120,99,111,109,112,114,0),299]]);
      for (let a = 0; a < 3; a++) {
         largebrightnessX += `${ynewarchdefaults9.length}`;
      }
      if (5 == (launcher5.length << (Math.min(Math.abs(1), 4))) || (launcher5.length << (Math.min(Math.abs(1), 1))) == 3) {
          let soundI = true;
          let macauf: Array<any> = [String.fromCharCode(109,97,116,116,101,95,98,95,55,51,0), String.fromCharCode(97,114,99,104,105,118,101,95,98,95,55,51,0)];
          let styleY = true;
          let mbridgeN = true;
          let assist8 = true;
         largebrightnessX = "1";
         soundI = styleY;
         macauf.push(((styleY ? 5 : 3)));
         mbridgeN = !soundI;
         assist8 = macauf.length >= 83;
      }
      for (let e = 0; e < 1; e++) {
         launcher5 = [networkz.size];
      }
          let baiduads7 = String.fromCharCode(106,95,53,48,95,115,112,101,97,107,105,110,103,0);
          let roomg = 2;
         launcher5 = [ynewarchdefaults9.length];
         baiduads7 += `${baiduads7.length}`;
         roomg %= Math.max(roomg, 3);
      for (let b = 0; b < 2; b++) {
         networkz.set(`${launcher5.length}`, 3);
      }
         largebrightnessX += `${largebrightnessX.length + 2}`;
         ynewarchdefaults9 = [3];
      if ((5 ^ largebrightnessX.length) == 5) {
         largebrightnessX = `${networkz.size << (Math.min(Math.abs(1), 4))}`;
      }
          let taiwanF = String.fromCharCode(114,101,115,101,116,115,95,114,95,56,50,0);
          let moonA = 4;
         ynewarchdefaults9 = [1 << (Math.min(5, ynewarchdefaults9.length))];
         taiwanF = `${2 & moonA}`;
         moonA >>= Math.min(3, Math.abs(moonA % (Math.max(10, taiwanF.length))));
          let statisticsinactiveY = String.fromCharCode(110,95,49,49,95,112,114,111,98,101,0);
          let chatroombackgroundR = 5.0;
         networkz.set(statisticsinactiveY, 2 >> (Math.min(4, launcher5.length)));
         statisticsinactiveY = `${parseInt(`${chatroombackgroundR}`)}`;
          let filter6 = String.fromCharCode(122,95,52,48,95,109,98,112,114,101,100,0);
          let guideA = 2;
          let typingloadingd = String.fromCharCode(118,95,50,95,117,110,114,101,102,99,111,117,110,116,0);
         largebrightnessX = "2";
         filter6 += `${guideA}`;
         guideA *= guideA;
         typingloadingd = "1";
      for (let o = 0; o < 3; o++) {
          let defaultpredictionprofile_: Map<any, any> = new Map([[String.fromCharCode(109,101,116,97,100,97,116,97,95,104,95,53,52,0),true ], [String.fromCharCode(99,109,111,118,95,98,95,53,52,0),false ]]);
         largebrightnessX += "1";
         defaultpredictionprofile_.set(`${defaultpredictionprofile_.size}`, 2);
      }
      backwardF += `${1 ^ ynewarchdefaults9.length}`;
      break;
   }

    try {

   while (!indicatorr) {
       let thailandT = String.fromCharCode(115,95,57,52,95,115,105,112,114,100,97,116,97,0);
       let iconcurrentmatch4 = false;
       let yingC = String.fromCharCode(97,100,100,107,101,121,95,102,95,53,48,0);
       let annerj = 3.0;
      if (3 <= yingC.length || iconcurrentmatch4) {
          let default_s3P = String.fromCharCode(110,95,57,95,115,112,101,99,105,102,105,101,100,0);
          let selli: Map<any, any> = new Map([[String.fromCharCode(114,101,102,99,111,117,110,116,95,120,95,56,50,0),812], [String.fromCharCode(103,95,53,50,95,101,114,99,0),406]]);
         iconcurrentmatch4 = 76 == default_s3P.length;
         default_s3P = `${selli.size ^ selli.size}`;
      }
       let eighteenO = String.fromCharCode(111,98,115,101,114,118,101,100,95,115,95,57,57,0);
       let defaultplayerimgO = String.fromCharCode(108,95,52,57,95,109,97,105,110,100,98,0);
      if (1 > yingC.length) {
          let whitetickV: Map<any, any> = new Map([[String.fromCharCode(111,95,56,54,95,114,101,102,105,110,101,0),488], [String.fromCharCode(116,95,56,57,95,99,108,97,109,112,101,100,0),847]]);
          let librrcz = String.fromCharCode(112,95,54,48,95,115,116,114,105,112,0);
          let actionP = String.fromCharCode(114,111,117,110,100,115,95,122,95,57,57,0);
         yingC += "3";
         whitetickV = new Map([[`${whitetickV.size}`, whitetickV.size | 3]]);
         librrcz += `${librrcz.length - 3}`;
         actionP += `${2 & actionP.length}`;
      }
       let bggradient0 = String.fromCharCode(114,109,117,108,116,105,112,108,105,99,97,116,105,111,110,95,120,95,53,51,0);
      for (let e = 0; e < 2; e++) {
         iconcurrentmatch4 = eighteenO.length <= 88;
      }
       let shielddoneu: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,97,121,103,97,105,110,95,50,95,57,49,0),907], [String.fromCharCode(116,109,112,111,95,118,95,53,53,0),535]]);
       let libavutilC: Map<any, any> = new Map([[String.fromCharCode(108,97,121,101,114,99,111,110,116,101,120,116,95,49,95,50,52,0),798], [String.fromCharCode(103,108,111,98,97,108,95,57,95,52,55,0),147], [String.fromCharCode(99,111,110,99,101,97,108,109,101,110,116,95,107,95,56,53,0),200]]);
      for (let r = 0; r < 2; r++) {
         defaultplayerimgO += `${1 | yingC.length}`;
      }
         thailandT += `${yingC.length}`;
      for (let t = 0; t < 3; t++) {
         defaultplayerimgO = `${thailandT.length}`;
      }
      for (let l = 0; l < 3; l++) {
         eighteenO += "1";
      }
      for (let q = 0; q < 2; q++) {
         yingC += "2";
      }
      while (5 >= bggradient0.length) {
         bggradient0 += `${((iconcurrentmatch4 ? 2 : 1))}`;
         break;
      }
      networkp.push(2);
      break;
   }
   while (rules5.get(`${confign.size}`) == null) {
      rules5.set(grayn, 3);
      break;
   }
      iconbackwhiter.push(iconbackwhiter.length);
      const comments = await AsyncStorage.getItem(locCommentId);

   let ballA = 6877418 <= grayn.length;
   do {
       let dependenciesV = String.fromCharCode(98,95,49,50,95,99,117,98,101,0);
       let icondefaultthumbnailk = 0.0;
       let friends1 = String.fromCharCode(99,109,115,103,95,115,95,49,54,0);
          let baseE = String.fromCharCode(112,114,111,112,111,114,116,105,111,110,95,51,95,55,53,0);
          let circleg = String.fromCharCode(103,101,116,110,97,109,101,105,110,102,111,95,97,95,54,54,0);
          let reddownarrowE = 2.0;
         dependenciesV = `${friends1.length & dependenciesV.length}`;
         baseE = `${(String.fromCharCode(114,0) == baseE ? parseInt(`${reddownarrowE}`) : baseE.length)}`;
         circleg += `${circleg.length ^ 3}`;
         reddownarrowE += baseE.length;
      if (3 < friends1.length && dependenciesV != String.fromCharCode(116,0)) {
         dependenciesV += `${(String.fromCharCode(90,0) == dependenciesV ? parseInt(`${icondefaultthumbnailk}`) : dependenciesV.length)}`;
      }
         dependenciesV = `${2 & parseInt(`${icondefaultthumbnailk}`)}`;
       let smallorangemanA = String.fromCharCode(115,117,99,99,101,101,100,101,100,95,108,95,50,53,0);
       let b_titleF = String.fromCharCode(111,112,116,105,111,110,97,108,108,121,95,103,95,53,55,0);
       let episodesy: Array<any> = [488, 915, 685];
      while (smallorangemanA != b_titleF) {
          let redcirclebgJ = String.fromCharCode(108,95,52,50,95,115,108,117,114,112,0);
          let bell4 = String.fromCharCode(116,106,98,101,110,99,104,116,101,115,116,95,48,95,54,50,0);
          let upload_ = 4;
          let iconfeedbackr = 3.0;
          let sinaL = 0;
         b_titleF = `${(String.fromCharCode(81,0) == dependenciesV ? bell4.length : dependenciesV.length)}`;
         redcirclebgJ = `${upload_ << (Math.min(Math.abs(parseInt(`${iconfeedbackr}`)), 5))}`;
         bell4 = `${upload_ | 2}`;
         iconfeedbackr -= (parseFloat(`${String.fromCharCode(65,0) == redcirclebgJ ? parseInt(`${iconfeedbackr}`) : redcirclebgJ.length}`));
         sinaL |= 1;
         break;
      }
      for (let m = 0; m < 2; m++) {
         b_titleF = `${friends1.length * 1}`;
      }
      if (2 == dependenciesV.length) {
         episodesy.push(episodesy.length - 3);
      }
          let info1 = String.fromCharCode(99,95,50,49,95,116,111,111,108,98,97,114,0);
         episodesy.push(friends1.length);
         info1 = `${3 | info1.length}`;
      grayn += `${backwardO.length}`;
      if (ballA) {
         break;
      }
   } while ((networkp.length == 2) && ballA);
      rules5 = new Map([[`${rules5.size}`, backwardF.length << (Math.min(3, Math.abs(rules5.size)))]]);
      backwardO = "2";
      console.log("comments stored in local storage ", locCommentId);

       let component5 = 4.0;
      let scrollviewe = 9283170.0 >= component5;
      do {
         component5 += parseInt(`${component5}`) & 1;
         if (scrollviewe) {
            break;
         }
      } while (((component5 + 5.23) >= 5.68 && (5.23 + component5) >= 2.45) && scrollviewe);
      let basketballawayteamm = component5 <= 8876063.0;
      do {
         component5 /= Math.max(parseInt(`${component5}`), 3);
         if (basketballawayteamm) {
            break;
         }
      } while (basketballawayteamm && ((component5 * component5) == 2.37));
       let iconcurrentmatchn = String.fromCharCode(98,95,53,57,95,103,112,109,100,0);
       let flyern = String.fromCharCode(115,104,97,100,101,114,115,95,57,95,50,48,0);
      backwardF += `${detailsw.length}`;
   if ((4 + rules5.size) == 1 || (4 + backwardO.length) == 5) {
       let iconpipexpand4 = 5;
      for (let p = 0; p < 3; p++) {
         iconpipexpand4 |= 2;
      }
         iconpipexpand4 &= iconpipexpand4;
          let controlc = 4.0;
         iconpipexpand4 *= parseInt(`${controlc}`);
      rules5 = new Map([[`${confign.size}`, backwardF.length * confign.size]]);
   }
   let flyero = confign.size >= 9012474;
   do {
      confign = new Map([[backwardF, backwardO.length & 1]]);
      if (flyero) {
         break;
      }
   } while ((indicatorr) && flyero);
      console.log(comments);

   for (let f = 0; f < 2; f++) {
       let eactL = String.fromCharCode(99,104,97,115,101,95,57,95,53,57,0);
       let w_countO = false;
       let liblogger1 = String.fromCharCode(106,95,54,52,0);
       let t_positionl: Array<any> = [845, 412];
      while (!liblogger1.includes(`${w_countO}`)) {
         liblogger1 += `${(String.fromCharCode(69,0) == eactL ? t_positionl.length : eactL.length)}`;
         break;
      }
       let actionsz = 1;
         t_positionl = [liblogger1.length / 1];
      if (!w_countO) {
         t_positionl = [((w_countO ? 3 : 4) ^ actionsz)];
      }
      let iconcurrentmatchZ = eactL.length <= 8230413;
      do {
         eactL = `${1 << (Math.min(3, t_positionl.length))}`;
         if (iconcurrentmatchZ) {
            break;
         }
      } while (iconcurrentmatchZ && (w_countO));
      let libavfilterU = eactL.length >= 8258725;
      do {
         eactL = `${actionsz / 3}`;
         if (libavfilterU) {
            break;
         }
      } while (libavfilterU && (!eactL.includes(`${w_countO}`)));
      let update_79 = w_countO ? !w_countO : w_countO;
      do {
         w_countO = !w_countO;
         if (update_79) {
            break;
         }
      } while ((2 < eactL.length && w_countO) && update_79);
      let largew = String.fromCharCode(113,119,101,117,97,95,0) == eactL;
      do {
          let chatroombackground7: Map<any, any> = new Map([[String.fromCharCode(106,95,57,55,95,100,111,119,110,115,97,109,112,108,101,100,0),true ], [String.fromCharCode(110,95,56,56,95,118,101,99,0),true ]]);
          let chatn = String.fromCharCode(121,95,49,52,95,100,117,112,99,108,0);
          let placeholderR = 4.0;
         eactL = `${((w_countO ? 3 : 5) - 1)}`;
         chatroombackground7 = new Map([[`${chatroombackground7.size}`, chatn.length]]);
         chatn = `${chatn.length & 1}`;
         placeholderR /= Math.max(chatroombackground7.size % (Math.max(3, 9)), 4);
         if (largew) {
            break;
         }
      } while ((3 > (t_positionl.length & 5) && (5 & t_positionl.length) > 5) && largew);
      let libreactperfloggerjniU = t_positionl.length <= 9158426;
      do {
         t_positionl = [t_positionl.length];
         if (libreactperfloggerjniU) {
            break;
         }
      } while ((actionsz < t_positionl.length) && libreactperfloggerjniU);
          let membershipU = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,95,122,95,51,57,0);
         t_positionl = [liblogger1.length ^ t_positionl.length];
         membershipU = `${membershipU.length}`;
          let philippinesg = 5.0;
          let long_zs = String.fromCharCode(104,95,53,54,95,110,118,99,0);
         eactL += `${t_positionl.length}`;
         philippinesg /= Math.max(5, (String.fromCharCode(120,0) == long_zs ? long_zs.length : parseInt(`${philippinesg}`)));
      let theme0 = 9129218 <= t_positionl.length;
      do {
         t_positionl.push(liblogger1.length >> (Math.min(Math.abs(1), 2)));
         if (theme0) {
            break;
         }
      } while (((t_positionl.length / (Math.max(1, 8))) == 4) && theme0);
      rules5.set(eactL, iconbackwhiter.length);
   }
      iconbackwhiter.push(3 << (Math.min(5, backwardO.length)));
   let shrink6 = 8444092 <= grayn.length;
   do {
       let videocommonw = String.fromCharCode(112,114,111,100,117,99,116,95,103,95,55,49,0);
       let iconclosewhitewithbgV = String.fromCharCode(101,95,55,55,95,97,103,97,116,101,0);
       let updatesP = 0;
       let redirectx = 4;
       let modulesa = String.fromCharCode(116,119,101,97,107,95,113,95,52,48,0);
          let notificationgrayW = false;
         updatesP *= redirectx & iconclosewhitewithbgV.length;
         notificationgrayW = (!notificationgrayW ? notificationgrayW : notificationgrayW);
         modulesa = `${modulesa.length}`;
      let libmapbufferjnir = videocommonw.length >= 9377747;
      do {
         videocommonw = `${3 + iconclosewhitewithbgV.length}`;
         if (libmapbufferjnir) {
            break;
         }
      } while ((4 >= (videocommonw.length * 5) && (videocommonw.length * redirectx) >= 5) && libmapbufferjnir);
          let libpangleflippedC: Array<any> = [123, 686];
          let yellowcirclebgR = 3.0;
         modulesa += `${3 - iconclosewhitewithbgV.length}`;
         libpangleflippedC.push(parseInt(`${yellowcirclebgR}`) % 3);
         yellowcirclebgR += parseInt(`${yellowcirclebgR}`);
         iconclosewhitewithbgV += `${iconclosewhitewithbgV.length}`;
      while ((updatesP % (Math.max(modulesa.length, 2))) == 4) {
          let iconclosewhiteA = String.fromCharCode(104,95,54,56,95,105,115,99,111,118,101,114,0);
         modulesa = `${updatesP % (Math.max(videocommonw.length, 1))}`;
         iconclosewhiteA += `${iconclosewhiteA.length}`;
         break;
      }
      let calendarN = updatesP <= 9475413;
      do {
         updatesP |= redirectx & modulesa.length;
         if (calendarN) {
            break;
         }
      } while (calendarN && (!videocommonw.includes(`${updatesP}`)));
          let halfD = true;
         iconclosewhitewithbgV = `${redirectx | modulesa.length}`;
         halfD = !halfD;
      if ((updatesP + 2) <= 4 || 2 <= (iconclosewhitewithbgV.length + updatesP)) {
          let homeloadingV = false;
          let untickj = 0.0;
          let arrowB = String.fromCharCode(116,99,109,105,95,99,95,53,57,0);
          let zhubou: Map<any, any> = new Map([[String.fromCharCode(113,95,54,55,95,115,111,114,101,115,101,114,118,101,0),313], [String.fromCharCode(111,112,116,105,109,105,122,101,95,109,95,52,54,0),433], [String.fromCharCode(105,110,100,101,111,95,115,95,52,53,0),417]]);
          let mbbannerH = 5;
         iconclosewhitewithbgV = `${mbbannerH * 3}`;
         homeloadingV = (91 < ((homeloadingV ? 91 : arrowB.length) + arrowB.length));
         untickj /= Math.max((String.fromCharCode(107,0) == arrowB ? parseInt(`${untickj}`) : arrowB.length), 1);
         zhubou.set(`${homeloadingV}`, zhubou.size);
         mbbannerH -= ((homeloadingV ? 2 : 5) - parseInt(`${untickj}`));
      }
          let libavformatu = 2;
          let refreshc = 2.0;
          let othermatchdetailbgg = 4;
         redirectx %= Math.max(4, libavformatu & 1);
         libavformatu += othermatchdetailbgg;
         refreshc /= Math.max(1, parseInt(`${refreshc}`));
         othermatchdetailbgg ^= parseInt(`${refreshc}`) + 3;
          let typingloadingD = 5.0;
          let icondefaultthumbnailD = 4.0;
         redirectx |= 1 ^ iconclosewhitewithbgV.length;
         typingloadingD *= parseFloat(`${1 & parseInt(`${icondefaultthumbnailD}`)}`);
         icondefaultthumbnailD += parseFloat(`${2 * parseInt(`${typingloadingD}`)}`);
      while (1 > (updatesP / (Math.max(7, videocommonw.length))) && (videocommonw.length / 1) > 4) {
         updatesP >>= Math.min(Math.abs(3), 1);
         break;
      }
          let homeplayerg = String.fromCharCode(100,101,112,95,106,95,49,55,0);
          let collectiont = 5.0;
         updatesP /= Math.max(5, updatesP);
         homeplayerg = `${homeplayerg.length}`;
         collectiont += parseFloat(`${homeplayerg.length}`);
      for (let j = 0; j < 2; j++) {
          let downloadingi = false;
          let questiconl = 5.0;
          let libavfilterI = 4;
          let node1 = String.fromCharCode(107,95,49,51,95,117,110,102,105,108,116,101,114,101,100,0);
         updatesP %= Math.max(modulesa.length, 3);
         downloadingi = 36.42 > questiconl;
         questiconl *= libavfilterI * 1;
         libavfilterI %= Math.max(3, 1);
         node1 = `${(node1.length - (downloadingi ? 4 : 2))}`;
      }
          let manifestb = String.fromCharCode(119,95,53,57,95,99,111,110,116,111,108,108,101,114,0);
          let rncore7 = false;
          let leakcheckerd: Array<any> = [942, 200];
         updatesP %= Math.max(4, 3);
         manifestb = `${manifestb.length - 3}`;
         rncore7 = !rncore7;
         leakcheckerd.push(((rncore7 ? 5 : 3) << (Math.min(Math.abs(3), 5))));
      grayn = `${grayn.length % 3}`;
      if (shrink6) {
         break;
      }
   } while (shrink6 && (grayn.length > 1));

      if (comments !== null) {

      iconbackwhiter = [((indicatorr ? 2 : 2) % 3)];
   for (let b = 0; b < 1; b++) {
      rules5.set(grayn, (String.fromCharCode(122,0) == grayn ? grayn.length : networkp.length));
   }
      backwardO += `${backwardO.length}`;
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {

      networkp = [3];
      confign.set(backwardF, 2 - confign.size);
   for (let m = 0; m < 1; m++) {
      networkp = [2];
   }
      console.log("error when retrieving local comments: ", error);

      rules5 = new Map([[`${indicatorr}`, 1 | backwardO.length]]);
      indicatorr = rules5.get(`${indicatorr}`) != null;
      detailsw = `${backwardO.length - 2}`;
      return [];
    }
  };

  const storeUserComments = async () => {
       let formj: Map<any, any> = new Map([[String.fromCharCode(114,101,103,101,120,112,95,97,95,56,51,0),620], [String.fromCharCode(112,95,57,49,95,112,114,101,102,97,99,101,0),568], [String.fromCharCode(105,95,50,54,95,101,120,110,111,100,101,0),329]]);
    let yellowvideolive3 = String.fromCharCode(109,95,51,56,0);
    let referrerq = 1.0;
    let bottomH = 0.0;
    let iconnotificationnewU = 2;
    let greenarrowup8 = String.fromCharCode(106,95,56,49,95,103,97,117,103,101,0);
    let fastforwardM = String.fromCharCode(97,99,99,117,109,117,108,97,116,111,114,95,51,95,56,50,0);
    let nbatrophyO: Array<any> = [String.fromCharCode(116,111,112,105,99,95,105,95,56,48,0), String.fromCharCode(105,109,112,95,110,95,51,51,0), String.fromCharCode(100,95,53,49,95,108,100,105,115,116,0)];
    let encryptH = String.fromCharCode(105,95,53,54,95,100,101,112,115,0);
    let foregroundi = true;
    let basketballdetailsbg2 = 2;
    let appleD = 1;
    let sources = String.fromCharCode(99,97,109,101,108,95,108,95,53,55,0);
    let abouta: Array<any> = [String.fromCharCode(105,95,57,57,95,105,110,100,105,99,105,101,115,0), String.fromCharCode(108,111,99,97,108,101,115,95,100,95,57,53,0), String.fromCharCode(97,112,116,120,95,97,95,54,57,0)];
    let weatheru = String.fromCharCode(102,95,52,53,95,97,97,99,101,110,99,116,97,98,0);
    let showe = String.fromCharCode(99,111,110,110,101,99,116,95,105,95,53,55,0);
    let lineO = String.fromCharCode(115,105,110,99,101,95,101,95,57,50,0);
   let predictionbutton3 = String.fromCharCode(104,100,120,0) == fastforwardM;
   do {
       let libruntimeexecutorR = String.fromCharCode(118,95,51,50,95,97,117,116,111,100,101,116,101,99,116,111,114,0);
       let dependencyF = 3.0;
       let dropdownz = 2;
      if (dependencyF == 3.84) {
         dropdownz %= Math.max(parseInt(`${dependencyF}`) * 3, 3);
      }
      let iconnointerneto = libruntimeexecutorR == String.fromCharCode(56,121,54,50,114,111,115,48,112,107,0);
      do {
         libruntimeexecutorR = `${2 ^ dropdownz}`;
         if (iconnointerneto) {
            break;
         }
      } while ((dependencyF >= 2.35) && iconnointerneto);
      let logoutR = 7924418.0 >= dependencyF;
      do {
         dependencyF /= Math.max(parseFloat(`${dropdownz % (Math.max(parseInt(`${dependencyF}`), 3))}`), 2);
         if (logoutR) {
            break;
         }
      } while ((parseFloat(`${libruntimeexecutorR.length}`) > dependencyF) && logoutR);
         dropdownz >>= Math.min(5, Math.abs(3 ^ parseInt(`${dependencyF}`)));
          let crownX = 0.0;
          let y_managerU = 2.0;
         dependencyF /= Math.max(3, (parseFloat(`${String.fromCharCode(66,0) == libruntimeexecutorR ? parseInt(`${dependencyF}`) : libruntimeexecutorR.length}`)));
         crownX -= parseFloat(`${parseInt(`${crownX}`) / 3}`);
         y_managerU *= parseFloat(`${parseInt(`${y_managerU}`) | 1}`);
      let predictionarrowK = 6565753 <= libruntimeexecutorR.length;
      do {
         libruntimeexecutorR = `${3 >> (Math.min(1, Math.abs(parseInt(`${dependencyF}`))))}`;
         if (predictionarrowK) {
            break;
         }
      } while ((parseInt(`${dependencyF}`) <= libruntimeexecutorR.length) && predictionarrowK);
         dropdownz *= dropdownz;
      while ((1.0 / (Math.max(2, dependencyF))) >= 2.10) {
         dependencyF -= parseFloat(`${libruntimeexecutorR.length}`);
         break;
      }
         dropdownz ^= libruntimeexecutorR.length / 2;
      fastforwardM = `${nbatrophyO.length}`;
      if (predictionbutton3) {
         break;
      }
   } while ((1 <= (nbatrophyO.length + 2)) && predictionbutton3);
       let imagemanagerR = String.fromCharCode(121,95,55,52,95,115,99,104,110,111,114,114,0);
      if (1 == imagemanagerR.length) {
          let send3: Map<any, any> = new Map([[String.fromCharCode(103,95,50,95,98,114,110,103,0),36], [String.fromCharCode(102,95,57,50,95,107,101,101,112,97,108,105,118,101,0),994], [String.fromCharCode(122,95,49,51,95,111,105,100,97,110,121,0),789]]);
          let cornerkickb = false;
          let mutede = 2.0;
          let subbasketballplayer0 = String.fromCharCode(97,95,53,48,95,109,105,110,105,109,97,108,0);
         imagemanagerR += "1";
         send3 = new Map([[`${cornerkickb}`, ((cornerkickb ? 5 : 5))]]);
         mutede /= Math.max(((cornerkickb ? 2 : 3) - 1), 4);
         subbasketballplayer0 = `${parseInt(`${mutede}`) << (Math.min(Math.abs(3), 5))}`;
      }
          let orangeticka = String.fromCharCode(113,95,56,56,95,99,100,106,112,101,103,0);
          let zhengpian8 = 2.0;
         imagemanagerR = `${orangeticka.length ^ parseInt(`${zhengpian8}`)}`;
      while (!imagemanagerR.includes(imagemanagerR)) {
          let penaltygoalG = 5.0;
          let yellowanimationliveo = String.fromCharCode(113,95,54,52,95,102,108,111,97,116,115,104,111,114,116,0);
         imagemanagerR = `${(String.fromCharCode(104,0) == imagemanagerR ? imagemanagerR.length : parseInt(`${penaltygoalG}`))}`;
         penaltygoalG /= Math.max(5, parseFloat(`${2 & yellowanimationliveo.length}`));
         yellowanimationliveo = `${yellowanimationliveo.length & 2}`;
         break;
      }
      nbatrophyO = [1 + sources.length];
       let membershipX = String.fromCharCode(114,101,99,111,114,100,115,95,104,95,50,0);
       let mbnativey = 4;
       let iconbellc: Map<any, any> = new Map([[String.fromCharCode(100,101,109,111,95,104,95,56,0),true ], [String.fromCharCode(102,116,118,112,110,111,100,101,95,97,95,54,50,0),false ], [String.fromCharCode(100,101,101,112,101,114,95,113,95,53,50,0),false ]]);
      for (let j = 0; j < 2; j++) {
          let kickg = String.fromCharCode(112,95,57,56,95,105,100,101,110,116,105,102,121,0);
          let componento: Array<any> = [133, 992, 835];
          let iconarrowrightwhitei = 3.0;
         iconbellc = new Map([[membershipX, membershipX.length * parseInt(`${iconarrowrightwhitei}`)]]);
         kickg = `${componento.length * kickg.length}`;
         componento.push(componento.length ^ kickg.length);
         iconarrowrightwhitei += parseFloat(`${1 * kickg.length}`);
      }
          let directT = String.fromCharCode(113,95,55,49,95,115,108,97,115,104,0);
          let shootK: Array<any> = [433, 635];
          let malaysiay = String.fromCharCode(114,95,49,48,95,112,111,116,105,115,105,111,110,0);
         membershipX += `${iconbellc.size}`;
         directT += `${malaysiay.length << (Math.min(1, shootK.length))}`;
         shootK.push(malaysiay.length ^ directT.length);
      let l_viewD = 7354724 <= iconbellc.size;
      do {
         iconbellc = new Map([[membershipX, 3]]);
         if (l_viewD) {
            break;
         }
      } while ((membershipX.length > iconbellc.size) && l_viewD);
      while ((mbnativey - 3) <= 5 && 1 <= (mbnativey - 3)) {
         membershipX += `${3 / (Math.max(7, membershipX.length))}`;
         break;
      }
         membershipX = `${iconbellc.size & mbnativey}`;
         iconbellc.set(`${mbnativey}`, iconbellc.size & 3);
      for (let w = 0; w < 3; w++) {
         membershipX += `${membershipX.length}`;
      }
      for (let f = 0; f < 3; f++) {
         iconbellc = new Map([[`${mbnativey}`, membershipX.length]]);
      }
      let runtimescheduler3 = String.fromCharCode(53,101,48,54,103,120,109,49,0) == membershipX;
      do {
         membershipX = "2";
         if (runtimescheduler3) {
            break;
         }
      } while ((2 >= (membershipX.length << (Math.min(1, Math.abs(mbnativey)))) && 5 >= (mbnativey << (Math.min(Math.abs(2), 3)))) && runtimescheduler3);
      iconnotificationnewU |= 2;

    if (!comment) {

      iconnotificationnewU %= Math.max(2, iconnotificationnewU);
   while (appleD < 2) {
      bottomH *= 3 * greenarrowup8.length;
      break;
   }
       let dependencyA = String.fromCharCode(110,95,50,54,95,117,115,101,114,115,0);
       let livenodatabgimgg = 1;
       let contextS: Map<any, any> = new Map([[String.fromCharCode(116,119,111,102,105,115,104,95,100,95,53,53,0),true ], [String.fromCharCode(108,111,99,97,108,97,100,100,114,95,106,95,52,50,0),true ], [String.fromCharCode(104,101,120,100,117,109,112,95,50,95,57,55,0),false ]]);
       let gifgoal8: Map<any, any> = new Map([[String.fromCharCode(105,115,112,97,116,99,104,95,116,95,52,48,0),823], [String.fromCharCode(98,105,108,105,110,95,98,95,54,53,0),53]]);
       let iconpipshrinkT: Map<any, any> = new Map([[String.fromCharCode(119,95,54,48,95,101,110,113,117,101,117,101,100,0),161], [String.fromCharCode(112,105,99,116,111,114,95,111,95,56,53,0),835], [String.fromCharCode(117,115,97,103,101,95,52,95,50,0),445]]);
      let phoneshareF = iconpipshrinkT.size <= 5012003;
      do {
         iconpipshrinkT = new Map([[`${livenodatabgimgg}`, livenodatabgimgg >> (Math.min(Math.abs(2), 1))]]);
         if (phoneshareF) {
            break;
         }
      } while ((2 > (gifgoal8.size >> (Math.min(Math.abs(iconpipshrinkT.size), 2)))) && phoneshareF);
      if ((livenodatabgimgg + 2) > 3) {
         iconpipshrinkT.set(`${gifgoal8.size}`, 1 ^ iconpipshrinkT.size);
      }
      if (iconpipshrinkT.get(`${livenodatabgimgg}`) != null) {
         iconpipshrinkT = new Map([[`${iconpipshrinkT.size}`, iconpipshrinkT.size * 3]]);
      }
         iconpipshrinkT = new Map([[`${contextS.size}`, contextS.size % 2]]);
         gifgoal8 = new Map([[`${contextS.size}`, 1 & contextS.size]]);
      while (gifgoal8.get(`${livenodatabgimgg}`) != null) {
         gifgoal8.set(dependencyA, dependencyA.length ^ 3);
         break;
      }
      for (let w = 0; w < 1; w++) {
         gifgoal8 = new Map([[`${iconpipshrinkT.size}`, iconpipshrinkT.size]]);
      }
          let matho = String.fromCharCode(104,95,55,52,95,102,114,97,99,116,105,111,110,0);
         contextS.set(`${contextS.size}`, contextS.size % (Math.max(2, 10)));
         matho += "2";
      appleD %= Math.max(3, contextS.size);
      return;
    }

    console.log("user comment", comment);

   while (!foregroundi) {
      greenarrowup8 += `${fastforwardM.length}`;
      break;
   }
      iconnotificationnewU &= 1 % (Math.max(1, nbatrophyO.length));
   let middlebrightnessi = String.fromCharCode(118,54,119,115,108,55,100,104,56,0) == encryptH;
   do {
      encryptH = "3 * basketballdetailsbg2";
      if (middlebrightnessi) {
         break;
      }
   } while ((nbatrophyO.length >= 4) && middlebrightnessi);
    try {

   while (formj.get(`${basketballdetailsbg2}`) == null) {
       let jingdongu = String.fromCharCode(109,95,51,52,95,97,108,115,97,115,121,109,98,111,108,116,97,98,108,101,0);
       let attributedstringS = 4.0;
       let videocommonM = 2;
         videocommonM |= 2;
         jingdongu = `${1 - parseInt(`${attributedstringS}`)}`;
      if (4.47 < (attributedstringS * videocommonM)) {
          let codegen3 = String.fromCharCode(101,108,101,109,101,110,116,115,95,121,95,50,55,0);
          let moduleF: Map<any, any> = new Map([[String.fromCharCode(99,95,52,49,95,108,111,119,98,100,0),false ], [String.fromCharCode(115,95,56,56,95,105,110,118,105,116,97,116,105,111,110,0),true ]]);
          let leaguep = String.fromCharCode(115,117,112,101,114,118,105,101,119,95,110,95,51,54,0);
          let selectQ = 3.0;
         attributedstringS -= parseFloat(`${leaguep.length}`);
         codegen3 = `${2 & moduleF.size}`;
         moduleF.set(codegen3, 2);
         leaguep = `${moduleF.size}`;
         selectQ -= moduleF.size << (Math.min(Math.abs(2), 1));
      }
       let smallorangeman3 = 3.0;
       let gesturee = 2.0;
      for (let z = 0; z < 3; z++) {
         gesturee *= parseFloat(`${videocommonM ^ parseInt(`${smallorangeman3}`)}`);
      }
         smallorangeman3 -= parseFloat(`${1 >> (Math.min(4, jingdongu.length))}`);
      for (let u = 0; u < 2; u++) {
          let gifgoalbgF = false;
          let xvodm = String.fromCharCode(101,95,56,57,95,99,104,97,110,103,101,99,111,117,110,116,101,114,0);
         videocommonM >>= Math.min(Math.abs(parseInt(`${gesturee}`)), 4);
         gifgoalbgF = !gifgoalbgF;
         xvodm = "1";
      }
      for (let i = 0; i < 2; i++) {
          let leaguedetailsbg1 = 4;
          let description_f68 = String.fromCharCode(108,97,117,110,99,104,95,99,95,56,48,0);
          let expandG = String.fromCharCode(113,95,57,48,95,100,105,114,101,99,116,105,111,110,115,0);
         videocommonM |= 2 >> (Math.min(Math.abs(videocommonM), 2));
         leaguedetailsbg1 <<= Math.min(5, Math.abs(description_f68.length / 2));
         description_f68 = `${expandG.length & description_f68.length}`;
         expandG += `${leaguedetailsbg1 & description_f68.length}`;
      }
       let showmorey: Map<any, any> = new Map([[String.fromCharCode(101,110,118,101,108,111,112,101,95,114,95,52,51,0),String.fromCharCode(116,95,56,48,95,118,101,114,116,105,99,101,115,0)], [String.fromCharCode(116,101,109,112,95,117,95,49,49,0),String.fromCharCode(101,95,54,55,95,108,97,117,110,99,104,0)]]);
       let tick2: Map<any, any> = new Map([[String.fromCharCode(118,111,114,98,105,115,95,53,95,54,57,0),122], [String.fromCharCode(102,95,53,50,95,98,117,102,115,112,97,99,101,0),228]]);
      formj.set(yellowvideolive3, yellowvideolive3.length >> (Math.min(5, encryptH.length)));
      break;
   }
   while ((iconnotificationnewU / 5) >= 1) {
       let switch_14t: Map<any, any> = new Map([[String.fromCharCode(100,95,57,50,95,112,105,120,109,102,116,115,0),973], [String.fromCharCode(99,111,109,109,105,116,116,101,100,95,53,95,50,49,0),142]]);
       let iconnointernetd = String.fromCharCode(115,117,98,116,105,116,108,101,115,95,108,95,50,0);
       let humidity4: Array<any> = [String.fromCharCode(100,101,110,105,101,100,95,48,95,50,49,0), String.fromCharCode(115,112,105,110,95,121,95,57,53,0), String.fromCharCode(99,114,101,97,116,111,114,115,95,52,95,51,51,0)];
       let eventsplashY = String.fromCharCode(115,105,122,101,109,109,95,52,95,57,49,0);
       let soundL = String.fromCharCode(116,101,115,101,100,103,101,95,115,95,51,57,0);
       let bell2 = String.fromCharCode(101,112,111,110,121,109,111,117,115,95,99,95,55,55,0);
      for (let d = 0; d < 2; d++) {
          let chatbotphotoR = String.fromCharCode(114,101,115,112,95,103,95,49,55,0);
         bell2 += `${bell2.length}`;
         chatbotphotoR = `${chatbotphotoR.length + chatbotphotoR.length}`;
      }
      for (let u = 0; u < 3; u++) {
          let a_viewP = String.fromCharCode(119,95,51,56,95,99,104,101,99,107,109,109,0);
          let analytica = 2.0;
          let internetT = 2.0;
         switch_14t = new Map([[`${switch_14t.size}`, switch_14t.size]]);
         a_viewP += `${parseInt(`${analytica}`)}`;
         analytica -= parseFloat(`${parseInt(`${internetT}`) ^ 1}`);
         internetT -= parseFloat(`${parseInt(`${analytica}`) / 1}`);
      }
      if (eventsplashY.endsWith(soundL)) {
          let iconmegaphonek: Array<any> = [801, 791];
          let pagek = String.fromCharCode(97,103,114,101,101,109,101,110,116,95,99,95,54,53,0);
          let orangedownarrowg = 1.0;
          let whitetickb = String.fromCharCode(114,95,50,52,95,101,110,99,111,100,101,100,115,116,114,101,97,109,0);
          let foregroundb = true;
         soundL += `${humidity4.length}`;
         iconmegaphonek = [pagek.length];
         pagek += `${((foregroundb ? 1 : 1))}`;
         orangedownarrowg /= Math.max(whitetickb.length % (Math.max(pagek.length, 10)), 3);
         whitetickb = `${whitetickb.length}`;
      }
      iconnotificationnewU *= nbatrophyO.length / (Math.max(sources.length, 9));
      iconnointernetd = `${iconnointernetd.length % 1}`;
      break;
   }
       let reactnavigationR = String.fromCharCode(109,97,99,104,95,51,95,55,56,0);
          let verticalx = 3.0;
         reactnavigationR += `${(String.fromCharCode(68,0) == reactnavigationR ? reactnavigationR.length : parseInt(`${verticalx}`))}`;
      for (let a = 0; a < 1; a++) {
          let infos = String.fromCharCode(111,95,53,49,95,114,101,102,99,111,117,110,116,101,100,0);
          let successb = String.fromCharCode(111,95,49,53,95,115,104,111,114,116,101,110,0);
          let homeiconD = true;
          let completez = 3.0;
         reactnavigationR += `${reactnavigationR.length - 1}`;
         infos += `${successb.length * 2}`;
         successb = `${successb.length - 1}`;
         homeiconD = !homeiconD || successb.length >= 81;
         completez -= parseFloat(`${1}`);
      }
      for (let n = 0; n < 1; n++) {
         reactnavigationR = `${2 << (Math.min(3, reactnavigationR.length))}`;
      }
      fastforwardM = `${nbatrophyO.length}`;
      const existingComments = await getLocalComments();

   for (let l = 0; l < 2; l++) {
      basketballdetailsbg2 |= fastforwardM.length % 2;
   }
   let ballV = bottomH <= 6516869.0;
   do {
       let relatedQ: Map<any, any> = new Map([[String.fromCharCode(103,95,53,49,95,98,111,117,110,99,105,110,103,0),525], [String.fromCharCode(100,117,115,116,95,107,95,54,51,0),889], [String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,95,104,95,52,56,0),886]]);
          let launcherH = 5.0;
          let binddatasq = true;
         relatedQ.set(`${launcherH}`, 2 >> (Math.min(Math.abs(parseInt(`${launcherH}`)), 1)));
         binddatasq = !binddatasq || !binddatasq;
      while (relatedQ.get(`${relatedQ.size}`) == null) {
          let icontransferclubL: Map<any, any> = new Map([[String.fromCharCode(114,104,115,95,50,95,54,0),String.fromCharCode(119,104,105,116,101,108,105,115,116,95,122,95,52,52,0)], [String.fromCharCode(97,115,99,111,110,102,95,49,95,52,49,0),String.fromCharCode(97,95,49,48,95,101,110,99,97,112,115,117,108,97,116,101,100,0)], [String.fromCharCode(117,95,51,48,95,101,97,103,97,105,110,0),String.fromCharCode(116,95,56,48,95,118,97,108,105,100,97,116,105,110,103,0)]]);
         relatedQ = new Map([[`${relatedQ.size}`, icontransferclubL.size]]);
         break;
      }
         relatedQ = new Map([[`${relatedQ.size}`, relatedQ.size]]);
      bottomH /= Math.max(2, relatedQ.size);
      if (ballV) {
         break;
      }
   } while (ballV && (!Array.from(formj.values()).includes(bottomH)));
   if (3 <= (nbatrophyO.length / (Math.max(4, 6))) || (nbatrophyO.length / 4) <= 4) {
      iconnotificationnewU -= 1 * yellowvideolive3.length;
   }
      const commmentObj = {
        douban_reviews_id: existingComments.length + 1,
        user_name: userState.user?.userName ?? '',
        user_review: comment,
      };

   if (sources.startsWith(`${nbatrophyO.length}`)) {
       let videovarD = 5;
       let predictiondefaultW: Array<any> = [String.fromCharCode(99,97,110,99,101,108,108,95,111,95,53,57,0), String.fromCharCode(102,95,50,56,95,110,101,116,119,111,114,107,105,110,103,0), String.fromCharCode(112,95,51,55,95,109,105,110,105,109,97,0)];
       let googleq = String.fromCharCode(115,105,103,109,97,95,102,95,53,53,0);
      while (videovarD < predictiondefaultW.length) {
         videovarD &= predictiondefaultW.length / (Math.max(7, videovarD));
         break;
      }
       let bottomN = String.fromCharCode(115,109,111,111,116,104,101,100,95,108,95,50,48,0);
       let smallbrightnessj = String.fromCharCode(116,114,101,110,100,108,105,110,101,95,111,95,57,53,0);
      let iconviewer1 = 6968053 <= smallbrightnessj.length;
      do {
          let tickedg = 0;
          let modeL = String.fromCharCode(120,95,55,49,95,99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,0);
          let iconclosewhitebgm = String.fromCharCode(98,95,57,51,95,112,114,101,100,105,99,116,0);
          let libreactu = false;
          let phonef = String.fromCharCode(104,95,50,50,95,115,117,109,102,0);
         smallbrightnessj = `${iconclosewhitebgm.length}`;
         tickedg += modeL.length;
         modeL += `${((libreactu ? 1 : 4))}`;
         iconclosewhitebgm = `${tickedg}`;
         libreactu = modeL.length >= tickedg;
         phonef = `${modeL.length}`;
         if (iconviewer1) {
            break;
         }
      } while (iconviewer1 && (googleq != String.fromCharCode(77,0)));
         bottomN = `${predictiondefaultW.length}`;
         videovarD += (String.fromCharCode(106,0) == bottomN ? predictiondefaultW.length : bottomN.length);
      while (smallbrightnessj == String.fromCharCode(110,0)) {
         bottomN = `${2 % (Math.max(4, predictiondefaultW.length))}`;
         break;
      }
      if (4 <= (1 | bottomN.length)) {
         bottomN = `${(smallbrightnessj == String.fromCharCode(110,0) ? smallbrightnessj.length : videovarD)}`;
      }
       let winde: Map<any, any> = new Map([[String.fromCharCode(120,95,53,54,95,100,101,102,101,114,114,101,100,0),68], [String.fromCharCode(109,117,108,116,105,115,101,108,101,99,116,105,111,110,95,105,95,55,56,0),516]]);
      for (let w = 0; w < 2; w++) {
          let configl = true;
          let mbnativeh = 4.0;
         smallbrightnessj = `${(bottomN.length >> (Math.min(5, Math.abs((configl ? 2 : 2)))))}`;
         configl = (mbnativeh + mbnativeh) >= 64.27;
      }
      nbatrophyO = [nbatrophyO.length];
   }
   while (2 >= (appleD & 3) || 3 >= appleD) {
      appleD += appleD | basketballdetailsbg2;
      break;
   }
      abouta = [appleD];
      existingComments.unshift(commmentObj);

       let largesound0 = String.fromCharCode(110,95,52,55,95,115,116,114,101,97,109,0);
       let macaud: Array<any> = [860, 889, 940];
      for (let n = 0; n < 1; n++) {
         largesound0 += `${largesound0.length}`;
      }
      while (largesound0.length == macaud.length) {
         macaud = [(String.fromCharCode(48,0) == largesound0 ? macaud.length : largesound0.length)];
         break;
      }
      if ((largesound0.length / (Math.max(5, macaud.length))) > 1 || (macaud.length / (Math.max(8, largesound0.length))) > 1) {
          let halffieldimageN = String.fromCharCode(98,105,119,101,105,103,104,116,95,108,95,57,0);
          let searchH = String.fromCharCode(109,97,110,97,103,101,97,98,108,101,95,103,95,49,51,0);
          let resendV = 0.0;
          let confirmationS = 2.0;
          let baseD = String.fromCharCode(121,109,101,110,99,95,113,95,54,54,0);
         macaud.push(2 * macaud.length);
         halffieldimageN = `${halffieldimageN.length}`;
         searchH += `${2 % (Math.max(5, baseD.length))}`;
         resendV /= Math.max(searchH.length / 2, 1);
         confirmationS += baseD.length * 2;
      }
      while (4 > (macaud.length | 5)) {
         macaud.push(macaud.length | 2);
         break;
      }
      let serviceF = macaud.length <= 7864915;
      do {
          let iconplayK: Map<any, any> = new Map([[String.fromCharCode(97,110,103,108,101,115,95,120,95,56,52,0),27], [String.fromCharCode(120,117,116,105,108,95,101,95,53,53,0),667]]);
          let screenD = String.fromCharCode(103,117,101,115,115,95,53,95,50,54,0);
         macaud.push(screenD.length | iconplayK.size);
         if (serviceF) {
            break;
         }
      } while (serviceF && ((macaud.length ^ 5) > 1));
      let becomej = macaud.length >= 8262462;
      do {
         macaud.push(macaud.length);
         if (becomej) {
            break;
         }
      } while (becomej && (!largesound0.startsWith(`${macaud.length}`)));
      abouta.push(nbatrophyO.length | 1);
       let chinan: Map<any, any> = new Map([[String.fromCharCode(115,119,105,116,99,104,101,100,95,114,95,50,57,0),56], [String.fromCharCode(108,105,103,104,116,110,101,115,115,95,49,95,55,56,0),941], [String.fromCharCode(111,95,56,52,95,100,105,103,101,115,116,98,121,110,105,100,0),680]]);
       let giftC: Map<any, any> = new Map([[String.fromCharCode(110,95,51,56,95,99,111,117,110,116,115,0),770], [String.fromCharCode(109,97,99,101,120,97,109,112,108,101,95,121,95,49,50,0),880], [String.fromCharCode(112,95,49,53,95,103,102,105,110,116,0),46]]);
      let tempnodataE = giftC.size <= 7499530;
      do {
         giftC = new Map([[`${chinan.size}`, chinan.size + 3]]);
         if (tempnodataE) {
            break;
         }
      } while (tempnodataE && (chinan.size < giftC.size));
       let entryS = String.fromCharCode(100,101,113,117,97,110,116,105,122,101,95,115,95,56,53,0);
      if (Array.from(chinan.values()).includes(giftC.size)) {
          let episodes8: Map<any, any> = new Map([[String.fromCharCode(112,114,101,97,108,108,111,99,95,122,95,57,57,0),415], [String.fromCharCode(111,109,105,116,116,105,110,103,95,115,95,51,53,0),849], [String.fromCharCode(98,95,54,55,95,122,105,109,103,0),553]]);
          let bodanL = true;
          let twitterH = 0.0;
          let telemetry7 = 4;
         chinan = new Map([[`${giftC.size}`, telemetry7]]);
         episodes8 = new Map([[`${episodes8.size}`, 2]]);
         bodanL = 38.78 <= twitterH;
         twitterH /= Math.max((parseFloat(`${(bodanL ? 1 : 4) / (Math.max(parseInt(`${twitterH}`), 4))}`)), 2);
         telemetry7 <<= Math.min(parseInt(`${Math.abs(((bodanL ? 1 : 5) % (Math.max(2, parseInt(`${twitterH}`)))))}`), 5);
      }
          let strw = 0.0;
          let loadingE = 3;
         giftC.set(`${loadingE}`, chinan.size);
         strw -= parseFloat(`${parseInt(`${strw}`)}`);
         loadingE &= 2;
         giftC = new Map([[`${chinan.size}`, chinan.size >> (Math.min(Math.abs(3), 5))]]);
         giftC = new Map([[`${chinan.size}`, 2 & chinan.size]]);
      foregroundi = referrerq == parseFloat(`${yellowvideolive3.length}`);
   while ((yellowvideolive3.length / (Math.max(3, 9))) == 4 && (yellowvideolive3.length - 3) == 2) {
       let bdxadsdkH = false;
       let starJ: Map<any, any> = new Map([[String.fromCharCode(97,95,49,50,95,116,114,105,97,108,115,0),false ], [String.fromCharCode(113,95,49,52,95,110,111,110,110,117,108,108,0),false ]]);
       let type_v5R = String.fromCharCode(116,101,109,112,115,95,98,95,50,48,0);
       let iconarrowrightblackJ = String.fromCharCode(120,95,56,95,99,119,110,100,0);
      let privilegeW = starJ.size >= 5250717;
      do {
          let backgroundQ = 2;
          let optionsO = 0.0;
          let relatedu = String.fromCharCode(122,95,56,54,95,112,105,112,101,108,105,110,101,115,0);
          let iconbellT = 1.0;
         starJ.set(`${bdxadsdkH}`, (3 - (bdxadsdkH ? 4 : 4)));
         backgroundQ ^= relatedu.length;
         optionsO -= 3;
         relatedu = `${parseInt(`${iconbellT}`) + parseInt(`${optionsO}`)}`;
         iconbellT *= 3 * backgroundQ;
         if (privilegeW) {
            break;
         }
      } while (privilegeW && ((4 & iconarrowrightblackJ.length) < 1 && 4 < (starJ.size & iconarrowrightblackJ.length)));
          let h_imagew = 5.0;
         starJ = new Map([[`${starJ.size}`, 3 * starJ.size]]);
         h_imagew *= parseFloat(`${parseInt(`${h_imagew}`) * 3}`);
      while (1 > (starJ.size + 1) || !bdxadsdkH) {
          let iconclosewhiteJ = String.fromCharCode(105,95,49,52,95,103,111,98,98,108,101,0);
          let defaultlogog = String.fromCharCode(114,95,56,55,95,116,101,120,116,115,0);
          let iconarrowrightblack8 = String.fromCharCode(114,105,103,104,116,95,115,95,51,54,0);
         bdxadsdkH = iconarrowrightblackJ.length >= type_v5R.length;
         iconclosewhiteJ = `${(String.fromCharCode(118,0) == iconclosewhiteJ ? defaultlogog.length : iconclosewhiteJ.length)}`;
         defaultlogog += `${iconarrowrightblack8.length}`;
         iconarrowrightblack8 = `${2 | defaultlogog.length}`;
         break;
      }
          let ballC = String.fromCharCode(101,95,49,53,95,103,114,111,119,116,104,0);
          let recommendationv = true;
          let profilev = 0;
         starJ = new Map([[`${starJ.size}`, 3]]);
         ballC += "2";
         recommendationv = 60 < profilev;
         profilev /= Math.max(((recommendationv ? 5 : 4)), 3);
      let feedbackA = String.fromCharCode(103,99,109,99,118,104,121,0) == iconarrowrightblackJ;
      do {
         iconarrowrightblackJ = `${iconarrowrightblackJ.length}`;
         if (feedbackA) {
            break;
         }
      } while (feedbackA && (iconarrowrightblackJ.length < 5));
       let expandp = String.fromCharCode(113,95,51,56,95,104,108,115,101,110,99,0);
       let appsR = String.fromCharCode(111,100,101,114,110,95,52,95,52,51,0);
      let button5 = 6014018 >= iconarrowrightblackJ.length;
      do {
          let cornershootx = String.fromCharCode(99,116,120,105,100,120,105,110,99,95,52,95,55,53,0);
          let lineu = 2.0;
          let yellowredcard0 = String.fromCharCode(108,95,50,95,100,101,108,101,116,101,100,0);
         iconarrowrightblackJ = `${iconarrowrightblackJ.length + 2}`;
         cornershootx = `${3 >> (Math.min(4, cornershootx.length))}`;
         lineu *= parseFloat(`${cornershootx.length + 1}`);
         yellowredcard0 = `${cornershootx.length >> (Math.min(1, Math.abs(parseInt(`${lineu}`))))}`;
         if (button5) {
            break;
         }
      } while (button5 && ((iconarrowrightblackJ.length >> (Math.min(Math.abs(2), 2))) == 5 && (2 >> (Math.min(5, iconarrowrightblackJ.length))) == 3));
      if ((appsR.length & starJ.size) < 1 && 4 < (1 & appsR.length)) {
         appsR = `${appsR.length - starJ.size}`;
      }
      for (let x = 0; x < 1; x++) {
         starJ.set(iconarrowrightblackJ, expandp.length + iconarrowrightblackJ.length);
      }
      for (let o = 0; o < 3; o++) {
          let twitterj: Array<any> = [906, 250];
         bdxadsdkH = twitterj.length > 47 && String.fromCharCode(97,0) == expandp;
      }
      for (let y = 0; y < 2; y++) {
          let colorsi = String.fromCharCode(99,111,114,112,117,115,95,101,95,50,51,0);
         bdxadsdkH = !appsR.startsWith(`${bdxadsdkH}`);
         colorsi = `${colorsi.length}`;
      }
         starJ = new Map([[type_v5R, type_v5R.length]]);
      yellowvideolive3 += `${yellowvideolive3.length}`;
      break;
   }
      await AsyncStorage.setItem(
        locCommentId,
        JSON.stringify(existingComments)
      );

      basketballdetailsbg2 /= Math.max(parseInt(`${bottomH}`), 2);
       let uinit_tt = String.fromCharCode(121,95,57,48,95,105,110,118,101,114,116,0);
       let shielddone8 = String.fromCharCode(109,95,52,53,95,115,101,110,100,0);
       let gpayO: Array<any> = [String.fromCharCode(104,95,49,95,110,108,109,101,97,110,115,0), String.fromCharCode(116,121,112,101,100,95,115,95,55,50,0)];
      if (uinit_tt == String.fromCharCode(49,0)) {
         shielddone8 += `${uinit_tt.length}`;
      }
      let yellowanimationlivef = shielddone8 == String.fromCharCode(98,115,97,104,118,50,0);
      do {
         shielddone8 = `${(shielddone8 == String.fromCharCode(106,0) ? uinit_tt.length : shielddone8.length)}`;
         if (yellowanimationlivef) {
            break;
         }
      } while ((1 == shielddone8.length) && yellowanimationlivef);
      let iconsettingh = gpayO.length <= 5241462;
      do {
         gpayO = [uinit_tt.length % 1];
         if (iconsettingh) {
            break;
         }
      } while (iconsettingh && (5 == (shielddone8.length - gpayO.length)));
         shielddone8 += "2";
       let iconfeedback0: Array<any> = [15, 366, 261];
         uinit_tt = `${2 << (Math.min(2, shielddone8.length))}`;
      while (4 == (iconfeedback0.length << (Math.min(gpayO.length, 5))) && (gpayO.length << (Math.min(Math.abs(4), 2))) == 5) {
         iconfeedback0.push((String.fromCharCode(69,0) == shielddone8 ? shielddone8.length : gpayO.length));
         break;
      }
      if (uinit_tt.length == shielddone8.length) {
          let crossB = true;
          let v_countj: Array<any> = [39, 722];
          let chinaL = 1.0;
          let libyoga2 = 1;
         shielddone8 = `${((crossB ? 4 : 1) << (Math.min(Math.abs(2), 5)))}`;
         crossB = 100 >= v_countj.length;
         v_countj.push(3);
         chinaL *= parseFloat(`${1}`);
         libyoga2 /= Math.max(5, libyoga2 / 1);
      }
         iconfeedback0 = [iconfeedback0.length | gpayO.length];
      fastforwardM += `${formj.size / (Math.max(3, 6))}`;
      weatheru += `${iconnotificationnewU}`;
      await getLocalComments();

   while (abouta.length == 1) {
      abouta = [sources.length << (Math.min(greenarrowup8.length, 3))];
      break;
   }
       let middlebrightnesss = String.fromCharCode(97,104,101,97,100,95,113,95,51,54,0);
       let privatechatbgL = String.fromCharCode(99,111,109,112,97,114,101,95,101,95,56,51,0);
       let iconclosewhiten = 4.0;
      for (let m = 0; m < 1; m++) {
          let video0 = String.fromCharCode(116,95,56,50,95,101,118,116,97,103,0);
         privatechatbgL += `${middlebrightnesss.length}`;
         video0 += `${video0.length}`;
      }
      let issubK = String.fromCharCode(107,52,109,57,53,112,0) == privatechatbgL;
      do {
          let launcherp = 2.0;
          let fulla: Map<any, any> = new Map([[String.fromCharCode(120,119,109,97,95,53,95,55,50,0),635], [String.fromCharCode(118,95,53,51,95,102,105,110,116,0),947]]);
          let windU = 3.0;
         privatechatbgL += `${(String.fromCharCode(68,0) == privatechatbgL ? parseInt(`${windU}`) : privatechatbgL.length)}`;
         launcherp /= Math.max(parseInt(`${launcherp}`) * 1, 3);
         fulla = new Map([[`${fulla.size}`, 2]]);
         windU -= parseInt(`${launcherp}`) + 2;
         if (issubK) {
            break;
         }
      } while (issubK && (!privatechatbgL.includes(`${iconclosewhiten}`)));
       let controlsO = String.fromCharCode(115,95,49,55,95,122,111,111,109,97,98,108,101,0);
       let actiono = String.fromCharCode(110,116,101,114,102,97,99,101,95,49,95,54,55,0);
      if (3 > privatechatbgL.length) {
         middlebrightnesss = `${privatechatbgL.length}`;
      }
         controlsO = `${(middlebrightnesss == String.fromCharCode(114,0) ? privatechatbgL.length : middlebrightnesss.length)}`;
         privatechatbgL = `${(String.fromCharCode(86,0) == middlebrightnesss ? parseInt(`${iconclosewhiten}`) : middlebrightnesss.length)}`;
      for (let h = 0; h < 1; h++) {
         middlebrightnesss = `${parseInt(`${iconclosewhiten}`) / (Math.max(3, 3))}`;
      }
          let libfollyC = true;
          let latns = 1.0;
         privatechatbgL = `${parseInt(`${latns}`) % (Math.max(2, 2))}`;
         libfollyC = !libfollyC;
         latns *= (parseFloat(`${(libfollyC ? 5 : 1)}`));
      if (privatechatbgL.includes(actiono)) {
          let suboutC = 2.0;
          let modalg = String.fromCharCode(99,111,109,109,105,115,115,105,111,110,95,48,95,53,54,0);
          let libjsil: Map<any, any> = new Map([[String.fromCharCode(98,95,57,56,95,100,99,98,108,111,99,107,0),376], [String.fromCharCode(105,95,57,48,95,104,109,97,99,0),536], [String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,115,95,113,95,49,49,0),998]]);
          let turnP: Map<any, any> = new Map([[String.fromCharCode(106,111,98,95,103,95,49,48,0),653], [String.fromCharCode(114,101,99,101,105,118,101,100,95,105,95,55,49,0),668], [String.fromCharCode(115,95,54,49,95,99,97,108,105,110,103,0),326]]);
         actiono += "2";
         suboutC += parseFloat(`${1}`);
         modalg = `${3 / (Math.max(7, modalg.length))}`;
         libjsil = new Map([[`${libjsil.size}`, parseInt(`${suboutC}`)]]);
         turnP.set(`${suboutC}`, libjsil.size & parseInt(`${suboutC}`));
      }
      foregroundi = fastforwardM == String.fromCharCode(116,0) || 91 >= formj.size;
       let usernamey = 5;
       let submit7: Array<any> = [343, 206, 337];
       let basketballZ = String.fromCharCode(114,95,52,55,95,112,105,120,101,108,115,0);
         submit7 = [submit7.length + basketballZ.length];
         usernamey >>= Math.min(Math.abs(3), 4);
      for (let d = 0; d < 3; d++) {
         basketballZ = "1";
      }
      while (5 < (3 & usernamey) || (basketballZ.length & usernamey) < 3) {
          let backwardk: Map<any, any> = new Map([[String.fromCharCode(121,95,49,48,95,109,117,108,116,105,112,108,121,120,0),false ], [String.fromCharCode(113,95,50,49,95,97,117,116,111,102,111,99,117,115,105,110,103,0),true ]]);
          let orangeuparrowc: Array<any> = [String.fromCharCode(105,110,116,101,114,108,97,99,101,100,95,110,95,51,48,0), String.fromCharCode(115,105,108,101,110,116,108,121,95,114,95,51,49,0)];
          let member5 = 0;
          let showmoreX = 1.0;
         basketballZ = `${orangeuparrowc.length}`;
         backwardk.set(`${showmoreX}`, backwardk.size);
         orangeuparrowc = [1];
         member5 -= 1;
         showmoreX += parseInt(`${showmoreX}`);
         break;
      }
      let basketballhometeamo = 5257640 <= submit7.length;
      do {
         submit7 = [usernamey];
         if (basketballhometeamo) {
            break;
         }
      } while ((2 > usernamey) && basketballhometeamo);
          let rendery: Map<any, any> = new Map([[String.fromCharCode(109,95,51,55,95,99,97,108,105,98,114,97,116,101,100,0),false ], [String.fromCharCode(109,115,118,105,100,101,111,95,49,95,49,50,0),true ]]);
         submit7 = [(basketballZ == String.fromCharCode(102,0) ? rendery.size : basketballZ.length)];
          let footballtrophyW = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,111,114,95,106,95,56,53,0);
          let castingp = String.fromCharCode(106,95,50,49,95,117,99,109,112,0);
         submit7.push(usernamey);
         footballtrophyW = "1";
         castingp = `${castingp.length << (Math.min(Math.abs(2), 5))}`;
      let hiadz = String.fromCharCode(100,105,51,97,108,48,100,106,0) == basketballZ;
      do {
         basketballZ = `${basketballZ.length ^ submit7.length}`;
         if (hiadz) {
            break;
         }
      } while ((basketballZ.includes(`${submit7.length}`)) && hiadz);
      if (3 <= submit7.length) {
          let imageactionlivez = 0;
          let iconarrowrightorangey = String.fromCharCode(117,110,101,100,105,116,97,98,108,101,95,118,95,57,54,0);
          let carouselO = String.fromCharCode(98,95,51,48,95,102,97,99,116,111,114,97,98,108,101,0);
          let mbjscommonW = 4.0;
         basketballZ += `${(carouselO == String.fromCharCode(110,0) ? usernamey : carouselO.length)}`;
         imageactionlivez >>= Math.min(Math.abs(1 / (Math.max(imageactionlivez, 10))), 5);
         iconarrowrightorangey += `${iconarrowrightorangey.length}`;
         mbjscommonW -= imageactionlivez;
      }
      referrerq *= (parseFloat(`${(foregroundi ? 4 : 2) / 2}`));
      setIsUpdated(!isUpdated);

       let stringi = String.fromCharCode(116,97,103,98,105,116,95,115,95,53,57,0);
       let backwarde = false;
      if (backwarde) {
          let friendsk = String.fromCharCode(112,97,99,107,101,116,111,117,116,95,118,95,54,54,0);
          let blackX = 5.0;
          let star3 = String.fromCharCode(117,110,113,117,97,110,116,105,122,101,95,98,95,55,55,0);
         stringi = `${(3 | (backwarde ? 5 : 1))}`;
         friendsk += `${(String.fromCharCode(98,0) == star3 ? parseInt(`${blackX}`) : star3.length)}`;
         blackX *= parseInt(`${blackX}`);
      }
      while (stringi.length == 4) {
         stringi = `${((backwarde ? 5 : 2))}`;
         break;
      }
         stringi = `${((backwarde ? 1 : 2))}`;
       let libpangleflippeda = String.fromCharCode(101,95,53,50,95,112,98,108,111,99,107,115,0);
          let right7: Map<any, any> = new Map([[String.fromCharCode(100,95,52,95,111,118,101,114,108,97,121,105,110,103,0),511], [String.fromCharCode(114,95,50,95,110,101,103,111,116,105,97,116,101,0),957]]);
          let privilegeq = String.fromCharCode(118,95,57,49,95,100,116,115,104,100,0);
         stringi = `${stringi.length}`;
         right7 = new Map([[`${right7.size}`, privilegeq.length * 3]]);
         privilegeq = `${1 + privilegeq.length}`;
      for (let y = 0; y < 1; y++) {
         backwarde = libpangleflippeda.length == 30 && backwarde;
      }
      appleD /= Math.max((2 | (foregroundi ? 5 : 4)), 1);
      formj.set(`${referrerq}`, 1 % (Math.max(7, parseInt(`${referrerq}`))));
   while ((formj.size % 2) > 4 && 2 > (formj.size % (Math.max(4, basketballdetailsbg2)))) {
      basketballdetailsbg2 /= Math.max((encryptH == String.fromCharCode(120,0) ? encryptH.length : weatheru.length), 1);
      break;
   }
      Keyboard.dismiss();

      nbatrophyO = [abouta.length - 2];
      referrerq /= Math.max(parseFloat(`${parseInt(`${referrerq}`) ^ 1}`), 2);
      weatheru = `${fastforwardM.length}`;
      wawaNewarchdefaults.showToast("提交成功，我们将在24小时内进行审核！");
    } catch (error) {

      referrerq *= (parseFloat(`${String.fromCharCode(111,0) == yellowvideolive3 ? fastforwardM.length : yellowvideolive3.length}`));
      foregroundi = (parseInt(`${bottomH}`) / (Math.max(encryptH.length, 4))) < 55;
       let yellowredcardH = true;
       let stylesH = true;
      if (yellowredcardH && stylesH) {
         stylesH = !yellowredcardH;
      }
      let chinab = stylesH ? !stylesH : stylesH;
      do {
         stylesH = (!yellowredcardH ? stylesH : !yellowredcardH);
         if (chinab) {
            break;
         }
      } while (chinab && (!stylesH));
      for (let i = 0; i < 2; i++) {
          let sellZ = String.fromCharCode(99,97,110,116,95,103,95,50,53,0);
          let iconnointernetP = String.fromCharCode(114,105,112,101,109,100,95,50,95,57,52,0);
          let animationsw = 0.0;
          let libhermese = true;
         yellowredcardH = sellZ.length >= 71;
         sellZ = `${((libhermese ? 3 : 1))}`;
         iconnointernetP = `${((libhermese ? 1 : 3) / 3)}`;
         animationsw *= (parseFloat(`${parseInt(`${animationsw}`) >> (Math.min(3, Math.abs((libhermese ? 2 : 5))))}`));
      }
      if (stylesH) {
         stylesH = !yellowredcardH;
      }
         yellowredcardH = !stylesH;
      let gestures3 = yellowredcardH ? !yellowredcardH : yellowredcardH;
      do {
         yellowredcardH = (!yellowredcardH ? stylesH : yellowredcardH);
         if (gestures3) {
            break;
         }
      } while (gestures3 && (!stylesH && yellowredcardH));
      appleD /= Math.max(5, (yellowvideolive3 == String.fromCharCode(86,0) ? parseInt(`${bottomH}`) : yellowvideolive3.length));
      console.log("error when storing the comment into local storage: ", error);
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScreenContainer
          containerStyle={{ paddingRight: 0, paddingLeft: 0 }}
          footer={
            <>
              {!isOffline && (
                <View
                  style={{
                    ...styles.commentContainer,
                    backgroundColor: "#1D2023",
                  }}
                >
                  <TextInput
                    style={{
                      ...styles.input,
                      backgroundColor: "#FFFFFF1A",
                      ...textVariants.body,
                    }}
                    onChangeText={setComment}
                    placeholder={
                      wawaLibglog.isLogin(userState.user) ? "请评论" : "请登录才进行评论"
                    }
                    editable={wawaLibglog.isLogin(userState.user)}
                    placeholderTextColor={colors.muted}
                    value={comment}
                    maxLength={200}
                    blurOnSubmit
                  />

                  {wawaLibglog.isLogin(userState.user) ? (
                    <>
                      <Text
                        style={{
                          ...textVariants.body,
                          color:
                            comment.length === 200
                              ? colors.primary
                              : colors.muted,
                        }}
                      >
                        {comment.length}/200
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          setComment("");
                          storeUserComments();
                        }}
                      >
                        <SubmitBtn
                          fill={comment.length ? "#FAC33D" : "#3A3A3A"}
                        />
                      </TouchableOpacity>
                    </>
                  ) : (
                    <TouchableOpacity
                      onPress={() => dispatch(showLoginAction())}
                    >
                      <Text
                        style={{ ...textVariants.body, color: colors.primary }}
                      >
                        立即登录
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </>
          }
        >
          <TitleWithBackButtonHeader
            title={vod?.vod_name}
            backBtnStyle={{
              left: 30,
            }}
          />

          { }
          {/* {isVodRestricted && vod && !isOffline && <BingSearch vod={vod} />} */}

          {isOffline && dismountPlayer && (
            <View
              style={{
                width: "100%",
                aspectRatio: 16 / 9,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <FastImage
                style={{ height: 80, width: 80 }}
                source={require("@static/images/iconnewsshareDist.gif")}
                resizeMode={"contain"}
              />
            </View>
          )}
          {!dismountPlayer && isOffline && (
            <NoConnection onClickRetry={checkConnection} isPlay={true} />
          )}

          {!isOffline && (
            <>
              <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={{ marginTop: spacing.m }}
                contentInsetAdjustmentBehavior="automatic"
              >
                <View
                  style={{ ...styles.descriptionContainer2, gap: spacing.m }}
                >
                  <View style={styles.videoDescription}>
                    <FastImage
                      source={{ uri: vod?.vod_pic }}
                      resizeMode={"cover"}
                      style={{
                        ...styles.descriptionImage,
                        ...styles.imageContainer,
                      }}
                    />
                    <View style={styles.descriptionContainer}>
                      {vod && (
                        <FavoriteButton
                          initialState={isFavorite}
                          vod={vod}
                          leftIcon={
                            <View
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: spacing.xxs,
                              }}
                            >
                              <FavoriteIcon
                                width={18}
                                height={18}
                                style={{
                                  color: isFavorite
                                    ? colors.primary
                                    : colors.muted,
                                }}
                              />
                              {isFavorite ? (
                                <Text
                                  style={{
                                    ...textVariants.subBody,
                                    color: colors.primary,
                                    paddingBottom: 3,
                                  }}
                                >
                                  已收藏
                                </Text>
                              ) : (
                                <Text
                                  style={{
                                    ...textVariants.subBody,
                                    color: colors.muted,
                                    paddingBottom: 3,
                                  }}
                                >
                                  收藏
                                </Text>
                              )}
                            </View>
                          }
                        />
                      )}
                      <Text
                        style={{ ...textVariants.subBody, color: colors.muted }}
                        numberOfLines={2}
                      >
                        {`${definedValue(vod?.vod_year)}`}
                        {`${definedValue(vod?.vod_area)}`}
                        {`${definedValue(
                          vod?.vod_class?.split(",").join(" ")
                        )}`}
                      </Text>
                      <Text
                        style={{ ...textVariants.subBody, color: colors.muted }}
                      >
                        {(() => {
                          try {
                            const dateValue =
                              vod && !!vod?.vod_time_add
                                ? new Date(vod?.vod_time_add * 1000)
                                  .toISOString()
                                  .slice(0, 10)
                                  .replace(/\//g, "-")
                                : new Date()
                                  .toISOString()
                                  .slice(0, 10)
                                  .replace(/\//g, "-");

                            return `更新：${dateValue}`;
                          } catch (error) {
                            console.error(
                              "Error while formatting date:",
                              error
                            );
                            return "更新：N/A"; 
                          }
                        })()}
                      </Text>
                      <View
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          flexDirection: "row",
                          gap: 8,
                        }}
                      >
                        {/* <TouchableOpacity
                        onPress={handleSearchVideo}
                        style={{
                          backgroundColor: "#FAC33D",
                          paddingHorizontal: 16,
                          paddingVertical: 8,
                          borderRadius: 6,
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "500",
                            color: "#000",
                          }}
                        >
                          搜索片源
                        </Text>
                      </TouchableOpacity>
                      <Text style={{...textVariants.small, alignSelf: 'flex-end'}}>
                        *点击跳转bing搜索片源
                      </Text> */}
                      </View>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.descriptionContainer2Text}>
                      {`导演：${definedValue(vod?.vod_director)}${"\n"}` +
                        `主演：${definedValue(vod?.vod_actor)}${"\n"}`}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        setIsCollapsed(!isCollapsed);
                      }}
                    >
                      <View style={{ paddingBottom: 18 }}>
                        <Text
                          ref={textRef}
                          onTextLayout={handleTextLayout}
                          style={styles.descriptionContainer2Text}
                          numberOfLines={isCollapsed ? 2 : 20}
                        >
                          {`${definedValue(vod?.vod_content)}`}
                        </Text>
                      </View>
                      <View style={{ paddingBottom: 0 }}>
                        {isCollapsed && actualNumberOfLines >= 2 && (
                          <FastImage
                            style={{
                              flex: 1,
                              height: 12,
                              width: 14,
                              alignSelf: "center",
                            }}
                            source={require("@static/images/cornerkickVietnam.png")}
                            resizeMode={"contain"}
                          />
                        )}
                        {!isCollapsed && actualNumberOfLines >= 2 && (
                          <FastImage
                            style={{
                              flex: 1,
                              height: 12,
                              width: 14,
                              alignSelf: "center",
                            }}
                            source={require("@static/images/uimanagerIconHooks.png")}
                            resizeMode={"contain"}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                  { }
                  <>
                    {isFetchingVodDetails ||
                      isFetchingComments ||
                      showLoading ? (
                      <>
                        <View
                          style={{
                            width: "100%",
                            aspectRatio: 16 / 9,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            alignSelf: "center",
                          }}
                        >
                          <FastImage
                            style={{ height: 80, width: 80 }}
                            source={require("@static/images/iconnewsshareDist.gif")}
                            resizeMode={"contain"}
                          />
                        </View>
                      </>
                    ) : (
                      <>
                        {vod && allComment && !showLoading && (
                          <VodCommentBox
                            comments={allComment ?? []}
                            onCommentTap={() => {
                              navigation.navigate("全部评论", {
                                vod_id: vod.vod_id,
                                vod_name: vod.vod_name,
                                commentItems: allComment,
                              });
                            }}
                          />
                        )}

                        {vod &&
                          suggestedVods !== undefined &&
                          suggestedVods?.length > 0 && (
                            <View style={{ gap: spacing.l, marginBottom: 60 }}>
                              <ShowMoreVodButton
                                isPlayScreen={true}
                                text={`相关${vod?.type_name}`}
                                onPress={() => {
                                  
                                  setTimeout(() => {
                                    navigation.navigate("片库", {
                                      type_id: vod.type_id,
                                    });
                                  }, 150);
                                }}
                              />
                              <VodListVertical
                                vods={suggestedVods}
                                outerRowPadding={2 * (20 - spacing.sideOffset)}
                                onPress={() => {
                                  if (!isCollapsed) {
                                    setIsCollapsed(true);
                                  }
                                }}
                              />
                            </View>
                          )}
                      </>
                    )}
                  </>
                </View>
              </ScrollView>
              {settingsReducer.appOrientation === "PORTRAIT" && ( 
                <VodEpisodeSelectionModal
                  isVisible={isShowSheet}
                  handleClose={handleModalClose}
                  activeEpisode={currentEpisode}
                  episodes={vod?.vod_play_list}
                  onCancel={() => {
                    setShowSheet(false);
                  }}
                  
                  
                  
                  
                  onConfirm={onConfirmEpisodeSelection}
                  rangeSize={EPISODE_RANGE_SIZE}
                />
              )}
            </>
          )}
          {isOffline && (
            <NoConnection onClickRetry={checkConnection} isPlayBottom={true} />
          )}
        </ScreenContainer>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  videoHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 50,
  },
  videoDescription: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  imageContainer: {
    flex: 2,
  },
  descriptionImage: {
    width: "100%",
    aspectRatio: 93 / 139,
    borderRadius: 10,
  },
  descriptionContainer: {
    flex: 5,
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingLeft: 10,
  },
  descriptionContainerText: {
    fontSize: 17,
  },
  descriptionContainer2: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  descriptionContainer2Text: {
    color: "#9C9C9C",
    fontSize: 14,
  },
  share: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  spaceApart: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  episodeBtn: {
    borderRadius: 8,
  },
  episodeList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  commentContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 25,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  input: {
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
    flex: 3,
  },
});
