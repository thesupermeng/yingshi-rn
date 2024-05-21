import React, { useState, memo, useCallback, useEffect } from 'react';
import ShortVideoPlayer from '../../components/videoPlayer/shortVodPlayer';
import CollectionBottomSheet from '../../../components/miniCollection/CollectionBottomSheet';

interface Props {
    thumbnail?: string;
    displayHeight: number;
    vod: any;
    inCollectionView?: boolean;
    setCollectionEpisode?: any;
    isPause: boolean;
    onManualPause: (value: boolean) => void;
    isShowVideo: boolean,
    currentDuration: number,
    updateVideoDuration: (duration: number) => any,
    isActive: boolean,
    videoHeaderReferer?: string,
}

function ShortVod({
    vod,
    thumbnail,
    displayHeight = 0,
    inCollectionView = false,
    setCollectionEpisode,
    isPause = true,
    onManualPause,
    isShowVideo,
    currentDuration,
    updateVideoDuration,
    isActive,
    videoHeaderReferer,
}: Props) {
    const [isShowBottomSheet, setShowBottomSheet] = useState(false);
    const [currentVod, setVod] = useState(vod);
    const [showVod, setShowVod] = useState(true);

    const changeEpisode = useCallback((item: any, index: number) => {
        setVod(item);
        // setCollectionEpisode(index);
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

    useEffect(() => {
        if (vod) setVod(vod);
    }, [vod])

    return (
        <>
            {showVod &&
                <>
                    <ShortVideoPlayer
                        vod={currentVod}
                        thumbnail={thumbnail}
                        displayHeight={displayHeight}
                        inCollectionView={inCollectionView}
                        setCollectionEpisode={setCollectionEpisode}
                        openSheet={openSheet}
                        isPause={isPause}
                        onManualPause={onManualPause}
                        isShowVideo={isShowVideo}
                        currentDuration={currentDuration}
                        updateVideoDuration={updateVideoDuration}
                        isActive={isActive}
                        videoHeaderReferer={videoHeaderReferer}
                    />
                    {currentVod.mini_video_heji_id !== 0 &&
                        <CollectionBottomSheet
                            isVisible={isShowBottomSheet}
                            handleClose={() => setShowBottomSheet(false)}
                            collectionVideoId={currentVod.mini_video_id}
                            collectionId={currentVod.mini_video_heji_id}
                            collectionName={currentVod.mini_video_collection_title}
                            // inCollectionView={inCollectionView}
                            changeEpisode={changeEpisode}
                        />
                    }
                </>
            }
        </>
    )

}

export default memo(ShortVod)