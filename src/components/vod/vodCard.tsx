import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, ScrollView, Image, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { VodType } from '../../types/ajaxTypes';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../hooks/hooks';
import { playVod } from '../../redux/actions/vodActions';
import VodImageCard from './vodImageCard';
import LoadingImage from '../../../static/images/loading_img.svg';
interface Props {
    vod_name?: string,
    vod_pic?: string,
    vodImageStyle?: typeof StyleSheet,
    onPress?: any,
}

export default function VodCard({ vod_name, vod_pic, vodImageStyle, onPress }: Props) {
    const { colors, textVariants } = useTheme();
    return (
        <View>
            {
                vod_name === undefined || vod_pic === undefined
                    ? <View style={{ height: 200, backgroundColor: colors.loading, ...styles.loadingCard,  ...vodImageStyle, }}>
                        <LoadingImage />
                    </View>
                    : <View style={{ height: 'auto', ...styles.card, ...vodImageStyle, }}>
                        <VodImageCard vod_img={vod_pic} vodStyle={vodImageStyle} onPress={onPress} />
                        <Text style={{ ...styles.text, ...textVariants.body, height: textVariants.body.fontSize * 3 }} numberOfLines={2}>{vod_name}</Text>
                    </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexShrink: 1,
        width: 150,
        marginRight: 20
    },
    loadingCard: {
        width: 150,
        marginRight: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
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