import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import MoreArrow from '../../../static/images/more_arrow.svg';
import { useTheme } from '@react-navigation/native';
interface Props {
    onPress?: any,
    text: string,
    textColor?: string,
    params?: any[],
    leftIcon?: React.SVGAttributes<SVGElement>,
    buttonStyle?: typeof StyleSheet
}
export default function ShowMoreButton({ text, onPress, leftIcon, textColor = '', buttonStyle, ...params }: Props) {
    const { colors, textVariants, icons } = useTheme();
    return (
        <TouchableOpacity style={{ ...styles.btn, backgroundColor: colors.card2, ...buttonStyle }} onPress={onPress} {...params} >
            <View style={styles.left}>
                <View style={styles.icon}>{leftIcon}</View>
                <Text style={{
                    ...StyleSheet.create(textVariants.header),
                    color: textColor ? textColor : colors.button
                }}>
                    {text}
                </Text>
            </View>
            <MoreArrow width={icons.sizes.xl} height={icons.sizes.xl} color={colors.muted} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 10,
        paddingTop: 4,
        height: 30,
        width: 24
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 15,
        width: '100%',
        borderRadius: 10,
        marginTop: 20,
    }
});