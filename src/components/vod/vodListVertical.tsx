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

interface Props {
    vods: Array<VodType>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number
}

function VodListVertical({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414 }: Props) {
    const { textVariants, colors, spacing, icons } = useTheme();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const windowDim = useMemo(() => (Dimensions.get('window').width - insets.left - insets.right - outerRowPadding - (2 * spacing.sideOffset)), []); // usable space
    const minWidth = useMemo(() => (windowDim / minNumPerRow) - 8, [windowDim]);
    const cardWidth = useMemo(() => Math.min(200, Math.floor(minWidth)), [minWidth]);
    const cardHeight = useMemo(() => heightToWidthRatio * cardWidth, [cardWidth]);
    const CARDS_PER_ROW = useMemo(() => Math.floor(windowDim / cardWidth), [cardWidth]);
    const BTN_MARGIN_RIGHT = useMemo(() => {
        return (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1)
    }, [CARDS_PER_ROW, cardWidth])
    return (
        <View style={styles.vodList}>
            {
                vods && 
                vods.slice(0, numOfRows * CARDS_PER_ROW).map((vod, idx) => (
                    <VodCard
                        key={`${vod.vod_id}`}
                        vod_name={vod?.vod_name}
                        vod_pic={vod?.vod_pic}
                        showInfo={vod?.vod_remarks}
                        vodImageStyle={{
                            width: cardWidth,
                            height: cardHeight,
                            marginRight: (idx % CARDS_PER_ROW) === CARDS_PER_ROW - 1 ? 0 : BTN_MARGIN_RIGHT,
                        }}
                        onPress={() => {
                            dispatch(playVod(vod));
                            navigation.navigate('播放', {
                                vod_id: vod?.vod_id,
                            });
                        }}
                    />
                ))
            }
        </View>
    )
}

export default VodListVertical;

const styles = StyleSheet.create({
    vodList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})