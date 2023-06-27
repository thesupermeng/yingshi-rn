import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import PlayIcon from '../../../static/images/play.svg';
import LinearGradient from 'react-native-linear-gradient'
interface Props {
    vod_img: string,
    vodStyle?: typeof StyleSheet,
    onPress: any,
    showInfo?: string
    showPlayIcon?: boolean
    shadowBottom?: boolean
}

export default function VodImageCard({ vod_img, vodStyle, onPress, showInfo = '', showPlayIcon = false, shadowBottom = false }: Props) {
    const { colors, textVariants, spacing } = useTheme();
    const iconSize = vodStyle?.height !== undefined ? 0.3 * vodStyle.height : 0.3 * styles.image.height
    return (
        <TouchableOpacity
            style={styles.vod}
            onPress={onPress}
        >
            <FastImage
                style={{ ...styles.image, ...vodStyle }}
                source={{
                    uri: vod_img,
                    priority: FastImage.priority.normal,
                }}
            />
            {
                shadowBottom && <LinearGradient
                    colors={['transparent', 'black']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 0.6 }}
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
        height: 200,
        width: 150,
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