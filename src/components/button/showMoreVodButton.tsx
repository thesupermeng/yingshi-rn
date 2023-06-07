import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import MoreArrow from '../../../static/images/more_arrow.svg';
import { useTheme } from '@react-navigation/native';
interface Props {
    onPress?: () => {},
    text: string,
    params?: any[]
}
export default function ShowMoreVodButton({ text, onPress, ...params }: Props) {
    const theme = useTheme();
    return (
        <View style={styles.banner}>
            <Text style={StyleSheet.create(theme.textVariants.header)}>{text}</Text>
            <TouchableOpacity onPress={onPress} style={styles.banner}>
                <Text style={{ color: theme.colors.text, fontSize: theme.textVariants.body.fontSize }}>更多</Text>
                <MoreArrow style={{ marginLeft: 4 }}></MoreArrow>
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
        marginTop: 15,
        marginBottom: 5
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});