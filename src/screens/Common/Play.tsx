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
import FavoriteButton from "../../components/button/favoriteVodButton";
import FavoriteIcon from "@static/images/favorite.svg";
import VodDetailIcon from "@static/images/vod_detail.svg";
import DownloadIcon from "@static/images/download.svg";
import ScreenContainer from "../../components/container/screenContainer";
import {
  useTheme,
  useFocusEffect,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import { YSConfig } from "../../../ysConfig";

import { RootStackScreenProps } from "@type/navigationTypes";
import {
  BannerAdType,
} from "@type/ajaxTypes";
import { addVodToHistory, playVod } from "@redux/actions/vodActions";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/hooks";
import { RootState } from "@redux/store";
import {
  FavoriteVodReducerState,
  VodReducerState,
} from "@redux/reducers/vodReducer";
import SinaIcon from "@static/images/sina.svg";
import WeChatIcon from "@static/images/wechat.svg";
import QQIcon from "@static/images/qq.svg";
import PYQIcon from "@static/images/pyq.svg";
import MoreArrow from "@static/images/more_arrow.svg";
import SourceIcon from "@static/images/source_icon.svg";
import VodEpisodeSelectionModal from "../../components/modal/vodEpisodeSelectionModal";
// import FastImage from "react-native-fast-image";
import FastImage from "../../components/common/customFastImage";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  APP_NAME_CONST,
  DOWNLOAD_FEATURE_ENABLED,
  INVITE_FRIEND,
  PLAY_HTTP_SERVER_PORT,
  UMENG_CHANNEL,
} from "@utility/constants";
import { useQuery } from "@tanstack/react-query";
import ShowMoreVodButton from "../../components/button/showMoreVodButton";
import VodListVertical from "../../components/vod/vodListVertical";
import VodPlayer from "../../components/videoPlayer/vodPlayer";
import { FlatList } from "react-native-gesture-handler";
import { SettingsReducerState } from "@redux/reducers/settingsReducer";
import BingSearch from "../../components/container/bingSearchContainer";

import NoConnection from "../../components/common/noConnection";
import NetInfo from "@react-native-community/netinfo";
import { lockAppOrientation } from "@redux/actions/settingsActions";
import { AdsBannerContext } from "../../contexts/AdsBannerContext";
import { URL } from "react-native-url-polyfill";
import RNFetchBlob from "rn-fetch-blob";
import { BridgeServer } from "react-native-http-bridge-refurbished";
import { debounce } from "lodash";

import LinearGradient from "react-native-linear-gradient";
import VipIcon from "@static/images/vip-icon.svg";
import AdultVideoVipModal from "../../components/modal/adultVideoVipModal";
import VipRegisterBar from "../../components/adultVideo/vipRegisterBar";
import {
  disableAdultMode,
  enableAdultMode,
  incrementAdultVideoWatchTime,
  setIsPlayGuideShown,
  setIsPlayGuideShown2,
} from "@redux/actions/screenAction";

import UmengAnalytics from "../../../Umeng/UmengAnalytics";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenModel } from "@type/screenType";
import { VodApi } from "@api";

import DescriptionBottomSheet from "../../components/videoPlayer/Play/vodDescriptionBottomSheet";
import { VodDescription } from "../../components/videoPlayer/Play/vodDescription";

import { BannerContainer } from "../../components/container/bannerContainer";
import { CApi } from "@utility/apiService";
import { CEndpoint, CLangKey } from "@constants";
import BecomeVipOverlay from "../../components/modal/becomeVipOverlay";
import { AdsApi } from "../../api/ads";
import SimpleToast from "react-native-simple-toast";
import DownloadVodSelectionModal from "../../components/modal/downloadVodSelectionModal";
import DeviceInfo from "react-native-device-info";
import { addVideoToDownloadThunk } from "@redux/actions/videoDownloadAction";
import {
  DownloadStatus,
  DownloadVideoReducerState,
  VodDownloadType,
} from "@type/vodDownloadTypes";
import { CPopup } from "@utility/popup";
import { UserStateType } from "@redux/reducers/userReducer";
import { User, Vod, VodSource } from "@models";
import { CRouter } from "../../routes/router";
import VipGuideModal from "../../components/modal/vipGuide";
import AppsFlyerAnalytics from "../../../AppsFlyer/AppsFlyerAnalytic";
import VipGuideModal2 from "../../components/modal/vipGuide2";
let insetsTop = 0;
let insetsBottom = 0;

