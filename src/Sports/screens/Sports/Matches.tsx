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
    const { data: navOptions } = useQuery({
        queryKey: ["matchesNavOptions"],
        queryFn: () => Api.call(Url.sportTypes, {}, 'GET').then((res): NavType[] => {
            return res.data;
        }),
    })

    const matchTabs = useMemo(() => navOptions?.map(x => (
        {
            id: x.ids[0],
            title: x.type,
            name: x.type,
        }
    )), [navOptions])

    return (
        <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
            <View style={{ backgroundColor: colors.background, paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
                <Text style={{ ...textVariants.bigHeader, color: colors.text, fontSize: 22 }}>体育</Text>
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