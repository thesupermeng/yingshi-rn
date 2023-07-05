import SearchBar from './searchbar';
import { View, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import Logo from '../../../static/images/logo.svg';
import History from '../../../static/images/history.svg';
import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { API_DOMAIN } from '../../constants';
import { VodCarousellResponseType } from '../../types/ajaxTypes';
import { useMemo } from 'react';

interface Props {
    logo?: React.ReactNode,
    navigator: any,
    headerStyle?: ViewStyle,
}
export default function MainHeader({ logo, navigator, headerStyle }: Props) {
    const { icons } = useTheme();

    const { data } = useQuery({
        queryKey: ["HomePage", 0],
        queryFn: () =>
            fetch(`${API_DOMAIN}page/v1/typepage?id=0`, {})
                .then(response => response.json())
                .then((json: VodCarousellResponseType) => {
                    return json.data
                }),
    });

    const randomVod = useMemo(() => {
        if (data?.yunying && data.yunying.length > 0 && data.yunying[0]?.vod_list?.length && data.yunying[0].vod_list.length > 0) {
            return data.yunying[0].vod_list[Math.floor(Math.random() * data.yunying.length)]
        }
    }, [data?.yunying])

    return (
        <View style={{ ...styles.container, ...headerStyle }}>
            {
                logo
                    ? logo
                    : <Logo width={110} />
            }
            <SearchBar onPress={() => navigator.navigate('搜索', { initial: randomVod?.vod_name })} defaultValue={randomVod !== undefined ? randomVod.vod_name : ''} />
            <TouchableOpacity onPress={() => navigator.navigate('播放历史')}>
                {
                    icons.iconColor !== undefined &&
                    <History height={26} width={26} color={icons.iconColor} />
                }
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 8,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginBottom: 8,
    },
});