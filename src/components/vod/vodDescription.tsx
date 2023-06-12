import { useTheme } from '@react-navigation/native';
import { VodType } from '../../types/ajaxTypes';
import { playVod } from '../../redux/actions/vodActions';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
    vod: VodType,
    vodStyle?: typeof StyleSheet,
}

export default function VodDescription({ vod, vodStyle }: Props) {
    const {textVariants, spacing, colors} = useTheme();
    return (
        <View gap={spacing.xs}>
            <View style={styles.des} gap={spacing.s}>
                <Text style={{...textVariants.body, color: colors.muted}}>{vod.vod_year}</Text>
                <Text style={{...textVariants.body, color: colors.muted}}>{vod.vod_class}</Text>
                <Text style={{...textVariants.body, color: colors.muted, flex: 1}} numberOfLines={1}>{vod.vod_class}</Text>
            </View>
            <View style={styles.des} gap={spacing.s}>
                <Text style={{...textVariants.body, color: colors.muted}}>主演:</Text>
                <Text style={{...textVariants.body, flex: 1, color: colors.muted}} numberOfLines={1} >{vod.vod_actor}</Text>
            </View>
            <View style={styles.des}>
                <Text numberOfLines={4} style={{...textVariants.body, flex: 1, color: colors.muted}}>{vod.vod_blurb}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    des: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});