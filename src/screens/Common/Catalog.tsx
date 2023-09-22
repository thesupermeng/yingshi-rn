import React, {useCallback, useEffect, useMemo, useState} from 'react';
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
import {useFocusEffect, useTheme} from '@react-navigation/native';

import {RootStackScreenProps} from '../../types/navigationTypes';
import {
  FilterOptionsResponseType,
  FilterOptionsTypeExtendObj,
  SuggestResponseType,
  SuggestedVodType,
  VodType,
} from '../../types/ajaxTypes';
import {playVod} from '../../redux/actions/vodActions';
import {useAppDispatch} from '../../hooks/hooks';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import {API_DOMAIN, API_DOMAIN_TEST} from '../../utility/constants';
import VodTopicFilter from '../../components/vod/vodTopicFilter';
import VodCard from '../../components/vod/vodCard';
import DownArrow from '../../../static/images/arrow_down_yellow.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {FlatListProps} from 'react-native/Libraries/Lists/FlatList';
import FastImage from 'react-native-fast-image';
import appsFlyer from 'react-native-appsflyer';
import EmptyList from '../../components/common/emptyList';

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
export default ({navigation, route}: RootStackScreenProps<'片库'>) => {
  const {textVariants, colors, spacing, icons} = useTheme();
  const insets = useSafeAreaInsets();
  const queryClient = useQueryClient();
  const SCROLL_THRESHOLD = 50;
  const dispatch = useAppDispatch();
  const {data: navOptions} = useQuery({
    queryKey: ['filterOptions'],
    queryFn: () =>
      fetch(`${API_DOMAIN}type/v1/type`)
        .then(response => {
          return response.json();
        })
        .then((json: FilterOptionsResponseType) => {
          return json.data;
        }),
  });
  // Filtering
  const [currentTopicId, setCurrentTopicId] = useState(
    route.params.type_id === undefined ? 1 : route.params.type_id,
  );
  const [topicClass, setTopicClass] = useState(
    route.params.class === undefined || route.params.class.startsWith('全部')
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
  const lastScrolledOffset = useSharedValue(0)
  const isScrolling = useSharedValue(false);
  const isFilterCollapse = useSharedValue(false);

  const [results, setResults] = useState<Array<SuggestedVodType>>([]);

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
      let url = `${API_DOMAIN}vod/v2/vod?limit=${LIMIT_PER_PAGE}`;
      url += `&tid=${currentTopicId}`;
      if (topicClass.value !== '全部类型') {
        url += `&class=${topicClass.value}`;
      }
      if (area.value !== '全部地区') {
        url += `&area=${area.value}`;
      }
      if (lang.value !== '全部语言') {
        url += `&lang=${lang.value}`;
      }
      if (year.value !== '全部时间') {
        url += `&year=${year.value}`;
      }
      url += `&by=${orderBy.value}&order=desc`;
      url += `&page=${page}`;

      return fetch(url)
        .then(response => response.json())
        .then((json: SuggestResponseType) => {
          return json.data.List;
        });
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
    ({pageParam = 1}) => fetchVods(pageParam),
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
      staleTime: 0
    },
  );

  useEffect(() => {
    setResults([]);
    // refetch();
  }, [area, year, lang, topicClass, currentTopicId, orderBy]);

  useFocusEffect(
    useCallback(() => {
      queryClient.removeQueries(['filteredVods']);
    }, [queryClient]),
  );

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
  const underlineStyle = (option: number) => {
    if (option === currentTopicId) {
      return {backgroundColor: colors.primary, ...styles.underline};
    }
    return {};
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const st = event.contentOffset.y;
      console.log(lastScrolledOffset.value, st)
      if (st < lastScrolledOffset.value && isFilterCollapse.value && st < SCROLL_THRESHOLD) {
        isFilterCollapse.value = false;
      }
      if (st < lastContentOffset.value) {
        console.log(st, lastContentOffset.value)
        // if (isScrolling.value) {
        //     console.log("UP");
        // }
       
        lastContentOffset.value = event.contentOffset.y;
      } 
      else if (st > lastContentOffset.value + SCROLL_THRESHOLD) {
        
        // if (isScrolling.value) {
        //     console.log("DOWN");
        // }
        if (!isFilterCollapse.value) {
          isFilterCollapse.value = true;
        }
        lastContentOffset.value = st;
      }

      lastScrolledOffset.value = event.contentOffset.y;
    },
    onBeginDrag: e => {
      isScrolling.value = true;
    },
    onEndDrag: e => {
      isScrolling.value = false;
    },
  });

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

  const renderNavItems = useCallback(({item}: {item: NavType}) => {
    return (
      <TouchableOpacity
        style={{...styles.btn}}
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
            color:
              currentTopicId === item.id
                ? colors.primary
                : colors.muted,
            fontWeight: currentTopicId === item.id ? '600' : '400',
          }}>
          {item.name}
        </Text>
        <View style={underlineStyle(item.id)} />
      </TouchableOpacity>
    );
  }, []);

  const renderVods = useCallback(({
    item,
    index,
  }: {
    item: SuggestedVodType;
    index: number;
  }) => {
    return (
      <View
        style={{
          marginBottom: spacing.s,
          marginRight:
            index % CARDS_PER_ROW === CARDS_PER_ROW - 1
              ? 0
              : MARGIN_RIGHT,
        }}>
        <VodCard
          vod_pic={item?.vod_pic}
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
          }}
        />
      </View>
    );
  }, []);

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title="片库"
        headerStyle={{marginBottom: spacing.s}}
      />
      <Animated.View>
        <FlatList
          data={topicOptions}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderNavItems}
        />
      </Animated.View>
      <Animated.View style={{paddingBottom: spacing.xxs}}>
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
                <View style={{...styles.collapedSummary, gap: 4}}>
                  <Text style={{...textVariants.small, color: colors.muted}}>
                    {topicClass.text}
                  </Text>
                  <View
                    style={{
                      ...styles.dot,
                      backgroundColor: colors.primary,
                    }}
                  />
                  <Text style={{...textVariants.small, color: colors.muted}}>
                    {area.text}
                  </Text>
                  <View
                    style={{
                      ...styles.dot,
                      backgroundColor: colors.primary,
                    }}
                  />
                  <Text style={{...textVariants.small, color: colors.muted}}>
                    {lang.text}
                  </Text>
                  <View
                    style={{
                      ...styles.dot,
                      backgroundColor: colors.primary,
                    }}
                  />
                  <Text style={{...textVariants.small, color: colors.muted}}>
                    {year.text}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    // lastContentOffset.value = event.contentOffset.y;
                    isFilterCollapse.value = false;
                  }}>
                  <DownArrow height={icons.sizes.l} width={icons.sizes.l} />
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
          keyExtractor={(item: SuggestedVodType, index: number) => {
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
            <View style={{...styles.loading, marginBottom: spacing.xl}}>
              {hasNextPage && (
                <FastImage
                  style={{height: 80, width: 80}}
                  source={require('../../../static/images/loading-spinner.gif')}
                  resizeMode={FastImage.resizeMode.contain}
                />
              )}
              {!(isFetchingNextPage || isFetching) &&
                !hasNextPage &&
                results.length > 0 && (
                  <Text style={{...textVariants.body, color: colors.muted}}>
                    没有更多了
                  </Text>
                )}
              {!(isFetchingNextPage || isFetching) &&
                !hasNextPage &&
                results.length == 0 && (
                  <View style={{marginTop: 10}}>
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
