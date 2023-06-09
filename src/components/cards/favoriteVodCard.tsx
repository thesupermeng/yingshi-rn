import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import BackIcon from '../../../static/images/back_arrow.svg';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { VodType } from '../../types/ajaxTypes';
import VodCard from '../vod/vodImageCard';
import FavoriteButton from '../button/favoriteButton';

interface Props {
    vod: VodType,
    onPress?: any,
    params?: any[],
    btnStyle?: typeof StyleSheet
}
export default function FavoriteVodCard({ vod, onPress, btnStyle, ...params }: Props) {
    const { colors } = useTheme();
    const navigation = useNavigation();
    return (
        <View style={styles.card}>
            <VodCard vod={vod} />
            <FavoriteButton text={vod.vod_name} />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row'
    }
});