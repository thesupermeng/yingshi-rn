import React, {useState, useEffect, useCallback, memo, useRef} from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import {VideoLiveType} from '../../global/const';
import {MatchDetailsType, Stream} from '../../types/matchTypes';
import VodPlayer, {VideoRef} from '../../../components/videoPlayer/vodPlayer';
import {lockAppOrientation} from '@redux/actions/settingsActions';
import {RootState} from '@redux/store';
import {SettingsReducerState} from '@redux/reducers/settingsReducer';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import WebView from 'react-native-webview';
import BackIcon from '@static/images/back_arrow.svg';
import {useIsFocused, useTheme} from '@react-navigation/native';
import UmengAnalytics from '../../../../Umeng/UmengAnalytics';
import CountdownIndicator from '../../../components/button/countdownIndicator';
import VipGuideModal from '../../../components/modal/vipGuide';

interface Props {
  videoRef?: React.MutableRefObject<VideoRef | null>;
  matchID?: number;
  streamID?: number;
  liveDataState?: MatchDetailsType;
  onLiveEnd?: any;
  onLoad?: any;
  videoSource?: {
    type: number;
    url: any;
  };
  setVideoSource?: any;
  onGoBack: () => void;
  showCountdown: boolean;
  countdownTime?: number;
  onVipCountdownClick: () => void;
}

const LiveVideo = ({
  videoRef,
  matchID,
  liveDataState,
  onLiveEnd,
  onLoad,
  streamID,
  videoSource,
  setVideoSource,
  onGoBack,
  showCountdown = false,
  countdownTime = 0,
  onVipCountdownClick,
}: Props) => {
  const {colors} = useTheme();

  const homeName = liveDataState?.home?.name;
  const awayName = liveDataState?.away?.name;
  const combinedName = `${homeName} vs ${awayName}`;

  const dispatch = useAppDispatch();

  const [isReadyPlay, setReadyPlay] = useState(false);
  const settingsReducer: SettingsReducerState = useAppSelector(
    ({settingsReducer}: RootState) => settingsReducer,
  );

  // const {
  //   source: videoSource,
  //   isFullScreen,
  //   isLocked,
  //   videoType,
  // } = useSelector(s => s.videoPlayerControl);

  // const [liveRoomAction] = useState(new LiveRoomAction(dispatch));
  const [streamData, setStreamData] = useState<Stream | undefined>();
  const streamsData = liveDataState?.streams;
  const streamRoomID = streamData?.id;
  //   const streamRoomIdRef = useRef(streamID);

  const onHandleBack = () => {
    if (
      settingsReducer.appOrientation === 'PORTRAIT' ||
      settingsReducer.appOrientation === 'PORTRAIT-UPSIDEDOWN'
    ) {
      setTimeout(() => setVideoSource(VideoLiveType.DETAIL, ''), 100);
    } else {
      onGoBack();
    }
  };

  useEffect(() => {
    if (streamsData) {
      const streamsDataArrayData = streamsData?.map(index => {
        // console.log('INDEX', index?.streamer_id);
        if (index?.streamer_id == streamID) {
          setStreamData(index);
        }

        return () => {
          streamsDataArrayData;
        };
      });
    }
  }, [streamsData]);

  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', nextAppState => {
  //     if (nextAppState.match(/inactive|background/)) {
  //       // sendWatchDurationLog();
  //     } else if (nextAppState.match(/active/)) {
  //       beginWatch.current = new Date();
  //       playerRef.current?.seek?.(0);
  //     }
  //   });

  //   let brightness = 1;
  //   const saveBrightness = async () => {
  //     await systemSetting.getBrightness().then(val => {
  //       brightness = val;
  //     });
  //   };
  //   saveBrightness();

  //   return () => {
  //     subscription.remove();
  //     // sendWatchDurationLog();
  //     systemSetting.setAppBrightness(brightness);
  //   };
  // }, []);

  // const sendGLog = () => {
  //   liveRoomAction.sendGeneridLog(streamRoomID);
  //   console.log('added log');
  // };
  // const deleteGLog = () => {
  //   liveRoomAction.deleteGeneridLog(streamRoomID);
  //   console.log('deleted log');
  // };
  // const errorGLog = () => {
  //   liveRoomAction.errorGeneridLog(streamRoomID);
  //   console.log('error log');
  // };

  // const sendWatchDurationLog = () => {
  //   const totalWatchTime = new Date() - beginWatch.current;
  //   liveRoomAction?.watchDurationLog?.(
  //     matchIdRef.current,
  //     streamRoomIdRef.current,
  //     totalWatchTime,
  //   );
  // };

  const lockOrientation = (orientation: string) => {
    dispatch(lockAppOrientation(orientation));
  };

  // ========== for analytics - start ==========
  const onReadyForDisplay = useCallback(() => {
    if (!isReadyPlay && videoSource !== undefined) {
      setReadyPlay(true);
      UmengAnalytics.sportDetailsPlaysTimesAnalytics(
        videoSource.type === VideoLiveType.LIVE ? 'live' : 'animation',
      );
    }
  }, [isReadyPlay, videoSource]);
  // ========== for analytics - end ==========

  const isFocus = useIsFocused();

  return (
    <View style={styles.container}>
      {/* <View style={{height: isFullScreen ? '100%' : 'auto'}}> */}
      {/* <View style={styles.videoDiv}> */}
      {(videoSource !== undefined || streamData?.src) && (
        <>
          {videoSource?.url !== undefined &&
            (videoSource.type === VideoLiveType.LIVE ? (
              <>
                {isFocus && (
                  <VodPlayer
                    ref={videoRef}
                    onBack={onHandleBack}
                    vod_source={videoSource.url}
                    videoType="live"
                    vodTitle={combinedName}
                    appOrientation={settingsReducer.appOrientation}
                    devicesOrientation={settingsReducer.devicesOrientation}
                    lockOrientation={lockOrientation}
                    onReadyForDisplay={onReadyForDisplay}
                  />
                )}
                {showCountdown && (
                  <CountdownIndicator
                    timer={countdownTime}
                    onClickVip={() => {
                      onVipCountdownClick();
                    }}
                    vipButtonText="开通VIP畅享无限内容"
                    containerStyle={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                    }}
                  />
                )}
              </>
            ) : (
              <View
                style={{
                  width: '100%',
                  aspectRatio: 16 / 9,
                }}>
                <WebView resizeMode="contain" source={{uri: videoSource.url}} />
                <TouchableOpacity
                  onPress={onHandleBack}
                  style={{position: 'absolute', padding: 20}}>
                  <BackIcon
                    style={{
                      color: colors.text,
                    }}></BackIcon>
                </TouchableOpacity>
              </View>
            ))}
        </>
      )}
      {/* </View> */}
    </View>
  );
};

export default memo(LiveVideo);
