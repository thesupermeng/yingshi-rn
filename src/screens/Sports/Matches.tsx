import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import MainHeader from '../../components/header/homeHeader';
import { useTheme } from '@react-navigation/native';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { VodPlaylistResponseType, VodTopicType } from '../../types/ajaxTypes';
import VodPlaylist from '../../components/playlist/vodPlaylist';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { API_DOMAIN, MATCH_API_DOMAIN } from '../../constants';
import Animated from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';
// import { API } from './util';
import Api from '../../middleware/api';
import { Url } from './url';

type FlatListType = {
    item: VodTopicType,
    index: number
}

interface NavType {
    has_submenu: boolean,
    ids: Array<number>,
    type: string
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
    const { textVariants, colors, spacing } = useTheme();
    const LIMIT_PER_PAGE = 10;
    const [navId, setNavId] = useState(0);
    // const [results, setResults] = useState<Array<VodTopicType>>([])
    const { data: navOptions } = useQuery({
        queryKey: ["matchesNavOptions"],
        queryFn: () => Api.call(Url.sportTypes, {}, 'GET').then(res => {
            console.log(res.data[0])
            return res.data;
        }),
    });

    const fetchPlaylist = (page: number) => fetch(`${API_DOMAIN}topic/v1/topic?page=${page}`)
        .then(response => response.json())
        .then((json: VodPlaylistResponseType) => {
            return Object.values(json.data.List)
        })

    const { data: playlists, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching } =
        useInfiniteQuery(['vodPlaylist'], ({ pageParam = 1 }) => fetchPlaylist(pageParam), {
            getNextPageParam: (lastPage, allPages) => {
                if (lastPage === null) {
                    return undefined;
                }
                const nextPage =
                    lastPage.length === LIMIT_PER_PAGE ? allPages.length + 1 : undefined;
                return nextPage;
            },
            // onSuccess: (data) => {
            //     if (data && data?.pages) {
            //         setResults([...results, ...data.pages[data.pages.length - 1].flat()])
            //     }
            // }
        });

    const renderItem = ({ item }: FlatListType) => (
        <VodPlaylist playlist={item}
            titleStyle={{ color: colors.text }} />
    )

    return (
        <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
            <View style={{ backgroundColor: colors.background, paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
                <MainHeader logo={
                    <Text style={{ ...textVariants.bigHeader, color: colors.text, fontSize: 22 }}>体育</Text>
                } navigator={navigation} />
                <FlatList
                    data={navOptions ? navOptions : []}
                    horizontal
                    // ref={navRef}
                    contentContainerStyle={styles.nav}
                    renderItem={({ item, index }: { item: NavType, index: number }) => {
                        return (
                            <TouchableOpacity style={{ marginRight: spacing.m, justifyContent: 'center', display: 'flex' }} onPress={() => {
                                if (navOptions.length > 0) {
                                    setNavId(index)
                                    // ref?.current?.scrollToIndex({
                                    //     index: index,
                                    // });
                                }
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: navId === index ? textVariants.selected.fontSize : textVariants.unselected.fontSize,
                                    fontWeight: navId === index ? textVariants.selected.fontWeight : textVariants.unselected.fontWeight,
                                    color: navId === index ? colors.primary : colors.muted,
                                }}>{item.type}</Text>
                            </TouchableOpacity>

                        )
                    }}
                />
            </View>


            {/* <Animated.FlatList
                data={playlists?.pages.flat()}
                onEndReached={() => {
                    if (hasNextPage) {
                        fetchNextPage();
                    }
                }}
                onEndReachedThreshold={0.3}
                windowSize={5}
                maxToRenderPerBatch={5}
                renderItem={renderItem}
                ListFooterComponent={
                    <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                        {
                            hasNextPage && <FastImage
                                style={{ height: 80, width: 80 }}
                                source={require('../../../static/images/loading-spinner.gif')}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        }
                        {
                            !(isFetchingNextPage || isFetching) && !hasNextPage &&
                            <Text style={{ ...textVariants.body, color: colors.muted }}>没有更多了</Text>
                        }
                    </View>
                }
            /> */}
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingLeft: 20,
        paddingRight: 20
    },
    loading: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1
    },
    nav: {
        flexGrow: 1,
        justifyContent: 'center',
        marginBottom: 10,
    },
});