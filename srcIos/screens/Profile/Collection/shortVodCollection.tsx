import React, { useCallback } from 'react';
import { View, FlatList, Text, StyleSheet, Linking } from 'react-native';
import ScreenContainer from '../../../components/container/screenContainer';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { RootState } from '@redux/store';

import TitleWithBackButtonHeader from '../../../components/header/titleWithBackButtonHeader';
import { FavoriteVodReducerState, VodReducerState } from '@redux/reducers/vodReducer';
import FavoriteVodCard from '../../../components/vod/favoriteVodCard';
import CollectionHeader from '../../../components/header/myCollectionHeader';
import { playVod } from '@redux/actions/vodActions';
import { VodType } from '../../../types/ajaxTypes';
import { RootStackScreenProps } from '../../../types/navigationTypes';
import EmptyIcon from '../../../../static/images/empty.svg';
import EmptyList from '../../../components/common/emptyList';

type FlatListType = {
    item: VodType
}

export default ({ navigation }: RootStackScreenProps<'合集收藏'>) => {
    const { colors, textVariants, icons } = useTheme()
    const dispatch = useAppDispatch();
    const favs: FavoriteVodReducerState = useAppSelector(({ vodFavouritesReducer }: RootState) => vodFavouritesReducer);
    const favorites = favs.favorites;

    const renderItem = useCallback(({ item }: FlatListType) => {
        return (
            <FavoriteVodCard vod={item} onPress={() => {
                const url = `https://m.iqiyi.com/search.html?key=${item.vod_name}`
                dispatch(playVod(item));
                navigation.navigate('播放', {
                    vod_id: item.vod_id
                });
            }} />
        )
    }, [])

    return (
        <ScreenContainer>
            <TitleWithBackButtonHeader title='我的收藏' />
            <CollectionHeader route='合集收藏' navigator={navigation} />
            <View>
                {
                    favorites && favorites.length > 0 &&
                    <FlatList
                        data={favorites}
                        contentContainerStyle={{ paddingBottom: 120 }}
                        ListFooterComponent={<Text style={{ ...textVariants.body, color: colors.muted, ...styles.noMore }}>没有更多了</Text>}
                        renderItem={renderItem}
                    />
                }
            </View>
            {
                favorites && favorites.length === 0 &&
                <EmptyList description='暂无合集收藏' />
            }
        </ScreenContainer >
    )
}

const styles = StyleSheet.create({
    noMore: {
        textAlign: 'center',
        marginTop: 30
    }
});