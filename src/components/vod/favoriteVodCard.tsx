import { memo } from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {VodType} from '../../types/ajaxTypes';
import VodImageCard from './vodImageCard';
import FavoriteButton from '../button/favoriteVodButton';
import VodDescription from './vodDescription';

interface Props {
  vod: VodType;
  onPress?: any;
  params?: any[];
  btnStyle?: typeof StyleSheet;
  hideFavoriteButton?: boolean;
  initialFavoriteState?: boolean;
  index: number;
  imgOrientation?: 'horizontal' | 'vertical'
}
function FavoriteVodCard({
  vod,
  onPress,
  btnStyle,
  hideFavoriteButton = false,
  initialFavoriteState = false,
  index, 
  imgOrientation,
  ...params
}: Props) {
  const {colors, spacing, textVariants} = useTheme();
  return (
    <View style={{...styles.card, gap: spacing.s}}>
      <VodImageCard
        vod_img={vod.vod_pic}
        vodStyle={ imgOrientation === 'horizontal' ? styles.imageHorizontal : styles.image}
        onPress={onPress}
        showInfo={vod.vod_remarks}
        index={index}
      />
      <TouchableOpacity
        activeOpacity={1}
        style={{...styles.description, gap: spacing.xs}}
        onPress={onPress}>
        <View
          style={{
            ...styles.description,
            gap: spacing.xs,
            justifyContent: 'center',
          }}>
          {hideFavoriteButton ? (
            <Text
              numberOfLines={1}
              style={{
                ...textVariants.body,
                color: colors.text,
                // flex: 1,
                flexShrink: 1,
                marginBottom: 10,
                fontWeight: '600',
              }}>
              {vod.vod_name}
            </Text>
          ) : (
            <FavoriteButton vod={vod} initialState={initialFavoriteState} />
          )}
          <VodDescription vod={vod} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default memo(FavoriteVodCard);

const styles = StyleSheet.create({
  card: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    flexGrow: 1,
    paddingTop: 4,
    paddingBottom: 8,
    flexShrink: 1,
  },
  image: {
   width: 120, 
   height: 180,
  },
  imageHorizontal: {
    width: 154,
    height: 87,
  }
});
