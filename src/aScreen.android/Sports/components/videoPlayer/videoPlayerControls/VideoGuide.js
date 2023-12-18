import {useState} from 'react';
import {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {check} from 'react-native-permissions';
import {
  getVisitedVideoGuide,
  setVisitedVideoGuide,
} from '../../../global/asyncStorage';
import {Colors} from '../../../global/colors';
import Img from '../images/icons/playerGuide.png';

export const VideoGuide = () => {
  const Dimensions = useWindowDimensions();

  const [showVideoGuide, setShowVideoGuide] = useState(false);
  useEffect(() => {
    check();
  }, []);
  const check = async () => {
    const visited = await getVisitedVideoGuide();
    setShowVideoGuide(!visited);
  };
  const Space = ({ratio}) => {
    return <View style={{flex: ratio}} />;
  };
  const onPressKnown = async () => {
    await setVisitedVideoGuide();
    setShowVideoGuide(false);
  };
  if (!showVideoGuide) {
    return null;
  }
  return (
    <SafeAreaView
      style={[
        styles.container,
        // {height: Dimensions.height, width: Dimensions.width},
      ]}>
      <Space ratio={2} />
      <Image source={Img} style={styles.image} resizeMode={'contain'}></Image>
      <Space ratio={2} />
      <TouchableOpacity style={styles.textContainer} onPress={onPressKnown}>
        <Text style={styles.text}>我知道了</Text>
      </TouchableOpacity>
      <Space ratio={14} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.colorBackgroundOpacity(0.7),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0,
  },
  textContainer: {
    backgroundColor: Colors.colorLightOrange,
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
    color: Colors.colorAppBackground,
  },
});
