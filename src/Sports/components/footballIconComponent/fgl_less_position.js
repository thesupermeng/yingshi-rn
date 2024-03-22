import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageDiv: {
    flexDirection: 'row',
    width: '20%',
    
    alignItems: 'center',
    marginBottom: 5,
  },
  imageStyle: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  imageText: {
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    marginLeft: 5,
    color: '#FFFFFF',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  mainContainer: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    height: '100%',
  },
});

export default styles;
