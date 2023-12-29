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
} from "react-native";
import FavoriteButton from "../../components/button/favoriteVodButton";
import FavoriteIcon from "@static/images/favorite.svg";
import ScreenContainer from "../../components/container/screenContainer";
import { useTheme, useFocusEffect, useRoute } from "@react-navigation/native";
import { YSConfig } from "../../../ysConfig";

import { RootStackScreenProps } from "@type/navigationTypes";
import {
  AdultVodListType,
  SuggestedVodType,
  VodSourceType,
} from "@type/ajaxTypes";
import { addVodToHistory, playVod } from "@redux/actions/vodActions";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
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
import useInterstitialAds from "@hooks/useInterstitialAds";
import { URL } from "react-native-url-polyfill";
import RNFetchBlob from "rn-fetch-blob";
import { userModel } from "@type/userType";
import { BridgeServer } from "react-native-http-bridge-refurbished";
import { debounce } from "lodash";

import LinearGradient from "react-native-linear-gradient";
import VipIcon from '@static/images/vip-icon.svg'
import AdultVideoVipModal from "../../components/modal/adultVideoVipModal";
import VipRegisterBar from "../../components/adultVideo/vipRegisterBar";
import { disableAdultMode, enableAdultMode, incrementAdultVideoWatchTime } from "@redux/actions/screenAction";

