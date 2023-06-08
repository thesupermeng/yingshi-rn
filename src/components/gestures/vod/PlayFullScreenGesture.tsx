import React, { useEffect, useState } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import VolumeGestureControl from './VolumeGestureControl';
import BrightnessGestureControl from './BrightnessGestureControl';

export const GestureControls = {
    VOLUME: 'Volume',
    BRIGHTNESS: 'Brightness',
};

export default () => {

    useEffect(() => {
        console.log('PlayFullScreenGesture USEEFFECT');
    }, [])

    const onVolumeChanged = () => {
        console.log('PLAYFULLSCREENGESTURE - VOLUME');
    }

    const onBrightnessChanged = () => {
        console.log('PLAYFULLSCREENGESTURE - BRIGHTNESS');
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            <BrightnessGestureControl onChangeBrightness={onBrightnessChanged} />
            <VolumeGestureControl onChangeVolume={onVolumeChanged} />
        </View>
    )
}

const styles = StyleSheet.create({

});