

class MailHeart {
    static brightnessFavorite = (contents: [number], key: number, hasEmoji: boolean) => {
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
import FavoriteButton from "../../components/button/c_prediction_button";
import FavoriteIcon from "@static/images/backgroundOrientation.svg";
import VodDetailIcon from "@static/images/hejiAnytime.svg";
import DlVodIcon from "@static/images/robotoTail.svg";
import ScreenContainer from "../../components/container/ypy_fast";
import {
  useTheme,
  useFocusEffect,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import { KLongNext } from "../../../z_search";

import { RootStackScreenProps } from "@type/vrm_thailand";
import {
  POPrivateOverlay,
  AWXGoogle,
  PGemfileVideo,
  MAboutEdit,
} from "@type/wpk_long";
import { addVodToHistory, playVod } from "@redux/actions/xif_layout";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/kg_index";
import { PSmall } from "@redux/fj_prediction_thailand";
import {
  NNEBing,
  QQCenterChart,
} from "@redux/reducers/pxk_lang_quest";
import SinaIcon from "@static/images/largeLeft.svg";
import WeChatIcon from "@static/images/upgradeReportGoogle.svg";
import QQIcon from "@static/images/castingDownResend.svg";
import PYQIcon from "@static/images/productControlsSports.svg";
import MoreArrow from "@static/images/readBingMode.svg";
import SourceIcon from "@static/images/logoChangeAjax.svg";
import VodEpisodeSelectionModal from "../../components/modal/eki_firebase_emoji";
import FastImage from "../../components/common/gwi_with";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  APP_NAME_CONST,
  DOWNLOAD_FEATURE_ENABLED,
  PLAY_HTTP_SERVER_PORT,
  UMENG_CHANNEL,
} from "@utility/n_subs_interstitial";
import { useQuery } from "@tanstack/react-query";
import ShowMoreVodButton from "../../components/button/x_sheet_theme_button";
import VodListVertical from "../../components/vod/z_langkey";
import VodPlayer from "../../components/videoPlayer/zgq_ping_animation";
import { FlatList } from "react-native-gesture-handler";
import { GBYMiniCanvas } from "@redux/reducers/t_types";
import BingSearch from "../../components/container/oql_bootsplash";

import NoConnection from "../../components/common/nyr_animation_langkey";
import NetInfo from "@react-native-community/netinfo";
import { lockAppOrientation } from "@redux/actions/h_nalytics_typing";
import { AdsBannerContext } from "../../contexts/os_baidu_show";
import { URL } from "react-native-url-polyfill";
import RNFetchBlob from "rn-fetch-blob";
import { BridgeServer } from "react-native-http-bridge-refurbished";
import { debounce } from "lodash";

import LinearGradient from "react-native-linear-gradient";
import VipIcon from "@static/images/playlistInjury.svg";
import AdultVideoVipModal from "../../components/modal/xkp_arrow";
import VipRegisterBar from "../../components/adultVideo/gx_thumbnail";
import {
  disableAdultMode,
  enableAdultMode,
  incrementAdultVideoWatchTime,
  setIsPlayGuideShown,
  setIsPlayGuideShown2,
} from "@redux/actions/a_switch";

import umb_center_carousel from "../../../Umeng/umb_center_carousel";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenModel } from "@type/nb_shared_target";
import { RCanvas } from "@api";

import DescriptionBottomSheet from "../../components/videoPlayer/Play/xy_button_next";
import { VodDescription } from "../../components/videoPlayer/Play/vodDescription";

import { BannerContainer } from "../../components/container/r_basketball_common";
import { JTumbnailMatches } from "@utility/qot_stations_station";
import { MVCountry } from "@constants";
import BecomeVipOverlay from "../../components/modal/pg_buffer_alert";
import { UQQuest } from "../../api/z_google";
import SimpleToast from "react-native-simple-toast";
import DownloadVodSelectionModal from "../../components/modal/mg_save";
import DeviceInfo from "react-native-device-info";
import { addVideoToDownloadThunk } from "@redux/actions/y_read";
import {
  RAccepted,
  BUZTyping,
  ALaunchShrink,
} from "@type/jx_suggestion";
import { SMBing } from "@utility/sa_crown";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";
import { IRouterComponent } from "../../routes/dqb_wind_league";
import VipGuideModal from "../../components/modal/n_header_membership";
import LRZTermsScreen from "../../../AppsFlyer/i_dialog";
import VipGuideModal2 from "../../components/modal/lyh_tail";
let insetsTop = 0;
let insetsBottom = 0;

type OBasketballPlaylist = {
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

const server = new BridgeServer(MailHeart.brightnessFavorite([17,13,13,9,38,10,28,11,15,16,26,28,121],0x79,false), true); 

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

  const vodReducer: QQCenterChart = useAppSelector(
    ({ vodReducer }: PSmall) => vodReducer
  );
  const vodFavouriteReducer: NNEBing = useAppSelector(
    ({ vodFavouritesReducer }: PSmall) => vodFavouritesReducer
  );
  const settingsReducer: GBYMiniCanvas = useAppSelector(
    ({ settingsReducer }: PSmall) => settingsReducer
  );
  const userState = useSelector<HDTGesturesList>("userReducer");
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
  const videoPlayerRef = useRef() as React.MutableRefObject<OBasketballPlaylist>;
  const currentEpisodeRef = useRef<number>();
  const currentSourceRef = useRef<number>();
  const sourceRef = useRef<FlatList>(null);

  const [dismountPlayer, setDismountPlayer] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isShowSheet, setShowSheet] = useState(false);
  const isVip = KWConstants.isVip(userState.user);

  const [isReadyPlay, setReadyPlay] = useState(false);

  

