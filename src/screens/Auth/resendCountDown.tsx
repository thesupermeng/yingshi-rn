import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

export const ResendCountDown = props => {
  const [countDown, setCountDown] = useState(300);

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
    <Text style={[styles.description, {marginBottom: 10}]}>
      {'Resend OTP in '}
      <Text style={styles.hyperlink}>{timerRef.current} seconds</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  description: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'left',
  },
  hyperlink: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'left',
    color: 'orange',
  },
});
