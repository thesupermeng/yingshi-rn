import { Vod } from '@models';
import { useTheme } from '@react-navigation/native';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
  vod: Vod;
  vodStyle?: typeof StyleSheet;
}

export default function VodDescription({ vod, vodStyle }: Props) {
  const { textVariants, spacing, colors } = useTheme();
  return (
    <View style={{ gap: spacing.xs }}>
      <View style={{ ...styles.des, gap: spacing.s }}>
        {vod.vod_year && (
          <Text style={{ ...textVariants.subBody, color: colors.muted }}>
            {vod.vod_year}
          </Text>
        )}
        {/* <Text style={{...textVariants.body, color: colors.muted}}>{vod.vod_class}</Text> */}
        <Text
          style={{ ...textVariants.subBody, color: colors.muted, flex: 1 }}
          numberOfLines={1}>
          {vod.vod_class}
        </Text>
      </View>
      {vod?.playMode != 'adult' &&
        <View style={{ ...styles.des, gap: spacing.s }}>
          <Text style={{ ...textVariants.subBody, color: colors.muted }}>
            主演:
          </Text>
          <Text
            style={{ ...textVariants.subBody, flex: 1, color: colors.muted }}
            numberOfLines={1}>
            {vod.vod_actor}
          </Text>
        </View>
      }
      {/* <View style={styles.des}>
        <Text
          numberOfLines={2}
          style={{...textVariants.subBody, flex: 1, color: colors.muted}}>
          {
            vod.vod_blurb?.trim()
          }
        </Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  des: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
