import {StyleSheet} from 'react-native';
// import {Colors} from '../../global/colors';
// import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
  teamImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  teamImageText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    marginTop: 'auto',
    color: 'white',
    fontSize: 13,
    fontFamily: '045-SSYiFeiTi',
  },
  teamsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 39,
    alignItems: 'center',
  },
  statView: {
    paddingLeft: 15,
    paddingRight: 15,
    width: '35%',
  },
  statViewRight: {
    paddingLeft: 15,
    paddingRight: 15,
    width: '35%',
    alignItems: 'flex-end',
  },
  statTitleView: {
    width: '30%',
    alignItems: 'center',
  },
  teamView: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
  },
  teamText: {
    fontWeight: '600',
    fontSize: 14,
    fontStyle: 'normal',
    fontFamily: 'PingFang SC',
    color: 'white',
    marginLeft: 5,
    marginRight: 5,
  },
  teamStatText: {
    fontWeight: '500',
    fontSize: 12,
    fontStyle: 'normal',
    fontFamily: 'PingFang SC',
    color: '#FFFFFF',
  },
  teamStatTitleText: {
    fontWeight: '400',
    fontSize: 12,
    fontStyle: 'normal',
    fontFamily: 'PingFang SC',
    color: '#8C97A5',
  },
});

export default styles;
