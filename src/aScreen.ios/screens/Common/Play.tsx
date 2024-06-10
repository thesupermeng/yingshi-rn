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
import FavoriteButton from "../../components/button/favoriteVodButton";
import FavoriteIcon from "@static/images/favorite.svg";
import VodDetailIcon from "@static/images/vod_detail.svg";
import ScreenContainer from "../../components/container/screenContainer";
import { useTheme, useFocusEffect, useRoute } from "@react-navigation/native";
import { YSConfig } from "../../../../ysConfig";

import { RootStackScreenProps } from "@type/navigationTypes";
import { CommentsType } from "@type/ajaxTypes";
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
import FacebookIcon from "@static/images/facebook.svg";
import InstagramIcon from "@static/images/instagram.svg";
import WhatsappIcon from "@static/images/whatsapp.svg";
import XtwitterIcon from "@static/images/xtwitter.svg";
import CopyLinkIcon from "@static/images/copyLink.svg";
import MoreArrow from "@static/images/more_arrow.svg";
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
import SubmitBtn from "@static/images/submitBtn.svg";

import NoConnection from "../../components/common/noConnection";
import NetInfo from "@react-native-community/netinfo";
import { lockAppOrientation } from "@redux/actions/settingsActions";
import { AdsBannerContext } from "../../../contexts/AdsBannerContext";
import { URL } from "react-native-url-polyfill";
import RNFetchBlob from "rn-fetch-blob";
import { BridgeServer } from "react-native-http-bridge-refurbished";
import { debounce } from "lodash";
import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import UmengAnalytics from "../../../../Umeng/UmengAnalytics";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showLoginAction } from "@redux/actions/screenAction";
import { VodCommentBox } from "../../components/vodComment";
import { CPopup } from "@utility/popup";
import { VodApi } from "@api";
import { UserStateType } from "@redux/reducers/userReducer";
import { User, Vod } from "@models";
import { CLangKey } from "@constants";
import { screenModel } from "@type/screenType";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import VodDescriptionBottomSheet from "@iosScreen/components/videoPlayer/vodDescriptionBottomSheet";
import { shareApp } from "@utility/helper";
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

