import React from 'react';
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
  keyword: string;
}

export default function SearchResultList({
  searchResultList,
  onItemSelect,
  keyword,
}: Props) {
  const {spacing, textVariants, colors} = useTheme();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const highlightText = (text: string, keyword: string) => {
    if (text === undefined){ 
      return <Text style={textVariants.body}>{text}</Text>;
    }

    const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
      return parts.map((part, index) =>
        part.toLowerCase() === keyword.toLowerCase() ? (
          <Text key={index} style={{...textVariants.body, color: colors.primary}}>
            {part}
          </Text>
        ) : (
          <Text key={index} style={textVariants.body}>
            {part}
          </Text>
        ),
      );

    
  };

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
          {highlightText(item.vod_name, keyword)}
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
  highlightColor: {
    color: '#FAC33D', // Change this color to your desired highlight color
  },
});
