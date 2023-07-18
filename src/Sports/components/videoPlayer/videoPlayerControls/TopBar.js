import {useEffect} from 'react';
import {
  Animated,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useAnimation} from '../../../hooks/useAnimation';
import {AnimationHeight} from '../config';
import VideoPlayerstyles from '../style';
import {Back, Unlocker, ShareButton, Pip} from './Controls';
import {styles} from './style';
export const TopBar = ({display, title}) => {
  const {isFullScreen} = useSelector(s => s.videoPlayerControl);
  const [opacityAni, inOpacity, outOpacity] = useAnimation({from: 0, to: 1});
  const [marinTopAni, inMarinTop, outMarinTop] = useAnimation({
    from: -AnimationHeight,
    to: 0,
  });

  useEffect(() => {
    if (display) {
      Animated.parallel([inOpacity(), inMarinTop()]).start();
    } else {
      Animated.parallel([outOpacity(), outMarinTop()]).start();
    }
  }, [display]);
  return (
    <Animated.View
      style={[
        styles.top,
        {
          opacity: opacityAni,
          marginTop: marinTopAni,
        },
      ]}>
      <ImageBackground
        source={require('../images/icons/vignette.png')}
        style={[styles.imageBackground]}
        imageStyle={[
          VideoPlayerstyles.controls.vignette,
          {transform: [{rotate: '180deg'}]},
        ]}>
        <SafeAreaView style={[styles.topControlGroup]}>
          <Back />
          {/* {volumeControl} */}
          <View style={titleStyle.container}>
            <Text style={titleStyle.title}>{title}</Text>
          </View>
          <View style={{flex: 1}} />
          <Pip />
          <ShareButton />
          {isFullScreen && <Unlocker />}
        </SafeAreaView>
      </ImageBackground>
    </Animated.View>
  );
};

const titleStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 0,
  },
  title: {
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    // lineHeight: 17,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
