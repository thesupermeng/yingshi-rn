import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import MoreArrow from '@static/images/libcxxcomponentsPrivilege.svg';
import { useTheme } from '@react-navigation/native';
interface wwIndexDice {
    onPress?: any,
    text: string,
    textColor?: string,
    params?: any[],
    leftIcon?: React.ReactNode,
    buttonStyle?: typeof StyleSheet,
    rightIcon?: React.ReactNode,
    disabled?: boolean
}
export default function ShowMoreButton({ text, onPress, leftIcon, textColor = '', buttonStyle, rightIcon, disabled = false, ...params }: wwIndexDice) {
    const { colors, textVariants, icons } = useTheme();
    return (
        <TouchableOpacity style={{ ...styles.btn, backgroundColor: colors.card2, ...buttonStyle }} onPress={onPress} {...params} disabled={disabled}>
            <View style={styles.left}>
                {
                    leftIcon && <View style={styles.icon}>{leftIcon}</View>
                }
                <Text style={{
                    ...textVariants.body,
                    color: textColor ? textColor : colors.button
                }}>
                    {text}
                </Text>
            </View>
            {
                rightIcon
                    ? rightIcon
                    : <MoreArrow width={icons.sizes.l} height={icons.sizes.l} color={colors.muted} />
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 10,
        paddingTop: 4,
        height: 24,
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