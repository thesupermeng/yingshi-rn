import React, { memo } from 'react';
import SearchBar from './searchbar';
import { View, TouchableOpacity, StyleSheet, ViewStyle, Text } from 'react-native';
import Logo from '@static/images/logo.svg';
import VipEntry from '@static/images/splash/VipEntry.svg';
import History from '@static/images/history.svg';
import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { SuggestVodListType } from '@type/ajaxTypes';
import { useMemo } from 'react';
import { VodApi } from '@api';


interface Props {
    logo?: React.ReactNode,
    navigator: any,
    headerStyle?: ViewStyle,
}
function MainHeader({ logo, navigator, headerStyle }: Props) {
    const { icons } = useTheme();

    const { data: recommendations } = useQuery({
        queryKey: ["recommendationList"],
        queryFn: () => VodApi.getListByRecommendations(),
    });

    const randomVod = useMemo(() => {
        if (recommendations && recommendations.length > 0) {
            return recommendations[Math.floor(Math.random() * recommendations.length)]
        }
    }, [recommendations])

    return (
        <View style={{ ...styles.container, ...headerStyle }}>
            {
                logo
                    ? logo
                    : <Logo height={36} />
            }
            <SearchBar onPress={() => navigator.navigate('搜索', { initial: randomVod?.vod_name })} defaultValue={randomVod !== undefined ? randomVod.vod_name : ''} />
            <TouchableOpacity onPress={() => navigator.navigate('付费VIP')}>
                {
                  <VipEntry height={36} />
                }
            </TouchableOpacity>
        </View>
    );
}

export default memo(MainHeader);

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        padding: 2,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginBottom: 15,
    },
});