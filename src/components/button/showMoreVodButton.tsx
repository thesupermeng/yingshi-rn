import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import MoreArrow from '../../../static/images/more_arrow.svg';
import { useTheme } from '@react-navigation/native';
interface Props {
    onPress?: any,
    text: string,
    params?: any[]
}
export default function ShowMoreVodButton({ text, onPress, ...params }: Props) {
    const { colors, textVariants, icons } = useTheme();
    return (
        <View style={styles.banner}>
            <Text style={StyleSheet.create(textVariants.header)}>{text}</Text>
            <TouchableOpacity onPress={onPress} style={styles.banner}>
                <Text style={{ color: colors.muted, fontSize: textVariants.small.fontSize }}>更多</Text>
                <MoreArrow style={{ color: colors.muted }} height={icons.sizes.m} width={icons.sizes.m} ></MoreArrow>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    banner: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 5
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});