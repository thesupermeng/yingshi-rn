import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, ViewStyle } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { VodType } from '../../types/ajaxTypes';
import { LiveTVStationItem } from '../../types/ajaxTypes';
import VodCard from './vodCard';
import { useAppDispatch } from '../../hooks/hooks';
import { playVod } from '../../redux/actions/vodActions';
import { VodRecordType } from '../../redux/reducers/vodReducer';
import { FlatList } from 'react-native-gesture-handler';
interface Props {
    params?: any[],
    vodStyle?: ViewStyle,
    horizontal?: boolean,
    liveStationList?: Array<LiveTVStationItem>,
    showInfo?: 'none' | 'watch_progress'
}
type LiveStationType = {
    item: LiveTVStationItem
}


export default function VodLiveStationList({ vodStyle, horizontal = true, liveStationList=[], showInfo='none' }: Props) {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    return (
        <FlatList
            data={liveStationList}
            horizontal
            renderItem={({item} : LiveStationType)  => {

                return <VodCard showPlayIcon={false} vodImageStyle={vodStyle} shadowBottom={true}
                key={item.id}
                vod_name={item.live_station_name} vod_pic={item.live_station_img_url}  
                showInfo={''}
                onPress={() => {
                    // console.log('PRESSED ' + item.live_station_name)
                    navigation.navigate('电视台播放', { liveStationItemList: liveStationList, liveStationItem: item });
                }} />
            }}
        />
    );
}

const styles = StyleSheet.create({

});