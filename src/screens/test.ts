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
import {useQueryClient} from '@tanstack/react-query';
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
import {useIsFocused} from '@react-navigation/native';

import {autobind} from 'core-decorators';

import {SafeAreaView, ScrollView} from 'react-native';
import {PullToRefreshView} from 'react-native-smooth-pull-to-refresh';
import {RefreshView} from './RefreshView';

interface NavType {
  id: number;
  name: string;
}

export default ({navigation}: BottomTabScreenProps<any>) => {
  const isFocused = useIsFocused();
  const {colors, textVariants, spacing} = useTheme();
  const [navId, setNavId] = useState(0);
  const width = Dimensions.get('window').width;
  const ref = useRef<any>();
  const onEndReachedCalledDuringMomentum = useRef(true);
  const BTN_COLORS = ['#30AA55', '#7E9CEE', '#F1377A', '#FFCC12', '#ED7445'];
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const navRef = useRef<any>();
  const queryClient = useQueryClient();
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
  const [hideContent, setHideContent] = useState(false);

  // Function to handle the refresh action
  const handleTabPress = () => {
    if (isFocused) {
      handleRefresh(navId);
    }
  };

  const [title, setTitle] = useState('false');
  function onTriggerToRefresh(triggered: boolean) {
    let x = triggered ? 'Release to refresh' : 'Pull down to refresh';
    setTitle(x);
  }
  function stopRefreshing() {
    setIsRefreshing(false);
  }
  function startRefreshing() {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  }
  function onInnerRefresh() {
    setTitle('loading');
    startRefreshing();
  }

  // Add an event listener to the navigation object for the tab press event
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', handleTabPress);

    // Clean up the event listener when the component unmounts
    return () => unsubscribe();
  }, [navigation, isFocused]);

  // Function to handle the pull-to-refresh action
  const handleRefresh = async (id: number) => {
    setIsRefreshing(true);
    setHideContent(true);

    try {
      // const newData = await fetchData(id); // Fetch new data

      // Update the cache for the specific query using the queryClient
      await queryClient.invalidateQueries(['HomePage', id]);

      setIsRefreshing(false);
      setNavId(id);
      ref?.current?.scrollToIndex({
        index: id,
      });
      setTimeout(() => {
        setHideContent(false);
      }, 420);
      // After updating the cache, you can optionally log the data
      //console.log('newData', newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
        <>
          <PullToRefreshView
            minPullDistance={70}
            pullAnimHeight={70}
            pullAnimYValues={{from: -50, to: 10}}
            isRefreshing={isRefreshing}
            onRefresh={onInnerRefresh}
            onTriggerToRefresh={onTriggerToRefresh}
            contentComponent={
              <ScrollView>
                <Text style={styles.block1}>BLOCK 1</Text>
                <Text style={styles.block2}>BLOCK 2</Text>
                <Text style={styles.block3}>BLOCK 3</Text>
              </ScrollView>
            }>
            <RefreshView title={title} />
          </PullToRefreshView>
        </>
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
      </View>
      <PullToRefreshView
        minPullDistance={70}
        pullAnimHeight={70}
        pullAnimYValues={{from: -50, to: 10}}
        isRefreshing={isRefreshing}
        onRefresh={onInnerRefresh}
        onTriggerToRefresh={onTriggerToRefresh}
        contentComponent={
          <ScrollView>
            <Text style={styles.block1}>BLOCK 1</Text>
            <Text style={styles.block2}>BLOCK 2</Text>
            <Text style={styles.block3}>BLOCK 3</Text>
          </ScrollView>
        }>
        <RefreshView title={title} />
      </PullToRefreshView>
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
    justifyContent: 'flex-start',
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
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  block1: {
    margin: 2,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 230,
    height: 230,
    backgroundColor: '#9b9287',
  },
  block2: {
    margin: 2,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 230,
    height: 230,
    backgroundColor: '#9b9287',
  },
  block3: {
    margin: 2,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 230,
    height: 230,
    backgroundColor: '#9b9287',
  },
});
