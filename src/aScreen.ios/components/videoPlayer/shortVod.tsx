import React, { useState, memo, useCallback } from 'react';
import ShortVideoPlayer from '../../components/videoPlayer/shortVodPlayer';
import CollectionBottomSheet from '../../../components/miniCollection/CollectionBottomSheet';
import { IconGroup } from '../watchAnytime';

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
}: Props) {
    const [isShowBottomSheet, setShowBottomSheet] = useState(false);
    const [currentVod, setVod] = useState(vod);

    const changeEpisode = useCallback((item: any, index: number) => {
        setVod(item);
        setCollectionEpisode(index);
        setShowBottomSheet(false);
    }, []);

    const openSheet = () => {
        setShowBottomSheet(true);
    }

    const maxLength = 10;
    const vodName = currentVod?.mini_video_original_video_name.length > maxLength
        ? currentVod?.mini_video_original_video_name.substring(0, maxLength) + '...'
        : currentVod?.mini_video_original_video_name;

    return (
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
            />
            <CollectionBottomSheet
                isVisible={isShowBottomSheet}
                handleClose={() => setShowBottomSheet(false)}
                collectionVideoId={currentVod.mini_video_id}
                collectionId={currentVod.mini_video_heji_id}
                collectionName={currentVod.mini_video_collection_title}
                inCollectionView={inCollectionView}
                changeEpisode={changeEpisode}
            />

            <IconGroup
                vodId={currentVod.mini_video_id}
                vodName={vodName}
                comments={currentVod?.comments}
            />
        </>
    )

}

export default memo(ShortVod)