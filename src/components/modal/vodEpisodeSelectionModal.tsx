import React, { useState, useMemo } from 'react';
import { BottomSheet } from '@rneui/themed';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { VodEpisodeListType, VodEpisodeType } from '../../types/ajaxTypes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


interface Props {
    onConfirm: any,
    onCancel: any,
    isVisible: boolean
    episodes?: VodEpisodeListType
    activeEpisode?: number
}
export default function VodEpisodeSelectionModal({ onConfirm, onCancel, isVisible, episodes, activeEpisode = 0 }: Props) {
    const { colors, textVariants, spacing } = useTheme();
    const EPISODE_RANGE_SIZE = 100;
    const insets = useSafeAreaInsets();
    const ranges = [...Array(episodes?.url_count === undefined ? 0 : Math.ceil(episodes.url_count / EPISODE_RANGE_SIZE)).keys()]
        .map(
            x => `${x * EPISODE_RANGE_SIZE + 1}-${Math.min((x + 1) * EPISODE_RANGE_SIZE, episodes?.url_count === undefined ? (x + 1) * EPISODE_RANGE_SIZE - 1 : episodes?.url_count)
                }`
        );
    const windowDim = useMemo(() => (Dimensions.get('window').width - insets.left - insets.right), [insets]);
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
        console.log('MAX TITLE LENGTH', maxTitleLength)
        return maxTitleLength
    }, [episodes]);

    const NUM_PER_ROW = useMemo(() => Math.max(Math.floor(windowDim / (BTN_SELECT_WIDTH + 10)), 1), [windowDim, BTN_SELECT_WIDTH]);
    const BTN_MARGIN_RIGHT = useMemo(() => {
        return (windowDim - (NUM_PER_ROW * BTN_SELECT_WIDTH) - 20) / NUM_PER_ROW
    }, [NUM_PER_ROW, BTN_SELECT_WIDTH, windowDim])

    // const [displayEpisodes, setDisplayEpisodes] 
    return (
        <BottomSheet
            isVisible={isVisible}
            onBackdropPress={onCancel}
        // scrollViewProps={{ ...styles.episodeList }}
        // containerStyle={{backgroundColor: 'red'}}
        >
            <View style={{ ...styles.container, backgroundColor: colors.card }} gap={spacing.m}>
                <View>
                    <FlatList
                        horizontal
                        data={ranges}
                        initialScrollIndex={currentIndex}
                        renderItem={({ item, index }: { item: string, index: number }) => {
                            return <TouchableOpacity style={styles.btn} onPress={() => setCurrentIndex(index)}>
                                <Text style={{ textAlign: 'center', ...textVariants.header, color: index === currentIndex ? colors.text : colors.muted }}>
                                    {`${item}集`}
                                </Text>
                            </TouchableOpacity>
                        }}
                    />
                </View>
                <View style={styles.episodeList}>
                    {episodes?.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd)
                        .map((ep, idx) =>
                            <TouchableOpacity key={`expand-${idx}`} style={{
                                backgroundColor: ep.nid === activeEpisode ? colors.primary : colors.search,
                                padding: spacing.s,
                                width: BTN_SELECT_WIDTH,
                                marginBottom: spacing.s,
                                marginRight: BTN_MARGIN_RIGHT,
                                borderRadius: 8
                            }} onPress={() => {
                                onConfirm(ep.nid);
                                onCancel();
                            }}>
                                <Text style={{ ...textVariants.header, textAlign: 'center'}}>{`${ep.name}`}</Text>
                            </TouchableOpacity>
                        )}
                </View>
            </View>
        </BottomSheet>
    );
};
const styles = StyleSheet.create({
    container: {
        minHeight: 300,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingBottom: 10,
        paddingTop: 30,
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