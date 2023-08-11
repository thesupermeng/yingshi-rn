import React, {useEffect, useState, useCallback, useMemo, memo} from 'react';
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
  Text,
  RefreshControl,
} from 'react-native';
import ScreenContainer from '../components/container/screenContainer';
import {useTheme, useFocusEffect} from '@react-navigation/native';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import Video from 'react-native-video';
import {StyleSheet} from 'react-native';
import {MiniVideo} from '../types/ajaxTypes';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import Wechat from '../../static/images/wechat.svg';
import PYQ from '../../static/images/pyq.svg';
import Weibo from '../../static/images/weibo.svg';
import QQ from '../../static/images/qq.svg';
import Search from '../../static/images/search.svg';
import Play from '../../static/images/blackPlay.svg';
import FastImage from 'react-native-fast-image';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import Orientation from 'react-native-orientation-locker';
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from '../utility/constants';
import {memoize} from 'lodash';
import MiniVideoList from '../components/videoPlayer/miniVodList';
import ShortVideoPlayer from '../components/videoPlayer/shortVodPlayer';
import {useIsFocused} from '@react-navigation/native';
import {useQueryClient} from '@tanstack/react-query';
import NoConnection from './../components/common/noConnection';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';

type MiniVideoResponseType = {
  data: {
    List: Array<MiniVideo>;
  };
};

export default ({navigation}: BottomTabScreenProps<any>) => {
  const {spacing} = useTheme();

  const isFocused = useIsFocused();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryClient = useQueryClient();
  const [isOffline, setIsOffline] = useState(false);

  // Add an event listener to the navigation object for the tab press event
  useEffect(() => {
    const handleTabPress = () => {
      if (isFocused) {
        handleRefresh();
      }
    };
    const unsubscribe = navigation.addListener('tabPress', handleTabPress);
    // Clean up the event listener when the component unmounts
    return () => unsubscribe();
  }, [navigation, isFocused]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    // await queryClient.resetQueries(['watchAnytime']); // Pass the query key as an array of strings
    await refetch();
    setIsRefreshing(false);
    return;
  }, []);

  const [flattenedVideos, setFlattenedVideos] = useState(Array<MiniVideo>);
  const [displayHeight, setDisplayHeight] = useState<number | null>(0);
  const [current, setCurrent] = useState<number | null>(0);
  const [isPaused, setIsPaused] = useState(false);
  const LIMIT = 100;
  const fetchVods = (page: number) =>
    fetch(`${API_DOMAIN_TEST}miniVod/v1/miniVod?page=${page}&limit=${LIMIT}`)
      .then(response => response.json())
      .then((json: MiniVideoResponseType) => {
        return json.data.List;
      });

  const {
    data: videos,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    refetch,
  } = useInfiniteQuery(
    ['watchAnytime'],
    ({pageParam = 1}) => fetchVods(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage =
          lastPage.length === LIMIT ? allPages.length + 1 : undefined;
        return nextPage;
      },
      onSuccess: data => {},
    },
  );

  useEffect(() => {
    if (videos != undefined) {
      console.log(videos?.pages.flat()[0]);
      setFlattenedVideos(videos?.pages.flat());
    }
  }, [videos]);

  const navBarHeight = useBottomTabBarHeight();

  useFocusEffect(
    useCallback(() => {
      setIsPaused(false);
      Orientation.lockToPortrait();
      return () => {
        setIsPaused(true);
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  const checkConnection = async () => {
    const state = await NetInfo.fetch();
    const offline = !(state.isConnected && state.isInternetReachable);
    setIsOffline(offline);
    if (!offline) {
      handleRefresh();
    }
  };

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(
      (state: NetInfoState) => {
        const offline = !(state.isConnected && state.isInternetReachable);
        setIsOffline(offline);
      },
    );
    return () => removeNetInfoSubscription();
  }, []);

  return (
    <ScreenContainer containerStyle={{paddingLeft: 0, paddingRight: 0}}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          padding: 20,
          zIndex: 50,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{color: '#FFF', fontSize: 20, fontWeight: 'bold'}}>
          随心看
        </Text>
      </View>
      {!isOffline && (
        <MiniVideoList
          videos={flattenedVideos}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetching={isFetching}
          isFetchingNextPage={isFetchingNextPage}
          isPaused={isPaused}
          handleRefresh={handleRefresh}
          refreshProp={isRefreshing}
        />
      )}
      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});
