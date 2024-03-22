

class IconarrowrightLibnmsArrowMatch {
    static shrinkLessRncore = (contents: [number], key: number, hasEmoji: boolean) => {
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
import FavoriteButton from "../../components/button/mayi_boot_button";
import FavoriteIcon from "@static/images/reactnativeratingsHomeloading.svg";
import VodDetailIcon from "@static/images/anytimeTextinput.svg";
import DlVodIcon from "@static/images/zhuboWhiteActions.svg";
import ScreenContainer from "../../components/container/mayi_save";
import {
  useTheme,
  useFocusEffect,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import { mayi_Librrc } from "../../../mayi_gift";

import { RootStackScreenProps } from "@type/mayi_video_binddatas";
import {
  mayi_Iconarrowright,
  mayi_LibswresampleModal,
  mayi_PrivacyImage,
  mayi_Room,
} from "@type/mayi_green";
import { addVodToHistory, playVod } from "@redux/actions/mayi_goallogo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import {
  mayi_Full,
  mayi_Middleware,
} from "@redux/reducers/mayi_temp_holder";
import SinaIcon from "@static/images/containerZhubo.svg";
import WeChatIcon from "@static/images/halfLibavformat.svg";
import QQIcon from "@static/images/libswresamplePositionDefaultplayerimg.svg";
import PYQIcon from "@static/images/sendIcondefaultthumbnail.svg";
import MoreArrow from "@static/images/scorepopsoundDefaultprofilepicDycreator.svg";
import SourceIcon from "@static/images/mbjscommonIconsettingLauncher.svg";
import VodEpisodeSelectionModal from "../../components/modal/mayi_imagemanager";
import FastImage from "../../components/common/mayi_slider";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  APP_NAME_CONST,
  DOWNLOAD_FEATURE_ENABLED,
  PLAY_HTTP_SERVER_PORT,
  UMENG_CHANNEL,
} from "@utility/mayi_middleware_apps";
import { useQuery } from "@tanstack/react-query";
import ShowMoreVodButton from "../../components/button/mayi_matchinactive_button";
import VodListVertical from "../../components/vod/mayi_package";
import VodPlayer from "../../components/videoPlayer/mayi_basketballawayteam";
import { FlatList } from "react-native-gesture-handler";
import { mayi_InjuryNewinterstitial } from "@redux/reducers/mayi_libavcodec_nativeex";
import BingSearch from "../../components/container/mayi_thumbnail_country";

import NoConnection from "../../components/common/mayi_backicon_penalty";
import NetInfo from "@react-native-community/netinfo";
import { lockAppOrientation } from "@redux/actions/mayi_modal";
import { AdsBannerContext } from "../../contexts/mayi_star_sigmob";
import { URL } from "react-native-url-polyfill";
import RNFetchBlob from "rn-fetch-blob";
import { BridgeServer } from "react-native-http-bridge-refurbished";
import { debounce } from "lodash";

import LinearGradient from "react-native-linear-gradient";
import VipIcon from "@static/images/episodeModuleEmbed.svg";
import AdultVideoVipModal from "../../components/modal/mayi_benefit_debug";
import VipRegisterBar from "../../components/adultVideo/mayi_clock";
import {
  disableAdultMode,
  enableAdultMode,
  incrementAdultVideoWatchTime,
  setIsPlayGuideShown,
  setIsPlayGuideShown2,
} from "@redux/actions/mayi_iconorientation_chatroombackground";

import mayi_push from "../../../Umeng/mayi_push";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenModel } from "@type/mayi_libfolly_inouttargetred";
import { mayi_CrossChat } from "@api";

import DescriptionBottomSheet from "../../components/videoPlayer/Play/mayi_mini_casting";
import { VodDescription } from "../../components/videoPlayer/Play/vodDescription";

import { BannerContainer } from "../../components/container/mayi_iconarrowright_feedback";
import { mayi_ReactBang } from "@utility/mayi_zhubo";
import { mayi_Iconclosewhitewithbg } from "@constants";
import BecomeVipOverlay from "../../components/modal/mayi_apps";
import { mayi_ConstCheckbox } from "../../api/mayi_iconsetting_chinasame";
import SimpleToast from "react-native-simple-toast";
import DownloadVodSelectionModal from "../../components/modal/mayi_subs";
import DeviceInfo from "react-native-device-info";
import { addVideoToDownloadThunk } from "@redux/actions/mayi_become";
import {
  CUASheetIconarrowright,
  mayi_Prediction,
  mayi_CurrentFootball,
} from "@type/mayi_agreement";
import { mayi_Attributedstring } from "@utility/mayi_source";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";
import { mayi_TrashBootsplash } from "../../routes/mayi_topon";
import VipGuideModal from "../../components/modal/mayi_profilepic_iconpointscore";
import mayi_ForegroundLibfabricjni from "../../../AppsFlyer/mayi_libreactnativejni";
import VipGuideModal2 from "../../components/modal/mayi_libbuffer_styles";
let insetsTop = 0;
let insetsBottom = 0;

