import { GestureResponderEvent, Pressable, ViewStyle } from 'react-native';
import { useCPressableHook } from './yys_anytime_newinterstitial';

type yys_Gestures = {
    children?: React.ReactNode,
    disabled?: boolean,
    onPress?: () => void,
    onDoublePress?: (e: GestureResponderEvent) => void,
    onLongPress?: (e: GestureResponderEvent) => void,
    style?: ViewStyle,
}

export const CPressable = ({
    children,
    disabled = false,
    onPress,
    onDoublePress,
    onLongPress,
    style,
}: yys_Gestures) => {
    const {
        onPressHandle,
    } = useCPressableHook({
        onPress,
        onDoublePress,
    });

    return (
        <Pressable
            disabled={disabled}
            onPress={onPressHandle}
            onLongPress={onLongPress}
            style={style}
            android_disableSound={true}
        >
            {children}
        </Pressable>
    );
}