import React, { useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, FlatList, Image, ViewStyle } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { VodType } from '../../types/ajaxTypes';
import VodCard from './vodCard';
import { useAppDispatch } from '../../hooks/hooks';
import { playVod } from '@redux/actions/vodActions';
interface Props {
    query_url?: string,
    initial_page?: number,
    params?: any[],
    vodStyle?: ViewStyle,
    horizontal?: boolean,
    vodList?: Array<VodType>,
    showPlayIcon?: boolean,
    showInfo?: 'none' | 'vod_remarks'
}

type VodResponseType = {
    list: Array<VodType>
}

type FlatListType = {
    item: VodType
}
export default function VodList({ query_url, initial_page = 0, vodStyle, horizontal = true, vodList = [], showPlayIcon, showInfo = 'vod_remarks' }: Props) {
    const [page, setPage] = useState(initial_page);
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const fetchVods = (page = 0) => {
        return fetch(`${query_url}/&page=${page}`).then((res) => res.json().then((json: VodResponseType) => {
            return json.list;
        }));
    }

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
    } = useQuery({
        queryKey: [query_url, page, vodList.map(x => x.vod_id)],
        queryFn: () => fetchVods(page), keepPreviousData: true,
        initialData: vodList, enabled: query_url !== undefined
    });

    const renderItem = useCallback(({ item } : FlatListType ) => {
        return <VodCard showPlayIcon={showPlayIcon} vodImageStyle={vodStyle}
        vod_name={item.vod_name} vod_pic={item.vod_pic}
        showInfo={
            showInfo === 'none'
                ? ''
                : item.vod_remarks
        }
        onPress={() => {
            dispatch(playVod(item));
            navigation.navigate('播放', { vod_id: item.vod_id })
        }} />
    }, []);

    return (
        <FlatList
            data={data}
            horizontal
            renderItem={renderItem}
        />
    );
}

const styles = StyleSheet.create({

});