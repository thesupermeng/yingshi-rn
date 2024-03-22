import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../../../global/mayi_borderless_rocket';

const styles = StyleSheet.create({
  player: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
    width: 70,
  },
  topLeftContainer: {
    position: 'absolute',
    left: -5,
    top: -5,
  },
  topRightContainer: {
    position: 'absolute',
    right: -5,
    top: -5,
  },
  bottomLeftContainer: {
    position: 'absolute',
    left: -16,
    bottom: -2,
    width: 23,
  },
  bottomLeftFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    alignItems: 'center',
    
  },
  bottomRightContainer: {
    position: 'absolute',
    right: -20,
    bottom: -2,
    width: 30,
    
  },
  bottomRightFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'center',
    
  },
  imageIncident: {
    width: '100%',
    height: '100%',
  },

   
  assistContainer: {
    position: 'relative',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    width: 14,
    height: 14,
    borderRadius: 14 / 2,
  },
  assistCountContainer: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 11,
    height: 11,
    left: -7,
    top: -7,
    borderRadius: 11 / 2,
  },
  textNumberOfCount: {
    color: '#FFFFFF',
    fontSize: 7,
    textAlign: 'center',
    fontFamily: 'PingFang SC',
    fontWeight: '700',
  },

   
  subContainer: {
    position: 'relative',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    width: 14,
    height: 14,
    borderRadius: 14 / 2,
  },

   
  ownGoalContainer: {
    position: 'relative',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    width: 14,
    height: 14,
    borderRadius: 14 / 2,
  },

   
  cardContainer: {
    position: 'relative',
    width: 8,
    height: 12,
    marginHorizontal: 1,
  },

   
  ballContainer: {
    position: 'relative',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    width: 14,
    height: 14,
    borderRadius: 14 / 2,
    marginRight: 1,
  },
  ballCountContainer: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 11,
    height: 11,
    left: 4,
    top: -7,
    borderRadius: 11 / 2,
  },

   
  imageContainer: {
    position: 'relative',
  },
  imagePlayer: {
    
    
    
    width: (Platform.OS === 'ios' ? 48 : 36),
    height: (Platform.OS === 'ios' ? 48 : 36),
    borderRadius: 50 / 2,
    backgroundColor: '#FFFFFF',
  },
  playerRate: {
    backgroundColor: Colors.colorPlayerRateBaground,
    borderRadius: 20,
    width: 28,
    marginTop: 2,
    padding: 1,
  },
  textPlayerNumber: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 8,
    paddingTop: 2,
  },
  textPlayerName: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 8,
    width: '100%',
  },
  textPlayerRate: {
    textAlign: 'center',
    fontSize: 8,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});

export default styles;
