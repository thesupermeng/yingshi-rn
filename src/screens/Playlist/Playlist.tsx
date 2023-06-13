import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import MainHeader from '../../components/header/homeHeader';
import { useTheme } from '@react-navigation/native';
import { PlaylistStackScreenProps } from '../../types/navigationTypes';
import { useQuery } from '@tanstack/react-query';
import { VodPlaylistResponseType } from '../../types/ajaxTypes';
import VodPlaylist from '../../components/vod/vodPlaylist';
export default ({ navigation }: PlaylistStackScreenProps<'Playlist'>) => {
    const { textVariants, colors, spacing } = useTheme();
    const { data: playlists } = useQuery({
        queryKey: ["vodPlaylist"],
        queryFn: () =>
            fetch(`https://yingshi.tv/index.php/ajax/data?mid=3&page=2&limit=18&by=id`)
                .then(response => response.json())
                .then((json: VodPlaylistResponseType) => {
                    return Object.values(json.list)
                })
    });
    return (
        <ScreenContainer>
            <MainHeader headerStyle={{marginBottom: spacing.m }} logo={
                <Text style={{ ...textVariants.bigHeader, color: colors.primary }}>播单</Text>
            } navigator={navigation} />
            {
                playlists && playlists.map((playlist, idx) => (
                    <VodPlaylist playlist={playlist} key={`playlist-${idx}`} navigator={navigation}/>
                ))
            }
        </ScreenContainer>
    )
}