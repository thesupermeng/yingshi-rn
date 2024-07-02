

class VolumeTime_7 {
    static pauseBasketballSharedVertical = (contents: [number], key: number, hasEmoji: boolean) => {
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
import FavoriteButton from "../../components/button/yys_holder_button";
import FavoriteIcon from "@static/images/popupReadAnythink.svg";
import VodDetailIcon from "@static/images/graphicsSigmobRouter.svg";
import DlVodIcon from "@static/images/mbnativePlusSearchbar.svg";
import ScreenContainer from "../../components/container/yys_executor_expand";
import {
  useTheme,
  useFocusEffect,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import { yys_MinivodPangle } from "../../../yys_mimo_vignette";

import { RootStackScreenProps } from "@type/yys_settings";
import {
  yys_ConfigFound,
  yys_ActivityTumbnail,
  yys_Gemfile,
  yys_Xadsdk,
} from "@type/yys_libzeus";
import { addVodToHistory, playVod } from "@redux/actions/yys_player_style";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/yys_frame";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import {
  yys_Untick,
  yys_BorderlessLibruntimeexecutor,
} from "@redux/reducers/yys_full";
import SinaIcon from "@static/images/bdxadsdkAuto_wBackward.svg";
import WeChatIcon from "@static/images/dangerYellow.svg";
import QQIcon from "@static/images/stationLibsentryInterstitial.svg";
import PYQIcon from "@static/images/storeWindApple.svg";
import MoreArrow from "@static/images/toponLang.svg";
import SourceIcon from "@static/images/areaReadGpay.svg";
import VodEpisodeSelectionModal from "../../components/modal/yys_entry_vietnam";
import FastImage from "../../components/common/yys_vertical_collection";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  APP_NAME_CONST,
  DOWNLOAD_FEATURE_ENABLED,
  PLAY_HTTP_SERVER_PORT,
  UMENG_CHANNEL,
} from "@utility/yys_ajax_switch";
import { useQuery } from "@tanstack/react-query";
import ShowMoreVodButton from "../../components/button/yys_native_button";
import VodListVertical from "../../components/vod/yys_downloader";
import VodPlayer from "../../components/videoPlayer/yys_heji";
import { FlatList } from "react-native-gesture-handler";
import { yys_Videocommon } from "@redux/reducers/yys_libavdevice";
import BingSearch from "../../components/container/yys_skip";

import NoConnection from "../../components/common/yys_armva_classes";
import NetInfo from "@react-native-community/netinfo";
import { lockAppOrientation } from "@redux/actions/yys_comment";
import { AdsBannerContext } from "../../contexts/yys_about";
import { URL } from "react-native-url-polyfill";
import RNFetchBlob from "rn-fetch-blob";
import { BridgeServer } from "react-native-http-bridge-refurbished";
import { debounce } from "lodash";

import LinearGradient from "react-native-linear-gradient";
import VipIcon from "@static/images/feedbackComment.svg";
import AdultVideoVipModal from "../../components/modal/yys_models";
import VipRegisterBar from "../../components/adultVideo/yys_telegram";
import {
  disableAdultMode,
  enableAdultMode,
  incrementAdultVideoWatchTime,
  setIsPlayGuideShown,
  setIsPlayGuideShown2,
} from "@redux/actions/yys_runtimescheduler";

import yys_event_common from "../../../Umeng/yys_event_common";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenModel } from "@type/yys_service_setting";
import { yys_Downloader } from "@api";

import DescriptionBottomSheet from "../../components/videoPlayer/Play/yys_member_imagemanager";
import { VodDescription } from "../../components/videoPlayer/Play/vodDescription";

import { BannerContainer } from "../../components/container/yys_armva_streaming";
import { yys_StringsVignette } from "@utility/yys_ping";
import { yys_FavoriteCustom } from "@constants";
import BecomeVipOverlay from "../../components/modal/yys_next_drag";
import { yys_CurrentLang } from "../../api/yys_xadsdk_libcrashsdk";
import SimpleToast from "react-native-simple-toast";
import DownloadVodSelectionModal from "../../components/modal/yys_project_benefit";
import DeviceInfo from "react-native-device-info";
import { addVideoToDownloadThunk } from "@redux/actions/yys_root_models";
import {
  MARTextinputBackground,
  yys_TypeSelection,
  yys_LibsgcorePath,
} from "@type/yys_fast";
import { yys_StatsForm } from "@utility/yys_context_muted";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
import { yys_DetailWhistle } from "../../routes/yys_become_bootsplash";
import VipGuideModal from "../../components/modal/yys_libavfilter_dark";
import yys_Filled from "../../../AppsFlyer/yys_analytic";
import VipGuideModal2 from "../../components/modal/yys_country_title";
let insetsTop = 0;
let insetsBottom = 0;

