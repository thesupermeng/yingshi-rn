import React, { useEffect, useState, useContext } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, ViewStyle } from 'react-native';

type Props = {
    step: number,
    onTouch: () => any,
    onChange: (params: any) => any
    axis?: 'x' | 'y',
    gestureStyle?: ViewStyle
}
// export default  ({ step, onTouch, onChange, axis = 'y', gestureStyle }: Props) => {

//     const [start, setStart] = useState({ x: 0, y: 0 });
//     const [end, setEnd] = useState({ x: 0, y: 0 });
//     const [prev, setPrev] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         if (axis === 'y') {
//             if (Math.abs(end.y - start.y) < step) {
//                 return;
//             }
//             if (end.y - start.y > step) {
//                 onChange(-1);
//             } else {
//                 onChange(1);
//             }
//             setStart({ x: end.x, y: end.y });
//         } else {
//             if (Math.abs(end.x - start.x) < step) {
//                 return;
//             }
//             if (end.x - start.x > step) {
//                 onChange(-1);
//             } else {
//                 onChange(1);
//             }
//             setStart({ x: end.x, y: end.y });
//         }
//     }, [end])


//     const windowHeight = Dimensions.get('window').height;
//     const panResponder = PanResponder.create({
//         onStartShouldSetPanResponder: (_evt: any, _gestureState: any) => true,
//         onStartShouldSetPanResponderCapture: (_evt: any, _gestureState: any) => true,
//         onPanResponderGrant: (_evt: any, _gestureState: any) => {
//             // console.log('GRANT');
//             // console.log(_gestureState);
//             // onTouch;
//             setStart({ x: _gestureState.x0, y: _gestureState.y0 });
//         },
//         onPanResponderMove: (_evt: any, _gestureState: any) => {
//             console.log("Move")
//             const newX = _gestureState.moveX;
//             const newY = _gestureState.moveY;
//             // setEndY(newY);
//             setEnd({ x: newX, y: newY });
//             setPrev({x: newX, y: newY});
//         },
//         onPanResponderRelease: (_evt: any, _gestureState: any) => {
//             // console.log('Leave');
//             let oldX = start.x;
//             let newX = end.x;
//             let oldY = start.y;
//             let newY = end.y;
//             if (Math.abs(newY - oldY) == 0 || prev.y == newY) {
//                 onTouch();
//             }
//             // if (Math.abs(newX - oldX) == 0 || prev.x == newX) {
//             //     onTouch();
//             // }
//             // Check if startY and endY same
//             // If same then trigger other actions
//         }
//     });

export default ({ step, onTouch, onChange, axis = 'y', gestureStyle }: Props) => {
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

            // Calculate velocity
            const velocity = _gestureState.vy; // Adjust as needed
            const threshold = 1; // Adjust the threshold value as needed

            // Check for a swipe and trigger onChange
            if (axis === 'y') {
                if (Math.abs(newY - start.y) > step && Math.abs(velocity) > threshold) {
                    onChange(newY - start.y > 0 ? -1 : 1); // Adjust as needed
                }
            } else {
                if (Math.abs(newX - start.x) > step && Math.abs(velocity) > threshold) {
                    onChange(newX - start.x > 0 ? -1 : 1); // Adjust as needed
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