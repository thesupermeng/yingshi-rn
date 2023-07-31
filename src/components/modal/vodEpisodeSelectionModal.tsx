import React, { useState, useMemo, RefObject, memo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { VodEpisodeListType, VodEpisodeType } from '../../types/ajaxTypes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomSheet, { BottomSheetBackdrop, BottomSheetFlatList, BottomSheetModalProvider, BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import SortAscIcon from '../../../static/images/sortAsc.svg';
import SortDescIcon from '../../../static/images/sortDesc.svg';
interface Props {
    onConfirm: any,
    onCancel: any,
    episodes?: VodEpisodeListType
    activeEpisode?: number,
    sheetRef?: RefObject<BottomSheetMethods>;
    rangeSize?: number
}
function VodEpisodeSelectionModal({ onConfirm, onCancel, sheetRef, episodes, activeEpisode = 0, rangeSize = 50 }: Props) {
    const { colors, textVariants, spacing } = useTheme();
    const EPISODE_RANGE_SIZE = rangeSize;
    const [sortBy, setSortBy] = useState('asc');
    const ranges = [...Array(episodes?.url_count === undefined ? 0 : Math.ceil(episodes.url_count / EPISODE_RANGE_SIZE)).keys()]
        .map(
            x => `${x * EPISODE_RANGE_SIZE + 1}-${Math.min((x + 1) * EPISODE_RANGE_SIZE, episodes?.url_count === undefined ? (x + 1) * EPISODE_RANGE_SIZE - 1 : episodes?.url_count)
                }`
        );
    const [currentIndex, setCurrentIndex] = useState(Math.floor(activeEpisode / EPISODE_RANGE_SIZE));
    const showEpisodeRangeStart = useMemo(() => currentIndex * EPISODE_RANGE_SIZE, [activeEpisode, currentIndex]);
    const showEpisodeRangeEnd = useMemo(
        () => Math.min(showEpisodeRangeStart + EPISODE_RANGE_SIZE,
            episodes ? episodes.url_count : showEpisodeRangeStart + EPISODE_RANGE_SIZE),
        [episodes, showEpisodeRangeStart]
    );
    const displayEpisodes = useMemo(() => {
        const eps = episodes?.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd);
        if (sortBy === 'desc') {
            eps?.reverse();
        }   
        return eps
    }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy])

    const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

    const renderBackdrop = useCallback(
        (props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => <BottomSheetBackdrop {...props} />,
        []);

    const handleSheetChanges = useCallback((index: number) => {
        if (index === 0 && sheetRef?.current) {
            sheetRef?.current.close();
        }
    }, [sheetRef]);

    const sort = () => {
        if (sortBy === 'asc') {
            setSortBy('desc');
        } else {
            setSortBy('asc');
        }
    }

    return (
        <BottomSheet
            ref={sheetRef}
            index={-1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            backdropComponent={renderBackdrop}
            backgroundStyle={{
                backgroundColor: colors.card,
            }}
            handleIndicatorStyle={{
                backgroundColor: colors.text,
            }}
        >
            <View
                style={{
                    ...styles.container,
                    backgroundColor: colors.card,
                    paddingLeft: spacing.sideOffset,
                    paddingRight: spacing.sideOffset,
                    gap: spacing.m
                }}
            >
                <View style={styles.episodeList}>
                    <FlatList
                        horizontal
                        data={ranges}
                        renderItem={({ item, index }: { item: string, index: number }) => {
                            return <TouchableOpacity style={styles.btn} onPress={() => setCurrentIndex(index)}>
                                <Text
                                    style={{
                                        textAlign: 'center', ...textVariants.header,
                                        color: index === currentIndex ? colors.text : colors.muted,
                                        fontSize: index === currentIndex ? 18 : 15
                                    }}>
                                    {`${item}集`}
                                </Text>
                            </TouchableOpacity>
                        }}
                    />
                    <TouchableOpacity style={styles.sortBtn} onPress={sort}>
                        <View style={{ paddingTop: 4 }}>
                            {
                                sortBy === 'asc'
                                    ? <SortAscIcon />
                                    : <SortDescIcon />
                            }
                        </View>
                        <Text
                            style={{
                                textAlign: 'center', ...textVariants.header,
                                color: colors.muted,
                                fontSize: 15
                            }}>
                            顺序
                        </Text>
                    </TouchableOpacity>
                </View>
                <BottomSheetScrollView contentContainerStyle={styles.episodeList}>
                    {
                        displayEpisodes?.map((ep, idx) =>
                        <TouchableOpacity key={`expand-${idx}`} onPress={() => {
                            onConfirm(ep.nid);
                            onCancel();
                        }} style={{ paddingRight: spacing.s }}>
                            <View style={{
                                backgroundColor: ep.nid === activeEpisode ? colors.primary : colors.search,
                                padding: spacing.s,
                                minWidth: 70,
                                marginRight: 'auto',
                                marginBottom: spacing.s,
                                borderRadius: 8
                            }} >
                                <Text numberOfLines={1}
                                    style={{
                                        fontSize: 13,
                                        textAlign: 'center',
                                        fontWeight: '500',
                                        color: ep.nid === activeEpisode ? colors.selected : colors.muted,
                                    }}>
                                    {`${ep.name}`}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                </BottomSheetScrollView>
            </View>
        </BottomSheet>
    );
};

export default memo(VodEpisodeSelectionModal);

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 1
        // paddingBottom: 10,
        // paddingTop: 30,
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    btn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    episodeList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // alignItems: 'flex-start',
        paddingLeft: 10
    },
    sortBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});