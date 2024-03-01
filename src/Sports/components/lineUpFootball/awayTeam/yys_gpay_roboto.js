import {StyleSheet} from 'react-native';
import {Colors} from '../../../global/yys_videocommon';

const styles = StyleSheet.create({
  container: {
    
    flex: 7,
  },
  playersRow: {
    flex: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    
    alignItems: 'center',
  },
  player: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  netWorthContainer: {
    flex: 1,
    display: 'flex',
    
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 4,
    paddingHorizontal: 12,
  },
  textPrice: {
    fontSize: 10,
    color: '#FFFFFF',
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontWeight: '400',
    display: 'flex',
    textAlign: 'right',
  },
});

export default styles;
