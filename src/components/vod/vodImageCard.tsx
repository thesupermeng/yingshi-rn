import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
interface Props {
    vod_img: string,
    vodStyle?: typeof StyleSheet,
    onPress: any,
}

export default function VodImageCard({ vod_img, vodStyle, onPress }: Props) {
    const theme = useTheme();
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
        borderRadius: 20
    }
});