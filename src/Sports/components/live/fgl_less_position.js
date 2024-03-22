import {StyleSheet} from 'react-native';
import {Colors} from '../../global/bp_grey_vietnam';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
    paddingBottom: 70,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.colorGreyText,
    marginBottom: 16,
  },
  thumbnail: {
    width: '100%',
    height: Dimensions.get('window').height * 0.25,
    resizeMode: 'stretch',
    marginBottom: 12,
  },
  desc: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    lineHeight: 28,
  },
  bottomDiv: {
    display: 'flex',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveImageContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    borderColor: Colors.colorPrimary,
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginBottom: 20,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  iconSaveImage: {
    width: 19,
    height: 19,
    resizeMode: 'stretch',
    marginEnd: 8,
  },
  saveImageText: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.colorPrimary,
  },
});

export default styles;
