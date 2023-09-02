import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Text,
  Image,
} from 'react-native';

export const ResendCountDown = props => {
  const [countDown, setCountDown] = useState(60);

  const timerRef = React.useRef(countDown);
  React.useEffect(() => {
    setCountDown(60);
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
        props.setResend(true);
      } else {
        setCountDown(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [props.resend]);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 35,
      }}>
      <Image
        style={styles.iconStyle}
        source={require('../../../static/images/invite/time.png')}
      />

      <Text style={styles.hyperlink}>{timerRef.current} seconds</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  hyperlink: {
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'left',
  },
  iconStyle: {height: 26, width: 26, marginRight: 5},
});
