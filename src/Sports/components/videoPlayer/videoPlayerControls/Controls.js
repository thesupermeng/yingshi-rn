import {
  TouchableHighlight,
  Image,
  SafeAreaView,
  View,
  Text,
  Share,
  TouchableOpacity,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import {useDispatch, useSelector} from 'react-redux';
import LiveRoomAction, {
  setVideoControlProp,
  setVideoFullScreen,
  setVideoPlayerAction,
  setVideoSource,
} from '../../../screens/Sports/MatchDetails/action';
import VideoPlayerstyles from '../style';

// images
import PlayImg from '../images/icons/play.png';
import PauseImg from '../images/icons/pause.png';
import LockImg from '../images/icons/lock.png';
import UnlockImg from '../images/icons/unlock.png';

import {
  DisconnectedLogo,
  IconFullScreenMax,
  IconFullScreenMin,
  IconPipShrink,
  IconTV0,
  RefreshBorderless,
  ShareWhite,
} from '../../../assets';
import {
  showControlAction,
  toggleLockScreen,
  togglePlayPaused,
} from '../util/util';
import {VideoLiveType} from '../../../global/const';
import {StyleSheet} from 'react-native';
import {ShowControlType} from '../config';
import {AppConfig} from '../../../global/appConfig';
import store from '../../../redux/store';
import {floatingPlayer} from '../../../redux/reducers/floatingPlayer';
// import {setPredictionShareTimeStamp} from '../../../global/asyncStorage';
import debounce from 'lodash.debounce';
import {useCallback} from 'react';
import {useEffect} from 'react';
import AppSettingsAction from '../../../redux/actions/appSettingsAction';
import vars from '../../../utility/vars';

export const RenderControl = ({children, onPress, style = {}}) => {
  return (
    <TouchableHighlight
      underlayColor="transparent"
      activeOpacity={0.3}
      onPress={onPress}
      style={[style]}>
      {children}
    </TouchableHighlight>
  );
};
export const Back = ({onPress}) => {
  const {isFullScreen} = useSelector(state => state.videoPlayerControl);
  const dispatch = useDispatch();
  const onPressBack = () => {
    if (onPress) onPress();
    Orientation.lockToPortrait();
    dispatch(setVideoFullScreen(false));
    if (!isFullScreen) {
      dispatch(setVideoSource(VideoLiveType.DETAIL, ''));
    }
  };
  return (
    <RenderControl style={style.backContainer} onPress={onPressBack}>
      <Image
        resizeMode="contain"
        source={require('../images/icons/back.png')}
        style={style.backIcon}
      />
    </RenderControl>
  );
};
export const CastScreenBtn = ({onPress}) => {
  return (
    <RenderControl onPress={onPress}>
      <Image source={IconTV0} style={style.commonIcon} resizeMode={'contain'} />
    </RenderControl>
  );
};

export const ToggleFullScreen = () => {
  const {isFullScreen} = useSelector(state => state.videoPlayerControl);
  const dispatch = useDispatch();
  const onPressToggleFullScreen = () => {
    dispatch(setVideoFullScreen(!isFullScreen));
  };
  return (
    <RenderControl
      style={style.commonIconContainer}
      onPress={onPressToggleFullScreen}>
      <Image
        source={isFullScreen ? IconFullScreenMin : IconFullScreenMax}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
};

export const PlayPause = () => {
  const dispatch = useDispatch();
  const {isPaused} = useSelector(state => state.videoPlayerControl);
  const onPress = () => {
    dispatch(togglePlayPaused());
  };
  return (
    <RenderControl onPress={onPress} style={style.commonIconContainer}>
      <Image
        source={isPaused === true ? PlayImg : PauseImg}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
};
export const Refresh = () => {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(setVideoPlayerAction('refresh'));
  };
  return (
    <RenderControl onPress={onPress} style={style.commonIconContainer}>
      <Image
        source={RefreshBorderless}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
};

export const Pip = () => {
  const dispatch = useDispatch();
  const {source, matchId, videoType} = useSelector(
    state => state.videoPlayerControl,
  );
  const onPress = () => {
    Orientation.lockToPortrait();
    store.dispatch(
      floatingPlayer.actions.setProp({
        display: true,
        url: source,
        matchId: matchId,
        videoType: videoType,
      }),
    );
    dispatch(
      setVideoControlProp({
        isFullScreen: false,
        source: '',
        videoType: VideoLiveType.DETAIL,
      }),
    );
  };

  return (
    <RenderControl onPress={onPress} style={style.commonIconContainer}>
      <Image
        source={IconPipShrink}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
};
export const Error = ({display, onClick}) => {
  if (!display) {
    return null;
  }
  return (
    <SafeAreaView
      pointerEvents="box-none"
      style={[
        VideoPlayerstyles.error.container,
        {flex: 1, justifyContent: 'center'},
      ]}>
      <View style={style.errorBackContainer}>
        <Back />
      </View>
      <View
        style={{
          flex: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Image source={DisconnectedLogo} style={style.errorIcon} />
        <Text style={style.errorButtonText}>加载失败， 请重试！</Text>
        <TouchableOpacity style={style.errorButton} onPress={onClick}>
          <Text style={style.errorButtonText}>重试</Text>
        </TouchableOpacity>
        {/* <Text style={VideoPlayerstyles.error.text}>再次点击重新加载</Text> */}
      </View>
    </SafeAreaView>
  );
};

export const Locker = ({display}) => {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(toggleLockScreen());
    dispatch(showControlAction(ShowControlType.TopBottom));
  };
  return display ? (
    <View style={style.lockerContainer}>
      <RenderControl onPress={onPress}>
        <Image
          source={LockImg}
          style={style.lockerIcon}
          resizeMode={'contain'}
        />
      </RenderControl>
    </View>
  ) : null;
};

export const Unlocker = () => {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(toggleLockScreen());
    dispatch(showControlAction(ShowControlType.Locker));
  };
  return (
    <RenderControl
      onPress={onPress}
      style={{
        flex: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={UnlockImg}
        style={[style.unlockerIcon]}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
};

export const ShareButton = () => {
  const dispatch = useDispatch();
  const debouncedShare = useCallback(
    debounce((title, matchId) => shareStream(title, matchId), 500),
    [],
  );

  const matchId = useSelector(state => state.matchId);
  const liveRoomAction = new LiveRoomAction(dispatch, matchId);
  // const shareLink = useSelector(state => state.shareLink);
  const liveDataState = useSelector(state => state.liveRoom);
  const competitionNameShort = liveDataState?.competition?.name_short;
  const awayName = liveDataState?.away?.name;
  const homeName = liveDataState?.home?.name;

  const title = `${competitionNameShort} | ${homeName} vs ${awayName}`;

  const shareStream = async (title, matchId) => {
  //   const shareLink = await liveRoomAction.getShareLink(matchId);
  //   const shareContent = `${title}\n\n${shareLink}`;
  //   Share.share({message: shareContent}).then(
  //     async ({action, activityType}) => {
  //       if (action === 'sharedAction') {
  //         await setPredictionShareTimeStamp();
  //         AppSettingsAction.instance.shareLocationClick(
  //           vars.shareLocation.matchDetail,
  //           matchId,
  //         );
  //       }
  //     },
  //   );
  // };
  // return (
  //   <RenderControl
  //     onPress={() => {
  //       debouncedShare(title, matchId);
  //     }}
  //     style={{
  //       flex: 0,
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //     }}>
  //     <Image
  //       source={ShareWhite}
  //       style={[style.unlockerIcon]}
  //       resizeMode={'contain'}
  //     />
  //   </RenderControl>
  // );
};

export const style = StyleSheet.create({
  lockerContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  lockerIcon: {
    position: 'absolute',
    tintColor: 'white',
    top: 5,
    right: 14,
    width: 40,
    height: 40,
  },
  unlockerIcon: {
    width: 40,
    height: 40,
    tintColor: 'white',
  },
  commonIcon: {
    width: 35,
    height: 35,
    margin: 5,
  },
  commonIconContainer: {
    padding: 0,
  },
  backContainer: {
    flex: 0,
    display: 'flex',
    padding: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
    margin: 5,
  },
  errorBackContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  errorIcon: {
    flex: 0,
    width: 30,
    height: 30,
    marginVertical: 20,
  },
  errorButton: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ffffff',
    marginVertical: 10,
    width: 40,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorButtonText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 11,
  },
});
