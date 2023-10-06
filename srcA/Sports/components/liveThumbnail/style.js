import {StyleSheet} from 'react-native';
import {Colors} from '../../global/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  liveStreamerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  liveStreamerMatchDiv: isMatchName => ({
    display: 'flex',
    backgroundColor: isMatchName ? 'rgba(0, 0, 0, 0.8)' : Colors.colorPrimary,
    borderRadius: 2,
    padding: 4,
    position: 'absolute',
    top: 0,
    left: 0,
    borderBottomRightRadius: 6,
  }),
  liveStreamerMatchText: {
    fontSize: 11,
    fontWeight: '400',
    color: 'white',
  },
  liveStreamerViewerDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 3,
    position: 'absolute',
    top: 6,
    right: 6,
  },
  liveStreamerViewerIcon: {
    width: 9,
    height: 9,
    resizeMode: 'stretch',
    marginEnd: 3,
  },
  liveStreamerViewerText: {
    fontSize: 8,
    fontWeight: '600',
    color: 'white',
  },
  centerPlayDiv: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  centerPlayBg: {
    display: 'flex',
    width: 26,
    height: 26,
    borderRadius: 13,
    paddingStart: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
  },
  centerPlayIcon: {
    width: 28,
    height: 28,
    resizeMode: 'stretch',
  },
});

export default styles;
