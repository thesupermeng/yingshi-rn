import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import {IconNoInternet} from '../../../../../assets';
import {Colors} from '../../../../../global/ww_drag';

export const NoRecommend = ({onRefresh}) => {
  return (
    <View style={styles.container}>
      <Image
        source={IconNoInternet}
        style={{flex: 0, width: 100, height: 100}}
      />
      <Text style={styles.noMatchText}>暂无推荐比赛</Text>
      <TouchableHighlight
        style={styles.refreshContainer}
        onPress={() => onRefresh}>
        <Text style={styles.refreshText}>刷新一下</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  noMatchText: {
    fontSize: 15,
    color: '#CCCCCC',
    margin: 15,
  },
  refreshContainer: {
    borderRadius: 5,
    borderColor: Colors.colorPrimary,
    borderStyle: 'solid',
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    
  },
  refreshText: {
    color: Colors.colorPrimary,
  },
});
