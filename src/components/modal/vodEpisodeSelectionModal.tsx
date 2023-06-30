import React, { useState, useMemo, RefObject, useRef, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { VodEpisodeListType, VodEpisodeType } from '../../types/ajaxTypes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomSheet, { BottomSheetBackdrop, BottomSheetFlatList, BottomSheetModalProvider, BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';

interface Props {
    onConfirm: any,
    onCancel: any,
    episodes?: VodEpisodeListType
    activeEpisode?: number,
    sheetRef?: RefObject<BottomSheetMethods>;
}
export default function VodEpisodeSelectionModal({ onConfirm, onCancel, sheetRef, episodes, activeEpisode = 0 }: Props) {
    const { colors, textVariants, spacing } = useTheme();
    const EPISODE_RANGE_SIZE = 100;
    const insets = useSafeAreaInsets();
    const ranges = [...Array(episodes?.url_count === undefined ? 0 : Math.ceil(episodes.url_count / EPISODE_RANGE_SIZE)).keys()]
        .map(
            x => `${x * EPISODE_RANGE_SIZE + 1}-${Math.min((x + 1) * EPISODE_RANGE_SIZE, episodes?.url_count === undefined ? (x + 1) * EPISODE_RANGE_SIZE - 1 : episodes?.url_count)
                }`
        );
    const windowDim = useMemo(() => (Dimensions.get('window').width - insets.left - insets.right - (spacing.sideOffset * 3)), [insets]);
    const [currentIndex, setCurrentIndex] = useState(Math.floor(activeEpisode / EPISODE_RANGE_SIZE));
    const showEpisodeRangeStart = useMemo(() => currentIndex * EPISODE_RANGE_SIZE, [activeEpisode, currentIndex]);
    const showEpisodeRangeEnd = useMemo(
        () => Math.min(showEpisodeRangeStart + EPISODE_RANGE_SIZE,
            episodes ? episodes.url_count : showEpisodeRangeStart + EPISODE_RANGE_SIZE),
        [episodes, showEpisodeRangeStart]
    );
    const BTN_SELECT_WIDTH = useMemo(() => {
        if (episodes === undefined || episodes === null) {
            return spacing.m;
        }
        let maxTitleLength = episodes.urls.reduce(function (prev, current) {
            return (prev.name.length > current.name.length) ? prev : current
        }).name.length * textVariants.header.fontSize * 0.9;
        maxTitleLength += (2 * spacing.s) // Padding
        return maxTitleLength
    }, [episodes]);

    const NUM_PER_ROW = useMemo(() => Math.max(Math.floor(windowDim / (BTN_SELECT_WIDTH + 10)), 1), [windowDim, BTN_SELECT_WIDTH]);
    const BTN_MARGIN_RIGHT = useMemo(() => {
        return Math.floor((windowDim - (NUM_PER_ROW * BTN_SELECT_WIDTH)) / (NUM_PER_ROW - 1))
    }, [NUM_PER_ROW, BTN_SELECT_WIDTH, windowDim])

    const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

    const renderBackdrop = useCallback(
        (props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => <BottomSheetBackdrop {...props} />,
        []);

    const handleSheetChanges = useCallback((index: number) => {
        if (index === 0 && sheetRef?.current) {
            sheetRef?.current.close();
        }
    }, [sheetRef]);

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
            <View gap={spacing.m}
                style={{
                    ...styles.container,
                    backgroundColor: colors.card,
                    paddingLeft: spacing.sideOffset,
                    paddingRight: spacing.sideOffset
                }}
            >
                <View>
                    <FlatList
                        horizontal
                        data={ranges}
                        inverted
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
                </View>
                <BottomSheetScrollView contentContainerStyle={styles.episodeList}>
                    {episodes?.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd)
                        .map((ep, idx) =>
                            <TouchableOpacity key={`expand-${idx}`} style={{
                                backgroundColor: ep.nid === activeEpisode ? colors.primary : colors.search,
                                padding: spacing.s,
                                width: BTN_SELECT_WIDTH,
                                marginBottom: spacing.s,
                                marginRight: (idx % NUM_PER_ROW) === NUM_PER_ROW - 1 ? 0 : BTN_MARGIN_RIGHT,
                                borderRadius: 8
                            }} onPress={() => {
                                onConfirm(ep.nid);
                                onCancel();
                            }}>
                                <Text style={{
                                    ...textVariants.header, textAlign: 'center',
                                    color: ep.nid === activeEpisode ? colors.selected : colors.muted,
                                }}>{`${ep.name}`}</Text>
                            </TouchableOpacity>
                        )}
                </BottomSheetScrollView>
            </View>
        </BottomSheet>
    );
};
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
        alignItems: 'flex-start',
        paddingLeft: 10
    }
});