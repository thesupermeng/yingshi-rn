import React from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    runOnJS,
    useAnimatedStyle,
} from 'react-native-reanimated';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { Position, useCPanGestureHook } from './mayi_libbuffer';


export type mayi_Libmapbufferjni = {
    start?: Position,
    previous?: Position,
    current?: Position,
    different?: Position,
}

type mayi_MimoNetwork = {
    children?: React.ReactNode,
    onStart?: (context?: mayi_Libmapbufferjni) => void,
    onUpdate?: (context?: mayi_Libmapbufferjni) => void,
    onEnd?: (context?: mayi_Libmapbufferjni) => void,
    animatedStyle?: ViewStyle | ImageStyle | TextStyle,
}


export const CPanGesture = ({
    children,
    onStart,
    onUpdate,
    onEnd,
    animatedStyle,
}: mayi_MimoNetwork) => {
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
