import React from 'react';
import { View, FlatList, Text } from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import MainHeader from '../../components/header/homeHeader';
import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { VodPlaylistResponseType, VodTopicType } from '../../types/ajaxTypes';
import VodPlaylist from '../../components/playlist/vodPlaylist';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type FlatListType = {
    item: VodTopicType
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
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
            <FlatList
                data={playlists}   
                renderItem={({ item }: FlatListType) => <VodPlaylist playlist={item} /> }
            />
        </ScreenContainer>
    )
}