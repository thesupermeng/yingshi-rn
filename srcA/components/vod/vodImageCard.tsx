import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ImageStyle } from 'react-native-fast-image';
import FastImage from '../common/customFastImage';
import PlayIcon from '../../../static/images/play.svg';
import LinearGradient from 'react-native-linear-gradient'
interface Props {
    vod_img: string,
    vodStyle?: ImageStyle,
    onPress?: any,
    showInfo?: string
    showPlayIcon?: boolean
    shadowBottom?: boolean
    isDisabled?: boolean
    index?: number
}

export default function VodImageCard({ vod_img, vodStyle, onPress, showInfo = '', showPlayIcon = false, shadowBottom = false, isDisabled, index = -1 }: Props) {
    const { colors, textVariants, spacing } = useTheme();
    const iconSize = 0.3 * parseInt(vodStyle?.height === undefined ? '180' : `${vodStyle.height}`)
    return (
        <TouchableOpacity
            style={styles.vod}
            onPress={onPress}
            disabled={isDisabled}
        >
            <FastImage
                style={{ ...styles.image, ...vodStyle }}
                source={{
                    uri: vod_img,
                    priority: 'normal',
                }}
                useFastImage={index >= 0 && index < 3}
            />
            {
                shadowBottom && <LinearGradient
                    colors={['transparent', 'black']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1.5 }}
                    style={styles.bottomBlur}
                />
            }
            {
                showPlayIcon && <View style={styles.playIcon}>
                    <PlayIcon height={iconSize} width={iconSize} />
                </View>
            }
            {
                showInfo !== '' && <View style={{ backgroundColor: shadowBottom ? 'transparent' : 'rgba(0, 0, 0, 0.6)', ...styles.tag }}>
                    <Text style={{
                        ...textVariants.small,
                        color: 'white'
                    }} numberOfLines={1}>{showInfo}</Text>
                </View>
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 180,
        width: 120,
        borderRadius: 10
    },
    vod: {
        position: 'relative',
    },
    tag: {
        position: 'absolute',
        borderRadius: 4,
        bottom: 6,
        right: 10,
        padding: 5,
        marginLeft: 10
    },
    playIcon: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomBlur: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 45,
        flex: 1,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        opacity: 0.8
    }
});