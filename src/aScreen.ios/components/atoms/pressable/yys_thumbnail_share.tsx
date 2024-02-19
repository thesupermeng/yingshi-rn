import { GestureResponderEvent, Pressable, ViewStyle } from 'react-native';
import { useCPressableHook } from './yys_components_twitter';

type yysIconviewerCornershoot = {
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
}: yysIconviewerCornershoot) => {
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