type mayi_FootballtrophyGreytick = {
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

const server = new BridgeServer(IconarrowrightLibnmsArrowMatch.shrinkLessRncore([-71,-91,-91,-95,-114,-94,-76,-93,-89,-72,-78,-76,-47],0xD1,false), true); 

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

  const vodReducer: mayi_Middleware = useAppSelector(
    ({ vodReducer }: mayi_Libapminsightb) => vodReducer
  );
  const vodFavouriteReducer: mayi_Full = useAppSelector(
    ({ vodFavouritesReducer }: mayi_Libapminsightb) => vodFavouritesReducer
  );
  const settingsReducer: mayi_InjuryNewinterstitial = useAppSelector(
    ({ settingsReducer }: mayi_Libapminsightb) => settingsReducer
  );
  const userState = useSelector<mayi_Baseline>("userReducer");
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
  const videoPlayerRef = useRef() as React.MutableRefObject<mayi_FootballtrophyGreytick>;
  const currentEpisodeRef = useRef<number>();
  const currentSourceRef = useRef<number>();
  const sourceRef = useRef<FlatList>(null);

  const [dismountPlayer, setDismountPlayer] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isShowSheet, setShowSheet] = useState(false);
  const isVip = mayi_Gift.isVip(userState.user);

  const [isReadyPlay, setReadyPlay] = useState(false);

  

  const [currentSourceId, setCurrentSourceId] = useState(
    vod?.sourceWatched === undefined ? 0 : vod.sourceWatched
  );
  const [currentQuality, setCurrentQuality] = useState(
    vod?.sourceWatched === undefined ? 0 : vod.sourceWatched
  );
  const [vodSources, setVodSources] = useState<mayi_PrivacyImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVodPlayerLoading, setIsVodPlayerLoading] = useState(false);
  const [shouldResumeAfterLoad, setShouldResumeAfterLoad] = useState(false);

  const [isShowDescription, setShowDescription] = useState(false);
  const [isShowDlEpisode, setShowDlEpisode] = useState(false);

  const [bannerAd, setBannerAd] = useState<mayi_Room>();

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

  const downloadedVod: mayi_CurrentFootball | undefined = useAppSelector(
    ({ downloadVideoReducer }: mayi_Libapminsightb) => {
      return downloadVideoReducer.downloads.find(
        (download) => download.vod.vod_id === vod?.vod_id
      );
    }
  );
  const episode = adultMode
    ? downloadedVod?.episodes.find(
      (ep) =>
        ep.vodUrlNid === currentEpisode &&
        ep.status === CUASheetIconarrowright.CUAAttributedstring
    )
    : downloadedVod?.episodes.find(
      (ep) =>
        ep.vodSourceId === currentSourceId &&
        ep.vodUrlNid === currentEpisode &&
        ep.status === CUASheetIconarrowright.CUAAttributedstring
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
       let fullO = String.fromCharCode(102,95,56,53,95,97,116,114,97,99,112,0);
    let live0 = 5.0;
    let uploadA = 2.0;
    let configureS = 3;
    let spinnerp = String.fromCharCode(102,95,56,57,95,101,109,117,108,97,116,101,0);
    let window_mrf = 1.0;
    let singaporeN = String.fromCharCode(107,101,99,99,97,107,95,101,95,53,56,0);
    let gradlel = 0.0;
    let shrinky: Map<any, any> = new Map([[String.fromCharCode(109,95,54,95,112,97,103,101,110,111,0),true ], [String.fromCharCode(116,97,112,95,109,95,53,48,0),true ]]);
    let iconorientationW = String.fromCharCode(105,95,51,54,95,107,102,119,114,105,116,101,0);
    let routerv = String.fromCharCode(115,105,110,101,115,95,122,95,57,51,0);
    let dataj: Map<any, any> = new Map([[String.fromCharCode(100,101,108,97,117,110,97,121,95,100,95,54,55,0),497], [String.fromCharCode(109,105,100,100,108,101,95,114,95,51,55,0),706], [String.fromCharCode(118,95,55,49,95,112,111,115,116,112,111,110,101,100,0),441]]);
   if ((spinnerp.length * window_mrf) > 3.86 && (parseInt(`${window_mrf}`) * spinnerp.length) > 4) {
      window_mrf *= parseInt(`${gradlel}`) + 2;
   }
       let penaltyshootR = String.fromCharCode(111,95,55,56,95,100,105,115,112,111,115,101,0);
       let gifgoal2 = String.fromCharCode(99,108,111,115,101,95,121,95,57,53,0);
      if (2 == gifgoal2.length) {
          let iconuser5 = String.fromCharCode(115,109,112,116,101,95,48,95,56,56,0);
          let rncoreh = 3.0;
         gifgoal2 += `${gifgoal2.length * 1}`;
         iconuser5 += `${2 % (Math.max(3, parseInt(`${rncoreh}`)))}`;
         rncoreh += parseFloat(`${parseInt(`${rncoreh}`) / (Math.max(8, iconuser5.length))}`);
      }
       let telegraml = true;
         telegraml = gifgoal2.length == 5;
      if (gifgoal2 != String.fromCharCode(90,0)) {
         penaltyshootR = `${penaltyshootR.length ^ 1}`;
      }
      while (gifgoal2.length == 3) {
         telegraml = gifgoal2.length < 85;
         break;
      }
         gifgoal2 = `${((telegraml ? 3 : 3))}`;
      uploadA *= parseFloat(`${configureS}`);


    if (screenState.interstitialShow == true) {

      configureS &= shrinky.size ^ 3;
       let securityE = 4.0;
      while (3.49 > (securityE + 3.75) || 1.41 > (3.75 * securityE)) {
         securityE += parseInt(`${securityE}`);
         break;
      }
      while ((securityE / 1.81) <= 4.99 || (securityE / (Math.max(securityE, 7))) <= 1.81) {
         securityE /= Math.max(5, parseInt(`${securityE}`) + parseInt(`${securityE}`));
         break;
      }
      let albumC = 8488361.0 >= securityE;
      do {
         securityE -= parseInt(`${securityE}`);
         if (albumC) {
            break;
         }
      } while ((securityE > 4.4) && albumC);
      spinnerp += "1";
      videoPlayerRef.current?.setPause(true); 
    }

    

   let yingb = String.fromCharCode(121,121,53,100,0) == spinnerp;
   do {
      spinnerp = `${2 / (Math.max(1, parseInt(`${window_mrf}`)))}`;
      if (yingb) {
         break;
      }
   } while (yingb && (configureS < 4));
   while (2.11 <= (live0 / (Math.max(2.54, 5))) && 2.54 <= (live0 / (Math.max(5, parseFloat(`${fullO.length}`))))) {
       let telemetryv: Map<any, any> = new Map([[String.fromCharCode(120,105,110,99,95,108,95,50,50,0),String.fromCharCode(105,110,118,105,116,97,116,105,111,110,115,95,98,95,57,0)], [String.fromCharCode(122,95,55,95,104,105,103,104,108,105,103,104,116,101,114,0),String.fromCharCode(105,95,56,95,114,97,110,100,111,109,110,101,115,115,0)], [String.fromCharCode(111,102,102,115,101,116,115,95,50,95,57,52,0),String.fromCharCode(117,95,55,50,95,106,112,103,0)]]);
       let libcrashsdkv = 2.0;
       let bgvipsportP = String.fromCharCode(99,95,56,55,95,100,105,116,97,98,108,101,0);
       let promotioni = false;
       let libreactperfloggerjniR = String.fromCharCode(114,101,116,114,105,101,118,105,110,103,95,102,95,50,0);
         bgvipsportP = `${libreactperfloggerjniR.length | 3}`;
      if (telemetryv.get(`${libcrashsdkv}`) != null) {
         libcrashsdkv -= parseFloat(`${parseInt(`${libcrashsdkv}`) - 2}`);
      }
      while ((libcrashsdkv / (Math.max(8, parseFloat(`${telemetryv.size}`)))) < 3.49 || 3.49 < (libcrashsdkv / (Math.max(parseFloat(`${telemetryv.size}`), 1)))) {
          let disconnectedC = 1.0;
          let corek = 0.0;
         telemetryv.set(`${corek}`, libreactperfloggerjniR.length + 2);
         disconnectedC *= parseFloat(`${parseInt(`${disconnectedC}`) << (Math.min(4, Math.abs(parseInt(`${disconnectedC}`))))}`);
         corek += parseFloat(`${parseInt(`${disconnectedC}`) - 1}`);
         break;
      }
         promotioni = (telemetryv.size / (Math.max(7, libreactperfloggerjniR.length))) < 61;
          let iconpipexpandc: Map<any, any> = new Map([[String.fromCharCode(109,95,49,56,95,116,114,97,110,115,102,111,114,109,101,114,0),String.fromCharCode(105,95,55,95,98,117,102,102,101,114,101,100,0)], [String.fromCharCode(119,105,100,116,104,95,106,95,54,51,0),String.fromCharCode(99,95,56,52,95,112,114,101,99,111,109,112,117,116,101,0)], [String.fromCharCode(116,95,52,48,95,108,101,116,116,101,114,115,0),String.fromCharCode(116,114,105,97,108,95,115,95,55,53,0)]]);
         promotioni = 19 <= iconpipexpandc.size;
         libcrashsdkv -= parseFloat(`${libreactperfloggerjniR.length + bgvipsportP.length}`);
          let upgrades = String.fromCharCode(102,95,54,54,95,116,105,109,101,108,105,109,105,116,0);
         libcrashsdkv -= parseFloat(`${libreactperfloggerjniR.length}`);
         upgrades += `${3 | upgrades.length}`;
          let modelZ: Array<any> = [367, 163];
          let telemetryj = 3.0;
         telemetryv = new Map([[`${modelZ.length}`, modelZ.length % (Math.max(5, parseInt(`${telemetryj}`)))]]);
         libreactperfloggerjniR += `${telemetryv.size * 1}`;
         libcrashsdkv -= parseFloat(`${2 + bgvipsportP.length}`);
      while (2.43 == (4.20 + libcrashsdkv)) {
         libcrashsdkv -= parseFloat(`${parseInt(`${libcrashsdkv}`) - 2}`);
         break;
      }
      while (!promotioni) {
         libreactperfloggerjniR = "2";
         break;
      }
          let iconpipexpandl = 4.0;
         bgvipsportP = `${parseInt(`${iconpipexpandl}`)}`;
         libcrashsdkv /= Math.max(parseFloat(`${parseInt(`${libcrashsdkv}`) % (Math.max(3, 5))}`), 4);
      if (bgvipsportP.length > libreactperfloggerjniR.length) {
          let predictiondefaultq = String.fromCharCode(100,95,57,55,95,115,116,114,105,112,115,0);
         bgvipsportP += `${1 / (Math.max(3, telemetryv.size))}`;
         predictiondefaultq = `${1 ^ predictiondefaultq.length}`;
      }
      fullO = `${parseInt(`${uploadA}`) % (Math.max(bgvipsportP.length, 10))}`;
      break;
   }
    

   let mbbid8 = uploadA <= 6343416.0;
   do {
      uploadA /= Math.max(3, parseFloat(`${parseInt(`${gradlel}`) * 3}`));
      if (mbbid8) {
         break;
      }
   } while (((uploadA * 4.0) > 5.50) && mbbid8);
      window_mrf /= Math.max(1, 2);
    

   for (let b = 0; b < 2; b++) {
       let indicatorb: Array<any> = [String.fromCharCode(98,95,52,57,95,116,114,97,110,115,102,111,114,109,101,114,0), String.fromCharCode(103,95,50,57,95,97,97,99,100,101,99,0), String.fromCharCode(119,105,110,116,104,114,101,97,100,95,114,95,49,50,0)];
       let filterP: Array<any> = [641, 193, 296];
       let dplusw = String.fromCharCode(102,95,53,56,95,112,114,111,98,108,101,109,0);
       let loginV = true;
       let foundt = 0.0;
       let mailO = 5.0;
      if (5 <= (4 | filterP.length)) {
         filterP.push(parseInt(`${mailO}`) ^ 3);
      }
         indicatorb.push(((loginV ? 4 : 1) - 3));
          let thailandK = String.fromCharCode(114,101,100,105,114,101,99,116,105,111,110,95,55,95,55,50,0);
          let libflipperD = String.fromCharCode(120,95,55,56,95,99,99,105,112,0);
          let footballtrophyU = String.fromCharCode(99,95,51,51,95,115,119,101,101,112,0);
         mailO -= 3 & dplusw.length;
         thailandK = `${3 >> (Math.min(5, thailandK.length))}`;
         libflipperD += `${1 >> (Math.min(1, footballtrophyU.length))}`;
         footballtrophyU = `${thailandK.length}`;
      if (2 > dplusw.length) {
          let settingsV = 4.0;
          let team3 = 0.0;
          let networkB = String.fromCharCode(104,95,49,95,108,111,99,97,108,116,105,109,101,0);
         filterP.push(parseInt(`${mailO}`) % (Math.max(indicatorb.length, 10)));
         settingsV /= Math.max(parseFloat(`${parseInt(`${team3}`)}`), 1);
         team3 += parseFloat(`${networkB.length + 2}`);
         networkB += `${2 / (Math.max(7, parseInt(`${team3}`)))}`;
      }
         mailO += parseInt(`${foundt}`);
       let scrollviewg: Map<any, any> = new Map([[String.fromCharCode(100,114,111,112,115,95,53,95,51,57,0),684], [String.fromCharCode(104,95,51,55,95,115,104,97,114,112,110,101,115,115,0),457], [String.fromCharCode(115,105,110,113,102,95,113,95,49,48,0),354]]);
      while (indicatorb.includes(foundt)) {
         indicatorb.push(3 - parseInt(`${mailO}`));
         break;
      }
         mailO -= dplusw.length;
         scrollviewg.set(`${loginV}`, 1 - parseInt(`${mailO}`));
      while (filterP.includes(mailO)) {
         filterP.push(parseInt(`${mailO}`) / (Math.max(10, filterP.length)));
         break;
      }
      let roundq = 8048108 >= filterP.length;
      do {
         filterP.push((dplusw.length >> (Math.min(3, Math.abs((loginV ? 1 : 5))))));
         if (roundq) {
            break;
         }
      } while (roundq && (5 >= (parseInt(`${foundt}`) / (Math.max(filterP.length, 4))) || 2 >= (filterP.length / 5)));
      while (!loginV) {
         filterP = [2 * filterP.length];
         break;
      }
      if ((scrollviewg.size % 4) > 5 || (mailO * 1.48) > 3.28) {
         mailO *= parseInt(`${foundt}`) >> (Math.min(filterP.length, 2));
      }
      while (scrollviewg.get(`${foundt}`) == null) {
         scrollviewg = new Map([[dplusw, (dplusw == String.fromCharCode(115,0) ? dplusw.length : (loginV ? 3 : 1))]]);
         break;
      }
      live0 /= Math.max(4, parseFloat(`${parseInt(`${foundt}`)}`));
   }
   while ((2.17 + live0) == 3.27) {
       let minimizeZ = 1.0;
       let libyogaj: Array<any> = [377, 699, 729];
       let flipper7 = String.fromCharCode(112,111,114,116,101,114,95,51,95,57,55,0);
       let iconarrowleftN = 2.0;
       let weiboV = String.fromCharCode(115,117,112,112,111,114,116,105,110,103,95,102,95,57,57,0);
         iconarrowleftN -= libyogaj.length % (Math.max(weiboV.length, 8));
      while (5.61 <= (5.98 * minimizeZ) && 1 <= (5 & weiboV.length)) {
          let backe = true;
          let topicC: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,101,114,115,95,54,95,55,57,0),994], [String.fromCharCode(122,95,50,57,95,109,111,122,106,112,101,103,0),497], [String.fromCharCode(115,101,114,105,97,108,110,111,95,122,95,49,55,0),128]]);
         weiboV = `${topicC.size}`;
         backe = (!backe ? backe : !backe);
         topicC = new Map([[`${backe}`, (2 + (backe ? 3 : 5))]]);
         break;
      }
          let actions1: Array<any> = [668, 66, 269];
         flipper7 += `${(String.fromCharCode(86,0) == flipper7 ? flipper7.length : weiboV.length)}`;
         actions1.push(actions1.length);
      while ((weiboV.length + iconarrowleftN) >= 1.12 || 2 >= (1 ^ weiboV.length)) {
         iconarrowleftN += parseInt(`${minimizeZ}`) * 1;
         break;
      }
         flipper7 = `${2 - parseInt(`${minimizeZ}`)}`;
      let searchbaru = 7366908 >= flipper7.length;
      do {
         flipper7 = `${(String.fromCharCode(108,0) == weiboV ? weiboV.length : parseInt(`${iconarrowleftN}`))}`;
         if (searchbaru) {
            break;
         }
      } while (searchbaru && ((flipper7.length - parseInt(`${minimizeZ}`)) <= 3 || (minimizeZ - 4.16) <= 5.21));
      for (let x = 0; x < 1; x++) {
         weiboV = `${parseInt(`${minimizeZ}`)}`;
      }
         flipper7 += `${1 << (Math.min(2, Math.abs(parseInt(`${minimizeZ}`))))}`;
      for (let a = 0; a < 2; a++) {
         iconarrowleftN += (String.fromCharCode(82,0) == weiboV ? libyogaj.length : weiboV.length);
      }
      for (let l = 0; l < 2; l++) {
         minimizeZ += (parseFloat(`${String.fromCharCode(118,0) == flipper7 ? flipper7.length : parseInt(`${minimizeZ}`)}`));
      }
      while ((1 & flipper7.length) < 2 && 4 < (1 & flipper7.length)) {
         libyogaj.push(flipper7.length);
         break;
      }
          let materiale = 1;
          let manifestr = String.fromCharCode(119,95,57,50,95,99,111,114,114,101,115,112,111,110,100,101,110,116,115,0);
         weiboV += `${libyogaj.length}`;
         materiale &= materiale;
         manifestr = `${1 >> (Math.min(4, Math.abs(materiale)))}`;
      if (1 < (2 & weiboV.length)) {
         iconarrowleftN /= Math.max(3, parseInt(`${minimizeZ}`));
      }
      for (let c = 0; c < 2; c++) {
         weiboV += `${parseInt(`${minimizeZ}`)}`;
      }
      while (2.38 < minimizeZ) {
         weiboV += `${1 ^ parseInt(`${iconarrowleftN}`)}`;
         break;
      }
      live0 += parseFloat(`${parseInt(`${gradlel}`) >> (Math.min(3, Math.abs(1)))}`);
      break;
   }

    setTimeout(() => {

      window_mrf += 2 << (Math.min(4, Math.abs(parseInt(`${gradlel}`))));
      window_mrf -= 3 | iconorientationW.length;
      if (screenState.isPlayGuideShown2 == false && !isVip) {

       let viewsV = false;
       let latnA = String.fromCharCode(104,95,57,48,95,105,110,99,111,110,115,105,115,116,101,110,99,121,0);
       let scorepopsoundh = String.fromCharCode(98,95,50,49,95,115,99,97,108,101,109,111,100,101,0);
      let bottom3 = scorepopsoundh == String.fromCharCode(100,52,115,107,102,49,117,0);
      do {
          let successQ = String.fromCharCode(98,95,52,54,95,114,101,99,97,108,99,117,108,97,116,105,111,110,0);
         scorepopsoundh += `${scorepopsoundh.length}`;
         successQ += `${successQ.length >> (Math.min(successQ.length, 5))}`;
         if (bottom3) {
            break;
         }
      } while ((4 <= scorepopsoundh.length) && bottom3);
         latnA += `${scorepopsoundh.length}`;
       let unreadb = 5.0;
       let long_lW = 3.0;
      if (scorepopsoundh.endsWith(`${viewsV}`)) {
         viewsV = latnA.startsWith(`${long_lW}`);
      }
          let bridge1 = String.fromCharCode(118,95,53,51,95,103,101,111,112,111,108,121,0);
          let y_image0 = String.fromCharCode(98,114,101,97,100,99,114,117,109,98,115,95,55,95,53,50,0);
         latnA = `${parseInt(`${long_lW}`)}`;
         bridge1 = `${bridge1.length - 1}`;
         y_image0 += `${y_image0.length}`;
         unreadb -= ((viewsV ? 2 : 2) & parseInt(`${long_lW}`));
       let shootr: Map<any, any> = new Map([[String.fromCharCode(109,95,55,56,95,97,116,116,97,99,107,0),637], [String.fromCharCode(102,95,49,95,115,111,102,116,116,104,114,101,115,104,0),613]]);
      if (viewsV || 3 <= (3 & shootr.size)) {
         viewsV = scorepopsoundh.length == 70;
      }
      for (let e = 0; e < 1; e++) {
         latnA += `${((viewsV ? 1 : 4) % 1)}`;
      }
      iconorientationW = `${((viewsV ? 2 : 3) % (Math.max(1, 7)))}`;
       let n_player0 = String.fromCharCode(98,95,53,57,95,100,101,97,99,116,0);
      let unreadH = n_player0.length <= 8748226;
      do {
         n_player0 = "1";
         if (unreadH) {
            break;
         }
      } while (unreadH && (n_player0.startsWith(n_player0)));
         n_player0 = `${n_player0.length}`;
       let greyV = String.fromCharCode(97,114,116,105,102,97,99,116,115,95,109,95,49,49,0);
       let libfabricjniz = String.fromCharCode(112,108,97,110,97,114,95,105,95,50,55,0);
      live0 -= parseFloat(`${shrinky.size | 1}`);
        setTimeout(() => {

      shrinky = new Map([[spinnerp, (String.fromCharCode(49,0) == spinnerp ? parseInt(`${gradlel}`) : spinnerp.length)]]);
       let area7 = 4.0;
       let windJ: Array<any> = [59, 795];
         windJ = [parseInt(`${area7}`)];
         windJ.push(parseInt(`${area7}`));
         windJ.push(parseInt(`${area7}`));
         windJ = [parseInt(`${area7}`)];
         windJ = [parseInt(`${area7}`) - 2];
         area7 *= parseFloat(`${3 | windJ.length}`);
      iconorientationW = "3";
          videoPlayerRef.current?.setPause(true); 

      fullO = `${parseInt(`${uploadA}`)}`;
      singaporeN += "2";
          setVipGuideModalDL(true);

   while ((2 | fullO.length) >= 1) {
      fullO += "3";
      break;
   }
       let selected2 = String.fromCharCode(97,95,56,54,95,108,111,116,116,105,101,118,105,101,119,0);
       let turndowns = String.fromCharCode(97,99,116,105,118,101,109,97,112,95,99,95,55,49,0);
         selected2 = `${selected2.length}`;
       let matchesf = false;
       let iconsharefriends1 = true;
      while (!matchesf) {
         turndowns = `${((matchesf ? 1 : 3))}`;
         break;
      }
         matchesf = !iconsharefriends1;
      if (!selected2.includes(`${turndowns.length}`)) {
         turndowns += `${turndowns.length}`;
      }
      let iconnewsshare9 = matchesf ? !matchesf : matchesf;
      do {
         matchesf = selected2.length < 4;
         if (iconnewsshare9) {
            break;
         }
      } while (iconnewsshare9 && (3 > selected2.length));
      configureS >>= Math.min(5, Math.abs(2));
          setVipGuideModalOpen(true);

   for (let c = 0; c < 1; c++) {
       let whistleorange2 = String.fromCharCode(102,95,50,48,95,107,105,115,115,0);
       let defaultfootballbgE: Array<any> = [String.fromCharCode(104,97,115,104,101,114,95,52,95,56,55,0), String.fromCharCode(105,110,115,101,114,116,105,110,103,95,121,95,55,53,0)];
       let inouttargetredV = 4;
       let delegate_mtX: Map<any, any> = new Map([[String.fromCharCode(110,111,116,105,99,101,95,103,95,53,52,0),false ], [String.fromCharCode(120,95,51,48,95,114,111,117,116,101,114,0),false ]]);
       let short_qS = String.fromCharCode(117,110,105,113,117,101,108,121,95,55,95,53,54,0);
      while ((2 % (Math.max(5, delegate_mtX.size))) < 4 || (delegate_mtX.size % (Math.max(2, 9))) < 1) {
         defaultfootballbgE.push(delegate_mtX.size ^ 2);
         break;
      }
      while (delegate_mtX.size < 4) {
          let scheduleru = String.fromCharCode(98,95,55,57,95,108,105,98,115,115,104,0);
          let hoverz: Map<any, any> = new Map([[String.fromCharCode(102,95,53,54,95,115,116,114,101,97,109,97,98,108,101,0),false ], [String.fromCharCode(100,101,108,116,97,95,51,95,55,57,0),true ], [String.fromCharCode(105,119,104,116,120,95,52,95,55,55,0),true ]]);
          let iconclosewhiteA: Map<any, any> = new Map([[String.fromCharCode(97,95,49,49,95,102,105,108,116,101,114,115,0),197], [String.fromCharCode(100,95,49,49,95,115,116,114,97,116,101,103,121,0),323]]);
          let materialei = 0.0;
          let networkk = 2.0;
         short_qS = `${defaultfootballbgE.length * whistleorange2.length}`;
         scheduleru = `${hoverz.size + scheduleru.length}`;
         hoverz = new Map([[`${hoverz.size}`, 3]]);
         iconclosewhiteA.set(`${networkk}`, parseInt(`${materialei}`));
         networkk -= hoverz.size;
         break;
      }
      for (let s = 0; s < 2; s++) {
          let whitetickT = true;
          let libimagepipelineW = 3;
         delegate_mtX.set(`${libimagepipelineW}`, libimagepipelineW & defaultfootballbgE.length);
         whitetickT = (whitetickT ? whitetickT : !whitetickT);
      }
          let sourceL = true;
          let checkboxe = String.fromCharCode(98,108,117,101,116,111,111,116,104,95,119,95,51,54,0);
          let carouselz = String.fromCharCode(102,95,56,54,95,111,112,99,111,100,101,115,0);
         defaultfootballbgE.push(short_qS.length);
         sourceL = carouselz == checkboxe;
         checkboxe += `${checkboxe.length - 3}`;
         carouselz = `${(checkboxe == String.fromCharCode(78,0) ? checkboxe.length : carouselz.length)}`;
      if (4 < (defaultfootballbgE.length >> (Math.min(whistleorange2.length, 4))) || (4 >> (Math.min(5, whistleorange2.length))) < 4) {
          let progressz = String.fromCharCode(115,95,50,95,105,110,99,108,117,100,101,100,0);
          let rocketL = String.fromCharCode(103,95,50,48,95,99,111,110,116,114,111,108,108,101,114,0);
          let libavcodece = 0.0;
          let rncoreU = false;
          let whitec = 2.0;
         whistleorange2 = `${inouttargetredV << (Math.min(Math.abs(3), 2))}`;
         progressz += `${(progressz == String.fromCharCode(122,0) ? parseInt(`${whitec}`) : progressz.length)}`;
         rocketL += `${(rocketL == String.fromCharCode(71,0) ? (rncoreU ? 3 : 5) : rocketL.length)}`;
         libavcodece -= 2;
         rncoreU = String.fromCharCode(73,0) == rocketL;
         whitec *= parseInt(`${libavcodece}`) * 2;
      }
      while ((1 >> (Math.min(1, Math.abs(inouttargetredV)))) == 5 && 1 == (inouttargetredV >> (Math.min(short_qS.length, 1)))) {
          let securityO: Map<any, any> = new Map([[String.fromCharCode(107,95,53,48,95,109,101,100,105,117,109,0),264], [String.fromCharCode(115,105,103,110,97,98,108,101,95,101,95,53,57,0),519], [String.fromCharCode(111,95,55,51,95,103,114,97,118,105,116,121,0),534]]);
          let indicatorC = String.fromCharCode(100,95,49,50,95,112,97,100,0);
          let pangleh: Map<any, any> = new Map([[String.fromCharCode(97,95,54,95,98,108,99,107,0),true ], [String.fromCharCode(100,95,50,48,95,116,105,108,108,0),true ]]);
          let coreg = false;
         short_qS = `${whistleorange2.length}`;
         securityO = new Map([[`${pangleh.size}`, pangleh.size ^ 1]]);
         indicatorC = `${indicatorC.length}`;
         coreg = (securityO.size ^ pangleh.size) == 3;
         break;
      }
         inouttargetredV |= inouttargetredV & defaultfootballbgE.length;
      if (1 >= (delegate_mtX.size << (Math.min(Math.abs(2), 1))) || (2 << (Math.min(1, Math.abs(delegate_mtX.size)))) >= 3) {
         delegate_mtX.set(short_qS, short_qS.length);
      }
      let textinput6 = 8658809 >= defaultfootballbgE.length;
      do {
         defaultfootballbgE.push(whistleorange2.length ^ 1);
         if (textinput6) {
            break;
         }
      } while (((whistleorange2.length + 1) < 4) && textinput6);
      if ((inouttargetredV % (Math.max(defaultfootballbgE.length, 7))) > 4 || (4 % (Math.max(4, inouttargetredV))) > 3) {
          let redirectG = String.fromCharCode(106,95,51,53,95,100,97,98,97,115,101,0);
          let mimoN = 3;
          let bootsplashn = String.fromCharCode(97,95,54,56,95,117,110,109,117,116,101,0);
         defaultfootballbgE = [short_qS.length << (Math.min(Math.abs(1), 1))];
         redirectG += `${redirectG.length}`;
         mimoN &= mimoN;
         bootsplashn += `${bootsplashn.length}`;
      }
         defaultfootballbgE.push(whistleorange2.length ^ 1);
          let reactnavigationP: Array<any> = [269, 965, 41];
          let icone = 3;
          let groupH = 1.0;
         delegate_mtX.set(short_qS, 3);
         reactnavigationP.push(reactnavigationP.length);
         icone -= reactnavigationP.length % 3;
         groupH *= 3;
      let chinaX = short_qS == String.fromCharCode(108,51,100,120,116,0);
      do {
         short_qS = `${delegate_mtX.size}`;
         if (chinaX) {
            break;
         }
      } while ((short_qS.length > delegate_mtX.size) && chinaX);
       let videog = 0.0;
         inouttargetredV /= Math.max(short_qS.length & parseInt(`${videog}`), 1);
      iconorientationW += `${(routerv == String.fromCharCode(118,0) ? delegate_mtX.size : routerv.length)}`;
   }
   let combine0 = 5843995 <= dataj.size;
   do {
      dataj = new Map([[fullO, parseInt(`${uploadA}`) & fullO.length]]);
      if (combine0) {
         break;
      }
   } while (combine0 && (Array.from(dataj.keys()).includes(`${configureS}`)));
          dispatch(setIsPlayGuideShown2(true));
        }, 50);

   while (2 > (3 - dataj.size)) {
      dataj.set(`${live0}`, 1 ^ parseInt(`${live0}`));
      break;
   }
   for (let l = 0; l < 3; l++) {
      gradlel /= Math.max(2, 5);
   }

        if (screenState.isPlayGuideShown == false && !isVip) {

   if (uploadA < 2.7) {
       let libyogaI = 5.0;
       let castingK = String.fromCharCode(111,100,109,108,95,120,95,49,53,0);
       let confirmationT: Map<any, any> = new Map([[String.fromCharCode(118,105,97,95,115,95,57,57,0),16], [String.fromCharCode(102,95,51,48,95,114,101,97,100,0),587], [String.fromCharCode(105,108,98,99,102,105,120,95,48,95,51,48,0),540]]);
      if (castingK.length >= confirmationT.size) {
         confirmationT.set(`${castingK}`, confirmationT.size);
      }
         libyogaI -= (castingK == String.fromCharCode(87,0) ? castingK.length : parseInt(`${libyogaI}`));
          let armvaS = 0.0;
          let graphicsn = 0.0;
          let coreH = true;
         castingK += `${parseInt(`${graphicsn}`) | parseInt(`${armvaS}`)}`;
         armvaS -= 3;
         graphicsn /= Math.max(5, (parseFloat(`${(coreH ? 5 : 4) | 2}`)));
          let h_unlockF = String.fromCharCode(100,105,105,110,95,113,95,50,49,0);
          let placementt: Map<any, any> = new Map([[String.fromCharCode(114,95,55,57,95,115,117,101,108,111,0),276], [String.fromCharCode(108,111,99,107,95,114,95,49,51,0),116]]);
         castingK += "3";
         h_unlockF = `${placementt.size}`;
         placementt.set(h_unlockF, 3);
          let nativemodule6 = false;
          let defaultprofilepicU = String.fromCharCode(112,103,110,111,95,49,95,55,51,0);
          let defaultprofilepic6 = 5.0;
         libyogaI *= (defaultprofilepicU == String.fromCharCode(85,0) ? confirmationT.size : defaultprofilepicU.length);
         nativemodule6 = 4.70 > defaultprofilepic6;
         defaultprofilepic6 += 1 << (Math.min(Math.abs(parseInt(`${defaultprofilepic6}`)), 1));
      live0 /= Math.max(4, parseFloat(`${spinnerp.length - parseInt(`${libyogaI}`)}`));
   }
      live0 *= (parseFloat(`${String.fromCharCode(50,0) == routerv ? routerv.length : singaporeN.length}`));
          setTimeout(() => {

   while (fullO != String.fromCharCode(70,0)) {
       let floaterJ = true;
       let ying_ = 0;
       let tempnodatay = 2.0;
       let lightH = 5.0;
      while ((lightH + 3.29) >= 4.32) {
         lightH /= Math.max(3 | parseInt(`${tempnodatay}`), 4);
         break;
      }
       let turnj = String.fromCharCode(112,97,110,101,108,115,95,111,95,51,53,0);
       let twitterX = String.fromCharCode(97,99,111,108,111,114,115,95,122,95,56,0);
          let libreactnativeblobA = 2.0;
         floaterJ = tempnodatay == 40.78;
         libreactnativeblobA /= Math.max(parseFloat(`${parseInt(`${libreactnativeblobA}`)}`), 1);
       let u_managerG = String.fromCharCode(101,95,56,54,95,97,115,115,105,103,110,109,101,110,116,0);
          let bells: Array<any> = [270, 906, 843];
          let iconuser2 = String.fromCharCode(102,95,51,48,95,122,111,110,101,115,0);
          let abidetectl = String.fromCharCode(107,95,57,52,95,98,121,116,101,114,117,110,0);
         lightH -= 2 >> (Math.min(5, abidetectl.length));
         bells.push(iconuser2.length | 2);
         iconuser2 += `${3 >> (Math.min(4, iconuser2.length))}`;
         abidetectl += `${1 >> (Math.min(2, iconuser2.length))}`;
      while ((5 ^ twitterX.length) < 1 || 1 < (ying_ ^ 5)) {
          let cornerL = String.fromCharCode(107,95,53,52,95,110,101,119,115,0);
          let vietnamm: Array<any> = [String.fromCharCode(105,110,118,101,114,115,101,100,95,119,95,56,51,0), String.fromCharCode(114,95,54,48,95,117,110,115,101,110,100,0), String.fromCharCode(112,114,111,112,95,119,95,49,0)];
          let otherp = false;
          let w_playerR = 0;
          let nendb = 2;
         twitterX += `${(String.fromCharCode(55,0) == cornerL ? (otherp ? 2 : 4) : cornerL.length)}`;
         vietnamm.push(2);
         otherp = (w_playerR - vietnamm.length) < 98;
         w_playerR &= vietnamm.length | 2;
         nendb -= 2;
         break;
      }
         tempnodatay *= parseFloat(`${2 - ying_}`);
      for (let q = 0; q < 3; q++) {
         ying_ /= Math.max(5, parseInt(`${tempnodatay}`));
      }
         twitterX += `${1 ^ twitterX.length}`;
          let executorK = String.fromCharCode(115,95,51,48,95,119,97,105,116,105,110,103,0);
          let playJ = 0.0;
          let remindera = false;
         ying_ ^= ((floaterJ ? 3 : 4));
         executorK = `${parseInt(`${playJ}`) / 1}`;
         playJ -= 3;
         remindera = executorK.endsWith(`${playJ}`);
          let favoriteG: Array<any> = [320, 230];
         twitterX = `${((floaterJ ? 2 : 4) % (Math.max(8, favoriteG.length)))}`;
      while (turnj.includes(`${tempnodatay}`)) {
          let videocommonq: Array<any> = [String.fromCharCode(113,100,101,108,116,97,95,108,95,50,56,0), String.fromCharCode(98,95,53,57,95,100,101,97,100,108,111,99,107,101,100,0)];
          let fastforward_ = 3.0;
          let crownT: Map<any, any> = new Map([[String.fromCharCode(110,95,52,51,95,109,111,100,105,102,121,0),123], [String.fromCharCode(117,95,50,50,95,115,105,103,115,0),549], [String.fromCharCode(106,95,51,48,95,108,97,110,100,109,105,110,101,115,0),186]]);
         tempnodatay *= parseFloat(`${twitterX.length >> (Math.min(5, Math.abs(crownT.size)))}`);
         videocommonq.push(2);
         fastforward_ *= parseFloat(`${videocommonq.length}`);
         crownT = new Map([[`${videocommonq.length}`, parseInt(`${fastforward_}`)]]);
         break;
      }
      iconorientationW += `${shrinky.size}`;
      break;
   }
   if ((configureS ^ 1) >= 1 && 4 >= (configureS | 1)) {
       let philippinesg = 5.0;
       let predictionbanner1 = 5;
       let desc_ = 4;
       let images_: Map<any, any> = new Map([[String.fromCharCode(108,95,54,49,95,104,97,110,103,117,112,0),682], [String.fromCharCode(112,105,99,116,117,114,101,95,54,95,57,52,0),958], [String.fromCharCode(104,100,101,99,95,119,95,50,0),307]]);
       let latnx = 2.0;
          let modalH = String.fromCharCode(100,95,57,54,95,108,111,111,107,97,104,101,97,100,0);
          let inactive_ = String.fromCharCode(116,95,51,55,95,100,117,112,101,100,0);
          let basketballtrophy1: Array<any> = [912, 535];
         images_.set(inactive_, 3);
         modalH = `${basketballtrophy1.length / 3}`;
         inactive_ = `${(String.fromCharCode(84,0) == modalH ? modalH.length : basketballtrophy1.length)}`;
      for (let y = 0; y < 2; y++) {
         predictionbanner1 &= 1;
      }
      let hookS = latnx >= 9868943.0;
      do {
          let completeD = String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,95,99,95,54,48,0);
         latnx += 3 / (Math.max(2, images_.size));
         completeD = "3";
         if (hookS) {
            break;
         }
      } while (hookS && (2.10 > (images_.size + latnx) || (2.10 + latnx) > 1.93));
         predictionbanner1 -= parseInt(`${philippinesg}`) * predictionbanner1;
      let backj = philippinesg <= 7545170.0;
      do {
          let detailsU = 0.0;
         philippinesg -= parseFloat(`${3}`);
         detailsU *= parseInt(`${detailsU}`) % (Math.max(parseInt(`${detailsU}`), 6));
         if (backj) {
            break;
         }
      } while (((3 - latnx) >= 5.92) && backj);
      if (latnx <= 2.70) {
         predictionbanner1 <<= Math.min(4, Math.abs(desc_));
      }
      for (let c = 0; c < 1; c++) {
          let aboutm = String.fromCharCode(106,95,52,56,95,102,114,97,109,101,115,105,122,101,0);
          let temperaturee = String.fromCharCode(98,117,98,98,108,101,95,52,95,56,51,0);
          let libavformatS: Map<any, any> = new Map([[String.fromCharCode(114,95,49,49,95,100,101,99,114,121,112,116,0),571], [String.fromCharCode(109,101,100,105,97,110,95,108,95,50,50,0),441], [String.fromCharCode(99,97,112,116,117,114,101,95,105,95,50,55,0),119]]);
          let libsentryd = String.fromCharCode(105,95,54,57,95,101,97,103,97,105,110,0);
          let disconnectedA: Array<any> = [690, 188];
         philippinesg /= Math.max(5, parseFloat(`${disconnectedA.length}`));
         aboutm += "3";
         temperaturee += "1";
         libavformatS.set(temperaturee, 1 / (Math.max(10, aboutm.length)));
         libsentryd = `${(String.fromCharCode(111,0) == temperaturee ? libsentryd.length : temperaturee.length)}`;
         disconnectedA = [libsentryd.length];
      }
         desc_ ^= predictionbanner1;
       let giftK = String.fromCharCode(114,95,53,54,95,99,111,110,118,101,114,116,101,114,0);
      for (let b = 0; b < 2; b++) {
         latnx -= 3 & parseInt(`${latnx}`);
      }
         desc_ >>= Math.min(Math.abs(images_.size + predictionbanner1), 4);
         predictionbanner1 *= 3 / (Math.max(7, images_.size));
      for (let n = 0; n < 2; n++) {
         giftK += `${images_.size / (Math.max(2, predictionbanner1))}`;
      }
      let userg = philippinesg <= 6295815.0;
      do {
          let libfbjniA = String.fromCharCode(101,110,117,109,101,114,97,116,111,114,115,95,102,95,56,56,0);
         philippinesg += parseFloat(`${desc_ / (Math.max(libfbjniA.length, 5))}`);
         if (userg) {
            break;
         }
      } while (userg && (parseFloat(`${images_.size}`) == philippinesg));
       let libflipperK = true;
       let fullscreenminp = false;
      configureS += 3 & fullO.length;
   }
            setVipGuideModal(true);

   let mapbufferp = configureS >= 5504385;
   do {
       let miniz = String.fromCharCode(112,95,57,55,95,114,101,109,97,112,112,101,100,0);
       let videoy = 3;
       let elements9 = String.fromCharCode(119,95,56,56,95,112,114,111,102,105,108,101,0);
         miniz += `${2 ^ miniz.length}`;
          let turnj0 = 3.0;
          let kicks = String.fromCharCode(111,95,51,48,95,102,111,117,114,120,109,0);
         elements9 += `${3 | videoy}`;
         turnj0 -= (parseFloat(`${String.fromCharCode(51,0) == kicks ? kicks.length : parseInt(`${turnj0}`)}`));
      for (let t = 0; t < 3; t++) {
         elements9 = `${videoy * 1}`;
      }
      if (3 > (videoy * miniz.length) && (videoy * 3) > 1) {
         miniz += `${3 % (Math.max(1, miniz.length))}`;
      }
      for (let j = 0; j < 2; j++) {
         elements9 = `${miniz.length & videoy}`;
      }
         miniz = `${videoy & miniz.length}`;
      if (!elements9.endsWith(`${miniz.length}`)) {
         elements9 = `${videoy / 2}`;
      }
          let defaultfootballbgz = 1.0;
          let submitF = 4.0;
         videoy >>= Math.min(Math.abs(miniz.length << (Math.min(1, Math.abs(videoy)))), 5);
         defaultfootballbgz -= parseInt(`${submitF}`) & parseInt(`${defaultfootballbgz}`);
         submitF -= parseInt(`${defaultfootballbgz}`) >> (Math.min(1, Math.abs(1)));
         miniz += `${miniz.length - videoy}`;
      configureS %= Math.max(4, parseInt(`${uploadA}`) & miniz.length);
      if (mapbufferp) {
         break;
      }
   } while (mapbufferp && ((configureS - window_mrf) <= 5.72 && 3.97 <= (5.72 - window_mrf)));
       let moreP = 2;
       let invitei = 0.0;
       let textinputr: Map<any, any> = new Map([[String.fromCharCode(119,97,116,99,104,101,114,115,95,102,95,57,52,0),732], [String.fromCharCode(117,110,107,110,111,119,110,115,95,48,95,53,57,0),712]]);
         invitei += moreP | parseInt(`${invitei}`);
          let firebasej = 4;
          let time__xf = 3.0;
          let fieldR = 4.0;
         moreP %= Math.max(4, textinputr.size | 2);
         firebasej -= firebasej % (Math.max(parseInt(`${time__xf}`), 2));
         time__xf -= parseInt(`${time__xf}`);
         fieldR /= Math.max(2 * parseInt(`${time__xf}`), 1);
         invitei -= moreP & parseInt(`${invitei}`);
         textinputr.set(`${moreP}`, 3 >> (Math.min(Math.abs(parseInt(`${invitei}`)), 2)));
      for (let l = 0; l < 3; l++) {
         textinputr.set(`${invitei}`, 3);
      }
      let iconlogoutD = textinputr.size >= 6509494;
      do {
         textinputr.set(`${invitei}`, parseInt(`${invitei}`) / (Math.max(1, 1)));
         if (iconlogoutD) {
            break;
         }
      } while (((2 % (Math.max(9, moreP))) > 2 && (textinputr.size % (Math.max(2, 3))) > 5) && iconlogoutD);
      if (textinputr.size > 2) {
         textinputr.set(`${moreP}`, moreP);
      }
         moreP /= Math.max(1, 1);
       let nativemodule4: Array<any> = [578, 594];
       let stationr: Array<any> = [String.fromCharCode(120,95,54,52,95,110,118,111,105,99,101,0), String.fromCharCode(109,112,115,117,98,95,114,95,53,54,0)];
      uploadA /= Math.max(1, parseFloat(`${dataj.size}`));
            setVipGuideModalOpen(true);

      routerv += `${dataj.size & 1}`;
       let suggestionr = 0.0;
         suggestionr -= parseFloat(`${parseInt(`${suggestionr}`) * parseInt(`${suggestionr}`)}`);
          let overlayy = 1.0;
          let dragm: Array<any> = [804, 478, 62];
         suggestionr /= Math.max(parseFloat(`${parseInt(`${overlayy}`) >> (Math.min(dragm.length, 1))}`), 3);
         suggestionr += parseFloat(`${parseInt(`${suggestionr}`) >> (Math.min(2, Math.abs(1)))}`);
      routerv += `${2 - spinnerp.length}`;
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
       let fieldE = true;
    let splash2 = 5.0;
    let minivod9 = String.fromCharCode(113,95,51,49,95,114,101,110,100,101,114,105,110,103,0);
    let anythinkw = String.fromCharCode(113,112,101,108,95,105,95,54,53,0);
    let bootn: Map<any, any> = new Map([[String.fromCharCode(99,95,50,56,95,101,113,117,97,108,105,122,101,114,0),String.fromCharCode(108,111,103,105,99,97,108,95,104,95,55,54,0)], [String.fromCharCode(97,114,114,105,118,97,108,95,106,95,53,48,0),String.fromCharCode(109,95,50,52,95,108,105,98,0)], [String.fromCharCode(107,95,57,56,95,105,110,115,101,116,115,0),String.fromCharCode(115,101,103,109,101,110,116,97,116,105,111,110,95,102,95,54,55,0)]]);
    let predictionbuttonc = 4.0;
    let bodann = true;
    let link3: Array<any> = [String.fromCharCode(112,111,115,116,112,114,111,99,114,101,115,95,116,95,57,55,0), String.fromCharCode(100,98,105,95,51,95,55,0), String.fromCharCode(122,95,52,55,95,116,97,98,108,101,105,110,105,116,0)];
    let benefitI = true;
    let inactive0 = 5;
    let grayV = String.fromCharCode(114,111,111,116,115,95,102,95,54,53,0);
    let firebaseO = false;
    let condensedB = String.fromCharCode(110,95,51,52,95,97,100,97,112,116,0);
    let gradleM = String.fromCharCode(98,105,116,100,101,112,116,104,95,50,95,54,57,0);
    let cornerS: Array<any> = [String.fromCharCode(112,95,49,49,95,115,101,103,105,100,0), String.fromCharCode(119,95,51,48,95,97,98,108,101,0)];
    let libreactnativeblobr = 2;
      fieldE = (33 < ((!fieldE ? anythinkw.length : 33) / (Math.max(anythinkw.length, 4))));
   for (let b = 0; b < 2; b++) {
      inactive0 *= (link3.length & (bodann ? 5 : 3));
   }

    try {

       let chat2 = 4.0;
       let iconfeedbackz = String.fromCharCode(114,112,114,111,98,101,95,115,95,51,55,0);
      while ((iconfeedbackz.length >> (Math.min(Math.abs(4), 2))) >= 2 && 3 >= (iconfeedbackz.length * 4)) {
         chat2 += (parseFloat(`${iconfeedbackz == String.fromCharCode(112,0) ? iconfeedbackz.length : parseInt(`${chat2}`)}`));
         break;
      }
      let scheduleB = chat2 >= 6759091.0;
      do {
         chat2 *= parseFloat(`${3}`);
         if (scheduleB) {
            break;
         }
      } while ((5.95 <= (parseFloat(`${iconfeedbackz.length}`) * chat2)) && scheduleB);
      let mapping6 = 8781685.0 >= chat2;
      do {
         chat2 *= parseFloat(`${iconfeedbackz.length}`);
         if (mapping6) {
            break;
         }
      } while ((iconfeedbackz.startsWith(`${chat2}`)) && mapping6);
          let tempnodatay = 2.0;
          let runtimescheduler_ = 4;
         iconfeedbackz += `${(iconfeedbackz == String.fromCharCode(95,0) ? runtimescheduler_ : iconfeedbackz.length)}`;
         tempnodatay -= parseFloat(`${parseInt(`${tempnodatay}`)}`);
         runtimescheduler_ ^= parseInt(`${tempnodatay}`) << (Math.min(3, Math.abs(1)));
         chat2 -= parseFloat(`${iconfeedbackz.length}`);
          let libjsijniprofilerO = 5.0;
         chat2 /= Math.max(parseFloat(`${parseInt(`${chat2}`)}`), 3);
         libjsijniprofilerO /= Math.max(parseFloat(`${parseInt(`${libjsijniprofilerO}`)}`), 4);
      bodann = 59.19 == predictionbuttonc;
      grayV = "2";
      

   if (anythinkw.endsWith(`${predictionbuttonc}`)) {
       let previewk = 5.0;
       let libhermes0 = String.fromCharCode(104,95,57,53,95,104,97,110,103,117,112,0);
       let hookI = false;
       let libreanimatedS = true;
       let customf = 3;
         customf >>= Math.min(1, parseInt(`${Math.abs(((libreanimatedS ? 3 : 3) % (Math.max(libhermes0.length, 10))))}`));
          let owngoalw = false;
          let o_managerS = 2.0;
          let collectionS: Array<any> = [String.fromCharCode(121,95,57,49,95,115,105,103,115,108,111,116,0), String.fromCharCode(115,99,97,108,97,114,109,117,108,116,95,53,95,53,52,0)];
         hookI = collectionS.includes(o_managerS);
         owngoalw = !owngoalw;
         o_managerS += (parseFloat(`${2 ^ (owngoalw ? 2 : 3)}`));
          let combinet = true;
          let themer = String.fromCharCode(112,114,105,118,97,99,121,95,105,95,56,49,0);
         customf <<= Math.min(2, Math.abs(2 >> (Math.min(Math.abs(parseInt(`${previewk}`)), 1))));
         combinet = themer.length >= 55;
         themer = "1";
      let episodesp = hookI ? !hookI : hookI;
      do {
         hookI = previewk >= 49.30;
         if (episodesp) {
            break;
         }
      } while ((!hookI) && episodesp);
         libhermes0 = `${(2 ^ (libreanimatedS ? 3 : 3))}`;
      while (hookI) {
         hookI = hookI && customf < 96;
         break;
      }
         previewk += parseInt(`${previewk}`) | libhermes0.length;
         libreanimatedS = previewk == 9.66 || !hookI;
          let orangel = String.fromCharCode(111,118,97,108,95,98,95,52,49,0);
          let strI = String.fromCharCode(109,95,56,51,0);
         libhermes0 = `${2 << (Math.min(4, orangel.length))}`;
         orangel = `${3 | strI.length}`;
         strI = `${strI.length}`;
          let complete1: Map<any, any> = new Map([[String.fromCharCode(102,95,50,48,95,101,120,116,101,110,115,105,98,108,101,0),445], [String.fromCharCode(98,117,98,98,108,101,95,113,95,52,49,0),489], [String.fromCharCode(110,117,108,108,115,95,107,95,57,48,0),524]]);
          let football0 = String.fromCharCode(115,95,48,95,100,105,115,116,97,110,99,101,115,0);
         previewk += 2 * complete1.size;
         complete1.set(football0, 2);
         football0 += `${3 << (Math.min(2, football0.length))}`;
       let telegramk: Map<any, any> = new Map([[String.fromCharCode(110,95,49,49,95,100,105,115,97,112,112,101,97,114,97,110,99,101,0),220], [String.fromCharCode(105,110,115,105,100,101,95,54,95,50,48,0),784], [String.fromCharCode(111,110,116,114,111,108,95,121,95,57,54,0),869]]);
      let dragX = libreanimatedS ? !libreanimatedS : libreanimatedS;
      do {
         libreanimatedS = customf >= 88 && 32.82 >= previewk;
         if (dragX) {
            break;
         }
      } while ((!hookI) && dragX);
      if ((4 & libhermes0.length) > 1) {
         libhermes0 += `${(2 + (libreanimatedS ? 2 : 5))}`;
      }
      while ((previewk * 5.81) >= 4.1 || 3.29 >= (previewk * 5.81)) {
         customf /= Math.max(libhermes0.length, 3);
         break;
      }
      if (libhermes0.length < 5) {
          let moviesM = 2.0;
          let roomW = String.fromCharCode(118,95,49,49,95,116,109,112,108,0);
          let half8 = 5.0;
          let downarrowx = 5;
         telegramk = new Map([[`${telegramk.size}`, parseInt(`${moviesM}`)]]);
         moviesM *= parseInt(`${half8}`);
         roomW += `${parseInt(`${half8}`)}`;
         downarrowx += downarrowx % 3;
      }
      predictionbuttonc += ((fieldE ? 1 : 4));
   }
      grayV = `${1 * parseInt(`${predictionbuttonc}`)}`;
      mayi_push.playsShareClicksAnalytics();

   if (1.83 == (1.30 + splash2) || (1.30 + splash2) == 1.33) {
      grayV = `${(anythinkw == String.fromCharCode(112,0) ? inactive0 : anythinkw.length)}`;
   }
       let settingsa = 3.0;
       let malaysiaC = 2;
          let forwardU = false;
          let orangeuparrowN = 1.0;
         settingsa /= Math.max(parseFloat(`${parseInt(`${orangeuparrowN}`)}`), 1);
         forwardU = !forwardU;
         orangeuparrowN += (parseFloat(`${(forwardU ? 2 : 5)}`));
      if (malaysiaC < 4) {
         malaysiaC ^= malaysiaC;
      }
         settingsa += parseFloat(`${malaysiaC / (Math.max(parseInt(`${settingsa}`), 10))}`);
         settingsa += parseFloat(`${parseInt(`${settingsa}`)}`);
      for (let v = 0; v < 2; v++) {
         malaysiaC >>= Math.min(4, Math.abs(malaysiaC + 2));
      }
      while (1.33 >= (malaysiaC + settingsa)) {
          let scrollview4 = false;
         settingsa *= parseFloat(`${parseInt(`${settingsa}`) ^ 2}`);
         scrollview4 = !scrollview4;
         break;
      }
      link3.push(2 + anythinkw.length);
      

       let chinai = 3.0;
       let mapbufferN = false;
      for (let r = 0; r < 1; r++) {
         mapbufferN = chinai >= 6.23;
      }
       let detailsq = String.fromCharCode(99,95,55,53,95,109,105,103,114,97,116,101,0);
       let saveg = 1.0;
       let relatedn = 1.0;
       let combine3 = String.fromCharCode(114,101,97,100,108,105,110,101,95,104,95,50,0);
       let update_e3 = String.fromCharCode(122,95,51,57,95,102,97,105,108,117,114,101,115,0);
         mapbufferN = (detailsq.length - parseInt(`${saveg}`)) < 78;
         saveg -= (String.fromCharCode(79,0) == detailsq ? parseInt(`${relatedn}`) : detailsq.length);
      inactive0 &= minivod9.length;
       let libreactnativeblobd = String.fromCharCode(104,95,54,53,95,105,110,116,101,114,112,111,108,97,116,101,102,0);
       let megaphoned = 3.0;
      while (libreactnativeblobd.length >= megaphoned) {
         megaphoned *= parseInt(`${megaphoned}`) - 2;
         break;
      }
      for (let g = 0; g < 3; g++) {
         libreactnativeblobd += `${parseInt(`${megaphoned}`) - 1}`;
      }
      grayV += `${2 | bootn.size}`;

      let msg = `《${vod?.vod_name
        }》高清播放${"\n"}https://yingshi.tv/index.php/vod/play/id/${vod?.vod_id
        }/sid/1/nid/${currentEpisode + 1
        }.html${"\n"}${APP_NAME_CONST}-海量高清视频在线观看`;

      fieldE = anythinkw.length >= 38;
   let configz = firebaseO ? !firebaseO : firebaseO;
   do {
       let bodanT = false;
       let chatroombackgroundZ = String.fromCharCode(100,101,115,116,95,105,95,50,48,0);
       let promotion6 = String.fromCharCode(105,95,50,53,95,97,110,110,111,117,110,99,101,109,101,110,116,0);
      if (4 <= chatroombackgroundZ.length || bodanT) {
         chatroombackgroundZ += `${(2 << (Math.min(5, Math.abs((bodanT ? 3 : 5)))))}`;
      }
       let indexa = String.fromCharCode(115,98,111,120,95,108,95,57,54,0);
      if (indexa != String.fromCharCode(114,0)) {
          let catalogp = false;
          let flyerO = 1;
          let trashA: Map<any, any> = new Map([[String.fromCharCode(114,101,118,97,108,105,100,97,116,105,110,103,95,117,95,56,57,0),true ], [String.fromCharCode(115,116,114,108,99,97,116,95,111,95,48,0),false ]]);
         promotion6 = `${((bodanT ? 4 : 5) << (Math.min(4, Math.abs((catalogp ? 2 : 3)))))}`;
         catalogp = 100 >= flyerO;
         flyerO >>= Math.min(Math.abs(flyerO % (Math.max(trashA.size, 2))), 2);
         trashA.set(`${flyerO}`, 3 >> (Math.min(2, Math.abs(trashA.size))));
      }
      if (!bodanT) {
         promotion6 = `${3 % (Math.max(9, promotion6.length))}`;
      }
         bodanT = promotion6.length < 67;
      for (let z = 0; z < 1; z++) {
          let shielddone0 = 4.0;
          let inouttargetredS = String.fromCharCode(109,115,118,99,95,117,95,49,0);
          let roundm = true;
          let matchW = 4;
         promotion6 = `${indexa.length}`;
         shielddone0 -= ((roundm ? 1 : 3) >> (Math.min(Math.abs(parseInt(`${shielddone0}`)), 4)));
         inouttargetredS += `${matchW}`;
         roundm = 83 == matchW && inouttargetredS == String.fromCharCode(106,0);
      }
         chatroombackgroundZ = `${2 << (Math.min(5, indexa.length))}`;
      for (let t = 0; t < 1; t++) {
         promotion6 = `${chatroombackgroundZ.length / 2}`;
      }
          let homeplayerJ = false;
          let singaporeO: Map<any, any> = new Map([[String.fromCharCode(101,110,100,101,100,95,52,95,54,51,0),660], [String.fromCharCode(113,95,51,56,95,104,118,99,99,0),695], [String.fromCharCode(109,95,54,57,95,122,101,114,111,0),126]]);
         chatroombackgroundZ = `${((bodanT ? 5 : 1) ^ 1)}`;
         homeplayerJ = singaporeO.size < 26;
         singaporeO = new Map([[`${singaporeO.size}`, (3 + (homeplayerJ ? 3 : 3))]]);
      firebaseO = (90 <= ((!benefitI ? chatroombackgroundZ.length : 90) - chatroombackgroundZ.length));
      if (configz) {
         break;
      }
   } while ((!firebaseO && fieldE) && configz);

      if (APP_NAME_CONST == "蚂蚁影视") {
        msg = `海量视频内容 随时随地 想看就看 ${"\n"}https://xiangkantv.net/share.html`;

      minivod9 = "3";
       let acceptedv = String.fromCharCode(108,105,110,107,95,118,95,54,54,0);
       let defaultlogof = 3.0;
      if (parseInt(`${defaultlogof}`) < acceptedv.length) {
          let bootsplashY: Map<any, any> = new Map([[String.fromCharCode(103,115,117,98,95,54,95,56,0),217], [String.fromCharCode(110,111,110,101,95,118,95,53,0),639]]);
         acceptedv += `${acceptedv.length % 1}`;
         bootsplashY = new Map([[`${bootsplashY.size}`, bootsplashY.size ^ 3]]);
      }
         acceptedv += `${3 - acceptedv.length}`;
       let rank9: Array<any> = [String.fromCharCode(99,95,54,51,95,98,97,110,110,101,100,0), String.fromCharCode(108,111,99,107,99,104,97,105,110,95,101,95,55,48,0)];
      for (let t = 0; t < 1; t++) {
         rank9 = [parseInt(`${defaultlogof}`) % (Math.max(rank9.length, 6))];
      }
      if (3.47 == (parseFloat(`${rank9.length}`) + defaultlogof) || 4 == (5 | rank9.length)) {
         rank9.push(2 * parseInt(`${defaultlogof}`));
      }
       let teamdetailsbgr = 0.0;
      inactive0 |= (String.fromCharCode(97,0) == gradleM ? inactive0 : gradleM.length);
      }

      const result = await Share.share({
        message: msg,
      });

   if (3 == gradleM.length) {
      minivod9 += `${((bodann ? 1 : 1) << (Math.min(5, Math.abs((fieldE ? 4 : 4)))))}`;
   }
   if (1 <= (minivod9.length % 3) || 1 <= (3 % (Math.max(4, minivod9.length)))) {
      link3.push(bootn.size | link3.length);
   }
      if (result.action === Share.sharedAction) {

   let down9 = bootn.size <= 5610472;
   do {
       let basketballplayerplaceholdery: Map<any, any> = new Map([[String.fromCharCode(100,101,113,117,97,110,116,105,122,101,114,95,56,95,54,57,0),27], [String.fromCharCode(97,117,116,111,100,101,116,101,99,116,105,111,110,95,51,95,55,51,0),219]]);
       let shootyesgoald = String.fromCharCode(111,112,116,105,111,110,95,109,95,54,0);
       let vipsports = String.fromCharCode(111,95,56,54,95,102,97,117,108,116,0);
       let rules2 = 1.0;
      for (let o = 0; o < 3; o++) {
          let tempnodata2: Array<any> = [981, 264];
          let control7 = String.fromCharCode(111,95,49,49,95,104,101,118,109,97,115,107,0);
         basketballplayerplaceholdery = new Map([[`${rules2}`, vipsports.length]]);
         tempnodata2 = [control7.length & 1];
         control7 = `${control7.length}`;
      }
      if (parseInt(`${rules2}`) >= vipsports.length) {
         vipsports = "1";
      }
         shootyesgoald += `${basketballplayerplaceholdery.size ^ shootyesgoald.length}`;
      if (shootyesgoald.length >= 4) {
         basketballplayerplaceholdery.set(`${rules2}`, (vipsports == String.fromCharCode(51,0) ? parseInt(`${rules2}`) : vipsports.length));
      }
         vipsports = `${basketballplayerplaceholdery.size * parseInt(`${rules2}`)}`;
         basketballplayerplaceholdery = new Map([[`${basketballplayerplaceholdery.size}`, basketballplayerplaceholdery.size]]);
      for (let e = 0; e < 2; e++) {
         rules2 += 1 - shootyesgoald.length;
      }
         vipsports = `${parseInt(`${rules2}`) | 2}`;
      while ((vipsports.length / (Math.max(3, 10))) > 1 && (parseInt(`${rules2}`) - vipsports.length) > 3) {
         vipsports += "2";
         break;
      }
          let inactiveN = true;
          let play3 = 4.0;
         vipsports += `${basketballplayerplaceholdery.size}`;
         inactiveN = play3 >= 16.34;
         play3 *= ((inactiveN ? 1 : 3) / (Math.max(parseInt(`${play3}`), 1)));
      if (5 == (shootyesgoald.length * basketballplayerplaceholdery.size) && 4 == (basketballplayerplaceholdery.size * 5)) {
         basketballplayerplaceholdery = new Map([[`${basketballplayerplaceholdery.size}`, 3]]);
      }
      let iconuser1 = shootyesgoald == String.fromCharCode(111,51,104,98,106,49,95,103,95,95,0);
      do {
         shootyesgoald = `${basketballplayerplaceholdery.size}`;
         if (iconuser1) {
            break;
         }
      } while (iconuser1 && (1 >= (2 - basketballplayerplaceholdery.size)));
      bootn = new Map([[condensedB, 3]]);
      if (down9) {
         break;
      }
   } while (down9 && (bootn.size > 5));
   while ((5 >> (Math.min(4, gradleM.length))) > 4 && (5.30 - predictionbuttonc) > 5.52) {
       let analyticsd = String.fromCharCode(97,95,52,95,117,110,100,101,114,0);
       let clockl = String.fromCharCode(119,95,49,50,95,103,111,101,114,108,105,0);
       let orangedownarrow9: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,100,97,116,97,95,114,95,55,56,0),String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,95,104,95,52,49,0)], [String.fromCharCode(102,95,56,56,95,119,101,108,108,0),String.fromCharCode(115,116,111,119,95,98,95,50,54,0)]]);
       let scorec = String.fromCharCode(115,99,97,110,95,97,95,54,54,0);
          let settingZ = 2;
          let utilsm = 4.0;
          let liveshareH = String.fromCharCode(106,95,53,48,95,105,110,112,117,116,121,0);
         orangedownarrow9.set(`${settingZ}`, 2 + scorec.length);
         settingZ += (String.fromCharCode(90,0) == liveshareH ? parseInt(`${utilsm}`) : liveshareH.length);
         utilsm *= parseInt(`${utilsm}`);
       let searchbarI = 0.0;
       let analytics6 = 1.0;
          let logoutl = 3.0;
          let albumX = false;
          let homeloading7 = String.fromCharCode(97,108,103,95,113,95,56,48,0);
         analyticsd = `${clockl.length}`;
         logoutl /= Math.max(parseFloat(`${parseInt(`${logoutl}`)}`), 4);
         albumX = homeloading7.length < 77;
         homeloading7 = `${(String.fromCharCode(89,0) == homeloading7 ? (albumX ? 5 : 5) : homeloading7.length)}`;
         analyticsd += `${orangedownarrow9.size >> (Math.min(Math.abs(2), 1))}`;
         searchbarI /= Math.max((String.fromCharCode(97,0) == analyticsd ? parseInt(`${searchbarI}`) : analyticsd.length), 3);
         scorec = `${parseInt(`${analytics6}`) >> (Math.min(Math.abs(parseInt(`${searchbarI}`)), 4))}`;
      while (4 >= (clockl.length | 4) || (4 - parseInt(`${searchbarI}`)) >= 2) {
          let shoot5: Map<any, any> = new Map([[String.fromCharCode(99,104,111,105,99,101,115,95,105,95,49,56,0),String.fromCharCode(113,95,54,55,95,99,111,109,112,101,110,115,97,116,101,0)], [String.fromCharCode(102,95,57,95,99,104,97,105,110,115,0),String.fromCharCode(103,101,116,95,110,95,57,48,0)], [String.fromCharCode(119,95,49,50,95,98,102,115,116,109,0),String.fromCharCode(122,95,52,54,95,102,97,115,116,116,101,115,116,0)]]);
          let ewardedu = false;
          let libmapbufferjniP: Map<any, any> = new Map([[String.fromCharCode(103,108,105,116,99,104,95,97,95,50,52,0),156], [String.fromCharCode(107,95,52,51,95,114,101,102,101,114,101,110,99,101,0),649], [String.fromCharCode(111,95,51,52,95,114,116,112,112,114,111,116,111,0),836]]);
         clockl += `${(parseInt(`${searchbarI}`) + (ewardedu ? 5 : 1))}`;
         shoot5.set(`${shoot5.size}`, 2 + libmapbufferjniP.size);
         ewardedu = (libmapbufferjniP.size & shoot5.size) >= 7;
         break;
      }
          let mimez = 1.0;
         analytics6 += 1 * analyticsd.length;
         mimez /= Math.max(2, parseFloat(`${parseInt(`${mimez}`) % (Math.max(1, parseInt(`${mimez}`)))}`));
      while (1 == (2 - orangedownarrow9.size) || 1.62 == (orangedownarrow9.size - analytics6)) {
         analytics6 /= Math.max(2, 3);
         break;
      }
         analytics6 *= 3;
      for (let t = 0; t < 3; t++) {
          let rankq = String.fromCharCode(118,105,122,105,101,114,95,53,95,49,50,0);
          let long_hbX = String.fromCharCode(100,105,115,112,111,115,97,98,108,101,115,95,102,95,56,52,0);
          let placementL = String.fromCharCode(117,95,53,55,95,97,100,106,117,115,116,0);
          let topicd = String.fromCharCode(104,95,50,51,95,118,101,99,116,111,114,100,0);
          let utilsn = 2.0;
         orangedownarrow9 = new Map([[`${orangedownarrow9.size}`, orangedownarrow9.size | long_hbX.length]]);
         rankq += `${topicd.length}`;
         long_hbX += `${rankq.length}`;
         placementL = `${topicd.length << (Math.min(4, Math.abs(parseInt(`${utilsn}`))))}`;
         utilsn *= parseInt(`${utilsn}`);
      }
      let default_baM = searchbarI >= 8733076.0;
      do {
          let iconarrowrightorange9 = 2.0;
          let playlistM = 4.0;
          let chatroombackgroundG = String.fromCharCode(119,95,50,51,95,115,101,116,116,105,110,103,115,0);
          let libapminsighta7 = String.fromCharCode(110,101,109,111,110,105,99,95,51,95,55,57,0);
         searchbarI -= scorec.length + 3;
         iconarrowrightorange9 /= Math.max(parseInt(`${iconarrowrightorange9}`), 5);
         playlistM *= parseInt(`${iconarrowrightorange9}`);
         chatroombackgroundG = `${chatroombackgroundG.length << (Math.min(2, Math.abs(parseInt(`${playlistM}`))))}`;
         libapminsighta7 += "2";
         if (default_baM) {
            break;
         }
      } while ((4.22 >= (1.93 - searchbarI)) && default_baM);
      gradleM = `${parseInt(`${predictionbuttonc}`)}`;
      break;
   }
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

       let androidV: Array<any> = [String.fromCharCode(115,95,50,54,95,105,110,115,116,97,108,108,115,0), String.fromCharCode(103,95,56,48,95,114,107,109,112,112,0)];
      while ((androidV.length - androidV.length) >= 1 || (1 - androidV.length) >= 1) {
          let currentc = 1;
          let configure2 = String.fromCharCode(103,95,54,55,95,109,105,114,114,111,114,101,100,0);
          let splashj = String.fromCharCode(106,95,49,54,95,111,112,101,110,101,114,0);
          let membership1 = String.fromCharCode(98,95,54,50,95,109,118,99,111,110,116,101,120,116,115,0);
          let componentL: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,99,108,101,95,118,95,49,51,0),967], [String.fromCharCode(98,108,111,98,115,95,98,95,50,53,0),730], [String.fromCharCode(109,95,57,57,95,99,97,108,105,98,114,97,116,101,100,0),434]]);
         androidV = [currentc / (Math.max(configure2.length, 3))];
         currentc += 1 | componentL.size;
         configure2 += `${membership1.length}`;
         splashj = "1";
         membership1 += `${2 + splashj.length}`;
         componentL.set(`${splashj}`, componentL.size + splashj.length);
         break;
      }
      let point_ = 6361066 <= androidV.length;
      do {
          let pingf = 5.0;
          let chatroombackgroundn = 5;
          let file3 = String.fromCharCode(97,95,49,54,95,109,117,116,117,97,108,0);
          let sentryM = String.fromCharCode(118,95,51,53,95,104,101,97,112,0);
          let checkboxJ = false;
         androidV = [3 ^ file3.length];
         pingf -= (parseFloat(`${(checkboxJ ? 3 : 1) + parseInt(`${pingf}`)}`));
         chatroombackgroundn ^= chatroombackgroundn * 3;
         file3 = `${sentryM.length}`;
         sentryM = `${((checkboxJ ? 3 : 5))}`;
         if (point_) {
            break;
         }
      } while ((androidV.length > androidV.length) && point_);
          let crownp: Array<any> = [String.fromCharCode(117,108,111,110,103,95,98,95,53,56,0), String.fromCharCode(115,95,57,51,95,99,108,97,115,115,105,102,121,0), String.fromCharCode(97,117,116,104,111,114,115,95,51,95,54,56,0)];
          let modityJ: Array<any> = [368, 126, 697];
         androidV.push(crownp.length);
         crownp.push(modityJ.length % (Math.max(modityJ.length, 7)));
      link3.push(2 - grayV.length);
      fieldE = bootn.get(`${bodann}`) != null;
      Alert.alert(error.message);
    }
  };

  const checkConnection = async () => {
       let downarrowQ = true;
    let clearY: Array<any> = [11, 808];
    let core7 = String.fromCharCode(101,110,99,111,100,101,114,95,52,95,49,53,0);
    let iconarrowrightorangeY: Map<any, any> = new Map([[String.fromCharCode(100,95,55,48,95,116,104,105,99,107,110,101,115,115,0),209], [String.fromCharCode(108,95,57,48,95,101,110,99,111,100,101,109,118,0),708]]);
    let iconbackwhites: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,108,105,103,104,116,101,100,95,122,95,51,55,0),40], [String.fromCharCode(105,110,118,97,108,105,100,95,98,95,57,55,0),393], [String.fromCharCode(99,95,50,53,95,97,118,105,97,108,97,98,108,101,0),44]]);
    let yellowtored9 = String.fromCharCode(115,115,101,114,116,95,49,95,49,54,0);
    let profileactiveZ = 0;
    let classesz = 3;
    let refreshborderlessK: Map<any, any> = new Map([[String.fromCharCode(121,95,52,53,95,112,111,115,115,105,98,108,121,0),302], [String.fromCharCode(109,101,110,116,105,111,110,95,101,95,53,50,0),819]]);
   let strM = clearY.length >= 7868882;
   do {
      clearY = [1 ^ iconarrowrightorangeY.size];
      if (strM) {
         break;
      }
   } while ((3 < clearY.length) && strM);
   if (4 >= (5 + iconbackwhites.size) || (iconbackwhites.size + yellowtored9.length) >= 5) {
       let sounds: Array<any> = [124, 597, 288];
          let carousel0 = String.fromCharCode(119,104,111,108,101,95,121,95,54,52,0);
          let homeiconp = String.fromCharCode(102,95,57,52,95,115,117,112,112,114,101,115,115,105,111,110,0);
          let tumbnailj: Array<any> = [185, 334];
         sounds = [tumbnailj.length];
         carousel0 += "3";
         homeiconp += "1";
         tumbnailj = [homeiconp.length % 1];
      let iconpointscorey = sounds.length >= 5127806;
      do {
         sounds.push(sounds.length >> (Math.min(1, sounds.length)));
         if (iconpointscorey) {
            break;
         }
      } while ((4 >= sounds.length) && iconpointscorey);
         sounds = [2 + sounds.length];
      iconbackwhites.set(yellowtored9, core7.length);
   }
      yellowtored9 += `${core7.length - 1}`;
   for (let v = 0; v < 3; v++) {
       let carousely = String.fromCharCode(97,117,116,111,98,97,110,104,95,99,95,52,50,0);
      let typingw = 8150457 >= carousely.length;
      do {
          let render6 = String.fromCharCode(100,95,51,51,95,112,108,97,121,105,110,103,0);
          let statisticss = String.fromCharCode(115,101,108,101,99,116,95,109,95,54,52,0);
         carousely += `${render6.length}`;
         render6 = `${statisticss.length % (Math.max(1, 10))}`;
         statisticss = `${2 + statisticss.length}`;
         if (typingw) {
            break;
         }
      } while (typingw && (2 > carousely.length));
      let predictionbannerI = String.fromCharCode(119,110,107,0) == carousely;
      do {
         carousely = `${carousely.length}`;
         if (predictionbannerI) {
            break;
         }
      } while (predictionbannerI && (carousely.length < 4));
      if (carousely.startsWith(`${carousely.length}`)) {
         carousely += `${(String.fromCharCode(119,0) == carousely ? carousely.length : carousely.length)}`;
      }
      core7 += `${clearY.length}`;
   }

    const state = await NetInfo.fetch();

   let rootD = 8218343 >= yellowtored9.length;
   do {
      yellowtored9 = `${(iconarrowrightorangeY.size + (downarrowQ ? 1 : 2))}`;
      if (rootD) {
         break;
      }
   } while ((5 > (yellowtored9.length >> (Math.min(4, Math.abs(iconbackwhites.size)))) || 5 > (5 >> (Math.min(4, Math.abs(iconbackwhites.size))))) && rootD);
       let pressure0 = 3.0;
       let orangec = String.fromCharCode(114,101,118,101,114,115,101,95,113,95,51,56,0);
       let clockG = String.fromCharCode(108,95,55,53,95,99,114,111,112,112,101,100,0);
      if (orangec.startsWith(clockG)) {
         clockG = `${clockG.length & orangec.length}`;
      }
      for (let p = 0; p < 2; p++) {
          let nterstitiala = false;
          let cinit_gw = 3.0;
          let plash6 = 3;
          let filled1: Map<any, any> = new Map([[String.fromCharCode(101,95,51,54,95,115,116,112,115,0),169], [String.fromCharCode(117,110,105,102,111,114,109,115,95,100,95,57,56,0),960], [String.fromCharCode(108,111,103,111,117,114,108,95,97,95,52,51,0),225]]);
          let libturbomodulejsijnii = true;
         orangec = "1";
         nterstitiala = !nterstitiala;
         cinit_gw -= (parseFloat(`${(libturbomodulejsijnii ? 3 : 1) + 1}`));
         plash6 -= parseInt(`${cinit_gw}`);
         filled1.set(`${cinit_gw}`, (parseInt(`${cinit_gw}`) * (libturbomodulejsijnii ? 5 : 4)));
      }
       let auto_qst = String.fromCharCode(112,111,115,116,112,114,111,99,114,101,115,95,100,95,51,54,0);
         pressure0 += (String.fromCharCode(85,0) == orangec ? orangec.length : parseInt(`${pressure0}`));
      if ((pressure0 - auto_qst.length) >= 1.32 || 1 >= (parseInt(`${pressure0}`) - auto_qst.length)) {
         auto_qst += `${parseInt(`${pressure0}`)}`;
      }
      while (clockG.length > 3) {
          let matchinactivep = 3.0;
         clockG = `${3 - orangec.length}`;
         matchinactivep -= parseInt(`${matchinactivep}`);
         break;
      }
      for (let v = 0; v < 3; v++) {
         auto_qst += `${clockG.length ^ auto_qst.length}`;
      }
      for (let v = 0; v < 1; v++) {
         auto_qst += `${orangec.length}`;
      }
       let reactnativeultimatelistviewK = 4.0;
       let basketballicony = 0.0;
      profileactiveZ *= core7.length;
   while (4 <= (clearY.length | iconarrowrightorangeY.size) || (iconarrowrightorangeY.size | clearY.length) <= 4) {
       let predictionbuttonq: Map<any, any> = new Map([[String.fromCharCode(114,95,56,55,95,99,97,108,108,105,110,103,0),570], [String.fromCharCode(109,105,108,108,101,114,95,121,95,49,50,0),637]]);
       let adult2 = String.fromCharCode(116,121,112,95,115,95,57,50,0);
       let logind: Array<any> = [String.fromCharCode(114,95,49,55,95,105,116,108,101,0), String.fromCharCode(119,119,119,95,119,95,55,51,0)];
       let defaultprofilepicQ = String.fromCharCode(109,97,107,101,115,114,112,109,95,122,95,51,55,0);
       let icontransferclubR = String.fromCharCode(114,95,50,49,95,100,119,111,114,100,0);
          let imagess = String.fromCharCode(118,95,53,49,95,100,99,115,116,114,0);
         predictionbuttonq = new Map([[imagess, (icontransferclubR == String.fromCharCode(54,0) ? imagess.length : icontransferclubR.length)]]);
      let rulesk = defaultprofilepicQ == String.fromCharCode(104,99,120,99,53,121,115,110,0);
      do {
         defaultprofilepicQ += `${adult2.length * 2}`;
         if (rulesk) {
            break;
         }
      } while (((defaultprofilepicQ.length & 1) >= 4 || 2 >= (1 & defaultprofilepicQ.length)) && rulesk);
      let mbnativeU = logind.length <= 9305489;
      do {
          let topicE = 0;
          let greyQ = 2.0;
          let starO: Array<any> = [String.fromCharCode(103,95,52,56,95,109,111,122,106,112,101,103,0), String.fromCharCode(108,95,53,50,95,114,103,98,112,108,117,115,0)];
          let iconsubssuccessc = 1.0;
          let fieldt = String.fromCharCode(118,95,55,56,95,109,111,100,97,108,108,121,0);
         logind.push(1);
         topicE *= topicE | 3;
         greyQ -= parseInt(`${greyQ}`) * 1;
         starO.push(3);
         iconsubssuccessc *= parseFloat(`${starO.length}`);
         fieldt = `${parseInt(`${iconsubssuccessc}`)}`;
         if (mbnativeU) {
            break;
         }
      } while (((5 | predictionbuttonq.size) > 5) && mbnativeU);
       let template_3X = 0.0;
       let fastforwardt = 5.0;
      for (let i = 0; i < 2; i++) {
         fastforwardt *= adult2.length | predictionbuttonq.size;
      }
      while (predictionbuttonq.size <= 1) {
         predictionbuttonq.set(`${template_3X}`, defaultprofilepicQ.length);
         break;
      }
      if (icontransferclubR.length > 4) {
         icontransferclubR = `${1 + predictionbuttonq.size}`;
      }
      if (!icontransferclubR.startsWith(`${defaultprofilepicQ.length}`)) {
          let libswresampleJ = String.fromCharCode(121,95,52,49,95,97,108,103,111,114,105,116,104,109,0);
         defaultprofilepicQ = `${parseInt(`${fastforwardt}`)}`;
         libswresampleJ = `${libswresampleJ.length | libswresampleJ.length}`;
      }
      while (icontransferclubR == String.fromCharCode(108,0) || 1 <= adult2.length) {
         icontransferclubR += `${predictionbuttonq.size * 2}`;
         break;
      }
         icontransferclubR = "3";
      for (let g = 0; g < 2; g++) {
          let gesturesE = false;
         defaultprofilepicQ = `${logind.length / (Math.max(2, 1))}`;
         gesturesE = !gesturesE && gesturesE;
      }
         logind.push(2 / (Math.max(parseInt(`${fastforwardt}`), 10)));
      let assistg = 6003862 >= adult2.length;
      do {
         adult2 += `${defaultprofilepicQ.length / 3}`;
         if (assistg) {
            break;
         }
      } while ((!defaultprofilepicQ.endsWith(adult2)) && assistg);
      if ((icontransferclubR.length % (Math.max(3, 9))) >= 3 && (icontransferclubR.length - template_3X) >= 4.98) {
          let libruntimeexecutorn = true;
          let bgvipsportZ = String.fromCharCode(115,117,98,115,116,114,105,110,103,115,95,116,95,53,56,0);
          let leftr = String.fromCharCode(100,101,116,101,99,116,105,111,110,95,117,95,55,51,0);
         icontransferclubR = `${2 + bgvipsportZ.length}`;
         libruntimeexecutorn = String.fromCharCode(116,0) == leftr;
         bgvipsportZ += `${(String.fromCharCode(66,0) == leftr ? leftr.length : leftr.length)}`;
      }
      while (adult2 == defaultprofilepicQ) {
          let reminderu = String.fromCharCode(112,95,54,95,105,110,116,114,111,0);
          let iconadslinkc = String.fromCharCode(120,95,50,49,95,116,114,105,112,108,101,0);
          let libjsinspectorV = false;
          let aboutw: Map<any, any> = new Map([[String.fromCharCode(109,105,99,114,111,115,111,102,116,95,122,95,49,49,0),String.fromCharCode(114,101,99,111,114,100,105,110,103,95,105,95,57,48,0)], [String.fromCharCode(100,101,110,105,101,100,95,103,95,49,51,0),String.fromCharCode(116,114,101,97,116,95,122,95,57,56,0)]]);
         defaultprofilepicQ = `${(String.fromCharCode(106,0) == reminderu ? parseInt(`${template_3X}`) : reminderu.length)}`;
         iconadslinkc += `${((libjsinspectorV ? 3 : 2) << (Math.min(Math.abs(2), 5)))}`;
         libjsinspectorV = libjsinspectorV || iconadslinkc.length >= 43;
         aboutw.set(`${libjsinspectorV}`, (1 & (libjsinspectorV ? 3 : 4)));
         break;
      }
      iconarrowrightorangeY = new Map([[`${iconarrowrightorangeY.size}`, profileactiveZ]]);
      break;
   }
      iconbackwhites.set(`${profileactiveZ}`, profileactiveZ);
    const offline = !(state.isConnected && state.isInternetReachable);

      iconarrowrightorangeY.set(`${clearY.length}`, iconbackwhites.size / (Math.max(5, clearY.length)));
      yellowtored9 = `${core7.length}`;
      yellowtored9 += `${iconbackwhites.size + profileactiveZ}`;
      yellowtored9 += `${iconbackwhites.size}`;
    setIsOffline(offline);

      iconarrowrightorangeY.set(`${profileactiveZ}`, (String.fromCharCode(54,0) == yellowtored9 ? profileactiveZ : yellowtored9.length));
       let homeplayerD = 0.0;
       let spinnerp = String.fromCharCode(98,102,115,116,109,95,121,95,55,57,0);
      if (1 <= (parseInt(`${homeplayerD}`) * 5) || 3 <= (spinnerp.length / 5)) {
         spinnerp = `${spinnerp.length}`;
      }
         spinnerp = `${parseInt(`${homeplayerD}`) / (Math.max(spinnerp.length, 6))}`;
         spinnerp = `${2 << (Math.min(5, Math.abs(parseInt(`${homeplayerD}`))))}`;
         homeplayerD /= Math.max(parseFloat(`${2}`), 3);
       let untickG = 4.0;
       let referrer_ = 3.0;
      while (!spinnerp.includes(`${referrer_}`)) {
         spinnerp += `${parseInt(`${untickG}`)}`;
         break;
      }
      downarrowQ = 15 <= (profileactiveZ - homeplayerD);
      yellowtored9 += `${2 & profileactiveZ}`;
   if (!downarrowQ) {
      profileactiveZ &= profileactiveZ;
   }

    if (offline) {

   for (let q = 0; q < 2; q++) {
      iconbackwhites.set(`${iconarrowrightorangeY.size}`, iconarrowrightorangeY.size);
   }
      iconarrowrightorangeY.set(core7, core7.length ^ 2);
   let turno = downarrowQ ? !downarrowQ : downarrowQ;
   do {
       let backgroundO = 3;
       let t_unlockZ: Array<any> = [String.fromCharCode(100,95,54,51,95,110,111,116,105,102,121,0), String.fromCharCode(112,101,115,113,95,108,95,54,52,0)];
       let loginn = 0;
       let halffieldimaged = 3.0;
      while (4 >= (loginn / 5)) {
          let modulee = String.fromCharCode(104,97,108,108,95,108,95,49,51,0);
         loginn += 1 << (Math.min(Math.abs(parseInt(`${halffieldimaged}`)), 5));
         modulee = `${modulee.length}`;
         break;
      }
      while (1 <= (t_unlockZ.length >> (Math.min(5, Math.abs(loginn)))) || (t_unlockZ.length >> (Math.min(4, Math.abs(loginn)))) <= 1) {
          let loginb = String.fromCharCode(113,95,54,57,95,97,114,99,104,105,118,101,0);
          let holder3: Map<any, any> = new Map([[String.fromCharCode(115,95,52,56,95,99,108,97,115,115,110,97,109,101,0),String.fromCharCode(118,101,110,117,101,95,110,95,54,52,0)], [String.fromCharCode(115,101,114,105,97,108,110,111,95,103,95,49,55,0),String.fromCharCode(117,114,118,101,95,108,95,51,55,0)], [String.fromCharCode(100,105,115,97,112,112,101,97,114,105,110,103,95,106,95,49,54,0),String.fromCharCode(111,95,53,55,95,112,104,121,115,105,99,97,108,0)]]);
          let castingq: Array<any> = [String.fromCharCode(101,95,56,53,95,112,97,116,104,115,0), String.fromCharCode(101,120,112,108,97,105,110,95,51,95,53,0)];
          let pcopy_3sn = String.fromCharCode(115,116,97,116,117,115,95,117,95,52,50,0);
          let forwardh = 0.0;
         t_unlockZ.push(3 & parseInt(`${halffieldimaged}`));
         loginb += "3";
         holder3 = new Map([[`${forwardh}`, (pcopy_3sn == String.fromCharCode(55,0) ? parseInt(`${forwardh}`) : pcopy_3sn.length)]]);
         castingq = [castingq.length];
         break;
      }
          let analyticsE = String.fromCharCode(103,95,52,53,0);
          let libswscale5: Map<any, any> = new Map([[String.fromCharCode(117,95,49,53,95,115,109,111,111,116,104,108,121,0),207], [String.fromCharCode(99,111,112,105,101,115,95,51,95,53,51,0),311]]);
          let mbjscommonD = String.fromCharCode(110,111,99,104,101,99,107,95,101,95,56,57,0);
         halffieldimaged -= parseFloat(`${3}`);
         analyticsE += `${(mbjscommonD == String.fromCharCode(99,0) ? analyticsE.length : mbjscommonD.length)}`;
         libswscale5 = new Map([[analyticsE, mbjscommonD.length * analyticsE.length]]);
      for (let q = 0; q < 1; q++) {
          let libcrashsdki = 1.0;
          let moonR: Array<any> = [585, 702];
          let moviesf: Array<any> = [945, 770, 477];
          let assistQ = String.fromCharCode(115,117,98,116,101,120,116,95,48,95,55,50,0);
          let filledh = false;
         loginn ^= 1;
         libcrashsdki -= 3;
         moonR = [(String.fromCharCode(88,0) == assistQ ? parseInt(`${libcrashsdki}`) : assistQ.length)];
         moviesf.push(1);
         filledh = String.fromCharCode(109,0) == assistQ && libcrashsdki >= 70.24;
      }
         backgroundO -= backgroundO / (Math.max(loginn, 1));
      let cornerkickT = halffieldimaged <= 6406614.0;
      do {
          let cedbadcebfbfbfbcfecbc5 = String.fromCharCode(100,99,113,117,97,110,116,95,107,95,55,48,0);
          let templateprocessor1 = String.fromCharCode(103,101,110,99,98,95,52,95,49,57,0);
         halffieldimaged += parseFloat(`${t_unlockZ.length}`);
         cedbadcebfbfbfbcfecbc5 += `${cedbadcebfbfbfbcfecbc5.length}`;
         templateprocessor1 += `${cedbadcebfbfbfbcfecbc5.length << (Math.min(Math.abs(1), 4))}`;
         if (cornerkickT) {
            break;
         }
      } while (cornerkickT && (1.68 == (1.94 + halffieldimaged)));
      while (halffieldimaged < parseFloat(`${t_unlockZ.length}`)) {
         t_unlockZ = [loginn];
         break;
      }
         loginn += loginn >> (Math.min(5, Math.abs(2)));
         halffieldimaged += parseFloat(`${3}`);
         loginn &= t_unlockZ.length * 2;
         t_unlockZ.push(parseInt(`${halffieldimaged}`));
         t_unlockZ = [t_unlockZ.length];
      downarrowQ = clearY.length >= 64;
      if (turno) {
         break;
      }
   } while (turno && (!downarrowQ));
   while (!downarrowQ && core7.length <= 4) {
      downarrowQ = clearY.length > 4;
      break;
   }
      setDismountPlayer(false); 
    }
    
  };
  
  

  
  
  
  

  
  
  
  
  
  
  

  
  
  
  
  
  
  
  //   return () => clearInterval(interval)
  

  useEffect(() => {
    if (vod) {
      setInitTime(vod?.timeWatched);
      setReadyPlay(false);

      

      
      mayi_push.playsViewsAnalytics({
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
      mayi_CrossChat.getDetail(
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
       let cast6 = String.fromCharCode(114,101,103,105,115,116,114,97,110,116,95,53,95,54,49,0);
    let redscoreballQ = 5;
    let f_titlel: Map<any, any> = new Map([[String.fromCharCode(100,95,53,54,95,97,117,116,111,99,111,114,114,101,108,97,116,101,0),268], [String.fromCharCode(117,95,51,55,95,106,117,115,116,0),426], [String.fromCharCode(121,95,50,57,95,97,112,102,115,0),676]]);
    let abouto = String.fromCharCode(97,115,115,101,109,98,108,101,95,53,95,54,53,0);
    let issubS: Array<any> = [561, 111, 436];
    let humidityl = 1;
    let manifestS = true;
    let stylesN = 0;
    let backicono = String.fromCharCode(119,95,53,53,95,114,101,112,108,105,101,114,115,0);
       let saveC = String.fromCharCode(104,95,49,55,95,107,110,111,98,0);
      let videovarB = saveC == String.fromCharCode(108,118,119,110,51,102,104,0);
      do {
          let cornerkick_ = String.fromCharCode(108,95,57,56,95,112,114,105,111,114,105,116,121,113,0);
          let loginj = 1.0;
          let bodanp: Map<any, any> = new Map([[String.fromCharCode(114,119,110,100,95,48,95,55,55,0),220], [String.fromCharCode(112,95,56,52,95,114,103,98,0),963], [String.fromCharCode(115,99,97,108,101,114,95,100,95,50,56,0),924]]);
          let darkB = String.fromCharCode(111,95,52,52,95,114,101,115,111,108,118,101,114,115,0);
          let librrc2 = String.fromCharCode(119,97,108,108,95,113,95,54,54,0);
         saveC += `${saveC.length ^ 3}`;
         cornerkick_ = `${cornerkick_.length}`;
         loginj += (cornerkick_ == String.fromCharCode(65,0) ? cornerkick_.length : parseInt(`${loginj}`));
         bodanp.set(`${loginj}`, (cornerkick_ == String.fromCharCode(108,0) ? parseInt(`${loginj}`) : cornerkick_.length));
         darkB += `${2 ^ librrc2.length}`;
         librrc2 = `${(librrc2 == String.fromCharCode(115,0) ? bodanp.size : librrc2.length)}`;
         if (videovarB) {
            break;
         }
      } while ((1 == saveC.length) && videovarB);
      for (let v = 0; v < 2; v++) {
         saveC += `${saveC.length << (Math.min(Math.abs(3), 5))}`;
      }
      if (saveC.length >= 1) {
         saveC = "1";
      }
      f_titlel = new Map([[`${stylesN}`, humidityl]]);
      redscoreballQ += (String.fromCharCode(100,0) == abouto ? abouto.length : issubS.length);
   while (3 < (stylesN / (Math.max(10, f_titlel.size))) || 3 < (f_titlel.size / (Math.max(2, stylesN)))) {
      f_titlel.set(`${abouto}`, abouto.length | 3);
      break;
   }
      abouto += `${humidityl % (Math.max(f_titlel.size, 6))}`;

    const promise = async () => downloadedVod?.vod;

      stylesN %= Math.max(1, (String.fromCharCode(89,0) == cast6 ? humidityl : cast6.length));
   if (f_titlel.size >= abouto.length) {
      abouto = "3";
   }
   if (2 <= (1 & redscoreballQ)) {
      redscoreballQ <<= Math.min(2, Math.abs(f_titlel.size));
   }
      abouto += `${(2 + (manifestS ? 2 : 5))}`;
    if (isOffline) {

      manifestS = 42 < stylesN || cast6.length < 42;
   for (let n = 0; n < 2; n++) {
       let uploadS = String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,95,105,95,53,0);
       let logoutt = String.fromCharCode(102,95,50,52,95,110,101,119,108,105,110,101,115,0);
       let detailsw = 4;
          let updatesd: Array<any> = [224, 713, 496];
          let regenga: Map<any, any> = new Map([[String.fromCharCode(109,117,120,101,114,95,50,95,51,0),false ], [String.fromCharCode(112,114,111,112,97,103,97,116,101,95,101,95,54,50,0),true ]]);
         uploadS += `${1 ^ regenga.size}`;
         updatesd = [updatesd.length];
         regenga.set(`${updatesd.length}`, updatesd.length >> (Math.min(Math.abs(3), 1)));
         detailsw %= Math.max(5, (String.fromCharCode(48,0) == uploadS ? detailsw : uploadS.length));
          let zhubok = String.fromCharCode(105,95,57,48,95,101,116,97,100,97,116,97,0);
         logoutt += "1";
         zhubok = `${(String.fromCharCode(56,0) == zhubok ? zhubok.length : zhubok.length)}`;
         detailsw -= uploadS.length;
      for (let z = 0; z < 3; z++) {
         uploadS = `${detailsw}`;
      }
      let shrinkx = logoutt.length <= 9205410;
      do {
         logoutt += `${detailsw}`;
         if (shrinkx) {
            break;
         }
      } while (shrinkx && (!logoutt.includes(`${uploadS.length}`)));
      while (logoutt.endsWith(`${detailsw}`)) {
          let yellowcirclebgn = String.fromCharCode(99,95,56,52,95,112,117,114,112,111,115,101,0);
          let uimanagerA: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,109,98,105,110,101,95,53,95,57,49,0),350], [String.fromCharCode(118,97,108,105,100,97,116,101,95,109,95,55,55,0),166]]);
          let uploadw = true;
          let nativeexi = String.fromCharCode(97,108,114,101,97,100,121,95,109,95,57,52,0);
         detailsw >>= Math.min(Math.abs(detailsw ^ 3), 1);
         yellowcirclebgn = "3";
         uimanagerA.set(`${uploadw}`, 1 + yellowcirclebgn.length);
         nativeexi = `${(nativeexi == String.fromCharCode(55,0) ? (uploadw ? 2 : 1) : nativeexi.length)}`;
         break;
      }
         detailsw *= 1;
      let shootu = String.fromCharCode(122,112,118,0) == logoutt;
      do {
         logoutt += `${uploadS.length}`;
         if (shootu) {
            break;
         }
      } while (shootu && (2 >= (5 << (Math.min(5, Math.abs(detailsw))))));
      abouto += `${2 + detailsw}`;
   }
   let whiteP = issubS.length >= 4991100;
   do {
       let movies2 = 2.0;
       let layoutm = String.fromCharCode(97,114,110,114,95,121,95,49,55,0);
       let smallbrightnessQ = false;
       let liveo: Map<any, any> = new Map([[String.fromCharCode(111,116,104,101,114,95,113,95,55,57,0),325], [String.fromCharCode(117,95,52,52,95,98,105,116,118,101,99,115,0),783]]);
          let notification3 = String.fromCharCode(100,95,53,95,112,111,112,117,112,0);
         smallbrightnessQ = parseInt(`${movies2}`) <= liveo.size;
         notification3 += `${notification3.length}`;
         layoutm = `${layoutm.length}`;
          let smallbrightnessx = 5.0;
          let middlewareD = String.fromCharCode(112,101,114,115,111,110,97,108,95,117,95,55,0);
         layoutm = `${parseInt(`${movies2}`)}`;
         smallbrightnessx *= (middlewareD == String.fromCharCode(121,0) ? parseInt(`${smallbrightnessx}`) : middlewareD.length);
       let logoC = String.fromCharCode(97,95,57,51,95,97,99,107,110,111,119,108,101,100,103,101,0);
      while ((logoC.length + liveo.size) > 3 && (logoC.length + 3) > 5) {
          let holderP: Map<any, any> = new Map([[String.fromCharCode(99,111,109,98,101,100,95,103,95,51,54,0),63], [String.fromCharCode(110,95,54,51,95,115,107,105,112,112,101,100,0),821]]);
          let pressureP = true;
          let sell1: Array<any> = [361, 272];
         liveo = new Map([[`${smallbrightnessQ}`, parseInt(`${movies2}`) + 2]]);
         holderP.set(`${sell1.length}`, 2);
         pressureP = sell1.length == 98 && pressureP;
         break;
      }
      if (!smallbrightnessQ) {
         liveo = new Map([[`${liveo.size}`, liveo.size]]);
      }
         movies2 += logoC.length;
       let libturbomodulejsijniO = false;
       let iconbackwhiter = true;
      for (let h = 0; h < 2; h++) {
          let playercommonC: Array<any> = [168, 254, 645];
          let libfileS: Array<any> = [244, 409];
          let profilepicy: Array<any> = [String.fromCharCode(99,95,57,51,95,121,98,121,114,0), String.fromCharCode(108,95,57,56,95,116,114,117,110,0)];
          let yellowtoredn = 5.0;
          let carouselt = String.fromCharCode(113,95,56,50,95,98,117,105,108,100,99,111,110,102,0);
         smallbrightnessQ = (layoutm.length << (Math.min(carouselt.length, 4))) <= 58;
         playercommonC.push(libfileS.length | 2);
         libfileS = [playercommonC.length];
         profilepicy.push(libfileS.length >> (Math.min(Math.abs(2), 2)));
         yellowtoredn /= Math.max(2, playercommonC.length);
         carouselt += `${libfileS.length}`;
      }
         smallbrightnessQ = logoC == String.fromCharCode(57,0) && liveo.size <= 8;
         smallbrightnessQ = movies2 >= 56.3;
      for (let r = 0; r < 2; r++) {
         iconbackwhiter = 9.11 < movies2;
      }
      issubS.push(((smallbrightnessQ ? 2 : 4) % (Math.max(liveo.size, 4))));
      if (whiteP) {
         break;
      }
   } while ((issubS.length == 4) && whiteP);
      f_titlel.set(abouto, abouto.length);
      console.debug("is offline");

   for (let t = 0; t < 3; t++) {
      humidityl %= Math.max(abouto.length, 4);
   }
       let libavformatO = String.fromCharCode(117,95,55,54,95,115,116,114,103,108,111,98,0);
       let selectionJ = 1;
         selectionJ |= selectionJ & libavformatO.length;
      let detailsF = selectionJ <= 5308811;
      do {
          let downe = false;
         selectionJ -= 1 - selectionJ;
         downe = (!downe ? downe : downe);
         if (detailsF) {
            break;
         }
      } while (detailsF && (selectionJ == libavformatO.length));
      for (let d = 0; d < 3; d++) {
          let trashf = 1.0;
          let trasha = 1.0;
         selectionJ >>= Math.min(4, Math.abs(libavformatO.length >> (Math.min(2, Math.abs(selectionJ)))));
         trashf -= 1 | parseInt(`${trashf}`);
         trasha += parseFloat(`${parseInt(`${trasha}`) | 1}`);
      }
      if (1 < (libavformatO.length << (Math.min(3, Math.abs(selectionJ))))) {
          let dialogt = String.fromCharCode(110,105,98,95,119,95,55,53,0);
          let cnewinterstitialZ = 1.0;
          let umengo = 2;
         libavformatO += "1";
         dialogt = `${dialogt.length}`;
         cnewinterstitialZ += dialogt.length;
         umengo %= Math.max(dialogt.length, 2);
      }
         selectionJ >>= Math.min(4, Math.abs(selectionJ));
          let scrollview7: Array<any> = [902, 665];
          let trashl = String.fromCharCode(102,105,108,116,101,114,102,110,95,97,95,54,48,0);
          let nodek = String.fromCharCode(114,101,103,105,115,116,114,97,114,95,109,95,53,54,0);
         libavformatO += `${scrollview7.length * 2}`;
         scrollview7 = [nodek.length];
         trashl = `${trashl.length}`;
         nodek += `${trashl.length >> (Math.min(Math.abs(1), 3))}`;
      stylesN *= 2 * libavformatO.length;
      f_titlel = new Map([[`${f_titlel.size}`, (f_titlel.size % (Math.max(1, (manifestS ? 4 : 4))))]]);
      backicono = `${((manifestS ? 2 : 4) >> (Math.min(Math.abs(3), 1)))}`;
      return promise();
    } else {

       let assistj = false;
       let countdownv: Map<any, any> = new Map([[String.fromCharCode(101,114,114,108,111,103,95,104,95,50,0),false ], [String.fromCharCode(100,95,49,51,95,99,108,111,115,101,100,0),true ], [String.fromCharCode(106,95,53,54,95,99,111,117,110,116,101,100,0),false ]]);
       let cancel3: Map<any, any> = new Map([[String.fromCharCode(98,114,105,100,103,105,110,103,95,106,95,50,52,0),289], [String.fromCharCode(115,116,100,95,113,95,49,48,48,0),67], [String.fromCharCode(122,95,55,51,95,116,114,97,110,115,108,97,116,105,111,110,0),506]]);
       let basketballicon9 = String.fromCharCode(114,101,115,95,107,95,55,49,0);
       let hongkonga = String.fromCharCode(110,95,50,56,95,101,120,115,115,0);
          let leakcheckerK = false;
         basketballicon9 += `${2 & countdownv.size}`;
         leakcheckerK = !leakcheckerK;
         cancel3 = new Map([[`${cancel3.size}`, cancel3.size]]);
      if ((countdownv.size ^ 4) <= 4) {
          let delegate_yR: Array<any> = [430, 404, 216];
          let favoriteG: Array<any> = [575, 589];
          let banner9 = String.fromCharCode(119,95,54,48,95,108,97,116,101,110,99,121,0);
         countdownv.set(`${delegate_yR.length}`, delegate_yR.length);
         favoriteG.push(3);
         banner9 += `${banner9.length / 2}`;
      }
      if (hongkonga.includes(basketballicon9)) {
         basketballicon9 += "1";
      }
      for (let d = 0; d < 1; d++) {
          let p_unlockr = 5;
          let teamk = 0.0;
         basketballicon9 += `${hongkonga.length / (Math.max(2, 10))}`;
         p_unlockr |= parseInt(`${teamk}`);
         teamk += parseFloat(`${parseInt(`${teamk}`)}`);
      }
      let themeh = String.fromCharCode(114,109,105,100,52,106,104,107,103,110,0) == hongkonga;
      do {
         hongkonga = `${((assistj ? 3 : 5) / (Math.max(5, basketballicon9.length)))}`;
         if (themeh) {
            break;
         }
      } while (themeh && (cancel3.size <= hongkonga.length));
         countdownv = new Map([[`${cancel3.size}`, (cancel3.size >> (Math.min(5, Math.abs((assistj ? 3 : 1)))))]]);
      if (!basketballicon9.endsWith(`${cancel3.size}`)) {
         basketballicon9 += `${3 & countdownv.size}`;
      }
      stylesN %= Math.max(2, 4);
   let stationsD = humidityl >= 9638352;
   do {
      humidityl /= Math.max(redscoreballQ << (Math.min(5, Math.abs(2))), 5);
      if (stationsD) {
         break;
      }
   } while (stationsD && (4 <= (5 & redscoreballQ) && 3 <= (humidityl & 5)));
   while (5 == (backicono.length << (Math.min(4, Math.abs(stylesN))))) {
       let fieldX = String.fromCharCode(117,116,117,114,101,95,100,95,49,48,0);
       let expandQ: Map<any, any> = new Map([[String.fromCharCode(103,95,49,49,95,99,97,114,0),false ], [String.fromCharCode(122,95,53,49,95,114,101,102,108,101,99,116,0),true ]]);
      let reactnativejs7 = String.fromCharCode(106,113,117,48,52,49,119,54,0) == fieldX;
      do {
         fieldX += "1";
         if (reactnativejs7) {
            break;
         }
      } while ((4 == (expandQ.size % 3)) && reactnativejs7);
         fieldX = `${2 & expandQ.size}`;
       let iconmorec = String.fromCharCode(114,101,113,117,101,115,116,97,98,108,101,95,122,95,56,57,0);
          let iconclosewhitewithbgN = 2.0;
          let mimew = String.fromCharCode(113,110,111,115,95,118,95,50,55,0);
          let whiteanimationliveF = 2;
         iconmorec = `${whiteanimationliveF % (Math.max(iconmorec.length, 4))}`;
         iconclosewhitewithbgN /= Math.max(1, parseFloat(`${3}`));
         mimew = `${parseInt(`${iconclosewhitewithbgN}`) * 2}`;
         whiteanimationliveF /= Math.max(4, parseInt(`${iconclosewhitewithbgN}`) / (Math.max(2, mimew.length)));
      while (4 == (fieldX.length | 3) && 3 == (expandQ.size | 3)) {
          let privacyM = true;
         fieldX += `${expandQ.size}`;
         privacyM = (!privacyM ? !privacyM : privacyM);
         break;
      }
         expandQ.set(`${fieldX}`, 1 & expandQ.size);
      backicono = `${humidityl}`;
      break;
   }
   if ((stylesN << (Math.min(Math.abs(redscoreballQ), 2))) <= 2) {
       let profileactivex: Array<any> = [171, 472];
         profileactivex.push(1);
         profileactivex = [profileactivex.length ^ profileactivex.length];
      for (let q = 0; q < 1; q++) {
          let libimagepipelineq = 5.0;
          let libturbomodulejsijnie = String.fromCharCode(104,95,50,48,95,115,108,97,115,104,0);
         profileactivex = [libturbomodulejsijnie.length];
         libimagepipelineq /= Math.max(3, 1);
         libturbomodulejsijnie += "1";
      }
      redscoreballQ -= ((manifestS ? 1 : 5) / (Math.max(7, f_titlel.size)));
   }
      console.debug("not offline");

       let videocommonu = String.fromCharCode(106,95,53,55,95,97,99,99,101,112,116,115,0);
       let manifestk = 4;
       let heartX = true;
          let eabafadfadddbafeddddeeefeaaf6 = false;
         videocommonu = `${1 ^ videocommonu.length}`;
         eabafadfadddbafeddddeeefeaaf6 = !eabafadfadddbafeddddeeefeaaf6;
         manifestk ^= manifestk;
         heartX = 32 >= videocommonu.length;
      for (let a = 0; a < 3; a++) {
         manifestk %= Math.max(5, videocommonu.length / 3);
      }
       let chartA = String.fromCharCode(97,118,117,116,105,108,95,117,95,51,50,0);
         chartA = `${3 * manifestk}`;
      for (let n = 0; n < 3; n++) {
         chartA = `${(String.fromCharCode(87,0) == videocommonu ? chartA.length : videocommonu.length)}`;
      }
      let logouserl = chartA.length <= 7324511;
      do {
         chartA = `${((heartX ? 4 : 5) ^ 3)}`;
         if (logouserl) {
            break;
         }
      } while (logouserl && (heartX));
      for (let v = 0; v < 1; v++) {
          let iconsubssuccessw = String.fromCharCode(108,95,54,56,95,115,99,113,117,101,114,121,0);
          let smalli: Array<any> = [592, 739];
          let valuesP: Array<any> = [684, 246, 913];
         manifestk ^= smalli.length;
         iconsubssuccessw = `${iconsubssuccessw.length}`;
         smalli.push(iconsubssuccessw.length >> (Math.min(3, valuesP.length)));
         valuesP = [iconsubssuccessw.length];
      }
      humidityl *= (String.fromCharCode(76,0) == abouto ? redscoreballQ : abouto.length);
      f_titlel = new Map([[`${redscoreballQ}`, ((manifestS ? 2 : 3) % (Math.max(redscoreballQ, 9)))]]);
      issubS.push(stylesN * 1);
   if (1 >= f_titlel.size) {
       let chatroombackgroundT = 0;
      for (let u = 0; u < 1; u++) {
         chatroombackgroundT += chatroombackgroundT + chatroombackgroundT;
      }
      let penaltyshootv = 8885664 >= chatroombackgroundT;
      do {
         chatroombackgroundT /= Math.max(2, 2);
         if (penaltyshootv) {
            break;
         }
      } while (penaltyshootv && (2 >= (chatroombackgroundT / (Math.max(4, 8))) && (chatroombackgroundT / (Math.max(5, chatroombackgroundT))) >= 4));
          let whatsappR = 0.0;
         chatroombackgroundT <<= Math.min(Math.abs(chatroombackgroundT / (Math.max(parseInt(`${whatsappR}`), 9))), 4);
      cast6 = `${f_titlel.size}`;
   }
      return fetchVodDetails();
    }
  };

  const { data: vodDetails, isFetching: isFetchingVodDetails } = useQuery({
    queryKey: ["vodDetails", vod?.vod_id, isOffline],
    queryFn: () => handleFetchVodDetail(),
  });

  const fetchBannerAd = async () => {
       let singleD = true;
    let righti: Map<any, any> = new Map([[String.fromCharCode(108,95,55,49,95,115,99,97,108,97,114,109,117,108,116,0),true ], [String.fromCharCode(114,97,109,112,95,50,95,51,56,0),true ]]);
    let interstitialk = 3.0;
    let nalyticsL = String.fromCharCode(107,95,49,48,48,95,99,97,112,105,116,97,108,105,122,105,110,103,0);
    let langkeye: Array<any> = [911, 718];
    let upgradeE: Map<any, any> = new Map([[String.fromCharCode(97,100,106,117,115,116,109,101,110,116,95,104,95,53,0),316], [String.fromCharCode(119,95,55,95,104,97,114,100,116,104,114,101,115,104,0),667], [String.fromCharCode(120,95,57,54,95,118,99,120,112,114,111,106,0),772]]);
    let formH = String.fromCharCode(112,101,114,115,111,110,115,95,103,95,49,49,0);
    let kuaishouq = 0.0;
    let codegeng = 2.0;
    let qaagW = String.fromCharCode(106,95,52,49,95,108,101,97,102,0);
    let reactnavigation7 = 0.0;
    let dicen: Array<any> = [String.fromCharCode(113,95,52,52,95,112,111,114,116,97,105,116,0), String.fromCharCode(105,95,51,57,95,105,110,100,105,99,97,116,111,114,0), String.fromCharCode(117,95,56,49,95,100,101,108,101,103,97,116,105,111,110,0)];
    let verticalw = 3.0;
    let libimagepipelineX = String.fromCharCode(100,95,49,48,95,97,108,108,111,99,99,111,109,109,111,110,0);
    let statistics0 = true;
   for (let s = 0; s < 2; s++) {
      langkeye = [3 & righti.size];
   }
      langkeye = [parseInt(`${kuaishouq}`) & 2];
   while (5.94 <= (interstitialk / (Math.max(upgradeE.size, 2))) || 5 <= (upgradeE.size & 2)) {
      upgradeE = new Map([[`${kuaishouq}`, formH.length]]);
      break;
   }
      formH += `${(formH.length ^ (singleD ? 5 : 1))}`;
   if (4 < (nalyticsL.length * 5)) {
      upgradeE = new Map([[`${upgradeE.size}`, langkeye.length]]);
   }

    const bannerRes = await mayi_ConstCheckbox.getBannerAd(adultMode ? 113 : 112);
    const banner = bannerRes.ads;

       let temperaturep = false;
       let tempnodatagifx: Map<any, any> = new Map([[String.fromCharCode(97,115,115,105,103,110,109,101,110,116,95,113,95,55,57,0),527], [String.fromCharCode(103,114,97,110,112,111,115,95,113,95,57,53,0),362]]);
       let gemfileX: Map<any, any> = new Map([[String.fromCharCode(115,95,50,54,95,114,101,103,105,115,116,101,114,115,0),904], [String.fromCharCode(97,95,53,56,95,115,97,116,117,114,97,116,101,0),729], [String.fromCharCode(117,95,52,48,95,118,101,99,116,111,114,115,0),86]]);
       let mergera = String.fromCharCode(102,117,110,103,105,98,108,101,115,95,102,95,50,50,0);
       let whitevideoliveu = String.fromCharCode(115,95,51,49,95,115,99,97,108,101,115,0);
      while (tempnodatagifx.size == 3) {
          let singleY = String.fromCharCode(108,95,52,48,95,115,112,101,99,105,102,105,99,97,116,105,111,110,0);
          let statsP = 4.0;
          let sheete = 0;
         whitevideoliveu += `${singleY.length % (Math.max(3, whitevideoliveu.length))}`;
         singleY = `${sheete}`;
         statsP -= parseFloat(`${sheete >> (Math.min(Math.abs(parseInt(`${statsP}`)), 1))}`);
         break;
      }
          let matchm = true;
         tempnodatagifx.set(`${gemfileX.size}`, 1 ^ tempnodatagifx.size);
         matchm = (!matchm ? !matchm : matchm);
      for (let l = 0; l < 2; l++) {
          let shrinkb = String.fromCharCode(101,110,97,98,108,101,95,112,95,51,54,0);
          let benefitB = String.fromCharCode(118,95,53,57,95,115,104,111,114,116,101,110,0);
          let foundS = String.fromCharCode(98,97,115,105,99,95,122,95,52,53,0);
          let bridgeo = String.fromCharCode(116,95,50,55,95,99,104,101,99,107,115,117,109,109,101,100,0);
         whitevideoliveu = `${(1 ^ (temperaturep ? 1 : 2))}`;
         shrinkb = `${3 | bridgeo.length}`;
         benefitB = "3";
         foundS = `${benefitB.length % 2}`;
         bridgeo += `${2 - bridgeo.length}`;
      }
      while (!temperaturep) {
         gemfileX.set(whitevideoliveu, 1);
         break;
      }
      if (2 > (tempnodatagifx.size ^ 5)) {
          let predictiondefaultr = String.fromCharCode(101,108,105,115,105,111,110,95,103,95,56,53,0);
          let holderB = 4.0;
          let libavfilterc = false;
          let coret = 5;
          let upgrade3 = String.fromCharCode(107,95,55,55,95,115,104,117,102,102,108,101,112,108,97,110,101,115,0);
         temperaturep = 9 == coret || 9 == gemfileX.size;
         predictiondefaultr = `${predictiondefaultr.length}`;
         holderB *= upgrade3.length;
         libavfilterc = holderB < predictiondefaultr.length;
         coret |= ((libavfilterc ? 5 : 5));
         upgrade3 = `${upgrade3.length / (Math.max(1, 3))}`;
      }
      for (let g = 0; g < 2; g++) {
         temperaturep = 25 > whitevideoliveu.length;
      }
         gemfileX.set(`${temperaturep}`, (tempnodatagifx.size >> (Math.min(3, Math.abs((temperaturep ? 5 : 1))))));
      let tick2 = String.fromCharCode(110,50,121,106,122,112,0) == whitevideoliveu;
      do {
         whitevideoliveu = `${(gemfileX.size >> (Math.min(1, Math.abs((temperaturep ? 2 : 4)))))}`;
         if (tick2) {
            break;
         }
      } while (tick2 && (mergera == String.fromCharCode(56,0)));
      righti = new Map([[`${singleD}`, ((singleD ? 4 : 3) * 2)]]);
   if (!qaagW.endsWith(formH)) {
      formH = `${upgradeE.size + 1}`;
   }
       let g_managerE = String.fromCharCode(112,95,56,95,114,101,115,112,101,99,116,105,110,103,0);
       let libavcodecM: Map<any, any> = new Map([[String.fromCharCode(112,97,114,101,110,116,104,101,115,101,115,95,110,95,57,49,0),false ], [String.fromCharCode(104,99,104,114,111,109,97,95,110,95,54,55,0),false ], [String.fromCharCode(112,111,115,116,112,114,111,99,114,101,115,95,100,95,50,49,0),true ]]);
         g_managerE += `${libavcodecM.size}`;
      for (let l = 0; l < 2; l++) {
         libavcodecM.set(`${g_managerE}`, g_managerE.length >> (Math.min(5, Math.abs(libavcodecM.size))));
      }
         g_managerE = `${libavcodecM.size}`;
         g_managerE += "2";
       let checkboxN: Map<any, any> = new Map([[String.fromCharCode(101,95,53,56,95,117,114,105,0),970], [String.fromCharCode(118,95,49,52,95,101,97,115,101,0),708], [String.fromCharCode(97,100,100,98,108,107,95,121,95,50,55,0),236]]);
      let thumbnail6 = libavcodecM.size >= 7189859;
      do {
          let scrollviewd = 0.0;
          let dycreatorg = String.fromCharCode(98,95,53,50,95,116,111,100,97,121,0);
          let runtimeK = true;
         libavcodecM.set(g_managerE, g_managerE.length);
         scrollviewd -= parseInt(`${scrollviewd}`) >> (Math.min(Math.abs(1), 4));
         dycreatorg = `${((runtimeK ? 2 : 3))}`;
         runtimeK = 59 > dycreatorg.length || 38.88 > scrollviewd;
         if (thumbnail6) {
            break;
         }
      } while (thumbnail6 && (g_managerE.includes(`${libavcodecM.size}`)));
      langkeye.push(g_managerE.length);
   let bridgem = interstitialk >= 9491419.0;
   do {
      interstitialk += (formH == String.fromCharCode(51,0) ? formH.length : qaagW.length);
      if (bridgem) {
         break;
      }
   } while (bridgem && ((4.90 + interstitialk) <= 1.50 && singleD));
   if (formH.length < 5 || singleD) {
      formH = `${(parseInt(`${reactnavigation7}`) * (singleD ? 5 : 2))}`;
   }

    if (banner) {

       let trashK = String.fromCharCode(97,95,54,56,95,99,108,101,97,114,105,0);
         trashK += `${(String.fromCharCode(88,0) == trashK ? trashK.length : trashK.length)}`;
         trashK = `${trashK.length}`;
          let native1 = 4.0;
         trashK += `${trashK.length}`;
         native1 *= parseFloat(`${parseInt(`${native1}`) + parseInt(`${native1}`)}`);
      codegeng *= 3 + trashK.length;
   for (let q = 0; q < 1; q++) {
      formH = `${parseInt(`${kuaishouq}`) / 1}`;
   }
      singleD = kuaishouq == parseFloat(`${qaagW.length}`);
      formH += "2";
       let foundo = 1;
       let relatedO = 3.0;
       let booto = 2.0;
         foundo &= 3;
      let stylesk = 5150766 >= foundo;
      do {
         foundo ^= parseInt(`${booto}`);
         if (stylesk) {
            break;
         }
      } while (stylesk && (4 >= foundo));
      while (relatedO <= 3.82) {
         relatedO += parseFloat(`${parseInt(`${relatedO}`) ^ parseInt(`${booto}`)}`);
         break;
      }
      if (2 == (foundo | 4) || 1.37 == (parseFloat(`${foundo}`) - relatedO)) {
         foundo *= parseInt(`${relatedO}`);
      }
         booto += foundo;
         relatedO -= parseFloat(`${foundo - 2}`);
         relatedO -= parseFloat(`${parseInt(`${relatedO}`) << (Math.min(4, Math.abs(1)))}`);
      let eacte = 8818123.0 >= relatedO;
      do {
          let libreact8 = 2;
         relatedO -= parseFloat(`${1 & parseInt(`${booto}`)}`);
         libreact8 %= Math.max(3 ^ libreact8, 1);
         if (eacte) {
            break;
         }
      } while ((1.50 <= booto) && eacte);
       let predictiondefaults = String.fromCharCode(98,105,108,105,110,101,97,114,95,105,95,51,49,0);
       let leakcheckerW = String.fromCharCode(113,95,57,50,95,111,102,102,101,114,101,100,0);
      codegeng += 3 ^ libimagepipelineX.length;
      setBannerAd(banner);
    } else {

   let predictionactiveq = 5141772.0 <= codegeng;
   do {
      codegeng *= qaagW.length;
      if (predictionactiveq) {
         break;
      }
   } while (predictionactiveq && (1.60 < (codegeng - 3.38) || 2 < (2 + qaagW.length)));
   while (!libimagepipelineX.includes(`${righti.size}`)) {
      righti = new Map([[`${upgradeE.size}`, 2 << (Math.min(5, langkeye.length))]]);
      break;
   }
      righti.set(`${verticalw}`, (parseInt(`${verticalw}`) - (singleD ? 1 : 4)));
       let videocommonU: Map<any, any> = new Map([[String.fromCharCode(112,97,99,101,114,95,54,95,49,48,0),378], [String.fromCharCode(104,111,115,116,115,95,113,95,52,52,0),149]]);
         videocommonU = new Map([[`${videocommonU.size}`, videocommonU.size]]);
         videocommonU.set(`${videocommonU.size}`, 3 * videocommonU.size);
      for (let j = 0; j < 1; j++) {
         videocommonU.set(`${videocommonU.size}`, videocommonU.size);
      }
      formH = "3";
      formH += "1";
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
       let completeL = 3.0;
    let profileactiveQ = String.fromCharCode(101,116,104,101,114,116,117,112,108,105,115,95,115,95,55,55,0);
    let dialogZ = 0.0;
    let foregrounde = 1;
    let acceptedc = String.fromCharCode(108,95,52,57,95,97,100,100,114,101,115,115,0);
    let defaultlogoB = 0;
    let selectionL = false;
    let robotoJ = 1.0;
    let largep: Array<any> = [13, 959, 582];
    let cornershoott: Array<any> = [707, 161, 470];
       let reactnativejsV: Array<any> = [575, 816];
       let untickF = true;
      while (3 >= reactnativejsV.length || 3 >= (3 + reactnativejsV.length)) {
         reactnativejsV.push(reactnativejsV.length);
         break;
      }
      if (untickF) {
         untickF = reactnativejsV.includes(untickF);
      }
         untickF = reactnativejsV.length > 34;
      while ((reactnativejsV.length ^ 4) > 4) {
         reactnativejsV = [((untickF ? 1 : 2) * 1)];
         break;
      }
      for (let l = 0; l < 3; l++) {
         reactnativejsV.push(((untickF ? 1 : 2) / 2));
      }
      for (let c = 0; c < 3; c++) {
          let renewl = 4.0;
          let static_gfB = 0.0;
         untickF = 16 <= reactnativejsV.length;
         renewl += parseFloat(`${2}`);
         static_gfB -= parseFloat(`${1}`);
      }
      selectionL = reactnativejsV.length <= defaultlogoB;
      defaultlogoB /= Math.max(acceptedc.length, 3);
   if (profileactiveQ.endsWith(`${selectionL}`)) {
      selectionL = 11 > (dialogZ + foregrounde);
   }
   for (let u = 0; u < 2; u++) {
       let yellowanimationlive3 = String.fromCharCode(105,95,55,50,95,102,114,101,101,108,97,100,100,114,115,0);
       let animationJ = true;
       let componentregistryL = String.fromCharCode(105,110,99,114,109,101,114,103,101,95,48,95,55,0);
       let viewsi = String.fromCharCode(101,95,49,51,95,116,101,97,114,0);
          let applicationW = 0.0;
          let favicon6 = String.fromCharCode(98,95,50,53,95,102,108,97,99,101,110,99,0);
          let reportd: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,111,114,116,115,95,118,95,52,0),false ], [String.fromCharCode(97,95,56,95,115,115,114,99,115,0),false ]]);
         componentregistryL = `${parseInt(`${applicationW}`) ^ yellowanimationlive3.length}`;
         applicationW -= 2 * reportd.size;
         favicon6 += `${2 << (Math.min(1, favicon6.length))}`;
         reportd = new Map([[`${reportd.size}`, favicon6.length]]);
          let predictionbannerm = 2.0;
         viewsi = `${yellowanimationlive3.length}`;
         predictionbannerm /= Math.max(4, parseInt(`${predictionbannerm}`));
         yellowanimationlive3 = `${(componentregistryL.length & (animationJ ? 3 : 2))}`;
       let interstitialX = 3.0;
       let blacklist4 = 0.0;
      let modelsp = interstitialX <= 5572850.0;
      do {
         interstitialX *= parseFloat(`${componentregistryL.length}`);
         if (modelsp) {
            break;
         }
      } while (((interstitialX + blacklist4) >= 3.74 || 3.74 >= (blacklist4 + interstitialX)) && modelsp);
      for (let e = 0; e < 2; e++) {
         animationJ = !animationJ;
      }
      if (yellowanimationlive3.length >= 2) {
          let fillA = String.fromCharCode(111,95,55,57,95,100,121,97,100,105,99,0);
          let homeplayert = String.fromCharCode(101,118,105,99,116,95,117,95,50,51,0);
          let usernameu = String.fromCharCode(117,95,55,95,103,114,97,99,101,0);
         yellowanimationlive3 += `${((animationJ ? 1 : 4) | parseInt(`${blacklist4}`))}`;
         fillA = "1";
         homeplayert = `${(String.fromCharCode(104,0) == homeplayert ? homeplayert.length : fillA.length)}`;
         usernameu = `${2 - fillA.length}`;
      }
       let hookp = 5.0;
       let utils2 = 3.0;
         yellowanimationlive3 = "1";
         blacklist4 /= Math.max(1, parseFloat(`${yellowanimationlive3.length}`));
         hookp *= parseFloat(`${yellowanimationlive3.length ^ parseInt(`${blacklist4}`)}`);
       let bottomF = String.fromCharCode(104,101,108,100,95,54,95,53,51,0);
       let splash6 = String.fromCharCode(116,114,97,105,108,95,54,95,50,51,0);
      foregrounde += 3;
   }

    return mayi_CrossChat.getList({
      category: vod?.vod_class?.split(",").shift(),
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
    }).then((data) => {

   if (1.99 <= (defaultlogoB + completeL)) {
      completeL -= defaultlogoB;
   }
   for (let d = 0; d < 3; d++) {
      defaultlogoB += parseInt(`${dialogZ}`);
   }
   let screenL = 4935200 <= foregrounde;
   do {
      foregrounde <<= Math.min(2, Math.abs(parseInt(`${dialogZ}`)));
      if (screenL) {
         break;
      }
   } while (screenL && (5 == acceptedc.length));
       let materialF = 3;
       let mbnativee: Array<any> = [699, 226, 653];
      let predictionwind = 7598047 <= mbnativee.length;
      do {
         mbnativee.push(mbnativee.length << (Math.min(5, Math.abs(materialF))));
         if (predictionwind) {
            break;
         }
      } while (predictionwind && (3 > (mbnativee.length % 3)));
          let themes = false;
         materialF |= 1;
         themes = (!themes ? !themes : !themes);
         mbnativee = [mbnativee.length >> (Math.min(Math.abs(3), 3))];
      if (3 <= (mbnativee.length << (Math.min(Math.abs(4), 2))) && 3 <= (4 << (Math.min(5, Math.abs(materialF))))) {
          let reducerF = String.fromCharCode(107,95,52,49,95,98,105,116,115,113,112,0);
          let settingsd: Map<any, any> = new Map([[String.fromCharCode(105,100,101,110,116,105,102,105,101,114,95,53,95,56,53,0),false ], [String.fromCharCode(122,95,50,52,95,114,101,99,101,110,116,0),false ]]);
          let whistle2: Map<any, any> = new Map([[String.fromCharCode(107,95,51,51,95,100,101,112,116,104,0),809], [String.fromCharCode(101,110,99,114,121,112,116,105,111,110,95,105,95,56,49,0),180], [String.fromCharCode(100,95,49,57,95,99,111,110,115,116,97,110,116,115,0),580]]);
         materialF ^= 3;
         reducerF = `${whistle2.size}`;
         settingsd = new Map([[`${whistle2.size}`, whistle2.size]]);
      }
      for (let r = 0; r < 2; r++) {
          let memberF = 2.0;
         mbnativee = [2];
         memberF += parseInt(`${memberF}`) & parseInt(`${memberF}`);
      }
      while (1 == (mbnativee.length >> (Math.min(Math.abs(4), 2)))) {
         materialF &= 3;
         break;
      }
      profileactiveQ += "1";
      return data.List as mayi_LibswresampleModal[];
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
    mayi_CrossChat.getList({

      vod_source_name: vod?.vod_source_name,
      category: vod?.vod_class ? vod?.vod_class : vod?.type_name,
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
      rand: 1,
      xMode: true,
    }).then((data) => data.List as mayi_Iconarrowright[]);

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
       let awayiconF = String.fromCharCode(100,95,53,95,116,114,97,110,115,102,101,114,114,97,98,108,101,0);
    let thailands = String.fromCharCode(115,115,105,109,118,95,112,95,48,0);
    let modalZ: Array<any> = [43, 854, 984];
    let iconviewergifL: Map<any, any> = new Map([[String.fromCharCode(121,118,116,111,121,117,121,95,109,95,50,55,0),true ], [String.fromCharCode(109,111,100,101,99,111,115,116,115,95,122,95,50,56,0),false ], [String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,95,48,95,52,49,0),false ]]);
    let transferO: Array<any> = [782, 296, 745];
    let mapbufferG = String.fromCharCode(112,95,56,56,95,114,101,97,100,113,0);
    let sharedB = String.fromCharCode(112,114,111,99,101,100,117,114,101,115,95,114,95,51,55,0);
    let fastq = 0.0;
    let telemetryx = 1.0;
    let latn_ = 4.0;
    let nbatrophyp: Array<any> = [919, 246, 200];
    let greyarrowupJ = 3.0;
      modalZ.push(parseInt(`${latn_}`));
      fastq *= parseFloat(`${parseInt(`${fastq}`)}`);
   while (3.52 == (2.23 + telemetryx) && 1 == (1 * mapbufferG.length)) {
      telemetryx *= parseFloat(`${parseInt(`${latn_}`) / 2}`);
      break;
   }
      mapbufferG += "1";
   while (parseInt(`${fastq}`) < thailands.length) {
      fastq -= parseFloat(`${parseInt(`${telemetryx}`)}`);
      break;
   }
   for (let u = 0; u < 3; u++) {
      modalZ = [3 / (Math.max(8, modalZ.length))];
   }
   for (let i = 0; i < 1; i++) {
      transferO = [3];
   }
   while (5 > nbatrophyp.length) {
      nbatrophyp = [awayiconF.length];
      break;
   }
      sharedB += `${(String.fromCharCode(121,0) == awayiconF ? sharedB.length : awayiconF.length)}`;
       let iconsubssuccessS = String.fromCharCode(108,95,51,54,95,112,111,115,105,116,105,111,110,105,110,103,0);
       let streaming6 = 2;
         iconsubssuccessS = "2 - streaming6";
      if (!iconsubssuccessS.startsWith(`${streaming6}`)) {
          let expandH: Map<any, any> = new Map([[String.fromCharCode(97,100,100,95,120,95,49,0),false ], [String.fromCharCode(114,111,117,110,100,115,95,117,95,57,50,0),false ]]);
          let gemfilez = true;
         streaming6 += 3;
         expandH = new Map([[`${expandH.size}`, ((gemfilez ? 5 : 5) + expandH.size)]]);
         gemfilez = !gemfilez;
      }
          let linkM = 1;
          let securityU = 3.0;
         iconsubssuccessS = `${parseInt(`${securityU}`) << (Math.min(2, Math.abs(1)))}`;
         linkM += linkM;
         securityU += parseFloat(`${1}`);
         streaming6 |= streaming6 + 1;
          let resend2 = 5.0;
          let mbridge4 = false;
         iconsubssuccessS += "3 - streaming6";
         resend2 += parseInt(`${resend2}`) ^ 1;
         mbridge4 = resend2 >= 61.58;
         iconsubssuccessS += "3";
      iconviewergifL.set(awayiconF, awayiconF.length);

    

   for (let z = 0; z < 2; z++) {
      transferO = [1];
   }
      transferO = [(mapbufferG == String.fromCharCode(49,0) ? sharedB.length : mapbufferG.length)];
      thailands = `${iconviewergifL.size / (Math.max(3, 7))}`;
      nbatrophyp = [(String.fromCharCode(55,0) == sharedB ? sharedB.length : parseInt(`${fastq}`))];
   while (2 == (mapbufferG.length | transferO.length)) {
       let handlerp: Array<any> = [99, 886];
       let iconbackwhite6 = String.fromCharCode(99,111,108,111,114,115,112,97,99,101,100,115,112,95,100,95,56,54,0);
       let x_count3 = 0.0;
      while ((2.19 + x_count3) >= 3.97) {
          let qaagz = String.fromCharCode(106,105,116,116,101,114,95,55,95,53,48,0);
          let hongkong2 = String.fromCharCode(117,95,50,95,97,109,112,108,105,116,117,100,101,0);
          let episode6 = String.fromCharCode(117,110,109,97,116,99,104,101,100,95,52,95,50,54,0);
         x_count3 /= Math.max(1 / (Math.max(3, hongkong2.length)), 3);
         qaagz = `${(qaagz == String.fromCharCode(73,0) ? episode6.length : qaagz.length)}`;
         hongkong2 += `${episode6.length}`;
         break;
      }
      let resultJ = 6540759 <= iconbackwhite6.length;
      do {
          let reddownarrowK = String.fromCharCode(100,95,56,52,95,98,111,100,101,114,0);
          let hooka = false;
          let yellowtoredH = String.fromCharCode(115,117,98,115,116,114,105,110,103,95,57,95,48,0);
          let greytickc = 5.0;
          let constantsg = String.fromCharCode(110,95,50,54,95,116,105,112,115,0);
         iconbackwhite6 += `${yellowtoredH.length}`;
         reddownarrowK = `${(String.fromCharCode(120,0) == reddownarrowK ? (hooka ? 3 : 4) : reddownarrowK.length)}`;
         hooka = constantsg.length >= 77;
         yellowtoredH += `${constantsg.length}`;
         greytickc /= Math.max(3, constantsg.length >> (Math.min(Math.abs(1), 1)));
         if (resultJ) {
            break;
         }
      } while (resultJ && ((1.38 * x_count3) < 1.71 && 1 < (4 * iconbackwhite6.length)));
          let viewsl = false;
          let basketballtrophyG = 0.0;
         handlerp = [parseInt(`${basketballtrophyG}`)];
         viewsl = !viewsl;
         basketballtrophyG -= ((viewsl ? 1 : 5));
          let gemfile7: Array<any> = [String.fromCharCode(115,121,109,98,111,108,115,95,107,95,55,51,0), String.fromCharCode(115,95,49,53,95,103,101,111,0)];
          let weiboK = String.fromCharCode(109,101,110,116,105,111,110,115,95,113,95,56,51,0);
          let modeH = false;
         handlerp = [3 | parseInt(`${x_count3}`)];
         gemfile7 = [weiboK.length];
         weiboK += `${(String.fromCharCode(122,0) == weiboK ? gemfile7.length : weiboK.length)}`;
         modeH = weiboK.length < 39 || modeH;
      while ((iconbackwhite6.length % 5) > 3 || 5 > (iconbackwhite6.length % 5)) {
          let resultE: Map<any, any> = new Map([[String.fromCharCode(100,115,100,112,99,109,95,114,95,55,57,0),String.fromCharCode(99,95,55,49,95,114,116,97,100,100,114,115,0)], [String.fromCharCode(117,95,50,56,95,114,101,102,100,117,112,101,0),String.fromCharCode(99,97,108,101,110,100,97,114,95,99,95,56,49,0)], [String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,115,95,108,95,49,56,0),String.fromCharCode(112,114,111,103,114,101,115,115,101,115,95,121,95,50,54,0)]]);
          let downarroww = String.fromCharCode(100,105,115,112,115,97,98,108,101,95,107,95,49,56,0);
          let starB = String.fromCharCode(110,95,56,48,95,115,104,117,116,100,111,119,110,97,99,107,0);
         iconbackwhite6 = `${downarroww.length}`;
         resultE.set(`${starB}`, starB.length);
         downarroww += `${1 - starB.length}`;
         break;
      }
         iconbackwhite6 = `${parseInt(`${x_count3}`) ^ 2}`;
          let feedbacky: Array<any> = [173, 25];
         iconbackwhite6 = `${1 * parseInt(`${x_count3}`)}`;
         feedbacky = [feedbacky.length];
      let sendf = String.fromCharCode(101,105,118,112,111,0) == iconbackwhite6;
      do {
         iconbackwhite6 += `${(iconbackwhite6 == String.fromCharCode(109,0) ? iconbackwhite6.length : handlerp.length)}`;
         if (sendf) {
            break;
         }
      } while (sendf && (iconbackwhite6.length == handlerp.length));
       let miniB = String.fromCharCode(112,114,111,98,101,114,95,122,95,57,0);
      transferO = [parseInt(`${latn_}`)];
      break;
   }
      telemetryx *= parseFloat(`${nbatrophyp.length}`);
      fastq /= Math.max(parseFloat(`${2}`), 1);
   let runtimeM = 8160596 >= mapbufferG.length;
   do {
      mapbufferG += `${thailands.length}`;
      if (runtimeM) {
         break;
      }
   } while (runtimeM && (2 == awayiconF.length));
       let pointx = 5;
      if (pointx > pointx) {
         pointx <<= Math.min(1, Math.abs(pointx));
      }
         pointx |= pointx / 3;
      while (4 == pointx) {
         pointx /= Math.max(pointx << (Math.min(3, Math.abs(pointx))), 5);
         break;
      }
      iconviewergifL = new Map([[`${pointx}`, parseInt(`${telemetryx}`) & 3]]);
   if ((fastq / (Math.max(telemetryx, 7))) > 5.53) {
      telemetryx += (parseFloat(`${thailands == String.fromCharCode(110,0) ? thailands.length : iconviewergifL.size}`));
   }
    await refetch();

      awayiconF = `${nbatrophyp.length * mapbufferG.length}`;
   while (3 >= thailands.length) {
      nbatrophyp.push(parseInt(`${telemetryx}`));
      break;
   }
   for (let x = 0; x < 3; x++) {
       let awayM = String.fromCharCode(120,95,55,50,95,105,110,105,116,105,97,108,105,115,101,0);
       let codeV = false;
          let windl = 4.0;
          let moduleU: Map<any, any> = new Map([[String.fromCharCode(97,115,99,95,49,95,49,48,48,0),296], [String.fromCharCode(112,109,107,95,120,95,56,51,0),651], [String.fromCharCode(102,95,56,50,95,97,116,116,97,99,104,0),687]]);
         awayM = `${parseInt(`${windl}`)}`;
         windl += moduleU.size;
         moduleU.set(`${moduleU.size}`, moduleU.size ^ moduleU.size);
          let starq: Map<any, any> = new Map([[String.fromCharCode(108,97,116,105,110,95,98,95,52,57,0),String.fromCharCode(99,95,56,54,95,102,108,97,115,104,115,118,0)], [String.fromCharCode(111,95,50,55,95,99,111,97,108,101,115,99,101,0),String.fromCharCode(116,114,97,110,115,102,111,114,109,115,95,114,95,57,49,0)]]);
          let yellowv = String.fromCharCode(100,105,115,112,111,115,101,100,95,101,95,49,53,0);
          let downK: Map<any, any> = new Map([[String.fromCharCode(103,111,116,111,95,105,95,52,51,0),608], [String.fromCharCode(115,101,116,99,98,95,115,95,57,0),172]]);
         awayM = `${yellowv.length ^ 2}`;
         starq = new Map([[`${starq.size}`, 3]]);
         yellowv += `${2 - downK.size}`;
         downK = new Map([[`${downK.size}`, starq.size]]);
      if (!codeV) {
         codeV = (100 > ((!codeV ? awayM.length : 100) ^ awayM.length));
      }
          let showc: Array<any> = [String.fromCharCode(114,101,100,117,110,100,97,110,116,95,106,95,49,57,0), String.fromCharCode(104,95,55,52,95,115,101,99,111,110,100,115,0), String.fromCharCode(99,105,110,116,95,118,95,49,48,48,0)];
          let matchinactivef = String.fromCharCode(115,95,53,55,95,100,101,99,111,100,101,109,118,0);
         awayM += `${(awayM == String.fromCharCode(87,0) ? awayM.length : showc.length)}`;
         showc = [matchinactivef.length >> (Math.min(Math.abs(1), 4))];
         matchinactivef = `${matchinactivef.length}`;
         codeV = !codeV || awayM.length <= 3;
      for (let y = 0; y < 1; y++) {
         codeV = !codeV;
      }
      sharedB += "3";
   }
       let downloading7 = 3.0;
       let h_lockC = 1;
         h_lockC /= Math.max(1, 3 | h_lockC);
      for (let l = 0; l < 2; l++) {
         downloading7 *= h_lockC;
      }
      for (let v = 0; v < 2; v++) {
         downloading7 -= 3 ^ parseInt(`${downloading7}`);
      }
      if (4 == (3 * h_lockC) && (h_lockC / (Math.max(8, downloading7))) == 5.70) {
         h_lockC /= Math.max(5, h_lockC - 3);
      }
         downloading7 /= Math.max(4, 2 >> (Math.min(Math.abs(h_lockC), 3)));
      for (let h = 0; h < 3; h++) {
         downloading7 += parseInt(`${downloading7}`) - 1;
      }
      modalZ = [2];
       let confirmation8 = 2;
       let sentryG = String.fromCharCode(112,114,101,101,120,105,115,116,105,110,103,95,107,95,57,48,0);
         confirmation8 &= confirmation8;
      while (1 < (sentryG.length | 4)) {
         confirmation8 *= confirmation8;
         break;
      }
      for (let c = 0; c < 2; c++) {
         confirmation8 /= Math.max(3, 3);
      }
      if (2 <= (sentryG.length << (Math.min(5, Math.abs(confirmation8))))) {
         sentryG += `${sentryG.length}`;
      }
          let goallogo8 = 0;
         sentryG += `${confirmation8}`;
         goallogo8 *= 3 | goallogo8;
         confirmation8 ^= confirmation8;
      latn_ -= parseFloat(`${iconviewergifL.size - 1}`);
   if (transferO.includes(latn_)) {
      transferO.push(2);
   }
      telemetryx += parseFloat(`${1}`);
      fastq *= parseFloat(`${sharedB.length}`);
   if (!mapbufferG.endsWith(`${latn_}`)) {
      mapbufferG = `${transferO.length + mapbufferG.length}`;
   }
       let rncorei: Array<any> = [988, 80];
       let emoji1 = String.fromCharCode(108,101,116,115,95,51,95,51,0);
       let tempnodataG = String.fromCharCode(111,112,117,115,101,110,99,95,103,95,49,49,0);
      let iconstarz = emoji1.length <= 9335668;
      do {
          let dialogd = String.fromCharCode(114,95,54,50,95,117,110,104,105,100,101,0);
          let episodeq = String.fromCharCode(98,101,97,116,95,114,95,57,48,0);
         emoji1 = `${(dialogd == String.fromCharCode(66,0) ? tempnodataG.length : dialogd.length)}`;
         episodeq += `${3 ^ episodeq.length}`;
         if (iconstarz) {
            break;
         }
      } while (iconstarz && (3 < emoji1.length));
      while (emoji1.length > 5) {
         rncorei = [emoji1.length];
         break;
      }
      if (tempnodataG.length >= 4) {
         emoji1 += "2";
      }
       let predictionactiveV = String.fromCharCode(102,95,53,56,95,115,101,99,116,105,111,110,0);
      while (2 > emoji1.length) {
         predictionactiveV += `${emoji1.length}`;
         break;
      }
      if (emoji1.startsWith(tempnodataG)) {
         emoji1 = `${tempnodataG.length}`;
      }
      if ((emoji1.length | rncorei.length) > 5 && 2 > (emoji1.length | 5)) {
         emoji1 = `${2 ^ predictionactiveV.length}`;
      }
         emoji1 = `${2 >> (Math.min(1, predictionactiveV.length))}`;
         tempnodataG = "1";
      fastq /= Math.max(4, parseFloat(`${3}`));
    

      sharedB = `${modalZ.length + 3}`;
   let gpayW = 6692670 <= modalZ.length;
   do {
       let animationB = String.fromCharCode(110,95,49,56,95,99,114,111,115,115,104,97,105,114,115,0);
       let videojsl = String.fromCharCode(105,100,99,116,120,108,108,109,95,49,95,50,54,0);
      for (let r = 0; r < 3; r++) {
         videojsl = `${animationB.length}`;
      }
         videojsl += "3";
         animationB += `${animationB.length & videojsl.length}`;
      while (animationB == videojsl) {
         videojsl = `${(String.fromCharCode(98,0) == animationB ? videojsl.length : animationB.length)}`;
         break;
      }
      while (videojsl.includes(animationB)) {
          let cornershootN: Array<any> = [514, 872];
          let borderlessY: Map<any, any> = new Map([[String.fromCharCode(103,95,54,48,95,110,117,109,98,101,114,115,0),String.fromCharCode(105,113,109,102,95,97,95,49,55,0)], [String.fromCharCode(100,97,114,107,95,98,95,55,50,0),String.fromCharCode(109,111,100,105,102,121,95,104,95,48,0)]]);
          let bcopy_xu: Map<any, any> = new Map([[String.fromCharCode(102,116,118,109,111,95,50,95,50,55,0),64], [String.fromCharCode(119,111,114,107,108,111,97,100,95,113,95,57,54,0),328]]);
          let minimizeq: Array<any> = [37, 342, 606];
          let basketballmatchdetailbg9: Map<any, any> = new Map([[String.fromCharCode(98,95,55,55,95,109,106,112,101,103,100,101,99,0),406], [String.fromCharCode(115,116,105,99,107,101,114,112,97,99,107,95,48,95,57,52,0),498]]);
         animationB += `${(String.fromCharCode(110,0) == animationB ? animationB.length : basketballmatchdetailbg9.size)}`;
         cornershootN = [borderlessY.size];
         borderlessY = new Map([[`${bcopy_xu.size}`, bcopy_xu.size << (Math.min(minimizeq.length, 2))]]);
         minimizeq = [2];
         basketballmatchdetailbg9.set(`${cornershootN.length}`, cornershootN.length);
         break;
      }
      for (let s = 0; s < 2; s++) {
          let connectionz = false;
          let iconcalendars = String.fromCharCode(98,111,97,116,95,112,95,51,50,0);
          let turndownw = 1.0;
          let libmapbufferjniV = String.fromCharCode(110,95,54,50,95,101,115,112,111,110,100,101,114,0);
          let reactx = String.fromCharCode(101,95,52,51,95,102,117,108,108,121,0);
         animationB = `${videojsl.length + animationB.length}`;
         connectionz = iconcalendars.length < reactx.length;
         iconcalendars += `${((connectionz ? 2 : 1) | parseInt(`${turndownw}`))}`;
         turndownw -= ((connectionz ? 4 : 5) << (Math.min(Math.abs(2), 2)));
         libmapbufferjniV = `${(1 + (connectionz ? 4 : 5))}`;
         reactx += `${((connectionz ? 3 : 4) - 1)}`;
      }
      modalZ.push(animationB.length);
      if (gpayW) {
         break;
      }
   } while ((4 < (thailands.length * 5) && (thailands.length * modalZ.length) < 5) && gpayW);
      nbatrophyp.push(nbatrophyp.length);
      mapbufferG += `${parseInt(`${fastq}`)}`;
   if (1 == sharedB.length) {
      sharedB = "1";
   }
      modalZ = [parseInt(`${telemetryx}`) >> (Math.min(Math.abs(parseInt(`${greyarrowupJ}`)), 1))];
   for (let x = 0; x < 1; x++) {
      thailands += `${thailands.length}`;
   }
      mapbufferG = "1";
      awayiconF = `${1 - parseInt(`${greyarrowupJ}`)}`;
   if ((nbatrophyp.length / (Math.max(sharedB.length, 3))) < 3 || 1 < (3 / (Math.max(1, sharedB.length)))) {
       let forwardC = 5.0;
       let groupn: Map<any, any> = new Map([[String.fromCharCode(97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,95,105,95,52,51,0),44], [String.fromCharCode(99,111,110,118,101,114,115,105,111,110,115,95,111,95,54,49,0),964]]);
       let base3: Array<any> = [850, 633, 101];
       let weatherc = String.fromCharCode(111,95,55,49,95,115,121,110,116,104,0);
      if (!Array.from(groupn.values()).includes(forwardC)) {
          let shrinkh = 0;
         forwardC /= Math.max(1, weatherc.length ^ shrinkh);
      }
      let desch = weatherc.length <= 7583596;
      do {
          let refreshs = 5.0;
         weatherc += "1";
         refreshs -= parseInt(`${refreshs}`) - 1;
         if (desch) {
            break;
         }
      } while (desch && (!weatherc.startsWith(`${forwardC}`)));
      while ((4 ^ weatherc.length) <= 1) {
          let placementk = String.fromCharCode(105,95,53,56,95,100,105,103,101,115,116,98,121,110,97,109,101,0);
          let changev = true;
          let entryR = String.fromCharCode(106,95,53,95,104,113,112,101,108,0);
         groupn = new Map([[entryR, weatherc.length >> (Math.min(Math.abs(1), 3))]]);
         placementk += "1";
         changev = (14 > (placementk.length * (changev ? placementk.length : 14)));
         entryR = `${placementk.length}`;
         break;
      }
          let themei = true;
          let statisticsinactivez = 0.0;
          let libavformatb = true;
         weatherc = `${((themei ? 2 : 1) & 3)}`;
         themei = 48.14 <= statisticsinactivez;
         statisticsinactivez -= parseInt(`${statisticsinactivez}`);
       let binddatasA = true;
          let changeW = String.fromCharCode(119,95,54,54,95,99,111,110,102,105,103,117,114,101,114,0);
          let bridgeG: Array<any> = [985, 147];
          let reddownarrowj: Array<any> = [330, 162];
         forwardC += base3.length | groupn.size;
         changeW += `${(changeW == String.fromCharCode(89,0) ? reddownarrowj.length : changeW.length)}`;
         bridgeG.push(reddownarrowj.length);
         binddatasA = ((base3.length & (binddatasA ? base3.length : 3)) < 3);
         forwardC *= ((binddatasA ? 3 : 4) & parseInt(`${forwardC}`));
         groupn.set(`${base3.length}`, base3.length & groupn.size);
         base3.push(parseInt(`${forwardC}`));
       let const_h7 = false;
      let modex = weatherc == String.fromCharCode(101,114,108,106,119,110,0);
      do {
         weatherc += `${base3.length / (Math.max(3, 3))}`;
         if (modex) {
            break;
         }
      } while ((weatherc.endsWith(`${groupn.size}`)) && modex);
      sharedB = `${3 - awayiconF.length}`;
   }
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
       let megaphoneh: Array<any> = [29, 438];
    let launchr = 0.0;
    let playlistx: Array<any> = [String.fromCharCode(97,112,112,108,105,99,97,116,105,111,110,95,108,95,50,49,0), String.fromCharCode(102,95,49,48,95,101,110,116,105,114,101,108,121,0), String.fromCharCode(115,116,114,101,115,115,95,97,95,49,49,0)];
    let mbsplash_ = String.fromCharCode(98,105,103,110,117,109,95,101,95,52,50,0);
    let scheduleq = String.fromCharCode(98,108,111,99,107,100,99,95,108,95,53,54,0);
    let roota = 0.0;
    let floatingN = 3;
    let clubf = String.fromCharCode(116,100,108,115,95,116,95,51,0);
    let analyticsK = String.fromCharCode(112,95,53,54,95,98,105,116,114,97,116,101,115,0);
    let infoH: Array<any> = [762, 396];
    let profilepicF: Array<any> = [969, 704, 527];
    let iconadslinkN: Array<any> = [748, 417];
    let showlessQ: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,105,101,115,95,116,95,55,56,0),131], [String.fromCharCode(112,95,54,53,95,116,104,114,111,116,116,108,101,100,0),393]]);
   let thailandZ = clubf.length <= 7307905;
   do {
      clubf += `${(String.fromCharCode(85,0) == scheduleq ? scheduleq.length : parseInt(`${roota}`))}`;
      if (thailandZ) {
         break;
      }
   } while ((clubf.length == megaphoneh.length) && thailandZ);
       let orangeuparrowb = String.fromCharCode(116,95,51,53,95,115,111,108,118,101,114,0);
      while (orangeuparrowb.includes(orangeuparrowb)) {
         orangeuparrowb += "3";
         break;
      }
         orangeuparrowb = `${1 - orangeuparrowb.length}`;
         orangeuparrowb = `${orangeuparrowb.length * 3}`;
      scheduleq = `${(mbsplash_ == String.fromCharCode(80,0) ? mbsplash_.length : parseInt(`${launchr}`))}`;
      clubf = "3";
       let connectionE = 0;
       let defaultlogox: Array<any> = [884, 316, 689];
      for (let y = 0; y < 3; y++) {
         connectionE *= defaultlogox.length;
      }
      let iconwatchnowW = connectionE <= 9629500;
      do {
         connectionE &= defaultlogox.length;
         if (iconwatchnowW) {
            break;
         }
      } while ((!defaultlogox.includes(connectionE)) && iconwatchnowW);
      while (connectionE > 2) {
         defaultlogox = [connectionE / 3];
         break;
      }
      while ((connectionE ^ 2) > 1) {
         defaultlogox = [connectionE];
         break;
      }
         defaultlogox = [defaultlogox.length];
          let orangej: Map<any, any> = new Map([[String.fromCharCode(121,95,54,53,95,111,112,101,110,105,110,103,0),808], [String.fromCharCode(111,98,106,116,120,116,95,53,95,52,53,0),208]]);
          let nterstitial7 = true;
          let selectedG = true;
         connectionE ^= connectionE + 1;
         orangej = new Map([[`${orangej.size}`, orangej.size]]);
         nterstitial7 = (!selectedG ? !nterstitial7 : !selectedG);
      roota -= parseFloat(`${defaultlogox.length % 3}`);
      roota -= (parseFloat(`${mbsplash_ == String.fromCharCode(84,0) ? mbsplash_.length : floatingN}`));
   for (let u = 0; u < 2; u++) {
       let rocket7 = String.fromCharCode(99,111,114,110,101,114,95,118,95,56,0);
       let l_imagek = 2;
       let fullscreenminG = String.fromCharCode(109,98,99,115,95,49,95,56,48,0);
       let gmailz: Map<any, any> = new Map([[String.fromCharCode(97,95,57,54,95,114,103,116,99,117,0),505], [String.fromCharCode(114,101,111,112,101,110,95,99,95,55,49,0),118], [String.fromCharCode(122,95,57,56,95,99,111,110,115,116,113,112,0),759]]);
      let cornerkick6 = 5995037 >= gmailz.size;
      do {
         gmailz = new Map([[`${gmailz.size}`, fullscreenminG.length + gmailz.size]]);
         if (cornerkick6) {
            break;
         }
      } while ((3 <= (gmailz.size & 2)) && cornerkick6);
       let libswresampleL: Map<any, any> = new Map([[String.fromCharCode(103,95,57,56,95,99,111,108,99,111,108,0),535], [String.fromCharCode(105,100,119,116,95,100,95,53,51,0),412], [String.fromCharCode(99,95,53,53,95,98,112,115,0),257]]);
       let awayiconM: Map<any, any> = new Map([[String.fromCharCode(121,95,53,53,95,103,112,111,115,116,102,105,108,116,101,114,0),String.fromCharCode(117,95,55,95,97,98,117,115,101,0)], [String.fromCharCode(116,95,49,55,95,115,101,99,116,105,111,110,0),String.fromCharCode(108,95,53,95,111,112,101,110,115,115,108,0)], [String.fromCharCode(100,95,57,53,95,100,117,114,97,116,105,111,110,0),String.fromCharCode(114,101,109,111,116,101,95,117,95,57,54,0)]]);
      let traminiP = fullscreenminG.length <= 9648128;
      do {
          let userA = 1;
          let borderless1: Array<any> = [90, 920, 443];
          let defaultroombgb = 0.0;
          let debugI = String.fromCharCode(97,117,116,104,95,106,95,55,57,0);
          let descH: Map<any, any> = new Map([[String.fromCharCode(97,118,97,105,108,97,98,105,108,105,116,121,95,118,95,53,56,0),658], [String.fromCharCode(101,95,50,52,95,102,105,108,101,0),886], [String.fromCharCode(99,121,117,118,95,106,95,55,57,0),617]]);
         fullscreenminG += `${debugI.length + 3}`;
         userA &= borderless1.length << (Math.min(2, Math.abs(userA)));
         borderless1 = [borderless1.length];
         defaultroombgb += parseFloat(`${parseInt(`${defaultroombgb}`) ^ 3}`);
         debugI = `${borderless1.length}`;
         descH.set(`${defaultroombgb}`, parseInt(`${defaultroombgb}`) >> (Math.min(1, Math.abs(3))));
         if (traminiP) {
            break;
         }
      } while ((!fullscreenminG.startsWith(`${libswresampleL.size}`)) && traminiP);
         gmailz.set(`${fullscreenminG}`, libswresampleL.size + 2);
          let applicationy = 0.0;
         gmailz.set(`${l_imagek}`, l_imagek & 2);
         applicationy -= parseFloat(`${parseInt(`${applicationy}`) ^ parseInt(`${applicationy}`)}`);
      while (1 < awayiconM.size) {
         awayiconM.set(`${awayiconM.size}`, gmailz.size & 1);
         break;
      }
      let actions3 = awayiconM.size >= 9859775;
      do {
         awayiconM = new Map([[`${awayiconM.size}`, (String.fromCharCode(78,0) == rocket7 ? awayiconM.size : rocket7.length)]]);
         if (actions3) {
            break;
         }
      } while (((awayiconM.size & 5) <= 3 || (awayiconM.size & 5) <= 2) && actions3);
       let soundq = 1.0;
      clubf += `${parseInt(`${launchr}`)}`;
   }
   for (let k = 0; k < 1; k++) {
       let libreactperfloggerjniR = 5.0;
       let sendc = 2;
       let manifesto = String.fromCharCode(98,97,115,101,95,53,95,51,50,0);
       let cast0: Array<any> = [904, 777, 289];
      if ((manifesto.length * cast0.length) >= 1) {
         manifesto += `${1 << (Math.min(5, manifesto.length))}`;
      }
      let textinputV = cast0.length >= 5171570;
      do {
         cast0 = [cast0.length - 2];
         if (textinputV) {
            break;
         }
      } while ((4 == cast0.length) && textinputV);
      for (let o = 0; o < 1; o++) {
         sendc >>= Math.min(Math.abs(parseInt(`${libreactperfloggerjniR}`)), 3);
      }
          let emptyQ = 4;
         cast0 = [emptyQ % 1];
      for (let o = 0; o < 1; o++) {
          let internetA = String.fromCharCode(118,95,50,95,105,115,110,101,103,97,116,105,118,101,0);
          let productQ = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,95,114,95,53,57,0);
          let rulesA = 3;
          let goalM = true;
          let update_2pf = false;
         libreactperfloggerjniR += rulesA & internetA.length;
         internetA = `${(1 % (Math.max(1, (update_2pf ? 3 : 1))))}`;
         productQ = "3";
         rulesA >>= Math.min(4, Math.abs(((update_2pf ? 3 : 2) & (goalM ? 3 : 3))));
      }
       let mathD: Map<any, any> = new Map([[String.fromCharCode(97,95,56,48,95,112,101,114,115,105,115,116,101,110,99,101,0),String.fromCharCode(118,95,52,57,95,101,120,112,105,114,97,116,105,111,110,115,0)], [String.fromCharCode(101,97,115,101,95,122,95,56,55,0),String.fromCharCode(115,117,99,99,101,115,115,102,117,108,95,120,95,55,56,0)], [String.fromCharCode(115,95,57,55,95,97,116,116,114,105,98,117,116,101,0),String.fromCharCode(97,95,51,95,99,111,109,109,97,0)]]);
         cast0.push(parseInt(`${libreactperfloggerjniR}`));
          let mbsplashC: Map<any, any> = new Map([[String.fromCharCode(99,97,108,108,98,97,99,107,95,113,95,49,53,0),874], [String.fromCharCode(103,95,49,54,95,115,101,116,116,105,110,103,0),627]]);
          let loginA = String.fromCharCode(116,95,53,51,95,112,111,119,101,114,102,117,108,0);
          let annerG: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,111,116,97,116,105,111,110,95,51,95,54,53,0),720], [String.fromCharCode(103,95,57,55,95,100,97,112,0),463]]);
         cast0 = [3 * parseInt(`${libreactperfloggerjniR}`)];
         mbsplashC.set(`${loginA}`, loginA.length);
         annerG = new Map([[`${mbsplashC.size}`, loginA.length | mbsplashC.size]]);
      if ((libreactperfloggerjniR + mathD.size) >= 4.82) {
          let penaltyshootp = String.fromCharCode(105,102,110,115,95,101,95,52,54,0);
          let detailsA = String.fromCharCode(116,95,51,54,95,109,97,110,97,103,101,100,0);
          let mapping4: Map<any, any> = new Map([[String.fromCharCode(97,95,51,54,95,114,101,103,105,111,110,115,0),String.fromCharCode(115,99,97,110,116,97,98,108,101,115,95,98,95,55,0)], [String.fromCharCode(103,95,57,55,95,114,101,115,104,117,102,102,108,101,0),String.fromCharCode(110,95,52,53,95,100,118,97,117,100,105,111,0)], [String.fromCharCode(108,95,57,95,98,105,103,100,105,97,0),String.fromCharCode(108,97,118,117,95,102,95,55,0)]]);
          let nativemoduleK = 0.0;
          let filed3 = true;
         mathD.set(`${cast0.length}`, cast0.length % (Math.max(1, 1)));
         penaltyshootp += `${(2 ^ (filed3 ? 1 : 4))}`;
         detailsA += `${detailsA.length & penaltyshootp.length}`;
         mapping4 = new Map([[`${mapping4.size}`, penaltyshootp.length - 2]]);
         nativemoduleK += (String.fromCharCode(56,0) == penaltyshootp ? penaltyshootp.length : detailsA.length);
         filed3 = 47.57 <= nativemoduleK && 10 <= mapping4.size;
      }
      while (3 == (sendc * mathD.size) && 3 == (sendc * 3)) {
         sendc /= Math.max(parseInt(`${libreactperfloggerjniR}`), 5);
         break;
      }
      if (manifesto.length < 4) {
         sendc |= parseInt(`${libreactperfloggerjniR}`) - 2;
      }
      for (let b = 0; b < 2; b++) {
          let stringsR = false;
          let smallorangemanv = String.fromCharCode(116,95,50,55,95,108,105,110,107,105,110,103,0);
         cast0 = [(2 & (stringsR ? 1 : 4))];
         stringsR = smallorangemanv == smallorangemanv;
      }
      floatingN |= (analyticsK == String.fromCharCode(51,0) ? cast0.length : analyticsK.length);
   }
      mbsplash_ += `${scheduleq.length}`;
   while (4 <= (3 >> (Math.min(4, infoH.length))) && (megaphoneh.length >> (Math.min(5, infoH.length))) <= 3) {
       let footballfiledlayoutc = String.fromCharCode(99,95,51,48,95,102,105,108,101,115,121,115,116,101,109,0);
       let schedulef: Array<any> = [711, 956, 185];
         schedulef.push(footballfiledlayoutc.length | 2);
      while ((schedulef.length << (Math.min(Math.abs(3), 1))) <= 4 || (footballfiledlayoutc.length << (Math.min(5, schedulef.length))) <= 3) {
         footballfiledlayoutc = "2";
         break;
      }
       let greyarrowupv = String.fromCharCode(98,95,50,52,95,109,98,109,111,100,101,0);
       let graphw = String.fromCharCode(119,95,49,48,48,95,115,97,110,105,116,121,0);
          let libavcodecq = 3.0;
          let libflipperT = String.fromCharCode(101,95,57,52,95,100,101,99,111,114,0);
         greyarrowupv = `${footballfiledlayoutc.length & libflipperT.length}`;
         libavcodecq += parseFloat(`${parseInt(`${libavcodecq}`)}`);
         libflipperT = `${parseInt(`${libavcodecq}`)}`;
         graphw += `${footballfiledlayoutc.length}`;
         greyarrowupv = `${3 ^ graphw.length}`;
      infoH.push(megaphoneh.length);
      break;
   }
   while (2 > infoH.length) {
      infoH.push(2);
      break;
   }
      launchr += (parseFloat(`${String.fromCharCode(75,0) == clubf ? parseInt(`${launchr}`) : clubf.length}`));
   if (3 == (megaphoneh.length - parseInt(`${launchr}`))) {
       let grayO = 4.0;
      for (let a = 0; a < 2; a++) {
          let eighteenT = String.fromCharCode(117,95,52,53,95,108,97,110,99,122,111,115,0);
         grayO += parseInt(`${grayO}`) + eighteenT.length;
      }
         grayO /= Math.max(1, 5);
          let sharedz = String.fromCharCode(99,109,97,107,101,95,116,95,53,56,0);
          let codegenZ = 5;
          let windI: Array<any> = [59, 509];
         grayO -= sharedz.length;
         sharedz += `${codegenZ}`;
         codegenZ -= windI.length;
         windI.push(2 ^ codegenZ);
      launchr /= Math.max(parseFloat(`${parseInt(`${grayO}`)}`), 1);
   }
   if (roota < parseFloat(`${scheduleq.length}`)) {
      roota += parseFloat(`${iconadslinkN.length}`);
   }
   while (2 >= (clubf.length / 3) && 5 >= (playlistx.length / 3)) {
       let mbbidB = 0.0;
       let change9 = 0.0;
       let nativec = String.fromCharCode(111,112,116,105,111,110,97,108,108,121,95,99,95,50,50,0);
      while ((4 * mbbidB) > 4.49) {
         change9 *= parseFloat(`${3}`);
         break;
      }
         change9 -= parseFloat(`${1 + parseInt(`${change9}`)}`);
      while (parseFloat(`${nativec.length}`) == mbbidB) {
          let subbasketballplayern = 0;
         mbbidB *= parseFloat(`${parseInt(`${mbbidB}`)}`);
         subbasketballplayern /= Math.max(3, 2 - subbasketballplayern);
         break;
      }
      while (1.26 <= (2.87 + change9)) {
         nativec = `${parseInt(`${mbbidB}`)}`;
         break;
      }
          let encryptorR = String.fromCharCode(119,95,49,52,95,116,97,98,108,101,0);
          let iconsettingN = 5;
          let libtobK = String.fromCharCode(103,101,116,95,106,95,55,52,0);
         change9 -= parseFloat(`${libtobK.length >> (Math.min(1, nativec.length))}`);
         encryptorR = `${1 + encryptorR.length}`;
         iconsettingN |= (encryptorR == String.fromCharCode(67,0) ? iconsettingN : encryptorR.length);
         libtobK += `${2 & encryptorR.length}`;
         mbbidB /= Math.max(parseFloat(`${parseInt(`${change9}`)}`), 4);
         change9 -= parseFloat(`${parseInt(`${mbbidB}`)}`);
         nativec = `${(String.fromCharCode(54,0) == nativec ? parseInt(`${change9}`) : nativec.length)}`;
         change9 -= parseFloat(`${parseInt(`${change9}`) % (Math.max(2, parseInt(`${mbbidB}`)))}`);
      playlistx = [floatingN % 3];
      break;
   }
   for (let t = 0; t < 2; t++) {
       let libfabricjniL: Array<any> = [458, 997];
       let runtime7: Array<any> = [990, 43];
         runtime7.push(libfabricjniL.length);
          let libmapbufferjni3 = false;
         libfabricjniL.push(libfabricjniL.length);
         libmapbufferjni3 = (!libmapbufferjni3 ? !libmapbufferjni3 : libmapbufferjni3);
      for (let m = 0; m < 1; m++) {
         libfabricjniL.push(2);
      }
          let statsnomoredataQ = true;
         runtime7 = [runtime7.length];
         statsnomoredataQ = !statsnomoredataQ;
      if ((runtime7.length + 2) > 1) {
         runtime7.push(runtime7.length);
      }
         libfabricjniL = [libfabricjniL.length << (Math.min(runtime7.length, 4))];
      floatingN >>= Math.min(Math.abs(iconadslinkN.length >> (Math.min(Math.abs(1), 5))), 5);
   }
      profilepicF.push(megaphoneh.length);
       let securityN = 1.0;
       let huaweid: Array<any> = [927, 979];
         huaweid.push(3);
         securityN /= Math.max(parseFloat(`${huaweid.length - parseInt(`${securityN}`)}`), 5);
      if (!huaweid.includes(securityN)) {
         huaweid.push(3 + huaweid.length);
      }
       let producte = String.fromCharCode(103,95,57,49,95,108,97,109,101,0);
      for (let k = 0; k < 3; k++) {
         producte += "1";
      }
       let save7: Map<any, any> = new Map([[String.fromCharCode(120,95,57,50,95,110,111,116,105,102,105,101,100,0),882], [String.fromCharCode(97,108,108,111,99,97,116,111,114,115,95,55,95,54,51,0),675], [String.fromCharCode(97,117,116,104,111,114,95,51,95,55,48,0),126]]);
      megaphoneh = [megaphoneh.length];
       let imagenetworkerrf = String.fromCharCode(101,95,51,54,95,97,116,116,114,105,98,115,0);
       let reactnativeultimatelistviewk: Map<any, any> = new Map([[String.fromCharCode(101,95,50,55,95,112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,0),false ], [String.fromCharCode(114,95,55,56,95,117,110,115,101,108,101,99,116,0),false ], [String.fromCharCode(116,95,50,52,95,110,101,119,116,101,107,0),false ]]);
       let iconviewergifi = String.fromCharCode(112,95,52,49,95,104,97,97,114,0);
       let exampleimageM = String.fromCharCode(119,101,101,107,100,97,121,95,121,95,55,48,0);
         imagenetworkerrf += `${(String.fromCharCode(101,0) == imagenetworkerrf ? imagenetworkerrf.length : reactnativeultimatelistviewk.size)}`;
          let chatroombackgroundf = 1.0;
          let armvag = true;
          let gradlewm = 2.0;
         exampleimageM += `${parseInt(`${chatroombackgroundf}`)}`;
         armvag = gradlewm > 44.23;
         gradlewm *= 2 % (Math.max(9, parseInt(`${gradlewm}`)));
      let cedbadcebfbfbfbcfecbcn = iconviewergifi == String.fromCharCode(120,111,100,48,108,111,95,117,56,105,0);
      do {
         iconviewergifi += `${reactnativeultimatelistviewk.size}`;
         if (cedbadcebfbfbfbcfecbcn) {
            break;
         }
      } while (cedbadcebfbfbfbcfecbcn && (!exampleimageM.endsWith(iconviewergifi)));
          let configurel = String.fromCharCode(112,95,54,55,95,108,111,117,100,110,111,114,109,0);
         imagenetworkerrf = `${1 & configurel.length}`;
      for (let r = 0; r < 2; r++) {
         reactnativeultimatelistviewk.set(exampleimageM, imagenetworkerrf.length);
      }
      iconadslinkN.push(3);

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
       let private_n1g = 5.0;
    let predictionbannersharedK = 1.0;
    let circleg = 3.0;
    let selectedo = 1;
    let moviesk: Array<any> = [String.fromCharCode(100,101,99,111,100,97,98,108,101,95,108,95,52,55,0), String.fromCharCode(109,97,116,114,105,120,105,110,103,95,122,95,49,54,0), String.fromCharCode(110,117,109,101,114,111,95,113,95,49,48,48,0)];
    let photoy: Map<any, any> = new Map([[String.fromCharCode(122,95,49,56,95,108,111,116,116,105,101,112,114,111,120,121,109,111,100,101,108,0),633], [String.fromCharCode(100,95,51,53,95,114,97,116,101,115,0),481], [String.fromCharCode(99,95,56,52,95,108,97,110,103,115,0),950]]);
    let homeloadingC: Array<any> = [596, 959, 287];
    let ping1 = 1;
    let iconlogoutD = String.fromCharCode(97,95,51,48,95,108,111,99,107,99,104,97,105,110,0);
    let hoverz = 5.0;
      selectedo >>= Math.min(Math.abs(moviesk.length / 3), 3);
       let moviesi = 5.0;
         moviesi += parseFloat(`${parseInt(`${moviesi}`)}`);
          let minimizeG = String.fromCharCode(105,95,57,55,95,109,97,103,101,0);
          let liveP = false;
         moviesi -= parseFloat(`${1 << (Math.min(2, Math.abs(parseInt(`${moviesi}`))))}`);
         minimizeG += `${((liveP ? 2 : 3) >> (Math.min(Math.abs(1), 1)))}`;
         liveP = minimizeG.length > 33;
       let sliderV = 0.0;
       let viewera = 1.0;
      photoy.set(`${ping1}`, photoy.size);
      predictionbannersharedK /= Math.max(4, parseFloat(`${1}`));
   while (!moviesk.includes(selectedo)) {
      moviesk = [moviesk.length];
      break;
   }
   let layoutO = private_n1g >= 6957624.0;
   do {
      private_n1g /= Math.max(1, parseFloat(`${3}`));
      if (layoutO) {
         break;
      }
   } while (layoutO && (parseFloat(`${photoy.size}`) < private_n1g));
       let orangeuparrow_ = false;
       let whitetickb = String.fromCharCode(109,101,109,115,104,105,112,95,100,95,49,51,0);
          let downloadj = 0;
          let gestures6 = false;
         orangeuparrow_ = 41 < downloadj || gestures6;
      for (let y = 0; y < 3; y++) {
         orangeuparrow_ = ((whitetickb.length & (!orangeuparrow_ ? 89 : whitetickb.length)) <= 89);
      }
         whitetickb = `${((orangeuparrow_ ? 3 : 1))}`;
          let libbufferE = String.fromCharCode(112,111,115,116,114,111,116,97,116,101,95,117,95,49,52,0);
         whitetickb += `${((orangeuparrow_ ? 5 : 5))}`;
         libbufferE = `${libbufferE.length * libbufferE.length}`;
         orangeuparrow_ = !orangeuparrow_ || whitetickb.length <= 37;
      let chat9 = 7880687 >= whitetickb.length;
      do {
         whitetickb += `${(whitetickb == String.fromCharCode(84,0) ? (orangeuparrow_ ? 5 : 5) : whitetickb.length)}`;
         if (chat9) {
            break;
         }
      } while ((5 > whitetickb.length) && chat9);
      photoy.set(`${circleg}`, 3 ^ parseInt(`${circleg}`));

    if (episodeRef.current) {

      homeloadingC = [1];
   if (photoy.size >= ping1) {
      ping1 ^= parseInt(`${circleg}`);
   }
      private_n1g += parseFloat(`${ping1}`);
   if (1 >= (homeloadingC.length - 1) && (1 - photoy.size) >= 5) {
      photoy.set(`${circleg}`, 3 ^ ping1);
   }
   for (let y = 0; y < 3; y++) {
      predictionbannersharedK *= parseFloat(`${2 % (Math.max(1, parseInt(`${predictionbannersharedK}`)))}`);
   }
   if (2 > (3 ^ ping1) && 2 > (3 ^ ping1)) {
      moviesk.push(selectedo - 3);
   }
      episodeRef.current.scrollToIndex({
        index: currentEpisode,
        animated: true,
      });
    }
  };

  const handleModalClose = useCallback(() => {
       let malaysiaj = false;
    let iconsettingu = 4;
    let gesture8 = String.fromCharCode(117,110,105,109,112,111,114,116,97,110,116,95,120,95,51,0);
    let liveshareu = String.fromCharCode(100,114,97,103,103,105,110,103,95,122,95,50,52,0);
    let modalh = 5;
    let gpay_: Array<any> = [String.fromCharCode(107,95,53,54,95,103,108,111,98,97,108,116,101,109,0), String.fromCharCode(97,115,121,110,99,100,105,115,112,108,97,121,107,105,116,95,101,95,53,56,0), String.fromCharCode(100,95,51,53,95,100,101,110,111,105,115,101,114,0)];
    let imagemanager4 = 2.0;
    let pageG = false;
    let refreshB: Array<any> = [String.fromCharCode(105,95,56,55,95,114,103,98,116,111,0), String.fromCharCode(111,95,53,95,103,119,103,116,0)];
    let plashP = String.fromCharCode(99,95,49,57,95,105,110,116,101,103,114,97,108,0);
    let iconwatchnowy: Array<any> = [547, 512];
    let footballfieldY = true;
    let clearD = String.fromCharCode(103,95,57,51,95,111,112,101,110,115,108,101,115,0);
   while (3 < gpay_.length) {
      gpay_.push(parseInt(`${imagemanager4}`) & 3);
      break;
   }
   while (malaysiaj) {
       let lang4: Map<any, any> = new Map([[String.fromCharCode(99,95,52,49,95,97,112,111,115,0),752], [String.fromCharCode(112,95,56,54,95,112,114,111,109,105,110,101,110,116,0),563], [String.fromCharCode(98,95,52,95,105,110,116,101,102,97,99,101,0),616]]);
      for (let q = 0; q < 3; q++) {
         lang4.set(`${lang4.size}`, lang4.size);
      }
          let fastz = 5;
          let turnG: Array<any> = [696, 369, 12];
          let logo2: Map<any, any> = new Map([[String.fromCharCode(103,95,51,57,95,101,120,116,101,114,110,97,108,0),String.fromCharCode(100,105,118,105,115,105,111,110,95,49,95,53,51,0)], [String.fromCharCode(115,105,103,110,97,108,105,110,103,95,109,95,49,50,0),String.fromCharCode(111,110,121,120,99,95,121,95,52,50,0)]]);
         lang4 = new Map([[`${logo2.size}`, logo2.size / 1]]);
         fastz ^= turnG.length;
         turnG.push(fastz + turnG.length);
         lang4 = new Map([[`${lang4.size}`, 3 << (Math.min(3, Math.abs(lang4.size)))]]);
      gesture8 += `${3 & gpay_.length}`;
      break;
   }
   for (let z = 0; z < 1; z++) {
      malaysiaj = (47 >= ((!malaysiaj ? 47 : liveshareu.length) | liveshareu.length));
   }
   let release_54 = 6044106 >= modalh;
   do {
      modalh ^= refreshB.length;
      if (release_54) {
         break;
      }
   } while (((modalh - 4) < 3) && release_54);
      imagemanager4 -= parseFloat(`${modalh}`);
      malaysiaj = (((!malaysiaj ? 7 : liveshareu.length) & liveshareu.length) == 7);
   let incidentZ = String.fromCharCode(112,102,98,114,49,100,49,0) == plashP;
   do {
      plashP = "2";
      if (incidentZ) {
         break;
      }
   } while (incidentZ && (1 < plashP.length));
      liveshareu = `${iconwatchnowy.length}`;
   let constants5 = imagemanager4 <= 6709686.0;
   do {
      imagemanager4 /= Math.max(3, parseFloat(`${parseInt(`${imagemanager4}`)}`));
      if (constants5) {
         break;
      }
   } while ((1.48 < (imagemanager4 - 5.78) || 1 < (liveshareu.length - parseInt(`${imagemanager4}`))) && constants5);
      iconsettingu *= iconwatchnowy.length / (Math.max(1, 8));
       let snewinterstitialt = 0;
       let elementss = String.fromCharCode(117,112,115,104,105,102,116,101,100,95,49,95,51,57,0);
      while ((snewinterstitialt | elementss.length) < 4 && (elementss.length | 4) < 3) {
         elementss = `${snewinterstitialt % (Math.max(elementss.length, 2))}`;
         break;
      }
         snewinterstitialt += snewinterstitialt;
      for (let v = 0; v < 3; v++) {
         elementss = `${elementss.length * 1}`;
      }
      let countryg = elementss.length <= 8896384;
      do {
         elementss += `${(elementss == String.fromCharCode(78,0) ? elementss.length : snewinterstitialt)}`;
         if (countryg) {
            break;
         }
      } while (countryg && (2 > (elementss.length << (Math.min(Math.abs(4), 2)))));
         elementss = `${1 << (Math.min(1, Math.abs(snewinterstitialt)))}`;
         elementss += `${3 % (Math.max(3, elementss.length))}`;
      liveshareu = `${2 / (Math.max(3, parseInt(`${imagemanager4}`)))}`;
      liveshareu += `${(gesture8 == String.fromCharCode(67,0) ? modalh : gesture8.length)}`;
      malaysiaj = 79 >= modalh;
   if ((imagemanager4 / 4.45) == 4.86) {
      pageG = !pageG;
   }
   if ((gesture8.length % (Math.max(3, 1))) > 5) {
      iconwatchnowy.push(((malaysiaj ? 1 : 3) * 3));
   }
   while (!gpay_.includes(iconsettingu)) {
      gpay_ = [iconwatchnowy.length];
      break;
   }
   while (modalh == 3) {
      pageG = gesture8.length <= 46;
      break;
   }

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
       let tnewsy = 2.0;
    let episodes9 = String.fromCharCode(116,95,50,55,95,119,111,114,100,115,0);
    let airbnbstarG = String.fromCharCode(100,95,51,51,95,99,97,114,116,101,115,105,97,110,0);
    let downloader7 = 3;
    let cricketp = String.fromCharCode(115,95,53,52,95,109,115,101,120,0);
    let uimanagerz = String.fromCharCode(102,116,115,121,121,95,50,95,57,54,0);
    let iconstart = 1.0;
    let zoomY: Array<any> = [455, 331];
    let audienceX = false;
    let subink = 2.0;
    let usernamez = 1;
    let reactnativeratings_ = String.fromCharCode(122,95,52,51,95,115,112,111,110,115,111,114,101,100,0);
    let save0 = String.fromCharCode(110,95,57,52,95,99,111,101,102,102,105,99,105,101,110,116,115,0);
    let yellowcirclebgy = 4.0;
    let saveF = 2.0;
   for (let y = 0; y < 3; y++) {
      audienceX = iconstart <= 90.78;
   }
   while (tnewsy == parseFloat(`${zoomY.length}`)) {
       let selectionR = String.fromCharCode(120,118,105,100,95,113,95,53,57,0);
          let dataE = 3.0;
          let template_1F = String.fromCharCode(104,95,54,95,110,101,105,103,104,98,111,114,0);
          let iconbackwhiteD = 0.0;
         selectionR = `${3 | template_1F.length}`;
         dataE -= parseFloat(`${parseInt(`${iconbackwhiteD}`) - parseInt(`${dataE}`)}`);
         template_1F = `${parseInt(`${iconbackwhiteD}`) + 3}`;
      if (3 < selectionR.length) {
          let leaguedetailsbgZ = String.fromCharCode(114,95,55,53,95,102,101,97,116,117,114,101,0);
          let splash_ = 0.0;
          let selectionv = String.fromCharCode(103,114,101,101,100,121,95,110,95,57,56,0);
          let executorp = 0.0;
          let emptyB = String.fromCharCode(106,95,57,53,95,101,116,101,114,110,105,116,121,0);
         selectionR += `${selectionR.length}`;
         leaguedetailsbgZ += `${(String.fromCharCode(116,0) == selectionv ? selectionv.length : parseInt(`${splash_}`))}`;
         splash_ -= selectionv.length + leaguedetailsbgZ.length;
         executorp += parseInt(`${splash_}`);
         emptyB = `${parseInt(`${splash_}`) % 1}`;
      }
         selectionR = `${selectionR.length}`;
      tnewsy /= Math.max(parseFloat(`${3 & parseInt(`${subink}`)}`), 4);
      break;
   }
   let turnC = subink >= 8509016.0;
   do {
       let catagoryT: Map<any, any> = new Map([[String.fromCharCode(115,101,116,102,105,101,108,100,95,103,95,57,53,0),true ], [String.fromCharCode(114,116,109,112,112,107,116,95,56,95,53,0),false ], [String.fromCharCode(101,99,114,101,116,95,111,95,57,53,0),true ]]);
       let awayteamfieldR = String.fromCharCode(103,95,56,57,95,112,101,101,114,0);
       let overlayd = 4.0;
       let base4 = 3.0;
       let catagoryM = String.fromCharCode(103,112,111,115,116,102,105,108,116,101,114,95,103,95,57,57,0);
         awayteamfieldR = "1";
         overlayd -= parseInt(`${base4}`);
      for (let c = 0; c < 1; c++) {
         catagoryT = new Map([[`${catagoryT.size}`, catagoryT.size]]);
      }
      if ((1.46 * base4) > 1.48) {
          let gesturesd = false;
          let single1 = String.fromCharCode(117,110,105,102,111,114,109,95,98,95,51,57,0);
         base4 *= (catagoryM == String.fromCharCode(115,0) ? catagoryM.length : parseInt(`${overlayd}`));
         gesturesd = !gesturesd || single1.length > 56;
         single1 += `${((gesturesd ? 2 : 2))}`;
      }
      while (catagoryT.size == 5) {
          let entryq: Map<any, any> = new Map([[String.fromCharCode(119,95,57,51,0),249], [String.fromCharCode(106,95,54,56,95,115,117,98,108,97,121,101,114,0),522]]);
          let contexti = false;
          let armvaa = String.fromCharCode(106,95,57,95,105,115,111,0);
         awayteamfieldR = `${(String.fromCharCode(90,0) == armvaa ? armvaa.length : (contexti ? 4 : 3))}`;
         entryq.set(`${entryq.size}`, entryq.size | 2);
         contexti = entryq.size == entryq.size;
         break;
      }
         awayteamfieldR += `${catagoryM.length & 1}`;
      for (let d = 0; d < 3; d++) {
         awayteamfieldR = `${(awayteamfieldR == String.fromCharCode(117,0) ? parseInt(`${overlayd}`) : awayteamfieldR.length)}`;
      }
       let previewG = 0.0;
       let foregroundf: Map<any, any> = new Map([[String.fromCharCode(98,105,110,97,115,99,105,105,95,52,95,50,55,0),String.fromCharCode(100,95,50,54,95,100,105,112,111,115,97,98,108,101,0)], [String.fromCharCode(99,111,110,102,105,103,117,114,101,100,95,100,95,51,51,0),String.fromCharCode(109,101,109,110,114,95,121,95,54,53,0)], [String.fromCharCode(116,95,50,53,95,100,97,115,104,0),String.fromCharCode(98,95,54,55,95,116,114,97,105,116,115,0)]]);
       let networkN: Map<any, any> = new Map([[String.fromCharCode(115,114,116,112,95,104,95,56,55,0),String.fromCharCode(104,95,51,52,95,97,99,99,117,109,117,108,97,116,101,0)], [String.fromCharCode(110,95,56,55,95,98,105,116,112,108,97,110,101,0),String.fromCharCode(119,95,55,55,95,103,111,116,111,0)], [String.fromCharCode(106,95,55,56,95,101,115,116,97,98,108,105,115,104,0),String.fromCharCode(105,95,54,49,95,108,97,117,110,99,104,101,100,0)]]);
      while (catagoryT.get(`${base4}`) == null) {
         catagoryT.set(`${overlayd}`, 1 - foregroundf.size);
         break;
      }
         foregroundf = new Map([[`${networkN.size}`, networkN.size * parseInt(`${base4}`)]]);
      let awayteamfield4 = 7327363.0 <= base4;
      do {
          let footballf = 5.0;
          let basketball8: Array<any> = [132, 683, 590];
          let iconcalendare: Array<any> = [643, 26, 521];
          let yellowcirclebgR = 2.0;
          let greenu = String.fromCharCode(115,104,97,100,105,110,103,95,115,95,55,53,0);
         base4 *= parseInt(`${overlayd}`) + 1;
         footballf *= parseInt(`${yellowcirclebgR}`);
         basketball8.push(greenu.length | parseInt(`${yellowcirclebgR}`));
         iconcalendare.push((greenu == String.fromCharCode(77,0) ? greenu.length : parseInt(`${yellowcirclebgR}`)));
         if (awayteamfield4) {
            break;
         }
      } while (awayteamfield4 && (2 > (4 - catagoryM.length) && (parseInt(`${base4}`) * catagoryM.length) > 4));
      if (1.5 < (previewG * 3.30) || 3.30 < (overlayd - previewG)) {
          let flyerA = String.fromCharCode(112,111,114,116,97,108,95,50,95,54,0);
         previewG -= networkN.size;
         flyerA += `${flyerA.length % 2}`;
      }
      let sharedv = base4 >= 9792103.0;
      do {
         base4 /= Math.max((awayteamfieldR == String.fromCharCode(48,0) ? awayteamfieldR.length : networkN.size), 4);
         if (sharedv) {
            break;
         }
      } while ((networkN.get(`${base4}`) == null) && sharedv);
      for (let w = 0; w < 2; w++) {
          let penaltyshootk = false;
          let q_countF: Array<any> = [String.fromCharCode(99,108,117,115,116,101,114,95,100,95,50,48,0), String.fromCharCode(112,95,57,95,115,97,108,115,97,0)];
          let detailse = 0;
          let windT: Array<any> = [518, 952];
          let minimizei: Array<any> = [64, 204];
         catagoryM = `${detailse}`;
         penaltyshootk = (windT.length - q_countF.length) > 38;
         q_countF.push(((penaltyshootk ? 3 : 5) * q_countF.length));
         detailse += windT.length;
         minimizei = [1];
      }
      subink *= 3 - episodes9.length;
      if (turnC) {
         break;
      }
   } while ((subink < downloader7) && turnC);
   if (5 <= (uimanagerz.length & 1)) {
       let predictionbannersharedH: Array<any> = [333, 774];
       let libfilee = false;
      let colorsH = libfilee ? !libfilee : libfilee;
      do {
         libfilee = predictionbannersharedH.includes(libfilee);
         if (colorsH) {
            break;
         }
      } while (colorsH && (predictionbannersharedH.length < 5));
          let iconsharefriendsE = String.fromCharCode(112,114,105,110,116,95,120,95,57,50,0);
         libfilee = (15 < (predictionbannersharedH.length * (!libfilee ? 15 : predictionbannersharedH.length)));
         iconsharefriendsE = `${(String.fromCharCode(101,0) == iconsharefriendsE ? iconsharefriendsE.length : iconsharefriendsE.length)}`;
      if (!libfilee) {
         libfilee = !libfilee || predictionbannersharedH.length >= 33;
      }
          let owngoalm = String.fromCharCode(112,114,111,112,101,114,95,115,95,50,51,0);
         libfilee = !libfilee;
         owngoalm = "2";
      let with_77 = libfilee ? !libfilee : libfilee;
      do {
          let applet: Map<any, any> = new Map([[String.fromCharCode(112,95,49,56,95,101,120,112,108,97,105,110,0),158], [String.fromCharCode(108,95,57,50,95,103,111,98,98,108,101,0),626]]);
          let videojsI: Array<any> = [767, 407];
          let greytickR = String.fromCharCode(114,95,52,49,95,112,114,105,118,0);
         libfilee = applet.size > 81;
         applet.set(greytickR, 1);
         videojsI = [videojsI.length - greytickR.length];
         if (with_77) {
            break;
         }
      } while ((predictionbannersharedH.length == 1) && with_77);
          let homez: Map<any, any> = new Map([[String.fromCharCode(113,95,51,56,95,97,108,103,115,0),89], [String.fromCharCode(109,101,103,97,103,114,111,117,112,95,109,95,53,53,0),665], [String.fromCharCode(115,95,52,57,95,100,105,115,99,111,110,110,101,99,116,0),167]]);
         libfilee = (97 <= ((!libfilee ? homez.size : 26) | homez.size));
      uimanagerz += `${(parseInt(`${subink}`) << (Math.min(3, Math.abs((audienceX ? 4 : 5)))))}`;
   }
   for (let h = 0; h < 2; h++) {
      episodes9 += `${episodes9.length / (Math.max(4, downloader7))}`;
   }

    

   for (let c = 0; c < 3; c++) {
       let indexC = 3.0;
       let iconarrowrightl = 2.0;
       let fullS = String.fromCharCode(118,95,52,54,95,115,117,98,116,121,112,101,115,0);
      let bottomQ = 5045798.0 <= indexC;
      do {
         indexC /= Math.max(parseFloat(`${1 - fullS.length}`), 3);
         if (bottomQ) {
            break;
         }
      } while (bottomQ && ((indexC * iconarrowrightl) < 5.16 && 1.63 < (5.16 - indexC)));
      while (3.95 >= (1 + indexC)) {
         iconarrowrightl -= parseInt(`${iconarrowrightl}`);
         break;
      }
          let android1 = 4.0;
          let iconadslinkE: Array<any> = [893, 323, 998];
          let infoS: Map<any, any> = new Map([[String.fromCharCode(99,95,53,49,95,122,101,114,111,101,100,0),String.fromCharCode(118,95,51,57,95,109,117,108,116,120,109,117,108,116,0)], [String.fromCharCode(113,95,55,56,95,113,117,97,110,116,105,116,121,0),String.fromCharCode(97,95,54,55,95,112,114,111,102,105,108,105,110,103,0)]]);
         iconarrowrightl /= Math.max(5, 2);
         android1 += infoS.size | iconadslinkE.length;
         iconadslinkE.push(infoS.size ^ iconadslinkE.length);
          let configureO = 3.0;
         fullS += `${3 * parseInt(`${iconarrowrightl}`)}`;
         configureO += parseInt(`${configureO}`) - 1;
       let chatroombackground_ = String.fromCharCode(97,95,51,51,95,108,97,110,103,0);
       let favicon5 = String.fromCharCode(118,100,101,99,95,110,95,54,56,0);
      for (let l = 0; l < 2; l++) {
         fullS = `${fullS.length << (Math.min(Math.abs(1), 3))}`;
      }
          let style6: Array<any> = [String.fromCharCode(115,105,108,101,110,116,95,107,95,55,49,0), String.fromCharCode(118,95,57,55,95,100,111,110,97,116,101,0), String.fromCharCode(122,95,56,53,95,115,117,98,118,105,101,119,101,114,0)];
         iconarrowrightl *= (fullS == String.fromCharCode(97,0) ? fullS.length : style6.length);
      while (chatroombackground_.startsWith(`${fullS.length}`)) {
          let applez = String.fromCharCode(115,116,114,105,115,116,114,95,118,95,57,57,0);
          let banneri = 3.0;
          let userI = 2.0;
         chatroombackground_ = `${chatroombackground_.length}`;
         applez = `${applez.length ^ parseInt(`${banneri}`)}`;
         banneri -= parseFloat(`${applez.length}`);
         userI += parseFloat(`${parseInt(`${userI}`) - parseInt(`${banneri}`)}`);
         break;
      }
      let memberI = favicon5.length <= 9200400;
      do {
          let privacyi = String.fromCharCode(121,95,54,53,95,118,101,99,0);
          let photoq: Map<any, any> = new Map([[String.fromCharCode(102,95,55,55,95,105,113,109,112,0),191], [String.fromCharCode(119,97,116,99,104,95,56,95,51,50,0),243]]);
          let optionsQ = 3.0;
         favicon5 = `${fullS.length}`;
         privacyi += `${photoq.size}`;
         photoq.set(`${optionsQ}`, photoq.size / 3);
         optionsQ -= parseInt(`${optionsQ}`);
         if (memberI) {
            break;
         }
      } while (memberI && (favicon5.length > 5 && fullS != String.fromCharCode(117,0)));
      episodes9 += `${zoomY.length | 1}`;
   }
      iconstart -= ((audienceX ? 3 : 1) ^ downloader7);
      airbnbstarG = `${reactnativeratings_.length}`;
       let indicatorW = String.fromCharCode(102,101,97,116,117,114,101,115,95,103,95,49,49,0);
      if (indicatorW.length >= indicatorW.length) {
         indicatorW = `${indicatorW.length % (Math.max(9, indicatorW.length))}`;
      }
      let related2 = indicatorW == String.fromCharCode(49,108,103,119,114,0);
      do {
          let rootd: Array<any> = [161, 533];
          let malaysia7 = String.fromCharCode(97,115,99,105,105,105,110,100,101,120,95,120,95,57,48,0);
         indicatorW += `${rootd.length + indicatorW.length}`;
         rootd = [2 | malaysia7.length];
         malaysia7 += `${(String.fromCharCode(85,0) == malaysia7 ? malaysia7.length : malaysia7.length)}`;
         if (related2) {
            break;
         }
      } while (related2 && (indicatorW.endsWith(`${indicatorW.length}`)));
      let condensedt = String.fromCharCode(122,113,110,107,104,55,102,106,115,98,0) == indicatorW;
      do {
          let episodes5 = 5;
         indicatorW += "1";
         episodes5 *= episodes5 % 3;
         if (condensedt) {
            break;
         }
      } while (condensedt && (indicatorW.length > 4 && indicatorW != String.fromCharCode(101,0)));
      episodes9 = `${reactnativeratings_.length + parseInt(`${subink}`)}`;
      tnewsy += (parseFloat(`${cricketp == String.fromCharCode(118,0) ? usernamez : cricketp.length}`));
    

      subink /= Math.max(zoomY.length, 4);
   for (let q = 0; q < 2; q++) {
      zoomY = [downloader7 & 2];
   }
       let shirtt = String.fromCharCode(108,95,52,57,95,115,117,98,100,97,116,97,0);
       let eactp = false;
       let yingb = 0;
         eactp = shirtt.length > 77;
         eactp = eactp || yingb <= 51;
      for (let c = 0; c < 2; c++) {
         eactp = shirtt.length <= 72;
      }
         yingb >>= Math.min(2, Math.abs(((eactp ? 3 : 4))));
          let defaultlogo_ = String.fromCharCode(115,108,111,119,95,107,95,56,49,0);
         eactp = eactp || shirtt.length > 19;
         defaultlogo_ += `${(String.fromCharCode(114,0) == defaultlogo_ ? defaultlogo_.length : defaultlogo_.length)}`;
          let untickV = true;
          let philippinesY = false;
         yingb |= 1;
         untickV = untickV || !untickV;
         philippinesY = !untickV;
      let scrollviewE = eactp ? !eactp : eactp;
      do {
          let minivoda = String.fromCharCode(118,112,100,97,116,97,95,112,95,53,48,0);
          let condensed7: Map<any, any> = new Map([[String.fromCharCode(109,95,51,52,95,99,111,109,112,97,115,115,0),980], [String.fromCharCode(115,116,114,101,97,109,104,101,97,100,101,114,95,53,95,55,56,0),322]]);
         eactp = !eactp;
         minivoda = `${condensed7.size / 1}`;
         condensed7 = new Map([[`${condensed7.size}`, condensed7.size]]);
         if (scrollviewE) {
            break;
         }
      } while ((yingb >= 2 || (yingb % 2) >= 4) && scrollviewE);
         yingb *= ((eactp ? 4 : 3) | yingb);
      let telemetryr = String.fromCharCode(119,119,106,49,0) == shirtt;
      do {
         shirtt += `${3 + shirtt.length}`;
         if (telemetryr) {
            break;
         }
      } while ((eactp) && telemetryr);
      downloader7 -= zoomY.length * 3;
   if (uimanagerz.startsWith(`${cricketp.length}`)) {
       let strings7 = 4;
       let dialogZ = true;
       let notificationY: Array<any> = [791, 36, 567];
       let room4 = String.fromCharCode(105,95,56,55,95,100,115,116,114,0);
       let strI = 0.0;
      let profileactiveB = 8750238 <= strings7;
      do {
         strings7 /= Math.max(3, 3 | strings7);
         if (profileactiveB) {
            break;
         }
      } while (profileactiveB && ((strings7 & 1) < 3 || !dialogZ));
      while (notificationY.length <= 2) {
         notificationY = [notificationY.length >> (Math.min(Math.abs(2), 3))];
         break;
      }
      let morev = dialogZ ? !dialogZ : dialogZ;
      do {
         dialogZ = notificationY.length > 5;
         if (morev) {
            break;
         }
      } while (morev && (4 <= notificationY.length && (4 - notificationY.length) <= 2));
       let downloaded8 = String.fromCharCode(99,111,109,112,97,114,101,95,103,95,52,54,0);
      for (let s = 0; s < 1; s++) {
         downloaded8 += `${3 & downloaded8.length}`;
      }
      if (room4.length >= strI) {
         strI -= (strings7 | (dialogZ ? 3 : 1));
      }
         strI -= 3 << (Math.min(5, room4.length));
      let pageO = strI >= 6713461.0;
      do {
         strI -= notificationY.length / 2;
         if (pageO) {
            break;
         }
      } while ((dialogZ) && pageO);
      if (dialogZ) {
          let playf = String.fromCharCode(116,95,54,95,109,107,118,109,117,120,101,114,0);
         strI += downloaded8.length;
         playf += "2";
      }
       let basketballawayteams: Array<any> = [676, 215];
         basketballawayteams.push(basketballawayteams.length - 2);
       let refreshB: Map<any, any> = new Map([[String.fromCharCode(98,105,116,114,118,95,110,95,52,49,0),491], [String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,95,113,95,49,50,0),889]]);
         refreshB = new Map([[`${notificationY.length}`, notificationY.length]]);
       let bodanW = true;
       let activityz = false;
         strings7 >>= Math.min(1, Math.abs(1));
      uimanagerz += "2";
   }
   let template_vgK = subink <= 9199982.0;
   do {
      subink -= episodes9.length % 1;
      if (template_vgK) {
         break;
      }
   } while (template_vgK && ((subink + 3.64) == 3.9 && 1 == (4 >> (Math.min(4, Math.abs(usernamez))))));
    const maxEpisode = (foundSource?.url_count ?? 1) - 1;

      subink *= ((audienceX ? 3 : 5) << (Math.min(Math.abs(parseInt(`${subink}`)), 1)));
      airbnbstarG = `${(airbnbstarG == String.fromCharCode(53,0) ? airbnbstarG.length : parseInt(`${tnewsy}`))}`;
   if (save0.length > episodes9.length) {
       let reactnativeratingsO = 5;
         reactnativeratingsO /= Math.max(5, reactnativeratingsO);
      if (5 > reactnativeratingsO) {
         reactnativeratingsO <<= Math.min(1, Math.abs(reactnativeratingsO - 3));
      }
          let iconuseru: Map<any, any> = new Map([[String.fromCharCode(115,101,99,117,114,101,95,122,95,56,54,0),true ], [String.fromCharCode(114,101,103,105,115,116,101,114,95,113,95,54,48,0),true ]]);
          let stringY = false;
         reactnativeratingsO ^= 2;
         iconuseru = new Map([[`${iconuseru.size}`, (iconuseru.size / (Math.max(5, (stringY ? 4 : 4))))]]);
         stringY = null != iconuseru.get(`${stringY}`);
      episodes9 += `${3 | parseInt(`${tnewsy}`)}`;
   }
      subink /= Math.max(parseInt(`${iconstart}`) & parseInt(`${subink}`), 1);
   for (let f = 0; f < 1; f++) {
      save0 += `${(String.fromCharCode(49,0) == cricketp ? parseInt(`${tnewsy}`) : cricketp.length)}`;
   }
    const reduxCurrentEpisode = vod?.episodeWatched ?? 1;

      airbnbstarG += `${airbnbstarG.length}`;
      usernamez ^= 2;
      uimanagerz = `${(usernamez ^ (audienceX ? 3 : 2))}`;
   for (let b = 0; b < 2; b++) {
      save0 += `${2 & parseInt(`${yellowcirclebgy}`)}`;
   }
   let assistc = 6086121.0 <= subink;
   do {
      subink += parseInt(`${tnewsy}`);
      if (assistc) {
         break;
      }
   } while (((save0.length + parseInt(`${subink}`)) < 1 && (1 & save0.length) < 3) && assistc);
    if (reduxCurrentEpisode >= maxEpisode) {

   for (let b = 0; b < 3; b++) {
       let h_countY: Array<any> = [59, 657];
       let screenG = String.fromCharCode(120,95,50,95,98,121,112,97,115,115,0);
       let settingh = true;
      for (let g = 0; g < 1; g++) {
          let matchdetailbg6 = String.fromCharCode(106,111,105,110,95,97,95,50,55,0);
         h_countY = [(screenG == String.fromCharCode(48,0) ? h_countY.length : screenG.length)];
         matchdetailbg6 += `${(String.fromCharCode(103,0) == matchdetailbg6 ? matchdetailbg6.length : matchdetailbg6.length)}`;
      }
         screenG += `${screenG.length}`;
         settingh = screenG == String.fromCharCode(115,0);
      let collectionI = h_countY.length >= 7103904;
      do {
          let disconnectedX = String.fromCharCode(100,95,56,54,95,100,97,115,104,0);
          let chinaq = 4.0;
          let fillF: Array<any> = [356, 591];
          let rncorec = String.fromCharCode(114,101,115,101,114,118,101,115,105,122,101,95,118,95,56,48,0);
          let grayU = 2.0;
         h_countY = [(parseInt(`${chinaq}`) + (settingh ? 2 : 2))];
         disconnectedX += `${(rncorec == String.fromCharCode(55,0) ? parseInt(`${grayU}`) : rncorec.length)}`;
         chinaq -= parseFloat(`${2 * rncorec.length}`);
         fillF = [fillF.length * disconnectedX.length];
         grayU -= parseFloat(`${2}`);
         if (collectionI) {
            break;
         }
      } while ((3 <= h_countY.length) && collectionI);
      if (settingh && 3 < screenG.length) {
         screenG = "1";
      }
      for (let i = 0; i < 1; i++) {
          let overA = String.fromCharCode(99,95,53,55,95,101,120,116,101,110,100,0);
          let tick0: Map<any, any> = new Map([[String.fromCharCode(117,95,57,57,95,112,97,117,115,101,0),false ], [String.fromCharCode(115,99,111,112,101,115,95,104,95,57,51,0),false ], [String.fromCharCode(97,99,116,105,118,105,116,121,95,104,95,57,54,0),true ]]);
          let sortZ = String.fromCharCode(112,108,97,121,95,99,95,57,52,0);
          let playM = String.fromCharCode(103,95,49,50,95,111,112,117,115,101,110,99,0);
         screenG += `${(screenG == String.fromCharCode(73,0) ? h_countY.length : screenG.length)}`;
         overA = `${sortZ.length}`;
         tick0.set(sortZ, (String.fromCharCode(112,0) == sortZ ? playM.length : sortZ.length));
         playM = `${playM.length}`;
      }
      while (settingh) {
         h_countY.push((1 << (Math.min(3, Math.abs((settingh ? 2 : 3))))));
         break;
      }
         screenG += `${(1 / (Math.max(6, (settingh ? 4 : 3))))}`;
      if (2 <= screenG.length) {
          let downloading0 = true;
          let singles: Array<any> = [59, 718];
         screenG += `${1 >> (Math.min(4, h_countY.length))}`;
         downloading0 = !downloading0;
         singles = [((downloading0 ? 4 : 1) / (Math.max(3, singles.length)))];
      }
      downloader7 %= Math.max(5, parseInt(`${yellowcirclebgy}`) / (Math.max(zoomY.length, 2)));
   }
   let cleara = yellowcirclebgy <= 7518385.0;
   do {
      yellowcirclebgy *= 2 & parseInt(`${yellowcirclebgy}`);
      if (cleara) {
         break;
      }
   } while (cleara && (1.40 >= yellowcirclebgy));
       let acceptedr = 0.0;
       let injury1: Array<any> = [68, 668];
       let friends8 = String.fromCharCode(115,117,98,95,104,95,55,51,0);
         injury1 = [friends8.length + parseInt(`${acceptedr}`)];
       let foregroundu = true;
      if ((friends8.length & 4) <= 5 || (5.83 / (Math.max(1, acceptedr))) <= 2.11) {
         friends8 += `${(friends8 == String.fromCharCode(84,0) ? friends8.length : injury1.length)}`;
      }
      while (!foregroundu) {
         friends8 += `${(String.fromCharCode(82,0) == friends8 ? friends8.length : (foregroundu ? 5 : 2))}`;
         break;
      }
          let imagemanagerK: Map<any, any> = new Map([[String.fromCharCode(99,97,118,115,105,100,99,116,95,57,95,51,57,0),true ], [String.fromCharCode(121,95,57,50,95,115,113,117,101,101,122,101,0),false ]]);
         friends8 = "1";
         imagemanagerK = new Map([[`${imagemanagerK.size}`, 3]]);
         foregroundu = !foregroundu;
      for (let k = 0; k < 3; k++) {
         acceptedr /= Math.max((parseFloat(`${(foregroundu ? 4 : 1) ^ 2}`)), 2);
      }
         foregroundu = 78.35 <= acceptedr && 91 <= friends8.length;
      for (let s = 0; s < 2; s++) {
         friends8 += `${2 << (Math.min(Math.abs(parseInt(`${acceptedr}`)), 1))}`;
      }
      reactnativeratings_ = `${injury1.length}`;
   let applicationF = uimanagerz.length <= 8001055;
   do {
      uimanagerz = "2";
      if (applicationF) {
         break;
      }
   } while ((4.12 < (parseFloat(`${uimanagerz.length}`) - tnewsy) || (5 - uimanagerz.length) < 5) && applicationF);
       let libreactnativejnil = 3.0;
       let handlerz: Map<any, any> = new Map([[String.fromCharCode(114,101,99,101,110,116,95,121,95,56,51,0),String.fromCharCode(100,95,55,55,95,114,101,115,111,108,118,0)], [String.fromCharCode(109,101,115,97,103,101,115,95,118,95,52,55,0),String.fromCharCode(113,95,51,56,95,102,105,103,104,116,101,114,115,0)], [String.fromCharCode(98,97,116,99,104,101,100,95,52,95,53,49,0),String.fromCharCode(118,95,52,55,95,100,101,109,111,116,101,0)]]);
       let template_x8M = String.fromCharCode(98,108,101,110,100,95,108,95,53,49,0);
       let settingf = String.fromCharCode(111,95,53,51,95,112,101,105,114,115,0);
         template_x8M = `${settingf.length + 2}`;
      while (handlerz.size > 1) {
         handlerz = new Map([[`${handlerz.size}`, handlerz.size]]);
         break;
      }
         template_x8M += `${settingf.length | template_x8M.length}`;
      while (handlerz.size < template_x8M.length) {
          let g_managerc = String.fromCharCode(114,97,116,101,95,113,95,55,56,0);
          let predictionwinQ = String.fromCharCode(109,95,52,52,95,99,97,112,116,117,114,101,114,0);
          let yellowtored2 = String.fromCharCode(116,95,54,55,95,103,101,116,99,0);
          let progressi = true;
         handlerz = new Map([[`${progressi}`, 1 % (Math.max(3, template_x8M.length))]]);
         g_managerc += `${predictionwinQ.length}`;
         predictionwinQ += `${yellowtored2.length}`;
         yellowtored2 = "3";
         break;
      }
         handlerz.set(`${settingf}`, handlerz.size);
      save0 += "1";
      libreactnativejnil -= parseFloat(`${parseInt(`${libreactnativejnil}`) + 3}`);
      setCurrentEpisode(Math.min(maxEpisode, reduxCurrentEpisode));
    } else if (currentEpisode >= maxEpisode) {

      subink -= usernamez + parseInt(`${tnewsy}`);
   if (cricketp.endsWith(`${subink}`)) {
      subink += (parseInt(`${tnewsy}`) / (Math.max(1, (audienceX ? 1 : 1))));
   }
   for (let w = 0; w < 3; w++) {
       let team6 = 3.0;
       let basketballawayteamA = String.fromCharCode(99,117,115,116,111,109,105,122,101,95,110,95,54,53,0);
         basketballawayteamA += `${parseInt(`${team6}`) ^ 3}`;
          let redscoreballC = String.fromCharCode(101,112,104,101,109,101,114,97,108,95,115,95,51,56,0);
          let foregroundp = 0;
          let appsL = String.fromCharCode(115,95,52,52,95,109,97,110,97,103,101,100,0);
         basketballawayteamA += `${foregroundp}`;
         redscoreballC += `${1 - appsL.length}`;
         foregroundp ^= appsL.length;
         team6 += parseFloat(`${3 * parseInt(`${team6}`)}`);
          let subtext0: Map<any, any> = new Map([[String.fromCharCode(98,108,101,110,100,95,113,95,54,48,0),false ], [String.fromCharCode(118,95,53,54,95,114,116,112,115,101,110,100,101,114,0),true ], [String.fromCharCode(97,108,103,115,95,106,95,49,53,0),true ]]);
          let iconpipexpandJ = false;
         team6 += parseFloat(`${basketballawayteamA.length}`);
         subtext0.set(`${iconpipexpandJ}`, 2);
       let contextn: Map<any, any> = new Map([[String.fromCharCode(113,95,54,49,95,102,114,109,97,0),String.fromCharCode(114,95,49,51,95,105,110,112,117,116,121,0)], [String.fromCharCode(115,117,98,115,116,97,116,101,95,101,95,50,53,0),String.fromCharCode(101,95,51,48,95,105,100,99,116,108,108,109,0)]]);
       let modityh: Map<any, any> = new Map([[String.fromCharCode(108,95,54,53,95,115,111,108,105,115,116,101,110,0),true ], [String.fromCharCode(121,95,54,48,95,114,101,97,108,116,101,120,116,0),false ], [String.fromCharCode(105,110,105,116,105,97,108,105,122,105,110,103,95,114,95,49,49,0),true ]]);
       let y_countx = String.fromCharCode(99,95,53,49,95,101,110,99,105,112,104,101,114,0);
      episodes9 = `${downloader7}`;
   }
   let starl = String.fromCharCode(48,49,54,112,105,51,0) == uimanagerz;
   do {
      uimanagerz = `${2 >> (Math.min(1, cricketp.length))}`;
      if (starl) {
         break;
      }
   } while (starl && (uimanagerz.length > cricketp.length));
   while (zoomY.length == 3) {
       let libreanimatedh = 0.0;
         libreanimatedh *= parseFloat(`${3}`);
          let libcxxcomponentsm = 2;
         libreanimatedh -= parseFloat(`${2 >> (Math.min(Math.abs(libcxxcomponentsm), 5))}`);
      if (4.42 >= (4.42 * libreanimatedh)) {
         libreanimatedh /= Math.max(3, parseFloat(`${parseInt(`${libreanimatedh}`)}`));
      }
      zoomY = [1];
      break;
   }
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
        episode.status === CUASheetIconarrowright.CUAAttributedstring
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
       let castingt = String.fromCharCode(107,101,121,98,117,102,95,112,95,52,56,0);
    let componentregistryT: Array<any> = [660, 912];
    let faviconG: Array<any> = [482, 977, 856];
    let emojiheartz = String.fromCharCode(104,95,55,57,95,103,114,101,97,116,101,114,0);
    let fullscreenmaxe = 5.0;
    let policyq = 2.0;
    let librrcR = 3;
    let armvaO: Array<any> = [727, 684];
    let settingK: Array<any> = [596, 822];
   if (componentregistryT.length > emojiheartz.length) {
       let flipperX = 0.0;
       let libavfilterL = String.fromCharCode(116,95,49,54,95,108,105,107,101,0);
         flipperX += 3;
      for (let h = 0; h < 2; h++) {
         flipperX *= 1 - parseInt(`${flipperX}`);
      }
       let renderK = String.fromCharCode(99,95,52,48,95,100,101,99,111,100,105,110,103,0);
       let mathn = String.fromCharCode(99,95,54,54,95,112,101,114,109,117,116,101,0);
       let iconarrowleftA = 0.0;
       let liveV = true;
          let controls2: Map<any, any> = new Map([[String.fromCharCode(97,95,54,52,95,99,104,105,108,100,0),807], [String.fromCharCode(116,98,109,108,95,50,95,50,0),746]]);
          let iconpipexpandS = String.fromCharCode(120,95,51,57,95,102,105,110,97,108,105,122,105,110,103,0);
          let hongkong8 = String.fromCharCode(104,95,51,54,95,100,111,99,107,101,114,0);
         iconarrowleftA -= parseFloat(`${parseInt(`${flipperX}`) / (Math.max(parseInt(`${iconarrowleftA}`), 3))}`);
         controls2.set(iconpipexpandS, iconpipexpandS.length + controls2.size);
         hongkong8 = `${iconpipexpandS.length + hongkong8.length}`;
      componentregistryT = [libavfilterL.length >> (Math.min(4, Math.abs(librrcR)))];
   }
   for (let j = 0; j < 3; j++) {
      fullscreenmaxe *= emojiheartz.length;
   }

    if (vod && !isReadyPlay) {

      librrcR %= Math.max(2, 1 / (Math.max(5, componentregistryT.length)));
   for (let a = 0; a < 1; a++) {
       let update_4t = String.fromCharCode(120,95,57,54,95,97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,115,0);
       let libglogq: Map<any, any> = new Map([[String.fromCharCode(104,95,57,95,112,114,111,112,101,114,121,0),false ], [String.fromCharCode(112,107,116,99,112,121,95,51,95,49,48,0),false ], [String.fromCharCode(118,95,57,56,95,116,104,114,101,115,104,111,108,100,115,0),true ]]);
      let textZ = 6394276 <= libglogq.size;
      do {
          let iconwatchnowj = 4.0;
          let volumee = false;
         libglogq = new Map([[`${libglogq.size}`, libglogq.size]]);
         iconwatchnowj -= ((volumee ? 1 : 3) >> (Math.min(Math.abs(parseInt(`${iconwatchnowj}`)), 1)));
         volumee = 27.76 >= iconwatchnowj;
         if (textZ) {
            break;
         }
      } while ((!update_4t.includes(`${libglogq.size}`)) && textZ);
          let selectionK: Array<any> = [String.fromCharCode(114,101,115,117,108,116,115,95,52,95,52,57,0), String.fromCharCode(100,99,113,117,97,110,116,95,111,95,52,57,0), String.fromCharCode(111,95,50,52,95,115,112,101,97,107,105,110,103,0)];
          let predictionbannerj = String.fromCharCode(113,117,105,99,107,95,99,95,50,55,0);
         update_4t = `${selectionK.length}`;
         selectionK.push(predictionbannerj.length >> (Math.min(Math.abs(1), 3)));
         predictionbannerj += `${predictionbannerj.length}`;
         update_4t = `${2 ^ update_4t.length}`;
      while (update_4t.length < libglogq.size) {
         update_4t += `${update_4t.length}`;
         break;
      }
       let icontransferclub4 = 3;
       let untick7 = 4;
      let searchc = 5378170 >= icontransferclub4;
      do {
         icontransferclub4 >>= Math.min(3, Math.abs(2));
         if (searchc) {
            break;
         }
      } while (searchc && ((icontransferclub4 ^ 5) >= 4));
      componentregistryT.push(3);
   }
      mayi_push.playsPlaysTimesAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
        isXmode: adultMode,
      });

   while (policyq >= componentregistryT.length) {
      policyq *= (emojiheartz == String.fromCharCode(49,0) ? emojiheartz.length : parseInt(`${policyq}`));
      break;
   }
   while (castingt.length == 1) {
       let gpay2 = String.fromCharCode(105,100,105,111,109,95,105,95,56,52,0);
       let membershipq = String.fromCharCode(100,101,108,111,99,97,116,101,95,110,95,52,52,0);
         gpay2 += `${gpay2.length * 1}`;
      while (gpay2 != String.fromCharCode(74,0)) {
          let team1 = 2;
         membershipq = "3";
         team1 ^= 3 | team1;
         break;
      }
         membershipq += `${gpay2.length}`;
      for (let m = 0; m < 3; m++) {
         gpay2 = `${(membershipq == String.fromCharCode(111,0) ? gpay2.length : membershipq.length)}`;
      }
         gpay2 += `${gpay2.length % (Math.max(1, 1))}`;
       let club0 = String.fromCharCode(112,101,114,102,111,114,109,95,113,95,55,53,0);
      castingt += "2";
      break;
   }

      mayi_ForegroundLibfabricjni.playsPlaysTimesAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
        isXmode: adultMode,
      });
    }

    setReadyPlay(true);

   let launcherc = 5926075 >= librrcR;
   do {
      librrcR += 3;
      if (launcherc) {
         break;
      }
   } while (launcherc && (!castingt.startsWith(`${librrcR}`)));
       let hongkongT = false;
          let codeH: Map<any, any> = new Map([[String.fromCharCode(122,95,52,54,95,115,112,108,105,116,0),String.fromCharCode(108,95,49,54,95,101,120,105,102,0)], [String.fromCharCode(111,118,102,108,95,113,95,50,0),String.fromCharCode(108,103,111,114,97,110,100,95,112,95,49,52,0)], [String.fromCharCode(100,105,115,112,97,116,99,104,101,114,95,106,95,49,48,0),String.fromCharCode(105,95,51,49,95,109,98,103,114,97,112,104,0)]]);
          let actionI: Map<any, any> = new Map([[String.fromCharCode(109,95,55,53,0),String.fromCharCode(110,95,50,48,95,115,112,101,99,116,114,97,108,0)], [String.fromCharCode(98,97,100,95,102,95,49,57,0),String.fromCharCode(109,95,55,49,95,103,101,110,101,114,97,108,0)], [String.fromCharCode(108,105,98,119,101,98,112,95,106,95,50,51,0),String.fromCharCode(117,114,108,95,101,95,53,54,0)]]);
         hongkongT = actionI.size >= 44 && !hongkongT;
         codeH.set(`${codeH.size}`, codeH.size);
         actionI.set(`${codeH.size}`, 2 ^ codeH.size);
         hongkongT = (!hongkongT ? hongkongT : !hongkongT);
      if (hongkongT) {
          let selectedx = 5;
         hongkongT = 12 == selectedx;
      }
      librrcR &= emojiheartz.length;

    if (shouldResumeAfterLoad && videoPlayerRef.current) {

      emojiheartz = `${parseInt(`${policyq}`)}`;
      armvaO.push(3);
      videoPlayerRef.current?.setPause(false); 

      faviconG.push(1);
      librrcR ^= armvaO.length & componentregistryT.length;
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
       let statisticsinactiveZ = String.fromCharCode(98,101,108,111,110,103,115,95,114,95,51,49,0);
    let chinasameG = String.fromCharCode(97,99,116,117,97,108,95,108,95,51,53,0);
    let iconnotificationnewq = 0;
    let buttonD: Map<any, any> = new Map([[String.fromCharCode(115,115,115,101,95,55,95,54,54,0),String.fromCharCode(111,110,115,101,116,95,121,95,49,48,48,0)], [String.fromCharCode(105,103,110,111,114,101,100,95,57,95,53,0),String.fromCharCode(103,95,57,55,95,115,112,97,99,101,115,0)], [String.fromCharCode(106,95,57,53,95,98,121,116,101,114,117,110,0),String.fromCharCode(117,118,114,100,95,56,95,53,53,0)]]);
    let defaultroombg2 = String.fromCharCode(101,95,50,50,95,118,105,110,116,101,114,112,111,108,97,116,111,114,0);
    let megaphoner: Map<any, any> = new Map([[String.fromCharCode(118,95,54,51,95,115,117,98,118,105,101,119,115,0),String.fromCharCode(113,95,51,57,95,114,115,116,114,105,112,0)], [String.fromCharCode(112,95,53,56,95,109,105,120,0),String.fromCharCode(101,95,54,52,95,119,105,101,110,101,114,0)]]);
    let langkeyF = String.fromCharCode(119,97,108,108,112,97,112,101,114,115,95,117,95,56,52,0);
    let backicon2: Array<any> = [790, 956];
    let arrowrightwithtailp = String.fromCharCode(97,117,116,111,102,105,120,95,116,95,52,0);
    let runtimex = 4.0;
    let sourceG = String.fromCharCode(99,95,55,95,116,97,112,112,105,110,103,0);
    let iconbackwhiteu = String.fromCharCode(101,95,55,56,95,114,101,115,117,109,101,0);
    let orangeuparrowY = 0.0;
      chinasameG = `${chinasameG.length}`;
      buttonD = new Map([[chinasameG, chinasameG.length]]);
      langkeyF += `${3 << (Math.min(4, arrowrightwithtailp.length))}`;
   for (let o = 0; o < 2; o++) {
       let libnmsc = 3;
         libnmsc |= libnmsc ^ libnmsc;
          let dropdownE = false;
          let listg = 0;
          let trophyy: Array<any> = [String.fromCharCode(106,95,50,48,95,117,110,108,111,97,100,0), String.fromCharCode(108,95,57,49,95,119,115,97,117,100,0)];
         libnmsc *= trophyy.length;
         dropdownE = 25 < listg || 25 < listg;
      while ((1 * libnmsc) == 1 || (1 * libnmsc) == 5) {
          let chatroombackgroundX = 2.0;
          let bottom5 = 2.0;
          let buttoni = String.fromCharCode(108,95,55,55,95,112,105,99,107,105,110,103,0);
          let chartD = String.fromCharCode(98,95,54,57,95,117,110,101,109,98,101,100,0);
         libnmsc &= (String.fromCharCode(83,0) == chartD ? chartD.length : libnmsc);
         chatroombackgroundX += parseFloat(`${parseInt(`${bottom5}`)}`);
         buttoni = "1";
         break;
      }
      buttonD.set(`${iconnotificationnewq}`, iconnotificationnewq / (Math.max(1, 8)));
   }
      runtimex -= parseFloat(`${backicon2.length + 1}`);
   let basketballicon_ = iconnotificationnewq >= 7754844;
   do {
       let interstitialc = 4;
       let suggestion5 = 1.0;
      for (let k = 0; k < 1; k++) {
         suggestion5 /= Math.max(3, parseFloat(`${interstitialc}`));
      }
      if (interstitialc == suggestion5) {
          let libapminsightaL = 0.0;
          let storef = String.fromCharCode(100,101,99,101,108,101,114,97,116,105,110,103,95,107,95,53,54,0);
         interstitialc &= parseInt(`${suggestion5}`);
         libapminsightaL /= Math.max((storef == String.fromCharCode(84,0) ? storef.length : parseInt(`${libapminsightaL}`)), 2);
      }
      while (1.40 == (parseFloat(`${interstitialc}`) - suggestion5) && 1.40 == (suggestion5 - parseFloat(`${interstitialc}`))) {
          let h_positionh = 5;
          let resultT: Map<any, any> = new Map([[String.fromCharCode(117,110,105,111,110,101,100,95,105,95,53,57,0),String.fromCharCode(115,95,54,54,95,105,100,102,97,0)], [String.fromCharCode(115,95,51,57,95,102,115,121,110,99,0),String.fromCharCode(105,116,108,101,95,57,95,51,51,0)], [String.fromCharCode(114,101,99,111,110,110,101,99,116,95,53,95,50,52,0),String.fromCharCode(115,95,53,56,95,112,101,114,115,105,115,116,101,100,0)]]);
          let matchesd = String.fromCharCode(106,95,56,51,95,99,108,101,97,110,101,100,0);
          let matchess = 1.0;
         interstitialc *= 3;
         h_positionh += matchesd.length / (Math.max(5, h_positionh));
         resultT.set(`${matchess}`, parseInt(`${matchess}`));
         matchesd += "3";
         break;
      }
         suggestion5 += parseFloat(`${interstitialc + 3}`);
       let bootsplashE: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,100,97,116,97,95,116,95,55,57,0),40], [String.fromCharCode(116,119,105,100,100,108,101,95,101,95,51,49,0),752]]);
       let libfollyg: Map<any, any> = new Map([[String.fromCharCode(105,116,101,114,95,107,95,56,51,0),String.fromCharCode(115,117,102,102,105,120,95,120,95,49,56,0)], [String.fromCharCode(104,95,57,57,95,99,111,108,117,109,115,0),String.fromCharCode(105,95,51,50,95,119,105,110,100,111,119,115,0)]]);
         interstitialc |= 1;
      iconnotificationnewq %= Math.max(5, interstitialc);
      if (basketballicon_) {
         break;
      }
   } while (basketballicon_ && ((langkeyF.length % (Math.max(1, 1))) <= 1 && (iconnotificationnewq % 1) <= 4));
   let middlewareX = 5825650 <= backicon2.length;
   do {
       let reddownarrowH = 1;
       let friendsT = 2;
       let rnewarchdefaultsI = 5.0;
      if ((3 - friendsT) == 4 || 3 == (friendsT - reddownarrowH)) {
         friendsT &= 1 | reddownarrowH;
      }
       let t_centerE = 2.0;
       let librrcK: Array<any> = [980, 83];
      let libapminsightbe = librrcK.length >= 6887145;
      do {
         librrcK.push(librrcK.length);
         if (libapminsightbe) {
            break;
         }
      } while ((friendsT > 5) && libapminsightbe);
      for (let s = 0; s < 1; s++) {
         rnewarchdefaultsI -= parseFloat(`${reddownarrowH}`);
      }
          let commonc = 0;
         friendsT += librrcK.length ^ 2;
         commonc /= Math.max(5, commonc / (Math.max(commonc, 10)));
          let graphicsM = String.fromCharCode(115,101,99,116,111,114,95,118,95,52,49,0);
          let progressE = String.fromCharCode(102,111,114,101,103,114,111,117,110,100,95,50,95,52,57,0);
          let chatroombackgroundv = String.fromCharCode(108,95,55,53,95,97,116,116,97,99,107,0);
         friendsT >>= Math.min(librrcK.length, 4);
         graphicsM = "3";
         progressE = `${chatroombackgroundv.length / (Math.max(6, progressE.length))}`;
         chatroombackgroundv = `${progressE.length * 3}`;
          let sourcel: Array<any> = [String.fromCharCode(107,115,101,116,95,100,95,56,49,0), String.fromCharCode(115,101,112,97,114,97,116,111,114,95,105,95,51,49,0), String.fromCharCode(119,97,118,101,115,95,56,95,55,49,0)];
         rnewarchdefaultsI -= parseFloat(`${parseInt(`${rnewarchdefaultsI}`) % 2}`);
         sourcel.push(1);
       let x_unlockP: Array<any> = [572, 766];
       let resendl: Array<any> = [842, 13];
      backicon2 = [2 | backicon2.length];
      if (middlewareX) {
         break;
      }
   } while (middlewareX && ((langkeyF.length | 5) > 4 && (langkeyF.length | 5) > 2));
       let fastq = String.fromCharCode(114,95,50,50,95,97,112,112,108,121,105,110,103,0);
       let combine9 = 4;
      while (1 < (5 >> (Math.min(5, Math.abs(combine9))))) {
          let assisto: Array<any> = [57, 635, 344];
         fastq = `${assisto.length}`;
         break;
      }
      let executord = combine9 <= 6641852;
      do {
         combine9 ^= combine9 % (Math.max(fastq.length, 1));
         if (executord) {
            break;
         }
      } while ((5 < (combine9 >> (Math.min(fastq.length, 2))) && (fastq.length >> (Math.min(3, Math.abs(combine9)))) < 5) && executord);
         combine9 /= Math.max(combine9, 4);
         combine9 >>= Math.min(Math.abs(3 - combine9), 2);
       let settingsn = 3;
         combine9 %= Math.max(settingsn * combine9, 5);
      runtimex /= Math.max(1, parseFloat(`${buttonD.size}`));
      sourceG = `${arrowrightwithtailp.length << (Math.min(Math.abs(1), 2))}`;
   if (arrowrightwithtailp.length < chinasameG.length) {
      chinasameG += `${(arrowrightwithtailp == String.fromCharCode(85,0) ? chinasameG.length : arrowrightwithtailp.length)}`;
   }
       let iconlogoutu = 5.0;
       let custome: Map<any, any> = new Map([[String.fromCharCode(97,112,112,108,105,101,115,95,109,95,52,0),754], [String.fromCharCode(101,112,115,118,95,108,95,54,53,0),410], [String.fromCharCode(109,97,120,106,95,118,95,54,57,0),439]]);
       let arrowN = String.fromCharCode(108,95,55,51,95,115,121,110,99,104,114,111,110,105,115,101,100,0);
      for (let y = 0; y < 1; y++) {
          let slider6: Map<any, any> = new Map([[String.fromCharCode(101,118,97,108,115,95,97,95,52,54,0),640], [String.fromCharCode(117,95,49,52,95,115,97,109,112,108,101,0),980], [String.fromCharCode(116,95,49,57,95,109,109,99,111,115,0),994]]);
          let embedS = String.fromCharCode(111,97,117,116,104,95,112,95,54,53,0);
         iconlogoutu *= custome.size;
         slider6.set(`${embedS}`, (String.fromCharCode(57,0) == embedS ? slider6.size : embedS.length));
      }
      while ((arrowN.length >> (Math.min(Math.abs(5), 4))) == 4 || 5 == (custome.size >> (Math.min(arrowN.length, 3)))) {
         custome = new Map([[`${custome.size}`, arrowN.length & 2]]);
         break;
      }
      while (!arrowN.includes(`${iconlogoutu}`)) {
          let dependenciesr = 3.0;
         iconlogoutu *= custome.size | 1;
         dependenciesr /= Math.max(parseInt(`${dependenciesr}`), 4);
         break;
      }
      let libreactnativejni5 = 6976643 >= arrowN.length;
      do {
         arrowN += `${2 | custome.size}`;
         if (libreactnativejni5) {
            break;
         }
      } while (((2 & arrowN.length) == 5 || (custome.size & arrowN.length) == 2) && libreactnativejni5);
          let default_jp = 5.0;
         custome.set(`${default_jp}`, 1);
          let eighteenM = String.fromCharCode(112,97,115,115,101,100,95,120,95,55,48,0);
          let orangeM = String.fromCharCode(114,101,103,105,115,116,101,114,102,100,115,95,117,95,54,0);
         custome = new Map([[orangeM, orangeM.length ^ parseInt(`${iconlogoutu}`)]]);
         eighteenM += `${eighteenM.length}`;
      while (4.31 <= (4.86 + iconlogoutu) && (4.86 + iconlogoutu) <= 5.69) {
          let libavdevice4 = 0;
         iconlogoutu += libavdevice4;
         break;
      }
          let backiconr = 5.0;
         iconlogoutu -= arrowN.length;
         backiconr -= parseFloat(`${parseInt(`${backiconr}`) / 3}`);
      for (let l = 0; l < 2; l++) {
         arrowN = `${2 << (Math.min(5, Math.abs(custome.size)))}`;
      }
      megaphoner.set(`${runtimex}`, 2);
      arrowrightwithtailp = "3";
       let imagenetworkerrZ: Array<any> = [629, 103, 38];
       let bodan7 = 0.0;
      while (5 >= (imagenetworkerrZ.length + parseInt(`${bodan7}`))) {
         imagenetworkerrZ.push(parseInt(`${bodan7}`) % (Math.max(imagenetworkerrZ.length, 3)));
         break;
      }
          let downZ = String.fromCharCode(110,95,53,55,95,115,104,97,114,105,110,103,0);
         bodan7 *= parseFloat(`${downZ.length}`);
         bodan7 += parseFloat(`${parseInt(`${bodan7}`) << (Math.min(imagenetworkerrZ.length, 3))}`);
         bodan7 += parseFloat(`${3}`);
         imagenetworkerrZ = [imagenetworkerrZ.length - 3];
         imagenetworkerrZ.push(imagenetworkerrZ.length | 2);
      defaultroombg2 += `${2 / (Math.max(9, langkeyF.length))}`;
      defaultroombg2 += `${(sourceG == String.fromCharCode(107,0) ? sourceG.length : chinasameG.length)}`;
       let profilepic1 = 3;
      while ((profilepic1 / (Math.max(1, 10))) > 5) {
          let historye = 3;
          let greyticki = 4.0;
         profilepic1 %= Math.max(4, parseInt(`${greyticki}`) ^ historye);
         break;
      }
      while (2 >= profilepic1) {
         profilepic1 &= 2;
         break;
      }
      for (let i = 0; i < 1; i++) {
          let sellv = String.fromCharCode(105,95,56,52,95,116,120,116,110,105,100,0);
         profilepic1 &= 1;
         sellv = `${sellv.length | 3}`;
      }
      sourceG += `${2 + defaultroombg2.length}`;
       let libturbomodulejsijnis: Map<any, any> = new Map([[String.fromCharCode(117,95,54,49,95,112,111,112,117,112,0),String.fromCharCode(121,95,51,53,95,100,111,99,117,109,101,110,116,115,0)], [String.fromCharCode(102,95,54,57,95,102,99,102,115,0),String.fromCharCode(117,99,111,110,115,116,95,117,95,56,51,0)], [String.fromCharCode(120,95,57,50,95,105,110,102,105,110,105,116,101,0),String.fromCharCode(100,97,112,112,95,111,95,52,50,0)]]);
       let becomeI = 2;
       let defaultplayerimgd = String.fromCharCode(107,95,49,57,95,109,105,110,105,109,97,0);
      while (libturbomodulejsijnis.size > becomeI) {
          let iconarrowrightorangeT = String.fromCharCode(97,115,107,95,121,95,51,55,0);
          let whitetickh = 1.0;
         libturbomodulejsijnis.set(iconarrowrightorangeT, 3);
         iconarrowrightorangeT += `${parseInt(`${whitetickh}`) << (Math.min(1, Math.abs(1)))}`;
         whitetickh *= 3 - parseInt(`${whitetickh}`);
         break;
      }
         defaultplayerimgd += `${becomeI * 3}`;
      let mintegralf = defaultplayerimgd.length >= 4958415;
      do {
          let f_positionj = String.fromCharCode(112,111,108,108,101,114,95,53,95,57,55,0);
          let statisticsinactivet = String.fromCharCode(117,110,99,111,109,112,114,101,115,115,95,111,95,54,51,0);
          let g_position5 = String.fromCharCode(100,95,51,54,95,97,100,109,105,110,115,0);
          let castingj = String.fromCharCode(110,97,110,111,112,98,95,49,95,57,48,0);
          let iconeditn = String.fromCharCode(108,111,119,99,111,109,112,95,119,95,51,55,0);
         defaultplayerimgd = `${libturbomodulejsijnis.size / 3}`;
         f_positionj = `${(String.fromCharCode(85,0) == statisticsinactivet ? castingj.length : statisticsinactivet.length)}`;
         g_position5 += `${3 & castingj.length}`;
         iconeditn = `${iconeditn.length >> (Math.min(castingj.length, 4))}`;
         if (mintegralf) {
            break;
         }
      } while (mintegralf && (4 == (becomeI * defaultplayerimgd.length)));
         defaultplayerimgd = `${becomeI % (Math.max(5, libturbomodulejsijnis.size))}`;
      if ((libturbomodulejsijnis.size | becomeI) == 2) {
         becomeI += 3;
      }
      if ((2 % (Math.max(3, libturbomodulejsijnis.size))) < 1) {
         libturbomodulejsijnis = new Map([[`${libturbomodulejsijnis.size}`, 3]]);
      }
       let profileactiveQ = true;
       let clocke = true;
          let iconuserO = 1.0;
         libturbomodulejsijnis = new Map([[`${libturbomodulejsijnis.size}`, libturbomodulejsijnis.size]]);
         iconuserO *= parseInt(`${iconuserO}`) | 3;
         profileactiveQ = !profileactiveQ;
      megaphoner = new Map([[`${runtimex}`, parseInt(`${runtimex}`) % 2]]);
      arrowrightwithtailp = "1";

    setShowAdOverlay(true);

   for (let f = 0; f < 1; f++) {
      megaphoner = new Map([[`${megaphoner.size}`, megaphoner.size]]);
   }
   for (let h = 0; h < 3; h++) {
       let appsG = 1.0;
         appsG -= parseFloat(`${parseInt(`${appsG}`)}`);
         appsG /= Math.max(4, parseFloat(`${parseInt(`${appsG}`)}`));
      let pointr = appsG <= 7738989.0;
      do {
          let matchdetailbgR = true;
          let tempU = String.fromCharCode(97,95,56,49,95,110,111,104,119,0);
         appsG += (parseFloat(`${3 / (Math.max(5, (matchdetailbgR ? 1 : 1)))}`));
         matchdetailbgR = tempU.length > 58;
         tempU = `${tempU.length << (Math.min(Math.abs(2), 4))}`;
         if (pointr) {
            break;
         }
      } while (((appsG - 2.79) <= 5.41 || (appsG + 2.79) <= 5.62) && pointr);
      chinasameG += "2";
   }
       let tempnodatagifj: Map<any, any> = new Map([[String.fromCharCode(117,95,52,57,95,98,121,116,101,111,117,116,0),348], [String.fromCharCode(99,104,111,105,99,101,115,95,97,95,51,51,0),658]]);
       let match8 = 2;
         match8 <<= Math.min(4, Math.abs(3));
          let langkeyP: Array<any> = [139, 643, 507];
          let libjsinspectorf = 4.0;
          let libjsinspectorc: Array<any> = [429, 462];
         tempnodatagifj = new Map([[`${langkeyP.length}`, 1]]);
         langkeyP.push(1);
         libjsinspectorf -= libjsinspectorc.length;
         libjsinspectorc = [parseInt(`${libjsinspectorf}`)];
      let templateprocessor4 = 7514449 <= match8;
      do {
          let styleK = String.fromCharCode(122,111,111,109,97,98,108,101,95,54,95,50,53,0);
          let libnmsR = 5;
          let mimoj = String.fromCharCode(98,95,56,49,95,114,101,101,110,99,114,121,112,116,0);
          let sansB = String.fromCharCode(117,114,108,95,109,95,51,49,0);
          let settingsv = String.fromCharCode(109,111,100,101,95,54,95,56,53,0);
         match8 /= Math.max(5, sansB.length * mimoj.length);
         styleK = `${libnmsR ^ settingsv.length}`;
         libnmsR &= styleK.length;
         mimoj += "2";
         sansB = `${libnmsR / 1}`;
         settingsv += `${(settingsv == String.fromCharCode(88,0) ? settingsv.length : styleK.length)}`;
         if (templateprocessor4) {
            break;
         }
      } while ((2 >= (match8 ^ tempnodatagifj.size) && 1 >= (tempnodatagifj.size ^ 2)) && templateprocessor4);
      let libflipper9 = match8 >= 7600859;
      do {
          let static_wrj = 3.0;
         match8 ^= match8;
         static_wrj += parseFloat(`${parseInt(`${static_wrj}`)}`);
         if (libflipper9) {
            break;
         }
      } while (((tempnodatagifj.size >> (Math.min(Math.abs(4), 1))) > 5 && 4 > (match8 >> (Math.min(Math.abs(4), 2)))) && libflipper9);
       let humidityS = String.fromCharCode(100,95,53,48,95,100,105,116,104,101,114,0);
      if (5 > (1 >> (Math.min(5, Math.abs(match8))))) {
          let iconclosewhitebgQ = 2.0;
          let relatedR = String.fromCharCode(118,95,56,48,95,105,110,105,116,105,97,116,101,100,0);
          let update_ncc = String.fromCharCode(114,95,53,52,95,99,111,100,101,115,116,114,101,97,109,0);
         humidityS = "3";
         iconclosewhitebgQ -= 1;
         relatedR = `${update_ncc.length * relatedR.length}`;
         update_ncc = `${parseInt(`${iconclosewhitebgQ}`)}`;
      }
      iconnotificationnewq += 3 + buttonD.size;
   for (let e = 0; e < 2; e++) {
       let halffieldimageT = String.fromCharCode(101,95,50,50,95,100,105,115,99,97,114,100,101,100,0);
      for (let m = 0; m < 1; m++) {
         halffieldimageT += `${halffieldimageT.length << (Math.min(1, halffieldimageT.length))}`;
      }
       let libglogM = true;
       let anytimeD = true;
      while (!anytimeD) {
          let textlayoutmanagerC = false;
          let footballfieldi = 0;
          let calendarK = 2.0;
          let iconpipexpandI: Array<any> = [822, 118];
          let umeng3 = false;
         libglogM = anytimeD && footballfieldi <= 41;
         textlayoutmanagerC = iconpipexpandI.length > 35 && calendarK > 81.62;
         footballfieldi *= iconpipexpandI.length;
         calendarK += parseFloat(`${parseInt(`${calendarK}`) * iconpipexpandI.length}`);
         umeng3 = !umeng3;
         break;
      }
      chinasameG += `${iconnotificationnewq}`;
   }
      iconbackwhiteu += `${chinasameG.length / (Math.max(3, 4))}`;
      iconbackwhiteu = `${iconnotificationnewq / 1}`;
   let trophyR = 8944520 <= arrowrightwithtailp.length;
   do {
       let reactnativeratingsa = 0;
          let kicky: Map<any, any> = new Map([[String.fromCharCode(115,95,55,57,95,118,108,105,110,101,0),String.fromCharCode(100,111,109,97,105,110,95,108,95,49,48,48,0)], [String.fromCharCode(119,114,105,116,101,97,98,108,101,95,106,95,53,55,0),String.fromCharCode(102,116,115,105,115,115,112,97,99,101,95,48,95,51,48,0)]]);
         reactnativeratingsa -= kicky.size + reactnativeratingsa;
      while ((reactnativeratingsa >> (Math.min(5, Math.abs(reactnativeratingsa)))) >= 4 && (reactnativeratingsa >> (Math.min(Math.abs(reactnativeratingsa), 5))) >= 4) {
          let dragJ = true;
          let crickets: Map<any, any> = new Map([[String.fromCharCode(122,95,53,49,95,114,101,116,117,114,110,0),true ], [String.fromCharCode(111,95,57,53,95,103,114,111,117,112,105,110,103,0),true ], [String.fromCharCode(112,117,108,115,101,95,97,95,52,55,0),false ]]);
          let lineg = String.fromCharCode(111,95,53,50,95,109,101,116,104,111,100,115,0);
          let reminderC: Map<any, any> = new Map([[String.fromCharCode(105,110,118,97,108,105,100,97,116,105,111,110,95,109,95,49,48,0),true ], [String.fromCharCode(110,95,54,57,95,117,112,108,111,97,100,0),false ]]);
         reactnativeratingsa ^= ((dragJ ? 3 : 5));
         dragJ = reminderC.size > lineg.length;
         crickets = new Map([[`${reminderC.size}`, reminderC.size]]);
         lineg += `${crickets.size}`;
         break;
      }
          let completej = String.fromCharCode(103,95,53,49,95,109,121,115,101,108,102,0);
         reactnativeratingsa %= Math.max(1, 1);
         completej += `${1 >> (Math.min(4, completej.length))}`;
      arrowrightwithtailp += `${langkeyF.length}`;
      if (trophyR) {
         break;
      }
   } while (((4 << (Math.min(4, Math.abs(buttonD.size)))) <= 5 && 4 <= (4 << (Math.min(5, arrowrightwithtailp.length)))) && trophyR);
   let yellowanimationlivev = 6313450 <= iconbackwhiteu.length;
   do {
      iconbackwhiteu = `${megaphoner.size - parseInt(`${runtimex}`)}`;
      if (yellowanimationlivev) {
         break;
      }
   } while ((iconbackwhiteu.length >= 5) && yellowanimationlivev);
   let attributedstringW = 5999040.0 <= runtimex;
   do {
      runtimex += parseFloat(`${chinasameG.length & 2}`);
      if (attributedstringW) {
         break;
      }
   } while ((4.14 < runtimex) && attributedstringW);
   while ((langkeyF.length >> (Math.min(Math.abs(2), 4))) > 1) {
      iconnotificationnewq >>= Math.min(Math.abs((arrowrightwithtailp == String.fromCharCode(87,0) ? arrowrightwithtailp.length : backicon2.length)), 4);
      break;
   }
       let pauseC: Array<any> = [727, 613];
      while (3 < (pauseC.length * 2)) {
          let formb: Array<any> = [833, 401];
          let libapminsightbd = true;
          let basketballplayerplaceholderU: Array<any> = [String.fromCharCode(110,95,52,57,95,101,120,112,111,114,116,0), String.fromCharCode(122,95,51,53,95,114,101,113,117,101,115,116,115,0), String.fromCharCode(112,111,116,105,115,105,111,110,95,97,95,55,52,0)];
          let e_managerT = String.fromCharCode(99,101,114,116,95,102,95,49,56,0);
         pauseC.push(pauseC.length ^ 2);
         formb.push(e_managerT.length);
         libapminsightbd = !libapminsightbd || formb.length == 69;
         basketballplayerplaceholderU = [basketballplayerplaceholderU.length % 1];
         e_managerT = `${e_managerT.length}`;
         break;
      }
      for (let t = 0; t < 3; t++) {
          let penaltyshootD = String.fromCharCode(108,95,56,52,95,112,114,101,112,101,110,100,0);
          let currentG: Map<any, any> = new Map([[String.fromCharCode(97,117,100,105,111,95,117,95,57,51,0),true ], [String.fromCharCode(111,95,52,51,0),true ], [String.fromCharCode(101,95,56,48,95,99,97,110,99,101,108,0),false ]]);
          let predictiondefaultV: Array<any> = [659, 183];
          let lessJ = false;
         pauseC = [predictiondefaultV.length];
         penaltyshootD = `${currentG.size | 3}`;
         currentG = new Map([[`${currentG.size}`, ((lessJ ? 1 : 1) * 2)]]);
         predictiondefaultV.push(((lessJ ? 2 : 3) | penaltyshootD.length));
      }
      if (4 == (pauseC.length - pauseC.length)) {
         pauseC.push(pauseC.length * 3);
      }
      orangeuparrowY += iconnotificationnewq + langkeyF.length;
   if (4 >= (5 / (Math.max(2, buttonD.size))) && 3 >= (buttonD.size / 5)) {
      megaphoner = new Map([[`${runtimex}`, statisticsinactiveZ.length]]);
   }
   while ((5 | iconnotificationnewq) > 1 && 5 > (statisticsinactiveZ.length | iconnotificationnewq)) {
      statisticsinactiveZ += `${2 / (Math.max(9, parseInt(`${orangeuparrowY}`)))}`;
      break;
   }
       let downarrowS: Map<any, any> = new Map([[String.fromCharCode(97,110,103,101,95,53,95,48,0),759], [String.fromCharCode(110,95,54,55,95,102,108,116,112,0),633], [String.fromCharCode(112,114,101,99,95,111,95,57,53,0),643]]);
          let shareZ = String.fromCharCode(110,111,116,105,102,105,101,114,95,116,95,57,48,0);
          let iconfeedback2 = true;
          let giftbuttonX = String.fromCharCode(120,112,101,114,105,109,101,110,116,97,108,95,111,95,50,55,0);
         downarrowS = new Map([[`${downarrowS.size}`, downarrowS.size]]);
         shareZ = "1";
         iconfeedback2 = (7 < (giftbuttonX.length * (!iconfeedback2 ? giftbuttonX.length : 7)));
          let privatechatbgl = false;
          let iconrightorange_ = String.fromCharCode(115,116,97,110,100,97,114,100,95,56,95,56,53,0);
         downarrowS.set(iconrightorange_, (iconrightorange_ == String.fromCharCode(106,0) ? iconrightorange_.length : downarrowS.size));
         privatechatbgl = (privatechatbgl ? !privatechatbgl : privatechatbgl);
      if (1 <= (downarrowS.size + 4) && (downarrowS.size + 4) <= 5) {
         downarrowS.set(`${downarrowS.size}`, downarrowS.size);
      }
      runtimex += parseFloat(`${iconnotificationnewq / 2}`);
      backicon2.push(3 & arrowrightwithtailp.length);
   if (!iconbackwhiteu.includes(arrowrightwithtailp)) {
       let imagenomoredata9: Map<any, any> = new Map([[String.fromCharCode(99,104,97,114,116,95,98,95,57,52,0),String.fromCharCode(119,95,49,51,95,112,108,97,110,97,114,120,0)], [String.fromCharCode(112,111,105,115,111,110,95,51,95,57,50,0),String.fromCharCode(105,110,116,101,114,110,101,100,95,55,95,52,0)]]);
       let loginh = 0;
       let arrowj = true;
       let unticki = String.fromCharCode(114,95,54,95,104,97,110,100,108,101,100,0);
         arrowj = unticki.startsWith(`${loginh}`);
      while (3 >= imagenomoredata9.size && 2 >= (imagenomoredata9.size ^ 3)) {
          let routera = 5.0;
          let downloadedf: Array<any> = [984, 350, 463];
          let sellmathbackgroundo: Array<any> = [442, 791];
          let verticalE: Array<any> = [44, 583];
         arrowj = !arrowj;
         routera -= 2 ^ sellmathbackgroundo.length;
         downloadedf.push(downloadedf.length);
         sellmathbackgroundo = [sellmathbackgroundo.length - verticalE.length];
         verticalE.push(1 + downloadedf.length);
         break;
      }
         loginh *= ((arrowj ? 4 : 4));
      while (loginh <= imagenomoredata9.size) {
         imagenomoredata9 = new Map([[`${arrowj}`, 2 * loginh]]);
         break;
      }
         arrowj = imagenomoredata9.size > 43;
       let forwardC = String.fromCharCode(114,101,108,101,97,115,101,95,109,95,54,54,0);
       let runtime5 = String.fromCharCode(111,103,103,105,110,103,95,105,95,57,55,0);
         arrowj = 74 > loginh;
      while (!arrowj) {
         unticki = `${loginh}`;
         break;
      }
      iconbackwhiteu = "3";
   }
   for (let o = 0; o < 3; o++) {
      langkeyF += `${(defaultroombg2 == String.fromCharCode(54,0) ? megaphoner.size : defaultroombg2.length)}`;
   }
    videoPlayerRef.current?.setPause(true);
  };

  const onCloseAdOverlay = () => {
       let scorepopsoundR = String.fromCharCode(100,105,102,102,101,114,95,54,95,54,48,0);
    let long_aS = String.fromCharCode(119,97,118,114,101,97,100,101,114,95,118,95,54,54,0);
    let close8 = String.fromCharCode(108,105,116,101,114,97,108,95,57,95,53,51,0);
    let register_wpl: Array<any> = [369, 836, 636];
    let iconclosewhite1 = String.fromCharCode(109,111,122,106,112,101,103,95,104,95,50,57,0);
    let targetH = 2.0;
    let libreactnativejniw: Array<any> = [460, 827, 345];
    let orientationF = String.fromCharCode(102,95,49,54,95,106,117,115,116,105,102,105,99,97,116,105,111,110,0);
    let configG: Array<any> = [825, 751, 475];
    let popupa = String.fromCharCode(106,95,50,55,95,115,116,97,114,116,105,110,103,0);
    let overlayt = 1.0;
    let calendarE: Map<any, any> = new Map([[String.fromCharCode(118,95,50,54,95,105,110,112,111,115,0),446], [String.fromCharCode(100,101,99,111,114,114,101,108,97,116,105,111,110,95,108,95,55,56,0),52]]);
    let iconmore7 = String.fromCharCode(101,120,99,101,101,100,95,53,95,57,49,0);
    let libfiler = 0;
    let baidui = 5;
       let specJ = false;
       let checkboxm = 5.0;
          let iconqqb = String.fromCharCode(101,109,111,106,105,95,99,95,57,55,0);
          let gradleh = String.fromCharCode(105,110,116,114,110,108,95,97,95,53,0);
          let attributedstringD = String.fromCharCode(118,95,57,50,95,114,101,106,111,105,110,0);
         checkboxm /= Math.max((parseFloat(`${String.fromCharCode(74,0) == gradleh ? iconqqb.length : gradleh.length}`)), 5);
         iconqqb = `${attributedstringD.length}`;
       let subs4 = 3.0;
       let dycreatorN = 5.0;
      let downloadera = checkboxm >= 5629723.0;
      do {
         checkboxm *= parseFloat(`${3}`);
         if (downloadera) {
            break;
         }
      } while ((5.21 < (checkboxm / 1.83)) && downloadera);
       let transferV: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,115,104,111,108,100,115,95,120,95,53,53,0),160], [String.fromCharCode(111,95,50,49,95,122,105,112,112,101,100,0),684], [String.fromCharCode(116,104,114,111,117,103,104,112,117,116,95,52,95,52,53,0),270]]);
      for (let s = 0; s < 2; s++) {
          let launcher8 = 5.0;
          let scoreP = String.fromCharCode(103,95,56,95,99,108,101,97,114,101,100,0);
          let inouttargetred3: Map<any, any> = new Map([[String.fromCharCode(118,95,56,49,95,99,111,108,108,101,99,116,105,111,110,115,0),String.fromCharCode(116,95,54,54,95,100,101,108,97,116,101,100,0)], [String.fromCharCode(111,95,50,50,95,109,105,110,105,109,97,108,0),String.fromCharCode(105,95,49,56,95,110,115,116,97,110,116,0)]]);
         dycreatorN -= 1 & scoreP.length;
         launcher8 -= parseInt(`${launcher8}`) >> (Math.min(Math.abs(inouttargetred3.size), 1));
         scoreP = "3";
         inouttargetred3.set(`${launcher8}`, inouttargetred3.size);
      }
      for (let a = 0; a < 1; a++) {
          let matchW = 2.0;
         subs4 += parseInt(`${dycreatorN}`) / 3;
         matchW += 1;
      }
      orientationF += `${parseInt(`${targetH}`) / 2}`;
      specJ = specJ && !specJ;
   if ((3 - scorepopsoundR.length) == 1) {
      scorepopsoundR += `${long_aS.length + close8.length}`;
   }
   let umengG = popupa == String.fromCharCode(52,50,103,112,114,102,95,100,118,0);
   do {
      popupa = `${parseInt(`${overlayt}`) << (Math.min(register_wpl.length, 3))}`;
      if (umengG) {
         break;
      }
   } while (umengG && (!popupa.startsWith(`${scorepopsoundR.length}`)));
       let stringc: Array<any> = [848, 371];
         stringc = [1 / (Math.max(8, stringc.length))];
          let redirectW = true;
         stringc = [((redirectW ? 2 : 3) + 3)];
      for (let y = 0; y < 1; y++) {
         stringc = [3 + stringc.length];
      }
      close8 += `${parseInt(`${overlayt}`) << (Math.min(libreactnativejniw.length, 2))}`;
      scorepopsoundR += `${1 / (Math.max(7, parseInt(`${overlayt}`)))}`;
   let smallg = popupa == String.fromCharCode(109,56,52,100,49,101,0);
   do {
      popupa += `${long_aS.length}`;
      if (smallg) {
         break;
      }
   } while ((1 <= libreactnativejniw.length) && smallg);
   let gmailo = 5089448 >= configG.length;
   do {
       let liveshareY = String.fromCharCode(117,115,101,114,105,110,116,101,114,102,97,99,101,95,54,95,55,57,0);
       let register_yS = String.fromCharCode(115,97,109,112,108,101,114,97,116,101,115,95,122,95,51,54,0);
       let refreshborderlessw = 4;
      while ((register_yS.length & 4) < 3 || 4 < (refreshborderlessw & register_yS.length)) {
         register_yS = `${1 - refreshborderlessw}`;
         break;
      }
         register_yS = `${(String.fromCharCode(104,0) == liveshareY ? refreshborderlessw : liveshareY.length)}`;
      let recommendationa = register_yS == String.fromCharCode(112,102,109,98,97,98,50,99,0);
      do {
         register_yS += `${liveshareY.length & register_yS.length}`;
         if (recommendationa) {
            break;
         }
      } while ((refreshborderlessw < register_yS.length) && recommendationa);
          let orange2 = 4.0;
          let previewo: Map<any, any> = new Map([[String.fromCharCode(114,103,98,116,111,121,118,95,51,95,53,0),539], [String.fromCharCode(119,105,100,101,102,101,108,101,109,95,57,95,56,54,0),900]]);
         refreshborderlessw ^= refreshborderlessw;
         orange2 *= parseFloat(`${2 ^ previewo.size}`);
         previewo.set(`${orange2}`, 3 - previewo.size);
         liveshareY += `${register_yS.length % (Math.max(7, liveshareY.length))}`;
         register_yS += `${liveshareY.length + register_yS.length}`;
         register_yS += `${register_yS.length}`;
      let sharew = register_yS == String.fromCharCode(51,110,102,120,107,0);
      do {
         register_yS += "3";
         if (sharew) {
            break;
         }
      } while ((2 == (4 ^ refreshborderlessw) || 5 == (refreshborderlessw ^ 4)) && sharew);
         refreshborderlessw %= Math.max(1 << (Math.min(3, liveshareY.length)), 4);
      configG.push(orientationF.length | long_aS.length);
      if (gmailo) {
         break;
      }
   } while (gmailo && (configG.length > 2));
   let defaultlogoj = 6449286 >= iconclosewhite1.length;
   do {
       let usernameW = true;
      while (!usernameW) {
         usernameW = (!usernameW ? usernameW : usernameW);
         break;
      }
      if (!usernameW) {
          let with_rvY = 2;
          let detailsE = 2.0;
          let untickF = false;
          let macauh = 1;
          let usernameY = 1.0;
         usernameW = !usernameW;
         with_rvY -= (macauh * (untickF ? 1 : 5));
         detailsE += 3 * parseInt(`${usernameY}`);
         untickF = usernameY >= detailsE;
         macauh /= Math.max(5, 2 / (Math.max(10, parseInt(`${detailsE}`))));
      }
      let statse = usernameW ? !usernameW : usernameW;
      do {
          let vnewarchdefaultsm = String.fromCharCode(121,95,51,55,95,101,116,104,114,101,97,100,0);
          let statisticsinactivey: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,114,105,95,56,95,51,55,0),false ], [String.fromCharCode(99,104,114,111,109,105,117,109,95,103,95,56,55,0),true ]]);
          let core9: Array<any> = [398, 967];
          let const__M = String.fromCharCode(115,99,99,111,110,102,105,103,95,110,95,50,48,0);
         usernameW = const__M == String.fromCharCode(84,0) || 98 >= core9.length;
         vnewarchdefaultsm = `${(vnewarchdefaultsm == String.fromCharCode(79,0) ? statisticsinactivey.size : vnewarchdefaultsm.length)}`;
         statisticsinactivey = new Map([[`${statisticsinactivey.size}`, vnewarchdefaultsm.length]]);
         core9.push(statisticsinactivey.size);
         const__M = `${(vnewarchdefaultsm == String.fromCharCode(89,0) ? statisticsinactivey.size : vnewarchdefaultsm.length)}`;
         if (statse) {
            break;
         }
      } while ((!usernameW && !usernameW) && statse);
      iconclosewhite1 += `${3 * long_aS.length}`;
      if (defaultlogoj) {
         break;
      }
   } while ((popupa.length >= 2) && defaultlogoj);
   let videovarN = 7308581 >= orientationF.length;
   do {
      orientationF = `${calendarE.size}`;
      if (videovarN) {
         break;
      }
   } while (((orientationF.length ^ 2) > 5 || 4.71 > (parseFloat(`${orientationF.length}`) + overlayt)) && videovarN);
      popupa += "1";
   if (1 < (5 * configG.length)) {
      configG = [orientationF.length & 2];
   }
      register_wpl = [2 + calendarE.size];
      long_aS += `${2 / (Math.max(1, register_wpl.length))}`;
   let foundp = targetH <= 6130645.0;
   do {
      targetH += calendarE.size;
      if (foundp) {
         break;
      }
   } while (((2.90 * targetH) <= 4.3 && 2 <= (iconmore7.length / 4)) && foundp);
      libreactnativejniw = [register_wpl.length];
   if (close8.length < iconmore7.length) {
       let cleart = String.fromCharCode(100,113,117,111,116,101,95,112,95,50,55,0);
       let playercommonQ = 5.0;
       let iconwatchF = true;
      for (let z = 0; z < 2; z++) {
         iconwatchF = playercommonQ >= 78.43;
      }
      let updatesm = cleart == String.fromCharCode(122,51,119,97,51,117,106,115,102,0);
      do {
         cleart += `${((iconwatchF ? 3 : 5) ^ parseInt(`${playercommonQ}`))}`;
         if (updatesm) {
            break;
         }
      } while (updatesm && (5.21 < (2.27 - playercommonQ) && (cleart.length / 4) < 3));
      if (playercommonQ >= cleart.length) {
         playercommonQ *= (parseInt(`${playercommonQ}`) & (iconwatchF ? 1 : 4));
      }
          let main_so = String.fromCharCode(105,115,112,97,99,107,101,100,95,105,95,56,49,0);
         cleart += `${main_so.length}`;
         iconwatchF = !iconwatchF;
      for (let b = 0; b < 3; b++) {
         iconwatchF = !iconwatchF;
      }
      for (let g = 0; g < 2; g++) {
         iconwatchF = 25.18 >= playercommonQ;
      }
      if (1.55 == playercommonQ) {
         cleart = `${parseInt(`${playercommonQ}`) + 1}`;
      }
      for (let k = 0; k < 3; k++) {
         playercommonQ *= ((iconwatchF ? 3 : 3) ^ parseInt(`${playercommonQ}`));
      }
      close8 += `${iconmore7.length / 3}`;
   }
      popupa += `${parseInt(`${overlayt}`)}`;
   while (!iconclosewhite1.endsWith(`${targetH}`)) {
       let iconbackwhitet = String.fromCharCode(105,95,51,49,95,102,114,97,109,101,115,101,116,116,101,114,0);
       let videovare = 2.0;
       let shrink0 = String.fromCharCode(118,95,56,53,95,103,100,111,99,0);
       let classese = String.fromCharCode(104,95,51,52,95,105,110,100,101,112,101,110,100,101,110,99,101,0);
       let bgvipxvodq = String.fromCharCode(110,111,116,97,116,105,111,110,95,53,95,52,48,0);
          let libturbomodulejsijniQ = 1;
         iconbackwhitet += `${iconbackwhitet.length}`;
         libturbomodulejsijniQ *= libturbomodulejsijniQ % 3;
       let handlerN: Array<any> = [String.fromCharCode(105,95,50,50,95,99,111,114,114,101,99,116,105,111,110,0), String.fromCharCode(115,101,116,108,105,115,116,95,108,95,49,0)];
      let libffmpegkitp = 9129715 >= classese.length;
      do {
         classese = `${(shrink0 == String.fromCharCode(78,0) ? shrink0.length : iconbackwhitet.length)}`;
         if (libffmpegkitp) {
            break;
         }
      } while ((shrink0.length == classese.length) && libffmpegkitp);
      if (iconbackwhitet.length >= 4) {
         iconbackwhitet += `${iconbackwhitet.length ^ parseInt(`${videovare}`)}`;
      }
      for (let v = 0; v < 3; v++) {
         shrink0 += `${parseInt(`${videovare}`) / 2}`;
      }
         shrink0 += `${bgvipxvodq.length}`;
       let dicef = 1.0;
         handlerN = [2 - classese.length];
      for (let h = 0; h < 1; h++) {
         classese += `${(bgvipxvodq == String.fromCharCode(67,0) ? parseInt(`${dicef}`) : bgvipxvodq.length)}`;
      }
         videovare -= parseFloat(`${parseInt(`${videovare}`)}`);
      if ((parseInt(`${dicef}`) / (Math.max(iconbackwhitet.length, 1))) <= 4 && 4 <= (iconbackwhitet.length % (Math.max(4, 3)))) {
         dicef += handlerN.length + parseInt(`${dicef}`);
      }
       let policyb = String.fromCharCode(118,95,57,54,95,110,101,108,108,121,109,111,115,101,114,0);
       let light2 = String.fromCharCode(108,95,50,48,0);
         light2 += `${parseInt(`${dicef}`)}`;
      for (let w = 0; w < 2; w++) {
         dicef /= Math.max((String.fromCharCode(116,0) == iconbackwhitet ? handlerN.length : iconbackwhitet.length), 4);
      }
      let iconeditK = 6915204.0 >= dicef;
      do {
         dicef += 1 - parseInt(`${videovare}`);
         if (iconeditK) {
            break;
         }
      } while (iconeditK && (4 <= classese.length));
      targetH += libreactnativejniw.length & 1;
      break;
   }
      close8 = `${orientationF.length | 3}`;

    setShowAdOverlay(false);

   if (2 == popupa.length) {
      overlayt *= (parseFloat(`${orientationF == String.fromCharCode(82,0) ? orientationF.length : parseInt(`${overlayt}`)}`));
   }
      iconmore7 = `${2 & iconclosewhite1.length}`;
       let cast_ = String.fromCharCode(102,105,108,116,101,114,115,95,115,95,50,55,0);
       let thailandO = 4.0;
       let mappingh: Map<any, any> = new Map([[String.fromCharCode(109,95,55,48,95,102,99,111,100,101,0),450], [String.fromCharCode(103,111,108,100,95,101,95,53,48,0),486]]);
      for (let m = 0; m < 1; m++) {
         thailandO += parseFloat(`${cast_.length}`);
      }
       let overlayg = 3.0;
       let placement2 = 5.0;
          let screenN = String.fromCharCode(101,95,51,53,95,108,105,102,116,0);
          let helperM: Array<any> = [String.fromCharCode(112,114,101,115,101,116,115,95,51,95,53,49,0), String.fromCharCode(119,95,54,55,0)];
          let rulesK = 4.0;
         overlayg /= Math.max(parseInt(`${rulesK}`) * cast_.length, 2);
         screenN += `${helperM.length + screenN.length}`;
         helperM.push((String.fromCharCode(106,0) == screenN ? screenN.length : helperM.length));
         rulesK /= Math.max(2, parseFloat(`${screenN.length}`));
      while ((5 ^ mappingh.size) < 2 && 5.48 < (thailandO + 2.36)) {
          let launchL = 4.0;
          let iconarrowrightwhite5: Array<any> = [121, 783];
          let crosso = String.fromCharCode(119,97,118,112,97,99,107,101,110,99,95,112,95,49,51,0);
          let nendm = String.fromCharCode(122,95,49,56,95,110,111,116,0);
          let alerth = true;
         thailandO /= Math.max(parseFloat(`${1 * parseInt(`${launchL}`)}`), 5);
         launchL += parseFloat(`${nendm.length}`);
         iconarrowrightwhite5 = [2 - nendm.length];
         crosso += `${crosso.length}`;
         break;
      }
          let mountingy = String.fromCharCode(113,95,50,0);
          let librrc2 = String.fromCharCode(114,101,99,116,105,102,121,95,97,95,51,49,0);
         mappingh.set(`${thailandO}`, parseInt(`${thailandO}`));
         mountingy += `${librrc2.length}`;
         librrc2 = `${2 >> (Math.min(5, mountingy.length))}`;
      if (4 > (parseInt(`${overlayg}`) + cast_.length)) {
          let phoneY: Map<any, any> = new Map([[String.fromCharCode(118,95,51,51,95,122,102,114,101,101,0),false ], [String.fromCharCode(121,95,49,48,48,95,116,101,115,116,105,109,103,105,110,116,0),true ], [String.fromCharCode(108,115,98,102,117,108,108,95,104,95,52,52,0),false ]]);
          let anythinku: Array<any> = [761, 299];
          let trophyH = String.fromCharCode(109,105,110,117,116,101,95,109,95,55,56,0);
          let short_08h: Array<any> = [782, 874, 344];
          let largesoundd: Map<any, any> = new Map([[String.fromCharCode(120,95,55,49,95,115,118,97,103,0),470], [String.fromCharCode(101,95,48,95,99,97,115,116,0),938]]);
         overlayg *= anythinku.length;
         phoneY = new Map([[`${phoneY.size}`, trophyH.length & phoneY.size]]);
         anythinku.push(trophyH.length);
         short_08h = [1];
         largesoundd = new Map([[`${largesoundd.size}`, (trophyH == String.fromCharCode(88,0) ? largesoundd.size : trophyH.length)]]);
      }
         cast_ += `${parseInt(`${overlayg}`)}`;
         placement2 += parseInt(`${placement2}`) ^ 3;
      for (let h = 0; h < 2; h++) {
          let ewardedq = String.fromCharCode(115,111,99,105,97,108,95,110,95,55,0);
          let mbnativeadvancedM = String.fromCharCode(116,95,51,55,95,115,111,117,110,100,101,120,0);
         cast_ = `${parseInt(`${overlayg}`) ^ parseInt(`${thailandO}`)}`;
         ewardedq += `${2 % (Math.max(2, mbnativeadvancedM.length))}`;
         mbnativeadvancedM = `${mbnativeadvancedM.length % (Math.max(10, ewardedq.length))}`;
      }
      configG = [3 + mappingh.size];
   let statisticsinactiveM = 6613822.0 >= overlayt;
   do {
      overlayt *= parseFloat(`${1 << (Math.min(5, long_aS.length))}`);
      if (statisticsinactiveM) {
         break;
      }
   } while ((register_wpl.includes(overlayt)) && statisticsinactiveM);
      configG = [calendarE.size ^ iconmore7.length];
      popupa += `${(String.fromCharCode(53,0) == orientationF ? parseInt(`${overlayt}`) : orientationF.length)}`;
   for (let k = 0; k < 1; k++) {
      iconclosewhite1 += `${(popupa == String.fromCharCode(56,0) ? scorepopsoundR.length : popupa.length)}`;
   }
   let circle4 = libreactnativejniw.length <= 6356293;
   do {
      libreactnativejniw = [close8.length];
      if (circle4) {
         break;
      }
   } while (circle4 && (3 < libreactnativejniw.length));
      calendarE.set(`${targetH}`, scorepopsoundR.length << (Math.min(3, Math.abs(parseInt(`${targetH}`)))));
      overlayt *= parseFloat(`${2 << (Math.min(4, orientationF.length))}`);
      popupa += `${calendarE.size << (Math.min(iconclosewhite1.length, 1))}`;
      calendarE.set(close8, close8.length);
      scorepopsoundR = `${iconclosewhite1.length >> (Math.min(Math.abs(2), 3))}`;
      iconmore7 = `${2 % (Math.max(7, calendarE.size))}`;
      iconclosewhite1 += `${register_wpl.length | close8.length}`;
       let countryv: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,108,105,122,97,116,105,111,110,115,95,108,95,57,49,0),580], [String.fromCharCode(114,101,99,101,105,118,101,95,99,95,54,0),441]]);
       let indicatoro: Array<any> = [246, 74, 179];
         countryv.set(`${indicatoro.length}`, indicatoro.length / (Math.max(2, 3)));
      let predictionarrowT = 9616325 >= indicatoro.length;
      do {
          let codef: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,97,108,105,110,103,95,54,95,53,49,0),690], [String.fromCharCode(99,114,121,112,116,95,112,95,56,52,0),29], [String.fromCharCode(112,105,99,107,95,118,95,53,55,0),728]]);
          let zhengpians = true;
          let middlek = String.fromCharCode(104,97,110,100,108,101,100,95,110,95,50,56,0);
          let smallo = false;
         indicatoro.push(((zhengpians ? 3 : 1) << (Math.min(Math.abs((smallo ? 3 : 4)), 1))));
         codef = new Map([[`${codef.size}`, (String.fromCharCode(89,0) == middlek ? middlek.length : codef.size)]]);
         zhengpians = 25 >= codef.size && middlek == String.fromCharCode(66,0);
         smallo = String.fromCharCode(99,0) == middlek;
         if (predictionarrowT) {
            break;
         }
      } while (((2 << (Math.min(3, indicatoro.length))) < 4 || 4 < (indicatoro.length << (Math.min(Math.abs(2), 1)))) && predictionarrowT);
      if (1 == (indicatoro.length / (Math.max(3, countryv.size)))) {
         countryv = new Map([[`${countryv.size}`, indicatoro.length]]);
      }
      for (let j = 0; j < 2; j++) {
         countryv = new Map([[`${countryv.size}`, countryv.size * indicatoro.length]]);
      }
         indicatoro = [3];
      while (Array.from(countryv.keys()).includes(`${indicatoro.length}`)) {
         countryv.set(`${indicatoro.length}`, 2 + countryv.size);
         break;
      }
      scorepopsoundR = `${scorepopsoundR.length % (Math.max(1, 4))}`;
   for (let m = 0; m < 3; m++) {
      close8 = `${scorepopsoundR.length}`;
   }
   while (1 >= (iconclosewhite1.length % (Math.max(2, register_wpl.length)))) {
      iconclosewhite1 += "3";
      break;
   }
       let sortR: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,101,100,95,99,95,51,0),852], [String.fromCharCode(104,95,57,95,115,112,101,101,100,0),518]]);
      while ((5 & sortR.size) > 2 || 5 > (sortR.size & sortR.size)) {
         sortR.set(`${sortR.size}`, 2);
         break;
      }
         sortR.set(`${sortR.size}`, sortR.size);
      while (!Array.from(sortR.keys()).includes(`${sortR.size}`)) {
         sortR = new Map([[`${sortR.size}`, sortR.size]]);
         break;
      }
      long_aS = `${calendarE.size}`;
    videoPlayerRef.current?.setPause(false);
  };

  const isEpisodeDownloaded = adultMode
    ? downloadedVod?.episodes.find((x) => x.vodUrlNid === currentEpisode)
      ?.status === CUASheetIconarrowright.CUAAttributedstring
    : downloadedVod?.episodes.find(
      (x) =>
        x.vodSourceId === currentSourceId && x.vodUrlNid === currentEpisode
    )?.status === CUASheetIconarrowright.CUAAttributedstring;

  
  
  

  const getPosition = () => {
       let activityg = String.fromCharCode(120,95,56,57,95,111,97,117,116,104,0);
    let grayR = 1.0;
    let malaysia3: Map<any, any> = new Map([[String.fromCharCode(100,95,52,49,95,115,116,114,117,99,116,117,114,97,108,0),449], [String.fromCharCode(109,115,105,122,101,95,102,95,51,49,0),964], [String.fromCharCode(101,122,111,115,95,110,95,50,51,0),253]]);
    let completeX = String.fromCharCode(108,95,57,56,95,111,117,116,101,114,0);
    let backK = String.fromCharCode(118,95,49,95,100,101,116,101,99,116,0);
    let yellowtoredZ = 2.0;
    let values5 = 4;
    let rewardI = 3.0;
    let forwardE = 2;
      grayR /= Math.max(4, values5);
       let membership9 = String.fromCharCode(99,111,114,114,95,105,95,53,50,0);
       let kuaishoug = String.fromCharCode(100,111,119,110,115,97,109,112,108,101,100,95,97,95,49,53,0);
       let iconclosewhitebga = 2.0;
         iconclosewhitebga += parseFloat(`${membership9.length / 1}`);
         kuaishoug = `${membership9.length * parseInt(`${iconclosewhitebga}`)}`;
         kuaishoug = `${membership9.length + kuaishoug.length}`;
          let sharedR: Array<any> = [393, 906];
         kuaishoug += `${parseInt(`${iconclosewhitebga}`) / 2}`;
         sharedR.push(sharedR.length | 1);
         iconclosewhitebga *= parseFloat(`${parseInt(`${iconclosewhitebga}`) / (Math.max(kuaishoug.length, 10))}`);
       let cornero = 5.0;
      let iconcalendari = 6868816.0 <= cornero;
      do {
         cornero -= parseFloat(`${membership9.length ^ parseInt(`${cornero}`)}`);
         if (iconcalendari) {
            break;
         }
      } while (iconcalendari && (cornero == iconclosewhitebga));
         kuaishoug += `${kuaishoug.length}`;
         kuaishoug += `${1 ^ kuaishoug.length}`;
      completeX += "2";
   for (let u = 0; u < 2; u++) {
       let downloader4 = String.fromCharCode(104,105,110,116,95,100,95,56,50,0);
       let chinasameO: Map<any, any> = new Map([[String.fromCharCode(109,111,98,105,117,115,95,99,95,56,0),false ], [String.fromCharCode(115,95,55,95,105,116,120,102,109,0),false ], [String.fromCharCode(101,118,97,108,117,97,116,105,111,110,95,121,95,54,52,0),true ]]);
       let componentregistryi: Array<any> = [String.fromCharCode(113,95,51,52,95,115,116,114,111,107,101,100,0), String.fromCharCode(97,116,116,101,109,116,115,95,55,95,49,50,0), String.fromCharCode(112,95,55,57,95,99,111,117,110,116,0)];
       let bannerv = 2;
       let tempnodatagifA = 1.0;
       let launchL = 4.0;
          let halffieldimageh: Array<any> = [String.fromCharCode(105,95,49,56,95,97,108,116,101,114,110,97,116,105,118,101,115,0), String.fromCharCode(120,95,52,53,95,100,105,115,112,0)];
          let neonb = 2.0;
          let libimagepipelineD = 5.0;
         componentregistryi = [1];
         halffieldimageh = [3];
         neonb -= parseInt(`${neonb}`);
         libimagepipelineD += 1 - parseInt(`${neonb}`);
          let containerP = String.fromCharCode(116,95,50,55,95,97,116,114,97,99,100,97,116,97,0);
         componentregistryi.push(chinasameO.size >> (Math.min(Math.abs(3), 2)));
         containerP = "2";
         downloader4 = `${bannerv ^ downloader4.length}`;
       let renderJ = 0.0;
       let iconwechati = 4.0;
         downloader4 = "3";
       let componentregistryJ = 0;
         renderJ += parseFloat(`${componentregistryJ << (Math.min(3, Math.abs(1)))}`);
         chinasameO = new Map([[`${componentregistryi.length}`, parseInt(`${launchL}`) + 2]]);
       let i_unlockS = String.fromCharCode(105,100,99,116,120,95,107,95,55,51,0);
       let attributedstringp = String.fromCharCode(97,116,116,97,99,104,95,106,95,49,57,0);
       let modulet = 3;
          let graphicsf: Array<any> = [739, 96, 653];
         tempnodatagifA *= parseFloat(`${2 * parseInt(`${launchL}`)}`);
         graphicsf = [graphicsf.length << (Math.min(graphicsf.length, 3))];
       let renewX: Array<any> = [344, 545, 832];
       let casting0: Array<any> = [String.fromCharCode(98,95,54,48,95,108,105,102,101,0), String.fromCharCode(113,95,50,49,95,116,101,120,101,108,0)];
         launchL += i_unlockS.length << (Math.min(3, Math.abs(parseInt(`${tempnodatagifA}`))));
          let page3: Array<any> = [970, 518];
          let transferm: Map<any, any> = new Map([[String.fromCharCode(118,95,50,48,95,119,97,114,110,105,110,103,0),144], [String.fromCharCode(100,95,52,55,95,100,97,117,100,0),335]]);
         bannerv <<= Math.min(i_unlockS.length, 4);
         page3.push(transferm.size * 1);
         transferm.set(`${page3.length}`, page3.length);
      grayR += malaysia3.size >> (Math.min(Math.abs(2), 4));
   }

    if (componentRef.current != null) {

   for (let a = 0; a < 3; a++) {
       let blackz: Map<any, any> = new Map([[String.fromCharCode(103,95,57,51,95,115,116,97,99,107,116,114,97,99,101,0),true ], [String.fromCharCode(116,95,55,51,95,98,105,116,115,113,112,0),false ]]);
       let baseR = String.fromCharCode(113,95,54,57,95,114,101,103,0);
      for (let s = 0; s < 3; s++) {
         baseR = "3";
      }
       let pointW = 0.0;
      while (4 >= blackz.size) {
         baseR = `${parseInt(`${pointW}`)}`;
         break;
      }
      if (4 < (4 & baseR.length)) {
         blackz.set(`${pointW}`, parseInt(`${pointW}`) - 1);
      }
         baseR = `${parseInt(`${pointW}`)}`;
       let promotionO = 0.0;
      yellowtoredZ /= Math.max(malaysia3.size | 2, 3);
   }
      completeX = `${completeX.length ^ values5}`;
   let staro = 6012085 <= values5;
   do {
       let iconarrowrightv = String.fromCharCode(97,95,49,54,95,101,120,112,105,114,97,116,105,111,110,0);
       let dangerv = 2.0;
         dangerv *= (String.fromCharCode(120,0) == iconarrowrightv ? parseInt(`${dangerv}`) : iconarrowrightv.length);
       let nextv = String.fromCharCode(118,95,55,57,95,99,111,100,101,100,0);
      if ((parseInt(`${dangerv}`) - iconarrowrightv.length) < 5 || 5 < (iconarrowrightv.length ^ 5)) {
         dangerv -= (String.fromCharCode(75,0) == nextv ? parseInt(`${dangerv}`) : nextv.length);
      }
      for (let i = 0; i < 1; i++) {
          let short_ak = String.fromCharCode(106,95,56,53,95,110,101,103,97,116,101,0);
          let umengd = 5;
         dangerv += short_ak.length & parseInt(`${dangerv}`);
         short_ak = "1";
         umengd |= 3 % (Math.max(5, umengd));
      }
      for (let j = 0; j < 2; j++) {
         dangerv -= parseInt(`${dangerv}`) / 2;
      }
         dangerv -= parseInt(`${dangerv}`);
      values5 += completeX.length;
      if (staro) {
         break;
      }
   } while (staro && ((1 ^ completeX.length) < 2 && (completeX.length ^ values5) < 1));
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {

       let expandX = 1.0;
       let textlayoutmanagern = 3;
       let moonr = String.fromCharCode(104,105,103,104,108,105,103,104,116,101,114,95,120,95,50,49,0);
          let ying3 = true;
          let annerC = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,95,57,95,57,55,0);
         moonr = `${textlayoutmanagern}`;
         ying3 = ((annerC.length | (ying3 ? 98 : annerC.length)) <= 98);
       let redirectC = String.fromCharCode(114,111,117,116,105,110,103,95,122,95,54,51,0);
       let megaphoneT = String.fromCharCode(119,95,49,53,95,99,117,100,97,0);
         expandX *= (moonr == String.fromCharCode(86,0) ? redirectC.length : moonr.length);
         redirectC = `${megaphoneT.length}`;
      if (textlayoutmanagern <= 5) {
          let register_vs: Map<any, any> = new Map([[String.fromCharCode(122,95,49,56,95,116,101,109,112,110,97,109,101,0),46], [String.fromCharCode(108,97,117,110,99,104,95,107,95,57,0),355], [String.fromCharCode(119,95,49,49,95,116,116,97,101,110,99,100,115,112,0),88]]);
          let yellowcirclebgj = 3.0;
          let telegramP = 4;
          let bgvipsportx = 4.0;
          let optionsG = 5.0;
         textlayoutmanagern /= Math.max(1, register_vs.size);
         register_vs = new Map([[`${optionsG}`, telegramP >> (Math.min(Math.abs(parseInt(`${optionsG}`)), 4))]]);
         yellowcirclebgj -= parseInt(`${bgvipsportx}`);
         telegramP >>= Math.min(4, Math.abs(parseInt(`${bgvipsportx}`) >> (Math.min(5, Math.abs(1)))));
      }
         redirectC = `${textlayoutmanagern}`;
          let yellowcirclebgN = String.fromCharCode(112,114,101,99,111,109,112,111,115,101,100,95,50,95,51,51,0);
         expandX -= textlayoutmanagern / 2;
         yellowcirclebgN = `${yellowcirclebgN.length}`;
      while (moonr.endsWith(`${expandX}`)) {
          let type_n3 = 3;
          let nalyticsX: Array<any> = [869, 427, 176];
         expandX += 1;
         type_n3 /= Math.max(1, nalyticsX.length ^ 3);
         nalyticsX = [nalyticsX.length];
         break;
      }
      let assistA = String.fromCharCode(105,104,97,114,98,119,0) == megaphoneT;
      do {
         megaphoneT = `${redirectC.length ^ megaphoneT.length}`;
         if (assistA) {
            break;
         }
      } while ((redirectC.length == 5 || 5 == megaphoneT.length) && assistA);
      backK = `${3 >> (Math.min(Math.abs(values5), 4))}`;
   while (!completeX.endsWith(`${grayR}`)) {
      grayR /= Math.max(1, (String.fromCharCode(66,0) == completeX ? completeX.length : malaysia3.size));
      break;
   }
      completeX += `${parseInt(`${grayR}`) + 1}`;
        console.log("Position:", { x, y, width, height, pageX, pageY });
        setRefPosition({ x: pageX, y: pageY, width: width, height: height });

        const screenHeight = Dimensions.get("window").height;

      values5 <<= Math.min(Math.abs(forwardE - 1), 5);
      forwardE %= Math.max(malaysia3.size, 4);
   let completev = yellowtoredZ >= 8817333.0;
   do {
       let collectionY = 0.0;
      if ((collectionY + collectionY) >= 5.49) {
         collectionY *= parseFloat(`${parseInt(`${collectionY}`) * 1}`);
      }
          let goalP = 4;
         collectionY *= parseFloat(`${parseInt(`${collectionY}`) >> (Math.min(4, Math.abs(goalP)))}`);
          let evente = String.fromCharCode(100,101,108,97,95,114,95,49,0);
         collectionY *= parseFloat(`${parseInt(`${collectionY}`) << (Math.min(Math.abs(1), 4))}`);
         evente += "3";
      yellowtoredZ -= parseInt(`${rewardI}`);
      if (completev) {
         break;
      }
   } while ((1.21 <= grayR) && completev);
        const distance = screenHeight - pageY - height;

       let dycreatorc = false;
       let type_0ly = 4.0;
         dycreatorc = !dycreatorc;
      let profileX = dycreatorc ? !dycreatorc : dycreatorc;
      do {
         dycreatorc = 26.65 < type_0ly && !dycreatorc;
         if (profileX) {
            break;
         }
      } while ((dycreatorc) && profileX);
         dycreatorc = !dycreatorc;
         type_0ly /= Math.max(1, (parseInt(`${type_0ly}`) * (dycreatorc ? 2 : 3)));
      if (dycreatorc) {
         type_0ly /= Math.max(3, 1 / (Math.max(parseInt(`${type_0ly}`), 10)));
      }
      while (dycreatorc) {
         type_0ly /= Math.max(5, (parseInt(`${type_0ly}`) + (dycreatorc ? 4 : 2)));
         break;
      }
      rewardI -= 1 ^ backK.length;
      grayR -= 2;
       let white5: Map<any, any> = new Map([[String.fromCharCode(105,95,54,95,114,101,112,101,97,116,105,110,103,0),319], [String.fromCharCode(99,114,117,110,95,97,95,49,54,0),98], [String.fromCharCode(105,95,57,50,95,97,117,116,104,111,114,105,122,101,114,0),652]]);
         white5 = new Map([[`${white5.size}`, white5.size | white5.size]]);
      if (!Array.from(white5.keys()).includes(`${white5.size}`)) {
         white5.set(`${white5.size}`, white5.size << (Math.min(Math.abs(1), 1)));
      }
         white5.set(`${white5.size}`, 3);
      malaysia3 = new Map([[`${white5.size}`, activityg.length]]);
        setDistanceToBottom(distance);

   let libfbjni2 = forwardE >= 8895827;
   do {
      forwardE *= forwardE + parseInt(`${rewardI}`);
      if (libfbjni2) {
         break;
      }
   } while (libfbjni2 && (1.74 == (yellowtoredZ + 1.31)));
   let downloaderm = 6979007 <= malaysia3.size;
   do {
      malaysia3.set(`${rewardI}`, (activityg == String.fromCharCode(81,0) ? parseInt(`${rewardI}`) : activityg.length));
      if (downloaderm) {
         break;
      }
   } while ((3 <= (completeX.length | malaysia3.size)) && downloaderm);
   while ((yellowtoredZ - 3.13) > 4.37) {
      yellowtoredZ *= (String.fromCharCode(49,0) == activityg ? values5 : activityg.length);
      break;
   }
        console.log("distanceToBottom");

   if (3 <= (3 / (Math.max(1, malaysia3.size))) || 4 <= (malaysia3.size / 3)) {
      completeX += `${2 << (Math.min(5, backK.length))}`;
   }
   if ((backK.length + parseInt(`${rewardI}`)) > 3 || (rewardI + 3.62) > 1.2) {
      rewardI += 3;
   }
   if ((yellowtoredZ - 4.62) <= 3.99 || (4.62 - yellowtoredZ) <= 5.8) {
      yellowtoredZ *= parseInt(`${grayR}`);
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
              source={require('@static/images/robotoNetwork.gif')}
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
              source={require("@static/images/robotoNetwork.gif")}
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
                    mayi_push.videoPlayerBannerViewAnalytics({
                      playerType: adultMode ? "xVideo" : "normal",
                      ads_id: id,
                      ads_name: name,
                      ads_slot_id: slot_id,
                      ads_title: title,
                    });
                  }}
                  onPress={({ id, name, slot_id, title }) => {
                    mayi_push.videoPlayerBannerClickAnalytics({
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
                          source={require("@static/images/positionIcondefaultthumbnailUtils.png")}
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
                          source={require("@static/images/icontransferclubPrivate_0Libjsijniprofiler.png")}
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
                          style={{ height: 80, width: 80 }}
                          source={require("@static/images/robotoNetwork.gif")}
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

                    mayi_TrashBootsplash.toName("我的下载").then(() => {
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
