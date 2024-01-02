import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bottom: {
    // backgroundColor: 'pink',
    flex: 1,
    paddingHorizontal: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  teamContainer: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'blue',
    padding: 2,
  },
  imageContianer: {
    display: 'flex',
    justifyContent: 'center',
    // backgroundColor: 'gold',
    paddingRight: 5,
  },
  imageLogo: {
    width: 28,
    height: 28,
    // borderRadius: 28 / 2,
  },
  formationContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: 'green',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'gold',
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
