import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import FavoriteIcon from '@static/images/backgroundOrientation.svg';
import { useTheme } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '@hooks/kg_index';
import { PSmall } from '@redux/fj_prediction_thailand';
import { togglePlaylistFavorites } from '@redux/actions/xif_layout';
import { RBEmojiEwarded } from '@type/wpk_long';
interface XFillButton {
    playlist: RBEmojiEwarded,
    leftIcon?: React.ReactNode,
    buttonStyle?: typeof StyleSheet
}
export default function FavoritePlaylistButton({ leftIcon, buttonStyle, playlist }: XFillButton) {
    const { colors, textVariants, spacing, icons } = useTheme();
    const favoritePlaylistSelector = useAppSelector(({ vodPlaylistReducer }: PSmall) => vodPlaylistReducer)
    const dispatch = useAppDispatch();
    const isFavorited = favoritePlaylistSelector.playlistFavorites.some(x => x.topic_id === playlist.topic_id);
    return (
        <TouchableOpacity activeOpacity={0.85} onPress={() => dispatch(togglePlaylistFavorites(playlist))}
            style={{ ...styles.btn, backgroundColor: isFavorited ? colors.primary : colors.playlistFavorite, ...buttonStyle }}>
            {
                leftIcon ?
                    leftIcon
                    : <FavoriteIcon width={icons.sizes.m} height={icons.sizes.m} style={{    color: isFavorited == true ?  "#FAC33D" : '#9C9C9C' , ...buttonStyle, }} />
            }
            <Text
                style={{ ...textVariants.small, ...styles.text , 
                color: isFavorited == true ?  "#FAC33D" : '#9C9C9C',
                }}>
                {isFavorited ? '已收藏了' : '收藏播单'}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        marginLeft: 4
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 1,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 5
    }
});