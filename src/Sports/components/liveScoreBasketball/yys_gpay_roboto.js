import {StyleSheet} from 'react-native';
import {Colors} from '../../global/yys_videocommon';

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
    
    
  },
  middle: {
    width: '65%',
    display: 'flex',
    
    flexDirection: 'row',
    justifyContent: 'center',
  },
  right: {
    width: '10%',
    
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
    color:  '#FFFFFF',
    textAlign: 'left',
    paddingVertical: 10,
  },
  textTeam: {
    fontFamily: 'PingFang SC',
    fontWeight: '500',
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'left',
    paddingVertical: 10,
  },
  textScoreHeader: {
    fontFamily: 'PingFang SC',
    fontWeight: '400',
    fontSize: 12,
    color:  '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 10,
  },
  textScore: {
    fontFamily: 'PingFang SC',
    fontWeight: '500',
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default styles;
