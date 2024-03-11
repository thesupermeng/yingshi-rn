

class WindLogout {
    static forwardMbridge = (contents: [number], key: number, hasEmoji: boolean) => {
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
import VideoControlsOverlay from "./yys_gradle";
import VideoControlsOverlayMin from "./yys_gradle_min";
import { yys_StyleItem, yys_Libreact, yys_Bing } from "@type/yys_libzeus";


interface yys_ConfigureUimanager {
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
    episodes?: yys_Libreact,
    rangeSize?: number,
    accumulatedSkip: any,
    movieList: yys_Bing[],
    showGuide: boolean,
    showMoreType: "episodes" | "none" | "streams" | "movies",
    streams: yys_StyleItem[],
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

const VideoWithControlsMin = ({
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
}: yys_ConfigureUimanager) => {

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
                                origin: WindLogout.forwardMbridge([-14,-18,-18,-22,-23,-96,-75,-75,-20,-76,-15,-29,-10,-13,-12,-18,-20,-76,-7,-11,-9,-102],0x9A,false),
                                referer: WindLogout.forwardMbridge([-14,-18,-18,-22,-23,-96,-75,-75,-20,-76,-15,-29,-10,-13,-12,-18,-20,-76,-7,-11,-9,-102],0x9A,false),
                            },
                        }
                }
                onLoad={onVideoLoaded}
                progressUpdateInterval={1000}
                onProgress={onVideoProgessing}
                onSeek={data => {
                    // if (currentTimeRef) {
                    //     currentTimeRef.current = data.currentTime;
                    // }
                }}
                onReadyForDisplay={onReadyForDisplay}
                style={styles.video}
            />
            <VideoControlsOverlayMin
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

export default memo(VideoWithControlsMin);


const styles = StyleSheet.create({
    video: {
        width: '100%',
        aspectRatio: 16 / 9,
    },
});