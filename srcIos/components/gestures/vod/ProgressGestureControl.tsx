import React, { useEffect, useState } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import PanHandler from './PanHandler';
import SystemSetting from 'react-native-system-setting';

type Props = {
    onProgressChange: (params: any) => any,
    onTouchScreen: () => any
}

const steps = 10;

export default ({ onProgressChange, onTouchScreen }: Props) => {
    const onScreenTouched = () => {
        onTouchScreen();
    }

    const onChange = async (val: number) => {
        onProgressChange(val * -20);
    }

    return (
        <PanHandler step={10} onTouch={onScreenTouched} onChange={onChange} axis='x' />
    )
}

const styles = StyleSheet.create({

});