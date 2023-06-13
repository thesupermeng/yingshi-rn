import { StyleSheet, TouchableOpacity, Text, ScrollView, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { VodType } from '../../types/ajaxTypes';
import { useAppDispatch } from '../../hooks/hooks';
import { playVod } from '../../redux/actions/vodActions';
interface Props {
    vod: VodType,
    vodStyle?: typeof StyleSheet,
    onPress?: any,
}

export default function VodImageCard({ vod, vodStyle, onPress }: Props) {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const onCardPress = () => {
        dispatch(playVod(vod));
        onPress();
    }
    return (
        <TouchableOpacity
            style={styles.vod}
            onPress={onCardPress}
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
        borderRadius: 20
    }
});