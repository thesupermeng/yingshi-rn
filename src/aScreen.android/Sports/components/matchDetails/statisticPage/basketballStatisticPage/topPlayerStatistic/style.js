import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'PingFang SC',
    fontWeight: '600',
    fontSize: 16,
    fontStyle: 'normal',
    color: '#FFFFFF',
    marginLeft: 10,
    marginTop: 10,
  },
  statText: {
    fontFamily: 'PingFang SC',
    fontWeight: '400',
    fontSize: 10,
    fontStyle: 'normal',
    color: '#FFFFFF',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  statView: {
    height: 60,
    flexDirection: 'row',
    width: '100%',
  },
  playerDefaultImg: {
    height: 34,
    width: 34,
    borderRadius: 17,
    resizeMode: 'contain',
  },
  playerImg: {
    height: 34,
    width: 34,
    borderRadius: 17,
  },
  statViewLeft: {
    flexDirection: 'row',
    width: '40%',
    marginTop: 10,
  },
  statViewRight: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  playerNumText: {
    fontFamily: 'PingFang SC',
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#8C97A5',
    fontSize: 10,
  },
  playerNameText: {
    fontFamily: 'PingFang SC',
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#FFFFFF',
    fontSize: 12,
  },
  statisticView: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textViewLeft: {
    width: '70%',
    justifyContent: 'flex-end',
  },
  textViewRight: {
    alignItems: 'flex-end',
    width: '70%',
    justifyContent: 'flex-end',
  },
  playerImgView: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  playerHomeStatText: {
    fontFamily: 'PingFang SC',
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#FAC33D',
    fontSize: 10,
  },
  playerAwayStatText: {
    fontFamily: 'PingFang SC',
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#FF6835',
    fontSize: 10,
  },
  playerHomeStatView: {
    backgroundColor: '#FAC33D',
    width: 12,
  },
  playerAwayStatView: {
    backgroundColor: '#FF6835',
    width: 12,
  },
  playerHomeStat: {
    marginLeft: 2,
    marginRight: 2,
    alignItems: 'center',
  },
  playerAwayStat: {
    marginLeft: 2,
    marginRight: 2,
    alignItems: 'center',
  },
});

export default styles;
