import React, {useState, useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Dimensions,
  RefreshControl,
} from 'react-native';
import {MiniVideo} from '../../types/ajaxTypes';
import ShortVideoPlayer from '../../components/videoPlayer/shortVodPlayer';
import FastImage from 'react-native-fast-image';
import {useTheme, useIsFocused} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {useQueryClient} from '@tanstack/react-query';

type MiniVideoResponseType = {
  data: {
    List: Array<MiniVideo>;
  };
};

interface Props {
  videos: any;
  hasNextPage: boolean | undefined;
  fetchNextPage: any;
  isFetchingNextPage: any;
  isFetching: boolean;
  isPaused: boolean;
  inCollectionView?: boolean;
  setParentCurrent?: any;
  initialIndex?: number;
  collection_ori_all_videos?: any;
  enterPosition?: number;
  setCollectionEpisode?: any;
  handleRefresh?: any;
  refreshProp?: boolean;
}

const ITEM_HEIGHT = Dimensions.get('window').height;

export default ({
  videos,
  initialIndex = 0,
  setParentCurrent = null,
  handleRefresh = () => {},
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isFetching,
  isPaused,
  inCollectionView = false,
  collection_ori_all_videos,
  enterPosition = 0,
  setCollectionEpisode,
  refreshProp = false,
}: Props) => {
  const {spacing} = useTheme();

  const [displayHeight, setDisplayHeight] = useState<number | null>(0);
  const [current, setCurrent] = useState<number | null>(0);
  const [collectionPartialVideos, setCollectionPartialVideos] =
    useState(videos);
  const [startPosition, setStartPosition] = useState(enterPosition);
  const queryClient = useQueryClient();
  const isFocused = useIsFocused();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleTabPress = () => {
    if (isFocused) {
      handleRefresh();
    }
  };
  const handleViewableItemsChanged = useCallback(
    ({viewableItems}: {viewableItems: any}) => {
      if (
        viewableItems.length == 1 &&
        typeof viewableItems[0] !== 'undefined'
      ) {
        const curr = viewableItems[0].index;
        setCurrent(curr);
        if (setParentCurrent != null) {
          setParentCurrent(curr);
        }
      }
    },
    [],
  );

  useEffect(() => {
    setIsRefreshing(refreshProp);
  }, [refreshProp]);

  const onRefreshHandler = async () => {
    setIsRefreshing(true);
    await handleRefresh();
    setIsRefreshing(false);
  };

  useEffect(() => {
    setCurrent(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    setCollectionPartialVideos(videos);

    if (videos != undefined && videos.length > 0) {
      console.log('OKK');
      console.log(videos[0].mini_video_origin_video_url);
    }

    if (inCollectionView == true) {
      setStartPosition(enterPosition);
    }
  }, [videos]);

  const setCollectionEpisodeToTitle = (index: number) => {
    setCollectionEpisode(index);
  };

  return (
    <View
      style={{flex: 1}}
      onLayout={(event: any) => {
        var {x, y, width, height} = event.nativeEvent.layout;
        setDisplayHeight(height);
      }}>
      <FlatList
        data={collectionPartialVideos}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        windowSize={5}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefreshHandler}
          />
        }
        renderItem={({item, index}: {item: MiniVideo; index: number}) => {
          return (
            <View style={{height: displayHeight ? displayHeight : 0}}>
              {current !== null && Math.abs(current - index) <= 2 && (
                <ShortVideoPlayer
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
          );
        }}
        horizontal={false}
        pagingEnabled={true}
        keyExtractor={(item: any, index: any) => item.mini_video_id.toString()}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleViewableItemsChanged}
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage && !isFetching) {
            console.log('Fetching next page');
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.8}
        ListFooterComponent={
          <View style={{...styles.loading, marginBottom: spacing.xl}}>
            {hasNextPage && (
              <FastImage
                style={{height: 80, width: 80}}
                source={require('../../../static/images/loading-spinner.gif')}
                resizeMode={FastImage.resizeMode.contain}
              />
            )}
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
