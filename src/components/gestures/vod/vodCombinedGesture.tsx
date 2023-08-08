import React, { useEffect, useState, useRef, ReactNode, useMemo, useCallback } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, ViewStyle, Settings } from 'react-native';
import { Gesture, GestureDetector, PanGestureHandler } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';
import SystemSetting from 'react-native-system-setting';
import BrightnessVolumeSlider from './BrightnessVolumeSlider';
type Props = {
    vodType: string,
    children: ReactNode,
    enabled?: boolean,
    onSkipForward: () => any,
    onSkipBackwards: () => any,
    onSingleTap: () => any,
    currentTime: number,
    totalDuration: number,
    onSeek: (x: number) => any
}

type SettingsType = {
    name: 'progress' | 'brightness' | 'volume' | 'none'
    value: number,
}
export default ({ vodType, children, enabled = true, onSkipBackwards, onSkipForward, onSingleTap, currentTime = 0, totalDuration = 0.1, onSeek }: Props) => {

    const [start, setStart] = useState({ x: 0, y: 0, gesture: 'none' });
    const [settings, setSettings] = useState<SettingsType>({ name: 'none', value: 0 });
    const [showSlider, setShowSlider] = useState(false);

    const sliderTimeout = useRef(0);
    const height = Dimensions.get('window').height
    const width = Dimensions.get('window').width

    const showControls = () => {
        setShowSlider(true);
        clearTimeout(sliderTimeout.current);
        sliderTimeout.current = setTimeout(() => {
            setShowSlider(false);
        }, 1500);
    }

    const onBrightnessChanged = async (val: number) => {
        showControls();
        const curr = await SystemSetting.getAppBrightness();
        let newBrightness = (start.y - val) / height + curr
        newBrightness = Math.min(1, Math.max(0, newBrightness));
        setSettings({ name: 'brightness', value: newBrightness })
        SystemSetting.setAppBrightness(newBrightness);
    }

    const onVolumeChanged = async (val: number) => {
        showControls();
        const curr = await SystemSetting.getVolume();
        let newVol = (start.y - val) / height + curr
        newVol = Math.min(1, Math.max(0, newVol));
        setSettings({ name: 'volume', value: newVol })
        SystemSetting.setVolume(newVol);
    }

    const onProgressChange = (translation: number) => {
        if (translation > 0) {
            const bias = currentTime;
            const delX = width - start.x;
            const delY = totalDuration;
            // Linear 
            // const runtime = currentTime + (translation/delX) * delY
            // Quadratic -- y = ((delY - bias) / delX^2) * translation^2 + bias
            // Integrate y = kx
            const runtime = ((delY - bias) / Math.pow(delX, 2)) * Math.pow(translation, 2) + bias;
            setSettings({ name: 'progress', value: runtime })
            onSeek(runtime);
        } else {
            const bias = currentTime;
            const delX = start.x;
            // Quadratic function -- y = -(bias / delX^2) * translation^2 + bias
            const runtime = (-bias / Math.pow(delX, 2)) * Math.pow(translation, 2) + bias;
            runOnJS(onSeek)(runtime);
        }
    }

    const resetSettings = () => {
        setSettings(({ name: 'none', value: 0 }));
    }

    const pan = useMemo(() => Gesture.Pan()
        .enabled(enabled)
        .onStart((nativeEvent) => {
            runOnJS(setStart)({ x: nativeEvent.x, y: nativeEvent.y, gesture: 'none' })
        })
        .onUpdate((nativeEvent) => {
            const dx = nativeEvent.velocityX;
            const dy = nativeEvent.velocityY;
            const dydx = dy / dx;
            const absDyDx = Math.abs(dydx);
            // vertical
            if (absDyDx > 10) {
                const leftX = Math.floor(width / 2 - 20);
                const rightX = Math.ceil(width / 2 + 20);
                if (nativeEvent.x <= leftX && (settings.name === 'none' || settings.name === 'brightness')) {
                    runOnJS(onBrightnessChanged)(nativeEvent.y)
                } else if (nativeEvent.x >= rightX && (settings.name === 'none' || settings.name === 'volume')) {
                    runOnJS(onVolumeChanged)(nativeEvent.y)
                }
            } else if (absDyDx < 0.05 && vodType !== 'live' && (settings.name === 'none' || settings.name === 'progress')) {
                runOnJS(onProgressChange)(nativeEvent.translationX);
            }
        })
        .onEnd(() => runOnJS(resetSettings)()),
        [start, enabled, settings])

    const doubleTap = useMemo(() =>
        Gesture.Tap()
            .numberOfTaps(2)
            .enabled(enabled)
            .onStart((nativeEvent) => {
                const leftX = Math.floor(width / 2 - 20);
                const rightX = Math.ceil(width / 2 + 20);
                if (nativeEvent.x <= leftX) {
                    runOnJS(onSkipBackwards)();
                } else if (nativeEvent.x >= rightX) {
                    runOnJS(onSkipForward)();
                }
            })
        , [start, enabled]);

    const singleTap = Gesture.Tap()
        .maxDuration(200)
        .onStart(() => {
            runOnJS(onSingleTap)();
        })


    const taps = vodType === 'live' ? singleTap : Gesture.Exclusive(doubleTap, singleTap)
    const composed = Gesture.Simultaneous(pan, taps)

    return (
        <GestureDetector gesture={composed} >
            <View style={{ flex: 1 }}>
                {children}
                {
                    showSlider && settings.name === 'brightness' &&
                    <BrightnessVolumeSlider percent={settings.value * 100}
                        icon={settings.value === 0 ? 'Moon' : 'Sun'} />
                }
                {
                    showSlider && settings.name === 'volume' &&
                    <BrightnessVolumeSlider percent={settings.value * 100}
                        icon={settings.value === 0 ? 'MutedVolume' : 'Volume'} />
                }
            </View>
        </GestureDetector>
    )
}

const styles = StyleSheet.create({
    panView: {
        flex: 1,
        width: '100%',
        height: '100%'
    }
});