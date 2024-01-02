import {StyleSheet} from 'react-native';
import {Colors} from '../../global/colors';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 16, // 暂时不要随便改这个，因为chart的写法宽度兼容性不是很好
    paddingVertical: 16,
  },
  rowContent: {
    display: 'flex',
    flex: 0,
    flexDirection: 'row',
  },
  leftContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rightContent: {
    flex: 9,
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'yellow',
  },
  minuteContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  minuteText: {
    fontSize: 9,
    fontWeight: '400',
    color: Colors.colorDarkGreyText,
  },
  eventContent: {
    flex: 1,
    // position: 'relative',
    justifyContent: 'center',
  },
  teamIcon: {
    flex: 0,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default styles;