import useAnalytics from "@hooks/useAnalytics";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenModel } from "@type/screenType";
import { VodApi } from "@api";
import DescriptionBottomSheet from "../../components/videoPlayer/Play/vodDescriptionBottomSheet"
import { VodDescription } from "../../components/videoPlayer/Play/vodDescription";

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

  const isPlaylistFile = m3u8Content.match(/#EXT-X-TARGETDURATION:\d*/) !== null

  if (!isPlaylistFile) {
    return url;
  } else {
    const modifiedPlaylist = m3u8Content.replace(/#EXT-X-TARGETDURATION:\d*/, '#EXT-X-TARGETDURATION:999')
    const uniqueIdentifier = url.split('/').at(-1)?.replace('.m3u8', '')

    server.get(`/${uniqueIdentifier}/index.m3u8`, async (req, res) => {
      res.send(
        200,
        "application/vnd.apple.mpegurl",
        modifiedPlaylist
      );
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
  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer
  );
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  )
  const adultMode = route.params.player_mode === 'adult' ? true : false

  useEffect(() => {
    if (route.params.player_mode === 'adult') {
      dispatch(enableAdultMode());
    } else {
      dispatch(disableAdultMode());
    }
  }, [])

  const vod = vodReducer.playVod.vod;

  // const [vod, setVod] = useState(vodReducer.playVod.vod);
  const [initTime, setInitTime] = useState(0);
  const isFavorite = vodFavouriteReducer.favorites.some(
    (x) => x.vod_id === vod?.vod_id
  );
  const [currentEpisode, setCurrentEpisode] = useState(
    vod?.episodeWatched === undefined ? 0 : vod.episodeWatched
  );

  // ATRNSDK.setLogDebug(true);

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
  const videoPlayerRef = useRef() as React.MutableRefObject<VideoRef>;
  const currentEpisodeRef = useRef<number>();
  const currentSourceRef = useRef<number>();
  const sourceRef = useRef<FlatList>(null);

  const [dismountPlayer, setDismountPlayer] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isShowSheet, setShowSheet] = useState(false);
  const isVip = !(Number(userState.userMemberExpired) <=
    Number(userState.userCurrentTimestamp) ||
    userState.userToken === "")

  const {
    playsViewsAnalytics,
    playsPlaysTimesAnalytics,
    playsShareClicksAnalytics,
  } = useAnalytics();
  const [isReadyPlay, setReadyPlay] = useState(false);

  //logic and function for multiple sources

  const [currentSourceId, setCurrentSourceId] = useState(vod?.sourceWatched === undefined ? 0 : vod.sourceWatched);
  const [currentQuality, setCurrentQuality] = useState(vod?.sourceWatched === undefined ? 0 : vod.sourceWatched);
  const [vodSources, setVodSources] = useState<VodSourceType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVodPlayerLoading, setIsVodPlayerLoading] = useState(false);
  const [shouldResumeAfterLoad, setShouldResumeAfterLoad] = useState(false)
  const [isShowDescription, setShowDescription] = useState(false);

  //For pausing video player when switch source
  const onPressSource = useCallback((itemId: any) => {
    if (itemId !== currentSourceId) {
      setCurrentSourceId(itemId);
      currentTimeRef.current = 0; // Reset current time when switching sources
      if (videoPlayerRef.current) {
        videoPlayerRef.current.setPause(true);
        setShouldResumeAfterLoad(true)
      }
    }
  }, [currentSourceId]);

  // For adding loading spinner before load player
  // const onPressSource = useCallback((itemId: any) => {
  //   if (itemId !== currentSourceId) {
  //     setIsLoading(true); // Set loading state to true when switching sources
  //     setCurrentSourceId(itemId);
  //     // currentSourceRef.current = itemId;
  //     currentTimeRef.current = 0;
  //     if (videoPlayerRef.current) {
  //       videoPlayerRef.current.setPause(true);
  //     }
  //     // Simulate loading for 2 seconds before displaying the player again
  //     setTimeout(() => {
  //       setIsLoading(false); // Set loading state to false after 2 seconds (simulating loading)
  //     }, 2000);
  //   }
  // }, [currentSourceId]);

  const renderSources = useCallback(
    ({ item }) => (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          // justifyContent: "space-between",
          alignItems: 'center',
          backgroundColor:
            currentSourceId === item.source_id ? colors.primary : colors.search,
          paddingVertical: 8,
          paddingHorizontal: 8,
          // minWidth: 70,
          marginRight: spacing.xs,
          ...styles.episodeBtn,
        }}
        // onPress={() => onPressEpisode(item.id)}
        onPress={() => onPressSource(item.source_id)}
      >
        <SourceIcon
          style={{
            alignSelf: 'center',
            marginRight: 3,
            marginBottom: -3,
          }} />
        <Text
          numberOfLines={1}
          style={{
            flex: 1,
            fontSize: 15,
            textAlign: "center",
            fontWeight: "600",
            color: currentSourceId === item.source_id ? colors.selected : colors.muted,
          }}
        >
          {/* {item.name} */}
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

  const foundSource = vodSources.find(({ source_id }) => source_id === currentSourceId)?.vod_play_list
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
      playsShareClicksAnalytics();
      // ========== for analytics - end ==========

      let msg = `《${vod?.vod_name
        }》高清播放${"\n"}https://yingshi.tv/index.php/vod/play/id/${vod?.vod_id
        }/sid/1/nid/${currentEpisode + 1
        }.html${"\n"}${APP_NAME_CONST}-海量高清视频在线观看`

      if (APP_NAME_CONST == '爱美剧') {
        msg = `海量视频内容 随时随地 想看就看 ${"\n"}https://xiangkantv.net/share.html`
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
    setDismountPlayer(false); //dismount player when offline
    // console.log("player is dismounted")
  };
  // useEffect(() => {
  //   // cleanup for svod 


  //   // check previous screen is watchanytime or not
  //   const previousPage = navigation.getState().routes[navigation.getState().routes.length - 2];
  //   // tab index 1 is '随心看'
  //   const isFromWatchAnytime = previousPage.name === 'Home' && previousPage.state?.index === 1;

  //   return () => {
  //     // is not from '随心看' disable
  //     if (!isFromWatchAnytime) {
  //       dispatch(disableAdultMode())
  //     }
  //   }
  // }, [])

  // useEffect(() => {
  //   let interval: any;
  //   if (adultMode && !isVip) {
  //     interval = setInterval(() => {
  //       dispatch(incrementAdultVideoWatchTime())
  //     }, 1000)
  //   }
  //   return () => clearInterval(interval)
  // }, [adultMode])

  useEffect(() => {
    if (vod) {
      setInitTime(vod?.timeWatched);
      setReadyPlay(false);

      // ========== for analytics - start ==========
      playsViewsAnalytics({
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

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
    const eventName = "watch_video";
    const eventValues = {
      vod_name: vod?.vod_name,
    };

    // console.log("HELLLOOO===================");
    // appsFlyer.logEvent(
    //   eventName,
    //   eventValues,
    //   res => {
    //     // console.log(res);
    //   },
    //   err => {
    //     console.error(err);
    //   },
    // );
  }, []);

  const fetchVodDetails = useCallback(() =>
    VodApi.getDetail(vod?.vod_id.toString() ?? '', {
      xMode: adultMode,
    }).then((data) => {
      const isRestricted = data.vod_restricted === 1;
      if (isRestricted) {
        videoPlayerRef.current.setPause(true);
        // use setTimeout to prevent video non pause before unmount the screen
        setTimeout(() => {
          setVodRestricted(isRestricted);
        }, 100);
      } else {
        setVodRestricted(isRestricted);
      }

      return data;
    }), [vod]);

  const { data: vodDetails, isFetching: isFetchingVodDetails } = useQuery({
    queryKey: ["vodDetails", vod?.vod_id],
    queryFn: () => fetchVodDetails(),
  });

  useEffect(() => {
    if (vod !== undefined && vod !== null && vodDetails !== undefined && !adultMode) {
      vod.vod_play_list = vodDetails.vod_play_list;
      vod.vod_play_url = vodDetails.vod_play_url;
      // setVod(vod);
      dispatch(playVod(vod));
    }

    const isRestricted = vodDetails?.vod_restricted === 1;

    if (isRestricted) {
      videoPlayerRef.current.setPause(true);
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
      setCurrentSourceId(vod.vodSourceId)
    }
    else {
      // else just use from api
      // console.debug('using api preferred value')
      setCurrentSourceId(vodDetails?.preferred_source_id)
    }

    // setCurrentEpisode(Math.min((vodDetails?.vod_play_list.url_count ?? 1) - 1 , vod?.episodeWatched ?? 0))

    if (vodDetails && vodDetails.vod_sources && vodDetails.vod_sources.length > 0) {
      setVodSources(vodDetails.vod_sources);
      // setCurrentSourceId(vodDetails.preferred_source_id)
      // Other operations or state changes related to vodDetails...
    }

  }, [vodDetails]);

  const fetchVod = () =>
    VodApi.getList({
      category: vod?.vod_class
        ?.split(",")
        .shift(),
      tid: vod?.type_id.toString() ?? '',
      limit: 6,
    }).then((data) => data.List as SuggestedVodType[]);

  useEffect(() => {
    currentEpisodeRef.current = vod?.episodeWatched;
    currentTimeRef.current = vod?.timeWatched;
    console.log('vod change')
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

  const fetchSVod = () =>
    VodApi.getList({
      category: vod?.vod_class,
      tid: vod?.type_id.toString() ?? '',
      limit: 6,
      rand: 1,
      xMode: true,
    }).then((data) => data.List as AdultVodListType[]);

  const {
    data: suggestedSVods,
    isFetching: isFetchingSuggestedSVod,
    refetchSvod,
  } = useQuery({
    queryKey: ["relatedSVods", vod],
    queryFn: () => fetchSVod(),
  });

  const handleRefresh = useCallback(async () => {
    // setIsRefreshing(true);
    await refetch();
    // setIsRefreshing(false);
    return;
  }, []);

  const saveVodToHistory = (vod: any) => {
    // console.log('something')
    dispatch(
      addVodToHistory(vod, currentTimeRef.current, currentEpisodeRef.current, adultMode, currentSourceId)
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
      return
    }
    setTimeout(() => {
      try {
        episodeRef?.current?.scrollToIndex({
          index: currentEpisode % 100,
          animated: true,
        });
      } catch (error) { console.log('An error occurred while scrolling:', error); }
    }, 1200)
  }, [currentEpisode, episodeRef, isFetchingVodDetails, currentSourceId, sourceRef]);

  useFocusEffect(
    useCallback(() => {
      setDismountPlayer(false);
      return () => {
        setDismountPlayer(true);
        if (
          vodSources &&
          //START HERE, SAVE POINT
          // vod?.vod_play_list.urls?.find((url) => url.nid === currentEpisode)
          //   ?.url
          vodSources?.find(({ source_id }) => source_id === currentSourceId)?.vod_play_list.urls?.find((url) => url.nid === currentEpisode)
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

  const lockOrientation = (orientation: string) => {
    dispatch(lockAppOrientation(orientation));
  };

  useInterstitialAds();

  const [vodUri, setVodUri] = useState("");

  const debounceSetVodUri = useCallback(
    debounce((uri) => setVodUri(uri), 1000),
    []
  );

  const setMinimumOfMaximumEpisode = () => {
    // console.debug('total url', foundSource?.url_count - 1)
    // console.debug('redux', vod?.episodeWatched)
    const maxEpisode = (foundSource?.url_count ?? 1) - 1
    const reduxCurrentEpisode = vod?.episodeWatched ?? 1
    if (reduxCurrentEpisode >= maxEpisode) {
      setCurrentEpisode(Math.min(maxEpisode, reduxCurrentEpisode))
    } else if (currentEpisode >= maxEpisode) {
      setCurrentEpisode(Math.min(maxEpisode, currentEpisode))
    }
  }

  useEffect(() => {
    if (!!foundSource) {
      // only after source is found
      setMinimumOfMaximumEpisode()
    }
    // when source changes, choose the minimum of the max episode 
  }, [currentSourceId, foundSource])

  let vodUrl: string | undefined = ''
  if (vodSources.length > 0 && !adultMode) {
    if (vodSources.map(v => v.source_id).includes(currentSourceId)) {
      vodUrl = vodSources?.find(({ source_id }) => source_id === currentSourceId)?.vod_play_list.urls?.find(
        (url) => url.nid === currentEpisode
      )?.url;
    } else {
      setCurrentSourceId(vodSources?.at(0)?.source_id)
    }
  }

  if (adultMode) {
    // console.debug("vod", vod)
    vodUrl = vod?.vod_play_list?.urls?.find(
      (url) => url.nid === currentEpisode
    )?.url
  }


  useEffect(() => {
    if (!!vodUrl && !!vod?.vod_id) {
      // console.debug('vod url is', vodUrl)
      setVodUri('')
      getNoAdsUri(vodUrl, vod?.vod_id)
        .then((uri) => {
          console.debug("successfully modified playlist content", uri);
          debounceSetVodUri(uri);
        })
        .catch((err) => {
          setVodUri(vodUrl);
          console.error("something went wrong", err);
        });
    }

    return () => {
      // console.log('stop server')
      debounceSetVodUri("");
    };
  }, [vodUrl]);

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
      playsPlaysTimesAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
        isXmode: adultMode,
      });
    }

    setReadyPlay(true);

    if (shouldResumeAfterLoad && videoPlayerRef.current) {
      videoPlayerRef.current.setPause(false); // Resume playing the video
      setShouldResumeAfterLoad(false); // Reset the flag after resuming
    }
  };
  // ========== for analytics - end ==========
  const insets = useSafeAreaInsets();

  if (Platform.OS === 'android') {
    insetsTop = insets.top;
    insetsBottom = insets.bottom;
  } else {
    insetsTop = insetsTop == 0 ? insets.top : insetsTop;
    insetsBottom = insetsBottom == 0 ? insets.bottom : insets.bottom;
  }


  useEffect(() => {
    if (adultMode) {
      dispatch(enableAdultMode())
    } else {
      dispatch(disableAdultMode())
    }
  }, [adultMode])

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

        {!isVodRestricted && !dismountPlayer && !isOffline && (
          <VodPlayer
            vod_url={vodUri}
            ref={videoPlayerRef}
            currentTimeRef={currentTimeRef}
            initialStartTime={initTime}
            vodTitle={vod?.vod_name}
            videoType="vod"
            activeEpisode={currentEpisode}
            episodes={vod?.type_id !== 2 ? foundSource : undefined}
            onEpisodeChange={(id: number) => {
              setCurrentEpisode(id);
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
            // setNavBarOptions={setNavBarOptions}
            onReadyForDisplay={onReadyForDisplay}

          />
        )}
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
              source={require("@static/images/loading-spinner.gif")}
              resizeMode={"contain"}
            />
          </View>
        )}
        {!dismountPlayer && isOffline && (
          <NoConnection onClickRetry={checkConnection} isPlay={true} />
        )}

        {!isOffline && (
          <>
            {adultMode && <VipRegisterBar />}
            <ScrollView
              nestedScrollEnabled={true}
              contentContainerStyle={{ marginTop: spacing.m }}
              contentInsetAdjustmentBehavior="automatic"
            >
              <View style={{ ...styles.descriptionContainer2, gap: spacing.m }}>
                <View style={styles.videoDescription}>

                  {adultMode ?
                    <FastImage
                      source={{ uri: vod?.vod_pic }}
                      resizeMode={"cover"}
                      style={{
                        ...styles.descriptionImageHorizontal,
                        ...styles.imageContainer,
                      }}
                      useFastImage={(Platform.OS === 'android')}
                    />
                    :
                    <FastImage
                      source={{ uri: vod?.vod_pic }}
                      resizeMode={"cover"}
                      style={{
                        ...styles.descriptionImage,
                        ...styles.imageContainer,
                      }}
                      useFastImage={(Platform.OS === 'android')}
                    />

                  }



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
                      {`${definedValue(vod?.vod_class?.split(",").join(" "))}`}
                    </Text>
                    <Text
                      style={{ ...textVariants.subBody, color: colors.muted }}
                    >
                      {`更新：${vod && !!vod?.vod_time_add
                        ? new Date(vod?.vod_time_add * 1000)
                          .toISOString().slice(0, 10)
                          .replace(/\//g, "-")
                        : new Date()
                          .toISOString().slice(0, 10)
                          .replace(/\//g, "-")
                        }`}
                    </Text>
                   {!(adultMode) && <TouchableOpacity
                    onPress={() => setShowDescription(true)}
                    >
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text
                        style={{
                        ...textVariants.subBody,
                        color: "#FAC33D",
                        }}>
                          更多详情
                          </Text>
                    <MoreArrow
                    width={icons.sizes.m}
                    height={icons.sizes.m}
                    color= "#FAC33D"
                  />
                  </View>
                  </TouchableOpacity>}
                    {!(adultMode) && <TouchableOpacity onPress={onShare}>
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
                    </TouchableOpacity>}
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
                          source={require("@static/images/down_arrow.png")}
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
                          source={require("@static/images/up_arrow.png")}
                          resizeMode={"contain"}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                </View> */}
                {/* show 选集播放 section when avaiable episode more thn 1 */}
                <>
                  {isFetchingVodDetails ? (
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
                            // onContentSizeChange={onContentSizeChange}
                            ListFooterComponent={
                              <View style={{ paddingHorizontal: 20 }} />
                            }
                            keyExtractor={(item, index) => index.toString()}
                          />
                        </>
                      )}
                      {/* For multiple source UI */}
                      {foundSource !== undefined && (
                        <>
                          <View
                            style={{ ...styles.spaceApart, gap: spacing.l }}
                          >
                            <Text style={textVariants.body}>选集播放</Text>
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
                                {`${foundSource ? `1-${foundSource.url_count || 0}集` : 'No episodes available'}`}
                                {/* {`${showEpisodeRangeStart + 1
                                  }-${showEpisodeRangeEnd}集`} */}
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
                            data={vodSources.find(({ source_id }) => source_id === currentSourceId)?.vod_play_list.urls?.slice(
                              showEpisodeRangeStart,
                              showEpisodeRangeEnd
                            )}
                            renderItem={renderEpisodes}
                            // onContentSizeChange={onContentSizeChange}
                            ListFooterComponent={
                              <View style={{ paddingHorizontal: 20 }} />
                            }
                            keyExtractor={(item, index) => index.toString()}
                          />
                          <View />
                        </>
                      )}

                      {adultMode ? (
                        <>
                          {vod &&
                            suggestedSVods !== undefined &&
                            suggestedSVods?.length > 0 && (
                              <View style={{ gap: spacing.l, marginBottom: 60 }}>
                                <ShowMoreVodButton
                                  isPlayScreen={true}
                                  // text={`相关${vod?.vod_class ?? '影片'}`}
                                  text={"相关推荐"}
                                  onPress={() => {
                                    //  videoPlayerRef.current.setPause(true);
                                    setTimeout(() => {
                                      navigation.navigate('午夜场剧情', {
                                        // class: item.vod_list[0].vod_class
                                        class: vod?.vod_class
                                      });
                                    }, 150);
                                  }}
                                />
                                <VodListVertical
                                  vods={suggestedSVods}
                                  minNumPerRow={2}
                                  numOfRows={3}
                                  outerRowPadding={2 * (20 - spacing.sideOffset)}
                                  heightToWidthRatio={1 / 1.814}
                                  playerMode='adult'
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
                                text={`相关${vod?.type_name ?? '相关推荐'}`}
                                onPress={() => {
                                  //  videoPlayerRef.current.setPause(true);
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
                          ) :

                            <>
                              <View style={{ marginBottom: 60 }}></View>
                            </>

                          }
                        </>
                      )
                      }

                    </>
                  )}
                </>
              </View>
            </ScrollView>
            {settingsReducer.appOrientation === "PORTRAIT" && ( // only show if portrait
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
            )}
          </>
        )}
        {isOffline && (
          <NoConnection onClickRetry={checkConnection} isPlayBottom={true} />
        )}
        {adultMode &&
          <AdultVideoVipModal />
        }
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
});


export default memo(Play)