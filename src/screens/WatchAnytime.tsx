import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
    View,
    Text,
    AppState,
} from 'react-native';
import ScreenContainer from '../components/container/screenContainer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { StyleSheet } from 'react-native';
import { MiniVideo } from '../types/ajaxTypes';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '../utility/constants';
import MiniVideoList from '../components/videoPlayer/miniVodList';
import { useIsFocused } from '@react-navigation/native';
import NoConnection from './../components/common/noConnection';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

type MiniVideoResponseType = {
    data: {
        List: Array<MiniVideo>;
    };
};

export default ({ navigation }: BottomTabScreenProps<any>) => {
    const isFocused = useIsFocused();
    // New state to keep track of app's background/foreground status
    const [isInBackground, setIsInBackground] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isOffline, setIsOffline] = useState(false);
    const miniVodListRef = useRef<any>();
    const [isPressTabScroll, setPressTabScroll] = useState(false);

    // Add an event listener to the navigation object for the tab press event
    useEffect(() => {
        const handleTabPress = () => {
            if (isFocused && !isRefreshing) {
                handleRefresh();

                setPressTabScroll(true);

                miniVodListRef.current?.scrollToIndex({
                    index: 0,
                    animated: true,
                });

                // 0.5 second for scroll animation, hide all video
                setTimeout(() => {
                    setPressTabScroll(false);
                }, 500)
            }
        };
        const unsubscribe = navigation.addListener('tabPress', handleTabPress);
        // Clean up the event listener when the component unmounts
        return () => unsubscribe();
    }, [navigation, isFocused, isRefreshing]);


    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true);
        // await queryClient.resetQueries(['watchAnytime']); // Pass the query key as an array of strings
        await refetch();
        setIsRefreshing(false);
        return;
    }, []);

    const [flattenedVideos, setFlattenedVideos] = useState(Array<MiniVideo>);
    const LIMIT = 100;
    const fetchVods = (page: number) => fetch(
        `${API_DOMAIN}miniVod/v2/miniVod?page=${page}&limit=${LIMIT}`,
    )
        .then(response => response.json())
        .then((json: MiniVideoResponseType) => {
            return json.data.List
        })

    const { data: videos, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching, refetch } =
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
            }
        });

    useEffect(() => {
        if (videos != undefined) {
            setFlattenedVideos(videos?.pages.flat());
        }
    }, [videos])

    const checkConnection = useCallback(async () => {
        const state = await NetInfo.fetch();
        const offline = !(state.isConnected && state.isInternetReachable);
        setIsOffline(offline);
        if (!offline) {
            handleRefresh();
        }
    }, []);

    useEffect(() => {
        const removeNetInfoSubscription = NetInfo.addEventListener(
            (state: NetInfoState) => {
                const offline = !(state.isConnected && state.isInternetReachable);
                setIsOffline(offline);
            },
        );
        return () => removeNetInfoSubscription();
    }, []);

    useEffect(() => {
        // ... (rest of the useEffect hook remains unchanged)
        const subscription = AppState.addEventListener(
            "change",
            handleAppStateChange
        );

        return () => {
            subscription.remove();
        };

    }, [])

    // Handle app's background/foreground status
    const handleAppStateChange = (nextAppState: any) => {
        setIsInBackground(nextAppState !== "active");
    };

    return (
        <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 10 }}>
            <View style={{ position: 'absolute', top: 0, left: 0, padding: 20, zIndex: 50, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#FFF', fontSize: 20 }}>随心看</Text>
            </View>
            {!isOffline &&
                <MiniVideoList
                    miniVodListRef={miniVodListRef}
                    videos={flattenedVideos}
                    fetchNextPage={fetchNextPage}
                    hasNextPage={hasNextPage}
                    isFetching={isFetching}
                    isFetchingNextPage={isFetchingNextPage}
                    isActive={isFocused && !isInBackground}
                    setCollectionEpisode={(index: number) => { }}
                    handleRefreshMiniVod={handleRefresh}
                    isRefreshing={isRefreshing}
                    isPressTabScroll={isPressTabScroll}
                />
            }
            {isOffline && <NoConnection onClickRetry={checkConnection} />}
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({

})
