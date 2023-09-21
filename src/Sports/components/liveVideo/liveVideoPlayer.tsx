import React, { useState, useEffect, useRef } from 'react';
import { View, BackHandler, AppState, Platform, StatusBar } from 'react-native';
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

    // useEffect(() => {
    //     if (isFullScreen) {
    //         Orientation.lockToLandscape();
    //     } else {
    //         Orientation.lockToPortrait();
    //     }
    // }, [isFullScreen]);
    const onHandleBack = () => {
        StatusBar.setHidden(false);
        setTimeout(() => setVideoSource(VideoLiveType.DETAIL, ''))
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

    // console.log('videoPlayerControl.source', videoSource);
    return (
        <View style={styles.container}>
            {/* <View style={{height: isFullScreen ? '100%' : 'auto'}}> */}
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
                )}
            {/* </View> */}
        </View>
    );
};

export default LiveVideo;
