import {StyleSheet} from 'react-native';
import {Colors} from '../../global/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderBottomColor: Colors.colorLightGrey,
    borderBottomWidth: 5,
  },
  left: {
    width: '25%',
    
    // paddingLeft: 10,
  },
  middle: {
    width: '65%',
    display: 'flex',
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  right: {
    width: '10%',
    // backgroundColor: 'brown',
  },
  scores: {
    width: 56,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  textTeamHeader: {
    fontFamily: 'PingFang SC',
    fontWeight: '400',
    fontSize: 12,
    color: Colors.colorDarkGreyText,
    textAlign: 'left',
    paddingVertical: 10,
  },
  textTeam: {
    fontFamily: 'PingFang SC',
    fontWeight: '500',
    fontSize: 12,
    color: '#000000',
    textAlign: 'left',
    paddingVertical: 10,
  },
  textScoreHeader: {
    fontFamily: 'PingFang SC',
    fontWeight: '400',
    fontSize: 12,
    color: Colors.colorDarkGreyText,
    textAlign: 'center',
    paddingVertical: 10,
  },
  textScore: {
    fontFamily: 'PingFang SC',
    fontWeight: '500',
    fontSize: 12,
    color: '#000000',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default styles;
