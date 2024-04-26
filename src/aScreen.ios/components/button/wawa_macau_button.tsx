import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextStyle,
} from 'react-native';
import FavoriteIcon from '@static/images/textPlayercommonIconsetting.svg';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch } from '@hooks/wawa_root';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';
import {
  addVodToFavorites,
  removeVodFromFavorites,
} from '@redux/actions/wawa_indicator';
import { wawaSellProfileinactive } from '@type/wawa_gradlew';
interface wawaAwayShow {
  vod: wawaSellProfileinactive;
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
}: wawaAwayShow) {
  const { colors, textVariants, spacing, icons } = useTheme();
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
            dispatch(addVodToFavorites(vod));
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
