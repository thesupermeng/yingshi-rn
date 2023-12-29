import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  AppState,
  Text,
  BackHandler,
  Platform,
  Linking,
} from "react-native";

import Video from "react-native-video";
import { useTheme, useNavigation, useRoute } from "@react-navigation/native";
import { debounce } from "lodash";

import { Dimensions } from "react-native";
import VideoControlsOverlay from "./VideoControlsOverlay";
import WebView from "react-native-webview";


import FastImage from "../../components/common/customFastImage";

import FastForwardProgressIcon from "@static/images/fastforwardProgress.svg";
import RewindProgressIcon from "@static/images/rewindProgress.svg";

import { incrementSportWatchTime, setFullscreenState, showAdultModeVip } from "@redux/actions/screenAction";

import {
  LiveTVStationItem,
  VodEpisodeListType,
  VodType,
} from "@type/ajaxTypes";
import VideoWithControls from "./videoWithControls";
import { useDispatch } from "react-redux";
import { useAppSelector, useSelector } from "@hooks/hooks";
import { screenModel } from "@type/screenType";
import { ADULT_MODE_PREVIEW_DURATION, AD_VIDEO_SECONDS, NON_VIP_STREAM_TIME_SECONDS } from "@utility/constants";
import { userModel } from "@type/userType";
import { AdVideoImage } from "./AdVideoImage";
import { VodReducerState } from "@redux/reducers/vodReducer";
import { VodApi } from "@api";
import { useQuery } from "@tanstack/react-query";
import useAnalytics from "@hooks/useAnalytics";

interface Props {
  vod_url?: string;
  vodTitle?: string;
  currentTimeRef?: any;
  initialStartTime?: number;
  videoType?: string;
  vod_source?: any;
  onBack?: () => any;
  useWebview?: boolean;
  onEpisodeChange?: any;
  episodes?: VodEpisodeListType;
  activeEpisode?: number;
  rangeSize?: number;
  autoPlayNext?: boolean;
  onShare?: () => any;
  movieList?: VodType[];
  showGuide?: boolean;
  showMoreType?: "episodes" | "streams" | "movies" | "none";
  streams?: LiveTVStationItem[];
  isFetchingRecommendedMovies?: boolean;
  appOrientation: string;
  devicesOrientation: string;
  lockOrientation: (orientation: string) => void;
  handleSaveVod?: any;
  onReadyForDisplay?: () => void;
  showAds?: boolean,
}

type VideoControlsRef = {
  showControls: () => void;
  hideControls: () => void;
  toggleControls: () => void;
  isVisible: boolean;
  hideSlider: () => void;
  isLocked: boolean;
  toggleLock: () => void;
};

type VideoRef = {
  setPause: (param: boolean) => void;
  isPaused: boolean;
  setCurrentTime: (time: number) => void;
};

