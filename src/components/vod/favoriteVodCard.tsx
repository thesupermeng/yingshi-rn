import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import BackIcon from '../../../static/images/back_arrow.svg';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { VodType } from '../../types/ajaxTypes';
import VodImageCard from './vodImageCard';
import FavoriteButton from '../button/favoriteVodButton';
import VodDescription from './vodDescription';

interface Props {
    vod: VodType,
    onPress?: any,
    params?: any[],
    btnStyle?: typeof StyleSheet
    hideFavoriteButton?: boolean
}
export default function FavoriteVodCard({ vod, onPress, btnStyle, hideFavoriteButton = false, ...params }: Props) {
    const { colors, spacing, textVariants } = useTheme();
    return (
        <View style={styles.card} gap={spacing.s}>
            <VodImageCard vod={vod} vodStyle={styles.image} onPress={onPress} />
            <View style={styles.description} gap={spacing.xs}>
                {
                    hideFavoriteButton
                        ? <Text numberOfLines={1} style={{
                            ...textVariants.header,
                            color: colors.text,
                            flex: 1
                        }}>
                            {vod.vod_name}
                        </Text>
                        : <FavoriteButton vod={vod} />
                }
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