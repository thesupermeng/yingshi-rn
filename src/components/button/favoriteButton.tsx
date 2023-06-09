import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import FavoriteIcon from '../../../static/images/favorite.svg';
import { useTheme } from '@react-navigation/native';
interface Props {
    onPress?: any,
    text: string,
    textColor?: string,
    params?: any[],
    leftIcon?: React.SVGAttributes<SVGElement>,
    buttonStyle?: typeof StyleSheet
}
export default function FavoriteButton({ text, onPress, leftIcon, textColor = '', buttonStyle, ...params }: Props) {
    const { colors, textVariants } = useTheme();
    return (
        <View style={styles.btn}>
            <View style={styles.title}>
                <Text style={{
                    ...StyleSheet.create(textVariants.header),
                    color: textColor ? textColor : colors.text
                }}>
                    {text}
                </Text>
            </View>
            <FavoriteIcon width={24} height={24} color='yellow' />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        wordBreak: 'break-all',
        flexShrink: 1,
        marginRight: 4
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 1,
        flexGrow: 1
    }
});