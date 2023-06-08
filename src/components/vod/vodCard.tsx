import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, ScrollView, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { VodType } from '../../types/ajaxTypes';
import { useNavigation } from '@react-navigation/native';
interface Props {
    vod: VodType,
    vodStyle?: typeof StyleSheet,
}

export default function VodCard({ vod, vodStyle }: Props) {
    const theme = useTheme();
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
        style={styles.vod}
        onPress={()=>{navigation.navigate('首页', {screen: 'Play', params: vod})}}
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