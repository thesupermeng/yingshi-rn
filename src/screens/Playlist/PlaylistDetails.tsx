import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import MainHeader from '../../components/header/homeHeader';
import { useTheme } from '@react-navigation/native';
import { PlaylistStackScreenProps } from '../../types/navigationTypes';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import FavoritePlaylistButton from '../../components/button/favoritePlaylistButton';
import FavoriteVodCard from '../../components/vod/favoriteVodCard';
import { playVod } from '../../redux/actions/vodActions';

export default ({ navigation }: PlaylistStackScreenProps<'PlaylistDetail'>) => {
    const { textVariants, colors, spacing } = useTheme();
    const playlistReducer = useAppSelector(({ vodPlaylistReducer }: RootState) => vodPlaylistReducer);
    const playlist = playlistReducer?.playlistDetails?.playlist;
    const dispatch = useAppDispatch();
    return (
        <ScreenContainer>
            <TitleWithBackButtonHeader title={playlist?.topic_name} headerStyle={{ marginBottom: spacing.s }} />
            {
                playlist &&
                <View gap={spacing.s}>
                    <View style={styles.header}>
                        <Text numberOfLines={3} style={{ ...textVariants.body, color: colors.text, flex: 1 }}>
                            {playlist?.topic_blurb}
                        </Text>
                        <FavoritePlaylistButton playlist={playlist} />
                    </View>
                    <Text style={{ ...textVariants.body }}>{`(共${playlist.vod_list.length}部)`}</Text>
                    {
                        playlist.vod_list.map((vod, idx) => (
                            <FavoriteVodCard hideFavoriteButton={true} key={idx} vod={vod} onPress={() => {
                                dispatch(playVod(vod));
                                navigation.navigate('播放', { vod_id: vod.vod_id });
                            }} />
                        ))
                    }
                </View>
            }
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});