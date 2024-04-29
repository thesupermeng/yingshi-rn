import {StyleSheet} from 'react-native';
import {Colors} from '../../global/tt_umeng';

const VideoPlayerstyles = {
  player: StyleSheet.create({
    container: {
      overflow: 'hidden',
      backgroundColor: '#000',
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'space-between',
    },
    video: {
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  }),
  error: StyleSheet.create({
    container: {
      backgroundColor: 'rgba( 0, 0, 0, 0.5 )',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      
      
      
      
    },
    icon: {
      marginBottom: 16,
      width: 39,
      height: 38,
    },
    text: {
      backgroundColor: 'transparent',
      color: 'white',
      fontSize: 11,
    },
    reloadtext: {
      backgroundColor: 'transparent',
      color: '#ffffff',
    },
    button: {
      borderWidth: 1,
      borderRadius: 15,
      borderColor: '#ffffff',
      
      marginVertical: 10,
      width: 40,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
  loader: StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
  controls: StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      height: null,
      width: null,
    },
    column: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: null,
      width: null,
    },
    vignette: {
      resizeMode: 'stretch',
    },
    control: {
      padding: 16,
    },
    text: {
      backgroundColor: 'transparent',
      color: '#FFF',
      fontSize: 14,
      textAlign: 'center',
    },
    pullRight: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      
      width: '85%',
    },
    top: {
      flex: 0,
      borderWidth: 1,
    },
    right: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      zIndex: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottom: {
      alignItems: 'stretch',
      flex: 0,
      justifyContent: 'flex-end',
    },
    topControlGroup: {
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: null,
      
      
      
    },
    rightControlGroup: {
      flex: 1,
      backgroundColor: Colors.colorBackgroundOpacity(0.7),
    },
    rightControlGroupTitle: {
      
      flex: 0,
      marginVertical: 10,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    bottomControlGroup: {
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginLeft: 12,
      marginRight: 12,
      marginBottom: 0,
    },
    volume: {
      flexDirection: 'row',
    },
    fullscreen: {
      flexDirection: 'row',
    },
    fullscreenIcon: {
      width: 25,
      height: 25,
    },
    playPause: {
      position: 'relative',
      
      zIndex: 0,
    },
    playPauseIcon: {
      position: 'relative',
      width: 31,
      height: 31,
      zIndex: 0,
    },
    title: {
      alignItems: 'center',
      flex: 0.6,
      flexDirection: 'column',
      padding: 0,
    },
    titleText: {
      textAlign: 'center',
    },
    timer: {
      
      marginStart: 8,
    },
    timerText: {
      backgroundColor: 'transparent',
      color: '#FFF',
      fontSize: 12,
      textAlign: 'right',
    },
    back: {
      width: 60,
      height: 68,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    },
    backIcon: {
      width: 10,
      height: 18,
    },
  }),
  volume: StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      height: 1,
      marginLeft: 20,
      marginRight: 20,
      width: 150,
    },
    track: {
      backgroundColor: '#333',
      height: 1,
      marginLeft: 7,
    },
    fill: {
      backgroundColor: '#FFF',
      height: 1,
    },
    handle: {
      position: 'absolute',
      marginTop: -24,
      marginLeft: -24,
      padding: 16,
    },
    icon: {
      marginLeft: 7,
    },
  }),
  videotitle: StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      height: '100%',
      marginLeft: 0,
      marginRight: 20,
      
      flex: 0,
      backgroundColor: 'red',
    },
    title: {
      fontFamily: 'PingFang SC',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 12,
      lineHeight: 17,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: '#FFFFFF',
    },
  }),
  seekbar: StyleSheet.create({
    container: {
      alignSelf: 'stretch',
      marginTop: 10,
      
      flex: 1,
    },
    track: {
      backgroundColor: '#333',
      height: 1,
      position: 'relative',
      top: 14,
      width: '100%',
    },
    fill: {
      backgroundColor: '#FFF',
      height: 1,
      width: '100%',
    },
    handle: {
      position: 'absolute',
      marginLeft: -7,
      
      width: 28,
    },
    circle: {
      borderRadius: 12,
      position: 'relative',
      top: 8,
      left: 8,
      height: 12,
      width: 12,
    },
  }),
};

export default VideoPlayerstyles;
