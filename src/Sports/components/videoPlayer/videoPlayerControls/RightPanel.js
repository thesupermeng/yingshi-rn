import {useEffect} from 'react';
import {
  Animated,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useAnimation} from '../../../hooks/useAnimation';
import {PanelType} from '../config';
import {LiveStatPanel} from './controlComponents/LiveStatPanel';
import {RecommendPanel} from './controlComponents/recommend/RecommendPanel';
import VideoPlayerstyles from '../style';
import {SwitchSourcePanel} from './controlComponents/SwitchSourcePanel';
import {
  updateVideoPropPipe,
  VideoPlayerActions,
} from '../../../pages/matchDetails/action';
import {useState} from 'react';

export const RightPanel = ({display}) => {
  //   const volumeControl = this.props.disableVolume
  //     ? this.renderNullControl()
  //     : this.renderVolume();
  const dispatch = useDispatch();
  const dimensions = useWindowDimensions();
  const [opacityAni, inOpacity, outOpacity] = useAnimation({from: 0, to: 1});
  const [rightAni, inRight, outRight] = useAnimation({
    from: -dimensions.width,
    to: 0,
  });

  const [width, setWidth] = useState(0);
  const {rightPanel, isFullScreen} = useSelector(
    state => state.videoPlayerControl,
  );

  useEffect(() => {
    if (display) {
      Animated.parallel([inOpacity(), inRight()]).start();
    } else {
      Animated.parallel([outOpacity(), outRight()]).start(() => {
        dispatch(updateVideoPropPipe([VideoPlayerActions.hideControl]));
      });
    }
  }, [display]);

  const onPress = () => {
    console.log('right panel pressed');
    return false;
  };

  const onLayout = e => {
    // const blackWidth =
    //   dimensions.width / 2 - ((e.nativeEvent.layout.height / 576) * 1024) / 2;
    setWidth(rightPanel.width);
  };

  if (isFullScreen) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Animated.View
          style={[
            VideoPlayerstyles.controls.right,
            {
              opacity: opacityAni,
              right: rightAni,
            },
          ]}>
          <SafeAreaView
            style={[
              VideoPlayerstyles.controls.rightControlGroup,
              {
                width: rightPanel.width,
              },
            ]}>
            <View style={VideoPlayerstyles.controls.rightControlGroupTitle}>
              <Text
                style={[
                  VideoPlayerstyles.controls.text,
                  {
                    fontSize: 18,
                    alignSelf: 'flex-start',
                    marginLeft: 20,
                  },
                ]}>
                {rightPanel.title}
              </Text>
            </View>
            <View style={{flex: 1}} onLayout={e => onLayout(e)}>
              {rightPanel.type === PanelType.Switch ? (
                <SwitchSourcePanel />
              ) : null}
              {rightPanel.type === PanelType.Recommend ? (
                <RecommendPanel />
              ) : null}
              {rightPanel.type === PanelType.Stat ? (
                <LiveStatPanel width={width} />
              ) : null}
            </View>
          </SafeAreaView>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
};
