import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import ScreenContainer from '../components/container/screenContainer';
import { useSelector, useDispatch } from 'react-redux';
import HomeHeader from '../components/header/homeHeader';
import { HomeStackScreenProps } from '../types/navigationTypes';
import { useTheme } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ShowMoreVodButton from '../components/button/showMoreVodButton';
import VodList from '../components/vod/vodList';
import { useQuery } from '@tanstack/react-query';
export default ({ navigation }: HomeStackScreenProps<'Home'>) => {
  const { colors } = useTheme()
  const images = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
  ]
  return (
    <ScreenContainer>
      <HomeHeader />
      <View style={{height: 250}}>
        <Swiper style={styles.wrapper}
          autoplay
          dotColor={colors.muted}
          activeDotColor={colors.text}
          dotStyle={styles.dotStyle}
          paginationStyle={styles.paginationStyle}
          activeDotStyle={styles.activeDotStyle}>
          {
            images.map((src, idx) => (
              <View style={styles.slide} key={`slider-${idx}`}>
                <Image source={{ uri: src }} style={styles.image} resizeMode={"cover"} />
              </View>
            ))
          }
        </Swiper>
      </View>
      <ShowMoreVodButton text='重磅热播' />
      <VodList query_url='https://www.yingshi.tv/index.php/ajax/data.html?mid=1&limit=1&by=score&order=desc' vodStyle={styles.vod_hotlist}/>
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
    height: 180
  },
  slide: {
    // flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
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
    top: 220,
    height: 20
  },
  vod_hotlist: {
    height: 150,
    width: 250
}
})