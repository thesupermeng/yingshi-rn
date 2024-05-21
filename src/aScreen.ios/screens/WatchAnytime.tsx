import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
    View,
    Text,
    AppState,
} from 'react-native';
import ScreenContainer from '../components/container/screenContainer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { StyleSheet } from 'react-native';
import { MiniVideo, MiniVideoListType } from '@type/ajaxTypes';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility/constants';
import MiniVideoList from '../components/videoPlayer/miniVodList';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import NoConnection from './../components/common/noConnection';
import NetInfo from '@react-native-community/netinfo';
import { SettingsReducerState } from '@redux/reducers/settingsReducer';
import { useAppSelector, useSelector } from '@hooks/hooks';
import { RootState } from '@redux/store';
import UmengAnalytics from '../../../Umeng/UmengAnalytics';
import { MiniVodApi, useMinivodQuery } from '@api';
import { CLangKey } from '@constants';
import { UserStateType } from '@redux/reducers/userReducer';
import { screenModel } from '@type/screenType';
import HomeHeader from '../components/header/homeHeader';

type MiniVideoResponseType = {
    data: {
        List: Array<MiniVideo>;
    };
};

type MiniVodRef = {
    setPause: (pause: boolean) => void;
};

export default ({ navigation }: BottomTabScreenProps<any>) => {
    const isFocused = useIsFocused();
    // New state to keep track of app's background/foreground status
    const [isInBackground, setIsInBackground] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isOffline, setIsOffline] = useState(false);
    const miniVodRef = useRef() as React.MutableRefObject<MiniVodRef>;
    const miniVodListRef = useRef<any>();
    const [isPressTabScroll, setPressTabScroll] = useState(false);
    const [videoHeaderReferer, setVideoHeaderReferer] = useState<string | undefined>();

    const settingsReducer: SettingsReducerState = useAppSelector(
        ({ settingsReducer }: RootState) => settingsReducer
    );

    const screenState: screenModel = useAppSelector(
        ({ screenReducer }) => screenReducer,
    );

    const userState = useSelector<UserStateType>('userReducer');
    // const { adultMode: adultModeGlobal, watchAnytimeAdultMode } = screenState;
    const adultModeGlobal = false
    const watchAnytimeAdultMode = false;
    const adultMode = watchAnytimeAdultMode;

    const isVip = true//User.isVip(userState.user);

    const fetchMode = adultMode ? 'adult' : 'normal';
    const isFocusLogin = useRef(false);

    // ========== for analytics - start ==========
    useFocusEffect(useCallback(() => {
        UmengAnalytics.watchAnytimeViewsAnalytics({
            isXmode: adultMode,
        });
    }, [adultMode]));
    // ========== for analytics - end ==========

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
    const LIMIT = 300;
    const fetchVods = (page: number) => MiniVodApi.getListByPage({
        page,
        limit: LIMIT,
    });

    const {
        data: videos,
        isSuccess,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
        isFetching,
        refetch,
        remove,
    } = useMinivodQuery(fetchMode, isVip)

    // const { data: videos, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching, refetch } =
    //     useInfiniteQuery(['watchAnytime'], ({ pageParam = 1 }) => fetchVods(pageParam), {
    //         getNextPageParam: (lastPage, allPages) => {
    //             if (lastPage === null) {
    //                 return undefined;
    //             }
    //             const nextPage =
    //                 lastPage.length === LIMIT ? allPages.length + 1 : undefined;
    //             return nextPage;
    //         },
    //         onSuccess: (data) => {
    //         }
    //     });

    useEffect(() => {
        if (videos != undefined) {
            const videoMeta = videos?.pages.flat() as MiniVideoListType[];

            let filtered = videoMeta[0].List.filter(x => x);

            if (videoMeta[0].Header) {
                setVideoHeaderReferer(videoMeta[0].Header.Referer);
            } else {
                setVideoHeaderReferer(undefined);
            }

            // vip -> filter ads
            // guest -> filter first 10

            // if (isVip) {
            //   filtered = filtered.filter(x => !x.is_ads)
            // }

            // if (User.isGuest(userState.user) && !adultMode && !User.isVip(userState.user)) {
            //   filtered = filtered.slice(0, MINI_SHOW_LOGIN_NUMBER + 1);
            // }

            setFlattenedVideos(filtered); // remove null values
            if (filtered.length > 0) {
                miniVodListRef.current?.scrollToOffset({
                    index: 0,
                    animated: false,
                });
            }
        }
    }, [videos, userState.user]);

    const checkConnection = useCallback(async () => {
        const state = await NetInfo.fetch();
        const offline = !(state.isConnected && state.isInternetReachable);
        setIsOffline(offline);
        if (!offline) {
            handleRefresh();
        }
    }, []);

    useFocusEffect(useCallback(() => {
        if (!settingsReducer.isOffline && settingsReducer.isOffline !== isOffline) {
            setIsOffline(settingsReducer.isOffline);
            handleRefresh();
        } else if (settingsReducer.isOffline) {
            return () => {
                miniVodRef.current?.setPause(true);
                setIsOffline(settingsReducer.isOffline);
            }
        }
    }, [settingsReducer.isOffline]));

    useEffect(() => {
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
            <View style={styles.titleTextContainer}>
                <HomeHeader
                    navigator={navigation}
                    title={CLangKey.watchanytimeTab.tr()}
                />
            </View>
            {!isOffline &&
                <MiniVideoList
                    ref={miniVodRef}
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
                    videoHeaderReferer={videoHeaderReferer}
                />
            }
            {isOffline && <NoConnection onClickRetry={checkConnection} />}
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 10,
    },
    titleTextContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        paddingHorizontal: 14,
        paddingVertical: 8,
        zIndex: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText: { color: '#FFF', fontSize: 20 },
})
