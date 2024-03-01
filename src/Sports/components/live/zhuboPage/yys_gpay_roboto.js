import {StyleSheet} from 'react-native';
import {Colors} from '../../../global/yys_videocommon';

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
  },
  zhuboImage: {
    margin: 20,
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
  },
  onLive: {
    backgroundColor: Colors.colorPrimary,
    width: 'auto',
    borderRadius: 8,
    position: 'absolute',
    paddingHorizontal: 5,
    paddingVertical: 3,
    display: 'flex',
    top: 60,
    left: 28,
  },
  onLiveText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontSize: 10,
  },
  zhuboTitle: {
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
  },
  smallImageLogo: {
    margin: 5,
    width: 12,
    height: 14,
  },
  subscribeNumber: {
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    color: '#999999',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
    
  },
  titleBox: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
});

export default styles;
