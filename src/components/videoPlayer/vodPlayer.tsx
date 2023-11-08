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
} from "react-native";

import Video from "react-native-video";
import { useTheme, useNavigation, useRoute } from "@react-navigation/native";
import { debounce } from "lodash";

import { Dimensions } from "react-native";
import VideoControlsOverlay from "./VideoControlsOverlay";
import WebView from "react-native-webview";
import FastImage from "react-native-fast-image";
import FastForwardProgressIcon from "../../../static/images/fastforwardProgress.svg";
import RewindProgressIcon from "../../../static/images/rewindProgress.svg";

import {
  LiveTVStationItem,
  VodEpisodeListType,
  VodType,
} from "../../types/ajaxTypes";
import VideoWithControls from "./videoWithControls";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";
import { screenModel } from "../../types/screenType";
import { NON_VIP_STREAM_TIME_SECONDS } from "../../utility/constants";
import { userModel } from "../../types/userType";

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
  handleSaveVod: any;
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
      onShare = () => {},
      movieList = [],
      showGuide = false,
      streams = [],
      showMoreType = "none",
      isFetchingRecommendedMovies = false,
      appOrientation,
      devicesOrientation,
      lockOrientation,
      handleSaveVod = () => {},
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
    const screenState: screenModel = useAppSelector(
      ({ screenReducer }) => screenReducer
    );
    const userState: userModel = useAppSelector(
      ({ userReducer }) => userReducer
    );
    const bufferRef = useRef(false);
    const onBuffer = (bufferObj: any) => {
      if (!bufferObj.isBuffering) {
        accumulatedSkip.current = 0;
      }
      setIsBuffering(bufferObj.isBuffering);
      bufferRef.current = bufferObj.isBuffering;
    };

    // New state to keep track of app's background/foreground status
    const [isInBackground, setIsInBackground] = useState(false);

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
      } else {
        // set orientation: "portrait" because if set all android will auto rotate
        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
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
    }, [navigation, isFullScreen, isPaused]);

    useEffect(() => {
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
      setIsInBackground(nextAppState !== "active");
      if (nextAppState === "active") {
        setIsPaused(false); // Resume video when app becomes active (foreground)
      } else {
        handleSaveVod();
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
      } else {
        lockOrientation("LANDSCAPE");
        setIsFullScreen(true);
        // ImmersiveMode.fullLayout(false);
        StatusBar.setHidden(true);
      }
    }, [isFullScreen, appOrientation]);

    const onVideoLoaded = (data: any) => {
      console.log("asdasdsadasds");
      setDuration(data.duration);
      if (currentTimeRef) {
        currentTimeRef.current = data.currentTime;
      }
      if (videoPlayerRef.current) {
        videoPlayerRef.current.seek(initialStartTime);
      }
    };

    const onSeek = (time: number) => {
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

    const onSeekGesture = (time: number) => {
      if (currentTime < time) {
        setSeekDirection("forward");
      } else {
        setSeekDirection("backward");
      }
      onSeek(time);
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
      setIsPaused(false);
      onEpisodeChange(ep);
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
    useEffect(() => {
      // if is sports stream, if watch time > 300s, pause vid
      if (
        screenState.interstitialShow == true &&
        route.name != "体育详情" &&
        route.name != "电视台播放"
      ) {
        console.log("paused");
        console.log(route.name);
        setIsPaused(true);
      } else {
        console.log("not paused");
        console.log(route.name);
        setIsPaused(false);
      }
    }, [screenState.interstitialShow]);

    useEffect(() => {
      // if is sports stream, if watch time > 300s, pause vid
      if (screenState.interstitialShow == true) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    }, [screenState.interstitialShow]);

    const pauseSportVideo =
      route.name === "体育详情" &&
      screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS &&
      (Number(userState.userMemberExpired) <=
        Number(userState.userCurrentTimestamp) ||
        userState.userToken === "");

    return (
      <View style={styles.container}>
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
              isPaused={isPaused || isInBackground || pauseSportVideo} // Pause video when app is in the background or when sport timer is up
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
              isInBackground={isInBackground}
            />
          )}
        </View>

        {(bufferRef.current || seekDirection !== "none") && (
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
                source={require("../../../static/images/videoBufferLoading.gif")}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
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
