import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextStyle,
} from 'react-native';
import { FavoriteSvg } from '@static';

import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks';
import { yysIconclosewhiteBaiduads } from '@redux';
import {
  addVodToFavorites,
  removeVodFromFavorites,
} from '@redux';
import { yysPenaltyshoot } from '@type';
import { screenModel } from '@type';
interface yysIconarrowrightorangeStation {
  vod: yysPenaltyshoot;
  onPress?: any;
  textColor?: string;
  params?: any[];
  leftIcon?: React.ReactNode;
  buttonStyle?: TextStyle;
  initialState?: boolean;
}
export default function FavoriteVodButton({
  onPress,
  leftIcon,
  textColor = '',
  buttonStyle,
  vod,
  initialState = false,
  ...params
}: yysIconarrowrightorangeStation) {
  const { colors, textVariants, spacing, icons } = useTheme();
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  )
  const { adultMode } = screenState
  const dispatch = useAppDispatch();
  return (
    <View style={styles.btn}>
      <Text
        numberOfLines={1}
        style={{
          ...textVariants.header,
          color: textColor ? textColor : colors.text,
          flex: 1,
        }}>
        {vod.vod_name}
      </Text>
      <TouchableOpacity
        onPress={() => {
          if (initialState) {
            dispatch(removeVodFromFavorites(vod));
          } else {
            const playMode = adultMode ? 'adult' : 'normal'
            dispatch(addVodToFavorites(vod, playMode));
          }
        }}
        style={{ marginLeft: spacing.xs }}>
        {leftIcon ? (
          leftIcon
        ) : (
          <FavoriteSvg
            width={icons.sizes.m}
            height={icons.sizes.m}
            color={colors.primary}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    wordBreak: 'break-all',
    flexShrink: 1,
    marginRight: 4,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 1,
  },
});
