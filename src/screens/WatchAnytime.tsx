import React, { useEffect, useState, useCallback, useMemo, memo } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    FlatList,
    ViewToken,
    StatusBar,
    Dimensions,
    SafeAreaView,
    Text
} from 'react-native';
import ScreenContainer from '../components/container/screenContainer';
import { useTheme, useFocusEffect } from '@react-navigation/native';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import Video from 'react-native-video';
import { StyleSheet } from 'react-native';
import { MiniVideo } from '../types/ajaxTypes';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import Wechat from '../../static/images/wechat.svg';
import PYQ from '../../static/images/pyq.svg';
import Weibo from '../../static/images/weibo.svg';
import QQ from '../../static/images/qq.svg';
import Search from '../../static/images/search.svg';
import Play from '../../static/images/blackPlay.svg';
import FastImage from 'react-native-fast-image';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Orientation from 'react-native-orientation-locker';
import { API_DOMAIN } from '../constants';
import { memoize } from 'lodash';
import ShortVideoPlayer from '../components/videoPlayer/shortVodPlayer';

type MiniVideoResponseType = {
    data: {
        List: Array<MiniVideo>
    }
}

export default ({ navigation }: BottomTabScreenProps<any>) => {

    const { spacing } = useTheme();

    const [displayHeight, setDisplayHeight] = useState<number | null>(0);
    const [current, setCurrent] = useState<number | null>(0);
    const [isPaused, setIsPaused] = useState(false);
    const [videos, setVideos] = useState<MiniVideo[]>([]);
    const LIMIT = 100;
    const fetchVods = (page: number) => fetch(
        `${API_DOMAIN}miniVod/v1/miniVod?page=${page}&limit=${LIMIT}`,
    )
        .then(response => response.json())
        .then((json: MiniVideoResponseType) => {
            console.log('API length', json.data.List.length)
            return json.data.List
        })

    const { data: playlists, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching } =
        useInfiniteQuery(['watchAnytime'], ({ pageParam = 1 }) => fetchVods(pageParam), {
            getNextPageParam: (lastPage, allPages) => {
                if (lastPage === null) {
                    return undefined;
                }
                const nextPage =
                    lastPage.length === LIMIT ? allPages.length + 1 : undefined;
                return nextPage;
            },
            onSuccess: (data) => {
                if (data && data?.pages) {
                    setVideos([...videos, ...data.pages[data.pages.length - 1].flat()])
                }
            }
        });

    const navBarHeight = useBottomTabBarHeight();

    useFocusEffect(
        useCallback(() => {
            setIsPaused(false);
            Orientation.lockToPortrait();
            return () => {
                setIsPaused(true);
                Orientation.unlockAllOrientations();
            };
        }, [])
    );

    // const windowHeight = Dimensions.get('window').height;
    // console.log("Has Notch : ", hasNotch)
    // console.log("Full Screen Height : ", windowHeight)
    // console.log("Bottom Nav Height : ", navBarHeight)
    // console.log("Full Screen - Bottom Nav Height : ", windowHeight - navBarHeight)

    const handleViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: any }) => {
        if (viewableItems.length == 1 && typeof viewableItems[0] != 'undefined') {
            const curr = viewableItems[0].index;
            setCurrent(curr);
        }
    }, []);
    console.log('renderinggg')
    return (
        <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
            <View style={{ position: 'absolute', top: 0, left: 0, padding: 20, zIndex: 50, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#FFF', fontSize: 20 }}>随心看</Text>
            </View>
            <View style={{ flex: 1 }} onLayout={(event: any) => {
                var { x, y, width, height } = event.nativeEvent.layout;
                setDisplayHeight(height)
            }}>
                <FlatList
                    data={videos}
                    initialNumToRender={1}
                    maxToRenderPerBatch={3}
                    windowSize={5}
                    renderItem={({ item, index }: { item: MiniVideo, index: number }) => {
                        return <View style={{ height: displayHeight ? displayHeight : 0 }}>
                            {
                                current !== null && Math.abs(current - index) <= 2 && <ShortVideoPlayer
                                    vod_url={item.mini_video_origin_video_url}
                                    isActive={current === index && !isPaused}
                                    thumbnail={item.mini_video_origin_cover}
                                    videoTitle={item.mini_video_title}
                                    displayHeight={displayHeight ? displayHeight : 0}
                                />
                            }
                        </View>
                    }}
                    horizontal={false}
                    pagingEnabled={true}
                    keyExtractor={(item: any, index: any) => item.mini_video_id.toString()}
                    viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={handleViewableItemsChanged}
                    onEndReached={() => {
                        if (hasNextPage && !isFetchingNextPage && !isFetching) {
                            console.log('Fetching next page')
                            fetchNextPage();
                        }
                    }}
                    onEndReachedThreshold={0.8}
                    ListFooterComponent={
                        <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                            {
                                hasNextPage && <FastImage
                                    style={{ height: 80, width: 80 }}
                                    source={require('../../static/images/loading-spinner.gif')}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            }
                        </View>
                    }
                />
                {/* <Text style={{ position: 'absolute', bottom: 0, right: 0 }}>aaaa</Text> */}
            </View>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    video: {
        height: '100%',
        width: '100%',
        backgroundColor: '#000',
        // border: '1px solid red'
    },
    bottomRightText: {
        fontSize: 12,
        color: '#FFFFFF',
    },
    bottomRightBn: {
        width: 50,
        height: 40,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 35,
        alignItems: 'center',
        textAlign: 'center'
    },
    pauseOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#00000010',
        zIndex: 10,
        // backgroundColor: 'yellow',
    },
    buffering: {
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3,
        color: 'yellow',
        position: 'absolute',
        top: '40%',
        left: '36%',
        zIndex: 100
    },
    loading: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1
    }
})