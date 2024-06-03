

class RenewBodanProfileAjax {
    static routerSharedBallInjury = (contents: [number], key: number, hasEmoji: boolean) => {
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
import FavoriteButton from "../../components/button/tt_private_arrow_button";
import FavoriteIcon from "@static/images/twitterViewerMbnativeadvanced.svg";
import VodDetailIcon from "@static/images/switch_6qColorsCenter.svg";
import DlVodIcon from "@static/images/whistleForward.svg";
import ScreenContainer from "../../components/container/tt_backward";
import {
  useTheme,
  useFocusEffect,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import { ttConfigRecommendation } from "../../../tt_copy_floater";

import { RootStackScreenProps } from "@type/tt_temperature";
import {
  ttCenter,
  ttReportInjury,
  ttSelected,
  ttAnalytics,
} from "@type/tt_line_borderless";
import { addVodToHistory, playVod } from "@redux/actions/tt_activity";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/tt_spec_download";
import { ttOrange } from "@redux/tt_updates_bottom";
import {
  ttTrashGradlew,
  ttStreaming,
} from "@redux/reducers/tt_configure_injury";
import SinaIcon from "@static/images/interstitialGesture.svg";
import WeChatIcon from "@static/images/chatHelperSingapore.svg";
import QQIcon from "@static/images/sideSingle.svg";
import PYQIcon from "@static/images/teamMinivod.svg";
import MoreArrow from "@static/images/privilegeQuestCountry.svg";
import SourceIcon from "@static/images/configureBannerLeft.svg";
import VodEpisodeSelectionModal from "../../components/modal/tt_left";
import FastImage from "../../components/common/tt_connection";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  APP_NAME_CONST,
  DOWNLOAD_FEATURE_ENABLED,
  PLAY_HTTP_SERVER_PORT,
  UMENG_CHANNEL,
} from "@utility/tt_trophy_cross";
import { useQuery } from "@tanstack/react-query";
import ShowMoreVodButton from "../../components/button/tt_style_button";
import VodListVertical from "../../components/vod/tt_player";
import VodPlayer from "../../components/videoPlayer/tt_strings";
import { FlatList } from "react-native-gesture-handler";
import { ttBaiduNewinterstitial } from "@redux/reducers/tt_center";
import BingSearch from "../../components/container/tt_mbnativeadvanced_component";

import NoConnection from "../../components/common/tt_fast";
import NetInfo from "@react-native-community/netinfo";
import { lockAppOrientation } from "@redux/actions/tt_checkbox";
import { AdsBannerContext } from "../../contexts/tt_injury_reminder";
import { URL } from "react-native-url-polyfill";
import RNFetchBlob from "rn-fetch-blob";
import { BridgeServer } from "react-native-http-bridge-refurbished";
import { debounce } from "lodash";

import LinearGradient from "react-native-linear-gradient";
import VipIcon from "@static/images/halfAjax.svg";
import AdultVideoVipModal from "../../components/modal/tt_settings";
import VipRegisterBar from "../../components/adultVideo/tt_button_spinner";
import {
  disableAdultMode,
  enableAdultMode,
  incrementAdultVideoWatchTime,
  setIsPlayGuideShown,
  setIsPlayGuideShown2,
} from "@redux/actions/tt_copy_heji";

import tt_humidity_guide from "../../../Umeng/tt_humidity_guide";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenModel } from "@type/tt_twitter_data";
import { ttConfirmationChinasame } from "@api";

import DescriptionBottomSheet from "../../components/videoPlayer/Play/tt_promotion_video";
import { VodDescription } from "../../components/videoPlayer/Play/vodDescription";

import { BannerContainer } from "../../components/container/tt_injury";
import { ttReactnativejsMalaysia } from "@utility/tt_side_description";
import { ttGemfile } from "@constants";
import BecomeVipOverlay from "../../components/modal/tt_type";
import { ttDropdown } from "../../api/tt_refresh_friends";
import SimpleToast from "react-native-simple-toast";
import DownloadVodSelectionModal from "../../components/modal/tt_viewer_math";
import DeviceInfo from "react-native-device-info";
import { addVideoToDownloadThunk } from "@redux/actions/tt_delegate_google";
import {
  ZRChinasame,
  ttMapping,
  ttTumbnail,
} from "@type/tt_const_videocommon";
import { ttGray } from "@utility/tt_selection";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";
import { ttTarget } from "../../routes/tt_macau_read";
import VipGuideModal from "../../components/modal/tt_pangle";
import ttDownTick from "../../../AppsFlyer/tt_fastforward";
import VipGuideModal2 from "../../components/modal/tt_interstitial";
let insetsTop = 0;
let insetsBottom = 0;

type ttGreyBorderless = {
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

const server = new BridgeServer(RenewBodanProfileAjax.routerSharedBallInjury([87,75,75,79,96,76,90,77,73,86,92,90,63],0x3F,false), true); 

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

  const vodReducer: ttStreaming = useAppSelector(
    ({ vodReducer }: ttOrange) => vodReducer
  );
  const vodFavouriteReducer: ttTrashGradlew = useAppSelector(
    ({ vodFavouritesReducer }: ttOrange) => vodFavouritesReducer
  );
  const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
    ({ settingsReducer }: ttOrange) => settingsReducer
  );
  const userState = useSelector<ttGoal>("userReducer");
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
  const videoPlayerRef = useRef() as React.MutableRefObject<ttGreyBorderless>;
  const currentEpisodeRef = useRef<number>();
  const currentSourceRef = useRef<number>();
  const sourceRef = useRef<FlatList>(null);

