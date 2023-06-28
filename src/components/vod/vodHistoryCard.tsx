import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import VodImageCard from './vodImageCard';
import { VodRecordType } from '../../redux/reducers/vodReducer';

interface Props {
    vod: VodRecordType,
    onPress: any,
    params?: any[],
    btnStyle?: typeof StyleSheet,
}
export default function VodHistoryCard({ vod, onPress, btnStyle, ...params }: Props) {
    const { colors, spacing, textVariants } = useTheme();
    return (
        <View style={styles.card} gap={spacing.s}>
            <VodImageCard vod_img={vod.vod_pic} vodStyle={styles.image} onPress={onPress} />
            <View style={styles.description} gap={spacing.xs}>
                <Text numberOfLines={2} style={{...textVariants.body, ...styles.text}}>{vod.vod_name}</Text>
                <Text style={{...textVariants.small, ...styles.text}}>{`观看至 ${new Date(1000 * vod.timeWatched).toISOString().substr(11, 8)}`}</Text>
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
        flexShrink: 1
    },
    description: {
        flexGrow: 1,
        paddingTop: 2,
        paddingBottom: 2,
        display: 'flex',
        justifyContent: 'space-between',
        flexShrink: 1
    },
    image: {
        width: 154,
        height: 87
    },
    text: {
        flexShrink: 1
    }
});