type yys_CountdownInactive = {
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

const server = new BridgeServer(VolumeTime_7.pauseBasketballSharedVertical([-117,-105,-105,-109,-68,-112,-122,-111,-107,-118,-128,-122,-29],0xE3,false), true); 

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

  const vodReducer: yys_BorderlessLibruntimeexecutor = useAppSelector(
    ({ vodReducer }: yys_MintegralLibavdevice) => vodReducer
  );
  const vodFavouriteReducer: yys_Untick = useAppSelector(
    ({ vodFavouritesReducer }: yys_MintegralLibavdevice) => vodFavouritesReducer
  );
  const settingsReducer: yys_Videocommon = useAppSelector(
    ({ settingsReducer }: yys_MintegralLibavdevice) => settingsReducer
  );
  const userState = useSelector<yys_HejiCricket>("userReducer");
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

//   const vod = vodReducer.playVod.vod;

  const [vod, setVod] = useState(vodReducer.playVod.vod);
  
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
  const videoPlayerRef = useRef() as React.MutableRefObject<yys_CountdownInactive>;
  const currentEpisodeRef = useRef<number>();
  const currentSourceRef = useRef<number>();
  const sourceRef = useRef<FlatList>(null);

  const [dismountPlayer, setDismountPlayer] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isShowSheet, setShowSheet] = useState(false);
  const isVip = yys_RelatedTooltips.isVip(userState.user);

  const [isReadyPlay, setReadyPlay] = useState(false);

  

  const [currentSourceId, setCurrentSourceId] = useState(
    vod?.sourceWatched === undefined ? 0 : vod.sourceWatched
  );
  const [currentQuality, setCurrentQuality] = useState(
    vod?.sourceWatched === undefined ? 0 : vod.sourceWatched
  );
  const [vodSources, setVodSources] = useState<yys_Gemfile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVodPlayerLoading, setIsVodPlayerLoading] = useState(false);
  const [shouldResumeAfterLoad, setShouldResumeAfterLoad] = useState(false);

  const [isShowDescription, setShowDescription] = useState(false);
  const [isShowDlEpisode, setShowDlEpisode] = useState(false);

  const [bannerAd, setBannerAd] = useState<yys_Xadsdk>();

  const [refPosition, setRefPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const componentRef = useRef<View>(null); 
  const [vipGuideModal, setVipGuideModal] = useState(false);
  const [vipGuideModalDL, setVipGuideModalDL] = useState(false);
  const screenWidth = Dimensions.get("window");

  const downloadedVod: yys_LibsgcorePath | undefined = useAppSelector(
    ({ downloadVideoReducer }: yys_MintegralLibavdevice) => {
      return downloadVideoReducer.downloads.find(
        (download) => download.vod.vod_id === vod?.vod_id
      );
    }
  );
  const episode = adultMode
    ? downloadedVod?.episodes.find(
        (ep) =>
          ep.vodUrlNid === currentEpisode &&
          ep.status === MARTextinputBackground.MARLibjsi
      )
    : downloadedVod?.episodes.find(
        (ep) =>
          ep.vodSourceId === currentSourceId &&
          ep.vodUrlNid === currentEpisode &&
          ep.status === MARTextinputBackground.MARLibjsi
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
   getPosition();
       let friendsB = false;
    let zoomi = String.fromCharCode(114,101,102,105,100,95,101,95,55,49,0);
    let tickD: Array<any> = [String.fromCharCode(115,95,56,54,95,115,118,97,114,105,110,116,0), String.fromCharCode(120,95,56,49,95,106,97,105,108,98,114,101,97,107,0), String.fromCharCode(99,97,112,0)];
    let prediction3 = String.fromCharCode(101,95,55,56,95,99,111,110,102,108,105,99,116,115,0);
    let mbnative_ = String.fromCharCode(99,95,48,95,115,111,102,97,108,105,122,101,114,0);
    let leakchecker0 = 5.0;
    let libsentryT = String.fromCharCode(97,95,54,95,109,111,100,101,99,111,115,116,115,0);
    let largeZ = 3.0;
    let textlayoutmanagerQ = false;
      tickD.push((2 + (friendsB ? 1 : 1)));
       let commentv = 0.0;
          let inactiveo: Map<any, any> = new Map([[String.fromCharCode(101,95,50,51,95,119,104,116,120,0),465], [String.fromCharCode(108,95,50,55,95,109,97,110,105,102,101,115,116,0),665]]);
          let mutedo = 2;
          let cast4: Map<any, any> = new Map([[String.fromCharCode(112,95,57,54,95,99,105,112,104,101,114,115,0),String.fromCharCode(98,105,116,115,104,105,102,116,95,50,95,53,0)], [String.fromCharCode(106,95,48,95,99,111,109,101,0),String.fromCharCode(101,95,50,48,95,105,99,111,110,115,0)], [String.fromCharCode(97,115,99,105,105,105,110,100,101,120,0),String.fromCharCode(120,95,54,95,98,116,111,98,105,110,0)]]);
         commentv -= 1;
         inactiveo = new Map([[`${cast4.size}`, cast4.size]]);
         mutedo %= Math.max(cast4.size, 4);
         commentv *= 2;
         commentv += parseInt(`${commentv}`) - parseInt(`${commentv}`);
      zoomi += `${1 | parseInt(`${leakchecker0}`)}`;

    if (screenState.isPlayGuideShown2 == false && !isVip) {

   for (let y = 0; y < 2; y++) {
       let unimplementedviewI = 3;
      let signinupx = unimplementedviewI <= 6002190;
      do {
          let update_1s = String.fromCharCode(122,95,49,95,102,105,110,105,115,104,0);
          let become8 = 1.0;
          let libyogag = true;
         unimplementedviewI *= ((libyogag ? 5 : 2) & parseInt(`${become8}`));
         update_1s = `${(String.fromCharCode(55,0) == update_1s ? update_1s.length : update_1s.length)}`;
         become8 += parseFloat(`${update_1s.length & update_1s.length}`);
         if (signinupx) {
            break;
         }
      } while (signinupx && (unimplementedviewI > 4));
         unimplementedviewI /= Math.max(unimplementedviewI << (Math.min(Math.abs(2), 2)), 1);
         unimplementedviewI ^= unimplementedviewI;
      zoomi += `${1 ^ prediction3.length}`;
   }
   if (4 <= libsentryT.length && friendsB) {
       let navigationC = String.fromCharCode(117,95,57,53,95,112,115,100,115,112,0);
       let xvod9 = String.fromCharCode(101,95,54,51,0);
       let configC = String.fromCharCode(116,114,97,105,108,101,114,95,106,95,50,54,0);
      for (let y = 0; y < 1; y++) {
          let redirectr: Array<any> = [708, 397, 210];
          let videocommonP = 0;
          let update_xas = 4;
          let crossX = 2;
          let selectionw = 4.0;
         navigationC = `${update_xas}`;
         redirectr = [parseInt(`${selectionw}`)];
         videocommonP &= 2;
         crossX /= Math.max(3, crossX * 2);
         selectionw -= videocommonP & redirectr.length;
      }
         configC += `${3 >> (Math.min(1, navigationC.length))}`;
      let heartb = String.fromCharCode(108,103,53,49,50,117,0) == configC;
      do {
         configC = `${navigationC.length}`;
         if (heartb) {
            break;
         }
      } while ((xvod9 == configC) && heartb);
      if (5 >= navigationC.length) {
         xvod9 = `${xvod9.length}`;
      }
          let orientatione = 4.0;
          let layoutO = 2.0;
         configC = `${xvod9.length}`;
         orientatione -= parseInt(`${orientatione}`) & 2;
         layoutO /= Math.max(parseInt(`${layoutO}`) >> (Math.min(4, Math.abs(2))), 4);
      if (xvod9.includes(navigationC)) {
         navigationC = `${configC.length}`;
      }
         configC = `${configC.length}`;
         xvod9 += `${2 | xvod9.length}`;
         navigationC += `${navigationC.length}`;
      libsentryT = `${mbnative_.length << (Math.min(Math.abs(1), 2))}`;
   }
      setTimeout(() => {

      zoomi += `${((friendsB ? 5 : 4) + zoomi.length)}`;
   while (!friendsB && 5 > mbnative_.length) {
      friendsB = zoomi.length >= 83;
      break;
   }
        videoPlayerRef.current?.setPause(true); 

   let pages = 9059006.0 >= leakchecker0;
   do {
      leakchecker0 /= Math.max(5, parseFloat(`${2}`));
      if (pages) {
         break;
      }
   } while ((!friendsB) && pages);
   for (let j = 0; j < 1; j++) {
      mbnative_ += `${3 % (Math.max(2, mbnative_.length))}`;
   }
        setVipGuideModalDL(true);

   for (let e = 0; e < 2; e++) {
      zoomi = `${1 ^ mbnative_.length}`;
   }
   if (libsentryT.length >= mbnative_.length) {
      mbnative_ += "2";
   }
     
      }, 50);

       let libjsinspectorX = 4.0;
       let filterw = String.fromCharCode(114,95,55,50,95,116,98,108,101,110,100,0);
       let gestureV = String.fromCharCode(115,116,111,114,109,98,105,114,100,95,101,95,54,52,0);
         libjsinspectorX -= parseFloat(`${3 >> (Math.min(4, Math.abs(parseInt(`${libjsinspectorX}`))))}`);
       let changeT: Map<any, any> = new Map([[String.fromCharCode(116,95,50,0),true ], [String.fromCharCode(101,95,53,53,95,116,97,103,110,99,111,109,112,97,114,101,0),false ], [String.fromCharCode(109,111,110,111,116,111,110,105,116,121,95,105,95,56,53,0),false ]]);
       let security6: Map<any, any> = new Map([[String.fromCharCode(116,101,114,109,115,101,116,95,54,95,55,57,0),69], [String.fromCharCode(97,99,99,101,115,115,111,114,121,95,97,95,50,54,0),671], [String.fromCharCode(110,95,53,56,95,114,101,115,111,108,118,101,0),387]]);
         security6 = new Map([[`${changeT.size}`, 3]]);
       let icon1 = 5.0;
       let n_unlockD = 1.0;
      for (let c = 0; c < 1; c++) {
         gestureV = `${parseInt(`${libjsinspectorX}`)}`;
      }
      for (let j = 0; j < 1; j++) {
         icon1 /= Math.max(parseFloat(`${parseInt(`${libjsinspectorX}`)}`), 2);
      }
      if (4 > (parseInt(`${libjsinspectorX}`) * changeT.size)) {
         changeT = new Map([[`${security6.size}`, parseInt(`${libjsinspectorX}`) >> (Math.min(Math.abs(2), 2))]]);
      }
      if (5 <= changeT.size) {
          let countdownl = 1.0;
          let scrollviewi = 2;
          let actionsS = true;
          let cricketX = String.fromCharCode(109,117,120,101,114,115,0);
          let switch_wza = String.fromCharCode(100,95,57,57,95,109,97,115,107,101,100,99,108,97,109,112,0);
         changeT = new Map([[`${libjsinspectorX}`, parseInt(`${libjsinspectorX}`)]]);
         countdownl /= Math.max(5, parseFloat(`${cricketX.length & 3}`));
         scrollviewi ^= parseInt(`${countdownl}`) >> (Math.min(3, Math.abs(3)));
         actionsS = 93 >= scrollviewi || 93 >= cricketX.length;
         switch_wza = `${parseInt(`${countdownl}`) & 3}`;
      }
       let baidu3: Array<any> = [899, 460];
       let thailandl: Array<any> = [249, 112, 827];
      zoomi += "1";
      filterw += `${filterw.length}`;
      zoomi += `${prediction3.length | tickD.length}`;

      if (screenState.isPlayGuideShown == false && !isVip) {

      mbnative_ += `${2 << (Math.min(1, tickD.length))}`;
   let connection7 = String.fromCharCode(108,105,49,54,113,98,0) == prediction3;
   do {
      prediction3 += `${zoomi.length | 1}`;
      if (connection7) {
         break;
      }
   } while ((3 == (prediction3.length % (Math.max(3, 8)))) && connection7);
        setTimeout(() => {

   let textr = String.fromCharCode(56,53,111,110,113,0) == mbnative_;
   do {
      mbnative_ = `${libsentryT.length % (Math.max(5, tickD.length))}`;
      if (textr) {
         break;
      }
   } while (textr && (mbnative_.length >= 2 || friendsB));
   if (!libsentryT.includes(`${leakchecker0}`)) {
      libsentryT = `${1 - prediction3.length}`;
   }
          setVipGuideModal(true);

   if (zoomi.includes(`${leakchecker0}`)) {
       let ballE: Map<any, any> = new Map([[String.fromCharCode(110,95,51,57,95,112,101,111,112,108,101,0),String.fromCharCode(101,120,112,114,101,115,115,105,111,110,95,122,95,57,51,0)], [String.fromCharCode(112,97,99,107,97,103,101,95,109,95,55,54,0),String.fromCharCode(110,117,108,108,115,95,117,95,52,49,0)]]);
       let miniO = 5.0;
       let mbnativeadvancedE: Map<any, any> = new Map([[String.fromCharCode(116,104,117,109,98,110,97,105,108,115,0),510], [String.fromCharCode(110,95,53,55,95,114,97,105,115,101,0),193], [String.fromCharCode(102,95,51,54,95,97,110,115,119,101,114,115,0),63]]);
       let time_hzP = String.fromCharCode(101,95,54,53,95,115,111,114,116,105,110,103,0);
       let suggestion5: Array<any> = [307, 678, 587];
         time_hzP += `${2 & time_hzP.length}`;
          let crownW = 4;
          let sportA = 4;
          let placeholderU = String.fromCharCode(114,95,56,56,95,115,117,98,115,99,114,105,98,97,98,108,101,115,0);
         mbnativeadvancedE.set(placeholderU, placeholderU.length);
         crownW *= sportA;
          let usernamep: Array<any> = [720, 102];
          let whatsapp9 = String.fromCharCode(109,95,50,48,95,115,112,105,108,108,115,105,122,101,0);
         miniO -= parseFloat(`${whatsapp9.length}`);
         usernamep.push(3);
         whatsapp9 += `${usernamep.length >> (Math.min(5, usernamep.length))}`;
       let homek = String.fromCharCode(102,111,111,116,98,97,108,108,0);
         ballE.set(time_hzP, 2);
      while ((miniO * 1.66) < 1.48) {
          let jnewarchdefaultsl = false;
          let greyA = String.fromCharCode(116,95,56,53,95,102,97,116,97,108,0);
          let final_aQ = 1.0;
          let xvodp = String.fromCharCode(119,95,51,52,0);
          let textP = 2.0;
         miniO /= Math.max(parseFloat(`${mbnativeadvancedE.size}`), 3);
         jnewarchdefaultsl = final_aQ >= 77.100;
         greyA = `${2 / (Math.max(8, parseInt(`${final_aQ}`)))}`;
         xvodp = `${parseInt(`${final_aQ}`) + 1}`;
         textP *= (String.fromCharCode(90,0) == greyA ? greyA.length : parseInt(`${textP}`));
         break;
      }
       let feedbackU = String.fromCharCode(114,101,118,97,108,105,100,97,116,101,100,0);
      while (suggestion5.length <= 4) {
          let pathG: Array<any> = [String.fromCharCode(110,95,52,56,95,98,111,117,110,100,97,114,121,0), String.fromCharCode(116,95,52,55,95,104,105,110,116,105,110,103,0)];
          let corner9: Map<any, any> = new Map([[String.fromCharCode(99,111,108,115,107,105,112,95,105,95,55,49,0),126], [String.fromCharCode(106,95,57,51,95,116,119,111,108,111,111,112,0),854], [String.fromCharCode(107,95,56,48,95,108,97,117,110,99,104,0),578]]);
          let neonl = String.fromCharCode(119,95,50,56,0);
         suggestion5 = [homek.length];
         pathG.push(corner9.size | 1);
         corner9.set(neonl, neonl.length);
         break;
      }
      for (let j = 0; j < 3; j++) {
         miniO += parseFloat(`${1 << (Math.min(4, homek.length))}`);
      }
         suggestion5 = [1];
         feedbackU += "2";
      for (let l = 0; l < 3; l++) {
         homek += `${feedbackU.length}`;
      }
          let mbsplash0 = 4.0;
          let transfer1 = true;
          let clubv = 4.0;
         feedbackU += `${(String.fromCharCode(55,0) == feedbackU ? time_hzP.length : feedbackU.length)}`;
         mbsplash0 += parseFloat(`${parseInt(`${clubv}`)}`);
         transfer1 = mbsplash0 < 29.81;
         ballE = new Map([[time_hzP, homek.length ^ 3]]);
       let chinasameR = String.fromCharCode(109,101,115,104,101,115,95,97,95,52,52,0);
      zoomi += `${zoomi.length}`;
   }
   for (let c = 0; c < 1; c++) {
       let gpayy = String.fromCharCode(97,95,50,56,95,98,97,115,101,100,0);
       let applicationG: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,108,97,99,101,109,101,110,116,0),360], [String.fromCharCode(115,105,103,110,117,109,95,115,95,49,48,48,0),131], [String.fromCharCode(114,95,49,51,0),598]]);
       let modelsX: Array<any> = [25, 958];
       let register_ayz = String.fromCharCode(115,99,114,101,101,110,115,104,111,116,95,56,95,54,57,0);
         applicationG.set(gpayy, 2);
      for (let d = 0; d < 1; d++) {
         gpayy += `${modelsX.length / (Math.max(2, 1))}`;
      }
      let condensedU = 9763550 <= applicationG.size;
      do {
         applicationG.set(`${modelsX.length}`, modelsX.length);
         if (condensedU) {
            break;
         }
      } while ((4 <= (5 + gpayy.length)) && condensedU);
      while (register_ayz.length < modelsX.length) {
         register_ayz = `${register_ayz.length}`;
         break;
      }
      for (let p = 0; p < 3; p++) {
          let entryP = String.fromCharCode(111,116,111,105,95,57,95,53,52,0);
          let untickD = String.fromCharCode(103,95,51,55,95,109,105,99,114,111,112,104,111,110,101,0);
          let updatesV = 1;
          let malaysiax = 3.0;
         modelsX = [3];
         entryP = `${1 / (Math.max(2, updatesV))}`;
         untickD += `${(String.fromCharCode(84,0) == entryP ? untickD.length : entryP.length)}`;
         updatesV /= Math.max(5, updatesV);
         malaysiax += untickD.length;
      }
       let righth = 4.0;
       let historyK = 5.0;
          let private_ttw = String.fromCharCode(111,95,49,50,95,105,110,116,101,114,97,99,116,105,118,101,108,108,121,0);
         modelsX.push(1);
         private_ttw += `${private_ttw.length - 2}`;
          let specG = String.fromCharCode(114,101,119,105,110,100,0);
          let filterL: Array<any> = [String.fromCharCode(97,108,98,117,109,115,95,109,95,54,53,0), String.fromCharCode(111,102,102,115,101,116,95,117,95,51,51,0), String.fromCharCode(99,111,110,103,95,53,95,53,53,0)];
          let friendsS: Array<any> = [String.fromCharCode(114,101,115,105,122,101,95,111,95,49,57,0), String.fromCharCode(112,95,55,54,95,98,105,110,107,98,0), String.fromCharCode(99,111,110,102,105,103,117,114,97,116,111,114,95,100,95,54,57,0)];
         modelsX.push(applicationG.size >> (Math.min(modelsX.length, 1)));
         specG += `${friendsS.length % (Math.max(8, filterL.length))}`;
         filterL = [specG.length / 3];
         friendsS.push(specG.length);
         modelsX.push(gpayy.length / 1);
          let darkU = false;
          let launcherR = String.fromCharCode(108,95,51,95,99,108,97,115,115,0);
         gpayy = `${(2 ^ (darkU ? 1 : 3))}`;
         darkU = launcherR == launcherR;
      if (2.4 > historyK) {
         historyK += register_ayz.length >> (Math.min(3, Math.abs(applicationG.size)));
      }
       let t_count2 = true;
      mbnative_ += "1";
   }
       
        }, 20);
      }


      
    }
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
       let disconnected3: Array<any> = [429, 315];
    let configurei: Map<any, any> = new Map([[String.fromCharCode(105,115,122,101,114,111,0),17], [String.fromCharCode(114,115,104,105,102,116,95,98,95,53,51,0),779]]);
    let x_viewZ = false;
    let ballm = 0.0;
    let detailsT: Array<any> = [879, 424];
    let largeB = String.fromCharCode(104,101,118,99,112,114,101,100,0);
    let dangerU = 3.0;
    let libmapbufferjniw = 1;
    let q_lockg = true;
    let friendsk = String.fromCharCode(105,110,115,116,114,117,109,101,110,116,97,116,105,111,110,95,49,95,55,0);
    let eactH = 5.0;
    let pointh = String.fromCharCode(99,117,116,95,110,95,53,56,0);
    let roundt = true;
    let zoomI = String.fromCharCode(97,110,100,108,101,0);
    let gradlew7: Map<any, any> = new Map([[String.fromCharCode(101,95,52,52,95,97,112,112,115,0),940], [String.fromCharCode(102,95,50,51,95,112,114,111,106,101,99,116,105,111,110,0),866]]);
    let guideY = String.fromCharCode(99,114,111,115,115,95,120,95,54,57,0);
    let condensed4 = true;
   let halfY = eactH >= 7819352.0;
   do {
       let philippinesn = 5;
       let root8 = 0;
       let launchf = 0;
       let libreactnativeblob9 = String.fromCharCode(109,107,118,109,117,120,101,114,95,100,95,54,53,0);
       let leaguer = 0;
      if (launchf >= libreactnativeblob9.length) {
         launchf &= libreactnativeblob9.length << (Math.min(Math.abs(2), 1));
      }
          let u_title8: Map<any, any> = new Map([[String.fromCharCode(97,110,115,119,101,114,115,95,53,95,54,57,0),String.fromCharCode(112,114,111,102,105,108,105,110,103,95,109,95,54,53,0)], [String.fromCharCode(112,95,51,48,95,97,117,116,104,114,111,114,105,122,97,116,105,111,110,0),String.fromCharCode(114,97,98,98,105,116,95,102,95,54,52,0)], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,105,111,110,95,113,95,56,57,0),String.fromCharCode(115,95,54,48,95,100,105,105,110,0)]]);
         leaguer >>= Math.min(3, Math.abs(3 << (Math.min(2, Math.abs(u_title8.size)))));
       let showh = String.fromCharCode(113,100,101,108,116,97,95,99,95,55,52,0);
       let connection8 = String.fromCharCode(102,95,56,48,95,112,114,101,99,101,110,99,101,0);
       let darkP = String.fromCharCode(121,95,54,51,95,116,97,108,108,0);
       let lessm = String.fromCharCode(114,101,99,111,103,110,105,122,101,100,95,57,95,50,49,0);
         showh += `${leaguer + root8}`;
      while (connection8.length == 2) {
          let leakcheckerX = 0;
          let connectionV = false;
          let condensedG = 5.0;
         philippinesn += connection8.length;
         leakcheckerX /= Math.max(4, parseInt(`${condensedG}`) / 1);
         connectionV = 25 == leakcheckerX;
         condensedG += leakcheckerX << (Math.min(1, Math.abs(3)));
         break;
      }
         connection8 = `${libreactnativeblob9.length % (Math.max(4, connection8.length))}`;
       let mbsplashR: Map<any, any> = new Map([[String.fromCharCode(116,101,114,109,105,110,97,116,101,100,95,116,95,56,55,0),889], [String.fromCharCode(100,95,50,95,100,105,97,109,111,110,100,0),600], [String.fromCharCode(100,95,53,49,95,103,114,97,112,104,99,121,99,108,101,115,0),306]]);
       let clear6: Map<any, any> = new Map([[String.fromCharCode(113,95,49,50,95,100,98,108,112,0),226], [String.fromCharCode(103,95,56,55,95,97,99,116,105,118,101,109,97,112,0),763]]);
         lessm += `${mbsplashR.size % 3}`;
      while ((3 >> (Math.min(1, lessm.length))) >= 1 || 2 >= (3 >> (Math.min(4, lessm.length)))) {
         leaguer -= 1 >> (Math.min(3, Math.abs(clear6.size)));
         break;
      }
      while (!darkP.startsWith(libreactnativeblob9)) {
          let expandq = 5;
         libreactnativeblob9 = `${libreactnativeblob9.length & expandq}`;
         break;
      }
      if ((5 & leaguer) > 1) {
          let modityP = 4;
         leaguer *= launchf + libreactnativeblob9.length;
         modityP ^= 2;
      }
       let gradlew6 = 2.0;
      if (1 >= clear6.size) {
          let thailandp = true;
          let selectm = 5.0;
         clear6.set(`${selectm}`, launchf + 3);
         thailandp = (!thailandp ? !thailandp : thailandp);
         selectm -= 2;
      }
      for (let j = 0; j < 1; j++) {
          let kickN = 0.0;
         libreactnativeblob9 += `${root8}`;
         kickN *= 1;
      }
      eactH *= parseFloat(`${root8 | 2}`);
      if (halfY) {
         break;
      }
   } while (halfY && ((libmapbufferjniw * 1) > 5));
      largeB += `${parseInt(`${dangerU}`) % 3}`;

    try {

   let becomeZ = roundt ? !roundt : roundt;
   do {
       let librrc7 = String.fromCharCode(109,101,100,105,97,115,95,119,95,57,54,0);
       let dialogp = 2.0;
       let detailg = true;
       let tailW = 4;
       let downD = String.fromCharCode(105,110,116,114,111,0);
       let buildb: Array<any> = [721, 162];
         dialogp -= (parseFloat(`${tailW << (Math.min(5, Math.abs((detailg ? 5 : 4))))}`));
         tailW >>= Math.min(Math.abs(((detailg ? 3 : 2))), 2);
      let questP = 6327705 <= buildb.length;
      do {
          let i_playerX: Array<any> = [205, 351];
          let renewk = false;
         buildb = [((detailg ? 4 : 2) + buildb.length)];
         i_playerX = [(i_playerX.length / (Math.max(10, (renewk ? 4 : 1))))];
         renewk = i_playerX.length > 64 && !renewk;
         if (questP) {
            break;
         }
      } while ((2.8 <= (2.69 + dialogp) || (dialogp + parseFloat(`${buildb.length}`)) <= 2.69) && questP);
      while (librrc7.length < 3) {
          let bodanC = false;
          let dataK = String.fromCharCode(101,95,53,56,95,100,121,110,97,109,105,99,0);
         detailg = !detailg || bodanC;
         bodanC = dataK == String.fromCharCode(83,0);
         dataK = `${2 - dataK.length}`;
         break;
      }
          let ewardedX: Map<any, any> = new Map([[String.fromCharCode(119,97,118,101,102,111,114,109,97,116,101,120,95,116,95,55,49,0),true ], [String.fromCharCode(111,95,50,50,95,100,105,102,102,115,0),false ]]);
          let final_1y = 5.0;
          let borderlessO = String.fromCharCode(104,95,53,52,0);
         dialogp -= parseFloat(`${1 | parseInt(`${final_1y}`)}`);
         ewardedX = new Map([[`${ewardedX.size}`, (String.fromCharCode(100,0) == borderlessO ? ewardedX.size : borderlessO.length)]]);
         final_1y += parseFloat(`${ewardedX.size}`);
      while ((buildb.length - 2) > 4 && (2 - buildb.length) > 3) {
         buildb.push(3);
         break;
      }
      while ((buildb.length >> (Math.min(Math.abs(5), 5))) >= 4 && buildb.length >= 5) {
          let step_ = true;
         detailg = (downD.length + parseInt(`${dialogp}`)) == 33;
         step_ = (step_ ? !step_ : step_);
         break;
      }
      while (!downD.includes(`${dialogp}`)) {
         dialogp -= parseFloat(`${librrc7.length % 3}`);
         break;
      }
      while (!detailg) {
         tailW &= ((detailg ? 4 : 1) << (Math.min(buildb.length, 2)));
         break;
      }
      let unselected8 = 7624117 >= tailW;
      do {
         tailW -= (librrc7.length ^ (detailg ? 4 : 2));
         if (unselected8) {
            break;
         }
      } while (unselected8 && (5 == (tailW << (Math.min(Math.abs(3), 1))) && (tailW << (Math.min(Math.abs(3), 1))) == 2));
         librrc7 += `${downD.length}`;
          let resultu = String.fromCharCode(97,101,99,109,95,107,95,50,49,0);
          let arrowP = false;
          let episode3: Array<any> = [865, 194, 37];
         buildb.push(episode3.length);
         resultu += `${2 >> (Math.min(1, resultu.length))}`;
         arrowP = ((resultu.length + (!arrowP ? resultu.length : 87)) > 87);
         episode3 = [resultu.length];
      while (4 >= tailW) {
         tailW >>= Math.min(1, Math.abs((String.fromCharCode(77,0) == librrc7 ? librrc7.length : tailW)));
         break;
      }
         detailg = librrc7.length < buildb.length;
      roundt = configurei.size >= disconnected3.length;
      if (becomeZ) {
         break;
      }
   } while (becomeZ && (!roundt));
      q_lockg = String.fromCharCode(79,0) == largeB || 30.44 < dangerU;
      

      detailsT.push(configurei.size);
   while (eactH <= 1.59) {
       let sideA = 4.0;
      while (sideA >= 4.89) {
         sideA -= parseFloat(`${1 | parseInt(`${sideA}`)}`);
         break;
      }
      let fastg = 9254157.0 <= sideA;
      do {
         sideA /= Math.max(3, parseFloat(`${3}`));
         if (fastg) {
            break;
         }
      } while (fastg && (3.53 < (sideA / (Math.max(5, sideA))) && 5.34 < (3.53 / (Math.max(3, sideA)))));
      if (3.38 == sideA) {
         sideA += parseFloat(`${parseInt(`${sideA}`)}`);
      }
      largeB += "3";
      break;
   }
      yys_event_common.playsShareClicksAnalytics();

       let countryS = 2.0;
       let runtimeschedulerY = String.fromCharCode(114,95,49,57,95,99,111,110,116,101,110,116,108,101,115,115,0);
      while (runtimeschedulerY.startsWith(`${countryS}`)) {
         countryS += 1;
         break;
      }
       let control2 = true;
      for (let s = 0; s < 3; s++) {
         runtimeschedulerY += `${((control2 ? 3 : 2))}`;
      }
      while (runtimeschedulerY.length > 1 && control2) {
         control2 = runtimeschedulerY.length >= 7;
         break;
      }
      if (!runtimeschedulerY.startsWith(`${control2}`)) {
          let graphicsO = 4.0;
          let dropdownP = 2;
          let heartS = 5.0;
          let banner6: Map<any, any> = new Map([[String.fromCharCode(101,108,101,109,101,110,116,115,95,114,95,54,55,0),false ], [String.fromCharCode(103,95,56,50,95,115,104,117,102,102,108,101,112,108,97,110,101,115,0),true ]]);
         runtimeschedulerY = `${2 / (Math.max(parseInt(`${countryS}`), 10))}`;
         graphicsO += parseInt(`${heartS}`);
         dropdownP += banner6.size << (Math.min(Math.abs(3), 4));
         heartS *= dropdownP ^ parseInt(`${heartS}`);
         banner6.set(`${dropdownP}`, parseInt(`${graphicsO}`) | dropdownP);
      }
      for (let g = 0; g < 3; g++) {
         countryS += (String.fromCharCode(80,0) == runtimeschedulerY ? parseInt(`${countryS}`) : runtimeschedulerY.length);
      }
      q_lockg = ballm == 16.17 && String.fromCharCode(103,0) == pointh;
   for (let z = 0; z < 1; z++) {
      zoomI = `${detailsT.length}`;
   }
      

   for (let r = 0; r < 3; r++) {
       let libavutilF: Array<any> = [418, 712, 459];
       let default_s_G = false;
       let nativeexT = 2.0;
          let analyticsa = String.fromCharCode(97,116,111,109,115,0);
          let utilsj = 0.0;
         nativeexT *= (parseFloat(`${analyticsa == String.fromCharCode(87,0) ? analyticsa.length : parseInt(`${nativeexT}`)}`));
         utilsj -= parseFloat(`${parseInt(`${utilsj}`) << (Math.min(3, Math.abs(1)))}`);
      let commonQ = default_s_G ? !default_s_G : default_s_G;
      do {
         default_s_G = 74 <= libavutilF.length || nativeexT <= 76.75;
         if (commonQ) {
            break;
         }
      } while (commonQ && (!default_s_G));
      for (let e = 0; e < 1; e++) {
         default_s_G = !default_s_G;
      }
         default_s_G = libavutilF.includes(nativeexT);
      if (2.19 > (5.52 / (Math.max(4, nativeexT)))) {
         nativeexT /= Math.max(1, parseFloat(`${libavutilF.length}`));
      }
         default_s_G = (parseFloat(`${libavutilF.length}`) * nativeexT) == 43.58;
      while (!default_s_G) {
         nativeexT -= parseFloat(`${parseInt(`${nativeexT}`) * libavutilF.length}`);
         break;
      }
      if ((libavutilF.length / 4) <= 4) {
         libavutilF.push(parseInt(`${nativeexT}`));
      }
          let video8 = 1;
         libavutilF.push(video8);
      dangerU *= parseFloat(`${parseInt(`${ballm}`) + 3}`);
   }
      largeB += `${parseInt(`${ballm}`) | 3}`;

      let msg = `《${vod?.vod_name
      }》高清播放${"\n"}https://yingshi.tv/vod/play/id/${vod?.vod_id
      }/sid/${vod?.type_id}/nid/${currentEpisode + 1
      }${"\n"}${APP_NAME_CONST}-海量高清视频在线观看`;
      // let msg = `《${
      //   vod?.vod_name
      // }》高清播放${"\n"}https://yingshi.tv/index.php/vod/play/id/${
      //   vod?.vod_id
      // }/sid/1/nid/${
      //   currentEpisode + 1
      // }.html${"\n"}${APP_NAME_CONST}-海量高清视频在线观看`;

      disconnected3 = [3 % (Math.max(10, gradlew7.size))];
      zoomI += `${friendsk.length << (Math.min(5, Math.abs(parseInt(`${eactH}`))))}`;

      if (APP_NAME_CONST == "大萌影视") {
        msg = `海量视频内容 随时随地 想看就看 ${"\n"}https://xiangkantv.net/share.html`;

      zoomI += "2";
   while (friendsk.length == 3) {
      q_lockg = dangerU == 62.99;
      break;
   }
      }

      const result = await Share.share({
        message: msg,
      });

       let update_8y = 5.0;
       let taiwanY = 2.0;
       let materialg = String.fromCharCode(104,111,114,105,103,95,106,95,52,50,0);
          let reducerN = String.fromCharCode(118,102,114,101,101,0);
         taiwanY *= materialg.length;
         reducerN += `${2 ^ reducerN.length}`;
      if ((5.6 - taiwanY) < 3.98 || 5.58 < (5.6 - taiwanY)) {
         taiwanY -= parseInt(`${update_8y}`);
      }
          let detailsB = String.fromCharCode(104,95,49,95,117,110,115,101,116,0);
          let application4 = String.fromCharCode(108,95,53,50,95,116,114,97,110,115,108,105,116,101,114,97,116,105,111,110,0);
         materialg = `${detailsB.length}`;
         detailsB = `${application4.length}`;
         application4 += `${application4.length}`;
      while ((materialg.length >> (Math.min(Math.abs(2), 1))) == 5) {
          let libjsinspectorr = false;
          let catalogD = 2;
          let klevin5 = String.fromCharCode(105,110,102,108,105,103,104,116,95,112,95,52,51,0);
         materialg = `${materialg.length << (Math.min(Math.abs(1), 2))}`;
         libjsinspectorr = 60 <= catalogD && !libjsinspectorr;
         catalogD &= catalogD;
         klevin5 += `${((libjsinspectorr ? 3 : 2) | catalogD)}`;
         break;
      }
          let philippinesP = 2;
          let binddatasz = 5;
         update_8y *= parseFloat(`${3}`);
         philippinesP <<= Math.min(Math.abs(binddatasz), 2);
      for (let y = 0; y < 2; y++) {
         taiwanY /= Math.max(2, parseInt(`${taiwanY}`) - parseInt(`${update_8y}`));
      }
         update_8y -= parseFloat(`${materialg.length}`);
      while (materialg.includes(`${taiwanY}`)) {
         materialg += `${materialg.length}`;
         break;
      }
      while (2 == (4 + materialg.length) || (parseInt(`${update_8y}`) - materialg.length) == 4) {
         update_8y *= parseFloat(`${materialg.length >> (Math.min(Math.abs(2), 1))}`);
         break;
      }
      x_viewZ = ballm >= dangerU;
   let streaming5 = 6088257 >= zoomI.length;
   do {
      zoomI += `${((q_lockg ? 5 : 4) | 2)}`;
      if (streaming5) {
         break;
      }
   } while (streaming5 && ((5 % (Math.max(8, zoomI.length))) < 3 || (zoomI.length & 5) < 2));
      if (result.action === Share.sharedAction) {

      largeB += `${largeB.length / 2}`;
   let window_g70 = ballm >= 7393440.0;
   do {
      ballm -= parseFloat(`${1 ^ detailsT.length}`);
      if (window_g70) {
         break;
      }
   } while (window_g70 && ((parseInt(`${ballm}`) - guideY.length) < 4));
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

       let y_playerm = String.fromCharCode(105,95,49,57,95,115,111,98,105,110,100,0);
          let filledk = 1;
          let constantsS = String.fromCharCode(105,95,51,48,95,120,106,112,101,103,0);
         y_playerm = `${constantsS.length >> (Math.min(Math.abs(2), 3))}`;
         filledk *= filledk;
         constantsS = `${2 % (Math.max(10, filledk))}`;
      if (y_playerm.endsWith(y_playerm)) {
         y_playerm += `${y_playerm.length - y_playerm.length}`;
      }
         y_playerm += `${y_playerm.length - y_playerm.length}`;
      pointh = `${3 * libmapbufferjniw}`;
      pointh += `${disconnected3.length}`;
      Alert.alert(error.message);
    }
  };

  const checkConnection = async () => {
       let searchbaru = false;
    let popupx = 1;
    let unimplementedviewG = String.fromCharCode(122,95,52,51,95,98,108,97,107,101,115,0);
    let matchesF = String.fromCharCode(109,97,106,0);
    let containers = 3.0;
    let libavformatn: Array<any> = [220, 899, 725];
    let pauseh = String.fromCharCode(103,101,111,107,101,121,95,110,95,49,51,0);
    let logout0 = 0;
      logout0 &= ((searchbaru ? 5 : 3) % (Math.max(popupx, 9)));
      searchbaru = String.fromCharCode(121,0) == unimplementedviewG;
   while (pauseh.includes(`${containers}`)) {
       let fullv: Array<any> = [983, 669, 222];
       let moviesT = String.fromCharCode(105,110,116,114,97,120,109,98,121,95,99,95,51,48,0);
      if ((1 / (Math.max(3, fullv.length))) == 2) {
          let rewardq = String.fromCharCode(99,111,108,117,109,110,115,95,113,95,55,53,0);
          let dangert: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,0),285], [String.fromCharCode(112,114,105,110,99,105,112,97,108,95,57,95,49,55,0),382], [String.fromCharCode(116,101,109,112,111,114,97,114,121,95,122,95,54,55,0),411]]);
          let reducerh = 4.0;
         moviesT += `${dangert.size ^ 3}`;
         rewardq += `${(String.fromCharCode(85,0) == rewardq ? parseInt(`${reducerh}`) : rewardq.length)}`;
         dangert.set(rewardq, parseInt(`${reducerh}`) - 2);
      }
      while (5 > (fullv.length >> (Math.min(moviesT.length, 3))) && 1 > (5 >> (Math.min(5, fullv.length)))) {
         moviesT = `${moviesT.length % 2}`;
         break;
      }
      if (5 > (moviesT.length + 2) || 2 > (fullv.length + moviesT.length)) {
         fullv = [1 + fullv.length];
      }
         fullv = [(String.fromCharCode(118,0) == moviesT ? moviesT.length : fullv.length)];
         fullv.push(fullv.length * 1);
      let main_kl = 7602504 <= fullv.length;
      do {
          let becomeU: Array<any> = [945, 34];
          let handlerr = 1.0;
         fullv = [1 | becomeU.length];
         becomeU = [parseInt(`${handlerr}`)];
         if (main_kl) {
            break;
         }
      } while ((1 == (moviesT.length % (Math.max(1, 6))) || 1 == (fullv.length % (Math.max(10, moviesT.length)))) && main_kl);
      containers /= Math.max(3, matchesF.length & fullv.length);
      break;
   }
   if (3.69 < (containers / (Math.max(3.16, 2)))) {
      popupx %= Math.max(1, 1);
   }
   while (containers <= 1.68) {
      searchbaru = String.fromCharCode(55,0) == unimplementedviewG || 41 > matchesF.length;
      break;
   }

    const state = await NetInfo.fetch();

   while (libavformatn.length >= 4) {
       let layoute = String.fromCharCode(104,116,109,108,115,117,98,116,105,116,108,101,115,95,113,95,49,49,0);
       let anytimej = String.fromCharCode(116,104,105,114,100,95,50,95,55,51,0);
       let starA = String.fromCharCode(102,95,52,56,95,109,117,110,109,97,112,0);
       let component3: Map<any, any> = new Map([[String.fromCharCode(119,95,50,53,95,115,110,111,119,100,97,116,97,0),false ], [String.fromCharCode(99,111,109,112,108,101,116,101,95,110,95,53,48,0),false ], [String.fromCharCode(104,105,103,104,108,105,103,104,116,101,114,95,108,95,56,57,0),false ]]);
       let greenk = 5;
          let panglej: Array<any> = [String.fromCharCode(109,97,112,112,101,114,95,119,95,49,48,48,0), String.fromCharCode(115,105,122,101,115,95,98,95,51,54,0)];
         component3 = new Map([[anytimej, starA.length]]);
         panglej = [panglej.length / 2];
      let updates6 = component3.size >= 8763237;
      do {
         component3.set(`${greenk}`, greenk & component3.size);
         if (updates6) {
            break;
         }
      } while (updates6 && ((5 / (Math.max(1, layoute.length))) < 1));
       let muteda = String.fromCharCode(112,105,99,107,105,110,103,0);
       let crossZ = String.fromCharCode(122,95,56,53,95,101,114,115,105,111,110,0);
         muteda += `${layoute.length * anytimej.length}`;
      for (let w = 0; w < 1; w++) {
          let time_u7A = 5.0;
         muteda += `${greenk + 2}`;
         time_u7A *= parseFloat(`${parseInt(`${time_u7A}`) & 3}`);
      }
      while (!layoute.startsWith(`${component3.size}`)) {
         component3.set(crossZ, (String.fromCharCode(100,0) == crossZ ? greenk : crossZ.length));
         break;
      }
      if (component3.size <= 1) {
         component3 = new Map([[muteda, (String.fromCharCode(119,0) == muteda ? muteda.length : greenk)]]);
      }
          let klevinU = String.fromCharCode(105,115,108,101,97,112,95,104,95,53,54,0);
         anytimej += `${crossZ.length}`;
         klevinU += `${(klevinU == String.fromCharCode(86,0) ? klevinU.length : klevinU.length)}`;
      let reducerL = String.fromCharCode(49,115,121,121,115,49,115,0) == muteda;
      do {
          let alerts = 4;
          let eventi = String.fromCharCode(115,105,110,103,108,101,95,52,95,52,50,0);
         muteda = `${muteda.length & eventi.length}`;
         alerts -= alerts / (Math.max(2, 1));
         eventi = "2";
         if (reducerL) {
            break;
         }
      } while (reducerL && ((3 % (Math.max(9, greenk))) < 3 || (3 % (Math.max(9, greenk))) < 1));
      for (let m = 0; m < 2; m++) {
          let infoL: Map<any, any> = new Map([[String.fromCharCode(99,101,105,108,95,117,95,56,57,0),816], [String.fromCharCode(118,97,108,117,101,115,95,105,95,53,49,0),852], [String.fromCharCode(99,95,53,52,95,109,105,110,109,97,120,0),512]]);
          let holderi = String.fromCharCode(98,95,49,48,95,109,97,114,115,104,97,108,0);
         component3 = new Map([[`${infoL.size}`, (holderi == String.fromCharCode(120,0) ? infoL.size : holderi.length)]]);
      }
         crossZ = `${crossZ.length % (Math.max(1, starA.length))}`;
      let mapbufferU = 6737368 <= component3.size;
      do {
          let refreshK = true;
          let orangeN = 3;
          let benefitf: Array<any> = [String.fromCharCode(98,112,114,105,110,116,95,112,95,52,0), String.fromCharCode(102,95,54,52,95,100,101,115,112,105,108,108,0), String.fromCharCode(114,101,115,105,103,110,115,95,119,95,53,57,0)];
         component3.set(`${refreshK}`, (String.fromCharCode(115,0) == layoute ? (refreshK ? 4 : 5) : layoute.length));
         orangeN ^= orangeN;
         benefitf.push(benefitf.length);
         if (mapbufferU) {
            break;
         }
      } while (mapbufferU && (3 > (component3.size & 2) && (starA.length & component3.size) > 2));
      let delegate_ydP = crossZ == String.fromCharCode(121,116,110,52,116,114,109,52,0);
      do {
         crossZ += `${component3.size >> (Math.min(crossZ.length, 5))}`;
         if (delegate_ydP) {
            break;
         }
      } while (delegate_ydP && (anytimej.length >= 3 && crossZ.length >= 3));
         anytimej += `${1 * starA.length}`;
      let windb = String.fromCharCode(51,109,110,112,113,119,102,102,0) == muteda;
      do {
         muteda += `${component3.size}`;
         if (windb) {
            break;
         }
      } while (windb && (crossZ == muteda));
      pauseh += `${anytimej.length}`;
      break;
   }
      containers *= 1 - logout0;
   for (let j = 0; j < 1; j++) {
       let whatsappz: Map<any, any> = new Map([[String.fromCharCode(98,95,50,51,95,109,111,118,105,110,103,0),false ], [String.fromCharCode(109,95,55,54,95,106,114,101,118,100,99,116,0),false ], [String.fromCharCode(97,117,116,111,112,108,97,121,95,120,95,56,0),false ]]);
      if (3 == (whatsappz.size << (Math.min(2, Math.abs(whatsappz.size))))) {
          let graphz = String.fromCharCode(115,116,121,108,101,0);
          let valuesj = String.fromCharCode(115,95,51,95,114,101,99,112,0);
          let episodesk = String.fromCharCode(108,105,98,109,95,105,95,50,50,0);
         whatsappz.set(graphz, valuesj.length + 2);
         graphz = `${1 - episodesk.length}`;
         valuesj += `${episodesk.length}`;
      }
          let splashK = String.fromCharCode(115,95,52,55,95,118,97,114,105,97,98,105,108,105,116,121,0);
          let fastH: Array<any> = [846, 267, 281];
          let select_ = 3.0;
         whatsappz.set(`${fastH.length}`, whatsappz.size);
         splashK += "1";
         fastH.push(parseInt(`${select_}`) ^ splashK.length);
         select_ += parseInt(`${select_}`);
         whatsappz.set(`${whatsappz.size}`, whatsappz.size);
      searchbaru = pauseh.length >= 5;
   }
      containers += 2 & logout0;
      searchbaru = 93 < pauseh.length;
    const offline = !(state.isConnected && state.isInternetReachable);

       let downloadc: Array<any> = [654, 530, 767];
      while (downloadc.length >= 4) {
         downloadc.push(downloadc.length << (Math.min(Math.abs(3), 3)));
         break;
      }
         downloadc = [downloadc.length >> (Math.min(4, downloadc.length))];
      while (downloadc.length > 2) {
          let borderless1 = 0.0;
          let singaporel = String.fromCharCode(112,111,114,116,101,114,95,54,95,54,52,0);
          let statsq = 1.0;
          let themeT: Map<any, any> = new Map([[String.fromCharCode(103,95,55,55,95,100,101,108,97,116,101,100,0),20], [String.fromCharCode(115,117,98,108,97,121,101,114,115,95,109,95,52,48,0),92]]);
         downloadc.push(3);
         borderless1 += themeT.size;
         singaporel = `${singaporel.length}`;
         statsq /= Math.max(3, singaporel.length | parseInt(`${borderless1}`));
         themeT.set(singaporel, parseInt(`${borderless1}`) & singaporel.length);
         break;
      }
      libavformatn.push(2 << (Math.min(Math.abs(parseInt(`${containers}`)), 1)));
   for (let l = 0; l < 2; l++) {
      searchbaru = containers >= 9.25;
   }
       let gestureZ: Array<any> = [165, 401];
      for (let a = 0; a < 1; a++) {
         gestureZ = [gestureZ.length << (Math.min(1, gestureZ.length))];
      }
          let historyS: Array<any> = [String.fromCharCode(106,95,56,57,95,99,111,110,102,108,105,99,116,115,0), String.fromCharCode(99,95,49,55,95,114,101,117,115,97,98,108,101,0)];
         gestureZ = [2 << (Math.min(4, historyS.length))];
         gestureZ = [2 + gestureZ.length];
      containers -= popupx;
   let textj = libavformatn.length <= 6243638;
   do {
       let middle4 = String.fromCharCode(114,101,116,114,97,110,115,109,105,116,95,119,95,49,55,0);
       let philippinesX = 2;
       let aboutP: Map<any, any> = new Map([[String.fromCharCode(116,95,54,52,95,112,97,105,110,116,105,110,103,0),String.fromCharCode(105,95,49,48,95,109,98,99,109,112,0)], [String.fromCharCode(114,103,116,99,117,0),String.fromCharCode(109,95,48,95,110,111,116,104,105,110,103,0)]]);
       let moonH = true;
         aboutP = new Map([[middle4, (middle4 == String.fromCharCode(121,0) ? middle4.length : (moonH ? 2 : 1))]]);
      let malaysiaU = moonH ? !moonH : moonH;
      do {
         moonH = 46 < middle4.length;
         if (malaysiaU) {
            break;
         }
      } while ((4 >= (3 >> (Math.min(5, Math.abs(aboutP.size))))) && malaysiaU);
       let mapbuffer7 = 0.0;
       let ballD = 5.0;
         aboutP = new Map([[`${aboutP.size}`, philippinesX * aboutP.size]]);
         ballD += parseFloat(`${3}`);
       let activityq: Map<any, any> = new Map([[String.fromCharCode(108,115,112,115,95,103,95,55,0),false ], [String.fromCharCode(120,95,55,54,95,99,111,108,108,105,100,105,110,103,0),false ]]);
       let episodesc: Map<any, any> = new Map([[String.fromCharCode(111,95,52,51,95,108,111,99,107,110,101,115,115,0),262], [String.fromCharCode(117,95,49,54,0),417]]);
       let config3 = String.fromCharCode(109,95,55,51,95,99,108,116,111,115,116,114,0);
       let step8 = String.fromCharCode(105,95,51,52,95,113,117,97,100,116,114,101,101,0);
         philippinesX /= Math.max(parseInt(`${ballD}`) << (Math.min(5, Math.abs(philippinesX))), 4);
         middle4 += `${parseInt(`${ballD}`) << (Math.min(2, Math.abs(3)))}`;
       let g_imagey = String.fromCharCode(108,105,98,107,118,97,122,97,97,114,95,53,95,52,0);
         middle4 += `${(String.fromCharCode(95,0) == middle4 ? middle4.length : (moonH ? 1 : 3))}`;
      while (!middle4.endsWith(`${activityq.size}`)) {
         activityq = new Map([[`${aboutP.size}`, 1]]);
         break;
      }
      libavformatn = [unimplementedviewG.length];
      if (textj) {
         break;
      }
   } while ((4 >= (3 - libavformatn.length)) && textj);
   while ((popupx - matchesF.length) <= 2 || (2 - popupx) <= 1) {
      matchesF += "1";
      break;
   }
    setIsOffline(offline);

   let phoneK = logout0 <= 5960404;
   do {
      logout0 >>= Math.min(3, matchesF.length);
      if (phoneK) {
         break;
      }
   } while (phoneK && (!matchesF.endsWith(`${logout0}`)));
   let modityK = popupx >= 9197917;
   do {
      popupx -= pauseh.length | 3;
      if (modityK) {
         break;
      }
   } while ((matchesF.includes(`${popupx}`)) && modityK);
   if (4 == libavformatn.length) {
       let dark4: Map<any, any> = new Map([[String.fromCharCode(122,95,55,57,95,115,101,116,117,112,0),String.fromCharCode(114,101,99,117,114,115,101,95,104,95,50,49,0)], [String.fromCharCode(97,95,55,95,100,97,116,101,116,105,109,101,0),String.fromCharCode(110,95,56,55,95,104,97,115,104,116,97,103,115,0)], [String.fromCharCode(102,111,99,117,115,95,100,95,52,53,0),String.fromCharCode(116,95,53,56,95,98,97,115,101,0)]]);
       let disconnectedh = String.fromCharCode(118,95,49,0);
       let starf = String.fromCharCode(109,97,116,114,105,99,101,115,95,113,95,54,54,0);
       let tickr = String.fromCharCode(116,95,56,56,95,100,101,115,99,114,105,112,116,111,114,115,0);
          let material4 = 5;
         dark4.set(tickr, (tickr == String.fromCharCode(57,0) ? starf.length : tickr.length));
         material4 %= Math.max(5, material4);
         dark4.set(tickr, tickr.length % (Math.max(2, 1)));
         starf = `${dark4.size % (Math.max(starf.length, 9))}`;
      while (starf.length > disconnectedh.length) {
         starf = `${2 >> (Math.min(2, disconnectedh.length))}`;
         break;
      }
         tickr = `${tickr.length}`;
       let dplusJ = String.fromCharCode(121,95,49,49,95,108,111,119,100,101,108,97,121,0);
       let description_sy = String.fromCharCode(114,95,50,49,95,108,97,121,101,114,99,111,110,116,101,120,116,0);
         dark4 = new Map([[description_sy, 1]]);
         dplusJ = "3";
         dark4 = new Map([[tickr, tickr.length * 3]]);
      for (let e = 0; e < 2; e++) {
          let miniL = String.fromCharCode(115,112,101,99,105,102,105,101,114,115,95,51,95,54,57,0);
          let feedback7 = 3.0;
          let anytimei = String.fromCharCode(116,95,54,54,95,101,120,112,0);
         description_sy += `${anytimei.length | 1}`;
         miniL += `${parseInt(`${feedback7}`)}`;
         feedback7 -= parseFloat(`${1}`);
         anytimei += `${miniL.length | 2}`;
      }
         tickr += `${dark4.size}`;
         disconnectedh += `${dark4.size}`;
      searchbaru = (popupx / (Math.max(pauseh.length, 5))) > 67;
   }
      libavformatn.push(unimplementedviewG.length + parseInt(`${containers}`));
   let upgradeZ = unimplementedviewG.length <= 8939386;
   do {
       let libreanimateda = String.fromCharCode(114,101,97,100,99,98,95,55,95,49,49,0);
      while (libreanimateda.length >= libreanimateda.length) {
         libreanimateda = `${(libreanimateda == String.fromCharCode(81,0) ? libreanimateda.length : libreanimateda.length)}`;
         break;
      }
          let currentK: Map<any, any> = new Map([[String.fromCharCode(101,115,99,97,112,101,95,102,95,52,57,0),493], [String.fromCharCode(112,114,111,118,105,100,101,114,115,95,99,95,56,52,0),32]]);
         libreanimateda = `${currentK.size & libreanimateda.length}`;
      if (!libreanimateda.startsWith(`${libreanimateda.length}`)) {
         libreanimateda = `${2 - libreanimateda.length}`;
      }
      unimplementedviewG += `${pauseh.length / (Math.max(3, 10))}`;
      if (upgradeZ) {
         break;
      }
   } while (upgradeZ && (pauseh.length > unimplementedviewG.length));

    if (offline) {

   if ((5 - logout0) < 4 && !searchbaru) {
      searchbaru = matchesF.length < unimplementedviewG.length;
   }
       let textlayoutmanagerj: Array<any> = [848, 805, 870];
       let matchesl: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,116,97,98,108,101,95,110,95,50,53,0),218], [String.fromCharCode(117,110,119,114,105,116,97,98,108,101,95,53,95,52,52,0),698]]);
       let sansV = String.fromCharCode(99,117,100,97,95,111,95,49,48,48,0);
       let libswresampler = 4;
       let chinaz = 1;
      let resendJ = sansV == String.fromCharCode(104,99,97,105,56,100,102,57,54,120,0);
      do {
         sansV += "2";
         if (resendJ) {
            break;
         }
      } while (resendJ && ((sansV.length >> (Math.min(Math.abs(5), 5))) == 1));
         textlayoutmanagerj.push(1 | libswresampler);
          let libfabricjnin = 5.0;
         matchesl = new Map([[`${matchesl.size}`, matchesl.size]]);
         libfabricjnin *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${libfabricjnin}`)), 3))}`);
      while (!textlayoutmanagerj.includes(libswresampler)) {
         libswresampler += matchesl.size ^ 3;
         break;
      }
      let ajaxY = 5523573 <= textlayoutmanagerj.length;
      do {
         textlayoutmanagerj = [libswresampler];
         if (ajaxY) {
            break;
         }
      } while (ajaxY && (textlayoutmanagerj.length >= sansV.length));
      while (!sansV.includes(`${libswresampler}`)) {
         sansV += `${chinaz | 3}`;
         break;
      }
      while (5 <= chinaz) {
         libswresampler ^= chinaz | 2;
         break;
      }
          let libyogan = String.fromCharCode(114,101,115,116,114,105,99,116,95,114,95,53,51,0);
          let trophyK = true;
         chinaz &= (sansV == String.fromCharCode(69,0) ? sansV.length : (trophyK ? 4 : 3));
         libyogan = `${libyogan.length | libyogan.length}`;
         trophyK = (libyogan.length / (Math.max(4, libyogan.length))) <= 58;
      containers -= matchesl.size + 1;
   for (let u = 0; u < 3; u++) {
      popupx *= matchesF.length & logout0;
   }
   while (!searchbaru) {
      unimplementedviewG = "2";
      break;
   }
      searchbaru = containers == 48.68;
      setDismountPlayer(false); 
    }
    
  };
  
  

  
  
  
  

  
  
  
  
  
  
  

  
  
  
  
  
  
  
  //   return () => clearInterval(interval)
  

  useEffect(() => {
    if (vod) {
      setInitTime(vod?.timeWatched);
      setReadyPlay(false);

      

      
      yys_event_common.playsViewsAnalytics({
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
      yys_Downloader.getDetail(vod?.vod_id.toString() ?? "", {
        xMode: adultMode,
      }).then((data) => {
        const isRestricted = data.vod_restricted === 1;
        if (isRestricted) {
          videoPlayerRef.current?.setPause(true);
          
          setTimeout(() => {
            setVodRestricted(isRestricted);
          }, 100);
        } else {
          setVodRestricted(isRestricted);
        }
        setVod(data);
        return data;
      }),
    [vod]
  );

  const handleFetchVodDetail = async () => {
       let tempx = String.fromCharCode(113,95,50,48,95,115,104,111,114,116,99,117,116,115,0);
    let policyl = String.fromCharCode(110,97,109,101,115,101,114,118,101,114,115,95,54,95,53,50,0);
    let commont = 3.0;
    let textlayoutmanagerI = 0.0;
    let minif: Array<any> = [40, 860];
    let stationq = 4;
    let context_ = String.fromCharCode(99,104,97,114,115,101,116,95,57,95,49,48,0);
    let matchesi: Array<any> = [String.fromCharCode(109,97,105,110,110,101,116,115,95,122,95,54,48,0), String.fromCharCode(111,103,103,105,110,103,95,110,95,55,48,0)];
    let mbsplashn = 2.0;
    let hooksB = false;
    let latnq: Array<any> = [996, 366];
    let selection6 = String.fromCharCode(108,95,54,49,95,112,114,101,101,109,112,104,0);
   let desc_ = policyl.length >= 8296441;
   do {
      policyl += `${(String.fromCharCode(95,0) == context_ ? context_.length : tempx.length)}`;
      if (desc_) {
         break;
      }
   } while ((3 < (minif.length / (Math.max(policyl.length, 9))) || (minif.length / (Math.max(10, policyl.length))) < 3) && desc_);
      stationq ^= 1;
   let tail1 = String.fromCharCode(97,53,109,105,105,114,51,0) == context_;
   do {
       let actions5 = 4.0;
       let loadingR: Map<any, any> = new Map([[String.fromCharCode(108,95,56,51,95,102,101,97,116,117,114,101,100,0),true ], [String.fromCharCode(112,117,115,104,105,110,103,95,117,95,57,52,0),false ]]);
       let langW = 5;
      if (3 == langW) {
         langW -= 3;
      }
         loadingR.set(`${langW}`, 2 - langW);
       let mutedE = String.fromCharCode(116,111,111,108,116,105,112,95,98,95,50,55,0);
       let cornerT = String.fromCharCode(103,101,111,107,101,121,95,118,95,53,53,0);
      while (parseFloat(`${mutedE.length}`) >= actions5) {
         actions5 += parseFloat(`${langW & mutedE.length}`);
         break;
      }
      let submitJ = 9189526 <= loadingR.size;
      do {
         loadingR.set(cornerT, parseInt(`${actions5}`) >> (Math.min(cornerT.length, 5)));
         if (submitJ) {
            break;
         }
      } while (((loadingR.size | 4) >= 5) && submitJ);
       let fastforward0 = 4;
      for (let f = 0; f < 2; f++) {
         langW ^= parseInt(`${actions5}`) / 1;
      }
         mutedE = `${(mutedE == String.fromCharCode(87,0) ? mutedE.length : loadingR.size)}`;
      while (cornerT.length <= loadingR.size) {
         cornerT = `${langW}`;
         break;
      }
      context_ += `${policyl.length | matchesi.length}`;
      if (tail1) {
         break;
      }
   } while (tail1 && (context_.startsWith(`${textlayoutmanagerI}`)));
   if (1 <= (context_.length ^ stationq)) {
       let stationsC: Array<any> = [369, 516, 368];
      for (let o = 0; o < 1; o++) {
         stationsC.push(3 + stationsC.length);
      }
         stationsC = [stationsC.length % (Math.max(3, 4))];
      while ((stationsC.length ^ stationsC.length) == 3) {
         stationsC = [stationsC.length >> (Math.min(5, stationsC.length))];
         break;
      }
      context_ = `${parseInt(`${mbsplashn}`)}`;
   }
   let spinnerF = 7399530 >= matchesi.length;
   do {
       let graphicsb = String.fromCharCode(118,105,100,101,111,105,110,102,111,104,101,97,100,101,114,95,56,95,53,55,0);
       let dangerr = 1.0;
      for (let w = 0; w < 3; w++) {
         dangerr += parseFloat(`${1}`);
      }
         graphicsb = "2";
       let serviceq = 4.0;
      if ((parseFloat(`${graphicsb.length}`) + dangerr) == 5.16 || (parseInt(`${dangerr}`) + 3) == 5) {
         dangerr *= parseFloat(`${2 & parseInt(`${dangerr}`)}`);
      }
          let libpangleflippeds = String.fromCharCode(97,95,54,95,105,110,112,117,116,116,101,109,0);
          let chatM = true;
          let telegramA: Map<any, any> = new Map([[String.fromCharCode(107,105,110,100,115,95,122,95,50,56,0),String.fromCharCode(116,101,115,116,99,108,101,97,110,95,116,95,57,56,0)], [String.fromCharCode(103,101,116,108,97,100,100,114,115,95,116,95,49,57,0),String.fromCharCode(109,101,115,97,103,101,95,57,95,53,48,0)]]);
         serviceq *= libpangleflippeds.length * graphicsb.length;
         libpangleflippeds += `${telegramA.size}`;
         chatM = !chatM;
         telegramA.set(`${chatM}`, ((chatM ? 1 : 2) ^ 3));
      let libsentryQ = serviceq <= 6846506.0;
      do {
         serviceq -= parseInt(`${dangerr}`);
         if (libsentryQ) {
            break;
         }
      } while (((dangerr + serviceq) > 1.82 && (serviceq + 1.82) > 3.58) && libsentryQ);
      matchesi.push(2 << (Math.min(1, context_.length)));
      if (spinnerF) {
         break;
      }
   } while (spinnerF && (matchesi.length <= 3));
       let libsgcore0: Array<any> = [String.fromCharCode(110,95,57,48,95,108,105,98,103,115,109,0), String.fromCharCode(118,116,97,115,107,113,117,101,117,101,95,49,95,57,0), String.fromCharCode(109,105,100,116,111,110,101,115,95,107,95,50,57,0)];
       let layoutd: Map<any, any> = new Map([[String.fromCharCode(98,95,57,95,98,111,114,100,101,114,108,101,115,115,0),false ], [String.fromCharCode(113,95,49,57,95,99,103,105,109,97,103,101,0),true ]]);
         layoutd.set(`${libsgcore0.length}`, libsgcore0.length);
       let chatJ: Array<any> = [533, 948, 997];
       let streamingg: Array<any> = [664, 822];
         layoutd.set(`${streamingg.length}`, streamingg.length / 1);
         libsgcore0 = [chatJ.length % 1];
         layoutd = new Map([[`${streamingg.length}`, chatJ.length]]);
      for (let t = 0; t < 1; t++) {
          let colorsX = 2.0;
         streamingg = [chatJ.length - 2];
         colorsX += parseFloat(`${parseInt(`${colorsX}`) & parseInt(`${colorsX}`)}`);
      }
      context_ = `${stationq | 1}`;

    const promise = async () => downloadedVod?.vod;

   for (let i = 0; i < 3; i++) {
      textlayoutmanagerI += stationq % (Math.max(context_.length, 5));
   }
      mbsplashn += 3 % (Math.max(9, policyl.length));
   if (tempx != policyl) {
      policyl += `${((hooksB ? 1 : 4) % (Math.max(4, minif.length)))}`;
   }
   let statisticsF = String.fromCharCode(110,98,114,48,117,0) == tempx;
   do {
       let libreactperfloggerjnij = 5.0;
         libreactperfloggerjnij += 1 + parseInt(`${libreactperfloggerjnij}`);
          let mapbufferX = String.fromCharCode(102,111,108,108,111,119,101,114,95,55,95,55,54,0);
         libreactperfloggerjnij -= mapbufferX.length & parseInt(`${libreactperfloggerjnij}`);
         libreactperfloggerjnij += parseInt(`${libreactperfloggerjnij}`);
      tempx = `${2 ^ minif.length}`;
      if (statisticsF) {
         break;
      }
   } while (statisticsF && (context_ != String.fromCharCode(84,0)));
   for (let s = 0; s < 1; s++) {
      stationq -= (parseInt(`${mbsplashn}`) ^ (hooksB ? 1 : 1));
   }
       let context7 = 5.0;
          let buildP = String.fromCharCode(100,97,114,107,0);
         context7 += 1;
         buildP += `${buildP.length + 3}`;
      if (3.11 < (context7 * 5.15)) {
         context7 -= parseInt(`${context7}`) | parseInt(`${context7}`);
      }
      for (let n = 0; n < 1; n++) {
         context7 /= Math.max(2, parseInt(`${context7}`));
      }
      mbsplashn /= Math.max(context_.length, 5);
    if (isOffline) {

   let taile = policyl.length <= 5011819;
   do {
      policyl = `${tempx.length}`;
      if (taile) {
         break;
      }
   } while (taile && ((2 | policyl.length) == 4 || 4.29 == (1.40 * mbsplashn)));
       let buttont = String.fromCharCode(99,111,108,111,114,115,112,97,99,101,100,115,112,95,108,95,49,48,48,0);
       let routerA: Map<any, any> = new Map([[String.fromCharCode(116,111,109,111,114,114,111,119,95,116,95,52,49,0),String.fromCharCode(117,95,57,55,95,102,97,115,116,109,97,116,104,0)], [String.fromCharCode(115,99,114,101,101,110,115,104,97,114,101,0),String.fromCharCode(115,95,57,49,95,101,113,117,105,118,97,108,101,110,116,0)], [String.fromCharCode(104,101,120,100,117,109,112,95,99,95,49,48,48,0),String.fromCharCode(119,97,108,107,101,114,0)]]);
       let trashA = 4;
         routerA.set(`${trashA}`, 1 | buttont.length);
       let mbsplashc = 3.0;
       let dialogx = 1.0;
       let langkey7 = 5;
          let handlerC = String.fromCharCode(108,105,112,98,111,97,114,100,95,53,95,52,55,0);
         routerA.set(`${mbsplashc}`, buttont.length);
         handlerC += `${handlerC.length}`;
          let sliderg = String.fromCharCode(115,105,109,117,108,97,116,101,100,95,53,95,52,52,0);
         dialogx -= parseFloat(`${buttont.length << (Math.min(4, Math.abs(routerA.size)))}`);
         sliderg = `${sliderg.length}`;
         mbsplashc -= parseFloat(`${buttont.length}`);
       let umengh = true;
         umengh = dialogx >= 58.58;
      for (let s = 0; s < 1; s++) {
         dialogx /= Math.max(3, parseFloat(`${3}`));
      }
      commont *= parseFloat(`${1}`);
   if ((4.21 / (Math.max(10, textlayoutmanagerI))) < 2.54 || 3.90 < (4.21 / (Math.max(1, textlayoutmanagerI)))) {
      mbsplashn *= minif.length & stationq;
   }
   while (1 < matchesi.length) {
       let s_viewt: Map<any, any> = new Map([[String.fromCharCode(113,95,54,49,95,101,116,104,114,101,97,100,0),String.fromCharCode(115,98,115,112,108,105,116,95,107,95,49,57,0)], [String.fromCharCode(111,95,51,55,95,106,99,111,110,102,105,103,0),String.fromCharCode(116,101,110,115,105,111,110,95,53,95,55,48,0)]]);
       let diceI = 3;
       let orientationd = 5.0;
       let championG = 3.0;
       let filedk = String.fromCharCode(121,95,54,50,95,104,99,108,114,0);
      let classesW = 8433730 <= s_viewt.size;
      do {
         s_viewt.set(`${diceI}`, diceI);
         if (classesW) {
            break;
         }
      } while ((filedk.length <= s_viewt.size) && classesW);
      let viewsh = 5441838.0 <= championG;
      do {
         championG -= s_viewt.size;
         if (viewsh) {
            break;
         }
      } while ((5 >= filedk.length) && viewsh);
      if (1 > (s_viewt.size ^ 4)) {
          let currenti = 1;
          let verticalV = String.fromCharCode(121,95,53,49,95,108,111,103,105,110,0);
          let awayt: Map<any, any> = new Map([[String.fromCharCode(99,95,48,95,114,101,103,105,115,116,101,114,0),String.fromCharCode(114,101,115,104,97,112,101,95,121,95,54,56,0)], [String.fromCharCode(111,95,57,55,95,114,101,116,114,105,101,114,0),String.fromCharCode(121,95,50,55,95,99,104,97,114,97,99,116,101,114,115,0)]]);
          let gesturesk = String.fromCharCode(112,117,116,115,95,57,95,56,50,0);
         s_viewt.set(gesturesk, parseInt(`${championG}`));
         currenti /= Math.max(1 | verticalV.length, 5);
         verticalV = `${awayt.size}`;
         awayt = new Map([[verticalV, (verticalV == String.fromCharCode(122,0) ? currenti : verticalV.length)]]);
         gesturesk += `${verticalV.length}`;
      }
         championG += diceI;
          let macaup = 4;
         orientationd += parseInt(`${championG}`) >> (Math.min(Math.abs(1), 1));
         macaup &= 1;
         championG *= diceI << (Math.min(Math.abs(3), 4));
       let lightD = true;
       let dangerX = false;
         orientationd -= (String.fromCharCode(122,0) == filedk ? parseInt(`${orientationd}`) : filedk.length);
      while (s_viewt.get(`${diceI}`) == null) {
         diceI ^= 2 / (Math.max(parseInt(`${championG}`), 4));
         break;
      }
      for (let u = 0; u < 3; u++) {
         filedk = `${(1 % (Math.max(8, (lightD ? 1 : 4))))}`;
      }
       let libfabricjnig = 2.0;
         s_viewt.set(`${championG}`, (String.fromCharCode(88,0) == filedk ? parseInt(`${championG}`) : filedk.length));
      while (!dangerX || !lightD) {
          let weiboR = String.fromCharCode(111,95,57,53,95,98,105,116,111,112,115,0);
          let kuaishouU = String.fromCharCode(108,95,55,49,95,103,117,97,114,97,110,116,101,101,0);
          let goalc = true;
          let foreground5 = 1;
          let halff = String.fromCharCode(97,95,56,57,95,117,114,98,103,0);
         dangerX = s_viewt.size > 75 || diceI > 75;
         weiboR = `${halff.length}`;
         kuaishouU = "2";
         goalc = (foreground5 % (Math.max(kuaishouU.length, 7))) <= 33;
         foreground5 >>= Math.min(5, Math.abs(1));
         halff = "3";
         break;
      }
      if (s_viewt.size == 5) {
         lightD = !lightD;
      }
          let tickj = String.fromCharCode(97,116,116,114,105,98,115,95,97,95,55,49,0);
          let classeso = 5;
          let moduleL = 1.0;
         libfabricjnig += ((lightD ? 2 : 1) / (Math.max(3, 2)));
         tickj += `${(String.fromCharCode(69,0) == tickj ? classeso : tickj.length)}`;
         classeso += (String.fromCharCode(84,0) == tickj ? tickj.length : parseInt(`${moduleL}`));
         moduleL /= Math.max(4, 2 | parseInt(`${moduleL}`));
      matchesi = [((hooksB ? 3 : 1) % (Math.max(minif.length, 5)))];
      break;
   }
       let package_mc_ = String.fromCharCode(112,114,101,101,109,112,116,105,118,101,95,120,95,49,56,0);
         package_mc_ += `${package_mc_.length}`;
      for (let y = 0; y < 2; y++) {
          let telegramw: Array<any> = [610, 851];
          let forwardL = String.fromCharCode(97,110,110,111,116,97,116,101,95,108,95,51,56,0);
          let humidityQ = String.fromCharCode(101,114,114,111,114,118,95,56,95,50,57,0);
          let injurya = true;
         package_mc_ = `${(package_mc_ == String.fromCharCode(77,0) ? telegramw.length : package_mc_.length)}`;
         telegramw = [2];
         forwardL += `${forwardL.length}`;
         humidityQ = `${(forwardL == String.fromCharCode(50,0) ? forwardL.length : (injurya ? 4 : 4))}`;
      }
          let modalJ = String.fromCharCode(114,95,56,54,95,109,105,110,105,109,97,108,108,121,0);
          let yellow5 = 4;
         package_mc_ = `${(package_mc_ == String.fromCharCode(81,0) ? package_mc_.length : yellow5)}`;
         modalJ = `${modalJ.length}`;
         yellow5 >>= Math.min(Math.abs(modalJ.length / (Math.max(1, 9))), 4);
      context_ = `${parseInt(`${textlayoutmanagerI}`)}`;
      minif.push(parseInt(`${textlayoutmanagerI}`) + 1);
      console.debug("is offline");

      tempx = `${context_.length}`;
   for (let e = 0; e < 1; e++) {
      minif.push(minif.length);
   }
   let short_6W = tempx == String.fromCharCode(104,48,110,106,48,98,56,103,0);
   do {
      tempx += `${matchesi.length / (Math.max(2, 7))}`;
      if (short_6W) {
         break;
      }
   } while (short_6W && (5.59 >= commont));
      tempx = `${latnq.length}`;
       let skip6 = String.fromCharCode(100,97,98,97,115,101,95,113,95,50,53,0);
       let package_0B = 1;
      if ((package_0B & 1) > 2) {
          let sentryz = 5.0;
          let specp = String.fromCharCode(102,99,104,111,119,110,95,98,95,54,48,0);
          let modalk = String.fromCharCode(112,95,56,56,95,107,105,116,116,121,0);
          let topic4 = false;
         package_0B >>= Math.min(Math.abs(1), 3);
         sentryz /= Math.max(3, modalk.length);
         specp += `${2 - parseInt(`${sentryz}`)}`;
         modalk = "2";
         topic4 = specp.length < 92;
      }
      while ((package_0B / (Math.max(skip6.length, 3))) <= 4) {
         package_0B |= package_0B >> (Math.min(skip6.length, 4));
         break;
      }
      textlayoutmanagerI += latnq.length / 3;
   let bingi = 5627720 >= matchesi.length;
   do {
      matchesi.push(policyl.length << (Math.min(2, latnq.length)));
      if (bingi) {
         break;
      }
   } while (bingi && (matchesi.length < tempx.length));
      return promise();
    } else {

   let stationL = String.fromCharCode(107,97,100,50,98,101,99,51,55,116,0) == context_;
   do {
       let actionsU = true;
       let armvaq = 5.0;
       let reactS: Map<any, any> = new Map([[String.fromCharCode(109,95,55,55,95,99,109,97,99,0),85], [String.fromCharCode(107,95,54,52,95,97,107,105,100,0),742], [String.fromCharCode(115,117,110,118,101,114,95,106,95,50,53,0),117]]);
       let themeB = String.fromCharCode(115,95,52,57,95,115,111,108,97,110,97,0);
      for (let p = 0; p < 2; p++) {
         reactS.set(themeB, reactS.size - themeB.length);
      }
      while (Array.from(reactS.keys()).includes(`${armvaq}`)) {
         armvaq *= parseFloat(`${themeB.length & 2}`);
         break;
      }
      while (reactS.size >= 1) {
         reactS = new Map([[`${armvaq}`, 2 % (Math.max(9, themeB.length))]]);
         break;
      }
      for (let x = 0; x < 1; x++) {
          let topon8 = String.fromCharCode(122,95,50,49,0);
          let fastt = 1.0;
          let eventH: Array<any> = [599, 550, 664];
         themeB += `${((actionsU ? 5 : 4) >> (Math.min(topon8.length, 3)))}`;
         topon8 += `${eventH.length | parseInt(`${fastt}`)}`;
         fastt *= parseFloat(`${parseInt(`${fastt}`)}`);
         eventH = [parseInt(`${fastt}`) + eventH.length];
      }
          let loading6 = true;
          let long_ry = 2.0;
          let runtimeS: Array<any> = [74, 198];
         actionsU = !actionsU && 24.11 <= long_ry;
         loading6 = runtimeS.length > 78;
         long_ry -= (runtimeS.length + (loading6 ? 2 : 3));
       let mbbannerY: Map<any, any> = new Map([[String.fromCharCode(97,95,56,54,95,109,111,109,101,110,116,97,114,121,0),499], [String.fromCharCode(99,95,54,55,95,117,110,115,97,118,101,0),296]]);
       let filedZ = String.fromCharCode(105,100,99,116,120,100,99,95,49,95,53,49,0);
       let unewarchdefaultsb = String.fromCharCode(113,95,51,52,95,101,120,112,114,101,115,115,0);
      let graphz = String.fromCharCode(95,99,48,117,48,97,0) == themeB;
      do {
         themeB = `${((actionsU ? 4 : 5) << (Math.min(Math.abs(2), 4)))}`;
         if (graphz) {
            break;
         }
      } while (graphz && (filedZ.length == themeB.length));
          let ksadq: Array<any> = [863, 287];
          let completee = true;
         filedZ = `${3 << (Math.min(1, Math.abs(reactS.size)))}`;
         ksadq = [2];
         completee = ksadq.length == 5;
      for (let y = 0; y < 2; y++) {
         reactS.set(`${reactS.size}`, mbbannerY.size);
      }
          let assist5 = String.fromCharCode(104,95,52,54,95,103,97,109,109,97,102,105,108,116,101,114,0);
          let paginationT = 5.0;
         reactS = new Map([[assist5, (String.fromCharCode(56,0) == unewarchdefaultsb ? unewarchdefaultsb.length : assist5.length)]]);
         paginationT /= Math.max(3, parseFloat(`${1}`));
      for (let z = 0; z < 2; z++) {
          let tickedO = 5.0;
          let goalo = String.fromCharCode(105,95,49,53,95,115,117,112,112,114,101,115,115,101,100,0);
          let mbbidc = 4;
         reactS = new Map([[filedZ, mbbidc << (Math.min(filedZ.length, 3))]]);
         tickedO /= Math.max(2, goalo.length - parseInt(`${tickedO}`));
         goalo = `${goalo.length}`;
         mbbidc /= Math.max(3, 5);
      }
      context_ += `${reactS.size + 2}`;
      if (stationL) {
         break;
      }
   } while ((!context_.includes(`${hooksB}`)) && stationL);
   if (4.63 > (textlayoutmanagerI + 3.73) && 2.32 > (3.73 * textlayoutmanagerI)) {
      textlayoutmanagerI -= 3 - stationq;
   }
       let handlerK: Array<any> = [821, 114, 351];
          let weiboL = false;
          let privilegeD = 0.0;
          let faviconv = String.fromCharCode(120,95,55,54,95,110,97,110,111,98,101,110,99,104,109,97,114,107,0);
         handlerK = [2];
         weiboL = (parseInt(`${privilegeD}`) / (Math.max(faviconv.length, 3))) >= 75;
         privilegeD -= (String.fromCharCode(54,0) == faviconv ? parseInt(`${privilegeD}`) : faviconv.length);
         handlerK = [handlerK.length];
      let dropdown8 = handlerK.length >= 8576277;
      do {
         handlerK.push(3 / (Math.max(5, handlerK.length)));
         if (dropdown8) {
            break;
         }
      } while (dropdown8 && (3 >= (handlerK.length | handlerK.length)));
      textlayoutmanagerI += 1 >> (Math.min(Math.abs(parseInt(`${commont}`)), 1));
      context_ += `${(String.fromCharCode(85,0) == policyl ? policyl.length : parseInt(`${mbsplashn}`))}`;
       let with_eJ = 4;
       let away3 = false;
       let delegate_ufC = String.fromCharCode(116,104,97,119,101,100,95,106,95,50,55,0);
         with_eJ -= with_eJ;
         with_eJ <<= Math.min(4, delegate_ufC.length);
         with_eJ |= 1;
      while ((1 - with_eJ) == 2 && !away3) {
         with_eJ >>= Math.min(4, Math.abs(((away3 ? 2 : 5))));
         break;
      }
      for (let l = 0; l < 3; l++) {
         delegate_ufC = `${((away3 ? 4 : 5))}`;
      }
      if (1 >= delegate_ufC.length) {
         away3 = with_eJ <= 19;
      }
         delegate_ufC = `${with_eJ + 1}`;
       let mbjscommona = String.fromCharCode(104,105,103,104,112,97,115,115,95,112,95,50,55,0);
         delegate_ufC = `${delegate_ufC.length | 1}`;
      stationq += 3;
   if ((stationq ^ 4) >= 1 || 4 >= (stationq ^ context_.length)) {
       let detaily = true;
      for (let q = 0; q < 1; q++) {
         detaily = !detaily;
      }
         detaily = (detaily ? !detaily : detaily);
      while (detaily && !detaily) {
          let reducerM = true;
          let stepS = String.fromCharCode(122,95,54,52,95,99,111,108,108,101,99,116,97,98,108,101,0);
          let specm = String.fromCharCode(106,95,51,0);
         detaily = detaily || reducerM;
         reducerM = specm.length < 1;
         stepS += `${specm.length & stepS.length}`;
         break;
      }
      context_ += `${stationq}`;
   }
      console.debug("not offline");

   while (2 <= latnq.length) {
       let nextz = false;
         nextz = nextz || !nextz;
         nextz = !nextz;
         nextz = !nextz;
      stationq += ((nextz ? 5 : 3));
      break;
   }
      policyl += `${matchesi.length}`;
       let xvodm = true;
       let playn = String.fromCharCode(99,111,100,101,98,111,111,107,95,113,95,49,54,0);
         playn = `${((xvodm ? 4 : 2))}`;
         xvodm = !xvodm;
      while (!xvodm) {
         playn = "3";
         break;
      }
       let assiste = String.fromCharCode(97,120,105,120,95,54,95,52,55,0);
       let carousela = String.fromCharCode(102,95,49,56,95,116,111,107,101,110,105,122,101,114,0);
         xvodm = (playn.length / (Math.max(4, assiste.length))) == 2;
      if (carousela.length > 4 || !xvodm) {
          let leftD = 3.0;
          let vietnamX = String.fromCharCode(97,117,116,111,100,101,116,101,99,116,105,111,110,95,102,95,56,48,0);
          let fast2 = true;
          let zoom5 = true;
         xvodm = (xvodm ? zoom5 : !xvodm);
         leftD += (parseFloat(`${(fast2 ? 3 : 4) >> (Math.min(Math.abs(3), 3))}`));
         vietnamX = "1";
         zoom5 = vietnamX.endsWith(`${fast2}`);
      }
      tempx += `${parseInt(`${textlayoutmanagerI}`) - 1}`;
   let backgroundR = 7808521.0 <= mbsplashn;
   do {
       let refreshr = String.fromCharCode(119,95,51,50,95,119,105,100,116,104,115,0);
       let smallZ = String.fromCharCode(117,95,57,50,95,116,111,111,108,0);
       let referrer7 = 1.0;
       let networkR = 5.0;
         referrer7 += 2;
         smallZ = `${2 * refreshr.length}`;
      let searchbarD = 9359527 >= smallZ.length;
      do {
          let playlistX: Array<any> = [String.fromCharCode(106,95,50,48,95,99,111,117,110,116,101,114,115,0), String.fromCharCode(105,108,108,101,103,97,108,95,112,95,53,53,0)];
          let shrinkR = 1;
          let traminij = 0.0;
          let floatingj = true;
          let libyoga5 = 5.0;
         smallZ = `${(String.fromCharCode(77,0) == smallZ ? smallZ.length : (floatingj ? 5 : 5))}`;
         playlistX = [parseInt(`${libyoga5}`) << (Math.min(2, Math.abs(1)))];
         shrinkR &= 2 ^ parseInt(`${libyoga5}`);
         traminij += parseFloat(`${shrinkR}`);
         floatingj = 17.55 >= (libyoga5 / (Math.max(10, traminij)));
         if (searchbarD) {
            break;
         }
      } while (((parseInt(`${referrer7}`) / (Math.max(smallZ.length, 8))) == 4) && searchbarD);
      let libloggerB = refreshr == String.fromCharCode(98,48,48,54,115,100,0);
      do {
         refreshr += `${refreshr.length}`;
         if (libloggerB) {
            break;
         }
      } while (libloggerB && (networkR > parseFloat(`${refreshr.length}`)));
      let tooltipsT = String.fromCharCode(51,52,111,95,104,97,0) == smallZ;
      do {
          let libavfilterO = String.fromCharCode(106,95,56,52,95,115,99,114,101,101,110,99,97,115,116,0);
          let settingsG = 2;
          let screen5 = 4.0;
          let saveL: Array<any> = [699, 930, 202];
         smallZ = `${(libavfilterO == String.fromCharCode(122,0) ? parseInt(`${networkR}`) : libavfilterO.length)}`;
         settingsG |= settingsG & 3;
         screen5 /= Math.max(parseInt(`${screen5}`), 4);
         saveL.push(1 & settingsG);
         if (tooltipsT) {
            break;
         }
      } while (tooltipsT && (!smallZ.endsWith(`${refreshr.length}`)));
         smallZ += "1";
      let overu = refreshr.length <= 6747859;
      do {
          let guidep = 2;
         refreshr += `${refreshr.length}`;
         guidep -= guidep;
         if (overu) {
            break;
         }
      } while ((4.86 <= (networkR + parseFloat(`${refreshr.length}`)) || (refreshr.length / (Math.max(2, 1))) <= 1) && overu);
       let middlel = String.fromCharCode(118,95,51,48,95,108,111,99,97,116,101,0);
       let containers = String.fromCharCode(110,111,98,111,100,121,95,117,95,55,55,0);
      for (let h = 0; h < 3; h++) {
         networkR += (parseFloat(`${String.fromCharCode(82,0) == refreshr ? refreshr.length : containers.length}`));
      }
       let circleY = 3;
         middlel = `${containers.length / 2}`;
         containers = `${middlel.length}`;
      mbsplashn *= tempx.length;
      if (backgroundR) {
         break;
      }
   } while ((1.51 >= mbsplashn) && backgroundR);
       let uimanager9 = String.fromCharCode(117,110,98,97,110,95,97,95,56,49,0);
      let dycreatorE = String.fromCharCode(57,55,99,107,56,100,0) == uimanager9;
      do {
          let shrinkg = String.fromCharCode(117,112,100,97,116,101,95,111,95,54,52,0);
          let floater1 = String.fromCharCode(99,104,114,111,109,97,109,99,95,122,95,57,57,0);
          let unreadg = false;
         uimanager9 += `${(uimanager9 == String.fromCharCode(81,0) ? uimanager9.length : (unreadg ? 3 : 2))}`;
         shrinkg += `${shrinkg.length}`;
         floater1 += "2";
         unreadg = 52 == shrinkg.length;
         if (dycreatorE) {
            break;
         }
      } while (dycreatorE && (uimanager9 == String.fromCharCode(50,0)));
      let mergerC = String.fromCharCode(48,54,57,117,0) == uimanager9;
      do {
          let questw: Map<any, any> = new Map([[String.fromCharCode(106,112,101,103,108,115,95,100,95,56,56,0),208], [String.fromCharCode(109,95,52,55,95,116,110,112,117,116,0),469], [String.fromCharCode(119,101,108,99,111,109,101,95,120,95,51,57,0),120]]);
          let umeng9 = 0.0;
          let charti = 4;
         uimanager9 = `${uimanager9.length}`;
         questw.set(`${charti}`, charti);
         umeng9 *= parseFloat(`${questw.size >> (Math.min(Math.abs(3), 1))}`);
         if (mergerC) {
            break;
         }
      } while ((uimanager9.includes(`${uimanager9.length}`)) && mergerC);
      if (3 == uimanager9.length) {
          let maily = 3.0;
         uimanager9 += `${3 * parseInt(`${maily}`)}`;
      }
      tempx += `${2 >> (Math.min(5, uimanager9.length))}`;
   while ((3 | latnq.length) < 5 || 3 < (stationq | latnq.length)) {
       let renews = String.fromCharCode(115,95,54,50,95,99,115,104,97,114,112,0);
       let heji8 = 1.0;
       let bingv = 0.0;
       let playlistE = String.fromCharCode(114,101,113,117,101,115,116,101,100,95,111,95,56,55,0);
       let giftG = String.fromCharCode(102,95,53,57,95,100,114,97,103,0);
      while (1.46 > (renews.length - heji8) && (3 * renews.length) > 3) {
         renews = `${(renews == String.fromCharCode(52,0) ? parseInt(`${bingv}`) : renews.length)}`;
         break;
      }
         playlistE += `${parseInt(`${bingv}`) & parseInt(`${heji8}`)}`;
         playlistE += `${renews.length | parseInt(`${heji8}`)}`;
         bingv *= parseFloat(`${3 - parseInt(`${heji8}`)}`);
      if (1 > (3 << (Math.min(5, playlistE.length)))) {
          let logoutg: Map<any, any> = new Map([[String.fromCharCode(116,95,52,53,95,102,114,101,101,109,0),413], [String.fromCharCode(109,109,99,116,120,95,52,95,52,0),768]]);
         bingv /= Math.max(4, parseFloat(`${giftG.length % 2}`));
         logoutg = new Map([[`${logoutg.size}`, logoutg.size]]);
      }
         bingv -= parseFloat(`${2}`);
      for (let h = 0; h < 1; h++) {
         heji8 /= Math.max(3 / (Math.max(8, playlistE.length)), 5);
      }
         giftG = `${(String.fromCharCode(101,0) == renews ? parseInt(`${heji8}`) : renews.length)}`;
      if (!giftG.includes(`${bingv}`)) {
          let tickJ = String.fromCharCode(114,101,102,108,101,99,116,95,121,95,57,49,0);
          let libreactperfloggerjniH: Array<any> = [String.fromCharCode(99,95,56,51,95,103,114,111,117,112,110,97,109,101,115,0), String.fromCharCode(100,105,121,102,112,95,56,95,50,55,0)];
          let zhuboi = String.fromCharCode(97,95,56,52,95,115,116,114,105,107,101,116,104,114,111,117,103,104,115,0);
         giftG = `${playlistE.length * renews.length}`;
         tickJ += `${libreactperfloggerjniH.length / (Math.max(zhuboi.length, 2))}`;
         libreactperfloggerjniH = [libreactperfloggerjniH.length & 3];
         zhuboi += `${3 << (Math.min(1, libreactperfloggerjniH.length))}`;
      }
      while (5 < (parseInt(`${heji8}`) - playlistE.length) && 2.97 < (playlistE.length - heji8)) {
         heji8 -= 3 + giftG.length;
         break;
      }
      if (1.20 == heji8) {
          let backgroundy = true;
          let attributedstringU = 1.0;
          let libreactQ = String.fromCharCode(105,95,50,54,95,104,100,108,114,0);
          let libyogaC = 5;
         renews += `${parseInt(`${heji8}`)}`;
         backgroundy = (libyogaC - attributedstringU) < 45;
         attributedstringU /= Math.max(2, parseFloat(`${2 ^ libyogaC}`));
         libreactQ = `${2 ^ parseInt(`${attributedstringU}`)}`;
      }
         playlistE = `${(String.fromCharCode(65,0) == giftG ? playlistE.length : giftG.length)}`;
      while (3 <= (giftG.length / 3) || 1 <= (giftG.length * 3)) {
          let statisticsc = String.fromCharCode(98,111,111,107,109,97,114,107,95,104,95,49,51,0);
          let spec4 = 3;
          let serviceL = true;
         bingv /= Math.max(parseFloat(`${parseInt(`${heji8}`) | playlistE.length}`), 4);
         statisticsc += `${statisticsc.length ^ 2}`;
         spec4 -= 1;
         serviceL = spec4 < 56 && !serviceL;
         break;
      }
      let adultP = 9889955.0 >= heji8;
      do {
         heji8 *= parseInt(`${heji8}`) * 3;
         if (adultP) {
            break;
         }
      } while (adultP && (bingv >= 2.2));
      if (2 >= renews.length) {
         playlistE = `${playlistE.length}`;
      }
      stationq -= 2 - playlistE.length;
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
       let loginP = String.fromCharCode(113,117,101,114,121,95,118,95,54,48,0);
    let disconnectedz = 4.0;
    let librrcQ = 3.0;
    let tickedp = 2.0;
    let descM = String.fromCharCode(114,95,49,55,95,114,118,100,115,112,0);
    let emptya = true;
    let interstitialq = false;
    let neon1: Map<any, any> = new Map([[String.fromCharCode(104,95,57,48,95,114,101,102,0),true ], [String.fromCharCode(100,101,115,105,114,101,100,95,102,95,49,52,0),false ], [String.fromCharCode(117,95,53,54,0),true ]]);
    let selected7 = 3.0;
    let modityA = false;
    let qaag2 = 3;
    let soundH = true;
   while (soundH) {
      soundH = modityA;
      break;
   }
   if (3.8 >= (5.96 + selected7) && !emptya) {
      selected7 += parseInt(`${librrcQ}`) >> (Math.min(Math.abs(parseInt(`${disconnectedz}`)), 4));
   }
       let topicY = 1;
       let benefiti = String.fromCharCode(99,97,116,101,103,111,114,105,122,101,95,120,95,53,57,0);
       let dplusl = String.fromCharCode(102,111,117,114,95,115,95,54,52,0);
         benefiti = `${(benefiti == String.fromCharCode(83,0) ? benefiti.length : topicY)}`;
      while (benefiti.startsWith(`${topicY}`)) {
         benefiti = "3";
         break;
      }
       let grayX: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,95,98,95,55,54,0),598], [String.fromCharCode(105,110,104,101,114,105,116,0),360]]);
      for (let e = 0; e < 3; e++) {
         benefiti = `${benefiti.length}`;
      }
         benefiti = `${grayX.size + topicY}`;
      tickedp -= parseFloat(`${2}`);
       let questU = 5.0;
       let codegena = 3;
      if ((codegena / (Math.max(questU, 2))) < 5.2) {
         questU *= parseFloat(`${2}`);
      }
         questU += parseFloat(`${parseInt(`${questU}`) << (Math.min(3, Math.abs(codegena)))}`);
         codegena &= 2 | parseInt(`${questU}`);
          let mbsplashx = String.fromCharCode(118,95,55,95,115,108,105,100,0);
         codegena ^= mbsplashx.length % (Math.max(7, parseInt(`${questU}`)));
      for (let m = 0; m < 1; m++) {
          let loginZ = 5;
          let disconnectedZ = 5;
          let catalogw = String.fromCharCode(120,95,49,49,95,115,121,110,99,109,97,114,107,101,114,0);
          let placemente = String.fromCharCode(105,102,97,100,100,114,115,95,103,95,56,52,0);
          let placementu = String.fromCharCode(115,116,97,107,105,110,103,95,100,95,55,50,0);
         codegena <<= Math.min(Math.abs(parseInt(`${questU}`)), 1);
         loginZ -= placementu.length << (Math.min(4, Math.abs(loginZ)));
         disconnectedZ ^= catalogw.length;
         catalogw += `${placementu.length * 3}`;
         placemente += `${loginZ - 3}`;
      }
         codegena >>= Math.min(5, Math.abs(codegena));
      emptya = questU > 71.26;
      librrcQ /= Math.max(2, 2 + parseInt(`${selected7}`));
      librrcQ -= 2 << (Math.min(4, Math.abs(parseInt(`${selected7}`))));
      selected7 /= Math.max(5, descM.length << (Math.min(Math.abs(1), 3)));

    const bannerRes = await yys_CurrentLang.getBannerAd(adultMode ? 113 : 112);
    const banner = bannerRes.ads;

   while (2.69 >= (neon1.size * selected7) || (selected7 * neon1.size) >= 2.69) {
      neon1.set(`${modityA}`, parseInt(`${disconnectedz}`) << (Math.min(2, Math.abs(1))));
      break;
   }
   let default_07d = String.fromCharCode(53,120,100,99,112,51,51,106,0) == loginP;
   do {
      loginP += "2";
      if (default_07d) {
         break;
      }
   } while (default_07d && (!emptya));
      emptya = librrcQ > 52.99;
      tickedp *= parseFloat(`${neon1.size}`);
       let rulesJ = 4.0;
       let libsentryd = String.fromCharCode(112,108,97,110,95,118,95,54,53,0);
       let mbsplashD = 5;
         libsentryd += `${libsentryd.length}`;
         mbsplashD >>= Math.min(2, Math.abs(mbsplashD));
      if (1.51 < rulesJ) {
         libsentryd = `${(String.fromCharCode(69,0) == libsentryd ? mbsplashD : libsentryd.length)}`;
      }
         mbsplashD %= Math.max(1, parseInt(`${rulesJ}`) % 1);
      let qaagv = 6574501.0 <= rulesJ;
      do {
         rulesJ += 2;
         if (qaagv) {
            break;
         }
      } while (qaagv && (libsentryd.endsWith(`${rulesJ}`)));
       let leaguez = 1;
          let nativemoduleJ = true;
         libsentryd = "1";
         nativemoduleJ = !nativemoduleJ;
      for (let s = 0; s < 3; s++) {
         mbsplashD /= Math.max(1, parseInt(`${rulesJ}`) >> (Math.min(Math.abs(2), 1)));
      }
         mbsplashD /= Math.max(3, libsentryd.length);
      disconnectedz *= (parseFloat(`${(soundH ? 1 : 3) >> (Math.min(Math.abs(parseInt(`${rulesJ}`)), 1))}`));
   if (descM.length < 5 && !soundH) {
       let whistleI: Map<any, any> = new Map([[String.fromCharCode(122,114,101,111,114,100,101,114,95,118,95,52,57,0),913], [String.fromCharCode(109,95,49,48,48,95,109,101,114,103,101,0),407]]);
       let typesJ: Array<any> = [386, 216, 483];
       let analyticl = false;
       let trashY: Array<any> = [427, 41];
          let nalyticsx: Map<any, any> = new Map([[String.fromCharCode(109,95,54,53,95,103,108,111,98,0),334], [String.fromCharCode(111,95,50,49,95,115,101,112,97,114,97,116,101,115,0),680], [String.fromCharCode(102,111,117,110,100,95,121,95,55,57,0),974]]);
          let libreactnativeblobu = 5.0;
          let reactnativejs3 = 2.0;
         typesJ.push((3 - (analyticl ? 4 : 1)));
         nalyticsx.set(`${libreactnativeblobu}`, nalyticsx.size);
         libreactnativeblobu += 1;
         reactnativejs3 *= parseFloat(`${2}`);
         analyticl = !analyticl;
      let sportu = 8412301 <= typesJ.length;
      do {
          let activityQ = 0.0;
          let layoutb = true;
          let catalogc: Array<any> = [958, 722, 559];
          let libreactperfloggerjniA = 1.0;
         typesJ.push(((analyticl ? 4 : 4) << (Math.min(typesJ.length, 3))));
         activityQ /= Math.max(parseFloat(`${2 / (Math.max(parseInt(`${libreactperfloggerjniA}`), 5))}`), 4);
         layoutb = layoutb || catalogc.length <= 6;
         catalogc.push(catalogc.length);
         libreactperfloggerjniA += 3;
         if (sportu) {
            break;
         }
      } while (sportu && (2 >= (whistleI.size / (Math.max(2, 10))) || 4 >= (2 / (Math.max(10, typesJ.length)))));
      if (1 < (trashY.length >> (Math.min(Math.abs(whistleI.size), 2))) && (1 >> (Math.min(2, trashY.length))) < 4) {
         whistleI = new Map([[`${typesJ.length}`, typesJ.length]]);
      }
         whistleI.set(`${typesJ.length}`, whistleI.size);
      for (let o = 0; o < 2; o++) {
          let componentregistry4 = true;
          let trashx = String.fromCharCode(97,112,112,115,95,102,95,50,49,0);
          let bottomM = String.fromCharCode(110,95,56,53,95,114,101,118,97,108,105,100,97,116,101,100,0);
          let actionsL: Map<any, any> = new Map([[String.fromCharCode(115,95,51,52,95,119,105,114,101,102,114,97,109,101,0),215], [String.fromCharCode(111,115,116,104,114,101,97,100,115,95,101,95,52,48,0),869], [String.fromCharCode(111,95,51,55,95,103,97,117,115,115,0),624]]);
          let detailss: Map<any, any> = new Map([[String.fromCharCode(107,95,50,54,95,112,114,111,98,101,0),true ], [String.fromCharCode(105,95,52,55,95,97,114,116,105,99,108,101,0),false ]]);
         whistleI = new Map([[`${typesJ.length}`, typesJ.length]]);
         componentregistry4 = detailss.size <= actionsL.size;
         trashx += `${(trashx.length - (componentregistry4 ? 1 : 4))}`;
         bottomM += `${(bottomM == String.fromCharCode(74,0) ? trashx.length : bottomM.length)}`;
         actionsL.set(trashx, 2);
         detailss = new Map([[`${detailss.size}`, detailss.size ^ 3]]);
      }
          let black6 = String.fromCharCode(101,95,51,51,0);
          let libsgcore3 = String.fromCharCode(114,101,97,100,109,101,95,55,95,56,56,0);
          let hejic: Array<any> = [294, 424, 882];
         whistleI = new Map([[`${whistleI.size}`, 1 - whistleI.size]]);
         black6 += `${hejic.length}`;
         libsgcore3 = `${hejic.length}`;
      let arrowz = analyticl ? !analyticl : analyticl;
      do {
          let updatesy = 3.0;
          let policyr = 1;
          let typingA = String.fromCharCode(105,95,51,48,95,101,110,113,117,101,117,101,100,0);
          let updatesyE = String.fromCharCode(117,118,97,114,105,110,116,95,115,95,55,54,0);
          let hongkongx: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,115,117,114,101,95,111,95,51,51,0),710], [String.fromCharCode(119,97,118,114,101,97,100,101,114,95,52,95,57,50,0),771]]);
         analyticl = whistleI.size <= 32;
         updatesy -= parseFloat(`${typingA.length}`);
         policyr += 2;
         typingA = `${(String.fromCharCode(118,0) == updatesyE ? policyr : updatesyE.length)}`;
         hongkongx = new Map([[typingA, policyr << (Math.min(typingA.length, 5))]]);
         if (arrowz) {
            break;
         }
      } while ((analyticl) && arrowz);
         typesJ.push(((analyticl ? 5 : 4) % 1));
      let textinputA = trashY.length <= 5853644;
      do {
          let zhengpiano = 3.0;
          let readf = 1.0;
          let heartJ = 3;
         trashY = [(parseInt(`${readf}`) / (Math.max(9, (analyticl ? 1 : 3))))];
         zhengpiano -= parseFloat(`${heartJ + parseInt(`${zhengpiano}`)}`);
         readf /= Math.max(3, 4);
         heartJ &= heartJ;
         if (textinputA) {
            break;
         }
      } while (textinputA && (!Array.from(whistleI.values()).includes(trashY.length)));
       let libtanf: Array<any> = [661, 437, 48];
      if (Array.from(whistleI.values()).includes(typesJ.length)) {
          let libavfilterm = 4;
          let header2 = String.fromCharCode(107,95,50,48,95,108,97,121,101,114,0);
          let profileF = 1;
         whistleI = new Map([[`${analyticl}`, ((analyticl ? 2 : 2))]]);
         libavfilterm >>= Math.min(Math.abs(2 - profileF), 3);
         header2 = `${(header2 == String.fromCharCode(107,0) ? libavfilterm : header2.length)}`;
         profileF *= profileF - 3;
      }
      soundH = interstitialq;
   }
   while ((neon1.size + 2) <= 3) {
      emptya = emptya && 99 >= qaag2;
      break;
   }

    if (banner) {

       let hooksL = 4;
       let sentryO = String.fromCharCode(116,95,54,49,95,111,110,103,111,105,110,103,0);
          let traminit: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,115,110,97,109,101,95,103,95,49,50,0),175], [String.fromCharCode(116,110,112,117,116,95,49,95,49,49,0),392]]);
         hooksL |= 3 | hooksL;
         traminit = new Map([[`${traminit.size}`, traminit.size]]);
      for (let r = 0; r < 1; r++) {
         hooksL += hooksL - 2;
      }
      if (sentryO.endsWith(`${hooksL}`)) {
         hooksL -= sentryO.length;
      }
          let qnewsh = 3;
          let redirect_ = 5.0;
         hooksL &= 1 % (Math.max(5, parseInt(`${redirect_}`)));
         qnewsh -= qnewsh;
         redirect_ -= qnewsh + qnewsh;
      let configH = 7710468 >= sentryO.length;
      do {
         sentryO += "1";
         if (configH) {
            break;
         }
      } while ((2 > hooksL) && configH);
       let options6 = 0;
      interstitialq = 8.36 >= tickedp;
   if (soundH) {
      soundH = (41 <= ((!emptya ? 41 : descM.length) >> (Math.min(descM.length, 5))));
   }
   while (4 == (qaag2 % (Math.max(2, 9))) && 1 == (qaag2 % 2)) {
      descM += `${(loginP == String.fromCharCode(102,0) ? parseInt(`${librrcQ}`) : loginP.length)}`;
      break;
   }
       let desc6 = String.fromCharCode(97,112,112,114,111,112,114,105,97,116,101,95,98,95,52,55,0);
         desc6 += `${desc6.length | 1}`;
      while (desc6.includes(`${desc6.length}`)) {
          let emojik = true;
          let dragi: Array<any> = [669, 818, 643];
          let zhengpian4 = true;
         desc6 += `${3 << (Math.min(1, desc6.length))}`;
         emojik = dragi.includes(emojik);
         dragi.push(dragi.length);
         zhengpian4 = dragi.includes(emojik);
         break;
      }
      for (let i = 0; i < 1; i++) {
          let libloggerp = false;
          let with_si = String.fromCharCode(104,95,52,49,95,105,115,112,108,97,121,0);
          let ewardedS = 0.0;
          let updatesv = 0.0;
         desc6 = `${parseInt(`${ewardedS}`) | 1}`;
         libloggerp = !libloggerp || updatesv >= 62.81;
         with_si += `${(3 | (libloggerp ? 3 : 4))}`;
         ewardedS /= Math.max(3, parseInt(`${updatesv}`));
      }
      emptya = 53 <= qaag2;
   for (let c = 0; c < 3; c++) {
      qaag2 ^= (descM.length - (soundH ? 4 : 2));
   }
      tickedp += parseFloat(`${parseInt(`${selected7}`)}`);
      selected7 /= Math.max(((modityA ? 3 : 4) | parseInt(`${selected7}`)), 3);
      setBannerAd(banner);
    } else {

   if (5 <= neon1.size || (neon1.size - 5) <= 5) {
      interstitialq = 46.95 > librrcQ || !interstitialq;
   }
      loginP = `${((modityA ? 1 : 5) | parseInt(`${selected7}`))}`;
   for (let o = 0; o < 2; o++) {
       let chartg: Map<any, any> = new Map([[String.fromCharCode(120,95,55,52,95,97,116,116,114,97,99,116,105,110,103,0),330], [String.fromCharCode(120,95,51,48,95,118,105,101,119,101,114,115,0),658]]);
       let runtimeA = 3;
       let greenA = String.fromCharCode(116,95,50,50,95,115,116,97,99,107,101,100,0);
       let textlayoutmanagerW = String.fromCharCode(97,95,53,49,95,102,117,110,99,116,105,111,110,0);
      while (Array.from(chartg.values()).includes(runtimeA)) {
         chartg.set(textlayoutmanagerW, textlayoutmanagerW.length);
         break;
      }
         runtimeA |= 2;
      while (runtimeA <= greenA.length) {
         runtimeA += greenA.length;
         break;
      }
      while (textlayoutmanagerW.startsWith(`${chartg.size}`)) {
          let cancelY = String.fromCharCode(117,114,108,115,95,113,95,57,52,0);
          let mbnative0 = 5;
          let suggestion0 = 3.0;
          let telegramO = String.fromCharCode(115,101,114,105,97,108,110,111,0);
         chartg = new Map([[greenA, 3]]);
         cancelY += `${parseInt(`${suggestion0}`)}`;
         mbnative0 *= parseInt(`${suggestion0}`);
         telegramO = `${telegramO.length}`;
         break;
      }
          let gpayd: Array<any> = [String.fromCharCode(121,95,54,56,95,112,114,111,103,114,97,109,109,97,116,105,99,97,108,108,121,0), String.fromCharCode(98,108,105,110,107,95,56,95,56,49,0), String.fromCharCode(116,121,112,0)];
         chartg.set(textlayoutmanagerW, textlayoutmanagerW.length + chartg.size);
         gpayd = [gpayd.length - gpayd.length];
      let mbnativeadvancedM = runtimeA <= 5805603;
      do {
         runtimeA >>= Math.min(Math.abs((String.fromCharCode(79,0) == textlayoutmanagerW ? runtimeA : textlayoutmanagerW.length)), 1);
         if (mbnativeadvancedM) {
            break;
         }
      } while ((5 == (runtimeA << (Math.min(Math.abs(chartg.size), 3)))) && mbnativeadvancedM);
      while (greenA != textlayoutmanagerW) {
         textlayoutmanagerW = `${textlayoutmanagerW.length}`;
         break;
      }
      let textD = greenA.length <= 7723738;
      do {
          let popupN: Array<any> = [94, 530, 432];
          let shirtj = 3.0;
          let calendarR = 0;
         greenA += `${parseInt(`${shirtj}`) & 1}`;
         popupN = [2 << (Math.min(Math.abs(calendarR), 5))];
         shirtj += parseFloat(`${calendarR}`);
         if (textD) {
            break;
         }
      } while ((4 <= textlayoutmanagerW.length) && textD);
          let favoriteb = 3.0;
          let productE = 3.0;
         greenA += `${chartg.size + greenA.length}`;
         favoriteb /= Math.max(2, parseInt(`${favoriteb}`) % 2);
         productE /= Math.max(parseFloat(`${parseInt(`${favoriteb}`) % 2}`), 2);
      let showA = 5565447 >= textlayoutmanagerW.length;
      do {
         textlayoutmanagerW += `${textlayoutmanagerW.length}`;
         if (showA) {
            break;
         }
      } while (showA && (greenA.length >= 4));
          let styley = 0.0;
         greenA += `${textlayoutmanagerW.length >> (Math.min(5, Math.abs(parseInt(`${styley}`))))}`;
          let gpay0 = String.fromCharCode(121,117,118,112,108,95,55,95,52,54,0);
          let inactivey = String.fromCharCode(104,95,57,95,115,116,97,98,108,101,0);
          let ksadk = 1;
         textlayoutmanagerW += `${(gpay0 == String.fromCharCode(69,0) ? ksadk : gpay0.length)}`;
         inactivey = "2";
      librrcQ *= 2 >> (Math.min(4, textlayoutmanagerW.length));
   }
   let unreadj = librrcQ >= 9193185.0;
   do {
      librrcQ += parseInt(`${disconnectedz}`) | 1;
      if (unreadj) {
         break;
      }
   } while ((neon1.size > 1) && unreadj);
   if (!interstitialq) {
      neon1.set(loginP, (3 + (soundH ? 1 : 4)));
   }
   if ((loginP.length >> (Math.min(Math.abs(2), 1))) == 1 && (parseInt(`${tickedp}`) * 2) == 1) {
       let middlek = String.fromCharCode(115,116,114,117,99,116,117,114,101,115,95,110,95,56,50,0);
       let untick5 = 2;
       let ball_ = String.fromCharCode(116,114,117,115,116,101,100,95,115,95,57,55,0);
      for (let b = 0; b < 2; b++) {
         untick5 >>= Math.min(3, Math.abs(ball_.length << (Math.min(5, middlek.length))));
      }
         middlek = `${ball_.length * 3}`;
         middlek = `${ball_.length}`;
      while (middlek == String.fromCharCode(107,0)) {
         ball_ = `${1 | middlek.length}`;
         break;
      }
      for (let f = 0; f < 3; f++) {
          let coreV = String.fromCharCode(116,114,105,109,95,114,95,50,55,0);
          let type_v1T = String.fromCharCode(106,95,52,54,95,105,112,111,108,0);
          let signinup4 = String.fromCharCode(101,95,51,49,95,114,101,115,101,116,117,112,0);
          let fnewinterstitials = String.fromCharCode(101,110,97,98,108,101,95,103,95,56,53,0);
          let stationw = true;
         middlek = `${(String.fromCharCode(107,0) == ball_ ? ball_.length : fnewinterstitials.length)}`;
         coreV += `${type_v1T.length}`;
         type_v1T += `${signinup4.length * type_v1T.length}`;
         signinup4 = `${(coreV == String.fromCharCode(103,0) ? coreV.length : (stationw ? 4 : 3))}`;
         fnewinterstitials = `${signinup4.length}`;
      }
      tickedp += parseFloat(`${parseInt(`${librrcQ}`) - descM.length}`);
   }
      descM += `${neon1.size}`;
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

  const fetchVod = () =>
    yys_Downloader.getList({
      category: vod?.vod_class?.split(",").shift(),
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
    }).then((data) => data.List as yys_ActivityTumbnail[]);

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
    yys_Downloader.getList({
      category: vod?.vod_class,
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
      rand: 1,
      xMode: true,
    }).then((data) => data.List as yys_ConfigFound[]);

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
       let connection0 = 3.0;
    let reducerM = 1.0;
    let philippinesh = String.fromCharCode(114,95,51,56,95,118,100,112,97,117,0);
    let incidentC = 4;
    let bodanB: Map<any, any> = new Map([[String.fromCharCode(104,95,52,51,95,99,104,97,110,103,101,103,114,111,117,112,0),6], [String.fromCharCode(115,112,101,99,116,114,97,95,100,95,50,57,0),919], [String.fromCharCode(108,111,99,97,108,105,116,121,0),158]]);
    let light5 = 1.0;
    let hejic = 4.0;
    let nalyticsG = String.fromCharCode(122,95,50,50,95,114,101,116,114,97,110,115,109,105,115,115,105,111,110,0);
    let fastforwardD = String.fromCharCode(102,95,57,53,95,103,114,97,112,104,105,99,0);
    let feedbackU = String.fromCharCode(112,101,97,107,115,95,118,95,57,56,0);
    let navigation5 = 0;
    let indicatorM = String.fromCharCode(112,114,101,100,101,102,105,110,101,100,95,121,95,54,55,0);
    let malaysiaG = String.fromCharCode(105,110,102,105,110,105,116,101,95,50,95,49,54,0);
    let flipperl: Map<any, any> = new Map([[String.fromCharCode(114,95,57,52,95,97,99,114,111,110,121,109,0),390], [String.fromCharCode(107,95,56,49,95,105,110,116,101,114,112,111,108,97,116,111,114,115,0),872], [String.fromCharCode(99,95,57,54,95,120,98,105,110,0),939]]);
    let malaysiae: Array<any> = [555, 856, 260];
    let slider2: Array<any> = [745, 392];
    let renderV = false;
      navigation5 /= Math.max(1, 1);
   for (let v = 0; v < 3; v++) {
      hejic *= parseFloat(`${fastforwardD.length}`);
   }
       let filterh = 4;
       let textn = 0.0;
       let zhengpianY = String.fromCharCode(109,95,53,57,95,116,119,105,110,118,113,0);
      while ((filterh / 1) < 4) {
         textn /= Math.max(3, parseFloat(`${filterh}`));
         break;
      }
         textn /= Math.max(5, (parseFloat(`${String.fromCharCode(106,0) == zhengpianY ? zhengpianY.length : parseInt(`${textn}`)}`)));
          let directp = 0.0;
         filterh &= parseInt(`${directp}`);
          let androidS = false;
          let default_29f = false;
         textn += parseFloat(`${zhengpianY.length}`);
         androidS = (!default_29f ? !androidS : default_29f);
       let mountingS = 3.0;
       let libreactnativeblobk = 0.0;
      if ((2 % (Math.max(1, zhengpianY.length))) >= 1 && (zhengpianY.length * libreactnativeblobk) >= 1.61) {
         zhengpianY += "1";
      }
          let emojiB = false;
          let nextW: Map<any, any> = new Map([[String.fromCharCode(103,95,52,95,116,103,101,116,0),905], [String.fromCharCode(108,111,99,97,116,105,111,110,115,95,109,95,49,48,48,0),274]]);
         libreactnativeblobk += filterh >> (Math.min(zhengpianY.length, 4));
         emojiB = (((emojiB ? nextW.size : 20) / (Math.max(5, nextW.size))) < 40);
         textn += parseFloat(`${filterh + 2}`);
          let proxyO: Array<any> = [170, 759];
         zhengpianY = `${filterh ^ 3}`;
         proxyO = [proxyO.length];
      fastforwardD = `${2 * bodanB.size}`;
      feedbackU += `${bodanB.size % 1}`;
   let libreanimatedF = 9679257 >= incidentC;
   do {
       let libreactnativejni4: Map<any, any> = new Map([[String.fromCharCode(109,95,49,48,48,95,118,108,99,111,100,101,99,0),String.fromCharCode(101,95,52,57,95,112,97,116,104,109,116,117,0)], [String.fromCharCode(103,95,55,52,95,112,114,105,109,101,114,0),String.fromCharCode(97,95,56,56,95,101,118,101,110,0)], [String.fromCharCode(117,95,57,52,95,100,101,115,116,0),String.fromCharCode(114,101,97,114,114,97,110,103,101,95,57,95,49,50,0)]]);
       let basketballo = 0;
       let mbridgeC = String.fromCharCode(99,104,97,115,101,95,103,95,53,50,0);
       let descI = 3;
       let bufferK = false;
         bufferK = (basketballo / (Math.max(mbridgeC.length, 2))) <= 41;
         descI /= Math.max(basketballo ^ 2, 5);
         descI *= basketballo | 2;
      if ((basketballo >> (Math.min(Math.abs(5), 2))) < 3) {
         libreactnativejni4 = new Map([[`${libreactnativejni4.size}`, libreactnativejni4.size]]);
      }
         bufferK = descI <= 84 || !bufferK;
      let latnM = 7139099 <= descI;
      do {
         descI &= libreactnativejni4.size - basketballo;
         if (latnM) {
            break;
         }
      } while (latnM && (4 < (mbridgeC.length / (Math.max(1, 10))) || (1 / (Math.max(9, mbridgeC.length))) < 2));
      if (5 >= mbridgeC.length && !bufferK) {
         mbridgeC = `${1 * libreactnativejni4.size}`;
      }
          let alertb = true;
          let analytic5 = String.fromCharCode(100,118,100,115,117,98,0);
          let crossC = 4.0;
         libreactnativejni4.set(`${descI}`, basketballo & descI);
         alertb = analytic5.length <= 32;
         analytic5 += `${((alertb ? 5 : 5) | analytic5.length)}`;
         crossC -= ((alertb ? 3 : 4) % (Math.max(4, analytic5.length)));
      let complete1 = basketballo <= 7819991;
      do {
         basketballo <<= Math.min(3, Math.abs(1));
         if (complete1) {
            break;
         }
      } while (complete1 && ((1 >> (Math.min(3, Math.abs(descI)))) >= 2));
         descI -= mbridgeC.length;
         basketballo >>= Math.min(Math.abs(descI - basketballo), 3);
          let launcher4: Map<any, any> = new Map([[String.fromCharCode(113,117,97,100,95,102,95,52,54,0),923], [String.fromCharCode(115,95,56,0),258], [String.fromCharCode(113,95,51,95,115,117,98,115,116,114,105,110,103,0),509]]);
          let libyogaQ = 5.0;
         bufferK = libyogaQ <= 88.11;
         launcher4 = new Map([[`${launcher4.size}`, launcher4.size & 1]]);
         libyogaQ += parseFloat(`${1}`);
         libreactnativejni4 = new Map([[`${libreactnativejni4.size}`, 1]]);
          let gdtadvx: Map<any, any> = new Map([[String.fromCharCode(97,114,98,105,116,114,97,114,121,95,105,95,51,56,0),78], [String.fromCharCode(120,95,54,95,102,97,99,116,111,114,105,122,97,116,105,111,110,0),543], [String.fromCharCode(113,95,52,56,95,117,101,102,97,0),711]]);
          let temperaturer = 5;
         libreactnativejni4.set(`${descI}`, descI);
         gdtadvx.set(`${temperaturer}`, temperaturer);
         basketballo *= basketballo;
      incidentC /= Math.max(4, parseInt(`${hejic}`) * 3);
      if (libreanimatedF) {
         break;
      }
   } while (((3 | incidentC) < 2 && (philippinesh.length | incidentC) < 3) && libreanimatedF);
       let libfabricjniu: Array<any> = [String.fromCharCode(116,114,120,116,0), String.fromCharCode(115,111,100,101,97,108,108,111,99,95,116,95,49,51,0)];
      for (let o = 0; o < 3; o++) {
          let latn6 = String.fromCharCode(98,95,53,53,95,115,117,98,112,111,105,110,116,0);
          let chinasameJ = 0.0;
          let expiredQ = String.fromCharCode(97,95,53,54,95,115,100,107,0);
          let sigmoba: Array<any> = [236, 102, 412];
         libfabricjniu = [sigmoba.length & expiredQ.length];
         latn6 = `${latn6.length % 2}`;
         chinasameJ -= parseFloat(`${parseInt(`${chinasameJ}`)}`);
         expiredQ += "2";
         sigmoba.push((latn6 == String.fromCharCode(79,0) ? parseInt(`${chinasameJ}`) : latn6.length));
      }
         libfabricjniu = [libfabricjniu.length + libfabricjniu.length];
          let context2: Map<any, any> = new Map([[String.fromCharCode(111,95,54,56,95,102,105,110,100,97,115,115,111,99,0),985], [String.fromCharCode(114,101,100,117,99,101,114,95,54,95,49,54,0),106]]);
          let libimagepipelineR = String.fromCharCode(113,95,49,57,95,119,105,101,110,101,114,0);
         libfabricjniu.push(context2.size / (Math.max(libimagepipelineR.length, 2)));
      navigation5 ^= 3 & philippinesh.length;
       let filledN = 3.0;
      while (3.75 <= filledN) {
         filledN += parseInt(`${filledN}`) | parseInt(`${filledN}`);
         break;
      }
       let circleG: Array<any> = [String.fromCharCode(114,101,103,0), String.fromCharCode(101,109,112,105,114,105,99,97,108,108,121,95,97,95,50,48,0), String.fromCharCode(104,95,53,50,95,105,110,118,111,108,118,101,100,0)];
      let final_gmG = circleG.length <= 6302616;
      do {
         circleG = [circleG.length];
         if (final_gmG) {
            break;
         }
      } while (final_gmG && (circleG.includes(filledN)));
      nalyticsG += `${navigation5}`;
   let middle3 = light5 >= 8269829.0;
   do {
       let telegram_ = String.fromCharCode(102,114,101,101,100,95,108,95,57,51,0);
       let successo = 3.0;
       let brightnessi = String.fromCharCode(112,108,97,110,97,114,95,102,95,55,49,0);
       let share8 = 5;
         telegram_ = `${share8}`;
      for (let u = 0; u < 2; u++) {
         successo /= Math.max(5, parseFloat(`${2 * share8}`));
      }
         share8 %= Math.max(2, 1);
         brightnessi = `${telegram_.length - 1}`;
         successo /= Math.max(parseFloat(`${share8 * telegram_.length}`), 5);
          let resendh = String.fromCharCode(114,95,49,52,95,109,111,117,115,0);
         telegram_ += `${resendh.length * 3}`;
      while (telegram_ != String.fromCharCode(103,0)) {
         brightnessi = `${brightnessi.length / 1}`;
         break;
      }
      if ((brightnessi.length | 4) >= 3) {
         brightnessi += `${parseInt(`${successo}`)}`;
      }
         successo /= Math.max(1, parseFloat(`${brightnessi.length}`));
         brightnessi = "1";
      let topicP = 9804430 >= share8;
      do {
          let darkQ = String.fromCharCode(120,95,53,51,95,103,101,111,103,114,97,112,104,105,99,97,108,0);
          let classesD: Array<any> = [String.fromCharCode(114,101,115,116,111,114,97,116,105,111,110,0), String.fromCharCode(99,95,50,56,95,112,111,108,108,105,110,103,0), String.fromCharCode(103,95,49,48,48,0)];
         share8 += brightnessi.length;
         darkQ += `${2 + darkQ.length}`;
         classesD.push(classesD.length ^ 1);
         if (topicP) {
            break;
         }
      } while (((share8 * successo) <= 1.75) && topicP);
          let catalogq = 5.0;
          let modelF = 1;
         successo *= parseFloat(`${brightnessi.length + share8}`);
         catalogq -= modelF;
         modelF *= 3 % (Math.max(parseInt(`${catalogq}`), 10));
      light5 /= Math.max(5, 2);
      if (middle3) {
         break;
      }
   } while ((!Array.from(bodanB.keys()).includes(`${light5}`)) && middle3);
      hejic *= (parseFloat(`${philippinesh == String.fromCharCode(110,0) ? parseInt(`${reducerM}`) : philippinesh.length}`));
   if (philippinesh.length >= parseInt(`${reducerM}`)) {
       let launchw = 0.0;
       let inviteQ = 3;
       let zoomQ: Map<any, any> = new Map([[String.fromCharCode(122,95,57,95,97,121,111,117,116,0),true ], [String.fromCharCode(110,95,57,49,95,105,102,97,115,116,0),true ]]);
      for (let m = 0; m < 2; m++) {
         launchw += inviteQ * parseInt(`${launchw}`);
      }
         zoomQ = new Map([[`${zoomQ.size}`, 2]]);
      while (5 < (5 / (Math.max(1, inviteQ)))) {
         inviteQ >>= Math.min(Math.abs(zoomQ.size | inviteQ), 2);
         break;
      }
       let blackw = String.fromCharCode(115,97,102,101,116,121,95,101,95,49,48,0);
       let nalyticsi = String.fromCharCode(115,104,105,109,95,119,95,57,57,0);
         blackw += `${zoomQ.size}`;
          let ballX = 3.0;
          let mimoE: Array<any> = [String.fromCharCode(104,95,53,53,95,100,105,115,116,97,110,99,101,115,0), String.fromCharCode(109,97,112,95,113,95,57,0), String.fromCharCode(110,95,49,56,95,111,118,101,114,114,105,100,101,115,0)];
         blackw = `${nalyticsi.length}`;
         ballX -= parseFloat(`${mimoE.length}`);
         mimoE = [parseInt(`${ballX}`) >> (Math.min(4, Math.abs(1)))];
          let core_ = 3.0;
          let modelE = String.fromCharCode(100,111,99,117,109,101,110,116,95,113,95,52,48,0);
          let internetL = 5.0;
         blackw += `${parseInt(`${core_}`) ^ 1}`;
         core_ /= Math.max(parseFloat(`${parseInt(`${internetL}`)}`), 3);
         modelE += `${modelE.length >> (Math.min(5, Math.abs(parseInt(`${internetL}`))))}`;
          let bellU: Map<any, any> = new Map([[String.fromCharCode(113,105,110,116,102,108,111,97,116,95,100,95,50,50,0),422], [String.fromCharCode(112,95,49,49,95,112,101,114,109,105,116,116,101,100,0),752]]);
          let serviceP = false;
          let componentregistrya: Array<any> = [696, 252, 153];
         zoomQ.set(nalyticsi, componentregistrya.length % 3);
         bellU.set(`${serviceP}`, ((serviceP ? 2 : 1) << (Math.min(Math.abs(bellU.size), 1))));
         componentregistrya = [bellU.size];
      let vertical4 = 6591879.0 <= launchw;
      do {
          let sigmobA = String.fromCharCode(106,95,53,54,95,115,108,111,112,101,0);
          let libfollyE = 0.0;
          let yellowv: Map<any, any> = new Map([[String.fromCharCode(108,95,49,54,95,109,97,110,97,103,101,115,0),134], [String.fromCharCode(114,101,102,101,114,0),103], [String.fromCharCode(108,95,54,50,95,119,97,114,110,105,110,103,0),228]]);
          let userq: Map<any, any> = new Map([[String.fromCharCode(107,95,53,51,95,105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,0),204], [String.fromCharCode(112,97,114,97,108,108,97,120,95,120,95,56,49,0),878]]);
         launchw -= parseInt(`${launchw}`);
         sigmobA += `${userq.size - yellowv.size}`;
         libfollyE *= sigmobA.length;
         yellowv = new Map([[`${userq.size}`, yellowv.size ^ 2]]);
         if (vertical4) {
            break;
         }
      } while (vertical4 && (2.80 >= (launchw - blackw.length) || (parseInt(`${launchw}`) - 1) >= 4));
      philippinesh += "3";
   }
      nalyticsG += `${bodanB.size << (Math.min(Math.abs(2), 2))}`;

    

      hejic /= Math.max(parseFloat(`${feedbackU.length}`), 1);
   let neon1 = 6111612 <= feedbackU.length;
   do {
       let nextWZ: Map<any, any> = new Map([[String.fromCharCode(108,105,98,97,118,102,111,114,109,97,116,95,54,95,56,52,0),679], [String.fromCharCode(99,111,109,112,108,101,120,95,108,95,50,0),666], [String.fromCharCode(107,95,53,54,95,114,116,114,101,101,0),694]]);
          let trashK: Array<any> = [788, 321];
          let zhubom = 2;
         nextWZ = new Map([[`${nextWZ.size}`, trashK.length * nextWZ.size]]);
         trashK.push(2 - zhubom);
         zhubom %= Math.max(3, 2);
      let zhubow = 7291109 >= nextWZ.size;
      do {
          let grayO = String.fromCharCode(118,101,99,115,95,121,95,57,53,0);
         nextWZ = new Map([[`${nextWZ.size}`, nextWZ.size << (Math.min(Math.abs(2), 1))]]);
         grayO += `${grayO.length ^ grayO.length}`;
         if (zhubow) {
            break;
         }
      } while (((2 * nextWZ.size) == 1 || (nextWZ.size * 2) == 5) && zhubow);
         nextWZ = new Map([[`${nextWZ.size}`, nextWZ.size | nextWZ.size]]);
      feedbackU = `${parseInt(`${light5}`) / (Math.max(1, incidentC))}`;
      if (neon1) {
         break;
      }
   } while (((hejic + 1.20) < 2.73) && neon1);
      bodanB.set(malaysiaG, 1);
      malaysiae = [1];
      bodanB.set(philippinesh, parseInt(`${light5}`) * 3);
       let scheduleC: Array<any> = [536, 356, 759];
       let tempg = String.fromCharCode(105,99,101,95,105,95,53,48,0);
       let modelsc = String.fromCharCode(99,111,110,118,115,97,109,112,95,107,95,49,49,0);
      for (let i = 0; i < 1; i++) {
         tempg = `${modelsc.length}`;
      }
         scheduleC = [modelsc.length - tempg.length];
         tempg = `${scheduleC.length}`;
          let more0 = String.fromCharCode(117,95,57,48,95,116,104,101,109,101,0);
          let cornerN = 5.0;
          let libfabricjni8 = String.fromCharCode(97,109,111,117,110,116,95,103,95,52,51,0);
         scheduleC = [parseInt(`${cornerN}`) / 3];
         more0 = "2";
         cornerN /= Math.max(parseFloat(`${more0.length}`), 1);
         libfabricjni8 += `${more0.length}`;
       let sheet0 = 2.0;
          let ajaxT = String.fromCharCode(98,95,50,56,95,102,111,110,116,0);
          let loadingI = false;
         tempg += `${2 | tempg.length}`;
         ajaxT = `${(String.fromCharCode(55,0) == ajaxT ? ajaxT.length : (loadingI ? 4 : 5))}`;
         loadingI = !loadingI;
         tempg = `${(String.fromCharCode(70,0) == modelsc ? scheduleC.length : modelsc.length)}`;
         modelsc = `${3 * tempg.length}`;
         tempg = `${modelsc.length | 1}`;
      fastforwardD = "1";
   let traminiL = String.fromCharCode(51,118,106,48,106,0) == feedbackU;
   do {
      feedbackU += "1";
      if (traminiL) {
         break;
      }
   } while ((fastforwardD.includes(feedbackU)) && traminiL);
       let catalogz: Map<any, any> = new Map([[String.fromCharCode(102,100,111,112,101,110,95,121,95,49,57,0),false ], [String.fromCharCode(101,114,115,105,111,110,95,118,95,56,55,0),true ]]);
       let libreactR = true;
          let textlayoutmanagerG = 5.0;
          let termsA = String.fromCharCode(116,101,115,116,110,101,116,95,97,95,55,51,0);
         catalogz = new Map([[`${catalogz.size}`, ((libreactR ? 5 : 1) * 2)]]);
         textlayoutmanagerG -= parseFloat(`${parseInt(`${textlayoutmanagerG}`) * termsA.length}`);
         termsA += `${1 | termsA.length}`;
      let confirmationF = 6634465 >= catalogz.size;
      do {
         catalogz = new Map([[`${catalogz.size}`, 2]]);
         if (confirmationF) {
            break;
         }
      } while ((4 <= catalogz.size) && confirmationF);
         libreactR = libreactR && catalogz.size < 31;
         libreactR = catalogz.size == 73;
          let filedL = false;
          let pointF: Array<any> = [375, 531, 560];
          let statsV = 3.0;
         libreactR = (71 == (pointF.length + (!libreactR ? 71 : pointF.length)));
         filedL = 63.2 >= statsV;
         statsV /= Math.max(4, parseFloat(`${3 ^ parseInt(`${statsV}`)}`));
      if ((catalogz.size / (Math.max(4, 8))) >= 3 || 4 >= catalogz.size) {
          let overlayo = false;
          let entryo: Map<any, any> = new Map([[String.fromCharCode(101,95,51,56,95,100,115,116,114,0),855], [String.fromCharCode(101,109,112,116,121,95,57,95,55,52,0),705]]);
          let moduled = String.fromCharCode(102,95,49,54,95,101,115,116,105,109,97,116,105,110,103,0);
          let emptyM: Map<any, any> = new Map([[String.fromCharCode(115,99,114,101,101,110,95,54,95,51,54,0),String.fromCharCode(115,95,52,55,95,113,112,105,115,0)], [String.fromCharCode(115,116,105,108,108,95,107,95,56,50,0),String.fromCharCode(112,107,116,104,100,114,95,51,95,55,50,0)], [String.fromCharCode(108,97,117,110,99,104,101,100,95,100,95,52,52,0),String.fromCharCode(99,110,116,95,105,95,57,54,0)]]);
          let sendQ = String.fromCharCode(122,101,116,97,95,117,95,55,53,0);
         catalogz.set(`${libreactR}`, 2);
         overlayo = !overlayo;
         entryo = new Map([[sendQ, 1 - sendQ.length]]);
         moduled += `${(sendQ == String.fromCharCode(77,0) ? sendQ.length : emptyM.size)}`;
         emptyM.set(`${sendQ}`, 1 - emptyM.size);
      }
      connection0 /= Math.max(parseFloat(`${indicatorM.length * 2}`), 2);
      fastforwardD = `${parseInt(`${connection0}`)}`;
       let sportF: Map<any, any> = new Map([[String.fromCharCode(117,95,56,51,95,114,101,115,105,100,117,97,108,0),422], [String.fromCharCode(103,95,56,56,95,108,111,110,103,105,116,117,100,101,0),384]]);
       let umengX = String.fromCharCode(121,95,54,54,95,112,111,115,116,105,110,105,116,0);
       let analyticT = String.fromCharCode(101,95,56,55,95,116,101,109,112,0);
         sportF.set(analyticT, (String.fromCharCode(83,0) == analyticT ? sportF.size : analyticT.length));
      if (3 > (umengX.length / 1) || (sportF.size / 1) > 2) {
          let trophyY = false;
         sportF.set(umengX, ((trophyY ? 4 : 2) / 2));
      }
      connection0 += parseFloat(`${navigation5}`);
      flipperl.set(`${connection0}`, 1);
    await refetch();

   for (let f = 0; f < 1; f++) {
      philippinesh += `${(nalyticsG == String.fromCharCode(49,0) ? feedbackU.length : nalyticsG.length)}`;
   }
      connection0 /= Math.max(1, parseFloat(`${philippinesh.length}`));
   while (!malaysiaG.startsWith(fastforwardD)) {
       let membershipI: Map<any, any> = new Map([[String.fromCharCode(107,95,54,53,95,115,111,102,116,116,104,114,101,115,104,0),357], [String.fromCharCode(117,112,115,116,114,101,97,109,0),358], [String.fromCharCode(119,95,57,57,95,112,105,99,107,109,111,100,101,0),44]]);
         membershipI.set(`${membershipI.size}`, 2);
         membershipI.set(`${membershipI.size}`, 1);
       let imagemanagerm: Map<any, any> = new Map([[String.fromCharCode(114,101,105,110,115,101,114,116,95,104,95,56,48,0),909], [String.fromCharCode(111,95,54,56,95,117,110,100,101,114,108,121,105,110,103,0),544], [String.fromCharCode(99,95,56,53,95,97,118,120,115,121,110,116,104,0),611]]);
      fastforwardD += `${membershipI.size >> (Math.min(Math.abs(3), 1))}`;
      break;
   }
   while ((malaysiaG.length - parseInt(`${reducerM}`)) >= 1 || 2.96 >= (reducerM - 3.32)) {
      malaysiaG += `${1 & parseInt(`${connection0}`)}`;
      break;
   }
      incidentC <<= Math.min(1, Math.abs(2));
   if (4 > (flipperl.size % (Math.max(fastforwardD.length, 3))) && 1 > (fastforwardD.length % 4)) {
      fastforwardD += `${malaysiae.length * 3}`;
   }
   while (nalyticsG.length >= navigation5) {
      nalyticsG = `${1 + parseInt(`${connection0}`)}`;
      break;
   }
   while (1 >= (1 - incidentC)) {
       let greenC = false;
       let whitev = String.fromCharCode(103,101,116,104,111,115,116,98,121,97,100,100,114,95,117,95,50,55,0);
       let brightnessW = String.fromCharCode(102,111,112,101,110,95,104,95,51,0);
       let latnP = String.fromCharCode(109,101,103,101,100,95,112,95,51,53,0);
       let customY = 1.0;
         brightnessW += `${latnP.length}`;
         whitev = `${1 % (Math.max(3, parseInt(`${customY}`)))}`;
      while (brightnessW.includes(`${greenC}`)) {
         brightnessW += `${(brightnessW == String.fromCharCode(86,0) ? parseInt(`${customY}`) : brightnessW.length)}`;
         break;
      }
         whitev = `${parseInt(`${customY}`) >> (Math.min(4, Math.abs(1)))}`;
       let y_lockn = String.fromCharCode(99,117,114,118,101,95,105,95,53,56,0);
      if (3 >= brightnessW.length) {
         brightnessW += `${(String.fromCharCode(101,0) == whitev ? whitev.length : (greenC ? 2 : 3))}`;
      }
         brightnessW = `${whitev.length}`;
       let imagemanager8 = 1;
         latnP = "2";
      let backgroundI = imagemanager8 <= 7384243;
      do {
          let whistleD = String.fromCharCode(97,100,100,120,95,117,95,54,51,0);
         imagemanager8 -= whitev.length;
         whistleD += `${whistleD.length}`;
         if (backgroundI) {
            break;
         }
      } while (backgroundI && (5 == (whitev.length % 4) && (imagemanager8 % (Math.max(4, 1))) == 1));
         whitev = `${2 & brightnessW.length}`;
       let libtanF = 1;
       let foregroundN = 5;
       let alerti = 4.0;
         customY /= Math.max(foregroundN & parseInt(`${alerti}`), 4);
      while (brightnessW.length >= 4) {
         brightnessW = "1";
         break;
      }
      incidentC += parseInt(`${connection0}`);
      break;
   }
   for (let a = 0; a < 3; a++) {
       let settingO = String.fromCharCode(112,97,117,115,101,100,95,121,95,54,57,0);
         settingO += `${3 & settingO.length}`;
       let mappingH: Array<any> = [String.fromCharCode(97,101,118,97,108,95,105,95,53,52,0), String.fromCharCode(98,101,99,104,95,117,95,53,55,0)];
          let flyerk = String.fromCharCode(115,95,53,56,95,99,111,109,112,97,116,105,98,108,101,0);
         settingO += `${settingO.length * 2}`;
         flyerk += `${(String.fromCharCode(69,0) == flyerk ? flyerk.length : flyerk.length)}`;
      connection0 += parseFloat(`${1}`);
   }
   while (2 <= (philippinesh.length >> (Math.min(Math.abs(5), 2)))) {
       let handlerW: Array<any> = [479, 650];
      if (handlerW.length > handlerW.length) {
         handlerW = [1];
      }
      while (handlerW.includes(handlerW.length)) {
         handlerW = [3 / (Math.max(2, handlerW.length))];
         break;
      }
         handlerW = [2];
      philippinesh = `${incidentC >> (Math.min(Math.abs(parseInt(`${hejic}`)), 1))}`;
      break;
   }
   while (3.6 > (hejic - incidentC)) {
       let langu: Array<any> = [658, 55];
       let plus_ = true;
       let containerU = 1;
      while (containerU >= 1) {
         containerU ^= langu.length;
         break;
      }
       let themeM = 1.0;
      for (let b = 0; b < 1; b++) {
          let rewardA = String.fromCharCode(101,95,55,50,95,115,97,109,101,0);
          let alertF: Map<any, any> = new Map([[String.fromCharCode(98,95,55,51,95,114,101,108,105,97,98,108,101,0),String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,95,48,95,55,49,0)], [String.fromCharCode(112,95,49,52,95,102,105,100,99,116,0),String.fromCharCode(105,110,118,111,99,97,116,105,111,110,95,107,95,54,0)], [String.fromCharCode(107,95,55,51,95,99,111,108,111,114,113,117,97,110,116,0),String.fromCharCode(110,95,56,48,95,115,116,117,110,0)]]);
          let mbbanner_ = 0.0;
         containerU &= parseInt(`${themeM}`);
         rewardA = `${(String.fromCharCode(53,0) == rewardA ? rewardA.length : parseInt(`${mbbanner_}`))}`;
         alertF.set(rewardA, alertF.size);
         mbbanner_ /= Math.max(1, parseFloat(`${3 ^ parseInt(`${mbbanner_}`)}`));
      }
      while (plus_ || 3 > (4 ^ langu.length)) {
         plus_ = langu.includes(themeM);
         break;
      }
         containerU /= Math.max(1, 2);
      while (3 >= (langu.length / (Math.max(4, containerU)))) {
         containerU >>= Math.min(1, Math.abs(3 >> (Math.min(Math.abs(parseInt(`${themeM}`)), 4))));
         break;
      }
      for (let a = 0; a < 1; a++) {
          let abidetect2 = 1;
          let libfbjniU = String.fromCharCode(103,95,53,48,95,111,114,105,101,110,116,97,116,105,111,110,0);
          let canvasF: Map<any, any> = new Map([[String.fromCharCode(115,112,101,97,107,95,101,95,49,50,0),String.fromCharCode(110,95,57,50,95,100,101,98,108,111,99,107,0)], [String.fromCharCode(113,95,56,56,95,121,117,118,112,108,0),String.fromCharCode(100,95,51,50,95,116,121,112,101,99,111,100,101,0)], [String.fromCharCode(104,95,54,53,95,114,119,103,116,0),String.fromCharCode(115,110,111,119,100,97,116,97,95,52,95,56,53,0)]]);
         plus_ = canvasF.size >= langu.length;
         abidetect2 *= 2;
         libfbjniU = `${libfbjniU.length}`;
         canvasF = new Map([[libfbjniU, abidetect2 * 3]]);
      }
          let sinaX = 4.0;
         themeM -= 3 * parseInt(`${sinaX}`);
         langu.push(langu.length ^ 2);
      hejic /= Math.max(1, parseFloat(`${parseInt(`${reducerM}`)}`));
      break;
   }
    

   let libavfilterQ = String.fromCharCode(50,55,49,57,119,122,0) == nalyticsG;
   do {
       let termsZ = String.fromCharCode(114,101,113,117,105,117,114,101,115,0);
       let libhermes_ = 1.0;
      if (!termsZ.startsWith(`${libhermes_}`)) {
         libhermes_ /= Math.max(2, termsZ.length << (Math.min(2, Math.abs(parseInt(`${libhermes_}`)))));
      }
         libhermes_ += (termsZ == String.fromCharCode(110,0) ? parseInt(`${libhermes_}`) : termsZ.length);
      if (!termsZ.startsWith(`${libhermes_}`)) {
         termsZ = `${parseInt(`${libhermes_}`) & termsZ.length}`;
      }
      if (2.31 < (libhermes_ + 3.20) || 1 < (termsZ.length + parseInt(`${libhermes_}`))) {
         termsZ += `${termsZ.length}`;
      }
         libhermes_ *= parseInt(`${libhermes_}`);
          let kuaishouH = 4.0;
          let playlistQ = 3.0;
          let downloaderr: Array<any> = [493, 410, 542];
         libhermes_ *= termsZ.length / 2;
         kuaishouH *= parseInt(`${playlistQ}`);
         playlistQ /= Math.max(parseInt(`${kuaishouH}`) - downloaderr.length, 3);
         downloaderr.push(parseInt(`${kuaishouH}`));
      nalyticsG += `${parseInt(`${hejic}`) % (Math.max(6, parseInt(`${reducerM}`)))}`;
      if (libavfilterQ) {
         break;
      }
   } while (libavfilterQ && (indicatorM != nalyticsG));
   if (indicatorM == String.fromCharCode(69,0) || philippinesh != String.fromCharCode(86,0)) {
      philippinesh += "2";
   }
       let overlayg = String.fromCharCode(112,114,101,95,49,95,53,55,0);
       let buildY = false;
         overlayg = `${(overlayg == String.fromCharCode(79,0) ? (buildY ? 2 : 4) : overlayg.length)}`;
      while (!overlayg.includes(`${buildY}`)) {
         overlayg = "1";
         break;
      }
      for (let g = 0; g < 3; g++) {
          let roundH = 4;
          let floater0 = 3;
          let viewerv: Map<any, any> = new Map([[String.fromCharCode(102,95,49,48,95,116,114,117,110,99,97,116,101,0),42], [String.fromCharCode(110,95,49,56,95,114,101,115,97,109,112,0),262]]);
          let bottomk: Array<any> = [String.fromCharCode(114,95,54,54,95,106,105,116,116,101,114,0), String.fromCharCode(109,95,50,53,95,116,114,97,110,115,102,111,114,109,0)];
          let templateprocessora: Map<any, any> = new Map([[String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,95,97,95,55,54,0),352], [String.fromCharCode(115,112,97,99,101,100,95,53,95,49,54,0),312]]);
         buildY = null != templateprocessora.get(`${buildY}`);
         roundH += bottomk.length % (Math.max(2, roundH));
         floater0 -= 3;
         viewerv = new Map([[`${viewerv.size}`, viewerv.size + roundH]]);
         bottomk = [bottomk.length];
         templateprocessora = new Map([[`${viewerv.size}`, floater0 ^ 3]]);
      }
          let notificationC = String.fromCharCode(109,117,108,116,105,101,110,100,95,122,95,55,52,0);
          let progress2 = 2.0;
          let guide9 = String.fromCharCode(117,110,99,111,100,101,100,95,54,95,56,50,0);
         overlayg = `${guide9.length * 3}`;
         notificationC = `${2 & parseInt(`${progress2}`)}`;
         progress2 -= parseFloat(`${2}`);
         guide9 += `${1 + parseInt(`${progress2}`)}`;
       let imagemanagerc: Map<any, any> = new Map([[String.fromCharCode(99,108,111,117,100,95,49,95,49,53,0),false ], [String.fromCharCode(115,105,108,101,110,99,101,95,112,95,57,53,0),true ], [String.fromCharCode(115,117,109,97,114,121,95,108,95,51,48,0),true ]]);
       let bdxadsdkF: Map<any, any> = new Map([[String.fromCharCode(120,95,56,49,95,109,118,114,101,102,0),506], [String.fromCharCode(99,97,117,116,101,114,105,122,101,95,48,95,51,54,0),332], [String.fromCharCode(100,117,112,108,101,120,95,120,95,52,55,0),950]]);
       let typingS: Array<any> = [157, 681, 976];
      feedbackU = `${flipperl.size - 3}`;
      connection0 -= parseFloat(`${incidentC - 2}`);
   for (let h = 0; h < 1; h++) {
      bodanB.set(`${reducerM}`, 3 - slider2.length);
   }
   if (4 > nalyticsG.length) {
      nalyticsG += `${parseInt(`${hejic}`)}`;
   }
   while (5 < bodanB.size) {
      fastforwardD += `${parseInt(`${reducerM}`)}`;
      break;
   }
   let plashI = indicatorM == String.fromCharCode(104,53,118,108,120,99,50,52,0);
   do {
      indicatorM += `${parseInt(`${light5}`)}`;
      if (plashI) {
         break;
      }
   } while ((5 <= (indicatorM.length & slider2.length)) && plashI);
   for (let v = 0; v < 1; v++) {
      incidentC *= parseInt(`${light5}`);
   }
      malaysiaG += `${nalyticsG.length & malaysiaG.length}`;
       let viewsL = false;
       let sportss = 0;
       let streamingy = String.fromCharCode(112,97,115,115,112,104,114,97,115,101,95,54,95,56,49,0);
         sportss /= Math.max(5, 3);
      let libjsiT = streamingy == String.fromCharCode(106,106,53,120,0);
      do {
         streamingy = `${2 + sportss}`;
         if (libjsiT) {
            break;
         }
      } while (libjsiT && (5 <= sportss));
      if (viewsL) {
         sportss ^= 3 | sportss;
      }
      let customF = streamingy == String.fromCharCode(119,48,99,115,119,109,121,97,99,118,0);
      do {
         streamingy = `${(3 & (viewsL ? 4 : 5))}`;
         if (customF) {
            break;
         }
      } while (customF && (!viewsL || 3 <= streamingy.length));
         viewsL = sportss <= 51 || viewsL;
          let nterstitials = false;
          let settingY = String.fromCharCode(114,101,116,97,105,110,115,95,112,95,54,55,0);
         streamingy = `${settingY.length}`;
       let gmailL = String.fromCharCode(99,111,109,97,110,100,95,105,95,49,56,0);
       let sheetl = String.fromCharCode(98,115,119,97,112,100,115,112,95,100,95,54,52,0);
      if (sheetl.length < 1) {
         viewsL = streamingy.startsWith(`${viewsL}`);
      }
      for (let y = 0; y < 2; y++) {
         sheetl = `${gmailL.length - 1}`;
      }
      incidentC |= 1 ^ malaysiaG.length;
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
       let tempF = String.fromCharCode(107,95,56,51,95,117,110,102,105,108,116,101,114,101,100,0);
    let history5 = 5.0;
    let stringsC = String.fromCharCode(111,95,50,52,95,101,122,105,101,114,0);
    let mintegralN = String.fromCharCode(115,105,100,101,95,119,95,53,56,0);
    let libpangleflippedr = false;
    let libavdeviceA = true;
    let libreactperfloggerjniZ = 4.0;
      libavdeviceA = tempF.length >= 4;
   if (libpangleflippedr) {
      libpangleflippedr = stringsC == mintegralN;
   }
       let proxy0: Map<any, any> = new Map([[String.fromCharCode(104,95,53,48,95,116,119,101,97,107,0),338], [String.fromCharCode(101,95,53,50,95,112,105,110,0),566], [String.fromCharCode(98,95,52,49,0),532]]);
       let danger0 = String.fromCharCode(122,95,57,54,95,112,114,111,112,111,115,101,0);
       let anythinkg = String.fromCharCode(112,114,101,115,101,110,116,101,114,95,111,95,49,48,0);
      for (let i = 0; i < 1; i++) {
          let telegramM = String.fromCharCode(114,97,115,116,101,114,0);
          let connectionc = 3.0;
          let langH = String.fromCharCode(110,95,53,55,95,97,100,109,105,110,101,100,0);
         proxy0.set(telegramM, telegramM.length / (Math.max(3, 6)));
         connectionc += (parseFloat(`${langH == String.fromCharCode(115,0) ? langH.length : parseInt(`${connectionc}`)}`));
      }
         danger0 = `${proxy0.size & 2}`;
          let dropdown9 = 4.0;
         anythinkg = `${3 + danger0.length}`;
         dropdown9 *= 3 % (Math.max(9, parseInt(`${dropdown9}`)));
          let scrollviewg = String.fromCharCode(102,114,97,109,101,115,101,116,116,101,114,95,111,95,54,54,0);
          let chinasame_: Array<any> = [601, 241, 936];
          let nativeexj: Array<any> = [479, 649, 762];
         anythinkg = `${proxy0.size | 1}`;
         scrollviewg = `${(String.fromCharCode(66,0) == scrollviewg ? scrollviewg.length : chinasame_.length)}`;
         chinasame_.push(scrollviewg.length);
         nativeexj = [scrollviewg.length | 2];
      while (!danger0.startsWith(`${anythinkg.length}`)) {
          let china6 = String.fromCharCode(115,95,57,50,95,99,104,97,110,110,101,108,0);
          let referrer8 = String.fromCharCode(122,95,49,49,95,112,114,101,115,101,110,116,97,116,105,111,110,115,0);
          let paginationL = String.fromCharCode(104,97,108,102,95,100,95,52,50,0);
          let diceH: Array<any> = [String.fromCharCode(119,95,55,53,95,99,121,97,110,0), String.fromCharCode(107,95,57,51,95,115,116,97,99,107,101,100,0), String.fromCharCode(115,108,111,119,0)];
         anythinkg += `${paginationL.length >> (Math.min(anythinkg.length, 2))}`;
         china6 = `${2 % (Math.max(1, referrer8.length))}`;
         referrer8 += `${referrer8.length / 1}`;
         paginationL += "3";
         diceH = [diceH.length];
         break;
      }
         anythinkg = `${1 * anythinkg.length}`;
         danger0 = `${danger0.length}`;
      while (1 == (3 >> (Math.min(3, anythinkg.length)))) {
         anythinkg = "1";
         break;
      }
      let humidityf = 8310022 >= danger0.length;
      do {
         danger0 = `${1 | proxy0.size}`;
         if (humidityf) {
            break;
         }
      } while ((2 == danger0.length) && humidityf);
      libreactperfloggerjniZ /= Math.max(4, parseFloat(`${1 | parseInt(`${libreactperfloggerjniZ}`)}`));
      history5 /= Math.max(2, parseFloat(`${parseInt(`${history5}`)}`));
   if ((5.80 * history5) < 1.40) {
      libavdeviceA = (stringsC.length + parseInt(`${history5}`)) > 94;
   }
      mintegralN = `${(stringsC == String.fromCharCode(66,0) ? parseInt(`${libreactperfloggerjniZ}`) : stringsC.length)}`;
       let runtimea = 5.0;
       let injury2 = String.fromCharCode(108,111,116,116,105,101,112,97,114,115,101,114,95,56,95,53,51,0);
       let fadfdeebbbfdabbbabdadfaaddaa3 = 1.0;
       let point1 = String.fromCharCode(118,109,100,118,105,100,101,111,95,105,95,53,56,0);
          let fullq = String.fromCharCode(98,108,111,99,107,101,114,95,106,95,49,55,0);
          let strings_ = String.fromCharCode(100,95,51,54,95,116,104,114,101,115,104,0);
         runtimea /= Math.max(1, parseFloat(`${1 >> (Math.min(5, fullq.length))}`));
         fullq += `${strings_.length}`;
         strings_ += `${strings_.length % 1}`;
         runtimea *= parseFloat(`${parseInt(`${fadfdeebbbfdabbbabdadfaaddaa3}`) << (Math.min(injury2.length, 2))}`);
      for (let m = 0; m < 2; m++) {
         point1 = `${(injury2 == String.fromCharCode(115,0) ? parseInt(`${runtimea}`) : injury2.length)}`;
      }
         injury2 = `${parseInt(`${runtimea}`) | injury2.length}`;
      for (let a = 0; a < 3; a++) {
         point1 += "3";
      }
      if (3.3 == (3.28 + runtimea)) {
         runtimea /= Math.max(parseFloat(`${injury2.length}`), 4);
      }
      let hoverk = 9306767.0 >= runtimea;
      do {
          let edito = String.fromCharCode(122,101,114,111,105,110,103,95,122,95,55,52,0);
          let lessW = 3.0;
          let activee: Map<any, any> = new Map([[String.fromCharCode(101,110,100,95,53,95,49,55,0),String.fromCharCode(110,95,52,56,95,111,102,102,101,114,0)], [String.fromCharCode(113,95,50,56,95,109,115,103,115,0),String.fromCharCode(98,95,54,57,95,114,101,105,110,105,116,0)], [String.fromCharCode(108,95,57,57,95,116,104,114,111,119,105,110,103,0),String.fromCharCode(115,111,99,97,110,116,114,99,118,109,111,114,101,95,116,95,50,56,0)]]);
         runtimea -= parseFloat(`${activee.size}`);
         edito += `${(edito == String.fromCharCode(116,0) ? parseInt(`${lessW}`) : edito.length)}`;
         lessW -= parseFloat(`${1 % (Math.max(8, edito.length))}`);
         activee.set(`${lessW}`, (String.fromCharCode(79,0) == edito ? parseInt(`${lessW}`) : edito.length));
         if (hoverk) {
            break;
         }
      } while (((runtimea + 4.57) > 1.14 || (4.57 + runtimea) > 5.90) && hoverk);
         injury2 = `${1 << (Math.min(Math.abs(parseInt(`${runtimea}`)), 4))}`;
      history5 -= parseFloat(`${parseInt(`${fadfdeebbbfdabbbabdadfaaddaa3}`) % (Math.max(8, parseInt(`${runtimea}`)))}`);
      mintegralN = `${(stringsC == String.fromCharCode(113,0) ? (libpangleflippedr ? 4 : 5) : stringsC.length)}`;
   for (let t = 0; t < 1; t++) {
      mintegralN += `${parseInt(`${libreactperfloggerjniZ}`)}`;
   }
   if (!libavdeviceA) {
       let binddatasy = String.fromCharCode(114,95,57,54,95,109,112,99,100,97,116,97,0);
      if (binddatasy != String.fromCharCode(74,0)) {
         binddatasy = `${binddatasy.length}`;
      }
      if (binddatasy != String.fromCharCode(117,0) || binddatasy.length > 4) {
          let morex = 3.0;
          let graphics0 = String.fromCharCode(105,110,108,105,103,104,116,95,109,95,52,52,0);
          let shrinkl = 2.0;
         binddatasy = `${(graphics0 == String.fromCharCode(88,0) ? parseInt(`${morex}`) : graphics0.length)}`;
         morex *= parseFloat(`${parseInt(`${shrinkl}`)}`);
      }
      while (5 == binddatasy.length) {
          let chart1 = 1.0;
          let checkbox6 = true;
          let shirtS = 2.0;
         binddatasy = `${(parseInt(`${chart1}`) ^ (checkbox6 ? 5 : 1))}`;
         chart1 *= parseFloat(`${parseInt(`${shirtS}`) ^ parseInt(`${shirtS}`)}`);
         checkbox6 = 84.69 > (shirtS - shirtS);
         break;
      }
      libreactperfloggerjniZ -= (parseFloat(`${String.fromCharCode(120,0) == binddatasy ? binddatasy.length : stringsC.length}`));
   }
      mintegralN = `${(String.fromCharCode(104,0) == stringsC ? stringsC.length : parseInt(`${history5}`))}`;
      libavdeviceA = tempF == stringsC;
   for (let v = 0; v < 2; v++) {
      libreactperfloggerjniZ -= (parseFloat(`${(libpangleflippedr ? 4 : 3) << (Math.min(1, Math.abs(2)))}`));
   }
       let activityr: Array<any> = [475, 527];
       let libffmpegkitx = String.fromCharCode(111,95,50,53,95,115,105,109,117,108,97,116,105,111,110,0);
       let textinputX: Map<any, any> = new Map([[String.fromCharCode(114,101,115,101,116,117,112,95,114,95,49,51,0),572], [String.fromCharCode(108,105,98,115,112,101,101,120,95,107,95,51,54,0),490]]);
      for (let a = 0; a < 2; a++) {
         textinputX.set(libffmpegkitx, libffmpegkitx.length >> (Math.min(5, Math.abs(textinputX.size))));
      }
          let detail5: Array<any> = [542, 521, 96];
         libffmpegkitx += `${detail5.length}`;
      let moduleL = 5594742 >= libffmpegkitx.length;
      do {
         libffmpegkitx += "3";
         if (moduleL) {
            break;
         }
      } while (moduleL && (3 < (libffmpegkitx.length ^ 4)));
          let combinedh: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,108,101,116,101,95,102,95,49,55,0),String.fromCharCode(100,95,50,55,95,101,120,116,101,110,100,105,110,103,0)], [String.fromCharCode(99,108,97,117,115,101,95,102,95,55,54,0),String.fromCharCode(99,108,117,98,95,98,95,52,53,0)], [String.fromCharCode(99,95,55,51,95,115,111,98,105,110,100,0),String.fromCharCode(109,105,110,105,109,117,109,95,99,95,56,0)]]);
         libffmpegkitx = `${activityr.length}`;
         combinedh.set(`${combinedh.size}`, 1);
       let pangle0: Map<any, any> = new Map([[String.fromCharCode(121,95,57,52,95,101,114,97,0),false ], [String.fromCharCode(109,117,110,109,97,112,95,57,95,50,54,0),false ]]);
       let mbsplashL = String.fromCharCode(114,117,110,116,101,115,116,115,95,111,95,54,56,0);
      for (let u = 0; u < 1; u++) {
          let trophyW = 5.0;
          let libswresamplex: Map<any, any> = new Map([[String.fromCharCode(115,112,101,97,107,95,105,95,51,50,0),701], [String.fromCharCode(100,114,97,103,95,109,95,54,0),960]]);
          let pause5 = 5;
          let constantsb = String.fromCharCode(102,101,108,101,109,95,97,95,56,49,0);
         libffmpegkitx = `${pause5 * libswresamplex.size}`;
         trophyW += (String.fromCharCode(67,0) == constantsb ? parseInt(`${trophyW}`) : constantsb.length);
         libswresamplex.set(constantsb, constantsb.length + parseInt(`${trophyW}`));
         pause5 ^= (String.fromCharCode(73,0) == constantsb ? parseInt(`${trophyW}`) : constantsb.length);
      }
          let loginS = String.fromCharCode(97,117,116,111,102,105,120,0);
          let singaporeh: Array<any> = [843, 526];
         mbsplashL = `${(String.fromCharCode(112,0) == libffmpegkitx ? libffmpegkitx.length : mbsplashL.length)}`;
         loginS += `${loginS.length / (Math.max(7, singaporeh.length))}`;
         singaporeh.push(1 + singaporeh.length);
      for (let s = 0; s < 1; s++) {
         mbsplashL = `${textinputX.size}`;
      }
      mintegralN += `${mintegralN.length}`;
      libpangleflippedr = mintegralN.length >= 94;
   if (mintegralN.length > 5) {
       let configurey = String.fromCharCode(104,95,55,95,115,121,109,98,111,108,105,99,97,116,105,111,110,0);
       let v_managerx = String.fromCharCode(104,95,54,57,95,98,117,102,115,112,97,99,101,0);
       let gpay0: Map<any, any> = new Map([[String.fromCharCode(117,110,105,111,110,101,100,95,109,95,52,57,0),660], [String.fromCharCode(110,95,52,54,95,107,101,121,100,105,114,0),481]]);
      for (let d = 0; d < 1; d++) {
          let libhermesN: Array<any> = [String.fromCharCode(116,114,101,97,100,95,119,95,50,53,0), String.fromCharCode(115,108,97,110,116,95,55,95,57,51,0)];
          let episodeS = String.fromCharCode(98,95,55,54,95,97,115,105,115,0);
         configurey += `${2 >> (Math.min(5, libhermesN.length))}`;
         libhermesN.push((String.fromCharCode(81,0) == episodeS ? episodeS.length : episodeS.length));
      }
         gpay0.set(configurey, v_managerx.length / (Math.max(configurey.length, 1)));
         gpay0.set(v_managerx, v_managerx.length);
         gpay0 = new Map([[v_managerx, v_managerx.length >> (Math.min(configurey.length, 3))]]);
      let helperx = gpay0.size >= 6284842;
      do {
         gpay0 = new Map([[`${gpay0.size}`, gpay0.size / (Math.max(configurey.length, 5))]]);
         if (helperx) {
            break;
         }
      } while (((5 >> (Math.min(1, Math.abs(gpay0.size)))) == 2 && 5 == (v_managerx.length >> (Math.min(1, Math.abs(gpay0.size))))) && helperx);
      while ((gpay0.size | v_managerx.length) < 2 || (gpay0.size | 2) < 3) {
         v_managerx = `${configurey.length * gpay0.size}`;
         break;
      }
      while (3 < v_managerx.length) {
         v_managerx += `${configurey.length}`;
         break;
      }
         v_managerx += `${configurey.length % 1}`;
      for (let v = 0; v < 1; v++) {
          let vietnamV = 1.0;
          let carouselx = true;
          let libavfilterV: Array<any> = [945, 768];
          let pausev = 5.0;
          let service_ = String.fromCharCode(100,111,119,110,108,111,97,100,101,100,95,52,95,55,53,0);
         v_managerx = `${configurey.length}`;
         vietnamV *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${vietnamV}`)), 2))}`);
         carouselx = pausev > 97.92;
         libavfilterV.push(parseInt(`${pausev}`) | 2);
         service_ = `${parseInt(`${pausev}`) + service_.length}`;
      }
      libavdeviceA = mintegralN.length == configurey.length;
   }
       let clearB = String.fromCharCode(102,95,52,48,95,109,118,115,101,116,0);
       let heartu = String.fromCharCode(109,95,51,55,95,115,101,115,115,111,110,0);
      while (heartu.includes(`${clearB.length}`)) {
         clearB = `${heartu.length << (Math.min(clearB.length, 2))}`;
         break;
      }
      if (heartu.includes(`${clearB.length}`)) {
         clearB = `${(String.fromCharCode(85,0) == clearB ? clearB.length : heartu.length)}`;
      }
      while (2 == heartu.length) {
          let forwardP = String.fromCharCode(117,110,112,97,99,107,108,111,95,52,95,51,57,0);
          let backwardl = String.fromCharCode(114,101,103,114,101,115,115,95,55,95,54,55,0);
          let watchD = 3;
          let anytime1 = String.fromCharCode(116,111,103,103,108,101,95,100,95,54,51,0);
          let watchQ: Map<any, any> = new Map([[String.fromCharCode(97,95,57,50,95,102,102,109,109,97,108,0),false ], [String.fromCharCode(105,95,51,95,115,112,107,114,0),true ]]);
         clearB += `${(heartu == String.fromCharCode(73,0) ? heartu.length : backwardl.length)}`;
         forwardP = `${anytime1.length}`;
         backwardl = `${2 % (Math.max(8, forwardP.length))}`;
         watchD += forwardP.length | watchD;
         anytime1 += `${(forwardP == String.fromCharCode(102,0) ? watchD : forwardP.length)}`;
         watchQ.set(`${watchD}`, watchQ.size);
         break;
      }
       let classesg = String.fromCharCode(107,98,105,116,95,105,95,52,0);
      for (let j = 0; j < 3; j++) {
          let playercommont: Map<any, any> = new Map([[String.fromCharCode(99,95,49,49,95,121,105,101,108,100,0),false ], [String.fromCharCode(98,95,57,95,101,120,101,99,117,116,101,100,0),true ]]);
          let statisticse = String.fromCharCode(122,95,50,50,95,100,101,108,105,118,101,114,0);
          let o_lockv: Array<any> = [457, 904];
          let sendJ = 0;
          let dropdownh: Map<any, any> = new Map([[String.fromCharCode(121,95,57,56,95,99,97,116,99,104,105,110,103,0),427], [String.fromCharCode(108,95,51,57,95,97,116,116,101,109,116,115,0),283], [String.fromCharCode(118,97,114,119,105,100,116,104,95,120,95,53,50,0),767]]);
         clearB += `${sendJ >> (Math.min(Math.abs(dropdownh.size), 4))}`;
         playercommont = new Map([[`${playercommont.size}`, 3]]);
         statisticse += `${statisticse.length}`;
         o_lockv = [statisticse.length << (Math.min(4, Math.abs(playercommont.size)))];
         sendJ |= statisticse.length ^ o_lockv.length;
         dropdownh.set(statisticse, 3);
      }
      let resultF = String.fromCharCode(122,55,121,55,115,104,49,120,0) == clearB;
      do {
         clearB = `${classesg.length % (Math.max(2, 6))}`;
         if (resultF) {
            break;
         }
      } while (resultF && (heartu.length <= 2));
      libpangleflippedr = !libpangleflippedr;
   if (libpangleflippedr) {
       let libreactperfloggerjniL = String.fromCharCode(104,95,50,48,95,101,120,101,99,117,116,105,111,110,0);
      if (!libreactperfloggerjniL.includes(`${libreactperfloggerjniL.length}`)) {
         libreactperfloggerjniL += `${libreactperfloggerjniL.length - 2}`;
      }
         libreactperfloggerjniL += `${libreactperfloggerjniL.length}`;
      let componentregistryZ = libreactperfloggerjniL.length >= 9528433;
      do {
         libreactperfloggerjniL += `${libreactperfloggerjniL.length}`;
         if (componentregistryZ) {
            break;
         }
      } while (componentregistryZ && (libreactperfloggerjniL != String.fromCharCode(86,0)));
      libreactperfloggerjniZ += (parseFloat(`${(libavdeviceA ? 1 : 3)}`));
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
       let blackb = true;
    let robotou = String.fromCharCode(109,95,56,52,95,114,110,103,115,0);
    let foregroundR = String.fromCharCode(100,95,50,48,95,114,101,99,105,100,0);
    let homeW = String.fromCharCode(106,95,51,56,95,116,101,120,116,108,101,0);
    let turnS: Map<any, any> = new Map([[String.fromCharCode(108,105,110,101,98,114,101,97,107,95,109,95,56,56,0),640], [String.fromCharCode(121,117,121,116,111,121,118,95,104,95,52,55,0),374]]);
    let lineJ: Array<any> = [611, 572];
    let armva2 = 1;
    let benefitf = 5.0;
    let backwardG = String.fromCharCode(116,95,50,49,95,115,109,115,0);
      armva2 |= foregroundR.length;
   if (3.81 <= (benefitf * 3.8) || !blackb) {
       let splashg = 2;
       let macauo = 2.0;
       let phonek = 2;
       let calendarF = String.fromCharCode(99,95,53,53,95,100,105,118,109,111,100,0);
      while ((phonek * macauo) >= 5.15) {
         phonek &= (calendarF == String.fromCharCode(101,0) ? calendarF.length : parseInt(`${macauo}`));
         break;
      }
      let liveV = calendarF == String.fromCharCode(55,122,114,56,116,0);
      do {
          let umeng8 = false;
          let libswscale7 = 3.0;
          let formJ = String.fromCharCode(116,114,105,97,108,0);
          let benefitZ = String.fromCharCode(109,97,105,110,110,101,116,115,95,109,95,57,51,0);
         calendarF = "3";
         umeng8 = String.fromCharCode(88,0) == formJ;
         libswscale7 += formJ.length / (Math.max(3, 10));
         benefitZ += `${parseInt(`${libswscale7}`) | 2}`;
         if (liveV) {
            break;
         }
      } while ((3 < phonek) && liveV);
          let ticku: Map<any, any> = new Map([[String.fromCharCode(121,95,49,54,95,108,111,97,100,101,100,0),952], [String.fromCharCode(102,95,50,53,95,97,97,114,99,104,0),71], [String.fromCharCode(120,95,57,95,119,114,97,112,100,101,116,101,99,116,0),104]]);
          let club6 = 3.0;
         splashg %= Math.max(1, 1 - parseInt(`${club6}`));
         ticku.set(`${ticku.size}`, ticku.size % (Math.max(2, 2)));
         club6 *= parseFloat(`${ticku.size ^ ticku.size}`);
         phonek >>= Math.min(4, Math.abs(parseInt(`${macauo}`) >> (Math.min(calendarF.length, 4))));
         phonek %= Math.max(2, 4);
         macauo += parseFloat(`${1}`);
         calendarF += `${splashg}`;
         splashg <<= Math.min(3, Math.abs(parseInt(`${macauo}`)));
         calendarF = `${phonek}`;
      if ((phonek - 2) == 4 && 5.33 == (macauo + parseFloat(`${phonek}`))) {
         macauo /= Math.max(parseFloat(`${3 * parseInt(`${macauo}`)}`), 5);
      }
         splashg -= calendarF.length ^ 2;
      for (let d = 0; d < 3; d++) {
         macauo /= Math.max(parseFloat(`${parseInt(`${macauo}`)}`), 2);
      }
      blackb = !blackb;
   }
   for (let s = 0; s < 3; s++) {
      blackb = parseInt(`${benefitf}`) == foregroundR.length;
   }
      lineJ.push(robotou.length % 3);
   while (2 <= (lineJ.length + 1) && 1 <= lineJ.length) {
       let networkS = String.fromCharCode(115,95,51,48,95,102,114,97,99,0);
          let splash5 = 4.0;
          let mimoB: Array<any> = [769, 806];
          let armvaG = String.fromCharCode(101,95,56,48,95,115,119,105,122,122,108,105,110,103,0);
         networkS = "2";
         splash5 += armvaG.length - mimoB.length;
         mimoB = [2 | armvaG.length];
       let dycreatorN = 5.0;
       let orientationS = 5.0;
      if (5.10 > (parseFloat(`${networkS.length}`) - dycreatorN)) {
         dycreatorN += parseFloat(`${2}`);
      }
      lineJ = [turnS.size + homeW.length];
      break;
   }
      blackb = !blackb && homeW.length < 51;

    if (episodeRef.current) {

      blackb = homeW.length > foregroundR.length;
   let starc = blackb ? !blackb : blackb;
   do {
       let klevin0: Array<any> = [440, 635];
       let activity_: Map<any, any> = new Map([[String.fromCharCode(113,95,52,56,95,102,116,118,108,97,115,116,110,111,100,101,0),String.fromCharCode(100,97,115,104,101,110,99,95,118,95,54,54,0)], [String.fromCharCode(107,95,53,57,95,99,111,109,109,105,116,0),String.fromCharCode(97,110,99,105,108,108,97,114,121,95,100,95,53,55,0)]]);
       let benefitW = String.fromCharCode(114,95,55,52,95,115,104,111,116,0);
       let readg: Array<any> = [383, 7];
       let time_s6j = String.fromCharCode(115,95,53,52,0);
      while (5 < (klevin0.length % (Math.max(activity_.size, 2))) || 5 < (klevin0.length % (Math.max(activity_.size, 6)))) {
         activity_ = new Map([[benefitW, benefitW.length]]);
         break;
      }
         time_s6j += `${(String.fromCharCode(111,0) == benefitW ? benefitW.length : readg.length)}`;
       let configurel = String.fromCharCode(115,101,97,114,99,104,98,97,114,95,117,95,55,53,0);
         activity_.set(time_s6j, time_s6j.length);
      for (let j = 0; j < 2; j++) {
         activity_ = new Map([[`${klevin0.length}`, klevin0.length & configurel.length]]);
      }
      for (let s = 0; s < 1; s++) {
          let filter5 = String.fromCharCode(117,110,105,120,95,55,95,56,50,0);
          let videojsR = String.fromCharCode(121,95,48,95,115,101,116,97,99,116,105,118,101,107,101,121,0);
          let long_0e = 2.0;
          let signinuph = false;
         klevin0 = [((signinuph ? 2 : 3) + configurel.length)];
         filter5 += `${filter5.length / 2}`;
         videojsR += `${videojsR.length}`;
         long_0e *= parseFloat(`${videojsR.length & 2}`);
         signinuph = (videojsR.length * parseInt(`${long_0e}`)) >= 24;
      }
      for (let p = 0; p < 1; p++) {
         benefitW += `${1 - klevin0.length}`;
      }
         readg = [activity_.size - klevin0.length];
      let zhubot = 6919281 >= readg.length;
      do {
         readg.push((time_s6j == String.fromCharCode(66,0) ? time_s6j.length : configurel.length));
         if (zhubot) {
            break;
         }
      } while ((readg.length <= time_s6j.length) && zhubot);
          let textlayoutmanagerh = 4.0;
         readg = [(configurel == String.fromCharCode(118,0) ? configurel.length : benefitW.length)];
         textlayoutmanagerh /= Math.max(2, 2);
         activity_ = new Map([[benefitW, (time_s6j == String.fromCharCode(95,0) ? time_s6j.length : benefitW.length)]]);
      for (let g = 0; g < 1; g++) {
         benefitW += `${3 ^ benefitW.length}`;
      }
      for (let k = 0; k < 3; k++) {
         benefitW = `${activity_.size}`;
      }
      while (4 >= (klevin0.length / (Math.max(8, benefitW.length))) && (benefitW.length / 4) >= 2) {
         benefitW += "3";
         break;
      }
      for (let h = 0; h < 1; h++) {
          let overE = 2.0;
          let successB = 4.0;
          let singaporeN = String.fromCharCode(103,95,57,55,95,112,97,105,110,116,105,110,103,0);
          let nexts: Map<any, any> = new Map([[String.fromCharCode(106,95,53,49,95,112,117,116,98,121,116,101,0),String.fromCharCode(118,95,55,49,95,114,101,100,117,99,116,105,111,110,115,0)], [String.fromCharCode(104,95,54,53,95,115,116,97,116,105,115,116,105,99,0),String.fromCharCode(109,117,108,116,105,112,108,105,101,114,95,118,95,50,52,0)]]);
          let bodani: Array<any> = [386, 818];
         readg = [parseInt(`${successB}`)];
         overE -= 1;
         successB *= parseFloat(`${nexts.size}`);
         singaporeN += "1";
         nexts = new Map([[`${nexts.size}`, bodani.length % (Math.max(2, 2))]]);
         bodani.push(parseInt(`${overE}`));
      }
      blackb = !blackb;
      if (starc) {
         break;
      }
   } while (starc && ((5 >> (Math.min(3, Math.abs(armva2)))) == 2 && armva2 == 5));
      benefitf /= Math.max(2, parseFloat(`${parseInt(`${benefitf}`)}`));
      benefitf *= parseFloat(`${3}`);
   for (let e = 0; e < 1; e++) {
      benefitf -= parseFloat(`${robotou.length % (Math.max(6, parseInt(`${benefitf}`)))}`);
   }
      blackb = 13 < foregroundR.length;
      episodeRef.current.scrollToIndex({
        index: currentEpisode,
        animated: true,
      });
    }
  };

  const handleModalClose = useCallback(() => {
       let default_7op = String.fromCharCode(112,114,105,111,114,105,116,121,113,95,118,95,50,53,0);
    let time_qao = String.fromCharCode(119,104,105,116,101,115,95,54,95,55,51,0);
    let textt = String.fromCharCode(105,95,52,95,114,101,97,110,97,108,121,122,101,0);
    let libavutilX: Array<any> = [862, 718];
    let analyticz = false;
    let kickp = String.fromCharCode(100,95,52,48,0);
    let configz: Array<any> = [712, 0, 852];
       let roott = 5.0;
       let libreacti = 0.0;
         libreacti *= parseFloat(`${3}`);
         roott += parseFloat(`${3 % (Math.max(10, parseInt(`${roott}`)))}`);
         libreacti -= parseFloat(`${3}`);
      if (2.99 < roott) {
          let libreactnativeblob9 = String.fromCharCode(114,111,98,117,115,116,0);
          let latnZ = String.fromCharCode(110,99,111,110,102,95,57,95,53,51,0);
         roott /= Math.max(parseFloat(`${parseInt(`${libreacti}`) - parseInt(`${roott}`)}`), 2);
         libreactnativeblob9 += `${3 & libreactnativeblob9.length}`;
         latnZ += `${latnZ.length << (Math.min(Math.abs(2), 1))}`;
      }
         libreacti -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${libreacti}`)), 4))}`);
         libreacti *= parseFloat(`${3}`);
      kickp += `${default_7op.length}`;
       let saver = String.fromCharCode(118,95,49,50,95,100,101,118,101,108,111,112,101,114,0);
       let libmapbufferjnik: Map<any, any> = new Map([[String.fromCharCode(103,95,53,48,95,109,111,118,101,99,98,0),468], [String.fromCharCode(116,95,54,57,95,111,118,112,97,103,101,0),182], [String.fromCharCode(105,95,55,53,95,99,108,97,115,115,105,102,115,0),926]]);
      if (2 >= (4 * libmapbufferjnik.size) && (saver.length * libmapbufferjnik.size) >= 4) {
         libmapbufferjnik.set(saver, libmapbufferjnik.size ^ 2);
      }
         libmapbufferjnik.set(saver, saver.length - 3);
      libavutilX = [saver.length & time_qao.length];
      analyticz = kickp.length < 60;
       let networkz: Array<any> = [339, 977];
       let paginationE = 0;
      let nterstitialB = networkz.length >= 7012502;
      do {
          let androidz: Array<any> = [908, 945, 818];
         networkz = [networkz.length / 3];
         androidz = [androidz.length];
         if (nterstitialB) {
            break;
         }
      } while (nterstitialB && (!networkz.includes(paginationE)));
         paginationE |= paginationE;
          let tickedF = String.fromCharCode(113,95,57,51,95,99,111,110,118,101,114,103,101,110,99,101,0);
         paginationE += 3 | tickedF.length;
         paginationE += networkz.length;
       let router6 = String.fromCharCode(104,97,110,103,95,53,95,53,55,0);
          let playd = 4.0;
         paginationE >>= Math.min(1, Math.abs(parseInt(`${playd}`)));
      analyticz = time_qao.length >= 39;
   let gray9 = textt == String.fromCharCode(105,122,48,106,51,0);
   do {
      textt = `${default_7op.length}`;
      if (gray9) {
         break;
      }
   } while ((textt.includes(`${libavutilX.length}`)) && gray9);
       let changeO = 0.0;
         changeO -= parseFloat(`${parseInt(`${changeO}`) << (Math.min(4, Math.abs(parseInt(`${changeO}`))))}`);
      let topicr = changeO >= 9894585.0;
      do {
         changeO += parseFloat(`${parseInt(`${changeO}`) % 3}`);
         if (topicr) {
            break;
         }
      } while ((5.59 >= (changeO / (Math.max(4, changeO)))) && topicr);
          let interstitialx = String.fromCharCode(108,111,115,116,95,119,95,57,48,0);
          let cornerQ = 5.0;
         changeO *= parseFloat(`${parseInt(`${cornerQ}`)}`);
         interstitialx = `${interstitialx.length}`;
      analyticz = libavutilX.includes(analyticz);
       let zhubob = false;
      for (let u = 0; u < 3; u++) {
          let descy = 3.0;
          let privilegeb = String.fromCharCode(100,111,119,110,108,111,97,100,101,114,95,48,95,50,49,0);
         zhubob = !zhubob || descy >= 92.99;
         descy -= parseFloat(`${privilegeb.length}`);
         privilegeb = `${privilegeb.length}`;
      }
      let kickE = zhubob ? !zhubob : zhubob;
      do {
         zhubob = (zhubob ? zhubob : zhubob);
         if (kickE) {
            break;
         }
      } while ((!zhubob) && kickE);
         zhubob = (!zhubob ? zhubob : !zhubob);
      configz = [kickp.length - time_qao.length];
      libavutilX = [(kickp == String.fromCharCode(70,0) ? (analyticz ? 2 : 5) : kickp.length)];
   if (libavutilX.length <= 5) {
      time_qao += "3";
   }
   for (let f = 0; f < 1; f++) {
      configz = [3];
   }
   let whistlen = 6227726 >= time_qao.length;
   do {
       let darkT = String.fromCharCode(101,95,54,50,95,97,114,116,105,102,97,99,116,115,0);
      for (let m = 0; m < 3; m++) {
         darkT = `${darkT.length}`;
      }
       let navigationU = 5;
       let auto_29m = 4;
      if (2 == (auto_29m ^ 1) && 1 == (navigationU ^ auto_29m)) {
         navigationU &= 3 >> (Math.min(5, Math.abs(navigationU)));
      }
      time_qao = "1";
      if (whistlen) {
         break;
      }
   } while (whistlen && (libavutilX.length == time_qao.length));
   while (!kickp.includes(`${analyticz}`)) {
      analyticz = libavutilX.length >= 56;
      break;
   }
   for (let s = 0; s < 1; s++) {
       let readv = true;
         readv = (readv ? readv : !readv);
      for (let d = 0; d < 1; d++) {
         readv = readv && readv;
      }
          let moree = 4.0;
          let onewinterstitiale = String.fromCharCode(97,117,116,111,115,99,114,111,108,108,105,110,103,95,111,95,55,55,0);
         readv = onewinterstitiale.length <= 55 || moree <= 71.49;
      time_qao += `${((readv ? 4 : 2))}`;
   }
      time_qao += `${time_qao.length * default_7op.length}`;
      textt = `${configz.length - default_7op.length}`;
   while (kickp.length == textt.length) {
      kickp = `${default_7op.length}`;
      break;
   }
       let comment5 = String.fromCharCode(114,101,99,117,114,115,101,95,97,95,55,0);
       let prediction6 = String.fromCharCode(103,95,55,54,95,116,114,97,110,115,105,116,105,111,110,115,0);
       let e_titlec = 2.0;
       let scheduleb = true;
       let downloaded7 = false;
      let floatings = 9058095 <= comment5.length;
      do {
          let predictionm = String.fromCharCode(101,95,50,52,95,112,114,101,118,101,110,116,115,0);
         comment5 += `${parseInt(`${e_titlec}`) | comment5.length}`;
         predictionm += "3";
         if (floatings) {
            break;
         }
      } while ((2.34 < (3.20 - e_titlec) && 3 < (comment5.length - 1)) && floatings);
      let suggestionT = prediction6.length <= 6475936;
      do {
         prediction6 = `${prediction6.length}`;
         if (suggestionT) {
            break;
         }
      } while (suggestionT && (2 > comment5.length));
       let buildK = String.fromCharCode(106,95,49,52,95,118,97,114,121,0);
      let bodanC = buildK == String.fromCharCode(49,102,115,100,117,111,122,100,0);
      do {
         buildK = `${(buildK.length << (Math.min(1, Math.abs((scheduleb ? 5 : 1)))))}`;
         if (bodanC) {
            break;
         }
      } while ((!downloaded7) && bodanC);
         comment5 += `${((scheduleb ? 3 : 1))}`;
      let sourceV = downloaded7 ? !downloaded7 : downloaded7;
      do {
         downloaded7 = (45 == ((scheduleb ? 45 : buildK.length) / (Math.max(buildK.length, 5))));
         if (sourceV) {
            break;
         }
      } while ((!prediction6.endsWith(`${downloaded7}`)) && sourceV);
       let modelK = String.fromCharCode(102,95,55,52,95,116,115,99,99,0);
          let streamingi = 0;
          let libswscaleV = String.fromCharCode(103,114,97,100,105,101,110,116,115,95,97,95,56,0);
         downloaded7 = 67 >= streamingi && libswscaleV.length >= 67;
      libavutilX.push(parseInt(`${e_titlec}`));

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
       let activem = String.fromCharCode(110,95,57,48,95,115,99,114,111,108,108,105,110,103,0);
    let rewardvideos = 2.0;
    let update_67L: Map<any, any> = new Map([[String.fromCharCode(120,95,49,51,95,105,110,112,117,116,116,101,109,0),false ], [String.fromCharCode(116,95,51,53,95,118,111,114,98,105,115,100,115,112,0),true ], [String.fromCharCode(114,101,97,109,95,101,95,49,54,0),true ]]);
    let zoomx = 1.0;
    let libswresamplea = 2;
    let regengc: Array<any> = [String.fromCharCode(98,111,119,108,105,110,103,95,48,95,53,48,0), String.fromCharCode(108,95,51,57,95,105,100,120,0), String.fromCharCode(121,95,57,57,95,98,111,97,116,0)];
    let searchV: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,115,95,48,95,51,53,0),String.fromCharCode(98,95,54,56,95,117,110,99,114,111,112,112,101,100,0)], [String.fromCharCode(99,95,55,53,95,97,114,99,104,105,118,105,110,103,0),String.fromCharCode(97,120,105,120,95,118,95,54,53,0)]]);
    let eactm: Map<any, any> = new Map([[String.fromCharCode(115,117,110,114,97,115,116,95,57,95,51,56,0),361], [String.fromCharCode(102,105,114,115,116,108,105,110,101,95,100,95,56,51,0),188]]);
   for (let d = 0; d < 2; d++) {
      rewardvideos /= Math.max(4, activem.length);
   }
      rewardvideos /= Math.max(parseInt(`${zoomx}`) % 3, 4);
      libswresamplea %= Math.max(1, 2 % (Math.max(parseInt(`${zoomx}`), 3)));
   if ((5 + update_67L.size) > 5 && 5 > (activem.length + update_67L.size)) {
      activem += `${parseInt(`${rewardvideos}`) / (Math.max(parseInt(`${zoomx}`), 3))}`;
   }

    

      zoomx -= update_67L.size + 3;
   if (1.97 < (zoomx * update_67L.size) && 2.96 < (zoomx * 1.97)) {
      zoomx -= 2;
   }
       let singaporeR = 1.0;
       let tickP = 5.0;
       let matcha = 0.0;
         matcha += parseInt(`${tickP}`);
         matcha /= Math.max(parseInt(`${singaporeR}`) % 2, 2);
      regengc.push(libswresamplea);
      rewardvideos /= Math.max(3, 1 << (Math.min(Math.abs(libswresamplea), 5)));
    

   let buildO = regengc.length >= 8553823;
   do {
      regengc.push(1 / (Math.max(8, regengc.length)));
      if (buildO) {
         break;
      }
   } while (buildO && (!regengc.includes(zoomx)));
   while ((5 | activem.length) <= 4) {
      regengc = [2 ^ parseInt(`${rewardvideos}`)];
      break;
   }
      libswresamplea &= activem.length % 1;
   if ((5 / (Math.max(1, libswresamplea))) > 1 && (libswresamplea / 5) > 5) {
      searchV.set(`${rewardvideos}`, 1 - parseInt(`${rewardvideos}`));
   }
    const maxEpisode = (foundSource?.url_count ?? 1) - 1;

      libswresamplea &= parseInt(`${zoomx}`) / 3;
   let twitterm = libswresamplea <= 9414793;
   do {
       let pointV = String.fromCharCode(115,101,103,105,116,101,114,95,117,95,52,49,0);
       let crownE = String.fromCharCode(117,95,49,48,95,115,116,101,112,115,0);
       let rightI: Array<any> = [143, 985, 159];
       let templateprocessorw: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,115,116,114,97,116,105,111,110,95,55,95,55,51,0),String.fromCharCode(118,95,52,57,95,110,105,110,101,0)], [String.fromCharCode(108,95,51,48,95,105,110,99,111,109,105,110,103,0),String.fromCharCode(99,95,56,53,95,118,105,101,119,0)], [String.fromCharCode(112,114,105,111,114,95,113,95,51,51,0),String.fromCharCode(110,95,57,49,95,102,102,109,101,116,97,0)]]);
          let gmail_ = 2.0;
          let libmapbufferjnih = 3.0;
         pointV += "3";
         gmail_ *= 2 - parseInt(`${gmail_}`);
         libmapbufferjnih *= parseFloat(`${parseInt(`${gmail_}`)}`);
         rightI.push(rightI.length + templateprocessorw.size);
         crownE += `${rightI.length + templateprocessorw.size}`;
         crownE = `${templateprocessorw.size - 2}`;
          let white5 = String.fromCharCode(99,104,111,115,101,110,95,117,95,56,49,0);
          let confirmationt = 0;
          let malaysiae = 0.0;
         rightI = [(String.fromCharCode(88,0) == white5 ? rightI.length : white5.length)];
         confirmationt <<= Math.min(Math.abs(confirmationt ^ 3), 1);
         malaysiae *= 1;
          let paginationm = 0.0;
          let banneri = false;
          let modeY = 0.0;
         rightI.push(templateprocessorw.size);
         paginationm /= Math.max(4, parseFloat(`${parseInt(`${paginationm}`) - 2}`));
         banneri = paginationm <= 44.21;
         modeY /= Math.max(1, 3 >> (Math.min(Math.abs(parseInt(`${paginationm}`)), 4)));
      if ((templateprocessorw.size / 3) == 5 || (templateprocessorw.size / 3) == 3) {
         templateprocessorw = new Map([[`${templateprocessorw.size}`, templateprocessorw.size | 2]]);
      }
      let libffmpegkitK = crownE == String.fromCharCode(106,122,105,116,122,111,0);
      do {
          let clubW = 5;
          let emoji4 = String.fromCharCode(114,95,55,48,95,103,108,111,98,0);
         crownE += `${crownE.length + clubW}`;
         clubW *= emoji4.length / (Math.max(3, 10));
         emoji4 += `${emoji4.length * emoji4.length}`;
         if (libffmpegkitK) {
            break;
         }
      } while (libffmpegkitK && (pointV != crownE));
      if (crownE != pointV) {
          let teamj = false;
          let vignetteq = 4.0;
          let logog: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,114,118,105,100,101,111,100,97,116,97,95,50,95,52,55,0),String.fromCharCode(98,95,50,55,95,108,97,115,116,109,98,117,102,0)], [String.fromCharCode(102,95,56,53,95,112,114,111,98,97,98,105,108,105,116,121,0),String.fromCharCode(106,95,57,52,95,112,114,105,110,116,111,117,116,0)]]);
          let dataB = false;
          let trash_ = false;
         pointV = `${rightI.length | pointV.length}`;
         teamj = logog.get(`${trash_}`) != null;
         vignetteq += (parseFloat(`${(dataB ? 2 : 5)}`));
         logog = new Map([[`${dataB}`, 2]]);
      }
       let containerE = String.fromCharCode(100,105,102,102,105,99,117,108,116,121,95,55,95,49,50,0);
      let clears = String.fromCharCode(113,110,53,116,97,100,0) == pointV;
      do {
          let libavcodec_ = 3.0;
          let episode9 = 2.0;
          let libswscaleC = String.fromCharCode(100,105,115,97,98,108,105,110,103,95,103,95,51,52,0);
         pointV = `${2 - templateprocessorw.size}`;
         libavcodec_ /= Math.max(parseFloat(`${libswscaleC.length}`), 1);
         episode9 /= Math.max((parseFloat(`${String.fromCharCode(95,0) == libswscaleC ? parseInt(`${episode9}`) : libswscaleC.length}`)), 3);
         if (clears) {
            break;
         }
      } while (clears && (!pointV.includes(`${templateprocessorw.size}`)));
         containerE = `${(crownE == String.fromCharCode(56,0) ? crownE.length : pointV.length)}`;
      libswresamplea &= (String.fromCharCode(83,0) == crownE ? crownE.length : libswresamplea);
      if (twitterm) {
         break;
      }
   } while ((libswresamplea >= 4) && twitterm);
      activem += `${parseInt(`${rewardvideos}`)}`;
      regengc.push(libswresamplea);
    const reduxCurrentEpisode = vod?.episodeWatched ?? 1;

   let fileW = 6712182 <= searchV.size;
   do {
      searchV.set(`${zoomx}`, 1 >> (Math.min(2, Math.abs(parseInt(`${zoomx}`)))));
      if (fileW) {
         break;
      }
   } while ((searchV.get(`${regengc.length}`) == null) && fileW);
   while (parseInt(`${zoomx}`) == searchV.size) {
       let l_managerg = 4.0;
       let libfabricjniU = false;
       let left3 = String.fromCharCode(121,95,54,48,95,115,99,117,98,98,101,114,0);
          let renewT = 4.0;
          let sendW = 1;
         left3 = "2";
         renewT += 2;
         sendW %= Math.max(4, sendW >> (Math.min(4, Math.abs(1))));
      while (2 > left3.length || !libfabricjniU) {
         left3 += `${parseInt(`${l_managerg}`) / (Math.max(left3.length, 7))}`;
         break;
      }
         l_managerg -= ((libfabricjniU ? 2 : 1));
      while (3.10 > (l_managerg * 4.14)) {
          let libavcodecW = 5.0;
         libfabricjniU = !libfabricjniU;
         libavcodecW += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${libavcodecW}`)), 3))}`);
         break;
      }
         libfabricjniU = 38 <= left3.length && 84.49 <= l_managerg;
         libfabricjniU = l_managerg == 53.14 || !libfabricjniU;
      while (libfabricjniU) {
         l_managerg += (left3.length - (libfabricjniU ? 2 : 3));
         break;
      }
          let middlef: Map<any, any> = new Map([[String.fromCharCode(104,95,49,51,95,112,105,110,0),false ], [String.fromCharCode(111,111,108,98,97,114,95,51,95,52,57,0),true ], [String.fromCharCode(115,95,50,52,95,98,105,110,100,0),false ]]);
          let blackr = 0.0;
          let refreshs = true;
         libfabricjniU = blackr < 35.12 || libfabricjniU;
         middlef = new Map([[`${middlef.size}`, (middlef.size + (refreshs ? 5 : 4))]]);
         blackr -= (parseFloat(`${(refreshs ? 4 : 5) / (Math.max(3, middlef.size))}`));
         l_managerg -= left3.length;
      zoomx /= Math.max(2, regengc.length);
      break;
   }
   if ((zoomx * 4.67) > 4.35 && 3 > (parseInt(`${zoomx}`) * regengc.length)) {
      zoomx *= 2;
   }
      update_67L = new Map([[`${update_67L.size}`, parseInt(`${zoomx}`)]]);
    if (reduxCurrentEpisode >= maxEpisode) {

      rewardvideos /= Math.max(3 | regengc.length, 4);
      rewardvideos += activem.length;
      regengc = [searchV.size];
      searchV = new Map([[`${regengc.length}`, (String.fromCharCode(84,0) == activem ? activem.length : regengc.length)]]);
      setCurrentEpisode(Math.min(maxEpisode, reduxCurrentEpisode));
    } else if (currentEpisode >= maxEpisode) {

      searchV.set(`${regengc.length}`, 1);
   for (let v = 0; v < 3; v++) {
       let unselectedO = String.fromCharCode(97,97,99,116,97,98,95,112,95,51,56,0);
         unselectedO = `${(unselectedO == String.fromCharCode(115,0) ? unselectedO.length : unselectedO.length)}`;
       let teamQ = 5.0;
       let c_lockC = 5.0;
      for (let o = 0; o < 2; o++) {
         unselectedO += `${parseInt(`${teamQ}`)}`;
      }
      zoomx /= Math.max(1, parseInt(`${rewardvideos}`));
   }
   let ksad6 = rewardvideos <= 5014538.0;
   do {
      rewardvideos *= 3 + searchV.size;
      if (ksad6) {
         break;
      }
   } while (((2 >> (Math.min(1, activem.length))) > 2 && 5 > (2 & activem.length)) && ksad6);
      activem = `${1 | parseInt(`${rewardvideos}`)}`;
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
        episode.status === MARTextinputBackground.MARLibjsi
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
       let telegram9 = 4.0;
    let componentJ: Array<any> = [String.fromCharCode(99,111,101,102,102,115,112,95,100,95,56,54,0), String.fromCharCode(111,95,52,48,95,122,111,111,109,0)];
    let long_oL = 2.0;
    let imagemanagerB = String.fromCharCode(99,95,57,54,95,104,97,115,104,101,114,0);
    let greyN = String.fromCharCode(103,114,97,110,116,95,107,95,57,52,0);
    let mbbidZ: Map<any, any> = new Map([[String.fromCharCode(100,105,114,101,99,116,111,114,105,101,115,95,116,95,51,48,0),false ], [String.fromCharCode(122,95,54,55,95,99,104,101,99,107,112,111,105,110,116,115,0),true ], [String.fromCharCode(100,105,97,103,111,110,97,108,95,101,95,52,56,0),false ]]);
    let paginationp = 0.0;
    let libreactnativejnir: Map<any, any> = new Map([[String.fromCharCode(108,95,51,48,95,119,97,108,108,97,112,101,114,115,0),323], [String.fromCharCode(119,95,55,56,95,114,101,113,117,97,110,116,0),801]]);
    let invitez = String.fromCharCode(104,95,49,52,95,100,101,112,114,101,99,97,116,105,111,110,115,0);
    let libavfilter2 = 2.0;
    let pointq = 4;
    let g_titleR = String.fromCharCode(114,115,116,110,95,100,95,50,55,0);
    let graphicsO = String.fromCharCode(120,95,55,95,120,109,117,108,116,105,112,108,101,0);
    let libsentryZ = false;
    let teamh: Map<any, any> = new Map([[String.fromCharCode(98,103,112,104,99,104,101,99,107,95,117,95,51,48,0),148], [String.fromCharCode(115,119,97,116,99,104,95,111,95,53,53,0),519], [String.fromCharCode(108,95,53,50,95,121,117,118,110,118,99,0),17]]);
      paginationp *= parseInt(`${libavfilter2}`);
      g_titleR += `${greyN.length | parseInt(`${long_oL}`)}`;
   if (4 < (pointq | 5)) {
      pointq *= 3;
   }

    if (vod && !isReadyPlay) {

   while (invitez.length >= 5) {
       let progressl = true;
       let graphicsH: Array<any> = [174, 971];
       let loadingT = 1.0;
       let friendsL = 1;
      let sansa = loadingT >= 9475529.0;
      do {
          let yellowU = String.fromCharCode(112,95,50,48,95,111,118,101,114,108,111,97,100,0);
          let auto_9M: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,97,99,101,100,95,116,95,51,52,0),512], [String.fromCharCode(103,95,53,53,95,112,114,111,104,105,98,105,116,0),320], [String.fromCharCode(99,117,100,97,95,116,95,57,56,0),574]]);
         loadingT -= friendsL / 2;
         yellowU = `${(yellowU == String.fromCharCode(117,0) ? yellowU.length : auto_9M.size)}`;
         auto_9M = new Map([[`${auto_9M.size}`, (String.fromCharCode(75,0) == yellowU ? yellowU.length : auto_9M.size)]]);
         if (sansa) {
            break;
         }
      } while (((4 | graphicsH.length) < 5 && 3.19 < (4.20 + loadingT)) && sansa);
       let ksadl = String.fromCharCode(119,101,98,109,105,100,115,95,98,95,50,0);
          let reactnativejs_ = 2.0;
          let matchesJ: Map<any, any> = new Map([[String.fromCharCode(99,95,57,95,108,97,116,101,114,0),856], [String.fromCharCode(103,108,121,112,104,95,50,95,48,0),251]]);
         ksadl += `${1 + parseInt(`${reactnativejs_}`)}`;
         reactnativejs_ /= Math.max(1, 5);
         matchesJ = new Map([[`${matchesJ.size}`, 3]]);
          let banner_ = 5.0;
         graphicsH = [graphicsH.length & ksadl.length];
         banner_ *= parseFloat(`${parseInt(`${banner_}`) << (Math.min(Math.abs(parseInt(`${banner_}`)), 1))}`);
      for (let w = 0; w < 2; w++) {
          let configuret = false;
          let flipperw = String.fromCharCode(104,95,50,53,95,99,111,117,110,116,115,0);
         progressl = !configuret;
         configuret = (flipperw.length << (Math.min(3, flipperw.length))) == 38;
      }
         loadingT -= graphicsH.length;
      while (ksadl.length <= graphicsH.length) {
          let transferM: Map<any, any> = new Map([[String.fromCharCode(97,112,112,108,101,95,101,95,50,51,0),451], [String.fromCharCode(114,101,99,111,114,100,97,98,108,101,95,122,95,55,57,0),834]]);
          let clockT = 4.0;
          let moon2 = String.fromCharCode(99,95,52,57,95,100,101,110,111,105,115,105,110,103,0);
         graphicsH = [2 | moon2.length];
         transferM.set(`${clockT}`, transferM.size);
         clockT *= parseFloat(`${transferM.size}`);
         moon2 = `${transferM.size ^ 1}`;
         break;
      }
         loadingT += friendsL;
      if (ksadl.length >= 2) {
          let areaw = String.fromCharCode(100,95,51,49,95,112,114,105,109,97,108,105,116,121,0);
         ksadl = `${parseInt(`${loadingT}`)}`;
         areaw += `${areaw.length}`;
      }
          let homeg: Array<any> = [24, 783, 835];
          let single5 = String.fromCharCode(115,97,118,101,115,116,97,116,101,95,55,95,49,56,0);
          let login6 = String.fromCharCode(115,119,105,102,116,121,95,105,95,51,56,0);
         loadingT -= (String.fromCharCode(54,0) == single5 ? single5.length : graphicsH.length);
         homeg.push(login6.length * homeg.length);
         login6 += `${1 - login6.length}`;
      if (4.83 > (loadingT - 1.47)) {
          let buttonG = 3.0;
         progressl = buttonG < parseFloat(`${ksadl.length}`);
      }
      for (let l = 0; l < 2; l++) {
          let hovere: Array<any> = [String.fromCharCode(121,95,53,49,95,116,97,114,103,101,116,0), String.fromCharCode(112,95,53,50,95,114,97,99,105,110,103,0)];
          let inactiveN = String.fromCharCode(115,95,53,51,95,102,108,97,103,0);
          let catagoryS = String.fromCharCode(97,105,102,102,95,99,95,53,48,0);
          let predictions: Array<any> = [619, 790];
          let short_y6 = String.fromCharCode(111,95,49,57,95,111,112,116,105,111,110,0);
         graphicsH = [catagoryS.length << (Math.min(4, Math.abs(parseInt(`${loadingT}`))))];
         hovere = [(String.fromCharCode(108,0) == inactiveN ? hovere.length : inactiveN.length)];
         catagoryS += `${1 - hovere.length}`;
         predictions.push(2 >> (Math.min(4, inactiveN.length)));
         short_y6 += `${inactiveN.length}`;
      }
      imagemanagerB += `${3 << (Math.min(Math.abs(parseInt(`${long_oL}`)), 5))}`;
      break;
   }
   if (mbbidZ.size >= parseInt(`${libavfilter2}`)) {
      mbbidZ.set(invitez, componentJ.length);
   }
   for (let c = 0; c < 2; c++) {
      greyN = `${invitez.length % 1}`;
   }
      yys_event_common.playsPlaysTimesAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
        isXmode: adultMode,
      });

       let upgradeQ = true;
      if (upgradeQ) {
          let matchw: Array<any> = [202, 7];
          let dataP = false;
         upgradeQ = !dataP;
         matchw.push(matchw.length);
         dataP = 24 >= matchw.length;
      }
      if (!upgradeQ) {
          let popup2 = String.fromCharCode(105,109,112,111,114,116,101,114,95,109,95,49,50,0);
          let borderless0: Array<any> = [559, 74, 702];
          let termsk = String.fromCharCode(117,95,56,56,95,102,105,110,103,101,114,112,114,105,110,116,115,0);
          let resultG = String.fromCharCode(108,95,51,56,95,98,101,110,99,0);
         upgradeQ = (resultG.length | termsk.length) <= 9;
         popup2 = `${popup2.length}`;
         borderless0.push(borderless0.length >> (Math.min(Math.abs(3), 2)));
         termsk = `${1 << (Math.min(4, borderless0.length))}`;
         resultG = `${1 * borderless0.length}`;
      }
      if (upgradeQ && upgradeQ) {
         upgradeQ = !upgradeQ;
      }
      libreactnativejnir.set(`${libavfilter2}`, 1 ^ parseInt(`${libavfilter2}`));
      greyN += `${3 & g_titleR.length}`;
   for (let q = 0; q < 2; q++) {
      libavfilter2 += parseInt(`${telegram9}`) % (Math.max(componentJ.length, 5));
   }

      yys_Filled.playsPlaysTimesAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
        isXmode: adultMode,
      });
    }

    setReadyPlay(true);

   for (let i = 0; i < 2; i++) {
      imagemanagerB = `${imagemanagerB.length}`;
   }
       let bodanV = String.fromCharCode(117,95,57,51,95,114,108,105,110,101,0);
          let hooksW = 5.0;
          let carouselo = String.fromCharCode(117,110,101,109,98,101,100,95,55,95,52,0);
         bodanV += `${parseInt(`${hooksW}`)}`;
         hooksW /= Math.max(1, carouselo.length / 3);
         carouselo += "2";
      let injuryb = bodanV == String.fromCharCode(121,49,52,115,112,0);
      do {
         bodanV += `${(String.fromCharCode(50,0) == bodanV ? bodanV.length : bodanV.length)}`;
         if (injuryb) {
            break;
         }
      } while ((bodanV == bodanV) && injuryb);
         bodanV = `${3 & bodanV.length}`;
      telegram9 += 3 / (Math.max(2, mbbidZ.size));
   for (let q = 0; q < 1; q++) {
      componentJ.push(pointq % 3);
   }

    if (shouldResumeAfterLoad && videoPlayerRef.current) {

      libreactnativejnir.set(invitez, libreactnativejnir.size);
   for (let y = 0; y < 1; y++) {
      invitez += `${imagemanagerB.length ^ 2}`;
   }
      telegram9 *= mbbidZ.size;
      videoPlayerRef.current?.setPause(false); 

   let awayz = imagemanagerB == String.fromCharCode(48,57,122,97,106,48,109,97,109,0);
   do {
      imagemanagerB = `${(g_titleR == String.fromCharCode(119,0) ? mbbidZ.size : g_titleR.length)}`;
      if (awayz) {
         break;
      }
   } while (awayz && (2 == imagemanagerB.length));
   for (let i = 0; i < 3; i++) {
       let style1 = true;
       let tailG = 5.0;
       let volumet = String.fromCharCode(105,95,56,56,95,115,104,97,108,108,111,119,0);
          let downloadedR = 2.0;
          let shrinkg: Map<any, any> = new Map([[String.fromCharCode(115,101,110,100,118,95,104,95,53,54,0),804], [String.fromCharCode(99,95,50,50,95,120,99,111,100,101,0),939], [String.fromCharCode(103,95,56,50,95,97,117,116,104,105,110,102,111,0),551]]);
         tailG -= 1 ^ parseInt(`${downloadedR}`);
         downloadedR *= shrinkg.size & 2;
         shrinkg = new Map([[`${shrinkg.size}`, shrinkg.size]]);
      if (style1) {
         style1 = (volumet.length - parseInt(`${tailG}`)) <= 12;
      }
       let rewardvideos = false;
         style1 = !rewardvideos;
         tailG /= Math.max(4, (String.fromCharCode(53,0) == volumet ? volumet.length : parseInt(`${tailG}`)));
         style1 = volumet.endsWith(`${rewardvideos}`);
       let fastforwardw = 4.0;
      while ((tailG * 3.87) <= 4.53) {
         style1 = 36.83 >= fastforwardw && String.fromCharCode(110,0) == volumet;
         break;
      }
       let sportV = String.fromCharCode(101,110,99,111,100,101,105,110,116,114,97,95,114,95,56,51,0);
      libavfilter2 += 3;
   }
   while ((2 | greyN.length) < 4) {
       let playercommoni = 3.0;
         playercommoni /= Math.max(parseInt(`${playercommoni}`) ^ parseInt(`${playercommoni}`), 2);
          let roomJ = String.fromCharCode(114,95,54,54,95,109,105,115,115,0);
         playercommoni /= Math.max(roomJ.length / 2, 3);
      for (let w = 0; w < 3; w++) {
         playercommoni += 1 & parseInt(`${playercommoni}`);
      }
      greyN += `${pointq | g_titleR.length}`;
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
       let penaltyF = false;
    let libswscaleh = 3.0;
    let storeD = String.fromCharCode(111,95,48,95,115,121,109,98,111,108,105,99,97,116,101,100,0);
    let progressl = 1;
    let streamingj = 3.0;
    let leakcheckerb = String.fromCharCode(116,95,49,49,95,115,116,97,114,116,0);
    let injuryV = 1.0;
    let whitex = 2.0;
    let plusV = String.fromCharCode(111,95,57,57,95,114,97,116,101,99,116,114,108,0);
    let download_ = 3.0;
    let nnewinterstitialq = String.fromCharCode(122,102,114,101,101,95,50,95,49,53,0);
    let diceV = false;
   while (!leakcheckerb.includes(`${download_}`)) {
       let feedbacki = String.fromCharCode(108,111,116,115,95,56,95,52,0);
       let libhermeso = 1;
       let footballC = String.fromCharCode(106,95,57,53,95,102,117,110,99,115,0);
          let actionD = String.fromCharCode(105,95,56,49,95,109,98,108,111,99,107,0);
         libhermeso ^= libhermeso;
         actionD += `${actionD.length}`;
      if (3 > (4 * footballC.length) && (libhermeso * footballC.length) > 4) {
         footballC = `${3 / (Math.max(3, feedbacki.length))}`;
      }
          let heart8 = 2.0;
         libhermeso /= Math.max(4, feedbacki.length);
         heart8 += parseFloat(`${2 | parseInt(`${heart8}`)}`);
         footballC = "3";
       let robotoE = false;
         footballC = "1";
      while (footballC.length >= 4) {
         feedbacki += `${((robotoE ? 2 : 5))}`;
         break;
      }
       let schedulerG = false;
       let friendst = false;
          let classesv = false;
          let appss = 0.0;
          let customC = 0.0;
         footballC += `${((friendst ? 4 : 1) % (Math.max(parseInt(`${appss}`), 4)))}`;
         classesv = 52.59 > customC;
         appss -= parseFloat(`${parseInt(`${customC}`) >> (Math.min(3, Math.abs(3)))}`);
      download_ += (parseFloat(`${String.fromCharCode(118,0) == plusV ? plusV.length : parseInt(`${download_}`)}`));
      break;
   }
      storeD = `${((penaltyF ? 1 : 5))}`;
   if (progressl <= leakcheckerb.length) {
      progressl ^= leakcheckerb.length | parseInt(`${download_}`);
   }
      streamingj -= parseFloat(`${storeD.length >> (Math.min(5, Math.abs(parseInt(`${libswscaleh}`))))}`);
   let homeP = storeD.length >= 8743951;
   do {
       let actionsv = 1;
          let libreactnativeblob6: Map<any, any> = new Map([[String.fromCharCode(111,95,51,95,115,117,105,116,101,0),false ], [String.fromCharCode(98,117,116,116,101,114,95,116,95,57,56,0),true ], [String.fromCharCode(116,106,117,116,105,108,95,57,95,53,50,0),false ]]);
          let anytime0: Array<any> = [132, 635, 240];
          let annerB = String.fromCharCode(112,108,97,116,102,111,114,109,115,95,50,95,56,51,0);
         actionsv /= Math.max(libreactnativeblob6.size & 1, 5);
         libreactnativeblob6 = new Map([[`${anytime0.length}`, 3]]);
         anytime0 = [annerB.length];
         annerB = `${anytime0.length + annerB.length}`;
      let mini0 = 5821911 <= actionsv;
      do {
         actionsv &= 2 % (Math.max(9, actionsv));
         if (mini0) {
            break;
         }
      } while ((3 >= (1 / (Math.max(5, actionsv))) || (actionsv / (Math.max(actionsv, 4))) >= 1) && mini0);
       let textinputb = String.fromCharCode(115,101,103,109,101,110,116,95,50,95,52,50,0);
       let eighteen7 = String.fromCharCode(114,101,111,114,100,101,114,95,103,95,57,51,0);
      storeD = `${1 | parseInt(`${libswscaleh}`)}`;
      if (homeP) {
         break;
      }
   } while (homeP && (plusV != String.fromCharCode(56,0) || storeD.length > 4));
      whitex -= parseFloat(`${leakcheckerb.length << (Math.min(Math.abs(1), 5))}`);
       let sharedx: Array<any> = [244, 21, 611];
       let matchI: Map<any, any> = new Map([[String.fromCharCode(114,95,55,52,0),42], [String.fromCharCode(119,95,57,54,95,109,97,106,0),872]]);
       let redirectE: Array<any> = [420, 450, 182];
       let paginationM: Array<any> = [String.fromCharCode(110,101,119,115,108,101,116,116,101,114,95,109,95,49,50,0), String.fromCharCode(122,95,55,50,95,99,110,116,0)];
      let submitk = redirectE.length >= 4991419;
      do {
         redirectE.push(redirectE.length / 2);
         if (submitk) {
            break;
         }
      } while ((4 < (redirectE.length + 2) || 2 < (redirectE.length + paginationM.length)) && submitk);
       let foundA = String.fromCharCode(121,95,53,95,112,114,111,116,111,99,111,108,115,0);
       let subsy = String.fromCharCode(113,95,53,48,95,109,97,107,101,116,97,114,98,97,108,108,0);
          let starh = 2;
          let navigationZ = false;
          let libflipper4: Array<any> = [980, 609];
         foundA += `${foundA.length ^ 2}`;
         starh |= ((navigationZ ? 2 : 1) >> (Math.min(Math.abs(1), 4)));
         navigationZ = libflipper4.includes(navigationZ);
         libflipper4 = [((navigationZ ? 5 : 1) / (Math.max(starh, 3)))];
          let modity6: Array<any> = [100, 571, 595];
          let dpluss = 0;
          let matchN = String.fromCharCode(116,111,100,97,121,115,95,55,95,52,48,0);
         paginationM = [foundA.length + matchN.length];
         modity6 = [dpluss + 2];
         dpluss %= Math.max(4, dpluss);
         matchN = `${dpluss << (Math.min(modity6.length, 2))}`;
         sharedx.push(3 >> (Math.min(5, sharedx.length)));
      download_ -= parseFloat(`${parseInt(`${injuryV}`)}`);
      matchI = new Map([[`${matchI.size}`, 3 ^ matchI.size]]);
   if (whitex == 1.42) {
       let containerC = 4;
       let libfabricjnik = String.fromCharCode(112,95,54,55,95,116,97,98,108,101,115,0);
       let show6 = String.fromCharCode(99,109,115,103,95,109,95,53,48,0);
       let closer = 1.0;
      for (let d = 0; d < 2; d++) {
         libfabricjnik += `${parseInt(`${closer}`) & 2}`;
      }
      for (let w = 0; w < 1; w++) {
         closer += containerC ^ 2;
      }
      for (let q = 0; q < 2; q++) {
         show6 += `${show6.length}`;
      }
      for (let q = 0; q < 3; q++) {
          let playlisti = true;
          let typingg = 0.0;
         closer += parseInt(`${typingg}`) * 3;
         playlisti = !playlisti;
         typingg *= ((playlisti ? 2 : 2) * (playlisti ? 5 : 4));
      }
      let videojs0 = libfabricjnik == String.fromCharCode(95,53,49,101,54,109,0);
      do {
          let countryb = 0;
          let sansU = String.fromCharCode(104,97,110,103,95,48,95,55,0);
          let predictionI: Map<any, any> = new Map([[String.fromCharCode(111,95,57,55,95,99,111,109,109,117,110,105,99,97,116,105,111,110,0),true ], [String.fromCharCode(122,95,57,49,95,111,112,116,105,109,105,115,116,105,99,0),false ]]);
         libfabricjnik = `${libfabricjnik.length}`;
         countryb -= countryb / (Math.max(sansU.length, 2));
         sansU = `${countryb}`;
         predictionI = new Map([[`${predictionI.size}`, 3]]);
         if (videojs0) {
            break;
         }
      } while (videojs0 && (show6 == libfabricjnik));
      while (libfabricjnik == String.fromCharCode(50,0)) {
         show6 = `${2 % (Math.max(10, containerC))}`;
         break;
      }
       let huawei1: Map<any, any> = new Map([[String.fromCharCode(101,95,50,54,95,110,101,108,108,121,0),991], [String.fromCharCode(114,95,51,53,95,118,95,49,51,0),825]]);
          let tickt: Array<any> = [510, 182, 432];
         closer -= containerC;
         tickt = [tickt.length];
      storeD += `${(parseInt(`${libswscaleh}`) | (penaltyF ? 4 : 3))}`;
   }
   for (let m = 0; m < 2; m++) {
      injuryV /= Math.max((parseInt(`${libswscaleh}`) % (Math.max(3, (penaltyF ? 1 : 5)))), 1);
   }
      progressl ^= parseInt(`${injuryV}`);
      leakcheckerb += `${(String.fromCharCode(106,0) == nnewinterstitialq ? parseInt(`${streamingj}`) : nnewinterstitialq.length)}`;
      download_ -= parseFloat(`${parseInt(`${libswscaleh}`) % (Math.max(parseInt(`${injuryV}`), 6))}`);
      nnewinterstitialq = `${parseInt(`${injuryV}`) ^ 1}`;
   while (1.60 <= (plusV.length - libswscaleh) || 4 <= (2 | plusV.length)) {
      libswscaleh -= parseInt(`${injuryV}`) + 3;
      break;
   }
   let bridgeD = streamingj <= 9158614.0;
   do {
      streamingj *= parseFloat(`${plusV.length | 1}`);
      if (bridgeD) {
         break;
      }
   } while ((storeD.startsWith(`${streamingj}`)) && bridgeD);
   for (let i = 0; i < 2; i++) {
      injuryV /= Math.max(((penaltyF ? 5 : 5)), 4);
   }
      whitex -= parseFloat(`${storeD.length}`);
       let dycreatorY = String.fromCharCode(115,119,97,112,112,101,114,95,115,95,57,0);
       let baiduM = 5.0;
       let patha = 0.0;
       let goalx = 3;
       let libswresampleB = 2;
         libswresampleB += libswresampleB / 3;
          let yellowU = String.fromCharCode(106,95,56,50,95,102,114,97,109,101,98,117,102,102,101,114,115,0);
          let anytime3 = 1.0;
          let headerj: Map<any, any> = new Map([[String.fromCharCode(102,97,117,108,116,121,95,112,95,56,50,0),297], [String.fromCharCode(103,97,116,101,95,48,95,56,52,0),188]]);
         patha *= libswresampleB;
         yellowU += `${yellowU.length | headerj.size}`;
         anytime3 += parseFloat(`${1}`);
         headerj.set(`${anytime3}`, headerj.size);
         patha -= dycreatorY.length;
          let mbbidg: Map<any, any> = new Map([[String.fromCharCode(116,95,52,53,95,102,119,104,116,0),495], [String.fromCharCode(105,112,111,108,95,49,95,53,48,0),284]]);
          let shareL = true;
         baiduM -= parseFloat(`${2 % (Math.max(4, parseInt(`${baiduM}`)))}`);
         mbbidg = new Map([[`${mbbidg.size}`, 2]]);
         shareL = mbbidg.size == 50;
          let hiadk = true;
          let auto_20K = String.fromCharCode(121,95,49,50,95,102,111,114,119,97,114,100,0);
          let videocommonW: Array<any> = [575, 680];
         baiduM *= (parseFloat(`${(hiadk ? 3 : 4) & 3}`));
         hiadk = 26 >= auto_20K.length;
         auto_20K = `${auto_20K.length ^ videocommonW.length}`;
         videocommonW.push(3 * auto_20K.length);
         goalx /= Math.max(1, libswresampleB * dycreatorY.length);
         dycreatorY = "2";
      while ((libswresampleB >> (Math.min(2, Math.abs(goalx)))) > 5 && 5 > (libswresampleB >> (Math.min(2, Math.abs(goalx))))) {
         libswresampleB *= 2;
         break;
      }
      storeD = `${(String.fromCharCode(77,0) == dycreatorY ? dycreatorY.length : parseInt(`${baiduM}`))}`;

    setShowAdOverlay(true);

   while ((1 >> (Math.min(3, leakcheckerb.length))) >= 2 || 2.20 >= (injuryV / 1.19)) {
      leakcheckerb = `${plusV.length}`;
      break;
   }
   if (!penaltyF) {
       let googleK = 1;
         googleK >>= Math.min(3, Math.abs(googleK >> (Math.min(Math.abs(googleK), 4))));
         googleK &= 3 - googleK;
         googleK %= Math.max(3, googleK % 3);
      penaltyF = 9.92 <= download_;
   }
       let statsf = String.fromCharCode(108,95,54,48,95,115,111,97,98,111,114,116,0);
       let qaagT = 0;
       let helperz: Array<any> = [475, 300, 199];
       let serviceY: Array<any> = [294, 147];
          let fileA = 3;
         statsf += `${helperz.length >> (Math.min(Math.abs(2), 4))}`;
         fileA -= fileA;
      while (3 <= (helperz.length - 5)) {
         helperz = [statsf.length & 2];
         break;
      }
      let rncorew = 8323092 <= qaagT;
      do {
         qaagT &= 3 << (Math.min(3, helperz.length));
         if (rncorew) {
            break;
         }
      } while ((helperz.length < 4) && rncorew);
         helperz.push(3);
      for (let i = 0; i < 2; i++) {
          let collectione = false;
          let libyoga1 = String.fromCharCode(115,95,55,48,95,101,120,112,97,110,100,0);
          let libavdevicew = 5.0;
          let anneri = 2.0;
         helperz = [3 ^ helperz.length];
         collectione = !libyoga1.endsWith(`${collectione}`);
         libyoga1 = `${(String.fromCharCode(106,0) == libyoga1 ? libyoga1.length : parseInt(`${anneri}`))}`;
         libavdevicew *= parseInt(`${libavdevicew}`);
         anneri *= libyoga1.length;
      }
      storeD = `${parseInt(`${libswscaleh}`) & 2}`;
      streamingj *= parseFloat(`${parseInt(`${libswscaleh}`)}`);
      injuryV -= (leakcheckerb == String.fromCharCode(73,0) ? leakcheckerb.length : parseInt(`${injuryV}`));
   while ((libswscaleh * leakcheckerb.length) >= 5.29 || (leakcheckerb.length >> (Math.min(Math.abs(5), 3))) >= 1) {
      leakcheckerb = "2";
      break;
   }
   if (leakcheckerb.length == nnewinterstitialq.length) {
      leakcheckerb += `${(String.fromCharCode(99,0) == plusV ? plusV.length : (penaltyF ? 5 : 3))}`;
   }
      whitex -= parseFloat(`${parseInt(`${download_}`) << (Math.min(plusV.length, 2))}`);
   for (let y = 0; y < 3; y++) {
       let package_0_ = String.fromCharCode(115,116,97,114,116,95,104,95,52,48,0);
       let roota: Map<any, any> = new Map([[String.fromCharCode(99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,95,109,95,51,53,0),13], [String.fromCharCode(106,97,105,108,98,114,101,97,107,95,48,95,55,54,0),617]]);
       let whiteH = 2.0;
       let footballW = String.fromCharCode(112,114,105,118,97,99,121,95,118,95,51,48,0);
       let scrollviewn = String.fromCharCode(100,95,51,48,95,112,117,112,105,108,0);
      let splashn = 9253856.0 >= whiteH;
      do {
         whiteH /= Math.max((String.fromCharCode(78,0) == footballW ? footballW.length : parseInt(`${whiteH}`)), 5);
         if (splashn) {
            break;
         }
      } while (((3 << (Math.min(1, footballW.length))) == 5 || (5.48 * whiteH) == 2.77) && splashn);
      while (package_0_.includes(`${roota.size}`)) {
          let stationQ = String.fromCharCode(112,114,101,99,111,109,112,111,115,101,100,95,110,95,49,56,0);
         package_0_ += `${3 & stationQ.length}`;
         break;
      }
         footballW += "2";
      for (let x = 0; x < 3; x++) {
          let settingsj = 5.0;
         scrollviewn = `${scrollviewn.length & parseInt(`${settingsj}`)}`;
      }
         whiteH *= footballW.length;
      for (let x = 0; x < 3; x++) {
          let logoO = String.fromCharCode(117,95,57,51,95,100,101,99,111,114,97,116,105,111,110,0);
          let short_ztY = String.fromCharCode(110,101,120,116,104,111,112,95,99,95,51,56,0);
          let acceptedV = String.fromCharCode(107,95,50,48,95,116,97,105,108,0);
         scrollviewn = `${short_ztY.length >> (Math.min(logoO.length, 4))}`;
         logoO += `${acceptedV.length << (Math.min(Math.abs(2), 1))}`;
         short_ztY += `${(String.fromCharCode(121,0) == acceptedV ? acceptedV.length : acceptedV.length)}`;
      }
         roota = new Map([[footballW, scrollviewn.length | 2]]);
          let xnewsi = 2.0;
          let fullW = 0;
          let castingS: Array<any> = [484, 164];
         footballW += "3";
         xnewsi -= fullW;
         fullW /= Math.max(4, 1 << (Math.min(Math.abs(parseInt(`${xnewsi}`)), 3)));
         castingS.push(3 | fullW);
         whiteH *= 3 << (Math.min(3, Math.abs(roota.size)));
      while (1.25 <= (footballW.length + whiteH) && 1 <= (footballW.length + parseInt(`${whiteH}`))) {
          let cancelG = String.fromCharCode(112,111,115,116,114,111,116,97,116,101,95,109,95,52,48,0);
          let penaltyw = false;
          let progressg = 2.0;
         footballW += `${(package_0_.length << (Math.min(2, Math.abs((penaltyw ? 4 : 2)))))}`;
         cancelG = `${cancelG.length}`;
         penaltyw = cancelG == String.fromCharCode(48,0);
         progressg -= (cancelG == String.fromCharCode(80,0) ? parseInt(`${progressg}`) : cancelG.length);
         break;
      }
      if (!package_0_.endsWith(`${roota.size}`)) {
         roota.set(scrollviewn, scrollviewn.length % 3);
      }
      progressl -= 3 & roota.size;
   }
      progressl -= storeD.length >> (Math.min(4, Math.abs(parseInt(`${streamingj}`))));
      download_ *= (parseFloat(`${(penaltyF ? 1 : 5) << (Math.min(Math.abs(parseInt(`${download_}`)), 1))}`));
       let crownA: Array<any> = [String.fromCharCode(102,95,56,56,95,115,99,101,110,101,99,117,116,0), String.fromCharCode(117,95,52,50,95,99,98,117,102,0)];
       let libsentrys = String.fromCharCode(106,95,51,49,95,109,97,114,107,105,110,103,115,0);
      let pangle9 = 9421575 >= crownA.length;
      do {
          let controlsu = true;
          let textlayoutmanagerj = 2.0;
          let nterstitialv = 0.0;
          let klevinb = 3.0;
          let bdxadsdk2 = String.fromCharCode(107,95,54,53,95,118,112,109,99,0);
         crownA.push(((controlsu ? 1 : 2)));
         controlsu = 98.90 > nterstitialv;
         textlayoutmanagerj *= parseFloat(`${parseInt(`${textlayoutmanagerj}`) % 3}`);
         nterstitialv *= parseInt(`${klevinb}`);
         bdxadsdk2 += `${bdxadsdk2.length}`;
         if (pangle9) {
            break;
         }
      } while ((libsentrys.length < crownA.length) && pangle9);
         crownA.push(2 + crownA.length);
         crownA = [libsentrys.length | crownA.length];
      for (let a = 0; a < 1; a++) {
         crownA.push(1 >> (Math.min(4, libsentrys.length)));
      }
         libsentrys += `${crownA.length / 3}`;
       let libfabricjnif: Map<any, any> = new Map([[String.fromCharCode(119,95,54,54,95,114,101,102,100,117,112,101,0),780], [String.fromCharCode(109,95,56,55,95,100,101,112,108,111,121,0),783]]);
      progressl -= ((penaltyF ? 2 : 1) / 2);
   while (1.9 <= (streamingj / (Math.max(9, progressl)))) {
       let collection8 = String.fromCharCode(112,111,108,121,109,111,100,95,119,95,51,55,0);
       let sina3 = 3.0;
       let libreanimated4 = String.fromCharCode(117,110,122,116,101,108,108,95,117,95,51,57,0);
         libreanimated4 += `${parseInt(`${sina3}`) & 2}`;
          let latn7 = String.fromCharCode(106,95,54,55,95,103,101,116,112,105,120,0);
         sina3 -= parseFloat(`${parseInt(`${sina3}`)}`);
         latn7 += `${latn7.length & 3}`;
      while (libreanimated4.length == collection8.length) {
         collection8 = `${collection8.length}`;
         break;
      }
         collection8 += `${collection8.length}`;
       let green6 = String.fromCharCode(102,95,51,57,95,113,115,118,100,101,105,110,116,0);
         green6 = `${(String.fromCharCode(99,0) == libreanimated4 ? libreanimated4.length : parseInt(`${sina3}`))}`;
      let bdxadsdk5 = 8861499.0 >= sina3;
      do {
         sina3 += parseFloat(`${3}`);
         if (bdxadsdk5) {
            break;
         }
      } while ((collection8.endsWith(`${sina3}`)) && bdxadsdk5);
       let teamg = String.fromCharCode(109,95,49,52,95,113,112,101,103,0);
      while (4 >= green6.length) {
         green6 += `${parseInt(`${sina3}`)}`;
         break;
      }
      streamingj += parseFloat(`${leakcheckerb.length << (Math.min(nnewinterstitialq.length, 4))}`);
      break;
   }
      nnewinterstitialq = `${2 + progressl}`;
      storeD += "2";
      download_ -= parseFloat(`${parseInt(`${libswscaleh}`) / 1}`);
      streamingj *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${libswscaleh}`)), 2))}`);
   let unselectedH = 7522940.0 <= libswscaleh;
   do {
      libswscaleh += plusV.length;
      if (unselectedH) {
         break;
      }
   } while (unselectedH && (penaltyF && 3.59 == (libswscaleh - 3.79)));
    videoPlayerRef.current?.setPause(true);
  };

  const onCloseAdOverlay = () => {
       let stringsD = String.fromCharCode(111,109,112,114,101,115,115,111,114,95,52,95,54,49,0);
    let viewerY = 2.0;
    let vietnam3 = String.fromCharCode(118,95,54,55,95,105,110,115,117,102,102,105,99,105,101,110,116,0);
    let championc = 1.0;
    let textlayoutmanageri = 1.0;
    let stringZ = 2;
    let register_yH = 4.0;
    let detaild: Map<any, any> = new Map([[String.fromCharCode(106,95,55,95,108,101,102,116,0),803], [String.fromCharCode(101,118,97,108,117,108,97,116,101,95,51,95,52,56,0),784], [String.fromCharCode(112,105,99,107,95,114,95,51,54,0),641]]);
   for (let s = 0; s < 3; s++) {
      detaild.set(stringsD, 3);
   }
       let langkeyt: Map<any, any> = new Map([[String.fromCharCode(99,111,110,99,117,114,101,110,116,95,105,95,57,56,0),892], [String.fromCharCode(100,95,54,50,95,115,97,108,115,97,0),532], [String.fromCharCode(113,95,50,55,95,112,117,98,108,105,115,104,0),955]]);
       let greyD: Array<any> = [182, 349, 886];
          let verticalE = String.fromCharCode(105,95,55,56,95,115,116,114,112,116,105,109,101,0);
          let ajaxo = 0.0;
          let libavutilZ = String.fromCharCode(105,110,116,101,103,101,114,105,102,121,95,107,95,56,53,0);
         langkeyt = new Map([[`${greyD.length}`, 2]]);
         verticalE += `${(String.fromCharCode(107,0) == libavutilZ ? libavutilZ.length : verticalE.length)}`;
         ajaxo += parseInt(`${ajaxo}`);
         greyD = [langkeyt.size];
      while (langkeyt.get(`${greyD.length}`) != null) {
          let style2: Map<any, any> = new Map([[String.fromCharCode(114,101,102,101,114,114,97,108,95,100,95,53,49,0),String.fromCharCode(115,95,53,57,95,112,101,114,109,117,116,97,116,105,111,110,115,0)], [String.fromCharCode(107,95,50,56,95,99,108,105,99,107,115,0),String.fromCharCode(110,98,112,112,95,106,95,52,51,0)]]);
          let componentregistryD = 4.0;
          let usernameQ = String.fromCharCode(100,95,49,49,95,108,105,107,101,0);
         greyD = [3];
         style2 = new Map([[`${style2.size}`, style2.size]]);
         componentregistryD /= Math.max(1, parseInt(`${componentregistryD}`));
         usernameQ = `${parseInt(`${componentregistryD}`)}`;
         break;
      }
         langkeyt = new Map([[`${langkeyt.size}`, greyD.length << (Math.min(2, Math.abs(langkeyt.size)))]]);
      let historyL = greyD.length >= 9179096;
      do {
         greyD.push(langkeyt.size * greyD.length);
         if (historyL) {
            break;
         }
      } while (historyL && (4 <= greyD.length));
      if ((greyD.length & langkeyt.size) < 5) {
          let paginationP = false;
          let launchh = String.fromCharCode(115,95,54,49,95,101,105,110,116,114,0);
          let sportsb = true;
         langkeyt.set(launchh, ((paginationP ? 1 : 1)));
         paginationP = (!sportsb ? !sportsb : sportsb);
         launchh = `${((sportsb ? 1 : 5))}`;
      }
      stringsD += `${stringZ}`;
   for (let l = 0; l < 2; l++) {
      championc += 3;
   }
   let arrowm = 5594073.0 >= textlayoutmanageri;
   do {
      textlayoutmanageri += parseInt(`${championc}`);
      if (arrowm) {
         break;
      }
   } while (arrowm && (textlayoutmanageri <= 1.2));
       let orientationS = String.fromCharCode(102,95,57,50,95,102,114,97,109,101,112,111,111,108,0);
      let zhubo_ = orientationS == String.fromCharCode(56,99,100,49,122,115,0);
      do {
          let videocommoni = 2.0;
          let productM: Array<any> = [135, 569];
          let libreactnativeblobi = true;
          let agreementI = String.fromCharCode(100,95,50,48,95,115,116,97,114,114,101,100,0);
          let favoriten: Map<any, any> = new Map([[String.fromCharCode(122,109,113,115,104,101,108,108,95,106,95,54,50,0),384], [String.fromCharCode(115,108,97,110,116,95,112,95,51,48,0),4], [String.fromCharCode(97,99,99,117,109,117,108,97,116,101,95,110,95,49,54,0),763]]);
         orientationS = `${1 ^ favoriten.size}`;
         videocommoni -= agreementI.length % (Math.max(10, productM.length));
         productM.push(parseInt(`${videocommoni}`) / (Math.max(productM.length, 8)));
         libreactnativeblobi = ((agreementI.length * (libreactnativeblobi ? 11 : agreementI.length)) == 11);
         favoriten.set(`${videocommoni}`, productM.length);
         if (zhubo_) {
            break;
         }
      } while ((orientationS == String.fromCharCode(67,0)) && zhubo_);
      if (orientationS != String.fromCharCode(113,0)) {
         orientationS = `${orientationS.length % 3}`;
      }
      for (let q = 0; q < 3; q++) {
         orientationS = `${orientationS.length >> (Math.min(Math.abs(3), 2))}`;
      }
      stringsD = `${parseInt(`${register_yH}`)}`;
       let xadsdk8 = 1.0;
       let with_vz: Map<any, any> = new Map([[String.fromCharCode(98,97,115,101,105,115,107,101,121,95,112,95,51,49,0),true ], [String.fromCharCode(97,98,111,118,101,95,102,95,50,56,0),false ], [String.fromCharCode(116,95,52,57,95,101,98,117,108,97,115,0),false ]]);
       let manifestD = String.fromCharCode(104,95,50,50,95,117,115,108,101,101,112,0);
          let mountingu = String.fromCharCode(104,97,115,104,97,98,108,101,95,48,95,49,49,0);
          let referrerC = String.fromCharCode(97,95,49,57,95,112,111,115,116,0);
          let interstitial6 = false;
         manifestD = "3";
         mountingu += `${mountingu.length + 1}`;
         referrerC = "3";
         interstitial6 = mountingu == String.fromCharCode(99,0);
          let fadfdeebbbfdabbbabdadfaaddaak = String.fromCharCode(100,105,115,112,108,97,121,105,110,103,95,99,95,55,52,0);
          let indexf = 4.0;
          let gemfilea = 4;
         manifestD += `${with_vz.size << (Math.min(manifestD.length, 2))}`;
         fadfdeebbbfdabbbabdadfaaddaak += `${fadfdeebbbfdabbbabdadfaaddaak.length}`;
         indexf += parseInt(`${indexf}`) % (Math.max(5, gemfilea));
         gemfilea ^= fadfdeebbbfdabbbabdadfaaddaak.length | parseInt(`${indexf}`);
         with_vz = new Map([[`${with_vz.size}`, 2]]);
      while ((1 + with_vz.size) > 3) {
         with_vz.set(`${xadsdk8}`, manifestD.length ^ parseInt(`${xadsdk8}`));
         break;
      }
         xadsdk8 -= with_vz.size | 3;
      if (3 < (manifestD.length | 2) || (2 | with_vz.size) < 4) {
         manifestD += `${3 >> (Math.min(4, Math.abs(parseInt(`${xadsdk8}`))))}`;
      }
          let placementC = String.fromCharCode(99,111,110,102,111,114,109,115,95,106,95,52,53,0);
          let untick1 = String.fromCharCode(102,97,110,111,117,116,95,109,95,54,48,0);
          let topicQ = String.fromCharCode(102,95,55,50,95,111,115,116,97,114,0);
         manifestD += `${placementC.length}`;
         placementC = `${topicQ.length}`;
         untick1 = `${untick1.length}`;
         topicQ = `${topicQ.length ^ 2}`;
          let libloggerf = String.fromCharCode(116,95,51,57,95,112,111,114,116,97,108,0);
          let away3 = 5.0;
         xadsdk8 /= Math.max(2, (libloggerf == String.fromCharCode(82,0) ? libloggerf.length : parseInt(`${xadsdk8}`)));
         away3 += parseInt(`${away3}`);
      let agreementM = 8351325 >= with_vz.size;
      do {
          let configureq = String.fromCharCode(100,109,117,108,95,114,95,57,50,0);
          let w_centerH = String.fromCharCode(107,101,121,102,114,97,109,101,115,95,106,95,51,49,0);
         with_vz = new Map([[configureq, w_centerH.length]]);
         if (agreementM) {
            break;
         }
      } while ((manifestD.length >= 5) && agreementM);
      stringsD = `${parseInt(`${register_yH}`)}`;
   for (let o = 0; o < 3; o++) {
       let invites: Array<any> = [653, 343];
       let bdxadsdkP = String.fromCharCode(109,95,53,57,95,100,117,114,105,110,103,0);
       let attributedstringZ: Map<any, any> = new Map([[String.fromCharCode(105,110,100,105,99,97,116,111,114,95,55,95,50,48,0),727], [String.fromCharCode(109,111,118,101,95,113,95,53,54,0),101]]);
       let commentl = String.fromCharCode(117,95,56,49,95,114,101,100,118,0);
       let mbnativeq = String.fromCharCode(105,109,112,114,105,110,116,95,54,95,53,49,0);
          let pauses = 5.0;
         bdxadsdkP = "3";
         pauses += parseFloat(`${3}`);
       let whistleA = true;
      while (3 == attributedstringZ.size) {
         attributedstringZ = new Map([[`${whistleA}`, bdxadsdkP.length << (Math.min(Math.abs(3), 1))]]);
         break;
      }
      while (bdxadsdkP.length > invites.length) {
         bdxadsdkP += "2";
         break;
      }
      while (bdxadsdkP.includes(`${invites.length}`)) {
         invites.push(2);
         break;
      }
         bdxadsdkP += "3";
      while (3 > bdxadsdkP.length) {
          let soundl = String.fromCharCode(104,95,54,55,95,102,114,101,113,0);
          let contexty = false;
          let xvodR: Map<any, any> = new Map([[String.fromCharCode(112,95,55,53,95,114,101,101,110,116,114,97,110,116,0),false ], [String.fromCharCode(109,97,105,110,104,101,97,100,101,114,95,114,95,57,54,0),false ]]);
          let emojiR = 0;
          let zhengpian2 = 4.0;
         bdxadsdkP += `${(1 * (whistleA ? 5 : 4))}`;
         soundl = `${3 | emojiR}`;
         contexty = null != xvodR.get(`${contexty}`);
         xvodR.set(`${contexty}`, ((contexty ? 4 : 4) / (Math.max(parseInt(`${zhengpian2}`), 6))));
         emojiR %= Math.max(soundl.length / 1, 5);
         zhengpian2 += soundl.length * 3;
         break;
      }
          let crownL = String.fromCharCode(102,95,51,55,95,101,120,99,101,101,100,0);
          let datap: Map<any, any> = new Map([[String.fromCharCode(103,95,49,56,95,114,101,102,105,100,0),String.fromCharCode(109,95,53,48,95,102,105,102,111,0)], [String.fromCharCode(105,109,100,99,116,95,103,95,54,0),String.fromCharCode(104,105,116,95,119,95,52,51,0)], [String.fromCharCode(117,110,114,101,118,101,114,115,101,100,95,112,95,57,55,0),String.fromCharCode(110,95,49,52,95,99,111,108,108,101,99,116,0)]]);
          let goalw = true;
         mbnativeq = `${(String.fromCharCode(71,0) == commentl ? commentl.length : invites.length)}`;
         crownL = "2";
         datap = new Map([[`${datap.size}`, 1 / (Math.max(4, datap.size))]]);
         goalw = null != datap.get(`${goalw}`);
      for (let k = 0; k < 3; k++) {
          let libfbjnig: Map<any, any> = new Map([[String.fromCharCode(114,101,109,111,118,97,98,108,101,95,107,95,52,49,0),448], [String.fromCharCode(105,95,54,95,109,105,112,115,100,115,112,0),223], [String.fromCharCode(105,95,53,55,0),611]]);
          let watche: Array<any> = [266, 462];
         commentl += `${mbnativeq.length | 2}`;
         libfbjnig = new Map([[`${libfbjnig.size}`, libfbjnig.size]]);
         watche.push(libfbjnig.size << (Math.min(Math.abs(3), 3)));
      }
       let combineU: Array<any> = [16, 7];
      for (let g = 0; g < 3; g++) {
         invites = [attributedstringZ.size];
      }
         combineU = [1 & invites.length];
      while (whistleA) {
         mbnativeq = `${((whistleA ? 1 : 2) & combineU.length)}`;
         break;
      }
      while ((invites.length % 4) == 3 || 4 == (invites.length % (Math.max(2, combineU.length)))) {
         invites = [(bdxadsdkP == String.fromCharCode(84,0) ? bdxadsdkP.length : combineU.length)];
         break;
      }
          let countdownM = 0.0;
          let crossU = false;
          let arrowI = 3;
         attributedstringZ = new Map([[bdxadsdkP, bdxadsdkP.length << (Math.min(Math.abs(1), 3))]]);
         countdownM /= Math.max(2, parseInt(`${countdownM}`));
         crossU = (arrowI / (Math.max(2, countdownM))) >= 74;
         arrowI /= Math.max(5, 2);
      stringsD = "2";
   }
   let traminik = 6192852.0 <= championc;
   do {
       let libreactnativeblobY: Map<any, any> = new Map([[String.fromCharCode(112,95,51,95,99,97,110,99,101,108,0),String.fromCharCode(99,111,108,111,114,115,112,97,99,101,95,100,95,56,56,0)], [String.fromCharCode(105,110,99,111,114,114,101,99,116,95,111,95,55,51,0),String.fromCharCode(98,95,50,50,95,111,118,101,114,114,105,100,101,110,0)]]);
       let libswscaleG: Map<any, any> = new Map([[String.fromCharCode(101,121,99,104,97,105,110,95,102,95,54,49,0),531], [String.fromCharCode(112,95,48,95,115,117,98,115,99,114,105,98,97,98,108,101,115,0),132]]);
       let type_bB = false;
         libswscaleG.set(`${type_bB}`, (libswscaleG.size >> (Math.min(1, Math.abs((type_bB ? 3 : 4))))));
      for (let e = 0; e < 1; e++) {
         type_bB = null != libreactnativeblobY.get(`${type_bB}`);
      }
      if ((libswscaleG.size >> (Math.min(Math.abs(libreactnativeblobY.size), 1))) == 3 && 3 == (libreactnativeblobY.size >> (Math.min(1, Math.abs(libswscaleG.size))))) {
         libreactnativeblobY.set(`${libswscaleG.size}`, libreactnativeblobY.size >> (Math.min(Math.abs(1), 2)));
      }
          let assistt: Array<any> = [657, 418, 549];
          let trophy5 = String.fromCharCode(108,101,97,100,105,110,103,95,51,95,54,50,0);
         libreactnativeblobY = new Map([[`${type_bB}`, ((type_bB ? 4 : 3))]]);
         assistt = [trophy5.length & 3];
         trophy5 += `${trophy5.length}`;
         libreactnativeblobY = new Map([[`${libswscaleG.size}`, libswscaleG.size]]);
          let main_z5 = String.fromCharCode(116,95,50,95,99,108,111,117,100,0);
          let bottomk: Map<any, any> = new Map([[String.fromCharCode(114,95,55,54,95,104,97,114,100,0),255], [String.fromCharCode(107,95,52,48,95,115,121,110,116,104,0),746], [String.fromCharCode(97,112,112,118,101,121,111,114,95,113,95,53,57,0),285]]);
         libreactnativeblobY = new Map([[`${libreactnativeblobY.size}`, libreactnativeblobY.size / 3]]);
         main_z5 += "1";
         bottomk = new Map([[`${bottomk.size}`, 3]]);
          let libfabricjnif = false;
         libreactnativeblobY = new Map([[`${libreactnativeblobY.size}`, ((type_bB ? 4 : 1) * 2)]]);
         libfabricjnif = (libfabricjnif ? !libfabricjnif : libfabricjnif);
          let runtimeschedulerY = String.fromCharCode(119,95,53,56,95,112,114,101,116,116,121,119,114,105,116,101,114,0);
         libswscaleG.set(`${libswscaleG.size}`, 1 * libswscaleG.size);
         runtimeschedulerY += `${runtimeschedulerY.length + 3}`;
          let sigmobd = String.fromCharCode(105,110,99,111,109,112,108,101,116,101,95,51,95,52,56,0);
          let connectionG: Array<any> = [956, 908, 371];
         libreactnativeblobY = new Map([[`${libreactnativeblobY.size}`, libreactnativeblobY.size]]);
         sigmobd = `${connectionG.length * 2}`;
         connectionG = [connectionG.length * sigmobd.length];
      championc += (vietnam3 == String.fromCharCode(80,0) ? stringZ : vietnam3.length);
      if (traminik) {
         break;
      }
   } while ((5 > (parseInt(`${championc}`) / (Math.max(stringsD.length, 10))) || 5 > (parseInt(`${championc}`) / (Math.max(stringsD.length, 4)))) && traminik);
      textlayoutmanageri /= Math.max(stringZ, 5);
   for (let p = 0; p < 3; p++) {
      vietnam3 += "3";
   }
   if (stringsD.length == viewerY) {
      viewerY += parseInt(`${register_yH}`);
   }
      register_yH *= parseFloat(`${1}`);
   for (let n = 0; n < 2; n++) {
      viewerY *= stringsD.length;
   }

    setShowAdOverlay(false);

   while (!vietnam3.endsWith(`${register_yH}`)) {
      register_yH *= parseFloat(`${parseInt(`${textlayoutmanageri}`)}`);
      break;
   }
      vietnam3 = "1";
   let sinab = 5414655 >= stringsD.length;
   do {
      stringsD = `${stringZ}`;
      if (sinab) {
         break;
      }
   } while (sinab && ((stringsD.length / (Math.max(7, parseInt(`${textlayoutmanageri}`)))) > 1 || (1 >> (Math.min(5, stringsD.length))) > 4));
   if (stringZ >= register_yH) {
      stringZ %= Math.max(5, stringsD.length);
   }
   if (4.14 <= (championc + 1.32)) {
       let incidentX = 3.0;
       let libimagepipeline2 = String.fromCharCode(97,117,116,104,114,111,114,105,122,97,116,105,111,110,95,121,95,51,48,0);
       let greyf: Array<any> = [String.fromCharCode(116,115,101,113,95,117,95,50,51,0), String.fromCharCode(115,116,105,99,107,101,114,115,95,49,95,49,54,0)];
      let active5 = 5565032 <= greyf.length;
      do {
         greyf = [libimagepipeline2.length];
         if (active5) {
            break;
         }
      } while (active5 && (5 < (libimagepipeline2.length - greyf.length) || 3 < (greyf.length - 5)));
         libimagepipeline2 = `${libimagepipeline2.length ^ 1}`;
      while (!libimagepipeline2.includes(`${incidentX}`)) {
         libimagepipeline2 = `${libimagepipeline2.length}`;
         break;
      }
          let dangerW = String.fromCharCode(102,108,97,99,100,115,112,95,50,95,53,56,0);
          let launcherr: Array<any> = [504, 659, 859];
         libimagepipeline2 += `${libimagepipeline2.length - dangerW.length}`;
         dangerW = "1";
         launcherr.push(1);
         incidentX /= Math.max(libimagepipeline2.length ^ greyf.length, 2);
         greyf = [parseInt(`${incidentX}`) - 2];
         libimagepipeline2 += `${libimagepipeline2.length | parseInt(`${incidentX}`)}`;
         greyf = [libimagepipeline2.length % 2];
      for (let u = 0; u < 1; u++) {
          let libreactnativejnin = 4.0;
          let tickr = String.fromCharCode(112,99,97,112,0);
          let field7 = 2.0;
          let dragS = 1.0;
         libimagepipeline2 += `${(libimagepipeline2 == String.fromCharCode(81,0) ? libimagepipeline2.length : parseInt(`${incidentX}`))}`;
         libreactnativejnin *= 2;
         tickr += `${tickr.length}`;
         field7 -= 1 / (Math.max(parseInt(`${field7}`), 4));
         dragS -= 1;
      }
      vietnam3 = `${2 & stringZ}`;
   }
   if (2.9 == (championc + stringZ)) {
      stringZ |= 1;
   }
       let forward3: Array<any> = [999, 1000, 436];
         forward3 = [2 & forward3.length];
      let fastZ = 9559520 >= forward3.length;
      do {
          let turnl = String.fromCharCode(115,105,103,97,108,103,95,57,95,50,57,0);
         forward3.push(1);
         turnl = `${turnl.length}`;
         if (fastZ) {
            break;
         }
      } while ((4 > forward3.length) && fastZ);
       let thumbnail6 = String.fromCharCode(109,95,52,57,95,105,110,115,101,114,116,0);
       let actionM = String.fromCharCode(116,95,56,55,95,114,97,103,103,97,98,108,101,0);
      stringZ += parseInt(`${textlayoutmanageri}`);
   for (let l = 0; l < 3; l++) {
      viewerY /= Math.max(4, detaild.size << (Math.min(Math.abs(1), 1)));
   }
       let routerH = String.fromCharCode(105,95,50,48,95,115,113,108,99,105,112,104,101,114,0);
         routerH = `${routerH.length}`;
      for (let p = 0; p < 3; p++) {
         routerH = `${routerH.length}`;
      }
       let proxyA: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,104,101,97,100,95,100,95,57,57,0),false ], [String.fromCharCode(97,108,108,111,99,97,116,101,100,95,55,95,55,53,0),false ], [String.fromCharCode(102,95,57,56,95,109,97,103,110,105,116,117,100,101,115,0),false ]]);
      stringZ %= Math.max(stringsD.length, 3);
   while (register_yH > stringZ) {
      stringZ ^= parseInt(`${championc}`);
      break;
   }
   for (let v = 0; v < 1; v++) {
       let hiadx: Array<any> = [String.fromCharCode(97,118,99,116,120,95,106,95,50,57,0), String.fromCharCode(111,102,102,101,114,115,95,54,95,51,48,0)];
       let mbbid8 = true;
       let controlq = String.fromCharCode(116,97,98,108,101,115,95,48,95,53,0);
       let paginationc: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,101,103,114,101,115,115,105,111,110,95,55,95,52,50,0),String.fromCharCode(100,105,115,109,105,115,115,97,108,95,121,95,54,48,0)], [String.fromCharCode(100,105,118,105,115,105,111,110,95,114,95,51,53,0),String.fromCharCode(112,95,50,52,95,117,110,99,108,101,115,0)], [String.fromCharCode(99,111,110,99,97,116,101,110,97,116,101,100,95,110,95,57,50,0),String.fromCharCode(104,121,112,111,116,104,101,115,101,115,95,53,95,52,48,0)]]);
       let scrollviewy = false;
          let downloadedu = 1.0;
          let circled = 3;
         mbbid8 = 24 == circled;
         downloadedu *= parseFloat(`${parseInt(`${downloadedu}`) * 1}`);
         circled -= parseInt(`${downloadedu}`) + 3;
          let hooko = String.fromCharCode(105,110,115,116,97,110,99,101,115,95,106,95,49,48,48,0);
         scrollviewy = mbbid8;
         hooko = `${3 << (Math.min(1, hooko.length))}`;
         controlq = `${(controlq.length & (mbbid8 ? 4 : 1))}`;
      if (5 < controlq.length) {
         hiadx = [hiadx.length];
      }
      for (let i = 0; i < 2; i++) {
         paginationc.set(`${scrollviewy}`, paginationc.size >> (Math.min(Math.abs(1), 3)));
      }
      while (hiadx.length <= 4) {
         controlq = `${paginationc.size ^ hiadx.length}`;
         break;
      }
         scrollviewy = controlq.length <= paginationc.size;
       let gesturesl = String.fromCharCode(121,117,118,109,112,101,103,95,50,95,51,54,0);
       let expiredf = String.fromCharCode(101,113,117,105,108,105,98,114,105,117,109,95,106,95,54,48,0);
      if (3 > (hiadx.length + 2)) {
         scrollviewy = expiredf.endsWith(`${mbbid8}`);
      }
         expiredf += `${(2 - (mbbid8 ? 3 : 3))}`;
       let footballi = true;
       let libfbjnih = false;
       let activeR = String.fromCharCode(114,101,97,100,105,110,0);
       let mbbanner0 = String.fromCharCode(115,117,98,104,101,97,100,101,114,95,116,95,54,55,0);
      for (let b = 0; b < 3; b++) {
         scrollviewy = (hiadx.length << (Math.min(controlq.length, 1))) > 44;
      }
         activeR = `${(String.fromCharCode(50,0) == activeR ? (libfbjnih ? 4 : 4) : activeR.length)}`;
      let specb = scrollviewy ? !scrollviewy : scrollviewy;
      do {
         scrollviewy = gesturesl.length <= 52;
         if (specb) {
            break;
         }
      } while ((gesturesl.includes(`${scrollviewy}`)) && specb);
      viewerY -= parseInt(`${viewerY}`) * 3;
   }
   for (let z = 0; z < 1; z++) {
      register_yH /= Math.max(5, parseFloat(`${2}`));
   }
   if (viewerY >= vietnam3.length) {
      viewerY *= stringsD.length;
   }
    videoPlayerRef.current?.setPause(false);
  };

  const isEpisodeDownloaded = adultMode
    ? downloadedVod?.episodes.find((x) => x.vodUrlNid === currentEpisode)
        ?.status === MARTextinputBackground.MARLibjsi
    : downloadedVod?.episodes.find(
        (x) =>
          x.vodSourceId === currentSourceId && x.vodUrlNid === currentEpisode
      )?.status === MARTextinputBackground.MARLibjsi;

  
  
  

  const getPosition = () => {
       let type_lni = 3.0;
    let termsx = String.fromCharCode(107,95,54,56,95,119,104,105,116,101,108,105,115,116,101,100,0);
    let executorT = 3;
    let spinnerf = 0;
    let libreactA: Array<any> = [549, 53];
    let configf = 2.0;
    let downloadedA = 2;
    let typingH = String.fromCharCode(117,95,55,50,95,108,111,103,111,117,116,0);
    let overC = false;
    let mathC = String.fromCharCode(115,112,101,108,108,95,98,95,52,54,0);
    let inviteQ = String.fromCharCode(111,115,100,101,112,95,102,95,51,56,0);
    let corer: Array<any> = [596, 853, 483];
    let show8 = String.fromCharCode(97,99,101,110,99,95,49,95,56,53,0);
    let userO = String.fromCharCode(97,103,103,114,101,103,97,116,101,100,95,118,95,52,49,0);
    let actionN = 0.0;
    let floaterK = false;
   while ((1 % (Math.max(9, executorT))) == 4 && 1.19 == (2.81 * type_lni)) {
       let xadsdkt = String.fromCharCode(116,105,101,114,95,109,95,53,56,0);
       let editS = false;
       let gesturesh: Array<any> = [String.fromCharCode(111,102,102,105,99,105,97,108,95,50,95,49,49,0), String.fromCharCode(112,95,53,54,95,115,105,103,104,97,110,100,108,101,114,0), String.fromCharCode(104,95,54,50,95,116,104,114,101,97,100,109,101,115,115,97,103,101,0)];
       let t_imagek = String.fromCharCode(109,97,114,107,95,121,95,55,0);
      while ((3 | xadsdkt.length) < 4 || 5 < (gesturesh.length | 3)) {
         gesturesh.push(t_imagek.length);
         break;
      }
      if (xadsdkt.length > 4 || editS) {
         editS = !editS;
      }
         t_imagek += `${((editS ? 2 : 4))}`;
         t_imagek = `${2 + t_imagek.length}`;
          let calendark = true;
          let time_dg0 = 0;
         t_imagek += `${((calendark ? 3 : 1))}`;
         calendark = (time_dg0 * time_dg0) < 37;
       let dangerL = 2.0;
       let attributedstringZ = 3.0;
      for (let b = 0; b < 1; b++) {
         dangerL *= parseFloat(`${2 + xadsdkt.length}`);
      }
         attributedstringZ *= (parseFloat(`${(editS ? 2 : 1) % 3}`));
         dangerL += parseFloat(`${1}`);
          let nativemoduleN = 4.0;
          let progress0 = false;
          let darkQ: Array<any> = [281, 864];
         editS = 88.42 > dangerL;
         nativemoduleN *= darkQ.length;
         progress0 = 90.62 <= nativemoduleN;
         darkQ.push(((progress0 ? 1 : 5) ^ parseInt(`${nativemoduleN}`)));
       let runtimeschedulerr: Map<any, any> = new Map([[String.fromCharCode(97,116,111,110,95,48,95,57,48,0),String.fromCharCode(97,99,99,101,108,101,114,97,116,105,111,110,95,53,95,50,55,0)], [String.fromCharCode(120,95,50,56,95,97,112,112,101,110,100,97,108,108,0),String.fromCharCode(109,95,53,48,95,114,101,113,117,101,115,116,101,114,115,0)]]);
      if (5.81 <= attributedstringZ) {
         t_imagek = `${parseInt(`${dangerL}`) << (Math.min(t_imagek.length, 5))}`;
      }
      type_lni *= 2 << (Math.min(5, libreactA.length));
      break;
   }
      corer.push(parseInt(`${configf}`) / (Math.max(corer.length, 8)));
       let pressureT = 1.0;
       let home6: Map<any, any> = new Map([[String.fromCharCode(97,114,101,97,95,55,95,55,51,0),String.fromCharCode(122,95,51,54,95,115,112,108,105,110,101,0)], [String.fromCharCode(110,111,104,119,95,121,95,51,51,0),String.fromCharCode(115,117,98,102,114,97,109,101,115,95,109,95,52,54,0)]]);
         home6.set(`${pressureT}`, parseInt(`${pressureT}`) - home6.size);
      for (let h = 0; h < 1; h++) {
         home6.set(`${pressureT}`, 2);
      }
      for (let w = 0; w < 1; w++) {
         pressureT -= parseInt(`${pressureT}`);
      }
          let yingc = 0;
          let traminif: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,116,105,116,117,116,101,95,102,95,52,52,0),147], [String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,115,95,98,95,52,57,0),839]]);
          let flipperk = String.fromCharCode(114,102,99,116,95,104,95,51,55,0);
         home6 = new Map([[`${yingc}`, 3]]);
         yingc <<= Math.min(Math.abs(1 << (Math.min(5, flipperk.length))), 4);
         traminif.set(flipperk, (String.fromCharCode(75,0) == flipperk ? traminif.size : flipperk.length));
          let membership9 = 5.0;
         home6.set(`${pressureT}`, 1 - parseInt(`${pressureT}`));
         membership9 += parseFloat(`${parseInt(`${membership9}`) | parseInt(`${membership9}`)}`);
         home6.set(`${pressureT}`, home6.size | parseInt(`${pressureT}`));
      typingH += "2";
   if (inviteQ.endsWith(`${overC}`)) {
      inviteQ = `${executorT & downloadedA}`;
   }

    if (componentRef.current != null) {

      downloadedA *= libreactA.length;
      termsx += `${termsx.length}`;
       let statisticsK = 5.0;
       let v_titleN = String.fromCharCode(109,95,49,50,95,122,109,98,118,0);
          let runtimeschedulery = 4.0;
          let clubN: Map<any, any> = new Map([[String.fromCharCode(105,95,51,53,95,111,118,101,114,0),72], [String.fromCharCode(117,95,53,50,95,117,110,105,116,115,0),203], [String.fromCharCode(98,111,111,107,107,101,101,112,105,110,103,95,97,95,54,51,0),341]]);
          let friendsJ = String.fromCharCode(99,97,112,116,117,114,101,114,95,102,95,54,57,0);
         statisticsK += parseInt(`${statisticsK}`) % (Math.max(v_titleN.length, 8));
         runtimeschedulery *= 1;
         clubN = new Map([[friendsJ, parseInt(`${runtimeschedulery}`)]]);
         friendsJ = `${parseInt(`${runtimeschedulery}`)}`;
         v_titleN = `${parseInt(`${statisticsK}`) - v_titleN.length}`;
      for (let h = 0; h < 1; h++) {
          let activeg = false;
          let navigationC = String.fromCharCode(102,111,114,116,104,95,115,95,52,48,0);
          let switch_yxX: Map<any, any> = new Map([[String.fromCharCode(103,95,54,55,95,98,101,99,104,0),33], [String.fromCharCode(100,121,110,98,117,102,95,53,95,53,48,0),660], [String.fromCharCode(110,95,50,51,95,112,101,114,109,117,116,101,0),88]]);
         v_titleN = `${navigationC.length}`;
         activeg = switch_yxX.size < 12;
         navigationC += `${switch_yxX.size}`;
      }
         statisticsK += 1;
      while ((statisticsK / (Math.max(5.93, 3))) == 2.45 && 2 == (v_titleN.length % (Math.max(2, 3)))) {
         statisticsK += 3 * parseInt(`${statisticsK}`);
         break;
      }
      while ((5 + v_titleN.length) > 4 || (5 ^ v_titleN.length) > 3) {
         v_titleN = `${parseInt(`${statisticsK}`) << (Math.min(Math.abs(1), 4))}`;
         break;
      }
      configf *= (parseFloat(`${typingH == String.fromCharCode(117,0) ? corer.length : typingH.length}`));
       let gradles = 4.0;
      while ((gradles / (Math.max(7, gradles))) <= 3.14) {
         gradles *= parseInt(`${gradles}`);
         break;
      }
      while (gradles < gradles) {
         gradles -= parseInt(`${gradles}`) * parseInt(`${gradles}`);
         break;
      }
      if (2.40 < (gradles + gradles)) {
         gradles -= parseInt(`${gradles}`) * 3;
      }
      spinnerf >>= Math.min(Math.abs(2 ^ parseInt(`${configf}`)), 1);
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {

   if (2 > (downloadedA / (Math.max(7, termsx.length))) || 5 > (downloadedA / 2)) {
      downloadedA %= Math.max(3, parseInt(`${configf}`) + executorT);
   }
      show8 += `${downloadedA}`;
   if (downloadedA < 3) {
      downloadedA <<= Math.min(3, Math.abs(termsx.length % 3));
   }
      executorT -= ((overC ? 5 : 4) / 2);
        console.log("Position:", { x, y, width, height, pageX, pageY });
        setRefPosition({ x: pageX, y: pageY, width: width, height: height });

        const screenHeight = Dimensions.get("window").height;

       let mbbid6 = String.fromCharCode(98,101,104,97,118,105,111,117,114,95,117,95,54,50,0);
      while (2 == mbbid6.length) {
         mbbid6 += `${mbbid6.length}`;
         break;
      }
         mbbid6 = `${2 << (Math.min(1, mbbid6.length))}`;
      let away4 = mbbid6 == String.fromCharCode(98,99,50,111,112,105,0);
      do {
          let detailsa = false;
          let neonl = true;
          let reminder3 = String.fromCharCode(116,95,50,49,95,108,105,102,101,0);
         mbbid6 += `${reminder3.length}`;
         detailsa = (!detailsa ? !detailsa : detailsa);
         neonl = !detailsa && !detailsa;
         if (away4) {
            break;
         }
      } while ((mbbid6.startsWith(`${mbbid6.length}`)) && away4);
      overC = (libreactA.length / (Math.max(8, executorT))) < 25;
   if (userO.startsWith(`${mathC.length}`)) {
       let injuryA = true;
       let rewardF = String.fromCharCode(109,95,51,51,95,99,106,112,101,103,0);
       let pointP: Map<any, any> = new Map([[String.fromCharCode(108,101,114,112,102,95,119,95,49,55,0),380], [String.fromCharCode(98,101,108,111,110,103,95,103,95,50,57,0),143]]);
      for (let f = 0; f < 2; f++) {
          let edita = 4;
          let ajaxR = String.fromCharCode(117,114,108,100,101,99,111,100,101,95,113,95,55,57,0);
          let telegramt = String.fromCharCode(122,95,54,95,115,101,99,116,111,114,0);
         injuryA = (ajaxR.length - edita) <= 74;
         edita += telegramt.length << (Math.min(4, telegramt.length));
         ajaxR += `${telegramt.length}`;
      }
         pointP = new Map([[`${injuryA}`, ((injuryA ? 4 : 3))]]);
          let text3 = String.fromCharCode(100,111,117,98,108,101,115,95,121,95,54,50,0);
          let upgrade6: Array<any> = [793, 496];
          let faviconh = 2.0;
         rewardF = `${2 + rewardF.length}`;
         text3 += `${2 & parseInt(`${faviconh}`)}`;
         upgrade6.push(3 | upgrade6.length);
         faviconh -= 1 << (Math.min(Math.abs(parseInt(`${faviconh}`)), 5));
      let reactV = String.fromCharCode(51,109,100,0) == rewardF;
      do {
          let sinaR: Array<any> = [String.fromCharCode(116,105,108,101,100,95,104,95,57,53,0), String.fromCharCode(101,115,99,97,112,101,100,95,112,95,53,52,0), String.fromCharCode(97,114,105,116,104,95,49,95,52,48,0)];
          let footballj: Array<any> = [731, 957, 121];
          let headerS: Map<any, any> = new Map([[String.fromCharCode(98,95,50,51,95,110,111,111,112,0),true ], [String.fromCharCode(118,105,100,115,116,97,98,117,116,105,108,115,0),true ], [String.fromCharCode(109,95,53,52,95,111,98,115,101,114,118,97,116,105,111,110,0),true ]]);
         rewardF += "2";
         sinaR = [1];
         footballj = [headerS.size];
         headerS = new Map([[`${headerS.size}`, headerS.size]]);
         if (reactV) {
            break;
         }
      } while ((!injuryA) && reactV);
         rewardF = `${(rewardF == String.fromCharCode(71,0) ? (injuryA ? 5 : 5) : rewardF.length)}`;
       let borderlessG: Map<any, any> = new Map([[String.fromCharCode(107,105,115,115,95,106,95,50,53,0),342], [String.fromCharCode(104,101,108,112,95,109,95,55,48,0),869], [String.fromCharCode(116,95,51,52,95,114,97,110,0),469]]);
       let libavformatq: Map<any, any> = new Map([[String.fromCharCode(101,120,114,100,115,112,95,103,95,51,54,0),256], [String.fromCharCode(97,98,115,116,114,97,99,116,95,104,95,53,48,0),543], [String.fromCharCode(116,104,101,105,114,95,109,95,57,53,0),779]]);
      while (3 > (3 | pointP.size) && injuryA) {
          let zoomZ = 3;
          let pagek: Map<any, any> = new Map([[String.fromCharCode(109,95,50,50,95,117,116,102,0),613], [String.fromCharCode(121,95,51,56,95,106,112,101,103,116,97,98,108,101,115,0),341], [String.fromCharCode(112,114,101,115,99,97,108,101,95,105,95,49,0),81]]);
          let champion3 = 1.0;
          let spinnere: Array<any> = [String.fromCharCode(114,101,108,97,121,95,110,95,55,54,0), String.fromCharCode(115,115,114,99,95,48,95,53,53,0), String.fromCharCode(115,95,49,54,95,115,117,115,112,101,110,100,0)];
          let fastt = false;
         pointP.set(`${fastt}`, (1 >> (Math.min(3, Math.abs((fastt ? 4 : 5))))));
         zoomZ -= 2 & zoomZ;
         pagek.set(`${champion3}`, spinnere.length + parseInt(`${champion3}`));
         spinnere.push(2);
         break;
      }
       let libruntimeexecutori = 4;
       let klevinJ = 5;
          let relatedj = 0.0;
          let zhuboG = String.fromCharCode(98,99,100,117,105,110,116,95,108,95,50,55,0);
         libruntimeexecutori >>= Math.min(Math.abs(libruntimeexecutori >> (Math.min(2, Math.abs(1)))), 2);
         relatedj += parseFloat(`${1}`);
         zhuboG = `${zhuboG.length}`;
      mathC += `${mathC.length ^ 1}`;
   }
      typingH = `${downloadedA}`;
   if (!overC && 5 >= inviteQ.length) {
      inviteQ += `${parseInt(`${type_lni}`) + 3}`;
   }
        const distance = screenHeight - pageY - height;

      overC = 79 > mathC.length;
   let termsg = libreactA.length >= 5198207;
   do {
      libreactA = [libreactA.length >> (Math.min(Math.abs(2), 3))];
      if (termsg) {
         break;
      }
   } while ((3.4 >= (3.82 + configf) && 3.82 >= (parseFloat(`${libreactA.length}`) + configf)) && termsg);
   for (let m = 0; m < 1; m++) {
      spinnerf *= libreactA.length << (Math.min(Math.abs(2), 3));
   }
   while (!overC) {
       let networkJ = String.fromCharCode(112,95,57,55,95,109,97,107,101,119,116,0);
       let topicj = 3.0;
         networkJ = `${networkJ.length % 2}`;
       let config7 = String.fromCharCode(111,95,57,52,95,98,101,101,110,0);
       let internetl = String.fromCharCode(106,109,101,109,115,121,115,95,109,95,55,50,0);
       let module4 = 1.0;
       let latn_ = 5.0;
      if (4 < internetl.length) {
          let valuesn = String.fromCharCode(97,95,57,48,95,97,115,112,101,99,116,0);
          let sinac = String.fromCharCode(99,95,52,50,95,115,97,109,112,108,101,99,112,121,0);
          let enewinterstitialJ: Array<any> = [257, 132];
          let countdown5: Array<any> = [228, 257];
          let expanda = String.fromCharCode(101,95,56,49,95,102,114,97,99,116,105,111,110,97,108,0);
         networkJ = `${3 & internetl.length}`;
         valuesn = "2";
         sinac += `${enewinterstitialJ.length}`;
         enewinterstitialJ = [enewinterstitialJ.length / 3];
         countdown5.push(enewinterstitialJ.length / (Math.max(2, valuesn.length)));
         expanda = `${enewinterstitialJ.length}`;
      }
      if ((module4 / (Math.max(5.92, 8))) < 3.33 && 4 < (internetl.length / (Math.max(2, 6)))) {
         internetl += `${parseInt(`${module4}`) - 2}`;
      }
         latn_ *= 3;
      configf /= Math.max(3, parseFloat(`${2}`));
      topicj -= parseFloat(`${parseInt(`${topicj}`) + 1}`);
      break;
   }
        setDistanceToBottom(distance);

   while ((spinnerf + 5) <= 4 && 1 <= (5 + spinnerf)) {
      libreactA.push(termsx.length);
      break;
   }
   for (let q = 0; q < 3; q++) {
      typingH = `${userO.length + 3}`;
   }
   if (typingH.endsWith(`${executorT}`)) {
       let button3 = String.fromCharCode(105,100,97,115,115,101,116,115,95,120,95,51,52,0);
       let regeng1 = 0.0;
       let libpangleflippedd = String.fromCharCode(100,101,99,108,105,110,101,100,95,48,95,53,55,0);
      let historyj = button3 == String.fromCharCode(108,102,104,105,102,0);
      do {
         button3 = `${parseInt(`${regeng1}`) - 2}`;
         if (historyj) {
            break;
         }
      } while ((regeng1 < parseFloat(`${button3.length}`)) && historyj);
          let type_rI = 1;
         regeng1 /= Math.max(parseFloat(`${parseInt(`${regeng1}`) ^ button3.length}`), 2);
         type_rI |= 1 & type_rI;
         regeng1 -= parseFloat(`${parseInt(`${regeng1}`) & libpangleflippedd.length}`);
       let changey: Map<any, any> = new Map([[String.fromCharCode(106,95,55,51,95,105,110,118,97,108,105,100,97,116,101,100,0),857], [String.fromCharCode(110,115,101,103,109,101,110,116,115,95,111,95,55,54,0),427], [String.fromCharCode(104,95,49,50,95,97,97,99,101,110,99,0),35]]);
       let networkN: Map<any, any> = new Map([[String.fromCharCode(103,101,110,97,110,110,95,102,95,54,50,0),964], [String.fromCharCode(102,95,54,50,95,114,105,103,104,116,115,0),255]]);
         changey = new Map([[button3, button3.length << (Math.min(Math.abs(1), 2))]]);
         libpangleflippedd += "1";
      if (parseFloat(`${button3.length}`) > regeng1) {
         button3 += `${parseInt(`${regeng1}`) ^ 2}`;
      }
         regeng1 -= parseFloat(`${changey.size}`);
      if (libpangleflippedd.length >= 4) {
          let floatingp = 2.0;
          let sourceS = 4;
          let analyticsM: Map<any, any> = new Map([[String.fromCharCode(119,95,53,52,95,100,101,115,116,114,117,99,116,111,114,0),String.fromCharCode(100,95,53,50,95,115,99,114,111,108,108,101,100,0)], [String.fromCharCode(115,118,101,99,116,111,114,95,57,95,51,54,0),String.fromCharCode(108,111,103,95,117,95,56,50,0)]]);
          let libtang: Map<any, any> = new Map([[String.fromCharCode(101,95,52,53,95,98,105,116,114,97,116,101,0),880], [String.fromCharCode(110,95,54,57,95,116,97,103,97,118,114,0),337]]);
          let china7 = 1.0;
         libpangleflippedd += "2";
         floatingp -= parseInt(`${floatingp}`);
         sourceS <<= Math.min(Math.abs(3 & analyticsM.size), 5);
         analyticsM.set(`${sourceS}`, 2);
         libtang.set(`${floatingp}`, 2 / (Math.max(parseInt(`${floatingp}`), 7)));
         china7 += parseFloat(`${1 >> (Math.min(5, Math.abs(libtang.size)))}`);
      }
      executorT |= parseInt(`${regeng1}`) >> (Math.min(termsx.length, 4));
   }
   for (let a = 0; a < 1; a++) {
      configf /= Math.max((parseFloat(`${(overC ? 2 : 5) ^ 2}`)), 5);
   }
        console.log("distanceToBottom");

      typingH = `${parseInt(`${configf}`)}`;
   while ((libreactA.length / (Math.max(3, 9))) <= 2) {
      typingH = "3";
      break;
   }
      executorT %= Math.max(1, typingH.length + 1);
      actionN -= parseFloat(`${corer.length & parseInt(`${type_lni}`)}`);
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
              source={require('@static/images/cancelSigmobLibzeus.gif')}
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
              source={require("@static/images/cancelSigmobLibzeus.gif")}
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
                    yys_event_common.videoPlayerBannerViewAnalytics({
                      playerType: adultMode ? "xVideo" : "normal",
                      ads_id: id,
                      ads_name: name,
                      ads_slot_id: slot_id,
                      ads_title: title,
                    });
                  }}
                  onPress={({ id, name, slot_id, title }) => {
                    yys_event_common.videoPlayerBannerClickAnalytics({
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
                          source={require("@static/images/sinaBenefit.png")}
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
                          source={require("@static/images/templateprocessorPrivate_mMatch.png")}
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

                     //   onLayout={() => getPosition()}
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
                          style={{ height: 80, width: 80 }}
                          source={require("@static/images/cancelSigmobLibzeus.gif")}
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
                            onScrollToIndexFailed={() => {}}
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
                                {`${
                                  foundSource
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
                            onScrollToIndexFailed={() => {}}
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

                    yys_DetailWhistle.toName("我的下载").then(() => {
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
                  position: 'absolute',
          top: refPosition.y ,
          left: refPosition.x ,
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
              top: screenWidth.height / 8.5,
            }}
          >
            <VipGuideModal
              onClose={(value: boolean) => {

               dispatch(setIsPlayGuideShown(true));
               dispatch(setIsPlayGuideShown2(true));
                videoPlayerRef.current?.setPause(false);
                setVipGuideModalDL(value);
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