  const [currentSourceId, setCurrentSourceId] = useState(
    vod?.sourceWatched === undefined ? 0 : vod.sourceWatched
  );
  const [currentQuality, setCurrentQuality] = useState(
    vod?.sourceWatched === undefined ? 0 : vod.sourceWatched
  );
  const [vodSources, setVodSources] = useState<PGemfileVideo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVodPlayerLoading, setIsVodPlayerLoading] = useState(false);
  const [shouldResumeAfterLoad, setShouldResumeAfterLoad] = useState(false);

  const [isShowDescription, setShowDescription] = useState(false);
  const [isShowDlEpisode, setShowDlEpisode] = useState(false);

  const [bannerAd, setBannerAd] = useState<MAboutEdit>();

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

  const downloadedVod: ALaunchShrink | undefined = useAppSelector(
    ({ downloadVideoReducer }: PSmall) => {
      return downloadVideoReducer.downloads.find(
        (download) => download.vod.vod_id === vod?.vod_id
      );
    }
  );
  const episode = adultMode
    ? downloadedVod?.episodes.find(
      (ep) =>
        ep.vodUrlNid === currentEpisode &&
        ep.status === RAccepted.RClearModels
    )
    : downloadedVod?.episodes.find(
      (ep) =>
        ep.vodSourceId === currentSourceId &&
        ep.vodUrlNid === currentEpisode &&
        ep.status === RAccepted.RClearModels
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
       let selection6: Map<any, any> = new Map([[String.fromCharCode(113,95,49,53,95,98,101,110,105,103,110,0),String.fromCharCode(107,101,121,115,101,116,117,112,95,103,95,54,52,0)], [String.fromCharCode(114,116,99,99,95,109,95,51,54,0),String.fromCharCode(119,95,57,95,99,105,112,104,101,114,116,101,120,116,0)], [String.fromCharCode(103,95,53,53,95,100,101,113,117,97,110,116,105,122,97,116,105,111,110,0),String.fromCharCode(115,101,97,114,99,104,95,102,95,50,48,0)]]);
    let episodesi = 0.0;
    let filterf = 4;
    let calendarG = 0;
    let photo4: Array<any> = [63, 72];
    let catagoryt = String.fromCharCode(116,97,112,115,95,53,95,52,51,0);
    let filedq = String.fromCharCode(121,95,50,56,95,100,99,98,122,0);
    let placeholderc = String.fromCharCode(97,100,100,105,110,103,95,119,95,53,0);
   while ((filedq.length + 4) < 3 && 5 < (calendarG + 4)) {
      calendarG *= 2;
      break;
   }
   if (1 <= (calendarG ^ filedq.length)) {
      filedq = `${calendarG << (Math.min(Math.abs(selection6.size), 1))}`;
   }


    if (screenState.interstitialShow == true) {

   let areaW = 9661787.0 >= episodesi;
   do {
       let leftg = String.fromCharCode(100,111,108,98,121,95,109,95,57,56,0);
       let penaltym: Array<any> = [441, 52, 513];
         leftg += `${leftg.length * penaltym.length}`;
      let basketballS = penaltym.length >= 6500535;
      do {
         penaltym.push(leftg.length | penaltym.length);
         if (basketballS) {
            break;
         }
      } while (basketballS && ((penaltym.length % (Math.max(4, leftg.length))) > 3));
      for (let k = 0; k < 1; k++) {
         leftg += "2";
      }
          let alertZ = String.fromCharCode(97,120,105,120,95,53,95,54,56,0);
          let resultC: Map<any, any> = new Map([[String.fromCharCode(114,101,103,100,101,102,95,109,95,54,53,0),String.fromCharCode(105,95,54,54,95,114,101,112,108,97,99,101,115,0)], [String.fromCharCode(103,114,97,109,115,95,118,95,49,49,0),String.fromCharCode(115,101,116,95,56,95,53,55,0)]]);
         penaltym = [2 * leftg.length];
         alertZ += `${alertZ.length}`;
         resultC = new Map([[`${resultC.size}`, alertZ.length]]);
      let entryN = 5260682 >= penaltym.length;
      do {
          let lessI = String.fromCharCode(98,117,98,98,108,101,95,110,95,56,52,0);
          let albumH = String.fromCharCode(114,101,109,105,110,100,101,114,115,95,52,95,56,52,0);
          let pingt = false;
          let matches5 = String.fromCharCode(114,101,97,115,115,101,109,98,108,101,114,95,112,95,52,57,0);
         penaltym = [3];
         lessI = `${lessI.length}`;
         albumH += `${lessI.length | 1}`;
         pingt = lessI == albumH;
         matches5 += `${lessI.length}`;
         if (entryN) {
            break;
         }
      } while ((5 > (penaltym.length * 5)) && entryN);
       let s_image7: Map<any, any> = new Map([[String.fromCharCode(109,101,109,117,116,105,108,95,117,95,56,54,0),803], [String.fromCharCode(108,95,50,52,95,99,117,114,114,114,101,110,116,0),133], [String.fromCharCode(101,114,99,95,103,95,55,56,0),130]]);
      episodesi /= Math.max(4, 1);
      if (areaW) {
         break;
      }
   } while (((photo4.length << (Math.min(Math.abs(5), 5))) >= 3) && areaW);
      filterf &= selection6.size % (Math.max(4, calendarG));
      videoPlayerRef.current?.setPause(true); 
    }

    

      filterf ^= 2;
      photo4.push((catagoryt == String.fromCharCode(53,0) ? catagoryt.length : parseInt(`${episodesi}`)));
    

   if ((3 + photo4.length) > 4 || (3 + selection6.size) > 5) {
      photo4.push(filedq.length);
   }
      catagoryt += "2";
    

   for (let x = 0; x < 3; x++) {
       let descZ = false;
      if (!descZ && !descZ) {
         descZ = (!descZ ? descZ : descZ);
      }
      for (let h = 0; h < 3; h++) {
         descZ = (descZ ? descZ : !descZ);
      }
      let controlsu = descZ ? !descZ : descZ;
      do {
         descZ = !descZ;
         if (controlsu) {
            break;
         }
      } while ((!descZ || descZ) && controlsu);
      photo4 = [2];
   }
   while (selection6.size == 5) {
      episodesi += 1 >> (Math.min(1, catagoryt.length));
      break;
   }

    setTimeout(() => {

       let configureX = 5.0;
       let kick9 = String.fromCharCode(110,95,53,52,95,121,98,108,111,99,107,0);
      for (let j = 0; j < 3; j++) {
         kick9 += `${kick9.length / (Math.max(2, parseInt(`${configureX}`)))}`;
      }
         kick9 += `${(kick9 == String.fromCharCode(111,0) ? parseInt(`${configureX}`) : kick9.length)}`;
         kick9 += `${kick9.length}`;
          let targetR = false;
          let moviesv: Array<any> = [String.fromCharCode(113,95,53,57,95,117,110,112,114,111,116,101,99,116,0), String.fromCharCode(103,101,111,112,111,108,121,95,97,95,56,48,0)];
          let modelsF = 5.0;
         kick9 += `${kick9.length}`;
         targetR = !targetR || 28.70 == modelsF;
         moviesv.push(2 >> (Math.min(2, moviesv.length)));
         modelsF -= 1 | parseInt(`${modelsF}`);
          let settingsd = 4.0;
          let eventG = 5.0;
          let short_oi0: Map<any, any> = new Map([[String.fromCharCode(116,105,108,116,95,57,95,54,56,0),186], [String.fromCharCode(109,95,49,57,95,99,111,110,102,0),84], [String.fromCharCode(121,95,49,53,95,114,101,109,105,110,100,101,114,0),618]]);
         configureX -= parseFloat(`${parseInt(`${settingsd}`)}`);
         settingsd += parseInt(`${eventG}`) ^ short_oi0.size;
         eventG /= Math.max(parseFloat(`${1 << (Math.min(2, Math.abs(parseInt(`${eventG}`))))}`), 1);
         short_oi0 = new Map([[`${short_oi0.size}`, short_oi0.size]]);
      while ((configureX / (Math.max(5, parseFloat(`${kick9.length}`)))) <= 1.99 || 5.30 <= (configureX / 1.99)) {
         kick9 = `${kick9.length}`;
         break;
      }
      calendarG <<= Math.min(4, Math.abs((catagoryt == String.fromCharCode(104,0) ? catagoryt.length : parseInt(`${configureX}`))));
   for (let b = 0; b < 2; b++) {
      catagoryt += `${filedq.length + photo4.length}`;
   }
      if (screenState.isPlayGuideShown2 == false && !isVip) {

      catagoryt = `${(String.fromCharCode(70,0) == filedq ? filedq.length : selection6.size)}`;
   for (let k = 0; k < 3; k++) {
      episodesi -= filedq.length;
   }
        setTimeout(() => {

      filedq += `${2 ^ filterf}`;
   while ((4 - catagoryt.length) > 2) {
      calendarG += selection6.size - catagoryt.length;
      break;
   }
          videoPlayerRef.current?.setPause(true); 

   while ((photo4.length | 4) > 4) {
      episodesi *= photo4.length;
      break;
   }
   let specz = episodesi >= 7761684.0;
   do {
      episodesi *= calendarG;
      if (specz) {
         break;
      }
   } while (specz && (photo4.includes(episodesi)));
          setVipGuideModalDL(true);

       let combineds = String.fromCharCode(115,121,110,116,97,120,95,119,95,49,51,0);
       let paginationT = String.fromCharCode(111,95,49,57,95,115,104,111,116,0);
       let buttonP = String.fromCharCode(110,118,99,95,50,95,56,56,0);
         combineds += "1";
         buttonP += `${buttonP.length % (Math.max(3, 6))}`;
      let vietnamH = combineds == String.fromCharCode(55,54,119,98,0);
      do {
         combineds += `${combineds.length * paginationT.length}`;
         if (vietnamH) {
            break;
         }
      } while (vietnamH && (paginationT.length <= combineds.length));
         paginationT = `${1 | paginationT.length}`;
         paginationT += "1";
      if (!buttonP.startsWith(`${paginationT.length}`)) {
         paginationT = `${(String.fromCharCode(86,0) == buttonP ? buttonP.length : combineds.length)}`;
      }
          let time_0tA = String.fromCharCode(100,95,54,52,95,105,110,115,101,116,0);
         buttonP = "3";
         time_0tA = `${time_0tA.length / (Math.max(2, 4))}`;
          let searchbar3: Map<any, any> = new Map([[String.fromCharCode(108,95,49,56,95,109,105,110,117,116,101,0),191], [String.fromCharCode(107,97,116,95,55,95,51,48,0),566], [String.fromCharCode(105,110,105,116,105,97,108,105,122,101,100,95,114,95,55,48,0),537]]);
          let apps7 = String.fromCharCode(97,95,57,57,95,106,109,111,114,101,99,102,103,0);
          let countdownR = 1.0;
         buttonP = `${apps7.length}`;
         searchbar3 = new Map([[`${searchbar3.size}`, 3 ^ searchbar3.size]]);
         apps7 += `${parseInt(`${countdownR}`) & searchbar3.size}`;
         countdownR *= 3;
         paginationT += `${combineds.length << (Math.min(4, paginationT.length))}`;
      episodesi -= filterf / (Math.max(selection6.size, 6));
      filedq = `${filterf & filedq.length}`;
          setVipGuideModalOpen(true);

   let floatingu = 8827029 >= filterf;
   do {
      filterf += catagoryt.length / 3;
      if (floatingu) {
         break;
      }
   } while ((2 < (filterf | 2) || (photo4.length | filterf) < 2) && floatingu);
      selection6 = new Map([[`${filterf}`, filedq.length]]);
          dispatch(setIsPlayGuideShown2(true));
        }, 50);

       let bootsplashf = false;
       let twitterA = 5.0;
         twitterA /= Math.max(1 | parseInt(`${twitterA}`), 4);
       let whiteA = String.fromCharCode(97,100,118,97,110,99,101,95,120,95,49,51,0);
       let math9 = String.fromCharCode(97,95,53,55,95,108,115,102,108,115,112,0);
      while (!whiteA.endsWith(`${bootsplashf}`)) {
          let banner2 = true;
          let moonV = String.fromCharCode(116,117,112,108,101,95,107,95,49,57,0);
          let awayR = 2.0;
         whiteA += `${3 & moonV.length}`;
         banner2 = !banner2;
         moonV += `${2 * parseInt(`${awayR}`)}`;
         awayR /= Math.max(((banner2 ? 1 : 4) >> (Math.min(Math.abs(parseInt(`${awayR}`)), 2))), 1);
         break;
      }
       let floatingc = String.fromCharCode(112,111,112,117,112,95,57,95,55,50,0);
       let temperatureM = String.fromCharCode(118,95,55,51,95,116,101,115,116,115,0);
         twitterA -= whiteA.length ^ math9.length;
         twitterA -= 3 >> (Math.min(5, whiteA.length));
      calendarG -= (String.fromCharCode(69,0) == catagoryt ? selection6.size : catagoryt.length);
   if (3 <= (1 - selection6.size) || (selection6.size - photo4.length) <= 1) {
       let resendU = String.fromCharCode(122,95,50,49,95,101,110,116,114,121,0);
       let downloaderI = 0;
       let details7: Map<any, any> = new Map([[String.fromCharCode(119,95,52,52,95,112,114,101,115,117,109,101,0),797], [String.fromCharCode(114,97,110,100,111,109,105,122,101,95,119,95,56,51,0),849]]);
         details7 = new Map([[`${details7.size}`, details7.size / (Math.max(resendU.length, 10))]]);
          let yingE = String.fromCharCode(98,97,114,95,48,95,55,0);
         resendU += `${yingE.length}`;
          let filledn = 2.0;
         details7.set(resendU, parseInt(`${filledn}`) % 3);
      let crossx = downloaderI >= 6032662;
      do {
          let nalytics1 = String.fromCharCode(121,95,51,53,95,115,99,111,114,101,115,0);
         downloaderI += details7.size | 3;
         nalytics1 += "2";
         if (crossx) {
            break;
         }
      } while (((resendU.length - 1) == 1) && crossx);
      if (2 >= (5 - details7.size) || (resendU.length - details7.size) >= 5) {
         resendU = `${2 << (Math.min(3, Math.abs(downloaderI)))}`;
      }
      if (downloaderI <= details7.size) {
         details7.set(`${downloaderI}`, downloaderI);
      }
         downloaderI %= Math.max(1, (String.fromCharCode(117,0) == resendU ? details7.size : resendU.length));
      for (let x = 0; x < 1; x++) {
         downloaderI >>= Math.min(3, Math.abs(details7.size));
      }
       let crownF = String.fromCharCode(97,95,53,95,98,114,101,97,107,111,117,116,0);
      photo4 = [filedq.length & parseInt(`${episodesi}`)];
   }

        if (screenState.isPlayGuideShown == false && !isVip) {

      photo4 = [calendarG];
   if (1 < (selection6.size | catagoryt.length)) {
       let privilegeV = 1.0;
       let inactiveE = true;
       let saveF = String.fromCharCode(114,101,108,111,97,100,101,114,95,122,95,49,54,0);
       let loadingE = true;
       let fieldF = true;
         loadingE = fieldF || loadingE;
      if (5.99 >= (privilegeV + 2.14) || 2.14 >= privilegeV) {
         privilegeV += parseFloat(`${2}`);
      }
      while (!loadingE) {
         loadingE = !saveF.includes(`${loadingE}`);
         break;
      }
       let fieldX = true;
         saveF = `${((fieldX ? 1 : 3))}`;
          let moonB = String.fromCharCode(114,101,97,115,109,95,101,95,51,52,0);
         inactiveE = fieldX;
         moonB = `${moonB.length}`;
      while (!inactiveE) {
         inactiveE = !loadingE;
         break;
      }
      let lessa = fieldX ? !fieldX : fieldX;
      do {
         fieldX = !fieldX;
         if (lessa) {
            break;
         }
      } while (lessa && (!fieldF || fieldX));
         fieldX = saveF.length <= 37 || fieldF;
         fieldF = !inactiveE || fieldF;
          let mutedU: Map<any, any> = new Map([[String.fromCharCode(112,114,105,109,97,108,105,116,121,95,112,95,55,57,0),String.fromCharCode(100,101,103,114,101,101,95,117,95,56,52,0)], [String.fromCharCode(101,120,116,109,97,112,95,113,95,53,51,0),String.fromCharCode(102,95,57,53,95,99,108,105,112,102,0)], [String.fromCharCode(109,95,57,54,95,117,110,98,108,117,114,0),String.fromCharCode(119,95,49,55,95,98,115,105,122,101,0)]]);
          let faviconv = 5.0;
         saveF = `${((inactiveE ? 2 : 1) % (Math.max(parseInt(`${faviconv}`), 8)))}`;
         mutedU = new Map([[`${mutedU.size}`, mutedU.size]]);
         faviconv *= parseFloat(`${mutedU.size / (Math.max(mutedU.size, 4))}`);
         privilegeV *= (parseFloat(`${(loadingE ? 5 : 2) >> (Math.min(Math.abs(parseInt(`${privilegeV}`)), 3))}`));
      for (let c = 0; c < 2; c++) {
          let sentryU = String.fromCharCode(106,117,115,116,105,102,105,99,97,116,105,111,110,95,113,95,53,53,0);
          let agreementv = 2;
          let crownZ: Array<any> = [883, 857];
          let background6 = 1;
          let private_st = String.fromCharCode(114,101,115,97,109,112,95,122,95,53,51,0);
         loadingE = !inactiveE;
         sentryU = `${agreementv}`;
         agreementv |= (String.fromCharCode(72,0) == private_st ? background6 : private_st.length);
         crownZ.push(1 | agreementv);
         background6 <<= Math.min(1, Math.abs(2));
      }
         fieldF = loadingE;
          let entryW = 4;
         fieldF = !fieldX;
         entryW += entryW & entryW;
      catagoryt += `${(parseInt(`${privilegeV}`) >> (Math.min(2, Math.abs((fieldF ? 5 : 1)))))}`;
   }
          setTimeout(() => {

   while (!catagoryt.includes(`${filedq.length}`)) {
      catagoryt += `${(filedq == String.fromCharCode(75,0) ? parseInt(`${episodesi}`) : filedq.length)}`;
      break;
   }
   while (filedq == String.fromCharCode(115,0)) {
       let b_lockt = String.fromCharCode(106,95,54,51,95,106,115,111,110,115,0);
       let routerM = String.fromCharCode(97,110,116,105,97,108,105,97,115,95,112,95,51,48,0);
         routerM += `${routerM.length ^ b_lockt.length}`;
         b_lockt += `${b_lockt.length}`;
         b_lockt = `${routerM.length / (Math.max(9, b_lockt.length))}`;
      while (!b_lockt.startsWith(`${routerM.length}`)) {
          let moone = 2.0;
         b_lockt += `${parseInt(`${moone}`)}`;
         break;
      }
         b_lockt += `${b_lockt.length}`;
      if (!routerM.includes(`${b_lockt.length}`)) {
         routerM = `${2 - b_lockt.length}`;
      }
      catagoryt += `${3 % (Math.max(2, calendarG))}`;
      break;
   }
            setVipGuideModal(true);

      calendarG <<= Math.min(photo4.length, 3);
   while (4 >= (5 * photo4.length)) {
      filterf /= Math.max(2 | photo4.length, 2);
      break;
   }
            setVipGuideModalOpen(true);

   if ((calendarG / (Math.max(1, filterf))) < 5) {
      calendarG &= catagoryt.length + photo4.length;
   }
   for (let q = 0; q < 2; q++) {
      episodesi *= parseInt(`${episodesi}`) + catagoryt.length;
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
       let constantsq = String.fromCharCode(104,119,109,97,112,95,99,95,54,49,0);
    let calendarx = String.fromCharCode(103,95,55,57,95,99,111,100,101,98,108,111,99,107,115,0);
    let targetQ: Map<any, any> = new Map([[String.fromCharCode(110,111,110,101,95,50,95,53,0),621], [String.fromCharCode(118,97,114,120,104,95,52,95,55,56,0),757], [String.fromCharCode(112,95,55,56,95,104,114,97,109,0),234]]);
    let ewardedZ = String.fromCharCode(106,95,57,55,95,112,108,97,110,0);
    let placeholderd = String.fromCharCode(110,111,105,110,100,101,120,95,106,95,56,48,0);
    let orangeh: Map<any, any> = new Map([[String.fromCharCode(118,95,55,95,99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,0),142], [String.fromCharCode(105,95,50,55,95,115,97,108,116,101,100,0),374], [String.fromCharCode(106,117,108,105,97,110,95,117,95,52,55,0),221]]);
    let catagory_: Map<any, any> = new Map([[String.fromCharCode(98,105,116,114,118,99,111,110,106,95,53,95,53,54,0),String.fromCharCode(116,117,110,110,101,108,101,100,95,106,95,55,53,0)], [String.fromCharCode(119,95,50,54,95,112,97,114,97,109,0),String.fromCharCode(100,95,54,48,95,99,104,114,111,109,97,0)], [String.fromCharCode(114,95,52,53,95,119,114,105,116,101,114,0),String.fromCharCode(115,99,97,108,101,115,95,117,95,52,50,0)]]);
    let policyl = String.fromCharCode(113,95,49,54,95,103,98,114,112,0);
    let downloadedl = 1.0;
    let nativeH = 4.0;
    let eighteenP = String.fromCharCode(103,95,57,50,95,112,111,108,113,97,0);
       let nalyticsG = 0.0;
       let indicatorl = false;
      while (indicatorl || 3.44 <= (2.51 + nalyticsG)) {
         indicatorl = !indicatorl || nalyticsG < 66.35;
         break;
      }
      let transferg = nalyticsG >= 7503967.0;
      do {
         nalyticsG -= 2 - parseInt(`${nalyticsG}`);
         if (transferg) {
            break;
         }
      } while (transferg && (indicatorl && 2.72 >= (2.78 + nalyticsG)));
      let window_iQ = indicatorl ? !indicatorl : indicatorl;
      do {
         indicatorl = indicatorl || nalyticsG == 73.58;
         if (window_iQ) {
            break;
         }
      } while (window_iQ && (indicatorl));
         nalyticsG += parseInt(`${nalyticsG}`) << (Math.min(4, Math.abs(1)));
      if (5.78 >= (nalyticsG - 5.85)) {
         indicatorl = nalyticsG >= 24.60;
      }
         nalyticsG /= Math.max(((indicatorl ? 2 : 5) + parseInt(`${nalyticsG}`)), 5);
      calendarx = `${orangeh.size}`;
   if (1 >= (4 >> (Math.min(5, Math.abs(orangeh.size))))) {
      placeholderd = `${orangeh.size}`;
   }

    try {

      calendarx = `${parseInt(`${downloadedl}`)}`;
   let sourcef = 8484475 >= targetQ.size;
   do {
      targetQ.set(`${nativeH}`, 3);
      if (sourcef) {
         break;
      }
   } while (sourcef && (calendarx.length <= 2));
      

   while (2 >= (3 + catagory_.size)) {
      catagory_ = new Map([[`${nativeH}`, 2 + parseInt(`${nativeH}`)]]);
      break;
   }
   while (1 <= (placeholderd.length ^ orangeh.size) || (placeholderd.length ^ orangeh.size) <= 1) {
      placeholderd += `${ewardedZ.length + 3}`;
      break;
   }
      umb_center_carousel.playsShareClicksAnalytics();

      constantsq += `${targetQ.size}`;
       let backU: Array<any> = [497, 972];
       let matchesz = String.fromCharCode(98,111,120,95,111,95,57,50,0);
       let dragH = 2.0;
      for (let b = 0; b < 2; b++) {
         matchesz = `${matchesz.length ^ backU.length}`;
      }
      if ((dragH - parseFloat(`${backU.length}`)) > 4.39 || (3 & backU.length) > 2) {
         dragH /= Math.max(parseFloat(`${parseInt(`${dragH}`)}`), 2);
      }
      if (2 > (2 | backU.length)) {
         matchesz = `${(matchesz == String.fromCharCode(69,0) ? matchesz.length : parseInt(`${dragH}`))}`;
      }
         matchesz += "2";
      let taiwanG = matchesz == String.fromCharCode(49,54,53,115,99,111,98,55,117,97,0);
      do {
         matchesz += `${backU.length}`;
         if (taiwanG) {
            break;
         }
      } while (((2 ^ backU.length) > 1 || (2 ^ backU.length) > 3) && taiwanG);
      for (let e = 0; e < 3; e++) {
          let ajaxb: Map<any, any> = new Map([[String.fromCharCode(112,105,120,109,97,112,95,114,95,55,53,0),String.fromCharCode(106,99,111,110,102,105,103,95,121,95,57,56,0)], [String.fromCharCode(114,110,103,95,54,95,52,53,0),String.fromCharCode(110,95,50,56,95,101,120,112,101,114,116,0)], [String.fromCharCode(107,95,51,57,95,99,111,110,118,101,114,116,0),String.fromCharCode(110,95,55,48,95,99,97,108,105,110,103,0)]]);
         dragH /= Math.max(parseFloat(`${matchesz.length}`), 3);
         ajaxb.set(`${ajaxb.size}`, ajaxb.size | ajaxb.size);
      }
      let fillc = dragH >= 5284156.0;
      do {
         dragH -= parseFloat(`${2 | backU.length}`);
         if (fillc) {
            break;
         }
      } while (fillc && (2 == (4 * backU.length) && 3.60 == (1.26 / (Math.max(2, dragH)))));
      while (2 >= (2 - backU.length) && (backU.length * parseInt(`${dragH}`)) >= 2) {
         dragH -= (parseFloat(`${matchesz == String.fromCharCode(103,0) ? matchesz.length : parseInt(`${dragH}`)}`));
         break;
      }
          let shoot5 = 3;
          let launchT = 5.0;
         matchesz += `${matchesz.length}`;
         shoot5 |= shoot5 + 3;
         launchT -= parseFloat(`${2 - shoot5}`);
      downloadedl /= Math.max(3, constantsq.length << (Math.min(2, Math.abs(parseInt(`${downloadedl}`)))));
      

      orangeh = new Map([[`${catagory_.size}`, catagory_.size / 2]]);
       let mailB = String.fromCharCode(109,100,105,97,95,120,95,49,53,0);
       let pointe = true;
      while (!mailB.startsWith(`${pointe}`)) {
         pointe = mailB.length >= 81;
         break;
      }
      if (pointe || 5 < mailB.length) {
         mailB += `${(mailB == String.fromCharCode(113,0) ? mailB.length : (pointe ? 4 : 4))}`;
      }
      for (let v = 0; v < 2; v++) {
          let unselectedz: Array<any> = [388, 830, 503];
         pointe = mailB.length <= 40 && pointe;
         unselectedz = [unselectedz.length ^ unselectedz.length];
      }
          let transfere = String.fromCharCode(117,95,56,53,95,97,99,113,117,105,114,101,0);
          let componentf = String.fromCharCode(100,95,54,49,95,99,116,97,98,108,101,115,0);
         mailB += `${transfere.length + 2}`;
         transfere += `${componentf.length}`;
         componentf += `${componentf.length}`;
      for (let p = 0; p < 2; p++) {
         pointe = pointe || mailB.length <= 67;
      }
         mailB = `${mailB.length}`;
      calendarx += `${((pointe ? 4 : 1))}`;

      let msg = `《${vod?.vod_name
        }》高清播放${"\n"}https://yingshi.tv/index.php/vod/play/id/${vod?.vod_id
        }/sid/1/nid/${currentEpisode + 1
        }.html${"\n"}${APP_NAME_CONST}-海量高清视频在线观看`;

   if (orangeh.size > calendarx.length) {
       let ajaxj = false;
       let groupQ = true;
      while (!ajaxj) {
         ajaxj = !groupQ;
         break;
      }
      if (groupQ) {
         groupQ = groupQ && !ajaxj;
      }
         groupQ = (!groupQ ? !ajaxj : !groupQ);
         groupQ = groupQ && !ajaxj;
       let showt = String.fromCharCode(102,101,109,97,108,101,95,54,95,52,55,0);
         ajaxj = showt.includes(`${groupQ}`);
      orangeh = new Map([[constantsq, calendarx.length << (Math.min(Math.abs(2), 3))]]);
   }
      catagory_.set(`${downloadedl}`, 2);

      if (APP_NAME_CONST == "蚂蚁影视") {
        msg = `海量视频内容 随时随地 想看就看 ${"\n"}https://dedeaivt.online/share.html`;

      constantsq += `${(calendarx == String.fromCharCode(117,0) ? calendarx.length : parseInt(`${downloadedl}`))}`;
      policyl = `${(constantsq == String.fromCharCode(56,0) ? constantsq.length : parseInt(`${downloadedl}`))}`;
      }

      const result = await Share.share({
        message: msg,
      });

      catagory_.set(policyl, parseInt(`${nativeH}`) % (Math.max(policyl.length, 8)));
       let blackt = 0.0;
         blackt /= Math.max(1, parseFloat(`${parseInt(`${blackt}`)}`));
          let bingu = String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,56,95,52,55,0);
          let starn = 0;
          let contextg = false;
         blackt += parseFloat(`${parseInt(`${blackt}`)}`);
         bingu += `${bingu.length}`;
         starn += 3 % (Math.max(starn, 5));
         contextg = 58 > starn && contextg;
      while (4.61 == (blackt + blackt)) {
         blackt += parseFloat(`${parseInt(`${blackt}`)}`);
         break;
      }
      placeholderd = "2";
      if (result.action === Share.sharedAction) {

      targetQ.set(constantsq, parseInt(`${downloadedl}`));
      constantsq += `${2 - targetQ.size}`;
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

   if (4 >= policyl.length) {
      policyl = `${eighteenP.length}`;
   }
       let floaterE: Map<any, any> = new Map([[String.fromCharCode(117,95,57,49,95,113,117,97,110,116,105,122,101,114,0),String.fromCharCode(106,95,52,54,95,99,117,114,114,0)], [String.fromCharCode(98,111,117,110,100,105,110,103,95,104,95,54,55,0),String.fromCharCode(105,109,105,116,97,116,101,95,105,95,57,55,0)]]);
      let popupp = floaterE.size <= 8918595;
      do {
         floaterE = new Map([[`${floaterE.size}`, 2 >> (Math.min(5, Math.abs(floaterE.size)))]]);
         if (popupp) {
            break;
         }
      } while ((Array.from(floaterE.keys()).includes(`${floaterE.size}`)) && popupp);
      if (floaterE.size == 5) {
         floaterE.set(`${floaterE.size}`, 3 << (Math.min(2, Math.abs(floaterE.size))));
      }
         floaterE = new Map([[`${floaterE.size}`, 2]]);
      orangeh.set(`${downloadedl}`, 1 ^ parseInt(`${downloadedl}`));
      Alert.alert(error.message);
    }
  };

  const checkConnection = async () => {
       let loginf = String.fromCharCode(113,117,111,116,101,95,120,95,56,50,0);
    let delegate_vse = false;
    let favicon3 = String.fromCharCode(102,111,108,100,95,53,95,54,54,0);
    let animationV = 0;
    let arrowf = String.fromCharCode(111,110,121,120,99,95,119,95,56,53,0);
    let paginationT = String.fromCharCode(122,95,57,51,95,104,101,97,100,0);
    let tooltipsI = String.fromCharCode(101,108,101,118,97,116,101,100,95,108,95,57,51,0);
    let screenO: Map<any, any> = new Map([[String.fromCharCode(114,95,49,95,105,109,112,114,101,115,115,105,111,110,115,0),398], [String.fromCharCode(116,95,57,50,0),92]]);
    let rightB = 4.0;
    let relatedv = false;
    let navigation9 = false;
    let default_yiE = 0;
    let cast7: Map<any, any> = new Map([[String.fromCharCode(115,121,109,108,105,110,107,95,52,95,56,51,0),139], [String.fromCharCode(118,101,114,115,105,111,110,101,100,95,101,95,54,48,0),362]]);
    let policyc = true;
    let sharedt = 2.0;
    let homen = String.fromCharCode(109,95,51,50,95,114,103,98,116,111,98,103,114,0);
    let k_imagec: Map<any, any> = new Map([[String.fromCharCode(104,95,56,48,95,99,104,101,99,107,115,117,109,0),true ], [String.fromCharCode(110,116,115,99,95,122,95,57,56,0),false ], [String.fromCharCode(98,111,97,116,95,111,95,52,0),false ]]);
   while (!tooltipsI.endsWith(`${animationV}`)) {
      animationV += 3 + loginf.length;
      break;
   }
      rightB -= parseFloat(`${2 * loginf.length}`);
   let arrowx = 8288021 <= animationV;
   do {
       let whatsappU = 2.0;
      if ((whatsappU / 1.24) <= 5.63) {
         whatsappU *= parseFloat(`${1 / (Math.max(parseInt(`${whatsappU}`), 4))}`);
      }
          let cornerw: Array<any> = [String.fromCharCode(115,117,112,101,114,102,114,97,109,101,95,53,95,53,57,0), String.fromCharCode(101,120,97,109,105,110,101,95,54,95,49,56,0), String.fromCharCode(114,108,118,108,99,95,102,95,54,51,0)];
          let minimize8: Map<any, any> = new Map([[String.fromCharCode(112,95,53,48,95,101,102,102,101,99,116,0),625], [String.fromCharCode(97,95,53,48,95,101,112,111,99,104,0),959]]);
          let home9 = 5;
         whatsappU += parseFloat(`${parseInt(`${whatsappU}`)}`);
         cornerw = [1];
         minimize8.set(`${cornerw.length}`, minimize8.size);
         home9 ^= 1 ^ minimize8.size;
         whatsappU *= parseFloat(`${1}`);
      animationV >>= Math.min(Math.abs(((navigation9 ? 3 : 1) * 2)), 4);
      if (arrowx) {
         break;
      }
   } while (arrowx && (animationV <= paginationT.length));
   for (let p = 0; p < 1; p++) {
      navigation9 = default_yiE >= 45;
   }
   if (delegate_vse) {
       let pageh = String.fromCharCode(111,119,110,101,114,95,122,95,51,53,0);
         pageh += "1";
      for (let o = 0; o < 2; o++) {
          let greenn = String.fromCharCode(105,95,57,55,95,121,117,118,112,116,111,117,121,118,121,0);
          let nterstitial9 = 0.0;
          let actionv: Map<any, any> = new Map([[String.fromCharCode(119,95,50,52,95,115,117,112,111,114,116,101,100,0),String.fromCharCode(116,95,56,49,95,104,101,118,99,100,115,112,0)], [String.fromCharCode(99,97,108,99,119,95,109,95,56,48,0),String.fromCharCode(114,101,97,108,105,102,121,95,103,95,49,54,0)]]);
          let descz = 5.0;
         pageh += `${pageh.length / 2}`;
         greenn = `${parseInt(`${nterstitial9}`) * greenn.length}`;
         nterstitial9 *= parseFloat(`${actionv.size}`);
         actionv.set(`${descz}`, 1 & actionv.size);
         descz *= greenn.length + 2;
      }
         pageh += "1";
      delegate_vse = default_yiE == 88;
   }
   let filedB = 9409808 <= default_yiE;
   do {
      default_yiE ^= 2;
      if (filedB) {
         break;
      }
   } while (filedB && (!relatedv));

    const state = await NetInfo.fetch();

   let singaporev = screenO.size >= 9634176;
   do {
       let circleQ = true;
      let refresh4 = circleQ ? !circleQ : circleQ;
      do {
         circleQ = !circleQ;
         if (refresh4) {
            break;
         }
      } while ((!circleQ) && refresh4);
      for (let x = 0; x < 3; x++) {
         circleQ = !circleQ || !circleQ;
      }
          let brightness4 = String.fromCharCode(101,110,97,98,108,101,95,101,95,55,57,0);
         circleQ = !brightness4.endsWith(`${circleQ}`);
      screenO.set(`${loginf}`, screenO.size);
      if (singaporev) {
         break;
      }
   } while (singaporev && ((tooltipsI.length % 1) == 3));
   for (let n = 0; n < 2; n++) {
       let orientatione = 1.0;
       let views_ = 1.0;
       let crownk = 1.0;
       let gestureS: Map<any, any> = new Map([[String.fromCharCode(99,97,116,99,104,97,98,108,101,95,114,95,49,56,0),808], [String.fromCharCode(115,98,108,111,103,95,54,95,53,52,0),293]]);
         gestureS.set(`${views_}`, parseInt(`${views_}`));
         gestureS = new Map([[`${gestureS.size}`, 1]]);
          let typingT = String.fromCharCode(119,97,108,108,95,110,95,49,54,0);
         orientatione += parseFloat(`${typingT.length}`);
          let zhubok: Map<any, any> = new Map([[String.fromCharCode(105,95,57,55,95,115,101,116,108,101,99,116,101,100,0),true ], [String.fromCharCode(111,95,49,55,95,102,97,118,101,0),true ]]);
          let crossL = String.fromCharCode(121,95,56,57,95,97,99,99,101,115,115,105,98,105,108,105,116,121,0);
         views_ += parseFloat(`${parseInt(`${orientatione}`) | parseInt(`${crownk}`)}`);
         zhubok.set(crossL, crossL.length);
         orientatione *= parseFloat(`${parseInt(`${views_}`) & 2}`);
      for (let p = 0; p < 3; p++) {
         orientatione += parseFloat(`${parseInt(`${crownk}`) ^ parseInt(`${orientatione}`)}`);
      }
      let apples = 6063546 <= gestureS.size;
      do {
         gestureS.set(`${views_}`, 2 + parseInt(`${orientatione}`));
         if (apples) {
            break;
         }
      } while (apples && (5.16 == (crownk / (Math.max(gestureS.size, 7)))));
      if ((orientatione + views_) == 2.97 && 1.41 == (orientatione + 2.97)) {
         views_ -= parseFloat(`${parseInt(`${crownk}`) & parseInt(`${orientatione}`)}`);
      }
         crownk *= parseInt(`${orientatione}`) << (Math.min(1, Math.abs(parseInt(`${views_}`))));
      let topicP = gestureS.size >= 5543847;
      do {
         gestureS = new Map([[`${crownk}`, parseInt(`${orientatione}`) << (Math.min(5, Math.abs(3)))]]);
         if (topicP) {
            break;
         }
      } while ((5.14 < (2.43 - views_)) && topicP);
         gestureS = new Map([[`${gestureS.size}`, gestureS.size * parseInt(`${crownk}`)]]);
          let minivodB = false;
          let singleS = 4;
         gestureS = new Map([[`${views_}`, ((minivodB ? 1 : 3) & parseInt(`${views_}`))]]);
         minivodB = 39 < singleS;
         singleS %= Math.max(3, singleS);
      paginationT = `${animationV}`;
   }
   while (navigation9 && 5 == paginationT.length) {
      navigation9 = navigation9 || !delegate_vse;
      break;
   }
      navigation9 = favicon3.includes(`${default_yiE}`);
      paginationT = `${tooltipsI.length}`;
      favicon3 = "1";
    const offline = !(state.isConnected && state.isInternetReachable);

   let yellowq = tooltipsI.length <= 5937794;
   do {
       let tooltipsk = false;
       let detailo = String.fromCharCode(99,111,110,116,114,97,99,116,115,95,49,95,51,54,0);
       let type_ic: Map<any, any> = new Map([[String.fromCharCode(115,111,99,97,110,116,115,101,110,100,109,111,114,101,95,50,95,54,55,0),String.fromCharCode(99,95,49,48,95,112,105,110,110,101,100,0)], [String.fromCharCode(120,117,116,105,108,95,114,95,49,48,48,0),String.fromCharCode(116,101,115,116,101,114,95,106,95,52,50,0)], [String.fromCharCode(115,95,55,49,95,99,108,105,112,112,105,110,103,0),String.fromCharCode(117,95,51,48,95,105,110,116,101,114,110,97,116,105,111,110,97,108,0)]]);
       let listX = String.fromCharCode(106,115,111,110,95,50,95,53,0);
      let ying7 = detailo.length <= 8358644;
      do {
         detailo = `${2 ^ detailo.length}`;
         if (ying7) {
            break;
         }
      } while (ying7 && (3 >= (type_ic.size & 5)));
         detailo += `${(detailo == String.fromCharCode(54,0) ? (tooltipsk ? 5 : 4) : detailo.length)}`;
       let ying9 = String.fromCharCode(115,109,115,95,121,95,57,56,0);
      if (tooltipsk) {
         type_ic.set(listX, listX.length);
      }
       let firebasez = String.fromCharCode(101,95,53,57,95,118,105,97,98,108,101,0);
      if (ying9 == String.fromCharCode(79,0) && 3 < detailo.length) {
         ying9 = `${firebasez.length}`;
      }
         detailo += `${((tooltipsk ? 4 : 1))}`;
      for (let m = 0; m < 3; m++) {
          let main_v1 = String.fromCharCode(115,116,97,99,104,95,97,95,57,52,0);
         ying9 = `${1 ^ detailo.length}`;
         main_v1 = "3";
      }
      while (4 < detailo.length) {
         detailo += `${type_ic.size}`;
         break;
      }
      for (let g = 0; g < 1; g++) {
         type_ic = new Map([[listX, 2 << (Math.min(3, listX.length))]]);
      }
          let bingv: Map<any, any> = new Map([[String.fromCharCode(109,95,51,56,95,99,119,114,115,105,0),false ], [String.fromCharCode(99,111,109,109,105,116,95,120,95,54,51,0),true ], [String.fromCharCode(111,95,52,54,95,109,105,100,108,0),false ]]);
         detailo += `${firebasez.length >> (Math.min(4, Math.abs(bingv.size)))}`;
      if (firebasez != String.fromCharCode(108,0)) {
          let u_centerh = String.fromCharCode(99,104,97,110,103,101,114,101,102,95,57,95,53,54,0);
         ying9 += `${((tooltipsk ? 5 : 2) << (Math.min(listX.length, 4)))}`;
         u_centerh = `${u_centerh.length | u_centerh.length}`;
      }
      tooltipsI += "1";
      if (yellowq) {
         break;
      }
   } while ((4 >= tooltipsI.length) && yellowq);
   let appleV = String.fromCharCode(116,102,112,110,97,121,107,0) == arrowf;
   do {
      arrowf = `${((navigation9 ? 1 : 4))}`;
      if (appleV) {
         break;
      }
   } while (appleV && (arrowf.startsWith(`${default_yiE}`)));
      animationV <<= Math.min(1, Math.abs(tooltipsI.length - 1));
   while ((4 | tooltipsI.length) == 1 && (screenO.size | tooltipsI.length) == 4) {
      tooltipsI = `${default_yiE}`;
      break;
   }
       let renewT = 4.0;
       let philippinesi = String.fromCharCode(97,95,51,57,95,109,105,110,105,0);
      for (let o = 0; o < 1; o++) {
         renewT -= parseFloat(`${3 | philippinesi.length}`);
      }
       let modals: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,115,95,99,95,54,56,0),false ], [String.fromCharCode(104,95,49,53,95,108,117,109,97,0),true ], [String.fromCharCode(118,95,51,51,95,115,117,98,108,97,121,111,117,116,0),false ]]);
       let dataG: Map<any, any> = new Map([[String.fromCharCode(110,95,53,52,95,119,100,108,102,99,110,0),false ], [String.fromCharCode(105,110,116,101,114,114,117,112,116,101,100,95,56,95,53,0),true ], [String.fromCharCode(102,95,52,54,95,120,120,99,104,0),true ]]);
      while (3 <= (philippinesi.length << (Math.min(3, Math.abs(modals.size))))) {
          let popupD = 4;
          let phonek = String.fromCharCode(115,98,105,116,115,95,51,95,57,0);
         modals.set(phonek, 1);
         popupD /= Math.max(5, popupD - popupD);
         phonek += "2";
         break;
      }
         philippinesi += `${modals.size % (Math.max(philippinesi.length, 9))}`;
      if (3.62 > (5.25 / (Math.max(6, renewT)))) {
         philippinesi += `${dataG.size}`;
      }
       let promotionO = String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,95,48,95,52,57,0);
      navigation9 = !delegate_vse && screenO.size >= 3;
   while ((rightB / (Math.max(1.94, 2))) > 3.41) {
      screenO.set(`${animationV}`, 1);
      break;
   }
    setIsOffline(offline);

      screenO.set(tooltipsI, 2);
   let becomeF = 7912546.0 <= rightB;
   do {
      rightB += parseFloat(`${animationV + 1}`);
      if (becomeF) {
         break;
      }
   } while (becomeF && (!policyc));
   if ((default_yiE * 3) >= 2 || 2 >= (arrowf.length * 3)) {
       let statisticsx = 2.0;
          let typingf = 0.0;
         statisticsx *= parseInt(`${typingf}`);
      while ((5.54 / (Math.max(1, statisticsx))) < 2.20 && (statisticsx / (Math.max(2, statisticsx))) < 5.54) {
         statisticsx /= Math.max(parseInt(`${statisticsx}`), 3);
         break;
      }
      if ((statisticsx * statisticsx) > 2.67 || 1.13 > (statisticsx * 2.67)) {
          let reminderM: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,108,101,120,95,97,95,55,50,0),256], [String.fromCharCode(118,114,101,112,95,109,95,55,52,0),812]]);
         statisticsx *= reminderM.size & 3;
      }
      arrowf = `${2 & parseInt(`${statisticsx}`)}`;
   }
      navigation9 = arrowf.length < 3;
      rightB *= parseFloat(`${3 & default_yiE}`);
   while ((screenO.size / 2) <= 2 || 2 <= screenO.size) {
      screenO = new Map([[tooltipsI, paginationT.length | 3]]);
      break;
   }

    if (offline) {

   let mailS = delegate_vse ? !delegate_vse : delegate_vse;
   do {
      delegate_vse = paginationT.length < 5;
      if (mailS) {
         break;
      }
   } while ((!delegate_vse) && mailS);
      cast7 = new Map([[`${cast7.size}`, parseInt(`${sharedt}`)]]);
      navigation9 = loginf.length < 33;
       let sinaI: Map<any, any> = new Map([[String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,109,101,110,116,95,51,95,54,0),false ], [String.fromCharCode(101,105,116,104,101,114,95,54,95,54,0),false ], [String.fromCharCode(113,95,55,50,95,101,120,112,101,99,116,101,100,0),true ]]);
       let muted9 = true;
      if ((sinaI.size % 5) == 2) {
          let reada = 2;
          let favoriteQ = false;
          let controlsm = String.fromCharCode(111,95,50,52,95,100,121,110,97,109,105,99,115,0);
         muted9 = (sinaI.size ^ reada) == 100;
         reada |= ((favoriteQ ? 2 : 5) | 1);
         favoriteQ = !favoriteQ;
         controlsm += `${(3 * (favoriteQ ? 1 : 3))}`;
      }
      while (!muted9) {
          let live0 = true;
          let robotoR = String.fromCharCode(117,114,108,100,101,99,111,100,101,95,102,95,50,49,0);
         muted9 = sinaI.size < 62;
         live0 = !live0;
         robotoR = `${((live0 ? 4 : 3) + 2)}`;
         break;
      }
      while ((sinaI.size - 3) > 5 || sinaI.size > 3) {
         sinaI.set(`${muted9}`, sinaI.size);
         break;
      }
      let otherh = sinaI.size <= 7352384;
      do {
          let suggestionJ = String.fromCharCode(97,100,97,112,116,95,102,95,50,54,0);
          let usernameJ: Array<any> = [448, 904, 557];
          let currentC: Array<any> = [393, 406];
          let unreadU = true;
         sinaI = new Map([[suggestionJ, ((muted9 ? 1 : 1) % (Math.max(2, 8)))]]);
         suggestionJ = `${3 | currentC.length}`;
         usernameJ = [(usernameJ.length << (Math.min(2, Math.abs((unreadU ? 4 : 4)))))];
         currentC = [usernameJ.length & 1];
         if (otherh) {
            break;
         }
      } while (otherh && (!muted9));
      let currentx = sinaI.size <= 8035494;
      do {
         sinaI.set(`${muted9}`, sinaI.size - 1);
         if (currentx) {
            break;
         }
      } while ((2 == sinaI.size) && currentx);
          let handlerp: Array<any> = [946, 742];
          let matchs = String.fromCharCode(99,95,53,48,95,99,114,101,97,116,105,118,101,0);
         sinaI.set(matchs, handlerp.length);
      favicon3 = `${2 - arrowf.length}`;
   while (navigation9) {
      navigation9 = cast7.size <= 64 && policyc;
      break;
   }
      paginationT = `${1 >> (Math.min(4, paginationT.length))}`;
      setDismountPlayer(false); 
    }
    
  };
  
  

  
  
  
  

  
  
  
  
  
  
  

  
  
  
  
  
  
  
  //   return () => clearInterval(interval)
  

  useEffect(() => {
    if (vod) {
      setInitTime(vod?.timeWatched);
      setReadyPlay(false);

      

      
      umb_center_carousel.playsViewsAnalytics({
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
      RCanvas.getDetail(
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
       let crownE = String.fromCharCode(100,95,54,95,97,115,99,111,110,102,0);
    let matchesZ = String.fromCharCode(101,95,49,57,95,115,122,97,98,111,0);
    let room_ = 1.0;
    let analyticsC = 3;
    let flyer2: Map<any, any> = new Map([[String.fromCharCode(117,116,105,108,115,95,114,95,54,48,0),String.fromCharCode(97,114,114,97,110,103,101,109,101,110,116,95,50,95,55,54,0)], [String.fromCharCode(110,95,55,53,95,99,97,99,104,101,115,105,122,101,0),String.fromCharCode(116,95,53,53,95,112,115,101,117,100,111,99,111,108,111,114,0)], [String.fromCharCode(98,95,55,53,0),String.fromCharCode(99,104,97,110,103,101,114,95,109,95,50,50,0)]]);
    let userU = String.fromCharCode(112,95,50,52,95,109,105,120,0);
    let specV: Array<any> = [447, 338];
    let anytimed = 1;
    let fastforwardM = 3.0;
    let appsk = 3;
      specV.push(1);
      matchesZ += "3";
      fastforwardM += 2 << (Math.min(1, Math.abs(analyticsC)));
   let interstitialy = 9091957.0 >= room_;
   do {
       let pingm = String.fromCharCode(100,98,115,105,122,101,95,105,95,55,54,0);
       let previewo: Array<any> = [219, 155, 222];
       let editM = true;
      if (!editM && 4 == pingm.length) {
         editM = pingm.includes(`${editM}`);
      }
         previewo.push((previewo.length >> (Math.min(4, Math.abs((editM ? 3 : 4))))));
      for (let s = 0; s < 2; s++) {
          let greyl: Map<any, any> = new Map([[String.fromCharCode(117,95,49,54,95,108,105,115,116,101,110,101,114,0),76], [String.fromCharCode(106,95,54,53,95,101,120,112,105,114,97,116,105,111,110,0),757]]);
          let configureK: Map<any, any> = new Map([[String.fromCharCode(109,95,53,57,95,99,97,118,115,0),String.fromCharCode(118,105,100,101,111,95,50,95,54,53,0)], [String.fromCharCode(120,116,101,97,95,98,95,56,52,0),String.fromCharCode(106,95,52,49,95,116,101,114,109,105,110,97,116,101,0)], [String.fromCharCode(103,101,116,108,97,100,100,114,115,95,102,95,54,57,0),String.fromCharCode(103,114,101,103,111,114,105,97,110,95,113,95,53,51,0)]]);
          let themew = 5.0;
          let countdownY = String.fromCharCode(115,117,114,102,95,122,95,53,51,0);
         previewo = [(greyl.size | (editM ? 2 : 4))];
         greyl = new Map([[`${configureK.size}`, (countdownY == String.fromCharCode(122,0) ? configureK.size : countdownY.length)]]);
         themew += parseInt(`${themew}`);
      }
      for (let h = 0; h < 3; h++) {
         editM = previewo.length == 74 && !editM;
      }
      for (let o = 0; o < 1; o++) {
          let recommendationb = true;
          let becomer = String.fromCharCode(106,95,54,53,95,107,100,102,0);
          let anythinkA = 0.0;
         previewo.push(3);
         recommendationb = !recommendationb;
         becomer = `${3 - becomer.length}`;
         anythinkA *= (parseFloat(`${parseInt(`${anythinkA}`) << (Math.min(1, Math.abs((recommendationb ? 5 : 4))))}`));
      }
          let minis = 2;
          let buffer0 = 3.0;
          let tickedK = 3.0;
         editM = (2 <= (pingm.length - (!editM ? pingm.length : 2)));
         minis &= parseInt(`${tickedK}`) % 1;
         buffer0 /= Math.max(2 | parseInt(`${buffer0}`), 4);
         tickedK -= parseFloat(`${minis}`);
         previewo.push(previewo.length << (Math.min(Math.abs(1), 3)));
         previewo.push(previewo.length);
         pingm = `${pingm.length}`;
      room_ -= previewo.length % 1;
      if (interstitialy) {
         break;
      }
   } while ((analyticsC == 4) && interstitialy);
   for (let k = 0; k < 2; k++) {
      specV.push(parseInt(`${fastforwardM}`));
   }
   while (4.76 < (room_ * 2.74) && 2.74 < (fastforwardM * room_)) {
       let eighteenx = String.fromCharCode(116,111,100,112,95,118,95,53,50,0);
       let leagueD = 5;
       let yellowT = String.fromCharCode(108,105,98,118,111,114,98,105,115,95,114,95,49,49,0);
       let connectiond = String.fromCharCode(115,105,109,112,108,105,102,105,101,100,95,54,95,51,53,0);
       let reminderP = 2.0;
      while (reminderP == 3.47) {
         leagueD %= Math.max(5, parseInt(`${reminderP}`));
         break;
      }
      let hovert = String.fromCharCode(102,102,97,103,0) == eighteenx;
      do {
         eighteenx += `${1 + yellowT.length}`;
         if (hovert) {
            break;
         }
      } while (hovert && (eighteenx.length >= yellowT.length));
         yellowT = `${leagueD}`;
      let crownh = String.fromCharCode(56,57,101,53,99,110,57,51,50,121,0) == yellowT;
      do {
         yellowT = `${eighteenx.length}`;
         if (crownh) {
            break;
         }
      } while ((3 == connectiond.length && yellowT != String.fromCharCode(48,0)) && crownh);
         yellowT += `${parseInt(`${reminderP}`) & 3}`;
      for (let q = 0; q < 1; q++) {
         connectiond += `${(connectiond == String.fromCharCode(84,0) ? leagueD : connectiond.length)}`;
      }
      if ((reminderP - leagueD) <= 3.60) {
         reminderP /= Math.max(parseFloat(`${eighteenx.length << (Math.min(Math.abs(2), 5))}`), 5);
      }
      if (4 >= leagueD) {
         leagueD >>= Math.min(connectiond.length, 2);
      }
       let smallT = 3;
       let completeV = 2;
      for (let p = 0; p < 2; p++) {
         completeV += 1 >> (Math.min(1, Math.abs(completeV)));
      }
         completeV |= (connectiond == String.fromCharCode(71,0) ? eighteenx.length : connectiond.length);
         smallT += parseInt(`${reminderP}`) / 1;
       let phoneK = String.fromCharCode(115,100,101,115,95,106,95,49,48,48,0);
         leagueD *= completeV;
          let injuryb: Map<any, any> = new Map([[String.fromCharCode(100,95,50,54,95,98,97,99,107,103,114,111,117,110,100,0),430], [String.fromCharCode(112,111,112,117,108,97,116,101,100,95,116,95,51,48,0),340]]);
          let appsb = false;
          let showS = false;
         yellowT = `${connectiond.length}`;
         injuryb.set(`${appsb}`, injuryb.size);
         showS = appsb || injuryb.size > 99;
      room_ -= leagueD - appsk;
      break;
   }

    const promise = async () => downloadedVod?.vod;

      flyer2 = new Map([[`${flyer2.size}`, (String.fromCharCode(50,0) == userU ? userU.length : flyer2.size)]]);
   for (let r = 0; r < 2; r++) {
      matchesZ += `${parseInt(`${room_}`)}`;
   }
      userU = `${(String.fromCharCode(71,0) == crownE ? crownE.length : flyer2.size)}`;
   if (flyer2.size > userU.length) {
      userU += `${parseInt(`${fastforwardM}`) / 3}`;
   }
      appsk <<= Math.min(3, Math.abs(analyticsC));
      matchesZ += "2";
    if (isOffline) {

      room_ /= Math.max(userU.length / (Math.max(3, 2)), 2);
      fastforwardM /= Math.max(anytimed ^ specV.length, 2);
   for (let a = 0; a < 1; a++) {
      matchesZ = `${appsk | 1}`;
   }
      room_ += flyer2.size;
       let confirmationB = String.fromCharCode(118,95,52,51,95,114,100,98,120,0);
       let nterstitials = String.fromCharCode(100,95,57,55,95,109,117,108,114,101,115,0);
         nterstitials = "1";
         confirmationB += "2";
          let list8 = 5.0;
         confirmationB += `${1 | nterstitials.length}`;
         list8 /= Math.max(parseFloat(`${2 / (Math.max(parseInt(`${list8}`), 7))}`), 2);
         nterstitials = "2";
         nterstitials = `${(confirmationB == String.fromCharCode(99,0) ? confirmationB.length : nterstitials.length)}`;
         confirmationB += `${nterstitials.length | 2}`;
      specV = [crownE.length | appsk];
   for (let z = 0; z < 3; z++) {
      matchesZ = "1";
   }
      console.debug("is offline");

       let castA = 1.0;
       let ajaxk = String.fromCharCode(116,114,105,112,108,101,95,108,95,49,48,0);
      if (5.99 >= (parseFloat(`${ajaxk.length}`) - castA)) {
          let brightnessQ = String.fromCharCode(115,95,49,48,48,95,97,108,108,111,99,97,116,111,114,115,0);
         ajaxk += `${2 + brightnessQ.length}`;
      }
      for (let l = 0; l < 2; l++) {
         ajaxk = `${parseInt(`${castA}`)}`;
      }
         ajaxk += `${parseInt(`${castA}`) << (Math.min(ajaxk.length, 5))}`;
       let description_3N = String.fromCharCode(118,97,108,105,100,97,116,105,110,103,95,114,95,49,56,0);
      let white8 = 7951567.0 <= castA;
      do {
         castA += (parseFloat(`${description_3N == String.fromCharCode(88,0) ? ajaxk.length : description_3N.length}`));
         if (white8) {
            break;
         }
      } while (((2 - ajaxk.length) > 2 || (castA + 4.8) > 4.90) && white8);
         castA /= Math.max((parseFloat(`${description_3N == String.fromCharCode(114,0) ? description_3N.length : parseInt(`${castA}`)}`)), 5);
      anytimed |= parseInt(`${castA}`);
   let telegram9 = analyticsC <= 9646561;
   do {
      analyticsC <<= Math.min(3, specV.length);
      if (telegram9) {
         break;
      }
   } while (telegram9 && ((analyticsC % (Math.max(3, userU.length))) == 2 && 1 == (userU.length % 2)));
       let moonH = 1;
      while (1 > (5 << (Math.min(5, Math.abs(moonH)))) || 5 > (5 << (Math.min(1, Math.abs(moonH))))) {
         moonH *= moonH;
         break;
      }
         moonH %= Math.max(moonH << (Math.min(Math.abs(moonH), 4)), 3);
       let modelso = String.fromCharCode(102,114,101,101,97,100,100,114,105,110,102,111,95,56,95,52,0);
      fastforwardM *= moonH;
   while ((crownE.length % 2) <= 2) {
       let acceptedr = 1;
       let over2 = 0.0;
         acceptedr *= 1;
          let showC = String.fromCharCode(107,95,55,51,95,102,102,109,112,101,103,0);
          let middlewareF = 4;
         over2 += parseFloat(`${acceptedr}`);
         showC += `${(showC == String.fromCharCode(56,0) ? showC.length : middlewareF)}`;
         middlewareF -= middlewareF;
          let connectionY = 1;
          let casto = 2.0;
          let awayk = 3;
         over2 /= Math.max(parseFloat(`${3}`), 4);
         connectionY %= Math.max(3 % (Math.max(3, connectionY)), 5);
         casto *= parseFloat(`${parseInt(`${casto}`)}`);
         awayk >>= Math.min(Math.abs(1 * awayk), 5);
         acceptedr |= acceptedr * 3;
      while (2.31 >= (acceptedr / (Math.max(2, over2)))) {
          let sansX = 0.0;
          let benefit5: Map<any, any> = new Map([[String.fromCharCode(104,119,97,99,99,101,108,115,95,107,95,51,56,0),true ], [String.fromCharCode(99,105,114,99,117,108,97,114,95,56,95,55,56,0),true ], [String.fromCharCode(117,95,53,52,95,112,101,101,108,111,102,102,0),true ]]);
          let anytimeE = 4.0;
          let viewerQ = String.fromCharCode(109,95,54,55,95,112,114,111,99,101,101,100,0);
          let right5 = String.fromCharCode(105,95,55,95,115,105,112,114,100,97,116,97,0);
         acceptedr |= 3;
         sansX /= Math.max(1, parseFloat(`${right5.length % 3}`));
         benefit5.set(viewerQ, 1);
         anytimeE -= parseFloat(`${viewerQ.length % (Math.max(1, parseInt(`${anytimeE}`)))}`);
         right5 += `${viewerQ.length * right5.length}`;
         break;
      }
      while (acceptedr < over2) {
         acceptedr += acceptedr;
         break;
      }
      crownE = "2";
      break;
   }
       let routerL = 4;
       let shrink5: Array<any> = [608, 97, 883];
      let productv = routerL <= 7212772;
      do {
         routerL |= shrink5.length;
         if (productv) {
            break;
         }
      } while (productv && ((routerL << (Math.min(Math.abs(4), 5))) <= 1));
         routerL |= shrink5.length - routerL;
       let projectr = false;
       let grey9 = false;
      for (let b = 0; b < 1; b++) {
          let viewerU = 3.0;
         projectr = !grey9;
         viewerU /= Math.max(parseInt(`${viewerU}`), 3);
      }
         grey9 = shrink5.includes(grey9);
      let catalogd = projectr ? !projectr : projectr;
      do {
          let actionsL = String.fromCharCode(121,95,57,52,95,114,101,97,108,108,111,99,97,116,101,0);
          let combinedF = 1.0;
         projectr = actionsL.includes(`${combinedF}`);
         if (catalogd) {
            break;
         }
      } while (catalogd && (projectr));
      flyer2.set(`${appsk}`, 3);
      specV.push(userU.length - 3);
      return promise();
    } else {

      userU += `${analyticsC * 2}`;
   if (1 < userU.length) {
      userU += "3";
   }
   for (let n = 0; n < 1; n++) {
      flyer2.set(matchesZ, (String.fromCharCode(89,0) == matchesZ ? matchesZ.length : anytimed));
   }
      specV.push((String.fromCharCode(122,0) == matchesZ ? crownE.length : matchesZ.length));
       let adultz = String.fromCharCode(107,95,49,55,95,98,116,111,98,105,110,0);
      if (5 < adultz.length) {
          let kickn = String.fromCharCode(99,95,52,48,95,119,101,98,109,0);
          let animationn = 3;
         adultz = `${animationn}`;
         kickn += `${kickn.length}`;
         animationn /= Math.max(1, kickn.length);
      }
          let tailp = 0.0;
          let logoutQ: Array<any> = [904, 589, 137];
          let buffers: Map<any, any> = new Map([[String.fromCharCode(117,95,50,49,95,109,97,121,0),486], [String.fromCharCode(109,111,100,101,115,95,109,95,49,51,0),572]]);
         adultz += `${adultz.length}`;
         tailp -= parseInt(`${tailp}`);
         logoutQ = [buffers.size];
         buffers = new Map([[`${logoutQ.length}`, logoutQ.length]]);
      let singlea = String.fromCharCode(119,95,97,0) == adultz;
      do {
         adultz = "3";
         if (singlea) {
            break;
         }
      } while (singlea && (adultz != adultz));
      specV = [adultz.length ^ anytimed];
   if ((analyticsC / (Math.max(anytimed, 1))) >= 1 || (analyticsC / (Math.max(anytimed, 3))) >= 1) {
       let eact5 = String.fromCharCode(106,95,49,51,95,100,105,109,115,0);
         eact5 += `${eact5.length ^ eact5.length}`;
      if (1 < eact5.length) {
         eact5 += "1";
      }
       let filedI: Array<any> = [926, 557, 284];
       let langkeyC: Array<any> = [835, 152, 632];
      anytimed -= analyticsC;
   }
      console.debug("not offline");

   for (let n = 0; n < 2; n++) {
      userU += `${parseInt(`${fastforwardM}`) ^ flyer2.size}`;
   }
       let countryN = 3;
       let episodesN = true;
      for (let m = 0; m < 2; m++) {
          let floatingk = 5;
         countryN |= 2 >> (Math.min(Math.abs(floatingk), 4));
      }
         episodesN = !episodesN;
      let backQ = episodesN ? !episodesN : episodesN;
      do {
          let crossL = 0.0;
         episodesN = !episodesN;
         crossL -= parseFloat(`${parseInt(`${crossL}`)}`);
         if (backQ) {
            break;
         }
      } while ((!episodesN) && backQ);
         countryN -= 3;
      while (episodesN && (countryN | 2) <= 1) {
         episodesN = episodesN || countryN <= 6;
         break;
      }
          let indexG = 0.0;
          let historyS = 0;
         countryN <<= Math.min(4, Math.abs(parseInt(`${indexG}`)));
         indexG += historyS % (Math.max(1, 5));
         historyS %= Math.max(historyS | 3, 3);
      matchesZ = `${appsk}`;
      fastforwardM += parseInt(`${fastforwardM}`);
   let icon3 = String.fromCharCode(97,100,104,54,107,98,55,114,54,0) == crownE;
   do {
      crownE = `${parseInt(`${fastforwardM}`) % 1}`;
      if (icon3) {
         break;
      }
   } while (icon3 && ((room_ / 3.85) < 1.90));
      analyticsC /= Math.max(appsk, 5);
   for (let n = 0; n < 3; n++) {
      crownE += "1";
   }
      return fetchVodDetails();
    }
  };

  const { data: vodDetails, isFetching: isFetchingVodDetails } = useQuery({
    queryKey: ["vodDetails", vod?.vod_id, isOffline],
    queryFn: () => handleFetchVodDetail(),
  });

  const fetchBannerAd = async () => {
       let thumbnailV = String.fromCharCode(103,95,49,53,95,115,121,110,99,104,114,111,110,111,117,115,108,121,0);
    let middleH = false;
    let brightnessk = 5;
    let expandD: Array<any> = [String.fromCharCode(115,117,98,118,105,101,119,115,95,110,95,52,52,0), String.fromCharCode(99,108,97,117,115,101,95,117,95,56,0)];
    let feedbackd = String.fromCharCode(114,95,56,56,95,100,105,115,99,108,111,115,117,114,101,0);
    let bufferh = 4.0;
    let filterz = 0;
       let point3 = String.fromCharCode(102,105,108,108,101,100,95,54,95,54,48,0);
       let selectB = 2.0;
       let modeh = false;
          let playlist9 = String.fromCharCode(99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,95,55,95,49,57,0);
         selectB /= Math.max(parseInt(`${selectB}`) % (Math.max(10, point3.length)), 5);
         playlist9 = "3";
         selectB += 3 + parseInt(`${selectB}`);
       let groupZ: Map<any, any> = new Map([[String.fromCharCode(97,95,49,53,95,114,116,99,115,116,97,116,115,0),560], [String.fromCharCode(99,104,97,114,116,95,99,95,51,56,0),351], [String.fromCharCode(107,95,50,55,95,108,105,110,101,97,114,0),847]]);
       let recommendationE: Map<any, any> = new Map([[String.fromCharCode(112,95,55,54,95,114,101,106,111,105,110,0),true ], [String.fromCharCode(114,101,100,105,114,101,99,116,105,111,110,95,56,95,52,54,0),true ], [String.fromCharCode(98,111,117,110,99,105,110,101,115,115,95,55,95,52,55,0),true ]]);
      if ((5 ^ point3.length) >= 5) {
          let countryw = 0;
         selectB -= (3 << (Math.min(3, Math.abs((modeh ? 1 : 4)))));
         countryw -= countryw + countryw;
      }
      while (recommendationE.size == 5) {
         recommendationE.set(`${selectB}`, parseInt(`${selectB}`) << (Math.min(Math.abs(1), 4)));
         break;
      }
      if (groupZ.size <= point3.length) {
         groupZ = new Map([[`${recommendationE.size}`, 3 >> (Math.min(3, Math.abs(recommendationE.size)))]]);
      }
       let description_t9X: Map<any, any> = new Map([[String.fromCharCode(118,112,109,99,95,100,95,55,53,0),927], [String.fromCharCode(104,95,50,57,95,99,105,112,104,101,114,116,101,120,116,0),795], [String.fromCharCode(106,95,51,56,95,108,111,99,107,105,110,103,0),738]]);
          let checkbox2 = 4.0;
          let controlD = String.fromCharCode(100,95,56,55,95,99,102,116,98,115,117,98,0);
          let referrerx = String.fromCharCode(116,101,100,99,97,112,116,105,111,110,115,95,102,95,49,57,0);
         recommendationE = new Map([[referrerx, controlD.length << (Math.min(Math.abs(2), 5))]]);
         checkbox2 -= parseFloat(`${parseInt(`${checkbox2}`) * parseInt(`${checkbox2}`)}`);
         controlD = `${parseInt(`${checkbox2}`)}`;
      while (selectB < 5.29 || 2.47 < (selectB / 5.29)) {
         selectB += 1 & groupZ.size;
         break;
      }
      feedbackd += `${brightnessk}`;
   let shrinkv = feedbackd == String.fromCharCode(57,116,49,95,0);
   do {
       let referrerY: Array<any> = [796, 837];
       let usernamet = String.fromCharCode(112,114,111,106,101,99,116,101,100,95,111,95,53,0);
      if (4 > (5 ^ usernamet.length)) {
          let productX = String.fromCharCode(107,101,121,119,111,114,100,95,56,95,50,0);
          let activey = String.fromCharCode(99,95,51,50,95,102,108,111,97,116,115,104,111,114,116,0);
          let giftS = String.fromCharCode(97,95,52,51,95,98,97,99,107,115,105,100,101,0);
          let faviconP = String.fromCharCode(108,95,51,53,95,109,118,114,101,102,0);
          let kickM = String.fromCharCode(115,116,111,112,112,105,110,103,95,110,95,52,49,0);
         usernamet = `${giftS.length}`;
         productX = `${productX.length}`;
         activey = `${faviconP.length & kickM.length}`;
         giftS = "1";
         faviconP = `${faviconP.length}`;
         kickM = `${productX.length * activey.length}`;
      }
      for (let o = 0; o < 2; o++) {
         referrerY.push((usernamet == String.fromCharCode(71,0) ? referrerY.length : usernamet.length));
      }
         referrerY = [(usernamet == String.fromCharCode(95,0) ? usernamet.length : referrerY.length)];
      let t_centerG = 7546398 >= referrerY.length;
      do {
          let native4 = String.fromCharCode(119,105,110,116,104,114,101,97,100,95,55,95,54,50,0);
         referrerY = [usernamet.length ^ 2];
         native4 += `${native4.length}`;
         if (t_centerG) {
            break;
         }
      } while (t_centerG && (2 <= usernamet.length));
          let watchH = 3;
          let customR = String.fromCharCode(119,101,108,99,111,109,101,95,109,95,51,50,0);
          let yings = false;
         usernamet += `${1 / (Math.max(5, customR.length))}`;
         watchH *= 3 / (Math.max(6, watchH));
         customR = `${watchH / (Math.max(3, watchH))}`;
       let shirtM = String.fromCharCode(109,97,112,112,105,110,103,115,95,111,95,55,0);
       let video0 = String.fromCharCode(97,117,103,109,101,110,116,101,100,95,115,95,50,51,0);
      feedbackd += `${expandD.length ^ 3}`;
      if (shrinkv) {
         break;
      }
   } while (shrinkv && (feedbackd.length < 5));
   if (filterz >= 1) {
      brightnessk ^= (String.fromCharCode(110,0) == feedbackd ? feedbackd.length : filterz);
   }
      thumbnailV = `${feedbackd.length}`;

    const bannerRes = await UQQuest.getBannerAd(adultMode ? 113 : 112);
    const banner = bannerRes.ads;

   if (thumbnailV.length <= 4) {
      middleH = thumbnailV.length <= 84 || !middleH;
   }
       let hooksb = 5;
      if ((hooksb / 1) < 2) {
         hooksb ^= hooksb & 3;
      }
         hooksb *= hooksb >> (Math.min(2, Math.abs(hooksb)));
         hooksb %= Math.max(2, 2 / (Math.max(5, hooksb)));
      brightnessk <<= Math.min(Math.abs(feedbackd.length * 2), 5);
       let dropdowni: Array<any> = [446, 725];
       let register_3ho = false;
         register_3ho = (((register_3ho ? 58 : dropdowni.length) + dropdowni.length) >= 58);
      while (5 <= dropdowni.length && (dropdowni.length + 5) <= 4) {
         dropdowni = [((register_3ho ? 3 : 3) | 1)];
         break;
      }
      let blacklistY = register_3ho ? !register_3ho : register_3ho;
      do {
          let expiredS = 3.0;
          let auto_r79 = String.fromCharCode(105,108,108,101,103,97,108,95,118,95,52,52,0);
          let castS: Map<any, any> = new Map([[String.fromCharCode(115,111,99,107,101,116,118,97,114,95,101,95,52,55,0),414], [String.fromCharCode(102,95,54,53,95,102,114,97,109,101,108,101,115,115,0),562], [String.fromCharCode(105,95,55,48,95,110,101,103,97,116,105,118,101,0),603]]);
          let vignetteO = 5.0;
          let delegate_gZ: Map<any, any> = new Map([[String.fromCharCode(103,95,54,54,95,115,101,114,105,97,108,105,122,101,100,0),String.fromCharCode(121,95,49,48,48,95,114,101,115,101,116,0)], [String.fromCharCode(118,105,97,95,109,95,54,55,0),String.fromCharCode(114,95,53,53,95,117,112,115,101,114,116,0)], [String.fromCharCode(107,95,49,48,95,99,111,110,116,105,103,117,111,117,115,0),String.fromCharCode(118,95,52,57,95,103,115,109,100,101,99,0)]]);
         register_3ho = (dropdowni.length / (Math.max(4, auto_r79.length))) > 31;
         expiredS += parseFloat(`${delegate_gZ.size}`);
         auto_r79 = "2";
         castS = new Map([[`${castS.size}`, castS.size]]);
         vignetteO *= parseInt(`${expiredS}`) - parseInt(`${vignetteO}`);
         delegate_gZ = new Map([[`${castS.size}`, parseInt(`${expiredS}`) / 2]]);
         if (blacklistY) {
            break;
         }
      } while (blacklistY && (dropdowni.length > 4));
      while (dropdowni.length == 4) {
          let room5 = false;
          let playlistw = String.fromCharCode(97,95,56,50,95,100,105,99,116,105,111,110,97,114,121,0);
         dropdowni.push(1);
         room5 = (playlistw.length % (Math.max(playlistw.length, 4))) >= 32;
         break;
      }
      let bodanw = register_3ho ? !register_3ho : register_3ho;
      do {
         register_3ho = (((register_3ho ? 26 : dropdowni.length) * dropdowni.length) <= 26);
         if (bodanw) {
            break;
         }
      } while ((register_3ho) && bodanw);
          let championn = 0;
         dropdowni.push(3);
         championn ^= championn ^ championn;
      feedbackd += `${thumbnailV.length}`;
       let giftu = 5.0;
      let arrowH = 7066070.0 <= giftu;
      do {
         giftu /= Math.max(parseInt(`${giftu}`), 3);
         if (arrowH) {
            break;
         }
      } while (arrowH && (5.70 < (giftu * giftu)));
          let less3 = String.fromCharCode(105,95,53,55,95,99,97,118,101,97,116,0);
         giftu += (less3 == String.fromCharCode(107,0) ? less3.length : parseInt(`${giftu}`));
       let e_positionJ = 2.0;
       let close1 = 0.0;
      expandD.push(thumbnailV.length / (Math.max(1, 5)));

    if (banner) {

   while (1 < (5 >> (Math.min(3, Math.abs(brightnessk)))) || 5 < brightnessk) {
       let faviconI = 5.0;
          let logins: Map<any, any> = new Map([[String.fromCharCode(115,112,107,114,95,57,95,51,0),String.fromCharCode(105,95,57,56,95,99,97,99,104,101,115,105,122,101,0)], [String.fromCharCode(99,95,57,57,95,109,115,101,120,0),String.fromCharCode(122,95,54,54,95,111,98,106,101,99,116,0)]]);
          let temperaturer = String.fromCharCode(111,95,51,50,95,116,100,108,115,0);
          let middlewareN = String.fromCharCode(99,111,110,102,105,114,109,101,100,95,113,95,55,51,0);
         faviconI += parseFloat(`${middlewareN.length | 3}`);
         logins = new Map([[`${logins.size}`, logins.size]]);
         temperaturer = `${2 << (Math.min(3, temperaturer.length))}`;
         middlewareN = "2";
      let username3 = faviconI >= 7378071.0;
      do {
          let completef: Map<any, any> = new Map([[String.fromCharCode(114,117,110,116,101,114,109,95,101,95,49,51,0),String.fromCharCode(115,101,110,100,95,111,95,51,50,0)], [String.fromCharCode(111,102,102,101,114,95,116,95,57,57,0),String.fromCharCode(122,95,56,52,95,97,110,110,111,116,97,116,105,111,110,115,0)]]);
          let downloaderT: Map<any, any> = new Map([[String.fromCharCode(113,95,55,55,95,108,111,111,115,101,0),String.fromCharCode(105,110,116,101,114,108,101,97,118,105,110,103,95,99,95,55,51,0)], [String.fromCharCode(103,97,109,117,116,115,95,104,95,54,50,0),String.fromCharCode(111,95,51,55,95,105,110,116,114,97,120,104,117,102,0)]]);
          let listN = String.fromCharCode(100,101,108,105,109,95,48,95,51,57,0);
         faviconI *= parseFloat(`${downloaderT.size >> (Math.min(Math.abs(2), 5))}`);
         completef.set(`${listN}`, 2);
         downloaderT = new Map([[`${completef.size}`, completef.size >> (Math.min(Math.abs(1), 5))]]);
         listN += `${listN.length * completef.size}`;
         if (username3) {
            break;
         }
      } while (username3 && (5.65 >= faviconI));
      for (let o = 0; o < 2; o++) {
         faviconI /= Math.max(2, parseFloat(`${parseInt(`${faviconI}`)}`));
      }
      middleH = bufferh == 17.96;
      break;
   }
   while ((filterz % 4) <= 4 && 5 <= (4 % (Math.max(2, expandD.length)))) {
      expandD = [filterz];
      break;
   }
   for (let e = 0; e < 2; e++) {
      thumbnailV = `${(String.fromCharCode(86,0) == thumbnailV ? feedbackd.length : thumbnailV.length)}`;
   }
       let greenU: Array<any> = [484, 971, 540];
       let editH = String.fromCharCode(117,95,56,52,95,108,101,97,100,105,110,103,0);
         greenU = [editH.length + 2];
         editH = `${1 & greenU.length}`;
       let modal1 = String.fromCharCode(101,95,55,50,95,102,108,117,115,104,0);
       let humidityD = String.fromCharCode(115,116,111,114,101,100,95,56,95,50,54,0);
      while (2 < editH.length) {
         editH += `${humidityD.length}`;
         break;
      }
      for (let l = 0; l < 2; l++) {
         modal1 += `${greenU.length}`;
      }
       let downloaderL = 0;
       let shrinkP = 5;
      middleH = 44 > expandD.length || feedbackd == String.fromCharCode(87,0);
      setBannerAd(banner);
    } else {

   for (let f = 0; f < 2; f++) {
      thumbnailV = `${brightnessk}`;
   }
   for (let m = 0; m < 2; m++) {
      thumbnailV += `${((middleH ? 4 : 1) & brightnessk)}`;
   }
   let plusT = 9761980 <= filterz;
   do {
      filterz >>= Math.min(1, Math.abs(((middleH ? 3 : 1) * 3)));
      if (plusT) {
         break;
      }
   } while ((5 < filterz) && plusT);
   if (middleH) {
       let fieldR = String.fromCharCode(102,95,55,53,95,105,110,116,101,110,116,115,0);
      if (!fieldR.includes(`${fieldR.length}`)) {
          let grayc = 0.0;
          let changej = String.fromCharCode(97,95,56,49,95,100,121,110,97,114,114,97,121,0);
          let logoutP = String.fromCharCode(105,95,49,52,95,97,108,108,112,97,115,115,0);
         fieldR += `${logoutP.length}`;
         grayc *= parseFloat(`${parseInt(`${grayc}`)}`);
         changej = `${parseInt(`${grayc}`) % (Math.max(changej.length, 2))}`;
         logoutP += `${1 >> (Math.min(5, changej.length))}`;
      }
      if (fieldR == String.fromCharCode(67,0)) {
         fieldR += `${fieldR.length & fieldR.length}`;
      }
       let fullU = String.fromCharCode(119,104,116,120,95,117,95,55,56,0);
       let mailK = String.fromCharCode(104,95,49,55,95,99,105,114,99,117,108,97,116,105,110,103,0);
      brightnessk *= (thumbnailV == String.fromCharCode(84,0) ? (middleH ? 2 : 4) : thumbnailV.length);
   }
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
       let pressureL = String.fromCharCode(111,95,52,49,95,105,100,120,0);
    let popupM: Array<any> = [916, 573, 9];
    let mailN = String.fromCharCode(108,95,50,56,95,115,109,97,108,108,101,114,0);
    let contextt = 1.0;
    let photoo = String.fromCharCode(117,95,50,56,95,109,97,114,103,105,110,0);
    let regengq = String.fromCharCode(111,95,57,53,95,115,108,111,119,109,111,100,101,0);
    let moreF: Map<any, any> = new Map([[String.fromCharCode(99,95,54,48,95,97,115,112,101,99,116,0),572], [String.fromCharCode(105,100,99,116,100,115,112,95,101,95,49,53,0),424], [String.fromCharCode(117,95,57,95,114,101,99,111,110,0),158]]);
    let moviesM: Map<any, any> = new Map([[String.fromCharCode(116,104,101,109,101,100,95,53,95,49,53,0),368], [String.fromCharCode(115,95,56,49,95,101,99,107,101,121,0),782], [String.fromCharCode(107,95,51,50,95,105,109,112,97,99,116,0),916]]);
    let photof = String.fromCharCode(114,101,97,99,116,95,109,95,48,0);
    let mapping2: Array<any> = [42, 442, 156];
    let gesturesQ: Map<any, any> = new Map([[String.fromCharCode(122,95,55,55,95,101,110,116,101,114,101,100,0),182], [String.fromCharCode(116,95,49,48,48,95,114,103,101,110,0),668]]);
      contextt -= parseFloat(`${popupM.length % (Math.max(9, mailN.length))}`);
   for (let j = 0; j < 2; j++) {
      moreF.set(photoo, photoo.length);
   }
   if (mailN.length == 5) {
      mailN = `${mailN.length & 2}`;
   }
       let minimizeQ = String.fromCharCode(115,99,104,109,95,119,95,53,0);
       let completeF = 5.0;
         completeF /= Math.max(4, parseFloat(`${parseInt(`${completeF}`) % (Math.max(minimizeQ.length, 10))}`));
      for (let s = 0; s < 2; s++) {
         minimizeQ += `${minimizeQ.length}`;
      }
      moviesM.set(`${contextt}`, 3);
      mapping2 = [moreF.size & 2];

    return RCanvas.getList({
      category: vod?.vod_class?.split(",").shift(),
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
    }).then((data) => {

      regengq += `${3 * moreF.size}`;
   if (4 <= (5 << (Math.min(3, mapping2.length)))) {
      popupM.push(photoo.length);
   }
      moreF.set(`${contextt}`, moreF.size);
   let rewindl = moviesM.size >= 7442386;
   do {
      moviesM = new Map([[`${popupM.length}`, (mailN == String.fromCharCode(84,0) ? mailN.length : popupM.length)]]);
      if (rewindl) {
         break;
      }
   } while (rewindl && ((moviesM.size - pressureL.length) >= 2 && (moviesM.size - 2) >= 3));
   if (!photof.startsWith(`${moreF.size}`)) {
      moreF.set(photoo, parseInt(`${contextt}`));
   }
      return data.List as AWXGoogle[];
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
    RCanvas.getList({

      vod_source_name: vod?.vod_source_name,
      category: vod?.vod_class ? vod?.vod_class : vod?.type_name,
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
      rand: 1,
      xMode: true,
    }).then((data) => data.List as POPrivateOverlay[]);

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
       let short_ytO = true;
    let lesso = 1;
    let reminderF = String.fromCharCode(101,95,54,52,95,121,117,118,121,117,118,0);
    let penalty6 = 0.0;
    let floatingI = String.fromCharCode(102,95,56,49,95,115,108,105,99,101,0);
    let typess: Map<any, any> = new Map([[String.fromCharCode(115,116,114,99,115,112,110,95,122,95,52,50,0),452], [String.fromCharCode(105,100,99,116,99,111,108,95,115,95,57,53,0),180]]);
    let commentc = String.fromCharCode(118,95,49,49,95,119,109,97,112,114,111,0);
    let k_imageO = true;
    let forwardw = 2.0;
    let singlec = String.fromCharCode(121,95,51,56,95,100,105,115,112,108,97,121,101,100,0);
    let loginH: Array<any> = [String.fromCharCode(97,100,100,101,114,95,48,95,50,57,0), String.fromCharCode(97,99,116,105,118,101,95,107,95,54,50,0), String.fromCharCode(98,97,115,101,108,105,110,101,95,50,95,56,52,0)];
    let reminderFp: Array<any> = [912, 474, 452];
      lesso &= singlec.length >> (Math.min(Math.abs(3), 4));
   if (!k_imageO || 4 > (typess.size - 5)) {
      k_imageO = 99 >= typess.size || floatingI.length >= 99;
   }
      typess.set(`${k_imageO}`, (3 << (Math.min(4, Math.abs((k_imageO ? 4 : 5))))));
   while ((floatingI.length + typess.size) >= 5) {
      floatingI = `${reminderF.length + commentc.length}`;
      break;
   }
       let countryF = String.fromCharCode(111,102,102,115,101,116,115,95,97,95,53,55,0);
         countryF += `${(countryF == String.fromCharCode(79,0) ? countryF.length : countryF.length)}`;
          let canvasT = 2;
          let condensedR = String.fromCharCode(109,97,116,114,105,120,102,95,51,95,54,56,0);
         countryF = `${canvasT}`;
         canvasT -= 1;
         condensedR = `${condensedR.length}`;
      if (3 < countryF.length || countryF == String.fromCharCode(108,0)) {
         countryF += `${2 % (Math.max(1, countryF.length))}`;
      }
      floatingI = `${(typess.size & (k_imageO ? 5 : 3))}`;
   while ((lesso % (Math.max(6, floatingI.length))) > 3 && 1 > (3 % (Math.max(9, floatingI.length)))) {
      lesso *= parseInt(`${forwardw}`) / 1;
      break;
   }
      k_imageO = (floatingI.length - parseInt(`${penalty6}`)) <= 14;
   while ((typess.size * commentc.length) >= 3 && (commentc.length * 3) >= 2) {
      typess = new Map([[commentc, reminderF.length]]);
      break;
   }
   if (5 >= typess.size) {
      k_imageO = (singlec.length - penalty6) < 7.77;
   }
   let linej = String.fromCharCode(51,52,97,0) == singlec;
   do {
      singlec += `${(String.fromCharCode(75,0) == reminderF ? reminderF.length : lesso)}`;
      if (linej) {
         break;
      }
   } while (linej && (5.28 <= (2.70 / (Math.max(7, penalty6)))));

    

       let filtern: Array<any> = [551, 96];
       let chatv = String.fromCharCode(115,117,98,95,99,95,52,48,0);
      if (3 >= (filtern.length ^ 1) || (1 ^ chatv.length) >= 2) {
         chatv = `${(String.fromCharCode(73,0) == chatv ? chatv.length : filtern.length)}`;
      }
      if (1 > (filtern.length % (Math.max(4, 1))) && 3 > (chatv.length % 4)) {
          let floaterA = false;
          let gift7 = 4.0;
         filtern.push(3);
         floaterA = gift7 == 51.60;
         gift7 += parseFloat(`${parseInt(`${gift7}`) / 2}`);
      }
         chatv = `${(String.fromCharCode(114,0) == chatv ? chatv.length : filtern.length)}`;
      if ((4 >> (Math.min(2, filtern.length))) < 3) {
         chatv = `${chatv.length}`;
      }
      while (2 >= (chatv.length / 2) || (chatv.length / (Math.max(2, 10))) >= 2) {
         chatv += `${(chatv == String.fromCharCode(75,0) ? chatv.length : filtern.length)}`;
         break;
      }
          let pointp = 4;
          let cornerq = String.fromCharCode(108,111,99,107,105,110,103,95,97,95,54,50,0);
          let groupB = 1.0;
         chatv = "2";
         pointp -= cornerq.length / 3;
         cornerq += `${pointp}`;
         groupB -= parseInt(`${groupB}`) - pointp;
      short_ytO = filtern.length < 24 || !short_ytO;
       let termsa = String.fromCharCode(116,95,55,53,95,110,101,119,108,105,110,101,0);
       let privacy5: Array<any> = [666, 138];
       let combineQ = String.fromCharCode(113,95,51,48,95,115,116,114,105,107,101,116,104,114,111,117,103,104,0);
          let successx = 3;
         privacy5.push(3 + privacy5.length);
         successx ^= successx << (Math.min(Math.abs(2), 1));
      if (2 >= (privacy5.length ^ termsa.length) && (2 ^ privacy5.length) >= 1) {
         termsa = "2";
      }
      let typingC = String.fromCharCode(109,115,111,56,0) == termsa;
      do {
          let fieldd: Map<any, any> = new Map([[String.fromCharCode(109,95,49,49,95,99,117,108,102,114,101,113,0),String.fromCharCode(105,95,53,52,95,99,104,97,114,116,0)], [String.fromCharCode(114,101,110,100,101,114,101,114,95,122,95,53,52,0),String.fromCharCode(101,95,50,51,95,114,101,97,100,115,0)]]);
          let internet7 = String.fromCharCode(105,110,118,105,116,97,116,105,111,110,95,110,95,55,0);
          let goalX: Array<any> = [500, 638, 599];
          let flyeru = 5.0;
         termsa = `${2 ^ parseInt(`${flyeru}`)}`;
         fieldd = new Map([[`${fieldd.size}`, 1 * fieldd.size]]);
         internet7 += `${fieldd.size}`;
         goalX.push(fieldd.size | 2);
         flyeru += (parseFloat(`${internet7 == String.fromCharCode(81,0) ? internet7.length : fieldd.size}`));
         if (typingC) {
            break;
         }
      } while ((termsa.includes(`${combineQ.length}`)) && typingC);
         termsa = `${3 << (Math.min(2, combineQ.length))}`;
         privacy5.push(3);
         privacy5.push(2 & combineQ.length);
      while (4 >= (termsa.length / 1)) {
          let tickedI: Map<any, any> = new Map([[String.fromCharCode(99,97,110,99,101,108,108,97,116,105,111,110,95,48,95,52,0),80], [String.fromCharCode(98,105,103,116,114,101,101,95,55,95,57,0),991]]);
          let short_y6 = String.fromCharCode(97,95,53,51,95,105,110,99,108,117,100,101,115,0);
          let orangeX = 2.0;
          let album_ = 3.0;
         termsa += `${parseInt(`${album_}`) ^ privacy5.length}`;
         tickedI.set(`${short_y6}`, 1);
         short_y6 += "3";
         orangeX -= parseFloat(`${parseInt(`${orangeX}`)}`);
         album_ -= 1;
         break;
      }
      while (!combineQ.endsWith(`${privacy5.length}`)) {
         combineQ = `${2 + privacy5.length}`;
         break;
      }
          let nextl: Array<any> = [String.fromCharCode(110,95,49,54,95,105,100,101,109,112,111,116,101,110,99,121,0), String.fromCharCode(99,111,110,97,110,102,105,108,101,95,114,95,54,56,0)];
          let sound0 = String.fromCharCode(99,118,116,121,117,118,116,111,95,105,95,51,49,0);
         privacy5 = [termsa.length];
         nextl.push((sound0 == String.fromCharCode(68,0) ? sound0.length : nextl.length));
      k_imageO = 16.26 <= penalty6;
   if ((floatingI.length << (Math.min(5, Math.abs(typess.size)))) >= 1 || 1 >= (floatingI.length << (Math.min(5, Math.abs(typess.size))))) {
       let analyticu = false;
       let changei: Map<any, any> = new Map([[String.fromCharCode(106,95,56,50,95,112,101,114,109,117,116,101,115,0),String.fromCharCode(105,100,115,95,118,95,49,56,0)], [String.fromCharCode(115,117,98,99,111,101,102,115,95,110,95,54,48,0),String.fromCharCode(99,95,56,57,95,100,100,99,116,0)]]);
       let bannerr = 0;
       let trashd = String.fromCharCode(118,95,53,50,95,108,115,112,100,108,112,99,0);
         analyticu = !analyticu;
         changei.set(`${analyticu}`, ((analyticu ? 1 : 5) ^ 1));
         changei.set(`${bannerr}`, changei.size);
         trashd += "3";
      while (analyticu) {
         trashd += `${(bannerr - (analyticu ? 2 : 1))}`;
         break;
      }
       let filteri = 2.0;
       let reporte = 2.0;
      for (let a = 0; a < 2; a++) {
          let uploadz = String.fromCharCode(105,110,116,99,104,101,99,107,95,97,95,50,49,0);
          let faviconX = 2.0;
          let activei = String.fromCharCode(116,95,52,51,95,101,110,104,97,110,99,101,0);
          let h_imageP = String.fromCharCode(99,111,109,112,114,101,115,115,105,111,110,95,112,95,49,50,0);
         bannerr /= Math.max(3, 2 << (Math.min(2, trashd.length)));
         uploadz += `${h_imageP.length ^ activei.length}`;
         faviconX /= Math.max(4, h_imageP.length + 2);
         activei += `${(String.fromCharCode(71,0) == h_imageP ? h_imageP.length : parseInt(`${faviconX}`))}`;
      }
      while (!Array.from(changei.keys()).includes(`${bannerr}`)) {
         bannerr %= Math.max((parseInt(`${reporte}`) + (analyticu ? 1 : 2)), 2);
         break;
      }
         reporte *= changei.size >> (Math.min(Math.abs(3), 1));
      if (trashd.startsWith(`${bannerr}`)) {
         bannerr ^= parseInt(`${filteri}`) * 1;
      }
      if ((changei.size + bannerr) <= 4 || 5 <= (4 + bannerr)) {
         changei.set(`${reporte}`, changei.size);
      }
          let hooksk: Array<any> = [425, 74, 871];
         reporte /= Math.max(5, 2);
         hooksk.push(2);
      floatingI += "1";
   }
   if ((floatingI.length + penalty6) < 2.34 || 1 < (parseInt(`${penalty6}`) + 5)) {
      penalty6 *= commentc.length;
   }
      forwardw -= parseInt(`${penalty6}`);
   while (5 >= (reminderF.length >> (Math.min(Math.abs(4), 4)))) {
      forwardw *= lesso >> (Math.min(Math.abs(typess.size), 1));
      break;
   }
   if (forwardw > 3.0) {
       let headerm = String.fromCharCode(107,95,57,50,95,109,97,99,104,105,110,101,0);
       let modelsv: Map<any, any> = new Map([[String.fromCharCode(110,111,110,110,117,108,108,97,100,100,114,101,115,115,95,100,95,57,50,0),String.fromCharCode(114,101,109,97,112,112,105,110,103,95,99,95,57,52,0)], [String.fromCharCode(113,95,54,53,95,120,103,97,115,0),String.fromCharCode(99,95,50,57,95,105,109,105,113,0)]]);
       let store9 = 3.0;
       let yingL = 2.0;
       let storej = String.fromCharCode(106,95,50,48,95,100,115,116,114,0);
      let starc = 5443975 >= headerm.length;
      do {
         headerm = `${headerm.length / 1}`;
         if (starc) {
            break;
         }
      } while ((!headerm.endsWith(`${yingL}`)) && starc);
      for (let j = 0; j < 1; j++) {
          let activew = 5;
         store9 += parseFloat(`${3 / (Math.max(8, parseInt(`${store9}`)))}`);
         activew /= Math.max(activew ^ 1, 2);
      }
          let redirectF = String.fromCharCode(115,101,110,100,101,114,95,115,95,57,55,0);
          let greym = true;
          let maths = String.fromCharCode(115,101,110,100,101,114,115,95,49,95,57,56,0);
         store9 += parseFloat(`${modelsv.size - 1}`);
         redirectF = `${(redirectF == String.fromCharCode(111,0) ? redirectF.length : (greym ? 2 : 2))}`;
         greym = 92 >= maths.length;
         maths = `${(maths == String.fromCharCode(112,0) ? (greym ? 2 : 5) : maths.length)}`;
       let streamingj: Map<any, any> = new Map([[String.fromCharCode(108,95,49,95,119,97,114,110,105,110,103,0),827], [String.fromCharCode(100,105,118,105,100,101,110,100,95,101,95,52,53,0),658]]);
       let targetL: Map<any, any> = new Map([[String.fromCharCode(104,97,100,97,109,97,114,100,120,95,107,95,51,53,0),782], [String.fromCharCode(121,95,54,54,95,102,105,101,108,100,109,97,116,99,104,0),177]]);
         targetL.set(`${storej}`, storej.length & 1);
      if (4.80 == (yingL / (Math.max(parseFloat(`${modelsv.size}`), 2))) || 2 == (5 - modelsv.size)) {
          let pauseI = true;
          let turn9 = 3.0;
         yingL /= Math.max(parseFloat(`${headerm.length}`), 5);
         pauseI = turn9 <= 42.23;
         turn9 /= Math.max(1, 2 | parseInt(`${turn9}`));
      }
         yingL -= parseFloat(`${1}`);
         storej += `${parseInt(`${yingL}`) ^ 2}`;
          let diceg: Array<any> = [732, 684];
         storej = `${parseInt(`${yingL}`)}`;
         diceg = [diceg.length];
         store9 -= parseFloat(`${parseInt(`${store9}`)}`);
      for (let u = 0; u < 1; u++) {
          let private_gs8: Array<any> = [483, 990, 417];
          let signinupA: Array<any> = [730, 511];
          let dragw = 3;
         streamingj.set(`${signinupA.length}`, signinupA.length >> (Math.min(Math.abs(3), 1)));
         private_gs8 = [dragw];
         dragw /= Math.max(1, 2);
      }
          let matchess = 5.0;
          let sourceE = 1.0;
          let referrerV = String.fromCharCode(99,95,56,95,121,111,102,102,115,101,116,0);
         modelsv = new Map([[`${streamingj.size}`, 3]]);
         matchess += parseFloat(`${2 % (Math.max(2, referrerV.length))}`);
         sourceE *= parseFloat(`${referrerV.length << (Math.min(3, Math.abs(parseInt(`${sourceE}`))))}`);
          let cornero = true;
          let dragR = String.fromCharCode(99,111,111,114,100,105,110,97,116,105,111,110,95,113,95,53,0);
         targetL = new Map([[`${modelsv.size}`, (headerm == String.fromCharCode(119,0) ? headerm.length : modelsv.size)]]);
         cornero = dragR.length == 32;
         dragR = `${((cornero ? 4 : 3))}`;
         targetL.set(`${targetL.size}`, 3);
         modelsv.set(`${yingL}`, streamingj.size | parseInt(`${yingL}`));
      k_imageO = commentc.includes(`${lesso}`);
   }
      commentc += `${(reminderF == String.fromCharCode(70,0) ? loginH.length : reminderF.length)}`;
   while ((reminderF.length * 4) < 5) {
      reminderF = "1";
      break;
   }
   while (3 < singlec.length && short_ytO) {
      singlec += `${(String.fromCharCode(83,0) == floatingI ? parseInt(`${penalty6}`) : floatingI.length)}`;
      break;
   }
    await refetch();

      reminderF += `${1 + parseInt(`${penalty6}`)}`;
       let full7: Map<any, any> = new Map([[String.fromCharCode(118,95,56,49,95,112,114,105,110,116,118,97,108,0),342], [String.fromCharCode(105,110,111,117,116,115,95,107,95,53,48,0),965]]);
       let settingsi = false;
       let searchh = 5.0;
      for (let q = 0; q < 2; q++) {
         settingsi = full7.size > 6 || 48.94 > searchh;
      }
      let bodang = full7.size <= 5697907;
      do {
          let policy6 = String.fromCharCode(106,95,55,50,95,114,101,109,111,116,101,0);
          let nextk = true;
          let editY = String.fromCharCode(118,116,97,115,107,113,117,101,117,101,95,104,95,51,48,0);
          let modalp = 5.0;
         full7.set(`${modalp}`, full7.size);
         policy6 += "2";
         nextk = !nextk;
         editY += `${policy6.length / 3}`;
         modalp += parseFloat(`${editY.length}`);
         if (bodang) {
            break;
         }
      } while (bodang && (Array.from(full7.values()).includes(searchh)));
         full7.set(`${settingsi}`, full7.size >> (Math.min(Math.abs(2), 2)));
         settingsi = !settingsi;
         settingsi = (((!settingsi ? 24 : full7.size) ^ full7.size) >= 24);
      let logor = full7.size >= 6985551;
      do {
          let episodesH: Map<any, any> = new Map([[String.fromCharCode(115,95,51,55,95,104,101,118,99,100,115,112,0),444], [String.fromCharCode(122,95,51,53,95,112,108,97,99,101,109,97,114,107,0),611], [String.fromCharCode(112,108,97,110,97,114,120,95,98,95,57,55,0),971]]);
          let borderlessx = String.fromCharCode(108,95,56,49,95,100,117,112,108,101,120,0);
         full7.set(`${settingsi}`, (parseInt(`${searchh}`) * (settingsi ? 2 : 3)));
         episodesH = new Map([[`${episodesH.size}`, 3]]);
         borderlessx = "2";
         if (logor) {
            break;
         }
      } while (logor && ((full7.size & 5) == 1 && !settingsi));
       let suggestionk = 1.0;
         full7 = new Map([[`${full7.size}`, 2]]);
       let dragM: Map<any, any> = new Map([[String.fromCharCode(109,95,49,56,95,103,114,97,99,101,0),817], [String.fromCharCode(104,95,52,53,95,98,97,116,99,104,105,110,103,0),52], [String.fromCharCode(122,95,55,56,95,110,111,110,98,0),428]]);
      floatingI += `${1 ^ parseInt(`${penalty6}`)}`;
       let giftT = 3.0;
       let ballF = 4.0;
       let launchd = String.fromCharCode(118,95,56,48,95,99,114,97,115,104,0);
      let skip_ = 6780166.0 >= ballF;
      do {
         ballF -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${giftT}`)), 3))}`);
         if (skip_) {
            break;
         }
      } while (skip_ && (1.20 <= ballF));
         ballF += parseFloat(`${2 + parseInt(`${ballF}`)}`);
      while ((4 + launchd.length) <= 1 || 5.26 <= (2.49 / (Math.max(8, ballF)))) {
         launchd += `${parseInt(`${giftT}`) & launchd.length}`;
         break;
      }
          let eighteeni = 4.0;
          let googlex = 2.0;
         ballF += parseFloat(`${parseInt(`${googlex}`)}`);
         eighteeni *= 2;
       let scheduleL: Map<any, any> = new Map([[String.fromCharCode(101,118,100,110,115,95,113,95,52,49,0),488], [String.fromCharCode(103,101,116,104,100,114,95,104,95,50,52,0),139]]);
      while ((parseInt(`${giftT}`) / (Math.max(scheduleL.size, 5))) <= 1) {
          let handleri: Map<any, any> = new Map([[String.fromCharCode(112,117,116,95,117,95,51,56,0),String.fromCharCode(104,95,55,51,95,114,101,109,98,0)], [String.fromCharCode(117,110,115,101,101,110,95,106,95,49,57,0),String.fromCharCode(114,116,112,102,98,95,120,95,50,52,0)], [String.fromCharCode(97,95,52,53,95,102,105,110,97,108,105,122,101,0),String.fromCharCode(103,101,116,112,101,101,114,97,100,100,114,95,109,95,54,55,0)]]);
         scheduleL = new Map([[`${handleri.size}`, parseInt(`${ballF}`)]]);
         break;
      }
         scheduleL.set(launchd, 2 & launchd.length);
          let sentryj: Array<any> = [252, 326, 977];
         ballF += parseFloat(`${parseInt(`${giftT}`) - scheduleL.size}`);
         sentryj = [sentryj.length * 2];
          let countryI: Array<any> = [String.fromCharCode(110,100,101,120,95,106,95,51,0), String.fromCharCode(108,95,55,48,95,117,110,114,101,108,105,97,98,108,101,0), String.fromCharCode(110,95,49,51,95,101,109,101,114,103,101,110,99,121,0)];
          let becomex = 2.0;
          let assistw = 3.0;
         giftT -= 3 + countryI.length;
         countryI.push(parseInt(`${assistw}`) % (Math.max(parseInt(`${becomex}`), 8)));
         becomex += 1;
         assistw *= parseFloat(`${1}`);
      typess = new Map([[`${loginH.length}`, reminderF.length]]);
      forwardw += floatingI.length;
   let sidel = commentc == String.fromCharCode(107,50,48,100,115,52,0);
   do {
      commentc += `${typess.size / (Math.max(2, 7))}`;
      if (sidel) {
         break;
      }
   } while ((commentc.length == 1) && sidel);
       let helperk = String.fromCharCode(100,95,57,48,95,103,101,116,110,97,109,101,105,110,102,111,0);
      for (let x = 0; x < 1; x++) {
          let whistleD = String.fromCharCode(114,101,102,101,114,114,97,108,95,101,95,51,52,0);
          let matchF = true;
          let light7 = String.fromCharCode(103,95,53,55,95,115,117,98,114,97,110,103,101,0);
          let headermj = 0;
          let foundn = 3.0;
         helperk = `${(whistleD == String.fromCharCode(74,0) ? parseInt(`${foundn}`) : whistleD.length)}`;
         matchF = light7.length <= 64;
         light7 += `${((matchF ? 2 : 1) | 2)}`;
         headermj ^= light7.length;
         foundn += (String.fromCharCode(52,0) == light7 ? light7.length : headermj);
      }
          let bodanw = String.fromCharCode(115,101,108,101,99,116,105,111,110,95,106,95,55,48,0);
          let viewss = 4.0;
          let currentO = 2.0;
         helperk = `${bodanw.length}`;
         bodanw = "1";
         viewss -= parseInt(`${currentO}`);
      let dice_ = String.fromCharCode(102,114,98,98,108,120,0) == helperk;
      do {
         helperk = `${helperk.length}`;
         if (dice_) {
            break;
         }
      } while ((helperk.length <= 1) && dice_);
      penalty6 -= lesso;
       let catalogY: Array<any> = [45, 678];
       let paginationy = 0.0;
          let ajaxV = String.fromCharCode(101,95,55,57,95,115,113,108,105,116,101,115,101,115,115,105,111,110,0);
          let sharedm = 5.0;
          let description_mpq = false;
         catalogY = [((description_mpq ? 1 : 1) / (Math.max(2, parseInt(`${sharedm}`))))];
         ajaxV += `${ajaxV.length >> (Math.min(4, ajaxV.length))}`;
         sharedm /= Math.max((ajaxV == String.fromCharCode(85,0) ? ajaxV.length : ajaxV.length), 2);
      for (let f = 0; f < 3; f++) {
         paginationy *= parseFloat(`${catalogY.length - 2}`);
      }
         paginationy -= parseFloat(`${catalogY.length}`);
      for (let v = 0; v < 3; v++) {
         catalogY = [parseInt(`${paginationy}`) ^ 2];
      }
         paginationy *= parseFloat(`${catalogY.length}`);
          let downloady = 2.0;
          let homen = String.fromCharCode(98,97,110,100,119,105,100,116,104,95,54,95,51,52,0);
          let redirectY = String.fromCharCode(114,101,109,111,118,97,108,95,121,95,55,53,0);
         paginationy += parseFloat(`${parseInt(`${downloady}`) >> (Math.min(Math.abs(3), 5))}`);
         downloady -= parseFloat(`${redirectY.length & homen.length}`);
         homen += `${homen.length}`;
         redirectY = `${redirectY.length ^ homen.length}`;
      singlec = `${typess.size - lesso}`;
   let penaltyO = k_imageO ? !k_imageO : k_imageO;
   do {
      k_imageO = typess.get(`${penalty6}`) == null;
      if (penaltyO) {
         break;
      }
   } while (penaltyO && (2 > (2 + lesso)));
      lesso <<= Math.min(4, parseInt(`${Math.abs(((k_imageO ? 5 : 5) / (Math.max(floatingI.length, 9))))}`));
      forwardw -= 2 / (Math.max(3, loginH.length));
    

      commentc = `${(String.fromCharCode(56,0) == singlec ? (k_imageO ? 3 : 5) : singlec.length)}`;
      reminderF += `${3 << (Math.min(Math.abs(parseInt(`${penalty6}`)), 2))}`;
   while ((3 | loginH.length) <= 1 || (loginH.length | 3) <= 5) {
      singlec = `${lesso + 1}`;
      break;
   }
   if (5 >= (typess.size << (Math.min(Math.abs(3), 2))) || 2 >= (3 << (Math.min(2, commentc.length)))) {
       let typing_ = 1.0;
       let contextw: Array<any> = [584, 8];
      let guideU = typing_ <= 5968786.0;
      do {
         typing_ /= Math.max(2, parseInt(`${typing_}`));
         if (guideU) {
            break;
         }
      } while (guideU && (parseInt(`${typing_}`) >= contextw.length));
         typing_ *= contextw.length >> (Math.min(2, Math.abs(parseInt(`${typing_}`))));
       let regengG = String.fromCharCode(103,101,111,112,111,108,121,95,55,95,57,51,0);
       let catagoryz = String.fromCharCode(99,97,108,99,117,97,108,116,101,95,99,95,52,51,0);
          let umeng4 = 4.0;
          let update_hX = 1.0;
         regengG = "1";
         umeng4 /= Math.max(parseInt(`${update_hX}`), 4);
      if ((2 >> (Math.min(5, contextw.length))) <= 4) {
         typing_ -= contextw.length | regengG.length;
      }
      if (catagoryz.includes(`${contextw.length}`)) {
          let interneta = String.fromCharCode(122,95,54,54,95,112,111,115,116,101,114,0);
          let grayW = 4;
          let heart7 = 4.0;
          let schedulex = false;
         contextw = [1];
         interneta += `${interneta.length ^ parseInt(`${heart7}`)}`;
         grayW ^= parseInt(`${heart7}`) ^ interneta.length;
         schedulex = String.fromCharCode(109,0) == interneta;
      }
      commentc = `${loginH.length}`;
   }
   let changeG = lesso >= 5225476;
   do {
       let commentJ = String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,95,101,95,56,55,0);
       let dropdownU = String.fromCharCode(112,114,105,109,97,114,105,108,121,95,100,95,52,53,0);
       let infoz = 2.0;
      if (commentJ.length > 1) {
         commentJ = `${dropdownU.length}`;
      }
      if (commentJ == String.fromCharCode(84,0)) {
          let constantsa = false;
         dropdownU += `${dropdownU.length - commentJ.length}`;
         constantsa = (constantsa ? !constantsa : constantsa);
      }
      for (let b = 0; b < 1; b++) {
          let leaguea = String.fromCharCode(99,95,51,95,118,97,114,105,110,116,0);
          let vietnamf = String.fromCharCode(121,95,57,54,95,99,111,110,116,114,97,99,116,115,0);
          let regenga = String.fromCharCode(120,95,53,57,95,116,114,101,101,0);
          let smallT = String.fromCharCode(105,110,116,114,97,120,104,117,102,95,122,95,51,50,0);
          let schedulee: Array<any> = [533, 20];
         dropdownU = "2";
         leaguea = `${regenga.length}`;
         vietnamf = "3";
         regenga = `${leaguea.length - smallT.length}`;
         smallT += "1";
         schedulee = [(String.fromCharCode(122,0) == vietnamf ? vietnamf.length : schedulee.length)];
      }
         dropdownU += `${1 & dropdownU.length}`;
      while (dropdownU.includes(`${infoz}`)) {
         infoz /= Math.max(parseFloat(`${1 % (Math.max(8, commentJ.length))}`), 5);
         break;
      }
      while (3 <= (parseInt(`${infoz}`) / (Math.max(3, commentJ.length)))) {
         commentJ += `${dropdownU.length ^ commentJ.length}`;
         break;
      }
      let progressq = commentJ.length <= 7858833;
      do {
         commentJ = `${parseInt(`${infoz}`) * 2}`;
         if (progressq) {
            break;
         }
      } while (progressq && (2.34 >= (infoz + parseFloat(`${commentJ.length}`))));
         dropdownU = "3";
      for (let l = 0; l < 2; l++) {
         dropdownU += `${parseInt(`${infoz}`) / (Math.max(1, 1))}`;
      }
      lesso |= 1;
      if (changeG) {
         break;
      }
   } while (changeG && ((2 | lesso) < 2 || (lesso - parseInt(`${forwardw}`)) < 2));
       let orangeq = String.fromCharCode(97,98,115,101,105,108,95,103,95,51,48,0);
         orangeq = `${orangeq.length}`;
          let i_imageL = true;
          let moon_ = 1.0;
         orangeq += `${parseInt(`${moon_}`) - 1}`;
         i_imageL = (!i_imageL ? i_imageL : i_imageL);
         moon_ /= Math.max(4, (parseFloat(`${(i_imageL ? 2 : 4)}`)));
          let muted1: Map<any, any> = new Map([[String.fromCharCode(120,95,49,48,95,99,111,110,115,117,109,97,98,108,101,0),String.fromCharCode(98,95,52,95,98,101,105,110,103,0)], [String.fromCharCode(114,101,115,116,97,107,101,95,109,95,53,51,0),String.fromCharCode(108,97,121,101,114,105,110,103,95,100,95,48,0)], [String.fromCharCode(119,111,114,107,108,111,97,100,95,103,95,51,0),String.fromCharCode(109,97,110,97,103,101,109,101,110,116,95,121,95,49,52,0)]]);
          let countdownc: Map<any, any> = new Map([[String.fromCharCode(118,101,114,98,97,116,105,109,95,111,95,53,55,0),847], [String.fromCharCode(111,116,111,102,95,104,95,52,49,0),131], [String.fromCharCode(99,111,111,107,95,52,95,53,50,0),570]]);
          let moviesr: Array<any> = [691, 81];
         orangeq = `${countdownc.size}`;
         muted1 = new Map([[`${muted1.size}`, moviesr.length ^ muted1.size]]);
         countdownc = new Map([[`${muted1.size}`, muted1.size]]);
         moviesr.push(muted1.size % 1);
      lesso |= 3;
   let pagec = 8622240 >= reminderF.length;
   do {
       let assistA = String.fromCharCode(99,111,97,114,115,101,95,110,95,54,50,0);
      let overQ = assistA == String.fromCharCode(107,99,101,106,115,98,102,48,0);
      do {
         assistA = `${assistA.length - assistA.length}`;
         if (overQ) {
            break;
         }
      } while (overQ && (assistA.endsWith(assistA)));
          let readv: Map<any, any> = new Map([[String.fromCharCode(119,105,100,101,115,99,114,101,101,110,95,97,95,56,49,0),String.fromCharCode(121,95,54,95,112,101,114,102,0)], [String.fromCharCode(115,97,102,101,95,109,95,50,52,0),String.fromCharCode(105,95,53,50,95,99,111,109,112,0)]]);
         assistA += `${readv.size ^ assistA.length}`;
         assistA = `${assistA.length + 2}`;
      reminderF += "3";
      if (pagec) {
         break;
      }
   } while (pagec && (1 > reminderF.length));
   for (let r = 0; r < 3; r++) {
      short_ytO = typess.size >= 69 && !short_ytO;
   }
      penalty6 -= singlec.length;
   while (5 > lesso) {
       let emojil = true;
       let cornerP = String.fromCharCode(116,105,109,101,111,117,116,115,95,52,95,57,0);
      for (let p = 0; p < 3; p++) {
         cornerP += `${((emojil ? 1 : 3) / 1)}`;
      }
      let volumev = emojil ? !emojil : emojil;
      do {
         emojil = !emojil;
         if (volumev) {
            break;
         }
      } while (volumev && (!cornerP.endsWith(`${emojil}`)));
       let hongkongP: Map<any, any> = new Map([[String.fromCharCode(115,95,54,57,95,112,114,101,102,101,116,99,104,105,110,103,0),true ], [String.fromCharCode(102,95,55,57,95,115,116,114,105,110,103,0),true ], [String.fromCharCode(115,111,102,116,119,97,114,101,95,98,95,51,52,0),true ]]);
         cornerP += `${(cornerP == String.fromCharCode(99,0) ? (emojil ? 2 : 5) : cornerP.length)}`;
      while (!emojil && cornerP.length <= 3) {
         cornerP += "1";
         break;
      }
      if (cornerP.length == 1) {
          let middlewaref = 4.0;
          let movies7 = String.fromCharCode(115,99,114,101,101,110,99,97,115,116,95,48,95,55,56,0);
          let sort8 = String.fromCharCode(115,95,56,49,95,112,114,101,100,105,99,116,111,114,115,98,0);
          let playlistC = 0;
         cornerP = `${hongkongP.size}`;
         middlewaref /= Math.max(1, parseFloat(`${sort8.length}`));
         movies7 += `${movies7.length - parseInt(`${middlewaref}`)}`;
         sort8 += `${playlistC}`;
         playlistC >>= Math.min(Math.abs((String.fromCharCode(55,0) == movies7 ? movies7.length : parseInt(`${middlewaref}`))), 1);
      }
      lesso ^= parseInt(`${forwardw}`);
      break;
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
       let mappingA = 5.0;
    let private_mgd = String.fromCharCode(100,95,55,48,95,103,101,116,108,98,108,111,99,107,105,110,99,0);
    let playI: Array<any> = [648, 276];
    let condensedl = 3.0;
    let greenX = String.fromCharCode(101,108,105,115,105,111,110,95,108,95,49,54,0);
    let modalQ = String.fromCharCode(98,95,54,49,95,102,114,97,103,0);
    let teamS = 2;
    let paginationC = false;
    let texto = String.fromCharCode(121,95,49,54,95,116,104,114,111,119,105,110,103,0);
   if (1 <= (modalQ.length ^ 1) || (modalQ.length ^ 1) <= 4) {
      playI = [(modalQ == String.fromCharCode(113,0) ? modalQ.length : teamS)];
   }
   if (5.77 < (condensedl / 5.75)) {
      playI = [3 * greenX.length];
   }
   let specN = 6525248 >= private_mgd.length;
   do {
       let sportsF = String.fromCharCode(98,108,111,111,109,95,97,95,49,53,0);
      if (!sportsF.startsWith(sportsF)) {
          let heartb: Array<any> = [String.fromCharCode(112,95,54,49,95,108,97,117,110,99,104,0), String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,106,95,49,56,0), String.fromCharCode(105,95,57,53,95,99,111,109,112,111,115,101,0)];
          let specC = String.fromCharCode(101,95,52,49,95,100,101,112,114,101,99,97,116,105,111,110,0);
          let incident4 = String.fromCharCode(113,95,51,49,95,99,97,110,116,111,112,101,110,0);
          let z_viewD = String.fromCharCode(101,116,105,109,101,95,103,95,55,0);
         sportsF += `${(incident4 == String.fromCharCode(89,0) ? z_viewD.length : incident4.length)}`;
         heartb.push(heartb.length % (Math.max(3, 3)));
         specC = `${1 << (Math.min(5, heartb.length))}`;
         z_viewD = `${3 | heartb.length}`;
      }
       let xvodH = String.fromCharCode(114,95,52,50,95,101,120,116,114,101,109,101,0);
         xvodH += `${(String.fromCharCode(76,0) == xvodH ? xvodH.length : sportsF.length)}`;
      private_mgd += "3";
      if (specN) {
         break;
      }
   } while (specN && (modalQ.length > 5));
   let changeK = 5674408.0 <= condensedl;
   do {
      condensedl *= parseFloat(`${greenX.length + teamS}`);
      if (changeK) {
         break;
      }
   } while (changeK && ((condensedl / (Math.max(parseFloat(`${greenX.length}`), 4))) > 2.25 && 2.91 > (condensedl / 2.25)));
       let matches5 = 0.0;
       let scoreE = String.fromCharCode(111,109,112,111,115,101,95,50,95,55,48,0);
       let volumeH = String.fromCharCode(105,110,116,101,114,120,95,108,95,49,50,0);
      if (4.25 == matches5) {
          let routerp = String.fromCharCode(107,95,57,54,95,117,110,99,111,114,114,0);
          let update_flm = 2;
         matches5 /= Math.max(3, (parseFloat(`${routerp == String.fromCharCode(80,0) ? update_flm : routerp.length}`)));
      }
      if ((1 * scoreE.length) >= 4) {
         scoreE = `${(scoreE == String.fromCharCode(108,0) ? volumeH.length : scoreE.length)}`;
      }
      while (3 <= (2 % (Math.max(2, volumeH.length))) || 1 <= (volumeH.length & 2)) {
         matches5 -= parseFloat(`${parseInt(`${matches5}`)}`);
         break;
      }
          let sheetp = 5.0;
          let page1 = String.fromCharCode(99,97,108,108,105,115,116,111,95,117,95,54,53,0);
         scoreE += `${parseInt(`${sheetp}`)}`;
         sheetp += page1.length ^ page1.length;
      if (!scoreE.startsWith(volumeH)) {
         volumeH = `${2 << (Math.min(5, scoreE.length))}`;
      }
      if (volumeH.startsWith(`${matches5}`)) {
          let pausec: Array<any> = [91, 411, 567];
          let helper_ = String.fromCharCode(115,111,117,110,95,113,95,53,51,0);
          let frame_olF = 4.0;
          let themep = String.fromCharCode(99,111,110,102,95,56,95,50,49,0);
          let emptyN = false;
         matches5 /= Math.max(parseFloat(`${2}`), 4);
         pausec.push(helper_.length);
         helper_ = `${((emptyN ? 4 : 1) + pausec.length)}`;
         frame_olF += (parseFloat(`${1 / (Math.max(6, (emptyN ? 2 : 4)))}`));
         themep = "2";
      }
       let searchr = String.fromCharCode(108,101,97,115,101,95,110,95,51,52,0);
      for (let g = 0; g < 1; g++) {
         scoreE += `${volumeH.length >> (Math.min(5, searchr.length))}`;
      }
          let interstitialQ = 5.0;
         scoreE = `${parseInt(`${matches5}`) | 3}`;
         interstitialQ += parseFloat(`${parseInt(`${interstitialQ}`)}`);
      playI = [(scoreE == String.fromCharCode(79,0) ? parseInt(`${matches5}`) : scoreE.length)];
      playI = [1];
      greenX += `${greenX.length ^ parseInt(`${condensedl}`)}`;
   let commonH = 8908838 <= playI.length;
   do {
       let window_9_ = 4;
       let stepp: Map<any, any> = new Map([[String.fromCharCode(108,97,114,112,111,108,121,95,55,95,54,52,0),467], [String.fromCharCode(122,95,54,55,95,116,114,97,110,115,109,105,116,0),581], [String.fromCharCode(111,115,116,114,101,97,109,95,104,95,52,54,0),746]]);
       let settingsH = false;
         settingsH = 18 == window_9_;
      let o_lockn = settingsH ? !settingsH : settingsH;
      do {
         settingsH = stepp.size <= 70;
         if (o_lockn) {
            break;
         }
      } while (((1 * stepp.size) <= 3 && settingsH) && o_lockn);
       let friendsl = String.fromCharCode(118,95,57,95,115,117,102,102,105,120,0);
       let pingD = String.fromCharCode(122,95,49,52,95,116,114,101,101,119,114,105,116,101,114,0);
      if (5 > (friendsl.length * window_9_) && 4 > (5 * friendsl.length)) {
          let cross5 = false;
          let privacyv = 0.0;
          let smallP = 1.0;
          let streamingG = String.fromCharCode(109,105,109,101,95,55,95,57,51,0);
          let ballp = 4.0;
         window_9_ += 1;
         cross5 = 65 < streamingG.length;
         privacyv -= parseFloat(`${parseInt(`${smallP}`) ^ streamingG.length}`);
         smallP += parseFloat(`${2 - parseInt(`${smallP}`)}`);
         ballp /= Math.max(parseFloat(`${parseInt(`${ballp}`)}`), 1);
      }
       let loadingZ = String.fromCharCode(117,95,54,55,95,108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,0);
       let away1 = String.fromCharCode(108,111,103,103,101,100,95,101,95,52,49,0);
         settingsH = pingD.length < friendsl.length;
         window_9_ >>= Math.min(3, away1.length);
      if ((stepp.size ^ 1) <= 5) {
         window_9_ ^= 1 + stepp.size;
      }
         window_9_ %= Math.max(friendsl.length % (Math.max(pingD.length, 10)), 2);
      playI.push(teamS + 1);
      if (commonH) {
         break;
      }
   } while (commonH && (5.53 == (parseFloat(`${playI.length}`) - condensedl)));
      teamS ^= 1 - parseInt(`${mappingA}`);
      modalQ += `${private_mgd.length / (Math.max(3, 2))}`;
       let expandD: Map<any, any> = new Map([[String.fromCharCode(119,95,52,48,95,105,110,118,97,108,105,100,97,116,105,111,110,0),false ], [String.fromCharCode(115,116,114,99,115,112,110,95,99,95,49,56,0),true ], [String.fromCharCode(115,117,98,115,97,109,112,108,101,95,120,95,54,57,0),false ]]);
       let buffer2 = 4;
       let applel = 2;
       let analyticsq = 4;
         applel ^= analyticsq << (Math.min(Math.abs(1), 5));
      while ((analyticsq - expandD.size) <= 2 && 2 <= (expandD.size - analyticsq)) {
         expandD.set(`${analyticsq}`, expandD.size);
         break;
      }
         analyticsq += buffer2;
       let trashZ = true;
       let chatm = true;
         trashZ = 25 <= analyticsq || chatm;
      teamS *= 1;
   for (let e = 0; e < 3; e++) {
      greenX = "1";
   }
      condensedl += (parseFloat(`${String.fromCharCode(67,0) == modalQ ? modalQ.length : greenX.length}`));
       let goalm = String.fromCharCode(98,108,111,99,107,99,104,97,105,110,115,95,57,95,54,50,0);
       let j_positionQ = String.fromCharCode(97,116,114,105,109,95,101,95,51,50,0);
       let gmailT = String.fromCharCode(110,112,112,115,99,97,108,101,95,104,95,49,54,0);
      if (goalm != String.fromCharCode(115,0)) {
         gmailT += `${j_positionQ.length}`;
      }
         goalm += `${j_positionQ.length * 1}`;
         j_positionQ += "2";
       let actionX = 4.0;
       let agreementI = 1.0;
      for (let r = 0; r < 1; r++) {
         actionX -= parseFloat(`${j_positionQ.length >> (Math.min(Math.abs(1), 4))}`);
      }
      condensedl /= Math.max(3, parseFloat(`${2}`));
      condensedl /= Math.max((parseFloat(`${greenX == String.fromCharCode(81,0) ? greenX.length : parseInt(`${condensedl}`)}`)), 4);
      playI = [3 << (Math.min(3, modalQ.length))];
   while (4 >= (parseInt(`${mappingA}`) * modalQ.length)) {
       let predictionS = false;
       let carouselO = true;
       let vietnamG = String.fromCharCode(109,111,111,118,95,122,95,49,54,0);
       let field0 = String.fromCharCode(100,105,114,110,97,109,101,95,50,95,52,56,0);
         carouselO = !field0.startsWith(`${carouselO}`);
      while (5 < vietnamG.length) {
          let redirectW = true;
          let regengw = String.fromCharCode(107,95,56,57,95,116,101,109,112,111,114,97,114,105,108,121,0);
         vietnamG += "3";
         redirectW = 66 == regengw.length;
         regengw += `${regengw.length}`;
         break;
      }
         predictionS = predictionS || field0.length == 87;
         vietnamG += `${(1 - (carouselO ? 1 : 4))}`;
      for (let h = 0; h < 2; h++) {
          let customo = String.fromCharCode(109,95,53,50,95,115,101,110,116,0);
          let selectedr: Array<any> = [159, 647];
         carouselO = !customo.startsWith(`${carouselO}`);
         customo += `${selectedr.length}`;
         selectedr.push(2 + selectedr.length);
      }
         field0 += `${field0.length + 2}`;
       let pressureR = String.fromCharCode(98,111,120,101,100,95,111,95,50,54,0);
       let productw = String.fromCharCode(98,95,54,53,95,99,111,110,110,101,99,116,105,111,110,99,98,0);
      for (let s = 0; s < 1; s++) {
         carouselO = !vietnamG.includes(`${predictionS}`);
      }
          let unread2 = String.fromCharCode(122,95,56,48,95,115,116,97,114,116,114,101,101,0);
          let castS = 5.0;
         pressureR += `${(productw == String.fromCharCode(101,0) ? productw.length : parseInt(`${castS}`))}`;
         unread2 = `${unread2.length}`;
         castS -= unread2.length << (Math.min(unread2.length, 4));
         pressureR += `${3 << (Math.min(5, pressureR.length))}`;
         field0 = `${pressureR.length}`;
         predictionS = (pressureR.length / (Math.max(2, vietnamG.length))) >= 100;
      mappingA *= 3 - field0.length;
      break;
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
       let flyerp = true;
    let entryV: Array<any> = [744, 467];
    let gesturer = String.fromCharCode(108,95,53,56,0);
    let sell6 = String.fromCharCode(118,95,50,95,109,107,118,114,101,97,100,101,114,0);
    let recommendationZ = String.fromCharCode(99,111,110,99,104,95,119,95,49,55,0);
    let eventg = String.fromCharCode(112,97,114,105,116,121,95,101,95,54,53,0);
    let paginationw = 0.0;
    let refresh1: Array<any> = [621, 1000, 860];
    let grayH = String.fromCharCode(119,95,55,55,95,109,97,116,104,101,115,0);
    let areao = true;
    let downloading7 = String.fromCharCode(115,97,102,97,114,121,95,98,95,56,53,0);
    let commonb = 5.0;
    let modelQ: Array<any> = [String.fromCharCode(112,114,101,115,101,108,101,99,116,95,114,95,56,51,0), String.fromCharCode(120,95,50,57,95,108,109,108,109,0)];
      eventg = `${(grayH == String.fromCharCode(85,0) ? refresh1.length : grayH.length)}`;
       let transferd = String.fromCharCode(107,95,53,48,95,103,108,121,112,104,0);
       let update_wt5 = false;
      while (5 > transferd.length) {
          let placementM: Map<any, any> = new Map([[String.fromCharCode(98,95,57,50,95,97,110,105,109,97,116,105,111,110,115,0),String.fromCharCode(114,101,118,101,97,108,101,100,95,115,95,55,55,0)], [String.fromCharCode(100,105,118,105,100,101,100,95,120,95,55,54,0),String.fromCharCode(100,101,112,97,114,116,109,101,110,116,95,101,95,53,55,0)], [String.fromCharCode(102,111,114,109,97,116,116,105,110,103,95,107,95,56,52,0),String.fromCharCode(104,95,52,50,95,97,114,99,104,105,118,101,0)]]);
          let firebaseJ = 4.0;
         update_wt5 = placementM.size <= parseInt(`${firebaseJ}`);
         break;
      }
      if (transferd.startsWith(`${update_wt5}`)) {
         update_wt5 = !update_wt5 && transferd.length <= 15;
      }
      for (let q = 0; q < 3; q++) {
         transferd = `${((update_wt5 ? 4 : 1) >> (Math.min(transferd.length, 5)))}`;
      }
          let reducerD = 4.0;
          let searchj = 3.0;
          let grayA = 3.0;
         transferd = `${((update_wt5 ? 5 : 4) >> (Math.min(Math.abs(parseInt(`${reducerD}`)), 4)))}`;
         reducerD /= Math.max(parseInt(`${searchj}`), 1);
         grayA /= Math.max(4, parseFloat(`${parseInt(`${grayA}`) * 3}`));
         update_wt5 = transferd.length >= 22;
      while (update_wt5) {
         update_wt5 = transferd.length <= 75;
         break;
      }
      flyerp = (recommendationZ.length + sell6.length) > 5;
   for (let e = 0; e < 1; e++) {
      recommendationZ = `${gesturer.length % (Math.max(1, grayH.length))}`;
   }
   if (!grayH.startsWith(`${gesturer.length}`)) {
      gesturer += `${grayH.length ^ 3}`;
   }
   if (4 <= refresh1.length) {
       let b_playerK = true;
       let sella = 4.0;
       let plashT: Map<any, any> = new Map([[String.fromCharCode(120,95,55,49,95,110,101,97,114,101,114,0),true ], [String.fromCharCode(109,117,108,116,105,95,105,95,51,57,0),true ], [String.fromCharCode(118,111,114,98,105,115,95,109,95,54,50,0),false ]]);
       let downL = String.fromCharCode(119,95,55,49,95,102,97,110,116,111,109,0);
       let sourceU: Array<any> = [String.fromCharCode(115,95,49,48,95,114,116,109,112,0), String.fromCharCode(99,104,111,105,99,101,95,54,95,55,56,0)];
      for (let r = 0; r < 1; r++) {
         sella *= parseFloat(`${downL.length / (Math.max(1, 9))}`);
      }
          let saveC = String.fromCharCode(115,95,57,95,112,114,101,115,99,97,108,105,110,103,0);
          let modityX = String.fromCharCode(99,104,101,98,121,115,104,101,118,95,54,95,53,53,0);
          let readV: Map<any, any> = new Map([[String.fromCharCode(121,95,51,54,95,102,108,105,112,112,101,100,0),String.fromCharCode(98,108,97,110,107,95,49,95,53,54,0)], [String.fromCharCode(114,101,97,100,113,95,50,95,51,49,0),String.fromCharCode(114,101,112,114,101,115,101,110,116,97,98,108,101,95,101,95,56,48,0)], [String.fromCharCode(109,95,53,50,95,114,101,99,111,118,101,114,121,0),String.fromCharCode(108,95,54,50,95,97,110,97,108,121,115,101,0)]]);
         b_playerK = !b_playerK || plashT.size == 92;
         saveC = `${saveC.length ^ readV.size}`;
         modityX += `${modityX.length}`;
         readV = new Map([[`${readV.size}`, modityX.length]]);
         plashT.set(downL, downL.length >> (Math.min(5, sourceU.length)));
          let types7: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,97,99,116,105,111,110,95,112,95,56,0),933], [String.fromCharCode(116,95,55,52,95,100,101,102,105,110,101,100,0),922], [String.fromCharCode(117,110,114,101,115,111,108,118,97,98,108,101,95,51,95,51,52,0),335]]);
          let roboto6 = String.fromCharCode(108,95,57,49,95,100,105,115,115,99,111,110,110,101,99,116,0);
         sourceU.push(((b_playerK ? 2 : 5) + sourceU.length));
         types7 = new Map([[`${types7.size}`, types7.size]]);
         roboto6 = `${roboto6.length * types7.size}`;
         sella /= Math.max((parseFloat(`${(b_playerK ? 4 : 1) + parseInt(`${sella}`)}`)), 5);
         b_playerK = (sella / (Math.max(parseFloat(`${sourceU.length}`), 9))) < 39.34;
          let tooltips5: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,105,103,117,114,97,116,111,114,95,48,95,51,57,0),false ], [String.fromCharCode(112,114,101,112,95,54,95,52,55,0),true ]]);
          let settingD = 0.0;
         plashT.set(`${sella}`, plashT.size & parseInt(`${sella}`));
         tooltips5 = new Map([[`${tooltips5.size}`, parseInt(`${settingD}`) + tooltips5.size]]);
         settingD /= Math.max(1, parseInt(`${settingD}`));
      while (plashT.get(`${sella}`) == null) {
         sella *= parseFloat(`${plashT.size | 1}`);
         break;
      }
      while (5 > (downL.length & 5) || (2.52 - sella) > 3.14) {
          let f_lockX: Array<any> = [String.fromCharCode(110,95,54,54,95,116,97,114,103,101,116,101,100,0), String.fromCharCode(99,95,55,54,95,117,110,99,111,114,114,0)];
          let configurej = String.fromCharCode(114,95,48,95,116,105,109,115,116,97,109,112,0);
         downL += `${plashT.size}`;
         f_lockX.push(f_lockX.length);
         configurej += `${(configurej == String.fromCharCode(105,0) ? f_lockX.length : configurej.length)}`;
         break;
      }
         plashT = new Map([[`${sourceU.length}`, downL.length]]);
          let c_countn = true;
          let store3 = 0;
         plashT.set(`${b_playerK}`, plashT.size + 1);
         c_countn = !c_countn;
         store3 -= 2;
      let backward3 = plashT.size >= 5266573;
      do {
         plashT = new Map([[`${sourceU.length}`, (sourceU.length >> (Math.min(2, Math.abs((b_playerK ? 1 : 5)))))]]);
         if (backward3) {
            break;
         }
      } while ((b_playerK) && backward3);
      while (3 == (4 + plashT.size)) {
         plashT = new Map([[`${sourceU.length}`, 1]]);
         break;
      }
         downL = "3";
          let confirmationm: Map<any, any> = new Map([[String.fromCharCode(103,95,50,50,95,102,105,110,100,97,115,111,99,0),String.fromCharCode(112,95,51,49,95,112,117,98,108,105,115,104,101,114,0)], [String.fromCharCode(109,95,57,52,95,100,105,115,115,105,109,0),String.fromCharCode(101,115,99,97,112,105,110,103,95,53,95,50,51,0)], [String.fromCharCode(99,108,111,99,107,95,110,95,55,52,0),String.fromCharCode(115,113,108,105,116,101,112,97,103,101,114,95,109,95,53,49,0)]]);
         downL = `${(String.fromCharCode(97,0) == downL ? downL.length : (b_playerK ? 1 : 5))}`;
         confirmationm = new Map([[`${confirmationm.size}`, confirmationm.size / (Math.max(6, confirmationm.size))]]);
      grayH = `${downL.length}`;
   }
      sell6 = `${2 ^ sell6.length}`;
      gesturer = `${(parseInt(`${paginationw}`) + (flyerp ? 3 : 5))}`;

    if (episodeRef.current) {

   if ((paginationw * refresh1.length) >= 2.78) {
       let incident5 = String.fromCharCode(115,116,114,101,97,109,105,100,95,54,95,52,50,0);
       let configurea = String.fromCharCode(111,95,54,48,95,115,111,100,101,97,108,108,111,99,0);
       let grey1 = String.fromCharCode(98,95,55,51,95,113,112,105,115,0);
       let helperL = String.fromCharCode(111,95,55,95,115,107,105,110,0);
       let filed1 = String.fromCharCode(115,117,98,109,105,116,95,98,95,49,55,0);
      for (let n = 0; n < 2; n++) {
          let moviesq = 5.0;
          let brightnessI: Array<any> = [273, 768, 255];
          let cornerT = String.fromCharCode(115,108,105,112,95,106,95,57,56,0);
          let navigationW = false;
         grey1 = `${grey1.length << (Math.min(filed1.length, 4))}`;
         moviesq *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${moviesq}`)), 2))}`);
         brightnessI.push((cornerT == String.fromCharCode(80,0) ? cornerT.length : parseInt(`${moviesq}`)));
         navigationW = cornerT.length > 27;
      }
          let pausen = String.fromCharCode(118,95,55,55,95,98,105,110,100,105,110,103,0);
          let private_t1r: Map<any, any> = new Map([[String.fromCharCode(122,95,49,51,95,102,105,110,97,108,105,122,101,114,0),519], [String.fromCharCode(99,117,114,114,101,110,116,108,121,95,120,95,49,56,0),266]]);
         filed1 = `${3 >> (Math.min(2, helperL.length))}`;
         pausen = "2";
         private_t1r = new Map([[`${private_t1r.size}`, pausen.length]]);
      for (let l = 0; l < 2; l++) {
         grey1 += `${3 & incident5.length}`;
      }
      let subs8 = configurea.length <= 6482900;
      do {
          let service3: Array<any> = [246, 592];
          let containerf = String.fromCharCode(120,95,55,55,95,116,120,104,97,115,104,0);
         configurea = "1";
         service3.push(containerf.length);
         containerf += "2";
         if (subs8) {
            break;
         }
      } while (subs8 && (!configurea.startsWith(incident5)));
      while (incident5.length < configurea.length) {
         incident5 = `${helperL.length >> (Math.min(grey1.length, 5))}`;
         break;
      }
      for (let p = 0; p < 1; p++) {
         filed1 += "3";
      }
      let applem = filed1 == String.fromCharCode(108,95,99,106,0);
      do {
         filed1 = `${(filed1 == String.fromCharCode(81,0) ? filed1.length : configurea.length)}`;
         if (applem) {
            break;
         }
      } while ((incident5 != String.fromCharCode(103,0)) && applem);
      if (helperL.includes(`${configurea.length}`)) {
          let castingM = 2.0;
          let screenM = String.fromCharCode(103,95,50,57,95,97,114,99,104,105,118,101,0);
         helperL = `${configurea.length | 3}`;
         castingM += parseFloat(`${2}`);
         screenM += `${screenM.length}`;
      }
      if (2 > filed1.length) {
         helperL += `${incident5.length}`;
      }
       let splashy: Array<any> = [277, 36, 394];
      let searchc = filed1 == String.fromCharCode(119,116,99,52,57,48,108,108,0);
      do {
          let h_center9 = String.fromCharCode(101,95,49,52,95,112,108,97,105,110,116,101,120,116,0);
          let moviesg = String.fromCharCode(97,95,49,52,95,114,103,98,121,117,118,0);
          let routerB = String.fromCharCode(100,97,114,107,95,55,95,54,56,0);
         filed1 = `${moviesg.length * 2}`;
         h_center9 += `${routerB.length | 1}`;
         moviesg += `${routerB.length}`;
         if (searchc) {
            break;
         }
      } while ((filed1.length >= helperL.length) && searchc);
         configurea += `${configurea.length}`;
      while (filed1 != helperL) {
         helperL = "2";
         break;
      }
         splashy.push(2);
      for (let v = 0; v < 3; v++) {
         splashy.push(configurea.length << (Math.min(Math.abs(3), 4)));
      }
      refresh1 = [sell6.length * 3];
   }
   if (parseInt(`${paginationw}`) <= eventg.length) {
       let progressO: Map<any, any> = new Map([[String.fromCharCode(115,95,57,51,95,118,98,114,105,0),60], [String.fromCharCode(113,95,53,52,95,102,114,97,103,109,101,110,116,0),50], [String.fromCharCode(114,97,110,95,98,95,55,52,0),803]]);
       let mathM = 3;
       let condensed_ = String.fromCharCode(104,113,112,101,108,95,99,95,54,56,0);
       let vignettes = 4.0;
       let control2 = 2;
         condensed_ += `${progressO.size}`;
      while ((control2 / (Math.max(10, vignettes))) == 3.99 || (vignettes / 3.99) == 2.14) {
         vignettes -= parseInt(`${vignettes}`) + control2;
         break;
      }
          let megaphoneq = String.fromCharCode(112,95,57,51,95,99,111,100,101,99,112,97,114,0);
          let moonl = String.fromCharCode(104,95,49,53,95,114,101,110,100,101,114,98,117,102,102,101,114,0);
          let n_player4 = String.fromCharCode(108,111,117,112,101,95,98,95,49,56,0);
         mathM &= moonl.length / (Math.max(megaphoneq.length, 4));
         megaphoneq = `${(String.fromCharCode(103,0) == n_player4 ? n_player4.length : n_player4.length)}`;
         moonl = `${n_player4.length}`;
         vignettes += 3;
         vignettes /= Math.max(5, mathM / 1);
         mathM <<= Math.min(Math.abs(3 + mathM), 5);
         condensed_ = `${parseInt(`${vignettes}`)}`;
      let saveY = vignettes <= 6878632.0;
      do {
          let memberv = String.fromCharCode(106,95,51,95,115,117,98,99,111,110,116,101,110,116,115,0);
          let projectt = 4.0;
         vignettes -= 3;
         memberv = "1";
         projectt *= parseFloat(`${memberv.length | 2}`);
         if (saveY) {
            break;
         }
      } while (saveY && (vignettes > control2));
      if ((control2 & 5) < 4 || (5 & control2) < 2) {
         control2 %= Math.max(progressO.size / 3, 2);
      }
      while ((mathM ^ condensed_.length) < 4 || 2 < (4 ^ condensed_.length)) {
         condensed_ += "3";
         break;
      }
         mathM <<= Math.min(1, Math.abs(mathM & condensed_.length));
      while (2 >= (1 << (Math.min(2, Math.abs(progressO.size)))) && (1 << (Math.min(2, Math.abs(control2)))) >= 3) {
          let membershipx = 4;
          let nterstitial1 = String.fromCharCode(114,101,100,117,99,101,100,95,116,95,57,0);
          let gemfileP = String.fromCharCode(111,112,116,103,114,111,117,112,95,55,95,55,49,0);
          let iconJ = 0;
         progressO = new Map([[gemfileP, gemfileP.length]]);
         membershipx /= Math.max(4, nterstitial1.length);
         nterstitial1 += `${(nterstitial1 == String.fromCharCode(102,0) ? nterstitial1.length : iconJ)}`;
         iconJ >>= Math.min(1, Math.abs(iconJ >> (Math.min(Math.abs(1), 4))));
         break;
      }
      for (let i = 0; i < 2; i++) {
         mathM >>= Math.min(2, Math.abs(progressO.size & 3));
      }
         mathM >>= Math.min(Math.abs(progressO.size), 3);
      for (let a = 0; a < 2; a++) {
          let bingd = String.fromCharCode(114,95,53,56,95,103,114,97,112,104,0);
         control2 &= mathM;
         bingd += `${bingd.length ^ bingd.length}`;
      }
      eventg += `${((areao ? 4 : 3) - 3)}`;
   }
   let datag = 7641787 <= downloading7.length;
   do {
       let bufferu: Map<any, any> = new Map([[String.fromCharCode(109,101,110,116,105,111,110,95,108,95,49,51,0),String.fromCharCode(103,95,50,53,95,100,101,109,117,120,101,114,115,0)], [String.fromCharCode(122,95,55,57,95,101,109,98,101,100,100,101,100,0),String.fromCharCode(101,95,50,48,95,117,112,108,105,110,107,0)]]);
       let awayU = 4;
      if (!Array.from(bufferu.keys()).includes(`${awayU}`)) {
         bufferu = new Map([[`${bufferu.size}`, 1]]);
      }
      if (1 <= (awayU / (Math.max(bufferu.size, 9))) || (awayU / (Math.max(bufferu.size, 3))) <= 1) {
         awayU <<= Math.min(5, Math.abs(3 * bufferu.size));
      }
         awayU *= bufferu.size;
         bufferu.set(`${awayU}`, awayU * 2);
      for (let t = 0; t < 3; t++) {
          let logoa: Map<any, any> = new Map([[String.fromCharCode(114,101,100,115,112,97,114,107,95,115,95,51,51,0),false ], [String.fromCharCode(108,111,99,97,108,105,116,121,95,119,95,49,55,0),false ], [String.fromCharCode(105,116,111,97,95,52,95,55,54,0),true ]]);
          let guideu = String.fromCharCode(97,95,50,51,95,110,101,101,100,115,0);
          let minivods = String.fromCharCode(97,95,50,54,95,109,98,115,101,103,109,101,110,116,0);
          let teamM = 0.0;
          let switch_mfp = String.fromCharCode(122,95,55,48,95,113,117,97,108,105,102,121,0);
         bufferu.set(guideu, guideu.length);
         logoa.set(`${switch_mfp}`, (switch_mfp == String.fromCharCode(103,0) ? switch_mfp.length : logoa.size));
         minivods += `${parseInt(`${teamM}`) | minivods.length}`;
         teamM /= Math.max(2, 5);
      }
      let sport5 = bufferu.size <= 9013661;
      do {
         bufferu = new Map([[`${bufferu.size}`, awayU]]);
         if (sport5) {
            break;
         }
      } while (((bufferu.size >> (Math.min(Math.abs(1), 4))) <= 5 || 1 <= (awayU >> (Math.min(Math.abs(bufferu.size), 3)))) && sport5);
      downloading7 += "2";
      if (datag) {
         break;
      }
   } while ((downloading7.includes(`${refresh1.length}`)) && datag);
      sell6 += `${(recommendationZ == String.fromCharCode(82,0) ? recommendationZ.length : (flyerp ? 2 : 4))}`;
   while (1.85 > paginationw) {
      eventg += `${((flyerp ? 1 : 2))}`;
      break;
   }
   for (let h = 0; h < 3; h++) {
       let controls1 = 1;
       let animation0 = false;
       let eighteenU = true;
       let streamingt = true;
       let confirmationv = String.fromCharCode(115,105,122,101,98,105,116,114,97,116,101,95,98,95,49,55,0);
      if (!streamingt) {
          let mutedO = String.fromCharCode(117,118,97,114,105,110,116,95,102,95,52,55,0);
          let leftE = String.fromCharCode(109,95,53,55,95,108,111,116,116,105,101,112,97,114,115,101,114,0);
         streamingt = (((eighteenU ? 44 : confirmationv.length) / (Math.max(confirmationv.length, 8))) == 44);
         mutedO = `${leftE.length}`;
         leftE = `${mutedO.length % (Math.max(8, leftE.length))}`;
      }
      if (confirmationv.endsWith(`${streamingt}`)) {
         streamingt = (((!streamingt ? confirmationv.length : 39) - confirmationv.length) == 39);
      }
      if (!eighteenU && 1 == (5 | controls1)) {
         controls1 |= controls1 + 1;
      }
      for (let x = 0; x < 2; x++) {
         animation0 = confirmationv.length > 92;
      }
      for (let f = 0; f < 1; f++) {
         confirmationv = `${confirmationv.length / (Math.max(3, 1))}`;
      }
          let submit3 = String.fromCharCode(115,101,114,105,97,108,105,115,101,100,95,117,95,49,54,0);
          let main_r9 = String.fromCharCode(107,95,53,57,95,103,101,116,97,117,120,118,97,108,0);
          let injuryY = 1.0;
         confirmationv += `${(String.fromCharCode(54,0) == confirmationv ? confirmationv.length : controls1)}`;
         submit3 = `${2 >> (Math.min(4, submit3.length))}`;
         main_r9 += `${(submit3 == String.fromCharCode(50,0) ? parseInt(`${injuryY}`) : submit3.length)}`;
         injuryY += parseFloat(`${3}`);
      if (!animation0) {
         controls1 *= 3;
      }
      if (!animation0) {
         animation0 = (streamingt ? animation0 : !streamingt);
      }
      let dialogd = 6997312 <= confirmationv.length;
      do {
          let statisticsQ = true;
          let completeL: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,99,101,105,118,101,114,115,95,52,95,52,51,0),false ], [String.fromCharCode(108,95,54,48,95,103,117,105,100,101,0),true ], [String.fromCharCode(105,112,97,100,100,95,113,95,56,53,0),false ]]);
          let moduleI = false;
          let closei: Array<any> = [String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,95,52,95,52,55,0), String.fromCharCode(98,103,114,97,95,112,95,53,57,0), String.fromCharCode(105,110,99,114,101,109,101,110,116,101,100,95,108,95,53,55,0)];
          let analyticO = String.fromCharCode(105,95,54,56,95,115,112,105,110,0);
         confirmationv = `${((moduleI ? 5 : 3) ^ (statisticsQ ? 2 : 3))}`;
         statisticsQ = completeL.size == 50;
         completeL = new Map([[`${completeL.size}`, completeL.size]]);
         moduleI = 90 <= closei.length || analyticO.length <= 90;
         closei.push(closei.length ^ 2);
         analyticO += `${completeL.size}`;
         if (dialogd) {
            break;
         }
      } while ((4 >= confirmationv.length) && dialogd);
         eighteenU = (!animation0 ? !eighteenU : !animation0);
       let combinedN = true;
      let whatsappM = combinedN ? !combinedN : combinedN;
      do {
         combinedN = !animation0;
         if (whatsappM) {
            break;
         }
      } while (whatsappM && (animation0));
      for (let f = 0; f < 3; f++) {
          let refresh0 = 3;
          let carouselN: Array<any> = [115, 454, 129];
          let aboutT = String.fromCharCode(100,118,100,115,117,98,95,110,95,53,49,0);
         confirmationv = `${aboutT.length}`;
         refresh0 %= Math.max(2, 1);
         carouselN = [2];
         aboutT = `${carouselN.length & 3}`;
      }
       let change2 = String.fromCharCode(122,95,49,57,95,121,117,118,97,121,117,118,108,101,0);
       let canvasZ = String.fromCharCode(103,95,51,51,95,108,97,121,101,114,99,111,110,116,101,120,116,0);
         animation0 = combinedN || controls1 < 87;
      downloading7 += `${(1 | (flyerp ? 2 : 5))}`;
   }
      eventg = `${entryV.length << (Math.min(Math.abs(3), 4))}`;
      episodeRef.current.scrollToIndex({
        index: currentEpisode,
        animated: true,
      });
    }
  };

  const handleModalClose = useCallback(() => {
       let dragO: Array<any> = [984, 172];
    let backR = 1.0;
    let internetp = false;
    let layout2 = 4;
    let update_5y = 2;
    let backwardG = String.fromCharCode(113,95,49,48,48,95,109,105,100,101,113,117,97,108,105,122,101,114,0);
    let yellowy = false;
    let stats0 = 1;
    let stepn = true;
    let sharedN = 2.0;
    let clearp = String.fromCharCode(120,95,57,56,95,103,111,110,101,0);
    let k_title7 = String.fromCharCode(97,100,115,103,97,115,95,49,95,54,54,0);
    let completeo = true;
    let formi = true;
    let minivodN = 5.0;
       let nativeH = String.fromCharCode(100,95,54,49,95,121,98,108,111,99,107,0);
       let appsU = 2.0;
       let matchesb = String.fromCharCode(99,113,117,101,117,101,95,99,95,53,50,0);
      let register_9X = String.fromCharCode(97,119,100,55,98,121,103,111,114,54,0) == matchesb;
      do {
         matchesb = `${parseInt(`${appsU}`) << (Math.min(nativeH.length, 3))}`;
         if (register_9X) {
            break;
         }
      } while (register_9X && (5 < (4 & matchesb.length)));
         appsU /= Math.max(3, 1);
      let resendZ = 6826571.0 <= appsU;
      do {
         appsU += matchesb.length * 1;
         if (resendZ) {
            break;
         }
      } while (resendZ && (!matchesb.startsWith(`${appsU}`)));
         appsU -= parseInt(`${appsU}`);
         appsU += (nativeH == String.fromCharCode(79,0) ? parseInt(`${appsU}`) : nativeH.length);
         appsU *= parseInt(`${appsU}`);
          let e_unlockM: Map<any, any> = new Map([[String.fromCharCode(113,115,99,97,108,101,98,105,116,115,95,113,95,54,57,0),836], [String.fromCharCode(122,95,57,56,95,110,111,110,110,117,108,108,115,101,114,105,97,108,105,122,97,116,105,111,110,0),193], [String.fromCharCode(105,95,55,50,95,115,101,99,116,105,111,110,0),390]]);
          let rank4 = 1;
          let favoriteO = String.fromCharCode(104,95,49,51,95,105,110,105,116,97,108,105,122,101,0);
         matchesb += `${2 | nativeH.length}`;
         e_unlockM = new Map([[`${e_unlockM.size}`, 1]]);
         rank4 >>= Math.min(2, Math.abs(e_unlockM.size));
         favoriteO = `${e_unlockM.size}`;
      while (appsU <= matchesb.length) {
          let internet5 = String.fromCharCode(117,110,107,105,99,107,95,99,95,50,56,0);
          let searchI = 4.0;
          let floaterc = 4.0;
          let vignetteZ = false;
         appsU += 1 * parseInt(`${searchI}`);
         internet5 += `${internet5.length}`;
         searchI -= parseInt(`${floaterc}`);
         floaterc *= ((vignetteZ ? 5 : 5) | parseInt(`${floaterc}`));
         vignetteZ = !vignetteZ;
         break;
      }
         nativeH += `${nativeH.length & 2}`;
      layout2 += nativeH.length << (Math.min(5, Math.abs(parseInt(`${appsU}`))));
   let down3 = 7379742.0 >= sharedN;
   do {
      sharedN /= Math.max(1, parseInt(`${backR}`));
      if (down3) {
         break;
      }
   } while (down3 && (!stepn));
   let privacy5 = yellowy ? !yellowy : yellowy;
   do {
      yellowy = 79.43 >= sharedN;
      if (privacy5) {
         break;
      }
   } while ((!yellowy) && privacy5);
   for (let y = 0; y < 3; y++) {
      backwardG = `${parseInt(`${sharedN}`)}`;
   }
   for (let p = 0; p < 2; p++) {
      dragO.push(update_5y | 2);
   }
      sharedN *= stats0;
   let successV = yellowy ? !yellowy : yellowy;
   do {
      yellowy = (!internetp ? !stepn : !internetp);
      if (successV) {
         break;
      }
   } while (successV && (internetp));
      internetp = dragO.length == 22;
   while (yellowy) {
       let ajaxN: Map<any, any> = new Map([[String.fromCharCode(97,110,103,101,95,114,95,56,52,0),706], [String.fromCharCode(106,95,57,95,120,103,97,115,0),534], [String.fromCharCode(99,95,52,57,95,112,97,103,101,108,105,115,116,0),958]]);
      while (ajaxN.size < 3) {
          let reducerq: Map<any, any> = new Map([[String.fromCharCode(121,95,55,55,95,108,105,98,111,112,101,110,106,112,101,103,0),883], [String.fromCharCode(110,95,56,55,95,115,117,98,116,114,97,99,116,105,110,103,0),80], [String.fromCharCode(100,105,102,102,115,95,55,95,55,49,0),602]]);
         ajaxN.set(`${reducerq.size}`, reducerq.size % 2);
         break;
      }
          let settingsS = 5.0;
          let store0: Map<any, any> = new Map([[String.fromCharCode(98,95,49,55,95,98,101,116,97,0),53], [String.fromCharCode(114,101,99,117,114,115,101,95,104,95,51,49,0),724]]);
         ajaxN.set(`${store0.size}`, 1);
         settingsS /= Math.max(parseFloat(`${parseInt(`${settingsS}`)}`), 1);
         store0 = new Map([[`${settingsS}`, 2]]);
          let fastE = false;
         ajaxN = new Map([[`${ajaxN.size}`, (ajaxN.size + (fastE ? 2 : 1))]]);
      dragO = [ajaxN.size - clearp.length];
      break;
   }
      yellowy = !yellowy;
       let gpay6: Map<any, any> = new Map([[String.fromCharCode(104,95,50,49,95,116,119,111,115,116,97,103,101,0),String.fromCharCode(106,95,53,55,95,115,116,114,105,100,101,0)], [String.fromCharCode(115,116,114,99,97,115,101,99,109,112,95,116,95,52,0),String.fromCharCode(111,103,103,101,114,95,117,95,50,48,0)]]);
       let streamingz = 1;
         gpay6.set(`${streamingz}`, 3 * gpay6.size);
         streamingz /= Math.max(streamingz + gpay6.size, 2);
       let downloadedc: Array<any> = [681, 230, 273];
       let selectP: Array<any> = [998, 465, 28];
          let referrers: Array<any> = [14, 366, 243];
          let recommendationz = String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,115,95,98,95,52,49,0);
          let hookv = 2.0;
         streamingz &= 3 - referrers.length;
         referrers.push((String.fromCharCode(103,0) == recommendationz ? recommendationz.length : parseInt(`${hookv}`)));
         hookv += parseFloat(`${recommendationz.length}`);
      if (4 >= (5 << (Math.min(4, Math.abs(streamingz)))) || (gpay6.size << (Math.min(5, Math.abs(streamingz)))) >= 5) {
         streamingz %= Math.max(4, 1);
      }
      for (let e = 0; e < 1; e++) {
         streamingz -= streamingz;
      }
      layout2 &= ((stepn ? 1 : 1) + (internetp ? 5 : 5));
   let matchesE = String.fromCharCode(110,48,54,113,112,109,0) == k_title7;
   do {
      k_title7 = `${3 | dragO.length}`;
      if (matchesE) {
         break;
      }
   } while (matchesE && (!stepn));
   for (let z = 0; z < 3; z++) {
       let customu = String.fromCharCode(112,105,99,116,111,114,95,119,95,50,48,0);
       let phoneG = 5.0;
       let bottomE = 4.0;
         phoneG /= Math.max(4, parseFloat(`${2}`));
      if (1.79 >= (bottomE - phoneG)) {
         phoneG -= parseFloat(`${parseInt(`${phoneG}`)}`);
      }
          let nterstitial_ = String.fromCharCode(114,95,55,57,95,121,117,118,121,117,118,0);
         phoneG -= parseFloat(`${parseInt(`${phoneG}`) ^ 2}`);
         nterstitial_ += `${nterstitial_.length}`;
      while (phoneG < 2.37) {
         bottomE += parseInt(`${phoneG}`) & parseInt(`${bottomE}`);
         break;
      }
       let upgradeG = String.fromCharCode(108,105,110,101,98,114,101,97,107,95,108,95,50,51,0);
      if (2.53 >= (parseFloat(`${upgradeG.length}`) * phoneG) || (2 * parseInt(`${phoneG}`)) >= 4) {
          let sentrye = 5.0;
          let t_unlockh = false;
          let contextZ = String.fromCharCode(107,95,53,54,95,114,101,112,115,116,114,0);
         phoneG /= Math.max((parseFloat(`${String.fromCharCode(101,0) == customu ? parseInt(`${phoneG}`) : customu.length}`)), 3);
         sentrye /= Math.max((parseFloat(`${contextZ.length | (t_unlockh ? 2 : 3)}`)), 4);
         t_unlockh = !t_unlockh;
         contextZ = `${2 + contextZ.length}`;
      }
      while (3.68 == (upgradeG.length * bottomE) && 5 == (upgradeG.length << (Math.min(Math.abs(4), 5)))) {
         upgradeG = `${parseInt(`${phoneG}`) * 1}`;
         break;
      }
       let reducerW = String.fromCharCode(100,97,117,98,101,99,104,105,101,115,95,109,95,57,50,0);
         upgradeG = "1";
      stats0 |= layout2;
   }
   while (clearp.includes(`${sharedN}`)) {
      clearp = `${layout2}`;
      break;
   }
   for (let r = 0; r < 2; r++) {
      k_title7 += "2";
   }
      backR /= Math.max(2, 2);
      backR *= (String.fromCharCode(103,0) == clearp ? clearp.length : (yellowy ? 5 : 2));
   if ((sharedN + 3.92) < 4.73 && internetp) {
       let gestureX = 5.0;
       let placementG = 2.0;
       let playh = String.fromCharCode(117,95,54,56,95,112,101,114,99,101,110,116,0);
       let fillA = String.fromCharCode(106,117,103,103,108,101,95,111,95,48,0);
       let switch_uvQ: Map<any, any> = new Map([[String.fromCharCode(97,115,115,101,109,98,108,121,95,49,95,51,49,0),String.fromCharCode(107,95,53,54,95,102,114,101,113,115,0)], [String.fromCharCode(122,95,55,48,95,103,97,105,110,0),String.fromCharCode(104,101,108,112,101,114,115,95,104,95,56,54,0)], [String.fromCharCode(116,95,50,48,95,115,116,114,104,97,115,104,0),String.fromCharCode(102,95,56,50,95,100,101,108,105,109,105,116,101,100,0)]]);
       let detailI: Map<any, any> = new Map([[String.fromCharCode(117,95,55,53,95,100,105,115,116,114,97,99,116,105,111,110,0),String.fromCharCode(118,95,52,50,95,100,97,115,104,98,111,97,114,100,0)], [String.fromCharCode(110,111,98,111,100,121,95,113,95,50,55,0),String.fromCharCode(116,119,105,116,116,101,114,95,105,95,52,55,0)], [String.fromCharCode(97,108,116,101,114,95,113,95,54,49,0),String.fromCharCode(111,95,57,56,95,115,116,97,116,117,115,0)]]);
       let kickc: Map<any, any> = new Map([[String.fromCharCode(107,95,54,52,95,98,114,101,97,100,0),693], [String.fromCharCode(99,111,110,116,105,110,117,97,108,95,119,95,51,56,0),7], [String.fromCharCode(102,95,50,52,95,97,116,111,109,105,99,115,0),446]]);
      while ((switch_uvQ.size / 3) == 5) {
         detailI.set(`${fillA}`, switch_uvQ.size);
         break;
      }
      for (let a = 0; a < 2; a++) {
          let expiredc = 5.0;
          let unselectedS = 1.0;
          let commentQ = String.fromCharCode(119,95,52,54,95,100,121,110,97,109,105,99,115,0);
          let dialog2 = false;
          let storeC = String.fromCharCode(119,95,53,56,95,108,115,112,112,111,108,121,102,0);
         kickc.set(playh, (String.fromCharCode(103,0) == playh ? fillA.length : playh.length));
         expiredc += parseFloat(`${3 - parseInt(`${unselectedS}`)}`);
         unselectedS /= Math.max(3, ((dialog2 ? 5 : 2)));
         commentQ += `${commentQ.length}`;
         dialog2 = 71.56 < expiredc || unselectedS < 71.56;
         storeC = "1";
      }
      while (playh.length <= kickc.size) {
          let description_dF = 3.0;
          let backgroundf = 1;
         kickc = new Map([[`${detailI.size}`, detailI.size]]);
         description_dF /= Math.max(5, backgroundf & parseInt(`${description_dF}`));
         backgroundf <<= Math.min(Math.abs(backgroundf >> (Math.min(Math.abs(parseInt(`${description_dF}`)), 1))), 5);
         break;
      }
      while (2 <= playh.length) {
          let yingo = true;
          let robotoC = true;
         playh += `${((robotoC ? 4 : 5) * 1)}`;
         break;
      }
         placementG -= parseFloat(`${parseInt(`${gestureX}`)}`);
         playh = `${(fillA == String.fromCharCode(120,0) ? fillA.length : kickc.size)}`;
       let combinedU: Map<any, any> = new Map([[String.fromCharCode(110,105,99,101,108,121,95,112,95,56,53,0),440], [String.fromCharCode(117,110,105,110,115,116,97,108,108,95,54,95,49,48,0),670]]);
       let agreementH: Map<any, any> = new Map([[String.fromCharCode(115,101,113,117,101,110,116,105,97,108,95,114,95,49,48,0),302], [String.fromCharCode(108,95,56,57,95,102,111,114,99,105,110,103,0),851]]);
         playh += `${playh.length + 1}`;
         switch_uvQ = new Map([[`${switch_uvQ.size}`, switch_uvQ.size | 2]]);
          let philippines2 = 4;
         agreementH.set(`${switch_uvQ.size}`, detailI.size * 2);
         philippines2 >>= Math.min(2, Math.abs(philippines2 % (Math.max(1, 9))));
          let screenJ: Array<any> = [834, 458];
          let vietnamn = 3;
          let foundG = String.fromCharCode(120,95,51,52,95,101,120,116,115,107,0);
         combinedU.set(`${switch_uvQ.size}`, agreementH.size);
         screenJ = [foundG.length + screenJ.length];
         vietnamn %= Math.max(4, screenJ.length + 3);
         foundG += `${vietnamn / (Math.max(foundG.length, 9))}`;
      if ((fillA.length / (Math.max(9, parseInt(`${placementG}`)))) >= 4 || 1.29 >= (5.29 / (Math.max(2, placementG)))) {
         placementG -= (parseFloat(`${playh == String.fromCharCode(51,0) ? agreementH.size : playh.length}`));
      }
         switch_uvQ = new Map([[`${detailI.size}`, parseInt(`${placementG}`) << (Math.min(Math.abs(1), 5))]]);
          let yellow5 = String.fromCharCode(106,95,56,54,95,97,117,116,104,111,114,105,122,101,0);
         placementG *= parseFloat(`${detailI.size << (Math.min(2, Math.abs(parseInt(`${gestureX}`))))}`);
         yellow5 += `${yellow5.length ^ 3}`;
      internetp = dragO.length == 49;
   }
   if (!backwardG.includes(`${internetp}`)) {
      backwardG += `${(3 - (yellowy ? 1 : 5))}`;
   }
       let roomI = 0;
          let downloaderr = 5;
          let textl: Map<any, any> = new Map([[String.fromCharCode(105,110,118,102,95,112,95,49,0),475], [String.fromCharCode(100,95,50,57,95,99,117,115,116,111,109,105,122,101,114,0),165], [String.fromCharCode(106,95,52,52,95,104,97,108,108,0),222]]);
         roomI |= 1 ^ textl.size;
         downloaderr /= Math.max(2, 2);
         textl = new Map([[`${downloaderr}`, 3 >> (Math.min(1, Math.abs(downloaderr)))]]);
      let fieldJ = 7888905 <= roomI;
      do {
          let oranger = 0.0;
          let movies5 = 4;
          let viewsv = String.fromCharCode(109,95,54,95,97,103,114,101,101,109,101,110,116,0);
         roomI &= viewsv.length + parseInt(`${oranger}`);
         oranger -= movies5;
         if (fieldJ) {
            break;
         }
      } while (((roomI >> (Math.min(Math.abs(4), 2))) < 3) && fieldJ);
         roomI &= roomI;
      sharedN *= roomI;
   let becomeg = formi ? !formi : formi;
   do {
       let tail9 = 1.0;
      while (tail9 > 4.80) {
         tail9 *= parseFloat(`${parseInt(`${tail9}`)}`);
         break;
      }
         tail9 += parseFloat(`${parseInt(`${tail9}`) - parseInt(`${tail9}`)}`);
         tail9 -= parseFloat(`${parseInt(`${tail9}`) << (Math.min(1, Math.abs(parseInt(`${tail9}`))))}`);
      formi = sharedN > 91.50 && 80 > backwardG.length;
      if (becomeg) {
         break;
      }
   } while ((2 > layout2 && 1 > (layout2 | 2)) && becomeg);

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
       let soundh: Map<any, any> = new Map([[String.fromCharCode(111,117,116,111,117,116,95,108,95,50,49,0),false ], [String.fromCharCode(121,95,52,51,95,117,110,100,101,114,101,115,116,105,109,97,116,101,100,0),false ], [String.fromCharCode(116,95,57,54,95,114,102,102,116,98,0),false ]]);
    let crossx = 2;
    let hongkongb = String.fromCharCode(108,101,110,103,116,104,95,122,95,54,52,0);
    let routerl: Map<any, any> = new Map([[String.fromCharCode(101,95,52,48,95,112,117,110,99,104,0),481], [String.fromCharCode(105,102,105,108,116,101,114,95,56,95,52,52,0),557], [String.fromCharCode(100,101,113,117,97,110,116,105,122,101,114,95,107,95,57,48,0),500]]);
    let temperatureJ = true;
    let nativeU = String.fromCharCode(112,117,98,107,101,121,104,97,115,104,95,48,95,57,53,0);
    let fullV = 2.0;
    let short_gk1: Map<any, any> = new Map([[String.fromCharCode(121,95,53,51,95,111,99,116,101,116,0),true ], [String.fromCharCode(101,120,101,99,117,116,111,114,95,98,95,50,56,0),false ], [String.fromCharCode(109,111,100,105,102,121,95,118,95,51,49,0),false ]]);
    let brightnessZ = String.fromCharCode(105,110,115,116,97,108,108,115,95,119,95,55,53,0);
    let alertz = String.fromCharCode(98,95,48,95,104,105,103,104,115,104,101,108,102,0);
    let moref = 1.0;
   let loginV = brightnessZ == String.fromCharCode(114,108,100,117,54,55,55,0);
   do {
      brightnessZ = `${hongkongb.length - 1}`;
      if (loginV) {
         break;
      }
   } while (((1 % (Math.max(1, brightnessZ.length))) >= 1) && loginV);
      soundh.set(nativeU, 3);
   let fastforwardb = 9194594 >= alertz.length;
   do {
      alertz += `${soundh.size | routerl.size}`;
      if (fastforwardb) {
         break;
      }
   } while (fastforwardb && (brightnessZ != String.fromCharCode(121,0)));
   if ((brightnessZ.length << (Math.min(5, Math.abs(short_gk1.size)))) <= 5) {
      brightnessZ = "3";
   }
   let langV = crossx >= 5205128;
   do {
       let pingA = String.fromCharCode(99,95,57,54,95,112,105,99,116,121,112,101,0);
      if (pingA.length <= pingA.length) {
         pingA += `${pingA.length + pingA.length}`;
      }
       let hookB = 4;
       let dangerq = 2;
       let dragO = String.fromCharCode(112,95,54,54,95,108,108,118,105,100,101,110,99,100,115,112,0);
      crossx *= (3 | (temperatureJ ? 1 : 2));
      if (langV) {
         break;
      }
   } while (langV && (soundh.get(`${crossx}`) != null));

    

      short_gk1 = new Map([[`${routerl.size}`, (String.fromCharCode(106,0) == nativeU ? routerl.size : nativeU.length)]]);
   while ((short_gk1.size ^ 4) <= 2) {
      short_gk1 = new Map([[nativeU, nativeU.length]]);
      break;
   }
   if ((2.7 * fullV) > 2.25 && (brightnessZ.length * 2) > 2) {
      fullV /= Math.max(2, 2);
   }
      routerl.set(hongkongb, parseInt(`${fullV}`));
       let thailand3 = 3.0;
      let stepE = thailand3 <= 9677210.0;
      do {
         thailand3 += parseInt(`${thailand3}`);
         if (stepE) {
            break;
         }
      } while ((thailand3 == 1.100) && stepE);
      let robotoR = 6770643.0 <= thailand3;
      do {
         thailand3 -= parseInt(`${thailand3}`) << (Math.min(3, Math.abs(1)));
         if (robotoR) {
            break;
         }
      } while (robotoR && (5.39 <= (thailand3 / (Math.max(5, thailand3))) && (thailand3 / (Math.max(thailand3, 9))) <= 5.39));
         thailand3 -= 2 - parseInt(`${thailand3}`);
      fullV *= soundh.size ^ 3;
    

   let green8 = String.fromCharCode(99,114,117,48,54,122,48,99,0) == nativeU;
   do {
       let confirmation7: Map<any, any> = new Map([[String.fromCharCode(104,95,49,50,95,100,105,102,102,101,114,101,110,99,101,115,0),475], [String.fromCharCode(100,95,57,52,95,105,112,104,111,110,101,0),436]]);
         confirmation7 = new Map([[`${confirmation7.size}`, confirmation7.size]]);
      let recommendationr = confirmation7.size <= 8414480;
      do {
         confirmation7 = new Map([[`${confirmation7.size}`, confirmation7.size]]);
         if (recommendationr) {
            break;
         }
      } while (recommendationr && (1 == (1 + confirmation7.size) && 5 == (confirmation7.size + 1)));
         confirmation7 = new Map([[`${confirmation7.size}`, confirmation7.size % 3]]);
      nativeU += `${1 * parseInt(`${fullV}`)}`;
      if (green8) {
         break;
      }
   } while ((2 < crossx) && green8);
      temperatureJ = alertz.length > 1 || soundh.size > 1;
   while (5 > (crossx / (Math.max(soundh.size, 2))) || 2 > (crossx / 5)) {
      crossx /= Math.max(2 & crossx, 4);
      break;
   }
       let dragK: Array<any> = [302, 785];
       let floatingt = 3.0;
      while ((dragK.length + parseInt(`${floatingt}`)) < 3 || (parseInt(`${floatingt}`) + dragK.length) < 3) {
          let sliderS: Map<any, any> = new Map([[String.fromCharCode(97,108,116,101,114,101,100,95,117,95,51,49,0),false ], [String.fromCharCode(102,95,56,56,95,103,101,116,119,105,110,116,105,109,101,111,102,100,97,121,0),false ]]);
         floatingt -= 3;
         sliderS = new Map([[`${sliderS.size}`, sliderS.size * sliderS.size]]);
         break;
      }
      while ((5 % (Math.max(2, dragK.length))) >= 2) {
         dragK.push(parseInt(`${floatingt}`) + dragK.length);
         break;
      }
       let logox = String.fromCharCode(100,95,57,48,95,118,112,100,97,116,97,0);
       let crownO = String.fromCharCode(116,95,51,54,95,97,99,116,105,118,101,109,97,112,0);
          let zhengpian0 = 0;
         logox = `${(String.fromCharCode(74,0) == logox ? logox.length : dragK.length)}`;
         zhengpian0 *= zhengpian0 / (Math.max(3, 6));
       let greyN = String.fromCharCode(114,101,103,101,116,95,57,95,52,51,0);
       let modalY = String.fromCharCode(98,95,50,50,95,101,108,97,112,115,101,100,0);
      if (4 >= greyN.length) {
         dragK.push(logox.length / 1);
      }
      brightnessZ = `${dragK.length}`;
      temperatureJ = hongkongb.length >= brightnessZ.length;
    const maxEpisode = (foundSource?.url_count ?? 1) - 1;

   if (soundh.size <= 2) {
      soundh = new Map([[`${routerl.size}`, routerl.size]]);
   }
   for (let v = 0; v < 1; v++) {
      short_gk1.set(`${soundh.size}`, routerl.size);
   }
      fullV += 2 ^ parseInt(`${fullV}`);
   while (!temperatureJ) {
       let targetI = 1.0;
       let dataT = 4.0;
       let soundO = false;
       let sell7 = true;
          let saven: Array<any> = [132, 861];
         sell7 = !sell7;
         saven.push(saven.length % 2);
         soundO = !sell7;
         dataT *= parseFloat(`${parseInt(`${targetI}`)}`);
          let gestureC: Map<any, any> = new Map([[String.fromCharCode(119,101,120,112,97,110,100,95,49,95,54,50,0),982], [String.fromCharCode(101,95,55,53,95,109,111,100,101,108,115,0),913], [String.fromCharCode(100,111,116,95,106,95,52,49,0),246]]);
         dataT += parseFloat(`${2 + parseInt(`${targetI}`)}`);
         gestureC = new Map([[`${gestureC.size}`, 1]]);
       let headere = true;
       let episodes2 = true;
         targetI /= Math.max((parseFloat(`${(soundO ? 2 : 2) - parseInt(`${targetI}`)}`)), 5);
         targetI -= (parseFloat(`${3 >> (Math.min(Math.abs((episodes2 ? 1 : 1)), 4))}`));
         targetI /= Math.max(3, parseFloat(`${2 - parseInt(`${dataT}`)}`));
      if (!soundO) {
         headere = dataT <= 61.48 && soundO;
      }
         headere = (!headere ? episodes2 : !headere);
         targetI /= Math.max(1, parseFloat(`${1 / (Math.max(4, parseInt(`${dataT}`)))}`));
       let teamV = 0.0;
      temperatureJ = 66.58 <= targetI && 79 <= crossx;
      break;
   }
       let thumbnailK = 4;
       let viewsr = 3.0;
       let hongkongT = 5.0;
          let recommendationL = String.fromCharCode(102,95,50,55,95,119,105,110,115,111,99,107,0);
         thumbnailK -= thumbnailK;
         recommendationL = `${recommendationL.length}`;
         thumbnailK *= thumbnailK;
      routerl.set(hongkongb, ((temperatureJ ? 3 : 4) >> (Math.min(hongkongb.length, 5))));
    const reduxCurrentEpisode = vod?.episodeWatched ?? 1;

      crossx /= Math.max(crossx * routerl.size, 5);
   if ((4 % (Math.max(3, routerl.size))) >= 2 || 4 >= (routerl.size % (Math.max(1, brightnessZ.length)))) {
      routerl.set(`${fullV}`, 1);
   }
   if ((hongkongb.length & 2) > 2 || 5 > (2 & routerl.size)) {
       let commonO: Map<any, any> = new Map([[String.fromCharCode(121,97,100,105,102,95,120,95,52,56,0),60], [String.fromCharCode(113,95,57,50,95,109,115,109,112,101,103,0),504], [String.fromCharCode(102,95,53,51,95,97,97,99,101,110,99,100,115,112,0),356]]);
       let updatesE = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,105,111,110,95,102,95,49,0);
       let recommendationb = 3.0;
         recommendationb -= parseFloat(`${1 ^ updatesE.length}`);
      let e_countW = recommendationb >= 7491489.0;
      do {
         recommendationb *= parseFloat(`${updatesE.length}`);
         if (e_countW) {
            break;
         }
      } while (e_countW && (updatesE.startsWith(`${recommendationb}`)));
      let b_unlock4 = 7261576 >= commonO.size;
      do {
         commonO = new Map([[`${commonO.size}`, updatesE.length]]);
         if (b_unlock4) {
            break;
         }
      } while (b_unlock4 && ((recommendationb - 4.83) > 5.85));
      while (5 == (commonO.size & 1) && 4 == (commonO.size & 1)) {
         updatesE += `${parseInt(`${recommendationb}`) + 2}`;
         break;
      }
         recommendationb *= parseFloat(`${commonO.size}`);
      let downloadingD = 8816543 >= updatesE.length;
      do {
         updatesE += `${updatesE.length | commonO.size}`;
         if (downloadingD) {
            break;
         }
      } while (downloadingD && (4 == (commonO.size + updatesE.length) && (updatesE.length + commonO.size) == 4));
       let modeG = String.fromCharCode(110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,95,115,95,57,54,0);
      for (let m = 0; m < 1; m++) {
         updatesE += `${modeG.length}`;
      }
      let upload3 = updatesE.length >= 5543035;
      do {
          let dataN: Array<any> = [223, 282, 229];
          let sportsV = String.fromCharCode(109,97,114,107,105,110,103,95,105,95,52,55,0);
          let hookQ = String.fromCharCode(115,97,98,101,114,95,114,95,52,48,0);
         updatesE += `${modeG.length >> (Math.min(Math.abs(3), 3))}`;
         dataN.push(sportsV.length * dataN.length);
         sportsV = `${hookQ.length * 2}`;
         hookQ += `${hookQ.length}`;
         if (upload3) {
            break;
         }
      } while ((2 > updatesE.length) && upload3);
      hongkongb += `${crossx >> (Math.min(Math.abs(1), 1))}`;
   }
   let notificationT = String.fromCharCode(56,119,108,55,104,57,53,111,0) == alertz;
   do {
      alertz += `${crossx}`;
      if (notificationT) {
         break;
      }
   } while (notificationT && (1 <= (5 << (Math.min(1, alertz.length)))));
   if (routerl.size <= 1 || (routerl.size + 1) <= 2) {
      temperatureJ = brightnessZ == hongkongb;
   }
    if (reduxCurrentEpisode >= maxEpisode) {

      soundh = new Map([[alertz, 3 / (Math.max(6, parseInt(`${fullV}`)))]]);
       let modityV = String.fromCharCode(105,95,56,48,95,97,115,115,105,103,110,109,101,110,116,0);
       let resendi = String.fromCharCode(101,120,99,108,117,115,105,111,110,115,95,52,95,49,53,0);
       let fastQ = String.fromCharCode(121,95,57,52,95,114,111,120,121,0);
      if (resendi.length <= fastQ.length) {
          let controlZ = false;
         fastQ += `${((controlZ ? 2 : 2) - 3)}`;
      }
         fastQ += `${resendi.length + 3}`;
          let kickJ: Map<any, any> = new Map([[String.fromCharCode(114,101,109,105,120,105,110,103,95,54,95,48,0),String.fromCharCode(97,118,97,105,108,97,98,105,108,105,116,121,95,53,95,52,51,0)], [String.fromCharCode(109,95,56,50,0),String.fromCharCode(109,95,50,95,100,102,108,97,0)], [String.fromCharCode(98,95,55,56,95,109,111,109,101,110,116,0),String.fromCharCode(117,110,101,100,105,116,97,98,108,101,95,48,95,53,0)]]);
         resendi += `${modityV.length}`;
         kickJ.set(`${kickJ.size}`, kickJ.size - kickJ.size);
      for (let k = 0; k < 1; k++) {
          let sportT = 4.0;
          let annerB = 1.0;
          let taiwanh = String.fromCharCode(108,95,48,95,114,105,98,98,111,110,0);
          let championi = String.fromCharCode(111,95,49,48,48,95,115,108,97,115,104,101,115,0);
         resendi = `${modityV.length}`;
         sportT -= championi.length ^ taiwanh.length;
         annerB *= parseFloat(`${parseInt(`${annerB}`) << (Math.min(championi.length, 2))}`);
         taiwanh = `${parseInt(`${annerB}`)}`;
      }
       let carouselc = String.fromCharCode(98,97,99,107,101,100,95,54,95,53,49,0);
      if (!fastQ.startsWith(resendi)) {
         resendi = `${fastQ.length}`;
      }
         modityV = "3";
         fastQ += "1";
         modityV = "2";
      short_gk1.set(`${resendi}`, soundh.size);
   while ((3 & short_gk1.size) <= 4 || short_gk1.size <= 3) {
      short_gk1 = new Map([[`${soundh.size}`, soundh.size / (Math.max(8, short_gk1.size))]]);
      break;
   }
      temperatureJ = crossx == 75;
       let sortt: Array<any> = [String.fromCharCode(97,114,101,115,95,118,95,49,51,0), String.fromCharCode(114,101,115,101,110,100,95,118,95,53,52,0), String.fromCharCode(97,99,99,117,109,117,108,97,116,111,114,95,115,95,50,55,0)];
       let datas: Array<any> = [String.fromCharCode(114,101,115,104,117,102,102,108,101,95,103,95,51,51,0), String.fromCharCode(105,95,57,53,95,110,99,104,117,110,107,0)];
       let gestures = String.fromCharCode(113,95,50,57,95,104,108,115,112,108,97,121,108,105,115,116,0);
         gestures = `${gestures.length << (Math.min(4, datas.length))}`;
         datas.push(3 % (Math.max(8, gestures.length)));
         gestures += `${sortt.length << (Math.min(Math.abs(2), 5))}`;
      let downX = String.fromCharCode(119,97,105,115,105,122,0) == gestures;
      do {
          let gestureF = String.fromCharCode(107,95,53,48,95,119,104,105,116,101,115,0);
          let dangerb = 3.0;
          let indicatorV = 3;
         gestures += `${sortt.length / (Math.max(3, 10))}`;
         gestureF = "1";
         dangerb -= parseInt(`${dangerb}`);
         indicatorV >>= Math.min(Math.abs(indicatorV), 4);
         if (downX) {
            break;
         }
      } while ((3 >= (gestures.length | 5)) && downX);
         datas = [sortt.length - 1];
      if (4 >= (datas.length >> (Math.min(gestures.length, 2))) || 3 >= (datas.length >> (Math.min(Math.abs(4), 3)))) {
         gestures += `${sortt.length << (Math.min(Math.abs(1), 1))}`;
      }
      while ((datas.length * sortt.length) <= 4) {
         sortt.push(datas.length);
         break;
      }
      if (datas.length >= sortt.length) {
         sortt.push(datas.length);
      }
      let serviceR = gestures == String.fromCharCode(102,52,110,118,120,105,0);
      do {
          let blackk = String.fromCharCode(116,95,54,53,95,116,105,110,121,0);
          let crownX = 4;
          let redirectz = true;
          let minimizem = String.fromCharCode(109,97,99,114,111,95,112,95,54,51,0);
         gestures = `${datas.length ^ 3}`;
         blackk = `${blackk.length | crownX}`;
         crownX >>= Math.min(Math.abs(((redirectz ? 1 : 4))), 3);
         redirectz = minimizem.length > 44 && !redirectz;
         minimizem = `${(minimizem == String.fromCharCode(57,0) ? (redirectz ? 5 : 2) : minimizem.length)}`;
         if (serviceR) {
            break;
         }
      } while (serviceR && (5 >= (gestures.length % (Math.max(3, datas.length))) && 2 >= (datas.length % 5)));
      short_gk1.set(`${datas.length}`, datas.length + 1);
      setCurrentEpisode(Math.min(maxEpisode, reduxCurrentEpisode));
    } else if (currentEpisode >= maxEpisode) {

   for (let c = 0; c < 1; c++) {
      routerl.set(`${crossx}`, short_gk1.size - 2);
   }
      short_gk1 = new Map([[nativeU, nativeU.length * 3]]);
       let expiredm = String.fromCharCode(120,95,57,48,95,109,101,101,116,117,112,0);
       let over4 = String.fromCharCode(105,97,116,95,98,95,57,56,0);
       let vignetteu = true;
          let dropdownB: Map<any, any> = new Map([[String.fromCharCode(97,98,101,108,95,49,95,51,56,0),987], [String.fromCharCode(118,95,49,51,95,98,111,117,110,100,101,100,0),720], [String.fromCharCode(116,97,103,103,101,100,95,56,95,54,52,0),411]]);
         expiredm = `${expiredm.length}`;
         dropdownB = new Map([[`${dropdownB.size}`, dropdownB.size & 1]]);
       let plashv: Array<any> = [84, 582];
      if (!vignetteu) {
          let promotions: Map<any, any> = new Map([[String.fromCharCode(97,95,51,48,95,115,116,114,116,111,108,108,0),String.fromCharCode(99,115,114,105,100,95,56,95,54,55,0)], [String.fromCharCode(100,101,109,111,116,101,95,106,95,54,57,0),String.fromCharCode(100,101,97,99,116,105,118,97,116,101,100,95,113,95,53,53,0)], [String.fromCharCode(104,95,54,95,119,111,114,107,108,111,97,100,0),String.fromCharCode(104,101,99,107,95,52,95,54,51,0)]]);
         vignetteu = over4.endsWith(`${vignetteu}`);
         promotions.set(`${promotions.size}`, 2 - promotions.size);
      }
      if (expiredm.length > 4) {
         vignetteu = !vignetteu;
      }
         expiredm = "1";
          let twitterK: Array<any> = [164, 543, 246];
         vignetteu = (over4.length ^ expiredm.length) <= 44;
         twitterK = [3 ^ twitterK.length];
         vignetteu = over4.length >= 37;
      if ((expiredm.length * 2) >= 3) {
         plashv.push(2);
      }
         over4 = `${over4.length}`;
      temperatureJ = expiredm == String.fromCharCode(74,0);
   let bellG = brightnessZ == String.fromCharCode(113,54,103,97,55,0);
   do {
      brightnessZ += `${2 & crossx}`;
      if (bellG) {
         break;
      }
   } while ((3 > alertz.length) && bellG);
   while (brightnessZ.startsWith(`${alertz.length}`)) {
      brightnessZ += "3";
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
        episode.status === RAccepted.RClearModels
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
       let stations5 = 1.0;
    let photoo = 2;
    let catagoryZ: Array<any> = [524, 220, 942];
    let umengM = String.fromCharCode(98,95,56,56,95,109,109,120,101,120,116,0);
    let sidem: Map<any, any> = new Map([[String.fromCharCode(97,100,106,117,115,116,115,95,97,95,49,53,0),23], [String.fromCharCode(111,110,101,111,102,95,98,95,50,56,0),928]]);
    let entryc = false;
    let anytimej = 0;
    let arrowr: Array<any> = [924, 779];
    let friendsv = String.fromCharCode(110,95,52,50,95,115,117,98,110,111,100,101,115,0);
    let tempO = false;
    let filla = 1.0;
    let aboutO = 0;
      umengM = `${((entryc ? 5 : 3) & 2)}`;
      umengM += `${(anytimej - (entryc ? 2 : 3))}`;

    if (vod && !isReadyPlay) {

      arrowr = [anytimej];
   while ((anytimej + 2) < 5 && (anytimej + arrowr.length) < 2) {
      arrowr.push(photoo);
      break;
   }
      umb_center_carousel.playsPlaysTimesAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
        isXmode: adultMode,
      });

       let upgraden = 3;
         upgraden /= Math.max(1 & upgraden, 5);
      for (let h = 0; h < 2; h++) {
         upgraden += 1;
      }
          let assist3 = 0.0;
          let rightq = 4.0;
          let const_e70 = String.fromCharCode(100,95,56,49,95,100,101,109,97,110,103,108,101,0);
         upgraden /= Math.max(parseInt(`${assist3}`) * 1, 1);
         assist3 /= Math.max(4, 2 - parseInt(`${rightq}`));
         rightq -= parseInt(`${rightq}`) << (Math.min(const_e70.length, 2));
         const_e70 = `${const_e70.length / 1}`;
      umengM = `${(String.fromCharCode(122,0) == umengM ? upgraden : umengM.length)}`;
   for (let c = 0; c < 1; c++) {
      sidem = new Map([[`${catagoryZ.length}`, catagoryZ.length % 1]]);
   }

      LRZTermsScreen.playsPlaysTimesAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
        isXmode: adultMode,
      });
    }

    setReadyPlay(true);

   while ((1 + anytimej) < 5 || anytimej < 1) {
       let step1 = String.fromCharCode(121,97,100,105,102,95,112,95,53,51,0);
          let binge = String.fromCharCode(115,117,112,101,114,119,105,110,100,111,119,95,54,95,50,55,0);
         step1 = `${step1.length}`;
         binge = `${binge.length}`;
      let internetc = 5662711 >= step1.length;
      do {
         step1 += `${step1.length}`;
         if (internetc) {
            break;
         }
      } while (internetc && (5 == step1.length));
      for (let v = 0; v < 2; v++) {
         step1 = `${step1.length}`;
      }
      entryc = 88 < catagoryZ.length || anytimej < 88;
      break;
   }
   while (stations5 >= 5.100) {
      stations5 *= 1;
      break;
   }

    if (shouldResumeAfterLoad && videoPlayerRef.current) {

   for (let w = 0; w < 2; w++) {
       let bottomX = String.fromCharCode(105,110,105,116,118,95,119,95,50,54,0);
       let modulea = 5.0;
       let analytics9: Array<any> = [274, 328];
         modulea *= analytics9.length / 3;
      if (bottomX.startsWith(`${analytics9.length}`)) {
          let infoz = 2.0;
          let canvasM = 1.0;
          let expiredm = 5.0;
          let yellowR = String.fromCharCode(116,95,50,52,95,97,99,118,112,0);
          let playz = true;
         analytics9.push(analytics9.length);
         infoz -= parseFloat(`${parseInt(`${canvasM}`)}`);
         expiredm *= parseFloat(`${parseInt(`${expiredm}`) * yellowR.length}`);
         yellowR = `${parseInt(`${infoz}`) << (Math.min(Math.abs(parseInt(`${expiredm}`)), 5))}`;
         playz = 66.39 == canvasM && 66.39 == expiredm;
      }
      while (3 <= (analytics9.length - 1) || (modulea / 3.15) <= 4.53) {
          let friendsV = 3.0;
          let main_fS: Map<any, any> = new Map([[String.fromCharCode(102,111,108,100,101,114,95,108,95,56,0),false ], [String.fromCharCode(101,108,98,103,95,118,95,54,54,0),false ]]);
         analytics9.push(analytics9.length >> (Math.min(1, Math.abs(main_fS.size))));
         friendsV /= Math.max(parseInt(`${friendsV}`) | parseInt(`${friendsV}`), 5);
         main_fS = new Map([[`${friendsV}`, 1 * parseInt(`${friendsV}`)]]);
         break;
      }
         analytics9 = [analytics9.length >> (Math.min(3, Math.abs(parseInt(`${modulea}`))))];
      for (let k = 0; k < 1; k++) {
          let abouth: Array<any> = [String.fromCharCode(98,95,51,51,95,99,111,110,102,105,114,109,97,116,105,111,110,0), String.fromCharCode(116,105,99,107,101,116,115,95,116,95,55,54,0), String.fromCharCode(105,95,49,56,95,110,105,107,111,110,0)];
          let x_unlockr: Map<any, any> = new Map([[String.fromCharCode(100,120,116,111,114,121,95,110,95,50,48,0),543], [String.fromCharCode(119,105,102,105,95,98,95,55,51,0),358]]);
         modulea -= (bottomX == String.fromCharCode(55,0) ? bottomX.length : abouth.length);
         abouth.push(x_unlockr.size);
         x_unlockr.set(`${x_unlockr.size}`, x_unlockr.size | x_unlockr.size);
      }
      photoo -= 3;
   }
       let combine0 = String.fromCharCode(100,105,115,97,98,108,101,115,95,54,95,54,54,0);
      if (3 == combine0.length || combine0 == String.fromCharCode(84,0)) {
          let listp = String.fromCharCode(121,111,110,108,121,95,119,95,52,57,0);
          let large5 = false;
          let pnews_ = 1;
          let downloadQ: Array<any> = [78, 359, 170];
          let statsh = String.fromCharCode(115,119,97,112,95,115,95,53,54,0);
         combine0 += "1";
         listp += `${statsh.length >> (Math.min(Math.abs(2), 1))}`;
         large5 = !large5;
         pnews_ %= Math.max(4, pnews_ / 3);
         downloadQ = [(listp.length / (Math.max(6, (large5 ? 1 : 2))))];
         statsh += `${statsh.length ^ 1}`;
      }
      if (5 < combine0.length) {
          let commong: Map<any, any> = new Map([[String.fromCharCode(112,108,97,121,95,56,95,55,0),String.fromCharCode(120,95,52,52,95,99,97,114,100,97,110,111,0)], [String.fromCharCode(115,95,56,50,95,98,105,116,115,104,105,102,116,0),String.fromCharCode(100,98,105,115,95,113,95,49,52,0)], [String.fromCharCode(102,95,53,50,95,116,114,97,110,115,108,97,116,101,100,0),String.fromCharCode(122,97,108,108,111,99,95,111,95,54,54,0)]]);
          let bannerk = String.fromCharCode(105,95,54,56,95,108,111,116,116,105,101,109,111,100,101,108,0);
          let upgradei: Array<any> = [147, 409, 243];
          let splashN = String.fromCharCode(102,95,52,56,95,103,111,98,98,108,101,0);
         combine0 += `${splashN.length}`;
         commong = new Map([[`${upgradei.length}`, 2 ^ upgradei.length]]);
         bannerk += `${commong.size}`;
         splashN += `${commong.size % (Math.max(5, bannerk.length))}`;
      }
       let splashI = String.fromCharCode(108,95,56,51,95,116,120,105,100,0);
       let type_lfi = String.fromCharCode(103,95,53,56,95,112,108,97,121,105,110,103,0);
      catagoryZ = [photoo | anytimej];
      videoPlayerRef.current?.setPause(false); 

   let componentx = String.fromCharCode(49,98,118,99,49,99,56,122,117,48,0) == umengM;
   do {
       let default_al = String.fromCharCode(99,95,53,51,95,103,97,109,109,97,118,97,108,0);
       let frame_n7f = String.fromCharCode(110,97,110,95,117,95,56,56,0);
       let awayS = 0;
       let circlec = false;
      let entryz = frame_n7f == String.fromCharCode(49,100,50,97,98,122,118,104,52,0);
      do {
         frame_n7f += `${((circlec ? 1 : 3) | 1)}`;
         if (entryz) {
            break;
         }
      } while ((frame_n7f.includes(default_al)) && entryz);
          let orientation8 = 4.0;
          let placeholderv = 1.0;
          let unreadm = String.fromCharCode(117,95,50,52,95,112,114,101,112,114,111,103,114,97,109,109,101,100,0);
         frame_n7f += `${frame_n7f.length}`;
         orientation8 -= parseFloat(`${parseInt(`${placeholderv}`)}`);
         unreadm = `${parseInt(`${placeholderv}`) % 2}`;
         default_al += "3";
      let window_1x = awayS >= 7312718;
      do {
         awayS -= awayS / 3;
         if (window_1x) {
            break;
         }
      } while (window_1x && (3 > (awayS & 1)));
         default_al += `${2 * awayS}`;
      while (3 > (awayS % (Math.max(4, frame_n7f.length))) || 3 > (awayS % (Math.max(9, frame_n7f.length)))) {
         awayS ^= frame_n7f.length - default_al.length;
         break;
      }
          let checkboxi = 2;
         awayS %= Math.max(default_al.length ^ awayS, 5);
         checkboxi >>= Math.min(Math.abs(checkboxi % (Math.max(1, 10))), 1);
      for (let i = 0; i < 3; i++) {
          let whatsapp5 = String.fromCharCode(101,118,97,108,95,52,95,55,52,0);
          let macauD: Map<any, any> = new Map([[String.fromCharCode(109,95,51,55,95,115,117,112,112,114,101,115,115,111,114,0),false ], [String.fromCharCode(104,95,49,57,95,117,110,98,108,117,114,0),false ], [String.fromCharCode(104,95,49,51,95,99,116,105,109,101,0),true ]]);
         circlec = (whatsapp5.length & awayS) <= 46;
         whatsapp5 = `${macauD.size}`;
         macauD.set(`${macauD.size}`, macauD.size);
      }
       let actionk = String.fromCharCode(118,95,49,95,113,117,97,108,105,102,105,101,114,115,0);
         circlec = 65 > frame_n7f.length;
       let countdownZ = String.fromCharCode(102,95,52,57,95,97,108,105,103,110,0);
       let commonX = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,95,98,95,52,56,0);
         frame_n7f += `${awayS}`;
      umengM = `${friendsv.length}`;
      if (componentx) {
         break;
      }
   } while ((umengM.includes(`${catagoryZ.length}`)) && componentx);
      friendsv += "2";
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
       let tumbnailJ = 5.0;
    let heartE = 5.0;
    let storeV = false;
    let logoP = 3;
    let sheet6 = 3.0;
    let emptyN: Map<any, any> = new Map([[String.fromCharCode(108,117,109,105,110,97,110,99,101,95,97,95,51,52,0),true ], [String.fromCharCode(114,97,116,101,99,111,110,116,114,111,108,95,49,95,54,56,0),true ]]);
    let calendarT = false;
    let video4 = 3.0;
    let clear3: Map<any, any> = new Map([[String.fromCharCode(104,101,97,100,105,110,103,95,119,95,55,48,0),true ], [String.fromCharCode(101,95,52,52,95,114,101,103,105,111,110,115,0),false ], [String.fromCharCode(116,95,54,55,95,116,101,120,116,0),false ]]);
    let teamZ = 4.0;
    let inviteN: Array<any> = [308, 343, 553];
    let leagueS = String.fromCharCode(110,109,109,105,110,116,114,105,110,95,103,95,48,0);
    let gmails = String.fromCharCode(115,104,105,112,112,105,110,103,95,107,95,57,54,0);
    let shrinkC: Map<any, any> = new Map([[String.fromCharCode(114,95,57,53,95,117,110,100,101,114,101,115,116,105,109,97,116,101,100,0),712], [String.fromCharCode(97,97,99,101,110,99,100,115,112,95,103,95,50,53,0),139], [String.fromCharCode(120,95,52,52,95,121,117,118,112,116,111,117,121,118,121,0),75]]);
   let indexf = calendarT ? !calendarT : calendarT;
   do {
       let lessm = String.fromCharCode(109,95,55,95,100,105,115,112,108,97,121,0);
       let dropdownq = 0.0;
      while ((dropdownq + 3.5) >= 3.46 && (3 >> (Math.min(5, lessm.length))) >= 3) {
         lessm = `${parseInt(`${dropdownq}`)}`;
         break;
      }
      while (1 == (3 - lessm.length) || 3 == (parseInt(`${dropdownq}`) * lessm.length)) {
         dropdownq *= parseInt(`${dropdownq}`) / (Math.max(lessm.length, 7));
         break;
      }
         dropdownq *= (String.fromCharCode(98,0) == lessm ? lessm.length : parseInt(`${dropdownq}`));
         dropdownq += (lessm == String.fromCharCode(83,0) ? parseInt(`${dropdownq}`) : lessm.length);
         lessm = `${3 << (Math.min(5, lessm.length))}`;
      for (let c = 0; c < 3; c++) {
         lessm = `${(String.fromCharCode(109,0) == lessm ? lessm.length : parseInt(`${dropdownq}`))}`;
      }
      calendarT = (dropdownq / (Math.max(video4, 3))) <= 14.87;
      if (indexf) {
         break;
      }
   } while ((calendarT) && indexf);
      sheet6 += parseFloat(`${2}`);
      teamZ -= parseInt(`${sheet6}`) ^ 3;
      logoP <<= Math.min(Math.abs(parseInt(`${teamZ}`) ^ 1), 4);
   if ((heartE + 4.24) == 4.21 && 2.98 == (4.24 + sheet6)) {
       let detailb: Map<any, any> = new Map([[String.fromCharCode(100,105,114,101,99,116,111,114,121,95,54,95,55,49,0),String.fromCharCode(98,95,49,48,48,95,101,112,105,99,0)], [String.fromCharCode(114,95,51,49,95,100,105,115,112,111,115,101,100,0),String.fromCharCode(97,108,97,114,109,95,53,95,49,48,48,0)], [String.fromCharCode(107,95,50,57,95,116,104,114,101,97,100,115,97,102,101,0),String.fromCharCode(98,121,116,101,119,111,114,100,95,117,95,57,56,0)]]);
         detailb.set(`${detailb.size}`, detailb.size);
       let interstitialM = 0.0;
      while ((detailb.size & 1) > 3 && (detailb.size + parseInt(`${interstitialM}`)) > 1) {
         detailb = new Map([[`${detailb.size}`, parseInt(`${interstitialM}`) % 3]]);
         break;
      }
      sheet6 += parseFloat(`${emptyN.size}`);
   }
      calendarT = 42.47 >= sheet6;
   for (let e = 0; e < 1; e++) {
       let loginO = false;
       let shoots = 3.0;
      for (let h = 0; h < 2; h++) {
         shoots += parseInt(`${shoots}`) & 3;
      }
         shoots -= ((loginO ? 2 : 5) | parseInt(`${shoots}`));
         loginO = !loginO;
       let memberK = 1;
       let telegramh = 4;
         loginO = 23.32 == shoots;
         memberK /= Math.max(4, memberK);
      emptyN = new Map([[`${storeV}`, (logoP >> (Math.min(1, Math.abs((storeV ? 1 : 3)))))]]);
   }
       let gemfilec = 0.0;
       let homeF = String.fromCharCode(102,108,111,97,116,115,104,111,114,116,95,55,95,55,51,0);
       let xvodU = 0.0;
         homeF = `${homeF.length}`;
         xvodU /= Math.max(homeF.length, 2);
         xvodU *= parseInt(`${xvodU}`) ^ parseInt(`${gemfilec}`);
         homeF = "1";
      let send6 = 8252935 <= homeF.length;
      do {
         homeF = `${homeF.length}`;
         if (send6) {
            break;
         }
      } while (send6 && (parseInt(`${gemfilec}`) <= homeF.length));
         gemfilec /= Math.max(parseInt(`${xvodU}`) ^ 1, 3);
         homeF = "1";
      let editx = xvodU >= 8262597.0;
      do {
         xvodU *= homeF.length;
         if (editx) {
            break;
         }
      } while (editx && (xvodU > gemfilec));
      let sinab = homeF.length >= 5425429;
      do {
         homeF += `${homeF.length / (Math.max(3, 6))}`;
         if (sinab) {
            break;
         }
      } while (sinab && ((xvodU / (Math.max(homeF.length, 2))) <= 2.96 || 1 <= (4 * homeF.length)));
      storeV = emptyN.size >= clear3.size;
   let crownq = 9708713.0 <= teamZ;
   do {
      teamZ *= parseInt(`${tumbnailJ}`);
      if (crownq) {
         break;
      }
   } while (crownq && (4.22 <= (teamZ * 2.59)));
   for (let w = 0; w < 2; w++) {
      calendarT = inviteN.includes(logoP);
   }
       let firebaseK: Map<any, any> = new Map([[String.fromCharCode(106,115,101,112,95,50,95,53,52,0),false ], [String.fromCharCode(117,95,52,48,95,102,116,115,121,121,0),false ], [String.fromCharCode(105,95,49,56,95,111,110,110,101,99,116,105,111,110,0),true ]]);
       let clockj = false;
      let configo = clockj ? !clockj : clockj;
      do {
          let animation9: Map<any, any> = new Map([[String.fromCharCode(97,95,57,54,95,100,101,99,111,117,112,108,101,0),873], [String.fromCharCode(106,95,49,56,95,116,107,104,100,0),746], [String.fromCharCode(116,105,109,101,105,110,102,111,95,108,95,50,50,0),663]]);
          let sinaO = 3.0;
          let telegramw = 3.0;
          let halfO = 3.0;
          let b_lockc = 4;
         clockj = 93.0 > halfO || b_lockc > 85;
         animation9.set(`${telegramw}`, parseInt(`${sinaO}`));
         telegramw += parseFloat(`${animation9.size}`);
         halfO *= parseInt(`${sinaO}`);
         b_lockc /= Math.max(parseInt(`${telegramw}`), 2);
         if (configo) {
            break;
         }
      } while (configo && ((2 >> (Math.min(1, Math.abs(firebaseK.size)))) < 2 && 2 < firebaseK.size));
      let baidu6 = clockj ? !clockj : clockj;
      do {
         clockj = !clockj;
         if (baidu6) {
            break;
         }
      } while ((3 <= firebaseK.size) && baidu6);
          let short_wk3: Map<any, any> = new Map([[String.fromCharCode(108,95,54,55,95,105,109,112,114,101,115,115,105,111,110,115,0),true ], [String.fromCharCode(99,95,54,49,95,109,101,114,103,101,97,98,108,101,0),true ], [String.fromCharCode(114,101,99,116,97,110,103,117,108,97,114,95,48,95,54,0),false ]]);
          let z_positione = 4.0;
          let team0 = String.fromCharCode(114,101,110,97,109,101,95,97,95,55,53,0);
         clockj = team0.length == z_positione;
         short_wk3 = new Map([[`${short_wk3.size}`, 1]]);
         z_positione *= short_wk3.size / (Math.max(3, 6));
      while (clockj) {
         clockj = !clockj;
         break;
      }
         firebaseK.set(`${clockj}`, 1 * firebaseK.size);
         firebaseK = new Map([[`${firebaseK.size}`, 1]]);
      calendarT = 66.34 <= sheet6;
   for (let n = 0; n < 2; n++) {
       let singaporej = 4.0;
       let commonh: Map<any, any> = new Map([[String.fromCharCode(117,115,101,114,95,105,95,52,0),849], [String.fromCharCode(113,95,50,95,108,97,112,110,100,122,0),325]]);
       let lightn = String.fromCharCode(122,95,56,55,95,112,105,120,102,109,116,115,0);
       let sportS: Array<any> = [String.fromCharCode(104,95,52,53,95,97,116,111,109,0), String.fromCharCode(105,116,101,114,95,53,95,57,55,0)];
         lightn = "2";
      for (let f = 0; f < 2; f++) {
         singaporej /= Math.max(3, parseFloat(`${parseInt(`${singaporej}`) & commonh.size}`));
      }
      let gestures = 6717154 <= sportS.length;
      do {
         sportS.push(parseInt(`${singaporej}`) << (Math.min(Math.abs(commonh.size), 2)));
         if (gestures) {
            break;
         }
      } while ((sportS.length < 4) && gestures);
         lightn = `${commonh.size}`;
         sportS = [sportS.length | 1];
         sportS.push(sportS.length * 2);
          let linkz = String.fromCharCode(110,117,109,115,95,49,95,57,53,0);
          let reminderp = 3;
         lightn = `${2 >> (Math.min(5, sportS.length))}`;
         linkz += `${linkz.length % 1}`;
         reminderp <<= Math.min(Math.abs(reminderp), 1);
      for (let a = 0; a < 2; a++) {
         singaporej -= parseFloat(`${3 | lightn.length}`);
      }
         lightn += "3";
         sportS = [lightn.length * parseInt(`${singaporej}`)];
      while ((sportS.length ^ 2) == 4) {
          let themet = true;
          let annerT = String.fromCharCode(103,101,116,114,97,110,100,111,109,95,113,95,54,55,0);
          let volume9 = 2.0;
          let bootsplashN = String.fromCharCode(114,101,113,117,105,114,101,95,49,95,49,54,0);
         lightn = `${parseInt(`${singaporej}`) / (Math.max(8, sportS.length))}`;
         themet = (((themet ? 34 : bootsplashN.length) + bootsplashN.length) > 34);
         annerT = `${(parseInt(`${volume9}`) % (Math.max(6, (themet ? 5 : 4))))}`;
         volume9 += annerT.length;
         break;
      }
      while ((parseInt(`${singaporej}`) - commonh.size) <= 3 && 4 <= (3 ^ commonh.size)) {
          let controlsa = 4.0;
          let actionX: Array<any> = [733, 928, 11];
          let countdownX: Map<any, any> = new Map([[String.fromCharCode(109,101,97,115,117,114,101,114,95,101,95,53,51,0),true ], [String.fromCharCode(115,114,112,95,103,95,53,53,0),true ], [String.fromCharCode(97,100,106,97,99,101,110,116,95,122,95,51,56,0),true ]]);
          let projectW = 0;
          let tailJ: Map<any, any> = new Map([[String.fromCharCode(114,101,101,110,99,114,121,112,116,95,103,95,48,0),String.fromCharCode(100,105,115,99,111,118,101,114,101,100,95,53,95,52,55,0)], [String.fromCharCode(98,97,99,107,103,114,117,110,100,95,113,95,56,48,0),String.fromCharCode(116,97,112,95,56,95,51,0)]]);
         commonh = new Map([[`${actionX.length}`, 2 ^ lightn.length]]);
         controlsa /= Math.max(2, 1);
         actionX.push(3 & projectW);
         countdownX = new Map([[`${projectW}`, parseInt(`${controlsa}`) & 3]]);
         tailJ = new Map([[`${countdownX.size}`, parseInt(`${controlsa}`) & 1]]);
         break;
      }
      sheet6 /= Math.max(4, parseFloat(`${inviteN.length >> (Math.min(2, Math.abs(parseInt(`${video4}`))))}`));
   }
   while ((4 >> (Math.min(4, Math.abs(logoP)))) < 3 && 4 < (parseInt(`${sheet6}`) * logoP)) {
      sheet6 += parseFloat(`${parseInt(`${sheet6}`) | 1}`);
      break;
   }
   let macauw = 8627526.0 >= video4;
   do {
       let memberM = 0.0;
       let reportf: Map<any, any> = new Map([[String.fromCharCode(119,111,114,107,105,110,103,95,51,95,49,52,0),665], [String.fromCharCode(120,95,49,55,95,101,108,101,109,0),89], [String.fromCharCode(114,95,53,49,95,97,118,115,116,114,105,110,103,0),361]]);
       let modelY = String.fromCharCode(117,105,111,116,111,109,98,117,102,95,103,95,51,48,0);
       let vertical_: Map<any, any> = new Map([[String.fromCharCode(100,105,110,102,95,100,95,55,56,0),String.fromCharCode(97,95,56,48,95,117,110,112,105,110,110,101,100,0)], [String.fromCharCode(114,95,53,52,95,115,117,98,112,97,99,107,101,116,0),String.fromCharCode(116,95,56,49,95,99,97,112,105,116,97,108,115,0)]]);
       let chartX: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,114,97,110,115,95,115,95,53,55,0),61], [String.fromCharCode(100,95,55,56,95,100,101,99,114,101,97,115,105,110,103,0),542]]);
      if (modelY.endsWith(`${memberM}`)) {
         modelY = `${vertical_.size}`;
      }
          let signinupi: Map<any, any> = new Map([[String.fromCharCode(99,97,108,105,110,103,95,120,95,54,48,0),394], [String.fromCharCode(101,95,50,50,95,97,114,110,114,0),428], [String.fromCharCode(97,115,112,101,99,116,95,119,95,56,54,0),549]]);
          let selectg = true;
         memberM -= modelY.length & 3;
         signinupi = new Map([[`${signinupi.size}`, 1]]);
         selectg = selectg && signinupi.size > 71;
      let crowni = 6973908 >= modelY.length;
      do {
         modelY = "3";
         if (crowni) {
            break;
         }
      } while (crowni && (1 > (reportf.size + modelY.length) || 4 > (1 + reportf.size)));
         memberM *= modelY.length;
      for (let g = 0; g < 1; g++) {
         chartX = new Map([[`${reportf.size}`, parseInt(`${memberM}`)]]);
      }
      for (let t = 0; t < 1; t++) {
         chartX = new Map([[`${chartX.size}`, 2 - chartX.size]]);
      }
      let minimizeg = vertical_.size >= 9666630;
      do {
          let vietnamz = 1.0;
          let profile1 = String.fromCharCode(103,95,53,55,95,121,117,118,99,111,110,102,105,103,105,109,97,103,101,0);
          let nalyticsk = String.fromCharCode(99,95,56,52,95,102,102,109,97,116,104,0);
         vertical_ = new Map([[`${chartX.size}`, 2 >> (Math.min(3, Math.abs(chartX.size)))]]);
         vietnamz += nalyticsk.length;
         profile1 = `${profile1.length}`;
         nalyticsk = `${(String.fromCharCode(95,0) == profile1 ? parseInt(`${vietnamz}`) : profile1.length)}`;
         if (minimizeg) {
            break;
         }
      } while (minimizeg && (3 >= (chartX.size / (Math.max(2, 7)))));
      while (5 == (reportf.size % (Math.max(8, chartX.size))) && (chartX.size % (Math.max(1, reportf.size))) == 5) {
         chartX = new Map([[`${vertical_.size}`, vertical_.size - modelY.length]]);
         break;
      }
      while (memberM > 3.27) {
         reportf.set(`${vertical_.size}`, vertical_.size);
         break;
      }
         vertical_ = new Map([[`${chartX.size}`, 3 | vertical_.size]]);
      if (reportf.size == 5) {
          let const_yc = String.fromCharCode(110,95,54,95,112,114,101,117,112,108,111,97,100,0);
          let animationC = 5.0;
          let resultn = 3;
         vertical_.set(`${animationC}`, 3);
         const_yc += "2";
         animationC *= (String.fromCharCode(119,0) == const_yc ? resultn : const_yc.length);
         resultn += const_yc.length;
      }
         memberM *= (String.fromCharCode(69,0) == modelY ? reportf.size : modelY.length);
      for (let j = 0; j < 1; j++) {
          let righta = String.fromCharCode(105,95,56,51,95,100,114,111,112,111,102,102,0);
         vertical_ = new Map([[righta, (modelY == String.fromCharCode(118,0) ? modelY.length : righta.length)]]);
      }
      let matchb = vertical_.size <= 9806847;
      do {
         vertical_.set(`${modelY}`, reportf.size + 2);
         if (matchb) {
            break;
         }
      } while (((vertical_.size * 2) <= 4 && 2 <= (vertical_.size * reportf.size)) && matchb);
       let interstitialD = 2.0;
      video4 -= parseFloat(`${3}`);
      if (macauw) {
         break;
      }
   } while (macauw && (4 > (2 - clear3.size) || (2 >> (Math.min(3, Math.abs(clear3.size)))) > 2));
   while ((5 ^ inviteN.length) >= 1 || (inviteN.length & 5) >= 4) {
      inviteN = [3];
      break;
   }
      clear3 = new Map([[`${calendarT}`, 2 / (Math.max(parseInt(`${tumbnailJ}`), 4))]]);
      logoP -= parseInt(`${sheet6}`);

    setShowAdOverlay(true);

       let greenj = true;
       let away6: Array<any> = [String.fromCharCode(107,95,56,53,95,109,98,99,109,112,0), String.fromCharCode(115,99,97,110,110,105,110,103,95,48,95,57,48,0)];
         greenj = away6.includes(greenj);
      if (4 >= away6.length) {
         away6.push(2);
      }
      if (away6.length == 4 || (4 & away6.length) == 5) {
         away6 = [3];
      }
         greenj = away6.includes(greenj);
         away6.push(1 & away6.length);
          let description_fv = 0;
          let activeX: Array<any> = [518, 232, 822];
         away6.push(1);
         description_fv <<= Math.min(4, activeX.length);
         activeX = [description_fv / (Math.max(10, activeX.length))];
      logoP |= ((greenj ? 4 : 4) - 2);
      emptyN = new Map([[`${teamZ}`, parseInt(`${teamZ}`) >> (Math.min(Math.abs(1), 5))]]);
   for (let l = 0; l < 3; l++) {
       let moviesv: Map<any, any> = new Map([[String.fromCharCode(110,101,105,103,104,98,111,114,115,95,102,95,52,50,0),String.fromCharCode(115,112,101,99,105,97,108,95,50,95,52,56,0)], [String.fromCharCode(109,105,100,108,95,117,95,56,54,0),String.fromCharCode(101,95,55,56,95,111,111,117,114,97,0)], [String.fromCharCode(110,95,50,54,95,99,109,121,107,0),String.fromCharCode(103,95,53,48,95,112,97,99,107,101,116,0)]]);
       let tumbnailP = 5;
       let chart3 = String.fromCharCode(115,112,97,99,101,115,95,113,95,50,0);
       let paginationa: Map<any, any> = new Map([[String.fromCharCode(109,95,54,52,95,112,105,99,116,0),String.fromCharCode(116,95,50,48,95,100,115,116,114,101,97,109,0)], [String.fromCharCode(97,116,116,105,98,117,116,101,115,95,57,95,53,51,0),String.fromCharCode(102,95,53,53,95,99,97,117,115,101,0)], [String.fromCharCode(99,111,118,97,108,101,110,116,95,49,95,51,57,0),String.fromCharCode(102,95,56,53,95,110,101,105,103,104,98,111,117,114,115,0)]]);
       let componentb = 3.0;
         paginationa.set(`${chart3}`, paginationa.size / (Math.max(chart3.length, 6)));
          let humidityU: Array<any> = [618, 228, 798];
         moviesv.set(`${componentb}`, parseInt(`${componentb}`) % (Math.max(7, moviesv.size)));
         humidityU.push(2);
         chart3 = `${chart3.length - 1}`;
         chart3 = `${tumbnailP / (Math.max(2, 7))}`;
          let clubs: Array<any> = [147, 557];
         tumbnailP &= chart3.length;
         clubs = [3 << (Math.min(1, clubs.length))];
      if (1 < (tumbnailP % (Math.max(paginationa.size, 7))) || 1 < (tumbnailP % (Math.max(paginationa.size, 8)))) {
         tumbnailP |= parseInt(`${componentb}`) / (Math.max(paginationa.size, 6));
      }
      while (4 > (4 - tumbnailP)) {
          let downK = 4;
          let downloadingE = String.fromCharCode(115,121,110,99,109,97,114,107,101,114,95,52,95,49,54,0);
          let confirmation4: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,101,100,101,110,99,101,95,105,95,49,56,0),18], [String.fromCharCode(99,104,97,110,103,101,114,95,105,95,50,57,0),701]]);
          let tempN = String.fromCharCode(115,101,108,102,95,106,95,49,53,0);
         chart3 += `${moviesv.size}`;
         downK *= confirmation4.size;
         downloadingE = `${downloadingE.length}`;
         confirmation4.set(`${downK}`, 2 ^ downloadingE.length);
         tempN = `${tempN.length * confirmation4.size}`;
         break;
      }
      if (1 > (moviesv.size << (Math.min(2, Math.abs(tumbnailP)))) && 2 > (1 << (Math.min(5, Math.abs(moviesv.size))))) {
         tumbnailP <<= Math.min(2, Math.abs(2 | chart3.length));
      }
      for (let s = 0; s < 3; s++) {
          let scopy_2lg: Array<any> = [170, 825, 647];
          let detailsU = String.fromCharCode(99,109,97,99,95,51,95,52,0);
         paginationa = new Map([[`${paginationa.size}`, parseInt(`${componentb}`) / (Math.max(3, paginationa.size))]]);
         scopy_2lg = [(String.fromCharCode(100,0) == detailsU ? detailsU.length : scopy_2lg.length)];
      }
      while ((paginationa.size ^ 3) > 2 || (paginationa.size + parseInt(`${componentb}`)) > 3) {
         componentb *= parseFloat(`${chart3.length}`);
         break;
      }
          let confirmationa = String.fromCharCode(113,95,54,52,95,100,109,97,98,117,102,0);
          let smallg = true;
         chart3 = `${1 << (Math.min(5, confirmationa.length))}`;
      let viewsm = 9026643.0 <= componentb;
      do {
         componentb /= Math.max(3, parseFloat(`${paginationa.size}`));
         if (viewsm) {
            break;
         }
      } while (viewsm && (Array.from(paginationa.values()).includes(componentb)));
      for (let q = 0; q < 3; q++) {
         tumbnailP %= Math.max(2, tumbnailP / 2);
      }
          let configureh = String.fromCharCode(97,95,51,48,95,114,101,102,108,101,99,116,105,111,110,0);
          let cleart = String.fromCharCode(111,95,50,95,115,119,115,99,97,108,101,114,101,115,0);
          let moreK: Array<any> = [String.fromCharCode(105,110,115,101,114,116,101,100,95,122,95,56,56,0), String.fromCharCode(98,95,54,57,95,108,105,98,97,118,102,105,108,116,101,114,0)];
         paginationa.set(configureh, parseInt(`${componentb}`) + 3);
         configureh += `${1 | moreK.length}`;
         cleart = `${moreK.length % (Math.max(cleart.length, 5))}`;
      for (let s = 0; s < 3; s++) {
          let screen1: Array<any> = [940, 839, 522];
          let contexte = 2;
          let promotione = 3.0;
          let sendx = String.fromCharCode(114,97,103,103,97,98,108,101,95,111,95,55,53,0);
         paginationa = new Map([[`${paginationa.size}`, tumbnailP]]);
         screen1 = [sendx.length % (Math.max(3, 1))];
         contexte += screen1.length;
         promotione /= Math.max(1, parseFloat(`${sendx.length - 1}`));
      }
      sheet6 *= parseFloat(`${chart3.length + 2}`);
   }
   while (4 > (clear3.size * 4) || (clear3.size * emptyN.size) > 4) {
      clear3.set(`${calendarT}`, emptyN.size);
      break;
   }
       let eact_ = String.fromCharCode(100,95,50,48,95,97,117,110,105,110,105,116,0);
       let type_aC = false;
          let animationK = 1;
         type_aC = animationK >= 80;
      for (let a = 0; a < 2; a++) {
          let episodes = String.fromCharCode(99,111,114,100,122,95,49,95,55,56,0);
          let leagueg = 2;
          let appsO = String.fromCharCode(100,95,49,50,95,101,120,101,99,117,116,105,110,103,0);
         eact_ += `${((type_aC ? 5 : 1) | 3)}`;
         episodes = `${leagueg}`;
         leagueg ^= appsO.length ^ leagueg;
         appsO = `${appsO.length - 3}`;
      }
         eact_ += `${((type_aC ? 5 : 4))}`;
          let descU: Map<any, any> = new Map([[String.fromCharCode(109,95,57,49,95,114,101,105,110,105,116,0),938], [String.fromCharCode(100,97,115,104,101,115,95,48,95,56,57,0),839]]);
          let whiteq: Array<any> = [14, 770, 281];
         type_aC = eact_.endsWith(`${type_aC}`);
         descU.set(`${whiteq.length}`, descU.size);
         whiteq.push(descU.size - whiteq.length);
       let penaltyK = String.fromCharCode(106,95,54,56,95,115,101,116,102,100,0);
       let googlei = String.fromCharCode(118,95,52,57,95,115,116,111,112,101,100,0);
      for (let p = 0; p < 2; p++) {
          let containerV = String.fromCharCode(105,95,49,48,48,95,116,103,115,0);
         eact_ = `${eact_.length}`;
         containerV += "1";
      }
      emptyN = new Map([[`${type_aC}`, ((type_aC ? 3 : 2) + parseInt(`${heartE}`))]]);
      sheet6 -= parseFloat(`${emptyN.size}`);
      calendarT = String.fromCharCode(117,0) == leagueS;
   if (leagueS.startsWith(`${calendarT}`)) {
      leagueS = `${((storeV ? 2 : 2) % (Math.max(1, clear3.size)))}`;
   }
       let turnT = String.fromCharCode(109,95,56,49,95,114,101,109,97,105,110,105,110,103,0);
       let episodeb = String.fromCharCode(109,101,115,115,97,103,101,95,118,95,54,53,0);
       let reporto = String.fromCharCode(121,95,56,57,95,101,120,116,109,97,112,0);
      while (turnT.length == 3) {
          let hongkongi = String.fromCharCode(122,95,50,50,95,97,110,99,105,108,108,97,114,121,0);
          let upload_ = String.fromCharCode(116,114,105,97,110,103,108,101,115,95,105,95,54,52,0);
         turnT += `${turnT.length}`;
         hongkongi += `${upload_.length | 3}`;
         upload_ = `${(hongkongi == String.fromCharCode(111,0) ? hongkongi.length : upload_.length)}`;
         break;
      }
         reporto = `${turnT.length}`;
          let carouselJ = 3.0;
          let successN = true;
          let field_ = String.fromCharCode(97,95,55,54,95,105,110,116,101,114,112,114,101,116,0);
         turnT += `${parseInt(`${carouselJ}`) * episodeb.length}`;
         carouselJ *= parseFloat(`${field_.length}`);
         successN = field_.startsWith(`${successN}`);
      while (3 >= episodeb.length) {
         episodeb += `${2 + episodeb.length}`;
         break;
      }
      let logoutK = 7728535 >= episodeb.length;
      do {
         episodeb += "3";
         if (logoutK) {
            break;
         }
      } while (logoutK && (1 > episodeb.length && turnT.length > 1));
          let typess = 0;
          let sheetm = String.fromCharCode(108,111,97,100,105,110,103,95,120,95,54,49,0);
          let adultg = String.fromCharCode(121,95,52,56,95,100,100,114,97,110,103,101,0);
         episodeb = `${episodeb.length}`;
         typess -= adultg.length * 3;
         sheetm += `${typess | sheetm.length}`;
         adultg += `${adultg.length + 2}`;
         reporto += `${reporto.length * 1}`;
      let actionn = episodeb.length <= 7182653;
      do {
         episodeb += `${reporto.length}`;
         if (actionn) {
            break;
         }
      } while ((turnT.length <= episodeb.length) && actionn);
          let downO = 5.0;
          let disconnectedR = String.fromCharCode(118,95,54,48,95,117,110,116,121,112,101,100,0);
          let episodeX = String.fromCharCode(99,111,110,115,116,114,117,99,116,95,50,95,56,55,0);
         episodeb += "3";
         downO -= parseInt(`${downO}`);
         disconnectedR = `${episodeX.length}`;
         episodeX = `${3 / (Math.max(1, episodeX.length))}`;
      teamZ -= inviteN.length;
   if (3 >= (emptyN.size * 2)) {
      emptyN.set(gmails, gmails.length);
   }
      teamZ *= 3;
       let dragU: Map<any, any> = new Map([[String.fromCharCode(121,95,51,95,99,108,101,97,110,0),103], [String.fromCharCode(119,95,57,56,95,97,103,103,114,101,103,97,116,101,0),932]]);
       let nativex = String.fromCharCode(118,99,114,101,97,116,101,95,122,95,50,49,0);
       let paginationW = 5.0;
      let appsc = paginationW <= 8137235.0;
      do {
         paginationW *= 3 & dragU.size;
         if (appsc) {
            break;
         }
      } while ((Array.from(dragU.keys()).includes(`${paginationW}`)) && appsc);
         nativex = "3";
          let actionsZ = true;
          let controlf = 1.0;
         paginationW += 1 & parseInt(`${paginationW}`);
         actionsZ = !actionsZ;
         controlf -= ((actionsZ ? 5 : 4) / (Math.max(4, parseInt(`${controlf}`))));
      for (let z = 0; z < 1; z++) {
         dragU = new Map([[`${dragU.size}`, dragU.size / (Math.max(4, nativex.length))]]);
      }
      let recommendation3 = dragU.size >= 7992595;
      do {
         dragU = new Map([[`${dragU.size}`, dragU.size + 2]]);
         if (recommendation3) {
            break;
         }
      } while (recommendation3 && ((1 & nativex.length) >= 2));
      let connectionJ = 8865300 >= dragU.size;
      do {
         dragU = new Map([[`${paginationW}`, 2]]);
         if (connectionJ) {
            break;
         }
      } while (connectionJ && (nativex.includes(`${dragU.size}`)));
      if (2 <= nativex.length) {
         nativex += `${dragU.size}`;
      }
          let roomw = 2;
         dragU.set(`${roomw}`, parseInt(`${paginationW}`) << (Math.min(5, Math.abs(2))));
          let twitterZ = false;
          let container7 = String.fromCharCode(119,111,114,107,101,114,95,120,95,48,0);
          let borderlessy = 2;
         nativex = `${borderlessy}`;
         twitterZ = container7.startsWith(`${twitterZ}`);
         container7 = "3";
         borderlessy *= (String.fromCharCode(102,0) == container7 ? container7.length : (twitterZ ? 1 : 5));
      sheet6 /= Math.max(parseFloat(`${parseInt(`${tumbnailJ}`) >> (Math.min(4, Math.abs(2)))}`), 1);
      sheet6 -= parseFloat(`${parseInt(`${heartE}`) >> (Math.min(3, Math.abs(1)))}`);
      leagueS += `${clear3.size}`;
      leagueS = `${(parseInt(`${video4}`) & (calendarT ? 4 : 2))}`;
      storeV = (logoP / (Math.max(9, emptyN.size))) >= 59;
      storeV = inviteN.length > 41;
    videoPlayerRef.current?.setPause(true);
  };

  const onCloseAdOverlay = () => {
       let countryy = String.fromCharCode(122,95,56,95,119,101,98,102,105,108,101,0);
    let bottomP: Array<any> = [353, 573];
    let trashW = String.fromCharCode(104,101,97,100,115,101,116,95,49,95,51,57,0);
    let smallh = String.fromCharCode(112,101,97,99,104,95,120,95,52,49,0);
    let str9 = String.fromCharCode(100,101,97,99,116,105,118,97,116,101,100,95,52,95,54,48,0);
    let filledl = String.fromCharCode(105,99,111,110,105,102,105,101,100,95,98,95,49,52,0);
    let playh = 3.0;
    let upgradeV: Array<any> = [761, 714];
    let description_lm = false;
    let placeholder8 = String.fromCharCode(99,104,101,99,107,115,117,109,115,95,113,95,54,55,0);
    let plusz = 5.0;
       let referrerD = String.fromCharCode(112,97,105,100,95,50,95,54,55,0);
         referrerD = `${(String.fromCharCode(69,0) == referrerD ? referrerD.length : referrerD.length)}`;
         referrerD = `${referrerD.length + 3}`;
          let k_unlock0 = 1.0;
         referrerD += `${parseInt(`${k_unlock0}`)}`;
      bottomP.push((str9 == String.fromCharCode(49,0) ? str9.length : bottomP.length));
       let spinnerY: Map<any, any> = new Map([[String.fromCharCode(100,105,118,105,115,105,111,110,95,106,95,52,50,0),478], [String.fromCharCode(111,112,116,105,109,105,122,101,100,95,55,95,56,51,0),93]]);
       let rewind_ = 0.0;
       let filed1 = String.fromCharCode(115,116,97,114,116,95,121,95,52,50,0);
      if (3 <= (spinnerY.size ^ 3) && (filed1.length ^ spinnerY.size) <= 3) {
         spinnerY = new Map([[`${rewind_}`, parseInt(`${rewind_}`)]]);
      }
       let suggestionR = String.fromCharCode(100,101,109,117,120,101,114,115,95,110,95,56,51,0);
       let alertT = String.fromCharCode(108,97,117,110,99,104,95,97,95,51,49,0);
      let middle7 = String.fromCharCode(114,100,56,110,117,51,0) == alertT;
      do {
         alertT = `${spinnerY.size % (Math.max(filed1.length, 1))}`;
         if (middle7) {
            break;
         }
      } while ((5.97 > (rewind_ * parseFloat(`${alertT.length}`))) && middle7);
      while (alertT.endsWith(suggestionR)) {
         suggestionR += `${(filed1 == String.fromCharCode(78,0) ? filed1.length : spinnerY.size)}`;
         break;
      }
         rewind_ += parseFloat(`${suggestionR.length + 1}`);
       let moviesG = String.fromCharCode(99,117,100,97,115,99,97,108,101,95,107,95,53,48,0);
       let private_vcf = String.fromCharCode(98,111,117,110,99,101,95,111,95,54,57,0);
      for (let p = 0; p < 1; p++) {
          let ocopy_bU = 2.0;
          let whistlec: Array<any> = [35, 776];
          let screenf = String.fromCharCode(109,105,109,105,99,95,109,95,51,57,0);
          let k_positionq = String.fromCharCode(101,95,48,95,112,97,103,101,110,117,109,98,101,114,0);
         suggestionR += `${alertT.length}`;
         ocopy_bU /= Math.max(3, screenf.length);
         whistlec = [screenf.length << (Math.min(Math.abs(1), 5))];
         k_positionq += `${screenf.length}`;
      }
      while (suggestionR.length >= alertT.length) {
          let dice3 = 3.0;
          let spinnerv: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,105,103,117,114,97,116,111,114,95,120,95,54,0),366], [String.fromCharCode(110,116,104,95,119,95,49,54,0),931]]);
         alertT = `${parseInt(`${rewind_}`) << (Math.min(Math.abs(2), 4))}`;
         dice3 *= parseFloat(`${spinnerv.size - parseInt(`${dice3}`)}`);
         spinnerv = new Map([[`${spinnerv.size}`, 3]]);
         break;
      }
          let changeq = false;
         private_vcf = `${1 - parseInt(`${rewind_}`)}`;
         changeq = (changeq ? changeq : changeq);
      str9 = `${filledl.length}`;
      smallh = `${(String.fromCharCode(88,0) == filledl ? filledl.length : str9.length)}`;
   while (2 < (upgradeV.length + countryy.length) || (2 + countryy.length) < 2) {
      upgradeV = [bottomP.length - smallh.length];
      break;
   }
      countryy = `${str9.length}`;
      playh += (parseFloat(`${String.fromCharCode(78,0) == trashW ? upgradeV.length : trashW.length}`));
      upgradeV = [str9.length >> (Math.min(2, upgradeV.length))];
      filledl += `${1 << (Math.min(3, filledl.length))}`;
   let sourceH = smallh == String.fromCharCode(107,50,97,57,95,98,0);
   do {
      smallh = `${smallh.length}`;
      if (sourceH) {
         break;
      }
   } while (sourceH && (filledl.length >= smallh.length));
   while (filledl == String.fromCharCode(102,0) && trashW == String.fromCharCode(121,0)) {
      filledl += `${bottomP.length}`;
      break;
   }
   for (let h = 0; h < 2; h++) {
       let popupn = String.fromCharCode(101,95,54,55,95,109,97,107,101,102,105,108,101,0);
       let close5 = String.fromCharCode(122,95,56,57,95,118,105,115,117,97,108,0);
       let emojiw = String.fromCharCode(121,95,56,57,95,101,110,99,108,97,118,101,0);
       let delegate_d5Z: Array<any> = [698, 849, 458];
      while (emojiw == popupn) {
         popupn += `${popupn.length}`;
         break;
      }
      while (5 >= emojiw.length || 5 >= close5.length) {
         emojiw += `${1 - emojiw.length}`;
         break;
      }
      if (!emojiw.includes(`${delegate_d5Z.length}`)) {
          let membershipi = 0.0;
          let pageK = true;
         emojiw = "2";
         membershipi -= parseFloat(`${3 & parseInt(`${membershipi}`)}`);
         pageK = !pageK;
      }
      let backwards = String.fromCharCode(97,122,119,98,54,52,102,100,0) == popupn;
      do {
         popupn += `${(popupn == String.fromCharCode(101,0) ? popupn.length : close5.length)}`;
         if (backwards) {
            break;
         }
      } while ((!close5.includes(popupn)) && backwards);
         emojiw = `${(emojiw == String.fromCharCode(67,0) ? delegate_d5Z.length : emojiw.length)}`;
         close5 = `${close5.length & 2}`;
          let updatesf = 4.0;
          let minim = String.fromCharCode(109,95,57,56,95,103,101,110,115,0);
         delegate_d5Z.push(2 | popupn.length);
         updatesf *= parseFloat(`${minim.length}`);
         minim = `${minim.length}`;
         close5 += `${(popupn == String.fromCharCode(104,0) ? delegate_d5Z.length : popupn.length)}`;
       let grayl = 4.0;
       let recommendationO = 2.0;
      if ((delegate_d5Z.length * recommendationO) <= 1.34 && 5.77 <= (1.34 * recommendationO)) {
          let expiredU = String.fromCharCode(109,97,120,105,109,117,109,95,50,95,51,57,0);
          let inviteq = 4;
          let loadingp = String.fromCharCode(112,95,52,48,95,102,114,101,113,115,0);
          let rightS = String.fromCharCode(110,95,54,52,95,97,117,116,104,101,110,116,105,99,97,116,101,0);
          let moon0 = String.fromCharCode(118,95,52,54,95,101,120,101,99,117,116,97,98,108,101,0);
         recommendationO += 3 & parseInt(`${grayl}`);
         expiredU += `${moon0.length | 1}`;
         inviteq |= 2 | inviteq;
         loadingp = `${expiredU.length * inviteq}`;
         rightS += `${inviteq / (Math.max(1, expiredU.length))}`;
         moon0 = `${rightS.length | expiredU.length}`;
      }
      let tickedq = emojiw.length >= 7240485;
      do {
         emojiw += `${parseInt(`${recommendationO}`) % (Math.max(9, delegate_d5Z.length))}`;
         if (tickedq) {
            break;
         }
      } while ((!emojiw.startsWith(`${delegate_d5Z.length}`)) && tickedq);
      while ((close5.length + parseInt(`${grayl}`)) == 4) {
          let emojir = String.fromCharCode(121,95,53,53,95,101,110,116,101,114,105,110,103,0);
         close5 = `${emojiw.length}`;
         emojir += `${emojir.length | emojir.length}`;
         break;
      }
      bottomP = [bottomP.length & delegate_d5Z.length];
   }
       let fillp = String.fromCharCode(121,95,51,49,95,97,110,110,111,116,97,116,101,0);
       let goalf: Map<any, any> = new Map([[String.fromCharCode(109,117,116,97,116,105,110,103,95,114,95,52,53,0),899], [String.fromCharCode(115,105,109,112,108,101,115,105,103,110,97,108,95,117,95,53,52,0),991], [String.fromCharCode(118,97,114,105,97,98,108,101,115,95,114,95,55,57,0),131]]);
       let streamingp = 2;
         fillp += `${goalf.size}`;
         goalf = new Map([[`${goalf.size}`, goalf.size | 3]]);
      if (5 <= (3 & goalf.size) || 3 <= (streamingp & goalf.size)) {
          let saveS: Array<any> = [952, 273];
         streamingp <<= Math.min(4, Math.abs(saveS.length * 2));
      }
      while (1 == (streamingp / (Math.max(goalf.size, 9)))) {
         goalf.set(`${streamingp}`, fillp.length);
         break;
      }
          let containerQ = 0;
         fillp = `${goalf.size ^ 2}`;
         containerQ %= Math.max(containerQ, 2);
      if (2 <= (goalf.size % (Math.max(fillp.length, 1))) && (fillp.length % (Math.max(2, 6))) <= 5) {
          let privacy0 = true;
          let qnewsj: Map<any, any> = new Map([[String.fromCharCode(115,116,100,101,114,114,95,111,95,55,55,0),110], [String.fromCharCode(114,95,54,50,95,101,114,114,99,111,100,101,0),413], [String.fromCharCode(108,101,110,103,116,104,115,95,102,95,54,0),196]]);
         goalf = new Map([[`${goalf.size}`, 1]]);
         privacy0 = null != qnewsj.get(`${privacy0}`);
         qnewsj = new Map([[`${qnewsj.size}`, 3]]);
      }
      let fastforwardQ = fillp == String.fromCharCode(111,55,48,104,54,50,0);
      do {
         fillp += `${(String.fromCharCode(105,0) == fillp ? goalf.size : fillp.length)}`;
         if (fastforwardQ) {
            break;
         }
      } while (fastforwardQ && (5 < goalf.size));
       let indexf = String.fromCharCode(110,95,56,49,95,99,97,114,100,115,0);
      for (let c = 0; c < 2; c++) {
         indexf += "1";
      }
      countryy = `${upgradeV.length << (Math.min(fillp.length, 4))}`;

    setShowAdOverlay(false);

   while (smallh.endsWith(str9)) {
      str9 = `${(String.fromCharCode(122,0) == filledl ? parseInt(`${playh}`) : filledl.length)}`;
      break;
   }
      bottomP = [parseInt(`${playh}`) + bottomP.length];
      filledl = "3";
   if (1 < smallh.length) {
       let delegate_u_s = String.fromCharCode(101,95,56,50,95,100,98,115,105,122,101,0);
       let fastforwardF = String.fromCharCode(118,97,100,107,104,122,95,51,95,49,54,0);
       let frame_y3 = String.fromCharCode(105,110,115,117,102,102,105,99,105,101,110,116,95,102,95,52,56,0);
      while (5 <= delegate_u_s.length) {
         fastforwardF = "1";
         break;
      }
          let adultE = String.fromCharCode(101,121,101,95,106,95,51,56,0);
         fastforwardF = `${1 & delegate_u_s.length}`;
         adultE = `${1 >> (Math.min(4, adultE.length))}`;
         fastforwardF += `${fastforwardF.length}`;
         delegate_u_s += `${frame_y3.length & fastforwardF.length}`;
      for (let e = 0; e < 2; e++) {
          let hoverJ: Array<any> = [166, 470, 927];
          let dataE = 3.0;
          let guide4 = 1;
          let hongkongx = 1.0;
          let zhubom: Array<any> = [826, 118, 292];
         delegate_u_s += `${parseInt(`${dataE}`)}`;
         hoverJ.push(hoverJ.length);
         dataE *= parseFloat(`${guide4}`);
         guide4 |= zhubom.length;
         hongkongx -= hoverJ.length + 2;
         zhubom = [guide4 ^ parseInt(`${hongkongx}`)];
      }
      for (let g = 0; g < 2; g++) {
         fastforwardF = `${1 | frame_y3.length}`;
      }
      for (let e = 0; e < 3; e++) {
         delegate_u_s = `${frame_y3.length}`;
      }
          let viewerz: Map<any, any> = new Map([[String.fromCharCode(99,111,118,101,114,97,103,101,95,57,95,50,52,0),String.fromCharCode(101,120,112,108,111,100,105,110,103,95,57,95,57,48,0)], [String.fromCharCode(103,101,110,97,110,110,95,108,95,54,53,0),String.fromCharCode(100,101,118,112,111,108,108,95,107,95,52,49,0)], [String.fromCharCode(114,95,57,52,95,117,110,98,108,111,99,107,105,110,103,0),String.fromCharCode(115,99,97,110,115,95,101,95,57,55,0)]]);
         frame_y3 += `${frame_y3.length >> (Math.min(4, Math.abs(viewerz.size)))}`;
       let aboutk = 5;
      smallh += `${filledl.length}`;
   }
      upgradeV = [(String.fromCharCode(49,0) == str9 ? str9.length : parseInt(`${playh}`))];
   if (trashW.length == 4) {
      upgradeV.push(smallh.length | 1);
   }
   if (countryy.length == 5) {
      countryy = "2";
   }
      countryy = `${bottomP.length}`;
       let episodes9 = String.fromCharCode(107,95,51,56,95,112,101,114,115,105,115,116,101,100,0);
       let favicon1 = 5.0;
         favicon1 -= (parseFloat(`${episodes9 == String.fromCharCode(82,0) ? parseInt(`${favicon1}`) : episodes9.length}`));
         favicon1 += parseFloat(`${episodes9.length}`);
          let profileO: Array<any> = [576, 326, 985];
          let memberJ = false;
         episodes9 = `${profileO.length}`;
         profileO.push(((memberJ ? 4 : 5) >> (Math.min(3, Math.abs((memberJ ? 1 : 1))))));
       let nalyticsX = 1.0;
       let spinners = 5.0;
       let castingx = 0.0;
       let emojie = 5.0;
      while (5.72 == favicon1) {
         favicon1 -= parseFloat(`${2 % (Math.max(1, parseInt(`${emojie}`)))}`);
         break;
      }
      str9 += "1";
   for (let o = 0; o < 1; o++) {
      playh /= Math.max(1, parseFloat(`${parseInt(`${playh}`)}`));
   }
   while ((3 & trashW.length) >= 5 && (3 & trashW.length) >= 5) {
      bottomP = [bottomP.length << (Math.min(3, Math.abs(parseInt(`${playh}`))))];
      break;
   }
       let liveq = 1;
         liveq *= liveq;
       let favoritez = String.fromCharCode(121,95,57,56,95,118,102,114,101,101,0);
          let clockH = true;
          let h_lockz = 2.0;
         favoritez += `${liveq}`;
         clockH = 65.35 < h_lockz;
         h_lockz /= Math.max(1 % (Math.max(parseInt(`${h_lockz}`), 7)), 2);
      filledl = `${bottomP.length}`;
    videoPlayerRef.current?.setPause(false);
  };

  const isEpisodeDownloaded = adultMode
    ? downloadedVod?.episodes.find((x) => x.vodUrlNid === currentEpisode)
      ?.status === RAccepted.RClearModels
    : downloadedVod?.episodes.find(
      (x) =>
        x.vodSourceId === currentSourceId && x.vodUrlNid === currentEpisode
    )?.status === RAccepted.RClearModels;

  
  
  

  const getPosition = () => {
       let storeZ = String.fromCharCode(118,95,55,49,95,112,111,115,116,105,111,110,0);
    let strq: Array<any> = [165, 942, 296];
    let tnewsx = 4;
    let heartQ = String.fromCharCode(100,101,112,101,110,100,101,110,99,121,95,117,95,49,56,0);
    let downloadingk: Map<any, any> = new Map([[String.fromCharCode(112,111,116,105,115,105,111,110,95,104,95,52,51,0),529], [String.fromCharCode(100,110,115,110,97,109,101,95,114,95,51,0),654], [String.fromCharCode(97,116,99,104,101,114,95,116,95,50,48,0),727]]);
    let relatedb: Array<any> = [183, 843, 308];
    let halfV = String.fromCharCode(111,118,101,114,115,99,114,111,108,108,95,111,95,49,51,0);
    let langkeyq = String.fromCharCode(109,115,114,108,101,100,101,99,95,53,95,52,56,0);
    let backgroundJ = 2.0;
    let progress0 = String.fromCharCode(117,95,56,54,95,105,100,101,110,116,105,102,105,101,114,115,0);
    let moviesv = String.fromCharCode(102,115,101,101,107,95,101,95,50,51,0);
    let penaltyv = String.fromCharCode(101,95,49,49,95,100,97,118,100,0);
    let singleh = String.fromCharCode(110,95,50,49,95,97,98,115,111,108,117,116,101,0);
      downloadingk.set(heartQ, heartQ.length / 3);
      downloadingk.set(`${relatedb.length}`, relatedb.length << (Math.min(Math.abs(1), 2)));
      heartQ = "1";
      strq = [2 - progress0.length];

    if (componentRef.current != null) {

      relatedb.push(2);
   while ((5 >> (Math.min(4, relatedb.length))) < 1 || (5 >> (Math.min(1, heartQ.length))) < 2) {
      relatedb = [3];
      break;
   }
       let relatedE = 0.0;
       let gmailM: Map<any, any> = new Map([[String.fromCharCode(99,101,110,116,101,114,95,51,95,51,52,0),false ], [String.fromCharCode(119,95,51,55,95,114,101,104,97,115,104,0),true ], [String.fromCharCode(102,108,111,97,116,115,104,111,114,116,95,111,95,56,55,0),false ]]);
       let nalyticsz = String.fromCharCode(105,95,54,50,95,116,114,97,110,115,105,116,105,111,110,105,110,103,0);
         gmailM = new Map([[`${gmailM.size}`, gmailM.size >> (Math.min(Math.abs(2), 2))]]);
      let fieldK = 9046898 >= nalyticsz.length;
      do {
         nalyticsz = `${nalyticsz.length ^ 1}`;
         if (fieldK) {
            break;
         }
      } while ((1 >= (1 | nalyticsz.length)) && fieldK);
          let rightO: Array<any> = [863, 306, 833];
          let gestureP = String.fromCharCode(103,95,52,55,95,109,97,116,114,105,120,102,0);
         gmailM = new Map([[`${gmailM.size}`, nalyticsz.length]]);
         rightO = [rightO.length];
         gestureP = `${gestureP.length & rightO.length}`;
          let sound3 = 3.0;
          let telegramG = String.fromCharCode(116,95,52,53,95,100,109,105,120,0);
          let whitec: Array<any> = [171, 404, 104];
         nalyticsz += `${telegramG.length & 1}`;
         sound3 /= Math.max(1 + whitec.length, 2);
         telegramG = `${3 - parseInt(`${sound3}`)}`;
         whitec.push(2 * whitec.length);
      while (2 == (nalyticsz.length ^ gmailM.size) && 2 == (gmailM.size ^ nalyticsz.length)) {
         gmailM = new Map([[`${gmailM.size}`, gmailM.size % (Math.max(nalyticsz.length, 4))]]);
         break;
      }
      let actionsS = 8689369 <= gmailM.size;
      do {
         gmailM.set(`${relatedE}`, parseInt(`${relatedE}`) ^ 3);
         if (actionsS) {
            break;
         }
      } while ((2 == (parseInt(`${relatedE}`) * gmailM.size) || (gmailM.size * parseInt(`${relatedE}`)) == 2) && actionsS);
      while (gmailM.get(`${relatedE}`) == null) {
          let editD = 4.0;
          let modeF = String.fromCharCode(108,105,98,112,104,111,110,101,110,117,109,98,101,114,95,118,95,50,50,0);
          let shown = 5.0;
          let pingJ = String.fromCharCode(122,95,56,57,95,116,105,108,108,0);
         relatedE += nalyticsz.length - parseInt(`${editD}`);
         editD += (parseFloat(`${String.fromCharCode(98,0) == modeF ? modeF.length : parseInt(`${shown}`)}`));
         shown /= Math.max(2, parseFloat(`${pingJ.length << (Math.min(modeF.length, 3))}`));
         pingJ = `${1 >> (Math.min(3, modeF.length))}`;
         break;
      }
      let targetX = gmailM.size >= 9451765;
      do {
         gmailM = new Map([[`${gmailM.size}`, nalyticsz.length * 1]]);
         if (targetX) {
            break;
         }
      } while (targetX && (relatedE == 3.8));
      let weibo9 = nalyticsz.length >= 5295017;
      do {
          let xvods = 2.0;
         nalyticsz = "3";
         xvods /= Math.max(5, parseInt(`${xvods}`));
         if (weibo9) {
            break;
         }
      } while (weibo9 && ((1 - nalyticsz.length) == 1));
      backgroundJ -= (String.fromCharCode(103,0) == moviesv ? storeZ.length : moviesv.length);
   if (progress0 == storeZ) {
       let readh = 0.0;
       let terms5 = String.fromCharCode(99,97,114,101,116,95,54,95,50,54,0);
       let loadingV = 4;
       let relatedO = false;
       let indicatorL = 4.0;
         readh *= parseFloat(`${1 ^ parseInt(`${readh}`)}`);
          let long_c6 = true;
         readh *= parseFloat(`${1 & parseInt(`${indicatorL}`)}`);
         long_c6 = (!long_c6 ? long_c6 : !long_c6);
      for (let r = 0; r < 3; r++) {
          let countdowno = 0.0;
          let crossy = 4.0;
          let morec = String.fromCharCode(99,95,57,56,95,112,111,112,117,112,115,0);
          let q_player8 = 2;
         readh += (parseFloat(`${String.fromCharCode(98,0) == terms5 ? (relatedO ? 3 : 5) : terms5.length}`));
         countdowno += parseFloat(`${parseInt(`${crossy}`) & 2}`);
         crossy += parseFloat(`${q_player8 ^ 2}`);
         morec = `${(morec == String.fromCharCode(105,0) ? morec.length : parseInt(`${countdowno}`))}`;
         q_player8 >>= Math.min(Math.abs(parseInt(`${countdowno}`)), 1);
      }
      for (let b = 0; b < 2; b++) {
         loadingV %= Math.max(1 + parseInt(`${readh}`), 4);
      }
          let fillf: Map<any, any> = new Map([[String.fromCharCode(121,95,53,51,95,101,120,99,108,117,115,105,111,110,115,0),String.fromCharCode(105,103,110,111,114,101,95,121,95,53,52,0)], [String.fromCharCode(115,101,113,117,101,110,99,101,95,103,95,53,52,0),String.fromCharCode(112,114,111,99,95,113,95,52,52,0)], [String.fromCharCode(114,101,116,117,114,110,105,110,103,95,50,95,57,50,0),String.fromCharCode(117,95,52,55,95,99,109,97,107,101,0)]]);
          let resultz = 2.0;
          let greyW = 3.0;
         loadingV %= Math.max(1, 3);
         fillf = new Map([[`${resultz}`, 3]]);
         resultz *= parseInt(`${resultz}`) * parseInt(`${greyW}`);
         greyW -= 1 * fillf.size;
      for (let n = 0; n < 2; n++) {
          let watchZ = 4;
          let linkK = 5;
          let roomR = String.fromCharCode(97,95,52,49,95,97,117,116,104,111,114,105,122,101,0);
          let episodeQ = String.fromCharCode(115,113,108,105,116,101,115,101,115,115,105,111,110,95,110,95,50,50,0);
         readh += parseFloat(`${3}`);
         watchZ |= 1 - linkK;
         linkK >>= Math.min(Math.abs(1 ^ linkK), 2);
         roomR += "3";
         episodeQ += `${(roomR == String.fromCharCode(67,0) ? linkK : roomR.length)}`;
      }
         relatedO = (((!relatedO ? 38 : terms5.length) >> (Math.min(terms5.length, 4))) >= 38);
      while (terms5.endsWith(`${relatedO}`)) {
          let renewR: Map<any, any> = new Map([[String.fromCharCode(108,95,56,95,119,121,99,104,101,112,114,111,111,102,0),598], [String.fromCharCode(111,95,50,48,95,98,117,102,108,101,110,0),622]]);
          let arear: Array<any> = [324, 488];
          let otherI = 4.0;
          let whistlep = String.fromCharCode(114,111,108,108,98,97,99,107,95,116,95,53,55,0);
         relatedO = indicatorL <= 27.62;
         renewR = new Map([[`${renewR.size}`, renewR.size % 2]]);
         arear.push(3);
         otherI /= Math.max(1, arear.length | parseInt(`${otherI}`));
         whistlep += `${whistlep.length ^ renewR.size}`;
         break;
      }
         indicatorL += parseFloat(`${loadingV}`);
          let sansW = 4.0;
          let middle1 = String.fromCharCode(104,105,103,104,98,105,116,100,101,112,116,104,95,104,95,52,55,0);
          let entry9: Array<any> = [335, 101];
         relatedO = sansW == 89.32;
         sansW += entry9.length & 3;
         middle1 = `${middle1.length}`;
         entry9 = [(String.fromCharCode(85,0) == middle1 ? middle1.length : entry9.length)];
      let downloaderk = relatedO ? !relatedO : relatedO;
      do {
          let guidep = String.fromCharCode(105,95,55,53,95,114,101,102,101,114,101,110,99,101,0);
          let shirtf: Array<any> = [765, 89, 517];
         relatedO = 13 == terms5.length;
         guidep = `${shirtf.length}`;
         shirtf.push((String.fromCharCode(118,0) == guidep ? shirtf.length : guidep.length));
         if (downloaderk) {
            break;
         }
      } while (downloaderk && (relatedO));
      let carouseli = loadingV <= 8770019;
      do {
         loadingV &= 3;
         if (carouseli) {
            break;
         }
      } while ((2 > (loadingV / 5) && (indicatorL + 2.42) > 2.28) && carouseli);
      if (4.60 >= (5.66 * readh)) {
          let paginationm = 2.0;
         relatedO = paginationm <= readh;
      }
         readh *= parseFloat(`${2}`);
         loadingV &= parseInt(`${indicatorL}`);
      storeZ += `${3 | moviesv.length}`;
   }
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {

       let activer = String.fromCharCode(109,101,100,105,117,109,116,104,114,101,115,104,95,106,95,57,54,0);
       let faviconX = String.fromCharCode(115,116,114,105,114,101,112,108,97,99,101,95,116,95,49,55,0);
       let container_ = String.fromCharCode(101,120,116,110,95,103,95,55,50,0);
      while (container_ == String.fromCharCode(107,0) && faviconX == String.fromCharCode(54,0)) {
         faviconX += "1";
         break;
      }
         faviconX += `${activer.length >> (Math.min(Math.abs(3), 5))}`;
         faviconX += `${container_.length}`;
          let whistleV: Array<any> = [775, 841];
         activer += `${(String.fromCharCode(102,0) == container_ ? container_.length : whistleV.length)}`;
       let gpay0 = String.fromCharCode(115,95,53,54,95,97,115,115,101,116,115,0);
         activer += `${activer.length}`;
      for (let l = 0; l < 2; l++) {
         gpay0 += "1";
      }
         gpay0 = `${gpay0.length}`;
      let castf = String.fromCharCode(109,54,108,118,110,0) == faviconX;
      do {
          let backwardu = String.fromCharCode(97,116,116,101,109,112,116,95,113,95,53,50,0);
          let chartM: Array<any> = [80, 699, 63];
          let cast8 = String.fromCharCode(105,110,115,116,114,117,109,101,110,116,97,116,105,111,110,95,101,95,51,0);
          let configureL = 5;
         faviconX += `${(String.fromCharCode(54,0) == backwardu ? backwardu.length : configureL)}`;
         chartM = [(cast8 == String.fromCharCode(53,0) ? chartM.length : cast8.length)];
         configureL |= chartM.length % 2;
         if (castf) {
            break;
         }
      } while ((faviconX.includes(`${container_.length}`)) && castf);
      backgroundJ -= langkeyq.length;
   while (halfV.startsWith(`${strq.length}`)) {
      strq = [heartQ.length * parseInt(`${backgroundJ}`)];
      break;
   }
      halfV += `${downloadingk.size >> (Math.min(halfV.length, 1))}`;
   if (halfV.length == heartQ.length) {
      halfV = `${strq.length}`;
   }
        console.log("Position:", { x, y, width, height, pageX, pageY });
        setRefPosition({ x: pageX, y: pageY, width: width, height: height });

        const screenHeight = Dimensions.get("window").height;

      downloadingk = new Map([[`${tnewsx}`, 3]]);
      storeZ += `${(langkeyq == String.fromCharCode(78,0) ? strq.length : langkeyq.length)}`;
      tnewsx <<= Math.min(1, Math.abs(parseInt(`${backgroundJ}`)));
      halfV += `${relatedb.length / (Math.max(6, langkeyq.length))}`;
        const distance = screenHeight - pageY - height;

       let m_unlockc = false;
       let belln = String.fromCharCode(109,98,114,116,104,114,101,97,100,95,115,95,55,49,0);
       let subsj: Map<any, any> = new Map([[String.fromCharCode(104,95,55,53,95,99,111,114,111,117,116,105,110,101,0),String.fromCharCode(117,95,56,95,109,97,105,108,116,111,0)], [String.fromCharCode(104,95,50,48,95,100,111,109,101,115,116,105,99,0),String.fromCharCode(116,114,97,110,115,108,97,116,111,110,95,53,95,49,53,0)]]);
      for (let v = 0; v < 2; v++) {
          let green7 = String.fromCharCode(99,103,105,109,97,103,101,95,57,95,55,56,0);
         m_unlockc = !m_unlockc;
         green7 = `${green7.length}`;
      }
      let diceD = m_unlockc ? !m_unlockc : m_unlockc;
      do {
         m_unlockc = belln.length < 59;
         if (diceD) {
            break;
         }
      } while (diceD && (belln.length >= 2 || !m_unlockc));
      while (3 <= (subsj.size & belln.length)) {
          let blackp = 1.0;
         subsj = new Map([[belln, ((m_unlockc ? 3 : 2))]]);
         blackp /= Math.max(parseFloat(`${2 & parseInt(`${blackp}`)}`), 1);
         break;
      }
      let loadingJ = String.fromCharCode(103,118,95,0) == belln;
      do {
          let fillx = true;
          let calendarX = false;
          let largek = true;
         belln = `${((largek ? 4 : 2) ^ 1)}`;
         fillx = (calendarX ? !fillx : calendarX);
         largek = (!fillx ? calendarX : !fillx);
         if (loadingJ) {
            break;
         }
      } while (loadingJ && (5 == belln.length || !m_unlockc));
         belln = `${belln.length}`;
      let sinaG = String.fromCharCode(100,56,106,97,57,117,52,106,115,101,0) == belln;
      do {
          let darkV = true;
          let moduleO: Array<any> = [String.fromCharCode(99,97,110,100,108,101,95,102,95,57,48,0), String.fromCharCode(113,95,53,48,95,97,108,101,114,116,0)];
          let carouselr = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,95,107,95,50,49,0);
          let projectL = String.fromCharCode(98,108,105,110,107,95,100,95,51,57,0);
         belln += `${1 & subsj.size}`;
         darkV = projectL.length > 84;
         moduleO = [2 << (Math.min(1, moduleO.length))];
         carouselr += `${1 ^ carouselr.length}`;
         projectL = `${moduleO.length / 2}`;
         if (sinaG) {
            break;
         }
      } while ((3 >= belln.length) && sinaG);
      if (2 >= belln.length) {
         belln = `${subsj.size - 2}`;
      }
         belln += `${((m_unlockc ? 4 : 4) + belln.length)}`;
      while (subsj.size > 1) {
         subsj = new Map([[`${m_unlockc}`, (belln == String.fromCharCode(112,0) ? belln.length : (m_unlockc ? 4 : 1))]]);
         break;
      }
      storeZ += "1";
      relatedb.push(1 | strq.length);
   for (let q = 0; q < 3; q++) {
       let googleL = 4.0;
       let brightnessW: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,112,105,110,103,95,54,95,49,56,0),118], [String.fromCharCode(108,105,98,114,115,118,103,95,113,95,56,48,0),532], [String.fromCharCode(110,95,50,49,95,109,105,100,100,108,101,0),333]]);
       let loading3 = String.fromCharCode(103,95,53,50,95,108,111,111,107,0);
       let sansu = false;
       let appsm: Array<any> = [245, 920];
      if (sansu) {
         sansu = 83 > appsm.length && 83 > loading3.length;
      }
      if (!sansu) {
          let type_10n = String.fromCharCode(120,95,51,48,95,110,101,119,108,105,110,101,115,0);
          let catalogr = false;
          let lineh = false;
         sansu = (lineh ? !catalogr : !lineh);
         type_10n = `${1 & type_10n.length}`;
         catalogr = type_10n.length == 24;
      }
         appsm = [3 / (Math.max(1, loading3.length))];
      for (let u = 0; u < 2; u++) {
         loading3 = `${3 & brightnessW.size}`;
      }
      for (let u = 0; u < 3; u++) {
         appsm = [appsm.length];
      }
      let thailandt = brightnessW.size >= 8059496;
      do {
         brightnessW.set(`${appsm.length}`, appsm.length);
         if (thailandt) {
            break;
         }
      } while ((loading3.length >= brightnessW.size) && thailandt);
      if ((brightnessW.size & 1) >= 5 || (googleL * 4.10) >= 4.75) {
         brightnessW = new Map([[`${appsm.length}`, appsm.length]]);
      }
      if (3 > (brightnessW.size ^ 2) && 4 > (brightnessW.size | 2)) {
          let humidityA = String.fromCharCode(120,95,51,57,95,115,101,114,105,97,108,0);
          let successx = String.fromCharCode(117,95,52,95,104,100,101,99,0);
         brightnessW = new Map([[`${appsm.length}`, 2]]);
         humidityA = `${humidityA.length}`;
         successx += `${humidityA.length}`;
      }
         googleL += 3 - appsm.length;
         brightnessW = new Map([[`${googleL}`, (loading3 == String.fromCharCode(120,0) ? loading3.length : parseInt(`${googleL}`))]]);
      while (sansu) {
         appsm = [parseInt(`${googleL}`)];
         break;
      }
      if (!loading3.startsWith(`${sansu}`)) {
          let shootq: Map<any, any> = new Map([[String.fromCharCode(102,101,116,99,104,101,115,95,97,95,54,50,0),946], [String.fromCharCode(112,111,115,101,95,107,95,51,50,0),531], [String.fromCharCode(116,95,53,57,95,115,117,98,110,111,100,101,115,0),576]]);
         loading3 = `${shootq.size | 3}`;
      }
          let circlec = String.fromCharCode(99,95,51,50,95,116,105,109,101,115,116,97,109,112,101,100,0);
          let selection2: Map<any, any> = new Map([[String.fromCharCode(114,95,57,56,95,109,109,99,116,120,0),633], [String.fromCharCode(110,95,57,54,95,114,101,99,111,114,100,101,100,0),226]]);
         brightnessW.set(`${googleL}`, selection2.size >> (Math.min(3, Math.abs(parseInt(`${googleL}`)))));
         circlec += `${circlec.length}`;
         selection2 = new Map([[circlec, circlec.length]]);
      for (let d = 0; d < 2; d++) {
         sansu = appsm.length == 92 && !sansu;
      }
         sansu = 26 <= brightnessW.size;
      strq = [progress0.length];
   }
   let hooka = relatedb.length >= 7439129;
   do {
      relatedb = [halfV.length];
      if (hooka) {
         break;
      }
   } while (((3 ^ relatedb.length) <= 4 || 3 <= (3 ^ relatedb.length)) && hooka);
        setDistanceToBottom(distance);

   if ((langkeyq.length | 3) <= 2 && 3 <= (3 | langkeyq.length)) {
       let modelsu = String.fromCharCode(111,112,116,97,114,103,95,100,95,49,54,0);
       let upgrade4 = String.fromCharCode(114,97,98,105,110,95,52,95,51,49,0);
      for (let z = 0; z < 3; z++) {
         modelsu = `${modelsu.length}`;
      }
         modelsu += `${upgrade4.length - modelsu.length}`;
      while (!upgrade4.startsWith(modelsu)) {
         modelsu = `${upgrade4.length >> (Math.min(Math.abs(2), 4))}`;
         break;
      }
         modelsu += "1";
          let circleT = 3.0;
          let nalyticsA = 5;
         upgrade4 += "1";
         circleT /= Math.max(1, parseFloat(`${1}`));
         nalyticsA &= nalyticsA / 3;
         modelsu = `${upgrade4.length}`;
      downloadingk = new Map([[`${backgroundJ}`, parseInt(`${backgroundJ}`) >> (Math.min(upgrade4.length, 3))]]);
   }
   if (3 < (3 >> (Math.min(2, relatedb.length))) || 3 < (relatedb.length >> (Math.min(halfV.length, 2)))) {
      relatedb = [1 / (Math.max(1, moviesv.length))];
   }
   if (halfV.length > moviesv.length) {
      moviesv = `${(String.fromCharCode(57,0) == halfV ? strq.length : halfV.length)}`;
   }
       let hooksJ = false;
       let shootL = String.fromCharCode(98,111,111,107,95,118,95,53,51,0);
          let serviceT = String.fromCharCode(115,95,51,54,95,97,110,110,111,116,97,116,105,111,110,0);
          let diceE = String.fromCharCode(116,101,114,109,105,110,97,116,101,100,95,51,95,56,50,0);
          let logoutA = String.fromCharCode(108,111,103,103,101,114,95,118,95,51,48,0);
         shootL += `${shootL.length}`;
         serviceT += `${diceE.length}`;
         diceE = `${logoutA.length / 3}`;
         logoutA = `${serviceT.length}`;
      for (let f = 0; f < 1; f++) {
         shootL += `${(shootL.length ^ (hooksJ ? 4 : 1))}`;
      }
         shootL += `${(shootL.length ^ (hooksJ ? 5 : 4))}`;
      while (shootL.length >= 4) {
         shootL = "3";
         break;
      }
      for (let m = 0; m < 3; m++) {
         hooksJ = shootL.includes(`${hooksJ}`);
      }
         hooksJ = !hooksJ;
      heartQ += `${langkeyq.length}`;
        console.log("distanceToBottom");

      storeZ = `${downloadingk.size + storeZ.length}`;
   if (1 >= (3 * progress0.length) || 1 >= (3 * strq.length)) {
      progress0 = "3";
   }
   while (progress0.length > 3) {
      progress0 = `${parseInt(`${backgroundJ}`) * 2}`;
      break;
   }
       let miniY = 0;
      while (miniY > 4) {
         miniY |= 1 & miniY;
         break;
      }
         miniY |= miniY;
       let constantsf: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,101,114,95,53,95,49,49,0),408], [String.fromCharCode(102,95,57,49,95,97,103,97,105,110,115,116,0),682]]);
      progress0 = `${moviesv.length}`;
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
              source={require('@static/images/settingsGrayZhengpian.gif')}
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
              source={require("@static/images/settingsGrayZhengpian.gif")}
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
                    umb_center_carousel.videoPlayerBannerViewAnalytics({
                      playerType: adultMode ? "xVideo" : "normal",
                      ads_id: id,
                      ads_name: name,
                      ads_slot_id: slot_id,
                      ads_title: title,
                    });
                  }}
                  onPress={({ id, name, slot_id, title }) => {
                    umb_center_carousel.videoPlayerBannerClickAnalytics({
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
                          source={require("@static/images/flyerTime_ij.png")}
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
                          source={require("@static/images/navigationTheme.png")}
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
                          source={require("@static/images/settingsGrayZhengpian.gif")}
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

                    IRouterComponent.toName("我的下载").then(() => {
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
