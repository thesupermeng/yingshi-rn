import { useAppDispatch, useAppSelector, useSelector } from '@hooks/hooks';
import UmengAnalytics from '../../Umeng/UmengAnalytics';
import NetInfo from '@react-native-community/netinfo';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { SettingsReducerState } from '@redux/reducers/settingsReducer';
import { RootState } from '@redux/store';
import { MiniVideo, MiniVideoListType } from '@type/ajaxTypes';
import { screenModel } from '@type/screenType';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { AppState, StyleSheet, View } from 'react-native';
import { useMinivodQuery } from '@api';
import EighteenPlusControls from '../components/adultVideo/eighteenPlusControls';
import ScreenContainer from '../components/container/screenContainer';
import MiniVideoList from '../components/videoPlayer/WatchAnytime/miniVodList';
import NoConnection from './../components/common/noConnection';
import { CPressable } from '../components/atoms';
import { showLoginAction } from '@redux/actions/screenAction';
import { UserStateType } from '@redux/reducers/userReducer';
import { User } from '@models';
import BecomeVipOverlay from '../components/modal/becomeVipOverlay';
import { MINI_SHOW_LOGIN_NUMBER } from '@utility/constants';
import { CLangKey } from '@constants';
import HomeHeader from '../components/header/homeHeader';

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
  const [isShowAdOverlay, setShowAdOverlay] = useState(false);
  const [videoHeaderReferer, setVideoHeaderReferer] = useState<string | undefined>();
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

  const isVip = true//User.isVip(userState.user);

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

  const onPressAds = () => {
    setShowAdOverlay(true);
  };

  const onCloseAdOverlay = () => {
    setShowAdOverlay(false);
  };

  return (
    <ScreenContainer containerStyle={styles.containerStyle}>
      <View style={styles.titleTextContainer}>
        <HomeHeader
          navigator={navigation}
          title={CLangKey.watchanytimeTab.tr()}
          rightComponent={
            <EighteenPlusControls />
          }
        />
      </View>


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
          onPressAds={onPressAds}
          videoHeaderReferer={videoHeaderReferer}
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

      <BecomeVipOverlay
        setShowBecomeVIPOverlay={setShowAdOverlay}
        showBecomeVIPOverlay={isShowAdOverlay}
        isJustClose={true}
        selectedTab="common"
        onClose={onCloseAdOverlay}
      />

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
    paddingHorizontal: 14,
    paddingVertical: 8,
    zIndex: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: { color: '#FFF', fontSize: 20 },
});
