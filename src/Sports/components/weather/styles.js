import {StyleSheet} from 'react-native';
import {Directions} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 3,
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  weatherType: {
    display: 'flex',
    flexDirection: 'column',
    flex: 6,
    padding: 5,
    alignContent: 'center',
    justifyContent: 'center',
    
  },
  venueContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingVertical: 3,
  },
  textVenue: {
    textAlign: 'left',
    fontFamily: 'PingFang SC',
    fontSize: 8,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#FFFFFF',
  },
  textIcon: {
    textAlign: 'left',
    fontFamily: 'PingFang SC',
    fontSize: 9,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#FFFFFF',
    // backgroundColor: 'blue',
  },
  weatherImageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    
  },
  weatherStat: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'center',
    flex: 7,
    // backgroundColor: 'brown',
  },

  // 指标组件 css
  indicatorContainer: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
    margin: 10,
    
  },
  indicatorImageContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: 'green',
  },
  textIndicator: {
    textAlign: 'left',
    fontFamily: 'PingFang SC',
    fontSize: 10,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#FFFFFF',
    // paddingHorizontal: 5,
  },
});

export default styles;
