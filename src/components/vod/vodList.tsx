import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, FlatList, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { VodType } from '../../types/ajaxTypes';
import VodCard from './vodCard';
import { useAppDispatch } from '../../hooks/hooks';
import { playVod } from '../../redux/actions/vodActions';
interface Props {
    query_url?: string,
    initial_page?: number,
    params?: any[],
    vodStyle?: typeof StyleSheet,
    horizontal?: boolean,
    vodList?: Array<VodType>
}

type VodResponseType = {
    list: Array<VodType>
}

type FlatListType = {
    item: VodType
}
export default function VodList({ query_url, initial_page = 0, vodStyle, horizontal = true, vodList=[] }: Props) {
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
    } = useQuery({ queryKey: [query_url, page, vodList.map(x => x.vod_id)], queryFn: () => fetchVods(page), keepPreviousData: true, initialData: vodList, enabled: query_url !== undefined });

    return (
        <FlatList
            data={data}
            horizontal
            renderItem={({item} : FlatListType)  => {
                return <VodCard vodImageStyle={vodStyle} vod_name={item.vod_name} vod_pic={item.vod_pic} onPress={() => {
                    dispatch(playVod(item));
                    navigation.navigate('播放', { vod_id: item.vod_id })
                }} />
            }}
        />
    );
}

const styles = StyleSheet.create({

});