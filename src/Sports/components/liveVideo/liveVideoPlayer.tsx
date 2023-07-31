import React, { useState, useEffect, useRef } from 'react';
import { View, BackHandler, AppState, Platform } from 'react-native';
import styles from './style';
// import { VideoPlayer } from '../videoPlayer/VideoPlayer';
import Orientation from 'react-native-orientation-locker';

//redux
// import LiveRoomAction, {
//   hideControlAction,
//   setVideoFullScreen,
//   setVideoSource,
// } from '../../pages/matchDetails/action';
import { useDispatch, useSelector } from 'react-redux';
import { VideoLiveType } from '../../global/const';
// import {videoPlayerControl} from '../../pages/matchDetails/reducer';
import systemSetting from 'react-native-system-setting';
import { MatchDetailsType, Stream } from '../../types/matchTypes';
import Video from 'react-native-video';
import VodPlayer from '../../../components/videoPlayer/vodPlayer';

interface Props {
    matchID?: number,
    streamID?: number,
    liveDataState?: MatchDetailsType,
    onLiveEnd?: any,
    onLoad?: any,
    videoSource?: {
        type: number,
        url: any
    },
    setVideoSource?: any
}

const LiveVideo = ({ matchID, liveDataState, onLiveEnd, onLoad, streamID, videoSource, setVideoSource }: Props) => {

    const matchIdRef = useRef(matchID);
    const playerRef = React.useRef<Video>(null);
    const homeName = liveDataState?.home?.name;
    const awayName = liveDataState?.away?.name;
    const combinedName = `${homeName} vs ${awayName}`;
    const beginWatch = useRef(new Date());
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isLocked, setIsLocked] = useState(false);

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

    useEffect(() => {
        if (isFullScreen) {
            Orientation.lockToLandscape();
        } else {
            Orientation.lockToPortrait();
        }
    }, [isFullScreen]);

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

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
                if (isLocked) {
                    return true;
                }
                onHandleBack();
                return true;
            },
        );

        return () => {
            backHandler.remove();
        };
    }, [streamsData, isFullScreen]);


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
    const onHandleBack = () => {
        Orientation.lockToPortrait();
        // deleteGLog();
        if (isFullScreen) {
            // setStreamID(streamID);
            setIsFullScreen(false);
            // dispatch(hideControlAction());
        } else {
            // props?.setStreamID(streamID);
            setVideoSource(VideoLiveType.DETAIL, '')
            // navigation.goBack();
            // navigation.navigate('MatchDetailsPage', {
            //   route: {params: {streamerId: streamID, matchId: matchID}},
            // });
        }
    };

    // console.log('videoPlayerControl.source', videoSource);
    return (
        <View style={styles.container}>
            <View
                style={
                    isFullScreen
                        ? styles.videoDivFul
                        : {
                            ...styles.videoDiv,
                            aspectRatio:
                                liveDataState?.streams === undefined || liveDataState.streams.length === 0
                                    ? Platform.OS === 'ios'
                                        ? 749 / 464
                                        : 738 / 464
                                    : 1024 / 576,
                        }
                }>
                {/* <View style={styles.videoDiv}> */}
                {(videoSource !== undefined || streamData?.src) && (
                    <>
                        {
                            videoSource?.url !== undefined && (
                                videoSource.type === VideoLiveType.LIVE
                                    ? <VodPlayer onBack={onHandleBack} vod_source={videoSource.url} videoType='live' vodTitle={combinedName} />
                                    : <VodPlayer onBack={onHandleBack} vod_url={videoSource.url} videoType='live' vodTitle={combinedName} useWebview={true} />
                            )

                        }
                    </>
                    // <Video
                    //     ref={playerRef}
                    //     fullscreen={isFullScreen}
                    //     // onErrorLog={errorGLog}
                    //     videoTitle={combinedName}
                    //     style={isFullScreen ? styles.videoCompFul : styles.videoComp}
                    //     resizeMode={'contain'}
                    //     repeat={true}
                    //     controls={false}
                    //     autoPlay={true}
                    //     paused={false}
                    //     muted={false} //false in default
                    //     source={{
                    //         uri: videoSource?.url || streamData?.src,
                    //     }}
                    //     controlTimeout={15000}
                    //     // onLoad={() => {
                    //     //     console.log('ONLoad');
                    //     //     setPaused(false);
                    //     // }}
                    //     onLoad={onLoad}
                    //     onBack={() => {
                    //         onHandleBack();
                    //     }}
                    //     onLiveEnd={onLiveEnd}
                    //     onEnterFullscreen={() => {
                    //         setIsFullScreen(true)
                    //     }}
                    //     onExitFullscreen={() => {
                    //         setIsFullScreen(false)
                    //     }}
                    // />
                )}
            </View>
        </View>
    );
};

export default LiveVideo;
