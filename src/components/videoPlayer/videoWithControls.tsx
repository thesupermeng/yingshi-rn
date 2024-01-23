import { MutableRefObject, memo } from "react"
import { Platform, StyleSheet, View } from "react-native";
import Video from "react-native-video";
import VideoControlsOverlay from "./VideoControlsOverlay";
import { LiveTVStationItem, VodEpisodeListType, VodType } from "@type/ajaxTypes";
import AdultModeCountdownIndicator from "../adultVideo/adultModeCountdownIndicator";
import { useRoute } from "@react-navigation/native";


interface Props {
    playbackRate: number,
    videoPlayerRef: any,
    isPaused: boolean,
    vod_source?: any,
    vod_url?: string,
    currentTimeRef: any,
    controlsRef: any,
    currentTime: number,
    duration: number,
    isFullScreen: boolean,
    vodTitle: string,
    videoType: string,
    activeEpisode?: number,
    episodes?: VodEpisodeListType,
    rangeSize?: number,
    accumulatedSkip: any,
    movieList: VodType[],
    showGuide: boolean,
    showMoreType: "episodes" | "none" | "streams" | "movies",
    streams: LiveTVStationItem[],
    isFetchingRecommendedMovies?: boolean,
    onBuffer: (bufferObj: any) => void,
    getNextEpisode: () => (() => void) | undefined,
    onVideoLoaded: (data: any) => void,
    onVideoProgessing: (data: any) => void,
    onSeek: (time: number) => void,
    onSeekGesture: (time: number) => void,
    onSkip: (time: any) => void,
    onTogglePlayPause: () => void,
    onToggleFullScreen: () => void,
    onGoBack: () => void,
    setPlaybackRate: (value: number) => void,
    changeEpisodeAndPlay: (ep: any) => void,
    onShare: () => any,
    onReadyForDisplay?: () => void,
    isVip: boolean,
    vodID?: number,
    sourceID?: number,
    onDownloadVod?: (nid: number) => void,
    setShowAdOverlay: (show: boolean) => void
}

const VideoWithControls = ({
    playbackRate,
    videoPlayerRef,
    isPaused,
    vod_source,
    vod_url,
    currentTimeRef,
    controlsRef,
    currentTime,
    duration,
    isFullScreen,
    vodTitle,
    videoType,
    activeEpisode,
    episodes,
    rangeSize,
    accumulatedSkip,
    movieList,
    showGuide,
    showMoreType,
    streams,
    isFetchingRecommendedMovies,
    onBuffer,
    getNextEpisode,
    onVideoLoaded,
    onVideoProgessing,
    onSeek,
    onSeekGesture,
    onSkip,
    onTogglePlayPause,
    onToggleFullScreen,
    onGoBack,
    setPlaybackRate,
    changeEpisodeAndPlay,
    onShare,
    onReadyForDisplay,
    isVip,
    vodID,
    sourceID,
    onDownloadVod,
    setShowAdOverlay
}: Props) => {

    const route = useRoute()

    /**
     * Please read: 
     * There is an issue with the sport live video where
     * only in ANDROID, the sport live video cannot be paused. In IOS it works normally. 
     * Found out that if removed the ref field, the ANDROID sport live video pause functions as expected. 
     * However, the ref is required to perform functionalities like 'seek', as both sport video player and 
     * normal vod video will use this component. 
     * 
     * A solution would be to remove the ref in ANDROID sport live stream, since it does use the seek method. 
     * 
     * Reference : 
     * This problem only occur in react-native-video@5.2.1 ; As of writing, this is the most stable version. 
     * Upgrading to current latest version (6.0.0-beta3) can solve the issue, however, methods like setNativeProps
     * no longer works. 
     * To ensure the stability of IOS and prevent any other side effects, v5.2.1 will remain to be used. 
     * 
     */

    const conditionalProp = Platform.OS === 'android' && route.name === '体育详情' ? {} : {ref: ref => (videoPlayerRef.current = ref)}

    return (
        <View
            style={{
                position: 'absolute'
            }}
        >
            <Video
                mixWithOthers="mix"
                disableFocus
                rate={playbackRate}
                ignoreSilentSwitch="ignore"
                fullscreen={false}  // make it false to prevent duplicate fullscreen function 
                onBuffer={onBuffer}
                paused={isPaused} // Pause video when app is in the background
                resizeMode="contain"
                playWhenInactive={true}
                onEnd={() => {
                    const nextEpi = getNextEpisode();
                    if (nextEpi !== undefined) {
                        nextEpi();
                    }
                }}
                source={
                    vod_source !== undefined
                        ? vod_source
                        : {
                            uri: vod_url,
                            headers: {
                                origin: 'https://v.kylintv.com',
                                referer: 'https://v.kylintv.com',
                            },
                        }
                }
                onLoad={onVideoLoaded}
                progressUpdateInterval={1000}
                onProgress={onVideoProgessing}
                onSeek={data => {
                    if (currentTimeRef) {
                        currentTimeRef.current = data.currentTime;
                    }
                }}
                onReadyForDisplay={onReadyForDisplay}
                style={styles.video}
                {...conditionalProp}
            />
            <VideoControlsOverlay
                ref={controlsRef}
                videoUrl={vod_url ?? ''}
                onVideoSeek={onSeek}
                onSeekGesture={onSeekGesture}
                currentTime={currentTime}
                duration={duration}
                onFastForward={onSkip}
                paused={isPaused}
                isFullScreen={isFullScreen}
                onTogglePlayPause={onTogglePlayPause}
                headerTitle={vodTitle}
                onHandleFullScreen={onToggleFullScreen}
                onHandleGoBack={onGoBack}
                videoType={videoType}
                playbackRate={playbackRate}
                onPlaybackRateChange={(rate: number) => {
                    setPlaybackRate(rate);
                }}
                activeEpisode={activeEpisode}
                episodes={episodes}
                onEpisodeChange={changeEpisodeAndPlay}
                rangeSize={rangeSize}
                onNextEpisode={getNextEpisode()}
                accumulatedSkip={accumulatedSkip.current}
                onShare={onShare}
                movieList={movieList}
                showGuide={showGuide}
                showMoreType={showMoreType}
                streams={streams}
                isFetchingRecommendedMovies={isFetchingRecommendedMovies}
                isVip={isVip}
                vodID={vodID}
                sourceID={sourceID}
                onDownloadVod={onDownloadVod}
                setShowAdOverlay={setShowAdOverlay}
            />

        </View>
    );
}

export default memo(VideoWithControls);


const styles = StyleSheet.create({
    video: {
        width: '100%',
        aspectRatio: 16 / 9,
    },
});
