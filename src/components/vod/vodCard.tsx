import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, ScrollView, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { VodType } from '../../types/ajaxTypes';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../hooks';
import { playVod } from '../../redux/actions/vodActions';
interface Props {
    vod: VodType,
    vodStyle?: typeof StyleSheet,
}

export default function VodCard({ vod, vodStyle }: Props) {
    const theme = useTheme();
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    return (
        <TouchableOpacity
            style={styles.vod}
            onPress={() => {
                dispatch(playVod(vod));
                navigation.navigate('首页', {
                    screen: '播放',
                    params: { vod_id: vod.vod_id },
                })
            }}
        >
            <Image source={{ uri: vod.vod_pic }} style={{ ...styles.image, ...vodStyle }} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 200,
        width: 150,
        borderRadius: 20,
        marginRight: 20
    }
});