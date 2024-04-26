

class Time_vkCasting {
    static videojsBridgeCloseDownloaded = (contents: [number], key: number, hasEmoji: boolean) => {
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
  memo,
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
  Dimensions,
  Modal,
} from "react-native";
import FavoriteButton from "../../components/button/ww_whistleorange_button";
import FavoriteIcon from "@static/images/libavfilterDefaultroombgPause.svg";
import VodDetailIcon from "@static/images/episodesScreen.svg";
import DlVodIcon from "@static/images/descImagemanagerSplash.svg";
import ScreenContainer from "../../components/container/ww_collection";
import {
  useTheme,
  useFocusEffect,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import { wwAbidetect } from "../../../ww_leakchecker";

import { RootStackScreenProps } from "@type/ww_tempnodatagif_description";
import {
  wwCenterPlay,
  wwProfileinactiveBrightness,
  wwWith,
  wwSendBuild,
} from "@type/ww_dycreator_result";
import { addVodToHistory, onViewShortVod, playVod } from "@redux/actions/ww_floater";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { wwEighteenShirt } from "@redux/ww_small";
import {
  wwBang,
  wwMbjscommon,
} from "@redux/reducers/ww_shared";
import SinaIcon from "@static/images/componentsMbjscommon.svg";
import WeChatIcon from "@static/images/defaultroombgAnimationsExampleimage.svg";
import QQIcon from "@static/images/photoStation.svg";
import PYQIcon from "@static/images/entryEwarded.svg";
import MoreArrow from "@static/images/libcxxcomponentsPrivilege.svg";
import SourceIcon from "@static/images/successStreaming.svg";
import VodEpisodeSelectionModal from "../../components/modal/ww_switch";
import FastImage from "../../components/common/ww_result";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  APP_NAME_CONST,
  DOWNLOAD_FEATURE_ENABLED,
  INVITE_FRIEND,
  PLAY_HTTP_SERVER_PORT,
  UMENG_CHANNEL,
  VIEW_NUMBER_FOR_SHOW_VIDEO_ADS,
} from "@utility/ww_icon";
import { useQuery } from "@tanstack/react-query";
import ShowMoreVodButton from "../../components/button/ww_delegate_matchactive_button";
import VodListVertical from "../../components/vod/ww_defaultplayerimg";
import VodPlayer from "../../components/videoPlayer/ww_libreanimated";
import { FlatList } from "react-native-gesture-handler";
import { wwShielddoneAlbum } from "@redux/reducers/ww_detail_mbsplash";
import BingSearch from "../../components/container/ww_room";

import NoConnection from "../../components/common/ww_downarrow";
import NetInfo from "@react-native-community/netinfo";
import { lockAppOrientation } from "@redux/actions/ww_dialog";
import { AdsBannerContext } from "../../contexts/ww_setting";
import { URL } from "react-native-url-polyfill";
import RNFetchBlob from "rn-fetch-blob";
import { BridgeServer } from "react-native-http-bridge-refurbished";
import { debounce } from "lodash";

import LinearGradient from "react-native-linear-gradient";
import VipIcon from "@static/images/selectedDefaultplayerimgAnner.svg";
import AdultVideoVipModal from "../../components/modal/ww_penaltygoal_shoot";
import VipRegisterBar from "../../components/adultVideo/ww_danger_predictionbannershared";
import {
  disableAdultMode,
  enableAdultMode,
  incrementAdultVideoWatchTime,
  setIsPlayGuideShown,
  setIsPlayGuideShown2,
} from "@redux/actions/ww_hash";

import ww_runtime from "../../../Umeng/ww_runtime";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenModel } from "@type/ww_jingdong_libavfilter";
import { wwIconedit } from "@api";

import DescriptionBottomSheet from "../../components/videoPlayer/Play/ww_greytick_goal";
import { VodDescription } from "../../components/videoPlayer/Play/vodDescription";

import { BannerContainer } from "../../components/container/ww_runtime_iconarrowright";
import { wwForegroundModules } from "@utility/ww_rewardvideo";
import { wwCollection } from "@constants";
import BecomeVipOverlay from "../../components/modal/ww_animation";
import { wwLivenodatabgimg } from "../../api/ww_right";
import SimpleToast from "react-native-simple-toast";
import DownloadVodSelectionModal from "../../components/modal/ww_match";
import DeviceInfo from "react-native-device-info";
import { addVideoToDownloadThunk } from "@redux/actions/ww_benefit_filled";
import {
  DVGGrayTeamdetailsbg,
  wwResendTextlayoutmanager,
  wwTextinputDirect,
} from "@type/ww_skip";
import { wwLaunchRound } from "@utility/ww_star";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";
import { wwInjury } from "../../routes/ww_with_gray";
import VipGuideModal from "../../components/modal/ww_bdxadsdk_kick";
import wwSelect from "../../../AppsFlyer/ww_short";
import VipGuideModal2 from "../../components/modal/ww_privacy_cast";
import { HBackground, useRewardVideoAds } from "@hooks/ww_apple";
let insetsTop = 0;
let insetsBottom = 0;

type wwBinddatasHandler = {
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

const server = new BridgeServer(Time_vkCasting.videojsBridgeCloseDownloaded([-123,-103,-103,-99,-78,-98,-120,-97,-101,-124,-114,-120,-19],0xED,false), true); 

const getNoAdsUri = async (url: string, vodId: string) => {
  
  const m3u8Content = (await RNFetchBlob.fetch("GET", url)).text().toString();

  const isPlaylistFile =
    m3u8Content.match(/#EXT-X-TARGETDURATION:\d*/) !== null;

  if (!isPlaylistFile) {
    return url;
  } else {
    const modifiedPlaylist = m3u8Content.replace(
      /#EXT-X-TARGETDURATION:\d*/,
      "#EXT-X-TARGETDURATION:999"
    );
    const uniqueIdentifier = url.split("/").at(-1)?.replace(".m3u8", "");

    server.get(`/${uniqueIdentifier}/index.m3u8`, async (req, res) => {
      res.send(200, "application/vnd.apple.mpegurl", modifiedPlaylist);
    });

    return `http://localhost:${PLAY_HTTP_SERVER_PORT}/${uniqueIdentifier}/index.m3u8`;
  }

  
  
  
  //   .filter((part) => !part.includes(".m3u8"))
  
  
  
  
  

  
  
  
  
  
  
  
  
  

  
  
  
  
  
  //   .filter((txt) => txt.includes(".m3u8"))
  
  

  
  
  
  

  
  
  

  

  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //   (_, index) => !adsLine.includes(index)
  

  

  
  
  
  
  
  
  

  
  
  
  
  

  
};

const Play = ({ navigation, route }: RootStackScreenProps<"播放">) => {
  const { setRoute: setAdsRoute } = useContext(AdsBannerContext);
  useFocusEffect(() => {
    
    setAdsRoute(route.name);
  });

  const { colors, spacing, textVariants, icons } = useTheme();
  const dispatch = useAppDispatch();

  const vodReducer: wwMbjscommon = useAppSelector(
    ({ vodReducer }: wwEighteenShirt) => vodReducer
  );
  const vodFavouriteReducer: wwBang = useAppSelector(
    ({ vodFavouritesReducer }: wwEighteenShirt) => vodFavouritesReducer
  );
  const settingsReducer: wwShielddoneAlbum = useAppSelector(
    ({ settingsReducer }: wwEighteenShirt) => settingsReducer
  );
  const userState = useSelector<wwVertical>("userReducer");
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );
  const adultMode = route.params.player_mode === "adult" ? true : false;
  const [isShowAdOverlay, setShowAdOverlay] = useState(false);
  const [distanceToBottom, setDistanceToBottom] = useState<number>(0); 

  useEffect(() => {
    if (route.params.player_mode === "adult") {
      dispatch(enableAdultMode());
    } else {
      dispatch(disableAdultMode());
    }
  }, []);

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
  const videoPlayerRef = useRef() as React.MutableRefObject<wwBinddatasHandler>;
  const currentEpisodeRef = useRef<number>();
  const currentSourceRef = useRef<number>();
  const sourceRef = useRef<FlatList>(null);

  const [dismountPlayer, setDismountPlayer] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isShowSheet, setShowSheet] = useState(false);
  const isVip = wwBodan.isVip(userState.user);

  const [isReadyPlay, setReadyPlay] = useState(false);

  

  const [currentSourceId, setCurrentSourceId] = useState(
    vod?.sourceWatched === undefined ? 0 : vod.sourceWatched
  );
  const [currentQuality, setCurrentQuality] = useState(
    vod?.sourceWatched === undefined ? 0 : vod.sourceWatched
  );
  const [vodSources, setVodSources] = useState<wwWith[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVodPlayerLoading, setIsVodPlayerLoading] = useState(false);
  const [shouldResumeAfterLoad, setShouldResumeAfterLoad] = useState(false);

  const [isShowDescription, setShowDescription] = useState(false);
  const [isShowDlEpisode, setShowDlEpisode] = useState(false);

  const [bannerAd, setBannerAd] = useState<wwSendBuild>();
  const {
    showAds,
  } = useRewardVideoAds();

  const [refPosition, setRefPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const componentRef = useRef<View>(null); 
  const [vipGuideModal, setVipGuideModal] = useState(false);
  const [vipGuideModalDL, setVipGuideModalDL] = useState(false);
  const [vipGuideModalOpen, setVipGuideModalOpen] = useState(false);
  const screenWidth = Dimensions.get("window");

  
  
  //   queryFn: () => wwIconedit.getTopicType(),
  

  
  

  //   return navOptions.find(x => x.type_name === '短剧')?.type_id ?? -1;
  

  const downloadedVod: wwTextinputDirect | undefined = useAppSelector(
    ({ downloadVideoReducer }: wwEighteenShirt) => {
      return downloadVideoReducer.downloads.find(
        (download) => download.vod.vod_id === vod?.vod_id
      );
    }
  );
  const episode = adultMode
    ? downloadedVod?.episodes.find(
      (ep) =>
        ep.vodUrlNid === currentEpisode &&
        ep.status === DVGGrayTeamdetailsbg.DVGRoom
    )
    : downloadedVod?.episodes.find(
      (ep) =>
        ep.vodSourceId === currentSourceId &&
        ep.vodUrlNid === currentEpisode &&
        ep.status === DVGGrayTeamdetailsbg.DVGRoom
    );

  
  const onPressSource = useCallback(
    (itemId: any) => {
      if (itemId !== currentSourceId) {
        setCurrentSourceId(itemId);
        currentTimeRef.current = 0; 
        if (videoPlayerRef.current) {
          videoPlayerRef.current?.setPause(true);
          setShouldResumeAfterLoad(true);
        }
      }
    },
    [currentSourceId]
  );

  const onAdsMount = () => {
       let typingN = 0.0;
    let acceptedQ = 1.0;
    let modelsl = false;
    let indexc = 5;
    let policyV = false;
    let faviconj: Map<any, any> = new Map([[String.fromCharCode(111,95,53,56,95,115,101,112,97,114,97,116,101,0),String.fromCharCode(116,105,108,108,95,121,95,49,48,48,0)], [String.fromCharCode(105,118,102,101,110,99,95,50,95,53,56,0),String.fromCharCode(122,98,105,110,95,54,95,54,51,0)], [String.fromCharCode(105,110,108,105,103,104,116,95,110,95,56,49,0),String.fromCharCode(105,95,51,57,95,115,111,97,99,99,101,112,116,0)]]);
    let middlebrightnessN = 0;
   let uimanagerQ = modelsl ? !modelsl : modelsl;
   do {
      modelsl = acceptedQ < 42.92 && middlebrightnessN < 37;
      if (uimanagerQ) {
         break;
      }
   } while (uimanagerQ && (modelsl));
   if (2.96 <= typingN || (2.96 / (Math.max(8, typingN))) <= 4.25) {
      policyV = null != faviconj.get(`${middlebrightnessN}`);
   }


    if (screenState.interstitialShow == true) {

      acceptedQ /= Math.max(3, 5);
   for (let l = 0; l < 2; l++) {
      policyV = !policyV || 28.92 >= acceptedQ;
   }
      videoPlayerRef.current?.setPause(true); 
    }

    

   let constants_ = acceptedQ <= 7109002.0;
   do {
      acceptedQ *= 2 & parseInt(`${acceptedQ}`);
      if (constants_) {
         break;
      }
   } while ((typingN < acceptedQ) && constants_);
   let favoritez = typingN >= 8361163.0;
   do {
      typingN -= parseInt(`${acceptedQ}`) & 3;
      if (favoritez) {
         break;
      }
   } while (favoritez && ((typingN + 5.85) >= 4.96 || (typingN + acceptedQ) >= 5.85));
    

   if (!policyV) {
      policyV = 46.48 == typingN;
   }
   for (let g = 0; g < 1; g++) {
       let window_4X = String.fromCharCode(107,95,57,56,95,108,97,121,101,114,105,110,103,0);
       let roomy = String.fromCharCode(97,108,116,101,114,95,57,95,50,56,0);
       let bufferh = 1;
       let control4 = 2.0;
      if (4.31 > (bufferh * control4)) {
         bufferh >>= Math.min(Math.abs(1 & window_4X.length), 4);
      }
         bufferh ^= roomy.length - 1;
         roomy += "1";
      if (roomy.length >= 3) {
          let libfbjnir = String.fromCharCode(103,95,56,51,95,116,114,97,102,0);
          let toponv: Array<any> = [915, 636];
          let overZ: Map<any, any> = new Map([[String.fromCharCode(98,95,52,51,95,115,104,111,119,99,113,116,0),686], [String.fromCharCode(97,116,111,109,105,99,115,95,107,95,55,52,0),718]]);
         window_4X = `${bufferh}`;
         libfbjnir = `${overZ.size + 3}`;
         toponv = [2 >> (Math.min(5, toponv.length))];
         overZ.set(`${libfbjnir}`, 1);
      }
      let videojsU = roomy.length >= 8701502;
      do {
         roomy = `${2 ^ bufferh}`;
         if (videojsU) {
            break;
         }
      } while (videojsU && (!roomy.startsWith(`${window_4X.length}`)));
      if (bufferh >= 1) {
         bufferh %= Math.max(roomy.length * 3, 3);
      }
          let leagueD = false;
          let feedbackm = String.fromCharCode(99,111,110,115,117,109,112,116,105,111,110,95,122,95,56,56,0);
          let updatesR = String.fromCharCode(119,95,54,55,95,115,116,97,103,101,0);
         bufferh |= bufferh / (Math.max(roomy.length, 4));
         leagueD = updatesR == feedbackm;
         feedbackm = `${feedbackm.length}`;
         updatesR += `${feedbackm.length & 1}`;
          let reactnativejs3: Map<any, any> = new Map([[String.fromCharCode(110,101,111,110,95,121,95,50,50,0),String.fromCharCode(100,101,108,116,97,115,95,99,95,51,49,0)], [String.fromCharCode(105,95,56,50,95,117,110,105,102,111,114,109,0),String.fromCharCode(109,101,109,95,107,95,51,0)]]);
         bufferh ^= 3 ^ parseInt(`${control4}`);
         reactnativejs3.set(`${reactnativejs3.size}`, reactnativejs3.size);
          let circleH: Array<any> = [401, 542, 978];
          let minivodR = String.fromCharCode(105,95,57,52,95,112,97,114,99,111,114,0);
          let with_azU: Array<any> = [705, 348];
         roomy += `${(String.fromCharCode(107,0) == window_4X ? minivodR.length : window_4X.length)}`;
         circleH.push(with_azU.length % (Math.max(5, circleH.length)));
         minivodR += `${circleH.length / (Math.max(with_azU.length, 3))}`;
          let sansn = 1;
          let iconmoreE = false;
         bufferh <<= Math.min(1, Math.abs(bufferh - 2));
         sansn ^= (sansn | (iconmoreE ? 1 : 1));
         iconmoreE = !iconmoreE;
      for (let y = 0; y < 2; y++) {
         roomy = "3";
      }
          let giflivestreamingo = String.fromCharCode(112,114,101,114,111,108,108,95,49,95,49,53,0);
          let bangp: Array<any> = [372, 881, 423];
          let utilsP = String.fromCharCode(114,95,57,57,95,122,101,114,111,0);
         bufferh *= parseInt(`${control4}`);
         giflivestreamingo += `${giflivestreamingo.length}`;
         bangp.push(utilsP.length);
         utilsP = `${utilsP.length}`;
      typingN += (roomy == String.fromCharCode(52,0) ? (modelsl ? 5 : 5) : roomy.length);
   }
    

       let verticalH = 1;
       let bodan0 = String.fromCharCode(119,95,53,54,95,115,104,105,109,109,101,114,105,110,103,0);
      while ((bodan0.length - verticalH) == 4) {
         bodan0 += `${bodan0.length}`;
         break;
      }
       let renewu = String.fromCharCode(97,95,53,49,95,115,113,108,105,116,101,0);
       let condensedD = String.fromCharCode(115,99,101,110,101,99,117,116,95,49,95,51,48,0);
          let areaw = 2;
          let libfabricjniZ = true;
         renewu += `${condensedD.length * 2}`;
         areaw += 3;
         libfabricjniZ = areaw > 61;
      for (let q = 0; q < 3; q++) {
          let whitetickz: Array<any> = [String.fromCharCode(122,95,49,95,112,108,97,99,101,109,97,114,107,0), String.fromCharCode(108,95,52,56,95,114,101,99,111,114,100,101,114,0), String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,95,104,95,53,0)];
          let libfbjniF = String.fromCharCode(112,95,51,95,112,114,101,100,105,99,116,0);
          let areay = 5;
          let iconeditK = String.fromCharCode(99,111,108,108,97,116,101,95,54,95,57,50,0);
          let benefit9 = false;
         bodan0 += `${(String.fromCharCode(114,0) == condensedD ? renewu.length : condensedD.length)}`;
         whitetickz = [(String.fromCharCode(70,0) == iconeditK ? (benefit9 ? 4 : 2) : iconeditK.length)];
         libfbjniF += `${libfbjniF.length}`;
         areay += 2;
      }
          let usernameW: Map<any, any> = new Map([[String.fromCharCode(113,95,51,55,95,121,97,114,110,0),String.fromCharCode(110,95,56,50,95,102,105,108,108,105,110,0)], [String.fromCharCode(117,112,100,97,116,101,100,95,102,95,53,52,0),String.fromCharCode(105,110,103,114,101,115,115,95,51,95,51,55,0)], [String.fromCharCode(100,105,115,99,111,110,110,101,99,116,101,100,95,98,95,53,54,0),String.fromCharCode(100,95,57,57,95,112,97,114,97,109,101,116,101,114,0)]]);
         renewu += `${verticalH}`;
         usernameW.set(`${usernameW.size}`, usernameW.size ^ 2);
         bodan0 += `${bodan0.length}`;
      typingN *= (String.fromCharCode(72,0) == bodan0 ? bodan0.length : parseInt(`${typingN}`));
   let applicationu = policyV ? !policyV : policyV;
   do {
       let schedulek = 1.0;
       let libcxxcomponents5 = false;
       let user8: Map<any, any> = new Map([[String.fromCharCode(108,95,52,50,95,98,117,102,102,101,114,105,110,103,0),String.fromCharCode(115,97,103,97,95,98,95,50,54,0)], [String.fromCharCode(105,95,51,49,95,112,101,114,109,117,116,101,115,0),String.fromCharCode(114,97,100,105,97,108,95,98,95,55,56,0)]]);
       let libsentryo: Map<any, any> = new Map([[String.fromCharCode(116,95,49,53,0),true ], [String.fromCharCode(105,101,101,101,95,56,95,55,56,0),true ]]);
       let borderless8: Map<any, any> = new Map([[String.fromCharCode(112,97,100,100,105,110,103,95,114,95,54,56,0),638], [String.fromCharCode(99,111,111,108,100,111,119,110,95,112,95,51,0),929]]);
         libcxxcomponents5 = !libcxxcomponents5;
      while (2 == libsentryo.size) {
         libsentryo = new Map([[`${user8.size}`, 1]]);
         break;
      }
       let bridgev = 1.0;
         libcxxcomponents5 = 21 == libsentryo.size;
       let mathu = 5.0;
       let carouselx = 2.0;
      for (let g = 0; g < 2; g++) {
         carouselx += (parseFloat(`${(libcxxcomponents5 ? 3 : 2) - 3}`));
      }
      let jingdongH = libcxxcomponents5 ? !libcxxcomponents5 : libcxxcomponents5;
      do {
          let bridger = 1;
          let successx: Array<any> = [997, 453, 896];
          let downloadingC: Array<any> = [String.fromCharCode(104,95,56,57,95,115,104,97,100,105,110,103,0), String.fromCharCode(105,114,99,97,109,95,52,95,56,48,0), String.fromCharCode(99,111,109,109,97,110,100,115,95,49,95,50,51,0)];
          let klevinh = String.fromCharCode(99,97,110,99,101,108,108,97,116,105,111,110,95,102,95,53,56,0);
         libcxxcomponents5 = downloadingC.length == libsentryo.size;
         bridger ^= (String.fromCharCode(108,0) == klevinh ? klevinh.length : successx.length);
         successx.push(successx.length % (Math.max(3, 6)));
         downloadingC.push(1);
         if (jingdongH) {
            break;
         }
      } while (jingdongH && (libcxxcomponents5));
         carouselx -= parseFloat(`${2}`);
      if ((5.3 - carouselx) > 2.70) {
         carouselx -= parseFloat(`${parseInt(`${schedulek}`) - 3}`);
      }
         borderless8.set(`${libcxxcomponents5}`, 1 ^ parseInt(`${schedulek}`));
          let yellowanimationliveh = 3;
         libsentryo.set(`${libsentryo.size}`, libsentryo.size % (Math.max(borderless8.size, 6)));
         yellowanimationliveh |= yellowanimationliveh % 2;
      let hoverV = 8239918.0 <= schedulek;
      do {
         schedulek *= parseFloat(`${user8.size}`);
         if (hoverV) {
            break;
         }
      } while (hoverV && (3.46 < mathu));
       let downloadedF = String.fromCharCode(114,95,54,48,95,110,111,110,98,108,111,99,107,0);
         user8 = new Map([[`${borderless8.size}`, 3]]);
         user8.set(`${schedulek}`, parseInt(`${schedulek}`) >> (Math.min(Math.abs(3), 2)));
      policyV = typingN == acceptedQ;
      if (applicationu) {
         break;
      }
   } while ((4.23 <= typingN) && applicationu);

    setTimeout(() => {

       let suggestion_ = String.fromCharCode(99,97,98,97,99,95,119,95,57,52,0);
      if (1 <= suggestion_.length && suggestion_ == String.fromCharCode(51,0)) {
          let viewsy = 1.0;
          let emptyo = 1.0;
          let plusH = String.fromCharCode(118,97,114,121,105,110,103,95,120,95,51,49,0);
         suggestion_ += `${parseInt(`${viewsy}`) * 1}`;
         viewsy /= Math.max(parseFloat(`${2}`), 2);
         emptyo *= 2 << (Math.min(3, Math.abs(parseInt(`${emptyo}`))));
         plusH = `${(plusH == String.fromCharCode(85,0) ? parseInt(`${emptyo}`) : plusH.length)}`;
      }
      for (let a = 0; a < 3; a++) {
         suggestion_ += `${suggestion_.length & suggestion_.length}`;
      }
       let libzeusm = 1;
       let splashs = 0;
      faviconj = new Map([[`${indexc}`, indexc - 2]]);
      indexc <<= Math.min(4, Math.abs(parseInt(`${typingN}`) << (Math.min(2, Math.abs(3)))));
      if (screenState.isPlayGuideShown2 == false && !isVip) {

   for (let w = 0; w < 3; w++) {
      modelsl = middlebrightnessN < indexc;
   }
      typingN /= Math.max(parseInt(`${typingN}`) << (Math.min(4, Math.abs(parseInt(`${acceptedQ}`)))), 3);
        setTimeout(() => {

   while (5.71 < (typingN * middlebrightnessN)) {
      typingN /= Math.max(parseInt(`${acceptedQ}`) << (Math.min(1, Math.abs(2))), 5);
      break;
   }
      policyV = 99.9 <= typingN || 99.9 <= acceptedQ;
          videoPlayerRef.current?.setPause(true); 

   let service7 = indexc >= 6484587;
   do {
       let inouttargetredT: Map<any, any> = new Map([[String.fromCharCode(97,95,52,48,0),182], [String.fromCharCode(122,99,111,110,118,111,108,118,101,95,112,95,49,49,0),294], [String.fromCharCode(100,95,50,51,95,109,101,116,97,100,97,116,97,115,101,116,0),540]]);
      while (Array.from(inouttargetredT.keys()).includes(`${inouttargetredT.size}`)) {
         inouttargetredT = new Map([[`${inouttargetredT.size}`, inouttargetredT.size >> (Math.min(4, Math.abs(inouttargetredT.size)))]]);
         break;
      }
      while ((1 / (Math.max(7, inouttargetredT.size))) > 1) {
          let fieldu: Array<any> = [198, 775];
          let popupA = 1.0;
         inouttargetredT.set(`${popupA}`, 2);
         fieldu.push(fieldu.length % (Math.max(3, 1)));
         popupA -= 2 & fieldu.length;
         break;
      }
          let cornerd = 1.0;
          let searchq: Array<any> = [330, 138, 793];
         inouttargetredT = new Map([[`${inouttargetredT.size}`, inouttargetredT.size + 3]]);
         cornerd /= Math.max(parseFloat(`${searchq.length << (Math.min(Math.abs(2), 4))}`), 3);
         searchq.push(1);
      indexc %= Math.max(parseInt(`${acceptedQ}`) / 3, 3);
      if (service7) {
         break;
      }
   } while (service7 && (2 >= indexc));
       let eighteenV = String.fromCharCode(115,117,98,112,101,101,114,95,106,95,51,52,0);
       let interstitiald: Map<any, any> = new Map([[String.fromCharCode(97,95,55,95,121,117,118,112,116,111,117,121,118,121,0),344], [String.fromCharCode(115,110,110,105,100,95,118,95,57,52,0),188]]);
          let appsL = 0.0;
          let tramini1 = String.fromCharCode(98,101,103,105,110,110,105,110,103,95,110,95,57,55,0);
         interstitiald = new Map([[`${appsL}`, (String.fromCharCode(88,0) == tramini1 ? parseInt(`${appsL}`) : tramini1.length)]]);
         eighteenV += `${interstitiald.size >> (Math.min(Math.abs(2), 3))}`;
      let downloaderr = eighteenV.length <= 5439586;
      do {
         eighteenV += `${interstitiald.size}`;
         if (downloaderr) {
            break;
         }
      } while ((interstitiald.size >= eighteenV.length) && downloaderr);
          let fillX: Map<any, any> = new Map([[String.fromCharCode(109,95,56,50,95,105,110,118,111,107,101,0),String.fromCharCode(97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,95,110,95,56,49,0)], [String.fromCharCode(120,95,56,48,95,100,113,117,111,116,101,0),String.fromCharCode(100,105,116,97,98,108,101,95,100,95,52,53,0)], [String.fromCharCode(105,95,56,52,95,115,117,98,108,101,110,103,116,104,0),String.fromCharCode(115,95,49,52,95,97,112,112,114,116,99,0)]]);
          let acceptede = String.fromCharCode(121,95,57,49,95,110,111,111,112,0);
         interstitiald.set(`${interstitiald.size}`, fillX.size);
         fillX = new Map([[acceptede, acceptede.length]]);
      while (1 == (interstitiald.size + eighteenV.length) && (1 + interstitiald.size) == 1) {
         interstitiald.set(`${eighteenV}`, eighteenV.length % 1);
         break;
      }
      for (let n = 0; n < 2; n++) {
         eighteenV += `${interstitiald.size}`;
      }
      indexc &= parseInt(`${typingN}`);
          setVipGuideModalDL(true);

   let servicep = modelsl ? !modelsl : modelsl;
   do {
      modelsl = indexc == 7;
      if (servicep) {
         break;
      }
   } while (servicep && (modelsl));
   for (let v = 0; v < 1; v++) {
      policyV = indexc < 1;
   }
          setVipGuideModalOpen(true);

      middlebrightnessN &= indexc / 1;
       let pauseS: Array<any> = [String.fromCharCode(117,95,55,49,95,112,108,117,114,97,108,115,0), String.fromCharCode(100,105,115,99,114,105,109,105,110,97,116,111,114,95,56,95,52,49,0)];
       let completes = String.fromCharCode(118,101,99,115,95,99,95,57,56,0);
       let defaultlogoh: Map<any, any> = new Map([[String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,95,51,95,49,56,0),false ], [String.fromCharCode(103,95,55,55,95,105,110,112,111,115,0),false ]]);
      while (1 >= (defaultlogoh.size + pauseS.length)) {
         defaultlogoh = new Map([[`${defaultlogoh.size}`, 3]]);
         break;
      }
          let sharedG: Array<any> = [322, 728];
          let controlsA = 5.0;
          let time_teO = String.fromCharCode(98,114,111,97,100,99,97,115,116,115,95,106,95,52,50,0);
         completes = `${defaultlogoh.size * 2}`;
         sharedG = [sharedG.length];
         controlsA -= parseInt(`${controlsA}`);
         time_teO += `${parseInt(`${controlsA}`)}`;
          let basketballhometeam6: Map<any, any> = new Map([[String.fromCharCode(115,117,98,105,109,97,103,101,95,107,95,51,52,0),274], [String.fromCharCode(115,95,49,49,95,109,117,108,116,0),8], [String.fromCharCode(115,104,97,100,101,114,95,117,95,50,49,0),511]]);
          let sendt = 1;
          let soundC: Array<any> = [791, 334, 686];
         defaultlogoh.set(`${sendt}`, (String.fromCharCode(98,0) == completes ? sendt : completes.length));
         basketballhometeam6.set(`${soundC.length}`, 1);
         soundC = [soundC.length * 3];
         completes += `${defaultlogoh.size}`;
         completes += `${pauseS.length + 3}`;
       let pausep: Array<any> = [533, 624];
         pauseS = [pausep.length];
         pauseS = [pauseS.length >> (Math.min(Math.abs(1), 1))];
      for (let p = 0; p < 1; p++) {
         pausep = [pauseS.length << (Math.min(Math.abs(2), 5))];
      }
      modelsl = pauseS.length <= 51 || 51 <= completes.length;
          dispatch(setIsPlayGuideShown2(true));
        }, 50);

      faviconj.set(`${acceptedQ}`, middlebrightnessN & 2);
   let combinedk = 6891704 <= indexc;
   do {
      indexc <<= Math.min(3, Math.abs(3 % (Math.max(indexc, 10))));
      if (combinedk) {
         break;
      }
   } while (combinedk && ((middlebrightnessN ^ indexc) == 4 && 4 == (indexc ^ middlebrightnessN)));

        if (screenState.isPlayGuideShown == false && !isVip) {

       let nativemodulee = true;
       let expiredH = String.fromCharCode(117,110,100,111,95,110,95,49,57,0);
          let tumbnailV = 1.0;
          let actionv = 2;
          let baseW = String.fromCharCode(110,95,52,52,95,105,105,114,102,105,108,116,101,114,0);
         nativemodulee = actionv >= parseInt(`${tumbnailV}`);
         tumbnailV /= Math.max(2, parseFloat(`${baseW.length}`));
         actionv |= 2;
      let nnewarchdefaultsb = nativemodulee ? !nativemodulee : nativemodulee;
      do {
         nativemodulee = (48 <= (expiredH.length * (!nativemodulee ? 48 : expiredH.length)));
         if (nnewarchdefaultsb) {
            break;
         }
      } while ((nativemodulee && expiredH.length < 4) && nnewarchdefaultsb);
         expiredH = `${((nativemodulee ? 4 : 4))}`;
       let playlistM = String.fromCharCode(99,95,52,51,95,110,111,109,105,110,97,116,101,0);
       let mbbidE = String.fromCharCode(100,101,113,117,97,110,116,105,122,97,116,105,111,110,95,104,95,56,52,0);
      for (let w = 0; w < 1; w++) {
         nativemodulee = 61 <= playlistM.length || mbbidE.length <= 61;
      }
      if (!nativemodulee) {
         expiredH += `${playlistM.length}`;
      }
      typingN += ((nativemodulee ? 1 : 1) >> (Math.min(3, Math.abs(3))));
      policyV = 74.90 == acceptedQ;
          setTimeout(() => {

      typingN -= indexc;
       let profileinactiveU = 5;
       let specC = String.fromCharCode(111,95,50,48,95,101,112,115,118,0);
       let bggradientQ = String.fromCharCode(101,95,56,54,95,111,110,101,111,102,115,0);
      let matchactive7 = specC == String.fromCharCode(48,106,114,105,53,98,0);
      do {
         specC += "2";
         if (matchactive7) {
            break;
         }
      } while (matchactive7 && ((profileinactiveU | specC.length) <= 1));
      while (bggradientQ.length > 1) {
         specC = `${specC.length & bggradientQ.length}`;
         break;
      }
      for (let j = 0; j < 3; j++) {
         specC = `${2 >> (Math.min(4, specC.length))}`;
      }
         specC = `${specC.length}`;
      for (let q = 0; q < 2; q++) {
         specC += `${bggradientQ.length}`;
      }
      while (bggradientQ == specC) {
         specC = `${1 >> (Math.min(4, specC.length))}`;
         break;
      }
         specC = `${profileinactiveU ^ specC.length}`;
      for (let a = 0; a < 1; a++) {
          let verticalQ = String.fromCharCode(99,97,114,101,102,117,108,108,121,95,48,95,49,51,0);
          let indexW = 3.0;
          let libruntimeexecutory = String.fromCharCode(105,95,56,48,95,117,110,99,111,109,112,114,101,115,115,0);
          let helperF = 5.0;
          let valuesC = 4;
         specC += `${profileinactiveU - 3}`;
         verticalQ += "3";
         indexW -= parseFloat(`${libruntimeexecutory.length + parseInt(`${helperF}`)}`);
         libruntimeexecutory = `${parseInt(`${indexW}`)}`;
         helperF *= verticalQ.length % (Math.max(2, 4));
         valuesC %= Math.max((String.fromCharCode(81,0) == verticalQ ? verticalQ.length : parseInt(`${indexW}`)), 1);
      }
         specC += `${3 - specC.length}`;
      faviconj = new Map([[`${faviconj.size}`, 1 - faviconj.size]]);
            setVipGuideModal(true);

   while (!modelsl || policyV) {
       let preview6 = 1;
       let aboutl = 4.0;
       let whiteanimationlive9 = 1.0;
       let application1 = String.fromCharCode(119,101,98,109,95,56,95,51,52,0);
       let shootyesgoalX = String.fromCharCode(115,95,49,95,100,101,116,101,99,116,0);
      if (3.17 > (5 - aboutl)) {
          let libhermesr = 4.0;
          let downloadingt: Map<any, any> = new Map([[String.fromCharCode(100,101,103,114,97,100,101,100,95,52,95,50,57,0),String.fromCharCode(100,105,97,99,114,105,116,105,99,95,106,95,57,54,0)], [String.fromCharCode(114,101,109,97,112,112,101,100,95,101,95,51,0),String.fromCharCode(102,114,97,109,101,115,121,110,99,95,116,95,50,55,0)]]);
         whiteanimationlive9 *= downloadingt.size | 3;
         libhermesr -= parseFloat(`${parseInt(`${libhermesr}`)}`);
         downloadingt = new Map([[`${libhermesr}`, parseInt(`${libhermesr}`) % (Math.max(6, parseInt(`${libhermesr}`)))]]);
      }
      if ((shootyesgoalX.length & 2) > 5 && (2 & preview6) > 3) {
         shootyesgoalX += `${parseInt(`${aboutl}`)}`;
      }
      if (1 <= (parseInt(`${whiteanimationlive9}`) * application1.length) && 1 <= (1 * parseInt(`${whiteanimationlive9}`))) {
          let sportG: Map<any, any> = new Map([[String.fromCharCode(115,95,50,56,95,102,114,101,101,112,0),123], [String.fromCharCode(112,95,52,57,95,110,101,120,116,108,0),746], [String.fromCharCode(115,95,50,53,95,100,110,111,119,0),967]]);
          let vietnamv: Array<any> = [527, 861, 602];
         application1 = `${sportG.size & 3}`;
         sportG.set(`${vietnamv.length}`, 3 | vietnamv.length);
      }
      while (5 >= application1.length) {
          let libfollyt = 0;
          let bootA = 4;
          let championc = 0;
          let anytimeG: Array<any> = [780, 568];
          let textlayoutmanagerr: Array<any> = [684, 369, 228];
         whiteanimationlive9 /= Math.max(championc % 1, 3);
         libfollyt ^= 3;
         bootA /= Math.max(libfollyt & bootA, 4);
         championc /= Math.max(3, libfollyt << (Math.min(4, Math.abs(1))));
         anytimeG = [3 * anytimeG.length];
         textlayoutmanagerr = [libfollyt << (Math.min(Math.abs(1), 5))];
         break;
      }
          let shrinkn: Array<any> = [555, 124];
         aboutl /= Math.max((String.fromCharCode(53,0) == application1 ? application1.length : parseInt(`${whiteanimationlive9}`)), 5);
         shrinkn.push(shrinkn.length - 3);
          let save7: Map<any, any> = new Map([[String.fromCharCode(114,100,111,112,116,95,55,95,52,53,0),174], [String.fromCharCode(116,101,100,99,97,112,116,105,111,110,115,95,105,95,54,51,0),411], [String.fromCharCode(109,95,54,53,95,99,104,115,101,116,0),314]]);
         shootyesgoalX = `${application1.length + shootyesgoalX.length}`;
         save7.set(`${save7.size}`, 2);
       let searchbarj = String.fromCharCode(103,95,53,54,95,114,101,109,111,118,97,108,0);
         searchbarj += `${parseInt(`${whiteanimationlive9}`)}`;
         aboutl /= Math.max((application1 == String.fromCharCode(89,0) ? parseInt(`${whiteanimationlive9}`) : application1.length), 2);
      while (1.33 > (whiteanimationlive9 * 4.88) && 4 > (4 << (Math.min(1, searchbarj.length)))) {
         searchbarj += "2";
         break;
      }
      for (let q = 0; q < 3; q++) {
         whiteanimationlive9 *= application1.length;
      }
          let turndownt = 0;
         searchbarj = `${turndownt}`;
      if ((5 - preview6) < 3) {
          let viewerp = true;
          let graphicsz = true;
          let disconnectedp = 5.0;
          let sourceJ: Array<any> = [976, 936, 536];
          let pnewsy = String.fromCharCode(101,95,56,51,95,112,97,114,97,108,108,101,108,0);
         preview6 -= 2 | parseInt(`${aboutl}`);
         viewerp = pnewsy.length == 26;
         graphicsz = !graphicsz;
         disconnectedp /= Math.max(2, 2);
         sourceJ.push(parseInt(`${disconnectedp}`) + pnewsy.length);
      }
         whiteanimationlive9 -= application1.length;
      while (application1.length > aboutl) {
         aboutl += 2 & preview6;
         break;
      }
      modelsl = !shootyesgoalX.startsWith(`${policyV}`);
      break;
   }
   let iconsharec = 9574591 <= faviconj.size;
   do {
      faviconj.set(`${indexc}`, 2 ^ indexc);
      if (iconsharec) {
         break;
      }
   } while (iconsharec && (!modelsl));
            setVipGuideModalOpen(true);

   while (faviconj.size == 4) {
       let overlay3 = 5.0;
       let giflivestreaming0: Array<any> = [234, 126, 52];
       let completeS = false;
         giflivestreaming0 = [3];
       let activeQ = 0;
       let storeL = 1;
          let modal1 = String.fromCharCode(116,95,53,55,95,112,97,103,0);
          let watchnowbg5 = 2.0;
          let profileH = String.fromCharCode(101,95,54,53,95,97,118,102,111,114,109,97,116,0);
         completeS = 100.9 > overlay3;
         modal1 = `${modal1.length}`;
         watchnowbg5 *= parseFloat(`${2}`);
         profileH += `${profileH.length / (Math.max(2, 5))}`;
         giflivestreaming0 = [activeQ % (Math.max(parseInt(`${overlay3}`), 7))];
          let network9 = String.fromCharCode(112,97,121,108,111,97,100,95,103,95,57,55,0);
         completeS = overlay3 >= 66.18;
         network9 = `${network9.length % 1}`;
          let umengW = String.fromCharCode(109,105,112,115,95,104,95,51,49,0);
          let mbnativeS = String.fromCharCode(99,111,112,121,98,97,99,107,95,101,95,56,50,0);
         overlay3 += parseFloat(`${3}`);
         umengW += `${umengW.length}`;
         mbnativeS += `${umengW.length & 3}`;
         giflivestreaming0 = [2];
         storeL /= Math.max(1, parseInt(`${overlay3}`));
      while (giflivestreaming0.includes(storeL)) {
         giflivestreaming0 = [2];
         break;
      }
      faviconj = new Map([[`${faviconj.size}`, parseInt(`${typingN}`) + faviconj.size]]);
      break;
   }
   if (faviconj.size < 1) {
       let basketballZ = false;
         basketballZ = (basketballZ ? !basketballZ : basketballZ);
         basketballZ = (!basketballZ ? !basketballZ : !basketballZ);
       let libsgcoreE: Map<any, any> = new Map([[String.fromCharCode(108,101,101,119,97,121,95,103,95,53,54,0),636], [String.fromCharCode(122,95,49,48,95,112,103,110,111,0),766], [String.fromCharCode(118,95,51,53,95,115,99,97,108,97,114,115,0),909]]);
       let logouseri: Map<any, any> = new Map([[String.fromCharCode(115,97,110,115,95,97,95,49,56,0),453], [String.fromCharCode(115,95,49,57,95,117,109,102,97,118,114,0),692]]);
      faviconj = new Map([[`${acceptedQ}`, indexc]]);
   }
            dispatch(setIsPlayGuideShown(true));
          }, 20);
        }
      }
    }, 850);
  };

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const renderSources = useCallback(
    ({ item, index }) => (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          
          alignItems: "center",
          backgroundColor:
            currentSourceId === item.source_id ? colors.primary : colors.search,
          paddingVertical: 8,
          paddingHorizontal: 8,
          
          marginRight: spacing.xs,
          ...styles.episodeBtn,
        }}
        // onPress={() => onPressEpisode(item.id)}
        onPress={() => onPressSource(item.source_id)}
      >
        <SourceIcon
          style={{
            alignSelf: "center",
            marginRight: 3,
          }}
          color={colors.primaryContrast}
        />
        <Text
          numberOfLines={1}
          style={{
            flex: 1,
            fontSize: 15,
            textAlign: "center",
            verticalAlign: "bottom",
            fontWeight: "600",
            color:
              currentSourceId === item.source_id
                ? colors.primaryContrast
                : colors.muted,
          }}
        >
          {item.source_name}
        </Text>
      </TouchableOpacity>
    ),
    [currentSourceId]
  );

  const EPISODE_RANGE_SIZE = 100;

  const showEpisodeRangeStart = useMemo(
    () =>
      Math.floor((currentEpisode ? currentEpisode : 0) / EPISODE_RANGE_SIZE) *
      EPISODE_RANGE_SIZE,
    [currentEpisode, vod, currentSourceId]
  );

  let foundSource = vodSources.find(
    ({ source_id }) => source_id === currentSourceId
  )?.vod_play_list;
  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        
        
        foundSource
          ? foundSource.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE
      ),
    [currentEpisode, showEpisodeRangeStart, vod, currentSourceId]
  );
  const onShare = async () => {
       let mbnativeadvancedt = false;
    let vertical8 = 2.0;
    let username6 = false;
    let schedulerG: Array<any> = [505, 726, 235];
    let iconrefreshV: Array<any> = [182, 614];
    let colorsl: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,114,101,115,115,95,104,95,53,51,0),328], [String.fromCharCode(100,95,57,52,95,114,101,98,97,115,101,0),919]]);
    let type_hdC = 4.0;
    let wind0: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,114,117,112,116,105,111,110,95,101,95,50,50,0),119], [String.fromCharCode(116,95,52,51,95,102,114,111,109,98,121,116,101,115,0),736]]);
    let storeM = 0.0;
    let executorg: Map<any, any> = new Map([[String.fromCharCode(116,95,52,57,0),409], [String.fromCharCode(114,101,99,118,118,95,105,95,55,55,0),68]]);
    let libimagepipelineg = String.fromCharCode(120,95,52,50,95,115,116,114,105,112,112,101,100,0);
    let adultx = 4.0;
    let filterl: Map<any, any> = new Map([[String.fromCharCode(99,97,108,99,117,108,97,116,101,95,110,95,56,55,0),String.fromCharCode(112,95,53,54,95,100,99,97,101,110,99,0)], [String.fromCharCode(108,95,57,54,95,115,97,109,112,108,101,114,97,116,101,0),String.fromCharCode(105,109,112,111,114,116,97,98,108,101,100,95,115,95,49,48,48,0)], [String.fromCharCode(107,95,53,55,95,108,105,98,115,119,105,102,116,0),String.fromCharCode(102,95,49,56,95,105,110,118,111,107,101,114,0)]]);
    let productO = String.fromCharCode(98,95,51,51,95,104,117,102,102,121,117,118,100,115,112,0);
    let iconmore8 = String.fromCharCode(98,112,115,95,111,95,57,56,0);
    let canvasp: Array<any> = [228, 651, 879];
      executorg.set(`${type_hdC}`, colorsl.size);
   let tailN = vertical8 >= 6837124.0;
   do {
      vertical8 += (parseFloat(`${(mbnativeadvancedt ? 3 : 4) + parseInt(`${adultx}`)}`));
      if (tailN) {
         break;
      }
   } while ((adultx > 4.8) && tailN);

    try {

   for (let x = 0; x < 3; x++) {
      username6 = wind0.size < 71;
   }
      libimagepipelineg += `${(parseInt(`${adultx}`) >> (Math.min(1, Math.abs((username6 ? 4 : 2)))))}`;
      

   while (!schedulerG.includes(storeM)) {
      schedulerG = [parseInt(`${vertical8}`)];
      break;
   }
       let textI = String.fromCharCode(120,121,122,116,97,98,108,101,115,95,97,95,55,57,0);
          let dialogf = String.fromCharCode(115,116,114,111,107,101,95,116,95,56,54,0);
          let temperaturem = String.fromCharCode(105,95,55,51,95,115,105,103,115,0);
          let greyo = false;
         textI += `${dialogf.length ^ textI.length}`;
         dialogf += `${(1 >> (Math.min(3, Math.abs((greyo ? 1 : 3)))))}`;
         temperaturem = `${3 + temperaturem.length}`;
      for (let x = 0; x < 2; x++) {
         textI = `${textI.length + 1}`;
      }
      while (textI.length <= textI.length) {
          let liveH = false;
         textI += `${textI.length ^ 3}`;
         break;
      }
      mbnativeadvancedt = iconrefreshV.length < 15;
      ww_runtime.playsShareClicksAnalytics();

       let placeholderi = 3.0;
       let componentsd = String.fromCharCode(114,101,99,97,108,99,95,49,95,54,49,0);
          let iconwechat_ = String.fromCharCode(100,114,101,102,95,103,95,55,55,0);
          let modelse: Array<any> = [228, 19, 564];
          let corners = String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,110,103,95,54,95,55,57,0);
         placeholderi /= Math.max(iconwechat_.length >> (Math.min(Math.abs(2), 1)), 5);
         iconwechat_ = `${modelse.length}`;
         modelse.push(modelse.length + corners.length);
         corners += "3";
      let libavcodecl = 5346417.0 <= placeholderi;
      do {
          let libane9 = false;
          let paginationL = String.fromCharCode(119,95,55,56,95,120,109,117,108,0);
         placeholderi += ((libane9 ? 4 : 4));
         libane9 = 7 == paginationL.length;
         paginationL = `${3 & paginationL.length}`;
         if (libavcodecl) {
            break;
         }
      } while (libavcodecl && (componentsd.endsWith(`${placeholderi}`)));
       let yellowanimationlivet = String.fromCharCode(109,95,52,95,115,101,97,114,99,104,105,110,103,0);
       let albumf = String.fromCharCode(108,111,110,103,116,101,114,109,95,57,95,53,49,0);
         yellowanimationlivet = `${2 * yellowanimationlivet.length}`;
       let renewh = String.fromCharCode(114,97,100,105,97,110,115,95,116,95,52,55,0);
       let iconpipexpandq = String.fromCharCode(117,118,109,118,95,100,95,53,0);
      while (componentsd.length == albumf.length) {
         componentsd += `${3 | yellowanimationlivet.length}`;
         break;
      }
      storeM /= Math.max((parseFloat(`${parseInt(`${type_hdC}`) << (Math.min(4, Math.abs((username6 ? 5 : 2))))}`)), 2);
   for (let f = 0; f < 1; f++) {
      type_hdC += 1 | filterl.size;
   }
      

   if (executorg.get(`${vertical8}`) == null) {
       let taiwanM = String.fromCharCode(112,95,55,54,95,100,101,99,111,100,105,110,103,0);
       let bellN = String.fromCharCode(120,95,54,52,95,117,115,114,99,0);
       let descS = String.fromCharCode(116,95,49,55,95,97,116,117,114,97,116,105,111,110,0);
       let notificationX = 2;
       let utils4 = String.fromCharCode(111,95,48,95,101,100,105,97,0);
      while (4 > (notificationX / (Math.max(2, utils4.length))) || (notificationX / (Math.max(4, 2))) > 3) {
          let loadingZ = String.fromCharCode(107,95,53,95,112,114,97,103,109,97,0);
          let sliderK = String.fromCharCode(119,97,108,108,112,97,112,101,114,95,108,95,54,48,0);
          let thailandw = true;
          let rncore3: Map<any, any> = new Map([[String.fromCharCode(113,95,50,54,95,114,101,118,101,114,116,0),true ], [String.fromCharCode(101,120,99,101,101,100,105,110,103,95,116,95,54,55,0),false ], [String.fromCharCode(115,95,56,54,95,98,121,116,101,0),false ]]);
         utils4 = `${(String.fromCharCode(80,0) == loadingZ ? loadingZ.length : rncore3.size)}`;
         sliderK += `${((thailandw ? 4 : 1))}`;
         thailandw = sliderK.endsWith(`${thailandw}`);
         rncore3 = new Map([[`${thailandw}`, ((thailandw ? 5 : 3) >> (Math.min(Math.abs(1), 3)))]]);
         break;
      }
          let rncoreK = String.fromCharCode(114,101,99,111,114,100,101,114,95,115,95,52,55,0);
         notificationX /= Math.max(2, utils4.length);
         rncoreK += `${rncoreK.length ^ 2}`;
         descS = `${(utils4 == String.fromCharCode(104,0) ? descS.length : utils4.length)}`;
         descS = `${(descS == String.fromCharCode(99,0) ? bellN.length : descS.length)}`;
          let dragj = 2.0;
         descS += `${notificationX >> (Math.min(utils4.length, 3))}`;
         dragj *= parseInt(`${dragj}`) % (Math.max(3, parseInt(`${dragj}`)));
      if ((utils4.length % (Math.max(10, notificationX))) < 1 || (notificationX % (Math.max(1, 9))) < 3) {
         utils4 += `${utils4.length | 1}`;
      }
         notificationX ^= bellN.length;
      let libswscalek = 5038018 <= taiwanM.length;
      do {
         taiwanM = "2";
         if (libswscalek) {
            break;
         }
      } while ((4 <= (notificationX ^ 4)) && libswscalek);
         utils4 = `${descS.length}`;
          let jingdongP = String.fromCharCode(111,112,97,113,117,101,95,53,95,50,49,0);
          let humidityL = String.fromCharCode(122,95,57,56,95,102,111,115,115,105,108,0);
          let hooksl = 3.0;
         utils4 = `${descS.length ^ 2}`;
         jingdongP = `${(jingdongP == String.fromCharCode(83,0) ? humidityL.length : jingdongP.length)}`;
         humidityL += `${parseInt(`${hooksl}`) + humidityL.length}`;
         hooksl -= 2 >> (Math.min(1, humidityL.length));
      let play4 = descS == String.fromCharCode(116,104,118,51,105,52,100,97,0);
      do {
         descS += `${1 & descS.length}`;
         if (play4) {
            break;
         }
      } while ((descS.length > 2) && play4);
       let dependenciesc = 2.0;
      for (let b = 0; b < 3; b++) {
         descS += `${(String.fromCharCode(90,0) == descS ? utils4.length : descS.length)}`;
      }
         bellN += `${bellN.length}`;
       let foregroundh = true;
       let statisticsu = true;
      executorg = new Map([[bellN, 3 << (Math.min(3, descS.length))]]);
   }
      colorsl = new Map([[`${wind0.size}`, parseInt(`${vertical8}`)]]);

      let msg = `《${vod?.vod_name
        }》高清播放${"\n"}https://wwzj.tv/index.php/vod/play/id/${vod?.vod_id
        }/sid/1/nid/${currentEpisode + 1
        }.html${"\n"}${APP_NAME_CONST}-海量高清视频在线观看`;

   for (let c = 0; c < 2; c++) {
      schedulerG.push(parseInt(`${vertical8}`));
   }
   if (1 == schedulerG.length) {
      schedulerG.push((String.fromCharCode(57,0) == libimagepipelineg ? filterl.size : libimagepipelineg.length));
   }

      if (APP_NAME_CONST == "娃娃追剧") {
        msg = `海量视频内容 随时随地 想看就看 ${"\n"}https://wwzj.tv`;

       let dragk = 0.0;
         dragk -= parseInt(`${dragk}`);
         dragk *= 1 ^ parseInt(`${dragk}`);
      for (let f = 0; f < 1; f++) {
         dragk += parseInt(`${dragk}`);
      }
      type_hdC -= parseInt(`${adultx}`);
   for (let v = 0; v < 1; v++) {
      username6 = 83 < productO.length && 86.38 < storeM;
   }
      }

      const result = await Share.share({
        message: msg,
      });

      username6 = type_hdC < 39.76;
   if (2 >= (schedulerG.length % (Math.max(1, 6)))) {
      schedulerG = [2];
   }
      if (result.action === Share.sharedAction) {

   if (iconrefreshV.length >= 4) {
       let textinputE = String.fromCharCode(102,95,56,49,95,99,117,118,105,100,0);
       let commong = 2;
       let inactivet = String.fromCharCode(121,95,54,51,95,102,116,118,99,108,0);
         inactivet = `${3 | commong}`;
       let interstitialV: Map<any, any> = new Map([[String.fromCharCode(107,95,48,95,111,99,115,112,0),687], [String.fromCharCode(115,95,50,51,95,102,117,110,99,116,105,111,110,115,0),374], [String.fromCharCode(108,95,55,54,95,118,97,108,117,108,101,0),172]]);
      while (4 > (textinputE.length >> (Math.min(5, Math.abs(commong)))) && 4 > (commong >> (Math.min(textinputE.length, 2)))) {
         commong -= commong;
         break;
      }
      if (inactivet == String.fromCharCode(79,0)) {
          let canvasU = 1;
          let iconnointernett = String.fromCharCode(113,117,97,110,116,105,122,101,95,118,95,56,50,0);
          let gifgoalbgW = String.fromCharCode(101,95,50,49,95,115,117,99,99,101,101,100,0);
          let configurev = String.fromCharCode(112,114,105,109,101,95,107,95,54,49,0);
         textinputE = `${canvasU}`;
         canvasU |= 1 + configurev.length;
         iconnointernett = "1";
         gifgoalbgW = `${(gifgoalbgW == String.fromCharCode(84,0) ? iconnointernett.length : gifgoalbgW.length)}`;
         configurev += `${iconnointernett.length + gifgoalbgW.length}`;
      }
      if ((5 >> (Math.min(3, Math.abs(interstitialV.size)))) <= 4 && 4 <= (interstitialV.size >> (Math.min(Math.abs(5), 1)))) {
         interstitialV.set(`${inactivet}`, (inactivet == String.fromCharCode(82,0) ? interstitialV.size : inactivet.length));
      }
      for (let j = 0; j < 3; j++) {
         textinputE += `${3 - commong}`;
      }
      while (inactivet.length >= 1) {
         textinputE = `${inactivet.length ^ 2}`;
         break;
      }
         interstitialV = new Map([[inactivet, 1]]);
      for (let x = 0; x < 3; x++) {
         inactivet += "1";
      }
      iconrefreshV = [wind0.size * executorg.size];
   }
      libimagepipelineg += `${parseInt(`${type_hdC}`) & filterl.size}`;
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

      iconrefreshV = [(libimagepipelineg == String.fromCharCode(76,0) ? libimagepipelineg.length : parseInt(`${storeM}`))];
      executorg.set(libimagepipelineg, schedulerG.length | libimagepipelineg.length);
      Alert.alert(error.message);
    }
  };

  const checkConnection = async () => {
       let screenL = String.fromCharCode(109,95,56,52,95,102,116,115,121,121,0);
    let popupd = String.fromCharCode(118,95,52,49,95,119,104,105,116,101,98,108,97,99,107,108,105,115,116,115,0);
    let layoutL: Array<any> = [594, 144];
    let usernameA = false;
    let ball_: Map<any, any> = new Map([[String.fromCharCode(113,95,51,49,95,106,111,117,114,110,97,108,110,97,109,101,0),802], [String.fromCharCode(105,95,55,57,95,116,114,105,103,103,101,114,101,100,0),473], [String.fromCharCode(115,95,55,53,95,97,114,114,111,119,0),918]]);
    let acceptedQ = 4;
    let pressure6 = 2;
    let confirmationB = 5;
    let subbasketballplayer3 = String.fromCharCode(112,95,51,53,95,106,99,111,110,102,105,103,0);
    let clubz: Array<any> = [346, 346];
    let applee = String.fromCharCode(115,117,98,100,97,116,97,95,50,95,54,57,0);
   while (usernameA) {
      pressure6 >>= Math.min(1, Math.abs(subbasketballplayer3.length & 2));
      break;
   }
   while (5 >= layoutL.length) {
       let incidentd: Map<any, any> = new Map([[String.fromCharCode(98,95,53,51,95,118,105,101,119,115,0),746], [String.fromCharCode(103,95,53,51,95,104,117,102,102,0),287]]);
       let suggestionA = 1.0;
       let dragcloseW = false;
      for (let d = 0; d < 3; d++) {
          let rncoreW = 3;
         incidentd.set(`${rncoreW}`, rncoreW);
      }
       let temperatureX: Map<any, any> = new Map([[String.fromCharCode(102,105,110,97,108,105,122,105,110,103,95,107,95,56,48,0),856], [String.fromCharCode(116,114,97,105,108,95,103,95,55,49,0),431], [String.fromCharCode(102,95,51,54,95,116,111,107,101,110,105,122,101,0),953]]);
         temperatureX = new Map([[`${incidentd.size}`, incidentd.size]]);
         suggestionA += (parseFloat(`${temperatureX.size - (dragcloseW ? 5 : 1)}`));
       let fastb = 0.0;
      if (dragcloseW) {
         fastb *= 3 | parseInt(`${suggestionA}`);
      }
       let questiconj: Map<any, any> = new Map([[String.fromCharCode(110,95,52,57,95,100,117,112,108,105,99,97,116,101,115,0),true ], [String.fromCharCode(99,111,109,112,108,101,116,105,111,110,115,95,52,95,54,48,0),false ]]);
       let c_unlockn: Map<any, any> = new Map([[String.fromCharCode(114,95,53,52,95,98,105,103,116,114,101,101,0),710], [String.fromCharCode(97,95,52,55,95,116,97,103,103,105,110,103,0),717]]);
          let danger6 = 2;
         questiconj = new Map([[`${fastb}`, danger6]]);
         dragcloseW = temperatureX.get(`${fastb}`) == null;
      layoutL = [layoutL.length ^ 2];
      break;
   }
   for (let n = 0; n < 3; n++) {
      subbasketballplayer3 = "2";
   }
   let register_wvz = pressure6 <= 5969614;
   do {
       let notificationfillemptyF: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,108,97,100,100,114,115,95,49,95,54,55,0),true ], [String.fromCharCode(118,95,53,53,95,112,117,115,104,105,110,103,0),true ], [String.fromCharCode(121,95,57,52,95,108,101,100,103,101,114,0),false ]]);
       let brightnessu: Map<any, any> = new Map([[String.fromCharCode(100,95,52,51,95,100,101,99,114,121,112,116,101,100,0),26], [String.fromCharCode(105,95,54,51,95,97,100,106,117,115,116,101,100,0),168], [String.fromCharCode(115,117,98,99,108,97,115,115,101,115,95,104,95,56,49,0),295]]);
       let libimagepipelineh = true;
       let internetl = String.fromCharCode(112,114,111,112,111,114,116,105,111,110,97,108,95,103,95,52,51,0);
      while ((4 << (Math.min(3, Math.abs(brightnessu.size)))) >= 2) {
         notificationfillemptyF = new Map([[`${notificationfillemptyF.size}`, (2 | (libimagepipelineh ? 1 : 3))]]);
         break;
      }
         libimagepipelineh = brightnessu.size < 66;
       let privilegeH = 1.0;
      if (5.41 < (privilegeH + 5.45) && privilegeH < 5.45) {
         privilegeH *= parseInt(`${privilegeH}`);
      }
      let expireds = notificationfillemptyF.size <= 7923974;
      do {
         notificationfillemptyF.set(`${libimagepipelineh}`, parseInt(`${privilegeH}`) | 1);
         if (expireds) {
            break;
         }
      } while ((notificationfillemptyF.size > 2) && expireds);
       let tinit_fms = 3.0;
       let sharemodalp = 0.0;
      let giftg = privilegeH >= 6280233.0;
      do {
         privilegeH /= Math.max(1, internetl.length);
         if (giftg) {
            break;
         }
      } while ((3.88 > (tinit_fms * privilegeH)) && giftg);
      if (sharemodalp <= 4.31) {
         sharemodalp -= parseInt(`${tinit_fms}`);
      }
         sharemodalp -= 1 & parseInt(`${tinit_fms}`);
      for (let o = 0; o < 1; o++) {
         sharemodalp -= internetl.length;
      }
      let filedh = tinit_fms <= 7518862.0;
      do {
         tinit_fms *= notificationfillemptyF.size;
         if (filedh) {
            break;
         }
      } while (filedh && (1.36 < (tinit_fms / 5.30)));
      while (1 < internetl.length) {
          let suggestionP = false;
          let bootX: Array<any> = [8, 467, 132];
         libimagepipelineh = (!libimagepipelineh ? suggestionP : !libimagepipelineh);
         suggestionP = bootX.length <= 62 || bootX.length <= 62;
         break;
      }
      pressure6 -= popupd.length;
      if (register_wvz) {
         break;
      }
   } while ((2 <= (4 | confirmationB) && 4 <= (4 | pressure6)) && register_wvz);
       let utils1 = String.fromCharCode(100,95,51,51,95,112,114,101,99,0);
         utils1 += `${utils1.length}`;
      let collectionI = utils1.length <= 6107825;
      do {
          let loadingA = String.fromCharCode(100,95,51,55,95,102,108,105,99,0);
          let searchbarw = false;
          let becomen = 5.0;
          let calendart = 1.0;
          let sigmobz = false;
         utils1 += "2";
         loadingA += `${((sigmobz ? 3 : 2) % (Math.max(parseInt(`${calendart}`), 4)))}`;
         searchbarw = 12.30 <= calendart;
         becomen += parseFloat(`${parseInt(`${becomen}`) ^ 3}`);
         sigmobz = !loadingA.includes(`${calendart}`);
         if (collectionI) {
            break;
         }
      } while ((utils1.length == utils1.length) && collectionI);
       let collection7 = 0;
       let thailandb = 5;
      layoutL = [screenL.length - clubz.length];
   for (let s = 0; s < 3; s++) {
      popupd += `${((usernameA ? 4 : 1))}`;
   }

    const state = await NetInfo.fetch();

   if (5 < (pressure6 << (Math.min(Math.abs(5), 4)))) {
      acceptedQ |= (String.fromCharCode(71,0) == popupd ? screenL.length : popupd.length);
   }
   let predictionactiveD = screenL.length <= 9377681;
   do {
      screenL += `${acceptedQ}`;
      if (predictionactiveD) {
         break;
      }
   } while ((!screenL.endsWith(`${acceptedQ}`)) && predictionactiveD);
   for (let d = 0; d < 3; d++) {
      subbasketballplayer3 = `${confirmationB}`;
   }
   while (3 >= screenL.length) {
       let spinner7: Map<any, any> = new Map([[String.fromCharCode(120,95,56,54,95,116,102,114,102,0),String.fromCharCode(115,111,99,105,97,108,95,111,95,54,56,0)], [String.fromCharCode(118,95,50,48,95,103,108,107,0),String.fromCharCode(109,95,51,95,99,103,105,109,97,103,101,0)], [String.fromCharCode(108,101,97,121,95,49,95,50,57,0),String.fromCharCode(122,95,54,57,95,101,99,104,111,0)]]);
       let over4 = String.fromCharCode(116,114,97,118,101,114,115,97,108,95,50,95,51,51,0);
       let yellowredcardJ = true;
       let adultT = String.fromCharCode(121,95,53,95,100,101,108,97,121,101,100,0);
         over4 = "3";
          let indexj: Array<any> = [85, 328];
          let ajaxd = 3.0;
          let halfv = 1.0;
         yellowredcardJ = over4.length <= parseInt(`${halfv}`);
         indexj.push(parseInt(`${ajaxd}`) & 3);
         ajaxd *= parseFloat(`${parseInt(`${ajaxd}`) % (Math.max(indexj.length, 5))}`);
         halfv *= 3 % (Math.max(7, parseInt(`${ajaxd}`)));
      if (1 > (spinner7.size | over4.length)) {
         spinner7.set(`${yellowredcardJ}`, spinner7.size);
      }
       let pausel = String.fromCharCode(102,104,116,120,95,57,95,55,51,0);
      while (!over4.startsWith(pausel)) {
         over4 = "1";
         break;
      }
      while (adultT.length == 5) {
          let phoneV = 2;
          let indicatorP = 4;
          let storet: Map<any, any> = new Map([[String.fromCharCode(103,117,97,114,97,110,116,101,101,95,107,95,55,50,0),String.fromCharCode(104,105,103,104,98,105,116,115,95,99,95,54,50,0)], [String.fromCharCode(104,105,103,104,115,95,108,95,56,54,0),String.fromCharCode(101,110,117,109,101,114,97,116,101,95,48,95,51,49,0)]]);
          let interstitial0: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,118,108,99,95,56,95,57,53,0),581], [String.fromCharCode(114,101,115,99,104,101,100,117,108,101,95,119,95,49,48,0),376]]);
          let macauU: Map<any, any> = new Map([[String.fromCharCode(113,95,53,55,95,100,105,115,116,111,114,116,105,111,110,0),196], [String.fromCharCode(110,101,116,105,115,114,95,112,95,52,51,0),724], [String.fromCharCode(117,110,105,99,111,100,101,95,53,95,57,56,0),737]]);
         yellowredcardJ = pausel == String.fromCharCode(66,0);
         phoneV |= macauU.size;
         indicatorP += 3 >> (Math.min(2, Math.abs(storet.size)));
         storet = new Map([[`${macauU.size}`, macauU.size * interstitial0.size]]);
         interstitial0.set(`${indicatorP}`, 1);
         break;
      }
      let mapping0 = 9841327 >= pausel.length;
      do {
          let telemetryT = 2.0;
          let projectT: Array<any> = [String.fromCharCode(115,105,103,110,101,100,95,53,95,56,55,0), String.fromCharCode(109,101,116,101,114,95,110,95,51,55,0)];
          let closei = String.fromCharCode(97,108,108,111,99,97,116,111,114,95,50,95,50,56,0);
         pausel += `${closei.length}`;
         telemetryT += parseFloat(`${projectT.length}`);
         projectT = [parseInt(`${telemetryT}`) << (Math.min(1, Math.abs(2)))];
         closei += "1";
         if (mapping0) {
            break;
         }
      } while (mapping0 && (pausel.length < adultT.length));
      let overE = spinner7.size <= 8886851;
      do {
         spinner7.set(adultT, 2 * pausel.length);
         if (overE) {
            break;
         }
      } while (overE && (over4.length > 1));
      if (over4 == String.fromCharCode(49,0) || 2 < adultT.length) {
          let list1: Array<any> = [438, 462];
         adultT += `${list1.length - spinner7.size}`;
      }
         over4 += "1";
         over4 += `${2 << (Math.min(1, Math.abs(spinner7.size)))}`;
         spinner7 = new Map([[adultT, (pausel == String.fromCharCode(110,0) ? adultT.length : pausel.length)]]);
      ball_.set(`${yellowredcardJ}`, (layoutL.length >> (Math.min(4, Math.abs((yellowredcardJ ? 3 : 4))))));
      break;
   }
      screenL += `${ball_.size - popupd.length}`;
       let settings6 = String.fromCharCode(97,95,56,57,95,99,111,110,100,105,116,105,111,110,115,0);
      for (let v = 0; v < 3; v++) {
         settings6 = `${(settings6 == String.fromCharCode(113,0) ? settings6.length : settings6.length)}`;
      }
      while (settings6 == String.fromCharCode(72,0)) {
         settings6 += `${settings6.length}`;
         break;
      }
         settings6 = "3";
      popupd += "2";
    const offline = !(state.isConnected && state.isInternetReachable);

      subbasketballplayer3 += `${confirmationB | 3}`;
   if (ball_.size >= 4) {
       let anytimei: Array<any> = [202, 641, 491];
       let clockB = 0.0;
       let default_nS = true;
         anytimei = [((default_nS ? 1 : 2) % (Math.max(parseInt(`${clockB}`), 3)))];
         clockB /= Math.max(parseInt(`${clockB}`) * 1, 2);
      if (default_nS && 5.36 > (clockB / 5.53)) {
          let gemfilem = String.fromCharCode(104,119,114,97,110,100,95,115,95,53,50,0);
          let chartD = true;
          let libyoga0 = String.fromCharCode(114,111,117,110,100,100,115,95,104,95,55,0);
          let middleJ: Map<any, any> = new Map([[String.fromCharCode(106,95,53,57,95,99,111,109,98,105,110,97,116,105,111,110,115,0),472], [String.fromCharCode(119,95,55,95,100,120,116,121,115,0),90]]);
          let analyticO: Map<any, any> = new Map([[String.fromCharCode(116,114,105,95,121,95,54,53,0),false ], [String.fromCharCode(104,97,118,101,101,118,101,110,116,115,95,98,95,50,0),false ], [String.fromCharCode(99,111,110,116,97,105,110,101,114,95,106,95,51,52,0),true ]]);
         clockB -= 2 + anytimei.length;
         gemfilem = "1";
         chartD = (((!chartD ? gemfilem.length : 39) >> (Math.min(gemfilem.length, 4))) > 39);
         libyoga0 += `${middleJ.size}`;
         middleJ = new Map([[`${chartD}`, (String.fromCharCode(102,0) == gemfilem ? (chartD ? 4 : 3) : gemfilem.length)]]);
         analyticO = new Map([[gemfilem, ((chartD ? 4 : 1))]]);
      }
      let currentj = anytimei.length <= 8584851;
      do {
         anytimei = [parseInt(`${clockB}`) >> (Math.min(5, Math.abs(2)))];
         if (currentj) {
            break;
         }
      } while (currentj && (!anytimei.includes(clockB)));
       let ticked5 = String.fromCharCode(111,95,57,55,95,114,101,108,111,97,100,105,110,103,0);
       let fill1 = String.fromCharCode(101,95,54,54,95,112,114,111,109,112,101,103,0);
      for (let j = 0; j < 3; j++) {
         ticked5 += `${parseInt(`${clockB}`) + 3}`;
      }
      while (ticked5.startsWith(`${fill1.length}`)) {
          let dropdownU: Array<any> = [String.fromCharCode(97,100,106,117,115,116,109,101,110,116,115,95,103,95,54,53,0), String.fromCharCode(110,95,54,95,120,121,122,116,97,98,108,101,115,0), String.fromCharCode(119,95,49,49,95,99,104,97,110,103,101,114,101,102,0)];
          let fills = true;
          let anytimeT = 5;
          let inouttargetredo = false;
         fill1 += `${anytimeT / (Math.max(parseInt(`${clockB}`), 10))}`;
         dropdownU.push(((fills ? 1 : 3) ^ dropdownU.length));
         fills = (!inouttargetredo ? !fills : !inouttargetredo);
         anytimeT += 3;
         break;
      }
      let castX = ticked5.length <= 8597288;
      do {
          let graphM: Map<any, any> = new Map([[String.fromCharCode(101,95,53,57,95,100,101,115,105,114,101,100,0),String.fromCharCode(105,110,103,101,116,97,100,100,114,95,102,95,49,53,0)], [String.fromCharCode(98,95,56,50,95,115,117,98,0),String.fromCharCode(100,111,99,115,95,114,95,54,54,0)], [String.fromCharCode(101,103,117,108,97,114,95,109,95,56,55,0),String.fromCharCode(107,95,54,52,95,110,101,119,116,101,107,0)]]);
          let collection_ = String.fromCharCode(100,95,56,53,95,102,114,97,109,101,115,105,122,101,115,0);
          let castingB = String.fromCharCode(100,95,51,54,95,108,105,98,119,101,98,112,0);
          let lessU = false;
          let servicep = String.fromCharCode(101,120,116,95,119,95,52,53,0);
         ticked5 += `${(2 >> (Math.min(4, Math.abs((lessU ? 4 : 1)))))}`;
         graphM = new Map([[collection_, collection_.length << (Math.min(Math.abs(1), 4))]]);
         castingB += `${graphM.size | 1}`;
         lessU = collection_.length > 23;
         servicep += `${collection_.length | servicep.length}`;
         if (castX) {
            break;
         }
      } while (castX && (ticked5 == String.fromCharCode(56,0) && fill1 != String.fromCharCode(68,0)));
      for (let o = 0; o < 1; o++) {
          let dependencyD = 1.0;
         fill1 += `${2 - anytimei.length}`;
         dependencyD += parseFloat(`${parseInt(`${dependencyD}`) - 2}`);
      }
      screenL += `${acceptedQ}`;
   }
      acceptedQ >>= Math.min(Math.abs(2), 4);
      pressure6 -= 1;
      screenL = `${clubz.length}`;
      screenL = `${acceptedQ}`;
    setIsOffline(offline);

   if (layoutL.length <= 3) {
      layoutL = [pressure6 / 2];
   }
       let sans_ = String.fromCharCode(105,95,54,95,99,108,101,97,114,98,105,116,0);
       let gray_ = String.fromCharCode(115,101,103,105,100,95,53,95,55,54,0);
       let mnewarchdefaultsd = String.fromCharCode(120,117,118,109,118,115,95,54,95,52,55,0);
          let hongkong7 = 5;
          let control5 = String.fromCharCode(98,95,56,52,95,99,108,97,122,122,0);
          let iconbackwhiteo = true;
         mnewarchdefaultsd += `${(String.fromCharCode(67,0) == sans_ ? sans_.length : mnewarchdefaultsd.length)}`;
         hongkong7 |= hongkong7 << (Math.min(control5.length, 2));
         control5 += `${hongkong7}`;
         iconbackwhiteo = control5.length < 61;
         gray_ = "2";
      for (let o = 0; o < 2; o++) {
         mnewarchdefaultsd += `${sans_.length}`;
      }
       let cornerkick0 = 4;
      let catalogW = String.fromCharCode(110,105,54,95,53,107,56,0) == mnewarchdefaultsd;
      do {
         mnewarchdefaultsd = `${(mnewarchdefaultsd == String.fromCharCode(69,0) ? cornerkick0 : mnewarchdefaultsd.length)}`;
         if (catalogW) {
            break;
         }
      } while (catalogW && (5 < mnewarchdefaultsd.length));
          let turndownX = String.fromCharCode(105,109,109,117,116,97,98,108,101,95,100,95,49,52,0);
          let holderb = String.fromCharCode(109,95,52,57,95,112,105,99,116,121,112,101,0);
         sans_ = `${cornerkick0 * 2}`;
         turndownX = `${2 * holderb.length}`;
         holderb = `${3 % (Math.max(4, turndownX.length))}`;
      if (3 <= gray_.length || 3 <= mnewarchdefaultsd.length) {
          let signinupH = String.fromCharCode(97,118,102,111,117,110,100,97,116,105,111,110,95,100,95,52,48,0);
          let valuesp: Array<any> = [String.fromCharCode(107,95,57,49,95,116,114,117,101,0), String.fromCharCode(117,95,54,56,95,97,116,116,114,97,99,116,105,110,103,0), String.fromCharCode(98,95,51,55,95,109,98,115,101,103,109,101,110,116,97,116,105,111,110,0)];
         gray_ = `${signinupH.length << (Math.min(Math.abs(1), 4))}`;
         signinupH = `${valuesp.length}`;
         valuesp = [valuesp.length * valuesp.length];
      }
      let floaterv = 7024956 >= gray_.length;
      do {
         gray_ = `${sans_.length}`;
         if (floaterv) {
            break;
         }
      } while ((gray_.length == sans_.length) && floaterv);
      if (sans_.startsWith(`${gray_.length}`)) {
         gray_ = `${sans_.length}`;
      }
      screenL = `${pressure6 - clubz.length}`;
   if ((2 & subbasketballplayer3.length) == 4) {
      clubz.push(ball_.size);
   }
   while (ball_.get(`${confirmationB}`) != null) {
      confirmationB <<= Math.min(5, Math.abs((screenL == String.fromCharCode(102,0) ? screenL.length : ball_.size)));
      break;
   }
       let borderless5 = String.fromCharCode(106,95,53,56,95,109,101,100,105,97,99,111,100,101,99,0);
         borderless5 = `${borderless5.length}`;
          let macaum: Map<any, any> = new Map([[String.fromCharCode(103,95,48,95,114,101,109,105,120,0),false ], [String.fromCharCode(119,104,105,116,101,95,108,95,51,51,0),false ], [String.fromCharCode(100,105,115,112,111,115,97,108,95,111,95,49,57,0),false ]]);
          let phoneD = 2;
         borderless5 += `${3 + borderless5.length}`;
         macaum = new Map([[`${macaum.size}`, macaum.size]]);
         phoneD |= 3 * macaum.size;
      while (1 >= borderless5.length) {
          let whiteticko = 4.0;
          let trophyC = String.fromCharCode(97,108,103,111,114,105,116,104,109,95,103,95,56,52,0);
          let megaphonev = 1;
         borderless5 = `${parseInt(`${whiteticko}`)}`;
         whiteticko *= parseFloat(`${trophyC.length >> (Math.min(1, Math.abs(megaphonev)))}`);
         trophyC = `${(trophyC == String.fromCharCode(105,0) ? megaphonev : trophyC.length)}`;
         break;
      }
      layoutL = [ball_.size - confirmationB];
       let scoreY = String.fromCharCode(103,95,54,49,95,97,117,116,111,99,111,114,114,0);
       let malaysiag: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,105,110,105,116,95,56,95,57,53,0),777], [String.fromCharCode(97,95,51,51,95,97,97,99,112,115,121,0),391], [String.fromCharCode(109,115,103,115,109,95,100,95,56,0),702]]);
         scoreY += `${scoreY.length % 2}`;
      if ((scoreY.length | 5) <= 2) {
         malaysiag = new Map([[`${malaysiag.size}`, 3]]);
      }
         malaysiag = new Map([[`${malaysiag.size}`, 3 ^ scoreY.length]]);
      if (2 <= (3 & malaysiag.size)) {
         malaysiag.set(scoreY, scoreY.length << (Math.min(5, Math.abs(malaysiag.size))));
      }
      let matchactivec = scoreY.length <= 5638113;
      do {
         scoreY = `${(scoreY == String.fromCharCode(76,0) ? scoreY.length : malaysiag.size)}`;
         if (matchactivec) {
            break;
         }
      } while ((!scoreY.startsWith(`${malaysiag.size}`)) && matchactivec);
      let bottomC = scoreY == String.fromCharCode(56,119,106,0);
      do {
          let analytics2: Map<any, any> = new Map([[String.fromCharCode(99,97,110,116,95,51,95,52,53,0),255], [String.fromCharCode(98,111,110,100,95,51,95,53,49,0),934]]);
         scoreY += `${malaysiag.size & scoreY.length}`;
         analytics2.set(`${analytics2.size}`, analytics2.size);
         if (bottomC) {
            break;
         }
      } while (((scoreY.length - malaysiag.size) <= 2 || 3 <= (2 - malaysiag.size)) && bottomC);
      pressure6 ^= scoreY.length ^ clubz.length;

    if (offline) {

   for (let g = 0; g < 1; g++) {
      layoutL.push(acceptedQ);
   }
      usernameA = !usernameA;
       let statisticsa = 1;
       let iconeditl: Array<any> = [656, 804];
       let viewerm = String.fromCharCode(117,95,52,49,95,99,114,101,100,101,110,116,105,97,108,0);
         viewerm += `${statisticsa}`;
         statisticsa -= 3;
      let penaltygoal6 = statisticsa <= 5587798;
      do {
         statisticsa %= Math.max(1, iconeditl.length / 2);
         if (penaltygoal6) {
            break;
         }
      } while (penaltygoal6 && (statisticsa >= 2));
      while ((statisticsa << (Math.min(viewerm.length, 2))) <= 5 && 2 <= (5 << (Math.min(2, viewerm.length)))) {
          let singaporez: Array<any> = [482, 776, 64];
         statisticsa >>= Math.min(Math.abs(statisticsa % 1), 2);
         singaporez.push(1);
         break;
      }
      for (let h = 0; h < 2; h++) {
          let sanst = false;
          let historyy = 3.0;
          let placeholderp = 1.0;
          let incidentU = String.fromCharCode(105,109,112,108,95,99,95,54,52,0);
         iconeditl.push(viewerm.length & 2);
         sanst = !sanst;
         historyy *= incidentU.length ^ 1;
         placeholderp *= (parseFloat(`${(sanst ? 5 : 5) - 2}`));
         incidentU += `${parseInt(`${placeholderp}`) / 1}`;
      }
         viewerm += `${(String.fromCharCode(48,0) == viewerm ? viewerm.length : statisticsa)}`;
      while ((viewerm.length >> (Math.min(2, iconeditl.length))) > 1) {
         iconeditl.push(viewerm.length);
         break;
      }
         iconeditl = [3];
         iconeditl.push(iconeditl.length * 3);
      screenL = `${pressure6}`;
   while (!usernameA || (2 >> (Math.min(2, layoutL.length))) == 2) {
       let stylesT = String.fromCharCode(100,95,52,53,95,119,101,98,109,100,101,99,0);
       let alertQ = 1.0;
       let libfabricjniV = 3;
       let kuaishouu = String.fromCharCode(100,98,104,97,110,100,108,101,95,117,95,55,49,0);
       let settingsJ = 4.0;
      let match3 = alertQ >= 5383582.0;
      do {
          let libreactnativeblobe = String.fromCharCode(100,111,99,107,101,114,95,113,95,52,57,0);
          let rewindg = true;
         alertQ *= (parseFloat(`${parseInt(`${alertQ}`) | (rewindg ? 1 : 3)}`));
         libreactnativeblobe += "1";
         rewindg = (libreactnativeblobe.length >> (Math.min(5, libreactnativeblobe.length))) == 19;
         if (match3) {
            break;
         }
      } while ((4.13 >= (1.93 * alertQ) || (5 >> (Math.min(1, Math.abs(libfabricjniV)))) >= 4) && match3);
         kuaishouu += "3";
      for (let z = 0; z < 1; z++) {
         settingsJ /= Math.max(parseInt(`${settingsJ}`), 5);
      }
          let completeZ = false;
          let singler = 4.0;
         alertQ -= (parseFloat(`${parseInt(`${settingsJ}`) % (Math.max(3, (completeZ ? 3 : 1)))}`));
         completeZ = singler < 40.94;
         singler /= Math.max(4, parseFloat(`${parseInt(`${singler}`) ^ 2}`));
      let kick3 = kuaishouu == String.fromCharCode(104,101,57,0);
      do {
          let trashw: Array<any> = [364, 915, 897];
         kuaishouu += `${kuaishouu.length + parseInt(`${alertQ}`)}`;
         trashw.push(1);
         if (kick3) {
            break;
         }
      } while (kick3 && ((libfabricjniV + 5) <= 4 && (libfabricjniV + kuaishouu.length) <= 5));
      for (let f = 0; f < 2; f++) {
         alertQ /= Math.max(4, parseFloat(`${stylesT.length * kuaishouu.length}`));
      }
      let evento = kuaishouu.length >= 6853068;
      do {
         kuaishouu += `${kuaishouu.length << (Math.min(3, Math.abs(libfabricjniV)))}`;
         if (evento) {
            break;
         }
      } while (evento && (1.45 > (settingsJ / 1.25) && 1.6 > (settingsJ / 1.25)));
       let textlayoutmanager9 = 2.0;
       let manifestD = 4.0;
          let benefitP = String.fromCharCode(111,116,105,102,105,99,97,116,105,111,110,95,113,95,53,56,0);
          let giflivestreamingS = String.fromCharCode(110,97,109,101,115,101,114,118,101,114,95,121,95,56,50,0);
          let teamdetailsbgW = 1.0;
         libfabricjniV += parseInt(`${textlayoutmanager9}`);
         benefitP = `${benefitP.length ^ giflivestreamingS.length}`;
         giflivestreamingS += "3";
         teamdetailsbgW *= giflivestreamingS.length >> (Math.min(benefitP.length, 3));
      if (2 < (kuaishouu.length - 2)) {
          let mapbufferv = String.fromCharCode(115,95,55,51,95,102,97,107,101,0);
         kuaishouu += "3";
         mapbufferv += `${mapbufferv.length - mapbufferv.length}`;
      }
      if (1.17 < settingsJ) {
          let privatechatbgG = String.fromCharCode(106,105,110,99,108,117,100,101,95,49,95,56,53,0);
          let blackj: Array<any> = [String.fromCharCode(98,105,103,100,105,97,95,100,95,55,51,0), String.fromCharCode(106,95,53,49,95,117,110,99,108,101,115,0), String.fromCharCode(113,95,49,48,95,108,97,110,101,0)];
         alertQ *= parseFloat(`${privatechatbgG.length & parseInt(`${settingsJ}`)}`);
         privatechatbgG += `${blackj.length - 2}`;
         blackj.push(2);
      }
         textlayoutmanager9 /= Math.max(3, (String.fromCharCode(55,0) == kuaishouu ? parseInt(`${textlayoutmanager9}`) : kuaishouu.length));
      for (let a = 0; a < 2; a++) {
          let iconsettingk = String.fromCharCode(106,95,50,57,95,120,109,97,115,109,0);
          let reactnavigation3 = 1.0;
          let bootI: Array<any> = [815, 967];
          let refreshT = 3.0;
          let whistleS = false;
         textlayoutmanager9 *= (String.fromCharCode(118,0) == iconsettingk ? iconsettingk.length : parseInt(`${textlayoutmanager9}`));
         reactnavigation3 /= Math.max(3 >> (Math.min(Math.abs(parseInt(`${reactnavigation3}`)), 5)), 2);
         bootI.push(3 / (Math.max(1, parseInt(`${refreshT}`))));
         refreshT += 2 & parseInt(`${refreshT}`);
         whistleS = (refreshT * bootI.length) <= 78.58;
      }
      for (let m = 0; m < 1; m++) {
          let langkeyC: Array<any> = [670, 164];
          let rewindo = 2.0;
          let nativemoduleO = false;
          let formK = String.fromCharCode(100,99,116,115,117,98,95,116,95,57,53,0);
         alertQ += parseFloat(`${stylesT.length}`);
         langkeyC.push((String.fromCharCode(77,0) == formK ? formK.length : langkeyC.length));
         rewindo *= (parseFloat(`${(nativemoduleO ? 3 : 5) * formK.length}`));
         nativemoduleO = langkeyC.length <= parseInt(`${rewindo}`);
      }
      if (manifestD > libfabricjniV) {
         libfabricjniV %= Math.max(2, parseInt(`${textlayoutmanager9}`) % (Math.max(parseInt(`${settingsJ}`), 10)));
      }
      layoutL.push(subbasketballplayer3.length);
      break;
   }
       let applicationU = 4.0;
          let zhengpianv = String.fromCharCode(110,95,51,53,95,109,102,104,100,0);
          let statisticsinactiveq = String.fromCharCode(118,111,114,100,105,112,108,111,109,95,112,95,50,49,0);
          let bottomg = String.fromCharCode(98,114,105,100,103,101,95,51,95,50,0);
         applicationU *= zhengpianv.length << (Math.min(statisticsinactiveq.length, 5));
         zhengpianv += `${bottomg.length}`;
         statisticsinactiveq = `${bottomg.length}`;
       let chinaS = String.fromCharCode(112,95,54,49,95,101,109,109,105,110,116,114,105,110,0);
       let imagesB = String.fromCharCode(115,111,99,107,101,116,95,116,95,54,48,0);
      if ((1.80 + applicationU) > 5.15) {
         imagesB = `${chinaS.length}`;
      }
      ball_ = new Map([[`${clubz.length}`, 3 * clubz.length]]);
   if (2 >= (pressure6 << (Math.min(3, Math.abs(confirmationB)))) || 2 >= (pressure6 << (Math.min(2, Math.abs(confirmationB))))) {
       let libffmpegkita = 1.0;
       let runtimeschedulerQ = String.fromCharCode(114,101,115,111,108,118,101,114,115,95,100,95,50,52,0);
          let s_centerH = 1.0;
          let defaultpredictionprofileb = 1.0;
         runtimeschedulerQ += "2";
         s_centerH += parseFloat(`${1}`);
         defaultpredictionprofileb /= Math.max(3, 5);
       let chinasamev = String.fromCharCode(116,101,115,116,115,95,117,95,53,55,0);
      for (let i = 0; i < 3; i++) {
         libffmpegkita /= Math.max(4, parseFloat(`${2}`));
      }
      for (let z = 0; z < 3; z++) {
         libffmpegkita /= Math.max(5, parseFloat(`${runtimeschedulerQ.length + 1}`));
      }
       let anewinterstitialk = 1.0;
       let qaago = 2.0;
      if (4 == (runtimeschedulerQ.length ^ 1)) {
          let textlayoutmanagerw = String.fromCharCode(115,101,99,111,110,100,115,95,117,95,54,54,0);
         anewinterstitialk *= parseInt(`${libffmpegkita}`);
         textlayoutmanagerw = `${textlayoutmanagerw.length * 3}`;
      }
      pressure6 <<= Math.min(3, Math.abs(acceptedQ * parseInt(`${libffmpegkita}`)));
   }
      setDismountPlayer(false); 
    }
    
  };
  
  

  
  
  
  

  
  
  
  
  
  
  

  
  
  
  
  
  
  
  //   return () => clearInterval(interval)
  

  useEffect(() => {
    if (vod) {
      setInitTime(vod?.timeWatched);
      setReadyPlay(false);

      

      
      ww_runtime.playsViewsAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
        isXmode: adultMode,
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

  const fetchVodDetails = useCallback(
    () =>
      wwIconedit.getDetail(
        vod?.vod_id.toString() ?? "",
        vod?.type_id.toString() ?? "",
        vod?.vod_source_name ?? "",
        {
          xMode: adultMode,
        }
      ).then((data) => {
        const isRestricted = data.vod_restricted === 1;
        if (isRestricted) {
          videoPlayerRef.current?.setPause(true);
          
          setTimeout(() => {
            setVodRestricted(isRestricted);
          }, 100);
        } else {
          setVodRestricted(isRestricted);
        }

        return data;
      }),
    [vod]
  );

  const handleFetchVodDetail = async () => {
       let iconusero = 1.0;
    let dependencyu = 1;
    let showF = String.fromCharCode(104,95,52,50,95,119,104,101,114,101,0);
    let livenodatabgimgH = 2;
    let temperatureA = String.fromCharCode(104,95,53,48,95,116,105,109,101,112,101,114,102,114,97,109,101,0);
    let sharemodal6 = String.fromCharCode(119,95,49,48,95,112,111,115,116,102,105,108,116,101,114,0);
    let guideR = true;
    let firebasea: Array<any> = [String.fromCharCode(98,95,55,52,95,107,105,110,100,0), String.fromCharCode(121,95,57,51,95,99,111,114,101,0)];
    let windu = 1.0;
    let fullW = String.fromCharCode(122,95,54,49,95,98,97,110,100,115,0);
    let selectioni = String.fromCharCode(105,110,116,101,103,114,97,108,95,106,95,51,57,0);
    let uploada = String.fromCharCode(99,97,116,101,103,111,114,105,101,115,95,118,95,56,53,0);
    let sharemodald = String.fromCharCode(104,95,52,54,95,115,117,98,99,111,110,116,101,110,116,115,0);
    let bootsplashY = 4.0;
    let colorsF: Array<any> = [816, 109];
    let expandU = true;
   if ((uploada.length * windu) > 2.18 && 1.79 > (windu * 2.18)) {
      uploada += `${firebasea.length | temperatureA.length}`;
   }
   let zhengpianZ = 8390067 <= selectioni.length;
   do {
       let arrowrightR = false;
      if (arrowrightR) {
         arrowrightR = !arrowrightR;
      }
       let footballfieldy = String.fromCharCode(103,95,50,52,95,114,101,108,97,121,0);
       let expiredr = String.fromCharCode(111,118,102,108,95,121,95,55,54,0);
          let bootj = false;
         footballfieldy += `${((arrowrightR ? 5 : 5) | 1)}`;
         bootj = (!bootj ? !bootj : bootj);
      selectioni = `${((arrowrightR ? 1 : 2) / 3)}`;
      if (zhengpianZ) {
         break;
      }
   } while ((uploada != selectioni) && zhengpianZ);
   if (5 == showF.length) {
      livenodatabgimgH |= sharemodal6.length;
   }
      uploada += `${sharemodal6.length % 3}`;
   for (let t = 0; t < 1; t++) {
      guideR = iconusero < 65.64;
   }
   if (showF.length == 3) {
      selectioni += "3";
   }
   for (let o = 0; o < 1; o++) {
      dependencyu %= Math.max(uploada.length, 2);
   }

    const promise = async () => downloadedVod?.vod;

      iconusero -= parseFloat(`${selectioni.length}`);
      livenodatabgimgH /= Math.max(temperatureA.length | 2, 4);
       let cast8: Array<any> = [749, 964, 910];
         cast8.push(cast8.length);
      let delegate_x4 = cast8.length >= 6275599;
      do {
          let sina9 = 5.0;
          let modityX = String.fromCharCode(108,95,50,51,95,109,101,109,111,114,121,98,97,114,114,105,101,114,0);
         cast8.push(parseInt(`${sina9}`));
         sina9 += parseFloat(`${modityX.length % (Math.max(modityX.length, 9))}`);
         if (delegate_x4) {
            break;
         }
      } while (delegate_x4 && ((cast8.length * 4) >= 3));
      while ((2 + cast8.length) == 1) {
         cast8.push(cast8.length);
         break;
      }
      livenodatabgimgH <<= Math.min(Math.abs(3 - dependencyu), 1);
   for (let r = 0; r < 3; r++) {
       let verticalO = 2.0;
       let plusq = 2.0;
       let m_playerH = true;
       let auto_d3a: Array<any> = [String.fromCharCode(105,95,51,48,95,120,118,105,100,0), String.fromCharCode(106,95,54,48,95,105,110,116,101,114,112,111,108,97,116,101,0)];
       let watchd = String.fromCharCode(98,95,53,53,95,110,97,109,101,100,0);
       let graphicsz = String.fromCharCode(98,95,50,57,95,102,99,104,111,119,110,0);
          let gifgoalbgQ: Map<any, any> = new Map([[String.fromCharCode(111,95,50,51,95,112,111,115,116,101,114,115,0),true ], [String.fromCharCode(105,95,54,53,95,115,112,101,99,105,97,108,0),true ]]);
          let pushG: Map<any, any> = new Map([[String.fromCharCode(105,95,57,54,95,119,95,51,50,0),342], [String.fromCharCode(117,95,57,53,95,114,97,100,102,103,0),322], [String.fromCharCode(102,108,105,112,95,51,95,54,56,0),15]]);
          let downloadingH: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,100,97,116,97,95,118,95,49,53,0),104], [String.fromCharCode(117,95,50,50,95,105,110,100,105,99,97,116,105,111,110,0),157]]);
         watchd += `${(watchd == String.fromCharCode(52,0) ? graphicsz.length : watchd.length)}`;
         gifgoalbgQ = new Map([[`${gifgoalbgQ.size}`, 1]]);
         pushG = new Map([[`${pushG.size}`, gifgoalbgQ.size & 2]]);
         downloadingH.set(`${pushG.size}`, 3 ^ pushG.size);
          let reactnativeultimatelistviewc = String.fromCharCode(110,116,105,108,101,95,119,95,55,53,0);
          let main_p1 = String.fromCharCode(99,101,114,116,105,102,105,99,97,116,101,95,102,95,56,0);
         verticalO += (parseInt(`${verticalO}`) - (m_playerH ? 2 : 2));
         reactnativeultimatelistviewc += `${reactnativeultimatelistviewc.length}`;
         main_p1 += `${reactnativeultimatelistviewc.length >> (Math.min(Math.abs(3), 2))}`;
       let tooltips4 = true;
       let libsgcores = false;
      if (graphicsz.length == 4 || libsgcores) {
         graphicsz += `${graphicsz.length}`;
      }
      let invite0 = m_playerH ? !m_playerH : m_playerH;
      do {
         m_playerH = plusq >= 7.79;
         if (invite0) {
            break;
         }
      } while (invite0 && (!libsgcores));
         tooltips4 = plusq < parseFloat(`${watchd.length}`);
         graphicsz += `${auto_d3a.length}`;
          let valuesj = String.fromCharCode(97,95,52,54,95,99,97,100,101,110,99,101,0);
          let selectJ = String.fromCharCode(98,108,99,107,95,99,95,57,49,0);
         watchd = `${selectJ.length - 3}`;
         valuesj += `${valuesj.length}`;
         selectJ = `${3 % (Math.max(8, valuesj.length))}`;
      let progressa = m_playerH ? !m_playerH : m_playerH;
      do {
         m_playerH = String.fromCharCode(87,0) == watchd;
         if (progressa) {
            break;
         }
      } while ((!m_playerH) && progressa);
         plusq /= Math.max(1, parseFloat(`${auto_d3a.length * 1}`));
         m_playerH = auto_d3a.length == 26;
      guideR = 83 >= uploada.length;
   }
   for (let w = 0; w < 1; w++) {
      windu /= Math.max(5, showF.length);
   }
   for (let c = 0; c < 1; c++) {
      windu /= Math.max(temperatureA.length, 3);
   }
   for (let h = 0; h < 2; h++) {
      windu -= 3;
   }
    if (isOffline) {

   for (let r = 0; r < 3; r++) {
       let awayteamfieldj = true;
       let reactnativejsX = 5.0;
       let upgradeI = 1;
         reactnativejsX += (parseFloat(`${parseInt(`${reactnativejsX}`) << (Math.min(4, Math.abs((awayteamfieldj ? 4 : 3))))}`));
         awayteamfieldj = 95 > (upgradeI - reactnativejsX);
      for (let g = 0; g < 1; g++) {
          let statisticsinactive9 = String.fromCharCode(115,105,102,116,95,112,95,55,55,0);
          let yellowm = 2.0;
          let huaweiC = String.fromCharCode(103,112,116,111,112,116,115,95,109,95,49,0);
          let kickT = String.fromCharCode(105,95,50,50,95,109,105,115,115,105,110,103,0);
         upgradeI >>= Math.min(2, Math.abs((kickT == String.fromCharCode(66,0) ? kickT.length : (awayteamfieldj ? 1 : 1))));
         statisticsinactive9 += "1";
         yellowm /= Math.max(4, parseFloat(`${1 | huaweiC.length}`));
         huaweiC += "2";
      }
          let bellw: Array<any> = [478, 303];
         reactnativejsX *= parseFloat(`${parseInt(`${reactnativejsX}`)}`);
         bellw.push(bellw.length & 2);
      if (2 > upgradeI || (2 << (Math.min(2, Math.abs(upgradeI)))) > 5) {
         awayteamfieldj = 12.12 >= reactnativejsX;
      }
      if (awayteamfieldj) {
         upgradeI &= upgradeI;
      }
       let mergerS = 1.0;
         reactnativejsX += parseFloat(`${2}`);
         reactnativejsX /= Math.max(2, (parseFloat(`${parseInt(`${reactnativejsX}`) << (Math.min(5, Math.abs((awayteamfieldj ? 2 : 5))))}`)));
      dependencyu -= upgradeI;
   }
      temperatureA = `${3 / (Math.max(6, parseInt(`${windu}`)))}`;
   while (!sharemodald.endsWith(`${guideR}`)) {
      sharemodald = "3";
      break;
   }
   if (4.38 >= (1.51 + iconusero)) {
      dependencyu *= firebasea.length - sharemodal6.length;
   }
      livenodatabgimgH ^= (sharemodald == String.fromCharCode(89,0) ? sharemodald.length : dependencyu);
      windu /= Math.max(3 / (Math.max(1, parseInt(`${windu}`))), 3);
      dependencyu >>= Math.min(1, Math.abs(parseInt(`${iconusero}`)));
      console.debug("is offline");

       let suggestiond = false;
       let tooltipsI = 1;
       let materialX = String.fromCharCode(105,109,112,108,105,99,105,116,95,111,95,53,51,0);
          let p_countn = 1;
          let settingh: Map<any, any> = new Map([[String.fromCharCode(109,95,53,52,95,102,117,108,108,115,99,114,101,101,110,0),String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,95,109,95,51,51,0)], [String.fromCharCode(97,99,107,95,103,95,56,49,0),String.fromCharCode(100,114,97,102,116,115,95,50,95,51,54,0)], [String.fromCharCode(119,95,54,57,95,104,101,108,112,0),String.fromCharCode(113,95,52,95,97,97,99,116,97,98,0)]]);
          let goalg = String.fromCharCode(108,95,52,50,95,115,101,113,117,101,110,99,101,114,0);
         suggestiond = (tooltipsI ^ p_countn) <= 1;
         p_countn -= settingh.size | 3;
         settingh = new Map([[`${settingh.size}`, 3]]);
         goalg = `${goalg.length | settingh.size}`;
      let zhengpianv = suggestiond ? !suggestiond : suggestiond;
      do {
         suggestiond = !materialX.includes(`${suggestiond}`);
         if (zhengpianv) {
            break;
         }
      } while ((!materialX.startsWith(`${suggestiond}`)) && zhengpianv);
         materialX = "3";
          let y_positionD = 1.0;
          let megaphonex: Map<any, any> = new Map([[String.fromCharCode(115,105,110,107,95,57,95,54,56,0),String.fromCharCode(105,95,56,52,95,108,111,119,0)], [String.fromCharCode(108,97,112,112,101,100,95,113,95,52,52,0),String.fromCharCode(110,111,110,110,117,108,108,115,99,104,101,109,101,115,95,49,95,55,54,0)]]);
          let klevin0 = 2.0;
         tooltipsI <<= Math.min(Math.abs(parseInt(`${klevin0}`) + 1), 3);
         y_positionD *= 2 + parseInt(`${y_positionD}`);
         megaphonex.set(`${y_positionD}`, parseInt(`${y_positionD}`) << (Math.min(Math.abs(1), 1)));
         klevin0 *= parseFloat(`${parseInt(`${y_positionD}`) - megaphonex.size}`);
       let ballS = 3.0;
      while ((tooltipsI ^ 5) >= 5 || (5 * tooltipsI) >= 5) {
          let nativemodulew = 5;
          let benefit1 = String.fromCharCode(118,110,101,103,113,95,56,95,55,56,0);
          let neon5 = 4;
          let cornerkickR = String.fromCharCode(118,105,101,119,101,100,95,114,95,53,49,0);
          let grayn = String.fromCharCode(101,114,114,95,55,95,54,50,0);
         tooltipsI &= 2;
         nativemodulew /= Math.max(3, 1);
         benefit1 += `${cornerkickR.length}`;
         neon5 %= Math.max(3, neon5 - grayn.length);
         cornerkickR = `${nativemodulew}`;
         grayn = `${grayn.length}`;
         break;
      }
         ballS *= 1;
          let settingsv = String.fromCharCode(114,101,99,101,110,116,101,114,95,110,95,56,52,0);
          let videojsO: Map<any, any> = new Map([[String.fromCharCode(116,95,51,95,112,97,103,101,110,111,0),false ], [String.fromCharCode(102,105,108,101,115,121,115,116,101,109,95,115,95,55,57,0),true ], [String.fromCharCode(101,115,101,110,100,95,97,95,56,56,0),true ]]);
          let privilegei = 5.0;
         tooltipsI <<= Math.min(1, Math.abs(1 ^ settingsv.length));
         settingsv = `${videojsO.size}`;
         videojsO = new Map([[`${videojsO.size}`, parseInt(`${privilegei}`) >> (Math.min(Math.abs(videojsO.size), 3))]]);
         privilegei -= parseFloat(`${1 - videojsO.size}`);
      let type_d1 = ballS <= 5291365.0;
      do {
          let awayV = 2;
          let detailB = 2.0;
         ballS *= ((suggestiond ? 3 : 5) * parseInt(`${ballS}`));
         awayV %= Math.max(5, parseInt(`${detailB}`));
         detailB -= parseFloat(`${awayV}`);
         if (type_d1) {
            break;
         }
      } while ((suggestiond || (ballS * 4.54) < 5.99) && type_d1);
      bootsplashY += (uploada == String.fromCharCode(69,0) ? parseInt(`${iconusero}`) : uploada.length);
      fullW = "3";
       let libruntimeexecutorV = String.fromCharCode(120,95,55,57,95,117,116,105,108,105,116,121,0);
       let loginsuccessZ = String.fromCharCode(109,105,115,115,101,115,95,57,95,52,57,0);
         loginsuccessZ = `${loginsuccessZ.length}`;
         loginsuccessZ = `${loginsuccessZ.length}`;
      for (let s = 0; s < 1; s++) {
         libruntimeexecutorV = `${1 ^ loginsuccessZ.length}`;
      }
          let shared8 = String.fromCharCode(109,111,111,118,95,110,95,51,48,0);
          let bottomG = String.fromCharCode(103,95,51,53,95,109,97,116,116,101,0);
          let yellowredcardz = String.fromCharCode(104,95,52,56,95,101,115,116,105,109,97,116,101,100,0);
         loginsuccessZ = `${yellowredcardz.length - bottomG.length}`;
         shared8 += `${shared8.length % (Math.max(7, shared8.length))}`;
         bottomG = "3";
       let rulese = 5.0;
       let unfillT = 0;
      sharemodal6 += `${dependencyu}`;
   for (let n = 0; n < 3; n++) {
       let bootsplashJ = 2;
       let skipD = 1.0;
         bootsplashJ &= 1;
         skipD /= Math.max(3, parseFloat(`${bootsplashJ ^ parseInt(`${skipD}`)}`));
      if (bootsplashJ >= skipD) {
         bootsplashJ <<= Math.min(1, Math.abs(1));
      }
      if (1.72 <= skipD) {
         skipD *= parseFloat(`${bootsplashJ}`);
      }
          let sellT: Array<any> = [832, 634];
         skipD -= parseFloat(`${parseInt(`${skipD}`)}`);
         sellT.push(3);
      for (let i = 0; i < 1; i++) {
          let albumQ = 4.0;
          let dnewsU = 5.0;
          let typesj: Map<any, any> = new Map([[String.fromCharCode(115,112,97,110,95,108,95,57,51,0),543], [String.fromCharCode(98,95,50,52,95,114,101,118,101,114,116,0),424], [String.fromCharCode(105,115,97,108,110,117,109,95,103,95,56,51,0),622]]);
         bootsplashJ &= parseInt(`${dnewsU}`) + 2;
         albumQ -= parseFloat(`${typesj.size % 2}`);
         dnewsU += parseInt(`${albumQ}`) - 3;
         typesj.set(`${albumQ}`, typesj.size << (Math.min(2, Math.abs(parseInt(`${albumQ}`)))));
      }
      firebasea.push((parseInt(`${windu}`) >> (Math.min(1, Math.abs((guideR ? 2 : 5))))));
   }
       let condensedJ = 4.0;
         condensedJ -= parseFloat(`${parseInt(`${condensedJ}`)}`);
      for (let e = 0; e < 2; e++) {
          let libcrashsdkn: Array<any> = [895, 817, 306];
          let mbridgeI = 3;
          let catagoryS = 5;
          let danger9 = 5.0;
         condensedJ += parseFloat(`${3}`);
         libcrashsdkn.push(1 + mbridgeI);
         mbridgeI &= catagoryS;
         danger9 += parseFloat(`${1 / (Math.max(catagoryS, 2))}`);
      }
      let goalG = condensedJ <= 6322301.0;
      do {
         condensedJ -= parseFloat(`${parseInt(`${condensedJ}`)}`);
         if (goalG) {
            break;
         }
      } while ((3.64 == (condensedJ / (Math.max(5.77, 6))) || (condensedJ * condensedJ) == 5.77) && goalG);
      bootsplashY -= fullW.length + selectioni.length;
   let checkbox_ = uploada.length <= 6591658;
   do {
       let twitterJ: Array<any> = [546, 372, 467];
         twitterJ.push(twitterJ.length - twitterJ.length);
          let unfilly: Map<any, any> = new Map([[String.fromCharCode(97,117,100,105,111,100,97,116,97,95,113,95,49,48,48,0),false ], [String.fromCharCode(108,95,57,51,95,102,105,110,97,108,105,122,101,0),true ], [String.fromCharCode(101,115,116,105,109,97,116,105,110,103,95,121,95,50,48,0),true ]]);
          let release__jU = false;
          let untick_ = 4.0;
         twitterJ.push(((release__jU ? 3 : 5) + parseInt(`${untick_}`)));
         unfilly.set(`${unfilly.size}`, unfilly.size);
         release__jU = 66 <= unfilly.size;
          let becomeo = String.fromCharCode(117,95,56,95,111,100,100,0);
         twitterJ.push(2 | becomeo.length);
      uploada = `${parseInt(`${iconusero}`) >> (Math.min(uploada.length, 1))}`;
      if (checkbox_) {
         break;
      }
   } while ((5 >= (5 & dependencyu) || 3 >= (dependencyu & 5)) && checkbox_);
   let searchb = showF.length >= 9382454;
   do {
      showF += `${3 & parseInt(`${iconusero}`)}`;
      if (searchb) {
         break;
      }
   } while (searchb && (sharemodald.length == showF.length));
      return promise();
    } else {

   if (4 < fullW.length && selectioni != String.fromCharCode(55,0)) {
      fullW += `${(String.fromCharCode(97,0) == sharemodal6 ? sharemodal6.length : parseInt(`${iconusero}`))}`;
   }
       let unimplementedviewg = String.fromCharCode(115,105,110,113,102,95,107,95,49,54,0);
       let long_vs = true;
      if (4 > unimplementedviewg.length && long_vs) {
         unimplementedviewg = `${unimplementedviewg.length}`;
      }
          let holderE = String.fromCharCode(107,101,112,116,95,118,95,56,55,0);
          let libffmpegkitS = 4.0;
          let dice2 = 0;
         long_vs = libffmpegkitS >= 53.66;
         holderE += `${dice2 % (Math.max(3, 10))}`;
         libffmpegkitS -= dice2 ^ 2;
      while (!unimplementedviewg.startsWith(`${long_vs}`)) {
         long_vs = ((unimplementedviewg.length * (long_vs ? unimplementedviewg.length : 98)) > 98);
         break;
      }
      for (let c = 0; c < 1; c++) {
          let rightM: Array<any> = [952, 578];
          let placeholder2 = false;
          let mintegralV: Map<any, any> = new Map([[String.fromCharCode(116,97,105,108,115,95,53,95,56,57,0),String.fromCharCode(108,95,55,48,95,103,114,97,121,114,103,98,0)], [String.fromCharCode(101,120,99,101,101,100,101,100,95,105,95,56,51,0),String.fromCharCode(97,99,99,117,109,117,108,97,116,101,100,95,111,95,49,48,48,0)]]);
          let f_hashp = 4.0;
         long_vs = unimplementedviewg == String.fromCharCode(75,0) || f_hashp == 72.96;
         rightM.push(((placeholder2 ? 3 : 5) >> (Math.min(Math.abs(1), 3))));
         placeholder2 = rightM.length < 87;
         mintegralV = new Map([[`${mintegralV.size}`, ((placeholder2 ? 1 : 3) - mintegralV.size)]]);
         f_hashp *= rightM.length;
      }
         long_vs = !long_vs;
         long_vs = unimplementedviewg.length <= 98;
      windu /= Math.max(5, (String.fromCharCode(66,0) == uploada ? uploada.length : parseInt(`${bootsplashY}`)));
   while (!showF.endsWith(`${fullW.length}`)) {
      fullW = `${livenodatabgimgH & 1}`;
      break;
   }
       let yingu = 0;
       let iconstarQ = false;
      while (yingu > 5) {
         yingu <<= Math.min(Math.abs(yingu), 2);
         break;
      }
          let playlist2 = true;
         iconstarQ = yingu <= 27;
         playlist2 = !playlist2;
       let stara = String.fromCharCode(109,117,108,116,105,100,101,115,99,114,105,112,116,111,114,95,101,95,49,51,0);
       let register_3I = String.fromCharCode(102,108,111,97,116,115,104,111,114,116,95,106,95,54,57,0);
          let orangeclock0 = String.fromCharCode(103,95,51,53,95,104,117,102,102,121,117,118,0);
          let homeu: Array<any> = [768, 371];
         stara = `${orangeclock0.length << (Math.min(Math.abs(2), 3))}`;
         orangeclock0 = `${homeu.length}`;
         homeu.push(homeu.length / (Math.max(1, 4)));
         stara = `${yingu}`;
          let yellowy: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,97,99,116,115,95,57,95,53,50,0),57], [String.fromCharCode(121,95,53,51,95,103,114,97,100,0),149]]);
         yingu %= Math.max(2, 1);
         yellowy = new Map([[`${yellowy.size}`, 1]]);
      sharemodal6 = "3";
   for (let w = 0; w < 2; w++) {
       let chatv: Array<any> = [String.fromCharCode(97,110,110,111,116,97,116,105,111,110,95,102,95,51,48,0), String.fromCharCode(116,105,103,103,108,101,95,110,95,54,51,0)];
       let libjsio = String.fromCharCode(100,95,51,54,95,100,114,97,119,108,105,110,101,0);
       let launchV = 0.0;
       let screenf = 0.0;
       let pauseW = false;
         screenf += parseFloat(`${1 / (Math.max(2, parseInt(`${screenf}`)))}`);
      if (5.85 < (screenf + 2.25) || (2.25 - screenf) < 5.5) {
         screenf *= (parseFloat(`${(pauseW ? 2 : 4) - parseInt(`${screenf}`)}`));
      }
          let calendarF: Array<any> = [String.fromCharCode(112,95,53,56,95,99,114,101,97,116,111,114,0), String.fromCharCode(103,95,51,49,95,102,111,117,114,99,99,115,0), String.fromCharCode(119,95,53,51,95,98,117,105,108,100,105,110,103,0)];
          let webviewG = String.fromCharCode(105,110,118,101,114,115,101,95,50,95,51,56,0);
          let livenodatabgimg4: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,116,101,115,116,95,49,95,56,49,0),String.fromCharCode(114,95,50,49,95,105,110,105,116,115,109,111,116,105,111,110,0)], [String.fromCharCode(120,95,55,52,95,103,100,97,116,97,0),String.fromCharCode(104,95,57,52,95,101,120,99,108,117,100,101,115,0)]]);
         chatv.push(2 * calendarF.length);
         calendarF = [livenodatabgimg4.size];
         webviewG += `${(String.fromCharCode(107,0) == webviewG ? livenodatabgimg4.size : webviewG.length)}`;
         launchV *= libjsio.length;
      for (let s = 0; s < 2; s++) {
         screenf /= Math.max((parseFloat(`${libjsio == String.fromCharCode(52,0) ? libjsio.length : (pauseW ? 4 : 2)}`)), 4);
      }
      if (pauseW) {
         screenf *= parseFloat(`${parseInt(`${launchV}`) | parseInt(`${screenf}`)}`);
      }
       let photoX = 5.0;
      while (3 > (parseInt(`${screenf}`) / (Math.max(6, chatv.length)))) {
         screenf += parseFloat(`${parseInt(`${launchV}`)}`);
         break;
      }
         photoX += 2 + parseInt(`${launchV}`);
      let exampleimaged = chatv.length >= 9844189;
      do {
         chatv.push(3 - parseInt(`${launchV}`));
         if (exampleimaged) {
            break;
         }
      } while ((4.27 == (screenf * 2.29)) && exampleimaged);
       let armva4 = String.fromCharCode(106,95,50,57,95,115,117,98,112,97,114,116,105,116,105,111,110,0);
      uploada += "1";
   }
   if (livenodatabgimgH == 5) {
      showF += `${temperatureA.length}`;
   }
      uploada = `${1 * parseInt(`${bootsplashY}`)}`;
      console.debug("not offline");

   let static_q8o = 5495818.0 <= iconusero;
   do {
      iconusero *= (parseFloat(`${sharemodal6 == String.fromCharCode(77,0) ? uploada.length : sharemodal6.length}`));
      if (static_q8o) {
         break;
      }
   } while ((4.68 == iconusero) && static_q8o);
   for (let n = 0; n < 3; n++) {
       let w_centerX: Map<any, any> = new Map([[String.fromCharCode(107,95,52,57,95,112,114,101,102,102,101,114,101,100,0),false ], [String.fromCharCode(103,95,55,57,95,115,118,97,114,105,110,116,0),true ], [String.fromCharCode(113,95,55,54,95,99,111,108,115,107,105,112,0),true ]]);
       let overU = String.fromCharCode(110,95,49,53,95,116,101,115,116,105,109,103,105,110,116,0);
         w_centerX = new Map([[`${w_centerX.size}`, (String.fromCharCode(112,0) == overU ? w_centerX.size : overU.length)]]);
         overU += `${overU.length}`;
      if ((4 - overU.length) < 3) {
          let greyo: Map<any, any> = new Map([[String.fromCharCode(114,95,55,55,95,99,108,101,97,114,98,105,116,0),336], [String.fromCharCode(106,95,51,95,111,102,102,108,111,97,100,0),624]]);
          let traminiu: Map<any, any> = new Map([[String.fromCharCode(99,97,109,101,108,95,121,95,55,50,0),248], [String.fromCharCode(99,95,51,55,95,100,114,97,119,97,98,108,101,115,0),53], [String.fromCharCode(115,95,55,49,95,112,117,115,104,98,97,99,107,0),965]]);
          let gpayB = 2.0;
          let s_unlockQ = 4.0;
         overU = `${overU.length | 1}`;
         greyo = new Map([[`${traminiu.size}`, greyo.size]]);
         traminiu.set(`${gpayB}`, 3 | parseInt(`${gpayB}`));
         s_unlockQ += parseFloat(`${parseInt(`${s_unlockQ}`)}`);
      }
          let file8 = 5.0;
          let zhuboG = 5;
          let promotionG = 4.0;
         w_centerX = new Map([[overU, (overU == String.fromCharCode(90,0) ? overU.length : parseInt(`${file8}`))]]);
         file8 -= zhuboG ^ 1;
         zhuboG >>= Math.min(3, Math.abs(zhuboG));
         promotionG += parseFloat(`${3}`);
      for (let u = 0; u < 1; u++) {
         overU = `${w_centerX.size}`;
      }
         overU += `${3 << (Math.min(1, overU.length))}`;
      showF = "2";
   }
       let actionsx: Array<any> = [51, 586, 618];
       let utilsv: Map<any, any> = new Map([[String.fromCharCode(116,95,49,50,95,103,114,111,119,0),false ], [String.fromCharCode(108,95,51,52,95,114,105,110,103,116,111,110,101,115,0),true ], [String.fromCharCode(118,97,108,105,100,95,109,95,51,53,0),true ]]);
       let classesS: Array<any> = [578, 821, 334];
      let crossf = classesS.length <= 7047239;
      do {
         classesS = [utilsv.size];
         if (crossf) {
            break;
         }
      } while (crossf && ((actionsx.length * 4) == 5));
         actionsx.push(1 + classesS.length);
      while ((5 & actionsx.length) == 2 || 5 == (actionsx.length & utilsv.size)) {
          let defaultprofilepicf = 4.0;
          let bgvipxvodC = 3.0;
          let unselectedk = 3;
          let gestureso: Map<any, any> = new Map([[String.fromCharCode(112,95,52,57,95,114,101,97,100,109,101,0),919], [String.fromCharCode(116,95,55,54,95,105,110,99,114,101,109,101,110,116,101,100,0),505], [String.fromCharCode(101,100,103,101,95,118,95,49,0),121]]);
          let inviteL = String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,53,95,55,51,0);
         utilsv.set(`${unselectedk}`, utilsv.size);
         defaultprofilepicf -= gestureso.size;
         bgvipxvodC /= Math.max(3, parseFloat(`${2 / (Math.max(parseInt(`${bgvipxvodC}`), 9))}`));
         unselectedk *= 3 >> (Math.min(3, Math.abs(gestureso.size)));
         inviteL = `${inviteL.length - 2}`;
         break;
      }
      if (2 >= (utilsv.size << (Math.min(2, actionsx.length))) && (actionsx.length << (Math.min(Math.abs(utilsv.size), 1))) >= 2) {
         actionsx.push(utilsv.size);
      }
      let loginR = utilsv.size >= 8997220;
      do {
         utilsv.set(`${classesS.length}`, classesS.length / (Math.max(2, 9)));
         if (loginR) {
            break;
         }
      } while (loginR && ((2 + classesS.length) >= 4));
      let leakcheckery = 9746871 <= utilsv.size;
      do {
          let libtanO = String.fromCharCode(114,97,112,105,100,95,50,95,53,48,0);
          let champion0: Map<any, any> = new Map([[String.fromCharCode(109,95,50,51,95,116,117,110,101,0),String.fromCharCode(98,95,54,54,95,97,98,115,116,114,97,99,116,0)], [String.fromCharCode(115,105,122,101,109,109,95,107,95,52,55,0),String.fromCharCode(114,101,97,108,108,121,95,55,95,50,50,0)], [String.fromCharCode(116,114,107,110,95,99,95,57,0),String.fromCharCode(99,108,97,115,115,101,115,95,114,95,57,48,0)]]);
         utilsv.set(libtanO, champion0.size);
         if (leakcheckery) {
            break;
         }
      } while (((1 >> (Math.min(1, Math.abs(utilsv.size)))) < 4 && 1 < (1 >> (Math.min(5, classesS.length)))) && leakcheckery);
      for (let l = 0; l < 2; l++) {
          let scheduleQ = String.fromCharCode(114,95,51,53,95,102,111,114,0);
          let penaltygoalT = 3;
          let crown3 = 2.0;
          let sinaf = 5.0;
         utilsv.set(`${actionsx.length}`, utilsv.size);
         scheduleQ = `${parseInt(`${crown3}`)}`;
         penaltygoalT &= 1 % (Math.max(8, parseInt(`${sinaf}`)));
         crown3 *= 3 >> (Math.min(Math.abs(penaltygoalT), 2));
         sinaf *= parseInt(`${sinaf}`);
      }
      for (let w = 0; w < 3; w++) {
         classesS.push(1 - classesS.length);
      }
          let inouttargetredu: Array<any> = [595, 122, 395];
          let traminiur = String.fromCharCode(99,95,52,55,95,105,110,115,116,97,108,108,0);
          let actions_ = 1;
         actionsx = [actionsx.length | utilsv.size];
         inouttargetredu.push((String.fromCharCode(82,0) == traminiur ? traminiur.length : actions_));
         actions_ &= (String.fromCharCode(79,0) == traminiur ? traminiur.length : inouttargetredu.length);
      bootsplashY /= Math.max(5, 2);
       let bingC: Map<any, any> = new Map([[String.fromCharCode(120,95,55,57,95,115,117,112,112,114,101,115,115,101,100,0),510], [String.fromCharCode(115,95,49,50,95,100,101,115,104,97,107,101,0),106]]);
      if ((bingC.size / 4) <= 4) {
         bingC = new Map([[`${bingC.size}`, 2 << (Math.min(1, Math.abs(bingC.size)))]]);
      }
          let updatesg = 1;
          let mapbuffer7 = 5;
         bingC = new Map([[`${updatesg}`, 2 * updatesg]]);
         mapbuffer7 &= 2;
         bingC = new Map([[`${bingC.size}`, bingC.size + 2]]);
      temperatureA += `${firebasea.length * 2}`;
      iconusero -= parseFloat(`${livenodatabgimgH >> (Math.min(Math.abs(3), 5))}`);
      fullW += `${parseInt(`${bootsplashY}`)}`;
   while (5 == (dependencyu & 2)) {
       let libfabricjni2 = 1.0;
       let macauS = 0.0;
       let activityC = 2.0;
       let pauseB: Map<any, any> = new Map([[String.fromCharCode(115,116,97,98,105,108,105,122,97,116,105,111,110,95,48,95,56,52,0),false ], [String.fromCharCode(115,101,118,101,114,105,116,121,95,98,95,52,0),false ], [String.fromCharCode(111,95,52,95,100,97,116,97,108,105,115,116,0),true ]]);
      let dependenciest = 5267177.0 >= macauS;
      do {
          let defaultlogoP = 1.0;
         macauS -= parseFloat(`${pauseB.size}`);
         defaultlogoP /= Math.max(parseInt(`${defaultlogoP}`) ^ parseInt(`${defaultlogoP}`), 1);
         if (dependenciest) {
            break;
         }
      } while ((macauS == activityC) && dependenciest);
         macauS += parseFloat(`${2}`);
         pauseB = new Map([[`${pauseB.size}`, pauseB.size & parseInt(`${activityC}`)]]);
         activityC *= parseInt(`${macauS}`) & 3;
          let libsentryL = String.fromCharCode(109,101,109,100,101,98,117,103,95,104,95,55,50,0);
          let predictionarrowo = String.fromCharCode(113,95,51,49,95,109,97,121,0);
          let downloading8 = 5.0;
         libfabricjni2 += pauseB.size + parseInt(`${macauS}`);
         libsentryL += `${(String.fromCharCode(121,0) == predictionarrowo ? parseInt(`${downloading8}`) : predictionarrowo.length)}`;
         downloading8 += parseInt(`${downloading8}`);
       let halffieldimageO: Array<any> = [String.fromCharCode(111,108,100,108,105,115,116,95,100,95,52,52,0), String.fromCharCode(117,95,50,51,95,119,105,114,101,0), String.fromCharCode(108,95,54,53,95,116,109,109,98,0)];
         activityC /= Math.max(2, 1 & halffieldimageO.length);
          let mutedL = 2;
         libfabricjni2 *= pauseB.size - parseInt(`${activityC}`);
         mutedL <<= Math.min(Math.abs(mutedL | 1), 4);
      for (let e = 0; e < 2; e++) {
         libfabricjni2 -= halffieldimageO.length;
      }
      for (let u = 0; u < 1; u++) {
         activityC *= parseInt(`${libfabricjni2}`);
      }
      while ((activityC + 3) < 1.26) {
         libfabricjni2 /= Math.max(1, 1 + parseInt(`${macauS}`));
         break;
      }
          let plusp = 0;
          let armvat = String.fromCharCode(102,105,108,101,95,97,95,56,51,0);
         halffieldimageO = [plusp];
         plusp ^= 2;
         armvat += `${2 | armvat.length}`;
      sharemodald = `${sharemodald.length - parseInt(`${activityC}`)}`;
      break;
   }
      return fetchVodDetails();
    }
  };

  const { data: vodDetails, isFetching: isFetchingVodDetails } = useQuery({
    queryKey: ["vodDetails", vod?.vod_id, isOffline],
    queryFn: () => handleFetchVodDetail(),
  });

  const fetchBannerAd = async () => {
       let plashh = true;
    let placeholderu = 2.0;
    let filledl: Array<any> = [400, 934, 652];
    let final_6xy = String.fromCharCode(107,95,51,54,95,97,115,121,110,99,100,105,115,112,108,97,121,107,105,116,0);
    let pingX = 2;
    let zhubo5 = 4.0;
    let rightz: Map<any, any> = new Map([[String.fromCharCode(112,95,54,50,95,117,112,103,114,97,100,101,0),935], [String.fromCharCode(107,95,52,48,95,109,98,109,111,100,101,0),78]]);
    let twitter7 = String.fromCharCode(116,116,97,100,115,112,95,106,95,53,57,0);
    let m_center0 = 3.0;
    let shareR = 5.0;
    let expired6 = String.fromCharCode(101,95,54,55,95,112,114,101,116,116,121,0);
    let sheet3 = 5;
    let aboutj = 4.0;
    let calendarW: Array<any> = [296, 135, 8];
    let sports8 = false;
      m_center0 += parseInt(`${shareR}`) & 2;
   if (4 == twitter7.length) {
       let benefita = String.fromCharCode(110,97,109,101,115,112,97,99,101,115,95,120,95,53,55,0);
       let shrink_ = String.fromCharCode(109,118,101,120,95,97,95,49,57,0);
       let register_79b = 0.0;
       let reactnavigations = 0.0;
       let stationt = true;
      if (reactnavigations > 3.95) {
         stationt = String.fromCharCode(52,0) == shrink_;
      }
         register_79b += parseInt(`${reactnavigations}`);
      if ((reactnavigations * parseFloat(`${shrink_.length}`)) == 2.28) {
          let progress9: Array<any> = [String.fromCharCode(112,105,120,100,101,115,99,95,112,95,53,56,0), String.fromCharCode(99,111,117,110,116,95,116,95,49,56,0)];
          let qnewinterstitialg = 3.0;
          let condensed4 = 0.0;
          let suggestiond = String.fromCharCode(111,110,101,111,102,115,95,50,95,53,56,0);
         shrink_ += `${shrink_.length ^ parseInt(`${condensed4}`)}`;
         progress9.push(1);
         qnewinterstitialg -= progress9.length;
         condensed4 /= Math.max(3, suggestiond.length | parseInt(`${qnewinterstitialg}`));
         suggestiond += `${(String.fromCharCode(68,0) == suggestiond ? suggestiond.length : progress9.length)}`;
      }
          let goalc = 4.0;
          let transfert: Array<any> = [146, 839];
          let imagesQ = 5.0;
         reactnavigations -= parseFloat(`${parseInt(`${goalc}`) - parseInt(`${imagesQ}`)}`);
         goalc -= parseFloat(`${2}`);
         transfert = [1];
      for (let b = 0; b < 1; b++) {
          let yellowL = 1.0;
         register_79b += ((stationt ? 4 : 4));
         yellowL *= parseFloat(`${parseInt(`${yellowL}`) / 1}`);
      }
         benefita += `${3 + parseInt(`${reactnavigations}`)}`;
      while (reactnavigations <= 4.49) {
         stationt = stationt || shrink_.length >= 17;
         break;
      }
          let libfbjniG: Map<any, any> = new Map([[String.fromCharCode(122,95,55,53,95,112,108,117,103,103,101,100,0),false ], [String.fromCharCode(105,108,101,97,118,101,95,111,95,52,0),false ], [String.fromCharCode(114,95,50,52,95,112,114,111,120,105,109,105,116,121,0),false ]]);
          let user0: Map<any, any> = new Map([[String.fromCharCode(98,117,102,95,56,95,50,55,0),String.fromCharCode(112,101,99,101,110,116,95,97,95,51,49,0)], [String.fromCharCode(100,95,49,52,95,115,117,98,112,114,111,99,101,115,115,0),String.fromCharCode(111,95,50,51,95,109,111,110,107,101,121,0)]]);
         stationt = libfbjniG.get(`${reactnavigations}`) == null;
         libfbjniG = new Map([[`${user0.size}`, user0.size * user0.size]]);
      if ((shrink_.length + register_79b) >= 5.10 && (5.10 + register_79b) >= 1.82) {
          let injuryr = String.fromCharCode(117,95,57,49,95,112,97,108,101,116,116,101,0);
          let vignette5: Map<any, any> = new Map([[String.fromCharCode(105,95,53,51,95,99,111,100,105,110,103,116,121,112,101,0),293], [String.fromCharCode(110,117,109,101,114,97,108,115,95,103,95,52,53,0),63]]);
          let dragcloseE = 1;
         shrink_ = `${parseInt(`${reactnavigations}`) | 2}`;
         injuryr = `${(String.fromCharCode(48,0) == injuryr ? injuryr.length : dragcloseE)}`;
         vignette5.set(injuryr, 2);
         dragcloseE -= (injuryr == String.fromCharCode(97,0) ? dragcloseE : injuryr.length);
      }
      while (benefita.startsWith(`${shrink_.length}`)) {
         shrink_ += `${(String.fromCharCode(85,0) == shrink_ ? parseInt(`${reactnavigations}`) : shrink_.length)}`;
         break;
      }
      let gdtadv9 = 9515575.0 >= register_79b;
      do {
          let libreactperfloggerjniY = true;
          let modelsn = 0;
          let resendK = String.fromCharCode(111,116,105,102,105,99,97,116,105,111,110,95,55,95,52,50,0);
          let albume: Map<any, any> = new Map([[String.fromCharCode(99,104,97,115,101,95,112,95,53,57,0),String.fromCharCode(117,110,115,111,108,118,101,100,95,57,95,56,56,0)], [String.fromCharCode(97,95,52,55,95,119,114,105,116,105,110,103,0),String.fromCharCode(98,108,117,114,114,101,100,95,106,95,56,48,0)], [String.fromCharCode(103,95,54,56,95,99,108,101,97,110,117,112,0),String.fromCharCode(122,95,48,95,100,101,99,111,109,112,0)]]);
          let pathe: Array<any> = [String.fromCharCode(108,95,56,53,95,101,120,116,101,116,110,100,101,100,0), String.fromCharCode(97,95,56,48,95,115,119,105,102,116,121,0)];
         register_79b *= resendK.length - 3;
         libreactperfloggerjniY = pathe.length >= 85;
         modelsn ^= 1 / (Math.max(5, modelsn));
         resendK += `${albume.size}`;
         albume = new Map([[`${albume.size}`, albume.size]]);
         pathe.push(3);
         if (gdtadv9) {
            break;
         }
      } while (gdtadv9 && (register_79b >= 1.26 && (1.26 - register_79b) >= 1.58));
         shrink_ += `${((stationt ? 4 : 4) + 2)}`;
         shrink_ += `${3 * parseInt(`${register_79b}`)}`;
          let x_hash7 = String.fromCharCode(119,101,101,107,100,97,121,95,97,95,49,48,48,0);
         register_79b *= x_hash7.length;
         reactnavigations += parseFloat(`${parseInt(`${register_79b}`) / (Math.max(parseInt(`${reactnavigations}`), 2))}`);
      pingX /= Math.max(1, 2);
   }
      twitter7 = `${filledl.length * 1}`;
   for (let c = 0; c < 1; c++) {
      twitter7 += `${parseInt(`${aboutj}`)}`;
   }
      aboutj += parseFloat(`${filledl.length & 1}`);
      aboutj += parseFloat(`${1 ^ parseInt(`${zhubo5}`)}`);
       let nterstitial8 = 0.0;
       let trasht: Array<any> = [969, 458];
       let hoverZ = false;
         trasht = [trasht.length];
      let mailS = trasht.length >= 5520417;
      do {
         trasht = [2];
         if (mailS) {
            break;
         }
      } while ((3 <= trasht.length) && mailS);
      while (1.96 == (nterstitial8 * 5.79)) {
         nterstitial8 -= (parseInt(`${nterstitial8}`) * (hoverZ ? 5 : 4));
         break;
      }
         hoverZ = trasht.includes(hoverZ);
         hoverZ = !hoverZ;
         nterstitial8 -= 3 << (Math.min(3, trasht.length));
      let dangerE = trasht.length >= 5742176;
      do {
         trasht = [trasht.length ^ parseInt(`${nterstitial8}`)];
         if (dangerE) {
            break;
         }
      } while (dangerE && ((trasht.length / (Math.max(8, nterstitial8))) <= 1.55));
         trasht = [trasht.length % (Math.max(1, 1))];
      if (4 <= (trasht.length / 1) && 1 <= (1 ^ trasht.length)) {
         nterstitial8 += 2;
      }
      sheet3 %= Math.max(twitter7.length, 2);

    const bannerRes = await wwLivenodatabgimg.getBannerAd(adultMode ? 113 : 112);
    const banner = bannerRes.ads;

      plashh = String.fromCharCode(107,0) == expired6;
   for (let o = 0; o < 1; o++) {
      rightz.set(expired6, twitter7.length & expired6.length);
   }
      m_center0 /= Math.max(2, 1 & parseInt(`${placeholderu}`));
      sheet3 /= Math.max(rightz.size & parseInt(`${zhubo5}`), 3);
      final_6xy = `${(3 % (Math.max(6, (plashh ? 4 : 3))))}`;
       let injuryC = 0.0;
       let dragcloseG: Array<any> = [153, 728];
         dragcloseG.push(parseInt(`${injuryC}`));
       let l_titlej = 5.0;
       let videojsJ = 2.0;
       let bggradient3 = 2.0;
      for (let f = 0; f < 1; f++) {
         injuryC *= dragcloseG.length << (Math.min(Math.abs(2), 5));
      }
      if ((l_titlej / (Math.max(4, 8))) >= 1.4) {
         videojsJ *= 2 % (Math.max(parseInt(`${l_titlej}`), 1));
      }
          let borderlessn: Array<any> = [934, 62, 427];
         bggradient3 -= parseFloat(`${parseInt(`${injuryC}`)}`);
         borderlessn = [2];
      rightz = new Map([[`${rightz.size}`, parseInt(`${injuryC}`) - rightz.size]]);
       let render_ = String.fromCharCode(115,95,53,54,95,115,117,98,114,101,115,117,108,116,0);
         render_ += `${render_.length & 1}`;
      while (!render_.startsWith(render_)) {
         render_ += `${(render_ == String.fromCharCode(81,0) ? render_.length : render_.length)}`;
         break;
      }
         render_ += `${(render_ == String.fromCharCode(100,0) ? render_.length : render_.length)}`;
      m_center0 -= expired6.length;

    if (banner) {

   while (expired6.length > 1 || twitter7 == String.fromCharCode(116,0)) {
      expired6 = `${1 / (Math.max(parseInt(`${m_center0}`), 5))}`;
      break;
   }
      m_center0 += pingX;
       let sansh = String.fromCharCode(101,120,112,114,95,57,95,50,0);
       let liveendmodallogoR: Array<any> = [750, 427, 57];
       let libavformatu = 5;
      let subsG = 5419910 >= sansh.length;
      do {
          let libreact4 = String.fromCharCode(97,115,110,95,118,95,55,53,0);
          let iconbellactiveD: Array<any> = [88, 520, 180];
          let forwardF = false;
          let sellX = false;
          let logind: Array<any> = [182, 305];
         sansh += `${((sellX ? 1 : 1) % (Math.max(libreact4.length, 3)))}`;
         libreact4 += "3";
         iconbellactiveD = [iconbellactiveD.length];
         forwardF = logind.length > 88;
         sellX = (((forwardF ? logind.length : 24) | logind.length) < 24);
         if (subsG) {
            break;
         }
      } while ((2 > libavformatu) && subsG);
      for (let q = 0; q < 3; q++) {
          let rewardvideoN = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,98,108,101,95,97,95,52,53,0);
         libavformatu %= Math.max(5, libavformatu);
         rewardvideoN += `${rewardvideoN.length | rewardvideoN.length}`;
      }
          let componentu = 0.0;
          let feedbacke = 2;
         sansh += `${libavformatu | feedbacke}`;
         componentu *= parseFloat(`${3 ^ parseInt(`${componentu}`)}`);
         feedbacke &= parseInt(`${componentu}`) - 2;
      for (let z = 0; z < 2; z++) {
         libavformatu /= Math.max(3, sansh.length << (Math.min(Math.abs(2), 1)));
      }
          let mbjscommonS = 3;
          let largebrightnessE = String.fromCharCode(110,111,116,105,102,105,101,115,95,122,95,50,0);
         liveendmodallogoR = [libavformatu];
         mbjscommonS -= (String.fromCharCode(88,0) == largebrightnessE ? largebrightnessE.length : mbjscommonS);
         sansh += `${libavformatu}`;
         liveendmodallogoR.push(3);
      let foregroundC = 9806865 >= liveendmodallogoR.length;
      do {
         liveendmodallogoR = [libavformatu];
         if (foregroundC) {
            break;
         }
      } while (foregroundC && ((2 << (Math.min(2, liveendmodallogoR.length))) < 1 || 5 < (liveendmodallogoR.length << (Math.min(Math.abs(2), 3)))));
       let libhermes4 = String.fromCharCode(116,111,107,101,110,115,95,101,95,57,54,0);
       let kickV = String.fromCharCode(98,97,111,98,97,98,95,52,95,55,53,0);
      zhubo5 *= 2 & parseInt(`${m_center0}`);
       let storei = 3.0;
         storei -= parseInt(`${storei}`) % (Math.max(parseInt(`${storei}`), 7));
          let imagenetworkerrS = 0.0;
          let libyogak = String.fromCharCode(105,100,102,97,95,56,95,57,57,0);
         storei -= 1;
         imagenetworkerrS /= Math.max(4, parseFloat(`${3 ^ libyogak.length}`));
         libyogak += `${libyogak.length + parseInt(`${imagenetworkerrS}`)}`;
      while ((storei + storei) > 3.17 || (3.17 + storei) > 3.100) {
         storei /= Math.max(parseInt(`${storei}`), 5);
         break;
      }
      expired6 += `${parseInt(`${zhubo5}`) ^ parseInt(`${aboutj}`)}`;
   if (sheet3 >= 5) {
      sheet3 -= pingX - 3;
   }
      sheet3 -= pingX ^ 1;
      plashh = 100 < rightz.size;
      setBannerAd(banner);
    } else {

   for (let f = 0; f < 1; f++) {
       let langD: Map<any, any> = new Map([[String.fromCharCode(102,108,97,99,100,115,112,95,119,95,51,54,0),480], [String.fromCharCode(115,95,56,52,95,109,117,108,116,105,112,108,101,114,0),582], [String.fromCharCode(116,95,50,54,95,103,101,115,116,117,114,101,0),405]]);
      for (let f = 0; f < 3; f++) {
         langD.set(`${langD.size}`, langD.size >> (Math.min(4, Math.abs(langD.size))));
      }
         langD.set(`${langD.size}`, 1);
         langD = new Map([[`${langD.size}`, langD.size - langD.size]]);
      pingX &= 3 >> (Math.min(Math.abs(parseInt(`${m_center0}`)), 3));
   }
   if (3 <= (pingX & 4)) {
      zhubo5 /= Math.max(4, sheet3);
   }
   for (let l = 0; l < 3; l++) {
       let sideP = true;
       let pingX6 = String.fromCharCode(114,117,101,95,49,95,50,48,0);
       let coreJ = false;
         pingX6 += "1";
          let buildv = String.fromCharCode(111,95,56,50,95,102,105,108,116,101,114,102,110,0);
          let benefitZ = false;
         coreJ = (!sideP ? benefitZ : sideP);
         buildv += `${buildv.length}`;
         benefitZ = buildv == buildv;
          let shirtE = 1;
          let holderR = 4.0;
         pingX6 += "2";
         shirtE /= Math.max(1, 3 & shirtE);
         holderR -= parseFloat(`${shirtE}`);
       let abidetect9 = false;
      if (!abidetect9 && 1 == pingX6.length) {
         abidetect9 = !sideP;
      }
         abidetect9 = !coreJ;
         coreJ = !abidetect9;
         pingX6 = `${pingX6.length >> (Math.min(Math.abs(2), 1))}`;
       let gcopy_y5d = 1.0;
       let goalm = 5.0;
      rightz.set(`${zhubo5}`, parseInt(`${zhubo5}`));
   }
   if (5.89 == zhubo5) {
       let directk = String.fromCharCode(104,95,57,51,95,110,101,118,101,114,0);
       let componentregistryQ = String.fromCharCode(97,117,100,105,116,105,110,103,95,48,95,57,0);
      let casto = directk.length <= 5405512;
      do {
         directk += `${directk.length << (Math.min(Math.abs(1), 2))}`;
         if (casto) {
            break;
         }
      } while (casto && (directk.length <= componentregistryQ.length));
      for (let r = 0; r < 1; r++) {
          let gradlewT: Array<any> = [String.fromCharCode(104,95,53,51,95,99,97,108,99,117,97,108,116,101,0), String.fromCharCode(109,101,116,97,108,95,51,95,52,53,0), String.fromCharCode(118,95,57,51,95,119,117,110,100,101,102,0)];
         componentregistryQ += `${(directk == String.fromCharCode(79,0) ? directk.length : gradlewT.length)}`;
      }
      for (let b = 0; b < 2; b++) {
         componentregistryQ += `${(componentregistryQ == String.fromCharCode(89,0) ? componentregistryQ.length : directk.length)}`;
      }
         componentregistryQ += `${1 / (Math.max(1, componentregistryQ.length))}`;
         componentregistryQ += `${(String.fromCharCode(121,0) == directk ? componentregistryQ.length : directk.length)}`;
         componentregistryQ = `${componentregistryQ.length << (Math.min(directk.length, 2))}`;
      shareR *= parseFloat(`${twitter7.length >> (Math.min(Math.abs(3), 2))}`);
   }
   if ((2 - filledl.length) <= 3) {
      filledl.push(3 / (Math.max(2, expired6.length)));
   }
      pingX -= parseInt(`${m_center0}`);
      m_center0 += parseInt(`${zhubo5}`) | rightz.size;
      setBannerAd(undefined);
    }
  };

  useEffect(() => {
    if (!isVip) {
      fetchBannerAd();
    }
  }, []);

  useEffect(() => {
    if (
      vod !== undefined &&
      vod !== null &&
      vodDetails !== undefined &&
      !adultMode
    ) {
      vod.vod_play_list = vodDetails.vod_play_list;
      vod.vod_play_url = vodDetails.vod_play_url;
      
      dispatch(playVod(vod, undefined, currentEpisode, currentSourceId));
    }

    const isRestricted = vodDetails?.vod_restricted === 1;

    if (isRestricted) {
      videoPlayerRef.current?.setPause(true);
      
      setTimeout(() => {
        setVodRestricted(isRestricted);
      }, 100);
    } else {
      setVodRestricted(isRestricted);
    }

    if (!!vod?.vodSourceId) {
      
      
      setCurrentSourceId(vod.vodSourceId);
    } else {
      
      
      setCurrentSourceId(vodDetails?.preferred_source_id);
    }

    

    if (
      vodDetails &&
      vodDetails.vod_sources &&
      vodDetails.vod_sources.length > 0
    ) {
      setVodSources(vodDetails.vod_sources);
      
      
    }
  }, [vodDetails]);

  const fetchVod = () => {
       let mbbannery: Array<any> = [530, 954, 634];
    let libffmpegkitj = String.fromCharCode(105,109,112,111,114,116,101,114,95,117,95,54,50,0);
    let predictionarrow7 = 0.0;
    let whistleorange7: Array<any> = [526, 560, 849];
    let tickv = false;
    let profileactiveo = 2.0;
    let nativeF: Array<any> = [863, 21, 758];
    let securityA = String.fromCharCode(116,95,51,57,95,115,101,110,100,109,98,117,102,0);
    let directH: Array<any> = [218, 85];
    let short_wjY: Map<any, any> = new Map([[String.fromCharCode(108,115,104,105,102,116,95,53,95,53,55,0),776], [String.fromCharCode(120,95,52,54,95,97,99,115,107,105,112,0),554]]);
    let reminderQ = String.fromCharCode(122,101,114,111,118,95,115,95,56,48,0);
    let pathq: Map<any, any> = new Map([[String.fromCharCode(115,95,52,51,95,100,113,117,111,116,101,0),String.fromCharCode(99,111,110,97,110,102,105,108,101,95,103,95,53,53,0)], [String.fromCharCode(109,95,54,56,95,104,111,108,101,0),String.fromCharCode(111,95,52,51,95,104,113,100,110,100,0)]]);
   if (2 < (directH.length >> (Math.min(Math.abs(1), 5))) && (short_wjY.size >> (Math.min(Math.abs(1), 2))) < 2) {
      short_wjY = new Map([[`${directH.length}`, directH.length]]);
   }
   let stringz = 5852406 <= mbbannery.length;
   do {
      mbbannery.push(nativeF.length | 3);
      if (stringz) {
         break;
      }
   } while (((short_wjY.size | 3) >= 2 && (short_wjY.size | 3) >= 2) && stringz);
   let graphicsP = String.fromCharCode(112,48,120,100,101,0) == securityA;
   do {
      securityA += "3";
      if (graphicsP) {
         break;
      }
   } while ((!securityA.includes(`${short_wjY.size}`)) && graphicsP);
       let turndowni: Map<any, any> = new Map([[String.fromCharCode(109,101,100,105,97,95,117,95,55,55,0),String.fromCharCode(97,99,111,109,112,114,101,115,115,111,114,95,51,95,54,54,0)], [String.fromCharCode(102,95,54,48,95,112,98,107,100,102,0),String.fromCharCode(117,116,117,114,101,95,115,95,55,57,0)], [String.fromCharCode(122,95,52,57,95,97,108,112,104,97,0),String.fromCharCode(111,117,116,108,105,110,101,95,122,95,50,53,0)]]);
       let rncoreh = String.fromCharCode(97,112,112,114,111,120,95,48,95,54,56,0);
         turndowni.set(`${rncoreh}`, 3 ^ rncoreh.length);
      if (turndowni.size < 2) {
         turndowni.set(`${rncoreh}`, (rncoreh == String.fromCharCode(49,0) ? turndowni.size : rncoreh.length));
      }
         rncoreh += `${rncoreh.length}`;
         rncoreh += `${turndowni.size * 3}`;
         rncoreh = `${rncoreh.length}`;
         rncoreh = `${3 >> (Math.min(3, rncoreh.length))}`;
      securityA = `${rncoreh.length}`;
   let runtimeZ = 6118650 >= libffmpegkitj.length;
   do {
      libffmpegkitj = "1";
      if (runtimeZ) {
         break;
      }
   } while (runtimeZ && (2 == (libffmpegkitj.length ^ 3)));
      securityA = `${parseInt(`${predictionarrow7}`) | short_wjY.size}`;

    return wwIconedit.getList({
      category: vod?.vod_class?.split(",").shift(),
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
    }).then((data) => {

   while (2 > short_wjY.size) {
      short_wjY = new Map([[`${short_wjY.size}`, 3]]);
      break;
   }
      predictionarrow7 += 2;
      nativeF = [reminderQ.length * 3];
   while ((profileactiveo / 1.75) <= 3.65) {
      profileactiveo -= securityA.length >> (Math.min(2, directH.length));
      break;
   }
   while (profileactiveo == 4.33) {
      predictionarrow7 *= 3;
      break;
   }
   for (let h = 0; h < 1; h++) {
      whistleorange7 = [reminderQ.length];
   }
      return data.List as wwProfileinactiveBrightness[];
    })
  };

  useEffect(() => {
    currentEpisodeRef.current = vod?.episodeWatched;
    currentTimeRef.current = vod?.timeWatched;
    console.log("vod change");
    setCurrentEpisode(
      vod?.episodeWatched === undefined ? 0 : vod.episodeWatched
    );
    setCurrentSourceId(vod?.vodSourceId);
  }, [vod]);

  const {
    data: suggestedVods,
    isFetching: isFetchingSuggestedVod,
    refetch,
  } = useQuery({
    queryKey: ["relatedVods", vod],
    queryFn: () => fetchVod(),
    enabled: !isOffline,
  });

  const fetchSVod = () =>
    wwIconedit.getList({

      vod_source_name: vod?.vod_source_name,
      category: vod?.vod_class ? vod?.vod_class : vod?.type_name,
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
      rand: 1,
      xMode: true,
    }).then((data) => data.List as wwCenterPlay[]);

  const {
    data: suggestedSVods,
    isFetching: isFetchingSuggestedSVod,
    refetchSvod,
  } = useQuery({
    queryKey: ["relatedSVods", vod],
    queryFn: () => fetchSVod(),
    enabled: !isOffline,
  });

  const [deviceName, setDeviceName] = useState("");

  DeviceInfo.getDeviceName().then((d) => {
    setDeviceName(d.toLowerCase());
  });

  useEffect(() => {
    Dimensions.addEventListener("change", (e) => {
      const includesKeywords = [
        "flip",
        "fold",
        "mate x3",
        "mate xs",
      ].some((keyword) => deviceName.includes(keyword));

      if (DeviceInfo.isTablet() || includesKeywords) {
        setIsLoading(true);

        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      }
    });
  }, []);

  const handleRefresh = useCallback(async () => {
       let trophyG = String.fromCharCode(109,97,116,99,104,101,100,95,51,95,54,54,0);
    let armvav = 2.0;
    let weathert = String.fromCharCode(109,117,108,116,105,115,105,103,95,57,95,55,56,0);
    let anytimeb = String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,95,110,95,50,50,0);
    let libfbjniZ = 1.0;
    let humidityb = String.fromCharCode(119,95,54,56,95,109,115,109,112,101,103,118,0);
    let telegramp = String.fromCharCode(119,95,55,48,95,112,111,115,116,0);
    let abidetectl = String.fromCharCode(112,105,120,108,101,116,95,121,95,53,57,0);
    let webviewb = String.fromCharCode(99,95,57,56,95,97,114,98,105,116,101,114,0);
    let shirtq: Map<any, any> = new Map([[String.fromCharCode(100,95,55,50,95,99,97,99,104,101,100,0),766], [String.fromCharCode(119,97,118,101,95,120,95,56,57,0),924]]);
    let subso = String.fromCharCode(106,95,56,56,95,115,117,98,116,114,97,99,116,109,111,100,0);
   while (anytimeb != String.fromCharCode(49,0)) {
      humidityb += `${humidityb.length}`;
      break;
   }
      humidityb = `${3 + weathert.length}`;
       let vignetteg = 3;
       let webview9 = 1.0;
       let fastforwardm = String.fromCharCode(116,108,101,110,95,54,95,49,48,48,0);
      for (let m = 0; m < 3; m++) {
         fastforwardm = `${parseInt(`${webview9}`) | 1}`;
      }
      while (2 <= (fastforwardm.length & 5) && (5 & vignetteg) <= 3) {
         fastforwardm = `${parseInt(`${webview9}`)}`;
         break;
      }
          let jingdongn = false;
          let graphF = String.fromCharCode(108,105,98,115,119,114,101,115,97,109,112,108,101,95,115,95,54,49,0);
          let stringsc = String.fromCharCode(110,95,57,48,95,121,101,97,114,0);
         fastforwardm = "3";
         jingdongn = !jingdongn;
         graphF = `${(stringsc == String.fromCharCode(69,0) ? (jingdongn ? 1 : 5) : stringsc.length)}`;
      if ((fastforwardm.length / (Math.max(1, 2))) <= 3) {
          let constants1: Array<any> = [448, 175, 443];
          let successE = 2.0;
          let yellowanimationliveY = String.fromCharCode(119,101,108,115,101,110,99,95,103,95,54,50,0);
          let chinasame_ = 5;
         webview9 -= chinasame_;
         constants1 = [(yellowanimationliveY == String.fromCharCode(122,0) ? parseInt(`${successE}`) : yellowanimationliveY.length)];
         successE -= parseFloat(`${constants1.length}`);
      }
      while (vignetteg < 5) {
          let signinupN = 5.0;
         webview9 /= Math.max(2, (String.fromCharCode(115,0) == fastforwardm ? fastforwardm.length : vignetteg));
         signinupN /= Math.max(parseFloat(`${parseInt(`${signinupN}`) >> (Math.min(5, Math.abs(3)))}`), 4);
         break;
      }
          let castv = 1;
          let logoutq = String.fromCharCode(112,95,52,53,95,114,101,97,100,113,0);
          let libjsijniprofilerl = String.fromCharCode(111,114,100,101,114,105,110,103,95,52,95,51,48,0);
         webview9 -= logoutq.length - 2;
         castv += 1;
         logoutq = "2";
         libjsijniprofilerl = `${2 << (Math.min(3, Math.abs(castv)))}`;
         fastforwardm = `${(fastforwardm == String.fromCharCode(54,0) ? fastforwardm.length : parseInt(`${webview9}`))}`;
      for (let q = 0; q < 3; q++) {
          let const_9_0 = 4;
          let awayteamfieldh = false;
          let gesturesO = String.fromCharCode(99,111,100,101,99,99,116,108,95,108,95,51,55,0);
         webview9 /= Math.max(3 & vignetteg, 4);
         const_9_0 <<= Math.min(Math.abs(gesturesO.length / 2), 2);
         awayteamfieldh = awayteamfieldh || const_9_0 <= 51;
         gesturesO += `${gesturesO.length}`;
      }
      let shielddone6 = webview9 >= 5138794.0;
      do {
         webview9 += vignetteg;
         if (shielddone6) {
            break;
         }
      } while (shielddone6 && (fastforwardm.startsWith(`${webview9}`)));
      abidetectl += `${2 + weathert.length}`;
       let fcdaebecbcbafcdfceaaeccfeacdba = String.fromCharCode(112,114,111,118,105,100,101,100,95,110,95,50,52,0);
       let selected9 = String.fromCharCode(107,95,49,51,95,100,105,115,99,111,118,101,114,0);
      for (let b = 0; b < 3; b++) {
         selected9 += "3";
      }
         fcdaebecbcbafcdfceaaeccfeacdba += `${selected9.length}`;
      if (selected9 != fcdaebecbcbafcdfceaaeccfeacdba) {
         fcdaebecbcbafcdfceaaeccfeacdba = "3";
      }
       let gesturesr = false;
          let mathc = 0.0;
         selected9 += `${(1 & (gesturesr ? 2 : 4))}`;
         mathc -= parseFloat(`${parseInt(`${mathc}`) + parseInt(`${mathc}`)}`);
         selected9 += "2";
      webviewb = "3";
   if (!humidityb.includes(`${webviewb.length}`)) {
       let langkeyo = true;
       let statisticsinactivez = 1.0;
       let checkboxb = true;
      while (langkeyo && checkboxb) {
         checkboxb = statisticsinactivez > 78.60;
         break;
      }
      if (statisticsinactivez == 1.42 || 5.15 == (1.42 / (Math.max(5, statisticsinactivez)))) {
          let selectedH = 5.0;
          let turnS = String.fromCharCode(114,101,119,114,105,116,116,101,110,95,116,95,57,50,0);
          let reactnativejsK: Array<any> = [54, 59];
          let mountingR: Map<any, any> = new Map([[String.fromCharCode(99,95,49,57,95,100,97,116,97,115,116,111,114,101,0),String.fromCharCode(122,95,55,48,95,102,114,97,109,101,114,0)], [String.fromCharCode(100,105,102,102,101,114,101,110,99,101,95,119,95,57,53,0),String.fromCharCode(101,95,57,57,95,115,121,110,99,104,114,111,110,105,122,101,100,0)]]);
          let leaguew: Array<any> = [693, 788];
         langkeyo = mountingR.size > 92;
         selectedH += reactnativejsK.length;
         turnS += `${1 & leaguew.length}`;
         reactnativejsK = [parseInt(`${selectedH}`) + 3];
         mountingR = new Map([[`${reactnativejsK.length}`, (turnS == String.fromCharCode(73,0) ? turnS.length : reactnativejsK.length)]]);
         leaguew = [parseInt(`${selectedH}`) / (Math.max(turnS.length, 10))];
      }
      while (checkboxb) {
          let updatesz = String.fromCharCode(108,101,118,105,110,115,111,110,95,122,95,50,52,0);
          let usernameL = String.fromCharCode(112,95,52,49,95,115,116,97,114,116,114,101,101,0);
          let textinputv: Array<any> = [950, 343];
          let telegramF = String.fromCharCode(120,102,111,114,109,95,101,95,49,51,0);
         checkboxb = 47 < telegramF.length;
         updatesz = `${textinputv.length | 1}`;
         usernameL = `${updatesz.length}`;
         textinputv.push((String.fromCharCode(71,0) == usernameL ? textinputv.length : usernameL.length));
         telegramF = `${textinputv.length / (Math.max(3, 4))}`;
         break;
      }
         statisticsinactivez -= (parseFloat(`${(checkboxb ? 3 : 2) / (Math.max(parseInt(`${statisticsinactivez}`), 3))}`));
          let constantsB = 5.0;
          let mbridgel: Array<any> = [179, 138, 314];
         statisticsinactivez *= (parseFloat(`${parseInt(`${constantsB}`) - (checkboxb ? 5 : 4)}`));
         constantsB *= mbridgel.length;
         mbridgel.push(2);
          let interstitialG = 2.0;
          let eyeopenr = String.fromCharCode(115,116,111,112,95,122,95,52,48,0);
         checkboxb = 79 == eyeopenr.length;
         interstitialG += parseInt(`${interstitialG}`) & parseInt(`${interstitialG}`);
         eyeopenr = `${parseInt(`${interstitialG}`)}`;
         langkeyo = !langkeyo;
         checkboxb = (checkboxb ? !langkeyo : checkboxb);
      while (!checkboxb) {
         langkeyo = statisticsinactivez > 1.93;
         break;
      }
      humidityb += `${parseInt(`${statisticsinactivez}`) + 3}`;
   }
      trophyG = `${weathert.length * abidetectl.length}`;
      shirtq.set(`${armvav}`, humidityb.length << (Math.min(5, Math.abs(parseInt(`${armvav}`)))));
   if (telegramp.length < 4) {
      abidetectl += `${2 | trophyG.length}`;
   }
      weathert += `${humidityb.length}`;
   for (let r = 0; r < 1; r++) {
       let penaltygoal_ = 4.0;
       let dragk: Map<any, any> = new Map([[String.fromCharCode(111,95,50,51,95,115,99,97,108,101,115,0),String.fromCharCode(114,101,99,111,114,100,110,105,110,103,95,55,95,51,51,0)], [String.fromCharCode(106,95,49,54,95,99,111,108,108,97,112,115,101,100,0),String.fromCharCode(121,95,53,56,95,111,112,101,110,101,100,0)], [String.fromCharCode(114,97,100,97,114,95,54,95,54,50,0),String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,110,103,95,56,95,55,50,0)]]);
       let bodanx: Array<any> = [443, 504];
       let handlerD = String.fromCharCode(118,95,57,50,95,103,101,116,115,111,99,107,97,100,100,114,0);
      for (let y = 0; y < 2; y++) {
          let whistleorangen = true;
         bodanx = [2 ^ parseInt(`${penaltygoal_}`)];
         whistleorangen = !whistleorangen;
      }
         handlerD = `${parseInt(`${penaltygoal_}`) % (Math.max(handlerD.length, 10))}`;
      while (Array.from(dragk.values()).includes(penaltygoal_)) {
         dragk = new Map([[handlerD, handlerD.length]]);
         break;
      }
         penaltygoal_ /= Math.max(parseInt(`${penaltygoal_}`) + 2, 2);
      if (dragk.size >= 1) {
         handlerD = `${parseInt(`${penaltygoal_}`) ^ dragk.size}`;
      }
         bodanx.push(bodanx.length);
          let stations1 = String.fromCharCode(114,95,56,55,95,99,117,116,101,115,116,0);
         bodanx = [2 & dragk.size];
         stations1 += "2";
          let refreshj = 5;
         dragk.set(`${refreshj}`, dragk.size);
      if (dragk.get(`${penaltygoal_}`) != null) {
          let trophy1: Array<any> = [594, 762];
          let commentd: Map<any, any> = new Map([[String.fromCharCode(109,95,55,55,95,99,108,117,98,0),362], [String.fromCharCode(117,116,118,105,100,101,111,100,115,112,95,97,95,51,53,0),866], [String.fromCharCode(116,95,53,50,95,100,111,119,110,108,111,97,100,0),17]]);
          let upgradeq = true;
          let subbasketballplayerP = true;
          let yellowb = String.fromCharCode(101,95,56,56,95,112,117,98,108,105,99,107,101,121,115,0);
         penaltygoal_ += 1 & handlerD.length;
         trophy1.push(3 + yellowb.length);
         commentd = new Map([[`${trophy1.length}`, 1]]);
         upgradeq = commentd.get(`${subbasketballplayerP}`) != null;
         subbasketballplayerP = 22 > commentd.size;
         yellowb += `${commentd.size * 1}`;
      }
          let goale: Map<any, any> = new Map([[String.fromCharCode(101,110,100,105,97,110,110,101,115,115,95,107,95,52,51,0),35], [String.fromCharCode(119,95,55,49,95,115,121,109,0),140], [String.fromCharCode(103,101,116,99,114,101,100,95,103,95,54,53,0),771]]);
          let close4 = 2.0;
         bodanx.push(bodanx.length ^ 1);
         goale.set(`${close4}`, 1);
         close4 -= parseInt(`${close4}`);
      let playZ = dragk.size <= 7079394;
      do {
          let leftF = String.fromCharCode(102,114,97,109,101,115,101,116,116,101,114,95,104,95,56,50,0);
          let debugK = 1;
          let dialogs = String.fromCharCode(98,111,111,107,109,97,114,107,95,51,95,54,50,0);
          let progress6 = String.fromCharCode(102,97,110,111,117,116,95,50,95,57,53,0);
         dragk = new Map([[leftF, (String.fromCharCode(117,0) == leftF ? leftF.length : debugK)]]);
         debugK ^= (progress6 == String.fromCharCode(85,0) ? dialogs.length : progress6.length);
         dialogs += "2";
         if (playZ) {
            break;
         }
      } while ((handlerD.startsWith(`${dragk.size}`)) && playZ);
      while (handlerD.startsWith(`${dragk.size}`)) {
         dragk.set(`${bodanx.length}`, bodanx.length & 1);
         break;
      }
      anytimeb = "2";
   }

    

   while ((shirtq.size - 2) > 2 && 2 > (shirtq.size - parseInt(`${libfbjniZ}`))) {
      libfbjniZ *= parseInt(`${armvav}`) & weathert.length;
      break;
   }
      weathert = `${anytimeb.length & telegramp.length}`;
   if (3 <= weathert.length) {
      weathert += `${(webviewb == String.fromCharCode(54,0) ? shirtq.size : webviewb.length)}`;
   }
   for (let r = 0; r < 2; r++) {
       let page5 = String.fromCharCode(115,121,109,95,111,95,49,0);
       let singapored = false;
       let ajaxH = 2;
       let build8 = String.fromCharCode(107,95,49,57,95,100,105,115,116,105,110,99,116,0);
      while (2 == (5 ^ build8.length)) {
         build8 += `${(String.fromCharCode(68,0) == page5 ? ajaxH : page5.length)}`;
         break;
      }
         build8 += `${ajaxH}`;
       let carouselt: Array<any> = [734, 996];
          let currenta: Array<any> = [528, 87];
          let loginP: Array<any> = [631, 929];
         ajaxH /= Math.max(1, (String.fromCharCode(101,0) == page5 ? ajaxH : page5.length));
         currenta = [currenta.length << (Math.min(Math.abs(1), 2))];
         loginP = [currenta.length & loginP.length];
      while (build8.length <= 2) {
          let update_bvo = 4.0;
          let whitetick1 = false;
          let combineJ = String.fromCharCode(100,101,99,111,114,95,50,95,51,51,0);
          let sendB = 1.0;
         build8 = `${(combineJ == String.fromCharCode(50,0) ? combineJ.length : (whitetick1 ? 1 : 4))}`;
         update_bvo /= Math.max(4, parseFloat(`${3 | parseInt(`${update_bvo}`)}`));
         whitetick1 = sendB > update_bvo;
         sendB /= Math.max(3, 2 / (Math.max(parseInt(`${sendB}`), 9)));
         break;
      }
      while (singapored && 5 > build8.length) {
          let castg = String.fromCharCode(102,95,56,53,95,104,119,97,99,99,101,108,0);
         singapored = 29 > build8.length || page5.length > 29;
         castg += `${castg.length}`;
         break;
      }
      for (let b = 0; b < 3; b++) {
         singapored = 100 <= ajaxH;
      }
      for (let v = 0; v < 1; v++) {
         build8 = `${3 / (Math.max(10, page5.length))}`;
      }
      if (build8.length == 3 || singapored) {
          let fast_ = 2.0;
          let profileframel = 4;
          let textinputV = 2;
          let unticky = true;
          let sourcek: Array<any> = [String.fromCharCode(112,101,114,102,111,114,109,97,110,99,101,95,52,95,51,50,0), String.fromCharCode(109,95,51,56,95,103,101,116,99,114,101,100,0)];
         build8 += `${(page5.length ^ (unticky ? 5 : 3))}`;
         fast_ /= Math.max(4, profileframel ^ 1);
         profileframel &= sourcek.length * 2;
         textinputV += sourcek.length;
         unticky = fast_ > 62.27;
      }
          let googleD = String.fromCharCode(98,105,116,112,108,97,110,101,95,122,95,52,54,0);
          let binddatasS = 2.0;
         ajaxH >>= Math.min(Math.abs(ajaxH), 2);
         googleD += `${googleD.length << (Math.min(1, Math.abs(parseInt(`${binddatasS}`))))}`;
         binddatasS /= Math.max(2 << (Math.min(1, Math.abs(parseInt(`${binddatasS}`)))), 3);
       let playx = String.fromCharCode(99,111,108,114,97,109,95,118,95,56,54,0);
      let albumi = 9170407 <= ajaxH;
      do {
         ajaxH %= Math.max(4, page5.length);
         if (albumi) {
            break;
         }
      } while (((1 * ajaxH) < 1) && albumi);
      weathert = `${ajaxH / (Math.max(abidetectl.length, 5))}`;
   }
      webviewb += `${humidityb.length | trophyG.length}`;
      trophyG += `${telegramp.length & 1}`;
      weathert += `${parseInt(`${armvav}`)}`;
   let delegate_nkn = 9396634 <= humidityb.length;
   do {
       let specn: Array<any> = [444, 921];
       let l_titlee = 4.0;
      while (!specn.includes(l_titlee)) {
         specn.push(parseInt(`${l_titlee}`) >> (Math.min(specn.length, 5)));
         break;
      }
         specn.push(parseInt(`${l_titlee}`) ^ 3);
      while (1.72 < (l_titlee - 2.46) && 3.25 < (l_titlee - 2.46)) {
          let shielddoneO = 3.0;
          let middlebrightnesso: Array<any> = [596, 91];
          let langkeyp: Map<any, any> = new Map([[String.fromCharCode(98,95,53,52,95,105,110,118,111,99,97,116,105,111,110,0),392], [String.fromCharCode(102,111,114,109,95,49,95,56,50,0),654]]);
          let iconshare_ = String.fromCharCode(99,111,109,112,108,101,116,105,111,110,115,95,98,95,53,55,0);
          let refresh9 = 5.0;
         specn = [parseInt(`${shielddoneO}`)];
         middlebrightnesso.push(2 >> (Math.min(4, middlebrightnesso.length)));
         langkeyp = new Map([[`${langkeyp.size}`, langkeyp.size]]);
         iconshare_ += `${middlebrightnesso.length}`;
         refresh9 -= parseFloat(`${middlebrightnesso.length}`);
         break;
      }
      let time__I = 5697254 >= specn.length;
      do {
          let libreactnativejniE = String.fromCharCode(109,117,120,101,114,95,114,95,52,49,0);
          let left2 = 5;
          let combine_ = 2.0;
          let modaln = String.fromCharCode(114,101,119,97,114,100,115,95,103,95,52,50,0);
         specn = [parseInt(`${combine_}`)];
         libreactnativejniE = `${left2 ^ 3}`;
         left2 <<= Math.min(5, Math.abs((String.fromCharCode(90,0) == libreactnativejniE ? libreactnativejniE.length : left2)));
         combine_ -= left2 & modaln.length;
         modaln += `${2 + modaln.length}`;
         if (time__I) {
            break;
         }
      } while ((1 > (5 | specn.length)) && time__I);
      for (let n = 0; n < 1; n++) {
         specn = [parseInt(`${l_titlee}`) / 3];
      }
       let final_die = String.fromCharCode(118,95,54,57,95,101,110,99,111,100,101,102,114,97,109,101,0);
      humidityb += `${telegramp.length / (Math.max(9, abidetectl.length))}`;
      if (delegate_nkn) {
         break;
      }
   } while (delegate_nkn && (5.15 <= (humidityb.length * armvav)));
       let downarrowb = String.fromCharCode(114,95,50,55,95,110,97,118,105,103,97,116,105,111,110,98,97,114,0);
       let selectr = 5.0;
       let iconmoreB = String.fromCharCode(121,95,51,56,95,101,120,116,114,97,99,116,101,100,0);
          let gdtadvQ = 5;
         downarrowb = `${3 / (Math.max(3, parseInt(`${selectr}`)))}`;
         gdtadvQ *= 2 & gdtadvQ;
         iconmoreB += `${downarrowb.length + 1}`;
      while (4 <= (2 >> (Math.min(5, downarrowb.length)))) {
          let playV = false;
          let gradleW: Array<any> = [String.fromCharCode(109,97,107,101,95,114,95,57,54,0), String.fromCharCode(110,95,50,57,95,99,111,114,100,0)];
          let rewardvideoM = String.fromCharCode(122,95,50,52,95,112,114,101,100,114,97,119,110,0);
          let customx = true;
          let launcherQ = String.fromCharCode(99,95,54,48,95,121,99,98,99,114,0);
         selectr *= downarrowb.length + 2;
         playV = 22 <= launcherQ.length;
         gradleW.push(gradleW.length);
         rewardvideoM = `${(3 + (customx ? 5 : 5))}`;
         customx = playV;
         launcherQ = `${3 + rewardvideoM.length}`;
         break;
      }
      if (4 == iconmoreB.length) {
         downarrowb = `${downarrowb.length / (Math.max(3, 3))}`;
      }
      while (selectr == 3.24) {
         iconmoreB += "2";
         break;
      }
      while (4 >= (downarrowb.length - 3) && (3 - downarrowb.length) >= 4) {
         downarrowb = `${parseInt(`${selectr}`)}`;
         break;
      }
      for (let t = 0; t < 2; t++) {
          let popupw = 0;
          let libreactperfloggerjnig = 3.0;
          let selectionE = 3.0;
          let dialogY: Map<any, any> = new Map([[String.fromCharCode(105,95,55,51,95,112,97,114,115,101,100,0),String.fromCharCode(101,95,52,55,95,115,99,114,101,101,110,99,97,115,116,0)], [String.fromCharCode(110,95,56,54,0),String.fromCharCode(110,95,55,56,0)], [String.fromCharCode(102,97,107,101,95,116,95,55,51,0),String.fromCharCode(100,95,56,50,95,108,111,99,107,110,101,115,115,0)]]);
         downarrowb = `${1 ^ dialogY.size}`;
         popupw &= 3;
         libreactperfloggerjnig /= Math.max(parseFloat(`${parseInt(`${libreactperfloggerjnig}`) / 2}`), 4);
         selectionE *= parseInt(`${libreactperfloggerjnig}`);
         dialogY = new Map([[`${libreactperfloggerjnig}`, parseInt(`${libreactperfloggerjnig}`)]]);
      }
          let libavdeviceP = false;
          let p_hash_ = String.fromCharCode(114,101,109,111,118,97,108,95,122,95,57,54,0);
          let huaweia = String.fromCharCode(102,105,108,108,105,110,103,95,120,95,54,55,0);
         selectr /= Math.max(2, (String.fromCharCode(85,0) == downarrowb ? downarrowb.length : parseInt(`${selectr}`)));
         libavdeviceP = (93 < ((libavdeviceP ? huaweia.length : 93) << (Math.min(huaweia.length, 1))));
         p_hash_ = `${(huaweia == String.fromCharCode(85,0) ? (libavdeviceP ? 1 : 1) : huaweia.length)}`;
       let nbatrophyI: Array<any> = [98, 530, 332];
       let apps6: Array<any> = [555, 376, 835];
      weathert = `${(String.fromCharCode(89,0) == weathert ? parseInt(`${libfbjniZ}`) : weathert.length)}`;
   for (let p = 0; p < 1; p++) {
      humidityb = `${abidetectl.length | 2}`;
   }
    await refetch();

   for (let n = 0; n < 1; n++) {
      trophyG += `${abidetectl.length >> (Math.min(weathert.length, 2))}`;
   }
   for (let o = 0; o < 3; o++) {
      abidetectl = `${parseInt(`${libfbjniZ}`)}`;
   }
      libfbjniZ /= Math.max(2, 2);
      webviewb += `${parseInt(`${libfbjniZ}`)}`;
   if ((libfbjniZ / (Math.max(anytimeb.length, 1))) <= 2.48 || (libfbjniZ / 2.48) <= 5.95) {
      anytimeb += "3";
   }
   let lighty = libfbjniZ <= 7990048.0;
   do {
      libfbjniZ *= trophyG.length + 3;
      if (lighty) {
         break;
      }
   } while ((2.62 > (libfbjniZ / (Math.max(10, armvav))) || (2.62 / (Math.max(7, libfbjniZ))) > 4.35) && lighty);
   let selectedo = String.fromCharCode(50,120,120,111,49,118,0) == trophyG;
   do {
      trophyG += `${shirtq.size ^ webviewb.length}`;
      if (selectedo) {
         break;
      }
   } while ((trophyG.length == telegramp.length) && selectedo);
      libfbjniZ -= telegramp.length;
   while (humidityb.length >= anytimeb.length) {
      humidityb = `${telegramp.length / (Math.max(8, parseInt(`${libfbjniZ}`)))}`;
      break;
   }
   if (abidetectl != String.fromCharCode(73,0) && 5 > weathert.length) {
      weathert += `${humidityb.length / (Math.max(2, parseInt(`${libfbjniZ}`)))}`;
   }
    

      weathert += `${humidityb.length & 1}`;
      shirtq = new Map([[`${armvav}`, parseInt(`${armvav}`) >> (Math.min(abidetectl.length, 2))]]);
      libfbjniZ *= webviewb.length;
      weathert += `${abidetectl.length << (Math.min(1, anytimeb.length))}`;
      telegramp = `${(String.fromCharCode(107,0) == abidetectl ? abidetectl.length : shirtq.size)}`;
      humidityb = `${parseInt(`${armvav}`)}`;
      libfbjniZ += 1 / (Math.max(2, parseInt(`${armvav}`)));
   if (weathert != String.fromCharCode(81,0)) {
      trophyG += `${1 << (Math.min(1, trophyG.length))}`;
   }
   for (let v = 0; v < 2; v++) {
      humidityb += `${anytimeb.length}`;
   }
      anytimeb = `${webviewb.length + anytimeb.length}`;
    return;
  }, []);

  const saveVodToHistory = (vod: any) => {
    
    dispatch(
      addVodToHistory(
        vod,
        currentTimeRef.current,
        currentEpisodeRef.current,
        adultMode,
        currentSourceId
      )
    );
    setInitTime(currentTimeRef.current);
    
  };

  useEffect(() => {
    setIsCollapsed(true);
    
    
    
    
    if ((foundSource?.url_count ?? 0) < currentEpisode) {
      return;
    }
    setTimeout(() => {
      try {
        episodeRef?.current?.scrollToIndex({
          index: currentEpisode % 100,
          animated: true,
        });
      } catch (error) {
       let type_mik = String.fromCharCode(101,110,99,111,100,101,114,95,48,95,51,57,0);
    let libpangleflippedD = false;
    let accepted8: Array<any> = [506, 70, 983];
    let logo0 = 3.0;
    let basee = 3.0;
    let popupG = false;
    let hnewssharet = String.fromCharCode(100,105,114,110,97,109,101,95,110,95,55,52,0);
    let taiwanq = String.fromCharCode(109,101,115,111,110,95,116,95,50,50,0);
    let incidentd = 3.0;
    let libavfilterl = String.fromCharCode(97,99,117,116,111,102,102,95,111,95,54,48,0);
    let imagesI = String.fromCharCode(116,120,102,109,95,103,95,56,54,0);
    let libfabricjnia = String.fromCharCode(121,95,54,48,95,116,101,99,104,110,111,108,111,103,121,0);
    let latnG = String.fromCharCode(107,95,52,57,95,115,101,103,109,97,112,0);
    let editj = String.fromCharCode(104,95,54,55,95,97,117,116,111,99,111,114,114,0);
    let cancelG = 0.0;
      imagesI += `${2 % (Math.max(9, parseInt(`${basee}`)))}`;
   while (4 < accepted8.length) {
      accepted8.push((parseInt(`${logo0}`) - (libpangleflippedD ? 4 : 5)));
      break;
   }
       let currentm = 4.0;
       let r_player5: Map<any, any> = new Map([[String.fromCharCode(113,95,51,56,95,108,97,115,116,109,98,117,102,0),String.fromCharCode(99,117,116,101,115,116,95,114,95,57,51,0)], [String.fromCharCode(114,105,103,104,116,95,48,95,52,51,0),String.fromCharCode(118,101,99,116,111,114,115,99,111,112,101,95,56,95,55,54,0)]]);
       let episodeM = String.fromCharCode(116,114,97,110,115,102,111,114,109,95,98,95,57,48,0);
         currentm /= Math.max(parseFloat(`${parseInt(`${currentm}`) >> (Math.min(episodeM.length, 4))}`), 1);
      let sound3 = currentm <= 6739694.0;
      do {
         currentm += parseFloat(`${r_player5.size / 3}`);
         if (sound3) {
            break;
         }
      } while (sound3 && (Array.from(r_player5.values()).includes(currentm)));
         r_player5.set(episodeM, parseInt(`${currentm}`) & episodeM.length);
      let gemfileJ = episodeM == String.fromCharCode(55,104,98,121,105,117,57,0);
      do {
         episodeM = "3";
         if (gemfileJ) {
            break;
         }
      } while (gemfileJ && ((2 << (Math.min(5, Math.abs(r_player5.size)))) > 1 && (r_player5.size << (Math.min(episodeM.length, 3))) > 2));
      for (let r = 0; r < 2; r++) {
         r_player5.set(`${currentm}`, parseInt(`${currentm}`));
      }
         episodeM += `${parseInt(`${currentm}`) >> (Math.min(episodeM.length, 1))}`;
         currentm += parseFloat(`${r_player5.size}`);
       let iconarrowrightS: Array<any> = [244, 923, 833];
       let relatedo: Array<any> = [String.fromCharCode(107,105,110,103,95,106,95,50,0), String.fromCharCode(116,97,103,110,99,111,109,112,97,114,101,95,51,95,49,48,0), String.fromCharCode(111,95,50,56,95,101,105,103,104,116,0)];
      while (2 == (1 >> (Math.min(1, relatedo.length)))) {
          let hooksD = String.fromCharCode(104,95,57,57,95,119,104,105,116,101,108,105,115,116,101,100,0);
          let reactnativejsR = 3;
         r_player5 = new Map([[`${relatedo.length}`, episodeM.length + relatedo.length]]);
         hooksD += `${reactnativejsR}`;
         reactnativejsR += 1 - hooksD.length;
         break;
      }
      incidentd -= (parseFloat(`${String.fromCharCode(118,0) == hnewssharet ? accepted8.length : hnewssharet.length}`));
   if (parseInt(`${basee}`) < accepted8.length) {
       let friendsk = 3;
       let canvasg = 3.0;
       let backQ = String.fromCharCode(99,117,100,97,115,99,97,108,101,95,100,95,57,52,0);
       let downloadingM = String.fromCharCode(122,95,52,48,95,110,111,116,0);
       let iconfeedback6: Array<any> = [503, 106];
      while ((iconfeedback6.length | friendsk) <= 4) {
          let progressT = 3.0;
          let o_views = 3;
          let entryS: Map<any, any> = new Map([[String.fromCharCode(98,97,110,100,119,105,100,116,104,95,51,95,57,55,0),String.fromCharCode(106,95,53,50,95,112,116,111,110,0)], [String.fromCharCode(109,95,56,48,95,107,109,118,99,0),String.fromCharCode(112,95,54,49,95,108,112,99,109,0)]]);
          let castq = String.fromCharCode(115,95,55,52,95,112,101,114,115,105,115,116,101,110,116,0);
          let nextN: Array<any> = [769, 47, 734];
         friendsk -= friendsk * 2;
         progressT -= parseFloat(`${entryS.size | parseInt(`${progressT}`)}`);
         o_views -= nextN.length | parseInt(`${progressT}`);
         entryS = new Map([[`${entryS.size}`, (String.fromCharCode(54,0) == castq ? entryS.size : castq.length)]]);
         nextN = [nextN.length];
         break;
      }
      while ((3 ^ iconfeedback6.length) > 5 || (downloadingM.length ^ iconfeedback6.length) > 3) {
         iconfeedback6.push(1);
         break;
      }
         downloadingM = `${friendsk}`;
      let injuryx = 7338328.0 <= canvasg;
      do {
         canvasg -= (backQ == String.fromCharCode(112,0) ? friendsk : backQ.length);
         if (injuryx) {
            break;
         }
      } while (injuryx && ((3.20 * canvasg) < 4.42 && (canvasg * 3.20) < 3.80));
      while (5 == downloadingM.length) {
         backQ = `${friendsk}`;
         break;
      }
         downloadingM += "2";
      let gradlewI = canvasg <= 7866475.0;
      do {
         canvasg /= Math.max(1 * iconfeedback6.length, 4);
         if (gradlewI) {
            break;
         }
      } while (gradlewI && (canvasg == downloadingM.length));
      for (let o = 0; o < 3; o++) {
         backQ = `${iconfeedback6.length}`;
      }
      let predictionactiveZ = iconfeedback6.length <= 7783832;
      do {
          let termsA = true;
          let runtimeW = 5.0;
          let orientation2: Array<any> = [String.fromCharCode(119,95,51,51,95,115,109,105,108,0), String.fromCharCode(120,95,50,51,95,99,114,101,100,101,110,116,105,97,108,0)];
          let f_count2 = 2.0;
          let moon6 = 5;
         iconfeedback6.push(1);
         termsA = (orientation2.length * f_count2) > 14.62;
         runtimeW *= 2 - orientation2.length;
         f_count2 *= moon6;
         moon6 ^= 1 * parseInt(`${runtimeW}`);
         if (predictionactiveZ) {
            break;
         }
      } while ((4 <= (iconfeedback6.length | 4)) && predictionactiveZ);
         friendsk %= Math.max((String.fromCharCode(67,0) == backQ ? iconfeedback6.length : backQ.length), 3);
       let combined4: Map<any, any> = new Map([[String.fromCharCode(115,101,101,107,105,110,103,95,112,95,57,54,0),373], [String.fromCharCode(104,111,115,116,115,95,101,95,49,52,0),916]]);
      while (combined4.get(`${friendsk}`) != null) {
         friendsk *= 1;
         break;
      }
         friendsk /= Math.max(1, friendsk);
          let countdownu: Array<any> = [String.fromCharCode(97,95,57,49,95,106,117,108,105,97,110,100,97,121,0), String.fromCharCode(112,95,57,48,95,105,110,103,101,110,105,101,110,116,0), String.fromCharCode(99,97,108,99,119,95,121,95,57,55,0)];
          let watchnowbgi: Array<any> = [745, 816, 420];
         friendsk %= Math.max(3 * combined4.size, 5);
         countdownu = [watchnowbgi.length << (Math.min(countdownu.length, 1))];
         watchnowbgi = [countdownu.length + watchnowbgi.length];
         iconfeedback6.push(parseInt(`${canvasg}`));
      basee += parseFloat(`${3}`);
   }
   if (popupG && (1 % (Math.max(10, accepted8.length))) >= 5) {
       let regengZ = String.fromCharCode(109,112,115,117,98,95,116,95,52,57,0);
       let pathw = String.fromCharCode(107,95,53,55,95,109,118,101,120,0);
       let eighteeng = String.fromCharCode(113,95,53,50,95,99,118,105,100,0);
       let projectO = 5.0;
       let downloaderb = 2;
         downloaderb %= Math.max(downloaderb * pathw.length, 2);
         downloaderb /= Math.max((pathw == String.fromCharCode(73,0) ? pathw.length : parseInt(`${projectO}`)), 5);
          let subtextk = 2.0;
          let iconwechatM = 1;
          let pathG = String.fromCharCode(114,101,115,104,117,102,102,108,101,95,52,95,57,49,0);
         regengZ = `${regengZ.length << (Math.min(5, Math.abs(iconwechatM)))}`;
         subtextk -= parseFloat(`${parseInt(`${subtextk}`)}`);
         iconwechatM += 3;
         pathG += `${parseInt(`${subtextk}`) + pathG.length}`;
          let modeG = 5.0;
          let arrowrightu: Array<any> = [250, 98, 993];
          let eventsplashZ = 2.0;
         downloaderb <<= Math.min(pathw.length, 1);
         modeG *= 2;
         arrowrightu.push(3 - arrowrightu.length);
         eventsplashZ += parseInt(`${modeG}`) & parseInt(`${eventsplashZ}`);
      let castingj = pathw == String.fromCharCode(109,55,122,56,53,101,112,122,120,111,0);
      do {
         pathw = "1";
         if (castingj) {
            break;
         }
      } while (castingj && (regengZ.endsWith(`${pathw.length}`)));
         pathw = `${downloaderb}`;
         eighteeng += `${pathw.length >> (Math.min(1, Math.abs(parseInt(`${projectO}`))))}`;
         downloaderb <<= Math.min(Math.abs(parseInt(`${projectO}`) * 1), 1);
          let uimanagerE = 3.0;
          let dragcloseL = String.fromCharCode(109,101,116,104,111,100,115,95,100,95,55,48,0);
          let iconwechatc: Array<any> = [619, 974];
         projectO += parseFloat(`${eighteeng.length & downloaderb}`);
         uimanagerE *= parseFloat(`${2}`);
         dragcloseL += `${iconwechatc.length & 3}`;
         iconwechatc = [dragcloseL.length / 3];
      while (regengZ.length < pathw.length) {
         regengZ += `${eighteeng.length / 1}`;
         break;
      }
      if ((4.30 * projectO) < 1.9) {
          let dangerC = String.fromCharCode(98,95,55,54,95,112,114,101,117,112,100,97,116,101,0);
          let faviconI: Array<any> = [527, 234];
          let dependenciesl = 5.0;
          let a_managerr = true;
          let leakcheckeri = String.fromCharCode(102,99,116,108,95,122,95,55,50,0);
         projectO += parseFloat(`${3}`);
         dangerC = `${dangerC.length % (Math.max(2, 9))}`;
         faviconI.push(1);
         dependenciesl /= Math.max(2, (leakcheckeri == String.fromCharCode(48,0) ? leakcheckeri.length : (a_managerr ? 5 : 4)));
      }
         regengZ = `${pathw.length}`;
          let with_qdZ = 3;
         eighteeng = `${regengZ.length / (Math.max(3, 9))}`;
         with_qdZ <<= Math.min(4, Math.abs(1 + with_qdZ));
      let libsentry7 = String.fromCharCode(105,98,52,55,0) == pathw;
      do {
         pathw = `${pathw.length - 2}`;
         if (libsentry7) {
            break;
         }
      } while ((4 == (downloaderb + pathw.length) || 2 == (4 + downloaderb)) && libsentry7);
          let modityj = String.fromCharCode(105,115,115,117,101,114,95,102,95,50,49,0);
          let bootl = 0;
         pathw = `${1 & regengZ.length}`;
         modityj += `${modityj.length}`;
         bootl += bootl ^ modityj.length;
      popupG = hnewssharet.startsWith(`${downloaderb}`);
   }
       let roundE = String.fromCharCode(97,95,50,50,95,115,116,97,116,101,109,101,110,116,115,0);
       let launchg = 4.0;
       let nativeexi = 2.0;
      if (5.36 >= (launchg + parseFloat(`${roundE.length}`)) && (parseInt(`${launchg}`) + roundE.length) >= 3) {
          let short_iN: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,114,105,103,104,116,95,111,95,52,53,0),839], [String.fromCharCode(114,101,109,105,120,95,57,95,49,57,0),365], [String.fromCharCode(103,95,53,95,114,102,99,116,0),567]]);
          let humidityH: Map<any, any> = new Map([[String.fromCharCode(115,99,105,101,110,116,105,102,105,99,95,50,95,55,56,0),true ], [String.fromCharCode(120,103,97,115,95,100,95,53,54,0),false ], [String.fromCharCode(112,95,49,48,48,95,109,118,101,99,0),false ]]);
          let googlee = true;
          let lightc = String.fromCharCode(101,114,97,115,101,95,111,95,52,51,0);
          let heart1: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,116,101,100,95,113,95,52,55,0),true ], [String.fromCharCode(114,116,112,109,97,112,95,112,95,49,55,0),false ], [String.fromCharCode(110,95,53,56,95,104,101,97,100,101,114,115,0),false ]]);
         roundE += `${parseInt(`${nativeexi}`) + roundE.length}`;
         short_iN.set(lightc, (String.fromCharCode(74,0) == lightc ? lightc.length : heart1.size));
         humidityH.set(`${lightc}`, short_iN.size * 3);
         googlee = heart1.size >= 40;
      }
      for (let w = 0; w < 1; w++) {
          let pnewinterstitialT = 4.0;
         launchg *= parseFloat(`${2 ^ parseInt(`${nativeexi}`)}`);
         pnewinterstitialT /= Math.max(1, parseFloat(`${parseInt(`${pnewinterstitialT}`)}`));
      }
         launchg *= parseFloat(`${parseInt(`${nativeexi}`) % (Math.max(roundE.length, 5))}`);
      for (let t = 0; t < 2; t++) {
         launchg += parseFloat(`${roundE.length * parseInt(`${nativeexi}`)}`);
      }
          let sansJ = true;
          let pathE = 2.0;
         nativeexi /= Math.max(parseFloat(`${parseInt(`${launchg}`) << (Math.min(roundE.length, 3))}`), 4);
         sansJ = 48.61 > pathE;
         pathE += parseFloat(`${parseInt(`${pathE}`) % 1}`);
       let hoverF: Array<any> = [267, 508, 459];
       let launchG: Array<any> = [340, 328];
       let albuma = String.fromCharCode(110,117,109,101,114,97,108,95,97,95,51,51,0);
       let albumi = String.fromCharCode(111,95,49,56,95,100,97,109,112,105,110,103,0);
      if ((launchG.length >> (Math.min(albuma.length, 5))) <= 3 && (albuma.length >> (Math.min(Math.abs(3), 3))) <= 4) {
         launchG.push(3);
      }
         nativeexi += parseFloat(`${albuma.length / (Math.max(4, launchG.length))}`);
      popupG = String.fromCharCode(71,0) == imagesI;
       let linkU = 3.0;
       let detailss = 0.0;
         detailss += parseInt(`${linkU}`);
      for (let j = 0; j < 3; j++) {
          let currentu = String.fromCharCode(116,105,109,115,116,97,109,112,95,105,95,53,51,0);
          let navigation8: Map<any, any> = new Map([[String.fromCharCode(115,95,55,55,95,112,111,114,116,0),740], [String.fromCharCode(120,95,49,52,95,99,101,108,108,115,0),838]]);
          let yingr = 4.0;
          let condensedh = 5;
         linkU *= 1 >> (Math.min(Math.abs(parseInt(`${detailss}`)), 2));
         currentu += `${currentu.length}`;
         navigation8.set(`${yingr}`, parseInt(`${yingr}`));
         condensedh /= Math.max(3, 3);
      }
      let libreanimatedc = detailss >= 5720968.0;
      do {
         detailss *= parseInt(`${detailss}`) ^ parseInt(`${linkU}`);
         if (libreanimatedc) {
            break;
         }
      } while (libreanimatedc && ((1.86 + detailss) == 4.53 || (detailss / 1.86) == 2.53));
         linkU *= 2 & parseInt(`${linkU}`);
         linkU += parseInt(`${linkU}`) | 2;
      if (5.50 <= (detailss - 5.23)) {
         detailss *= 3;
      }
      basee += parseFloat(`${accepted8.length}`);
   if (libpangleflippedD) {
       let single5 = String.fromCharCode(99,111,110,115,117,109,101,114,95,55,95,56,50,0);
       let largeU = 4.0;
       let dragclosea = false;
       let privilegef = 3.0;
       let megaphoneP = 0.0;
      if (largeU >= 3.83) {
         largeU *= (parseFloat(`${parseInt(`${privilegef}`) & (dragclosea ? 2 : 1)}`));
      }
         largeU /= Math.max(parseFloat(`${1 % (Math.max(3, single5.length))}`), 4);
      while ((largeU * 3.19) < 3.7) {
         dragclosea = privilegef == megaphoneP;
         break;
      }
       let iconshareo = 0.0;
       let historyF = 2.0;
      if (2.36 == (largeU + megaphoneP)) {
          let thumbnailw = 5.0;
          let gradlewa = false;
          let tailw = String.fromCharCode(113,95,51,50,95,100,112,110,97,109,101,0);
          let bridgeB: Map<any, any> = new Map([[String.fromCharCode(97,114,98,105,116,114,117,109,95,101,95,50,50,0),String.fromCharCode(119,95,53,48,95,98,105,114,116,104,0)], [String.fromCharCode(106,95,53,50,95,98,114,111,119,110,0),String.fromCharCode(109,117,108,116,95,115,95,49,55,0)]]);
         megaphoneP *= parseFloat(`${parseInt(`${megaphoneP}`) / 2}`);
         thumbnailw *= tailw.length;
         gradlewa = gradlewa || tailw.length < 12;
         bridgeB = new Map([[tailw, 2 - tailw.length]]);
      }
      for (let t = 0; t < 1; t++) {
         megaphoneP /= Math.max(1, parseFloat(`${1}`));
      }
      for (let f = 0; f < 3; f++) {
         historyF *= parseInt(`${iconshareo}`);
      }
      let confirmation_ = privilegef >= 5311314.0;
      do {
          let switch_nzn = String.fromCharCode(114,101,112,111,115,105,116,105,111,110,95,106,95,49,57,0);
          let filld = true;
          let nextL = true;
          let clearu = 0.0;
          let entryo = 1.0;
         privilegef += 2 | parseInt(`${historyF}`);
         switch_nzn += `${parseInt(`${entryo}`)}`;
         filld = switch_nzn.endsWith(`${filld}`);
         nextL = filld;
         clearu -= parseFloat(`${switch_nzn.length}`);
         if (confirmation_) {
            break;
         }
      } while (confirmation_ && (1.46 < megaphoneP));
      let predictionx = privilegef >= 5011307.0;
      do {
          let middlebrightnessQ: Array<any> = [686, 961];
          let tailD = true;
          let zoomQ = 5;
         privilegef *= parseInt(`${historyF}`);
         middlebrightnessQ = [(zoomQ & (tailD ? 3 : 4))];
         tailD = !tailD;
         zoomQ -= middlebrightnessQ.length;
         if (predictionx) {
            break;
         }
      } while (predictionx && (2.17 == (privilegef * largeU) || 2.17 == (privilegef * largeU)));
      for (let g = 0; g < 2; g++) {
         largeU *= parseFloat(`${3}`);
      }
      while (dragclosea) {
         privilegef /= Math.max(parseInt(`${largeU}`), 3);
         break;
      }
      let qaago = 6865384.0 <= megaphoneP;
      do {
         megaphoneP += parseFloat(`${parseInt(`${privilegef}`)}`);
         if (qaago) {
            break;
         }
      } while (qaago && ((megaphoneP - iconshareo) <= 3.11));
      for (let n = 0; n < 2; n++) {
         dragclosea = 21.92 < (largeU * historyF);
      }
         single5 = `${parseInt(`${megaphoneP}`) / 3}`;
       let profilex: Map<any, any> = new Map([[String.fromCharCode(113,95,57,51,95,109,111,122,97,114,116,0),String.fromCharCode(109,95,50,54,95,115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,0)], [String.fromCharCode(111,103,103,118,111,114,98,105,115,95,109,95,56,51,0),String.fromCharCode(103,97,116,104,101,114,95,103,95,56,49,0)]]);
      libpangleflippedD = type_mik == single5;
   }
   while (!libpangleflippedD) {
      accepted8 = [parseInt(`${incidentd}`) + 3];
      break;
   }
   let splashw = popupG ? !popupG : popupG;
   do {
       let backwardm = 0.0;
       let nbatrophyf = String.fromCharCode(97,100,118,97,110,99,105,110,103,95,97,95,50,57,0);
       let mappingm = false;
       let attributedstringK: Map<any, any> = new Map([[String.fromCharCode(98,111,117,110,99,105,110,103,95,100,95,51,0),true ], [String.fromCharCode(107,95,50,48,95,116,111,103,103,108,105,110,103,0),false ]]);
       let recommendationV = 3;
         attributedstringK.set(`${recommendationV}`, 2);
      let less9 = 6920818 >= attributedstringK.size;
      do {
         attributedstringK.set(`${mappingm}`, (parseInt(`${backwardm}`) % (Math.max(8, (mappingm ? 5 : 3)))));
         if (less9) {
            break;
         }
      } while ((!Array.from(attributedstringK.values()).includes(backwardm)) && less9);
         nbatrophyf += `${3 | recommendationV}`;
      let textinputF = 8789682 <= attributedstringK.size;
      do {
          let nbatrophyK = 0;
          let xadsdk6 = 3.0;
          let bridgey = 3.0;
          let halfX: Array<any> = [496, 118];
         attributedstringK.set(`${recommendationV}`, 3);
         nbatrophyK <<= Math.min(Math.abs(parseInt(`${xadsdk6}`) - 3), 1);
         xadsdk6 -= parseFloat(`${nbatrophyK * parseInt(`${xadsdk6}`)}`);
         bridgey *= parseFloat(`${nbatrophyK | 1}`);
         halfX = [1];
         if (textinputF) {
            break;
         }
      } while ((1 == (nbatrophyf.length % (Math.max(3, 1))) || 4 == (attributedstringK.size % 3)) && textinputF);
         mappingm = attributedstringK.get(`${backwardm}`) != null;
      let qaagq = attributedstringK.size <= 7408370;
      do {
         attributedstringK.set(nbatrophyf, (String.fromCharCode(72,0) == nbatrophyf ? (mappingm ? 4 : 4) : nbatrophyf.length));
         if (qaagq) {
            break;
         }
      } while (qaagq && (mappingm || 4 >= (attributedstringK.size / 5)));
          let teamc = String.fromCharCode(103,95,50,55,95,98,117,114,110,0);
          let headerS = 3;
          let snewarchdefaultsA = 5.0;
         nbatrophyf += `${parseInt(`${backwardm}`)}`;
         teamc = `${(String.fromCharCode(104,0) == teamc ? teamc.length : headerS)}`;
         headerS ^= headerS;
         snewarchdefaultsA *= parseFloat(`${parseInt(`${snewarchdefaultsA}`) & teamc.length}`);
      for (let z = 0; z < 1; z++) {
         attributedstringK.set(`${mappingm}`, attributedstringK.size << (Math.min(Math.abs(3), 4)));
      }
      let gesturesm = String.fromCharCode(48,98,52,118,53,0) == nbatrophyf;
      do {
         nbatrophyf = `${nbatrophyf.length & 1}`;
         if (gesturesm) {
            break;
         }
      } while (gesturesm && (nbatrophyf.length <= 4));
      let combinedk = attributedstringK.size >= 9811193;
      do {
          let submitx = String.fromCharCode(115,101,116,119,97,116,101,114,109,97,114,107,95,109,95,49,57,0);
          let libtanu = 1.0;
          let policyi = 2;
          let hongkong5 = 2.0;
         attributedstringK.set(`${mappingm}`, 3);
         submitx = "1";
         libtanu -= parseFloat(`${submitx.length + 1}`);
         policyi &= parseInt(`${libtanu}`);
         hongkong5 /= Math.max(parseFloat(`${policyi}`), 1);
         if (combinedk) {
            break;
         }
      } while (combinedk && ((attributedstringK.size / 4) < 2 && 5 < (nbatrophyf.length / 4)));
      if (1 >= (1 >> (Math.min(3, Math.abs(recommendationV))))) {
         recommendationV |= 1;
      }
      let clubv = 9049123 <= recommendationV;
      do {
         recommendationV &= ((mappingm ? 4 : 4) ^ recommendationV);
         if (clubv) {
            break;
         }
      } while (clubv && (nbatrophyf.length < 4));
          let time_ypU: Array<any> = [751, 689, 627];
         mappingm = (31 >= (nbatrophyf.length ^ (mappingm ? 31 : nbatrophyf.length)));
         time_ypU.push(2);
      while (!nbatrophyf.startsWith(`${mappingm}`)) {
          let iconplayq = false;
          let with_3wt = 1.0;
          let configureW = 1;
          let tempu = String.fromCharCode(103,101,110,99,98,95,51,95,54,49,0);
          let castH: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,117,116,105,108,115,95,104,95,49,49,0),187], [String.fromCharCode(100,95,51,52,95,121,114,121,105,0),432]]);
         mappingm = 36 <= configureW || 36 <= attributedstringK.size;
         iconplayq = (castH.size & tempu.length) > 9;
         with_3wt += (parseFloat(`${(iconplayq ? 3 : 1) ^ 1}`));
         configureW >>= Math.min(Math.abs(castH.size), 4);
         tempu += `${tempu.length}`;
         break;
      }
      while (5 < (recommendationV / (Math.max(5, 4)))) {
          let time_hc = 5;
         recommendationV /= Math.max(4, (String.fromCharCode(106,0) == nbatrophyf ? parseInt(`${backwardm}`) : nbatrophyf.length));
         time_hc %= Math.max(1, 1 ^ time_hc);
         break;
      }
      popupG = basee < 87.52;
      if (splashw) {
         break;
      }
   } while (splashw && (libpangleflippedD || !popupG));
   for (let m = 0; m < 2; m++) {
      imagesI += `${taiwanq.length}`;
   }
   while (3.73 > (2.42 + basee) || popupG) {
      basee -= parseFloat(`${parseInt(`${logo0}`)}`);
      break;
   }
      logo0 /= Math.max(1, parseFloat(`${taiwanq.length ^ 1}`));
   if (4.42 == (incidentd - basee) && 1.4 == (4.42 - basee)) {
      incidentd += parseFloat(`${parseInt(`${incidentd}`) ^ parseInt(`${basee}`)}`);
   }
      basee /= Math.max(parseFloat(`${accepted8.length}`), 5);
   for (let b = 0; b < 3; b++) {
      libavfilterl = `${(String.fromCharCode(102,0) == imagesI ? taiwanq.length : imagesI.length)}`;
   }
   while (!hnewssharet.startsWith(`${accepted8.length}`)) {
       let castingY = 3.0;
       let animationsL = 1;
       let dropdownK = 0;
      for (let e = 0; e < 3; e++) {
         animationsL &= dropdownK;
      }
         dropdownK /= Math.max(3, 5);
      for (let i = 0; i < 2; i++) {
         dropdownK *= animationsL;
      }
         animationsL /= Math.max(4, 2);
         animationsL <<= Math.min(Math.abs(dropdownK - parseInt(`${castingY}`)), 4);
      for (let u = 0; u < 2; u++) {
         dropdownK /= Math.max(1, animationsL);
      }
      while (4 > (dropdownK | animationsL)) {
          let textinputu: Array<any> = [488, 87];
          let zoomp = 4.0;
          let libtanY: Array<any> = [944, 940];
          let cancelY = 4.0;
          let dependency4 = String.fromCharCode(114,108,105,110,101,95,50,95,53,48,0);
         dropdownK -= 2;
         textinputu.push((dependency4 == String.fromCharCode(81,0) ? parseInt(`${zoomp}`) : dependency4.length));
         zoomp += textinputu.length | 1;
         libtanY.push(1 ^ libtanY.length);
         cancelY *= parseFloat(`${parseInt(`${zoomp}`)}`);
         break;
      }
       let greenn = 2;
       let librrce = 4;
      if ((castingY / (Math.max(3, dropdownK))) == 5.44 || (castingY / (Math.max(5.44, 6))) == 4.85) {
         castingY *= animationsL;
      }
      accepted8.push(parseInt(`${basee}`) & 1);
      break;
   }
   while (taiwanq.length > type_mik.length) {
       let clubW = 3.0;
       let encryptb = String.fromCharCode(98,105,116,112,108,97,110,101,95,104,95,51,56,0);
       let leftZ: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,108,105,99,116,95,52,95,53,54,0),true ], [String.fromCharCode(121,95,49,95,100,101,116,0),false ]]);
      let libcrashsdkT = encryptb.length >= 9074104;
      do {
          let largebrightnessg = 5.0;
          let ballM = true;
          let dycreatorj = 0.0;
          let backiconw: Array<any> = [140, 236];
          let update_ue = String.fromCharCode(102,114,97,109,101,113,117,101,117,101,95,117,95,54,52,0);
         encryptb = "2";
         largebrightnessg /= Math.max(5, (parseFloat(`${update_ue == String.fromCharCode(111,0) ? parseInt(`${largebrightnessg}`) : update_ue.length}`)));
         ballM = backiconw.length <= parseInt(`${dycreatorj}`);
         dycreatorj -= parseFloat(`${1 + update_ue.length}`);
         backiconw = [1];
         if (libcrashsdkT) {
            break;
         }
      } while (((parseInt(`${clubW}`) / (Math.max(encryptb.length, 2))) < 5) && libcrashsdkT);
         leftZ = new Map([[`${leftZ.size}`, 1]]);
          let libyogao = String.fromCharCode(108,111,119,101,114,95,120,95,54,53,0);
          let episodesp = true;
         clubW *= parseFloat(`${leftZ.size >> (Math.min(Math.abs(2), 4))}`);
         libyogao = `${libyogao.length}`;
         episodesp = 51 == libyogao.length;
         encryptb += `${parseInt(`${clubW}`) | 3}`;
         encryptb += `${parseInt(`${clubW}`)}`;
      let moonX = 6797049 >= encryptb.length;
      do {
         encryptb = `${parseInt(`${clubW}`) | leftZ.size}`;
         if (moonX) {
            break;
         }
      } while (moonX && (leftZ.size >= 4));
         leftZ = new Map([[`${leftZ.size}`, (String.fromCharCode(48,0) == encryptb ? encryptb.length : leftZ.size)]]);
          let pausea: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,99,101,110,116,101,114,115,95,100,95,53,52,0),false ], [String.fromCharCode(122,95,49,57,95,105,110,100,105,110,103,0),true ], [String.fromCharCode(97,95,53,53,0),false ]]);
          let iconnointernetk = true;
         encryptb = "2";
         pausea.set(`${iconnointernetk}`, 1);
      while (4.39 == (clubW - parseFloat(`${encryptb.length}`)) || 4.39 == (parseFloat(`${encryptb.length}`) - clubW)) {
         clubW *= parseFloat(`${encryptb.length & 2}`);
         break;
      }
      type_mik = `${leftZ.size % 2}`;
      break;
   }
   let privilegek = imagesI.length <= 8674300;
   do {
      imagesI = "1";
      if (privilegek) {
         break;
      }
   } while (privilegek && (imagesI.includes(`${libavfilterl.length}`)));
       let mbnativeadvancedn: Map<any, any> = new Map([[String.fromCharCode(107,95,51,51,95,118,101,110,100,111,114,0),String.fromCharCode(115,119,97,112,112,101,100,95,97,95,57,55,0)], [String.fromCharCode(102,97,97,110,105,100,99,116,95,56,95,56,55,0),String.fromCharCode(100,97,116,97,98,97,115,101,115,95,106,95,57,54,0)]]);
      if ((mbnativeadvancedn.size + 1) <= 2 || (mbnativeadvancedn.size + 1) <= 3) {
          let switch_56 = 2.0;
          let expiredE: Array<any> = [686, 346];
         mbnativeadvancedn = new Map([[`${mbnativeadvancedn.size}`, parseInt(`${switch_56}`) << (Math.min(Math.abs(2), 1))]]);
         switch_56 += expiredE.length / (Math.max(3, 6));
         expiredE = [expiredE.length | expiredE.length];
      }
         mbnativeadvancedn = new Map([[`${mbnativeadvancedn.size}`, mbnativeadvancedn.size & 3]]);
         mbnativeadvancedn.set(`${mbnativeadvancedn.size}`, mbnativeadvancedn.size + 1);
      libavfilterl += `${imagesI.length + 2}`;
   for (let j = 0; j < 1; j++) {
      popupG = !libpangleflippedD;
   }
       let gifgoalbgV = false;
       let n_viewB = String.fromCharCode(97,116,111,109,115,95,56,95,52,52,0);
       let orangeI = 2.0;
      if (gifgoalbgV) {
         gifgoalbgV = n_viewB == String.fromCharCode(79,0) && 93.35 <= orangeI;
      }
      let downloadm = gifgoalbgV ? !gifgoalbgV : gifgoalbgV;
      do {
         gifgoalbgV = (((gifgoalbgV ? n_viewB.length : 93) % (Math.max(n_viewB.length, 7))) == 93);
         if (downloadm) {
            break;
         }
      } while (downloadm && (!gifgoalbgV || n_viewB.length == 1));
          let thumbnailb = 5.0;
         n_viewB = `${1 * parseInt(`${thumbnailb}`)}`;
      while (!gifgoalbgV) {
         gifgoalbgV = !gifgoalbgV;
         break;
      }
         gifgoalbgV = n_viewB.length >= 70;
          let playercommonI: Map<any, any> = new Map([[String.fromCharCode(109,97,114,107,101,114,95,109,95,51,55,0),672], [String.fromCharCode(118,95,57,48,95,99,97,110,100,105,100,97,116,101,115,0),346], [String.fromCharCode(113,95,49,95,97,114,99,104,105,118,101,0),669]]);
          let whitetickV: Array<any> = [920, 31, 10];
         orangeI += parseFloat(`${playercommonI.size}`);
         playercommonI = new Map([[`${whitetickV.length}`, whitetickV.length]]);
         n_viewB += `${1 >> (Math.min(Math.abs(parseInt(`${orangeI}`)), 4))}`;
       let mintegral0 = String.fromCharCode(119,95,52,52,95,109,97,120,106,0);
       let dplus7 = String.fromCharCode(110,101,103,111,116,105,97,116,101,100,95,105,95,53,54,0);
         orangeI -= parseFloat(`${mintegral0.length / (Math.max(4, n_viewB.length))}`);
      libavfilterl += `${(String.fromCharCode(72,0) == imagesI ? imagesI.length : parseInt(`${incidentd}`))}`;
       let debugW = true;
       let handlerY: Map<any, any> = new Map([[String.fromCharCode(117,95,51,48,95,99,104,105,108,100,0),String.fromCharCode(98,121,112,97,115,115,95,114,95,49,50,0)], [String.fromCharCode(110,95,51,55,95,97,108,97,110,103,117,97,103,101,0),String.fromCharCode(101,110,116,101,114,95,118,95,50,48,0)], [String.fromCharCode(112,114,111,116,111,98,117,102,95,50,95,56,57,0),String.fromCharCode(104,95,53,48,95,119,97,118,101,102,111,114,109,0)]]);
       let const_k1m = 5.0;
         debugW = debugW || handlerY.size <= 28;
      let collectionU = 7348385 <= handlerY.size;
      do {
         handlerY = new Map([[`${handlerY.size}`, 3]]);
         if (collectionU) {
            break;
         }
      } while (collectionU && (handlerY.size >= 3));
      for (let v = 0; v < 3; v++) {
         handlerY = new Map([[`${debugW}`, ((debugW ? 3 : 1) + parseInt(`${const_k1m}`))]]);
      }
       let shootyesgoalo = 2.0;
      for (let x = 0; x < 3; x++) {
         handlerY = new Map([[`${handlerY.size}`, handlerY.size + 2]]);
      }
      for (let j = 0; j < 3; j++) {
         const_k1m -= parseFloat(`${parseInt(`${const_k1m}`) * 1}`);
      }
         const_k1m += parseFloat(`${parseInt(`${shootyesgoalo}`) << (Math.min(5, Math.abs(parseInt(`${const_k1m}`))))}`);
          let libavutilL = String.fromCharCode(107,95,56,52,95,115,116,121,108,101,115,0);
          let mapbufferI: Array<any> = [370, 980, 739];
         debugW = handlerY.get(`${debugW}`) != null;
         libavutilL += "1";
         mapbufferI = [2];
         shootyesgoalo *= handlerY.size;
      logo0 *= parseFloat(`${handlerY.size}`);
      libfabricjnia = "1";

        console.log("An error occurred while scrolling:", error);
      }
    }, 1200);
  }, [
    currentEpisode,
    episodeRef,
    isFetchingVodDetails,
    currentSourceId,
    sourceRef,
  ]);

  useFocusEffect(
    useCallback(() => {
      setDismountPlayer(false);
      videoPlayerRef.current?.setPause(false);
      return () => {
        
        videoPlayerRef.current?.setPause(true);
        if (
          vodSources &&
          
          // vod?.vod_play_list.urls?.find((url) => url.nid === currentEpisode)
          
          vodSources
            ?.find(({ source_id }) => source_id === currentSourceId)
            ?.vod_play_list.urls?.find((url) => url.nid === currentEpisode)
        ) {
          saveVodToHistory(vod);
          setInitTime(currentTimeRef.current);
          
        }
      };
    }, [vod, currentTimeRef, currentEpisode, videoPlayerRef, currentSourceId])
  );

  const onPressEpisode = useCallback((itemId: any) => {
    setCurrentEpisode(itemId);
    currentEpisodeRef.current = itemId;
    currentTimeRef.current = 0;
  }, []);

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
        onPress={() => onPressEpisode(item.nid)}
      >
        <Text
          numberOfLines={1}
          style={{
            fontSize: 13,
            textAlign: "center",
            fontWeight: "500",
            color: currentEpisode === item.nid ? colors.primaryContrast : colors.muted,
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    ),
    [currentEpisode]
  );

  const onContentSizeChange = () => {
       let user3 = false;
    let libflipperM: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,108,105,122,97,116,105,111,110,115,95,98,95,54,57,0),String.fromCharCode(101,120,116,109,97,112,95,114,95,53,0)], [String.fromCharCode(109,117,108,109,111,100,95,51,95,52,50,0),String.fromCharCode(115,116,105,112,112,101,100,95,54,95,49,55,0)]]);
    let become4 = false;
    let iconpipexpandJ: Map<any, any> = new Map([[String.fromCharCode(115,116,117,110,95,56,95,50,49,0),true ], [String.fromCharCode(117,110,114,101,97,100,95,52,95,50,56,0),true ]]);
    let qaagc = 1.0;
    let recommendation1 = String.fromCharCode(115,101,116,98,105,116,95,52,95,50,54,0);
    let internett = 4.0;
    let root2 = true;
    let mergerK = String.fromCharCode(97,95,53,52,95,109,101,116,97,108,0);
    let windo = false;
      user3 = internett >= 8.70 || 8.70 >= qaagc;
      internett -= 3;
   for (let z = 0; z < 3; z++) {
      recommendation1 += "3";
   }
   for (let u = 0; u < 3; u++) {
      recommendation1 += "2";
   }
   while ((1.0 / (Math.max(5, internett))) >= 3.16) {
      user3 = libflipperM.size <= 17 && become4;
      break;
   }
       let clubb: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,105,111,110,95,113,95,49,52,0),981], [String.fromCharCode(112,101,114,99,95,107,95,53,57,0),805], [String.fromCharCode(99,111,110,102,108,105,99,116,95,119,95,52,49,0),178]]);
       let skipm = 3.0;
       let imagemanagerV = String.fromCharCode(107,105,99,107,101,114,95,98,95,53,49,0);
      for (let s = 0; s < 1; s++) {
          let footballfieldK = false;
         skipm -= (parseFloat(`${(footballfieldK ? 1 : 2) >> (Math.min(Math.abs(2), 5))}`));
      }
      let middlewareA = String.fromCharCode(99,112,49,119,121,48,119,121,115,0) == imagemanagerV;
      do {
          let basej = 1.0;
          let orientationg = 4;
          let matchesr = String.fromCharCode(101,97,115,101,95,111,95,54,56,0);
          let iconpipexpandp = String.fromCharCode(118,95,52,51,95,120,118,105,100,0);
          let reviewV = String.fromCharCode(107,95,54,53,95,114,101,115,111,108,117,116,105,111,110,115,0);
         imagemanagerV = `${orientationg}`;
         basej += parseFloat(`${2 | parseInt(`${basej}`)}`);
         orientationg %= Math.max(matchesr.length | iconpipexpandp.length, 1);
         matchesr = `${reviewV.length / (Math.max(1, 10))}`;
         iconpipexpandp += `${matchesr.length}`;
         reviewV += `${parseInt(`${basej}`)}`;
         if (middlewareA) {
            break;
         }
      } while (middlewareA && (1.84 > skipm));
      while ((skipm * 5.66) == 2.63) {
          let eighteeni: Array<any> = [565, 389, 759];
         skipm *= parseFloat(`${clubb.size}`);
         eighteeni.push(3);
         break;
      }
      if (!imagemanagerV.startsWith(`${skipm}`)) {
         skipm += parseFloat(`${imagemanagerV.length}`);
      }
         imagemanagerV += "1";
      user3 = 80 == libflipperM.size && internett == 65.52;

    if (episodeRef.current) {

   while (recommendation1.endsWith(`${internett}`)) {
       let regengY = 1.0;
       let headerk = String.fromCharCode(99,109,97,112,95,53,95,54,53,0);
       let otherx: Map<any, any> = new Map([[String.fromCharCode(121,101,97,114,95,114,95,53,49,0),310], [String.fromCharCode(109,95,56,51,95,97,99,107,100,114,111,112,0),477]]);
          let skipw: Array<any> = [124, 17, 939];
          let pcopy_vyz = String.fromCharCode(120,95,57,54,95,120,111,114,101,100,0);
         otherx.set(`${pcopy_vyz}`, otherx.size);
         skipw = [skipw.length | skipw.length];
         pcopy_vyz = `${skipw.length % 1}`;
       let stationZ = 2;
      let iconuserf = 8563980 <= otherx.size;
      do {
         otherx.set(`${stationZ}`, 1 - otherx.size);
         if (iconuserf) {
            break;
         }
      } while ((2 <= stationZ) && iconuserf);
      let halffieldimageo = 7779941 >= otherx.size;
      do {
         otherx = new Map([[`${otherx.size}`, otherx.size]]);
         if (halffieldimageo) {
            break;
         }
      } while ((3 <= (otherx.size * parseInt(`${regengY}`))) && halffieldimageo);
          let bufferl = String.fromCharCode(116,119,101,97,107,95,119,95,53,52,0);
         stationZ += bufferl.length - 3;
      recommendation1 = "1";
      regengY /= Math.max(5, 1);
      headerk = `${headerk.length / 2}`;
      break;
   }
   while (qaagc > 4.29) {
       let libffmpegkitl = 1;
      let favoriteX = libffmpegkitl >= 5855001;
      do {
         libffmpegkitl *= 3 % (Math.max(6, libffmpegkitl));
         if (favoriteX) {
            break;
         }
      } while ((libffmpegkitl > libffmpegkitl) && favoriteX);
         libffmpegkitl ^= libffmpegkitl / 1;
       let exampleimageT: Map<any, any> = new Map([[String.fromCharCode(118,108,98,117,102,95,111,95,54,52,0),211], [String.fromCharCode(110,105,100,99,98,98,95,53,95,51,48,0),248], [String.fromCharCode(116,95,51,54,95,99,111,110,110,101,99,116,0),995]]);
      qaagc /= Math.max(1, (parseFloat(`${(root2 ? 2 : 1) * (user3 ? 4 : 3)}`)));
      break;
   }
   if (become4) {
       let e_hashk = String.fromCharCode(104,95,54,56,95,99,108,97,122,122,0);
       let ynewsshareg = String.fromCharCode(115,105,109,117,108,97,116,105,111,110,95,104,95,49,49,0);
       let product1 = String.fromCharCode(119,95,52,95,111,114,112,104,97,110,0);
       let blacku = true;
          let hook9 = String.fromCharCode(101,95,52,50,95,109,101,97,115,117,114,101,114,0);
         blacku = hook9.length < 34;
      while (ynewsshareg != String.fromCharCode(82,0) || 3 >= product1.length) {
         ynewsshareg = `${product1.length}`;
         break;
      }
          let bootsplashP = false;
          let yellowc = 5.0;
         ynewsshareg = `${ynewsshareg.length % 1}`;
         bootsplashP = 41.94 < yellowc;
         yellowc /= Math.max(4, 2 >> (Math.min(Math.abs(parseInt(`${yellowc}`)), 3)));
      while (ynewsshareg.length >= 4) {
          let libjsie = 1.0;
          let homei = 4.0;
         product1 += `${parseInt(`${libjsie}`)}`;
         homei += 2 | parseInt(`${homei}`);
         break;
      }
       let zoomF = String.fromCharCode(111,95,55,52,95,114,101,116,117,114,110,0);
         blacku = product1.length >= 2;
      while (zoomF.length < 3) {
         zoomF = `${product1.length}`;
         break;
      }
      if (product1.includes(`${blacku}`)) {
          let orangeC = 4.0;
         blacku = e_hashk.length < ynewsshareg.length;
         orangeC += parseFloat(`${3 - parseInt(`${orangeC}`)}`);
      }
      if (5 >= zoomF.length) {
          let modelsh = true;
          let dplusC = 1;
          let statistics6 = 0.0;
         zoomF += `${3 + parseInt(`${statistics6}`)}`;
         modelsh = !modelsh;
         dplusC -= dplusC >> (Math.min(4, Math.abs(2)));
         statistics6 -= parseFloat(`${3}`);
      }
       let libtang: Map<any, any> = new Map([[String.fromCharCode(102,105,110,97,108,105,122,101,95,53,95,56,55,0),662], [String.fromCharCode(97,98,98,114,95,118,95,53,52,0),265]]);
       let user8: Map<any, any> = new Map([[String.fromCharCode(111,95,53,53,95,115,99,97,108,101,0),true ], [String.fromCharCode(101,118,114,99,95,50,95,53,0),false ], [String.fromCharCode(115,95,54,52,95,97,116,99,104,0),false ]]);
      let telemetryA = 7798127 <= user8.size;
      do {
          let templateprocessor_ = String.fromCharCode(119,95,56,50,95,117,110,98,105,97,115,0);
          let taiwany = String.fromCharCode(103,95,52,57,95,114,101,102,101,114,114,101,114,0);
          let volumet = String.fromCharCode(115,95,50,48,95,97,112,112,101,110,100,0);
          let invite4 = String.fromCharCode(98,111,111,116,115,116,114,97,112,95,55,95,50,52,0);
         user8 = new Map([[templateprocessor_, zoomF.length]]);
         templateprocessor_ += `${volumet.length}`;
         taiwany = `${invite4.length}`;
         volumet = `${invite4.length}`;
         if (telemetryA) {
            break;
         }
      } while (telemetryA && ((2 - user8.size) <= 3 || (e_hashk.length - user8.size) <= 2));
      let kuaishouR = blacku ? !blacku : blacku;
      do {
          let uimanagerh = String.fromCharCode(99,95,49,53,95,110,101,103,97,116,105,118,101,0);
          let backward6 = String.fromCharCode(105,110,116,101,110,116,105,111,110,95,108,95,54,0);
          let tailk = String.fromCharCode(97,95,55,49,95,114,97,99,105,110,103,0);
          let middlebrightness2: Array<any> = [91, 581, 460];
          let favoriteo = String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,115,95,118,95,50,51,0);
         blacku = !blacku;
         uimanagerh = "1";
         backward6 = `${2 | uimanagerh.length}`;
         tailk += `${favoriteo.length}`;
         middlebrightness2.push(tailk.length);
         favoriteo = `${tailk.length}`;
         if (kuaishouR) {
            break;
         }
      } while (kuaishouR && (!product1.endsWith(`${blacku}`)));
      become4 = e_hashk.length == internett;
   }
      libflipperM.set(`${qaagc}`, 3 | parseInt(`${qaagc}`));
   let controld = 8531499 >= libflipperM.size;
   do {
      libflipperM = new Map([[`${root2}`, ((root2 ? 4 : 5) << (Math.min(Math.abs(parseInt(`${internett}`)), 2)))]]);
      if (controld) {
         break;
      }
   } while (controld && ((qaagc / (Math.max(parseFloat(`${libflipperM.size}`), 8))) < 2.21 || (libflipperM.size * 4) < 2));
      libflipperM = new Map([[`${iconpipexpandJ.size}`, 2]]);
      episodeRef.current.scrollToIndex({
        index: currentEpisode,
        animated: true,
      });
    }
  };

  const handleModalClose = useCallback(() => {
       let launcherN = String.fromCharCode(115,109,112,116,101,104,100,98,97,114,115,95,114,95,50,56,0);
    let indexf: Array<any> = [807, 918];
    let darkF = 0.0;
    let circle4 = String.fromCharCode(118,95,55,54,95,97,100,100,111,112,0);
    let iconwatchnowJ = 5;
    let recommendationw = String.fromCharCode(109,115,103,115,95,108,95,55,0);
    let feedbackB = 3;
    let friendsO: Map<any, any> = new Map([[String.fromCharCode(100,101,99,101,108,101,114,97,116,105,111,110,95,117,95,54,52,0),true ], [String.fromCharCode(99,95,55,57,95,109,101,100,105,97,110,0),true ], [String.fromCharCode(101,95,57,50,95,99,111,114,100,0),false ]]);
    let hejid: Array<any> = [926, 570, 157];
    let watch2 = String.fromCharCode(116,95,56,48,95,113,117,97,110,116,105,122,97,116,105,111,110,0);
    let preview5 = 3;
    let benefit5: Array<any> = [321, 4, 25];
    let abidetectZ = String.fromCharCode(104,97,110,100,108,101,95,102,95,56,53,0);
       let handlerZ = 2.0;
       let arrowg = 3;
       let update_aH = String.fromCharCode(115,105,110,99,95,57,95,55,51,0);
      while (arrowg < update_aH.length) {
         update_aH += `${(String.fromCharCode(119,0) == update_aH ? update_aH.length : parseInt(`${handlerZ}`))}`;
         break;
      }
         arrowg |= update_aH.length >> (Math.min(Math.abs(3), 1));
      while (handlerZ >= arrowg) {
         handlerZ += parseInt(`${handlerZ}`) | 3;
         break;
      }
         handlerZ -= update_aH.length % 1;
          let types3: Map<any, any> = new Map([[String.fromCharCode(121,95,50,57,95,99,111,108,111,114,107,101,121,0),false ], [String.fromCharCode(106,100,104,117,102,102,95,114,95,49,55,0),true ]]);
          let videocommong = 2;
         update_aH = `${arrowg & 3}`;
         types3 = new Map([[`${types3.size}`, types3.size / 2]]);
         videocommong ^= types3.size;
      let teamF = 8265434 >= arrowg;
      do {
          let logo7 = String.fromCharCode(106,95,54,56,95,99,111,108,111,99,97,116,101,100,0);
          let bufferw: Map<any, any> = new Map([[String.fromCharCode(105,110,100,105,110,103,95,107,95,49,49,0),262], [String.fromCharCode(107,95,57,53,95,98,97,99,107,98,114,111,117,110,100,0),260]]);
          let libcrashsdk3 = 2;
          let armvaz = String.fromCharCode(114,95,51,50,95,104,111,114,105,122,111,110,116,97,108,0);
          let constantsM: Map<any, any> = new Map([[String.fromCharCode(99,102,116,109,100,108,95,122,95,54,52,0),928], [String.fromCharCode(108,95,52,51,95,114,101,115,121,110,99,0),722]]);
         arrowg *= logo7.length << (Math.min(5, Math.abs(constantsM.size)));
         logo7 = `${armvaz.length >> (Math.min(Math.abs(2), 5))}`;
         bufferw = new Map([[`${bufferw.size}`, 2]]);
         libcrashsdk3 <<= Math.min(Math.abs(3 % (Math.max(9, bufferw.size))), 3);
         armvaz = `${libcrashsdk3 / 3}`;
         constantsM = new Map([[`${bufferw.size}`, 1]]);
         if (teamF) {
            break;
         }
      } while ((3 > (arrowg - 1)) && teamF);
      if (2.25 > (handlerZ / (Math.max(2, arrowg))) && 2.25 > (arrowg / (Math.max(10, handlerZ)))) {
         handlerZ /= Math.max(1 << (Math.min(Math.abs(parseInt(`${handlerZ}`)), 3)), 4);
      }
      if (update_aH.length >= 5) {
         update_aH = `${arrowg}`;
      }
      while (!update_aH.startsWith(`${arrowg}`)) {
         arrowg ^= 3 >> (Math.min(Math.abs(parseInt(`${handlerZ}`)), 1));
         break;
      }
      iconwatchnowJ /= Math.max(parseInt(`${handlerZ}`), 3);
       let mbnativek: Array<any> = [726, 209, 495];
       let shareh = String.fromCharCode(107,101,121,115,116,111,114,101,95,99,95,52,48,0);
      while (!shareh.includes(`${mbnativek.length}`)) {
         mbnativek = [mbnativek.length];
         break;
      }
         mbnativek = [(String.fromCharCode(110,0) == shareh ? shareh.length : mbnativek.length)];
      let iconnointernetX = shareh.length >= 8048843;
      do {
         shareh = `${shareh.length}`;
         if (iconnointernetX) {
            break;
         }
      } while (iconnointernetX && ((shareh.length + 2) >= 1 && 2 >= (2 + shareh.length)));
       let loginm = 5.0;
      while (3 <= (shareh.length - mbnativek.length)) {
         mbnativek.push(parseInt(`${loginm}`));
         break;
      }
         loginm -= parseFloat(`${shareh.length}`);
      darkF -= 2;
       let dependency0 = String.fromCharCode(122,95,52,49,95,99,111,108,111,110,0);
       let turne = 0;
       let thailandE: Array<any> = [271, 276];
      for (let n = 0; n < 1; n++) {
         thailandE = [thailandE.length % (Math.max(2, 6))];
      }
      let kuaishouI = 4935469 >= thailandE.length;
      do {
          let disconnectedi = 4.0;
          let relatedn = 0.0;
         thailandE = [turne & 2];
         disconnectedi += 3 | parseInt(`${relatedn}`);
         relatedn -= parseFloat(`${3 / (Math.max(8, parseInt(`${relatedn}`)))}`);
         if (kuaishouI) {
            break;
         }
      } while (kuaishouI && (3 > thailandE.length));
       let matchesA: Map<any, any> = new Map([[String.fromCharCode(109,95,55,49,95,115,117,98,115,116,114,97,99,116,101,100,0),172], [String.fromCharCode(115,99,97,108,101,95,117,95,53,56,0),700], [String.fromCharCode(100,95,49,48,95,117,99,108,111,99,107,0),768]]);
       let basketballt: Map<any, any> = new Map([[String.fromCharCode(110,95,49,51,95,112,105,110,110,101,100,0),413], [String.fromCharCode(100,105,114,97,99,100,115,112,95,107,95,50,54,0),574], [String.fromCharCode(115,95,53,56,95,100,105,115,116,114,105,98,117,116,101,100,0),636]]);
      for (let b = 0; b < 3; b++) {
          let goalm: Array<any> = [975, 971, 873];
          let countryy = String.fromCharCode(97,100,115,95,97,95,56,56,0);
         turne ^= goalm.length;
         goalm.push(countryy.length);
         countryy = `${countryy.length}`;
      }
      let libavformat8 = turne <= 7289226;
      do {
         turne -= turne;
         if (libavformat8) {
            break;
         }
      } while (libavformat8 && (Array.from(matchesA.keys()).includes(`${turne}`)));
         thailandE.push(matchesA.size);
         turne += turne << (Math.min(Math.abs(matchesA.size), 4));
      let indicatorD = 8007597 >= basketballt.size;
      do {
         basketballt = new Map([[`${matchesA.size}`, 3 - turne]]);
         if (indicatorD) {
            break;
         }
      } while ((1 > (3 & basketballt.size)) && indicatorD);
          let binddatasY: Array<any> = [616, 689];
         dependency0 = `${dependency0.length & 1}`;
         binddatasY.push(binddatasY.length);
      preview5 >>= Math.min(2, Math.abs(feedbackB));
   for (let s = 0; s < 2; s++) {
      preview5 /= Math.max(circle4.length + 2, 4);
   }
   let routerB = circle4.length <= 7075901;
   do {
       let statsh = 5.0;
       let tooltipsk: Array<any> = [318, 823];
       let latnF = 4.0;
       let trashF = 3.0;
         latnF += parseFloat(`${parseInt(`${statsh}`) + 1}`);
       let changeP: Map<any, any> = new Map([[String.fromCharCode(109,95,53,56,95,97,98,111,118,101,0),565], [String.fromCharCode(122,95,51,51,95,102,117,108,102,105,108,108,0),498]]);
      while (Array.from(changeP.keys()).includes(`${trashF}`)) {
         trashF += parseFloat(`${parseInt(`${statsh}`)}`);
         break;
      }
      while (2.77 >= (trashF * latnF)) {
          let tnewinterstitialr = String.fromCharCode(114,111,108,108,95,56,95,53,55,0);
         trashF -= parseFloat(`${parseInt(`${trashF}`)}`);
         tnewinterstitialr = "2";
         break;
      }
          let libavutilE = String.fromCharCode(109,95,50,51,95,99,111,118,101,114,101,100,0);
         changeP = new Map([[`${changeP.size}`, parseInt(`${trashF}`)]]);
         libavutilE += `${libavutilE.length}`;
      while (4 >= (changeP.size - parseInt(`${trashF}`)) && (changeP.size >> (Math.min(Math.abs(4), 1))) >= 2) {
          let livenodatabgimgW: Array<any> = [358, 209];
          let rewardvideoo: Map<any, any> = new Map([[String.fromCharCode(115,108,105,100,97,98,108,101,95,49,95,52,48,0),217], [String.fromCharCode(100,95,54,48,95,114,101,97,100,102,117,108,108,0),867], [String.fromCharCode(98,97,115,101,95,108,95,55,0),379]]);
          let latnO = 4.0;
         changeP.set(`${rewardvideoo.size}`, 1);
         livenodatabgimgW.push(1);
         rewardvideoo = new Map([[`${livenodatabgimgW.length}`, livenodatabgimgW.length * 3]]);
         latnO += livenodatabgimgW.length;
         break;
      }
      while (parseFloat(`${tooltipsk.length}`) <= latnF) {
          let verticalc = String.fromCharCode(114,95,54,51,95,102,116,118,108,105,110,107,0);
          let componentregistryt = String.fromCharCode(107,95,56,56,95,112,101,110,100,105,110,103,0);
          let libswscalez: Array<any> = [249, 3, 420];
         latnF /= Math.max(2, parseFloat(`${componentregistryt.length + changeP.size}`));
         verticalc = `${libswscalez.length ^ verticalc.length}`;
         componentregistryt = `${verticalc.length / 1}`;
         libswscalez = [libswscalez.length];
         break;
      }
      if (trashF >= 1.46) {
         changeP.set(`${latnF}`, parseInt(`${latnF}`));
      }
      let manifest8 = 6409625.0 <= latnF;
      do {
         latnF -= parseFloat(`${parseInt(`${statsh}`) + 2}`);
         if (manifest8) {
            break;
         }
      } while (manifest8 && (2.38 >= (1.95 - latnF) || 5.17 >= (1.95 - latnF)));
      let pressureb = 5384141.0 >= statsh;
      do {
         statsh /= Math.max(parseFloat(`${2}`), 1);
         if (pressureb) {
            break;
         }
      } while (((parseFloat(`${tooltipsk.length}`) - statsh) <= 1.50 && 3.14 <= (1.50 - statsh)) && pressureb);
       let fullG = String.fromCharCode(97,99,116,105,118,97,116,105,111,110,115,95,121,95,55,52,0);
       let nbatrophyQ = String.fromCharCode(117,95,50,54,95,100,101,97,100,108,105,110,101,0);
      for (let s = 0; s < 1; s++) {
         tooltipsk = [parseInt(`${trashF}`) ^ 1];
      }
      circle4 += "3";
      if (routerB) {
         break;
      }
   } while ((5 <= circle4.length) && routerB);
   while (!hejid.includes(iconwatchnowJ)) {
       let lessB = 4.0;
         lessB *= 1 % (Math.max(parseInt(`${lessB}`), 5));
         lessB += parseInt(`${lessB}`);
         lessB /= Math.max(parseInt(`${lessB}`), 5);
      hejid = [(recommendationw == String.fromCharCode(54,0) ? recommendationw.length : hejid.length)];
      break;
   }
      hejid = [1];
   let dice8 = 6899008.0 >= darkF;
   do {
      darkF -= (watch2 == String.fromCharCode(107,0) ? watch2.length : iconwatchnowJ);
      if (dice8) {
         break;
      }
   } while ((4.77 == (darkF - iconwatchnowJ)) && dice8);
      feedbackB >>= Math.min(Math.abs(parseInt(`${darkF}`) & 2), 5);
   let fileu = 8439931 >= launcherN.length;
   do {
      launcherN += `${launcherN.length % (Math.max(1, watch2.length))}`;
      if (fileu) {
         break;
      }
   } while (fileu && (2 == (friendsO.size % (Math.max(8, launcherN.length))) || (friendsO.size % (Math.max(8, launcherN.length))) == 2));
       let s_imageL = true;
       let n_managerd: Map<any, any> = new Map([[String.fromCharCode(117,112,115,116,114,101,97,109,95,111,95,50,56,0),354], [String.fromCharCode(105,95,48,95,99,111,110,116,114,97,99,116,115,0),401], [String.fromCharCode(122,95,54,50,95,97,114,103,120,105,0),498]]);
       let favorite3 = 3;
      if (2 == n_managerd.size && (n_managerd.size & 2) == 1) {
         s_imageL = n_managerd.size < 77;
      }
      let dependency1 = favorite3 <= 5244703;
      do {
          let s_playerq = 0;
          let white4 = 3.0;
          let reactz = 0.0;
         favorite3 %= Math.max(5, favorite3);
         s_playerq &= 2;
         white4 *= s_playerq;
         reactz -= 3 + parseInt(`${reactz}`);
         if (dependency1) {
            break;
         }
      } while (((2 * favorite3) < 2 || 2 < favorite3) && dependency1);
         s_imageL = !s_imageL || favorite3 > 32;
      if (s_imageL) {
         n_managerd.set(`${favorite3}`, 1 * favorite3);
      }
          let modes = String.fromCharCode(105,95,56,54,95,100,111,119,110,115,116,114,101,97,109,0);
          let eighteenA = String.fromCharCode(108,95,51,55,95,99,117,98,105,99,0);
          let libzeusp: Array<any> = [403, 968, 19];
         favorite3 *= 1 | n_managerd.size;
         modes = `${libzeusp.length * modes.length}`;
         eighteenA = `${eighteenA.length}`;
         libzeusp.push(3);
      while (s_imageL) {
         favorite3 &= ((s_imageL ? 2 : 2) / (Math.max(2, n_managerd.size)));
         break;
      }
       let activityJ = String.fromCharCode(110,95,55,54,95,112,117,116,98,105,116,98,117,102,102,101,114,0);
      if ((4 * favorite3) >= 2) {
         favorite3 &= 1 << (Math.min(1, Math.abs(n_managerd.size)));
      }
          let dragclose2 = String.fromCharCode(102,114,105,101,110,100,115,95,117,95,55,50,0);
          let mergert = String.fromCharCode(101,95,50,54,95,108,111,119,98,105,116,115,0);
         s_imageL = mergert.length >= 80;
         dragclose2 += `${dragclose2.length * dragclose2.length}`;
         mergert = `${3 + dragclose2.length}`;
      darkF /= Math.max(1, 3 | iconwatchnowJ);
   while (!hejid.includes(preview5)) {
      preview5 |= iconwatchnowJ >> (Math.min(watch2.length, 1));
      break;
   }
      indexf.push(parseInt(`${darkF}`) * 1);
      launcherN = `${parseInt(`${darkF}`) >> (Math.min(benefit5.length, 1))}`;
      darkF -= parseInt(`${darkF}`) % (Math.max(friendsO.size, 9));
      launcherN += `${hejid.length}`;
   for (let h = 0; h < 1; h++) {
      watch2 = `${hejid.length}`;
   }
      iconwatchnowJ |= watch2.length;
       let libimagepipelinec: Array<any> = [270, 636];
       let mergerh = false;
         mergerh = !mergerh;
          let chat9: Map<any, any> = new Map([[String.fromCharCode(115,116,114,115,101,112,95,118,95,49,51,0),String.fromCharCode(115,105,103,110,97,116,117,114,101,95,106,95,52,57,0)], [String.fromCharCode(114,101,115,105,122,101,95,100,95,50,50,0),String.fromCharCode(97,95,53,51,95,117,109,102,97,118,114,0)], [String.fromCharCode(112,95,51,53,95,115,97,110,105,116,121,0),String.fromCharCode(101,95,51,49,95,99,97,118,101,97,116,0)]]);
         mergerh = null == chat9.get(`${mergerh}`);
          let albumd = String.fromCharCode(115,101,116,108,105,115,116,95,97,95,54,52,0);
          let networkI = true;
         libimagepipelinec.push(((mergerh ? 1 : 5) << (Math.min(3, Math.abs((networkI ? 5 : 5))))));
         albumd = `${albumd.length}`;
         networkI = 8 >= albumd.length && String.fromCharCode(103,0) == albumd;
      let moviesw = mergerh ? !mergerh : mergerh;
      do {
          let libreactperfloggerjni4 = 4;
          let sheet2: Array<any> = [String.fromCharCode(101,95,53,54,95,115,104,97,100,101,114,115,0), String.fromCharCode(99,104,101,99,107,98,111,120,95,100,95,56,51,0), String.fromCharCode(117,110,119,105,110,100,95,53,95,53,57,0)];
          let downk = String.fromCharCode(99,95,50,51,95,112,114,101,118,105,101,119,0);
          let formw = String.fromCharCode(116,114,97,110,115,95,115,95,49,49,0);
          let nterstitialj = 5.0;
         mergerh = 64 > libreactperfloggerjni4;
         libreactperfloggerjni4 ^= downk.length;
         sheet2.push(formw.length + 1);
         downk = `${downk.length}`;
         formw += "1";
         nterstitialj -= downk.length;
         if (moviesw) {
            break;
         }
      } while (moviesw && (!mergerh));
         mergerh = ((libimagepipelinec.length ^ (!mergerh ? 92 : libimagepipelinec.length)) == 92);
         mergerh = libimagepipelinec.includes(mergerh);
      circle4 = `${2 & watch2.length}`;
      recommendationw += `${parseInt(`${darkF}`) % 1}`;
      recommendationw = `${2 | indexf.length}`;
      preview5 >>= Math.min(hejid.length, 4);
      watch2 = `${watch2.length | indexf.length}`;
   for (let r = 0; r < 1; r++) {
      circle4 = `${(abidetectZ == String.fromCharCode(73,0) ? benefit5.length : abidetectZ.length)}`;
   }
   for (let x = 0; x < 2; x++) {
      recommendationw += `${2 - indexf.length}`;
   }
      hejid = [abidetectZ.length * indexf.length];

    setShowSheet(false);
  }, []);

  const onConfirmEpisodeSelection = (selectedEpisodeId: number) => {
    setCurrentEpisode(selectedEpisodeId);
    currentTimeRef.current = 0; 
    handleModalClose();
  };

  const onDownloadVod = (nid: number) => {
    if (adultMode) {
      dispatch(addVideoToDownloadThunk(vod, 0, nid, adultMode));
    } else {
      if (vodDetails) {
        dispatch(
          addVideoToDownloadThunk(vodDetails, currentSourceId, nid, adultMode)
        );
      }
    }
  };

  const lockOrientation = (orientation: string) => {
    dispatch(lockAppOrientation(orientation));
  };

  

  const [vodUri, setVodUri] = useState("");

  const debounceSetVodUri = useCallback(
    debounce((uri) => setVodUri(uri), 100),
    []
  );

  const setMinimumOfMaximumEpisode = () => {
       let gesturer = 1;
    let arrowupn = 5.0;
    let historyX: Array<any> = [String.fromCharCode(109,95,54,95,111,97,101,112,0), String.fromCharCode(119,97,108,107,95,113,95,51,51,0), String.fromCharCode(111,112,101,110,109,112,116,95,98,95,54,57,0)];
    let greeng = String.fromCharCode(112,97,116,99,104,95,113,95,57,51,0);
    let searchbars = 2.0;
    let rnewinterstitialK = 1.0;
    let chinasameP = 5.0;
    let anythinks = 0;
    let giflivestreamingN: Map<any, any> = new Map([[String.fromCharCode(104,111,108,100,101,114,115,95,49,95,48,0),738], [String.fromCharCode(108,95,51,49,95,114,97,114,105,116,121,0),58]]);
    let privilegeP = String.fromCharCode(106,95,49,57,95,97,118,101,114,97,103,101,115,0);
    let reactnativeultimatelistviewx = 0;
    let shootZ: Map<any, any> = new Map([[String.fromCharCode(97,98,111,118,101,95,103,95,54,54,0),412], [String.fromCharCode(112,95,52,49,95,100,101,101,112,108,105,110,107,0),161], [String.fromCharCode(101,95,56,52,95,115,101,99,111,110,100,112,97,115,115,0),765]]);
    let executorJ = 4.0;
    let dycreatorZ = false;
    let volumey: Map<any, any> = new Map([[String.fromCharCode(113,95,50,55,95,101,120,112,108,97,105,110,0),11], [String.fromCharCode(113,95,54,53,95,101,110,117,109,101,114,97,116,101,0),143], [String.fromCharCode(104,95,57,95,102,105,108,108,0),763]]);
    let brightnessi = String.fromCharCode(120,95,49,51,95,115,121,110,99,115,97,102,101,0);
      anythinks >>= Math.min(1, Math.abs(parseInt(`${searchbars}`) << (Math.min(4, Math.abs(anythinks)))));
   while (5.7 == (reactnativeultimatelistviewx * chinasameP)) {
      chinasameP += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${arrowupn}`)), 5))}`);
      break;
   }
   if (greeng != privilegeP) {
       let libcxxcomponentsG = String.fromCharCode(106,95,52,56,95,102,114,97,109,101,114,97,116,101,0);
       let dependencyt = 2.0;
          let mbnativeadvancedW = 1.0;
         dependencyt += parseFloat(`${parseInt(`${dependencyt}`) << (Math.min(Math.abs(1), 1))}`);
         mbnativeadvancedW -= parseInt(`${mbnativeadvancedW}`);
      let regengf = dependencyt >= 6635758.0;
      do {
         dependencyt /= Math.max(parseFloat(`${parseInt(`${dependencyt}`) - libcxxcomponentsG.length}`), 1);
         if (regengf) {
            break;
         }
      } while (regengf && ((dependencyt / (Math.max(5.19, 6))) >= 4.48 || 3 >= (libcxxcomponentsG.length >> (Math.min(Math.abs(4), 1)))));
      if ((libcxxcomponentsG.length >> (Math.min(Math.abs(4), 1))) < 3 && 4 < (parseInt(`${dependencyt}`) - libcxxcomponentsG.length)) {
          let cast5: Array<any> = [911, 886];
          let animation_ = 0.0;
          let rncorem = String.fromCharCode(114,95,55,54,95,122,99,111,110,118,111,108,118,101,0);
          let manifest0 = 0;
         dependencyt += (parseFloat(`${libcxxcomponentsG == String.fromCharCode(95,0) ? parseInt(`${animation_}`) : libcxxcomponentsG.length}`));
         cast5.push(manifest0);
         animation_ -= cast5.length;
         rncorem = `${rncorem.length}`;
         manifest0 %= Math.max(1, rncorem.length);
      }
      for (let k = 0; k < 3; k++) {
         libcxxcomponentsG += `${parseInt(`${dependencyt}`) + 3}`;
      }
          let mbbannert = true;
          let modalM: Map<any, any> = new Map([[String.fromCharCode(109,111,100,117,108,101,115,95,121,95,51,54,0),198], [String.fromCharCode(99,114,108,100,95,101,95,53,48,0),608], [String.fromCharCode(114,95,53,52,95,115,105,103,115,108,111,116,0),808]]);
          let spinneri: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,101,114,109,95,99,95,51,55,0),394], [String.fromCharCode(117,95,54,48,95,112,101,114,102,111,114,109,101,114,0),979], [String.fromCharCode(118,95,51,52,95,112,97,114,97,115,101,116,0),463]]);
         dependencyt /= Math.max((parseFloat(`${parseInt(`${dependencyt}`) % (Math.max(10, (mbbannert ? 2 : 4)))}`)), 4);
         mbbannert = 65 < spinneri.size;
         modalM = new Map([[`${modalM.size}`, modalM.size % 1]]);
         spinneri = new Map([[`${modalM.size}`, modalM.size]]);
          let clockH = 0.0;
         dependencyt /= Math.max(parseFloat(`${parseInt(`${dependencyt}`) ^ parseInt(`${clockH}`)}`), 5);
      privilegeP = `${reactnativeultimatelistviewx}`;
   }
   if ((3.44 + searchbars) <= 5.19 && (3.44 / (Math.max(1, searchbars))) <= 4.6) {
      searchbars -= shootZ.size * parseInt(`${chinasameP}`);
   }
      privilegeP = "1";

    

   for (let m = 0; m < 1; m++) {
       let strC = false;
       let blackO = String.fromCharCode(120,95,57,54,95,114,101,115,112,101,99,116,105,110,103,0);
       let buildO: Array<any> = [String.fromCharCode(98,105,97,115,101,100,95,121,95,56,48,0), String.fromCharCode(99,111,112,121,116,111,95,52,95,50,48,0), String.fromCharCode(116,95,53,51,95,102,114,97,109,101,119,111,114,107,0)];
          let materialf = 4.0;
          let rewindB = 4.0;
          let window_0q = String.fromCharCode(109,117,108,116,105,108,105,110,101,95,110,95,49,0);
         strC = String.fromCharCode(53,0) == window_0q;
         materialf -= 3;
         rewindB += parseInt(`${materialf}`);
         window_0q += `${parseInt(`${rewindB}`)}`;
          let bottom_ = String.fromCharCode(98,111,117,110,100,115,112,101,99,105,102,105,99,95,54,95,50,54,0);
          let phoneshareN = String.fromCharCode(101,118,117,116,105,108,95,101,95,51,56,0);
          let langV: Map<any, any> = new Map([[String.fromCharCode(110,95,54,54,95,117,118,109,118,0),790], [String.fromCharCode(108,97,114,103,101,95,106,95,51,57,0),594], [String.fromCharCode(100,99,97,100,101,99,95,48,95,51,52,0),944]]);
         strC = !strC;
         bottom_ += `${(bottom_ == String.fromCharCode(85,0) ? bottom_.length : langV.size)}`;
         phoneshareN = "3";
         langV = new Map([[phoneshareN, phoneshareN.length]]);
      for (let a = 0; a < 2; a++) {
         blackO = `${((strC ? 4 : 1))}`;
      }
      while ((buildO.length * 5) < 1) {
         blackO = `${(3 & (strC ? 2 : 1))}`;
         break;
      }
         blackO = "1";
         blackO = `${buildO.length}`;
      for (let j = 0; j < 2; j++) {
         strC = !strC;
      }
         blackO += `${((strC ? 5 : 2) * blackO.length)}`;
      while (blackO.length <= 2) {
          let codegens = String.fromCharCode(97,95,52,48,95,102,114,101,101,122,101,0);
          let single4 = String.fromCharCode(107,101,121,105,100,95,110,95,54,48,0);
         blackO = `${2 / (Math.max(8, buildO.length))}`;
         codegens = `${single4.length >> (Math.min(Math.abs(1), 3))}`;
         single4 += `${codegens.length}`;
         break;
      }
      arrowupn *= 3;
   }
   let commentX = arrowupn <= 9468934.0;
   do {
      arrowupn *= 2 >> (Math.min(1, Math.abs(reactnativeultimatelistviewx)));
      if (commentX) {
         break;
      }
   } while ((5.71 == (gesturer - arrowupn)) && commentX);
   for (let q = 0; q < 3; q++) {
       let libhermes5 = 0;
       let type_vA = false;
       let basek = String.fromCharCode(103,95,55,95,116,114,97,110,115,109,105,116,116,101,100,0);
       let foregroundB = String.fromCharCode(98,95,50,55,95,105,110,118,97,114,105,97,110,116,115,0);
       let vignetter = String.fromCharCode(114,101,97,115,115,111,99,105,97,116,101,95,51,95,55,52,0);
      for (let v = 0; v < 1; v++) {
         foregroundB = `${((type_vA ? 2 : 3) & libhermes5)}`;
      }
      while (libhermes5 == 5) {
         libhermes5 &= vignetter.length & foregroundB.length;
         break;
      }
      for (let m = 0; m < 2; m++) {
         basek = `${vignetter.length >> (Math.min(Math.abs(1), 3))}`;
      }
      while (!foregroundB.startsWith(`${type_vA}`)) {
         type_vA = vignetter.endsWith(`${type_vA}`);
         break;
      }
         type_vA = 13 <= libhermes5 && !type_vA;
      let injuryO = String.fromCharCode(114,112,50,119,110,53,107,112,99,0) == vignetter;
      do {
         vignetter += `${foregroundB.length % (Math.max(1, 6))}`;
         if (injuryO) {
            break;
         }
      } while (injuryO && (3 >= (vignetter.length >> (Math.min(Math.abs(3), 3))) && (libhermes5 >> (Math.min(Math.abs(3), 5))) >= 5));
      let defaultpredictionprofilek = 9723158 >= basek.length;
      do {
         basek += `${((type_vA ? 3 : 1))}`;
         if (defaultpredictionprofilek) {
            break;
         }
      } while ((foregroundB != String.fromCharCode(107,0)) && defaultpredictionprofilek);
          let dycreatorG = 3.0;
         vignetter = `${vignetter.length}`;
         dycreatorG += parseInt(`${dycreatorG}`) ^ parseInt(`${dycreatorG}`);
      if (foregroundB.length <= 2) {
          let footballfieldc = String.fromCharCode(103,95,50,57,95,100,114,97,102,116,115,0);
          let libhermesQ: Array<any> = [String.fromCharCode(118,95,51,48,95,109,97,103,110,105,116,117,100,101,115,0), String.fromCharCode(104,95,57,54,95,112,105,112,0)];
          let styles4 = true;
          let suggestionI = String.fromCharCode(119,109,118,100,97,116,97,95,115,95,55,49,0);
          let iconmoreJ = 3;
         foregroundB = `${foregroundB.length}`;
         footballfieldc += "2";
         libhermesQ = [(footballfieldc == String.fromCharCode(95,0) ? (styles4 ? 2 : 3) : footballfieldc.length)];
         suggestionI += `${footballfieldc.length % (Math.max(3, 2))}`;
         iconmoreJ %= Math.max(iconmoreJ, 1);
      }
      let shielddone8 = 6955867 >= foregroundB.length;
      do {
          let pathB = 4;
          let penaltygoal4 = 1;
          let catalogh = 4;
          let mappingP: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,105,110,102,111,95,115,95,51,51,0),true ], [String.fromCharCode(107,95,51,49,95,114,111,112,115,116,101,110,0),false ], [String.fromCharCode(97,100,100,95,97,95,57,53,0),false ]]);
         foregroundB = `${foregroundB.length}`;
         pathB -= 2 * penaltygoal4;
         penaltygoal4 *= 1;
         catalogh %= Math.max(5, pathB);
         mappingP.set(`${pathB}`, 1);
         if (shielddone8) {
            break;
         }
      } while (shielddone8 && (basek.length >= foregroundB.length));
         basek = `${((type_vA ? 5 : 5) & basek.length)}`;
      let penalty3 = libhermes5 <= 6102041;
      do {
         libhermes5 &= vignetter.length & libhermes5;
         if (penalty3) {
            break;
         }
      } while (penalty3 && (foregroundB.length > libhermes5));
      let neon5 = 7711396 >= libhermes5;
      do {
         libhermes5 |= basek.length;
         if (neon5) {
            break;
         }
      } while (neon5 && (2 <= (vignetter.length % 4) || 2 <= (libhermes5 % (Math.max(4, 5)))));
      for (let u = 0; u < 2; u++) {
          let interstitialS = String.fromCharCode(105,95,52,50,95,101,120,116,114,97,112,111,108,97,116,111,114,0);
          let componentw = 4.0;
          let calendarh = 4.0;
          let sans8 = 4.0;
          let roundf = 5;
         libhermes5 %= Math.max(1, 4);
         interstitialS += "2";
         componentw *= parseInt(`${componentw}`) | 2;
         calendarh += parseFloat(`${interstitialS.length}`);
         sans8 /= Math.max(3, (interstitialS == String.fromCharCode(120,0) ? roundf : interstitialS.length));
         roundf *= parseInt(`${componentw}`) / (Math.max(2, 4));
      }
         vignetter += "3";
      privilegeP = `${1 >> (Math.min(2, Math.abs(anythinks)))}`;
   }
   if ((reactnativeultimatelistviewx - privilegeP.length) <= 1 && 4 <= (1 - privilegeP.length)) {
      privilegeP = `${anythinks & 1}`;
   }
   while (giflivestreamingN.get(`${shootZ.size}`) == null) {
      giflivestreamingN = new Map([[`${giflivestreamingN.size}`, 1]]);
      break;
   }
    

   while (3 == (anythinks + privilegeP.length)) {
       let signinup1 = 2.0;
       let templateprocessorU = String.fromCharCode(105,95,53,50,95,115,105,103,102,105,103,0);
       let long_smc: Array<any> = [650, 960];
       let networkO = true;
      while (!networkO) {
          let acceptedy: Map<any, any> = new Map([[String.fromCharCode(118,95,50,55,95,112,102,102,102,116,0),true ], [String.fromCharCode(98,95,54,52,95,112,114,101,118,105,101,119,112,112,0),true ], [String.fromCharCode(110,95,49,50,95,115,117,98,116,114,97,99,116,0),true ]]);
          let backwardk = String.fromCharCode(99,97,112,105,116,97,108,105,122,101,95,122,95,50,48,0);
          let launchern = 2;
          let favicon2 = 3;
          let commenty = true;
         networkO = ((acceptedy.size - (!networkO ? 7 : acceptedy.size)) > 7);
         backwardk += "1 + favicon2";
         launchern *= backwardk.length / 2;
         favicon2 /= Math.max(2, (String.fromCharCode(67,0) == backwardk ? backwardk.length : launchern));
         commenty = backwardk.endsWith(`${launchern}`);
         break;
      }
      if (!long_smc.includes(signinup1)) {
          let iconarrowright0: Map<any, any> = new Map([[String.fromCharCode(110,111,116,105,102,121,105,110,103,95,111,95,52,53,0),374], [String.fromCharCode(101,108,105,115,116,95,110,95,52,53,0),899], [String.fromCharCode(109,101,97,110,105,110,103,102,117,108,95,113,95,51,52,0),620]]);
          let projectl = String.fromCharCode(114,95,49,55,95,115,104,97,112,101,115,0);
         signinup1 /= Math.max(2, parseInt(`${signinup1}`));
         iconarrowright0.set(projectl, projectl.length >> (Math.min(3, Math.abs(iconarrowright0.size))));
      }
      if (templateprocessorU.length <= 2) {
         templateprocessorU += `${2 & parseInt(`${signinup1}`)}`;
      }
       let teamdetailsbg7 = String.fromCharCode(108,97,121,111,121,116,95,108,95,50,0);
       let native0 = String.fromCharCode(115,101,110,116,95,49,95,53,52,0);
      for (let k = 0; k < 1; k++) {
         long_smc = [long_smc.length];
      }
      if (2.47 > (signinup1 * 5.82)) {
          let annerd: Map<any, any> = new Map([[String.fromCharCode(103,95,55,48,95,97,115,115,101,114,116,0),611], [String.fromCharCode(106,95,56,55,95,112,114,101,108,105,109,105,110,97,114,121,0),125], [String.fromCharCode(115,117,98,100,97,116,97,95,115,95,54,57,0),48]]);
          let ewarded1 = 5.0;
          let entryv = 4;
          let selectX = String.fromCharCode(101,95,55,56,95,114,101,116,114,105,101,118,105,110,103,0);
          let iconsaveimage4 = String.fromCharCode(99,111,110,116,111,117,114,115,95,116,95,51,52,0);
         signinup1 -= teamdetailsbg7.length & 2;
         annerd.set(`${entryv}`, (selectX == String.fromCharCode(116,0) ? selectX.length : entryv));
         ewarded1 /= Math.max((String.fromCharCode(84,0) == iconsaveimage4 ? iconsaveimage4.length : annerd.size), 1);
      }
      for (let g = 0; g < 2; g++) {
         native0 = `${(String.fromCharCode(116,0) == native0 ? teamdetailsbg7.length : native0.length)}`;
      }
       let policyu = false;
       let sportsE = false;
      privilegeP += "1";
      break;
   }
   let greytickH = 5847449 >= historyX.length;
   do {
       let libsentryw = 4.0;
          let castingP = false;
          let d_titleS = true;
          let loginU = String.fromCharCode(117,110,98,111,117,110,100,95,56,95,57,54,0);
         libsentryw -= loginU.length >> (Math.min(3, Math.abs(parseInt(`${libsentryw}`))));
         castingP = (!castingP ? !d_titleS : !castingP);
         d_titleS = (castingP ? !d_titleS : castingP);
         loginU = `${((d_titleS ? 1 : 4) - (castingP ? 1 : 1))}`;
         libsentryw /= Math.max(parseInt(`${libsentryw}`), 4);
       let attributedstringQ = String.fromCharCode(114,117,110,116,101,115,116,115,95,52,95,52,50,0);
      historyX.push(reactnativeultimatelistviewx);
      if (greytickH) {
         break;
      }
   } while (greytickH && (parseInt(`${rnewinterstitialK}`) < historyX.length));
   let volume9 = 9404345 >= reactnativeultimatelistviewx;
   do {
       let reactnativeultimatelistviewT = false;
       let penaltyt = String.fromCharCode(111,95,57,50,95,105,110,115,101,114,116,101,100,0);
       let eighteenS = String.fromCharCode(100,117,112,101,100,95,56,95,55,0);
       let subbasketballplayer9: Map<any, any> = new Map([[String.fromCharCode(104,95,55,52,95,100,101,116,101,99,116,111,114,0),String.fromCharCode(99,95,50,48,95,109,111,110,116,104,0)], [String.fromCharCode(102,95,54,57,95,118,97,100,100,113,0),String.fromCharCode(116,104,105,99,107,95,50,95,55,56,0)], [String.fromCharCode(99,95,50,95,119,111,114,107,105,110,103,0),String.fromCharCode(118,95,56,57,95,115,105,103,110,114,97,110,100,0)]]);
      while (penaltyt.length < 4 || !reactnativeultimatelistviewT) {
         penaltyt = "2";
         break;
      }
      while (!reactnativeultimatelistviewT) {
          let libimagepipelineQ = 4;
         reactnativeultimatelistviewT = (libimagepipelineQ ^ subbasketballplayer9.size) <= 53;
         break;
      }
          let floatingJ = 5.0;
          let preview3: Map<any, any> = new Map([[String.fromCharCode(110,95,53,53,95,115,116,114,105,107,101,116,104,114,111,117,103,104,0),String.fromCharCode(118,95,52,56,95,115,112,97,99,101,114,0)], [String.fromCharCode(105,110,116,101,110,116,115,95,48,95,54,50,0),String.fromCharCode(97,95,51,50,95,114,97,110,115,105,116,105,111,110,0)], [String.fromCharCode(122,95,56,54,95,97,112,101,114,0),String.fromCharCode(114,101,97,108,116,101,120,116,95,103,95,52,0)]]);
          let encryptV: Map<any, any> = new Map([[String.fromCharCode(118,95,55,50,95,108,106,112,101,103,0),String.fromCharCode(100,105,115,97,98,108,101,95,100,95,54,48,0)], [String.fromCharCode(102,95,50,53,95,99,111,118,97,108,101,110,116,0),String.fromCharCode(109,95,52,54,95,104,119,102,114,97,109,101,0)]]);
         penaltyt += `${encryptV.size << (Math.min(Math.abs(1), 3))}`;
         floatingJ /= Math.max(2, parseFloat(`${1 & parseInt(`${floatingJ}`)}`));
         preview3 = new Map([[`${preview3.size}`, preview3.size]]);
         encryptV.set(`${floatingJ}`, preview3.size);
      for (let h = 0; h < 2; h++) {
          let handlerY = 2.0;
          let libyogaF = 5.0;
         reactnativeultimatelistviewT = libyogaF >= parseFloat(`${subbasketballplayer9.size}`);
         handlerY += parseFloat(`${parseInt(`${handlerY}`) % (Math.max(3, parseInt(`${handlerY}`)))}`);
         libyogaF += parseFloat(`${parseInt(`${handlerY}`) - parseInt(`${handlerY}`)}`);
      }
      let listQ = reactnativeultimatelistviewT ? !reactnativeultimatelistviewT : reactnativeultimatelistviewT;
      do {
          let with_585 = 1.0;
          let adultE = String.fromCharCode(105,95,50,55,95,118,105,100,101,111,100,115,112,0);
          let temperaturen = false;
         reactnativeultimatelistviewT = parseInt(`${with_585}`) == eighteenS.length;
         with_585 += 3 & adultE.length;
         adultE = `${((temperaturen ? 3 : 5) >> (Math.min(Math.abs(3), 2)))}`;
         if (listQ) {
            break;
         }
      } while ((subbasketballplayer9.size > 5) && listQ);
      while (1 < subbasketballplayer9.size && (subbasketballplayer9.size + 1) < 1) {
          let robotoq = 1.0;
          let toponQ = 4.0;
          let orangec = 1.0;
          let qaagG = String.fromCharCode(101,100,103,101,95,56,95,50,51,0);
          let libreactnativejni1 = 3.0;
         subbasketballplayer9.set(`${libreactnativejni1}`, parseInt(`${libreactnativejni1}`) / (Math.max(qaagG.length, 9)));
         robotoq -= parseInt(`${orangec}`) - 1;
         toponQ -= parseFloat(`${parseInt(`${robotoq}`) << (Math.min(5, Math.abs(3)))}`);
         orangec *= parseFloat(`${1 ^ parseInt(`${toponQ}`)}`);
         qaagG = `${parseInt(`${orangec}`)}`;
         break;
      }
         eighteenS += `${1 | penaltyt.length}`;
      let castn = String.fromCharCode(110,111,117,115,97,0) == eighteenS;
      do {
          let anythinkp = String.fromCharCode(115,117,98,116,114,97,99,116,105,110,103,95,98,95,53,54,0);
          let productF: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,114,105,100,100,101,110,95,106,95,48,0),312], [String.fromCharCode(111,95,54,55,95,99,104,101,99,107,115,117,109,0),418], [String.fromCharCode(105,110,105,116,115,109,111,116,105,111,110,95,108,95,56,51,0),305]]);
          let moonL = true;
          let circleM = String.fromCharCode(116,114,105,103,103,101,114,101,100,95,99,95,54,55,0);
         eighteenS = `${(2 + (reactnativeultimatelistviewT ? 1 : 4))}`;
         anythinkp += "3";
         productF = new Map([[`${productF.size}`, 3]]);
         moonL = productF.get(`${moonL}`) != null;
         circleM += `${((moonL ? 3 : 5) * productF.size)}`;
         if (castn) {
            break;
         }
      } while ((penaltyt != String.fromCharCode(114,0)) && castn);
      while (subbasketballplayer9.size <= penaltyt.length) {
         penaltyt = `${penaltyt.length}`;
         break;
      }
         subbasketballplayer9.set(penaltyt, ((reactnativeultimatelistviewT ? 5 : 4) ^ 2));
      if (!reactnativeultimatelistviewT) {
          let soundU = 1;
          let rewind0 = 0.0;
          let actionsv = String.fromCharCode(103,95,52,52,95,97,98,105,0);
          let largebrightness4 = String.fromCharCode(111,95,51,54,95,103,111,111,100,0);
          let analyticu = String.fromCharCode(119,95,57,56,95,115,105,100,120,0);
         reactnativeultimatelistviewT = 25 >= eighteenS.length;
         soundU /= Math.max((actionsv == String.fromCharCode(108,0) ? actionsv.length : soundU), 3);
         rewind0 /= Math.max(3, parseFloat(`${2 % (Math.max(10, largebrightness4.length))}`));
         largebrightness4 = `${(String.fromCharCode(121,0) == largebrightness4 ? largebrightness4.length : soundU)}`;
         analyticu += "3";
      }
          let catagoryX = false;
         subbasketballplayer9 = new Map([[`${subbasketballplayer9.size}`, ((catagoryX ? 3 : 2) >> (Math.min(Math.abs(1), 3)))]]);
      reactnativeultimatelistviewx &= reactnativeultimatelistviewx - greeng.length;
      if (volume9) {
         break;
      }
   } while (volume9 && (4 < (4 << (Math.min(4, Math.abs(shootZ.size)))) || (reactnativeultimatelistviewx << (Math.min(Math.abs(4), 4))) < 5));
   let release_31u = 8246626 <= gesturer;
   do {
       let dataW = false;
       let native0M: Array<any> = [208, 480, 545];
       let vertical7 = String.fromCharCode(112,103,109,121,117,118,95,50,95,56,52,0);
       let become_ = 3.0;
       let reactnativeultimatelistviewC = 5.0;
      let textlayoutmanageru = vertical7 == String.fromCharCode(119,101,121,0);
      do {
         vertical7 = `${native0M.length << (Math.min(Math.abs(2), 3))}`;
         if (textlayoutmanageru) {
            break;
         }
      } while ((3 < (native0M.length % (Math.max(8, vertical7.length)))) && textlayoutmanageru);
      if (1 <= (parseInt(`${become_}`) / (Math.max(7, native0M.length)))) {
          let whistlej = 0.0;
          let scoreP: Array<any> = [339, 745];
          let orientationf = 2.0;
          let nalyticsE: Array<any> = [String.fromCharCode(108,111,110,103,101,115,116,95,102,95,55,0), String.fromCharCode(104,95,56,56,95,114,101,116,114,97,110,109,105,115,115,105,111,110,0)];
          let teamdetailsbgg: Map<any, any> = new Map([[String.fromCharCode(114,95,52,49,95,115,112,97,99,105,110,103,0),647], [String.fromCharCode(112,111,115,116,105,111,110,95,102,95,55,51,0),189]]);
         native0M = [scoreP.length];
         whistlej /= Math.max(5, parseFloat(`${nalyticsE.length}`));
         scoreP.push(parseInt(`${whistlej}`) - 1);
         orientationf *= nalyticsE.length;
         teamdetailsbgg.set(`${nalyticsE.length}`, teamdetailsbgg.size << (Math.min(nalyticsE.length, 5)));
      }
      for (let f = 0; f < 1; f++) {
         native0M.push(((dataW ? 2 : 3) + parseInt(`${reactnativeultimatelistviewC}`)));
      }
      for (let d = 0; d < 3; d++) {
         dataW = !dataW;
      }
      while (become_ == 4.9 && 2.59 == (4.9 + become_)) {
         dataW = String.fromCharCode(113,0) == vertical7;
         break;
      }
       let sinak = String.fromCharCode(118,111,105,99,101,95,114,95,50,54,0);
      if ((4 % (Math.max(1, native0M.length))) < 4 || 1 < (vertical7.length % 4)) {
         vertical7 += `${parseInt(`${reactnativeultimatelistviewC}`) * sinak.length}`;
      }
         sinak += `${((dataW ? 4 : 5) % (Math.max(3, 10)))}`;
         sinak += `${((dataW ? 3 : 4) * parseInt(`${reactnativeultimatelistviewC}`))}`;
         native0M = [(sinak == String.fromCharCode(99,0) ? parseInt(`${reactnativeultimatelistviewC}`) : sinak.length)];
         native0M = [parseInt(`${reactnativeultimatelistviewC}`)];
      while (vertical7.length == native0M.length) {
         native0M = [native0M.length];
         break;
      }
       let foundp = true;
          let middlewareL: Map<any, any> = new Map([[String.fromCharCode(109,95,56,49,95,101,120,99,108,117,115,105,111,110,115,0),380], [String.fromCharCode(112,95,49,95,99,112,117,102,108,97,103,115,0),506]]);
          let twitterp = String.fromCharCode(114,101,112,101,97,116,101,100,95,101,95,49,50,0);
         sinak = `${native0M.length / 1}`;
         middlewareL.set(`${twitterp}`, twitterp.length & middlewareL.size);
          let favoritei: Array<any> = [444, 195];
          let penaltygoalG: Map<any, any> = new Map([[String.fromCharCode(115,99,116,112,117,116,105,108,95,55,95,51,0),114], [String.fromCharCode(120,99,108,105,95,55,95,51,54,0),404]]);
          let cancelp = false;
         dataW = null == penaltygoalG.get(`${cancelp}`);
         favoritei = [favoritei.length >> (Math.min(2, favoritei.length))];
         penaltygoalG = new Map([[`${favoritei.length}`, 3 & favoritei.length]]);
      gesturer ^= 1 | historyX.length;
      if (release_31u) {
         break;
      }
   } while (((chinasameP - gesturer) < 4.96) && release_31u);
      giflivestreamingN = new Map([[`${giflivestreamingN.size}`, 1 | giflivestreamingN.size]]);
    const maxEpisode = (foundSource?.url_count ?? 1) - 1;

   if (1 < (anythinks * 2)) {
      anythinks -= 2;
   }
      reactnativeultimatelistviewx |= 1;
   for (let l = 0; l < 1; l++) {
      privilegeP = "3";
   }
   let filter3 = 5912548.0 >= searchbars;
   do {
      searchbars -= 1 & historyX.length;
      if (filter3) {
         break;
      }
   } while (filter3 && (searchbars <= 4.67));
       let clearB = String.fromCharCode(105,95,52,48,95,111,103,103,100,101,99,0);
       let toponF = String.fromCharCode(100,101,115,116,114,111,121,105,110,103,95,99,95,54,50,0);
       let baidu8 = String.fromCharCode(102,105,110,103,101,114,115,95,101,95,50,52,0);
      for (let j = 0; j < 2; j++) {
         clearB = `${toponF.length & clearB.length}`;
      }
         baidu8 = `${(String.fromCharCode(122,0) == baidu8 ? toponF.length : baidu8.length)}`;
         toponF = "3";
         clearB = "1";
          let textinputN = String.fromCharCode(101,120,112,108,97,105,110,95,55,95,53,49,0);
          let catalogA: Array<any> = [700, 765];
         baidu8 = "3";
         textinputN = `${catalogA.length}`;
         catalogA = [catalogA.length - 3];
      let nativeN = toponF.length <= 8581641;
      do {
          let iconfeedbackA = String.fromCharCode(114,116,114,101,101,100,101,112,116,104,95,122,95,53,50,0);
          let entryy: Map<any, any> = new Map([[String.fromCharCode(97,116,101,120,105,116,95,98,95,53,52,0),false ], [String.fromCharCode(122,95,54,50,95,102,105,110,103,101,114,112,114,105,110,116,115,0),true ]]);
         toponF += `${1 * baidu8.length}`;
         iconfeedbackA = `${2 ^ entryy.size}`;
         entryy = new Map([[`${entryy.size}`, iconfeedbackA.length]]);
         if (nativeN) {
            break;
         }
      } while (nativeN && (baidu8.length > 1 || toponF.length > 1));
      while (clearB.length >= 3) {
         clearB += `${toponF.length}`;
         break;
      }
      if (3 <= toponF.length) {
         toponF += `${clearB.length}`;
      }
          let customF = false;
          let const_td = String.fromCharCode(109,95,50,48,95,111,112,101,110,105,110,103,0);
          let backward1 = String.fromCharCode(112,101,115,113,95,56,95,53,56,0);
         toponF = `${toponF.length / (Math.max(clearB.length, 7))}`;
         customF = !backward1.endsWith(`${customF}`);
         const_td += `${((customF ? 3 : 3) | 3)}`;
         backward1 = `${const_td.length}`;
      gesturer *= 3 << (Math.min(4, baidu8.length));
    const reduxCurrentEpisode = vod?.episodeWatched ?? 1;

      rnewinterstitialK += 3;
      reactnativeultimatelistviewx &= 1;
      gesturer |= 1 * historyX.length;
   for (let k = 0; k < 2; k++) {
      privilegeP = "2";
   }
   for (let g = 0; g < 2; g++) {
      anythinks *= parseInt(`${searchbars}`) % (Math.max(parseInt(`${rnewinterstitialK}`), 10));
   }
    if (reduxCurrentEpisode >= maxEpisode) {

       let appleU = 0.0;
       let bottome = String.fromCharCode(112,117,98,108,105,115,104,95,111,95,53,57,0);
         appleU += parseFloat(`${1 - parseInt(`${appleU}`)}`);
      let v_playery = 9528184.0 <= appleU;
      do {
         appleU *= parseFloat(`${bottome.length / 2}`);
         if (v_playery) {
            break;
         }
      } while (((bottome.length / 4) == 3 || 2 == (bottome.length + 4)) && v_playery);
         bottome += `${parseInt(`${appleU}`) | 3}`;
       let znews_ = false;
         znews_ = bottome.length > 64;
         bottome += `${(1 / (Math.max(3, (znews_ ? 5 : 4))))}`;
      anythinks |= parseInt(`${appleU}`) + parseInt(`${arrowupn}`);
   for (let g = 0; g < 3; g++) {
      historyX.push(parseInt(`${executorJ}`));
   }
      giflivestreamingN.set(privilegeP, privilegeP.length);
   if (4 > privilegeP.length) {
      reactnativeultimatelistviewx += parseInt(`${executorJ}`) ^ 1;
   }
       let watchf = 3;
       let coreE = 5.0;
       let whitetickC: Array<any> = [212, 180];
      while (5 < (whitetickC.length - parseInt(`${coreE}`))) {
          let jnews_ = false;
          let mapbufferP = String.fromCharCode(103,95,56,54,95,118,105,100,101,111,116,111,111,108,98,111,120,0);
          let interstitial3: Array<any> = [988, 178];
          let defaultlogot = false;
          let questiconm = true;
         coreE /= Math.max(parseFloat(`${mapbufferP.length * 2}`), 1);
         jnews_ = (50 < ((defaultlogot ? 50 : interstitial3.length) | interstitial3.length));
         mapbufferP = `${((defaultlogot ? 5 : 1) | (questiconm ? 5 : 1))}`;
         questiconm = interstitial3.length <= 28;
         break;
      }
      while (3 < (watchf >> (Math.min(Math.abs(3), 3))) || 3 < (watchf >> (Math.min(whitetickC.length, 3)))) {
         watchf %= Math.max(watchf | 3, 2);
         break;
      }
         coreE /= Math.max(3, parseFloat(`${1}`));
         coreE /= Math.max(parseFloat(`${watchf * parseInt(`${coreE}`)}`), 5);
         watchf <<= Math.min(1, Math.abs(2));
      while (3 >= (3 ^ whitetickC.length)) {
         whitetickC.push(whitetickC.length);
         break;
      }
      while (4.49 < (coreE / 3.16) || 3.16 < (parseFloat(`${watchf}`) / (Math.max(8, coreE)))) {
         coreE -= parseFloat(`${3 ^ whitetickC.length}`);
         break;
      }
         coreE -= parseFloat(`${whitetickC.length}`);
       let streamingU = true;
       let selectp = false;
      searchbars *= shootZ.size;
      setCurrentEpisode(Math.min(maxEpisode, reduxCurrentEpisode));
    } else if (currentEpisode >= maxEpisode) {

   for (let d = 0; d < 3; d++) {
      anythinks %= Math.max((greeng == String.fromCharCode(98,0) ? greeng.length : gesturer), 1);
   }
   while (!greeng.startsWith(privilegeP)) {
      privilegeP = `${parseInt(`${rnewinterstitialK}`)}`;
      break;
   }
       let memberD: Map<any, any> = new Map([[String.fromCharCode(100,101,101,112,108,105,110,107,95,99,95,50,49,0),String.fromCharCode(109,112,101,103,116,115,95,101,95,55,56,0)], [String.fromCharCode(106,95,56,56,95,100,101,99,105,115,105,111,110,0),String.fromCharCode(112,97,114,97,109,103,101,110,95,99,95,52,55,0)], [String.fromCharCode(109,101,109,109,103,114,95,118,95,54,50,0),String.fromCharCode(107,95,56,49,95,105,110,116,101,103,114,97,108,0)]]);
       let reactnativeratingso = 1.0;
         reactnativeratingso += parseFloat(`${parseInt(`${reactnativeratingso}`)}`);
      while (4.81 == (reactnativeratingso * 3.42)) {
          let traminiE = String.fromCharCode(104,95,53,53,95,99,116,97,98,108,101,115,0);
         memberD.set(traminiE, traminiE.length >> (Math.min(Math.abs(2), 1)));
         break;
      }
         reactnativeratingso += parseFloat(`${3 + memberD.size}`);
         memberD.set(`${reactnativeratingso}`, parseInt(`${reactnativeratingso}`) & 2);
      let backgroundp = 6592945.0 >= reactnativeratingso;
      do {
          let progressl: Array<any> = [289, 457, 602];
          let modeM = String.fromCharCode(111,95,54,50,95,98,117,99,107,101,116,0);
          let regengh = String.fromCharCode(120,109,108,95,105,95,54,52,0);
          let nativeexz: Array<any> = [441, 308, 529];
         reactnativeratingso /= Math.max(1, parseFloat(`${nativeexz.length}`));
         progressl.push(3 << (Math.min(3, modeM.length)));
         modeM = "3";
         regengh += `${(String.fromCharCode(119,0) == modeM ? progressl.length : modeM.length)}`;
         nativeexz = [2];
         if (backgroundp) {
            break;
         }
      } while ((Array.from(memberD.keys()).includes(`${reactnativeratingso}`)) && backgroundp);
      while (Array.from(memberD.keys()).includes(`${reactnativeratingso}`)) {
          let floaterE = 4;
          let controlv = 5;
          let commonr = 0.0;
         memberD = new Map([[`${memberD.size}`, memberD.size]]);
         floaterE <<= Math.min(Math.abs(1), 2);
         controlv <<= Math.min(Math.abs(floaterE), 4);
         commonr -= parseFloat(`${controlv}`);
         break;
      }
      executorJ *= 3 ^ giflivestreamingN.size;
   if (shootZ.size > rnewinterstitialK) {
      shootZ.set(`${chinasameP}`, 3 + parseInt(`${arrowupn}`));
   }
      privilegeP = `${gesturer + parseInt(`${arrowupn}`)}`;
      setCurrentEpisode(Math.min(maxEpisode, currentEpisode));
    }
  };

  useEffect(() => {
    if (!!foundSource) {
      
      setMinimumOfMaximumEpisode();
    }
    
  }, [currentSourceId, foundSource]);

  let vodUrl: string | undefined = "";
  if (vodSources.length > 0 && !adultMode) {
    if (vodSources.map((v) => v.source_id).includes(currentSourceId)) {
      vodUrl = vodSources
        ?.find(({ source_id }) => source_id === currentSourceId)
        ?.vod_play_list.urls?.find((url) => url.nid === currentEpisode)?.url;
    } else {
      setCurrentSourceId(vodSources?.at(0)?.source_id);
    }
  }

  let indexOfEpisode: number | undefined = undefined;
  if (vodSources.length > 0 && !adultMode) {
    if (vodSources.map((v) => v.source_id).includes(currentSourceId)) {
      indexOfEpisode = vodSources
        ?.find(({ source_id }) => source_id === currentSourceId)
        ?.vod_play_list.urls?.findIndex((url) => url.nid === currentEpisode);
    } else {
      setCurrentSourceId(vodSources?.at(0)?.source_id);
    }
  }

  if (adultMode) {
    
    vodUrl = vod?.vod_play_list?.urls?.find((url) => url.nid === currentEpisode)
      ?.url;
  }

  const vodPlayerTitle = screenState.isPlayerFullScreen
    ? `${vod?.vod_name} - ${foundSource?.urls?.at(currentEpisode)?.name ?? ""}`
    : vod?.vod_name;

  const focused = useIsFocused();

  useEffect(() => {
    checkConnection();

    if (!!vodUrl && !!vod?.vod_id) {
      
      if (
        downloadedVod &&
        episode &&
        episode.status === DVGGrayTeamdetailsbg.DVGRoom
      ) {
        
        setVodUri(`file://${episode.videoPath}`);
      } else {
        
        
        

        getNoAdsUri(vodUrl, vod?.vod_id)
          .then((uri) => {
            
            setVodUri(uri);
          })
          .catch((err) => {
            setVodUri(vodUrl);
            console.error("something went wrong", err);
          });
      }
    }

    
    
    
    
  }, [vodUrl, focused]);

  useEffect(() => {
    if (vodUri) {
      server.listen(PLAY_HTTP_SERVER_PORT);
    }
    return () => {
      server.stop(); 
    };
  }, [vodUri]);

  
  const onReadyForDisplay = () => {
       let attributedstringy = String.fromCharCode(118,95,51,57,95,115,101,116,115,111,99,107,111,112,116,0);
    let dangerO = 0;
    let iconusers = String.fromCharCode(100,111,99,107,101,114,95,53,95,54,49,0);
    let stard = 1.0;
    let exampleimageb = String.fromCharCode(116,103,99,97,108,108,115,95,55,95,49,50,0);
    let controlse = String.fromCharCode(102,95,55,49,95,115,117,112,112,114,101,115,115,0);
    let n_images = 2;
    let u_viewt = String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,95,55,95,53,56,0);
    let live_ = false;
    let logod = String.fromCharCode(118,95,51,51,95,120,100,99,97,109,0);
    let championI: Array<any> = [512, 623];
    let libcrashsdkJ: Map<any, any> = new Map([[String.fromCharCode(119,95,49,57,95,98,105,116,0),984], [String.fromCharCode(105,110,105,116,118,95,97,95,55,55,0),626], [String.fromCharCode(99,95,53,51,95,115,116,114,105,112,101,0),329]]);
    let checkboxf: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,105,111,110,115,95,52,95,56,49,0),String.fromCharCode(118,112,100,115,112,95,100,95,49,52,0)], [String.fromCharCode(108,101,97,102,95,101,95,55,48,0),String.fromCharCode(115,95,56,51,95,98,105,116,114,118,99,111,110,106,0)]]);
   for (let r = 0; r < 3; r++) {
      exampleimageb = `${(String.fromCharCode(112,0) == u_viewt ? n_images : u_viewt.length)}`;
   }
   for (let r = 0; r < 1; r++) {
       let launch9 = 5.0;
       let liveY: Map<any, any> = new Map([[String.fromCharCode(100,95,50,56,95,98,105,109,97,112,0),903], [String.fromCharCode(101,95,57,48,95,108,111,115,116,0),687]]);
       let logoutV = 4.0;
       let backV = String.fromCharCode(110,97,118,105,103,97,116,105,111,110,95,49,95,49,53,0);
       let referrerV = 1;
      for (let c = 0; c < 3; c++) {
          let videovarr = true;
          let ewardedi = 0.0;
          let viewere = false;
          let binddatasF = true;
          let loginsuccessB = String.fromCharCode(108,95,49,52,95,108,105,98,97,118,102,105,108,116,101,114,0);
         referrerV ^= (String.fromCharCode(85,0) == loginsuccessB ? parseInt(`${ewardedi}`) : loginsuccessB.length);
         videovarr = viewere;
         ewardedi += (2 % (Math.max((viewere ? 2 : 4), 4)));
         binddatasF = (!videovarr ? !viewere : !videovarr);
      }
       let twitteru = String.fromCharCode(103,95,55,57,95,101,120,101,99,117,116,101,100,0);
      let plashv = 7388631.0 <= logoutV;
      do {
          let zhengpian_ = String.fromCharCode(115,112,101,99,105,102,105,101,114,115,95,100,95,51,51,0);
         logoutV /= Math.max(4, 2);
         zhengpian_ = `${(String.fromCharCode(105,0) == zhengpian_ ? zhengpian_.length : zhengpian_.length)}`;
         if (plashv) {
            break;
         }
      } while (plashv && (liveY.get(`${logoutV}`) == null));
      if (2 > (liveY.size ^ twitteru.length) || 4 > (2 ^ liveY.size)) {
         twitteru = `${(backV == String.fromCharCode(48,0) ? parseInt(`${logoutV}`) : backV.length)}`;
      }
      while (Array.from(liveY.values()).includes(launch9)) {
         liveY = new Map([[`${launch9}`, parseInt(`${launch9}`) & 1]]);
         break;
      }
      let ping1 = referrerV >= 9122859;
      do {
          let androidN: Map<any, any> = new Map([[String.fromCharCode(100,110,120,104,100,100,97,116,97,95,50,95,57,53,0),54], [String.fromCharCode(99,95,51,52,95,101,105,103,104,116,0),407]]);
          let entryy: Array<any> = [785, 633];
         referrerV ^= androidN.size << (Math.min(twitteru.length, 3));
         androidN.set(`${entryy.length}`, entryy.length);
         if (ping1) {
            break;
         }
      } while (ping1 && (2 >= backV.length));
       let bridgeV = String.fromCharCode(112,101,99,101,110,116,95,99,95,55,53,0);
         bridgeV += `${3 >> (Math.min(4, bridgeV.length))}`;
       let commonL = 4.0;
       let volumeF = 5.0;
      let libcrashsdkY = 7547946.0 >= volumeF;
      do {
          let leagueL = String.fromCharCode(106,95,49,55,95,104,100,114,115,0);
         volumeF += parseFloat(`${parseInt(`${launch9}`) ^ 2}`);
         leagueL = `${leagueL.length & leagueL.length}`;
         if (libcrashsdkY) {
            break;
         }
      } while ((1.57 > (volumeF / (Math.max(4.34, 7))) || (backV.length / (Math.max(9, parseInt(`${volumeF}`)))) > 1) && libcrashsdkY);
      if ((backV.length ^ 5) <= 3) {
         logoutV *= 1 / (Math.max(parseInt(`${logoutV}`), 8));
      }
      while (bridgeV.length < 2) {
         referrerV |= 3;
         break;
      }
      for (let w = 0; w < 2; w++) {
         referrerV += parseInt(`${launch9}`);
      }
          let apples = String.fromCharCode(99,104,117,110,107,95,110,95,49,54,0);
          let volumey = 3.0;
         logoutV += 1 & bridgeV.length;
         apples = `${parseInt(`${volumey}`) % (Math.max(apples.length, 7))}`;
         volumey += parseFloat(`${parseInt(`${volumey}`)}`);
      while ((4 - backV.length) >= 2) {
         backV = `${1 | parseInt(`${commonL}`)}`;
         break;
      }
      championI = [2 ^ parseInt(`${launch9}`)];
   }
       let searchbarl = true;
       let typesh = String.fromCharCode(117,110,97,108,105,103,110,101,100,95,99,95,53,55,0);
       let imagemanagerD = 4.0;
      while (typesh.length <= 2) {
         typesh += `${(2 | (searchbarl ? 1 : 2))}`;
         break;
      }
         typesh = `${((searchbarl ? 5 : 3))}`;
         searchbarl = typesh.startsWith(`${searchbarl}`);
         typesh = `${typesh.length}`;
      for (let b = 0; b < 2; b++) {
         searchbarl = 17.67 < imagemanagerD;
      }
          let hoverJ = 0.0;
          let libzeusD = String.fromCharCode(97,95,57,54,95,108,101,97,115,116,0);
          let forme = 5;
         typesh += `${1 / (Math.max(1, libzeusD.length))}`;
         hoverJ -= 2 >> (Math.min(Math.abs(forme), 1));
         libzeusD += `${parseInt(`${hoverJ}`) - forme}`;
      let paginationS = imagemanagerD <= 8211583.0;
      do {
          let black2: Map<any, any> = new Map([[String.fromCharCode(97,98,115,116,95,54,95,52,49,0),528], [String.fromCharCode(117,95,50,95,115,116,111,114,121,98,111,97,114,100,0),952]]);
          let debugx = 5.0;
         imagemanagerD /= Math.max((parseFloat(`${parseInt(`${imagemanagerD}`) | (searchbarl ? 5 : 5)}`)), 1);
         black2.set(`${debugx}`, parseInt(`${debugx}`));
         if (paginationS) {
            break;
         }
      } while ((!typesh.endsWith(`${imagemanagerD}`)) && paginationS);
         searchbarl = typesh.length >= 24;
      let downloaderS = imagemanagerD <= 6382565.0;
      do {
         imagemanagerD += parseFloat(`${parseInt(`${imagemanagerD}`) * 1}`);
         if (downloaderS) {
            break;
         }
      } while (((imagemanagerD * 3.82) == 2.42) && downloaderS);
      championI = [(attributedstringy == String.fromCharCode(110,0) ? exampleimageb.length : attributedstringy.length)];

    if (vod && !isReadyPlay) {

      exampleimageb = `${attributedstringy.length >> (Math.min(Math.abs(3), 5))}`;
   let executorp = 5144072 <= exampleimageb.length;
   do {
       let humidityR: Array<any> = [658, 406];
       let lessu: Map<any, any> = new Map([[String.fromCharCode(99,108,103,101,116,95,54,95,52,51,0),314], [String.fromCharCode(115,95,57,55,95,97,110,110,117,108,97,114,0),724]]);
       let mbbanner6 = String.fromCharCode(97,116,111,105,95,121,95,53,52,0);
       let eventsplash5 = String.fromCharCode(115,117,98,112,114,111,99,101,115,115,95,108,95,51,0);
          let attributedstringx = true;
          let iconstarc = true;
         lessu = new Map([[`${humidityR.length}`, ((iconstarc ? 4 : 3) + humidityR.length)]]);
         attributedstringx = (!attributedstringx ? attributedstringx : attributedstringx);
         iconstarc = (!attributedstringx ? attributedstringx : !attributedstringx);
      exampleimageb = `${dangerO}`;
      if (executorp) {
         break;
      }
   } while ((4 < exampleimageb.length) && executorp);
      live_ = 94 > logod.length;
      ww_runtime.playsPlaysTimesAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
        isXmode: adultMode,
      });

       let selectedR = 3.0;
       let qaagt = String.fromCharCode(117,95,57,52,95,99,111,109,98,105,110,101,114,0);
       let iconclosewhitebg4 = 3.0;
          let o_playerA = String.fromCharCode(98,95,54,49,95,116,102,117,101,108,0);
         qaagt += `${qaagt.length | 3}`;
         o_playerA = "2";
       let final_hmU = true;
       let agreementl = true;
      for (let s = 0; s < 2; s++) {
         iconclosewhitebg4 *= parseFloat(`${1 * parseInt(`${iconclosewhitebg4}`)}`);
      }
          let bellz: Map<any, any> = new Map([[String.fromCharCode(113,95,53,95,120,109,117,108,116,0),801], [String.fromCharCode(102,95,53,50,95,104,113,120,100,115,112,0),459], [String.fromCharCode(102,95,48,95,107,117,107,105,0),470]]);
         selectedR /= Math.max(3, parseInt(`${iconclosewhitebg4}`));
         bellz = new Map([[`${bellz.size}`, bellz.size]]);
      let bufferH = 7489819.0 <= selectedR;
      do {
         selectedR -= ((agreementl ? 4 : 3) / (Math.max(parseInt(`${iconclosewhitebg4}`), 1)));
         if (bufferH) {
            break;
         }
      } while (bufferH && (!final_hmU || 4.14 <= (1.56 * selectedR)));
      if ((parseInt(`${selectedR}`) + qaagt.length) > 3 && 5 > (3 + qaagt.length)) {
         selectedR -= 2 % (Math.max(3, parseInt(`${iconclosewhitebg4}`)));
      }
          let reviewJ = 3;
         final_hmU = (agreementl ? final_hmU : agreementl);
         reviewJ >>= Math.min(5, Math.abs(reviewJ));
       let condensedb = String.fromCharCode(99,95,55,49,95,98,101,110,105,103,110,0);
         final_hmU = !condensedb.endsWith(`${agreementl}`);
      logod = `${championI.length}`;
       let commentp = String.fromCharCode(109,95,48,95,115,112,97,99,105,110,103,0);
       let searchbaro = 5;
       let animations6 = 4.0;
      let base_ = searchbaro <= 9627684;
      do {
         searchbaro ^= 1;
         if (base_) {
            break;
         }
      } while ((searchbaro > 1) && base_);
          let yellowanimationlivey = 0.0;
         commentp += `${parseInt(`${yellowanimationlivey}`) - 2}`;
       let selection0 = String.fromCharCode(100,101,115,99,114,105,112,116,111,114,95,117,95,50,54,0);
       let activeH = String.fromCharCode(103,95,56,50,95,100,117,109,112,105,110,102,111,0);
          let dialogC = String.fromCharCode(114,101,97,100,108,110,95,98,95,56,53,0);
          let description_cnh: Map<any, any> = new Map([[String.fromCharCode(99,95,56,53,95,97,97,99,99,111,100,101,114,0),false ], [String.fromCharCode(111,95,51,95,108,111,99,107,105,110,103,0),true ], [String.fromCharCode(111,95,54,55,95,109,117,108,116,105,112,108,121,105,110,103,0),true ]]);
         animations6 -= (String.fromCharCode(57,0) == commentp ? selection0.length : commentp.length);
         dialogC += `${description_cnh.size % (Math.max(dialogC.length, 9))}`;
         description_cnh.set(`${dialogC}`, (String.fromCharCode(79,0) == dialogC ? dialogC.length : description_cnh.size));
         animations6 -= 3;
          let dplusk = String.fromCharCode(108,105,98,115,104,105,110,101,95,104,95,50,48,0);
         animations6 -= activeH.length;
         dplusk = `${2 | dplusk.length}`;
      for (let g = 0; g < 3; g++) {
          let main_sx: Array<any> = [813, 425, 929];
          let catalog2: Map<any, any> = new Map([[String.fromCharCode(97,119,97,105,116,95,99,95,56,52,0),false ], [String.fromCharCode(112,95,55,49,95,114,101,108,97,116,105,118,101,108,121,0),true ]]);
         animations6 *= catalog2.size + selection0.length;
         main_sx = [main_sx.length % 1];
         catalog2 = new Map([[`${main_sx.length}`, 1 - main_sx.length]]);
      }
      if (commentp.startsWith(`${searchbaro}`)) {
         commentp += `${commentp.length & 2}`;
      }
         searchbaro *= 2;
      iconusers = `${((live_ ? 5 : 4))}`;
       let watchI = String.fromCharCode(112,95,53,54,95,104,119,100,101,118,105,99,101,0);
          let reviewV: Map<any, any> = new Map([[String.fromCharCode(112,104,121,115,105,99,97,108,95,121,95,49,53,0),String.fromCharCode(114,101,99,111,114,100,105,110,103,95,114,95,55,57,0)], [String.fromCharCode(110,95,57,55,95,119,114,105,116,101,0),String.fromCharCode(112,97,115,115,105,118,101,95,52,95,52,56,0)], [String.fromCharCode(115,97,108,116,108,101,110,95,53,95,54,51,0),String.fromCharCode(119,114,105,116,101,99,98,95,106,95,56,50,0)]]);
          let favoritem = 0;
          let referrerK = String.fromCharCode(112,97,99,107,101,100,95,102,95,51,56,0);
         watchI += "1";
         reviewV.set(referrerK, favoritem * referrerK.length);
         favoritem ^= favoritem;
         watchI = `${watchI.length}`;
      while (watchI.length == watchI.length) {
          let sharef: Array<any> = [String.fromCharCode(118,95,57,49,95,114,101,99,118,102,114,111,109,0), String.fromCharCode(114,95,57,52,95,105,116,101,114,97,116,101,0)];
          let launcherT: Array<any> = [String.fromCharCode(113,95,52,48,95,112,114,105,118,97,116,101,0), String.fromCharCode(108,95,50,57,95,104,97,115,104,0), String.fromCharCode(97,115,121,110,99,100,105,115,112,108,97,121,107,105,116,95,121,95,52,48,0)];
          let frame_1b2 = 4;
         watchI += `${sharef.length}`;
         sharef = [frame_1b2 >> (Math.min(launcherT.length, 1))];
         launcherT = [frame_1b2];
         break;
      }
      controlse += `${(String.fromCharCode(74,0) == watchI ? attributedstringy.length : watchI.length)}`;

      wwSelect.playsPlaysTimesAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
        isXmode: adultMode,
      });

      
      
      
    }

    setReadyPlay(true);

   if (stard == n_images) {
      n_images ^= 2;
   }
      libcrashsdkJ = new Map([[controlse, logod.length]]);
      controlse = `${1 >> (Math.min(5, Math.abs(n_images)))}`;

    if (shouldResumeAfterLoad && videoPlayerRef.current) {

   for (let x = 0; x < 1; x++) {
      championI.push(n_images);
   }
   while (4 >= (iconusers.length | dangerO)) {
      dangerO <<= Math.min(exampleimageb.length, 3);
      break;
   }
   while (iconusers.endsWith(`${stard}`)) {
      stard *= 3;
      break;
   }
      videoPlayerRef.current?.setPause(false); 

      controlse += `${attributedstringy.length}`;
   while ((championI.length << (Math.min(Math.abs(3), 4))) > 4 && 1 > (libcrashsdkJ.size << (Math.min(Math.abs(3), 5)))) {
      libcrashsdkJ = new Map([[`${n_images}`, 3]]);
      break;
   }
       let kuaishouv: Map<any, any> = new Map([[String.fromCharCode(101,95,51,56,95,109,106,112,101,103,101,110,99,0),false ], [String.fromCharCode(116,95,53,55,95,112,105,110,110,101,100,0),true ], [String.fromCharCode(105,95,52,49,95,100,101,108,97,121,115,0),false ]]);
      if (5 <= (kuaishouv.size % (Math.max(8, kuaishouv.size))) || (kuaishouv.size % (Math.max(4, kuaishouv.size))) <= 5) {
          let baselinej: Array<any> = [752, 989];
         kuaishouv = new Map([[`${kuaishouv.size}`, baselinej.length ^ 1]]);
      }
      if (kuaishouv.size > 3) {
         kuaishouv = new Map([[`${kuaishouv.size}`, kuaishouv.size]]);
      }
         kuaishouv.set(`${kuaishouv.size}`, kuaishouv.size << (Math.min(Math.abs(3), 5)));
      championI.push(iconusers.length);
      setShouldResumeAfterLoad(false); 
    }
  };
  
  const insets = useSafeAreaInsets();

  if (Platform.OS === "android") {
    insetsTop = insets.top;
    insetsBottom = insets.bottom;
  } else {
    insetsTop = insetsTop == 0 ? insets.top : insetsTop;
    insetsBottom = insetsBottom == 0 ? insets.bottom : insets.bottom;
  }

  useEffect(() => {
    if (adultMode) {
      dispatch(enableAdultMode());
    } else {
      dispatch(disableAdultMode());
    }
  }, [adultMode]);

  useEffect(() => {
    if (!focused) return;

    if (vodUri) {
      setReadyPlay(false);
    }

    if (vodUri && vodUri !== "" && videoPlayerRef.current) {
      videoPlayerRef.current?.setPause(false);
    }

    // if (totalShortVodView >= VIEW_NUMBER_FOR_SHOW_VIDEO_ADS && vod?.type_id === shortVodId) {
    
    

    if (indexOfEpisode !== undefined && (indexOfEpisode + 1) > VIEW_NUMBER_FOR_SHOW_VIDEO_ADS) {
      showAds(HBackground.HLeftMail);
    }
  }, [vodUri]);

  const onPressCountdown = () => {
       let libjsijniprofilerv: Array<any> = [277, 652];
    let settings5 = String.fromCharCode(117,110,99,111,110,115,117,109,101,100,95,120,95,50,57,0);
    let window_sfh = String.fromCharCode(107,98,100,119,105,110,95,118,95,50,48,0);
    let large9 = 5.0;
    let referrerx = String.fromCharCode(120,95,50,52,95,103,101,116,99,117,116,0);
    let giftbuttonv = String.fromCharCode(122,95,54,52,95,100,114,97,119,97,98,108,101,115,0);
    let ajaxt = String.fromCharCode(97,99,116,105,118,101,109,97,112,95,97,95,54,53,0);
    let catalogn = 3.0;
    let zoomq = 0.0;
    let alert6 = 0.0;
   for (let c = 0; c < 1; c++) {
      window_sfh = `${3 ^ libjsijniprofilerv.length}`;
   }
       let libpangleflippedH = String.fromCharCode(111,95,54,48,95,97,117,116,104,111,114,105,122,101,100,0);
       let defaultplayerimgp = String.fromCharCode(112,114,111,116,101,99,116,111,114,95,53,95,57,56,0);
         libpangleflippedH += `${libpangleflippedH.length}`;
         libpangleflippedH = `${defaultplayerimgp.length}`;
      for (let h = 0; h < 1; h++) {
          let canvasb = 3.0;
          let shootyesgoalr: Array<any> = [String.fromCharCode(104,95,56,49,95,115,116,114,105,107,101,0), String.fromCharCode(104,119,116,105,109,101,95,51,95,56,51,0), String.fromCharCode(115,117,98,116,105,116,108,101,115,95,108,95,50,50,0)];
         defaultplayerimgp = `${libpangleflippedH.length}`;
         canvasb -= parseFloat(`${shootyesgoalr.length | parseInt(`${canvasb}`)}`);
         shootyesgoalr.push(shootyesgoalr.length + 2);
      }
          let basketballhometeamD = String.fromCharCode(97,95,53,52,95,97,99,102,102,0);
          let humidity4 = 0.0;
          let dropdownR = String.fromCharCode(98,95,49,56,95,115,116,114,101,97,109,0);
         defaultplayerimgp += `${dropdownR.length ^ 1}`;
         basketballhometeamD += `${2 - parseInt(`${humidity4}`)}`;
         humidity4 /= Math.max(parseFloat(`${1}`), 4);
         dropdownR = `${basketballhometeamD.length - 2}`;
         defaultplayerimgp += `${defaultplayerimgp.length}`;
      while (!defaultplayerimgp.startsWith(libpangleflippedH)) {
          let scheduleO = String.fromCharCode(107,95,51,52,95,118,101,114,115,105,111,110,101,100,0);
         libpangleflippedH += `${3 >> (Math.min(3, defaultplayerimgp.length))}`;
         scheduleO = `${scheduleO.length}`;
         break;
      }
      ajaxt += "3";
      catalogn /= Math.max(giftbuttonv.length ^ settings5.length, 1);
   for (let d = 0; d < 2; d++) {
       let verticalM = 3.0;
       let carousel6 = String.fromCharCode(113,95,51,50,95,97,101,97,100,0);
       let release_jQ = String.fromCharCode(110,95,49,49,95,115,97,100,120,120,0);
      if (release_jQ == carousel6) {
          let attributedstringu = String.fromCharCode(98,111,114,105,110,103,115,115,108,95,117,95,56,0);
          let ball6 = false;
          let whistleorangez = String.fromCharCode(100,121,110,108,111,97,100,95,107,95,49,55,0);
          let customs = String.fromCharCode(115,104,111,114,116,115,95,101,95,53,55,0);
         carousel6 += `${attributedstringu.length | customs.length}`;
         attributedstringu = `${(2 * (ball6 ? 4 : 2))}`;
         ball6 = (((ball6 ? whistleorangez.length : 6) + whistleorangez.length) < 6);
         customs += `${3 ^ whistleorangez.length}`;
      }
      if (release_jQ.length < 3) {
         release_jQ = `${carousel6.length}`;
      }
      let yellowvideolives = carousel6.length <= 6632730;
      do {
         carousel6 += "3";
         if (yellowvideolives) {
            break;
         }
      } while ((release_jQ == carousel6) && yellowvideolives);
          let executorL: Array<any> = [812, 521];
          let mbsplashE = 0;
          let streamingS: Map<any, any> = new Map([[String.fromCharCode(105,95,51,95,99,118,99,0),138], [String.fromCharCode(115,119,105,116,99,104,101,114,95,100,95,50,48,0),29]]);
         carousel6 += `${parseInt(`${verticalM}`)}`;
         executorL = [2];
         mbsplashE += streamingS.size;
         streamingS.set(`${executorL.length}`, 2 * executorL.length);
      while (carousel6 != String.fromCharCode(48,0)) {
         release_jQ = "1";
         break;
      }
         carousel6 = `${release_jQ.length}`;
         carousel6 += `${release_jQ.length << (Math.min(3, Math.abs(parseInt(`${verticalM}`))))}`;
         verticalM -= 2 % (Math.max(9, carousel6.length));
         carousel6 = `${release_jQ.length}`;
      settings5 += "2";
   }
      ajaxt += `${parseInt(`${zoomq}`) >> (Math.min(referrerx.length, 4))}`;
   while (!window_sfh.endsWith(settings5)) {
      settings5 += `${parseInt(`${zoomq}`) >> (Math.min(Math.abs(1), 5))}`;
      break;
   }
      zoomq += parseFloat(`${1}`);
      referrerx += "2";
   for (let i = 0; i < 2; i++) {
      large9 *= ajaxt.length;
   }
   for (let z = 0; z < 2; z++) {
      settings5 += `${(ajaxt == String.fromCharCode(120,0) ? ajaxt.length : parseInt(`${zoomq}`))}`;
   }
      settings5 += `${giftbuttonv.length + ajaxt.length}`;
      zoomq += parseFloat(`${2}`);
   let libavdevice5 = 5075395 <= window_sfh.length;
   do {
      window_sfh = `${parseInt(`${large9}`) ^ 3}`;
      if (libavdevice5) {
         break;
      }
   } while (libavdevice5 && (settings5.length > window_sfh.length));

    setShowAdOverlay(true);

       let whatsapp7 = String.fromCharCode(98,95,49,51,95,97,114,103,118,0);
         whatsapp7 = `${(String.fromCharCode(84,0) == whatsapp7 ? whatsapp7.length : whatsapp7.length)}`;
         whatsapp7 += `${(String.fromCharCode(108,0) == whatsapp7 ? whatsapp7.length : whatsapp7.length)}`;
         whatsapp7 += `${whatsapp7.length / (Math.max(8, whatsapp7.length))}`;
      window_sfh += `${2 - parseInt(`${large9}`)}`;
   if (settings5.endsWith(`${large9}`)) {
       let mbjscommonv = String.fromCharCode(100,101,109,111,100,117,108,97,116,101,95,115,95,56,57,0);
       let iconsettingW = 0.0;
      let update_2ki = String.fromCharCode(100,48,99,49,100,0) == mbjscommonv;
      do {
         mbjscommonv += `${mbjscommonv.length % 2}`;
         if (update_2ki) {
            break;
         }
      } while (update_2ki && (!mbjscommonv.endsWith(`${iconsettingW}`)));
         mbjscommonv = `${(mbjscommonv == String.fromCharCode(69,0) ? mbjscommonv.length : parseInt(`${iconsettingW}`))}`;
         mbjscommonv += `${mbjscommonv.length << (Math.min(1, Math.abs(parseInt(`${iconsettingW}`))))}`;
      for (let v = 0; v < 1; v++) {
          let photoE = 2;
          let description_4T: Array<any> = [736, 474];
          let bottomr = String.fromCharCode(107,105,110,103,102,105,115,104,101,114,95,105,95,52,49,0);
          let webviewN = String.fromCharCode(102,95,49,57,95,115,99,114,111,108,108,101,100,0);
          let hiadD = 1.0;
         mbjscommonv = `${description_4T.length ^ webviewN.length}`;
         photoE >>= Math.min(Math.abs(1), 4);
         description_4T = [photoE >> (Math.min(Math.abs(parseInt(`${hiadD}`)), 4))];
         bottomr = `${photoE << (Math.min(bottomr.length, 5))}`;
         webviewN = `${(bottomr == String.fromCharCode(80,0) ? parseInt(`${hiadD}`) : bottomr.length)}`;
      }
         mbjscommonv = `${(mbjscommonv == String.fromCharCode(100,0) ? mbjscommonv.length : parseInt(`${iconsettingW}`))}`;
         mbjscommonv += `${mbjscommonv.length}`;
      large9 /= Math.max(ajaxt.length, 4);
   }
      giftbuttonv = `${(settings5 == String.fromCharCode(67,0) ? window_sfh.length : settings5.length)}`;
   if (settings5.length <= 1) {
      settings5 = `${giftbuttonv.length}`;
   }
       let exampleimageD = false;
      for (let j = 0; j < 1; j++) {
         exampleimageD = !exampleimageD;
      }
      while (exampleimageD) {
         exampleimageD = (!exampleimageD ? exampleimageD : !exampleimageD);
         break;
      }
         exampleimageD = !exampleimageD || exampleimageD;
      catalogn /= Math.max(5, libjsijniprofilerv.length + parseInt(`${large9}`));
       let pressureC = 4;
       let forwardC = true;
       let predictionbannersharedi = String.fromCharCode(98,95,49,48,48,95,112,105,110,110,105,110,103,0);
         predictionbannersharedi = `${pressureC | predictionbannersharedi.length}`;
      while (3 <= (predictionbannersharedi.length / 2) || 2 <= (predictionbannersharedi.length / (Math.max(2, 6)))) {
         pressureC |= (pressureC >> (Math.min(1, Math.abs((forwardC ? 4 : 4)))));
         break;
      }
         predictionbannersharedi = `${((forwardC ? 5 : 1) / (Math.max(pressureC, 10)))}`;
      if (forwardC || predictionbannersharedi.length < 5) {
         predictionbannersharedi += `${(pressureC & (forwardC ? 5 : 1))}`;
      }
         predictionbannersharedi += `${(pressureC & (forwardC ? 1 : 4))}`;
      let kicky = predictionbannersharedi == String.fromCharCode(108,115,111,107,53,49,0);
      do {
          let mergerj: Array<any> = [74, 424];
          let bdxadsdkb: Array<any> = [565, 756, 195];
          let profileR = 0;
          let matchC = String.fromCharCode(118,95,55,51,95,105,110,116,101,103,114,97,116,101,100,0);
          let jingdongd = String.fromCharCode(111,114,116,104,111,103,111,110,97,108,105,122,101,95,105,95,57,49,0);
         predictionbannersharedi += `${3 >> (Math.min(3, jingdongd.length))}`;
         mergerj.push(bdxadsdkb.length * 3);
         bdxadsdkb = [3];
         profileR >>= Math.min(Math.abs(1 % (Math.max(3, matchC.length))), 4);
         matchC += `${profileR}`;
         jingdongd += `${mergerj.length}`;
         if (kicky) {
            break;
         }
      } while (kicky && (!forwardC));
         pressureC %= Math.max((String.fromCharCode(102,0) == predictionbannersharedi ? predictionbannersharedi.length : pressureC), 3);
      if (!forwardC) {
         predictionbannersharedi += `${1 - predictionbannersharedi.length}`;
      }
       let anythinky = 4.0;
      referrerx += `${3 & parseInt(`${catalogn}`)}`;
   while (1.48 < (zoomq / (Math.max(parseFloat(`${window_sfh.length}`), 7))) && 4.88 < (zoomq / (Math.max(1.48, 6)))) {
      window_sfh = `${referrerx.length * 3}`;
      break;
   }
      zoomq -= parseFloat(`${1}`);
   while (giftbuttonv.startsWith(`${catalogn}`)) {
      catalogn += settings5.length & 3;
      break;
   }
      libjsijniprofilerv.push(parseInt(`${large9}`) + window_sfh.length);
      libjsijniprofilerv.push(ajaxt.length / (Math.max(2, 7)));
   let update_cz = window_sfh == String.fromCharCode(121,54,111,105,114,102,53,0);
   do {
      window_sfh += `${libjsijniprofilerv.length}`;
      if (update_cz) {
         break;
      }
   } while (update_cz && (window_sfh.length == giftbuttonv.length));
       let unfills = String.fromCharCode(106,95,57,54,0);
      if (unfills != unfills) {
         unfills += `${unfills.length - unfills.length}`;
      }
      for (let f = 0; f < 3; f++) {
         unfills += `${unfills.length << (Math.min(2, unfills.length))}`;
      }
         unfills = "3";
      zoomq *= parseFloat(`${1 / (Math.max(parseInt(`${zoomq}`), 8))}`);
    videoPlayerRef.current?.setPause(true);
  };

  const onCloseAdOverlay = () => {
       let modelsY = 5.0;
    let albumK: Array<any> = [190, 639, 896];
    let vignettei = 5.0;
    let moduleP = false;
    let awayteamfieldy: Map<any, any> = new Map([[String.fromCharCode(116,104,114,111,116,116,108,101,95,107,95,57,57,0),104], [String.fromCharCode(112,108,97,99,101,104,111,108,100,101,114,95,55,95,57,56,0),497]]);
    let videoa = String.fromCharCode(105,95,49,50,95,101,115,116,114,111,121,0);
    let controlE = 5.0;
    let iconwechatx: Map<any, any> = new Map([[String.fromCharCode(104,95,52,55,95,116,101,120,101,108,0),true ], [String.fromCharCode(101,95,49,51,95,99,111,108,108,97,116,105,110,103,0),true ], [String.fromCharCode(112,95,50,48,95,112,114,111,109,105,115,101,0),true ]]);
    let changef = 3.0;
    let vipsportv = 4;
    let tailB = 4.0;
    let langkeyk = true;
    let crownZ = false;
   let showj = 9899767.0 <= modelsY;
   do {
       let countdownV = String.fromCharCode(113,95,56,56,0);
       let description_qy: Map<any, any> = new Map([[String.fromCharCode(102,95,56,57,95,99,97,110,100,105,100,97,116,101,0),true ], [String.fromCharCode(110,100,101,120,95,118,95,53,57,0),true ]]);
       let trophyK = false;
      let libsgcoreA = 9656029 <= description_qy.size;
      do {
          let exampleimagee = false;
          let ajaxz = String.fromCharCode(109,111,116,99,111,109,112,95,54,95,48,0);
          let predictionwinh: Array<any> = [String.fromCharCode(97,108,116,101,114,110,97,116,101,95,52,95,57,54,0), String.fromCharCode(121,95,57,57,95,100,101,102,101,97,116,0)];
          let lineq = 0.0;
          let mutedA = false;
         description_qy = new Map([[`${mutedA}`, ((trophyK ? 3 : 1) ^ 2)]]);
         exampleimagee = predictionwinh.length == 59;
         ajaxz += `${parseInt(`${lineq}`) / (Math.max(5, ajaxz.length))}`;
         predictionwinh = [parseInt(`${lineq}`) ^ ajaxz.length];
         if (libsgcoreA) {
            break;
         }
      } while ((1 < description_qy.size) && libsgcoreA);
         description_qy = new Map([[`${description_qy.size}`, 3]]);
         description_qy = new Map([[`${description_qy.size}`, (String.fromCharCode(100,0) == countdownV ? countdownV.length : description_qy.size)]]);
          let dialogz = 0.0;
          let coreS = true;
          let matchG = String.fromCharCode(121,95,56,55,95,101,110,117,109,101,114,97,116,101,0);
         trophyK = (78 < ((!coreS ? countdownV.length : 78) | countdownV.length));
         dialogz /= Math.max(1, 2);
         coreS = (dialogz / (Math.max(5, matchG.length))) <= 60.10;
         matchG += "1";
         description_qy = new Map([[`${description_qy.size}`, description_qy.size | countdownV.length]]);
      if (3 == description_qy.size) {
         trophyK = ((description_qy.size & (!trophyK ? description_qy.size : 78)) <= 55);
      }
         trophyK = (42 == (countdownV.length - (!trophyK ? countdownV.length : 42)));
         trophyK = !trophyK;
          let bodan0 = 1.0;
          let mbnative3: Map<any, any> = new Map([[String.fromCharCode(102,115,105,122,101,95,97,95,52,50,0),278], [String.fromCharCode(103,95,51,55,95,99,111,109,112,97,114,97,116,111,114,0),978]]);
          let reactc = 4;
         trophyK = 3 <= description_qy.size;
         bodan0 *= parseFloat(`${parseInt(`${bodan0}`) % 2}`);
         mbnative3 = new Map([[`${mbnative3.size}`, mbnative3.size]]);
         reactc &= 2;
      modelsY -= (parseFloat(`${(trophyK ? 5 : 2) ^ parseInt(`${modelsY}`)}`));
      if (showj) {
         break;
      }
   } while (showj && ((controlE + 4) > 3.43));
      changef *= parseInt(`${vignettei}`) * albumK.length;
   for (let k = 0; k < 3; k++) {
      albumK.push(videoa.length);
   }
   if (!Array.from(awayteamfieldy.values()).includes(modelsY)) {
      awayteamfieldy = new Map([[`${changef}`, parseInt(`${changef}`)]]);
   }
       let internetx: Map<any, any> = new Map([[String.fromCharCode(117,95,51,53,95,106,111,121,102,117,108,0),767], [String.fromCharCode(112,95,51,48,95,116,120,116,111,98,106,0),415]]);
       let active_ = String.fromCharCode(116,104,117,109,98,110,97,105,108,95,97,95,50,0);
       let middlewareY = false;
         active_ = `${(internetx.size % (Math.max(10, (middlewareY ? 3 : 1))))}`;
      if ((internetx.size ^ active_.length) < 1 || 4 < (active_.length ^ 1)) {
         active_ += `${active_.length}`;
      }
         active_ += `${internetx.size - 2}`;
         active_ += `${3 * active_.length}`;
         active_ = `${(active_ == String.fromCharCode(52,0) ? internetx.size : active_.length)}`;
      let libflipper9 = 7401588 <= active_.length;
      do {
         active_ += `${((middlewareY ? 3 : 4) >> (Math.min(Math.abs(3), 4)))}`;
         if (libflipper9) {
            break;
         }
      } while (libflipper9 && (3 <= (5 | internetx.size) && 5 <= (internetx.size | active_.length)));
      if (middlewareY && 3 <= (internetx.size % (Math.max(3, 3)))) {
          let expandy = String.fromCharCode(114,95,56,56,95,102,105,110,97,108,105,115,101,114,0);
          let merger8 = true;
         internetx.set(`${expandy}`, (expandy == String.fromCharCode(52,0) ? expandy.length : internetx.size));
         merger8 = !merger8 && !merger8;
      }
      for (let r = 0; r < 2; r++) {
         active_ = `${active_.length + 3}`;
      }
          let iconmorer: Array<any> = [949, 163];
          let iconnointernet7 = String.fromCharCode(102,95,51,49,95,106,115,101,112,0);
          let disconnectedO: Map<any, any> = new Map([[String.fromCharCode(116,105,110,116,101,100,95,53,95,51,55,0),String.fromCharCode(108,95,49,57,95,101,118,97,108,117,97,116,111,114,0)], [String.fromCharCode(98,95,49,54,95,100,105,115,97,98,108,101,0),String.fromCharCode(115,101,116,99,116,120,95,121,95,54,51,0)], [String.fromCharCode(120,95,49,51,95,119,97,108,0),String.fromCharCode(104,95,53,52,95,116,114,105,109,109,101,100,0)]]);
         active_ = `${iconnointernet7.length - 3}`;
         iconmorer.push(iconmorer.length / 2);
         iconnointernet7 = `${2 ^ iconmorer.length}`;
         disconnectedO.set(`${iconmorer.length}`, disconnectedO.size + iconmorer.length);
      awayteamfieldy.set(active_, 3 - awayteamfieldy.size);
      iconwechatx = new Map([[`${awayteamfieldy.size}`, awayteamfieldy.size | 1]]);
   for (let w = 0; w < 3; w++) {
      tailB *= parseFloat(`${vipsportv & 2}`);
   }
      vignettei *= parseFloat(`${parseInt(`${modelsY}`) << (Math.min(Math.abs(1), 2))}`);
   if ((4.63 / (Math.max(2, controlE))) <= 5.49) {
       let moonQ: Array<any> = [546, 889, 116];
       let reviewb: Array<any> = [598, 86, 543];
         moonQ = [2 * moonQ.length];
       let private_8K = String.fromCharCode(100,105,97,108,111,103,117,101,95,108,95,53,55,0);
       let crossI = String.fromCharCode(97,109,111,117,110,116,115,95,99,95,57,50,0);
         crossI = `${1 & private_8K.length}`;
      while (reviewb.length == 1) {
         moonQ = [moonQ.length / (Math.max(crossI.length, 1))];
         break;
      }
         crossI += `${reviewb.length & crossI.length}`;
      if (2 >= (4 | crossI.length) && 2 >= (crossI.length | 4)) {
         crossI = `${reviewb.length + 3}`;
      }
      controlE += parseFloat(`${3 + parseInt(`${modelsY}`)}`);
   }
   while (3 > vipsportv) {
      controlE += parseFloat(`${awayteamfieldy.size}`);
      break;
   }
   if (4.79 >= (controlE + 2.90)) {
      iconwechatx = new Map([[`${tailB}`, parseInt(`${vignettei}`)]]);
   }
   for (let g = 0; g < 1; g++) {
      iconwechatx.set(`${moduleP}`, (parseInt(`${changef}`) + (moduleP ? 4 : 2)));
   }
      moduleP = !moduleP && changef == 40.65;
   let floatingZ = videoa == String.fromCharCode(98,118,97,108,99,100,101,105,0);
   do {
      videoa += "1";
      if (floatingZ) {
         break;
      }
   } while ((parseInt(`${controlE}`) > videoa.length) && floatingZ);
       let foundo = String.fromCharCode(117,95,51,54,95,111,110,116,97,99,116,0);
      for (let m = 0; m < 1; m++) {
         foundo += `${foundo.length}`;
      }
      let defaultfootballbgO = foundo.length >= 5685164;
      do {
         foundo += `${foundo.length >> (Math.min(Math.abs(2), 3))}`;
         if (defaultfootballbgO) {
            break;
         }
      } while (defaultfootballbgO && (!foundo.startsWith(`${foundo.length}`)));
      let flyeri = 8208732 <= foundo.length;
      do {
         foundo = `${foundo.length}`;
         if (flyeri) {
            break;
         }
      } while ((foundo != String.fromCharCode(102,0)) && flyeri);
      tailB -= parseFloat(`${1}`);
      awayteamfieldy = new Map([[`${awayteamfieldy.size}`, parseInt(`${changef}`)]]);
       let connectionG: Map<any, any> = new Map([[String.fromCharCode(102,95,51,50,95,98,108,105,110,107,0),564], [String.fromCharCode(102,114,97,103,109,101,110,116,115,95,108,95,51,55,0),919], [String.fromCharCode(116,104,101,110,97,98,108,101,95,56,95,55,56,0),277]]);
         connectionG = new Map([[`${connectionG.size}`, 2 / (Math.max(4, connectionG.size))]]);
      let megaphone_ = connectionG.size <= 6076231;
      do {
         connectionG.set(`${connectionG.size}`, connectionG.size);
         if (megaphone_) {
            break;
         }
      } while (megaphone_ && (connectionG.get(`${connectionG.size}`) == null));
          let sharemodalW = String.fromCharCode(113,95,49,48,95,97,100,100,105,116,105,111,110,97,108,0);
          let actionsZ = String.fromCharCode(112,107,112,107,101,121,95,117,95,55,53,0);
         connectionG = new Map([[`${connectionG.size}`, connectionG.size << (Math.min(Math.abs(2), 3))]]);
         sharemodalW += "2";
         actionsZ += `${1 - sharemodalW.length}`;
      awayteamfieldy = new Map([[`${albumK.length}`, 1 + albumK.length]]);

    setShowAdOverlay(false);

   while (albumK.length < 4) {
       let iconscheduleP = false;
          let reminder0 = true;
          let gmail3 = String.fromCharCode(106,95,52,51,95,111,117,116,108,105,110,107,0);
          let dplusx = String.fromCharCode(114,101,97,99,116,95,55,95,56,48,0);
         iconscheduleP = gmail3.length == 75 && reminder0;
         reminder0 = (dplusx.length | dplusx.length) <= 54;
         gmail3 = `${(dplusx == String.fromCharCode(54,0) ? dplusx.length : dplusx.length)}`;
      if (!iconscheduleP && iconscheduleP) {
         iconscheduleP = !iconscheduleP;
      }
         iconscheduleP = !iconscheduleP && iconscheduleP;
      albumK = [iconwechatx.size];
      break;
   }
   for (let n = 0; n < 2; n++) {
      changef += iconwechatx.size;
   }
   while ((awayteamfieldy.size >> (Math.min(Math.abs(4), 4))) <= 2) {
      albumK.push(parseInt(`${controlE}`));
      break;
   }
      changef -= videoa.length;
   for (let i = 0; i < 3; i++) {
      videoa += `${(parseInt(`${tailB}`) + (moduleP ? 3 : 4))}`;
   }
   let huaweiQ = 5507365 <= awayteamfieldy.size;
   do {
      awayteamfieldy = new Map([[`${iconwechatx.size}`, 1]]);
      if (huaweiQ) {
         break;
      }
   } while ((2 >= (parseInt(`${vignettei}`) * awayteamfieldy.size) && 4 >= (awayteamfieldy.size ^ 2)) && huaweiQ);
   for (let i = 0; i < 3; i++) {
      albumK.push(parseInt(`${vignettei}`));
   }
      albumK = [parseInt(`${vignettei}`) & 2];
      changef -= 3;
      tailB *= parseFloat(`${2}`);
   while (2.6 == (2.59 * modelsY) && (iconwechatx.size * 3) == 2) {
      modelsY *= parseFloat(`${parseInt(`${vignettei}`)}`);
      break;
   }
       let default_rO = String.fromCharCode(99,109,112,97,100,100,114,95,50,95,55,55,0);
       let searchS = 3.0;
      if ((3.15 - searchS) == 4.15) {
         default_rO += `${default_rO.length | parseInt(`${searchS}`)}`;
      }
      if (4 == (default_rO.length * parseInt(`${searchS}`))) {
         searchS /= Math.max(5, parseFloat(`${3 & default_rO.length}`));
      }
      let classesN = searchS <= 8842248.0;
      do {
         searchS /= Math.max(5, parseFloat(`${1 * parseInt(`${searchS}`)}`));
         if (classesN) {
            break;
         }
      } while ((5.91 >= (1.71 + searchS) && (default_rO.length / 3) >= 2) && classesN);
         default_rO += `${parseInt(`${searchS}`) ^ default_rO.length}`;
      for (let s = 0; s < 2; s++) {
         searchS += parseFloat(`${default_rO.length - parseInt(`${searchS}`)}`);
      }
         default_rO += `${parseInt(`${searchS}`)}`;
      tailB += parseFloat(`${1 ^ iconwechatx.size}`);
   if ((3.99 + modelsY) <= 3.54) {
      videoa = `${2 & parseInt(`${vignettei}`)}`;
   }
       let rankW: Map<any, any> = new Map([[String.fromCharCode(121,95,57,48,95,101,120,112,114,0),126], [String.fromCharCode(100,101,102,108,105,99,107,101,114,95,54,95,55,50,0),362], [String.fromCharCode(115,95,57,53,95,104,101,97,114,116,98,101,97,116,0),276]]);
          let playN = 5;
          let stepW = 3;
          let areal = String.fromCharCode(114,101,99,101,105,118,105,110,103,95,54,95,51,55,0);
         rankW = new Map([[`${rankW.size}`, 1 - rankW.size]]);
         playN += areal.length;
         stepW %= Math.max(stepW >> (Math.min(Math.abs(playN), 4)), 2);
         areal = `${(areal == String.fromCharCode(87,0) ? playN : areal.length)}`;
         rankW = new Map([[`${rankW.size}`, 1 >> (Math.min(4, Math.abs(rankW.size)))]]);
         rankW.set(`${rankW.size}`, rankW.size % (Math.max(1, rankW.size)));
      awayteamfieldy = new Map([[`${moduleP}`, 3 ^ parseInt(`${vignettei}`)]]);
   for (let o = 0; o < 2; o++) {
       let searcho = 0.0;
      let chatf = 9163465.0 <= searcho;
      do {
         searcho *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${searcho}`)), 2))}`);
         if (chatf) {
            break;
         }
      } while ((2.10 < searcho) && chatf);
          let libfbK = 3.0;
         searcho /= Math.max(3, parseFloat(`${3 | parseInt(`${libfbK}`)}`));
          let whitex: Map<any, any> = new Map([[String.fromCharCode(120,95,49,48,48,95,115,99,97,108,101,109,111,100,101,0),true ], [String.fromCharCode(100,118,98,115,117,98,95,115,95,57,52,0),true ], [String.fromCharCode(122,95,55,49,95,117,110,114,101,99,111,103,110,105,122,101,100,0),false ]]);
          let bufferX: Map<any, any> = new Map([[String.fromCharCode(99,95,50,56,95,100,101,112,114,101,99,97,116,105,111,110,115,0),81], [String.fromCharCode(108,111,110,103,110,111,105,115,101,95,102,95,52,51,0),660]]);
          let libyogaG = 0;
         searcho -= parseFloat(`${parseInt(`${searcho}`) >> (Math.min(Math.abs(1), 3))}`);
         whitex.set(`${libyogaG}`, libyogaG);
         bufferX = new Map([[`${whitex.size}`, bufferX.size]]);
      iconwechatx.set(`${changef}`, 1);
   }
   let recommendation3 = 9819746.0 >= changef;
   do {
       let regengM = String.fromCharCode(109,105,110,115,95,103,95,53,53,0);
       let selectN = String.fromCharCode(105,95,51,56,95,115,101,112,97,114,97,116,101,115,0);
       let inactive5 = 3.0;
       let sans4 = 2;
       let largebrightnessw: Array<any> = [292, 603, 613];
       let rankK: Array<any> = [339, 878, 740];
      for (let j = 0; j < 3; j++) {
         sans4 ^= rankK.length + largebrightnessw.length;
      }
         rankK.push(largebrightnessw.length / (Math.max(selectN.length, 10)));
         rankK = [rankK.length + 2];
      for (let m = 0; m < 1; m++) {
         regengM += `${rankK.length + 3}`;
      }
       let hooks9 = 4.0;
         selectN += `${selectN.length}`;
      while (4 >= (selectN.length & rankK.length)) {
          let light1 = 5.0;
          let modulesY = String.fromCharCode(118,105,101,119,101,114,95,119,95,49,54,0);
          let completeK = false;
          let matha = String.fromCharCode(115,95,52,48,95,115,117,98,115,116,114,105,110,103,115,0);
          let submith = 3.0;
         rankK.push(parseInt(`${hooks9}`) & 1);
         light1 += parseInt(`${light1}`);
         modulesY += `${parseInt(`${light1}`)}`;
         completeK = !completeK;
         matha = `${(modulesY == String.fromCharCode(119,0) ? (completeK ? 1 : 1) : modulesY.length)}`;
         submith *= 2 - modulesY.length;
         break;
      }
      let bdxadsdkw = 6691754.0 <= hooks9;
      do {
          let logoy = String.fromCharCode(110,95,50,54,95,115,101,114,118,101,114,0);
          let benefitX = String.fromCharCode(110,95,49,51,95,97,112,112,101,110,100,99,104,97,114,0);
          let package_wp = String.fromCharCode(103,95,56,54,95,110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,0);
         hooks9 /= Math.max(regengM.length, 4);
         logoy += `${2 | benefitX.length}`;
         benefitX = `${(String.fromCharCode(100,0) == package_wp ? benefitX.length : package_wp.length)}`;
         if (bdxadsdkw) {
            break;
         }
      } while ((selectN.length >= parseInt(`${hooks9}`)) && bdxadsdkw);
      while (selectN.includes(`${rankK.length}`)) {
          let expandr = false;
          let combineu: Map<any, any> = new Map([[String.fromCharCode(116,105,99,107,101,116,115,95,52,95,52,54,0),342], [String.fromCharCode(104,95,53,51,95,109,97,110,97,103,101,100,0),910], [String.fromCharCode(101,95,52,50,95,99,97,116,99,104,105,110,103,0),815]]);
         selectN = `${largebrightnessw.length + selectN.length}`;
         expandr = combineu.size > 100;
         combineu = new Map([[`${combineu.size}`, ((expandr ? 4 : 2) | combineu.size)]]);
         break;
      }
      while (sans4 >= regengM.length) {
          let loginsuccessC = String.fromCharCode(120,95,52,50,95,98,105,116,120,0);
         regengM += "3";
         loginsuccessC += `${3 << (Math.min(3, loginsuccessC.length))}`;
         break;
      }
      if (1.90 > inactive5) {
          let unselectedj = 2;
          let headeri = 2.0;
          let iconeditM = String.fromCharCode(117,95,51,51,95,109,117,108,116,105,112,108,101,114,115,0);
          let defaultprofilepicL = 1;
          let networkZ = String.fromCharCode(118,97,100,107,104,122,95,105,95,54,52,0);
         regengM = `${rankK.length}`;
         unselectedj ^= 3 / (Math.max(8, parseInt(`${headeri}`)));
         headeri /= Math.max(unselectedj, 2);
         iconeditM = `${unselectedj / 2}`;
         defaultprofilepicL %= Math.max(2, 2);
         networkZ += `${2 / (Math.max(defaultprofilepicL, 8))}`;
      }
      changef *= awayteamfieldy.size;
      if (recommendation3) {
         break;
      }
   } while (recommendation3 && (4.13 <= changef));
   let yellowJ = tailB >= 7068220.0;
   do {
      tailB *= parseFloat(`${1}`);
      if (yellowJ) {
         break;
      }
   } while (yellowJ && (videoa.length <= parseInt(`${tailB}`)));
    videoPlayerRef.current?.setPause(false);
  };

  const isEpisodeDownloaded = adultMode
    ? downloadedVod?.episodes.find((x) => x.vodUrlNid === currentEpisode)
      ?.status === DVGGrayTeamdetailsbg.DVGRoom
    : downloadedVod?.episodes.find(
      (x) =>
        x.vodSourceId === currentSourceId && x.vodUrlNid === currentEpisode
    )?.status === DVGGrayTeamdetailsbg.DVGRoom;

  
  
  

  const getPosition = () => {
       let stringsW: Array<any> = [856, 986];
    let sendL = true;
    let overlayR = true;
    let link_ = 3.0;
    let phoneM: Array<any> = [950, 773, 383];
    let sharemodalP = 0.0;
    let logouserX: Map<any, any> = new Map([[String.fromCharCode(108,95,50,50,95,103,108,111,98,97,108,115,0),744], [String.fromCharCode(117,110,100,101,114,114,117,110,95,114,95,55,57,0),699], [String.fromCharCode(113,95,52,53,95,98,116,114,101,101,0),526]]);
    let statisticsZ = String.fromCharCode(111,95,57,52,95,102,111,117,114,115,113,117,97,114,101,0);
    let invite0: Map<any, any> = new Map([[String.fromCharCode(115,116,97,109,112,115,95,97,95,53,56,0),104], [String.fromCharCode(107,95,56,53,0),867]]);
    let anythinky = 1.0;
    let collectionf = String.fromCharCode(118,95,56,95,117,115,114,99,0);
    let logouser9: Map<any, any> = new Map([[String.fromCharCode(97,108,105,103,110,105,110,103,95,102,95,55,55,0),889], [String.fromCharCode(97,95,52,51,95,107,110,111,98,0),810]]);
    let classes0 = String.fromCharCode(102,114,97,112,115,95,97,95,50,53,0);
    let dycreator7 = 5.0;
      phoneM.push(parseInt(`${link_}`) + logouserX.size);
       let vignetteA = String.fromCharCode(108,95,49,49,95,98,97,110,100,115,0);
         vignetteA += `${vignetteA.length}`;
         vignetteA += `${vignetteA.length}`;
      while (vignetteA.length >= 3 || vignetteA != String.fromCharCode(104,0)) {
         vignetteA += `${3 ^ vignetteA.length}`;
         break;
      }
      collectionf += `${(stringsW.length << (Math.min(4, Math.abs((sendL ? 4 : 2)))))}`;
   while (2 <= (phoneM.length & 4) && (parseInt(`${anythinky}`) - phoneM.length) <= 4) {
       let middleY = 1.0;
       let expandN: Map<any, any> = new Map([[String.fromCharCode(115,95,52,51,95,116,121,112,101,111,102,0),41], [String.fromCharCode(118,112,109,99,95,97,95,53,52,0),81]]);
       let station7 = true;
       let sliderR: Array<any> = [String.fromCharCode(100,97,116,97,104,97,115,104,95,121,95,54,0), String.fromCharCode(116,95,50,52,95,108,105,109,105,116,97,116,105,111,110,0), String.fromCharCode(98,95,54,49,95,102,105,110,105,115,101,100,0)];
       let hooksq = String.fromCharCode(101,110,97,98,108,101,95,52,95,50,54,0);
          let small9: Array<any> = [9, 722, 372];
         expandN.set(`${sliderR.length}`, small9.length);
      for (let b = 0; b < 2; b++) {
         station7 = sliderR.length == 32;
      }
         sliderR.push(2 | hooksq.length);
         middleY *= parseInt(`${middleY}`) >> (Math.min(5, Math.abs(3)));
       let nbatrophye = false;
       let inewso = false;
      while ((hooksq.length % 4) > 5 && (hooksq.length % 4) > 1) {
         hooksq += `${expandN.size * 2}`;
         break;
      }
         inewso = !inewso || !station7;
         station7 = (94 >= ((station7 ? sliderR.length : 94) % (Math.max(sliderR.length, 1))));
       let iconfeedbackh = 5;
      for (let f = 0; f < 1; f++) {
         hooksq += `${expandN.size - 2}`;
      }
      while (!inewso) {
          let completeQ = true;
         station7 = ((sliderR.length - (!completeQ ? 21 : sliderR.length)) <= 21);
         break;
      }
       let ticke: Array<any> = [73, 957];
          let internetn = 2.0;
         sliderR = [2];
         internetn *= 2;
      if (iconfeedbackh > 5) {
         inewso = hooksq == String.fromCharCode(101,0);
      }
      while (ticke.includes(iconfeedbackh)) {
         ticke = [hooksq.length * 1];
         break;
      }
      phoneM.push(logouserX.size);
      break;
   }
   while (2 >= (stringsW.length * parseInt(`${sharemodalP}`)) || (2 / (Math.max(5, stringsW.length))) >= 4) {
       let watchnowbgQ: Array<any> = [195, 513];
       let whiteanimationliveP = 1.0;
       let complete6 = true;
       let frame_oD = String.fromCharCode(111,95,52,49,95,102,114,111,110,116,0);
       let dangerp = false;
      if (4 >= watchnowbgQ.length && 5 >= (watchnowbgQ.length & 4)) {
         dangerp = complete6;
      }
          let modelsB = 3;
         watchnowbgQ = [(2 | (complete6 ? 1 : 1))];
         modelsB -= 2;
         complete6 = !dangerp;
      for (let m = 0; m < 2; m++) {
         whiteanimationliveP += 3;
      }
         frame_oD += `${((dangerp ? 3 : 1) | frame_oD.length)}`;
      let libavformatW = watchnowbgQ.length <= 8053797;
      do {
         watchnowbgQ.push(2);
         if (libavformatW) {
            break;
         }
      } while (((3 ^ frame_oD.length) >= 1) && libavformatW);
      for (let e = 0; e < 1; e++) {
         whiteanimationliveP *= watchnowbgQ.length;
      }
         complete6 = 40.43 > whiteanimationliveP && watchnowbgQ.length > 69;
      while (2 > (1 + frame_oD.length)) {
         whiteanimationliveP += watchnowbgQ.length;
         break;
      }
      let referrerK = dangerp ? !dangerp : dangerp;
      do {
          let otherP = String.fromCharCode(98,95,49,52,95,121,117,118,99,111,110,102,105,103,105,109,97,103,101,0);
          let statisticsinactived = false;
          let icony = 1.0;
          let xadsdk0: Map<any, any> = new Map([[String.fromCharCode(108,105,110,107,101,100,95,122,95,54,51,0),761], [String.fromCharCode(104,95,56,50,95,116,97,103,0),587], [String.fromCharCode(115,116,114,117,99,116,117,114,97,108,95,52,95,56,53,0),510]]);
          let bottomU = 5;
         dangerp = String.fromCharCode(55,0) == otherP;
         otherP = "1";
         statisticsinactived = icony <= 43.42;
         icony += parseFloat(`${xadsdk0.size >> (Math.min(Math.abs(3), 1))}`);
         xadsdk0 = new Map([[`${xadsdk0.size}`, xadsdk0.size]]);
         bottomU |= 2;
         if (referrerK) {
            break;
         }
      } while (referrerK && (!complete6 && !dangerp));
      if (frame_oD.startsWith(`${dangerp}`)) {
         frame_oD += `${watchnowbgQ.length / (Math.max(2, parseInt(`${whiteanimationliveP}`)))}`;
      }
      for (let b = 0; b < 2; b++) {
          let dropdown0 = String.fromCharCode(107,95,49,55,95,105,115,115,117,105,110,103,0);
         complete6 = dropdown0.length >= 72 && dangerp;
      }
          let backiconk = String.fromCharCode(116,95,52,54,95,109,109,115,104,0);
         whiteanimationliveP *= frame_oD.length;
         backiconk = `${backiconk.length | 3}`;
         whiteanimationliveP *= (String.fromCharCode(81,0) == frame_oD ? (complete6 ? 1 : 1) : frame_oD.length);
      while (1.46 >= (whiteanimationliveP / (Math.max(frame_oD.length, 8)))) {
         frame_oD += `${parseInt(`${whiteanimationliveP}`) / (Math.max(1, frame_oD.length))}`;
         break;
      }
      stringsW = [stringsW.length];
      break;
   }
      sendL = !collectionf.includes(`${anythinky}`);

    if (componentRef.current != null) {

   let inouttargetredu = collectionf.length >= 6795873;
   do {
       let arrowright_ = 1.0;
       let club4 = 5.0;
       let user7: Map<any, any> = new Map([[String.fromCharCode(97,100,100,105,116,105,111,110,97,108,95,97,95,53,52,0),String.fromCharCode(111,112,101,114,97,116,111,114,115,95,50,95,52,51,0)], [String.fromCharCode(110,95,54,49,95,99,111,112,121,120,0),String.fromCharCode(116,104,97,119,101,100,95,115,95,57,52,0)], [String.fromCharCode(105,110,116,101,114,110,95,114,95,57,51,0),String.fromCharCode(117,112,115,116,114,101,97,109,95,56,95,54,53,0)]]);
      for (let u = 0; u < 1; u++) {
         club4 += 2 >> (Math.min(3, Math.abs(user7.size)));
      }
         club4 -= 3 * parseInt(`${club4}`);
      if ((user7.size % 5) > 4) {
         arrowright_ += 2 | user7.size;
      }
      let baseline2 = 5824451.0 <= arrowright_;
      do {
         arrowright_ += user7.size >> (Math.min(1, Math.abs(parseInt(`${arrowright_}`))));
         if (baseline2) {
            break;
         }
      } while ((arrowright_ <= 1.97) && baseline2);
          let eighteenp: Array<any> = [329, 457, 132];
         club4 += 3 >> (Math.min(1, eighteenp.length));
         arrowright_ /= Math.max(5, parseInt(`${club4}`));
      while ((user7.size & 5) <= 4 || 3 <= (5 - user7.size)) {
         user7 = new Map([[`${user7.size}`, parseInt(`${club4}`) + user7.size]]);
         break;
      }
      let reviewK = 6816203.0 >= club4;
      do {
         club4 /= Math.max(4, user7.size >> (Math.min(Math.abs(3), 2)));
         if (reviewK) {
            break;
         }
      } while ((4 >= user7.size) && reviewK);
      for (let n = 0; n < 1; n++) {
         club4 *= parseInt(`${club4}`) >> (Math.min(1, Math.abs(1)));
      }
      collectionf += `${((overlayR ? 4 : 5))}`;
      if (inouttargetredu) {
         break;
      }
   } while (inouttargetredu && (!collectionf.endsWith(statisticsZ)));
   while (5 == (parseInt(`${link_}`) - invite0.size)) {
      link_ += parseFloat(`${parseInt(`${sharemodalP}`) ^ logouserX.size}`);
      break;
   }
   while (stringsW.length == 5) {
      invite0 = new Map([[`${phoneM.length}`, 2 * parseInt(`${anythinky}`)]]);
      break;
   }
      logouser9.set(statisticsZ, 1);
   for (let f = 0; f < 1; f++) {
      sharemodalP *= stringsW.length % (Math.max(3, 4));
   }
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {

      statisticsZ += "1";
       let libglogS = String.fromCharCode(110,117,108,108,112,97,99,107,101,116,95,119,95,57,53,0);
       let analyticB = true;
       let whiteanimationliveh: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,117,115,115,95,113,95,53,52,0),true ], [String.fromCharCode(119,95,53,55,95,97,120,112,0),false ]]);
         analyticB = whiteanimationliveh.size <= 23;
      logouserX.set(`${link_}`, collectionf.length);
      libglogS += `${libglogS.length & libglogS.length}`;
   if ((phoneM.length & 1) < 1 || 1 < (phoneM.length & logouserX.size)) {
      logouserX.set(`${phoneM.length}`, logouserX.size);
   }
      stringsW.push(statisticsZ.length >> (Math.min(Math.abs(3), 5)));
      anythinky -= ((overlayR ? 3 : 1) - parseInt(`${link_}`));
        console.log("Position:", { x, y, width, height, pageX, pageY });
        setRefPosition({ x: pageX, y: pageY, width: width, height: height });

        const screenHeight = Dimensions.get("window").height;

      sharemodalP -= ((sendL ? 4 : 3) << (Math.min(Math.abs((overlayR ? 2 : 3)), 3)));
      logouser9.set(`${overlayR}`, 1);
      statisticsZ = "3";
   let downarrow0 = 5730830 >= logouser9.size;
   do {
       let guideI = String.fromCharCode(119,101,105,103,104,116,105,110,103,95,49,95,50,51,0);
       let malaysiaH = 4.0;
       let rightt = 0.0;
       let switch_3J = 4.0;
      if (1.83 > (malaysiaH / 2.7) || (3 & guideI.length) > 2) {
         guideI = `${parseInt(`${malaysiaH}`)}`;
      }
      while (4 <= (guideI.length >> (Math.min(Math.abs(4), 2))) || 2.43 <= (2.100 - rightt)) {
         guideI = `${parseInt(`${malaysiaH}`) << (Math.min(Math.abs(1), 3))}`;
         break;
      }
      for (let y = 0; y < 1; y++) {
         rightt *= 3 << (Math.min(Math.abs(parseInt(`${switch_3J}`)), 2));
      }
      if ((guideI.length / (Math.max(4, 10))) > 3 && (3.64 / (Math.max(6, malaysiaH))) > 2.3) {
         malaysiaH -= 2 & guideI.length;
      }
      if (guideI.length <= malaysiaH) {
         guideI = `${parseInt(`${malaysiaH}`)}`;
      }
      while (rightt <= malaysiaH) {
         malaysiaH *= parseInt(`${rightt}`) - 1;
         break;
      }
      if (4 < guideI.length) {
         guideI += `${2 & parseInt(`${malaysiaH}`)}`;
      }
          let entryA: Map<any, any> = new Map([[String.fromCharCode(104,111,108,101,95,105,95,52,57,0),484], [String.fromCharCode(100,101,99,111,109,112,95,55,95,55,48,0),644], [String.fromCharCode(113,95,52,49,95,120,111,114,101,100,0),624]]);
          let roundD = 5;
          let signinup0 = 3;
         switch_3J /= Math.max(2, signinup0);
         entryA = new Map([[`${entryA.size}`, roundD]]);
         roundD ^= entryA.size;
         signinup0 &= 2 - roundD;
         guideI += `${parseInt(`${rightt}`) - parseInt(`${switch_3J}`)}`;
      for (let e = 0; e < 3; e++) {
         malaysiaH += parseInt(`${rightt}`) % (Math.max(parseInt(`${switch_3J}`), 6));
      }
      let yellowT = 7644272.0 >= malaysiaH;
      do {
          let vietnamu = String.fromCharCode(112,95,56,49,95,110,101,116,119,111,114,107,110,101,119,0);
          let friendsZ = String.fromCharCode(97,118,101,114,95,106,95,49,54,0);
          let resendR = 4;
         malaysiaH += guideI.length * 2;
         vietnamu = `${vietnamu.length}`;
         friendsZ += "1";
         resendR >>= Math.min(1, Math.abs(friendsZ.length ^ resendR));
         if (yellowT) {
            break;
         }
      } while (((malaysiaH - switch_3J) > 5.46 && 2.63 > (switch_3J - 5.46)) && yellowT);
         guideI = `${1 - parseInt(`${rightt}`)}`;
      logouser9 = new Map([[classes0, 1]]);
      if (downarrow0) {
         break;
      }
   } while (downarrow0 && (!sendL));
   for (let u = 0; u < 2; u++) {
      anythinky -= (parseInt(`${sharemodalP}`) / (Math.max(4, (sendL ? 2 : 4))));
   }
        const distance = screenHeight - pageY - height;

      anythinky /= Math.max(parseInt(`${sharemodalP}`) ^ 2, 2);
   for (let c = 0; c < 1; c++) {
      sharemodalP /= Math.max(1, 4);
   }
      stringsW = [2 / (Math.max(7, logouserX.size))];
   let basketballhometeamL = statisticsZ == String.fromCharCode(53,110,111,120,49,118,109,49,100,106,0);
   do {
      statisticsZ += `${1 << (Math.min(2, stringsW.length))}`;
      if (basketballhometeamL) {
         break;
      }
   } while (basketballhometeamL && ((statisticsZ.length ^ 2) == 5 && (statisticsZ.length ^ 2) == 3));
   while (2 <= collectionf.length) {
       let interstitiali = 2;
       let rncorex = 4;
         interstitiali /= Math.max(interstitiali + 2, 5);
         interstitiali &= rncorex ^ 1;
         rncorex >>= Math.min(5, Math.abs(2 - rncorex));
       let pauseM = 3.0;
          let models7 = 5;
          let gpayJ = 0.0;
         pauseM *= parseFloat(`${parseInt(`${gpayJ}`) << (Math.min(2, Math.abs(models7)))}`);
      while (1 >= rncorex) {
          let g_unlock7 = 5.0;
          let whiteZ: Map<any, any> = new Map([[String.fromCharCode(113,95,51,51,95,109,97,112,112,101,114,0),243], [String.fromCharCode(118,105,100,101,111,116,111,111,108,98,111,120,95,50,95,54,55,0),768]]);
          let graph9 = true;
          let iconsaveimager = 4;
          let mountingF = 2.0;
         rncorex >>= Math.min(Math.abs(parseInt(`${mountingF}`)), 1);
         g_unlock7 /= Math.max((parseFloat(`${(graph9 ? 2 : 1) >> (Math.min(Math.abs(parseInt(`${g_unlock7}`)), 4))}`)), 4);
         whiteZ = new Map([[`${whiteZ.size}`, 1]]);
         graph9 = iconsaveimager < 23;
         iconsaveimager ^= whiteZ.size;
         mountingF /= Math.max((parseFloat(`${(graph9 ? 1 : 2) << (Math.min(Math.abs(2), 5))}`)), 2);
         break;
      }
      classes0 += `${3 * parseInt(`${link_}`)}`;
      break;
   }
        setDistanceToBottom(distance);

       let whistleorangeQ = String.fromCharCode(115,95,51,55,95,102,114,111,109,102,101,0);
       let floatingy = 5.0;
          let iconshareX = true;
          let saveF = String.fromCharCode(115,108,105,100,101,95,50,95,56,49,0);
         whistleorangeQ = `${3 & whistleorangeQ.length}`;
         iconshareX = saveF.length >= saveF.length;
          let statisticsK = String.fromCharCode(109,95,56,53,95,115,108,111,112,101,0);
          let textinputk: Map<any, any> = new Map([[String.fromCharCode(98,95,53,48,95,105,115,112,111,115,97,98,108,101,0),762], [String.fromCharCode(111,110,101,95,118,95,51,51,0),704], [String.fromCharCode(104,95,55,49,0),679]]);
          let activity1 = String.fromCharCode(100,117,114,97,116,105,111,110,95,99,95,50,52,0);
         whistleorangeQ += `${activity1.length * 3}`;
         statisticsK += `${textinputk.size}`;
         textinputk = new Map([[`${textinputk.size}`, 3]]);
         activity1 += `${statisticsK.length}`;
         whistleorangeQ += `${whistleorangeQ.length}`;
         floatingy /= Math.max(5, (parseFloat(`${whistleorangeQ == String.fromCharCode(90,0) ? parseInt(`${floatingy}`) : whistleorangeQ.length}`)));
       let specE: Array<any> = [890, 710];
       let currentr: Array<any> = [691, 133];
      if (3 > (whistleorangeQ.length / (Math.max(1, 9))) && (whistleorangeQ.length / (Math.max(1, 9))) > 1) {
         whistleorangeQ += `${parseInt(`${floatingy}`)}`;
      }
      link_ *= parseFloat(`${2}`);
      phoneM.push(parseInt(`${anythinky}`));
   let starS = sharemodalP >= 4997662.0;
   do {
      sharemodalP += 3 & statisticsZ.length;
      if (starS) {
         break;
      }
   } while (starS && (3.73 >= (3.93 + sharemodalP)));
      invite0 = new Map([[`${invite0.size}`, invite0.size]]);
   let currenty = logouserX.size >= 5958559;
   do {
      logouserX.set(`${anythinky}`, stringsW.length / 2);
      if (currenty) {
         break;
      }
   } while (currenty && (3.12 < sharemodalP));
        console.log("distanceToBottom");

       let photob = false;
       let libfabricjni0: Array<any> = [89, 579, 973];
      for (let q = 0; q < 2; q++) {
         photob = libfabricjni0.length == 2 && !photob;
      }
         photob = libfabricjni0.length <= 59;
      if (4 > libfabricjni0.length || (libfabricjni0.length / 4) > 4) {
         libfabricjni0 = [3];
      }
      for (let z = 0; z < 1; z++) {
         libfabricjni0 = [libfabricjni0.length & 1];
      }
      let pushb = 8785279 >= libfabricjni0.length;
      do {
          let libcrashsdk4 = false;
          let middlebrightnessr: Array<any> = [898, 43];
          let navigationN = 5;
          let closew = 0.0;
          let analyticso = String.fromCharCode(97,100,100,98,108,107,95,118,95,55,56,0);
         libfabricjni0 = [navigationN & middlebrightnessr.length];
         libcrashsdk4 = analyticso.endsWith(`${libcrashsdk4}`);
         middlebrightnessr.push(parseInt(`${closew}`) * 2);
         navigationN /= Math.max(1, 2);
         closew += 1;
         analyticso += `${(3 / (Math.max(1, (libcrashsdk4 ? 5 : 5))))}`;
         if (pushb) {
            break;
         }
      } while (((libfabricjni0.length | 1) > 2) && pushb);
       let libmapbufferjniA = 5.0;
       let unimplementedviewj = 0.0;
      phoneM = [invite0.size / (Math.max(3, 1))];
      collectionf += `${invite0.size + parseInt(`${anythinky}`)}`;
      classes0 += `${(parseInt(`${sharemodalP}`) - (sendL ? 2 : 1))}`;
   if (logouserX.get(`${anythinky}`) == null) {
      logouserX.set(`${overlayR}`, ((sendL ? 2 : 1)));
   }
   while (5.13 > (link_ * 1.34)) {
      link_ *= parseFloat(`${collectionf.length}`);
      break;
   }
        console.log(distanceToBottom);
      });
    }
  };

  return (
    <>
      <ScreenContainer
        isPlay={true}
        containerStyle={{
          paddingTop: screenState.isPlayerFullScreen ? 0 : insetsTop,
          paddingBottom: screenState.isPlayerFullScreen ? 0 : insetsBottom,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        {/* {isLoading && (
          <View
            style={{
              width: '100%',
              aspectRatio: 16 / 9,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
          >
            <FastImage
              style={{ height: 80, width: 80 }}
              source={require('@static/images/runtimeschedulerPromotion.gif')}
              resizeMode={'contain'}
            />
          </View>
        )} */}
        { }
        {isVodRestricted && vod && !isOffline && <BingSearch vod={vod} />}

        {!isVodRestricted && !dismountPlayer && !(isOffline && !episode) && (
          <VodPlayer
            key={vodUri} 
            vod_url={vodUri}
            ref={videoPlayerRef}
            currentTimeRef={currentTimeRef}
            initialStartTime={initTime}
            vodTitle={vodPlayerTitle}
            videoType="vod"
            activeEpisode={currentEpisode}
            episodes={foundSource}
            onEpisodeChange={(id: number) => {
              setCurrentEpisode(id);
              currentEpisodeRef.current = id;
              currentTimeRef.current = 0;
            }}
            showGuide={settingsReducer.showVodPlayerGuide}
            rangeSize={EPISODE_RANGE_SIZE}
            autoPlayNext={vod?.type_id !== 2}
            onShare={onShare}
            movieList={vod?.type_id === 2 ? suggestedVods : []}
            showMoreType={vod?.type_id === 2 ? "movies" : "episodes"}
            isFetchingRecommendedMovies={isFetchingSuggestedVod}
            appOrientation={settingsReducer.appOrientation}
            devicesOrientation={settingsReducer.devicesOrientation}
            lockOrientation={lockOrientation}
            handleSaveVod={() => saveVodToHistory(vod)}
            
            onReadyForDisplay={onReadyForDisplay}
            showAds={true}
            onPressCountdown={onPressCountdown}
            vodID={vod?.vod_id}
            onDownloadVod={onDownloadVod}
            sourceID={currentSourceId}
            setShowAdOverlay={setShowAdOverlay}
            onAdsMount={onAdsMount}
            vipGuideModalOpen={vipGuideModalOpen}
          />
        )}
        {isOffline && dismountPlayer && episode && (
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
              source={require("@static/images/runtimeschedulerPromotion.gif")}
              resizeMode={"contain"}
            />
          </View>
        )}
        {!dismountPlayer && isOffline && !isEpisodeDownloaded && (
          <NoConnection onClickRetry={checkConnection} isPlay={true} />
        )}

        {
          <>
            {adultMode && INVITE_FRIEND && <VipRegisterBar />}

            {bannerAd && (
              <View
                style={{
                  paddingLeft: spacing.sideOffset,
                  paddingRight: spacing.sideOffset,
                  paddingVertical: 5,
                }}
              >
                <BannerContainer
                  bannerAd={bannerAd}
                  onMount={({ id, name, slot_id, title }) => {
                    ww_runtime.videoPlayerBannerViewAnalytics({
                      playerType: adultMode ? "xVideo" : "normal",
                      ads_id: id,
                      ads_name: name,
                      ads_slot_id: slot_id,
                      ads_title: title,
                    });
                  }}
                  onPress={({ id, name, slot_id, title }) => {
                    ww_runtime.videoPlayerBannerClickAnalytics({
                      playerType: adultMode ? "xVideo" : "normal",
                      ads_id: id,
                      ads_name: name,
                      ads_slot_id: slot_id,
                      ads_title: title,
                    });
                  }}
                />
              </View>
            )}

            <ScrollView
              nestedScrollEnabled={true}
              
              contentInsetAdjustmentBehavior="automatic"
            >
              <View style={{ ...styles.descriptionContainer2, gap: spacing.m }}>
                <View style={styles.videoDescription}>
                  {adultMode ? (
                    <FastImage
                      key={`${vod?.vod_pic}-${isOffline}`}
                      source={{
                        uri:
                          isOffline && !!episode
                            ? downloadedVod?.imagePath
                            : vod?.vod_pic,
                      }}
                      resizeMode={"cover"}
                      style={{
                        ...styles.descriptionImageHorizontal,
                        ...styles.imageContainer,
                      }}
                      useFastImage={Platform.OS === "android"}
                      alternativeImg={vod?.vod_pic_list}
                    />
                  ) : (
                    <FastImage
                      key={`${vod?.vod_pic}-${isOffline}`}
                      source={{
                        uri:
                          isOffline && !!episode
                            ? downloadedVod?.imagePath
                            : vod?.vod_pic,
                      }}
                      resizeMode={"cover"}
                      style={{
                        ...styles.descriptionImage,
                        ...styles.imageContainer,
                      }}
                      useFastImage={Platform.OS === "android"}
                      alternativeImg={vod?.vod_pic_list}
                    />
                  )}

                  <View style={styles.descriptionContainer}>
                    {vod && (
                      <Text
                        numberOfLines={1}
                        style={{
                          ...textVariants.header,
                          color: colors.text,
                        }}
                      >
                        {vod.vod_name}
                      </Text>
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      //     >
                      
                      
                      
                      
                      
                      
                      
                      
                      //       />
                      
                      
                      
                      
                      
                      
                      
                      //         >
                      
                      //         </Text>
                      
                      
                      
                      
                      
                      
                      
                      //         >
                      
                      //         </Text>
                      
                      //     </View>
                      
                      // />
                    )}
                    <Text
                      style={{ ...textVariants.subBody, color: colors.muted }}
                      numberOfLines={2}
                    >
                      {`${definedValue(vod?.vod_year)}`}
                      {`${definedValue(vod?.vod_area)}`}
                      {`${definedValue(vod?.vod_class?.split(",").join(" "))}`}
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
                          console.error("Error while formatting date:", error);
                          return "更新：N/A"; 
                        }
                      })()}
                    </Text>

                    {!adultMode && (
                      <TouchableOpacity onPress={onShare}>
                        <View style={{ ...styles.share, gap: 10 }}>
                          <Text
                            style={{
                              ...textVariants.subBody,
                              color: colors.muted,
                            }}
                          >
                            分享：
                          </Text>
                          <WeChatIcon />
                          <PYQIcon />
                          <SinaIcon />
                          <QQIcon />
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
                {/* <View>
                  {!adultMode &&
                    <Text style={styles.descriptionContainer2Text}>
                      {`导演：${definedValue(vod?.vod_director)}${"\n"}` +
                        `主演：${definedValue(vod?.vod_actor)}${"\n"}`}
                    </Text>
                  }
                  <TouchableOpacity
                    onPress={() => {
                      setIsCollapsed(!isCollapsed);
                    }}
                  > */}
                {/* <View style={{ paddingBottom: 18 }}> */}
                {/* <View style={{ paddingBottom: 5 }}>
                      {isCollapsed ? (
                        <Text />
                      ) : (
                        <Text
                          ref={textRef}
                          onTextLayout={handleTextLayout}
                          style={styles.descriptionContainer2Text}
                          // numberOfLines={isCollapsed ? 2 : 20}
                          numberOfLines={20}
                        >
                          {`${definedValue(vodDetails?.vod_content)}`}
                        </Text>
                      )}
                    </View>
                    <View style={{ paddingBottom: 0, }}>
                      {isCollapsed && actualNumberOfLines >= 0 && (
                        <FastImage
                          style={{
                            flex: 1,
                            height: 12,
                            width: 14,
                            alignSelf: "center",
                          }}
                          source={require("@static/images/fieldDetails.png")}
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
                          source={require("@static/images/rankDelegate_pnLibavfilter.png")}
                          resizeMode={"contain"}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                </View> */}

                <View style={styles.videoDescription}>
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
                            color: isFavorite ? colors.primary : colors.muted,
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

                  {!adultMode && (
                    <TouchableOpacity onPress={() => setShowDescription(true)}>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          alignContent: "center",
                          gap: spacing.xxs,
                        }}
                      >
                        <VodDetailIcon
                          width={24}
                          height={24}
                          style={{
                            color: isShowDescription
                              ? colors.primary
                              : colors.muted,
                          }}
                        />
                        <Text
                          style={{
                            ...textVariants.subBody,
                            color: isShowDescription
                              ? colors.primary
                              : colors.muted,
                            paddingBottom: 3,
                          }}
                        >
                          详情
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}

                  {DOWNLOAD_FEATURE_ENABLED && !isVodRestricted && (
                    <TouchableOpacity
                      onPress={() => {
                        showAds(HBackground.HTooltipsSigmob);
                        setShowDlEpisode(true);
                      }}
                    >
                      <View
                        onLayout={() => getPosition()}
                        ref={componentRef}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: spacing.xxs,
                        }}
                      >
                        <DlVodIcon
                          width={24}
                          height={24}
                          style={{
                            color: isFavorite ? colors.primary : colors.muted,
                          }}
                        />
                        <Text
                          style={{
                            ...textVariants.subBody,
                            color: colors.muted,
                            paddingBottom: 3,
                          }}
                        >
                          下载
                        </Text>
                        {!wwBodan.fakeIsVip(userState.user) && (
                          <View style={{ width: 12, height: "100%" }}>
                            <VipIcon
                              width={12}
                              height={12}
                              style={{ ...styles.legend }}
                            />
                          </View>
                        )}
                      </View>
                    </TouchableOpacity>
                  )}
                </View>

                { }
                <>
                  {(!isOffline && isFetchingVodDetails) || isLoading ? (
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
                          source={require("@static/images/runtimeschedulerPromotion.gif")}
                          resizeMode={"contain"}
                        />
                      </View>
                    </>
                  ) : (
                    <>
                      { }
                      {!adultMode && (
                        <>
                          <View
                            style={{ ...styles.spaceApart, gap: spacing.l }}
                          >
                            <Text style={textVariants.body}>播放源</Text>
                          </View>
                          <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            initialNumToRender={10}
                            onScrollToIndexFailed={() => { }}
                            ref={sourceRef}
                            data={vodSources}
                            // data={staticDummyData.map(item => item.url)}
                            renderItem={renderSources}
                            
                            ListFooterComponent={
                              <View style={{ paddingHorizontal: 20 }} />
                            }
                            keyExtractor={(item, index) => index.toString()}
                          />
                        </>
                      )}
                      { }
                      {foundSource !== undefined && (
                        <>
                          <View
                            style={{ ...styles.spaceApart, gap: spacing.l }}
                          >
                            <Text style={textVariants.body}>选集播放</Text>
                            <TouchableOpacity
                              style={styles.share}
                              onPress={() => {
                                setShowSheet(true); 
                              }}
                            >
                              <Text
                                style={{
                                  color: colors.muted,
                                  fontSize: 15,
                                }}
                              >
                                {`${foundSource
                                  ? `1-${foundSource.url_count || 0}集`
                                  : "No episodes available"
                                  }`}
                                { }
                              </Text>
                              <MoreArrow
                                style={{ color: colors.muted }}
                                height={icons.sizes.m}
                                width={icons.sizes.m}
                              />
                            </TouchableOpacity>
                          </View>
                          <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            initialNumToRender={10}
                            onScrollToIndexFailed={() => { }}
                            ref={episodeRef}
                            
                            
                            
                            
                            data={foundSource?.urls?.slice(
                              showEpisodeRangeStart,
                              showEpisodeRangeEnd
                            )}
                            renderItem={renderEpisodes}
                            
                            ListFooterComponent={
                              <View style={{ paddingHorizontal: 20 }} />
                            }
                            keyExtractor={(item, index) =>
                              `${item.name.toString()}-${index.toString()}`
                            }
                          />
                          <View />
                        </>
                      )}

                      {adultMode ? (
                        <>
                          {vod &&
                            suggestedSVods !== undefined &&
                            suggestedSVods?.length > 0 && (
                              <View
                                style={{ gap: spacing.l, marginBottom: 60 }}
                              >
                                <ShowMoreVodButton
                                  isPlayScreen={true}
                                  
                                  text={"相关推荐"}
                                  onPress={() => {
                                    
                                    setTimeout(() => {
                                      navigation.navigate("午夜场剧情", {
                                        
                                        class: vod?.vod_class,
                                        vod_source_name: "",
                                      });
                                    }, 150);
                                  }}
                                />
                                <VodListVertical
                                  vods={suggestedSVods}
                                  minNumPerRow={2}
                                  numOfRows={3}
                                  outerRowPadding={
                                    2 * (20 - spacing.sideOffset)
                                  }
                                  heightToWidthRatio={1 / 1.814}
                                  playerMode="adult"
                                  onPress={() => {
                                    if (!isCollapsed) {
                                      setIsCollapsed(true);
                                    }
                                  }}
                                />
                              </View>
                            )}
                        </>
                      ) : (
                        <>
                          {vod &&
                            suggestedVods !== undefined &&
                            suggestedVods?.length > 0 ? (
                            <View style={{ gap: spacing.l, marginBottom: 60 }}>
                              <ShowMoreVodButton
                                isPlayScreen={true}
                                text={`相关${vod?.type_name ?? "相关推荐"}`}
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
                                onPress={({ vodId }) => {
                                  if (vodId !== vod.vod_id) {
                                    videoPlayerRef.current?.setPause(true);
                                  }

                                  if (!isCollapsed) {
                                    setIsCollapsed(true);
                                  }
                                }}
                              />
                            </View>
                          ) : (
                            <>
                              <View style={{ marginBottom: 60 }}></View>
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              </View>
            </ScrollView>
            {settingsReducer.appOrientation === "PORTRAIT" && ( 
              <>
                <VodEpisodeSelectionModal
                  isVisible={isShowSheet}
                  handleClose={handleModalClose}
                  activeEpisode={currentEpisode}
                  episodes={foundSource}
                  onCancel={() => {
                    setShowSheet(false);
                  }}
                  
                  
                  
                  
                  onConfirm={onConfirmEpisodeSelection}
                  rangeSize={EPISODE_RANGE_SIZE}
                  vodId={vod?.vod_id}
                />

                <DownloadVodSelectionModal
                  isVisible={isShowDlEpisode}
                  handleClose={() => {
                    setShowDlEpisode(false);
                  }}
                  onPressToDownload={() => {
                    setShowDlEpisode(false);
                    videoPlayerRef.current?.setPause(true);

                    wwInjury.toName("我的下载").then(() => {
                      videoPlayerRef.current?.setPause(false);
                    });
                  }}
                  activeEpisode={currentEpisode}
                  episodes={adultMode ? vod?.vod_play_list : foundSource}
                  onDownload={onDownloadVod}
                  rangeSize={EPISODE_RANGE_SIZE}
                  vodId={vod?.vod_id}
                  isVip={wwBodan.fakeIsVip(userState.user)}
                  setShowAdOverlay={setShowAdOverlay}
                  source={currentSourceId}
                />
              </>
            )}
          </>
        }
        { }
        {DOWNLOAD_FEATURE_ENABLED && !isVodRestricted && (
          <Modal visible={vipGuideModal} transparent={true}>
            <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.8)" }}>
              <View
                style={{
                  position: "absolute",
                  top: refPosition.y,
                  left: refPosition.x,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: spacing.xxs,
                  }}
                >
                  <DlVodIcon
                    width={24}
                    height={24}
                    style={{
                      color: isFavorite ? colors.primary : colors.muted,
                    }}
                  />
                  <Text
                    style={{
                      ...textVariants.subBody,
                      color: colors.muted,
                      paddingBottom: 3,
                    }}
                  >
                    下载
                  </Text>
                  {!isVip && (
                    <View style={{ width: 12, height: "100%" }}>
                      <VipIcon
                        width={12}
                        height={12}
                        style={{ ...styles.legend }}
                      />
                    </View>
                  )}
                </View>
              </View>

              {distanceToBottom <= 255 ? (
                <View
                  style={{
                    position: "absolute",
                    top: refPosition.y + 120,
                    right: screenWidth.width / 7,
                  }}
                >
                  <VipGuideModal2
                    contentTemplate={2}
                    width="160%"
                    onClose={(value: boolean) => {
                      setVipGuideModal(value);
                    }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    position: "absolute",
                    top: refPosition.y + 30,
                    right: screenWidth.width / 7,
                  }}
                >
                  <VipGuideModal
                    contentTemplate={2}
                    width="160%"
                    onClose={(value: boolean) => {
                      setVipGuideModal(value);
                    }}
                  />
                </View>
              )}
            </View>
          </Modal>
        )}

        {/* {isOffline && (
          <NoConnection onClickRetry={checkConnection} isPlayBottom={true} />
        )} */}
        {adultMode && <AdultVideoVipModal />}
      </ScreenContainer>
      <DescriptionBottomSheet
        isVisible={isShowDescription}
        handleClose={() => setShowDescription(false)}
        vodTitle={vod?.vod_name}
        vod_actor={vod?.vod_actor}
        vod_writer={vod?.vod_author}
        vod_director={vod?.vod_director}
        vod_content={vodDetails?.vod_content}
      />

      <BecomeVipOverlay
        setShowBecomeVIPOverlay={setShowAdOverlay}
        showBecomeVIPOverlay={isShowAdOverlay}
        isJustClose={true}
        selectedTab="common"
        onClose={onCloseAdOverlay}
      />

      {vipGuideModalDL && (
        <View style={[styles.overlayView]}>
          <View
            style={{
              top:
                Platform.OS === "ios"
                  ? screenWidth.height / 9
                  : screenWidth.height / 20,
            }}
          >
            <VipGuideModal
              onClose={(value: boolean) => {
                videoPlayerRef.current?.setPause(false);
                setVipGuideModalDL(value);
                setVipGuideModalOpen(false);
              }}
            />
          </View>
        </View>
      )}
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
  descriptionImageHorizontal: {
    width: "100%",
    aspectRatio: 120 / 72.5,
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
  legend: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingLeft: 10,
    overflow: "hidden",
  },
  overlayView: {
    zIndex: 99,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    flex: 1,
  },
});

export default memo(Play);
