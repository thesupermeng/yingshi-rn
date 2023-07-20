import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginTop: 15,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  sideContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
    // marginHorizontal: 10,
  },
  textContainer: {
    height: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orangeVerticalOval: {
    backgroundColor: '#FFA100',
    // flex: 1,
    height: 75,
    width: 34,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenVerticalOval: {
    backgroundColor: '#07C160',
    // flex: 1,
    height: 75,
    width: 34,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleBackground: {
    height: 75,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreTitle: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
  },
  scoreMark: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
  },
  centerscoreTitle: {
    fontSize: 9,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
  },
  centerscoreMark: {
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
  },
  centerTextContainer: {
    height: '80%',
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    
  },
});

export default styles;
