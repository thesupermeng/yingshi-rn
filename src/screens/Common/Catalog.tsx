// import React, {useCallback, useEffect, useMemo, useState} from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import * as React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import { useFocusEffect, useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '@type/navigationTypes';
import { playVod } from '@redux/actions/vodActions';
import { useAppDispatch } from '@hooks/hooks';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility/constants';
import VodTopicFilter from '../../components/vod/vodTopicFilter';
import VodCard from '../../components/vod/vodCard';
import DownArrow from '@static/images/arrow_down_yellow.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FlatListProps } from 'react-native/Libraries/Lists/FlatList';
// import FastImage from 'react-native-fast-image';
import FastImage from '../../components/common/customFastImage';
import appsFlyer from 'react-native-appsflyer';
import EmptyList from '../../components/common/emptyList';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TabItem } from '@rneui/base/dist/Tab/Tab.Item';
import { VodApi } from '@api';
import UmengAnalytics from '../../../Umeng/UmengAnalytics';
import { Vod } from '@models';
import { CLangKey } from '@constants';

interface NavType {
  id: number;
  name: string;
}
interface Option {
  text: string;
  value: any;
}

const sameTextAndValueObj = (text: string): Option => {
  return {
    text: text,
    value: text,
  };
};

// Translate Chinese to English order_by for API / display
const translateToCN = (txt: string) => {
  if (txt === 'time') {
    return '新上线';
  }
  if (txt === 'score') {
    return '好评榜';
  }
  return '热播榜';
};

