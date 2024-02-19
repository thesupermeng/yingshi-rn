import { useAppDispatch, useAppSelector, useSelector } from '@hooks';
import UmengAnalytics from '../../Umeng/UmengAnalytics';
import NetInfo from '@react-native-community/netinfo';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { SettingsReducerState } from '@redux';
import { RootState } from '@redux';
import { MiniVideo } from '@type';
import { screenModel } from '@type';
import { API_DOMAIN_TEST } from '@utility';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { AppState, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useMinivodQuery } from '@api';
import EighteenPlusControls from '../components/adultVideo/eighteenPlusControls';
import ScreenContainer from '../components/container/screenContainer';
import MiniVideoList from '../components/videoPlayer/WatchAnytime/miniVodList';
import NoConnection from './../components/common/noConnection';
import { CPressable } from '../components/atoms';
import { showLoginAction } from '@redux';
import { UserStateType } from '@redux';
import { User } from '@models';

type MiniVideoResponseType = {
  data: {
    List: Array<MiniVideo>;
  };
};

type MiniVodRef = {
  setPause: (pause: boolean) => void;
};

const LIMIT = 300;

function WatchAnytime({ navigation }: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  // New state to keep track of app's background/foreground status
  const [isInBackground, setIsInBackground] = useState(false);
  const [flattenedVideos, setFlattenedVideos] = useState(Array<MiniVideo>);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isPressTabScroll, setPressTabScroll] = useState(false);
  const miniVodRef = useRef<MiniVodRef>();
  const miniVodListRef = useRef<any>();
  const dispatch = useAppDispatch();

  const settingsReducer: SettingsReducerState = useAppSelector(
    ({ settingsReducer }: RootState) => settingsReducer,
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer,
  );

  const userState = useSelector<UserStateType>('userReducer');
  const { adultMode: adultModeGlobal, watchAnytimeAdultMode } = screenState;
  const adultMode = watchAnytimeAdultMode;

  const isVip = User.isVip(userState.user);

  const fetchMode = adultMode ? 'adult' : 'normal';
  const isFocusLogin = useRef(false);

  // ========== for analytics - start ==========
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
  } = useMinivodQuery(fetchMode, isVip)

  const checkConnection = useCallback(async () => {
    const state = await NetInfo.fetch();
    const offline = !(state.isConnected && state.isInternetReachable);
    setIsOffline(offline);
    if (!offline) {
      handleRefresh();
    }
  }, []);

  // ========== for analytics - start ==========
  useFocusEffect(useCallback(() => {
    UmengAnalytics.watchAnytimeViewsAnalytics({
      isXmode: adultMode,
    });
  }, [adultMode]));
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

    // miniVodListRef.current?.scrollToIndex({
    //   index: 0,
    //   animated: false,
    // });

    // 0.5 second for scroll animation, hide all video
    setTimeout(() => {
      setPressTabScroll(false);
      // handleRefresh();
    }, 500);
  }, [adultMode]);

  useEffect(() => {
    if (videos != undefined) {
      let filtered = videos?.pages.flat().filter(x => x)
      if (isVip) {
        filtered = filtered.filter(x => !x.is_ads)
      }
      setFlattenedVideos(filtered); // remove null values
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

  useEffect(() => {
    if (User.isLogin(userState.user) && isFocusLogin.current) {
      isFocusLogin.current = false;
    }
  }, [userState.user?.userToken]);

  const onFocusLoginOverlayPress = () => {
    dispatch(showLoginAction());
  }

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
          key={adultMode.toString()}
          isFocusLogin={isFocusLogin}
        />
      )}
      {isFocusLogin.current &&
        <CPressable
          onPress={onFocusLoginOverlayPress}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 999,
          }}
        />
      }

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
  titleText: { color: '#FFF', fontSize: 20 },
});
