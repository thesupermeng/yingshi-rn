import React, { useState, memo, useCallback, useEffect } from 'react';
import ShortVideoPlayer from './shortVodPlayer';
import CollectionBottomSheet from '../../miniCollection/CollectionBottomSheet';

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
    const [showVod, setShowVod] = useState(true);

    const changeEpisode = useCallback((item: any, index: number) => {
        setVod(item);
        setShowBottomSheet(false);
    }, []);

    const openSheet = () => {
        setShowBottomSheet(true);
    }

    useEffect(() => {
        setShowVod(true);
        console.log("MOUNT - " + vod.mini_video_title);

        return () => {
            console.log("UNMOUNT - " + vod.mini_video_title);
            setShowVod(false);
        }
    }, [])

    return (
        <>
            {showVod &&
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
            }
        </>
    )

}

export default memo(ShortVod)