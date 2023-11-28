import {StyleSheet} from 'react-native';
import {Colors} from '../../global/colors';

const styles = StyleSheet.create({
  defaultThumbnail: (width, height, marginEnd, borderRadius) => ({
    height: height,
    width: width,
    backgroundColor: Colors.colorLightGreyBg,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: marginEnd,
    borderRadius: borderRadius,
    overflow: 'hidden',
  }),
});

export default styles;
