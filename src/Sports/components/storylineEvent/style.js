import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    
    display: 'flex',
    flex: 1,
    height: '100%',
    // paddingBottom: 100,
    // marginTop: 100, //Testing
  },
  lineContainer: {
    
    // left: '50%',
    // alignSelf: 'center',
    height: '100%',
    width: '100%',
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 5,
    position: 'absolute',
  },
  scrollViewContainer: {
    // height: '90%',
    flex: 1,
    padding: 40
    // width: '100%',
    // backgroundColor: 'green',
  },
  middleline: {
    position: 'relative',
    zIndex: -1,
    flex: 1,
    // paddingBottom: 10,
    // height: '100%',

    width: 2,

    backgroundColor: '#FAC33D',
    display: 'flex',
    justifyContent: 'space-between',
  },
  smallIcon: {
    width: 18,
    height: 18,
    margin: 10,
  },
  smallOrangeCircle: {
    width: 7,
    height: 7,
    backgroundColor: '#FAC33D',
    borderRadius: 20,
    alignSelf: 'center',
    // position: 'absolute',
  },
  switchContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '96%',
    alignItems: 'center',
    zIndex: 1,
  },
  switchStyle: {
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
  },
  switchTitle: {
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'center',
    color: 'white'
  },
});

export default styles;
