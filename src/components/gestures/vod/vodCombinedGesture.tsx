import React, { useState, useRef, ReactNode, useMemo, useCallback } from 'react';
import { View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS, useSharedValue } from 'react-native-reanimated';
import SystemSetting from 'react-native-system-setting';
import BrightnessVolumeSlider from './BrightnessVolumeSlider';
import { debounce } from 'lodash';
type Props = {
    vodType: string,
    children?: ReactNode,
    enabled?: boolean,
    onSkipForward: () => any,
    onSkipBackwards: () => any,
    onSingleTap: (forceClose: boolean) => any,
    currentTime: number,
    totalDuration: number,
    onSeek: (x: number) => any,
    disableControlsExceptTap?: boolean
}

type SettingsType = {
    name: 'progress' | 'brightness' | 'volume' | 'none'
    value: number,
}
export default ({ vodType, children, enabled = true, onSkipBackwards, onSkipForward, onSingleTap, currentTime = 0, totalDuration = 0.1, onSeek, disableControlsExceptTap = false }: Props) => {
    const panCooldown = useSharedValue(3);

    const previousPanPosition = useSharedValue({ x: 0, y: 0, gesture: 'none' });
    const brightShare = useSharedValue(0.0);
    const volumeShare = useSharedValue(0.0);
    const [settings, setSettings] = useState<SettingsType>({ name: 'none', value: 0 });
    const [showSlider, setShowSlider] = useState(false);

    const isDoubleTap = useSharedValue(false);

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

    const setBrightVolumeShare = async () => {
        brightShare.value = await SystemSetting.getAppBrightness();
        volumeShare.value = await SystemSetting.getVolume();
    }

    const onBrightnessChanged = (newVal: number, prevVal: number) => {
        showControls();
        let different = ((prevVal - newVal) / height) * 2.5; // set 2.5 magnification
        let newVol = different + brightShare.value;

        if ((0 > newVol && brightShare.value === 0) || (1 < newVol && brightShare.value === 1)) return;

        if (0 >= newVol && brightShare.value !== 0) {
            newVol = 0;
        } else if (1 <= newVol && brightShare.value !== 1) {
            newVol = 1;
        }

        brightShare.value = newVol;
        setSettings({ name: 'brightness', value: newVol });
        SystemSetting.setAppBrightness(newVol);
    }

    const onVolumeChanged = (newVal: number, prevVal: number) => {
        showControls();
        let different = ((prevVal - newVal) / height) * 2.5; // set 2.5 magnification
        let newVol = different + volumeShare.value;

        if ((0 > newVol && volumeShare.value === 0) || (1 < newVol && volumeShare.value === 1)) return;

        if (0 >= newVol && volumeShare.value !== 0) {
            newVol = 0;
        } else if (1 <= newVol && volumeShare.value !== 1) {
            newVol = 1;
        }

        volumeShare.value = newVol;
        setSettings({ name: 'volume', value: newVol });
        SystemSetting.setVolume(newVol);
    }

    const onProgressChange = (translation: number) => {
        if (translation > 0) {
            const bias = currentTime;
            const delX = width - previousPanPosition.value.x;
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
            const delX = previousPanPosition.value.x;
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
            runOnJS(setBrightVolumeShare)();
            previousPanPosition.value = { x: nativeEvent.x, y: nativeEvent.y, gesture: 'none' }
        })
        .onUpdate((nativeEvent) => {
            if (panCooldown.value > 0) {
                panCooldown.value--;
                return;
            } else panCooldown.value = 3;

            const dx = nativeEvent.x - previousPanPosition.value.x;
            const dy = nativeEvent.y - previousPanPosition.value.y;
            const dydx = dy / dx;
            const absDyDx = Math.abs(dydx);

            // vertical
            if (absDyDx > 10) {
                const leftX = Math.floor(width / 2 - 20);
                const rightX = Math.ceil(width / 2 + 20);
                if (nativeEvent.x <= leftX && (settings.name === 'none' || settings.name === 'brightness')) {
                    runOnJS(onBrightnessChanged)(nativeEvent.y, previousPanPosition.value.y)
                } else if (nativeEvent.x >= rightX && (settings.name === 'none' || settings.name === 'volume')) {
                    runOnJS(onVolumeChanged)(nativeEvent.y, previousPanPosition.value.y)
                }
            } else if (absDyDx < 0.05 && vodType !== 'live' && (settings.name === 'none' || settings.name === 'progress')) {
                runOnJS(onProgressChange)(nativeEvent.translationX);
            }

            // set previous value after action
            previousPanPosition.value = { x: nativeEvent.x, y: nativeEvent.y, gesture: 'none' }
        })
        .onEnd(() => runOnJS(resetSettings)()),
        [previousPanPosition.value, enabled, settings])

    const doubleTap = useMemo(() =>
        Gesture.Tap()
            .numberOfTaps(2)
            .enabled(enabled)
            .onStart((nativeEvent) => {
                isDoubleTap.value = true;

                const leftX = Math.floor(width / 2 - 20);
                const rightX = Math.ceil(width / 2 + 20);
                if (nativeEvent.x <= leftX) {
                    runOnJS(onSkipBackwards)();
                } else if (nativeEvent.x >= rightX) {
                    runOnJS(onSkipForward)();
                }
            })
        , [enabled]);

    // // single tap will cause lagging (hang)
    // const singleTap = Gesture.Tap()
    //     // .maxDuration(200)
    //     .numberOfTaps(1)
    //     .onStart(() => {
    //         runOnJS(onSingleTap)();
    //     })

    const singleTap = useCallback(
        debounce(() => {
            console.log('111')
            if (!isDoubleTap.value) {
                onSingleTap(isDoubleTap.value);
            }

            isDoubleTap.value = false;
        }, 200),
        [onSingleTap]
    );

    const composed = disableControlsExceptTap ? null : vodType === 'live' ? pan : Gesture.Simultaneous(pan, doubleTap);

    return (
        <TouchableWithoutFeedback onPress={singleTap}>
            <View style={{ position: 'absolute', height: '100%', width: '100%' }}>
                {composed ?
                    <GestureDetector gesture={composed}>
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
                    :
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
                }
            </View>
        </TouchableWithoutFeedback>
    )
}
