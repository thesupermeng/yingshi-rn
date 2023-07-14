import React, { Component, useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native';
import ScreenContainer from '../../../components/container/screenContainer';
import MainHeader from '../../../components/header/homeHeader';
import { useTheme } from '@react-navigation/native';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { DetailTab } from '../../../types/ajaxTypes';
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
import MatchDetailsNav from '../../components/matchDetails/MatchDetailsNav';
import MatchSchedule from '../../components/matchSchedule/MatchSchedule';
import LineUpPage from '../../components/matchDetails/LineUpPage';
import LiveStatPage from '../../components/matchDetails/LiveStatPage';
import TeamDataPage from '../../components/matchDetails/TeamDataPage';
import { BackWhite, InOutTargetGreen } from '../../assets';

type FlatListType = {
    item: MatchDetailsType,
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
    const [navId, setNavId] = useState({ index: 0, apiIndex: 0 });
    const width = Dimensions.get('window').width;
    const onEndReachedCalledDuringMomentum = useRef(true);
    const navRef = useRef<any>();
    const contentRef = useRef<any>();

    const [tabList, setTabList] = useState(Array<DetailTab>);

    useEffect(() => {
        setTabList([
            {
                name: 'Live',
                title: '直播',
                page: LiveStatPage
            },
            {
                name: 'Formation',
                title: '阵容',
                page: LineUpPage
            },
            {
                name: 'TeamData',
                title: '数据',
                page: TeamDataPage
            }
        ])
    }, [])

    const onHandleBack = () => {
        navigation.navigate('体育');
    }

    return (
        <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <View style={{ height: 250 }}>
                    <View style={styles.topBannerCotainer}>
                        <TouchableOpacity
                            style={styles.backButtonTouch}
                            onPress={() => onHandleBack()}>
                            <Image
                            resizeMode="contain"
                            style={styles.backButtonIcon}
                            source={BackWhite}></Image>
                        </TouchableOpacity>

                        {/* <View style={styles.alignCenterTopBannerContainer}>
                            <Text style={styles.middleTitleName}>{competitionNameShort}</Text>
                            <Text style={styles.middleTitleName}>{` |  `}</Text>
                            <Text style={styles.middleTitleName}>{tempDateTime}</Text>
                        </View> */}
                        
                    </View>
                </View>
                {tabList.length > 0 && (
                    <MatchDetailsNav
                    streamId={10001}
                    tabList={tabList}
                    // initialTab={
                    //     {
                    //     0: tabList[tabList.length - 1].name,
                    //     1: tabList[0].name,
                    //     '-2': tabList[tabList.length - 1].name,
                    //     }tabList[1].name
                    // }
                    />
                )}
            </View>
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
    backButtonIcon: {
        height: 18,
        width: 16,
    },
    backButtonTouch: {
        height: 60,
        width: 66,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        position: 'absolute',
        zIndex: 2,
    },
    topBannerCotainer: {
        height: '30%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
});