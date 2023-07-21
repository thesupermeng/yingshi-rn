import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    
    flex: 1,
    // marginHorizontal: 5,
    // marginTop: 100, // testing
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTextContainContainer: {
    backgroundColor: 'white',
    flex: 1,
    // marginHorizontal: 5,
    // marginTop: 100, // testing
    display: 'flex',
    // padding: 10,
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containContainer: {
    borderColor: '#D9D9D9',
    borderRadius: 8,
    borderWidth: 1,
    padding: 3,
    flex: 1,
    marginHorizontal: 8,
    // justifyContent: 'center',
    // alignItems: 'center',
    // display: 'flex',
  },
  leftArrow: {
    backgroundColor: 'white',
    borderColor: '#D9D9D9',
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    height: 15,
    width: 15,
    zIndex: 2,
    position: 'absolute',
    left: 0,
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{rotate: '-45deg'}],
  },

  rightArrow: {
    backgroundColor: 'white',
    borderColor: '#D9D9D9',
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    height: 15,
    width: 15,
    zIndex: 2,
    position: 'absolute',
    right: 0,
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{rotate: '135deg'}],
  },

  orangeNumber: {
    width: 21,
    height: 21,
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: '#FAC33D',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  orangeNumberHT: {
    // width: '100%',
    flex: 1,
    height: 21,
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: 10,
    // marginVertical: 30,
  },
  timeTitle: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 11,
    textAlign: 'center',
  },
  HTtimeTitle: {
    color: '#FAC33D',
    fontWeight: '500',
    fontSize: 11,
    textAlign: 'center',
  },
  timelineIcon: {
    height: '80%',
    width: '80%',
  },
});

export default styles;