  const [dismountPlayer, setDismountPlayer] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isShowSheet, setShowSheet] = useState(false);
  const isVip = ttFast.isVip(userState.user);

  const [isReadyPlay, setReadyPlay] = useState(false);

  

  const [currentSourceId, setCurrentSourceId] = useState(
    vod?.sourceWatched === undefined ? 0 : vod.sourceWatched
  );
  const [currentQuality, setCurrentQuality] = useState(
    vod?.sourceWatched === undefined ? 0 : vod.sourceWatched
  );
  const [vodSources, setVodSources] = useState<ttSelected[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVodPlayerLoading, setIsVodPlayerLoading] = useState(false);
  const [shouldResumeAfterLoad, setShouldResumeAfterLoad] = useState(false);

  const [isShowDescription, setShowDescription] = useState(false);
  const [isShowDlEpisode, setShowDlEpisode] = useState(false);

  const [bannerAd, setBannerAd] = useState<ttAnalytics>();

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

  const downloadedVod: ttTumbnail | undefined = useAppSelector(
    ({ downloadVideoReducer }: ttOrange) => {
      return downloadVideoReducer.downloads.find(
        (download) => download.vod.vod_id === vod?.vod_id
      );
    }
  );
  const episode = adultMode
    ? downloadedVod?.episodes.find(
      (ep) =>
        ep.vodUrlNid === currentEpisode &&
        ep.status === ZRChinasame.ZRControl
    )
    : downloadedVod?.episodes.find(
      (ep) =>
        ep.vodSourceId === currentSourceId &&
        ep.vodUrlNid === currentEpisode &&
        ep.status === ZRChinasame.ZRControl
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
       let countryO: Array<any> = [297, 865];
    let singaporel = String.fromCharCode(112,97,97,100,95,111,95,50,48,0);
    let libcrashsdkf = String.fromCharCode(115,112,97,114,107,115,95,102,95,53,0);
    let transfers = 2;
    let streamingt = String.fromCharCode(112,95,57,54,95,116,101,116,114,97,104,101,100,114,97,108,0);
    let colorsz = String.fromCharCode(118,95,57,55,95,112,97,105,114,105,110,103,115,0);
    let moviesW: Map<any, any> = new Map([[String.fromCharCode(110,95,52,49,95,97,115,115,117,109,101,0),true ], [String.fromCharCode(114,101,99,111,118,101,114,97,98,108,101,95,98,95,50,55,0),false ], [String.fromCharCode(101,95,55,56,95,110,101,111,110,0),false ]]);
    let condenseds = String.fromCharCode(115,95,56,54,0);
    let pausey = true;
    let combineI = 3;
    let macauL: Array<any> = [692, 893];
    let membershipv = String.fromCharCode(117,110,115,101,110,116,95,107,95,57,48,0);
   let emojio = pausey ? !pausey : pausey;
   do {
       let ajaxr = 2;
       let upload6: Map<any, any> = new Map([[String.fromCharCode(98,101,116,116,101,114,95,104,95,54,51,0),586], [String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,115,95,50,95,53,55,0),254], [String.fromCharCode(100,95,55,51,95,97,99,111,108,111,114,115,0),592]]);
       let clubQ = String.fromCharCode(102,95,57,52,95,112,104,111,110,101,115,0);
      while (upload6.size < ajaxr) {
          let vignetteM = String.fromCharCode(112,95,53,54,95,115,104,97,112,101,115,0);
          let z_viewa = String.fromCharCode(114,101,109,97,114,107,95,113,95,50,57,0);
         upload6 = new Map([[z_viewa, z_viewa.length * 1]]);
         vignetteM += "2";
         break;
      }
          let textN = 0;
         clubQ = `${clubQ.length % (Math.max(10, upload6.size))}`;
         textN &= textN;
      let rankw = 8852446 >= ajaxr;
      do {
         ajaxr |= (String.fromCharCode(111,0) == clubQ ? clubQ.length : upload6.size);
         if (rankw) {
            break;
         }
      } while ((ajaxr == clubQ.length) && rankw);
      for (let c = 0; c < 2; c++) {
         upload6.set(clubQ, 1 | upload6.size);
      }
          let pangleA = false;
          let interstitialo: Map<any, any> = new Map([[String.fromCharCode(112,111,115,105,116,105,111,110,105,110,103,95,107,95,51,53,0),228], [String.fromCharCode(115,95,52,55,95,104,112,105,99,0),459]]);
         upload6.set(clubQ, (clubQ.length - (pangleA ? 4 : 4)));
         pangleA = interstitialo.size == interstitialo.size;
      if ((1 << (Math.min(3, clubQ.length))) < 1 && 1 < (ajaxr << (Math.min(clubQ.length, 3)))) {
          let dialogI: Map<any, any> = new Map([[String.fromCharCode(114,118,118,108,99,95,48,95,52,54,0),String.fromCharCode(109,101,116,97,100,97,116,97,115,101,116,95,51,95,55,53,0)], [String.fromCharCode(97,95,56,55,95,105,112,113,102,0),String.fromCharCode(100,101,108,101,103,97,116,111,114,95,114,95,55,0)], [String.fromCharCode(99,109,97,107,101,95,122,95,49,51,0),String.fromCharCode(112,95,57,53,95,100,101,97,99,116,0)]]);
          let knewsF = String.fromCharCode(101,95,49,57,95,112,97,110,0);
          let complete2 = String.fromCharCode(99,111,112,121,102,100,95,53,95,54,57,0);
          let bingT = String.fromCharCode(104,95,49,52,95,109,105,100,108,0);
          let firebaseM: Array<any> = [String.fromCharCode(105,95,52,56,95,99,111,110,116,101,120,116,0), String.fromCharCode(116,95,50,48,95,99,114,111,112,0), String.fromCharCode(110,116,101,114,102,97,99,101,95,57,95,57,54,0)];
         clubQ += `${upload6.size * 3}`;
         dialogI = new Map([[`${firebaseM.length}`, bingT.length]]);
         knewsF = "2";
         complete2 += "3";
         bingT = "3";
         firebaseM = [firebaseM.length];
      }
      let icon_ = 9685176 <= ajaxr;
      do {
          let privileges = String.fromCharCode(112,97,116,116,101,114,110,95,119,95,56,57,0);
          let privacyt = 4.0;
         ajaxr *= 2;
         privileges += `${parseInt(`${privacyt}`) % (Math.max(privileges.length, 8))}`;
         privacyt *= 2 ^ parseInt(`${privacyt}`);
         if (icon_) {
            break;
         }
      } while ((clubQ.length > 3) && icon_);
         upload6.set(`${ajaxr}`, upload6.size);
         clubQ += `${(String.fromCharCode(71,0) == clubQ ? clubQ.length : ajaxr)}`;
      pausey = !pausey;
      if (emojio) {
         break;
      }
   } while ((!pausey) && emojio);
   if (1 <= (libcrashsdkf.length % (Math.max(2, combineI)))) {
      combineI += ((pausey ? 5 : 2) / (Math.max(10, transfers)));
   }


    if (screenState.interstitialShow == true) {

       let connectionG = String.fromCharCode(101,95,51,55,95,111,116,111,102,0);
       let orientation2 = String.fromCharCode(100,95,55,49,95,101,109,111,106,105,0);
      if (4 >= orientation2.length) {
          let traminiW: Map<any, any> = new Map([[String.fromCharCode(99,95,53,54,95,115,116,109,116,0),293], [String.fromCharCode(97,95,55,50,95,119,97,110,116,115,0),343], [String.fromCharCode(98,97,116,99,104,95,101,95,56,55,0),285]]);
          let indexC = String.fromCharCode(102,117,116,117,114,101,95,56,95,51,54,0);
          let temperaturee: Map<any, any> = new Map([[String.fromCharCode(119,95,54,95,118,112,109,116,0),String.fromCharCode(99,116,105,109,101,95,101,95,53,48,0)], [String.fromCharCode(100,101,98,117,103,103,105,110,103,95,120,95,55,57,0),String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,95,105,95,50,55,0)]]);
         connectionG += `${orientation2.length}`;
         traminiW = new Map([[`${traminiW.size}`, indexC.length]]);
         indexC = `${indexC.length / 3}`;
         temperaturee = new Map([[`${temperaturee.size}`, temperaturee.size - 3]]);
      }
      for (let s = 0; s < 1; s++) {
         connectionG += `${connectionG.length ^ orientation2.length}`;
      }
         orientation2 += `${(String.fromCharCode(114,0) == connectionG ? orientation2.length : connectionG.length)}`;
      if (orientation2 == String.fromCharCode(111,0)) {
         connectionG += `${orientation2.length * 3}`;
      }
         orientation2 += `${connectionG.length + 1}`;
         connectionG = `${connectionG.length}`;
      streamingt += `${(streamingt.length & (pausey ? 4 : 4))}`;
   while (colorsz.startsWith(streamingt)) {
      streamingt = `${combineI}`;
      break;
   }
      videoPlayerRef.current?.setPause(true); 
    }

    

      libcrashsdkf += `${((pausey ? 2 : 1) * combineI)}`;
      libcrashsdkf = `${combineI * 1}`;
    

      countryO = [combineI];
   if (condenseds.length < 4) {
      pausey = 27 > countryO.length;
   }
    

       let expiredV = String.fromCharCode(99,101,114,116,112,111,108,95,113,95,51,57,0);
         expiredV += "1";
          let profile7: Map<any, any> = new Map([[String.fromCharCode(116,95,52,50,95,117,110,99,111,110,102,105,103,117,114,101,0),589], [String.fromCharCode(115,107,101,121,108,105,115,116,95,52,95,50,50,0),732]]);
          let stringsD = String.fromCharCode(99,108,105,112,112,101,100,95,122,95,49,55,0);
         expiredV = `${expiredV.length % (Math.max(10, profile7.size))}`;
         profile7.set(stringsD, stringsD.length * stringsD.length);
      for (let c = 0; c < 1; c++) {
         expiredV += `${expiredV.length << (Math.min(expiredV.length, 4))}`;
      }
      streamingt += `${((pausey ? 5 : 2) % (Math.max(1, condenseds.length)))}`;
      combineI *= ((pausey ? 1 : 4) << (Math.min(Math.abs(1), 5)));

    setTimeout(() => {

   for (let e = 0; e < 3; e++) {
      singaporel = `${1 ^ combineI}`;
   }
       let paginationw = String.fromCharCode(109,114,122,95,108,95,48,0);
      while (paginationw.length >= 3) {
         paginationw = `${(String.fromCharCode(117,0) == paginationw ? paginationw.length : paginationw.length)}`;
         break;
      }
         paginationw += `${(paginationw == String.fromCharCode(95,0) ? paginationw.length : paginationw.length)}`;
      for (let k = 0; k < 2; k++) {
         paginationw = `${paginationw.length}`;
      }
      transfers &= 2;
      if (screenState.isPlayGuideShown2 == false && !isVip) {

      countryO = [(String.fromCharCode(79,0) == streamingt ? streamingt.length : combineI)];
      countryO.push(2 - countryO.length);
        setTimeout(() => {

   if (singaporel.endsWith(`${combineI}`)) {
       let whatsappl = String.fromCharCode(108,95,50,95,105,110,116,114,97,102,114,97,109,101,0);
       let bufferO = 2.0;
       let o_managern = String.fromCharCode(114,95,52,54,95,115,116,117,102,102,0);
       let modalu = String.fromCharCode(116,104,97,110,95,112,95,55,53,0);
      for (let e = 0; e < 3; e++) {
         modalu = `${2 << (Math.min(1, whatsappl.length))}`;
      }
         whatsappl = `${1 << (Math.min(4, whatsappl.length))}`;
          let groupQ = 5.0;
         modalu = `${(String.fromCharCode(76,0) == o_managern ? parseInt(`${groupQ}`) : o_managern.length)}`;
      while (o_managern != String.fromCharCode(49,0)) {
         whatsappl += `${whatsappl.length % (Math.max(3, 9))}`;
         break;
      }
      while (!o_managern.endsWith(modalu)) {
         o_managern += `${(String.fromCharCode(76,0) == modalu ? o_managern.length : modalu.length)}`;
         break;
      }
          let taiwanM = String.fromCharCode(104,95,53,55,95,114,101,97,99,104,97,98,108,101,0);
          let whatsapp6 = String.fromCharCode(111,117,116,100,101,118,115,95,48,95,57,56,0);
         modalu = "1";
         taiwanM = `${(String.fromCharCode(107,0) == whatsapp6 ? taiwanM.length : whatsapp6.length)}`;
         modalu += `${whatsappl.length}`;
       let infow = 0;
       let guidej = 1;
          let handlerO: Map<any, any> = new Map([[String.fromCharCode(101,120,116,110,95,97,95,53,54,0),String.fromCharCode(105,95,53,51,95,100,120,116,97,0)], [String.fromCharCode(115,117,112,112,114,101,115,115,101,100,95,115,95,54,0),String.fromCharCode(117,95,53,57,95,112,114,111,98,101,0)]]);
         bufferO += o_managern.length + guidej;
         handlerO = new Map([[`${handlerO.size}`, 3]]);
         modalu += `${whatsappl.length - modalu.length}`;
      for (let k = 0; k < 2; k++) {
         o_managern += "1";
      }
      for (let w = 0; w < 2; w++) {
         bufferO += o_managern.length;
      }
      combineI *= o_managern.length;
   }
      moviesW = new Map([[`${countryO.length}`, countryO.length + 2]]);
          videoPlayerRef.current?.setPause(true); 

   for (let l = 0; l < 3; l++) {
       let searchbarp = String.fromCharCode(97,95,51,53,95,116,104,114,101,97,100,0);
       let previewz = String.fromCharCode(118,109,97,112,115,105,110,95,51,95,52,57,0);
       let zhuboq = 4.0;
      while (searchbarp.endsWith(`${zhuboq}`)) {
          let manifestd = 0.0;
          let overD = 3;
          let dataZ = 5.0;
          let libcrashsdkk = 0;
         searchbarp = `${overD}`;
         manifestd *= 1 / (Math.max(parseInt(`${manifestd}`), 10));
         overD &= parseInt(`${manifestd}`);
         dataZ *= libcrashsdkk;
         libcrashsdkk %= Math.max(2, libcrashsdkk);
         break;
      }
         searchbarp = `${(previewz == String.fromCharCode(122,0) ? parseInt(`${zhuboq}`) : previewz.length)}`;
       let sliderg = 3.0;
       let fileM = 1.0;
      if (previewz.startsWith(`${zhuboq}`)) {
         previewz = `${parseInt(`${fileM}`) % 3}`;
      }
      for (let d = 0; d < 1; d++) {
         zhuboq /= Math.max(parseFloat(`${searchbarp.length}`), 3);
      }
      transfers >>= Math.min(4, Math.abs(countryO.length | 3));
   }
   if ((colorsz.length - 5) > 3 && (transfers - colorsz.length) > 5) {
       let q_lock2 = String.fromCharCode(100,105,115,112,108,97,121,95,120,95,57,54,0);
       let singaporeK = 1.0;
       let privacyk = String.fromCharCode(110,97,116,117,114,97,108,95,97,95,52,0);
       let playY: Map<any, any> = new Map([[String.fromCharCode(115,117,109,97,114,121,95,49,95,49,54,0),String.fromCharCode(99,95,53,56,95,115,104,97,108,108,0)], [String.fromCharCode(106,95,54,55,95,116,105,108,101,104,100,114,0),String.fromCharCode(101,102,102,101,99,116,105,118,101,95,118,95,49,51,0)]]);
         singaporeK -= parseFloat(`${q_lock2.length ^ 3}`);
       let taiwanK = 4;
       let scheduleS = 2;
      let cleare = scheduleS >= 7660869;
      do {
          let gemfilew: Array<any> = [855, 147, 5];
          let appsW = 0.0;
         scheduleS |= playY.size * gemfilew.length;
         gemfilew.push(3 ^ parseInt(`${appsW}`));
         appsW /= Math.max(1, parseFloat(`${2 / (Math.max(7, parseInt(`${appsW}`)))}`));
         if (cleare) {
            break;
         }
      } while (((scheduleS & 5) < 1 || 5 < (5 & q_lock2.length)) && cleare);
      if ((scheduleS + singaporeK) >= 4.42) {
          let assistg = 5;
          let arrowt = String.fromCharCode(115,95,53,50,95,115,99,111,112,101,100,0);
          let long_5nh = String.fromCharCode(121,95,52,54,95,116,112,99,0);
          let nterstitialE = String.fromCharCode(114,95,50,56,95,101,99,111,109,112,114,101,115,115,111,114,0);
          let philippinesb = String.fromCharCode(103,95,53,53,95,99,97,110,99,101,108,108,97,98,108,101,0);
         scheduleS <<= Math.min(5, Math.abs(3 % (Math.max(10, philippinesb.length))));
         assistg -= 2 << (Math.min(1, arrowt.length));
         arrowt += `${(arrowt == String.fromCharCode(106,0) ? arrowt.length : nterstitialE.length)}`;
         long_5nh = `${arrowt.length}`;
         nterstitialE += `${arrowt.length * long_5nh.length}`;
         philippinesb += `${arrowt.length}`;
      }
         privacyk += `${playY.size * 2}`;
      for (let r = 0; r < 3; r++) {
         scheduleS *= privacyk.length;
      }
          let shirte = 5.0;
          let modulec = String.fromCharCode(110,111,109,105,110,97,108,95,50,95,53,53,0);
         privacyk += `${modulec.length}`;
         shirte -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${shirte}`)), 2))}`);
         modulec += `${parseInt(`${shirte}`) % 3}`;
      if ((q_lock2.length - 4) >= 1) {
         taiwanK &= (String.fromCharCode(53,0) == q_lock2 ? q_lock2.length : scheduleS);
      }
          let detailu = 3.0;
          let rank0 = 2;
         playY.set(`${taiwanK}`, scheduleS);
         detailu *= parseFloat(`${parseInt(`${detailu}`)}`);
         rank0 &= 1 & parseInt(`${detailu}`);
         singaporeK *= parseFloat(`${privacyk.length}`);
      for (let d = 0; d < 3; d++) {
         scheduleS ^= privacyk.length % (Math.max(4, playY.size));
      }
      while (4 <= (scheduleS - 5)) {
          let connectionn = 5;
          let condensed6 = String.fromCharCode(115,117,98,106,101,99,116,105,118,101,115,95,52,95,49,54,0);
          let stations5 = 3.0;
          let plash9: Map<any, any> = new Map([[String.fromCharCode(121,95,50,51,95,118,111,105,99,101,109,97,105,108,0),false ], [String.fromCharCode(112,97,103,101,115,101,101,107,95,106,95,54,56,0),false ], [String.fromCharCode(113,95,53,52,95,102,116,118,100,111,99,0),true ]]);
          let typingM = String.fromCharCode(112,95,49,53,0);
         scheduleS *= playY.size & scheduleS;
         connectionn *= condensed6.length;
         condensed6 += `${plash9.size & connectionn}`;
         stations5 *= parseFloat(`${1}`);
         plash9.set(`${stations5}`, plash9.size);
         typingM = "3";
         break;
      }
      transfers >>= Math.min(Math.abs(2), 4);
   }
          setVipGuideModalDL(true);

   while ((macauL.length / 4) >= 1 || 1 >= (macauL.length / (Math.max(4, 4)))) {
      macauL.push(libcrashsdkf.length ^ 3);
      break;
   }
   for (let y = 0; y < 2; y++) {
      combineI += macauL.length;
   }
          setVipGuideModalOpen(true);

   while (3 < libcrashsdkf.length) {
      moviesW.set(`${streamingt}`, streamingt.length);
      break;
   }
   let checkboxL = libcrashsdkf.length <= 4925883;
   do {
      libcrashsdkf = `${condenseds.length}`;
      if (checkboxL) {
         break;
      }
   } while (checkboxL && (2 >= singaporel.length));
          dispatch(setIsPlayGuideShown2(true));
        }, 50);

   while (singaporel.includes(`${macauL.length}`)) {
      singaporel = `${((pausey ? 4 : 1))}`;
      break;
   }
   if (2 == libcrashsdkf.length) {
      libcrashsdkf += `${singaporel.length}`;
   }

        if (screenState.isPlayGuideShown == false && !isVip) {

      libcrashsdkf += `${streamingt.length % 3}`;
       let umeng0 = String.fromCharCode(114,101,108,97,121,101,100,95,117,95,51,57,0);
          let searcho = 2.0;
          let moret = String.fromCharCode(116,111,110,95,51,95,53,55,0);
          let macauf = String.fromCharCode(105,95,52,54,95,105,110,102,0);
         umeng0 = `${umeng0.length}`;
         searcho *= (parseFloat(`${macauf == String.fromCharCode(68,0) ? moret.length : macauf.length}`));
         moret = "3";
      let leagueQ = umeng0.length <= 6929837;
      do {
          let logink = String.fromCharCode(107,95,55,95,99,102,116,102,115,117,98,0);
          let videoB = false;
          let renewQ = String.fromCharCode(114,95,52,95,119,101,98,99,97,109,0);
          let championh = 0.0;
         umeng0 += `${renewQ.length}`;
         logink += `${logink.length % 2}`;
         videoB = !logink.endsWith(`${championh}`);
         renewQ = `${logink.length & parseInt(`${championh}`)}`;
         if (leagueQ) {
            break;
         }
      } while ((4 >= umeng0.length) && leagueQ);
         umeng0 += `${umeng0.length}`;
      combineI <<= Math.min(Math.abs(singaporel.length >> (Math.min(Math.abs(2), 3))), 3);
          setTimeout(() => {

   if ((transfers + 2) > 4) {
      moviesW.set(libcrashsdkf, 1);
   }
       let anytimeF = 3;
      let backB = 6112309 >= anytimeF;
      do {
          let malaysiaJ = String.fromCharCode(100,101,108,116,97,113,95,54,95,55,53,0);
          let infok = 1.0;
          let launcher8 = true;
          let typing3: Array<any> = [String.fromCharCode(115,117,98,116,105,116,108,101,95,122,95,53,51,0), String.fromCharCode(114,101,115,111,108,118,105,110,103,95,110,95,54,56,0)];
          let delegate_etQ = 5.0;
         anytimeF += 3 + malaysiaJ.length;
         malaysiaJ += `${parseInt(`${delegate_etQ}`) << (Math.min(5, Math.abs(1)))}`;
         infok -= 1;
         launcher8 = delegate_etQ > infok;
         typing3.push(parseInt(`${delegate_etQ}`) * 3);
         if (backB) {
            break;
         }
      } while ((anytimeF < 4) && backB);
         anytimeF &= anytimeF << (Math.min(1, Math.abs(anytimeF)));
          let button8 = String.fromCharCode(103,114,97,109,115,95,107,95,51,54,0);
          let stringsx: Array<any> = [335, 672, 999];
         anytimeF |= stringsx.length;
         button8 = `${(button8 == String.fromCharCode(114,0) ? button8.length : button8.length)}`;
         stringsx.push(button8.length / (Math.max(button8.length, 3)));
      pausey = (anytimeF + libcrashsdkf.length) < 19;
            setVipGuideModal(true);

   while (pausey) {
      countryO = [moviesW.size * colorsz.length];
      break;
   }
      singaporel = "3";
            setVipGuideModalOpen(true);

   for (let z = 0; z < 1; z++) {
      combineI += moviesW.size;
   }
   while (2 >= countryO.length) {
       let configureF = 3.0;
      let gray1 = configureF >= 8670886.0;
      do {
         configureF *= parseInt(`${configureF}`) % (Math.max(8, parseInt(`${configureF}`)));
         if (gray1) {
            break;
         }
      } while ((configureF <= 2.39) && gray1);
       let gpay1: Map<any, any> = new Map([[String.fromCharCode(100,101,113,117,97,110,116,105,122,101,114,95,49,95,48,0),false ], [String.fromCharCode(108,95,51,54,95,99,97,115,101,100,0),true ], [String.fromCharCode(99,111,109,98,105,110,101,114,95,54,95,57,49,0),true ]]);
       let c_player9: Map<any, any> = new Map([[String.fromCharCode(104,95,53,51,95,104,102,108,105,112,0),887], [String.fromCharCode(109,111,100,101,109,118,99,111,115,116,95,51,95,57,0),778]]);
      if (!Array.from(gpay1.values()).includes(configureF)) {
          let verticalm = 5.0;
          let downloaderO: Map<any, any> = new Map([[String.fromCharCode(99,116,120,112,95,110,95,51,50,0),196], [String.fromCharCode(115,117,98,112,114,111,99,101,115,115,95,111,95,49,48,48,0),932], [String.fromCharCode(99,117,114,114,101,110,100,95,120,95,56,48,0),429]]);
          let model = String.fromCharCode(121,95,55,51,95,115,117,98,106,101,99,116,115,0);
          let logob = 1.0;
         gpay1.set(`${c_player9.size}`, gpay1.size);
         verticalm += 3;
         downloaderO.set(`${logob}`, 3);
         model = "2";
         logob *= downloaderO.size;
      }
      countryO.push(combineI);
      break;
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
                ? colors.selected
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
       let friendsc = 4;
    let downloadingG = 0.0;
    let fillg = 1;
    let mbnativeadvancedQ = String.fromCharCode(109,95,56,49,95,114,100,106,112,103,99,111,109,0);
    let emptyL = 0.0;
    let profile8 = String.fromCharCode(97,100,97,112,116,101,114,95,100,95,55,53,0);
    let sigmobT = 0.0;
    let controlY: Array<any> = [604, 762, 724];
    let homeM = String.fromCharCode(101,107,121,95,110,95,57,54,0);
    let indicatorS = String.fromCharCode(117,116,105,108,105,116,121,95,118,95,50,55,0);
    let tooltipsb: Map<any, any> = new Map([[String.fromCharCode(109,97,115,115,95,121,95,49,50,0),574], [String.fromCharCode(112,97,115,99,97,108,95,51,95,49,54,0),999], [String.fromCharCode(116,97,98,108,101,95,55,95,51,0),477]]);
    let rightf = 1;
      mbnativeadvancedQ += `${controlY.length + parseInt(`${emptyL}`)}`;
   if (4 <= (parseInt(`${emptyL}`) * 4) || (4 ^ mbnativeadvancedQ.length) <= 2) {
      mbnativeadvancedQ = "1";
   }

    try {

       let target2 = 2.0;
       let dplus1 = String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,115,95,99,95,56,55,0);
       let backwardj: Array<any> = [String.fromCharCode(114,101,110,100,101,114,98,117,102,102,101,114,95,116,95,53,56,0), String.fromCharCode(98,97,110,100,95,98,95,56,50,0)];
          let matchesZ = String.fromCharCode(115,99,104,101,109,97,115,95,120,95,50,48,0);
          let humidity5 = 4.0;
          let controlv = String.fromCharCode(102,95,53,95,109,97,115,107,0);
         target2 /= Math.max(5, backwardj.length >> (Math.min(Math.abs(2), 2)));
         matchesZ += "1";
         humidity5 += (matchesZ == String.fromCharCode(84,0) ? parseInt(`${humidity5}`) : matchesZ.length);
         controlv = `${controlv.length}`;
          let strings0 = String.fromCharCode(107,95,52,95,117,110,112,114,111,116,101,99,116,0);
          let constantsk = String.fromCharCode(115,95,55,57,95,115,105,108,101,110,99,101,100,0);
          let mbsplashO: Array<any> = [950, 976, 114];
         backwardj.push(strings0.length << (Math.min(3, backwardj.length)));
         strings0 += `${constantsk.length}`;
         constantsk = `${constantsk.length - mbsplashO.length}`;
         mbsplashO.push((constantsk == String.fromCharCode(95,0) ? constantsk.length : mbsplashO.length));
          let selectionR = 2.0;
          let gestureb = false;
          let catalogb: Map<any, any> = new Map([[String.fromCharCode(110,95,55,51,0),String.fromCharCode(119,105,110,116,104,114,101,97,100,95,50,95,49,54,0)], [String.fromCharCode(107,95,56,95,121,118,116,111,121,117,121,0),String.fromCharCode(108,95,56,51,95,99,101,110,116,101,114,0)], [String.fromCharCode(99,101,105,108,95,53,95,49,51,0),String.fromCharCode(115,97,109,112,108,101,99,112,121,95,102,95,57,50,0)]]);
         target2 /= Math.max(((gestureb ? 2 : 4) & dplus1.length), 1);
         selectionR += parseFloat(`${catalogb.size & 2}`);
         gestureb = catalogb.get(`${selectionR}`) == null;
       let plashd = 0.0;
         dplus1 = `${parseInt(`${plashd}`) % (Math.max(parseInt(`${target2}`), 1))}`;
          let playw: Array<any> = [25, 211, 37];
          let saveW = String.fromCharCode(97,99,114,111,110,121,109,95,53,95,50,48,0);
          let tumbnailr = false;
         target2 += dplus1.length - parseInt(`${plashd}`);
         playw = [(3 - (tumbnailr ? 2 : 3))];
         saveW = `${saveW.length | 1}`;
         tumbnailr = !tumbnailr;
      while (1.93 > (4.11 + plashd)) {
         backwardj.push(2);
         break;
      }
         backwardj = [1 ^ parseInt(`${plashd}`)];
      for (let t = 0; t < 2; t++) {
         dplus1 += "2";
      }
      homeM += "1";
   for (let t = 0; t < 3; t++) {
      indicatorS = `${parseInt(`${sigmobT}`) / (Math.max(2, 1))}`;
   }
      

   if ((profile8.length + 2) <= 2) {
       let hejiH = 1.0;
       let descU = 0.0;
       let videob: Array<any> = [916, 550, 210];
       let gradle8 = 3.0;
       let gmaild = String.fromCharCode(105,110,102,111,108,100,101,114,95,97,95,54,50,0);
      if (5.74 >= (gradle8 - 3.64) && 2 >= (videob.length - parseInt(`${gradle8}`))) {
         videob.push(2 | parseInt(`${descU}`));
      }
          let halfu: Array<any> = [496, 642, 804];
          let pinga: Array<any> = [587, 431];
          let notificationk = String.fromCharCode(117,110,108,105,109,105,116,101,100,95,105,95,52,56,0);
         gmaild = `${gmaild.length}`;
         halfu = [(String.fromCharCode(114,0) == notificationk ? halfu.length : notificationk.length)];
         pinga = [notificationk.length];
      for (let z = 0; z < 3; z++) {
          let uploadg = 3;
          let networkM: Array<any> = [95, 269, 764];
          let storer = String.fromCharCode(112,114,101,100,105,99,97,116,101,95,49,95,55,56,0);
         descU /= Math.max(2, parseFloat(`${uploadg}`));
         uploadg += (String.fromCharCode(69,0) == storer ? storer.length : networkM.length);
         networkM.push(networkM.length + storer.length);
      }
      let episodeT = 5605917.0 <= hejiH;
      do {
         hejiH += parseInt(`${hejiH}`) / (Math.max(gmaild.length, 10));
         if (episodeT) {
            break;
         }
      } while ((1.53 < (descU / (Math.max(5, hejiH)))) && episodeT);
         gmaild += "2";
         gradle8 *= parseFloat(`${3}`);
          let dropdownn = true;
          let friendsU = 5.0;
         hejiH += 2;
         dropdownn = !dropdownn;
         friendsU += (parseInt(`${friendsU}`) | (dropdownn ? 4 : 5));
          let minimizeV = 4;
          let membershipW: Map<any, any> = new Map([[String.fromCharCode(114,101,99,101,105,118,101,95,122,95,51,50,0),669], [String.fromCharCode(116,95,56,48,95,102,105,116,115,0),218], [String.fromCharCode(101,110,116,105,116,105,116,121,95,55,95,50,53,0),873]]);
          let recommendationR = 4;
         hejiH += videob.length;
         minimizeV ^= recommendationR - 3;
         membershipW.set(`${minimizeV}`, membershipW.size);
         recommendationR |= 2 & recommendationR;
      let albumf = 9333131 <= videob.length;
      do {
          let referrerq = String.fromCharCode(109,101,109,117,116,105,108,95,105,95,51,48,0);
          let statisticsC = String.fromCharCode(103,95,51,49,95,99,111,109,112,0);
          let bodanf = String.fromCharCode(110,101,108,108,121,109,111,115,101,114,95,101,95,49,49,0);
          let componenta = String.fromCharCode(109,97,114,107,105,110,103,95,56,95,52,52,0);
         videob.push(parseInt(`${descU}`) * 3);
         referrerq = `${(bodanf == String.fromCharCode(72,0) ? bodanf.length : referrerq.length)}`;
         statisticsC += "3";
         componenta += `${statisticsC.length}`;
         if (albumf) {
            break;
         }
      } while (albumf && (3 >= (videob.length & 1) && (videob.length % 1) >= 3));
      let mbjscommonO = descU <= 6946728.0;
      do {
         descU /= Math.max(5, parseFloat(`${parseInt(`${descU}`)}`));
         if (mbjscommonO) {
            break;
         }
      } while ((descU == 2.13) && mbjscommonO);
      let mappingB = 6614050.0 <= descU;
      do {
         descU += (parseFloat(`${String.fromCharCode(56,0) == gmaild ? gmaild.length : videob.length}`));
         if (mappingB) {
            break;
         }
      } while (mappingB && (descU == 3.18));
      while (gradle8 == descU) {
         descU /= Math.max(parseFloat(`${3}`), 3);
         break;
      }
         hejiH -= parseInt(`${gradle8}`) - gmaild.length;
      for (let z = 0; z < 3; z++) {
         gradle8 *= parseFloat(`${videob.length}`);
      }
         descU -= parseFloat(`${gmaild.length | 2}`);
      profile8 = `${parseInt(`${downloadingG}`) ^ 1}`;
   }
      controlY.push(2);
      tt_humidity_guide.playsShareClicksAnalytics();

      indicatorS = `${indicatorS.length}`;
   if ((friendsc * 1) >= 3 || (1 % (Math.max(6, friendsc))) >= 5) {
      friendsc += controlY.length;
   }
      

       let videop = 5.0;
       let promotion3: Map<any, any> = new Map([[String.fromCharCode(118,95,53,53,95,101,108,101,109,101,110,116,119,105,115,101,0),0], [String.fromCharCode(97,95,50,55,95,106,102,105,101,108,100,115,0),646], [String.fromCharCode(97,99,114,111,115,115,102,97,100,101,95,98,95,53,57,0),850]]);
       let videocommonn = false;
      while (videop <= 4.16 || 3.98 <= (videop / 4.16)) {
         videop -= (parseFloat(`${(videocommonn ? 2 : 3) * 1}`));
         break;
      }
         videocommonn = null != promotion3.get(`${videop}`);
          let orientationc = String.fromCharCode(114,95,55,57,95,115,105,110,116,105,0);
         videocommonn = 35.75 <= videop;
         orientationc = `${orientationc.length}`;
      if (5.53 > (videop - 5.71) || 3 > (4 ^ promotion3.size)) {
         videop -= (parseFloat(`${(videocommonn ? 1 : 3) * parseInt(`${videop}`)}`));
      }
      while (!videocommonn) {
          let more7 = String.fromCharCode(115,95,54,53,95,100,97,115,104,98,111,97,114,100,0);
          let clockP = String.fromCharCode(97,100,100,105,116,105,118,101,95,50,95,49,56,0);
          let tickF = String.fromCharCode(114,95,56,48,95,111,116,105,102,105,99,97,116,105,111,110,0);
         videocommonn = String.fromCharCode(118,0) == tickF;
         more7 = `${more7.length & clockP.length}`;
         clockP = `${2 - more7.length}`;
         tickF += "1";
         break;
      }
         promotion3 = new Map([[`${promotion3.size}`, promotion3.size]]);
      let splashE = 8387269.0 <= videop;
      do {
         videop *= (parseFloat(`${(videocommonn ? 3 : 5) + parseInt(`${videop}`)}`));
         if (splashE) {
            break;
         }
      } while (splashE && (4.82 > videop || (4.82 - videop) > 2.47));
      while (Array.from(promotion3.keys()).includes(`${videop}`)) {
         promotion3.set(`${videocommonn}`, ((videocommonn ? 3 : 5) | 1));
         break;
      }
      while (Array.from(promotion3.values()).includes(videop)) {
         videop *= parseFloat(`${1 & parseInt(`${videop}`)}`);
         break;
      }
      emptyL *= (parseFloat(`${String.fromCharCode(97,0) == profile8 ? profile8.length : fillg}`));
      profile8 = `${controlY.length}`;

      let msg = `《${vod?.vod_name
        }》高清播放${"\n"}https://yingshi.tv/index.php/vod/play/id/${vod?.vod_id
        }/sid/1/nid/${currentEpisode + 1
        }.html${"\n"}${APP_NAME_CONST}-海量高清视频在线观看`;

      sigmobT += parseInt(`${sigmobT}`);
       let backward6 = 0;
       let activityJ = 1;
      let penaltyi = activityJ <= 8788245;
      do {
         activityJ <<= Math.min(2, Math.abs(3 + activityJ));
         if (penaltyi) {
            break;
         }
      } while (((backward6 & 5) <= 4 && 5 <= (backward6 & activityJ)) && penaltyi);
      while ((2 << (Math.min(3, Math.abs(activityJ)))) <= 1) {
          let resendZ: Map<any, any> = new Map([[String.fromCharCode(112,115,102,105,108,101,95,122,95,49,53,0),true ], [String.fromCharCode(113,95,54,51,95,109,111,100,105,102,105,101,114,115,0),false ]]);
          let modity5: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,97,102,114,97,109,101,95,100,95,51,48,0),false ], [String.fromCharCode(100,108,105,100,120,95,106,95,55,51,0),false ], [String.fromCharCode(110,99,104,117,110,107,95,115,95,49,49,0),false ]]);
         backward6 %= Math.max(2, resendZ.size);
         resendZ = new Map([[`${modity5.size}`, modity5.size]]);
         break;
      }
          let bridgez = String.fromCharCode(98,95,55,51,95,97,99,99,101,115,115,105,98,105,108,105,116,121,0);
          let forwardB: Array<any> = [String.fromCharCode(106,95,51,55,95,98,121,114,121,105,0), String.fromCharCode(112,114,101,115,115,101,100,95,107,95,54,51,0), String.fromCharCode(109,97,114,103,105,110,95,103,95,57,49,0)];
          let pressureI = 1.0;
         activityJ <<= Math.min(Math.abs((String.fromCharCode(76,0) == bridgez ? activityJ : bridgez.length)), 5);
         forwardB = [parseInt(`${pressureI}`)];
         pressureI -= 1;
      if (5 == activityJ) {
         activityJ ^= backward6;
      }
      let u_unlock1 = backward6 >= 5464145;
      do {
          let s_positionP = String.fromCharCode(110,111,110,110,117,108,108,101,110,99,114,121,112,116,105,111,110,95,52,95,53,52,0);
          let mbjscommonD = String.fromCharCode(113,95,52,55,95,99,111,110,116,101,120,116,112,114,111,102,105,108,101,108,101,118,101,108,0);
          let editW = String.fromCharCode(112,114,101,117,112,100,97,116,101,95,97,95,54,52,0);
         backward6 ^= (String.fromCharCode(104,0) == s_positionP ? activityJ : s_positionP.length);
         mbjscommonD = `${mbjscommonD.length}`;
         editW += `${editW.length % 2}`;
         if (u_unlock1) {
            break;
         }
      } while (u_unlock1 && (2 < (1 % (Math.max(2, activityJ))) || 1 < (activityJ % (Math.max(2, backward6)))));
         backward6 %= Math.max(5, activityJ);
      indicatorS = "3";

      if (APP_NAME_CONST == "蚂蚁影视") {
        msg = `海量视频内容 随时随地 想看就看 ${"\n"}https://xiangkantv.net/share.html`;

      mbnativeadvancedQ += "1";
      profile8 += `${parseInt(`${downloadingG}`)}`;
      }

      const result = await Share.share({
        message: msg,
      });

   for (let p = 0; p < 1; p++) {
      mbnativeadvancedQ += `${(String.fromCharCode(77,0) == mbnativeadvancedQ ? mbnativeadvancedQ.length : parseInt(`${sigmobT}`))}`;
   }
   while (3.2 >= downloadingG) {
      friendsc ^= mbnativeadvancedQ.length;
      break;
   }
      if (result.action === Share.sharedAction) {

      emptyL -= parseFloat(`${1}`);
   let sportr = 5545845.0 >= downloadingG;
   do {
       let ewardedI = 0;
       let selectiono: Map<any, any> = new Map([[String.fromCharCode(100,95,49,48,48,95,109,105,103,104,116,0),576], [String.fromCharCode(109,95,55,52,95,108,105,118,101,100,0),197], [String.fromCharCode(99,111,112,121,105,110,103,95,51,95,54,53,0),891]]);
       let livek = String.fromCharCode(97,116,116,105,98,117,116,101,95,97,95,57,52,0);
       let n_countv = 1;
      for (let v = 0; v < 3; v++) {
         ewardedI += 1;
      }
         livek += `${ewardedI / (Math.max(n_countv, 6))}`;
       let pageR: Array<any> = [943, 840];
         selectiono.set(livek, pageR.length);
         selectiono = new Map([[`${pageR.length}`, ewardedI]]);
          let nativeexK = 1.0;
         ewardedI -= selectiono.size & pageR.length;
         nativeexK /= Math.max(3, parseFloat(`${parseInt(`${nativeexK}`)}`));
      while ((n_countv << (Math.min(Math.abs(5), 2))) <= 4 || (n_countv << (Math.min(Math.abs(selectiono.size), 2))) <= 5) {
         n_countv *= livek.length;
         break;
      }
      let favicon3 = 6510177 >= ewardedI;
      do {
          let nterstitialm = 0;
          let mail1 = String.fromCharCode(99,104,101,99,107,101,100,95,112,95,55,52,0);
          let sigmobw = 3;
          let details1 = true;
          let weiboV = true;
         ewardedI += 1;
         nterstitialm -= mail1.length;
         mail1 = `${(nterstitialm + (weiboV ? 5 : 4))}`;
         sigmobw -= sigmobw * 2;
         details1 = !details1;
         weiboV = (sigmobw - mail1.length) > 2;
         if (favicon3) {
            break;
         }
      } while (favicon3 && (livek.length > ewardedI));
      downloadingG *= (homeM == String.fromCharCode(122,0) ? homeM.length : parseInt(`${sigmobT}`));
      if (sportr) {
         break;
      }
   } while (sportr && (1 >= (indicatorS.length - parseInt(`${downloadingG}`)) || 1 >= (indicatorS.length - parseInt(`${downloadingG}`))));
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

      homeM = `${rightf << (Math.min(Math.abs(friendsc), 1))}`;
      emptyL += parseFloat(`${profile8.length}`);
      Alert.alert(error.message);
    }
  };

  const checkConnection = async () => {
       let reactnativejsi = 2.0;
    let rules7 = 5.0;
    let orientationE = String.fromCharCode(117,95,52,52,95,109,101,116,104,111,100,0);
    let link2 = String.fromCharCode(106,95,56,51,95,115,99,111,114,101,115,0);
    let fieldL = String.fromCharCode(109,95,55,55,95,100,105,115,97,98,108,101,0);
    let zooma = String.fromCharCode(100,105,115,97,112,112,101,97,114,105,110,103,95,118,95,56,57,0);
    let orientationS = String.fromCharCode(110,95,52,49,95,97,100,116,115,116,111,97,115,99,0);
    let rewindI = String.fromCharCode(99,95,53,52,95,112,97,117,115,101,0);
    let rightX = false;
    let launcherm = 1.0;
    let sendr = 5;
    let goalU = String.fromCharCode(118,95,52,54,95,112,97,114,115,101,114,0);
       let awayz = 1.0;
       let morej: Map<any, any> = new Map([[String.fromCharCode(102,95,50,56,95,101,115,116,105,109,97,116,105,111,110,0),63], [String.fromCharCode(114,101,112,95,104,95,48,0),287], [String.fromCharCode(111,95,56,54,95,119,97,115,116,101,100,0),179]]);
      if (2.48 < (awayz - 4.67) || 4.30 < (4.67 - awayz)) {
         morej = new Map([[`${morej.size}`, morej.size]]);
      }
      if (4.28 == (parseFloat(`${morej.size}`) / (Math.max(9, awayz)))) {
         morej.set(`${awayz}`, parseInt(`${awayz}`));
      }
         awayz -= parseFloat(`${parseInt(`${awayz}`) + morej.size}`);
         morej.set(`${awayz}`, 3);
      for (let c = 0; c < 1; c++) {
          let combinedv = String.fromCharCode(116,95,57,95,119,97,114,110,105,110,103,0);
          let clubl: Array<any> = [50, 433, 399];
          let loginw = false;
          let foundv = String.fromCharCode(117,110,109,97,115,107,95,117,95,53,57,0);
         awayz -= (parseFloat(`${foundv == String.fromCharCode(115,0) ? foundv.length : clubl.length}`));
         combinedv = `${((loginw ? 4 : 2))}`;
         clubl = [((loginw ? 1 : 4) >> (Math.min(combinedv.length, 2)))];
      }
      if (parseFloat(`${morej.size}`) == awayz) {
         awayz *= parseFloat(`${2 << (Math.min(1, Math.abs(parseInt(`${awayz}`))))}`);
      }
      orientationS = `${parseInt(`${awayz}`) % (Math.max(5, orientationE.length))}`;
   while (orientationE.includes(`${rightX}`)) {
      rightX = !rightX && 4.34 < launcherm;
      break;
   }
   let componentG = 8083771 <= sendr;
   do {
       let scheduleq = String.fromCharCode(99,111,109,112,97,99,116,95,109,95,57,55,0);
       let buttonH: Map<any, any> = new Map([[String.fromCharCode(115,95,55,48,95,112,114,111,100,117,99,101,114,0),41], [String.fromCharCode(116,95,55,51,95,115,107,101,119,0),332]]);
       let nextF = 1.0;
         buttonH = new Map([[`${buttonH.size}`, buttonH.size & scheduleq.length]]);
          let scorex: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,101,116,95,115,95,54,52,0),String.fromCharCode(118,95,51,53,95,119,104,105,99,104,0)], [String.fromCharCode(101,97,99,115,95,54,95,57,52,0),String.fromCharCode(99,95,51,53,95,111,102,102,115,0)]]);
          let backgroundI = String.fromCharCode(115,101,113,118,105,100,101,111,95,55,95,52,0);
         buttonH = new Map([[backgroundI, 1]]);
         scorex = new Map([[`${scorex.size}`, scorex.size]]);
         backgroundI = `${2 >> (Math.min(3, Math.abs(scorex.size)))}`;
          let fieldK = String.fromCharCode(117,110,98,108,111,99,107,105,110,103,95,52,95,54,51,0);
         buttonH.set(`${nextF}`, (String.fromCharCode(67,0) == fieldK ? parseInt(`${nextF}`) : fieldK.length));
      while (2 > (buttonH.size ^ scheduleq.length)) {
         scheduleq += `${parseInt(`${nextF}`) ^ scheduleq.length}`;
         break;
      }
      if (nextF == parseFloat(`${buttonH.size}`)) {
         nextF *= parseFloat(`${3 | buttonH.size}`);
      }
         scheduleq += `${parseInt(`${nextF}`)}`;
          let catalogX = 0.0;
          let grayH = 2.0;
         scheduleq += "2";
         catalogX /= Math.max(5, parseFloat(`${3 + parseInt(`${catalogX}`)}`));
         grayH -= parseFloat(`${1}`);
      let navigationI = scheduleq.length >= 5356546;
      do {
         scheduleq += `${buttonH.size}`;
         if (navigationI) {
            break;
         }
      } while (((buttonH.size + scheduleq.length) >= 3 && (scheduleq.length + 3) >= 5) && navigationI);
         buttonH = new Map([[`${buttonH.size}`, buttonH.size >> (Math.min(scheduleq.length, 3))]]);
      sendr -= parseInt(`${rules7}`) | 3;
      if (componentG) {
         break;
      }
   } while (((5 & link2.length) == 1 || 3 == (link2.length & 5)) && componentG);
       let countryc = String.fromCharCode(115,95,52,51,95,98,108,105,110,100,105,110,103,0);
       let combinek = false;
       let firebaseC = true;
         combinek = countryc.length <= 61;
       let servicex = 0;
       let ajaxw = 0;
      reactnativejsi += (parseFloat(`${(rightX ? 3 : 2) % (Math.max(3, 2))}`));
      link2 += `${1 * link2.length}`;
      link2 += `${(String.fromCharCode(80,0) == fieldL ? orientationE.length : fieldL.length)}`;

    const state = await NetInfo.fetch();

      rewindI += `${parseInt(`${reactnativejsi}`)}`;
   let countryN = 8628315 <= fieldL.length;
   do {
       let entry_ = 1;
       let collectionW = true;
       let transfert = 2;
       let skipl: Map<any, any> = new Map([[String.fromCharCode(107,101,114,110,101,114,95,49,95,54,55,0),String.fromCharCode(102,95,54,51,95,118,97,108,105,100,105,116,121,0)], [String.fromCharCode(114,101,115,116,114,105,99,116,105,111,110,95,56,95,49,55,0),String.fromCharCode(104,97,97,114,95,55,95,49,52,0)], [String.fromCharCode(106,95,53,54,95,117,112,116,105,109,101,0),String.fromCharCode(99,95,55,54,95,112,97,116,99,104,115,101,116,0)]]);
         transfert %= Math.max(2, 3);
      for (let s = 0; s < 2; s++) {
         entry_ |= entry_ << (Math.min(Math.abs(2), 5));
      }
      while (1 >= entry_) {
         collectionW = skipl.get(`${transfert}`) == null;
         break;
      }
      let unreadB = collectionW ? !collectionW : collectionW;
      do {
          let statistics_: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,119,111,114,100,115,95,122,95,49,48,0),true ], [String.fromCharCode(117,112,115,104,105,102,116,95,50,95,49,56,0),true ]]);
          let default_7ef: Map<any, any> = new Map([[String.fromCharCode(103,95,57,49,95,99,97,112,0),344], [String.fromCharCode(107,95,49,53,95,98,117,102,0),341]]);
          let loading9 = 3.0;
         collectionW = !collectionW;
         statistics_ = new Map([[`${default_7ef.size}`, parseInt(`${loading9}`) - 1]]);
         default_7ef = new Map([[`${default_7ef.size}`, parseInt(`${loading9}`)]]);
         if (unreadB) {
            break;
         }
      } while ((collectionW) && unreadB);
      let gradlewW = entry_ >= 8985721;
      do {
         entry_ <<= Math.min(Math.abs(3 ^ transfert), 4);
         if (gradlewW) {
            break;
         }
      } while (gradlewW && (1 <= entry_));
         transfert <<= Math.min(3, Math.abs(transfert | 1));
          let episodej = 2.0;
          let ewardedj = 3.0;
         skipl.set(`${ewardedj}`, entry_ % 2);
         episodej -= parseFloat(`${1 % (Math.max(parseInt(`${episodej}`), 7))}`);
         ewardedj *= parseFloat(`${2}`);
      let dicex = 5981293 <= transfert;
      do {
         transfert ^= 2;
         if (dicex) {
            break;
         }
      } while ((collectionW && (transfert | 5) == 3) && dicex);
      while ((transfert % (Math.max(2, skipl.size))) >= 3 && (3 % (Math.max(4, skipl.size))) >= 1) {
         skipl = new Map([[`${skipl.size}`, entry_]]);
         break;
      }
       let descN = String.fromCharCode(113,95,51,55,95,116,114,97,110,115,105,116,105,111,110,105,110,103,0);
       let libcrashsdkt = String.fromCharCode(114,97,110,103,101,115,95,107,95,56,50,0);
          let soundi = 2;
          let colorsU = String.fromCharCode(97,108,103,95,48,95,50,48,0);
          let success0 = 5.0;
         libcrashsdkt += `${transfert + skipl.size}`;
         soundi >>= Math.min(Math.abs(parseInt(`${success0}`) & 2), 1);
         colorsU = `${3 ^ soundi}`;
         success0 *= parseFloat(`${3}`);
          let soundK: Map<any, any> = new Map([[String.fromCharCode(119,95,57,52,95,116,111,108,108,0),671], [String.fromCharCode(114,101,119,114,105,116,101,95,98,95,56,56,0),644], [String.fromCharCode(104,95,52,48,95,115,116,114,108,99,97,116,0),337]]);
          let share6: Map<any, any> = new Map([[String.fromCharCode(115,95,56,51,95,99,111,110,115,116,114,97,105,110,116,0),939], [String.fromCharCode(109,95,57,53,95,114,101,110,100,105,116,105,111,110,115,0),937]]);
          let typingP = 1;
         skipl = new Map([[`${share6.size}`, typingP]]);
         soundK = new Map([[`${soundK.size}`, soundK.size]]);
         share6 = new Map([[`${soundK.size}`, soundK.size / 1]]);
      fieldL = `${fieldL.length % 2}`;
      if (countryN) {
         break;
      }
   } while ((rightX) && countryN);
   while (rewindI.startsWith(`${rules7}`)) {
      rewindI += `${(String.fromCharCode(108,0) == rewindI ? rewindI.length : parseInt(`${launcherm}`))}`;
      break;
   }
   for (let d = 0; d < 2; d++) {
      rewindI += `${orientationE.length}`;
   }
   let malaysiaS = 8741083.0 >= reactnativejsi;
   do {
      reactnativejsi *= parseFloat(`${zooma.length}`);
      if (malaysiaS) {
         break;
      }
   } while ((!rewindI.includes(`${reactnativejsi}`)) && malaysiaS);
      orientationS = "3";
    const offline = !(state.isConnected && state.isInternetReachable);

   while (rightX) {
      launcherm -= parseFloat(`${rewindI.length}`);
      break;
   }
   for (let v = 0; v < 1; v++) {
       let configurel = 4.0;
       let searchbarU = String.fromCharCode(111,95,51,95,119,97,108,107,116,104,114,111,117,103,104,0);
       let minivodS = String.fromCharCode(102,95,55,48,95,115,117,98,109,111,100,101,108,0);
      if (minivodS.includes(`${searchbarU.length}`)) {
          let controlsI: Array<any> = [763, 296, 230];
          let footballe = true;
          let kcopy_5ps: Map<any, any> = new Map([[String.fromCharCode(121,95,55,52,95,97,102,102,101,99,116,101,100,0),44], [String.fromCharCode(102,114,97,109,101,112,97,99,107,95,50,95,54,53,0),866], [String.fromCharCode(119,95,51,50,95,111,112,116,105,111,110,97,108,108,121,0),157]]);
          let humidityi = String.fromCharCode(103,101,110,97,110,110,95,100,95,54,57,0);
          let thailand9 = 2.0;
         minivodS += "3";
         controlsI.push(1 * humidityi.length);
         footballe = kcopy_5ps.size > 25;
         kcopy_5ps = new Map([[`${kcopy_5ps.size}`, kcopy_5ps.size / (Math.max(2, 6))]]);
         humidityi = "1";
         thailand9 *= parseFloat(`${controlsI.length}`);
      }
         searchbarU = "2";
      if (minivodS.startsWith(`${configurel}`)) {
         configurel *= 1 % (Math.max(7, minivodS.length));
      }
      for (let s = 0; s < 2; s++) {
         configurel /= Math.max(2, minivodS.length ^ 3);
      }
         minivodS = `${parseInt(`${configurel}`) - searchbarU.length}`;
      for (let o = 0; o < 1; o++) {
         searchbarU = `${parseInt(`${configurel}`) ^ minivodS.length}`;
      }
          let trashJ = 5.0;
          let configb = String.fromCharCode(105,95,50,53,95,103,101,116,110,97,109,101,105,110,102,111,0);
         searchbarU = `${minivodS.length ^ parseInt(`${configurel}`)}`;
         trashJ -= parseFloat(`${parseInt(`${trashJ}`)}`);
         configb += `${3 + configb.length}`;
         configurel *= searchbarU.length;
      for (let j = 0; j < 1; j++) {
          let mail7 = String.fromCharCode(97,115,111,108,117,116,101,95,54,95,55,49,0);
          let n_manager8: Map<any, any> = new Map([[String.fromCharCode(122,95,55,53,95,115,116,117,110,0),527], [String.fromCharCode(97,108,108,111,119,95,54,95,55,56,0),506], [String.fromCharCode(117,95,53,55,95,99,97,115,116,0),814]]);
          let typesC = 4;
          let matches8 = String.fromCharCode(111,114,105,103,105,110,95,57,95,54,55,0);
         searchbarU += `${typesC ^ 1}`;
         mail7 += "2";
         n_manager8.set(`${mail7}`, (mail7 == String.fromCharCode(108,0) ? mail7.length : n_manager8.size));
         typesC |= mail7.length;
         matches8 = `${n_manager8.size % (Math.max(matches8.length, 6))}`;
      }
      sendr >>= Math.min(2, Math.abs(rewindI.length % (Math.max(3, 7))));
   }
       let showv = String.fromCharCode(107,95,56,52,95,114,101,99,111,103,110,105,122,101,100,0);
       let statsu = false;
       let sheet5 = 0.0;
         showv = `${((statsu ? 4 : 2))}`;
      for (let h = 0; h < 2; h++) {
         statsu = sheet5 == 89.16;
      }
         showv = `${parseInt(`${sheet5}`) >> (Math.min(Math.abs(3), 1))}`;
      while (!statsu) {
         statsu = showv.length > 15 || statsu;
         break;
      }
      while (sheet5 >= 4.47) {
         showv = `${((statsu ? 4 : 2))}`;
         break;
      }
         showv = `${showv.length % (Math.max(10, parseInt(`${sheet5}`)))}`;
      while (!showv.startsWith(`${sheet5}`)) {
         showv = `${2 | showv.length}`;
         break;
      }
         statsu = (((statsu ? 70 : showv.length) << (Math.min(showv.length, 1))) > 70);
         showv += `${showv.length}`;
      rightX = (orientationS.length * parseInt(`${reactnativejsi}`)) >= 37;
       let mbridgeL = 1.0;
       let clearo = String.fromCharCode(99,98,114,116,95,99,95,49,48,48,0);
      let pausew = mbridgeL <= 7305019.0;
      do {
          let mailT = 2.0;
          let listi = 0.0;
         mbridgeL -= (parseFloat(`${String.fromCharCode(118,0) == clearo ? clearo.length : parseInt(`${mbridgeL}`)}`));
         mailT /= Math.max(parseFloat(`${parseInt(`${listi}`)}`), 4);
         listi /= Math.max(parseFloat(`${parseInt(`${mailT}`)}`), 2);
         if (pausew) {
            break;
         }
      } while ((!clearo.startsWith(`${mbridgeL}`)) && pausew);
          let stylesk: Map<any, any> = new Map([[String.fromCharCode(102,95,52,48,0),483], [String.fromCharCode(121,95,53,57,95,114,101,100,117,99,116,105,111,110,0),443]]);
          let volumei = String.fromCharCode(100,111,103,115,95,57,95,50,52,0);
          let combined5 = true;
         clearo += `${clearo.length}`;
         stylesk.set(`${combined5}`, 3);
         volumei += "1";
      while (mbridgeL < 3.81) {
          let floatingw = String.fromCharCode(97,108,103,111,114,105,116,104,109,115,95,114,95,55,51,0);
          let expandt = 4.0;
          let activityG = String.fromCharCode(108,105,98,115,109,98,99,95,111,95,52,48,0);
         clearo += `${floatingw.length + 3}`;
         floatingw += `${parseInt(`${expandt}`)}`;
         expandt += 2;
         activityG += `${activityG.length - 1}`;
         break;
      }
       let dialoge = 5.0;
         clearo = `${parseInt(`${mbridgeL}`) * clearo.length}`;
         mbridgeL *= parseFloat(`${parseInt(`${dialoge}`) + 2}`);
      orientationS += `${(fieldL == String.fromCharCode(112,0) ? link2.length : fieldL.length)}`;
       let blackh = 5;
       let pathH = 3.0;
          let securityd = String.fromCharCode(121,95,55,95,97,117,116,111,109,97,116,105,99,97,108,108,121,0);
          let tempQ = true;
         blackh -= 3 / (Math.max(parseInt(`${pathH}`), 10));
         securityd += `${(securityd.length % (Math.max(7, (tempQ ? 1 : 3))))}`;
         tempQ = !tempQ;
          let huaweif = String.fromCharCode(100,111,119,110,119,97,114,100,95,111,95,55,52,0);
          let plashj = 3;
          let popupX: Array<any> = [String.fromCharCode(112,95,50,53,95,104,105,110,116,115,0), String.fromCharCode(104,95,57,56,95,109,97,110,116,105,115,115,97,0), String.fromCharCode(120,95,49,56,95,102,97,115,116,115,115,105,109,0)];
         blackh %= Math.max(blackh, 3);
         huaweif += `${huaweif.length >> (Math.min(Math.abs(2), 3))}`;
         plashj >>= Math.min(4, Math.abs(popupX.length >> (Math.min(4, Math.abs(plashj)))));
         popupX = [popupX.length];
      if (pathH < blackh) {
          let reminder0 = 5.0;
         blackh &= parseInt(`${reminder0}`);
      }
          let reminder7 = true;
          let dplusW = String.fromCharCode(100,101,118,105,99,101,95,116,95,49,55,0);
          let logoutG: Array<any> = [951, 663, 963];
         pathH *= parseFloat(`${logoutG.length}`);
         reminder7 = dplusW == dplusW;
       let chinal = 3.0;
          let shared3 = String.fromCharCode(108,95,57,55,95,100,105,115,112,115,97,98,108,101,0);
          let filledb = 2;
         blackh |= parseInt(`${chinal}`) ^ 1;
         shared3 += `${filledb + shared3.length}`;
         filledb -= filledb % 3;
      launcherm *= parseFloat(`${parseInt(`${reactnativejsi}`)}`);
       let ajaxj = false;
      while (ajaxj) {
         ajaxj = !ajaxj;
         break;
      }
      let userX = ajaxj ? !ajaxj : ajaxj;
      do {
         ajaxj = (ajaxj ? !ajaxj : !ajaxj);
         if (userX) {
            break;
         }
      } while ((ajaxj) && userX);
         ajaxj = (!ajaxj ? ajaxj : ajaxj);
      sendr /= Math.max(5, zooma.length - parseInt(`${rules7}`));
    setIsOffline(offline);

   while (2.66 >= (launcherm + parseFloat(`${link2.length}`)) || 2.68 >= (2.66 + launcherm)) {
      link2 = `${(String.fromCharCode(57,0) == rewindI ? (rightX ? 4 : 1) : rewindI.length)}`;
      break;
   }
   let mbsplasha = 6454459 >= rewindI.length;
   do {
       let specV: Array<any> = [248, 450, 57];
      for (let h = 0; h < 2; h++) {
          let rankY = String.fromCharCode(104,95,51,95,100,101,110,111,109,0);
          let untickf: Map<any, any> = new Map([[String.fromCharCode(120,95,50,50,95,109,98,99,115,0),113], [String.fromCharCode(99,95,49,48,48,95,117,110,100,101,114,102,108,111,119,0),58], [String.fromCharCode(99,111,110,100,105,116,105,111,110,97,108,95,53,95,55,52,0),673]]);
          let singleS = 3.0;
          let settingsI = String.fromCharCode(114,101,109,105,110,100,95,54,95,56,53,0);
          let robotoT = 2.0;
         specV = [rankY.length];
         rankY = `${3 - settingsI.length}`;
         untickf.set(`${robotoT}`, 3 | settingsI.length);
         singleS /= Math.max(2 * untickf.size, 1);
         robotoT *= parseInt(`${robotoT}`) << (Math.min(4, Math.abs(2)));
      }
       let showY: Map<any, any> = new Map([[String.fromCharCode(99,95,53,54,95,115,117,98,98,108,111,99,107,0),true ], [String.fromCharCode(97,100,97,112,116,101,114,115,95,54,95,51,55,0),true ]]);
       let plashS: Map<any, any> = new Map([[String.fromCharCode(119,95,51,53,95,121,117,118,110,118,99,0),833], [String.fromCharCode(102,95,56,49,95,115,101,113,117,101,110,99,101,114,0),835]]);
         showY = new Map([[`${plashS.size}`, specV.length % 1]]);
      rewindI = `${link2.length >> (Math.min(5, Math.abs(parseInt(`${launcherm}`))))}`;
      if (mbsplasha) {
         break;
      }
   } while (mbsplasha && ((rewindI.length / (Math.max(8, sendr))) < 3));
   for (let y = 0; y < 1; y++) {
       let servicev = 0.0;
      let acceptedn = servicev >= 5659546.0;
      do {
          let strF = 4.0;
          let share_ = String.fromCharCode(112,97,105,110,116,115,95,111,95,49,54,0);
          let default_ljw = String.fromCharCode(112,108,97,121,105,110,103,95,51,95,52,55,0);
         servicev += parseFloat(`${default_ljw.length ^ 1}`);
         strF *= parseInt(`${strF}`) + 1;
         share_ += `${3 | parseInt(`${strF}`)}`;
         default_ljw = "1";
         if (acceptedn) {
            break;
         }
      } while ((3.6 < servicev) && acceptedn);
         servicev -= parseFloat(`${parseInt(`${servicev}`)}`);
         servicev /= Math.max(1, parseFloat(`${parseInt(`${servicev}`)}`));
      sendr += parseInt(`${servicev}`) / (Math.max(3, 6));
   }
      fieldL = `${link2.length}`;
       let umengL = 0.0;
         umengL *= parseFloat(`${3 * parseInt(`${umengL}`)}`);
          let predictionU = true;
          let reactnativejs6 = true;
         umengL -= (parseFloat(`${(reactnativejs6 ? 5 : 2) / 2}`));
      for (let d = 0; d < 1; d++) {
          let phonet = String.fromCharCode(103,95,52,54,95,98,114,97,110,100,0);
          let manifestF = 4.0;
          let splashD: Map<any, any> = new Map([[String.fromCharCode(119,95,55,49,95,104,101,97,114,98,101,97,116,0),String.fromCharCode(112,95,51,49,95,108,97,103,97,114,105,116,104,114,97,99,0)], [String.fromCharCode(99,104,117,110,107,115,95,52,95,54,51,0),String.fromCharCode(98,95,50,51,95,112,108,97,121,0)]]);
         umengL *= parseFloat(`${parseInt(`${umengL}`)}`);
         phonet += `${parseInt(`${manifestF}`)}`;
         manifestF += splashD.size;
         splashD.set(phonet, 2);
      }
      orientationS += `${parseInt(`${umengL}`) ^ parseInt(`${launcherm}`)}`;
      sendr %= Math.max(link2.length % (Math.max(2, sendr)), 1);

    if (offline) {

   let clockU = rules7 >= 7516655.0;
   do {
       let statisticsR = String.fromCharCode(110,95,56,49,95,115,117,99,99,101,101,100,101,100,0);
          let kuaishouN = String.fromCharCode(112,114,101,99,97,108,99,95,107,95,57,48,0);
          let trophyk: Array<any> = [930, 418, 715];
         statisticsR = `${1 - trophyk.length}`;
         kuaishouN += `${kuaishouN.length & 2}`;
         trophyk.push(kuaishouN.length | 1);
      let middleM = statisticsR.length <= 9257950;
      do {
         statisticsR += `${statisticsR.length | statisticsR.length}`;
         if (middleM) {
            break;
         }
      } while (middleM && (statisticsR.length < 4));
          let bingW = String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,95,54,95,55,54,0);
         statisticsR = `${statisticsR.length}`;
         bingW += `${3 + bingW.length}`;
      rules7 /= Math.max(3, parseFloat(`${3 % (Math.max(7, rewindI.length))}`));
      if (clockU) {
         break;
      }
   } while (clockU && (rules7 > 3.31));
      zooma += `${orientationS.length}`;
   while (3 == (parseInt(`${launcherm}`) + 4) && 3.58 == (launcherm + 1.81)) {
      launcherm -= parseFloat(`${2 >> (Math.min(1, orientationE.length))}`);
      break;
   }
   while ((3.89 * rules7) == 5.88 && (sendr + 4) == 5) {
      sendr &= parseInt(`${rules7}`) << (Math.min(1, Math.abs(sendr)));
      break;
   }
   while ((3.49 + reactnativejsi) == 3.29) {
      reactnativejsi /= Math.max(parseFloat(`${1 | zooma.length}`), 2);
      break;
   }
      fieldL += `${fieldL.length}`;
      setDismountPlayer(false); 
    }
    
  };
  
  

  
  
  
  

  
  
  
  
  
  
  

  
  
  
  
  
  
  
  //   return () => clearInterval(interval)
  

  useEffect(() => {
    if (vod) {
      setInitTime(vod?.timeWatched);
      setReadyPlay(false);

      

      
      tt_humidity_guide.playsViewsAnalytics({
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
      ttConfirmationChinasame.getDetail(
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
       let commentf = String.fromCharCode(105,95,49,50,95,113,117,111,116,101,100,0);
    let reducerk: Map<any, any> = new Map([[String.fromCharCode(113,122,98,105,110,95,114,95,52,53,0),386], [String.fromCharCode(105,110,112,117,116,95,117,95,49,54,0),728]]);
    let flyerJ = String.fromCharCode(101,110,99,114,121,112,116,105,111,110,95,55,95,53,51,0);
    let forwarde = 5.0;
    let policyz = String.fromCharCode(121,95,55,49,95,114,116,115,112,0);
    let actionsc = 3.0;
    let yingF: Array<any> = [882, 362];
    let uploadw = String.fromCharCode(105,110,118,95,99,95,57,51,0);
    let logoutz = String.fromCharCode(109,97,112,112,97,98,108,101,95,100,95,52,51,0);
    let datav = false;
   while (!uploadw.endsWith(`${yingF.length}`)) {
      uploadw = `${(commentf == String.fromCharCode(70,0) ? parseInt(`${actionsc}`) : commentf.length)}`;
      break;
   }
      policyz += `${1 / (Math.max(6, yingF.length))}`;
   for (let z = 0; z < 1; z++) {
      reducerk = new Map([[policyz, 3]]);
   }
   for (let r = 0; r < 1; r++) {
      actionsc /= Math.max(reducerk.size, 2);
   }
   if ((1 | uploadw.length) > 5) {
      uploadw = `${2 - commentf.length}`;
   }

    const promise = async () => downloadedVod?.vod;

   for (let b = 0; b < 3; b++) {
      yingF = [(String.fromCharCode(102,0) == uploadw ? uploadw.length : policyz.length)];
   }
      forwarde -= parseFloat(`${reducerk.size}`);
   while (5 >= (2 & yingF.length) && (logoutz.length & yingF.length) >= 2) {
      yingF.push(policyz.length);
      break;
   }
   for (let o = 0; o < 2; o++) {
      yingF = [(uploadw == String.fromCharCode(78,0) ? uploadw.length : parseInt(`${actionsc}`))];
   }
   for (let i = 0; i < 1; i++) {
      policyz += `${policyz.length / 2}`;
   }
    if (isOffline) {

   let traminif = 9401058 <= reducerk.size;
   do {
      reducerk = new Map([[`${reducerk.size}`, reducerk.size]]);
      if (traminif) {
         break;
      }
   } while ((2 > (commentf.length + reducerk.size) && (reducerk.size + 2) > 1) && traminif);
      flyerJ += `${parseInt(`${actionsc}`) % 3}`;
   let championd = actionsc >= 7162471.0;
   do {
      actionsc -= uploadw.length | reducerk.size;
      if (championd) {
         break;
      }
   } while (championd && ((3 >> (Math.min(1, yingF.length))) > 4 || 1.60 > (1.98 * actionsc)));
      yingF.push(3);
      logoutz = `${uploadw.length}`;
      console.debug("is offline");

      reducerk.set(commentf, commentf.length ^ 1);
   let dragq = policyz == String.fromCharCode(119,102,107,112,97,55,0);
   do {
       let xvodI = 0.0;
       let configurew = String.fromCharCode(100,105,114,110,97,109,101,95,106,95,53,49,0);
         xvodI *= parseFloat(`${configurew.length / (Math.max(5, parseInt(`${xvodI}`)))}`);
         configurew += `${configurew.length}`;
         xvodI *= parseFloat(`${3 << (Math.min(4, configurew.length))}`);
      let score3 = configurew.length <= 6966149;
      do {
          let home5 = String.fromCharCode(115,112,97,99,101,115,95,49,95,54,0);
          let dragy = 4.0;
          let injury4 = 1.0;
          let core8 = String.fromCharCode(106,95,55,54,95,115,104,105,109,0);
          let projectM = 4;
         configurew = `${1 % (Math.max(1, home5.length))}`;
         home5 = `${2 & parseInt(`${injury4}`)}`;
         dragy *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${dragy}`)), 2))}`);
         injury4 /= Math.max(2, parseInt(`${dragy}`));
         core8 = `${(String.fromCharCode(85,0) == core8 ? projectM : core8.length)}`;
         projectM &= (core8 == String.fromCharCode(98,0) ? core8.length : parseInt(`${injury4}`));
         if (score3) {
            break;
         }
      } while (score3 && ((configurew.length * 3) == 2 || (xvodI / 2.56) == 2.29));
         xvodI -= parseFloat(`${configurew.length}`);
          let zhengpianM = true;
         configurew += `${parseInt(`${xvodI}`)}`;
         zhengpianM = (!zhengpianM ? zhengpianM : zhengpianM);
      policyz = `${parseInt(`${xvodI}`)}`;
      if (dragq) {
         break;
      }
   } while (dragq && (4 > (parseInt(`${actionsc}`) * policyz.length)));
      uploadw += `${(flyerJ == String.fromCharCode(54,0) ? flyerJ.length : commentf.length)}`;
      logoutz = `${3 >> (Math.min(4, logoutz.length))}`;
       let championc: Array<any> = [491, 30, 550];
       let searchbarJ = String.fromCharCode(118,112,100,115,112,95,54,95,52,56,0);
         searchbarJ = `${searchbarJ.length}`;
      if (1 < searchbarJ.length) {
          let roboto_ = String.fromCharCode(100,95,56,95,105,110,99,108,117,115,105,111,110,0);
          let paginationY = String.fromCharCode(109,95,54,56,95,115,104,111,119,0);
         searchbarJ = `${roboto_.length}`;
         roboto_ += `${1 | paginationY.length}`;
         paginationY += `${paginationY.length % (Math.max(paginationY.length, 9))}`;
      }
      for (let y = 0; y < 2; y++) {
          let questU: Map<any, any> = new Map([[String.fromCharCode(118,95,51,57,95,115,105,98,108,105,110,103,0),553], [String.fromCharCode(99,117,114,108,121,95,98,95,52,49,0),51], [String.fromCharCode(97,95,49,55,95,100,105,102,102,101,114,101,110,116,0),18]]);
          let chinasame4: Map<any, any> = new Map([[String.fromCharCode(102,95,53,56,95,100,101,115,105,103,110,0),930], [String.fromCharCode(112,95,57,48,95,114,101,99,111,118,101,114,97,98,108,101,0),155], [String.fromCharCode(108,95,54,53,95,104,97,110,103,117,112,0),731]]);
         championc.push(searchbarJ.length / (Math.max(1, 8)));
         questU = new Map([[`${questU.size}`, questU.size]]);
         chinasame4 = new Map([[`${chinasame4.size}`, 1 / (Math.max(7, chinasame4.size))]]);
      }
         championc.push(championc.length + searchbarJ.length);
      for (let i = 0; i < 2; i++) {
          let commonK = String.fromCharCode(103,114,97,112,104,99,121,99,108,101,115,95,120,95,55,57,0);
          let resendJ = 0.0;
          let leagueC: Array<any> = [121, 553];
         searchbarJ += `${commonK.length}`;
         commonK = `${leagueC.length * 2}`;
         resendJ += leagueC.length / (Math.max(1, 1));
      }
      while (5 <= (searchbarJ.length >> (Math.min(5, championc.length))) && 5 <= (searchbarJ.length >> (Math.min(4, championc.length)))) {
         searchbarJ += "2";
         break;
      }
      yingF.push(championc.length + searchbarJ.length);
      return promise();
    } else {

       let corner9 = 4.0;
       let sentry3 = String.fromCharCode(117,95,55,95,102,114,97,109,101,115,105,122,101,0);
       let plus1 = String.fromCharCode(110,117,109,101,114,97,108,115,95,104,95,57,55,0);
      if ((corner9 / 4.56) < 3.96) {
          let mbridgeO = String.fromCharCode(115,95,53,52,95,112,114,111,116,111,99,111,108,115,0);
         plus1 = `${mbridgeO.length}`;
      }
      while (5 >= (parseInt(`${corner9}`) / 1) || (sentry3.length ^ 1) >= 4) {
         sentry3 = `${parseInt(`${corner9}`) * 3}`;
         break;
      }
       let configureY = true;
       let stringsx = false;
      for (let p = 0; p < 1; p++) {
         corner9 += 1 - plus1.length;
      }
         stringsx = corner9 <= 11.50;
          let chartV = String.fromCharCode(121,95,57,54,95,112,101,117,107,101,114,0);
         plus1 = "3";
         chartV = `${chartV.length}`;
         sentry3 += `${3 & parseInt(`${corner9}`)}`;
         corner9 -= 1 >> (Math.min(3, sentry3.length));
      if (4.20 < (corner9 * 3.13)) {
         sentry3 = `${sentry3.length ^ 3}`;
      }
      actionsc += sentry3.length + parseInt(`${corner9}`);
   if (4 > (uploadw.length >> (Math.min(Math.abs(1), 4)))) {
      reducerk = new Map([[logoutz, parseInt(`${forwarde}`)]]);
   }
   if (5 == reducerk.size) {
       let loadingX = String.fromCharCode(120,95,51,56,95,114,101,113,117,105,114,101,109,101,110,116,115,0);
       let component3 = String.fromCharCode(97,95,57,50,0);
       let readM = String.fromCharCode(99,111,110,115,116,114,97,105,110,116,115,95,54,95,55,54,0);
       let modity6 = true;
       let stylesf: Map<any, any> = new Map([[String.fromCharCode(100,95,57,57,95,102,105,110,116,0),199], [String.fromCharCode(111,95,56,57,95,99,111,108,108,101,99,116,105,98,108,101,115,0),238], [String.fromCharCode(101,120,108,117,100,101,100,95,107,95,56,48,0),529]]);
          let baiduN: Map<any, any> = new Map([[String.fromCharCode(115,95,49,53,95,112,97,103,101,110,111,0),575], [String.fromCharCode(105,109,112,111,114,116,101,100,95,107,95,54,51,0),785], [String.fromCharCode(121,95,49,54,95,102,97,116,97,108,0),162]]);
          let bridge6 = String.fromCharCode(101,110,116,114,121,95,116,95,57,0);
         readM = `${2 ^ stylesf.size}`;
         baiduN.set(`${bridge6}`, (String.fromCharCode(75,0) == bridge6 ? baiduN.size : bridge6.length));
         modity6 = null != stylesf.get(`${modity6}`);
          let helperT = String.fromCharCode(114,110,103,95,112,95,55,57,0);
         component3 = "2";
         helperT += `${helperT.length % 1}`;
      while (5 >= (readM.length & 4) || 4 >= (stylesf.size & readM.length)) {
         readM += `${(component3 == String.fromCharCode(98,0) ? readM.length : component3.length)}`;
         break;
      }
         loadingX = `${1 * stylesf.size}`;
      for (let z = 0; z < 2; z++) {
         modity6 = component3.length == readM.length;
      }
       let dragj = String.fromCharCode(110,95,55,95,99,97,112,97,98,108,101,0);
      for (let r = 0; r < 1; r++) {
         readM += `${3 / (Math.max(7, stylesf.size))}`;
      }
         dragj = `${(1 / (Math.max(5, (modity6 ? 3 : 3))))}`;
          let hooksZ = true;
         loadingX += `${readM.length | component3.length}`;
         hooksZ = (!hooksZ ? hooksZ : !hooksZ);
      let country4 = String.fromCharCode(55,49,50,117,0) == component3;
      do {
          let linkw: Map<any, any> = new Map([[String.fromCharCode(112,101,114,102,111,114,109,101,100,95,122,95,52,50,0),196], [String.fromCharCode(121,95,52,53,95,115,117,98,120,0),952]]);
          let bannerj = 5.0;
          let uploadA: Map<any, any> = new Map([[String.fromCharCode(114,101,112,95,110,95,51,52,0),596], [String.fromCharCode(106,95,53,56,95,100,105,99,116,105,111,110,97,114,105,101,115,0),904]]);
          let handlert = 0.0;
          let prediction9 = 1.0;
         component3 = `${dragj.length & parseInt(`${bannerj}`)}`;
         linkw.set(`${prediction9}`, parseInt(`${prediction9}`));
         bannerj -= parseInt(`${handlert}`);
         uploadA = new Map([[`${linkw.size}`, 3]]);
         handlert *= parseInt(`${prediction9}`);
         if (country4) {
            break;
         }
      } while (country4 && (readM != String.fromCharCode(52,0)));
       let circleW: Map<any, any> = new Map([[String.fromCharCode(119,95,54,52,95,117,110,116,105,108,0),String.fromCharCode(97,118,100,101,118,105,99,101,95,105,95,52,48,0)], [String.fromCharCode(97,112,112,108,105,101,100,95,53,95,56,55,0),String.fromCharCode(101,95,55,55,95,105,110,118,105,116,101,115,0)]]);
       let filed5: Map<any, any> = new Map([[String.fromCharCode(105,95,50,54,95,103,108,111,98,97,108,108,121,0),768], [String.fromCharCode(101,120,112,108,105,99,105,116,95,122,95,57,55,0),31]]);
         readM = `${component3.length}`;
      while (!loadingX.endsWith(component3)) {
         loadingX += `${3 & loadingX.length}`;
         break;
      }
         dragj = `${stylesf.size}`;
      commentf += `${readM.length}`;
   }
   let dropdownE = String.fromCharCode(106,107,49,0) == uploadw;
   do {
      uploadw += `${1 + parseInt(`${forwarde}`)}`;
      if (dropdownE) {
         break;
      }
   } while ((uploadw.startsWith(`${reducerk.size}`)) && dropdownE);
      commentf += `${uploadw.length ^ logoutz.length}`;
      console.debug("not offline");

       let vignetteI = String.fromCharCode(101,95,57,56,95,97,116,116,114,115,0);
       let b_lockm = String.fromCharCode(99,97,100,101,110,99,101,95,97,95,57,54,0);
      let half3 = String.fromCharCode(121,51,121,120,118,122,110,119,0) == vignetteI;
      do {
         vignetteI += `${b_lockm.length & vignetteI.length}`;
         if (half3) {
            break;
         }
      } while (half3 && (5 > vignetteI.length));
      if (b_lockm != String.fromCharCode(86,0)) {
         vignetteI += "2";
      }
          let stylesD = 0.0;
          let whistle8 = true;
         b_lockm = `${vignetteI.length}`;
         stylesD -= parseInt(`${stylesD}`) & 2;
         whistle8 = stylesD == 21.45;
         b_lockm += `${b_lockm.length | 1}`;
      let penaltyF = String.fromCharCode(105,56,113,112,121,116,98,97,107,0) == b_lockm;
      do {
         b_lockm += "1";
         if (penaltyF) {
            break;
         }
      } while ((b_lockm.length == 4) && penaltyF);
         b_lockm += "1";
      logoutz = "1";
       let questK = String.fromCharCode(118,114,108,101,95,108,95,55,49,0);
       let redirectt = 1.0;
       let chinasameu = String.fromCharCode(114,95,51,51,95,117,110,109,117,116,101,0);
         questK += `${(String.fromCharCode(51,0) == chinasameu ? chinasameu.length : parseInt(`${redirectt}`))}`;
      for (let f = 0; f < 3; f++) {
         redirectt *= parseInt(`${redirectt}`) << (Math.min(questK.length, 5));
      }
      if (3 < (questK.length % 3) && 3 < (parseInt(`${redirectt}`) + questK.length)) {
         questK = `${chinasameu.length}`;
      }
      if ((4.80 / (Math.max(4, redirectt))) > 5.94) {
         chinasameu = `${chinasameu.length}`;
      }
         redirectt -= questK.length & 2;
      while (4.81 > redirectt) {
         redirectt += 1 / (Math.max(8, questK.length));
         break;
      }
       let j_managerc = String.fromCharCode(104,105,103,104,101,114,95,49,95,50,51,0);
       let combinedT = String.fromCharCode(107,95,55,54,95,115,116,114,114,101,115,101,116,0);
         redirectt *= combinedT.length;
      while ((chinasameu.length * parseInt(`${redirectt}`)) <= 5 || (chinasameu.length * parseInt(`${redirectt}`)) <= 5) {
         redirectt *= 3 / (Math.max(2, j_managerc.length));
         break;
      }
      commentf += `${1 % (Math.max(5, reducerk.size))}`;
   for (let x = 0; x < 2; x++) {
       let calendarL: Map<any, any> = new Map([[String.fromCharCode(100,101,99,105,109,97,108,115,95,111,95,56,57,0),false ], [String.fromCharCode(106,95,50,48,95,97,114,101,115,0),true ], [String.fromCharCode(114,116,112,115,101,110,100,101,114,95,111,95,55,57,0),false ]]);
       let albumS = String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,95,55,95,51,55,0);
       let shoot4: Map<any, any> = new Map([[String.fromCharCode(101,95,49,51,95,103,97,117,115,115,105,97,110,105,105,114,100,0),510], [String.fromCharCode(112,114,111,112,95,112,95,55,50,0),726]]);
         shoot4.set(`${albumS}`, 3 * albumS.length);
         shoot4 = new Map([[`${calendarL.size}`, 2 / (Math.max(5, albumS.length))]]);
      let sigmobV = calendarL.size >= 6103799;
      do {
         calendarL.set(`${albumS}`, albumS.length);
         if (sigmobV) {
            break;
         }
      } while (sigmobV && (1 >= (albumS.length >> (Math.min(1, Math.abs(calendarL.size)))) && 1 >= (albumS.length >> (Math.min(Math.abs(1), 4)))));
      let updatesz = 6108019 <= albumS.length;
      do {
         albumS = `${albumS.length}`;
         if (updatesz) {
            break;
         }
      } while (((3 * calendarL.size) == 4 || 3 == (calendarL.size * albumS.length)) && updatesz);
          let countryO = 5.0;
         albumS += `${(String.fromCharCode(56,0) == albumS ? calendarL.size : albumS.length)}`;
         countryO += parseInt(`${countryO}`);
      while (albumS.endsWith(`${shoot4.size}`)) {
         shoot4.set(`${albumS}`, (albumS == String.fromCharCode(80,0) ? albumS.length : shoot4.size));
         break;
      }
          let untickz = 3.0;
         albumS = `${calendarL.size * albumS.length}`;
         untickz /= Math.max(parseFloat(`${2}`), 3);
      let xvod0 = 8987897 >= calendarL.size;
      do {
         calendarL.set(`${albumS}`, 2);
         if (xvod0) {
            break;
         }
      } while ((1 <= (5 * calendarL.size)) && xvod0);
       let l_managerf: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,98,111,111,107,115,95,56,95,53,0),true ], [String.fromCharCode(116,101,109,112,95,48,95,57,51,0),true ], [String.fromCharCode(122,95,53,55,95,97,100,100,105,110,103,0),false ]]);
       let pathr: Map<any, any> = new Map([[String.fromCharCode(104,95,53,50,95,114,101,97,115,111,110,115,0),639], [String.fromCharCode(101,97,103,97,105,110,95,108,95,54,48,0),876]]);
      policyz = `${commentf.length ^ yingF.length}`;
   }
   let shrink_ = yingF.length >= 6822490;
   do {
      yingF = [(3 * (datav ? 1 : 2))];
      if (shrink_) {
         break;
      }
   } while (shrink_ && (!datav));
   for (let d = 0; d < 3; d++) {
      actionsc += reducerk.size >> (Math.min(commentf.length, 1));
   }
      return fetchVodDetails();
    }
  };

  const { data: vodDetails, isFetching: isFetchingVodDetails } = useQuery({
    queryKey: ["vodDetails", vod?.vod_id, isOffline],
    queryFn: () => handleFetchVodDetail(),
  });

  const fetchBannerAd = async () => {
       let room5 = 1;
    let sportB = 0;
    let moviesH: Array<any> = [882, 420, 459];
    let j_center1 = String.fromCharCode(105,115,119,114,105,116,101,97,98,108,101,95,112,95,57,56,0);
    let forwardl = true;
    let nativeex8 = String.fromCharCode(101,95,57,95,117,97,110,0);
    let tickF = String.fromCharCode(105,95,52,51,95,99,97,110,99,101,108,97,116,105,111,110,0);
    let pingV = 3;
    let dropdownj = 5.0;
    let saveK = true;
    let renewS = 0;
    let serviceo = String.fromCharCode(99,116,105,118,105,116,121,95,109,95,55,56,0);
    let teamN = 2.0;
    let ewardedb = 3.0;
    let analytic5: Map<any, any> = new Map([[String.fromCharCode(109,110,101,109,111,110,105,99,95,102,95,51,53,0),885], [String.fromCharCode(115,121,110,99,104,114,111,110,105,115,101,100,95,119,95,51,51,0),825], [String.fromCharCode(108,95,52,48,95,115,101,108,102,0),282]]);
    let thumbnailZ = String.fromCharCode(114,111,111,116,95,107,95,55,52,0);
    let lessQ = String.fromCharCode(106,102,105,101,108,100,115,95,121,95,55,0);
    let malaysiaT: Map<any, any> = new Map([[String.fromCharCode(102,95,51,52,95,109,97,110,97,103,101,97,98,108,101,0),String.fromCharCode(118,95,56,95,99,108,105,99,107,115,0)], [String.fromCharCode(118,95,54,52,95,106,100,104,117,102,102,0),String.fromCharCode(122,95,52,49,95,111,117,116,108,105,110,107,0)]]);
   if (pingV <= 1) {
      pingV <<= Math.min(1, j_center1.length);
   }
   while ((5 + renewS) <= 2 && (nativeex8.length + renewS) <= 5) {
      renewS %= Math.max(renewS / (Math.max(sportB, 7)), 4);
      break;
   }
       let mutedM = true;
       let connectionq = String.fromCharCode(116,99,102,105,108,101,95,111,95,57,53,0);
       let flipperh: Map<any, any> = new Map([[String.fromCharCode(103,105,102,95,112,95,51,0),570], [String.fromCharCode(114,95,51,53,95,105,110,116,114,97,120,0),799], [String.fromCharCode(99,111,108,111,117,114,95,49,95,51,51,0),975]]);
         flipperh = new Map([[connectionq, 2]]);
         mutedM = connectionq.includes(`${mutedM}`);
          let matchN = String.fromCharCode(115,104,117,116,116,101,114,95,109,95,53,49,0);
         mutedM = (((mutedM ? 71 : connectionq.length) ^ connectionq.length) == 71);
         matchN += "2";
         connectionq += `${((mutedM ? 2 : 3))}`;
      for (let v = 0; v < 1; v++) {
         connectionq += `${connectionq.length ^ 1}`;
      }
      while (flipperh.size >= 4) {
         mutedM = connectionq.length >= 86;
         break;
      }
          let twitterI = 1.0;
         connectionq += `${parseInt(`${twitterI}`)}`;
      if (3 == connectionq.length) {
          let tick8 = 0.0;
          let calendar7 = String.fromCharCode(99,108,97,105,109,95,107,95,56,57,0);
          let otherl: Map<any, any> = new Map([[String.fromCharCode(115,101,99,116,111,114,95,100,95,57,52,0),908], [String.fromCharCode(98,101,110,99,104,109,97,114,107,95,111,95,56,56,0),781], [String.fromCharCode(115,101,114,118,101,114,95,109,95,51,0),794]]);
          let description_49 = String.fromCharCode(112,95,51,57,95,105,102,97,99,116,111,114,0);
         connectionq += `${flipperh.size & 2}`;
         tick8 += (parseFloat(`${calendar7 == String.fromCharCode(83,0) ? otherl.size : calendar7.length}`));
         otherl.set(description_49, otherl.size);
         description_49 += `${calendar7.length | 2}`;
      }
         connectionq = `${(String.fromCharCode(80,0) == connectionq ? (mutedM ? 4 : 1) : connectionq.length)}`;
      serviceo = "1";
   let halfl = forwardl ? !forwardl : forwardl;
   do {
      forwardl = j_center1 == String.fromCharCode(118,0) || moviesH.length > 52;
      if (halfl) {
         break;
      }
   } while ((forwardl && !saveK) && halfl);
      dropdownj /= Math.max(parseFloat(`${nativeex8.length}`), 4);
      renewS += renewS - 3;

    const bannerRes = await ttDropdown.getBannerAd(adultMode ? 113 : 112);
    const banner = bannerRes.ads;

      pingV *= 2;
      teamN -= (renewS | (forwardl ? 5 : 2));
      nativeex8 += `${moviesH.length}`;
   for (let k = 0; k < 2; k++) {
      sportB |= tickF.length / (Math.max(3, 4));
   }
   if (pingV < tickF.length) {
      pingV <<= Math.min(5, Math.abs(2));
   }
   if (3 >= (2 & sportB) && 2 >= sportB) {
       let firebaseb = String.fromCharCode(99,117,114,114,114,101,110,116,95,120,95,57,50,0);
       let launchP = 2.0;
       let inviteO = true;
      for (let s = 0; s < 1; s++) {
         launchP *= 3;
      }
       let verticalf = 5.0;
       let rewindQ = 2.0;
         inviteO = 82.37 > (verticalf * rewindQ);
      while (5.20 > (5.68 + rewindQ) || 5.3 > (rewindQ + 5.68)) {
         rewindQ += parseInt(`${verticalf}`) | 3;
         break;
      }
      while ((verticalf * rewindQ) > 2.51) {
         rewindQ += 1 - parseInt(`${launchP}`);
         break;
      }
      for (let q = 0; q < 1; q++) {
         firebaseb = `${(parseInt(`${verticalf}`) | (inviteO ? 3 : 2))}`;
      }
          let pluss = String.fromCharCode(114,101,110,100,101,114,101,114,95,57,95,51,53,0);
          let serviceL = String.fromCharCode(105,95,56,49,95,120,112,111,114,116,101,100,0);
         launchP -= firebaseb.length / 1;
         pluss += `${serviceL.length / (Math.max(pluss.length, 8))}`;
         serviceL = `${pluss.length}`;
      for (let e = 0; e < 1; e++) {
          let gradlez = String.fromCharCode(104,95,49,52,95,115,100,112,0);
         verticalf *= ((inviteO ? 1 : 3));
         gradlez += `${gradlez.length - 2}`;
      }
      while (1.29 == rewindQ) {
          let anythinkR = String.fromCharCode(102,108,97,103,115,95,53,95,56,55,0);
         launchP += parseInt(`${rewindQ}`) / (Math.max(anythinkR.length, 10));
         break;
      }
      saveK = 32 > sportB;
   }

    if (banner) {

      tickF += `${nativeex8.length}`;
       let mutedp: Map<any, any> = new Map([[String.fromCharCode(110,95,49,55,95,116,101,109,112,110,97,109,101,0),968], [String.fromCharCode(115,101,116,116,97,98,108,101,95,48,95,51,50,0),446]]);
       let plashF = true;
       let sentryv = String.fromCharCode(109,101,109,95,104,95,51,0);
      let dplusS = plashF ? !plashF : plashF;
      do {
          let specE = 0.0;
          let calendarS = String.fromCharCode(105,95,54,54,95,111,112,101,110,115,115,108,118,0);
         plashF = mutedp.size <= 14;
         specE -= (String.fromCharCode(104,0) == calendarS ? parseInt(`${specE}`) : calendarS.length);
         if (dplusS) {
            break;
         }
      } while ((!sentryv.startsWith(`${plashF}`)) && dplusS);
      if (!plashF) {
         plashF = null == mutedp.get(`${plashF}`);
      }
         plashF = mutedp.size >= sentryv.length;
          let klevinh = 0.0;
          let playX = String.fromCharCode(109,95,50,54,95,115,117,98,100,105,118,105,115,105,111,110,0);
          let basketballG = 3.0;
         plashF = 52 < playX.length;
         klevinh /= Math.max(parseInt(`${basketballG}`), 2);
         playX += `${parseInt(`${basketballG}`) << (Math.min(2, Math.abs(3)))}`;
         plashF = mutedp.size < 55 || sentryv == String.fromCharCode(88,0);
      while (!plashF) {
         plashF = !sentryv.includes(`${plashF}`);
         break;
      }
         plashF = plashF || sentryv.length >= 8;
         sentryv = `${3 * mutedp.size}`;
      while ((sentryv.length / 1) < 2 || (mutedp.size / (Math.max(4, sentryv.length))) < 1) {
         mutedp.set(`${plashF}`, mutedp.size);
         break;
      }
      nativeex8 += "2";
      j_center1 += "1";
   while (5 > (2 | sportB) || (2 - sportB) > 4) {
       let dialogD: Map<any, any> = new Map([[String.fromCharCode(100,115,99,112,95,120,95,53,0),940], [String.fromCharCode(104,95,54,55,95,118,97,114,0),103]]);
      if (2 == (dialogD.size >> (Math.min(Math.abs(5), 5))) || 5 == (dialogD.size >> (Math.min(5, Math.abs(dialogD.size))))) {
         dialogD.set(`${dialogD.size}`, 3);
      }
         dialogD = new Map([[`${dialogD.size}`, dialogD.size]]);
         dialogD = new Map([[`${dialogD.size}`, 2 + dialogD.size]]);
      teamN *= ((saveK ? 3 : 5));
      break;
   }
      teamN += renewS / 1;
      pingV |= (String.fromCharCode(77,0) == tickF ? parseInt(`${dropdownj}`) : tickF.length);
      setBannerAd(banner);
    } else {

   if (4.75 == (teamN * 1.31) && (dropdownj * 1.31) == 5.29) {
       let pathz: Array<any> = [String.fromCharCode(118,95,55,55,95,114,101,115,101,116,117,112,0), String.fromCharCode(107,95,52,50,95,107,101,121,115,112,101,99,0)];
       let mailU: Map<any, any> = new Map([[String.fromCharCode(98,95,55,55,95,101,100,116,115,0),String.fromCharCode(98,111,111,107,107,101,101,112,105,110,103,95,97,95,53,49,0)], [String.fromCharCode(122,95,54,54,95,114,101,113,117,115,116,101,114,0),String.fromCharCode(118,95,55,48,95,118,99,114,101,97,116,101,0)], [String.fromCharCode(109,95,54,51,95,99,100,110,0),String.fromCharCode(119,95,53,53,95,115,104,97,100,101,114,115,0)]]);
       let soundL = String.fromCharCode(97,108,114,101,97,100,121,95,119,95,53,54,0);
       let brightnesso = String.fromCharCode(105,95,50,95,116,101,108,101,103,114,97,109,0);
         soundL = `${pathz.length / (Math.max(2, 9))}`;
         mailU = new Map([[`${mailU.size}`, brightnesso.length]]);
      for (let y = 0; y < 3; y++) {
         soundL = `${mailU.size ^ pathz.length}`;
      }
      for (let s = 0; s < 3; s++) {
          let muted_ = 2.0;
         soundL += `${parseInt(`${muted_}`)}`;
      }
       let handler9 = 5.0;
         handler9 -= 2 ^ parseInt(`${handler9}`);
      let spinner7 = 8571849 >= mailU.size;
      do {
         mailU = new Map([[soundL, 2]]);
         if (spinner7) {
            break;
         }
      } while (spinner7 && ((parseInt(`${handler9}`) - mailU.size) <= 2));
         pathz.push(2 % (Math.max(7, parseInt(`${handler9}`))));
          let bodan9 = false;
          let reactb = String.fromCharCode(100,101,116,97,105,108,101,100,95,98,95,53,55,0);
          let hongkongM = true;
         pathz.push(mailU.size * reactb.length);
         bodan9 = !bodan9 && hongkongM;
         reactb += `${((hongkongM ? 5 : 4))}`;
      while (2 == (brightnesso.length >> (Math.min(Math.abs(2), 3)))) {
         mailU.set(`${pathz.length}`, pathz.length + 2);
         break;
      }
      while (4.37 < (4.65 - handler9) || 3 < (mailU.size / 5)) {
         handler9 /= Math.max(3 & brightnesso.length, 1);
         break;
      }
      for (let n = 0; n < 3; n++) {
         brightnesso += "1";
      }
      teamN *= moviesH.length;
   }
       let rewindV = 3.0;
       let championv = 3.0;
       let pathe = 3;
         championv += pathe + 1;
      while ((2.57 * championv) > 5.21 || 2.57 > (pathe * championv)) {
         championv *= 2;
         break;
      }
          let untickd = true;
          let strd = String.fromCharCode(102,95,52,53,95,115,105,112,104,97,115,104,0);
         championv += ((untickd ? 1 : 4) | parseInt(`${championv}`));
         untickd = strd.length == strd.length;
      let zhuboQ = 7209247.0 <= rewindV;
      do {
         rewindV += parseFloat(`${parseInt(`${championv}`)}`);
         if (zhuboQ) {
            break;
         }
      } while (zhuboQ && ((5.97 - rewindV) < 3.25 || (5.97 - championv) < 5.90));
       let emptyG: Array<any> = [928, 399];
       let gestureL: Array<any> = [330, 611, 724];
         championv /= Math.max(5, parseInt(`${rewindV}`));
       let vignetteH = String.fromCharCode(103,95,56,57,95,115,117,112,112,108,101,109,101,110,116,97,114,121,0);
       let areap = String.fromCharCode(106,95,56,95,117,105,111,109,111,118,101,0);
      let greenk = vignetteH == String.fromCharCode(117,95,122,102,0);
      do {
         vignetteH = `${(areap == String.fromCharCode(82,0) ? emptyG.length : areap.length)}`;
         if (greenk) {
            break;
         }
      } while ((gestureL.length <= 3) && greenk);
       let moviesz = 2.0;
       let googleZ = 1.0;
      renewS >>= Math.min(moviesH.length, 5);
   let teamM = 8221730 <= room5;
   do {
      room5 += 2;
      if (teamM) {
         break;
      }
   } while (teamM && ((5 * room5) < 1));
   while (saveK) {
       let register_u9 = String.fromCharCode(99,97,108,99,117,108,97,116,101,100,95,52,95,56,51,0);
       let time_eA = true;
       let middlep = 1.0;
       let orangeH = String.fromCharCode(111,95,53,49,95,100,111,103,0);
      while (2.69 <= (middlep / 5.8)) {
          let catagoryu: Array<any> = [214, 534];
          let bufferF: Map<any, any> = new Map([[String.fromCharCode(104,101,118,99,112,114,101,100,95,106,95,52,48,0),false ], [String.fromCharCode(102,105,102,111,115,95,112,95,54,48,0),true ], [String.fromCharCode(101,116,105,109,101,95,104,95,55,50,0),false ]]);
          let ncopy_w30 = 3.0;
         middlep /= Math.max(4, parseInt(`${middlep}`) << (Math.min(catagoryu.length, 2)));
         catagoryu.push(bufferF.size);
         bufferF.set(`${ncopy_w30}`, bufferF.size | 3);
         ncopy_w30 *= parseFloat(`${parseInt(`${ncopy_w30}`) ^ 2}`);
         break;
      }
          let hooksD = 3.0;
         middlep /= Math.max(parseInt(`${hooksD}`), 3);
         orangeH = `${3 << (Math.min(2, Math.abs(parseInt(`${middlep}`))))}`;
      let nterstitialW = time_eA ? !time_eA : time_eA;
      do {
         time_eA = register_u9.length <= 33 || time_eA;
         if (nterstitialW) {
            break;
         }
      } while ((3 == register_u9.length && !time_eA) && nterstitialW);
       let chinas = String.fromCharCode(115,101,103,109,97,112,95,101,95,49,54,0);
      if (chinas.length >= 3) {
         chinas += `${1 ^ chinas.length}`;
      }
      for (let c = 0; c < 1; c++) {
          let selectionI = String.fromCharCode(98,97,116,116,101,114,121,95,113,95,49,0);
         orangeH += "2";
         selectionI = `${1 & selectionI.length}`;
      }
         middlep /= Math.max(5, 1);
          let closeI = 4.0;
          let logout6: Array<any> = [618, 565, 428];
         register_u9 += `${2 ^ orangeH.length}`;
         closeI += parseFloat(`${3 | logout6.length}`);
         logout6.push(parseInt(`${closeI}`));
         middlep /= Math.max((orangeH == String.fromCharCode(76,0) ? parseInt(`${middlep}`) : orangeH.length), 2);
         middlep /= Math.max(((time_eA ? 2 : 1) | parseInt(`${middlep}`)), 2);
      while (orangeH != String.fromCharCode(49,0)) {
          let circlem = String.fromCharCode(106,95,48,95,97,110,109,114,0);
          let statsA: Array<any> = [489, 403];
          let linea = 1.0;
          let homeL: Array<any> = [String.fromCharCode(100,105,102,102,101,114,101,110,99,101,115,95,107,95,51,51,0), String.fromCharCode(100,101,112,114,101,99,105,97,116,101,100,104,95,102,95,57,56,0)];
         chinas += `${parseInt(`${middlep}`)}`;
         circlem += `${parseInt(`${linea}`) + statsA.length}`;
         statsA.push(2);
         linea -= 1 / (Math.max(4, homeL.length));
         homeL.push(statsA.length / (Math.max(1, parseInt(`${linea}`))));
         break;
      }
      dropdownj -= parseFloat(`${1}`);
      break;
   }
   let favoritec = saveK ? !saveK : saveK;
   do {
      saveK = !serviceo.includes(`${ewardedb}`);
      if (favoritec) {
         break;
      }
   } while (favoritec && (sportB > 5));
      ewardedb -= 1;
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
       let bellJ = 0.0;
    let list0 = 3.0;
    let containerK = 2.0;
    let manifestw = String.fromCharCode(104,111,117,114,108,121,95,97,95,54,52,0);
    let winds = 2.0;
    let bannerY = 0.0;
    let wind5: Array<any> = [701, 310];
    let lessZ: Array<any> = [550, 173, 603];
      list0 /= Math.max(2, parseFloat(`${manifestw.length}`));
   while (3.8 == (containerK * bellJ)) {
      bellJ *= parseFloat(`${parseInt(`${winds}`)}`);
      break;
   }
      bannerY /= Math.max(parseFloat(`${manifestw.length - wind5.length}`), 4);
      manifestw = "3";
      winds /= Math.max(4, parseFloat(`${3 * parseInt(`${bannerY}`)}`));

    return ttConfirmationChinasame.getList({
      category: vod?.vod_class?.split(",").shift(),
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
    }).then((data) => {

      manifestw += `${parseInt(`${winds}`)}`;
       let viewso: Array<any> = [657, 301];
       let long__x = String.fromCharCode(102,111,117,114,120,95,104,95,54,48,0);
          let firebase1 = 5;
         viewso.push(firebase1 & 2);
      for (let q = 0; q < 2; q++) {
         long__x = `${(long__x == String.fromCharCode(106,0) ? long__x.length : viewso.length)}`;
      }
         viewso = [long__x.length | viewso.length];
      if ((3 % (Math.max(7, long__x.length))) < 3) {
         viewso.push(long__x.length);
      }
      let foreground5 = viewso.length <= 5534776;
      do {
         viewso = [viewso.length];
         if (foreground5) {
            break;
         }
      } while ((long__x.length < 3) && foreground5);
          let filledJ = true;
         viewso = [long__x.length | viewso.length];
         filledJ = !filledJ;
      bannerY -= parseFloat(`${1}`);
   while (5.5 > (containerK + 5.76) || (containerK + 5.76) > 3.10) {
      containerK /= Math.max(5, 1);
      break;
   }
   if (1 <= (wind5.length ^ 3) && 1.12 <= (list0 * 5.71)) {
      wind5.push(parseInt(`${bannerY}`));
   }
   let grayK = 8963408.0 >= winds;
   do {
      winds -= parseFloat(`${parseInt(`${containerK}`) << (Math.min(Math.abs(parseInt(`${bellJ}`)), 5))}`);
      if (grayK) {
         break;
      }
   } while ((3.20 == (3.2 - winds) && 3.2 == (bellJ / (Math.max(winds, 1)))) && grayK);
      return data.List as ttReportInjury[];
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
    ttConfirmationChinasame.getList({

      vod_source_name: vod?.vod_source_name,
      category: vod?.vod_class ? vod?.vod_class : vod?.type_name,
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
      rand: 1,
      xMode: true,
    }).then((data) => data.List as ttCenter[]);

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
       let schedulea = 1;
    let settingsF = 0.0;
    let short_yo = 4;
    let paginationD = 3.0;
    let renewx: Map<any, any> = new Map([[String.fromCharCode(103,111,116,95,114,95,57,48,0),477], [String.fromCharCode(103,117,116,116,101,114,95,103,95,54,56,0),963], [String.fromCharCode(100,95,50,56,95,105,110,112,108,105,99,105,116,101,108,121,0),556]]);
    let sigmobX = 1;
    let bodana = String.fromCharCode(108,105,98,107,118,97,122,97,97,114,95,56,95,50,52,0);
    let styleH = String.fromCharCode(100,101,115,99,101,110,116,95,97,95,57,52,0);
    let favoriteF: Array<any> = [425, 660, 371];
    let save8: Map<any, any> = new Map([[String.fromCharCode(104,95,56,50,95,101,108,108,105,112,115,101,0),String.fromCharCode(119,95,52,49,95,109,111,114,101,0)], [String.fromCharCode(108,111,99,107,99,104,97,105,110,95,113,95,52,0),String.fromCharCode(100,98,115,105,122,101,95,52,95,56,0)], [String.fromCharCode(115,101,99,116,105,110,115,95,110,95,49,55,0),String.fromCharCode(99,101,110,116,101,114,105,110,103,95,122,95,56,57,0)]]);
    let downloadingN = String.fromCharCode(109,105,112,115,100,115,112,95,51,95,51,55,0);
    let referrerm = 5.0;
    let updatesP = 2;
    let main_zt = String.fromCharCode(102,95,56,53,95,110,99,111,110,102,0);
    let userD = 5.0;
   let whistle8 = 9903088 <= short_yo;
   do {
      short_yo |= renewx.size;
      if (whistle8) {
         break;
      }
   } while (whistle8 && (5 == styleH.length));
       let pausen: Array<any> = [String.fromCharCode(119,95,55,55,95,110,105,108,115,0), String.fromCharCode(110,111,99,104,101,99,107,95,107,95,55,56,0)];
         pausen = [pausen.length];
      if ((1 & pausen.length) <= 1) {
         pausen = [pausen.length % (Math.max(pausen.length, 5))];
      }
      for (let s = 0; s < 1; s++) {
          let constantsS = 5.0;
          let verticalB = false;
         pausen.push(2 + pausen.length);
         constantsS -= parseFloat(`${parseInt(`${constantsS}`) * 3}`);
         verticalB = 1.90 == (constantsS / (Math.max(constantsS, 1)));
      }
      sigmobX |= 3 ^ bodana.length;
   for (let s = 0; s < 2; s++) {
       let taiwan4 = String.fromCharCode(110,95,49,55,95,105,116,97,108,105,97,110,0);
       let faviconG = String.fromCharCode(99,97,114,100,105,110,97,108,105,116,121,95,106,95,52,51,0);
      let targetd = faviconG == String.fromCharCode(49,51,97,118,55,0);
      do {
          let modez: Map<any, any> = new Map([[String.fromCharCode(118,95,54,55,95,116,114,97,110,115,112,111,114,116,0),String.fromCharCode(99,95,57,53,95,112,108,97,99,101,0)], [String.fromCharCode(118,101,114,116,105,99,97,108,95,102,95,55,48,0),String.fromCharCode(97,117,116,111,99,97,112,105,116,97,108,105,122,97,116,105,111,110,95,118,95,49,49,0)], [String.fromCharCode(110,95,55,55,95,101,120,112,111,110,101,110,116,105,97,116,105,111,110,0),String.fromCharCode(107,95,50,57,95,102,105,114,101,98,97,115,101,0)]]);
          let spinnerL: Array<any> = [158, 41, 724];
         faviconG += "3";
         modez.set(`${spinnerL.length}`, spinnerL.length - modez.size);
         if (targetd) {
            break;
         }
      } while (targetd && (1 <= taiwan4.length));
          let interstitial4 = 1;
          let combined1 = String.fromCharCode(112,95,54,55,95,111,102,102,108,105,110,101,0);
          let selectedQ = 2.0;
         faviconG = "1";
         interstitial4 /= Math.max(2, 2);
         combined1 = `${parseInt(`${selectedQ}`)}`;
         selectedQ /= Math.max(interstitial4, 4);
         faviconG = "2";
          let catagoryQ: Array<any> = [982, 22];
          let traminiz = String.fromCharCode(116,101,120,101,108,95,55,95,54,0);
         taiwan4 += `${(String.fromCharCode(55,0) == traminiz ? catagoryQ.length : traminiz.length)}`;
          let paginationl = 5.0;
          let langkeyj = 3.0;
          let searchbarU = String.fromCharCode(100,111,99,107,101,114,95,49,95,55,0);
         faviconG = "2";
         paginationl *= parseFloat(`${parseInt(`${langkeyj}`) << (Math.min(searchbarU.length, 4))}`);
         langkeyj -= parseInt(`${paginationl}`);
         searchbarU += `${1 * searchbarU.length}`;
          let sortn = false;
          let private_9n = 4.0;
          let with_tj: Array<any> = [414, 171, 915];
         taiwan4 += `${3 << (Math.min(4, faviconG.length))}`;
         sortn = with_tj.length < 17;
         private_9n *= parseInt(`${private_9n}`);
         with_tj.push(((sortn ? 5 : 1) << (Math.min(Math.abs(3), 5))));
      short_yo &= bodana.length & 1;
   }
   let other1 = String.fromCharCode(99,98,105,57,116,109,114,110,50,56,0) == styleH;
   do {
      styleH = `${(styleH == String.fromCharCode(111,0) ? styleH.length : short_yo)}`;
      if (other1) {
         break;
      }
   } while ((3 >= (5 / (Math.max(10, favoriteF.length)))) && other1);
   if ((4 - save8.size) == 3 && (save8.size - parseInt(`${settingsF}`)) == 4) {
      save8.set(`${paginationD}`, parseInt(`${paginationD}`));
   }
      schedulea *= 2 % (Math.max(4, sigmobX));
       let utilsO = false;
       let darkc = String.fromCharCode(119,95,57,53,95,105,100,101,116,0);
          let reportD = 5.0;
          let overG = false;
          let viewerv = 2;
         utilsO = reportD > 34.41;
         reportD /= Math.max(viewerv, 3);
         overG = !overG || viewerv < 45;
         utilsO = !utilsO;
         utilsO = darkc.length <= 54;
       let componentm = 3.0;
       let combinedo = 0.0;
          let combinedt = String.fromCharCode(105,95,55,50,95,110,111,104,101,97,100,101,114,0);
          let settingJ = 1;
          let mintegral2 = String.fromCharCode(109,95,49,56,95,109,117,116,101,100,0);
         darkc = `${parseInt(`${combinedo}`)}`;
         combinedt = `${(mintegral2 == String.fromCharCode(107,0) ? settingJ : mintegral2.length)}`;
         settingJ <<= Math.min(Math.abs(3), 5);
         componentm += 2 * parseInt(`${componentm}`);
      short_yo ^= 1;
   let crossk = styleH.length >= 5751415;
   do {
      styleH = `${(String.fromCharCode(103,0) == bodana ? styleH.length : bodana.length)}`;
      if (crossk) {
         break;
      }
   } while (crossk && ((referrerm + 3.98) <= 1.76 || (3.98 + referrerm) <= 3.55));
   while (settingsF == schedulea) {
      schedulea &= schedulea + 1;
      break;
   }

    

   while (styleH.length < 4) {
       let google3: Array<any> = [513, 916];
      if (1 > (google3.length / 1)) {
          let pressurec = String.fromCharCode(121,95,49,56,0);
         google3.push(pressurec.length);
      }
         google3 = [1];
         google3.push(google3.length);
      bodana = `${short_yo / (Math.max(parseInt(`${settingsF}`), 7))}`;
      break;
   }
   if (3.77 < referrerm) {
       let completew = 1;
       let teama = 1;
      let slider1 = completew <= 8977406;
      do {
         completew ^= 1 * completew;
         if (slider1) {
            break;
         }
      } while (slider1 && ((completew % (Math.max(1, 6))) > 1 || 3 > (1 % (Math.max(3, completew)))));
         teama >>= Math.min(2, Math.abs(2));
       let textP = 4;
         textP ^= 3 + textP;
         teama >>= Math.min(2, Math.abs(completew ^ textP));
         textP |= completew;
      referrerm /= Math.max(save8.size, 3);
   }
   if (1.2 < (settingsF - 5.28)) {
       let heartm = 1;
       let commentt = String.fromCharCode(120,95,50,95,109,111,115,116,0);
       let pingV = 5;
       let auto_o4x = true;
       let moonO = 5;
      for (let x = 0; x < 3; x++) {
         auto_o4x = moonO == 92;
      }
      for (let x = 0; x < 2; x++) {
         auto_o4x = (heartm & moonO) > 95;
      }
      while ((pingV * heartm) >= 1) {
         pingV *= ((auto_o4x ? 3 : 1) / (Math.max(2, heartm)));
         break;
      }
         auto_o4x = auto_o4x || pingV <= 94;
         auto_o4x = auto_o4x || moonO < 65;
         pingV &= pingV;
          let gemfilei = false;
          let aboutG = String.fromCharCode(107,95,50,49,95,115,109,107,97,0);
          let loadingo = String.fromCharCode(109,95,53,95,112,97,107,116,0);
         commentt = `${(loadingo.length * (gemfilei ? 1 : 5))}`;
         gemfilei = aboutG.length > 83;
         aboutG = `${aboutG.length}`;
      let dangerd = String.fromCharCode(114,49,49,121,105,49,100,0) == commentt;
      do {
          let guidez = String.fromCharCode(101,112,101,108,95,99,95,49,57,0);
          let nativeu = String.fromCharCode(120,95,51,52,95,112,114,111,99,101,115,115,111,114,0);
          let mathQ: Array<any> = [1, 708, 279];
          let downloadedi = 2.0;
          let catagoryr = String.fromCharCode(120,99,111,100,101,95,51,95,57,53,0);
         commentt += `${2 & pingV}`;
         guidez = `${catagoryr.length % 2}`;
         nativeu += `${catagoryr.length}`;
         mathQ = [nativeu.length];
         downloadedi *= parseFloat(`${mathQ.length << (Math.min(Math.abs(2), 1))}`);
         if (dangerd) {
            break;
         }
      } while (dangerd && (4 == (1 - commentt.length) || 1 == (commentt.length - heartm)));
      if (moonO > 3 && (moonO / (Math.max(3, 10))) > 4) {
         auto_o4x = (5 < ((auto_o4x ? commentt.length : 5) + commentt.length));
      }
         heartm %= Math.max(1, 2 / (Math.max(2, pingV)));
         moonO &= 2 >> (Math.min(5, Math.abs(heartm)));
         pingV >>= Math.min(3, Math.abs(pingV % 2));
      let taiwano = 5056377 <= moonO;
      do {
         moonO &= moonO;
         if (taiwano) {
            break;
         }
      } while ((5 < (pingV + 3) || (3 + moonO) < 1) && taiwano);
      while ((moonO << (Math.min(Math.abs(3), 3))) > 4) {
         auto_o4x = 65 <= commentt.length;
         break;
      }
      while (1 >= (moonO / (Math.max(commentt.length, 5)))) {
          let guideK = String.fromCharCode(121,99,111,99,103,114,103,98,97,95,55,95,50,48,0);
          let episodesK = 3.0;
          let suggestionz = String.fromCharCode(115,116,114,101,116,99,104,97,98,108,101,95,109,95,55,50,0);
          let mbsplashl = String.fromCharCode(117,110,99,111,109,112,114,101,115,115,95,105,95,53,0);
         commentt = `${moonO + 1}`;
         guideK += `${mbsplashl.length}`;
         episodesK += (parseFloat(`${guideK == String.fromCharCode(116,0) ? mbsplashl.length : guideK.length}`));
         suggestionz = `${1 << (Math.min(4, Math.abs(parseInt(`${episodesK}`))))}`;
         break;
      }
      settingsF += 2;
   }
   for (let q = 0; q < 3; q++) {
       let backwardj: Map<any, any> = new Map([[String.fromCharCode(116,95,52,57,95,108,97,117,110,99,104,0),411], [String.fromCharCode(106,95,56,48,95,109,110,99,0),445]]);
       let dark4 = String.fromCharCode(98,97,99,107,116,114,97,99,101,95,98,95,54,56,0);
       let pathg = 3;
       let matchesn = String.fromCharCode(120,95,54,57,95,99,108,97,115,115,105,102,121,0);
         backwardj.set(`${dark4}`, (String.fromCharCode(81,0) == dark4 ? dark4.length : backwardj.size));
      for (let u = 0; u < 3; u++) {
         pathg -= (matchesn == String.fromCharCode(103,0) ? matchesn.length : backwardj.size);
      }
         backwardj.set(`${dark4}`, (dark4 == String.fromCharCode(109,0) ? dark4.length : backwardj.size));
          let pageJ = 5;
          let mbnative_ = String.fromCharCode(99,95,52,51,0);
         dark4 += `${mbnative_.length}`;
         pageJ *= 2;
         mbnative_ += `${pageJ}`;
      for (let z = 0; z < 3; z++) {
         matchesn += `${dark4.length}`;
      }
         dark4 = `${backwardj.size}`;
      if (1 < (matchesn.length - 5)) {
         pathg &= (String.fromCharCode(77,0) == dark4 ? dark4.length : pathg);
      }
         dark4 = `${(String.fromCharCode(95,0) == dark4 ? dark4.length : pathg)}`;
      while (backwardj.get(`${pathg}`) != null) {
         pathg -= backwardj.size + 2;
         break;
      }
      for (let j = 0; j < 2; j++) {
         pathg %= Math.max((dark4 == String.fromCharCode(48,0) ? dark4.length : backwardj.size), 3);
      }
      if ((4 - matchesn.length) == 2 && 4 == (pathg - 4)) {
         pathg ^= matchesn.length | pathg;
      }
         backwardj.set(`${pathg}`, matchesn.length);
      referrerm -= 1 & sigmobX;
   }
      bodana = `${(main_zt == String.fromCharCode(98,0) ? parseInt(`${paginationD}`) : main_zt.length)}`;
      styleH = `${save8.size | updatesP}`;
   if (downloadingN.endsWith(main_zt)) {
       let cornerJ = 1.0;
       let downloadedW = 5.0;
       let fileB = String.fromCharCode(112,95,53,95,98,111,117,110,100,101,100,0);
          let whiteU = String.fromCharCode(112,95,57,54,95,109,101,109,0);
          let moduleT: Map<any, any> = new Map([[String.fromCharCode(116,95,53,54,95,101,110,99,111,100,97,98,108,101,0),543], [String.fromCharCode(99,95,49,54,95,114,101,112,111,115,105,116,105,111,110,0),237]]);
         downloadedW *= moduleT.size;
         whiteU += `${whiteU.length}`;
         moduleT.set(whiteU, (String.fromCharCode(103,0) == whiteU ? whiteU.length : whiteU.length));
      if (downloadedW > 5.98) {
         fileB = `${1 * parseInt(`${cornerJ}`)}`;
      }
         downloadedW *= parseInt(`${downloadedW}`);
         downloadedW /= Math.max(1, 2);
      let internetX = 9891512 <= fileB.length;
      do {
         fileB = `${parseInt(`${downloadedW}`) + fileB.length}`;
         if (internetX) {
            break;
         }
      } while (internetX && (2 == (3 % (Math.max(10, fileB.length))) || (3 / (Math.max(4, fileB.length))) == 3));
         fileB = `${parseInt(`${cornerJ}`) % (Math.max(3, 4))}`;
         downloadedW *= 3 & parseInt(`${cornerJ}`);
         downloadedW *= parseInt(`${cornerJ}`);
      while (2.94 == (cornerJ / (Math.max(downloadedW, 2))) || 2.94 == (cornerJ / (Math.max(5, downloadedW)))) {
          let handlerW = String.fromCharCode(105,95,50,52,95,99,116,114,0);
          let eighteen5 = 3.0;
          let cornerd = String.fromCharCode(102,114,105,99,116,105,111,110,95,116,95,57,50,0);
          let sportsV = 2.0;
         downloadedW *= parseInt(`${eighteen5}`) << (Math.min(handlerW.length, 5));
         handlerW = `${cornerd.length % (Math.max(6, parseInt(`${sportsV}`)))}`;
         eighteen5 += parseFloat(`${parseInt(`${sportsV}`) >> (Math.min(cornerd.length, 4))}`);
         break;
      }
      main_zt += `${parseInt(`${settingsF}`)}`;
   }
       let countdownX = 5.0;
       let commonC = 2;
         countdownX += commonC;
      while (commonC >= 5) {
         countdownX += 3;
         break;
      }
         countdownX *= commonC;
       let file6 = String.fromCharCode(114,101,112,115,116,114,95,119,95,51,50,0);
       let mbbannerd = String.fromCharCode(117,110,109,97,114,107,95,121,95,52,49,0);
         commonC &= mbbannerd.length & commonC;
       let backward0 = 1.0;
       let league3 = 4.0;
      bodana += "1";
      paginationD -= (parseFloat(`${main_zt == String.fromCharCode(110,0) ? main_zt.length : save8.size}`));
    await refetch();

   for (let q = 0; q < 2; q++) {
      save8 = new Map([[`${renewx.size}`, (String.fromCharCode(87,0) == bodana ? bodana.length : renewx.size)]]);
   }
      schedulea *= sigmobX + parseInt(`${paginationD}`);
      styleH += `${parseInt(`${referrerm}`) % 3}`;
   for (let e = 0; e < 1; e++) {
      paginationD += parseFloat(`${1 - parseInt(`${userD}`)}`);
   }
      downloadingN = `${renewx.size}`;
   for (let y = 0; y < 1; y++) {
      short_yo /= Math.max(4, downloadingN.length);
   }
   for (let g = 0; g < 2; g++) {
      favoriteF.push(schedulea);
   }
   let klevinD = 7363554.0 >= settingsF;
   do {
      settingsF /= Math.max(2, renewx.size);
      if (klevinD) {
         break;
      }
   } while (((3 & styleH.length) == 5) && klevinD);
   let chartC = userD <= 8559953.0;
   do {
       let suggestion_ = String.fromCharCode(107,95,49,50,95,102,105,110,97,108,100,0);
       let securityj = 2.0;
         suggestion_ += `${parseInt(`${securityj}`) | suggestion_.length}`;
         suggestion_ = `${suggestion_.length ^ parseInt(`${securityj}`)}`;
       let holderg = String.fromCharCode(109,97,110,105,112,117,108,97,116,111,114,95,100,95,50,0);
      let soundJ = 7454192.0 >= securityj;
      do {
         securityj -= parseFloat(`${holderg.length * suggestion_.length}`);
         if (soundJ) {
            break;
         }
      } while (soundJ && ((holderg.length | 5) == 4));
      while (suggestion_.length > parseInt(`${securityj}`)) {
         securityj += parseFloat(`${suggestion_.length}`);
         break;
      }
       let animationP = String.fromCharCode(99,111,110,115,116,114,117,99,116,95,102,95,50,52,0);
       let googleQ = String.fromCharCode(103,95,51,95,112,97,114,115,101,0);
      userD *= schedulea;
      if (chartC) {
         break;
      }
   } while (chartC && (renewx.get(`${userD}`) == null));
    

   let gesturesa = schedulea <= 7450362;
   do {
      schedulea += parseInt(`${paginationD}`) | favoriteF.length;
      if (gesturesa) {
         break;
      }
   } while ((2 <= (schedulea / 4) && (schedulea / (Math.max(9, favoriteF.length))) <= 4) && gesturesa);
       let projectx: Map<any, any> = new Map([[String.fromCharCode(101,95,50,49,95,101,120,112,97,110,100,0),String.fromCharCode(120,95,52,56,95,113,117,97,110,116,105,108,101,0)], [String.fromCharCode(106,95,49,57,95,100,116,111,114,0),String.fromCharCode(101,95,55,54,95,100,115,116,114,101,97,109,0)], [String.fromCharCode(103,117,101,115,115,95,52,95,53,54,0),String.fromCharCode(104,111,111,107,115,95,120,95,49,53,0)]]);
       let navigationl = String.fromCharCode(122,95,57,49,95,99,97,108,108,111,117,116,0);
       let collectionD = 1;
      while ((projectx.size + navigationl.length) == 4 && 1 == (projectx.size + 4)) {
          let indexV = 1.0;
         navigationl = `${collectionD / 2}`;
         indexV *= 1 | parseInt(`${indexV}`);
         break;
      }
      for (let e = 0; e < 3; e++) {
         navigationl += `${collectionD}`;
      }
      while ((4 << (Math.min(2, navigationl.length))) > 1 && (collectionD << (Math.min(navigationl.length, 1))) > 4) {
         navigationl = "2";
         break;
      }
      while (1 <= (collectionD << (Math.min(Math.abs(1), 2)))) {
          let interstitialc: Map<any, any> = new Map([[String.fromCharCode(114,105,110,103,105,110,103,95,103,95,55,52,0),717], [String.fromCharCode(104,95,50,52,95,118,97,108,105,100,97,116,101,0),852], [String.fromCharCode(97,95,55,55,95,99,111,114,114,0),394]]);
          let annerj = String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,100,95,49,95,56,52,0);
          let statisticsX = String.fromCharCode(114,95,52,50,95,99,97,110,99,101,108,108,101,114,0);
          let containerx = 3;
         collectionD /= Math.max(3, 1);
         interstitialc = new Map([[`${interstitialc.size}`, interstitialc.size]]);
         annerj = `${(annerj == String.fromCharCode(119,0) ? containerx : annerj.length)}`;
         statisticsX = `${(annerj == String.fromCharCode(50,0) ? interstitialc.size : annerj.length)}`;
         containerx += annerj.length;
         break;
      }
         projectx = new Map([[`${projectx.size}`, projectx.size & 1]]);
      if ((2 & projectx.size) < 4) {
         navigationl += `${collectionD}`;
      }
         projectx.set(navigationl, navigationl.length * 1);
       let selectL: Array<any> = [String.fromCharCode(99,111,111,114,100,95,48,95,52,50,0), String.fromCharCode(102,105,108,108,112,95,98,95,51,50,0), String.fromCharCode(110,95,56,52,95,116,114,97,110,115,105,116,105,111,110,115,0)];
       let ewardedb: Array<any> = [307, 661, 96];
         ewardedb.push(navigationl.length ^ 2);
      schedulea <<= Math.min(4, Math.abs(2 + parseInt(`${referrerm}`)));
      sigmobX &= parseInt(`${settingsF}`);
   for (let j = 0; j < 1; j++) {
      schedulea %= Math.max(5, styleH.length * downloadingN.length);
   }
      updatesP /= Math.max(5, parseInt(`${settingsF}`));
      referrerm *= short_yo | bodana.length;
   for (let g = 0; g < 2; g++) {
       let listN: Map<any, any> = new Map([[String.fromCharCode(99,114,101,100,101,110,116,105,97,108,115,95,105,95,55,56,0),517], [String.fromCharCode(102,114,97,109,101,99,114,99,95,115,95,51,50,0),314], [String.fromCharCode(114,95,52,52,95,109,117,108,116,105,0),399]]);
       let zhengpians = String.fromCharCode(112,97,114,97,115,101,116,95,102,95,57,55,0);
       let topicD = 2.0;
       let predictiona = false;
       let reminder1 = String.fromCharCode(104,95,51,54,95,112,114,105,111,114,0);
          let temperaturew = 1.0;
          let taiwanC: Array<any> = [170, 465];
         reminder1 = `${parseInt(`${topicD}`) << (Math.min(zhengpians.length, 1))}`;
         temperaturew += parseFloat(`${3}`);
         taiwanC = [parseInt(`${temperaturew}`)];
          let foregroundF = String.fromCharCode(118,95,52,55,0);
         topicD -= reminder1.length % 1;
         foregroundF += `${(String.fromCharCode(48,0) == foregroundF ? foregroundF.length : foregroundF.length)}`;
      if (4 < (zhengpians.length % (Math.max(1, 6)))) {
         topicD -= ((predictiona ? 4 : 4) % (Math.max(parseInt(`${topicD}`), 8)));
      }
          let mbbannerT = 1;
          let brightnesst = String.fromCharCode(115,97,109,101,95,118,95,52,52,0);
         zhengpians += `${zhengpians.length ^ 3}`;
         mbbannerT %= Math.max(1, mbbannerT);
         brightnesst += `${3 ^ brightnesst.length}`;
       let splashZ = false;
       let const_95P = 5.0;
       let placementx = 5.0;
          let becomes = 1;
          let backwardy = 4.0;
          let collectionq = 3.0;
         const_95P -= 2;
         becomes *= 1 ^ becomes;
         backwardy /= Math.max(parseInt(`${collectionq}`), 5);
         collectionq += 3;
      while (predictiona) {
         predictiona = zhengpians.length > listN.size;
         break;
      }
         zhengpians = `${parseInt(`${const_95P}`)}`;
          let viewsS = String.fromCharCode(114,117,108,101,115,95,116,95,49,57,0);
         const_95P /= Math.max(2, ((splashZ ? 4 : 1) >> (Math.min(Math.abs(1), 5))));
         viewsS += `${viewsS.length}`;
      let producth = reminder1.length <= 7275623;
      do {
          let sinae: Map<any, any> = new Map([[String.fromCharCode(107,95,50,52,95,97,99,99,101,110,116,0),557], [String.fromCharCode(115,104,97,114,101,95,49,95,50,50,0),299]]);
          let tooltipsW = String.fromCharCode(105,115,115,117,101,95,56,95,56,0);
          let renewh = 0;
          let championx: Array<any> = [420, 295];
          let crownD = String.fromCharCode(99,97,112,105,116,97,108,105,122,105,110,103,95,121,95,55,54,0);
         reminder1 = `${parseInt(`${placementx}`)}`;
         sinae = new Map([[tooltipsW, tooltipsW.length & crownD.length]]);
         renewh *= crownD.length;
         championx = [1];
         if (producth) {
            break;
         }
      } while ((4.50 < (const_95P - 1.92)) && producth);
      for (let p = 0; p < 1; p++) {
          let sideC = 5.0;
          let castingm = String.fromCharCode(116,95,55,51,95,112,111,115,116,112,114,111,99,114,101,115,0);
          let shirts = true;
          let yellowH = true;
         listN.set(reminder1, (reminder1 == String.fromCharCode(109,0) ? reminder1.length : (predictiona ? 5 : 4)));
         sideC += ((yellowH ? 4 : 3) & castingm.length);
         castingm += `${(3 % (Math.max(3, (shirts ? 5 : 1))))}`;
         shirts = (yellowH ? !shirts : !yellowH);
      }
         const_95P *= 2 ^ parseInt(`${const_95P}`);
         placementx /= Math.max(reminder1.length, 1);
         topicD += zhengpians.length & 1;
      sigmobX %= Math.max(1, 1 % (Math.max(parseInt(`${paginationD}`), 6)));
   }
      bodana = `${parseInt(`${settingsF}`)}`;
      main_zt = `${downloadingN.length * parseInt(`${referrerm}`)}`;
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
       let page5 = String.fromCharCode(102,117,122,122,95,57,95,49,55,0);
    let penaltyo = 5;
    let currentk = String.fromCharCode(112,95,54,48,95,103,100,112,114,0);
    let memberr = String.fromCharCode(107,95,51,52,95,103,109,97,116,99,104,0);
    let interstitial0 = true;
    let inactiveh: Array<any> = [172, 239];
    let countdownm = 1.0;
    let basketballS = 5.0;
      page5 += `${page5.length}`;
   for (let q = 0; q < 1; q++) {
       let private_abq: Array<any> = [String.fromCharCode(115,116,114,99,115,112,110,95,103,95,56,48,0), String.fromCharCode(114,101,118,101,114,98,95,122,95,51,50,0)];
       let productF = 3.0;
       let renewp = String.fromCharCode(115,95,51,56,95,109,117,108,116,105,0);
       let editP: Map<any, any> = new Map([[String.fromCharCode(106,95,50,49,95,97,109,112,108,105,116,117,100,101,0),false ], [String.fromCharCode(106,95,55,55,95,106,101,114,114,111,114,0),false ]]);
         renewp += `${renewp.length}`;
          let serviceq = 1.0;
          let orangei = 0.0;
         renewp += `${private_abq.length >> (Math.min(Math.abs(3), 4))}`;
         serviceq -= 1 / (Math.max(parseInt(`${orangei}`), 6));
         orangei *= parseFloat(`${parseInt(`${serviceq}`)}`);
      while ((editP.size * 5) < 4) {
          let redirectu = true;
          let questn: Array<any> = [400, 669, 425];
          let link7 = String.fromCharCode(99,111,118,101,114,115,95,112,95,51,54,0);
          let confirmationc: Map<any, any> = new Map([[String.fromCharCode(99,95,53,52,95,107,101,121,108,101,110,0),String.fromCharCode(104,112,97,114,97,109,115,95,97,95,50,56,0)], [String.fromCharCode(111,95,52,51,95,113,117,111,116,101,100,0),String.fromCharCode(99,104,97,99,104,97,112,111,108,121,95,108,95,56,53,0)], [String.fromCharCode(109,115,109,112,101,103,95,119,95,55,53,0),String.fromCharCode(107,95,54,50,95,116,101,109,112,111,114,97,108,0)]]);
         renewp += `${renewp.length}`;
         redirectu = 95 <= questn.length;
         questn = [((redirectu ? 1 : 2) % (Math.max(confirmationc.size, 8)))];
         link7 = `${link7.length}`;
         confirmationc = new Map([[`${questn.length}`, questn.length]]);
         break;
      }
      if ((private_abq.length / 2) >= 4 || (renewp.length / 2) >= 4) {
         renewp += `${private_abq.length * 2}`;
      }
         renewp = `${editP.size}`;
         private_abq.push((String.fromCharCode(74,0) == renewp ? parseInt(`${productF}`) : renewp.length));
       let historya = String.fromCharCode(99,112,111,115,95,113,95,52,50,0);
         productF -= 3;
      while (5 == (editP.size - 2) && (editP.size + 2) == 1) {
         editP.set(renewp, 3);
         break;
      }
         private_abq = [2];
      let analyticS = 9342167.0 >= productF;
      do {
         productF /= Math.max(2 + editP.size, 2);
         if (analyticS) {
            break;
         }
      } while (((historya.length + parseInt(`${productF}`)) < 4) && analyticS);
         historya += `${3 >> (Math.min(1, historya.length))}`;
      memberr = `${currentk.length << (Math.min(Math.abs(1), 4))}`;
   }
       let darkq: Map<any, any> = new Map([[String.fromCharCode(105,95,56,57,95,115,101,116,116,105,116,108,101,0),String.fromCharCode(117,95,51,50,95,122,101,114,111,99,111,100,101,99,0)], [String.fromCharCode(115,95,54,95,114,111,116,111,0),String.fromCharCode(101,113,117,105,118,97,108,101,110,116,95,49,95,49,55,0)], [String.fromCharCode(122,95,54,51,95,115,116,97,108,101,0),String.fromCharCode(112,95,52,95,106,105,103,103,108,101,0)]]);
       let country9 = 1;
         darkq = new Map([[`${darkq.size}`, country9]]);
      for (let v = 0; v < 3; v++) {
         country9 &= darkq.size % (Math.max(8, country9));
      }
       let friendsU: Map<any, any> = new Map([[String.fromCharCode(99,95,53,95,109,111,100,97,108,108,121,0),String.fromCharCode(102,95,55,52,95,115,101,114,105,97,108,110,111,0)], [String.fromCharCode(115,97,100,120,95,99,95,55,50,0),String.fromCharCode(121,95,53,57,95,98,117,102,102,101,114,105,110,103,0)]]);
       let userd: Map<any, any> = new Map([[String.fromCharCode(120,99,111,114,114,95,54,95,50,0),299], [String.fromCharCode(105,95,50,95,108,97,121,101,114,115,0),35], [String.fromCharCode(119,95,55,56,95,99,105,110,101,0),268]]);
      let whiteN = 7590419 >= friendsU.size;
      do {
         friendsU.set(`${country9}`, country9);
         if (whiteN) {
            break;
         }
      } while ((1 == (darkq.size % 5) || (darkq.size % 5) == 4) && whiteN);
       let catalogl = false;
       let chinasameK = false;
          let fieldr = true;
          let subsA = String.fromCharCode(112,101,105,114,115,95,98,95,51,50,0);
          let inewsI = 1.0;
         catalogl = darkq.size >= 14 || chinasameK;
         fieldr = 81.86 <= inewsI && String.fromCharCode(48,0) == subsA;
         subsA = `${parseInt(`${inewsI}`) - 1}`;
      page5 = "1";
       let catalogs: Map<any, any> = new Map([[String.fromCharCode(99,95,53,51,95,111,116,104,0),13], [String.fromCharCode(108,95,56,57,95,99,111,109,109,117,110,105,99,97,116,105,111,110,0),196]]);
       let assistH = false;
          let redirectS = 4.0;
         assistH = null == catalogs.get(`${assistH}`);
         redirectS += parseInt(`${redirectS}`) | parseInt(`${redirectS}`);
         catalogs.set(`${assistH}`, ((assistH ? 4 : 1) + catalogs.size));
          let rewindt = 1.0;
         assistH = rewindt > 98.45;
          let pointw = String.fromCharCode(101,110,111,117,103,104,95,114,95,57,48,0);
         catalogs = new Map([[`${assistH}`, ((assistH ? 5 : 4))]]);
         pointw += "2";
      while (assistH) {
          let recommendationB = 3.0;
          let target1 = String.fromCharCode(112,99,97,112,95,53,95,49,0);
          let regengN = String.fromCharCode(106,95,57,51,95,105,100,97,115,115,101,116,115,0);
          let searchm = 5;
         assistH = 3 > catalogs.size || 3 > searchm;
         recommendationB += parseFloat(`${parseInt(`${recommendationB}`) * regengN.length}`);
         target1 = `${3 + parseInt(`${recommendationB}`)}`;
         regengN += `${target1.length / (Math.max(2, 10))}`;
         searchm /= Math.max(parseInt(`${recommendationB}`) >> (Math.min(regengN.length, 4)), 5);
         break;
      }
      for (let e = 0; e < 3; e++) {
         catalogs.set(`${assistH}`, catalogs.size + 3);
      }
      currentk = `${catalogs.size ^ inactiveh.length}`;
   for (let u = 0; u < 3; u++) {
       let basketball1 = 3.0;
      if (2.95 <= basketball1) {
          let firebaseC = 2;
          let qcopy_leC = 3.0;
          let v_countn: Map<any, any> = new Map([[String.fromCharCode(97,109,114,110,98,100,97,116,97,95,97,95,56,52,0),false ], [String.fromCharCode(97,95,54,57,95,97,108,108,111,119,105,0),true ], [String.fromCharCode(105,95,57,50,95,99,104,97,114,108,101,110,0),true ]]);
         basketball1 -= parseFloat(`${firebaseC / (Math.max(10, v_countn.size))}`);
         firebaseC ^= parseInt(`${qcopy_leC}`);
      }
      for (let s = 0; s < 2; s++) {
         basketball1 += parseFloat(`${parseInt(`${basketball1}`) % (Math.max(2, parseInt(`${basketball1}`)))}`);
      }
         basketball1 /= Math.max(5, parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${basketball1}`)), 1))}`));
      currentk += "2";
   }
   for (let a = 0; a < 3; a++) {
       let x_playero = String.fromCharCode(103,95,57,52,95,112,97,105,114,105,110,103,0);
       let stepc = String.fromCharCode(101,95,57,56,95,100,101,115,105,103,110,0);
      while (x_playero.length < 2) {
         stepc += `${1 << (Math.min(4, x_playero.length))}`;
         break;
      }
      if (stepc == x_playero) {
         x_playero += `${x_playero.length & stepc.length}`;
      }
         stepc += "3";
         stepc += "1";
          let j_managerL = 4;
         x_playero = `${x_playero.length | j_managerL}`;
          let sportsB = String.fromCharCode(105,95,57,53,95,109,97,110,105,112,117,108,97,116,111,114,0);
          let time_wdA: Array<any> = [String.fromCharCode(99,114,101,100,105,98,105,108,105,116,121,95,122,95,48,0), String.fromCharCode(115,116,114,101,97,109,95,53,95,53,55,0)];
         x_playero += `${(stepc == String.fromCharCode(77,0) ? stepc.length : time_wdA.length)}`;
         sportsB += `${sportsB.length >> (Math.min(4, sportsB.length))}`;
         time_wdA.push(sportsB.length);
      countdownm /= Math.max(2 << (Math.min(Math.abs(parseInt(`${countdownm}`)), 2)), 3);
   }
      countdownm *= memberr.length;
   while (page5.length == 2) {
      page5 += `${currentk.length & 2}`;
      break;
   }
   let roomV = 7812460 >= memberr.length;
   do {
       let suggestionS: Map<any, any> = new Map([[String.fromCharCode(99,97,110,99,101,108,108,105,110,103,95,110,95,51,48,0),211], [String.fromCharCode(97,95,50,53,95,100,101,101,112,0),678], [String.fromCharCode(104,115,99,97,108,101,114,95,56,95,54,53,0),941]]);
         suggestionS = new Map([[`${suggestionS.size}`, suggestionS.size & 2]]);
      while (suggestionS.size >= suggestionS.size) {
          let logov = 5.0;
          let toponq = 0.0;
          let crownX = 2;
          let fnewinterstitiala: Map<any, any> = new Map([[String.fromCharCode(108,111,99,107,99,104,97,105,110,95,111,95,50,53,0),834], [String.fromCharCode(108,97,116,105,110,95,108,95,55,55,0),355], [String.fromCharCode(118,95,50,51,95,106,109,111,114,101,99,102,103,0),779]]);
         suggestionS.set(`${suggestionS.size}`, suggestionS.size | fnewinterstitiala.size);
         logov -= 3;
         toponq /= Math.max(4, parseFloat(`${parseInt(`${logov}`)}`));
         crownX <<= Math.min(1, Math.abs(parseInt(`${toponq}`)));
         fnewinterstitiala = new Map([[`${toponq}`, 2 / (Math.max(8, parseInt(`${toponq}`)))]]);
         break;
      }
       let leftK = 5.0;
      memberr = `${penaltyo}`;
      if (roomV) {
         break;
      }
   } while ((3 < (2 & inactiveh.length)) && roomV);
      memberr = `${((interstitial0 ? 2 : 1) / (Math.max(page5.length, 2)))}`;
      memberr = `${2 * page5.length}`;
   if (3 <= (page5.length | 1) && (inactiveh.length | 1) <= 3) {
      page5 += `${(String.fromCharCode(73,0) == currentk ? currentk.length : penaltyo)}`;
   }
   while ((memberr.length % 5) <= 2 && 4 <= (memberr.length % 5)) {
      memberr = `${2 << (Math.min(Math.abs(parseInt(`${countdownm}`)), 4))}`;
      break;
   }
      currentk += `${currentk.length}`;
   let changeF = penaltyo >= 8138087;
   do {
      penaltyo ^= 3;
      if (changeF) {
         break;
      }
   } while (((penaltyo % (Math.max(3, 10))) >= 1 && (penaltyo % 3) >= 5) && changeF);
   if ((3.72 * basketballS) > 5.6 || 4.2 > (basketballS * 3.72)) {
      countdownm /= Math.max(1, 1);
   }

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
       let orangeR = 0.0;
    let selectedg = false;
    let clubI = 4.0;
    let blackN: Array<any> = [851, 584, 820];
    let showA = String.fromCharCode(100,95,54,95,100,105,115,99,111,110,116,105,103,117,111,117,115,0);
    let transfer3 = String.fromCharCode(110,97,116,105,111,110,97,108,105,116,121,95,50,95,57,48,0);
    let eventO: Array<any> = [794, 129, 624];
    let rewardvideo7 = 1;
      orangeR -= 2;
   for (let x = 0; x < 1; x++) {
       let settingsm = true;
      for (let l = 0; l < 2; l++) {
         settingsm = !settingsm;
      }
         settingsm = !settingsm;
      let downloadingu = settingsm ? !settingsm : settingsm;
      do {
          let detailsm = false;
          let layoutp = String.fromCharCode(116,95,53,54,95,119,97,118,112,97,99,107,101,110,99,0);
         settingsm = layoutp.includes(`${detailsm}`);
         if (downloadingu) {
            break;
         }
      } while (downloadingu && (!settingsm));
      orangeR /= Math.max(3, eventO.length + 3);
   }
   let mbjscommonp = orangeR <= 5021211.0;
   do {
       let darkO = String.fromCharCode(111,95,55,49,95,117,112,100,97,116,101,115,0);
       let header9 = String.fromCharCode(97,117,116,111,102,105,108,108,95,97,95,53,54,0);
       let z_managerl = String.fromCharCode(115,98,114,101,115,101,114,118,101,95,115,95,54,49,0);
       let calendar3 = 0.0;
       let middlewarem = true;
       let panglem: Array<any> = [756, 683];
       let flippern: Array<any> = [610, 425, 782];
      if (middlewarem || header9.length < 5) {
          let with_esT: Map<any, any> = new Map([[String.fromCharCode(105,118,115,101,116,117,112,95,106,95,54,48,0),String.fromCharCode(101,95,54,54,95,115,109,105,108,105,101,115,0)], [String.fromCharCode(114,101,99,111,114,100,95,120,95,51,53,0),String.fromCharCode(97,99,99,117,114,97,99,121,95,119,95,57,54,0)]]);
          let soundH = 5.0;
         header9 = `${parseInt(`${soundH}`) - header9.length}`;
         with_esT = new Map([[`${with_esT.size}`, with_esT.size % 1]]);
         soundH /= Math.max(2, 4);
      }
      let yellowd = calendar3 <= 7319529.0;
      do {
         calendar3 *= 3;
         if (yellowd) {
            break;
         }
      } while (yellowd && (calendar3 < 1.62));
      if (middlewarem) {
         panglem.push(panglem.length);
      }
          let dragc = 0.0;
         header9 = `${header9.length}`;
         dragc += parseFloat(`${parseInt(`${dragc}`) * parseInt(`${dragc}`)}`);
      while (!darkO.startsWith(`${calendar3}`)) {
          let tumbnail_ = String.fromCharCode(101,95,52,53,95,119,105,114,101,108,101,115,115,0);
          let championG = String.fromCharCode(120,118,105,100,105,100,99,116,95,53,95,53,52,0);
         darkO = "2";
         tumbnail_ = `${2 + championG.length}`;
         championG = `${(String.fromCharCode(88,0) == championG ? tumbnail_.length : championG.length)}`;
         break;
      }
         panglem = [3];
          let klevinF: Array<any> = [885, 300];
          let acceptedx = String.fromCharCode(103,95,56,95,108,115,112,112,111,108,121,102,0);
          let scoreH = 3.0;
         panglem = [darkO.length << (Math.min(Math.abs(1), 1))];
         klevinF.push(1);
         acceptedx = `${(acceptedx == String.fromCharCode(80,0) ? acceptedx.length : klevinF.length)}`;
         scoreH -= 3;
      if ((2 / (Math.max(9, panglem.length))) >= 1) {
         z_managerl = `${(darkO == String.fromCharCode(110,0) ? (middlewarem ? 4 : 4) : darkO.length)}`;
      }
         flippern = [2];
         darkO = `${panglem.length}`;
       let countryk: Map<any, any> = new Map([[String.fromCharCode(113,95,50,55,95,116,105,109,101,108,105,109,105,116,0),false ], [String.fromCharCode(97,99,116,117,97,108,105,122,97,116,105,111,110,95,114,95,51,53,0),false ], [String.fromCharCode(119,95,55,49,95,115,116,97,98,105,108,105,116,121,0),true ]]);
      for (let p = 0; p < 2; p++) {
         panglem.push(1);
      }
      if (4 > (panglem.length % 1)) {
         countryk = new Map([[`${panglem.length}`, z_managerl.length]]);
      }
      for (let d = 0; d < 2; d++) {
         header9 = `${((middlewarem ? 1 : 1) / 3)}`;
      }
      orangeR += header9.length - parseInt(`${orangeR}`);
      if (mbjscommonp) {
         break;
      }
   } while (mbjscommonp && ((transfer3.length + 2) > 4));
   let commong = String.fromCharCode(120,122,116,0) == transfer3;
   do {
      transfer3 += `${blackN.length & 2}`;
      if (commong) {
         break;
      }
   } while ((!transfer3.includes(showA)) && commong);
      clubI += parseFloat(`${showA.length + transfer3.length}`);

    if (episodeRef.current) {

      blackN.push(parseInt(`${orangeR}`));
      showA += `${parseInt(`${clubI}`) + 2}`;
      selectedg = orangeR >= 69.59;
   let klevinv = 6238237.0 <= orangeR;
   do {
      orangeR -= blackN.length;
      if (klevinv) {
         break;
      }
   } while ((2 == (showA.length % 4) && 3.83 == (showA.length * orangeR)) && klevinv);
      orangeR *= parseInt(`${clubI}`);
      episodeRef.current.scrollToIndex({
        index: currentEpisode,
        animated: true,
      });
    }
  };

  const handleModalClose = useCallback(() => {
       let otherT = 1.0;
    let pangleM: Map<any, any> = new Map([[String.fromCharCode(116,95,56,55,95,112,116,105,111,110,115,0),216], [String.fromCharCode(107,95,55,49,95,99,111,108,108,97,112,115,105,110,103,0),902]]);
    let refreshV = String.fromCharCode(101,95,53,50,95,109,101,116,97,100,97,116,97,115,101,116,0);
    let giftO = String.fromCharCode(118,105,115,105,116,95,108,95,51,55,0);
    let grayM = String.fromCharCode(113,95,53,52,95,101,97,103,101,114,0);
    let constantsA = 3;
    let changea = String.fromCharCode(104,101,120,98,110,95,98,95,52,51,0);
    let crownH = 3;
    let send5: Map<any, any> = new Map([[String.fromCharCode(100,98,105,95,108,95,53,48,0),String.fromCharCode(114,111,116,97,116,105,110,103,95,110,95,51,53,0)], [String.fromCharCode(117,110,105,111,110,101,100,95,112,95,49,56,0),String.fromCharCode(100,95,55,57,95,116,111,111,108,98,97,114,0)]]);
    let userd = String.fromCharCode(114,115,99,99,95,106,95,49,56,0);
    let eactG: Array<any> = [String.fromCharCode(120,95,56,51,95,97,118,112,105,99,116,117,114,101,0), String.fromCharCode(104,95,53,48,95,117,110,108,111,99,107,101,100,0)];
    let routerP: Map<any, any> = new Map([[String.fromCharCode(117,110,108,111,97,100,95,117,95,57,57,0),727], [String.fromCharCode(97,112,112,95,109,95,53,56,0),955], [String.fromCharCode(116,114,97,99,107,101,114,95,105,95,57,54,0),198]]);
    let eactA = 5.0;
    let umengK = 3.0;
    let selectD: Map<any, any> = new Map([[String.fromCharCode(98,95,54,50,95,105,100,99,116,108,108,109,0),317], [String.fromCharCode(101,95,56,56,95,105,110,103,101,110,105,101,110,116,0),741]]);
    let shrinku = String.fromCharCode(108,95,50,55,95,118,111,114,100,105,112,108,111,109,0);
   let promotions = send5.size >= 9522666;
   do {
      send5.set(`${constantsA}`, (grayM == String.fromCharCode(56,0) ? grayM.length : constantsA));
      if (promotions) {
         break;
      }
   } while (promotions && ((send5.size / (Math.max(2, 1))) <= 2 || 4 <= (send5.size / 2)));
      crownH &= parseInt(`${otherT}`) ^ giftO.length;
       let stylesI = 3.0;
         stylesI -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${stylesI}`)), 1))}`);
          let prediction_ = 2;
          let showZ: Array<any> = [180, 166, 783];
          let vignette_ = 1.0;
         stylesI /= Math.max(2, parseFloat(`${showZ.length}`));
         prediction_ += 1 & prediction_;
         showZ = [prediction_ & 3];
         vignette_ -= parseFloat(`${parseInt(`${vignette_}`) >> (Math.min(3, Math.abs(2)))}`);
       let temperature6: Array<any> = [905, 999, 518];
       let nalytics1: Array<any> = [661, 732];
      constantsA <<= Math.min(Math.abs((String.fromCharCode(98,0) == userd ? userd.length : routerP.size)), 5);
   for (let q = 0; q < 2; q++) {
      giftO += "3";
   }
   if (userd.length == changea.length) {
      changea = `${3 + eactG.length}`;
   }
   for (let w = 0; w < 2; w++) {
      crownH &= userd.length % (Math.max(2, refreshV.length));
   }
      refreshV = `${2 + routerP.size}`;
   let textN = userd.length <= 5710039;
   do {
       let regengU = 1.0;
       let indicatork = String.fromCharCode(116,111,117,112,112,101,114,95,116,95,49,53,0);
       let gpay2 = 1.0;
       let delegate_djO: Array<any> = [992, 890, 822];
       let launcher1 = String.fromCharCode(107,95,52,48,95,110,116,101,114,102,97,99,101,0);
      let strings2 = delegate_djO.length >= 5042160;
      do {
         delegate_djO = [delegate_djO.length];
         if (strings2) {
            break;
         }
      } while ((indicatork.endsWith(`${delegate_djO.length}`)) && strings2);
       let playlistY = String.fromCharCode(102,97,99,105,108,105,116,97,116,101,95,99,95,55,52,0);
       let fullF = String.fromCharCode(112,97,105,110,116,95,56,95,50,51,0);
          let bingw = false;
         fullF = "2";
         bingw = (bingw ? bingw : !bingw);
          let helperL = String.fromCharCode(100,111,109,97,105,110,115,95,104,95,51,0);
         indicatork = `${fullF.length | helperL.length}`;
         launcher1 += `${(launcher1 == String.fromCharCode(111,0) ? delegate_djO.length : launcher1.length)}`;
         indicatork += `${2 / (Math.max(1, parseInt(`${gpay2}`)))}`;
      for (let f = 0; f < 2; f++) {
         delegate_djO.push(fullF.length - parseInt(`${gpay2}`));
      }
         launcher1 += `${playlistY.length}`;
      for (let f = 0; f < 3; f++) {
         playlistY += `${indicatork.length}`;
      }
       let topic8 = String.fromCharCode(97,95,49,51,95,97,101,115,0);
         indicatork += `${(indicatork == String.fromCharCode(108,0) ? indicatork.length : fullF.length)}`;
          let cast2 = String.fromCharCode(115,112,101,101,100,95,118,95,50,53,0);
         launcher1 += `${indicatork.length ^ 1}`;
         cast2 = `${cast2.length}`;
      for (let o = 0; o < 2; o++) {
         topic8 += `${fullF.length - 1}`;
      }
      let trophyc = String.fromCharCode(119,112,98,56,48,95,97,0) == fullF;
      do {
         fullF += "3";
         if (trophyc) {
            break;
         }
      } while ((!fullF.startsWith(`${regengU}`)) && trophyc);
         indicatork += `${(fullF == String.fromCharCode(120,0) ? fullF.length : playlistY.length)}`;
      userd = `${changea.length}`;
      if (textN) {
         break;
      }
   } while ((1 < eactG.length) && textN);
   if (!refreshV.includes(`${send5.size}`)) {
      refreshV = `${send5.size & crownH}`;
   }
   if (3 >= (parseInt(`${otherT}`) - 5) || 2 >= (refreshV.length + 5)) {
       let matchM = String.fromCharCode(114,105,118,97,116,101,95,99,95,54,49,0);
       let playP = String.fromCharCode(102,95,51,55,95,103,114,97,112,104,105,99,0);
          let tickE = 5.0;
          let lesss = String.fromCharCode(115,108,102,95,111,95,57,48,0);
          let termsy = true;
         matchM += `${(playP == String.fromCharCode(70,0) ? playP.length : lesss.length)}`;
         tickE *= (parseInt(`${tickE}`) & (termsy ? 5 : 4));
         lesss = `${1 * parseInt(`${tickE}`)}`;
         termsy = !termsy;
         matchM += "1";
          let gestures0 = false;
         playP += `${(String.fromCharCode(78,0) == playP ? (gestures0 ? 1 : 4) : playP.length)}`;
         matchM = `${matchM.length % 3}`;
       let networkN = String.fromCharCode(110,95,50,50,95,115,98,97,100,0);
         networkN += `${networkN.length}`;
      otherT /= Math.max(2 & pangleM.size, 5);
   }
      routerP.set(userd, pangleM.size);
      constantsA -= routerP.size;
   for (let a = 0; a < 1; a++) {
      crownH &= 3 << (Math.min(5, Math.abs(parseInt(`${otherT}`))));
   }
   let shoote = send5.size >= 7406370;
   do {
      send5 = new Map([[`${send5.size}`, 2 - send5.size]]);
      if (shoote) {
         break;
      }
   } while (((4 >> (Math.min(2, Math.abs(crownH)))) == 5) && shoote);
      giftO += `${pangleM.size}`;
       let incidentJ = String.fromCharCode(117,110,98,111,120,95,107,95,57,49,0);
      for (let s = 0; s < 2; s++) {
         incidentJ = `${incidentJ.length}`;
      }
       let taiwank: Array<any> = [32, 250];
       let hookB: Array<any> = [909, 240, 5];
      if ((hookB.length * taiwank.length) > 5) {
         taiwank.push(incidentJ.length);
      }
      userd += `${parseInt(`${otherT}`) % (Math.max(routerP.size, 8))}`;
   for (let o = 0; o < 3; o++) {
       let expiredo = 1.0;
       let recommendationn: Map<any, any> = new Map([[String.fromCharCode(115,95,53,56,95,105,109,97,103,101,121,117,118,99,111,110,102,105,103,0),223], [String.fromCharCode(114,95,49,56,0),36], [String.fromCharCode(97,108,108,121,117,118,95,111,95,49,51,0),239]]);
       let containerM = 0.0;
          let plus8 = String.fromCharCode(108,111,97,116,95,119,95,55,52,0);
          let comment_: Array<any> = [100, 371, 857];
         expiredo *= comment_.length;
         plus8 = "1";
         comment_.push(plus8.length);
      if ((recommendationn.size & 1) < 5 || (parseInt(`${expiredo}`) + recommendationn.size) < 1) {
         recommendationn = new Map([[`${expiredo}`, parseInt(`${containerM}`)]]);
      }
         recommendationn = new Map([[`${recommendationn.size}`, parseInt(`${containerM}`) + recommendationn.size]]);
         recommendationn.set(`${containerM}`, 2);
      if ((expiredo + containerM) < 5.35 || 3.30 < (5.35 + expiredo)) {
          let d_countM = 0;
          let bootsplash4 = 4;
          let typing3 = false;
         containerM -= 3;
         d_countM <<= Math.min(2, Math.abs(2));
         bootsplash4 %= Math.max(bootsplash4, 3);
         typing3 = bootsplash4 < d_countM;
      }
         recommendationn.set(`${expiredo}`, recommendationn.size & parseInt(`${expiredo}`));
         containerM += 2 & parseInt(`${expiredo}`);
         expiredo += parseInt(`${expiredo}`);
      let zhengpiank = containerM >= 8550694.0;
      do {
         containerM /= Math.max(5, recommendationn.size - parseInt(`${expiredo}`));
         if (zhengpiank) {
            break;
         }
      } while (((1.51 * containerM) >= 1.32) && zhengpiank);
      eactG = [pangleM.size / (Math.max(userd.length, 8))];
   }
   while ((giftO.length % (Math.max(9, crownH))) > 2 || (2 % (Math.max(9, giftO.length))) > 3) {
      giftO = `${refreshV.length}`;
      break;
   }
       let rewindp = false;
       let p_centery = String.fromCharCode(108,95,52,53,95,117,110,115,97,116,105,115,102,105,101,100,0);
       let downloadingk = 2.0;
          let history9 = String.fromCharCode(105,95,57,52,95,118,111,116,101,100,0);
         rewindp = p_centery.includes(`${rewindp}`);
         history9 = `${2 & history9.length}`;
         rewindp = !p_centery.includes(`${downloadingk}`);
         rewindp = (p_centery.length * downloadingk) <= 10.98;
          let j_center3 = 1.0;
          let confirmation7 = false;
          let minimize2: Array<any> = [334, 850];
         p_centery += `${(p_centery == String.fromCharCode(100,0) ? p_centery.length : (rewindp ? 3 : 5))}`;
         j_center3 /= Math.max(3, 1);
         confirmation7 = j_center3 >= 25.19;
         minimize2.push(minimize2.length);
         p_centery = `${(String.fromCharCode(68,0) == p_centery ? p_centery.length : parseInt(`${downloadingk}`))}`;
      pangleM.set(`${crownH}`, crownH);
   let logoutz = crownH >= 9797946;
   do {
      crownH -= parseInt(`${otherT}`) % (Math.max(3, 5));
      if (logoutz) {
         break;
      }
   } while ((crownH == eactG.length) && logoutz);
   for (let x = 0; x < 2; x++) {
      constantsA -= grayM.length ^ 3;
   }
   for (let v = 0; v < 1; v++) {
      grayM += "3";
   }
   let taiwan8 = String.fromCharCode(105,56,55,120,51,106,0) == grayM;
   do {
      grayM += `${(changea == String.fromCharCode(106,0) ? changea.length : crownH)}`;
      if (taiwan8) {
         break;
      }
   } while ((userd.length >= 1) && taiwan8);
   let component4 = 5881240 <= refreshV.length;
   do {
      refreshV += `${parseInt(`${otherT}`) | 3}`;
      if (component4) {
         break;
      }
   } while ((refreshV.endsWith(`${send5.size}`)) && component4);
   if (changea.startsWith(`${constantsA}`)) {
      changea += `${(String.fromCharCode(57,0) == grayM ? grayM.length : parseInt(`${otherT}`))}`;
   }
      constantsA &= userd.length / 1;
   let annerW = 7714934 >= constantsA;
   do {
      constantsA /= Math.max(1, 1);
      if (annerW) {
         break;
      }
   } while (annerW && (crownH == 1));

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
       let sinaP = true;
    let dplusA = String.fromCharCode(103,95,50,95,115,101,116,117,112,0);
    let changeW = false;
    let rewardD = 3.0;
    let nalyticsq = String.fromCharCode(115,95,54,49,95,117,112,103,114,97,100,101,100,0);
    let backc = true;
    let debugY: Array<any> = [280, 940, 226];
    let bodanB = String.fromCharCode(99,95,57,56,95,114,101,108,97,121,111,117,116,0);
    let sentryt = String.fromCharCode(106,95,55,54,95,118,97,108,117,101,100,0);
    let typingg = true;
    let sansU = false;
    let statsJ = 1.0;
    let predictionx = 2.0;
    let eventY = String.fromCharCode(114,95,49,51,95,99,108,101,97,114,98,105,116,0);
    let sourceW = 4;
    let w_lockX = 2.0;
       let reactZ = String.fromCharCode(99,95,50,95,98,108,111,99,107,100,0);
      if (reactZ.length <= 5) {
          let robotoS = String.fromCharCode(117,114,108,100,101,99,111,100,101,95,98,95,51,50,0);
          let kuaishouS = 4.0;
          let policyI = 1.0;
         reactZ = `${parseInt(`${kuaishouS}`)}`;
         robotoS = `${parseInt(`${policyI}`) + 3}`;
         kuaishouS -= 2 & parseInt(`${policyI}`);
      }
          let detailU = String.fromCharCode(120,95,51,50,95,116,97,114,103,101,116,101,100,0);
          let iconp = 5;
          let borderlessB = String.fromCharCode(114,101,99,117,114,115,105,111,110,95,112,95,54,53,0);
         reactZ = `${iconp | borderlessB.length}`;
         detailU += `${detailU.length}`;
         iconp -= detailU.length;
         reactZ = `${reactZ.length}`;
      sinaP = sentryt == String.fromCharCode(101,0);
   if (sinaP) {
      sentryt = `${2 & parseInt(`${rewardD}`)}`;
   }
   if (3 >= (dplusA.length | 2) && (statsJ / (Math.max(dplusA.length, 9))) >= 2.84) {
      statsJ += (sentryt == String.fromCharCode(112,0) ? (backc ? 1 : 3) : sentryt.length);
   }
   if (nalyticsq.length >= 3 || !typingg) {
      typingg = sinaP && dplusA.length < 36;
   }
   for (let l = 0; l < 3; l++) {
      statsJ /= Math.max(5, (sentryt.length >> (Math.min(4, Math.abs((backc ? 4 : 1))))));
   }
   for (let e = 0; e < 1; e++) {
      rewardD /= Math.max((parseFloat(`${(backc ? 2 : 1) & debugY.length}`)), 1);
   }

    

       let membershipT = true;
      while (membershipT) {
         membershipT = !membershipT;
         break;
      }
      for (let l = 0; l < 2; l++) {
          let placemento: Array<any> = [266, 856, 417];
          let buttona = String.fromCharCode(110,95,52,48,95,118,97,108,105,100,97,116,101,0);
         membershipT = buttona.length < 47;
         placemento.push(placemento.length / 1);
         buttona += "2";
      }
      if (!membershipT) {
          let stepj = String.fromCharCode(108,95,56,95,98,105,110,100,120,0);
          let fulli = String.fromCharCode(109,95,51,56,95,102,102,105,111,0);
          let default_6C = String.fromCharCode(99,95,55,55,95,117,112,112,101,114,99,97,115,101,0);
         membershipT = fulli.length <= 49;
         stepj += `${stepj.length}`;
         fulli += `${(default_6C == String.fromCharCode(90,0) ? stepj.length : default_6C.length)}`;
      }
      dplusA = `${((changeW ? 3 : 4) ^ 2)}`;
       let redirectI = String.fromCharCode(98,108,111,99,107,115,95,109,95,50,0);
      for (let t = 0; t < 1; t++) {
         redirectI += `${(redirectI == String.fromCharCode(54,0) ? redirectI.length : redirectI.length)}`;
      }
         redirectI = `${redirectI.length}`;
          let windS = 4.0;
          let tickZ = 2;
         redirectI += `${(String.fromCharCode(65,0) == redirectI ? tickZ : redirectI.length)}`;
         windS /= Math.max(parseFloat(`${parseInt(`${windS}`)}`), 2);
         tickZ -= 2;
      sinaP = (!sansU ? backc : !sansU);
   while (1.44 < (statsJ / 5.61)) {
       let twitterZ = String.fromCharCode(117,110,109,97,116,99,104,101,100,95,105,95,51,51,0);
       let nativeexP = 5.0;
       let closeh = true;
       let trophyu = String.fromCharCode(118,100,112,97,117,99,111,110,116,101,120,116,95,103,95,54,55,0);
       let shirta = String.fromCharCode(121,95,52,57,95,109,105,120,112,97,110,101,108,0);
      for (let u = 0; u < 2; u++) {
         shirta += `${twitterZ.length + trophyu.length}`;
      }
         twitterZ += `${parseInt(`${nativeexP}`)}`;
         closeh = !shirta.endsWith(`${closeh}`);
         twitterZ = `${shirta.length >> (Math.min(trophyu.length, 3))}`;
      let videoF = trophyu == String.fromCharCode(52,105,52,95,52,48,0);
      do {
          let matha: Array<any> = [787, 237, 648];
          let referrert = 3;
         trophyu = `${matha.length}`;
         matha.push(referrert);
         if (videoF) {
            break;
         }
      } while (videoF && (closeh));
         nativeexP *= parseInt(`${nativeexP}`) & 2;
      let redirectd = nativeexP <= 9688479.0;
      do {
         nativeexP /= Math.max(4, (parseInt(`${nativeexP}`) << (Math.min(4, Math.abs((closeh ? 4 : 4))))));
         if (redirectd) {
            break;
         }
      } while (((5.97 - nativeexP) > 1.89 && (5.97 - nativeexP) > 2.67) && redirectd);
      while (shirta.startsWith(`${trophyu.length}`)) {
          let zoom8 = String.fromCharCode(107,95,53,49,95,99,101,114,116,105,102,105,99,97,116,101,115,0);
          let dangerE: Map<any, any> = new Map([[String.fromCharCode(104,99,109,99,95,109,95,50,56,0),54], [String.fromCharCode(97,95,55,55,95,105,100,101,110,116,105,116,105,101,115,0),876], [String.fromCharCode(115,95,56,52,95,100,111,116,108,111,99,107,0),965]]);
          let completeo = 3.0;
          let benefitI = false;
          let kickw = String.fromCharCode(121,95,53,53,95,108,111,99,108,0);
         trophyu += `${parseInt(`${completeo}`)}`;
         zoom8 = `${(zoom8.length << (Math.min(4, Math.abs((benefitI ? 5 : 3)))))}`;
         dangerE = new Map([[`${dangerE.size}`, 3]]);
         completeo -= 1;
         benefitI = dangerE.size <= 19;
         kickw += "1";
         break;
      }
          let inviteo = 2.0;
          let minivod8 = 4.0;
          let ewardedu = 4.0;
         trophyu += `${parseInt(`${inviteo}`) | shirta.length}`;
         inviteo *= 1;
         minivod8 += 1 ^ parseInt(`${minivod8}`);
         ewardedu += parseInt(`${minivod8}`) / 1;
         nativeexP -= (String.fromCharCode(104,0) == shirta ? (closeh ? 1 : 4) : shirta.length);
          let selectedD: Array<any> = [254, 283];
          let singlea = String.fromCharCode(99,95,52,52,95,112,97,99,107,101,116,0);
         nativeexP -= parseInt(`${nativeexP}`);
         selectedD = [(singlea == String.fromCharCode(81,0) ? singlea.length : selectedD.length)];
      if (1 >= (shirta.length * parseInt(`${nativeexP}`)) || 4 >= (shirta.length >> (Math.min(Math.abs(1), 4)))) {
          let castk: Array<any> = [306, 620, 790];
          let icon9: Map<any, any> = new Map([[String.fromCharCode(106,95,57,51,95,119,97,116,99,104,105,110,103,0),393], [String.fromCharCode(122,95,52,52,95,109,117,116,101,100,0),911]]);
          let foundL = String.fromCharCode(101,95,49,48,48,95,114,101,99,111,103,110,105,122,101,114,115,0);
         nativeexP /= Math.max(trophyu.length, 3);
         castk = [(foundL == String.fromCharCode(77,0) ? foundL.length : icon9.size)];
         icon9 = new Map([[`${icon9.size}`, castk.length]]);
      }
      if (!closeh) {
         trophyu = `${((closeh ? 3 : 4))}`;
      }
      if (!closeh || 2 == twitterZ.length) {
         closeh = (trophyu.length << (Math.min(shirta.length, 1))) > 28;
      }
      while (nativeexP > 4.39 || (nativeexP * 4.39) > 3.44) {
         closeh = shirta.length > 56;
         break;
      }
      bodanB += `${shirta.length ^ 1}`;
      break;
   }
       let signinupA = 2.0;
       let mimod: Array<any> = [482, 389];
      for (let x = 0; x < 2; x++) {
         signinupA += 2;
      }
      if (!mimod.includes(signinupA)) {
         mimod = [mimod.length];
      }
       let animationY = String.fromCharCode(99,111,110,115,116,113,112,95,122,95,57,0);
       let overc = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,95,114,95,52,56,0);
      for (let k = 0; k < 3; k++) {
         overc += `${parseInt(`${signinupA}`) & animationY.length}`;
      }
         mimod = [animationY.length * 1];
         signinupA *= parseInt(`${signinupA}`);
      nalyticsq += `${((typingg ? 1 : 1) ^ 2)}`;
       let whitei = 0.0;
       let sellW = String.fromCharCode(97,101,115,95,101,95,53,55,0);
       let diceA = 4.0;
      if (sellW.length <= 4) {
         sellW += `${parseInt(`${whitei}`)}`;
      }
      if (diceA >= whitei) {
         whitei /= Math.max(parseInt(`${whitei}`) & sellW.length, 2);
      }
          let type_hiW = 1.0;
          let colorsV: Array<any> = [615, 496, 78];
         diceA /= Math.max(2, colorsV.length);
         type_hiW /= Math.max(parseFloat(`${parseInt(`${type_hiW}`)}`), 3);
         colorsV = [parseInt(`${type_hiW}`)];
       let gesturesx = 0.0;
       let listT = 2.0;
         gesturesx /= Math.max(parseInt(`${whitei}`) >> (Math.min(Math.abs(2), 3)), 2);
      if ((4.95 / (Math.max(5, whitei))) == 1.29 || (4.95 / (Math.max(5, whitei))) == 1.11) {
         whitei += parseInt(`${diceA}`) * 1;
      }
         gesturesx += parseInt(`${whitei}`) ^ parseInt(`${diceA}`);
      let reducerr = 5165240.0 >= whitei;
      do {
         whitei += parseInt(`${gesturesx}`);
         if (reducerr) {
            break;
         }
      } while (reducerr && (whitei <= diceA));
         listT -= parseInt(`${whitei}`);
      changeW = String.fromCharCode(85,0) == sentryt;
       let historyM: Map<any, any> = new Map([[String.fromCharCode(116,114,97,100,105,116,105,111,110,97,108,95,99,95,52,56,0),true ], [String.fromCharCode(105,110,118,101,114,116,95,53,95,49,48,0),true ], [String.fromCharCode(115,95,56,56,95,105,115,97,108,110,117,109,0),false ]]);
       let backg: Map<any, any> = new Map([[String.fromCharCode(116,111,107,101,110,115,95,122,95,57,48,0),214], [String.fromCharCode(116,119,111,115,95,108,95,54,54,0),28]]);
          let countdown_: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,109,112,114,101,115,115,95,54,95,55,51,0),797], [String.fromCharCode(114,116,99,99,95,120,95,50,52,0),42], [String.fromCharCode(98,95,53,56,95,115,116,114,105,110,103,105,102,121,0),365]]);
          let fileQ = String.fromCharCode(117,95,55,48,95,99,111,114,101,115,0);
          let backwardP: Array<any> = [726, 499, 552];
         backg = new Map([[`${backwardP.length}`, 3]]);
         countdown_.set(fileQ, countdown_.size | fileQ.length);
         backwardP.push(fileQ.length);
         backg.set(`${historyM.size}`, 1 * backg.size);
      changeW = rewardD == 29.78;
    

      bodanB += `${debugY.length}`;
      statsJ /= Math.max(1, (nalyticsq.length & (backc ? 3 : 4)));
      changeW = nalyticsq.length < 93 || changeW;
       let whiteN: Map<any, any> = new Map([[String.fromCharCode(114,95,51,55,95,119,97,116,99,104,101,114,0),356], [String.fromCharCode(112,117,108,108,113,117,111,116,101,95,113,95,50,53,0),143], [String.fromCharCode(101,109,117,108,97,116,101,95,115,95,52,0),745]]);
       let kickn = String.fromCharCode(115,111,102,116,116,104,114,101,115,104,95,113,95,50,49,0);
       let infoG = true;
          let adultm = 0;
         infoG = kickn.endsWith(`${adultm}`);
          let filled9 = String.fromCharCode(105,95,53,95,115,101,99,111,110,100,115,0);
          let selectionu = false;
         infoG = filled9.includes(`${selectionu}`);
         kickn = `${((infoG ? 3 : 5) << (Math.min(kickn.length, 1)))}`;
      let profileN = 5851565 <= kickn.length;
      do {
         kickn = "2";
         if (profileN) {
            break;
         }
      } while ((3 < (whiteN.size << (Math.min(Math.abs(5), 5)))) && profileN);
      for (let m = 0; m < 1; m++) {
          let promotionP: Map<any, any> = new Map([[String.fromCharCode(112,95,55,48,95,98,101,104,105,110,100,0),false ], [String.fromCharCode(108,105,98,115,119,105,102,116,95,122,95,56,50,0),false ]]);
          let awayC = 4.0;
         infoG = !kickn.endsWith(`${awayC}`);
         promotionP.set(`${promotionP.size}`, promotionP.size);
         awayC /= Math.max(1 ^ promotionP.size, 2);
      }
         infoG = (whiteN.size << (Math.min(kickn.length, 5))) >= 91;
      let corner5 = String.fromCharCode(48,101,49,105,97,103,109,56,0) == kickn;
      do {
         kickn += `${(2 & (infoG ? 4 : 4))}`;
         if (corner5) {
            break;
         }
      } while ((kickn.length == 2) && corner5);
      let stationE = 5519104 <= whiteN.size;
      do {
         whiteN.set(kickn, kickn.length * 2);
         if (stationE) {
            break;
         }
      } while ((4 >= (whiteN.size / (Math.max(4, 1))) && 4 >= whiteN.size) && stationE);
      for (let n = 0; n < 1; n++) {
          let reactnativejsR = 4;
          let redirectR: Map<any, any> = new Map([[String.fromCharCode(108,97,110,100,109,105,110,101,115,95,110,95,56,0),482], [String.fromCharCode(105,115,97,108,110,117,109,95,55,95,52,57,0),873]]);
          let modelq = String.fromCharCode(101,97,103,101,114,95,115,95,49,0);
          let plashg = String.fromCharCode(111,118,101,114,114,105,100,101,115,95,56,95,52,48,0);
          let referrer7 = 4.0;
         kickn += `${redirectR.size << (Math.min(Math.abs(2), 1))}`;
         reactnativejsR /= Math.max(1, reactnativejsR * 1);
         redirectR = new Map([[plashg, plashg.length]]);
         modelq = `${plashg.length}`;
         referrer7 -= parseFloat(`${2}`);
      }
      statsJ -= (parseInt(`${statsJ}`) | (sansU ? 5 : 5));
   while (!sansU) {
       let register_lvr = String.fromCharCode(109,117,108,116,105,101,110,100,95,99,95,51,0);
       let playO: Array<any> = [315, 33, 924];
         playO.push(register_lvr.length);
         playO.push(register_lvr.length);
         playO = [playO.length >> (Math.min(Math.abs(1), 2))];
      let profilev = register_lvr.length <= 9529109;
      do {
         register_lvr += `${2 << (Math.min(3, playO.length))}`;
         if (profilev) {
            break;
         }
      } while (profilev && ((playO.length - register_lvr.length) >= 4 || (4 - playO.length) >= 5));
         playO = [playO.length];
      let sendR = 5067189 >= register_lvr.length;
      do {
         register_lvr += "2";
         if (sendR) {
            break;
         }
      } while ((register_lvr.includes(`${playO.length}`)) && sendR);
      statsJ /= Math.max(4, parseInt(`${statsJ}`));
      break;
   }
      predictionx -= parseInt(`${predictionx}`);
    const maxEpisode = (foundSource?.url_count ?? 1) - 1;

       let dragR = 4.0;
       let memberw = 0;
      for (let m = 0; m < 3; m++) {
         dragR /= Math.max(parseFloat(`${parseInt(`${dragR}`) >> (Math.min(2, Math.abs(1)))}`), 5);
      }
          let currentE = String.fromCharCode(98,97,107,101,100,95,48,95,52,51,0);
          let common_ = 3.0;
         memberw -= 2 - parseInt(`${common_}`);
         currentE += `${currentE.length}`;
         common_ -= parseFloat(`${currentE.length}`);
      changeW = !sinaP;
   let sigmobm = changeW ? !changeW : changeW;
   do {
      changeW = String.fromCharCode(76,0) == dplusA;
      if (sigmobm) {
         break;
      }
   } while ((changeW) && sigmobm);
      sentryt += `${((sansU ? 1 : 3) << (Math.min(Math.abs(parseInt(`${rewardD}`)), 5)))}`;
      rewardD /= Math.max(3, (parseFloat(`${(backc ? 4 : 5) * 2}`)));
      sinaP = (!changeW ? sinaP : !changeW);
      dplusA += "1";
    const reduxCurrentEpisode = vod?.episodeWatched ?? 1;

   for (let n = 0; n < 2; n++) {
       let dragB = 2;
       let backwardp = 2.0;
       let handlerY = false;
       let twittern: Array<any> = [917, 22];
          let ajaxQ = false;
         backwardp += parseFloat(`${3 / (Math.max(3, twittern.length))}`);
         ajaxQ = !ajaxQ || ajaxQ;
      while ((twittern.length ^ 3) == 4 || (3 ^ twittern.length) == 3) {
         twittern = [twittern.length ^ dragB];
         break;
      }
         backwardp /= Math.max(parseFloat(`${twittern.length}`), 3);
          let stringss: Array<any> = [785, 329, 34];
          let recommendationY = 4.0;
          let footballZ: Map<any, any> = new Map([[String.fromCharCode(111,114,100,101,114,105,110,103,95,57,95,57,51,0),917], [String.fromCharCode(112,111,115,105,116,105,111,110,105,110,103,95,121,95,52,51,0),166], [String.fromCharCode(105,102,97,100,100,114,115,95,113,95,57,49,0),926]]);
         handlerY = !handlerY;
         stringss.push(footballZ.size + 2);
         recommendationY *= parseFloat(`${stringss.length - 3}`);
         footballZ.set(`${stringss.length}`, footballZ.size);
      for (let a = 0; a < 2; a++) {
         handlerY = backwardp < 100.53 && handlerY;
      }
      while (handlerY && (backwardp / 5.53) < 2.89) {
         backwardp -= parseFloat(`${1 + parseInt(`${backwardp}`)}`);
         break;
      }
         backwardp /= Math.max(parseFloat(`${parseInt(`${backwardp}`) - 3}`), 4);
         backwardp *= parseFloat(`${1 - twittern.length}`);
         handlerY = !handlerY;
      for (let a = 0; a < 1; a++) {
         handlerY = dragB <= 28 && backwardp <= 67.47;
      }
      if ((backwardp / 5.44) > 3.79) {
         backwardp += parseFloat(`${parseInt(`${backwardp}`)}`);
      }
         backwardp -= parseFloat(`${dragB | parseInt(`${backwardp}`)}`);
      debugY.push((parseInt(`${rewardD}`) | (typingg ? 2 : 4)));
   }
   let progressB = typingg ? !typingg : typingg;
   do {
      typingg = (dplusA.length >> (Math.min(nalyticsq.length, 4))) > 35;
      if (progressB) {
         break;
      }
   } while ((typingg && !backc) && progressB);
       let ballm = String.fromCharCode(115,101,109,97,110,116,105,99,97,108,108,121,95,102,95,49,52,0);
       let rightX: Map<any, any> = new Map([[String.fromCharCode(111,95,54,55,95,97,108,101,114,116,0),false ], [String.fromCharCode(115,111,99,107,101,116,95,109,95,54,0),true ], [String.fromCharCode(116,101,115,116,111,114,105,103,95,54,95,52,49,0),false ]]);
          let settings8: Array<any> = [String.fromCharCode(109,95,52,54,95,105,111,101,114,114,0), String.fromCharCode(97,95,49,50,95,120,117,118,109,118,115,0)];
          let countdownl = String.fromCharCode(115,119,105,116,99,104,101,100,95,56,95,55,51,0);
          let showw = String.fromCharCode(107,95,55,52,95,99,97,110,110,111,116,0);
         rightX = new Map([[showw, (countdownl == String.fromCharCode(54,0) ? countdownl.length : showw.length)]]);
         settings8.push(settings8.length);
         rightX = new Map([[`${rightX.size}`, ballm.length << (Math.min(Math.abs(3), 2))]]);
       let textl = String.fromCharCode(114,95,51,50,95,112,107,103,99,111,110,102,105,103,0);
         rightX.set(`${ballm}`, rightX.size / (Math.max(ballm.length, 8)));
      if (2 < (rightX.size & ballm.length)) {
         ballm += `${(String.fromCharCode(56,0) == ballm ? ballm.length : textl.length)}`;
      }
      for (let h = 0; h < 2; h++) {
         textl += `${rightX.size + 3}`;
      }
      sansU = predictionx > 43.91;
   let pausea = backc ? !backc : backc;
   do {
      backc = !changeW;
      if (pausea) {
         break;
      }
   } while (pausea && (eventY.length > 3));
   let sellh = debugY.length <= 7303390;
   do {
      debugY = [2];
      if (sellh) {
         break;
      }
   } while (sellh && (!nalyticsq.endsWith(`${debugY.length}`)));
      dplusA += `${parseInt(`${statsJ}`)}`;
    if (reduxCurrentEpisode >= maxEpisode) {

   for (let m = 0; m < 2; m++) {
       let fastforwardr = 4.0;
          let lined = String.fromCharCode(119,95,50,54,95,99,111,110,115,111,110,97,110,116,0);
          let configs: Map<any, any> = new Map([[String.fromCharCode(116,111,116,97,108,115,95,97,95,52,55,0),245], [String.fromCharCode(104,95,54,56,95,112,114,101,117,112,100,97,116,101,0),978], [String.fromCharCode(109,118,104,100,95,55,95,49,52,0),996]]);
          let user0 = String.fromCharCode(106,95,52,53,95,103,101,116,99,117,116,0);
         fastforwardr -= 1;
         lined += `${user0.length}`;
         configs.set(`${lined}`, configs.size % (Math.max(lined.length, 3)));
         user0 = `${configs.size ^ lined.length}`;
      while ((fastforwardr + fastforwardr) <= 4.14 && 3.24 <= (4.14 - fastforwardr)) {
         fastforwardr *= 3 / (Math.max(parseInt(`${fastforwardr}`), 2));
         break;
      }
       let whistlei = 3;
      changeW = fastforwardr < 66.74;
   }
   if (nalyticsq.length == 3) {
       let sendg = false;
       let kickS: Array<any> = [853, 749, 604];
       let expiredF = 1.0;
          let colorsF: Map<any, any> = new Map([[String.fromCharCode(111,95,55,49,95,100,120,116,121,115,0),284], [String.fromCharCode(99,95,53,52,95,116,104,117,109,98,110,97,105,108,115,0),414], [String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,120,95,53,54,0),301]]);
          let backwardU: Array<any> = [405, 895];
         sendg = backwardU.length > colorsF.size;
      if (4 >= (kickS.length ^ 2)) {
         expiredF /= Math.max(kickS.length - parseInt(`${expiredF}`), 2);
      }
          let calendarg = String.fromCharCode(107,95,57,50,95,114,101,99,101,105,118,101,0);
          let slider8 = String.fromCharCode(102,95,54,53,95,112,114,105,110,116,118,97,108,0);
          let dialogc: Array<any> = [976, 136, 401];
         expiredF -= (String.fromCharCode(106,0) == slider8 ? (sendg ? 4 : 2) : slider8.length);
         calendarg = `${calendarg.length}`;
         dialogc = [(calendarg == String.fromCharCode(104,0) ? calendarg.length : dialogc.length)];
         kickS = [kickS.length | 1];
         sendg = !sendg;
         expiredF /= Math.max(2, 1);
         expiredF -= 3;
         kickS = [(kickS.length >> (Math.min(2, Math.abs((sendg ? 4 : 3)))))];
         sendg = expiredF == kickS.length;
      nalyticsq += `${1 * parseInt(`${expiredF}`)}`;
   }
   while (sentryt.length > 4) {
       let predictionW: Array<any> = [760, 854];
       let dycreator9 = String.fromCharCode(101,95,50,51,95,98,105,116,115,104,105,102,116,0);
       let rewards = 3;
         rewards += (dycreator9 == String.fromCharCode(97,0) ? predictionW.length : dycreator9.length);
      for (let n = 0; n < 2; n++) {
         predictionW.push((String.fromCharCode(78,0) == dycreator9 ? rewards : dycreator9.length));
      }
         predictionW = [rewards % 2];
       let refreshl = String.fromCharCode(106,95,57,51,95,114,101,103,105,115,116,114,121,0);
       let popupd = String.fromCharCode(103,95,51,53,95,117,110,116,114,97,99,107,0);
      let rewardU = 6995145 >= refreshl.length;
      do {
          let jnewinterstitialc = String.fromCharCode(112,105,120,102,109,116,115,95,48,95,51,50,0);
         refreshl = `${popupd.length >> (Math.min(Math.abs(3), 3))}`;
         jnewinterstitialc = `${jnewinterstitialc.length}`;
         if (rewardU) {
            break;
         }
      } while (rewardU && (!refreshl.includes(popupd)));
       let thumbnail0 = 0;
       let stylesr = 3;
         stylesr |= 1;
         dycreator9 += `${rewards + 3}`;
      for (let p = 0; p < 1; p++) {
         dycreator9 = `${1 / (Math.max(6, popupd.length))}`;
      }
      sinaP = typingg && nalyticsq.length > 50;
      break;
   }
      rewardD -= parseFloat(`${debugY.length}`);
   let ajaxS = sansU ? !sansU : sansU;
   do {
       let lineK = String.fromCharCode(112,104,111,116,111,115,95,98,95,49,54,0);
       let auto_vI = 2.0;
       let stylesS: Array<any> = [String.fromCharCode(116,114,117,110,99,97,116,101,100,95,51,95,55,48,0), String.fromCharCode(118,95,52,51,95,105,100,101,110,116,105,116,121,0)];
          let pathD: Array<any> = [369, 172, 617];
         auto_vI -= parseInt(`${auto_vI}`) * 2;
         pathD.push(1 << (Math.min(4, pathD.length)));
      if (!stylesS.includes(auto_vI)) {
         auto_vI *= 3 / (Math.max(7, lineK.length));
      }
         lineK += `${parseInt(`${auto_vI}`) ^ 3}`;
      while (4 == (4 * stylesS.length) || 5.10 == (auto_vI * 5.79)) {
         stylesS.push(1);
         break;
      }
          let flipperS: Array<any> = [486, 72, 424];
          let mintegral0 = String.fromCharCode(119,95,53,52,95,116,117,114,110,111,102,102,0);
          let privacyM = 1.0;
         auto_vI /= Math.max(2, mintegral0.length << (Math.min(Math.abs(1), 2)));
         flipperS = [flipperS.length >> (Math.min(Math.abs(1), 2))];
         mintegral0 += `${parseInt(`${privacyM}`) & flipperS.length}`;
         privacyM -= parseInt(`${privacyM}`) / 2;
       let huaweiE = String.fromCharCode(97,117,116,104,114,111,114,105,122,97,116,105,111,110,95,108,95,52,53,0);
       let activityh = String.fromCharCode(109,115,105,122,101,95,100,95,55,48,0);
       let alertf = String.fromCharCode(99,95,54,53,95,112,101,114,109,117,116,101,115,0);
      while (activityh != String.fromCharCode(77,0)) {
          let foregroundO = 4;
         lineK += `${(String.fromCharCode(77,0) == huaweiE ? foregroundO : huaweiE.length)}`;
         break;
      }
          let soundL = 3;
          let lessv = 0.0;
         stylesS.push(soundL);
         soundL &= parseInt(`${lessv}`) >> (Math.min(5, Math.abs(1)));
         lessv *= parseInt(`${lessv}`);
      sansU = (debugY.length >> (Math.min(dplusA.length, 1))) < 18;
      if (ajaxS) {
         break;
      }
   } while ((sansU) && ajaxS);
   if (2 > eventY.length) {
       let storeI = 0.0;
       let window_8c2 = String.fromCharCode(102,95,53,57,95,99,111,118,114,0);
       let matchesL = true;
       let animationw = 3;
       let bridgeS = String.fromCharCode(100,111,117,98,108,101,115,115,116,114,95,115,95,53,57,0);
      for (let b = 0; b < 1; b++) {
          let playJ = 4.0;
          let description_v9E = String.fromCharCode(113,95,51,48,95,114,101,103,105,115,116,101,114,101,114,0);
          let themeB = String.fromCharCode(111,95,53,48,95,100,111,99,116,111,116,97,108,0);
          let unselecteds: Array<any> = [503, 827, 449];
          let fullI = 1.0;
         matchesL = 35.25 > storeI;
         playJ += parseFloat(`${themeB.length & unselecteds.length}`);
         description_v9E += `${themeB.length - 1}`;
         unselecteds = [parseInt(`${fullI}`)];
         fullI *= parseFloat(`${parseInt(`${playJ}`)}`);
      }
         window_8c2 += `${bridgeS.length}`;
      for (let f = 0; f < 2; f++) {
         window_8c2 = "1";
      }
      let klevinP = 9282628 >= animationw;
      do {
         animationw |= 3 & parseInt(`${storeI}`);
         if (klevinP) {
            break;
         }
      } while (klevinP && (4 == (4 - animationw) || animationw == 4));
         matchesL = window_8c2.length >= animationw;
         storeI -= parseFloat(`${parseInt(`${storeI}`) >> (Math.min(4, Math.abs(3)))}`);
      if ((parseInt(`${storeI}`) / (Math.max(bridgeS.length, 3))) > 4) {
         bridgeS = `${bridgeS.length ^ 1}`;
      }
         window_8c2 += `${parseInt(`${storeI}`) - 3}`;
      let stationsE = storeI >= 9776877.0;
      do {
         storeI += (parseFloat(`${(matchesL ? 4 : 3) / (Math.max(parseInt(`${storeI}`), 8))}`));
         if (stationsE) {
            break;
         }
      } while (stationsE && ((window_8c2.length % (Math.max(3, 5))) > 3 || (storeI + parseFloat(`${window_8c2.length}`)) > 4.100));
         window_8c2 = `${animationw ^ 3}`;
      let mbnativeQ = window_8c2 == String.fromCharCode(100,119,56,53,51,0);
      do {
         window_8c2 = `${window_8c2.length - parseInt(`${storeI}`)}`;
         if (mbnativeQ) {
            break;
         }
      } while ((4.41 >= (storeI - parseFloat(`${window_8c2.length}`)) || (storeI - parseFloat(`${window_8c2.length}`)) >= 4.41) && mbnativeQ);
         animationw &= (String.fromCharCode(121,0) == window_8c2 ? window_8c2.length : parseInt(`${storeI}`));
      while (4 <= window_8c2.length && bridgeS != String.fromCharCode(97,0)) {
         bridgeS += "3";
         break;
      }
          let middlewareL: Map<any, any> = new Map([[String.fromCharCode(104,95,49,50,95,116,114,97,110,115,102,101,114,114,97,98,108,101,0),84], [String.fromCharCode(115,108,105,100,101,115,104,111,119,95,53,95,57,51,0),409], [String.fromCharCode(97,95,57,52,95,115,97,99,107,0),997]]);
         bridgeS = "2";
         middlewareL = new Map([[`${middlewareL.size}`, middlewareL.size]]);
         window_8c2 = `${animationw}`;
      eventY = `${bodanB.length / 2}`;
   }
      setCurrentEpisode(Math.min(maxEpisode, reduxCurrentEpisode));
    } else if (currentEpisode >= maxEpisode) {

       let otherl = String.fromCharCode(103,95,54,57,95,116,101,115,116,105,110,103,0);
       let ynews3 = 4.0;
       let vignette5 = 4.0;
          let rewardu = 3.0;
         ynews3 /= Math.max(parseFloat(`${1}`), 5);
         rewardu /= Math.max(parseInt(`${rewardu}`), 2);
         ynews3 /= Math.max(4, parseFloat(`${parseInt(`${vignette5}`) >> (Math.min(1, Math.abs(2)))}`));
      for (let g = 0; g < 2; g++) {
          let default_5T: Array<any> = [753, 317];
          let moonr = String.fromCharCode(119,95,49,49,95,115,121,110,99,119,111,114,100,115,0);
          let calendarV = String.fromCharCode(101,120,101,99,117,116,101,100,95,110,95,55,56,0);
          let episodeO = String.fromCharCode(97,95,57,95,114,101,112,114,111,99,101,115,115,0);
         ynews3 -= parseFloat(`${3 ^ default_5T.length}`);
         default_5T = [3 | moonr.length];
         moonr = `${1 / (Math.max(5, moonr.length))}`;
         calendarV = `${moonr.length}`;
         episodeO = `${calendarV.length}`;
      }
      for (let n = 0; n < 2; n++) {
          let firebasek = String.fromCharCode(102,111,114,103,111,116,95,103,95,57,56,0);
         ynews3 /= Math.max(parseFloat(`${firebasek.length}`), 2);
      }
         ynews3 *= parseFloat(`${2}`);
         vignette5 += parseFloat(`${parseInt(`${vignette5}`)}`);
          let bufferB = 3.0;
          let mappinge = String.fromCharCode(109,117,108,116,105,112,108,101,95,122,95,55,48,0);
         otherl = "1";
         bufferB /= Math.max(1, mappinge.length);
         mappinge += `${1 - mappinge.length}`;
       let termsI: Array<any> = [343, 459, 430];
         vignette5 -= (parseFloat(`${otherl == String.fromCharCode(122,0) ? otherl.length : parseInt(`${vignette5}`)}`));
      sinaP = (11 > ((!changeW ? otherl.length : 11) ^ otherl.length));
      eventY += `${(String.fromCharCode(121,0) == bodanB ? parseInt(`${statsJ}`) : bodanB.length)}`;
      changeW = bodanB == String.fromCharCode(73,0);
   for (let n = 0; n < 2; n++) {
      sentryt += "2";
   }
      sinaP = 97.59 == statsJ && backc;
      backc = !typingg;
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
        episode.status === ZRChinasame.ZRControl
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
       let textB: Map<any, any> = new Map([[String.fromCharCode(106,95,53,53,95,114,101,101,110,99,114,121,112,116,0),true ], [String.fromCharCode(121,95,54,56,95,115,105,103,112,97,115,115,0),true ], [String.fromCharCode(99,111,100,101,100,95,105,95,52,50,0),false ]]);
    let robotof: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,118,97,116,111,114,95,120,95,52,55,0),915], [String.fromCharCode(99,97,110,99,101,108,108,97,98,108,101,95,105,95,52,48,0),156], [String.fromCharCode(106,95,55,48,95,104,111,108,101,115,0),146]]);
    let delegate_c5 = String.fromCharCode(118,101,114,105,102,105,101,100,95,119,95,49,55,0);
    let thumbnailk = String.fromCharCode(111,118,101,114,95,106,95,52,54,0);
    let themeC = false;
    let disconnectedY = String.fromCharCode(101,95,49,51,95,112,105,118,111,116,0);
    let username6: Array<any> = [648, 632, 320];
    let actions4: Array<any> = [965, 115];
    let package_jx = false;
      robotof.set(delegate_c5, username6.length | 1);
      thumbnailk = `${1 & textB.size}`;

    if (vod && !isReadyPlay) {

   let whitei = themeC ? !themeC : themeC;
   do {
      themeC = username6.length <= disconnectedY.length;
      if (whitei) {
         break;
      }
   } while ((!themeC) && whitei);
      robotof.set(`${themeC}`, ((themeC ? 2 : 5) / (Math.max(2, 4))));
      tt_humidity_guide.playsPlaysTimesAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
        isXmode: adultMode,
      });

   for (let i = 0; i < 1; i++) {
       let readx = 5;
       let selectedf = String.fromCharCode(112,97,115,115,112,104,114,97,115,101,95,110,95,54,57,0);
       let injuryO = 3.0;
       let securityl = 2;
       let memberh = 0.0;
      let orangeR = 5839103.0 >= injuryO;
      do {
         injuryO += parseInt(`${memberh}`) - 1;
         if (orangeR) {
            break;
         }
      } while (orangeR && (2 > securityl));
         securityl += securityl;
         selectedf = `${readx}`;
          let vietnamq = true;
          let updates3 = false;
          let historyg = 5.0;
         selectedf += `${(3 | (vietnamq ? 2 : 2))}`;
         vietnamq = historyg > 24.28;
         updates3 = 84.46 < historyg || 84.46 < historyg;
       let injuryP: Map<any, any> = new Map([[String.fromCharCode(106,95,56,56,95,97,99,116,105,118,97,116,111,114,0),false ], [String.fromCharCode(114,95,52,55,95,112,105,110,110,101,100,0),true ]]);
         injuryO /= Math.max(1, 1);
         securityl *= parseInt(`${injuryO}`) ^ readx;
       let eighteeng = String.fromCharCode(115,116,114,105,107,101,116,104,114,111,117,103,104,95,53,95,50,57,0);
       let moviesS = String.fromCharCode(111,95,55,56,95,100,101,115,101,108,101,99,116,101,100,0);
         moviesS += "1";
      for (let j = 0; j < 2; j++) {
         moviesS += `${parseInt(`${injuryO}`) & 3}`;
      }
      let minivodf = 7494622 <= eighteeng.length;
      do {
          let q_titlel = false;
         eighteeng = `${readx % 1}`;
         q_titlel = q_titlel && !q_titlel;
         if (minivodf) {
            break;
         }
      } while (minivodf && (moviesS.length >= eighteeng.length));
      while (5 <= (selectedf.length & 1)) {
          let brightnesso: Array<any> = [598, 912, 631];
          let emojie = 2.0;
          let bannerh = 5.0;
          let logoL = String.fromCharCode(105,95,52,55,95,119,101,105,103,104,116,101,100,0);
         securityl -= 2 & injuryP.size;
         brightnesso.push(brightnesso.length);
         emojie -= parseFloat(`${2}`);
         bannerh -= parseFloat(`${2}`);
         logoL += `${parseInt(`${bannerh}`) << (Math.min(Math.abs(parseInt(`${emojie}`)), 4))}`;
         break;
      }
      for (let a = 0; a < 1; a++) {
         securityl |= securityl;
      }
      for (let h = 0; h < 3; h++) {
         memberh -= (selectedf == String.fromCharCode(115,0) ? readx : selectedf.length);
      }
      while (memberh == 2.37) {
          let module8 = String.fromCharCode(119,97,105,116,95,105,95,55,0);
         memberh -= 1;
         module8 = `${3 << (Math.min(4, module8.length))}`;
         break;
      }
      themeC = 91.58 > injuryO;
   }
      robotof = new Map([[disconnectedY, ((themeC ? 1 : 5) / (Math.max(2, 9)))]]);

      ttDownTick.playsPlaysTimesAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
        isXmode: adultMode,
      });
    }

    setReadyPlay(true);

      username6.push(delegate_c5.length);
   let policyx = 6320618 >= username6.length;
   do {
      username6.push(((themeC ? 5 : 4)));
      if (policyx) {
         break;
      }
   } while (policyx && (1 <= (delegate_c5.length & 5) && 1 <= (username6.length & 5)));

    if (shouldResumeAfterLoad && videoPlayerRef.current) {

   while (themeC && (robotof.size | 3) > 4) {
      robotof.set(disconnectedY, 1 << (Math.min(2, username6.length)));
      break;
   }
      disconnectedY += "1";
      videoPlayerRef.current?.setPause(false); 

   for (let c = 0; c < 2; c++) {
       let applicationO: Map<any, any> = new Map([[String.fromCharCode(110,95,48,95,101,110,104,97,110,99,101,114,0),true ], [String.fromCharCode(98,95,54,95,103,111,110,101,0),true ]]);
      for (let a = 0; a < 1; a++) {
         applicationO.set(`${applicationO.size}`, applicationO.size & applicationO.size);
      }
      let completes = applicationO.size <= 8799102;
      do {
         applicationO = new Map([[`${applicationO.size}`, 2]]);
         if (completes) {
            break;
         }
      } while ((2 >= applicationO.size) && completes);
      while (!Array.from(applicationO.values()).includes(applicationO.size)) {
         applicationO.set(`${applicationO.size}`, applicationO.size / 2);
         break;
      }
      textB = new Map([[`${username6.length}`, 3]]);
   }
   while (4 < disconnectedY.length && themeC) {
      disconnectedY += "1";
      break;
   }
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

    if (vodUri && vodUri !== "" && videoPlayerRef.current) {
      videoPlayerRef.current?.setPause(false);
    }
  }, [vodUri]);

  const onPressCountdown = () => {
       let googleF = String.fromCharCode(99,111,109,109,117,110,105,99,97,116,111,114,95,98,95,49,57,0);
    let umengW = 5.0;
    let zhengpian4 = true;
    let downloadedH = 5.0;
    let bottomW = 0.0;
    let entryo = 0.0;
    let collectionK = String.fromCharCode(97,95,55,50,95,114,101,101,110,116,114,97,110,116,0);
    let plashK = String.fromCharCode(100,105,109,105,115,115,95,119,95,52,55,0);
    let appsf = false;
    let diceI = 4.0;
    let filterH = String.fromCharCode(114,95,51,57,95,114,101,113,117,101,115,116,115,0);
    let skipm = String.fromCharCode(121,95,51,56,95,109,101,109,0);
    let gradlewY: Map<any, any> = new Map([[String.fromCharCode(111,95,52,57,95,97,112,101,116,97,103,0),179], [String.fromCharCode(103,95,54,55,95,100,114,111,112,111,102,102,0),421], [String.fromCharCode(101,118,112,111,114,116,95,101,95,50,54,0),76]]);
   for (let v = 0; v < 3; v++) {
      downloadedH += parseInt(`${diceI}`) / (Math.max(googleF.length, 2));
   }
       let membershipM = String.fromCharCode(101,95,49,54,95,110,111,99,104,97,110,103,101,0);
       let statisticsz = String.fromCharCode(112,95,57,55,95,99,100,120,108,0);
       let inactived = String.fromCharCode(103,97,105,110,95,112,95,56,52,0);
          let catalogs = true;
          let sharedw = String.fromCharCode(110,95,50,48,95,102,111,114,101,97,99,104,0);
         statisticsz += `${((catalogs ? 5 : 4))}`;
         catalogs = sharedw == sharedw;
      let bootsplashr = String.fromCharCode(98,119,105,105,116,117,98,100,101,0) == statisticsz;
      do {
         statisticsz = `${membershipM.length}`;
         if (bootsplashr) {
            break;
         }
      } while (bootsplashr && (statisticsz.endsWith(inactived)));
       let savei: Array<any> = [258, 867, 356];
          let questh = String.fromCharCode(110,95,54,51,95,116,114,97,99,101,114,0);
         inactived = `${statisticsz.length / 1}`;
         questh = `${questh.length}`;
      if (1 >= inactived.length) {
         savei = [(inactived == String.fromCharCode(67,0) ? savei.length : inactived.length)];
      }
      if (3 < (5 >> (Math.min(4, savei.length)))) {
         inactived = `${(statisticsz == String.fromCharCode(69,0) ? membershipM.length : statisticsz.length)}`;
      }
      for (let g = 0; g < 1; g++) {
          let plusw = String.fromCharCode(114,101,102,95,107,95,56,48,0);
         membershipM += "2";
         plusw += `${plusw.length}`;
      }
      let colorsz = membershipM.length <= 5898617;
      do {
          let auto_17h = false;
          let styley = 3.0;
         membershipM += `${3 ^ statisticsz.length}`;
         auto_17h = !auto_17h;
         styley -= (parseFloat(`${(auto_17h ? 1 : 4) + parseInt(`${styley}`)}`));
         if (colorsz) {
            break;
         }
      } while ((inactived != String.fromCharCode(101,0)) && colorsz);
         statisticsz = `${savei.length >> (Math.min(statisticsz.length, 2))}`;
      bottomW *= filterH.length << (Math.min(Math.abs(1), 1));
   while (collectionK.length > plashK.length) {
       let contextc = String.fromCharCode(114,101,108,117,95,56,95,52,51,0);
       let mimoy = String.fromCharCode(98,117,99,107,101,116,97,108,108,111,99,95,119,95,50,57,0);
      while (contextc == String.fromCharCode(115,0) && mimoy != String.fromCharCode(118,0)) {
          let vietnamm: Map<any, any> = new Map([[String.fromCharCode(116,101,120,116,98,101,95,103,95,57,51,0),630], [String.fromCharCode(102,114,101,97,100,95,109,95,53,48,0),605], [String.fromCharCode(103,95,56,55,95,115,115,114,99,115,0),86]]);
          let nativeexB = String.fromCharCode(121,95,55,57,95,102,111,111,116,101,114,0);
          let optionsv = 5.0;
          let entryQ = String.fromCharCode(109,95,51,52,95,114,112,122,97,0);
         contextc = `${contextc.length}`;
         vietnamm = new Map([[entryQ, entryQ.length]]);
         nativeexB += `${entryQ.length}`;
         optionsv += (String.fromCharCode(78,0) == entryQ ? entryQ.length : parseInt(`${optionsv}`));
         break;
      }
      for (let t = 0; t < 1; t++) {
         contextc = `${contextc.length + 2}`;
      }
         mimoy += `${(String.fromCharCode(115,0) == mimoy ? contextc.length : mimoy.length)}`;
      for (let b = 0; b < 3; b++) {
         mimoy = `${mimoy.length}`;
      }
      let chartW = 6494851 >= contextc.length;
      do {
         contextc += `${(mimoy == String.fromCharCode(97,0) ? contextc.length : mimoy.length)}`;
         if (chartW) {
            break;
         }
      } while (chartW && (contextc.length >= 4));
      if (contextc == mimoy) {
         mimoy = `${mimoy.length % 1}`;
      }
      plashK += `${plashK.length + parseInt(`${umengW}`)}`;
      break;
   }
      appsf = !appsf;
      appsf = !appsf;
       let interstitialD = 3.0;
       let blacklistz = 4;
       let actionM: Map<any, any> = new Map([[String.fromCharCode(114,95,55,51,95,97,114,116,105,115,116,0),false ], [String.fromCharCode(109,95,54,48,95,114,115,99,99,0),true ], [String.fromCharCode(105,95,51,48,95,99,111,109,112,108,101,116,101,0),false ]]);
      let telegramI = 8555343.0 >= interstitialD;
      do {
         interstitialD += parseFloat(`${actionM.size}`);
         if (telegramI) {
            break;
         }
      } while (telegramI && (5.82 < interstitialD));
         actionM.set(`${interstitialD}`, actionM.size);
         actionM = new Map([[`${blacklistz}`, blacklistz << (Math.min(3, Math.abs(1)))]]);
         blacklistz %= Math.max(1, 2 % (Math.max(parseInt(`${interstitialD}`), 9)));
      let network3 = 7677841 <= blacklistz;
      do {
         blacklistz |= parseInt(`${interstitialD}`);
         if (network3) {
            break;
         }
      } while ((2.42 >= (interstitialD * blacklistz)) && network3);
         interstitialD *= parseFloat(`${1}`);
         blacklistz %= Math.max(1, parseInt(`${interstitialD}`) & 3);
         interstitialD += parseFloat(`${actionM.size * 2}`);
      let completev = 9580755.0 >= interstitialD;
      do {
         interstitialD -= parseFloat(`${actionM.size}`);
         if (completev) {
            break;
         }
      } while (completev && ((interstitialD * 3.49) > 5.9));
      zhengpian4 = collectionK.includes(`${interstitialD}`);
      collectionK = `${collectionK.length | parseInt(`${bottomW}`)}`;
   for (let v = 0; v < 2; v++) {
      appsf = bottomW < 80.46;
   }
   let greyT = 5242125 >= plashK.length;
   do {
      plashK = "1";
      if (greyT) {
         break;
      }
   } while (greyT && (plashK.includes(`${entryo}`)));
       let handlerD = String.fromCharCode(119,95,53,56,95,105,110,118,97,108,105,100,97,116,101,0);
          let nativeexv = String.fromCharCode(115,102,114,97,109,101,95,102,95,54,56,0);
          let send_ = 4;
          let minimize4 = String.fromCharCode(100,95,54,56,95,112,101,114,105,111,100,105,99,0);
         handlerD += "3";
         nativeexv = `${(String.fromCharCode(84,0) == minimize4 ? send_ : minimize4.length)}`;
         send_ |= send_;
         handlerD += `${handlerD.length}`;
         handlerD = `${handlerD.length}`;
      collectionK += `${2 ^ parseInt(`${diceI}`)}`;
      filterH += `${parseInt(`${entryo}`) % (Math.max(parseInt(`${bottomW}`), 8))}`;
   while (5 < googleF.length && appsf) {
      googleF += `${((appsf ? 5 : 5))}`;
      break;
   }
   if (plashK.startsWith(`${zhengpian4}`)) {
      zhengpian4 = (collectionK.length + parseInt(`${bottomW}`)) == 26;
   }
      filterH += "1";
       let currentJ: Array<any> = [79, 356, 93];
       let closeI: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,115,115,95,54,95,56,52,0),String.fromCharCode(98,105,110,100,105,110,103,115,95,110,95,53,53,0)], [String.fromCharCode(108,105,115,116,101,100,95,118,95,56,51,0),String.fromCharCode(117,109,102,97,118,114,95,117,95,54,50,0)]]);
      if (Array.from(closeI.values()).includes(currentJ.length)) {
         currentJ = [closeI.size];
      }
      for (let j = 0; j < 2; j++) {
          let orientation_ = 3.0;
          let nativeO = false;
          let megaphone5 = 0;
          let userE = 0.0;
         currentJ = [1];
         orientation_ -= megaphone5 & 2;
         nativeO = (orientation_ / (Math.max(userE, 1))) < 93.88;
         megaphone5 >>= Math.min(3, Math.abs(parseInt(`${orientation_}`)));
         userE += 2 & parseInt(`${userE}`);
      }
      umengW += parseFloat(`${2 * googleF.length}`);
   if (!zhengpian4 && 1 <= googleF.length) {
      googleF = `${3 << (Math.min(Math.abs(parseInt(`${umengW}`)), 2))}`;
   }
   if (5.49 >= (umengW * 1.92)) {
      umengW *= parseFloat(`${collectionK.length / (Math.max(1, 9))}`);
   }

    setShowAdOverlay(true);

   for (let z = 0; z < 1; z++) {
      bottomW /= Math.max(3, ((zhengpian4 ? 2 : 1) - 3));
   }
   if (1 < googleF.length) {
      googleF = `${(filterH.length & (appsf ? 3 : 2))}`;
   }
   if (googleF.endsWith(filterH)) {
      googleF = `${2 >> (Math.min(5, collectionK.length))}`;
   }
   let bellu = bottomW <= 9527642.0;
   do {
      bottomW += 3;
      if (bellu) {
         break;
      }
   } while (((bottomW * umengW) <= 3.6) && bellu);
   while ((5.47 * umengW) == 3.23) {
       let listm: Map<any, any> = new Map([[String.fromCharCode(102,116,101,108,108,95,52,95,50,0),676], [String.fromCharCode(97,112,112,108,105,99,97,116,105,111,110,95,104,95,55,0),855], [String.fromCharCode(103,95,57,53,95,115,117,98,116,105,116,108,101,115,0),995]]);
       let promotiona = String.fromCharCode(115,95,54,51,95,105,109,112,111,114,116,97,98,108,101,0);
       let turn4 = 0.0;
       let toponQ: Array<any> = [405, 459, 412];
       let middlewareX: Array<any> = [640, 386];
         listm.set(`${turn4}`, toponQ.length - parseInt(`${turn4}`));
      if ((4 ^ promotiona.length) > 3) {
          let huaweiW = 1;
          let detailsz = String.fromCharCode(114,95,50,50,95,110,111,97,108,108,111,99,0);
         promotiona += `${huaweiW}`;
         huaweiW ^= 1 << (Math.min(2, detailsz.length));
         detailsz += `${detailsz.length}`;
      }
          let sheet3 = true;
          let short_clu: Map<any, any> = new Map([[String.fromCharCode(109,95,52,49,95,119,97,116,101,114,0),829], [String.fromCharCode(117,95,51,57,95,116,111,116,97,108,115,0),975]]);
          let catalogB = true;
         listm.set(`${toponQ.length}`, toponQ.length % (Math.max(3, 6)));
         sheet3 = null == short_clu.get(`${catalogB}`);
         short_clu = new Map([[`${short_clu.size}`, short_clu.size]]);
         middlewareX.push(listm.size / 1);
      for (let b = 0; b < 2; b++) {
         promotiona += `${3 / (Math.max(parseInt(`${turn4}`), 10))}`;
      }
         promotiona += "2";
          let topicw = 0;
          let notificationV: Map<any, any> = new Map([[String.fromCharCode(115,118,101,99,116,111,114,95,57,95,57,48,0),String.fromCharCode(111,95,54,51,95,118,97,114,105,110,116,0)], [String.fromCharCode(105,110,110,100,101,114,95,53,95,51,52,0),String.fromCharCode(105,100,102,97,95,111,95,54,55,0)]]);
          let kickK = String.fromCharCode(103,95,53,57,95,112,114,111,109,105,115,101,0);
         toponQ = [(promotiona == String.fromCharCode(69,0) ? promotiona.length : listm.size)];
         topicw >>= Math.min(kickK.length, 3);
         notificationV = new Map([[`${notificationV.size}`, kickK.length]]);
       let dataD = 2.0;
       let manifestv = 3.0;
       let scheduleF = 3.0;
       let o_imagez = 4.0;
      for (let o = 0; o < 1; o++) {
         o_imagez -= parseFloat(`${parseInt(`${dataD}`) ^ 1}`);
      }
         middlewareX = [middlewareX.length / (Math.max(3, 8))];
          let play3 = 0;
          let dialogU = String.fromCharCode(98,95,49,52,95,108,105,115,116,105,110,103,115,0);
         toponQ = [parseInt(`${manifestv}`) - parseInt(`${dataD}`)];
         play3 &= dialogU.length + 3;
         dialogU = "3";
         scheduleF -= parseFloat(`${toponQ.length}`);
       let with_2qR = String.fromCharCode(113,95,54,56,95,101,108,101,109,101,110,116,119,105,115,101,0);
       let dplusV = String.fromCharCode(99,108,111,117,100,95,101,95,50,53,0);
         promotiona += `${promotiona.length / (Math.max(6, with_2qR.length))}`;
      umengW -= parseFloat(`${3 % (Math.max(parseInt(`${umengW}`), 7))}`);
      break;
   }
   if (bottomW >= entryo) {
       let nalyticsi = String.fromCharCode(99,95,52,56,95,115,99,97,108,105,110,103,0);
          let layoutJ = true;
         nalyticsi = `${3 % (Math.max(9, nalyticsi.length))}`;
         nalyticsi += `${nalyticsi.length}`;
          let guidev = String.fromCharCode(101,118,111,108,118,101,95,55,95,51,51,0);
          let mathJ = String.fromCharCode(105,95,50,50,95,103,97,109,117,116,0);
          let private_as: Map<any, any> = new Map([[String.fromCharCode(121,95,51,57,95,105,110,116,101,110,116,105,111,110,0),27], [String.fromCharCode(113,95,54,50,95,100,101,108,101,116,101,0),625]]);
         nalyticsi += `${3 - mathJ.length}`;
         guidev = `${private_as.size}`;
         mathJ = `${private_as.size}`;
      entryo /= Math.max(4, nalyticsi.length ^ filterH.length);
   }
      bottomW *= parseInt(`${diceI}`) >> (Math.min(5, Math.abs(parseInt(`${bottomW}`))));
   for (let h = 0; h < 1; h++) {
      googleF += `${((zhengpian4 ? 1 : 1))}`;
   }
   if (googleF != String.fromCharCode(83,0)) {
       let activeo = true;
       let i_countt = 2.0;
       let usery = 0.0;
      for (let h = 0; h < 1; h++) {
          let i_centerM = 3.0;
         i_countt += ((activeo ? 3 : 1) << (Math.min(Math.abs(parseInt(`${i_centerM}`)), 2)));
      }
       let securityT = String.fromCharCode(119,97,116,99,104,101,114,115,95,112,95,56,53,0);
         securityT = `${securityT.length}`;
      if (i_countt <= 4.40) {
         i_countt *= (String.fromCharCode(85,0) == securityT ? securityT.length : parseInt(`${usery}`));
      }
          let signinupi = String.fromCharCode(101,95,52,52,95,112,108,117,114,97,108,105,122,101,100,0);
          let downloaderP = String.fromCharCode(115,116,101,114,101,111,95,106,95,54,0);
          let wcopy_s9l = String.fromCharCode(97,95,56,48,95,115,105,103,110,97,98,108,101,0);
         activeo = (signinupi.length << (Math.min(wcopy_s9l.length, 4))) > 12;
         signinupi += `${(String.fromCharCode(103,0) == downloaderP ? downloaderP.length : downloaderP.length)}`;
       let applicationJ = 1.0;
       let entryC = 3.0;
       let actionn = 4.0;
       let crossV = 2.0;
      let cornery = 7065922 <= securityT.length;
      do {
          let containerE: Array<any> = [830, 308, 750];
          let tailr: Map<any, any> = new Map([[String.fromCharCode(111,95,54,52,95,97,117,116,111,114,101,103,114,101,115,115,105,111,110,0),107], [String.fromCharCode(115,117,98,112,97,116,104,95,55,95,57,55,0),374]]);
         securityT += `${2 >> (Math.min(4, Math.abs(parseInt(`${crossV}`))))}`;
         containerE = [2 + containerE.length];
         tailr.set(`${containerE.length}`, 3 / (Math.max(3, containerE.length)));
         if (cornery) {
            break;
         }
      } while (cornery && ((2 | securityT.length) == 3 || (usery * securityT.length) == 5.29));
      while ((usery * 4.90) >= 2.3) {
         securityT = "3";
         break;
      }
      collectionK += `${plashK.length}`;
   }
      filterH = `${googleF.length}`;
   let buildq = 6595857.0 >= umengW;
   do {
       let default_okB = String.fromCharCode(98,95,55,52,95,105,109,101,114,0);
       let episodeL = 2.0;
      if ((parseInt(`${episodeL}`) / (Math.max(7, default_okB.length))) < 2) {
         default_okB = `${3 ^ default_okB.length}`;
      }
         default_okB = `${parseInt(`${episodeL}`) ^ default_okB.length}`;
      for (let o = 0; o < 2; o++) {
          let moviesj = String.fromCharCode(122,108,105,98,95,53,95,51,48,0);
          let projectV = String.fromCharCode(97,95,51,52,95,113,115,118,118,112,112,0);
          let profileC = true;
          let incidentH = String.fromCharCode(110,105,101,108,115,97,100,100,95,111,95,55,53,0);
          let catagoryp = String.fromCharCode(116,111,111,108,115,95,117,95,56,52,0);
         default_okB = `${3 ^ parseInt(`${episodeL}`)}`;
         moviesj = `${((profileC ? 3 : 1))}`;
         projectV = `${((profileC ? 3 : 3))}`;
         incidentH += `${(projectV == String.fromCharCode(114,0) ? projectV.length : moviesj.length)}`;
         catagoryp += `${projectV.length - 1}`;
      }
         episodeL += 3 + parseInt(`${episodeL}`);
         episodeL -= 3 * parseInt(`${episodeL}`);
         default_okB += "2";
      umengW /= Math.max(parseFloat(`${parseInt(`${bottomW}`)}`), 3);
      if (buildq) {
         break;
      }
   } while (buildq && ((2 - parseInt(`${umengW}`)) == 2 || (5.40 - umengW) == 5.41));
       let data0 = String.fromCharCode(114,95,53,50,95,102,102,105,111,0);
       let arrowa = 5.0;
         data0 = `${data0.length - 3}`;
      for (let z = 0; z < 3; z++) {
          let minimized = String.fromCharCode(100,95,55,53,95,111,116,111,98,0);
          let pageA = String.fromCharCode(121,95,53,55,95,112,101,114,115,105,115,116,101,100,0);
         arrowa /= Math.max(parseInt(`${arrowa}`), 2);
         minimized = `${minimized.length}`;
         pageA = `${3 >> (Math.min(3, minimized.length))}`;
      }
      let anytimem = String.fromCharCode(113,119,48,122,51,0) == data0;
      do {
          let blackV = String.fromCharCode(107,95,56,54,95,119,114,105,116,101,116,114,117,110,99,0);
          let navigationq = 3.0;
          let acceptedx: Array<any> = [620, 230];
         data0 = `${data0.length}`;
         blackV = `${3 * parseInt(`${navigationq}`)}`;
         navigationq += parseFloat(`${parseInt(`${navigationq}`) / (Math.max(1, acceptedx.length))}`);
         acceptedx.push(2 | parseInt(`${navigationq}`));
         if (anytimem) {
            break;
         }
      } while (anytimem && (4 >= (data0.length ^ 4) || 5.1 >= (arrowa / (Math.max(data0.length, 3)))));
      while (data0.length <= 2) {
         arrowa += data0.length;
         break;
      }
         data0 += `${3 | data0.length}`;
         data0 += `${data0.length}`;
      appsf = String.fromCharCode(122,0) == filterH;
       let sendM = String.fromCharCode(100,97,114,116,115,95,114,95,51,51,0);
       let searchP = 0;
         searchP %= Math.max(1, sendM.length);
      for (let e = 0; e < 2; e++) {
          let statisticsQ = false;
          let screenU = 5;
         sendM = `${1 + screenU}`;
         statisticsQ = !statisticsQ;
         screenU += (2 & (statisticsQ ? 2 : 1));
      }
      while (1 < (searchP ^ sendM.length)) {
          let sansm = 0;
          let searchbarv = String.fromCharCode(100,105,115,116,95,55,95,56,57,0);
         sendM += `${(String.fromCharCode(118,0) == sendM ? sansm : sendM.length)}`;
         sansm &= searchbarv.length;
         searchbarv += `${searchbarv.length | searchbarv.length}`;
         break;
      }
          let textI = String.fromCharCode(109,101,109,115,101,116,95,54,95,50,49,0);
          let baidu5: Array<any> = [725, 485, 773];
          let largeT: Array<any> = [798, 5, 737];
         sendM = `${3 / (Math.max(2, sendM.length))}`;
         textI = `${textI.length + largeT.length}`;
         baidu5.push(largeT.length % (Math.max(2, 10)));
       let module3 = String.fromCharCode(114,97,110,107,105,110,103,115,95,121,95,57,49,0);
      if (sendM.includes(`${module3.length}`)) {
          let routerL = String.fromCharCode(119,105,100,116,104,115,95,54,95,57,50,0);
          let backwardQ = String.fromCharCode(112,95,53,95,100,101,115,116,114,117,99,116,105,118,101,0);
          let mathH = String.fromCharCode(97,95,55,51,95,116,121,112,101,115,0);
          let fileU = 5.0;
         sendM += `${sendM.length | 1}`;
         routerL = "3";
         backwardQ = `${1 & backwardQ.length}`;
         mathH += `${backwardQ.length & parseInt(`${fileU}`)}`;
         fileU *= mathH.length;
      }
      umengW -= parseFloat(`${1}`);
   for (let d = 0; d < 1; d++) {
      zhengpian4 = downloadedH > 66.70;
   }
      appsf = !zhengpian4 || downloadedH > 12.91;
   let bellK = plashK == String.fromCharCode(101,112,120,113,0);
   do {
      plashK = `${filterH.length}`;
      if (bellK) {
         break;
      }
   } while ((!appsf) && bellK);
   if (4 > (googleF.length / (Math.max(8, parseInt(`${entryo}`)))) || 4.9 > (entryo / (Math.max(googleF.length, 1)))) {
      entryo += (String.fromCharCode(101,0) == collectionK ? collectionK.length : plashK.length);
   }
    videoPlayerRef.current?.setPause(true);
  };

  const onCloseAdOverlay = () => {
       let telegramL = 2.0;
    let fastn = String.fromCharCode(98,108,111,99,107,103,114,111,117,112,95,109,95,57,54,0);
    let large2 = true;
    let filterV = 5;
    let videocommon_ = String.fromCharCode(117,95,56,53,95,97,115,105,110,107,0);
    let unselected7 = true;
    let reportD = true;
    let ewarded3: Array<any> = [532, 943];
    let controlI = String.fromCharCode(103,95,54,95,101,120,97,99,116,0);
    let dicef = 3.0;
    let savei: Array<any> = [885, 597];
    let vignettet = false;
    let renewQ = 2;
    let downloadedE = String.fromCharCode(115,122,97,98,111,115,95,101,95,52,51,0);
   let huaweig = 6819669 <= filterV;
   do {
      filterV <<= Math.min(4, Math.abs(2 & videocommon_.length));
      if (huaweig) {
         break;
      }
   } while (huaweig && (5 >= (controlI.length - 2)));
      filterV >>= Math.min(4, fastn.length);
   let mutede = reportD ? !reportD : reportD;
   do {
      reportD = reportD || !unselected7;
      if (mutede) {
         break;
      }
   } while ((!controlI.includes(`${reportD}`)) && mutede);
      reportD = videocommon_.length >= 52;
       let favicon6 = 2.0;
       let tailm = String.fromCharCode(103,95,57,57,95,97,116,111,109,115,0);
      let progresso = String.fromCharCode(51,114,100,122,114,108,121,53,97,0) == tailm;
      do {
          let goall = String.fromCharCode(99,115,114,105,100,95,122,95,54,0);
          let activityX = false;
          let ewarded0 = String.fromCharCode(107,95,54,50,95,99,108,117,115,116,101,114,0);
          let const_8u = true;
          let blackliste = 4;
         tailm = `${parseInt(`${favicon6}`) ^ tailm.length}`;
         goall = "2";
         activityX = (((!activityX ? 85 : ewarded0.length) - ewarded0.length) >= 85);
         const_8u = (const_8u ? !activityX : !const_8u);
         blackliste -= 2 ^ blackliste;
         if (progresso) {
            break;
         }
      } while ((2.19 >= favicon6) && progresso);
      while (favicon6 >= 2.2) {
          let circleH = String.fromCharCode(118,95,56,95,114,97,115,116,101,114,0);
          let carousels = String.fromCharCode(109,105,110,105,109,117,109,95,101,95,50,53,0);
         favicon6 += parseFloat(`${circleH.length + 3}`);
         circleH = `${carousels.length}`;
         carousels = `${carousels.length & 1}`;
         break;
      }
          let utilsU = String.fromCharCode(120,95,49,57,95,112,111,115,116,0);
         tailm += `${parseInt(`${favicon6}`)}`;
         utilsU = `${utilsU.length % (Math.max(1, 5))}`;
         tailm = `${parseInt(`${favicon6}`)}`;
      if ((parseFloat(`${tailm.length}`) + favicon6) >= 1.54 || 4 >= (tailm.length + parseInt(`${favicon6}`))) {
         favicon6 -= parseFloat(`${tailm.length << (Math.min(Math.abs(1), 5))}`);
      }
      for (let l = 0; l < 1; l++) {
         tailm = `${tailm.length}`;
      }
      filterV &= ((large2 ? 3 : 1) << (Math.min(Math.abs(parseInt(`${dicef}`)), 5)));
   if (4 < (filterV * 3) || filterV < 3) {
      reportD = 80.48 > dicef;
   }
   if ((filterV << (Math.min(Math.abs(1), 3))) > 2 || 1 > (filterV / (Math.max(parseInt(`${telegramL}`), 9)))) {
       let weibo5 = 1.0;
       let materialo = 0.0;
       let u_centerr = 0.0;
         weibo5 *= 2 << (Math.min(Math.abs(parseInt(`${weibo5}`)), 1));
      for (let v = 0; v < 3; v++) {
          let currentO = String.fromCharCode(99,95,54,52,95,112,111,108,105,99,105,101,115,0);
         materialo /= Math.max(5, parseInt(`${u_centerr}`) + 2);
         currentO = `${1 >> (Math.min(3, currentO.length))}`;
      }
      while ((materialo - 3) <= 3.75) {
         weibo5 += parseInt(`${weibo5}`) | parseInt(`${u_centerr}`);
         break;
      }
      while ((materialo / (Math.max(4, weibo5))) == 3.74) {
          let r_count2: Map<any, any> = new Map([[String.fromCharCode(107,95,49,48,95,105,110,105,116,105,97,108,105,122,105,110,103,0),true ], [String.fromCharCode(101,120,99,101,112,116,105,111,110,115,95,118,95,56,52,0),true ]]);
          let banner6: Map<any, any> = new Map([[String.fromCharCode(119,95,51,48,95,111,98,115,101,114,118,101,100,0),String.fromCharCode(111,112,99,111,100,101,95,115,95,56,51,0)], [String.fromCharCode(104,95,50,53,95,115,116,111,114,101,100,0),String.fromCharCode(104,95,54,56,95,112,121,116,104,111,110,0)], [String.fromCharCode(116,104,101,105,114,95,104,95,55,51,0),String.fromCharCode(101,110,116,101,114,101,100,95,51,95,54,56,0)]]);
          let benefitz = String.fromCharCode(99,111,109,112,108,101,116,101,115,95,106,95,56,48,0);
         materialo += (benefitz == String.fromCharCode(54,0) ? benefitz.length : parseInt(`${u_centerr}`));
         r_count2 = new Map([[`${r_count2.size}`, banner6.size]]);
         banner6 = new Map([[`${banner6.size}`, 2 | r_count2.size]]);
         break;
      }
         materialo /= Math.max(4, parseInt(`${u_centerr}`));
         materialo /= Math.max(3, 3);
         u_centerr += parseInt(`${materialo}`) - parseInt(`${weibo5}`);
         materialo *= 2 * parseInt(`${materialo}`);
          let hooks7 = 2.0;
          let casting5 = String.fromCharCode(116,114,97,110,115,102,111,114,109,115,95,51,95,54,57,0);
          let fulli: Map<any, any> = new Map([[String.fromCharCode(104,95,49,52,95,119,101,108,115,101,110,99,100,101,109,111,0),false ], [String.fromCharCode(114,101,100,101,116,101,99,116,95,112,95,54,0),true ]]);
         u_centerr /= Math.max(1 % (Math.max(parseInt(`${materialo}`), 9)), 1);
         hooks7 *= casting5.length + 3;
         casting5 = `${casting5.length}`;
         fulli = new Map([[casting5, parseInt(`${hooks7}`)]]);
      telegramL -= videocommon_.length - 2;
   }
      videocommon_ = `${3 + controlI.length}`;
      filterV <<= Math.min(1, Math.abs(3));
       let bridgek: Map<any, any> = new Map([[String.fromCharCode(100,117,109,109,121,95,49,95,57,53,0),105], [String.fromCharCode(110,95,54,51,95,116,97,100,100,0),764]]);
       let fillH: Map<any, any> = new Map([[String.fromCharCode(97,95,54,48,95,118,101,110,117,101,115,0),String.fromCharCode(112,108,117,103,105,110,95,112,95,56,53,0)], [String.fromCharCode(98,117,114,115,116,95,53,95,51,48,0),String.fromCharCode(116,101,108,108,95,108,95,49,54,0)], [String.fromCharCode(117,95,55,55,95,114,101,102,108,0),String.fromCharCode(105,95,51,57,95,115,111,108,105,100,105,116,121,0)]]);
       let closee = String.fromCharCode(118,97,114,109,97,115,107,95,55,95,51,52,0);
      let crownx = fillH.size <= 5152967;
      do {
         fillH = new Map([[`${bridgek.size}`, 2]]);
         if (crownx) {
            break;
         }
      } while (crownx && (fillH.size <= 2));
      while (5 < closee.length) {
         fillH.set(`${closee}`, 2);
         break;
      }
          let f_centeri: Map<any, any> = new Map([[String.fromCharCode(114,101,100,101,108,101,103,97,116,101,95,101,95,57,48,0),String.fromCharCode(111,110,115,101,116,95,118,95,56,56,0)], [String.fromCharCode(114,116,99,112,95,106,95,55,53,0),String.fromCharCode(108,95,49,51,95,112,114,105,110,116,101,100,0)]]);
         fillH = new Map([[`${fillH.size}`, f_centeri.size]]);
         closee += "1";
      while (2 == (3 << (Math.min(3, closee.length)))) {
          let alertP = 3;
          let singleF = String.fromCharCode(117,108,97,119,95,117,95,52,49,0);
          let navigationH = 3.0;
         fillH = new Map([[`${fillH.size}`, fillH.size]]);
         alertP -= 2 >> (Math.min(4, singleF.length));
         singleF = "1";
         navigationH -= (String.fromCharCode(81,0) == singleF ? singleF.length : parseInt(`${navigationH}`));
         break;
      }
         fillH.set(`${bridgek.size}`, bridgek.size);
          let roundx: Array<any> = [654, 691, 466];
         closee = `${roundx.length / (Math.max(9, closee.length))}`;
          let filled9 = String.fromCharCode(99,95,51,55,95,104,105,100,105,110,103,0);
          let canvasS = String.fromCharCode(103,95,57,54,95,98,105,108,105,110,101,97,114,0);
         closee += `${fillH.size << (Math.min(Math.abs(3), 4))}`;
         filled9 = `${canvasS.length}`;
         canvasS += `${(String.fromCharCode(121,0) == filled9 ? canvasS.length : filled9.length)}`;
      for (let v = 0; v < 3; v++) {
         fillH.set(`${closee}`, bridgek.size);
      }
      videocommon_ += "1";
       let mbridgen = 5;
       let scheduleu = 1.0;
      for (let v = 0; v < 1; v++) {
         scheduleu -= parseInt(`${scheduleu}`);
      }
      let videojsQ = 6657969.0 >= scheduleu;
      do {
         scheduleu -= parseInt(`${scheduleu}`) + mbridgen;
         if (videojsQ) {
            break;
         }
      } while (videojsQ && ((scheduleu * 5.9) >= 5.73 && (2 >> (Math.min(2, Math.abs(mbridgen)))) >= 5));
      while ((2.95 * scheduleu) < 3.6 || 4.21 < (2.95 * scheduleu)) {
          let penaltyx = 4.0;
          let splashQ: Array<any> = [String.fromCharCode(115,101,114,105,97,108,105,122,101,100,95,100,95,51,57,0), String.fromCharCode(97,95,56,48,95,97,99,99,101,110,116,0)];
         mbridgen += 3;
         penaltyx *= parseFloat(`${splashQ.length}`);
         splashQ.push(2);
         break;
      }
         mbridgen <<= Math.min(1, Math.abs(3));
      for (let y = 0; y < 3; y++) {
         scheduleu += mbridgen;
      }
      while (scheduleu == 4.34) {
         mbridgen += mbridgen % (Math.max(parseInt(`${scheduleu}`), 7));
         break;
      }
      vignettet = 8.88 == dicef;
   if (dicef > 2.30) {
      unselected7 = dicef == 57.23;
   }
   while (!unselected7 || 4 <= (savei.length * 3)) {
      savei.push(((vignettet ? 5 : 4) | (large2 ? 2 : 3)));
      break;
   }

    setShowAdOverlay(false);

   let orangeg = reportD ? !reportD : reportD;
   do {
       let assistR = 4.0;
         assistR -= parseFloat(`${1}`);
       let forward3: Array<any> = [364, 84, 58];
         forward3.push(3);
      reportD = vignettet;
      if (orangeg) {
         break;
      }
   } while (orangeg && (!reportD));
   while (5.54 > (4.88 - telegramL) && !vignettet) {
      telegramL += 3 * parseInt(`${telegramL}`);
      break;
   }
      reportD = parseInt(`${dicef}`) >= controlI.length;
   let plusj = unselected7 ? !unselected7 : unselected7;
   do {
      unselected7 = fastn.length == 67;
      if (plusj) {
         break;
      }
   } while (plusj && (unselected7));
       let homeW = 1.0;
       let langy: Array<any> = [976, 287];
       let holderT: Array<any> = [384, 969];
          let gesturesd = String.fromCharCode(114,116,99,100,95,56,95,51,49,0);
         langy = [langy.length + 3];
         gesturesd += `${gesturesd.length | 3}`;
       let dycreator0 = true;
       let button0 = true;
      videocommon_ = "3";
      homeW /= Math.max(4, parseInt(`${homeW}`) / 3);
   if (!controlI.endsWith(`${savei.length}`)) {
      savei = [ewarded3.length ^ 2];
   }
      controlI = `${savei.length / (Math.max(1, 5))}`;
       let signinupG = String.fromCharCode(114,95,54,52,95,112,108,97,110,101,0);
       let navigationY: Map<any, any> = new Map([[String.fromCharCode(99,95,54,51,95,99,108,97,109,112,101,100,0),493], [String.fromCharCode(105,100,101,111,95,99,95,56,50,0),883]]);
       let shareK = true;
      while ((3 | signinupG.length) > 3 || 3 > (signinupG.length | navigationY.size)) {
         navigationY = new Map([[signinupG, (signinupG.length - (shareK ? 1 : 4))]]);
         break;
      }
         navigationY.set(`${shareK}`, ((shareK ? 4 : 5) | 3));
         shareK = null != navigationY.get(`${shareK}`);
       let stations8 = String.fromCharCode(98,95,55,48,95,100,110,115,110,97,109,101,0);
      if (1 >= stations8.length || signinupG != String.fromCharCode(72,0)) {
         stations8 += "3";
      }
      for (let i = 0; i < 1; i++) {
         navigationY.set(signinupG, navigationY.size);
      }
         stations8 = "1";
      if (signinupG.length <= navigationY.size) {
         navigationY = new Map([[`${navigationY.size}`, 2]]);
      }
      while (!shareK) {
         signinupG = "2";
         break;
      }
      dicef -= (parseFloat(`${String.fromCharCode(108,0) == signinupG ? signinupG.length : parseInt(`${dicef}`)}`));
   if (savei.length >= 1) {
      savei = [((reportD ? 2 : 5))];
   }
   let schedule4 = controlI.length <= 9679987;
   do {
       let step4 = 3.0;
          let clockZ = false;
          let thumbnailB = 3.0;
          let refreshY = String.fromCharCode(101,114,97,115,101,95,111,95,51,57,0);
         step4 += parseFloat(`${parseInt(`${step4}`)}`);
         clockZ = clockZ && 19.87 < thumbnailB;
         thumbnailB /= Math.max(1, parseFloat(`${refreshY.length - 2}`));
         refreshY = `${((clockZ ? 3 : 5) & parseInt(`${thumbnailB}`))}`;
          let termsF = false;
         step4 *= (parseFloat(`${(termsF ? 5 : 1) * parseInt(`${step4}`)}`));
      if (1.83 > (step4 / 1.60) || 2.53 > (step4 / 1.60)) {
          let signinupJ = String.fromCharCode(114,95,51,49,95,108,97,122,105,108,121,0);
         step4 -= parseFloat(`${parseInt(`${step4}`)}`);
         signinupJ += `${signinupJ.length}`;
      }
      controlI += `${parseInt(`${telegramL}`)}`;
      if (schedule4) {
         break;
      }
   } while ((unselected7 && controlI.length == 1) && schedule4);
   if (!reportD) {
      reportD = (fastn.length | ewarded3.length) < 91;
   }
   while (fastn == controlI) {
      controlI = "1";
      break;
   }
      fastn += `${2 ^ parseInt(`${dicef}`)}`;
    videoPlayerRef.current?.setPause(false);
  };

  const isEpisodeDownloaded = adultMode
    ? downloadedVod?.episodes.find((x) => x.vodUrlNid === currentEpisode)
      ?.status === ZRChinasame.ZRControl
    : downloadedVod?.episodes.find(
      (x) =>
        x.vodSourceId === currentSourceId && x.vodUrlNid === currentEpisode
    )?.status === ZRChinasame.ZRControl;

  
  
  

  const getPosition = () => {
       let n_image7 = 0.0;
    let otherP = true;
    let favoritel: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,97,114,97,110,99,101,95,118,95,56,0),739], [String.fromCharCode(107,95,57,48,95,97,103,97,105,110,0),142]]);
    let member2 = 4.0;
    let episoded: Map<any, any> = new Map([[String.fromCharCode(110,95,55,51,95,110,111,116,104,101,108,100,0),563], [String.fromCharCode(97,95,49,49,95,111,111,108,98,97,114,0),285], [String.fromCharCode(121,95,51,51,95,109,107,118,112,97,114,115,101,114,0),741]]);
    let anytimex = String.fromCharCode(115,105,103,110,95,100,95,55,0);
    let entryJ = false;
    let coreo = 1;
    let blacklistR = String.fromCharCode(100,95,57,95,111,112,101,110,0);
    let specS = 4.0;
    let toponJ = true;
    let lessP: Array<any> = [294, 604];
    let stepq: Map<any, any> = new Map([[String.fromCharCode(101,95,53,48,95,116,97,107,100,115,112,0),278], [String.fromCharCode(114,95,55,49,95,102,105,108,116,101,114,102,110,0),152], [String.fromCharCode(103,95,55,48,95,99,117,100,97,117,112,108,111,97,100,0),400]]);
   let controlj = 5584052 >= coreo;
   do {
      coreo ^= episoded.size % (Math.max(3, favoritel.size));
      if (controlj) {
         break;
      }
   } while (controlj && (1 >= coreo || 2 >= (1 << (Math.min(4, Math.abs(coreo))))));
      coreo += (1 - (toponJ ? 5 : 4));
      coreo ^= 3;
      episoded = new Map([[`${favoritel.size}`, 3]]);
       let controla = String.fromCharCode(111,119,110,101,114,115,104,105,112,95,53,95,54,56,0);
      while (controla.length >= 3) {
         controla = `${1 / (Math.max(3, controla.length))}`;
         break;
      }
         controla += `${(controla == String.fromCharCode(65,0) ? controla.length : controla.length)}`;
          let castl: Array<any> = [162, 833];
          let sportsx: Array<any> = [276, 237, 557];
         controla += `${(controla == String.fromCharCode(108,0) ? controla.length : castl.length)}`;
         castl = [sportsx.length];
         sportsx = [2];
      member2 -= (parseInt(`${n_image7}`) - (entryJ ? 1 : 4));

    if (componentRef.current != null) {

      blacklistR = `${coreo}`;
   for (let y = 0; y < 2; y++) {
      toponJ = toponJ || 24.64 > n_image7;
   }
   while (!entryJ) {
      entryJ = 42.39 == specS || !toponJ;
      break;
   }
   if (5.40 == (4.77 * member2)) {
       let filter7: Map<any, any> = new Map([[String.fromCharCode(102,108,97,99,101,110,99,95,109,95,54,51,0),753], [String.fromCharCode(109,102,113,101,95,118,95,54,0),715]]);
       let controlsL: Map<any, any> = new Map([[String.fromCharCode(115,97,100,98,95,110,95,52,53,0),817], [String.fromCharCode(99,111,110,116,101,120,116,115,95,105,95,51,56,0),599], [String.fromCharCode(101,95,52,53,95,108,101,114,112,102,0),264]]);
       let lessO = 1.0;
       let gradlewK: Map<any, any> = new Map([[String.fromCharCode(99,95,51,49,95,100,118,97,117,100,105,111,0),611], [String.fromCharCode(118,95,49,48,95,97,121,98,114,105,0),331]]);
       let renewK = false;
         renewK = gradlewK.size < 20 && renewK;
          let hooksG = 1.0;
         controlsL = new Map([[`${controlsL.size}`, parseInt(`${lessO}`) + 1]]);
         hooksG += parseFloat(`${parseInt(`${hooksG}`)}`);
          let less_ = String.fromCharCode(114,101,103,105,115,116,101,114,115,95,105,95,52,0);
          let corea: Array<any> = [856, 699, 900];
         filter7.set(`${lessO}`, parseInt(`${lessO}`));
         less_ = `${less_.length & corea.length}`;
         corea = [corea.length];
       let team0 = false;
       let confirmationj = true;
      while (gradlewK.get(`${lessO}`) != null) {
         gradlewK.set(`${lessO}`, ((team0 ? 1 : 5) - parseInt(`${lessO}`)));
         break;
      }
      for (let d = 0; d < 3; d++) {
         renewK = !confirmationj || filter7.size == 17;
      }
       let blacklista = false;
          let detailsO = 3;
          let countdownn = 5.0;
          let applen = String.fromCharCode(117,110,115,116,97,107,101,95,100,95,56,49,0);
         gradlewK = new Map([[`${confirmationj}`, parseInt(`${lessO}`) >> (Math.min(2, Math.abs(3)))]]);
         detailsO /= Math.max(3, 2 >> (Math.min(4, applen.length)));
         countdownn *= parseInt(`${countdownn}`);
         applen += `${detailsO & 1}`;
      if (!confirmationj || blacklista) {
          let mbridgeF = String.fromCharCode(115,112,111,105,108,101,114,95,116,95,50,52,0);
          let suggestionN = String.fromCharCode(105,110,99,114,101,109,101,110,116,95,118,95,56,0);
          let mailM = true;
          let u_image3 = 1.0;
         confirmationj = !team0;
         mbridgeF += `${mbridgeF.length}`;
         suggestionN += `${((mailM ? 3 : 4) - suggestionN.length)}`;
         mailM = suggestionN.length == 49 && 49 == mbridgeF.length;
         u_image3 /= Math.max(2, 1);
      }
          let with_okc: Map<any, any> = new Map([[String.fromCharCode(98,117,102,108,101,110,95,119,95,56,56,0),true ], [String.fromCharCode(102,95,53,53,95,112,107,99,114,121,112,116,0),false ]]);
          let result8 = String.fromCharCode(101,116,104,101,114,116,117,112,108,105,115,95,108,95,52,50,0);
          let calendarE = String.fromCharCode(115,99,99,111,110,102,105,103,95,101,95,54,51,0);
         controlsL = new Map([[`${blacklista}`, (parseInt(`${lessO}`) & (blacklista ? 5 : 2))]]);
         with_okc.set(`${calendarE}`, 1 >> (Math.min(4, Math.abs(with_okc.size))));
         result8 += `${with_okc.size / (Math.max(1, result8.length))}`;
         calendarE = `${calendarE.length}`;
         confirmationj = (((!blacklista ? 74 : gradlewK.size) * gradlewK.size) < 74);
      let historyr = filter7.size <= 8342197;
      do {
          let signinupk = String.fromCharCode(101,95,53,51,95,98,101,110,105,103,110,0);
          let helperg = 2.0;
          let bellE: Array<any> = [246, 415];
          let sentryM = 5.0;
         filter7.set(`${confirmationj}`, gradlewK.size);
         signinupk += `${1 * signinupk.length}`;
         helperg *= parseFloat(`${parseInt(`${helperg}`) << (Math.min(Math.abs(1), 3))}`);
         bellE = [3];
         sentryM += 3;
         if (historyr) {
            break;
         }
      } while (historyr && (!confirmationj));
         filter7 = new Map([[`${filter7.size}`, filter7.size]]);
      let combine3 = 9162938 >= controlsL.size;
      do {
         controlsL.set(`${renewK}`, 1);
         if (combine3) {
            break;
         }
      } while ((1 >= (2 | filter7.size)) && combine3);
      for (let e = 0; e < 1; e++) {
         filter7.set(`${blacklista}`, ((blacklista ? 2 : 3) - (confirmationj ? 4 : 1)));
      }
      entryJ = (82 > (filter7.size >> (Math.min(3, Math.abs((toponJ ? filter7.size : 82))))));
   }
   for (let v = 0; v < 2; v++) {
      anytimex += `${3 - parseInt(`${specS}`)}`;
   }
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {

       let goal8 = String.fromCharCode(111,95,52,48,95,99,111,110,102,108,105,99,116,101,100,0);
         goal8 = `${goal8.length >> (Math.min(2, goal8.length))}`;
      while (goal8 == goal8) {
          let combinei: Array<any> = [716, 534, 11];
          let spech = 5.0;
          let filedT = false;
          let delegate_wC = 0;
         goal8 += `${parseInt(`${spech}`) | delegate_wC}`;
         combinei.push((2 | (filedT ? 4 : 3)));
         spech += (parseFloat(`${3 % (Math.max(8, (filedT ? 1 : 1)))}`));
         delegate_wC *= 2 % (Math.max(7, combinei.length));
         break;
      }
      if (goal8 == goal8) {
         goal8 += `${2 & goal8.length}`;
      }
      n_image7 += 1;
   let analyticsX = lessP.length <= 5201963;
   do {
      lessP = [(String.fromCharCode(98,0) == anytimex ? parseInt(`${n_image7}`) : anytimex.length)];
      if (analyticsX) {
         break;
      }
   } while (((n_image7 / 1.53) <= 3.55) && analyticsX);
      coreo -= favoritel.size;
   while ((anytimex.length + 2) <= 2 && 5 <= (anytimex.length >> (Math.min(Math.abs(2), 3)))) {
       let clockj = 5.0;
       let filledi = 2.0;
         clockj -= 1 * parseInt(`${clockj}`);
         filledi *= 1;
      let bridgea = 9172262.0 <= clockj;
      do {
         clockj -= parseInt(`${clockj}`) % 1;
         if (bridgea) {
            break;
         }
      } while ((clockj == 1.54) && bridgea);
         filledi *= parseInt(`${filledi}`) + 2;
      for (let r = 0; r < 2; r++) {
         filledi *= parseInt(`${clockj}`);
      }
       let button6 = false;
      specS /= Math.max(parseFloat(`${parseInt(`${member2}`)}`), 4);
      break;
   }
   if (favoritel.get(`${coreo}`) != null) {
       let chath = String.fromCharCode(117,95,53,49,95,111,112,101,110,0);
          let downm = String.fromCharCode(115,95,54,51,95,117,110,115,101,110,100,0);
         chath += `${downm.length / 3}`;
      if (chath.endsWith(chath)) {
         chath = `${chath.length << (Math.min(5, chath.length))}`;
      }
         chath = `${chath.length}`;
      favoritel = new Map([[`${toponJ}`, ((toponJ ? 3 : 5) / (Math.max(parseInt(`${n_image7}`), 7)))]]);
   }
        console.log("Position:", { x, y, width, height, pageX, pageY });
        setRefPosition({ x: pageX, y: pageY, width: width, height: height });

        const screenHeight = Dimensions.get("window").height;

   let pauses = member2 <= 8981328.0;
   do {
      member2 *= lessP.length;
      if (pauses) {
         break;
      }
   } while (pauses && (blacklistR.length <= member2));
       let infoY = String.fromCharCode(115,105,103,110,117,109,95,99,95,56,53,0);
       let plashm = 3;
       let pressureW = true;
       let promotionK: Array<any> = [518, 366];
       let championz: Array<any> = [349, 257, 889];
         plashm |= ((pressureW ? 3 : 5) >> (Math.min(infoY.length, 4)));
         plashm ^= 1;
      if (2 < plashm) {
         pressureW = promotionK.length <= 41 && !pressureW;
      }
         promotionK = [championz.length];
      toponJ = specS <= 96.100 && otherP;
       let debugL = String.fromCharCode(97,112,115,95,110,95,54,53,0);
       let tumbnailo = 0.0;
       let feedbackL = String.fromCharCode(112,97,114,101,110,95,122,95,54,57,0);
          let anner1: Array<any> = [629, 580, 619];
         tumbnailo *= anner1.length;
      for (let g = 0; g < 3; g++) {
         tumbnailo += (debugL == String.fromCharCode(108,0) ? feedbackL.length : debugL.length);
      }
      if (tumbnailo <= debugL.length) {
          let skipv = String.fromCharCode(111,118,101,114,118,105,101,119,95,49,95,49,51,0);
          let selectA = 5.0;
          let agreementr: Map<any, any> = new Map([[String.fromCharCode(122,95,49,48,95,101,120,97,109,112,108,101,0),false ], [String.fromCharCode(105,109,97,103,101,95,49,95,52,49,0),false ], [String.fromCharCode(117,110,99,108,101,115,95,102,95,55,56,0),false ]]);
          let event5 = String.fromCharCode(111,95,51,49,95,105,110,115,116,97,110,99,101,0);
         tumbnailo += (debugL == String.fromCharCode(70,0) ? parseInt(`${selectA}`) : debugL.length);
         skipv += `${event5.length ^ agreementr.size}`;
         selectA -= event5.length;
         agreementr = new Map([[`${agreementr.size}`, event5.length | 3]]);
      }
      if (4.58 <= (tumbnailo - 1.99)) {
         tumbnailo -= 2 * debugL.length;
      }
          let becomeS: Array<any> = [String.fromCharCode(110,111,110,99,111,110,116,97,99,116,95,54,95,52,57,0), String.fromCharCode(100,95,57,55,95,97,116,116,114,115,0), String.fromCharCode(118,97,100,107,104,122,95,122,95,56,56,0)];
          let area4 = 3.0;
         tumbnailo += feedbackL.length;
         becomeS.push(1 << (Math.min(3, becomeS.length)));
         area4 /= Math.max(4, becomeS.length);
         debugL = `${3 ^ debugL.length}`;
       let styleso = false;
       let resultk = false;
       let controlA = false;
      if (feedbackL.endsWith(`${controlA}`)) {
         feedbackL += `${(String.fromCharCode(57,0) == debugL ? parseInt(`${tumbnailo}`) : debugL.length)}`;
      }
      episoded = new Map([[debugL, 1 % (Math.max(3, debugL.length))]]);
       let whiteG = 3;
       let dialogt = 1;
      while (dialogt < 4) {
          let o_unlocka = true;
          let miniy = 5.0;
         dialogt %= Math.max(dialogt, 4);
         o_unlocka = 46.53 > miniy;
         miniy *= parseFloat(`${parseInt(`${miniy}`) | 2}`);
         break;
      }
         dialogt += dialogt + whiteG;
      while (whiteG <= dialogt) {
         whiteG |= dialogt;
         break;
      }
         dialogt -= whiteG / (Math.max(dialogt, 5));
          let selly: Map<any, any> = new Map([[String.fromCharCode(115,116,112,115,95,100,95,49,54,0),938], [String.fromCharCode(97,114,99,104,105,116,101,99,116,117,114,101,95,111,95,55,57,0),306]]);
          let type_df: Array<any> = [353, 899, 355];
         whiteG /= Math.max(3, 2 >> (Math.min(Math.abs(whiteG), 5)));
         selly.set(`${type_df.length}`, 3);
         type_df.push(type_df.length);
         whiteG |= dialogt - whiteG;
      coreo &= 2;
   for (let y = 0; y < 1; y++) {
      entryJ = member2 < 3.90;
   }
        const distance = screenHeight - pageY - height;

      anytimex = `${parseInt(`${n_image7}`)}`;
       let emptyA: Map<any, any> = new Map([[String.fromCharCode(97,95,54,49,95,101,109,98,101,100,100,101,100,0),String.fromCharCode(108,111,99,107,115,95,55,95,52,0)], [String.fromCharCode(122,95,50,56,95,110,111,104,119,0),String.fromCharCode(119,105,110,116,104,114,101,97,100,95,52,95,57,53,0)]]);
       let screenY: Map<any, any> = new Map([[String.fromCharCode(97,100,100,114,101,115,115,101,115,95,108,95,55,54,0),false ], [String.fromCharCode(97,95,49,48,95,110,105,100,111,98,106,0),false ]]);
       let moduleb = String.fromCharCode(116,104,114,101,101,95,101,95,54,50,0);
      for (let j = 0; j < 3; j++) {
         emptyA.set(`${screenY.size}`, emptyA.size >> (Math.min(Math.abs(3), 1)));
      }
      while (2 <= (4 - emptyA.size)) {
          let viewsw: Map<any, any> = new Map([[String.fromCharCode(114,101,110,100,101,114,105,110,103,95,55,95,55,57,0),393], [String.fromCharCode(108,95,56,56,95,105,110,116,108,105,115,116,0),187], [String.fromCharCode(97,99,99,101,112,116,101,100,95,112,95,54,56,0),254]]);
          let filterZ = 1;
          let applicationx = 3.0;
          let singleP: Array<any> = [38, 516, 760];
         moduleb += `${singleP.length - parseInt(`${applicationx}`)}`;
         viewsw = new Map([[`${viewsw.size}`, filterZ]]);
         filterZ %= Math.max(3, filterZ);
         applicationx += parseFloat(`${1 - viewsw.size}`);
         singleP.push(viewsw.size / 1);
         break;
      }
      while ((moduleb.length & 5) <= 1 || (5 & moduleb.length) <= 1) {
          let ticked0 = 4;
          let settingsj: Map<any, any> = new Map([[String.fromCharCode(121,95,53,52,95,102,97,99,105,108,105,116,97,116,101,0),682], [String.fromCharCode(100,95,56,52,95,110,97,110,111,112,98,0),439]]);
         screenY.set(`${ticked0}`, screenY.size);
         ticked0 -= 2 | settingsj.size;
         settingsj = new Map([[`${settingsj.size}`, settingsj.size]]);
         break;
      }
      while (4 <= moduleb.length) {
          let string8: Map<any, any> = new Map([[String.fromCharCode(118,95,49,50,95,99,104,114,111,109,97,116,105,99,0),418], [String.fromCharCode(120,95,57,49,95,114,105,103,104,116,0),183]]);
          let bottomt = String.fromCharCode(107,95,55,56,95,100,114,97,110,100,0);
          let klevinV: Map<any, any> = new Map([[String.fromCharCode(103,95,55,55,95,109,115,105,122,101,0),495], [String.fromCharCode(113,95,52,49,95,105,110,116,101,114,114,97,99,116,105,118,101,0),766], [String.fromCharCode(114,103,116,99,95,105,95,51,0),463]]);
          let greenR = 1.0;
          let logof = true;
         screenY = new Map([[`${emptyA.size}`, ((logof ? 3 : 3) % (Math.max(emptyA.size, 4)))]]);
         string8.set(`${string8.size}`, klevinV.size);
         bottomt = `${parseInt(`${greenR}`)}`;
         klevinV.set(`${greenR}`, parseInt(`${greenR}`));
         logof = (klevinV.size + string8.size) < 71;
         break;
      }
         emptyA = new Map([[`${emptyA.size}`, 1 + screenY.size]]);
      while ((5 & emptyA.size) == 2) {
         emptyA.set(`${emptyA.size}`, 2);
         break;
      }
      for (let u = 0; u < 2; u++) {
         screenY.set(moduleb, (moduleb == String.fromCharCode(97,0) ? moduleb.length : screenY.size));
      }
      for (let z = 0; z < 2; z++) {
          let countdownX = 1.0;
         emptyA = new Map([[moduleb, parseInt(`${countdownX}`) | 2]]);
      }
      while ((moduleb.length + screenY.size) == 3) {
         screenY = new Map([[`${emptyA.size}`, 1]]);
         break;
      }
      coreo += coreo % (Math.max(3, anytimex.length));
   if ((favoritel.size - stepq.size) > 2) {
      stepq.set(`${specS}`, 3);
   }
       let links = false;
      while (!links) {
         links = !links && links;
         break;
      }
       let combinedq: Map<any, any> = new Map([[String.fromCharCode(100,101,113,117,101,117,101,95,106,95,49,55,0),872], [String.fromCharCode(115,101,109,105,98,111,108,100,95,52,95,51,53,0),987]]);
       let arrowr: Map<any, any> = new Map([[String.fromCharCode(100,105,115,115,111,108,118,101,95,56,95,53,50,0),String.fromCharCode(102,95,53,52,95,115,111,99,107,101,116,118,97,114,0)], [String.fromCharCode(110,99,98,99,95,101,95,49,53,0),String.fromCharCode(100,111,119,110,108,111,97,100,95,101,95,53,48,0)], [String.fromCharCode(111,95,50,53,95,105,110,118,97,108,105,100,97,116,101,100,0),String.fromCharCode(100,95,52,55,95,109,112,101,103,97,117,100,105,111,100,101,99,116,97,98,0)]]);
      let huaweij = combinedq.size <= 6924869;
      do {
         combinedq = new Map([[`${combinedq.size}`, 1 | combinedq.size]]);
         if (huaweij) {
            break;
         }
      } while ((links || 1 <= (combinedq.size - 1)) && huaweij);
      blacklistR = `${coreo}`;
   for (let j = 0; j < 3; j++) {
       let referrerm = false;
       let catalogB: Array<any> = [758, 992, 73];
       let mbnativeU = String.fromCharCode(117,95,51,50,95,99,111,110,102,105,103,117,114,101,100,0);
      if (!referrerm || (catalogB.length ^ 4) >= 2) {
         referrerm = !referrerm || catalogB.length >= 2;
      }
      for (let e = 0; e < 2; e++) {
         mbnativeU += "2";
      }
      let alert0 = catalogB.length >= 7745506;
      do {
          let eighteeni: Array<any> = [10, 194];
          let refreshz = 4.0;
          let helperd = String.fromCharCode(99,104,97,105,110,115,95,98,95,49,54,0);
          let downloaded9 = String.fromCharCode(97,95,53,48,95,98,97,99,107,115,112,97,99,101,0);
          let aboutP = 4;
         catalogB.push(parseInt(`${refreshz}`) >> (Math.min(downloaded9.length, 2)));
         eighteeni = [(helperd == String.fromCharCode(103,0) ? helperd.length : aboutP)];
         refreshz += parseFloat(`${aboutP ^ 2}`);
         downloaded9 = `${1 - eighteeni.length}`;
         if (alert0) {
            break;
         }
      } while ((5 < (mbnativeU.length & 1) || 4 < (catalogB.length & 1)) && alert0);
         catalogB.push((String.fromCharCode(110,0) == mbnativeU ? mbnativeU.length : catalogB.length));
      if (referrerm && 5 <= mbnativeU.length) {
          let referrern = String.fromCharCode(101,95,53,51,95,115,117,98,116,114,101,101,115,0);
         referrerm = String.fromCharCode(81,0) == referrern;
      }
         referrerm = !referrerm;
       let filledD = 4.0;
       let logout8 = 5.0;
         mbnativeU = `${parseInt(`${filledD}`) | 2}`;
         logout8 -= parseFloat(`${parseInt(`${filledD}`)}`);
      n_image7 /= Math.max(2 + lessP.length, 5);
   }
        setDistanceToBottom(distance);

   for (let c = 0; c < 1; c++) {
      coreo /= Math.max(5, lessP.length);
   }
   while (1 < (lessP.length - 3) || (lessP.length - coreo) < 3) {
      lessP.push(((entryJ ? 3 : 1) - favoritel.size));
      break;
   }
      toponJ = (((entryJ ? 67 : anytimex.length) ^ anytimex.length) >= 67);
      blacklistR = `${((otherP ? 5 : 2) << (Math.min(lessP.length, 2)))}`;
      anytimex += `${blacklistR.length}`;
        console.log("distanceToBottom");

       let heartX = String.fromCharCode(105,95,54,54,95,99,111,109,98,105,0);
       let downloadingP = 1.0;
       let plashO = false;
         downloadingP /= Math.max(parseFloat(`${1 & heartX.length}`), 4);
         heartX += `${heartX.length}`;
          let clock1 = String.fromCharCode(114,101,97,99,104,95,122,95,51,48,0);
          let download9 = String.fromCharCode(102,109,105,120,95,56,95,49,48,0);
          let savet = 3.0;
         downloadingP += parseFloat(`${heartX.length * parseInt(`${savet}`)}`);
         clock1 += `${clock1.length}`;
         download9 = `${clock1.length % 2}`;
         savet -= parseFloat(`${download9.length << (Math.min(Math.abs(2), 4))}`);
          let reducerd = String.fromCharCode(116,105,109,101,115,116,97,109,112,115,95,120,95,53,52,0);
         plashO = String.fromCharCode(119,0) == reducerd;
      let sinau = downloadingP <= 7258826.0;
      do {
         downloadingP /= Math.max(5, parseFloat(`${parseInt(`${downloadingP}`) << (Math.min(4, Math.abs(2)))}`));
         if (sinau) {
            break;
         }
      } while ((1.59 == (4.59 + downloadingP)) && sinau);
         downloadingP += (parseFloat(`${String.fromCharCode(105,0) == heartX ? parseInt(`${downloadingP}`) : heartX.length}`));
         downloadingP *= parseFloat(`${3 * parseInt(`${downloadingP}`)}`);
          let rewindi = 0.0;
         heartX += `${parseInt(`${rewindi}`) ^ 3}`;
         plashO = !plashO || heartX.length == 20;
      stepq.set(`${member2}`, parseInt(`${n_image7}`) / (Math.max(parseInt(`${member2}`), 8)));
   if (episoded.get(`${lessP.length}`) == null) {
       let anythinkN = String.fromCharCode(111,95,57,48,95,105,110,105,0);
       let stepL: Array<any> = [187, 401];
       let champion5: Array<any> = [640, 154];
       let plus0 = 2;
      while (2 < plus0) {
         plus0 <<= Math.min(2, champion5.length);
         break;
      }
         stepL.push(1 - stepL.length);
          let sourcem = 0.0;
          let mbridge_: Array<any> = [String.fromCharCode(110,95,53,48,95,115,117,98,112,97,99,107,101,116,0), String.fromCharCode(99,97,110,100,105,100,97,116,101,95,122,95,52,50,0)];
         champion5 = [1 << (Math.min(Math.abs(parseInt(`${sourcem}`)), 1))];
         sourcem /= Math.max(2, parseFloat(`${mbridge_.length}`));
         mbridge_.push(mbridge_.length);
      if (!champion5.includes(plus0)) {
          let firebase_ = true;
          let minivodC = false;
          let c_county = String.fromCharCode(115,117,103,103,101,115,116,95,121,95,56,57,0);
         plus0 ^= (1 % (Math.max(5, (minivodC ? 2 : 4))));
         firebase_ = (38 > (c_county.length ^ (firebase_ ? c_county.length : 38)));
         minivodC = !firebase_ && c_county.length < 21;
      }
         anythinkN = `${anythinkN.length}`;
         anythinkN += "3";
         anythinkN += `${champion5.length * anythinkN.length}`;
      let username8 = anythinkN == String.fromCharCode(116,115,113,100,103,104,0);
      do {
         anythinkN = `${champion5.length / (Math.max(1, 5))}`;
         if (username8) {
            break;
         }
      } while ((3 == anythinkN.length) && username8);
         champion5.push(stepL.length - champion5.length);
         anythinkN = `${1 * stepL.length}`;
      let customy = anythinkN == String.fromCharCode(99,109,117,54,107,114,116,0);
      do {
          let tooltipsS = 0.0;
          let feedback_ = 0;
          let skipQ: Map<any, any> = new Map([[String.fromCharCode(114,101,100,117,99,116,105,111,110,95,50,95,55,55,0),875], [String.fromCharCode(115,101,113,110,111,95,52,95,50,57,0),717]]);
         anythinkN = `${feedback_ | 2}`;
         tooltipsS /= Math.max(2, parseInt(`${tooltipsS}`) << (Math.min(Math.abs(skipQ.size), 5)));
         feedback_ -= skipQ.size >> (Math.min(Math.abs(1), 4));
         if (customy) {
            break;
         }
      } while (customy && (5 <= (4 - plus0) || (4 - anythinkN.length) <= 4));
       let huaweip = String.fromCharCode(105,109,112,111,114,116,97,110,99,101,95,121,95,51,0);
       let usernamev = String.fromCharCode(110,95,55,95,98,97,99,107,112,116,114,0);
      episoded.set(`${plus0}`, 1);
   }
   while (3 == (coreo * 2)) {
      entryJ = 30 > coreo;
      break;
   }
   if (1 == blacklistR.length) {
      blacklistR = "2";
   }
   if (toponJ) {
      toponJ = !toponJ && member2 >= 32.1;
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
              source={require('@static/images/toponTerms.gif')}
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
              style={{ height: 100, width: 100 }}
              source={require("@static/images/blacklistTumbnail.gif")}
              resizeMode={"contain"}
            />
          </View>
        )}
        {!dismountPlayer && isOffline && !isEpisodeDownloaded && (
          <NoConnection onClickRetry={checkConnection} isPlay={true} />
        )}

        {
          <>
            {adultMode && <VipRegisterBar />}

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
                    tt_humidity_guide.videoPlayerBannerViewAnalytics({
                      playerType: adultMode ? "xVideo" : "normal",
                      ads_id: id,
                      ads_name: name,
                      ads_slot_id: slot_id,
                      ads_title: title,
                    });
                  }}
                  onPress={({ id, name, slot_id, title }) => {
                    tt_humidity_guide.videoPlayerBannerClickAnalytics({
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
                          source={require("@static/images/tailRules.png")}
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
                          source={require("@static/images/resultFastforwardPoint.png")}
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
                          style={{ height: 100, width: 100 }}
                          source={require("@static/images/blacklistTumbnail.gif")}
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

                    ttTarget.toName("我的下载").then(() => {
                      videoPlayerRef.current?.setPause(false);
                    });
                  }}
                  activeEpisode={currentEpisode}
                  episodes={adultMode ? vod?.vod_play_list : foundSource}
                  onDownload={onDownloadVod}
                  rangeSize={EPISODE_RANGE_SIZE}
                  vodId={vod?.vod_id}
                  isVip={isVip}
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
