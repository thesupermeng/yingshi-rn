import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import FavoriteIcon from '../../../static/images/favorite.svg';
import { useTheme } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { toggleVodFavorites } from '../../redux/actions/vodActions';
import { VodType } from '../../types/ajaxTypes';
interface Props {
    vod: VodType,
    onPress?: any,
    textColor?: string,
    params?: any[],
    leftIcon?: React.ReactNode,
    buttonStyle?: typeof StyleSheet
}
export default function FavoriteButton({ onPress, leftIcon, textColor = '', buttonStyle, vod, ...params }: Props) {
    const { colors, textVariants } = useTheme();
    const dispatch = useAppDispatch();
    return (
        <View style={styles.btn}>
            <View style={styles.title}>
                <Text numberOfLines={1} style={{
                    ...textVariants.header,
                    color: textColor ? textColor : colors.text,
                    flex: 1
                }}>
                    {vod?.vod_name}
                </Text>
            </View>
            <TouchableOpacity onPress={() => dispatch(toggleVodFavorites(vod))}>
                {
                    leftIcon ?
                    leftIcon
                    : <FavoriteIcon width={24} height={24} style={{ color: colors.primary, ...buttonStyle,}} />
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