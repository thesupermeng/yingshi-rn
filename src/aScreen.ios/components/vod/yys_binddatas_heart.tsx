import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {yys_Bing} from '@type/yys_libzeus';
import VodImageCard from './yys_render_orientation';
import FavoriteButton from '../button/yys_holder_button';
import VodDescription from './yys_unselected';

interface yys_ConfigureUimanager {
  vod: yys_Bing;
  onPress?: any;
  params?: any[];
  btnStyle?: typeof StyleSheet;
  hideFavoriteButton?: boolean;
  initialFavoriteState?: boolean;
  index: number;
}
export default function FavoriteVodCard({
  vod,
  onPress,
  btnStyle,
  hideFavoriteButton = false,
  initialFavoriteState = false,
  index, 
  ...params
}: yys_ConfigureUimanager) {
  const {colors, spacing, textVariants} = useTheme();
  return (
    <View style={{...styles.card, gap: spacing.s}}>
      <VodImageCard
        vod_img={vod.vod_pic}
        vodStyle={styles.image}
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
});
