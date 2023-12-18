import React, { useState, useMemo, RefObject, memo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { VodEpisodeListType, VodEpisodeType } from '@type/ajaxTypes';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import SortAscIcon from '@static/images/sortAsc.svg';
import SortDescIcon from '@static/images/sortDesc.svg';
interface Props {
    onConfirm: any,
    onCancel: any,
    episodes?: VodEpisodeListType
    activeEpisode?: number,
    rangeSize?: number
}
function VodEpisodeSelection({ onConfirm, onCancel, episodes, activeEpisode = 0, rangeSize = 50 }: Props) {
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

    const sort = () => {
        if (sortBy === 'asc') {
            setSortBy('desc');
        } else {
            setSortBy('asc');
        }
    }

    return (
        <View
            style={{
                ...styles.container,
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
                {/* <TouchableOpacity style={styles.sortBtn} onPress={sort}>
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
                </TouchableOpacity> */}
            </View>
            <ScrollView contentContainerStyle={styles.episodeList}>
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
            </ScrollView>
        </View>
    );
};

export default memo(VodEpisodeSelection);

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
    sortBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});