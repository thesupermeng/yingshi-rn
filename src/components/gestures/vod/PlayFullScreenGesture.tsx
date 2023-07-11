import React, { useEffect, useState, useRef } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import VolumeGestureControl from './VolumeGestureControl';
import BrightnessGestureControl from './BrightnessGestureControl';
import BrightnessVolumeSlider from './BrightnessVolumeSlider';

const GestureControls = {
    VOLUME: 'Volume',
    BRIGHTNESS: 'Brightness',
};

const Icons = {
    [GestureControls.BRIGHTNESS]: {
        noValue: "Moon",
        hasValue: "Sun"
    },
    [GestureControls.VOLUME]: {
        noValue: "MutedVolume",
        hasValue: "Volume"
    },
}

type Props = {
    onScreenTouched: () => any,
    disableFullScreenGesture: boolean
}

export default ({ onScreenTouched, disableFullScreenGesture }: Props) => {
    const [icon, setIcon] = useState({
        noValue: "MutedVolume",
        hasValue: "Volume"
    })
    const [showSlider, setShowSlider] = useState(false)
    const [value, setValue] = useState(0)
    const sliderTimeout = useRef(0)

    const onPropertyChanged = (gestureType: string, value: number) => {
        setIcon(Icons[gestureType]);
        setValue(parseFloat(value.toFixed(2)));
        setShowSlider(true);

        clearTimeout(sliderTimeout.current);
        sliderTimeout.current = setTimeout(() => {
            setShowSlider(false);
        }, 1000);
    }

    const handleScreenTouch = () => {
        onScreenTouched();
    }

    return (
        <View style={!disableFullScreenGesture ? styles.container : { zIndex: -10 }}>
            <BrightnessGestureControl
                onChangeBrightness={(value: number) => {
                    onPropertyChanged(GestureControls.BRIGHTNESS, value)
                }}
                onTouchScreen={handleScreenTouch}
            />
            <VolumeGestureControl
                onChangeVolume={(value: number) => {
                    onPropertyChanged(GestureControls.VOLUME, value)
                }} 
                onTouchScreen={handleScreenTouch}
            />
            {showSlider && (
                <BrightnessVolumeSlider
                    percent={100 * value}
                    icon={
                        value === 0 ? icon.noValue : icon.hasValue
                    }
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        zIndex: 20
    }
});