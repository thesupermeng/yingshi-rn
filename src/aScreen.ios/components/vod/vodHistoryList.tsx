import {useEffect, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, Image, ViewStyle, Linking} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {VodType} from '@type/ajaxTypes';
import VodCard from './vodCard';
import {useAppDispatch} from '@hooks/hooks';
import {playVod} from '@redux/actions/vodActions';
import {VodRecordType} from '@redux/reducers/vodReducer';
import {FlatList} from 'react-native-gesture-handler';
interface Props {
  params?: any[];
  vodStyle?: ViewStyle;
  horizontal?: boolean;
  vodList?: Array<VodRecordType>;
  showInfo?: 'none' | 'watch_progress';
  isRefreshing?: boolean;
}

type VodResponseType = {
  list: Array<VodRecordType>;
};

type FlatListType = {
  item: VodRecordType;
};
export default function VodHistoryList({
  vodStyle,
  horizontal = true,
  vodList = [],
  showInfo = 'none',
  isRefreshing = false,
}: Props) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const historyRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
    historyRef?.current?.scrollToIndex({
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
      ref={historyRef}
      data={vodList}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}: FlatListType) => {
        return (
          <VodCard
            showPlayIcon={true}
            vodImageStyle={vodStyle}
            shadowBottom={true}
            vod_name={item.vod_name}
            vod_pic={item.vod_pic}
            showInfo={
              showInfo === 'none'
                ? ''
                : `观看至 ${new Date(1000 * item.timeWatched)
                    .toISOString()
                    .substr(11, 8)}`
            }
            onPress={() => {
              dispatch(playVod(item));
              navigation.navigate('播放IOS', {vod_id: item.vod_id});
            }}
            index={index}
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({});
