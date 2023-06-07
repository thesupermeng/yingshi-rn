import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import ScreenContainer from '../components/container/screenContainer';
import { useSelector, useDispatch } from 'react-redux';
import HomeHeader from '../components/header/homeHeader';
import { HomeStackScreenProps } from '../types/navigationTypes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ShowMoreVodButton from '../components/button/showMoreVodButton';
import VodList from '../components/vod/vodList';
import { useQuery } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import { VodType } from '../types/ajaxTypes';

interface Props {
  navigation: HomeStackScreenProps<'Play'>,
  vod?: VodType
}

export default ({ navigation, vod }: Props) => {
  const { colors } = useTheme()
  return (
    <ScreenContainer>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    marginTop: 10,
    height: 240
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