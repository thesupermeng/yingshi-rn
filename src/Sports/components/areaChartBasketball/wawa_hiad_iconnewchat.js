import {StyleSheet} from 'react-native';
import {Colors} from '../../global/wawa_armva';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 16, 
    paddingVertical: 16,
    borderBottomColor: Colors.colorLightGrey,
    borderBottomWidth: 5,
  },
  rowContent: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightContent: {
    flex: 9,
    display: 'flex',
    flexDirection: 'column',
  },
  minuteText: {
    fontSize: 9,
    fontWeight: '400',
    color: Colors.colorDarkGreyText,
  },
  teamIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  scoreDetailsTextContainer: {
    display: 'flex',
    paddingRight: 32,
  },
  scoreDetailsText: {
    fontSize: 9,
    fontWeight: '400',
    color: Colors.colorDarkGreyText,
  },
});

export default styles;
