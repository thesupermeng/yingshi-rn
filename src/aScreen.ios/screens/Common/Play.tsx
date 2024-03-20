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
import ScreenContainer from "../../components/container/screenContainer";
import { useTheme, useFocusEffect, useRoute } from "@react-navigation/native";
import { YSConfig } from "../../../../ysConfig";

import { RootStackScreenProps } from "@type/navigationTypes";
import { SuggestedVodType, CommentsType } from "@type/ajaxTypes";
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


import VodPlayerMin from "../../components/videoPlayer/vodPlayerMin";
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
import { User } from "@models/user";

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

  const { colors, spacing, textVariants, icons, dark } = useTheme();
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

  const [isReadyPlay, setReadyPlay] = useState(false);
  const videoRef = useRef<VideoRef>();

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



  const [yuGaoUrl, setYuGaoUrl] = useState("");
  useEffect(() => {
    if (vod?.vod_id) {
      switch (vod?.vod_id) {
        case 201212:
          setYuGaoUrl("https://oss.yingshi.tv/videos/vod/vi/201212.mp4");
          break;
        case 201219:
          setYuGaoUrl("https://oss.yingshi.tv/videos/vod/vi/201219.mp4");
          break;
        case 201282:
          setYuGaoUrl("https://oss.yingshi.tv/videos/vod/vi/201282.mp4");
          break;
        case 201278:
          setYuGaoUrl("https://oss.yingshi.tv/videos/vod/vi/201278.mp4");
          break;
        case 201410:
          setYuGaoUrl("https://oss.yingshi.tv/videos/vod/vi/201410.mp4");
          break;
        case 200984:
          setYuGaoUrl("https://oss.yingshi.tv/videos/vod/vi/200984.mp4");
          break;
        default:
          setYuGaoUrl("");
      }
    }
  }, [vod]);


  const onShare = async () => {
    try {
      // ========== for analytics - start ==========
      UmengAnalytics.playsShareClicksAnalytics();
      // ========== for analytics - end ==========

      let msg = `《${vod?.vod_name
        }》高清播放${"\n"}https://yingshi.tv/index.php/vod/play/id/${vod?.vod_id
        }/sid/1/nid/${currentEpisode + 1
        }.html${"\n"}${APP_NAME_CONST}-海量高清视频在线观看`;

      if (APP_NAME_CONST == "蚂蚁影视") {
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

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
    const eventName = "watch_video";
    const eventValues = {
      vod_name: vod?.vod_name,
    };

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
      category: vod?.vod_class?.split(",").shift(),
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
    }).then((data) => data.List as SuggestedVodType[]);

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
      <TouchableOpacity activeOpacity={0.85}
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


  useFocusEffect(useCallback(() => {
    if (videoRef !== undefined && videoRef.current?.isPaused) {
      videoRef.current.setPause(false);
    }
    return () => {
      if (videoRef !== undefined && !videoRef.current?.isPaused) {
        videoRef.current?.setPause(true);
      }
    }
  }, []));


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
                    backgroundColor: dark ? "#1d2023" : 'white',
                    shadowColor: '#000000',
                    shadowOpacity: 0.1,
                    shadowRadius: 3,
                  }}
                >
                  <TextInput
                    style={{
                      ...styles.input,
                      backgroundColor: dark ? "#FFFFFF1A" : '#D9D9D9',
                      ...textVariants.body,
                    }}
                    onChangeText={setComment}
                    placeholder={
                      User.isLogin(userState.user) ? "请评论" : "请登录才进行评论"
                    }
                    editable={User.isLogin(userState.user)}
                    placeholderTextColor={colors.muted}
                    value={comment}
                    maxLength={200}
                    blurOnSubmit
                  />

                  {User.isLogin(userState.user) ? (
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
                      <TouchableOpacity activeOpacity={0.85}
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
                    <TouchableOpacity activeOpacity={0.85}
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
                            return "更新：N/A"; // or any default value you want to display on error
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
                        {/* <TouchableOpacity activeOpacity={0.85}
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
                    <TouchableOpacity activeOpacity={0.85}
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
                  </View>

                  {/* todo  */}
                  <>
                    {
                      yuGaoUrl && (
                        <VodPlayerMin
                          ref={videoRef}
                          //   onBack={onHandleBack}
                          vod_url={yuGaoUrl}
                          videoType="vod"
                          //  vodTitle={ vod?.vod_name}
                          appOrientation={settingsReducer.appOrientation}
                          devicesOrientation={settingsReducer.devicesOrientation}
                          lockOrientation={lockOrientation}
                        // onReadyForDisplay={onReadyForDisplay}
                        />
                      )
                    }
                  </>
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
    color: '#000000',
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
