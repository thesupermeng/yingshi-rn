import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import { useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '../../types/navigationTypes';
import { FilterOptionsResponseType, FilterOptionsTypeExtendObj, SuggestResponseType, SuggestedVodType, VodType } from '../../types/ajaxTypes';
import { playVod } from '../../redux/actions/vodActions';
import { useAppDispatch } from '../../hooks/hooks';
import { useInfiniteQuery, useQuery, useQueryClient } from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import { API_DOMAIN } from '../../constants';
import VodTopicFilter from '../../components/vod/vodTopicFilter';
import VodCard from '../../components/vod/vodCard';
import DownArrow from '../../../static/images/arrow_down_yellow.svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
} from 'react-native-reanimated';
import { FlatListProps } from 'react-native/Libraries/Lists/FlatList';
import FastImage from 'react-native-fast-image';

interface NavType {
    id: number,
    name: string
}

export default ({ navigation, route }: RootStackScreenProps<'片库'>) => {
    const { textVariants, colors, spacing, icons } = useTheme();
    const insets = useSafeAreaInsets();
    const queryClient = useQueryClient();
    const AnimatFlatList = Animated.createAnimatedComponent<FlatListProps<SuggestedVodType>>(FlatList);
    const SCROLL_THRESHOLD = 50;
    const dispatch = useAppDispatch();
    const { data: navOptions } = useQuery({
        queryKey: ["filterOptions"],
        queryFn: () => fetch(`${API_DOMAIN}type/v1/type`)
            .then(response => response.json())
            .then((json: FilterOptionsResponseType) => {
                return json.data
            }),
        initialData: []
    });
    const [currentTopicId, setCurrentTopicId] = useState(route.params.type_id === undefined ? 1 : route.params.type_id);
    const [topicClass, setTopicClass] = useState('全部类型');
    const [area, setArea] = useState('全部地区');
    const [lang, setLang] = useState('全部语言');
    const [year, setYear] = useState('全部时间');

    const windowDim = useMemo(() => (Dimensions.get('window').width - insets.left - insets.right), []);
    const paddingPerCard = 10;
    const minWidth = useMemo(() => (windowDim / 3) - paddingPerCard, [windowDim, paddingPerCard]);
    const cardWidth = useMemo(() => Math.min(150, Math.floor(minWidth)), [minWidth]);
    const cardHeight = useMemo(() => 1.6 * cardWidth, [cardWidth]);
    const lastContentOffset = useSharedValue(0);
    const isScrolling = useSharedValue(false);
    const isFilterCollapse = useSharedValue(false);
    const LIMIT_PER_PAGE = useMemo(() => Math.floor(windowDim / (cardWidth + paddingPerCard)) * 5, [cardWidth, paddingPerCard, windowDim]) // 5 Rows;
    const CARDS_PER_ROW = useMemo(() => Math.floor(windowDim / cardWidth), [cardWidth]);
    const [results, setResults] = useState<Array<SuggestedVodType>>([])

    const contentStyle = useAnimatedStyle(() => {
        return {
            display: isFilterCollapse.value ? 'none' : 'flex'
        }
    }, []);

    const contentSummaryStyle = useAnimatedStyle(() => {
        return {
            display: isFilterCollapse.value ? 'flex' : 'none',
            paddingBottom: 1
        }
    }, []);

    const reset = () => {
        setTopicClass('全部类型');
        setArea('全部地区');
        setLang('全部语言');
        setYear('全部时间');
    }

    const fetchVods = useCallback((page: number) => {
        let url = `${API_DOMAIN}vod/v1/vod?limit=${LIMIT_PER_PAGE}`;
        url += `&tid=${currentTopicId}`;
        if (topicClass !== '全部类型') {
            url += `&class=${topicClass}`;
        }
        if (area !== '全部地区') {
            url += `&area=${area}`;
        }
        if (lang !== '全部语言') {
            url += `&lang=${lang}`;
        }
        if (year !== '全部时间') {
            url += `&year=${year}`;
        }
        url += `&page=${page}`
        console.log(url)
        return fetch(url)
            .then(response => response.json())
            .then((json: SuggestResponseType) => {
                return json.data.List
            })
    }, [area, year, lang, topicClass, currentTopicId]);

    const { data: vods, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching } =
        useInfiniteQuery(['filteredVods', area, year, lang, topicClass, currentTopicId], ({ pageParam = 1 }) => fetchVods(pageParam), {
            getNextPageParam: (lastPage, allPages) => {
                if (lastPage === null) {
                    return undefined;
                }
                const nextPage =
                    lastPage.length === LIMIT_PER_PAGE ? allPages.length + 1 : undefined;
                return nextPage;
            },
            onSuccess: (data) => {
                setResults([...results, ...data.pages[data.pages.length - 1].flat()])
            }
        });

    const topicOptions: Array<NavType> = useMemo(() => navOptions.map(x => (
        {
            id: x.type_id,
            name: x.type_name
        }
    )), [navOptions]);

    const options = navOptions.find(x => x.type_id === currentTopicId);
    const underlineStyle = (option: number) => {
        if (option === currentTopicId) {
            return { backgroundColor: colors.primary, ...styles.underline };
        }
        return {};
    }

    const scrollHandler = useAnimatedScrollHandler({

        onScroll: (event) => {
            const st = event.contentOffset.y;
            if (st < lastContentOffset.value) {
                // if (isScrolling.value) {
                //     console.log("UP");
                // }
                lastContentOffset.value = event.contentOffset.y;
            } else if (st > lastContentOffset.value + SCROLL_THRESHOLD) {
                // if (isScrolling.value) {
                //     console.log("DOWN");
                // }
                if (!isFilterCollapse.value) {
                    isFilterCollapse.value = true;
                }
                lastContentOffset.value = event.contentOffset.y;
            }
        },
        onBeginDrag: (e) => {
            isScrolling.value = true;
        },
        onEndDrag: (e) => {
            isScrolling.value = false;
        },
    });
    return (
        <ScreenContainer>
            <TitleWithBackButtonHeader title='片库' headerStyle={{ marginBottom: spacing.s }} />
            <Animated.View>
                <FlatList
                    data={topicOptions}
                    horizontal
                    renderItem={({ item }: { item: NavType }) => {
                        return <TouchableOpacity style={{ ...styles.btn }} onPress={() => {
                            setCurrentTopicId(item.id);
                            reset();
                            queryClient.invalidateQueries({ queryKey: ['filteredVods'] });
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: textVariants.header.fontSize,
                                color: currentTopicId === item.id ? colors.primary : colors.muted
                            }}>{item.name}</Text>
                            <View style={underlineStyle(item.id)}></View>
                        </TouchableOpacity>
                    }}
                />
            </Animated.View>
            <Animated.View style={{ paddingBottom: spacing.s }}>
                {
                    options && <Animated.View style={contentStyle}>
                        <VodTopicFilter callback={setTopicClass} init={topicClass} options={['全部类型', ...options.type_extend_obj.class.split(',')]} />
                        <VodTopicFilter callback={setArea} init={area} options={['全部地区', ...options.type_extend_obj.area.split(',')]} />
                        <VodTopicFilter callback={setLang} init={lang} options={['全部语言', ...options.type_extend_obj.lang.split(',')]} />
                        <VodTopicFilter callback={setYear} init={year} options={['全部时间', ...options.type_extend_obj.year.split(',')]} />
                    </Animated.View>
                }
                <Animated.View containerStyle={{ marginBottom: spacing.m, backgroundColor: colors.background, padding: 0 }}>
                    {
                        options && <Animated.View style={contentSummaryStyle}>
                            <View style={{ marginTop: spacing.s, ...styles.collapedSummary, justifyContent: 'space-between' }}>
                                <View style={{ ...styles.collapedSummary }} gap={4}>
                                    <Text style={{ ...textVariants.body, color: colors.muted }}>{topicClass}</Text>
                                    <View style={{ ...styles.dot, backgroundColor: colors.primary }}></View>
                                    <Text style={{ ...textVariants.body, color: colors.muted }}>{area}</Text>
                                    <View style={{ ...styles.dot, backgroundColor: colors.primary }}></View>
                                    <Text style={{ ...textVariants.body, color: colors.muted }}>{lang}</Text>
                                    <View style={{ ...styles.dot, backgroundColor: colors.primary }}></View>
                                    <Text style={{ ...textVariants.body, color: colors.muted }}>{year}</Text>
                                </View>
                                <TouchableOpacity onPress={() => {
                                    // lastContentOffset.value = event.contentOffset.y;
                                    isFilterCollapse.value = false;
                                }}>
                                    <DownArrow height={icons.sizes.l} width={icons.sizes.l} />
                                </TouchableOpacity>
                            </View>
                        </Animated.View >
                    }
                </Animated.View>
            </Animated.View>
            {
                vods && <AnimatFlatList
                    data={results}
                    // onScroll={scrollHandler}
                    keyExtractor={(item: SuggestedVodType, index) => {
                        return `#-${item?.vod_id}-${index}`
                    }}
                    onEndReached={() => {
                        if (hasNextPage && !isFetchingNextPage && !isFetching) {
                            fetchNextPage();
                        }
                    }}
                    onEndReachedThreshold={0.2}
                    columnWrapperStyle={{}}
                    ListFooterComponent={
                        <View style={{...styles.loading, marginBottom: spacing.xl}}>
                            {
                                (isFetchingNextPage || isFetching) && <FastImage
                                    style={{ height: '15%', width: '50%' }}
                                    source={require('../../../static/images/loading-spinner.gif')}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            }
                            {
                                !(isFetchingNextPage || isFetching) && !hasNextPage &&
                                <Text style={{ ...textVariants.body, color: colors.muted, ...styles.noMore }}>没有更多了</Text>
                            }
                        </View>
                    }
                    numColumns={CARDS_PER_ROW}
                    renderItem={({ item }: { item: SuggestedVodType }) => {
                        return <VodCard vod_pic={item?.vod_pic}
                            vod_name={item?.vod_name}
                            vodImageStyle={{ width: cardWidth, height: cardHeight, marginRight: 'auto', }}
                            onPress={() => {
                                dispatch(playVod(item));
                                navigation.navigate('播放', {
                                    vod_id: item?.vod_id,
                                });
                            }}
                        />
                        // return <View style={{height: 200, width: 200, backgroundColor: 'red'}}></View>
                    }}
                />
            }

        </ScreenContainer >
    )
}

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 100,
        marginTop: 10,
    },
    btn: {
        paddingRight: 10
    },
    underline: {
        marginTop: 3,
        height: 5,
        width: '60%',
        borderRadius: 20,
        alignSelf: 'center'
    },
    listView: {
        flex: 1,
    },
    collapedSummary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    dot: {
        height: 8,
        width: 8,
        marginTop: 3,
        borderRadius: 999,
    },
    loading: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1
    }
})