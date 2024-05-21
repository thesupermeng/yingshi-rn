import { useFocusEffect, useIsFocused, useTheme } from '@react-navigation/native';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Platform, RefreshControl, StyleSheet, View } from 'react-native';
import ShortVod from './shortVod';
import { MiniVideo } from '@type/ajaxTypes';
import FastImage from '../../common/customFastImage';

import { useAppDispatch, useAppSelector, useSelector } from '@hooks/hooks';
import UmengAnalytics from '../../../../Umeng/UmengAnalytics';
import { showAdultModeVip, showLoginAction } from '@redux/actions/screenAction';
import { screenModel } from '@type/screenType';
import { ADULT_MODE_PREVIEW_DURATION, MINI_SHOW_LOGIN_NUMBER } from '@utility/constants';
import ShortAds from './shortAds';
import { UserStateType } from '@redux/reducers/userReducer';
import { User } from '@models';
import { AdultVipPrivilegeOverlay } from './../../modal/adultVipPrivilegeOverlay';
import BecomeVipOverlay from "./../../modal/becomeVipOverlay";

interface Props {
  miniVodListRef: any;
  videos: any;
  hasNextPage: boolean | undefined;
  fetchNextPage: any;
  isFetchingNextPage: any;
  isFetching: boolean;
  isActive: boolean;
  initialIndex?: number;
  enterPosition?: number;
  currentVodIndex?: number;
  handleRefreshMiniVod?: any;
  isRefreshing: boolean;
  isPressTabScroll: boolean;
  isFocusLogin: React.MutableRefObject<boolean>,
  onPressAds: () => void,
  videoHeaderReferer?: string,
}

type MiniVodRef = {
  setPause: (pause: boolean) => void;
};

const homeLoadingGif = require('@static/images/home-loading.gif');
const loadingSpinnerGif = require('@static/images/loading-spinner.gif');

