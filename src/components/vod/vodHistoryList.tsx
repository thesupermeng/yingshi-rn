import {useState} from 'react';
import {StyleSheet, TouchableOpacity, Image, ViewStyle} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {VodType} from '../../types/ajaxTypes';
import VodCard from './vodCard';
import {useAppDispatch} from '../../hooks/hooks';
import {playVod} from '../../redux/actions/vodActions';
import {VodRecordType} from '../../redux/reducers/vodReducer';
import {FlatList} from 'react-native-gesture-handler';
interface Props {
  params?: any[];
  vodStyle?: ViewStyle;
  horizontal?: boolean;
  vodList?: Array<VodRecordType>;
  showInfo?: 'none' | 'watch_progress';
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
}: Props) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <FlatList
      data={vodList}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}: FlatListType) => {
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
              navigation.navigate('播放', {vod_id: item.vod_id});
            }}
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({});