type VideoRef = {
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

const server = new BridgeServer("http_service", true); // http server for hosting no-ads m3u8

const getNoAdsUri = async (url: string, vodId: string) => {
  // fix for haiwaikan EXT-X-TARGETDURATION
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

  // const startTime = new Date().valueOf();
  // const parentUrl = url
  //   .split("/")
  //   .filter((part) => !part.includes(".m3u8"))
  //   .join("/"); // get https://domain/subfolder/subfolder
  // const videoSubfolder = parentUrl
  //   .replace("https://", "")
  //   .replace("http://", "");
  // // console.log('parent url ', parentUrl)

  // // const filePath =
  // //   RNFetchBlob.fs.dirs.DocumentDir +
  // //   '/' +
  // //   parentUrl
  // //     .replaceAll(':', '')
  // //     .replaceAll('//', '')
  // //     .replaceAll(/^\s+|\s+$/gm, '')
  // //     .replaceAll('.', '') +
  // //   '/index.m3u8';

  // const index = await RNFetchBlob.fetch("GET", url);
  // const masterPlaylistRelativeUrl = index
  //   .text()
  //   .toString()
  //   .split("\n")
  //   .filter((txt) => txt.includes(".m3u8"))
  //   .at(-1); // get subfolder/subfolder/mixed.m3u8
  // const masterPlaylistUrl = parentUrl + "/" + masterPlaylistRelativeUrl;

  // const playlistFolder = masterPlaylistRelativeUrl
  //   .split("/")
  //   .slice(0, -1)
  //   .join("/"); // get /subfolder/subfolder/

  // const playlistContent = (await RNFetchBlob.fetch("GET", masterPlaylistUrl))
  //   .text()
  //   .toString();

  // if (playlistContent.includes("file not found")) return url; // if file not found, return original url

  // const playlist = playlistContent.split("\n").map((line) => {
  //   if (line.endsWith(".ts")) {
  //     return parentUrl + "/" + playlistFolder + "/" + line;
  //   }
  //   return line;
  // });

  // let fragCounter = 0;
  // let adsLine: number[] = [];

  // playlist.forEach((line, index) => {
  //   if (line.endsWith(".ts")) {
  //     const indexTs = line.split("/").at(-1).split(".ts")[0];
  //     const indexTsInt = parseInt(
  //       indexTs.substring(indexTs.length - index.toString().length)
  //     );
  //     if (indexTsInt === fragCounter) {
  //       fragCounter++;
  //     } else {
  //       adsLine.push(index - 1);
  //       adsLine.push(index);
  //     }
  //   }
  // });
  // // console.log('ads line', adsLine)
  // const noAdsPlaylistContent = playlist.filter(
  //   (_, index) => !adsLine.includes(index)
  // );

  // // console.log(playlistContent.length, noAdsPlaylistContent.length)

  // server.get(`/${videoSubfolder}/index.m3u8`, async (req, res) => {
  //   res.send(
  //     200,
  //     "application/vnd.apple.mpegurl",
  //     noAdsPlaylistContent.join("\n")
  //   );
  // });

  // console.debug(
  //   "processing took ",
  //   (new Date().valueOf() - startTime) / 1000,
  //   "s"
  // );

  // return `http://localhost:${PLAY_HTTP_SERVER_PORT}/${videoSubfolder}/index.m3u8`;
};

const Play = ({ navigation, route }: RootStackScreenProps<"播放">) => {
  const { setRoute: setAdsRoute } = useContext(AdsBannerContext);
  useFocusEffect(() => {
    // for banner ads
    setAdsRoute(route.name);
  });

  const { colors, spacing, textVariants, icons } = useTheme();
  const dispatch = useAppDispatch();

  const vodReducer: VodReducerState = useAppSelector(
    ({ vodReducer }: RootState) => vodReducer
  );
  const vodFavouriteReducer: FavoriteVodReducerState = useAppSelector(
    ({ vodFavouritesReducer }: RootState) => vodFavouritesReducer
  );
  const settingsReducer: SettingsReducerState = useAppSelector(
    ({ settingsReducer }: RootState) => settingsReducer
  );
  const userState = useSelector<UserStateType>("userReducer");
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  const [isOffline, setIsOffline] = useState(false);

  const adultMode = route.params.player_mode === "adult" ? true : false;
  const [isShowAdOverlay, setShowAdOverlay] = useState(false);
  const [distanceToBottom, setDistanceToBottom] = useState<number>(0); // State to hold the distance to bottom

  useEffect(() => {
    if (adultMode) {
      dispatch(enableAdultMode());
    } else {
      dispatch(disableAdultMode());
    }
  }, []);

  const vod = vodReducer.playVod.vod;

  const { data: vodDetails, isFetching: isFetchingVodDetails } = useQuery({
    queryKey: ["vodDetails", route.params.vod_id, adultMode],
    queryFn: () => handleFetchVodDetail(route.params.vod_id.toString()),
  });

  const handleFetchVodDetail = async (vodId: string) => {
    const promise = async () => downloadedVod?.vod;

    let vodResult: Vod | undefined;

    if (isOffline) {
      console.debug("is offline");
      vodResult = await promise();
    } else {
      console.debug("not offline");
      vodResult = await fetchVodDetails(vodId);
    }

    if (vodResult) {
      dispatch(playVod(vodResult));
    }

    return vodResult;
  };

  const fetchVodDetails = useCallback(
    (vodId: string) => VodApi.getDetail(
      vodId.toString() ?? "",
      '',
      '',
      {
        xMode: adultMode,
      }
    ).then((data) => {
      const isRestricted = data.vod_restricted === 1;
      if (isRestricted) {
        videoPlayerRef.current?.setPause(true);
        // use setTimeout to prevent video non pause before unmount the screen
        setTimeout(() => {
          setVodRestricted(isRestricted);
        }, 100);
      } else {
        setVodRestricted(isRestricted);
      }

      return data;
    }),
    []);

  const [initTime, setInitTime] = useState(0);
  const isFavorite = vodFavouriteReducer.favorites.some(
    (x) => x.vod_id === vod?.vod_id
  );
  const [currentEpisode, setCurrentEpisode] = useState(
    vod?.episodeWatched === undefined ? 0 : vod.episodeWatched
  );

  const [isVodRestricted, setVodRestricted] = useState(false);

  const [isCollapsed, setIsCollapsed] = useState(true);

  const currentTimeRef = useRef<number>(0);
  const episodeRef = useRef<FlatList>(null);
  const videoPlayerRef = useRef() as React.MutableRefObject<VideoRef>;
  const currentEpisodeRef = useRef<number>();
  const currentSourceRef = useRef<number>();
  const sourceRef = useRef<FlatList>(null);

  const [dismountPlayer, setDismountPlayer] = useState(false);

  const [isShowSheet, setShowSheet] = useState(false);
  const isVip = true//User.isVip(userState.user);

  const [isReadyPlay, setReadyPlay] = useState(false);

  const [currentSourceId, setCurrentSourceId] = useState(
    vod?.sourceWatched === undefined ? 0 : vod.sourceWatched
  );

  const [vodSources, setVodSources] = useState<VodSource[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVodPlayerLoading, setIsVodPlayerLoading] = useState(false);
  const [shouldResumeAfterLoad, setShouldResumeAfterLoad] = useState(false);

  const [isShowDescription, setShowDescription] = useState(false);
  const [isShowDlEpisode, setShowDlEpisode] = useState(false);

  const [bannerAd, setBannerAd] = useState<BannerAdType>();

  const [refPosition, setRefPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const componentRef = useRef<View>(null); // Create a ref for the component
  const [vipGuideModal, setVipGuideModal] = useState(false);
  const [vipGuideModalDL, setVipGuideModalDL] = useState(false);
  const [vipGuideModalOpen, setVipGuideModalOpen] = useState(false);
  const screenWidth = Dimensions.get("window");

  const downloadedVod: VodDownloadType | undefined = useAppSelector(
    ({ downloadVideoReducer }: RootState) => {
      return downloadVideoReducer.downloads.find(
        (download) => download.vod.vod_id === vod?.vod_id
      );
    }
  );
  const episode = adultMode
    ? downloadedVod?.episodes.find(
      (ep) =>
        ep.vodUrlNid === currentEpisode &&
        ep.status === DownloadStatus.COMPLETED
    )
    : downloadedVod?.episodes.find(
      (ep) =>
        ep.vodSourceId === currentSourceId &&
        ep.vodUrlNid === currentEpisode &&
        ep.status === DownloadStatus.COMPLETED
    );

  //For pausing video player when switch source
  const onPressSource = useCallback(
    (itemId: any) => {
      if (itemId !== currentSourceId) {
        setCurrentSourceId(itemId);
        currentTimeRef.current = 0; // Reset current time when switching sources
        if (videoPlayerRef.current) {
          videoPlayerRef.current?.setPause(true);
          setShouldResumeAfterLoad(true);
        }
      }
    },
    [currentSourceId]
  );

  const onAdsMount = () => {

    if (screenState.interstitialShow == true) {
      videoPlayerRef.current?.setPause(true); // pause video
    }

    // setTimeout(() => {
    //   getPosition();
    // }, 250);

    setTimeout(() => {
      if (screenState.isPlayGuideShown2 == false && !isVip) {
        setTimeout(() => {
          videoPlayerRef.current?.setPause(true); // pause video
          setVipGuideModalDL(true);
          setVipGuideModalOpen(true);
          dispatch(setIsPlayGuideShown2(true));
        }, 50);

        if (screenState.isPlayGuideShown == false && !isVip) {
          setTimeout(() => {
            setVipGuideModal(true);
            setVipGuideModalOpen(true);
            dispatch(setIsPlayGuideShown(true));
          }, 20);
        }
      }
    }, 850);
  };

  // const renderSources = useCallback(
  //   ({ item, index }) => (
  //     <TouchableOpacity
  //       style={{
  //         flexDirection: "row",
  //         // justifyContent: "space-between",
  //         alignItems: "center",
  //         backgroundColor:
  //           currentSourceId === item.source_id ? colors.text : colors.search,
  //         paddingVertical: 8,
  //         paddingHorizontal: 8,
  //         // minWidth: 70,
  //         marginRight: spacing.xs,
  //         ...styles.episodeBtn,
  //       }}
  //       // onPress={() => onPressEpisode(item.id)}
  //       onPress={() => onPressSource(item.source_id)}
  //     >
  //       <SourceIcon
  //         style={{
  //           alignSelf: "center",
  //           marginRight: 3,
  //         }}
  //         color={colors.primaryContrast}
  //       />
  //       <Text
  //         numberOfLines={1}
  //         style={{
  //           flex: 1,
  //           fontSize: 15,
  //           textAlign: "center",
  //           verticalAlign: "bottom",
  //           fontWeight: "600",
  //           color:
  //             currentSourceId === item.source_id
  //               ? colors.primaryContrast
  //               : colors.muted,
  //         }}
  //       >
  //         {item.source_name}
  //       </Text>
  //     </TouchableOpacity>
  //   ),
  //   [currentSourceId]
  // );

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
        // vod?.vod_play_list
        //   ? vod.vod_play_list.url_count
        foundSource
          ? foundSource.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE
      ),
    [currentEpisode, showEpisodeRangeStart, vod, currentSourceId]
  );
  const onShare = async () => {
    try {
      // ========== for analytics - start ==========
      UmengAnalytics.playsShareClicksAnalytics();
      // ========== for analytics - end ==========

      let msg = `《${vod?.vod_name
        }》高清播放${"\n"}https://yingshi.tv/index.php/vod/play/id/${vod?.vod_id
        }/sid/1/nid/${currentEpisode + 1
        }.html${"\n"}${APP_NAME_CONST}-海量高清视频在线观看`;

      if (APP_NAME_CONST == "爱美剧") {
        msg = `海量视频内容 随时随地 想看就看 ${"\n"}https://xiangkantv.net/share.html`;
      }

      const result = await Share.share({
        message: msg,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const checkConnection = async () => {
    const state = await NetInfo.fetch();
    const offline = !(state.isConnected && state.isInternetReachable);
    setIsOffline(offline);

    if (offline) {
      setDismountPlayer(false); //dismount player when offline
    }
    // console.log("player is dismounted")
  };

  useEffect(() => {
    if (vod) {
      setInitTime(vod?.timeWatched);
      setReadyPlay(false);

      // console.debug(vod.vod_pic)

      // ========== for analytics - start ==========
      UmengAnalytics.playsViewsAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
        isXmode: adultMode,
      });
      // ========== for analytics - end ==========
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

  const fetchBannerAd = async () => {
    const bannerRes = await AdsApi.getBannerAd(adultMode ? 113 : 112);
    const banner = bannerRes.ads;

    if (banner) {
      setBannerAd(banner);
    } else {
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
      // setVod(vod);
      dispatch(playVod(vod, undefined, currentEpisode, currentSourceId));
    }

    const isRestricted = vodDetails?.vod_restricted === 1;

    if (isRestricted) {
      videoPlayerRef.current?.setPause(true);
      // use setTimeout to prevent video non pause before unmount the screen
      setTimeout(() => {
        setVodRestricted(isRestricted);
      }, 100);
    } else {
      setVodRestricted(isRestricted);
    }

    if (!!vod?.vodSourceId) {
      // if redux got, use it from redux
      // console.debug('redux source id ', vod.vodSourceId)
      setCurrentSourceId(vod.vodSourceId);
    } else {
      // else just use from api
      // console.debug('using api preferred value')
      setCurrentSourceId(vodDetails?.preferred_source_id);
    }

    // setCurrentEpisode(Math.min((vodDetails?.vod_play_list.url_count ?? 1) - 1 , vod?.episodeWatched ?? 0))

    if (
      vodDetails &&
      vodDetails.vod_sources &&
      vodDetails.vod_sources.length > 0
    ) {
      setVodSources(vodDetails.vod_sources);
      // setCurrentSourceId(vodDetails.preferred_source_id)
      // Other operations or state changes related to vodDetails...
    }
  }, [vodDetails]);

  const fetchVod = () => {
    return VodApi.getList({
      category: vod?.vod_class?.split(",").shift(),
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
    }).then((data) => {
      return data.List as Vod[];
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
    enabled: !adultMode && !isOffline,
  });

  const fetchSVod = () => VodApi.getList({
    // vod_source_name: vod?.vod_source_name,
    category: vod?.type_name,
    // tid: vod?.type_id.toString() ?? "",
    limit: 6,
    // rand: 1,
    xMode: true,
  }).then((data) => data.List);

  const {
    data: suggestedSVods,
    isFetching: isFetchingSuggestedSVod,
  } = useQuery({
    queryKey: ["relatedSVods", vod?.vod_id],
    queryFn: () => fetchSVod(),
    enabled: adultMode && !isOffline,
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
    // setIsRefreshing(true);
    await refetch();
    // setIsRefreshing(false);
    return;
  }, []);

  const saveVodToHistory = (vod: any) => {
    // console.log('something')
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
    // setInitTime(currentTimeRef.current = 0)
  };

  useEffect(() => {
    setIsCollapsed(true);
    // episodeRef?.current?.scrollToOffset({
    //   offset: getOffSet(currentEpisode),
    //   animated: true,
    // });
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
        // setDismountPlayer(true);
        videoPlayerRef.current?.setPause(true);
        if (
          vodSources &&
          //START HERE, SAVE POINT
          // vod?.vod_play_list.urls?.find((url) => url.nid === currentEpisode)
          //   ?.url
          vodSources
            ?.find(({ source_id }) => source_id === currentSourceId)
            ?.vod_play_list.urls?.find((url) => url.nid === currentEpisode)
        ) {
          saveVodToHistory(vod);
          setInitTime(currentTimeRef.current);
          // setInitTime(currentTimeRef.current=0);
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
            currentEpisode === item.nid ? colors.text : colors.search,
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
    if (episodeRef.current) {
      episodeRef.current.scrollToIndex({
        index: currentEpisode,
        animated: true,
      });
    }
  };

  const handleModalClose = useCallback(() => {
    setShowSheet(false);
  }, []);

  const onConfirmEpisodeSelection = (selectedEpisodeId: number) => {
    setCurrentEpisode(selectedEpisodeId);
    currentTimeRef.current = 0; // Reset the current time to 0
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

  // useInterstitialAds();

  const [vodUri, setVodUri] = useState("");

  const debounceSetVodUri = useCallback(
    debounce((uri) => setVodUri(uri), 100),
    []
  );

  const setMinimumOfMaximumEpisode = () => {
    // console.debug('total url', foundSource?.url_count - 1)
    // console.debug('redux', vod?.episodeWatched)
    const maxEpisode = (foundSource?.url_count ?? 1) - 1;
    const reduxCurrentEpisode = vod?.episodeWatched ?? 1;
    if (reduxCurrentEpisode >= maxEpisode) {
      setCurrentEpisode(Math.min(maxEpisode, reduxCurrentEpisode));
    } else if (currentEpisode >= maxEpisode) {
      setCurrentEpisode(Math.min(maxEpisode, currentEpisode));
    }
  };

  useEffect(() => {
    if (!!foundSource) {
      // only after source is found
      setMinimumOfMaximumEpisode();
    }
    // when source changes, choose the minimum of the max episode
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
    vodUrl = vod?.vod_play_url ?? ''
    // vodUrl = vod?.vod_play_list?.urls?.find((url) => url.nid === currentEpisode)
    //   ?.url;
  }

  const vodPlayerTitle = screenState.isPlayerFullScreen
    ? `${vod?.vod_name} - ${foundSource?.urls?.at(currentEpisode)?.name ?? ""}`
    : vod?.vod_name;

  const focused = useIsFocused();

  useEffect(() => {
    checkConnection();

    if (!!vodUrl && !!vod?.vod_id) {
      // console.debug('vod url is', vodUrl)
      if (
        downloadedVod &&
        episode &&
        episode.status === DownloadStatus.COMPLETED
      ) {
        // CPopup.showToast('本地播放')
        setVodUri(`file://${episode.videoPath}`);
      } else {
        // if (DOWNLOAD_FEATURE_ENABLED){
        //   CPopup.showToast("远程播放")
        // }

        getNoAdsUri(vodUrl, vod?.vod_id)
          .then((uri) => {
            // console.debug("successfully modified playlist content", uri);
            setVodUri(uri);
          })
          .catch((err) => {
            setVodUri(vodUrl);
            console.error("something went wrong", err);
          });
      }
    }

    // return () => {
    //   // console.log('stop server')
    //   setVodUri("");
    // };
  }, [vodUrl, focused]);

  useEffect(() => {
    if (vodUri) {
      server.listen(PLAY_HTTP_SERVER_PORT);
    }
    return () => {
      server.stop(); // stop server when unmount
    };
  }, [vodUri]);

  // ========== for analytics - start ==========
  const onReadyForDisplay = () => {
    if (vod && !isReadyPlay) {
      UmengAnalytics.playsPlaysTimesAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
        isXmode: adultMode,
      });

      AppsFlyerAnalytics.playsPlaysTimesAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
        isXmode: adultMode,
      });
    }

    setReadyPlay(true);

    if (shouldResumeAfterLoad && videoPlayerRef.current) {
      videoPlayerRef.current?.setPause(false); // Resume playing the video
      setShouldResumeAfterLoad(false); // Reset the flag after resuming
    }
  };
  // ========== for analytics - end ==========
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
    //   setShowAdOverlay(true);
    //   videoPlayerRef.current?.setPause(true);
  };

  // const onCloseAdOverlay = () => {
  //   setShowAdOverlay(false);
  //   videoPlayerRef.current?.setPause(false);
  // };

  const isEpisodeDownloaded = adultMode
    ? downloadedVod?.episodes.find((x) => x.vodUrlNid === currentEpisode)
      ?.status === DownloadStatus.COMPLETED
    : downloadedVod?.episodes.find(
      (x) =>
        x.vodSourceId === currentSourceId && x.vodUrlNid === currentEpisode
    )?.status === DownloadStatus.COMPLETED;

  // useEffect(() => {
  //   getPosition();
  // }, [componentRef]);

  const getPosition = () => {
    if (componentRef.current != null) {
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {
        console.log("Position:", { x, y, width, height, pageX, pageY });
        setRefPosition({ x: pageX, y: pageY, width: width, height: height });

        const screenHeight = Dimensions.get("window").height;
        const distance = screenHeight - pageY - height;
        setDistanceToBottom(distance);
        console.log("distanceToBottom");
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
              source={require('@static/images/loading-spinner.gif')}
              resizeMode={'contain'}
            />
          </View>
        )} */}
        {/* if isVodRestricted, show bing search */}
        {isVodRestricted && vod && !isOffline && <BingSearch vod={vod} />}

        {!isVodRestricted && !dismountPlayer && !(isOffline && !episode) && (
          <VodPlayer
            key={vodUri} // remount on uri change
            vod_url={vodUri}
            vod_url_header={vod?.url_header}
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
            // showGuide={settingsReducer.showVodPlayerGuide}
            showGuide={false}
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
            // setNavBarOptions={setNavBarOptions}
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
              source={require("@static/images/loading-spinner.gif")}
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
                    UmengAnalytics.videoPlayerBannerViewAnalytics({
                      playerType: adultMode ? "xVideo" : "normal",
                      ads_id: id,
                      ads_name: name,
                      ads_slot_id: slot_id,
                      ads_title: title,
                    });
                  }}
                  onPress={({ id, name, slot_id, title }) => {
                    UmengAnalytics.videoPlayerBannerClickAnalytics({
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
              // contentContainerStyle={{ marginTop: spacing.s }}
              contentInsetAdjustmentBehavior="automatic"
            >
              <View style={{ ...styles.descriptionContainer2, gap: spacing.m }}>
                <View style={styles.videoDescription}>
                  {/* {adultMode ? (
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
                  )} */}

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

                          return `${CLangKey.update.tr()}：${dateValue}`;
                        } catch (error) {
                          console.error("Error while formatting date:", error);
                          return `${CLangKey.update.tr()}：N/A`; // or any default value you want to display on error
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
                            {CLangKey.share.tr()}：
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
                <View style={styles.videoDescription}>
                  <FavoriteButton
                    initialState={isFavorite}
                    vod={vod}
                    showName={false}
                    buttonStyle={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexShrink: 1,
                    }}
                    leftIcon={
                      <View
                        style={{
                          display: "flex",
                          alignItems: "center",
                          alignContent: "center",
                          gap: spacing.xxs,
                        }}
                      >
                        <FavoriteIcon
                          width={24}
                          height={24}
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
                            {CLangKey.doneFavourite.tr()}
                          </Text>
                        ) : (
                          <Text
                            style={{
                              ...textVariants.subBody,
                              color: colors.muted,
                              paddingBottom: 3,
                            }}
                          >
                            {CLangKey.favourite.tr()}
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
                          // flexDirection: "row",
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
                            color: colors.muted,
                            paddingBottom: 3,
                          }}
                        >
                          {CLangKey.details.tr()}
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
                          // flexDirection: "row",
                          alignItems: "center",
                          gap: spacing.xxs,
                        }}
                      >
                        <DownloadIcon
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
                          {CLangKey.download.tr()}
                        </Text>
                        {/* {!isVip && (
                          <View style={{ width: 12 }}>
                            <VipIcon
                              width={12}
                              height={12}
                              style={{ ...styles.legend }}
                            />
                          </View>
                        )} */}
                      </View>
                    </TouchableOpacity>
                  )}
                </View>

                {/* show 选集播放 section when avaiable episode more thn 1 */}
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
                          source={require("@static/images/loading-spinner.gif")}
                          resizeMode={"contain"}
                        />
                      </View>
                    </>
                  ) : (
                    <>
                      {/* For multiple source UI */}
                      {/* {!adultMode && (
                        <>
                          <View
                            style={{ ...styles.spaceApart, gap: spacing.l }}
                          >
                            <Text style={textVariants.body}>{CLangKey.playSource.tr()}</Text>
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
                            // onContentSizeChange={onContentSizeChange}
                            ListFooterComponent={
                              <View style={{ paddingHorizontal: 20 }} />
                            }
                            keyExtractor={(item, index) => index.toString()}
                          />
                        </>
                      )} */}
                      {/* For multiple source UI */}
                      {foundSource !== undefined && (
                        <>
                          <View
                            style={{ ...styles.spaceApart, gap: spacing.l }}
                          >
                            <Text style={textVariants.body}>{CLangKey.anthology.tr()}</Text>
                            <TouchableOpacity
                              style={styles.share}
                              onPress={() => {
                                setShowSheet(true); // render list only when modal is up
                              }}
                            >
                              <Text
                                style={{
                                  color: colors.muted,
                                  fontSize: 15,
                                }}
                              >
                                {`${foundSource
                                  ? `1-${foundSource.url_count || 0} ${CLangKey.episodes.tr()}`
                                  : "No episodes available"
                                  }`}
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
                            // data={vod?.vod_play_list.urls?.slice(
                            //   showEpisodeRangeStart,
                            //   showEpisodeRangeEnd
                            // )}
                            data={foundSource?.urls?.slice(
                              showEpisodeRangeStart,
                              showEpisodeRangeEnd
                            )}
                            renderItem={renderEpisodes}
                            // onContentSizeChange={onContentSizeChange}
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
                                  // text={`相关${vod?.vod_class ?? '影片'}`}
                                  text={CLangKey.relatedX.tr({ x: CLangKey.suggestion.tr() })}
                                  onPress={() => {
                                    //  videoPlayerRef.current?.setPause(true);
                                    setTimeout(() => {
                                      navigation.navigate("午夜场剧情", {
                                        // class: item.vod_list[0].vod_class
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
                                text={CLangKey.relatedX.tr({ x: vod?.type_name ?? '' })}
                                onPress={() => {
                                  //  videoPlayerRef.current?.setPause(true);
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
            {settingsReducer.appOrientation === "PORTRAIT" && ( // only show if portrait
              <>
                <VodEpisodeSelectionModal
                  isVisible={isShowSheet}
                  handleClose={handleModalClose}
                  activeEpisode={currentEpisode}
                  episodes={foundSource}
                  onCancel={() => {
                    setShowSheet(false);
                  }}
                  // onConfirm={(id: number) => {
                  //   setCurrentEpisode(id);
                  //   handleModalClose();
                  // }}
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

                    CRouter.toName("我的下载").then(() => {
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
        {/* display vip guide */}
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
                  <DownloadIcon
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
                    {CLangKey.download.tr()}
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
        vod_year={vod?.vod_year}
        vod_area={vod?.vod_area}
        vod_class={vod?.vod_class?.split(",").join(" ")}
        vod_time_add={vod?.vod_time_add}
      />

      {/* <BecomeVipOverlay
        setShowBecomeVIPOverlay={setShowAdOverlay}
        showBecomeVIPOverlay={isShowAdOverlay}
        isJustClose={true}
        selectedTab="common"
        onClose={onCloseAdOverlay}
      /> */}

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
