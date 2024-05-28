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
    color: '#FFFFFF',
    marginLeft: 5,
    marginRight: 5,
  },
  statTitleView: {
    alignItems: 'center',
    marginTop: 5,
  },
  statTitleText: {
    fontWeight: '400',
    fontSize: 13,
    fontStyle: 'normal',
    fontFamily: 'PingFang SC',
    color: '#FFFFFF',
  },
  statBar: {
    width: '70%',
    height: 5,
    backgroundColor: '#FF6835',
    marginBottom: 'auto',
    marginTop: 'auto',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderRadius: 4,
  },
  statTextView: {
    width: '15%',
  },
  statText: {
    fontWeight: '500',
    fontSize: 13,
    fontStyle: 'normal',
    fontFamily: 'PingFang SC',
    color: '#FFFFFF',
    marginLeft: 10,
    marginRight: 10
  },
  statTextViewRight: {
    width: '15%',
    alignItems: 'flex-end',
  },
  statView: {
    flexDirection: 'row',
  },
});

export default styles;
