import React from 'react';
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

type VodCarousellResponseType = {
  list: Array<VodType>
}

export default ({ navigation }: HomeStackScreenProps<'Home'>) => {
  const { colors } = useTheme();
  const { data: images } = useQuery({
    queryKey: ["carousell"],
    queryFn: () =>
      fetch(`https://www.yingshi.tv/index.php/ajax/data.html?mid=1&limit=1&by=score&order=desc`)
        .then(response => response.json())
        .then((json: VodCarousellResponseType) => {
          return json.list
        })
  });

  return (
    <ScreenContainer>
      <HomeHeader navigator={navigation}/>
      {
        images && <View style={{ height: 200 }}>
          <Swiper style={styles.wrapper}
            autoplay
            dotColor={colors.muted}
            activeDotColor={colors.text}
            dotStyle={styles.dotStyle}
            paginationStyle={styles.paginationStyle}
            activeDotStyle={styles.activeDotStyle}>
            {
              images.map((img, idx) => (
                <View style={styles.slide} key={`slider-${idx}`}>
                  <Image source={{ uri: img.vod_pic }} style={styles.image} resizeMode={"cover"} />
                </View>
              ))
            }
          </Swiper>
        </View>
      }
      <ShowMoreVodButton text='重磅热播' />
      <VodList query_url='https://www.yingshi.tv/index.php/ajax/data.html?mid=1&limit=1&by=score&order=desc' vodStyle={styles.vod_hotlist} />
      <ShowMoreVodButton text='热播电视剧' />
      <VodList query_url='https://www.yingshi.tv/index.php/ajax/data.html?mid=1&limit=35&page=1&tid=2&by=hits_day' />
      <ShowMoreVodButton text='热播综艺' />
      <VodList query_url='https://www.yingshi.tv/index.php/ajax/data.html?mid=1&limit=35&page=1&tid=3&by=hits_day' />
      <ShowMoreVodButton text='动漫' />
      <VodList query_url='https://www.yingshi.tv/index.php/ajax/data.html?mid=1&limit=35&page=1&tid=4&by=hits_day' />
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