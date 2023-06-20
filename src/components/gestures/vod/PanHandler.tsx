import React, { useEffect, useState, useContext } from 'react';
import { View, PanResponder, StyleSheet, Dimensions } from 'react-native';

type Props = {
    step: number,
    onTouch: (params: any) => any,
    onChange: (params: any) => any,
    onPause: (params: any) => any
}
export default ({ step, onTouch, onChange, onPause }: Props) => {

    const [startY, setStartY] = useState(0)
    const [endY, setEndY] = useState(0)

    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        if (Math.abs(endY - startY) < step) {
            onPause(!isPaused)
            setIsPaused(prev => !prev)
            return;
        }

        if (endY - startY > step) {
            console.log('LOWER');
            onChange(-1);
        } else {
            console.log('INCREASE');
            onChange(1);
        }
        setStartY(endY);

    }, [endY])
    const windowHeight = Dimensions.get('window').height;
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (_evt: any, _gestureState: any) => true,
        onStartShouldSetPanResponderCapture: (_evt: any, _gestureState: any) => true,
        onPanResponderGrant: (_evt: any, _gestureState: any) => {
            console.log('GRANT');
            // console.log(_gestureState);
            onTouch;
            setStartY(_gestureState.y0);
        },
        onPanResponderMove: (_evt: any, _gestureState: any) => {
            // console.log('MOVE');
            // console.log(_gestureState);
            setEndY(_gestureState.moveY);
        },
        onPanResponderLeave: (_evt: any, _gestureState: any) => {
            // console.log('Leave');
            // console.log(_gestureState);
            
            // Check if startY and endY same
            // If same then trigger other actions
        },
        onPanResponderRelease: (_evt: any, _gestureState: any) => {
            console.log('Leave');
            console.log(_gestureState);

            setEndY(_gestureState.moveY);
            // Check if startY and endY same
            // If same then trigger other actions
        }
    });

    return (
        <View style={[styles.panView, { height: windowHeight }]} pointerEvents="box-only" {...panResponder.panHandlers}>
        </View>
    )
}

const styles = StyleSheet.create({
    panView: {
        flex: 1,
        width: 200,
        // backgroundColor: 'yellow'
    }
});