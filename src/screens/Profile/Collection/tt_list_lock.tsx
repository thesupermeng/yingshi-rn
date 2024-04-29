import React, { useCallback } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../../components/container/tt_backward';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/tt_spec_download';
import { ttOrange } from '@redux/tt_updates_bottom';

import TitleWithBackButtonHeader from '../../../components/header/tt_typing_tail_header';
import { ttTrashGradlew, ttStreaming } from '@redux/reducers/tt_configure_injury';
import FavoriteVodCard from '../../../components/vod/tt_internet';
import CollectionHeader from '../../../components/header/tt_suggestion_header';
import { playVod } from '@redux/actions/tt_activity';
import { ttAppsOther } from '@type/tt_line_borderless';
import { RootStackScreenProps } from '@type/tt_temperature';
import EmptyIcon from '@static/images/circlePlaySell.svg';
import EmptyList from '../../../components/common/tt_logo_desc';

type ttBing = {
    item: ttAppsOther
}

export default ({ navigation }: RootStackScreenProps<'合集收藏'>) => {
    const { colors, textVariants, icons } = useTheme()
    const dispatch = useAppDispatch();
    const favs: ttTrashGradlew = useAppSelector(({ vodFavouritesReducer }: ttOrange) => vodFavouritesReducer);
    const favorites = favs.favorites;

    const renderItem = useCallback(({ item }: ttBing) => {
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