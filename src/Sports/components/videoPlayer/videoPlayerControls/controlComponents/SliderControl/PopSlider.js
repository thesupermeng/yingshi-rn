import {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const PopSlider = ({icon, percent}) => {
  return (
    <View style={styles.smallContainer}>
      <Image
        resizeMode="contain"
        source={icon}
        style={styles.iconStyle}></Image>
      <View style={styles.statBar}>
        <View
          style={{
            height: 5,
            borderRadius: 4,
            backgroundColor: '#FFA100',
            width: `${percent > 100 ? 100 : percent}%`,
          }}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  smallContainer: {
    width: 160,
    height: 32,
    borderRadius: 10,
    backgroundColor: 'rgba(43, 43, 43, 0.5)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    zIndex: 10,
  },
  iconStyle: {
    width: 16,
    height: 16,
    marginHorizontal: 5,
  },
  statBar: {
    width: '70%',
    height: 5,
    backgroundColor: 'rgba(255, 161, 0, 0.3)',
    marginBottom: 'auto',
    marginTop: 'auto',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderRadius: 4,
  },
});
