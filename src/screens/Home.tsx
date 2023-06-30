import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native';
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
import { playVod } from '../redux/actions/vodActions';

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
      // fetch(`https://testapi.yingshi.tv/page/v1/typepage?id=${navId}`, {})
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
  const dispatch = useAppDispatch();

  return (
    <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }} scrollView={true} header={
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
    }>
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
                return <View style={styles.slide} key={`slider-${idx}`}>
                  <TouchableOpacity 
                      onPress={() => {
                        dispatch(playVod(carouselItem.vod));
                        navigation.navigate('播放', {
                            vod_id: carouselItem.carousel_content_id,
                        });
                    }}>
                    <FastImage
                      style={styles.image}
                      source={{
                        uri: carouselItem.carousel_pic_mobile,
                        priority: FastImage.priority.normal,
                      }}
                      resizeMode={FastImage.resizeMode.cover}
                    />
                  </TouchableOpacity>
                </View>
              })
            }
          </Swiper>
        </View>
      }
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
        data && !data.class_list && history && history.length > 0 &&
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
      <View gap={spacing.m} style={{paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset}}>
        {
          data?.categories.map((lst, idx) => (
            <View key={`${lst.type_name}-${idx}`} gap={spacing.m}>
              <ShowMoreVodButton text={lst.type_name} onPress={() => {
                navigation.navigate('片库', { type_id: lst.type_id });
              }} />
              <VodListVertical vods={lst.vod_list.slice(0, 6)} outerRowPadding={40} />
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
  }
})