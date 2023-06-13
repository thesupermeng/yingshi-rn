import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, ScrollView, Image, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { VodType } from '../../types/ajaxTypes';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../hooks/hooks';
import { playVod } from '../../redux/actions/vodActions';
import VodImageCard from './vodImageCard';

interface Props {
    vod: VodType,
    vodImageStyle?: typeof StyleSheet,
    onPress?: any,
}

export default function VodCard({ vod, vodImageStyle, onPress }: Props) {
    const {colors, textVariants} = useTheme();
    return (
        <View style={{...styles.card, ...vodImageStyle, height: 'auto' }}>
            <VodImageCard vod={vod} vodStyle={vodImageStyle} onPress={onPress}/>
            <Text style={{...styles.text, ...textVariants.body, height: textVariants.body.fontSize * 3}} numberOfLines={2}>{vod.vod_name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexShrink: 1,
        width: 150,
        marginRight: 20
    }, 
    text: {
        flex: 1,
        flexWrap: 'wrap',
        flexShrink: 1,
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 4,
    }
});