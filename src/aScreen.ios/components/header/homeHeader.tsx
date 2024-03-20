import React, { memo } from 'react';
import SearchBar from './searchbar';
import { View, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import Logo from '@static/images/logo.svg';
import LogoLight from '@static/images/logoLight.svg';
import History from '@static/images/history.svg';
import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { API_DOMAIN } from '@utility/constants';
import { useMemo } from 'react';
import { VodApi } from '@api';
import { useSelector } from '@hooks/hooks';
import { ThemeActionType } from '@type/actionTypes';

interface Props {
    logo?: React.ReactNode,
    navigator: any,
    headerStyle?: ViewStyle,
}
function MainHeader({ logo, navigator, headerStyle }: Props) {
    const { icons, colors } = useTheme();

    const themeState = useSelector<{ theme: boolean }>('themeReducer');
    const isDark = themeState.theme === true;

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
                    : <Logo height={36} color={colors.primary} />
            }
            {/* <SearchBar onPress={() => navigator.navigate('搜索', { initial: randomVod?.vod_name })} defaultValue={randomVod !== undefined ? randomVod.vod_name : ''} /> */}
            {/* <TouchableOpacity onPress={() => navigator.navigate('播放历史')}>
                {
                    icons.iconColor !== undefined &&
                    <History height={26} width={26} color={icons.iconColor} />
                }
            </TouchableOpacity> */}
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