export default forwardRef<VideoRef, Props>(
  (
    {
      vod_url,
      currentTimeRef = 0,
      initialStartTime = 0,
      vodTitle = "",
      videoType = "vod",
      vod_source,
      onBack,
      useWebview = false,
      activeEpisode,
      onEpisodeChange,
      rangeSize,
      episodes,
      autoPlayNext = true,
      onShare = () => { },
      movieList = [],
      showGuide = false,
      streams = [],
      showMoreType = "none",
      isFetchingRecommendedMovies = false,
      appOrientation,
      devicesOrientation,
      lockOrientation,
      handleSaveVod = () => { },
      onReadyForDisplay,
      showAds = false,
    }: Props,
    ref
  ) => {
    const videoPlayerRef = React.useRef<Video | null>();
    const { colors, textVariants } = useTheme();
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(initialStartTime);
    const [isBuffering, setIsBuffering] = useState(false);
    const [seekDirection, setSeekDirection] = useState<
      "backward" | "none" | "forward"
    >("none");
    const [playbackRate, setPlaybackRate] = useState<number>(1);
    const controlsRef = useRef() as React.MutableRefObject<VideoControlsRef>;
    const accumulatedSkip = useRef(0);
    const [isLastForward, setIsLastForward] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const screenState = useSelector<screenModel>('screenReducer');
    const userState = useSelector<userModel>('userReducer');
    const bufferRef = useRef(true);
    const onBuffer = (bufferObj: any) => {
      if (!bufferObj.isBuffering) {
        accumulatedSkip.current = 0;
      }
      setIsBuffering(bufferObj.isBuffering);
      bufferRef.current = bufferObj.isBuffering;
    };

    const disableSeek = useRef(false)

    const [showAd, setShowAd] = useState(false);
    const [adCountdownTime, setAdCountdownTime] = useState(AD_VIDEO_SECONDS);

    const { data: playerVodAds, isFetching: isFetchAds } = useQuery({
      queryKey: ["playerAdsVideo"],
      queryFn: () => VodApi.getPlayerAdVideo(),
    });

    const {
      playsAdsViewAnalytics,
      playsAdsClickAnalytics,
    } = useAnalytics();

    useEffect(() => {
      if (showAds &&
        playerVodAds &&
        (
          userState.userToken === '' ||
          userState.userCurrentTimestamp >= userState.userMemberExpired
        )
      ) {
        setShowAd(true);
        setAdCountdownTime(playerVodAds.minDuration);

        // ========== for analytics - start ==========
        playsAdsViewAnalytics();
        // ========== for analytics - end ==========
      }
    }, [playerVodAds]);

    useEffect(() => {
      if (adCountdownTime <= 0) {
        setShowAd(false);
        return;
      }

      const adTimeInterval = setInterval(() => {
        setAdCountdownTime(prev => prev - 1);
      }, 1000)

      return () => {
        clearInterval(adTimeInterval);
      }
    }, [adCountdownTime]);

    useImperativeHandle(ref, () => ({
      setPause: (pauseVideo: boolean) => {
        setIsPaused(pauseVideo);
      },
      isPaused: isPaused,
      setCurrentTime: (time) => setCurrentTime(time),
    }));

    const onGoBack = () => {
      if (onBack !== undefined) {
        onBack();
        lockOrientation("PORTRAIT");
        setIsFullScreen(false);
      } else {
        // just direct go back (go back the event will handle by beforeRemove)
        navigation.goBack();
      }
    };

    useEffect(() => {
      // set orientation: "portrait" because if set all android will auto rotate
      if (Platform.OS === "android") {
        navigation.setOptions({ orientation: "portrait" });
      }

      // ... (rest of the useEffect hook remains unchanged)
      const subscription = AppState.addEventListener(
        "change",
        handleAppStateChange
      );

      return () => {
        subscription.remove();
      };
    }, []);

    useEffect(() => {
      // for auto rotate video player
      const isNeedAutoRotate = false;
      const isLocked = controlsRef?.current?.isLocked ?? false;

      if (isNeedAutoRotate && !isLocked) {
        deviceOrientationHandle();
      }
    }, [devicesOrientation]);

    useEffect(() => {
      const removeBackPressListener = BackHandler.addEventListener(
        "hardwareBackPress",
        () => {
          // just direct go back (go back the event will handle by beforeRemove)
          navigation.goBack();
          return true;
        }
      );

      // handle go back event (except IOS swipe back)
      const onBeforeRemoveListener = navigation.addListener(
        "beforeRemove",
        (e: any) => {
          if (
            !(
              Platform.OS === "ios" &&
              e.data.action.type.toLocaleLowerCase() === "pop"
            )
          ) {
            // preventDefault cannot working in IOS swipe back and will have error
            // use "gestureEnabled: false" to handle ios swipe back function
            e.preventDefault();
          }

          if (isFullScreen) {
            lockOrientation("PORTRAIT");
            StatusBar.setHidden(false);
            setIsFullScreen(false);
          } else {
            videoPlayerRef.current.setNativeProps({ paused: false })
            // videoPlayerRef.current.pause();
            setIsPaused(true);
            // use setTimeout to prevent video non pause before pop the screen
            setTimeout(() => {
              navigation.dispatch(e.data.action);
            }, 100);
          }
        }
      );

      return () => {
        removeBackPressListener.remove();
        onBeforeRemoveListener();
      };
    }, [isFullScreen, isPaused]);

    useEffect(() => {
      dispatch(setFullscreenState(isFullScreen));
      // if full screen disable ios swipe back function
      if (isFullScreen) {
        navigation.setOptions({ gestureEnabled: false });
      } else {
        navigation.setOptions({ gestureEnabled: true });
      }
    }, [isFullScreen]);

    useEffect(() => {
      // when url change will reset play time (for 相关电视剧)
      setCurrentTime(0);
    }, [vod_url]);

    // Handle app's background/foreground status
    const handleAppStateChange = (nextAppState: any) => {
      // setIsInBackground(nextAppState !== "active");
      // if (nextAppState === "active") {
      //   // setIsPaused(false); // Resume video when app becomes active (foreground)
      // } else {
      //   handleSaveVod();
      // }

      try {
        if (currentTimeRef.current != 0 && nextAppState !== "active") {
          console.log("save vod");
          if (handleSaveVod) handleSaveVod();
        }
      } catch (err) {
        console.log("err save vod!");
        console.log(err);
      }
    };

    const deviceOrientationHandle = () => {
      // no handle for PORTRAIT-UPSIDEDOWN
      if (
        devicesOrientation === "LANDSCAPE-LEFT" ||
        devicesOrientation === "LANDSCAPE-RIGHT"
      ) {
        setIsFullScreen(true);
        // ImmersiveMode.fullLayout(false);
        StatusBar.setHidden(true);

        lockOrientation(devicesOrientation);
      } else if (devicesOrientation === "PORTRAIT") {
        setIsFullScreen(false);
        // ImmersiveMode.fullLayout(true);
        StatusBar.setHidden(false);

        lockOrientation(devicesOrientation);
      }
    };

    const onToggleFullScreen = useCallback(() => {
      if (
        appOrientation === "LANDSCAPE-LEFT" ||
        appOrientation === "LANDSCAPE-RIGHT"
      ) {
        lockOrientation("PORTRAIT");
        setIsFullScreen(false);
        // ImmersiveMode.fullLayout(true);
        StatusBar.setHidden(false);

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
      } else {
        lockOrientation("LANDSCAPE");
        setIsFullScreen(true);
        // ImmersiveMode.fullLayout(false);
        StatusBar.setHidden(true);

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "landscape" });
        }
      }
    }, [isFullScreen, appOrientation]);

    const onVideoLoaded = (data: any) => {
      setDuration(data.duration);
      if (currentTimeRef) {
        currentTimeRef.current = data.currentTime;
      }
      if (videoPlayerRef.current) {
        videoPlayerRef.current.seek(initialStartTime);
      }
    };

    const onSeek = (time: number) => {
      if (disableSeek.current === true) return
      hideSeekProgress();
      time = Math.min(Math.max(time, 0), duration);
      try {
        if (videoPlayerRef.current && !isNaN(time)) {
          videoPlayerRef.current.seek(time);
          setCurrentTime(time);
        }
      } catch (err) {
        console.log("Error!", err, time);
      }
    };

    // const smoothSeekTo = (targetTime: number) => {
    //   const FPS = 60; // Frames per second for smoother seek
    //   const duration = 0.5; // Duration in seconds for the seek operation
    //   const steps = duration * FPS;
    //   const timeDiff = targetTime - currentTime;
    //   const timeIncrement = timeDiff / steps;

    //   for (let i = 0; i < steps; i++) {
    //     setTimeout(() => {
    //       const newTime = currentTime + timeIncrement;
    //       setCurrentTime(newTime);
    //       if (videoPlayerRef.current && !isNaN(newTime)) {
    //         videoPlayerRef.current.seek(newTime);
    //       }
    //     }, (i + 1) * (100 / FPS));
    //   }
    // };

    const onSeekGesture = (time: number) => {
      if (disableSeek.current === true) return
      if (currentTime < time) {
        setSeekDirection("forward");
      } else {
        setSeekDirection("backward");
      }
      // onSeek(time);
      directSeekTo(time)
    };


    const directSeekTo = (targetTime: number) => {
      if (disableSeek.current === true) return
      hideSeekProgress()
      // Calculate the direction of seeking based on the current and target times
      // const direction = targetTime > currentTime ? 'forward' : 'backward';

      //   // Calculate the seek amount based on the difference between target and current time
      // const seekAmount = Math.abs(targetTime - currentTime);

      // // Optionally, you can adjust the seek amount based on the direction to fine-tune seeking
      // // For example, seek a shorter duration when seeking backward
      // const adjustedSeekAmount = direction === 'backward' ? seekAmount * 0.8 : seekAmount;

      // // Determine the new seek time based on the direction and adjusted seek amount
      // const newTime = direction === 'forward' ? currentTime + adjustedSeekAmount : currentTime - adjustedSeekAmount;

      // // Ensure the seek time stays within video duration boundaries
      // const boundedTime = Math.min(Math.max(newTime, 0), duration);

      // // Update the current time and seek in the video player
      // setCurrentTime(boundedTime);
      // if (videoPlayerRef.current && !isNaN(boundedTime)) {
      //   videoPlayerRef.current.seek(boundedTime);
      // }
      const newTime = Math.min(Math.max(targetTime, 0), duration); // Ensure the seek time stays within video duration boundaries
      setCurrentTime(newTime);
      if (videoPlayerRef.current && !isNaN(newTime)) {
        videoPlayerRef.current.seek(newTime);
      }
    };

    const onVideoProgessing = (data: any) => {
      setCurrentTime(data.currentTime);

      try {
        currentTimeRef.current = data.currentTime;
      } catch (err) {
        console.error("crash here");
      }

      if (Platform.OS === "ios") {
        bufferRef.current = false;
      }
    };

    const onSkip = (time: any) => {
      if (disableSeek.current === true) return

      if (videoPlayerRef?.current) {
        if (time > 0 && isLastForward == false) {
          setIsLastForward(true);
          accumulatedSkip.current = 0;
        }

        if (time < 0 && isLastForward == true) {
          setIsLastForward(false);
          accumulatedSkip.current = 0;
        }

        accumulatedSkip.current += time;
        let currentTime = currentTimeRef.current + time;
        currentTime = Math.max(0, currentTime);
        currentTimeRef.current = currentTime;
        videoPlayerRef.current.seek(currentTime);
        setCurrentTime(currentTime);
      }
    };

    const onTogglePlayPause = () => {
      setIsPaused(!isPaused);
    };

    const hideSeekProgress = useCallback(
      debounce(() => setSeekDirection("none"), 300),
      []
    );

    const changeEpisodeAndPlay = (ep: any) => {
      setIsPaused(true);
      onEpisodeChange(ep);

      setTimeout(() => {
        setIsPaused(false);
      }, 1000);
    };

    const getNextEpisode = () => {
      if (
        autoPlayNext &&
        activeEpisode !== undefined &&
        episodes &&
        activeEpisode < episodes?.url_count - 1
      ) {
        return () => changeEpisodeAndPlay(episodes.urls[activeEpisode + 1].nid);
      }
      return undefined;
    };

    // useEffect(() => {
    //   // if is sports stream, if watch time > 300s, pause vid
    //   if (
    //     route.name === "体育详情" &&
    //     screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS
    //   ) {
    //     if (videoPlayerRef.current){
    //       videoPlayerRef.current.pause();
    //     }
    //   }
    // }, [screenState.sportWatchTime]);
    // useEffect(() => {
    //   if (
    //     screenState.interstitialShow == true &&
    //     route.name != "体育详情" &&
    //     route.name != "电视台播放"
    //   ) {
    //     setIsPaused(true);
    //   } else {
    //     setIsPaused(false);
    //   }
    // }, [screenState.interstitialShow]);

    useEffect(() => {
      if (screenState.interstitialShow == true && Platform.OS === "ios") {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    }, [screenState.interstitialShow]);

    useEffect(() => {
      if (route.name == '体育详情') {
        const unsub = setInterval(() => {
          dispatch(incrementSportWatchTime());
        }, 1000);

        return () => clearInterval(unsub);
      }
    }, [route.name])

    // useEffect(() => { // ! might have a conflict with the previous use effect ^^^^^^^
    //   if (!isPaused){
    //     setIsPaused(true)
    //   }
    // }, [screenState.adultModeVipShow])

    const isVip = !(Number(userState.userMemberExpired) <=
      Number(userState.userCurrentTimestamp) ||
      userState.userToken === "")

    const pauseSportVideo =
      route.name === "体育详情" &&
      screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS &&
      (Number(userState.userMemberExpired) <=
        Number(userState.userCurrentTimestamp) ||
        userState.userToken === "");



    useEffect(() => {
      if (screenState.adultVideoWatchTime > ADULT_MODE_PREVIEW_DURATION && screenState.adultMode && !isVip) {
        dispatch(showAdultModeVip())
        setIsPaused(true)
        disableSeek.current = true
      } else {
        disableSeek.current = false
      }
    }, [currentTime, isPaused])

    const onPressAd = () => {
      if (!playerVodAds?.actionUrl) {
        // ========== for analytics - start ==========
        playsAdsClickAnalytics();
        // ========== for analytics - end ==========
        return;
      }

      const url = playerVodAds?.actionUrl.includes('http://') ? playerVodAds?.actionUrl : 'http://' + playerVodAds?.actionUrl

      Linking.openURL(url);

      // ========== for analytics - start ==========
      playsAdsClickAnalytics({ url });
      // ========== for analytics - end ==========
    }

    return (
      <View style={styles.container}>
        {showAd && playerVodAds &&
          <View style={{ ...styles.bofangBox }}>
            <AdVideoImage
              videoPlayerRef={videoPlayerRef}
              type={playerVodAds.isVideo ? 'video' : 'image'}
              url={playerVodAds.url!}
              countdownTime={adCountdownTime}
              isFullScreen={isFullScreen}
              isShowShare={false}
              onPressAd={onPressAd}
              onGoBack={onGoBack}
              onShare={onShare}
              onPressFullScreenBtn={onToggleFullScreen}
            />
          </View>
        }

        {!isFetchAds && !showAd &&
          <View style={{ ...styles.bofangBox }}>
            {!(vod_url !== undefined || vod_source !== undefined) ? (
              <View
                style={{
                  width: "100%",
                  aspectRatio: 16 / 9,
                  backgroundColor: "black",
                }}
              />
            ) : useWebview ? (
              <WebView
                resizeMode="contain"
                source={vod_url === undefined ? vod_source : { uri: vod_url }}
                style={styles.video}
                onLoad={onVideoLoaded}
              />
            ) : (
              <VideoWithControls
                playbackRate={playbackRate}
                videoPlayerRef={videoPlayerRef}
                isPaused={isPaused || pauseSportVideo} // Pause video  when sport timer is up
                vod_source={vod_source}
                vod_url={vod_url}
                currentTimeRef={currentTimeRef}
                controlsRef={controlsRef}
                currentTime={currentTime}
                duration={duration}
                isFullScreen={isFullScreen}
                vodTitle={vodTitle}
                videoType={videoType}
                activeEpisode={activeEpisode}
                episodes={episodes}
                rangeSize={rangeSize}
                accumulatedSkip={accumulatedSkip.current}
                movieList={movieList}
                showGuide={showGuide}
                showMoreType={showMoreType}
                streams={streams}
                isFetchingRecommendedMovies={isFetchingRecommendedMovies}
                onBuffer={onBuffer}
                getNextEpisode={getNextEpisode}
                onVideoLoaded={onVideoLoaded}
                onVideoProgessing={onVideoProgessing}
                onSeek={onSeek}
                onSeekGesture={onSeekGesture}
                onSkip={onSkip}
                onTogglePlayPause={onTogglePlayPause}
                onToggleFullScreen={onToggleFullScreen}
                onGoBack={onGoBack}
                setPlaybackRate={setPlaybackRate}
                changeEpisodeAndPlay={changeEpisodeAndPlay}
                onShare={onShare}
                onReadyForDisplay={onReadyForDisplay}
              />
            )}
          </View>
        }


        {(bufferRef.current || seekDirection !== "none" || isFetchAds) && !showAd && (
          <View style={styles.buffering}>
            {seekDirection !== "none" ? (
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0,0,0,0.4)",
                  padding: 8,
                  borderRadius: 8,
                }}
              >
                {seekDirection === "forward" ? (
                  <FastForwardProgressIcon height={50} width={50} />
                ) : (
                  <RewindProgressIcon height={50} width={50} />
                )}
                {duration > 3600 ? (
                  <Text
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Text
                      style={{ ...textVariants.header, color: colors.primary }}
                    >
                      {new Date(currentTime * 1000)
                        .toISOString()
                        .substring(11, 19)}
                    </Text>
                    <Text style={{ ...textVariants.header }}>
                      {` / ${new Date(duration * 1000)
                        .toISOString()
                        .substring(11, 19)}`}
                    </Text>
                  </Text>
                ) : (
                  <Text
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Text
                      style={{ ...textVariants.header, color: colors.primary }}
                    >
                      {new Date(currentTime * 1000)
                        .toISOString()
                        .substring(14, 19)}
                    </Text>
                    <Text style={{ ...textVariants.header }}>
                      {` / ${new Date(duration * 1000)
                        .toISOString()
                        .substring(14, 19)}`}
                    </Text>
                  </Text>
                )}
              </View>
            ) : (
              <FastImage
                source={require("@static/images/videoBufferLoading.gif")}
                style={{ width: 100, height: 100 }}
                resizeMode={"contain"}
              />
            )}
          </View>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  bofangBox: {
    aspectRatio: 16 / 9,
    maxHeight: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  buffering: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "yellow",
    position: "absolute",
    height: "auto",
    width: "auto",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "black",
  },
});
