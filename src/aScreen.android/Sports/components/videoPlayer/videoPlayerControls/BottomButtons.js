import {StyleSheet, View, Text} from 'react-native';
import {RenderControl} from './Controls';

export const RecommendBtn = ({display, onPress}) => {
  if (!display) {
    return null;
  }
  return (
    <RenderControl style={styles.controlBtn} onPress={onPress}>
      <Text style={styles.controlBtnText}>推荐</Text>
    </RenderControl>
  );
};
export const StatisticBtn = ({display, onPress}) => {
  if (!display) {
    return null;
  }
  return (
    <RenderControl style={styles.controlBtn} onPress={onPress}>
      <Text style={styles.controlBtnText}>统计</Text>
    </RenderControl>
  );
};
export const SwitchSourceBtn = ({display, onPress}) => {
  if (!display) {
    return null;
  }
  return (
    <RenderControl style={styles.controlBtn} onPress={onPress}>
      <Text style={styles.controlBtnText}>切源</Text>
    </RenderControl>
  );
};

export const styles = StyleSheet.create({
  controlBtn: {
    zIndex: 0,
    flex: 0,
    color: 'white',
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'white',
    paddingVertical: 2,
    paddingHorizontal: 8,
    fontSize: 12,
    marginRight: 10,
  },
  controlBtnText: {
    color: 'white',
  },
});
