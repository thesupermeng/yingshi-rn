import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {setIsSportGuideShown} from '@redux/actions/screenAction';
import {Divider} from '@rneui/base';
import {screenModel} from '@type/screenType';
import {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  Modal,
  Dimensions,
} from 'react-native';
import VipGuideModal from '../modal/vipGuide';

interface Props {
  timer: number; //number of seconds left
  onClickVip: (...args: any) => void;
  vipButtonText: string;
  containerStyle: ViewStyle;
}

const formatTimer = (numOfSeconds: number) => {
  const minutes = Math.floor(numOfSeconds / 60);
  const seconds = numOfSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const CountdownIndicator = ({
  timer,
  onClickVip,
  vipButtonText,
  containerStyle,
}: Props) => {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window');
  const [visible, setVisible] = useState(true);
  const [refPosition, setRefPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const componentRef = useRef<View>(null); // Create a ref for the component
  const [vipGuideModal, setVipGuideModal] = useState(false);
  const screenState: screenModel = useAppSelector(
    ({screenReducer}) => screenReducer,
  );
  const dispatch = useAppDispatch();
  // const dispatch = useAppDispatch();
  useEffect(() => {
    if (screenState.isSportGuideShown == false) {
      setTimeout(() => {
        setVipGuideModal(true);
        dispatch(setIsSportGuideShown(true));
      }, 1300);
    }
  }, [timer]);

  useEffect(() => {
    getPosition();
  }, []);

  const getPosition = () => {
    if (componentRef && componentRef.current != null) {
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {
        console.log('Position:', {x, y, width, height, pageX, pageY});
        setRefPosition({x: pageX, y: pageY, width: width, height: height});
      });
    }
  };
  return (
    <>
 
      <View
        style={containerStyle}
        onLayout={() => getPosition()}
        ref={componentRef}>
        <View style={styles.timerIndicatorContainer}>
          <Text
            numberOfLines={1}
            style={{...styles.indicatorText, color: '#FFFFFF'}}>
            {timer >= 0 ? `试看${formatTimer(timer)}后结束` : '试看结束'}
          </Text>
          <Divider color="#FFFFFF33" orientation="vertical" width={1} />
          <TouchableOpacity onPress={onClickVip}>
            <Text
              numberOfLines={1}
              style={{...styles.indicatorText, color: '#FAC33D'}}>
              {vipButtonText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={vipGuideModal} transparent={true}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.8)'}}>
        <View
        style={{
          position: 'absolute',
          top: refPosition.y ,
          left: refPosition.x ,
        }}>
        <View style={styles.timerIndicatorContainer}>
          <Text
            numberOfLines={1}
            style={{...styles.indicatorText, color: '#FFFFFF'}}>
            {timer >= 0 ? `试看${formatTimer(timer)}后结束` : '试看结束'}
          </Text>
          <Divider color="#FFFFFF33" orientation="vertical" width={1} />
          <TouchableOpacity onPress={onClickVip}>
            <Text
              numberOfLines={1}
              style={{...styles.indicatorText, color: '#FAC33D'}}>
              {vipButtonText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

          <View
            style={{
              position: 'absolute',
              top: refPosition.y + 30,
              left: 55,
            }}>
            <VipGuideModal
            contentTemplate={3}
              width="120%"
              isLeft={true}
              onClose={(value: boolean) => setVipGuideModal(value)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles: Record<string, ViewStyle | TextStyle> = {
  timerIndicatorContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.60)',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    paddingVertical: 4,
    paddingHorizontal: 5,
    flex: 1,
  },
  indicatorText: {
    fontSize: 14,
  },
};

export default CountdownIndicator;
