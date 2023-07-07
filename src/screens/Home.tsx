import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TouchableWithoutFeedback, Dimensions, ViewToken, FlatListProps } from 'react-native';
import ScreenContainer from '../components/container/screenContainer';
import { useTheme } from '@react-navigation/native';
import { useQuery, useQueries, UseQueryResult } from '@tanstack/react-query';
import { NavOptionsResponseType, VodCarousellResponseType, VodPlaylistResponseType, VodTopicType, VodType } from '../types/ajaxTypes';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '../constants';
import CatagoryHome from '../components/container/CatagoryHome';
import RecommendationHome from '../components/container/RecommendationHome';
import HomeHeader from '../components/header/homeHeader';
import FastImage from 'react-native-fast-image';

interface NavType {
  id: number,
  name: string,
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
  const { colors, textVariants, spacing } = useTheme();
  const [navId, setNavId] = useState(0);
  const width = Dimensions.get('window').width;
  const ref = useRef<any>();

  const { data: navOptions } = useQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () =>
      fetch(`${API_DOMAIN}nav/v1/navItems`, {})
        .then(response => response.json())
        .then((json: NavOptionsResponseType) => {
          return json.data
        })
  });

  const fetchData = (id: number) => fetch(`${API_DOMAIN}page/v1/typepage?id=${id}`)
    .then(response => response.json())
    .then((json: VodCarousellResponseType) => {
      return json
    });

  // const data = useQueries({
  //   queryKey: [navOptions ? navOptions : 'pages'],
  //   queries: navOptions ? navOptions?.map(x => ({ queryKey: ['HomePage', x.id - 1], queryFn: () => fetchData(x.id - 1) })) : []
  // })
  const data = useQueries({
    queries: [
      { queryKey: ['HomePage', 0], queryFn: () => fetchData(0) },
      { queryKey: ['HomePage', 1], queryFn: () => fetchData(1) },
      { queryKey: ['HomePage', 2], queryFn: () => fetchData(2) },
      { queryKey: ['HomePage', 3], queryFn: () => fetchData(3) },
      { queryKey: ['HomePage', 4], queryFn: () => fetchData(4) },
      { queryKey: ['HomePage', 5], queryFn: () => fetchData(5) },
      { queryKey: ['HomePage', 6], queryFn: () => fetchData(6) },
      { queryKey: ['HomePage', 7], queryFn: () => fetchData(7) },
    ]
  })

  // console.log('first item', data[0])

  const onScrollEnd = useCallback((e: any) => {
    let pageNumber = Math.min(Math.max(Math.floor(e.nativeEvent.contentOffset.x / width + 0.5), 0), data.length);
    setNavId(pageNumber);
  }, [data, width, setNavId])
  return (
    <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
      <View style={{ backgroundColor: colors.background, paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
        <HomeHeader navigator={navigation} />
        <FlatList
          data={navOptions ? navOptions : []}
          horizontal
          contentContainerStyle={styles.nav}
          renderItem={({ item, index }: { item: NavType, index: number }) => {
            return (
              <TouchableOpacity style={{ marginRight: spacing.m, justifyContent: 'center', display: 'flex' }} onPress={() => {
                if (data.length > 0) {
                  setNavId(index)
                  ref?.current?.scrollToIndex({
                    index: index,
                  });
                }
              }}>
                <Text style={{
                  textAlign: 'center',
                  fontSize: navId === item.id ? textVariants.selected.fontSize : textVariants.unselected.fontSize,
                  fontWeight: navId === item.id ? textVariants.selected.fontWeight : textVariants.unselected.fontWeight,
                  color: navId === item.id ? colors.primary : colors.muted,
                }}>{item.name}</Text>
              </TouchableOpacity>

            )
          }}
        />
      </View>
      {
        !data && <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
          {
            <FastImage
              style={{ height: 80, width: 80 }}
              source={require('../../static/images/loading-spinner.gif')}
              resizeMode={FastImage.resizeMode.contain}
            />
          }
        </View>
      }
      <FlatList
        ref={ref}
        data={data}
        pagingEnabled={true}
        horizontal={true}
        windowSize={3}
        initialNumToRender={1}
        getItemLayout={(data, index) => (
          { length: width, offset: width * index, index }
        )}
        onMomentumScrollEnd={onScrollEnd}
        renderItem={
          ({ item, index }: { item: UseQueryResult<VodCarousellResponseType>, index: number }) => <View style={{ width: width }}>
            {
              item.data !== undefined && Math.abs(navId - index) <= 2 && index === 0 &&
              <RecommendationHome vodCarouselRes={item.data} />
            }
            {
              item.data !== undefined && Math.abs(navId - index) <= 2 && index > 0 &&
              <CatagoryHome vodCarouselRes={item.data} navId={index} />
            }
          </View>
        }
      />
    </ScreenContainer>
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
    flex: 1,
    height: '100%'
  }
})