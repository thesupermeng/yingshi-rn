import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import BackIcon from '../../../static/images/back_arrow.svg';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { VodType } from '../../types/ajaxTypes';
import VodCard from './vodImageCard';
import FavoriteButton from '../button/favoriteButton';
import VodDescription from './vodDescription';

interface Props {
    vod: VodType,
    onPress?: any,
    params?: any[],
    btnStyle?: typeof StyleSheet
}
export default function FavoriteVodCard({ vod, onPress, btnStyle, ...params }: Props) {
    const { colors, spacing } = useTheme();
    return (
        <View style={styles.card} gap={spacing.s}>
            <VodCard vod={vod} vodStyle={styles.image}/>
            <View style={styles.description} gap={spacing.xs}>
                <FavoriteButton vod={vod} />
                <VodDescription vod={vod} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    description: {
        flexGrow: 1,
        paddingTop: 8,
        paddingBottom: 8
    },
    image: {
        width: 128
    }
});