import {useEffect} from 'react';
import {useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';

export const Loader = ({display}) => {
  const animationLoader = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (display) {
      Animated.sequence([
        Animated.timing(animationLoader, {
          toValue: 360,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(animationLoader, {
          toValue: 0,
          duration: 0,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [display]);

  if (!display) {
    return null;
  }
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.Image
        source={require('../images/icons/loader-icon.png')}
        style={[
          {
            transform: [
              {
                rotate: animationLoader.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};
