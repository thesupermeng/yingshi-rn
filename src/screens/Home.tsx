import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import ScreenContainer from '../components/container/screenContainer';
import { useSelector, useDispatch } from 'react-redux';
import HomeHeader from '../components/header/homeHeader';
import { HomeStackScreenProps, RootTabScreenProps } from '../types/navigationTypes';
import { useTheme } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ShowMoreVodButton from '../components/button/showMoreVodButton';
import VodList from '../components/vod/vodList';
import { useQuery } from '@tanstack/react-query';
import { VodType } from '../types/ajaxTypes';
import FastImage from 'react-native-fast-image'
import { VodReducerState } from '../redux/reducers/vodReducer';
import { useAppSelector } from '../hooks/hooks';
import { RootState } from '../redux/store';

type VodData = {
  vod_list: Array<VodType>,
  type_name: string
}

type VodCarousellResponseType = {
  data: {
    yunying: Array<VodData>
    categories: Array<VodData>
  }
}

export default ({ navigation }: HomeStackScreenProps<'Home'>) => {
  const { colors } = useTheme();
  const [url, setUrl] = useState('https://api.yingshi.tv/page/v1/typepage?id=0');
  const vodReducer: VodReducerState = useAppSelector(({ vodReducer }: RootState) => vodReducer);
  const history = vodReducer.history;

  const { data } = useQuery({
    queryKey: ["HomePage"],
    queryFn: () =>
      fetch(url)
        .then(response => response.json())
        .then((json: VodCarousellResponseType) => {
          return json.data
        })
  });

  return (
    <ScreenContainer scrollView={true}>
      <HomeHeader navigator={navigation} />
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
      {
        history &&
        <View>
          <ShowMoreVodButton text='继续看' />
          <VodList vodStyle={styles.vod_hotlist} vodList={history.slice(0, 10)} />
        </View>
      }
      <ShowMoreVodButton text='重磅热播' />
      <VodList query_url='https://www.yingshi.tv/index.php/ajax/data.html?mid=1&limit=1&by=score&order=desc' vodStyle={styles.vod_hotlist} />
      {
        data?.categories.map((lst, idx) => (
          <View key={`${lst.type_name}-${idx}`}>
            <ShowMoreVodButton text={lst.type_name} />
            <VodList vodList={lst.vod_list.slice(0, 10)} />
          </View>
        ))
      }
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
  }
})