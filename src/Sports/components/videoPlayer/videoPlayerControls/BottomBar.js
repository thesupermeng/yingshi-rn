import {useEffect, useState} from 'react';
import {
  Animated,
  ImageBackground,
  Platform,
  SafeAreaView,
  useWindowDimensions,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {VideoLiveType} from '../../../global/const';
import {useAnimation} from '../../../hooks/useAnimation';
import {
  setLiveRelatedStreams,
  setVideoControlBottomPenalProp,
  updateVideoPropPipe,
  VideoPlayerActions,
} from '../../../screens/matchDetails/action';
import {
  AnimationHeight,
  PanelType,
  ShowControlsButtons,
  ShowControlType,
} from '../config';
import VideoPlayerstyles from '../style';
import {RecommendBtn, StatisticBtn, SwitchSourceBtn} from './BottomButtons';
import {CastScreenBtn, PlayPause, Refresh, ToggleFullScreen} from './Controls';
import {styles} from './style';

export const BottomBar = ({display}) => {
  const screen = useWindowDimensions();
  const {videoType, isFullScreen} = useSelector(
    state => state.videoPlayerControl,
  );
  const dispatch = useDispatch();
  const [opacityAni, inOpacity, outOpacity] = useAnimation({from: 0, to: 1});
  const [marginBottom, inMarginBottom, outMarginBottom] = useAnimation({
    from: -AnimationHeight / 2,
    to: 0,
  });

  useEffect(() => {
    if (display) {
      Animated.parallel([inOpacity(), inMarginBottom()]).start();
    } else {
      Animated.parallel([outOpacity(), outMarginBottom()]).start();
    }
  }, [display]);

  const onShowRecommend = () => {
    dispatch(setLiveRelatedStreams(null));
    if (isFullScreen) {
      dispatch(
        updateVideoPropPipe([
          VideoPlayerActions.setRightPanel({
            type: PanelType.Recommend,
            title: '推荐直播赛事',
            width: screen.width / 2,
          }),
          VideoPlayerActions.setControl({
            type: ShowControlType.Right,
            timeout: 0,
          }),
        ]),
      );
    } else {
      dispatch(
        setVideoControlBottomPenalProp({
          height: screen.height * 0.6,
          title: '推荐直播赛事',
          type: PanelType.Recommend,
        }),
      );
    }
  };

  const onShowSwitch = () => {
    if (isFullScreen) {
      dispatch(
        updateVideoPropPipe([
          VideoPlayerActions.setRightPanel({
            type: PanelType.Switch,
            title: '切源',
            width: screen.width * 0.4,
          }),
          VideoPlayerActions.setControl({
            type: ShowControlType.Right,
            timeout: 0,
          }),
        ]),
      );
    } else {
      dispatch(
        setVideoControlBottomPenalProp({
          height: screen.height * 0.4,
          title: '切源',
          type: PanelType.Switch,
        }),
      );
    }
  };

  const onShowStats = () => {
    if (isFullScreen) {
      dispatch(
        updateVideoPropPipe([
          VideoPlayerActions.setRightPanel({
            type: PanelType.Stat,
            title: '技术统计',
            width: screen.width * 0.55,
          }),
          VideoPlayerActions.setControl({
            type: ShowControlType.Right,
            timeout: 0,
          }),
        ]),
      );
    }
  };
  const onPressCast = () => {
    dispatch(
      updateVideoPropPipe([
        VideoPlayerActions.hideControl,
        VideoPlayerActions.setBottomProp({
          height: isFullScreen ? screen.width * 0.6 : screen.height * 0.6,
          title: '选择投屏设备',
          type: ShowControlType.Caster,
        }),
        VideoPlayerActions.setFullScreen(false),
      ]),
    );
  };
  return (
    <Animated.View
      style={[
        styles.bottom,
        {
          opacity: opacityAni,
          marginBottom: marginBottom,
        },
      ]}>
      <ImageBackground
        resizeMode="stretch"
        source={require('../images/icons/vignette.png')}
        style={[styles.imageBackground]}
        imageStyle={[VideoPlayerstyles.controls.vignette]}>
        {/* {seekbarControl} */}
        <SafeAreaView style={[styles.bottomControlGroup]}>
          <PlayPause />
          {videoType === VideoLiveType.LIVE && <Refresh />}
          <View style={{flexDirection: 'row', flex: 1, marginLeft: 10}}>
            <RecommendBtn
              display={ShowControlsButtons[videoType][PanelType.Recommend]}
              onPress={onShowRecommend}
            />
            <SwitchSourceBtn
              display={ShowControlsButtons[videoType][PanelType.Switch]}
              onPress={onShowSwitch}
            />
            <StatisticBtn
              display={
                ShowControlsButtons[videoType][PanelType.Stat] && isFullScreen
              }
              onPress={onShowStats}
            />
          </View>
          <View styles={{flex: 1}} />
          {videoType === VideoLiveType.LIVE && Platform.OS === 'ios' ? (
            <CastScreenBtn onPress={onPressCast} />
          ) : null}
          <ToggleFullScreen />
        </SafeAreaView>
      </ImageBackground>
    </Animated.View>
  );
};
