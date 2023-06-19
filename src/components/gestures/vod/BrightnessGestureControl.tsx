import React, { useEffect, useState } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import PanHandler from './PanHandler';
import SystemSetting from 'react-native-system-setting';

type Props = {
    onChangeBrightness: (params: any) => any,
    onPauseVideo: (params: any) => any
}

const steps = 10;

export default ({ onChangeBrightness, onPauseVideo }: Props) => {

    const [startY, setStartY] = useState(0)
    const [endY, setEndY] = useState(0)

    const onScreenTouched = () => {
        console.log('Brightness side touched');
    }

    const onBrightnessChanged = async (val: number) => {
        console.log('Brightness changed');
        const currVolume = await SystemSetting.getAppBrightness();
        val = val > 0 ? currVolume + 1 / steps : currVolume - 1 / steps;
        val = Math.min(1, Math.max(0, val));

        onChangeBrightness(val);

        SystemSetting.setAppBrightness(val);
        return;
    }

    const onVideoPaused = (val: boolean) => {
        onPauseVideo(val)
    }

    return (
        <PanHandler step={10} onTouch={onScreenTouched} onChange={onBrightnessChanged} onPause={onVideoPaused}/>
    )
}

const styles = StyleSheet.create({

});