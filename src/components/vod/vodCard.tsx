import { StyleSheet, TouchableOpacity, Text, ScrollView, Image, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import VodImageCard from './vodImageCard';
import LoadingImage from '../../../static/images/loading_img.svg';
interface Props {
    vod_name?: string,
    vod_pic?: string,
    vodImageStyle?: typeof StyleSheet,
    onPress?: any,
    showPlayIcon?: boolean
    showInfo?: string
    shadowBottom?: boolean
}

export default function VodCard({ vod_name, vod_pic, vodImageStyle, onPress, showInfo, showPlayIcon = false, shadowBottom = false }: Props) {
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
                    }}>
                        <VodImageCard vod_img={vod_pic} shadowBottom={shadowBottom} vodStyle={{ ...styles.card, ...vodImageStyle }} onPress={onPress} showPlayIcon={showPlayIcon} showInfo={showInfo} />
                        <Text style={{ ...styles.text, ...textVariants.small, height: textVariants.body.fontSize * 2.5 }} numberOfLines={2}>{vod_name}</Text>
                    </View>
            }
        </View>
    );
}

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
        flex: 1,
        flexWrap: 'wrap',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 4,
    }
});