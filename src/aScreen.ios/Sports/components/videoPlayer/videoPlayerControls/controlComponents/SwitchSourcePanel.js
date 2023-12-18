import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, View, Text, TouchableHighlight, Image} from 'react-native';
import {
  setVideoSource,
  updateVideoPropPipe,
  VideoPlayerActions,
} from '../../../../pages/matchDetails/action';
import {Colors} from '../../../../global/colors';
import {useLiveVideoSources} from '@hooks/useLiveVideoSources';
import {useAnimationVideoSources} from '@hooks/useAnimationVideoSources';
import {VideoLiveType} from '../../../../global/const';
import {VideoLive, AnimationLive} from '../../../../assets';

export const SwitchSourcePanel = ({isBottom}) => {
  const styles = createStyles(isBottom);

  const dispatch = useDispatch();
  const liveVideoList = useLiveVideoSources();
  const animationVideoList = useAnimationVideoSources();
  const videoPlayerControl = useSelector(s => s.videoPlayerControl);

  // sample data
  // const $filteredData = [
  //     { "code": "https://tracker.namitiyu.com/zh/version_2d/basketball?matchOdds=0&profile=QP0oi9ueJcXH3&id=3674936", "name": "2D" },
  //     { "code": "https://tracker.namitiyu.com/zh/version_3d/basketball?matchOdds=0&profile=QP0oi9ueJcXH3&id=3674936", "name": "3D" }];
  // const $filteredDataLive = [
  //     { "code": -1, "name": "高清直播" },
  //     { "code": -2, "name": "超清直播(中)" },
  //     { "code": -3, "name": "超清直播(英)" }];

  const OptionGroup = ({title, titleImage, data, callback}) => {
    const isSelected = item => {
      return [item.code, item.src].includes(videoPlayerControl.source);
    };
    return data ? (
      <View style={styles.optionGroup}>
        <View style={styles.optionRow}>
          <Image
            style={styles.titleImage}
            source={titleImage}
            resizeMode="contain"
          />
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.optionRow}>
          {data.map((item, idx) => {
            return (
              <TouchableHighlight
                key={item.code || `${idx}${title}`}
                style={[
                  styles.optionTextWrapper,
                  isSelected(item) ? styles.highlightWrapper : {},
                ]}
                underlayColor="transparent"
                onPress={() => {
                  dispatch(
                    updateVideoPropPipe([
                      VideoPlayerActions.hideBottomSheet,
                      VideoPlayerActions.hideControl,
                    ]),
                  );
                  callback(item);
                }}>
                <Text
                  style={[
                    styles.text,
                    // {fontWeight: 'bold'},
                    isSelected(item) ? styles.highlighText : {},
                  ]}>
                  {item.name}
                </Text>
              </TouchableHighlight>
            );
          })}
        </View>
      </View>
    ) : null;
  };

  return (
    <View style={styles.panel}>
      {liveVideoList.length > 0 ? (
        <OptionGroup
          title={'视频直播'}
          titleImage={VideoLive}
          data={liveVideoList}
          callback={item => {
            dispatch(setVideoSource(VideoLiveType.LIVE, item.src));
          }}
        />
      ) : null}
      {animationVideoList.length > 0 ? (
        <OptionGroup
          title={'动画直播'}
          titleImage={AnimationLive}
          data={animationVideoList}
          callback={item => {
            dispatch(setVideoSource(VideoLiveType.ANIMATION, item.code));
            // console.log(JSON.stringify(item));
          }}
        />
      ) : null}
    </View>
  );
};

const createStyles = isBottom => {
  return StyleSheet.create({
    panel: {
      padding: 20,
      flex: 1,
    },
    optionGroup: {
      flex: 0,
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    titleImage: {
      tintColor: isBottom ? 'black' : 'white',
      width: 20,
      height: 20,
      flex: 0,
      marginRight: 10,
    },
    optionRow: {
      display: 'flex',
      flex: 0,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      paddingBottom: 10,
    },
    optionTextWrapper: {
      zIndex: 0,
      flex: 0,
      color: isBottom ? 'black' : 'white',
      borderRadius: 30,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: isBottom ? 'black' : 'white',
      paddingVertical: 5,
      paddingHorizontal: 20,
      marginRight: 10,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 40,
    },
    text: {
      color: isBottom ? 'black' : 'white',
      fontSize: isBottom ? 16 : 16,
      flex: 0,
    },
    highlightWrapper: {
      backgroundColor: 'rgba(255, 161, 0, 0.2)',
      borderColor: Colors.colorLightOrange,
    },
    highlighText: {
      color: Colors.colorLightOrange,
    },
  });
};
