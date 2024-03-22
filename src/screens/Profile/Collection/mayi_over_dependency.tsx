import React, { useCallback } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../../components/container/mayi_save';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/mayi_redirect';
import { mayi_Libapminsightb } from '@redux/mayi_live_tumbnail';

import TitleWithBackButtonHeader from '../../../components/header/mayi_predictiondefault_header';
import { mayi_Full, mayi_Middleware } from '@redux/reducers/mayi_temp_holder';
import FavoriteVodCard from '../../../components/vod/mayi_brightness_form';
import CollectionHeader from '../../../components/header/mayi_bgvipxvod_shirt_header';
import { playVod } from '@redux/actions/mayi_goallogo';
import { mayi_EmptyGradle } from '@type/mayi_green';
import { RootStackScreenProps } from '@type/mayi_video_binddatas';
import EmptyIcon from '@static/images/executorHomeinactive.svg';
import EmptyList from '../../../components/common/mayi_unread';

type mayi_EventLibnms = {
    item: mayi_EmptyGradle
}

export default ({ navigation }: RootStackScreenProps<'合集收藏'>) => {
    const { colors, textVariants, icons } = useTheme()
    const dispatch = useAppDispatch();
    const favs: mayi_Full = useAppSelector(({ vodFavouritesReducer }: mayi_Libapminsightb) => vodFavouritesReducer);
    const favorites = favs.favorites;

    const renderItem = useCallback(({ item }: mayi_EventLibnms) => {
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