import { useTheme } from "@react-navigation/native";
import { Platform, Text, TouchableOpacity, View, ViewStyle } from "react-native"
import { DownArrowSvg } from '@static';


type yysIconarrowrightorangeStation = {
    text?: number,
    style?: ViewStyle,
    onPress?: () => void,
}

export const UnreadCard = ({
    text = 0,
    style,
    onPress,
}: yysIconarrowrightorangeStation) => {
    const { colors } = useTheme();

    return <TouchableOpacity
        onPress={onPress}
        style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            ...style,
        }}
    >
        <Text
            style={{
                fontSize: 18,
                color: colors.primary,
                marginRight: 10,
                marginTop: Platform.OS === 'android' ? -4 : 0,
            }}
        >
            {text.toFixed(0)} 条新消息
        </Text>

        <DownArrowSvg width={14} height={14} />
    </TouchableOpacity>
}
