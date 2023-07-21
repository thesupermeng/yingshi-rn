import {StyleSheet} from 'react-native';

const commonHorizontalbar = {
  position: 'absolute',
  left: 0,
  right: 0,
  height: 60,
  display: 'flex',
  flex: 1,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const btnGroup = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  paddingHorizontal: 6,
};
export const styles = StyleSheet.create({
  top: {
    ...commonHorizontalbar,
    top: 0,
  },
  topControlGroup: {...btnGroup},
  bottom: {
    ...commonHorizontalbar,
    bottom: 0,
  },
  bottomControlGroup: {...btnGroup},
  imageBackground: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backContainer: {
    flex: 0,
    display: 'flex',
  },
  backIcon: {
    width: 10,
    height: 18,
  },
});
