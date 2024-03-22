import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextStyle,
} from 'react-native';
import FavoriteIcon from '@static/images/backgroundOrientation.svg';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch } from '@hooks/kg_index';
import { PSmall } from '@redux/fj_prediction_thailand';
import {
  addVodToFavorites,
  removeVodFromFavorites,
} from '@redux/actions/xif_layout';
import { XVSScoreDark } from '@type/wpk_long';
interface XFillButton {
  vod: XVSScoreDark;
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
}: XFillButton) {
  const { colors, textVariants, spacing, icons } = useTheme();
  const dispatch = useAppDispatch();
  return (
    <View style={{
...styles.btn,

    }}>
      <Text
        numberOfLines={1}
        style={{
          ...textVariants.header,
          color: textColor ? textColor : colors.text,
          flex: 1,
        }}>
        {vod.vod_name}
      </Text>
      <TouchableOpacity activeOpacity={0.85}
        onPress={() => {
          if (initialState) {
            dispatch(removeVodFromFavorites(vod));
          } else {
            dispatch(addVodToFavorites(vod));
          }
        }}
        style={{ marginLeft: spacing.xs , 
          paddingVertical:5,
          paddingHorizontal:8,
          borderRadius:5,
          backgroundColor: initialState == true
          ? "#000000"
          : '#F3F3F3',}}>
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
