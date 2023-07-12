import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import ScreenContainer from '../../../components/container/screenContainer';
import MainHeader from '../../../components/header/homeHeader';
import { useTheme } from '@react-navigation/native';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { VodPlaylistResponseType, VodTopicType } from '../../../types/ajaxTypes';
import VodPlaylist from '../../../components/playlist/vodPlaylist';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { API_DOMAIN, MATCH_API_DOMAIN } from '../../../utility/constants';
import Animated from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';
// import { API } from './util';
import Api from '../../middleware/api';
import { Url } from '../../middleware/url';
import { formatMatchDate } from '../../utility/utils';

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
    const BTN_COLORS = ['#30AA55', '#7E9CEE', '#F1377A', '#FFCC12', '#ED7445'];
    const [navId, setNavId] = useState(0);
    const width = Dimensions.get('window').width;
    const onEndReachedCalledDuringMomentum = useRef(true);
    const navRef = useRef<any>();
    const contentRef = useRef<any>();

    const { data: navOptions } = useQuery({
        queryKey: ["matchesNavOptions"],
        queryFn: () => Api.call(Url.sportTypes, {}, 'GET').then(res => {
            // console.log(res.data[0])
            return res.data;
        }),
    });

    const { data: matches } = useQuery({
        queryKey: ["matches"],
        queryFn: () => Api.call(Url.matches + `?sports_type=1`, {}, 'GET').then(res => {
            if (res?.data != undefined) {
                const dates = Object.keys(res.data);
                const matches = dates.map(date => ({ date: formatMatchDate(date), data: res.data[date] }))
                return matches;
            }
        }
        ),
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

    const Content = useCallback(({ item, index }: { item: any, index: number }) => {
        return <View style={{ width: width, backgroundColor: BTN_COLORS[index % BTN_COLORS.length], height: '100%' }}>

        </View>
    }, [])

    const onScrollEnd = useCallback((e: any) => {
        if (!onEndReachedCalledDuringMomentum.current) {
            const pageNumber = Math.min(Math.max(Math.floor(e.nativeEvent.contentOffset.x / width + 0.5), 0), navOptions.length);
            if (pageNumber !== navId) {
                setNavId(pageNumber);
                navRef?.current?.scrollToIndex({
                    index: pageNumber,
                    viewOffset: 24
                });
            }
            onEndReachedCalledDuringMomentum.current = true;
        }
    }, [navOptions, width, onEndReachedCalledDuringMomentum, navRef, navId])

    return (
        <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
            <View style={{ backgroundColor: colors.background, paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
                <MainHeader logo={
                    <Text style={{ ...textVariants.bigHeader, color: colors.text, fontSize: 22 }}>体育</Text>
                } navigator={navigation} />
                <FlatList
                    data={navOptions ? navOptions : []}
                    horizontal
                    ref={navRef}
                    contentContainerStyle={styles.nav}
                    renderItem={({ item, index }: { item: NavType, index: number }) => {
                        return (
                            <TouchableOpacity style={{ marginRight: spacing.m, justifyContent: 'center', display: 'flex' }} onPress={() => {
                                if (navOptions.length > 0) {
                                    setNavId(index)
                                    contentRef?.current?.scrollToIndex({
                                        index: index,
                                    });
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
            <FlatList
                ref={contentRef}
                data={navOptions}
                pagingEnabled={true}
                horizontal={true}
                windowSize={3}
                maxToRenderPerBatch={2}
                initialNumToRender={1}
                nestedScrollEnabled={true}
                getItemLayout={(data, index) => (
                    { length: width, offset: width * index, index }
                )}
                onMomentumScrollBegin={() => {
                    onEndReachedCalledDuringMomentum.current = false;
                }}
                onMomentumScrollEnd={onScrollEnd}
                renderItem={Content}
            />
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