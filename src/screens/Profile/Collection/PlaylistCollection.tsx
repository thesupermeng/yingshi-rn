import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import ScreenContainer from '../../../components/container/screenContainer';
import { ProfileStackScreenProps } from '../../../types/navigationTypes';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { RootState } from '../../../redux/store';

import TitleWithBackButtonHeader from '../../../components/header/titleWithBackButtonHeader';
import { VodReducerState } from '../../../redux/reducers/vodReducer';
import FavoriteVodCard from '../../../components/vod/favoriteVodCard';
import CollectionHeader from '../../../components/header/myCollectionHeader';
import FavoritePlaylist from '../../../components/playlist/favoritePlaylist';
import { VodTopicType } from '../../../types/ajaxTypes';

type FlatListType = {
    item: VodTopicType
}

export default ({ navigation }: ProfileStackScreenProps<'播单收藏'>) => {
    const { colors, textVariants, icons, spacing } = useTheme()
    const dispatch = useAppDispatch();
    const vodPlaylistReducer = useAppSelector(({ vodPlaylistReducer }: RootState) => vodPlaylistReducer);
    const favorites = vodPlaylistReducer.playlistFavorites;
    return (
        <ScreenContainer>
            <TitleWithBackButtonHeader title='我的收藏' />
            <CollectionHeader route='播单收藏' navigator={navigation} />
            {
                favorites && <FlatList
                    data={favorites}
                    contentContainerStyle={{ paddingBottom: 30 }}
                    ListFooterComponent={<Text style={{ ...textVariants.body, color: colors.muted, ...styles.noMore }}>没有更多了</Text>}
                    renderItem={({ item }: FlatListType) => <FavoritePlaylist playlist={item} navigator={navigation} />}
                />
            }
        </ScreenContainer >
    )
}

const styles = StyleSheet.create({
    topNav: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    noMore: {
        textAlign: 'center',
        marginTop: 30
    }
});