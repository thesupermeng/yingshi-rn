import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  topBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    // width: '100%',
    justifyContent: 'space-between',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerContainer: {
    display: 'flex',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginRight: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  timerTag: {
    fontSize: 12,
    fontWeight: '500',
    color: '#CDCDCD',
  },
  adsContent: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  adsTagContent: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'row',
  },
  adsTagContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  adsTagText: {
    fontSize: 11,
    fontWeight: '400',
    color: '#F7F7F7',
  },
});

export default styles;
