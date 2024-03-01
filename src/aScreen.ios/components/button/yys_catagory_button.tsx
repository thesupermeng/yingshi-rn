import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import FavoriteIcon from '@static/images/popupReadAnythink.svg';
import { useTheme } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '@hooks/yys_frame';
import { yys_MintegralLibavdevice } from '@redux/yys_sport_shrink';
import { togglePlaylistFavorites } from '@redux/actions/yys_player_style';
import { yys_BrightnessCopy } from '@type/yys_libzeus';
interface yys_ConfigureUimanager {
    playlist: yys_BrightnessCopy,
    leftIcon?: React.ReactNode,
    buttonStyle?: typeof StyleSheet
}
export default function FavoritePlaylistButton({ leftIcon, buttonStyle, playlist }: yys_ConfigureUimanager) {
    const { colors, textVariants, spacing, icons } = useTheme();
    const favoritePlaylistSelector = useAppSelector(({ vodPlaylistReducer }: yys_MintegralLibavdevice) => vodPlaylistReducer)
    const dispatch = useAppDispatch();
    const isFavorited = favoritePlaylistSelector.playlistFavorites.some(x => x.topic_id === playlist.topic_id);
    return (
        <TouchableOpacity onPress={() => dispatch(togglePlaylistFavorites(playlist))}
            style={{ ...styles.btn, backgroundColor: isFavorited ? colors.primary : colors.playlistFavorite, ...buttonStyle }}>
            {
                leftIcon ?
                    leftIcon
                    : <FavoriteIcon width={icons.sizes.m} height={icons.sizes.m} style={{ color: isFavorited ? colors.background : colors.muted, ...buttonStyle, }} />
            }
            <Text
                style={{ ...textVariants.small, color: isFavorited ? colors.background : 'white', ...styles.text, paddingBottom: 3 }}>
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