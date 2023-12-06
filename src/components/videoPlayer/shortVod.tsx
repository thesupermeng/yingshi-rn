import React, { useState, memo, useCallback } from 'react';
import ShortVideoPlayer from '../../components/videoPlayer/shortVodPlayer';
import CollectionBottomSheet from '../../../src/components/miniCollection/CollectionBottomSheet';

interface Props {
    thumbnail?: string;
    displayHeight: number;
    vod: any;
    isPause: boolean;
    onManualPause: (value: boolean) => void;
    isShowVideo: boolean,
    currentDuration: number,
    updateVideoDuration: (duration: number) => any,
    isActive: boolean,
}

function ShortVod({
    vod,
    thumbnail,
    displayHeight = 0,
    isPause = true,
    onManualPause,
    isShowVideo,
    currentDuration,
    updateVideoDuration,
    isActive,
}: Props) {
    const [isShowBottomSheet, setShowBottomSheet] = useState(false);
    const [currentVod, setVod] = useState(vod);

    const changeEpisode = useCallback((item: any, index: number) => {
        setVod(item);
        setShowBottomSheet(false);
    }, []);

    const openSheet = () => {
        setShowBottomSheet(true);
    }

    return (
        <>
            <ShortVideoPlayer
                vod={currentVod}
                thumbnail={thumbnail}
                displayHeight={displayHeight}
                openSheet={openSheet}
                isPause={isPause}
                onManualPause={onManualPause}
                isShowVideo={isShowVideo}
                currentDuration={currentDuration}
                updateVideoDuration={updateVideoDuration}
                isActive={isActive}
            />
            { currentVod.mini_video_heji_id !== 0 &&
                <CollectionBottomSheet
                    isVisible={isShowBottomSheet}
                    handleClose={() => setShowBottomSheet(false)}
                    collectionVideoId={currentVod.mini_video_id}
                    collectionId={currentVod.mini_video_heji_id}
                    collectionName={currentVod.mini_video_collection_title}
                    changeEpisode={changeEpisode}
                />
            }
        </>
    )

}

export default memo(ShortVod)