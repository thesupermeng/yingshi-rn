import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextStyle,
} from 'react-native';
import FavoriteIcon from '@static/images/favorite.svg';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch } from '@hooks/hooks';
import { RootState } from '@redux/store';
import {
  addVodToFavorites,
  removeVodFromFavorites,
} from '@redux/actions/vodActions';
import { VodType } from '@type/ajaxTypes';
interface Props {
  vod: VodType;
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
}: Props) {
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
