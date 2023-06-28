import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import MainHeader from '../../components/header/homeHeader';
import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { VodPlaylistResponseType, VodTopicType } from '../../types/ajaxTypes';
import VodPlaylist from '../../components/playlist/vodPlaylist';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type FlatListType = {
    item: VodTopicType,
    index: number
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
    const BTN_COLORS = ['#FFCC12', '#F1377A', '#ED7445', '#7E9CEE', '#30AA55',];
    const { textVariants, colors, spacing } = useTheme();
    const { data: playlists } = useQuery({
        queryKey: ["vodPlaylist"],
        queryFn: () =>
            fetch(`https://testapi.yingshi.tv/topic/v1/topic`)
                .then(response => response.json())
                .then((json: VodPlaylistResponseType) => {
                    return Object.values(json.data.List)
                })
    });
    return (
        <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
            <MainHeader headerStyle={{
                marginBottom: spacing.m,
                paddingLeft: spacing.sideOffset,
                paddingRight: spacing.sideOffset
            }} logo={
                <Text style={{ ...textVariants.bigHeader, color: colors.text, fontSize: 22 }}>播单</Text>
            } navigator={navigation} />
            <FlatList
                data={playlists}
                renderItem={({ item, index }: FlatListType) =>
                    <VodPlaylist playlist={item} 
                    titleStyle={{color: BTN_COLORS[index % BTN_COLORS.length]}}/>
                }
            />
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingLeft: 20,
        paddingRight: 20
    },
});