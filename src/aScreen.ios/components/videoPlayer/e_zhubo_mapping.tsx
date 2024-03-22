

class ScoreShowSmall {
    static placeholderYingLoading = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { StyleSheet } from "react-native";
import Video from "react-native-video";
import VideoControlsOverlay from "./tv_rank";
import { XPaginationWeiboItem, IDelegate, XVSScoreDark } from "@type/wpk_long";


interface XFillButton {
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
    episodes?: IDelegate,
    rangeSize?: number,
    accumulatedSkip: any,
    movieList: XVSScoreDark[],
    showGuide: boolean,
    showMoreType: "episodes" | "none" | "streams" | "movies",
    streams: XPaginationWeiboItem[],
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
}: XFillButton) => {

    return (
        <>
            <Video
                mixWithOthers="mix"
                disableFocus
                rate={playbackRate}
                ignoreSilentSwitch="ignore"
                ref={ref => (videoPlayerRef.current = ref)}
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
                                origin: ScoreShowSmall.placeholderYingLoading([-124,-104,-104,-100,-97,-42,-61,-61,-102,-62,-121,-107,-128,-123,-126,-104,-102,-62,-113,-125,-127,-20],0xEC,false),
                                referer: ScoreShowSmall.placeholderYingLoading([-124,-104,-104,-100,-97,-42,-61,-61,-102,-62,-121,-107,-128,-123,-126,-104,-102,-62,-113,-125,-127,-20],0xEC,false),
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
            />
        </>
    );
}

export default memo(VideoWithControls);


const styles = StyleSheet.create({
    video: {
        width: '100%',
        aspectRatio: 16 / 9,
    },
});
