import {useNavigation, useTheme} from '@react-navigation/native';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {SuggestedVodType} from '../../types/ajaxTypes';
import {useAppDispatch} from '../../hooks/hooks';
import {playVod} from '../../redux/actions/vodActions';
import EmptyList from '../common/emptyList';
import {addSearchHistory} from '../../redux/actions/searchActions';

interface Props {
  searchResultList: Array<SuggestedVodType>;
  onItemSelect?(vod: string): any;
}

export default function SearchResultList({
  searchResultList,
  onItemSelect,
}: Props) {
  const {spacing, textVariants} = useTheme();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      {searchResultList.map((item, index) => (
        <TouchableOpacity
          key={`result-${index}`}
          style={{...styles.suggestion, marginBottom: spacing.l}}
          onPress={() => {
            dispatch(addSearchHistory(item.vod_name));
            if (onItemSelect) {
              onItemSelect(item.vod_name);
            }
          }}>
          <Text style={textVariants.body}>{item.vod_name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  suggestion: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  suggestionIndex: {
    marginRight: 10,
  },
  container: {
    display: 'flex',
    flex: 1,
  },
});