// Order by options for filtering
const ORDER_BY_OPTIONS: Array<Option> = [
  {
    text: '新上线',
    value: 'time',
  },
  {
    text: '热播榜',
    value: 'hits_day',
  },
  {
    text: '好评榜',
    value: 'score',
  },
];
export default ({ navigation, route }: RootStackScreenProps<'片库'>) => {
  const { textVariants, colors, spacing, icons } = useTheme();
  const insets = useSafeAreaInsets();
  const queryClient = useQueryClient();
  const SCROLL_THRESHOLD = 50;
  const dispatch = useAppDispatch();

  const { data: navOptions } = useQuery({
    queryKey: ['filterOptions'],
    queryFn: () => VodApi.getTopicType(),
  });
  // Filtering
  const [currentTopicId, setCurrentTopicId] = useState(
    route.params.type_id === undefined ? 1 : route.params.type_id,
  );
  const [topicClass, setTopicClass] = useState(
    route.params.class === undefined || route.params.class.startsWith('全部') || route.params.class.startsWith('短剧')
      ? sameTextAndValueObj('全部类型')
      : sameTextAndValueObj(route.params.class),
  );
  const [area, setArea] = useState(
    route.params.area === undefined || route.params.area.startsWith('全部')
      ? sameTextAndValueObj('全部地区')
      : sameTextAndValueObj(route.params.area),
  );
  const [lang, setLang] = useState(
    route.params.lang === undefined || route.params.lang.startsWith('全部')
      ? sameTextAndValueObj('全部语言')
      : sameTextAndValueObj(route.params.lang),
  );
  const [year, setYear] = useState(
    route.params.year === undefined || route.params.year.startsWith('全部')
      ? sameTextAndValueObj('全部时间')
      : sameTextAndValueObj(route.params.year),
  );
  const [orderBy, setOrderBy] = useState(
    route.params.order_by === undefined
      ? {
        text: '热播榜',
        value: 'hits_day',
      }
      : {
        text: translateToCN(route.params.order_by),
        value: route.params.order_by,
      },
  );

  // For calculating the margin and width for displaying the vods for different viewports.
  // Cannot fix width and height. Min 3 cards each row. Max width 150 for iPad, tablet
  const windowDim = useMemo(
    () =>
      Dimensions.get('window').width -
      insets.left -
      insets.right -
      spacing.sideOffset * 4,
    [],
  );
  const paddingPerCard = 0;
  const minWidth = useMemo(
    () => windowDim / 3 - paddingPerCard,
    [windowDim, paddingPerCard],
  );
  const cardWidth = useMemo(
    () => Math.min(180, Math.floor(minWidth)),
    [minWidth],
  );
  const cardHeight = useMemo(() => 1.6 * cardWidth, [cardWidth]);
  const LIMIT_PER_PAGE = useMemo(
    () => Math.floor(windowDim / (cardWidth + paddingPerCard)) * 5,
    [cardWidth, paddingPerCard, windowDim],
  ); // 5 Rows;
  const CARDS_PER_ROW = useMemo(
    () => Math.floor(windowDim / cardWidth),
    [cardWidth],
  );
  const MARGIN_RIGHT = useMemo(() => {
    return Math.floor(
      (windowDim - CARDS_PER_ROW * cardWidth) / (CARDS_PER_ROW - 1),
    );
  }, [windowDim, CARDS_PER_ROW, cardWidth]);

  // For scroll animation - reanimated 3
  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const isFilterCollapse = useSharedValue(false);
  // this variable to handle scrollY value +- 50 status is cause by collapse
  const isCollapseEffect = useSharedValue(false);

  const [results, setResults] = useState<Vod[]>([]);

  const contentStyle = useAnimatedStyle(() => {
    return {
      display: isFilterCollapse.value ? 'none' : 'flex',
    };
  }, []);

  const contentSummaryStyle = useAnimatedStyle(() => {
    return {
      display: isFilterCollapse.value ? 'flex' : 'none',
      paddingBottom: 1,
    };
  }, []);

  const reset = () => {
    queryClient.removeQueries(['filteredVods']);
    setTopicClass(sameTextAndValueObj('全部类型'));
    setArea(sameTextAndValueObj('全部地区'));
    setLang(sameTextAndValueObj('全部语言'));
    setYear(sameTextAndValueObj('全部时间'));
  };

  const fetchVods = useCallback(
    (page: number) => {
      if (currentTopicId.toString() == "46" || currentTopicId.toString() == "44") {
        return VodApi.getList({
          page,
          limit: LIMIT_PER_PAGE,
          tid: currentTopicId.toString(),
          by: orderBy.value,
          year: year.value !== '全部时间' ? year.value : undefined,
          orderBy: 'desc',
        }).then((data) => data.List as Vod[])
      } else {
        return VodApi.getList({
          page,
          limit: LIMIT_PER_PAGE,
          tid: currentTopicId.toString(),
          by: orderBy.value,
          category: topicClass.value !== '全部类型' ? topicClass.value : undefined,
          area: area.value !== '全部地区' ? area.value : undefined,
          lang: lang.value !== '全部语言' ? lang.value : undefined,
          year: year.value !== '全部时间' ? year.value : undefined,
          orderBy: 'desc',
        }).then((data) => data.List as Vod[])
      }
    },
    [area, year, lang, topicClass, currentTopicId, orderBy],
  );

  const {
    data: vods,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    // refetch,
  } = useInfiniteQuery(
    ['filteredVods', area, year, lang, topicClass, currentTopicId, orderBy],
    ({ pageParam = 1 }) => fetchVods(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage =
          lastPage.length === LIMIT_PER_PAGE ? allPages.length + 1 : undefined;
        return nextPage;
      },
      onSuccess: data => {
        if (data === null || data.pages[0] === null) {
          setResults([]);
        } else if (data.pages.length === 1) {
          if (data.pages[data.pages.length - 1] !== null) {
            setResults(data.pages.flat());
          }
        } else {
          if (data.pages[data.pages.length - 1] !== null) {
            setResults([
              ...results,
              ...data.pages[data.pages.length - 1].flat(),
            ]);
          }
        }
      },
      cacheTime: 0,
      staleTime: 0,
    },
  );

  useEffect(() => {
    setResults([]);
    // refetch();
  }, [area, year, lang, topicClass, currentTopicId, orderBy]);

  // useFocusEffect(
  //   useCallback(() => {
  //     queryClient.removeQueries(['filteredVods']);
  //   }, [queryClient]),
  // );

  const topicOptions: Array<NavType> = useMemo(() => {
    if (navOptions) {
      return navOptions.map(x => ({
        id: x.type_id,
        name: x.type_name,
      }));
    }
    return [];
  }, [navOptions]);

  const options = navOptions?.find(x => x.type_id === currentTopicId);
  // function underlineStyle (option: number) {
  const underlineStyle = (option: number) => {
    // console.log(option, currentTopicId)
    if (option === currentTopicId) {
      return { backgroundColor: colors.primary, ...styles.underline };
    }
    return {};
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const st = event.contentOffset.y;

      // if scroll down & y > 50
      if (st > lastContentOffset.value && st > SCROLL_THRESHOLD) {
        if (isCollapseEffect.value) {
          isCollapseEffect.value = false;
        } else if (!isFilterCollapse.value && !isCollapseEffect.value) {
          isCollapseEffect.value = true;
          isFilterCollapse.value = true;
        }
      }

      // if scroll up & y <= 50
      if (st < lastContentOffset.value && st <= SCROLL_THRESHOLD) {
        if (isCollapseEffect.value) {
          isCollapseEffect.value = false;
        } else if (isFilterCollapse.value && !isCollapseEffect.value) {
          isCollapseEffect.value = true;
          isFilterCollapse.value = false;
        }
      }

      lastContentOffset.value = st;
    },
    onBeginDrag: e => {
      isScrolling.value = true;
    },
    onEndDrag: e => {
      isScrolling.value = false;
    },
  });

  // ========== for analytics - start ==========
  useEffect(() => {
    if (topicOptions.length > 0) {
      const currentTopicName = topicOptions.find((topic) => topic.id === currentTopicId);

      if (currentTopicName) {
        UmengAnalytics.catalogViewsAnalytics({
          category_id: currentTopicId.toString(),
          category_name: currentTopicName.name,
        });
      }
    }
  }, [currentTopicId, topicOptions]);
  // ========== for analytics - end ==========

  // for auto select 短剧
  useEffect(() => {
    // console.log("route.params.class")
    // console.log(route.params.class)

    if (route.params.class == '短剧')
      setCurrentTopicId(46);
  }, [topicOptions]);


  useEffect(() => {
    const eventName = 'catalog';
    const eventValues = {
      pianku: 'pianku',
    };

    // appsFlyer.logEvent(
    //   eventName,
    //   eventValues,
    //   res => {
    //     console.log(res);
    //   },
    //   err => {
    //     console.error(err);
    //   },
    // );
  }, []);

  const renderNavItems = useCallback(
    ({ item }: { item: NavType }) => {
      return (
        <TouchableOpacity
          style={{ ...styles.btn }}
          onPress={() => {
            reset();
            setCurrentTopicId(item.id);
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize:
                currentTopicId === item.id
                  ? textVariants.body.fontSize
                  : textVariants.subBody.fontSize,
              color: currentTopicId === item.id ? colors.primary : colors.muted,
              fontWeight: currentTopicId === item.id ? '600' : '400',
            }}>
            {item.name}
          </Text>
          <View style={underlineStyle(item.id)} />
        </TouchableOpacity>
      );
    },
    [currentTopicId],
  );

  const renderVods = useCallback(
    ({ item, index }: { item: Vod; index: number }) => {
      return (
        <View
          style={{
            marginBottom: spacing.s,
            marginRight:
              index % CARDS_PER_ROW === CARDS_PER_ROW - 1 ? 0 : MARGIN_RIGHT,
          }}>
          <VodCard
            vod_pic={item?.vod_pic}
            vod_pic_list={item?.vod_pic_list}
            vod_name={item?.vod_name}
            vodImageStyle={{
              width: cardWidth,
              height: cardHeight,
            }}
            onPress={() => {
              dispatch(playVod(item));
              navigation.navigate('播放', {
                vod_id: item?.vod_id,
              });

              // ========== for analytics - start ==========
              const currentTopicName = topicOptions.find((topic) => topic.id === currentTopicId);

              if (currentTopicName) {
                UmengAnalytics.catalogClicksAnalytics({
                  category_id: currentTopicId.toString(),
                  category_name: currentTopicName.name,
                });
              }
              // ========== for analytics - end ==========
            }}
          />
        </View>
      );
    },
    [topicOptions, currentTopicId],
  );

  return (
    <>
      <ScreenContainer>
        <TitleWithBackButtonHeader
          title="片库"
        // headerStyle={{marginBottom: spacing.s}}
        />
        <Animated.View style={{ paddingTop: 16 }}>
          <FlatList
            data={topicOptions}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderNavItems}
          />
        </Animated.View>
        <Animated.View style={{ paddingBottom: spacing.xxs }}>
          {options && (
            <Animated.View style={contentStyle}>
              <VodTopicFilter
                callback={setOrderBy}
                init={orderBy}
                options={ORDER_BY_OPTIONS}
              />
              <VodTopicFilter
                callback={setTopicClass}
                init={topicClass}
                options={[
                  '全部类型',
                  ...options.type_extend_obj.class.split(','),
                ].map(x => sameTextAndValueObj(x))}
              />
              <VodTopicFilter
                callback={setArea}
                init={area}
                options={[
                  '全部地区',
                  ...options.type_extend_obj.area.split(','),
                ].map(x => sameTextAndValueObj(x))}
              />
              <VodTopicFilter
                callback={setLang}
                init={lang}
                options={[
                  '全部语言',
                  ...options.type_extend_obj.lang.split(','),
                ].map(x => sameTextAndValueObj(x))}
              />
              <VodTopicFilter
                callback={setYear}
                init={year}
                options={[
                  '全部时间',
                  ...options.type_extend_obj.year.split(','),
                ].map(x => sameTextAndValueObj(x))}
              />
            </Animated.View>
          )}
          <Animated.View
            style={{
              marginBottom: spacing.xs,
              backgroundColor: colors.background,
              padding: 0,
            }}>
            {options && (
              <Animated.View style={contentSummaryStyle}>
                <View
                  style={{
                    marginTop: spacing.s,
                    ...styles.collapedSummary,
                    justifyContent: 'space-between',
                  }}>
                  <View style={{ ...styles.collapedSummary, gap: 4 }}>
                    <Text style={{ ...textVariants.small, color: colors.muted }}>
                      {topicClass.text}
                    </Text>
                    <View
                      style={{
                        ...styles.dot,
                        backgroundColor: colors.primary,
                      }}
                    />
                    <Text style={{ ...textVariants.small, color: colors.muted }}>
                      {area.text}
                    </Text>
                    <View
                      style={{
                        ...styles.dot,
                        backgroundColor: colors.primary,
                      }}
                    />
                    <Text style={{ ...textVariants.small, color: colors.muted }}>
                      {lang.text}
                    </Text>
                    <View
                      style={{
                        ...styles.dot,
                        backgroundColor: colors.primary,
                      }}
                    />
                    <Text style={{ ...textVariants.small, color: colors.muted }}>
                      {year.text}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      // lastContentOffset.value = event.contentOffset.y;
                      isFilterCollapse.value = false;
                    }}>
                    <DownArrow color={colors.primary} height={icons.sizes.l} width={icons.sizes.l} />
                  </TouchableOpacity>
                </View>
              </Animated.View>
            )}
          </Animated.View>
        </Animated.View>
        {vods && (
          <Animated.FlatList
            data={results}
            onScroll={scrollHandler}
            keyExtractor={(item: Vod, index: number) => {
              return `#-${item?.vod_id}-${index}`;
            }}
            onEndReached={() => {
              if (hasNextPage) {
                fetchNextPage();
              }
            }}
            onEndReachedThreshold={0.4}
            columnWrapperStyle={{}}
            ListFooterComponent={
              <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                {hasNextPage && (
                  <FastImage
                    style={{ height: 80, width: 80 }}
                    source={require('@static/images/loading-spinner.gif')}
                    resizeMode={'contain'}
                  />
                )}
                {!(isFetchingNextPage || isFetching) &&
                  !hasNextPage &&
                  results.length > 0 && (
                    <Text style={{ ...textVariants.body, color: colors.muted }}>
                      {CLangKey.noAnyMore.tr()}
                    </Text>
                  )}
                {!(isFetchingNextPage || isFetching) &&
                  !hasNextPage &&
                  results.length == 0 && (
                    <View style={{ marginTop: 10 }}>
                      <EmptyList description={'暂无数据'} />
                    </View>
                  )}
              </View>
            }
            numColumns={CARDS_PER_ROW}
            renderItem={renderVods}
          />
        )}
      </ScreenContainer>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    marginTop: 10,
  },
  btn: {
    paddingRight: 20,
  },
  underline: {
    marginTop: 7,
    height: 4,
    width: '50%',
    borderRadius: 20,
    alignSelf: 'center',
  },
  listView: {
    flex: 1,
  },
  collapedSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dot: {
    height: 3,
    width: 3,
    marginTop: 3,
    borderRadius: 999,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
