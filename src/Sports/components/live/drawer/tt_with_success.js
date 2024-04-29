import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    position: 'absolute',
    zIndex: 9999,
    width: '100%',
    height: '35%',
    paddingHorizontal: 10,
    marginTop: 10,
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallImageLogo: {
    width: 15,
    margin: 5,
  },
  rightSmallContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  titleText: {
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
  },
  smallGreyText: {
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    color: '#808080',
  },
});

export default styles;
