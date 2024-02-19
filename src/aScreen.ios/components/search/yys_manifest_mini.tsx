import React from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { yysFullLibcrashsdk } from '@type';
import { useAppDispatch } from '@hooks';
import { playVod } from '@redux';
import EmptyList from '../common/yys_benefit';
import { addSearchHistory } from '@redux';

interface yysIconarrowrightorangeStation {
  searchResultList: Array<yysFullLibcrashsdk>;
  onItemSelect?(vod: string): any;
  keyword: string;
}

export default function SearchResultList({
  searchResultList,
  onItemSelect,
  keyword,
}: yysIconarrowrightorangeStation) {
  const { spacing, textVariants, colors } = useTheme();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };
  const highlightText = (text: string, keyword: string) => {
    if (text == null) {
      return <Text style={textVariants.body} />;
    }

    
    const escapedKeyword = escapeRegExp(keyword);

    const parts = text.split(new RegExp(`(${escapedKeyword})`, 'gi'));
    return parts.map((part, index) =>
      
      new RegExp(escapedKeyword, 'i').test(part) ? (
        <Text key={index} style={{ ...textVariants.body, color: colors.primary }}>
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
          style={{ ...styles.suggestion, marginBottom: spacing.l }}
          onPress={() => {
            dispatch(addSearchHistory(item.vod_name));
            if (onItemSelect) {
              onItemSelect(item.vod_name);
            }
          }}>
          <Text style={{ ...textVariants.body, width: '100%' }} numberOfLines={1} ellipsizeMode="tail">
            {highlightText(item.vod_name, keyword)}
          </Text>
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
    color: '#FAC33D', 
  },
});
