import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    // flex: 1,
    // marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
  },
  verticalContainer: {
    backgroundColor: 'white',
    // flex: 1,
    // marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  imageStyle: {
    height: 15,
    width: 15,
    marginHorizontal: 5,
  },
  titleStyle: {
    fontWeight: '400',
    fontSize: 12,
    color: '#000000',
    textAlign: 'justify',
    marginRight: 30,
  },
  titleReasonStyle: {
    fontWeight: '400',
    fontSize: 12,
    color: '#8D8D8D',
    textAlign: 'justify',
    marginHorizontal: 30,
  },
});

export default styles;
