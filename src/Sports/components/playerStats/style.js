import {StyleSheet, Dimensions} from 'react-native';

const dimensionWidth = Dimensions.get('window').width / 8;

const styles = StyleSheet.create({
  playerStatView: {
    flexDirection: 'row',
  },
  playerNameView: {
    width: '48%',
  },
  playerStatDetailView: {
    width: '50%',
  },
  playerStatDetailTabView: {
    height: 37,
    width: dimensionWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerStatDetailView1: {
    width: '100%',
    flexDirection: 'row',
  },
  playerNameTabView: {
    height: 37,
    //justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  playerNameText: {
    fontFamily: 'PingFang SC',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: '5%',
    width: 120,
    color: 'white'
  },
  playerTitleText: {
    color: '#FFFFFF',
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
  },
  shirtImage: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shirtText: {
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 9,
    fontFamily: 'PingFang SC',
    color: '#07C160',
  },
  shirtText1: {
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 9,
    fontFamily: 'PingFang SC',
    color: '#8C97A5',
  },
  ballImage: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 10,
    marginLeft: 'auto'
  },
});

export default styles;