export default forwardRef<MiniVodRef, Props>(
  (
    {
      miniVodListRef,
      handleRefreshMiniVod,
      videos,
      initialIndex = 0,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
      isFetching,
      isActive,
      isRefreshing = false,
      isPressTabScroll = false,
      isFocusLogin,
      onPressAds,
      videoHeaderReferer,
    }: Props,
    ref,
  ) => {

    const [showAdultVIPOverlay, setShowAdultVIPOverlay] = useState(false);

    const { spacing } = useTheme();
    const isFocus = useIsFocused();

    const [isInitFetching, setInitFetching] = useState(true);
    const [displayHeight, setDisplayHeight] = useState<number>(0);
    const [current, setCurrent] = useState<number>(0);
    const [collectionPartialVideos, setCollectionPartialVideos] =
      useState(videos);
    const [isPause, setPause] = useState(true);
    const [isScrolling, setIsScrolling] = useState(false);
    const [videoCurrentDurations, setVideoCurrentDurations] = useState<
      number[]
    >([]);
    const [isChangingSource, setChangingSource] = useState(false);
    // for analytics used
    const [curAnalyticsIndex, setCurAnalyticsIndex] = useState(0);

    const screenState: screenModel = useAppSelector(
      ({ screenReducer }) => screenReducer,
    );
    const userState = useSelector<UserStateType>('userReducer');
    const swipeCount = useRef(0);
    const {
      adultModeDisclaimerShow,
      adultModeVipShow,
      adultVideoWatchTime,
      // adultMode,
      watchAnytimeAdultMode: adultMode, // rename watchanytimeadultmode to adult mode
    } = screenState;
    const isVip = User.isVip(userState.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
      if (
        adultVideoWatchTime >= ADULT_MODE_PREVIEW_DURATION &&
        adultMode &&
        isVip
      ) {
        dispatch(showAdultModeVip());
        setPause(true);
      }
    }, [videoCurrentDurations[current], isPause]);

    useEffect(() => {
      if (current > 0 && current % 4 == 0 && !isVip && adultMode) {
        setShowAdultVIPOverlay(true);
      }
    }, [current]);

    useEffect(() => {
      if (adultModeDisclaimerShow || adultModeVipShow) {
        setPause(true);
      }
    }, [adultModeDisclaimerShow, adultModeVipShow]);

    useEffect(() => {
      setChangingSource(true);
      setPause(true);
    }, [adultMode]);

    useFocusEffect(
      useCallback(() => {
        if (videos.length > 0 && isChangingSource) {
          setChangingSource(false);
          setPause(false);
        }
      }, [isChangingSource, videos]),
    );

    const handleOnScroll = useCallback((e: any) => {
      const positionY = parseFloat(e.nativeEvent.contentOffset.y.toFixed(5));
      const index = Math.round(positionY / displayHeight);

      if (index >= 0 && displayHeight > 0 && index != current) {
        setCurrent(index);
      }
    }, [displayHeight, current],);

    // ========== for analytics - start ==========
    useEffect(() => {
      // ========== for analytics - start ==========
      if (collectionPartialVideos.length > 0) {
        setCurAnalyticsIndex(0);

        UmengAnalytics.watchAnytimeVideoViewTimesAnalytics({
          userId: userState.user?.userId ?? '',
          vod_id: collectionPartialVideos[0].mini_video_id,
          isXmode: adultMode,
        });
      }
      // ========== for analytics - end ==========
    }, [collectionPartialVideos]);

    useEffect(() => {
      if (current > curAnalyticsIndex && current < collectionPartialVideos.length) {
        setCurAnalyticsIndex(current);

        UmengAnalytics.watchAnytimeVideoViewTimesAnalytics({
          userId: userState.user?.userId ?? '',
          vod_id: collectionPartialVideos[current].mini_video_id,
          isXmode: adultMode,
        });
      }
    }, [
      current,
      curAnalyticsIndex,
      collectionPartialVideos,
      adultMode,
      userState,
    ]);
    // ========== for analytics - end ==========

    useImperativeHandle(ref, () => ({
      setPause: (pause: boolean) => {
        setPause(pause);
      },
    }));

    useEffect(() => {
      if (isInitFetching && !isFetching) setInitFetching(false);
    }, [isFetching, isInitFetching]);

    useEffect(() => {
      setCurrent(initialIndex);
    }, [initialIndex]);

    useEffect(() => {
      setCollectionPartialVideos(videos);

      // set default 0 for all video duration
      setVideoCurrentDurations(videos.map(() => 0));
    }, [videos]);

    useEffect(() => {
      setPause(isFetching || isRefreshing || !isActive || isScrolling || screenState.loginShow || isFocusLogin.current);
    }, [isFetching, isRefreshing, isActive, isScrolling, screenState.loginShow, isFocusLogin.current]);

    const refreshComponent = useCallback(() => {
      return (
        <>
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefreshMiniVod}
            tintColor="#FAC33D"
          />
        </>
      );
    }, [isRefreshing]);

    const updateVideoDuration = (index: number, newDuration: number) => {
      // use map function for generate new list for update state
      setVideoCurrentDurations(
        videoCurrentDurations.map((duration, i) => {
          if (index === i) return newDuration;

          return duration;
        }),
      );
    };

    const renderItem = useCallback(({ item, index }: { item: MiniVideo; index: number }) => {
      let prevPosition = Math.max(0, index - 1);

      return (
        <View style={{ height: displayHeight ? displayHeight : 0 }}>
          {displayHeight != 0 && (current >= prevPosition && current < index + 2) && (
            <>
              {item.is_ads
                ? <ShortAds
                  vod={item}
                  thumbnail={item.ads_thumbnail}
                  displayHeight={displayHeight ? displayHeight : 0}
                  isPause={isPause || current !== index}
                  onManualPause={current => {
                    setPause(!current);
                  }}
                  isShowVideo={current >= prevPosition && current < index + 2}
                  currentDuration={videoCurrentDurations[index]}
                  isActive={isActive}
                  index={index}
                  onPressAds={onPressAds}
                />
                : <ShortVod
                  vod={item}
                  thumbnail={item.mini_video_image}
                  displayHeight={displayHeight ? displayHeight : 0}
                  isPause={isPause || current !== index}
                  onManualPause={current => {
                    console.log('click pause');
                    setPause(!current);
                  }}
                  isShowVideo={current >= prevPosition && current < index + 2}
                  // isShowVideo={current === index && !isScrolling && !isPressTabScroll}
                  currentDuration={videoCurrentDurations[index]}
                  updateVideoDuration={duration =>
                    updateVideoDuration(index, duration)
                  }
                  isActive={isActive}
                  videoHeaderReferer={videoHeaderReferer}
                />
              }
            </>
          )}
        </View>
      )
    },
      [
        current,
        isActive,
        isPause,
        isScrolling,
        displayHeight,
        videoCurrentDurations,
        isPressTabScroll,
      ],
    );

    const onLayoutRender = useCallback((event: any) => {
      var { height } = event.nativeEvent.layout;
      const heightStr: string = height.toFixed(5);

      // use substring to prevent rounding
      setDisplayHeight(
        parseFloat(heightStr.substring(0, heightStr.length - 1)),
      );
    }, []);

    const hanldeOnEndReached = useCallback(() => {
      if (!isVip && !adultMode) {
        //   dispatch(showLoginAction());
      } else if (hasNextPage && !isFetchingNextPage && !isFetching) {
        fetchNextPage();
      }
    }, [adultMode, hasNextPage, isFetchingNextPage, isFetching]);

    const handleOnScrollBeginDrag = useCallback(
      (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (!isScrolling) setIsScrolling(true);
      },
      [isScrolling],
    );

    const handleOnMomentumScrollEnd = useCallback(() => {
      setIsScrolling(false);

      if (isFocus
        && Platform.OS !== 'ios'
        && User.isGuest(userState.user)
        && !User.isVip(userState.user)
        && swipeCount.current >= MINI_SHOW_LOGIN_NUMBER
        && current >= MINI_SHOW_LOGIN_NUMBER
      ) {
        dispatch(showLoginAction());
      }
    }, [userState.user, current, isFocus]);

    useEffect(() => {
      if (User.isLogin(userState.user) || User.isVip(userState.user)) return;

      if (swipeCount.current < MINI_SHOW_LOGIN_NUMBER && !adultMode) {
        swipeCount.current++;
      } else {
        // isFocusLogin.current = true;
        // dispatch(showLoginAction());
        // swipeCount.current = 0;
      }
    }, [current, adultMode, userState.user]);

    return (
      <>
        <View style={{ flex: 1 }} onLayout={onLayoutRender}>
          {isInitFetching ? (
            <View style={styles.loadingContainer}>
              <FastImage
                source={homeLoadingGif}
                style={styles.homeLoadingImage}
                resizeMode={'contain'}
                useFastImage={true}
              />
            </View>
          ) : (
            <FlatList
              ref={miniVodListRef}
              data={collectionPartialVideos}
              initialNumToRender={5}
              maxToRenderPerBatch={3}
              windowSize={3}
              refreshControl={refreshComponent()}
              renderItem={renderItem}
              horizontal={false}
              // isRefreshing will change disable (because if pagingEnabled=true, refresh loading will not working)
              pagingEnabled={isRefreshing ? false : true}
              scrollEnabled={isRefreshing ? false : true}
              keyExtractor={(item: any, index: any) =>
                item.mini_video_id.toString()
              }
              viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              onEndReached={hanldeOnEndReached}
              onEndReachedThreshold={0.8}
              ListFooterComponent={
                isVip ?
                  <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                    {hasNextPage && (
                      <FastImage
                        style={{ height: 80, width: 80 }}
                        source={loadingSpinnerGif}
                        resizeMode={'contain'}
                      />
                    )}
                  </View>
                  :
                  <></>
              }
              onScroll={handleOnScroll}
              onScrollBeginDrag={handleOnScrollBeginDrag}
              onMomentumScrollEnd={handleOnMomentumScrollEnd}
              scrollsToTop={false}
            />
          )}
        </View>
        {/* <BecomeVipOverlay
          setShowBecomeVIPOverlay={setShowAdultVIPOverlay}
          showBecomeVIPOverlay={showAdultVIPOverlay}
          selectedTab='xvod'
          onClose={() => {
            // if (onClose) onClose();
            setShowAdultVIPOverlay(false);
          }}
        /> */}

        <AdultVipPrivilegeOverlay
          showCondition={showAdultVIPOverlay}
          addPaddingTop={true}
          showDarkBackdrop={true}
          onClose={() => {
            // if (onClose) onClose();
            setShowAdultVIPOverlay(false);
          }}
        />
      </>
    );
  },
);

const styles = StyleSheet.create({
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeLoadingImage: {
    width: 150,
    height: 150,
    bottom: 50,
    zIndex: 1,
  },
});
