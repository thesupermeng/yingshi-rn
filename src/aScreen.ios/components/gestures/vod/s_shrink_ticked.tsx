import React, { useEffect, useState, useContext } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, ViewStyle } from 'react-native';

type XFillButton = {
    step: number,
    onTouch: () => any,
    onChange: (params: any) => any
    axis?: 'x' | 'y',
    gestureStyle?: ViewStyle
}


//             if (end.y - start.y > step) {
//             if (end.x - start.x > step) {


//         onStartShouldSetPanResponder: (_evt: any, _gestureState: any) => true,
//         onStartShouldSetPanResponderCapture: (_evt: any, _gestureState: any) => true,

export default ({ step, onTouch, onChange, axis = 'y', gestureStyle }: XFillButton) => {
    const [start, setStart] = useState({ x: 0, y: 0 });
    const [end, setEnd] = useState({ x: 0, y: 0 });

    const windowHeight = Dimensions.get('window').height;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (_evt, _gestureState) => true,
        onStartShouldSetPanResponderCapture: (_evt, _gestureState) => true,
        onPanResponderGrant: (_evt, _gestureState) => {
            setStart({ x: _gestureState.x0, y: _gestureState.y0 });
        },
        onPanResponderMove: (_evt, _gestureState) => {
            const newX = _gestureState.moveX;
            const newY = _gestureState.moveY;
            setEnd({ x: newX, y: newY });

            
            const velocity = _gestureState.vy; 
            const threshold = 1; 

            
            if (axis === 'y') {
                if (Math.abs(newY - start.y) > step && Math.abs(velocity) > threshold) {
                    onChange(newY - start.y > 0 ? -1 : 1); 
                }
            } else {
                if (Math.abs(newX - start.x) > step && Math.abs(velocity) > threshold) {
                    onChange(newX - start.x > 0 ? -1 : 1); 
                }
            }
        },
        onPanResponderRelease: () => {
            onTouch();
        },
    });



    return (
        <View style={[styles.panView, gestureStyle]} pointerEvents="box-only" {...panResponder.panHandlers}>
        </View>
    )
}

const styles = StyleSheet.create({
    panView: {
        flex: 1,
        width: '100%',
        height: '100%'
    }
});