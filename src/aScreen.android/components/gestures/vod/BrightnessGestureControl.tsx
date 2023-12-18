import React, { useEffect, useState } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import PanHandler from './PanHandler';
import SystemSetting from 'react-native-system-setting';

type Props = {
    onChangeBrightness: (params: any) => any,
    onTouchScreen: () => any
}

// const steps = 10;
const steps = 1

export default ({ onChangeBrightness, onTouchScreen }: Props) => {

    const [startY, setStartY] = useState(0)
    const [endY, setEndY] = useState(0)

    const onScreenTouched = () => {
        onTouchScreen();
    }

    const onBrightnessChanged = async (val: number) => {
        const currVolume = await SystemSetting.getAppBrightness();
        val = val > 0 ? currVolume + 1 / steps : currVolume - 1 / steps;
        val = Math.min(1, Math.max(0, val));

        // onChangeBrightness(val);
        onChangeBrightness(parseFloat(val.toFixed(2)));

        SystemSetting.setAppBrightness(val);
        return;
    }

    return (
        <PanHandler step={1} onTouch={onScreenTouched} onChange={onBrightnessChanged} />
    )
}

const styles = StyleSheet.create({

});