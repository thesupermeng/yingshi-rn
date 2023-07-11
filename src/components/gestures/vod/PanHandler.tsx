import React, { useEffect, useState, useContext } from 'react';
import { View, PanResponder, StyleSheet, Dimensions } from 'react-native';

type Props = {
    step: number,
    onTouch: () => any,
    onChange: (params: any) => any
}
export default ({ step, onTouch, onChange }: Props) => {

    const [startY, setStartY] = useState(0);
    const [endY, setEndY] = useState(0);
    const [prevY, setPrevY] = useState(0);

    useEffect(() => {
        if (Math.abs(endY - startY) < step) {
            return;
        }

        if (endY - startY > step) {
            onChange(-1);
        } else {
            onChange(1);
        }
        setStartY(endY);

    }, [endY])
    const windowHeight = Dimensions.get('window').height;
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (_evt: any, _gestureState: any) => true,
        onStartShouldSetPanResponderCapture: (_evt: any, _gestureState: any) => true,
        onPanResponderGrant: (_evt: any, _gestureState: any) => {
            // console.log('GRANT');
            // console.log(_gestureState);
            // onTouch;
            setStartY(_gestureState.y0);
        },
        onPanResponderMove: (_evt: any, _gestureState: any) => {
            let newY = _gestureState.moveY;
            setEndY(newY);
            setPrevY(newY);
        },
        onPanResponderRelease: (_evt: any, _gestureState: any) => {
            // console.log('Leave');
            let oldY = startY;
            let newY = endY;
            if(Math.abs(newY - oldY) == 0 || prevY == newY){
                onTouch();
            }
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