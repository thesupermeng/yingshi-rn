import {StyleSheet} from 'react-native';
import {Colors} from '../../global/yys_videocommon';

const styles = StyleSheet.create({
  outerContainer: {
    display: 'flex',
    flex: 1,
    paddingTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  container: {
    backgroundColor: '#1D2023',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: '96%',
    flex: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  tabNavigator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    height: 26,
    marginLeft: 2.5,
    marginRight : 2.5
  },
  textTabNavigator: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  tab: {
    
    paddingVertical: 15,
    flex: 1,
  },
});

export default styles;
