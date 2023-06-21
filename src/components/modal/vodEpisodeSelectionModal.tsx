import React, { useState, useMemo } from 'react';
import { BottomSheet } from '@rneui/themed';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { VodEpisodeListType, VodEpisodeType } from '../../types/ajaxTypes';


interface Props {
    onConfirm: any,
    onCancel: any,
    isVisible: boolean
    episodes?: VodEpisodeListType
    activeEpisode?: number
}
export default function VodEpisodeSelectionModal({ onConfirm, onCancel, isVisible, episodes, activeEpisode = 0 }: Props) {
    const { colors, textVariants, spacing } = useTheme();
    const ranges = [...Array(episodes?.url_count === undefined ? 0 : Math.ceil(episodes.url_count / 100)).keys()]
        .map(
            x => `${x * 100}-${Math.min((x + 1) * 100 - 1, episodes?.url_count === undefined ? (x + 1) * 100 - 1 : episodes?.url_count)
                }`
        );
    const EPISODE_RANGE_SIZE = 100;
    const showEpisodeRangeStart = useMemo(() => Math.floor(activeEpisode / EPISODE_RANGE_SIZE) * EPISODE_RANGE_SIZE, [activeEpisode]);
    const showEpisodeRangeEnd = useMemo(
        () => Math.min(showEpisodeRangeStart + EPISODE_RANGE_SIZE,
            episodes ? episodes.url_count : showEpisodeRangeStart + EPISODE_RANGE_SIZE),
        [episodes, showEpisodeRangeStart]
    );

    return (
        <BottomSheet
            isVisible={isVisible}
            onBackdropPress={onCancel}
            containerStyle={{ padding: spacing.m }}
        >
            {
                <View style={{ ...styles.container, backgroundColor: colors.card }}>
                    <FlatList
                        horizontal
                        data={ranges}
                        renderItem={({ item }: { item: string }) => {
                            return <TouchableOpacity>
                                <Text style={textVariants.header}>{`${item}集`}</Text>
                            </TouchableOpacity>
                        }}
                    />
                    <FlatList
                        data={episodes?.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd)}
                        renderItem={({ item }: { item: VodEpisodeType }) => {
                            return <Text style={textVariants.header}>{`${item.name}`}</Text>
                        }}
                    />
                </View>
            }
        </BottomSheet>
    );
};
const styles = StyleSheet.create({
    container: {
        minHeight: 300,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    btns: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        flex: 1
    }
});