import React, { memo } from 'react';
import SearchBar from './searchbar';
import { View, TouchableOpacity, StyleSheet, ViewStyle, Text, Linking, Share } from 'react-native';
import Logo from '@static/images/logo.svg';
import ShareRectIcon from "@static/images/shareRect.svg";
import SearchIcon from "@static/images/search.svg";
import NavIcon from "@static/images/nav.svg";
import History from '@static/images/history.svg';
import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { API_DOMAIN } from '@utility/constants';
import { useMemo } from 'react';
import { AppsApi, VodApi } from '@api';
import { useSelector } from '@hooks/hooks';
import { screenModel } from '@type/screenType';
import CustomFastImage from "../common/customFastImage";
import { shareApp } from '@utility/helper';

interface Props {
    logo?: React.ReactNode,
    navigator: any,
    headerStyle?: ViewStyle,
    title?: string,
    rightComponent?: React.ReactNode,
    searchIcon?: boolean,
    navIcon?: boolean,
    fireIcon?: boolean,
    typeId?: string,
}
function MainHeader({
    logo,
    navigator,
    headerStyle,
    title,
    rightComponent,
    searchIcon = false,
    navIcon = false,
    fireIcon = false,
    typeId,
}: Props) {
    const { textVariants, colors, } = useTheme();

    const screenState = useSelector<screenModel>('screenReducer');

    const { data: recommendations } = useQuery({
        queryKey: ["recommendationList"],
        queryFn: () => AppsApi.getHomePages(0, false).then((result) => {
            if ((result.trending_list?.length ?? 0) > 0) {
                return result.trending_list![0].vod_list;
            }

            return [];
        }),
    });

    const randomVod = useMemo(() => {
        if (recommendations && recommendations.length > 0) {
            return recommendations[Math.floor(Math.random() * recommendations.length)]
        }
    }, [recommendations])

    const onShare = async () => {
        const result = await shareApp();

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    }

    return (
        <View style={{ ...styles.container, ...headerStyle }}>
            <TouchableOpacity onPress={onShare}>
                <ShareRectIcon />
            </TouchableOpacity>

            <Text style={{
                ...textVariants.header,
                flex: 1,
                color: colors.text,
                textAlign: 'center',
            }}
            >
                {title}
            </Text>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 6,
            }}>
                {rightComponent}
                {searchIcon &&
                    <TouchableOpacity onPress={() => navigator.navigate('搜索')}>
                        <SearchIcon />
                    </TouchableOpacity>
                }
                {navIcon &&
                    <TouchableOpacity onPress={() => navigator.navigate('片库', {
                        type_id: typeId,
                    })}>
                        <NavIcon />
                    </TouchableOpacity>
                }
                {fireIcon && screenState.homeHeaderAds &&
                    <TouchableOpacity onPress={() => {
                        // navigator.navigate('Trending')
                        Linking.openURL(screenState.homeHeaderAds?.ads_url.toString() ?? '')
                            .catch((err) => console.error("Error opening external link:", err));
                    }}>
                        {/* <FireIcon /> */}
                        <CustomFastImage
                            source={{
                                uri: screenState.homeHeaderAds.ads_pic
                            }}
                            style={{
                                width: 24,
                                height: 24,
                            }}
                        />
                    </TouchableOpacity>
                }
            </View>
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