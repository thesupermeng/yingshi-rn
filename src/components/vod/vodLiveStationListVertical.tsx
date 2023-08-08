import React, { useCallback, useEffect, useMemo, memo } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import { useNavigation, useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '../../types/navigationTypes';
import { FilterOptionsResponseType, FilterOptionsTypeExtendObj, SuggestResponseType, SuggestedVodType, VodType } from '../../types/ajaxTypes';
import { playVod } from '../../redux/actions/vodActions';
import { useAppDispatch } from '../../hooks/hooks';
import { useInfiniteQuery, useQuery, useQueryClient } from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
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
import { LiveTVStationItem } from '../../types/ajaxTypes';

interface Props {
    itemList: Array<LiveTVStationItem>,
    itemsPerRow?: number,
    numOfRows?: number,
}

export default function VodLiveStationListVertical({ itemList, itemsPerRow = 2, numOfRows = 4 }: Props) {
    const { textVariants, colors, spacing, icons } = useTheme();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    let items = itemList.slice(0, itemsPerRow * numOfRows);
    
    const renderItems = () => {
        const rows = [];
        for (let i = 0; i < items.length; i += itemsPerRow) {
            const rowItems = items.slice(i, i + itemsPerRow);
            const row = (
                <View key={i} style={{...styles.cardRow, flex: itemsPerRow}}>
                    {rowItems.map((item) => (
                        <View
                        key={item.id}
                        style={{ paddingLeft: 5, paddingRight: 5, paddingBottom: 10 }}>
                            <TouchableOpacity
                                style={{...styles.cardItem}}
                                onPress={() => {
                                    navigation.navigate('电视台播放', { liveStationItemList: itemList, liveStationItem: item });
                                }}>
                                <View key={item.id} style={styles.cardItem}>
                                    <FastImage
                                        style={{ flex: 1, aspectRatio: 130 / 80, borderRadius: 10 }}
                                        source={{
                                            uri: item.live_station_img_url,
                                            priority: FastImage.priority.normal,
                                        }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            );
            rows.push(row);
        }
        return rows;
    };

    return <View style={styles.container}>{renderItems()}</View>;
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItem: 'center',
        paddingBottom: 20

    },
    cardRow: {
        flexDirection: 'row',
    },
    cardItem: {
        height: 100,
        aspectRatio: 130 / 80,
    }
})