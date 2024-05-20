import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import VodImageCard from './vodImageCard';
import { VodRecordType } from '@redux/reducers/vodReducer';
import { CLangKey } from '@constants';

interface Props {
  vod: VodRecordType;
  onPress: any;
  params?: any[];
  activeOpacity?: number;
  isEditing?: boolean;
}
export default function VodHistoryCard({
  vod,
  onPress,
  activeOpacity = 0.2,
  isEditing = false,
  ...params
}: Props) {
  const { colors, spacing, textVariants } = useTheme();
  return (
    <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress}>
      <View style={{ ...styles.card, gap: spacing.s }}>
        <VodImageCard
          vod_img={vod.vod_pic}
          vodStyle={styles.image}
          isDisabled={true}
          vod_pic_list={vod.vod_pic_list}
        />
        <View
          style={{
            ...styles.description,
            gap: spacing.xs,
            width: '100%',
          }}>
          <Text
            numberOfLines={2}
            style={{
              ...textVariants.body,
              ...styles.text,
              flex: 1,
              flexWrap: 'wrap',
              flexShrink: 1,
              paddingRight: 175,
            }}>
            {vod.vod_name}
          </Text>
          <Text
            style={{ ...textVariants.small, ...styles.text }}>{`${CLangKey.watchUntil.tr()} ${new Date(
              1000 * vod.timeWatched,
            )
              .toISOString()
              .substr(11, 8)}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  description: {
    flexGrow: 1,
    paddingTop: 2,
    paddingBottom: 2,
    display: 'flex',
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  image: {
    width: 154,
    height: 87,
  },
  text: {
    flexShrink: 1,
  },
});
