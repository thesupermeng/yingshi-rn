import React, { useRef } from 'react';
import { GestureResponderEvent, TouchableHighlight, View } from 'react-native';

export default function FixedTouchableHighlight({
  onPress,
  onPressIn,
  ...props
}: any) {
  const _touchActivatePositionRef = useRef<any>(null);

  function _onPressIn(e: GestureResponderEvent) {
    const { pageX, pageY } = e.nativeEvent;

    _touchActivatePositionRef.current = {
      pageX,
      pageY,
    };
    onPressIn?.(e);
  }

  function _onPress(e: GestureResponderEvent) {
    const { pageX, pageY } = e.nativeEvent;

    const absX = Math.abs(_touchActivatePositionRef.current.pageX - pageX);
    const absY = Math.abs(_touchActivatePositionRef.current.pageY - pageY);

    const dragged = absX > 2 || absY > 2;
    if (!dragged) {
      onPress?.(e);
    }
  }

  return (
    <TouchableHighlight underlayColor={'transparent'} onPressIn={_onPressIn} onPress={_onPress} {...props}>
      <View>
        {props.children}
      </View>
    </TouchableHighlight>
  );
}