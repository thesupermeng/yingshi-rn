import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native';
import ScreenContainer from '../components/container/screenContainer';
import HomeHeader from '../components/header/homeHeader';
import { useTheme } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ShowMoreVodButton from '../components/button/showMoreVodButton';
import VodList from '../components/vod/vodList';
import { useQuery, QueryClient, useQueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { NavOptionsResponseType, VodCarousellResponseType, VodPlaylistResponseType, VodTopicType, VodType } from '../types/ajaxTypes';
import FastImage from 'react-native-fast-image'
import { VodReducerState } from '../redux/reducers/vodReducer';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { RootState } from '../redux/store';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import VodHistoryList from '../components/vod/vodHistoryList';
import { API_DOMAIN } from '../constants';
import VodListVertical from '../components/vod/vodListVertical';
import LinearGradient from 'react-native-linear-gradient';
import { playVod, viewPlaylistDetails } from '../redux/actions/vodActions';
import { Directions, FlingGestureHandler, Gesture, GestureDetector, PanGestureHandler } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';
interface NavType {
  item: {
    id: number,
    name: string,
  }
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
  const { colors, textVariants, spacing } = useTheme();
  const [navId, setNavId] = useState(0);
  const vodReducer: VodReducerState = useAppSelector(({ vodReducer }: RootState) => vodReducer);
  const history = vodReducer.history;
  const BTN_COLORS = ['#30AA55', '#7E9CEE', '#F1377A', '#FFCC12', '#ED7445',];
  const dispatch = useAppDispatch();
  const [results, setResults] = useState<Array<VodTopicType>>([])
  const queryClient = useQueryClient();

  const { data: navOptions } = useQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () =>
      fetch(`${API_DOMAIN}nav/v1/navItems`, {})
        .then(response => response.json())
        .then((json: NavOptionsResponseType) => {
          return json.data
        })
  });

  const nextNavId = useMemo(() => {
    if (navOptions === undefined || navOptions.length < 2) {
      return 1
    }
    const navLength = navOptions.length;
    return (((navId + 1) % navLength) + navLength) % navLength
  }, [navId, navOptions])

  const prevNavId = useMemo(() => {
    if (navOptions === undefined || navOptions.length < 2) {
      return 1
    }
    const navLength = navOptions.length;
    return (((navId - 1) % navLength) + navLength) % navLength
  }, [navId, navOptions])


  const fetchData = (id: number) => fetch(`${API_DOMAIN}page/v1/typepage?id=${id}`)
    .then(response => response.json())
    .then((json: VodCarousellResponseType) => {
      console.log('FETCHED', id)
      return json.data
    });

  const { data } = useQuery({
    queryKey: ["HomePage", navId],
    queryFn: () => {
      return fetchData(navId);
    },
    staleTime: 300000,
  });

  const fetchPlaylist = (page: number) => fetch(`${API_DOMAIN}topic/v1/topic?page=${page}`)
    .then(response => response.json())
    .then((json: VodPlaylistResponseType) => {
      return Object.values(json.data.List)
    })

  const { data: playlists, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery(['vodPlaylist'], ({ pageParam = 1 }) => fetchPlaylist(pageParam), {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage =
          lastPage.length === 10 ? allPages.length + 1 : undefined;
        return nextPage;
      },
      onSuccess: (data) => {
        if (data && data?.pages) {
          setResults([...results, ...data.pages[data.pages.length - 1].flat()])
        }
      }
    });

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["HomePage", nextNavId],
      queryFn: () => {
        return fetchData(nextNavId);
      },
      staleTime: 300000,
    });
    queryClient.prefetchQuery({
      queryKey: ["HomePage", prevNavId],
      queryFn: () => {
        return fetchData(prevNavId);
      },
      staleTime: 300000,
    });
  }, [queryClient, nextNavId, prevNavId])

  const onLeftFling = Gesture.Fling().runOnJS(true)
    .direction(Directions.LEFT)
    .onStart((e) => {
      if (navOptions) {
        const l = navOptions?.length;
        const idx = (((navId + 1) % l) + l) % l;
        setNavId(idx);
      }

    });

  const onRightFling = Gesture.Fling().runOnJS(true)
    .direction(Directions.RIGHT)
    .onStart((e) => {
      if (navOptions && navOptions.length > 0) {
        const l = navOptions?.length;
        const idx = (((navId - 1) % l) + l) % l;
        setNavId(idx);
      }
    });

  return (
    <GestureDetector gesture={onLeftFling} >
      <GestureDetector gesture={onRightFling} >
        <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
          <View style={{ backgroundColor: colors.background, paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
            <HomeHeader navigator={navigation} />
            <FlatList
              data={navOptions}
              horizontal
              contentContainerStyle={styles.nav}
              renderItem={({ item }: NavType) => {
                return <TouchableOpacity style={{ marginRight: spacing.m, justifyContent: 'center', display: 'flex' }} onPress={() => setNavId(item.id)}>
                  <Text style={{
                    textAlign: 'center',
                    fontSize: navId === item.id ? textVariants.selected.fontSize : textVariants.unselected.fontSize,
                    fontWeight: navId === item.id ? textVariants.selected.fontWeight : textVariants.unselected.fontWeight,
                    color: navId === item.id ? colors.primary : colors.muted,
                  }}>{item.name}</Text>
                </TouchableOpacity>
              }}
            />
          </View>
          <FlatList
            ListHeaderComponent={
              <>
                {
                  data?.carousel[0] && <View style={{ height: 200, paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
                    <Swiper style={styles.wrapper}
                      autoplay
                      dotColor={colors.sliderDot}
                      activeDotColor={colors.text}
                      dotStyle={styles.dotStyle}
                      paginationStyle={styles.paginationStyle}
                      activeDotStyle={styles.activeDotStyle}>
                      {
                        data.carousel.map((carouselItem, idx) => {
                          return <TouchableOpacity style={styles.slide} key={`slider-${idx}`} onPress={() => {
                            dispatch(playVod(carouselItem.vod));
                            navigation.navigate('播放', {
                              vod_id: carouselItem.carousel_content_id,
                            });
                          }} >
                            <FastImage
                              style={styles.image}
                              source={{
                                uri: carouselItem.carousel_pic_mobile,
                                priority: FastImage.priority.normal,
                              }}
                              resizeMode={FastImage.resizeMode.cover}
                            />
                            <LinearGradient
                              colors={['transparent', 'black']}
                              start={{ x: 0.5, y: 0 }}
                              end={{ x: 0.5, y: 0.6 }}
                              style={styles.bottomBlur}
                            />
                            <Text style={{ ...textVariants.bodyBold, ...styles.carouselTag, color: 'white' }} numberOfLines={1}>{carouselItem.carousel_name}</Text>
                          </TouchableOpacity>
                        })
                      }
                    </Swiper>
                  </View>
                }

                <View>
                  {
                    data && data.class_list && data.class_list.length > 0 &&
                    <FlatList
                      data={['全部剧集', ...data.class_list]}
                      horizontal
                      contentContainerStyle={{ ...styles.catalogNav, marginBottom: spacing.m, paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}
                      renderItem={({ item, index }: { item: string, index: number }) => {
                        return <TouchableOpacity style={{
                          marginRight: spacing.m, justifyContent: 'center',
                          display: 'flex',
                          backgroundColor: BTN_COLORS[index % BTN_COLORS.length],
                          paddingLeft: spacing.s,
                          paddingRight: spacing.s,
                          paddingTop: spacing.s - 4,
                          paddingBottom: spacing.s - 1,
                          borderRadius: spacing.xs,
                          opacity: 0.9
                        }} onPress={() => navigation.navigate('片库', { type_id: navId, class: item })}>
                          <Text style={{
                            textAlign: 'center',
                            ...textVariants.body,
                            fontWeight: '700',
                            opacity: 0.9
                          }}>{item}</Text>
                        </TouchableOpacity>
                      }}
                    />
                  }
                  {
                    navId === 0 && history && history.length > 0 &&
                    <View gap={spacing.m} >
                      <View style={{ paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
                        <ShowMoreVodButton text='继续看' onPress={() => {
                          navigation.navigate('播放历史');
                        }} />
                      </View>
                      <View style={{ paddingLeft: spacing.sideOffset }}>
                        <VodHistoryList vodStyle={styles.vod_hotlist} vodList={history.slice(0, 10)} showInfo='watch_progress' />
                      </View>
                    </View>
                  }
                  {
                    data && data.yunying &&
                    <View gap={spacing.m} style={{ paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
                      <View>
                        <ShowMoreVodButton text='精选热播' onPress={() => {
                          navigation.navigate('片库');
                        }} />
                      </View>
                      <VodListVertical vods={data.yunying[navId].vod_list.slice(0, 6)} />
                    </View>
                  }
                  <View gap={spacing.m} style={{ paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
                    {
                      data?.categories.map((lst, idx) => {
                        return <View key={`${lst.type_name}-${idx}`} gap={spacing.m}>
                          <ShowMoreVodButton text={lst.type_name} onPress={() => {
                            navigation.navigate('片库', { type_id: lst.type_id, class: navId === 0 ? '全部' : lst.type_name });
                          }} />
                          {
                            lst.vod_list.length >= 6 &&
                            <VodListVertical vods={lst.vod_list.slice(0, 6)} />
                          }
                        </View>
                      })
                    }
                  </View>
                </View>
              </>
            }
            data={navId === 0 ? results : []}
            onEndReached={() => {
              if (navId === 0 && hasNextPage && !isFetchingNextPage && !isFetching) {
                fetchNextPage();
              }
            }}
            onEndReachedThreshold={0.1}
            renderItem={({ item, index }: { item: VodTopicType, index: number }) =>
              <View gap={spacing.m} style={{ paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
                <View key={`${item.topic_name}-${index}`} gap={spacing.m}>
                  <ShowMoreVodButton text={item.topic_name} onPress={() => {
                    dispatch(viewPlaylistDetails(item));
                    navigation.navigate('PlaylistDetail', { topic_id: item.topic_id });
                  }} />
                  <VodListVertical vods={item.vod_list.slice(0, 6)} />
                </View>
              </View>

            }
            ListFooterComponent={
              navId === 0 && <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                {
                  hasNextPage && <FastImage
                    style={{ height: 80, width: 80 }}
                    source={require('../../static/images/loading-spinner.gif')}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                }
                {
                  !(isFetchingNextPage || isFetching) && !hasNextPage &&
                  <Text style={{ ...textVariants.body, color: colors.muted, ...styles.noMore }}>没有更多了</Text>
                }
              </View>
            }
          />
        </ScreenContainer>
      </GestureDetector>
    </GestureDetector>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  dotStyle: {
    width: 6,
    height: 4
  },
  activeDotStyle: {
    width: 14,
    height: 4
  },
  paginationStyle: {
    top: 173,
    height: 20
  },
  vod_hotlist: {
    height: 99,
    width: 176
  },
  nav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 10,
  },
  catalogNav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 5
  },
  vodList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  bottomBlur: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 45,
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    opacity: 0.8
  },
  carouselTag: {
    position: 'absolute',
    bottom: 12,
    left: 16,
    marginRight: 16
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  }
})