const getNoAdsUri = async (url: string) => {
  const startTime = new Date().valueOf();
  const parentUrl = url
    .split("/")
    .filter((part) => !part.includes(".m3u8"))
    .join("/"); // get https://domain/subfolder/subfolder
  const videoSubfolder = parentUrl
    .replace("https://", "")
    .replace("http://", "");
  // console.log('parent url ', parentUrl)

  // const filePath =
  //   RNFetchBlob.fs.dirs.DocumentDir +
  //   '/' +
  //   parentUrl
  //     .replaceAll(':', '')
  //     .replaceAll('//', '')
  //     .replaceAll(/^\s+|\s+$/gm, '')
  //     .replaceAll('.', '') +
  //   '/index.m3u8';

  const index = await RNFetchBlob.fetch("GET", url);
  const masterPlaylistRelativeUrl = index
    .text()
    .toString()
    .split("\n")
    .filter((txt) => txt.includes(".m3u8"))
    .at(-1); // get subfolder/subfolder/mixed.m3u8
  const masterPlaylistUrl = parentUrl + "/" + masterPlaylistRelativeUrl;

  const playlistFolder = masterPlaylistRelativeUrl
    .split("/")
    .slice(0, -1)
    .join("/"); // get /subfolder/subfolder/

  const playlistContent = (await RNFetchBlob.fetch("GET", masterPlaylistUrl))
    .text()
    .toString();

  if (playlistContent.includes("file not found"))
    throw new Error("Error: master playlist content not found"); // if file not found, throw err

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
  // console.log('ads line', adsLine)
  const noAdsPlaylistContent = playlist.filter(
    (_, index) => !adsLine.includes(index)
  );

  // console.log(playlistContent.length, noAdsPlaylistContent.length)

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
    // for banner ads
    setAdsRoute(route.name);
  });

  const { colors, spacing, textVariants, icons } = useTheme();
  const vodReducer: VodReducerState = useAppSelector(
    ({ vodReducer }: RootState) => vodReducer
  );
  const vodFavouriteReducer: FavoriteVodReducerState = useAppSelector(
    ({ vodFavouritesReducer }: RootState) => vodFavouritesReducer
  );
  const settingsReducer: SettingsReducerState = useAppSelector(
    ({ settingsReducer }: RootState) => settingsReducer
  );
  const userState = useSelector<UserStateType>('userReducer');
  const screenState = useSelector<screenModel>('screenReducer');

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
  const dispatch = useAppDispatch();

  const [dismountPlayer, setDismountPlayer] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isShowSheet, setShowSheet] = useState(false);
  const [comment, setComment] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [allComment, setAllComment] = useState<CommentsType[] | undefined>([]);
  const [showLoading, setShowLoading] = useState(true);

  const [isShowDescription, setShowDescription] = useState(false);
  const [isReadyPlay, setReadyPlay] = useState(false);

  const insets = useSafeAreaInsets();

  if (Platform.OS === "android") {
    insetsTop = insets.top;
    insetsBottom = insets.bottom;
  } else {
    insetsTop = insetsTop == 0 ? insets.top : insetsTop;
    insetsBottom = insetsBottom == 0 ? insets.bottom : insets.bottom;
  }

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
    try {
      // ========== for analytics - start ==========
      UmengAnalytics.playsShareClicksAnalytics();
      // ========== for analytics - end ==========

      const result = await shareApp();

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

  useEffect(() => {
    if (vod) {
      setInitTime(vod?.timeWatched);
      setReadyPlay(false);

      // ========== for analytics - start ==========
      UmengAnalytics.playsViewsAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
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

  const fetchVodDetails = () =>
    VodApi.getDetail(vod?.vod_id.toString() ?? "").then((data) => {
      const isRestricted = data.vod_restricted === 1;

      if (isRestricted) {
        // videoPlayerRef.current.setPause(true);
        // use setTimeout to prevent video non pause before unmount the screen
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
      // setVod(vod);
      dispatch(playVod(vod));
    }

    const isRestricted = vodDetails?.vod_restricted === 1;

    if (isRestricted) {
      // videoPlayerRef.current.setPause(true);
      // use setTimeout to prevent video non pause before unmount the screen
      setTimeout(() => {
        setVodRestricted(isRestricted);
      }, 100);
    } else {
      setVodRestricted(isRestricted);
    }
  }, [vodDetails]);

  const fetchVod = () =>
    VodApi.getList({
      category: vod?.vod_class?.split(",").map((data) => data.trim()).join(','),
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
    }).then((data) => data.List as Vod[]);

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
    // setIsRefreshing(true);
    await refetch();
    // setIsRefreshing(false);
    return;
  }, []);

  const saveVodToHistory = (vod: any) => {
    dispatch(
      addVodToHistory(vod, currentTimeRef.current, currentEpisodeRef.current)
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
          // setInitTime(currentTimeRef.current=0);
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

  // // useInterstitialAds();

  const [vodUri, setVodUri] = useState("");

  const debounceSetVodUri = useCallback(
    debounce((uri) => setVodUri(uri), 1000),
    []
  );

  const vodUrl: string = vod?.vod_play_list.urls?.find(
    (url) => url.nid === currentEpisode
  )?.url;

  const handleSearchVideo = useCallback(async () => {
    const searchTerm = vod?.vod_name ? vod?.vod_name : "";
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    // const url = `https://www.bing.com/search?q=${encodedSearchTerm}`;
    // const url = `https://www.bing.com/search?q=%E6%88%91%E7%9A%84%E5%8A%A9%E7%90%86%E4%B8%8D%E7%AE%80%E5%8D%95`;
    const url = `https://www.bing.com/search?q=${encodedSearchTerm}&form=QBLH&sp=-1&ghc=1&lq=0&pq=a&sc=10-1&qs=n&sk=&cvid=F4E27DDDEE8343F082F994097EF7592A&ghsh=0&ghacc=0&ghpl=`;
    try {
      if (await InAppBrowser.isAvailable()) {
        await InAppBrowser.open(url);
      } else {
        Linking.openURL(url);
      }
    } catch (e) {
      Linking.openURL(url);
    }
  }, [vod]);

  // useEffect(() => {
  //   if (!!vodUrl) {
  //     // console.debug('vod url is', vodUrl)
  //     getNoAdsUri(vodUrl)
  //         .then(uri => {
  //           console.debug('successfully modified playlist content', uri)
  //           debounceSetVodUri(uri);
  //         })
  //         .catch((err) => {
  //           setVodUri(vodUrl);
  //           console.error('something went wrong', err);
  //         });
  //     }

  //   return () => {
  //     // console.log('stop server')
  //     debounceSetVodUri('')
  //   }

  // }, [vodUrl]);

  // useEffect(() => {
  //   if (vodUri){
  //     server.listen(PLAY_HTTP_SERVER_PORT)
  //   }
  //   return () => {
  //     server.stop(); // stop server when unmount
  //   }
  // }, [vodUri])

  // // ========== for analytics - start ==========
  // const onReadyForDisplay = () => {
  //   if (vod && !isReadyPlay) {
  //     UmengAnalytics.playsPlaysTimesAnalytics({
  //       vod_id: vod.vod_id.toString(),
  //       vod_name: vod.vod_name,
  //     });
  //   }

  //   setReadyPlay(true);
  // }
  // // ========== for analytics - end ==========

  const fetchComments = () =>
    VodApi.getReviewDetails(vod?.vod_douban_id.toString() ?? "").then(
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
      let mergedArray;
      const locComments = await getLocalComments();

      if (onlineComments) {
        mergedArray = locComments.concat(onlineComments);
      } else {
        mergedArray = onlineComments;
      }

      setAllComment(mergedArray);
      setShowLoading(isFetchingComments);
      console.log("done");
    };

    if (!isFetchingComments) {
      mergeAllComments();
    }
  }, [isFetchingComments, isUpdated]);

  const locCommentId = "userComment" + vod?.vod_id;
  const getLocalComments = async () => {
    try {
      const comments = await AsyncStorage.getItem(locCommentId);
      console.log("comments stored in local storage ", locCommentId);
      console.log(comments);

      if (comments !== null) {
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {
      console.log("error when retrieving local comments: ", error);
      return [];
    }
  };

  const storeUserComments = async () => {
    if (!comment) {
      return;
    }

    console.log("user comment", comment);
    try {
      const existingComments = await getLocalComments();
      const commmentObj = {
        douban_reviews_id: existingComments.length + 1,
        user_name: userState.user?.userName ?? '',
        user_review: comment,
      };
      existingComments.unshift(commmentObj);
      await AsyncStorage.setItem(
        locCommentId,
        JSON.stringify(existingComments)
      );
      await getLocalComments();
      setIsUpdated(!isUpdated);
      Keyboard.dismiss();
      CPopup.showToast("提交成功，我们将在24小时内进行审核！");
    } catch (error) {
      console.log("error when storing the comment into local storage: ", error);
    }
  };

  return (
    <ScreenContainer
      isPlay={true}
      containerStyle={{
        paddingTop: screenState.isPlayerFullScreen ? 0 : insetsTop,
        paddingBottom: screenState.isPlayerFullScreen ? 0 : insetsBottom,
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <BingSearch vod={vod} />
      {/* if isVodRestricted, show bing search */}
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
          <ScrollView
            nestedScrollEnabled={true}
            // contentContainerStyle={{ marginTop: spacing.m }}
            contentInsetAdjustmentBehavior="automatic"
          >
            <View style={{ ...styles.descriptionContainer2, gap: spacing.m }} >
              <View style={styles.videoDescription}>
                {/* <FastImage
                  source={{ uri: vod?.vod_pic }}
                  resizeMode={"cover"}
                  style={{
                    ...styles.descriptionImage,
                    ...styles.imageContainer,
                  }}
                /> */}
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
                        console.error(
                          "Error while formatting date:",
                          error
                        );
                        return `${CLangKey.update.tr()}：N/A`; // or any default value you want to display on error
                      }
                    })()}
                  </Text>
                  <TouchableOpacity onPress={onShare}>
                    <View style={{ ...styles.share, gap: 10, marginTop: 10 }}>
                      <Text
                        style={{
                          ...textVariants.subBody,
                          color: colors.muted,
                        }}
                      >
                        {CLangKey.share.tr()}：
                      </Text>
                      <FacebookIcon width={35} />
                      <InstagramIcon width={35} />
                      <WhatsappIcon width={35} />
                      <XtwitterIcon width={35} />
                      <CopyLinkIcon width={35} />
                      {/* <WeChatIcon />
                      <PYQIcon />
                      <SinaIcon />
                      <QQIcon /> */}
                    </View>
                  </TouchableOpacity>
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
              </View>
              {/* show 选集播放 section when avaiable episode more thn 1 */}
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
                        source={require("@static/images/loading-spinner.gif")}
                        resizeMode={"contain"}
                      />
                    </View>
                  </>
                ) : (
                  <>
                    {/* {vod && allComment && !showLoading && (
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
                    )} */}

                    {vod &&
                      suggestedVods !== undefined &&
                      suggestedVods?.length > 0 && (
                        <View style={{ gap: spacing.l, marginBottom: 60 }}>
                          <ShowMoreVodButton
                            isPlayScreen={true}
                            text={CLangKey.relatedX.tr({ x: vod?.type_name ?? '' })}
                            onPress={() => {
                              // videoPlayerRef.current.setPause(true);
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
                      )}
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
              episodes={vod?.vod_play_list}
              onCancel={() => {
                setShowSheet(false);
              }}
              // onConfirm={(id: number) => {
              //   setCurrentEpisode(id);
              //   handleModalClose();
              // }}
              onConfirm={onConfirmEpisodeSelection}
              rangeSize={EPISODE_RANGE_SIZE}
            />
          )}
        </>
      )}
      {isOffline && (
        <NoConnection onClickRetry={checkConnection} isPlayBottom={true} />
      )}

      <VodDescriptionBottomSheet
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
    </ScreenContainer>
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
