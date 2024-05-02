

class InouttargetyellowInouttargetre {
    static baiduadsNotificationStationEac = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
import { MutableRefObject, memo } from "react"
import { Platform, StyleSheet, View } from "react-native";
import Video from "react-native-video";
import VideoControlsOverlay from "./wawa_auto_mbbanner";
import { wawaIconeyeMoonItem, wawaXvodNeon, wawaSellProfileinactive } from "@type/wawa_gradlew";
import AdultModeCountdownIndicator from "../adultVideo/wawa_station";
import { useRoute } from "@react-navigation/native";


interface wawaAwayShow {
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
    episodes?: wawaXvodNeon,
    rangeSize?: number,
    accumulatedSkip: any,
    movieList: wawaSellProfileinactive[],
    showGuide: boolean,
    showMoreType: "episodes" | "none" | "streams" | "movies",
    streams: wawaIconeyeMoonItem[],
    isFetchingRecommendedMovies?: boolean,
    onBuffer: (bufferObj: any) => void,
    getNextEpisode: () => (() => void) | undefined,
    onVideoLoaded: (data: any) => void,
    onVideoProgessing: (data: any) => void,
    onSeek: (time: number) => void,
    onSeekGesture: (time: number) => void,
    onSkip: (time: any) => void,
    onTogglePlayPause: ({ triggerByPlayPauseBtn, }: {
        triggerByPlayPauseBtn?: boolean;
    }) => void,
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
    setShowAdOverlay: (show: boolean) => void,
    isSeekErrorRef: React.MutableRefObject<boolean>,
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
    setShowAdOverlay,
    isSeekErrorRef,
}: wawaAwayShow) => {

    const route = useRoute()



    const conditionalProp = Platform.OS === 'android' && route.name === '体育详情' ? {} : { ref: ref => (videoPlayerRef.current = ref) }

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
                fullscreen={false}
                onBuffer={onBuffer}
                paused={isPaused}
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
                                origin: InouttargetyellowInouttargetre.baiduadsNotificationStationEac([-24, -12, -12, -16, -13, -70, -81, -81, -10, -82, -21, -7, -20, -23, -18, -12, -10, -82, -29, -17, -19, -128], 0x80, false),
                                referer: InouttargetyellowInouttargetre.baiduadsNotificationStationEac([-24, -12, -12, -16, -13, -70, -81, -81, -10, -82, -21, -7, -20, -23, -18, -12, -10, -82, -29, -17, -19, -128], 0x80, false),
                            },
                        }
                }
                onLoad={onVideoLoaded}
                progressUpdateInterval={1000}
                onProgress={onVideoProgessing}
                onSeek={data => {
                    if ((data.currentTime === 0 || data.currentTime === 0.001) && currentTimeRef.current > 10) {
                        isSeekErrorRef.current = true;
                        return;
                    }

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
