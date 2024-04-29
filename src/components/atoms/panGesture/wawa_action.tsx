import React from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    runOnJS,
    useAnimatedStyle,
} from 'react-native-reanimated';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { Position, useCPanGestureHook } from './wawa_homeactive';


export type wawaMbsplashImagemanager = {
    start?: Position,
    previous?: Position,
    current?: Position,
    different?: Position,
}

type wawaNetwork = {
    children?: React.ReactNode,
    onStart?: (context?: wawaMbsplashImagemanager) => void,
    onUpdate?: (context?: wawaMbsplashImagemanager) => void,
    onEnd?: (context?: wawaMbsplashImagemanager) => void,
    animatedStyle?: ViewStyle | ImageStyle | TextStyle,
}


export const CPanGesture = ({
    children,
    onStart,
    onUpdate,
    onEnd,
    animatedStyle,
}: wawaNetwork) => {
    const {
        startPosition,
        previousPosition,
        currentPosition,
        differentPosition,
    } = useCPanGestureHook();

    const _animatedStyle = useAnimatedStyle(() => ({
        ...animatedStyle,
    }));

    const panGesture = Gesture.Pan()
        .onStart((event) => {
            startPosition.value = {
                x: event.x,
                y: event.y,
            };
            previousPosition.value = {
                x: event.x,
                y: event.y,
            };
            currentPosition.value = undefined;
            differentPosition.value = undefined;

            if (onStart) runOnJS(onStart)({
                start: startPosition.value,
                previous: previousPosition.value,
                current: currentPosition.value,
                different: differentPosition.value,
            });
        })
        .onUpdate((event) => {
            if (currentPosition.value) {
                previousPosition.value = {
                    x: currentPosition.value.x,
                    y: currentPosition.value.y,
                }
            }

            currentPosition.value = {
                x: event.x,
                y: event.y,
            };
            differentPosition.value = {
                x: currentPosition.value.x - previousPosition.value!.x,
                y: currentPosition.value.y - previousPosition.value!.y,
            };

            if (onUpdate) runOnJS(onUpdate)({
                start: startPosition.value,
                previous: previousPosition.value,
                current: currentPosition.value,
                different: differentPosition.value,
            });
        })
        .onEnd((event) => {
            if (onEnd) runOnJS(onEnd)({
                start: startPosition.value,
                previous: previousPosition.value,
                current: currentPosition.value,
                different: differentPosition.value,
            });
        });

    return (
        <GestureDetector gesture={panGesture}>
            <Animated.View style={_animatedStyle}>
                {children}
            </Animated.View>
        </GestureDetector>
    );
};