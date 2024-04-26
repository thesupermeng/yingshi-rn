import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ScrollView, Image, View, ViewStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';
import VodImageCard from './wawa_bggradient';
import LoadingImage from '@static/images/homeloadingCatalog.svg';
import { memo } from 'react';
import { ImageStyle } from 'react-native-fast-image';
interface wawaAwayShow {
    vod_name?: string,
    vod_pic?: string,
    vodImageStyle?: ImageStyle,
    vodCardContainerStyle?: ViewStyle,
    onPress?: any,
    showPlayIcon?: boolean
    showInfo?: string
    shadowBottom?: boolean
    index? : number
    vod_pic_list?: string[]
}

function VodCard({ vod_name, vod_pic, vodImageStyle = {}, onPress, showInfo, showPlayIcon = false, shadowBottom = false, vodCardContainerStyle={}, index, vod_pic_list }: wawaAwayShow) {
    const { colors, textVariants, spacing } = useTheme();
    return (
        <View style={{ marginRight: vodImageStyle?.marginRight !== undefined ? vodImageStyle.marginRight : spacing.m }}>
            {
                vod_name == undefined || vod_pic === undefined
                    ? <View style={{ height: vodImageStyle?.height !== undefined ? vodImageStyle.height : 200, backgroundColor: colors.loading, ...styles.loadingCard, ...vodImageStyle, }}>
                        <LoadingImage />
                    </View>
                    : <View style={{
                        width: vodImageStyle?.width !== undefined ? vodImageStyle.width : styles.card.width, 
                        marginBottom : 14, 
                        ...vodCardContainerStyle
                    }}>
                        <VodImageCard vod_img={vod_pic} shadowBottom={shadowBottom} vodStyle={{ ...styles.card, ...vodImageStyle }} onPress={onPress} showPlayIcon={showPlayIcon} showInfo={showInfo} index={index} vod_pic_list={vod_pic_list} />
                        <Text style={{
                            ...styles.text,
                            ...textVariants.small,
                        }} numberOfLines={2}>{vod_name}</Text>
                    </View>
            }
        </View>
    );
}

export default memo(VodCard);

const styles = StyleSheet.create({
    card: {
        flexShrink: 1,
        width: 150,
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
        flexShrink: 1,
        flexWrap: 'wrap',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 4,
    }
});