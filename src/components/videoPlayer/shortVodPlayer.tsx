import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Video, { OnProgressData, VideoRef } from 'react-native-video';
import PlayIcon from '@static/images/blackPlay.svg';
import PauseIcon from '@static/images/pause.svg';
import PlayBoDanIcon from '@static/images/play-bodan.svg';
import PlayZhengPianIcon from '@static/images/play-zhengpian1.svg';

import { useNavigation, useTheme } from '@react-navigation/native';
import { Slider } from '@rneui/themed';
import { QueryClient } from '@tanstack/react-query';
import { debounce } from 'lodash';
import RNFetchBlob from 'rn-fetch-blob';
import ExpandUpIcon from '@static/images/expandHeji.svg';
import HejiIcon from '@static/images/heji.svg';
import { useAppDispatch, useAppSelector } from '@hooks/hooks';
import useAnalytics from '../../hooks/useAnalytics';
import { showAdultModeVip } from '@redux/actions/screenAction';
import { playVod, viewPlaylistDetails } from '@redux/actions/vodActions';
import { screenModel } from '../../types/screenType';
import { userModel } from '../../types/userType';
import { ADULT_MODE_PREVIEW_DURATION } from '../../utility/constants';
import FastImage from '../common/customFastImage';

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
  updateVideoDuration: (duration: number) => any;
  isActive: boolean;
}

const maxLength = 10;

const truncateVodName = (vodName: string) => {
  return vodName?.length > maxLength
    ? vodName.substring(0, maxLength) + '...'
    : vodName;
};

const videoBufferGif = require('@static/images/videoBufferLoading.gif')

