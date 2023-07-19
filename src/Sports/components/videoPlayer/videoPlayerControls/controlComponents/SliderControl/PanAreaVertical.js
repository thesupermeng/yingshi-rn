import {useEffect} from 'react';
import {useState} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';

export const PanAreaVertical = ({step, onPress, onChange}) => {
  const [startY, setStartY] = useState(0);
  const [curY, setCurY] = useState(0);
  useEffect(() => {
    // console.log('cur state', startY, curY);
    if (Math.abs(curY - startY) < step) {
      return;
    }
    if (curY - startY > step) {
      onChange(-1);
    } else {
      onChange(1);
    }
    setStartY(curY);
  }, [curY]);
  const panResponderVolume = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderGrant: (e, gesture) => {
      console.log('start', gesture.y0);
      setStartY(gesture.y0);
      onPress?.();
    },
    onPanResponderMove: (e, gestureState) => {
      setCurY(gestureState.moveY);
    },
  });
  return (
    <View
      style={[styles.middleContainer]}
      pointerEvents="box-only"
      {...panResponderVolume.panHandlers}></View>
  );
};

const styles = StyleSheet.create({
  middleContainer: {
    flex: 1,
    // backgroundColor: 'grey',
  },
});
