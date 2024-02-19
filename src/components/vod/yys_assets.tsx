import { memo } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { yysPenaltyshoot } from '@type';
import VodImageCard from './yys_mail';
import FavoriteButton from '../button/yys_score_button';
import VodDescription from './yys_statistics';

interface yysIconarrowrightorangeStation {
  vod: yysPenaltyshoot;
  onPress?: any;
  params?: any[];
  btnStyle?: typeof StyleSheet;
  hideFavoriteButton?: boolean;
  initialFavoriteState?: boolean;
  index: number;
  imgOrientation?: 'horizontal' | 'vertical';
  vod_pic_list: string[]
}
function FavoriteVodCard({
  vod,
  onPress,
  btnStyle,
  hideFavoriteButton = false,
  initialFavoriteState = false,
  index,
  imgOrientation,
  vod_pic_list,
  ...params
}: yysIconarrowrightorangeStation) {
  const { colors, spacing, textVariants } = useTheme();
  return (
    <View style={{ ...styles.card, gap: spacing.s }}>
      <VodImageCard
        vod_img={vod.vod_pic}
        vodStyle={imgOrientation === 'horizontal' ? styles.imageHorizontal : styles.image}
        onPress={onPress}
        showInfo={vod.vod_remarks}
        index={index}
        vod_pic_list={vod.vod_pic_list}
      />
      <TouchableOpacity
        activeOpacity={1}
        style={{ ...styles.description, gap: spacing.xs }}
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
