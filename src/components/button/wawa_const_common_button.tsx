import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import FavoriteIcon from '@static/images/textPlayercommonIconsetting.svg';
import { useTheme } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '@hooks/wawa_root';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';
import { togglePlaylistFavorites } from '@redux/actions/wawa_indicator';
import { wawaWithCrown } from '@type/wawa_gradlew';
interface wawaAwayShow {
    playlist: wawaWithCrown,
    leftIcon?: React.ReactNode,
    buttonStyle?: typeof StyleSheet
}
export default function FavoritePlaylistButton({ leftIcon, buttonStyle, playlist }: wawaAwayShow) {
    const { colors, textVariants, spacing, icons } = useTheme();
    const favoritePlaylistSelector = useAppSelector(({ vodPlaylistReducer }: wawaIconsubssuccess) => vodPlaylistReducer)
    const dispatch = useAppDispatch();
    const isFavorited = favoritePlaylistSelector.playlistFavorites.some(x => x.topic_id === playlist.topic_id);
    return (
        <TouchableOpacity onPress={() => dispatch(togglePlaylistFavorites(playlist))}
            style={{ ...styles.btn, backgroundColor: isFavorited ? colors.primary : colors.playlistFavorite, ...buttonStyle }}>
            {
                leftIcon ?
                    leftIcon
                    : <FavoriteIcon width={icons.sizes.m} height={icons.sizes.m} style={{ color: isFavorited ? colors.primaryContrast : colors.muted, ...buttonStyle, }} />
            }
            <Text
                style={{ ...textVariants.small, color: isFavorited ? colors.primaryContrast : 'white', ...styles.text, paddingBottom: 3 }}>
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