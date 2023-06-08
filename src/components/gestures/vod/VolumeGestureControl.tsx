import React, { useEffect, useState } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import PanHandler from './PanHandler';
import SystemSetting from 'react-native-system-setting';

type Props = {
    onChangeVolume: (params: any) => any
}

const steps = 10;

export default ({ onChangeVolume }: Props) => {

    const [startY, setStartY] = useState(0)
    const [endY, setEndY] = useState(0)

    const onScreenTouched = () => {
        console.log('Volume side touched');
    }

    const onVolumeChanged = async (val: number) => {
        console.log('Volume changed');
        const currVolume = await SystemSetting.getVolume();
        val = val > 0 ? currVolume + 1 / steps : currVolume - 1 / steps;
        val = Math.min(1, Math.max(0, val));

        onChangeVolume(val);

        SystemSetting.setVolume(val);
        return;
    }

    return (
        <PanHandler step={10} onTouch={onScreenTouched} onChange={onVolumeChanged}/>
    )
}

const styles = StyleSheet.create({

});