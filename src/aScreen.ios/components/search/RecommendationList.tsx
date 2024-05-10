import { useNavigation, useTheme } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, Text, Linking } from 'react-native';
import { useAppDispatch, useAppSelector } from '@hooks/hooks';
import { playVod } from '@redux/actions/vodActions';
import {
  addSearchHistory,
  clearSearchHistory,
} from '@redux/actions/searchActions';
import { Vod } from '@models';
import { CLangKey } from '@constants';
import FireIcon from "@static/images/fire.svg";

interface Props {
  recommendationList: Vod[];
}

type SuggestedVodItemType = {
  item: Vod;
  index: number;
};

export default function RecommendationList({ recommendationList }: Props) {
  const { colors, textVariants, spacing, icons } = useTheme();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <View style={{ gap: spacing.m, marginBottom: 60 }}>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <FireIcon />
        <Text style={{ ...textVariants.header }}>{CLangKey.trendingRank.tr()}</Text>
      </View>
      {recommendationList.map((item, index) => (
        <View
          key={`suggestion-${index}`}
          style={{
            ...styles.suggestion,
            marginBottom: spacing.m,
            gap: spacing.s,
          }}>
          <TouchableOpacity
            style={styles.suggestionName}
            onPress={() => {
              setTimeout(() => {
                //prevent show the keyword in screen before navigates
                dispatch(addSearchHistory(item.vod_name));
              }, 400)
              dispatch(playVod(item));
              navigation.navigate('播放IOS', { vod_id: item.vod_id });
            }}>
            <Text
              style={{
                color:
                  index === 0
                    ? colors.title
                    : index === 1
                      ? colors.recommendation2
                      : index === 2
                        ? colors.recommendation3
                        : colors.muted,
                ...styles.suggestionIndex,
              }}>
              {index + 1}
            </Text>
            <Text style={textVariants.body}>{item.vod_name}</Text>
          </TouchableOpacity>
          <Text style={{ ...textVariants.small, color: colors.muted }}>
            {item.type_name}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  suggestionName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  suggestionIndex: {
    marginRight: 20,
    fontWeight: "900",
  },
  suggestion: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
