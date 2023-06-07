import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, ScrollView, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { VodType } from '../../types/ajaxTypes';
import VodCard from './vodCard';
interface Props {
    query_url: string,
    key: string,
    initial_page?: number,
    params?: any[],
    vodStyle?: typeof StyleSheet,
}

type VodResponseType = {
    list: Array<VodType>
}

export default function VodList({ query_url, key, initial_page = 0, vodStyle }: Props) {
    const theme = useTheme();
    const [page, setPage] = useState(initial_page);

    const fetchVods = (page = 0) => fetch(`${query_url}/&page=${page}`).then((res) => res.json().then((json : VodResponseType) => {
        console.log(json);
        return json.list;
    }));

    const {
        isLoading,
        isError,
        error,
        data: vodlist,
        isFetching,
        isPreviousData,
    } = useQuery({ queryKey: [key, query_url, page], queryFn: () => fetchVods(page), keepPreviousData: true });

    return (
        <ScrollView style={styles.list} horizontal>
            {
                vodlist && vodlist.map((vod, id) => (
                    <VodCard key={`${key}-${page}-${id}`} vodStyle={vodStyle} vod={vod} />
                ))
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({

});