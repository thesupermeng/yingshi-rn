import React, { useState, useCallback, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, Dimensions, RefreshControl } from 'react-native';
import { MiniVideo } from '../../types/ajaxTypes';
import ShortVod from '../../components/videoPlayer/shortVod';
import FastImage from 'react-native-fast-image';
import { useTheme, useIsFocused } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import {useQueryClient} from '@tanstack/react-query';

type MiniVideoResponseType = {
    data: {
        List: Array<MiniVideo>
    }
}

interface Props {
    videos: any,
    hasNextPage: boolean | undefined,
    fetchNextPage: any,
    isFetchingNextPage: any, 
    isFetching: boolean,
    isPaused: boolean,
    inCollectionView?: boolean,
    setParentCurrent?: any,
    initialIndex?: number,
    collection_ori_all_videos?: any,
    enterPosition?: number,
    setCollectionEpisode?: any,
    currentVodIndex?: number,
    handleRefreshMiniVod?: any,
}

const ITEM_HEIGHT = Dimensions.get('window').height;

export default ({ handleRefreshMiniVod, currentVodIndex = 0, videos, initialIndex = 0, setParentCurrent = null, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching, isPaused, inCollectionView = false, collection_ori_all_videos, enterPosition = 0, setCollectionEpisode} : Props) => {

    const { spacing } = useTheme();

    const [displayHeight, setDisplayHeight] = useState<number | null>(0);
    const [current, setCurrent] = useState<number | null>(0);
    const [collectionPartialVideos, setCollectionPartialVideos] = useState(videos);
    const queryClient = useQueryClient();
    const isFocused = useIsFocused();
    const [isRefreshing, setIsRefreshing] = useState(false);
    const handleViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: any }) => {
        if (viewableItems.length == 1 && typeof viewableItems[0] != 'undefined') {
            const curr = viewableItems[0].index;
            setCurrent(curr);
            if(setParentCurrent != null){
                setParentCurrent(curr);
            }
        }
    }, []);

    useEffect(() => {
        setCurrent(initialIndex)
    }, [initialIndex]);

    useEffect(() => {
        setCollectionPartialVideos(videos);
        
        if(inCollectionView == true){
        }

    }, [videos]);

    const setCollectionEpisodeToTitle = (index: number) => {
        setCollectionEpisode(index);
    }

    const refreshComponent = () => {
        if(inCollectionView == false){
            return <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={handleRefreshMiniVod}
                    />
        }
        
        return <></>
    }

    const renderItem = useCallback(({ item, index }: { item: MiniVideo, index: number }) => (
        <View style={{ height: displayHeight ? displayHeight : 0 }}>
            {current !== null && Math.abs(current - index) <= 2 && (
                <ShortVod
                    vod={item}
                    vod_url={item.mini_video_origin_video_url}
                    isActive={current === index && !isPaused}
                    thumbnail={item.mini_video_origin_cover}
                    videoTitle={item.mini_video_title}
                    displayHeight={displayHeight ? displayHeight : 0}
                    inCollectionView={inCollectionView}
                    setCollectionEpisode={setCollectionEpisodeToTitle}
                />
            )}
        </View>
    ), [current, displayHeight, isPaused, inCollectionView]);
    
    return (
        <View style={{ flex: 1 }} onLayout={(event: any) => {
            var { x, y, width, height } = event.nativeEvent.layout;
            setDisplayHeight(height)
        }}>
            <FlatList
                data={collectionPartialVideos}
                initialNumToRender={3}
                maxToRenderPerBatch={3}
                windowSize={5}
                refreshControl={refreshComponent()}
                renderItem={renderItem}
                horizontal={false}
                pagingEnabled={true}
                keyExtractor={(item: any, index: any) => item.mini_video_id.toString()}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                onViewableItemsChanged={handleViewableItemsChanged}
                onEndReached={() => {
                    if (hasNextPage && !isFetchingNextPage && !isFetching) {
                        // console.log('Fetching next page')
                        fetchNextPage();
                    }
                }}
                onEndReachedThreshold={0.8}
                ListFooterComponent={
                    <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                        {
                            hasNextPage && <FastImage
                                style={{ height: 80, width: 80 }}
                                source={require('../../../static/images/loading-spinner.gif')}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        }
                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    loading: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1
    }
})
