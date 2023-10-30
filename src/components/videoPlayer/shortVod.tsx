import React, { useState, memo, useCallback } from 'react';
import ShortVideoPlayer from '../../components/videoPlayer/shortVodPlayer';
import CollectionBottomSheet from '../../../src/components/miniCollection/CollectionBottomSheet';

interface Props {
    vod_url?: string;
    thumbnail?: string;
    isActive?: boolean;
    videoTitle?: string;
    displayHeight: number;
    vod: any;
    inCollectionView?: boolean;
    setCollectionEpisode?: any;
    isScrolling: boolean,
}

function ShortVod({
    vod,
    vod_url,
    isActive,
    thumbnail,
    videoTitle,
    displayHeight = 0,
    inCollectionView = false,
    setCollectionEpisode,
    isScrolling = false,
}: Props) {
    const [isShowBottomSheet, setShowBottomSheet] = useState(false);
    const [vodUrl, setVodUrl] = useState(vod_url);
    const [currentVod, setVod] = useState(vod);

    const changeEpisode = useCallback((item: any, index: number) => {
        setVodUrl(item.mini_video_origin_video_url);
        setVod(item);
        setCollectionEpisode(index);
        setShowBottomSheet(false);
    }, []);

    const openSheet = () => {
        setShowBottomSheet(true);
    }

    return (
        <>
            <ShortVideoPlayer
                vod={currentVod}
                vod_url={vodUrl}
                isActive={isActive}
                thumbnail={thumbnail}
                videoTitle={videoTitle}
                displayHeight={displayHeight}
                inCollectionView={inCollectionView}
                setCollectionEpisode={setCollectionEpisode}
                openSheet={openSheet}
                isScrolling={isScrolling}
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
        </>
    )

}

export default memo(ShortVod)