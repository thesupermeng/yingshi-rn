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
    onPauseVideo: (params: any) => any
}

export default ({ onPauseVideo }: Props) => {
    const [icon, setIcon] = useState({
        noValue: "MutedVolume",
        hasValue: "Volume"
    })
    const [showSlider, setShowSlider] = useState(false)
    const [value, setValue] = useState(0)
    const sliderTimeout = useRef(0)

    useEffect(() => {
        console.log('PlayFullScreenGesture USEEFFECT');
    }, [])

    const onPropertyChanged = (gestureType: string, value: number) => {
        setIcon(Icons[gestureType]);
        setValue(value);
        setShowSlider(true);

        clearTimeout(sliderTimeout.current);
        sliderTimeout.current = setTimeout(() => {
            setShowSlider(false);
        }, 3000);
    }

    const pauseVideo = (val: boolean) => {
        onPauseVideo(val);
    }

    return (
        <View style={{ flexDirection: 'row', flex: 1, zIndex: 20, height: '100%' }}>
            <BrightnessGestureControl
                onChangeBrightness={(value: number) => {
                    onPropertyChanged(GestureControls.BRIGHTNESS, value)
                }}
                onPauseVideo={pauseVideo}
            />
            <VolumeGestureControl
                onChangeVolume={(value: number) => {
                    onPropertyChanged(GestureControls.VOLUME, value)
                }} 
                onPauseVideo={pauseVideo}
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

});