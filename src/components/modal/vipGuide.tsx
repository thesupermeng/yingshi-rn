import {useNavigation} from '@react-navigation/native';
import {Image, ViewStyle} from 'react-native';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

type CProps = {
  supportedOrientations?: ('portrait' | 'landscape')[];
  isLoading?: boolean;
  onClose: CallableFunction;
};

export default function VipGuideModal({onClose}: CProps) {
  const runFunc = () => {
    onClose(false);
  };

  return (
    <View style={{paddingHorizontal: 10}}>
      <View style={{alignSelf: 'flex-end', paddingRight: 30}}>
        <Image source={require(`@static/images/vip_guide_arrow.png`)}></Image>
      </View>
      <View
        style={{
          borderRadius: 10,
          borderColor: 'white',
          borderWidth: 1,
          marginHorizontal: 10,
        }}>
        <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
          {`购买VIP 去除广告\n搞清视频纯净观看`}
        </Text>
        <View style={{paddingHorizontal: 10, width: '100%', paddingTop: 10}}>
          <TouchableOpacity onPress={() => {}}>
            <LinearGradient
              colors={['#D1AC7D', '#B1885F']}
              locations={[0.0, 0.99]}
              style={{
                height: 40,
                marginBottom: 25,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 8,
                borderRadius: 8,
              }}>
              <Text
                style={{fontWeight: '900', letterSpacing: 1, color: 'black'}}>
                立即购买
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height: 10}} />
      {/* <View
          style={{
            justifyContent: 'center',
            // borderRadius: 30,
            // borderWidth: 1,
            // borderColor: 'grey',
          }}> */}
      <Text
        onPress={() => runFunc()}
        style={{
          borderRadius: 30,
          borderWidth: 1,
          borderColor: 'grey',
          color: 'grey',
          fontSize: 12,
          padding: 5,
          textAlign: 'center',
        }}>
        我知道了
      </Text>
    </View>
  );
}
