import {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react';
import {StyleSheet, TouchableOpacity, Image, ViewStyle} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {VodType} from '../../types/ajaxTypes';
import {LiveTVStationItem} from '../../types/ajaxTypes';
import VodCard from './vodCard';
import {useAppDispatch} from '../../hooks/hooks';
import {playVod} from '../../redux/actions/vodActions';
import {VodRecordType} from '../../redux/reducers/vodReducer';
import {FlatList} from 'react-native-gesture-handler';
interface Props {
  params?: any[];
  vodStyle?: ViewStyle;
  horizontal?: boolean;
  liveStationList?: Array<LiveTVStationItem>;
  showInfo?: 'none' | 'watch_progress';
  isRefreshing?: boolean;
}
type LiveStationType = {
  item: LiveTVStationItem;
};

export default function VodLiveStationList(
  {
    vodStyle,
    horizontal = true,
    liveStationList = [],
    showInfo = 'none',
    isRefreshing = false,
  }: Props,
  ref: any,
) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const liveRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
    liveRef?.current?.scrollToIndex({
      index: 0,
      animated: false,
    });
  };

  useEffect(() => {
    if (isRefreshing == false) {
      resetListPositionHandler(); //children function of interest
    }
  }, [isRefreshing]);

  return (
    <FlatList
      ref={liveRef}
      data={liveStationList}
      initialScrollIndex={0}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}: LiveStationType) => {
        if(item.live_station_img_url.charAt(0) == '/'){
          item.live_station_img_url = 'https://yingshi.tv' + item.live_station_img_url;
        }
        return (
          <VodCard
            showPlayIcon={false}
            vodImageStyle={vodStyle}
            shadowBottom={true}
            key={item.id}
            vod_name={item.live_station_name}
            vod_pic={item.live_station_img_url}
            showInfo={''}
            onPress={() => {
              // console.log('PRESSED ' + item.live_station_name)
              navigation.navigate('电视台播放', {
                liveStationItemList: liveStationList,
                liveStationItem: item,
              });
            }}
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({});
