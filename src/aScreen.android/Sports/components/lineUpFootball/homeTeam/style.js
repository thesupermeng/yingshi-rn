import {StyleSheet} from 'react-native';
import {Colors} from '../../../global/colors';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'gold',
    flex: 7,
  },
  playersRow: {
    flex: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor: 'rgba(52, 52, 52, 0.3)',
    alignItems: 'center',
  },
  player: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  netWorthContainer: {
    flex: 1,
    display: 'flex',
    // backgroundColor: 'blue',
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
