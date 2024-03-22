import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#1D2023',
    
    
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
  },
  verticalContainer: {
    backgroundColor: '#1D2023',
    
    
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
    color: '#FFFFFF',
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
