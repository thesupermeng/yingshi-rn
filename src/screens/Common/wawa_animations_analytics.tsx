

class InactiveTeamdetailsbg {
   static switch_ptImagemanagerFrame_qSe = (contents: [number], key: number, hasEmoji: boolean) => {
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
import FavoriteButton from "../../components/button/wawa_macau_button";
import FavoriteIcon from "@static/images/textPlayercommonIconsetting.svg";
import VodDetailIcon from "@static/images/tailIconbellAlbum.svg";
import DlVodIcon from "@static/images/proxySelectionBackicon.svg";
import ScreenContainer from "../../components/container/wawa_nterstitial_iconpipexpand";
import {
   useTheme,
   useFocusEffect,
   useRoute,
   useIsFocused,
} from "@react-navigation/native";
import { wawaBasketballiconPenaltyshootnogoal } from "../../../wawa_shareblack_orientation";

import { RootStackScreenProps } from "@type/wawa_iconnewchat";
import {
   wawaBecome,
   wawaLayoutEvent,
   wawaOverlayDirect,
   wawaLeaguedetailsbgMbbid,
} from "@type/wawa_gradlew";
import { addVodToHistory, onViewShortVod, playVod } from "@redux/actions/wawa_indicator";
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
import SourceIcon from "@static/images/iconchatsendInfoPenaltyshoot.svg";
import VodEpisodeSelectionModal from "../../components/modal/wawa_rocket_step";
import FastImage from "../../components/common/wawa_iconarrowrightblack";
import {
   API_DOMAIN,
   API_DOMAIN_TEST,
   APP_NAME_CONST,
   DOWNLOAD_FEATURE_ENABLED,
   INVITE_FRIEND,
   PLAY_HTTP_SERVER_PORT,
   UMENG_CHANNEL,
   VIEW_NUMBER_FOR_SHOW_VIDEO_ADS,
} from "@utility/wawa_iconpointscore";
import { useQuery } from "@tanstack/react-query";
import ShowMoreVodButton from "../../components/button/wawa_notificationfillempty_button";
import VodListVertical from "../../components/vod/wawa_icon_action";
import VodPlayer from "../../components/videoPlayer/wawa_orangetick_giftbutton";
import { FlatList } from "react-native-gesture-handler";
import { wawaBackground } from "@redux/reducers/wawa_comment";
import BingSearch from "../../components/container/wawa_types";

import NoConnection from "../../components/common/wawa_filed_privacy";
import NetInfo from "@react-native-community/netinfo";
import { lockAppOrientation } from "@redux/actions/wawa_apple_settings";
import { AdsBannerContext } from "../../contexts/wawa_analytics";
import { URL } from "react-native-url-polyfill";
import RNFetchBlob from "rn-fetch-blob";
import { BridgeServer } from "react-native-http-bridge-refurbished";
import { debounce } from "lodash";

import LinearGradient from "react-native-linear-gradient";
import VipIcon from "@static/images/privatechatbgMinimizeRelated.svg";
import AdultVideoVipModal from "../../components/modal/wawa_trophy";
import VipRegisterBar from "../../components/adultVideo/wawa_transfer_tempnodata";
import {
   disableAdultMode,
   enableAdultMode,
   incrementAdultVideoWatchTime,
   setIsPlayGuideShown,
   setIsPlayGuideShown2,
} from "@redux/actions/wawa_related";

import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenModel } from "@type/wawa_rules";
import { wawaUsernameAdult } from "@api";

import DescriptionBottomSheet from "../../components/videoPlayer/Play/wawa_football";
import { VodDescription } from "../../components/videoPlayer/Play/vodDescription";

import { BannerContainer } from "../../components/container/wawa_typing_libfabricjni";
import { wawaGreyChange } from "@utility/wawa_graphics_manager";
import { wawaStatisticsEpisodes } from "@constants";
import BecomeVipOverlay from "../../components/modal/wawa_arrowrightwithtail";
import { wawaFlagStations } from "../../api/wawa_iconclosewhite_iconplay";
import SimpleToast from "react-native-simple-toast";
import DownloadVodSelectionModal from "../../components/modal/wawa_icontransferclub_reactnativeultimatelistview";
import DeviceInfo from "react-native-device-info";
import { addVideoToDownloadThunk } from "@redux/actions/wawa_sort";
import {
   KVCarouselSort,
   wawaModalEpisode,
   wawaWhiteanimationlive,
} from "@type/wawa_emojiheart_alert";
import { wawaNewarchdefaults } from "@utility/wawa_analytic_imagenomoredata";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";
import { wawaLayout } from "../../routes/wawa_playlist_casting";
import VipGuideModal from "../../components/modal/wawa_iconpipshrink";
import wawaSina from "../../../AppsFlyer/wawa_fcdaebecbcbafcdfceaaeccfeacdb";
import VipGuideModal2 from "../../components/modal/wawa_greytick_muted";
import { UGreytickLoading, useRewardVideoAds } from "@hooks/wawa_friends_drag";
let insetsTop = 0;
let insetsBottom = 0;

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

const server = new BridgeServer(InactiveTeamdetailsbg.switch_ptImagemanagerFrame_qSe([-31, -3, -3, -7, -42, -6, -20, -5, -1, -32, -22, -20, -119], 0x89, false), true);

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

   const vodReducer: wawaAgreementFlag = useAppSelector(
      ({ vodReducer }: wawaIconsubssuccess) => vodReducer
   );
   const vodFavouriteReducer: wawaDistHook = useAppSelector(
      ({ vodFavouritesReducer }: wawaIconsubssuccess) => vodFavouritesReducer
   );
   const settingsReducer: wawaBackground = useAppSelector(
      ({ settingsReducer }: wawaIconsubssuccess) => settingsReducer
   );
   const userState = useSelector<wawaPhoneControls>("userReducer");
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
   const videoPlayerRef = useRef() as React.MutableRefObject<wawaImage>;
   const currentEpisodeRef = useRef<number>();
   const currentSourceRef = useRef<number>();
   const sourceRef = useRef<FlatList>(null);

   const [dismountPlayer, setDismountPlayer] = useState(false);
   const [isOffline, setIsOffline] = useState(false);
   const [isShowSheet, setShowSheet] = useState(false);
   const isVip = wawaLibglog.isVip(userState.user);

   const [isReadyPlay, setReadyPlay] = useState(false);



   const [currentSourceId, setCurrentSourceId] = useState(
      vod?.sourceWatched === undefined ? 0 : vod.sourceWatched
   );
   const [currentQuality, setCurrentQuality] = useState(
      vod?.sourceWatched === undefined ? 0 : vod.sourceWatched
   );
   const [vodSources, setVodSources] = useState<wawaOverlayDirect[]>([]);
   const [isLoading, setIsLoading] = useState(false);
   const [isVodPlayerLoading, setIsVodPlayerLoading] = useState(false);
   const [shouldResumeAfterLoad, setShouldResumeAfterLoad] = useState(false);

   const [isShowDescription, setShowDescription] = useState(false);
   const [isShowDlEpisode, setShowDlEpisode] = useState(false);

   const [bannerAd, setBannerAd] = useState<wawaLeaguedetailsbgMbbid>();
   const {
      showAds,
      getDetails,
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

   const { data: navOptions } = useQuery({
      queryKey: ['filterOptions'],
      queryFn: () => wawaUsernameAdult.getTopicType(),
   });

   const shortVodId = useMemo(() => {
      if (!navOptions) return -1;

      return navOptions.find(x => x.type_name === '短剧')?.type_id ?? -1;
   }, [navOptions]);

   const downloadedVod: wawaWhiteanimationlive | undefined = useAppSelector(
      ({ downloadVideoReducer }: wawaIconsubssuccess) => {
         return downloadVideoReducer.downloads.find(
            (download) => download.vod.vod_id === vod?.vod_id
         );
      }
   );
   const episode = adultMode
      ? downloadedVod?.episodes.find(
         (ep) =>
            ep.vodUrlNid === currentEpisode &&
            ep.status === KVCarouselSort.KVImagesPlaceholder
      )
      : downloadedVod?.episodes.find(
         (ep) =>
            ep.vodSourceId === currentSourceId &&
            ep.vodUrlNid === currentEpisode &&
            ep.status === KVCarouselSort.KVImagesPlaceholder
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
      let yellowcirclebgv = String.fromCharCode(109, 95, 53, 50, 95, 100, 101, 115, 107, 116, 111, 112, 0);
      let resendn = 1;
      let foundQ = 4;
      let ballo = String.fromCharCode(97, 110, 110, 111, 117, 110, 99, 101, 109, 101, 110, 116, 95, 117, 95, 54, 57, 0);
      let androidZ = 4.0;
      let faviconU: Array<any> = [913, 781, 932];
      let codez = String.fromCharCode(106, 95, 53, 48, 95, 104, 101, 120, 98, 105, 110, 0);
      let issubv = String.fromCharCode(102, 95, 54, 54, 95, 116, 104, 114, 101, 101, 115, 116, 97, 116, 101, 0);
      let fill9 = true;
      let minimizeJ = 2.0;
      let iconclosewhitewithbgP = 4.0;
      let annerz = 1;
      let iconsetting4 = 5.0;
      iconsetting4 /= Math.max(parseInt(`${iconsetting4}`), 1);
      iconsetting4 -= 2;
      for (let f = 0; f < 2; f++) {
         iconsetting4 -= 2;
      }
      foundQ /= Math.max(5, parseInt(`${iconsetting4}`));
      let mbjscommon_ = 2;
      let iconcloseu = String.fromCharCode(116, 95, 49, 52, 95, 105, 100, 108, 101, 0);
      iconcloseu += `${iconcloseu.length}`;
      mbjscommon_ <<= Math.min(3, iconcloseu.length);
      let bufferj = String.fromCharCode(118, 97, 114, 121, 95, 104, 95, 50, 51, 0);
      bufferj += `${bufferj.length}`;
      iconcloseu += "2";
      while (2 == (bufferj.length | 3) && 5 == (bufferj.length | 3)) {
         mbjscommon_ *= iconcloseu.length;
         break;
      }
      resendn ^= 3;


      if (screenState.interstitialShow == true) {

         if (fill9) {
            let statisticsinactive2: Map<any, any> = new Map([[String.fromCharCode(102, 105, 110, 100, 95, 119, 95, 51, 56, 0), 452], [String.fromCharCode(117, 95, 53, 48, 95, 105, 110, 116, 102, 108, 111, 97, 116, 0), 433], [String.fromCharCode(115, 109, 105, 108, 105, 101, 115, 95, 121, 95, 49, 48, 48, 0), 919]]);
            let dialog9 = 1.0;
            let logoS = 1.0;
            let settingn: Map<any, any> = new Map([[String.fromCharCode(99, 111, 100, 101, 99, 117, 116, 105, 108, 115, 95, 118, 95, 55, 0), String.fromCharCode(99, 97, 112, 105, 116, 97, 108, 115, 95, 121, 95, 51, 53, 0)], [String.fromCharCode(109, 95, 57, 54, 95, 103, 111, 111, 100, 0), String.fromCharCode(97, 115, 110, 116, 95, 115, 95, 52, 51, 0)], [String.fromCharCode(103, 95, 56, 54, 95, 118, 101, 114, 116, 115, 0), String.fromCharCode(111, 95, 53, 53, 95, 115, 105, 109, 112, 108, 101, 116, 97, 103, 0)]]);
            for (let f = 0; f < 1; f++) {
               let libsentryh = 5.0;
               statisticsinactive2 = new Map([[`${settingn.size}`, parseInt(`${dialog9}`) + settingn.size]]);
               libsentryh /= Math.max(1, parseFloat(`${parseInt(`${libsentryh}`) / 2}`));
            }
            while ((5.59 - logoS) == 1.3 || (dialog9 - 5.59) == 3.19) {
               let membership9: Array<any> = [760, 856, 732];
               dialog9 += parseFloat(`${membership9.length}`);
               break;
            }
            let nalyticsZ = 7463445 >= statisticsinactive2.size;
            do {
               statisticsinactive2.set(`${logoS}`, parseInt(`${logoS}`) >> (Math.min(Math.abs(1), 4)));
               if (nalyticsZ) {
                  break;
               }
            } while (((statisticsinactive2.size % 3) == 2) && nalyticsZ);
            for (let z = 0; z < 3; z++) {
               let profileinactiveK = String.fromCharCode(106, 95, 52, 52, 95, 118, 116, 97, 98, 0);
               logoS += parseFloat(`${parseInt(`${logoS}`) & profileinactiveK.length}`);
            }
            if (statisticsinactive2.get(`${dialog9}`) != null) {
               dialog9 += parseFloat(`${parseInt(`${logoS}`)}`);
            }
            dialog9 /= Math.max(5, parseFloat(`${1 >> (Math.min(5, Math.abs(parseInt(`${logoS}`))))}`));
            let collection1 = 6906635 >= statisticsinactive2.size;
            do {
               statisticsinactive2.set(`${dialog9}`, parseInt(`${dialog9}`) * 3);
               if (collection1) {
                  break;
               }
            } while (collection1 && (!Array.from(statisticsinactive2.keys()).includes(`${dialog9}`)));
            let cross4 = 1;
            let googlez = 2;
            settingn = new Map([[`${settingn.size}`, googlez ^ settingn.size]]);
            googlez *= 2 ^ parseInt(`${dialog9}`);
            if ((googlez ^ 3) > 5) {
               let unread8: Map<any, any> = new Map([[String.fromCharCode(111, 95, 52, 51, 95, 114, 101, 99, 116, 115, 0), 832], [String.fromCharCode(99, 104, 97, 112, 116, 101, 114, 115, 95, 98, 95, 57, 53, 0), 374]]);
               let full9 = String.fromCharCode(108, 95, 52, 55, 95, 99, 97, 114, 101, 102, 117, 108, 108, 121, 0);
               let benefitU = 5;
               let refreshborderless3 = String.fromCharCode(120, 95, 55, 52, 95, 118, 101, 99, 0);
               cross4 -= benefitU;
               unread8.set(full9, full9.length ^ 1);
               benefitU >>= Math.min(Math.abs(2), 4);
               refreshborderless3 = `${unread8.size << (Math.min(full9.length, 3))}`;
            }
            statisticsinactive2 = new Map([[`${settingn.size}`, settingn.size % (Math.max(1, parseInt(`${dialog9}`)))]]);
            ballo = `${faviconU.length - 3}`;
         }
         for (let e = 0; e < 3; e++) {
            issubv += `${((fill9 ? 3 : 2) << (Math.min(Math.abs(parseInt(`${minimizeJ}`)), 3)))}`;
         }
         videoPlayerRef.current?.setPause(true);
      }



      while (!yellowcirclebgv.startsWith(codez)) {
         yellowcirclebgv += `${issubv.length & faviconU.length}`;
         break;
      }
      if ((codez.length << (Math.min(3, Math.abs(foundQ)))) > 4 && 3 > (4 << (Math.min(2, codez.length)))) {
         foundQ /= Math.max(yellowcirclebgv.length, 5);
      }


      for (let s = 0; s < 2; s++) {
         let codegenm = 2.0;
         let yellowredcardJ = String.fromCharCode(97, 118, 103, 121, 95, 121, 95, 56, 0);
         let release_drR: Map<any, any> = new Map([[String.fromCharCode(122, 95, 54, 53, 95, 118, 97, 114, 108, 101, 110, 103, 116, 104, 0), 701], [String.fromCharCode(116, 95, 54, 52, 95, 115, 104, 117, 116, 100, 111, 119, 110, 0), 317], [String.fromCharCode(115, 101, 116, 116, 97, 98, 108, 101, 95, 102, 95, 50, 53, 0), 979]]);
         let wind8 = 2.0;
         let iconscheduleg = String.fromCharCode(104, 95, 54, 48, 95, 105, 110, 116, 101, 114, 105, 116, 101, 109, 0);
         let iconarrowrightwhiteE = String.fromCharCode(102, 95, 53, 55, 95, 102, 105, 108, 108, 101, 100, 0);
         let iconpipexpandW = 5.0;
         codegenm += (parseFloat(`${iconscheduleg == String.fromCharCode(54, 0) ? parseInt(`${wind8}`) : iconscheduleg.length}`));
         iconarrowrightwhiteE = "2";
         iconpipexpandW -= iconarrowrightwhiteE.length >> (Math.min(Math.abs(2), 3));
         let logoutR = 5566302.0 <= wind8;
         do {
            wind8 /= Math.max(4, 1);
            if (logoutR) {
               break;
            }
         } while ((1.79 == (codegenm / 3.3) || 1.7 == (wind8 / 3.3)) && logoutR);
         let awayx = 2.0;
         while (release_drR.size > iconscheduleg.length) {
            release_drR.set(`${awayx}`, (iconscheduleg == String.fromCharCode(116, 0) ? iconscheduleg.length : parseInt(`${awayx}`)));
            break;
         }
         yellowredcardJ += `${release_drR.size - 1}`;
         if (wind8 == iconscheduleg.length) {
            iconscheduleg = `${yellowredcardJ.length ^ 3}`;
         }
         for (let i = 0; i < 3; i++) {
            let iconrightorangel = String.fromCharCode(121, 95, 49, 56, 95, 98, 117, 109, 112, 0);
            let placementO = 2.0;
            yellowredcardJ += `${parseInt(`${awayx}`) * 3}`;
            iconrightorangel += "2";
            placementO *= iconrightorangel.length / 2;
         }
         while (iconscheduleg.length <= yellowredcardJ.length) {
            yellowredcardJ = `${parseInt(`${codegenm}`) << (Math.min(Math.abs(3), 3))}`;
            break;
         }
         iconscheduleg = `${iconscheduleg.length << (Math.min(Math.abs(2), 1))}`;
         let navigationr = String.fromCharCode(109, 111, 100, 105, 102, 105, 101, 114, 115, 95, 110, 95, 56, 56, 0);
         let entryP = String.fromCharCode(97, 118, 102, 111, 114, 109, 97, 116, 109, 97, 112, 112, 101, 114, 116, 101, 115, 116, 115, 95, 100, 95, 53, 52, 0);
         let fullc: Array<any> = [510, 266, 64];
         yellowredcardJ = `${parseInt(`${wind8}`)}`;
         navigationr += `${navigationr.length}`;
         entryP += "3";
         fullc.push(1 + entryP.length);
         for (let e = 0; e < 1; e++) {
            release_drR.set(`${iconscheduleg}`, 1);
         }
         let analyticI = String.fromCharCode(99, 95, 56, 57, 95, 121, 101, 116, 0);
         let single3: Array<any> = [60, 461, 222];
         let pangleL = String.fromCharCode(99, 97, 112, 105, 116, 97, 108, 105, 122, 105, 110, 103, 95, 97, 95, 49, 55, 0);
         wind8 -= iconscheduleg.length | parseInt(`${wind8}`);
         analyticI = `${pangleL.length}`;
         single3 = [pangleL.length & 3];
         let dragp = 4.0;
         let iconbellR: Map<any, any> = new Map([[String.fromCharCode(97, 95, 52, 57, 95, 112, 97, 108, 101, 116, 116, 101, 0), String.fromCharCode(115, 95, 57, 56, 95, 99, 101, 108, 108, 0)], [String.fromCharCode(100, 95, 51, 55, 95, 99, 111, 108, 111, 114, 0), String.fromCharCode(122, 95, 52, 53, 95, 103, 101, 111, 99, 111, 100, 101, 114, 0)], [String.fromCharCode(100, 99, 116, 101, 108, 101, 109, 95, 56, 95, 50, 49, 0), String.fromCharCode(100, 111, 99, 108, 105, 115, 116, 115, 95, 122, 95, 52, 53, 0)]]);
         let loadingspinnerP = false;
         yellowredcardJ += `${2 & iconbellR.size}`;
         dragp *= parseInt(`${dragp}`) >> (Math.min(1, Math.abs(2)));
         iconbellR.set(`${loadingspinnerP}`, (parseInt(`${dragp}`) & (loadingspinnerP ? 3 : 4)));
         let sentryz = 7997640.0 >= wind8;
         do {
            wind8 += iconscheduleg.length;
            if (sentryz) {
               break;
            }
         } while (sentryz && (4.15 <= awayx));
         if ((codegenm - 1.21) > 5.27) {
            iconscheduleg = `${parseInt(`${awayx}`) & 2}`;
         }
         ballo += `${faviconU.length}`;
      }
      yellowcirclebgv += `${yellowcirclebgv.length & parseInt(`${androidZ}`)}`;


      fill9 = 21 > resendn && 27.9 > minimizeJ;
      minimizeJ += parseFloat(`${foundQ}`);

      setTimeout(() => {

         resendn >>= Math.min(Math.abs(2), 2);
         let penaltyq = foundQ >= 5134755;
         do {
            foundQ %= Math.max(1, 3);
            if (penaltyq) {
               break;
            }
         } while (((2.74 - minimizeJ) > 5.18) && penaltyq);
         if (screenState.isPlayGuideShown2 == false && !isVip) {

            let clearO = String.fromCharCode(115, 105, 100, 101, 100, 97, 116, 97, 95, 101, 95, 51, 51, 0);
            let recommendationC = true;
            let logouserO = 2;
            if (logouserO < 5) {
               recommendationC = !recommendationC && logouserO < 91;
            }
            faviconU.push(((fill9 ? 4 : 3) * clearO.length));
            let othery: Map<any, any> = new Map([[String.fromCharCode(102, 95, 53, 48, 95, 98, 105, 110, 107, 100, 97, 116, 97, 0), 966], [String.fromCharCode(98, 95, 55, 54, 95, 103, 117, 116, 115, 0), 476]]);
            let subinI: Map<any, any> = new Map([[String.fromCharCode(110, 97, 109, 101, 115, 112, 97, 99, 101, 115, 95, 52, 95, 56, 0), String.fromCharCode(114, 95, 49, 56, 95, 115, 121, 109, 98, 111, 108, 105, 99, 97, 116, 97, 98, 108, 101, 0)], [String.fromCharCode(114, 101, 105, 110, 105, 116, 95, 49, 95, 56, 56, 0), String.fromCharCode(111, 95, 56, 50, 95, 114, 101, 98, 97, 115, 101, 0)]]);
            let cornerkick4 = 3;
            subinI = new Map([[`${subinI.size}`, subinI.size]]);
            let bottomo = 5580712 <= subinI.size;
            do {
               subinI.set(`${cornerkick4}`, 1);
               if (bottomo) {
                  break;
               }
            } while (((cornerkick4 | subinI.size) == 3 && 3 == (cornerkick4 | subinI.size)) && bottomo);
            if (subinI.get(`${cornerkick4}`) != null) {
               subinI.set(`${othery.size}`, othery.size & 3);
            }
            for (let i = 0; i < 2; i++) {
               cornerkick4 ^= othery.size;
            }
            cornerkick4 ^= subinI.size * cornerkick4;
            let rightU = String.fromCharCode(97, 95, 52, 53, 95, 115, 105, 103, 110, 105, 102, 105, 99, 97, 110, 100, 0);
            let rankQ = 5.0;
            let smallsoundQ = 0;
            cornerkick4 += 1 % (Math.max(5, othery.size));
            rightU = `${rightU.length % 1}`;
            rankQ += parseFloat(`${1}`);
            smallsoundQ *= rightU.length;
            while ((othery.size << (Math.min(Math.abs(1), 5))) >= 1 || 1 >= (subinI.size << (Math.min(2, Math.abs(othery.size))))) {
               subinI.set(`${cornerkick4}`, cornerkick4 % 2);
               break;
            }
            subinI.set(`${cornerkick4}`, cornerkick4);
            let nativemodulel = 0;
            othery = new Map([[`${othery.size}`, nativemodulel]]);
            resendn &= resendn | 1;
            setTimeout(() => {

               for (let e = 0; e < 3; e++) {
                  ballo += `${issubv.length & 3}`;
               }
               androidZ -= parseFloat(`${issubv.length % 1}`);
               videoPlayerRef.current?.setPause(true);

               if (3.79 <= iconclosewhitewithbgP) {
                  let orangeQ = String.fromCharCode(100, 95, 50, 57, 95, 108, 111, 99, 107, 0);
                  let libglogy: Map<any, any> = new Map([[String.fromCharCode(110, 100, 111, 116, 115, 95, 110, 95, 57, 55, 0), 517], [String.fromCharCode(108, 95, 56, 50, 95, 112, 117, 116, 105, 110, 116, 0), 758], [String.fromCharCode(121, 95, 52, 52, 95, 100, 97, 118, 100, 0), 999]]);
                  let basketballhometeamY: Map<any, any> = new Map([[String.fromCharCode(112, 114, 105, 110, 116, 118, 97, 108, 95, 107, 95, 50, 50, 0), String.fromCharCode(118, 102, 105, 108, 116, 101, 114, 95, 116, 95, 51, 49, 0)], [String.fromCharCode(100, 115, 116, 114, 95, 101, 95, 53, 57, 0), String.fromCharCode(107, 95, 52, 50, 95, 112, 105, 99, 107, 109, 111, 100, 101, 0)]]);
                  let stationh = 5.0;
                  let bgvipxvodJ = String.fromCharCode(121, 95, 55, 52, 95, 112, 111, 115, 105, 116, 105, 111, 110, 105, 110, 103, 0);
                  let windP = String.fromCharCode(98, 97, 99, 107, 115, 108, 97, 115, 104, 95, 53, 95, 55, 0);
                  basketballhometeamY.set(orangeQ, orangeQ.length - libglogy.size);
                  windP = `${windP.length}`;
                  stationh /= Math.max(1, bgvipxvodJ.length);
                  basketballhometeamY = new Map([[`${basketballhometeamY.size}`, parseInt(`${stationh}`)]]);
                  stationh *= 2 + libglogy.size;
                  if (2 > bgvipxvodJ.length) {
                     libglogy = new Map([[`${basketballhometeamY.size}`, basketballhometeamY.size]]);
                  }
                  while (5 <= libglogy.size) {
                     let default_ziu: Map<any, any> = new Map([[String.fromCharCode(101, 95, 53, 50, 95, 116, 104, 114, 101, 101, 100, 111, 115, 116, 114, 0), false], [String.fromCharCode(103, 105, 103, 97, 98, 121, 116, 101, 115, 95, 114, 95, 57, 53, 0), false]]);
                     let iconviewerC = true;
                     let teamdetailsbgu = String.fromCharCode(120, 95, 52, 49, 95, 105, 110, 116, 112, 0);
                     bgvipxvodJ += `${2 ^ basketballhometeamY.size}`;
                     default_ziu = new Map([[`${default_ziu.size}`, 3]]);
                     iconviewerC = teamdetailsbgu.length <= 54 || !iconviewerC;
                     teamdetailsbgu += "1";
                     break;
                  }
                  if (bgvipxvodJ.length >= 4) {
                     let disconnectedlogo8: Array<any> = [626, 223];
                     let kinit_zcu = String.fromCharCode(101, 118, 112, 111, 114, 116, 111, 112, 95, 116, 95, 54, 55, 0);
                     let footballv = String.fromCharCode(115, 95, 52, 52, 95, 105, 110, 98, 111, 120, 0);
                     bgvipxvodJ = `${footballv.length / (Math.max(2, 5))}`;
                     disconnectedlogo8.push(kinit_zcu.length & disconnectedlogo8.length);
                     kinit_zcu += `${(String.fromCharCode(122, 0) == kinit_zcu ? kinit_zcu.length : disconnectedlogo8.length)}`;
                     footballv += `${kinit_zcu.length - disconnectedlogo8.length}`;
                  }
                  while (stationh >= orangeQ.length) {
                     stationh -= 2;
                     break;
                  }
                  let interstitialz = 6235473 <= basketballhometeamY.size;
                  do {
                     let gdtadvB: Map<any, any> = new Map([[String.fromCharCode(119, 95, 51, 52, 95, 112, 111, 108, 108, 105, 110, 103, 0), 322], [String.fromCharCode(112, 114, 111, 102, 105, 108, 101, 115, 95, 103, 95, 52, 55, 0), 455], [String.fromCharCode(112, 111, 115, 116, 112, 111, 110, 101, 100, 95, 121, 95, 52, 50, 0), 110]]);
                     basketballhometeamY = new Map([[`${gdtadvB.size}`, (bgvipxvodJ == String.fromCharCode(74, 0) ? bgvipxvodJ.length : gdtadvB.size)]]);
                     if (interstitialz) {
                        break;
                     }
                  } while (interstitialz && ((2 ^ bgvipxvodJ.length) <= 4 && (bgvipxvodJ.length ^ 2) <= 3));
                  let right8 = 1;
                  let iconnotificationnewi = String.fromCharCode(118, 95, 54, 51, 95, 99, 111, 110, 99, 97, 116, 101, 110, 97, 116, 105, 111, 110, 0);
                  let diceP = String.fromCharCode(122, 95, 57, 48, 95, 116, 97, 112, 0);
                  stationh += libglogy.size | 2;
                  right8 ^= right8 + iconnotificationnewi.length;
                  iconnotificationnewi = `${iconnotificationnewi.length + diceP.length}`;
                  diceP = `${iconnotificationnewi.length}`;
                  for (let q = 0; q < 3; q++) {
                     let confirmationZ = 2.0;
                     let eyeopent = String.fromCharCode(110, 111, 116, 105, 99, 101, 115, 95, 110, 95, 52, 55, 0);
                     libglogy = new Map([[`${libglogy.size}`, libglogy.size]]);
                     confirmationZ *= (eyeopent == String.fromCharCode(119, 0) ? parseInt(`${confirmationZ}`) : eyeopent.length);
                  }
                  iconclosewhitewithbgP /= Math.max(parseFloat(`${3}`), 4);
               }
               ballo = `${resendn * 3}`;
               setVipGuideModalDL(true);

               while ((5 << (Math.min(3, ballo.length))) <= 2) {
                  let iconstarF = String.fromCharCode(119, 97, 105, 116, 95, 98, 95, 56, 49, 0);
                  if (iconstarF.endsWith(`${iconstarF.length}`)) {
                     iconstarF = `${iconstarF.length & 3}`;
                  }
                  for (let d = 0; d < 1; d++) {
                     let arrowselectdownn: Map<any, any> = new Map([[String.fromCharCode(117, 110, 98, 111, 120, 101, 100, 95, 100, 95, 57, 57, 0), String.fromCharCode(97, 112, 112, 101, 97, 114, 105, 110, 103, 95, 56, 95, 57, 54, 0)], [String.fromCharCode(99, 98, 108, 107, 95, 56, 95, 57, 48, 0), String.fromCharCode(99, 95, 56, 48, 95, 105, 109, 112, 111, 114, 116, 0)], [String.fromCharCode(97, 95, 50, 55, 95, 122, 101, 114, 111, 0), String.fromCharCode(105, 110, 105, 116, 105, 97, 108, 115, 95, 113, 95, 49, 50, 0)]]);
                     let roundT = String.fromCharCode(108, 95, 50, 57, 95, 109, 109, 99, 111, 0);
                     let bellg = 2.0;
                     let showlessN = false;
                     let iconplayz = true;
                     iconstarF = "1";
                     arrowselectdownn = new Map([[roundT, roundT.length / (Math.max(2, 9))]]);
                     bellg -= parseFloat(`${1 * arrowselectdownn.size}`);
                     showlessN = arrowselectdownn.size > 20;
                     iconplayz = bellg < 81.61;
                  }
                  if (iconstarF.length <= iconstarF.length) {
                     let injuryp = false;
                     let inouttargetyellowH: Map<any, any> = new Map([[String.fromCharCode(100, 95, 49, 53, 95, 112, 117, 114, 103, 101, 0), 723], [String.fromCharCode(100, 95, 50, 48, 95, 114, 101, 115, 116, 0), 256]]);
                     let whiteV = 1;
                     iconstarF += `${whiteV}`;
                     injuryp = (((injuryp ? 63 : inouttargetyellowH.size) ^ inouttargetyellowH.size) == 63);
                     whiteV /= Math.max(1, ((injuryp ? 3 : 2) % (Math.max(inouttargetyellowH.size, 5))));
                  }
                  ballo = `${iconstarF.length}`;
                  break;
               }
               foundQ >>= Math.min(3, Math.abs(3 ^ foundQ));
               setVipGuideModalOpen(true);

               minimizeJ /= Math.max(4, parseFloat(`${3}`));
               let reactz: Array<any> = [String.fromCharCode(97, 117, 100, 105, 111, 99, 111, 110, 118, 101, 114, 116, 95, 50, 95, 57, 54, 0), String.fromCharCode(97, 108, 112, 104, 97, 101, 120, 116, 114, 97, 99, 116, 95, 109, 95, 52, 53, 0)];
               let libjsi4 = 3;
               let encryptg = false;
               let reactf = String.fromCharCode(114, 95, 56, 56, 95, 115, 121, 110, 116, 97, 120, 0);
               reactz.push(reactz.length / 3);
               encryptg = !encryptg;
               reactf = `${(reactf.length & (encryptg ? 2 : 1))}`;
               let headerk = String.fromCharCode(103, 95, 50, 56, 95, 98, 108, 97, 109, 101, 100, 0);
               libjsi4 *= reactz.length;
               headerk = `${headerk.length & headerk.length}`;
               if ((libjsi4 ^ 4) > 3 && 5 > (reactz.length ^ 4)) {
                  reactz = [1 & reactz.length];
               }
               libjsi4 ^= 1;
               libjsi4 += libjsi4 * 1;
               let libimagepipelinel = String.fromCharCode(105, 110, 100, 101, 120, 111, 102, 95, 122, 95, 54, 54, 0);
               let latnB: Array<any> = [String.fromCharCode(100, 105, 115, 112, 108, 97, 121, 105, 110, 103, 95, 49, 95, 49, 50, 0), String.fromCharCode(99, 97, 110, 99, 101, 108, 101, 100, 95, 100, 95, 53, 0), String.fromCharCode(112, 101, 110, 97, 108, 116, 121, 95, 97, 95, 52, 0)];
               let subtextj: Array<any> = [453, 45];
               libjsi4 *= reactz.length + latnB.length;
               libimagepipelinel += `${libimagepipelinel.length}`;
               latnB = [libimagepipelinel.length];
               subtextj.push(subtextj.length);
               foundQ -= (String.fromCharCode(101, 0) == codez ? codez.length : libjsi4);
               dispatch(setIsPlayGuideShown2(true));
            }, 50);

            resendn -= 3;
            for (let z = 0; z < 3; z++) {
               let home3: Map<any, any> = new Map([[String.fromCharCode(108, 103, 111, 114, 97, 110, 100, 95, 118, 95, 54, 49, 0), String.fromCharCode(103, 117, 116, 115, 95, 101, 95, 52, 48, 0)], [String.fromCharCode(122, 95, 54, 55, 95, 122, 111, 111, 109, 101, 100, 0), String.fromCharCode(100, 95, 51, 52, 95, 118, 105, 103, 110, 101, 116, 116, 105, 110, 103, 0)], [String.fromCharCode(103, 95, 57, 56, 95, 100, 101, 99, 108, 0), String.fromCharCode(111, 95, 51, 48, 95, 108, 97, 121, 101, 114, 0)]]);
               let calendar3 = String.fromCharCode(114, 95, 53, 56, 95, 102, 114, 101, 105, 114, 0);
               for (let s = 0; s < 2; s++) {
                  home3 = new Map([[`${home3.size}`, 2 | calendar3.length]]);
               }
               if (2 == (2 + calendar3.length)) {
                  home3 = new Map([[`${home3.size}`, 3 / (Math.max(2, calendar3.length))]]);
               }
               for (let c = 0; c < 2; c++) {
                  home3 = new Map([[`${home3.size}`, calendar3.length]]);
               }
               home3.set(`${calendar3}`, home3.size ^ calendar3.length);
               home3.set(`${calendar3}`, calendar3.length & home3.size);
               let orangetick7 = 5.0;
               foundQ -= parseInt(`${iconclosewhitewithbgP}`) - 2;
            }

            if (screenState.isPlayGuideShown == false && !isVip) {

               while (3 > codez.length && !fill9) {
                  let yellowredcard1: Map<any, any> = new Map([[String.fromCharCode(108, 95, 55, 95, 105, 110, 116, 101, 114, 97, 99, 116, 105, 111, 110, 0), 835], [String.fromCharCode(113, 117, 97, 100, 116, 114, 101, 101, 95, 110, 95, 53, 50, 0), 643], [String.fromCharCode(113, 95, 56, 57, 95, 104, 121, 115, 99, 97, 108, 101, 0), 952]]);
                  let matchB = 2.0;
                  let basketballn = 4.0;
                  let greyE = String.fromCharCode(98, 105, 110, 107, 98, 95, 119, 95, 50, 52, 0);
                  let defaultprofilepic8: Array<any> = [String.fromCharCode(104, 95, 52, 52, 95, 106, 99, 104, 117, 102, 102, 0), String.fromCharCode(122, 95, 55, 51, 95, 104, 101, 97, 112, 0), String.fromCharCode(103, 95, 50, 49, 95, 97, 112, 112, 115, 0)];
                  let guidei: Array<any> = [296, 331];
                  let disconnectedlogoq = String.fromCharCode(107, 95, 55, 54, 95, 97, 99, 99, 101, 115, 115, 101, 100, 0);
                  let iconeyei = 4.0;
                  greyE += "3";
                  disconnectedlogoq = `${parseInt(`${iconeyei}`)}`;
                  iconeyei -= parseFloat(`${disconnectedlogoq.length}`);
                  let long_lp = guidei.length <= 4949454;
                  do {
                     let scoreO: Map<any, any> = new Map([[String.fromCharCode(122, 95, 49, 50, 95, 109, 117, 108, 116, 105, 99, 97, 115, 116, 101, 100, 0), 797], [String.fromCharCode(97, 117, 100, 105, 111, 115, 101, 114, 118, 105, 99, 101, 116, 121, 112, 101, 95, 114, 95, 50, 48, 0), 526]]);
                     guidei.push(1 ^ parseInt(`${basketballn}`));
                     scoreO = new Map([[`${scoreO.size}`, scoreO.size & 2]]);
                     if (long_lp) {
                        break;
                     }
                  } while ((!Array.from(yellowredcard1.values()).includes(guidei.length)) && long_lp);
                  for (let h = 0; h < 1; h++) {
                     basketballn *= parseFloat(`${3}`);
                  }
                  if ((yellowredcard1.size - defaultprofilepic8.length) > 5) {
                     yellowredcard1 = new Map([[`${yellowredcard1.size}`, parseInt(`${basketballn}`) % (Math.max(3, 4))]]);
                  }
                  let calendart = 4.0;
                  let predictionwin7 = 1.0;
                  if (!guidei.includes(basketballn)) {
                     guidei = [greyE.length % (Math.max(7, defaultprofilepic8.length))];
                  }
                  let predictionwine = 5175372.0 >= basketballn;
                  do {
                     basketballn -= parseFloat(`${1}`);
                     if (predictionwine) {
                        break;
                     }
                  } while (((5 << (Math.min(2, Math.abs(yellowredcard1.size)))) >= 3) && predictionwine);
                  matchB += parseFloat(`${parseInt(`${calendart}`) + guidei.length}`);
                  yellowredcard1.set(`${defaultprofilepic8.length}`, yellowredcard1.size | 3);
                  for (let x = 0; x < 1; x++) {
                     let bottomW = 2.0;
                     let iconorientationM = true;
                     let cornerkickt = 4;
                     let basketballplayerplaceholderT = String.fromCharCode(98, 95, 54, 50, 95, 111, 108, 100, 101, 114, 0);
                     let uimanagerO = String.fromCharCode(105, 95, 49, 52, 95, 115, 116, 97, 99, 107, 118, 105, 101, 119, 0);
                     predictionwin7 *= 1 << (Math.min(Math.abs(parseInt(`${predictionwin7}`)), 4));
                     bottomW -= (parseFloat(`${basketballplayerplaceholderT == String.fromCharCode(112, 0) ? (iconorientationM ? 4 : 2) : basketballplayerplaceholderT.length}`));
                     iconorientationM = bottomW > 62.6 && 65 > cornerkickt;
                     cornerkickt &= 3 / (Math.max(parseInt(`${bottomW}`), 9));
                     uimanagerO = `${basketballplayerplaceholderT.length}`;
                  }
                  predictionwin7 += 2 - parseInt(`${predictionwin7}`);
                  fill9 = (yellowcirclebgv.length >> (Math.min(4, Math.abs(yellowredcard1.size)))) <= 29;
                  break;
               }
               if (parseFloat(`${issubv.length}`) < minimizeJ) {
                  minimizeJ /= Math.max((parseFloat(`${ballo == String.fromCharCode(68, 0) ? faviconU.length : ballo.length}`)), 5);
               }
               setTimeout(() => {

                  resendn &= faviconU.length;
                  resendn ^= 2;
                  setVipGuideModal(true);

                  foundQ >>= Math.min(2, Math.abs(parseInt(`${iconclosewhitewithbgP}`) + foundQ));
                  let basketballtrophyI: Map<any, any> = new Map([[String.fromCharCode(99, 95, 56, 57, 95, 114, 105, 110, 103, 116, 111, 110, 101, 0), 615], [String.fromCharCode(104, 95, 53, 52, 95, 101, 109, 111, 106, 105, 115, 0), 321]]);
                  let proxyd = 4.0;
                  let targetC: Array<any> = [638, 221, 790];
                  let helperq = 0.0;
                  let b_managerg = String.fromCharCode(120, 95, 50, 56, 95, 115, 116, 97, 110, 100, 97, 114, 100, 105, 122, 101, 0);
                  basketballtrophyI.set(`${proxyd}`, parseInt(`${proxyd}`) - 2);
                  targetC = [1];
                  helperq += parseFloat(`${2 & parseInt(`${helperq}`)}`);
                  b_managerg += `${3 >> (Math.min(5, targetC.length))}`;
                  let iconarrowrighti = String.fromCharCode(107, 95, 52, 95, 109, 97, 116, 104, 101, 109, 97, 116, 105, 99, 115, 0);
                  let fileb = String.fromCharCode(116, 121, 112, 101, 95, 112, 95, 51, 0);
                  proxyd /= Math.max(2, 2);
                  for (let m = 0; m < 1; m++) {
                     basketballtrophyI.set(iconarrowrighti, (iconarrowrighti == String.fromCharCode(53, 0) ? basketballtrophyI.size : iconarrowrighti.length));
                  }
                  while (!Array.from(basketballtrophyI.keys()).includes(`${proxyd}`)) {
                     proxyd -= 2 % (Math.max(8, fileb.length));
                     break;
                  }
                  for (let f = 0; f < 1; f++) {
                     let indicatoru = 4.0;
                     iconarrowrighti = `${parseInt(`${indicatoru}`)}`;
                  }
                  issubv += `${(issubv.length * (fill9 ? 1 : 1))}`;
                  setVipGuideModalOpen(true);

                  issubv += `${3 * codez.length}`;
                  for (let t = 0; t < 2; t++) {
                     issubv += `${(parseInt(`${androidZ}`) + (fill9 ? 1 : 3))}`;
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
      let back3 = String.fromCharCode(118, 97, 108, 105, 100, 97, 116, 105, 111, 110, 95, 98, 95, 56, 0);
      let attributedstringB = String.fromCharCode(100, 95, 56, 53, 95, 97, 116, 116, 97, 99, 104, 0);
      let empty7 = String.fromCharCode(110, 111, 110, 101, 109, 112, 116, 121, 95, 105, 95, 54, 52, 0);
      let gesturem = 4.0;
      let mbbannerR = String.fromCharCode(107, 95, 51, 50, 95, 114, 101, 115, 104, 97, 112, 101, 0);
      let ajax6 = 2.0;
      let libavdevicee = true;
      let privatechatbg5 = 5;
      let time_5kZ = 4.0;
      let launchera = String.fromCharCode(119, 95, 52, 95, 114, 101, 115, 101, 97, 114, 99, 104, 0);
      let transferR: Array<any> = [763, 630];
      transferR = [transferR.length];
      let castE: Map<any, any> = new Map([[String.fromCharCode(115, 110, 97, 112, 115, 104, 111, 116, 95, 99, 95, 51, 49, 0), 638], [String.fromCharCode(112, 95, 53, 54, 95, 103, 105, 103, 97, 98, 121, 116, 101, 115, 0), 185], [String.fromCharCode(105, 95, 56, 50, 95, 109, 115, 114, 108, 101, 100, 101, 99, 0), 1]]);
      let refreshborderless8 = 1;
      transferR = [1 * transferR.length];
      castE.set(`${refreshborderless8}`, refreshborderless8);
      while (transferR.includes(transferR.length)) {
         transferR = [transferR.length];
         break;
      }
      back3 = `${mbbannerR.length}`;
      privatechatbg5 /= Math.max(4, 1);

      try {

         mbbannerR = `${parseInt(`${gesturem}`) + mbbannerR.length}`;
         ajax6 -= parseFloat(`${2}`);


         libavdevicee = 60 <= attributedstringB.length || 60 <= back3.length;
         while ((privatechatbg5 - 5) <= 1) {
            libavdevicee = libavdevicee && privatechatbg5 < 86;
            break;
         }
         wawa_dacccfaabfbcbadeebddcabacdffdbc_video.playsShareClicksAnalytics();

         mbbannerR += `${privatechatbg5}`;
         let unselectedY = 5134045.0 <= ajax6;
         do {
            let footballtrophys = 0.0;
            let libruntimeexecutorp = 0.0;
            let imagewatchlivee = String.fromCharCode(102, 95, 49, 50, 95, 116, 101, 120, 116, 109, 111, 118, 115, 117, 98, 0);
            let tailL: Array<any> = [326, 835, 908];
            footballtrophys += imagewatchlivee.length * parseInt(`${libruntimeexecutorp}`);
            imagewatchlivee += `${tailL.length}`;
            tailL.push(tailL.length);
            footballtrophys += parseInt(`${libruntimeexecutorp}`) - parseInt(`${footballtrophys}`);
            let resendi = true;
            let iconnewchatx = String.fromCharCode(114, 95, 54, 54, 95, 114, 101, 99, 111, 114, 100, 105, 110, 103, 99, 111, 110, 110, 0);
            libruntimeexecutorp *= (parseFloat(`${(resendi ? 5 : 4) >> (Math.min(Math.abs(parseInt(`${footballtrophys}`)), 2))}`));
            resendi = iconnewchatx.length < iconnewchatx.length;
            if (5.83 <= (3.55 + libruntimeexecutorp)) {
               libruntimeexecutorp -= parseFloat(`${1 ^ parseInt(`${footballtrophys}`)}`);
            }
            for (let r = 0; r < 2; r++) {
               let bufferL = 4.0;
               let arrowu = 1;
               let latnK = String.fromCharCode(112, 97, 103, 101, 110, 117, 109, 98, 101, 114, 95, 113, 95, 50, 0);
               footballtrophys += 1;
               bufferL /= Math.max(parseFloat(`${parseInt(`${bufferL}`)}`), 4);
               arrowu -= arrowu << (Math.min(latnK.length, 5));
               latnK = `${arrowu}`;
            }
            let predictionarrowH = footballtrophys <= 6313646.0;
            do {
               footballtrophys *= parseInt(`${footballtrophys}`) * parseInt(`${libruntimeexecutorp}`);
               if (predictionarrowH) {
                  break;
               }
            } while (((5.25 + footballtrophys) < 5.43) && predictionarrowH);
            ajax6 += (parseFloat(`${String.fromCharCode(52, 0) == mbbannerR ? parseInt(`${ajax6}`) : mbbannerR.length}`));
            if (unselectedY) {
               break;
            }
         } while ((ajax6 >= gesturem) && unselectedY);


         attributedstringB = `${back3.length}`;
         mbbannerR = `${(empty7 == String.fromCharCode(49, 0) ? privatechatbg5 : empty7.length)}`;

         let msg = `《${vod?.vod_name
            }》高清播放${"\n"}https://wwzj.tv/index.php/vod/play/id/${vod?.vod_id
            }/sid/1/nid/${currentEpisode + 1
            }.html${"\n"}${APP_NAME_CONST}-海量高清视频在线观看`;

         let sendS = 7249597 <= empty7.length;
         do {
            empty7 += `${3 ^ empty7.length}`;
            if (sendS) {
               break;
            }
         } while (sendS && (2 <= (parseInt(`${gesturem}`) - empty7.length) || (empty7.length - gesturem) <= 2.7));
         if ((1 + privatechatbg5) == 4) {
            ajax6 *= parseFloat(`${1}`);
         }

         if (APP_NAME_CONST == "娃娃追剧") {
            msg = `海量视频内容 随时随地 想看就看 ${"\n"}https://wwzj.tv`;

            gesturem /= Math.max(3, back3.length ^ privatechatbg5);
            for (let e = 0; e < 3; e++) {
               empty7 = `${1 / (Math.max(8, mbbannerR.length))}`;
            }
         }

         const result = await Share.share({
            message: msg,
         });

         let libswscaleM = true;
         let expiredG = true;
         let bellK = 5.0;
         let indicatorw: Array<any> = [418, 845, 552];
         expiredG = bellK == 26.83 || !libswscaleM;
         indicatorw = [2];
         bellK += (parseInt(`${bellK}`) & (expiredG ? 3 : 1));
         let pangleE = String.fromCharCode(106, 95, 50, 49, 95, 112, 114, 101, 102, 101, 116, 99, 104, 101, 114, 0);
         pangleE = `${((libswscaleM ? 1 : 3))}`;
         for (let d = 0; d < 2; d++) {
            let libreactnativejniV = 5;
            let update_ep = true;
            let score3 = false;
            libswscaleM = (1 >= (pangleE.length & (!score3 ? 1 : pangleE.length)));
            libreactnativejniV *= libreactnativejniV;
            update_ep = !update_ep || 74 == libreactnativejniV;
            score3 = update_ep;
         }
         expiredG = libswscaleM;
         let native2 = 0.0;
         let librrcc = 3.0;
         libswscaleM = 60.71 > librrcc;
         for (let u = 0; u < 3; u++) {
            expiredG = 37.39 >= native2;
         }
         privatechatbg5 ^= mbbannerR.length << (Math.min(Math.abs(1), 5));
         if (libavdevicee) {
            libavdevicee = (gesturem / (Math.max(empty7.length, 5))) <= 79.25;
         }
         if (result.action === Share.sharedAction) {

            attributedstringB += "3";
            attributedstringB += `${((libavdevicee ? 3 : 2) << (Math.min(Math.abs(parseInt(`${time_5kZ}`)), 1)))}`;
            if (result.activityType) {

            } else {

            }
         } else if (result.action === Share.dismissedAction) {

         }
      } catch (error) {

         privatechatbg5 |= mbbannerR.length;
         gesturem /= Math.max(parseInt(`${time_5kZ}`) - parseInt(`${gesturem}`), 3);
         Alert.alert(error.message);
      }
   };

   const checkConnection = async () => {
      let scoreg: Array<any> = [630, 204, 565];
      let other7 = 0.0;
      let yellowscoreballw: Map<any, any> = new Map([[String.fromCharCode(119, 95, 50, 56, 95, 106, 107, 101, 110, 99, 0), String.fromCharCode(116, 104, 114, 101, 97, 100, 103, 114, 111, 117, 112, 95, 100, 95, 54, 48, 0)], [String.fromCharCode(115, 116, 114, 116, 111, 108, 108, 95, 49, 95, 56, 52, 0), String.fromCharCode(97, 99, 99, 101, 115, 115, 111, 114, 121, 95, 51, 95, 51, 56, 0)]]);
      let langkeyI = 2.0;
      let overY = String.fromCharCode(102, 95, 52, 54, 95, 118, 105, 101, 119, 101, 100, 0);
      let setting9: Map<any, any> = new Map([[String.fromCharCode(114, 95, 55, 57, 95, 115, 105, 103, 118, 101, 114, 0), 278], [String.fromCharCode(117, 95, 50, 52, 95, 97, 115, 115, 111, 99, 0), 12]]);
      let debug3 = 4.0;
      let clubE = 3.0;
      let sellO = String.fromCharCode(102, 95, 51, 51, 95, 102, 114, 97, 110, 100, 111, 109, 0);
      let firebaseR: Array<any> = [171, 335, 83];
      let iconviewergifF = true;
      let active5: Map<any, any> = new Map([[String.fromCharCode(110, 95, 50, 49, 95, 98, 117, 108, 108, 101, 116, 115, 0), 977], [String.fromCharCode(122, 95, 49, 55, 95, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 109, 97, 103, 105, 99, 0), 519]]);
      let currentX: Array<any> = [402, 581, 5];
      let bootsplashY = String.fromCharCode(102, 111, 110, 116, 115, 105, 122, 101, 95, 114, 95, 57, 55, 0);
      let contextC = String.fromCharCode(97, 117, 116, 111, 114, 101, 118, 101, 114, 115, 101, 100, 95, 98, 95, 56, 49, 0);
      let libflipperQ: Array<any> = [476, 744, 191];
      active5 = new Map([[`${currentX.length}`, (String.fromCharCode(120, 0) == contextC ? contextC.length : currentX.length)]]);
      bootsplashY += `${libflipperQ.length << (Math.min(bootsplashY.length, 4))}`;
      libflipperQ.push(libflipperQ.length + 2);
      let confirmation0 = iconviewergifF ? !iconviewergifF : iconviewergifF;
      do {
         iconviewergifF = currentX.length < 31 && 31 < active5.size;
         if (confirmation0) {
            break;
         }
      } while (confirmation0 && ((active5.size - 2) < 3 && active5.size < 2));
      active5 = new Map([[`${active5.size}`, 2]]);
      let active5p = 4.0;
      let vietnamN = String.fromCharCode(115, 95, 50, 55, 95, 99, 111, 100, 101, 0);
      let appsL = 5.0;
      active5 = new Map([[`${active5.size}`, (String.fromCharCode(90, 0) == vietnamN ? vietnamN.length : active5.size)]]);
      active5p += parseInt(`${appsL}`);
      for (let d = 0; d < 3; d++) {
         active5 = new Map([[`${active5.size}`, currentX.length >> (Math.min(1, Math.abs(active5.size)))]]);
      }
      iconviewergifF = active5.size <= currentX.length;
      currentX.push(((iconviewergifF ? 1 : 1) & currentX.length));
      let libfbjniN = 1;
      iconviewergifF = currentX.length == 5 && libfbjniN == 5;
      let iconnewchat_ = String.fromCharCode(113, 117, 101, 117, 101, 115, 95, 117, 95, 50, 55, 0);
      let nbatrophya = String.fromCharCode(106, 95, 53, 54, 95, 104, 100, 108, 114, 0);
      other7 /= Math.max(parseInt(`${clubE}`), 3);
      while (4.18 > (3.77 / (Math.max(1, debug3)))) {
         debug3 *= 1 | setting9.size;
         break;
      }
      clubE /= Math.max(4, 1 | setting9.size);
      if (Array.from(yellowscoreballw.values()).includes(debug3)) {
         let styles5 = String.fromCharCode(109, 95, 50, 53, 95, 103, 101, 116, 116, 105, 109, 101, 111, 102, 100, 97, 121, 0);
         let watchnowbgC: Array<any> = [785, 490, 646];
         watchnowbgC = [watchnowbgC.length];
         styles5 += `${watchnowbgC.length & styles5.length}`;
         let uimanagerw = watchnowbgC.length >= 5223117;
         do {
            watchnowbgC.push((styles5 == String.fromCharCode(48, 0) ? styles5.length : watchnowbgC.length));
            if (uimanagerw) {
               break;
            }
         } while (uimanagerw && ((5 % (Math.max(2, watchnowbgC.length))) == 2 || 4 == (styles5.length % 5)));
         let closew = String.fromCharCode(108, 95, 53, 53, 95, 97, 110, 115, 119, 101, 114, 0);
         watchnowbgC = [(String.fromCharCode(116, 0) == styles5 ? styles5.length : closew.length)];
         for (let x = 0; x < 1; x++) {
            watchnowbgC = [(styles5 == String.fromCharCode(88, 0) ? styles5.length : watchnowbgC.length)];
         }
         while (watchnowbgC.length >= 1) {
            styles5 += "2";
            break;
         }
         debug3 *= 3 / (Math.max(6, overY.length));
      }

      const state = await NetInfo.fetch();

      other7 += parseInt(`${debug3}`);
      let policyk = String.fromCharCode(117, 95, 53, 95, 99, 112, 105, 97, 0);
      policyk += `${1 & policyk.length}`;
      while (policyk.endsWith(policyk)) {
         policyk += `${policyk.length}`;
         break;
      }
      let libmapbufferjniO = String.fromCharCode(118, 97, 114, 119, 105, 100, 116, 104, 95, 109, 95, 49, 53, 0);
      let matchdetailbgf = 3;
      policyk += `${policyk.length ^ matchdetailbgf}`;
      libmapbufferjniO += "2";
      matchdetailbgf %= Math.max(2, 1 | libmapbufferjniO.length);
      other7 += parseInt(`${langkeyI}`) & 1;
      let defaultbasketballbgw = 5984869 >= scoreg.length;
      do {
         let reactnavigationi = 5;
         let textx: Map<any, any> = new Map([[String.fromCharCode(116, 111, 108, 111, 119, 101, 114, 95, 118, 95, 50, 0), 375], [String.fromCharCode(116, 114, 101, 97, 116, 95, 116, 95, 53, 48, 0), 791]]);
         let footballfiledlayouti = String.fromCharCode(101, 95, 52, 53, 95, 100, 115, 112, 114, 0);
         while (2 < (footballfiledlayouti.length << (Math.min(Math.abs(5), 5)))) {
            footballfiledlayouti = `${reactnavigationi}`;
            break;
         }
         while (Array.from(textx.keys()).includes(`${reactnavigationi}`)) {
            let collectiong: Map<any, any> = new Map([[String.fromCharCode(109, 100, 99, 116, 95, 56, 95, 57, 0), String.fromCharCode(107, 95, 55, 52, 95, 101, 120, 112, 111, 114, 116, 101, 100, 0)], [String.fromCharCode(109, 95, 51, 50, 95, 114, 101, 102, 105, 110, 105, 110, 103, 0), String.fromCharCode(102, 95, 51, 53, 95, 114, 101, 116, 117, 114, 110, 0)], [String.fromCharCode(103, 95, 56, 48, 95, 110, 97, 110, 112, 97, 0), String.fromCharCode(116, 117, 114, 110, 95, 97, 95, 52, 51, 0)]]);
            let playershirt2 = false;
            let loginsuccessg: Map<any, any> = new Map([[String.fromCharCode(101, 120, 116, 101, 114, 110, 95, 118, 95, 52, 49, 0), 967], [String.fromCharCode(105, 110, 116, 114, 97, 112, 114, 101, 100, 95, 98, 95, 56, 55, 0), 709], [String.fromCharCode(112, 105, 110, 107, 95, 108, 95, 55, 52, 0), 881]]);
            textx = new Map([[`${textx.size}`, footballfiledlayouti.length]]);
            collectiong = new Map([[`${loginsuccessg.size}`, loginsuccessg.size]]);
            playershirt2 = playershirt2 || collectiong.size >= 9;
            break;
         }
         reactnavigationi /= Math.max(3, footballfiledlayouti.length * 3);
         let phonesharef: Map<any, any> = new Map([[String.fromCharCode(105, 95, 50, 48, 95, 99, 108, 116, 111, 115, 116, 114, 0), true], [String.fromCharCode(110, 95, 57, 55, 95, 102, 116, 118, 109, 111, 0), true], [String.fromCharCode(115, 95, 54, 51, 95, 115, 117, 98, 118, 97, 108, 117, 101, 0), false]]);
         let mbnativeadvancedo: Map<any, any> = new Map([[String.fromCharCode(100, 101, 114, 105, 118, 97, 116, 105, 118, 101, 95, 111, 95, 51, 51, 0), 955], [String.fromCharCode(109, 95, 49, 51, 0), 353]]);
         footballfiledlayouti = `${textx.size}`;
         let libavutil0 = true;
         let redirecti: Map<any, any> = new Map([[String.fromCharCode(106, 115, 111, 110, 114, 112, 99, 95, 120, 95, 56, 50, 0), 947], [String.fromCharCode(120, 95, 52, 48, 95, 115, 112, 101, 101, 100, 111, 109, 101, 116, 101, 114, 0), 33], [String.fromCharCode(101, 95, 51, 56, 95, 110, 109, 109, 105, 110, 116, 114, 105, 110, 0), 345]]);
         reactnavigationi &= 2 * mbnativeadvancedo.size;
         libavutil0 = 13 <= redirecti.size;
         redirecti.set(`${redirecti.size}`, 3);
         footballfiledlayouti += `${footballfiledlayouti.length}`;
         let gestureZ: Map<any, any> = new Map([[String.fromCharCode(118, 101, 110, 117, 101, 95, 97, 95, 52, 52, 0), 689], [String.fromCharCode(108, 97, 115, 116, 110, 111, 100, 101, 95, 114, 95, 49, 48, 48, 0), 301], [String.fromCharCode(116, 116, 97, 100, 97, 116, 97, 95, 117, 95, 50, 50, 0), 813]]);
         let overlayV = false;
         let sourceu = String.fromCharCode(112, 114, 101, 102, 97, 99, 101, 95, 108, 95, 53, 54, 0);
         phonesharef = new Map([[`${textx.size}`, mbnativeadvancedo.size << (Math.min(Math.abs(textx.size), 1))]]);
         gestureZ = new Map([[sourceu, ((overlayV ? 1 : 3) << (Math.min(Math.abs(1), 3)))]]);
         overlayV = !sourceu.startsWith(`${overlayV}`);
         while ((phonesharef.size % 2) < 1) {
            mbnativeadvancedo = new Map([[`${mbnativeadvancedo.size}`, 1 * mbnativeadvancedo.size]]);
            break;
         }
         scoreg.push(reactnavigationi >> (Math.min(Math.abs(yellowscoreballw.size), 2)));
         if (defaultbasketballbgw) {
            break;
         }
      } while (defaultbasketballbgw && (!scoreg.includes(langkeyI)));
      for (let y = 0; y < 2; y++) {
         let downloadingH = 5;
         let logout5 = 2;
         let weiboa = 0.0;
         logout5 /= Math.max(downloadingH, 4);
         logout5 -= 3 >> (Math.min(2, Math.abs(downloadingH)));
         for (let e = 0; e < 1; e++) {
            logout5 -= 2 ^ downloadingH;
         }
         if (logout5 < 1) {
            logout5 += 2;
         }
         let airbnbstarselected_ = 1.0;
         let chatb = false;
         let mbbannerX = 4.0;
         logout5 >>= Math.min(Math.abs(2), 4);
         airbnbstarselected_ *= parseFloat(`${parseInt(`${mbbannerX}`)}`);
         chatb = 28.92 <= mbbannerX;
         let settingsA = String.fromCharCode(99, 111, 110, 102, 108, 105, 99, 116, 101, 100, 95, 53, 95, 54, 48, 0);
         logout5 /= Math.max(2, 2);
         settingsA += "3";
         let mbsplashV = String.fromCharCode(100, 109, 97, 99, 95, 52, 95, 57, 52, 0);
         let filter9 = String.fromCharCode(99, 116, 97, 98, 108, 101, 115, 95, 55, 95, 57, 53, 0);
         let hooksj: Array<any> = [727, 187];
         logout5 |= 2 * logout5;
         mbsplashV += `${3 >> (Math.min(1, mbsplashV.length))}`;
         filter9 = `${3 + mbsplashV.length}`;
         hooksj = [(String.fromCharCode(103, 0) == mbsplashV ? hooksj.length : mbsplashV.length)];
         if (2 > (logout5 * 5)) {
            let serviceC: Map<any, any> = new Map([[String.fromCharCode(97, 109, 101, 114, 97, 95, 120, 95, 50, 0), 607], [String.fromCharCode(107, 95, 53, 53, 95, 105, 114, 99, 97, 109, 0), 443], [String.fromCharCode(104, 101, 120, 99, 104, 97, 114, 105, 110, 116, 95, 56, 95, 51, 53, 0), 465]]);
            downloadingH /= Math.max(5, 2 + parseInt(`${weiboa}`));
            serviceC.set(`${serviceC.size}`, 3);
         }
         if (5.80 >= (1.21 + weiboa) && 5 >= (downloadingH & 2)) {
            let sortV = String.fromCharCode(118, 95, 54, 53, 95, 117, 110, 112, 114, 101, 109, 117, 108, 116, 105, 112, 108, 121, 121, 117, 118, 0);
            let imagemanagerA = String.fromCharCode(102, 105, 108, 101, 110, 97, 109, 101, 115, 95, 121, 95, 57, 53, 0);
            downloadingH /= Math.max(3, 1);
            sortV += `${sortV.length - 3}`;
            imagemanagerA = `${imagemanagerA.length}`;
         }
         debug3 -= downloadingH % (Math.max(parseInt(`${debug3}`), 9));
      }
      const offline = !(state.isConnected && state.isInternetReachable);

      if ((2 ^ setting9.size) < 1 && (other7 / 4.13) < 5.66) {
         let paginationF = 5;
         let phoneshareJ = String.fromCharCode(105, 95, 54, 51, 95, 110, 117, 109, 98, 101, 114, 115, 0);
         for (let l = 0; l < 2; l++) {
            let footballfiledlayoutD: Array<any> = [String.fromCharCode(109, 117, 108, 116, 105, 112, 108, 101, 114, 95, 53, 95, 53, 49, 0), String.fromCharCode(97, 95, 54, 57, 95, 108, 111, 119, 101, 114, 99, 97, 115, 101, 100, 0), String.fromCharCode(98, 95, 52, 56, 95, 102, 115, 121, 110, 99, 0)];
            let component4: Array<any> = [146, 573];
            let abidetectQ = String.fromCharCode(111, 110, 116, 101, 120, 116, 95, 118, 95, 50, 48, 0);
            paginationF &= paginationF / 3;
            footballfiledlayoutD = [component4.length];
            component4 = [(abidetectQ == String.fromCharCode(57, 0) ? component4.length : abidetectQ.length)];
         }
         let defaultplayerimge = String.fromCharCode(98, 95, 49, 56, 95, 108, 105, 109, 105, 116, 101, 100, 0);
         let binddatasv = String.fromCharCode(109, 95, 57, 51, 95, 104, 105, 110, 116, 0);
         let libreactI = String.fromCharCode(117, 110, 105, 102, 111, 114, 109, 95, 103, 95, 57, 54, 0);
         phoneshareJ = `${3 - binddatasv.length}`;
         defaultplayerimge += `${libreactI.length}`;
         binddatasv = `${libreactI.length}`;
         let twitterj = true;
         let championp = 2.0;
         let analyticz = 4;
         phoneshareJ += `${3 & phoneshareJ.length}`;
         twitterj = 58 == (championp - analyticz);
         championp /= Math.max(4, 1 * analyticz);
         let huawei4: Array<any> = [561, 791];
         let eactK = 2.0;
         let memberx = String.fromCharCode(115, 105, 103, 110, 105, 102, 105, 99, 97, 110, 116, 95, 55, 95, 49, 56, 0);
         paginationF += memberx.length;
         huawei4 = [2 % (Math.max(6, huawei4.length))];
         eactK += parseFloat(`${huawei4.length * parseInt(`${eactK}`)}`);
         memberx = `${1 - parseInt(`${eactK}`)}`;
         phoneshareJ = `${3 & paginationF}`;
         for (let p = 0; p < 1; p++) {
            paginationF |= paginationF;
         }
         other7 -= parseInt(`${langkeyI}`);
      }
      while ((2 << (Math.min(3, overY.length))) < 4) {
         overY = `${parseInt(`${langkeyI}`) ^ parseInt(`${clubE}`)}`;
         break;
      }
      while (Array.from(setting9.keys()).includes(`${scoreg.length}`)) {
         scoreg.push(scoreg.length);
         break;
      }
      if ((setting9.size / (Math.max(1, 9))) == 4 && (setting9.size / (Math.max(overY.length, 6))) == 1) {
         let libswresampleK = String.fromCharCode(101, 95, 53, 95, 103, 117, 97, 114, 97, 110, 116, 101, 101, 115, 0);
         let predictionwinG: Map<any, any> = new Map([[String.fromCharCode(105, 110, 98, 111, 120, 95, 107, 95, 49, 50, 0), 299], [String.fromCharCode(101, 95, 49, 49, 95, 115, 117, 98, 115, 121, 115, 116, 101, 109, 0), 264], [String.fromCharCode(114, 95, 57, 54, 95, 112, 97, 114, 97, 109, 0), 963]]);
         let defaultprofilepick = String.fromCharCode(110, 95, 51, 55, 95, 114, 101, 102, 100, 117, 112, 101, 0);
         if (defaultprofilepick == libswresampleK) {
            let time_iB = String.fromCharCode(120, 95, 55, 48, 0);
            let brightnesss = String.fromCharCode(114, 95, 53, 50, 95, 100, 101, 102, 97, 117, 108, 116, 99, 111, 101, 102, 99, 111, 117, 110, 116, 115, 0);
            let iconnotificationnewJ = 3;
            libswresampleK = `${predictionwinG.size}`;
            time_iB = `${3 ^ brightnesss.length}`;
            brightnesss += `${iconnotificationnewJ / 1}`;
            iconnotificationnewJ <<= Math.min(1, Math.abs(brightnesss.length + 3));
         }
         let ksadc = String.fromCharCode(54, 121, 51, 101, 51, 102, 121, 102, 0) == libswresampleK;
         do {
            let imageactionlive_: Map<any, any> = new Map([[String.fromCharCode(101, 120, 112, 111, 115, 117, 114, 101, 95, 99, 95, 49, 53, 0), false], [String.fromCharCode(114, 95, 54, 56, 95, 117, 110, 105, 0), false]]);
            let arrowselectdownz = String.fromCharCode(108, 95, 55, 95, 100, 105, 115, 112, 108, 97, 99, 101, 109, 101, 110, 116, 0);
            let libjsinspectoru: Map<any, any> = new Map([[String.fromCharCode(115, 95, 54, 48, 95, 104, 101, 120, 98, 105, 110, 0), false], [String.fromCharCode(122, 95, 56, 57, 95, 99, 114, 105, 116, 105, 99, 97, 108, 0), false], [String.fromCharCode(104, 101, 97, 100, 115, 95, 55, 95, 50, 52, 0), true]]);
            let link8 = String.fromCharCode(109, 117, 108, 116, 95, 57, 95, 53, 55, 0);
            let index1: Map<any, any> = new Map([[String.fromCharCode(97, 100, 100, 95, 103, 95, 52, 48, 0), true], [String.fromCharCode(104, 95, 50, 53, 95, 104, 97, 110, 103, 117, 112, 0), true]]);
            libswresampleK += `${predictionwinG.size}`;
            imageactionlive_ = new Map([[`${index1.size}`, (link8 == String.fromCharCode(57, 0) ? link8.length : index1.size)]]);
            arrowselectdownz += "1";
            libjsinspectoru = new Map([[`${libjsinspectoru.size}`, arrowselectdownz.length + 3]]);
            if (ksadc) {
               break;
            }
         } while (ksadc && (defaultprofilepick == String.fromCharCode(90, 0)));
         let clearG = 1.0;
         let runtimeL = String.fromCharCode(115, 105, 103, 110, 105, 102, 105, 99, 97, 110, 100, 95, 49, 95, 50, 55, 0);
         defaultprofilepick = `${parseInt(`${clearG}`) ^ runtimeL.length}`;
         let finit_s2J = predictionwinG.size <= 7326853;
         do {
            let scheduler3 = 4.0;
            let containerD = String.fromCharCode(115, 95, 56, 54, 95, 114, 111, 117, 110, 100, 105, 110, 103, 0);
            predictionwinG = new Map([[`${predictionwinG.size}`, parseInt(`${scheduler3}`) + predictionwinG.size]]);
            scheduler3 /= Math.max(3, (parseFloat(`${containerD == String.fromCharCode(99, 0) ? containerD.length : containerD.length}`)));
            if (finit_s2J) {
               break;
            }
         } while ((5 <= (predictionwinG.size + libswresampleK.length) || (predictionwinG.size + libswresampleK.length) <= 5) && finit_s2J);
         if (libswresampleK.startsWith(defaultprofilepick)) {
            let modulesm = false;
            let androidl = String.fromCharCode(100, 95, 56, 56, 0);
            let readA = String.fromCharCode(110, 95, 51, 54, 95, 101, 110, 116, 105, 116, 105, 116, 121, 0);
            let dacccfaabfbcbadeebddcabacdffdbR = 2.0;
            let usernamem = true;
            libswresampleK += `${androidl.length >> (Math.min(Math.abs(2), 5))}`;
            modulesm = dacccfaabfbcbadeebddcabacdffdbR > 10.76;
            androidl = `${(String.fromCharCode(95, 0) == readA ? readA.length : (usernamem ? 4 : 2))}`;
            dacccfaabfbcbadeebddcabacdffdbR -= parseInt(`${dacccfaabfbcbadeebddcabacdffdbR}`) / (Math.max(2, readA.length));
            usernamem = dacccfaabfbcbadeebddcabacdffdbR > 32.33;
         }
         for (let r = 0; r < 2; r++) {
            predictionwinG.set(libswresampleK, libswresampleK.length);
         }
         while ((3 % (Math.max(4, predictionwinG.size))) < 2 || (defaultprofilepick.length % 3) < 4) {
            predictionwinG = new Map([[defaultprofilepick, libswresampleK.length >> (Math.min(Math.abs(2), 3))]]);
            break;
         }
         for (let i = 0; i < 3; i++) {
            predictionwinG.set(libswresampleK, predictionwinG.size >> (Math.min(Math.abs(3), 5)));
         }
         let arrowrightwithtail5 = 6807174 <= predictionwinG.size;
         do {
            predictionwinG.set(defaultprofilepick, 2);
            if (arrowrightwithtail5) {
               break;
            }
         } while (arrowrightwithtail5 && (!defaultprofilepick.endsWith(`${predictionwinG.size}`)));
         overY = `${1 >> (Math.min(5, overY.length))}`;
      }
      setIsOffline(offline);

      langkeyI += 3 >> (Math.min(3, scoreg.length));
      clubE += parseInt(`${debug3}`);
      setting9 = new Map([[`${setting9.size}`, 1]]);
      if (!overY.endsWith(`${langkeyI}`)) {
         overY = "2";
      }

      if (offline) {

         if (4 < (2 >> (Math.min(3, scoreg.length))) || 2.59 < (langkeyI / 1.92)) {
            scoreg = [1];
         }
         let sendv = 3;
         sendv &= 1;
         for (let v = 0; v < 3; v++) {
            let auto_7D = 1.0;
            let plusc: Array<any> = [84, 282];
            let airbnbstart: Array<any> = [396, 411];
            let bdxadsdkT = 1.0;
            sendv *= parseInt(`${auto_7D}`) | sendv;
            auto_7D -= parseInt(`${bdxadsdkT}`) + airbnbstart.length;
            plusc.push(plusc.length + parseInt(`${bdxadsdkT}`));
            airbnbstart.push(plusc.length ^ airbnbstart.length);
         }
         sendv >>= Math.min(1, Math.abs(3 - sendv));
         overY = "2";
         while (3 == (setting9.size | 5)) {
            setting9 = new Map([[`${scoreg.length}`, 2 + overY.length]]);
            break;
         }
         if (5 < (4 / (Math.max(2, setting9.size))) || (4.54 * debug3) < 3.54) {
            setting9 = new Map([[`${scoreg.length}`, overY.length]]);
         }
         setDismountPlayer(false);
      }

   };























   //   return () => clearInterval(interval)


   useEffect(() => {
      if (vod) {
         setInitTime(vod?.timeWatched);
         setReadyPlay(false);




         wawa_dacccfaabfbcbadeebddcabacdffdbc_video.playsViewsAnalytics({
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
         wawaUsernameAdult.getDetail(
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
      let invitem = 1.0;
      let iconnewchatc = 3;
      let navigationy = 5.0;
      let screen5 = String.fromCharCode(114, 95, 50, 52, 95, 97, 105, 116, 101, 114, 0);
      let edit_ = String.fromCharCode(115, 101, 116, 108, 101, 99, 116, 101, 100, 95, 113, 95, 51, 50, 0);
      let arrowselectdowna = String.fromCharCode(118, 95, 55, 53, 95, 118, 105, 115, 105, 98, 105, 108, 105, 116, 105, 116, 101, 115, 0);
      let dependenciesZ = String.fromCharCode(113, 95, 51, 57, 95, 114, 114, 111, 114, 0);
      let iconarrowrightblackm = String.fromCharCode(111, 95, 51, 49, 95, 114, 101, 99, 111, 114, 100, 101, 114, 0);
      let penaltymatchiconK = 2;
      let basea = String.fromCharCode(97, 97, 99, 101, 110, 99, 100, 115, 112, 95, 55, 95, 52, 49, 0);
      let bggradientF = true;
      let libzeusY = 2.0;
      let watch7: Array<any> = [302, 794];
      let airbnbstarselectedg = String.fromCharCode(115, 101, 116, 115, 95, 122, 95, 51, 55, 0);
      let nalyticsD = String.fromCharCode(114, 101, 115, 105, 115, 116, 97, 110, 99, 101, 95, 49, 95, 52, 52, 0);
      let klevinR = 2.0;
      let grey4 = String.fromCharCode(107, 95, 52, 49, 95, 118, 109, 97, 116, 114, 105, 120, 0);
      iconnewchatc ^= (String.fromCharCode(103, 0) == arrowselectdowna ? basea.length : arrowselectdowna.length);
      if ((navigationy / (Math.max(9, edit_.length))) <= 3.18 || 5 <= (3 >> (Math.min(3, edit_.length)))) {
         let orangedownarrowE = false;
         let mbnativeN = String.fromCharCode(105, 95, 48, 95, 115, 121, 115, 99, 116, 108, 0);
         let eyecloseX = String.fromCharCode(102, 102, 109, 97, 116, 104, 95, 97, 95, 56, 55, 0);
         let iconstarj = 1.0;
         mbnativeN += `${((orangedownarrowE ? 4 : 3) + eyecloseX.length)}`;
         orangedownarrowE = eyecloseX.length >= 65;
         if (eyecloseX.includes(`${orangedownarrowE}`)) {
            eyecloseX += `${mbnativeN.length}`;
         }
         if (mbnativeN.startsWith(`${iconstarj}`)) {
            iconstarj += (parseFloat(`${String.fromCharCode(122, 0) == eyecloseX ? eyecloseX.length : parseInt(`${iconstarj}`)}`));
         }
         let whistleoranger = String.fromCharCode(104, 95, 51, 50, 95, 115, 104, 111, 114, 116, 101, 114, 0);
         let executor2 = String.fromCharCode(97, 95, 56, 52, 0);
         mbnativeN = `${((orangedownarrowE ? 2 : 1) ^ 1)}`;
         whistleoranger = "2";
         executor2 = `${executor2.length}`;
         while (2.19 <= (2.91 + iconstarj)) {
            iconstarj -= (parseFloat(`${mbnativeN == String.fromCharCode(103, 0) ? (orangedownarrowE ? 5 : 5) : mbnativeN.length}`));
            break;
         }
         iconstarj += parseFloat(`${1}`);
         let referrer8 = false;
         let moon0 = 5.0;
         let actionsV: Array<any> = [113, 724, 29];
         iconstarj -= parseFloat(`${mbnativeN.length}`);
         referrer8 = !referrer8;
         moon0 += 2 & parseInt(`${moon0}`);
         actionsV.push(((referrer8 ? 1 : 3) * parseInt(`${moon0}`)));
         mbnativeN += `${mbnativeN.length}`;
         while (eyecloseX.includes(`${mbnativeN.length}`)) {
            let runtimei = String.fromCharCode(98, 95, 49, 53, 95, 100, 101, 113, 117, 97, 110, 116, 105, 122, 101, 0);
            let type_fV = 4.0;
            eyecloseX += `${3 * runtimei.length}`;
            runtimei += `${parseInt(`${type_fV}`)}`;
            break;
         }
         eyecloseX += `${mbnativeN.length}`;
         let taiwanP = 3.0;
         edit_ = `${screen5.length << (Math.min(Math.abs(3), 5))}`;
      }
      let penaltyshootnogoalG = 8275329 <= penaltymatchiconK;
      do {
         penaltymatchiconK &= 2;
         if (penaltyshootnogoalG) {
            break;
         }
      } while ((basea.length <= 3) && penaltyshootnogoalG);
      screen5 = `${arrowselectdowna.length}`;
      for (let m = 0; m < 2; m++) {
         dependenciesZ = `${arrowselectdowna.length | iconarrowrightblackm.length}`;
      }
      edit_ = `${((bggradientF ? 3 : 4) << (Math.min(Math.abs(parseInt(`${libzeusY}`)), 1)))}`;

      const promise = async () => downloadedVod?.vod;

      dependenciesZ += "3";
      let filem = String.fromCharCode(115, 99, 114, 117, 98, 98, 101, 114, 95, 98, 95, 53, 49, 0);
      let orangedownarrowf = String.fromCharCode(112, 97, 115, 115, 112, 104, 114, 97, 115, 101, 95, 106, 95, 53, 51, 0);
      orangedownarrowf += "3";
      orangedownarrowf = `${orangedownarrowf.length >> (Math.min(Math.abs(1), 5))}`;
      navigationy *= (String.fromCharCode(111, 0) == iconarrowrightblackm ? parseInt(`${libzeusY}`) : iconarrowrightblackm.length);
      filem = `${2 | filem.length}`;
      edit_ += `${(iconarrowrightblackm == String.fromCharCode(85, 0) ? iconarrowrightblackm.length : iconnewchatc)}`;
      for (let t = 0; t < 1; t++) {
         screen5 += `${(parseInt(`${libzeusY}`) << (Math.min(1, Math.abs((bggradientF ? 3 : 1)))))}`;
      }
      let sigmobe = true;
      let bellremindery: Map<any, any> = new Map([[String.fromCharCode(108, 111, 99, 111, 95, 102, 95, 54, 50, 0), 117], [String.fromCharCode(112, 107, 99, 115, 95, 57, 95, 54, 51, 0), 276]]);
      let hooksx = 2;
      while (4 <= bellremindery.size) {
         sigmobe = !sigmobe;
         break;
      }
      let strings = 3.0;
      let reducer_ = sigmobe ? !sigmobe : sigmobe;
      do {
         sigmobe = strings <= 52.12;
         if (reducer_) {
            break;
         }
      } while (reducer_ && (3 < (5 & bellremindery.size) && 5 < bellremindery.size));
      while ((bellremindery.size % 2) <= 4 && 2 <= bellremindery.size) {
         sigmobe = 57.81 <= strings;
         break;
      }
      while (4 < hooksx) {
         let tempnodatak = String.fromCharCode(116, 114, 97, 99, 101, 95, 48, 95, 56, 55, 0);
         let libavformatM = true;
         let searchV = 5.0;
         let currentX = 2;
         sigmobe = 55.28 >= strings;
         tempnodatak = `${(1 / (Math.max(6, (libavformatM ? 4 : 4))))}`;
         libavformatM = 81 >= tempnodatak.length || 81 >= currentX;
         searchV -= parseFloat(`${currentX << (Math.min(3, Math.abs(1)))}`);
         break;
      }
      let middlev = 8252150.0 >= strings;
      do {
         strings /= Math.max(parseFloat(`${parseInt(`${strings}`)}`), 5);
         if (middlev) {
            break;
         }
      } while (((strings + 1.74) <= 4.54 || 1.74 <= strings) && middlev);
      while (sigmobe) {
         sigmobe = !sigmobe;
         break;
      }
      strings -= parseFloat(`${parseInt(`${strings}`)}`);
      let v_lockQ = String.fromCharCode(97, 117, 116, 111, 95, 118, 95, 49, 53, 0);
      let executorn = true;
      bellremindery.set(`${hooksx}`, 3);
      v_lockQ = `${(v_lockQ == String.fromCharCode(110, 0) ? v_lockQ.length : (executorn ? 3 : 2))}`;
      executorn = !v_lockQ.endsWith(`${executorn}`);
      screen5 += `${iconarrowrightblackm.length >> (Math.min(4, screen5.length))}`;
      invitem += (screen5 == String.fromCharCode(79, 0) ? screen5.length : (bggradientF ? 1 : 2));
      if (isOffline) {

         edit_ = `${(arrowselectdowna == String.fromCharCode(68, 0) ? arrowselectdowna.length : dependenciesZ.length)}`;
         if ((libzeusY + invitem) > 4.28) {
            invitem -= basea.length;
         }
         while ((navigationy + 5.50) == 5.35) {
            bggradientF = invitem > 10.48;
            break;
         }
         let s_positioni: Array<any> = [986, 996, 723];
         let privatechatbgi = false;
         let unimplementedviewZ = 3.0;
         let androidL = String.fromCharCode(99, 95, 55, 55, 95, 118, 109, 97, 116, 114, 105, 120, 0);
         while ((androidL.length + unimplementedviewZ) == 5.27 || 4 == (androidL.length + 1)) {
            androidL = `${(String.fromCharCode(48, 0) == androidL ? (privatechatbgi ? 2 : 2) : androidL.length)}`;
            break;
         }
         let regengm: Array<any> = [815, 695, 797];
         let renderG: Array<any> = [953, 987];
         for (let o = 0; o < 3; o++) {
            unimplementedviewZ /= Math.max(3, 4);
         }
         for (let m = 0; m < 1; m++) {
            androidL = `${(2 - (privatechatbgi ? 2 : 4))}`;
         }
         while (3.16 < (unimplementedviewZ / (Math.max(5.42, 6))) && 5.42 < (renderG.length / (Math.max(6, unimplementedviewZ)))) {
            let positionfield9 = String.fromCharCode(103, 101, 116, 120, 118, 97, 114, 95, 56, 95, 54, 48, 0);
            renderG.push(1 / (Math.max(parseInt(`${unimplementedviewZ}`), 9)));
            positionfield9 = `${positionfield9.length << (Math.min(3, positionfield9.length))}`;
            break;
         }
         for (let v = 0; v < 3; v++) {
            unimplementedviewZ *= parseInt(`${unimplementedviewZ}`);
         }
         for (let p = 0; p < 1; p++) {
            s_positioni.push(renderG.length | 3);
         }
         for (let c = 0; c < 2; c++) {
            renderG = [renderG.length - parseInt(`${unimplementedviewZ}`)];
         }
         basea += `${s_positioni.length & parseInt(`${unimplementedviewZ}`)}`;
         edit_ = `${((bggradientF ? 3 : 1) / (Math.max(10, parseInt(`${libzeusY}`))))}`;
         watch7 = [watch7.length];
         console.debug("is offline");

         let matchesL = 5.0;
         let jingdongf = 1;
         let hongkongS = String.fromCharCode(102, 95, 52, 57, 95, 115, 97, 109, 112, 108, 101, 100, 0);
         let loading7 = String.fromCharCode(110, 101, 120, 116, 104, 111, 112, 95, 49, 95, 54, 51, 0);
         let bootsplashI = String.fromCharCode(114, 101, 119, 114, 105, 116, 101, 114, 95, 48, 95, 55, 0);
         jingdongf |= 2 << (Math.min(4, loading7.length));
         hongkongS += `${hongkongS.length}`;
         loading7 += `${2 | bootsplashI.length}`;
         bootsplashI = "2";
         if (4.84 == (jingdongf / (Math.max(matchesL, 3)))) {
            matchesL *= parseFloat(`${jingdongf}`);
         }
         for (let c = 0; c < 2; c++) {
            jingdongf /= Math.max(parseInt(`${matchesL}`) & jingdongf, 5);
         }
         let profileV = String.fromCharCode(115, 97, 109, 101, 95, 50, 95, 56, 55, 0);
         let nativeA = String.fromCharCode(107, 101, 99, 99, 97, 107, 95, 54, 95, 57, 53, 0);
         let xvodS: Array<any> = [339, 545, 48];
         matchesL += parseFloat(`${parseInt(`${matchesL}`) ^ 3}`);
         profileV += `${xvodS.length}`;
         nativeA = "1";
         xvodS.push((nativeA == String.fromCharCode(107, 0) ? xvodS.length : nativeA.length));
         let megaphoneK: Array<any> = [96, 182, 704];
         let benefitD: Array<any> = [102, 171, 922];
         jingdongf /= Math.max(3, megaphoneK.length ^ jingdongf);
         bggradientF = 78 > (iconnewchatc * invitem);
         if (basea.includes(`${penaltymatchiconK}`)) {
            penaltymatchiconK &= penaltymatchiconK;
         }
         let sigmobg = 6486927 >= edit_.length;
         do {
            let statisticsN = String.fromCharCode(120, 95, 49, 48, 48, 95, 110, 111, 116, 0);
            let progressh = 5122490 >= statisticsN.length;
            do {
               statisticsN += `${3 + statisticsN.length}`;
               if (progressh) {
                  break;
               }
            } while (progressh && (statisticsN.length > 2));
            statisticsN += `${statisticsN.length}`;
            statisticsN += `${statisticsN.length}`;
            edit_ = "3";
            if (sigmobg) {
               break;
            }
         } while ((3 >= dependenciesZ.length) && sigmobg);
         arrowselectdowna = `${edit_.length % 1}`;
         bggradientF = !bggradientF;
         let buildU = String.fromCharCode(122, 95, 49, 50, 95, 97, 110, 97, 108, 121, 122, 101, 114, 0);
         buildU += `${buildU.length * 2}`;
         while (buildU == String.fromCharCode(86, 0)) {
            buildU = `${buildU.length}`;
            break;
         }
         let launch_: Array<any> = [638, 662];
         arrowselectdowna = `${parseInt(`${navigationy}`) / (Math.max(dependenciesZ.length, 2))}`;
         return promise();
      } else {

         if (basea != String.fromCharCode(105, 0) || screen5 == String.fromCharCode(75, 0)) {
            screen5 = `${parseInt(`${navigationy}`)}`;
         }
         if (1 >= iconarrowrightblackm.length) {
            let commonJ = 3;
            let libcxxcomponentsS = 3;
            let update_wy = String.fromCharCode(107, 95, 54, 55, 95, 115, 112, 108, 105, 116, 116, 101, 100, 0);
            let footballtrophym = 4.0;
            let tempnodataV = String.fromCharCode(97, 95, 50, 55, 95, 112, 102, 102, 102, 116, 0);
            let reactnativejsQ = String.fromCharCode(97, 99, 99, 101, 110, 116, 95, 105, 95, 54, 54, 0);
            let reviewF = 0;
            let moduleM: Map<any, any> = new Map([[String.fromCharCode(118, 95, 55, 56, 95, 115, 117, 112, 112, 114, 101, 115, 115, 105, 111, 110, 0), 608], [String.fromCharCode(115, 95, 55, 95, 112, 111, 112, 0), 829]]);
            update_wy += `${reactnativejsQ.length}`;
            reactnativejsQ = `${reviewF << (Math.min(Math.abs(1), 3))}`;
            reviewF += moduleM.size;
            moduleM.set(`${reviewF}`, 1 | reviewF);
            for (let k = 0; k < 1; k++) {
               update_wy += `${libcxxcomponentsS & tempnodataV.length}`;
            }
            let shareblackC: Array<any> = [661, 239, 730];
            commonJ += 3 / (Math.max(10, shareblackC.length));
            let matchZ = 9239307.0 <= footballtrophym;
            do {
               footballtrophym += parseFloat(`${1}`);
               if (matchZ) {
                  break;
               }
            } while (matchZ && (!update_wy.endsWith(`${footballtrophym}`)));
            let mappingB = 7841326 >= libcxxcomponentsS;
            do {
               libcxxcomponentsS >>= Math.min(3, tempnodataV.length);
               if (mappingB) {
                  break;
               }
            } while ((2 > tempnodataV.length) && mappingB);
            let homeloadingR = 3.0;
            let diceA = 0.0;
            update_wy += `${parseInt(`${diceA}`) ^ update_wy.length}`;
            let awayteamfieldX = footballtrophym <= 5417007.0;
            do {
               footballtrophym /= Math.max(4, parseFloat(`${1 / (Math.max(9, libcxxcomponentsS))}`));
               if (awayteamfieldX) {
                  break;
               }
            } while (awayteamfieldX && (libcxxcomponentsS <= footballtrophym));
            footballtrophym -= parseFloat(`${3 >> (Math.min(2, Math.abs(parseInt(`${homeloadingR}`))))}`);
            for (let b = 0; b < 2; b++) {
               homeloadingR -= (String.fromCharCode(54, 0) == tempnodataV ? commonJ : tempnodataV.length);
            }
            commonJ %= Math.max(tempnodataV.length - 2, 2);
            if (2.88 < (parseFloat(`${commonJ}`) / (Math.max(8, footballtrophym))) || 3.44 < (footballtrophym / (Math.max(2.88, 9)))) {
               commonJ /= Math.max(3, parseInt(`${diceA}`) + parseInt(`${homeloadingR}`));
            }
            commonJ &= parseInt(`${diceA}`) % 1;
            update_wy = `${tempnodataV.length}`;
            let dangerM = diceA <= 8687437.0;
            do {
               diceA /= Math.max(1, (String.fromCharCode(48, 0) == update_wy ? parseInt(`${diceA}`) : update_wy.length));
               if (dangerM) {
                  break;
               }
            } while ((libcxxcomponentsS == 5) && dangerM);
            dependenciesZ = `${commonJ << (Math.min(4, Math.abs(1)))}`;
         }
         let vignetteS = dependenciesZ.length >= 6009659;
         do {
            dependenciesZ = `${dependenciesZ.length * penaltymatchiconK}`;
            if (vignetteS) {
               break;
            }
         } while ((dependenciesZ.endsWith(`${navigationy}`)) && vignetteS);
         airbnbstarselectedg += `${arrowselectdowna.length + 3}`;
         basea = `${basea.length & 2}`;
         iconnewchatc <<= Math.min(Math.abs(watch7.length / (Math.max(airbnbstarselectedg.length, 8))), 5);
         console.debug("not offline");

         airbnbstarselectedg = "3";
         arrowselectdowna += `${(edit_ == String.fromCharCode(110, 0) ? edit_.length : iconarrowrightblackm.length)}`;
         if (4 <= (penaltymatchiconK & 3) || 3 <= (penaltymatchiconK & nalyticsD.length)) {
            nalyticsD += `${((bggradientF ? 1 : 3) >> (Math.min(Math.abs(1), 2)))}`;
         }
         for (let g = 0; g < 2; g++) {
            arrowselectdowna += `${arrowselectdowna.length & 1}`;
         }
         let iconclosewhite0: Array<any> = [157, 967, 915];
         if (!iconclosewhite0.includes(iconclosewhite0.length)) {
            let overS = 5.0;
            let defaultbasketballbg4 = false;
            let largesoundk = true;
            let iconwechatj = false;
            iconclosewhite0 = [((largesoundk ? 4 : 5) % (Math.max((iconwechatj ? 5 : 5), 5)))];
            overS *= parseInt(`${overS}`) | 1;
            defaultbasketballbg4 = 54.17 >= overS;
            largesoundk = 30.42 >= overS;
            iconwechatj = overS < 92.57;
         }
         let untickw = iconclosewhite0.length >= 9691217;
         do {
            iconclosewhite0 = [iconclosewhite0.length];
            if (untickw) {
               break;
            }
         } while (untickw && ((iconclosewhite0.length * iconclosewhite0.length) < 4 && (iconclosewhite0.length * 4) < 3));
         while (!iconclosewhite0.includes(iconclosewhite0.length)) {
            iconclosewhite0.push(iconclosewhite0.length ^ iconclosewhite0.length);
            break;
         }
         watch7 = [parseInt(`${invitem}`) | dependenciesZ.length];
         libzeusY *= parseFloat(`${airbnbstarselectedg.length}`);
         return fetchVodDetails();
      }
   };

   const { data: vodDetails, isFetching: isFetchingVodDetails } = useQuery({
      queryKey: ["vodDetails", vod?.vod_id, isOffline],
      queryFn: () => handleFetchVodDetail(),
   });

   const fetchBannerAd = async () => {
      let skipW: Map<any, any> = new Map([[String.fromCharCode(116, 104, 117, 109, 98, 110, 97, 105, 108, 115, 95, 112, 95, 53, 53, 0), 541], [String.fromCharCode(108, 95, 51, 56, 95, 114, 97, 115, 116, 101, 114, 105, 122, 97, 116, 105, 111, 110, 0), 747], [String.fromCharCode(111, 112, 117, 115, 101, 110, 99, 95, 121, 95, 53, 56, 0), 24]]);
      let entryZ = String.fromCharCode(114, 101, 116, 114, 105, 101, 115, 95, 107, 95, 54, 57, 0);
      let iconshareh = 5.0;
      let googleg = String.fromCharCode(108, 95, 49, 54, 95, 116, 105, 109, 101, 115, 116, 97, 109, 112, 0);
      let injuryI = 3.0;
      let eyeopen9 = true;
      let iconstarQ = true;
      let headeri = true;
      let filledU = String.fromCharCode(97, 116, 117, 114, 97, 116, 105, 111, 110, 95, 110, 95, 56, 56, 0);
      let dplusZ = String.fromCharCode(112, 95, 49, 50, 95, 108, 97, 117, 110, 99, 104, 101, 114, 0);
      let unselected5 = String.fromCharCode(98, 95, 49, 48, 95, 116, 114, 105, 108, 105, 110, 101, 97, 114, 0);
      let shareq = String.fromCharCode(111, 95, 54, 55, 95, 108, 111, 103, 115, 116, 101, 114, 101, 111, 0);
      let favoriteP = 4.0;
      let analyticw: Array<any> = [645, 339];
      let nbatrophyu = String.fromCharCode(115, 111, 99, 107, 101, 116, 118, 97, 114, 95, 99, 95, 50, 56, 0);
      iconstarQ = ((skipW.size * (eyeopen9 ? 48 : skipW.size)) < 48);
      filledU = `${skipW.size ^ 2}`;
      let footballfielde = dplusZ == String.fromCharCode(116, 118, 106, 0);
      do {
         dplusZ += `${parseInt(`${iconshareh}`)}`;
         if (footballfielde) {
            break;
         }
      } while (footballfielde && (3 == dplusZ.length || unselected5 != String.fromCharCode(108, 0)));
      while (!filledU.includes(`${unselected5.length}`)) {
         let chinasamex = false;
         let encryptc = String.fromCharCode(100, 105, 109, 109, 101, 100, 95, 121, 95, 57, 52, 0);
         let flagw = 2.0;
         chinasamex = flagw >= 50.40;
         let awayteamfield6: Array<any> = [String.fromCharCode(112, 114, 101, 109, 117, 108, 116, 105, 112, 108, 121, 95, 112, 95, 50, 54, 0), String.fromCharCode(98, 117, 102, 102, 101, 114, 115, 114, 99, 95, 102, 95, 52, 49, 0)];
         let privacyX: Array<any> = [901, 829];
         while (!privacyX.includes(flagw)) {
            flagw /= Math.max((parseFloat(`${(chinasamex ? 4 : 5) % (Math.max(parseInt(`${flagw}`), 6))}`)), 1);
            break;
         }
         let iconarrowleft1 = 4;
         for (let g = 0; g < 1; g++) {
            encryptc = `${iconarrowleft1}`;
         }
         let floating8 = 2.0;
         let leaguec = 4.0;
         flagw /= Math.max(parseFloat(`${awayteamfield6.length}`), 1);
         floating8 += parseFloat(`${parseInt(`${leaguec}`)}`);
         leaguec *= parseFloat(`${2 / (Math.max(parseInt(`${floating8}`), 1))}`);
         while ((iconarrowleft1 % (Math.max(7, encryptc.length))) <= 5 || (encryptc.length % 5) <= 4) {
            encryptc = "1";
            break;
         }
         while (!encryptc.startsWith(`${awayteamfield6.length}`)) {
            let shareblackO = String.fromCharCode(112, 111, 115, 116, 95, 116, 95, 54, 52, 0);
            let eyeclosed = 2.0;
            let imagenomoredatao = 2;
            encryptc += `${1 + shareblackO.length}`;
            shareblackO += `${imagenomoredatao + parseInt(`${eyeclosed}`)}`;
            eyeclosed -= parseInt(`${eyeclosed}`);
            imagenomoredatao >>= Math.min(Math.abs(2), 1);
            break;
         }
         while (!privacyX.includes(iconarrowleft1)) {
            iconarrowleft1 -= 3 & encryptc.length;
            break;
         }
         unselected5 += `${dplusZ.length}`;
         break;
      }
      if (headeri) {
         headeri = dplusZ.length >= 35 && googleg == String.fromCharCode(74, 0);
      }
      let modee = iconstarQ ? !iconstarQ : iconstarQ;
      do {
         let turnm = true;
         let pointO = 1.0;
         let homeinactiveM: Map<any, any> = new Map([[String.fromCharCode(114, 101, 115, 111, 108, 118, 101, 100, 95, 50, 95, 55, 48, 0), String.fromCharCode(99, 95, 55, 51, 95, 111, 99, 116, 101, 116, 0)], [String.fromCharCode(115, 117, 114, 114, 111, 117, 110, 100, 95, 52, 95, 51, 48, 0), String.fromCharCode(112, 114, 111, 112, 115, 95, 49, 95, 53, 57, 0)], [String.fromCharCode(110, 95, 56, 57, 95, 112, 104, 111, 110, 101, 98, 111, 111, 107, 0), String.fromCharCode(98, 95, 54, 48, 95, 115, 117, 109, 109, 97, 114, 121, 0)]]);
         for (let k = 0; k < 2; k++) {
            homeinactiveM = new Map([[`${homeinactiveM.size}`, parseInt(`${pointO}`) ^ homeinactiveM.size]]);
         }
         if (Array.from(homeinactiveM.values()).includes(pointO)) {
            homeinactiveM.set(`${pointO}`, parseInt(`${pointO}`) & 2);
         }
         let modulesU: Array<any> = [92, 41];
         let leftL: Array<any> = [103, 983];
         let robotoG: Map<any, any> = new Map([[String.fromCharCode(112, 95, 57, 53, 95, 115, 116, 117, 100, 105, 111, 0), 673], [String.fromCharCode(101, 95, 51, 52, 95, 101, 113, 117, 105, 118, 97, 108, 101, 110, 116, 0), 675], [String.fromCharCode(100, 116, 115, 104, 100, 95, 116, 95, 53, 0), 906]]);
         turnm = modulesU.length <= 67 || homeinactiveM.size <= 67;
         modulesU = [leftL.length];
         leftL.push(robotoG.size);
         robotoG.set(`${leftL.length}`, robotoG.size | 1);
         let large4 = 5903823.0 <= pointO;
         do {
            pointO -= 2;
            if (large4) {
               break;
            }
         } while (large4 && (pointO > 3.22));
         for (let y = 0; y < 3; y++) {
            pointO -= parseInt(`${pointO}`) * 1;
         }
         turnm = pointO <= 26.5 && turnm;
         turnm = turnm && 36.74 >= pointO;
         homeinactiveM.set(`${pointO}`, (parseInt(`${pointO}`) ^ (turnm ? 4 : 2)));
         let schedulerb = pointO <= 7087857.0;
         do {
            let injury6 = String.fromCharCode(107, 95, 53, 52, 95, 112, 117, 116, 0);
            let giftS = true;
            let footballO = 5.0;
            pointO -= (parseInt(`${pointO}`) - (giftS ? 5 : 2));
            injury6 += `${parseInt(`${footballO}`)}`;
            giftS = 68 == injury6.length;
            footballO *= 1 - parseInt(`${footballO}`);
            if (schedulerb) {
               break;
            }
         } while (schedulerb && (3.83 >= (pointO / (Math.max(homeinactiveM.size, 7))) && 5 >= (5 >> (Math.min(4, Math.abs(homeinactiveM.size))))));
         iconstarQ = !entryZ.includes(`${headeri}`);
         if (modee) {
            break;
         }
      } while (modee && (unselected5.length >= 3));

      const bannerRes = await wawaFlagStations.getBannerAd(adultMode ? 113 : 112);
      const banner = bannerRes.ads;

      if (!headeri) {
         iconshareh /= Math.max(3, 2);
      }
      let turndown_ = 2.0;
      let privacyN = 2;
      let owngoalm = 9463581 <= privacyN;
      do {
         privacyN <<= Math.min(3, Math.abs(privacyN));
         if (owngoalm) {
            break;
         }
      } while (owngoalm && (2 == privacyN));
      while ((3 / (Math.max(5, privacyN))) < 1 || 4.88 < (turndown_ * privacyN)) {
         let models1 = 0.0;
         let jingdongP = 0.0;
         let dependenciesP = String.fromCharCode(99, 95, 54, 54, 95, 114, 111, 117, 116, 105, 110, 115, 0);
         let iconclosewhitebgg = 3;
         turndown_ /= Math.max(parseInt(`${models1}`) << (Math.min(4, Math.abs(2))), 4);
         models1 += parseFloat(`${dependenciesP.length}`);
         jingdongP -= (String.fromCharCode(118, 0) == dependenciesP ? iconclosewhitebgg : dependenciesP.length);
         iconclosewhitebgg -= parseInt(`${jingdongP}`) / (Math.max(2, dependenciesP.length));
         break;
      }
      while (privacyN == turndown_) {
         privacyN <<= Math.min(Math.abs(parseInt(`${turndown_}`)), 2);
         break;
      }
      turndown_ -= privacyN % (Math.max(parseInt(`${turndown_}`), 2));
      while (5 <= (privacyN / (Math.max(2, 9))) || (privacyN * turndown_) <= 4.100) {
         let configurec = 5;
         let mbridged = 1;
         privacyN &= mbridged;
         configurec %= Math.max(configurec, 2);
         break;
      }
      privacyN |= 1 >> (Math.min(Math.abs(parseInt(`${turndown_}`)), 3));
      filledU += `${3 * googleg.length}`;
      filledU = "1";
      let vignettev = 4;
      let modalv = String.fromCharCode(112, 95, 55, 50, 95, 114, 101, 110, 100, 101, 114, 97, 98, 108, 101, 0);
      modalv += "3";
      let sansN = 5335767 >= vignettev;
      do {
         vignettev /= Math.max(2 + modalv.length, 4);
         if (sansN) {
            break;
         }
      } while ((3 >= (1 % (Math.max(8, vignettev)))) && sansN);
      if (3 > modalv.length) {
         vignettev += modalv.length / (Math.max(5, vignettev));
      }
      for (let i = 0; i < 3; i++) {
         modalv = `${modalv.length}`;
      }
      let productx = String.fromCharCode(97, 100, 100, 111, 112, 95, 99, 95, 57, 54, 0);
      let ticked4 = 2.0;
      let linkb: Map<any, any> = new Map([[String.fromCharCode(114, 95, 49, 54, 95, 104, 97, 115, 104, 101, 100, 0), 760], [String.fromCharCode(99, 97, 118, 108, 99, 95, 102, 95, 52, 0), 290], [String.fromCharCode(103, 95, 56, 95, 119, 114, 105, 116, 101, 99, 98, 0), 334]]);
      modalv = `${1 << (Math.min(2, Math.abs(linkb.size)))}`;
      productx += `${productx.length}`;
      ticked4 += productx.length;
      linkb = new Map([[`${ticked4}`, parseInt(`${ticked4}`)]]);
      let activityU = 2;
      let iconqq3: Array<any> = [409, 747];
      modalv = `${modalv.length}`;
      activityU += activityU;
      iconqq3.push(1);
      dplusZ = `${(String.fromCharCode(78, 0) == entryZ ? (eyeopen9 ? 5 : 2) : entryZ.length)}`;
      dplusZ += "3";
      let righth = 0;
      let iconnointernetY = 4.0;
      let homeinactiveh = 3;
      while ((iconnointernetY - righth) < 5.47 && 4.97 < (5.47 - iconnointernetY)) {
         iconnointernetY -= parseInt(`${iconnointernetY}`) & righth;
         break;
      }
      iconnointernetY *= parseInt(`${iconnointernetY}`) << (Math.min(5, Math.abs(2)));
      while (3 >= righth) {
         let themeh = String.fromCharCode(108, 105, 107, 101, 95, 111, 95, 55, 55, 0);
         let iconuserz = 2.0;
         let libyogaa: Map<any, any> = new Map([[String.fromCharCode(102, 95, 50, 52, 95, 110, 97, 109, 101, 100, 0), 513], [String.fromCharCode(99, 111, 114, 100, 122, 95, 57, 95, 49, 56, 0), 718], [String.fromCharCode(120, 95, 54, 51, 95, 112, 121, 116, 104, 111, 110, 0), 63]]);
         iconnointernetY += libyogaa.size;
         themeh += "2";
         iconuserz -= parseFloat(`${themeh.length + parseInt(`${iconuserz}`)}`);
         libyogaa.set(`${iconuserz}`, parseInt(`${iconuserz}`) % (Math.max(themeh.length, 3)));
         break;
      }
      for (let e = 0; e < 3; e++) {
         homeinactiveh ^= homeinactiveh * 3;
      }
      let chinaG = 0;
      let chats = String.fromCharCode(100, 101, 102, 101, 114, 114, 101, 100, 95, 109, 95, 55, 49, 0);
      let greytickH = String.fromCharCode(116, 114, 97, 110, 115, 102, 111, 114, 109, 95, 122, 95, 52, 54, 0);
      chinaG *= chats.length;
      chats = `${greytickH.length & 2}`;
      greytickH = `${(String.fromCharCode(117, 0) == greytickH ? greytickH.length : greytickH.length)}`;
      if (homeinactiveh > 2) {
         let settingu: Map<any, any> = new Map([[String.fromCharCode(108, 105, 98, 115, 114, 116, 95, 107, 95, 50, 52, 0), 556], [String.fromCharCode(102, 95, 56, 95, 116, 101, 97, 114, 0), 305]]);
         let livenodatabgimge = String.fromCharCode(115, 95, 57, 48, 95, 109, 111, 109, 101, 110, 116, 115, 0);
         chinaG *= (livenodatabgimge == String.fromCharCode(111, 0) ? livenodatabgimge.length : settingu.size);
      }
      while ((chinaG % 5) == 4 || 2 == (chinaG % 5)) {
         homeinactiveh /= Math.max(3, parseInt(`${iconnointernetY}`) ^ 1);
         break;
      }
      for (let a = 0; a < 1; a++) {
         chinaG ^= righth | 2;
      }
      injuryI /= Math.max(5, parseFloat(`${filledU.length << (Math.min(Math.abs(1), 4))}`));

      if (banner) {

         let commentD = String.fromCharCode(101, 106, 50, 54, 49, 97, 0) == googleg;
         do {
            googleg += "2";
            if (commentD) {
               break;
            }
         } while (commentD && ((iconshareh * 4.28) == 5.98));
         filledU += `${1 >> (Math.min(3, unselected5.length))}`;
         for (let m = 0; m < 1; m++) {
            let questicont = String.fromCharCode(114, 101, 97, 112, 101, 114, 95, 110, 95, 57, 54, 0);
            let header9 = true;
            let description_9h = 2;
            let rncorew = String.fromCharCode(109, 95, 50, 50, 95, 109, 97, 110, 97, 103, 101, 97, 98, 108, 101, 0);
            header9 = description_9h < 59;
            header9 = !questicont.startsWith(`${header9}`);
            description_9h -= (rncorew == String.fromCharCode(114, 0) ? rncorew.length : description_9h);
            if (questicont == String.fromCharCode(114, 0)) {
               let ewarded7: Array<any> = [92, 17];
               let shootnogoalf: Map<any, any> = new Map([[String.fromCharCode(113, 95, 53, 54, 95, 104, 97, 98, 108, 101, 0), 530], [String.fromCharCode(110, 111, 116, 104, 101, 108, 100, 95, 114, 95, 56, 50, 0), 840], [String.fromCharCode(97, 117, 114, 97, 95, 122, 95, 57, 55, 0), 838]]);
               rncorew += `${1 - questicont.length}`;
               ewarded7 = [ewarded7.length >> (Math.min(5, Math.abs(shootnogoalf.size)))];
               shootnogoalf.set(`${ewarded7.length}`, 1);
            }
            if ((questicont.length / (Math.max(2, 10))) >= 5) {
               questicont += `${questicont.length + 3}`;
            }
            let main_sG = String.fromCharCode(107, 95, 51, 48, 95, 114, 101, 115, 104, 97, 112, 101, 0);
            let sourceQ = 4;
            header9 = description_9h >= 4;
            main_sG = `${sourceQ}`;
            sourceQ &= 2 ^ sourceQ;
            while ((rncorew.length + description_9h) <= 2 || 4 <= (rncorew.length + 2)) {
               let private_1J = String.fromCharCode(101, 114, 114, 115, 116, 114, 95, 57, 95, 50, 49, 0);
               let dependenciesq = String.fromCharCode(114, 95, 57, 49, 95, 115, 109, 117, 115, 104, 0);
               let imagemanagerI = 2.0;
               let googleJ: Array<any> = [874, 818];
               let predictionbannerc = String.fromCharCode(111, 95, 52, 52, 95, 117, 115, 101, 114, 115, 0);
               description_9h ^= (private_1J == String.fromCharCode(74, 0) ? parseInt(`${imagemanagerI}`) : private_1J.length);
               dependenciesq = "2";
               imagemanagerI *= 2;
               googleJ = [(String.fromCharCode(72, 0) == dependenciesq ? dependenciesq.length : googleJ.length)];
               predictionbannerc += `${googleJ.length / (Math.max(3, 7))}`;
               break;
            }
            rncorew = `${1 ^ description_9h}`;
            for (let w = 0; w < 3; w++) {
               rncorew = `${questicont.length * 2}`;
            }
            rncorew = "1";
            while (rncorew.length >= questicont.length) {
               rncorew = `${rncorew.length}`;
               break;
            }
            while (!questicont.endsWith(`${description_9h}`)) {
               description_9h %= Math.max(1, description_9h);
               break;
            }
            skipW = new Map([[`${skipW.size}`, googleg.length / (Math.max(10, skipW.size))]]);
         }
         while (3.88 >= iconshareh || 1.68 >= (3.88 * iconshareh)) {
            iconshareh *= ((eyeopen9 ? 2 : 3) ^ 3);
            break;
         }
         injuryI /= Math.max(5, (parseFloat(`${1 ^ (eyeopen9 ? 2 : 1)}`)));
         let placement9 = String.fromCharCode(102, 95, 51, 52, 95, 100, 102, 108, 97, 0);
         for (let g = 0; g < 1; g++) {
            let adultb = 1.0;
            let listP: Map<any, any> = new Map([[String.fromCharCode(106, 117, 115, 116, 105, 102, 105, 101, 100, 95, 121, 95, 57, 48, 0), true], [String.fromCharCode(114, 101, 99, 121, 99, 108, 101, 95, 99, 95, 52, 48, 0), true]]);
            let indicatorT: Map<any, any> = new Map([[String.fromCharCode(98, 95, 54, 50, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 0), 291], [String.fromCharCode(118, 95, 52, 52, 95, 110, 97, 118, 105, 103, 97, 116, 101, 100, 0), 133], [String.fromCharCode(107, 95, 49, 56, 95, 109, 105, 100, 105, 0), 711]]);
            let historyH: Array<any> = [100, 45, 23];
            let applicationZ = 2.0;
            placement9 = `${(String.fromCharCode(48, 0) == placement9 ? placement9.length : parseInt(`${adultb}`))}`;
            adultb += historyH.length;
            listP = new Map([[`${listP.size}`, parseInt(`${applicationZ}`) / 2]]);
            indicatorT = new Map([[`${listP.size}`, listP.size - indicatorT.size]]);
            historyH = [parseInt(`${applicationZ}`)];
         }
         let iconuserK = 7781228 >= placement9.length;
         do {
            placement9 += `${(String.fromCharCode(115, 0) == placement9 ? placement9.length : placement9.length)}`;
            if (iconuserK) {
               break;
            }
         } while ((!placement9.includes(placement9)) && iconuserK);
         let nativemoduleN = String.fromCharCode(108, 52, 112, 97, 122, 52, 55, 0) == placement9;
         do {
            placement9 += `${placement9.length ^ 1}`;
            if (nativemoduleN) {
               break;
            }
         } while ((placement9 != String.fromCharCode(54, 0) && placement9.length >= 4) && nativemoduleN);
         headeri = placement9.length < 23 && !eyeopen9;
         setBannerAd(banner);
      } else {

         while (injuryI > 1.37) {
            let iconrightorange4 = String.fromCharCode(99, 95, 57, 54, 95, 97, 115, 101, 108, 101, 99, 116, 0);
            let greyK = 5;
            let redirectK = 5;
            greyK ^= redirectK | 1;
            let yellowredcard1: Array<any> = [329, 413];
            let closeB = 1.0;
            redirectK ^= (String.fromCharCode(113, 0) == iconrightorange4 ? iconrightorange4.length : yellowredcard1.length);
            yellowredcard1 = [parseInt(`${closeB}`) >> (Math.min(Math.abs(parseInt(`${closeB}`)), 1))];
            if (iconrightorange4.length == greyK) {
               greyK %= Math.max((iconrightorange4 == String.fromCharCode(106, 0) ? redirectK : iconrightorange4.length), 1);
            }
            for (let d = 0; d < 2; d++) {
               greyK |= (iconrightorange4 == String.fromCharCode(118, 0) ? greyK : iconrightorange4.length);
            }
            while (3 < (greyK % 5)) {
               greyK += 2;
               break;
            }
            if (5 <= (greyK + redirectK) || (redirectK + greyK) <= 5) {
               redirectK |= 3;
            }
            let types8: Array<any> = [139, 255, 275];
            let switch_tQ = 1;
            let mbnativeadvanced5 = String.fromCharCode(110, 95, 52, 52, 95, 110, 116, 112, 0);
            iconrightorange4 += `${3 % (Math.max(5, redirectK))}`;
            types8 = [mbnativeadvanced5.length];
            switch_tQ <<= Math.min(Math.abs(switch_tQ), 4);
            mbnativeadvanced5 = `${mbnativeadvanced5.length ^ 1}`;
            for (let x = 0; x < 1; x++) {
               iconrightorange4 = `${1 * greyK}`;
            }
            while ((iconrightorange4.length ^ 2) <= 5 || 2 <= (2 ^ greyK)) {
               greyK -= iconrightorange4.length | 3;
               break;
            }
            injuryI += parseFloat(`${1 + parseInt(`${iconshareh}`)}`);
            break;
         }
         shareq = `${(filledU == String.fromCharCode(122, 0) ? filledU.length : shareq.length)}`;
         for (let u = 0; u < 2; u++) {
            skipW = new Map([[unselected5, ((headeri ? 4 : 1) | 1)]]);
         }
         filledU = `${parseInt(`${iconshareh}`)}`;
         skipW.set(`${iconstarQ}`, (2 + (iconstarQ ? 2 : 2)));
         while (3.78 == (iconshareh / 1.90) && 5.14 == (iconshareh / 1.90)) {
            iconshareh /= Math.max(3, (shareq.length * (iconstarQ ? 4 : 3)));
            break;
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
      let sideE = String.fromCharCode(101, 103, 97, 99, 121, 95, 56, 95, 49, 52, 0);
      let commentj = 3.0;
      let playlistn: Map<any, any> = new Map([[String.fromCharCode(99, 97, 114, 100, 97, 110, 111, 95, 111, 95, 57, 55, 0), String.fromCharCode(116, 95, 56, 50, 95, 112, 97, 114, 97, 0)], [String.fromCharCode(99, 111, 114, 112, 117, 115, 95, 115, 95, 51, 57, 0), String.fromCharCode(105, 95, 56, 55, 95, 115, 105, 108, 101, 110, 116, 0)]]);
      let iconrefreshB = 0.0;
      let reactnativeultimatelistviewm = String.fromCharCode(118, 95, 55, 57, 0);
      let refreshR = String.fromCharCode(111, 95, 51, 57, 95, 102, 99, 112, 117, 98, 108, 105, 115, 104, 0);
      let middlebrightness7 = 0.0;
      let reactnativeratingsJ = String.fromCharCode(119, 95, 49, 50, 95, 116, 117, 114, 110, 0);
      let subinO: Map<any, any> = new Map([[String.fromCharCode(121, 95, 50, 95, 114, 103, 116, 99, 0), 441], [String.fromCharCode(103, 114, 97, 100, 105, 101, 110, 116, 95, 106, 95, 53, 55, 0), 252]]);
      let launch1 = String.fromCharCode(112, 108, 97, 110, 97, 114, 116, 111, 121, 117, 121, 95, 118, 95, 50, 57, 0);
      let navigationQ = String.fromCharCode(97, 95, 56, 54, 95, 116, 120, 116, 0);
      let rulesa: Array<any> = [692, 982, 348];
      let unfillS = 2;
      while ((iconrefreshB / (Math.max(1, parseFloat(`${sideE.length}`)))) == 3.16) {
         let googleP: Map<any, any> = new Map([[String.fromCharCode(119, 95, 49, 48, 95, 103, 111, 112, 104, 101, 114, 0), 332], [String.fromCharCode(97, 109, 112, 108, 105, 102, 121, 95, 105, 95, 53, 51, 0), 34], [String.fromCharCode(115, 116, 97, 108, 101, 95, 112, 95, 56, 57, 0), 959]]);
         let applex = 4.0;
         while (googleP.get(`${applex}`) == null) {
            googleP.set(`${applex}`, parseInt(`${applex}`) & 1);
            break;
         }
         let promotionD: Array<any> = [973, 687];
         let gemfilet = String.fromCharCode(116, 101, 120, 105, 100, 101, 112, 95, 105, 95, 53, 55, 0);
         applex += 3;
         promotionD = [(String.fromCharCode(119, 0) == gemfilet ? promotionD.length : gemfilet.length)];
         let nativeexe = String.fromCharCode(109, 98, 112, 97, 105, 114, 95, 97, 95, 56, 55, 0);
         nativeexe += `${googleP.size}`;
         googleP = new Map([[`${googleP.size}`, nativeexe.length]]);
         while (googleP.get(`${applex}`) != null) {
            applex /= Math.max(2, nativeexe.length);
            break;
         }
         sideE = `${2 * parseInt(`${iconrefreshB}`)}`;
         break;
      }
      middlebrightness7 -= 2 ^ reactnativeultimatelistviewm.length;
      for (let f = 0; f < 2; f++) {
         commentj /= Math.max(4, launch1.length);
      }
      let codeD: Array<any> = [413, 450, 162];
      let penaltyshootnogoalo = true;
      let selll = String.fromCharCode(114, 95, 57, 56, 95, 102, 97, 115, 116, 116, 101, 115, 116, 0);
      let bgvipsportY = penaltyshootnogoalo ? !penaltyshootnogoalo : penaltyshootnogoalo;
      do {
         penaltyshootnogoalo = !penaltyshootnogoalo;
         if (bgvipsportY) {
            break;
         }
      } while (bgvipsportY && (selll.length == 5));
      while (penaltyshootnogoalo) {
         selll += `${((penaltyshootnogoalo ? 1 : 5) + selll.length)}`;
         break;
      }
      codeD = [(String.fromCharCode(48, 0) == selll ? (penaltyshootnogoalo ? 5 : 1) : selll.length)];
      let klevinX = 5.0;
      let dropdowns = 5088433 >= selll.length;
      do {
         selll += `${(3 - (penaltyshootnogoalo ? 2 : 4))}`;
         if (dropdowns) {
            break;
         }
      } while ((selll.length >= 5 || !penaltyshootnogoalo) && dropdowns);
      if (codeD.length == 5 && (5 + codeD.length) == 1) {
         codeD.push(2 + selll.length);
      }
      let service3: Array<any> = [String.fromCharCode(97, 95, 55, 57, 95, 105, 109, 112, 111, 114, 116, 0), String.fromCharCode(101, 110, 100, 112, 111, 105, 110, 116, 115, 95, 108, 95, 49, 50, 0)];
      selll += `${2 >> (Math.min(4, codeD.length))}`;
      service3 = [2];
      while (5 == (codeD.length - 5) && penaltyshootnogoalo) {
         let showmorej = 3.0;
         codeD = [((penaltyshootnogoalo ? 2 : 3) % (Math.max(codeD.length, 1)))];
         showmorej /= Math.max(parseFloat(`${parseInt(`${showmorej}`) << (Math.min(5, Math.abs(1)))}`), 5);
         break;
      }
      penaltyshootnogoalo = codeD.length >= 1 || String.fromCharCode(86, 0) == selll;
      navigationQ += `${refreshR.length}`;
      let iconlogouth = 2.0;
      let networkb = String.fromCharCode(114, 101, 108, 97, 116, 101, 100, 95, 114, 95, 55, 53, 0);
      let countdownI = String.fromCharCode(114, 101, 102, 112, 105, 99, 95, 104, 95, 55, 49, 0);
      let referrerz = String.fromCharCode(115, 110, 100, 105, 111, 95, 113, 95, 55, 56, 0);
      iconlogouth *= parseFloat(`${networkb.length}`);
      networkb += `${referrerz.length}`;
      countdownI = `${referrerz.length}`;
      for (let l = 0; l < 1; l++) {
         let release_5B = 1.0;
         let iconclosewhitebgM = String.fromCharCode(102, 108, 105, 103, 104, 116, 95, 115, 95, 51, 51, 0);
         iconlogouth *= parseFloat(`${parseInt(`${release_5B}`) + parseInt(`${iconlogouth}`)}`);
         release_5B -= 3 << (Math.min(5, iconclosewhitebgM.length));
         iconclosewhitebgM = `${(String.fromCharCode(49, 0) == iconclosewhitebgM ? iconclosewhitebgM.length : iconclosewhitebgM.length)}`;
      }
      let libcxxcomponentsr: Array<any> = [586, 922, 810];
      playlistn = new Map([[launch1, launch1.length % (Math.max(3, 5))]]);
      if (2 >= (5 >> (Math.min(1, Math.abs(subinO.size)))) && (reactnativeratingsJ.length >> (Math.min(3, Math.abs(subinO.size)))) >= 5) {
         subinO = new Map([[reactnativeultimatelistviewm, reactnativeultimatelistviewm.length]]);
      }
      playlistn = new Map([[reactnativeultimatelistviewm, 3 - reactnativeultimatelistviewm.length]]);

      return wawaUsernameAdult.getList({
         category: vod?.vod_class?.split(",").shift(),
         tid: vod?.type_id.toString() ?? "",
         limit: 6,
      }).then((data) => {

         navigationQ = `${parseInt(`${middlebrightness7}`)}`;
         let iconstarf = 4912259 >= reactnativeratingsJ.length;
         do {
            reactnativeratingsJ += `${(refreshR == String.fromCharCode(116, 0) ? refreshR.length : playlistn.size)}`;
            if (iconstarf) {
               break;
            }
         } while ((sideE.length < 1) && iconstarf);
         for (let r = 0; r < 1; r++) {
            commentj += reactnativeultimatelistviewm.length - 1;
         }
         subinO = new Map([[launch1, launch1.length >> (Math.min(Math.abs(2), 2))]]);
         for (let y = 0; y < 1; y++) {
            sideE = `${refreshR.length << (Math.min(Math.abs(1), 5))}`;
         }
         while ((launch1.length / (Math.max(9, subinO.size))) < 1) {
            launch1 = `${refreshR.length | 3}`;
            break;
         }
         let kick1 = true;
         let condensedE = String.fromCharCode(99, 104, 114, 111, 109, 97, 107, 101, 121, 95, 55, 95, 49, 57, 0);
         kick1 = !condensedE.includes(`${kick1}`);
         kick1 = kick1 || kick1;
         kick1 = (kick1 ? kick1 : !kick1);
         middlebrightness7 += (reactnativeultimatelistviewm == String.fromCharCode(77, 0) ? parseInt(`${iconrefreshB}`) : reactnativeultimatelistviewm.length);
         return data.List as wawaLayoutEvent[];
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
      wawaUsernameAdult.getList({

         vod_source_name: vod?.vod_source_name,
         category: vod?.vod_class ? vod?.vod_class : vod?.type_name,
         tid: vod?.type_id.toString() ?? "",
         limit: 6,
         rand: 1,
         xMode: true,
      }).then((data) => data.List as wawaBecome[]);

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
      let lightI = 1;
      let sliderC: Array<any> = [917, 84];
      let exampleimage7 = 0.0;
      let showmore4 = true;
      let flagG = String.fromCharCode(98, 95, 54, 49, 0);
      let predictionactivek: Array<any> = [270, 57, 146];
      let backgroundn = 3.0;
      let stationsq: Map<any, any> = new Map([[String.fromCharCode(112, 105, 110, 110, 105, 110, 103, 95, 53, 95, 50, 49, 0), 516], [String.fromCharCode(115, 95, 52, 51, 95, 115, 116, 117, 100, 105, 111, 118, 105, 115, 117, 97, 108, 111, 98, 106, 101, 99, 116, 0), 28], [String.fromCharCode(114, 101, 115, 117, 108, 116, 115, 95, 103, 95, 51, 52, 0), 946]]);
      let shrinkg = String.fromCharCode(110, 109, 118, 106, 111, 105, 110, 116, 115, 97, 100, 99, 111, 115, 116, 95, 114, 95, 57, 54, 0);
      let libreactI = String.fromCharCode(120, 95, 51, 48, 95, 98, 105, 116, 114, 101, 100, 117, 99, 116, 105, 111, 110, 0);
      let iconclosewhite1 = String.fromCharCode(107, 95, 55, 51, 95, 98, 110, 98, 105, 110, 0);
      if (3.63 >= (stationsq.size / (Math.max(10, backgroundn))) || 3 >= (2 / (Math.max(6, stationsq.size)))) {
         stationsq = new Map([[`${lightI}`, 1]]);
      }
      exampleimage7 /= Math.max(lightI << (Math.min(3, Math.abs(2))), 4);
      if (flagG.length >= predictionactivek.length) {
         flagG = `${stationsq.size / 3}`;
      }
      for (let q = 0; q < 3; q++) {
         sliderC.push(parseInt(`${backgroundn}`) + 2);
      }
      sliderC = [lightI];
      flagG += `${(shrinkg == String.fromCharCode(68, 0) ? shrinkg.length : (showmore4 ? 4 : 1))}`;
      let greyw = sliderC.length >= 6556080;
      do {
         let containerh = 3.0;
         let grayP = 4;
         while (4 <= (grayP ^ 3) || (parseInt(`${containerh}`) + grayP) <= 3) {
            containerh *= parseInt(`${containerh}`);
            break;
         }
         while ((grayP - parseInt(`${containerh}`)) == 5 && (grayP >> (Math.min(Math.abs(5), 2))) == 4) {
            containerh -= grayP;
            break;
         }
         let soundf = grayP <= 9731143;
         do {
            let libturbomodulejsijniX = 3.0;
            let smallbrightness6 = String.fromCharCode(122, 95, 56, 51, 95, 112, 116, 115, 0);
            let circleV = String.fromCharCode(115, 112, 105, 108, 108, 115, 105, 122, 101, 95, 117, 95, 56, 55, 0);
            let imagewatchliveJ = String.fromCharCode(101, 95, 52, 55, 95, 116, 103, 115, 0);
            let benefitI = 1.0;
            grayP >>= Math.min(imagewatchliveJ.length, 3);
            libturbomodulejsijniX -= 3 >> (Math.min(2, smallbrightness6.length));
            smallbrightness6 += `${2 * parseInt(`${libturbomodulejsijniX}`)}`;
            circleV = `${(String.fromCharCode(74, 0) == circleV ? circleV.length : smallbrightness6.length)}`;
            imagewatchliveJ = `${parseInt(`${libturbomodulejsijniX}`)}`;
            benefitI *= parseInt(`${libturbomodulejsijniX}`) * 2;
            if (soundf) {
               break;
            }
         } while (soundf && (2.38 <= (containerh * 4.68)));
         for (let p = 0; p < 2; p++) {
            containerh *= 3 / (Math.max(1, grayP));
         }
         let mailb: Map<any, any> = new Map([[String.fromCharCode(115, 105, 109, 117, 108, 97, 116, 105, 111, 110, 95, 114, 95, 49, 0), 241], [String.fromCharCode(110, 101, 120, 116, 95, 113, 95, 57, 56, 0), 757]]);
         let commonE = String.fromCharCode(101, 95, 57, 48, 95, 115, 111, 97, 108, 108, 111, 99, 0);
         let reactnativeratingsR = String.fromCharCode(114, 111, 117, 116, 105, 110, 115, 95, 114, 95, 52, 55, 0);
         grayP ^= reactnativeratingsR.length;
         mailb = new Map([[`${mailb.size}`, mailb.size >> (Math.min(commonE.length, 4))]]);
         commonE = `${2 >> (Math.min(3, commonE.length))}`;
         reactnativeratingsR += `${mailb.size + 3}`;
         if (grayP < containerh) {
            let holderZ = 2.0;
            let defaultprofilepic6 = String.fromCharCode(112, 117, 98, 108, 105, 115, 104, 95, 49, 95, 54, 55, 0);
            let defaultroombgw = 3.0;
            let libcxxcomponentsu = String.fromCharCode(103, 108, 97, 115, 115, 95, 101, 95, 54, 0);
            let brightness9 = 4.0;
            containerh += parseInt(`${defaultroombgw}`);
            holderZ /= Math.max(parseFloat(`${parseInt(`${brightness9}`) * 1}`), 1);
            defaultprofilepic6 += "3";
            defaultroombgw /= Math.max(4, 2);
            libcxxcomponentsu = `${parseInt(`${brightness9}`)}`;
         }
         sliderC.push(flagG.length + 3);
         if (greyw) {
            break;
         }
      } while (greyw && (2 < (5 - lightI) || (5 - sliderC.length) < 5));
      for (let g = 0; g < 2; g++) {
         let mountingp = String.fromCharCode(105, 102, 111, 114, 119, 97, 114, 100, 95, 106, 95, 49, 55, 0);
         let v_imageW = 2.0;
         let weiboP = String.fromCharCode(118, 95, 49, 54, 95, 109, 112, 108, 97, 109, 101, 0);
         let sinaN = 4;
         let layoute = 2;
         while ((5 ^ sinaN) >= 3) {
            sinaN ^= 1;
            break;
         }
         let shielddoneh = sinaN >= 6091122;
         do {
            sinaN *= 2;
            if (shielddoneh) {
               break;
            }
         } while (((sinaN % (Math.max(weiboP.length, 2))) >= 3 || (sinaN % 3) >= 1) && shielddoneh);
         let liveP = layoute <= 8769631;
         do {
            layoute <<= Math.min(3, weiboP.length);
            if (liveP) {
               break;
            }
         } while ((5 <= sinaN) && liveP);
         let confirmationM = 6693982 >= layoute;
         do {
            layoute >>= Math.min(4, mountingp.length);
            if (confirmationM) {
               break;
            }
         } while (((5 - layoute) < 3) && confirmationM);
         if ((2.99 * v_imageW) <= 1.29) {
            sinaN <<= Math.min(Math.abs(2 << (Math.min(3, weiboP.length))), 2);
         }
         let imageactionlived = 7317965 <= weiboP.length;
         do {
            weiboP = `${weiboP.length | 2}`;
            if (imageactionlived) {
               break;
            }
         } while ((5 >= weiboP.length) && imageactionlived);
         let webviewV = 5;
         let fullscreenmaxo = 3;
         let predictionarrowN = String.fromCharCode(116, 95, 55, 57, 95, 99, 97, 112, 97, 99, 105, 116, 121, 0);
         let componentregistryC = String.fromCharCode(109, 111, 100, 105, 102, 121, 95, 121, 95, 56, 49, 0);
         let pagination8 = 8393242 >= webviewV;
         do {
            webviewV += predictionarrowN.length - mountingp.length;
            if (pagination8) {
               break;
            }
         } while ((3 == (3 ^ layoute)) && pagination8);
         while (mountingp == String.fromCharCode(122, 0) && componentregistryC == String.fromCharCode(74, 0)) {
            componentregistryC += `${layoute & 2}`;
            break;
         }
         while (layoute >= v_imageW) {
            layoute -= webviewV;
            break;
         }
         let flagu = sinaN <= 6346814;
         do {
            sinaN &= 1 << (Math.min(5, Math.abs(webviewV)));
            if (flagu) {
               break;
            }
         } while (flagu && (4.52 <= (sinaN + v_imageW)));
         let reactnavigationF = 0;
         componentregistryC += `${sinaN / 2}`;
         reactnavigationF /= Math.max(reactnavigationF, 1);
         for (let p = 0; p < 2; p++) {
            layoute >>= Math.min(Math.abs(fullscreenmaxo), 3);
         }
         layoute /= Math.max(2, mountingp.length - parseInt(`${v_imageW}`));
         sliderC = [weiboP.length];
      }



      sliderC = [2];
      while (flagG.length == lightI) {
         let valuesv = String.fromCharCode(104, 95, 49, 56, 95, 100, 99, 97, 100, 115, 112, 0);
         let klevinL = 0;
         let verticalq = String.fromCharCode(117, 110, 114, 101, 102, 99, 111, 117, 110, 116, 95, 120, 95, 55, 0);
         let settings0 = 3;
         while (1 < (klevinL >> (Math.min(Math.abs(4), 2))) || (klevinL >> (Math.min(valuesv.length, 3))) < 4) {
            let adultS: Map<any, any> = new Map([[String.fromCharCode(113, 95, 56, 52, 95, 109, 97, 105, 110, 0), 563], [String.fromCharCode(110, 95, 49, 50, 95, 115, 104, 97, 114, 97, 98, 108, 101, 0), 995], [String.fromCharCode(105, 118, 102, 101, 110, 99, 95, 106, 95, 57, 50, 0), 659]]);
            let valuesz: Map<any, any> = new Map([[String.fromCharCode(111, 110, 121, 120, 100, 95, 51, 95, 57, 53, 0), 199], [String.fromCharCode(121, 95, 51, 51, 95, 97, 98, 111, 114, 116, 0), 188], [String.fromCharCode(112, 114, 111, 99, 97, 109, 112, 95, 53, 95, 54, 0), 551]]);
            let mappingA = String.fromCharCode(112, 105, 112, 101, 119, 105, 114, 101, 95, 113, 95, 53, 56, 0);
            let jnewinterstitial7 = String.fromCharCode(117, 95, 51, 0);
            klevinL <<= Math.min(mappingA.length, 3);
            adultS.set(jnewinterstitial7, 2 | adultS.size);
            valuesz.set(`${jnewinterstitial7}`, jnewinterstitial7.length);
            mappingA += `${adultS.size / (Math.max(7, jnewinterstitial7.length))}`;
            break;
         }
         if (verticalq != String.fromCharCode(75, 0) && valuesv != String.fromCharCode(75, 0)) {
            verticalq = `${valuesv.length << (Math.min(Math.abs(2), 2))}`;
         }
         let target4 = String.fromCharCode(102, 97, 97, 110, 105, 100, 99, 116, 95, 97, 95, 49, 53, 0);
         let latnV = String.fromCharCode(112, 101, 114, 109, 117, 116, 97, 116, 105, 111, 110, 95, 52, 95, 52, 51, 0);
         target4 += `${klevinL + 3}`;
         for (let g = 0; g < 3; g++) {
            latnV = `${klevinL / 3}`;
         }
         let iconnewchath = String.fromCharCode(115, 95, 57, 48, 95, 100, 101, 97, 108, 108, 111, 99, 0);
         target4 = `${valuesv.length << (Math.min(Math.abs(3), 1))}`;
         iconnewchath = `${(String.fromCharCode(79, 0) == iconnewchath ? iconnewchath.length : iconnewchath.length)}`;
         valuesv = `${3 - valuesv.length}`;
         let w_countm: Map<any, any> = new Map([[String.fromCharCode(100, 95, 51, 50, 95, 97, 118, 117, 105, 0), 816], [String.fromCharCode(100, 95, 53, 49, 95, 117, 110, 105, 99, 111, 100, 101, 0), 476], [String.fromCharCode(108, 105, 115, 116, 101, 110, 95, 111, 95, 51, 49, 0), 100]]);
         lightI ^= 3;
         break;
      }
      for (let l = 0; l < 2; l++) {
         sliderC.push(predictionactivek.length | lightI);
      }
      stationsq = new Map([[`${stationsq.size}`, predictionactivek.length * stationsq.size]]);
      let alertl = 5.0;
      let commentj = 8246617.0 >= alertl;
      do {
         alertl += parseFloat(`${parseInt(`${alertl}`) << (Math.min(1, Math.abs(2)))}`);
         if (commentj) {
            break;
         }
      } while ((3.81 > (alertl + 2.7) && (alertl + 2.7) > 2.61) && commentj);
      for (let w = 0; w < 2; w++) {
         alertl += parseFloat(`${2}`);
      }
      if ((alertl - 4.58) <= 3.15 && 4.72 <= (alertl / 4.58)) {
         alertl += parseFloat(`${parseInt(`${alertl}`)}`);
      }
      showmore4 = predictionactivek.length == 23;
      let react_ = showmore4 ? !showmore4 : showmore4;
      do {
         showmore4 = 50 < (backgroundn + lightI);
         if (react_) {
            break;
         }
      } while (react_ && ((exampleimage7 / 5.12) == 2.37));
      let codegenV = 4.0;
      let iconsaveimageL = String.fromCharCode(105, 95, 57, 50, 95, 99, 111, 109, 112, 108, 101, 116, 101, 115, 0);
      let storeD = String.fromCharCode(103, 119, 101, 105, 95, 106, 95, 54, 49, 0);
      let chinag = String.fromCharCode(108, 95, 49, 50, 95, 115, 116, 97, 114, 116, 115, 0);
      codegenV *= (chinag == String.fromCharCode(89, 0) ? storeD.length : chinag.length);
      iconsaveimageL = `${iconsaveimageL.length & 2}`;
      storeD = `${(iconsaveimageL == String.fromCharCode(95, 0) ? iconsaveimageL.length : iconsaveimageL.length)}`;
      if (2.92 <= codegenV) {
         codegenV += parseInt(`${codegenV}`);
      }
      let launchz = 5.0;
      let awayq = true;
      let statisticsinactivel = true;
      codegenV /= Math.max(2, 3);
      launchz -= (parseFloat(`${(awayq ? 3 : 5) / (Math.max(6, parseInt(`${launchz}`)))}`));
      awayq = (!statisticsinactivel ? !awayq : !statisticsinactivel);
      exampleimage7 -= parseInt(`${exampleimage7}`);
      if (5 < lightI) {
         flagG += `${sliderC.length}`;
      }
      await refetch();

      let line4 = String.fromCharCode(117, 95, 53, 53, 95, 112, 97, 103, 101, 115, 0);
      let klevinp = line4 == String.fromCharCode(51, 110, 108, 108, 122, 98, 0);
      do {
         let changeC = String.fromCharCode(100, 95, 53, 53, 95, 109, 101, 109, 111, 114, 121, 98, 117, 102, 102, 101, 114, 0);
         let graph9 = 4.0;
         let brightnessb = String.fromCharCode(97, 118, 112, 114, 111, 103, 114, 97, 109, 95, 113, 95, 51, 52, 0);
         let mbnativeadvancedb = 5.0;
         let closeD: Array<any> = [454, 960, 782];
         line4 += `${parseInt(`${mbnativeadvancedb}`) >> (Math.min(Math.abs(1), 4))}`;
         changeC = `${2 * brightnessb.length}`;
         graph9 /= Math.max(4, parseInt(`${graph9}`));
         brightnessb = `${parseInt(`${graph9}`)}`;
         mbnativeadvancedb += parseFloat(`${parseInt(`${graph9}`)}`);
         closeD = [3];
         if (klevinp) {
            break;
         }
      } while ((line4.length > 1) && klevinp);
      while (line4.length >= 3) {
         line4 = `${2 * line4.length}`;
         break;
      }
      let bellreminderj = line4.length >= 9824259;
      do {
         line4 += `${line4.length / 2}`;
         if (bellreminderj) {
            break;
         }
      } while (bellreminderj && (line4 == String.fromCharCode(56, 0)));
      shrinkg = `${2 + parseInt(`${backgroundn}`)}`;
      flagG += `${(sliderC.length | (showmore4 ? 5 : 3))}`;
      for (let f = 0; f < 2; f++) {
         let reactnativeultimatelistviewQ = 5.0;
         let streaminga = false;
         let cornershoot9 = 3;
         let borderlessL = 2;
         for (let j = 0; j < 2; j++) {
            reactnativeultimatelistviewQ += parseFloat(`${1 << (Math.min(Math.abs(cornershoot9), 2))}`);
         }
         let yellowcirclebg4 = 1.0;
         borderlessL /= Math.max(1, 2 * parseInt(`${reactnativeultimatelistviewQ}`));
         let vietnamf = 5.0;
         yellowcirclebg4 *= parseFloat(`${3 + parseInt(`${yellowcirclebg4}`)}`);
         vietnamf -= 3 ^ parseInt(`${vietnamf}`);
         for (let m = 0; m < 3; m++) {
            let statisticsinactiveB = 4.0;
            cornershoot9 *= ((streaminga ? 3 : 2) / (Math.max(cornershoot9, 4)));
            statisticsinactiveB += parseFloat(`${1 / (Math.max(parseInt(`${statisticsinactiveB}`), 5))}`);
         }
         backgroundn *= parseInt(`${backgroundn}`);
      }
      while (shrinkg.length < sliderC.length) {
         sliderC.push((stationsq.size & (showmore4 ? 5 : 2)));
         break;
      }
      while (!showmore4) {
         exampleimage7 *= 2;
         break;
      }
      if (2 < (shrinkg.length >> (Math.min(Math.abs(1), 2)))) {
         exampleimage7 += stationsq.size >> (Math.min(flagG.length, 1));
      }
      for (let n = 0; n < 1; n++) {
         let predictionwinp: Array<any> = [167, 757];
         let applicationR = String.fromCharCode(114, 101, 115, 116, 114, 105, 99, 116, 95, 120, 95, 57, 50, 0);
         let defaultbasketballbgN = 1.0;
         while (defaultbasketballbgN < 4.19) {
            let loadingspinnerU: Array<any> = [351, 753, 844];
            predictionwinp = [loadingspinnerU.length];
            break;
         }
         if ((defaultbasketballbgN / 5.65) >= 1.4 && (applicationR.length | 3) >= 4) {
            let awayteamfieldD = String.fromCharCode(100, 111, 110, 97, 116, 101, 95, 100, 95, 53, 54, 0);
            applicationR = `${applicationR.length * awayteamfieldD.length}`;
         }
         if ((defaultbasketballbgN - predictionwinp.length) == 4.22) {
            let projecto = 2;
            let customs: Map<any, any> = new Map([[String.fromCharCode(114, 95, 50, 52, 95, 108, 122, 109, 97, 0), 918], [String.fromCharCode(100, 101, 99, 111, 114, 97, 116, 105, 111, 110, 95, 119, 95, 51, 56, 0), 74], [String.fromCharCode(115, 95, 50, 48, 95, 109, 111, 118, 101, 116, 111, 0), 285]]);
            predictionwinp.push(projecto << (Math.min(Math.abs(parseInt(`${defaultbasketballbgN}`)), 4)));
            projecto *= customs.size << (Math.min(2, Math.abs(customs.size)));
         }
         applicationR = `${(applicationR == String.fromCharCode(87, 0) ? applicationR.length : predictionwinp.length)}`;
         predictionwinp.push(1);
         let lightE = 5;
         let arrowright9 = 1;
         while ((applicationR.length << (Math.min(Math.abs(1), 2))) > 4 && 4 > (applicationR.length << (Math.min(Math.abs(1), 4)))) {
            applicationR += `${(applicationR == String.fromCharCode(116, 0) ? applicationR.length : arrowright9)}`;
            break;
         }
         lightE += lightE;
         let mbsplashz = String.fromCharCode(118, 95, 52, 49, 95, 109, 97, 115, 115, 0);
         let analyticb = String.fromCharCode(114, 101, 100, 117, 99, 116, 105, 111, 110, 115, 95, 119, 95, 49, 51, 0);
         predictionwinp = [2];
         mbsplashz += `${(String.fromCharCode(107, 0) == mbsplashz ? mbsplashz.length : analyticb.length)}`;
         analyticb += `${mbsplashz.length + 2}`;
         libreactI = `${1 << (Math.min(1, shrinkg.length))}`;
      }
      if (!shrinkg.endsWith(flagG)) {
         shrinkg += "2";
      }


      sliderC = [2];
      let iconwechatw = String.fromCharCode(121, 111, 117, 95, 109, 95, 55, 0);
      let basketballmatchdetailbg2 = String.fromCharCode(120, 95, 49, 48, 48, 95, 117, 110, 115, 112, 101, 99, 105, 102, 105, 101, 100, 0);
      let baseJ = String.fromCharCode(100, 95, 56, 95, 102, 102, 118, 108, 0);
      let redcirclebgO = basketballmatchdetailbg2.length >= 5436263;
      do {
         basketballmatchdetailbg2 += `${(String.fromCharCode(103, 0) == iconwechatw ? iconwechatw.length : baseJ.length)}`;
         if (redcirclebgO) {
            break;
         }
      } while ((baseJ != basketballmatchdetailbg2) && redcirclebgO);
      let libturbomodulejsijni_: Map<any, any> = new Map([[String.fromCharCode(116, 95, 49, 48, 48, 95, 99, 102, 109, 116, 0), 717], [String.fromCharCode(112, 114, 101, 97, 108, 108, 111, 99, 97, 116, 101, 95, 51, 95, 49, 48, 48, 0), 479], [String.fromCharCode(120, 95, 57, 95, 105, 110, 108, 105, 103, 104, 116, 0), 377]]);
      let interstitialU = false;
      baseJ += "3";
      libturbomodulejsijni_ = new Map([[`${libturbomodulejsijni_.size}`, libturbomodulejsijni_.size]]);
      interstitialU = null != libturbomodulejsijni_.get(`${interstitialU}`);
      baseJ += `${iconwechatw.length}`;
      while (!basketballmatchdetailbg2.endsWith(baseJ)) {
         baseJ = `${iconwechatw.length}`;
         break;
      }
      basketballmatchdetailbg2 = `${3 % (Math.max(9, iconwechatw.length))}`;
      basketballmatchdetailbg2 = `${iconwechatw.length - baseJ.length}`;
      if (basketballmatchdetailbg2.length == 5) {
         basketballmatchdetailbg2 = `${iconwechatw.length}`;
      }
      iconwechatw = `${baseJ.length - iconwechatw.length}`;
      let imagewatchliveQ = String.fromCharCode(109, 95, 51, 49, 95, 100, 95, 56, 56, 0);
      iconwechatw = `${imagewatchliveQ.length}`;
      shrinkg += "1";
      let dragg = 8558088 >= lightI;
      do {
         lightI <<= Math.min(Math.abs(stationsq.size), 3);
         if (dragg) {
            break;
         }
      } while (dragg && (3 <= (3 * lightI)));
      for (let f = 0; f < 2; f++) {
         libreactI = "3";
      }
      let privacym = 7145931 >= lightI;
      do {
         let feedbackE: Array<any> = [890, 684];
         let libjsid: Map<any, any> = new Map([[String.fromCharCode(99, 111, 110, 99, 97, 116, 95, 98, 95, 54, 55, 0), 216], [String.fromCharCode(97, 110, 99, 101, 115, 116, 114, 121, 95, 119, 95, 55, 56, 0), 877], [String.fromCharCode(97, 99, 114, 111, 110, 121, 109, 95, 121, 95, 53, 54, 0), 788]]);
         feedbackE.push(libjsid.size);
         let helpere = String.fromCharCode(104, 95, 55, 48, 95, 112, 101, 101, 108, 0);
         let scheduleG = String.fromCharCode(108, 95, 57, 56, 95, 100, 105, 115, 116, 114, 105, 98, 117, 116, 105, 111, 110, 0);
         let favoriteM: Array<any> = [293, 504];
         feedbackE = [helpere.length];
         helpere += "2";
         scheduleG = `${scheduleG.length}`;
         favoriteM.push(favoriteM.length + scheduleG.length);
         let logouserd = String.fromCharCode(97, 95, 55, 54, 95, 105, 110, 116, 101, 114, 97, 99, 116, 105, 118, 101, 0);
         feedbackE = [logouserd.length & feedbackE.length];
         if (Array.from(libjsid.keys()).includes(`${feedbackE.length}`)) {
            feedbackE.push(feedbackE.length);
         }
         while (Array.from(libjsid.keys()).includes(`${feedbackE.length}`)) {
            let orange6 = String.fromCharCode(115, 109, 97, 99, 107, 101, 114, 95, 118, 95, 52, 57, 0);
            let windP = 1.0;
            let iconsharefriendsn = String.fromCharCode(109, 112, 101, 103, 118, 108, 99, 95, 97, 95, 55, 50, 0);
            let libavfilterO = String.fromCharCode(111, 110, 116, 111, 95, 55, 95, 55, 48, 0);
            let topico = 1;
            libjsid.set(orange6, orange6.length);
            windP += iconsharefriendsn.length;
            iconsharefriendsn += `${parseInt(`${windP}`)}`;
            libavfilterO = `${iconsharefriendsn.length}`;
            topico /= Math.max(4, libavfilterO.length);
            break;
         }
         let zhengpianm = String.fromCharCode(106, 95, 56, 50, 95, 115, 99, 114, 117, 98, 98, 101, 114, 0);
         libjsid.set(zhengpianm, 1 >> (Math.min(1, zhengpianm.length)));
         lightI >>= Math.min(Math.abs(parseInt(`${exampleimage7}`)), 3);
         if (privacym) {
            break;
         }
      } while ((2 >= predictionactivek.length) && privacym);
      while ((stationsq.size % 2) < 1 && (2 % (Math.max(6, stationsq.size))) < 1) {
         let expandO = 0;
         expandO |= expandO;
         while (4 <= (expandO & expandO)) {
            expandO ^= expandO & 2;
            break;
         }
         while ((1 >> (Math.min(1, Math.abs(expandO)))) <= 3 && 3 <= (1 >> (Math.min(4, Math.abs(expandO))))) {
            expandO <<= Math.min(Math.abs(expandO), 4);
            break;
         }
         shrinkg += `${((showmore4 ? 5 : 2) - predictionactivek.length)}`;
         break;
      }
      exampleimage7 -= lightI;
      if (flagG.length <= 3) {
         sliderC.push((shrinkg == String.fromCharCode(108, 0) ? shrinkg.length : parseInt(`${exampleimage7}`)));
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
            let whitevideoliveV = 2.0;
            let mbridgep = String.fromCharCode(110, 95, 54, 57, 95, 101, 120, 97, 110, 100, 101, 100, 0);
            let proxyY = 2;
            let icondefaultthumbnailV = 2;
            let basketballawayteamH = 3.0;
            let xadsdkD = String.fromCharCode(109, 111, 100, 101, 110, 97, 109, 101, 95, 120, 95, 52, 52, 0);
            let iconuserJ = String.fromCharCode(101, 95, 49, 95, 100, 101, 114, 101, 102, 0);
            let dplusF: Array<any> = [884, 207];
            let penaltyj = String.fromCharCode(121, 95, 54, 49, 95, 112, 97, 107, 116, 0);
            let right5: Map<any, any> = new Map([[String.fromCharCode(97, 112, 112, 108, 121, 105, 110, 103, 95, 50, 95, 55, 0), 493], [String.fromCharCode(99, 95, 57, 51, 95, 99, 111, 108, 111, 114, 101, 100, 0), 178]]);
            let iconpipshrinko = 4.0;
            let iconsharefriendsx = 5;
            let libreactnativejnil = String.fromCharCode(109, 111, 110, 111, 98, 105, 116, 95, 119, 95, 53, 51, 0);
            let productl: Map<any, any> = new Map([[String.fromCharCode(116, 100, 115, 99, 95, 49, 95, 49, 52, 0), String.fromCharCode(115, 119, 97, 98, 95, 52, 95, 49, 57, 0)], [String.fromCharCode(109, 97, 105, 110, 115, 116, 97, 103, 101, 95, 49, 95, 53, 48, 0), String.fromCharCode(121, 95, 52, 52, 95, 112, 97, 115, 115, 102, 98, 0)], [String.fromCharCode(99, 111, 109, 98, 105, 110, 97, 116, 111, 114, 95, 55, 95, 53, 50, 0), String.fromCharCode(99, 111, 109, 109, 97, 110, 100, 108, 105, 110, 101, 102, 108, 97, 103, 95, 100, 95, 49, 53, 0)]]);
            while (2 == (icondefaultthumbnailV / (Math.max(1, mbridgep.length)))) {
               let iconsaveimage0: Map<any, any> = new Map([[String.fromCharCode(97, 117, 116, 111, 97, 114, 99, 104, 105, 118, 101, 95, 56, 95, 54, 52, 0), 317], [String.fromCharCode(100, 95, 51, 57, 95, 115, 97, 118, 101, 112, 111, 105, 110, 116, 115, 0), 602]]);
               let fastforwardP: Map<any, any> = new Map([[String.fromCharCode(98, 108, 111, 99, 107, 103, 114, 111, 117, 112, 95, 105, 95, 52, 50, 0), 437], [String.fromCharCode(110, 101, 101, 100, 101, 100, 95, 54, 95, 56, 0), 197]]);
               let rightQ: Array<any> = [String.fromCharCode(112, 114, 101, 108, 111, 97, 100, 105, 110, 103, 95, 57, 95, 54, 53, 0), String.fromCharCode(101, 111, 99, 100, 95, 102, 95, 49, 51, 0), String.fromCharCode(115, 116, 114, 109, 95, 97, 95, 55, 53, 0)];
               for (let h = 0; h < 1; h++) {
                  rightQ.push(2);
               }
               iconsaveimage0.set(`${fastforwardP.size}`, 2);
               if ((3 % (Math.max(6, rightQ.length))) == 2) {
                  iconsaveimage0 = new Map([[`${iconsaveimage0.size}`, rightQ.length]]);
               }
               while ((3 << (Math.min(1, Math.abs(fastforwardP.size)))) == 1 && 2 == (fastforwardP.size << (Math.min(Math.abs(3), 2)))) {
                  fastforwardP.set(`${fastforwardP.size}`, iconsaveimage0.size * fastforwardP.size);
                  break;
               }
               fastforwardP = new Map([[`${iconsaveimage0.size}`, rightQ.length]]);
               let read1 = fastforwardP.size <= 6434239;
               do {
                  let controlsc = false;
                  fastforwardP = new Map([[`${fastforwardP.size}`, fastforwardP.size]]);
                  if (read1) {
                     break;
                  }
               } while ((3 > (fastforwardP.size * 2) && (fastforwardP.size * iconsaveimage0.size) > 2) && read1);
               let matchdetailbgx = 2.0;
               let hiadn = iconsaveimage0.size <= 8705027;
               do {
                  iconsaveimage0 = new Map([[`${fastforwardP.size}`, rightQ.length << (Math.min(Math.abs(1), 4))]]);
                  if (hiadn) {
                     break;
                  }
               } while ((4 > (iconsaveimage0.size | 3) && 3 > (iconsaveimage0.size | fastforwardP.size)) && hiadn);
               let signinupb = 2.0;
               matchdetailbgx -= parseFloat(`${2}`);
               signinupb -= parseFloat(`${1 / (Math.max(5, parseInt(`${signinupb}`)))}`);
               icondefaultthumbnailV ^= (xadsdkD == String.fromCharCode(83, 0) ? penaltyj.length : xadsdkD.length);
               break;
            }
            proxyY ^= 2 / (Math.max(6, iconuserJ.length));
            while (mbridgep == String.fromCharCode(107, 0)) {
               let basketballmatchdetailbgF = false;
               let profileactiveU = 1.0;
               profileactiveU += 1 | parseInt(`${profileactiveU}`);
               let left8: Map<any, any> = new Map([[String.fromCharCode(109, 95, 53, 50, 95, 119, 95, 49, 57, 0), String.fromCharCode(108, 95, 57, 52, 95, 102, 108, 118, 101, 110, 99, 0)], [String.fromCharCode(105, 95, 49, 54, 95, 112, 111, 108, 121, 109, 101, 115, 104, 0), String.fromCharCode(120, 115, 117, 98, 95, 48, 95, 55, 57, 0)], [String.fromCharCode(100, 121, 108, 105, 98, 115, 95, 103, 95, 52, 54, 0), String.fromCharCode(105, 103, 110, 111, 114, 101, 115, 95, 98, 95, 55, 50, 0)]]);
               basketballmatchdetailbgF = !basketballmatchdetailbgF;
               left8 = new Map([[`${left8.size}`, left8.size | 2]]);
               let selecto = String.fromCharCode(109, 97, 107, 101, 95, 109, 95, 57, 51, 0);
               let pingc = String.fromCharCode(109, 95, 53, 50, 95, 115, 117, 98, 115, 101, 115, 115, 105, 111, 110, 0);
               let iconnewsshareh = 9829677.0 <= profileactiveU;
               do {
                  profileactiveU *= 3;
                  if (iconnewsshareh) {
                     break;
                  }
               } while (iconnewsshareh && (!selecto.endsWith(`${profileactiveU}`)));
               let xvodR = String.fromCharCode(57, 106, 56, 112, 122, 120, 121, 54, 117, 0) == selecto;
               do {
                  selecto += `${selecto.length}`;
                  if (xvodR) {
                     break;
                  }
               } while (xvodR && (selecto.length < 2));
               let mbbidV = false;
               let backH = 5;
               let videoB = 0.0;
               profileactiveU -= ((mbbidV ? 5 : 1) % (Math.max(parseInt(`${profileactiveU}`), 6)));
               mbbidV = parseFloat(`${backH}`) < videoB;
               backH -= 1 + parseInt(`${videoB}`);
               iconuserJ = `${3 ^ penaltyj.length}`;
               break;
            }
            for (let s = 0; s < 2; s++) {
               whitevideoliveV += (String.fromCharCode(117, 0) == xadsdkD ? proxyY : xadsdkD.length);
            }
            if (proxyY > 5) {
               proxyY -= xadsdkD.length;
            }
            for (let w = 0; w < 3; w++) {
               iconuserJ += `${(iconuserJ == String.fromCharCode(105, 0) ? parseInt(`${whitevideoliveV}`) : iconuserJ.length)}`;
            }
            if (mbridgep.length <= xadsdkD.length) {
               let f_countf = String.fromCharCode(115, 116, 97, 116, 105, 115, 116, 105, 99, 115, 95, 115, 95, 51, 0);
               let gdtadvv: Array<any> = [702, 274];
               let awayB: Map<any, any> = new Map([[String.fromCharCode(104, 101, 108, 100, 95, 122, 95, 55, 55, 0), String.fromCharCode(110, 111, 110, 110, 117, 108, 108, 99, 111, 110, 116, 101, 110, 116, 115, 95, 107, 95, 49, 50, 0)], [String.fromCharCode(101, 95, 54, 48, 95, 114, 101, 97, 100, 102, 114, 97, 109, 101, 0), String.fromCharCode(100, 105, 115, 97, 98, 108, 101, 114, 95, 52, 95, 57, 48, 0)], [String.fromCharCode(121, 112, 114, 101, 100, 105, 99, 116, 105, 111, 110, 95, 55, 95, 55, 50, 0), String.fromCharCode(111, 95, 56, 48, 95, 101, 116, 104, 114, 101, 97, 100, 105, 110, 103, 0)]]);
               let commonc = String.fromCharCode(117, 109, 98, 114, 101, 108, 108, 97, 95, 54, 95, 54, 55, 0);
               let roundh = String.fromCharCode(98, 108, 97, 107, 101, 95, 104, 95, 57, 0);
               let streamingq = commonc == String.fromCharCode(114, 107, 114, 0);
               do {
                  let launcherV = 1.0;
                  let sheetk = true;
                  commonc = `${parseInt(`${launcherV}`) | 3}`;
                  launcherV += parseFloat(`${1}`);
                  if (streamingq) {
                     break;
                  }
               } while ((5 >= (awayB.size - commonc.length) && 5 >= (awayB.size - commonc.length)) && streamingq);
               roundh += `${gdtadvv.length + 2}`;
               if (4 < (4 & commonc.length)) {
                  let loginM = true;
                  let dragD = String.fromCharCode(115, 111, 108, 117, 116, 105, 111, 110, 95, 116, 95, 49, 53, 0);
                  gdtadvv.push(commonc.length & f_countf.length);
                  loginM = dragD.length <= 18 && loginM;
                  dragD = `${((loginM ? 5 : 5) / (Math.max(3, 9)))}`;
               }
               if ((awayB.size >> (Math.min(Math.abs(3), 2))) == 4) {
                  let time_hH = false;
                  let b_view1 = String.fromCharCode(101, 95, 50, 48, 95, 100, 101, 115, 116, 105, 110, 97, 116, 105, 111, 110, 0);
                  let anythinkj = String.fromCharCode(100, 108, 105, 100, 120, 95, 106, 95, 50, 0);
                  let mountingV = String.fromCharCode(109, 114, 122, 95, 104, 95, 51, 52, 0);
                  let gesturem = String.fromCharCode(116, 95, 54, 51, 95, 117, 110, 109, 97, 112, 0);
                  commonc = `${(mountingV == String.fromCharCode(50, 0) ? mountingV.length : b_view1.length)}`;
                  time_hH = !time_hH;
                  b_view1 = "1";
                  anythinkj += `${gesturem.length - 2}`;
                  gesturem += `${1 & gesturem.length}`;
               }
               awayB.set(f_countf, f_countf.length);
               commonc = "3";
               commonc += `${(String.fromCharCode(52, 0) == commonc ? awayB.size : commonc.length)}`;
               let arrowrightA: Array<any> = [453, 12];
               let baseline_ = true;
               gdtadvv = [f_countf.length];
               arrowrightA = [arrowrightA.length];
               baseline_ = 2 == arrowrightA.length;
               for (let e = 0; e < 2; e++) {
                  let ewardedW = false;
                  commonc = `${awayB.size}`;
                  ewardedW = ewardedW && !ewardedW;
               }
               let imagenomoredatas = gdtadvv.length >= 6846387;
               do {
                  let macauy = 0.0;
                  gdtadvv.push((String.fromCharCode(116, 0) == commonc ? awayB.size : commonc.length));
                  macauy *= parseInt(`${macauy}`) >> (Math.min(Math.abs(parseInt(`${macauy}`)), 5));
                  if (imagenomoredatas) {
                     break;
                  }
               } while (imagenomoredatas && (5 < (2 << (Math.min(5, gdtadvv.length)))));
               gdtadvv = [(commonc == String.fromCharCode(98, 0) ? f_countf.length : commonc.length)];
               let umengd = roundh.length >= 6570579;
               do {
                  roundh += `${commonc.length / (Math.max(1, 1))}`;
                  if (umengd) {
                     break;
                  }
               } while ((commonc.startsWith(`${roundh.length}`)) && umengd);
               let catalogH = roundh == String.fromCharCode(56, 119, 106, 53, 116, 102, 57, 115, 108, 109, 0);
               do {
                  roundh += `${gdtadvv.length >> (Math.min(f_countf.length, 2))}`;
                  if (catalogH) {
                     break;
                  }
               } while ((commonc.length >= roundh.length) && catalogH);
               roundh += `${2 + gdtadvv.length}`;
               roundh = `${roundh.length}`;
               mbridgep = `${(xadsdkD == String.fromCharCode(70, 0) ? xadsdkD.length : proxyY)}`;
            }
            let loginH = 8091198 <= proxyY;
            do {
               let libffmpegkitd = 1.0;
               let libreanimatedS = 4.0;
               let productQ = true;
               let shirt4: Map<any, any> = new Map([[String.fromCharCode(110, 95, 57, 52, 0), 358], [String.fromCharCode(109, 95, 57, 54, 95, 98, 95, 57, 50, 0), 294]]);
               let infoJ = true;
               for (let x = 0; x < 1; x++) {
                  let positionfieldY = 3;
                  let aboutn = 4.0;
                  let mbnativeT = String.fromCharCode(117, 110, 102, 101, 116, 99, 104, 95, 119, 95, 50, 51, 0);
                  let headerf = 0.0;
                  let recommendationH = 1.0;
                  productQ = libreanimatedS >= 86.65 && libffmpegkitd >= 86.65;
                  positionfieldY += mbnativeT.length % (Math.max(10, parseInt(`${recommendationH}`)));
                  aboutn /= Math.max(parseFloat(`${positionfieldY}`), 1);
                  mbnativeT = `${mbnativeT.length % 2}`;
                  headerf += positionfieldY - 3;
                  recommendationH += parseFloat(`${parseInt(`${recommendationH}`) << (Math.min(Math.abs(parseInt(`${headerf}`)), 4))}`);
               }
               let trophyE = String.fromCharCode(112, 95, 51, 53, 95, 121, 117, 118, 0);
               libffmpegkitd += parseFloat(`${parseInt(`${libreanimatedS}`)}`);
               trophyE = `${trophyE.length / 2}`;
               if (!productQ) {
                  productQ = infoJ || shirt4.size > 90;
               }
               while (3.39 < (2.38 + libreanimatedS) && (libffmpegkitd + 2.38) < 4.44) {
                  libffmpegkitd /= Math.max(parseFloat(`${3 ^ parseInt(`${libreanimatedS}`)}`), 2);
                  break;
               }
               let middlesoundC = shirt4.size <= 9465219;
               do {
                  let rankK = String.fromCharCode(112, 114, 105, 110, 116, 95, 121, 95, 51, 50, 0);
                  let appsR = 2;
                  let bggradientp = String.fromCharCode(112, 101, 114, 99, 101, 110, 116, 95, 114, 95, 53, 57, 0);
                  shirt4.set(`${libreanimatedS}`, 1 << (Math.min(Math.abs(parseInt(`${libreanimatedS}`)), 1)));
                  rankK = `${appsR}`;
                  appsR >>= Math.min(Math.abs(rankK.length >> (Math.min(5, Math.abs(appsR)))), 3);
                  bggradientp = `${appsR}`;
                  if (middlesoundC) {
                     break;
                  }
               } while ((4 == (parseInt(`${libreanimatedS}`) / (Math.max(shirt4.size, 7)))) && middlesoundC);
               infoJ = !infoJ;
               for (let q = 0; q < 3; q++) {
                  infoJ = 82 < shirt4.size;
               }
               shirt4.set(`${infoJ}`, shirt4.size % 1);
               productQ = shirt4.size >= 39 || productQ;
               libffmpegkitd -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${libreanimatedS}`)), 1))}`);
               while ((parseInt(`${libffmpegkitd}`) / (Math.max(9, shirt4.size))) == 3) {
                  libffmpegkitd /= Math.max(parseFloat(`${3 & parseInt(`${libreanimatedS}`)}`), 5);
                  break;
               }
               while ((2 | shirt4.size) >= 5) {
                  productQ = infoJ;
                  break;
               }
               if ((libffmpegkitd + 2) <= 1.18) {
                  libreanimatedS += parseFloat(`${3}`);
               }
               let play5 = 2.0;
               let yingj = String.fromCharCode(104, 100, 110, 111, 100, 101, 95, 52, 95, 54, 0);
               let arrowupF = 4;
               let linku = String.fromCharCode(119, 95, 50, 54, 95, 97, 114, 101, 116, 104, 101, 114, 101, 0);
               play5 /= Math.max(2, 2);
               yingj += `${(String.fromCharCode(90, 0) == linku ? arrowupF : linku.length)}`;
               arrowupF *= arrowupF >> (Math.min(yingj.length, 1));
               proxyY |= parseInt(`${basketballawayteamH}`);
               if (loginH) {
                  break;
               }
            } while (loginH && (2 >= (dplusF.length & proxyY) && (2 & dplusF.length) >= 2));
            proxyY *= parseInt(`${whitevideoliveV}`);
            let release_ub = String.fromCharCode(97, 95, 52, 48, 95, 105, 112, 111, 108, 0);
            let whitesmalltickF = 5;
            let logins = String.fromCharCode(104, 95, 57, 53, 95, 97, 114, 114, 97, 121, 0);
            release_ub += `${3 ^ whitesmalltickF}`;
            whitesmalltickF += 1;
            logins = `${logins.length}`;
            let malaysia6 = release_ub.length >= 5664492;
            do {
               release_ub += "1";
               if (malaysia6) {
                  break;
               }
            } while (malaysia6 && (release_ub.includes(release_ub)));
            for (let b = 0; b < 1; b++) {
               let customK = String.fromCharCode(109, 95, 56, 95, 115, 99, 97, 110, 0);
               release_ub += `${customK.length >> (Math.min(3, release_ub.length))}`;
            }
            right5 = new Map([[iconuserJ, 2]]);
            let championF = 5767945 >= icondefaultthumbnailV;
            do {
               icondefaultthumbnailV >>= Math.min(Math.abs(parseInt(`${basketballawayteamH}`)), 3);
               if (championF) {
                  break;
               }
            } while (((1 & dplusF.length) < 3 && 2 < (1 & dplusF.length)) && championF);
            let classesb = 0.0;
            let baseh = String.fromCharCode(112, 95, 50, 54, 95, 100, 121, 110, 97, 109, 105, 99, 115, 0);
            classesb += parseFloat(`${parseInt(`${classesb}`) - 1}`);
            baseh = `${1 >> (Math.min(1, baseh.length))}`;
            if (classesb <= 1.21) {
               let topicd = 2;
               let privacyD = false;
               let gestures9 = 0.0;
               let guidej = false;
               classesb -= parseFloat(`${1}`);
               topicd |= 2 >> (Math.min(Math.abs(topicd), 2));
               privacyD = 72 >= topicd && !privacyD;
               gestures9 /= Math.max(parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${gestures9}`)), 4))}`), 3);
               guidej = topicd < 61 && 39.76 < gestures9;
            }
            let stations5 = classesb <= 5848419.0;
            do {
               classesb /= Math.max(parseFloat(`${parseInt(`${classesb}`)}`), 3);
               if (stations5) {
                  break;
               }
            } while (((classesb - 4.85) < 4.98) && stations5);
            proxyY *= parseInt(`${classesb}`) / (Math.max(3, iconuserJ.length));
            icondefaultthumbnailV += 1 << (Math.min(Math.abs(parseInt(`${basketballawayteamH}`)), 1));
            icondefaultthumbnailV %= Math.max(2, 1);
            iconuserJ += `${right5.size + 2}`;
            let iconplayY = String.fromCharCode(101, 120, 104, 97, 117, 115, 116, 101, 100, 95, 115, 95, 50, 53, 0);
            let iconpipshrinkl: Array<any> = [668, 824];
            while ((3 * iconpipshrinkl.length) >= 4 || 3 >= (iconpipshrinkl.length * iconplayY.length)) {
               iconpipshrinkl = [iconpipshrinkl.length];
               break;
            }
            iconplayY += "1";
            if (3 <= (iconpipshrinkl.length - 4) || 4 <= (iconpipshrinkl.length - iconplayY.length)) {
               iconplayY = `${iconplayY.length | 2}`;
            }
            while (4 >= (iconplayY.length ^ iconpipshrinkl.length) && 5 >= (4 ^ iconplayY.length)) {
               iconpipshrinkl.push(iconpipshrinkl.length);
               break;
            }
            iconplayY += "1";
            iconpipshrinkl.push(iconpipshrinkl.length - iconplayY.length);
            mbridgep = `${xadsdkD.length * 2}`;
            right5.set(`${whitevideoliveV}`, parseInt(`${iconpipshrinko}`) * 2);
            let typingW = 1.0;
            let modityY = String.fromCharCode(114, 95, 57, 54, 95, 114, 101, 97, 115, 115, 101, 109, 98, 108, 121, 0);
            let weiboY: Map<any, any> = new Map([[String.fromCharCode(97, 95, 54, 49, 95, 117, 110, 99, 97, 99, 104, 101, 100, 0), 73], [String.fromCharCode(104, 95, 55, 48, 95, 108, 111, 99, 97, 108, 105, 122, 97, 116, 105, 111, 110, 0), 92]]);
            if (modityY.startsWith(`${weiboY.size}`)) {
               weiboY = new Map([[`${weiboY.size}`, weiboY.size]]);
            }
            modityY = `${weiboY.size >> (Math.min(modityY.length, 5))}`;
            while (!modityY.includes(`${weiboY.size}`)) {
               let soundb = String.fromCharCode(120, 95, 57, 52, 95, 114, 101, 109, 105, 110, 100, 0);
               modityY += "1";
               soundb = `${3 | soundb.length}`;
               break;
            }
            modityY += `${modityY.length}`;
            let active3 = String.fromCharCode(105, 95, 54, 51, 95, 114, 101, 97, 115, 115, 101, 109, 98, 108, 121, 0);
            let homeloadingG = String.fromCharCode(97, 118, 101, 114, 97, 103, 101, 95, 50, 95, 55, 54, 0);
            let moon2 = String.fromCharCode(105, 110, 104, 101, 114, 105, 116, 95, 56, 95, 53, 49, 0);
            let homeloadingq = 1.0;
            let zhengpianY = 1;
            typingW -= weiboY.size;
            moon2 = `${3 | moon2.length}`;
            homeloadingq += 2;
            zhengpianY <<= Math.min(5, Math.abs(parseInt(`${homeloadingq}`) & 1));
            for (let w = 0; w < 1; w++) {
               typingW *= parseInt(`${typingW}`) & modityY.length;
            }
            let switch_x9 = String.fromCharCode(99, 97, 114, 100, 105, 110, 97, 108, 105, 116, 121, 95, 56, 95, 50, 51, 0);
            homeloadingG = `${3 * homeloadingG.length}`;
            right5 = new Map([[`${weiboY.size}`, 2]]);
            iconpipshrinko += parseFloat(`${mbridgep.length << (Math.min(Math.abs(2), 5))}`);

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

      if (
         itemId !== undefined &&
         (itemId + 1) > VIEW_NUMBER_FOR_SHOW_VIDEO_ADS &&
         (itemId + 1) % VIEW_NUMBER_FOR_SHOW_VIDEO_ADS === 1 &&
         vod?.type_id === shortVodId
      ) {
         showAds(UGreytickLoading.UShowless);
      }
   }, [shortVodId]);

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
      [shortVodId, currentEpisode]
   );

   const onContentSizeChange = () => {
      let libfollyy = String.fromCharCode(108, 108, 110, 119, 95, 115, 95, 55, 53, 0);
      let leaguedetailsbgY = String.fromCharCode(120, 95, 57, 56, 95, 103, 101, 110, 97, 110, 110, 0);
      let sourceL = String.fromCharCode(105, 110, 105, 116, 100, 101, 99, 95, 100, 95, 51, 57, 0);
      let gpayZ = String.fromCharCode(113, 95, 55, 48, 95, 104, 101, 118, 99, 100, 115, 112, 0);
      let spinner1 = 2;
      let diceA: Map<any, any> = new Map([[String.fromCharCode(121, 95, 54, 95, 114, 101, 118, 111, 107, 101, 100, 0), 181], [String.fromCharCode(116, 105, 102, 102, 95, 57, 95, 49, 49, 0), 717]]);
      let thailandL = 1.0;
      let albumv = 0.0;
      let minimize8 = 3;
      let buildq = 0.0;
      let shareR: Array<any> = [725, 842, 855];
      let toponZ = false;
      let huaweiC = 5.0;
      if (1 >= (2 ^ minimize8)) {
         thailandL *= parseInt(`${albumv}`) ^ 3;
      }
      let dangerE = minimize8 <= 5770357;
      do {
         minimize8 *= spinner1 % (Math.max(shareR.length, 9));
         if (dangerE) {
            break;
         }
      } while ((minimize8 > 5) && dangerE);
      let defaultbasketballbg1 = 1.0;
      let moviesj = String.fromCharCode(120, 95, 51, 54, 95, 115, 99, 114, 101, 97, 109, 0);
      let statsnomoredata1: Map<any, any> = new Map([[String.fromCharCode(108, 95, 51, 95, 118, 97, 108, 105, 100, 97, 116, 101, 0), false], [String.fromCharCode(112, 95, 50, 55, 95, 115, 111, 114, 116, 0), true], [String.fromCharCode(106, 95, 57, 51, 95, 102, 100, 99, 116, 120, 0), true]]);
      if (moviesj.includes(`${statsnomoredata1.size}`)) {
         statsnomoredata1.set(`${defaultbasketballbg1}`, parseInt(`${defaultbasketballbg1}`));
      }
      let neonW = 1.0;
      let alertZ = 2;
      moviesj += "3";
      neonW += parseFloat(`${3}`);
      alertZ >>= Math.min(5, Math.abs(alertZ));
      moviesj += `${moviesj.length / (Math.max(9, parseInt(`${defaultbasketballbg1}`)))}`;
      let actionx = statsnomoredata1.size >= 7951288;
      do {
         statsnomoredata1.set(`${defaultbasketballbg1}`, parseInt(`${defaultbasketballbg1}`));
         if (actionx) {
            break;
         }
      } while ((4.3 >= defaultbasketballbg1) && actionx);
      moviesj += `${parseInt(`${defaultbasketballbg1}`)}`;
      moviesj = `${statsnomoredata1.size}`;
      moviesj = `${1 + statsnomoredata1.size}`;
      statsnomoredata1 = new Map([[`${statsnomoredata1.size}`, statsnomoredata1.size & 3]]);
      defaultbasketballbg1 -= moviesj.length;
      minimize8 -= 1;
      minimize8 |= 3 & leaguedetailsbgY.length;
      libfollyy += `${(parseInt(`${thailandL}`) / (Math.max(8, (toponZ ? 2 : 2))))}`;
      toponZ = String.fromCharCode(53, 0) == libfollyy;
      if (leaguedetailsbgY.includes(sourceL)) {
         let buttonM = 2;
         let renews = String.fromCharCode(98, 95, 55, 54, 95, 117, 114, 108, 99, 111, 110, 116, 101, 120, 116, 0);
         let reactnavigationz = false;
         let playershirt3 = 4.0;
         if ((4 + buttonM) < 2 || (buttonM + renews.length) < 4) {
            buttonM ^= (renews.length | (reactnavigationz ? 4 : 3));
         }
         let downz = 0;
         let modew = 2;
         buttonM >>= Math.min(5, Math.abs(3 ^ buttonM));
         downz *= modew;
         modew &= downz;
         let libmapbufferjniV = reactnavigationz ? !reactnavigationz : reactnavigationz;
         do {
            reactnavigationz = renews.length > buttonM;
            if (libmapbufferjniV) {
               break;
            }
         } while (libmapbufferjniV && (2.89 >= playershirt3 || 5.85 >= (2.89 - playershirt3)));
         let phoneshareW: Map<any, any> = new Map([[String.fromCharCode(98, 108, 111, 99, 107, 101, 100, 95, 107, 95, 55, 48, 0), 531], [String.fromCharCode(111, 95, 49, 50, 95, 97, 108, 103, 111, 114, 105, 116, 104, 109, 115, 0), 495]]);
         let hometeamfieldc: Map<any, any> = new Map([[String.fromCharCode(108, 95, 49, 53, 95, 100, 97, 105, 108, 121, 0), 543], [String.fromCharCode(99, 111, 109, 112, 111, 115, 105, 116, 105, 110, 103, 95, 116, 95, 49, 51, 0), 681]]);
         for (let w = 0; w < 2; w++) {
            playershirt3 -= parseFloat(`${hometeamfieldc.size}`);
         }
         let pangleZ: Map<any, any> = new Map([[String.fromCharCode(105, 109, 100, 99, 116, 95, 114, 95, 57, 57, 0), 346], [String.fromCharCode(112, 95, 52, 57, 95, 99, 97, 110, 116, 111, 112, 101, 110, 0), 545], [String.fromCharCode(110, 95, 51, 57, 95, 115, 101, 113, 0), 224]]);
         phoneshareW.set(renews, (renews == String.fromCharCode(55, 0) ? renews.length : pangleZ.size));
         for (let d = 0; d < 2; d++) {
            let libsentryk = 2.0;
            let lineV = 4.0;
            let ballM = String.fromCharCode(114, 101, 97, 108, 109, 95, 122, 95, 56, 57, 0);
            let backiconmaske = true;
            let application3: Array<any> = [347, 679, 637];
            playershirt3 /= Math.max(parseFloat(`${3 - ballM.length}`), 2);
            libsentryk += parseFloat(`${parseInt(`${lineV}`) >> (Math.min(1, Math.abs(3)))}`);
            lineV += parseFloat(`${3 % (Math.max(10, parseInt(`${libsentryk}`)))}`);
            ballM = `${parseInt(`${libsentryk}`) << (Math.min(3, Math.abs(2)))}`;
            backiconmaske = lineV > 78.51;
            application3 = [2];
         }
         reactnavigationz = playershirt3 < 44.57;
         for (let i = 0; i < 1; i++) {
            let homeinactiveQ = 3;
            let anytimer = String.fromCharCode(97, 95, 51, 51, 95, 119, 104, 116, 120, 0);
            let handlerX: Array<any> = [String.fromCharCode(117, 95, 53, 53, 95, 118, 99, 111, 119, 112, 116, 114, 0), String.fromCharCode(115, 99, 104, 105, 95, 117, 95, 50, 57, 0), String.fromCharCode(103, 101, 110, 101, 114, 97, 116, 101, 95, 102, 95, 56, 0)];
            let largesoundq = String.fromCharCode(108, 95, 57, 51, 95, 115, 111, 117, 110, 0);
            let humidity6 = String.fromCharCode(117, 95, 49, 55, 95, 112, 114, 105, 110, 116, 101, 114, 0);
            buttonM += phoneshareW.size;
            homeinactiveQ /= Math.max(2 + anytimer.length, 1);
            anytimer += `${anytimer.length + 1}`;
            handlerX = [2 ^ anytimer.length];
            largesoundq = `${largesoundq.length}`;
            humidity6 = `${(anytimer == String.fromCharCode(51, 0) ? handlerX.length : anytimer.length)}`;
         }
         if (buttonM > playershirt3) {
            playershirt3 -= parseFloat(`${2 % (Math.max(parseInt(`${playershirt3}`), 7))}`);
         }
         renews = `${1 * hometeamfieldc.size}`;
         if (renews.includes(`${phoneshareW.size}`)) {
            let notificationb = String.fromCharCode(101, 110, 99, 111, 100, 101, 102, 114, 97, 109, 101, 95, 52, 95, 54, 54, 0);
            let description_0nK: Array<any> = [32, 99, 717];
            renews += `${(String.fromCharCode(48, 0) == notificationb ? hometeamfieldc.size : notificationb.length)}`;
            description_0nK.push(2 | description_0nK.length);
         }
         sourceL = `${libfollyy.length}`;
      }
      let footballtrophye = String.fromCharCode(109, 115, 103, 115, 109, 100, 101, 99, 95, 121, 95, 54, 51, 0);
      let heart0 = String.fromCharCode(111, 95, 54, 54, 0);
      footballtrophye = `${footballtrophye.length & 3}`;
      heart0 = `${heart0.length % 3}`;
      footballtrophye = `${footballtrophye.length}`;
      let historyB = String.fromCharCode(104, 95, 51, 56, 95, 99, 104, 111, 111, 115, 105, 110, 103, 0);
      footballtrophye += `${(String.fromCharCode(69, 0) == historyB ? footballtrophye.length : historyB.length)}`;
      buildq += parseInt(`${albumv}`);

      if (episodeRef.current) {

         let watchD = String.fromCharCode(121, 95, 54, 48, 95, 105, 110, 116, 101, 114, 109, 105, 100, 105, 97, 116, 101, 0);
         let mbjscommonM: Map<any, any> = new Map([[String.fromCharCode(106, 95, 56, 55, 95, 99, 117, 114, 118, 101, 115, 0), String.fromCharCode(104, 95, 53, 52, 95, 99, 108, 101, 97, 110, 101, 100, 0)], [String.fromCharCode(114, 95, 52, 50, 95, 114, 101, 115, 105, 122, 105, 110, 103, 0), String.fromCharCode(114, 97, 100, 102, 103, 95, 111, 95, 52, 0)]]);
         if (5 == (mbjscommonM.size >> (Math.min(Math.abs(3), 5)))) {
            let notificationfilledO = String.fromCharCode(101, 110, 99, 111, 100, 105, 110, 103, 115, 95, 57, 95, 53, 53, 0);
            let hoverN = false;
            mbjscommonM = new Map([[`${mbjscommonM.size}`, ((hoverN ? 4 : 5) & mbjscommonM.size)]]);
            notificationfilledO += `${notificationfilledO.length + notificationfilledO.length}`;
            hoverN = notificationfilledO == notificationfilledO;
         }
         if ((2 | watchD.length) == 1) {
            watchD = `${watchD.length}`;
         }
         for (let g = 0; g < 2; g++) {
            mbjscommonM.set(`${watchD}`, watchD.length & mbjscommonM.size);
         }
         if (mbjscommonM.size <= watchD.length) {
            watchD += `${mbjscommonM.size % 2}`;
         }
         let regeng6 = mbjscommonM.size >= 7165905;
         do {
            let libavdeviceO = String.fromCharCode(115, 116, 97, 108, 108, 95, 121, 95, 54, 54, 0);
            let mathM = String.fromCharCode(109, 95, 55, 95, 97, 118, 115, 115, 0);
            let matchK: Map<any, any> = new Map([[String.fromCharCode(122, 95, 52, 51, 95, 116, 114, 97, 110, 115, 0), true], [String.fromCharCode(98, 95, 48, 95, 106, 112, 101, 103, 105, 110, 116, 0), false]]);
            let chatbotphotoC = String.fromCharCode(105, 115, 110, 97, 110, 95, 119, 95, 50, 51, 0);
            mbjscommonM = new Map([[libavdeviceO, mathM.length << (Math.min(3, libavdeviceO.length))]]);
            mathM += `${chatbotphotoC.length}`;
            matchK = new Map([[`${matchK.size}`, matchK.size]]);
            chatbotphotoC += `${(chatbotphotoC == String.fromCharCode(115, 0) ? chatbotphotoC.length : matchK.size)}`;
            if (regeng6) {
               break;
            }
         } while (regeng6 && (4 > mbjscommonM.size));
         watchD += "1";
         diceA.set(`${buildq}`, parseInt(`${buildq}`));
         if (1 == (3 | spinner1) && 1 == (sourceL.length | 3)) {
            spinner1 |= shareR.length - leaguedetailsbgY.length;
         }
         spinner1 |= 1;
         diceA = new Map([[`${shareR.length}`, ((toponZ ? 2 : 5) - 3)]]);
         shareR.push(diceA.size & sourceL.length);
         for (let f = 0; f < 1; f++) {
            diceA.set(leaguedetailsbgY, parseInt(`${buildq}`));
         }
         for (let g = 0; g < 1; g++) {
            let iconclosewhitew: Map<any, any> = new Map([[String.fromCharCode(109, 97, 105, 110, 115, 116, 97, 103, 101, 95, 121, 95, 54, 56, 0), 995], [String.fromCharCode(115, 101, 114, 118, 105, 99, 101, 95, 56, 95, 55, 53, 0), 919]]);
            let zhuboZ = String.fromCharCode(109, 95, 50, 49, 95, 100, 101, 99, 105, 112, 104, 101, 114, 0);
            let upgradeK: Array<any> = [699, 665];
            let static_y3: Array<any> = [77, 828];
            if (Array.from(iconclosewhitew.values()).includes(upgradeK.length)) {
               upgradeK = [upgradeK.length & 2];
            }
            if (zhuboZ.includes(`${upgradeK.length}`)) {
               let pressureo = 2;
               let orangeclocks: Map<any, any> = new Map([[String.fromCharCode(115, 99, 114, 101, 101, 110, 95, 117, 95, 57, 48, 0), 606], [String.fromCharCode(118, 95, 54, 55, 95, 109, 97, 112, 102, 105, 108, 101, 0), 938]]);
               let plash5 = 2.0;
               let shareU = String.fromCharCode(115, 101, 97, 108, 98, 111, 120, 95, 101, 95, 51, 55, 0);
               upgradeK = [3];
               pressureo /= Math.max(pressureo, 3);
               orangeclocks = new Map([[`${orangeclocks.size}`, (String.fromCharCode(56, 0) == shareU ? orangeclocks.size : shareU.length)]]);
               plash5 += 1 * parseInt(`${plash5}`);
            }
            zhuboZ = `${(String.fromCharCode(84, 0) == zhuboZ ? zhuboZ.length : upgradeK.length)}`;
            static_y3 = [3];
            zhuboZ += `${iconclosewhitew.size}`;
            let appsx = 3.0;
            let tempnodatagifB = 1.0;
            let iconnotificationnew5: Map<any, any> = new Map([[String.fromCharCode(97, 97, 115, 99, 95, 115, 95, 50, 53, 0), 685], [String.fromCharCode(115, 111, 108, 105, 115, 116, 101, 110, 95, 109, 95, 50, 55, 0), 233], [String.fromCharCode(116, 117, 110, 101, 95, 101, 95, 56, 54, 0), 412]]);
            let iconshareK = String.fromCharCode(101, 109, 111, 116, 105, 99, 111, 110, 115, 95, 112, 95, 49, 48, 0);
            tempnodatagifB *= parseFloat(`${iconnotificationnew5.size << (Math.min(3, Math.abs(parseInt(`${appsx}`))))}`);
            iconnotificationnew5.set(iconshareK, (iconshareK == String.fromCharCode(107, 0) ? iconshareK.length : iconshareK.length));
            for (let p = 0; p < 1; p++) {
               upgradeK = [1];
            }
            let iconarrowleftM = 2.0;
            appsx += parseFloat(`${3}`);
            iconarrowleftM += parseInt(`${iconarrowleftM}`) + parseInt(`${iconarrowleftM}`);
            while (zhuboZ.startsWith(`${static_y3.length}`)) {
               zhuboZ += `${3 & upgradeK.length}`;
               break;
            }
            static_y3.push(3);
            let iconuser3 = tempnodatagifB >= 9759720.0;
            do {
               tempnodatagifB /= Math.max(5, parseFloat(`${3}`));
               if (iconuser3) {
                  break;
               }
            } while (iconuser3 && (4 < (static_y3.length / (Math.max(1, parseInt(`${tempnodatagifB}`)))) || 4 < (parseInt(`${tempnodatagifB}`) / (Math.max(static_y3.length, 8)))));
            minimize8 <<= Math.min(1, Math.abs(iconclosewhitew.size - static_y3.length));
         }
         for (let h = 0; h < 1; h++) {
            albumv += 1;
         }
         episodeRef.current.scrollToIndex({
            index: currentEpisode,
            animated: true,
         });
      }
   };

   const handleModalClose = useCallback(() => {
      let phoneshareP = 2.0;
      let uploady: Array<any> = [397, 544, 28];
      let taiwanT = String.fromCharCode(99, 111, 109, 98, 105, 110, 97, 116, 111, 114, 95, 115, 95, 57, 52, 0);
      let tailL: Array<any> = [String.fromCharCode(122, 95, 50, 56, 95, 100, 111, 99, 105, 100, 115, 0), String.fromCharCode(112, 95, 51, 48, 95, 98, 97, 99, 107, 0), String.fromCharCode(99, 95, 49, 51, 95, 116, 99, 109, 105, 0)];
      let inviteO: Map<any, any> = new Map([[String.fromCharCode(120, 95, 53, 48, 95, 97, 110, 97, 108, 111, 103, 0), 630], [String.fromCharCode(101, 95, 56, 48, 95, 118, 100, 115, 111, 0), 466], [String.fromCharCode(100, 101, 108, 101, 116, 101, 95, 115, 95, 53, 48, 0), 193]]);
      let iconrightorange6 = true;
      let airbnbstarx = String.fromCharCode(102, 95, 51, 54, 95, 117, 98, 115, 99, 114, 105, 98, 101, 114, 0);
      let pointR = String.fromCharCode(97, 95, 49, 48, 48, 95, 110, 111, 110, 100, 99, 0);
      let qaagl = String.fromCharCode(109, 105, 110, 117, 116, 101, 115, 95, 105, 95, 51, 50, 0);
      let iconnotificationnewV = String.fromCharCode(97, 115, 115, 101, 109, 98, 108, 101, 100, 95, 122, 95, 57, 51, 0);
      let stare = 4.0;
      qaagl += "3";
      if (4 == (tailL.length & 4) || (4 & taiwanT.length) == 1) {
         let predictiondefaultp = String.fromCharCode(121, 117, 118, 121, 97, 95, 53, 95, 52, 57, 0);
         let predictionbuttony = 3;
         predictiondefaultp = "2";
         let window_k9 = String.fromCharCode(105, 95, 56, 52, 95, 116, 114, 97, 100, 101, 0);
         predictionbuttony %= Math.max(3, window_k9.length);
         let ticki = 7641490 >= predictionbuttony;
         do {
            let chinaF = 2.0;
            predictionbuttony += parseInt(`${chinaF}`) << (Math.min(1, Math.abs(1)));
            if (ticki) {
               break;
            }
         } while ((predictiondefaultp.includes(`${predictionbuttony}`)) && ticki);
         predictiondefaultp = `${predictiondefaultp.length << (Math.min(1, Math.abs(predictionbuttony)))}`;
         predictionbuttony -= predictiondefaultp.length + predictionbuttony;
         let penalty3 = 9575371 >= predictiondefaultp.length;
         do {
            let auto_5mY = String.fromCharCode(105, 95, 53, 57, 95, 101, 120, 116, 114, 101, 109, 117, 109, 0);
            predictiondefaultp += "1";
            auto_5mY += `${auto_5mY.length}`;
            if (penalty3) {
               break;
            }
         } while ((predictionbuttony >= 2) && penalty3);
         tailL = [inviteO.size % (Math.max(predictiondefaultp.length, 5))];
      }
      let defaultlogo2 = iconrightorange6 ? !iconrightorange6 : iconrightorange6;
      do {
         iconrightorange6 = inviteO.size <= 38;
         if (defaultlogo2) {
            break;
         }
      } while (defaultlogo2 && (4 > (4 & uploady.length)));
      let stylee: Map<any, any> = new Map([[String.fromCharCode(99, 111, 114, 100, 122, 95, 52, 95, 57, 50, 0), 624], [String.fromCharCode(102, 105, 108, 116, 101, 114, 95, 121, 95, 54, 52, 0), 610]]);
      let overB = String.fromCharCode(112, 95, 50, 55, 95, 116, 104, 114, 111, 119, 105, 110, 103, 0);
      let iconstar9 = 3.0;
      let flyerc = 5267974 >= overB.length;
      do {
         overB += `${overB.length}`;
         if (flyerc) {
            break;
         }
      } while ((3 < stylee.size) && flyerc);
      iconstar9 += parseFloat(`${parseInt(`${iconstar9}`) << (Math.min(Math.abs(1), 1))}`);
      let eyecloseG = String.fromCharCode(117, 52, 116, 115, 101, 110, 99, 0) == overB;
      do {
         overB = `${1 >> (Math.min(3, overB.length))}`;
         if (eyecloseG) {
            break;
         }
      } while ((1 < (stylee.size - 5)) && eyecloseG);
      overB = `${overB.length << (Math.min(4, Math.abs(parseInt(`${iconstar9}`))))}`;
      for (let s = 0; s < 1; s++) {
         overB = "1";
      }
      overB += `${overB.length}`;
      let clocky = String.fromCharCode(103, 119, 51, 49, 111, 109, 110, 102, 0) == overB;
      do {
         overB += `${overB.length}`;
         if (clocky) {
            break;
         }
      } while (clocky && (4 < (1 >> (Math.min(2, overB.length)))));
      stylee.set(overB, parseInt(`${iconstar9}`));
      for (let e = 0; e < 3; e++) {
         let eyeopenS = String.fromCharCode(105, 95, 55, 53, 95, 115, 117, 98, 112, 97, 114, 116, 0);
         let greenY = 0.0;
         overB += `${(String.fromCharCode(114, 0) == eyeopenS ? eyeopenS.length : parseInt(`${iconstar9}`))}`;
         greenY -= parseFloat(`${parseInt(`${greenY}`)}`);
      }
      phoneshareP /= Math.max(2, parseFloat(`${uploady.length & 1}`));
      for (let n = 0; n < 2; n++) {
         let bangN = String.fromCharCode(121, 111, 102, 102, 115, 101, 116, 95, 55, 95, 51, 52, 0);
         let fcdaebecbcbafcdfceaaeccfeacdba = 4.0;
         bangN = `${parseInt(`${fcdaebecbcbafcdfceaaeccfeacdba}`) + bangN.length}`;
         let saveY = String.fromCharCode(115, 95, 56, 56, 95, 119, 104, 105, 116, 101, 108, 105, 115, 116, 101, 100, 0);
         let release_6yp = String.fromCharCode(109, 95, 52, 57, 95, 104, 119, 99, 111, 110, 116, 101, 120, 116, 0);
         bangN += `${saveY.length >> (Math.min(Math.abs(1), 3))}`;
         while (3 < saveY.length) {
            saveY = `${1 ^ parseInt(`${fcdaebecbcbafcdfceaaeccfeacdba}`)}`;
            break;
         }
         let gifgoalT = fcdaebecbcbafcdfceaaeccfeacdba >= 9035277.0;
         do {
            let imagewatchlivew = 1.0;
            fcdaebecbcbafcdfceaaeccfeacdba += parseFloat(`${parseInt(`${imagewatchlivew}`)}`);
            if (gifgoalT) {
               break;
            }
         } while (gifgoalT && ((bangN.length << (Math.min(Math.abs(1), 3))) > 1));
         for (let m = 0; m < 2; m++) {
            saveY = `${release_6yp.length / (Math.max(1, 10))}`;
         }
         phoneshareP /= Math.max(parseFloat(`${bangN.length + 2}`), 4);
      }
      let themeR = String.fromCharCode(98, 95, 52, 56, 95, 100, 111, 116, 115, 0);
      let frame_ft3 = 2.0;
      for (let x = 0; x < 1; x++) {
         frame_ft3 /= Math.max(3, 3);
      }
      let refreshx = 0;
      let minimizew = 0;
      themeR += "1";
      while ((frame_ft3 * 1.28) <= 3.30 || 4.80 <= (frame_ft3 * 1.28)) {
         refreshx >>= Math.min(3, Math.abs(2));
         break;
      }
      let soundq = false;
      let statsQ = 1;
      frame_ft3 *= 3;
      soundq = 55 < statsQ;
      statsQ %= Math.max(statsQ * 1, 5);
      let predictionbuttond = String.fromCharCode(115, 95, 55, 57, 95, 101, 120, 116, 114, 97, 100, 97, 116, 97, 112, 115, 101, 116, 115, 0);
      let iconshareh: Array<any> = [787, 855];
      themeR = `${themeR.length & 3}`;
      predictionbuttond = `${predictionbuttond.length}`;
      iconshareh.push(1 ^ iconshareh.length);
      pointR = `${(airbnbstarx == String.fromCharCode(67, 0) ? iconnotificationnewV.length : airbnbstarx.length)}`;
      airbnbstarx += `${tailL.length}`;
      pointR = `${iconnotificationnewV.length << (Math.min(4, Math.abs(parseInt(`${phoneshareP}`))))}`;
      taiwanT = `${1 ^ qaagl.length}`;
      airbnbstarx = `${tailL.length >> (Math.min(Math.abs(2), 2))}`;
      qaagl += `${iconnotificationnewV.length}`;
      pointR += `${pointR.length}`;
      for (let j = 0; j < 3; j++) {
         let dataf: Map<any, any> = new Map([[String.fromCharCode(118, 112, 99, 120, 95, 107, 95, 54, 48, 0), 844], [String.fromCharCode(98, 108, 105, 110, 107, 95, 50, 95, 54, 50, 0), 759], [String.fromCharCode(107, 95, 54, 56, 95, 109, 111, 100, 101, 120, 112, 0), 392]]);
         let k_imageZ = String.fromCharCode(113, 95, 50, 48, 95, 118, 112, 109, 116, 0);
         while (2 == k_imageZ.length) {
            let carousela = String.fromCharCode(111, 95, 56, 52, 95, 108, 105, 98, 111, 112, 101, 110, 106, 112, 101, 103, 0);
            let sliderf = String.fromCharCode(120, 105, 110, 103, 95, 55, 95, 50, 52, 0);
            let injuryA = 4;
            let basketballhometeamJ: Array<any> = [String.fromCharCode(110, 108, 109, 101, 97, 110, 115, 95, 54, 95, 57, 49, 0), String.fromCharCode(116, 104, 114, 101, 115, 104, 111, 108, 100, 105, 110, 103, 95, 55, 95, 49, 50, 0)];
            k_imageZ = `${sliderf.length - injuryA}`;
            carousela += `${basketballhometeamJ.length}`;
            sliderf += "1";
            injuryA >>= Math.min(Math.abs(carousela.length & 3), 3);
            basketballhometeamJ = [carousela.length + basketballhometeamJ.length];
            break;
         }
         k_imageZ = `${dataf.size / (Math.max(6, k_imageZ.length))}`;
         if ((dataf.size % 2) < 4) {
            k_imageZ += "2";
         }
         dataf = new Map([[`${dataf.size}`, k_imageZ.length]]);
         let positionfieldX = String.fromCharCode(119, 104, 105, 116, 101, 115, 112, 97, 99, 101, 95, 99, 95, 55, 51, 0);
         k_imageZ += `${1 & positionfieldX.length}`;
         iconrightorange6 = uploady.length > 5;
      }
      taiwanT += `${uploady.length * tailL.length}`;
      while (!taiwanT.endsWith(`${pointR.length}`)) {
         taiwanT += `${(String.fromCharCode(115, 0) == pointR ? pointR.length : uploady.length)}`;
         break;
      }
      stare -= 1;
      if (4 >= pointR.length && iconrightorange6) {
         pointR += `${qaagl.length + 3}`;
      }
      let iconpipshrinkJ = 0.0;
      for (let q = 0; q < 2; q++) {
         let assetsi = 3;
         let filled6 = String.fromCharCode(114, 95, 49, 48, 48, 95, 116, 114, 117, 101, 109, 111, 116, 105, 111, 110, 0);
         let time_4pE = String.fromCharCode(112, 114, 111, 99, 101, 100, 117, 114, 101, 115, 95, 112, 95, 54, 50, 0);
         let register__L = 1.0;
         iconpipshrinkJ -= parseFloat(`${filled6.length >> (Math.min(2, Math.abs(parseInt(`${register__L}`))))}`);
         assetsi %= Math.max(2, 1 << (Math.min(1, Math.abs(assetsi))));
         filled6 += `${time_4pE.length << (Math.min(Math.abs(3), 1))}`;
         time_4pE = "3";
         register__L += parseFloat(`${time_4pE.length + 3}`);
      }
      let nodeq = String.fromCharCode(108, 95, 55, 95, 117, 115, 114, 115, 99, 116, 112, 0);
      let manifestr = String.fromCharCode(111, 117, 116, 95, 49, 95, 54, 51, 0);
      nodeq += `${nodeq.length}`;
      uploady.push(2 ^ qaagl.length);
      iconrightorange6 = (parseFloat(`${uploady.length}`) * phoneshareP) > 24.48;
      iconnotificationnewV += "2";
      if ((parseInt(`${phoneshareP}`) / (Math.max(pointR.length, 10))) > 3) {
         pointR += `${taiwanT.length | 2}`;
      }
      phoneshareP *= parseFloat(`${airbnbstarx.length | 3}`);
      while (2 >= airbnbstarx.length) {
         phoneshareP *= parseFloat(`${2 >> (Math.min(1, iconnotificationnewV.length))}`);
         break;
      }
      let infov = String.fromCharCode(112, 108, 97, 99, 101, 115, 95, 114, 95, 52, 48, 0);
      infov = `${(String.fromCharCode(71, 0) == infov ? infov.length : infov.length)}`;
      let commonf = true;
      infov = `${((commonf ? 2 : 2))}`;
      if (1 <= infov.length && infov != String.fromCharCode(52, 0)) {
         infov = `${infov.length}`;
      }
      taiwanT += `${parseInt(`${stare}`)}`;

      setShowSheet(false);
   }, []);

   const onConfirmEpisodeSelection = (selectedEpisodeId: number) => {
      setCurrentEpisode(selectedEpisodeId);
      currentTimeRef.current = 0;
      handleModalClose();

      if (
         selectedEpisodeId !== undefined &&
         (selectedEpisodeId + 1) > VIEW_NUMBER_FOR_SHOW_VIDEO_ADS &&
         (selectedEpisodeId + 1) % VIEW_NUMBER_FOR_SHOW_VIDEO_ADS === 1 &&
         vod?.type_id === shortVodId
      ) {
         showAds(UGreytickLoading.UShowless);
      }
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
      let iconuserP = 0;
      let zoomJ: Map<any, any> = new Map([[String.fromCharCode(102, 117, 122, 122, 95, 50, 95, 51, 54, 0), 423], [String.fromCharCode(111, 116, 111, 105, 95, 103, 95, 52, 48, 0), 131]]);
      let tempnodata0 = 2.0;
      let owngoalx = 3.0;
      let usernameI: Map<any, any> = new Map([[String.fromCharCode(104, 95, 57, 57, 95, 100, 101, 108, 101, 103, 97, 116, 111, 114, 0), String.fromCharCode(116, 114, 97, 106, 101, 99, 116, 111, 114, 121, 95, 107, 95, 50, 53, 0)], [String.fromCharCode(99, 95, 55, 48, 95, 119, 114, 105, 116, 116, 101, 110, 0), String.fromCharCode(117, 95, 55, 50, 95, 115, 109, 101, 97, 114, 0)], [String.fromCharCode(113, 95, 53, 56, 95, 98, 111, 111, 107, 109, 97, 114, 107, 115, 0), String.fromCharCode(99, 110, 116, 95, 54, 95, 49, 57, 0)]]);
      let orangeclock6 = 3.0;
      let toponi = 3.0;
      let logouser6 = String.fromCharCode(99, 95, 56, 55, 95, 114, 117, 110, 0);
      let clearw = String.fromCharCode(103, 95, 54, 53, 95, 115, 105, 103, 110, 97, 108, 0);
      let balle = 2;
      let unreadS = String.fromCharCode(107, 95, 49, 95, 119, 101, 105, 103, 104, 116, 0);
      let clearp = String.fromCharCode(109, 111, 110, 111, 116, 111, 110, 121, 95, 113, 95, 49, 0);
      if ((balle % 1) < 5) {
         let completeN = false;
         let stations1 = true;
         unreadS = `${1 >> (Math.min(Math.abs(balle), 2))}`;
         completeN = !stations1;
         stations1 = (!stations1 ? !completeN : !stations1);
      }
      balle -= (clearp == String.fromCharCode(99, 0) ? clearp.length : unreadS.length);
      let referrerG = String.fromCharCode(105, 95, 53, 57, 95, 97, 108, 116, 101, 114, 97, 98, 108, 101, 0);
      let iconviewerM: Map<any, any> = new Map([[String.fromCharCode(101, 112, 104, 101, 109, 101, 114, 97, 108, 95, 97, 95, 49, 49, 0), false], [String.fromCharCode(112, 95, 49, 56, 95, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 105, 110, 103, 0), false], [String.fromCharCode(114, 95, 55, 55, 95, 109, 97, 116, 104, 101, 109, 97, 116, 105, 99, 115, 0), true]]);
      clearp += `${referrerG.length - clearp.length}`;
      referrerG = "1";
      iconviewerM = new Map([[`${iconviewerM.size}`, iconviewerM.size * iconviewerM.size]]);
      unreadS += `${balle}`;
      clearp = `${clearp.length}`;
      let privatechatbgQ = false;
      let runtimeK = 4;
      while (2 < (3 + runtimeK) || 1 < (balle + 3)) {
         runtimeK *= (unreadS == String.fromCharCode(68, 0) ? (privatechatbgQ ? 1 : 4) : unreadS.length);
         break;
      }
      let cornershooth = privatechatbgQ ? !privatechatbgQ : privatechatbgQ;
      do {
         privatechatbgQ = String.fromCharCode(76, 0) == unreadS || 64 <= clearp.length;
         if (cornershooth) {
            break;
         }
      } while (cornershooth && (!privatechatbgQ && (4 - balle) < 5));
      logouser6 += `${unreadS.length}`;
      logouser6 += `${parseInt(`${owngoalx}`)}`;
      let positionfieldD: Array<any> = [3, 834, 623];
      let manifestZ = String.fromCharCode(115, 119, 97, 112, 121, 118, 98, 117, 102, 102, 101, 114, 95, 105, 95, 51, 55, 0);
      if (positionfieldD.length > 3) {
         let baidux = 2;
         let modelo = false;
         let libavformatG = true;
         let list9: Map<any, any> = new Map([[String.fromCharCode(98, 117, 114, 115, 116, 121, 95, 116, 95, 53, 0), String.fromCharCode(122, 95, 54, 52, 95, 109, 97, 116, 104, 111, 112, 115, 0)], [String.fromCharCode(105, 95, 57, 51, 95, 99, 114, 111, 115, 115, 104, 97, 105, 114, 115, 0), String.fromCharCode(112, 95, 56, 56, 95, 112, 111, 115, 116, 102, 105, 120, 0)]]);
         manifestZ += `${(String.fromCharCode(79, 0) == manifestZ ? baidux : manifestZ.length)}`;
         baidux -= 3;
         modelo = (!modelo ? libavformatG : modelo);
         list9 = new Map([[`${list9.size}`, ((modelo ? 5 : 5) ^ list9.size)]]);
      }
      if (manifestZ.endsWith(`${positionfieldD.length}`)) {
         positionfieldD = [(manifestZ == String.fromCharCode(66, 0) ? positionfieldD.length : manifestZ.length)];
      }
      let nbatrophy5 = 1.0;
      let iconnewchatN = String.fromCharCode(105, 95, 54, 53, 95, 105, 100, 108, 101, 0);
      positionfieldD = [1];
      nbatrophy5 /= Math.max(3, iconnewchatN.length / (Math.max(9, parseInt(`${nbatrophy5}`))));
      iconnewchatN += `${3 ^ parseInt(`${nbatrophy5}`)}`;
      for (let w = 0; w < 1; w++) {
         let wifirouterW = 5;
         positionfieldD.push(manifestZ.length * positionfieldD.length);
         wifirouterW ^= wifirouterW;
      }
      let eighteenl: Array<any> = [818, 293];
      let downx: Array<any> = [849, 501];
      let footballfiledlayoutG = String.fromCharCode(97, 114, 101, 97, 115, 95, 97, 95, 57, 50, 0);
      downx = [manifestZ.length];
      footballfiledlayoutG = "3";
      toponi *= positionfieldD.length;
      let shootnogoalz = 5.0;
      if (shootnogoalz >= 3.49) {
         shootnogoalz += parseFloat(`${parseInt(`${shootnogoalz}`) % (Math.max(1, parseInt(`${shootnogoalz}`)))}`);
      }
      shootnogoalz *= parseFloat(`${parseInt(`${shootnogoalz}`) | parseInt(`${shootnogoalz}`)}`);
      shootnogoalz *= parseFloat(`${3 & parseInt(`${shootnogoalz}`)}`);
      usernameI = new Map([[`${usernameI.size}`, parseInt(`${toponi}`)]]);
      orangeclock6 -= parseFloat(`${1 - usernameI.size}`);



      while (owngoalx >= 1.94) {
         orangeclock6 -= parseFloat(`${1}`);
         break;
      }
      if ((4 * usernameI.size) == 4 && 2.11 == (owngoalx - usernameI.size)) {
         usernameI = new Map([[`${toponi}`, parseInt(`${owngoalx}`) ^ parseInt(`${toponi}`)]]);
      }
      owngoalx -= logouser6.length | 1;
      for (let p = 0; p < 2; p++) {
         tempnodata0 /= Math.max(4, parseFloat(`${parseInt(`${tempnodata0}`) << (Math.min(5, Math.abs(3)))}`));
      }
      if ((orangeclock6 / 5.31) <= 5.95) {
         orangeclock6 /= Math.max(parseFloat(`${logouser6.length & 2}`), 4);
      }


      if (1.57 == (tempnodata0 / (Math.max(2.85, 6)))) {
         logouser6 += `${parseInt(`${owngoalx}`) % 2}`;
      }
      let nativemoduleK = 2.0;
      let libfbX = true;
      let libfbI = String.fromCharCode(112, 114, 101, 115, 101, 114, 118, 101, 95, 122, 95, 57, 52, 0);
      nativemoduleK *= parseFloat(`${parseInt(`${nativemoduleK}`) / 1}`);
      for (let y = 0; y < 1; y++) {
         libfbX = nativemoduleK == 65.15;
      }
      if (4 > libfbI.length) {
         let loginb: Array<any> = [152, 633];
         let popupm = 1.0;
         libfbI = `${((libfbX ? 5 : 1))}`;
         loginb = [parseInt(`${popupm}`) | loginb.length];
         popupm /= Math.max(loginb.length, 5);
      }
      let commentb = 3;
      libfbX = parseFloat(`${libfbI.length}`) < nativemoduleK;
      commentb %= Math.max(4, commentb);
      if (libfbI.length == 4) {
         libfbI = `${3 / (Math.max(parseInt(`${nativemoduleK}`), 10))}`;
      }
      for (let n = 0; n < 2; n++) {
         let yellowtoredq: Array<any> = [700, 646];
         let notificationb = true;
         let reactnativeultimatelistviewF = String.fromCharCode(120, 95, 53, 57, 95, 115, 111, 114, 116, 101, 100, 0);
         let unselectede = String.fromCharCode(100, 95, 49, 48, 95, 112, 97, 117, 115, 101, 0);
         let zoom2 = 0;
         libfbX = String.fromCharCode(87, 0) == reactnativeultimatelistviewF && zoom2 > 12;
         yellowtoredq.push(3);
         notificationb = unselectede.length == 24;
         reactnativeultimatelistviewF += "2";
         unselectede = "1";
         zoom2 /= Math.max(3, unselectede.length % 1);
      }
      let libavcodecu = libfbI == String.fromCharCode(55, 51, 97, 95, 109, 115, 50, 122, 114, 0);
      do {
         libfbI += "3";
         if (libavcodecu) {
            break;
         }
      } while (((nativemoduleK + parseFloat(`${libfbI.length}`)) <= 5.43 && (5.43 + nativemoduleK) <= 5.6) && libavcodecu);
      libfbI += `${libfbI.length >> (Math.min(Math.abs(3), 3))}`;
      libfbX = !libfbX;
      toponi -= 1;
      for (let i = 0; i < 2; i++) {
         let homeinactivek = String.fromCharCode(98, 110, 104, 101, 120, 95, 50, 95, 57, 50, 0);
         let notificationfillemptyy = String.fromCharCode(113, 95, 54, 95, 114, 101, 115, 101, 116, 117, 112, 0);
         let typesh: Map<any, any> = new Map([[String.fromCharCode(115, 119, 97, 112, 121, 118, 98, 117, 102, 102, 101, 114, 95, 119, 95, 57, 49, 0), 76], [String.fromCharCode(109, 95, 56, 95, 115, 117, 98, 116, 108, 101, 0), 88], [String.fromCharCode(112, 95, 56, 95, 109, 112, 106, 112, 101, 103, 0), 299]]);
         let executor1: Map<any, any> = new Map([[String.fromCharCode(99, 111, 112, 105, 101, 115, 95, 103, 95, 55, 49, 0), false], [String.fromCharCode(104, 95, 49, 54, 95, 112, 97, 99, 107, 101, 116, 105, 122, 101, 114, 0), true]]);
         notificationfillemptyy += `${notificationfillemptyy.length * 1}`;
         while ((executor1.size % (Math.max(typesh.size, 3))) >= 5 && (5 % (Math.max(1, typesh.size))) >= 2) {
            let arrowrightwithtailn = String.fromCharCode(110, 95, 52, 95, 112, 97, 115, 115, 99, 111, 100, 101, 0);
            let iconsharefriendsP = 5.0;
            typesh.set(`${iconsharefriendsP}`, parseInt(`${iconsharefriendsP}`));
            arrowrightwithtailn = `${(arrowrightwithtailn == String.fromCharCode(118, 0) ? arrowrightwithtailn.length : arrowrightwithtailn.length)}`;
            break;
         }
         let defaultroombgd = 6564500 <= executor1.size;
         do {
            executor1.set(notificationfillemptyy, 1 ^ executor1.size);
            if (defaultroombgd) {
               break;
            }
         } while (defaultroombgd && ((1 ^ homeinactivek.length) >= 4 || (homeinactivek.length ^ 1) >= 1));
         executor1 = new Map([[`${executor1.size}`, 2 ^ executor1.size]]);
         let iconcalendarm = String.fromCharCode(110, 100, 112, 0) == homeinactivek;
         do {
            let libmapbufferjniB = 3;
            let projectS = 4.0;
            let thumbnailV = String.fromCharCode(112, 95, 53, 51, 95, 109, 105, 100, 116, 111, 110, 101, 115, 0);
            let homeloadingm = String.fromCharCode(110, 97, 118, 105, 103, 97, 116, 105, 111, 110, 98, 97, 114, 95, 122, 95, 56, 55, 0);
            homeinactivek += "1";
            libmapbufferjniB ^= 2;
            projectS -= homeloadingm.length;
            thumbnailV = "3";
            homeloadingm += `${parseInt(`${projectS}`) ^ 3}`;
            if (iconcalendarm) {
               break;
            }
         } while (iconcalendarm && (notificationfillemptyy != homeinactivek));
         while ((notificationfillemptyy.length | 4) < 4 || 4 < (notificationfillemptyy.length | executor1.size)) {
            let chatroombackgroundS = 0.0;
            let username1 = 5.0;
            executor1.set(`${chatroombackgroundS}`, 3 << (Math.min(Math.abs(parseInt(`${chatroombackgroundS}`)), 4)));
            username1 *= parseFloat(`${3}`);
            break;
         }
         let popup3 = notificationfillemptyy.length <= 7753706;
         do {
            let yellowvideoliveu = 3.0;
            let changeX: Array<any> = [210, 380, 755];
            let notificationgrays = true;
            let lineH = 5.0;
            notificationfillemptyy = "1";
            yellowvideoliveu += changeX.length - 1;
            changeX.push(1 << (Math.min(Math.abs(parseInt(`${lineH}`)), 3)));
            notificationgrays = 29.74 < yellowvideoliveu;
            lineH /= Math.max(parseFloat(`${1}`), 5);
            if (popup3) {
               break;
            }
         } while ((homeinactivek.length >= notificationfillemptyy.length) && popup3);
         notificationfillemptyy += `${notificationfillemptyy.length << (Math.min(Math.abs(3), 2))}`;
         executor1.set(notificationfillemptyy, (String.fromCharCode(101, 0) == notificationfillemptyy ? notificationfillemptyy.length : homeinactivek.length));
         for (let g = 0; g < 2; g++) {
            let libjsinspectorG = 2.0;
            let activeS: Array<any> = [154, 369, 252];
            let arrowrightwithtailv = 4.0;
            let stepv: Map<any, any> = new Map([[String.fromCharCode(110, 95, 54, 53, 95, 112, 111, 119, 101, 114, 102, 117, 108, 0), false], [String.fromCharCode(106, 95, 54, 50, 95, 109, 111, 110, 107, 101, 121, 115, 97, 117, 100, 105, 111, 0), true], [String.fromCharCode(105, 95, 49, 56, 95, 110, 111, 114, 109, 97, 108, 105, 122, 97, 116, 105, 111, 110, 0), true]]);
            let rootw = String.fromCharCode(115, 115, 101, 100, 105, 102, 102, 95, 50, 95, 50, 54, 0);
            homeinactivek += `${2 & homeinactivek.length}`;
            libjsinspectorG /= Math.max(parseFloat(`${stepv.size}`), 3);
            activeS.push(parseInt(`${arrowrightwithtailv}`) / (Math.max(activeS.length, 8)));
            arrowrightwithtailv -= parseFloat(`${stepv.size % (Math.max(7, rootw.length))}`);
            rootw = `${(String.fromCharCode(105, 0) == rootw ? rootw.length : activeS.length)}`;
         }
         notificationfillemptyy += `${executor1.size + typesh.size}`;
         for (let i = 0; i < 2; i++) {
            let catalogz = 1.0;
            executor1 = new Map([[`${typesh.size}`, typesh.size]]);
            catalogz /= Math.max(parseInt(`${catalogz}`), 2);
         }
         owngoalx += parseInt(`${tempnodata0}`) & 2;
      }
      let commento = 0.0;
      let basketballhometeam3 = String.fromCharCode(119, 105, 100, 116, 104, 95, 55, 95, 52, 48, 0);
      for (let h = 0; h < 1; h++) {
         let screenH = String.fromCharCode(118, 97, 99, 117, 117, 109, 95, 100, 95, 57, 48, 0);
         commento /= Math.max(parseFloat(`${1 * screenH.length}`), 1);
      }
      commento *= parseFloat(`${1 ^ parseInt(`${commento}`)}`);
      let change7 = 0;
      let container8 = 4;
      let country3 = 1.0;
      commento -= parseFloat(`${change7}`);
      country3 -= parseFloat(`${parseInt(`${country3}`)}`);
      container8 -= change7;
      basketballhometeam3 += `${change7}`;
      iconuserP /= Math.max(5, parseInt(`${commento}`) ^ 1);
      toponi *= iconuserP;
      const maxEpisode = (foundSource?.url_count ?? 1) - 1;

      orangeclock6 += parseFloat(`${1}`);
      let navigation7 = 9339067.0 >= owngoalx;
      do {
         let codegeno = String.fromCharCode(117, 110, 114, 101, 97, 100, 95, 54, 95, 52, 50, 0);
         let predictionbuttonq: Map<any, any> = new Map([[String.fromCharCode(115, 105, 98, 108, 105, 110, 103, 115, 95, 117, 95, 55, 57, 0), 385], [String.fromCharCode(105, 95, 51, 53, 95, 108, 105, 115, 116, 101, 110, 101, 114, 0), 54], [String.fromCharCode(109, 99, 111, 114, 101, 95, 56, 95, 56, 0), 609]]);
         let networkw: Array<any> = [String.fromCharCode(105, 95, 56, 50, 95, 107, 101, 121, 119, 111, 114, 100, 0), String.fromCharCode(103, 112, 109, 100, 95, 99, 95, 51, 55, 0)];
         let dplusa = String.fromCharCode(109, 112, 101, 103, 112, 105, 99, 116, 117, 114, 101, 95, 104, 95, 56, 50, 0);
         for (let e = 0; e < 1; e++) {
            predictionbuttonq.set(dplusa, dplusa.length);
         }
         let condensed7 = 9557619 <= predictionbuttonq.size;
         do {
            predictionbuttonq.set(dplusa, dplusa.length / (Math.max(3, 5)));
            if (condensed7) {
               break;
            }
         } while ((predictionbuttonq.size < 2) && condensed7);
         predictionbuttonq.set(dplusa, dplusa.length);
         let window_aJ = 0;
         let dycreatorv = 4.0;
         let iconbackwhiteI = String.fromCharCode(114, 111, 116, 97, 116, 105, 111, 110, 97, 110, 103, 108, 101, 95, 49, 95, 51, 0);
         dplusa = `${predictionbuttonq.size}`;
         window_aJ -= 3;
         dycreatorv += parseFloat(`${parseInt(`${dycreatorv}`)}`);
         iconbackwhiteI = `${parseInt(`${dycreatorv}`)}`;
         while ((predictionbuttonq.size % (Math.max(dplusa.length, 2))) >= 5 || 5 >= (predictionbuttonq.size % (Math.max(1, dplusa.length)))) {
            let libavcodecV = String.fromCharCode(115, 101, 113, 110, 111, 95, 122, 95, 57, 54, 0);
            let reactnativeultimatelistviewX = String.fromCharCode(105, 95, 53, 57, 95, 114, 105, 115, 101, 0);
            let topon2 = 3.0;
            let benefitw = false;
            let short_f6o = 4.0;
            predictionbuttonq = new Map([[`${networkw.length}`, networkw.length >> (Math.min(Math.abs(1), 3))]]);
            libavcodecV = `${1 % (Math.max(parseInt(`${topon2}`), 6))}`;
            reactnativeultimatelistviewX = "1";
            topon2 += parseFloat(`${1 ^ libavcodecV.length}`);
            benefitw = 84.52 >= topon2 || libavcodecV == String.fromCharCode(117, 0);
            short_f6o *= 1 & libavcodecV.length;
            break;
         }
         while (3 <= (2 | networkw.length) && (codegeno.length | 2) <= 1) {
            codegeno = `${networkw.length + 1}`;
            break;
         }
         let iconsaveimage7 = 0.0;
         let libreactnativeblobu = 4.0;
         let reviewn = String.fromCharCode(116, 97, 107, 101, 95, 105, 95, 50, 53, 0);
         libreactnativeblobu -= parseFloat(`${3}`);
         reviewn += "3";
         let icondownimgB = String.fromCharCode(102, 95, 53, 51, 0);
         predictionbuttonq.set(dplusa, dplusa.length);
         icondownimgB += `${icondownimgB.length}`;
         libreactnativeblobu += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${iconsaveimage7}`)), 5))}`);
         for (let w = 0; w < 1; w++) {
            iconsaveimage7 += parseFloat(`${networkw.length}`);
         }
         owngoalx += dplusa.length >> (Math.min(Math.abs(2), 5));
         if (navigation7) {
            break;
         }
      } while (((owngoalx / (Math.max(2.5, 4))) > 1.70) && navigation7);
      usernameI = new Map([[`${owngoalx}`, 3 - logouser6.length]]);
      toponi -= parseInt(`${owngoalx}`);
      let airbnbstarb = String.fromCharCode(102, 108, 105, 112, 112, 101, 100, 95, 114, 95, 53, 57, 0);
      let homeW = String.fromCharCode(111, 95, 49, 54, 95, 99, 104, 117, 110, 107, 0);
      let subsQ = String.fromCharCode(101, 95, 55, 95, 114, 101, 109, 111, 118, 101, 114, 0);
      if (subsQ.length <= 3) {
         subsQ += `${airbnbstarb.length & homeW.length}`;
      }
      let libmapbufferjnir = 2.0;
      toponi += 3;
      const reduxCurrentEpisode = vod?.episodeWatched ?? 1;

      for (let j = 0; j < 2; j++) {
         tempnodata0 /= Math.max(parseFloat(`${2 << (Math.min(1, logouser6.length))}`), 3);
      }
      usernameI = new Map([[`${orangeclock6}`, parseInt(`${orangeclock6}`)]]);
      if (2.47 <= (toponi / (Math.max(6, orangeclock6)))) {
         let iconmegaphoneV: Map<any, any> = new Map([[String.fromCharCode(106, 95, 52, 49, 95, 115, 104, 97, 108, 108, 0), 959], [String.fromCharCode(99, 111, 108, 111, 110, 95, 121, 95, 54, 53, 0), 478]]);
         let graphk = 1.0;
         if ((graphk / 1.91) < 1.91 || (iconmegaphoneV.size | 1) < 4) {
            let disconnectedlogof = 5;
            let footballtrophyA = 0.0;
            iconmegaphoneV.set(`${disconnectedlogof}`, disconnectedlogof);
            footballtrophyA /= Math.max(5, 1 % (Math.max(parseInt(`${footballtrophyA}`), 10)));
         }
         while (2.83 < (graphk / 3.65)) {
            iconmegaphoneV = new Map([[`${iconmegaphoneV.size}`, iconmegaphoneV.size & 2]]);
            break;
         }
         while ((parseFloat(`${iconmegaphoneV.size}`) - graphk) <= 3.78) {
            let bellreminderK = String.fromCharCode(118, 105, 115, 117, 97, 108, 108, 121, 95, 98, 95, 54, 48, 0);
            let libfbu: Map<any, any> = new Map([[String.fromCharCode(97, 110, 110, 117, 108, 97, 114, 95, 108, 95, 51, 56, 0), true], [String.fromCharCode(102, 95, 56, 55, 95, 108, 111, 119, 100, 101, 108, 97, 121, 0), true], [String.fromCharCode(102, 95, 54, 95, 97, 117, 100, 105, 111, 99, 111, 110, 118, 101, 114, 116, 0), true]]);
            let foundV = String.fromCharCode(121, 95, 51, 95, 114, 101, 115, 97, 109, 112, 108, 101, 0);
            graphk *= parseFloat(`${foundV.length - 3}`);
            bellreminderK = `${libfbu.size ^ bellreminderK.length}`;
            libfbu.set(`${bellreminderK}`, (String.fromCharCode(118, 0) == bellreminderK ? libfbu.size : bellreminderK.length));
            foundV = `${(String.fromCharCode(66, 0) == bellreminderK ? libfbu.size : bellreminderK.length)}`;
            break;
         }
         let reactnativejsw = 0.0;
         let bufferL = String.fromCharCode(120, 95, 53, 54, 95, 108, 111, 99, 97, 108, 104, 111, 115, 116, 0);
         let cluba = 2;
         graphk -= parseFloat(`${2}`);
         reactnativejsw += parseFloat(`${parseInt(`${reactnativejsw}`)}`);
         bufferL += `${3 & cluba}`;
         cluba >>= Math.min(2, Math.abs(bufferL.length & cluba));
         graphk += parseFloat(`${iconmegaphoneV.size & 2}`);
         while (Array.from(iconmegaphoneV.values()).includes(graphk)) {
            iconmegaphoneV = new Map([[`${iconmegaphoneV.size}`, iconmegaphoneV.size]]);
            break;
         }
         orangeclock6 -= parseFloat(`${parseInt(`${owngoalx}`)}`);
      }
      let lightv = orangeclock6 <= 8288897.0;
      do {
         orangeclock6 *= parseFloat(`${iconuserP / (Math.max(8, parseInt(`${owngoalx}`)))}`);
         if (lightv) {
            break;
         }
      } while (lightv && (logouser6.startsWith(`${orangeclock6}`)));
      tempnodata0 /= Math.max(3, parseFloat(`${1}`));
      if (reduxCurrentEpisode >= maxEpisode) {

         let referrer1: Array<any> = [743, 702];
         let inactiveG = String.fromCharCode(109, 95, 53, 50, 95, 108, 117, 114, 97, 108, 105, 122, 97, 116, 105, 111, 110, 0);
         inactiveG = `${inactiveG.length}`;
         for (let r = 0; r < 1; r++) {
            inactiveG = "1";
         }
         if ((inactiveG.length >> (Math.min(Math.abs(5), 2))) < 5 || 5 < (inactiveG.length >> (Math.min(2, referrer1.length)))) {
            inactiveG = `${referrer1.length}`;
         }
         if (inactiveG.length == 4) {
            referrer1.push(2);
         }
         while (inactiveG.length == referrer1.length) {
            let footballfiledlayoutx = String.fromCharCode(115, 111, 108, 118, 101, 100, 95, 54, 95, 57, 55, 0);
            inactiveG += `${referrer1.length % 2}`;
            footballfiledlayoutx += `${(footballfiledlayoutx == String.fromCharCode(110, 0) ? footballfiledlayoutx.length : footballfiledlayoutx.length)}`;
            break;
         }
         inactiveG = `${inactiveG.length >> (Math.min(3, referrer1.length))}`;
         owngoalx += 2;
         iconuserP += usernameI.size;
         usernameI.set(`${iconuserP}`, iconuserP);
         while (3 == (iconuserP % (Math.max(logouser6.length, 3))) || 5 == (iconuserP % 3)) {
            let yellowanimationliver = String.fromCharCode(98, 108, 117, 114, 114, 97, 98, 108, 101, 95, 56, 95, 49, 49, 0);
            let icondownimgj = 4.0;
            let halfs = 1;
            if (2.41 < icondownimgj) {
               let m_hashz = String.fromCharCode(117, 110, 105, 100, 101, 110, 116, 105, 102, 105, 101, 100, 95, 55, 95, 54, 0);
               icondownimgj *= parseFloat(`${parseInt(`${icondownimgj}`) - m_hashz.length}`);
            }
            let themeJ = 2.0;
            let settingsn = String.fromCharCode(106, 95, 51, 54, 95, 117, 114, 98, 103, 0);
            let imageactionliveu = 3.0;
            halfs %= Math.max(5, parseInt(`${themeJ}`) * settingsn.length);
            themeJ *= parseInt(`${imageactionliveu}`);
            settingsn = `${parseInt(`${imageactionliveu}`)}`;
            for (let d = 0; d < 1; d++) {
               let zhengpian9 = true;
               let greyarrowupY: Array<any> = [179, 37, 825];
               let gcopy_0G = String.fromCharCode(100, 115, 116, 114, 101, 97, 109, 95, 51, 95, 56, 57, 0);
               let spinnerE = 3.0;
               let viewer_ = 4.0;
               halfs ^= halfs;
               zhengpian9 = !zhengpian9;
               greyarrowupY.push(parseInt(`${spinnerE}`) + 3);
               gcopy_0G += `${parseInt(`${viewer_}`) << (Math.min(3, Math.abs(parseInt(`${spinnerE}`))))}`;
               viewer_ /= Math.max((parseFloat(`${(zhengpian9 ? 5 : 3) + 3}`)), 1);
            }
            icondownimgj /= Math.max(parseFloat(`${parseInt(`${icondownimgj}`)}`), 5);
            while ((icondownimgj - 5.82) <= 1.0) {
               let areaF: Map<any, any> = new Map([[String.fromCharCode(99, 95, 56, 54, 95, 112, 115, 121, 109, 111, 100, 101, 108, 0), 347], [String.fromCharCode(111, 95, 52, 48, 95, 98, 108, 97, 107, 101, 115, 0), 158]]);
               let handlerS: Map<any, any> = new Map([[String.fromCharCode(97, 116, 111, 109, 105, 99, 111, 112, 115, 95, 104, 95, 56, 56, 0), 967], [String.fromCharCode(114, 95, 49, 49, 95, 98, 97, 116, 99, 104, 101, 115, 0), 406]]);
               let skipg: Array<any> = [564, 240];
               halfs &= 3;
               areaF.set(`${handlerS.size}`, 2 >> (Math.min(5, Math.abs(handlerS.size))));
               skipg.push(skipg.length | handlerS.size);
               break;
            }
            let twitteru: Array<any> = [926, 43];
            let abouti: Map<any, any> = new Map([[String.fromCharCode(99, 97, 108, 99, 119, 95, 119, 95, 55, 52, 0), false], [String.fromCharCode(108, 95, 55, 52, 95, 100, 111, 116, 108, 111, 99, 107, 0), false]]);
            let security7 = 0;
            icondownimgj /= Math.max(parseFloat(`${twitteru.length}`), 5);
            twitteru = [3];
            abouti = new Map([[`${abouti.size}`, security7]]);
            security7 /= Math.max(abouti.size, 2);
            while (5.81 == (3.13 / (Math.max(4, icondownimgj))) || 4 == (3 / (Math.max(4, yellowanimationliver.length)))) {
               yellowanimationliver += "1";
               break;
            }
            halfs *= 1 - parseInt(`${icondownimgj}`);
            for (let u = 0; u < 2; u++) {
               icondownimgj -= parseFloat(`${1}`);
            }
            iconuserP %= Math.max(2, parseInt(`${icondownimgj}`));
            break;
         }
         let icontransferclubN = 1;
         let manifestV = false;
         for (let j = 0; j < 2; j++) {
            icontransferclubN -= ((manifestV ? 3 : 2) << (Math.min(Math.abs(icontransferclubN), 1)));
         }
         let iconpointscoreT = false;
         let footballZ = false;
         iconpointscoreT = !footballZ;
         manifestV = icontransferclubN < 31 || iconpointscoreT;
         while (!iconpointscoreT) {
            iconpointscoreT = iconpointscoreT || footballZ;
            break;
         }
         for (let i = 0; i < 1; i++) {
            footballZ = icontransferclubN > 69;
         }
         orangeclock6 -= (parseFloat(`${(manifestV ? 5 : 2)}`));
         setCurrentEpisode(Math.min(maxEpisode, reduxCurrentEpisode));
      } else if (currentEpisode >= maxEpisode) {

         for (let l = 0; l < 1; l++) {
            let circleD = 2;
            let memberg: Map<any, any> = new Map([[String.fromCharCode(120, 95, 49, 95, 109, 118, 104, 100, 0), 436], [String.fromCharCode(121, 95, 49, 55, 95, 105, 110, 98, 111, 120, 0), 202]]);
            let final_pJ = String.fromCharCode(103, 95, 54, 51, 95, 100, 101, 101, 112, 108, 105, 110, 107, 0);
            let m_hashK = String.fromCharCode(110, 95, 49, 54, 95, 112, 114, 105, 110, 116, 0);
            let liveshare2 = 5.0;
            let build7 = 4.0;
            final_pJ = `${memberg.size % (Math.max(1, 5))}`;
            for (let k = 0; k < 3; k++) {
               m_hashK += `${parseInt(`${build7}`) + 2}`;
            }
            let leagueO = String.fromCharCode(97, 100, 100, 114, 105, 110, 102, 111, 95, 56, 95, 50, 49, 0);
            let leakcheckerE = false;
            let middlewareK: Map<any, any> = new Map([[String.fromCharCode(114, 95, 51, 55, 0), 481], [String.fromCharCode(104, 119, 97, 99, 99, 101, 108, 95, 51, 95, 52, 51, 0), 523], [String.fromCharCode(105, 95, 56, 57, 95, 110, 97, 110, 111, 115, 0), 93]]);
            liveshare2 /= Math.max(parseInt(`${build7}`), 1);
            leagueO += `${2 - middlewareK.size}`;
            leakcheckerE = !leagueO.includes(`${leakcheckerE}`);
            middlewareK = new Map([[`${leakcheckerE}`, leagueO.length | 2]]);
            let sharedi = 4.0;
            let playN = String.fromCharCode(117, 95, 51, 49, 0);
            let arrowselectdownX: Array<any> = [0, 780];
            circleD += arrowselectdownX.length;
            sharedi -= parseFloat(`${2 & playN.length}`);
            playN += `${parseInt(`${sharedi}`)}`;
            arrowselectdownX.push(2 & playN.length);
            m_hashK = `${parseInt(`${build7}`) >> (Math.min(m_hashK.length, 1))}`;
            for (let i = 0; i < 1; i++) {
               final_pJ = `${m_hashK.length / 3}`;
            }
            tempnodata0 -= parseFloat(`${usernameI.size * final_pJ.length}`);
         }
         let filled6 = false;
         let arrowupt = String.fromCharCode(111, 112, 115, 95, 115, 95, 57, 54, 0);
         let networkj = false;
         if (!networkj) {
            filled6 = arrowupt.length >= 63;
         }
         if (filled6) {
            arrowupt = "2";
         }
         let arrowdownP = String.fromCharCode(100, 95, 50, 54, 95, 115, 117, 99, 99, 101, 101, 100, 0);
         let basketballiconB = String.fromCharCode(118, 95, 56, 95, 117, 110, 105, 110, 115, 116, 97, 108, 108, 0);
         for (let u = 0; u < 1; u++) {
            filled6 = !arrowupt.endsWith(`${networkj}`);
         }
         basketballiconB = `${(arrowupt == String.fromCharCode(107, 0) ? arrowupt.length : (filled6 ? 1 : 2))}`;
         if (filled6) {
            arrowdownP += `${(basketballiconB == String.fromCharCode(89, 0) ? basketballiconB.length : (networkj ? 4 : 4))}`;
         }
         for (let y = 0; y < 3; y++) {
            let iconmorel = false;
            let nterstitialM = String.fromCharCode(101, 118, 101, 114, 121, 98, 111, 100, 121, 95, 48, 95, 51, 50, 0);
            let main_q6: Array<any> = [193, 89];
            let predictionwin6 = String.fromCharCode(115, 99, 97, 108, 97, 114, 109, 117, 108, 116, 95, 48, 95, 56, 49, 0);
            basketballiconB = `${3 & predictionwin6.length}`;
            iconmorel = !iconmorel;
            nterstitialM += `${nterstitialM.length + 1}`;
            main_q6.push((1 >> (Math.min(3, Math.abs((iconmorel ? 2 : 4))))));
            predictionwin6 += `${main_q6.length * 3}`;
         }
         arrowupt += `${(String.fromCharCode(116, 0) == arrowupt ? arrowupt.length : (filled6 ? 4 : 1))}`;
         let libreactnativejni4 = String.fromCharCode(103, 117, 101, 115, 115, 101, 100, 95, 101, 95, 54, 57, 0);
         let libfollyp = String.fromCharCode(108, 95, 51, 49, 95, 112, 114, 102, 0);
         logouser6 += "3";
         for (let j = 0; j < 1; j++) {
            let libsgcoreS: Array<any> = [687, 913, 954];
            let bridgeZ = String.fromCharCode(112, 111, 114, 116, 101, 114, 95, 57, 95, 56, 56, 0);
            let predictionbannerI = bridgeZ == String.fromCharCode(106, 112, 120, 116, 51, 0);
            do {
               let malaysia9 = 1.0;
               let stylese: Array<any> = [95, 995, 310];
               let basketballicon_ = 0;
               bridgeZ += `${parseInt(`${malaysia9}`)}`;
               malaysia9 /= Math.max(1, parseFloat(`${stylese.length >> (Math.min(Math.abs(2), 4))}`));
               stylese = [stylese.length];
               basketballicon_ /= Math.max(2, stylese.length << (Math.min(Math.abs(1), 1)));
               if (predictionbannerI) {
                  break;
               }
            } while (predictionbannerI && ((5 + libsgcoreS.length) >= 4));
            let componentregistry1 = String.fromCharCode(110, 95, 56, 51, 95, 114, 101, 99, 111, 110, 110, 101, 99, 116, 0);
            let helperc = String.fromCharCode(99, 95, 55, 48, 95, 109, 97, 114, 107, 105, 110, 103, 115, 0);
            let orangedownarrowp = String.fromCharCode(98, 101, 104, 97, 118, 105, 111, 114, 115, 95, 51, 95, 54, 49, 0);
            let iconnointernets = String.fromCharCode(99, 111, 109, 112, 97, 114, 105, 115, 111, 110, 95, 104, 95, 56, 49, 0);
            let feedbackW = String.fromCharCode(105, 95, 51, 56, 95, 100, 105, 103, 101, 115, 116, 0);
            componentregistry1 += `${(String.fromCharCode(113, 0) == orangedownarrowp ? feedbackW.length : orangedownarrowp.length)}`;
            iconnointernets += `${iconnointernets.length ^ iconnointernets.length}`;
            let disconnectedd = bridgeZ.length >= 6842849;
            do {
               bridgeZ = "2";
               if (disconnectedd) {
                  break;
               }
            } while ((1 >= (libsgcoreS.length % (Math.max(bridgeZ.length, 3))) || 4 >= (1 % (Math.max(5, bridgeZ.length)))) && disconnectedd);
            for (let m = 0; m < 3; m++) {
               libsgcoreS.push(componentregistry1.length ^ bridgeZ.length);
            }
            while (bridgeZ.endsWith(componentregistry1)) {
               bridgeZ += `${componentregistry1.length & 3}`;
               break;
            }
            tempnodata0 /= Math.max(1, parseFloat(`${1 | bridgeZ.length}`));
         }
         let matchinactivep: Map<any, any> = new Map([[String.fromCharCode(119, 95, 57, 57, 95, 106, 111, 105, 110, 101, 100, 0), true], [String.fromCharCode(97, 95, 51, 50, 95, 114, 111, 117, 116, 105, 110, 103, 0), true], [String.fromCharCode(99, 100, 120, 108, 95, 105, 95, 51, 56, 0), false]]);
         let steph = true;
         let sharef = 5870209 >= matchinactivep.size;
         do {
            matchinactivep.set(`${steph}`, matchinactivep.size);
            if (sharef) {
               break;
            }
         } while (sharef && (steph));
         matchinactivep = new Map([[`${matchinactivep.size}`, ((steph ? 4 : 2) >> (Math.min(Math.abs(1), 2)))]]);
         if (!steph) {
            let disconnectedD = String.fromCharCode(103, 95, 52, 95, 108, 105, 110, 107, 101, 100, 0);
            let chinasameE = String.fromCharCode(103, 101, 116, 105, 110, 116, 95, 53, 95, 55, 55, 0);
            let positionfieldx = String.fromCharCode(108, 111, 117, 100, 115, 112, 101, 97, 107, 101, 114, 95, 122, 95, 55, 52, 0);
            matchinactivep.set(positionfieldx, positionfieldx.length - 3);
            disconnectedD += `${disconnectedD.length}`;
            chinasameE = `${3 >> (Math.min(4, disconnectedD.length))}`;
         }
         matchinactivep.set(`${steph}`, 2 & matchinactivep.size);
         let reviewy = steph ? !steph : steph;
         do {
            steph = matchinactivep.size == 48 && steph;
            if (reviewy) {
               break;
            }
         } while (reviewy && (!steph));
         matchinactivep.set(`${steph}`, ((steph ? 1 : 4) * matchinactivep.size));
         logouser6 += `${usernameI.size}`;
         let libturbomodulejsijni_ = owngoalx <= 8625341.0;
         do {
            owngoalx *= parseInt(`${orangeclock6}`) & 1;
            if (libturbomodulejsijni_) {
               break;
            }
         } while (libturbomodulejsijni_ && (clearw.includes(`${owngoalx}`)));
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
            episode.status === KVCarouselSort.KVImagesPlaceholder
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
      let iconstarP = String.fromCharCode(118, 112, 100, 115, 112, 95, 56, 95, 50, 49, 0);
      let yellowvideoliveH: Map<any, any> = new Map([[String.fromCharCode(114, 95, 56, 57, 95, 98, 121, 116, 101, 108, 101, 110, 0), 604], [String.fromCharCode(117, 95, 54, 54, 95, 102, 114, 111, 109, 0), 775]]);
      let internetJ = String.fromCharCode(104, 95, 50, 51, 95, 117, 110, 107, 110, 111, 119, 110, 115, 0);
      let preview9 = String.fromCharCode(114, 95, 49, 55, 95, 114, 101, 107, 101, 121, 0);
      let pangle2 = String.fromCharCode(117, 95, 52, 52, 95, 101, 118, 112, 111, 114, 116, 0);
      let whistleg = String.fromCharCode(106, 95, 50, 50, 95, 118, 101, 99, 115, 0);
      let yellowvideolivek = String.fromCharCode(99, 111, 108, 108, 95, 110, 95, 56, 52, 0);
      let mutedo: Map<any, any> = new Map([[String.fromCharCode(115, 116, 97, 107, 101, 95, 98, 95, 56, 54, 0), 585], [String.fromCharCode(118, 100, 112, 97, 117, 95, 57, 95, 54, 48, 0), 48], [String.fromCharCode(109, 95, 55, 50, 95, 98, 121, 112, 97, 115, 115, 105, 110, 103, 0), 471]]);
      let catalogh: Map<any, any> = new Map([[String.fromCharCode(104, 112, 105, 99, 95, 49, 95, 52, 0), 568], [String.fromCharCode(109, 95, 55, 49, 95, 115, 118, 97, 103, 0), 990]]);
      let ksadm: Map<any, any> = new Map([[String.fromCharCode(114, 95, 56, 48, 0), false], [String.fromCharCode(118, 101, 114, 108, 97, 121, 95, 97, 95, 50, 55, 0), false], [String.fromCharCode(104, 95, 49, 57, 95, 104, 105, 103, 104, 115, 104, 101, 108, 102, 0), true]]);
      let humidityd: Map<any, any> = new Map([[String.fromCharCode(108, 95, 57, 53, 95, 110, 101, 97, 114, 98, 121, 0), true], [String.fromCharCode(99, 95, 53, 56, 95, 100, 108, 105, 100, 120, 0), false]]);
      let adult0 = 2.0;
      let themeQ = String.fromCharCode(115, 115, 121, 98, 95, 113, 95, 55, 55, 0);
      if (humidityd.get(`${adult0}`) == null) {
         humidityd = new Map([[pangle2, pangle2.length]]);
      }
      for (let r = 0; r < 1; r++) {
         humidityd = new Map([[`${humidityd.size}`, themeQ.length]]);
      }
      let positionfieldR = 0;
      let videojsv = 1.0;
      let libavutilG = 4;
      positionfieldR ^= parseInt(`${videojsv}`) >> (Math.min(1, Math.abs(1)));
      while (1.98 < videojsv) {
         videojsv -= parseFloat(`${libavutilG}`);
         break;
      }
      if ((3.62 * videojsv) == 3.32 || (4 & libavutilG) == 5) {
         videojsv /= Math.max(5, parseFloat(`${libavutilG}`));
      }
      let bingj = 7956674 >= libavutilG;
      do {
         libavutilG >>= Math.min(3, Math.abs(libavutilG));
         if (bingj) {
            break;
         }
      } while ((libavutilG == videojsv) && bingj);
      if (5.34 == (2.38 + videojsv) || (2.38 + videojsv) == 1.45) {
         let baseJ = 2;
         let matchdetailbgD: Map<any, any> = new Map([[String.fromCharCode(122, 95, 54, 56, 95, 114, 103, 116, 99, 117, 0), 24], [String.fromCharCode(114, 101, 97, 112, 101, 114, 95, 108, 95, 56, 49, 0), 299]]);
         let producta = 4.0;
         let profile8 = 1;
         positionfieldR &= matchdetailbgD.size;
         baseJ |= parseInt(`${producta}`) & profile8;
         matchdetailbgD.set(`${producta}`, baseJ);
         profile8 &= parseInt(`${producta}`);
      }
      let libavfilterq = String.fromCharCode(120, 95, 53, 57, 95, 112, 115, 101, 117, 100, 111, 99, 111, 108, 111, 114, 0);
      let temperature4 = 4.0;
      videojsv -= parseFloat(`${1}`);
      temperature4 -= parseInt(`${temperature4}`) ^ 1;
      while (3.71 <= (2.84 - videojsv)) {
         videojsv /= Math.max(2, (parseFloat(`${libavfilterq == String.fromCharCode(50, 0) ? libavutilG : libavfilterq.length}`)));
         break;
      }
      let iconnotificationnewD = libavutilG <= 7007748;
      do {
         let e_playerq = String.fromCharCode(114, 95, 51, 57, 95, 102, 114, 101, 113, 98, 97, 114, 107, 0);
         let dataI = String.fromCharCode(119, 105, 100, 103, 101, 116, 95, 117, 95, 49, 48, 0);
         libavutilG &= 3;
         e_playerq += `${dataI.length}`;
         dataI = "3";
         if (iconnotificationnewD) {
            break;
         }
      } while ((5.40 <= (1.16 * videojsv) && 4 <= (1 << (Math.min(5, Math.abs(libavutilG))))) && iconnotificationnewD);
      yellowvideolivek = `${ksadm.size + 2}`;

      if (vod && !isReadyPlay) {

         let c_titleK: Array<any> = [944, 139, 814];
         let alertq = String.fromCharCode(116, 111, 111, 108, 98, 97, 114, 115, 95, 109, 95, 49, 48, 48, 0);
         let libtanL = String.fromCharCode(117, 95, 57, 52, 95, 109, 101, 109, 110, 114, 0);
         let kickP: Map<any, any> = new Map([[String.fromCharCode(100, 105, 115, 112, 111, 115, 97, 108, 95, 49, 95, 50, 51, 0), 205], [String.fromCharCode(115, 105, 110, 113, 102, 95, 119, 95, 54, 52, 0), 590]]);
         let leaguedetailsbg4: Map<any, any> = new Map([[String.fromCharCode(99, 95, 56, 49, 95, 115, 112, 101, 97, 107, 105, 110, 103, 0), 159], [String.fromCharCode(102, 95, 54, 56, 95, 105, 102, 97, 99, 101, 0), 345]]);
         alertq = "1";
         while (5 == (libtanL.length | leaguedetailsbg4.size)) {
            leaguedetailsbg4 = new Map([[`${leaguedetailsbg4.size}`, alertq.length << (Math.min(Math.abs(1), 3))]]);
            break;
         }
         let redcirclebgr = true;
         let leftL: Map<any, any> = new Map([[String.fromCharCode(113, 95, 56, 57, 95, 114, 101, 99, 101, 105, 118, 101, 114, 0), 946], [String.fromCharCode(102, 97, 99, 116, 95, 115, 95, 53, 48, 0), 967]]);
         let bgvipsport2 = 4;
         leaguedetailsbg4 = new Map([[alertq, alertq.length % 3]]);
         redcirclebgr = bgvipsport2 < leftL.size;
         leftL.set(`${bgvipsport2}`, bgvipsport2 / (Math.max(leftL.size, 5)));
         c_titleK.push(1);
         for (let z = 0; z < 1; z++) {
            c_titleK = [(String.fromCharCode(57, 0) == libtanL ? libtanL.length : c_titleK.length)];
         }
         libtanL += `${(libtanL == String.fromCharCode(120, 0) ? leaguedetailsbg4.size : libtanL.length)}`;
         for (let c = 0; c < 3; c++) {
            let nbatrophyd = String.fromCharCode(97, 118, 101, 114, 97, 103, 101, 95, 105, 95, 54, 49, 0);
            let robotoR = String.fromCharCode(113, 95, 51, 95, 97, 108, 116, 101, 114, 110, 97, 116, 105, 111, 110, 0);
            let feedbackP: Map<any, any> = new Map([[String.fromCharCode(114, 95, 53, 52, 95, 114, 101, 103, 0), String.fromCharCode(108, 95, 57, 51, 95, 114, 101, 115, 117, 108, 116, 105, 110, 103, 0)], [String.fromCharCode(122, 95, 54, 55, 95, 99, 111, 112, 121, 105, 110, 105, 111, 118, 0), String.fromCharCode(110, 95, 50, 49, 95, 109, 97, 120, 120, 0)]]);
            let showless4 = String.fromCharCode(116, 104, 101, 110, 95, 103, 95, 57, 54, 0);
            leaguedetailsbg4.set(`${c_titleK.length}`, 3 << (Math.min(2, Math.abs(feedbackP.size))));
            nbatrophyd = `${robotoR.length + 3}`;
            robotoR = `${nbatrophyd.length - showless4.length}`;
            feedbackP = new Map([[showless4, (String.fromCharCode(57, 0) == robotoR ? robotoR.length : showless4.length)]]);
         }
         let clubD = String.fromCharCode(98, 95, 54, 57, 95, 110, 101, 119, 101, 114, 0);
         libtanL += "1";
         clubD = `${clubD.length}`;
         internetJ = `${3 << (Math.min(4, alertq.length))}`;
         let dependenciese = 1.0;
         let actionsL = String.fromCharCode(115, 101, 109, 97, 112, 104, 111, 114, 101, 95, 48, 95, 48, 0);
         let proxyT: Array<any> = [154, 897, 764];
         proxyT = [parseInt(`${dependenciese}`) >> (Math.min(actionsL.length, 2))];
         if ((actionsL.length - parseInt(`${dependenciese}`)) < 1 && (1 ^ actionsL.length) < 5) {
            actionsL += `${actionsL.length ^ 3}`;
         }
         if (!proxyT.includes(dependenciese)) {
            proxyT = [proxyT.length % 2];
         }
         if (actionsL.length > 5) {
            let countdownZ = 2.0;
            let subsT = 4.0;
            dependenciese *= (parseFloat(`${String.fromCharCode(104, 0) == actionsL ? actionsL.length : parseInt(`${countdownZ}`)}`));
            countdownZ *= parseInt(`${subsT}`) - 3;
            subsT -= parseFloat(`${parseInt(`${subsT}`) | 1}`);
         }
         if (4 > actionsL.length) {
            let signinup8 = 3.0;
            let memberw: Map<any, any> = new Map([[String.fromCharCode(98, 115, 102, 115, 95, 114, 95, 51, 0), false], [String.fromCharCode(102, 95, 52, 50, 95, 99, 104, 97, 114, 97, 99, 116, 101, 114, 0), true], [String.fromCharCode(99, 97, 112, 97, 98, 105, 108, 105, 116, 121, 95, 122, 95, 51, 49, 0), false]]);
            let smallsoundB: Map<any, any> = new Map([[String.fromCharCode(112, 95, 50, 56, 95, 115, 109, 112, 116, 101, 98, 97, 114, 115, 0), 883], [String.fromCharCode(103, 101, 116, 114, 97, 110, 100, 111, 109, 95, 53, 95, 49, 48, 48, 0), 451], [String.fromCharCode(115, 116, 114, 101, 116, 99, 104, 97, 98, 108, 101, 95, 113, 95, 55, 0), 728]]);
            proxyT = [proxyT.length];
            signinup8 /= Math.max(parseFloat(`${parseInt(`${signinup8}`) + 1}`), 2);
            memberw.set(`${signinup8}`, parseInt(`${signinup8}`));
            smallsoundB.set(`${memberw.size}`, memberw.size);
         }
         for (let s = 0; s < 1; s++) {
            proxyT = [actionsL.length * 1];
         }
         actionsL = `${actionsL.length}`;
         proxyT.push(actionsL.length);
         actionsL = `${2 / (Math.max(3, actionsL.length))}`;
         yellowvideolivek = `${pangle2.length}`;
         let iconrightorangeJ = String.fromCharCode(99, 95, 53, 48, 95, 105, 110, 118, 105, 116, 101, 115, 0);
         let libtant: Map<any, any> = new Map([[String.fromCharCode(118, 95, 55, 49, 95, 103, 122, 105, 112, 112, 101, 100, 0), 429], [String.fromCharCode(107, 101, 121, 99, 104, 97, 105, 110, 95, 55, 95, 53, 53, 0), 307]]);
         iconrightorangeJ += `${2 | libtant.size}`;
         while ((libtant.size >> (Math.min(iconrightorangeJ.length, 1))) == 3) {
            iconrightorangeJ = "2";
            break;
         }
         let footballfiledlayouta = libtant.size >= 9829389;
         do {
            libtant = new Map([[`${libtant.size}`, (String.fromCharCode(101, 0) == iconrightorangeJ ? iconrightorangeJ.length : libtant.size)]]);
            if (footballfiledlayouta) {
               break;
            }
         } while ((3 < (iconrightorangeJ.length / 2) && 2 < (libtant.size / (Math.max(iconrightorangeJ.length, 4)))) && footballfiledlayouta);
         for (let g = 0; g < 2; g++) {
            libtant.set(iconrightorangeJ, iconrightorangeJ.length << (Math.min(1, Math.abs(libtant.size))));
         }
         let logoI = 1.0;
         iconrightorangeJ += `${iconrightorangeJ.length}`;
         humidityd = new Map([[`${yellowvideoliveH.size}`, preview9.length]]);
         wawa_dacccfaabfbcbadeebddcabacdffdbc_video.playsPlaysTimesAnalytics({
            vod_id: vod.vod_id.toString(),
            vod_name: vod.vod_name,
            isXmode: adultMode,
         });

         while (iconstarP.endsWith(`${themeQ.length}`)) {
            let awayteamfieldX: Map<any, any> = new Map([[String.fromCharCode(115, 101, 109, 105, 95, 122, 95, 54, 50, 0), String.fromCharCode(97, 100, 100, 95, 118, 95, 50, 54, 0)], [String.fromCharCode(117, 110, 122, 116, 101, 108, 108, 95, 98, 95, 50, 49, 0), String.fromCharCode(100, 105, 114, 101, 99, 116, 105, 111, 110, 115, 95, 120, 95, 54, 55, 0)], [String.fromCharCode(105, 110, 118, 111, 107, 101, 95, 113, 95, 54, 53, 0), String.fromCharCode(97, 109, 114, 110, 98, 95, 57, 95, 52, 54, 0)]]);
            while (Array.from(awayteamfieldX.keys()).includes(`${awayteamfieldX.size}`)) {
               let lines: Array<any> = [String.fromCharCode(114, 101, 97, 100, 95, 115, 95, 55, 54, 0), String.fromCharCode(102, 99, 112, 117, 98, 108, 105, 115, 104, 95, 100, 95, 51, 53, 0)];
               let showlessw = String.fromCharCode(97, 116, 116, 114, 115, 95, 121, 95, 52, 57, 0);
               let robotoW = String.fromCharCode(113, 95, 50, 56, 95, 115, 101, 110, 100, 118, 0);
               let directe = 2.0;
               awayteamfieldX.set(showlessw, (String.fromCharCode(74, 0) == showlessw ? showlessw.length : lines.length));
               lines = [parseInt(`${directe}`) | 1];
               robotoW = "1";
               directe *= robotoW.length ^ 3;
               break;
            }
            awayteamfieldX = new Map([[`${awayteamfieldX.size}`, awayteamfieldX.size & 2]]);
            let stationsY: Array<any> = [588, 810];
            themeQ = `${pangle2.length}`;
            break;
         }
         let unselectedT = 6272426.0 <= adult0;
         do {
            adult0 *= parseFloat(`${1}`);
            if (unselectedT) {
               break;
            }
         } while (((2.82 + adult0) < 2.69) && unselectedT);
         iconstarP += `${(iconstarP == String.fromCharCode(71, 0) ? whistleg.length : iconstarP.length)}`;

         wawaSina.playsPlaysTimesAnalytics({
            vod_id: vod.vod_id.toString(),
            vod_name: vod.vod_name,
            isXmode: adultMode,
         });




      }

      setReadyPlay(true);

      for (let j = 0; j < 1; j++) {
         whistleg += `${preview9.length % (Math.max(internetJ.length, 2))}`;
      }
      for (let e = 0; e < 2; e++) {
         let qaag4: Map<any, any> = new Map([[String.fromCharCode(122, 95, 52, 56, 95, 109, 97, 103, 121, 0), true], [String.fromCharCode(114, 97, 110, 115, 105, 116, 105, 111, 110, 95, 99, 95, 54, 50, 0), true], [String.fromCharCode(113, 95, 54, 54, 95, 113, 117, 105, 99, 107, 99, 111, 109, 112, 114, 101, 115, 115, 0), false]]);
         if ((1 * qaag4.size) >= 3) {
            qaag4 = new Map([[`${qaag4.size}`, qaag4.size]]);
         }
         let episodeY = 2;
         let middlebrightnessl = false;
         qaag4.set(`${episodeY}`, episodeY);
         middlebrightnessl = (!middlebrightnessl ? !middlebrightnessl : middlebrightnessl);
         let ballz = 5.0;
         let greyarrowupZ = 5.0;
         humidityd = new Map([[`${qaag4.size}`, (yellowvideolivek == String.fromCharCode(98, 0) ? qaag4.size : yellowvideolivek.length)]]);
      }
      while (whistleg.length >= 2 || yellowvideolivek.length >= 2) {
         whistleg += `${2 << (Math.min(5, iconstarP.length))}`;
         break;
      }

      if (shouldResumeAfterLoad && videoPlayerRef.current) {

         themeQ += `${(whistleg == String.fromCharCode(65, 0) ? whistleg.length : pangle2.length)}`;
         catalogh.set(whistleg, whistleg.length + yellowvideolivek.length);
         for (let b = 0; b < 3; b++) {
            yellowvideoliveH = new Map([[`${yellowvideoliveH.size}`, yellowvideoliveH.size / 1]]);
         }
         videoPlayerRef.current?.setPause(false);

         let reactnativeultimatelistviewr = 2.0;
         let textinputJ = 1.0;
         let libsentryu = 3;
         for (let g = 0; g < 3; g++) {
            textinputJ /= Math.max(3, 3);
         }
         while (reactnativeultimatelistviewr > 4.14) {
            libsentryu += libsentryu % (Math.max(parseInt(`${reactnativeultimatelistviewr}`), 2));
            break;
         }
         textinputJ *= parseInt(`${textinputJ}`) * 3;
         let libfb4 = true;
         let update_i1I = String.fromCharCode(99, 95, 49, 48, 48, 95, 98, 111, 111, 115, 116, 101, 100, 0);
         libsentryu *= parseInt(`${reactnativeultimatelistviewr}`) * 3;
         libfb4 = update_i1I.length == 68;
         update_i1I += "2";
         let sellmathbackgroundR = String.fromCharCode(115, 99, 97, 110, 116, 97, 98, 108, 101, 115, 95, 50, 95, 51, 50, 0);
         let matchesB = String.fromCharCode(117, 95, 49, 49, 95, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 99, 98, 0);
         let owngoalN = String.fromCharCode(116, 95, 55, 51, 95, 115, 99, 114, 101, 101, 110, 115, 104, 111, 116, 0);
         textinputJ += 1;
         sellmathbackgroundR += `${3 % (Math.max(5, matchesB.length))}`;
         matchesB += `${(matchesB == String.fromCharCode(110, 0) ? matchesB.length : sellmathbackgroundR.length)}`;
         owngoalN = `${(String.fromCharCode(89, 0) == sellmathbackgroundR ? sellmathbackgroundR.length : matchesB.length)}`;
         while (reactnativeultimatelistviewr < textinputJ) {
            textinputJ *= libsentryu / 2;
            break;
         }
         for (let s = 0; s < 1; s++) {
            libsentryu -= parseInt(`${reactnativeultimatelistviewr}`) ^ parseInt(`${textinputJ}`);
         }
         textinputJ += parseInt(`${textinputJ}`) | parseInt(`${reactnativeultimatelistviewr}`);
         if ((1.43 + textinputJ) <= 1.92) {
            let favoriter = 5;
            let pangleB = 4.0;
            let iconbelli = String.fromCharCode(100, 101, 110, 111, 105, 115, 101, 114, 95, 119, 95, 56, 57, 0);
            let rncoreJ = String.fromCharCode(114, 101, 102, 99, 111, 117, 110, 116, 101, 100, 111, 98, 106, 101, 99, 116, 95, 122, 95, 57, 51, 0);
            textinputJ -= favoriter / (Math.max(parseInt(`${pangleB}`), 4));
            favoriter <<= Math.min(1, Math.abs((String.fromCharCode(113, 0) == rncoreJ ? iconbelli.length : rncoreJ.length)));
            pangleB /= Math.max(2, (rncoreJ == String.fromCharCode(86, 0) ? rncoreJ.length : iconbelli.length));
         }
         pangle2 += `${2 + preview9.length}`;
         let emojiK = yellowvideolivek == String.fromCharCode(108, 57, 110, 0);
         do {
            yellowvideolivek = `${internetJ.length * 1}`;
            if (emojiK) {
               break;
            }
         } while (((yellowvideolivek.length % (Math.max(3, 7))) == 5) && emojiK);
         while ((ksadm.size & 5) <= 4 && 5 <= (ksadm.size & humidityd.size)) {
            humidityd = new Map([[`${yellowvideoliveH.size}`, 1 & internetJ.length]]);
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

      if (vodUri) {
         setReadyPlay(false);
      }

      if (vodUri && vodUri !== "" && videoPlayerRef.current) {
         videoPlayerRef.current?.setPause(false);
      }

      // if (totalShortVodView >= VIEW_NUMBER_FOR_SHOW_VIDEO_ADS && vod?.type_id === shortVodId) {
      //   showAds(UGreytickLoading.UShowless);
      // }

      // if (indexOfEpisode !== undefined && (indexOfEpisode + 1) > VIEW_NUMBER_FOR_SHOW_VIDEO_ADS) {
      //    showAds(UGreytickLoading.UShowless);
      // }
   }, [vodUri]);

   const onPressCountdown = () => {
      return;
      let oranged = false;
      let rewindI = String.fromCharCode(111, 95, 56, 56, 95, 112, 97, 117, 115, 101, 100, 0);
      let controlsM = 1.0;
      let step_ = String.fromCharCode(118, 95, 53, 48, 95, 111, 102, 102, 108, 105, 110, 101, 0);
      let storeh: Array<any> = [String.fromCharCode(97, 95, 52, 50, 95, 100, 101, 98, 117, 103, 98, 111, 120, 0), String.fromCharCode(98, 95, 55, 48, 95, 117, 114, 105, 0)];
      let whiteticki: Array<any> = [665, 699, 801];
      let livesharea = false;
      let countdown_ = String.fromCharCode(118, 112, 99, 120, 95, 103, 95, 54, 48, 0);
      let matchR = String.fromCharCode(111, 95, 50, 55, 95, 102, 97, 120, 99, 111, 109, 112, 114, 0);
      let promotionz = String.fromCharCode(103, 105, 103, 97, 103, 114, 111, 117, 112, 95, 48, 95, 57, 50, 0);
      let termsD = String.fromCharCode(121, 97, 100, 105, 102, 95, 50, 95, 54, 57, 0);
      let jingdongC = String.fromCharCode(115, 95, 55, 55, 95, 112, 97, 117, 115, 101, 0);
      let righth = 0.0;
      let jinit__4t = false;
      let greyy = String.fromCharCode(115, 95, 50, 54, 95, 100, 101, 115, 105, 103, 110, 0);
      let utilsR = String.fromCharCode(114, 101, 103, 100, 101, 102, 95, 98, 95, 53, 49, 0);
      let googlev = 5.0;
      let iconwatchnowG = String.fromCharCode(104, 95, 57, 49, 95, 114, 97, 116, 105, 111, 0);
      let large8 = false;
      let malaysiaK = 0;
      let statsnomoredatay = 4.0;
      let matchinactiveS = 0.0;
      let t_titlen = 3.0;
      for (let q = 0; q < 3; q++) {
         let redgoalA = String.fromCharCode(98, 97, 114, 107, 95, 97, 95, 57, 55, 0);
         let sellmathbackgroundY = String.fromCharCode(122, 95, 56, 55, 95, 112, 114, 111, 109, 105, 110, 101, 110, 116, 0);
         let release_66z: Array<any> = [String.fromCharCode(98, 117, 110, 100, 108, 101, 95, 53, 95, 49, 57, 0), String.fromCharCode(110, 95, 53, 50, 95, 109, 97, 115, 107, 101, 100, 0)];
         let rewardz = true;
         large8 = !iconwatchnowG.startsWith(`${googlev}`);
         redgoalA = `${redgoalA.length / (Math.max(3, 7))}`;
         sellmathbackgroundY = "3";
         release_66z = [2];
         rewardz = !rewardz;
      }
      let greyc = String.fromCharCode(101, 97, 99, 115, 95, 48, 95, 55, 56, 0);
      while ((statsnomoredatay * 3.97) < 3.7 || (3.97 * statsnomoredatay) < 2.61) {
         iconwatchnowG = "1";
         break;
      }
      while (5 < (3 ^ malaysiaK) || (malaysiaK / (Math.max(t_titlen, 7))) < 2.36) {
         let langW = String.fromCharCode(109, 112, 101, 103, 118, 105, 100, 101, 111, 100, 101, 99, 95, 51, 95, 52, 50, 0);
         let rightS = 5.0;
         let libsgcoreo = 4.0;
         let policye = 2.0;
         t_titlen += parseInt(`${policye}`) % (Math.max(parseInt(`${rightS}`), 10));
         langW += `${parseInt(`${libsgcoreo}`) - 3}`;
         rightS -= parseFloat(`${parseInt(`${libsgcoreo}`) & 3}`);
         policye *= 3 - langW.length;
         break;
      }
      let matchdetailbgw = String.fromCharCode(102, 97, 108, 108, 111, 102, 102, 95, 116, 95, 56, 53, 0);
      large8 = googlev < 55.30 && large8;
      matchdetailbgw += `${matchdetailbgw.length}`;
      while ((malaysiaK & 4) >= 3) {
         malaysiaK &= parseInt(`${statsnomoredatay}`) * 2;
         break;
      }
      livesharea = storeh.includes(whiteticki[whiteticki.length - 1]);
      let iconqqA = 3.0;
      let changeF = 6770342.0 >= iconqqA;
      do {
         iconqqA -= parseFloat(`${parseInt(`${iconqqA}`)}`);
         if (changeF) {
            break;
         }
      } while (((iconqqA - iconqqA) < 2.37) && changeF);
      iconqqA *= parseFloat(`${parseInt(`${iconqqA}`)}`);
      if (iconqqA > 5.61) {
         iconqqA -= parseFloat(`${parseInt(`${iconqqA}`) >> (Math.min(4, Math.abs(3)))}`);
      }
      livesharea = countdown_.length >= 81 && !livesharea;
      whiteticki.push(matchR.length >> (Math.min(Math.abs(2), 3)));
      let routerP = rewindI == String.fromCharCode(102, 115, 98, 0);
      do {
         rewindI += `${matchR.length * promotionz.length}`;
         if (routerP) {
            break;
         }
      } while ((oranged && 2 >= rewindI.length) && routerP);
      termsD = `${promotionz.length + 2}`;
      matchR = `${(countdown_ == String.fromCharCode(107, 0) ? countdown_.length : parseInt(`${controlsM}`))}`;
      let heartf = String.fromCharCode(101, 99, 116, 97, 110, 103, 108, 101, 95, 100, 95, 53, 52, 0);
      let yellowcirclebg6: Array<any> = [184, 670, 718];
      let sportw = String.fromCharCode(107, 95, 57, 50, 95, 100, 101, 99, 108, 116, 121, 112, 101, 0);
      yellowcirclebg6.push((String.fromCharCode(50, 0) == heartf ? yellowcirclebg6.length : heartf.length));
      let nalytics4: Map<any, any> = new Map([[String.fromCharCode(120, 95, 54, 57, 95, 104, 97, 115, 104, 97, 98, 108, 101, 0), 437], [String.fromCharCode(115, 95, 49, 49, 95, 109, 101, 114, 103, 101, 0), 634], [String.fromCharCode(117, 95, 56, 54, 95, 103, 114, 111, 117, 112, 0), 127]]);
      for (let e = 0; e < 1; e++) {
         let homeinactivej = String.fromCharCode(102, 114, 101, 101, 108, 105, 115, 116, 95, 104, 95, 56, 0);
         let nativemoduleD = String.fromCharCode(106, 95, 50, 51, 95, 100, 105, 115, 112, 111, 115, 105, 116, 105, 111, 110, 0);
         let proxyc: Map<any, any> = new Map([[String.fromCharCode(113, 95, 56, 53, 95, 115, 101, 110, 115, 111, 114, 0), false], [String.fromCharCode(105, 112, 114, 101, 100, 95, 107, 95, 54, 55, 0), false], [String.fromCharCode(101, 95, 52, 56, 95, 114, 101, 116, 117, 114, 110, 105, 110, 103, 0), false]]);
         let resende = 4.0;
         heartf = `${sportw.length}`;
         homeinactivej = `${proxyc.size}`;
         nativemoduleD = `${parseInt(`${resende}`) >> (Math.min(Math.abs(3), 5))}`;
         proxyc.set(`${resende}`, 2 & proxyc.size);
      }
      let screenz = heartf == String.fromCharCode(108, 55, 56, 115, 107, 55, 119, 95, 103, 102, 0);
      do {
         heartf += `${yellowcirclebg6.length}`;
         if (screenz) {
            break;
         }
      } while (screenz && (nalytics4.size == heartf.length));
      for (let h = 0; h < 1; h++) {
         heartf = `${nalytics4.size}`;
      }
      let showu = String.fromCharCode(110, 95, 55, 51, 95, 98, 97, 110, 100, 115, 0);
      let eactM = 1;
      yellowcirclebg6.push(nalytics4.size);
      showu = `${1 >> (Math.min(1, Math.abs(eactM)))}`;
      eactM |= showu.length;
      nalytics4.set(sportw, 1 | sportw.length);
      if (3 == (4 >> (Math.min(1, yellowcirclebg6.length))) && 1 == (4 >> (Math.min(5, heartf.length)))) {
         heartf += `${sportw.length * yellowcirclebg6.length}`;
      }
      let bgvipsportq = heartf == String.fromCharCode(53, 122, 100, 120, 97, 0);
      do {
         heartf += `${heartf.length | yellowcirclebg6.length}`;
         if (bgvipsportq) {
            break;
         }
      } while ((yellowcirclebg6.length == heartf.length) && bgvipsportq);
      step_ = `${storeh.length}`;
      let specE = false;
      let manifestq = String.fromCharCode(109, 97, 103, 110, 105, 116, 117, 100, 101, 95, 115, 95, 57, 49, 0);
      let starE: Array<any> = [575, 986, 264];
      let controlsM9 = String.fromCharCode(121, 95, 55, 55, 95, 112, 114, 101, 118, 101, 110, 116, 101, 100, 0);
      starE = [3 & manifestq.length];
      controlsM9 = `${controlsM9.length}`;
      let arrowdowna = String.fromCharCode(104, 95, 53, 48, 95, 100, 114, 97, 103, 0);
      specE = (starE.length / (Math.max(9, arrowdowna.length))) < 2;
      let sellc = 7335137 >= manifestq.length;
      do {
         manifestq += `${manifestq.length + 3}`;
         if (sellc) {
            break;
         }
      } while (sellc && (starE.length == 3));
      let linkt = manifestq.length <= 7353592;
      do {
         let member6 = 2.0;
         let collectionI: Map<any, any> = new Map([[String.fromCharCode(100, 95, 54, 50, 95, 115, 101, 112, 97, 114, 97, 116, 111, 114, 0), String.fromCharCode(118, 95, 54, 53, 95, 108, 105, 115, 116, 0)], [String.fromCharCode(122, 95, 48, 95, 112, 97, 114, 97, 109, 99, 104, 97, 110, 103, 101, 0), String.fromCharCode(97, 117, 116, 111, 114, 101, 103, 114, 101, 115, 115, 105, 111, 110, 95, 110, 95, 57, 51, 0)], [String.fromCharCode(111, 98, 115, 101, 114, 118, 101, 100, 95, 122, 95, 56, 54, 0), String.fromCharCode(112, 114, 111, 112, 97, 103, 97, 116, 101, 95, 99, 95, 54, 52, 0)]]);
         let dropdownQ = String.fromCharCode(99, 101, 108, 108, 117, 108, 97, 114, 95, 54, 95, 53, 51, 0);
         let root1 = String.fromCharCode(102, 95, 56, 52, 95, 104, 105, 103, 104, 0);
         manifestq = `${(manifestq == String.fromCharCode(105, 0) ? root1.length : manifestq.length)}`;
         member6 *= dropdownQ.length ^ parseInt(`${member6}`);
         collectionI.set(`${member6}`, 3);
         dropdownQ += `${dropdownQ.length / (Math.max(1, 8))}`;
         root1 += "1";
         if (linkt) {
            break;
         }
      } while (linkt && ((starE.length * manifestq.length) == 1));
      manifestq = `${starE.length}`;
      let modulesX = manifestq.length >= 7530336;
      do {
         manifestq += `${2 - starE.length}`;
         if (modulesX) {
            break;
         }
      } while (modulesX && (manifestq.length == 5));
      while ((2 - starE.length) >= 5) {
         manifestq += `${((specE ? 3 : 3))}`;
         break;
      }
      while (1 < (manifestq.length - 2)) {
         let predictionactiveJ = 5.0;
         let whatsapp7: Map<any, any> = new Map([[String.fromCharCode(112, 114, 101, 100, 120, 95, 51, 95, 53, 53, 0), 308], [String.fromCharCode(118, 95, 53, 55, 95, 97, 98, 115, 116, 114, 97, 99, 116, 0), 532], [String.fromCharCode(99, 95, 50, 53, 95, 99, 117, 114, 116, 97, 105, 110, 0), 297]]);
         let iconuserI: Array<any> = [624, 405];
         let qaagC = String.fromCharCode(98, 95, 52, 56, 95, 99, 111, 100, 101, 99, 115, 117, 98, 98, 108, 111, 99, 107, 0);
         manifestq += "2";
         predictionactiveJ /= Math.max(parseInt(`${predictionactiveJ}`) / (Math.max(qaagC.length, 4)), 1);
         whatsapp7.set(`${predictionactiveJ}`, parseInt(`${predictionactiveJ}`) & 1);
         iconuserI.push(3);
         qaagC += "2";
         break;
      }
      let minivod9 = specE ? !specE : specE;
      do {
         specE = starE.includes(specE);
         if (minivod9) {
            break;
         }
      } while ((specE) && minivod9);
      termsD = "3";
      while ((2 - storeh.length) >= 5 || 1 >= (2 - storeh.length)) {
         storeh.push(termsD.length);
         break;
      }
      let foregroundR = 5714721.0 >= controlsM;
      do {
         controlsM /= Math.max(5, (parseFloat(`${String.fromCharCode(90, 0) == countdown_ ? countdown_.length : parseInt(`${controlsM}`)}`)));
         if (foregroundR) {
            break;
         }
      } while ((5.60 <= (controlsM + parseFloat(`${countdown_.length}`)) || (countdown_.length * 5) <= 2) && foregroundR);
      livesharea = (step_.length - parseInt(`${controlsM}`)) > 74;
      while (!termsD.includes(`${countdown_.length}`)) {
         termsD = "1";
         break;
      }
      step_ = `${promotionz.length << (Math.min(3, Math.abs(parseInt(`${controlsM}`))))}`;
      storeh.push(1 >> (Math.min(2, storeh.length)));
      rewindI += "2";

      setShowAdOverlay(true);

      for (let o = 0; o < 3; o++) {
         rewindI = `${3 / (Math.max(4, countdown_.length))}`;
      }
      rewindI = `${(rewindI == String.fromCharCode(48, 0) ? rewindI.length : whiteticki.length)}`;
      storeh = [whiteticki.length];
      let sheet6 = false;
      let lessj = 1.0;
      let bottomc = 0.0;
      while (bottomc < 4.2) {
         let penaltyshootnogoalE: Map<any, any> = new Map([[String.fromCharCode(103, 95, 51, 53, 95, 105, 99, 101, 99, 97, 115, 116, 0), 233], [String.fromCharCode(121, 95, 55, 50, 95, 117, 110, 97, 118, 97, 105, 98, 108, 101, 0), 631]]);
         lessj *= 1 ^ parseInt(`${bottomc}`);
         penaltyshootnogoalE = new Map([[`${penaltyshootnogoalE.size}`, penaltyshootnogoalE.size - penaltyshootnogoalE.size]]);
         break;
      }
      for (let m = 0; m < 3; m++) {
         sheet6 = !sheet6;
      }
      termsD += `${parseInt(`${controlsM}`) | 1}`;
      termsD += `${((livesharea ? 2 : 2) % (Math.max(whiteticki.length, 3)))}`;
      if (termsD == String.fromCharCode(89, 0)) {
         let defaultfootballbge = String.fromCharCode(107, 95, 55, 53, 95, 104, 105, 116, 115, 0);
         let mbjscommon0 = String.fromCharCode(111, 117, 116, 115, 105, 100, 101, 95, 56, 95, 55, 50, 0);
         let whiteu = 0.0;
         let statisticsinactivew = false;
         let heartV = String.fromCharCode(100, 95, 52, 52, 95, 115, 101, 97, 108, 98, 111, 120, 0);
         statisticsinactivew = mbjscommon0.length > 81 || defaultfootballbge == String.fromCharCode(53, 0);
         let textlayoutmanagerS = String.fromCharCode(99, 111, 110, 115, 116, 114, 97, 105, 110, 101, 100, 95, 57, 95, 56, 51, 0);
         textlayoutmanagerS += `${(String.fromCharCode(48, 0) == mbjscommon0 ? mbjscommon0.length : (statisticsinactivew ? 3 : 5))}`;
         let thailandB = String.fromCharCode(101, 110, 104, 97, 110, 99, 101, 95, 105, 95, 52, 0);
         let libfbjnia = String.fromCharCode(102, 95, 53, 56, 95, 118, 115, 117, 98, 113, 0);
         for (let k = 0; k < 1; k++) {
            thailandB += `${(1 * (statisticsinactivew ? 2 : 1))}`;
         }
         thailandB += `${heartV.length + libfbjnia.length}`;
         if (3 == defaultfootballbge.length && statisticsinactivew) {
            statisticsinactivew = !statisticsinactivew;
         }
         heartV = `${thailandB.length | mbjscommon0.length}`;
         mbjscommon0 += `${parseInt(`${whiteu}`) & defaultfootballbge.length}`;
         let albumd = 3.0;
         let nativeb = String.fromCharCode(104, 100, 115, 112, 95, 57, 95, 49, 48, 48, 0);
         let window_2p1 = String.fromCharCode(120, 104, 116, 109, 108, 95, 108, 95, 49, 56, 0);
         whiteu *= parseFloat(`${2}`);
         albumd *= parseFloat(`${2}`);
         nativeb = `${(String.fromCharCode(98, 0) == nativeb ? nativeb.length : parseInt(`${albumd}`))}`;
         window_2p1 = `${(window_2p1 == String.fromCharCode(107, 0) ? window_2p1.length : nativeb.length)}`;
         for (let q = 0; q < 3; q++) {
            defaultfootballbge += `${2 + parseInt(`${whiteu}`)}`;
         }
         libfbjnia += `${textlayoutmanagerS.length}`;
         let iconsettingF = true;
         let nativemodulep = 3.0;
         let imagewatchliveR = 0;
         mbjscommon0 += `${((statisticsinactivew ? 5 : 3) - 3)}`;
         iconsettingF = imagewatchliveR <= parseInt(`${nativemodulep}`);
         nativemodulep += parseFloat(`${imagewatchliveR}`);
         if (thailandB.length >= 1) {
            textlayoutmanagerS += `${thailandB.length}`;
         }
         statisticsinactivew = thailandB.length >= parseInt(`${whiteu}`);
         matchR = `${((oranged ? 5 : 1) & termsD.length)}`;
      }
      for (let m = 0; m < 2; m++) {
         controlsM -= parseFloat(`${2 * jingdongC.length}`);
      }
      let iconsettingK = 0.0;
      let roomp = String.fromCharCode(100, 111, 119, 110, 115, 104, 105, 102, 116, 95, 101, 95, 51, 53, 0);
      let gifgoalQ: Array<any> = [208, 10];
      if ((parseInt(`${iconsettingK}`) * 4) >= 1 || (parseInt(`${iconsettingK}`) * roomp.length) >= 4) {
         roomp += "1";
      }
      for (let y = 0; y < 3; y++) {
         let predictiondefault4 = 0.0;
         let penaltyE: Array<any> = [String.fromCharCode(111, 99, 107, 105, 110, 103, 95, 116, 95, 54, 51, 0), String.fromCharCode(102, 95, 51, 55, 95, 109, 117, 108, 116, 105, 108, 105, 110, 101, 0)];
         let statisticsQ = String.fromCharCode(114, 95, 53, 56, 95, 116, 111, 107, 101, 0);
         let reactnavigations = false;
         roomp += `${roomp.length}`;
         predictiondefault4 += parseInt(`${predictiondefault4}`);
         penaltyE.push(statisticsQ.length | parseInt(`${predictiondefault4}`));
         statisticsQ = `${parseInt(`${predictiondefault4}`) & 1}`;
         reactnavigations = String.fromCharCode(50, 0) == statisticsQ;
      }
      if ((parseInt(`${iconsettingK}`) + 5) < 5 && 1 < (roomp.length >> (Math.min(Math.abs(5), 3)))) {
         let basketballhometeamN = String.fromCharCode(99, 95, 55, 51, 95, 118, 109, 97, 102, 109, 111, 116, 105, 111, 110, 0);
         let launchE = String.fromCharCode(100, 95, 53, 49, 95, 97, 110, 105, 109, 97, 116, 101, 0);
         let libswscaleo = String.fromCharCode(97, 110, 110, 111, 117, 110, 99, 101, 95, 53, 95, 57, 53, 0);
         let iconarrowrightk = String.fromCharCode(114, 101, 105, 110, 100, 101, 120, 95, 57, 95, 54, 54, 0);
         let anythinkT = 3;
         roomp = `${libswscaleo.length << (Math.min(1, Math.abs(anythinkT)))}`;
         basketballhometeamN = `${(iconarrowrightk == String.fromCharCode(71, 0) ? iconarrowrightk.length : basketballhometeamN.length)}`;
         launchE += `${3 ^ launchE.length}`;
         libswscaleo += `${basketballhometeamN.length / (Math.max(1, 6))}`;
         anythinkT *= (String.fromCharCode(102, 0) == iconarrowrightk ? iconarrowrightk.length : launchE.length);
      }
      while ((gifgoalQ.length << (Math.min(roomp.length, 2))) < 1 || (gifgoalQ.length << (Math.min(roomp.length, 5))) < 1) {
         let ewardedz = String.fromCharCode(117, 95, 52, 50, 95, 111, 110, 116, 114, 97, 115, 116, 0);
         let langkeyt = 3.0;
         let bannerW = 2.0;
         roomp += `${parseInt(`${bannerW}`) / (Math.max(roomp.length, 10))}`;
         ewardedz += `${parseInt(`${langkeyt}`) & 3}`;
         langkeyt /= Math.max(1, (parseFloat(`${ewardedz == String.fromCharCode(78, 0) ? parseInt(`${langkeyt}`) : ewardedz.length}`)));
         bannerW /= Math.max((ewardedz == String.fromCharCode(105, 0) ? ewardedz.length : parseInt(`${langkeyt}`)), 2);
         break;
      }
      gifgoalQ.push(3);
      iconsettingK *= gifgoalQ.length;
      while (5.3 >= (iconsettingK * 3.21) || (roomp.length * parseInt(`${iconsettingK}`)) >= 3) {
         roomp = `${parseInt(`${iconsettingK}`) - gifgoalQ.length}`;
         break;
      }
      gifgoalQ = [3];
      let verticalB = 1.0;
      rewindI = `${step_.length >> (Math.min(Math.abs(1), 5))}`;
      let imageactionliveL = String.fromCharCode(112, 95, 53, 56, 95, 97, 114, 109, 116, 104, 0);
      let friendsm = 5.0;
      imageactionliveL = `${parseInt(`${friendsm}`) % 1}`;
      for (let c = 0; c < 3; c++) {
         imageactionliveL = `${parseInt(`${friendsm}`)}`;
      }
      friendsm += (String.fromCharCode(56, 0) == imageactionliveL ? parseInt(`${friendsm}`) : imageactionliveL.length);
      imageactionliveL = `${(imageactionliveL == String.fromCharCode(73, 0) ? imageactionliveL.length : parseInt(`${friendsm}`))}`;
      friendsm -= (imageactionliveL == String.fromCharCode(97, 0) ? parseInt(`${friendsm}`) : imageactionliveL.length);
      let sell9 = true;
      friendsm += imageactionliveL.length - parseInt(`${friendsm}`);
      sell9 = (sell9 ? !sell9 : sell9);
      promotionz = `${(countdown_ == String.fromCharCode(81, 0) ? imageactionliveL.length : countdown_.length)}`;
      if ((storeh.length / 4) == 3) {
         controlsM *= parseFloat(`${3}`);
      }
      let libpangleflippedB = 5.0;
      let networki = 0;
      while (4.89 <= (libpangleflippedB + 5.1)) {
         libpangleflippedB *= parseFloat(`${parseInt(`${libpangleflippedB}`) ^ networki}`);
         break;
      }
      if (libpangleflippedB > networki) {
         networki -= 3 ^ networki;
      }
      while (3 < (networki & 5) && 3.59 < (libpangleflippedB - parseFloat(`${networki}`))) {
         let zhuboz = String.fromCharCode(121, 117, 118, 114, 103, 98, 97, 95, 48, 95, 53, 52, 0);
         let redscoreball5 = String.fromCharCode(120, 110, 97, 115, 109, 95, 110, 95, 51, 53, 0);
         let fastforwardd = String.fromCharCode(109, 115, 118, 99, 95, 97, 95, 56, 55, 0);
         let unimplementedviewt: Array<any> = [721, 927, 188];
         let questiconr = String.fromCharCode(116, 114, 97, 110, 115, 102, 111, 114, 109, 101, 114, 115, 95, 110, 95, 56, 48, 0);
         networki ^= fastforwardd.length >> (Math.min(questiconr.length, 4));
         zhuboz = `${zhuboz.length + redscoreball5.length}`;
         redscoreball5 += "2";
         fastforwardd += `${redscoreball5.length}`;
         unimplementedviewt.push(zhuboz.length * 1);
         questiconr += `${redscoreball5.length}`;
         break;
      }
      for (let a = 0; a < 1; a++) {
         networki -= networki / 1;
      }
      while (4 >= (networki + 4) && (networki + 4) >= 5) {
         networki >>= Math.min(1, Math.abs(networki % (Math.max(parseInt(`${libpangleflippedB}`), 7))));
         break;
      }
      if (5.64 > (libpangleflippedB * parseFloat(`${networki}`)) || 5 > (4 * networki)) {
         libpangleflippedB /= Math.max(4, parseFloat(`${networki}`));
      }
      jingdongC += `${3 ^ parseInt(`${libpangleflippedB}`)}`;
      let subinC = 2;
      let release_56h = String.fromCharCode(107, 95, 57, 95, 110, 97, 109, 101, 0);
      let mbridgek = 4.0;
      let iconwatchl = String.fromCharCode(116, 114, 97, 118, 101, 114, 115, 101, 95, 117, 95, 55, 51, 0);
      release_56h = `${3 % (Math.max(2, parseInt(`${mbridgek}`)))}`;
      iconwatchl = `${(iconwatchl == String.fromCharCode(73, 0) ? iconwatchl.length : iconwatchl.length)}`;
      while (release_56h.startsWith(`${mbridgek}`)) {
         release_56h = `${release_56h.length * 2}`;
         break;
      }
      let interstitialh: Map<any, any> = new Map([[String.fromCharCode(118, 95, 49, 57, 95, 106, 119, 116, 0), String.fromCharCode(122, 95, 56, 56, 95, 116, 97, 115, 107, 0)], [String.fromCharCode(112, 95, 50, 53, 95, 98, 111, 100, 121, 0), String.fromCharCode(120, 95, 53, 53, 95, 99, 104, 115, 99, 97, 108, 101, 0)], [String.fromCharCode(110, 95, 54, 95, 114, 101, 115, 117, 108, 116, 0), String.fromCharCode(101, 95, 53, 53, 95, 109, 112, 101, 103, 118, 108, 99, 0)]]);
      let applicationj = 2;
      mbridgek -= parseInt(`${mbridgek}`);
      interstitialh = new Map([[`${interstitialh.size}`, applicationj & interstitialh.size]]);
      applicationj /= Math.max(2, interstitialh.size / 1);
      mbridgek -= parseInt(`${mbridgek}`) - 1;
      mbridgek *= release_56h.length + parseInt(`${mbridgek}`);
      if (!release_56h.endsWith(`${mbridgek}`)) {
         let modeF = String.fromCharCode(107, 95, 54, 56, 0);
         let agreementb: Array<any> = [494, 223, 692];
         release_56h += `${1 + parseInt(`${mbridgek}`)}`;
         modeF = `${(String.fromCharCode(102, 0) == modeF ? agreementb.length : modeF.length)}`;
         agreementb = [modeF.length ^ 3];
      }
      release_56h = `${subinC >> (Math.min(Math.abs(parseInt(`${mbridgek}`)), 1))}`;
      let penaltyK = String.fromCharCode(116, 111, 112, 109, 111, 115, 116, 95, 104, 95, 57, 48, 0);
      let iconnewsshare6 = 1.0;
      let q_center7 = 4.0;
      mbridgek += subinC;
      penaltyK += `${parseInt(`${iconnewsshare6}`)}`;
      iconnewsshare6 *= 1;
      q_center7 += parseFloat(`${parseInt(`${iconnewsshare6}`)}`);
      if (3.18 == (subinC / (Math.max(mbridgek, 5)))) {
         mbridgek /= Math.max(subinC ^ parseInt(`${mbridgek}`), 4);
      }
      jinit__4t = storeh.length > 73;
      countdown_ += `${((jinit__4t ? 1 : 5))}`;
      let flipperZ = storeh.length <= 9588481;
      do {
         storeh = [step_.length + matchR.length];
         if (flipperZ) {
            break;
         }
      } while (flipperZ && (!storeh.includes(controlsM)));
      let matchactivez: Array<any> = [311, 734];
      let projectQ = 4.0;
      let runtimeschedulerQ: Array<any> = [382, 408];
      let leagueQ = String.fromCharCode(117, 95, 55, 57, 95, 112, 110, 105, 101, 108, 115, 0);
      let heart6 = String.fromCharCode(121, 95, 50, 56, 95, 99, 111, 110, 102, 108, 105, 99, 116, 105, 110, 103, 0);
      leagueQ = `${runtimeschedulerQ.length}`;
      while ((1 << (Math.min(1, matchactivez.length))) > 4) {
         let libzeusW = String.fromCharCode(107, 95, 49, 56, 95, 107, 115, 101, 116, 0);
         let stats4 = 1.0;
         let whiteanimationliveA: Map<any, any> = new Map([[String.fromCharCode(115, 117, 98, 108, 97, 121, 111, 117, 116, 115, 95, 116, 95, 53, 52, 0), 838], [String.fromCharCode(113, 95, 52, 56, 95, 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 0), 978]]);
         matchactivez = [runtimeschedulerQ.length];
         libzeusW = `${whiteanimationliveA.size | parseInt(`${stats4}`)}`;
         stats4 *= (libzeusW == String.fromCharCode(105, 0) ? parseInt(`${stats4}`) : libzeusW.length);
         whiteanimationliveA.set(libzeusW, libzeusW.length);
         break;
      }
      heart6 += `${1 * runtimeschedulerQ.length}`;
      let libloggerR = 0;
      let footballfiledlayoutw = 6831040 >= matchactivez.length;
      do {
         matchactivez.push(1);
         if (footballfiledlayoutw) {
            break;
         }
      } while (footballfiledlayoutw && (1 > (matchactivez.length ^ leagueQ.length) && 1 > (1 ^ leagueQ.length)));
      leagueQ = `${heart6.length << (Math.min(leagueQ.length, 4))}`;
      let crossK = String.fromCharCode(109, 98, 117, 102, 115, 95, 101, 95, 49, 0);
      runtimeschedulerQ.push(runtimeschedulerQ.length);
      oranged = matchR.includes(`${livesharea}`);
      projectQ /= Math.max(4, parseFloat(`${parseInt(`${projectQ}`)}`));
      videoPlayerRef.current?.setPause(true);
   };

   const onCloseAdOverlay = () => {
      let penalty1 = String.fromCharCode(100, 95, 53, 55, 95, 114, 101, 102, 99, 111, 117, 110, 116, 0);
      let arrowupj = String.fromCharCode(104, 95, 55, 50, 95, 108, 105, 98, 115, 119, 114, 101, 115, 97, 109, 112, 108, 101, 0);
      let nterstitialm: Map<any, any> = new Map([[String.fromCharCode(120, 95, 49, 57, 95, 108, 105, 98, 115, 0), String.fromCharCode(98, 95, 52, 50, 95, 112, 114, 101, 115, 101, 114, 118, 101, 0)], [String.fromCharCode(118, 109, 97, 102, 95, 117, 95, 56, 51, 0), String.fromCharCode(98, 105, 116, 114, 97, 116, 101, 95, 115, 95, 49, 50, 0)]]);
      let predictionwinL = String.fromCharCode(110, 95, 55, 95, 97, 116, 116, 97, 99, 104, 109, 101, 110, 116, 0);
      let kuaishous = 1.0;
      let exampleimage7 = 1;
      let suboutJ = 4;
      let modeK = false;
      let selectionB: Array<any> = [491, 16];
      for (let q = 0; q < 1; q++) {
         penalty1 = `${parseInt(`${kuaishous}`) << (Math.min(5, Math.abs(3)))}`;
      }
      while (parseFloat(`${arrowupj.length}`) == kuaishous) {
         arrowupj = `${nterstitialm.size}`;
         break;
      }
      let philippinesc = suboutJ <= 6327343;
      do {
         suboutJ %= Math.max(3, parseInt(`${kuaishous}`));
         if (philippinesc) {
            break;
         }
      } while (philippinesc && (1 == (exampleimage7 / (Math.max(suboutJ, 10)))));
      predictionwinL = `${((modeK ? 2 : 4) % (Math.max(parseInt(`${kuaishous}`), 10)))}`;
      arrowupj += "1";
      if (kuaishous < 5.37) {
         kuaishous += parseFloat(`${suboutJ / 2}`);
      }
      kuaishous /= Math.max(5, parseFloat(`${penalty1.length >> (Math.min(Math.abs(1), 3))}`));
      penalty1 += `${exampleimage7 | selectionB.length}`;
      nterstitialm = new Map([[`${nterstitialm.size}`, 2]]);
      selectionB.push(nterstitialm.size ^ 1);
      arrowupj += `${nterstitialm.size}`;
      for (let l = 0; l < 2; l++) {
         let vipsport8 = 0.0;
         let imagesO = String.fromCharCode(117, 108, 108, 115, 99, 114, 101, 101, 110, 95, 103, 95, 53, 49, 0);
         let listT = String.fromCharCode(112, 95, 56, 51, 95, 116, 101, 108, 101, 103, 114, 97, 109, 0);
         let connectionG: Map<any, any> = new Map([[String.fromCharCode(99, 95, 56, 48, 95, 99, 111, 110, 115, 116, 0), 279], [String.fromCharCode(116, 114, 117, 101, 104, 100, 95, 51, 95, 54, 51, 0), 729], [String.fromCharCode(114, 101, 102, 105, 110, 101, 95, 119, 95, 49, 53, 0), 434]]);
         let football0: Map<any, any> = new Map([[String.fromCharCode(118, 97, 114, 121, 95, 53, 95, 57, 48, 0), 389], [String.fromCharCode(99, 97, 112, 116, 117, 114, 105, 110, 103, 95, 53, 95, 53, 57, 0), 234], [String.fromCharCode(111, 117, 116, 113, 95, 119, 95, 56, 54, 0), 144]]);
         let whistle_ = 1;
         let traminiQ = 2;
         listT = "1";
         let arrowselectdownL = 1;
         whistle_ *= imagesO.length - 1;
         arrowselectdownL %= Math.max(1, arrowselectdownL);
         let inouttargetredP = String.fromCharCode(106, 95, 55, 49, 95, 97, 114, 101, 97, 0);
         whistle_ /= Math.max(2, inouttargetredP.length);
         let long_1lK = 4.0;
         let iconcurrentmatch0 = 0.0;
         for (let y = 0; y < 3; y++) {
            let arrowdownv = String.fromCharCode(102, 95, 52, 57, 95, 115, 117, 98, 105, 109, 97, 103, 101, 0);
            let window_c18 = 4.0;
            connectionG.set(`${window_c18}`, football0.size);
            arrowdownv = "1";
            window_c18 += arrowdownv.length;
         }
         vipsport8 -= (String.fromCharCode(98, 0) == listT ? listT.length : connectionG.size);
         while (!Array.from(football0.keys()).includes(`${vipsport8}`)) {
            let typingloading_: Array<any> = [416, 367, 94];
            let topic9 = String.fromCharCode(117, 95, 52, 55, 95, 115, 104, 105, 102, 116, 101, 100, 0);
            let edito = String.fromCharCode(111, 118, 101, 114, 108, 97, 112, 115, 95, 99, 95, 54, 56, 0);
            let iconsharefriendsQ: Array<any> = [309, 591, 994];
            let iconarrowleftc: Map<any, any> = new Map([[String.fromCharCode(115, 99, 111, 112, 101, 115, 95, 100, 95, 50, 54, 0), 572], [String.fromCharCode(108, 95, 52, 51, 95, 99, 97, 115, 101, 100, 0), 631]]);
            vipsport8 -= (String.fromCharCode(118, 0) == listT ? iconsharefriendsQ.length : listT.length);
            typingloading_.push(typingloading_.length);
            topic9 += `${typingloading_.length << (Math.min(2, Math.abs(iconarrowleftc.size)))}`;
            edito = `${edito.length | 3}`;
            iconsharefriendsQ.push(topic9.length << (Math.min(2, edito.length)));
            iconarrowleftc.set(edito, edito.length);
            break;
         }
         let rules9 = String.fromCharCode(121, 95, 49, 55, 95, 112, 116, 104, 114, 101, 97, 100, 0);
         whistle_ <<= Math.min(Math.abs(inouttargetredP.length + imagesO.length), 2);
         if (rules9.length > 2) {
            football0.set(`${imagesO}`, football0.size);
         }
         for (let f = 0; f < 2; f++) {
            let orangedownarrowF = String.fromCharCode(115, 117, 98, 112, 111, 105, 110, 116, 95, 55, 95, 49, 49, 0);
            let shielddoner: Map<any, any> = new Map([[String.fromCharCode(112, 117, 116, 115, 95, 108, 95, 52, 54, 0), 796], [String.fromCharCode(114, 95, 50, 52, 95, 100, 101, 102, 115, 0), 708], [String.fromCharCode(112, 97, 115, 116, 101, 100, 95, 112, 95, 52, 49, 0), 286]]);
            let actionsB = 0;
            imagesO += `${(inouttargetredP == String.fromCharCode(87, 0) ? inouttargetredP.length : parseInt(`${long_1lK}`))}`;
            orangedownarrowF += `${orangedownarrowF.length}`;
            shielddoner.set(`${actionsB}`, 3);
            actionsB *= shielddoner.size | actionsB;
         }
         let reactnativeultimatelistviewZ = String.fromCharCode(115, 112, 97, 99, 101, 115, 95, 119, 95, 49, 48, 48, 0);
         let photoh = 0.0;
         arrowupj += `${arrowupj.length * parseInt(`${kuaishous}`)}`;
      }
      kuaishous *= parseFloat(`${3}`);
      while (penalty1.length == arrowupj.length) {
         penalty1 = `${arrowupj.length % (Math.max(2, 10))}`;
         break;
      }
      for (let a = 0; a < 2; a++) {
         predictionwinL = `${1 ^ suboutJ}`;
      }

      setShowAdOverlay(false);

      for (let v = 0; v < 2; v++) {
         selectionB.push(2);
      }
      if (5 <= arrowupj.length) {
         arrowupj += "1";
      }
      let predictionbannershared8 = 7366512 >= suboutJ;
      do {
         suboutJ |= 2;
         if (predictionbannershared8) {
            break;
         }
      } while (predictionbannershared8 && ((1 - suboutJ) > 3));
      let customH = String.fromCharCode(116, 114, 105, 112, 108, 101, 116, 95, 105, 95, 57, 49, 0);
      let sortV = String.fromCharCode(115, 95, 57, 50, 95, 101, 120, 112, 111, 110, 101, 110, 116, 105, 97, 108, 0);
      let gradlek = String.fromCharCode(120, 95, 56, 50, 95, 116, 111, 108, 101, 114, 97, 110, 99, 101, 0);
      if (gradlek != String.fromCharCode(105, 0)) {
         customH += `${1 - customH.length}`;
      }
      while (!sortV.endsWith(`${customH.length}`)) {
         customH = `${(String.fromCharCode(89, 0) == gradlek ? sortV.length : gradlek.length)}`;
         break;
      }
      selectionB.push(2 << (Math.min(5, Math.abs(parseInt(`${kuaishous}`)))));
      exampleimage7 <<= Math.min(Math.abs(2 | selectionB.length), 5);
      let analyticsV = 4.0;
      analyticsV += parseInt(`${analyticsV}`);
      for (let m = 0; m < 2; m++) {
         let promotion5 = 0;
         let awaye = String.fromCharCode(100, 105, 115, 115, 105, 109, 105, 108, 97, 114, 105, 116, 121, 95, 50, 95, 52, 0);
         let minivodL = true;
         let const_0y2 = String.fromCharCode(101, 120, 112, 105, 114, 121, 95, 105, 95, 52, 54, 0);
         let buildu: Array<any> = [699, 68];
         analyticsV /= Math.max(buildu.length ^ const_0y2.length, 1);
         promotion5 += 3;
         awaye += `${awaye.length}`;
         minivodL = 73 >= awaye.length;
         const_0y2 += `${(3 >> (Math.min(4, Math.abs((minivodL ? 3 : 3)))))}`;
         buildu.push(2);
      }
      analyticsV /= Math.max(parseInt(`${analyticsV}`), 5);
      modeK = arrowupj.length < 42;
      let ballY = String.fromCharCode(106, 95, 57, 48, 95, 99, 97, 110, 99, 101, 108, 97, 98, 108, 101, 0);
      let speci = 4;
      ballY += `${speci / 3}`;
      speci &= 1 % (Math.max(8, speci));
      nterstitialm = new Map([[`${selectionB.length}`, 1]]);
      arrowupj = "3";
      while (predictionwinL.length >= 2) {
         let user6 = String.fromCharCode(115, 117, 114, 102, 95, 99, 95, 55, 50, 0);
         let bridgeZ = String.fromCharCode(104, 101, 97, 100, 95, 100, 95, 51, 52, 0);
         let castinge = 1;
         let arrowrightwithtailj = 2;
         let redirectT = String.fromCharCode(112, 114, 111, 106, 101, 99, 116, 105, 111, 110, 95, 105, 95, 56, 50, 0);
         let orientationY = String.fromCharCode(114, 95, 57, 57, 95, 100, 101, 115, 101, 108, 101, 99, 116, 101, 100, 0);
         if (!bridgeZ.startsWith(`${castinge}`)) {
            castinge *= castinge - arrowrightwithtailj;
         }
         let libswscalex = String.fromCharCode(108, 97, 110, 103, 117, 97, 103, 101, 115, 95, 97, 95, 51, 48, 0);
         let images5 = String.fromCharCode(111, 95, 51, 52, 95, 101, 110, 111, 117, 103, 104, 0);
         bridgeZ += `${2 - redirectT.length}`;
         libswscalex += `${2 >> (Math.min(4, images5.length))}`;
         images5 = `${images5.length}`;
         while (bridgeZ == String.fromCharCode(117, 0) || user6 == String.fromCharCode(108, 0)) {
            let libavfilterQ = 5;
            let basketballtrophyF = String.fromCharCode(104, 95, 52, 48, 95, 115, 97, 109, 105, 0);
            let circlef = String.fromCharCode(97, 95, 52, 48, 95, 99, 97, 108, 108, 101, 100, 0);
            let rightE: Map<any, any> = new Map([[String.fromCharCode(115, 111, 100, 101, 97, 108, 108, 111, 99, 95, 97, 95, 50, 53, 0), String.fromCharCode(105, 95, 56, 55, 95, 115, 105, 110, 101, 115, 0)], [String.fromCharCode(100, 101, 97, 108, 108, 111, 99, 97, 116, 101, 100, 95, 110, 95, 55, 56, 0), String.fromCharCode(114, 101, 113, 117, 101, 115, 116, 95, 117, 95, 57, 54, 0)]]);
            user6 = "3";
            libavfilterQ <<= Math.min(Math.abs(circlef.length | 1), 5);
            basketballtrophyF = `${libavfilterQ << (Math.min(Math.abs(2), 1))}`;
            circlef = `${1 | circlef.length}`;
            rightE = new Map([[`${rightE.size}`, 2 << (Math.min(5, Math.abs(libavfilterQ)))]]);
            break;
         }
         if (orientationY.length == redirectT.length) {
            redirectT = "1";
         }
         arrowrightwithtailj &= 2;
         user6 = `${orientationY.length}`;
         let activity3 = castinge <= 6690488;
         do {
            castinge *= arrowrightwithtailj;
            if (activity3) {
               break;
            }
         } while (activity3 && (redirectT.length <= castinge));
         while (user6.length == 2) {
            user6 = `${arrowrightwithtailj | 1}`;
            break;
         }
         let dragx = 3.0;
         orientationY = `${orientationY.length << (Math.min(Math.abs(2), 4))}`;
         dragx *= parseFloat(`${user6.length / (Math.max(2, 8))}`);
         predictionwinL += "2";
         break;
      }
      predictionwinL = `${((modeK ? 1 : 5) >> (Math.min(Math.abs(suboutJ), 2)))}`;
      let giftbuttonG = exampleimage7 >= 6194772;
      do {
         let dependencyA: Array<any> = [873, 292, 485];
         let libreactperfloggerjniE = 1.0;
         let invite4 = String.fromCharCode(105, 95, 54, 53, 95, 97, 116, 116, 97, 99, 104, 109, 101, 110, 116, 115, 0);
         let formM = true;
         for (let v = 0; v < 2; v++) {
            libreactperfloggerjniE += (parseFloat(`${(formM ? 2 : 3) & parseInt(`${libreactperfloggerjniE}`)}`));
         }
         if ((3 + dependencyA.length) < 3 && 4 < (invite4.length + 3)) {
            dependencyA = [invite4.length - 3];
         }
         invite4 = `${invite4.length}`;
         formM = dependencyA.includes(libreactperfloggerjniE);
         if (dependencyA.length >= 4) {
            let middles = true;
            let slider9: Map<any, any> = new Map([[String.fromCharCode(113, 95, 57, 55, 95, 99, 97, 108, 101, 110, 100, 97, 114, 0), 958], [String.fromCharCode(117, 95, 50, 57, 95, 102, 97, 105, 108, 0), 356], [String.fromCharCode(119, 95, 51, 54, 95, 115, 116, 105, 112, 112, 101, 100, 0), 448]]);
            let dependenciesz = true;
            let smallorangemanX = String.fromCharCode(98, 121, 116, 101, 114, 117, 110, 95, 102, 95, 50, 56, 0);
            invite4 = `${(1 | (dependenciesz ? 4 : 1))}`;
            middles = (slider9.size ^ smallorangemanX.length) <= 44;
            slider9.set(smallorangemanX, slider9.size * smallorangemanX.length);
            dependenciesz = smallorangemanX.endsWith(`${middles}`);
         }
         invite4 += "2";
         if (4 < (4 ^ dependencyA.length) || 4 < dependencyA.length) {
            dependencyA = [2 ^ parseInt(`${libreactperfloggerjniE}`)];
         }
         let spinner_ = String.fromCharCode(116, 95, 51, 56, 95, 98, 111, 110, 106, 111, 117, 114, 0);
         let minivodE = true;
         libreactperfloggerjniE -= (parseFloat(`${(formM ? 5 : 4) ^ (minivodE ? 5 : 3)}`));
         spinner_ = `${spinner_.length - spinner_.length}`;
         minivodE = spinner_.length > 63;
         let iconclosewhitewithbg4 = invite4.length >= 7948903;
         do {
            invite4 = `${2 - parseInt(`${libreactperfloggerjniE}`)}`;
            if (iconclosewhitewithbg4) {
               break;
            }
         } while ((parseInt(`${libreactperfloggerjniE}`) <= invite4.length) && iconclosewhitewithbg4);
         let logina = String.fromCharCode(102, 95, 56, 48, 95, 114, 101, 108, 97, 121, 101, 100, 0);
         let modeb = libreactperfloggerjniE >= 9218523.0;
         do {
            let auto_n4m: Array<any> = [16, 171, 339];
            let iconclosewhitewithbgQ = 3.0;
            let smallbrightnessO = String.fromCharCode(115, 111, 99, 107, 115, 95, 97, 95, 49, 0);
            let scorepopsoundN = false;
            libreactperfloggerjniE -= (parseFloat(`${2 + (formM ? 2 : 3)}`));
            auto_n4m.push(smallbrightnessO.length);
            iconclosewhitewithbgQ -= parseFloat(`${parseInt(`${iconclosewhitewithbgQ}`)}`);
            smallbrightnessO = `${1 - smallbrightnessO.length}`;
            if (modeb) {
               break;
            }
         } while (modeb && ((dependencyA.length + parseInt(`${libreactperfloggerjniE}`)) < 5));
         for (let o = 0; o < 1; o++) {
            let actionM: Map<any, any> = new Map([[String.fromCharCode(97, 95, 53, 57, 95, 98, 97, 108, 97, 110, 99, 101, 115, 0), String.fromCharCode(121, 95, 55, 95, 105, 110, 116, 101, 114, 105, 111, 114, 0)], [String.fromCharCode(106, 95, 49, 48, 95, 119, 116, 118, 102, 105, 108, 101, 0), String.fromCharCode(98, 95, 53, 56, 95, 97, 117, 120, 105, 108, 105, 97, 114, 121, 0)], [String.fromCharCode(98, 95, 57, 56, 95, 99, 104, 97, 110, 103, 101, 104, 0), String.fromCharCode(108, 115, 112, 112, 111, 108, 121, 102, 95, 50, 95, 56, 48, 0)]]);
            let yellowscoreball9 = 4.0;
            let bodann = String.fromCharCode(109, 111, 100, 117, 108, 117, 115, 95, 57, 95, 54, 53, 0);
            invite4 += `${invite4.length}`;
            actionM.set(`${yellowscoreball9}`, actionM.size & 2);
            yellowscoreball9 -= parseFloat(`${parseInt(`${yellowscoreball9}`) % (Math.max(3, bodann.length))}`);
            bodann = `${bodann.length * parseInt(`${yellowscoreball9}`)}`;
         }
         exampleimage7 += arrowupj.length;
         if (giftbuttonG) {
            break;
         }
      } while (((selectionB.length * exampleimage7) >= 5 && (exampleimage7 * selectionB.length) >= 5) && giftbuttonG);
      arrowupj += "3";
      selectionB.push(3);
      for (let i = 0; i < 2; i++) {
         predictionwinL += `${((modeK ? 1 : 2) << (Math.min(Math.abs(2), 1)))}`;
      }
      if (3 >= (3 << (Math.min(2, arrowupj.length)))) {
         selectionB = [1 | parseInt(`${kuaishous}`)];
      }
      videoPlayerRef.current?.setPause(false);
   };

   const isEpisodeDownloaded = adultMode
      ? downloadedVod?.episodes.find((x) => x.vodUrlNid === currentEpisode)
         ?.status === KVCarouselSort.KVImagesPlaceholder
      : downloadedVod?.episodes.find(
         (x) =>
            x.vodSourceId === currentSourceId && x.vodUrlNid === currentEpisode
      )?.status === KVCarouselSort.KVImagesPlaceholder;





   const getPosition = () => {
      let othermatchdetailbgP = 2.0;
      let issuby = 4.0;
      let iconclosewhitewithbgJ = false;
      let pushl: Array<any> = [433, 366, 225];
      let typingt = 2.0;
      let libsentryX = 3.0;
      let libcxxcomponentsM = String.fromCharCode(117, 110, 105, 102, 105, 101, 100, 95, 121, 95, 50, 50, 0);
      let scorepopsoundO = String.fromCharCode(102, 95, 52, 56, 95, 115, 121, 110, 99, 104, 114, 111, 110, 105, 122, 97, 116, 105, 111, 110, 0);
      let typingV = 0.0;
      let empty1: Array<any> = [119, 861, 887];
      let actionI = String.fromCharCode(110, 97, 118, 105, 103, 97, 116, 105, 111, 110, 98, 97, 114, 95, 120, 95, 56, 48, 0);
      let pressureW = true;
      while (4.66 > (othermatchdetailbgP / 4.10) || 5 > (parseInt(`${othermatchdetailbgP}`) / (Math.max(10, pushl.length)))) {
         othermatchdetailbgP /= Math.max(3, ((iconclosewhitewithbgJ ? 2 : 3) | scorepopsoundO.length));
         break;
      }
      while ((scorepopsoundO.length >> (Math.min(Math.abs(2), 1))) <= 3 && (scorepopsoundO.length >> (Math.min(Math.abs(2), 3))) <= 4) {
         let iconcurrentmatch6 = String.fromCharCode(122, 95, 57, 57, 95, 97, 99, 113, 117, 105, 114, 101, 100, 0);
         let liveshared = 1.0;
         let imagenomoredatau = String.fromCharCode(107, 95, 55, 53, 95, 113, 115, 99, 97, 108, 101, 0);
         for (let z = 0; z < 3; z++) {
            let basketballmatchdetailbgj: Array<any> = [982, 202];
            let libfbm = 4;
            let iconcloseo: Array<any> = [793, 422, 588];
            let sports0: Array<any> = [855, 948, 484];
            let agreementL = String.fromCharCode(109, 97, 115, 107, 101, 100, 99, 108, 97, 109, 112, 95, 101, 95, 52, 51, 0);
            liveshared -= parseInt(`${liveshared}`);
            basketballmatchdetailbgj.push(iconcloseo.length | libfbm);
            libfbm /= Math.max(1, libfbm & 1);
            iconcloseo = [basketballmatchdetailbgj.length / (Math.max(iconcloseo.length, 6))];
            sports0.push(2);
            agreementL = `${3 >> (Math.min(5, iconcloseo.length))}`;
         }
         for (let r = 0; r < 1; r++) {
            liveshared *= parseInt(`${liveshared}`) - 3;
         }
         if (iconcurrentmatch6.length <= liveshared) {
            let const_vis: Map<any, any> = new Map([[String.fromCharCode(116, 105, 112, 95, 120, 95, 49, 0), 184], [String.fromCharCode(108, 105, 115, 116, 101, 100, 95, 56, 95, 56, 51, 0), 99], [String.fromCharCode(97, 95, 55, 95, 114, 101, 103, 97, 116, 104, 101, 114, 105, 110, 103, 0), 126]]);
            iconcurrentmatch6 += `${1 ^ parseInt(`${liveshared}`)}`;
            const_vis.set(`${const_vis.size}`, const_vis.size | 3);
         }
         let topicp = String.fromCharCode(111, 95, 50, 52, 95, 108, 105, 102, 116, 0);
         iconcurrentmatch6 = `${parseInt(`${liveshared}`) ^ 3}`;
         topicp += `${topicp.length}`;
         let trophyg = 2.0;
         let small_ = String.fromCharCode(116, 114, 97, 110, 115, 112, 111, 115, 101, 120, 95, 55, 95, 57, 54, 0);
         liveshared /= Math.max(4, parseInt(`${trophyg}`));
         trophyg += (parseFloat(`${String.fromCharCode(106, 0) == small_ ? small_.length : small_.length}`));
         pushl.push(pushl.length * scorepopsoundO.length);
         break;
      }
      let libtanJ = 7167018 <= pushl.length;
      do {
         let nativeB = 4;
         let constantsO = 1;
         for (let y = 0; y < 3; y++) {
            nativeB -= constantsO;
         }
         for (let d = 0; d < 1; d++) {
            constantsO <<= Math.min(4, Math.abs(nativeB ^ constantsO));
         }
         let modityC: Array<any> = [785, 841];
         nativeB -= 3 | constantsO;
         modityC.push(modityC.length);
         constantsO -= 3 / (Math.max(5, constantsO));
         constantsO -= nativeB;
         for (let m = 0; m < 2; m++) {
            constantsO <<= Math.min(1, Math.abs(1));
         }
         pushl.push(parseInt(`${issuby}`) / 2);
         if (libtanJ) {
            break;
         }
      } while (((pushl.length % 4) >= 4 && (pushl.length % (Math.max(4, 2))) >= 1) && libtanJ);

      if (componentRef.current != null) {

         while (!libcxxcomponentsM.includes(`${iconclosewhitewithbgJ}`)) {
            let iconplay3 = 0.0;
            if ((iconplay3 * iconplay3) == 5.61) {
               iconplay3 -= parseFloat(`${parseInt(`${iconplay3}`) | parseInt(`${iconplay3}`)}`);
            }
            let goals: Array<any> = [String.fromCharCode(117, 95, 51, 57, 95, 116, 114, 97, 110, 115, 108, 97, 116, 111, 110, 0), String.fromCharCode(104, 95, 53, 48, 95, 121, 99, 98, 99, 114, 0)];
            let minivoda: Array<any> = [806, 926, 335];
            iconplay3 *= parseFloat(`${goals.length}`);
            libcxxcomponentsM += `${((iconclosewhitewithbgJ ? 2 : 5) % (Math.max(parseInt(`${othermatchdetailbgP}`), 5)))}`;
            break;
         }
         let canvasV = String.fromCharCode(100, 95, 57, 49, 95, 109, 115, 109, 112, 101, 103, 0);
         while (2 < canvasV.length) {
            canvasV += `${1 >> (Math.min(1, canvasV.length))}`;
            break;
         }
         canvasV += `${(canvasV == String.fromCharCode(78, 0) ? canvasV.length : canvasV.length)}`;
         canvasV += "3";
         libcxxcomponentsM += `${(scorepopsoundO == String.fromCharCode(117, 0) ? parseInt(`${typingV}`) : scorepopsoundO.length)}`;
         if (4.27 < (othermatchdetailbgP + issuby)) {
            issuby -= 1 ^ parseInt(`${typingV}`);
         }
         componentRef.current.measure((x, y, width, height, pageX, pageY) => {

            for (let q = 0; q < 1; q++) {
               let ainit_25P = 3.0;
               ainit_25P += parseFloat(`${parseInt(`${ainit_25P}`)}`);
               let descv = String.fromCharCode(99, 108, 97, 115, 115, 110, 97, 109, 101, 95, 56, 95, 54, 48, 0);
               for (let g = 0; g < 3; g++) {
                  ainit_25P -= parseFloat(`${parseInt(`${ainit_25P}`)}`);
               }
               othermatchdetailbgP -= 3;
            }
            let stringr: Map<any, any> = new Map([[String.fromCharCode(115, 97, 108, 115, 97, 95, 109, 95, 50, 56, 0), false], [String.fromCharCode(112, 95, 52, 50, 95, 100, 101, 115, 116, 114, 111, 121, 0), true]]);
            let iconfeedbackz = String.fromCharCode(109, 95, 57, 52, 95, 118, 97, 105, 108, 97, 98, 105, 108, 105, 116, 121, 0);
            stringr = new Map([[`${stringr.size}`, iconfeedbackz.length]]);
            if (!Array.from(stringr.keys()).includes(`${stringr.size}`)) {
               stringr = new Map([[`${stringr.size}`, stringr.size % (Math.max(stringr.size, 8))]]);
            }
            stringr = new Map([[`${stringr.size}`, stringr.size & 2]]);
            othermatchdetailbgP -= scorepopsoundO.length;
            let plashP = libcxxcomponentsM.length >= 4995255;
            do {
               let styleM: Map<any, any> = new Map([[String.fromCharCode(100, 97, 114, 119, 105, 110, 95, 49, 95, 50, 0), 22], [String.fromCharCode(122, 95, 57, 49, 95, 98, 111, 111, 108, 101, 97, 110, 0), 675], [String.fromCharCode(117, 121, 118, 121, 116, 111, 121, 117, 118, 95, 118, 95, 50, 48, 0), 19]]);
               let libpangleflippedj: Array<any> = [427, 513];
               let orangetickl: Array<any> = [161, 931];
               let pangle9 = String.fromCharCode(99, 111, 108, 117, 109, 110, 108, 105, 115, 116, 95, 116, 95, 55, 54, 0);
               let weibos = String.fromCharCode(111, 95, 50, 48, 95, 100, 117, 112, 108, 105, 99, 97, 116, 101, 115, 0);
               orangetickl = [orangetickl.length % (Math.max(3, libpangleflippedj.length))];
               weibos += `${(weibos == String.fromCharCode(52, 0) ? weibos.length : weibos.length)}`;
               while ((libpangleflippedj.length / (Math.max(orangetickl.length, 4))) > 4 || (4 / (Math.max(4, orangetickl.length))) > 4) {
                  libpangleflippedj.push(libpangleflippedj.length * 2);
                  break;
               }
               styleM.set(pangle9, 1 << (Math.min(1, pangle9.length)));
               orangetickl.push(orangetickl.length);
               let dycreatoru = 1.0;
               styleM = new Map([[`${styleM.size}`, pangle9.length]]);
               dycreatoru += 3 * orangetickl.length;
               pangle9 += "3";
               libcxxcomponentsM = `${1 << (Math.min(5, empty1.length))}`;
               if (plashP) {
                  break;
               }
            } while (((libcxxcomponentsM.length * parseInt(`${libsentryX}`)) <= 5 || (libcxxcomponentsM.length | 5) <= 2) && plashP);
            console.log("Position:", { x, y, width, height, pageX, pageY });
            setRefPosition({ x: pageX, y: pageY, width: width, height: height });

            const screenHeight = Dimensions.get("window").height;

            iconclosewhitewithbgJ = !iconclosewhitewithbgJ;
            while (!iconclosewhitewithbgJ) {
               iconclosewhitewithbgJ = empty1.length >= 26;
               break;
            }
            typingV /= Math.max(parseFloat(`${3}`), 4);
            const distance = screenHeight - pageY - height;

            typingt /= Math.max(parseFloat(`${3}`), 1);
            for (let j = 0; j < 2; j++) {
               let combineD: Map<any, any> = new Map([[String.fromCharCode(97, 95, 50, 55, 95, 99, 111, 109, 112, 108, 101, 116, 105, 111, 110, 115, 0), 761], [String.fromCharCode(101, 95, 57, 56, 95, 102, 114, 111, 109, 102, 101, 0), 445]]);
               let description__W = String.fromCharCode(97, 103, 103, 114, 101, 103, 97, 116, 101, 95, 109, 95, 50, 57, 0);
               let dicelogou = String.fromCharCode(118, 95, 56, 48, 95, 115, 111, 97, 98, 111, 114, 116, 0);
               let predictionI = String.fromCharCode(100, 95, 56, 49, 95, 116, 101, 120, 116, 117, 114, 101, 100, 115, 112, 0);
               let unimplementedviewe = 3.0;
               if (predictionI == String.fromCharCode(105, 0) && dicelogou != String.fromCharCode(65, 0)) {
                  dicelogou += `${dicelogou.length & predictionI.length}`;
               }
               combineD = new Map([[`${combineD.size}`, combineD.size]]);
               let proxy_: Array<any> = [944, 476];
               predictionI += "3";
               proxy_.push(proxy_.length);
               let iconarrowrightblackG = true;
               let anytimex = false;
               dicelogou += `${(1 >> (Math.min(2, Math.abs((anytimex ? 5 : 2)))))}`;
               if (!predictionI.includes(`${anytimex}`)) {
                  let nextA = 2.0;
                  predictionI += `${(predictionI == String.fromCharCode(101, 0) ? parseInt(`${unimplementedviewe}`) : predictionI.length)}`;
                  nextA /= Math.max(5, parseFloat(`${parseInt(`${nextA}`) & 1}`));
               }
               for (let j = 0; j < 1; j++) {
                  dicelogou += `${((iconarrowrightblackG ? 3 : 3) ^ parseInt(`${unimplementedviewe}`))}`;
               }
               predictionI += `${1 & parseInt(`${unimplementedviewe}`)}`;
               iconarrowrightblackG = String.fromCharCode(56, 0) == predictionI;
               description__W = `${((anytimex ? 2 : 1) % (Math.max(8, (iconarrowrightblackG ? 5 : 3))))}`;
               anytimex = (unimplementedviewe * parseFloat(`${dicelogou.length}`)) > 59.73;
               let reducerF = String.fromCharCode(107, 95, 54, 56, 95, 102, 111, 114, 109, 97, 116, 115, 0);
               let watchnowbg1 = dicelogou.length <= 7929030;
               do {
                  dicelogou = `${reducerF.length}`;
                  if (watchnowbg1) {
                     break;
                  }
               } while ((dicelogou.startsWith(`${iconarrowrightblackG}`)) && watchnowbg1);
               let sans8 = combineD.size >= 9781762;
               do {
                  combineD.set(`${anytimex}`, reducerF.length);
                  if (sans8) {
                     break;
                  }
               } while (sans8 && (2.93 > (unimplementedviewe / (Math.max(4.7, 4)))));
               unimplementedviewe /= Math.max(parseFloat(`${1 + parseInt(`${unimplementedviewe}`)}`), 3);
               othermatchdetailbgP /= Math.max(2, combineD.size << (Math.min(pushl.length, 5)));
            }
            let chinav = empty1.length <= 6805961;
            do {
               let libreactperfloggerjnij = String.fromCharCode(116, 105, 103, 103, 108, 101, 95, 116, 95, 51, 48, 0);
               let runtimeP: Map<any, any> = new Map([[String.fromCharCode(114, 101, 97, 100, 105, 110, 105, 116, 95, 116, 95, 53, 0), String.fromCharCode(107, 95, 53, 52, 95, 104, 97, 115, 104, 0)], [String.fromCharCode(102, 95, 55, 57, 95, 97, 114, 101, 0), String.fromCharCode(99, 104, 101, 99, 107, 115, 95, 50, 95, 52, 51, 0)]]);
               let chinasameY = String.fromCharCode(118, 95, 54, 49, 95, 119, 101, 98, 118, 116, 116, 0);
               let downloadH: Array<any> = [805, 310];
               let bgvipsportm = String.fromCharCode(121, 95, 49, 54, 95, 98, 105, 116, 112, 97, 99, 107, 101, 100, 0);
               downloadH.push(chinasameY.length);
               let verticalw = String.fromCharCode(97, 109, 114, 118, 0) == chinasameY;
               do {
                  let share0 = 1;
                  let injuryU: Map<any, any> = new Map([[String.fromCharCode(98, 121, 112, 97, 115, 115, 95, 53, 95, 52, 52, 0), true], [String.fromCharCode(112, 114, 101, 115, 99, 97, 108, 101, 95, 117, 95, 52, 55, 0), false], [String.fromCharCode(105, 113, 109, 102, 95, 50, 95, 57, 56, 0), true]]);
                  let homeiconq = 3.0;
                  chinasameY = `${runtimeP.size / 2}`;
                  share0 &= 2;
                  injuryU.set(`${homeiconq}`, 2 + parseInt(`${homeiconq}`));
                  if (verticalw) {
                     break;
                  }
               } while (verticalw && (chinasameY.endsWith(`${downloadH.length}`)));
               while (2 <= runtimeP.size) {
                  bgvipsportm += "2";
                  break;
               }
               let robotoU = 4.0;
               let yellowk = 4.0;
               libreactperfloggerjnij = `${chinasameY.length & 3}`;
               runtimeP = new Map([[chinasameY, libreactperfloggerjnij.length + chinasameY.length]]);
               let libglogr: Map<any, any> = new Map([[String.fromCharCode(118, 95, 49, 50, 95, 115, 111, 108, 105, 100, 0), 208], [String.fromCharCode(97, 98, 115, 120, 95, 113, 95, 54, 53, 0), 997], [String.fromCharCode(102, 111, 117, 114, 95, 107, 95, 51, 57, 0), 154]]);
               let hometeamfieldI = String.fromCharCode(102, 117, 108, 108, 115, 99, 114, 101, 101, 110, 95, 52, 95, 56, 51, 0);
               downloadH.push(libglogr.size);
               libglogr = new Map([[hometeamfieldI, hometeamfieldI.length]]);
               let activityY = String.fromCharCode(99, 111, 108, 100, 95, 110, 95, 51, 55, 0);
               let friendsS = String.fromCharCode(108, 95, 49, 50, 95, 102, 114, 101, 113, 115, 0);
               while (activityY == chinasameY) {
                  chinasameY = "2";
                  break;
               }
               let league5: Array<any> = [113, 594, 293];
               let iconcurrentmatchK: Array<any> = [996, 489, 698];
               libreactperfloggerjnij = `${friendsS.length}`;
               iconcurrentmatchK.push(iconcurrentmatchK.length);
               for (let t = 0; t < 2; t++) {
                  let goall: Array<any> = [343, 571];
                  let hometeamfield0 = 4.0;
                  let private_mrZ = 1;
                  let libaneT = 3.0;
                  chinasameY += `${1 * parseInt(`${libaneT}`)}`;
                  goall.push(parseInt(`${hometeamfield0}`));
                  hometeamfield0 -= parseInt(`${hometeamfield0}`);
                  private_mrZ ^= goall.length;
                  libaneT /= Math.max(parseFloat(`${goall.length}`), 5);
               }
               for (let a = 0; a < 1; a++) {
                  libreactperfloggerjnij = `${friendsS.length}`;
               }
               league5.push(2);
               activityY += `${parseInt(`${robotoU}`) / 2}`;
               empty1.push(parseInt(`${libsentryX}`));
               if (chinav) {
                  break;
               }
            } while (chinav && (empty1.length < 4));
            setDistanceToBottom(distance);

            for (let e = 0; e < 1; e++) {
               actionI += `${parseInt(`${typingt}`)}`;
            }
            while (4 >= (pushl.length ^ 1) && (typingV * parseFloat(`${pushl.length}`)) >= 5.21) {
               pushl = [scorepopsoundO.length + actionI.length];
               break;
            }
            let tempnodata0 = 5386622.0 >= libsentryX;
            do {
               libsentryX -= (parseInt(`${issuby}`) * (iconclosewhitewithbgJ ? 5 : 2));
               if (tempnodata0) {
                  break;
               }
            } while ((4.82 > (1.1 - libsentryX) || 4 > (libcxxcomponentsM.length - parseInt(`${libsentryX}`))) && tempnodata0);
            console.log("distanceToBottom");

            libsentryX *= 1 << (Math.min(Math.abs(parseInt(`${typingV}`)), 1));
            for (let y = 0; y < 1; y++) {
               actionI = `${3 << (Math.min(Math.abs(parseInt(`${typingV}`)), 4))}`;
            }
            let tempnodatagifw = String.fromCharCode(113, 95, 48, 95, 115, 117, 112, 112, 114, 101, 115, 115, 105, 111, 110, 0);
            tempnodatagifw += `${tempnodatagifw.length % 1}`;
            let iconarrowrightc = 3.0;
            let defaultlogoi = 3.0;
            tempnodatagifw += `${1 | parseInt(`${iconarrowrightc}`)}`;
            pushl = [scorepopsoundO.length | parseInt(`${issuby}`)];
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
              source={require('@static/images/iconnewsshareDist.gif')}
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
                  isPlayRewardVideo={getDetails(UGreytickLoading.UShowless)?.isPlay}
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
                     source={require("@static/images/iconnewsshareDist.gif")}
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
                              wawa_dacccfaabfbcbadeebddcabacdffdbc_video.videoPlayerBannerViewAnalytics({
                                 playerType: adultMode ? "xVideo" : "normal",
                                 ads_id: id,
                                 ads_name: name,
                                 ads_slot_id: slot_id,
                                 ads_title: title,
                              });
                           }}
                           onPress={({ id, name, slot_id, title }) => {
                              wawa_dacccfaabfbcbadeebddcabacdffdbc_video.videoPlayerBannerClickAnalytics({
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
                                    showAds(UGreytickLoading.UIconclosewhiteLock);
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
                                    {!wawaLibglog.fakeIsVip(userState.user) && (
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
                                       source={require("@static/images/iconnewsshareDist.gif")}
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

                              wawaLayout.toName("我的下载").then(() => {
                                 videoPlayerRef.current?.setPause(false);
                              });
                           }}
                           activeEpisode={currentEpisode}
                           episodes={adultMode ? vod?.vod_play_list : foundSource}
                           onDownload={onDownloadVod}
                           rangeSize={EPISODE_RANGE_SIZE}
                           vodId={vod?.vod_id}
                           isVip={wawaLibglog.fakeIsVip(userState.user)}
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
