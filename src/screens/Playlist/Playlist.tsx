import React, {useCallback, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import MainHeader from '../../components/header/homeHeader';
import {useTheme} from '@react-navigation/native';
import {useInfiniteQuery} from '@tanstack/react-query';
import {VodPlaylistResponseType, VodTopicType} from '../../types/ajaxTypes';
import VodPlaylist from '../../components/playlist/vodPlaylist';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {API_DOMAIN} from '../../constants';
import Animated from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';

type FlatListType = {
  item: VodTopicType;
  index: number;
};

export default ({navigation}: BottomTabScreenProps<any>) => {
  // const BTN_COLORS = ['#FFCC12', '#F1377A', '#ED7445', '#7E9CEE', '#30AA55',];
  const {textVariants, colors, spacing} = useTheme();
  const LIMIT_PER_PAGE = 10;
  // const [results, setResults] = useState<Array<VodTopicType>>([])
  const [totalPage, setTotalPage] = useState(0);
  const fetchPlaylist = (page: number) =>
    fetch(`${API_DOMAIN}topic/v1/topic?page=${page}`)
      .then(response => response.json())
      .then((json: VodPlaylistResponseType) => {
        setTotalPage(Number(json.data.TotalPageCount));
        return Object.values(json.data.List);
      });

  const {
    data: playlists,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['vodPlaylist'],
    ({pageParam = 1}) => fetchPlaylist(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }

        const nextPage = allPages.length + 1;
        //if reach end
        if (nextPage > totalPage && totalPage != 0) {
          return undefined;
        }

        return nextPage;
      },
      // onSuccess: (data) => {
      //     if (data && data?.pages) {
      //         setResults([...results, ...data.pages[data.pages.length - 1].flat()])
      //     }
      // }
    },
  );

  const renderItem = ({item}: FlatListType) => (
    <VodPlaylist playlist={item} titleStyle={{color: colors.text}} />
  );

  return (
    <ScreenContainer containerStyle={{paddingLeft: 0, paddingRight: 0}}>
      <MainHeader
        headerStyle={{
          marginBottom: spacing.m,
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
        }}
        logo={
          <Text
            style={{
              ...textVariants.bigHeader,
              color: colors.text,
              fontSize: 22,
            }}>
            播单
          </Text>
        }
        navigator={navigation}
      />
      <Animated.FlatList
        data={playlists?.pages.flat()}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.3}
        windowSize={5}
        maxToRenderPerBatch={5}
        renderItem={renderItem}
        ListFooterComponent={
          <View style={{...styles.loading, marginBottom: spacing.xl}}>
            {hasNextPage && (
              <FastImage
                style={{height: 80, width: 80}}
                source={require('../../../static/images/loading-spinner.gif')}
                resizeMode={FastImage.resizeMode.contain}
              />
            )}
            {!(isFetchingNextPage || isFetching) && !hasNextPage && (
              <Text style={{...textVariants.body, color: colors.muted}}>
                没有更多了
              </Text>
            )}
          </View>
        }
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
