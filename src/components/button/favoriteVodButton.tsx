import { StyleSheet, TouchableOpacity, Text, View, TextStyle } from 'react-native';
import FavoriteIcon from '../../../static/images/favorite.svg';
import { useTheme } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { addVodToFavorites, removeVodFromFavorites } from '../../redux/actions/vodActions';
import { VodType } from '../../types/ajaxTypes';
interface Props {
    vod: VodType,
    onPress?: any,
    textColor?: string,
    params?: any[],
    leftIcon?: React.ReactNode,
    buttonStyle?: TextStyle,
    initialState?: boolean
}
export default function FavoriteVodButton({ onPress, leftIcon, textColor = '', buttonStyle, vod, initialState=false, ...params }: Props) {
    const { colors, textVariants, spacing, icons } = useTheme();
    const dispatch = useAppDispatch();
    return (
        <View style={styles.btn}>
            <Text numberOfLines={1} style={{
                ...textVariants.header,
                color: textColor ? textColor : colors.text,
                flex: 1
            }}>
                {vod.vod_name}
            </Text>
            <TouchableOpacity onPress={() => {
                if (initialState) {
                    dispatch(removeVodFromFavorites(vod))
                } else {
                    dispatch(addVodToFavorites(vod))
                }
            }} style={{ marginLeft: spacing.xs }}>
                {
                    leftIcon ?
                        leftIcon
                        : <FavoriteIcon width={icons.sizes.m} height={icons.sizes.m} color={colors.primary} />
                }
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        wordBreak: 'break-all',
        flexShrink: 1,
        marginRight: 4
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 1,
    }
});