import {StyleSheet} from 'react-native';
import {Colors} from '../../global/yys_penaltymatchicon_iconarrowrightorange';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 16, 
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
