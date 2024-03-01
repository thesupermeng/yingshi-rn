import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextStyle,
} from 'react-native';
import FavoriteIcon from '@static/images/popupReadAnythink.svg';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/yys_frame';
import { yys_MintegralLibavdevice } from '@redux/yys_sport_shrink';
import {
  addVodToFavorites,
  removeVodFromFavorites,
} from '@redux/actions/yys_player_style';
import { yys_Bing } from '@type/yys_libzeus';
import { screenModel } from '@type/yys_service_setting';
interface yys_ConfigureUimanager {
  vod: yys_Bing;
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
}: yys_ConfigureUimanager) {
  const { colors, textVariants, spacing, icons } = useTheme();
  const screenState: screenModel = useAppSelector(
    ({screenReducer}) => screenReducer
  )
  const {adultMode} = screenState
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
            const playMode = adultMode? 'adult' : 'normal'
            dispatch(addVodToFavorites(vod, playMode));
          }
        }}
        style={{ marginLeft: spacing.xs }}>
        {leftIcon ? (
          leftIcon
        ) : (
          <FavoriteIcon
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
