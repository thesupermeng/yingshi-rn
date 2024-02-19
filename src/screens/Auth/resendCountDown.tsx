import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export const ResendCountDown = (props: any) => {
  const [countDown, setCountDown] = useState(120);

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

      <Text style={styles.hyperlink}>{Math.floor(timerRef.current / 60).toString().padStart(2, '0')}:{(timerRef.current % 60).toString().padStart(2, '0')} 秒</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  hyperlink: {
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'left',
    color: '#9C9C9C',
  },
  iconStyle: { height: 26, width: 26, marginRight: 5 },
});
