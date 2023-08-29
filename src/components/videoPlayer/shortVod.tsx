import React, {useEffect, useState, memo, useMemo, useRef} from 'react';
import ShortVideoPlayer from '../../components/videoPlayer/shortVodPlayer';
import CollectionBottomSheet from '../../../src/components/miniCollection/CollectionBottomSheet';
import BottomSheet from '@gorhom/bottom-sheet';

interface Props {
    vod_url?: string;
    thumbnail?: string;
    isActive?: boolean;
    videoTitle?: string;
    displayHeight: number;
    vod: any;
    inCollectionView?: boolean;
    setCollectionEpisode?: any;
}

function ShortVod({
    vod,
    vod_url,
    isActive,
    thumbnail,
    videoTitle,
    displayHeight = 0,
    inCollectionView = false,
    setCollectionEpisode
}: Props) {
    const sheetRef = useRef<BottomSheet>(null);
    const [vodUrl, setVodUrl] = useState(vod_url);
    const [currentVod, setVod] = useState(vod);

    const changeEpisode = (item: any, index: number) => {
        setVodUrl(item.mini_video_origin_video_url);
        setVod(item);
        setCollectionEpisode(index);
        sheetRef.current?.close();
    }

    const openSheet = () => {
        sheetRef.current?.snapToIndex(1);
    }

    return(
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
            />
            <CollectionBottomSheet 
              sheetRef={sheetRef}
              collectionVideoId={currentVod.mini_video_id}
              collectionId={currentVod.mini_video_heji_id}
              collectionName={currentVod.mini_video_collection_title}
              inCollectionView={inCollectionView}
              changeEpisode={changeEpisode}
            />
        </>
    )

}

export default ShortVod