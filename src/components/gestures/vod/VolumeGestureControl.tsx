import React, { useEffect, useState } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import PanHandler from './PanHandler';
import SystemSetting from 'react-native-system-setting';

type Props = {
    onChangeVolume: (params: any) => any,
    onTouchScreen: () => any
}

const steps = 10;

export default ({ onChangeVolume, onTouchScreen }: Props) => {

    const [startY, setStartY] = useState(0)
    const [endY, setEndY] = useState(0)

    const onScreenTouched = () => {
        onTouchScreen();
    }

    const onVolumeChanged = async (val: number) => {
        const currVolume = await SystemSetting.getVolume();
        val = val > 0 ? currVolume + 1 / steps : currVolume - 1 / steps;
        val = Math.min(1, Math.max(0, val));

        onChangeVolume(parseFloat(val.toFixed(2)));

        SystemSetting.setVolume(val);
        return;
    }

    return (
        <PanHandler step={10} onTouch={onScreenTouched} onChange={onVolumeChanged}/>
    )
}

const styles = StyleSheet.create({

});