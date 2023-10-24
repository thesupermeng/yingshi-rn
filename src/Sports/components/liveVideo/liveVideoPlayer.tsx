import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import styles from './style';
import { VideoLiveType } from '../../global/const';
import { MatchDetailsType, Stream } from '../../types/matchTypes';
import VodPlayer from '../../../components/videoPlayer/vodPlayer';
import { lockAppOrientation } from '../../../redux/actions/settingsActions';
import { RootState } from '../../../redux/store';
import { SettingsReducerState } from '../../../redux/reducers/settingsReducer';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';

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
    const homeName = liveDataState?.home?.name;
    const awayName = liveDataState?.away?.name;
    const combinedName = `${homeName} vs ${awayName}`;
    
    const dispatch = useAppDispatch();
    
    const settingsReducer: SettingsReducerState = useAppSelector(
        ({ settingsReducer }: RootState) => settingsReducer
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
    console.log('111', videoSource?.url !== undefined)
    console.log('222', videoSource?.type === VideoLiveType.LIVE)
    console.log('333', videoSource?.type)
    return (
        <View style={styles.container}>
            {/* <View style={{height: isFullScreen ? '100%' : 'auto'}}> */}
                {/* <View style={styles.videoDiv}> */}
                {(videoSource !== undefined || streamData?.src) && (
                    <>
                        {
                            videoSource?.url !== undefined && (
                                videoSource.type === VideoLiveType.LIVE
                                    ? <VodPlayer 
                                        onBack={onHandleBack}
                                        vod_source={videoSource.url}
                                        videoType='live'
                                        vodTitle={combinedName} 
                                        appOrientation={settingsReducer.appOrientation}
                                        devicesOrientation={settingsReducer.devicesOrientation}
                                        lockOrientation={lockOrientation}
                                    />
                                    : <VodPlayer 
                                        onBack={onHandleBack}
                                        vod_url={videoSource.url}
                                        videoType='live'
                                        vodTitle={combinedName}
                                        appOrientation={settingsReducer.appOrientation}
                                        devicesOrientation={settingsReducer.devicesOrientation}
                                        lockOrientation={lockOrientation}
                                        useWebview={true}
                                    />
                            )

                        }
                    </>
                )}
            {/* </View> */}
        </View>
    );
};

export default LiveVideo;
