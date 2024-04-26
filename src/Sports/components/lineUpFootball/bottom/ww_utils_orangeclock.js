import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bottom: {
    
    flex: 1,
    paddingHorizontal: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  teamContainer: {
    display: 'flex',
    flexDirection: 'row',
    
    padding: 2,
  },
  imageContianer: {
    display: 'flex',
    justifyContent: 'center',
    
    paddingRight: 5,
  },
  imageLogo: {
    width: 28,
    height: 28,
    
  },
  formationContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 9,
    color: '#FFFFFF',
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontWeight: '400',
    paddingVertical: 1,
  },
});

export default styles;
