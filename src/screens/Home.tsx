import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, FlatList } from 'react-native';
import ScreenContainer from '../components/container/screenContainer';
import { useSelector, useDispatch } from 'react-redux';
import HomeHeader from '../components/header/homeHeader';
import { useTheme } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ShowMoreVodButton from '../components/button/showMoreVodButton';
import VodList from '../components/vod/vodList';
import { useQuery } from '@tanstack/react-query';
import { VodCarousellResponseType, VodType } from '../types/ajaxTypes';
import FastImage from 'react-native-fast-image'
import { VodReducerState } from '../redux/reducers/vodReducer';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { RootState } from '../redux/store';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import VodHistoryList from '../components/vod/vodHistoryList';
import { API_DOMAIN } from '../constants';
import VodListVertical from '../components/vod/vodListVertical';

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
  const { data } = useQuery({
    queryKey: ["HomePage", navId],
    queryFn: () =>
      fetch(`${API_DOMAIN}page/v1/typepage?id=${navId}`, {})
        .then(response => response.json())
        .then((json: VodCarousellResponseType) => {
          return json.data
        })
  });
  const { data: navOptions } = useQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () =>
      fetch('https://testapi.yingshi.tv/nav/v1/navItems', {})
        .then(response => response.json())
        .then((json: VodCarousellResponseType) => {
          return json.data
        })
  });

  return (
    <ScreenContainer scrollView={true}>
      <HomeHeader navigator={navigation} />
      <FlatList
        data={navOptions}
        horizontal
        contentContainerStyle={styles.nav}
        renderItem={({ item }: NavType) => {
          return <TouchableOpacity style={{ marginRight: spacing.m, justifyContent: 'center', display: 'flex' }} onPress={() => setNavId(item.id)}>
            <Text style={{
              textAlign: 'center',
              fontSize: navId === item.id ? textVariants.bigHeader.fontSize : textVariants.header.fontSize,
              color: navId === item.id ? colors.primary : colors.muted,
            }}>{item.name}</Text>
          </TouchableOpacity>
        }}
      />
      {
        data?.categories[0] && <View style={{ height: 200 }}>
          <Swiper style={styles.wrapper}
            autoplay
            dotColor={colors.muted}
            activeDotColor={colors.text}
            dotStyle={styles.dotStyle}
            paginationStyle={styles.paginationStyle}
            activeDotStyle={styles.activeDotStyle}>
            {
              data.categories[0].vod_list.slice(0, 4).map((img, idx) => {
                return <View style={styles.slide} key={`slider-${idx}`}>
                  <FastImage
                    style={styles.image}
                    source={{
                      uri: img.vod_pic,
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                </View>
              })
            }
          </Swiper>
        </View>
      }
      <FlatList
        data={data && data.class_list && data.class_list.length > 0 ? ['全部剧集', ...data.class_list] : []}
        horizontal
        contentContainerStyle={styles.nav}
        renderItem={({ item, index }: { item: string, index: number }) => {
          return <TouchableOpacity style={{
            marginRight: spacing.m, justifyContent: 'center', display: 'flex', backgroundColor: BTN_COLORS[index % BTN_COLORS.length],
            padding: spacing.xs,
            borderRadius: spacing.xs,
          }} onPress={() => navigation.navigate('片库', { type_id: navId, class: item })}>
            <Text style={{
              textAlign: 'center',
              ...textVariants.body,
            }}>{item}</Text>
          </TouchableOpacity>
        }}
      />
      {
        history &&
        <View>
          <ShowMoreVodButton text='继续看' onPress={() => {
            navigation.navigate('播放历史');
          }} />
          <VodHistoryList vodStyle={styles.vod_hotlist} vodList={history.slice(0, 10)} showInfo='watch_progress' />
        </View>
      }
      <View gap={spacing.l}>
        {
          data?.categories.map((lst, idx) => (
            <View key={`${lst.type_name}-${idx}`}>
              <ShowMoreVodButton text={lst.type_name} onPress={() => {
                navigation.navigate('片库', { type_id: lst.type_id });
              }} />
              <VodListVertical vods={lst.vod_list.slice(0, 6)} />
            </View>
          ))
        }
      </View>
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
    width: 12,
    height: 7
  },
  activeDotStyle: {
    width: 25,
    height: 7
  },
  paginationStyle: {
    top: 180,
    height: 20
  },
  vod_hotlist: {
    height: 150,
    width: 250
  },
  nav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  vodList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})