function ShortVideoPlayer({
  vod,
  thumbnail,
  displayHeight = 0,
  openSheet,
  isPause = false,
  onManualPause,
  isShowVideo,
  currentDuration,
  updateVideoDuration,
  isActive,
}: Props) {
  const [currentVod, setVod] = useState(vod);
  const screenState: screenModel = useAppSelector(
    ({screenReducer}) => screenReducer,
  );
  const {adultMode, adultVideoWatchTime} = screenState;
  if (currentVod?.mini_video_original_video_name == undefined) {
    currentVod.mini_video_original_video_name = '';
  }

  let vodName = !adultMode
    ? truncateVodName(currentVod?.mini_video_original_video_name)
    : truncateVodName(currentVod?.mini_video_vod?.vod_name);

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const {colors, textVariants} = useTheme();

  const [isBuffering, setIsBuffering] = useState(false);
  const videoRef = useRef<VideoRef>(null);
  const [duration, setDuration] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const timer = useRef<number>(0);
  const iconTimer = useRef<number>(0);
  const [showIcon, setShowIcon] = useState(false);
  const [imageContainerHeight, setImageContainerHeight] = useState(0);
  const isBodanRef = useRef(true)
  const watchTextRef = useRef('看正片')

  const [imageLoaded, setImageLoaded] = useState(false);
  const overlayRef = useRef(false);
  const [isVideoReadyIos, setVideoReadyIos] = useState(false);
  const [isVideoReadyAndroid, setVideoReadyAndroid] = useState(false);
  const [onSliding, setOnSliding] = useState(false);
  const [miniVodUrl, setMiniVodUrl] = useState(currentVod.mini_video_origin_video_url);

  const windowWidth = Dimensions.get('window').width;

  const {
    watchAnytimeVideoClicksAnalytics,
    watchAnytimePlaylistClicksAnalytics,
  } = useAnalytics();

  const userState: userModel = useAppSelector(({userReducer}) => userReducer);

  const isVip = !(
    Number(userState.userMemberExpired) <=
      Number(userState.userCurrentTimestamp) || userState.userToken === ''
  );
  const disableSeek =
    !isVip && adultVideoWatchTime >= ADULT_MODE_PREVIEW_DURATION && adultMode;

  useEffect(() => {
    setVod(vod);
  }, [vod]);

  useEffect(() => {
    if (!isShowVideo && Platform.OS === 'ios') setVideoReadyIos(false);
    if (!isShowVideo && Platform.OS === 'android') setVideoReadyAndroid(false);
  }, [isShowVideo]);

  useEffect(() => {
    if (currentVod.mini_video_topic?.topic_id != 0) {
      // setIsBodan(true);
      isBodanRef.current = true
      // setWatchText('看播单');
      watchTextRef.current = '看播单'
    } else {
      // setIsBodan(false);
      // setWatchText('看正片');
      isBodanRef.current = false
      watchTextRef.current = '看正片'

    }

    return () => {
      setShowOverlay(false);
      setShowIcon(false);
      updateVideoDuration(0);
      // setIsBodan(false);
      // setWatchText('看正片');
      isBodanRef.current = false
      watchTextRef.current = '看正片'
    };
  }, [currentVod]);

  useEffect(() => {
    if (!isActive && showIcon) {
      setShowIcon(false);
    }
  }, [isActive]);

  const openBottomSheet = useCallback(() => {
    openSheet();
  }, []);

  const onBuffer = useCallback((bufferObj: any) => {
    setIsBuffering(bufferObj.isBuffering);
    if (adultMode) {
      // && Platform.OS === 'ios'
      setIsBuffering(false);
    }
  }, [adultMode]);

  const handleProgress = useCallback(
    (progress: OnProgressData) => {
      if (
        progress.currentTime !== currentDuration &&
        !isVideoReadyAndroid &&
        Platform.OS === 'android'
      )
        setVideoReadyAndroid(true);
      if (!onSliding) updateVideoDuration(progress.currentTime);
    },
    [currentDuration, onSliding, isVideoReadyAndroid],
  );

  const showControls = () => {
    clearTimeout(timer.current);
    setShowOverlay(true);
    overlayRef.current = true;
    timer.current = setTimeout(() => setShowOverlay(false), 3000);
  };

  const handleSeek = useCallback(
    (value: number) => {
      if (disableSeek) {
        dispatch(showAdultModeVip());
        return;
      }
      if (!isVideoReadyIos && Platform.OS === 'ios') return;
      if (!isVideoReadyAndroid && Platform.OS === 'android') return;

      if (Number.isNaN(value)) {
        value = 0;
      }

      if (!onSliding) setOnSliding(true);

      showControls();
      updateVideoDuration(value);
      seekVideo(value);
    },
    [isVideoReadyIos, isVideoReadyAndroid, onSliding],
  );

  const seekVideo = useCallback(
    debounce(value => {
      if (videoRef.current) {
        videoRef.current.seek(value);
        setOnSliding(false);
      }
    }, 1000),
    [videoRef.current],
  );

  const handlePlayPause = () => {
    clearTimeout(iconTimer.current);
    setShowIcon(true);
    if (isPause) {
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.seek(currentDuration);
    }
  }, [currentDuration])

  const handleLoad = (meta: any) => {
    setDuration(meta.duration);
  };

  const redirectVod = useCallback(() => {
    if (isBodanRef.current) {
      dispatch(viewPlaylistDetails(currentVod.mini_video_topic));
      navigation.navigate('PlaylistDetail', {
        topic_id: currentVod.mini_video_topic.topic_id,
      });

      // ========== for analytics - start ==========
      watchAnytimePlaylistClicksAnalytics();
      // ========== for analytics - end ==========
    } else {
      dispatch(playVod(currentVod.mini_video_vod));
      navigation.navigate('播放', {
        vod_id: currentVod.vod?.vod_id,
        player_mode: adultMode ? 'adult' : 'normal',
      });

      // ========== for analytics - start ==========
      watchAnytimeVideoClicksAnalytics();
      // ========== for analytics - end ==========
    }
  }, [currentVod]);

  const handleViewLayout = (event: any) => {
    const {height} = event.nativeEvent.layout;
    setImageContainerHeight(height);
  };

  useEffect(() => {
    if (isPause === false) {
      setIsBuffering(false);
    }
  }, [isPause]);

  const bottomContent = useCallback(() => {
    return (
      <View
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          justifyContent: 'flex-end',
        }}>
        <View style={{paddingHorizontal: 20}}>
          {currentVod != undefined &&
            currentVod.mini_video_original_img_url != null &&
            currentVod.mini_video_original_img_url != '' && (
              <View style={{flexWrap: 'wrap'}}>
                {/* <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'flex-end', marginRight: 35 }}> */}

                {!adultMode && (
                  <View
                    style={{
                      padding: 8,
                      height: 75,
                      flexDirection: 'row',
                      borderRadius: 8,
                      backgroundColor: 'rgba(106, 106, 106, 0.25)',
                    }}>
                    <>
                      {!isBodanRef.current && (
                        <View
                          style={{
                            width: 45,
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                          }}
                          onLayout={handleViewLayout}>
                          <TouchableOpacity
                            style={{flex: 1, position: 'relative'}}
                            onPress={redirectVod}>
                            <FastImage
                              style={{flex: 1, borderRadius: 6}}
                              source={{
                                uri: currentVod.mini_video_original_img_url,
                                priority: 'high',
                              }}
                            />
                          </TouchableOpacity>
                        </View>
                      )}
                      {isBodanRef.current && (
                        <View
                          style={{
                            width: 45,
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            marginRight: 6,
                          }}
                          onLayout={handleViewLayout}>
                          <TouchableOpacity
                            style={{flex: 1, position: 'relative'}}
                            onPress={redirectVod}>
                            <FastImage
                              style={{
                                flex: 1,
                                borderRadius: 6,
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                zIndex: 3,
                              }}
                              source={{
                                uri: currentVod.mini_video_original_img_url,
                                priority: 'high',
                              }}
                              onProgress={e => {
                                setImageLoaded(false);
                              }}
                              onLoad={e => {
                                setImageLoaded(true);
                              }}
                            />
                            {imageLoaded && isBodanRef.current && (
                              <View>
                                <FastImage
                                  style={{
                                    flex: 1,
                                    borderRadius: 6,
                                    position: 'absolute',
                                    width: '100%',
                                    height: imageContainerHeight - 6,
                                    zIndex: 2,
                                    top: 5.8,
                                  }}
                                  source={require('@static/images/bodan2.jpeg')}
                                />
                                <FastImage
                                  style={{
                                    flex: 1,
                                    borderRadius: 6,
                                    position: 'absolute',
                                    width: '100%',
                                    height: imageContainerHeight - 12,
                                    top: 11.8,
                                  }}
                                  source={require('@static/images/bodan3.jpg')}
                                />
                              </View>
                            )}
                          </TouchableOpacity>
                        </View>
                      )}
                      <View
                        style={{
                          flexDirection: 'column',
                          alignContent: 'center',
                          marginLeft: 10,
                          marginRight: 5,
                        }}>
                        <TouchableOpacity onPress={redirectVod}>
                          <View
                            style={{
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              height: '100%',
                              paddingVertical: 5,
                            }}>
                            <View
                              style={{
                                justifyContent: 'flex-start',
                                flexDirection: 'row',
                              }}>
                              <View>
                                <Text
                                  numberOfLines={1}
                                  ellipsizeMode="tail"
                                  style={{
                                    ...textVariants.bodyBold,
                                    color: colors.text,
                                    fontSize: 15,
                                  }}>
                                  {vodName}
                                </Text>
                              </View>
                            </View>
                            <View
                              style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                              <View style={{flexWrap: 'wrap'}}>
                                {isBodanRef.current ? (
                                  <PlayBoDanIcon width={20} height={20} />
                                ) : (
                                  <PlayZhengPianIcon width={20} height={20} />
                                )}
                              </View>
                              <View
                                style={{
                                  paddingLeft: 6,
                                  justifyContent: 'center',
                                }}>
                                <Text
                                  style={{
                                    ...textVariants.subBody,
                                    color: colors.text,
                                    fontSize: 14,
                                  }}>
                                  {watchTextRef.current}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </>
                  </View>
                )}
              </View>
            )}
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            {/* <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'flex-end', marginRight: 35 }}> */}
            <View
              style={{
                flex: 10,
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    ...textVariants.small,
                    color: colors.text,
                    paddingBottom: 20,
                  }}>
                  {currentVod.mini_video_title}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {currentVod.is_collection?.toLowerCase() == 'y' && (
          <View
            style={{
              backgroundColor: '#171717',
              paddingBottom: 18,
              paddingTop: 12,
              paddingLeft: 20,
              paddingRight: 20,
            }}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => {
                openBottomSheet();
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <HejiIcon height={24} width={24} />
                  <Text
                    style={{
                      paddingLeft: 6,
                      alignSelf: 'center',
                      fontSize: 14,
                      color: colors.text,
                      fontWeight: '700',
                    }}>
                    {currentVod.mini_video_collection_title}
                  </Text>
                </View>
                <View style={{}}>
                  <ExpandUpIcon height={24} width={24} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }, [currentVod, adultMode]);

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
          // console.log('file exist, change source! ');
          setMiniVodUrl(`${fileLocation}`);
        } else {
          // console.log('file not exist ');
        }
      }
    };
    fn();
  }, [currentDuration, isBuffering, isPause]);

  useEffect(() => {
    setMiniVodUrl(currentVod.mini_video_origin_video_url);
  }, [currentVod]);

  return (
    <>
      {isShowVideo && (
        <TouchableWithoutFeedback
          onPress={() => {
            showControls();
            if (overlayRef.current) {
              handlePlayPause();
            }
          }}>
          <View>
            <View style={[styles.container, {height: displayHeight}]}>
              {(isBuffering ||
                (Platform.OS === 'ios'
                  ? !isVideoReadyIos
                  : !isVideoReadyAndroid)) && (
                <View style={styles.buffering}>
                  <FastImage
                    source={videoBufferGif}
                    style={{width: 100, height: 100}}
                    resizeMode="contain"
                    useFastImage={true}
                  />
                </View>
              )}
              {(Platform.OS === 'ios'
                ? !isVideoReadyIos
                : !isVideoReadyAndroid) &&
                thumbnail && (
                  <FastImage
                    source={{uri: thumbnail}}
                    style={styles.video}
                    resizeMode="contain"
                    useFastImage={true}
                  />
                )}
              <Video
                ref={videoRef}
                resizeMode="contain"
                // poster={thumbnail}
                source={{
                  uri: miniVodUrl,
                  headers: {
                    'User-Agent':
                      'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
                  },
                }}
                onReadyForDisplay={() => setVideoReadyIos(true)}
                onBuffer={onBuffer}
                repeat={true}
                style={{
                  ...styles.video,
                  opacity: (
                    Platform.OS === 'ios'
                      ? isVideoReadyIos
                      : isVideoReadyAndroid
                  )
                    ? 1
                    : 0,
                }}
                paused={
                  isPause ||
                  onSliding ||
                  (Platform.OS === 'ios' && !isVideoReadyIos)
                }
                onLoad={handleLoad}
                onLoadStart={handleLoadStart}
                onProgress={handleProgress}
                progressUpdateInterval={400}
              />
              <View
                style={{
                  position: 'absolute',
                  left: (Dimensions.get('window').width - 80) / 2,
                  top: (Dimensions.get('window').height - 130) / 2,
                  zIndex: 999,
                }}>
                {showIcon && (isPause ? <PlayIcon /> : <PauseIcon />)}
              </View>
              {bottomContent()}
              {!disableSeek && (
                <Slider
                  style={styles.slider}
                  maximumValue={duration}
                  minimumValue={0}
                  disabled={!showOverlay}
                  thumbTouchSize={{width: 10, height: 10}}
                  allowTouchTrack={!isBuffering}
                  thumbStyle={{
                    height: showOverlay ? 8 : 1,
                    width: showOverlay ? 8 : 1,
                  }}
                  value={currentDuration}
                  onValueChange={handleSeek}
                  onSlidingComplete={handleSeek}
                  minimumTrackTintColor={'#ffffff80'}
                  maximumTrackTintColor={'#ffffff24'}
                  thumbTintColor={'#FFFFFF'}
                  trackStyle={{height: 2, opacity: 1}}
                />
              )}
              {duration > 0 &&
                showOverlay &&
                currentDuration >= 0 &&
                !disableSeek &&
                (duration < 3600 ? (
                  <Text
                    style={{
                      position: 'absolute',
                      bottom: 12,
                      backgroundColor: '#000',
                      borderRadius: 4,
                      paddingVertical: 6,
                      paddingHorizontal: 10,
                      left: Math.min(
                        Math.max(
                          0,
                          (currentDuration / duration) * windowWidth - 44,
                        ),
                        windowWidth - 76,
                      ),
                    }}>
                    <Text style={textVariants.small}>
                      {new Date(currentDuration * 1000)
                        .toISOString()
                        .substring(14, 19)}
                    </Text>
                    <Text
                      style={{
                        ...textVariants.small,
                        color: colors.muted,
                      }}>{` / ${new Date(duration * 1000)
                      .toISOString()
                      .substring(14, 19)}`}</Text>
                  </Text>
                ) : (
                  <Text
                    style={{
                      position: 'absolute',
                      bottom: 20,
                      left: Math.min(
                        Math.max(
                          0,
                          (currentDuration / duration) * windowWidth - 34,
                        ),
                        windowWidth - 76,
                      ),
                    }}>
                    <Text style={textVariants.small}>
                      {new Date(currentDuration * 1000)
                        .toISOString()
                        .substring(11, 19)}
                    </Text>
                    <Text
                      style={{
                        ...textVariants.small,
                        color: colors.muted,
                      }}>{` / ${new Date(duration * 1000)
                      .toISOString()
                      .substring(11, 19)}`}</Text>
                  </Text>
                ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </>
  );
}
export default memo(ShortVideoPlayer);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  bottomLeftSection: {
    flex: 4,
  },
  bottomRightSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  channelName: {
    color: 'white',
    fontWeight: 'bold',
  },
  caption: {
    color: 'white',
    marginVertical: 8,
  },
  musicNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicNameIcon: {
    width: 12,
    height: 12,
    marginRight: 8,
  },
  musicName: {
    color: 'white',
  },
  musicDisc: {
    width: 40,
    height: 40,
  },
  verticalBar: {
    position: 'absolute',
    right: 8,
    bottom: 72,
  },
  verticalBarItem: {
    marginBottom: 24,
    alignItems: 'center',
  },
  verticalBarIcon: {
    width: 32,
    height: 32,
  },
  verticalBarText: {
    color: 'white',
    marginTop: 4,
  },
  avatarContainer: {
    marginBottom: 48,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  followButton: {
    position: 'absolute',
    bottom: -8,
  },
  followIcon: {
    width: 21,
    height: 21,
  },
  floatingMusicNote: {
    position: 'absolute',
    right: 40,
    bottom: 16,
    width: 16,
    height: 16,
    tintColor: 'white',
  },
  buffering: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
    color: 'yellow',
    position: 'absolute',
    top: '40%',
    left: '36%',
    zIndex: 999,
  },
  slider: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 9,
  },
});
