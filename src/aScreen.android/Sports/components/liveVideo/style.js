import {StyleSheet} from 'react-native';
import {Colors} from '../../global/colors';

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flexDirection: 'column',
    // borderBottomColor: Colors.colorDivider,
    // borderBottomWidth: 1,
    // paddingHorizontal: 16,
    backgroundColor: 'black',
    // flex: 1
  },
  videoDiv: {
    width: '100%',
    aspectRatio: 749 / 464 || 1024 / 576,
    // flex: 0,
    position: 'relative',
    // marginBottom: 11,
  },
  videoComp: {
    width: '100%',
    // height: 240,
    position: 'absolute',
    zIndex: 999,
  },
  videoDivFul: {
    width: '100%',
    height: '100%',
    position: 'relative',
    marginBottom: 11,
    backgroundColor: 'black',
  },
  videoCompFul: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 999,
  },
  descText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    marginBottom: 11,
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
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  centerPlayIcon: {
    width: 25,
    height: 25, 
    resizeMode: 'stretch',
  },
});

export default styles;
