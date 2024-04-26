import { StyleSheet } from 'react-native';
import { Colors } from '../../global/wawa_armva';

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
    backgroundColor: 'white',
    flex: 1
  },
  backButtonTouch: {
    height: 60,
    width: 66,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: 20,
    position: 'absolute',
    zIndex: 2,
    flexDirection: 'row'
  },
  backButtonIcon: {
    height: 18,
    width: 16,
  },
  containerInside: {
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  liveStreamTopDiv: {
    width: '100%',
    height: 100,
    position: 'relative',
    backgroundColor: Colors.colorLightGreyBg,
  },
  liveStreamImageBg: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  liveStreamMatchDiv: {
    display: 'flex',
    padding: 4,
    position: 'absolute',
    top: 0,
    left: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderBottomStartRadius: 2,
    borderBottomEndRadius: 2,
  },
  liveStreamMatchText: {
    fontSize: 10,
    fontWeight: '400',
    color: 'white',
  },
  liveStreamViewerDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 7,
    position: 'absolute',
    top: 6,
    right: 6,
  },
  liveStreamViewerIcon: {
    width: 14,
    height: 14,
    borderRadius: 14 / 2,
    backgroundColor: Colors.colorPrimary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  liveStreamIconViewer: {
    width: 12,
    height: 10,
    resizeMode: 'stretch',
  },
  liveStreamViewerText: {
    fontSize: 8,
    fontWeight: '500',
    color: 'white',
    marginHorizontal: 3,
  },
  streamerInfoDiv: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  streamerInfoAvatar: {
    width: 13,
    height: 13,
    resizeMode: 'stretch',
    borderRadius: 13 / 2,
  },
  streamerInfoText: {
    flex: 1,
    fontSize: 10,
    fontWeight: '400',
    color: 'white',
    marginStart: 3,
  },
  liveStreamBottomDiv: {
    display: 'flex',
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  liveStreamBottomDesc: {
    fontSize: 13,
    fontWeight: '400',
    color: 'black',
  },
});

export default styles;
