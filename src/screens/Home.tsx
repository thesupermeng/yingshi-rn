import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  RefreshControl,
} from 'react-native';
import ScreenContainer from '../components/container/screenContainer';
import {useTheme} from '@react-navigation/native';
import {useQuery, useQueries, UseQueryResult} from '@tanstack/react-query';
import {
  NavOptionsResponseType,
  VodCarousellResponseType,
  VodPlaylistResponseType,
  VodTopicType,
  VodType,
  LiveTVStationsResponseType,
} from '../types/ajaxTypes';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {API_DOMAIN} from '../utility/constants';
import CatagoryHome from '../components/container/CatagoryHome';
import RecommendationHome from '../components/container/RecommendationHome';
import HomeHeader from '../components/header/homeHeader';
import FastImage from 'react-native-fast-image';
// import { FlatList } from 'react-native-gesture-handler';

interface NavType {
  id: number;
  name: string;
}

export default ({navigation}: BottomTabScreenProps<any>) => {
  const {colors, textVariants, spacing} = useTheme();
  const [navId, setNavId] = useState(0);
  const width = Dimensions.get('window').width;
  const ref = useRef<any>();
  const onEndReachedCalledDuringMomentum = useRef(true);
  const BTN_COLORS = ['#30AA55', '#7E9CEE', '#F1377A', '#FFCC12', '#ED7445'];
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const navRef = useRef<any>();

  const {data: navOptions} = useQuery({
    queryKey: ['HomePageNavOptions'],
    queryFn: () =>
      fetch(`${API_DOMAIN}nav/v1/navItems`, {})
        .then(response => response.json())
        .then((json: NavOptionsResponseType) => {
          return json.data;
        }),
  });

  const fetchData = (id: number) =>
    fetch(`${API_DOMAIN}page/v1/typepage?id=${id}`)
      .then(response => response.json())
      .then((json: VodCarousellResponseType) => {
        console.log('fetchData');
        console.log(id);
        console.log(json);
        return json;
      });

  const data = useQueries({
    queries: navOptions
      ? navOptions?.map(x => ({
          queryKey: ['HomePage', x.id],
          queryFn: () => fetchData(x.id),
        }))
      : [],
  });

  const [isRefreshing, setIsRefreshing] = useState(false);
  // Function to handle the pull-to-refresh action
  const handleRefresh = async (id: any) => {
    setIsRefreshing(true);
    await fetchData(id);
    setTimeout(() => {
      setNavId(id);
      ref?.current?.scrollToIndex({
        index: id,
      });
      setIsRefreshing(false);
    }, 100); // Replace this with your actual API calls
  };

  const Content = useCallback(
    ({
      item,
      index,
    }: {
      item: UseQueryResult<VodCarousellResponseType>;
      index: number;
    }) => {
      return (
        <View style={{width: width}}>
          {item.data !== undefined &&
            (index === 0 ? (
              <RecommendationHome
                vodCarouselRes={item.data}
                setScrollEnabled={setScrollEnabled}
                onRefresh={handleRefresh}
              />
            ) : (
              <CatagoryHome
                vodCarouselRes={item.data}
                navId={index}
                setScrollEnabled={setScrollEnabled}
                onRefresh={handleRefresh}
              />
            ))}
        </View>
      );
    },
    [data],
  );

  const onScrollEnd = useCallback(
    (e: any) => {
      if (!onEndReachedCalledDuringMomentum.current) {
        const pageNumber = Math.min(
          Math.max(Math.floor(e.nativeEvent.contentOffset.x / width + 0.5), 0),
          data.length,
        );
        if (pageNumber !== navId) {
          setNavId(pageNumber);
          navRef?.current?.scrollToIndex({
            index: pageNumber,
            viewOffset: 24,
          });
        }
        onEndReachedCalledDuringMomentum.current = true;
      }
    },
    [data, width, onEndReachedCalledDuringMomentum, navRef, navId],
  );

  return (
    <ScreenContainer containerStyle={{paddingLeft: 0, paddingRight: 0}}>
      <View
        style={{
          backgroundColor: colors.background,
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
        }}>
        <HomeHeader navigator={navigation} />
        <FlatList
          data={navOptions ? navOptions : []}
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={navRef}
          contentContainerStyle={styles.nav}
          renderItem={({item, index}: {item: NavType; index: number}) => {
            return (
              <TouchableOpacity
                style={{
                  marginRight: spacing.m,
                  justifyContent: 'center',
                  display: 'flex',
                }}
                onPress={() => {
                  if (data.length > 0) {
                    setNavId(index);
                    ref?.current?.scrollToIndex({
                      index: index,
                    });
                  }
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize:
                      navId === index
                        ? textVariants.selected.fontSize
                        : textVariants.unselected.fontSize,
                    fontWeight:
                      navId === index
                        ? textVariants.selected.fontWeight
                        : textVariants.unselected.fontWeight,
                    color: navId === index ? colors.primary : colors.muted,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      {!data ||
        (isRefreshing && (
          <View style={{...styles.loading, marginBottom: 80}}>
            {
              <FastImage
                style={{height: 80, width: 80}}
                source={require('../../static/images/loading-spinner.gif')}
                resizeMode={FastImage.resizeMode.contain}
              />
            }
          </View>
        ))}
      {data && (
        <View style={{opacity: !isRefreshing ? 1 : 0}}>
          <FlatList
            ref={ref}
            data={data}
            pagingEnabled={true}
            scrollEnabled={
              scrollEnabled && onEndReachedCalledDuringMomentum.current
            }
            horizontal={true}
            windowSize={3}
            maxToRenderPerBatch={2}
            initialNumToRender={1}
            nestedScrollEnabled={true}
            getItemLayout={(data, index) => ({
              length: width,
              offset: width * index,
              index,
            })}
            onMomentumScrollBegin={() => {
              onEndReachedCalledDuringMomentum.current = false;
            }}
            onMomentumScrollEnd={onScrollEnd}
            renderItem={Content}
          />
        </View>
      )}
    </ScreenContainer>
  );
};

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
    fontWeight: 'bold',
  },
  dotStyle: {
    width: 6,
    height: 4,
  },
  activeDotStyle: {
    width: 14,
    height: 4,
  },
  paginationStyle: {
    top: 173,
    height: 20,
  },
  vod_hotlist: {
    height: 99,
    width: 176,
  },
  nav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 10,
  },
  catalogNav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 5,
  },
  vodList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    opacity: 0.8,
  },
  carouselTag: {
    position: 'absolute',
    bottom: 12,
    left: 16,
    marginRight: 16,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
});
