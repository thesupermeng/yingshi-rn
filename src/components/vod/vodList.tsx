import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, ScrollView, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { VodType } from '../../types/ajaxTypes';
import VodCard from './vodCard';
interface Props {
    query_url: string,
    initial_page?: number,
    params?: any[],
    vodStyle?: typeof StyleSheet,
}

type VodResponseType = {
    list: Array<VodType>
}

export default function VodList({ query_url, initial_page = 0, vodStyle }: Props) {
    const theme = useTheme();
    const [page, setPage] = useState(initial_page);
    const navigation = useNavigation();
    const fetchVods = (page = 0) => fetch(`${query_url}/&page=${page}`).then((res) => res.json().then((json: VodResponseType) => {
        return json.list;
    }));

    const {
        isLoading,
        isError,
        error,
        data: vodlist,
        isFetching,
        isPreviousData,
    } = useQuery({ queryKey: [query_url, page], queryFn: () => fetchVods(page), keepPreviousData: true });

    return (
        <ScrollView style={styles.list} horizontal>
            {
                vodlist && vodlist.map((vod, id) => (
                    <VodCard key={`${query_url}-${page}-${id}`} vodImageStyle={vodStyle} vod={vod} onPress={() => {
                        navigation.navigate('首页', {
                            screen: '播放',
                            params: { vod_id: vod.vod_id },
                        })
                    }} />
                ))
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({

});