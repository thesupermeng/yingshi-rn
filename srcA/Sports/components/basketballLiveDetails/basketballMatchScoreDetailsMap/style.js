import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    height: '100%',
    // marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  backgroundContiner: {
    width: 306,
    height: 340.75,
    display: 'flex',
    justifyContent: 'center',

    alignItems: 'center',
  },
  circleContainer: {
    // flex: 1,
    height: 70,
    width: 70,
  },
  centerContainer: {
    width: 20,
  },
  circleBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // height: 60,
    // width: 60,
  },
  middleContainer: {
    // flex: 1,
    display: 'flex',
    height: 220,
    width: 260,
    // backgroundColor: 'gold',
    alignSelf: 'center',
  },
  firstRowContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },
  secondRowContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  thirdRowContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'gold',
  },
  scoreTitle: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: 'white',
  },
});

export default styles;
