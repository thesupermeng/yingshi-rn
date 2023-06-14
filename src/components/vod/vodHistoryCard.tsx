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
                <Text numberOfLines={2} style={{...textVariants.header, ...styles.text}}>{vod.vod_name}</Text>
                <Text style={{...textVariants.body, ...styles.text}}>{`观看至 ${new Date(vod.timeWatched * 1000).toISOString().substring(11, 16)}`}</Text>
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
        paddingBottom: 8,
        display: 'flex',
        justifyContent: 'space-between',
        flexShrink: 1
    },
    image: {
        width: 165,
        height: 110
    },
    text: {
        flexShrink: 1
    }
});