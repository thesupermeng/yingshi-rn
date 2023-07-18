import React, { useCallback, useMemo, useRef, useState } from 'react';
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
import { MatchDetailsType } from '../../types/matchTypes';
import MatchSchedule from '../../components/matchSchedule/MatchSchedule';
import MatchScheduleNav from '../../components/matchSchedule/MatchScheduleNav';



interface NavType {
    has_submenu: boolean,
    ids: Array<number>,
    type: string
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
    const { textVariants, colors, spacing } = useTheme();
    const LIMIT_PER_PAGE = 10;
    const BTN_COLORS = ['#30AA55', '#7E9CEE', '#F1377A', '#FFCC12', '#ED7445'];
    const [navId, setNavId] = useState({ index: 0, apiIndex: 0 });

    const onEndReachedCalledDuringMomentum = useRef(true);
    const navRef = useRef<any>();
    const contentRef = useRef<any>();

    const { data: navOptions } = useQuery({
        queryKey: ["matchesNavOptions"],
        queryFn: () => Api.call(Url.sportTypes, {}, 'GET').then((res): NavType[] => {
            setNavId({ index: 0, apiIndex: res.data[0].ids[0] })
            console.log(res.data[0])
            return res.data;
        }),
    });

    // const { data: matches } = useQuery({
    //     queryKey: ["matches", navId],
    //     queryFn: () => Api.call(Url.matches + `?sports_type=${navId.apiIndex}`, {}, 'GET').then(res => {
    //         const data = res?.data;
    //         if (data != undefined) {
    //             const dates = Object.keys(data);
    //             console.log(data[dates[0]])
    //             const matches: { date: string, data: MatchDetailsType[] }[] = dates.map(date => ({ date: formatMatchDate(date), data: res.data[date] }))
    //             return matches;
    //         }
    //     }
    //     ),
    // });

    const matchTabs = useMemo(() => navOptions?.map(x => (
        {
            id: x.ids[0],
            title: x.type,
            name: x.type,
        }
    )), [navOptions])



    // const onScrollEnd = useCallback((e: any) => {
    //     if (!onEndReachedCalledDuringMomentum.current) {
    //         const pageNumber = Math.min(Math.max(Math.floor(e.nativeEvent.contentOffset.x / width + 0.5), 0), navOptions.length);
    //         if (pageNumber !== navId.index) {
    //             console.log({ index: pageNumber, apiIndex: navId.apiIndex })
    //             setNavId({ index: pageNumber, apiIndex: navOptions[pageNumber].ids[0] });
    //             navRef?.current?.scrollToIndex({
    //                 index: pageNumber,
    //                 viewOffset: 24
    //             });
    //         }
    //         onEndReachedCalledDuringMomentum.current = true;
    //     }
    // }, [navOptions, width, onEndReachedCalledDuringMomentum, navRef, navId])

    return (
        <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
            <View style={{ backgroundColor: colors.background, paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
                <MainHeader logo={
                    <Text style={{ ...textVariants.bigHeader, color: colors.text, fontSize: 22 }}>体育</Text>
                } navigator={navigation} />
                {/* <FlatList
                    data={navOptions ? navOptions : []}
                    horizontal
                    ref={navRef}
                    contentContainerStyle={styles.nav}
                    renderItem={({ item, index }: { item: NavType, index: number }) => {
                        return (
                            <TouchableOpacity style={{ marginRight: spacing.m, justifyContent: 'center', display: 'flex' }} onPress={() => {
                                if (navOptions && navOptions?.length > 0) {
                                    setNavId({ index: index, apiIndex: item.ids[0] })
                                    contentRef?.current?.scrollToIndex({
                                        index: index,
                                    });
                                }
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: navId.index === index ? textVariants.selected.fontSize : textVariants.unselected.fontSize,
                                    fontWeight: navId.index === index ? textVariants.selected.fontWeight : textVariants.unselected.fontWeight,
                                    color: navId.index === index ? colors.primary : colors.muted,
                                }}>{item.type}</Text>
                            </TouchableOpacity>

                        )
                    }}
                /> */}
            </View>
            {matchTabs && matchTabs.length > 0 && (
                <MatchScheduleNav
                    tabList={matchTabs}
                />
            )}
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