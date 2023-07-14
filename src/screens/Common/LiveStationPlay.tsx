import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image } from 'react-native';
import Video from 'react-native-video';
import FavoriteButton from '../../components/button/favoriteVodButton';
import FavoriteIcon from '../../../static/images/favorite.svg'
import VodCard from '../../components/vod/vodCard';
import ScreenContainer from '../../components/container/screenContainer';
import { useTheme, useFocusEffect } from '@react-navigation/native';

import { RootStackScreenProps } from '../../types/navigationTypes';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import Orientation from 'react-native-orientation-locker';

import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import VodEpisodeSelectionModal from '../../components/modal/vodEpisodeSelectionModal';
import FastImage from 'react-native-fast-image';
import { useQuery } from '@tanstack/react-query';
import ShowMoreVodButton from '../../components/button/showMoreVodButton';
import VodLiveStationListVertical from '../../components/vod/vodLiveStationListVertical';
import VodPlayer from '../../components/videoPlayer/vodPlayer';
import BottomSheet from '@gorhom/bottom-sheet';

type PlayContextValue = {
    value: string;
    updateValue: (newValue: string) => void;
};

const definedValue = (val: any) => {
    if (val === undefined || val === null) {
        return '';
    }
    return val + ' ';
}

export default ({ navigation, route }: RootStackScreenProps<'电视台播放'>) => {
    // console.log('电视台播放');
    // console.log(route);
    const { liveStationItemList, liveStationItem } = route.params;
    const insets = useSafeAreaInsets();

    const { colors, spacing, textVariants, icons } = useTheme();
    const dispatch = useAppDispatch();

    const [dismountPlayer, setDismountPlayer] = useState(false);

    const outerRowPadding = 0;
    const minNumPerRow = 2;
    const heightToWidthRatio = 0.7;

    const windowDim = Dimensions.get('window').width - insets.left - insets.right - outerRowPadding - (2 * spacing.sideOffset); // usable space
    const minWidth = windowDim / minNumPerRow - 8;
    const cardWidth = Math.min(210, Math.floor(minWidth));
    const cardHeight = heightToWidthRatio * cardWidth;
    const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);
    const BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

    useFocusEffect(
        useCallback(() => {
            return () => {
                setDismountPlayer(true);
                Orientation.unlockAllOrientations();
            };
        }, [])
    );
    return (
        <ScreenContainer containerStyle={{ flex: 1, paddingRight: 0, paddingLeft: 0 }}>
            {
                liveStationItem !== undefined && !dismountPlayer &&
                <VodPlayer vod_url={liveStationItem.live_station_url}
                    vodTitle={liveStationItem.live_station_name}
                    videoType={'live'}
                />
            }
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={{ marginTop: spacing.m }}
                contentInsetAdjustmentBehavior="automatic">

                <View style={{ ...styles.descriptionContainer, gap: spacing.m }}>
                    <View style={{ flexDirection: 'row', width: '100%', height: 100, margin: 5 }}>
                        <View style={{ flex: 4 }}>
                            <FastImage
                                source={{ uri: liveStationItem.live_station_img_url }}
                                resizeMode={'cover'}
                                style={{ ...styles.descriptionImage, ...styles.imageContainer }}
                            />
                        </View>
                        <View style={{ flex: 7, paddingLeft: 10, paddingTop: 10 }}>
                            <Text numberOfLines={1} style={{
                                ...textVariants.header,
                                color: colors.text,
                                flex: 1
                            }}>
                                {liveStationItem.live_station_name}
                            </Text>
                        </View>
                    </View>
                    <Text numberOfLines={1} style={{
                        ...textVariants.header,
                        color: colors.text,
                        flex: 1
                    }}>
                        相关电视台
                    </Text>
                    <VodLiveStationListVertical itemList={liveStationItemList} />
                </View>
            </ScrollView>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    descriptionContainer: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    liveStationCardListContainer: {
        display: 'flex',
        flex: 3,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    videoHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 50,
    },
    videoDescription: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginBottom: 10
    },
    imageContainer: {
    },
    descriptionImage: {
        width: '100%',
        aspectRatio: 130 / 75,
        borderRadius: 10,
        resizeMode: 'cover'
    },
    // descriptionContainer: {
    //     flex: 5,
    //     flexDirection: 'column',
    //     justifyContent: 'space-evenly',
    //     paddingLeft: 10
    // },
    descriptionContainerText: {
        fontSize: 17
    },
    descriptionContainer2: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    descriptionContainer2Text: {
        color: '#9C9C9C',
        fontSize: 14
    },
    share: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    spaceApart: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    episodeBtn: {
        borderRadius: 8,
    },
    episodeList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    }
});
