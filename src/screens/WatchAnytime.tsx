import NetInfo from '@react-native-community/netinfo';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {useInfiniteQuery} from '@tanstack/react-query';
import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {AppState, StyleSheet, Text, View} from 'react-native';
import EighteenPlusControls from '../components/adultVideo/eighteenPlusControls';
import ScreenContainer from '../components/container/screenContainer';
import MiniVideoList from '../components/videoPlayer/WatchAnytime/miniVodList';
import {useAppSelector} from '@hooks/hooks';
import useAnalytics from '@hooks/useAnalytics';
import {SettingsReducerState} from '@redux/reducers/settingsReducer';
import {RootState} from '@redux/store';
import {MiniVideo} from '@type/ajaxTypes';
import {screenModel} from '@type/screenType';
import {API_DOMAIN_TEST} from '@utility/constants';
import NoConnection from './../components/common/noConnection';
import {fetchAdultVods, fetchMiniVods} from '../api/miniVod';

type MiniVideoResponseType = {
  data: {
    List: Array<MiniVideo>;
  };
};

type MiniVodRef = {
  setPause: (pause: boolean) => void;
};

const LIMIT = 300;

function WatchAnytime({navigation}: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  // New state to keep track of app's background/foreground status
  const [isInBackground, setIsInBackground] = useState(false);
  const [flattenedVideos, setFlattenedVideos] = useState(Array<MiniVideo>);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isPressTabScroll, setPressTabScroll] = useState(false);
  const miniVodRef = useRef<MiniVodRef>();
  const miniVodListRef = useRef<any>();

  const settingsReducer: SettingsReducerState = useAppSelector(
    ({settingsReducer}: RootState) => settingsReducer,
  );

  const screenState: screenModel = useAppSelector(
    ({screenReducer}) => screenReducer,
  );

  const {adultMode: adultModeGlobal, watchAnytimeAdultMode} = screenState;
  const adultMode = adultModeGlobal && watchAnytimeAdultMode;

  const fetchMode = adultMode ? 'adult' : 'normal';
  const apiEndpoint = adultMode
    ? `${API_DOMAIN_TEST}miniSVod/v1/miniSVod`
    : `${API_DOMAIN_TEST}miniVod/v2/miniVod`;

  // ========== for analytics - start ==========
  const {watchAnytimeViewsAnalytics} = useAnalytics();

  // Handle app's background/foreground status
  const handleAppStateChange = (nextAppState: any) => {
    setIsInBackground(nextAppState !== 'active');
  };

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    // await queryClient.resetQueries(['watchAnytime']); // Pass the query key as an array of strings
    await refetch();
    setIsRefreshing(false);
    return;
  }, []);

  const {
    data: videos,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    refetch,
    remove,
  } = useInfiniteQuery(
    ['watchAnytime', fetchMode],
    ({pageParam = 1}) => {
      console.log('fetchMode -', fetchMode);
      if (fetchMode == 'normal') {
        return fetchMiniVods(pageParam);
      } else {
        return fetchAdultVods(pageParam);
      }
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length + 1;
      },
      onSuccess: data => {},
      refetchOnMount: 'always',
    },
  );

  const checkConnection = useCallback(async () => {
    const state = await NetInfo.fetch();
    const offline = !(state.isConnected && state.isInternetReachable);
    setIsOffline(offline);
    if (!offline) {
      handleRefresh();
    }
  }, []);

  // ========== for analytics - start ==========
  useEffect(() => {
    watchAnytimeViewsAnalytics({
      isXmode: adultMode,
    });
  }, [adultMode]);
  // ========== for analytics - end ==========

  // Add an event listener to the navigation object for the tab press event
  // useEffect(() => {
  //   const handleTabPress = () => {
  //     if (isFocused && !isRefreshing) {
  //       setPressTabScroll(true);

  //       miniVodListRef.current?.scrollToIndex({
  //         index: 0,
  //         animated: true,
  //       });

  //       // 0.5 second for scroll animation, hide all video
  //       setTimeout(() => {
  //         setPressTabScroll(false);
  //         handleRefresh();
  //       }, 500);
  //     }
  //   };
  //   const unsubscribe = navigation.addListener('tabPress', handleTabPress);
  //   // Clean up the event listener when the component unmounts
  //   return () => unsubscribe();
  // }, [isFocused, isRefreshing]);

  useEffect(() => {
    setPressTabScroll(true);

    miniVodListRef.current?.scrollToIndex({
      index: 0,
      animated: true,
    });

    // 0.5 second for scroll animation, hide all video
    setTimeout(() => {
      setPressTabScroll(false);
      // handleRefresh();
    }, 500);
  }, [adultMode]);

  useEffect(() => {
    if (videos != undefined) {
      setFlattenedVideos(videos?.pages.flat().filter(x => x)); // remove null values
    }
  }, [videos]);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (
        !settingsReducer.isOffline &&
        settingsReducer.isOffline !== isOffline
      ) {
        setIsOffline(settingsReducer.isOffline);
        handleRefresh();
      } else if (settingsReducer.isOffline) {
        return () => {
          miniVodRef.current?.setPause(true);
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline]),
  );

  return (
    <ScreenContainer containerStyle={styles.containerStyle}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>随心看</Text>
      </View>
      <EighteenPlusControls />
      {!isOffline && (
        <MiniVideoList
          ref={miniVodRef}
          miniVodListRef={miniVodListRef}
          videos={flattenedVideos}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetching={isFetching}
          isFetchingNextPage={isFetchingNextPage}
          isActive={isFocused && !isInBackground}
          handleRefreshMiniVod={handleRefresh}
          isRefreshing={isRefreshing}
          isPressTabScroll={isPressTabScroll}
        />
      )}
      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </ScreenContainer>
  );
}

export default memo(WatchAnytime);

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
    padding: 20,
    zIndex: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {color: '#FFF', fontSize: 20},
});
