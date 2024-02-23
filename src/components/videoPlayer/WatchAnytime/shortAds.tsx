import React, { useState, memo, useCallback, useEffect, useRef } from "react";
import {
  Dimensions,
  Linking,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import PlayIcon from "@static/images/blackPlay.svg";
import PauseIcon from "@static/images/pause.svg";
import Video, { OnProgressData, VideoRef } from "react-native-video";
import FastImage from "../../common/customFastImage";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { DOWNLOAD_WATCH_ANYTIME } from "@utility/constants";
import { playVod } from "@redux/actions/vodActions";
import RNFetchBlob from "rn-fetch-blob";
import { addIdToCache } from "../../../utils/minivodDownloader";
import { screenModel } from "@type/screenType";
import UmengAnalytics from "../../../../Umeng/UmengAnalytics";
import BecomeVipOverlay from "../../modal/becomeVipOverlay";
import VipGuideModal from "../../modal/vipGuide";
import { CPopup } from "@utility/popup";
import { setIsMiniVodGuideShown } from "@redux/actions/screenAction";
interface Props {
  thumbnail?: string;
  displayHeight: number;
  vod: any;
  setCollectionEpisode?: any;
  openSheet?: any;
  isPause: boolean;
  onManualPause: (value: boolean) => void;
  isShowVideo: boolean;
  currentDuration: number;
  isActive: boolean;
  index: number;
  onPressAds: () => void;
}

const videoBufferGif = require("@static/images/videoBufferLoading.gif");

function ShortAds({
  vod: currentVod,
  thumbnail,
  displayHeight = 0,
  isPause = true,
  onManualPause,
  isShowVideo,
  currentDuration,
  isActive,
  index,
  onPressAds,
}: Props) {
  const { colors } = useTheme();
  const [showVod, setShowVod] = useState(true);
  const screenHeight = Dimensions.get("window").height;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    //CPopup.showToast('请勾选用户协议和隐私协议');
    setShowVod(true);

    return () => {
      setShowVod(false);
    };
  }, []);

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );
  const { watchAnytimeAdultMode: adultMode } = screenState;

  if (currentVod?.mini_video_original_video_name == undefined) {
    currentVod.mini_video_original_video_name = "";
  }

  const [isBuffering, setIsBuffering] = useState(false);
  const videoRef = useRef<VideoRef>(null);
  const iconTimer = useRef<number>(0);
  const [showIcon, setShowIcon] = useState(false);
  const dispatch = useAppDispatch();
  const overlayRef = useRef(false);
  const [isVideoReadyIos, setVideoReadyIos] = useState(false);
  const [isVideoReadyAndroid, setVideoReadyAndroid] = useState(false);
  const [miniVodUrl, setMiniVodUrl] = useState(currentVod.ads_pic);

  console.log(videoRef.current);

  useEffect(() => {
    if (!isShowVideo && Platform.OS === "ios") setVideoReadyIos(false);
    if (!isShowVideo && Platform.OS === "android") setVideoReadyAndroid(false);
  }, [isShowVideo]);

  useEffect(() => {
    if (!isActive && showIcon) {
      setShowIcon(false);
    }
  }, [isActive]);

  const onBuffer = useCallback(
    (bufferObj: any) => {
      setIsBuffering(bufferObj.isBuffering);
      if (adultMode) {
        setIsBuffering(false);
      }
    },
    [adultMode]
  );

  const handleProgress = useCallback(
    (progress: OnProgressData) => {
      //setVisible(true)
      if (screenState.isMiniVodGuideShown == false) {
        onManualPause(true);
        setVisible(true);
        dispatch(setIsMiniVodGuideShown(true));
      }
      if (
        progress.currentTime !== currentDuration &&
        !isVideoReadyAndroid &&
        Platform.OS === "android"
      )
        setVideoReadyAndroid(true);
    },
    [currentDuration, isVideoReadyAndroid]
  );

  const showControls = () => {
    overlayRef.current = true;
  };

  const handlePlayPause = () => {
    clearTimeout(iconTimer.current);
    setShowIcon(true);
    if (isPause) {
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = useCallback(() => {
    //CPopup.showToast('222222');
    //setVisible(true)
    if (videoRef.current) {
      videoRef.current.seek(isNaN(currentDuration) ? 0 : currentDuration);
    }
  }, [currentDuration]);

  useEffect(() => {
    if (isPause === false) {
      setIsBuffering(false);
    }
  }, [isPause]);

  useEffect(() => {
    UmengAnalytics.watchAnytimeAdsViewAnalytics({
      ads_slot_id: currentVod.ads_slot_id,
      ads_id: currentVod.ads_id,
      ads_title: currentVod.ads_event_title,
      ads_name: currentVod.ads_name,
    });

    return () => {
      // on component unmount
      const id = currentVod?.mini_video_id;
      if (id) addIdToCache(id);
    };
  }, []);

  useEffect(() => {
    const fn = async () => {
      if ((isPause === true || isBuffering === true) && currentDuration < 1) {
        // check if video is in local storage
        // if local storage, update miniVodUrl
        // else do nothing

        const fileLocation =
          RNFetchBlob.fs.dirs.DocumentDir +
          `/videocache/${currentVod.mini_video_id}.mp4`;

        const fileExist = await RNFetchBlob.fs.exists(fileLocation);

        if (fileExist) {
          const fileIsEmpty =
            (await RNFetchBlob.fs.stat(fileLocation)).size == 0;
          // console.log('file exist, change source! ');
          if (!fileIsEmpty) {
            setMiniVodUrl(`${fileLocation}`);
          } else {
            // console.debug('file exist but is empty, use url')
            setMiniVodUrl(currentVod.ads_pic);
          }
        } else {
          // console.log('file not exist ');
          setMiniVodUrl(currentVod.ads_pic);
        }
      }
    };
    if (DOWNLOAD_WATCH_ANYTIME === true) {
      // if download constant is true, only use
      fn();
    }
  }, [isBuffering, isPause]);

  useEffect(() => {
    setMiniVodUrl(currentVod.ads_pic);
  }, [currentVod]);

  const handleOnReadyForDisplay = useCallback(() => {
    setVideoReadyIos(true);
    setVideoReadyAndroid(true);
  }, []);

  const onAdsBtnPress = () => {
    if (!currentVod?.ads_url || currentVod?.ads_url == "") {
      //  videoRef.current.setPause(true);
      onManualPause(true);
      onPressAds();
      return;
    }

    const url = currentVod?.ads_url.includes("http")
      ? currentVod?.ads_url
      : "https://" + currentVod?.actionUrl;

    Linking.openURL(url);

    UmengAnalytics.watchAnytimeAdsClicksAnalytics({
      ads_slot_id: currentVod.ads_slot_id,
      ads_id: currentVod.ads_id,
      ads_title: currentVod.ads_event_title,
      ads_name: currentVod.ads_name,
    });
  };

  return (
    <>
      {showVod && (
        <>
          <TouchableWithoutFeedback
            onPress={() => {
              showControls();
              if (overlayRef.current) {
                handlePlayPause();
              }
            }}
          >
            <View>
              <View style={[styles.container, { height: displayHeight }]}>
                {(isBuffering ||
                  (Platform.OS === "ios"
                    ? !isVideoReadyIos
                    : !isVideoReadyAndroid)) && (
                  <View style={styles.buffering}>
                    <FastImage
                      source={videoBufferGif}
                      style={{ width: 100, height: 100 }}
                      resizeMode="contain"
                      useFastImage={true}
                    />
                  </View>
                )}
                {(Platform.OS === "ios"
                  ? !isVideoReadyIos
                  : !isVideoReadyAndroid) &&
                  thumbnail && (
                    <FastImage
                      source={{ uri: thumbnail }}
                      style={styles.video}
                      resizeMode="contain"
                      useFastImage={true}
                    />
                  )}
                {(currentVod?.is_video ?? true) !== false ? (
                  <View style={{ zIndex: 99 }}>
                    <Video
                      onLayout={() => {}}
                      ref={videoRef}
                      resizeMode="contain"
                      source={{
                        uri: miniVodUrl,
                        headers: {
                          "User-Agent":
                            "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
                        },
                      }}
                      onReadyForDisplay={handleOnReadyForDisplay}
                      onBuffer={onBuffer}
                      repeat={true}
                      style={{
                        ...styles.video,
                        opacity: (
                          Platform.OS === "ios"
                            ? isVideoReadyIos
                            : isVideoReadyAndroid
                        )
                          ? 1
                          : 0,
                      }}
                      paused={
                        isPause || (Platform.OS === "ios" && !isVideoReadyIos)
                      }
                      onLoadStart={handleLoadStart}
                      onProgress={handleProgress}
                      progressUpdateInterval={1500}
                    />
                  </View>
                ) : (
                  <FastImage
                    resizeMode="contain"
                    source={{
                      uri:
                        "https://upload.wikimedia.org/wikipedia/en/a/a6/Pokémon_Pikachu_art.png", //miniVodUrl,
                    }}
                    style={styles.video}
                  />
                )}
                <View
                  style={{
                    position: "absolute",
                    left: (Dimensions.get("window").width - 80) / 2,
                    top: (Dimensions.get("window").height - 130) / 2,
                    zIndex: 999,
                  }}
                >
                  {showIcon && (isPause ? <PlayIcon /> : <PauseIcon />)}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <Modal visible={visible} transparent={true}>
            <View
              style={{
                flex: 1,
                paddingTop: screenHeight / 1.7,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <VipGuideModal
                width={250}
                onClose={(value: boolean) => {
                  onManualPause(true);
                  setVisible(value);
                }}
              />
            </View>
          </Modal>

          <View style={styles.bottomContainer}>
            <View style={styles.tagContainer}>
              <Text style={styles.tagText}>{currentVod.ads_tag}</Text>
            </View>

            <Text style={styles.titleText}>{currentVod.ads_title}</Text>

            <Text style={styles.descText}>{currentVod.ads_desc1}</Text>

            <TouchableOpacity
              onPress={onAdsBtnPress}
              style={{
                ...styles.adsBtn,
                backgroundColor: colors.primary,
              }}
            >
              <Text style={styles.adsBtnText}>
                {currentVod.ads_button_text}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
}

export default memo(ShortAds);

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  buffering: {
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
    color: "yellow",
    position: "absolute",
    top: "40%",
    left: "36%",
    zIndex: 999,
  },
  bottomContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: 20,
    justifyContent: "flex-end",
  },
  titleText: {
    color: "white",
    marginBottom: 12,
    fontSize: 18,
  },
  descText: {
    color: "white",
    marginBottom: 16,
  },
  tagContainer: {
    backgroundColor: "#ffffff44",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 10,
    alignSelf: "baseline",
  },
  tagText: {
    color: "white",
    fontSize: 12,
  },
  adsBtn: {
    width: "100%",
    borderRadius: 10,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  adsBtnText: {
    fontSize: 18,
    fontWeight: "900",
    color: "#000000",
  },
});
