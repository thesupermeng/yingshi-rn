import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Modal, ViewStyle} from 'react-native';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

type CProps = {
  children?: React.ReactNode;
  isVisible: boolean;
  onBackdropPress?: () => void;
  height?: string | number;
  maxHeight?: string | number;
  minHeight?: string | number;
  style?: ViewStyle;
  backdropColor?: string;
  supportedOrientations?: ('portrait' | 'landscape')[];
  disabledKeyboardAvoiding?: boolean;
  isLoading?: boolean;
};

export default function VipGuideModal({}: CProps) {
  const navigator = useNavigation();
  const [isVisible, setVisible] = useState(true);

  return (
    <Modal visible={isVisible} transparent={true}>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'transparent',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View
          style={{
            borderRadius: 10,
            borderColor: 'white',
            borderWidth: 1,
            marginLeft: 10,
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
          onPress={() => setVisible(false)}
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
        {/* </View> */}
      </View>
    </Modal>
  );
}
