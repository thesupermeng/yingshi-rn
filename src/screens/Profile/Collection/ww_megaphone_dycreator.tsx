import React, { useCallback } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../../components/container/ww_collection';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/ww_catagory_neon';
import { wwEighteenShirt } from '@redux/ww_small';

import TitleWithBackButtonHeader from '../../../components/header/ww_react_predictionwin_header';
import { wwBang, wwMbjscommon } from '@redux/reducers/ww_shared';
import FavoriteVodCard from '../../../components/vod/ww_gifgoal';
import CollectionHeader from '../../../components/header/ww_abidetect_render_header';
import { playVod } from '@redux/actions/ww_floater';
import { wwControl } from '@type/ww_dycreator_result';
import { RootStackScreenProps } from '@type/ww_tempnodatagif_description';
import EmptyIcon from '@static/images/mimoModalIncident.svg';
import EmptyList from '../../../components/common/ww_reducer_libreact';

type wwCasting = {
    item: wwControl
}

export default ({ navigation }: RootStackScreenProps<'合集收藏'>) => {
    const { colors, textVariants, icons } = useTheme()
    const dispatch = useAppDispatch();
    const favs: wwBang = useAppSelector(({ vodFavouritesReducer }: wwEighteenShirt) => vodFavouritesReducer);
    const favorites = favs.favorites;

    const renderItem = useCallback(({ item }: wwCasting) => {
        return (
            <FavoriteVodCard vod={item} onPress={() => {
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